// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github'); // 导入明亮主题
const darkCodeTheme = require('prism-react-renderer/themes/dracula'); // 导入暗色主题

// 下面这行应该是装饰器？
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Starcoin Cookbook', // 书的标题
  tagline: 'How to developing on starcoin', // 类似副标题
  url: 'https://starcoinorg.github.io', // 统一资源定位（前缀）
  baseUrl: '/starcoin-cookbook/', // 和 url 共同组成本书的资源定位
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico', // 网站标志，p114
  organizationName: 'staroinorg', // Usually your GitHub org/user name.
  projectName: 'starcoin-cookbook', // Usually your repo name.
  
  // i18n国际化
  i18n: {
    defaultLocale: 'en', // 设置默认的 locale 值
    locales: ['en', 'zh'], // locale 的语言列表
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      zh: {
        label: '中文',
        htmlLang: 'zh-CN',
      },
    },
  },

  // 预设
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // 侧边连模块
          // Please change this to your repo.
          editUrl: 'https://github.com/starcoinorg/starcoin-cookbook/edit/main/', // 编辑此页按钮
        },
        blog: {
          showReadingTime: true, // ???
          // Please change this to your repo.
          editUrl:
            'https://github.com/starcoinorg/starcoin-cookbook/edit/main/',
        },
        theme: { // 通过 CSS 自定义主题
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // 主题设置
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: { // 导航栏配置
        title: 'Starcoin Cookbook',
        logo: {
          alt: 'Starcoin Cookbook',
          src: '/img/logo.svg',
        },
        items: [
          { // 点击 Document 跳转到文档页
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documents',
          },
          { // 下拉框位置
            type: 'localeDropdown',
            position: 'right',
          },
          { // 右上角的跳转地址 -> GitHub 仓库
            href: 'https://github.com/starcoinorg/starcoin-cookbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: { // 页脚配置
        style: 'dark', // 主题风格
        links: [ // 三列脚注链接列表
          {
            title: 'Docs',
            items: [
              {
                label: 'Documents',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/starcoin',
              },
              {
                label: 'Discord',
                href: 'https://discor.gg/starcoin',
              },
              {
                label: 'Developer Telegram group',
                href: 'https://t.me/starcoin_contributor',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/StarcoinSTC',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/starcoinorg/starcoin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Starcoin, Inc. Built with Docusaurus.`,
      },
      prism: { // ???
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

// 模块导出
module.exports = config;
