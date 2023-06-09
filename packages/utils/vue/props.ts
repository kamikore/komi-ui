import {isArray, isObject} from '@komi-ui/utils'
import {warn} from 'vue'
import type { PropType,ComponentOptions} from 'vue'


export type KiProp<T = any> = KiPropOptions<T> | PropType<T>

export interface KiPropOptions<T> {
    // { new (): T } | { new (): T }[]
    type?: PropType<T>
    required?: boolean
    values?: string[]
    validator?: (value: unknown) => boolean
    default?: T | ((rawProps: object) => T)
}


export const buildProps = (
    props: string[] | Record<string, KiProp>
):ComponentOptions => {
    if(isArray(props)) return props

    return Object.fromEntries(
      Object.entries(props).map(([key, option]) => [
        key,
        buildProp(key,option),
      ])
    ) 
}


export const buildProp = <T>( key: string, prop: KiProp<T>) => {
    if(!isObject(prop)) return prop

    const {
        type,
        required,
        values,
        validator,
        default:defaultValue
    } = prop as KiPropOptions<T>

    let valid = false
    let allowedValues: unknown[] = []
    const  _validator = values || validator 
    ? (val: unknown) => {
        
        if(values) {
            allowedValues = Array.from(values)
            // 仅会在valid为false时赋值
            valid ||= allowedValues.includes(val)
        }
        if (validator) valid ||= validator(val)

        if (!valid && allowedValues.length > 0) {
            const allowValuesText = [...new Set(allowedValues)]
              .map((value) => JSON.stringify(value))
              .join(', ')
            warn(
              `Invalid prop: validation failed${
                key ? ` for prop "${key}"` : ''
              }. Expected one of [${allowValuesText}], got value ${JSON.stringify(
                val
              )}.`
            )
          }
          return valid
    }: undefined

    const compProp  = {
        type,
        required: !!required,
        default: defaultValue,
        validator: _validator
    }

    return compProp
}   