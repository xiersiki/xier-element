<template>
  <div class="popconfirm-demo">
    <h3>Popconfirm 确认弹窗示例</h3>
    <p>点击按钮查看确认弹窗。</p>

    <x-popconfirm
      title="确定要删除这个项目吗？"
      description="此操作不可逆，请谨慎操作。"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <x-button type="danger">删除项目</x-button>
    </x-popconfirm>

    <x-popconfirm
      title="确认保存？"
      @confirm="handleSave"
      style="margin-left: 10px;"
    >
      <x-button type="primary">保存</x-button>
    </x-popconfirm>
  </div>
</template>

<script setup lang="ts">
import { XButton, XPopconfirm, XMessage } from 'xier-element'

const handleConfirm = () => {
  XMessage.success('项目已删除')
}

const handleCancel = () => {
  XMessage.info('操作已取消')
}

const handleSave = () => {
  XMessage.success('保存成功')
}
</script>

<style scoped>
.popconfirm-demo {
  padding: 20px;
}
</style>