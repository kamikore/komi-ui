

export const defaultNamespace = 'ki'
const statePrefix = 'is-'

// BEM命名风格
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}



export const useNamespace = (
    block: string,
  ) => {
    const namespace = defaultNamespace
    // block
    const b = (blockSuffix = '') =>
      _bem(namespace, block, blockSuffix, '', '')
    // element
    const e = (element?: string) =>
      element ? _bem(namespace, block, '', element, '') : ''
    // modifier
    const m = (modifier?: string) =>
      modifier ? _bem(namespace, block, '', '', modifier) : ''
    // block + element
    const be = (blockSuffix?: string, element?: string) =>
      blockSuffix && element
        ? _bem(namespace, block, blockSuffix, element, '')
        : ''
    // element + modifier
    const em = (element?: string, modifier?: string) =>
      element && modifier
        ? _bem(namespace, block, '', element, modifier)
        : ''
    // block + modifier
    const bm = (blockSuffix?: string, modifier?: string) =>
      blockSuffix && modifier
        ? _bem(namespace, block, blockSuffix, '', modifier)
        : ''
    // block + element + modifier
    const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
      blockSuffix && element && modifier
        ? _bem(namespace, block, blockSuffix, element, modifier)
        : ''

    // state ==> "is-disabled"
    const is: {
      (name: string, state: boolean | undefined): string
      (name: string): string
    } = (name: string, ...args: [boolean | undefined] | []) => {
      
      // 属性多于一个默认以true处理
      const state = args.length >= 1 ? args[0] : true
      return name && state ? `${statePrefix}${name}` : ''
    }


    return {
      namespace,
      b,
      e,
      m,
      be,
      em,
      bm,
      bem,
      is,
    }
  }