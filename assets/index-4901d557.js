(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const _={context:void 0,registry:void 0};function Q(e){_.context=e}const at=(e,t)=>e===t,oe=Symbol("solid-proxy"),ut=Symbol("solid-track"),ie={equals:at};let Ue=We;const B=1,le=2,Ve={owned:null,cleanups:null,context:null,owner:null},ye={};var v=null;let pe=null,w=null,L=null,I=null,fe=0;function Z(e,t){const n=w,r=v,s=e.length===0,o=s?Ve:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},i=s?e:()=>e(()=>$(()=>he(o)));v=o,w=null;try{return j(i,!0)}finally{w=n,v=r}}function N(e,t){t=t?Object.assign({},ie,t):ie;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),He(n,s));return[Fe.bind(n),r]}function Re(e,t,n){const r=de(e,t,!0,B);X(r)}function T(e,t,n){const r=de(e,t,!1,B);X(r)}function Cn(e,t,n){Ue=wt;const r=de(e,t,!1,B);(!n||!n.render)&&(r.user=!0),I?I.push(r):X(r)}function x(e,t,n){n=n?Object.assign({},ie,n):ie;const r=de(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,X(r),Fe.bind(r)}function ft(e,t,n){let r,s,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,o=t||{}):(r=e,s=t,o=n||{});let i=null,l=ye,a=null,u=!1,c="initialValue"in o,f=typeof r=="function"&&x(r);const d=new Set,[m,b]=(o.storage||N)(o.initialValue),[y,O]=N(void 0),[k,S]=N(void 0,{equals:!1}),[A,P]=N(c?"ready":"unresolved");if(_.context){a=`${_.context.id}${_.context.count++}`;let h;o.ssrLoadFrom==="initial"?l=o.initialValue:_.load&&(h=_.load(a))&&(l=h[0])}function E(h,g,p,R){return i===h&&(i=null,R!==void 0&&(c=!0),(h===l||g===l)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(R,{value:g})),l=ye,K(g,p)),g}function K(h,g){j(()=>{g===void 0&&b(()=>h),P(g!==void 0?"errored":c?"ready":"unresolved"),O(g);for(const p of d.keys())p.decrement();d.clear()},!1)}function F(){const h=mt,g=m(),p=y();if(p!==void 0&&!i)throw p;return w&&!w.user&&h&&Re(()=>{k(),i&&(h.resolved||d.has(h)||(h.increment(),d.add(h)))}),g}function G(h=!0){if(h!==!1&&u)return;u=!1;const g=f?f():r;if(g==null||g===!1){E(i,$(m));return}const p=l!==ye?l:$(()=>s(g,{value:m(),refetching:h}));return typeof p!="object"||!(p&&"then"in p)?(E(i,p,void 0,g),p):(i=p,u=!0,queueMicrotask(()=>u=!1),j(()=>{P(c?"refreshing":"pending"),S()},!1),p.then(R=>E(p,R,void 0,g),R=>E(p,void 0,Xe(R),g)))}return Object.defineProperties(F,{state:{get:()=>A()},error:{get:()=>y()},loading:{get(){const h=A();return h==="pending"||h==="refreshing"}},latest:{get(){if(!c)return F();const h=y();if(h&&!i)throw h;return m()}}}),f?Re(()=>G(!1)):G(!1),[F,{refetch:G,mutate:b}]}function $(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function qe(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();if(o){o=!1;return}const a=$(()=>t(l,s,i));return s=l,a}}function Ee(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}function dt(){return v}function ht(e,t){const n=v,r=w;v=e,w=null;try{return j(t,!0)}catch(s){Ce(s)}finally{v=n,w=r}}function gt(e){const t=w,n=v;return Promise.resolve().then(()=>{w=t,v=n;let r;return j(e,!1),w=v=null,r?r.done:void 0})}function Ke(e,t){const n=Symbol("context");return{id:n,Provider:bt(n),defaultValue:e}}function Se(e){let t;return(t=Ge(v,e.id))!==void 0?t:e.defaultValue}function _e(e){const t=x(e),n=x(()=>ve(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let mt;function Fe(){if(this.sources&&this.state)if(this.state===B)X(this);else{const e=L;L=null,j(()=>ae(this),!1),L=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function He(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=pe&&pe.running;i&&pe.disposed.has(o),(i?!o.tState:!o.state)&&(o.pure?L.push(o):I.push(o),o.observers&&ze(o)),i||(o.state=B)}if(L.length>1e6)throw L=[],new Error},!1)),t}function X(e){if(!e.fn)return;he(e);const t=v,n=w,r=fe;w=v=e,yt(e,e.value,r),w=n,v=t}function yt(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=B,e.owned&&e.owned.forEach(he),e.owned=null),e.updatedAt=n+1,Ce(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?He(e,r):e.value=r,e.updatedAt=n)}function de(e,t,n,r=B,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:null,pure:n};return v===null||v!==Ve&&(v.owned?v.owned.push(o):v.owned=[o]),o}function ce(e){if(e.state===0)return;if(e.state===le)return ae(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<fe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===B)X(e);else if(e.state===le){const r=L;L=null,j(()=>ae(e,t[0]),!1),L=r}}function j(e,t){if(L)return e();let n=!1;t||(L=[]),I?n=!0:I=[],fe++;try{const r=e();return pt(n),r}catch(r){n||(I=null),L=null,Ce(r)}}function pt(e){if(L&&(We(L),L=null),e)return;const t=I;I=null,t.length&&j(()=>Ue(t),!1)}function We(e){for(let t=0;t<e.length;t++)ce(e[t])}function wt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ce(r)}for(_.context&&Q(),t=0;t<n;t++)ce(e[t])}function ae(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===B?r!==t&&(!r.updatedAt||r.updatedAt<fe)&&ce(r):s===le&&ae(r,t)}}}function ze(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=le,n.pure?L.push(n):I.push(n),n.observers&&ze(n))}}function he(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)he(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Xe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ce(e,t=v){throw Xe(e)}function Ge(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ge(e.owner,t):void 0}function ve(e){if(typeof e=="function"&&!e.length)return ve(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ve(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function bt(e,t){return function(r){let s;return T(()=>s=$(()=>(v.context={[e]:r.value},_e(()=>r.children))),void 0),s}}const vt=Symbol("fallback");function Ne(e){for(let t=0;t<e.length;t++)e[t]()}function xt(e,t,n={}){let r=[],s=[],o=[],i=0,l=t.length>1?[]:null;return Ee(()=>Ne(o)),()=>{let a=e()||[],u,c;return a[ut],$(()=>{let d=a.length,m,b,y,O,k,S,A,P,E;if(d===0)i!==0&&(Ne(o),o=[],r=[],s=[],i=0,l&&(l=[])),n.fallback&&(r=[vt],s[0]=Z(K=>(o[0]=K,n.fallback())),i=1);else if(i===0){for(s=new Array(d),c=0;c<d;c++)r[c]=a[c],s[c]=Z(f);i=d}else{for(y=new Array(d),O=new Array(d),l&&(k=new Array(d)),S=0,A=Math.min(i,d);S<A&&r[S]===a[S];S++);for(A=i-1,P=d-1;A>=S&&P>=S&&r[A]===a[P];A--,P--)y[P]=s[A],O[P]=o[A],l&&(k[P]=l[A]);for(m=new Map,b=new Array(P+1),c=P;c>=S;c--)E=a[c],u=m.get(E),b[c]=u===void 0?-1:u,m.set(E,c);for(u=S;u<=A;u++)E=r[u],c=m.get(E),c!==void 0&&c!==-1?(y[c]=s[u],O[c]=o[u],l&&(k[c]=l[u]),c=b[c],m.set(E,c)):o[u]();for(c=S;c<d;c++)c in y?(s[c]=y[c],o[c]=O[c],l&&(l[c]=k[c],l[c](c))):s[c]=Z(f);s=s.slice(0,i=d),r=a.slice(0)}return s});function f(d){if(o[c]=d,l){const[m,b]=N(c);return l[c]=b,t(a[c],m)}return t(a[c])}}}function C(e,t){return $(()=>e(t||{}))}function re(){return!0}const xe={get(e,t,n){return t===oe?n:e.get(t)},has(e,t){return t===oe?!0:e.has(t)},set:re,deleteProperty:re,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:re,deleteProperty:re}},ownKeys(e){return e.keys()}};function we(e){return(e=typeof e=="function"?e():e)?e:{}}function At(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ae(...e){let t=!1;for(let o=0;o<e.length;o++){const i=e[o];t=t||!!i&&oe in i,e[o]=typeof i=="function"?(t=!0,x(i)):i}if(t)return new Proxy({get(o){for(let i=e.length-1;i>=0;i--){const l=we(e[i])[o];if(l!==void 0)return l}},has(o){for(let i=e.length-1;i>=0;i--)if(o in we(e[i]))return!0;return!1},keys(){const o=[];for(let i=0;i<e.length;i++)o.push(...Object.keys(we(e[i])));return[...new Set(o)]}},xe);const n={},r={},s=new Set;for(let o=e.length-1;o>=0;o--){const i=e[o];if(!i)continue;const l=Object.getOwnPropertyNames(i);for(let a=0,u=l.length;a<u;a++){const c=l[a];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,c);if(!s.has(c))f.get?(s.add(c),Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:At.bind(r[c]=[f.get.bind(i)])})):(f.value!==void 0&&s.add(c),n[c]=f.value);else{const d=r[c];d?f.get?d.push(f.get.bind(i)):f.value!==void 0&&d.push(()=>f.value):n[c]===void 0&&(n[c]=f.value)}}}return n}function Pt(e,...t){if(oe in e){const s=new Set(t.length>1?t.flat():t[0]),o=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},xe));return o.push(new Proxy({get(i){return s.has(i)?void 0:e[i]},has(i){return s.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!s.has(i))}},xe)),o}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,s),i=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let l=!1,a=0;for(const u of t)u.includes(s)&&(l=!0,i?r[a][s]=o.value:Object.defineProperty(r[a],s,o)),++a;l||(i?n[s]=o.value:Object.defineProperty(n,s,o))}return[...r,n]}function U(e){let t,n;const r=s=>{const o=_.context;if(o){const[l,a]=N();(n||(n=e())).then(u=>{Q(o),a(()=>u.default),Q()}),t=l}else if(!t){const[l]=ft(()=>(n||(n=e())).then(a=>a.default));t=l}let i;return x(()=>(i=t())&&$(()=>{if(!o)return i(s);const l=_.context;Q(o);const a=i(s);return Q(l),a}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}const Je=e=>`Stale read from <${e}>.`;function Et(e){const t="fallback"in e&&{fallback:()=>e.fallback};return x(xt(()=>e.each,e.children,t||void 0))}function $e(e){const t=e.keyed,n=x(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return x(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?$(()=>s(t?r:()=>{if(!$(n))throw Je("Show");return e.when})):s}return e.fallback},void 0,void 0)}function $n(e){let t=!1;const n=(o,i)=>o[0]===i[0]&&(t?o[1]===i[1]:!o[1]==!i[1])&&o[2]===i[2],r=_e(()=>e.children),s=x(()=>{let o=r();Array.isArray(o)||(o=[o]);for(let i=0;i<o.length;i++){const l=o[i].when;if(l)return t=!!o[i].keyed,[i,l,o[i]]}return[-1]},void 0,{equals:n});return x(()=>{const[o,i,l]=s();if(o<0)return e.fallback;const a=l.children;return typeof a=="function"&&a.length>0?$(()=>a(t?i:()=>{if($(s)[0]!==o)throw Je("Match");return l.when})):a},void 0,void 0)}function Ln(e){return e}const St=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],_t=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...St]),Ct=new Set(["innerHTML","textContent","innerText","children"]),$t=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Lt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Ot(e,t){const n=Lt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const kt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Rt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Nt(e,t,n){let r=n.length,s=t.length,o=r,i=0,l=0,a=t[s-1].nextSibling,u=null;for(;i<s||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const c=o<r?l?n[l-1].nextSibling:n[o-l]:a;for(;l<o;)e.insertBefore(n[l++],c)}else if(o===l)for(;i<s;)(!u||!u.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],c),t[s]=n[o]}else{if(!u){u=new Map;let f=l;for(;f<o;)u.set(n[f],f++)}const c=u.get(t[i]);if(c!=null)if(l<c&&c<o){let f=i,d=1,m;for(;++f<s&&f<o&&!((m=u.get(t[f]))==null||m!==c+d);)d++;if(d>c-l){const b=t[i];for(;l<c;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const Te="_$DX_DELEGATE";function Tt(e,t,n,r={}){let s;return Z(o=>{s=o,t===document?e():W(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function te(e,t,n){let r;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},o=t?()=>$(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function Le(e,t=window.document){const n=t[Te]||(t[Te]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Vt))}}function ue(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function It(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Oe(e,t){t==null?e.removeAttribute("class"):e.className=t}function jt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function Bt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,i;for(o=0,i=s.length;o<i;o++){const l=s[o];!l||l==="undefined"||t[l]||(Ie(e,l,!1),delete n[l])}for(o=0,i=r.length;o<i;o++){const l=r[o],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(Ie(e,l,!0),n[l]=a)}return n}function Ye(e,t,n){if(!t)return n?ue(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function Dt(e,t={},n,r){const s={};return r||T(()=>s.children=z(e,t.children,s.children)),T(()=>t.ref&&t.ref(e)),T(()=>Mt(e,t,n,!0,s,!0)),s}function On(e,t,n){return $(()=>e(t,n))}function W(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return z(e,t,r,n);T(s=>z(e,t(),s,n),r)}function Mt(e,t,n,r,s={},o=!1){t||(t={});for(const i in s)if(!(i in t)){if(i==="children")continue;s[i]=je(e,i,null,s[i],n,o)}for(const i in t){if(i==="children"){r||z(e,t.children);continue}const l=t[i];s[i]=je(e,i,l,s[i],n,o)}}function Ut(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ie(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function je(e,t,n,r,s,o){let i,l,a,u,c;if(t==="style")return Ye(e,n,r);if(t==="classList")return Bt(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),d=kt.has(f);if(!d&&r){const m=Array.isArray(r)?r[0]:r;e.removeEventListener(f,m)}(d||n)&&(jt(e,f,n,d),d&&Le([f]))}else if(t.slice(0,5)==="attr:")ue(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(a=Ct.has(t))||!s&&((u=Ot(t,e.tagName))||(l=_t.has(t)))||(i=e.nodeName.includes("-")))c&&(t=t.slice(5),l=!0),t==="class"||t==="className"?Oe(e,n):i&&!l&&!a?e[Ut(t)]=n:e[u||t]=n;else{const f=s&&t.indexOf(":")>-1&&Rt[t.split(":")[0]];f?It(e,f,t,n):ue(e,$t[t]||t,n)}return n}function Vt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),_.registry&&!_.done&&(_.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function z(e,t,n,r,s){if(_.context){!n&&(n=[...e.childNodes]);let l=[];for(let a=0;a<n.length;a++){const u=n[a];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():l.push(u)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(_.context)return n;if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=H(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(_.context)return n;n=H(e,n,r)}else{if(o==="function")return T(()=>{let l=t();for(;typeof l=="function";)l=l();n=z(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(Pe(l,t,n,s))return T(()=>n=z(e,l,n,r,!0)),()=>n;if(_.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=H(e,n,r),i)return n}else a?n.length===0?Be(e,l,r):Nt(e,n,l):(n&&H(e),Be(e,l));n=l}else if(t.nodeType){if(_.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=H(e,n,r,t);H(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Pe(e,t,n,r){let s=!1;for(let o=0,i=t.length;o<i;o++){let l=t[o],a=n&&n[o],u;if(!(l==null||l===!0||l===!1))if((u=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=Pe(e,l,a)||s;else if(u==="function")if(r){for(;typeof l=="function";)l=l();s=Pe(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||s}else e.push(l),s=!0;else{const c=String(l);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return s}function Be(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function H(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(s!==l){const a=l.parentNode===e;!o&&!i?a?e.replaceChild(s,l):e.insertBefore(s,n):a&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const qt=!1;function Qe(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Kt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Ft(e){try{return document.querySelector(e)}catch{return null}}function Ze(e,t){const n=Ft(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function et(e,t,n,r){let s=!1;const o=l=>typeof l=="string"?{value:l}:l,i=Kt(N(o(e()),{equals:(l,a)=>l.value===a.value}),void 0,l=>(!s&&t(l),l));return n&&Ee(n((l=e())=>{s=!0,i[1](o(l)),s=!1})),{signal:i,utils:r}}function Ht(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:N({value:""})};return e}function Wt(){return et(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Ze(window.location.hash.slice(1),n)},e=>Qe(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function zt(){return et(()=>window.location.hash.slice(1),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"","#"+e):window.location.hash=e;const s=e.indexOf("#"),o=s>=0?e.slice(s+1):"";Ze(o,n)},e=>Qe(window,"hashchange",()=>e()),{go:e=>window.history.go(e),renderPath:e=>`#${e}`,parsePath:e=>{const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}})}function Xt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:a=>{a&&(n=!0),l.navigate(s,o)}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}const Gt=/^(?:[a-z0-9]+:)?\/\//i,Jt=/^\/+|(\/)\/+$/g;function q(e,t=!1){const n=e.replace(Jt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function se(e,t,n){if(Gt.test(t))return;const r=q(e),s=n&&q(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+q(t,!o)}function Yt(e,t){if(e==null)throw new Error(t);return e}function tt(e,t){return q(e).replace(/\/*(\*.*)?$/g,"")+q(t)}function Qt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Zt(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return l=>{const a=l.split("/").filter(Boolean),u=a.length-i;if(u<0||u>0&&s===void 0&&!t)return null;const c={path:i?"":"/",params:{}},f=d=>n===void 0?void 0:n[d];for(let d=0;d<i;d++){const m=o[d],b=a[d],y=m[0]===":",O=y?m.slice(1):m;if(y&&be(b,f(O)))c.params[O]=b;else if(y||!be(b,m))return null;c.path+=`/${b}`}if(s){const d=u?a.slice(-u).join("/"):"";if(be(d,f(s)))c.params[s]=d;else return null}return c}}function be(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function en(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function nt(e){const t=new Map,n=dt();return new Proxy({},{get(r,s){return t.has(s)||ht(n,()=>t.set(s,x(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function rt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return rt(r).reduce((o,i)=>[...o,...s.map(l=>l+i)],[])}const tn=100,st=Ke(),ge=Ke(),me=()=>Yt(Se(st),"Make sure your app is wrapped in a <Router />");let ee;const ke=()=>ee||Se(ge)||me().base,nn=e=>{const t=ke();return x(()=>t.resolvePath(e()))},rn=e=>{const t=me();return x(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},sn=()=>me().location;function on(e,t="",n){const{component:r,data:s,children:o}=e,i=!o||Array.isArray(o)&&!o.length,l={key:e,element:r?()=>C(r,{}):()=>{const{element:a}=e;return a===void 0&&n?C(n,{}):a},preload:e.component?r.preload:e.preload,data:s};return ot(e.path).reduce((a,u)=>{for(const c of rt(u)){const f=tt(t,c),d=i?f:f.split("/*",1)[0];a.push({...l,originalPath:c,pattern:d,matcher:Zt(d,!i,e.matchFilters)})}return a},[])}function ln(e,t=0){return{routes:e,score:en(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function ot(e){return Array.isArray(e)?e:[e]}function it(e,t="",n,r=[],s=[]){const o=ot(e);for(let i=0,l=o.length;i<l;i++){const a=o[i];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const u=on(a,t,n);for(const c of u){r.push(c);const f=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!f)it(a.children,c.pattern,n,r,s);else{const d=ln([...r],s.length);s.push(d)}r.pop()}}}return r.length?s:s.sort((i,l)=>l.score-i.score)}function cn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function an(e,t){const n=new URL("http://sar"),r=x(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),s=x(()=>r().pathname),o=x(()=>r().search,!0),i=x(()=>r().hash),l=x(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return i()},get state(){return t()},get key(){return l()},query:nt(qe(o,()=>Qt(r())))}}function un(e,t="",n,r){const{signal:[s,o],utils:i={}}=Ht(e),l=i.parsePath||(h=>h),a=i.renderPath||(h=>h),u=i.beforeLeave||Xt(),c=se("",t),f=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[d,m]=N(!1),b=async h=>{m(!0);try{await gt(h)}finally{m(!1)}},[y,O]=N(s().value),[k,S]=N(s().state),A=an(y,k),P=[],E={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(h){return se(c,h)}};if(n)try{ee=E,E.data=n({data:void 0,params:{},location:A,navigate:F(E)})}finally{ee=void 0}function K(h,g,p){$(()=>{if(typeof g=="number"){g&&(i.go?u.confirm(g,p)&&i.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:R,resolve:ne,scroll:D,state:J}={replace:!1,resolve:!0,scroll:!0,...p},M=ne?h.resolvePath(g):se("",g);if(M===void 0)throw new Error(`Path '${g}' is not a routable path`);if(P.length>=tn)throw new Error("Too many redirects");const Y=y();if((M!==Y||J!==k())&&!qt){if(u.confirm(M,p)){const ct=P.push({value:Y,replace:R,scroll:D,state:k()});b(()=>{O(M),S(J)}).then(()=>{P.length===ct&&G({value:M,state:J})})}}})}function F(h){return h=h||Se(ge)||E,(g,p)=>K(h,g,p)}function G(h){const g=P[0];g&&((h.value!==g.value||h.state!==g.state)&&o({...h,replace:g.replace,scroll:g.scroll}),P.length=0)}T(()=>{const{value:h,state:g}=s();$(()=>{h!==y()&&b(()=>{O(h),S(g)})})});{let h=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const p=g.composedPath().find(Y=>Y instanceof Node&&Y.nodeName.toUpperCase()==="A");if(!p||!p.hasAttribute("link"))return;const R=p.href;if(p.target||!R&&!p.hasAttribute("state"))return;const ne=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||ne&&ne.includes("external"))return;const D=new URL(R);if(D.origin!==window.location.origin||c&&D.pathname&&!D.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const J=l(D.pathname+D.search+D.hash),M=p.getAttribute("state");g.preventDefault(),K(E,J,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:M&&JSON.parse(M)})};Le(["click"]),document.addEventListener("click",h),Ee(()=>document.removeEventListener("click",h))}return{base:E,out:f,location:A,isRouting:d,renderPath:a,parsePath:l,navigatorFactory:F,beforeLeave:u}}function fn(e,t,n,r,s){const{base:o,location:i,navigatorFactory:l}=e,{pattern:a,element:u,preload:c,data:f}=r().route,d=x(()=>r().path);c&&c();const m={parent:t,pattern:a,get child(){return n()},path:d,params:s,data:t.data,outlet:u,resolvePath(b){return se(o.path(),b,d())}};if(f)try{ee=m,m.data=f({data:t.data,params:s,location:i,navigate:l(m)})}finally{ee=void 0}return m}const dn=te("<a link>"),hn=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,i=t||Wt(),l=un(i,r,s);return C(st.Provider,{value:l,get children(){return e.children}})},gn=e=>{const t=me(),n=ke(),r=_e(()=>e.children),s=x(()=>it(r(),tt(n.pattern,e.base||""),yn)),o=x(()=>cn(s(),t.location.pathname)),i=nt(()=>{const c=o(),f={};for(let d=0;d<c.length;d++)Object.assign(f,c[d].params);return f});t.out&&t.out.matches.push(o().map(({route:c,path:f,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:f,params:d})));const l=[];let a;const u=x(qe(o,(c,f,d)=>{let m=f&&c.length===f.length;const b=[];for(let y=0,O=c.length;y<O;y++){const k=f&&f[y],S=c[y];d&&k&&S.route.key===k.route.key?b[y]=d[y]:(m=!1,l[y]&&l[y](),Z(A=>{l[y]=A,b[y]=fn(t,b[y-1]||n,()=>u()[y+1],()=>o()[y],i)}))}return l.splice(c.length).forEach(y=>y()),d&&m?d:(a=b[0],b)}));return C($e,{get when(){return u()&&a},keyed:!0,children:c=>C(ge.Provider,{value:c,get children(){return c.outlet()}})})},mn=(e,t)=>()=>C(gn,{base:t,children:e}),yn=()=>{const e=ke();return C($e,{get when(){return e.child},keyed:!0,children:t=>C(ge.Provider,{value:t,get children(){return t.outlet()}})})};function De(e){e=Ae({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Pt(e,["href","state","class","activeClass","inactiveClass","end"]),n=nn(()=>e.href),r=rn(n),s=sn(),o=x(()=>{const i=n();if(i===void 0)return!1;const l=q(i.split(/[?#]/,1)[0]).toLowerCase(),a=q(s.pathname).toLowerCase();return e.end?l===a:a.startsWith(l)});return(()=>{const i=dn();return Dt(i,Ae(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o(),[e.activeClass]:o(),...t.classList}},get["aria-current"](){return o()?"page":void 0}}),!1,!1),i})()}const pn=te("<i>"),wn=e=>{const t=Ae({title:"",class:"",gradient:"",color:"inherit",size:"inherit",style:{}},e),n=()=>{e.onClick&&e.onClick()};return(()=>{const r=pn();return r.$$click=n,T(s=>{const o=t.title,i=`s-icon ri-${t.name} ${t.class}`.replace(/\s{2,}/g," ").trim(),l=!!e.gradient,a={...t.style,"--color":t.color,"--size":t.size,"--gradient":e.gradient};return o!==s._v$&&ue(r,"title",s._v$=o),i!==s._v$2&&Oe(r,s._v$2=i),l!==s._v$3&&r.classList.toggle("s-icon__gradient",s._v$3=l),s._v$4=Ye(r,a,s._v$4),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),r})()};Le(["click"]);const bn="modulepreload",vn=function(e){return"/solid-ui-materials/"+e},Me={},V=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=vn(o),o in Me)return;Me[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const f=s[c];if(f.href===o&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":bn,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},lt=[{path:"/",component:U(()=>V(()=>import("./index-77d52b38.js"),["assets/index-77d52b38.js","assets/index-d7f587d0.css"]))},{path:"/components",children:[{path:"icon",component:U(()=>V(()=>import("./index-92e1f6da.js"),["assets/index-92e1f6da.js","assets/index-4a2c95bf.js","assets/index-69d1537c.css","assets/index-fdb3f869.js"])),meta:{name:"Icon",key:"icon",visible:!0}},{path:"button",component:U(()=>V(()=>import("./index-aa814eef.js"),["assets/index-aa814eef.js","assets/index-fdb3f869.js","assets/index-4a2c95bf.js","assets/index-69d1537c.css","assets/index-faaa6c8c.css"])),meta:{name:"Button",key:"button",visible:!0}},{path:"input",component:U(()=>V(()=>import("./index-ab0c95b6.js"),["assets/index-ab0c95b6.js","assets/index-4a2c95bf.js","assets/index-69d1537c.css","assets/index-fdb3f869.js","assets/index-33486c63.css"])),meta:{name:"Input",key:"input",visible:!0}},{path:"textarea",component:U(()=>V(()=>import("./index-1870b0dd.js"),["assets/index-1870b0dd.js","assets/index-fdb3f869.js","assets/index-4a2c95bf.js","assets/index-69d1537c.css","assets/index-bb522da4.css"])),meta:{name:"Textarea",key:"textarea",visible:!0}},{path:"avatar",component:U(()=>V(()=>import("./index-df0a8889.js"),["assets/index-df0a8889.js","assets/index-fdb3f869.js","assets/index-ce3fc770.css"])),meta:{name:"Avatar",key:"avatar",visible:!0}}]},{path:"**",component:U(()=>V(()=>import("./index-7e3d51e3.js"),[]))}],xn=te('<div w-200px h-100vh overflow-hidden border="~ r-1px solid #e6e5e5" box-border p-12px>'),An=te("<span>"),Pn=e=>{const t=lt.find(r=>r.path==="/components"),n=t?t?.children?.filter(r=>r.meta?.visible):[];return(()=>{const r=xn();return W(r,C(De,{href:"/",class:`decoration-none text-inherit px-8px h-44px mb-2 flex items-center font-bold 
        cursor-pointer`,children:"solid-ui-materials"}),null),W(r,C(Et,{each:n,children:s=>C(De,{get href(){return`/components/${s?.path}`},class:`decoration-none flex items-center h-36px px-8px rounded transition-all transition-200! 
            hover:bg-#f4f4f4 hover:text-#959595`,activeClass:"text-inherit",inactiveClass:"text-#b2b2b2",get children(){return[C($e,{get when(){return s?.meta?.icon},get children(){return C(wn,{get name(){return s.meta?.icon},class:"mr-2"})}}),(()=>{const o=An();return W(o,()=>s?.meta?.name),o})()]}})}),null),T(()=>Oe(r,e.class)),r})()},En=te("<div h-100vh flex overflow-hidden><main flex-1 p-16px box-border overflow-auto>"),Sn=()=>{const e=mn(lt);return(()=>{const t=En(),n=t.firstChild;return W(t,C(Pn,{class:"flex-shrink-0"}),n),W(n,C(e,{})),t})()};const _n=document.getElementById("root");Tt(()=>C(hn,{get source(){return zt()},get children(){return C(Sn,{})}}),_n);export{De as A,Et as F,Ln as M,wn as S,Oe as a,N as b,T as c,C as d,Le as e,x as f,Cn as g,$e as h,W as i,ue as j,ft as k,$n as l,Ae as m,Ee as o,Ye as s,te as t,On as u};
