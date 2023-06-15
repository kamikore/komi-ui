import {PLACEMENT} from '@komi-ui/utils'

export const popoverPanelConfig = {
    name: 'KiPopover',
    example: 'popover/basic',
    props: {
        trigger: {
            value: 'hover',
            type: String,
            description: 'Controls how to position the popover relative to the target.',
        },
        showArrow: {
            value: false,
            type: Boolean,
            description: 'If true, an arrow will be shown pointing from the popover to the trigger element.'
        },
        placement: {
            value: 'bottom',
            options: PLACEMENT,
            type: 'Enum',
            description: 'Controls how to position the popover relative to the target.'
        }
    }
}

