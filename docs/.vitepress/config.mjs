import { defineConfig } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import escookConfig from '@escook/vitepress-theme/config'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    math: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },
  extends: escookConfig,
  lastUpdated: true,
  base: "/docs/",
  head: [["link", { rel: "icon", href: "/滑稽.jpg" }]],
  title: "池溟昌胤的博客文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "滑稽.jpg", // 配置logo位置，public目录
    outlineTitle: "文章目录",
    outline: "deep",
    footer: {
      copyright: "noCopyright@ 2024.04.1-present cmcy"
    },
    confetti: false,
    nav: [
      { text: '我的主页', link: '/' },
      { text: '友情链接', link: '/team.md' },
      {text: '基础知识',link:'/基础知识/'},
      {text: '环境配置',link:'/环境/'},
      {text: '个人经历',link:'/个人经历/'},
    ],
    sidebar: {
      '/基础知识/': [
        {
          text: '计算机基础',
          collapsed: false,
        items:[
          {
            text: 'OLD',
            collapsed: false,
            items: [
              { text: '网络知识基础', link: '/基础知识/计算机/《Linux网络基础》总集篇' },
              { text: 'Linux基础', link: '/基础知识/计算机/《Linux基础》总集篇' },
            ],
          },
          {
            text: 'MIDDLE',
            collapsed: false,
            items: [
              { text: 'MySQL(未完成)', link: '/基础知识/计算机/MySQL' },
              { text: '操作系统(未完成)', link: '/基础知识/计算机/操作系统' },
              { text: '计算机组成原理(未完成)', link: '/基础知识/计算机/计算机组成原理' },  
            ],
          },
          {
            text: 'NEW',
            collapsed: false,
            items: [
               
            ],
          },
          ],
        },
        {
          text: '数学',
          collapsed: false,  
        items: [
          { text: '数学分析(未完成)', link: '/基础知识/数学/数学分析' },
          { text: '高等代数(未完成)', link: '/基础知识/数学/高等代数' },
        ],
       },
      ],
      '/环境/': [
        {
          text: '操作系统安装', 
          collapsed: false,  
         items:[
            { text: '系统安装', link: '/环境/操作系统环境/系统安装' },
         ]
        },
        {
          text: '编程语言环境配置', 
          collapsed: false,  
         items:[
            { text: '汇编语言', link: '/环境/各类语言环境配置/汇编语言' },
         ]
       },
      ],
      '/个人经历/': [
        {
          text: '周记',
          collapsed: false,  
          items: [
            { text: '第一周', link: '/个人经历/周记/第一周' },
            { text: '第二周', link: '/个人经历/周记/第二周' },
            { text: '第三周', link: '/个人经历/周记/第三周' },
            { text: '第四周', link: '/个人经历/周记/第四周' },
          ],
        },
        {
          text: '阶段总结', 
          collapsed: false,  
         items:[
           { text: '重启博客', link: '/个人经历/总结/重启博客' },
           { text: '重现老博客文章', link: '/个人经历/总结/重现老博客文章' },
           { text: '大一下期末总结', link: '/个人经历/总结/大一下期末总结' },
           { text: '大二上半段总结', link: '/个人经历/总结/大二上半段总结' },
         ],
       },
      ],
    },
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
      { icon: 'github', link: 'https://github.com/8cmcy8' },
      {
        icon: {
          svg: '<svg t="1711787025551" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4371" width="200" height="200"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="4372"></path></svg>'
        },
        link: 'https://gitee.com/chimingchangyin/docs'
      },
      {
        icon: {
          svg: '<svg t="1711787119262" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8259" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="8260"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="8261"></path></svg>'
        }, 
        link: 'https://space.bilibili.com/293121039'
      },
    ]
  }
})
