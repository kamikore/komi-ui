<template>
    <span 
        :class="[
            ns.b(),
            ns.is(
                'checked', 
                checkboxGroup ? 
                    modelValue?.includes(label)
                    : modelValue
            ),
            ns.is('disabled', disabled),
            ns.m(size)
        ]"
    >
        <span 
            :class="[
                ns.e('input'),
                ns.is(
                    'checked', 
                    checkboxGroup ? 
                        modelValue?.includes(label)
                        : modelValue
                ),
                ns.is('disabled', disabled),
            ]"
        >   
            <!-- value值赋值给modelValue -->
            <input 
                :class="ns.e('original')"
                ref="checkboxRef"
                type="checkbox" 
                :id="id"
                :name="name"
                v-bind="$attrs"
                :disabled="disabled"
                v-model="modelValue"
                :value="label"
                @change="handleChange"
            >
            <span :class="[
                ns.e('inner'),
                ns.is('toggle', checkmarkType === 'toggle')
            ]"></span>
        </span>
        
        <span
            :class="ns.e('label')" 
            @click="labelClick"
        >
            <slot>{{label}}</slot>
        </span>
    </span>
</template>

<script setup lang="ts">
import {ref, computed, inject, nextTick} from 'vue'
import {checkboxProps} from './checkbox'
import { useNamespace } from '@komi-ui/hooks'
import {checkboxGroupKey} from './constants'

defineOptions({
    name: 'KiCheckbox'
})

const emit = defineEmits(['update:modelValue','change'])

// 如果没有包裹Group，默认值为undefined
const checkboxGroup = inject(checkboxGroupKey, undefined)

const ns = useNamespace('checkbox')
const props = defineProps(checkboxProps)
const checkboxRef = ref<HTMLInputElement>()


// 不使用group则modelValue:Boolean, 否则是一个选中label的数组
const modelValue = computed({
    get() {
        return checkboxGroup ? checkboxGroup?.modelValue : props.modelValue
    },
    set(val) {
      if (checkboxGroup) {
        checkboxGroup!.changeEvent(props.label)
      } else {
        emit && emit('update:modelValue', val)
      }
    },
})

function handleChange() {
    // 触发change
    nextTick(() => emit('change', modelValue.value))
}

function labelClick() {
    if(props.disabled) return
    checkboxGroup ?  
        checkboxGroup!.changeEvent(props.label)
        : emit && emit('update:modelValue', !modelValue.value)

    nextTick(() => emit('change', modelValue.value))
}


</script>