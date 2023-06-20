import {COMPONENTSIZES} from '@komi-ui/utils'


export const checkboxPanelConfig = {
    name: 'ki-checkbox',
    example: 'checkbox/panel-example',
    props: {
        size: {
            value: 'default',
            options: COMPONENTSIZES,
            type: 'Enum',
            description: 'Defines the size of the checkbox.',
        },
        checkmarkType: {
            value: 'checkbox',
            options: ['checkbox','toggle'],
            type: 'Enum',
            description: 'Renders component in a toggle state.'
        },
        label: {
            type: [String, Boolean, Number, Object],
            description: 'Value of the Checkbox when used inside a `checkbox-group`.',
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

