import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xier-element",
  description: "基于Vue3 高仿 element-ui 组件库",
  appearance: false, // 关闭 darkMode @todo 深色模式完成后打开
  base: "/xier-element/",
  vite: {
    resolve: {
      alias: {
        "xier-element": new URL("../../../packages/core", import.meta.url)
          .pathname,
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "开始使用", link: "/get-started" },
      { text: "组件", link: "/components/button" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "指南",
        collapsed: false,
        items: [{ text: "快速开始", link: "/get-started" }],
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [
          { text: "Button 按钮", link: "components/button" },
          { text: "Collapse 折叠面板", link: "components/collapse" },
          { text: "Icon 图标", link: "components/icon" },
          { text: "Tag 标签", link: "components/tag" },
        ],
      },
      {
        text: "反馈组件",
        collapsed: false,
        items: [
          { text: "Alert 提示", link: "components/alert" },
          { text: "Tooltip 弹出", link: "components/tooltip" },
          { text: "Dropdown 下拉菜单", link: "components/dropdown" },
          { text: "Message 消息", link: "components/message" },
          { text: "Popconfirm 确认弹窗", link: "components/popconfirm" },
        ],
      },
      {
        text: "配置组件",
        collapsed: false,
        items: [
          {
            text: "ConfigProvider 全局配置",
            link: "components/configprovider",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "" }],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
