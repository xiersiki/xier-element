<script setup lang="ts">
import { XrButton } from 'xier-element'
import { ref } from 'vue'

const loading = ref(false)

const openFullscreen = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 3000)
}
</script>

<template>
    <div>
        <xr-button @click="openFullscreen">显示全屏加载</xr-button>
        <div v-loading.fullscreen="loading"></div>
    </div>
</template>
