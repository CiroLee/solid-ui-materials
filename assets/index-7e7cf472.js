import{b as j,i as n,d as a,S as l,t,e as u}from"./index-dfc76918.js";import{S as g,C as c,a as d}from"./index-0b45eea6.js";const x=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home-smile-2-line&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home-smile-2-line&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home-smile-2-line&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;32px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home-smile-2-fill&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;32px&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;blue&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home-smile-2-fill&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;32px&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home-smile-2-fill&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;32px&quot;</span> <span class="hljs-attr">gradient</span>=<span class="hljs-string">&quot;linear-gradient(45deg, yellow, green)&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,w=t("<div flex items-center justify-between><h3>SIcon</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),f=t("<span text-sub>based on"),y=t('<a text-14px text-blue-600 ml-1 href="https://github.com/Remix-Design/RemixIcon" target="-blank">Remixicon'),_=t("<h4>图标尺寸"),o=t('<div class="children:mr-2">'),k=t("<h4>图标颜色(支持渐变色)");function b(){const r=[{name:"tsx",path:"components/SIcon/index.tsx"},{name:"scss",path:"components/SIcon/index.scss"}],[h,p]=j(!1);return[(()=>{const s=w(),i=s.firstChild,e=i.nextSibling,m=e.firstChild;return m.$$click=()=>p(!0),n(e,a(g,{path:"SIcon",name:"source"}),null),s})(),f(),y(),_(),(()=>{const s=o();return n(s,a(l,{name:"home-smile-2-line"}),null),n(s,a(l,{name:"home-smile-2-line",size:"24px"}),null),n(s,a(l,{name:"home-smile-2-line",size:"32px"}),null),s})(),a(c,{html:x}),k(),(()=>{const s=o();return n(s,a(l,{name:"home-smile-2-fill",size:"32px",color:"blue"}),null),n(s,a(l,{name:"home-smile-2-fill",size:"32px",color:"red"}),null),n(s,a(l,{name:"home-smile-2-fill",size:"32px",gradient:"linear-gradient(45deg, yellow, green)"}),null),s})(),a(c,{html:q}),a(d,{get show(){return h()},tabs:r,onCancel:()=>p(!1)})]}u(["click"]);export{b as default};
