import type {App} from 'vue'
import { SFCInstallWithContext, SFCWithInstall  } from "./typescript"

// 给组件添加install方法
export const withInstall = <T, E extends Record<string, any>>(
    main:T, 
    extra?:E
  ) => {
    // 合并T泛型到SFCWithInstall
  (main as SFCWithInstall<T>).install = (app: App): void => {
    // 合并注册多个组件
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  return main as SFCWithInstall<T> & E  // 合并类型
}

// 注册全局API
export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
      // (fn as SFCInstallWithContext<T>)._context = app._context
      app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}