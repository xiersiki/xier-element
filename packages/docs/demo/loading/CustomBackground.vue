<script setup lang="ts">
import { XrButton } from 'xier-element'
import { ref } from 'vue'

const loading1 = ref(false)
const loading2 = ref(false)

const showLoading1 = () => {
    loading1.value = true
    setTimeout(() => loading1.value = false, 3000)
}

const showLoading2 = () => {
    loading2.value = true
    setTimeout(() => loading2.value = false, 3000)
}
</script>

<template>
    <div style="display: flex; gap: 20px;">
        <div v-loading="loading1" xr-loading-background="rgba(122, 122, 122, 0.8)" xr-loading-text="深色背景"
            style="flex: 1; height: 200px; border: 1px solid #ebeef5; border-radius: 4px; padding: 20px;">
            <xr-button @click="showLoading1">深色背景</xr-button>
        </div>

        <div v-loading="loading2" xr-loading-background="rgba(255, 255, 255, 0.9)" xr-loading-text="浅色背景"
            style="flex: 1; height: 200px; border: 1px solid #ebeef5; border-radius: 4px; padding: 20px; background: #f5f5f5;">
            <xr-button @click="showLoading2">浅色背景</xr-button>
        </div>
    </div>
</template>

<style scoped>
/* 浅色背景的 loading 文字颜色 */
:deep(.xr-loading-text) {
    color: #333;
}
</style>
