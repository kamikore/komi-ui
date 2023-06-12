import {COMPONENTSIZES} from '@komi-ui/utils'


export const checkboxPanelConfig = {
    componentName: 'KiCheckbox',
    example: 'checkbox/basic',
    props: {
        size: {
            value: 'default',
            options: COMPONENTSIZES,
            type: 'Enum',
            description: 'Defines the size of the checkbox.',
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
            description: 'Whether Checkbox is disabled.'
        }
    },
}

