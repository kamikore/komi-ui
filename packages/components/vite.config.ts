import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { kiOutput } from '@komi-ui/build-utils'
import {join} from 'node:path'

export default defineConfig({
  build: {
    target: 'modules',
    // 压缩
    minify: true,
    rollupOptions: {
      // 忽略打包vue文件
      external: ['vue'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          // 配置打包根目录
          dir: join(kiOutput,'es'),
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: join(kiOutput,'lib'),
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