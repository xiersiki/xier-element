<template>
  <div class="tag-demo">
    <h3>Tag 标签示例</h3>
    <p>支持多种样式和交互的标签组件。</p>

    <div class="tag-examples">
      <xr-tag>默认标签</xr-tag>
      <xr-tag type="primary" style="margin-left: 10px;">主要标签</xr-tag>
      <xr-tag type="success" style="margin-left: 10px;">成功标签</xr-tag>
      <xr-tag type="warning" style="margin-left: 10px;">警告标签</xr-tag>
      <xr-tag type="danger" style="margin-left: 10px;">危险标签</xr-tag>
    </div>

    <div class="tag-sizes">
      <xr-tag size="small">小标签</xr-tag>
      <xr-tag size="medium" style="margin-left: 10px;">中标签</xr-tag>
      <xr-tag size="mini" style="margin-left: 10px;">很小标签</xr-tag>
    </div>

    <div class="tag-closable">
      <xr-tag closable @close="handleClose">可关闭标签</xr-tag>
      <xr-tag closable type="primary" style="margin-left: 10px;" @close="handleClose">主要可关闭</xr-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XrTag, XrMessage } from 'xier-element'

const handleClose = () => {
  XrMessage.info('标签已关闭')
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