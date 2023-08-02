import{m as g,i as r,c as s,g as j,M as m,a as d,j as u,h as y,b as _,s as k,t as l,d as x,e as f}from"./index-10b63f6b.js";import{S as $}from"./index-2583c958.js";import{C as c,a as v}from"./index-2d172113.js";const S=l('<div class="s-browser-frame__control s-browser-frame__macos--icon"><li></li><li></li><li>'),C=l('<div class="s-browser-frame__header--content"><a target="_blank">'),b=l('<div class="s-browser-frame__header--content">'),B=l('<div class="s-browser-frame__control s-browser-frame__windows--icon"><li></li><li></li><li>'),F=l('<div><header class="s-browser-frame__header"></header><div>'),q=h=>{const n=g({url:"",title:"",class:"",style:{}},h);return(()=>{const p=F(),t=p.firstChild,i=t.nextSibling;return r(t,s(j,{get when(){return n.type==="macos"},get children(){return S()}}),null),r(t,s(y,{get children(){return[s(m,{get when(){return n.url},get children(){const a=C(),e=a.firstChild;return r(e,()=>n.url),d(()=>u(e,"href",n.url)),a}}),s(m,{get when(){return n.title},get children(){const a=b();return r(a,()=>n.title),a}})]}}),null),r(t,s(j,{get when(){return n.type==="windows"},get children(){return B()}}),null),r(i,()=>n.children),d(a=>{const e=`s-browser-frame ${n.class}`.replace(/\s{2,}/g," ").trim(),w=n.style;return e!==a._v$&&_(p,a._v$=e),a._v$2=k(p,w,a._v$2),a},{_v$:void 0,_v$2:void 0}),p})()},o=q,A=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SBrowserFrame</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SBrowserFrame</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;macos&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,D=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SBrowserFrame</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SBrowserFrame</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;windows&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SBrowserFrame</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SBrowserFrame</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;macos&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;macOS&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,E=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SBrowserFrame</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SBrowserFrame</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;macos&quot;</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://www.solidjs.com&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,M=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SBrowserFrame</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SBrowserFrame</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;macos&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;website&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">padding:</span> &#x27;<span class="hljs-attr">20px</span>&#x27; }}&gt;</span>this is custom content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">SBrowserFrame</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,O=l("<div flex items-center justify-between><h3>SBrowserFrame</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),L=l("<h4>macos style"),N=l("<h4>windows style"),R=l("<h4>title"),V=l("<h4>url"),z=l("<h4>custom children"),G=l("<div>this is custom content");function K(){const h=[{name:"index.tsx",path:"components/SBrowserFrame/index.tsx"},{name:"index.scss",path:"components/SBrowserFrame/index.scss"}],[n,p]=x(!1);return[(()=>{const t=O(),i=t.firstChild,a=i.nextSibling,e=a.firstChild;return e.$$click=()=>p(!0),r(a,s($,{path:"SBrowserFrame",name:"source"}),null),t})(),L(),s(o,{type:"macos"}),s(c,{content:A}),N(),s(o,{type:"windows"}),s(c,{content:D}),R(),s(o,{type:"macos",title:"macOS"}),s(c,{content:P}),V(),s(o,{type:"macos",url:"https://www.solidjs.com"}),s(c,{content:E}),z(),s(o,{type:"macos",title:"website",get children(){const t=G();return t.style.setProperty("padding","20px"),t}}),s(c,{content:M}),s(v,{get show(){return n()},tabs:h,onCancel:()=>p(!1)})]}f(["click"]);export{K as default};
