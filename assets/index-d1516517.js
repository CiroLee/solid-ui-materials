import{m as z,d as i,f as V,i as t,c as a,g as L,M as g,S as h,h as B,a as C,b as P,s as W,j as I,e as A,t as p,A as D}from"./index-82502e81.js";import{S as E,C as o,a as M}from"./index-b9c48bb1.js";const H=p('<div class="s-input__prefix">'),N=p('<div class="s-input__suffix">'),b=p('<div class="s-input__suffix s-input__clear">'),O=p('<span class="s-input__suffix s-input__count">'),R=p("<div><input>"),T=l=>{const r=z({size:"medium",countWidth:"0px",class:"",style:{}},l),[m,d]=i(""),[u,y]=i(!0),f=()=>l.type==="password"?u()?"password":"text":l.type||"text",x=c=>{const s=c.target;if(l.maxLength&&s.value.length>l.maxLength){s.value=s.value.slice(0,l.maxLength);return}l.onChange&&l.onChange(s.value)};return V(()=>{l.showCount&&(l.maxLength?d(`${l.value?.length}/${l.maxLength}`):d(`${l.value?.length}`))}),(()=>{const c=R(),s=c.firstChild;return t(c,a(L,{get when(){return l.prefix},get children(){const n=H();return t(n,()=>l.prefix),n}}),s),s.$$input=x,t(c,a(B,{get children(){return[a(g,{get when(){return l.suffix},get children(){const n=N();return t(n,()=>l.suffix),n}}),a(g,{get when(){return l.clearable&&l.value},get children(){const n=b();return n.$$click=()=>l.onChange?.(""),t(n,a(h,{name:"close-circle-fill"})),n}}),a(g,{get when(){return l.showCount},get children(){const n=O();return t(n,m),n}}),a(g,{get when(){return l.type==="password"},get children(){const n=b();return n.$$click=()=>y(!u()),t(n,a(h,{get name(){return`${u()?"eye-close-line":"eye-line"}`}})),n}})]}}),null),C(n=>{const j=`s-input s-input--${r.size} ${r.status?`s-input--${r.status}`:""} 
      ${r.class}`.replace(/\s{2,}/g," ").trim(),w={...r.style,"--count-width":r.countWidth},v=f(),$=l.disabled,q=l.readonly,S=l.placeholder;return j!==n._v$&&P(c,n._v$=j),n._v$2=W(c,w,n._v$2),v!==n._v$3&&I(s,"type",n._v$3=v),$!==n._v$4&&(s.disabled=n._v$4=$),q!==n._v$5&&(s.readOnly=n._v$5=q),S!==n._v$6&&I(s,"placeholder",n._v$6=S),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),C(()=>s.value=l.value||""),c})()},e=T;A(["input","click"]);const F=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [value, setValue] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-string">&#x27;&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>value: {value()}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value()}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;input sth...&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setValue}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,G=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;small size&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;medium size&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;large size&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,J=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;prefix icon&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;user-line&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;gray&quot;</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;suffix icon&quot;</span> <span class="hljs-attr">suffix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search-line&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;gray&quot;</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;suffix icon&quot;</span>
        <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;money-cny-box-line&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;gray&quot;</span> /&gt;</span>}
        suffix={<span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information-line&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#b9b5b5&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;information&quot;</span> /&gt;</span>}
      /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,K=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;shield-keyhole-line&quot;</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;shield-keyhole-line&quot;</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span>
        <span class="hljs-attr">disabled</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled&quot;</span>
        <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;error&quot;</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;disabled&quot;</span>
        <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;shield-keyhole-line&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#BABABA&quot;</span> /&gt;</span>}
      /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;readonly&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,Q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [value, setValue] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-string">&#x27;&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;input sth...&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setValue}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,U=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [value, setValue] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-string">&#x27;&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span>
        <span class="hljs-attr">showCount</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;input sth...&quot;</span>
        <span class="hljs-attr">maxLength</span>=<span class="hljs-string">{20}</span>
        <span class="hljs-attr">countWidth</span>=<span class="hljs-string">&quot;40px&quot;</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">{value()}</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setValue}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,X=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,Y=p("<div flex items-center justify-between><h3>SInput</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),Z=p("<p text-sub>depend on "),ss=p("<h4>basic"),as=p("<div w-540px><p>value: "),ns=p("<h4>size"),_=p("<div w-540px children:mb-3>"),ls=p("<h4>prefix and suffix"),ts=p("<h4>status"),ps=p("<h4>allow clear"),k=p("<div w-540px>"),es=p("<h4>show count"),cs=p("<h4>password");function os(){const l=[{name:"tsx",path:"components/SInput/index.tsx"},{name:"scss",path:"components/SInput/index.scss"}],[r,m]=i(""),[d,u]=i(""),[y,f]=i(""),[x,c]=i(!1);return[(()=>{const s=Y(),n=s.firstChild,j=n.nextSibling,w=j.firstChild;return w.$$click=()=>c(!0),t(j,a(E,{path:"SIcon",name:"source"}),null),s})(),(()=>{const s=Z();return s.firstChild,t(s,a(D,{class:"text-blue-600",href:"/components/icon",children:"SIcon"}),null),s})(),ss(),(()=>{const s=as(),n=s.firstChild;return n.firstChild,t(n,r,null),t(s,a(e,{get value(){return r()},placeholder:"input sth...",onChange:m}),null),s})(),a(o,{content:F}),ns(),(()=>{const s=_();return t(s,a(e,{size:"small",placeholder:"small size"}),null),t(s,a(e,{size:"medium",placeholder:"medium size"}),null),t(s,a(e,{size:"large",placeholder:"large size"}),null),s})(),a(o,{content:G}),ls(),(()=>{const s=_();return t(s,a(e,{placeholder:"prefix icon",get prefix(){return a(h,{name:"user-line",color:"gray"})}}),null),t(s,a(e,{placeholder:"suffix icon",get suffix(){return a(h,{name:"search-line",color:"gray"})}}),null),t(s,a(e,{placeholder:"suffix icon",get prefix(){return a(h,{name:"money-cny-box-line",color:"gray"})},get suffix(){return a(h,{name:"information-line",color:"#b9b5b5",title:"information"})}}),null),s})(),a(o,{content:J}),ts(),(()=>{const s=_();return t(s,a(e,{status:"warn",placeholder:"warn",get prefix(){return a(h,{name:"shield-keyhole-line"})}}),null),t(s,a(e,{status:"error",placeholder:"error",get prefix(){return a(h,{name:"shield-keyhole-line"})}}),null),t(s,a(e,{disabled:!0,placeholder:"disabled",status:"error",value:"disabled",get prefix(){return a(h,{name:"shield-keyhole-line",color:"#BABABA"})}}),null),t(s,a(e,{readonly:!0,value:"readonly"}),null),s})(),a(o,{content:K}),ps(),(()=>{const s=k();return t(s,a(e,{clearable:!0,placeholder:"input sth...",get value(){return d()},onChange:u})),s})(),a(o,{content:Q}),es(),(()=>{const s=k();return t(s,a(e,{showCount:!0,placeholder:"input sth...",maxLength:20,countWidth:"40px",get value(){return y()},onChange:f})),s})(),a(o,{content:U}),cs(),(()=>{const s=k();return t(s,a(e,{type:"password"})),s})(),a(o,{content:X}),a(M,{get show(){return x()},tabs:l,onCancel:()=>c(!1)})]}A(["click"]);export{os as default};
