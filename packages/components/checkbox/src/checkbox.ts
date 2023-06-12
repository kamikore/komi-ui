import { buildProps } from '@komi-ui/utils'
import { COMPONENTSIZES} from '@komi-ui/utils'

export type CheckboxLabelType = String | Number | Boolean | Object

export const checkboxProps = buildProps({
    /**
     * @description input id
     */
      id: {
        type: String,
        default: undefined,
    },
    /**
     * @description native `name` attribute
     */
    name: {
        type: String,
        default: undefined,
    },
    /**
     * @description binding value
     */
    modelValue: {
        type: [String, Number, Boolean],
        default: undefined,
    },
    /**
     * @description size of the Radio
     */
    size: {
      type: String,
      values:  COMPONENTSIZES,
      default: 'default'
    },
    /**
     * @description value of the Checkbox when used inside a `checkbox-group`
     */
    label: {
      type: [String, Boolean, Number, Object],
    },
    /**
     * @description whether Radio is disabled
     */
    disabled: Boolean,
})