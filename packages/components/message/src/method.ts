import {createVNode, render, isVNode} from 'vue'
import KiMessage from './message.vue'
import { instances } from './instance'
import { isFunction } from '@komi-ui/utils'
import type {MessageContext} from './instance'

let seed = 1

const createMessage = (options) => {

    const container = document.createElement('div')

    const props = {
        ...options,
      
        // clean message element preventing mem leak
        onDestroy: () => {
            render(null, container)
        },
    }

    const vnode = createVNode(
        KiMessage,
        props,
        isFunction(props.message) || isVNode(props.message)
        ? {
            default: isFunction(props.message)
              ? props.message
              : () => props.message,
          }
        : null
    )

    render(vnode,container)

    document.body.appendChild(container.firstElementChild!)


    const id = `message_${seed++}`
    const vm = vnode.component!

    const handler = {
      // !! instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
      // for out component, so that all closing steps will not be skipped.
      close: () => {
        vm.exposed!.visible.value = false
      },
    }

    const instance: MessageContext = {
        id,
        vnode,
        props,
        vm,
        handler
    }

    // 返回对message的操作
    return instance
}

const Message = (options = {}) =>{
    
    const instance = createMessage(options)
    instances.push(instance)

    return instance.handler

}

export default Message