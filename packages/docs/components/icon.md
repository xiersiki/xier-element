---
title: Icon
description: Icon 组件文档

next:
  link: /components/message
  text: Message 全局消息

prev:
  link: /components/collapse
  text: Collapse 折叠面板
---

# Icon 图标

基于 FontAwesome 图标库，提供丰富的图标显示和动画效果。

## 基本用法

使用 `icon` 属性指定图标，支持 FontAwesome 的各种图标：

::: preview
demo-preview=../demo/icon/Basic.vue
:::

## 图标大小

通过 `size` 属性设置图标的大小：

::: preview
demo-preview=../demo/icon/Size.vue
:::

## 图标颜色

通过 `color` 属性自定义图标颜色：

::: preview
demo-preview=../demo/icon/Color.vue
:::

## 动画效果

支持多种动画效果，包括旋转、脉冲、弹跳等：

::: preview
demo-preview=../demo/icon/Animation.vue
:::

## 类型主题

通过 `type` 属性使用预定义的主题颜色：

::: preview
demo-preview=../demo/icon/Type.vue
:::

## API

### Props

| 名称 | 说明 | 类型 | 默认 |
| ---- | ---- | ---- | ---- |
| border | 是否显示边框 | `boolean` | `false` |
| fixedWidth | 是否固定宽度 | `boolean` | `false` |
| flip | 翻转方向 | `"horizontal" \| "vertical" \| "both"` | - |
| icon | 图标定义，支持字符串或 FontAwesome 图标对象 | `string \| object \| IconDefinition` | - |
| mask | 遮罩 | `object \| Array<string> \| string` | - |
| listItem | 是否为列表项 | `boolean` | `false` |
| pull | 浮动方向 | `"right" \| "left"` | - |
| pulse | 是否脉冲动画 | `boolean` | `false` |
| rotation | 旋转角度 | `90 \| 180 \| 270 \| "90" \| "180" \| "270"` | - |
| swapOpacity | 是否交换透明度 | `boolean` | `false` |
| size | 图标大小 | `"2xs" \| "xs" \| "sm" \| "lg" \| "xl" \| "2xl" \| "1x" \| "2x" \| ...` | - |
| spin | 是否旋转 | `boolean` | `false` |
| transform | 变换 | `object \| string` | - |
| symbol | 是否作为符号 | `boolean \| string` | `false` |
| title | 图标标题 | `string` | - |
| inverse | 是否反转颜色 | `boolean` | `false` |
| bounce | 是否弹跳动画 | `boolean` | `false` |
| shake | 是否抖动动画 | `boolean` | `false` |
| beat | 是否心跳动画 | `boolean` | `false` |
| fade | 是否淡入淡出动画 | `boolean` | `false` |
| beatFade | 是否心跳淡入淡出动画 | `boolean` | `false` |
| spinPulse | 是否脉冲旋转动画 | `boolean` | `false` |
| spinReverse | 是否反向旋转 | `boolean` | `false` |
| type | 图标类型，使用预定义主题色 | `"primary" \| "success" \| "warning" \| "danger" \| "info"` | - |
| color | 自定义图标颜色 | `string` | - |

## 说明

- Icon 组件基于 FontAwesome 图标库，支持所有 FontAwesome 的图标和属性
- 可以通过字符串形式指定图标名（如 `"home"`），组件会自动转换为对应的 FontAwesome 图标对象
- 支持丰富的动画效果，可以组合使用多个动画属性
- `type` 属性会覆盖 `color` 属性，使用预定义的主题颜色