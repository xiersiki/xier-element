<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import type { MessagePublicProps } from './type'
import { XrIcon } from '../Icon'
import { typeIconMap } from '../../utils/index'

const props = defineProps<MessagePublicProps>()

const emit = defineEmits<{
    (e: 'close', id: string): void
    (e: 'after-leave', id: string): void
}>()

const visible = ref(false)
const shown = ref(false)

function close() {
    if (!visible.value) return
    visible.value = false
    emit('close', props.id)
}

onMounted(() => {
    // 等待容器第一次计算出正确的 offset 后再显示，避免从容器顶部入场
    const stop = watch(
        () => props.offset,
        async (val) => {
            if (shown.value) return
            if (typeof val === 'number') {
                await nextTick()
                visible.value = true
                shown.value = true
                // 首次显示后启动自动关闭计时
                if (props.duration && props.duration > 0) {
                    const delay = (props.staggerDelay ?? 0) + props.duration
                    setTimeout(close, delay)
                }
                stop()
            }
        },
        { immediate: true }
    )
})

defineExpose({ close })

// 内容计算（支持函数 / 纯文本 / VNode）
function renderContent() {
    if (typeof props.message === 'function') return props.message()
    return props.message
}

// 根据类型映射默认图标
const iconName = computed(() => props.type ? (typeIconMap.get(props.type) || 'circle-info') : null)
</script>

<template>
    <Transition name="fade-up" @after-leave="emit('after-leave', props.id)">
        <div v-show="visible" class="xr-message" :class="[
            props.type && 'xr-message--' + props.type,
            props.center && 'is-center'
        ]" :style="{
            top: (props.offset || 0) + 'px',
            zIndex: props.zIndex
        }" role="alert">
            <div class="xr-message__content">
                <XrIcon v-if="iconName" class="xr-message__icon" :icon="iconName" />
                <component :is="renderContent()" v-if="typeof renderContent() !== 'string'" />
                <span v-else>{{ renderContent() }}</span>
            </div>
            <button v-if="props.showClose" type="button" class="xr-message__close" @click="close">×</button>
        </div>
    </Transition>
</template>

<style scoped>
.xr-message {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 14px 8px 18px;
    /* top right bottom left */
    width: fit-content;
    max-width: calc(100% - 32px);
    box-sizing: border-box;
    min-width: 300px;
    min-height: 40px;
    background: #fff;
    border: 1px solid #e5e6eb;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .12);
    font-size: 14px;
    line-height: 1.4;
    color: #333;
    pointer-events: auto;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    /* 统一通过变量控制过渡时长 */
    transition: top var(--xr-transition-duration, .25s) ease,
        opacity var(--xr-transition-duration, .25s) ease,
        transform var(--xr-transition-duration, .25s) ease;
    /* 顶部位移和透明度过渡，配合容器重排 */
}

.xr-message.is-center {
    justify-content: center;
}

.xr-message__close {
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 16px;
    line-height: 1;
    color: #999;
}

.xr-message__close:hover {
    color: #333;
}

.xr-message__content {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    /* 图标与文本间距 */
}

.xr-message__icon {
    font-size: 16px;
    line-height: 0;
    /* 去掉内联元素行高带来的垂直偏差 */
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.xr-message--success {
    border-color: #d1f3d5;
    background: #f0fff2;
    color: #2f8a3b;
}

.xr-message--warning {
    border-color: #ffe6b0;
    background: #fff8e6;
    color: #a76a07;
}

.xr-message--error {
    border-color: #ffd4d4;
    background: #fff0f0;
    color: #c93a2f;
}

/* info 类型：灰色背景 */
.xr-message--info {
    border-color: #e5e6eb;
    background: #f7f8fa;
    color: #4e5969;
}


/* 参考 fade-up 动画：从自身高度上方进入，离场上移消失 */
.xr-message.fade-up-enter-from,
.xr-message.fade-up-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
}
</style>