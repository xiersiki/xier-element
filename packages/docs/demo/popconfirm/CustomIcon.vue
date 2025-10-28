<template>
    <div class="popconfirm-demo">
        <h3>自定义图标</h3>
        <p>自定义弹窗的图标和颜色。</p>

        <div class="popconfirm-buttons">
            <xr-popconfirm title="确定要保存吗？" icon="check-circle" iconColor="#52c41a" @confirm="handleSave">
                <xr-button type="success">保存</xr-button>
            </xr-popconfirm>

            <xr-popconfirm title="确定要删除吗？" icon="exclamation-triangle" iconColor="#faad14" @confirm="handleDelete"
                style="margin-left: 10px;">
                <xr-button type="warning">删除</xr-button>
            </xr-popconfirm>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrButton, XrPopconfirm, XrMessage } from 'xier-element'

const handleSave = () => {
    XrMessage.success('保存成功')
}

const handleDelete = () => {
    XrMessage.warning('删除操作已执行')
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