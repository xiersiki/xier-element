import { type Ref } from 'vue'
import useEventListener from './useEventListener'

export default function useClickOutside(
    // 为某一个组件的外部添加事件监听
    elementRef: Ref<HTMLElement | void>,
    callback: (e: MouseEvent) => void
) {
    // 只在客户端环境中添加事件监听，避免 SSR 时的 document 未定义错误
    if (typeof document !== 'undefined') {
        useEventListener(document, 'click', (e: Event) => {
            if (elementRef.value && e.target) {
                if (!elementRef.value.contains(e.target as HTMLElement)) {
                    callback(e as MouseEvent)
                }
            }
        })
    }
}
