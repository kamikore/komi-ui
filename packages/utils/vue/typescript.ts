import type { AppContext, Plugin } from 'vue'

// 合并类型
export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}
