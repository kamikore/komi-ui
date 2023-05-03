<template>

    <div ref="triggerRef">
        <slot/>
    </div>
    <!-- 确保定位相对于body，避免过多的组件嵌套，存在严重副作用 -->
    <teleport to='body'>
        <div :class="[ns.b()]" :style="style">
            <slot name="content"/>
        </div>
    </teleport>    
</template>

<script lang="ts" setup>
import {ref, defineProps,onMounted} from 'vue'
import {popoverProps} from './popover'
import {useNamespace} from '@komi-ui/hooks'
import {getClientXY} from '@komi-ui/utils'

defineOptions({
    name: 'KiPopover'
})

const props = defineProps(popoverProps)
const ns = useNamespace('popover')
const triggerRef = ref<HTMLElement>()
const style = ref()

onMounted(() => {
    console.log(triggerRef)
    const inset =  getClientXY(triggerRef.value.children[0])
    
    style.value = {
        position: 'absolute',
        inset,
    }
})


console.log("popover props:",props);

</script>
