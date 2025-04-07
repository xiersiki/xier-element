import type { Ref } from "vue";
export interface TagProps {
    type?: "primary" | "success" | "info" | "warning" | "danger"; //类型
    closable?: boolean //是否可以关闭
    hit?: boolean //是否有描边边框
    color?: string
    size?: "medium" | "small" | "mini"
    effect?: "dark" | "light" | "plain" //主题
    isTransitions?: boolean
}

export interface TagEmits {
    (e: "click", value: MouseEvent): void;
    (e: "close", value: MouseEvent): void
}

export interface TagInstance {
    ref: Ref<HTMLSpanElement | void>;
}