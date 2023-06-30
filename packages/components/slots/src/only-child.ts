import type { VNode } from 'vue'
import {
  Comment,
  Fragment,
  Text,
  defineComponent,
  h,
  cloneVNode
} from "vue"
import { isObject } from "@komi-ui/utils"
import {useNamespace} from '@komi-ui/hooks'


const NAME = 'KiOnlyChild'

export const OnlyChild = defineComponent(
  (_, { slots, attrs}) => {
    return () => {
        const defaultSlot = slots.default?.(attrs)
        if (!defaultSlot) return null
    
        // 传入多个节点
        if (defaultSlot.length > 1) {
          console.warn(NAME, 'requires exact only one valid child.')
          return null
        }

        // 返回第一个子节点
        const firstNode = findFirstLegitChild(defaultSlot)
        if (!firstNode) {
          console.warn(NAME, 'no valid child node found')
          return null

        }

        // cloneVNode返回一个克隆的 vnode，可在原有基础上添加一些额外的 prop。
        return cloneVNode(firstNode, attrs)
    }
  },
  {
    name:NAME
  }
)

function findFirstLegitChild(vnodes: VNode[] | undefined): VNode | null {
  if (!vnodes) return null
  if(vnodes.length > 1)  
    console.warn(NAME, 'requires exact only one valid child.')

  for (const vnode of vnodes) {
    if (isObject(vnode)) {
      switch (vnode.type) {
        case Comment:
          continue
        // 注意如果OnlyChild内不对文本包裹一个标签，triggerRef.value得到的将会是一个文本节点，不具备某些Element属性
        case Text:
        case 'svg':
          return wrapTextContent(vnode)
        case Fragment:
          return findFirstLegitChild(vnode.children as VNode[])
        default:
          return vnode
      }
    }
    return wrapTextContent(vnode)
  }
  return null
}

// 包裹span
function wrapTextContent(s: string | VNode) {
  if (isObject(s))  s = s.children as string 

  const ns = useNamespace('only-child')
  return h('span', { 
    class: ns.e('content'), 
    innerHTML: s
  })
}

