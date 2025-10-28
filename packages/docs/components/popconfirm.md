# Popconfirm 组件

Popconfirm 是一个确认弹窗组件，用于在执行危险操作前进行确认。

## 基本用法

点击按钮触发确认弹窗。

```vue
<template>
  <xr-popconfirm title="确定删除吗？" @confirm="handleDelete">
    <xr-button>删除</xr-button>
  </xr-popconfirm>
</template>

<script setup>
import { XrPopconfirm, XrButton } from 'xier-element'

const handleDelete = () => {
  console.log('删除操作')
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| title | 确认标题 | `string` | - |
| confirmButtonText | 确认按钮文本 | `string` | - |
| cancelButtonText | 取消按钮文本 | `string` | - |
| confirmButtonType | 确认按钮类型 | `ButtonType` | - |
| cancelButtonType | 取消按钮类型 | `ButtonType` | - |
| icon | 图标 | `string` | - |
| iconColor | 图标颜色 | `string` | - |
| hideIcon | 是否隐藏图标 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| hideAfter | 自动隐藏延迟(ms) | `number` | - |
| width | 弹窗宽度 | `number \| string` | - |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| confirm | 确认事件 | - |
| cancel | 取消事件 | - |
| show | 显示事件 | - |
| hide | 隐藏事件 | - |

### Methods

| 方法名 | 说明 |
|--------|------|
| show() | 显示弹窗 |
| hide() | 隐藏弹窗 |