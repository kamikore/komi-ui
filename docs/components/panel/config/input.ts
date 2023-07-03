import {COMPONENTSIZES} from '@komi-ui/utils'


export const inputPanelConfig = {
    name: 'ki-input',
    example: 'input/basic',
    props: {
        size: {
            default: 'default',
            options: COMPONENTSIZES,
            type: 'Enum',
            description: 'Defines the size of the input.',
        },
        modelValue: {
            default: 'msg',
            type: String,
            description: 'Binding value.',
        },
        type: {
            default: 'text',
            type: String,
            description: 'Type of input.',
        },
        placeholder: {
            default: 'Hello World!',
            type: String,
            description: 'Native input placeholder.'
        },
        clearable: {
            default: false,
            type: Boolean,
            description: 'Show a clear value icon button.'
        },
        'showPassword': {
            default: false,	
            type: Boolean,
            description: 'Show a toggleable password icon button.'
        },
        autoResize: {
            default: false,
            type: Boolean,
            description: "Whether textarea has an adaptive height, only works when type is 'textarea'."
        },
        readonly: {
            default: false,
            type: Boolean,
            description: 'Native input readonly.'
        },
        disabled: {
            default: false,
            type: Boolean,
            description: 'Native input disabled.'
        },
        autofocus: {
            default: false,
            type: Boolean,
            description: 'Native input autofocus.'
        },
    },
}

