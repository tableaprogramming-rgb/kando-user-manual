// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kando HCMS',
  tagline: 'Comprehensive Human Capital Management System',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kando-user-manual.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kando-hcms',
  projectName: 'kando-documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/kando-hcms/kando-user-manual/tree/main/docusaurus/docs/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/kando-social-card.png',
      navbar: {
        title: '📚 Kando Documentation',
        logo: {
          alt: 'Kando Logo',
          src: 'img/kando-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'manualSidebar',
            position: 'left',
            label: '👥 User Manual',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: '📖 Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'referenceSidebar',
            position: 'left',
            label: '📋 Reference',
          },
          {
            href: 'https://github.com/kando-hcms/kando-user-manual',
            label: '🔗 GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'User Manual',
                to: '/docs/user-manual/getting-started/introduction',
              },
              {
                label: 'Implementation Guides',
                to: '/docs/guides/documentation-guide',
              },
              {
                label: 'QA Analysis',
                to: '/docs/reference/qa-branch-analysis',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kando-hcms',
              },
              {
                label: 'Documentation',
                href: 'https://kando-docs.vercel.app',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Source Code',
                href: 'https://github.com/kando-hcms',
              },
              {
                label: 'Report Issue',
                href: 'https://github.com/kando-hcms/kando-user-manual/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kando HCMS. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'typescript', 'javascript', 'sql'],
      },
      // Enable search if using Algolia
      algolia: {
        // If Algolia did not provide you any appId, use 'K' which is a default value.
        // The application ID is used to build the search index.
        appId: 'K',

        // Public API key: it is safe to commit it.
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'kando_docs',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-XXXXXXX-X', // Replace with your tracking ID if needed
        anonymizeIP: true,
      },
    ],
  ],
};

module.exports = config;
