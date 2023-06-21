import { buildProps } from "@komi-ui/utils"


export const scrollbarProps = buildProps({
    height: [String, Number],
    tag: {
        type: String,
        default: 'div'
    }
})