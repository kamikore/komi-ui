import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {kiOutput,kiRoot} from '@komi-ui/build-utils'
import {resolve} from 'node:path'

export default defineConfig({
  build: {
    target: 'modules',
    minify: true,
    rollupOptions: {
      // 忽略vue.js
      external: ['vue'],
      input: [resolve(kiRoot,'index.ts')],
      output: [
        {
          format: 'umd',
          name: 'KomiUi',
          entryFileNames: '[name].full.js',
          dir: resolve(kiOutput,'dist'),
          globals: {
            vue: 'Vue'
          },
        },
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          dir: resolve(kiOutput,'es'),
          globals: {
            vue: 'Vue'
          },
          preserveModules: true,
          preserveModulesRoot: kiRoot
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: resolve(kiOutput,'lib'),
          globals: {
            vue: 'Vue'
          },
          preserveModules: true,
          preserveModulesRoot: kiRoot
        },

      ]
    },
    lib: {
      entry: resolve(kiOutput,'lib','index.js'),
    }
  },
  plugins: [
    vue(),
  ]
})