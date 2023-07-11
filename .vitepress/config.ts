import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: 'shion',
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
  lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Timing software ⏳️🚧',
      themeConfig: {
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              items: [
                {
                  text: 'Introduction',
                  link: '/guide/introduction',
                },
                {
                  text: 'Feature',
                  collapsed: false,
                  items: [
                    {
                      text: 'Manual timing',
                      link: '/guide/note',
                    },
                    {
                      text: 'Automatic timing',
                      link: '/guide/activity',
                    },
                  ],
                },
              ],
            },
          ],
        },
        nav: [
          { text: 'Download', link: '/download' },
        ],
      }
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh/',
      description: '计时软件⏳️🚧',
      themeConfig: {
        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              items: [
                {
                  text: '简介',
                  link: '/en/guide/introduction',
                },
                {
                  text: '功能',
                  collapsed: false,
                  items: [
                    {
                      text: '手动计时',
                      link: '/en/guide/note',
                    },
                    {
                      text: '自动计时',
                      link: '/en/guide/activity',
                    },
                  ],
                },
              ],
            },
          ],
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              zh: {
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                  },
                  modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                      selectText: '选择',
                      navigateText: '切换'
                    }
                  }
                }
              }
            }
          }
        },
        nav: [
          { text: '下载', link: '/download' },
        ],
      }
    }
  },
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shion-app/shion' },
    ],
    editLink: {
      pattern: 'https://github.com/shion-app/docs/tree/main/src/:path'
    },
    footer: {
      copyright: 'Copyright © 2023 shion-app'
    }
  },
});
