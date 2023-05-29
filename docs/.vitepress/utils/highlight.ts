import prism from 'prismjs'
import  loadLanguages from 'prismjs/components/'

function wrap(code: string, lang: string): string {
    return `<pre v-pre><code>${code}</code></pre>`
  }


export const highlight = (source: string, lang: string) => {
    if (!lang) {
        return wrap(source, 'text')
      }
      lang = lang.toLowerCase()
      const rawLang = lang
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
        return wrap(code, rawLang)
      }
      return wrap(source, 'text')
}