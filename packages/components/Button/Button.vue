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
    <!-- 动态组件，根据 tag 属性决定渲染为哪种 HTML 元素 -->
    <!-- 仅在渲染为 button 元素时设置 type 属性 -->
    <component :is="props.tag" :type="tag === 'button' ? nativeType : void 0" class="xr-button" :class="{
        [`xr-button--${type}`]: type,
        [`xr-button--${size}`]: size,
        'is-plain': plain,// 
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading
    }" :disable="disabled || loading ? true : void 0" :ref="_ref"
        @click="(e: MouseEvent) => useThrottle ? handleBtnCLickThrottle(e) : handleBtnClick(e)" :autofocus="autofocus">
        <template v-if="loading">
            <slot name="loading">
                <xr-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" spin :style="iconStyle"></xr-icon>
            </slot>
        </template>
        <xr-icon v-if="!loading && icon" :icon="icon" :style="iconStyle" size="1x"></xr-icon>
        <slot>

        </slot>
    </component>
</template>

<style scoped lang="scss">
@use './style.scss'
</style>
