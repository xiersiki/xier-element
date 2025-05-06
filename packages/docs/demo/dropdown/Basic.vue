<script setup lang="ts">
import {type DropDownItemProps } from "xier-element";

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
      <div class="desc">通过 slot 传入 item</div>
      <XrDropdown>
        <span class="dropdown-link">
          Dropdown List
          <xr-icon icon="angle-down" />
        </span>
        <template #dropdown>
          <XrDropdownMenu>
            <XrDropdownItem command="1">Action 1</XrDropdownItem>
            <XrDropdownItem command="2" label="Action 2" />
            <XrDropdownItem command="3" disabled>Action 3</XrDropdownItem>
            <XrDropdownItem command="4" divided>Action 4</XrDropdownItem>
          </XrDropdownMenu>
        </template>
      </XrDropdown>
    </div>
    <div class="col">
      <div class="desc">通过 props 传入 item</div>
      <xr-dropdown :items="items">
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
