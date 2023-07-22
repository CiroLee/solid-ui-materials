import{m as y,i as a,c as n,S as g,g as j,a as w,b as x,s as q,t as e,d as f,A as _,e as k}from"./index-45690156.js";import{S}from"./index-8b067c08.js";import{S as $,C as i,a as A}from"./index-5c1da5a5.js";const v=e('<div class="s-alert__title">'),b=e('<div><div class="s-alert__content"><div class="s-alert__description">'),C=h=>{const t=y({type:"info",class:"",style:{}},h),o=()=>({info:"information-fill",success:"checkbox-circle-fill",warn:"information-fill",error:"close-circle-fill"})[t.type];return(()=>{const s=b(),c=s.firstChild,r=c.firstChild;return a(s,n(j,{get when(){return t.showIcon},get children(){return n(g,{get name(){return o()},size:"24px",class:"s-alert__prefix"})}}),c),a(c,n(j,{get when(){return t.title},get children(){const p=v();return a(p,()=>t.title),p}}),r),a(r,()=>t.description),a(s,n(j,{get when(){return t.action},get children(){return t.action}}),null),w(p=>{const d=`s-alert s-alert--${t.type} ${t.class}`.replace(/\s{2,}/g," ").trim(),m=t.style;return d!==p._v$&&x(s,p._v$=d),p._v$2=q(s,m,p._v$2),p},{_v$:void 0,_v$2:void 0}),s})()},l=C,I=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SAlert</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;information text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,D=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SAlert</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;information text&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;success text&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;warn text&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;error text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,B=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SAlert</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span> <span class="hljs-attr">showIcon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;notice title&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;information text, describe something you need&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span> <span class="hljs-attr">showIcon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;success title&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;success text,describe something you need&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span> <span class="hljs-attr">showIcon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;warn title&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;warn text, describe something you need&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span> <span class="hljs-attr">showIcon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;error title&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;error text, describe something you need&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,z=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SAlert</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span>
        <span class="hljs-attr">showIcon</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;system info&quot;</span>
        <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;system info, describe something you need&quot;</span>
        <span class="hljs-attr">action</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;close-line&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;gray&quot;</span> /&gt;</span>}
      /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span>
        <span class="hljs-attr">showIcon</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;success title&quot;</span>
        <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;success text, describe something you need&quot;</span>
        <span class="hljs-attr">action</span>=<span class="hljs-string">{</span>
          &lt;<span class="hljs-attr">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>
            Done
          <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
        }
      /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,E=e("<div flex items-center justify-between><h3>SAlert</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),M=e("<p text-sub>depend on "),N=e("<h4>basic"),P=e("<h4>type"),u=e('<div class="children:mb-3">'),L=e("<h4>with icon"),R=e("<h4>custom action");function H(){const h=[{name:"index.tsx",path:"components/SAlert/index.tsx"},{name:"index.scss",path:"components/SAlert/index.scss"}],[t,o]=f(!1);return[(()=>{const s=E(),c=s.firstChild,r=c.nextSibling,p=r.firstChild;return p.$$click=()=>o(!0),a(r,n($,{path:"SAlert",name:"source"}),null),s})(),(()=>{const s=M();return s.firstChild,a(s,n(_,{class:"text-blue-600",href:"/components/icon",children:"SIcon"}),null),s})(),N(),n(l,{type:"info",description:"information text"}),n(i,{content:I}),P(),(()=>{const s=u();return a(s,n(l,{type:"info",description:"information text"}),null),a(s,n(l,{type:"success",description:"success text"}),null),a(s,n(l,{type:"warn",description:"warn text"}),null),a(s,n(l,{type:"error",description:"error text"}),null),s})(),n(i,{content:D}),L(),(()=>{const s=u();return a(s,n(l,{showIcon:!0,type:"info",title:"notice title",description:"information text, describe something you need"}),null),a(s,n(l,{showIcon:!0,type:"success",title:"success title",description:"success text,describe something you need"}),null),a(s,n(l,{showIcon:!0,type:"warn",title:"warn title",description:"warn text, describe something you need"}),null),a(s,n(l,{showIcon:!0,type:"error",title:"error title",description:"error text, describe something you need"}),null),s})(),n(i,{content:B}),R(),(()=>{const s=u();return a(s,n(l,{showIcon:!0,title:"system info",description:"system info, describe something you need",get action(){return n(g,{name:"close-line",color:"gray"})}}),null),a(s,n(l,{showIcon:!0,type:"success",title:"success title",description:"success text, describe something you need",get action(){return n(S,{type:"success",size:"tiny",outline:!0,children:"Done"})}}),null),s})(),n(i,{content:z}),n(A,{get show(){return t()},tabs:h,onCancel:()=>o(!1)})]}k(["click"]);export{H as default};
