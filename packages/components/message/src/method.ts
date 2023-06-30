import {createVNode, render, isVNode} from 'vue'
import KiMessage from './message.vue'
import { instances } from './instance'
import { isString, isFunction } from '@komi-ui/utils'
import type { MessageContext } from './instance'
import type { MessageProps } from './message'

let seed = 1

const closeMessage = (instance: MessageContext) => {
    const index = instances.indexOf(instance)
    if (index === -1) return
  
    instances.splice(index, 1)
    const { handler } = instance
    handler.close()
}

const createMessage = (options: String | MessageProps) => {

    const container = document.createElement('div')

    isString(options) ? options = {message: options} : ''  

    const id = `message_${seed++}`

    const props:MessageProps = {
        ...options,
        
        id,
        onClose: () => {
            console.log("删除instance")
            // 删除instances中的实例
            closeMessage(instance)
        },
        // clean message element preventing mem leak
        onDestroy: () => {
            console.log("卸载vnode")
            // 卸载vnode
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
        props: vm.props,
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