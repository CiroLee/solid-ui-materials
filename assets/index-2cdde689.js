import{d as c,i as n,c as a,a as b,b as y,t as e,e as w}from"./index-8df57e38.js";import{S,C as k,b as B,a as C}from"./index-942dd8bc.js";import{S as _}from"./index-09dc08ff.js";import{S as t}from"./index-dab31a82.js";const P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SPopup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SSwitch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [placement, setPlacement] = createSignal&lt;<span class="hljs-title class_">Placement</span>&gt;(<span class="hljs-string">&#x27;left&#x27;</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">openPopupBox</span> = (<span class="hljs-params">placement: Placement</span>) =&gt; {
    <span class="hljs-title function_">setShow</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-title function_">setPlacement</span>(placement);
  };
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SSwitch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{isBlur()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setIsBlur}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>isBlur: {isBlur() ? &#x27;true&#x27; : &#x27;false&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
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
        <span class="hljs-tag">&lt;<span class="hljs-name">SPopup</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{show()}</span> <span class="hljs-attr">maskClosable</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">{placement()}</span> <span class="hljs-attr">isBlur</span>=<span class="hljs-string">{isBlur()}</span> <span class="hljs-attr">onCancel</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}&gt;
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">popup-box</span> <span class="hljs-attr">popup-box--</span>\${<span class="hljs-attr">placement</span>()}\`}&gt;</span>popup content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">SPopup</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
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
`;const $=e("<div flex items-center justify-between><h3>SPopup</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),v=e("<p text-sub text-14px>The popup component is the basis for other popup-like components for full-screen popups, such as Modal, Drawer, etc."),q=e("<div flex items-center mb-3><span ml-3>isBlur: "),D=e("<div children:mr-3>"),A=e("<div>popup content");function N(){const u=[{name:"index.tsx",path:"components/SPopup/index.tsx"},{name:"index.scss",path:"components/SPopup/index.scss"}],[m,o]=c(!1),[r,g]=c(!0),[d,h]=c(!1),[i,x]=c("left"),l=s=>{h(!0),x(s)};return[(()=>{const s=$(),p=s.firstChild,j=p.nextSibling,f=j.firstChild;return f.$$click=()=>o(!0),n(j,a(S,{path:"SPopup",name:"source"}),null),s})(),v(),(()=>{const s=q(),p=s.firstChild;return p.firstChild,n(s,a(_,{get checked(){return r()},onChange:g}),p),n(p,()=>r()?"true":"false",null),s})(),(()=>{const s=D();return n(s,a(t,{type:"primary",onClick:()=>l("left"),children:"left"}),null),n(s,a(t,{type:"primary",onClick:()=>l("right"),children:"right"}),null),n(s,a(t,{type:"primary",onClick:()=>l("top"),children:"top"}),null),n(s,a(t,{type:"primary",onClick:()=>l("bottom"),children:"bottom"}),null),n(s,a(t,{type:"primary",onClick:()=>l("center"),children:"center"}),null),s})(),a(k,{content:P}),a(B,{get show(){return d()},maskClosable:!0,get placement(){return i()},get isBlur(){return r()},onCancel:()=>h(!1),get children(){const s=A();return b(()=>y(s,`popup-box popup-box--${i()}`)),s}}),a(C,{get show(){return m()},tabs:u,onCancel:()=>o(!1)})]}w(["click"]);export{N as default};
