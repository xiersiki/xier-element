<template>
    <div class="message-demo">
        <h3>居中显示</h3>
        <p>设置 <code>center</code> 属性使消息居中显示。</p>

        <div class="message-buttons">
            <xr-button @click="showCenter">居中消息</xr-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrButton, XrMessage } from 'xier-element'

const showCenter = () => {
    XrMessage({
        message: '这条消息居中显示',
        type: 'info',
        center: true,
        duration: 3000
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