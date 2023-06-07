import type { App, Plugin } from 'vue'

// 返回install，遍历调用组件install方法，注册所有组件
export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => app.use(c))
  }

  return {
    install
  }
}
