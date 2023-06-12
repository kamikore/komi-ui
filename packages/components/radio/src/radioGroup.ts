import { buildProps } from '@komi-ui/utils'

export const radioGroupProps = buildProps({
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
})