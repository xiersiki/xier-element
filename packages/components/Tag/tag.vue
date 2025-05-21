<script setup lang="ts">
import type { TagProps, TagEmits, TagInstance } from './type'
import { computed, ref } from 'vue';
// 你的逻辑放这里
defineOptions({
    name: "XrTag"
})
const props = withDefaults(defineProps<TagProps>(), {
    closable: false,
    hit: false,
    effect: "light",
    isTransitions: false,
    type: "primary"
})
const _ref = ref<HTMLSpanElement>() //暴露span这个dom节点
defineExpose<TagInstance>({
    ref: _ref
})
const emits = defineEmits<TagEmits>()
const slots = defineSlots() // 用于判断是否有默认插槽
function handleClose(e: MouseEvent) {
    e.stopPropagation() // 阻止冒泡，避免触发标签的点击事件
    emits("close", e)
}
function handleClick(e: MouseEvent) {
    emits("click", e)
}
const classes = computed(() => ({
    [`xr-tag--${props.type}`]: true,
    [`xr-tag--${props.size}`]: props.size,
    [`is-hit`]: props.hit,
    [`is-closable`]: props.closable,
    [`is-${props.effect}`]: true,
    [`is-${props.isTransitions}`]: props.isTransitions
}))

</script>

<template>
    <span class="xr-tag" :class="classes" ref="_ref" @click="handleClick">
        <slot />
        <template v-if="closable">
            <slot name="close">
                <i class="xr-icon-close" @click="handleClose">×</i>
            </slot>
        </template>
    </span>
</template>


<style scoped lang="scss">
@use './style.scss'
</style>
