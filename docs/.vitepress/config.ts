import { defineConfig } from 'vitepress'
import {sidebar, locales, head, mdPlugin} from './configs'
import {buildOutput} from '@komi-ui/build-utils'
import {resolve} from 'node:path'

export default defineConfig({
	lang: 'zh-CN',
	title: 'Komi Ui',
	description: "A Component Library for Vue 3",
	head,
	outDir: resolve(buildOutput,'docs'),
	locales,
	themeConfig: {
		siteTitle: '',
		logo:'/komi-logo.svg',
		sidebar,
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/kamikore/komi-ui' }
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023-present Kamikore'
		}
	},
	markdown:{
		config: (md) => mdPlugin(md)
	}
})
