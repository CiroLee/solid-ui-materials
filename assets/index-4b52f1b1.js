import{d as C,b as m,e as b,o as L,f as l,i as c,c as k,a as q,S as R,t as p,u as S,g as T,F as A,h as u}from"./index-7da84f43.js";import{S as E}from"./index-28aac285.js";const D=p('<div class="popup"><div class="popup__mask"></div><div>'),H=n=>{let e,a;const[s,o]=m(!1),[r,v]=m(!1),[$,w]=m(!0),y=()=>{n.maskClosable&&(o(!1),n?.onCancel?.())};return b(()=>{n.show&&(v(!0),w(!1)),setTimeout(()=>{o(n.show)},0)}),b(()=>{n.show&&e&&e.addEventListener("transitionend",function(){!s()&&r()&&w(!0)})}),L(()=>{e&&e.removeEventListener("transitionend",function(){})}),l(R,{get when(){return n.show||!$()},get children(){const g=D(),t=g.firstChild,i=t.nextSibling;t.$$click=y;const j=e;typeof j=="function"?S(j,t):e=t;const f=a;return typeof f=="function"?S(f,i):a=i,c(i,()=>n.children),k(h=>{const _=!!s(),x=`popup__content ${n.placement||"center"}`,d=!!s();return _!==h._v$&&t.classList.toggle("show",h._v$=_),x!==h._v$2&&q(i,h._v$2=x),d!==h._v$3&&i.classList.toggle("show",h._v$3=d),h},{_v$:void 0,_v$2:void 0,_v$3:void 0}),g}})};C(["click"]);const F=n=>navigator.clipboard.writeText(n);var P=n=>{let e=new URLSearchParams;for(let[a,s]of Object.entries(n))e.append(a,s);return e.toString()};async function V(n,e={}){const a=e?.method;let s="",o="";a?.toLowerCase()==="get"&&e.params&&(s="?"+P(e.params)),o=JSON.stringify(e.body);const r=await fetch(n+s,{...e,body:o});return r.status<400?r.json():Promise.reject({status:r.status,msg:r.statusText})}const K=async n=>await V(`https://api.github.com/repos/CiroLee/solid-ui-materials/contents/src/${n}`),N=p('<div flex flex-col w-440px h-full bg-white p-12px overflow-hidden box-border><div flex></div><div flex-1 bg-red mt-3 overflow-auto p-12px rounded-1 relative bg="#2a272b" text-white><div absolute top-2 right-2 text-gray-3 p-4px rounded-1 cursor-pointer transition-all class="hover:bg-gray/40"></div><pre><code>'),O=p("<div inline-flex items-center h-44px px-16px cursor-default border-solid box-border>"),G=n=>{let e=0;const[a,s]=m(""),[o,r]=m(""),[v,$]=m(!1),w=async()=>{const t=[];for(const i of n.tabs){const j=await K(i.path);t.push({...i,code:j.content})}return t},y=t=>{F(t).then(()=>{clearTimeout(e),$(!0),e=window.setTimeout(()=>{$(!1)},500)})},[g]=T(w);return b(()=>{s(g()?.[0].name||"")}),b(()=>{r(window.atob(g()?.find(t=>t.name===a())?.code||""))}),l(H,{get show(){return n.show},maskClosable:!0,placement:"right",get onCancel(){return n.onCancel},get children(){const t=N(),i=t.firstChild,j=i.nextSibling,f=j.firstChild,h=f.nextSibling,_=h.firstChild;return c(i,l(A,{get each(){return g()},children:x=>(()=>{const d=O();return d.$$click=()=>s(x.name),c(d,()=>x.name),k(()=>q(d,`${a()===x.name?"text-black border-0 border-b-2px border-black":"text-gray border-0"} transition-all hover:text-black`)),d})()})),f.$$click=()=>y(o()),c(f,l(u,{get name(){return v()?"check-line":"clipboard-line"},size:"18px"})),c(_,o),t}})},J=G;C(["click"]);const M={"code-view":"code-view-module_code-view_3AF4z"};const U=p("<div>"),B=n=>(()=>{const e=U();return k(a=>{const s=M["code-view"],o=n.html;return s!==a._v$&&q(e,a._v$=s),o!==a._v$2&&(e.innerHTML=a._v$2=o),a},{_v$:void 0,_v$2:void 0}),e})(),I=B,Q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,W=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,X=p("<div flex items-center justify-between><h3>SIcon</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),Y=p("<span text-sub>based on"),Z=p('<a text-14px text-blue-600 ml-1 href="https://github.com/Remix-Design/RemixIcon" target="-blank">Remixicon'),ss=p("<h4>图标尺寸"),z=p('<div class="children:mr-2">'),ns=p("<h4>图标颜色(支持渐变色)");function ts(){const n=[{name:"tsx",path:"components/SIcon/index.tsx"},{name:"scss",path:"components/SIcon/index.scss"}],[e,a]=m(!1);return[(()=>{const s=X(),o=s.firstChild,r=o.nextSibling,v=r.firstChild;return v.$$click=()=>a(!0),c(r,l(E,{path:"SIcon",name:"source"}),null),s})(),Y(),Z(),ss(),(()=>{const s=z();return c(s,l(u,{name:"home-smile-2-line"}),null),c(s,l(u,{name:"home-smile-2-line",size:"24px"}),null),c(s,l(u,{name:"home-smile-2-line",size:"32px"}),null),s})(),l(I,{html:Q}),ns(),(()=>{const s=z();return c(s,l(u,{name:"home-smile-2-fill",size:"32px",color:"blue"}),null),c(s,l(u,{name:"home-smile-2-fill",size:"32px",color:"red"}),null),c(s,l(u,{name:"home-smile-2-fill",size:"32px",gradient:"linear-gradient(45deg, yellow, green)"}),null),s})(),l(I,{html:W}),l(J,{get show(){return e()},tabs:n,onCancel:()=>a(!1)})]}C(["click"]);export{ts as default};
