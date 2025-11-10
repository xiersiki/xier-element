<script setup lang="ts">
import { XrButton, XrLoadingService } from 'xier-element'

const openLoading = () => {
    const loading = XrLoadingService({
        text: '正在加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
    })

    setTimeout(() => {
        loading.close()
    }, 3000)
}

const openFullscreen = () => {
    const loading = XrLoadingService({
        text: '全屏加载中...',
        fullscreen: true,
        lock: true,
    })

    setTimeout(() => {
        loading.close()
    }, 3000)
}

const openWithTarget = () => {
    const loading = XrLoadingService({
        target: '#loading-target',
        text: '目标区域加载中...',
    })

    setTimeout(() => {
        loading.close()
    }, 3000)
}
</script>

<template>
    <div style="display: flex; gap: 10px; flex-direction: column; align-items: flex-start;">
        <xr-button @click="openLoading">服务方式调用</xr-button>
        <xr-button @click="openFullscreen" type="primary">全屏加载</xr-button>

        <div id="loading-target"
            style="width: 100%; height: 200px; border: 1px solid #ebeef5; border-radius: 4px; padding: 20px; margin-top: 10px;">
            <p>指定目标区域</p>
            <xr-button @click="openWithTarget" type="success">加载此区域</xr-button>
        </div>
    </div>
</template>
