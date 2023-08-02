import{d as g,f as p,o as A,c as _,i as f,a as C,b as y,g as H,e as L,t as b,u as S,l as z,F as P,S as R,j,m as B,s as D,n as F}from"./index-f5b7717e.js";const I=b('<div class="s-popup"><div class="s-popup__mask"></div><div>'),M=t=>{let e,r;const[n,s]=g(!1),[i,c]=g(!1),[d,$]=g(!0),o=()=>{t.maskClosable&&(s(!1),t?.onCancel?.())},u=()=>{!n()&&i()&&$(!0)};return p(()=>{t.show&&(c(!0),$(!1)),setTimeout(()=>{s(t.show)},0)}),p(()=>{t.show&&e&&e.addEventListener("transitionend",u)}),A(()=>{e&&e.removeEventListener("transitionend",u)}),_(H,{get when(){return t.show||!d()},get children(){const a=I(),l=a.firstChild,m=l.nextSibling;l.$$click=o;const x=e;typeof x=="function"?S(x,l):e=l;const k=r;return typeof k=="function"?S(k,m):r=m,f(m,()=>t.children),C(v=>{const w=!!n(),h=!!t.isBlur,T=`s-popup__content ${t.placement||"center"}`,E=!!n();return w!==v._v$&&l.classList.toggle("show",v._v$=w),h!==v._v$2&&l.classList.toggle("s-popup__mask--blur",v._v$2=h),T!==v._v$3&&y(m,v._v$3=T),E!==v._v$4&&m.classList.toggle("show",v._v$4=E),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),a}})},O=M;L(["click"]);const V=t=>navigator.clipboard.writeText(t);var G=t=>{let e=new URLSearchParams;for(let[r,n]of Object.entries(t))e.append(r,n);return e.toString()};async function K(t,e={}){const r=e?.method;let n="",s="";r?.toLowerCase()==="get"&&e.params&&(n="?"+G(e.params)),s=JSON.stringify(e.body);const i=await fetch(t+n,{...e,body:s});return i.status<400?i.json():Promise.reject({status:i.status,msg:i.statusText})}const N=async t=>await K(`https://api.github.com/repos/CiroLee/solid-ui-materials/contents/src/${t}`),q=b('<div flex flex-col w-440px h-full bg-white p-12px overflow-hidden box-border><div flex></div><div flex-1 bg-red mt-3 overflow-auto p-12px rounded-1 relative bg="#2a272b" text-white><div absolute top-2 right-2 text-gray-3 p-4px rounded-1 cursor-pointer transition-all class="hover:bg-gray/40"></div><pre><code>'),J=b("<div inline-flex items-center h-44px px-16px cursor-default border-solid box-border>"),U=t=>{let e=0;const[r,n]=g(""),[s,i]=g(""),[c,d]=g(!1),$=async()=>{const a=[];for(const l of t.tabs){const m=await N(l.path);a.push({...l,code:m.content})}return a},o=a=>{V(a).then(()=>{clearTimeout(e),d(!0),e=window.setTimeout(()=>{d(!1)},500)})},[u]=z($);return p(()=>{n(u()?.[0].name||"")}),p(()=>{i(window.atob(u()?.find(a=>a.name===r())?.code||""))}),_(O,{get show(){return t.show},maskClosable:!0,placement:"right",get onCancel(){return t.onCancel},get children(){const a=q(),l=a.firstChild,m=l.nextSibling,x=m.firstChild,k=x.nextSibling,v=k.firstChild;return f(l,_(P,{get each(){return u()},children:w=>(()=>{const h=J();return h.$$click=()=>n(w.name),f(h,()=>w.name),C(()=>y(h,`${r()===w.name?"text-black border-0 border-b-2px border-black":"text-gray border-0"} transition-all hover:text-black`)),h})()})),x.$$click=()=>o(s()),f(x,_(R,{get name(){return c()?"check-line":"clipboard-line"},size:"18px"})),f(v,s),a}})},re=U;L(["click"]);const X=b('<a decoration-none text-gray relative hover:text-blue-600 target="_blank"><span>'),Q=t=>(()=>{const e=X(),r=e.firstChild;return f(r,()=>t.name||"Source"),f(e,_(R,{name:"external-link-line"}),null),C(()=>j(e,"href",`https://github.com/CiroLee/solid-ui-materials/tree/main/src/components/${t.path}`)),e})(),ae=Q;const W=b('<button tabindex="0">'),Y=t=>{const e=B({size:"medium",type:"primary",shape:"default",class:"",style:{}},t),r=()=>{t.onClick&&t.onClick()};return(()=>{const n=W();return n.$$click=r,f(n,()=>t.children),C(s=>{const i=t.disabled,c=`s-button s-button--${e.size} s-button--${e.type}
       s-button--shape-${e.shape}
       ${e.class}`.replace(/\s{2,}/g," ").trim(),d=!!e.loading,$=!!e.block,o=!!e.outline,u=e.style;return i!==s._v$&&(n.disabled=s._v$=i),c!==s._v$2&&y(n,s._v$2=c),d!==s._v$3&&n.classList.toggle("s-button--loading",s._v$3=d),$!==s._v$4&&n.classList.toggle("s-button--block",s._v$4=$),o!==s._v$5&&n.classList.toggle("s-button--outline",s._v$5=o),s._v$6=D(n,u,s._v$6),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})()},Z=Y;L(["click"]);const ee={"code-view":"code-view-module_code-view_3AF4z"};const te=b("<div absolute bottom-0 flex flex-center w-full h-60px bg-gradient-to-b from-transparent to-gray-800>"),ne=b('<div relative box-border my-12px class="max-w-76% rounded-6px overflow-hidden"><div>'),se=400,oe=t=>{const[e,r]=g(!1),[n,s]=g(!1);let i;return F(()=>{if(i){const{height:c}=i.getBoundingClientRect();c>se&&r(!0)}}),(()=>{const c=ne(),d=c.firstChild,$=i;return typeof $=="function"?S($,d):i=d,f(c,_(H,{get when(){return e()},get children(){const o=te();return f(o,_(Z,{class:"",size:"tiny",onClick:()=>s(!n()),get children(){return n()?"collapse":"expand"}})),o}}),null),C(o=>{const u=!!(e()&&!n()),a=ee["code-view"],l=t.content;return u!==o._v$&&c.classList.toggle("max-h-200px",o._v$=u),a!==o._v$2&&y(d,o._v$2=a),l!==o._v$3&&(d.innerHTML=o._v$3=l),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),c})()},le=oe;export{le as C,ae as S,re as a,Z as b,O as c};
