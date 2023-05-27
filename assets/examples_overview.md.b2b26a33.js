import{_ as e,o as a,c as t,R as l}from"./chunks/framework.5065ad62.js";const u=JSON.parse('{"title":"Examples","description":"","frontmatter":{},"headers":[],"relativePath":"examples/overview.md","filePath":"examples/overview.md","lastUpdated":1685196665000}'),o={name:"examples/overview.md"},r=l('<h1 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h1><p>There are some exmaples avialable in the Containerlab repo <a href="./clab">overview here</a> or a specific Labctl-example repository on Github</p><h2 id="getting-the-labctl-examples" tabindex="-1">Getting the Labctl-examples <a class="header-anchor" href="#getting-the-labctl-examples" aria-label="Permalink to &quot;Getting the Labctl-examples&quot;">​</a></h2><p>Clone the <a href="https://github.com/labctl/labctl-examples" target="_blank" rel="noreferrer">labctl-examples</a> github repo</p><p>It is always advised to first Fork the github repo under your own name and then clone your fork. This will allow you to save your changes and even contribute back to the examples.</p><ul><li><p>Fork it <a href="https://github.com/labctl/labctl-examples/fork" target="_blank" rel="noreferrer">here</a></p></li><li><p>Clone your fork (from your Github account)</p><div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto"><pre>git clone git@github.com:<span style="background-color:#550;">account</span>/labctl-examples.git</pre></div></li></ul><h2 id="navigating-the-labctl-examples-repo" tabindex="-1">Navigating the labctl-examples repo <a class="header-anchor" href="#navigating-the-labctl-examples-repo" aria-label="Permalink to &quot;Navigating the labctl-examples repo&quot;">​</a></h2><p>Each example contains a <code>README.md</code> file that gives you a brief overview of the lab, together with instructions on how to deploy the topology and start the web server.</p><p>In most cases deplying the lab is as simple as running <code>containerlab deploy</code> in the lab&#39;s directory. Contianerlab can auto-detect the topology file, as long as you have a single topology file per folder.</p><p>To start the server could be as simple as <code>labctl serve</code>, which will then use the same topology file, but most of the time you want to at least specific one or more <strong>paths</strong> where the server should look for templates. Add paths with the <code>-p</code> or <code>--paths</code> flag.</p><h2 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><ul><li><p>SR Linux 3 node lab - <a href="https://github.com/labctl/labctl-examples/tree/main/sr-linux/srl" target="_blank" rel="noreferrer">here</a></p></li><li><p>SR OS 3 node example - <a href="https://github.com/labctl/labctl-examples/tree/main/sr-os/seamless-bfd" target="_blank" rel="noreferrer">here</a></p></li></ul><blockquote><p>SR Linux does not require any licenses to deploy the lab and perform configuration</p></blockquote><h2 id="example-templates" tabindex="-1">Example Templates <a class="header-anchor" href="#example-templates" aria-label="Permalink to &quot;Example Templates&quot;">​</a></h2><p>You can find lab specific templates (*.tmpl) in either the shared <a href="https://github.com/labctl/labctl-examples/tree/main/templates" target="_blank" rel="noreferrer">template folder</a> or in the individual lab folders.</p>',15),i=[r];function s(n,p,h,c,m,d){return a(),t("div",null,i)}const g=e(o,[["render",s]]);export{u as __pageData,g as default};
