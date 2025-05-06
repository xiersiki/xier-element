<script setup lang="ts">
import { type DropDownItemProps } from "xier-element";

const items: DropDownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
</script>

<template>
  <div class="row">
    <xr-dropdown :items="items" size="large" split-button>
      Large List
    </xr-dropdown>
    <xr-dropdown :items="items" split-button> Default List </xr-dropdown>
    <xr-dropdown :items="items" size="small" split-button>
      small List
    </xr-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
