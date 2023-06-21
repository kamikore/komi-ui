<template>
    <!-- 支持自定义标签，按钮不一定是button标签 -->
   <component 
        :is="tag" 
        v-bind="$props"
        :class= "[
            ns.b(),
            ns.m(type),
            ns.is('disabled',disabled),
            ns.is('round',round),
            ns.is('circle',circle),
            ns.m(size)
        ]"
        @click="handleClick"
    >
    <!-- 按钮icon -->
    
    <!-- 按钮文本，如果传入了内容，插槽默认为default -->
    <span :class="ns.e('text')" v-if="$slots.default">     
        <slot/>
    </span>

    <ki-icon v-else-if="icon || $slots.icon">
        <component :is="icon" v-if="icon" />
        <slot v-else name="icon" />   
    </ki-icon>
   </component>
</template>

<script lang="ts" setup>
import {buttonProps} from './button'
import { useNamespace } from '@komi-ui/hooks'


defineOptions({
    name: 'KiButton'
})

const emit = defineEmits(['click'])

const props = defineProps(buttonProps)
const ns = useNamespace('button')


function handleClick(ev: MouseEvent) {
    emit && emit('click', ev)

}


</script>

<style lang="scss" scoped>

</style>