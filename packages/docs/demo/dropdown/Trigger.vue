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
    <div class="col">
      <div class="desc">hover to trigger</div>
      <xr-dropdown :items="items">
        <span class="dropdown-link">
          Dropdown List
          <xr-icon icon="angle-down" />
        </span>
      </xr-dropdown>
    </div>
    <div class="col">
      <div class="desc">click to trigger</div>
      <xr-dropdown :items="items" trigger="click">
        <span class="dropdown-link">
          Dropdown List
          <xr-icon icon="angle-down" />
        </span>
      </xr-dropdown>
    </div>
    <div class="col">
      <div class="desc">right click to trigger</div>
      <xr-dropdown :items="items" trigger="contextmenu">
        <span class="dropdown-link">
          Dropdown List
          <xr-icon icon="angle-down" />
        </span>
      </xr-dropdown>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex: 1;
}
.desc {
  display: block;
  color: var(--xr-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
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
