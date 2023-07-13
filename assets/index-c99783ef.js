import{m as z,b as i,f as V,g as L,i as t,d as a,h as d,S as r,c as C,a as B,s as P,j as I,e as A,t as p,A as D}from"./index-935a28e8.js";import{S as E,C as h,a as W}from"./index-0b7671e6.js";const H=p('<div class="s-input__prefix">'),M=p('<div class="s-input__suffix">'),b=p('<div class="s-input__suffix s-input__clear">'),N=p('<span class="s-input__suffix s-input__count">'),O=p("<div><input>"),R=l=>{const o=z({size:"medium",class:"",style:{}},l),[m,g]=i(""),[u,y]=i(!0),f=V(()=>l.type==="password"?u()?"password":"text":l.type||"text"),x=e=>{const s=e.target;if(l.maxLength&&s.value.length>l.maxLength){s.value=s.value.slice(0,l.maxLength);return}l.onChange&&l.onChange(s.value)};return L(()=>{l.showCount&&(l.maxLength?g(`${l.value?.length}/${l.maxLength}`):g(`${l.value?.length}`))}),(()=>{const e=O(),s=e.firstChild;return t(e,a(d,{get when(){return l.prefix},get children(){const n=H();return t(n,()=>l.prefix),n}}),s),s.$$input=x,t(e,a(d,{get when(){return l.suffix},get children(){const n=M();return t(n,()=>l.suffix),n}}),null),t(e,a(d,{get when(){return l.clearable&&l.value},get children(){const n=b();return n.$$click=()=>l.onChange?.(""),t(n,a(r,{name:"close-circle-fill"})),n}}),null),t(e,a(d,{get when(){return l.showCount},get children(){const n=N();return t(n,m),n}}),null),t(e,a(d,{get when(){return l.type==="password"},get children(){const n=b();return n.$$click=()=>y(!u()),t(n,a(r,{get name(){return`${u()?"eye-close-line":"eye-line"}`}})),n}}),null),C(n=>{const j=`s-input s-input--${o.size} ${o.status?`s-input--${o.status}`:""} 
      ${o.class}`.replace(/\s{2,}/g," ").trim(),w={...o.style,"--count-width":l.countWidth},k=f(),$=l.disabled,q=l.readonly,S=l.placeholder;return j!==n._v$&&B(e,n._v$=j),n._v$2=P(e,w,n._v$2),k!==n._v$3&&I(s,"type",n._v$3=k),$!==n._v$4&&(s.disabled=n._v$4=$),q!==n._v$5&&(s.readOnly=n._v$5=q),S!==n._v$6&&I(s,"placeholder",n._v$6=S),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),C(()=>s.value=l.value||""),e})()},c=R;A(["input","click"]);const T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,F=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,G=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,J=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,K=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,Q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,U=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,X=p("<div flex items-center justify-between><h3>SInput</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),Y=p("<p text-gray>depend on "),Z=p("<h4>基本使用"),ss=p("<div w-540px><p>value: "),as=p("<h4>不同尺寸"),_=p("<div w-540px children:mb-3>"),ns=p("<h4>前缀和后缀"),ls=p("<h4>不同状态"),ts=p("<h4>可清除"),v=p("<div w-540px>"),ps=p("<h4>显示计数"),es=p("<h4>密码");function os(){const l=[{name:"tsx",path:"components/SInput/index.tsx"},{name:"scss",path:"components/SInput/index.scss"}],[o,m]=i(""),[g,u]=i(""),[y,f]=i(""),[x,e]=i(!1);return[(()=>{const s=X(),n=s.firstChild,j=n.nextSibling,w=j.firstChild;return w.$$click=()=>e(!0),t(j,a(E,{path:"SIcon",name:"source"}),null),s})(),(()=>{const s=Y();return s.firstChild,t(s,a(D,{class:"text-blue decoration-none",activeClass:"text-blue-600",inactiveClass:"text-blue-600",href:"/components/icon",children:"SIcon"}),null),s})(),Z(),(()=>{const s=ss(),n=s.firstChild;return n.firstChild,t(n,o,null),t(s,a(c,{get value(){return o()},placeholder:"input sth...",onChange:m}),null),s})(),a(h,{content:T}),as(),(()=>{const s=_();return t(s,a(c,{size:"small",placeholder:"small size"}),null),t(s,a(c,{size:"medium",placeholder:"medium size"}),null),t(s,a(c,{size:"large",placeholder:"large size"}),null),s})(),a(h,{content:F}),ns(),(()=>{const s=_();return t(s,a(c,{placeholder:"prefix icon",get prefix(){return a(r,{name:"user-line",color:"gray"})}}),null),t(s,a(c,{placeholder:"suffix icon",get suffix(){return a(r,{name:"search-line",color:"gray"})}}),null),t(s,a(c,{placeholder:"suffix icon",get prefix(){return a(r,{name:"money-cny-box-line",color:"gray"})},get suffix(){return a(r,{name:"information-line",color:"#b9b5b5",title:"information"})}}),null),s})(),a(h,{content:G}),ls(),(()=>{const s=_();return t(s,a(c,{status:"warn",placeholder:"warn",get prefix(){return a(r,{name:"shield-keyhole-line"})}}),null),t(s,a(c,{status:"error",placeholder:"error",get prefix(){return a(r,{name:"shield-keyhole-line"})}}),null),t(s,a(c,{disabled:!0,placeholder:"disabled",status:"error",value:"disabled",get prefix(){return a(r,{name:"shield-keyhole-line",color:"#BABABA"})}}),null),t(s,a(c,{readonly:!0,value:"readonly"}),null),s})(),a(h,{content:J}),ts(),(()=>{const s=v();return t(s,a(c,{clearable:!0,placeholder:"input sth...",get value(){return g()},onChange:u})),s})(),a(h,{content:K}),ps(),(()=>{const s=v();return t(s,a(c,{showCount:!0,placeholder:"input sth...",maxLength:20,countWidth:"40px",get value(){return y()},onChange:f})),s})(),a(h,{content:Q}),es(),(()=>{const s=v();return t(s,a(c,{type:"password"})),s})(),a(h,{content:U}),a(W,{get show(){return x()},tabs:l,onCancel:()=>e(!1)})]}A(["click"]);export{os as default};
