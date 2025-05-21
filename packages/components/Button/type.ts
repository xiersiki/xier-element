import type { Component, Ref } from "vue" // 导入 Vue 的 Component 类型，用于支持组件作为标签

// 定义按钮类型的联合类型
// primary: 主要按钮，通常用于强调主要操作
// success: 成功状态按钮，通常用于表示操作成功或确认操作
// warning: 警告状态按钮，通常用于需要用户注意的操作
// danger: 危险状态按钮，通常用于删除或不可逆操作
// info: 信息状态按钮，通常用于提示性操作
// default：默认类型，默认类型就没有背景颜色
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info" | "default"

// 定义原生按钮类型的联合类型
// button: 普通按钮，默认类型
// reset: 重置表单按钮，点击后重置表单数据
// submit: 提交表单按钮，点击后触发表单提交
export type NativeType = "button" | "reset" | "submit"

// 定义按钮尺寸的联合类型
// large: 大尺寸按钮
// default: 默认尺寸按钮
// small: 小尺寸按钮
export type ButtonSize = "large" | "default" | "small"

// 定义按钮组件的 Props 接口，包含所有可配置属性
export interface ButtonProps {
    tag?: string | Component, // 自定义按钮渲染的 HTML 标签或 Vue 组件
    type?: ButtonType,        // 按钮的类型，影响按钮的颜色和样式
    size?: ButtonSize,        // 按钮的尺寸，注意这里类型似乎有误，应该是 ButtonSize
    icon?: string,            // 按钮中显示的图标名称
    nativeType?: NativeType,  // 原生按钮的 type 属性，影响表单中按钮的行为
    loading?: boolean,        // 是否显示加载中状态，通常会显示加载图标并禁用按钮
    loadingIcon?: string,
    disabled?: boolean,       // 是否禁用按钮，禁用后按钮不可点击
    plain?: boolean,          // 是否使用朴素按钮，朴素按钮通常只有边框和文字，背景色较淡
    autofocus?: boolean,      // 是否自动获取焦点，渲染后按钮会立即获得焦点
    circle?: boolean,         // 是否为圆形按钮，常用于只有图标的按钮
    round?: boolean,           // 是否为圆角按钮，按钮的四个角会有较大的圆角
    useThrottle?: boolean,
    throttleDuration?: number
}
export interface ButtonEmits {
    (e: "click", value: MouseEvent): void;
}
export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
}

export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}

export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}