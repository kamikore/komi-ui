import { buildProps, COMPONENTSIZES } from "@komi-ui/utils"

export interface MENUITEM {
    label?: String
    value?: [String, Number, Boolean, Object]
}

export const menuProps = buildProps({
    /**
     * @description Array of items in the menu.
     */
    items: Array<MENUITEM>,
    /**
     * @description Size of the Menu
     */
    size: {
        type: String,
        values:  COMPONENTSIZES,
        default: 'default'
    },
    /**
     * @description Callback executed on menu item clicks.
     */
    onItemSelect: Function,
    /**
     * @description Max height of menu.
     */
    maxHeight: [String, Number],
})