<script setup lang="ts">
import { XrButton } from 'xier-element'
import { ref } from 'vue'

const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)

const showLoading1 = () => {
    loading1.value = true
    setTimeout(() => loading1.value = false, 3000)
}

const showLoading2 = () => {
    loading2.value = true
    setTimeout(() => loading2.value = false, 3000)
}

const showLoading3 = () => {
    loading3.value = true
    setTimeout(() => loading3.value = false, 3000)
}
</script>

<template>
    <div style="display: flex; gap: 20px;">
        <div v-loading="loading1" xr-loading-spinner="circle-notch"
            style="flex: 1; height: 150px; border: 1px solid #ebeef5; border-radius: 4px; padding: 20px;">
            <xr-button @click="showLoading1" size="small">circle-notch</xr-button>
        </div>

        <div v-loading="loading2" xr-loading-spinner="sync"
            style="flex: 1; height: 150px; border: 1px solid #ebeef5; border-radius: 4px; padding: 20px;">
            <xr-button @click="showLoading2" size="small">sync</xr-button>
        </div>

        <div v-loading="loading3" xr-loading-spinner="cog"
            style="flex: 1; height: 150px; border: 1px solid #ebeef5; border-radius: 4px; padding: 20px;">
            <xr-button @click="showLoading3" size="small">cog</xr-button>
        </div>
    </div>
</template>
