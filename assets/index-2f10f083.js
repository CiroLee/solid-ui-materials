import{m as v,i as h,a as x,b as k,s as w,t as p,c as n,F as b,d as m,e as f}from"./index-bda3e0fa.js";import{S,C as g,a as R}from"./index-98e83d6a.js";const C=p('<label><input type="radio"><div class="s-radio__track"></div><div class="s-radio__children">'),G=r=>{const l=v({class:"",style:{}},r),o=a=>{r.onChange?.(a)};return(()=>{const a=C(),s=a.firstChild,c=s.nextSibling,i=c.nextSibling;return s.addEventListener("change",o),h(i,()=>l.children),x(t=>{const d=`s-radio ${l.class}`.replace(/\s{2,}/g," ").trim(),e=l.style,j=l.disabled;return d!==t._v$&&k(a,t._v$=d),t._v$2=w(a,e,t._v$2),j!==t._v$3&&(s.disabled=t._v$3=j),t},{_v$:void 0,_v$2:void 0,_v$3:void 0}),x(()=>s.checked=l.checked),a})()},u=G,q=p("<div>"),P=r=>{const l=v({class:"",style:{}},r),o=(a,s)=>{a.currentTarget,r.onChange?.(s)};return(()=>{const a=q();return h(a,n(b,{get each(){return l.options},children:s=>n(u,v(s,{get checked(){return s.value===l.value},onChange:c=>o(c,s.value)}))})),x(s=>{const c=`s-radio-group ${l.class}`.replace(/\s{2,}/g," ").trim(),i=l.style;return c!==s._v$&&k(a,s._v$=c),s._v$2=w(a,i,s._v$2),s},{_v$:void 0,_v$2:void 0}),a})()},y=P,A=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SRadio</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SRadio</span>&gt;</span>Radio<span class="hljs-tag">&lt;/<span class="hljs-name">SRadio</span>&gt;</span></span>;
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,V=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SRadio</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SRadio</span> <span class="hljs-attr">disabled</span>&gt;</span>disabled<span class="hljs-tag">&lt;/<span class="hljs-name">SRadio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SRadio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">checked</span>&gt;</span>
        disabled
      <span class="hljs-tag">&lt;/<span class="hljs-name">SRadio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,O=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SRadio</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">SRadioGroupOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [groupValue, setGroupValue] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-string">&#x27;apple&#x27;</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-attr">radioGroup</span>: <span class="hljs-title class_">SRadioGroupOptions</span>[] = [
    {
      <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;bear&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;bear&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
    },
  ];
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SRadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{groupValue()}</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{radioGroup}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setGroupValue}</span> /&gt;</span></span>;
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,D=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SRadio</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">SRadioGroupOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [radioPhone, setRadioPhone] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-string">&#x27;iphone&#x27;</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-attr">radioGroup</span>: <span class="hljs-title class_">SRadioGroupOptions</span>[] = [
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>apple<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>🍎<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;radio-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>banana<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>🍌<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;radio-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>orange<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;price&quot;</span>&gt;</span>🍊<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;radio-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>peach<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;price&quot;</span>&gt;</span>🍑<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;radio-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;peach&#x27;</span>,
    },
  ];
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SRadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioPhone()}</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{radioGroup}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setRadioPhone}</span> /&gt;</span></span>;
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
<pre class="hljs"><code><span class="hljs-comment">// radio-page.scss</span>
<span class="hljs-selector-class">.radio-page-custom</span> {
  <span class="hljs-selector-class">.s-radio__track</span> {
    <span class="hljs-attribute">align-self</span>: flex-start;
    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">6px</span>;
  }
  <span class="hljs-selector-class">.title</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;
  }
  &amp;<span class="hljs-selector-pseudo">:has</span>(input:disabled) <span class="hljs-selector-class">.price</span> {
    <span class="hljs-attribute">color</span>: inherit;
  }
}
</code></pre>
`;const E=p('<div><div class="title">apple</div><div>🍎'),F=p('<div><div class="title">banana</div><div>🍌'),H=p('<div><div class="title">orange</div><div class="price">🍊'),L=p('<div><div class="title">peach</div><div class="price">🍑'),z=p("<div flex items-center justify-between><h3>SRadio</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),N=p("<h4>basic"),T=p("<h4>disabled"),B=p('<div class="children:mr-3">'),I=p("<h4>radio group"),J=p("<h4>radio group(custom radio children)");function Q(){const r=[{name:"radio.tsx",path:"components/SRadio/radio.tsx"},{name:"group.tsx",path:"components/SRadio/group.tsx"},{name:"index.ts",path:"components/SRadio/index.ts"},{name:"index.scss",path:"components/SRadio/index.scss"}],[l,o]=m(!1),[a,s]=m("apple"),[c,i]=m("iphone"),t=[{children:"apple",value:"apple"},{children:"bear",value:"bear"},{children:"banana",value:"banana"}],d=[{children:E(),class:"radio-page-custom",value:"apple"},{children:F(),class:"radio-page-custom",value:"banana"},{children:H(),class:"radio-page-custom",value:"orange"},{children:L(),disabled:!0,class:"radio-page-custom",value:"peach"}];return[(()=>{const e=z(),j=e.firstChild,_=j.nextSibling,$=_.firstChild;return $.$$click=()=>o(!0),h(_,n(S,{path:"SRadio",name:"source"}),null),e})(),N(),n(u,{children:"Radio"}),n(g,{content:A}),T(),(()=>{const e=B();return h(e,n(u,{disabled:!0,children:"disabled"}),null),h(e,n(u,{disabled:!0,checked:!0,children:"disabled"}),null),h(e,n(g,{content:V}),null),e})(),I(),n(y,{get value(){return a()},options:t,onChange:s}),n(g,{content:O}),J(),n(y,{get value(){return c()},options:d,onChange:i}),n(g,{content:D}),n(R,{get show(){return l()},tabs:r,onCancel:()=>o(!1)})]}f(["click"]);export{Q as default};
