// index.ts
import { makeInstaller } from "@xier-element/utils";
import components from "./components";
import '@xier-element/theme/index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"

// installer是一个install函数，会注册所有传入的组件对象
const installer = makeInstaller(components);

library.add(fas)

export * from "@xier-element/components";
export * from '@xier-element/locale'
export default installer;