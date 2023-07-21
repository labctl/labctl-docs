(function(){"use strict";var O={exports:{}};O.exports,function(c){var n=function(){var r=String.fromCharCode,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",w={};function A(t,o){if(!w[t]){w[t]={};for(var f=0;f<t.length;f++)w[t][t.charAt(f)]=f}return w[t][o]}var v={compressToBase64:function(t){if(t==null)return"";var o=v._compress(t,6,function(f){return d.charAt(f)});switch(o.length%4){default:case 0:return o;case 1:return o+"===";case 2:return o+"==";case 3:return o+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:v._decompress(t.length,32,function(o){return A(d,t.charAt(o))})},compressToUTF16:function(t){return t==null?"":v._compress(t,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:v._decompress(t.length,16384,function(o){return t.charCodeAt(o)-32})},compressToUint8Array:function(t){for(var o=v.compress(t),f=new Uint8Array(o.length*2),i=0,l=o.length;i<l;i++){var k=o.charCodeAt(i);f[i*2]=k>>>8,f[i*2+1]=k%256}return f},decompressFromUint8Array:function(t){if(t==null)return v.decompress(t);for(var o=new Array(t.length/2),f=0,i=o.length;f<i;f++)o[f]=t[f*2]*256+t[f*2+1];var l=[];return o.forEach(function(k){l.push(r(k))}),v.decompress(l.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":v._compress(t,6,function(o){return u.charAt(o)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),v._decompress(t.length,32,function(o){return A(u,t.charAt(o))}))},compress:function(t){return v._compress(t,16,function(o){return r(o)})},_compress:function(t,o,f){if(t==null)return"";var i,l,k={},S={},M="",_="",g="",y=2,m=3,p=2,h=[],e=0,a=0,s;for(s=0;s<t.length;s+=1)if(M=t.charAt(s),Object.prototype.hasOwnProperty.call(k,M)||(k[M]=m++,S[M]=!0),_=g+M,Object.prototype.hasOwnProperty.call(k,_))g=_;else{if(Object.prototype.hasOwnProperty.call(S,g)){if(g.charCodeAt(0)<256){for(i=0;i<p;i++)e=e<<1,a==o-1?(a=0,h.push(f(e)),e=0):a++;for(l=g.charCodeAt(0),i=0;i<8;i++)e=e<<1|l&1,a==o-1?(a=0,h.push(f(e)),e=0):a++,l=l>>1}else{for(l=1,i=0;i<p;i++)e=e<<1|l,a==o-1?(a=0,h.push(f(e)),e=0):a++,l=0;for(l=g.charCodeAt(0),i=0;i<16;i++)e=e<<1|l&1,a==o-1?(a=0,h.push(f(e)),e=0):a++,l=l>>1}y--,y==0&&(y=Math.pow(2,p),p++),delete S[g]}else for(l=k[g],i=0;i<p;i++)e=e<<1|l&1,a==o-1?(a=0,h.push(f(e)),e=0):a++,l=l>>1;y--,y==0&&(y=Math.pow(2,p),p++),k[_]=m++,g=String(M)}if(g!==""){if(Object.prototype.hasOwnProperty.call(S,g)){if(g.charCodeAt(0)<256){for(i=0;i<p;i++)e=e<<1,a==o-1?(a=0,h.push(f(e)),e=0):a++;for(l=g.charCodeAt(0),i=0;i<8;i++)e=e<<1|l&1,a==o-1?(a=0,h.push(f(e)),e=0):a++,l=l>>1}else{for(l=1,i=0;i<p;i++)e=e<<1|l,a==o-1?(a=0,h.push(f(e)),e=0):a++,l=0;for(l=g.charCodeAt(0),i=0;i<16;i++)e=e<<1|l&1,a==o-1?(a=0,h.push(f(e)),e=0):a++,l=l>>1}y--,y==0&&(y=Math.pow(2,p),p++),delete S[g]}else for(l=k[g],i=0;i<p;i++)e=e<<1|l&1,a==o-1?(a=0,h.push(f(e)),e=0):a++,l=l>>1;y--,y==0&&(y=Math.pow(2,p),p++)}for(l=2,i=0;i<p;i++)e=e<<1|l&1,a==o-1?(a=0,h.push(f(e)),e=0):a++,l=l>>1;for(;;)if(e=e<<1,a==o-1){h.push(f(e));break}else a++;return h.join("")},decompress:function(t){return t==null?"":t==""?null:v._decompress(t.length,32768,function(o){return t.charCodeAt(o)})},_decompress:function(t,o,f){var i=[],l=4,k=4,S=3,M="",_=[],g,y,m,p,h,e,a,s={val:f(0),position:o,index:1};for(g=0;g<3;g+=1)i[g]=g;for(m=0,h=Math.pow(2,2),e=1;e!=h;)p=s.val&s.position,s.position>>=1,s.position==0&&(s.position=o,s.val=f(s.index++)),m|=(p>0?1:0)*e,e<<=1;switch(m){case 0:for(m=0,h=Math.pow(2,8),e=1;e!=h;)p=s.val&s.position,s.position>>=1,s.position==0&&(s.position=o,s.val=f(s.index++)),m|=(p>0?1:0)*e,e<<=1;a=r(m);break;case 1:for(m=0,h=Math.pow(2,16),e=1;e!=h;)p=s.val&s.position,s.position>>=1,s.position==0&&(s.position=o,s.val=f(s.index++)),m|=(p>0?1:0)*e,e<<=1;a=r(m);break;case 2:return""}for(i[3]=a,y=a,_.push(a);;){if(s.index>t)return"";for(m=0,h=Math.pow(2,S),e=1;e!=h;)p=s.val&s.position,s.position>>=1,s.position==0&&(s.position=o,s.val=f(s.index++)),m|=(p>0?1:0)*e,e<<=1;switch(a=m){case 0:for(m=0,h=Math.pow(2,8),e=1;e!=h;)p=s.val&s.position,s.position>>=1,s.position==0&&(s.position=o,s.val=f(s.index++)),m|=(p>0?1:0)*e,e<<=1;i[k++]=r(m),a=k-1,l--;break;case 1:for(m=0,h=Math.pow(2,16),e=1;e!=h;)p=s.val&s.position,s.position>>=1,s.position==0&&(s.position=o,s.val=f(s.index++)),m|=(p>0?1:0)*e,e<<=1;i[k++]=r(m),a=k-1,l--;break;case 2:return _.join("")}if(l==0&&(l=Math.pow(2,S),S++),i[a])M=i[a];else if(a===k)M=y+y.charAt(0);else return null;_.push(M),i[k++]=y+M.charAt(0),l--,y=M,l==0&&(l=Math.pow(2,S),S++)}}};return v}();c!=null?c.exports=n:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return n})}(O);var z=O.exports;const W=new Set;function j(c){return fetch(c,{method:"GET",credentials:"include",headers:{Accept:"application/json"},redirect:"error"}).then(r=>r.arrayBuffer()).then(r=>{const d=z.decompressFromUint8Array(new Uint8Array(r));return JSON.parse(d)})}function $(c){const n=j(`/yang/sros/paths${c}.lzs`).then(u=>u??[]),r=j(`/yang/sros/descriptions${c}.lzs`).then(u=>u??[]),d=j(`/yang/sros/platforms${c}.lzs`).then(u=>u??[]).catch(()=>[]);return Promise.all([n,r,d]).then(([u,w,A])=>(console.debug(`loaded ${c}`,u.length,w.length,A.length),u.map((v,t)=>{if(typeof v!="string")return console.log("undefined",t,u,w,A),{};const o=v.split(",");return{k:o[0],t:o[2],w:o[1]?o[1].toUpperCase():"T",p:B(A[t]),d:w[t]??""}}))).catch(u=>(console.error(`Could not load ${c}: ${u}`),[]))}function B(c){if(typeof c!="string")return"";let n="";return c.split(",").forEach(r=>{r.startsWith("S")?r=r.replace("S","SR-"):r.startsWith("E")?r=r.replace("E","ESS-"):r.startsWith("I")?r=r.replace("I","IXR-"):r.startsWith("X")?r=r.replace("X","XRS-"):r.startsWith("N")&&(r=r.replace("N","VSR-NRC")),r&&(r.endsWith("-")&&(r=r.slice(0,r.length-1)),n&&(n+=","),W.add(r),n+=r)}),n}function b(c,n){return c.d!==n.d||c.w!==n.w||c.p!==n.p||c.t!==n.t}function D(c,n){const r=[];let d=0,u=0;for(;d<c.length&&u<n.length;){const w=c[d],A=n[u],v=w.k.localeCompare(A.k);v===0?(b(w,A)&&r.push({k:w.k,change:"mod",old:w,item:A}),d++,u++):v<0?(r.push({change:"del",k:w.k,item:w}),d++):(r.push({change:"add",k:A.k,item:A}),u++)}for(;d<c.length;)r.push({change:"del",k:c[d].k,item:c[d]}),d++;for(;u<n.length;)r.push({change:"add",k:n[u].k,item:n[u]}),u++;return console.debug(`${r.length} differences`),r}const G=[{label:"config",value:"/config",help:"Nokia YANG config model"},{label:"groups",value:"/configure/groups",help:"Config groups from the YANG model"},{label:"OpenConfig",value:"configure openconfig",help:"OpenConfig config & state elements from the MD-CLI"},{label:"state",value:"/state",help:"YANG state model"},{label:"tools",value:"tools",help:"MD-CLI tools commands"},{label:"show",value:"show",help:"MD-CLI show commands"},{label:"other",value:"other",help:"Other MD-CLI commands"}];let U=[];const E=G.map(c=>c.value).sort((c,n)=>n.length-c.length);function X(c,n){if(Object.keys(n).length==0)return c;const r=n.startswith?n.startswith.map(d=>E.indexOf(d)):[];return U.length!=c.length&&(U=Z(c,E,E.indexOf("other"))),c.filter((d,u)=>{if(n.startswith&&!r.includes(U[u])||(n.tick||n.cross)&&(n.cross&&n.platforms&&!n.platforms.some(A=>!d.p.includes(A))||n.tick&&n.platforms&&!n.platforms.some(A=>d.p.includes(A))))return!1;if(!n.marks)return!0;let w=0;for(;w<n.marks.length;){if(!d.k.includes(n.marks[w])&&!d.t.includes(n.marks[w]))return!1;w+=1}return!0})}function Z(c,n,r){return c.map(d=>{for(let u=0;u<n.length;u++)if(d.k.startsWith(n[u])||n[u]=="configure openconfig"&&d.k.startsWith("state openconfig"))return u;return r})}let T="",x=[];self.onmessage=c=>{const n=c.data;if(n.load){C(n.load);return}if(n.compare){Y(n.compare);return}if(n.get){postMessage({data:X(x,n.get)});return}console.log("unknown command",n)};function C(c){$(c).then(n=>{x=n,T=c,L()})}function L(){postMessage({info:{ver:T,verOld:R,len:x.length,platforms:[...W]}})}let R;function Y(c){if(c==="x"){postMessage({diffdata:[]}),R=void 0,L();return}$(c).then(n=>{console.log(`starting compare ${c} --> ${T}`);const r=D(n,x);postMessage({diffdata:r}),R=c,L()})}})();