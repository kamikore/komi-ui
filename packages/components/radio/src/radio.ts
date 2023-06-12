import { buildProps } from '@komi-ui/utils'
import { COMPONENTSIZES} from '@komi-ui/utils'


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
   * @description value of the Radio when used inside a `radio-group`
   */
    label: {
      type: [String, Number, Boolean],
      default: undefined,
    },
    /**
     * @description whether Radio is disabled
     */
    disabled: Boolean,
})