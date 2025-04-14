import type { Ref } from "vue";
export type CollapseItemName = string | number;
// 折叠面板接受的props
export interface CollapseProps {
    accordion?: boolean, // 是否以手风琴模式展开（一次只展开一个）
    disabled?: boolean, // 是否禁用所有面板交互
    border?: boolean, // 是否显示边框 
    expandIcon?: boolean, // 是否显示展开图标
    modelValue: CollapseItemName[]
}

export interface CollapseEmits {
    (e: 'change', activeNames: CollapseItemName[]): void;
    (e: 'update:modelValue', activeNames: CollapseItemName[]): void
}

export interface CollapseItemProps {
    name: string; // 唯一标识
    title?: string; // 面板标题，可选，因为可能使用插槽
    disabled?: boolean; // 是单个item是否禁用（注意拼写：disable -> disabled）
}
export interface CollapseItemEmits {
    (e: 'click', name: string): void; // 面板被点击时触发
}

export interface CollapseContext {
    activeNames: Ref<CollapseItemName[]>;
    handleItemClick(name: CollapseItemName): void;
}