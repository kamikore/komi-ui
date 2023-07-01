import {COMPONENTSIZES} from '@komi-ui/utils'


export const radioPanelConfig = {
    name: 'ki-radio-group',
    example: 'radio/basic',
    props: {
        modelValue: {
            type: String,
            description: 'Binding value.',
        },
        name: {
            type: String,
            description: "Native 'name' attribute of radio."
        },
        disabled: {
            value: false,
            type: Boolean,
            description: 'Whether radio is disabled.'
        }
    },
}

