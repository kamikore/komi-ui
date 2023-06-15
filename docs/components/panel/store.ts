import { version, reactive, watchEffect } from 'vue'
import { compileSFC } from './compileSFC'
import {
  SFCScriptCompileOptions,
  SFCAsyncStyleCompileOptions,
  SFCTemplateCompileOptions
} from 'vue/compiler-sfc'

export const defaultMainFile = 'App.vue'

const welcomeCode = `
<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>

<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>
`.trim()

export class File {
  filename: string
  code: string
  hidden: boolean
  compiled = {
    js: '',
    css: '',
  }

  constructor(filename: string, code = '', hidden = false) {
    this.filename = filename
    this.code = code
    this.hidden = hidden
  }
}

export interface StoreState {
  mainFile: File
  files: Record<string, File>
  errors: (string | Error)[]
  vueRuntimeURL: string
  uiLibURL?: string
}

export interface SFCOptions {
  script?: Partial<SFCScriptCompileOptions>
  style?: Partial<SFCAsyncStyleCompileOptions>
  template?: Partial<SFCTemplateCompileOptions>
}

export interface Store {
  state: StoreState
  options?: SFCOptions
  vueVersion?: string
  getImportMap: () => any
}

export interface StoreOptions {
  initCode?: string
  // loose type to allow getting from the URL without inducing a typing error
  defaultVueRuntimeURL?: string
  // KomiUi 
  defaultUiLibURL?: string

}

export class ReplStore implements Store {
  state: StoreState
  vueVersion?: string
  options?: SFCOptions

  private defaultVueRuntimeURL: string
  private defaultUiLibURL: string

  constructor({
    // 初始化文件代码
    initCode = welcomeCode,
    // vue浏览器运行时环境
    defaultVueRuntimeURL = `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`,
    // komi-ui ESM
    defaultUiLibURL = 'https://unpkg.com/komi-ui/es/index.mjs'
  }: StoreOptions = {}) {
    let files: StoreState['files'] = {
      [defaultMainFile]: new File(defaultMainFile, initCode)
    }


    this.defaultVueRuntimeURL = defaultVueRuntimeURL
    this.defaultUiLibURL = defaultUiLibURL

    this.state = reactive({
      files,
      mainFile: files[defaultMainFile],
      errors: [],
      vueRuntimeURL: this.defaultVueRuntimeURL,
      uiLibURL: this.defaultVueRuntimeURL
    })

    this.initImportMap()

    // 监听mainFile改变，重新编译
    watchEffect(() => compileSFC(this, this.state.mainFile))
  }

  getFiles() {
    const exported: Record<string, string> = {}
    for (const filename in this.state.files) {
      exported[filename] = this.state.files[filename].code
    }
    return exported
  }

  private initImportMap() {
    const map = this.state.files['import-map.json']
    if (!map) {
      this.state.files['import-map.json'] = new File(
        'import-map.json',
        JSON.stringify(
          {
            imports: {
              vue: this.defaultVueRuntimeURL,
              'komi-ui': this.defaultUiLibURL,
            }
          },
          null,
          2
        )
      )
    } 
  }

  getImportMap() {
    try {
      return JSON.parse(this.state.files['import-map.json'].code)
    } catch (e) {
      this.state.errors = [
        `Syntax error in import-map.json: ${(e as Error).message}`
      ]
      return {}
    }
  }

  setImportMap(map: {
    imports: Record<string, string>
    scopes?: Record<string, Record<string, string>>
  }) {
    this.state.files['import-map.json']!.code = JSON.stringify(map, null, 2)
  }

}
