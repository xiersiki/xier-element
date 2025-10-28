<template>
  <div class="message-demo">
    <h3>Message 消息示例</h3>
    <p>点击按钮查看不同类型的消息提示。</p>

    <div class="message-buttons">
      <x-button @click="showSuccess">成功消息</x-button>
      <x-button @click="showError" type="danger" style="margin-left: 10px;">错误消息</x-button>
      <x-button @click="showWarning" type="warning" style="margin-left: 10px;">警告消息</x-button>
      <x-button @click="showInfo" style="margin-left: 10px;">信息消息</x-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XButton, XMessage } from 'xier-element'

const showSuccess = () => {
  XMessage.success('操作成功！')
}

const showError = () => {
  XMessage.error('操作失败！')
}

const showWarning = () => {
  XMessage.warning('警告信息！')
}

const showInfo = () => {
  XMessage.info('提示信息！')
}
</script>

<style scoped>
.message-demo {
  padding: 20px;
}

.message-buttons {
  margin-top: 10px;
}
</style>