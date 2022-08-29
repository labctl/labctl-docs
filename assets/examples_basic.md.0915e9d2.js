import{_ as e,o as a,c as l,a as t}from"./app.82bd6b9b.js";const u=JSON.parse('{"title":"Basic Usage","description":"","frontmatter":{},"headers":[{"level":2,"title":"Get the example files","slug":"get-the-example-files","link":"#get-the-example-files","children":[]},{"level":2,"title":"Run the lab - sros4.clab.yml","slug":"run-the-lab-sros4-clab-yml","link":"#run-the-lab-sros4-clab-yml","children":[]},{"level":2,"title":"vr01.clab.yml","slug":"vr01-clab-yml","link":"#vr01-clab-yml","children":[]}],"relativePath":"examples/basic.md","lastUpdated":1661759821000}'),s={name:"examples/basic.md"},o=t(`<h1 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h1><h2 id="get-the-example-files" tabindex="-1">Get the example files <a class="header-anchor" href="#get-the-example-files" aria-hidden="true">#</a></h2><p>The containerlab github repo includes two topologies &amp; templates with variables</p><ul><li><a href="https://github.com/srl-labs/containerlab/tree/main/lab-examples/vr05" target="_blank" rel="noreferrer">topo files</a></li><li><a href="https://github.com/srl-labs/containerlab/tree/main/templates" target="_blank" rel="noreferrer">templates</a></li></ul><h2 id="run-the-lab-sros4-clab-yml" tabindex="-1">Run the lab - sros4.clab.yml <a class="header-anchor" href="#run-the-lab-sros4-clab-yml" aria-hidden="true">#</a></h2><ol><li><p>Deploy the topology (required if you want to commit/compare/send)</p></li><li><p>Compare base config:</p><p><code>labctl config compare -p ./templates -l base -t sros4.clab.yml</code></p></li><li><p>Deploy the base config:</p><p><code>labctl config commit -p ./templates -l base -t sros4.clab.yml</code></p></li></ol><p>Today the base config include Ports &amp; ISIS.</p><p>You can also start the Web Server on this topology</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">labctl serve -p ./templates -t sros4.clab.yml</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>And now you can execute the following from the UI:</p><ul><li><code>compare -l base</code></li><li><code>commit -l base</code></li></ul><h2 id="vr01-clab-yml" tabindex="-1">vr01.clab.yml <a class="header-anchor" href="#vr01-clab-yml" aria-hidden="true">#</a></h2><p>You can perform the exact same on this topology and simply replace the topology with <code>vr01.clab.yml</code></p>`,13),r=[o];function c(i,n,p,h,m,d){return a(),l("div",null,r)}const f=e(s,[["render",c]]);export{u as __pageData,f as default};
