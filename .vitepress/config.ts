import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: 'shion',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.svg' }],
    ['meta', { property: 'og:url', content: 'https://shion.app' }],
    ['meta', { property: 'og:image', content: 'https://shion.app/seo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  lastUpdated: true,
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Time tracker | 时间追踪软件',
      themeConfig: {
        sidebar: {
          '/guide/': {
            base: '/guide/',
            items: [
              {
                text: 'Guide',
                items: [
                  {
                    text: 'Quick start',
                    link: '/quick-start',
                  },
                  {
                    text: 'What is shion?',
                    link: '/what-is-shion',
                  },
                  {
                    text: 'Early access',
                    link: '/early-access',
                  },
                  {
                    text: 'Record',
                    link: '/record',
                  },
                  {
                    text: 'Display',
                    link: '/display',
                  },
                ],
              },
              {
                text: 'Extension',
                collapsed: false,
                items: [
                  {
                    text: 'Dandanplay',
                    link: 'dandanplay',
                  },
                  {
                    text: 'Obsidian',
                    link: 'obsidian',
                  },
                  {
                    text: 'Calendar',
                    link: 'calendar',
                  },
                ],
              },
              {
                text: 'Integration',
                items: [
                  {
                    text: 'Api docs',
                    link: '/api',
                  },
                ],
              },
              {
                text: 'Troubleshooting & FAQ',
                items: [
                  {
                    text: 'General',
                    link: '/general',
                  },
                ],
              },
            ],
          },
          '/chat/': {
            base: '/chat/',
            items: [
              {
                text: 'Chat',
                items: [
                  {
                    text: 'Development review',
                    link: '/development-review',
                  },
                  {
                    text: 'Payment model',
                    link: '/payment-model',
                  },
                  {
                    text: 'Imperfect Automation',
                    link: '/imperfect-automation',
                  },
                  {
                    text: 'I have a dream',
                    link: '/i-have-a-dream',
                  },
                  {
                    text: 'Summary',
                    link: '/summary',
                  },
                  {
                    text: 'No mac',
                    link: '/no-mac',
                  },
                ]
              }
            ]
          }
        },
        nav: [
          { text: 'Chat', link: '/chat/development-review' },
          { text: 'Guide', link: '/guide/quick-start' },
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
                    text: '快速开始',
                    link: '/quick-start',
                  },
                  {
                    text: '什么是 shion?',
                    link: '/what-is-shion',
                  },
                  {
                    text: '抢先体验',
                    link: '/early-access',
                  },
                  {
                    text: '记录',
                    link: '/record',
                  },
                  {
                    text: '展示',
                    link: '/display',
                  },
                ],
              },
              {
                text: '扩展',
                collapsed: false,
                items: [
                  {
                    text: '弹弹play',
                    link: 'dandanplay',
                  },
                  {
                    text: 'Obsidian',
                    link: 'obsidian',
                  },
                  {
                    text: '日历',
                    link: 'calendar',
                  },
                ],
              },
              {
                text: '第三方应用接入',
                items: [
                  {
                    text: '接口说明',
                    link: '/api',
                  },
                ],
              },
              {
                text: '故障排除和常见问题解答',
                items: [
                  {
                    text: '常规',
                    link: '/general',
                  },
                ],
              },
            ],
          },
          '/zh/chat/': {
            base: '/zh/chat/',
            items: [
              {
                text: '闲谈',
                items: [
                  {
                    text: '开发回顾',
                    link: '/development-review',
                  },
                  {
                    text: '付费模式',
                    link: '/payment-model',
                  },
                  {
                    text: '不完美的自动化',
                    link: '/imperfect-automation',
                  },
                  {
                    text: '我有一个梦想',
                    link: '/i-have-a-dream',
                  },
                  {
                    text: '来段总结',
                    link: '/summary',
                  },
                  {
                    text: '不会存在mac版本',
                    link: '/no-mac',
                  },
                ]
              }
            ]
          }
        },
        nav: [
          { text: '闲谈', link: '/zh/chat/development-review' },
          { text: '指南', link: '/zh/guide/quick-start' },
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
