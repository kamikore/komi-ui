import { shallowReactive } from "vue"
import type { ComponentInternalInstance, VNode } from 'vue'
import type { MessageProps, MessageHandler } from "./message"


export type MessageContext = {
    id: String
    vnode: VNode
    vm: ComponentInternalInstance
    handler: MessageHandler
    props: MessageProps
}


export const instances: MessageContext[] = shallowReactive([])

/**
 * 获取message instance
 * @param id message instance id
 * @returns 返回当前id的instance，以及上一个instance
 */
export const getInstance = (id: string) => {
    const index = instances.findIndex((instance) => instance.id === id)
    const current = instances[index]
    let prev: MessageContext | undefined
    if (index > 0) {
      prev = instances[index - 1]
    }
    return { current, prev }
}

/**
 * 获取message底部到窗口上边距的距离
 * @param id message instance id
 * @returns 返回当前id的instance的上一个instance的偏移
 */
export const getLastOffset = (id: string): number => {
    const { prev } = getInstance(id)
    if (!prev) return 0
    console.log("bottom", prev.vm.exposed!.bottom.value)
    return prev.vm.exposed!.bottom.value
}


/**
 * 如果存在上一个元素返回的为message间隔，否则返回message的offset属性
 * @param id 
 * @param offset 
 * @returns 返回message之间的默认间隔，或是message offset
 */
export const getOffsetOrGap = (id: string, offset: number):number => {
    const index = instances.findIndex((instance) => instance.id === id)
    // 判断是否还有其他instance 
    return index > 0 ? 20 : offset
}