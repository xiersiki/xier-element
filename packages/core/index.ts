// index.ts
import { makeInstaller } from "@xier-element/utils";
import components from "./components";
import '@xier-element/theme/index.css'

// installer是一个install函数，会注册所有传入的组件对象
const installer = makeInstaller(components);

export * from "@xier-element/components";
export default installer;