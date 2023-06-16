import {isString} from '@komi-ui/utils'
import type { PropType } from 'vue'

export const inputProps = {
    /**
    * @description binding value
    */
    modelValue: {
        type: String,
        default: undefined,
    },
    /**
    * @description type of input
    */
    type: {
        type: String,
        default: 'text'
    },
	 /**
     * @description native input placeholder
     */
    placeholder: {
        type: String,
        default: ''
    },
    /**
     * @description format content
     */
    formatter: Function,
    /**
     * @description parse content
     */
    parser: Function,
    /**
     * @description native input max, min
     */
    max: Number,
    min: Number,
    /**
     * @description native input maxlength, minlength
     */
    maxlength: Number,
    minlength: Number,
    /**
     * @description input suffix icon
     */
    clearable: {
        type: Boolean,
        default: false,
    },
    showPassword: {
        type: Boolean,
        default: false,
    },
    /**
     * @description native input id
     */
    id: {
        type: String,
        default: undefined,
    },
	/**
	* @description native input readonly
	*/
    readonly: {
        type: Boolean,
        default: false,
    },
	/**
	* @description native input disabled
	*/
    disabled: {
        type: Boolean,
        default: false,
    },
    /**
	* @description native input autofocus
	*/
    autofocus: {
        type: Boolean,
        default: false,
    },
    /**
	* @description native input checked
	*/
    checked: {
        type: Boolean,
        default: false,
    },
}

export const inputEmits = {
    // v-model update
    ['update:modelValue']: (value: string) => isString(value),
    input: (value: string) => isString(value),
    change: (value: string) => isString(value),
    focus: (e: FocusEvent) => e instanceof FocusEvent,
    blur: (evt: FocusEvent) => evt instanceof FocusEvent,
    keydown: (evt: KeyboardEvent | Event) => evt instanceof Event,
}
