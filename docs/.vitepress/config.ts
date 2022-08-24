import { generateSitemap as sitemap } from "sitemap-ts";
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "labctl",
  description: "Take control of your lab environment",

  lastUpdated: true,
  // cleanUrls: 'without-subfolders',

  vite: {
    buildEnd: () => {
      sitemap();
    },
  },
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
        link: "/index/",
        items: [
          { text: "What is labctl?", link: "/guide/" },
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Config Engine", link: "/guide/config-engine" },
          { text: "Config Engine UI", link: "/guide/config-engine-ui" },
          { text: "Roadmap", link: "/guide/roadmap" },
        ],
      },
      {
        text: "Reference",
        link: "/reference",
        items: [
          { text: "config", link: "/reference/config" },
          { text: "serve", link: "/reference/serve" },
          { text: "color", link: "/reference/color" },
          { text: "install-completions", link: "/reference/completions" },
        ],
      },
      {
        text: "Examples",
        link: "/examples/",
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
