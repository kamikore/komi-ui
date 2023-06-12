<template>
    <div
      ref="checkboxGroupRef"
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
import {checkboxGroupProps} from './checkboxGroup'
import { useNamespace, useId } from '@komi-ui/hooks';
import {checkboxGroupKey} from './constants'
import type {CheckboxLabelType} from './checkbox'

defineOptions({
    name: 'KiCheckboxGroup'
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(['update:modelValue','change'])

const ns = useNamespace('checkbox')
const checkboxId = useId()
const name = computed(() => {
  return props.name || checkboxId.value
})

const changeEvent = (val: CheckboxLabelType) => {
    console.log("changeEvent", val)
    val = checkboxChange(val)
    emit('update:modelValue', val)
    nextTick(() => emit('change', val))
}

/**
 * @description 判断数组内是否有目标元素，存在则删除，否则添加 
 * @param item  目标元素
 * @returns {Array<CheckboxLabelType>} 处理后数组
 */
function checkboxChange(item: CheckboxLabelType):Array<CheckboxLabelType> {
  const {modelValue} = props 
	const index = modelValue.indexOf(item)
	if (index !== -1) {
		modelValue.splice(index, 1) 
	} 
  else 
		modelValue.push(item)
  return modelValue
}



provide(
  checkboxGroupKey,
  // 解开ref 
  reactive({
    ...toRefs(props),   // 将一个响应式对象转换为一个普通对象
    name,
    changeEvent,
  })
)
</script>