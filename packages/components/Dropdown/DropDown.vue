<script setup lang='ts'>
import Tooltip from '../ToolTip/Tooltip.vue';
import type { DropDownProps,DropDownEmits,DropDownInstance } from './types';
import { KEY_CODE } from './constantkeys';
import { provide, ref } from 'vue';
defineOptions({
    name: 'XrDropDown',
})
const props = withDefaults(defineProps<DropDownProps>(),{
    splitButton:false,
    disabled:false,
    placement:'bottom',
    trigger:'hover',
    triggerKeys: ()=>['Enter', 'Space'],
    hideOnClick:true,
    showTimeout:150,
    hideTimeout:150,
    role:'menu',
    tabindex:0,
})
//依赖注入给到子组件
provide(KEY_CODE,props)
const tooltip = ref()
const emits = defineEmits<DropDownEmits>()
defineExpose<DropDownInstance>({
    handleClose(){
        tooltip.value.hide()
    },
    handleOpen() {
        tooltip.value.show()
    },
})

</script>

<template>
    <div class="Xr-DropDown">
        <Tooltip ref="tooltip">
            <!-- 默认插槽，放置的是触发节点 -->
            <template #default>
                <slot />
            </template>
            <!-- 下拉菜单的内容 -->
            <template #content>
                <slot name="dropdown">
                </slot>
            </template>
        </Tooltip>
    </div>
</template>

<style scoped lang='scss'></style>`