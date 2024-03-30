import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "池溟昌胤的博客文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "logo.svg", // 配置logo位置，public目录
    outlineTitle: "文章目录",
    outline: [2,6],
    footer: {
      copyright:"Copyright@ 2024.04.1-present cmcy"
    },
    nav: [
      { text: '我的主页', link: '/' },
      { text: '知识文档', link: '/《Linux基础》总集篇' }
    ],

    sidebar: [
      {
        text: '网络安全相关',
        items: [
          { text: 'Linux基础', link: '/《Linux基础》总集篇' },
          { text: '网络知识基础', link: '/《Linux网络基础》总集篇' }
        ]
      }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel:"搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText:"切换",
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
