import {isString, isNumber, isStringNumber} from '@komi-ui/utils'

const SCOPE = 'utils/dom/style'

/**
 * 添加css单位
 * @param value
 * @param defaultUnit 
 * @returns {Boolean}
 */
export function addUnit(value?: string | number, defaultUnit = 'px') {
    if (!value) return ''
    if (isNumber(value) || isStringNumber(value)) {
      return `${value}${defaultUnit}`
    } else if (isString(value)) {
      return value
    }
    console.warn(`[${SCOPE}] `,'binding value must be a string or number')
  }
  