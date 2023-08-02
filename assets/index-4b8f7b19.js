import{m as y,i as n,c as a,S as g,g as j,a as w,b as x,s as q,t as e,d as f,A as _,e as k}from"./index-d1b8eddd.js";import{S as $}from"./index-8ee9ceac.js";import{S,C as i,a as A}from"./index-e868b470.js";const v=e('<div class="s-alert__title">'),b=e('<div><div class="s-alert__content"><div class="s-alert__description">'),C=h=>{const l=y({type:"info",class:"",style:{}},h),o=()=>({info:"information-fill",success:"checkbox-circle-fill",warn:"information-fill",error:"close-circle-fill"})[l.type];return(()=>{const s=b(),c=s.firstChild,r=c.firstChild;return n(s,a(j,{get when(){return l.showIcon},get children(){return a(g,{get name(){return o()},size:"24px",class:"s-alert__prefix"})}}),c),n(c,a(j,{get when(){return l.title},get children(){const t=v();return n(t,()=>l.title),t}}),r),n(r,()=>l.description),n(s,a(j,{get when(){return l.action},get children(){return l.action}}),null),w(t=>{const d=`s-alert s-alert--${l.type} ${l.class}`.replace(/\s{2,}/g," ").trim(),m=l.style;return d!==t._v$&&x(s,t._v$=d),t._v$2=q(s,m,t._v$2),t},{_v$:void 0,_v$2:void 0}),s})()},p=C,I=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
`,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
      <span class="hljs-tag">&lt;<span class="hljs-name">SAlert</span>
        <span class="hljs-attr">showIcon</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Error&quot;</span>
        <span class="hljs-attr">description</span>=<span class="hljs-string">{</span>
          &lt;<span class="hljs-attr">div</span>&gt;</span>
            custom error description, you have <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">color:</span> &#x27;<span class="hljs-attr">red</span>&#x27;, &#x27;<span class="hljs-attr">font-weight</span>&#x27;<span class="hljs-attr">:</span> &#x27;<span class="hljs-attr">bold</span>&#x27; }}&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> errors
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        }
      /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,z=e("<div flex items-center justify-between><h3>SAlert</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),E=e("<p text-sub>depend on "),M=e("<h4>basic"),N=e("<h4>type"),u=e('<div class="children:mb-3">'),L=e("<h4>with icon"),R=e("<h4>custom"),V=e("<div>custom error description, you have <span>4</span> errors");function J(){const h=[{name:"index.tsx",path:"components/SAlert/index.tsx"},{name:"index.scss",path:"components/SAlert/index.scss"}],[l,o]=f(!1);return[(()=>{const s=z(),c=s.firstChild,r=c.nextSibling,t=r.firstChild;return t.$$click=()=>o(!0),n(r,a(S,{path:"SAlert",name:"source"}),null),s})(),(()=>{const s=E();return s.firstChild,n(s,a(_,{class:"text-blue-600",href:"/components/icon",children:"SIcon"}),null),s})(),M(),a(p,{type:"info",description:"information text"}),a(i,{content:I}),N(),(()=>{const s=u();return n(s,a(p,{type:"info",description:"information text"}),null),n(s,a(p,{type:"success",description:"success text"}),null),n(s,a(p,{type:"warn",description:"warn text"}),null),n(s,a(p,{type:"error",description:"error text"}),null),s})(),a(i,{content:D}),L(),(()=>{const s=u();return n(s,a(p,{showIcon:!0,type:"info",title:"notice title",description:"information text, describe something you need"}),null),n(s,a(p,{showIcon:!0,type:"success",title:"success title",description:"success text,describe something you need"}),null),n(s,a(p,{showIcon:!0,type:"warn",title:"warn title",description:"warn text, describe something you need"}),null),n(s,a(p,{showIcon:!0,type:"error",title:"error title",description:"error text, describe something you need"}),null),s})(),a(i,{content:B}),R(),(()=>{const s=u();return n(s,a(p,{showIcon:!0,title:"custom action icon",description:"system info, describe something you need",get action(){return a(g,{name:"close-line",color:"gray"})}}),null),n(s,a(p,{showIcon:!0,type:"success",title:"custom action button",description:"success text, describe something you need",get action(){return a($,{type:"success",size:"tiny",outline:!0,children:"Done"})}}),null),n(s,a(p,{showIcon:!0,type:"error",title:"custom description",get description(){return(()=>{const c=V(),r=c.firstChild,t=r.nextSibling;return t.style.setProperty("color","red"),t.style.setProperty("font-weight","bold"),c})()}}),null),s})(),a(i,{content:P}),a(A,{get show(){return l()},tabs:h,onCancel:()=>o(!1)})]}k(["click"]);export{J as default};
