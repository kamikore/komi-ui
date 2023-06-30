import { computed, watch, unref, Ref } from 'vue'
import { isArray } from '@komi-ui/utils'
import type { ComponentPublicInstance, MaybeRef } from 'vue'


export type MaybeElement = HTMLElement | SVGElement | ComponentPublicInstance | undefined | null

export type ResizeObserverCallback = (entries: ReadonlyArray<ResizeObserverEntry>, observer: ResizeObserver) => void
export interface ObserverOptions {
    // box-sizing: content-box, border-box, device-pixel-content-box
    box?: ResizeObserverBoxOptions
}

export function useResizeObserver(
    target: MaybeRef<MaybeElement>,
    callback: ResizeObserverCallback,
    options:  ObserverOptions = {}
) {

    let resizeObserver: ResizeObserver | undefined = new ResizeObserver(callback)

    const isSupported = window && 'ResizeObserver' in window

    const cleanup = () => {
        if (resizeObserver) {
            resizeObserver.disconnect()
            resizeObserver = undefined
        }
    }

    const targets = computed(() =>
        isArray(target)
        ? target.map(el => unref(el))
        : [unref(target)],
    )


    // 观察对象的改变
    const stopWatch = watch(
        targets,
        (els) => {
            cleanup()
            if (window && isSupported ) {
                resizeObserver = new ResizeObserver(callback)
                for (const el of els)
                    el && resizeObserver.observe(el, options)
            }
        },
        { immediate: true, flush: 'post', deep: true },
    )

    const stop = () => {
        cleanup()
        stopWatch()
    }

    return {
        isSupported,
        stop,
    }
}