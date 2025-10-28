<template>
    <div class="icon-demo">
        <h3>类型主题</h3>
        <p>通过 type 属性使用预定义的主题颜色。</p>

        <div class="icon-types">
            <xr-icon icon="check-circle" type="success" />
            <xr-icon icon="info-circle" type="info" style="margin-left: 10px;" />
            <xr-icon icon="exclamation-triangle" type="warning" style="margin-left: 10px;" />
            <xr-icon icon="times-circle" type="danger" style="margin-left: 10px;" />
            <xr-icon icon="cog" type="primary" style="margin-left: 10px;" />
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

.icon-types {
    margin-top: 10px;
}
</style>