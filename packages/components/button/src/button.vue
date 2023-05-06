<template>
    <!-- 支持自定义标签，按钮不一定是button标签 -->
   <component 
     :is="tag" 
     v-bind="$props"
     :class= "[
        ns.b(),
        // primary, success, warning, error
        ns.m(type),
        ns.is('disabled',disabled),
        ns.is('round',round),
        ns.is('circle',circle)
     ]"
    >
    <!-- 按钮icon -->
    
    <!-- 按钮文本，如果传入了内容，插槽默认为default -->
    <span v-if="$slots.default">     
        <slot/>
    </span>
   </component>
</template>

<script lang="ts" setup>
import { defineProps} from 'vue'
import {buttonProps} from './button'
import {useNamespace} from '@komi-ui/hooks'

defineOptions({
    name: 'KiButton'
})

const props = defineProps(buttonProps)
const ns = useNamespace('button')

const _props = 

console.log("button props:",props);


</script>

<style lang="scss" scoped>

</style>