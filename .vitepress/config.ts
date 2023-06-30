import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  lang: 'zh-CN',
  title: 'shion',
  description: '计时软件⏳️🚧',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    [
      'script',
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1215089771128224',
        crossorigin: 'anonymous',
        async: '',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            {
              text: '简介',
              link: '/guide/introduction',
            },
            {
              text: '功能',
              collapsed: true,
              items: [
                {
                  text: '手动计时',
                  link: '/guide/note',
                },
                {
                  text: '自动计时',
                  link: '/guide/activity',
                },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shion-app/shion' },
    ],
    search: {
      provider: 'local',
    },
  },
});
