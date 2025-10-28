<template>
    <div class="demo-wrapper">
        <div class="section">
            <h4>Medium 尺寸</h4>
            <div class="tag-group">
                <xr-tag size="medium">Medium</xr-tag>
                <xr-tag size="medium" type="primary">主要</xr-tag>
                <xr-tag size="medium" type="success">成功</xr-tag>
            </div>
        </div>

        <div class="section">
            <h4>Small 尺寸</h4>
            <div class="tag-group">
                <xr-tag size="small">Small</xr-tag>
                <xr-tag size="small" type="primary">主要</xr-tag>
                <xr-tag size="small" type="success">成功</xr-tag>
            </div>
        </div>

        <div class="section">
            <h4>Mini 尺寸</h4>
            <div class="tag-group">
                <xr-tag size="mini">Mini</xr-tag>
                <xr-tag size="mini" type="primary">主要</xr-tag>
                <xr-tag size="mini" type="success">成功</xr-tag>
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