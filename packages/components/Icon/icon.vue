<script setup lang="ts">
import { type IconProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { omit } from "lodash-es";
import { computed } from "vue";

defineOptions({
    name: "XrIcon",
    inheritAttrs: false,
});

const props = defineProps<IconProps>();

// 处理图标：如果是字符串，尝试查找对应的图标定义
const processedIcon = computed(() => {
    if (typeof props.icon === 'string') {
        // 尝试从library中查找图标
        try {
            const iconDef = findIconDefinition({ prefix: 'fas', iconName: props.icon as any });
            return iconDef;
        } catch {
            // 如果找不到，返回原始字符串
            return props.icon;
        }
    }
    return props.icon;
});

const filterProps = computed(() => omit(props, ["type", "color", "icon"]));
const customStyles = computed(() => ({ color: props.color ?? void 0 }));
</script>

<template>
    <i class="xr-icon" :class="{ [`xr-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
        <font-awesome-icon :icon="processedIcon" v-bind="filterProps" />
    </i>
</template>

<style scoped lang="scss">
@use "./style.scss";
</style>
