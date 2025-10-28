<template>
  <div class="configprovider-demo">
    <h3>ConfigProvider 全局配置示例</h3>
    <p>ConfigProvider 用于配置全局主题、语言等设置。</p>

    <x-config-provider :theme="theme">
      <x-button @click="toggleTheme">切换主题</x-button>
      <x-button type="primary" style="margin-left: 10px;">主要按钮</x-button>
    </x-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XConfigProvider, XButton } from 'xier-element'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped>
.configprovider-demo {
  padding: 20px;
}
</style>