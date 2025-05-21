<script setup lang="ts">

import { ref } from 'vue';
import { XrDropdown, XrDropdownMenu, XrDropdownItem } from 'xier-element';

// <XrIcon icon="chevron-down"></XrIcon>
const dropdown = ref()
setTimeout(() => {
  console.log('关闭弹出层')
  // 在 nextTick 内部确保访问的是已填充的 dropdown.value
  dropdown.value.handleClose()
}, 2000)
function handleCommand(command: string | number | object | undefined) {
  console.log('command', command)

}
</script>

<template>
  <div class="container">
    <div class="display">
      <XrDropdown ref="dropdown" placement="right" split-button type="primary" trigger="click" :hide-on-click="false"
        @command="handleCommand">
        Dropdown List
        <template #dropdown>
          <XrDropdownMenu>
            <XrDropdownItem command="a">1231321313</XrDropdownItem>
            <XrDropdownItem command="b">1231231313213</XrDropdownItem>
            <XrDropdownItem command="c">1231313213</XrDropdownItem>
            <XrDropdownItem command="d" divided>1231313213</XrDropdownItem>
          </XrDropdownMenu>
        </template>
      </XrDropdown>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// .container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   /* 使容器至少占满整个视口高度 */
//   width: 100%;
// }

// .display {
//   width: 80%;
//   text-align: center;
//   /* 内容居中对齐 */
// }</style>
