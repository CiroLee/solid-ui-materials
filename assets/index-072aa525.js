import{b as u,f as A,g as z,i as l,d as a,h as d,S as r,c as S,a as V,s as C,e as b,t,A as L}from"./index-e884bf39.js";import{C as o,a as B}from"./index-8e6062e1.js";import{S as P}from"./index-5ab1b756.js";const D=t('<div class="s-input__prefix">'),E=t('<div class="s-input__suffix">'),I=t('<div class="s-input__suffix s-input__clear">'),W=t('<span class="s-input__suffix s-input__count">'),H=t("<div><input>"),M=n=>{const[g,m]=u(""),[j,f]=u(!0),x=A(()=>n.type==="password"?j()?"password":"text":n.type||"text"),w=e=>{const p=e.target;if(n.maxLength&&p.value.length>n.maxLength){p.value=p.value.slice(0,n.maxLength);return}n.onChange&&n.onChange(p.value)};return z(()=>{n.showCount&&(n.maxLength?m(`${n.value?.length}/${n.maxLength}`):m(`${n.value?.length}`))}),(()=>{const e=H(),p=e.firstChild;return l(e,a(d,{get when(){return n.prefix},get children(){const s=D();return l(s,()=>n.prefix),s}}),p),p.$$input=w,l(e,a(d,{get when(){return n.suffix},get children(){const s=E();return l(s,()=>n.suffix),s}}),null),l(e,a(d,{get when(){return n.clearable&&n.value},get children(){const s=I();return s.$$click=()=>n.onChange?.(""),l(s,a(r,{name:"close-circle-fill"})),s}}),null),l(e,a(d,{get when(){return n.showCount},get children(){const s=W();return l(s,g),s}}),null),l(e,a(d,{get when(){return n.type==="password"},get children(){const s=I();return s.$$click=()=>f(!j()),l(s,a(r,{get name(){return`${j()?"eye-close-line":"eye-line"}`}})),s}}),null),S(s=>{const h=`s-input ${n.size?`s-input--${n.size}`:"s-input--medium"} ${n.status?`s-input--${n.status}`:""} ${n.class||""}`.replace(/\s{2,}/g," ").trim(),i=n.countWidth,y=x(),k=n.disabled,$=n.readonly,q=n.placeholder;return h!==s._v$&&V(e,s._v$=h),i!==s._v$2&&((s._v$2=i)!=null?e.style.setProperty("--count-width",i):e.style.removeProperty("--count-width")),y!==s._v$3&&C(p,"type",s._v$3=y),k!==s._v$4&&(p.disabled=s._v$4=k),$!==s._v$5&&(p.readOnly=s._v$5=$),q!==s._v$6&&C(p,"placeholder",s._v$6=q),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),S(()=>p.value=n.value||""),e})()},c=M;b(["input","click"]);const N=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,O=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,R=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,F=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,G=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,J=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,K=t("<div flex items-center justify-between><h3>SInput</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),Q=t("<p text-gray>depend on "),U=t("<h4>基本使用"),X=t("<div w-540px><p>value: "),Y=t("<h4>不同尺寸"),_=t("<div w-540px children:mb-3>"),Z=t("<h4>前缀和后缀"),ss=t("<h4>不同状态"),as=t("<h4>可清除"),v=t("<div w-540px>"),ns=t("<h4>显示计数"),ls=t("<h4>密码");function cs(){const n=[{name:"tsx",path:"components/SInput/index.tsx"},{name:"scss",path:"components/SInput/index.scss"}],[g,m]=u(""),[j,f]=u(""),[x,w]=u(""),[e,p]=u(!1);return[(()=>{const s=K(),h=s.firstChild,i=h.nextSibling,y=i.firstChild;return y.$$click=()=>p(!0),l(i,a(P,{path:"SIcon",name:"source"}),null),s})(),(()=>{const s=Q();return s.firstChild,l(s,a(L,{class:"text-blue decoration-none",activeClass:"text-blue-600",inactiveClass:"text-blue-600",href:"/components/icon",children:"SIcon"}),null),s})(),U(),(()=>{const s=X(),h=s.firstChild;return h.firstChild,l(h,g,null),l(s,a(c,{get value(){return g()},placeholder:"input sth...",onChange:m}),null),s})(),a(o,{html:N}),Y(),(()=>{const s=_();return l(s,a(c,{size:"small",placeholder:"small size"}),null),l(s,a(c,{size:"medium",placeholder:"medium size"}),null),l(s,a(c,{size:"large",placeholder:"large size"}),null),s})(),a(o,{html:O}),Z(),(()=>{const s=_();return l(s,a(c,{placeholder:"prefix icon",get prefix(){return a(r,{name:"user-line",color:"gray"})}}),null),l(s,a(c,{placeholder:"suffix icon",get suffix(){return a(r,{name:"search-line",color:"gray"})}}),null),l(s,a(c,{placeholder:"suffix icon",get prefix(){return a(r,{name:"money-cny-box-line",color:"gray"})},get suffix(){return a(r,{name:"information-line",color:"#b9b5b5",title:"information"})}}),null),s})(),a(o,{html:R}),ss(),(()=>{const s=_();return l(s,a(c,{status:"warn",placeholder:"warn",get prefix(){return a(r,{name:"shield-keyhole-line"})}}),null),l(s,a(c,{status:"error",placeholder:"error",get prefix(){return a(r,{name:"shield-keyhole-line"})}}),null),l(s,a(c,{disabled:!0,placeholder:"disabled",status:"error",value:"disabled",get prefix(){return a(r,{name:"shield-keyhole-line",color:"#BABABA"})}}),null),l(s,a(c,{readonly:!0,value:"readonly"}),null),s})(),a(o,{html:T}),as(),(()=>{const s=v();return l(s,a(c,{clearable:!0,placeholder:"input sth...",get value(){return j()},onChange:f})),s})(),a(o,{html:F}),ns(),(()=>{const s=v();return l(s,a(c,{showCount:!0,placeholder:"input sth...",maxLength:20,countWidth:"40px",get value(){return x()},onChange:w})),s})(),a(o,{html:G}),ls(),(()=>{const s=v();return l(s,a(c,{type:"password"})),s})(),a(o,{html:J}),a(B,{get show(){return e()},tabs:n,onCancel:()=>p(!1)})]}b(["click"]);export{cs as default};
