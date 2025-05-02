<script setup lang='ts'>
import { inject } from 'vue';
import { DROPDOWN_PROPS,TOOLTIP_INSTANCE } from './constantkeys';
import type {TooltipInstance} from '../ToolTip/types'
import type {DropDownProps,DropDownItemProps} from './types'
const injectData = inject<DropDownProps>(DROPDOWN_PROPS)!
const tooltipInstance = inject<TooltipInstance>(TOOLTIP_INSTANCE)
const props = withDefaults(defineProps<DropDownItemProps>(),{
    disabled:false,
    divided:false
})
defineOptions({
    name: 'XrDropDownItem',
})
function handleClick(){
    console.log('tooltipInstance',tooltipInstance)
    if(injectData.hideOnClick){
        tooltipInstance?.hide()
    }
}
</script>

<template>
    <div class="xr-dropdown__item"
    @click="handleClick"
    :class="
    {
        'is-disabled':props.disabled,
        'divided-placeholder':props.divided
    }">
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>
@use './style.scss'
</style>