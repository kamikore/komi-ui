<template>
    <ki-only-child ref="triggerRef">
        <slot/>
    </ki-only-child>
    <!-- 确保定位相对于body，避免过多的组件嵌套，存在严重副作用 -->
    <Teleport to='body'>
        <!-- 初次渲染时应用过渡 -->
       <Transition :name="`${ns.namespace}-${transition}`" appear>
            <!-- 兼容样式 -->
            <div 
                :class="[ns.b(),ns.m(size)]" 
                :style="Object.assign(popoverStyle,$attrs?.style)"
                ref="popoverRef"
                :placement="pop_placement"
                v-show="visible === undefined ? isShow : visible"
                v-clickoutside:[triggerRef?.$el]="trigger === 'click'? close : undefined"
                @mouseenter="open"
                @mouseleave="delayClose"
            >
                <slot name="content"/>
                <span 
                    v-if="showArrow"
                    :class="ns.e('arrow')"
                    :style="arrowStyle"
                ></span>
            </div>
       </Transition>
    </Teleport>    
</template>

<script lang="ts" setup>
import {
    ref, 
    unref,
    onMounted,
    onUnmounted,
} from 'vue'
import KiOnlyChild from '@komi-ui/components/slots'
import {popoverProps} from './popover'
import {useNamespace, useTimeoutFn} from '@komi-ui/hooks'
import { vClickoutside } from '@komi-ui/directives'
import {debounce, isElement} from '@komi-ui/utils'
import { 
    popIsOverflow, 
    togglePlacement, 
    arrowTransform, 
    getPopStyle
} from "./utils"
import type {ComponentPublicInstance} from 'vue'


defineOptions({
    name: 'KiPopover',
    // 关闭属性继承警告
    inheritAttrs: false
})

const props = defineProps(popoverProps)
const ns = useNamespace('popover')
const triggerRef = ref<HTMLElement | ComponentPublicInstance>()
const popoverRef = ref<HTMLDivElement>()


// 缩放监听
let updatePopoverDebounce:Function

const popoverStyle = ref<any>({})
const arrowStyle = ref<any>({})
const isShow = ref(true)


const pop_placement = ref(props.placement)


const { start: delayClose, stop: clearTimer } = useTimeoutFn(
  () => props.trigger === 'hover'? close() : '', 
  500, 
  {immediate: false}
)

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

    popoverStyle.value = getPopStyle(
        triggerElm,
        popWidth,
        popHeight,
        pop_placement.value,
        props.showArrow,
        props.minWidthOnTrigger
    )
}

function open() {
    // 防止快速打开关闭带来的抖动
    clearTimer()
    isShow.value = true
}


function close() {
    isShow.value &&= false
}


onMounted(() => {
    // vueInstance.ctx.$el 
    const triggerElm = isElement(triggerRef.value) ? triggerRef.value : triggerRef.value?.$el
    const popElm = unref(popoverRef.value)

    // 缓存popover offsetWidth, offsetHeight
    let {offsetWidth, offsetHeight} = popoverRef.value!

     // 获取宽高后，隐藏元素
     isShow.value = false

    updatePopoverDebounce = 
        debounce(() => {
            updatePopover(triggerElm,offsetWidth,offsetHeight)
        },50)

    updatePopoverDebounce()
    window.addEventListener("resize", updatePopoverDebounce)
    window.addEventListener('scroll', updatePopoverDebounce)
   
    if(props.trigger === 'hover') {
        triggerElm.addEventListener('mouseenter', () => open())
        triggerElm.addEventListener('mouseleave', () => close())
    } else {
        triggerElm.addEventListener('click', () => isShow.value = !isShow.value)
    }
})


onUnmounted(() => {
    // resizeObserver.disconnect()
    window.removeEventListener('resize',updatePopoverDebounce)
    window.removeEventListener('scroll',updatePopoverDebounce)
})


defineExpose({
    close,
    visible: props.visible || isShow
})

</script>
