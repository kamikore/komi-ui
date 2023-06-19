export const isString = (val: unknown) => typeof val === 'string';
export const isUndefined = (val: unknown): val is undefined => val === undefined
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isFunction = (val: unknown): val is Function => typeof val === 'function'
export const isNil = (val: unknown) => val == null
export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)


export const isObject = (val: unknown): val is object => 
    Object.prototype.toString.call(val).toLowerCase() === '[object object]'


export const isElement = (val: unknown): val is Element => {
    if (typeof Element === 'undefined') return false
    return val instanceof Element
 }
  

export const isStringNumber = (val: string): boolean => {
    if (!isString(val)) {
        return false
    }
    return !Number.isNaN(Number(val))
}