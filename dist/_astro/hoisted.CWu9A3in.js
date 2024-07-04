let R=document.querySelectorAll(".modal"),N,S;const ce=e=>[...e.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(t=>!t.hasAttribute("disabled")),le=(e,t)=>{const n=ce(t),o=n[0],r=n[n.length-1];document.activeElement===r&&e.key==="Tab"&&!e.shiftKey&&(e.preventDefault(),o.focus()),document.activeElement===o&&e.key==="Tab"&&e.shiftKey&&(e.preventDefault(),r.focus())},J=e=>{const t=e.querySelector("h3"),n=e.querySelector(".modal__inner");e.showModal(),t.focus(),N=new AbortController,S=new AbortController,document.addEventListener("keydown",o=>le(o,e),{signal:N.signal}),e.addEventListener("keydown",o=>{o.key==="Escape"&&L()},{signal:S.signal}),e.addEventListener("click",()=>{L()},{signal:S.signal}),n.addEventListener("click",o=>{o.stopPropagation()},{signal:S.signal})},L=()=>{R.forEach(e=>{const t=e.getAttribute("aria-labelledby");document.querySelector(`#${t}`).focus({preventScroll:!0}),e.close(),N?.abort(),S?.abort()})};R.forEach(e=>{const t=e.getAttribute("aria-labelledby"),n=e.querySelector(".modal__close button"),o=document.querySelector(`#${t}`);if(!o)throw new Error(`Trigger element not found. 

      Did you forget to add a trigger element with id: "${t}"?`);o.addEventListener("click",()=>J(e)),n.addEventListener("click",L)});window.close=L;document.addEventListener("astro:after-swap",()=>{R=document.querySelectorAll(".modal"),R.forEach(e=>{const t=e.getAttribute("aria-labelledby"),n=e.querySelector(".modal__close button"),o=document.querySelector(`#${t}`);if(!o)throw new Error(`Trigger element not found. 

      Did you forget to add a trigger element with id: "${t}"?`);o.addEventListener("click",()=>J(e)),n.addEventListener("click",L)})});document.addEventListener("astro:page-load",()=>{const e=document.querySelector("#main-navigation"),t=e.querySelector("ul"),n=[...document.querySelectorAll(".has-dropdown button")],o=()=>{const i=e.querySelectorAll("nav > ul"),s=window.location.pathname;i.forEach(h=>{[...h.querySelectorAll('a:not([rel*="external"])')].forEach(u=>{(s.includes(u.pathname.replaceAll("/",""))&&u.textContent!=="Home"||u.textContent==="Home"&&s==="/")&&(u.classList.add("is-active"),u.setAttribute("aria-current","page"))})})},r=()=>{const i=e.getBoundingClientRect().width,s=document.querySelector(".desktop-menu").getBoundingClientRect().width,l=Math.round(s)+300;l>=i?(e.classList.remove("is-desktop"),e.classList.add("is-mobile")):l<=i&&(e.classList.add("is-desktop"),e.classList.remove("is-mobile"))},a=i=>i.getBoundingClientRect().right>(window.innerWidth||document.documentElement.clientWidth),f=i=>{const s=i.parentNode.querySelector("ul");i.classList.add("show"),i.setAttribute("aria-expanded","true"),a(s)&&(s.style.left="auto")},c=i=>{i.classList.remove("show"),i.setAttribute("aria-expanded","false")},d=()=>{for(let i=0;i<n.length;i++)c(n[i])},m=i=>{i.target.getAttribute("aria-expanded")==="false"?(d(),f(i.target)):c(i.target)};t&&t.addEventListener("keydown",i=>{const s=i.target,h=s.closest("li"),l=[...t.querySelectorAll(".menu-item")],u=s.closest(".has-dropdown button"),b=s.closest(".has-dropdown li"),y=l.findIndex(E=>E===h),v=i.key;let p;if(v==="ArrowRight"&&(l.indexOf(h)===l.length-1?p=l[0]:p=l[y+1]),v==="ArrowLeft"&&(l.indexOf(h)===0?p=l[l.length-1]:p=l[y-1]),v==="Escape"&&(p=l[0]),u){const E=u.nextElementSibling.querySelector("li");v==="ArrowDown"&&(i.preventDefault(),f(u),p=E),v==="Escape"&&c(u)}if(b){const E=b.parentNode,w=[...E.querySelectorAll("li")],W=w.findIndex(D=>D===b);if(v==="ArrowDown"&&(i.preventDefault(),w.indexOf(b)===w.length-1?p=w[0]:p=w[W+1]),v==="ArrowUp"&&(i.preventDefault(),w.indexOf(b)===0?p=w[w.length-1]:p=w[W-1]),v==="Escape"&&(p=E.previousElementSibling.parentNode,d()),v==="Tab"){const D=E.previousElementSibling;w.indexOf(b)===w.length-1&&c(D)}}p&&p.querySelector("a, button, input").focus()}),n&&n.forEach(i=>{i.addEventListener("click",m)}),o(),r(),window.addEventListener("resize",r),window.addEventListener("click",i=>{const s=i.target;!s.hasAttribute("aria-haspopup")&&!s.classList.contains("submenu-item")&&d()})});const A="data-astro-transition-persist";function ue(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function de(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function fe(e){for(const t of Array.from(document.head.children)){const n=pe(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function me(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${A}]`)){const o=n.getAttribute(A),r=e.querySelector(`[${A}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ge(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const he=()=>{const e=document.activeElement;if(e?.closest(`[${A}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>C({activeElement:e,start:t,end:n})}return()=>C({activeElement:e})}else return()=>C({activeElement:null})},C=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},pe=(e,t)=>{const n=e.getAttribute(A),o=n&&t.head.querySelector(`[${A}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ge=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},we=e=>{ue(e),de(e),fe(e);const t=he();me(e.body,document.body),t()},be="astro:before-preparation",ye="astro:after-preparation",ve="astro:before-swap",Ee="astro:after-swap",Te=e=>document.dispatchEvent(new Event(e));class Q extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,a,f,c,d,m,i){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=f,this.sourceElement=c,this.info=d,this.newDocument=m,this.signal=i,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class Ae extends Q{formData;loader;constructor(t,n,o,r,a,f,c,d,m,i){super(be,{cancelable:!0},t,n,o,r,a,f,c,d),this.formData=m,this.loader=i.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class Se extends Q{direction;viewTransition;swap;constructor(t,n){super(ve,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>we(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function Le(e,t,n,o,r,a,f,c,d){const m=new Ae(e,t,n,o,r,a,window.document,f,c,d);return document.dispatchEvent(m)&&(await m.loader(),m.defaultPrevented||(Te(ye),m.navigationType!=="traverse"&&F({scrollX,scrollY}))),m}function ke(e,t){const n=new Se(e,t);return document.dispatchEvent(n),n.swap(),n}const xe=history.pushState.bind(history),M=history.replaceState.bind(history),F=e=>{history.state&&(history.scrollRestoration="manual",M({...history.state,...e},""))},_=!!document.startViewTransition,B=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Z=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let g,T,P;const ee=e=>document.dispatchEvent(new Event(e)),te=()=>ee("astro:page-load"),De=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},X="data-astro-transition-persist",Y="data-astro-transition",O="data-astro-transition-fallback";let U,k=0;history.state?(k=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):B()&&(M({index:k,scrollX,scrollY},""),history.scrollRestoration="manual");async function Re(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function ne(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Me(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const a=new Promise(f=>{o.onload=o.onerror=f});e=e.then(()=>a)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const oe=(e,t,n,o,r)=>{const a=Z(t,e),f=document.title;document.title=o;let c=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const d=history.state;M({...n.state,index:d.index,scrollX:d.scrollX,scrollY:d.scrollY},"",e.href)}else xe({...n.state,index:++k,scrollX:0,scrollY:0},"",e.href);if(document.title=f,P=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),c=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const d=history.state;location.href=e.href,history.state||(M(d,""),a&&window.dispatchEvent(new PopStateEvent("popstate")))}else c||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ie(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${X}="${n.getAttribute(X)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function V(e,t,n,o,r){async function a(d){function m(l){const u=l.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const i=document.getAnimations();document.documentElement.setAttribute(O,d);const h=document.getAnimations().filter(l=>!i.includes(l)&&!m(l));return Promise.allSettled(h.map(l=>l.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await a("old")}catch{}const f=document.title,c=ke(e,n.viewTransition);oe(c.to,c.from,t,f,o),ee(Ee),r==="animate"&&(!n.transitionSkipped&&!c.signal.aborted?a("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Pe(){return g?.controller.abort(),g={controller:new AbortController}}async function re(e,t,n,o,r){const a=Pe();if(!B()||location.origin!==n.origin){a===g&&(g=void 0),location.href=n.href;return}const f=r?"traverse":o.history==="replace"?"replace":"push";if(f!=="traverse"&&F({scrollX,scrollY}),Z(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){oe(n,t,o,document.title,r),a===g&&(g=void 0);return}const c=await Le(t,n,e,f,o.sourceElement,o.info,a.controller.signal,o.formData,d);if(c.defaultPrevented||c.signal.aborted){a===g&&(g=void 0),c.signal.aborted||(location.href=n.href);return}async function d(s){const h=s.to.href,l={signal:s.signal};if(s.formData){l.method="POST";const y=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");l.body=y?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const u=await Re(h,l);if(u===null){s.preventDefault();return}if(u.redirected){const y=new URL(u.redirected);if(y.origin!==s.to.origin){s.preventDefault();return}s.to=y}if(U??=new DOMParser,s.newDocument=U.parseFromString(u.html,u.mediaType),s.newDocument.querySelectorAll("noscript").forEach(y=>y.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const b=Ie(s.newDocument);b.length&&!s.signal.aborted&&await Promise.all(b)}async function m(){if(T&&T.viewTransition){try{T.viewTransition.skipTransition()}catch{}try{await T.viewTransition.updateCallbackDone}catch{}}return T={transitionSkipped:!1}}const i=await m();if(c.signal.aborted){a===g&&(g=void 0);return}if(document.documentElement.setAttribute(Y,c.direction),_)i.viewTransition=document.startViewTransition(async()=>await V(c,o,i,r));else{const s=(async()=>{await Promise.resolve(),await V(c,o,i,r,ne())})();i.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(h=>i.viewTransitionFinished=h),skipTransition:()=>{i.transitionSkipped=!0,document.documentElement.removeAttribute(O)}}}i.viewTransition.updateCallbackDone.finally(async()=>{await Me(),te(),De()}),i.viewTransition.finished.finally(()=>{i.viewTransition=void 0,i===T&&(T=void 0),a===g&&(g=void 0),document.documentElement.removeAttribute(Y),document.documentElement.removeAttribute(O)});try{await i.viewTransition.updateCallbackDone}catch(s){const h=s;console.log("[astro]",h.name,h.message,h.stack)}}async function K(e,t){await re("forward",P,new URL(e,location.href),t??{})}function qe(e){if(!B()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>k?"forward":"back";k=n,re(o,P,new URL(location.href),{},t)}const j=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&F({scrollX,scrollY})};{if(_||ne()!=="none")if(P=new URL(location.href),addEventListener("popstate",qe),addEventListener("load",te),"onscrollend"in window)addEventListener("scrollend",j);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,j();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const ie=new Set,I=new WeakSet;let H,se,z=!1;function Ce(e){z||(z=!0,H??=e?.prefetchAll??!1,se??=e?.defaultStrategy??"hover",Ne(),Oe(),He(),_e())}function Ne(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{x(t.target,"tap")&&q(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Oe(){let e;document.body.addEventListener("focusin",o=>{x(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),$(()=>{for(const o of document.getElementsByTagName("a"))I.has(o)||x(o,"hover")&&(I.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{q(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function He(){let e;$(()=>{for(const t of document.getElementsByTagName("a"))I.has(t)||x(t,"viewport")&&(I.add(t),e??=Fe(),e.observe(t))})}function Fe(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),q(r.href)},300))):a&&(clearTimeout(a),e.delete(r))}})}function _e(){$(()=>{for(const e of document.getElementsByTagName("a"))x(e,"load")&&q(e.href)})}function q(e,t){const n=t?.ignoreSlowConnection??!1;if(Be(e,n))if(ie.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function Be(e,t){if(!navigator.onLine||!t&&ae())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!ie.has(e)}catch{}return!1}function x(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||H)&&ae()?!0:n==null&&H||n===""?t===se:n===t}function ae(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function $(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function $e(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function G(e){return e.dataset.astroReload!==void 0}(_||$e()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;G(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),K(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||G(t))return;const n=t,o=e.submitter,r=new FormData(n,o),a=typeof n.action=="string"?n.action:n.getAttribute("action"),f=typeof n.method=="string"?n.method:n.getAttribute("method");let c=o?.getAttribute("formaction")??a??location.pathname;const d=o?.getAttribute("formmethod")??f??"get";if(d==="dialog"||location.origin!==new URL(c,location.href).origin)return;const m={sourceElement:o??n};if(d==="get"){const i=new URLSearchParams(r),s=new URL(c);s.search=i.toString(),c=s.toString()}else m.formData=r;e.preventDefault(),K(c,m)}),Ce({prefetchAll:!0}));document.addEventListener("astro:page-load",()=>{const e=document.querySelector(".responsive-toggle"),t=o=>{o.setAttribute("aria-expanded",!0),o.setAttribute("aria-label","Close menu navigation"),o.innerHTML='<svg width="20" height="20" aria-hidden="true" fill="var(--action-color)" xmlns="http://www.w3.org/2000/svg"><path d="M10 10 2 2m8 8 8 8m-8-8 8-8m-8 8-8 8" stroke="var(--action-color)" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>'},n=o=>{o.setAttribute("aria-expanded",!1),o.setAttribute("aria-label","Open menu navigation"),o.innerHTML='<svg width="26" height="21" aria-hidden="true" fill="var(--action-color)" xmlns="http://www.w3.org/2000/svg"><path d="M2 1.667h24m-24 8h24m-24 8h24" stroke="var(--action-color)" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>'};e.addEventListener("click",o=>{const r=document.querySelector(".mobile-menu");r.classList.toggle("show"),r.classList.contains("show")?t(e):n(e)})});
