import{a as ei,c as ti,q as ni,r as ii}from"./chunk-6VX4UV4T.js";import{$ as E,$a as Sn,$b as Vn,Aa as Ue,B as dn,Ba as Fe,Bb as ye,C as ft,Cb as it,D as Dt,Da as ze,E as Ke,Ea as ke,F as C,Fa as ve,Fb as Nn,Gb as Gt,H as K,Ha as vt,I as Q,Ia as Ct,J as mn,Ja as He,K as hn,Ka as Cn,L as Qe,La as A,M as un,Ma as yn,Mb as Pn,N as At,Na as x,O as gt,Oa as le,P as ce,Pa as V,Pb as Gn,Q as pn,Qb as Et,R as fn,Ra as Tn,Rb as Lt,Sa as yt,Sb as Ln,T as xe,Tb as Bn,Ua as En,Ub as Bt,V as _,Va as Mn,Vb as Un,W as Rt,Wa as pe,Wb as Fn,X as gn,Xa as fe,Xb as zn,Yb as Hn,_a as X,_b as Wn,a as F,aa as Nt,ab as Pt,b as me,ba as bt,bb as G,bc as jn,c as he,ca as bn,cb as Tt,d as Pi,da as _n,dc as ot,ea as _t,f as Be,fc as qn,gb as We,gc as Xn,h as ue,ha as Je,hb as Ce,hc as $n,i as Oe,ia as H,ib as On,ic as Zn,ja as W,ka as xn,l as on,la as xt,lb as In,lc as we,m as se,ma as et,mb as wn,mc as Yn,na as tt,nc as qe,o as ut,oa as S,ob as Ve,oc as Kn,pa as p,pc as Ut,qa as f,qc as Qn,r as te,ra as L,sa as nt,sc as Jn,t as Ie,ta as kt,tb as Dn,u as an,uc as oi,v as pt,va as kn,w as rn,wa as J,x as sn,xa as vn,xb as je,y as cn,ya as O,yb as An,z as ln,za as I,zb as Rn}from"./chunk-KPH4HGCN.js";var ci=he((si,Ht)=>{"use strict";(function(n,o,e){function t(a){var l=this,h=s();l.next=function(){var d=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=d-(l.c=d|0)},l.c=1,l.s0=h(" "),l.s1=h(" "),l.s2=h(" "),l.s0-=h(a),l.s0<0&&(l.s0+=1),l.s1-=h(a),l.s1<0&&(l.s1+=1),l.s2-=h(a),l.s2<0&&(l.s2+=1),h=null}function i(a,l){return l.c=a.c,l.s0=a.s0,l.s1=a.s1,l.s2=a.s2,l}function r(a,l){var h=new t(a),d=l&&l.state,m=h.next;return m.int32=function(){return h.next()*4294967296|0},m.double=function(){return m()+(m()*2097152|0)*11102230246251565e-32},m.quick=m,d&&(typeof d=="object"&&i(d,h),m.state=function(){return i(h,{})}),m}function s(){var a=4022871197,l=function(h){h=String(h);for(var d=0;d<h.length;d++){a+=h.charCodeAt(d);var m=.02519603282416938*a;a=m>>>0,m-=a,m*=a,a=m>>>0,m-=a,a+=m*4294967296}return(a>>>0)*23283064365386963e-26};return l}o&&o.exports?o.exports=r:e&&e.amd?e(function(){return r}):this.alea=r})(si,typeof Ht=="object"&&Ht,typeof define=="function"&&define)});var di=he((li,Wt)=>{"use strict";(function(n,o,e){function t(s){var a=this,l="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var d=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^d^d>>>8},s===(s|0)?a.x=s:l+=s;for(var h=0;h<l.length+64;h++)a.x^=l.charCodeAt(h)|0,a.next()}function i(s,a){return a.x=s.x,a.y=s.y,a.z=s.z,a.w=s.w,a}function r(s,a){var l=new t(s),h=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var m=l.next()>>>11,u=(l.next()>>>0)/4294967296,g=(m+u)/(1<<21);while(g===0);return g},d.int32=l.next,d.quick=d,h&&(typeof h=="object"&&i(h,l),d.state=function(){return i(l,{})}),d}o&&o.exports?o.exports=r:e&&e.amd?e(function(){return r}):this.xor128=r})(li,typeof Wt=="object"&&Wt,typeof define=="function"&&define)});var hi=he((mi,Vt)=>{"use strict";(function(n,o,e){function t(s){var a=this,l="";a.next=function(){var d=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(d^d<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,s===(s|0)?a.x=s:l+=s;for(var h=0;h<l.length+64;h++)a.x^=l.charCodeAt(h)|0,h==l.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function i(s,a){return a.x=s.x,a.y=s.y,a.z=s.z,a.w=s.w,a.v=s.v,a.d=s.d,a}function r(s,a){var l=new t(s),h=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var m=l.next()>>>11,u=(l.next()>>>0)/4294967296,g=(m+u)/(1<<21);while(g===0);return g},d.int32=l.next,d.quick=d,h&&(typeof h=="object"&&i(h,l),d.state=function(){return i(l,{})}),d}o&&o.exports?o.exports=r:e&&e.amd?e(function(){return r}):this.xorwow=r})(mi,typeof Vt=="object"&&Vt,typeof define=="function"&&define)});var pi=he((ui,jt)=>{"use strict";(function(n,o,e){function t(s){var a=this;a.next=function(){var h=a.x,d=a.i,m,u,g;return m=h[d],m^=m>>>7,u=m^m<<24,m=h[d+1&7],u^=m^m>>>10,m=h[d+3&7],u^=m^m>>>3,m=h[d+4&7],u^=m^m<<7,m=h[d+7&7],m=m^m<<13,u^=m^m<<9,h[d]=u,a.i=d+1&7,u};function l(h,d){var m,u,g=[];if(d===(d|0))u=g[0]=d;else for(d=""+d,m=0;m<d.length;++m)g[m&7]=g[m&7]<<15^d.charCodeAt(m)+g[m+1&7]<<13;for(;g.length<8;)g.push(0);for(m=0;m<8&&g[m]===0;++m);for(m==8?u=g[7]=-1:u=g[m],h.x=g,h.i=0,m=256;m>0;--m)h.next()}l(a,s)}function i(s,a){return a.x=s.x.slice(),a.i=s.i,a}function r(s,a){s==null&&(s=+new Date);var l=new t(s),h=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var m=l.next()>>>11,u=(l.next()>>>0)/4294967296,g=(m+u)/(1<<21);while(g===0);return g},d.int32=l.next,d.quick=d,h&&(h.x&&i(h,l),d.state=function(){return i(l,{})}),d}o&&o.exports?o.exports=r:e&&e.amd?e(function(){return r}):this.xorshift7=r})(ui,typeof jt=="object"&&jt,typeof define=="function"&&define)});var gi=he((fi,qt)=>{"use strict";(function(n,o,e){function t(s){var a=this;a.next=function(){var h=a.w,d=a.X,m=a.i,u,g;return a.w=h=h+1640531527|0,g=d[m+34&127],u=d[m=m+1&127],g^=g<<13,u^=u<<17,g^=g>>>15,u^=u>>>12,g=d[m]=g^u,a.i=m,g+(h^h>>>16)|0};function l(h,d){var m,u,g,q,be,ae=[],$e=128;for(d===(d|0)?(u=d,d=null):(d=d+"\0",u=0,$e=Math.max($e,d.length)),g=0,q=-32;q<$e;++q)d&&(u^=d.charCodeAt((q+32)%d.length)),q===0&&(be=u),u^=u<<10,u^=u>>>15,u^=u<<4,u^=u>>>13,q>=0&&(be=be+1640531527|0,m=ae[q&127]^=u+be,g=m==0?g+1:0);for(g>=128&&(ae[(d&&d.length||0)&127]=-1),g=127,q=512;q>0;--q)u=ae[g+34&127],m=ae[g=g+1&127],u^=u<<13,m^=m<<17,u^=u>>>15,m^=m>>>12,ae[g]=u^m;h.w=be,h.X=ae,h.i=g}l(a,s)}function i(s,a){return a.i=s.i,a.w=s.w,a.X=s.X.slice(),a}function r(s,a){s==null&&(s=+new Date);var l=new t(s),h=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var m=l.next()>>>11,u=(l.next()>>>0)/4294967296,g=(m+u)/(1<<21);while(g===0);return g},d.int32=l.next,d.quick=d,h&&(h.X&&i(h,l),d.state=function(){return i(l,{})}),d}o&&o.exports?o.exports=r:e&&e.amd?e(function(){return r}):this.xor4096=r})(fi,typeof qt=="object"&&qt,typeof define=="function"&&define)});var _i=he((bi,Xt)=>{"use strict";(function(n,o,e){function t(s){var a=this,l="";a.next=function(){var d=a.b,m=a.c,u=a.d,g=a.a;return d=d<<25^d>>>7^m,m=m-u|0,u=u<<24^u>>>8^g,g=g-d|0,a.b=d=d<<20^d>>>12^m,a.c=m=m-u|0,a.d=u<<16^m>>>16^g,a.a=g-d|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,s===Math.floor(s)?(a.a=s/4294967296|0,a.b=s|0):l+=s;for(var h=0;h<l.length+20;h++)a.b^=l.charCodeAt(h)|0,a.next()}function i(s,a){return a.a=s.a,a.b=s.b,a.c=s.c,a.d=s.d,a}function r(s,a){var l=new t(s),h=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var m=l.next()>>>11,u=(l.next()>>>0)/4294967296,g=(m+u)/(1<<21);while(g===0);return g},d.int32=l.next,d.quick=d,h&&(typeof h=="object"&&i(h,l),d.state=function(){return i(l,{})}),d}o&&o.exports?o.exports=r:e&&e.amd?e(function(){return r}):this.tychei=r})(bi,typeof Xt=="object"&&Xt,typeof define=="function"&&define)});var xi=he(()=>{"use strict"});var vi=he((ki,It)=>{"use strict";(function(n,o,e){var t=256,i=6,r=52,s="random",a=e.pow(t,i),l=e.pow(2,r),h=l*2,d=t-1,m;function u(T,M,z){var P=[];M=M==!0?{entropy:!0}:M||{};var D=ae(be(M.entropy?[T,Ze(o)]:T??$e(),3),P),Z=new g(P),ee=function(){for(var Y=Z.g(i),de=a,re=0;Y<l;)Y=(Y+re)*t,de*=t,re=Z.g(1);for(;Y>=h;)Y/=2,de/=2,re>>>=1;return(Y+re)/de};return ee.int32=function(){return Z.g(4)|0},ee.quick=function(){return Z.g(4)/4294967296},ee.double=ee,ae(Ze(Z.S),o),(M.pass||z||function(Y,de,re,_e){return _e&&(_e.S&&q(_e,Z),Y.state=function(){return q(Z,{})}),re?(e[s]=Y,de):Y})(ee,D,"global"in M?M.global:this==e,M.state)}function g(T){var M,z=T.length,P=this,D=0,Z=P.i=P.j=0,ee=P.S=[];for(z||(T=[z++]);D<t;)ee[D]=D++;for(D=0;D<t;D++)ee[D]=ee[Z=d&Z+T[D%z]+(M=ee[D])],ee[Z]=M;(P.g=function(Y){for(var de,re=0,_e=P.i,ht=P.j,Ye=P.S;Y--;)de=Ye[_e=d&_e+1],re=re*t+Ye[d&(Ye[_e]=Ye[ht=d&ht+de])+(Ye[ht]=de)];return P.i=_e,P.j=ht,re})(t)}function q(T,M){return M.i=T.i,M.j=T.j,M.S=T.S.slice(),M}function be(T,M){var z=[],P=typeof T,D;if(M&&P=="object")for(D in T)try{z.push(be(T[D],M-1))}catch(Z){}return z.length?z:P=="string"?T:T+"\0"}function ae(T,M){for(var z=T+"",P,D=0;D<z.length;)M[d&D]=d&(P^=M[d&D]*19)+z.charCodeAt(D++);return Ze(M)}function $e(){try{var T;return m&&(T=m.randomBytes)?T=T(t):(T=new Uint8Array(t),(n.crypto||n.msCrypto).getRandomValues(T)),Ze(T)}catch(P){var M=n.navigator,z=M&&M.plugins;return[+new Date,n,z,n.screen,Ze(o)]}}function Ze(T){return String.fromCharCode.apply(0,T)}if(ae(e.random(),o),typeof It=="object"&&It.exports){It.exports=u;try{m=xi()}catch(T){}}else typeof define=="function"&&define.amd?define(function(){return u}):e["seed"+s]=u})(typeof self<"u"?self:ki,[],Math)});var yi=he((_r,Ci)=>{"use strict";var qi=ci(),Xi=di(),$i=hi(),Zi=pi(),Yi=gi(),Ki=_i(),Pe=vi();Pe.alea=qi;Pe.xor128=Xi;Pe.xorwow=$i;Pe.xorshift7=Zi;Pe.xor4096=Yi;Pe.tychei=Ki;Ci.exports=Pe});function Gi(n,o){if(n&1){let e=J();p(0,"div",1)(1,"button",2),O("click",function(){K(e);let i=I();return Q(i.action())}),x(2),f()()}if(n&2){let e=I();_(2),V(" ",e.data.action," ")}}var Li=["label"];function Bi(n,o){}var Ui=Math.pow(2,31)-1,at=class{_overlayRef;instance;containerInstance;_afterDismissed=new ue;_afterOpened=new ue;_onAction=new ue;_durationTimeoutId;_dismissedByAction=!1;constructor(o,e){this._overlayRef=e,this.containerInstance=o,o._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(o){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(o,Ui))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},ai=new Ke("MatSnackBarData"),Xe=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Fi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=bt({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),zi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=bt({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Hi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=bt({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Wi=(()=>{class n{snackBarRef=C(at);data=C(ai);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(p(0,"div",0),x(1),f(),H(2,Gi,3,1,"div",1)),t&2&&(_(),V(" ",i.data.message,`
`),_(),W(i.hasAction?2:-1))},dependencies:[qe,Fi,zi,Hi],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ft="_mat-snack-bar-enter",zt="_mat-snack-bar-exit",Vi=(()=>{class n extends Bn{_ngZone=C(gt);_elementRef=C(xe);_changeDetectorRef=C(We);_platform=C(Rn);_animationsDisabled=ot();snackBarConfig=C(Xe);_document=C(un);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=C(Qe);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ue;_onExit=new ue;_onEnter=new ue;_animationState="void";_live;_label;_role;_liveElementId=C(Et).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===zt?this._completeExit():e===Ft&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Rt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ft)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Ft)},200)))}exit(){return this._destroyed?on(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Rt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(zt)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(zt),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(s=>e.classList.add(s)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,r="mdc-snackbar__label";i.classList.toggle(r,!i.querySelector(`.${r}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let r=t[i],s=r.getAttribute("aria-owns");this._trackedModals.add(r),s?s.indexOf(e)===-1&&r.setAttribute("aria-owns",s+" "+e):r.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(t&&i){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(r=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&ze(Bt,7)(Li,7),t&2){let r;ke(r=ve())&&(i._portalOutlet=r.first),ke(r=ve())&&(i._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,i){t&1&&O("animationend",function(s){return i.onAnimationEnd(s.animationName)})("animationcancel",function(s){return i.onAnimationEnd(s.animationName)}),t&2&&A("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[_n],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(p(0,"div",1)(1,"div",2,0)(3,"div",3),_t(4,Bi,0,0,"ng-template",4),f(),L(5,"div"),f()()),t&2&&(_(5),Je("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[Bt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),ji=new Ke("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Xe}),ri=(()=>{class n{_live=C(Wn);_injector=C(Qe);_breakpointObserver=C(Hn);_parentSnackBar=C(n,{optional:!0,skipSelf:!0});_defaultConfig=C(ji);_animationsDisabled=ot();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Wi;snackBarContainerComponent=Vi;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let r=F(F({},this._defaultConfig),i);return r.data={message:e,action:t},r.announcementMessage===e&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=Qe.create({parent:i||this._injector,providers:[{provide:Xe,useValue:t}]}),s=new Lt(this.snackBarContainerComponent,t.viewContainerRef,r),a=e.attach(s);return a.instance.snackBarConfig=t,a.instance}_attach(e,t){let i=F(F(F({},new Xe),this._defaultConfig),t),r=this._createOverlay(i),s=this._attachSnackBarContainer(r,i),a=new at(s,r);if(e instanceof gn){let l=new Ln(e,null,{$implicit:i.data,snackBarRef:a});a.instance=s.attachTemplatePortal(l)}else{let l=this._createInjector(i,a),h=new Lt(e,void 0,l),d=s.attachComponentPortal(h);a.instance=d.instance}return this._breakpointObserver.observe(jn.HandsetPortrait).pipe(cn(r.detachments())).subscribe(l=>{r.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),i.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(a,i),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Un;t.direction=e.direction;let i=Fn(this._injector),r=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!r||e.horizontalPosition==="end"&&r,a=!s&&e.horizontalPosition!=="center";return s?i.left("0"):a?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,zn(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Qe.create({parent:i||this._injector,providers:[{provide:at,useValue:t},{provide:ai,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ne=class{constructor(o){this.tile=o}isOccupyingFor(o){return!1}onCarMove(o){}};var c=(()=>{class n{static{this.ROW_COUNT=15}static{this.COLUMN_COUNT=30}static unit(e=1){return this.size*e}static resize(){this.size=Te.getMaxTileSize(this.ROW_COUNT,this.COLUMN_COUNT)}}return n})();var B=(function(n){return n[n.UP=0]="UP",n[n.RIGHT=1]="RIGHT",n[n.DOWN=2]="DOWN",n[n.LEFT=3]="LEFT",n})(B||{});var Ee=(()=>{class n{static{this.pool=[]}static{this.SIZE_TILE_RATIO=.25}static{this.COLLISION_DISTANCE=.2}static{this.OFFROAD_SPEED_MULTIPLIER=.25}static get SIZE(){return c.unit(this.SIZE_TILE_RATIO)}static tickAll(e,t){this.pool.forEach(i=>i.tick(e,t)),this.pool.forEach(i=>{this.pool.forEach(r=>{i!==r&&n.checkCollision(i,r)})})}static drawAll(e){this.pool.forEach(t=>t.draw(e))}static checkCollision(e,t){(e.x-t.x)**2+(e.y-t.y)**2<=n.COLLISION_DISTANCE**2&&(n.pool.splice(n.pool.indexOf(e),1),n.pool.splice(n.pool.indexOf(t),1))}constructor(e,t){this.color=t,this.currentDirection=B.UP,this.locked=!1,this.moved=!1,this.x=e.x+.5,this.y=e.y+.5,this.destinationTile={x:e.x,y:e.y},e.tileAction(this),n.pool.push(this)}getTile(e){return e[Math.floor(this.x)][Math.floor(this.y)]}setDestinationIn(e){this.moved||(this.currentDirection=e,this.destinationTile.x+=y.getDx(e),this.destinationTile.y+=y.getDy(e))}destroy(){n.pool.splice(n.pool.indexOf(this),1)}tick(e,t){this.move(e,t),this.getTile(t).tileAction(this)}draw(e){e.circle(c.unit(this.x),c.unit(this.y),n.SIZE/2,v.getTokenValue(R.CAR_OUTLINE)),e.circle(c.unit(this.x),c.unit(this.y),n.SIZE/2.5,this.color)}move(e,t){if(this.locked){if(!this.canEscapeTile(t))return;this.locked=!1}let i={x:this.destinationTile.x+.5,y:this.destinationTile.y+.5},r=Math.abs(this.x-i.x)+Math.abs(this.y-i.y),s=this.getTileSpeedMultiplier(t)*e;this.x+=y.getDx(this.currentDirection)*s,this.y+=y.getDy(this.currentDirection)*s,Math.abs(this.x-i.x)+Math.abs(this.y-i.y)>=r&&(this.x=i.x,this.y=i.y,this.canEscapeTile(t)?this.searchNewDestination(t):this.locked=!0),this.moved=!0}searchNewDestination(e){let t=y.getOpposite(this.currentDirection),i=y.turnRightFrom(this.currentDirection);for(let r=0;r<3;r++,i=y.turnLeftFrom(i)){let s=this.destinationTile.x+y.getDx(i),a=this.destinationTile.y+y.getDy(i),l=e[s]?.[a];if(l&&l.isUnlocked(this,e)){t=i;break}}this.currentDirection=t,this.destinationTile.x+=y.getDx(this.currentDirection),this.destinationTile.y+=y.getDy(this.currentDirection)}canEscapeTile(e){let t=!1;return this.getTile(e).forEachNeighbor(i=>{i.isUnlocked(this,e)&&(t=!0)}),t}getTileSpeedMultiplier(e){return this.getTile(e).road?.speedMultiplier??n.OFFROAD_SPEED_MULTIPLIER}}return n})();var De=class extends Error{constructor(o){super(o)}};function Ae(n){let o=Math.ceil(n*10)/10,e=String(o).includes(".")?"":".0";return o+e}function Re(n=0){return`rgba(0, 0, 0, ${n})`}var ie=class n extends ne{static{this.list=[]}static{this.STARTING_HEALTH=45}static{this.HEALTH_INCREASE=1}static{this.HEALING_PER_CAR=5}static{this.CRITICAL_HEALTH=15}static{this.DRAWN_SIZE_UNIT=.9}static{this.DRAWN_CONTENT_SIZE_RATIO=.9}static{this.CURRENT_HEALTH=n.STARTING_HEALTH}static anyWithZeroHealth(){return n.list.some(o=>o.health<=0)}constructor(o,e){super(o),this.color=e,this.carsReached=0,this._displayCarsReached$=new Oe(this.carsReached),this.health=n.CURRENT_HEALTH,n.CURRENT_HEALTH+=n.HEALTH_INCREASE,n.list.push(this)}isSpawned(){return!0}onCarMove(o){this.color===o.color&&(this.health+=n.HEALING_PER_CAR,this.carsReached++,this._displayCarsReached$.next(this.carsReached),o.destroy(),k.getInstance().emitEvent(b.GAIN_SCORE,null))}tick(o){let e=this.health;this.health-=o,this.health<n.CRITICAL_HEALTH&&e>=n.CRITICAL_HEALTH&&k.getInstance().emitEvent(b.DESTINATION_CRITICAL_HEALTH,n.CRITICAL_HEALTH)}draw(o){let e=c.unit(this.tile.x+.5),t=c.unit(this.tile.y+.5);this.tile.selected&&o.circle(e,t,c.unit(n.DRAWN_SIZE_UNIT),o.createRadialGradient(e,t,c.unit(.75),[.5,this.color],[1,Re()])),o.circle(e,t,c.unit(n.DRAWN_SIZE_UNIT/2),v.getTokenValue(R.BUILDING_OUTLINE));let i=n.DRAWN_SIZE_UNIT/2*n.DRAWN_CONTENT_SIZE_RATIO;o.circle(e,t,c.unit(i),this.color),o.text(Math.ceil(this.health)+"s",e,t,c.unit(i))}get displayCarsReached$(){return this._displayCarsReached$.asObservable()}};var rt=(()=>{class n extends ne{static{this.CAR_SPAWN_TIMER=4}constructor(e,t){super(e),this.color=t,this.timer=0,this._displayTimer$=new Oe(Ae(this.timer)),this.carsSpawned=0,this._displayCarsSpawned$=new Oe(this.carsSpawned),this.timedPause=!1}isSpawned(){return!0}tick(e){this.tile.hasRoad()&&(this.timer-=e,this.timer<0&&(this.spawnCar(),this.timer=n.CAR_SPAWN_TIMER),this.emit())}delaySpawn(e){this.timer+=e,this.emit()}draw(e){e.lineWidth=2;let t=c.unit(this.tile.x+.5),i=c.unit(this.tile.y+.5);this.tile.selected&&e.circle(t,i,c.unit(.75),e.createRadialGradient(t,i,c.unit(.5),[.5,this.color],[1,Re()])),e.circle(t,i,c.unit(.25),this.color),e.circle(t,i,c.unit(.25),v.getTokenValue(R.BUILDING_OUTLINE),!1),e.text(Math.ceil(this.timer)+"s",t,i,c.unit(.35))}get displayTimer$(){return this._displayTimer$.pipe(Ie())}get displayCarsSpawned$(){return this._displayCarsSpawned$.asObservable()}spawnCar(){let e=new Ee(this.tile,this.color);y.forEachDirection((t,i,r,s)=>{let a=this.tile.getTileInDirection(t);a&&a.isUnlocked(e,this.tile)&&(e.setDestinationIn(t),s())}),this.timedPause&&(k.getInstance().emitEvent(b.TOGGLE_PAUSE,null),k.getInstance().emitEvent(b.COMPLETE_TIMED_PAUSE,null),this.timedPause=!1),this.carsSpawned++,this._displayCarsSpawned$.next(this.carsSpawned)}emit(){this._displayTimer$.next(Ae(this.timer))}}return n})();var Mt=(()=>{class n{static{this.SPAWNER_SPAWNING_CLEAR_RANGE=5}static{this.DESTINATION_SPAWNING_CLEAR_RANGE=5}static{this.SPAWNING_PADDING=4}static spawnSpawner(e,t){let i=this.getAvailableBuildingLocationsWithIterativelySmallerClearRange(e,n.SPAWNER_SPAWNING_CLEAR_RANGE,t),r=w.nextArrayElement(i),s=new rt(r,v.getRandomGameObjectColor());r.build(s)}static spawnDestination(e,t){let i=this.getAvailableBuildingLocationsWithIterativelySmallerClearRange(e,n.DESTINATION_SPAWNING_CLEAR_RANGE,t),r=w.nextArrayElement(i),s=[...v.getGameObjectColors()].filter(h=>h!==r.color),a=w.nextArrayElement(s),l=new ie(r,a);r.build(l)}static getAvailableBuildingLocationsWithIterativelySmallerClearRange(e,t,i){for(let r=t;r>1;r--){let s=this.getAvailableBuildingLocations(e,r);if(s.length>0){if(i){let a=this.filterTilesInPadding(s);if(a.length>0)return a}return s}}throw new De("No available tiles for spawning!")}static getAvailableBuildingLocations(e,t){let i=[],r=this.getTileDistancesFromSpawnedBuildings(e);return e.forEach((s,a)=>{s.forEach((l,h)=>{r[a][h]>t&&i.push(l)})}),i}static getTileDistancesFromSpawnedBuildings(e){let t=Array.from({length:c.COLUMN_COUNT},()=>Array.from({length:c.ROW_COUNT},()=>1/0));return e.flat().filter(r=>r.hasSpawnedBuilding()).forEach(r=>{this.setDistances(t,r.x,r.y,0)}),t}static setDistances(e,t,i,r){t<0||t>=c.COLUMN_COUNT||i<0||i>=c.ROW_COUNT||e[t][i]<=r||(e[t][i]=r,y.forEachDirection((s,a,l)=>{this.setDistances(e,t+a,i+l,r+1)}))}static filterTilesInPadding(e){return e.filter(t=>t.x>=this.SPAWNING_PADDING&&t.x<c.COLUMN_COUNT-this.SPAWNING_PADDING&&t.y>=this.SPAWNING_PADDING&&t.y<c.ROW_COUNT-this.SPAWNING_PADDING)}}return n})();var Ne=(()=>{class n{static{this.THICKNESS_UNIT=.5}static{this.SEGMENT_CONNECTION_OFFSET_UNIT=.16}constructor(e,t,i){this.tile=e,this.speedMultiplier=t,this.protectsFromRain=i,this.connections={[B.UP]:!1,[B.RIGHT]:!1,[B.DOWN]:!1,[B.LEFT]:!1}}connectTo(e){let t=this.getNeighborDirection(e);t!==null&&(this.connections[t]=!0,e.connections[y.getOpposite(t)]=!0)}removeConnection(e){this.connections[e]=!1}isConnectedTo(e){let t=this.getNeighborDirection(e);return t===null?!1:this.matchTypeWith(e)||this.connections[t]}drawRoadBase(e,t,i=n.THICKNESS_UNIT){e.strokeStyle=t,e.lineWidth=c.unit(i),e.lineCap="round",e.ctx.beginPath(),e.ctx.moveTo(c.unit(this.tile.x+.5),c.unit(this.tile.y+.5)),e.ctx.lineTo(c.unit(this.tile.x+.5),c.unit(this.tile.y+.5)),y.forEachDirection((r,s,a)=>{if(!this.tile.isConnectedWithRoad(r))return;let l=r===B.UP||r===B.LEFT?1:-1,h=Math.sign(s)*n.SEGMENT_CONNECTION_OFFSET_UNIT*l,d=Math.sign(a)*n.SEGMENT_CONNECTION_OFFSET_UNIT*l;e.ctx.lineTo(c.unit(this.tile.x+.5+s/2-h),c.unit(this.tile.y+.5+a/2-d)),e.ctx.moveTo(c.unit(this.tile.x+.5),c.unit(this.tile.y+.5))}),e.ctx.stroke()}getNeighborDirection(e){let t=null;return y.forEachDirection((i,r,s,a)=>{this.tile.x+r===e.tile.x&&this.tile.y+s===e.tile.y&&(t=i,a())}),t}}return n})();var St=(()=>{class n extends Ne{static{this.SPEED_MULTIPLIER=1}constructor(e){super(e,n.SPEED_MULTIPLIER,!1)}matchTypeWith(e){return e instanceof n}draw(e){this.drawRoadBase(e,v.getTokenValue($.BASIC_ROAD))}drawRoadSegment(e,t,i,r,s){e.strokeStyle=v.getTokenValue($.BASIC_ROAD),e.line(t,i,r,s,c.unit(.5))}getName(){return"Basic road"}}return n})();var Ot=(()=>{class n extends Ne{static{this.INNER_THICKNESS_UNIT=.4}static{this.SPEED_MULTIPLIER=1}constructor(e){super(e,n.SPEED_MULTIPLIER,!0)}matchTypeWith(e){return e instanceof n}draw(e){this.drawRoadBase(e,v.getTokenValue($.TUBE_OUTLINE)),this.drawRoadBase(e,v.getTokenValue($.TUBE),n.INNER_THICKNESS_UNIT)}drawRoadSegment(e,t,i,r,s){e.strokeStyle=v.getTokenValue($.TUBE_OUTLINE),e.line(t,i,r,s,c.unit(.5)),e.strokeStyle=v.getTokenValue($.TUBE),e.line(t,i,r,s,c.unit(.4))}getName(){return"Tube"}}return n})();var st=class n{constructor(o,e){this.x=o,this.y=e,this.color=v.getBaseTileColor(),this.selected=!1,this.neighborMap={}}build(o){o instanceof ne?(!this.building||o.isSpawned())&&(this.building=o):o instanceof Ne&&!this.road&&(this.road=o)}tick(o){this.hasBuilding()&&"tick"in this.building&&typeof this.building?.tick=="function"&&this.building.tick(o)}tileAction(o){this.color!==v.getBaseTileColor()&&!this.road?.protectsFromRain&&(o.color=this.color),this.building?.onCarMove(o)}openContextMenu(){this.building&&k.getInstance().emitEvent(b.OPEN_CONTEXT_MENU,this.building)}isUnlocked(o,e){if(!this.road)return!1;let t=e instanceof n?e:o.getTile(e);return t.getConnectedRoadDirections().some(r=>t.getTileInDirection(r)===this)?!this.building?.isOccupyingFor(o):!1}connectRoadTo(o){!this.road||!o.road||this.road?.connectTo(o.road)}deleteBuilding(o){this.building&&o.isAssociatedItemSelected(this.building)?this.building=void 0:this.road&&o.isAssociatedItemSelected(this.road)&&(this.road=void 0,this.forEachNeighbor((e,t)=>{e.road&&e.road.removeConnection(y.getOpposite(t))}))}hasBuilding(){return!!this.building}hasSpawnedBuilding(){return this.hasBuilding()&&this.building.isSpawned()}hasRoad(){return!!this.road}getTileInDirection(o){return this.neighborMap[o]}assignNeighbors(o){y.forEachDirection(e=>{let t=this.x+y.getDx(e),i=this.y+y.getDy(e);t<0||t>=c.COLUMN_COUNT||i<0||i>=c.ROW_COUNT?this.neighborMap[e]=null:this.neighborMap[e]=o[t][i]})}draw(o){o.square(c.unit(this.x),c.unit(this.y),c.unit(),this.color)}drawBuilding(o){this.building&&this.building.draw(o)}drawRoad(o){this.road&&this.road.draw(o)}forEachNeighbor(o){y.forEachDirection(e=>{let t=this.getTileInDirection(e);t&&o(t,e)})}isConnectedWithRoad(o){return this.getConnectedRoadDirections().includes(o)}getConnectedRoadDirections(){let o=[];return y.forEachDirection(e=>{let t=this.getTileInDirection(e);t?.road&&this.road?.isConnectedTo(t.road)&&o.push(e)}),o}};var ct=class n{static{this.MIN_CLOUD_COVERAGE_RATIO=.6}static{this.MAX_CLOUD_COVERAGE_RATIO=.65}static{this.MIN_CLOUD_SIZE_GROWTH_CHANCE_CONSTANT=.4}static{this.MAX_CLOUD_SIZE_GROWTH_CHANCE_CONSTANT=.45}static{this.MIN_COLOR_COUNT=10}static{this.MAX_COLOR_INCREASE_COUNT=1/0}static{this.PADDING_FILTER_PAIR_LIMIT=3}constructor(){this.tiles=[],this.spawnerAndDestinationPairs=0,this.initTiles(),this.initTileColors()}tick(o){this.forEachTile(e=>e.tick(o)),Ee.tickAll(o,this.tiles)}spawnSpawnerAndDestination(){let o=this.spawnerAndDestinationPairs<n.PADDING_FILTER_PAIR_LIMIT;Mt.spawnSpawner(this.tiles,o),Mt.spawnDestination(this.tiles,o),this.spawnerAndDestinationPairs++}draw(o){o.clear(),this.forEachTile(e=>e.draw(o)),this.drawMapGrid(o),this.forEachTile(e=>e.drawRoad(o)),Ee.drawAll(o),this.forEachTile(e=>e.drawBuilding(o))}forEachTile(o){this.tiles.forEach(e=>{e.forEach(t=>{o(t)})})}initTileColors(){let o=c.ROW_COUNT*c.COLUMN_COUNT*n.MIN_CLOUD_COVERAGE_RATIO,e=c.ROW_COUNT*c.COLUMN_COUNT*n.MAX_CLOUD_COVERAGE_RATIO,t=0;for(;t<o;)t+=this.spread(this.chooseSpreadColor(),this.getRandomGrowthChanceConstant(),e-t);let i;for(;(i=this.getColorCounts()[0]).count<n.MIN_COLOR_COUNT;)this.spread(i.color,this.getRandomGrowthChanceConstant(),n.MAX_COLOR_INCREASE_COUNT,!0)}spread(o,e,t,i=!1){let r=[this.getRandomTile(i)],s=0;for(;r.length>0;){let a=r.splice(0,1)[0];if(a.color===o)continue;let l=a.color!==v.getBaseTileColor();i===l&&(a.color=o,s++,a.forEachNeighbor(h=>{s<t&&w.nextChance(e)&&r.push(h)}))}return s}chooseSpreadColor(){return w.nextArrayElement(v.getGameObjectColors())}drawMapGrid(o){o.strokeStyle=v.getTokenValue(R.GRID),o.lineCap="square",o.lineWidth=1;for(let e=1;e<c.COLUMN_COUNT;e++)o.line(c.unit(e),0,c.unit(e),c.unit(c.ROW_COUNT),1);for(let e=1;e<c.ROW_COUNT;e++)o.line(0,c.unit(e),c.unit(c.COLUMN_COUNT),c.unit(e),1)}initTiles(){for(let o=0;o<c.COLUMN_COUNT;o++){this.tiles[o]=[];for(let e=0;e<c.ROW_COUNT;e++)this.tiles[o][e]=new st(o,e)}this.tiles.flat().forEach(o=>o.assignNeighbors(this.tiles))}getColorCounts(){let o=v.getGameObjectColors().reduce((e,t)=>[...e,{color:t,count:0}],[]);return this.tiles.flat().forEach(e=>{let t=o.find(i=>i.color===e.color);t&&t.count++}),o.sort((e,t)=>e.count-t.count),o}getRandomGrowthChanceConstant(){return w.between(n.MIN_CLOUD_SIZE_GROWTH_CHANCE_CONSTANT,n.MAX_CLOUD_SIZE_GROWTH_CHANCE_CONSTANT)}getRandomTile(o){let e=v.getBaseTileColor(),t=o?i=>i.color!==e:i=>i.color===e;return w.nextArrayElement(this.tiles.flat().filter(t))}};var Ti=Pi(yi()),w=class{static registerSeed(o){this.random=(0,Ti.default)(o)}static between(o,e){if(!this.random)throw new Error("Random seed not registered!");return this.random()*(e-o)+o}static nextIntRange(o,e){return Math.floor(this.between(o,e))}static nextInt(o){return this.nextIntRange(0,o)}static nextArrayElement(o){return o[this.nextInt(o.length)]}static nextNArrayElements(o,e){if(o.length<e)throw new Error("Not enough elements in array to get N elements!");if(o.length===e)return[...o];let t=[],i=[...o];for(;t.length<e;){let r=this.nextArrayElement(i);i.remove(r),t.push(r)}return t}static nextChance(o=.5){if(!this.random)throw new Error("Random seed not registered!");return this.random()<o}};var lt=class{static cleanUp(){ie.list.splice(0),oe.instance.set(null),Ee.pool.splice(0),w.random=void 0,k.clean()}};var $t=(()=>{class n{static{this.GAME_CANVAS_ELEMENT_CLASS="game-canvas"}static isGameCanvasElement(e){return e instanceof HTMLCanvasElement&&e.classList.contains(this.GAME_CANVAS_ELEMENT_CLASS)}}return n})();var R=(function(n){return n.GRID="--rd-game-grid-color",n.BUILDING_OUTLINE="--rd-game-building-outline-color",n.CAR_OUTLINE="--rd-game-car-outline-color",n.TEXT="--rd-game-text-color",n.WARN="--rd-game-warn-color",n})(R||{}),$=(function(n){return n.BASIC_ROAD="--rd-game-basic-road-color",n.TUBE_OUTLINE="--rd-game-tube-outline-color",n.TUBE="--rd-game-tube-color",n.TIMED_GATE_OPEN="--rd-game-timed-gate-open-color",n.TIMED_GATE_CLOSED="--rd-game-timed-gate-closed-color",n})($||{}),v=(()=>{class n{static{this.propertyValueCache={}}static getTokenValue(e){return this.getPropertyValue(e)}static getBaseTileColor(){return this.getPropertyValue("--rd-game-tile-color-base")}static getGameObjectColors(){let e=[],t;for(let i=1;t=this.getPropertyValue(`--rd-game-tile-color-${i}`),!!t;i++)e.push(t);return e}static getRandomGameObjectColor(){return w.nextArrayElement(this.getGameObjectColors())}static getPropertyValue(e){return this.propertyValueCache[e]||(this.propertyValueCache[e]=window.getComputedStyle(document.body).getPropertyValue(e)),this.propertyValueCache[e]}}return n})();var y=class n{static forEachDirection(o,e){let t=!1,i=()=>t=!0;for(let r=e?.startingDirection??B.UP,s=0;s<4&&(o(r,n.getDx(r),n.getDy(r),i),!t);r=e?.counterclockwise?this.turnLeftFrom(r):this.turnRightFrom(r),s++);}static turnRightFrom(o){return(o+1)%4}static turnLeftFrom(o){return(o+3)%4}static getOpposite(o){return(o+2)%4}static getDx(o){return[0,1,0,-1][o]}static getDy(o){return[-1,0,1,0][o]}};var Te=(()=>{class n{static{this.TOOLBAR_HEIGHT_REM=7.5}static{this.CANVAS_BORDER_WIDTH_REM=.5}static getMaxTileSize(e,t){let i=Math.floor(this.getMaxAvailableWidth()/t),r=Math.floor(this.getMaxAvailableHeight()/e);return Math.min(r,i)}static remToPx(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}static getMaxAvailableWidth(){return Math.round(window.innerWidth*.95-2*this.remToPx(this.CANVAS_BORDER_WIDTH_REM))}static getMaxAvailableHeight(){return Math.round(window.innerHeight*.95-this.remToPx(this.TOOLBAR_HEIGHT_REM)-2*this.remToPx(this.CANVAS_BORDER_WIDTH_REM))}}return n})();var Ge=class extends ne{isSpawned(){return!1}};var Me=class extends Ge{constructor(o,e){super(o),this.color=e}isOccupyingFor(o){return o.color===this.color}draw(o){o.square(c.unit(this.tile.x+.25),c.unit(this.tile.y+.25),c.unit(.5),v.getTokenValue(R.BUILDING_OUTLINE)),o.square(c.unit(this.tile.x+.3),c.unit(this.tile.y+.3),c.unit(.4),this.color)}};var Se=(()=>{class n extends Ge{static{this.BARRIER_TIMER=4}constructor(e){super(e),this.timer=n.BARRIER_TIMER,this._displayTimer$=new Oe(Ae(this.timer)),this.closed=ce(!1),this.timedPause=!1}switch(){this.closed.update(e=>!e),this.emit(),this.timedPause&&(k.getInstance().emitEvent(b.TOGGLE_PAUSE,null),k.getInstance().emitEvent(b.COMPLETE_TIMED_PAUSE,null),this.timedPause=!1)}isOccupyingFor(){return this.closed()}tick(e){this.timer-=e,this.emit(),this.timer<0&&(this.timer=n.BARRIER_TIMER,this.switch())}draw(e){let t=this.closed()?v.getTokenValue($.TIMED_GATE_CLOSED):v.getTokenValue($.TIMED_GATE_OPEN);if(this.tile.selected&&e.circle(c.unit(this.tile.x+.5),c.unit(this.tile.y+.5),c.unit(.75),e.createRadialGradient(c.unit(this.tile.x+.5),c.unit(this.tile.y+.5),c.unit(.5),[.45,t],[1,Re()])),e.square(c.unit(this.tile.x+.25),c.unit(this.tile.y+.25),c.unit(.5),v.getTokenValue(R.BUILDING_OUTLINE)),e.square(c.unit(this.tile.x+.3),c.unit(this.tile.y+.3),c.unit(.4),t),this.closed()){e.strokeStyle=v.getTokenValue(R.WARN);let i=c.unit(.05);e.line(c.unit(this.tile.x+.3)+i/2,c.unit(this.tile.y+.3)+i/2,c.unit(this.tile.x+.7)-i/2,c.unit(this.tile.y+.7)-i/2,i),e.line(c.unit(this.tile.x+.3)+i/2,c.unit(this.tile.y+.7)-i/2,c.unit(this.tile.x+.7)-i/2,c.unit(this.tile.y+.3)+i/2,i)}}get isClosed(){return this.closed.asReadonly()}get displayTimer$(){return this._displayTimer$.pipe(Ie())}emit(){this._displayTimer$.next(Ae(this.timer))}}return n})();var N=(function(n){return n[n.EDITOR_TOOL=0]="EDITOR_TOOL",n[n.ROAD=1]="ROAD",n[n.TUBE=2]="TUBE",n[n.COLORED_GATE_1=3]="COLORED_GATE_1",n[n.COLORED_GATE_2=4]="COLORED_GATE_2",n[n.TIMED_GATE=5]="TIMED_GATE",n})(N||{});var oe=class n{static{this.INITIAL_SELECTED_ITEM_KEY=1}static{this.instance=ce(null)}static inject(){return this.instance.asReadonly()}constructor(){this.items=[{displayName:"Editor tool",selection:N.EDITOR_TOOL,factory:()=>null,selectionMatchFn:()=>!1},{displayName:"Road",selection:N.ROAD,factory:o=>new St(o),selectionMatchFn:o=>o instanceof St},{displayName:"Tube",selection:N.TUBE,factory:o=>new Ot(o),selectionMatchFn:o=>o instanceof Ot},{displayName:"Colored gate",selection:N.COLORED_GATE_1,factory:o=>new Me(o,this.gate1Color),selectionMatchFn:o=>o instanceof Me&&o.color===this.gate1Color},{displayName:"Colored gate",selection:N.COLORED_GATE_2,factory:o=>new Me(o,this.gate2Color),selectionMatchFn:o=>o instanceof Me&&o.color===this.gate2Color},{displayName:"Timed gate",selection:N.TIMED_GATE,factory:o=>new Se(o),selectionMatchFn:o=>o instanceof Se}],[this.gate1Color,this.gate2Color]=w.nextNArrayElements(v.getGameObjectColors(),2),k.getInstance().watchEvents(b.SELECT_TOOLBAR_ITEM,o=>{this.selectedToolbarItem=this.items[o]}),n.instance.set(this)}createBuildingFromSelection(o){return this.selectedToolbarItem.factory(o)}isAssociatedItemSelected(o){return this.selectedToolbarItem.selectionMatchFn(o)}selectItemByKey(o){for(;o<0;)o+=this.items.length;for(;o>=this.items.length;)o-=this.items.length;k.getInstance().emitEvent(b.SELECT_TOOLBAR_ITEM,o)}stepSelectedItem(o){let e=this.items.indexOf(this.selectedToolbarItem);if(e===-1){this.selectItemByKey(0);return}this.selectItemByKey(e+o)}get selection(){return this.selectedToolbarItem.selection}};var b=(function(n){return n.START_GAME="startGame",n.TOGGLE_PAUSE="togglePause",n.SELECT_TOOLBAR_ITEM="selectToolbarItem",n.UPDATE_SPAWN_TIMER="updateSpawnTimer",n.DESTINATION_CRITICAL_HEALTH="destinationCriticalHealth",n.GAIN_SCORE="gainScore",n.OPEN_CONTEXT_MENU="openContextMenu",n.CLOSE_CONTEXT_MENU="closeContextMenu",n.COMPLETE_TIMED_PAUSE="completeTimedPause",n.GAME_OVER="gameOver",n})(b||{});var k=class n{static{this.DESTINATION_HEALTH_MESSAGE_COOLDOWN_S=10}static{this.EVENT_TYPE_EXTRA_PIPELINE_MAP={[b.SELECT_TOOLBAR_ITEM]:Be(rn(oe.INITIAL_SELECTED_ITEM_KEY),Ie(),pt(1)),[b.UPDATE_SPAWN_TIMER]:Be(Ie(),pt(1)),[b.DESTINATION_CRITICAL_HEALTH]:Be(ln(n.DESTINATION_HEALTH_MESSAGE_COOLDOWN_S*1e3)),[b.OPEN_CONTEXT_MENU]:Be(pt(1))}}static getInstance(){return this.instance||(this.instance=new n),this.instance}static clean(){n.getInstance().subscriptions.forEach(o=>o.unsubscribe()),n.instance=void 0}constructor(){this.mergedEvents$=new ue,this.eventMap={},this.subscriptions=[],Object.values(b).forEach(o=>{this.eventMap[o]=this.mergedEvents$.pipe(te(e=>e.type===o),se(e=>e.data),n.EVENT_TYPE_EXTRA_PIPELINE_MAP[o]??Be())})}emitEvent(o,e){this.mergedEvents$.next({type:o,data:e})}watchEvents(o,e){this.subscriptions.push(this.eventMap[o].subscribe(t=>e(t)))}};function Qi(n,o){n&1&&(p(0,"hgroup",1)(1,"h2"),x(2,"Victory"),f(),p(3,"p",10),x(4,"for now..."),f()())}function Ji(n,o){n&1&&(p(0,"hgroup",2)(1,"h2"),x(2,"Game Over!"),f()())}function eo(n,o){if(n&1&&(p(0,"td"),x(1,"Best:"),f(),p(2,"td"),x(3),f()),n&2){let e=I();_(3),le(e.dialogData.best)}}function to(n,o){n&1&&(p(0,"td",6),x(1,"New personal best!"),f())}function no(n,o){if(n&1){let e=J();p(0,"button",11),O("click",function(){K(e);let i=I();return Q(i.revealSeed())}),x(1,"Reveal seed"),f()}}function io(n,o){if(n&1&&(p(0,"div"),x(1),f()),n&2){let e=I();_(),le(e.dialogData.seed)}}var Ei=(()=>{class n{constructor(){this.dialogData=C(qn),this.dialogRef=C(Vn),this.router=C(Dn),this.isSeedRevealed=!1}playAgain(){window.location.reload()}backToMenu(){this.router.navigateByUrl(oi.MENU),this.dialogRef.close()}revealSeed(){this.isSeedRevealed=!0}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-end-of-game-dialog"]],decls:20,vars:6,consts:[[1,"end-of-game-dialog-wrapper"],[1,"victory"],[1,"defeat"],[1,"score-container"],[1,"score"],[1,"best"],["colspan","2"],[1,"buttons-container"],["mat-flat-button","","color","accent",3,"click"],[1,"seed-container"],[1,"subtitle"],[3,"click"]],template:function(t,i){t&1&&(p(0,"div",0),H(1,Qi,5,0,"hgroup",1)(2,Ji,3,0,"hgroup",2),p(3,"table",3)(4,"tr",4)(5,"td"),x(6,"Score:"),f(),p(7,"td"),x(8),f()(),p(9,"tr",5),H(10,eo,4,1)(11,to,2,0,"td",6),f()(),p(12,"div",7)(13,"button",8),O("click",function(){return i.playAgain()}),x(14," Play again "),f(),p(15,"button",8),O("click",function(){return i.backToMenu()}),x(16," Back to menu "),f()(),p(17,"div",9),H(18,no,2,0,"button")(19,io,2,1,"div"),f()()),t&2&&(_(),W(i.dialogData.isVictory?1:2),_(3),A("best",i.dialogData.isNewBest),_(4),le(i.dialogData.score),_(2),W(i.dialogData.isNewBest?11:10),_(8),W(i.isSeedRevealed?19:18))},dependencies:[Ut,qe],styles:['[_nghost-%COMP%]{display:grid;grid-template-columns:calc(30dvw - 4rem);background-color:var(--rd-primary);padding:2rem;width:30dvw;height:70dvh;min-height:37.5rem;box-sizing:border-box}[_nghost-%COMP%]   .end-of-game-dialog-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;align-items:center;padding:1rem;background-color:var(--rd-dialog-background-color);border-radius:var(--mat-dialog-container-shape)}hgroup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;margin:0}hgroup[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.5rem;text-align:center;margin:0}.victory[_ngcontent-%COMP%]{color:var(--rd-primary-darker)}.defeat[_ngcontent-%COMP%]{color:var(--rd-warn)}.score-container[_ngcontent-%COMP%]{table-layout:fixed;margin-block:1.5rem}.score-container[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%], .score-container[_ngcontent-%COMP%]   .best[_ngcontent-%COMP%]{font-size:1.5rem}.score-container[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]:not(:first-child), .score-container[_ngcontent-%COMP%]   .best[_ngcontent-%COMP%]:not(:first-child){margin-top:.5rem}.score-container[_ngcontent-%COMP%]   .best[_ngcontent-%COMP%]{color:var(--rd-accent)}.score-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:50%}.score-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{text-align:end;padding-right:.5rem}.score-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{text-align:start}.score-container[_ngcontent-%COMP%]   td[colspan="2"][_ngcontent-%COMP%]{text-align:center;padding-right:revert-layer}.buttons-container[_ngcontent-%COMP%]{align-self:stretch}.buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.25rem;height:3rem}.seed-container[_ngcontent-%COMP%]{width:100%}.seed-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:var(--rd-white);font-size:1.25rem;height:3rem;border:none;border-radius:var(--mat-button-filled-container-shape);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%}.seed-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--rd-accent);cursor:pointer}.seed-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;line-height:2rem;background-color:var(--rd-primary);padding:.5rem;box-sizing:border-box}'],changeDetection:0})}}return n})();var ge=class{constructor(o,e){this.type=o,this.listener=e,document.addEventListener(o,e)}destroy(){document.removeEventListener(this.type,this.listener)}};var Zt=(()=>{class n{static{this.ROAD_CONNECTION_PREVIEW_ALPHA=.4}constructor(e){this.tiles=e,this.leftMouseDown=!1,this.rightMouseDown=!1,this.toolbar=new oe,this.eventListeners=[],this.cursor={x:0,y:0}}registerEventListeners(){this.eventListeners.push(new ge("mousedown",e=>{e.button===0?this.onLeftMouseDown(e):this.onRightMouseDown(e)})),this.eventListeners.push(new ge("mouseup",e=>{e.button===0?this.onLeftMouseUp(e):this.onRightMouseUp(e)})),this.eventListeners.push(new ge("mousemove",this.onMouseMove.bind(this))),this.eventListeners.push(new ge("keypress",this.onKeyDown.bind(this))),this.eventListeners.push(new ge("wheel",e=>{e.deltaY<0?this.onScrollUp(e):e.deltaY>0&&this.onScrollDown(e)}))}unregisterEventListeners(){this.eventListeners.forEach(e=>e.destroy())}handleMouseActions(){this.selectedTile&&(this.leftMouseDown?this.leftMouseAction():this.rightMouseDown&&this.rightMouseAction())}leftMouseAction(){if(!this.selectedTile)return;let e=this.toolbar.createBuildingFromSelection(this.selectedTile);e?this.selectedTile.build(e):this.toolbar.selection==N.EDITOR_TOOL&&this.selectedTile.hasRoad()&&this.roadConnectionBase&&this.roadConnectionBase!==this.selectedTile&&(this.selectedTile.connectRoadTo(this.roadConnectionBase),this.roadConnectionBase=this.selectedTile)}rightMouseAction(){this.toolbar.selection===N.EDITOR_TOOL?this.selectedTile.openContextMenu():this.selectedTile.deleteBuilding(this.toolbar)}draw(e){if(this.roadConnectionBase){let t=c.unit(this.roadConnectionBase.x+.5),i=c.unit(this.roadConnectionBase.y+.5),r=Math.sqrt((t-this.cursor.x)**2+(i-this.cursor.y)**2);e.alpha=n.ROAD_CONNECTION_PREVIEW_ALPHA,this.roadConnectionBase.road.drawRoadSegment(e,t,i,this.cursor.x,this.cursor.y),e.alpha=1,r>c.unit(2)&&e.text("!",(t+this.cursor.x)/2,(i+this.cursor.y)/2,c.unit(1.5),v.getTokenValue(R.WARN))}}onLeftMouseDown(e){this.leftMouseDown=!0,this.toolbar.selection===N.EDITOR_TOOL&&this.selectedTile&&this.selectedTile.hasRoad()&&(this.roadConnectionBase=this.selectedTile)}onRightMouseDown(e){this.rightMouseDown=!0}onLeftMouseUp(e){this.leftMouseDown=!1,this.toolbar.selection===N.EDITOR_TOOL&&this.roadConnectionBase&&(this.roadConnectionBase=void 0)}onRightMouseUp(e){this.rightMouseDown=!1}onMouseMove(e){if(this.cursor.x=e.offsetX,this.cursor.y=e.offsetY,!$t.isGameCanvasElement(e.target)){this.selectedTile=void 0;return}let t=Math.floor(e.offsetX/c.unit()),i=Math.floor(e.offsetY/c.unit());if(t<0||t>=c.COLUMN_COUNT||i<0||i>=c.ROW_COUNT){this.selectedTile=void 0;return}this.selectedTile=this.tiles[t][i]}onKeyDown(e){if(e.code==="Space"){k.getInstance().emitEvent(b.TOGGLE_PAUSE,null);return}let t=Number(e.key);Number.isNaN(t)||(this.toolbar.selection===N.EDITOR_TOOL&&this.roadConnectionBase&&(this.roadConnectionBase=void 0),this.toolbar.selectItemByKey(t))}onScrollDown(e){this.toolbar.stepSelectedItem(1)}onScrollUp(e){this.toolbar.stepSelectedItem(-1)}set selectedTile(e){this.setTileSelection(this._selectedTile,!1),this._selectedTile=e,this.setTileSelection(this._selectedTile,!0)}get selectedTile(){return this._selectedTile}setTileSelection(e,t){e&&(e.selected=t)}}return n})();var Le=class{constructor(o){this.canvas=o,this._ctx=this.canvas.getContext("2d"),this.onResize()}onResize(){this._ctx.textAlign="center",this._ctx.textBaseline="middle"}line(o,e,t,i,r){this.lineWidth=r,this._ctx.beginPath(),this._ctx.moveTo(o,e),this._ctx.lineTo(t,i),this._ctx.stroke()}square(o,e,t,i,r=!0){r?this.fillStyle=i:this.strokeStyle=i,this._ctx.beginPath(),this._ctx.rect(o,e,t,t),this._ctx[r?"fill":"stroke"]()}circle(o,e,t,i,r=!0){r?this.fillStyle=i:this.strokeStyle=i,this._ctx.beginPath(),this._ctx.arc(o,e,t,0,Math.PI*2),this._ctx[r?"fill":"stroke"]()}text(o,e,t,i,r){this.fillStyle=r??v.getTokenValue(R.TEXT),this.fontSize=i,this._ctx.fillText(o,e,t)}clear(){this._ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}createRadialGradient(o,e,t,...i){let r=this._ctx.createRadialGradient(o,e,0,o,e,t);return i.forEach(([s,a])=>{r.addColorStop(s,a)}),r}set strokeStyle(o){this._ctx.strokeStyle!==o&&(this._ctx.strokeStyle=o)}set fillStyle(o){this._ctx.fillStyle!==o&&(this._ctx.fillStyle=o)}set lineWidth(o){this._ctx.lineWidth!==o&&(this._ctx.lineWidth=o)}set lineCap(o){this._ctx.lineCap!==o&&(this._ctx.lineCap=o)}set alpha(o){this._ctx.globalAlpha!==o&&(this._ctx.globalAlpha=o)}set fontSize(o){let e=o+"px Serif";this._ctx.font!==e&&(this._ctx.font=e)}get ctx(){return this._ctx}};var Mi=(()=>{class n{static{this.BUILDING_SPAWN_TIMER=45}constructor(e,t){this.status=t,this.spawnTimer=n.BUILDING_SPAWN_TIMER,this.exited=!1,this.victory=!1,this.map=new ct,this.map.spawnSpawnerAndDestination(),this.controller=new Zt(this.map.tiles),this.drawer=new Le(e)}startGame(){this.controller.registerEventListeners(),this.gameInterval(Date.now())}onResize(){this.drawer.onResize(),this.status().isGameGoing||this.draw()}stop(){this.exited=!0,lt.cleanUp()}gameInterval(e){let t=Date.now(),i=t-e;this.main(i/1e3)&&!this.exited?requestAnimationFrame(()=>this.gameInterval(t)):(this.controller.unregisterEventListeners(),k.getInstance().emitEvent(b.GAME_OVER,this.victory),k.getInstance().emitEvent(b.CLOSE_CONTEXT_MENU,null))}main(e){if(!this.status().isPaused)for(let t=0;t<this.status().gameSpeed;t++)e=Math.min(e,.1),this.timedActions(e),this.map.tick(e);return this.controller.handleMouseActions(),this.draw(),this.status().isPaused||!this.isEndOfGame()}draw(){this.map.draw(this.drawer),this.controller.draw(this.drawer)}isEndOfGame(){return ie.anyWithZeroHealth()||this.victory}timedActions(e){if((this.spawnTimer-=e)<=0){this.spawnTimer=n.BUILDING_SPAWN_TIMER;try{this.map.spawnSpawnerAndDestination()}catch(t){if(t instanceof De)this.victory=!0;else throw t}}k.getInstance().emitEvent(b.UPDATE_SPAWN_TIMER,Math.floor(this.spawnTimer))}}return n})();var dt=(function(n){return n[n.SPAWNER=0]="SPAWNER",n[n.DESTINATION=1]="DESTINATION",n[n.TIMED_GATE=2]="TIMED_GATE",n})(dt||{});var Si=(()=>{class n{constructor(){this.building=G.required(),this.roadName=X(()=>{let e=this.building().tile.road;return e?e.getName():"None"})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-destination-context-menu"]],inputs:{building:[1,"building"]},decls:9,vars:4,template:function(t,i){t&1&&(nt(0,"h3"),x(1,"Destination"),kt(),nt(2,"p"),x(3),pe(4,"async"),kt(),nt(5,"p"),x(6," Road type: "),nt(7,"strong"),x(8),kt()()),t&2&&(_(3),V("Cars arrived: ",fe(4,2,i.building().displayCarsReached$)),_(5),le(i.roadName()))},dependencies:[Ve],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}h3[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--rd-primary-darker)}button[_ngcontent-%COMP%]{font-size:.875rem;border:1px solid black;border-radius:.5rem;outline:none;background-color:var(--rd-white);height:2rem;text-align:center;cursor:pointer}"],changeDetection:0})}}return n})();var oo=["mat-internal-form-field",""],ao=["*"],Oi=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&A("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:oo,ngContentSelectors:ao,decls:1,vars:0,template:function(t,i){t&1&&(Ue(),Fe(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var ro=["input"],so=["label"],co=["*"],Yt={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},lo=new Ke("mat-checkbox-default-options",{providedIn:"root",factory:()=>Yt}),U=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(U||{}),Kt=class{source;checked},Qt=(()=>{class n{_elementRef=C(xe);_changeDetectorRef=C(We);_ngZone=C(gt);_animationsDisabled=ot();_options=C(lo,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Kt;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new At;indeterminateChange=new At;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=U.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){C(Pn).load(Yn);let e=C(new Sn("tabindex"),{optional:!0});this._options=this._options||Yt,this.color=this._options.color||Yt.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=C(Et).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(U.Indeterminate):this._transitionCheckState(this.checked?U.Checked:U.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=ce(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?U.Checked:U.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case U.Init:if(t===U.Checked)return this._animationClasses.uncheckedToChecked;if(t==U.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case U.Unchecked:return t===U.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case U.Checked:return t===U.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case U.Indeterminate:return t===U.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,i){if(t&1&&ze(ro,5)(so,5),t&2){let r;ke(r=ve())&&(i._inputElement=r.first),ke(r=ve())&&(i._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,i){t&2&&(vn("id",i.id),Je("tabindex",null)("aria-label",null)("aria-labelledby",null),yn(i.color?"mat-"+i.color:"mat-accent"),A("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",Ce],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",Ce],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",Ce],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:On(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ce],checked:[2,"checked","checked",Ce],disabled:[2,"disabled","disabled",Ce],indeterminate:[2,"indeterminate","indeterminate",Ce]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[yt([{provide:ei,useExisting:dn(()=>n),multi:!0},{provide:ti,useExisting:n,multi:!0}]),fn],ngContentSelectors:co,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,i){if(t&1&&(Ue(),p(0,"div",3),O("click",function(s){return i._preventBubblingFromLabel(s)}),p(1,"div",4,0)(3,"div",5),O("click",function(){return i._onTouchTargetClick()}),f(),p(4,"input",6,1),O("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(s){return i._onInteractionEvent(s)}),f(),L(6,"div",7),p(7,"div",8),mn(),p(8,"svg",9),L(9,"path",10),f(),hn(),L(10,"div",11),f(),L(11,"div",12),f(),p(12,"label",13,2),Fe(14),f()()),t&2){let r=He(2);S("labelPosition",i.labelPosition),_(4),A("mdc-checkbox--selected",i.checked),S("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Je("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),_(7),S("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),_(),S("for",i.inputId)}},dependencies:[we,Oi],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),Ii=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Nt({type:n});static \u0275inj=Dt({imports:[Qt,Gn]})}return n})();var wt=(()=>{class n{constructor(){k.getInstance().watchEvents(b.COMPLETE_TIMED_PAUSE,()=>this.timedPauseBuilding=void 0)}setTimedPauseBuilding(e){this.hasOtherBuildingTimedPause(e)&&this.clearTimedPauseBuilding(this.timedPauseBuilding),this.timedPauseBuilding=e,e.timedPause=!0}clearTimedPauseBuilding(e){this.timedPauseBuilding=void 0,e.timedPause=!1}hasOtherBuildingTimedPause(e){return!!this.timedPauseBuilding&&this.timedPauseBuilding!==e}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac})}}return n})();var ho=["checkbox"],uo=["*"],mt=(()=>{class n{constructor(){this.contextMenuService=C(wt),this.cdr=C(We),this.building=G.required(),k.getInstance().watchEvents(b.COMPLETE_TIMED_PAUSE,()=>this.cdr.markForCheck())}onTimedPauseChange(e){e.checked?this.contextMenuService.setTimedPauseBuilding(this.building()):this.contextMenuService.clearTimedPauseBuilding(this.building()),this.inputElement.blur()}get timedPauseWarning(){return this.contextMenuService.hasOtherBuildingTimedPause(this.building())}get inputElement(){return this.checkboxElementRef.nativeElement.querySelector("input[type='checkbox']")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-timed-pause-widget"]],viewQuery:function(t,i){if(t&1&&ze(ho,5,xe),t&2){let r;ke(r=ve())&&(i.checkboxElementRef=r.first)}},inputs:{building:[1,"building"]},ngContentSelectors:uo,decls:5,vars:3,consts:[["checkbox",""],[3,"change","checked"],[1,"warning"]],template:function(t,i){t&1&&(Ue(),p(0,"mat-checkbox",1,0),O("change",function(s){return i.onTimedPauseChange(s)}),Fe(2),f(),p(3,"span",2),x(4,` Other building has a timed pause turned on. If you turn this on, the other's will be turned off.
`),f()),t&2&&(S("checked",i.building().timedPause),_(3),A("invisible",!i.timedPauseWarning))},dependencies:[Ii,Qt],styles:["mat-checkbox[_ngcontent-%COMP%]{margin-left:-11px}.warning[_ngcontent-%COMP%]{display:block;text-wrap:wrap;max-width:18rem;font-size:.75rem;color:var(--rd-warn)}.warning.invisible[_ngcontent-%COMP%]{visibility:hidden}"],changeDetection:0})}}return n})();function po(n,o){if(n&1){let e=J();p(0,"button",3,0),O("click",function(){let i=K(e).$implicit,r=He(1);return I().delaySpawn(i),Q(r.blur())}),x(2),f()}if(n&2){let e=o.$implicit;_(2),V(" ",e,"s ")}}var wi=(()=>{class n{constructor(){this.spawnDelayTimes=[.5,1],this.building=G.required()}delaySpawn(e){this.building().delaySpawn(e)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-spawner-context-menu"]],inputs:{building:[1,"building"]},decls:14,vars:7,consts:[["button",""],["matRipple","",1,"delay-button"],[3,"building"],["matRipple","",1,"delay-button",3,"click"]],template:function(t,i){t&1&&(p(0,"h3"),x(1,"Spawner"),f(),p(2,"p"),x(3),pe(4,"async"),f(),p(5,"p"),x(6),pe(7,"async"),f(),p(8,"p"),x(9," Delay spawn by: "),et(10,po,3,1,"button",1,xt),f(),p(12,"rd-timed-pause-widget",2),x(13,"Pause the game when it spawns"),f()),t&2&&(_(3),V("Cars spawned: ",fe(4,3,i.building().displayCarsSpawned$)),_(3),V("Spawns car in: ",fe(7,5,i.building().displayTimer$)),_(4),tt(i.spawnDelayTimes),_(2),S("building",i.building()))},dependencies:[we,mt,Ve],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}h3[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--rd-primary-darker)}button[_ngcontent-%COMP%]{font-size:.875rem;border:1px solid black;border-radius:.5rem;outline:none;background-color:var(--rd-white);height:2rem;text-align:center;cursor:pointer}p[_ngcontent-%COMP%]{margin-block:0 .5rem}.delay-button[_ngcontent-%COMP%]{width:2.5rem;padding-inline:0}.delay-button[_ngcontent-%COMP%]:first-child{margin-left:.5rem}.delay-button[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:unset;border-bottom-left-radius:unset}.delay-button[_ngcontent-%COMP%]:not(:last-child){border-top-right-radius:unset;border-bottom-right-radius:unset}"],changeDetection:0})}}return n})();var Di=(()=>{class n{constructor(){this.building=G.required(),this.isGateClosed=X(()=>this.building().isClosed())}switchGateState(){this.building().switch()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-timed-gate-context-menu"]],inputs:{building:[1,"building"]},decls:15,vars:5,consts:[["button",""],[1,"state-control-container"],["matRipple","",3,"click"],[3,"building"]],template:function(t,i){if(t&1){let r=J();p(0,"h3"),x(1,"Timed Gate"),f(),p(2,"div",1)(3,"p"),x(4," Current state: "),p(5,"strong"),x(6),f()(),p(7,"p"),x(8),pe(9,"async"),f(),p(10,"button",2,0),O("click",function(){K(r);let a=He(11);return i.switchGateState(),Q(a.blur())}),x(12," Switch state "),f()(),p(13,"rd-timed-pause-widget",3),x(14,"Pause the game when it switches"),f()}t&2&&(_(6),le(i.isGateClosed()?"closed":"open"),_(2),V("Switches state in ",fe(9,3,i.building().displayTimer$),"s"),_(5),S("building",i.building()))},dependencies:[we,mt,Ve],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}h3[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--rd-primary-darker)}button[_ngcontent-%COMP%]{font-size:.875rem;border:1px solid black;border-radius:.5rem;outline:none;background-color:var(--rd-white);height:2rem;text-align:center;cursor:pointer}.state-control-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-block:.25rem}.state-control-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{margin-bottom:.5rem}.state-control-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-inline:1rem}"],changeDetection:0})}}return n})();var Ai={[dt.SPAWNER]:{component:wi,buildingType:rt},[dt.TIMED_GATE]:{component:Di,buildingType:Se},[dt.DESTINATION]:{component:Si,buildingType:ie}};var fo=n=>({building:n});function go(n,o){n&1&&kn(0)}function bo(n,o){if(n&1&&_t(0,go,1,0,"ng-container",0),n&2){let e=I();S("ngComponentOutlet",e.contextMenuComponent())("ngComponentOutletInputs",En(2,fo,e.contextMenuBuilding()))}}var Ri=(()=>{class n{constructor(){this.elementRef=C(xe),this.widthRem=18,this.contextMenuBuilding=G(),this.contextMenuComponent=X(()=>{let[e,t]=Object.entries(Ai).find(([i,r])=>this.contextMenuBuilding()instanceof r.buildingType)??[];return e===void 0||t===void 0?null:t.component}),this.isOnBottom=X(()=>{let e=this.contextMenuBuilding();return e?this.calcIsOnBottom(e):!1}),this.xPos=X(()=>{let e=this.contextMenuBuilding();if(!e)return"0px";let t=this.calcIsOnLeft(e),i=e.tile.x+(t?2:-1),r=Math.min(c.COLUMN_COUNT,Math.max(0,i)),s=c.unit(r)+(t?-Te.remToPx(Te.CANVAS_BORDER_WIDTH_REM):0);return t?`calc(${s}px - ${this.widthRem}rem)`:`${s}px`}),this.yPosPx=X(()=>{let e=this.contextMenuBuilding();return e?c.unit(e.tile.y)+Te.remToPx(Te.CANVAS_BORDER_WIDTH_REM)+(this.calcIsOnBottom(e)?c.unit():0):0}),ut(document,"mousedown").pipe(ye(),se(e=>e.target),te(e=>e instanceof HTMLElement),te(e=>!this.isChildOfThis(e))).subscribe(()=>k.getInstance().emitEvent(b.CLOSE_CONTEXT_MENU,null))}isChildOfThis(e){return!e||e===document.body?!1:e===this.elementRef.nativeElement?!0:this.isChildOfThis(e.parentElement)}calcIsOnBottom(e){return e.tile.y<c.ROW_COUNT/2}calcIsOnLeft(e){return e.tile.x>c.COLUMN_COUNT/2}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-context-menu"]],hostVars:10,hostBindings:function(t,i){t&2&&(Cn("left",i.xPos())("top",i.yPosPx(),"px")("width",i.widthRem,"rem"),A("visible",i.contextMenuBuilding()&&i.contextMenuComponent())("is-on-bottom",i.isOnBottom()))},inputs:{contextMenuBuilding:[1,"contextMenuBuilding"]},features:[yt([wt])],decls:1,vars:1,consts:[[4,"ngComponentOutlet","ngComponentOutletInputs"]],template:function(t,i){t&1&&H(0,bo,1,4,"ng-container"),t&2&&W(i.contextMenuBuilding()?0:-1)},dependencies:[wn],styles:["[_nghost-%COMP%]{--translate-x: 0;--translate-y: -100%;position:absolute;display:block;visibility:hidden;translate:var(--translate-x) var(--translate-y);background-color:var(--rd-primary-lightest);border:2px solid var(--rd-primary-darker);border-radius:1rem;padding:1rem}@supports (interpolate-size: allow-keywords){[_nghost-%COMP%]{height:0;interpolate-size:allow-keywords;overflow-y:hidden;transition:height .25s ease}.visible[_nghost-%COMP%]{height:auto}}@supports not (interpolate-size: allow-keywords){[_nghost-%COMP%]{opacity:0;transition:opacity .35s ease}.visible[_nghost-%COMP%]{opacity:1}}.is-on-bottom[_nghost-%COMP%]{--translate-y: 0}.visible[_nghost-%COMP%]{visibility:visible}"],changeDetection:0})}}return n})();var _o=["gameCanvas"],Jt=(()=>{class n{constructor(){this.gameStatus=G.required(),this.seed=G.required(),this.gameCanvas=Tt("gameCanvas"),this.contextMenuBuilding=ce(void 0),k.getInstance().watchEvents(b.OPEN_CONTEXT_MENU,e=>this.contextMenuBuilding.set(e)),k.getInstance().watchEvents(b.CLOSE_CONTEXT_MENU,()=>this.contextMenuBuilding.set(void 0)),pn(()=>{let e=this.gameCanvas();if(!e||this.game)return;document.addEventListener("contextmenu",i=>{i.preventDefault()},!1);let t=e.nativeElement;w.registerSeed(this.seed()),this.game=new Mi(t,this.gameStatus),this.onResizeFn=()=>{c.resize(),t.style.width=(t.width=c.unit(c.COLUMN_COUNT))+"px",t.style.height=(t.height=c.unit(c.ROW_COUNT))+"px",this.game.onResize()},window.addEventListener("resize",this.onResizeFn),this.onResizeFn(),this.startGame()})}ngOnDestroy(){this.game?.stop(),this.onResizeFn&&window.removeEventListener("resize",this.onResizeFn)}startGame(){k.getInstance().emitEvent(b.START_GAME,null),this.game.startGame()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-game-area"]],viewQuery:function(t,i){t&1&&vt(i.gameCanvas,_o,5),t&2&&Ct()},inputs:{gameStatus:[1,"gameStatus"],seed:[1,"seed"]},decls:3,vars:3,consts:[["gameCanvas",""],[1,"game-canvas"],[3,"contextMenuBuilding"]],template:function(t,i){t&1&&L(0,"canvas",1,0)(2,"rd-context-menu",2),t&2&&(A("active",i.gameStatus().isGameGoing),_(2),S("contextMenuBuilding",i.contextMenuBuilding()))},dependencies:[Ri],styles:["[_nghost-%COMP%]{display:block;position:relative;width:fit-content}canvas[_ngcontent-%COMP%]{display:block;border:.5rem solid var(--rd-black);border-radius:1rem;aspect-ratio:2/1}canvas.active[_ngcontent-%COMP%]{cursor:pointer}"],changeDetection:0})}}return n})();var en=(()=>{class n extends ii{static{this.EARLY_GAME_END_SCORE=750}constructor(e){super(Nn.GAME),this.getScoreFn=e,this.earlyGameSongs=this.findSongsByTag(Gt.EARLY_GAME),this.lateGameSongs=this.findSongsByTag(Gt.LATE_GAME)}chooseNextSong(e){return this.isEarlyGame()?this.getRandomSong(e,this.earlyGameSongs):this.getRandomSong(e,this.lateGameSongs)}isEarlyGame(){return this.getScoreFn()<n.EARLY_GAME_END_SCORE}}return n})();var tn=(()=>{class n{transform(e){return e.isPaused?0:e.gameSpeed}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275pipe=bn({name:"calculateTrueGameSpeed",type:n,pure:!0})}}return n})();var xo=["iconCanvas"];function ko(n,o){n&1&&(p(0,"mat-icon"),x(1,"build"),f())}function vo(n,o){n&1&&L(0,"canvas",null,0)}var Ni=(()=>{class n{constructor(){this.item=G.required(),this.isEditorTool=X(()=>this.item().selection===N.EDITOR_TOOL),this.iconCanvas=Tt("iconCanvas");let e=it(this.iconCanvas);it(this.item).pipe(sn(t=>e.pipe(te(Boolean),se(i=>t.selection===N.ROAD||t.selection===N.TUBE?[[t.factory(this.createMockTile(0,.5)),t.factory(this.createMockTile(1,.5))],i.nativeElement]:[[t.factory(this.createMockTile())],i.nativeElement]))),ye()).subscribe(([t,i])=>{this.initCanvas(i,t.length);let r=new Le(i);t.forEach(s=>{this.initBuilding(s),s.draw(r)})})}initCanvas(e,t){e.height=e.width=c.unit(t)}initBuilding(e){e instanceof Se&&e.switch()}createMockTile(e=0,t=0){return{x:e,y:t,isConnectedWithRoad:i=>i===B.RIGHT&&e===0||i===B.LEFT&&e===1}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-toolbar-icon"]],viewQuery:function(t,i){t&1&&vt(i.iconCanvas,xo,5),t&2&&Ct()},inputs:{item:[1,"item"]},decls:2,vars:1,consts:[["iconCanvas",""]],template:function(t,i){t&1&&H(0,ko,2,0,"mat-icon")(1,vo,2,0,"canvas"),t&2&&W(i.isEditorTool()?0:1)},dependencies:[Zn,$n],styles:["[_nghost-%COMP%]{display:grid;place-items:center;width:2.8rem;aspect-ratio:1}mat-icon[_ngcontent-%COMP%]{font-size:1.75rem;height:unset;width:unset}canvas[_ngcontent-%COMP%]{width:100%;aspect-ratio:1}"],changeDetection:0})}}return n})();function Co(n,o){if(n&1){let e=J();p(0,"button",6),O("click",function(){let i=K(e).$index,r=I(3);return Q(r.selectTool(i))}),p(1,"span",7),x(2),f(),L(3,"rd-toolbar-icon",8),f()}if(n&2){let e=o.$implicit,t=o.$index,i=I(3);A("selected",i.gameStatus().selectedToolbarItem===t),_(2),le(t),_(),S("item",e)("matTooltip",e.displayName)}}function yo(n,o){if(n&1&&(p(0,"div",1),et(1,Co,4,5,"button",5,xn),f()),n&2){let e=I(2);_(),tt(e.gameToolbar().items)}}function To(n,o){if(n&1){let e=J();p(0,"div",9),pe(1,"calculateTrueGameSpeed"),O("click",function(){let i=K(e).$implicit,r=I(2);return Q(r.setGameSpeed(i))}),x(2),f()}if(n&2){let e=o.$implicit,t=I(2);A("selected",fe(1,3,t.gameStatus())===e),_(2),V(" x",e," ")}}function Eo(n,o){if(n&1&&(p(0,"p",0),x(1),f(),H(2,yo,3,0,"div",1),L(3,"rd-music-controller",2),p(4,"div",3),et(5,To,3,5,"div",4,xt),f()),n&2){let e=I();S("matTooltip",Tn("New buildings spawn in ",e.gameStatus().spawnTimer," seconds")),_(),V(" Score: ",e.gameStatus().score," "),_(),W(e.gameToolbar()?2:-1),_(),S("handler",e.musicHandler),_(2),tt(e.possibleGameSpeeds)}}function Mo(n,o){n&1&&(p(0,"p",10),x(1,"Victory!"),f())}function So(n,o){n&1&&(p(0,"p",11),x(1,"Game Over!"),f())}function Oo(n,o){if(n&1){let e=J();H(0,Mo,2,0,"p",10)(1,So,2,0,"p",11),p(2,"button",12),O("click",function(){K(e);let i=I();return Q(i.openEndOfGameDialog.emit())}),x(3," Open end of game dialog "),f()}if(n&2){let e=I();W(e.gameStatus().isVictory?0:1)}}var nn=(()=>{class n{constructor(){this.gameStatus=G.required(),this.gameSpeedChange=Pt(),this.openEndOfGameDialog=Pt(),this.possibleGameSpeeds=[0,1,2,4,8],this.possibleGameSpeedKeys=["q","w","e","r"],this.gameToolbar=oe.inject(),this.musicHandler=new en(X(()=>this.gameStatus().score)),ut(document,"keydown").pipe(ye(),se(e=>e.key),te(e=>this.possibleGameSpeedKeys.includes(e))).subscribe(e=>this.setGameSpeed(this.possibleGameSpeeds[this.possibleGameSpeedKeys.indexOf(e)+1]))}selectTool(e){this.gameToolbar().selectItemByKey(e)}setGameSpeed(e){this.gameSpeedChange.emit(e)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-toolbar"]],hostVars:2,hostBindings:function(t,i){t&2&&A("game-over",!i.gameStatus().isGameGoing)},inputs:{gameStatus:[1,"gameStatus"]},outputs:{gameSpeedChange:"gameSpeedChange",openEndOfGameDialog:"openEndOfGameDialog"},decls:2,vars:1,consts:[[1,"score",3,"matTooltip"],[1,"toolbar-items-container"],[3,"handler"],[1,"game-speed-panel"],[1,"game-speed-button",3,"selected"],["mat-fab","",1,"toolbar-item",3,"selected"],["mat-fab","",1,"toolbar-item",3,"click"],[1,"toolbar-item-key"],[3,"item","matTooltip"],[1,"game-speed-button",3,"click"],[1,"victory"],[1,"defeat"],["mat-flat-button","","color","accent",1,"end-of-game-button",3,"click"]],template:function(t,i){t&1&&H(0,Eo,7,5)(1,Oo,4,1),t&2&&W(i.gameStatus().isGameGoing?0:1)},dependencies:[Kn,Qn,qe,Ni,Jn,tn],styles:['[_nghost-%COMP%]{position:relative;display:grid;grid-template-columns:1fr auto 1fr;gap:1rem;align-items:center;background-color:var(--rd-primary);padding-inline:1rem;-webkit-user-select:none;user-select:none}.game-over[_nghost-%COMP%]{justify-content:center;gap:3rem}p[_ngcontent-%COMP%]{margin:0}.score[_ngcontent-%COMP%]{display:block;font-size:2.5rem;min-width:max-content;-webkit-user-select:none;user-select:none}.toolbar-items-container[_ngcontent-%COMP%]{display:flex;gap:.25rem}.toolbar-items-container[_ngcontent-%COMP%]   .toolbar-item[_ngcontent-%COMP%]{position:relative;font-size:1.25rem;margin:.75rem;box-shadow:none}.toolbar-items-container[_ngcontent-%COMP%]   .toolbar-item.selected[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;bottom:-.75rem;width:100%;height:.5rem;background-color:var(--rd-accent-darker);border-radius:.25rem}.toolbar-items-container[_ngcontent-%COMP%]   .toolbar-item.selected[_ngcontent-%COMP%]   .toolbar-item-key[_ngcontent-%COMP%]{color:var(--rd-accent-darker);font-weight:700}.toolbar-items-container[_ngcontent-%COMP%]   .toolbar-item[_ngcontent-%COMP%]   .toolbar-item-key[_ngcontent-%COMP%]{position:absolute;top:0;left:0;translate:-80% -80%;font-size:2rem;color:var(--rd-accent-disabled);margin-right:1rem}rd-music-controller[_ngcontent-%COMP%]{width:clamp(15rem,100%,22rem);justify-self:center}.game-speed-panel[_ngcontent-%COMP%]{position:absolute;top:100%;z-index:1;background-color:inherit;padding:.5rem;left:0;border-bottom-right-radius:.5rem;opacity:1;transition:opacity .2s ease}.game-speed-panel[_ngcontent-%COMP%]:hover{opacity:.5}.game-speed-panel[_ngcontent-%COMP%]   .game-speed-button[_ngcontent-%COMP%]{display:inline-block;font:1rem monospace;color:var(--rd-white);background-color:var(--rd-accent);border:none;aspect-ratio:1;padding:.5rem;border-radius:50%;transition:background-color .4s ease}.game-speed-panel[_ngcontent-%COMP%]   .game-speed-button.selected[_ngcontent-%COMP%]{background-color:var(--rd-accent-darker)}.game-speed-panel[_ngcontent-%COMP%]   .game-speed-button[_ngcontent-%COMP%]:not(.selected){cursor:pointer}.game-speed-panel[_ngcontent-%COMP%]   .game-speed-button[_ngcontent-%COMP%]:focus-visible{outline:none}.game-speed-panel[_ngcontent-%COMP%]   .game-speed-button[_ngcontent-%COMP%] + .game-speed-button[_ngcontent-%COMP%]{margin-left:.25rem}p.defeat[_ngcontent-%COMP%], p.victory[_ngcontent-%COMP%]{font-size:3rem;font-weight:500}p.defeat[_ngcontent-%COMP%]{color:var(--rd-warn)}p.victory[_ngcontent-%COMP%]{color:var(--rd-primary-darker)}.end-of-game-button[_ngcontent-%COMP%]{font-size:1.5rem;height:3.625rem;flex-basis:14rem}'],changeDetection:0})}}return n})();var Io=(n,o,e)=>({defeat:n,victory:o,paused:e}),Ld=(()=>{class n{static{this.BUILDING_SPAWN_MESSAGE_TIME=10}constructor(){this.snackbar=C(ri),this.dialog=C(Xn),this.gameStartService=C(ni),this.storageService=C(An),this.isNewBest=!1,this.seed=this.getSeed();let e=this.storageService.read(je.GAME_SPEED);this.gameStatus=ce({isGameGoing:!1,isVictory:!1,isPaused:e>2,gameSpeed:e,selectedToolbarItem:0,score:0,spawnTimer:0}),k.getInstance().watchEvents(b.START_GAME,()=>this.gameStatus.update(t=>me(F({},t),{isGameGoing:!0}))),k.getInstance().watchEvents(b.TOGGLE_PAUSE,()=>this.gameStatus.update(t=>me(F({},t),{isPaused:!t.isPaused}))),k.getInstance().watchEvents(b.SELECT_TOOLBAR_ITEM,t=>this.gameStatus.update(i=>me(F({},i),{selectedToolbarItem:t}))),k.getInstance().watchEvents(b.GAIN_SCORE,()=>this.gameStatus.update(t=>me(F({},t),{score:t.score+1}))),k.getInstance().watchEvents(b.UPDATE_SPAWN_TIMER,t=>{this.gameStatus().spawnTimer>n.BUILDING_SPAWN_MESSAGE_TIME&&t<=n.BUILDING_SPAWN_MESSAGE_TIME&&this.openSnackbarMessage(`New spawner and destination spawns in ${t} seconds`,"Understood"),this.gameStatus.update(i=>me(F({},i),{spawnTimer:t}))}),k.getInstance().watchEvents(b.DESTINATION_CRITICAL_HEALTH,t=>{this.openSnackbarMessage(`One of your destinations has ${t} health!`,"I'll fix it!")}),k.getInstance().watchEvents(b.GAME_OVER,t=>this.gameStatus.update(i=>me(F({},i),{isGameGoing:!1,isVictory:t}))),it(this.gameStatus).pipe(se(t=>t.isGameGoing),an(),te(([t,i])=>t!==i&&!i),ye()).subscribe(()=>this.onEndOfGame())}onGameSpeedChange(e){if(e===0&&!this.gameStatus().isPaused){k.getInstance().emitEvent(b.TOGGLE_PAUSE,null);return}e!==0&&(this.gameStatus().isPaused&&k.getInstance().emitEvent(b.TOGGLE_PAUSE,null),this.gameStatus.update(t=>me(F({},t),{gameSpeed:e})),this.storageService.save(je.GAME_SPEED,e))}onEndOfGame(){let e=this.gameStatus().score;e>this.storageService.read(je.PERSONAL_BEST).score&&(this.storageService.save(je.PERSONAL_BEST,{score:e,timestamp:Date.now()}),this.isNewBest=!0),this.openEndOfGameDialog()}openEndOfGameDialog(){let e={score:this.gameStatus().score,best:this.storageService.read(je.PERSONAL_BEST).score,isNewBest:this.isNewBest,isVictory:this.gameStatus().isVictory,seed:this.seed};this.dialog.open(Ei,{data:e})}openSnackbarMessage(e,t){this.snackbar.open(e,t,{duration:3e3})}getSeed(){let e=this.gameStartService.getStartingParams().seed;return e||Math.random().toString()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=E({type:n,selectors:[["rd-game"]],decls:3,vars:8,consts:[[3,"gameSpeedChange","openEndOfGameDialog","gameStatus"],[1,"game-area-wrapper",3,"ngClass"],[3,"gameStatus","seed"]],template:function(t,i){if(t&1&&(p(0,"rd-toolbar",0),O("gameSpeedChange",function(s){return i.onGameSpeedChange(s)})("openEndOfGameDialog",function(){return i.openEndOfGameDialog()}),f(),p(1,"div",1),L(2,"rd-game-area",2),f()),t&2){let r=i.gameStatus();S("gameStatus",r),_(),S("ngClass",Mn(4,Io,!r.isGameGoing&&!r.isVictory,!r.isGameGoing&&r.isVictory,r.isPaused)),_(),S("gameStatus",r)("seed",i.seed)}},dependencies:[nn,In,Jt],styles:["[_nghost-%COMP%]{display:grid;grid-template-rows:7.5rem 1fr;height:100dvh}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{max-width:100dvw}.game-area-wrapper[_ngcontent-%COMP%]{background-color:var(--rd-accent-lighter);display:grid;place-items:center}.game-area-wrapper.paused[_ngcontent-%COMP%]{background-color:var(--rd-accent-disabled)}.game-area-wrapper.defeat[_ngcontent-%COMP%]{background-color:var(--rd-warn)}.game-area-wrapper.victory[_ngcontent-%COMP%]{background-color:var(--rd-white)}"],changeDetection:0})}}return n})();export{Ld as GameComponent};
