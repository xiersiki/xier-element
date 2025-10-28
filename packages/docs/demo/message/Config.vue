<template>
    <div class="message-demo">
        <h3>自定义配置</h3>
        <p>通过配置对象自定义消息的显示时长、关闭按钮等。</p>

        <div class="message-buttons">
            <xr-button @click="showCustom">自定义消息</xr-button>
            <xr-button @click="showLong" style="margin-left: 10px;">长时显示</xr-button>
            <xr-button @click="showClosable" style="margin-left: 10px;">可关闭</xr-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrButton, XrMessage } from 'xier-element'

const showCustom = () => {
    XrMessage({
        message: '自定义消息',
        type: 'info',
        duration: 5000
    })
}

const showLong = () => {
    XrMessage({
        message: '这条消息会显示 5 秒',
        type: 'success',
        duration: 5000
    })
}

const showClosable = () => {
    XrMessage({
        message: '点击右上角关闭',
        type: 'warning',
        showClose: true
    })
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