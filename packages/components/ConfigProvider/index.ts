import ConfigProvider from "./ConfigProvider.vue";
import { withInstall } from '@xier-element/utils'

export const XrConfigProvider = withInstall(ConfigProvider)

export * from './types'
export * from './hooks'