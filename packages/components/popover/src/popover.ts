import {PLACEMENT,COMPONENTSIZES, buildProps} from '@komi-ui/utils'

export const popoverProps = buildProps({
    size: {
        type: String,
        values: COMPONENTSIZES,
        default: 'default'
    },
    trigger: {
        type: String,
        default: 'hover'
    },
    showArrow: {
        type: Boolean,
        default: false
    },
    placement: {
        type: String,
        values: PLACEMENT,
        default: 'bottom'
    },
})