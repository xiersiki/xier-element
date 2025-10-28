---
title: Tag 标签
description: Tag 组件文档

next:
  link: /components/alert
  text: Alert 提示

prev:
  link: /components/icon
  text: Icon 图标
---
# Tag 标签

用于标记和选择的标签组件。

## 基本用法

展示不同类型的标签。

::: preview
demo-preview=../demo/tag/Basic.vue
:::

## 主题效果

Tag 组件提供了三种主题效果：`light`、`dark` 和 `plain`。

::: preview
demo-preview=../demo/tag/Types.vue
:::

## 尺寸规格

Tag 组件提供了三种尺寸：`medium`、`small` 和 `mini`。

::: preview
demo-preview=../demo/tag/Sizes.vue
:::

## 可关闭标签

设置 `closable` 属性可以显示关闭按钮，点击关闭按钮时会触发 `close` 事件。

::: preview
demo-preview=../demo/tag/Closable.vue
:::

## 自定义样式

通过 `color` 属性自定义标签颜色，`hit` 属性添加描边效果。

::: preview
demo-preview=../demo/tag/Custom.vue
:::

## API

### Props

| 名称 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| type | 标签类型 | `"primary" \| "success" \| "info" \| "warning" \| "danger"` | - |
| closable | 是否可关闭 | `boolean` | `false` |
| hit | 是否有描边边框 | `boolean` | `false` |
| color | 自定义颜色 | `string` | - |
| size | 标签大小 | `"medium" \| "small" \| "mini"` | `"medium"` |
| effect | 主题效果 | `"dark" \| "light" \| "plain"` | `"light"` |
| isTransitions | 是否启用过渡动画 | `boolean` | `true` |

### Events

| 名称 | 说明 | 参数 |
|------|------|------|
| click | 点击标签时触发 | `MouseEvent` |
| close | 点击关闭按钮时触发 | `MouseEvent` |

### Methods

| 名称 | 说明 | 参数 |
|------|------|------|
| ref | 获取标签元素的引用 | - | |