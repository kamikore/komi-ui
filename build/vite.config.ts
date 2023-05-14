import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {kiOutput,kiRoot} from '@komi-ui/build-utils'
import {resolve} from 'node:path'

export default defineConfig({
  build: {
    target: 'modules',
    // 压缩
    minify: true,
    rollupOptions: {
      external: ['vue'],
      input: resolve(kiRoot,'index.ts'),
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          // 配置打包根目录
          dir: resolve(kiOutput,'es'),
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(kiOutput,'lib'),
          preserveModulesRoot: 'src'
        }
      ]
    },
    lib: {
      entry: 'index.ts',
      formats: ['es', 'cjs']
    }
  },
  plugins: [
    vue()
  ]
})