import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Yang Kong',
  description: 'Yang Kong\'s personal homepage',

  head: [
    ['meta', { name: 'theme-color', content: '#6366F1' }],
    ['meta', { name: 'author', content: 'Yang Kong' }],
  ],

  themeConfig: {
    nav: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JoenHune' },
    ],

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">粤ICP备16014373号</a>',
      copyright: '© 2026 Yang Kong',
    },

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
