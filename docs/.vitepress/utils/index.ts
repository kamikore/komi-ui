import { debounce } from '@komi-ui/utils'
import prism from 'prismjs'
import  loadLanguages from 'prismjs/components/'

/**
 * @description 判断是否处于浏览器环境
 */
export const inBrowser = () => typeof window !== 'undefined'

export const highlight = (source: string, lang: string) => {
    if (!lang) {
        return source
      }
      lang = lang.toLowerCase()
      if (lang === 'vue' || lang === 'html') {
        lang = 'markup'
      }
      if (lang === 'md') {
        lang = 'markdown'
      }
      if (lang === 'ts') {
        lang = 'typescript'
      }
      if (!prism.languages[lang]) {
        try {
          loadLanguages([lang])
        } catch {
          console.warn(`[vitepress] Syntax highlight for language "${lang}" is not supported.`)
        }
      }
      if (prism.languages[lang]) {
        const code = prism.highlight(source, prism.languages[lang], lang)
        return code
      }
      return source
}


export function debounce(callback:Function, timeout:number = 100) {
    let timer:NodeJS.Timeout 
    return function(...args:any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args);       
        },timeout)
    }
}