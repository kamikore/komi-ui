import {
    parse, 
    compileTemplate,
    compileScript, 
    rewriteDefault,
} from 'vue/compiler-sfc'
import type { Store, File } from './store';


export const COMP_IDENTIFIER = '__sfc__'

export function compileSFC(store: Store, mainFile: File) {
    
    store.state.errors.length = 0
    const {filename, code , compiled} = mainFile

    const id = Date.now().toString();
    const scopeId = `data-v-${id}`;

    let clientCode = `\nconst __module__ = __modules__["${mainFile.filename}"] = {}`

    const {descriptor, errors} = parse(code, {
        filename,
        sourceMap: true
    }) 

    if (
        descriptor.styles.some((s) => s.lang) ||
        (descriptor.template && descriptor.template.lang)
      ) {
        store.state.errors = [
          `lang="x" pre-processors for <template> or <style> are currently not ` +
            `supported.`
        ]
        return
    }

    console.log("重新编译",descriptor)


    if(descriptor.template) {
        const template = compileTemplate({
            source: descriptor.template?.content,
            filename: mainFile.filename,
            id: scopeId,
        })



        // export function render() -> 
        // function render()
        // __sfc__.render = render
        // __module__.default = __sfc__
        let reCode = `\nconst ${COMP_IDENTIFIER} = {}`
        reCode += `\n${template.code.replace(
          /\nexport (function|const) render/,
          `$1 render`
        )}`
        reCode += `\n${COMP_IDENTIFIER}.render = render`

        clientCode += reCode

        console.log("template编译", reCode)
    }


    if(descriptor.script || descriptor.scriptSetup) {
        const script = compileScript(
            descriptor, 
            { 
                // 是否编译模板并直接在setup()里面内联生成的渲染函数
                inlineTemplate: true,
                id: scopeId
            }
        )
    
        
        // 将默认导出转变为变量
        let reCode = rewriteDefault(script.content,COMP_IDENTIFIER)
               
        clientCode += reCode
        console.log("compileScript结果：", reCode);
        
    }

    // <style> 可以有多个
    if(descriptor.styles.length != 0) {
        // compiled.css = 
        for (const styleBlock of descriptor.styles) {
            compiled.css += styleBlock.content 
        }
    }

    clientCode +=  `\n__module__.default = __sfc__`

    compiled.js = clientCode



}