import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "labctl",
  description: "Take control of your lab environment",

  lastUpdated: true,
  cleanUrls: "with-subfolders",

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
  ],
  // vite: {
  //   buildEnd: buildEnd,
  // },
  themeConfig: {
    logo: "/labctl1.svg",
    nav: [
      {
        text: "Guide",
        link: "/guide/",
        activeMatch: "/guide",
      },
      {
        text: "Reference",
        link: "/reference/config",
        activeMatch: "/reference/",
      },
      {
        text: "Examples",
        link: "/examples/basic",
        activeMatch: "/examples/",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Labctl?", link: "/guide/" },
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
        ],
      },
      {
        text: "Examples",
        items: [{ text: "Basic Usage", link: "/examples/basic" }],
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
      appId: "D1QY7C5MLV",
      apiKey: "3e1c21b075bcc58d22669ba593c5957e",
      indexName: "labctl1",
    },
  },
});
