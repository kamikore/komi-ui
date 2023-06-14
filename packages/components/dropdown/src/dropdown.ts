import { buildProps, PLACEMENT } from "@komi-ui/utils"

export const dropdownProps = buildProps({
    maxHeight: String,
    trigger: {
        type: String,
        values: ['hover','click'],
        default: 'hover'
    },
    placement: {
        type: String,
        values: PLACEMENT,
        default: 'bottom'
    },
    showArrow: {
        type: Boolean,
        default: false
    }

})