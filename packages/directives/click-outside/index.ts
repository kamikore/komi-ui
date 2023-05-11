import type { ObjectDirective, DirectiveBinding } from 'vue'


const nodeList = new Map()
let startClick: MouseEvent

document.addEventListener('mousedown', (e:MouseEvent) => {startClick = e})
document.addEventListener('mouseup', (e:MouseEvent) => {
    for (const handler of nodeList.values()) {
        handler(e, startClick)
    }
})

function createHandler(el:HTMLElement, binding:DirectiveBinding) {

    return function(mousedownEv:MouseEvent, mouseupEv:MouseEvent) {
        // el是否是给定节点的后代，即该节点本身、其直接子节点、子节点的直接子节点等。
        if (!el.contains(mousedownEv.target as Node)) {
            binding.value(mousedownEv)
        }
    }
}


// 注意clickoutside做的事：只要元素外点击便触发，元素是否是隐藏状态并不关心
const clickOutside: ObjectDirective = {
    beforeMount(el, binding) {
        if(!nodeList.has(el)) {
            nodeList.set(el,createHandler(el,binding))
        }
    },
    unmounted(el) {
        nodeList.delete(el)
    }
}


export default clickOutside