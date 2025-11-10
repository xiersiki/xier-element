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
    <div style="border: 1px solid #ebeef5; border-radius: 4px; padding: 20px;">
        <p>body 修饰符可以控制 Loading 遮罩插入到 body 元素上</p>
        <div v-loading.body="loading" style="height: 100px;">
            <xr-button @click="openLoading">body 修饰符</xr-button>
        </div>
    </div>
</template>
