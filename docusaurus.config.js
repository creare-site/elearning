// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

require('dotenv').config()
const customFields = {
    EMAILJS_SERVER_ID: process.env.EMAILJS_SERVER_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'eLearning Invat.eu',
    tagline: 'Oferit de Invat.eu',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://www.elearning.invat.eu',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'creare-site', // Usually your GitHub org/user name.
    projectName: 'elearning', // Usually your repo name.
    trailingSlash: true, // for github pages compatibility

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    customFields: { ...customFields },

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    scripts: [
        {
            src: '//cdn.jsdelivr.net/gh/app-generator/sticky-media@0.0.19/dist/index.min.js',
            id: 'stickyVideoScript',
            defer: true,
            class: 'sticky-popup',
        },
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/creare-site/elearning/tree/main/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            metadata: [{name: 'google-site-verification', content: 'NJ0M5ncVbIhiapFYvdwbpC3Zi9Jj7JXWnB6ZVGaTN1s'}],
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Invat.eu',
                logo: {
                    href: '/',
                    alt: 'eLearning - Invat.eu',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Intro',
                    },
                    {
                        href: 'https://www.blog.invat.eu',
                        label: 'Blog',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Continut',
                        items: [
                            {
                                label: 'Docs',
                                to: '/intro',
                            },
                        ],
                    },
                    {
                        title: 'Resurse',
                        items: [
                            {
                                label: 'Blog',
                                href: 'https://www.blog.invat.eu',
                            },
                        ],
                    },
                    {
                        title: 'Contact',
                        items: [
                            {
                                label: 'Email',
                                href: '/intro#contact',
                            },
                        ],
                    },
                ],
                copyright: `&copy; Invat.eu`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: process.env.APPLICATION_ID,
                apiKey: process.env.API_KEY,
                indexName: 'index',
                contextualSearch: true,
                searchParameters: {},
            },
        }),
}

module.exports = config
