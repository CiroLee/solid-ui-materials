import{m as M,d as w,k as f,f as O,i as p,c as l,g as W,F as x,a as S,b as H,e as b,t as i,S as C}from"./index-8534f600.js";import{S as z}from"./index-ad9584db.js";import{S as F,C as v,a as P,b as D}from"./index-7932b7f6.js";class I{constructor(s){this.config=s}grid=42;generate(){const{month:s,year:t,startWeekOnSunday:u}=this.config,d=this.getFirstDayOfMonth(s,t),o=this.getDaysInMonth(s,t),m=u?d.getDay():(d.getDay()+6)%7,j=[];for(let g=0;g<this.grid;g++)j.push(new Date(t,s-1,1+(g-m)));return{list:j,total:o}}getFirstDayOfMonth(s,t){return new Date(t,s-1,1)}getDaysInMonth(s,t){return new Date(t,s,0).getDate()}}const L=i('<div><div class="s-calendar__week-bar"></div><div class="s-calendar__body">'),A=i("<li>"),B=i('<li class="s-calendar__body-item"><span>'),N=["日","一","二","三","四","五","六"],Y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],E=r=>{const s=M({value:new Date,startWeekOnSunday:!0,language:"zh",class:"",style:{}},r),[t,u]=w(new Date),d=a=>{u(a),r.onChange?.(a)},o=a=>{const n=new Date(a.getFullYear(),a.getMonth(),a.getDate()),e=new Date(t().getFullYear(),t().getMonth(),t().getDate());return n.getTime()===e.getTime()},m=a=>a.getMonth()===s.value.getMonth()&&a.getFullYear()===s.value.getFullYear(),j=f(()=>{let a=s.language==="zh"?N:Y;if(!s.startWeekOnSunday){const n=[...a],e=n.shift();a=n.concat(e)}return a});O(()=>{u(s.value)});const g=f(()=>new I({month:s.value.getMonth()+1,year:s.value.getFullYear(),startWeekOnSunday:s.startWeekOnSunday}).generate());return(()=>{const a=L(),n=a.firstChild,e=n.nextSibling;return p(a,l(W,{get when(){return s.header},get children(){return s.header}}),n),p(n,l(x,{get each(){return j()},children:h=>(()=>{const c=A();return p(c,h),c})()})),p(e,l(x,{get each(){return g().list},children:h=>(()=>{const c=B(),q=c.firstChild;return c.$$click=()=>d(h),p(q,()=>h.getDate()),S(y=>{const _=!m(h),k=!!o(h);return _!==y._v$&&c.classList.toggle("not-current-month",y._v$=_),k!==y._v$2&&c.classList.toggle("active",y._v$2=k),y},{_v$:void 0,_v$2:void 0}),c})()})),S(()=>H(a,`s-calendar ${s.class}`.replace(/\s{2,}/g," ").trim())),a})()},$=E;b(["click"]);const T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SCalendar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [date, setDate] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>());
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>date: {date1().toLocaleDateString()}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SCalendar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;max-w-80%&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{date()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setDate}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
`,R=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SCalendar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SSwitch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SIcon</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">SButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
<span class="hljs-keyword">interface</span> <span class="hljs-title class_">CustomHeaderProps</span> {
  <span class="hljs-attr">value</span>: <span class="hljs-title class_">Date</span>;
  <span class="hljs-attr">onPrevChange</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">onNextChange</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
}
<span class="hljs-keyword">const</span> <span class="hljs-title class_">CustomCalendarHeader</span>: <span class="hljs-title class_">Component</span>&lt;<span class="hljs-title class_">CustomHeaderProps</span>&gt; = <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-header&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{props.onPrevChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow-left-s-line&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-header__date&quot;</span>&gt;</span>{props.value.toLocaleDateString()}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{props.onNextChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow-right-s-line&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">const</span> <span class="hljs-title class_">App</span>: <span class="hljs-title class_">Component</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [date, setDate] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">&#x27;2023/7/1&#x27;</span>));
  <span class="hljs-keyword">const</span> [startWeekOnSunday, setStartWeekOnSunday] = <span class="hljs-title function_">createSignal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">dateChangeHandler</span> = (<span class="hljs-params"><span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;prev&#x27;</span> | <span class="hljs-string">&#x27;next&#x27;</span></span>) =&gt; {
    <span class="hljs-keyword">const</span> newDate = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-title function_">date2</span>());
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;prev&#x27;</span>) {
      newDate.<span class="hljs-title function_">setMonth</span>(<span class="hljs-title function_">date</span>().<span class="hljs-title function_">getMonth</span>() - <span class="hljs-number">1</span>);
    } <span class="hljs-keyword">else</span> {
      newDate.<span class="hljs-title function_">setMonth</span>(<span class="hljs-title function_">date</span>().<span class="hljs-title function_">getMonth</span>() + <span class="hljs-number">1</span>);
    }
    <span class="hljs-title function_">setDate</span>(newDate);
  };
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SSwitch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{startWeekOnSunday()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setStartWeekOnSunday}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>startWeekOnSunday: {startWeekOnSunday() ? &#x27;true&#x27; : &#x27;false&#x27;}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SCalendar</span>
        <span class="hljs-attr">startWeekOnSunday</span>=<span class="hljs-string">{startWeekOnSunday()}</span>
        <span class="hljs-attr">language</span>=<span class="hljs-string">&quot;en&quot;</span>
        <span class="hljs-attr">header</span>=<span class="hljs-string">{</span>
          &lt;<span class="hljs-attr">CustomCalendarHeader</span>
            <span class="hljs-attr">onPrevChange</span>=<span class="hljs-string">{()</span> =&gt;</span> dateChangeHandler(&#x27;prev&#x27;)}
            onNextChange={() =&gt; dateChangeHandler(&#x27;next&#x27;)}
            value={date()}
          /&gt;
        }
        value={date()}
        onChange={setDate}
      /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;
</code></pre>
<pre class="hljs"><code><span class="hljs-comment">// custom-header.scss</span>
<span class="hljs-selector-class">.custom-header</span> {
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: flex-end;
  <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#eaeaea</span>;
  &amp;__date {
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;
  }
}
</code></pre>
`;const V=i('<div class="custom-header"><span class="custom-header__date">'),Z=i("<div flex items-center justify-between><h3>SCalendar</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),G=i("<h4>basic"),J=i("<p>date: "),K=i("<h4>custom header"),Q=i('<div class="flex items-center mb-4"><span ml-3>startWeekOnSunday: '),U=r=>(()=>{const s=V(),t=s.firstChild;return p(s,l(D,{outline:!0,shape:"square",size:"tiny",type:"primary",get onClick(){return r.onPrevChange},get children(){return l(C,{name:"arrow-left-s-line",size:"20px"})}}),t),p(t,()=>r.value.toLocaleDateString()),p(s,l(D,{outline:!0,shape:"square",size:"tiny",type:"primary",get onClick(){return r.onNextChange},get children(){return l(C,{name:"arrow-right-s-line",size:"20px"})}}),null),s})();function ns(){const r=[{name:"index.tsx",path:"components/SCalendar/index.tsx"},{name:"calendar.ts",path:"components/SCalendar/calendar.ts"},{name:"index.scss",path:"components/SCalendar/index.scss"}],[s,t]=w(!1),[u,d]=w(new Date),[o,m]=w(new Date("2023/7/1")),[j,g]=w(!0),a=n=>{const e=new Date(o());n==="prev"?e.setMonth(o().getMonth()-1):e.setMonth(o().getMonth()+1),m(e)};return[(()=>{const n=Z(),e=n.firstChild,h=e.nextSibling,c=h.firstChild;return c.$$click=()=>t(!0),p(h,l(F,{path:"SAlert",name:"source"}),null),n})(),G(),(()=>{const n=J();return n.firstChild,p(n,()=>u().toLocaleDateString(),null),n})(),l($,{class:"max-w-80%",get value(){return u()},onChange:d}),l(v,{content:T}),K(),(()=>{const n=Q(),e=n.firstChild;return e.firstChild,p(n,l(z,{get checked(){return j()},onChange:g}),e),p(e,()=>j()?"true":"false",null),n})(),l($,{class:"max-w-80%",get startWeekOnSunday(){return j()},language:"en",get header(){return l(U,{onPrevChange:()=>a("prev"),onNextChange:()=>a("next"),get value(){return o()}})},get value(){return o()},onChange:m}),l(v,{content:R}),l(P,{get show(){return s()},tabs:r,onCancel:()=>t(!1)})]}b(["click"]);export{ns as default};
