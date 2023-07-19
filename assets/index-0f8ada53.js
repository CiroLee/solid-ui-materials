import{m as _,i as n,c as t,S as h,g as a,a as y,b as $,s as g,t as i,A as x}from"./index-02899d5b.js";import{S as w}from"./index-43b5ab94.js";import{S as v}from"./index-1665d7ec.js";const b=i('<div class="s-alert__title">'),S=i('<div><div class="s-alert__content"><div class="s-alert__description">'),I=e=>{const r=_({type:"info",class:"",style:{}},e),c=()=>({info:"information-fill",success:"checkbox-circle-fill",warn:"information-fill",error:"close-circle-fill"})[r.type];return(()=>{const l=S(),u=l.firstChild,p=u.firstChild;return n(l,t(a,{get when(){return r.showIcon},get children(){return t(h,{get name(){return c()},size:"24px",class:"s-alert__prefix"})}}),u),n(u,t(a,{get when(){return r.title},get children(){const o=b();return n(o,()=>r.title),o}}),p),n(p,()=>r.description),n(l,t(a,{get when(){return r.action},get children(){return r.action}}),null),y(o=>{const m=`s-alert s-alert--${r.type} ${r.class}`.replace(/\s{2,}/g," ").trim(),f=r.style;return m!==o._v$&&$(l,o._v$=m),o._v$2=g(l,f,o._v$2),o},{_v$:void 0,_v$2:void 0}),l})()},s=I,A=i("<div flex items-center justify-between><h3>SAlert</h3><div><span hover:text-blue-600 text-gray cursor-pointer mr-4>code"),C=i("<p text-sub>depend on "),k=i("<h4>basic"),z=i("<h4>type"),d=i('<div class="children:mb-3">'),M=i("<h4>with icon"),N=i("<h4>custom action");function D(){return[(()=>{const e=A(),r=e.firstChild,c=r.nextSibling;return c.firstChild,n(c,t(w,{path:"SAvatar",name:"source"}),null),e})(),(()=>{const e=C();return e.firstChild,n(e,t(x,{class:"text-blue-600",href:"/components/icon",children:"SIcon"}),null),e})(),k(),t(s,{type:"info",description:"information text"}),z(),(()=>{const e=d();return n(e,t(s,{type:"info",description:"information text"}),null),n(e,t(s,{type:"success",description:"success text"}),null),n(e,t(s,{type:"warn",description:"warn text"}),null),n(e,t(s,{type:"error",description:"error text"}),null),e})(),M(),(()=>{const e=d();return n(e,t(s,{showIcon:!0,type:"info",title:"notice title",description:"information text, describe something you need"}),null),n(e,t(s,{showIcon:!0,type:"success",title:"success title",description:"success text,describe something you need"}),null),n(e,t(s,{showIcon:!0,type:"warn",title:"warn title",description:"warn text, describe something you need"}),null),n(e,t(s,{showIcon:!0,type:"error",title:"error title",description:"error text, describe something you need"}),null),e})(),N(),(()=>{const e=d();return n(e,t(s,{showIcon:!0,title:"system info",description:"system info, describe something you need",get action(){return t(h,{name:"close-line",color:"gray"})}}),null),n(e,t(s,{showIcon:!0,type:"success",title:"success title",description:"success text, describe something you need",get action(){return t(v,{type:"success",size:"tiny",outline:!0,children:"Done"})}}),null),e})()]}export{D as default};
