export const isString = (val:any) => typeof val === 'string';
export const isUndefined = (val: any): val is undefined => val === undefined
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isFunction = (val: any): val is Function => typeof val === 'function'
export const isNil = (val: any) => val == null



export const isObject = (val:any): val is object => 
    Object.prototype.toString.call(val).toLowerCase() === '[object object]'


export const isElement = (e: unknown): e is Element => {
    if (typeof Element === 'undefined') return false
    return e instanceof Element
 }
  