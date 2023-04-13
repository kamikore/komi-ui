import type { App, Plugin } from '@vue/runtime-core'

// 遍历注册所有组件
export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {

    components.forEach((c) => app.use(c))
  }

  return {
    install
  }
}
