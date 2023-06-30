import {COMPONENTSIZES} from '@komi-ui/utils'


export const menuPanelConfig = {
    name: 'ki-menu',
    example: 'menu/basic',
    props: {
        onItemSelect: {
            value: '() => {}',
            type: Function,
            description: 'Callback executed on menu item clicks.'
        },
        size: {
            value: 'default',
            options: COMPONENTSIZES,
            type: 'Enum',
            description: 'Defines the size of the menu.',
        },
        items: {
            value: `[
                { label: 'Item One' },
                { label: 'Item Two' },
                { label: 'Item Three' },
                { label: 'Item Four' }
            ]`,
            type: Array,
            description: 'Array of items in the menu.',
        },
        maxHeight: {
            type: [String, Number],
            description: 'Max height of menu.'
        }
    },
}

