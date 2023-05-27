import{_ as e,o,c as t,R as a}from"./chunks/framework.5065ad62.js";const b=JSON.parse('{"title":"What is Labctl?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/intro.md","filePath":"guide/intro.md","lastUpdated":1685196665000}'),n={name:"guide/intro.md"},i=a('<h1 id="what-is-labctl" tabindex="-1">What is Labctl? <a class="header-anchor" href="#what-is-labctl" aria-label="Permalink to &quot;What is Labctl?&quot;">​</a></h1><p>Labctl is a collection of helper tools for network engineers, while configuring and experimenting with their own network labs.</p><p>Labctl stands on the shoulders of giants and can be used as a companion to <a href="https://containerlab.dev" target="_blank" rel="noreferrer">containerlab</a>. Containerlab allows us to represent network topologies in a simple text format (Infrastructure as code). These are referred to as topology definition files, or topo files, defining network nodes &amp; links between these nodes in an easy to understand yaml text file.</p><p>While labctl uses the containerlab topology file format (<code>.clab.yml</code>) to represent the network topology, the tools can be used with labs on EVE-NG, GNS3 or even using physical network equipment.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li><p>Web frontend - <code>labctl serve</code></p><p>Visualize your network topology. Dynamically add information from the lab topology definition, variables defined in the topo file, magic variables created by the Config Engine and state of your network elements*</p><p>Save your network layout and visualize each step of the Config Engine (variables, templates, compare &amp; commit or arbitrary execution of show commands)</p></li><li><p>Config Engine - <code>labctl config</code></p><p>Using variables defined in your lab topology you can render configuration snippets using the go template language.</p><p>The config engine in labctl tries to be as close as possibe to the containerlab Config Engine <code>containerlab config</code>, with some extentions to extend this to multiple topo files and non-containerlab labs.</p></li><li><p>Single template language</p><p>Wheter you are on a Linux terminal or in your favorite browser, Labctl ensures you only have to know a single template language</p></li><li><p>Add some color to your CLI - <code>labctl color</code></p><p>Add custom color to IP addresses, protocol states or any other text you would like to visually enhance. Labctl uses your standard SSH/telnet tools, but only adds the relevant color locally.</p></li></ul>',6),l=[i];function r(s,c,d,p,u,h){return o(),t("div",null,l)}const g=e(n,[["render",r]]);export{b as __pageData,g as default};
