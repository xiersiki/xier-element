<template>
    <div class="demo-wrapper">
        <div class="section">
            <h4>Light 主题</h4>
            <div class="tag-group">
                <xr-tag type="primary" effect="light">主要</xr-tag>
                <xr-tag type="success" effect="light">成功</xr-tag>
                <xr-tag type="info" effect="light">信息</xr-tag>
                <xr-tag type="warning" effect="light">警告</xr-tag>
                <xr-tag type="danger" effect="light">危险</xr-tag>
            </div>
        </div>

        <div class="section">
            <h4>Dark 主题</h4>
            <div class="tag-group">
                <xr-tag type="primary" effect="dark">主要</xr-tag>
                <xr-tag type="success" effect="dark">成功</xr-tag>
                <xr-tag type="info" effect="dark">信息</xr-tag>
                <xr-tag type="warning" effect="dark">警告</xr-tag>
                <xr-tag type="danger" effect="dark">危险</xr-tag>
            </div>
        </div>

        <div class="section">
            <h4>Plain 主题</h4>
            <div class="tag-group">
                <xr-tag type="primary" effect="plain">主要</xr-tag>
                <xr-tag type="success" effect="plain">成功</xr-tag>
                <xr-tag type="info" effect="plain">信息</xr-tag>
                <xr-tag type="warning" effect="plain">警告</xr-tag>
                <xr-tag type="danger" effect="plain">危险</xr-tag>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrTag } from 'xier-element'
</script>

<style scoped>
.demo-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.section {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.section h4 {
    margin: 0;
    font-size: 14px;
    color: #666;
}

.tag-group {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
}
</style>