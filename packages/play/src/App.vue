<script setup>
import { ref } from 'vue'

const loading = ref(false)

const loadData = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}

// 页面加载时自动触发
setTimeout(() => {
  loadData()
}, 500)
</script>

<template>
  <div class="container">
    <div class="display">
      <h1>Loading 组件测试</h1>

      <button @click="loadData" style="margin-bottom: 20px; padding: 10px 20px;">
        点击触发 Loading
      </button>

      <!-- 基本用法 -->
      <div v-loading="loading"
        style="height: 200px; border: 1px solid #ccc; margin: 20px 0; display: flex; align-items: center; justify-content: center;">
        <p>基本用法 - 内容区域</p>
      </div>

      <!-- 自定义加载文本 -->
      <div v-loading="loading" xr-loading-text="加载中..."
        style="height: 200px; border: 1px solid #ccc; margin: 20px 0; display: flex; align-items: center; justify-content: center;">
        <p>自定义文本 - 内容区域</p>
      </div>

      <!-- 自定义背景色 -->
      <div v-loading="loading" xr-loading-background="rgba(255, 0, 0, 0.3)" xr-loading-text="红色背景"
        style="height: 200px; border: 1px solid #ccc; margin: 20px 0; display: flex; align-items: center; justify-content: center;">
        <p>自定义背景色 - 内容区域</p>
      </div>

      <!-- 锁定滚动 -->
      <div v-loading="loading" xr-loading-lock xr-loading-text="锁定滚动"
        style="height: 200px; border: 1px solid #ccc; margin: 20px 0; display: flex; align-items: center; justify-content: center;">
        <p>锁定滚动 - 内容区域</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
}

.display {
  width: 80%;
  max-width: 800px;
  text-align: center;
}

button {
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #66b1ff;
}
</style>
