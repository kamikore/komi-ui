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
import {ref, defineProps, onMounted, onUnmounted} from 'vue'
import {popoverProps} from './popover'
import {useNamespace} from '@komi-ui/hooks'
import {popIsOverflow,togglePlacement, arrowTransform, getPopStyle,debounce} from '@komi-ui/utils'

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

onMounted(() => {
    // 判断triggerElm是否存在
    // 。。。

    const triggerElm = triggerRef.value?.firstElementChild
    const documentElm = document.documentElement

    // 缓存popover offsetWidth, offsetHeight
    const {offsetWidth, offsetHeight} = popoverRef.value as HTMLElement
    
   
    resizeObserver = new ResizeObserver(debounce(() => {
        updatePopover(triggerElm,offsetWidth,offsetHeight)
    }))
    // 监听视窗缩放，body存在问题
    resizeObserver.observe(documentElm)

    // 监听视窗滚动
    window.addEventListener('scroll', debounce(() => {
        updatePopover(triggerElm,offsetWidth,offsetHeight)
    }))
   
    if(props.trigger === 'hover') {
        triggerElm.addEventListener('mouseenter', (event) => isShow.value = true)
        triggerElm.addEventListener('mouseleave', (event) => isShow.value = false)
    } else {
        triggerElm.addEventListener('click', (event) => {
            isShow.value = !isShow.value
        })
    }

    // 获取宽高后，隐藏元素
    isShow.value = false

})


onUnmounted(() => {
    resizeObserver.disconnect()
})



function updatePopover(triggerElm:Element, popWidth:number, popHeight:number) {
    
    // 判断是否溢出
    if(popIsOverflow(triggerElm,popWidth,popHeight,props.placement,props.showArrow)) {
        pop_placement.value = togglePlacement(props.placement)
    } else {
        // 不溢出判断placement是否已切换
        pop_placement.value !== props.placement?pop_placement.value = props.placement:''
    }


    if(props.showArrow) {
        arrowStyle.value = {
            transform: arrowTransform(popWidth, popHeight, pop_placement.value )
        }
    }

    popoverStyle.value = getPopStyle(triggerElm,pop_placement.value,props.showArrow)
}


</script>