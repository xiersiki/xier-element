<script setup lang='ts'>
import { ref, computed } from 'vue';
import type { ButtonProps, ButtonEmits, ButtonInstance } from './type';
import { throttle } from "lodash-es";
import { XrIcon } from '../Icon';
defineOptions({
    name: 'XrButton'
})
const props = withDefaults(defineProps<ButtonProps>(), { //// 声明组件支持哪些 props
    tag: "button",  // 给 props 设置默认值
    nativeType: "button",
    useThrottle: true,
    throttleDuration: 500,
    type: "default"
})
const slots = defineSlots()
const _ref = ref<HTMLButtonElement>()
const emits = defineEmits<ButtonEmits>()
defineExpose<ButtonInstance>({
    ref: _ref
})
const handleBtnClick = (e: MouseEvent) => {
    emits("click", e);
};
const handleBtnCLickThrottle = throttle(handleBtnClick, props.throttleDuration, { trailing: false });
// icon相关
const iconStyle = computed(() => ({ marginRight: slots.default ? "6px" : "0px" }))
</script>

<template>
    <component :is="props.tag" :type="props.tag === 'button' ? props.nativeType : void 0" class="xr-button" :class="{
        [`xr-button--${props.type}`]: props.type,
        [`xr-button--${props.size}`]: props.size,
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-disabled': props.disabled,
        'is-loading': props.loading
    }" :disabled="props.disabled || props.loading ? true : void 0" ref="_ref"
        @click="(e: MouseEvent) => props.useThrottle ? handleBtnCLickThrottle(e) : handleBtnClick(e)"
        :autofocus="props.autofocus">
        <template v-if="props.loading">
            <slot name="loading">
                <xr-icon class="loading-icon" :icon="props.loadingIcon ?? 'spinner'" spin :style="iconStyle"></xr-icon>
            </slot>
        </template>
        <xr-icon v-if="!props.loading && props.icon" :icon="props.icon" :style="iconStyle" size="1x"></xr-icon>
        <slot></slot>
    </component>
</template>

<style scoped lang="scss">
@use './style.scss'
</style>
