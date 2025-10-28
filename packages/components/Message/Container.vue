<script setup lang="ts">
import { nextTick, watch } from 'vue'
import { instances } from './instances'
import MessageItem from './MessageItem.vue'

const GAP = 4
const BASE_OFFSET = 25

function layout() {
    // 获取所有消息容器
    const allContainers = Array.from(document.querySelectorAll('.xr-message-container'))
    const currentContainer = document.querySelector('.xr-message-container') as HTMLElement

    if (!currentContainer) return

    let offset = BASE_OFFSET

    // 计算当前容器之前的所有容器的总高度
    const currentIndex = allContainers.indexOf(currentContainer)
    for (let i = 0; i < currentIndex; i++) {
        const container = allContainers[i] as HTMLElement
        const messages = container.querySelectorAll('.xr-message')
        messages.forEach(msg => {
            const msgEl = msg as HTMLElement
            offset += msgEl.offsetHeight + GAP
        })
    }

    // 设置当前容器的消息偏移
    instances.forEach(inst => {
        inst.props.offset = offset
        const el = inst.vm?.proxy?.$el as HTMLElement | undefined
        if (el) offset += el.offsetHeight + GAP
    })
}

// 监听数组长度与每个实例的 vm 变化
watch(
    () => instances.map(i => i.vm),
    () => {
        nextTick(() => {
            const before = instances.map(i => (i.vm?.proxy?.$el as HTMLElement | undefined)?.offsetHeight || 0)
            layout()
            // 再 nextTick 检测高度是否变化（有 transition / 异步内容时）
            nextTick(() => {
                const after = instances.map(i => (i.vm?.proxy?.$el as HTMLElement | undefined)?.offsetHeight || 0)
                if (after.some((h, idx) => h !== before[idx])) {
                    layout()
                }
            })
        })
    },
    { immediate: true }
)

function handleClose(id: string) {
    const inst = instances.find(i => i.id === id)
    inst?.handler.close()
}

function handleAfterLeave(id: string) {
    const idx = instances.findIndex(i => i.id === id)
    if (idx !== -1) {
        instances.splice(idx, 1)
    }
}
</script>

<template>
    <div class="xr-message-container">
        <MessageItem v-for="inst in instances" :key="inst.id" v-bind="inst.props" @close="handleClose(inst.id)"
            @after-leave="handleAfterLeave(inst.id)" :ref="inst.props._setVm" />
    </div>
</template>

<style scoped>
.xr-message-container {
    position: fixed;
    inset: 0;
    width: 100%;
    pointer-events: none;
    z-index: 1999;
    /* 容器本身，可低于单条的 2000+ */
}

.xr-message-container :deep(.xr-message) {
    pointer-events: auto;
}
</style>