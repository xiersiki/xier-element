---
title: Message
description: Message 组件文档

next:
  link: /components/popconfirm
  text: Popconfirm 确认弹窗

prev:
  link: /components/Dropdown
  text: Dropdown 下拉菜单
---

# Message 全局消息

用于在页面中以浮层方式展示短时消息提示，支持多种类型、自动关闭、关闭按钮和自定义时长。

> Message 为全局 API 风格（函数调用），无需在模板中注册组件实例。

## 基础用法

通过调用 `XrMessage` 显示消息：

::: preview
demo-preview=../demo/message/Basic.vue
:::

## 不同类型

Message 支持多种类型：success、warning、error、info。

::: preview
demo-preview=../demo/message/Types.vue
:::

## 自定义配置

通过配置对象自定义消息的显示时长、关闭按钮等。

::: preview
demo-preview=../demo/message/Config.vue
:::

## 居中显示

设置 `center` 属性使消息居中显示。

::: preview
demo-preview=../demo/message/Center.vue
:::

## 配置与 API

### MessageOptions

| 名称 | 说明 | 类型 | 默认 |
| ---- | ---- | ---- | ---- |
| message | 消息内容，可为字符串、VNode 或渲染函数 | `MessageContent` | - |
| type | 消息类型 | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| duration | 自动关闭时长（毫秒），为 0 则不自动关闭 | `number` | `3000` |
| showClose | 是否显示关闭按钮 | `boolean` | `false` |
| center | 是否居中显示（水平居中） | `boolean` | `false` |
| zIndex | 覆盖的 z-index 值 | `number` | - |

### MessageParams

消息参数可以直接传入字符串、VNode、或 MessageOptions 对象，库内部会进行适配。

### MessageHandler

调用返回的 handler 对象允许在代码中手动关闭该条消息：

| 方法 | 说明 |
| ---- | ---- |
| close() | 关闭当前消息 |

## 说明

- Message 是全局 API，通常通过导入后直接调用；无需在组件模板中声明。
- 若需同时控制多条消息，可在业务层保存返回的 handler 对象进行关闭。

::: tip
如果需要更复杂的消息样式或交互，可通过自定义 VNode 或渲染函数传入 `message` 字段，实现任意展示内容。
:::
