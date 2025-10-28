<template>
    <div class="popconfirm-demo">
        <h3>基本用法</h3>
        <p>点击按钮触发确认弹窗。</p>

        <div class="popconfirm-buttons">
            <xr-popconfirm title="确定删除吗？" @confirm="handleDelete">
                <xr-button type="danger">删除</xr-button>
            </xr-popconfirm>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrButton, XrPopconfirm, XrMessage } from 'xier-element'

const handleDelete = () => {
    XrMessage.success('删除成功')
}
</script>

<style scoped>
.popconfirm-demo {
    padding: 20px;
}

.popconfirm-buttons {
    margin-top: 10px;
}
</style>