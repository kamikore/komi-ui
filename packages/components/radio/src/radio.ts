import { buildProps } from '@komi-ui/utils'
import {componentSizes} from '@komi-ui/utils'


export const radioProps = buildProps({
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
        default: '',
    },
    /**
     * @description size of the Radio
     */
    size: {
      type: String,
      values: componentSizes,
      default: 'default'
    },
    /**
     * @description whether Radio is disabled
     */
    disabled: Boolean,
    /**
     * @description the value of Radio
     */
    label: {
      type: [String, Number, Boolean],
      default: '',
    }
})