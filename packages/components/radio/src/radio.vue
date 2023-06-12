<template>
    <span 
        :class="[
            ns.b(),
            ns.is('checked', modelValue === label),
        ]"
    >
        <span 
            :class="[
                ns.e('input'),
                ns.is('checked', modelValue === label),
            ]"
        >   
            <!-- value值赋值给modelValue -->
            <input 
                :class="ns.e('original')"
                ref="radioRef"
                type="radio" 
                :id="id"
                :name="name || radioGroup?.name"
                v-model="modelValue"
                :value="label"
                @change="handleChange"
            >
            <span :class="ns.e('inner')"></span>
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
import {radioProps} from './radio'
import { useNamespace } from '@komi-ui/hooks';
import {radioGroupKey} from './constants'

defineOptions({
    name: 'KiRadio'
})

const emit = defineEmits(['update:modelValue','change'])

// 如果没有包裹Group，默认值为undefined
const radioGroup = inject(radioGroupKey, undefined)

const ns = useNamespace('radio')
const props = defineProps(radioProps)
const radioRef = ref<HTMLInputElement>()

const modelValue = computed({
    get() {
        return radioGroup ? radioGroup?.modelValue : props.modelValue
    },
    set(val) {
      if (radioGroup) {
        radioGroup!.changeEvent(val)
      } else {
        emit && emit('update:modelValue', val)
      }
    //   radioRef.value!.checked = props.modelValue === props.label
    },
})

function handleChange() {
    // 触发change
    nextTick(() => emit('change', modelValue.value))
}

function labelClick() {
    modelValue.value = props.label
    nextTick(() => emit('change', modelValue.value))
}


</script>