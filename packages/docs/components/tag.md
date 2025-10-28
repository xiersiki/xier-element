# Tag 组件

Tag 是一个标签组件，用于标记和选择。

## 基本用法

显示不同类型的标签。

```vue
<template>
  <xr-tag>默认标签</xr-tag>
  <xr-tag type="success">成功标签</xr-tag>
  <xr-tag closable @close="handleClose">可关闭标签</xr-tag>
</template>

<script setup>
import { XrTag } from 'xier-element'

const handleClose = () => {
  console.log('标签关闭')
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| type | 标签类型 | `"primary" \| "success" \| "info" \| "warning" \| "danger"` | - |
| closable | 是否可关闭 | `boolean` | `false` |
| hit | 是否有描边 | `boolean` | `false` |
| color | 自定义颜色 | `string` | - |
| size | 标签大小 | `"medium" \| "small" \| "mini"` | `"medium"` |
| effect | 主题效果 | `"dark" \| "light" \| "plain"` | `"light"` |
| isTransitions | 是否启用过渡 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击事件 | `MouseEvent` |
| close | 关闭事件 | `MouseEvent` |

### Methods

| 方法名 | 说明 |
|--------|------|
| ref | 标签元素引用 |