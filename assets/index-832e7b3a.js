import{i as n,b as a,S as e,c as j,s as d,t as r,a as x}from"./index-c194701e.js";const _=r('<a decoration-none text-gray relative hover:text-blue-600 target="_blank"><span>'),q=t=>(()=>{const s=_(),l=s.firstChild;return n(l,()=>t.name||"Source"),n(s,a(e,{name:"external-link-line"}),null),j(()=>d(s,"href",`https://github.com/CiroLee/solid-ui-materials/tree/main/src/components/${t.path}`)),s})(),f=q,v={"code-view":"code-view-module_code-view_3AF4z"};const $=r("<div>"),w=t=>(()=>{const s=$();return j(l=>{const p=v["code-view"],c=t.html;return p!==l._v$&&x(s,l._v$=p),c!==l._v$2&&(s.innerHTML=l._v$2=c),l},{_v$:void 0,_v$2:void 0}),s})(),m=w,S=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,y=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,b=r('<div><div><h3>SIcon图标</h3><span text-sub>SIcon based on</span><a text-14px text-blue-600 ml-1 href="https://github.com/Remix-Design/RemixIcon" target="-blank">Remixicon</a><h4>图标尺寸</h4><div class="children:mr-2"></div><h4>图标颜色(支持渐变色)</h4><div class="children:mr-2"></div></div><footer mt-12>');function I(){return(()=>{const t=b(),s=t.firstChild,l=s.firstChild,p=l.nextSibling,c=p.nextSibling,u=c.nextSibling,o=u.nextSibling,h=o.nextSibling,i=h.nextSibling,g=s.nextSibling;return n(o,a(e,{name:"home-smile-2-line"}),null),n(o,a(e,{name:"home-smile-2-line",size:"24px"}),null),n(o,a(e,{name:"home-smile-2-line",size:"32px"}),null),n(s,a(m,{html:S}),h),n(i,a(e,{name:"home-smile-2-fill",size:"32px",color:"blue"}),null),n(i,a(e,{name:"home-smile-2-fill",size:"32px",color:"red"}),null),n(i,a(e,{name:"home-smile-2-fill",size:"32px",gradient:"linear-gradient(45deg, yellow, green)"}),null),n(s,a(m,{html:y}),null),n(g,a(f,{path:"SIcon"})),t})()}export{I as default};
