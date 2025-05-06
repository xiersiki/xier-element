<script setup lang='ts'>
import { computed, provide, reactive, ref, toRef, watch } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants'
import type { CollapseEmits, CollapseProps, CollapseItemName } from './type';
defineOptions({
    name:'XrCollapse'
})
const props = withDefaults(defineProps<CollapseProps>(), {
    accordion: false,
    disabled: false,
    border: false,
    expandIcon: false,
})
const emits = defineEmits<CollapseEmits>()
// 转变成数组的形式
const activeNames = ref(props.modelValue)
// 监听 props.modelValue 的变化
watch(() => props.modelValue, (newValue) => {
    activeNames.value = newValue;
});
function handleItemClick(name: CollapseItemName) {
    // console.log('触发事件');
    if (props.disabled) return;
    let newActiveNames: CollapseItemName[];
    if (props.accordion) { //手风琴模式
        newActiveNames = activeNames.value.includes(name) ? [] : [name]
    } else {//不是手风琴模式
        newActiveNames = [...activeNames.value];
        // 如果已经在激活列表中，则移除（折叠）
        if (newActiveNames.includes(name)) {
            newActiveNames = newActiveNames.filter(item => item != name)
        } else {
            // 否则添加到激活列表（展开）
            newActiveNames.push(name);
        }
    }
    // 触发事件更新状态
    emits('change', newActiveNames);
    emits('update:modelValue', newActiveNames)
}
// 把这个激活的数组传给子组件
provide(COLLAPSE_CTX_KEY, {
    activeNames,
    handleItemClick // 将处理函数传给子组件
})

// 监听 activeNames 的变化
watch(activeNames, (newValue) => {
    console.log('newValue.length', newValue.length);
    if (props.accordion && newValue.length > 1) {
        console.warn('警告：在手风琴模式下，activeNames 只能包含一个元素！');
        // 修正 activeNames，只保留第一个元素
        activeNames.value = [newValue[0]];
    }
}, { immediate: true });
</script>

<template>
    <div class="xr-collapse">
        <slot></slot>
    </div>
</template>

<style style scoped lang="scss">
@use './style.scss'
</style>
