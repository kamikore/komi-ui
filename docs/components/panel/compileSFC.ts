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

    if (!code.trim()) {
        store.state.errors = []
        return
    }       

    const id = Date.now().toString();
    const scopeId = `data-v-${id}`;

    // 需要注意换行
    let clientCode = `\nconst __module__ = __modules__["${mainFile.filename}"] = {}\n`
    let reCode = ''

    const {descriptor, errors} = parse(code, {
        filename,
        sourceMap: true
    }) 

    // 解析阶段错误
    if (errors.length) {
        store.state.errors = errors
        return
    }

    if (
        descriptor.styles.some((s) => s.lang) ||
        descriptor.template?.lang
    ) {
        store.state.errors = [
        `lang="x" pre-processors for <template> or <style> are currently not ` +
            `supported.`
        ]
        return
    }


    try {
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
            reCode = `\nconst ${COMP_IDENTIFIER} = {}`
            reCode += `\n${template.code.replace(
            /\nexport (function|const) render/,
            `$1 render`
            )}`
            reCode += `\n${COMP_IDENTIFIER}.render = render`

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
        
            // 如果存在script则覆盖掉template编译结果
            // 将默认导出转变为变量 export default -> const __sfc__
            reCode = rewriteDefault(script.content,COMP_IDENTIFIER)
                
        }

        // <style> 可以有多个
        if(descriptor.styles.length != 0) {
            // compiled.css = 
            for (const styleBlock of descriptor.styles) {
                compiled.css += styleBlock.content 
            }
        }

        clientCode += reCode
        clientCode +=  `\n__module__.default = __sfc__`

        compiled.js = clientCode
    } catch(error: any) {
        // error.stack 数组类型
        store.state.errors = [error.stack.split('\n').slice(0, 12).join('\n')]
        return
    }

}