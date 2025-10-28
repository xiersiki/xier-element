<template>
    <div class="demo-wrapper">
        <div class="section">
            <h4>可关闭标签</h4>
            <div class="tag-group">
                <xr-tag v-for="tag in tags" :key="tag.name" :type="tag.type" closable @close="handleClose(tag)">
                    {{ tag.name }}
                </xr-tag>
            </div>
        </div>

        <div class="section">
            <h4>不同主题的可关闭标签</h4>
            <div class="tag-group">
                <xr-tag type="primary" effect="light" closable @close="handleCloseByType('primary')">主要</xr-tag>
                <xr-tag type="success" effect="dark" closable @close="handleCloseByType('success')">成功</xr-tag>
                <xr-tag type="warning" effect="plain" closable @close="handleCloseByType('warning')">警告</xr-tag>
                <xr-tag type="danger" effect="light" closable @close="handleCloseByType('danger')">危险</xr-tag>
            </div>
        </div>

        <div class="section">
            <h4>动态添加标签</h4>
            <div class="tag-group">
                <xr-tag v-for="tag in dynamicTags" :key="tag" closable @close="handleRemoveTag(tag)">
                    {{ tag }}
                </xr-tag>
                <xr-button v-if="inputVisible" size="small" @click="showInput">+ New Tag</xr-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XrTag, XrButton } from 'xier-element'
interface TagItem {
    name: string
    type: 'primary' | 'success' | 'info' | 'warning' | 'danger'
}
const tags = ref<TagItem[]>([
    { name: '标签一', type: 'primary' },
    { name: '标签二', type: 'success' },
    { name: '标签三', type: 'info' },
    { name: '标签四', type: 'warning' },
    { name: '标签五', type: 'danger' }
])

const dynamicTags = ref(['电影', '音乐', '旅行'])
const inputVisible = ref(true)

const handleClose = (tag: any) => {
    const index = tags.value.indexOf(tag)
    if (index > -1) {
        tags.value.splice(index, 1)
    }
    console.log('关闭标签:', tag.name)
}

const handleCloseByType = (type: string) => {
    console.log('关闭类型标签:', type)
}

const handleRemoveTag = (tag: string) => {
    const index = dynamicTags.value.indexOf(tag)
    if (index > -1) {
        dynamicTags.value.splice(index, 1)
    }
}

const showInput = () => {
    inputVisible.value = false
    // 这里可以添加输入框逻辑
}
</script>

<style scoped>
.demo-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.section {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.section h4 {
    margin: 0;
    font-size: 14px;
    color: #666;
}

.tag-group {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
}
</style>