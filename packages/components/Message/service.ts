import { h, render, isVNode, reactive } from "vue";
import { nanoid } from "nanoid";
import Container from "./Container.vue";
import { instances } from "./instances";
import { nextMessageZIndex } from "../../hooks/useMessageIndex";
import type {
  MessageParams,
  MessageOptions,
  MessageInstance,
  MessageHandler,
} from "./type";

let mounted = false;
// 用于错峰关闭：记录上一条创建时间与窗口内的索引
let lastCreatedAt = 0;
let burstIndex = 0;
const BURST_WINDOW = 300; // ms，同一窗口内的条目视作一批
const STAGGER_STEP = 120; // 每条错峰间隔
function ensureContainer() {
  if (mounted) return;
  const host = document.createElement("div");
  document.body.appendChild(host);
  render(h(Container), host);
  mounted = true;
}

function normalize(p: MessageParams): MessageOptions {
  if (typeof p === "string") return { message: p };
  if (typeof p === "function") return { message: p() };
  if (isVNode(p)) return { message: p };
  return p || {};
}

export const Message = Object.assign(
  (param: MessageParams): MessageHandler => {
    ensureContainer();
    const o = normalize(param);
    const id = nanoid();
    // 计算错峰延迟：同一时间窗口内的条目逐个递增
    const now = Date.now();
    if (now - lastCreatedAt <= BURST_WINDOW) {
      burstIndex += 1;
    } else {
      burstIndex = 0;
    }
    lastCreatedAt = now;
    const staggerDelay = burstIndex * STAGGER_STEP;
    // props 必须 reactive，否则 Container 写 offset 时子组件不会更新
    const props = reactive({
      id,
      message: o.message,
      type: o.type ?? "info",
      duration: o.duration ?? 3000,
      showClose: o.showClose ?? false,
      center: o.center ?? false,
      offset: 0, // 容器稍后写入
      zIndex: o.zIndex ?? nextMessageZIndex(),
      staggerDelay,
      _setVm: (comp: any) => {
        if (comp && !inst.vm) inst.vm = comp.$?.component || comp.$;
      },
    });

    const inst: MessageInstance = {
      id,
      vnode: null,
      vm: null,
      props: props as any,
      handler: {
        close() {
          inst.vm?.exposed?.close?.();
          // 无动画兜底：直接移除
          if (!inst.vm?.exposed?.close) {
            const idx = instances.findIndex((i) => i.id === id);
            if (idx > -1) instances.splice(idx, 1);
          }
        },
      },
    };
    instances.push(inst);
    return inst.handler;
  },
  {
    closeAll() {
      [...instances].forEach((i) => i.handler.close());
    },
    success(p: MessageParams) {
      return Message({ ...normalize(p), type: "success" });
    },
    warning(p: MessageParams) {
      return Message({ ...normalize(p), type: "warning" });
    },
    info(p: MessageParams) {
      return Message({ ...normalize(p), type: "info" });
    },
    error(p: MessageParams) {
      return Message({ ...normalize(p), type: "error" });
    },
  }
);

export default Message;
