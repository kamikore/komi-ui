import { buildProps } from "@komi-ui/utils"
import type { MENUITEM } from "../../menu/src/menu"

export interface OPTION {
    label: String,
    value: MENUITEM['value']
}

export const selectProps =  buildProps({
    /**
     * @description placeholder of the select
     */
    placeholder: String,
    /**
     * @description array of options in the menu.
     */
    options: Array<OPTION>,
    /**
     * @description binding value
     */
    modelValue: [String, Number, Boolean, Object],
    /**
     * @description Max height of menu.
     */
    maxHeight: [String, Number],
    /**
     * @description whether Select is disabled
     */
    disabled: Boolean,
})