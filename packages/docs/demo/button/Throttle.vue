<script setup>
function handleBtnClick() {
  console.log('按钮触发了');
}
</script>

<template>
  <p>
    <xr-button @click="handleBtnClick"> with throttle</xr-button>
    <xr-button :use-throttle="false" @click="handleBtnClick">without throttle</xr-button>
  </p>
</template>
