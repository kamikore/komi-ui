import { buildProps, COMPONENTSIZES } from "@komi-ui/utils"

interface menuItem {
    label: String
}

export const menuProps = buildProps({
    /**
     * @description Array of items in the menu.
     */
    items: {
        type: Array<menuItem>,
        required: true
    },
    /**
     * @description size of the Menu
     */
    size: {
        type: String,
        values:  COMPONENTSIZES,
        default: 'default'
    },
    /**
     * @description Index of menu item is selected.
     */
    tabIndex: Number,
    /**
     * @description Callback executed on menu item clicks.
     */
    onItemSelect: Function,
    /**
     * @description Max height of menu.
     */
    maxHeight: [String, Number],
})