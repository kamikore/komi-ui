import {isString, COMPONENTSIZES} from '@komi-ui/utils'
import type { PropType } from 'vue'

export const inputProps = {
    /**
     * @description size of Input, works when type is not 'textarea'
     */
    size: {
        type: String,
        values:  COMPONENTSIZES,
        default: 'default'
    },
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
        values: ['text','password','textarea'],
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
     * @description whether textarea has an adaptive height, only works when type is 'textarea'. 
     */
    autoResize: {
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
}

export const inputEmits = {
    // v-model update
    ['update:modelValue']: (value: string) => isString(value),
    input: (value: string) => isString(value),
    change: (value: string) => isString(value),
    focus: (e: FocusEvent) => e instanceof FocusEvent,
    blur: (e: FocusEvent) => e instanceof FocusEvent,
    keydown: (e: KeyboardEvent | Event) => e instanceof Event,
    clear: () => true,
}
