<script setup lang='ts'>
import Tooltip from '../ToolTip/Tooltip.vue';
import type { DropDownProps, DropDownEmits, DropDownInstance, DropDownItemProps } from './types';
import { DROPDOWN_PROPS, DROPDOWN_CTX_KEY } from './constantkeys';
import { computed, provide, ref, watch } from 'vue';
import DropDownItem from './DropDownItem.vue';
import XrButtonGroup from '../Button/ButtonGroup.vue';
import XrButton from '../Button/Button.vue';
import icon from '../Icon/icon.vue';
import useDisabledStyle from '../../hooks/useDisabledStyle';
defineOptions({
    name: 'XrDropdown',
})

const props = withDefaults(defineProps<DropDownProps>(), {
    splitButton: false,
    disabled: false,
    placement: 'bottom',
    trigger: 'hover',
    size: 'default',
    triggerKeys: () => ['Enter', 'Space'],
    hideOnClick: true,
    showTimeout: 150,
    hideTimeout: 150,
    role: 'menu',
    tabindex: 0,
    items: () => [] as DropDownItemProps[],
})
//依赖注入给到子组件
provide(DROPDOWN_PROPS, props)
const tooltip = ref()
function handleItemClick(command: string | number | object) {
    if (props.hideOnClick) {
        tooltip?.value.hide()
    }
    if (command) {
        emits('command', command)
    }

}
provide(DROPDOWN_CTX_KEY, {
    handleItemClick,
    size: computed(() => props.size),
}) // 这里传递下去的是tooltip的实例不是ref对象

defineExpose<DropDownInstance>({
    handleClose: () => {
        console.log('dropdown里面的handleClose方法调用')
        tooltip.value?.hide()
    },
    handleOpen: () => tooltip.value?.show()
})
const emits = defineEmits<DropDownEmits>()

const triggerNode = ref()
const virtualRef = ref();
watch(
    () => triggerNode.value?.ref,
    (newVal) => {
        if (newVal) {
            virtualRef.value = newVal; // 更新 virtualRef
        }
    }
);
function handleClick(event: MouseEvent) {
    emits('click', event); // 确保传递的参数类型为 MouseEvent
}
const size = computed(() => {
    if (props.splitButton) {
        if (!props.size) {
            return 'default'
        } else {
            return props.size
        }
    }
})
useDisabledStyle();
</script>

<template>
    <div class="xr-dropdown" :class="{ 'is-disabled': props.disabled }">
        <Tooltip ref="tooltip" :show-timeout="props.showTimeout" :hide-timeout="props.hideTimeout"
            :trigger="props.trigger" :placement="props.placement" :popper-options="props.popperOptions"
            :virtual-triggering="props.splitButton" :virtual-ref="virtualRef" :disabled="props.disabled">
            <!-- 默认插槽，放置的是触发节点 -->
            <template #default>
                <div class="xr-dropdown-trigger" v-if="!props.splitButton">
                    <slot />
                </div>
                <XrButtonGroup :type="props.type" :size="size" v-else>
                    <XrButton @click="handleClick">
                        <slot />
                    </XrButton>
                    <XrButton ref="triggerNode">
                        <icon icon="arrow-down"></icon>
                    </XrButton>
                </XrButtonGroup>
            </template>
            <!-- 下拉菜单的内容 -->
            <template #content>
                <div class="xr-dropdown__menu">
                    <slot name="dropdown">
                        <template v-for="item in items" :key="item.command">
                            <DropDownItem v-bind="item" />
                        </template>
                    </slot>
                </div>
            </template>
        </Tooltip>
    </div>
</template>

<style scoped lang='scss'>
@use './style.scss'
</style>`