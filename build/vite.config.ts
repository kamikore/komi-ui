import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// ！！设置组件 option
import DefineOptions from 'unplugin-vue-define-options/vite'
import {kiOutput,kiRoot} from '@komi-ui/build-utils'
import {resolve} from 'node:path'

export default defineConfig({
  build: {
    target: 'modules',
    minify: true,
    rollupOptions: {
      external: ['vue'],
      input: [resolve(kiRoot,'index.ts')],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          // 配置打包根目录
          dir: resolve(kiOutput,'es'),
          preserveModulesRoot: 'src',
          globals: {
            vue: 'Vue'
          },
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(kiOutput,'lib'),
          preserveModulesRoot: 'src',
          globals: {
            vue: 'Vue'
          },
        }
      ]
    },
    lib: {
      entry: resolve(kiOutput,'lib','index.js'),
      formats: ['es', 'cjs']
    }
  },
  plugins: [
    vue(),
    DefineOptions()
  ]
})