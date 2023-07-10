import{i as n,c as y,a as b,e as d,t as p,b as x,d as a,S as j}from"./index-684d551d.js";import{S as k,C as r,a as S}from"./index-4cb66afa.js";const w=p('<button tabindex="0">'),_=t=>{const o=()=>{t.onClick&&t.onClick()};return(()=>{const e=w();return e.$$click=o,n(e,()=>t.children),y(s=>{const c=t.disabled,h=`s-button ${t.size?`s-button--${t.size}`:"s-button--medium"} ${t.type?`s-button--${t.type}`:"s-button--default"} ${t.loading?"s-button--loading":""} ${t.round?"round":""} ${t.circle?"circle":""} ${t.block?"block":""} ${t.class||""}`.replace(/\s{2,}/g," ").trim();return c!==s._v$&&(e.disabled=s._v$=c),h!==s._v$2&&b(e,s._v$2=h),s},{_v$:void 0,_v$2:void 0}),e})()},l=_;d(["click"]);const B=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warn&quot;</span>&gt;</span>warn<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>danger<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>text<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">disabled</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>small<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span>&gt;</span>medium<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>large<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,f=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">round</span>&gt;</span>round<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">circle</span>&gt;</span>C<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,$=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">block</span>&gt;</span>block<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
        block
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">block</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
        block
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,v=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button-group&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>apple<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>pear<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>banana<span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button-group&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
          apple
        <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
          pear
        <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
          banana
        <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
<pre class="hljs"><code><span class="hljs-comment">// style.scss</span>
<span class="hljs-selector-class">.button-group</span> <span class="hljs-selector-tag">button</span> {
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">12px</span>;
  &amp;<span class="hljs-selector-pseudo">:first</span>-child {
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-top-right-radius</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-bottom-right-radius</span>: <span class="hljs-number">0</span>;
  }
  &amp;<span class="hljs-selector-pseudo">:last-child</span> {
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-top-left-radius</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-bottom-left-radius</span>: <span class="hljs-number">0</span>;
  }
  &amp;<span class="hljs-selector-pseudo">:not</span>(:last-child, :first-child) {
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">0</span>;
  }
}
</code></pre>
`,C=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;add-circle-line&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;16px&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> &#x27;<span class="hljs-attr">padding-left</span>&#x27;<span class="hljs-attr">:</span> &#x27;<span class="hljs-attr">4px</span>&#x27; }}&gt;</span>Add<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> &#x27;<span class="hljs-attr">padding-right</span>&#x27;<span class="hljs-attr">:</span> &#x27;<span class="hljs-attr">4px</span>&#x27; }}&gt;</span>Add<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;add-circle-line&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;16px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button-loading&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;loader-line&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;16px&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> &#x27;<span class="hljs-attr">padding-left</span>&#x27;<span class="hljs-attr">:</span> &#x27;<span class="hljs-attr">4px</span>&#x27; }}&gt;</span>loading<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`;const A=p("<div flex items-center justify-between><h3>SButton</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),z=p("<h4>按钮类型"),P=p('<div class="children:mr-2 children:mb-2">'),I=p("<h4>按钮尺寸"),i=p('<div class="flex items-center children:mr-2 children:mb-2">'),D=p("<h4>按钮形状"),E=p("<h4>block按钮"),H=p("<div w-400px p-12px border border-solid border-gray-300 rounded children:mb-2>"),L=p("<h4>应用-按钮组"),u=p('<div class="button-group">'),N=p("<h4>应用-带有图标按钮"),g=p("<span>Add"),R=p("<span>loading");function G(){const t=[{name:"tsx",path:"components/SButton/index.tsx"},{name:"scss",path:"components/SButton/index.scss"}],[o,e]=x(!1);return[(()=>{const s=A(),c=s.firstChild,h=c.nextSibling,m=h.firstChild;return m.$$click=()=>e(!0),n(h,a(k,{path:"SButton",name:"source"}),null),s})(),z(),(()=>{const s=P();return n(s,a(l,{type:"default",children:"default"}),null),n(s,a(l,{type:"primary",children:"primary"}),null),n(s,a(l,{type:"success",children:"success"}),null),n(s,a(l,{type:"warn",children:"warn"}),null),n(s,a(l,{type:"danger",children:"danger"}),null),n(s,a(l,{type:"text",children:"text"}),null),n(s,a(l,{disabled:!0,children:"primary"}),null),s})(),a(r,{html:B}),I(),(()=>{const s=i();return n(s,a(l,{size:"small",children:"small"}),null),n(s,a(l,{size:"medium",children:"medium"}),null),n(s,a(l,{size:"large",children:"large"}),null),s})(),a(r,{html:q}),D(),(()=>{const s=i();return n(s,a(l,{round:!0,children:"round"}),null),n(s,a(l,{circle:!0,children:"C"}),null),s})(),a(r,{html:f}),E(),(()=>{const s=H();return n(s,a(l,{block:!0,children:"block"}),null),n(s,a(l,{block:!0,type:"primary",children:"block"}),null),n(s,a(l,{block:!0,round:!0,type:"primary",children:"block"}),null),s})(),a(r,{html:$}),L(),(()=>{const s=u();return n(s,a(l,{type:"primary",children:"apple"}),null),n(s,a(l,{type:"primary",children:"pear"}),null),n(s,a(l,{type:"primary",children:"banana"}),null),s})(),(()=>{const s=u();return n(s,a(l,{type:"primary",round:!0,children:"apple"}),null),n(s,a(l,{type:"primary",round:!0,children:"pear"}),null),n(s,a(l,{type:"primary",round:!0,children:"banana"}),null),s})(),a(r,{html:v}),N(),(()=>{const s=i();return n(s,a(l,{type:"primary",get children(){return[a(j,{name:"add-circle-line",size:"16px"}),(()=>{const c=g();return c.style.setProperty("padding-left","4px"),c})()]}}),null),n(s,a(l,{type:"primary",get children(){return[(()=>{const c=g();return c.style.setProperty("padding-right","4px"),c})(),a(j,{name:"add-circle-line",size:"16px"})]}}),null),n(s,a(l,{type:"primary",loading:!0,class:"button-loading",get children(){return[a(j,{name:"loader-line",size:"16px"}),(()=>{const c=R();return c.style.setProperty("padding-left","4px"),c})()]}}),null),s})(),a(r,{html:C}),a(S,{get show(){return o()},tabs:t,onCancel:()=>e(!1)})]}d(["click"]);export{G as default};
