import { buildProps,definePropType } from "@komi-ui/utils"
import type { VNode, Component , ExtractPropTypes } from 'vue'


export const messageProps = buildProps({
    id: {
        type: String,
        default: ''
    },
    /**
     * @description Display duration, millisecond. If set to 0, it will not turn off automatically.
     */
    duration: {
        type: Number,
        default: 3000
    },
    /**
     * @description set the distance to the top of viewport
     */
    offset: {
        type: [String ,Number],
        default: 16
    },
    /**
     * @description message text
     */
    message: {
        // 字符串，节点，或是h()
        type: definePropType<string | VNode | (() => VNode)>([
        String,
        Object,
        Function,
        ]),
        default: '',
    },
    /**
     * @description whether to show a close button
     */
    closable: {
        type: Boolean,
        default: false
    },
    /**
     * @description message prefix icon
     */
    icon: {
        type: definePropType<string | Component>([String, Object]),
        default: undefined
    },
    /**
     * @description
     */
    onClose: Function,
    /**
     * @description
     */
    onDestroy: Function
})


export interface MessageHandler {
    /**
     * @description close the Message
     */
    close: () => void
}
  

export type MessageProps = ExtractPropTypes<typeof messageProps>