import {PLACEMENT} from '@komi-ui/utils'

export const popoverPanelConfig = {
    name: 'ki-popover',
    example: 'popover/basic',
    props: {
        trigger: {
            default: 'hover',
            type: 'Enum',
            options: ['hover','click'],
            description: 'Controls how to position the popover relative to the target.',
        },
        showArrow: {
            default: false,
            type: Boolean,
            description: 'If true, an arrow will be shown pointing from the popover to the trigger element.'
        },
        placement: {
            default: 'bottom',
            options: PLACEMENT,
            type: 'Enum',
            description: 'Controls how to position the popover relative to the target.'
        },
        visible: {
            type: Boolean,
            description: 'Whether popover is visible.'
        },
        minWidthOnTrigger: {
            default: false,
            type: Boolean,
            description: 'Defines the min-width is based on trigger element or default.'
        }
    }
}

