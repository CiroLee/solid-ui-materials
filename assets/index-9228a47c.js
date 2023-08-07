import{m as M,d as w,k,f as O,i as p,c as l,g as W,F as _,a as S,b as H,e as q,t as i,S as C}from"./index-bda3e0fa.js";import{S as z}from"./index-9860ba00.js";import{S as F,C as v,a as P,b as D}from"./index-98e83d6a.js";class I{constructor(s){this.config=s}grid=42;generate(){const{month:s,year:t,startWeekOnSunday:g}=this.config,u=this.getFirstDayOfMonth(s,t),o=this.getDaysInMonth(s,t),m=g?u.getDay():(u.getDay()+6)%7,j=[];for(let d=0;d<this.grid;d++)j.push(new Date(t,s-1,1+(d-m)));return{list:j,total:o}}getFirstDayOfMonth(s,t){return new Date(t,s-1,1)}getDaysInMonth(s,t){return new Date(t,s,0).getDate()}}const L=i('<div><div class="s-calendar__week-bar"></div><div class="s-calendar__body">'),A=i("<li>"),B=i('<li class="s-calendar__body-item"><span>'),N=["日","一","二","三","四","五","六"],Y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],E=c=>{const s=M({value:new Date,startWeekOnSunday:!0,language:"zh",class:"",style:{}},c),[t,g]=w(new Date),u=a=>{g(a),c.onChange?.(a)},o=a=>{const n=new Date(a.getFullYear(),a.getMonth(),a.getDate()),e=new Date(t().getFullYear(),t().getMonth(),t().getDate());return n.getTime()===e.getTime()},m=a=>a.getMonth()===s.value.getMonth()&&a.getFullYear()===s.value.getFullYear(),j=k(()=>{let a=s.language==="zh"?N:Y;if(!s.startWeekOnSunday){const n=[...a],e=n.shift();a=n.concat(e)}return a});O(()=>{g(s.value)});const d=k(()=>new I({month:s.value.getMonth()+1,year:s.value.getFullYear(),startWeekOnSunday:s.startWeekOnSunday}).generate());return(()=>{const a=L(),n=a.firstChild,e=n.nextSibling;return p(a,l(W,{get when(){return s.header},get children(){return s.header}}),n),p(n,l(_,{get each(){return j()},children:h=>(()=>{const r=A();return p(r,h),r})()})),p(e,l(_,{get each(){return d().list},children:h=>(()=>{const r=B(),b=r.firstChild;return r.$$click=()=>u(h),p(b,()=>h.getDate()),S(y=>{const x=!m(h),f=!!o(h);return x!==y._v$&&r.classList.toggle("not-current-month",y._v$=x),f!==y._v$2&&r.classList.toggle("active",y._v$2=f),y},{_v$:void 0,_v$2:void 0}),r})()})),S(()=>H(a,`s-calendar ${s.class}`.replace(/\s{2,}/g," ").trim())),a})()},$=E;q(["click"]);const T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { <span class="hljs-keyword">type</span> <span class="hljs-title class_">Component</span>, createSignal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;solid-js&#x27;</span>;
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
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-12px flex justify-end pb-12px border-0 border-b-1px border-solid border-#eaeaea&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SButton</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{props.onPrevChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">SIcon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow-left-s-line&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">SButton</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mx-20px&quot;</span>&gt;</span>{props.value.toLocaleDateString()}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
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
`,V=i('<div class="mb-12px flex justify-end pb-12px border-0 border-b-1px border-solid border-#eaeaea"><span class="mx-20px">'),Z=i("<div flex items-center justify-between><h3>SCalendar</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),G=i("<h4>basic"),J=i("<p>date: "),K=i("<h4>custom header"),Q=i('<div class="flex items-center mb-4"><span ml-3>startWeekOnSunday: '),U=c=>(()=>{const s=V(),t=s.firstChild;return p(s,l(D,{outline:!0,shape:"square",size:"tiny",type:"primary",get onClick(){return c.onPrevChange},get children(){return l(C,{name:"arrow-left-s-line",size:"20px"})}}),t),p(t,()=>c.value.toLocaleDateString()),p(s,l(D,{outline:!0,shape:"square",size:"tiny",type:"primary",get onClick(){return c.onNextChange},get children(){return l(C,{name:"arrow-right-s-line",size:"20px"})}}),null),s})();function ns(){const c=[{name:"index.tsx",path:"components/SCalendar/index.tsx"},{name:"calendar.ts",path:"components/SCalendar/calendar.ts"},{name:"index.scss",path:"components/SCalendar/index.scss"}],[s,t]=w(!1),[g,u]=w(new Date),[o,m]=w(new Date("2023/7/1")),[j,d]=w(!0),a=n=>{const e=new Date(o());n==="prev"?e.setMonth(o().getMonth()-1):e.setMonth(o().getMonth()+1),m(e)};return[(()=>{const n=Z(),e=n.firstChild,h=e.nextSibling,r=h.firstChild;return r.$$click=()=>t(!0),p(h,l(F,{path:"SAlert",name:"source"}),null),n})(),G(),(()=>{const n=J();return n.firstChild,p(n,()=>g().toLocaleDateString(),null),n})(),l($,{class:"max-w-80%",get value(){return g()},onChange:u}),l(v,{content:T}),K(),(()=>{const n=Q(),e=n.firstChild;return e.firstChild,p(n,l(z,{get checked(){return j()},onChange:d}),e),p(e,()=>j()?"true":"false",null),n})(),l($,{class:"max-w-80%",get startWeekOnSunday(){return j()},language:"en",get header(){return l(U,{onPrevChange:()=>a("prev"),onNextChange:()=>a("next"),get value(){return o()}})},get value(){return o()},onChange:m}),l(v,{content:R}),l(P,{get show(){return s()},tabs:c,onCancel:()=>t(!1)})]}q(["click"]);export{ns as default};
