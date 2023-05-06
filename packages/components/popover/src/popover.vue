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
            <!-- 默认弹出内容 -->
            <span v-if="!$slots.content">Content</span>
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
import {togglePlacement, arrowTransform, getPopStyle} from '@komi-ui/utils'

defineOptions({
    name: 'KiPopover'
})

const props = defineProps(popoverProps)

const ns = useNamespace('popover')
const triggerRef = ref<HTMLElement>()
const popoverRef = ref<HTMLElement>()

const popoverStyle = ref<any>(undefined)
const arrowStyle = ref<any>(undefined)

const pop_placement = ref(props.placement)

// 显示元素，为了获取宽高
const isShow = ref(true)
popoverStyle.value = {
    visibility: 'hidden'
}

// 缩放监听
let resizeObserver:ResizeObserver
// 相交监听
let intersectionObserver:IntersectionObserver

onMounted(() => {
    const triggerElm = triggerRef.value?.firstElementChild
    const bodyElm = document.querySelector('body');

    // 注册元素相交监听器，设置阀值为1，完全可见视为相交
    intersectionObserver = new IntersectionObserver((entries) => {        
        
        // 当isIntersecting为true并且intersectionRatio不为1时气泡框与视窗相交
        if(entries[0].isIntersecting && entries[0].intersectionRatio !== 1) {
            // 只会根据最初设定的props.placement切换放置，如果已切换则不操作
            if(props.placement !== pop_placement.value) return
            pop_placement.value = togglePlacement(pop_placement.value) 
            popoverStyle.value = getPopStyle(triggerElm, pop_placement.value, props.showArrow)
        }
         
    })


    if(props.showArrow) {
        arrowStyle.value = {
            transform: arrowTransform(popoverRef.value, pop_placement.value )
        }
    }

    // 获取宽高后，隐藏元素
    isShow.value = false
    
    resizeObserver = new ResizeObserver((entries) => {
        popoverStyle.value = getPopStyle(triggerElm, pop_placement.value , props.showArrow)
    })
    // 监听body缩放
    resizeObserver.observe(bodyElm)

    // 开始监听
    intersectionObserver.observe(popoverRef.value)

   
    if(props.trigger === 'hover') {
        triggerElm.addEventListener('mouseenter', (event) => isShow.value = true)
        triggerElm.addEventListener('mouseleave', (event) => isShow.value = false)
    } else {
        triggerElm.addEventListener('click', (event) => {
            isShow.value = !isShow.value
        })
    }
})


onUnmounted(() => {
    resizeObserver.disconnect()
    intersectionObserver.disconnect()
})

</script>