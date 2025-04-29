<script setup lang="ts">

import { XrPopconfirm, XrButton } from 'xier-element';



</script>

<template>
  <div class="container">
    <div class="display">
      <XrPopconfirm title="是否要关闭？" confirm-button-text='好的' cancel-button-text='不用了' icon="circle-info" iconColor="red">
        <XrButton>删除</XrButton>
      </XrPopconfirm>
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
