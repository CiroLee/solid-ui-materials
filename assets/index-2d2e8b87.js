import{m as k,d as y,i as x,c as s,a as u,F as b,b as _,e as w,t as a,S as g}from"./index-776d9353.js";import{S as f,C as d,a as $}from"./index-8eb8ed4f.js";const v=a("<div>"),S=a('<div class="s-tabs__item">'),C=e=>{const r=k({class:"",style:{}},e),[o,j]=y(e.defaultKey),i=n=>{n.disabled||(j(n.key),e.onChange?.(n.key))};return(()=>{const n=v();return x(n,s(b,{get each(){return e.tabs},children:l=>(()=>{const p=S();return p.$$click=()=>i(l),x(p,()=>l.content),u(t=>{const c=l.key===o(),h=!!l.disabled;return c!==t._v$&&p.classList.toggle("s-tabs__item--active",t._v$=c),h!==t._v$2&&p.classList.toggle("s-tabs__item--disabled",t._v$2=h),t},{_v$:void 0,_v$2:void 0}),p})()})),u(()=>_(n,`s-tabs ${r.class}`.replace(/\s{2,}/g," ").trim())),n})()},m=C;w(["click"]);const T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">STabs</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> <span class="hljs-attr">tabs</span>: <span class="hljs-title class_">STabItem</span>[] = [
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;windows&#x27;</span>,
      <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;windows&#x27;</span>,
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
      <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;linux&#x27;</span>,
      <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;linux&#x27;</span>,
    },
  ];
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STabs</span>
        <span class="hljs-attr">defaultKey</span>=<span class="hljs-string">&quot;apple&quot;</span>
        <span class="hljs-attr">tabs</span>=<span class="hljs-string">{tabs}</span>
        <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">width:</span> &#x27;<span class="hljs-attr">260px</span>&#x27; }}
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(key)</span> =&gt;</span> console.log(&#x27;tab change: &#x27;, key)}
      /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">STabs</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> <span class="hljs-attr">tabs</span>: <span class="hljs-title class_">STabItem</span>[] = [
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;windows&#x27;</span>,
      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;windows&#x27;</span>,
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
      <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;linux&#x27;</span>,
      <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;linux&#x27;</span>,
    },
  ];
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STabs</span> <span class="hljs-attr">defaultKey</span>=<span class="hljs-string">&quot;apple&quot;</span> <span class="hljs-attr">tabs</span>=<span class="hljs-string">{tabs}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">width:</span> &#x27;<span class="hljs-attr">260px</span>&#x27; }} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,K=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">STabs</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SIcon</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> <span class="hljs-attr">tabs</span>: <span class="hljs-title class_">STabItem</span>[] = [
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;windows&#x27;</span>,
      <span class="hljs-attr">content</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;windows-fill&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">ml-1</span>&gt;</span>window<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/&gt;</span></span>
      ),
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
      <span class="hljs-attr">content</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple-fill&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">ml-1</span>&gt;</span>apple<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/&gt;</span></span>
      ),
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;linux&#x27;</span>,
      <span class="hljs-attr">content</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;ubuntu-fill&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">ml-1</span>&gt;</span>linux<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/&gt;</span></span>
      ),
    },
  ];
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">STabs</span> <span class="hljs-attr">defaultKey</span>=<span class="hljs-string">&quot;apple&quot;</span> <span class="hljs-attr">tabs</span>=<span class="hljs-string">{tabs}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">width:</span> &#x27;<span class="hljs-attr">300px</span>&#x27; }} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,I=a("<div>apple"),A=a("<div>linux"),D=a("<span ml-1>window"),L=a("<span ml-1>apple"),E=a("<span ml-1>linux"),F=a("<div><div flex items-center justify-between><h3>STabs</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),P=a("<h4>basic"),N=a("<h4>disabled"),R=a("<h4>custom item");function B(){const e=[{name:"index.tsx",path:"components/STabs/index.tsx"},{name:"index.scss",path:"components/STabs/index.scss"}],r=[{key:"windows",content:"windows"},{key:"apple",content:"apple"},{key:"linux",content:"linux"}],o=[{key:"windows",disabled:!0,content:"windows"},{key:"apple",content:I()},{key:"linux",content:A()}],j=[{key:"windows",content:[s(g,{name:"windows-fill"}),D()]},{key:"apple",content:[s(g,{name:"apple-fill"}),L()]},{key:"linux",content:[s(g,{name:"ubuntu-fill"}),E()]}],[i,n]=y(!1);return[(()=>{const l=F(),p=l.firstChild,t=p.firstChild,c=t.nextSibling,h=c.firstChild;return h.$$click=()=>n(!0),x(c,s(f,{path:"STabs",name:"source"}),null),l})(),P(),s(m,{defaultKey:"apple",tabs:r,class:"w-260px",onChange:l=>console.log("tab change: ",l)}),s(d,{content:T}),N(),s(m,{defaultKey:"apple",tabs:o,class:"w-260px"}),s(d,{content:q}),R(),s(m,{defaultKey:"apple",tabs:j,class:"w-300px"}),s(d,{content:K}),s($,{get show(){return i()},tabs:e,onCancel:()=>n(!1)})]}w(["click"]);export{B as default};
