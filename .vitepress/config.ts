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
    [
      'script',
      {},
      `
        if (sessionStorage.getItem('languageRedirect') != 'true') {
          sessionStorage.setItem('languageRedirect', 'true');
          const userLang = navigator.language;
          const baseLang = userLang.split('-')[0];
          const languageMap = {
            'zh': '/zh/',
          };
          if (location.pathname == '/' && languageMap[baseLang]) {
            location.href = languageMap[baseLang];
          }
        }
      `
    ]
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
                    text: 'What is shion?',
                    link: '/what-is-shion',
                  },
                  {
                    text: 'Early access',
                    link: '/early-access',
                  },
                  {
                    text: 'Feature',
                    collapsed: false,
                    items: [
                      {
                        text: 'Overview',
                        link: 'overview',
                      },
                      {
                        text: 'Timeline',
                        link: 'timeline',
                      },
                      {
                        text: 'Timeblock',
                        link: 'timeblock',
                      },
                      {
                        text: 'Collection',
                        link: 'collection',
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
                ]
              }
            ]
          }
        },
        nav: [
          { text: 'Chat', link: '/chat/development-review' },
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
                    text: '抢先体验',
                    link: '/early-access',
                  },
                  {
                    text: '功能',
                    collapsed: false,
                    items: [
                      {
                        text: '总览',
                        link: 'overview',
                      },
                      {
                        text: '时间线',
                        link: 'timeline',
                      },
                      {
                        text: '时间块',
                        link: 'timeblock',
                      },
                      {
                        text: '数据集合',
                        link: 'collection',
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
                ]
              }
            ]
          }
        },
        nav: [
          { text: '闲谈', link: '/zh/chat/development-review' },
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
