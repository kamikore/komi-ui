<template>
    <RenderSlot :vnode="defaultSlot"></RenderSlot>
    <!-- 确保定位相对于body，避免过多的组件嵌套，存在严重副作用 -->
    <teleport to='body'>
        <!-- 初次渲染时应用过渡 -->
       <Transition appear>
            <div 
                :class="[ns.b()]" 
                :style="popoverStyle"
                ref="popoverRef"
                v-show="isShow"
                v-clickoutside:[triggerRef]="trigger === 'click'?handleClickOutside:''"
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
       </Transition>
    </teleport>    
</template>

<script lang="ts" setup>
import {
    ref, 
    defineProps,
    onMounted,
    onUpdated,
    onUnmounted,
    useSlots,
} from 'vue'
import {popoverProps} from './popover'
import {useNamespace} from '@komi-ui/hooks'
import { vClickoutside } from '@komi-ui/directives'
import {renderSlot, debounce} from '@komi-ui/utils'
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

const slots = useSlots()
// slots.default()获取到的是默认插槽所有vnode，但拿不到对应的dom实例, 仅获取第一个vnode
const defaultSlot = slots.default && slots.default()[0]

const RenderSlot = renderSlot({
    mountedCallFun: slotMounted
})

const popoverStyle = ref<any>()
const arrowStyle = ref<any>()

const pop_placement = ref(props.placement)

const isShow = ref(true)

// 获取slot的DOM
function slotMounted(slotElm: HTMLElement) {
    triggerRef.value = slotElm
}

onMounted(() => {
    // 判断triggerElm是否存在
    // 。。。
    const triggerElm = triggerRef.value
    const documentElm = document.documentElement

    // 缓存popover offsetWidth, offsetHeight
    const {offsetWidth, offsetHeight} = popoverRef.value as HTMLElement

     // 获取宽高后，隐藏元素
     isShow.value = false

     updatePopoverDebounce = 
        debounce(() => {
            updatePopover(triggerElm as Element,offsetWidth,offsetHeight)
        })

    resizeObserver = new ResizeObserver(updatePopoverDebounce as ResizeObserverCallback)
    // 监听视窗缩放，body存在问题
    resizeObserver.observe(documentElm)

    // 监听视窗滚动
    window.addEventListener('scroll', updatePopoverDebounce)
   
    if(props.trigger === 'hover') {
        triggerElm.addEventListener('mouseenter', (event) => isShow.value = true)
        triggerElm.addEventListener('mouseleave', (event) => isShow.value = false)
    } else {
        // 关闭交由clickOutside关闭
        triggerElm.addEventListener('click', (event) => {
            isShow.value = !isShow.value
        })
    }
})


onUpdated(() => {
    console.log("update hooks");
    
})

onUnmounted(() => {
    resizeObserver.disconnect()
    window.removeEventListener('scroll',updatePopoverDebounce)
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


function handleClickOutside() {
    console.log("clickOutside");
    
    if(isShow.value) {
        isShow.value = false
    }
}


</script>

<style lang="scss" scoped>

/* transition config */
   .v-enter-active,
   .v-leave-active {
     transition: opacity 0.5s ease;
   }

   .v-enter-from,
   .v-leave-to {
     opacity: 0;
   }

</style>