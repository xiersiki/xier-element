import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { readdirSync } from "fs";
import { filter, includes, map, delay } from "lodash-es";
import hooks from "./hooksPlugin";
import shell from "shelljs";
import terser from "@rollup/plugin-terser";
function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";
const TRY_MOVE_STYLES_DELAY = 800 as const;

function moveStyles() {
  try {
    readdirSync("./dist/es/theme");
    shell.mv("./dist/es/theme", "./dist"); // 将theme移动到/dist下
  } catch (_) {
    console.log("es失败，重试");
    delay(moveStyles, TRY_MOVE_STYLES_DELAY);
  }
}
/**
 * Vite 构建配置
 * 这个配置文件专门用于生成 ES格式的库文件
 */
export default defineConfig({
  define: {
    DEV: JSON.stringify(isDev),
    PROD: JSON.stringify(isProd),
    TEST: JSON.stringify(isTest),
  },
  // 使用 Vue 插件处理 .vue 文件
  plugins: [
    vue() as any,
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types",
    }),
    hooks({
      rmFiles: ["./dist/es", "./dist/theme", "./dist/types"], // 删除掉上次打包的结果
      afterBuild: moveStyles, // 将这次打包的结果做结构调整
    }),

    terser({
      compress: {
        sequences: isProd,
        arguments: isProd,
        drop_console: isProd && ["log"],
        drop_debugger: isProd,
        passes: isProd ? 4 : 1,
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          "@PROD": JSON.stringify(isProd),
          "@TEST": JSON.stringify(isTest),
        },
      },
      format: {
        semicolons: false,
        shorthand: isProd,
        braces: !isProd,
        beautify: !isProd,
        comments: !isProd,
      },
      mangle: {
        toplevel: isProd,
        eval: isProd,
        keep_classnames: isDev,
        keep_fnames: isDev,
      },
    }),
  ],

  build: {
    minify: false,
    // 指定输出目录为 dist/umd
    outDir: "dist/es",
    cssCodeSplit: true, //
    // 库模式配置
    lib: {
      // 入口文件路径
      entry: resolve(__dirname, "./index.ts"),

      // 库的全局变量名，在 UMD/IIFE 格式中使用
      name: "XrElement",

      // 输出文件名称（不含扩展名）
      fileName: "index",

      // 只构建 es格式
      formats: ["es"],
    },

    // Rollup 特定选项
    rollupOptions: {
      // 外部依赖，不会被打包进库文件中
      // 这里将 Vue 标记为外部依赖，避免重复打包
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator",
      ],

      output: {
        // 自定义静态资源（如 CSS）的输出文件名
        assetFileNames: (assetInfo) => {
          // 如果是主样式文件，将其重命名为 index.css
          if (assetInfo.name === "style.css") return "index.css";
          if (
            assetInfo.type === "asset" &&
            /\.(css)$/i.test(assetInfo.name as string)
          ) {
            return "theme/[name].[ext]";
          }
          // 其他资源文件保持原名
          return assetInfo.name as string;
        },
        // 自定义动态导入的 chunk 文件名
        manualChunks(id) {
          // 如果是 node_modules 中的文件，将其分离到一个单独的 chunk 中
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (
            id.includes("/packages/utils") ||
            id.includes("plugin-vue:export-helper")
          ) {
            return "utils";
          }
          if (id.includes("packages/locale")) {
            return "locale";
          }
          for (const item of getDirectoriesSync("../components")) {
            if (includes(id, `/packages/components/${item}`)) return item;
          }
        },
      },
    },
  },
});
