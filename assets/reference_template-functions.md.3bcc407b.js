import{_ as e,o as t,c as n,a}from"./app.6b2fe565.js";const g=JSON.parse(`{"title":"Template functions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Config Engine's functions","slug":"config-engine-s-functions","link":"#config-engine-s-functions","children":[]},{"level":2,"title":"\u{1F449} Data validation","slug":"\u{1F449}-data-validation","link":"#\u{1F449}-data-validation","children":[]},{"level":2,"title":"\u{1F449} String manipulation","slug":"\u{1F449}-string-manipulation","link":"#\u{1F449}-string-manipulation","children":[]},{"level":2,"title":"\u{1F449} IP functions","slug":"\u{1F449}-ip-functions","link":"#\u{1F449}-ip-functions","children":[]},{"level":2,"title":"\u{1F449} Enhanced standard functions","slug":"\u{1F449}-enhanced-standard-functions","link":"#\u{1F449}-enhanced-standard-functions","children":[]},{"level":2,"title":"Golang's template functions","slug":"golang-s-template-functions","link":"#golang-s-template-functions","children":[]},{"level":2,"title":"\u{1F449} Boolean operators","slug":"\u{1F449}-boolean-operators","link":"#\u{1F449}-boolean-operators","children":[]},{"level":2,"title":"\u{1F449} Comparison","slug":"\u{1F449}-comparison","link":"#\u{1F449}-comparison","children":[]}],"relativePath":"reference/template-functions.md","lastUpdated":1663271650000}`),o={name:"reference/template-functions.md"},i=a('<h1 id="template-functions" tabindex="-1">Template functions <a class="header-anchor" href="#template-functions" aria-hidden="true">#</a></h1><p>Available template functions include:</p><ul><li><p><a href="https://docs.gomplate.ca/" target="_blank" rel="noreferrer">Gomplate</a> template functions</p><p>Gomplate provides an extensive list of template functions. Please refer to the Gomplate documentation for all available <a href="https://docs.gomplate.ca/" target="_blank" rel="noreferrer">functions</a></p></li><li><p>Config Engine&#39;s <a href="https://github.com/kellerza/template" target="_blank" rel="noreferrer">custom</a> functions</p><p>Several custom functions were added for Config Engine. They are documented on this page.</p></li><li><p>Golang&#39;s <a href="https://pkg.go.dev/text/template#hdr-Functions" target="_blank" rel="noreferrer">text/template</a> functions</p><p>Functions from Golang&#39;s standard library</p></li></ul><h2 id="config-engine-s-functions" tabindex="-1">Config Engine&#39;s functions <a class="header-anchor" href="#config-engine-s-functions" aria-hidden="true">#</a></h2><p>A couple of custom functions can be used in Config Engine. They are documented below and the source can be found <a href="https://github.com/kellerza/template" target="_blank" rel="noreferrer">here</a></p><h2 id="\u{1F449}-data-validation" tabindex="-1">\u{1F449} Data validation <a class="header-anchor" href="#\u{1F449}-data-validation" aria-hidden="true">#</a></h2><p>These functions can be used in a template to indicate required input parameters.</p><ul><li><p><code>expect</code> tests if the input is a certain type or in some cases even wihin an allowable range. If the input matches the expected type, the function returns and will not affect your template. If the input does not match, an error will be raised and template execution will be stopped.</p><p>Expect supports the following formats:</p><ul><li>a simple type: <strong>str</strong>, <strong>string</strong>, <strong>int</strong></li><li>and IP address with mask, <strong>IP/mask</strong></li><li>a numeric range, e.g. 0-100</li><li>a regular expression</li></ul><p>Usage: <code>expect &lt;value&gt; &lt;format&gt;</code></p></li><li><p><code>optional</code> takes exactly the same parameters as expect. The only difference is that template execution will continue if the value is not present. Typically <code>optional</code> would be used in conjunction with <code>default</code></p><p>Usage: <code>optional &lt;value&gt; &lt;format&gt;</code></p></li><li><p><code>default</code> returns a default value if a value is not available</p><p>Usage: <code>default &lt;default-value&gt; &lt;value&gt;</code></p></li></ul><h2 id="\u{1F449}-string-manipulation" tabindex="-1">\u{1F449} String manipulation <a class="header-anchor" href="#\u{1F449}-string-manipulation" aria-hidden="true">#</a></h2><p>There are three string manulpilation functions:</p><ul><li><code>contains &lt;substr&gt; &lt;value&gt;</code> tests is substr is presnt in the value.</li><li><code>join &lt;separator&gt; &lt;values&gt;</code> joins a list of values into a single string, using the specified seperator</li><li><code>split &lt;seperator&gt; &lt;value&gt;</code> splits a string into a list</li></ul><h2 id="\u{1F449}-ip-functions" tabindex="-1">\u{1F449} IP functions <a class="header-anchor" href="#\u{1F449}-ip-functions" aria-hidden="true">#</a></h2><ul><li><code>ip &lt;value&gt;</code> returns only the IP address from a string that contains an IP/mask</li><li><code>ipmask &lt;value&gt;</code> returns only the mask from a string that contains an IP/mask</li></ul><h2 id="\u{1F449}-enhanced-standard-functions" tabindex="-1">\u{1F449} Enhanced standard functions <a class="header-anchor" href="#\u{1F449}-enhanced-standard-functions" aria-hidden="true">#</a></h2><ul><li><p><code>index</code> was adapted to support pipelines. The indexes can either follow the value, or be before the value (supporting pipe). Negative indexes are allowed and will be the offset from the length.</p><p>This is an extension of golang&#39;s standard <code>index</code> function:</p><blockquote><p><code>index</code> returns the result of indexing its first argument by the following arguments. Thus <code>index x 1 2 3</code> is, in Go syntax, <code>x[1][2][3]</code>. Each indexed item must be a map, slice, or array.</p></blockquote></li><li><p><code>slice</code> returns the result of Golang&#39;s slice that supports pipelines. It will attempt the standard slice function, but if that fails, it attempts an alternative implementation, the the first 2 parameters are indexes followed by the value. Negative indexes are allowed and will be the offset from the length.</p><p>The standard slice function</p><blockquote><p><code>slice</code> returns the result of slicing its first argument by the remaining arguments. Thus <code>slice x 1 2</code> is, in Go syntax, <code>x[1:2]</code>, while <code>slice x</code> is <code>x[:]</code>, <code>slice x 1</code> is <code>x[1:]</code>, and <code>slice x 1 2 3</code> is <code>x[1:2:3]</code>. The first argument must be a string, slice, or array.</p></blockquote></li></ul><h2 id="golang-s-template-functions" tabindex="-1">Golang&#39;s template functions <a class="header-anchor" href="#golang-s-template-functions" aria-hidden="true">#</a></h2><p>Golang&#39;s <a href="https://pkg.go.dev/text/template#hdr-Functions" target="_blank" rel="noreferrer">text/template</a> includes several standard functions and comparison operators. This section repeats the text/template documentation.</p><ul><li><p><code>call</code> - Returns the result of calling the first argument, which must be a function, with the remaining arguments as parameters. Thus <code>call .X.Y 1 2</code> is, in Go notation, <code>dot.X.Y(1, 2)</code> where Y is a func-valued field, map entry, or the like. The first argument must be the result of an evaluation that yields a value of function type (as distinct from a predefined function such as print). The function must return either one or two result values, the second of which is of type error. If the arguments don&#39;t match the function or the returned error value is non-nil, execution stops.</p></li><li><p><code>html</code> - Returns the escaped HTML equivalent of the textual representation of its arguments. This function is unavailable in html/template, with a few exceptions.</p></li><li><p><code>js</code> - Returns the escaped JavaScript equivalent of the textual representation of its arguments.</p></li><li><p><code>len</code> - Returns the integer length of its argument.</p></li><li><p><code>print</code> - An alias for fmt.Sprint</p></li><li><p><code>printf</code> - An alias for fmt.Sprintf</p></li><li><p><code>println</code> - An alias for fmt.Sprintln</p></li><li><p><code>urlquery</code> - Returns the escaped value of the textual representation of its arguments in a form suitable for embedding in a URL query. This function is unavailable in html/template, with a few exceptions.</p></li></ul><h2 id="\u{1F449}-boolean-operators" tabindex="-1">\u{1F449} Boolean operators <a class="header-anchor" href="#\u{1F449}-boolean-operators" aria-hidden="true">#</a></h2><ul><li><p><code>and</code> returns the boolean AND of its arguments by returning the first empty argument or the last argument. That is, <code>and x y</code> behaves as <code>if x then y else x.</code> Evaluation proceeds through the arguments left to right and returns when the result is determined.</p></li><li><p><code>not</code> returns the boolean negation of its single argument.</p></li><li><p><code>or</code> returns the boolean OR of its arguments by returning the first non-empty argument or the last argument, that is, <code>or x y</code> behaves as <code>if x then x else y</code>. Evaluation proceeds through the arguments left to right and returns when the result is determined.</p></li></ul><h2 id="\u{1F449}-comparison" tabindex="-1">\u{1F449} Comparison <a class="header-anchor" href="#\u{1F449}-comparison" aria-hidden="true">#</a></h2><p>Go includes standard comparison functions</p><table><thead><tr><th style="text-align:center;">Operator</th><th style="text-align:left;">Result</th></tr></thead><tbody><tr><td style="text-align:center;"><code>eq</code></td><td style="text-align:left;"><code>eq arg1 arg2</code> returns the boolean truth of <code>arg1 == arg2</code></td></tr><tr><td style="text-align:center;"><code>ne</code></td><td style="text-align:left;"><code>ne arg1 arg2</code> returns the boolean truth of <code>arg1 != arg2</code></td></tr><tr><td style="text-align:center;"><code>lt</code></td><td style="text-align:left;"><code>lt arg1 arg2</code> returns the boolean truth of <code>arg1 &lt; arg2</code></td></tr><tr><td style="text-align:center;"><code>le</code></td><td style="text-align:left;"><code>le arg1 arg2</code> returns the boolean truth of <code>arg1 &lt;= arg2</code></td></tr><tr><td style="text-align:center;"><code>gt</code></td><td style="text-align:left;"><code>gt arg1 arg2</code> returns the boolean truth of <code>arg1 &gt; arg2</code></td></tr><tr><td style="text-align:center;"><code>ge</code></td><td style="text-align:left;"><code>ge arg1 arg2</code> returns the boolean truth of <code>arg1 &gt;= arg2</code></td></tr></tbody></table>',23),l=[i];function r(s,d,c,u,p,h){return t(),n("div",null,l)}const m=e(o,[["render",r]]);export{g as __pageData,m as default};