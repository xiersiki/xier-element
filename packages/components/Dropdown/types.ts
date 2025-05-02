import type { Component } from 'vue';
import type { ButtonType,ButtonProps } from '../Button/type'
export type DropDownSzie = '' | 'small' | 'default' | 'large'
export interface DropDownProps {
    type?: ButtonType; // 按钮类型
    size?: DropDownSzie; // 下拉尺寸
    buttonProps?: ButtonProps; // 按钮属性
    maxHeight?: string | number; // 最大高度
    splitButton?: boolean; // 下拉触发元素呈现为按钮组
    disabled?: boolean; // 是否禁用
    placement?: 'top' | 'bottom' | 'left' | 'right'; // 菜单弹出位置
    trigger?: 'hover' | 'click' | 'contextmenu'; // 触发下拉的行为
    triggerKeys?: string[]; // 指定键盘上哪些按键可以触发操作
    hideOnClick?: boolean; // 是否在点击菜单项后隐藏菜单
    showTimeout?: number; // 展开下拉菜单的延时，仅在 trigger 为 hover 时有效
    hideTimeout?: number; // 收起下拉菜单的延时，仅在 trigger 为 hover 时有效
    role?: 'menu' | 'navigation'; // 下拉菜单的 ARIA 属性
    tabindex?: number | string; // Dropdown 组件的 tabindex
    popperClass?: string; // 自定义浮层类名
    popperOptions?: object; // popper.js 参数
    teleported?: boolean; // 是否将下拉列表插入至 body 元素
    persistent?: boolean; // 当下拉菜单处于非活动状态且 persistent 为 false 时，下拉菜单将被销毁
}
export interface DropDownEmits {
    (e:'click',value?:MouseEvent):void // 点击事件
    (e:'command',value?:MouseEvent):void // 点击事件
    (e:'visibleChange',value?:boolean):void // 点击事件
}
export interface DropDownInstance {
    handleOpen: () => void; // 打开下拉菜单的方法
    handleClose: () => void; // 关闭下拉菜单的方法
}
export interface DropDownItemProps {
    /**
     * 派发到 command 回调函数的指令参数
     */
    command?: string | number | object;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否显示分隔符
     */
    divided?: boolean;

    /**
     * 自定义图标
     */
    icon?: string | Component;
}