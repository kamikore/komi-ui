import { buildProps } from '@komi-ui/utils'
import type {CheckboxLabelType} from './checkbox'


export const checkboxGroupProps = buildProps({
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
        type: Array<CheckboxLabelType>,
        default: () => [],
    },
})  