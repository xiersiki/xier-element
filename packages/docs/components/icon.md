# Icon 组件

Icon 组件基于 FontAwesome 图标库，提供丰富的图标显示和动画效果。

## 基本用法

使用 icon 属性指定图标，支持 FontAwesome 的各种图标。

```vue
<template>
  <xr-icon icon="user" />
  <xr-icon icon="spinner" spin />
  <xr-icon icon="heart" color="red" size="2x" />
</template>

<script setup>
import { XrIcon } from 'xier-element'
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| border | 是否显示边框 | `boolean` | `false` |
| fixedWidth | 是否固定宽度 | `boolean` | `false` |
| flip | 翻转方向 | `"horizontal" \| "vertical" \| "both"` | - |
| icon | 图标定义 | `object \| Array<string> \| string \| IconDefinition` | - |
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
| type | 图标类型 | `"primary" \| "success" \| "warning" \| "danger" \| "info"` | - |
| color | 图标颜色 | `string` | - |