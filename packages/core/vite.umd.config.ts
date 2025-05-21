import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

/**
 * Vite 构建配置
 * 这个配置文件专门用于生成 UMD 格式的库文件
 */
export default defineConfig({
    // 使用 Vue 插件处理 .vue 文件
    plugins: [vue()],

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
                    if (assetInfo.name === 'style.scss') return "index.scss"
                    // 其他资源文件保持原名
                    return assetInfo.name as string
                }
            }
        }
    }
})