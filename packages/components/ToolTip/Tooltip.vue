<script setup lang='ts'>
import { createPopper, type Instance } from '@popperjs/core';
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types';
import { computed, onUnmounted, ref, watch, watchEffect, type Ref } from 'vue';
import { debounce, type DebouncedFunc, bind } from 'lodash-es'
import type { ButtonInstance } from '../Button/type';
import useEventsToTriggerNode from './useEventTriggerNode';
import useClickOutside from '../../hooks/useClickOutside';
// 关于虚拟触发节点的实现
interface _TooltipProps extends TooltipProps {
    virtualRef?: HTMLElement | ButtonInstance | void
    virtualTriggering?: boolean
}

defineOptions({
    name: 'XrTooltip'
})
const props = withDefaults(defineProps<_TooltipProps>(), {
    placement: 'bottom',
    trigger: 'hover',
    transition: 'fade',
    showTimeout: 0,
    hideTimeout: 200
})
const emits = defineEmits<TooltipEmits>()
const visible = ref(false)
const events: Ref<Record<string, EventListener>> = ref({})
const outerEvents: Ref<Record<string, EventListener>> = ref({})
const dropdownEvents: Ref<Record<string, EventListener>> = ref({})

const containerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
const _triggerNode = ref<HTMLElement>()

const triggerNode = computed(() => {
    if (props.virtualTriggering) {
        // console.log('props.virtualRef',props.virtualRef);
        return (props.virtualRef as HTMLElement) ?? _triggerNode.value
    } else {
        // console.log('triggerNode.value',triggerNode.value);
        return _triggerNode.value as HTMLElement
    }
})

const popperOptions = computed(() => ({
    placement: props.placement,
    modifiers: [
        {
            name: "offset",
            options: {
                offset: [0, 9],
            },
        },
    ],
    ...props.popperOptions,
}));
// 我们希望在触发条件为hover的时候能有一个延时的效果，所及计算了一个打开时延和关闭时延
const openDelay = computed(() => props.trigger === 'hover' ? props.showTimeout : 0)
const closeDelay = computed(() => props.trigger === 'hover' ? props.hideTimeout : 0)
// 定于防抖的打开弹层和关闭弹层的函数
let openDebounce: DebouncedFunc<() => void> | void
let closeDebounce: DebouncedFunc<() => void> | void



/**
 * 下面两个函数的作用是执行延时打开或者关闭tooltip
 * 因为用了防抖，真正的函数会在一定时间后执行，所以我们在执行打开之前要先把关闭操作取消掉
 * 防止tooltip刚打开就被关闭的情况也就是闪烁的情况
 */
function openFinal() {
    console.log('打开弹出层');
    closeDebounce?.cancel();
    openDebounce?.()
}
function closeFinal() {
    openDebounce?.cancel();
    closeDebounce?.()
}

/**
 * 改变tooltips的可见性，改变之后tooltips组件要向外emits一个可见性改变的事件
 * @param val 改变之后的可见情况
 */
function setVisible(val: boolean) {
    if (props.disabled) return
    visible.value = val
    emits('visible-change', val)
}
function toggleProper() {
    visible.value ? closeFinal() : openFinal()
}
function attachEvents() {
    //events控制触发器的事件，outerEvents控制触发器外部的事件，dropdownEvents控制弹出层的事件
    if (props.disabled || props.manual) return
    if (props.trigger === 'hover') {
        events.value['mouseenter'] = openFinal
        outerEvents.value['mouseleave'] = closeFinal
        dropdownEvents.value['mouseleave'] = closeFinal
        dropdownEvents.value['mouseenter'] = openFinal
        return
    }
    // 点击触发的情况是再点击一次修改可见性
    if (props.trigger === 'click') {
        events.value['click'] = toggleProper
    }
    if (props.trigger === 'contextmenu') {
        events.value['contextmenu'] = (e) => {
            e.preventDefault()
            toggleProper()
            // openFinal()
        }
    }

    return
}

let popperInstance: null | Instance

function destroyPopperInstance() {
    if (popperInstance) {
        popperInstance.destroy()
        popperInstance = null
    }
}
function resetEvents() {
    events.value = {}
    outerEvents.value = {}
    dropdownEvents.value = {}
    attachEvents()
}
const show: TooltipInstance['show'] = openFinal
const hide: TooltipInstance['hide'] = function () {
    console.log('tooltip里面的hide方法调用，关闭弹出层');
    openDebounce?.cancel()
    setVisible(false)
}

watch(visible, (val) => {
    if (!val) return
    if (_triggerNode.value && popperNode.value) {
        popperInstance = createPopper(
            _triggerNode.value,
            popperNode.value,
            popperOptions.value
        )
    }
}, { flush: "post" })
watch(() => props.manual, (isManual) => {
    if (isManual) {
        resetEvents()
        return
    } else {
        attachEvents()
    }
})

watch(() => props.trigger, (val, oldVal) => {
    if (val === oldVal) return
    openDebounce?.cancel()
    visible.value = false
    emits('visible-change', false)
    resetEvents()
})
/**
 * 这里使用bind是应为我们固定的想给打开函数传递true，关闭函数传递false
 * 但是我们不能直接写成debounce(setVisible(true), openDelay.value)这样写的含义是将setVisible的返回值传给了debounce函数
 * debounce(bind(setVisible, null, true), closeDelay.value)这个写法等价于debounce(()=>setVisible(false), closeDelay.value)
 */
watchEffect(() => {
    if (!props.manual) {
        attachEvents()
    }
    openDebounce = debounce(bind(setVisible, null, true), openDelay.value)
    closeDebounce = debounce(bind(setVisible, null, false), closeDelay.value)
})
useEventsToTriggerNode(props, triggerNode, events, () => {
    openDebounce?.cancel()
    setVisible(false)
})
const outsideTarget = computed(() => {
    // 如果弹出层可见，则监听整个容器
    if (visible.value && containerNode.value) {
        return containerNode.value;
    }
    // 否则只监听触发器
    return triggerNode.value;
});
useClickOutside(outsideTarget, () => {
    if (props.trigger === 'click' || props.trigger === 'contextmenu') {
        closeFinal();
    }
    emits('click-outside')
})
onUnmounted(() => {
    destroyPopperInstance()
})
defineExpose<TooltipInstance>({
    show,
    hide
})

</script>

<template>
    <div class="xr-tooltip" ref="containerNode" v-on="outerEvents">
        <!-- 触发层 -->
        <div class="xr-tooltip__trigger" ref="_triggerNode" v-if="!props.virtualTriggering" v-on="events">
            <!-- 触发元素是传进来的dom元素 -->
            <slot></slot>
        </div>
        <slot name="default" v-else></slot>
        <!-- poper弹出框 -->
        <transition :name="transition" @after-leave="destroyPopperInstance">
            <div class="xr-tooltip__popper" ref="popperNode" v-if="visible" v-on="dropdownEvents">
                <slot name="content">
                    {{ content }}
                </slot>
                <!-- 箭头 -->
                <div id="arrow" data-popper-arrow></div>
            </div>
        </transition>
    </div>
</template>

<style scoped lang="scss">
@use './style.scss'
</style>
