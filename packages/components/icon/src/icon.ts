import { buildProps } from '@komi-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const iconProps = buildProps({
  /**
   * @description SVG icon size, size x size
   */
  size: {
    type: [Number,String],
  },
  /**
   * @description SVG tag's fill attribute
   */
  color: {
    type: String,
  },
})
