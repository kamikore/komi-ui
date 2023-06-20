import {COMPONENTSIZES} from '@komi-ui/utils'


export const radioPanelConfig = {
    name: 'ki-radio-group',
    example: 'radio/basic',
    props: {
        modelValue: {
            value: 'option',
            type: String,
            description: 'Binding value.',
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

