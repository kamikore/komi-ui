import { defineConfig } from 'vitepress'
import {sidebar, search, locales, head, mdPlugin} from './configs'

export default defineConfig({
	lang: 'zh-CN',
	title: 'Komi Ui',
	description: "A Component Library for Vue 3",
	head,
	locales,
	themeConfig: {
		siteTitle: '',
		logo:'/komi-logo.svg',
		sidebar,
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/kamikore/komi-ui' }
		],
		search,
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023-present Kamikore'
		}
	},
	markdown:{
		config: (md) => mdPlugin(md)
	}
})
