import Button from './Button.vue'
import { withInstall, makeInstaller } from '@xier-element/utils'

export const XrButton = withInstall(Button)//为这个组件添加install方法，变成一个vue组件