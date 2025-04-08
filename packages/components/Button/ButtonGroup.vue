<script setup lang='ts'>
import { provide, reactive, toRef } from 'vue'
import type { ButtonGroupProps } from './type'
import { BUTTON_GROUP_CTX_KEY } from './constants'
defineOptions({
    name: "XrButtonGroup"
})
const props = defineProps<ButtonGroupProps>()

provide(
    BUTTON_GROUP_CTX_KEY,
    reactive({
        size: toRef(props, "size"),
        type: toRef(props, "type"),
        disabled: toRef(props, "disabled"),
    })
);
</script>

<template>
    <div class="xr-button-group">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@use './style.scss'
</style>
