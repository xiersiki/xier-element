<script setup lang='ts'>
import { computed, inject } from 'vue';
import type { CollapseItemProps } from './type';
import { COLLAPSE_CTX_KEY } from './constants';
import transitionEvents from './transitionEnent'
import { XrIcon } from '../Icon';
defineOptions({
    name: "XrCollapseItem"
})

const props = defineProps<CollapseItemProps>()
const slot = defineSlots()
const injectData = inject(COLLAPSE_CTX_KEY, void 0) // 获得数据和处理函数
console.log('injectData', injectData?.activeNames.value.includes(props.name));
const isActive = computed(() => {
    return injectData?.activeNames.value.includes(props.name)
})
function handleClick() {
    if (!props.disabled) {
        injectData?.handleItemClick(props.name)
    }
}
</script>

<template>
    <div class="xr-collapse-item">
        <div class="xr-collapse-item__header" :class="{ 'is-disabled': props.disabled }" @click="handleClick()">
            <span class="xr-collapse-item__title">
                <slot name="title">
                    {{ title }}
                </slot>
            </span>
            <xr-icon icon="angle-right" class="header-angle" :class="{ 'is-active': isActive }" />
        </div>
        <transition name="slide" v-on="transitionEvents">
            <div class="xr-collapse-item__wapper" v-show="isActive && !disabled">
                <div class="xr-collapse-item__content" :id="`item-content-${name}`">
                    <slot></slot>
                </div>
            </div>
        </transition>

    </div>
</template>

<style scoped lang="scss">
@use './style.scss';
</style>
