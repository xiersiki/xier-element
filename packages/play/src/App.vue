<script setup lang="ts">

import { ref } from 'vue';
import { XrDropDown, XrDropDownMenu, XrDropDownItem, XrIcon } from 'xier-element';

// <XrIcon icon="chevron-down"></XrIcon>
const dropdown = ref()
setTimeout(() => {
  console.log('关闭弹出层')
  // 在 nextTick 内部确保访问的是已填充的 dropdown.value
  dropdown.value.handleClose()
}, 2000)
function handleCommand(conmand:string|number|object |undefined){
  console.log('command',conmand)

}
</script>

<template>
  <div class="container">
    <div class="display">
      <XrDropDown 
      ref="dropdown" 
      placement="right" 
      split-button 
      type="primary" 
      trigger="click" 
      :hide-on-click="false"
      @command="handleCommand"
      >
        Dropdown List
        <template #dropdown>
          <XrDropDownMenu>
            <XrDropDownItem command="a">1231321313</XrDropDownItem>
            <XrDropDownItem command="b">1231231313213</XrDropDownItem>
            <XrDropDownItem command="c">1231313213</XrDropDownItem>
            <XrDropDownItem command="d" divided>1231313213</XrDropDownItem>
          </XrDropDownMenu>
        </template>
      </XrDropDown>
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
