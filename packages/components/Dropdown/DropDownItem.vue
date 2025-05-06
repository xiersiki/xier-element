<script setup lang='ts'>
import { computed, inject } from 'vue';
import { DROPDOWN_PROPS,DROPDOWN_CTX_KEY } from './constantkeys';
import type {DropDownProps,DropDownItemProps, DropdownContext} from './types'
const injectData = inject<DropDownProps>(DROPDOWN_PROPS)!
const dropDownContext = inject<DropdownContext>(DROPDOWN_CTX_KEY)!

const props = withDefaults(defineProps<DropDownItemProps>(),{
    disabled:false,
    divided:false
})
defineOptions({
    name: 'XrDropdownItem',
})
const szie = computed(()=>{
    return dropDownContext?.size.value
})
</script>

<template>
    <div class="xr-dropdown__item"
    @click="dropDownContext?.handleItemClick?.(props.command!)"
    :class="
    {
        'is-disabled':props.disabled,
        'divided-placeholder':props.divided,
        [`xr-dropdown__item--${szie}`]:szie,
    }">
    {{ props.label }}
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>
@use './style.scss'
</style>