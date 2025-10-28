<template>
  <div class="icon-demo">
    <h3>Icon 图标示例</h3>
    <p>支持多种图标类型和大小。</p>

    <div class="icon-examples">
      <xr-icon icon="home" size="xs" />
      <xr-icon icon="user" size="sm" style="margin-left: 10px;" />
      <xr-icon icon="cog" size="lg" style="margin-left: 10px;" />
      <xr-icon icon="search" size="xl" style="margin-left: 10px;" />
    </div>

    <div class="icon-colors">
      <xr-icon icon="heart" color="red" />
      <xr-icon icon="star" color="gold" style="margin-left: 10px;" />
      <xr-icon icon="check" color="green" style="margin-left: 10px;" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { XrIcon } from 'xier-element'
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