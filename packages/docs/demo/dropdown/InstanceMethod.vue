<script setup lang="ts">
import type { DropDownItemProps, DropDownInstance } from "xier-element";
import { ref } from "vue";

const items: DropDownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
const dropdownRef = ref<DropDownInstance>();
</script>

<template>
  <xr-button @click="() => dropdownRef?.handleOpen()">open</xr-button>
  <xr-button @click="() => dropdownRef?.handleClose()">close</xr-button>
  <br />
  <xr-dropdown ref="dropdownRef" :items="items">
    <span class="dropdown-link">
      Dropdown List
      <xr-icon icon="angle-down" />
    </span>
  </xr-dropdown>
</template>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--xr-color-primary);
  margin-top: 20px;
  i {
    margin-left: 8px;
  }
}
</style>
