import { PLACEMENT } from "@komi-ui/utils"

export const dropdownPanelConfig = {
    name: 'ki-dropdown',
    example: 'dropdown/basic',
    props: {
        maxHeight: {
            type: String,
            description: ''
        },
        trigger: {
            value: 'hover',
            type: String,
            options: ['hover','click'],
            description: 'Controls how to position the popover relative to the target.'
        },
        placement: {
            value: 'bottom',
            options: ['bottom','bottom-start','bottom-end'],
            type: 'Enum',
            description: 'Controls how to position the popover relative to the target.'
        },
        showArrow: {
            value: true,
            type: Boolean,
            description: 'If true, an arrow will be shown pointing from the popover to the trigger element.'
        }
    },
}

