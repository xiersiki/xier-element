<template>
    <div class="icon-demo">
        <h3>基本用法</h3>
        <p>使用 icon 属性指定图标，支持 FontAwesome 的各种图标。</p>

        <div class="icon-examples">
            <xr-icon icon="home" />
            <xr-icon icon="user" style="margin-left: 10px;" />
            <xr-icon icon="cog" style="margin-left: 10px;" />
            <xr-icon icon="search" style="margin-left: 10px;" />
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

.icon-examples {
    margin-top: 10px;
}
</style>