<template>
  <div class="message-demo">
    <h3>Message 消息示例</h3>
    <p>点击按钮查看不同类型的消息提示。</p>

    <div class="message-buttons">
      <xr-button @click="showSuccess">成功消息</xr-button>
      <xr-button @click="showError" type="danger" style="margin-left: 10px;">错误消息</xr-button>
      <xr-button @click="showWarning" type="warning" style="margin-left: 10px;">警告消息</xr-button>
      <xr-button @click="showInfo" style="margin-left: 10px;">信息消息</xr-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XrButton, XrMessage } from 'xier-element'

const showSuccess = () => {
  XrMessage({ message: '这是一个消息.', type: 'info' })
}

const showError = () => {
  XrMessage({ message: '操作失败！', type: 'error' })
}

const showWarning = () => {
  XrMessage({ message: '警告信息！', type: 'warning' })
}

const showInfo = () => {
  XrMessage({ message: '提示信息！', type: 'info' })
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