import Alert from './alert.vue'
import { withInstall, makeInstaller } from '@xier-element/utils'
console.log('Alert', Alert); // 检查是否为 undefined
export const XrAlert = withInstall(Alert)
// console.log('XrAlert', XrAlert);
