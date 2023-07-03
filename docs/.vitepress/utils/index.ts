import prism from 'prismjs'
// vite-plugin-require-transform 不会对包内的require转换，同样会报错
const loadLanguages = require('prismjs/components/index.js')


/**
 * @description 判断是否处于浏览器环境
 */
export const inBrowser = () => typeof window !== 'undefined'

export const highlight = (source: string, lang: string) => {
    if (!lang || !source) {
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
      // prismjs will load the default languages: markup, 
      // css, clike and javascript. You can load more languages 
      // with the loadLanguages() utility, which will automatically handle any required dependencies.
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