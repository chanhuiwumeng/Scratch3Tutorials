import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Scratch3.0',
  head: [['link', { rel: 'icon', href: '/logo_sm.png' }]],
  description: '最新版的Scratch3.0教程合集',
   theme: defaultTheme({
      // 在这里进行配置
	    logo: '/logo_sm.png',
	    sidebarDepth:'4',
	    lastUpdatedText:'上次更新',
	    navbar: [
	         // NavbarItem
			 {
			   text: '基础范例',
			   children: [
						{text: '入门范例',
						children:[
							'/入门范例/01-入门范例.md',
							'/入门范例/02-入门范例.md',
							'/入门范例/03-入门范例.md'
							]
						},
				{text: '进阶范例',children:['/进阶范例/进阶范例.md']}],
			 },
			 {
			   text: '基础游戏',
			   children: ['/基础游戏/入门游戏.md', '/基础游戏/进阶游戏.md'],
			 },
			 {
			   text: '扩充功能',
			   children: ['/扩充功能/音乐.md', '/扩充功能/画笔.md', '/扩充功能/视频侦测.md', '/扩充功能/文字朗读.md', '/扩充功能/翻译.md'],
			 },
	         {
	           text: '其他资料',
	          children: [{
            text: '相关书籍',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },],
	         },
	         // NavbarGroup
	         {
	           text: '关于我们',
	           children: ['/group/foo.md', '/group/bar.md'],
	         },
	       ],
    }),
   plugins: [
      backToTopPlugin(),
	   nprogressPlugin(),
	   searchPlugin({
	         // 配置项
	       }),
    ],
})