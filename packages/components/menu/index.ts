import { withInstall } from '@komi-ui/utils'
import Menu from './src/menu.vue'
import MenuItem from './src/menu-item.vue'

export const KiMenuItem = MenuItem

export const KiMenu = withInstall(Menu, {
    MenuItem
})

export * from './src/menu'

export default KiMenu