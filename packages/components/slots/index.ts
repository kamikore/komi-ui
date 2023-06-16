// export * from './src/only-child'
export * from './src/render-slot'

import { withInstall } from "@komi-ui/utils"
import onlyChild from './src/only-child'


export const KiOnlyChild = withInstall(onlyChild)
export default KiOnlyChild