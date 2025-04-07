import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// 定义 Icon 组件的 Props
export interface IconProps {
    border?: boolean; // 是否显示边框
    fixedWidth?: boolean; // 是否固定宽度
    flip?: "horizontal" | "vertical" | "both"; // 翻转方向
    icon: object | Array<string> | string | IconDefinition; // 图标定义
    mask?: object | Array<string> | string; // 遮罩
    listItem?: boolean; // 是否为列表项
    pull?: "right" | "left"; // 图标的浮动方向
    pulse?: boolean; // 是否显示脉冲动画
    rotation?: 90 | 180 | 270 | "90" | "180" | "270"; // 旋转角度
    swapOpacity?: boolean; // 是否交换透明度
    size?: // 图标大小
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
    spin?: boolean; // 是否旋转
    transform?: object | string; // 变换
    symbol?: boolean | string; // 是否作为符号
    title?: string; // 图标标题
    inverse?: boolean; // 是否反转颜色
    bounce?: boolean; // 是否显示弹跳动画
    shake?: boolean; // 是否显示抖动动画
    beat?: boolean; // 是否显示心跳动画
    fade?: boolean; // 是否显示淡入淡出动画
    beatFade?: boolean; // 是否显示心跳淡入淡出动画
    spinPulse?: boolean; // 是否显示脉冲旋转动画
    spinReverse?: boolean; // 是否反向旋转
    type?: "primary" | "success" | "warning" | "danger" | "info"; // 图标类型
    color?: string; // 图标颜色
}