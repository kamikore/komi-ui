import fs from 'node:fs'
import {resolve} from 'node:path'
import {vpRoot} from '@komi-ui/build-utils'
import type { HeadConfig } from 'vitepress'


export const head: HeadConfig[] = [
    // 页面icon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    // 组件库样式
    // ['link', { rel: 'stylesheet', href: '' }],
]