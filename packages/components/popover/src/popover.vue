<template>
    <ki-only-child ref="triggerRef">
        <slot/>
    </ki-only-child>
    <!-- 确保定位相对于body，避免过多的组件嵌套，存在严重副作用 -->
    <teleport to='body'>
        <!-- 初次渲染时应用过渡 -->
       <Transition :name="ns.b('fade')" appear>
            <!-- 兼容样式 -->
            <div 
                :class="[ns.b(),ns.m(size)]" 
                :style="Object.assign(popoverStyle, $attrs?.style)"
                ref="popoverRef"
                v-show="isShow"
                v-clickoutside:[triggerRef?.$el]="trigger === 'click'?handleClickOutside:''"
            >
                <slot name="content"/>
                <span 
                    v-if="showArrow"
                    :class="ns.e('arrow')"
                    :style="arrowStyle"
                ></span>
            </div>
       </Transition>
    </teleport>    
</template>

<script lang="ts" setup>
import {
    ref, 
    onMounted,
    onUnmounted,
} from 'vue'
import {KiOnlyChild} from '@komi-ui/components/slots'
import {popoverProps} from './popover'
import {useNamespace} from '@komi-ui/hooks'
import { vClickoutside } from '@komi-ui/directives'
import {debounce} from '@komi-ui/utils'
import { 
    popIsOverflow, 
    togglePlacement, 
    arrowTransform, 
    getPopStyle
} from "./utils"

defineOptions({
    name: 'KiPopover'
})

const props = defineProps(popoverProps)
const ns = useNamespace('popover')
const triggerRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)

// 缩放监听
let resizeObserver:ResizeObserver
let updatePopoverDebounce:Function

const popoverStyle = ref<any>({})
const arrowStyle = ref<any>({})

const pop_placement = ref(props.placement)
const isShow = ref(true)


onMounted(() => {

    // vueInstance.ctx.$el 
    const triggerElm = triggerRef.value?.$el
    const documentElm = document.documentElement

    // 缓存popover offsetWidth, offsetHeight
    const {offsetWidth, offsetHeight} = popoverRef.value as HTMLElement

     // 获取宽高后，隐藏元素
     isShow.value = false

     updatePopoverDebounce = 
        debounce(() => {
            updatePopover(triggerElm,offsetWidth,offsetHeight)
        })

    resizeObserver = new ResizeObserver(updatePopoverDebounce as ResizeObserverCallback)
    // 监听视窗缩放，body存在问题
    resizeObserver.observe(documentElm)

    // 监听视窗滚动
    window.addEventListener('scroll', updatePopoverDebounce)
   
    if(props.trigger === 'hover') {
        triggerElm.addEventListener('mouseenter', () => isShow.value = true)
        triggerElm.addEventListener('mouseleave', () => isShow.value = false)
    } else {
        triggerElm.addEventListener('click', () => isShow.value = !isShow.value)
    }
})

onUnmounted(() => {
    resizeObserver.disconnect()
    window.removeEventListener('scroll',updatePopoverDebounce)
})

function updatePopover(triggerElm:HTMLElement, popWidth:number, popHeight:number) {
    
    // 判断是否溢出
    if(popIsOverflow(triggerElm,popWidth,popHeight,props.placement,props.showArrow)) {
        // 如果溢出了判断切换位置后，是否仍是溢出,仍溢出则保持
        if(!popIsOverflow(triggerElm,popWidth,popHeight,togglePlacement(props.placement),props.showArrow)) 
            pop_placement.value = togglePlacement(props.placement)
    } else {
        // 不溢出判断placement是否已切换，需要复位
        pop_placement.value !== props.placement?pop_placement.value = props.placement:''
    }

    if(props.showArrow) {
        arrowStyle.value = {
            transform: arrowTransform(popWidth, popHeight, pop_placement.value )
        }
    }

    popoverStyle.value = getPopStyle(triggerElm,pop_placement.value,props.showArrow)
}

function handleClickOutside() {
    if(isShow.value) {
        isShow.value = false
    }
}

</script>
