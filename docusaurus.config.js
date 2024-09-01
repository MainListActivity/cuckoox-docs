const isProd = process.env.IS_PROD_BUILD == "true";
const config = {
  title: 'CuckooX Docs',
  tagline: 'CuckooX Docs',
  favicon: '/img/favicon.ico',
  url: 'https://cuckoox.cn',
  baseUrl: '/docs/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'root',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          editUrl: 'https://github.com/MainListActivity/cuckoox-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'doc-dev',
        sidebarCollapsed: true,
        sidebarCollapsible: true,
        includeCurrentVersion: false,
        routeBasePath: '/dev',
        editUrl: 'https://github.com/MainListActivity/cuckoox-docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'doc-law',
        sidebarCollapsed: true,
        sidebarCollapsible: true,
        includeCurrentVersion: false,
        routeBasePath: '/law',
        editUrl: 'https://github.com/MainListActivity/cuckoox-docs/edit/main/',
      },
    ],
    'docusaurus-plugin-sass',
    ...(isProd ? [
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-J1NWM32T1V',
          anonymizeIP: true,
        },
      ],
    ] : []),
  ],
  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: '/img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'CuckooX Logo',
          src: '/img/logo-cuckoox-dark.svg',
          srcDark: '/img/logo-cuckoox.svg',
        },
        items: [
          {
            to: 'https://cuckoox.cn',
            position: 'right',
            className: 'navbar-surreal',
            'aria-label': 'cuckoox.cn',
            label: 'cuckoox.cn',
            target: '_blank',
            icon: 'none'
          },
          {
            href: 'https://github.com/MainListActivity/cuckoox-docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `&copy; <a href='https://cuckoox.cn'>CuckooX</a> &bull; <a href='https://github.com/cuckoox'>GitHub</a> &bull;   <a href='https://cuckoox.cn/products'>Products</a> &bull; <a href='https://cuckoox.cn/features'>Features</a> &bull; <a href='https://cuckoox.cn/releases'>Releases</a> &bull; <a href='https://cuckoox.cn/install'>Install</a>`,
      },
      prism: {
        additionalLanguages: [
          'javascript',
          'typescript',
          'bash',
          'yaml',
          'markdown',
          'python',
          'json',
          'rust',
          'jsx',
          'sql',
          'java',
          'go',
          'jsx',
          'csharp'
        ]
      }
    }),
  scripts: isProd ? [
    { src: '/js/script.js', defer: true, 'data-domain': 'cuckoox.cn' },
  ] : []
};

module.exports = config;
