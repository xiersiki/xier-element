import { type Ref } from 'vue'
import useEventListener from './useEventListener'

export default function useClickOutside(
    // 为某一个组件的外部添加事件监听
    elementRef: Ref<HTMLElement | void>,
    callback: (e: MouseEvent) => void
) {
    useEventListener(document, 'click', (e: Event) => {
        if (elementRef.value && e.target) {
            if (!elementRef.value.contains(e.target as HTMLElement)) {
                callback(e as MouseEvent)
            }
        }
    })
}
