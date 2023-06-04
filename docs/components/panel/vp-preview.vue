<template>
    <div class="preview-wrap">
        <div  class="preview-container" ref="container" ></div>
    </div>
</template>


<script setup lang="ts">
import {
    parse, 
    compileScript, 
    compileStyle
} from 'vue/compiler-sfc'
import {
  ref, 
  computed, 
  watchEffect,
  inject,
  onMounted, 
  onUnmounted,
} from 'vue'
import type { WatchStopHandle } from 'vue'
import type { Store } from './store'

// iframe 模板
import srcdoc from './srcdoc.html?raw'


const props = defineProps({
    source: {
        type: String,
        require: true
    }
})

// 注入store
const store = inject('store') as Store

// iframe dom
let sandbox: HTMLIFrameElement
let stopUpdateWatcher: WatchStopHandle | undefined

const container = ref()


function createSandbox() {
  if (sandbox) {
    stopUpdateWatcher && stopUpdateWatcher()
    container.value.removeChild(sandbox)
  }

  sandbox = document.createElement('iframe')
  sandbox.setAttribute(
    'sandbox',
    [
      'allow-forms',
      'allow-modals',
      'allow-pointer-lock',
      'allow-popups',
      'allow-same-origin',
      'allow-scripts',
      'allow-top-navigation-by-user-activation'
    ].join(' ')
  )
  sandbox.style.border = 'none'
  sandbox.style.width = '100%'

  const importMap = store.getImportMap()
  if (!importMap.imports) {
    importMap.imports = {}
  }
  if (!importMap.imports.vue) {
    importMap.imports.vue = store.state.vueRuntimeURL
  }

  // 插入 importmap
  const sandboxSrc = srcdoc.replace(
    /<!--IMPORT_MAP-->/,
    JSON.stringify(importMap)
  )
  sandbox.srcdoc = sandboxSrc
  container.value.appendChild(sandbox)


  sandbox.addEventListener('load', () => {
    stopUpdateWatcher = watchEffect(updatePreview)
  })
}


// 更新预览
async function updatePreview() {
    console.log("updatePreview 重新调用" )

    // 用于创建<script>
    let codeToEval

    try {
        const { mainFile }= store.state

        codeToEval = [
          `window.__modules__ = {}\nwindow.__css__ = ''\n` +
          `document.body.innerHTML = '<div id="app"></div>'\n`,
          mainFile.compiled.js,
          `window.__css__ += ${JSON.stringify(mainFile.compiled.css)}`,
          `document.getElementById('__sfc-styles').innerHTML = window.__css__`
        ]

        // if main file is a vue file, mount it.
        if (mainFile.filename.endsWith('.vue')) {
          codeToEval.push(
            `import {createApp as _createApp } from "vue"
             const _mount = () => {
              const AppComponent = __modules__["${mainFile.filename}"].default
              AppComponent.name = 'Repl'
              const app = _createApp(AppComponent)
              app.mount('#app')
            }
            _mount()`
          )
        }

    } catch(error: any) {
        store.state.errors.push(error.message)
    }

    sandbox.contentWindow?.postMessage({ action: 'eval', scripts: codeToEval }, '*')
}


onMounted(() => {

  createSandbox()
})


onUnmounted(() => {
  stopUpdateWatcher && stopUpdateWatcher()
})

</script>