import{e as L,b as m,f as x,o as E,d as $,i as d,c as p,a as y,g as R,t as b,u as S,h as A,F as H,S as T,s as F}from"./index-dfc76918.js";const j=b('<div class="popup"><div class="popup__mask"></div><div>'),D=t=>{let e,n;const[r,s]=m(!1),[c,C]=m(!1),[_,g]=m(!0),k=()=>{t.maskClosable&&(s(!1),t?.onCancel?.())};return x(()=>{t.show&&(C(!0),g(!1)),setTimeout(()=>{s(t.show)},0)}),x(()=>{t.show&&e&&e.addEventListener("transitionend",function(){!r()&&c()&&g(!0)})}),E(()=>{e&&e.removeEventListener("transitionend",function(){})}),$(R,{get when(){return t.show||!_()},get children(){const u=j(),o=u.firstChild,i=o.nextSibling;o.$$click=k;const f=e;typeof f=="function"?S(f,o):e=o;const v=n;return typeof v=="function"?S(v,i):n=i,d(i,()=>t.children),p(a=>{const w=!!r(),h=`popup__content ${t.placement||"center"}`,l=!!r();return w!==a._v$&&o.classList.toggle("show",a._v$=w),h!==a._v$2&&y(i,a._v$2=h),l!==a._v$3&&i.classList.toggle("show",a._v$3=l),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),u}})};L(["click"]);const P=t=>navigator.clipboard.writeText(t);var V=t=>{let e=new URLSearchParams;for(let[n,r]of Object.entries(t))e.append(n,r);return e.toString()};async function z(t,e={}){const n=e?.method;let r="",s="";n?.toLowerCase()==="get"&&e.params&&(r="?"+V(e.params)),s=JSON.stringify(e.body);const c=await fetch(t+r,{...e,body:s});return c.status<400?c.json():Promise.reject({status:c.status,msg:c.statusText})}const I=async t=>await z(`https://api.github.com/repos/CiroLee/solid-ui-materials/contents/src/${t}`),K=b('<div flex flex-col w-440px h-full bg-white p-12px overflow-hidden box-border><div flex></div><div flex-1 bg-red mt-3 overflow-auto p-12px rounded-1 relative bg="#2a272b" text-white><div absolute top-2 right-2 text-gray-3 p-4px rounded-1 cursor-pointer transition-all class="hover:bg-gray/40"></div><pre><code>'),N=b("<div inline-flex items-center h-44px px-16px cursor-default border-solid box-border>"),O=t=>{let e=0;const[n,r]=m(""),[s,c]=m(""),[C,_]=m(!1),g=async()=>{const o=[];for(const i of t.tabs){const f=await I(i.path);o.push({...i,code:f.content})}return o},k=o=>{P(o).then(()=>{clearTimeout(e),_(!0),e=window.setTimeout(()=>{_(!1)},500)})},[u]=A(g);return x(()=>{r(u()?.[0].name||"")}),x(()=>{c(window.atob(u()?.find(o=>o.name===n())?.code||""))}),$(D,{get show(){return t.show},maskClosable:!0,placement:"right",get onCancel(){return t.onCancel},get children(){const o=K(),i=o.firstChild,f=i.nextSibling,v=f.firstChild,a=v.nextSibling,w=a.firstChild;return d(i,$(H,{get each(){return u()},children:h=>(()=>{const l=N();return l.$$click=()=>r(h.name),d(l,()=>h.name),p(()=>y(l,`${n()===h.name?"text-black border-0 border-b-2px border-black":"text-gray border-0"} transition-all hover:text-black`)),l})()})),v.$$click=()=>k(s()),d(v,$(T,{get name(){return C()?"check-line":"clipboard-line"},size:"18px"})),d(w,s),o}})},Q=O;L(["click"]);const q=b('<a decoration-none text-gray relative hover:text-blue-600 target="_blank"><span>'),G=t=>(()=>{const e=q(),n=e.firstChild;return d(n,()=>t.name||"Source"),d(e,$(T,{name:"external-link-line"}),null),p(()=>F(e,"href",`https://github.com/CiroLee/solid-ui-materials/tree/main/src/components/${t.path}`)),e})(),W=G,J={"code-view":"code-view-module_code-view_3AF4z"};const M=b("<div>"),U=t=>(()=>{const e=M();return p(n=>{const r=J["code-view"],s=t.html;return r!==n._v$&&y(e,n._v$=r),s!==n._v$2&&(e.innerHTML=n._v$2=s),n},{_v$:void 0,_v$2:void 0}),e})(),X=U;export{X as C,W as S,Q as a};