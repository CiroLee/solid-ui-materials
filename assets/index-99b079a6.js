import{m as y,i as n,c as a,I as g,S as j,a as w,b as x,s as q,t as e,d as f,A as _,e as k}from"./index-9094d4de.js";import{S as $,C as i,B as A,a as v}from"./index-e5aa23d8.js";const b=e('<div class="s-alert__title">'),C=e('<div><div class="s-alert__content"><div class="s-alert__description">'),I=h=>{const l=y({type:"info",class:"",style:{}},h),o=()=>({info:"information-fill",success:"checkbox-circle-fill",warn:"information-fill",error:"close-circle-fill"})[l.type];return(()=>{const s=C(),c=s.firstChild,r=c.firstChild;return n(s,a(j,{get when(){return l.showIcon},get children(){return a(g,{get name(){return o()},size:"24px",class:"s-alert__prefix"})}}),c),n(c,a(j,{get when(){return l.title},get children(){const t=b();return n(t,()=>l.title),t}}),r),n(r,()=>l.description),n(s,a(j,{get when(){return l.action},get children(){return l.action}}),null),w(t=>{const d=`s-alert s-alert--${l.type} ${l.class}`.replace(/\s{2,}/g," ").trim(),m=l.style;return d!==t._v$&&x(s,t._v$=d),t._v$2=q(s,m,t._v$2),t},{_v$:void 0,_v$2:void 0}),s})()},p=I,S=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Alert</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;information text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,B=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Alert</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;information text&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;success text&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;warn text&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;error text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,D=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Alert</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span> <span class="hljs-attr">showIcon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;notice title&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;information text, describe something you need&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span> <span class="hljs-attr">showIcon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;success title&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;success text,describe something you need&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span> <span class="hljs-attr">showIcon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;warn title&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;warn text, describe something you need&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span> <span class="hljs-attr">showIcon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;error title&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;error text, describe something you need&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Alert</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span>
        <span class="hljs-attr">showIcon</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;system info&quot;</span>
        <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;system info, describe something you need&quot;</span>
        <span class="hljs-attr">action</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;close-line&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;gray&quot;</span> /&gt;</span>}
      /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span>
        <span class="hljs-attr">showIcon</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;success title&quot;</span>
        <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;success text, describe something you need&quot;</span>
        <span class="hljs-attr">action</span>=<span class="hljs-string">{</span>
          &lt;<span class="hljs-attr">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>
            Done
          <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        }
      /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Alert</span>
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
`,z=e("<div flex items-center justify-between><h3>Alert</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),E=e("<p text-sub>depend on "),M=e("<h4>basic"),N=e("<h4>type"),u=e('<div class="children:mb-3">'),L=e("<h4>with icon"),R=e("<h4>custom"),V=e("<div>custom error description, you have <span>4</span> errors");function H(){const h=[{name:"index.tsx",path:"components/Alert/index.tsx"},{name:"index.scss",path:"components/Alert/index.scss"}],[l,o]=f(!1);return[(()=>{const s=z(),c=s.firstChild,r=c.nextSibling,t=r.firstChild;return t.$$click=()=>o(!0),n(r,a($,{path:"Alert",name:"source"}),null),s})(),(()=>{const s=E();return s.firstChild,n(s,a(_,{class:"text-blue-600",href:"/components/icon",children:"Icon"}),null),s})(),M(),a(p,{type:"info",description:"information text"}),a(i,{content:S}),N(),(()=>{const s=u();return n(s,a(p,{type:"info",description:"information text"}),null),n(s,a(p,{type:"success",description:"success text"}),null),n(s,a(p,{type:"warn",description:"warn text"}),null),n(s,a(p,{type:"error",description:"error text"}),null),s})(),a(i,{content:B}),L(),(()=>{const s=u();return n(s,a(p,{showIcon:!0,type:"info",title:"notice title",description:"information text, describe something you need"}),null),n(s,a(p,{showIcon:!0,type:"success",title:"success title",description:"success text,describe something you need"}),null),n(s,a(p,{showIcon:!0,type:"warn",title:"warn title",description:"warn text, describe something you need"}),null),n(s,a(p,{showIcon:!0,type:"error",title:"error title",description:"error text, describe something you need"}),null),s})(),a(i,{content:D}),R(),(()=>{const s=u();return n(s,a(p,{showIcon:!0,title:"custom action icon",description:"system info, describe something you need",get action(){return a(g,{name:"close-line",color:"gray"})}}),null),n(s,a(p,{showIcon:!0,type:"success",title:"custom action button",description:"success text, describe something you need",get action(){return a(A,{type:"success",size:"tiny",outline:!0,children:"Done"})}}),null),n(s,a(p,{showIcon:!0,type:"error",title:"custom description",get description(){return(()=>{const c=V(),r=c.firstChild,t=r.nextSibling;return t.style.setProperty("color","red"),t.style.setProperty("font-weight","bold"),c})()}}),null),s})(),a(i,{content:P}),a(v,{get show(){return l()},tabs:h,onCancel:()=>o(!1)})]}k(["click"]);export{H as default};
