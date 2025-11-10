---
title: Loading
description: Loading 组件文档

next:
  link: /components/message
  text: Message 全局消息

prev:
  link: /components/icon
  text: Icon 图标
---

# Loading 加载

在需要等待加载结果时显示的加载动画，为区域块或整个页面提供加载状态。

> Loading 支持指令式和服务式两种调用方式，可根据场景灵活选择。

## 基础用法

使用 `v-loading` 指令绑定 Boolean 值来控制加载状态：

::: preview
demo-preview=../demo/loading/Basic.vue
:::

## 全屏加载

使用 `fullscreen` 修饰符实现全屏加载效果：

::: preview
demo-preview=../demo/loading/Fullscreen.vue
:::

## 自定义文本

通过 `xr-loading-text` 属性自定义加载时显示的文本：

::: preview
demo-preview=../demo/loading/CustomText.vue
:::

## 自定义图标

通过 `xr-loading-spinner` 属性指定不同的 FontAwesome 图标：

::: preview
demo-preview=../demo/loading/CustomSpinner.vue
:::

## 自定义背景色

通过 `xr-loading-background` 属性自定义遮罩背景颜色：

::: preview
demo-preview=../demo/loading/CustomBackground.vue
:::

## 服务方式

除了指令方式，还可以通过服务方式调用 Loading：

::: preview
demo-preview=../demo/loading/Service.vue
:::

## Body 修饰符

使用 `body` 修饰符可以将 Loading 遮罩插入到 body 元素上：

::: preview
demo-preview=../demo/loading/Body.vue
:::

## Lock 修饰符

使用 `lock` 修饰符可以锁定屏幕滚动：

::: preview
demo-preview=../demo/loading/Lock.vue
:::

## 指令用法

### 指令修饰符

| 修饰符 | 说明 |
| ---- | ---- |
| fullscreen | 全屏加载 |
| body | 遮罩插入到 body 元素上 |
| lock | 锁定屏幕滚动 |

### 指令绑定值

| 类型 | 说明 |
| ---- | ---- |
| `boolean` | 是否显示 Loading 遮罩 |

### 指令属性

| 属性名 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| xr-loading-text | 加载时显示的文本 | `string` | - |
| xr-loading-spinner | 自定义加载图标（FontAwesome 图标名） | `string` | `'spinner'` |
| xr-loading-background | 遮罩背景色 | `string` | `'rgba(0, 0, 0, 0.5)'` |

## 服务用法

### XrLoadingService(options)

通过直接调用 XrLoadingService 函数来创建加载实例：

```typescript
import { XrLoadingService } from 'xier-element'

const loadingInstance = XrLoadingService(options)
```

### LoadingOptions

| 名称 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| target | Loading 需要覆盖的 DOM 节点，可传入 DOM 对象或字符串选择器 | `HTMLElement \| string` | `document.body` |
| body | 是否插入到 body 元素上 | `boolean` | `false` |
| fullscreen | 是否全屏加载 | `boolean` | `true` (当 target 为 document.body 时) |
| lock | 是否锁定屏幕滚动 | `boolean` | `false` |
| text | 加载时显示的文本 | `string` | - |
| spinner | 自定义加载图标，可以是 FontAwesome 图标名或 false（不显示图标） | `boolean \| string` | `'spinner'` |
| background | 遮罩背景色 | `string` | `'rgba(0, 0, 0, 0.5)'` |
| visible | 是否显示 Loading | `boolean` | `true` |
| zIndex | 自定义 z-index | `number` | - |
| beforeClose | 关闭前的回调，返回 false 可阻止关闭 | `() => boolean` | - |
| closed | 关闭后的回调 | `() => void` | - |

### LoadingInstance

XrLoadingService 函数返回一个 LoadingInstance 对象：

| 方法/属性 | 说明 | 类型 |
| ---- | ---- | ---- |
| close() | 关闭当前 Loading 实例 | `() => void` |
| setText(text: string) | 动态更新显示的文本 | `(text: string) => void` |
| visible | Loading 的显示状态（响应式） | `Ref<boolean>` |

## 使用示例

### 指令方式

```vue
<template>
  <!-- 基础用法 -->
  <div v-loading="loading">内容区域</div>

  <!-- 全屏加载 -->
  <div v-loading.fullscreen="loading"></div>

  <!-- 自定义文本和图标 -->
  <div 
    v-loading="loading"
    xr-loading-text="加载中..."
    xr-loading-spinner="circle-notch"
    xr-loading-background="rgba(0, 0, 0, 0.8)"
  >
    内容区域
  </div>

  <!-- 组合修饰符 -->
  <div v-loading.fullscreen.lock="loading"></div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
</script>
```

### 服务方式

```typescript
import { XrLoadingService } from 'xier-element'

// 基础用法
const loading = XrLoadingService({
  text: '加载中...',
})

setTimeout(() => {
  loading.close()
}, 3000)

// 全屏加载
const fullscreenLoading = XrLoadingService({
  fullscreen: true,
  lock: true,
  text: '正在处理...',
  background: 'rgba(0, 0, 0, 0.7)',
})

// 指定目标元素
const targetLoading = XrLoadingService({
  target: document.querySelector('#app'),
  text: '加载中...',
})

// 动态更新文本
const instance = XrLoadingService({ text: '正在连接...' })
setTimeout(() => {
  instance.setText('正在加载数据...')
}, 1000)
setTimeout(() => {
  instance.close()
}, 3000)

// 使用回调
XrLoadingService({
  text: '处理中...',
  beforeClose: () => {
    // 返回 false 可以阻止关闭
    return confirm('确定要关闭吗？')
  },
  closed: () => {
    console.log('Loading 已关闭')
  },
})
```

## 注意事项

- 指令方式适合与页面元素紧密绑定的场景，通过响应式数据自动控制显示/隐藏
- 服务方式适合需要手动控制或临时显示的场景，返回实例可以精确控制关闭时机
- 使用 `fullscreen` 时，Loading 会覆盖整个屏幕
- 使用 `lock` 修饰符可以防止背景滚动，通常与 `fullscreen` 一起使用
- `body` 修饰符会将 Loading 插入到 body 上，而不是当前元素
- 自定义 `spinner` 支持所有 FontAwesome solid 图标
- 服务方式创建的实例需要手动调用 `close()` 方法关闭
- 同一个目标元素多次调用会返回同一个实例，避免重复创建

::: tip
推荐在大部分场景使用指令方式（`v-loading`），它更符合 Vue 的声明式编程风格。服务方式适合在 JS 逻辑中需要精确控制的场景。
:::
