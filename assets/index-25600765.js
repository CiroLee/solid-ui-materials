import{m,i as o,a as v,b as y,c as a,F as b,t as l,d as g,e as f}from"./index-f5b7717e.js";import{S,C as d,a as R}from"./index-f91699b1.js";const C=l('<label><input type="radio"><div class="s-radio__track"></div><div class="s-radio__children">'),q=l("<div>"),k=e=>{const p=m({class:"",style:{}},e),r=s=>{e.onChange?.(s)};return(()=>{const s=C(),n=s.firstChild,i=n.nextSibling,j=i.nextSibling;return n.addEventListener("change",r),o(j,()=>p.children),v(c=>{const h=`s-radio ${p.class}`.replace(/\s{2,}/g," ").trim(),t=p.disabled;return h!==c._v$&&y(s,c._v$=h),t!==c._v$2&&(n.disabled=c._v$2=t),c},{_v$:void 0,_v$2:void 0}),v(()=>n.checked=p.checked),s})()},_=e=>{const p=m({class:"",style:{}},e),r=(s,n)=>{s.currentTarget,e.onChange?.(n)};return(()=>{const s=q();return o(s,a(b,{get each(){return p.options},children:n=>a(k,m(n,{get checked(){return n.value===p.value},onChange:i=>r(i,n.value)}))})),v(()=>y(s,`s-radio-group ${p.class}`.replace(/\s{2,}/g," ").trim())),s})()},u=k,G=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SRadio</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SRadio</span>&gt;</span>Radio<span class="hljs-tag">&lt;/<span class="hljs-name">SRadio</span>&gt;</span></span>;
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,A=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,V=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SRadio</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">SRadioGroupOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [radioPhone, setRadioPhone] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-string">&#x27;iphone&#x27;</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-attr">radioGroup</span>: <span class="hljs-title class_">SRadioGroupOptions</span>[] = [
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>iphone<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;price&quot;</span>&gt;</span>$1.00<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;radio-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;iphone&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>huawei<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;price&quot;</span>&gt;</span>$2.00<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;radio-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;huawei&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>sansung<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;price&quot;</span>&gt;</span>$3.00<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;radio-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;sansung&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>nokia<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;price&quot;</span>&gt;</span>$4.00<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;radio-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;nokia&#x27;</span>,
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
  <span class="hljs-selector-class">.price</span> {
    <span class="hljs-attribute">color</span>: red;
  }
  &amp;<span class="hljs-selector-pseudo">:has</span>(input:disabled) <span class="hljs-selector-class">.price</span> {
    <span class="hljs-attribute">color</span>: inherit;
  }
</code></pre>
`;const O=l('<div><div class="radio-page title">iphone</div><div class="radio-page price">$1.00'),D=l('<div><div class="radio-page title">huawei</div><div class="radio-page price">$2.00'),E=l('<div><div class="radio-page title">sansung</div><div class="radio-page price">$3.00'),F=l('<div><div class="radio-page title">nokia</div><div class="radio-page price">$4.00'),H=l("<div flex items-center justify-between><h3>SRadio</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),L=l("<h4>basic"),z=l("<h4>disabled"),N=l('<div class="children:mr-3">'),T=l("<h4>radio group"),B=l("<h4>radio group(custom radio children)");function K(){const e=[{name:"index.tsx",path:"components/SRadio/index.tsx"},{name:"index.scss",path:"components/SRadio/index.scss"}],[p,r]=g(!1),[s,n]=g("apple"),[i,j]=g("iphone"),c=[{children:"apple",value:"apple"},{children:"bear",value:"bear"},{children:"banana",value:"banana"}],h=[{children:O(),class:"radio-page-custom",value:"iphone"},{children:D(),class:"radio-page-custom",value:"huawei"},{children:E(),class:"radio-page-custom",value:"sansung"},{children:F(),disabled:!0,class:"radio-page-custom",value:"nokia"}];return[(()=>{const t=H(),w=t.firstChild,x=w.nextSibling,$=x.firstChild;return $.$$click=()=>r(!0),o(x,a(S,{path:"SRadio",name:"source"}),null),t})(),L(),a(u,{children:"Radio"}),a(d,{content:G}),z(),(()=>{const t=N();return o(t,a(u,{disabled:!0,children:"disabled"}),null),o(t,a(u,{disabled:!0,checked:!0,children:"disabled"}),null),o(t,a(d,{content:P}),null),t})(),T(),a(_,{get value(){return s()},options:c,onChange:n}),a(d,{content:A}),B(),a(_,{get value(){return i()},options:h,onChange:j}),a(d,{content:V}),a(R,{get show(){return p()},tabs:e,onCancel:()=>r(!1)})]}f(["click"]);export{K as default};
