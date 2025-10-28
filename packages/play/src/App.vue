<script setup lang="ts">
// App.vue
import { XrMessage } from 'xier-element'
function notify() {
  XrMessage({ message: '这是一个消息.', type: 'info' })
}
</script>

<template>
  <div class="container">
    <div class="display">
      <button @click="notify">点击弹出消息</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* 使容器至少占满整个视口高度 */
  width: 100%;
}

.display {
  width: 80%;
  text-align: center;
  /* 内容居中对齐 */
}
</style>
