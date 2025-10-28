<template>
  <div class="icon-demo">
    <h3>Icon 图标示例</h3>
    <p>支持多种图标类型和大小。</p>

    <div class="icon-examples">
      <x-icon name="home" size="16" />
      <x-icon name="user" size="24" style="margin-left: 10px;" />
      <x-icon name="settings" size="32" style="margin-left: 10px;" />
      <x-icon name="search" size="48" style="margin-left: 10px;" />
    </div>

    <div class="icon-colors">
      <x-icon name="heart" color="red" />
      <x-icon name="star" color="gold" style="margin-left: 10px;" />
      <x-icon name="check" color="green" style="margin-left: 10px;" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { XIcon } from 'xier-element'
</script>

<style scoped>
.icon-demo {
  padding: 20px;
}

.icon-examples,
.icon-colors {
  margin: 10px 0;
}
</style>