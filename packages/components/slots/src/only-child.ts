import { 
  Comment,
  Fragment,
  Text,
  defineComponent,
  defineExpose,
  h
} from "vue"
import { isObject } from "@komi-ui/utils"
import { useNamespace } from "@komi-ui/hooks"
import type { Ref, VNode } from 'vue'


const NAME = 'KiOnlyChild'

export const KiOnlyChild = defineComponent({
  props: {
    name: NAME
  },
  // setup
  setup(props, { slots, attrs, expose }) {
    
    console.log("only child",slots.default());
    const defaultSlot = slots.default?.(attrs)
    if (!defaultSlot) return () => null

    // 传入多个节点
    if (defaultSlot.length > 1) {
      console.warn(NAME, 'requires exact only one valid child.')
      return () => null
    }

    // 返回第一个子节点
    const firstNode = findFirstLegitChild(defaultSlot)
    if (!firstNode) {
      console.warn(NAME, 'no valid child node found')
      return () => null
    }


    return () => firstNode
  }
})


function findFirstLegitChild(vnodes: VNode[] | undefined): VNode | null {
  if (!vnodes) return null
  for (const vnode of vnodes) {
    if (isObject(vnode)) {
      switch (vnode.type) {
        case Comment:
          continue
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

// text包裹span
function wrapTextContent(s: string | VNode) {
  if (isObject(s))  s = s.children as string 

  const ns = useNamespace('only-child')
  return h('span', { 
    class: ns.e('content'), 
    innerHTML: s
  })
}