<template>
    <div class="message-demo">
        <h3>基本消息</h3>
        <p>通过调用 <code>XrMessage</code> 显示消息。</p>

        <div class="message-buttons">
            <xr-button @click="showMessage">显示消息</xr-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrButton, XrMessage } from 'xier-element'

const showMessage = () => {
    XrMessage('这是一条消息')
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