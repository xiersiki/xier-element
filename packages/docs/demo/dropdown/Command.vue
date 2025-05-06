<script setup lang="ts">
import {
  type DropDownItemProps,
  type DropdownCommand,
} from "xier-element";

const items: DropDownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleCommand(command: DropdownCommand) {
  console.log("click on item " + command);
}
</script>

<template>
  <xr-dropdown :items="items" @command="handleCommand">
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

  i {
    margin-left: 8px;
  }
}
</style>
