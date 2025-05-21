import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { readdirSync } from 'fs';
import { filter, includes, map } from 'lodash-es';

function getDirectoriesSync(basePath: string) {
    const entries = readdirSync(basePath, { withFileTypes: true });

    return map(
        filter(entries, (entry) => entry.isDirectory()),
        (entry) => entry.name
    );
}
/**
 * Vite 构建配置
 * 这个配置文件专门用于生成 ES格式的库文件
 */
export default defineConfig({
    // 使用 Vue 插件处理 .vue 文件
    plugins: [vue(), dts({
        tsconfigPath: '../../tsconfig.build.json',
        outDir: 'dist/types'
    }) as any],

    build: {
        // 指定输出目录为 dist/umd
        outDir: 'dist/es',

        // 库模式配置
        lib: {
            // 入口文件路径
            entry: resolve(__dirname, './index.ts'),

            // 库的全局变量名，在 UMD/IIFE 格式中使用
            name: 'XrElement',

            // 输出文件名称（不含扩展名）
            fileName: 'index',

            // 只构建 es格式
            formats: ['es']
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
                    if (assetInfo.name === 'style.css') return "index.css"
                    // 其他资源文件保持原名
                    return assetInfo.name as string
                },
                // 自定义动态导入的 chunk 文件名
                manualChunks(id) {
                    // 如果是 node_modules 中的文件，将其分离到一个单独的 chunk 中
                    if (id.includes('node_modules')) {
                        return "vendor"
                    }
                    if (id.includes('/packages/hooks')) {
                        return "hooks"
                    }
                    if (id.includes('/packages/utils')) {
                        return "uti ls"
                    }
                    if (id.includes('packages/locale')) {
                        return "locale"
                    }
                    for (const item of getDirectoriesSync("../components")) {
                        if (includes(id, `/packages/components/${item}`)) return item;
                    }
                }
            }
        }
    }
})