<template>
    <i :class="ns.b()" :style="style" v-bind="$attrs">
      <slot />
    </i>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue'
  import { useNamespace } from '@komi-ui/hooks'
  import { iconProps } from './icon'
  import { addUnit, isUndefined } from '@komi-ui/utils'
  import type { CSSProperties } from 'vue'
  
  defineOptions({
    name: 'KiIcon',
    // 关闭自动继承警告
    inheritAttrs: false,
  })
  const props = defineProps(iconProps)
  const ns = useNamespace('icon')
  
  const style = computed<CSSProperties>(() => {
    const { size, color } = props
    if (!size && !color) return {}
  
    return {
      fontSize: isUndefined(size) ? undefined : addUnit(size),
      color,
    }
  })
  </script>
  