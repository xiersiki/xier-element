<script setup lang="ts">
import { type DropDownItemProps } from "xier-element";

const items: DropDownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleClick() {
  console.log("button click");
}
</script>

<template>
  <div class="row">
    <xr-dropdown :items="items">
      <xr-button type="primary">
        Dropdown List
        <xr-icon icon="angle-down" style="margin-left: 8px" />
      </xr-button>
    </xr-dropdown>
    <xr-dropdown
      :items="items"
      type="primary"
      @click="handleClick"
      split-button
    >
      Dropdown List
    </xr-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
