import{b as mn,d as ze,e as pn,f as fn,g as un,h as hn,i as gn,j as _n,k as bn,l as vn,m as Ne,n as xn,o as yn,p as Cn,q as wn,r as Mn}from"./chunk-6VX4UV4T.js";import{$ as u,$b as ie,Aa as Ue,Ab as Qe,Ba as H,Bb as Yt,C as ye,Ca as Nt,D as Z,Da as me,Db as Xt,E as R,Ea as O,Eb as Jt,F as c,Fa as P,Fb as en,Ga as Lt,Gb as Ke,H as S,Ha as Vt,Hb as k,I as E,Ia as qe,J as He,Ja as pe,Jb as Ee,K as Ft,Ka as we,Kb as De,La as y,Lb as tn,Ma as Bt,Mb as nn,Na as o,Nb as Ze,O as V,Oa as C,Ob as on,P as Y,Pa as M,Pb as Te,Q,Qa as Ht,Qb as he,R as It,Sa as fe,T as G,Ta as Gt,U as X,V as l,Wa as je,Xa as We,Y as Rt,Ya as Me,Z as ce,Zb as rn,_a as q,aa as J,ab as Ut,ac as oe,ba as U,bb as A,ca as At,cb as ue,cc as an,db as qt,dc as ln,e as yt,ea as ee,ec as sn,fa as zt,g as Ct,gb as jt,gc as re,h as W,ha as B,hb as $e,hc as ae,ia as h,ib as ke,ic as Fe,j as wt,ja as g,jb as Wt,jc as N,ka as D,kc as Ie,l as Mt,m as se,ma as T,mb as $t,na as F,nb as Oe,nc as L,o as kt,oa as _,p as Ot,pa as a,pb as Qt,pc as j,q as Pt,qa as r,qc as Re,r as $,ra as v,rc as Ae,s as St,sa as p,sc as dn,ta as f,tb as Kt,tc as cn,u as Et,ua as Ge,uc as Ye,v as Dt,va as te,w as de,wa as z,wb as Pe,x as Tt,xa as Ce,xb as Se,y as xe,ya as x,yb as Zt,za as m,zb as ne}from"./chunk-KPH4HGCN.js";var Xe=class{_box;_destroyed=new W;_resizeSubject=new W;_resizeObserver;_elementObservables=new Map;constructor(s){this._box=s,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(s){return this._elementObservables.has(s)||this._elementObservables.set(s,new Ct(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(s,{box:this._box}),()=>{this._resizeObserver?.unobserve(s),n.unsubscribe(),this._elementObservables.delete(s)}}).pipe($(e=>e.some(n=>n.target===s)),Dt({bufferSize:1,refCount:!0}),xe(this._destroyed))),this._elementObservables.get(s)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},kn=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(V);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let i=n?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Xe(i)),this._observers.get(i).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ye({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jn=["notch"],ei=["matFormFieldNotchedOutline",""],ti=["*"],On=["iconPrefixContainer"],Pn=["textPrefixContainer"],Sn=["iconSuffixContainer"],En=["textSuffixContainer"],ni=["textField"],ii=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],oi=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ri(t,s){t&1&&v(0,"span",21)}function ai(t,s){if(t&1&&(a(0,"label",20),H(1,1),h(2,ri,1,0,"span",21),r()),t&2){let e=m(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),B("for",e._control.disableAutomaticLabeling?null:e._control.id),l(2),g(!e.hideRequiredMarker&&e._control.required?2:-1)}}function li(t,s){if(t&1&&h(0,ai,3,5,"label",20),t&2){let e=m();g(e._hasFloatingLabel()?0:-1)}}function si(t,s){t&1&&v(0,"div",7)}function di(t,s){}function ci(t,s){if(t&1&&ee(0,di,0,0,"ng-template",13),t&2){m(2);let e=pe(1);_("ngTemplateOutlet",e)}}function mi(t,s){if(t&1&&(a(0,"div",9),h(1,ci,1,1,null,13),r()),t&2){let e=m();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),l(),g(e._forceDisplayInfixLabel()?-1:1)}}function pi(t,s){t&1&&(a(0,"div",10,2),H(2,2),r())}function fi(t,s){t&1&&(a(0,"div",11,3),H(2,3),r())}function ui(t,s){}function hi(t,s){if(t&1&&ee(0,ui,0,0,"ng-template",13),t&2){m();let e=pe(1);_("ngTemplateOutlet",e)}}function gi(t,s){t&1&&(a(0,"div",14,4),H(2,4),r())}function _i(t,s){t&1&&(a(0,"div",15,5),H(2,5),r())}function bi(t,s){t&1&&v(0,"div",16)}function vi(t,s){t&1&&(a(0,"div",18),H(1,6),r())}function xi(t,s){if(t&1&&(a(0,"mat-hint",22),o(1),r()),t&2){let e=m(2);_("id",e._hintLabelId),l(),C(e.hintLabel)}}function yi(t,s){if(t&1&&(a(0,"div",19),h(1,xi,2,2,"mat-hint",22),H(2,7),v(3,"div",23),H(4,8),r()),t&2){let e=m();l(),g(e.hintLabel?1:-1)}}var ge=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=U({type:t,selectors:[["mat-label"]]})}return t})(),Ci=new R("MatError");var Je=(()=>{class t{align="start";id=c(he).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=U({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,i){n&2&&(Ce("id",i.id),B("align",null),y("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),wi=new R("MatPrefix");var zn=new R("MatSuffix"),et=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=U({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[fe([{provide:zn,useExisting:t}])]})}return t})(),Nn=new R("FloatingLabelParent"),Dn=(()=>{class t{_elementRef=c(G);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(kn);_ngZone=c(V);_parent=c(Nn);_resizeSubscription=new yt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Mi(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=U({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,i){n&2&&y("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Mi(t){let s=t;if(s.offsetParent!==null)return s.scrollWidth;let e=s.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var Tn="mdc-line-ripple--active",Le="mdc-line-ripple--deactivating",Fn=(()=>{class t{_elementRef=c(G);_cleanupTransitionEnd;constructor(){let e=c(V),n=c(ce);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Le),e.add(Tn)}deactivate(){this._elementRef.nativeElement.classList.add(Le)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,i=n.contains(Le);e.propertyName==="opacity"&&i&&n.remove(Tn,Le)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=U({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),In=(()=>{class t{_elementRef=c(G);_ngZone=c(V);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=u({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,i){if(n&1&&me(Jn,5),n&2){let d;O(d=P())&&(i._notch=d.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,i){n&2&&y("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ei,ngContentSelectors:ti,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,i){n&1&&(Ue(),Ge(0,"div",1),p(1,"div",2,0),H(3),f(),Ge(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),tt=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=U({type:t})}return t})();var nt=new R("MatFormField"),ki=new R("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Rn="fill",Oi="auto",An="fixed",Pi="translateY(-50%)",Ve=(()=>{class t{_elementRef=c(G);_changeDetectorRef=c(jt);_platform=c(ne);_idGenerator=c(he);_ngZone=c(V);_defaults=c(ki,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ue("iconPrefixContainer");_textPrefixContainerSignal=ue("textPrefixContainer");_iconSuffixContainerSignal=ue("iconSuffixContainer");_textSuffixContainerSignal=ue("textSuffixContainer");_prefixSuffixContainers=q(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=qt(ge);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=oe(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Oi}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Rn;this._appearanceSignal.set(n)}_appearanceSignal=Y(Rn);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||An}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||An}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new W;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ln();constructor(){let e=this._defaults,n=c(on);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Q(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=q(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(i+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(de([void 0,void 0]),se(()=>[n.errorState,n.userAriaDescribedBy]),Et(),$(([[d,b],[I,le]])=>d!==I||b!==le)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(xe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Pt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Wt({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=q(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let d=this._hintChildren?this._hintChildren.find(I=>I.align==="start"):null,b=this._hintChildren?this._hintChildren.find(I=>I.align==="end"):null;d?e.push(d.id):this._hintLabel&&e.push(this._hintLabelId),b&&e.push(b.id)}else this._errorChildren&&e.push(...this._errorChildren.map(d=>d.id));let n=this._control.describedByIds,i;if(n){let d=this._describedByIds||e;i=e.concat(n.filter(b=>b&&!d.includes(b)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,d=this._textSuffixContainer?.nativeElement,b=e?.getBoundingClientRect().width??0,I=n?.getBoundingClientRect().width??0,le=i?.getBoundingClientRect().width??0,K=d?.getBoundingClientRect().width??0,Qn=this._currentDirection==="rtl"?"-1":"1",Kn=`${b+I}px`,Zn=`calc(${Qn} * (${Kn} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Yn=`var(--mat-mdc-form-field-label-transform, ${Pi} translateX(${Zn}))`,Xn=b+I+le+K;return[Yn,Xn]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=u({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,i,d){if(n&1&&(Lt(d,i._labelChild,ge,5),Nt(d,tt,5)(d,wi,5)(d,zn,5)(d,Ci,5)(d,Je,5)),n&2){qe();let b;O(b=P())&&(i._formFieldControl=b.first),O(b=P())&&(i._prefixChildren=b),O(b=P())&&(i._suffixChildren=b),O(b=P())&&(i._errorChildren=b),O(b=P())&&(i._hintChildren=b)}},viewQuery:function(n,i){if(n&1&&(Vt(i._iconPrefixContainerSignal,On,5)(i._textPrefixContainerSignal,Pn,5)(i._iconSuffixContainerSignal,Sn,5)(i._textSuffixContainerSignal,En,5),me(ni,5)(On,5)(Pn,5)(Sn,5)(En,5)(Dn,5)(In,5)(Fn,5)),n&2){qe(4);let d;O(d=P())&&(i._textField=d.first),O(d=P())&&(i._iconPrefixContainer=d.first),O(d=P())&&(i._textPrefixContainer=d.first),O(d=P())&&(i._iconSuffixContainer=d.first),O(d=P())&&(i._textSuffixContainer=d.first),O(d=P())&&(i._floatingLabel=d.first),O(d=P())&&(i._notchedOutline=d.first),O(d=P())&&(i._lineRipple=d.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,i){n&2&&y("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[fe([{provide:nt,useExisting:t},{provide:Nn,useExisting:t}])],ngContentSelectors:oi,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,i){if(n&1&&(Ue(ii),ee(0,li,1,1,"ng-template",null,0,Me),a(2,"div",6,1),x("click",function(b){return i._control.onContainerClick(b)}),h(4,si,1,0,"div",7),a(5,"div",8),h(6,mi,2,2,"div",9),h(7,pi,3,0,"div",10),h(8,fi,3,0,"div",11),a(9,"div",12),h(10,hi,1,1,null,13),H(11),r(),h(12,gi,3,0,"div",14),h(13,_i,3,0,"div",15),r(),h(14,bi,1,0,"div",16),r(),a(15,"div",17),h(16,vi,2,0,"div",18)(17,yi,5,1,"div",19),r()),n&2){let d;l(2),y("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),l(2),g(!i._hasOutline()&&!i._control.disabled?4:-1),l(2),g(i._hasOutline()?6:-1),l(),g(i._hasIconPrefix?7:-1),l(),g(i._hasTextPrefix?8:-1),l(2),g(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),l(2),g(i._hasTextSuffix?12:-1),l(),g(i._hasIconSuffix?13:-1),l(),g(i._hasOutline()?-1:14),l(),y("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let b=i._getSubscriptMessageType();l(),g((d=b)==="error"?16:d==="hint"?17:-1)}},dependencies:[Dn,In,Oe,Fn,Je],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Ln=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=J({type:t});static \u0275inj=Z({imports:[rn,Ve,Te]})}return t})();var Ei=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=u({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),Di={passive:!0},Vn=(()=>{class t{_platform=c(ne);_ngZone=c(V);_renderer=c(Rt).createRenderer(null,null);_styleLoader=c(nn);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return wt;this._styleLoader.load(Ei);let n=Ze(e),i=this._monitoredElements.get(n);if(i)return i.subject;let d=new W,b="cdk-text-field-autofilled",I=K=>{K.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(b)?(n.classList.add(b),this._ngZone.run(()=>d.next({target:K.target,isAutofilled:!0}))):K.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(b)&&(n.classList.remove(b),this._ngZone.run(()=>d.next({target:K.target,isAutofilled:!1})))},le=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",I,Di)));return this._monitoredElements.set(n,{subject:d,unlisten:le}),d}stopMonitoring(e){let n=Ze(e),i=this._monitoredElements.get(n);i&&(i.unlisten(),i.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=ye({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bn=new R("MAT_INPUT_VALUE_ACCESSOR");var Ti=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Fi=new R("MAT_INPUT_CONFIG"),Hn=(()=>{class t{_elementRef=c(G);_platform=c(ne);ngControl=c(pn,{optional:!0,self:!0});_autofillMonitor=c(Vn);_ngZone=c(V);_formField=c(nt,{optional:!0});_renderer=c(ce);_uid=c(he).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(Fi,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new W;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=oe(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ze.required)??!1}set required(e){this._required=oe(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Qe().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=oe(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Qe().has(e));constructor(){let e=c(gn,{optional:!0}),n=c(Ne,{optional:!0}),i=c(yn),d=c(Bn,{optional:!0,self:!0}),b=this._elementRef.nativeElement,I=b.nodeName.toLowerCase();d?zt(d.value)?this._signalBasedValueAccessor=d:this._inputValueAccessor=d:this._inputValueAccessor=b,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(b,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Cn(i,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=I==="select",this._isTextarea=I==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=b.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Q(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ti.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=U({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,i){n&1&&x("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),n&2&&(Ce("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),B("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),y("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",$e]},exportAs:["matInput"],features:[fe([{provide:tt,useExisting:t}]),It]})}return t})();function ot(t){return t===null?Y(null):Xt(Ii(t),{initialValue:null})}function Ii(t){let e=6e4-(Date.now()-t)%6e4;return Mt(null).pipe(St(e),Tt(()=>Ot(6e4).pipe(de(null))),de(null),se(()=>Math.floor((Date.now()-t)/6e4)),se(Ri))}function Ri(t){if(t===0)return"< 1 minute ago";if(t<60)return`${t} minute${it(t)} ago`;let s=Math.floor(t/60);if(s<48)return`${s} hour${it(s)} ago`;let e=Math.floor(s/24);return`${e} day${it(e)} ago`}function it(t){return t>1?"s":""}function zi(t,s){if(t&1&&(o(0),a(1,"strong"),o(2),r()),t&2){let e=m();M(" Your current browser (",e.browser().type,") is not supported by Rainy Days at the moment. Use one of the following browsers for guaranteed full game experience: "),l(2),C(e.supportedBrowserList)}}function Ni(t,s){if(t&1&&(o(0),a(1,"strong"),o(2),r(),o(3)),t&2){let e=m();M(" Your current browser (",e.browser().type,") is supported by Rainy Days, but only starting from version "),l(2),C(e.supportedVersionForBrowser()),l(),M(" (your version: ",e.browser().version,") ")}}var rt=(()=>{class t{constructor(){this.browser=A.required(),this.isUnsupported=q(()=>!(this.browser().type in Ee)),this.supportedVersionForBrowser=q(()=>Ee[this.browser().type]),this.supportedBrowserList=Object.keys(Ee).sort().join(", ")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-browser-support-notice-tile"]],inputs:{browser:[1,"browser"]},decls:3,vars:1,consts:[["matTooltip","Only supported browser versions are guaranteed to run the game as it was intended. Update your browser or switch browsers, otherwise the game may have issues and bugs that will not be fixed in the future.","matTooltipPosition","left","matTooltipClass","no-select"]],template:function(n,i){n&1&&(a(0,"p",0),h(1,zi,3,2)(2,Ni,4,3),r()),n&2&&(l(),g(i.isUnsupported()?1:2))},dependencies:[Ae,Re],styles:["[_nghost-%COMP%]{display:flex;align-items:center;gap:1rem;border:2px solid var(--rd-warn);border-radius:1rem;padding:1rem;background-color:var(--rd-warn-lighter);width:max(40%,15rem);opacity:.75;transition-property:opacity;transition-duration:1s;-webkit-user-select:none;user-select:none;animation:_ngcontent-%COMP%_appear 1s}@starting-style{[_nghost-%COMP%]{opacity:0;animation:none}}p[_ngcontent-%COMP%]{color:var(--rd-black);font-size:.875rem;text-align:center;margin:0}@keyframes _ngcontent-%COMP%_appear{0%{opacity:0}to{opacity:.75}}"],changeDetection:0})}}return t})();var Li=["determinateSpinner"];function Vi(t,s){if(t&1&&(He(),a(0,"svg",11),v(1,"circle",12),r()),t&2){let e=m();B("viewBox",e._viewBox()),l(),we("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),B("r",e._circleRadius())}}var Bi=new R("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Gn})}),Gn=100,Hi=10,Un=(()=>{class t{_elementRef=c(G);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(Bi),n=an(),i=this._elementRef.nativeElement;this._noopAnimations=n==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&n==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Gn;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Hi)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=u({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,i){if(n&1&&me(Li,5),n&2){let d;O(d=P())&&(i._determinateCircle=d.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,i){n&2&&(B("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),Bt("mat-"+i.color),we("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),y("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",ke],diameter:[2,"diameter","diameter",ke],strokeWidth:[2,"strokeWidth","strokeWidth",ke]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,i){if(n&1&&(ee(0,Vi,2,8,"ng-template",null,0,Me),a(2,"div",2,1),He(),a(4,"svg",3),v(5,"circle",4),r()(),Ft(),a(6,"div",5)(7,"div",6)(8,"div",7),te(9,8),r(),a(10,"div",9),te(11,8),r(),a(12,"div",10),te(13,8),r()()()),n&2){let d=pe(1);l(4),B("viewBox",i._viewBox()),l(),we("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),B("r",i._circleRadius()),l(4),_("ngTemplateOutlet",d),l(2),_("ngTemplateOutlet",d),l(2),_("ngTemplateOutlet",d)}},dependencies:[Oe],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var qn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=J({type:t});static \u0275inj=Z({imports:[Te]})}return t})();function qi(t,s){t&1&&v(0,"mat-spinner",0),t&2&&_("diameter",32)}function ji(t,s){t&1&&(a(0,"mat-icon"),o(1,"check"),r())}function Wi(t,s){t&1&&(a(0,"mat-icon"),o(1,"close"),r())}function $i(t,s){t&1&&(a(0,"mat-icon"),o(1,"wifi_off"),r())}var at=(()=>{class t{constructor(){this.state=A.required(),this.openDialog=Ut(),this.flags=q(()=>this.calculateFlags(this.state())),this.message=q(()=>{switch(this.state()){case k.CHECKING:return"Checking for updates...";case k.DOWNLOADING:return"Downloading updates...";case k.UPDATE_DOWNLOAD_FAILED:return"Downloading updates failed!";case k.UPDATE_DOWNLOAD_SUCCESSFUL:return"Updates downloaded!";case k.LATEST_VERSION:return"No updates found.";case k.OFFLINE:return"The game is offline!"}})}onClick(){this.state()===k.UPDATE_DOWNLOAD_SUCCESSFUL&&this.openDialog.emit()}calculateFlags(e){return{isHidden:e===k.LATEST_VERSION,isLoading:e===k.CHECKING||e===k.DOWNLOADING,isSuccessful:e===k.LATEST_VERSION||e===k.UPDATE_DOWNLOAD_SUCCESSFUL,isError:e===k.UPDATE_DOWNLOAD_FAILED,isClickable:e===k.UPDATE_DOWNLOAD_SUCCESSFUL,isOffline:e===k.OFFLINE}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-update-info-tile"]],hostVars:4,hostBindings:function(n,i){n&1&&x("click",function(){return i.onClick()}),n&2&&y("hidden",i.flags().isHidden)("clickable",i.flags().isClickable)},inputs:{state:[1,"state"]},outputs:{openDialog:"openDialog"},decls:6,vars:2,consts:[["mode","indeterminate",1,"loading-indicator",3,"diameter"]],template:function(n,i){n&1&&(h(0,qi,1,1,"mat-spinner",0)(1,ji,2,0,"mat-icon")(2,Wi,2,0,"mat-icon")(3,$i,2,0,"mat-icon"),a(4,"p"),o(5),r()),n&2&&(g(i.flags().isLoading?0:i.flags().isSuccessful?1:i.flags().isError?2:i.flags().isOffline?3:-1),l(5),C(i.message()))},dependencies:[qn,Un,Fe,ae],styles:["[_nghost-%COMP%]{display:flex;align-items:center;gap:1rem;color:var(--rd-primary-darker);border:2px solid var(--rd-primary);border-radius:1rem;padding:1rem;background-color:var(--rd-primary-lighter);opacity:.75;transition-property:opacity;transition-delay:3s;transition-duration:3s;-webkit-user-select:none;user-select:none}.hidden[_nghost-%COMP%]{opacity:0}.clickable[_nghost-%COMP%]{cursor:pointer}mat-icon[_ngcontent-%COMP%]{--size: 32px;font-size:var(--size);height:var(--size);width:var(--size)}p[_ngcontent-%COMP%]{margin-block:0;margin-inline-end:.5rem}"],changeDetection:0})}}return t})();var lt=(()=>{class t{constructor(){this.dialogRef=c(ie)}close(){this.dialogRef.close()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-mobile-notice-dialog"]],decls:6,vars:0,consts:[["mat-flat-button","","color","accent",3,"click"]],template:function(n,i){n&1&&(a(0,"h2"),o(1,"Unsupported platform!"),r(),a(2,"p"),o(3,` You are trying to play Rainy Days from Android or IOS, which is currently not supported! Try opening it from a PC in a browser or installed app instead!
`),r(),a(4,"button",0),x("click",function(){return i.close()}),o(5,` Understood!
`),r())},dependencies:[j,L],styles:["[_nghost-%COMP%]{display:block;position:relative;padding:2rem;min-height:75dvh;min-width:50dvw;box-sizing:border-box;background-color:var(--rd-dialog-background-color)}@media(width<=500px){[_nghost-%COMP%]{padding:1rem;max-width:100dvw}}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.75rem;margin-block:0 2rem}[_nghost-%COMP%]{min-width:unset;width:40dvw;min-height:unset}@media(width<=500px){[_nghost-%COMP%]{width:unset}}p[_ngcontent-%COMP%]{text-align:justify}button[_ngcontent-%COMP%]{width:100%;margin-top:1rem}"],changeDetection:0})}}return t})();var st=(()=>{class t{constructor(){this.dialogRef=c(ie)}restartGame(){document.location.reload()}close(){this.dialogRef.close()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-version-update-dialog"]],decls:9,vars:0,consts:[[1,"buttons-container"],["mat-flat-button","","color","accent",3,"click"]],template:function(n,i){n&1&&(a(0,"h2"),o(1,"New version is available!"),r(),a(2,"p"),o(3,` New version of Rainy Days is available for you to play! Do you want to install the new updates, or continue playing with this version? Installing the updates require restarting the game.
`),r(),a(4,"div",0)(5,"button",1),x("click",function(){return i.restartGame()}),o(6," Restart the game "),r(),a(7,"button",1),x("click",function(){return i.close()}),o(8," Not now "),r()())},dependencies:[j,L],styles:["[_nghost-%COMP%]{display:block;position:relative;padding:2rem;min-height:75dvh;min-width:50dvw;box-sizing:border-box;background-color:var(--rd-dialog-background-color)}@media(width<=500px){[_nghost-%COMP%]{padding:1rem;max-width:100dvw}}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.75rem;margin-block:0 2rem}[_nghost-%COMP%]{min-width:unset;width:40dvw;min-height:unset}p[_ngcontent-%COMP%]{text-align:justify;margin-block:2rem}"],changeDetection:0})}}return t})();function Qi(t,s){if(t&1&&(a(0,"kbd",6),o(1),r()),t&2){let e=s.$implicit;l(),C(e)}}function Ki(t,s){if(t&1&&T(0,Qi,2,1,"kbd",6,D),t&2){let e=m(3).$implicit;F(e.keys)}}function Zi(t,s){if(t&1&&(a(0,"span",7),o(1),r()),t&2){let e=s.$implicit;l(),C(e)}}function Yi(t,s){if(t&1&&T(0,Zi,2,1,"span",7,D),t&2){let e=m(3).$implicit;F(e.keyNames)}}function Xi(t,s){if(t&1&&(a(0,"mat-icon"),o(1),r()),t&2){let e=m(3).$implicit;l(),C(e.icon)}}function Ji(t,s){if(t&1&&(a(0,"td",3)(1,"div",4),h(2,Ki,2,0)(3,Yi,2,0),h(4,Xi,2,1,"mat-icon"),r()(),a(5,"td",5),o(6),r()),t&2){let e=m(2).$implicit,n=e.descriptions.length;_("rowSpan",n),l(2),g(e.keys?2:e.keyNames?3:-1),l(2),g(e.icon?4:-1),l(),_("rowSpan",n),l(),M(" ",e.name," ")}}function eo(t,s){if(t&1&&(a(0,"tr"),h(1,Ji,7,5),a(2,"td",2),o(3),r()()),t&2){let e=s.$implicit,n=s.$index;l(),g(n===0?1:-1),l(2),C(e)}}function to(t,s){if(t&1&&T(0,eo,4,2,"tr",null,D),t&2){let e=s.$implicit;F(e.descriptions)}}var dt=(()=>{class t{constructor(){this.controls=[{keyNames:["Mouse Left"],icon:"mouse",name:"Primary action",descriptions:["Build the selected building when there is","Connect hovered roads when the editor tool is selected"]},{keyNames:["Mouse Right"],icon:"mouse",name:"Secondary action",descriptions:["Delete the selected building when there is","Open the context menu for the building (if it has) when the editor tool is selected"]},{keys:["0"],icon:"keyboard",name:"Toolbar item: editor tool",descriptions:["Switch to the editor tool to connect different roads and open the context menus of buildings"]},{keys:Array.from({length:5},(e,n)=>String(n+1)),icon:"keyboard",name:"Toolbar items: buildings",descriptions:["Switch between the buildable objects in the toolbar"]},{keyNames:["Mouse Scroll"],icon:"mouse",name:"Scroll through toolbar",descriptions:["Scroll through the toolbar items, with cycle enabled"]},{keyNames:["Space"],icon:"keyboard",name:"Pause / Resume",descriptions:["Pause or resume the game"]},{keys:["Q","W","E","R"],icon:"keyboard",name:"Change game speed",descriptions:["Change the game speed to x1, x2, x4 and x8, respectively"]}]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-controls-dialog"]],decls:12,vars:0,consts:[[1,"table-wrapper"],["colspan","2"],[1,"description"],[3,"rowSpan"],[1,"keys-container"],[1,"name",3,"rowSpan"],[1,"key"],[1,"key-name"]],template:function(n,i){n&1&&(v(0,"rd-dialog-close-button"),a(1,"h4"),o(2,"Controls"),r(),a(3,"div",0)(4,"table")(5,"tr")(6,"th",1),o(7,"Control"),r(),a(8,"th"),o(9,"Description"),r()(),T(10,to,2,0,null,null,D),r()()),n&2&&(l(10),F(i.controls))},dependencies:[Fe,ae,N],styles:["[_nghost-%COMP%]{display:block;position:relative;padding:2rem;min-height:75dvh;min-width:50dvw;box-sizing:border-box;background-color:var(--rd-dialog-background-color)}@media(width<=500px){[_nghost-%COMP%]{padding:1rem;max-width:100dvw}}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.75rem;margin-block:0 2rem}[_nghost-%COMP%]{max-height:90dvh;--scrollbar-track-color: var(--rd-primary-lightest);--scrollbar-thumb-color: var(--rd-primary);overflow-y:auto;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}.table-wrapper[_ngcontent-%COMP%]{padding:1.5rem;background-color:var(--rd-primary-lightest)}table[_ngcontent-%COMP%]{table-layout:fixed;border-collapse:collapse}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem 1.5rem}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:only-child, table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:only-child{border-left:1px solid var(--rd-primary)}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.25rem}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:1px solid var(--rd-primary)}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1), table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){width:15rem}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){width:25rem}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .keys-container[_ngcontent-%COMP%]{display:inline-flex;gap:.5rem;align-items:center;-webkit-user-select:none;user-select:none;width:100%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .keys-container[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{font-size:1rem;padding:.25rem .5rem;background-color:var(--rd-white);box-shadow:.25rem .1875rem var(--rd-primary-darker);border-radius:.25rem}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .keys-container[_ngcontent-%COMP%]   .key-name[_ngcontent-%COMP%]{font-size:1rem;font-family:monospace}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .keys-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:auto;padding-top:.125rem}table[_ngcontent-%COMP%]   td.description[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td.name[_ngcontent-%COMP%]{text-wrap:pretty;text-align:center}"],changeDetection:0})}}return t})();var ct=(()=>{class t{constructor(){this.githubDiscussionsUrl="https://github.com/bechryko/rainy-days/discussions",this.feedbackPollsUrl="https://github.com/bechryko/rainy-days/discussions/categories/feedback-polls",this.musicFeedbackUrl="https://github.com/bechryko/rainy-days/discussions/categories/music",this.featureIdeasUrl="https://github.com/bechryko/rainy-days/discussions/categories/ideas",this.bugReportUrl="https://github.com/bechryko/rainy-days/discussions/categories/bugs"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-feedback-dialog"]],decls:17,vars:5,consts:[["href","https://github.com/","target","_blank","tabindex","-1"],["name","github"],["target","_blank",1,"feedback-link",3,"href"],["mat-flat-button","","color","accent","target","_blank",3,"href"]],template:function(n,i){n&1&&(v(0,"rd-dialog-close-button"),a(1,"h4"),o(2,"Give feedback!"),r(),a(3,"p"),o(4,"Help shape the future of Rainy Days! Give feedback on various topics, or post new feature ideas, report bugs!"),r(),a(5,"a",0),v(6,"rd-icon",1),r(),a(7,"a",2),o(8,` Take part in polls about feature changes or new features!
`),r(),a(9,"a",2),o(10,` Give feedback on the music of the game!
`),r(),a(11,"a",2),o(12,` Share with the creator your new ideas for the game!
`),r(),a(13,"a",2),o(14,` Report any bugs you discover in the game!
`),r(),a(15,"a",3),o(16,` Visit our GitHub Discussions page!
`),r()),n&2&&(l(7),_("href",i.feedbackPollsUrl,X),l(2),_("href",i.musicFeedbackUrl,X),l(2),_("href",i.featureIdeasUrl,X),l(2),_("href",i.bugReportUrl,X),l(2),_("href",i.githubDiscussionsUrl,X))},dependencies:[N,Ie,j,L],styles:['[_nghost-%COMP%]{display:block;position:relative;padding:2rem;min-height:75dvh;min-width:50dvw;box-sizing:border-box;background-color:var(--rd-dialog-background-color)}@media(width<=500px){[_nghost-%COMP%]{padding:1rem;max-width:100dvw}}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.75rem;margin-block:0 2rem}[_nghost-%COMP%]{min-height:revert;min-width:revert;height:fit-content}rd-icon[_ngcontent-%COMP%]{display:block;margin-inline:auto;width:98px;height:96px}a[_ngcontent-%COMP%]:has(>rd-icon){display:block;width:fit-content}p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{display:block;font-size:1.25rem;text-align:center;max-width:35rem;margin:2.5rem auto}p[_ngcontent-%COMP%]:focus-visible, a[_ngcontent-%COMP%]:focus-visible{outline:none}.feedback-link[_ngcontent-%COMP%]{position:relative}.feedback-link[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:currentcolor;transition:transform .25s ease-out;transform-origin:bottom center}.feedback-link[_ngcontent-%COMP%]:hover:after{transform:scaleX(1);transform-origin:inherit}.feedback-link[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-decoration:none;width:fit-content;line-height:1.5}.feedback-link[_ngcontent-%COMP%]:focus-visible{color:var(--rd-primary)}.mdc-button[_ngcontent-%COMP%]{padding:1rem;width:fit-content;height:fit-content;margin-inline:auto}'],changeDetection:0})}}return t})();var mt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-guide-cars"]],decls:22,vars:0,template:function(n,i){n&1&&(p(0,"h5"),o(1,"Cars"),f(),p(2,"p"),o(3,` Cars are the main driving force behind the game. They spawn, they follow the road, they get painted over by the rain, and then, if the player has planned their infrastructure cleverly, they arrive at the destination of the same color as them.
`),f(),p(4,"p"),o(5,"At normal (x1) game speed, they move at the rate of exactly 1 tile per second."),f(),p(6,"h6"),o(7,"Movement"),f(),p(8,"p"),o(9,"Cars follow the road they are on. When they reach a dead end, they turn back."),f(),p(10,"h6"),o(11,"Intersections"),f(),p(12,"p"),o(13,` When a car reaches an intersection, it will take the first possible route from the right. The easiest way to control this behavior is to use different gates.
`),f(),p(14,"h6"),o(15,"Collision"),f(),p(16,"p"),o(17,` Because there is only room for one car on the roads, when two cars driving in opposite directions meet, they collide. Both cars are then destroyed.
`),f(),p(18,"h6"),o(19,"Cars off the road"),f(),p(20,"p"),o(21,` If a car is moved off the road (for example, because the player has wiped it out underneath), it will be unable to move, even if there is a road on a tile next to it. It can only start moving again if there is a road underneath it from which it can reach a road on an adjacent tile.
`),f())},styles:["[_nghost-%COMP%]{max-width:35rem;background-color:var(--rd-primary-lightest);padding:1rem;border-radius:.5rem;overflow-y:auto;--scrollbar-track-color: var(--rd-primary-lightest);--scrollbar-thumb-color: var(--rd-primary);overflow-y:scroll;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:var(--rd-primary);text-wrap:balance}h5[_ngcontent-%COMP%]{font-size:2rem;text-align:center;margin-block:1.5rem}h6[_ngcontent-%COMP%]{font-size:1.25rem;margin-block:1.5rem 1rem;margin-left:1rem}p[_ngcontent-%COMP%]{text-wrap:pretty;text-indent:1rem;text-align:justify}p[_ngcontent-%COMP%]:not(:first-child){margin-top:0}p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.25rem}"],changeDetection:0})}}return t})();var pt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-guide-gates"]],decls:14,vars:0,template:function(n,i){n&1&&(p(0,"h5"),o(1,"Gates"),f(),p(2,"p"),o(3,` Gates are buildings that, according to certain rules, can prevent cars from entering their tile. They are small, square buildings that can be placed on a tile with a road on it, but the player cannot put more than one gate on a tile, or on a tile with a spawned building on it.
`),f(),p(4,"h6"),o(5,"Colored gates"),f(),p(6,"p"),o(7,` Colored gates can filter cars by their color. They do not let cars of the same color through, but they let all others through.
`),f(),p(8,"p"),o(9,` At the start of each game, the player receives two randomly colored colored gates, which they can use until the end of the game.
`),f(),p(10,"h6"),o(11,"Timed gates"),f(),p(12,"p"),o(13,` The timed gates switch their state every 4 seconds, whether they are open or closed. By selecting the Editor tool, the player can right-click on them to open their context menu, where they can see exactly how long it takes for their state to switch, they can also switch it, and they can set a timed pause, which stops the game when the gate switches state.
`),f())},styles:["[_nghost-%COMP%]{max-width:35rem;background-color:var(--rd-primary-lightest);padding:1rem;border-radius:.5rem;overflow-y:auto;--scrollbar-track-color: var(--rd-primary-lightest);--scrollbar-thumb-color: var(--rd-primary);overflow-y:scroll;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:var(--rd-primary);text-wrap:balance}h5[_ngcontent-%COMP%]{font-size:2rem;text-align:center;margin-block:1.5rem}h6[_ngcontent-%COMP%]{font-size:1.25rem;margin-block:1.5rem 1rem;margin-left:1rem}p[_ngcontent-%COMP%]{text-wrap:pretty;text-indent:1rem;text-align:justify}p[_ngcontent-%COMP%]:not(:first-child){margin-top:0}p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.25rem}"],changeDetection:0})}}return t})();var ft=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-guide-goal"]],decls:20,vars:0,template:function(n,i){n&1&&(p(0,"h5"),o(1,"The goal"),f(),p(2,"p"),o(3,` The aim of the game is to get company cars from their starting point to their destination. They appear in the game in the form of spawner and destination buildings, which are created continuously every 45 seconds during the game.
`),f(),p(4,"h6"),o(5,"Spawners"),f(),p(6,"p"),o(7,` Spawners are small, circular buildings that spawn a car every 4 seconds, in the same color as the spawner itself. It launches the car clockwise from north in the first direction the car can go.
`),f(),p(8,"p"),o(9,` Right-clicking on the spawner with the Editor tool (key 0) selected opens a context menu that shows information about when exactly the car will spawn, as well as the possibility to delay the remaining time. In addition, you can set a timed pause, which stops the game when a new car spawns.
`),f(),p(10,"h6"),o(11,"Destinations"),f(),p(12,"p"),o(13,` Destinations are large, circular buildings with a given life. Every second this life decreases by one, and if any destination's life drops to 0, the game is over. However, their health can be replenished by getting cars into the destination, in the same color as the destination. (Cars of other colors are ignored.) Cars that get in will extend the life of a destination by 5 seconds, meaning that if a spawner can continuously supply a destination, its health will keep increasing. The first destination spawns with 45 health, and each subsequent destination spawns with 1 more health than the previous one.
`),f(),p(14,"p"),o(15,` To get a car in a destination, you have to place a road under it. But beware, if you place a regular road, and there is raining on the destination's tile, the rain will repaint the car before it can get into the destination! If you are not sure of the type of the road below the destination by looking at it, the building's context menu will tell you the road type.
`),f(),p(16,"h6"),o(17,"Spawning of spawners and destinations"),f(),p(18,"p"),o(19,` These two buildings spawn every 45 seconds. The main spawning rule is that the new spawned building must be at least 5 steps (up, right, down, left) away from any previous one. If there is not enough space, they try to spawn 4 steps away, if not, 3, then 2, and if that is not possible either, the game is over. At the start of the game (during the first 3 spawns) they try to spawn in the middle of the playing area, i.e. anywhere by skipping the first and last 4 rows and columns. However, if they cannot keep the 5 steps distance during the first 3 spawns, they can spawn outside.
`),f())},styles:["[_nghost-%COMP%]{max-width:35rem;background-color:var(--rd-primary-lightest);padding:1rem;border-radius:.5rem;overflow-y:auto;--scrollbar-track-color: var(--rd-primary-lightest);--scrollbar-thumb-color: var(--rd-primary);overflow-y:scroll;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:var(--rd-primary);text-wrap:balance}h5[_ngcontent-%COMP%]{font-size:2rem;text-align:center;margin-block:1.5rem}h6[_ngcontent-%COMP%]{font-size:1.25rem;margin-block:1.5rem 1rem;margin-left:1rem}p[_ngcontent-%COMP%]{text-wrap:pretty;text-indent:1rem;text-align:justify}p[_ngcontent-%COMP%]:not(:first-child){margin-top:0}p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.25rem}"],changeDetection:0})}}return t})();var ut=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-guide-overview"]],decls:12,vars:0,template:function(n,i){n&1&&(p(0,"h5"),o(1,"Overview"),f(),p(2,"p"),o(3,` Rainy Days is a strategy game where you have to build roads and buildings to get the cars to their destination. All this in a world where colorful rain pours down from the sky, making your job difficult in a world of demanding companies.
`),f(),p(4,"h6"),o(5,"What are these companies?"),f(),p(6,"p"),o(7,` Recently you were approached by car manufacturing corporations as a director of a transport company. They want to move cars from one of their factories to another and they asked for your help to make it happen. You decided to take on the task and build the roads connecting the factories. You also enlisted the help of other construction companies to help you with special robot-controlled buildings in this unusual place.
`),f(),p(8,"h6"),o(9,"Where is this rain coming from?"),f(),p(10,"p"),o(11,` No one knows. One day, the strange rain clouds appeared and changed the world forever. Some people despair at the out-of-this-world phenomenon, while others try to turn this changed world to their own advantage.
`),f())},styles:["[_nghost-%COMP%]{max-width:35rem;background-color:var(--rd-primary-lightest);padding:1rem;border-radius:.5rem;overflow-y:auto;--scrollbar-track-color: var(--rd-primary-lightest);--scrollbar-thumb-color: var(--rd-primary);overflow-y:scroll;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:var(--rd-primary);text-wrap:balance}h5[_ngcontent-%COMP%]{font-size:2rem;text-align:center;margin-block:1.5rem}h6[_ngcontent-%COMP%]{font-size:1.25rem;margin-block:1.5rem 1rem;margin-left:1rem}p[_ngcontent-%COMP%]{text-wrap:pretty;text-indent:1rem;text-align:justify}p[_ngcontent-%COMP%]:not(:first-child){margin-top:0}p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.25rem}"],changeDetection:0})}}return t})();var ht=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-guide-roads"]],decls:16,vars:0,template:function(n,i){n&1&&(p(0,"h5"),o(1,"Roads"),f(),p(2,"p"),o(3,` Roads are currently the only way for cars to get from their spawners to their destinations. They cannot accommodate two cars side by side, and cars travel on them at a constant speed of 1 tile per second. They can be built on a tile with any kind of building on it, but there can't be put more than one road on a tile.
`),f(),p(4,"h6"),o(5,"Basic roads"),f(),p(6,"p"),o(7,` Basic roads do not have any special features. The cars on them are exposed to the weather, which means rain can change their color.
`),f(),p(8,"h6"),o(9,"Tubes"),f(),p(10,"p"),o(11,` Tubes are special roads that can guide cars in a covered environment. Cars traveling in tubes are not drenched by colored rain.
`),f(),p(12,"h6"),o(13,"Connecting roads"),f(),p(14,"p"),o(15,` By default, roads of the same type are connected, always. On the other hand, you can link roads of different types using the Editor tool, which is the first element of the toolbar and can be activated with the 0 key. If the player holds down the left mouse button and moves the cursor between two adjacent roads, they are linked, regardless of their type. The resulting bond cannot be deleted unless either of the two roads is deleted.
`),f())},styles:["[_nghost-%COMP%]{max-width:35rem;background-color:var(--rd-primary-lightest);padding:1rem;border-radius:.5rem;overflow-y:auto;--scrollbar-track-color: var(--rd-primary-lightest);--scrollbar-thumb-color: var(--rd-primary);overflow-y:scroll;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){[_nghost-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:var(--rd-primary);text-wrap:balance}h5[_ngcontent-%COMP%]{font-size:2rem;text-align:center;margin-block:1.5rem}h6[_ngcontent-%COMP%]{font-size:1.25rem;margin-block:1.5rem 1rem;margin-left:1rem}p[_ngcontent-%COMP%]{text-wrap:pretty;text-indent:1rem;text-align:justify}p[_ngcontent-%COMP%]:not(:first-child){margin-top:0}p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.25rem}"],changeDetection:0})}}return t})();function no(t,s){if(t&1){let e=z();a(0,"div",3),x("click",function(){let i=S(e).$implicit,d=m();return E(d.selectItem(i))}),o(1),r()}if(t&2){let e=s.$implicit,n=m();y("selected",n.selectedItem===e),l(),M(" ",e.title," ")}}var gt=(()=>{class t{constructor(){this.items=[{title:"Overview",component:ut},{title:"Goal",component:ft},{title:"Cars",component:mt},{title:"Roads",component:ht},{title:"Gates",component:pt}],this.selectedItem=this.items[0]}selectItem(e){this.selectedItem=e}onKeyDown(e){["ArrowUp","KeyW"].includes(e.code)?this.nextItem(-1):["ArrowDown","KeyS"].includes(e.code)&&this.nextItem(1)}nextItem(e){this.selectItem(this.items[(this.selectedItemIndex+this.items.length+e)%this.items.length])}get selectedItemIndex(){return this.items.indexOf(this.selectedItem)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-guide-dialog"]],hostBindings:function(n,i){n&1&&x("keydown",function(b){return i.onKeyDown(b)})},decls:8,vars:1,consts:[[1,"split-content-chooser"],[1,"split-content-chooser-node",3,"selected"],[3,"ngComponentOutlet"],[1,"split-content-chooser-node",3,"click"]],template:function(n,i){n&1&&(v(0,"rd-dialog-close-button"),a(1,"h4"),o(2,"Guide"),r(),a(3,"main")(4,"div",0),T(5,no,2,3,"div",1,D),r(),te(7,2),r()),n&2&&(l(5),F(i.items),l(2),_("ngComponentOutlet",i.selectedItem.component))},dependencies:[N,$t],styles:["[_nghost-%COMP%]{display:block;position:relative;padding:2rem;min-height:75dvh;min-width:50dvw;box-sizing:border-box;background-color:var(--rd-dialog-background-color)}@media(width<=500px){[_nghost-%COMP%]{padding:1rem;max-width:100dvw}}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.75rem;margin-block:0 2rem}[_nghost-%COMP%]{display:grid;grid-template-rows:4.125rem calc(100% - 4.125rem);min-height:0;height:75dvh;max-height:45rem;overflow:hidden}@media(width<=500px){[_nghost-%COMP%]{width:100dvw}}main[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;gap:1rem}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]{font-size:1.125rem;background-color:var(--rd-accent-lightest);border-radius:.5rem;-webkit-user-select:none;user-select:none;overflow:hidden;--scrollbar-track-color: var(--rd-accent-lightest);--scrollbar-thumb-color: var(--rd-accent-lighter);overflow-y:auto;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]   .split-content-chooser-node[_ngcontent-%COMP%]{position:relative;color:var(--rd-accent-darker);font-weight:550;padding:.75em;transition:background-color .3s ease}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]   .split-content-chooser-node.selected[_ngcontent-%COMP%]{background-color:var(--rd-accent-lighter)}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]   .split-content-chooser-node[_ngcontent-%COMP%]:not(.selected){cursor:pointer}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]   .split-content-chooser-node.split-content-chooser-child-node[_ngcontent-%COMP%]{padding-left:2em}main[_ngcontent-%COMP%]   .split-content-data[_ngcontent-%COMP%]{background-color:var(--rd-primary-lightest);padding:1rem;border-radius:.5rem;--scrollbar-track-color: var(--rd-primary-lightest);--scrollbar-thumb-color: var(--rd-primary);overflow-y:auto;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){main[_ngcontent-%COMP%]   .split-content-data[_ngcontent-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){main[_ngcontent-%COMP%]   .split-content-data[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}main[_ngcontent-%COMP%]   .split-content-data[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}"],changeDetection:0})}}return t})();var _t=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-roadmap-dialog"]],decls:45,vars:0,consts:[[1,"greenhorn-qol"],[1,"version-container"],[1,"version-name"],[1,"description"],[1,"content"],[1,"rain-your-paint"],[1,"difficulty-update"],[1,"more-planned"]],template:function(n,i){n&1&&(v(0,"rd-dialog-close-button"),a(1,"h4"),o(2,"Roadmap"),r(),a(3,"main")(4,"div",0)(5,"div",1)(6,"h5"),o(7,"1.1"),r(),a(8,"p",2),o(9,"Greenhorn QoL update"),r(),a(10,"p",3),o(11,"A quality of life update focusing on new players!"),r(),a(12,"ul",4)(13,"li"),o(14,"Tutorial"),r(),a(15,"li"),o(16,"New utility building"),r(),a(17,"li"),o(18,"Challenge modes"),r(),a(19,"li"),o(20,"A map feature that spices up the game"),r()()()(),a(21,"div",5)(22,"div",1)(23,"h5"),o(24,"1.2"),r(),a(25,"p",2),o(26,"Rain Your Paint"),r(),a(27,"p",3),o(28,"Somehow you will be able to turn the rain's power to your side!"),r(),a(29,"ul",4)(30,"li"),o(31,"New versatile building"),r(),a(32,"li"),o(33,"New game mode option"),r()()()(),a(34,"div",6)(35,"div",1)(36,"h5"),o(37,"1.3"),r(),a(38,"p",3),o(39,"In this update, you can show you are among the best players!"),r(),a(40,"ul",4)(41,"li"),o(42,"Difficulties"),r()()()(),a(43,"p",7),o(44,"And even more challenges, opportunities and fun rainy updates are planned!"),r()())},dependencies:[N],styles:['[_nghost-%COMP%]{display:block;position:relative;padding:2rem;min-height:75dvh;min-width:50dvw;box-sizing:border-box;background-color:var(--rd-dialog-background-color)}@media(width<=500px){[_nghost-%COMP%]{padding:1rem;max-width:100dvw}}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.75rem;margin-block:0 2rem}[_nghost-%COMP%]{min-height:fit-content;min-width:0;max-width:70rem}main[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr)}@media(width<=500px){main[_ngcontent-%COMP%]{grid-template-columns:unset;grid-template-rows:repeat(3,1fr)}}main[_ngcontent-%COMP%]   .version-container[_ngcontent-%COMP%]{display:grid;grid-template-rows:3rem 2.5rem 6rem 12rem;grid-template-areas:"version" "name" "description" "content";align-items:center;padding:1.5rem;background-color:transparent}@media(width<=500px){main[_ngcontent-%COMP%]   .version-container[_ngcontent-%COMP%]{grid-template-rows:unset;height:100%;box-sizing:border-box}}main[_ngcontent-%COMP%]   .version-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]   .version-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{grid-area:version;font-size:2rem;color:var(--rd-primary-darker)}main[_ngcontent-%COMP%]   .version-container[_ngcontent-%COMP%]   .version-name[_ngcontent-%COMP%]{grid-area:name;font-size:1.5rem;color:var(--rd-primary);font-weight:700}main[_ngcontent-%COMP%]   .version-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{grid-area:description;text-align:center;font-style:italic;font-weight:500;justify-self:center}main[_ngcontent-%COMP%]   .version-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{grid-area:content;font-weight:500}main[_ngcontent-%COMP%]   .more-planned[_ngcontent-%COMP%]{font-style:italic;font-weight:700;color:var(--rd-primary-darker);grid-column:1/-1;justify-self:center}.greenhorn-qol[_ngcontent-%COMP%]{background-color:#078e00}.rain-your-paint[_ngcontent-%COMP%]{background-image:url("./media/rain-your-paint-background-RZOEYMZ2.png");background-position:center;background-repeat:no-repeat;background-size:cover}.rain-your-paint[_ngcontent-%COMP%]   .version-container[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem)}.difficulty-update[_ngcontent-%COMP%]{background-image:url("./media/trophy-LDBENHZH.webp");background-position:center;background-repeat:no-repeat;background-size:contain}.difficulty-update[_ngcontent-%COMP%]   .version-container[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(1.25rem);backdrop-filter:blur(1.25rem)}'],changeDetection:0})}}return t})();var bt=(()=>{class t{static{this.questionTipsMap={"I am struggling with getting high scores!":["Don't insist on your current infrastructure! Swap the connection between your spawners and destinations, maybe you can create a simpler route between them!","Pause the game at any time! You don't have to hurry, this isn't a realtime strategy game. Take your time!"],"The cars are going in so unpredictable directions!":["At every crossroad, the cars are trying to go in the rightmost direction: right to them, forward, left to them, and if none of these are available, they turn back.","Spawners prefer rotating the newly spawned card upwards. If it is not available, they check every direction clockwise, and send the cars in that direction.","It is always a good strategy to control the direction of the cars in crossroads with gates."],"My roads don't connect!":["Try using the editor tool!"],"There are so many roads I can't manage!":["Sometimes you can get rid of roads by connecting different spawners with different destinations.","Sometimes you can merge two roads and separating them again using gates! But be careful, if they become the same color, they can only be separated using a timed gate!"]}}static getQuestions(){return Object.keys(this.questionTipsMap)}static getRandomAnswer(e,n){if(!(e in this.questionTipsMap))throw new Error("Invalid question: "+e);let i=[...this.questionTipsMap[e]];return n&&i.includes(n)&&i.splice(i.indexOf(n),1),i.length===0?n:i[Math.floor(Math.random()*i.length)]}}return t})();function io(t,s){if(t&1){let e=z();a(0,"button",2),x("click",function(){let i=S(e).$implicit,d=m(2);return E(d.getAnswer(i))}),o(1),r()}if(t&2){let e=s.$implicit,n=s.$index;_("autofocus",n===0),l(),M(" ",e," ")}}function oo(t,s){if(t&1&&(a(0,"h4"),o(1,"What do you want to know?"),r(),a(2,"div",0),T(3,io,2,2,"button",1,D),r()),t&2){let e=m();l(3),F(e.questions)}}function ro(t,s){if(t&1){let e=z();a(0,"h4"),o(1),r(),a(2,"div",0)(3,"p",3),o(4),r()(),a(5,"div",4)(6,"button",5),x("click",function(){S(e);let i=m();return E(i.getAnswer(i.currentQuestion))}),o(7," New tip! "),r(),a(8,"button",6),x("click",function(){S(e);let i=m();return E(i.deleteQuestion())}),o(9," Back to topic selection "),r()()}if(t&2){let e=m();l(),C(e.currentQuestion),l(3),C(e.answer)}}var vt=(()=>{class t{constructor(){this.questions=bt.getQuestions()}getAnswer(e){this.answer=bt.getRandomAnswer(e,this.answer),this.currentQuestion=e}deleteQuestion(){this.answer=void 0,this.currentQuestion=void 0}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-tips-dialog"]],decls:3,vars:1,consts:[[1,"container"],["mat-stroked-button","","color","accent",3,"autofocus"],["mat-stroked-button","","color","accent",3,"click","autofocus"],[1,"tip"],[1,"buttons-container"],["mat-flat-button","","color","accent","autofocus","",3,"click"],["mat-flat-button","","color","accent",3,"click"]],template:function(n,i){n&1&&(v(0,"rd-dialog-close-button"),h(1,oo,5,0)(2,ro,10,2)),n&2&&(l(),g(i.answer?2:1))},dependencies:[j,L,N],styles:["[_nghost-%COMP%]{display:block;position:relative;padding:2rem;min-height:75dvh;min-width:50dvw;max-width:50dvw;box-sizing:border-box;background-color:var(--rd-dialog-background-color)}@media(width<=500px){[_nghost-%COMP%]{padding:1rem;max-width:100dvw}}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.75rem;margin-block:0 2rem}[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr 3rem;gap:1rem}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1rem}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem;background-color:var(--rd-primary-lightest);border-radius:1rem;padding:1rem;box-sizing:border-box;width:60%;margin-inline:auto}.container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{min-height:fit-content;padding-block:.5rem}.container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin-top:auto}.container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-bottom:auto}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.tip[_ngcontent-%COMP%]{font-size:1.25rem;text-wrap:pretty;text-align:justify}.buttons-container[_ngcontent-%COMP%]{gap:.5rem;width:60%;margin:auto}.buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:fit-content}"],changeDetection:0})}}return t})();var xt=(()=>{class t{transform(e){return[...e].reverse()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275pipe=At({name:"reverse",type:t,pure:!0})}}return t})();var ao=()=>[];function lo(t,s){if(t&1&&o(0),t&2){let e=m().$implicit;M(" \u2212 ",e.name," ")}}function so(t,s){if(t&1&&o(0),t&2){let e=m().$implicit;M(" - ",e.name," ")}}function co(t,s){if(t&1){let e=z();a(0,"div",8),x("click",function(){let i=S(e).$implicit,d=m(2);return E(d.selectedVersion=i)}),o(1),h(2,so,1,1),r()}if(t&2){let e=s.$implicit,n=m(2);y("selected",e===n.selectedVersion),l(),M(" ",e.version," "),l(),g(e.name?2:-1)}}function mo(t,s){if(t&1){let e=z();a(0,"div",6),x("click",function(){let i=S(e).$implicit,d=m();return E(d.selectedVersion=i)}),o(1),h(2,lo,1,1),r(),T(3,co,3,4,"div",7,D)}if(t&2){let e=s.$implicit,n=m();y("selected",e===n.selectedVersion),l(),M(" ",e.version," "),l(),g(e.name?2:-1),l(),F(e.childVersions??Gt(4,ao))}}function po(t,s){if(t&1&&(a(0,"p",2),o(1),r()),t&2){let e=m();l(),C(e.selectedVersion.name)}}function fo(t,s){t&1&&(a(0,"p",4)(1,"strong"),o(2,"This version is still under development!"),r(),o(3," The final changes can differ from the ones below! "),r())}function uo(t,s){if(t&1&&(a(0,"li")(1,"p"),o(2),r()()),t&2){let e=s.$implicit;l(2),C(e)}}function ho(t,s){if(t&1&&(a(0,"ul"),T(1,uo,3,1,"li",null,D),r()),t&2){let e=m().$implicit;l(),F(e.children)}}function go(t,s){if(t&1&&(a(0,"li")(1,"p"),o(2),r(),h(3,ho,3,0,"ul"),r()),t&2){let e=s.$implicit;l(2),C(e.description),l(),g(e.children?3:-1)}}function _o(t,s){if(t&1&&(a(0,"li")(1,"p"),o(2),r()()),t&2){let e=s.$implicit;l(2),C(e)}}function bo(t,s){if(t&1&&(a(0,"h6"),o(1,"Bugfixes"),r(),a(2,"ul",5),T(3,_o,3,1,"li",null,D),r()),t&2){let e=m();l(3),F(e.selectedVersion.bugfixes)}}var _e=(()=>{class t{constructor(){this.versions=[{version:"1.0",releaseDate:this.getReleaseDate(2025,6,12),changes:[{description:"Added menu",children:["Added Gameplay guide menu tile","Added Tips & tricks menu tile","Added Controls menu tile","Added Version history menu tile","Added Installation menu tile","Added Feedback menu tile","Added Roadmap menu tile","Added Setup game submenu"]},{description:"Added music to menu and game",children:["Added 2 menu songs (1-1 for day and night)","Added 3 early game songs","Added 4 late game songs (one of which plays rarely)"]},{description:"Added spawnable buildings",children:["Spawners and Destinations","Added context menu for them","Added statistics tracking for them"]},{description:"Added road-type buildable buildings",children:["Roads and Tubes","Add the ability to connect them with editor tool"]},{description:"Added gate-type buildable buildings",children:["Colored and Timed gates","Added context menu and controls for Timed gates"]},{description:"Added cars"},{description:"Added 5 game speeds",children:["x0 (paused), x1, x2, x4, x8"]},{description:"Added end of game screen",children:["Added game seed on end of game screen"]},{description:"Added personal best tracking"},{description:"Made the application installable as PWA"},{description:"Added supported browsers",children:["Added support for Microsoft Edge 108+","Added support for Google Chrome 108+","Added support for Mozilla Firefox 121+","Added warning notification for unsupported browser"]}],childVersions:[{version:"1.0.1",releaseDate:this.getReleaseDate(2026,5,4),changes:[{description:"Minor UI changes",children:["Made menu dialog styles more consistent","Tweaked Destination size"]},{description:"Enriched version history with more details"},{description:"Updated the roadmap"},{description:"Installation tile in the menu is no longer displayed if the app is installed"},{description:"Added notification about new version"},{description:"Minor changes for mobile users",children:["Disabled playing from mobile","Adjusted the menu in mobile"]},{description:"Minor technical changes"}],bugfixes:["Fixed a bug that caused roads and buildings to be placed when clicking outside the game area","Fixed a bug that caused unnecessary scrollbar to appear in the document root"]}]}],this.selectedVersion=this.getInitialSelectedVersion()}getInitialSelectedVersion(){let e=this.versions.flatMap(i=>[i,...i.childVersions??[]]).find(i=>i.version===Pe.versionNumber);if(e)return e;let n=this.versions[this.versions.length-1];return n.childVersions?n.childVersions[n.childVersions.length-1]:n}getReleaseDate(e,n,i){return new Date(e,n-1,i)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-version-history-dialog"]],decls:22,vars:9,consts:[[1,"split-content-chooser"],[1,"split-content-data","version-data"],[1,"version-name"],[1,"release-date"],[1,"wip-warning"],[1,"changes-list"],[1,"split-content-chooser-node",3,"click"],[1,"split-content-chooser-node","split-content-chooser-child-node",3,"selected"],[1,"split-content-chooser-node","split-content-chooser-child-node",3,"click"]],template:function(n,i){n&1&&(v(0,"rd-dialog-close-button"),a(1,"h4"),o(2,"Version history"),r(),a(3,"main")(4,"div",0),T(5,mo,5,5,null,null,D),je(7,"reverse"),r(),a(8,"div",1)(9,"h5"),o(10),r(),h(11,po,2,1,"p",2),a(12,"p",3),o(13),je(14,"date"),r(),h(15,fo,4,0,"p",4),a(16,"h6"),o(17,"Changes"),r(),a(18,"ul",5),T(19,go,4,2,"li",null,D),r(),h(21,bo,5,0),r()()),n&2&&(l(5),F(We(7,5,i.versions)),l(5),C(i.selectedVersion.version),l(),g(i.selectedVersion.name?11:-1),l(2),C(We(14,7,i.selectedVersion.releaseDate)),l(2),g(i.selectedVersion.isWIP?15:-1),l(4),F(i.selectedVersion.changes),l(2),g(i.selectedVersion.bugfixes?21:-1))},dependencies:[N,Qt,xt],styles:["[_nghost-%COMP%]{display:block;position:relative;padding:2rem;min-height:75dvh;min-width:50dvw;max-width:50dvw;box-sizing:border-box;background-color:var(--rd-dialog-background-color)}@media(width<=500px){[_nghost-%COMP%]{padding:1rem;max-width:100dvw}}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.75rem;margin-block:0 2rem}[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;gap:1rem;max-height:75dvh}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1rem}main[_ngcontent-%COMP%]{height:calc(75dvh - 8.1rem);display:grid;grid-template-columns:1fr 2fr;gap:1rem}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]{font-size:1.125rem;background-color:var(--rd-accent-lightest);border-radius:.5rem;-webkit-user-select:none;user-select:none;overflow:hidden;--scrollbar-track-color: var(--rd-accent-lightest);--scrollbar-thumb-color: var(--rd-accent-lighter);overflow-y:auto;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]   .split-content-chooser-node[_ngcontent-%COMP%]{position:relative;color:var(--rd-accent-darker);font-weight:550;padding:.75em;transition:background-color .3s ease}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]   .split-content-chooser-node.selected[_ngcontent-%COMP%]{background-color:var(--rd-accent-lighter)}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]   .split-content-chooser-node[_ngcontent-%COMP%]:not(.selected){cursor:pointer}main[_ngcontent-%COMP%]   .split-content-chooser[_ngcontent-%COMP%]   .split-content-chooser-node.split-content-chooser-child-node[_ngcontent-%COMP%]{padding-left:2em}main[_ngcontent-%COMP%]   .split-content-data[_ngcontent-%COMP%]{background-color:var(--rd-primary-lightest);padding:1rem;border-radius:.5rem;--scrollbar-track-color: var(--rd-primary-lightest);--scrollbar-thumb-color: var(--rd-primary);overflow-y:auto;scroll-behavior:smooth}@supports (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){main[_ngcontent-%COMP%]   .split-content-data[_ngcontent-%COMP%]{scrollbar-color:var(--scrollbar-thumb-color) var(--scrollbar-track-color)}}@supports not (scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color)){main[_ngcontent-%COMP%]   .split-content-data[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;background-color:var(--scrollbar-track-color);width:.5rem}main[_ngcontent-%COMP%]   .split-content-data[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb-color);border-radius:.25rem}}.version-data[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:var(--rd-primary-darker);font-size:2rem;margin:0}.version-data[_ngcontent-%COMP%]   .version-name[_ngcontent-%COMP%]{color:var(--rd-primary-darker);font-size:1.75rem;font-weight:700;margin-block:0}.version-data[_ngcontent-%COMP%]   .release-date[_ngcontent-%COMP%]{color:var(--rd-primary);font-size:1.25rem;margin-block:.5rem}.version-data[_ngcontent-%COMP%]   .wip-warning[_ngcontent-%COMP%]{color:var(--rd-warn);font-style:italic}.version-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-inline-start:1.5rem}.version-data[_ngcontent-%COMP%]   ul.changes-list[_ngcontent-%COMP%]{margin-block:1rem 0}.version-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-block:.5rem}.version-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] + h6[_ngcontent-%COMP%]{margin-top:2rem}.version-data[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:var(--rd-primary-darker);font-size:1.125rem;margin-block:1rem 0}.no-version[_ngcontent-%COMP%]{place-self:center}"],changeDetection:0})}}return t})();var jn=(()=>{class t{constructor(){this.dialogRef=c(ie),this.dialogService=c(re),this.currentVersion=Pe.versionNumber}openVersionHistory(){this.dialogService.open(_e),this.close()}close(){this.dialogRef.close()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-new-patch-version-dialog"]],decls:9,vars:1,consts:[[1,"buttons-container"],["mat-flat-button","","color","accent",3,"click"]],template:function(n,i){n&1&&(a(0,"h2"),o(1),r(),a(2,"p"),o(3,` A new patch version is available for the game. You won't notice big changes, but if you want to look at what changed, head to the version history!
`),r(),a(4,"div",0)(5,"button",1),x("click",function(){return i.openVersionHistory()}),o(6," View changes "),r(),a(7,"button",1),x("click",function(){return i.close()}),o(8," Got it! "),r()()),n&2&&(l(),M("New version of Rainy Days: ",i.currentVersion,"!"))},dependencies:[j,L],styles:["[_nghost-%COMP%]{display:block;position:relative;padding:2rem;min-height:75dvh;min-width:50dvw;box-sizing:border-box;background-color:var(--rd-dialog-background-color)}@media(width<=500px){[_nghost-%COMP%]{padding:1rem;max-width:100dvw}}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--rd-primary-darker);text-align:center;font-size:1.75rem;margin-block:0 2rem}[_nghost-%COMP%]{min-width:unset;width:30dvw;min-height:unset}p[_ngcontent-%COMP%]{text-align:justify;margin-block:2rem}"],changeDetection:0})}}return t})();var be=(function(t){return t[t.MAIN_MENU=0]="MAIN_MENU",t[t.SETUP_GAME=1]="SETUP_GAME",t})(be||{});var ve=class extends Mn{constructor(){super(en.MENU),this.daySongs=this.findSongsByTag(Ke.DAY_THEME),this.nightSongs=this.findSongsByTag(Ke.NIGHT_THEME)}chooseNextSong(s){return this.isDay()?this.getRandomSong(s,this.daySongs):this.getRandomSong(s,this.nightSongs)}isDay(){let s=new Date().getHours();return s>=6&&s<18}};function vo(t,s){if(t&1&&(a(0,"p",0),o(1),r()),t&2){let e=m();l(),C(e.description())}}function xo(t,s){if(t&1&&(a(0,"div",1),v(1,"rd-icon",2),r()),t&2){let e=m();l(),_("name",e.icon())}}var Wn=(()=>{class t{constructor(){this.dialogService=c(re),this.tileTitle=A.required(),this.description=A(),this.icon=A(),this.dialog=A(),this.href=A(),this.quickKey=A(),Q(()=>{let e=this.quickKey();!e||e.length!==1||(this.subscription&&this.subscription.unsubscribe(),this.subscription=kt(document,"keydown").pipe($(n=>n.key===e&&!n.ctrlKey&&!n.altKey&&!n.shiftKey)).subscribe(()=>this.onClick()))})}onClick(){let e=this.dialog();e&&this.openDialog(e);let n=this.href();n&&this.navigate(n)}navigate(e){globalThis.open(e,"_blank")?.focus()}ngOnDestroy(){this.subscription?.unsubscribe(),this.dialogRef?.close()}openDialog(e){if(this.dialogRef&&this.dialogRef.getState()===sn.OPEN){this.dialogRef.close(),this.dialogRef=void 0;return}this.dialogRef=this.dialogService.open(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-news-tile"]],hostVars:4,hostBindings:function(n,i){n&1&&x("click",function(){return i.onClick()}),n&2&&y("openable",i.dialog()||i.href())("no-description",!i.description())},inputs:{tileTitle:[1,"tileTitle"],description:[1,"description"],icon:[1,"icon"],dialog:[1,"dialog"],href:[1,"href"],quickKey:[1,"quickKey"]},decls:4,vars:3,consts:[[1,"description"],[1,"icon-wrapper"],[3,"name"]],template:function(n,i){n&1&&(a(0,"h3"),o(1),r(),h(2,vo,2,1,"p",0),h(3,xo,2,1,"div",1)),n&2&&(l(),C(i.tileTitle()),l(),g(i.description()?2:-1),l(),g(i.icon()?3:-1))},dependencies:[Ie],styles:['[_nghost-%COMP%]{--description-row-height: 3.5rem;position:relative;display:grid;grid-template-rows:auto var(--description-row-height) 1fr;grid-template-areas:"title" "description" "icon";align-items:center;gap:1rem;color:var(--rd-white);background-color:var(--rd-accent-lighter);border-radius:.25rem;padding:1.5rem;-webkit-user-select:none;user-select:none;transition:all .5s ease}@media(height<=800px){[_nghost-%COMP%]{--description-row-height: 2.375rem}}.no-description[_nghost-%COMP%]{grid-template-rows:auto 1fr;grid-template-areas:"title" "icon"}.side-icon[_nghost-%COMP%]{container-type:size;grid-template-columns:1fr auto;grid-template-rows:auto 1fr;grid-template-areas:"title icon" "description icon"}.side-icon[_nghost-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{width:100cqh}.openable[_nghost-%COMP%]{cursor:pointer}[_nghost-%COMP%]:after{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:0 0 1rem .25rem var(--rd-accent);opacity:0;transition:inherit}[_nghost-%COMP%]:hover{background-color:var(--rd-accent)}[_nghost-%COMP%]:hover:after{opacity:1}h3[_ngcontent-%COMP%]{grid-area:title;font-size:1.75rem;margin:0;text-wrap:balance}@media(height<=800px){h3[_ngcontent-%COMP%]{font-size:1.25rem}}.description[_ngcontent-%COMP%]{grid-area:description;align-self:start;display:block;font-size:1.25rem;margin:0}@media(height<=800px){.description[_ngcontent-%COMP%]{font-size:1rem}}@supports (interpolate-size: allow-keywords){.description[_ngcontent-%COMP%]{height:0;overflow:hidden;transition:height .5s ease;interpolate-size:allow-keywords}[_nghost-%COMP%]:hover   .description[_ngcontent-%COMP%]{height:auto}}@supports not (interpolate-size: allow-keywords){.description[_ngcontent-%COMP%]{opacity:0;transition:opacity .35s ease}[_nghost-%COMP%]:hover   .description[_ngcontent-%COMP%]{opacity:1}}.icon-wrapper[_ngcontent-%COMP%]{display:grid;grid-area:icon;align-self:stretch;container-type:size}.icon-wrapper[_ngcontent-%COMP%]   rd-icon[_ngcontent-%COMP%]{height:100cqmin;width:100cqmin;place-self:center}'],changeDetection:0})}}return t})();function yo(t,s){if(t&1&&v(0,"rd-news-tile",4),t&2){let e=m();_("href",e.installationTileHref)}}var $n=(()=>{class t{constructor(){this.GuideDialogComponent=gt,this.ControlsDialogComponent=dt,this.TipsDialogComponent=vt,this.VersionHistoryDialogComponent=_e,this.FeedbackDialogComponent=ct,this.RoadmapDialogComponent=_t,this.isInstalled=A.required(),this.installationTileHref="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing#installing_and_uninstalling_pwas"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-news"]],hostVars:2,hostBindings:function(n,i){n&2&&y("pwa-installed",i.isInstalled())},inputs:{isInstalled:[1,"isInstalled"]},decls:7,vars:7,consts:[["tileTitle","Gameplay guide","icon","guide","description","Learn how to play and how the game mechanics work","quickKey","g",1,"guide",3,"dialog"],["tileTitle","Tips & tricks","icon","info","quickKey","t",1,"tips",3,"dialog"],["tileTitle","Controls","icon","controller","quickKey","c",1,"controls",3,"dialog"],["tileTitle","Version history","description","Browse the latest additions to Rainy Days","icon","history","quickKey","v",1,"versions","side-icon",3,"dialog"],["tileTitle","Installation","icon","download",1,"installation",3,"href"],["tileTitle","Feedback","icon","forum","quickKey","f",1,"feedback",3,"dialog"],["tileTitle","Roadmap","description","Discover what's to come to the game","icon","road","quickKey","r",1,"roadmap","side-icon",3,"dialog"]],template:function(n,i){n&1&&(v(0,"rd-news-tile",0)(1,"rd-news-tile",1)(2,"rd-news-tile",2)(3,"rd-news-tile",3),h(4,yo,1,1,"rd-news-tile",4),v(5,"rd-news-tile",5)(6,"rd-news-tile",6)),n&2&&(_("dialog",i.GuideDialogComponent),l(),_("dialog",i.TipsDialogComponent),l(),_("dialog",i.ControlsDialogComponent),l(),_("dialog",i.VersionHistoryDialogComponent),l(),g(i.isInstalled()?-1:4),l(),_("dialog",i.FeedbackDialogComponent),l(),_("dialog",i.RoadmapDialogComponent))},dependencies:[Wn],styles:['[_nghost-%COMP%]{padding:3rem;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(4,1fr);grid-template-areas:"guide guide tips" "guide guide controls" "versions versions installation" "feedback roadmap roadmap";gap:.5rem;max-height:100dvh;box-sizing:border-box}@media(height<=800px){[_nghost-%COMP%]{padding:1.5rem}}.pwa-installed[_nghost-%COMP%]{grid-template-areas:"guide guide tips" "guide guide controls" "versions versions versions" "feedback roadmap roadmap"}rd-news-tile.guide[_ngcontent-%COMP%]{grid-area:guide}rd-news-tile.tips[_ngcontent-%COMP%]{grid-area:tips}rd-news-tile.controls[_ngcontent-%COMP%]{grid-area:controls}rd-news-tile.versions[_ngcontent-%COMP%]{grid-area:versions}rd-news-tile.installation[_ngcontent-%COMP%]{grid-area:installation}rd-news-tile.feedback[_ngcontent-%COMP%]{grid-area:feedback}rd-news-tile.roadmap[_ngcontent-%COMP%]{grid-area:roadmap}'],changeDetection:0})}}return t})();function Co(t,s){if(t&1){let e=z();a(0,"rd-update-info-tile",6),x("openDialog",function(){S(e);let i=m();return E(i.openVersionUpdateDialog())}),r()}if(t&2){let e=m();_("state",e.updateState())}}function wo(t,s){if(t&1&&v(0,"rd-browser-support-notice-tile",1),t&2){let e=m();_("browser",e.browser())}}function Mo(t,s){if(t&1&&(a(0,"p",9),o(1),r()),t&2){let e=m(3);_("matTooltip",e.personalBestSince())("matTooltipDisabled",!e.personalBestSince()),l(),M(" Personal best: ",e.personalBest.score," ")}}function ko(t,s){if(t&1){let e=z();a(0,"div",7),h(1,Mo,2,3,"p",9),a(2,"button",10),x("click",function(){S(e);let i=m(2);return E(i.startQuickGame())}),o(3," Play "),r(),a(4,"button",10),x("click",function(){S(e);let i=m(2);return E(i.switchButtonGroup(i.ControlPanelGroup.SETUP_GAME))}),o(5," Setup game "),r()()}if(t&2){let e=m(2);l(),g(e.personalBest.score!==0?1:-1)}}function Oo(t,s){if(t&1){let e=z();a(0,"div")(1,"h2",11),o(2,"Setup game"),r(),a(3,"form",12),x("ngSubmit",function(){S(e);let i=m(2);return E(i.startCustomGame())}),a(4,"mat-form-field",13)(5,"mat-label"),o(6,"Game seed"),r(),v(7,"input",14),a(8,"mat-icon",15),o(9," terminal "),r()(),a(10,"button",16),o(11," Start "),r(),a(12,"button",17),x("click",function(){S(e);let i=m(2);return E(i.switchButtonGroup(i.ControlPanelGroup.MAIN_MENU))}),o(13," Back "),r()()()}if(t&2){let e=m(2);l(3),_("formGroup",e.setupGameForm)}}function Po(t,s){if(t&1&&(a(0,"div",2),h(1,ko,6,1,"div",7),h(2,Oo,14,1,"div"),v(3,"rd-music-controller",8),r()),t&2){let e=m();l(),g(e.buttonGroup===e.ControlPanelGroup.MAIN_MENU?1:-1),l(),g(e.buttonGroup===e.ControlPanelGroup.SETUP_GAME?2:-1),l(),_("handler",e.musicHandler)("showInfo",!0)}}function So(t,s){if(t&1&&v(0,"rd-music-controller",3),t&2){let e=m();_("handler",e.musicHandler)("showInfo",!0)}}var Os=(()=>{class t{constructor(){this.router=c(Kt),this.gameStartService=c(wn),this.storageService=c(Zt),this.updateService=c(cn),this.dialogService=c(re),this.platformService=c(tn),this.updateState=this.updateService.updateState,this.ControlPanelGroup=be,this.buttonGroup=be.MAIN_MENU,this.personalBest=this.storageService.read(Se.PERSONAL_BEST),this.personalBestSince=ot(this.personalBest.timestamp),this.serviceWorkersEnabled=this.updateService.areServiceWorkersEnabled(),this.isMobile=this.platformService.isMobile(),this.isPWAInstalled=this.platformService.isPWAInstalled,this.currentAppVersion=De.printAppVersion(),this.currentYear=new Date().getFullYear(),this.musicHandler=new ve,this.browser=Y(null),this.setupGameForm=new hn({seed:new _n("",[ze.pattern("^[0-9a-zA-Z]*$")])}),this.platformService.isLoaded$.pipe($(e=>e),Yt()).subscribe(()=>{this.platformService.isBrowserVersionSupported()||this.browser.set({type:this.platformService.getBrowserType(),version:this.platformService.getBrowserVersion()})}),Q(()=>{this.updateState()===k.UPDATE_DOWNLOAD_SUCCESSFUL&&this.openVersionUpdateDialog()})}ngOnInit(){this.isMobile&&this.dialogService.open(lt,{disableClose:!0});let e=this.storageService.read(Se.LAST_USED_GAME_VERSION);De.getLastPlayedVersionState(e)===Jt.PATCH_UPDATED&&this.dialogService.open(jn,{disableClose:!0}),this.storageService.save(Se.LAST_USED_GAME_VERSION,De.storedVersion)}openVersionUpdateDialog(){this.dialogService.open(st)}switchButtonGroup(e){this.buttonGroup=e,this.setupGameForm.reset()}startQuickGame(){this.gameStartService.initStartingParams(""),this.router.navigateByUrl(Ye.GAME)}startCustomGame(){this.gameStartService.initStartingParams(this.setupGameForm.value.seed??""),this.router.navigateByUrl(Ye.GAME)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["rd-menu"]],hostVars:2,hostBindings:function(n,i){n&2&&y("mobile-menu",i.isMobile)},decls:9,vars:8,consts:[[3,"state"],[3,"browser"],[1,"control-panel"],[1,"mobile",3,"handler","showInfo"],[3,"isInstalled"],[1,"version"],[3,"openDialog","state"],[1,"menu-buttons","control-panel-inputs-container"],[3,"handler","showInfo"],["matTooltipPosition","right",1,"personal-best",3,"matTooltip","matTooltipDisabled"],["mat-flat-button","","color","accent",3,"click"],[1,"title"],["autocomplete","off",1,"game-setup-panel","control-panel-inputs-container",3,"ngSubmit","formGroup"],["color","accent"],["matInput","","placeholder","Enter your favorite seed!","type","text","formControlName","seed"],["matSuffix","","color","accent"],["mat-flat-button","","color","accent","type","submit"],["mat-flat-button","","color","accent","type","reset",3,"click"]],template:function(n,i){n&1&&(a(0,"h1"),o(1,"Rainy Days"),r(),h(2,Co,1,1,"rd-update-info-tile",0),h(3,wo,1,1,"rd-browser-support-notice-tile",1),h(4,Po,4,4,"div",2)(5,So,1,2,"rd-music-controller",3),v(6,"rd-news",4),a(7,"span",5),o(8),r()),n&2&&(l(2),g(i.serviceWorkersEnabled?2:-1),l(),g(i.browser()?3:-1),l(),g(i.isMobile?5:4),l(2),_("isInstalled",i.isPWAInstalled()),l(),y("mobile",i.isMobile),l(),Ht(" Rainy Days \xA9 2021-",i.currentYear," bechryko - Version ",i.currentAppVersion,`
`))},dependencies:[$n,L,xn,bn,mn,fn,un,Ne,vn,Ln,Ve,ge,et,Hn,ae,Ae,Re,at,dn,rt],styles:['[_nghost-%COMP%]{display:grid;position:relative;grid-template-columns:1fr 1fr;grid-template-rows:1fr 2fr;grid-template-areas:"title         news" "control-panel news";height:100%}@media(height<=800px){[_nghost-%COMP%]{grid-template-rows:1fr 4fr}}.mobile-menu[_nghost-%COMP%]{grid-template-columns:1fr;grid-template-rows:unset;grid-template-areas:"title" "news" "music-controller" "version";width:100dvw}.mobile-menu[_nghost-%COMP%] > rd-news[_ngcontent-%COMP%]{justify-self:center}h1[_ngcontent-%COMP%]{--shadow-offset: .5rem;grid-area:title;position:relative;z-index:1000;font-size:7rem;text-align:center;color:var(--rd-primary);margin:0 2rem;align-self:center;text-shadow:var(--shadow-offset) var(--shadow-offset) 2px var(--rd-primary-darker);-webkit-user-select:none;user-select:none}@media(height<=800px){h1[_ngcontent-%COMP%]{--shadow-offset: .375rem;font-size:4rem}}rd-update-info-tile[_ngcontent-%COMP%]{grid-area:title;position:absolute;top:.5rem;left:.5rem}rd-browser-support-notice-tile[_ngcontent-%COMP%]{grid-area:title;position:absolute;top:.5rem;right:.5rem}.control-panel[_ngcontent-%COMP%]{--padding: 3rem;grid-area:control-panel;display:grid;grid-template-rows:1fr auto;width:80%;max-width:27.5rem;height:calc(100% - var(--padding) * 2);box-sizing:border-box;min-width:min(100%,20rem);place-self:center;border:2px solid var(--rd-primary);border-radius:1rem;background-color:var(--rd-primary-lighter)}@media(height<=800px){.control-panel[_ngcontent-%COMP%]{--padding: 1.5rem}}.control-panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:2.5rem;width:fit-content;margin:0 auto;padding:calc(.5rem - 2px) .5rem .5rem;text-align:center;color:var(--rd-primary-darker);border:2px solid var(--rd-primary);border-top:none;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;-webkit-user-select:none;user-select:none}.control-panel[_ngcontent-%COMP%]   .control-panel-inputs-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1.5rem;padding:3rem}@media(height<=800px){.control-panel[_ngcontent-%COMP%]   .control-panel-inputs-container[_ngcontent-%COMP%]{padding:1.5rem}}.control-panel[_ngcontent-%COMP%]   .control-panel-inputs-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.control-panel[_ngcontent-%COMP%]   .control-panel-inputs-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.75rem;height:3rem}.control-panel[_ngcontent-%COMP%]   .menu-buttons[_ngcontent-%COMP%]{box-sizing:border-box}.control-panel[_ngcontent-%COMP%]   .menu-buttons[_ngcontent-%COMP%]   .personal-best[_ngcontent-%COMP%]{text-align:center;color:var(--rd-accent);font-size:1.75rem;line-height:3rem;font-weight:700;width:fit-content;padding-inline:1rem;margin:0;-webkit-user-select:none;user-select:none}.control-panel[_ngcontent-%COMP%]   rd-music-controller[_ngcontent-%COMP%]{margin:1rem 3rem}.game-setup-panel[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:-20px}rd-news[_ngcontent-%COMP%]{grid-area:news;max-width:45rem;justify-self:end}rd-music-controller.mobile[_ngcontent-%COMP%]{grid-area:music-controller;height:3rem;margin-inline:1.5rem;margin-bottom:1rem}.version[_ngcontent-%COMP%]{position:absolute;color:var(--rd-primary-darker);bottom:.5rem;left:.5rem;-webkit-user-select:none;user-select:none}@media(height<=800px){.version[_ngcontent-%COMP%]{font-size:.875rem;bottom:.25rem}}.version.mobile[_ngcontent-%COMP%]{position:static;grid-area:version;padding-inline:.5rem}'],changeDetection:0})}}return t})();export{Os as MenuComponent};
