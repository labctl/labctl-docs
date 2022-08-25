import{_ as s,o as a,c as n,a as e}from"./app.1c86f032.js";const A=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Run a console command","slug":"run-a-console-command"},{"level":2,"title":"Start the web server","slug":"start-the-web-server"}],"relativePath":"guide/getting-started.md","lastUpdated":1661431961000}'),l={name:"guide/getting-started.md"},t=e(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>Labctl is distributed as a single executable for Linux based distros</p><div class="getting-started-command"><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">bash -c </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -sL https://labctl.net/get.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div></div><h2 id="run-a-console-command" tabindex="-1">Run a console command <a class="header-anchor" href="#run-a-console-command" aria-hidden="true">#</a></h2><p>labctl includes console commands, al list of these commands can be seen when you run the command without parameters, or using the <code>--help</code> flag with any of the sub-commands. The command reference includes details on each command</p><details class="details custom-block"><summary>labctl --help</summary><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Usage: labctl &lt;command&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Control your network lab.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Flags:</span></span>
<span class="line"><span style="color:#A6ACCD;">  -h, --help    Show context-sensitive help.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Global Flags</span></span>
<span class="line"><span style="color:#A6ACCD;">  -d, --debug=INT          Enable debug mode.</span></span>
<span class="line"><span style="color:#A6ACCD;">      --settings=STRING    Settings yaml file.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Commands:</span></span>
<span class="line"><span style="color:#A6ACCD;">  color                  Add some color to any Linux command (i.e. ssh).</span></span>
<span class="line"><span style="color:#A6ACCD;">  config commit          Commit configuration on the node.</span></span>
<span class="line"><span style="color:#A6ACCD;">  config compare         Compare rendered templates to the node&#39;s config.</span></span>
<span class="line"><span style="color:#A6ACCD;">  config send            Send commands to the node (i.e. show)</span></span>
<span class="line"><span style="color:#A6ACCD;">  config template        Show rendered templates.</span></span>
<span class="line"><span style="color:#A6ACCD;">  config vars            Show variable inputs.</span></span>
<span class="line"><span style="color:#A6ACCD;">  serve                  Serve the web UI.</span></span>
<span class="line"><span style="color:#A6ACCD;">  install-completions    install shell completions</span></span>
<span class="line"><span style="color:#A6ACCD;">  version                show the labctl version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Run &quot;labctl &lt;command&gt; --help&quot; for more information on a command.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details><h2 id="start-the-web-server" tabindex="-1">Start the web server <a class="header-anchor" href="#start-the-web-server" aria-hidden="true">#</a></h2><p>The Config Engine UI can be started with the <a href="/reference/serve.html"><code>labctl serve</code></a> command.</p><p>Once the server is started you should be able to open the suggested URLs with your browser</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ labctl serve -t topo.clab.yaml -p ./ --addr :8080</span></span>
<span class="line"><span style="color:#A6ACCD;">INFO[0000] Parsing &amp; checking topology file: topo.clab.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">INFO[0000] Access the web server on http://localhost:8080 or http://10.10.56.51:8080</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The <a href="/reference/serve.html">labctl serve reference</a> contains detail on available flags for the web server.</p>`,12),o=[t];function c(p,r,i,d,h,m){return a(),n("div",null,o)}const g=s(l,[["render",c]]);export{A as __pageData,g as default};
