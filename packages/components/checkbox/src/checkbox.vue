<template>
    <span
        :class="[
            ns.b(),
            ns.is('checked', modelValue === label),
        ]"
    >
        <input
            :class="[ns.e('input')]" 
            type="checkbox"
            :name="name"
            :id="id || label"
            :value="label"
        >
        <label :for="id || label">{{ label }}</label>
</span>
</template>

<script setup lang="ts">
import {checkboxProps} from './checkbox'
import { useNamespace } from '@komi-ui/hooks';

defineOptions({
    name: 'KiCheckbox'
})

const props = defineProps(checkboxProps)

const ns = useNamespace('checkbox')



</script>
