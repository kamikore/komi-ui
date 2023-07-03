import { OPTION } from '@komi-ui/components/select'


export const selectPanelConfig = {
    name: 'ki-select',
    example: 'select/basic',
    props: {
        placeholder: {
            default: 'Please select',
            type: String,
            description: 'Placeholder of the select.'
        },
        options: {
            placeholder: '[]',
            default: 'options',
            type: Array<OPTION>,
            description: 'Array of options in the menu.'
        },
        modelValue: {
            default: 'value',
            type: [String, Number, Boolean, Object],
            description: 'Binding value.'
        },
        maxHeight: {
            type: [String, Number],
            description: 'Max height of menu.'
        },
        disabled: {
            default: false,
            type: Boolean,
            description: 'Whether radio is disabled.'
        }
    }
}