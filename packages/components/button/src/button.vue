<template>
   <component 
     :is="tag" 
     :class= "[
        ns.b(),
        // primary, success, warning, error
        ns.m(props.type),
        ns.is('disabled',props.disabled),
        ns.is('round',props.round),
        ns.is('circle',props.circle)
     ]"
    >
    <!-- 按钮icon -->

    <!-- 按钮文本，如果传入了内容，插槽默认为default -->
    <span v-if="$slots.default">     
        <slot/>
    </span>
   </component>
</template>

<script setup>
import { defineProps} from 'vue'
import {buttonProps} from './button'
import {useNamespace} from '@komi-ui/hooks'

defineOptions({
    name: 'KiButton'
})

const props = defineProps(buttonProps)
const ns = useNamespace('button')

console.log("button props:",props);


</script>

<style lang="scss" scoped>

</style>