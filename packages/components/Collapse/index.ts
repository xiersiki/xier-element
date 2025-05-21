import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
import { withInstall } from '@xier-element/utils'

// 为组件添加 install 方法
export const XrCollapse = withInstall(Collapse)
export const XrCollapseItem = withInstall(CollapseItem)
// 将 CollapseItem 注册为 Collapse 的子组件
XrCollapse.Item = XrCollapseItem

export * from "./type"