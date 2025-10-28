<template>
  <div class="tag-demo">
    <h3>Tag 标签示例</h3>
    <p>支持多种样式和交互的标签组件。</p>

    <div class="tag-examples">
      <x-tag>默认标签</x-tag>
      <x-tag type="primary" style="margin-left: 10px;">主要标签</x-tag>
      <x-tag type="success" style="margin-left: 10px;">成功标签</x-tag>
      <x-tag type="warning" style="margin-left: 10px;">警告标签</x-tag>
      <x-tag type="danger" style="margin-left: 10px;">危险标签</x-tag>
    </div>

    <div class="tag-sizes">
      <x-tag size="small">小标签</x-tag>
      <x-tag size="medium" style="margin-left: 10px;">中标签</x-tag>
      <x-tag size="large" style="margin-left: 10px;">大标签</x-tag>
    </div>

    <div class="tag-closable">
      <x-tag closable @close="handleClose">可关闭标签</x-tag>
      <x-tag closable type="primary" style="margin-left: 10px;" @close="handleClose">主要可关闭</x-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XTag, XMessage } from 'xier-element'

const handleClose = () => {
  XMessage.info('标签已关闭')
}
</script>

<style scoped>
.tag-demo {
  padding: 20px;
}

.tag-examples,
.tag-sizes,
.tag-closable {
  margin: 10px 0;
}
</style>