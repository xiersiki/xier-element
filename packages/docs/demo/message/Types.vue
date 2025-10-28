<template>
    <div class="message-demo">
        <h3>不同类型</h3>
        <p>Message 支持多种类型：success、warning、error、info。</p>

        <div class="message-buttons">
            <xr-button @click="showSuccess" type="success">成功消息</xr-button>
            <xr-button @click="showWarning" type="warning" style="margin-left: 10px;">警告消息</xr-button>
            <xr-button @click="showError" type="danger" style="margin-left: 10px;">错误消息</xr-button>
            <xr-button @click="showInfo" style="margin-left: 10px;">信息消息</xr-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrButton, XrMessage } from 'xier-element'

const showSuccess = () => {
    XrMessage.success('成功消息')
}

const showWarning = () => {
    XrMessage.warning('警告消息')
}

const showError = () => {
    XrMessage.error('错误消息')
}

const showInfo = () => {
    XrMessage('信息消息')
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