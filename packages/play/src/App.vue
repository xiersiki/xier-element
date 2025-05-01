<script setup lang="ts">

import { XrDropDown,XrDropDownMenu,XrDropDownItem} from 'xier-element';



</script>

<template>
  <div class="container">
    <div class="display">
      <XrDropDown>
        <span class="el-dropdown-link">
          Dropdown List
          >
        </span>
        <template #dropdown>
          <XrDropDownMenu>
            <XrDropDownItem>2</XrDropDownItem>
            <XrDropDownItem>3</XrDropDownItem>
          </XrDropDownMenu>
        </template>
      </XrDropDown>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* 使容器至少占满整个视口高度 */
  width: 100%;
}

.display {
  width: 80%;
  text-align: center;
  /* 内容居中对齐 */
}
</style>
