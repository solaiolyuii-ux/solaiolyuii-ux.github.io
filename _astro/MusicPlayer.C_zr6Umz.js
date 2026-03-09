import{o as Qa,a as Za,i as tr}from"./lifecycle.BUdnxebf.js";import{ah as er,a8 as ar,aI as rr,aJ as ir,aK as Ue,u as Xe,aL as sr,ac as Ge,aM as nr,_ as Je,aN as _t,aO as Qe,a5 as ce,aP as lr,f as Z,t as wt,g as t,a as $,p as or,b as cr,s as o,aQ as We,d as it,m as F,h as p,al as kt,e as n,r as s,o as ur,c as vt}from"./template.CPXyBZoS.js";import{a as dr,s as H}from"./render.LYkq5V1R.js";import{i as L}from"./if.CsDsK0Yx.js";import{e as vr,i as fr}from"./each.DObiixEX.js";import{s as C,a as R,c as Ye}from"./props.DO61WAiE.js";import{e as f}from"./utils.nNk4BeOt.js";import{s as qe}from"./event-modifiers.gvea_hMH.js";import{I as b}from"./Icon.DOu6xpjm.js";import"./config.DMUCdeSJ.js";import{I as N}from"./zh_TW.CL-dctXH.js";import{i as z}from"./translation.DDuqkt8L.js";const mr=()=>performance.now(),U={tick:i=>requestAnimationFrame(i),now:()=>mr(),tasks:new Set};function Ze(){const i=U.now();U.tasks.forEach(r=>{r.c(i)||(U.tasks.delete(r),r.f())}),U.tasks.size!==0&&U.tick(Ze)}function pr(i){let r;return U.tasks.size===0&&U.tick(Ze),{promise:new Promise(c=>{U.tasks.add(r={c:i,f:c})}),abort(){U.tasks.delete(r)}}}function Bt(i,r){Ge(()=>{i.dispatchEvent(new CustomEvent(r))})}function gr(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const r=i.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(c=>c[0].toUpperCase()+c.slice(1)).join("")}function Ke(i){const r={},c=i.split(";");for(const d of c){const[u,m]=d.split(":");if(!u||m===void 0)break;const T=gr(u.trim());r[T]=m.trim()}return r}const br=i=>i;function hr(i,r,c,d){var u=(i&sr)!==0,m="both",T,M=r.inert,X=r.style.overflow,g,_;function k(){return Ge(()=>T??=c()(r,d?.()??{},{direction:m}))}var D={is_global:u,in(){r.inert=M,Bt(r,"introstart"),g=oe(r,k(),_,1,()=>{Bt(r,"introend"),g?.abort(),g=T=void 0,r.style.overflow=X})},out(w){r.inert=!0,Bt(r,"outrostart"),_=oe(r,k(),g,0,()=>{Bt(r,"outroend"),w?.()})},stop:()=>{g?.abort(),_?.abort()}},j=er;if((j.nodes.t??=[]).push(D),dr){var V=u;if(!V){for(var y=j.parent;y&&(y.f&ar)!==0;)for(;(y=y.parent)&&(y.f&rr)===0;);V=!y||(y.f&ir)!==0}V&&Ue(()=>{Xe(()=>D.in())})}}function oe(i,r,c,d,u){var m=d===1;if(nr(r)){var T,M=!1;return Je(()=>{if(!M){var w=r({direction:m?"in":"out"});T=oe(i,w,c,d,u)}}),{abort:()=>{M=!0,T?.abort()},deactivate:()=>T.deactivate(),reset:()=>T.reset(),t:()=>T.t()}}if(c?.deactivate(),!r?.duration)return u(),{abort:_t,deactivate:_t,reset:_t,t:()=>d};const{delay:X=0,css:g,tick:_,easing:k=br}=r;var D=[];if(m&&c===void 0&&(_&&_(0,1),g)){var j=Ke(g(0,1));D.push(j,j)}var V=()=>1-d,y=i.animate(D,{duration:X,fill:"forwards"});return y.onfinish=()=>{y.cancel();var w=c?.t()??1-d;c?.abort();var v=d-w,P=r.duration*Math.abs(v),x=[];if(P>0){var tt=!1;if(g)for(var B=Math.ceil(P/16.666666666666668),ft=0;ft<=B;ft+=1){var Pt=w+v*k(ft/B),Et=Ke(g(Pt,1-Pt));x.push(Et),tt||=Et.overflow==="hidden"}tt&&(i.style.overflow="hidden"),V=()=>{var G=y.currentTime;return w+v*k(G/P)},_&&pr(()=>{if(y.playState!=="running")return!1;var G=V();return _(G,1-G),!0})}y=i.animate(x,{duration:P,fill:"forwards"}),y.onfinish=()=>{V=()=>d,_?.(d,1-d),u()}},{abort:()=>{y&&(y.cancel(),y.effect=null,y.onfinish=_t)},deactivate:()=>{u=_t},reset:()=>{d===0&&_?.(1,0)},t:()=>V()}}function yr(i,r,c=r){var d=()=>{c(i.volume)};r()==null&&d(),Qe(i,["volumechange"],d,!1),ce(()=>{var u=Number(r());u!==i.volume&&!isNaN(u)&&(i.volume=u)})}function xr(i,r,c=r){var d=()=>{c(i.muted)};r()==null&&d(),Qe(i,["volumechange"],d,!1),ce(()=>{var u=!!r();i.muted!==u&&(i.muted=u)})}function He(i,r){return i===r||i?.[lr]===r}function le(i={},r,c,d){return Ue(()=>{var u,m;return ce(()=>{u=m,m=[],Xe(()=>{i!==c(...m)&&(r(i,...m),u&&He(c(...u),i)&&r(null,...u))})}),()=>{Je(()=>{m&&He(c(...m),i)&&r(null,...m)})}}),i}function _r(i){const r=i-1;return r*r*r+1}function wr(i,{delay:r=0,duration:c=400,easing:d=_r,axis:u="y"}={}){const m=getComputedStyle(i),T=+m.opacity,M=u==="y"?"height":"width",X=parseFloat(m[M]),g=u==="y"?["top","bottom"]:["left","right"],_=g.map(v=>`${v[0].toUpperCase()}${v.slice(1)}`),k=parseFloat(m[`padding${_[0]}`]),D=parseFloat(m[`padding${_[1]}`]),j=parseFloat(m[`margin${_[0]}`]),V=parseFloat(m[`margin${_[1]}`]),y=parseFloat(m[`border${_[0]}Width`]),w=parseFloat(m[`border${_[1]}Width`]);return{delay:r,duration:c,easing:d,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*T};${M}: ${v*X}px;padding-${g[0]}: ${v*k}px;padding-${g[1]}: ${v*D}px;margin-${g[0]}: ${v*j}px;margin-${g[1]}: ${v*V}px;border-${g[0]}-width: ${v*y}px;border-${g[1]}-width: ${v*w}px;min-${M}: 0`}}var kr=it('<div class="fixed bottom-20 right-4 z-60 max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Pr=it('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),Er=it('<span class="text-sm text-(--content-meta)"></span>'),Sr=it('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-(--btn-regular-bg) shrink-0"><img loading="lazy" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),Fr=it('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-(--line-divider)"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar"></div></div>'),Tr=it(`<!> <div><div role="button" tabindex="0"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden shrink-0"><img/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-(--primary) rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <!></div> <style>.orb-player {
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
}</style>`,1),Mr=it('<audio preload="auto"></audio> <!>',1);function Or(i,r){cr(r,!1);let c=F(!1),d=F(!1),u=F(!1),m=F(!1),T=F(0),M=F(0);const X="music-player-volume";let g=F(.7),_=F(!1),k=F(!1),D=F(!1),j=F(0),V=F(""),y=F(!1),w=F({title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0}),v=F([]),P=F(0),x=F(),tt=F(),B=F();const ft=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}];function Pt(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(X);e!==null&&!isNaN(parseFloat(e))&&o(g,parseFloat(e))}}catch(e){console.warn("Failed to load volume settings from localStorage:",e)}}function Et(){try{typeof localStorage<"u"&&localStorage.setItem(X,t(g).toString())}catch(e){console.warn("Failed to save volume settings to localStorage:",e)}}function G(){!t(x)||!t(w).url||(t(c)?t(x).pause():t(x).play().catch(()=>{}))}function St(){o(d,!t(d)),t(d)&&(o(m,!1),o(u,!1))}function Ft(){o(u,!t(u)),t(u)&&(o(d,!1),o(m,!1))}function ue(){o(m,!t(m))}function ta(){o(D,!t(D)),t(D)&&o(j,0)}function ea(){o(j,(t(j)+1)%3),t(j)!==0&&o(D,!1)}function aa(){if(t(v).length<=1)return;const e=t(P)>0?t(P)-1:t(v).length-1;Tt(e)}function Ot(e=!0){if(t(v).length<=1)return;let E;if(t(D))do E=Math.floor(Math.random()*t(v).length);while(E===t(P)&&t(v).length>1);else E=t(P)<t(v).length-1?t(P)+1:0;Tt(E,e)}let Wt=!1;function Tt(e,E=!0){e<0||e>=t(v).length||(Wt=E,o(P,e),de(t(v)[t(P)]))}function Mt(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/${e}`}function de(e){e&&e.url!==t(w).url&&(o(w,{...e}),e.url?o(k,!0):o(k,!1))}let Yt=!1;function ra(){if(o(k,!1),t(x)?.duration&&t(x).duration>1&&(o(M,Math.floor(t(x).duration)),t(v)[t(P)]&&kt(v,t(v)[t(P)].duration=t(M)),kt(w,t(w).duration=t(M))),Wt||t(c)){const e=t(x).play();e!==void 0&&e.catch(E=>{console.warn("自动播放被拦截，等待用户交互:",E),Yt=!0,o(c,!1)})}}function ve(){if(Yt&&t(x)){const e=t(x).play();e!==void 0&&e.then(()=>{Yt=!1}).catch(()=>{})}}function ia(e){if(!t(w).url)return;o(k,!1),qt(z(N.musicPlayerErrorSong));const E=t(c)||Wt;t(v).length>1?setTimeout(()=>Ot(E),1e3):qt(z(N.musicPlayerErrorEmpty))}function sa(){}function na(){t(j)===1?(kt(x,t(x).currentTime=0),t(x).play().catch(()=>{})):t(j)===2||t(D)?Ot(!0):o(c,!1)}function qt(e){o(V,e),o(y,!0),setTimeout(()=>{o(y,!1)},3e3)}function la(){o(y,!1)}function oa(e){if(!t(x)||!t(tt))return;const E=t(tt).getBoundingClientRect(),It=(e.clientX-E.left)/E.width*t(M);kt(x,t(x).currentTime=It),o(T,It)}let Ct=F(!1),jt=!1,Kt=null,st=null;function ca(e){t(B)&&(e.preventDefault(),jt=!0,t(B).setPointerCapture(e.pointerId),Kt=t(B).getBoundingClientRect(),fe(e.clientX))}function ua(e){jt&&(e.preventDefault(),o(Ct,!0),!st&&(st=requestAnimationFrame(()=>{fe(e.clientX),st=null})))}function da(e){jt&&(jt=!1,o(Ct,!1),Kt=null,t(B)&&t(B).releasePointerCapture(e.pointerId),st&&(cancelAnimationFrame(st),st=null),Et())}function fe(e){if(!t(x)||!t(B))return;const E=Kt||t(B).getBoundingClientRect(),et=Math.max(0,Math.min(1,(e-E.left)/E.width));o(g,et)}function me(){o(_,!t(_))}function pe(e){if(!Number.isFinite(e)||e<0)return"0:00";const E=Math.floor(e/60),et=Math.floor(e%60);return`${E}:${et.toString().padStart(2,"0")}`}const ge=["click","keydown","touchstart"];Qa(()=>{Pt(),ge.forEach(e=>{document.addEventListener(e,ve,{capture:!0})}),o(v,[...ft]),t(v).length>0?de(t(v)[0]):qt("本地播放列表为空")}),Za(()=>{typeof document<"u"&&ge.forEach(e=>{document.removeEventListener(e,ve,{capture:!0})})}),tr();var be=Mr();f("pointermove",We,ua),f("pointerup",We,da);var O=Z(be);le(O,e=>o(x,e),()=>t(x));var va=p(O,2);{var fa=e=>{var E=Tr(),et=Z(E);{var It=a=>{var h=kr(),S=n(h),I=n(S);b(I,{icon:"material-symbols:error",class:"text-xl shrink-0"});var A=p(I,2),l=n(A,!0);s(A);var q=p(A,2),ut=n(q);b(ut,{icon:"material-symbols:close",class:"text-lg"}),s(q),s(S),s(h),wt(()=>H(l,t(V))),f("click",q,la),$(a,h)};L(et,a=>{t(y)&&a(It)})}var Ht=p(et,2);let he;var at=n(Ht);let ye;var ma=n(at);{var pa=a=>{b(a,{icon:"eos-icons:loading",class:"text-white text-lg"})},ga=a=>{var h=vt(),S=Z(h);{var I=l=>{var q=Pr();$(l,q)},A=l=>{b(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};L(S,l=>{t(c)?l(I):l(A,!1)},!0)}$(a,h)};L(ma,a=>{t(k)?a(pa):a(ga,!1)})}s(at);var At=p(at,2);let xe;var _e=n(At),nt=n(_e),Dt=n(nt);let we;var ke=p(Dt,2),ba=n(ke);{var ha=a=>{b(a,{icon:"eos-icons:loading",class:"text-white text-xl"})},ya=a=>{var h=vt(),S=Z(h);{var I=l=>{b(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},A=l=>{b(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};L(S,l=>{t(c)?l(I):l(A,!1)},!0)}$(a,h)};L(ba,a=>{t(k)?a(ha):a(ya,!1)})}s(ke),s(nt);var lt=p(nt,2),Ut=n(lt),xa=n(Ut,!0);s(Ut);var Pe=p(Ut,2),_a=n(Pe,!0);s(Pe),s(lt);var Ee=p(lt,2),mt=n(Ee),wa=n(mt);b(wa,{icon:"material-symbols:visibility-off",class:"text-lg"}),s(mt);var Xt=p(mt,2),ka=n(Xt);b(ka,{icon:"material-symbols:expand-less",class:"text-lg"}),s(Xt),s(Ee),s(_e),s(At);var Lt=p(At,2);let Se;var Gt=n(Lt),Jt=n(Gt),Qt=n(Jt);let Fe;s(Jt);var Zt=p(Jt,2),te=n(Zt),Pa=n(te,!0);s(te);var ee=p(te,2),Ea=n(ee,!0);s(ee);var Te=p(ee,2),Sa=n(Te);s(Te),s(Zt);var Me=p(Zt,2),pt=n(Me),Fa=n(pt);b(Fa,{icon:"material-symbols:visibility-off",class:"text-lg"}),s(pt);var gt=p(pt,2);let Ce;var Ta=n(gt);b(Ta,{icon:"material-symbols:queue-music",class:"text-lg"}),s(gt),s(Me),s(Gt);var ae=p(Gt,2),rt=n(ae),Ma=n(rt);s(rt),le(rt,a=>o(tt,a),()=>t(tt)),s(ae);var re=p(ae,2),ot=n(re);let je;var Ca=n(ot);b(Ca,{icon:"material-symbols:shuffle",class:"text-lg"}),s(ot);var bt=p(ot,2),ja=n(bt);b(ja,{icon:"material-symbols:skip-previous",class:"text-xl"}),s(bt);var ct=p(bt,2);let Ie;var Ia=n(ct);{var Aa=a=>{b(a,{icon:"eos-icons:loading",class:"text-xl"})},Da=a=>{var h=vt(),S=Z(h);{var I=l=>{b(l,{icon:"material-symbols:pause",class:"text-xl"})},A=l=>{b(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};L(S,l=>{t(c)?l(I):l(A,!1)},!0)}$(a,h)};L(Ia,a=>{t(k)?a(Aa):a(Da,!1)})}s(ct);var ht=p(ct,2),La=n(ht);b(La,{icon:"material-symbols:skip-next",class:"text-xl"}),s(ht);var Nt=p(ht,2);let Ae;var Na=n(Nt);{var za=a=>{b(a,{icon:"material-symbols:repeat-one",class:"text-lg"})},Ra=a=>{var h=vt(),S=Z(h);{var I=l=>{b(l,{icon:"material-symbols:repeat",class:"text-lg"})},A=l=>{b(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};L(S,l=>{t(j)===2?l(I):l(A,!1)},!0)}$(a,h)};L(Na,a=>{t(j)===1?a(za):a(Ra,!1)})}s(Nt),s(re);var De=p(re,2),zt=n(De),Va=n(zt);{var $a=a=>{b(a,{icon:"material-symbols:volume-off",class:"text-lg"})},Ba=a=>{var h=vt(),S=Z(h);{var I=l=>{b(l,{icon:"material-symbols:volume-down",class:"text-lg"})},A=l=>{b(l,{icon:"material-symbols:volume-up",class:"text-lg"})};L(S,l=>{t(g)<.5?l(I):l(A,!1)},!0)}$(a,h)};L(Va,a=>{t(_)||t(g)===0?a($a):a(Ba,!1)})}s(zt);var J=p(zt,2),Le=n(J);let Ne;s(J),le(J,a=>o(B,a),()=>t(B));var Rt=p(J,2),Oa=n(Rt);b(Oa,{icon:"material-symbols:expand-more",class:"text-lg"}),s(Rt),s(De),s(Lt);var Wa=p(Lt,2);{var Ya=a=>{var h=Fr(),S=n(h),I=n(S),A=n(I,!0);s(I);var l=p(I,2),q=n(l);b(q,{icon:"material-symbols:close",class:"text-lg"}),s(l),s(S);var ut=p(S,2);vr(ut,5,()=>t(v),fr,(yt,Q,W)=>{var K=Sr();let Vt;var xt=n(K),ie=n(xt);{var qa=Y=>{b(Y,{icon:"material-symbols:graphic-eq",class:"text-(--primary) animate-pulse"})},Ka=Y=>{var Be=vt(),Xa=Z(Be);{var Ga=dt=>{b(dt,{icon:"material-symbols:pause",class:"text-(--primary)"})},Ja=dt=>{var Oe=Er();Oe.textContent=W+1,$(dt,Oe)};L(Xa,dt=>{W===t(P)?dt(Ga):dt(Ja,!1)},!0)}$(Y,Be)};L(ie,Y=>{W===t(P)&&t(c)?Y(qa):Y(Ka,!1)})}s(xt);var se=p(xt,2),ze=n(se);s(se);var Re=p(se,2),$t=n(Re);let Ve;var Ha=n($t,!0);s($t);var ne=p($t,2);let $e;var Ua=n(ne,!0);s(ne),s(Re),s(K),wt(Y=>{Vt=R(K,1,"playlist-item flex items-center gap-3 p-3 hover:bg-(--btn-plain-bg-hover) cursor-pointer transition-colors",null,Vt,{"bg-[var(--btn-plain-bg)]":W===t(P),"text-[var(--primary)]":W===t(P)}),C(K,"aria-label",`播放 ${t(Q).title??""} - ${t(Q).artist??""}`),C(ze,"src",Y),C(ze,"alt",t(Q).title),Ve=R($t,1,"font-medium truncate",null,Ve,{"text-[var(--primary)]":W===t(P),"text-90":W!==t(P)}),H(Ha,t(Q).title),$e=R(ne,1,"text-sm text-(--content-meta) truncate",null,$e,{"text-[var(--primary)]":W===t(P)}),H(Ua,t(Q).artist)},[()=>Mt(t(Q).cover)]),f("click",K,()=>Tt(W)),f("keydown",K,Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),Tt(W))}),$(yt,K)}),s(ut),s(h),wt(yt=>H(A,yt),[()=>z(N.musicPlayerPlaylist)]),f("click",l,ue),hr(3,h,()=>wr,()=>({duration:300,axis:"y"})),$(a,h)};L(Wa,a=>{t(m)&&a(Ya)})}s(Ht),ur(2),wt((a,h,S,I,A,l,q,ut,yt,Q,W,K,Vt,xt,ie)=>{he=R(Ht,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,he,{expanded:t(d),"hidden-mode":t(u)}),ye=R(at,1,"orb-player w-12 h-12 bg-(--primary) rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ye,{"opacity-0":!t(u),"scale-0":!t(u),"pointer-events-none":!t(u)}),C(at,"aria-label",a),xe=R(At,1,"mini-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,xe,{"opacity-0":t(d)||t(u),"scale-95":t(d)||t(u),"pointer-events-none":t(d)||t(u)}),C(nt,"aria-label",h),C(Dt,"src",S),C(Dt,"alt",I),we=R(Dt,1,"w-full h-full object-cover transition-transform duration-300",null,we,{spinning:t(c)&&!t(k),"animate-pulse":t(k)}),C(lt,"aria-label",A),H(xa,t(w).title),H(_a,t(w).artist),C(mt,"title",l),Se=R(Lt,1,"expanded-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,Se,{"opacity-0":!t(d),"scale-95":!t(d),"pointer-events-none":!t(d)}),C(Qt,"src",q),C(Qt,"alt",ut),Fe=R(Qt,1,"w-full h-full object-cover transition-transform duration-300",null,Fe,{spinning:t(c)&&!t(k),"animate-pulse":t(k)}),H(Pa,t(w).title),H(Ea,t(w).artist),H(Sa,`${yt??""} / ${Q??""}`),C(pt,"title",W),Ce=R(gt,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,Ce,{"text-[var(--primary)]":t(m)}),C(gt,"title",K),C(rt,"aria-label",Vt),C(rt,"aria-valuenow",t(M)>0?t(T)/t(M)*100:0),Ye(Ma,`width: ${t(M)>0?t(T)/t(M)*100:0}%`),je=R(ot,1,"w-10 h-10 rounded-lg",null,je,{"btn-regular":t(D),"btn-plain":!t(D)}),ot.disabled=t(v).length<=1,bt.disabled=t(v).length<=1,Ie=R(ct,1,"btn-regular w-12 h-12 rounded-full",null,Ie,{"opacity-50":t(k)}),ct.disabled=t(k),ht.disabled=t(v).length<=1,Ae=R(Nt,1,"w-10 h-10 rounded-lg",null,Ae,{"btn-regular":t(j)>0,"btn-plain":t(j)===0}),C(J,"aria-label",xt),C(J,"aria-valuenow",t(g)*100),Ne=R(Le,1,"h-full bg-(--primary) rounded-full transition-all",null,Ne,{"duration-100":!t(Ct),"duration-0":t(Ct)}),Ye(Le,`width: ${t(g)*100}%`),C(Rt,"title",ie)},[()=>z(N.musicPlayerShow),()=>t(c)?z(N.musicPlayerPause):z(N.musicPlayerPlay),()=>Mt(t(w).cover),()=>z(N.musicPlayerCover),()=>z(N.musicPlayerExpand),()=>z(N.musicPlayerHide),()=>Mt(t(w).cover),()=>z(N.musicPlayerCover),()=>pe(t(T)),()=>pe(t(M)),()=>z(N.musicPlayerHide),()=>z(N.musicPlayerPlaylist),()=>z(N.musicPlayerProgress),()=>z(N.musicPlayerVolume),()=>z(N.musicPlayerCollapse)]),f("click",at,Ft),f("keydown",at,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),Ft())}),f("click",nt,G),f("keydown",nt,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),G())}),f("click",lt,St),f("keydown",lt,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),St())}),f("click",mt,qe(Ft)),f("click",Xt,qe(St)),f("click",pt,Ft),f("click",gt,ue),f("click",rt,oa),f("keydown",rt,a=>{if(a.key==="Enter"||a.key===" "){a.preventDefault();const S=.5*t(M);t(x)&&(kt(x,t(x).currentTime=S),o(T,S))}}),f("click",ot,ta),f("click",bt,aa),f("click",ct,G),f("click",ht,()=>Ot()),f("click",Nt,ea),f("click",zt,me),f("pointerdown",J,ca),f("keydown",J,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.key==="Enter"&&me())}),f("click",Rt,St),$(e,E)};L(va,e=>{e(fa)})}wt(e=>C(O,"src",e),[()=>Mt(t(w).url)]),yr(O,()=>t(g),e=>o(g,e)),xr(O,()=>t(_),e=>o(_,e)),f("play",O,()=>o(c,!0)),f("pause",O,()=>o(c,!1)),f("timeupdate",O,()=>o(T,t(x).currentTime)),f("ended",O,na),f("error",O,ia),f("loadeddata",O,ra),f("loadstart",O,sa),$(i,be),or()}export{Or as default};
