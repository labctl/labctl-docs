import{_ as s,o as a,c as n,a as e}from"./app.b2aac8d9.js";const A=JSON.parse('{"title":"Template Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"String manupilation","slug":"string-manupilation","link":"#string-manupilation","children":[]}],"relativePath":"guide/template-examples.md","lastUpdated":1664970618000}'),t={name:"guide/template-examples.md"},l=e(`<h1 id="template-examples" tabindex="-1">Template Examples <a class="header-anchor" href="#template-examples" aria-hidden="true">#</a></h1><h2 id="string-manupilation" tabindex="-1">String manupilation <a class="header-anchor" href="#string-manupilation" aria-hidden="true">#</a></h2><p>The following examples perform the same function. They extract a number from the string name of the router.</p><p>The templates marked with asterisk (*) are not ideal, since it assumes you know if the numeric part of the router is one or more digits.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{{  &quot;PE9&quot;  | slice 2 0 }}</span></span>
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
<span class="line"><span style="color:#A6ACCD;">{{  &quot;PE8&quot; | strings.ReplaceAll &quot;PE&quot; &quot;&quot; }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),o=[l];function p(i,r,c,u,m,d){return a(),n("div",null,o)}const C=s(t,[["render",p]]);export{A as __pageData,C as default};
