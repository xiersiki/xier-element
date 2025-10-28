<template>
    <div class="icon-demo">
        <h3>图标颜色</h3>
        <p>通过 color 属性自定义图标颜色。</p>

        <div class="icon-colors">
            <xr-icon icon="heart" color="red" />
            <xr-icon icon="star" color="gold" style="margin-left: 10px;" />
            <xr-icon icon="check" color="green" style="margin-left: 10px;" />
            <xr-icon icon="times" color="gray" style="margin-left: 10px;" />
            <xr-icon icon="info" color="blue" style="margin-left: 10px;" />
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

.icon-colors {
    margin-top: 10px;
}
</style>