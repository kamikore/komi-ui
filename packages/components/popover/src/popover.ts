import {
    PLACEMENT, 
    COMPONENTSIZES, 
    NAMESPACE, 
    buildProps
} from '@komi-ui/utils'

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
    transition: {
        type: String,
        default: 'fade'
    },
    /**
     * @description min-width is based on trigger elements or default
     */
    minWidthOnTrigger: {
        type: Boolean,
        default: false
    }
})