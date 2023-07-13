import{d as e,i as n,c as a,a as x,b,t,e as y}from"./index-0fdfb4b1.js";import{S as f,C as w,b as S,a as k}from"./index-09b91603.js";import{S as l}from"./index-41f471cc.js";const C=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SPopup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [placement, setPlacement] = createSignal&lt;<span class="hljs-title class_">Placement</span>&gt;(<span class="hljs-string">&#x27;left&#x27;</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">openPopupBox</span> = (<span class="hljs-params">placement: Placement</span>) =&gt; {
    <span class="hljs-title function_">setShow</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-title function_">setPlacement</span>(placement);
  };
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> openPopupBox(&#x27;left&#x27;)}&gt;
        left
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> openPopupBox(&#x27;right&#x27;)}&gt;
        right
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> openPopupBox(&#x27;top&#x27;)}&gt;
        top
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> openPopupBox(&#x27;bottom&#x27;)}&gt;
        bottom
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> openPopupBox(&#x27;center&#x27;)}&gt;
        center
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SPopup</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{show()}</span> <span class="hljs-attr">maskClosable</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">{placement()}</span> <span class="hljs-attr">isBlur</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">onCancel</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">popup-box</span> <span class="hljs-attr">popup-box--</span>\${<span class="hljs-attr">placement</span>()}\`}&gt;</span>popup content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">SPopup</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
<pre class="hljs"><code><span class="hljs-comment">// popup-box.scss</span>
<span class="hljs-selector-class">.popup-box</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
  &amp;<span class="hljs-attr">--left</span>,
  &amp;<span class="hljs-attr">--right</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">400px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  }
  &amp;<span class="hljs-attr">--top</span>,
  &amp;<span class="hljs-attr">--bottom</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
  }
  &amp;<span class="hljs-attr">--center</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">400px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  }
}
</code></pre>
`;const P=t("<div flex items-center justify-between><h3>SPopup</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),B=t("<p text-gray-400 text-14px>弹出组件是其他弹窗类组件的基础，用于全屏弹窗，如Modal, Drawer等"),_=t("<div children:mr-3>"),$=t("<div>popup content");function A(){const j=[{name:"tsx",path:"components/SPopup/index.tsx"},{name:"scss",path:"components/SPopup/index.scss"}],[i,c]=e(!1),[u,o]=e(!1),[r,m]=e("left"),p=s=>{o(!0),m(s)};return[(()=>{const s=P(),g=s.firstChild,h=g.nextSibling,d=h.firstChild;return d.$$click=()=>c(!0),n(h,a(f,{path:"SPopup",name:"source"}),null),s})(),B(),(()=>{const s=_();return n(s,a(l,{type:"primary",onClick:()=>p("left"),children:"left"}),null),n(s,a(l,{type:"primary",onClick:()=>p("right"),children:"right"}),null),n(s,a(l,{type:"primary",onClick:()=>p("top"),children:"top"}),null),n(s,a(l,{type:"primary",onClick:()=>p("bottom"),children:"bottom"}),null),n(s,a(l,{type:"primary",onClick:()=>p("center"),children:"center"}),null),s})(),a(w,{content:C}),a(S,{get show(){return u()},maskClosable:!0,get placement(){return r()},isBlur:!0,onCancel:()=>o(!1),get children(){const s=$();return x(()=>b(s,`popup-box popup-box--${r()}`)),s}}),a(k,{get show(){return i()},tabs:j,onCancel:()=>c(!1)})]}y(["click"]);export{A as default};
