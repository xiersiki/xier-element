<template>
    <div class="demo-wrapper">
        <xr-tag>默认标签</xr-tag>
        <xr-tag type="primary">主要标签</xr-tag>
        <xr-tag type="success">成功标签</xr-tag>
        <xr-tag type="info">信息标签</xr-tag>
        <xr-tag type="warning">警告标签</xr-tag>
        <xr-tag type="danger">危险标签</xr-tag>
    </div>
</template>

<script setup lang="ts">
import { XrTag } from 'xier-element'
</script>

<style scoped>
.demo-wrapper {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
}
</style>