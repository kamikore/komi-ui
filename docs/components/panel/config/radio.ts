import {COMPONENTSIZES} from '@komi-ui/utils'


export const radioPanelConfig = {
    componentName: 'KiRadio',
    example: 'radio/basic',
    props: {
        size: {
            value: 'default',
            options: COMPONENTSIZES,
            type: 'Enum',
            description: 'Defines the size of the radio.',
        },
        modelValue: {
            type: [String, Number, Boolean],
            description: 'Binding value.',
        },
        id: {
            type: String,
            description: 'Native input id.'
        },
        name: {
            type: String,
            description: 'Native input name.'
        },
        disabled: {
            type: Boolean,
            description: 'Whether Radio is disabled.'
        }
    },
}

