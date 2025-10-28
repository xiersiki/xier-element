<template>
    <div class="demo-wrapper">
        <div class="section">
            <h4>自定义颜色</h4>
            <div class="tag-group">
                <xr-tag color="#f50">#f50</xr-tag>
                <xr-tag color="#2db7f5">#2db7f5</xr-tag>
                <xr-tag color="#87d068">#87d068</xr-tag>
                <xr-tag color="#108ee9">#108ee9</xr-tag>
            </div>
        </div>

        <div class="section">
            <h4>描边效果</h4>
            <div class="tag-group">
                <xr-tag hit>默认描边</xr-tag>
                <xr-tag type="primary" hit>主要描边</xr-tag>
                <xr-tag type="success" hit>成功描边</xr-tag>
                <xr-tag type="warning" hit>警告描边</xr-tag>
                <xr-tag type="danger" hit>危险描边</xr-tag>
            </div>
        </div>

        <div class="section">
            <h4>自定义颜色 + 描边</h4>
            <div class="tag-group">
                <xr-tag color="#f50" hit>橙色描边</xr-tag>
                <xr-tag color="#2db7f5" hit>蓝色描边</xr-tag>
                <xr-tag color="#87d068" hit>绿色描边</xr-tag>
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