import{m as b,i as n,c as x,a as k,s as S,e as m,t as p,b as w,d as a,S as i}from"./index-4901d557.js";import{S as _}from"./index-fdb3f869.js";import{C as r,a as B}from"./index-4a2c95bf.js";const q=p('<button tabindex="0">'),f=e=>{const c=b({size:"medium",type:"default",class:"",style:{}},e),o=()=>{e.onClick&&e.onClick()};return(()=>{const s=q();return s.$$click=o,n(s,()=>e.children),x(t=>{const h=e.disabled,j=`s-button s-button--${c.size} s-button--${c.type}
       ${c.loading?"s-button--loading":""} ${c.round?"s-button--round":""} ${c.circle?"s-button--circle":""} ${c.block?"s-button--block":""} ${c.class}`.replace(/\s{2,}/g," ").trim(),y=c.style;return h!==t._v$&&(s.disabled=t._v$=h),j!==t._v$2&&k(s,t._v$2=j),t._v$3=S(s,y,t._v$3),t},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})()},l=f;m(["click"]);const $=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,v=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,C=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,A=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,z=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`;const I=p("<div flex items-center justify-between><h3>SButton</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),D=p("<h4>按钮类型"),E=p('<div class="children:mr-2 children:mb-2">'),H=p("<h4>按钮尺寸"),u=p('<div class="flex items-center children:mr-2 children:mb-2">'),L=p("<h4>按钮形状"),N=p("<h4>block按钮"),R=p("<div w-400px p-12px border border-solid border-gray-300 rounded children:mb-2>"),V=p("<h4>应用-按钮组"),g=p('<div class="button-group">'),F=p("<h4>应用-带有图标按钮"),d=p("<span>Add"),G=p("<span>loading");function O(){const e=[{name:"tsx",path:"components/SButton/index.tsx"},{name:"scss",path:"components/SButton/index.scss"}],[c,o]=w(!1);return[(()=>{const s=I(),t=s.firstChild,h=t.nextSibling,j=h.firstChild;return j.$$click=()=>o(!0),n(h,a(_,{path:"SButton",name:"source"}),null),s})(),D(),(()=>{const s=E();return n(s,a(l,{type:"default",children:"default"}),null),n(s,a(l,{type:"primary",children:"primary"}),null),n(s,a(l,{type:"success",children:"success"}),null),n(s,a(l,{type:"warn",children:"warn"}),null),n(s,a(l,{type:"danger",children:"danger"}),null),n(s,a(l,{type:"text",children:"text"}),null),n(s,a(l,{disabled:!0,children:"primary"}),null),s})(),a(r,{content:$}),H(),(()=>{const s=u();return n(s,a(l,{size:"small",children:"small"}),null),n(s,a(l,{size:"medium",children:"medium"}),null),n(s,a(l,{size:"large",children:"large"}),null),s})(),a(r,{content:v}),L(),(()=>{const s=u();return n(s,a(l,{round:!0,children:"round"}),null),n(s,a(l,{circle:!0,children:"C"}),null),s})(),a(r,{content:C}),N(),(()=>{const s=R();return n(s,a(l,{block:!0,children:"block"}),null),n(s,a(l,{block:!0,type:"primary",children:"block"}),null),n(s,a(l,{block:!0,round:!0,type:"primary",children:"block"}),null),s})(),a(r,{content:A}),V(),(()=>{const s=g();return n(s,a(l,{type:"primary",children:"apple"}),null),n(s,a(l,{type:"primary",children:"pear"}),null),n(s,a(l,{type:"primary",children:"banana"}),null),s})(),(()=>{const s=g();return n(s,a(l,{type:"primary",round:!0,children:"apple"}),null),n(s,a(l,{type:"primary",round:!0,children:"pear"}),null),n(s,a(l,{type:"primary",round:!0,children:"banana"}),null),s})(),a(r,{content:z}),F(),(()=>{const s=u();return n(s,a(l,{type:"primary",get children(){return[a(i,{name:"add-circle-line",size:"16px"}),(()=>{const t=d();return t.style.setProperty("padding-left","4px"),t})()]}}),null),n(s,a(l,{type:"primary",get children(){return[(()=>{const t=d();return t.style.setProperty("padding-right","4px"),t})(),a(i,{name:"add-circle-line",size:"16px"})]}}),null),n(s,a(l,{type:"primary",loading:!0,class:"button-loading",get children(){return[a(i,{name:"loader-line",size:"16px"}),(()=>{const t=G();return t.style.setProperty("padding-left","4px"),t})()]}}),null),s})(),a(r,{content:P}),a(B,{get show(){return c()},tabs:e,onCancel:()=>o(!1)})]}m(["click"]);export{O as default};
