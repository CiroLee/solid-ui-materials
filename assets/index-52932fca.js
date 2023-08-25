import{m as i,i as l,c as n,F as j,S as g,a as x,b as m,s as u,t as c,d as y,e as k}from"./index-bf3dde8f.js";import{S as b,C as w,a as _}from"./index-41233d97.js";const d=c('<span class="s-kbd__item">'),f=c("<div>"),$={command:"⌘",shift:"⇧",ctrl:"⌃",option:"⌥",enter:"⏎",delete:"⌦",escape:"⎋",tab:"⇥",capslock:"⇪",up:"↑",right:"→",down:"↓",left:"←",pageup:"⇞",pagedown:"⇟",home:"⇱",end:"⇲",help:"?",space:"␣"},K=t=>{const p=i({class:"",style:{}},t),h=()=>{if(!(!t.keys||!t.keys.length))return t.keys.map(s=>$[s]||"")};return(()=>{const s=f();return l(s,n(j,{get each(){return h()},children:a=>(()=>{const e=d();return l(e,a),e})()}),null),l(s,n(g,{get when(){return t.children},get children(){const a=d();return l(a,()=>p.children),a}}),null),x(a=>{const e=`s-kbd ${p.class}`.replace(/\s{2,}/g," ").trim(),o=p.style;return e!==a._v$&&m(s,a._v$=e),a._v$2=u(s,o,a._v$2),a},{_v$:void 0,_v$2:void 0}),s})()},r=K,v=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Kbd</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;children:mr-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Kbd</span> <span class="hljs-attr">keys</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">command</span>&#x27;]}&gt;</span>K<span class="hljs-tag">&lt;/<span class="hljs-name">Kbd</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Kbd</span> <span class="hljs-attr">keys</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">command</span>&#x27;, &#x27;<span class="hljs-attr">option</span>&#x27;]}&gt;</span>N<span class="hljs-tag">&lt;/<span class="hljs-name">Kbd</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Kbd</span> <span class="hljs-attr">keys</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">space</span>&#x27;]} /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Kbd</span>&gt;</span>Space<span class="hljs-tag">&lt;/<span class="hljs-name">Kbd</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
<pre class="hljs"><code><span class="hljs-comment">// keys</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> <span class="hljs-title class_">KbdKey</span> =
  | <span class="hljs-string">&#x27;command&#x27;</span>
  | <span class="hljs-string">&#x27;shift&#x27;</span>
  | <span class="hljs-string">&#x27;ctrl&#x27;</span>
  | <span class="hljs-string">&#x27;option&#x27;</span>
  | <span class="hljs-string">&#x27;enter&#x27;</span>
  | <span class="hljs-string">&#x27;delete&#x27;</span>
  | <span class="hljs-string">&#x27;escape&#x27;</span>
  | <span class="hljs-string">&#x27;tab&#x27;</span>
  | <span class="hljs-string">&#x27;capslock&#x27;</span>
  | <span class="hljs-string">&#x27;up&#x27;</span>
  | <span class="hljs-string">&#x27;right&#x27;</span>
  | <span class="hljs-string">&#x27;down&#x27;</span>
  | <span class="hljs-string">&#x27;left&#x27;</span>
  | <span class="hljs-string">&#x27;pageup&#x27;</span>
  | <span class="hljs-string">&#x27;pagedown&#x27;</span>
  | <span class="hljs-string">&#x27;home&#x27;</span>
  | <span class="hljs-string">&#x27;end&#x27;</span>
  | <span class="hljs-string">&#x27;help&#x27;</span>
  | <span class="hljs-string">&#x27;space&#x27;</span>;
</code></pre>
`,C=c("<div flex items-center justify-between><h3>Kbd</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),S=c("<h4>usage"),D=c('<div class="children:mr-2">');function A(){const[t,p]=y(!1),h=[{name:"index.tsx",path:"components/Kbd/index.tsx"},{name:"index.scss",path:"components/Kbd/index.scss"}];return[(()=>{const s=C(),a=s.firstChild,e=a.nextSibling,o=e.firstChild;return o.$$click=()=>p(!0),l(e,n(b,{path:"Kbd",name:"source"}),null),s})(),S(),(()=>{const s=D();return l(s,n(r,{keys:["command"],children:"K"}),null),l(s,n(r,{keys:["command","option"],children:"N"}),null),l(s,n(r,{keys:["space"]}),null),l(s,n(r,{children:"Space"}),null),s})(),n(w,{content:v}),n(_,{get show(){return t()},tabs:h,onCancel:()=>p(!1)})]}k(["click"]);export{A as default};
