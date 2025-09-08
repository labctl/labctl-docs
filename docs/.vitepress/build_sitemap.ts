import { resolveOptions, generateSitemap } from "sitemap-ts";

function buildEnd() {
  const opt = resolveOptions({
    hostname: "https://labctl.net/",
    outDir: "docs/.vitepress/dist",
    exclude: ["/404"],
  });
  // opt.dynamicRoutes = sm.getRoutes(opt);

  // Add "/" to work with VitePress's cleanUrls="with-subfolders"
  // Github pages adds the slash & redirects to folder/
  // opt.dynamicRoutes = opt.dynamicRoutes.map((route) =>
  //   route.endsWith("/") ? route : route + "/"
  // );

  generateSitemap(opt);
}

buildEnd();
