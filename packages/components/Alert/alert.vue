<script setup lang='ts'>
import { computed, ref, useSlots, type ComputedRef } from 'vue';
import type { AlertProps, AlertType, AlertEmits } from './type';
import { XrIcon } from '../Icon';
import { typeIconMap } from '../../utils/index'
defineOptions({
    name: 'XrAlert'
})
const isVisible = ref(true)
const props = withDefaults(defineProps<AlertProps>(), {
    effect: 'light',
    closable: true,
    closeText: '',
    center: false,
    type: 'info',
    showIcon: false,
})
const type: ComputedRef<AlertType> = computed(() => {
    const allowType: AlertType[] = ['success', 'warning', 'info', 'danger']
    return allowType.includes(props.type) ? props.type : 'info'
})
// console.log('type', type);
const iconName: ComputedRef<string> = computed(() => {
    return typeIconMap.get(type.value) || 'circle-xmark'
})
const slots = useSlots();

const emits = defineEmits<AlertEmits>()
function close(e: MouseEvent) {
    isVisible.value = false
    emits('close', e)
}
const withDescription = computed(() => {
    return props.description || slots.default
})
// console.log('slots.default是true吗', slots.default?.());


</script>

<template>
    <div class="xr-alert"
        :class="{ [`xr-alert__${type}`]: type, [`xr-alert__${effect}`]: effect, 'text-center': center, }"
        v-show="isVisible">
        <xr-icon class="xr-alert__icon" :icon="iconName" :class="{ 'big-icon': Boolean(withDescription) }"
            v-show="showIcon"></xr-icon>
        <div class="xr-alert__content">
            <!-- 标题部分 -->
            <div class="xr-alert__title" v-if="$slots.title || props.title" :class="{ 'with-desc': withDescription }"
                :style="{ display: center && !showIcon ? 'flow' : 'inline' }">
                <slot name="title">
                    {{ title }}
                </slot>
            </div>
            <!-- 关闭按钮 -->
            <div class="xr-alert__close" v-if="props.closable" @click.stop="close">
                <span v-if="props.closeText">{{ closeText }}</span>
                <XrIcon icon="xmark" v-else />
            </div>
            <!-- 描述部分 -->
            <div class="xr-alert__description">
                <slot>
                    {{ description }}
                </slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use './style.scss'
</style>
