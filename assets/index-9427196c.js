import{d as m,i as n,c as a,A as u,S as l,t as p,e as g}from"./index-9076e8e0.js";import{S as d,C as c,a as x}from"./index-f29ba76b.js";const q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
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
`,w=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
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
`,y=p("<div flex items-center justify-between><h3>SIcon</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),f=p("<span text-sub>icon based on"),k=p("<h4>size"),o=p('<div class="children:mr-2">'),_=p("<h4>color(support gradient)");function $(){const r=[{name:"tsx",path:"components/SIcon/index.tsx"},{name:"scss",path:"components/SIcon/index.scss"}],[h,t]=m(!1);return[(()=>{const s=y(),i=s.firstChild,e=i.nextSibling,j=e.firstChild;return j.$$click=()=>t(!0),n(e,a(d,{path:"SIcon",name:"source"}),null),s})(),f(),a(u,{class:"text-blue-600 ml-1",href:"https://github.com/Remix-Design/RemixIcon",target:"_blank",children:"Remixicon"}),k(),(()=>{const s=o();return n(s,a(l,{name:"home-smile-2-line"}),null),n(s,a(l,{name:"home-smile-2-line",size:"24px"}),null),n(s,a(l,{name:"home-smile-2-line",size:"32px"}),null),s})(),a(c,{content:q}),_(),(()=>{const s=o();return n(s,a(l,{name:"home-smile-2-fill",size:"32px",color:"blue"}),null),n(s,a(l,{name:"home-smile-2-fill",size:"32px",color:"red"}),null),n(s,a(l,{name:"home-smile-2-fill",size:"32px",gradient:"linear-gradient(45deg, yellow, green)"}),null),s})(),a(c,{content:w}),a(x,{get show(){return h()},tabs:r,onCancel:()=>t(!1)})]}g(["click"]);export{$ as default};
