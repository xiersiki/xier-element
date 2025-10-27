import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { compression } from "vite-plugin-compression2"
import shell from "shelljs"
import { delay } from 'lodash-es'
const TRY_MOVE_STYLES_DELAY = 800 as const
import hooks from './hooksPlugin'
import terser from "@rollup/plugin-terser"

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

function moveStyles() {
    try {
        readFileSync('./dist/umd/index.css.gz')
        shell.cp('./dist/umd/index.css', "./dist/index.css")
    } catch (_) {
        delay(moveStyles, TRY_MOVE_STYLES_DELAY)
    }
}
/**
 * Vite 构建配置
 * 这个配置文件专门用于生成 UMD 格式的库文件
 */
export default defineConfig({
    define: {
        DEV: JSON.stringify(isDev),
        PROD: JSON.stringify(isProd),
        TEST: JSON.stringify(isTest)
    },
    // 使用 Vue 插件处理 .vue 文件
    plugins: [vue() as any, compression({
        include: /.(cjs|css)$/i
    }), hooks({
        rmFiles: ['./dist/umd', './dist/index.css'],
        afterBuild: moveStyles
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
        // 指定输出目录为 dist/umd
        outDir: 'dist/umd',

        // 库模式配置
        lib: {
            // 入口文件路径
            entry: resolve(__dirname, './index.ts'),

            // 库的全局变量名，在 UMD/IIFE 格式中使用
            name: 'XrElement',

            // 输出文件名称（不含扩展名）
            fileName: 'index',

            // 只构建 UMD 格式
            formats: ['umd']
        },

        // Rollup 特定选项
        rollupOptions: {
            // 外部依赖，不会被打包进库文件中
            // 这里将 Vue 标记为外部依赖，避免重复打包
            external: ["vue"],
            output: {
                // 指定导出模式为命名导出
                // 允许用户使用 import { Component } from 'library' 方式导入
                exports: "named",

                // 为外部依赖提供全局变量名映射
                // 当在非模块环境使用 UMD 包时，Vue 将从全局变量 'Vue' 获取
                globals: {
                    vue: "Vue"
                },
                // 自定义静态资源（如 CSS）的输出文件名
                assetFileNames: (assetInfo) => {
                    // 如果是主样式文件，将其重命名为 index.css
                    if (assetInfo.name === 'style.css') return "index.css"
                    // 其他资源文件保持原名
                    return assetInfo.name as string
                }
            }
        }
    }
})