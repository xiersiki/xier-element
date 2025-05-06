<script setup lang='ts'>
defineOptions({
    name: 'XrDropdownMenu',
})
</script>
<template>
    <div class="xr-dropdown__menu">
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>
@use './style.scss'
</style>
