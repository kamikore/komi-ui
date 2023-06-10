import {PLACEMENT} from '@komi-ui/utils'

export const popoverPanelConfig = {
    componentName: 'KiPopover',
    example: 'popover/basic',
    props: {
        trigger: {
            value: 'hover',
            type: String,
            description: 'How the popover is triggered.',
        },
        showArrow: {
            value: false,
            type: Boolean,
            description: 'Whether to show arrow.',
        },
        placement: {
            value: 'bottom',
            options: PLACEMENT,
            type: 'Enum',
            description: 'How to show the popover.'
        }
    }
}

