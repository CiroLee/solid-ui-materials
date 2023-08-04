import{m as g,i as r,a as u,b as k,s as v,t,f as _,c as p,F as y,d as C,e as w}from"./index-8534f600.js";import{S as $,C as j,a as f}from"./index-7932b7f6.js";const S=t('<label><input type="checkbox"><div class="s-checkbox__track"></div><div class="s-checkbox__children">'),q=o=>{const a=g({class:"",style:{}},o),e=c=>{o.onChange?.(c)};return(()=>{const c=S(),n=c.firstChild,s=n.nextSibling,h=s.nextSibling;return n.addEventListener("change",e),r(h,()=>a.children),u(l=>{const i=`s-checkbox ${a.class}`.replace(/\s{2,}/g," ").trim(),b=a.style,x=a.disabled;return i!==l._v$&&k(c,l._v$=i),l._v$2=v(c,b,l._v$2),x!==l._v$3&&(n.disabled=l._v$3=x),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),u(()=>n.checked=a.checked),c})()},d=q,G=t("<div>"),A=o=>{let a=[];const e=g({class:"",value:"",style:{}},o),c=(n,s)=>{a=n.currentTarget.checked?[...a,s]:a.filter(l=>l!==s),o.onChange?.(a)};return _(()=>{a=[...a,e.value]}),(()=>{const n=G();return r(n,p(y,{get each(){return e.options},children:s=>p(d,g(s,{get checked(){return s.value===e.value},onChange:h=>c(h,s.value)}))})),u(s=>{const h=`s-checkbox-group ${e.class}`.replace(/\s{2,}/g," ").trim(),l=e.style;return h!==s._v$&&k(n,s._v$=h),s._v$2=v(n,l,s._v$2),s},{_v$:void 0,_v$2:void 0}),n})()},m=A,E=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SCheckbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SCheckbox</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> console.log(e)}&gt;checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">SCheckbox</span>&gt;</span></span>;
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,O=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SCheckbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SCheckbox</span> <span class="hljs-attr">disabled</span>&gt;</span>disabled<span class="hljs-tag">&lt;/<span class="hljs-name">SCheckbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SCheckbox</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">checked</span>&gt;</span>
        disabled
      <span class="hljs-tag">&lt;/<span class="hljs-name">SCheckbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,D=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SRadio</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">SCheckboxGroupOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> <span class="hljs-attr">checkboxGroup</span>: <span class="hljs-title class_">SCheckboxGroupOptions</span>[] = [
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
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SCheckboxGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;apple&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{checkboxGroup}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(list)</span> =&gt;</span> console.log(list)} /&gt;</span>;
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SRadio</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">SCheckboxGroupOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> <span class="hljs-attr">checkboxGroup</span>: <span class="hljs-title class_">SCheckboxGroupOptions</span>[] = [
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>apple<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>🍎<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;checkbox-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>banana<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>🍌<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;checkbox-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
    },
    {
      <span class="hljs-attr">children</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>orange<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;price&quot;</span>&gt;</span>🍊<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;checkbox-page-custom&#x27;</span>,
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
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;checkbox-page-custom&#x27;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;peach&#x27;</span>,
    },
  ];
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SCheckboxGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;apple&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{checkboxGroup}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(list)</span> =&gt;</span> console.log(list)} /&gt;</span>;
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
<pre class="hljs"><code><span class="hljs-comment">// checkbox-page.scss</span>
<span class="hljs-selector-class">.checkbox-page-custom</span> {
  <span class="hljs-selector-class">.s-checkbox__track</span> {
    <span class="hljs-attribute">align-self</span>: flex-start;
    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">6px</span>;
  }
  <span class="hljs-selector-class">.title</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;
  }
}
</code></pre>
`;const R=t('<div><div class="title">apple</div><div>🍎'),F=t('<div><div class="title">banana</div><div>🍌'),H=t('<div><div class="title">orange</div><div class="price">🍊'),L=t('<div><div class="title">peach</div><div class="price">🍑'),z=t("<div flex items-center justify-between><h3>SCheckbox</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),N=t("<h4>basic"),T=t("<h4>disabled"),V=t('<div class="children:mr-12px">'),B=t("<h4>checkbox group"),I=t("<h4>custom children");function M(){const o=[{name:"checkbox.tsx",path:"components/SCheckbox/checkbox.tsx"},{name:"group.tsx",path:"components/SCheckbox/group.tsx"},{name:"index.ts",path:"components/SCheckbox/index.ts"},{name:"index.scss",path:"components/SCheckbox/index.scss"}],a=[{children:"apple",value:"apple"},{children:"bear",value:"bear"},{children:"banana",value:"banana"}],e=[{children:R(),class:"checkbox-page-custom",value:"apple"},{children:F(),class:"checkbox-page-custom",value:"banana"},{children:H(),class:"checkbox-page-custom",value:"orange"},{children:L(),disabled:!0,class:"checkbox-page-custom",value:"peach"}],[c,n]=C(!1);return[(()=>{const s=z(),h=s.firstChild,l=h.nextSibling,i=l.firstChild;return i.$$click=()=>n(!0),r(l,p($,{path:"SCheckbox",name:"source"}),null),s})(),N(),p(d,{onChange:s=>console.log(s),children:"checkbox"}),p(j,{content:E}),T(),(()=>{const s=V();return r(s,p(d,{disabled:!0,children:"disabled"}),null),r(s,p(d,{disabled:!0,checked:!0,children:"disabled"}),null),s})(),p(j,{content:O}),B(),p(m,{value:"apple",options:a,onChange:s=>console.log(s)}),p(j,{content:D}),I(),p(m,{value:"apple",options:e,onChange:s=>console.log(s)}),p(j,{content:P}),p(f,{get show(){return c()},tabs:o,onCancel:()=>n(!1)})]}w(["click"]);export{M as default};
