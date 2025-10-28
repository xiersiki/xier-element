<template>
    <div class="popconfirm-demo">
        <h3>禁用状态</h3>
        <p>设置 disabled 属性可以禁用弹窗触发。</p>

        <div class="popconfirm-buttons">
            <xr-popconfirm title="确定删除吗？" disabled @confirm="handleDelete">
                <xr-button type="danger" disabled>删除（禁用）</xr-button>
            </xr-popconfirm>

            <xr-popconfirm title="确定保存吗？" @confirm="handleSave" style="margin-left: 10px;">
                <xr-button type="primary">保存（启用）</xr-button>
            </xr-popconfirm>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrButton, XrPopconfirm, XrMessage } from 'xier-element'

const handleDelete = () => {
    XrMessage.error('删除操作')
}

const handleSave = () => {
    XrMessage.success('保存成功')
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