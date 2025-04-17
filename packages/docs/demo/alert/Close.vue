<script setup>
function handleClose() {
  console.log('1111')
}
</script>
<template>
  <div class="basic block">
    <xr-alert title="Unclosable alert" type="success" :closable="false" />
    <xr-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
