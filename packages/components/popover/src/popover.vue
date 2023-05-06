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
import {calcPopWidth, arrowTransform, getPopStyle} from '@komi-ui/utils'

defineOptions({
    name: 'KiPopover'
})

const props = defineProps(popoverProps)
console.log("popover props:",props)

const ns = useNamespace('popover')
const triggerRef = ref<HTMLElement>()
const popoverRef = ref<HTMLElement>()

const popoverStyle = ref<any>(undefined)
const arrowStyle = ref<any>(undefined)

// 显示元素，为了获取宽高
const isShow = ref(true)
popoverStyle.value = {
    visibility: 'hidden'
}

// 缩放监听
let resizeObserver:ResizeObserver

onMounted(() => {
    console.log("triggerRef",triggerRef)
    const triggerElm = triggerRef.value?.firstElementChild
    const bodyElm = document.querySelector('body');

    if(props.showArrow) {
        arrowStyle.value = {
            transform: arrowTransform(popoverRef.value,props.placement)
        }
    }
    // 获取宽高后，隐藏元素
    isShow.value = false

    resizeObserver = new ResizeObserver((entries) => {
        popoverStyle.value = getPopStyle(triggerElm,props.placement,props.showArrow)
    })

    resizeObserver.observe(bodyElm)

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
})

</script>