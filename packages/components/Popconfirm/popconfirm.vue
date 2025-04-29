<script setup lang='ts'>
import type { popConfirmEmits, popConfirmInstance, popConfirmProps } from './type';
import XrButton from '../Button/Button.vue';
import XrIcon from '../Icon/icon.vue';
import type { TooltipInstance } from 'xier-element';
import { ref } from 'vue';
import XrTooltip from '../ToolTip/Tooltip.vue';
defineOptions({
    name: 'XrPopconfirm '
})
const props = withDefaults(defineProps<popConfirmProps>(), {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    hideIcon: false,
    disabled: false,
    icon: "question-circle",
    iconColor: "#f90",
    confirmButtonType: "primary",
    hideAfter: 200,
    width: 150,
})
const emits = defineEmits<popConfirmEmits>()
defineExpose<popConfirmInstance>({
    show,
    hide
})
const slots = defineSlots()
let tooltipRef = ref<TooltipInstance | null>(null)
function show() {
    tooltipRef.value?.show()
}
function hide() {
    tooltipRef.value?.hide()
}
function handleCancel() {
    hide()
    emits('cancel')
}
function handleConfirm() {
    hide()
    emits('confirm')
}
</script>

<template>
    <!-- 对tooltip组件做一个二次封装 -->
    <XrTooltip trigger="click" ref="tooltipRef" :disabled="disabled" :hideTimeout="hideAfter">
        <!-- 触发元素 -->
        <slot></slot>
        <!-- 弹出层内容 -->
        <template #content>
            <div class="xr-popconfirm" :style="{ width: width + 'px' }">
                <div class="xr-popconfirm__main">
                    <XrIcon :icon="icon" :color="iconColor" v-if="icon && !hideIcon"></XrIcon>
                    {{ title }}
                </div>
                <div class="xr-popconfirm__action">
                    <XrButton class="xr-popconfirm__cancel" :type="cancelButtonType" size="small" @click="handleCancel">
                        {{ cancelButtonText }}
                    </XrButton>
                    <XrButton class="xr-popconfirm__confirm" :type="confirmButtonType" size="small"
                        @click="handleConfirm"> {{ confirmButtonText }}
                    </XrButton>
                </div>
            </div>
        </template>
    </XrTooltip>
</template>

<style scoped lang="scss">
@use './style.scss'
</style>
