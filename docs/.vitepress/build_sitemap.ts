const sm = require("sitemap-ts");

function buildEnd() {
  const opt = sm.resolveOptions({
    hostname: "http://labctl.net/",
    outDir: "docs/.vitepress/dist",
    exclude: ["/404"],
  });
  opt.dynamicRoutes = sm.getRoutes(opt);
  sm.generateSitemap(opt);
}

buildEnd();
