<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <xr-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom">
    <xr-button @click="disabled = !disabled">click to {{ disabled ? "active" : "close" }} tooltip function</xr-button>
  </xr-tooltip>
</template>
