import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: 'shion',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.svg' }],
  ],
  lastUpdated: true,
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Time tracker',
      themeConfig: {
        sidebar: {
          '/guide/': {
            base: '/guide/',
            items: [
              {
                text: 'Guide',
                items: [
                  {
                    text: 'What is shion?',
                    link: '/what-is-shion',
                  },
                  {
                    text: 'Feature',
                    collapsed: false,
                    items: [
                      {
                        text: 'Data display',
                        link: 'data-display',
                      },
                      {
                        text: 'Record',
                        link: 'record',
                      },
                      {
                        text: 'Browser history',
                        link: 'history',
                      },
                    ],
                  },
                ],
              },
            ],
          }
        },
        nav: [
          { text: 'Guide', link: '/guide/what-is-shion' },
          { text: 'Download', link: '/download' },
        ],
      }
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh/',
      description: '时间追踪软件',
      themeConfig: {
        sidebar: {
          '/zh/guide/': {
            base: '/zh/guide/',
            items: [
              {
                text: '指南',
                items: [
                  {
                    text: '什么是 shion?',
                    link: '/what-is-shion',
                  },
                  {
                    text: '功能',
                    collapsed: false,
                    items: [
                      {
                        text: '数据展示',
                        link: 'data-display',
                      },
                      {
                        text: '记录',
                        link: 'record',
                      },
                      {
                        text: '浏览器历史记录',
                        link: 'history',
                      },
                    ],
                  },
                ],
              },
            ],
          }
        },
        nav: [
          { text: '指南', link: '/zh/guide/what-is-shion' },
          { text: '下载', link: '/zh/download' },
        ],
      }
    }
  },
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shion-app/shion' },
    ],
    editLink: {
      pattern: 'https://github.com/shion-app/docs/tree/main/src/:path'
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
    footer: {
      copyright: 'Copyright © 2024 shion-app'
    }
  },
});
