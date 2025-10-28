# ConfigProvider 组件

ConfigProvider 是一个全局配置组件，用于提供应用的全局配置，如国际化、主题等。

## 基本用法

通过 ConfigProvider 包裹应用根组件，可以设置全局的语言和国际化消息。

```vue
<template>
  <xr-config-provider :locale="locale" :extends-i18n-msg="extendsI18nMsg">
    <app />
  </xr-config-provider>
</template>

<script setup>
import { XrConfigProvider } from 'xier-element'

const locale = 'zh-cn'
const extendsI18nMsg = {}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| locale | 语言 | `Language` | - |
| extendsI18nMsg | 扩展国际化消息 | `TranslatePair` | - |