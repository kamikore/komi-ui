<template>
    <div :class="[ ns.b()]">
        <input 
            :class="[ns.e('inner')]"
            v-bind="$props"
            v-model="textValue" 
            :type="type"
        >
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
import {inputProps} from './input'
import {useNamespace} from '@komi-ui/hooks'

defineOptions({
    name: 'KiInput'
})

const props = defineProps(inputProps)
const ns = useNamespace('input')
const textValue = ref('')

console.log('input props:',props)

</script>

<style lang="scss" scoped>

    
</style>