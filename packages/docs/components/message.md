# Message 组件

Message 是一个全局消息提示组件，支持多种类型的消息显示、动画和堆叠布局。

## 基本用法

通过函数式调用显示消息。

```vue
<script setup>
import { XrMessage } from 'xier-element'

// 基本消息
XrMessage('这是一条消息')

// 不同类型
XrMessage.success('成功消息')
XrMessage.warning('警告消息')
XrMessage.error('错误消息')

// 自定义选项
XrMessage({
  message: '自定义消息',
  type: 'info',
  duration: 5000,
  showClose: true
})
</script>
```

## API

### MessageOptions

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| message | 消息内容 | `MessageContent` | - |
| type | 消息类型 | `"info" \| "success" \| "warning" \| "error"` | `"info"` |
| duration | 显示时长(ms) | `number` | `3000` |
| showClose | 是否显示关闭按钮 | `boolean` | `false` |
| center | 是否居中显示 | `boolean` | `false` |
| zIndex | 层级 | `number` | - |

### MessageParams

消息参数可以是字符串、VNode、函数或 MessageOptions 对象。

### MessageHandler

| 方法 | 说明 |
|------|------|
| close() | 关闭消息 |