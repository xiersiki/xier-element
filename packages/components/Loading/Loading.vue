<script setup lang="ts">
import type { LoadingOptions } from "./types";
import { computed, type Ref } from "vue";
import { isString } from "lodash-es";
import XrIcon from "../Icon/icon.vue";

defineOptions({
  name: "XrLoading",
  inheritAttrs: false,
});
const props = defineProps<LoadingOptions>();

const iconName = computed(() => {
  if (isString(props.spinner)) {
    return props.spinner;
  }
  return "spinner"; // 'circle-notch' 也很好看
});

// 获取 visible 的实际值
const isVisible = computed(() => {
  if (props.visible && typeof props.visible === 'object' && 'value' in props.visible) {
    return (props.visible as Ref<boolean>).value;
  }
  return !!props.visible;
});
</script>

<template>
  <transition name="fade-in-linear" @after-leave="props.onAfterLeave">
    <div v-show="isVisible" class="xr-loading xr-loading__mask" :class="{ 'is-fullscreen': fullscreen }">
      <div class="xr-loading__spinner">
        <xr-icon v-if="props.spinner !== false" :icon="iconName" spin />
        <p v-if="text" class="xr-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<style>
@import "./style.css";

.xr-loading {
  --xr-loading-bg-color: v-bind(background) !important;
  --xr-loading-z-index: v-bind(zIndex) !important;
}
</style>
