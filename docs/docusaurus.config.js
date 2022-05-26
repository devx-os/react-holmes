// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Holmes',
  tagline: 'Elementary State Orchestrator for React',
  url: 'https://github.com/devx-os',
  baseUrl: '/react-holmes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'devx-os', // Usually your GitHub org/user name.
  projectName: 'react-holmes', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React Holmes - Elementary State Orchestrator',
        logo: {
          alt: 'React Holmes - Elementary State Orchestrator',
          src: 'img/reactLogo.jpg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/devx-os/react-holmes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Introduction',
            items: [
              {
                label: 'Getting started',
                to: '/docs/Introduction/getting-started',
              },
              {
                label: 'Motivation',
                to: '/docs/Introduction/motivation',
              },
            ],
          },
          {
            title: 'Hooks',
            items: [
              {
                label: 'useHolmesReducer',
                to: '/docs/Hooks/use-holmes-reducer',
              },
              {
                label: 'useHolmesSelector',
                to: '/docs/Hooks/use-holmes-selector',
              },
              {
                label: 'useHolmesState',
                to: '/docs/Hooks/use-holmes-state',
              },
              {
                label: 'useHolmesValue',
                to: '/docs/Hooks/use-holmes-value',
              },
              {
                label: 'useSetHolmesReducer',
                to: '/docs/Hooks/use-set-holmes-reducer',
              }
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/devx-os/react-holmes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React-Holmes documentation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
