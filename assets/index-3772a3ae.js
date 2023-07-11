import{e as L,b as h,g as x,o as E,d as $,i as d,c as p,a as y,h as R,t as b,u as S,j as A,F as H,S as T,s as j}from"./index-fbb4efcb.js";const D=b('<div class="popup"><div class="popup__mask"></div><div>'),F=t=>{let e,n;const[r,s]=h(!1),[c,C]=h(!1),[_,g]=h(!0),k=()=>{t.maskClosable&&(s(!1),t?.onCancel?.())};return x(()=>{t.show&&(C(!0),g(!1)),setTimeout(()=>{s(t.show)},0)}),x(()=>{t.show&&e&&e.addEventListener("transitionend",function(){!r()&&c()&&g(!0)})}),E(()=>{e&&e.removeEventListener("transitionend",function(){})}),$(R,{get when(){return t.show||!_()},get children(){const u=D(),o=u.firstChild,i=o.nextSibling;o.$$click=k;const f=e;typeof f=="function"?S(f,o):e=o;const v=n;return typeof v=="function"?S(v,i):n=i,d(i,()=>t.children),p(a=>{const w=!!r(),m=`popup__content ${t.placement||"center"}`,l=!!r();return w!==a._v$&&o.classList.toggle("show",a._v$=w),m!==a._v$2&&y(i,a._v$2=m),l!==a._v$3&&i.classList.toggle("show",a._v$3=l),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),u}})};L(["click"]);const O=t=>navigator.clipboard.writeText(t);var P=t=>{let e=new URLSearchParams;for(let[n,r]of Object.entries(t))e.append(n,r);return e.toString()};async function V(t,e={}){const n=e?.method;let r="",s="";n?.toLowerCase()==="get"&&e.params&&(r="?"+P(e.params)),s=JSON.stringify(e.body);const c=await fetch(t+r,{...e,body:s});return c.status<400?c.json():Promise.reject({status:c.status,msg:c.statusText})}const z=async t=>await V(`https://api.github.com/repos/CiroLee/solid-ui-materials/contents/src/${t}`),I=b('<div flex flex-col w-440px h-full bg-white p-12px overflow-hidden box-border><div flex></div><div flex-1 bg-red mt-3 overflow-auto p-12px rounded-1 relative bg="#2a272b" text-white><div absolute top-2 right-2 text-gray-3 p-4px rounded-1 cursor-pointer transition-all class="hover:bg-gray/40"></div><pre><code>'),K=b("<div inline-flex items-center h-44px px-16px cursor-default border-solid box-border>"),N=t=>{let e=0;const[n,r]=h(""),[s,c]=h(""),[C,_]=h(!1),g=async()=>{const o=[];for(const i of t.tabs){const f=await z(i.path);o.push({...i,code:f.content})}return o},k=o=>{O(o).then(()=>{clearTimeout(e),_(!0),e=window.setTimeout(()=>{_(!1)},500)})},[u]=A(g);return x(()=>{r(u()?.[0].name||"")}),x(()=>{c(window.atob(u()?.find(o=>o.name===n())?.code||""))}),$(F,{get show(){return t.show},maskClosable:!0,placement:"right",get onCancel(){return t.onCancel},get children(){const o=I(),i=o.firstChild,f=i.nextSibling,v=f.firstChild,a=v.nextSibling,w=a.firstChild;return d(i,$(H,{get each(){return u()},children:m=>(()=>{const l=K();return l.$$click=()=>r(m.name),d(l,()=>m.name),p(()=>y(l,`${n()===m.name?"text-black border-0 border-b-2px border-black":"text-gray border-0"} transition-all hover:text-black`)),l})()})),v.$$click=()=>k(s()),d(v,$(T,{get name(){return C()?"check-line":"clipboard-line"},size:"18px"})),d(w,s),o}})},Q=N;L(["click"]);const q=b('<a decoration-none text-gray relative hover:text-blue-600 target="_blank"><span>'),G=t=>(()=>{const e=q(),n=e.firstChild;return d(n,()=>t.name||"Source"),d(e,$(T,{name:"external-link-line"}),null),p(()=>j(e,"href",`https://github.com/CiroLee/solid-ui-materials/tree/main/src/components/${t.path}`)),e})(),W=G,J={"code-view":"code-view-module_code-view_3AF4z"};const M=b("<div>"),U=t=>(()=>{const e=M();return p(n=>{const r=J["code-view"],s=t.content;return r!==n._v$&&y(e,n._v$=r),s!==n._v$2&&(e.innerHTML=n._v$2=s),n},{_v$:void 0,_v$2:void 0}),e})(),X=U;export{X as C,W as S,Q as a};