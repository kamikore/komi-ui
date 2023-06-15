import {COMPONENTSIZES} from '@komi-ui/utils'


export const inputPanelConfig = {
    name: 'KiInput',
    example: 'input/basic',
    props: {
        size: {
            value: 'default',
            options: COMPONENTSIZES,
            type: 'Enum',
            description: 'Defines the size of the input.',
        },
        modelValue: {
            type: String,
            description: 'Binding value.',
        },
        type: {
            value: 'text',
            type: String,
            description: 'Type of input.',
        },
        placeholder: {
            value: 'Hello',
            type: String,
            description: 'Native input placeholder.'
        },
        max: {
            type: Number,
            description: 'Native input max.'
        },
        min: {
            type: Number,
            description: 'Native input min.'
        },
        maxlength: {
            type: Number,
            description: 'Native input maxlength.'
        },
        minlength: {
            type: Number,
            description: 'Native input minlength.'
        },
        clearable: {
            type: Boolean,
            default: false,
            description: 'Show a clear value icon button.'
        },
        'show-password': {
            value: false,	
            type: Boolean,
            description: 'Show a toggleable password icon button.'
        },
        id: {
            type: String,
            description: 'Native input id.'
        },
        readonly: {
            value: false,
            type: Boolean,
            description: 'Native input readonly.'
        },
        disabled: {
            value: false,
            type: Boolean,
            description: 'Native input disabled.'
        },
        autofocus: {
            value: false,
            type: Boolean,
            description: 'Native input autofocus.'
        },
        checked: {
            value: false,
            type: Boolean,
            description: 'Native input checked.'
        },
    },
}

