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
    <div>
        <p>lock 修饰符可以锁定屏幕滚动</p>
        <xr-button @click="openLoading">显示 Lock 加载</xr-button>
        <div v-loading.fullscreen.lock="loading"></div>
    </div>
</template>
