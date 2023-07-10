import{b as u,f as z,g as V,i as l,d as a,h as g,S as r,c as I,a as L,s as w,e as A,t,A as B}from"./index-684d551d.js";import{S as P,C as o,a as D}from"./index-4cb66afa.js";const E=t('<div class="s-input__prefix">'),W=t('<div class="s-input__suffix">'),b=t('<div class="s-input__suffix s-input__clear">'),H=t('<span class="s-input__suffix s-input__count">'),M=t("<div><input>"),N=n=>{const[j,m]=u(""),[d,f]=u(!0),x=z(()=>n.type==="password"?d()?"password":"text":n.type||"text"),_=p=>{const e=p.target;if(n.maxLength&&e.value.length>n.maxLength){e.value=e.value.slice(0,n.maxLength);return}n.onChange&&n.onChange(e.value)};return V(()=>{n.showCount&&(n.maxLength?m(`${n.value?.length}/${n.maxLength}`):m(`${n.value?.length}`))}),(()=>{const p=M(),e=p.firstChild;return l(p,a(g,{get when(){return n.prefix},get children(){const s=E();return l(s,()=>n.prefix),s}}),e),e.$$input=_,l(p,a(g,{get when(){return n.suffix},get children(){const s=W();return l(s,()=>n.suffix),s}}),null),l(p,a(g,{get when(){return n.clearable&&n.value},get children(){const s=b();return s.$$click=()=>n.onChange?.(""),l(s,a(r,{name:"close-circle-fill"})),s}}),null),l(p,a(g,{get when(){return n.showCount},get children(){const s=H();return l(s,j),s}}),null),l(p,a(g,{get when(){return n.type==="password"},get children(){const s=b();return s.$$click=()=>f(!d()),l(s,a(r,{get name(){return`${d()?"eye-close-line":"eye-line"}`}})),s}}),null),I(s=>{const h=`s-input ${n.size?`s-input--${n.size}`:"s-input--medium"} ${n.status?`s-input--${n.status}`:""} ${n.class||""}`.replace(/\s{2,}/g," ").trim(),i=n.countWidth,y=j(),k=x(),q=n.disabled,S=n.readonly,C=n.placeholder;return h!==s._v$&&L(p,s._v$=h),i!==s._v$2&&((s._v$2=i)!=null?p.style.setProperty("--count-width",i):p.style.removeProperty("--count-width")),y!==s._v$3&&w(p,"data-count",s._v$3=y),k!==s._v$4&&w(e,"type",s._v$4=k),q!==s._v$5&&(e.disabled=s._v$5=q),S!==s._v$6&&(e.readOnly=s._v$6=S),C!==s._v$7&&w(e,"placeholder",s._v$7=C),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),I(()=>e.value=n.value||""),p})()},c=N;A(["input","click"]);const O=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,R=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,F=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,G=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,J=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,K=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,Q=t("<div flex items-center justify-between><h3>SInput</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),U=t("<p text-gray>depend on "),X=t("<h4>基本使用"),Y=t("<div w-540px><p>value: "),Z=t("<h4>不同尺寸"),v=t("<div w-540px children:mb-3>"),ss=t("<h4>前缀和后缀"),as=t("<h4>不同状态"),ns=t("<h4>可清除"),$=t("<div w-540px>"),ls=t("<h4>显示计数"),ts=t("<h4>密码");function cs(){const n=[{name:"tsx",path:"components/SInput/index.tsx"},{name:"scss",path:"components/SInput/index.scss"}],[j,m]=u(""),[d,f]=u(""),[x,_]=u(""),[p,e]=u(!1);return[(()=>{const s=Q(),h=s.firstChild,i=h.nextSibling,y=i.firstChild;return y.$$click=()=>e(!0),l(i,a(P,{path:"SIcon",name:"source"}),null),s})(),(()=>{const s=U();return s.firstChild,l(s,a(B,{class:"text-blue decoration-none",activeClass:"text-blue-600",inactiveClass:"text-blue-600",href:"/components/icon",children:"SIcon"}),null),s})(),X(),(()=>{const s=Y(),h=s.firstChild;return h.firstChild,l(h,j,null),l(s,a(c,{get value(){return j()},placeholder:"input sth...",onChange:m}),null),s})(),a(o,{html:O}),Z(),(()=>{const s=v();return l(s,a(c,{size:"small",placeholder:"small size"}),null),l(s,a(c,{size:"medium",placeholder:"medium size"}),null),l(s,a(c,{size:"large",placeholder:"large size"}),null),s})(),a(o,{html:R}),ss(),(()=>{const s=v();return l(s,a(c,{placeholder:"prefix icon",get prefix(){return a(r,{name:"user-line",color:"gray"})}}),null),l(s,a(c,{placeholder:"suffix icon",get suffix(){return a(r,{name:"search-line",color:"gray"})}}),null),l(s,a(c,{placeholder:"suffix icon",get prefix(){return a(r,{name:"money-cny-box-line",color:"gray"})},get suffix(){return a(r,{name:"information-line",color:"#b9b5b5",title:"information"})}}),null),s})(),a(o,{html:T}),as(),(()=>{const s=v();return l(s,a(c,{status:"warn",placeholder:"warn",get prefix(){return a(r,{name:"shield-keyhole-line"})}}),null),l(s,a(c,{status:"error",placeholder:"error",get prefix(){return a(r,{name:"shield-keyhole-line"})}}),null),l(s,a(c,{disabled:!0,placeholder:"disabled",status:"error",value:"disabled",get prefix(){return a(r,{name:"shield-keyhole-line",color:"#BABABA"})}}),null),l(s,a(c,{readonly:!0,value:"readonly"}),null),s})(),a(o,{html:F}),ns(),(()=>{const s=$();return l(s,a(c,{clearable:!0,placeholder:"input sth...",get value(){return d()},onChange:f})),s})(),a(o,{html:G}),ls(),(()=>{const s=$();return l(s,a(c,{showCount:!0,placeholder:"input sth...",maxLength:20,countWidth:"40px",get value(){return x()},onChange:_})),s})(),a(o,{html:J}),ts(),(()=>{const s=$();return l(s,a(c,{type:"password"})),s})(),a(o,{html:K}),a(D,{get show(){return p()},tabs:n,onCancel:()=>e(!1)})]}A(["click"]);export{cs as default};
