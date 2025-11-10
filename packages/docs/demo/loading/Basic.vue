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
    <div v-loading="loading" style="height: 200px; border: 1px solid #ebeef5; border-radius: 4px; padding: 20px;">
        <p>这是一段需要加载的内容区域</p>
        <p>当加载状态为 true 时，会显示加载遮罩</p>
        <xr-button @click="openLoading">显示加载状态</xr-button>
    </div>
</template>
