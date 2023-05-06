<template>

    <div ref="triggerRef">
        <slot/>
    </div>
    <!-- 确保定位相对于body，避免过多的组件嵌套，存在严重副作用 -->
    <teleport to='body'>
        <div 
            :class="[ns.b()]" 
            :style="popoverStyle"
            ref="popoverRef"
            v-show="isShow"
        >
            <slot name="content"/>
            <span 
                v-if="showArrow"
                :class="ns.e('arrow')"
                :style="arrowStyle"
            ></span>
        </div>
    </teleport>    
</template>

<script lang="ts" setup>
import {ref, nextTick, defineProps, onMounted, onUnmounted} from 'vue'
import {popoverProps} from './popover'
import {useNamespace} from '@komi-ui/hooks'
import {calcPopXY,calcPopWidth, arrowTransform} from '@komi-ui/utils'

defineOptions({
    name: 'KiPopover'
})

const props = defineProps(popoverProps)
const ns = useNamespace('popover')
const triggerRef = ref<HTMLElement>()
const popoverRef = ref<HTMLElement>()

const popoverStyle = ref(undefined)
const arrowStyle = ref(undefined)
// 显示元素，为了获取宽高
const isShow = ref(true)
popoverStyle.value = {
    visibility: 'hidden'
}

// 缩放监听
let resizeObserver

onMounted(() => {
    
    const triggerElm:HTMLElement = triggerRef.value?.firstElementChild
    const bodyElm = document.querySelector('body');
    

    if(props.showArrow) {
        arrowStyle.value = {
            transform: arrowTransform(popoverRef.value,props.placement)
        }
    }
    // 获取宽高后，隐藏元素
    isShow.value = false

    resizeObserver = new ResizeObserver((entries) => {
        const {top,left} = calcPopXY(triggerElm,props.placement)
        popoverStyle.value = {
            position: 'absolute',
            inset: `${props.showArrow?top + 4:top}px auto auto ${left}px`
        }
    })

    resizeObserver.observe(bodyElm)


    if(props.trigger === 'hover') {
        triggerElm.addEventListener('mouseenter', (event) => isShow.value = true)
        triggerElm.addEventListener('mouseleave', (event) => isShow.value = false)
    } else {
        triggerElm.addEventListener('click', (event) => {
            isShow.value = !isShow.value
            console.log(popoverRef)
        })
    }


})


onUnmounted(() => {
    resizeObserver.disconnect()
})



</script>


<style lang="scss" scoped>
ul li {
    list-style: none;
}
</style>