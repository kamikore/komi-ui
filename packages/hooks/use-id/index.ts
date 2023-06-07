import {computed} from 'vue'
import type {Ref} from 'vue'

const idInjection = {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  }
  
// 生成应用唯一id
export const useId = (namespace?: string): Ref<string> => {
  
    const idRef = computed(
      () =>
        // 自定义的 Maybe Ref
        // unref(deterministicId) ||
        `${namespace}-id-${idInjection.prefix}-${idInjection.current++}`
    )
  
    return idRef
}