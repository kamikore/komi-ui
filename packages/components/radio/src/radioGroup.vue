<template>
    <div
      ref="radioGroupRef"
      :class="ns.b('group')"
    >
      <slot />
    </div>
  </template>

<script setup lang="ts">
import {
    reactive,
    computed,
    provide, 
    toRefs,
    nextTick
} from 'vue'
import {radioGroupProps} from './radioGroup'
import { useNamespace, useId } from '@komi-ui/hooks';
import {radioGroupKey} from './constants'

defineOptions({
    name: 'KiRadioGroup'
})

const props = defineProps(radioGroupProps)
const emit = defineEmits(['update:modelValue','change'])

const ns = useNamespace('radio')
const radioId = useId()
const name = computed(() => {
  return props.name || radioId.value
})

const changeEvent = (val) => {
    emit('update:modelValue', val)
    nextTick(() => emit('change', val))
}


provide(
  radioGroupKey,
  // 解开ref 
  reactive({
    ...toRefs(props),   // 将一个响应式对象转换为一个普通对象
    name,
    changeEvent,
  })
)
</script>