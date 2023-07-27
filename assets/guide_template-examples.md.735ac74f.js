import{_ as a,o as s,c as e,U as t}from"./chunks/framework.67d32948.js";const A=JSON.parse('{"title":"Template Examples","description":"","frontmatter":{},"headers":[],"relativePath":"guide/template-examples.md","filePath":"guide/template-examples.md","lastUpdated":1690485963000}'),n={name:"guide/template-examples.md"},l=t(`<h1 id="template-examples" tabindex="-1">Template Examples <a class="header-anchor" href="#template-examples" aria-label="Permalink to &quot;Template Examples&quot;">​</a></h1><h2 id="string-manupilation" tabindex="-1">String manupilation <a class="header-anchor" href="#string-manupilation" aria-label="Permalink to &quot;String manupilation&quot;">​</a></h2><p>The following examples perform the same function. They extract a number from the string name of the router.</p><p>The templates marked with asterisk (*) are not ideal, since it assumes you know if the numeric part of the router is one or more digits.</p><div class="language-jinja"><button title="Copy Code" class="copy"></button><span class="lang">jinja</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{{  &quot;PE9&quot;  | slice 2 0 }}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{  &quot;PE12&quot; | slice 2 0 }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">*{{  &quot;PE9&quot;  | slice -1 0 }}</span></span>
<span class="line"><span style="color:#A6ACCD;">*{{  &quot;PE12&quot; | slice -2 0 }}</span></span>
<span class="line"><span style="color:#A6ACCD;">*{{ &quot;PE9&quot;  | index -1 | printf &quot;%c&quot; }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{ &quot;PE9&quot;  | split &quot;PE&quot; | index -1 }}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{ &quot;R9&quot;   | split &quot;R&quot;  | index -1 }}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{ &quot;PE12&quot; | split &quot;PE&quot; | index -1 }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{  &quot;PE12&quot; | strings.ReplaceAll &quot;PE&quot; &quot;&quot; }}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{  &quot;PE8&quot; | strings.ReplaceAll &quot;PE&quot; &quot;&quot; }}</span></span></code></pre></div>`,5),o=[l];function p(i,r,c,u,m,q){return s(),e("div",null,o)}const C=a(n,[["render",p]]);export{A as __pageData,C as default};
