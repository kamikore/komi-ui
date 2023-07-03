import {COMPONENTSIZES} from '@komi-ui/utils'


export const checkboxPanelConfig = {
    name: 'ki-checkbox',
    example: 'checkbox/panel-example',
    props: {
        children: {
            default: 'Checkbox',
            type: String,
            description: 'The Element displayed next to the checkbox.'
        },
        size: {
            default: 'default',
            options: COMPONENTSIZES,
            type: 'Enum',
            description: 'Defines the size of the checkbox.',
        },
        checkmarkType: {
            default: 'checkbox',
            options: ['checkbox','toggle'],
            type: 'Enum',
            description: 'Renders component in a toggle state.'
        },
        chang: {
            placeholder: '() => {}',
            type: Function,
            description: 'Function called when value is changed.',
        },
        label: {
            type: [String, Boolean, Number, Object],
            description: 'Value of the Checkbox when used inside a `checkbox-group`.',
        },
        modelValue: {
            default: 'value',
            type: [String, Number, Boolean],
            description: 'Binding value.',
        },
        disabled: {
            type: Boolean,
            description: 'Whether Checkbox is disabled.'
        }
    },
}

