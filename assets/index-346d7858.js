import{m as j,a as m,b as u,s as d,t as c,d as g,i as l,c as n,e as _}from"./index-82502e81.js";import{S as k,C as y,a as v}from"./index-b9c48bb1.js";const S=c("<div>"),f=h=>{const e=j({type:"flicker",class:"",style:{}},h);return(()=>{const t=S();return m(s=>{const a=`s-skeleton  s-skeleton--${e.type} ${e.class}`.replace(/\s{2,}/g," ").trim(),r=e.style;return a!==s._v$&&u(t,s._v$=a),s._v$2=d(t,r,s._v$2),s},{_v$:void 0,_v$2:void 0}),t})()},p=f,q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SSkeleton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [value, setValue] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-string">&#x27;&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>type: shimmer<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SSkeleton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;shimmer&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton__avatar&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton__content&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">SSkeleton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;shimmer&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton__item&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">SSkeleton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;shimmer&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton__item&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">width:</span> &#x27;<span class="hljs-attr">80</span>%&#x27; }} /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>type: flicker<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SSkeleton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flicker&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton__avatar&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton__content&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">SSkeleton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flicker&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton__item&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">SSkeleton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flicker&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-skeleton__item&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">width:</span> &#x27;<span class="hljs-attr">80</span>%&#x27; }} /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
<pre class="hljs"><code><span class="hljs-comment">// skeleton.scss</span>
<span class="hljs-selector-class">.card-skeleton</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
  <span class="hljs-attribute">display</span>: flex;
  &amp;__avatar {
    <span class="hljs-attr">--size</span>: <span class="hljs-number">40px</span>;

    <span class="hljs-attribute">width</span>: <span class="hljs-built_in">var</span>(--size);
    <span class="hljs-attribute">height</span>: <span class="hljs-built_in">var</span>(--size);
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
  }
  &amp;__content {
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">flex</span>: <span class="hljs-number">1</span>;
    &amp; &gt; <span class="hljs-selector-tag">div</span> {
      <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">10px</span>;
    }
  }
  &amp;__item {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">14px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  }
}
</code></pre>
`;const b=c("<div flex items-center justify-between><h3>SSkeleton</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),x=c("<h4>type: shimmer"),o=c('<div class="card-skeleton"><div class="card-skeleton__content">'),w=c("<h4>type: flicker");function z(){const h=[{name:"tsx",path:"components/SSkeleton/index.tsx"},{name:"scss",path:"components/SSkeleton/index.scss"}],[e,t]=g(!1);return[(()=>{const s=b(),a=s.firstChild,r=a.nextSibling,i=r.firstChild;return i.$$click=()=>t(!0),l(r,n(k,{path:"SSkeleton",name:"source"}),null),s})(),x(),(()=>{const s=o(),a=s.firstChild;return l(s,n(p,{type:"shimmer",class:"card-skeleton__avatar"}),a),l(a,n(p,{type:"shimmer",class:"card-skeleton__item"}),null),l(a,n(p,{type:"shimmer",class:"card-skeleton__item",style:{width:"80%"}}),null),s})(),w(),(()=>{const s=o(),a=s.firstChild;return l(s,n(p,{type:"flicker",class:"card-skeleton__avatar"}),a),l(a,n(p,{type:"flicker",class:"card-skeleton__item"}),null),l(a,n(p,{type:"flicker",class:"card-skeleton__item",style:{width:"80%"}}),null),s})(),n(y,{content:q}),n(v,{get show(){return e()},tabs:h,onCancel:()=>t(!1)})]}_(["click"]);export{z as default};
