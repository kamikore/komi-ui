import { withInstall } from "@komi-ui/utils"
import CollapseTransition from './src/collapseTransition.vue'

export const KiCollapseTransition = CollapseTransition

export const KiTransition = withInstall(CollapseTransition)
export default KiTransition