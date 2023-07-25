import{d as u,f as $,i as e,c as a,S as q,g as y,a as _,b as S,j as v,e as f,t as r,A as C}from"./index-4dbdb587.js";import{S as T,C as h,a as b}from"./index-4a63075d.js";const z=r('<span class="s-textarea__count">'),A=r("<div><textarea>"),L=s=>{const[g,i]=u(""),x=c=>{const t=c.target;if(s.maxLength&&t.value.length>s.maxLength){t.value=t.value.slice(0,s.maxLength);return}s.onChange&&s.onChange(t.value)};return $(()=>{s.showCount&&(s.maxLength?i(`${s.value?.length}/${s.maxLength}`):i(`${s.value?.length}`))}),(()=>{const c=A(),t=c.firstChild;return t.$$input=x,e(c,a(y,{get when(){return s.clearable&&s.value},get children(){return a(q,{class:"s-textarea__suffix",name:"close-circle-fill",onClick:()=>s.onChange?.("")})}}),null),e(c,a(y,{get when(){return s.showCount},get children(){const l=z();return e(l,g),l}}),null),_(l=>{const n=`s-textarea ${s.status?`s-textarea--${s.status}`:""} ${s.class||""}`.replace(/\s{2,}/g," ").trim(),o=s.resize||"both",j=s.disabled,d=s.readonly,m=s.rows||5,w=s.placeholder;return n!==l._v$&&S(c,l._v$=n),o!==l._v$2&&((l._v$2=o)!=null?c.style.setProperty("--resize",o):c.style.removeProperty("--resize")),j!==l._v$3&&(t.disabled=l._v$3=j),d!==l._v$4&&(t.readOnly=l._v$4=d),m!==l._v$5&&v(t,"rows",l._v$5=m),w!==l._v$6&&v(t,"placeholder",l._v$6=w),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),_(()=>t.value=s.value||""),c})()},p=L;f(["input"]);const D=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">STextarea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value()}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;input sth&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,E=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">STextarea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;rows=3&quot;</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">{3}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,I=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">STextarea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-600px&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;resize default(both)&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-600px&quot;</span> <span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;resize vertical&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-600px&quot;</span> <span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;resize horizontal&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-600px&quot;</span> <span class="hljs-attr">resize</span>=<span class="hljs-string">&quot;none&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled resize&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">STextarea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [text, setText] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-string">&#x27;&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{text()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setText}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,H=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">STextarea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [text, setText] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-string">&#x27;&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">showCount</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">maxLength</span>=<span class="hljs-string">{100}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{text()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setText}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,N=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">STextarea</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;warn&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;error&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STextarea</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;readonly&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;readonly&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,O=r("<div flex items-center justify-between><h3>STextarea</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),R=r("<p text-sub>depend on "),V=r("<h4>basic"),B=r("<h4>custom rows"),F=r("<h4>resize set"),k=r("<div children:mb-3>"),G=r("<h4>allow clear"),J=r("<h4>show count"),K=r("<h4>status");function U(){const s=[{name:"index.tsx",path:"components/STextarea/index.tsx"},{name:"index.scss",path:"components/STextarea/index.scss"}],[g,i]=u(""),[x,c]=u(""),[t,l]=u(!1);return[(()=>{const n=O(),o=n.firstChild,j=o.nextSibling,d=j.firstChild;return d.$$click=()=>l(!0),e(j,a(T,{path:"STextarea",name:"source"}),null),n})(),(()=>{const n=R();return n.firstChild,e(n,a(C,{class:"text-blue-600",href:"/components/icon",children:"SIcon"}),null),n})(),V(),a(p,{class:"w-600px",placeholder:"input sth"}),a(h,{content:D}),B(),a(p,{class:"w-600px",placeholder:"rows=3",rows:3}),a(h,{content:E}),F(),(()=>{const n=k();return e(n,a(p,{class:"w-600px",placeholder:"resize default(both)"}),null),e(n,a(p,{class:"w-600px",resize:"vertical",placeholder:"resize vertical"}),null),e(n,a(p,{class:"w-600px",resize:"horizontal",placeholder:"resize horizontal"}),null),e(n,a(p,{class:"w-600px",resize:"none",placeholder:"disabled resize"}),null),n})(),a(h,{content:I}),G(),a(p,{class:"w-600px",clearable:!0,get value(){return g()},onChange:i}),a(h,{content:P}),J(),a(p,{class:"w-600px",showCount:!0,get value(){return x()},onChange:c,clearable:!0,maxLength:100}),a(h,{content:H}),K(),(()=>{const n=k();return e(n,a(p,{class:"w-600px",placeholder:"warn",status:"warn"}),null),e(n,a(p,{class:"w-600px",placeholder:"error",status:"error"}),null),e(n,a(p,{class:"w-600px",placeholder:"disabled",disabled:!0}),null),e(n,a(p,{class:"w-600px",placeholder:"readonly",readonly:!0,value:"readonly"}),null),n})(),a(h,{content:N}),a(b,{get show(){return t()},tabs:s,onCancel:()=>l(!1)})]}f(["click"]);export{U as default};
