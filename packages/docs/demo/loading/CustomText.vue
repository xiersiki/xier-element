<script setup lang="ts">
import { XrButton } from 'xier-element'
import { ref } from 'vue'

const loading = ref(false)

const openLoading = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 3000)
}
</script>

<template>
    <div v-loading="loading" xr-loading-text="拼命加载中..."
        style="height: 200px; border: 1px solid #ebeef5; border-radius: 4px; padding: 20px;">
        <p>可以自定义加载时显示的文本</p>
        <xr-button @click="openLoading">显示自定义文本</xr-button>
    </div>
</template>
