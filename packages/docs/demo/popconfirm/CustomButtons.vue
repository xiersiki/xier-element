<template>
    <div class="popconfirm-demo">
        <h3>自定义按钮</h3>
        <p>自定义确认和取消按钮的文本和类型。</p>

        <div class="popconfirm-buttons">
            <xr-popconfirm title="确定要执行此操作吗？" confirmButtonText="确定执行" cancelButtonText="再想想"
                confirmButtonType="success" cancelButtonType="info" @confirm="handleConfirm" @cancel="handleCancel">
                <xr-button type="primary">执行操作</xr-button>
            </xr-popconfirm>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XrButton, XrPopconfirm, XrMessage } from 'xier-element'

const handleConfirm = () => {
    XrMessage.success('操作已执行')
}

const handleCancel = () => {
    XrMessage.info('操作已取消')
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