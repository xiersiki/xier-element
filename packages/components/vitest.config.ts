// vitest.config.ts
/// <reference types="vitest" /> // 引用 Vitest 类型声明，为 IDE 提供智能提示

import { defineConfig } from "vite"; // 导入 Vite 的配置函数
import vue from "@vitejs/plugin-vue"; // 导入 Vue 插件，用于处理 .vue 单文件组件
import vueJsx from "@vitejs/plugin-vue-jsx"; // 导入 Vue JSX 插件，支持在测试中使用 JSX 语法

// https://vitejs.dev/config/ - Vite 配置文档链接
export default defineConfig({
    plugins: [vue(), vueJsx()], // 配置插件:
    // - vue(): 处理 .vue 单文件组件
    // - vueJsx(): 启用 JSX/TSX 支持
    test: {
        globals: true, // 启用全局测试 API，无需手动导入 describe, it, expect 等
        environment: "jsdom", // 使用 jsdom 作为测试环境，模拟浏览器 DOM 环境
    },
});

// "test": "vitest --coverage" - package.json 中的测试脚本命令，运行测试并生成覆盖率报告