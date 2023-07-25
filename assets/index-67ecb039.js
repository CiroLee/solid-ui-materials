import{d as i,i as n,c as a,t as p,e as w}from"./index-b8edd375.js";import{S as u,C as h,a as S}from"./index-e662508b.js";import{S as l}from"./index-44fd19ff.js";const x=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SSwitch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [on, setOn] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>switch: {on() ? &#x27;On&#x27; : &#x27;Off&#x27;} <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SSwitch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{on()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setOn}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,y=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SSwitch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SSwitch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SSwitch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SSwitch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,k=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SSwitch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SSwitch</span> <span class="hljs-attr">checked</span> <span class="hljs-attr">disabled</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SSwitch</span> <span class="hljs-attr">disabled</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,f=p("<div flex items-center justify-between><h3>SSwitch</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),_=p("<h4>basic"),$=p("<div><p>switch: <!> "),C=p("<h4>size"),j=p('<div class="children:mb-2 children:flex!">'),b=p("<h4>disabled");function q(){const d=[{name:"index.tsx",path:"components/SSwitch/index.tsx"},{name:"index.scss",path:"components/SSwitch/index.scss"}],[m,r]=i(!1),[o,g]=i(!1);return[(()=>{const s=f(),t=s.firstChild,e=t.nextSibling,c=e.firstChild;return c.$$click=()=>r(!0),n(e,a(u,{path:"SSwitch",name:"source"}),null),s})(),_(),(()=>{const s=$(),t=s.firstChild,e=t.firstChild,c=e.nextSibling;return c.nextSibling,n(t,()=>o()?"On":"Off",c),n(s,a(l,{get checked(){return o()},onChange:g}),null),s})(),a(h,{content:x}),C(),(()=>{const s=j();return n(s,a(l,{size:"small"}),null),n(s,a(l,{size:"medium"}),null),n(s,a(l,{size:"large"}),null),s})(),a(h,{content:y}),b(),(()=>{const s=j();return n(s,a(l,{checked:!0,disabled:!0}),null),n(s,a(l,{disabled:!0}),null),s})(),a(h,{content:k}),a(S,{get show(){return m()},tabs:d,onCancel:()=>r(!1)})]}w(["click"]);export{q as default};
