---
title: Popconfirm
description: Popconfirm 组件文档

next:
  link: /components/tag
  text: Tag 标签

prev:
  link: /components/message
  text: Message 全局消息
---

# Popconfirm 确认弹窗

用于在执行存在风险或不可逆操作前提供二次确认的浮层组件，通常包裹触发元素（如按钮）。

## 基本用法

将需要确认的触发器作为默认插槽放入 `xr-popconfirm`，在确认后触发 `confirm` 事件：

::: preview
demo-preview=../demo/popconfirm/Basic.vue
:::

## 自定义按钮

自定义确认和取消按钮的文本和类型：

::: preview
demo-preview=../demo/popconfirm/CustomButtons.vue
:::

## 自定义图标

自定义弹窗的图标和颜色：

::: preview
demo-preview=../demo/popconfirm/CustomIcon.vue
:::

## 禁用状态

设置 `disabled` 属性可以禁用弹窗触发：

::: preview
demo-preview=../demo/popconfirm/Disabled.vue
:::

## API

### Props

| 名称 | 说明 | 类型 | 默认 |
| ---- | ---- | ---- | ---- |
| title | 弹窗标题文本 | `string` | - |
| confirmButtonText | 确认按钮文本 | `string` | `"确认"` |
| cancelButtonText | 取消按钮文本 | `string` | `"取消"` |
| confirmButtonType | 确认按钮类型 | `ButtonType` | `"primary"` |
| cancelButtonType | 取消按钮类型 | `ButtonType` | - |
| icon | 左侧图标（支持类名或组件） | `string` | `"question-circle"` |
| iconColor | 图标颜色 | `string` | `"#f90"` |
| hideIcon | 是否隐藏图标 | `boolean` | `false` |
| disabled | 是否禁用触发器 | `boolean` | `false` |
| hideAfter | 自动隐藏延迟（ms），确认后自动隐藏 | `number` | `200` |
| width | 弹窗宽度，支持数字或字符串（例如 `320` 或 `320px`） | `number \| string` | `150` |

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| confirm | 点击确认后触发 | - |
| cancel | 点击取消后触发 | - |
| show | 弹窗显示时触发 | - |
| hide | 弹窗隐藏时触发 | - |

### Methods

| 方法名 | 说明 |
| ------ | ---- |
| show() | 手动显示弹窗 |
| hide() | 手动隐藏弹窗 |

## 说明

- `xr-popconfirm` 通常包裹触发节点（如按钮、链接等）。
- 可通过 Props 自定义按钮文本和样式，以适配不同场景下的确认交互。
- 基于 Tooltip 组件实现，支持所有 Tooltip 的触发方式。