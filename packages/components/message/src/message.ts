import { buildProps,definePropType } from "@komi-ui/utils"
import type { VNode, ExtractPropTypes } from 'vue'


export const messageProps = buildProps({
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