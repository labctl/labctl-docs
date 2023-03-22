import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "labctl",
  description: "Take control of your lab environment",

  lastUpdated: true,

  //without-subfolders
  //cleanUrls: "with-subfolders",
  cleanUrls: "without-subfolders",

  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
  ],
  // vite: {
  //   buildEnd: buildEnd,
  // },
  themeConfig: {
    logo: "/labctl1.svg",
    nav: [
      {
        text: "Guide",
        link: "/guide/intro",
        activeMatch: "/guide/",
      },
      {
        text: "Reference",
        link: "/reference/config",
        activeMatch: "/reference/",
      },
      {
        text: "Examples",
        link: "/examples/overview",
        activeMatch: "/examples/",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Labctl?", link: "/guide/intro" },
          { text: "Getting Started", link: "/guide/getting-started" },
          {
            text: "Config Engine",
            link: "/guide/config-engine",
            items: [
              {
                text: "Transmit Commands",
                link: "/guide/config-engine-tx",
              },
              { text: "User Interface", link: "/guide/config-engine-ui" },
              { text: "Template Examples", link: "/guide/template-examples" },
            ],
          },
          { text: "Roadmap", link: "/guide/roadmap" },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "labctl config", link: "/reference/config" },
          { text: "labctl serve", link: "/reference/serve" },
          { text: "labctl color", link: "/reference/color" },
          { text: "other", link: "/reference/misc" },
          {
            text: "Template functions",
            link: "/reference/template-functions",
          },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Overview", link: "/examples/overview" },
          { text: "Containerlab", link: "/examples/clab" },
        ],
      },
    ],

    editLink: {
      pattern: "https://github.com/labctl/labctl-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/labctl/labctl" }],

    footer: {
      message: "",
      copyright: "Apache 2.0 | Copyright © 2022 Johann Kellerman",
    },

    algolia: {
      appId: "IYKGQW8F28",
      apiKey: "9c031d10d1efce3754f2911180cc36ec",
      indexName: "labctl",
    },
  },
});
