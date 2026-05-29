import{a as Rt,c as G,d as Qe,e as ee}from"./chunk-W3LGLLMG.js";import{$ as b,$b as Ge,A as l,Aa as k,B as mt,Ba as nt,Bb as $t,C as I,Ca as L,Cb as st,D as F,Da as Ct,Db as qt,E as me,Ea as xe,F as P,Fa as H,G as C,Ga as Y,H as W,I as R,Ib as Ye,J as fe,Jb as Xe,K as ft,Ka as ke,Kb as St,Ma as ot,Mb as je,N as Ut,Na as Mt,O as M,Oa as y,Ob as Jt,P as _e,Pa as xt,Q as ge,Qa as Se,Qb as te,Rb as m,S as x,T as tt,U as _t,V as gt,Vb as We,W as yt,Wa as Pe,Wb as ze,Xb as Ue,Y as ye,Yb as Pt,Z as vt,Zb as Ot,_ as ve,_b as Ze,a as E,aa as B,b as ht,ba as N,bc as Ke,c as D,ca as Zt,dc as $e,e as w,ea as be,eb as kt,fb as X,fc as qe,h as Wt,ha as Gt,hb as Oe,ia as et,ja as z,jb as Re,k as dt,ka as U,l as ut,lb as Ee,mb as De,nb as Ae,o as ue,ob as Te,pa as bt,pb as Ie,qa as _,qb as Fe,ra as p,s as pt,sa as V,sb as Be,t as zt,ta as Kt,tb as Ne,u as pe,ua as we,ub as Ve,vb as Le,wa as wt,wb as He,x as O,xa as Ce,xb as Qt,y as A,ya as it,yb as Z,z as T,za as Me}from"./chunk-QTU5GGLU.js";var Je=[{path:"",redirectTo:"products/all",pathMatch:"full"},{path:"products",redirectTo:"products/all",pathMatch:"full"},{path:"products/:category",loadComponent:()=>import("./chunk-7GXEHWDB.js").then(o=>o.ProductsGrid)},{path:"wishlist",loadComponent:()=>import("./chunk-MDFPV4VT.js").then(o=>o.MyWishlist)},{path:"cart",loadComponent:()=>import("./chunk-U523HURU.js").then(o=>o.Cart)},{path:"login",loadComponent:()=>import("./chunk-T2LN5MXT.js").then(o=>o.Login)},{path:"signup",loadComponent:()=>import("./chunk-G627BRJF.js").then(o=>o.Signup)},{path:"product/:name",loadComponent:()=>import("./chunk-YHRE3GCJ.js").then(o=>o.ProductDetail)}];var ti={providers:[fe(),Ne(Je,Ve()),Ie(Te()),De(Ae()),$e({style:{marginTop:"70px"},stacking:"depth",duration:1e3})]};var Pi=["*",[["mat-toolbar-row"]]],Oi=["*","mat-toolbar-row"],Ri=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275dir=N({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return o})(),ei=(()=>{class o{_elementRef=l(M);_platform=l(Z);_document=l(C);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=b({type:o,selectors:[["mat-toolbar"]],contentQueries:function(i,n,s){if(i&1&&Ct(s,Ri,5),i&2){let r;H(r=Y())&&(n._toolbarRows=r)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,n){i&2&&(Mt(n.color?"mat-"+n.color:""),ot("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Oi,decls:2,vars:0,template:function(i,n){i&1&&(nt(Pi),L(0),L(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return o})();var rt=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},ie=class extends rt{component;viewContainerRef;injector;projectableNodes;bindings;constructor(e,t,i,n,s){super(),this.component=e,this.viewContainerRef=t,this.injector=i,this.projectableNodes=n,this.bindings=s||null}},Q=class extends rt{templateRef;viewContainerRef;context;injector;constructor(e,t,i,n){super(),this.templateRef=e,this.viewContainerRef=t,this.context=i,this.injector=n}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}},ne=class extends rt{element;constructor(e){super(),this.element=e instanceof M?e.nativeElement:e}},oe=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof ie)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof Q)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof ne)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},at=class extends oe{outletElement;_appRef;_defaultInjector;constructor(e,t,i){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=i}attachComponentPortal(e){let t;if(e.viewContainerRef){let i=e.injector||e.viewContainerRef.injector,n=i.get(ve,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:i,ngModuleRef:n,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let i=this._appRef,n=e.injector||this._defaultInjector||P.NULL,s=n.get(mt,i.injector);t=Oe(e.component,{elementInjector:n,environmentInjector:s,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),i.attachView(t.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,i=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return i.rootNodes.forEach(n=>this.outletElement.appendChild(n)),i.detectChanges(),this.setDisposeFn(()=>{let n=t.indexOf(i);n!==-1&&t.remove(n)}),this._attachedPortal=e,i}attachDomPortal=e=>{let t=e.element;t.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(i,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(t,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var ii=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=B({type:o});static \u0275inj=A({})}return o})();var ni=je();function hi(o){return new Et(o.get(G),o.get(C))}var Et=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||"",this._previousHTMLStyles.top=e.style.top||"",e.style.left=m(-this._previousScrollPosition.left),e.style.top=m(-this._previousScrollPosition.top),e.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,i=e.style,n=t.style,s=i.scrollBehavior||"",r=n.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,e.classList.remove("cdk-global-scrollblock"),ni&&(i.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ni&&(i.scrollBehavior=s,n.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,i=this._viewportRuler.getViewportSize();return t.scrollHeight>i.height||t.scrollWidth>i.width}};function di(o,e){return new Dt(o.get(Rt),o.get(R),o.get(G),e)}var Dt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,i,n){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=i,this._config=n}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(ut(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var lt=class{enable(){}disable(){}attach(){}};function se(o,e){return e.some(t=>{let i=o.bottom<t.top,n=o.top>t.bottom,s=o.right<t.left,r=o.left>t.right;return i||n||s||r})}function oi(o,e){return e.some(t=>{let i=o.top<t.top,n=o.bottom>t.bottom,s=o.left<t.left,r=o.right>t.right;return i||n||s||r})}function Nt(o,e){return new At(o.get(Rt),o.get(G),o.get(R),e)}var At=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,i,n){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=i,this._config=n}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:n}=this._viewportRuler.getViewportSize();se(t,[{width:i,height:n,bottom:n,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},ui=(()=>{class o{_injector=l(P);constructor(){}noop=()=>new lt;close=t=>di(this._injector,t);block=()=>hi(this._injector);reposition=t=>Nt(this._injector,t);static \u0275fac=function(i){return new(i||o)};static \u0275prov=O({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),$=class{positionStrategy;scrollStrategy=new lt;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let i of t)e[i]!==void 0&&(this[i]=e[i])}}};var Tt=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var pi=(()=>{class o{_attachedOverlays=[];_document=l(C);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,i,n){return n.observers.length<1?!1:t.eventPredicate?t.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||o)};static \u0275prov=O({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),mi=(()=>{class o extends pi{_ngZone=l(R);_renderer=l(gt).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let i=this._attachedOverlays;for(let n=i.length-1;n>-1;n--){let s=i[n];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=Ut(o)))(n||o)}})();static \u0275prov=O({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),fi=(()=>{class o extends pi{_platform=l(Z);_ngZone=l(R);_renderer=l(gt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let i=this._document.body,n={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(i,"pointerdown",this._pointerDownListener,n),s.listen(i,"click",this._clickListener,n),s.listen(i,"auxclick",this._clickListener,n),s.listen(i,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Qt(t)};_clickListener=t=>{let i=Qt(t),n=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let r=s.length-1;r>-1;r--){let a=s[r],h=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,h))){if(si(a.overlayElement,i)||si(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>h.next(t)):h.next(t)}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=Ut(o)))(n||o)}})();static \u0275prov=O({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function si(o,e){let t=typeof ShadowRoot<"u"&&ShadowRoot,i=e;for(;i;){if(i===o)return!0;i=t&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var _i=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=b({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return o})(),gi=(()=>{class o{_platform=l(Z);_containerElement;_document=l(C);_styleLoader=l(st);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||Jt()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<n.length;s++)n[s].remove()}let i=this._document.createElement("div");i.classList.add(t),Jt()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(_i)}static \u0275fac=function(i){return new(i||o)};static \u0275prov=O({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),re=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,i,n){this._renderer=t,this._ngZone=i,this.element=e.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents="none",e.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ae(o){return o&&o.nodeType===1}var It=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new w;_attachments=new w;_detachments=new w;_positionStrategy;_scrollStrategy;_locationChanges=D.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new w;_outsidePointerEvents=new w;_afterNextRenderRef;constructor(e,t,i,n,s,r,a,h,u,c=!1,d,f){this._portalOutlet=e,this._host=t,this._pane=i,this._config=n,this._ngZone=s,this._keyboardDispatcher=r,this._document=a,this._location=h,this._outsideClickDispatcher=u,this._animationsDisabled=c,this._injector=d,this._renderer=f,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=tt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=E(E({},this._config),e),this._updateElementSize()}setDirection(e){this._config=ht(E({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e=="string"?e:e.value:"ltr"}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=m(this._config.width),e.height=m(this._config.height),e.minWidth=m(this._config.minWidth),e.minHeight=m(this._config.minHeight),e.maxWidth=m(this._config.maxWidth),e.maxHeight=m(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?"":"none"}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ae(e)?e.after(this._host):e?.type==="parent"?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new re(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,i){let n=qt(t||[]).filter(s=>!!s);n.length&&(i?e.classList.add(...n):e.classList.remove(...n))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=tt(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}},ri="cdk-overlay-connected-position-bounding-box",Ei=/([A-Za-z%]+)$/;function Vt(o,e){return new Ft(e,o.get(G),o.get(C),o.get(Z),o.get(gi))}var Ft=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new w;_resizeSubscription=D.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,i,n,s){this._viewportRuler=t,this._document=i,this._platform=n,this._overlayContainer=s,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(ri),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,i=this._viewportRect,n=this._containerRect,s=[],r;for(let a of this._preferredPositions){let h=this._getOriginPoint(e,n,a),u=this._getOverlayPoint(h,t,a),c=this._getOverlayFit(u,t,i,a);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,h);return}if(this._canFitWithFlexibleDimensions(c,u,i)){s.push({position:a,origin:h,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(h,a)});continue}(!r||r.overlayFit.visibleArea<c.visibleArea)&&(r={overlayFit:c,overlayPoint:u,originPoint:h,position:a,overlayRect:t})}if(s.length){let a=null,h=-1;for(let u of s){let c=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);c>h&&(h=c,a=u)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&j(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ri),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof M?this._origin.nativeElement:ae(this._origin)?this._origin:null}_getOriginPoint(e,t,i){let n;if(i.originX=="center")n=e.left+e.width/2;else{let r=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;n=i.originX=="start"?r:a}t.left<0&&(n-=t.left);let s;return i.originY=="center"?s=e.top+e.height/2:s=i.originY=="top"?e.top:e.bottom,t.top<0&&(s-=t.top),{x:n,y:s}}_getOverlayPoint(e,t,i){let n;i.overlayX=="center"?n=-t.width/2:i.overlayX==="start"?n=this._isRtl()?-t.width:0:n=this._isRtl()?0:-t.width;let s;return i.overlayY=="center"?s=-t.height/2:s=i.overlayY=="top"?0:-t.height,{x:e.x+n,y:e.y+s}}_getOverlayFit(e,t,i,n){let s=li(t),{x:r,y:a}=e,h=this._getOffset(n,"x"),u=this._getOffset(n,"y");h&&(r+=h),u&&(a+=u);let c=0-r,d=r+s.width-i.width,f=0-a,g=a+s.height-i.height,v=this._subtractOverflows(s.width,c,d),S=this._subtractOverflows(s.height,f,g),de=v*S;return{visibleArea:de,isCompletelyWithinViewport:s.width*s.height===de,fitsInViewportVertically:S===s.height,fitsInViewportHorizontally:v==s.width}}_canFitWithFlexibleDimensions(e,t,i){if(this._hasFlexibleDimensions){let n=i.bottom-t.y,s=i.right-t.x,r=ai(this._overlayRef.getConfig().minHeight),a=ai(this._overlayRef.getConfig().minWidth),h=e.fitsInViewportVertically||r!=null&&r<=n,u=e.fitsInViewportHorizontally||a!=null&&a<=s;return h&&u}return!1}_pushOverlayOnScreen(e,t,i){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let n=li(t),s=this._viewportRect,r=Math.max(e.x+n.width-s.width,0),a=Math.max(e.y+n.height-s.height,0),h=Math.max(s.top-i.top-e.y,0),u=Math.max(s.left-i.left-e.x,0),c=0,d=0;return n.width<=s.width?c=u||-r:c=e.x<this._getViewportMarginStart()?s.left-i.left-e.x:0,n.height<=s.height?d=h||-a:d=e.y<this._getViewportMarginTop()?s.top-i.top-e.y:0,this._previousPushAmount={x:c,y:d},{x:e.x+c,y:e.y+d}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!Di(this._lastScrollVisibility,i)){let n=new Tt(e,i);this._positionChanges.next(n)}this._lastScrollVisibility=i}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,n=e.overlayY;e.overlayX==="center"?i="center":this._isRtl()?i=e.overlayX==="start"?"right":"left":i=e.overlayX==="start"?"left":"right";for(let s=0;s<t.length;s++)t[s].style.transformOrigin=`${i} ${n}`}_calculateBoundingBoxRect(e,t){let i=this._viewportRect,n=this._isRtl(),s,r,a;if(t.overlayY==="top")r=e.y,s=i.height-r+this._getViewportMarginBottom();else if(t.overlayY==="bottom")a=i.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=i.height-a+this._getViewportMarginTop();else{let g=Math.min(i.bottom-e.y+i.top,e.y),v=this._lastBoundingBoxSize.height;s=g*2,r=e.y-g,s>v&&!this._isInitialRender&&!this._growAfterOpen&&(r=e.y-v/2)}let h=t.overlayX==="start"&&!n||t.overlayX==="end"&&n,u=t.overlayX==="end"&&!n||t.overlayX==="start"&&n,c,d,f;if(u)f=i.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=e.x-this._getViewportMarginStart();else if(h)d=e.x,c=i.right-e.x-this._getViewportMarginEnd();else{let g=Math.min(i.right-e.x+i.left,e.x),v=this._lastBoundingBoxSize.width;c=g*2,d=e.x-g,c>v&&!this._isInitialRender&&!this._growAfterOpen&&(d=e.x-v/2)}return{top:r,left:d,bottom:a,right:f,width:c,height:s}}_setBoundingBoxStyles(e,t){let i=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let s=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;n.width=m(i.width),n.height=m(i.height),n.top=m(i.top)||"auto",n.bottom=m(i.bottom)||"auto",n.left=m(i.left)||"auto",n.right=m(i.right)||"auto",t.overlayX==="center"?n.alignItems="center":n.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?n.justifyContent="center":n.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",s&&(n.maxHeight=m(s)),r&&(n.maxWidth=m(r))}this._lastBoundingBoxSize=i,j(this._boundingBox.style,n)}_resetBoundingBoxStyles(){j(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){j(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(e,t){let i={},n=this._hasExactPosition(),s=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(n){let c=this._viewportRuler.getViewportScrollPosition();j(i,this._getExactOverlayY(t,e,c)),j(i,this._getExactOverlayX(t,e,c))}else i.position="static";let a="",h=this._getOffset(t,"x"),u=this._getOffset(t,"y");h&&(a+=`translateX(${h}px) `),u&&(a+=`translateY(${u}px)`),i.transform=a.trim(),r.maxHeight&&(n?i.maxHeight=m(r.maxHeight):s&&(i.maxHeight="")),r.maxWidth&&(n?i.maxWidth=m(r.maxWidth):s&&(i.maxWidth="")),j(this._pane.style,i)}_getExactOverlayY(e,t,i){let n={top:"",bottom:""},s=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i)),e.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;n.bottom=`${r-(s.y+this._overlayRect.height)}px`}else n.top=m(s.y);return n}_getExactOverlayX(e,t,i){let n={left:"",right:""},s=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i));let r;if(this._isRtl()?r=e.overlayX==="end"?"left":"right":r=e.overlayX==="end"?"right":"left",r==="right"){let a=this._document.documentElement.clientWidth;n.right=`${a-(s.x+this._overlayRect.width)}px`}else n.left=m(s.x);return n}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),i=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:oi(e,i),isOriginOutsideView:se(e,i),isOverlayClipped:oi(t,i),isOverlayOutsideView:se(t,i)}}_subtractOverflows(e,...t){return t.reduce((i,n)=>i-Math.max(n,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+e-this._getViewportMarginEnd(),bottom:i.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t==="x"?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&qt(e).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof M)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,i=e.height||0;return{top:e.y,bottom:e.y+i,left:e.x,right:e.x+t,height:i,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();e&&(t.style.display="block");let i=t.getBoundingClientRect();return e&&(t.style.display=""),i}};function j(o,e){for(let t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}function ai(o){if(typeof o!="number"&&o!=null){let[e,t]=o.split(Ei);return!t||t==="px"?parseFloat(e):null}return o||null}function li(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function Di(o,e){return o===e?!0:o.isOriginClipped===e.isOriginClipped&&o.isOriginOutsideView===e.isOriginOutsideView&&o.isOverlayClipped===e.isOverlayClipped&&o.isOverlayOutsideView===e.isOverlayOutsideView}var ci="cdk-global-overlay-wrapper";function yi(o){return new Bt}var Bt=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(ci),this._isDisposed=!1}top(e=""){return this._bottomOffset="",this._topOffset=e,this._alignItems="flex-start",this}left(e=""){return this._xOffset=e,this._xPosition="left",this}bottom(e=""){return this._topOffset="",this._bottomOffset=e,this._alignItems="flex-end",this}right(e=""){return this._xOffset=e,this._xPosition="right",this}start(e=""){return this._xOffset=e,this._xPosition="start",this}end(e=""){return this._xOffset=e,this._xPosition="end",this}width(e=""){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=""){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=""){return this.left(e),this._xPosition="center",this}centerVertically(e=""){return this.top(e),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:n,height:s,maxWidth:r,maxHeight:a}=i,h=(n==="100%"||n==="100vw")&&(!r||r==="100%"||r==="100vw"),u=(s==="100%"||s==="100vh")&&(!a||a==="100%"||a==="100vh"),c=this._xPosition,d=this._xOffset,f=this._overlayRef.getConfig().direction==="rtl",g="",v="",S="";h?S="flex-start":c==="center"?(S="center",f?v=d:g=d):f?c==="left"||c==="end"?(S="flex-end",g=d):(c==="right"||c==="start")&&(S="flex-start",v=d):c==="left"||c==="start"?(S="flex-start",g=d):(c==="right"||c==="end")&&(S="flex-end",v=d),e.position=this._cssPosition,e.marginLeft=h?"0":g,e.marginTop=u?"0":this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=h?"0":v,t.justifyContent=S,t.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,i=t.style;t.classList.remove(ci),i.justifyContent=i.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position="",this._overlayRef=null,this._isDisposed=!0}},vi=(()=>{class o{_injector=l(P);constructor(){}global(){return yi()}flexibleConnectedTo(t){return Vt(this._injector,t)}static \u0275fac=function(i){return new(i||o)};static \u0275prov=O({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),bi=new T("OVERLAY_DEFAULT_CONFIG");function Lt(o,e){o.get(st).load(_i);let t=o.get(gi),i=o.get(C),n=o.get(St),s=o.get(Gt),r=o.get(Pt),a=o.get(yt,null,{optional:!0})||o.get(gt).createRenderer(null,null),h=new $(e),u=o.get(bi,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||r.value,"showPopover"in i.body?h.usePopover=e?.usePopover??u:h.usePopover=!1;let c=i.createElement("div"),d=i.createElement("div");c.id=n.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),d.appendChild(c),h.usePopover&&(d.setAttribute("popover","manual"),d.classList.add("cdk-overlay-popover"));let f=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return ae(f)?f.after(d):f?.type==="parent"?f.element.appendChild(d):t.getContainerElement().appendChild(d),new It(new at(c,s,o),d,c,h,o.get(R),o.get(mi),i,o.get(Re),o.get(fi),e?.disableAnimations??o.get(ge,null,{optional:!0})==="NoopAnimations",o.get(mt),a)}var wi=(()=>{class o{scrollStrategies=l(ui);_positionBuilder=l(vi);_injector=l(P);constructor(){}create(t){return Lt(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||o)};static \u0275prov=O({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var le=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=B({type:o});static \u0275inj=A({providers:[wi],imports:[Ot,ii,ee,ee]})}return o})();var Ni=["mat-menu-item",""],Vi=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Li=["mat-icon, [matMenuItemIcon]","*"];function Hi(o,e){o&1&&(me(),_(0,"svg",2),V(1,"polygon",3),p())}var Yi=["*"];function Xi(o,e){if(o&1){let t=wt();Kt(0,"div",0),Me("click",function(){I(t);let n=k();return F(n.closed.emit("click"))})("animationstart",function(n){I(t);let s=k();return F(s._onAnimationStart(n.animationName))})("animationend",function(n){I(t);let s=k();return F(s._onAnimationDone(n.animationName))})("animationcancel",function(n){I(t);let s=k();return F(s._onAnimationDone(n.animationName))}),Kt(1,"div",1),L(2),we()()}if(o&2){let t=k();Mt(t._classList),ot("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Ce("id",t.panelId),et("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var he=new T("MAT_MENU_PANEL"),ct=(()=>{class o{_elementRef=l(M);_document=l(C);_focusMonitor=l($t);_parentMenu=l(he,{optional:!0});_changeDetectorRef=l(kt);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new w;_focused=new w;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(st).load(ze),this._parentMenu?.addItem?.(this)}focus(t,i){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),i=t.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<i.length;n++)i[n].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=b({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(i,n){i&1&&it("click",function(r){return n._checkDisabled(r)})("mouseenter",function(){return n._handleMouseEnter()}),i&2&&(et("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),ot("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",X],disableRipple:[2,"disableRipple","disableRipple",X]},exportAs:["matMenuItem"],attrs:Ni,ngContentSelectors:Li,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,n){i&1&&(nt(Vi),L(0),_(1,"span",0),L(2,1),p(),V(3,"div",1),z(4,Hi,2,0,":svg:svg",2)),i&2&&(x(3),bt("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),x(),U(n._triggersSubmenu?4:-1))},dependencies:[We],encapsulation:2,changeDetection:0})}return o})();var ji=new T("MatMenuContent");var Wi=new T("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),ce="_mat-menu-enter",Ht="_mat-menu-exit",J=(()=>{class o{_elementRef=l(M);_changeDetectorRef=l(kt);_injector=l(P);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=te();_allItems;_directDescendantItems=new _e;_classList={};_panelAnimationState="void";_animationDone=new w;_isAnimating=ft(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let i=this._previousPanelClass,n=E({},this._classList);i&&i.length&&i.split(" ").forEach(s=>{n[s]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(s=>{n[s]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new W;close=this.closed;panelId=l(St).getId("mat-menu-panel-");constructor(){let t=l(Wi);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Xe(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(pt(this._directDescendantItems),zt(t=>dt(...t.map(i=>i._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let n=t.toArray(),s=Math.max(0,Math.min(n.length-1,i.activeItemIndex||0));n[s]&&!n[s].disabled?i.setActiveItem(s):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(pt(this._directDescendantItems),zt(i=>dt(...i.map(n=>n._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let i=t.keyCode,n=this._keyManager;switch(i){case 27:Ye(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=tt(()=>{let i=this._resolvePanel();if(!i||!i.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(t).setFirstItemActive(),!n.activeItem&&i&&i.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,i=this.yPosition){this._classList=ht(E({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let i=t===Ht;(i||t===ce)&&(i&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(i?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===ce||t===Ht)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let i=this._resolvePanel();i&&(i.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ht),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?ce:Ht)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(pt(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=b({type:o,selectors:[["mat-menu"]],contentQueries:function(i,n,s){if(i&1&&Ct(s,ji,5)(s,ct,5)(s,ct,4),i&2){let r;H(r=Y())&&(n.lazyContent=r.first),H(r=Y())&&(n._allItems=r),H(r=Y())&&(n.items=r)}},viewQuery:function(i,n){if(i&1&&xe(_t,5),i&2){let s;H(s=Y())&&(n.templateRef=s.first)}},hostVars:3,hostBindings:function(i,n){i&2&&et("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",X],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:X(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Pe([{provide:he,useExisting:o}])],ngContentSelectors:Yi,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(i,n){i&1&&(nt(),be(0,Xi,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return o})(),zi=new T("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=l(P);return()=>Nt(o)}});var q=new WeakMap,Ui=(()=>{class o{_canHaveBackdrop;_element=l(M);_viewContainerRef=l(vt);_menuItemInstance=l(ct,{optional:!0,self:!0});_dir=l(Pt,{optional:!0});_focusMonitor=l($t);_ngZone=l(R);_injector=l(P);_scrollStrategy=l(zi);_changeDetectorRef=l(kt);_animationsDisabled=te();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=D.EMPTY;_menuCloseSubscription=D.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let i=l(he,{optional:!0});this._parentMaterialMenu=i instanceof J?i:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&q.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let i=this._menu;if(this._menuOpen||!i)return;this._pendingRemoval?.unsubscribe();let n=q.get(i);q.set(i,this),n&&n!==this&&n._closeMenu();let s=this._createOverlay(i),r=s.getConfig(),a=r.positionStrategy;this._setPosition(i,a),this._canHaveBackdrop?r.hasBackdrop=i.hasBackdrop==null?!this._triggersSubmenu():i.hasBackdrop:r.hasBackdrop=i.hasBackdrop??!1,s.hasAttached()||(s.attach(this._getPortal(i)),i.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),i.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,i.direction=this.dir,t&&i.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),i instanceof J&&(i._setIsOpen(!0),i._directDescendantItems.changes.pipe(pe(i.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(t,i){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}_destroyMenu(t){let i=this._overlayRef,n=this._menu;!i||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof J&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(ue(1)).subscribe(()=>{i.detach(),q.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(i.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&q.delete(n),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let i=this._getOverlayConfig(t);this._subscribeToPositions(t,i.positionStrategy),this._overlayRef=Lt(this._injector,i),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof J&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(t){return new $({positionStrategy:Vt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,i){t.setPositionClasses&&i.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let s=n.connectionPair.overlayX==="start"?"after":"before",r=n.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(s,r)})})}_setPosition(t,i){let[n,s]=t.xPosition==="before"?["end","start"]:["start","end"],[r,a]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,u]=[r,a],[c,d]=[n,s],f=0;if(this._triggersSubmenu()){if(d=n=t.xPosition==="before"?"start":"end",s=c=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let g=this._parentMaterialMenu.items.first;this._parentInnerPadding=g?g._getHostElement().offsetTop:0}f=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(h=r==="top"?"bottom":"top",u=a==="top"?"bottom":"top");i.withPositions([{originX:n,originY:h,overlayX:c,overlayY:r,offsetY:f},{originX:s,originY:h,overlayX:d,overlayY:r,offsetY:f},{originX:n,originY:u,overlayX:c,overlayY:a,offsetY:-f},{originX:s,originY:u,overlayX:d,overlayY:a,offsetY:-f}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),i=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Wt(),s=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(ut(r=>this._menuOpen&&r!==this._menuItemInstance)):Wt();return dt(t,n,s,i)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Q(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return q.get(t)===this}_triggerIsAriaDisabled(){return X(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(i){ye()};static \u0275dir=N({type:o})}return o})(),xi=(()=>{class o extends Ui{_cleanupTouchstart;_hoverSubscription=D.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new W;onMenuOpen=this.menuOpened;menuClosed=new W;onMenuClose=this.menuClosed;constructor(){super(!0);let t=l(yt);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",i=>{He(i)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){Le(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let i=t.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(i){return new(i||o)};static \u0275dir=N({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,n){i&1&&it("click",function(r){return n._handleClick(r)})("mousedown",function(r){return n._handleMousedown(r)})("keydown",function(r){return n._handleKeydown(r)}),i&2&&et("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Zt]})}return o})();var ki=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=B({type:o});static \u0275inj=A({imports:[Ze,le,Ot,Qe]})}return o})();function Gi(o,e){if(o&1&&(_(0,"span",4),y(1),p()),o&2){let t=k();x(),xt(t.store.wishlistitems().length)}}function Ki(o,e){if(o&1&&(_(0,"span",6),y(1),p()),o&2){let t=k();x(),Se(" ",t.store.cartitems().length," ")}}function Qi(o,e){if(o&1){let t=wt();_(0,"button",7)(1,"mat-icon"),y(2,"account_circle"),p()(),_(3,"mat-menu",null,0)(5,"div",8)(6,"p",9),y(7),p(),_(8,"p",10),y(9),p()(),_(10,"button",11),it("click",function(){I(t);let n=k();return F(n.logout())}),_(11,"mat-icon"),y(12,"logout"),p(),_(13,"span"),y(14,"Logout"),p()()()}if(o&2){let t,i,n=ke(4),s=k();bt("matMenuTriggerFor",n),x(7),xt((t=s.store.currentUser())==null?null:t.name),x(2),xt((i=s.store.currentUser())==null?null:i.email)}}function $i(o,e){o&1&&(_(0,"button",12),y(1," Login "),p(),_(2,"button",13),y(3," Sign-Up "),p())}var Yt=class o{store=l(qe);isInWishlist(){return this.store.wishlistitems().length>0}logout(){this.store.logout()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["app-header-actions"]],decls:13,vars:3,consts:[["userMenu","matMenu"],[1,"flex","items-center","gap-2"],[1,"relative"],["mat-icon-button","","routerLink","/wishlist"],[1,"absolute","-top-1","-right-1","bg-red-500","text-white","text-[10px]","font-bold","min-w-[18px]","h-[18px]","flex","items-center","justify-center","rounded-full","pointer-events-none","z-10"],["mat-icon-button","","routerLink","/cart"],[1,"absolute","-top-1","-right-1","bg-red-500","text-white","text-[10px]","font-bold","min-w-[18px]","h-[18px]","px-1","flex","items-center","justify-center","rounded-full","pointer-events-none","z-10"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"px-4","py-2","border-b","border-gray-200"],[1,"font-semibold","text-gray-800"],[1,"text-xs","text-gray-500"],["mat-menu-item","",3,"click"],["mat-flat-button","","routerLink","/login"],["mat-stroked-button","","routerLink","/signup"]],template:function(t,i){t&1&&(_(0,"div",1)(1,"div",2)(2,"button",3)(3,"mat-icon"),y(4,"favorite"),p()(),z(5,Gi,2,1,"span",4),p(),_(6,"div",2)(7,"button",5)(8,"mat-icon"),y(9,"shopping_cart"),p()(),z(10,Ki,2,1,"span",6),p(),z(11,Qi,15,3)(12,$i,4,0),p()),t&2&&(x(5),U(i.store.wishlistitems().length>0?5:-1),x(5),U(i.store.cartitems().length>0?10:-1),x(),U(i.store.isLoggedIn()?11:12))},dependencies:[Ge,Ue,Ke,Be,ki,J,ct,xi],encapsulation:2})};var Xt=class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["app-header"]],decls:5,vars:0,consts:[[1,"w-full","elevated","py-2","border-b","border-gray-900","shadow-md"],[1,"max-w-[1200px]","mx-auto","w-full","px-4","flex","item-center","justify-between"]],template:function(t,i){t&1&&(_(0,"mat-toolbar",0)(1,"div",1)(2,"span"),y(3,"AllEcomStore"),p(),V(4,"app-header-actions"),p()())},dependencies:[ei,Yt],encapsulation:2})};var jt=class o{title=ft("ecommerce");static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"h-[calc(100%)-64px]","overflow-auto"]],template:function(t,i){t&1&&V(0,"app-header")(1,"div",0)(2,"router-outlet")},dependencies:[Fe,Xt],styles:["h1[_ngcontent-%COMP%]{font-family:Google Sans}"]})};Ee(jt,ti).catch(o=>console.error(o));
