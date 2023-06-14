import { buildProps } from "@komi-ui/utils"


export const scrollbarProps = buildProps({
    height: String,
    tag: {
        type: String,
        default: 'div'
    }
})