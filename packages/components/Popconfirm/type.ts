import type { ButtonType } from "../Button/type";
export interface popConfirmProps {
    title?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    confirmButtonType?: ButtonType;
    cancelButtonType?: ButtonType;
    icon?: string;
    iconColor?: string;
    hideIcon?: boolean;
    disabled?: boolean;
    hideAfter?: number;
    width?: number | string;
}

//组件向外触发的事件
export interface popConfirmEmits {
    (e: "confirm"): void;
    (e: "cancel"): void;
    (e: "show"): void;
    (e: "hide"): void;
}

//组件向外暴露的方法
export interface popConfirmInstance {
    show(): void;
    hide(): void;
}