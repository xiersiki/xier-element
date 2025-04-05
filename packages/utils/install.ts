// 引入 Vue 的类型定义，用于定义插件和组件的类型
import type { App, Plugin } from "vue";

// 引入 lodash-es 的 each 方法，用于遍历组件数组
import { each } from "lodash-es";

// 定义一个类型 SFCWithInstall，用于扩展 Vue 组件类型，使其支持 Plugin 接口
type SFCWithInstall<T> = T & Plugin;

/**
 * 创建一个安装器函数，用于全局注册多个 Vue 插件
 * @param components - 一个包含多个 Vue 插件的数组
 * @returns 一个 install 函数，用于将所有插件注册到 Vue 应用中
 */
export function makeInstaller(components: Plugin[]) {
    const install = (app: App) =>
        each(components, (c) => {
            app.use(c); // 遍历组件数组，调用每个插件的 install 方法
        });

    return install; // 返回 install 函数
}

/**
 * 为单个组件添加 install 方法，使其可以通过 app.use() 注册
 * @param component - 需要包装的 Vue 组件
 * @returns 包装后的组件，支持通过 app.use() 注册
 */
export const withInstall = <T>(component: T) => {
    // 为组件添加 install 方法
    (component as SFCWithInstall<T>).install = (app: App) => {
        // 获取组件的名称，如果没有定义名称，则使用默认值 "UnnamedComponent"
        const name = (component as any)?.name || "UnnamedComponent";
        // 将组件注册到 Vue 应用中
        app.component(name, component as SFCWithInstall<T>);
    };
    // 返回包装后的组件
    return component as SFCWithInstall<T>;
};