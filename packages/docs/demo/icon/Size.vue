<template>
    <div class="icon-demo">
        <h3>图标大小</h3>
        <p>通过 size 属性设置图标的大小。</p>

        <div class="icon-sizes">
            <div class="size-item">
                <span>xs:</span>
                <xr-icon icon="home" size="xs" />
            </div>
            <div class="size-item">
                <span>sm:</span>
                <xr-icon icon="user" size="sm" />
            </div>
            <div class="size-item">
                <span>lg:</span>
                <xr-icon icon="cog" size="lg" />
            </div>
            <div class="size-item">
                <span>xl:</span>
                <xr-icon icon="search" size="xl" />
            </div>
            <div class="size-item">
                <span>2xl:</span>
                <xr-icon icon="heart" size="2xl" />
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

.icon-sizes {
    margin-top: 10px;
}

.size-item {
    display: flex;
    align-items: center;
    margin: 5px 0;
}

.size-item span {
    width: 30px;
    font-size: 14px;
    color: #666;
}
</style>