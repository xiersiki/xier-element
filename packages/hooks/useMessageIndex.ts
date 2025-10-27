let messageBase = 2000;
let messageSeed = messageBase;

export function nextMessageZIndex() {
  return messageSeed++;
}

/** 重置基准：影响后续新创建的消息层级 */
export function setMessageZIndexBase(base: number) {
  messageBase = base;
  messageSeed = base;
}

/** 查看当前下一个将分配的值（调试用） */
export function peekNextMessageZIndex() {
  return messageSeed;
}

export function useMessageZIndex() {
  return {
    nextZIndex: nextMessageZIndex,
    setBase: setMessageZIndexBase,
    peek: peekNextMessageZIndex,
  };
}
