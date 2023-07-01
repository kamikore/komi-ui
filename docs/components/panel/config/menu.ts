import {COMPONENTSIZES} from '@komi-ui/utils'


export const menuPanelConfig = {
    name: 'ki-menu',
    example: 'menu/basic',
    props: {
        onItemSelect: {
            placeholder: '() => {}',
            type: Function,
            description: 'Callback executed on menu item clicks.'
        },
        modelValue: {
            type: [String, Number, Boolean, Object],
            description: 'Binding value.',
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
            description: 'Defines the max height of the menu.'
        }
    },
}

