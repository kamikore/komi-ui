import {COMPONENTSIZES} from '@komi-ui/utils'


export const radioPanelConfig = {
    name: 'ki-radio',
    example: 'radio/basic',
    props: {
        size: {
          type: 'Enum',
          options:  COMPONENTSIZES,
          default: 'default',
          description: 'Defines the size of the Radio.'
        },
        modelValue: {
            default:"value",
            type: String,
            description: 'Binding value.',
        },
        name: {
            type: String,
            description: "Native 'name' attribute of radio."
        },
        label: {
          type: [String, Number, Boolean],
          description: 'Value of the Radio when used inside a RadioGroup.',
        },
        disabled: {
            default: false,
            type: Boolean,
            description: 'Whether radio is disabled.'
        }
    },
}

