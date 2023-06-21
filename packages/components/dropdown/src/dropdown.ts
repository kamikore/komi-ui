import { buildProps, PLACEMENT } from "@komi-ui/utils"

export const dropdownProps = buildProps({
    maxHeight: [String, Number],
    trigger: {
        type: String,
        values: ['hover','click'],
        default: 'hover'
    },
    placement: {
        type: String,
        values: ['bottom','bottom-start','bottom-end'],
        default: 'bottom'
    },
    showArrow: {
        type: Boolean,
        default: false
    }

})