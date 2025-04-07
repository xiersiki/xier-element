import Tag from './tag.vue'
import { withInstall, makeInstaller } from '@xier-element/utils'

export const XrTag = withInstall(Tag)//为这个组件添加install方法，变成一个vue组件
export * from "./type"