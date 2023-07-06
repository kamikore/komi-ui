import {readFileSync} from 'node:fs'
import {resolve} from 'node:path'
import mdContainer from 'markdown-it-container'
import {docRoot} from '@komi-ui/build-utils'
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string
}

export const mdPlugin = (md:MarkdownIt) => {

    md.use(mdContainer, 'demo', {
      validate(params) {
        return !!params.trim().match(/^demo\s*(.*)$/)
      },
  
      render(tokens, idx) {
          if (tokens[idx].nesting === 1 ) {
              const sourceFileToken = tokens[idx + 2]
              let sourceCode = ''
              const sourceFile = sourceFileToken.children?.[0].content ?? ''
              const filePath =  resolve(docRoot, 'examples', `${sourceFile}.vue`)

              if (sourceFileToken.type === 'inline') {
                  sourceCode = readFileSync(filePath,'utf-8')
              }

              if (!sourceCode) throw new Error(`Incorrect source file: ${sourceFile}`)

              // 注意格式问题，字符source=" "<>" "，否则拼接的标签出错
              // return `<Demo :path="${filePath}" source="${sourceCode}">`
              return `<Suspense><VPDemo path="${sourceFile}" source="${encodeURIComponent(sourceCode)}">`
          } else {
              return '</VPDemo></Suspense>'
          }
      },
    } as ContainerOpts)
  

    md.use(mdContainer, 'panel', {
      validate(params) {
        return !!params.trim().match(/^panel\s*(.*)$/)
      },
  
      render(tokens, idx) {
          const m = tokens[idx].info.trim().match(/^panel\s*(.*)$/)
          if (tokens[idx].nesting === 1 ) {
              const configFile = m && m.length > 1 ? m[1] : ''
              const sourceFileToken = tokens[idx + 2]
              let sourceCode = ''
              const sourceFile = sourceFileToken.children?.[0].content ?? ''
              const filePath =  resolve(docRoot, 'examples', `${sourceFile}.vue`)

              if (sourceFileToken.type === 'inline') {
                  sourceCode = readFileSync(filePath,'utf-8')
              }

              if (!sourceCode) throw new Error(`Incorrect source file: ${sourceFile}`)

              return `
                <Suspense>
                  <VPPanel 
                    :configs="${configFile}"  
                    source="${encodeURIComponent(sourceCode)}"
                  >`
          } else {
              return '</VPPanel></Suspense>'
          }
      },
    } as ContainerOpts)
  }