import { ref } from 'vue'
import { inBrowser } from "@komi-ui/utils"

export interface UseTimeoutFnOptions {
    /**
     * Start the timer immediate after calling this function
     *
     * @default true
     */
    immediate?: boolean
}

/**
 * Wrapper for `setTimeout` with controls.
 *
 * @param cb
 * @param interval
 * @param options
 */
export function useTimeoutFn(
  cb: Function,
  interval: number,
  options: UseTimeoutFnOptions = {},
) {
  const {
    immediate = true,
  } = options

  const isPending = ref(false)

  let timer: ReturnType<typeof setTimeout> | null = null

  function clear() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  function stop() {
    isPending.value = false
    clear()
  }

  function start(...args: []) {
    clear()
    isPending.value = true
    timer = setTimeout(() => {
      isPending.value = false
      timer = null

      cb(...args)
    }, interval)
  }

  if (immediate) {
    isPending.value = true
    if (inBrowser)
      start()
  }

  return {
    isPending: isPending,
    start,
    stop,
  }
}
