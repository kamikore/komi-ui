import fs from 'node:fs'
import {resolve} from 'node:path'
import {vpRoot} from '@komi-ui/build-utils'

export const head = [
    // 页面icon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    // 组件库样式
    // ['link', { rel: 'stylesheet', href: '' }],
    // 根据cache缓存的语言偏好重定向
    ['script', {}, fs.readFileSync(resolve(vpRoot, 'lang.js'), 'utf-8')],
]