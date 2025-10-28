declare module "@vitepress-demo-preview/component" {
  import { Component } from "vue";

  export const ElementPlusContainer: Component;
  export const AntDesignContainer: Component;
  export const NaiveUIContainer: Component;
}

declare module "@vitepress-demo-preview/plugin" {
  import { Plugin } from "vitepress";

  export function containerPreview(): Plugin;
  export function componentPreview(): Plugin;
}
