import{o as Ja,a as Qa,i as ti}from"./lifecycle.CQ7MDHTl.js";import{aj as ei,ab as ai,aU as ii,aV as ri,aW as qe,u as Ue,aX as si,aY as ni,a0 as He,aZ as ht,af as Ke,a_ as Xe,a9 as ne,a$ as li,f as Ve,t as yt,h as t,a as at,p as oi,b as ci,s as l,b0 as $e,d as it,m as P,g as m,ar as xt,e as n,r as s,o as ui}from"./template.DidoGl4H.js";import{a as di,s as B}from"./render.DDnrQN1k.js";import{i as W}from"./if.CvdOIZUr.js";import{e as vi,i as fi}from"./each.D0WHpV0y.js";import{s as F,a as A,c as Be}from"./props.CtN0SH3-.js";import{e as v}from"./utils.CBETrmEc.js";import{s as We}from"./event-modifiers.gvea_hMH.js";import{I as b}from"./Icon.DQo2L3DU.js";import"./config.C966x9GF.js";import{I as C}from"./zh_TW.CL-dctXH.js";import{i as I}from"./translation.bZwKv3Ls.js";const mi=()=>performance.now(),O={tick:r=>requestAnimationFrame(r),now:()=>mi(),tasks:new Set};function Ge(){const r=O.now();O.tasks.forEach(i=>{i.c(r)||(O.tasks.delete(i),i.f())}),O.tasks.size!==0&&O.tick(Ge)}function pi(r){let i;return O.tasks.size===0&&O.tick(Ge),{promise:new Promise(o=>{O.tasks.add(i={c:r,f:o})}),abort(){O.tasks.delete(i)}}}function zt(r,i){Ke(()=>{r.dispatchEvent(new CustomEvent(i))})}function bi(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const i=r.split("-");return i.length===1?i[0]:i[0]+i.slice(1).map(o=>o[0].toUpperCase()+o.slice(1)).join("")}function Oe(r){const i={},o=r.split(";");for(const u of o){const[c,f]=u.split(":");if(!c||f===void 0)break;const E=bi(c.trim());i[E]=f.trim()}return i}const gi=r=>r;function hi(r,i,o,u){var c=(r&si)!==0,f="both",E,S=i.inert,Y=i.style.overflow,p,y;function _(){return Ke(()=>E??=o()(i,u?.()??{},{direction:f}))}var M={is_global:c,in(){i.inert=S,p=se(i,_(),y,1,()=>{zt(i,"introend"),p?.abort(),p=E=void 0,i.style.overflow=Y})},out(x){i.inert=!0,y=se(i,_(),p,0,()=>{zt(i,"outroend"),x?.()})},stop:()=>{p?.abort(),y?.abort()}},T=ei;if((T.nodes.t??=[]).push(M),di){var D=c;if(!D){for(var g=T.parent;g&&(g.f&ai)!==0;)for(;(g=g.parent)&&(g.f&ii)===0;);D=!g||(g.f&ri)!==0}D&&qe(()=>{Ue(()=>M.in())})}}function se(r,i,o,u,c){var f=u===1;if(ni(i)){var E,S=!1;return He(()=>{if(!S){var x=i({direction:f?"in":"out"});E=se(r,x,o,u,c)}}),{abort:()=>{S=!0,E?.abort()},deactivate:()=>E.deactivate(),reset:()=>E.reset(),t:()=>E.t()}}if(o?.deactivate(),!i?.duration&&!i?.delay)return zt(r,f?"introstart":"outrostart"),c(),{abort:ht,deactivate:ht,reset:ht,t:()=>u};const{delay:Y=0,css:p,tick:y,easing:_=gi}=i;var M=[];if(f&&o===void 0&&(y&&y(0,1),p)){var T=Oe(p(0,1));M.push(T,T)}var D=()=>1-u,g=r.animate(M,{duration:Y,fill:"forwards"});return g.onfinish=()=>{g.cancel(),zt(r,f?"introstart":"outrostart");var x=o?.t()??1-u;o?.abort();var d=u-x,w=i.duration*Math.abs(d),h=[];if(w>0){var X=!1;if(p)for(var N=Math.ceil(w/16.666666666666668),ut=0;ut<=N;ut+=1){var _t=x+d*_(ut/N),wt=Oe(p(_t,1-_t));h.push(wt),X||=wt.overflow==="hidden"}X&&(r.style.overflow="hidden"),D=()=>{var q=g.currentTime;return x+d*_(q/w)},y&&pi(()=>{if(g.playState!=="running")return!1;var q=D();return y(q,1-q),!0})}g=r.animate(h,{duration:w,fill:"forwards"}),g.onfinish=()=>{D=()=>u,y?.(u,1-u),c()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=ht)},deactivate:()=>{c=ht},reset:()=>{u===0&&y?.(1,0)},t:()=>D()}}function yi(r,i,o=i){var u=()=>{o(r.volume)};i()==null&&u(),Xe(r,["volumechange"],u,!1),ne(()=>{var c=Number(i());c!==r.volume&&!isNaN(c)&&(r.volume=c)})}function xi(r,i,o=i){var u=()=>{o(r.muted)};i()==null&&u(),Xe(r,["volumechange"],u,!1),ne(()=>{var c=!!i();r.muted!==c&&(r.muted=c)})}function Ye(r,i){return r===i||r?.[li]===i}function re(r={},i,o,u){return qe(()=>{var c,f;return ne(()=>{c=f,f=[],Ue(()=>{r!==o(...f)&&(i(r,...f),c&&Ye(o(...c),r)&&i(null,...c))})}),()=>{He(()=>{f&&Ye(o(...f),r)&&i(null,...f)})}}),r}function _i(r){const i=r-1;return i*i*i+1}function wi(r,{delay:i=0,duration:o=400,easing:u=_i,axis:c="y"}={}){const f=getComputedStyle(r),E=+f.opacity,S=c==="y"?"height":"width",Y=parseFloat(f[S]),p=c==="y"?["top","bottom"]:["left","right"],y=p.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),_=parseFloat(f[`padding${y[0]}`]),M=parseFloat(f[`padding${y[1]}`]),T=parseFloat(f[`margin${y[0]}`]),D=parseFloat(f[`margin${y[1]}`]),g=parseFloat(f[`border${y[0]}Width`]),x=parseFloat(f[`border${y[1]}Width`]);return{delay:i,duration:o,easing:u,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*E};${S}: ${d*Y}px;padding-${p[0]}: ${d*_}px;padding-${p[1]}: ${d*M}px;margin-${p[0]}: ${d*T}px;margin-${p[1]}: ${d*D}px;border-${p[0]}-width: ${d*g}px;border-${p[1]}-width: ${d*x}px;min-${S}: 0`}}var ki=it('<div class="fixed bottom-20 right-4 z-60 max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Pi=it('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),Ei=it('<span class="text-sm text-(--content-meta)"></span>'),Si=it('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-(--btn-regular-bg) shrink-0"><img loading="lazy" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),Fi=it('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-(--line-divider)"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar"></div></div>'),Ti=it(`<!> <div><div role="button" tabindex="0"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden shrink-0"><img/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-(--primary) rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -0.125rem;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 3rem;
	height: 3rem;
}
.music-player {
    max-width: 20rem;
    user-select: none;
}
.mini-player {
    width: 17.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 20rem;
    position: absolute;
    bottom: 0;
    right: 0;
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
	}
    50% {
        opacity: 0.5;
	}
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px !important;
        /*left: 0.5rem !important;*/
        bottom: 0.5rem !important;
        right: 0.5rem !important;
	}
    .mini-player {
        width: 280px;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
	}
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
        max-width: none;
	}
    .controls {
        gap: 8px;
	}
    .controls button {
        width: 36px;
        height: 36px;
	}
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
	}
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
	}
    .song-title {
        font-size: 14px;
	}
    .song-artist {
        font-size: 12px;
	}
    .controls {
        gap: 6px;
        margin-bottom: 12px;
	}
    .controls button {
        width: 32px;
        height: 32px;
	}
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
	}
    .playlist-item {
        padding: 8px 12px;
	}
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
	}
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
	}
    to {
        transform: translateY(0);
        opacity: 1;
	}
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
	}
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
	}
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
	}
    to {
        transform: rotate(360deg);
	}
}

.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}

.cover-container img.spinning {
    animation-play-state: running;
}

/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
	border: none;
}</style>`,1),Mi=it('<audio preload="auto"></audio> <!>',1);function Wi(r,i){ci(i,!1);let o=P(!1),u=P(!1),c=P(!1),f=P(!1),E=P(0),S=P(0);const Y="music-player-volume";let p=P(.7),y=P(!1),_=P(!1),M=P(!1),T=P(0),D=P(""),g=P(!1),x=P({title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0}),d=P([]),w=P(0),h=P(),X=P(),N=P();const ut=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}];function _t(){try{if(typeof localStorage<"u"){const a=localStorage.getItem(Y);a!==null&&!isNaN(parseFloat(a))&&l(p,parseFloat(a))}}catch(a){console.warn("Failed to load volume settings from localStorage:",a)}}function wt(){try{typeof localStorage<"u"&&localStorage.setItem(Y,t(p).toString())}catch(a){console.warn("Failed to save volume settings to localStorage:",a)}}function q(){!t(h)||!t(x).url||(t(o)?t(h).pause():t(h).play().catch(()=>{}))}function kt(){l(u,!t(u)),t(u)&&(l(f,!1),l(c,!1))}function Pt(){l(c,!t(c)),t(c)&&(l(u,!1),l(f,!1))}function le(){l(f,!t(f))}function Ze(){l(M,!t(M)),t(M)&&l(T,0)}function Je(){l(T,(t(T)+1)%3),t(T)!==0&&l(M,!1)}function Qe(){if(t(d).length<=1)return;const a=t(w)>0?t(w)-1:t(d).length-1;Et(a)}function Vt(a=!0){if(t(d).length<=1)return;let k;if(t(M))do k=Math.floor(Math.random()*t(d).length);while(k===t(w)&&t(d).length>1);else k=t(w)<t(d).length-1?t(w)+1:0;Et(k,a)}let $t=!1;function Et(a,k=!0){a<0||a>=t(d).length||($t=k,l(w,a),oe(t(d)[t(w)]))}function St(a){return a.startsWith("http://")||a.startsWith("https://")||a.startsWith("/")?a:`/${a}`}function oe(a){a&&a.url!==t(x).url&&(l(x,{...a}),a.url?l(_,!0):l(_,!1))}let Bt=!1;function ta(){if(l(_,!1),t(h)?.duration&&t(h).duration>1&&(l(S,Math.floor(t(h).duration)),t(d)[t(w)]&&xt(d,t(d)[t(w)].duration=t(S)),xt(x,t(x).duration=t(S))),$t||t(o)){const a=t(h).play();a!==void 0&&a.catch(k=>{console.warn("自动播放被拦截，等待用户交互:",k),Bt=!0,l(o,!1)})}}function ce(){if(Bt&&t(h)){const a=t(h).play();a!==void 0&&a.then(()=>{Bt=!1}).catch(()=>{})}}function ea(a){if(!t(x).url)return;l(_,!1),Wt(I(C.musicPlayerErrorSong));const k=t(o)||$t;t(d).length>1?setTimeout(()=>Vt(k),1e3):Wt(I(C.musicPlayerErrorEmpty))}function aa(){}function ia(){t(T)===1?(xt(h,t(h).currentTime=0),t(h).play().catch(()=>{})):t(T)===2||t(M)?Vt(!0):l(o,!1)}function Wt(a){l(D,a),l(g,!0),setTimeout(()=>{l(g,!1)},3e3)}function ra(){l(g,!1)}function sa(a){if(!t(h)||!t(X))return;const k=t(X).getBoundingClientRect(),Mt=(a.clientX-k.left)/k.width*t(S);xt(h,t(h).currentTime=Mt),l(E,Mt)}let Ft=P(!1),Tt=!1,Ot=null,rt=null;function na(a){t(N)&&(a.preventDefault(),Tt=!0,t(N).setPointerCapture(a.pointerId),Ot=t(N).getBoundingClientRect(),ue(a.clientX))}function la(a){Tt&&(a.preventDefault(),l(Ft,!0),!rt&&(rt=requestAnimationFrame(()=>{ue(a.clientX),rt=null})))}function oa(a){Tt&&(Tt=!1,l(Ft,!1),Ot=null,t(N)&&t(N).releasePointerCapture(a.pointerId),rt&&(cancelAnimationFrame(rt),rt=null),wt())}function ue(a){if(!t(h)||!t(N))return;const k=Ot||t(N).getBoundingClientRect(),G=Math.max(0,Math.min(1,(a-k.left)/k.width));l(p,G)}function de(){l(y,!t(y))}function ve(a){if(!Number.isFinite(a)||a<0)return"0:00";const k=Math.floor(a/60),G=Math.floor(a%60);return`${k}:${G.toString().padStart(2,"0")}`}const fe=["click","keydown","touchstart"];Ja(()=>{_t(),fe.forEach(a=>{document.addEventListener(a,ce,{capture:!0})}),l(d,[...ut]),t(d).length>0?oe(t(d)[0]):Wt("本地播放列表为空")}),Qa(()=>{typeof document<"u"&&fe.forEach(a=>{document.removeEventListener(a,ce,{capture:!0})})}),ti();var me=Mi();v("pointermove",$e,la),v("pointerup",$e,oa);var R=Ve(me);re(R,a=>l(h,a),()=>t(h));var ca=m(R,2);{var ua=a=>{var k=Ti(),G=Ve(k);{var Mt=e=>{var L=ki(),V=n(L),H=n(V);b(H,{icon:"material-symbols:error",class:"text-xl shrink-0"});var Q=m(H,2),tt=n(Q,!0);s(Q);var et=m(Q,2),ct=n(et);b(ct,{icon:"material-symbols:close",class:"text-lg"}),s(et),s(V),s(L),yt(()=>B(tt,t(D))),v("click",et,ra),at(e,L)};W(G,e=>{t(g)&&e(Mt)})}var Yt=m(G,2);let pe;var Z=n(Yt);let be;var da=n(Z);{var va=e=>{b(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},fa=e=>{var L=Pi();at(e,L)},ma=e=>{b(e,{icon:"material-symbols:music-note",class:"text-white text-lg"})};W(da,e=>{t(_)?e(va):t(o)?e(fa,1):e(ma,-1)})}s(Z);var jt=m(Z,2);let ge;var he=n(jt),st=n(he),Ct=n(st);let ye;var xe=m(Ct,2),pa=n(xe);{var ba=e=>{b(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ga=e=>{b(e,{icon:"material-symbols:pause",class:"text-white text-xl"})},ha=e=>{b(e,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};W(pa,e=>{t(_)?e(ba):t(o)?e(ga,1):e(ha,-1)})}s(xe),s(st);var nt=m(st,2),qt=n(nt),ya=n(qt,!0);s(qt);var _e=m(qt,2),xa=n(_e,!0);s(_e),s(nt);var we=m(nt,2),dt=n(we),_a=n(dt);b(_a,{icon:"material-symbols:visibility-off",class:"text-lg"}),s(dt);var Ut=m(dt,2),wa=n(Ut);b(wa,{icon:"material-symbols:expand-less",class:"text-lg"}),s(Ut),s(we),s(he),s(jt);var It=m(jt,2);let ke;var Ht=n(It),Kt=n(Ht),Xt=n(Kt);let Pe;s(Kt);var Gt=m(Kt,2),Zt=n(Gt),ka=n(Zt,!0);s(Zt);var Jt=m(Zt,2),Pa=n(Jt,!0);s(Jt);var Ee=m(Jt,2),Ea=n(Ee);s(Ee),s(Gt);var Se=m(Gt,2),vt=n(Se),Sa=n(vt);b(Sa,{icon:"material-symbols:visibility-off",class:"text-lg"}),s(vt);var ft=m(vt,2);let Fe;var Fa=n(ft);b(Fa,{icon:"material-symbols:queue-music",class:"text-lg"}),s(ft),s(Se),s(Ht);var Qt=m(Ht,2),J=n(Qt),Ta=n(J);s(J),re(J,e=>l(X,e),()=>t(X)),s(Qt);var te=m(Qt,2),lt=n(te);let Te;var Ma=n(lt);b(Ma,{icon:"material-symbols:shuffle",class:"text-lg"}),s(lt);var mt=m(lt,2),ja=n(mt);b(ja,{icon:"material-symbols:skip-previous",class:"text-xl"}),s(mt);var ot=m(mt,2);let Me;var Ca=n(ot);{var Ia=e=>{b(e,{icon:"eos-icons:loading",class:"text-xl"})},Aa=e=>{b(e,{icon:"material-symbols:pause",class:"text-xl"})},Da=e=>{b(e,{icon:"material-symbols:play-arrow",class:"text-xl"})};W(Ca,e=>{t(_)?e(Ia):t(o)?e(Aa,1):e(Da,-1)})}s(ot);var pt=m(ot,2),La=n(pt);b(La,{icon:"material-symbols:skip-next",class:"text-xl"}),s(pt);var At=m(pt,2);let je;var Na=n(At);{var Ra=e=>{b(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},za=e=>{b(e,{icon:"material-symbols:repeat",class:"text-lg"})},Va=e=>{b(e,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};W(Na,e=>{t(T)===1?e(Ra):t(T)===2?e(za,1):e(Va,-1)})}s(At),s(te);var Ce=m(te,2),Dt=n(Ce),$a=n(Dt);{var Ba=e=>{b(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Wa=e=>{b(e,{icon:"material-symbols:volume-down",class:"text-lg"})},Oa=e=>{b(e,{icon:"material-symbols:volume-up",class:"text-lg"})};W($a,e=>{t(y)||t(p)===0?e(Ba):t(p)<.5?e(Wa,1):e(Oa,-1)})}s(Dt);var U=m(Dt,2),Ie=n(U);let Ae;s(U),re(U,e=>l(N,e),()=>t(N));var Lt=m(U,2),Ya=n(Lt);b(Ya,{icon:"material-symbols:expand-more",class:"text-lg"}),s(Lt),s(Ce),s(It);var qa=m(It,2);{var Ua=e=>{var L=Fi(),V=n(L),H=n(V),Q=n(H,!0);s(H);var tt=m(H,2),et=n(tt);b(et,{icon:"material-symbols:close",class:"text-lg"}),s(tt),s(V);var ct=m(V,2);vi(ct,5,()=>t(d),fi,(bt,K,z)=>{var $=Si();let Nt;var gt=n($),ee=n(gt);{var Ha=j=>{b(j,{icon:"material-symbols:graphic-eq",class:"text-(--primary) animate-pulse"})},Ka=j=>{b(j,{icon:"material-symbols:pause",class:"text-(--primary)"})},Xa=j=>{var ze=Ei();ze.textContent=z+1,at(j,ze)};W(ee,j=>{z===t(w)&&t(o)?j(Ha):z===t(w)?j(Ka,1):j(Xa,-1)})}s(gt);var ae=m(gt,2),De=n(ae);s(ae);var Le=m(ae,2),Rt=n(Le);let Ne;var Ga=n(Rt,!0);s(Rt);var ie=m(Rt,2);let Re;var Za=n(ie,!0);s(ie),s(Le),s($),yt(j=>{Nt=A($,1,"playlist-item flex items-center gap-3 p-3 hover:bg-(--btn-plain-bg-hover) cursor-pointer transition-colors",null,Nt,{"bg-[var(--btn-plain-bg)]":z===t(w),"text-[var(--primary)]":z===t(w)}),F($,"aria-label",`播放 ${t(K).title??""} - ${t(K).artist??""}`),F(De,"src",j),F(De,"alt",t(K).title),Ne=A(Rt,1,"font-medium truncate",null,Ne,{"text-[var(--primary)]":z===t(w),"text-90":z!==t(w)}),B(Ga,t(K).title),Re=A(ie,1,"text-sm text-(--content-meta) truncate",null,Re,{"text-[var(--primary)]":z===t(w)}),B(Za,t(K).artist)},[()=>St(t(K).cover)]),v("click",$,()=>Et(z)),v("keydown",$,j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),Et(z))}),at(bt,$)}),s(ct),s(L),yt(bt=>B(Q,bt),[()=>I(C.musicPlayerPlaylist)]),v("click",tt,le),hi(3,L,()=>wi,()=>({duration:300,axis:"y"})),at(e,L)};W(qa,e=>{t(f)&&e(Ua)})}s(Yt),ui(2),yt((e,L,V,H,Q,tt,et,ct,bt,K,z,$,Nt,gt,ee)=>{pe=A(Yt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,pe,{expanded:t(u),"hidden-mode":t(c)}),be=A(Z,1,"orb-player w-12 h-12 bg-(--primary) rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,be,{"opacity-0":!t(c),"scale-0":!t(c),"pointer-events-none":!t(c)}),F(Z,"aria-label",e),ge=A(jt,1,"mini-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,ge,{"opacity-0":t(u)||t(c),"scale-95":t(u)||t(c),"pointer-events-none":t(u)||t(c)}),F(st,"aria-label",L),F(Ct,"src",V),F(Ct,"alt",H),ye=A(Ct,1,"w-full h-full object-cover transition-transform duration-300",null,ye,{spinning:t(o)&&!t(_),"animate-pulse":t(_)}),F(nt,"aria-label",Q),B(ya,t(x).title),B(xa,t(x).artist),F(dt,"title",tt),ke=A(It,1,"expanded-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,ke,{"opacity-0":!t(u),"scale-95":!t(u),"pointer-events-none":!t(u)}),F(Xt,"src",et),F(Xt,"alt",ct),Pe=A(Xt,1,"w-full h-full object-cover transition-transform duration-300",null,Pe,{spinning:t(o)&&!t(_),"animate-pulse":t(_)}),B(ka,t(x).title),B(Pa,t(x).artist),B(Ea,`${bt??""} / ${K??""}`),F(vt,"title",z),Fe=A(ft,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,Fe,{"text-[var(--primary)]":t(f)}),F(ft,"title",$),F(J,"aria-label",Nt),F(J,"aria-valuenow",t(S)>0?t(E)/t(S)*100:0),Be(Ta,`width: ${t(S)>0?t(E)/t(S)*100:0}%`),Te=A(lt,1,"w-10 h-10 rounded-lg",null,Te,{"btn-regular":t(M),"btn-plain":!t(M)}),lt.disabled=t(d).length<=1,mt.disabled=t(d).length<=1,Me=A(ot,1,"btn-regular w-12 h-12 rounded-full",null,Me,{"opacity-50":t(_)}),ot.disabled=t(_),pt.disabled=t(d).length<=1,je=A(At,1,"w-10 h-10 rounded-lg",null,je,{"btn-regular":t(T)>0,"btn-plain":t(T)===0}),F(U,"aria-label",gt),F(U,"aria-valuenow",t(p)*100),Ae=A(Ie,1,"h-full bg-(--primary) rounded-full transition-all",null,Ae,{"duration-100":!t(Ft),"duration-0":t(Ft)}),Be(Ie,`width: ${t(p)*100}%`),F(Lt,"title",ee)},[()=>I(C.musicPlayerShow),()=>t(o)?I(C.musicPlayerPause):I(C.musicPlayerPlay),()=>St(t(x).cover),()=>I(C.musicPlayerCover),()=>I(C.musicPlayerExpand),()=>I(C.musicPlayerHide),()=>St(t(x).cover),()=>I(C.musicPlayerCover),()=>ve(t(E)),()=>ve(t(S)),()=>I(C.musicPlayerHide),()=>I(C.musicPlayerPlaylist),()=>I(C.musicPlayerProgress),()=>I(C.musicPlayerVolume),()=>I(C.musicPlayerCollapse)]),v("click",Z,Pt),v("keydown",Z,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Pt())}),v("click",st,q),v("keydown",st,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),q())}),v("click",nt,kt),v("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),kt())}),v("click",dt,We(Pt)),v("click",Ut,We(kt)),v("click",vt,Pt),v("click",ft,le),v("click",J,sa),v("keydown",J,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();const V=.5*t(S);t(h)&&(xt(h,t(h).currentTime=V),l(E,V))}}),v("click",lt,Ze),v("click",mt,Qe),v("click",ot,q),v("click",pt,()=>Vt()),v("click",At,Je),v("click",Dt,de),v("pointerdown",U,na),v("keydown",U,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&de())}),v("click",Lt,kt),at(a,k)};W(ca,a=>{a(ua)})}yt(a=>F(R,"src",a),[()=>St(t(x).url)]),yi(R,()=>t(p),a=>l(p,a)),xi(R,()=>t(y),a=>l(y,a)),v("play",R,()=>l(o,!0)),v("pause",R,()=>l(o,!1)),v("timeupdate",R,()=>l(E,t(h).currentTime)),v("ended",R,ia),v("error",R,ea),v("loadeddata",R,ta),v("loadstart",R,aa),at(r,me),oi()}export{Wi as default};
