import{m as v,i as n,c as a,M as u,a as d,j as m,h as x,b as y,s as f,t as p,d as _,e as w}from"./index-8534f600.js";import{S as k,C as o,a as q}from"./index-7932b7f6.js";const A=p('<div class="s-avatar s-avatar__default">'),$=p('<img class="s-avatar__img">'),b=p('<div class="s-avatar__text">'),S=p("<div>");function C(){return A()}const z=i=>{const r=v({size:"medium",shape:"circle",class:"",alt:"img",style:{}},i);return(()=>{const h=S();return n(h,a(x,{get fallback(){return a(C,{})},get children(){return[a(u,{get when(){return r.src},get children(){const s=$();return d(t=>{const c=r.src,j=r.alt;return c!==t._v$&&m(s,"src",t._v$=c),j!==t._v$2&&m(s,"alt",t._v$2=j),t},{_v$:void 0,_v$2:void 0}),s}}),a(u,{get when(){return r.text},get children(){const s=b();return n(s,()=>r.text),s}})]}})),d(s=>{const t=`s-avatar s-avatar--${r.size} s-avatar--${r.shape} ${r.class}`.replace(/\s{2,}/g," ").trim(),c=r.style;return t!==s._v$3&&y(h,s._v$3=t),s._v$4=f(h,c,s._v$4),s},{_v$3:void 0,_v$4:void 0}),h})()},l=z,U=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SAvatar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SAvatar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,D=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SAvatar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;A&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;A&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;A&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">color:</span> &#x27;#<span class="hljs-attr">fff</span>&#x27;, &#x27;<span class="hljs-attr">background-color</span>&#x27;<span class="hljs-attr">:</span> &#x27;#<span class="hljs-attr">FF7817</span>&#x27; }} /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;A&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">color:</span> &#x27;#<span class="hljs-attr">fff</span>&#x27;, &#x27;<span class="hljs-attr">background-color</span>&#x27;<span class="hljs-attr">:</span> &#x27;#<span class="hljs-attr">42C421</span>&#x27; }} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,F=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SAvatar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;avatar-group&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;+3&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
<pre class="hljs"><code><span class="hljs-comment">// avatar-group.scss</span>
<span class="hljs-selector-class">.avatar-group</span> {
  <span class="hljs-selector-class">.s-avatar</span> {
    <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid <span class="hljs-number">#fff</span>;
    &amp;<span class="hljs-selector-pseudo">:not</span>(:first-child) {
      <span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">12px</span>;
    }
  }
}
</code></pre>
`,E=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SAvatar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;avatar-status online&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">width:</span> &#x27;<span class="hljs-attr">40px</span>&#x27;, <span class="hljs-attr">height:</span> &#x27;<span class="hljs-attr">40px</span>&#x27; }}&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dot dot--online&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;avatar-status offline&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">width:</span> &#x27;<span class="hljs-attr">40px</span>&#x27;, <span class="hljs-attr">height:</span> &#x27;<span class="hljs-attr">40px</span>&#x27; }}&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dot dot--online&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SAvatar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{avatarUrl}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
<pre class="hljs"><code><span class="hljs-comment">// avatar-status.scss</span>
<span class="hljs-selector-class">.avatar-status</span> {
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-selector-class">.dot</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">right</span>: <span class="hljs-number">2px</span>;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
  }
  &amp;<span class="hljs-selector-class">.online</span> <span class="hljs-selector-class">.dot</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#10c310</span>;
  }
  &amp;<span class="hljs-selector-class">.offline</span> {
    <span class="hljs-selector-tag">img</span> {
      <span class="hljs-attribute">filter</span>: <span class="hljs-built_in">grayscale</span>(<span class="hljs-number">100%</span>);
    }
    <span class="hljs-selector-class">.dot</span> {
      <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#b4b4b4</span>;
    }
  }
}
</code></pre>
`;const M=p("<div flex items-center justify-between><h3>SAvatar</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),L=p("<h4>size"),g=p('<div class="flex items-center children:mr-3">'),N=p("<h4>shape"),R=p("<h4>text avatar"),V=p("<h4>usage - avatar group"),B=p('<div class="avatar-group">'),G=p("<h4>usage- online/offline"),H=p('<div class="flex children:mr-3"><div class="avatar-status online"><div class="dot dot--online"></div></div><div class="avatar-status offline"><div class="dot dot--online">'),e="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200";function K(){const i=[{name:"index.tsx",path:"components/SAvatar/index.tsx"},{name:"index.scss",path:"components/SAvatar/index.scss"}],[r,h]=_(!1);return[(()=>{const s=M(),t=s.firstChild,c=t.nextSibling,j=c.firstChild;return j.$$click=()=>h(!0),n(c,a(k,{path:"SAvatar",name:"source"}),null),s})(),L(),(()=>{const s=g();return n(s,a(l,{size:"large"}),null),n(s,a(l,{size:"large",src:e}),null),n(s,a(l,{size:"medium",src:e}),null),n(s,a(l,{size:"small",src:e}),null),n(s,a(l,{size:"tiny",src:e}),null),s})(),a(o,{content:U}),N(),(()=>{const s=g();return n(s,a(l,{shape:"circle",src:e}),null),n(s,a(l,{shape:"square",src:e}),null),s})(),a(o,{content:P}),R(),(()=>{const s=g();return n(s,a(l,{size:"small",text:"A"}),null),n(s,a(l,{text:"A"}),null),n(s,a(l,{size:"large",text:"A",style:{color:"#fff","background-color":"#FF7817"}}),null),n(s,a(l,{size:"large",shape:"square",text:"A",style:{color:"#fff","background-color":"#42C421"}}),null),s})(),a(o,{content:D}),V(),(()=>{const s=B();return n(s,a(l,{src:e}),null),n(s,a(l,{src:e}),null),n(s,a(l,{src:e}),null),n(s,a(l,{text:"+3"}),null),s})(),a(o,{content:F}),G(),(()=>{const s=H(),t=s.firstChild;t.firstChild;const c=t.nextSibling;return c.firstChild,t.style.setProperty("width","40px"),t.style.setProperty("height","40px"),n(t,a(l,{shape:"circle",src:e}),null),c.style.setProperty("width","40px"),c.style.setProperty("height","40px"),n(c,a(l,{shape:"circle",src:e}),null),s})(),a(o,{content:E}),a(q,{get show(){return r()},tabs:i,onCancel:()=>h(!1)})]}w(["click"]);export{K as default};
