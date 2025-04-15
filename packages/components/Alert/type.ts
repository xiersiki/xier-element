export type AlertType = 'success' | 'warning' | 'info' | 'danger';

export type AlertEffect = 'light' | 'dark';

export interface AlertProps {
    type?: AlertType;           // 提示类型
    title?: string;             // 标题内容
    description?: string;       // 描述信息
    closable?: boolean;         // 是否显示关闭按钮
    closeText?: string;         // 自定义关闭按钮文本
    showIcon?: boolean;         // 是否显示图标
    center?: boolean;           // 是否居中内容
    effect?: AlertEffect;       // 主题风格
}
export interface AlertEmits {
    (e: 'close', value?: MouseEvent): void; // 关闭事件，value 可选
    (e: 'open', value?: MouseEvent): void;  // 打开事件，value 可选
}

export interface AlertExpose {
    open: () => void;  // 父组件调用以打开组件
    close: () => void; // 父组件调用以关闭组件
}