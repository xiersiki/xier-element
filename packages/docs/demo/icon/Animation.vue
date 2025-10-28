<template>
    <div class="icon-demo">
        <h3>动画效果</h3>
        <p>支持多种动画效果，包括旋转、脉冲、弹跳等。</p>

        <div class="icon-animations">
            <div class="animation-item">
                <span>旋转:</span>
                <xr-icon icon="spinner" spin />
            </div>
            <div class="animation-item">
                <span>脉冲:</span>
                <xr-icon icon="spinner" spinPulse style="margin-left: 10px;" />
            </div>
            <div class="animation-item">
                <span>心跳:</span>
                <xr-icon icon="heart" beat style="margin-left: 10px;" />
            </div>
            <div class="animation-item">
                <span>弹跳:</span>
                <xr-icon icon="bell" bounce style="margin-left: 10px;" />
            </div>
            <div class="animation-item">
                <span>抖动:</span>
                <xr-icon icon="exclamation-triangle" shake style="margin-left: 10px;" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrIcon } from 'xier-element'
</script>

<style scoped>
.icon-demo {
    padding: 20px;
}

.icon-animations {
    margin-top: 10px;
}

.animation-item {
    display: flex;
    align-items: center;
    margin: 8px 0;
}

.animation-item span {
    width: 50px;
    font-size: 14px;
    color: #666;
}
</style>