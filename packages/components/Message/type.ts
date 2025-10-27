// ...existing code...
import type { VNode, ComponentInternalInstance } from "vue";

export type MessageContent = string | VNode | (() => VNode);

export type MessageType = "info" | "success" | "warning" | "error";

export interface MessagePublicProps {
  message?: MessageContent;
  type?: MessageType;
  duration?: number;
  showClose?: boolean;
  center?: boolean;
  offset?: number; // 容器写入
  zIndex?: number;
  // 内部：为避免同时销毁导致动画拥挤，给快速创建的同批消息增加错峰延迟
  staggerDelay?: number;
  id: string;
}

export interface MessageHandler {
  close(): void;
}

export interface MessageInstance {
  id: string;
  vnode: VNode | null;
  vm: ComponentInternalInstance | null;
  props: MessagePublicProps & {
    // 内部辅助：容器注入的 ref setter
    _setVm?: (vm: any) => void;
  };
  handler: MessageHandler;
}

export type MessageOptions = Partial<
  Omit<MessagePublicProps, "id" | "offset">
> & {
  // 可允许自定义 zIndex
  zIndex?: number;
};

export type MessageParams = string | VNode | (() => VNode) | MessageOptions;
