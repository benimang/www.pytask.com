const title = '通途大麦'

const miit = '粤ICP备2022109168号'
const mps = '粤公网安备44011102003244号'

const miitStr = `
<a href="https://beian.miit.gov.cn/" target="_blank" style="display: flex; text-decoration: none; color: #676767; align-items: center; justify-content: center;">
  ${miit} 
</a>
`

const mpsStr = `
<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${mps.match(/\d+/)?.[0] || ""}" target="_blank" style="display: flex; text-decoration: none; color: #676767; align-items: center; justify-content: center;">
  <img src="/beian.png" alt="公安" style="width: 20px; margin-right: 5px;"> 
  ${mps}
</a>
`

// -------------------------------------------------------------------------------

import markdownItMark from 'markdown-it-mark'
import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: title,
    description: "A VitePress Site",
    lang: 'zh-Hans',

    head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

    markdown: {
        image: {
            // 图片懒加载
            lazyLoading: true
        },
        config: (md) => {
            md.use(markdownItMark)  // 使用 ==高亮== 语法
        },
    },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // nav: [
        //     { text: 'Home', link: '/' },
        //     { text: 'Examples', link: '/markdown-examples' }
        // ],

        logo: { src: '/favicon.svg', width: 24, height: 24 },

        // 右侧菜单标题深度展示
        outline: 'deep',

        sidebar: [
            {
                text: '技术资料',
                collapsed: true,
                items: [
                ],
            },
        ],

        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ],

        // 本地搜索
        // search: {
        //     provider: 'local',
        // },

        // 屏蔽页面底部的上一篇和下一篇
        docFooter: {
            prev: false,
            next: false
        },

        // 页面底部显示最后更新时间
        lastUpdated: {},

        footer: {
            message: miitStr,
            copyright: mpsStr,
        }

    }
})
