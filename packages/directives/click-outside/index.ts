import type { ObjectDirective, DirectiveBinding } from 'vue'
import { isFunction,isElement } from '@komi-ui/utils'

const nodeList = new Map()
let startClick: MouseEvent

document.addEventListener('mousedown', (e:MouseEvent) => {startClick = e})
document.addEventListener('mouseup', (e:MouseEvent) => {
    for (const handler of nodeList.values()) {
        handler(e, startClick)
    }
})

function createHandler(el:HTMLElement, binding:DirectiveBinding) {
    
    // 指令参数列表，额外指定包含的节点
    let excludes: HTMLElement[] = []
    if (Array.isArray(binding.arg)) {
      excludes = binding.arg
    } else if (isElement(binding.arg)) {
      excludes.push(binding.arg as unknown as HTMLElement)
    }


    return function(mousedownEv:MouseEvent, mouseupEv:MouseEvent) {
        
        if (
            // el是否是给定节点的后代，即该节点本身、其直接子节点、子节点的直接子节点等。
            el.contains(mousedownEv.target as Node) || 
            excludes.some((elm) => elm?.contains(mousedownEv.target as Node)) ||
            excludes.includes(mousedownEv.target as HTMLElement)
        ) {
            return
        }
        binding.value(mousedownEv)
    }
}


// 注意clickoutside做的事：只要元素外点击便触发，元素是否是隐藏状态并不关心
const clickOutside: ObjectDirective = {
    mounted(el, binding) {
        if(!nodeList.has(el) && binding.value && isFunction(binding.value)) {
            nodeList.set(el,createHandler(el,binding))
        }
    },
    updated(el, binding) {
        
        // 更新handler
        if( binding.value && isFunction(binding.value)) {
            nodeList.set(el,createHandler(el,binding))
        }
    },
    unmounted(el) {
        nodeList.delete(el)
    }
}


export default clickOutside