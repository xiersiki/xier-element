<template>
  <div class="popconfirm-demo">
    <h3>Popconfirm 确认弹窗示例</h3>
    <p>点击按钮查看确认弹窗。</p>

    <xr-popconfirm title="确定要删除这个项目吗？" description="此操作不可逆，请谨慎操作。" @confirm="handleConfirm" @cancel="handleCancel">
      <xr-button type="danger">删除项目</xr-button>
    </xr-popconfirm>

    <xr-popconfirm title="确认保存？" @confirm="handleSave" style="margin-left: 10px;">
      <xr-button type="primary">保存</xr-button>
    </xr-popconfirm>
  </div>
</template>

<script setup lang="ts">
import { XrButton, XrPopconfirm, XrMessage } from 'xier-element'

const handleConfirm = () => {
  XrMessage.success('项目已删除')
}

const handleCancel = () => {
  XrMessage.info('操作已取消')
}

const handleSave = () => {
  XrMessage.success('保存成功')
}
</script>

<style scoped>
.popconfirm-demo {
  padding: 20px;
}
</style>