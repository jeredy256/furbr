function j_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function em(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tm={exports:{}},Sa={},nm={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=Symbol.for("react.element"),z_=Symbol.for("react.portal"),U_=Symbol.for("react.fragment"),W_=Symbol.for("react.strict_mode"),$_=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),V_=Symbol.for("react.forward_ref"),Y_=Symbol.for("react.suspense"),G_=Symbol.for("react.memo"),Q_=Symbol.for("react.lazy"),wd=Symbol.iterator;function K_(t){return t===null||typeof t!="object"?null:(t=wd&&t[wd]||t["@@iterator"],typeof t=="function"?t:null)}var rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},im=Object.assign,sm={};function Zr(t,e,n){this.props=t,this.context=e,this.refs=sm,this.updater=n||rm}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function om(){}om.prototype=Zr.prototype;function xc(t,e,n){this.props=t,this.context=e,this.refs=sm,this.updater=n||rm}var kc=xc.prototype=new om;kc.constructor=xc;im(kc,Zr.prototype);kc.isPureReactComponent=!0;var Ed=Array.isArray,am=Object.prototype.hasOwnProperty,Ic={current:null},lm={key:!0,ref:!0,__self:!0,__source:!0};function um(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)am.call(e,r)&&!lm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ss,type:t,key:s,ref:o,props:i,_owner:Ic.current}}function q_(t,e){return{$$typeof:Ss,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ss}function X_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cd=/\/+/g;function il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X_(""+t.key):e.toString(36)}function go(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ss:case z_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+il(o,0):r,Ed(i)?(n="",t!=null&&(n=t.replace(Cd,"$&/")+"/"),go(i,e,n,"",function(u){return u})):i!=null&&(bc(i)&&(i=q_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ed(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+il(s,a);o+=go(s,e,n,l,i)}else if(l=K_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+il(s,a++),o+=go(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ws(t,e,n){if(t==null)return t;var r=[],i=0;return go(t,r,"","",function(s){return e.call(n,s,i++)}),r}function J_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},vo={transition:null},Z_={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:vo,ReactCurrentOwner:Ic};W.Children={map:Ws,forEach:function(t,e,n){Ws(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ws(t,function(){e++}),e},toArray:function(t){return Ws(t,function(e){return e})||[]},only:function(t){if(!bc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Zr;W.Fragment=U_;W.Profiler=$_;W.PureComponent=xc;W.StrictMode=W_;W.Suspense=Y_;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=im({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ic.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)am.call(e,l)&&!lm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ss,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:H_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B_,_context:t},t.Consumer=t};W.createElement=um;W.createFactory=function(t){var e=um.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:V_,render:t}};W.isValidElement=bc;W.lazy=function(t){return{$$typeof:Q_,_payload:{_status:-1,_result:t},_init:J_}};W.memo=function(t,e){return{$$typeof:G_,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=vo.transition;vo.transition={};try{t()}finally{vo.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return Le.current.useCallback(t,e)};W.useContext=function(t){return Le.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};W.useEffect=function(t,e){return Le.current.useEffect(t,e)};W.useId=function(){return Le.current.useId()};W.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Le.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};W.useRef=function(t){return Le.current.useRef(t)};W.useState=function(t){return Le.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Le.current.useTransition()};W.version="18.2.0";nm.exports=W;var k=nm.exports;const Nc=em(k),e0=j_({__proto__:null,default:Nc},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=k,n0=Symbol.for("react.element"),r0=Symbol.for("react.fragment"),i0=Object.prototype.hasOwnProperty,s0=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o0={key:!0,ref:!0,__self:!0,__source:!0};function cm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)i0.call(e,r)&&!o0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:n0,type:t,key:s,ref:o,props:i,_owner:s0.current}}Sa.Fragment=r0;Sa.jsx=cm;Sa.jsxs=cm;tm.exports=Sa;var v=tm.exports,Ql={},fm={exports:{}},Xe={},dm={exports:{}},hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,D){var L=P.length;P.push(D);e:for(;0<L;){var ue=L-1>>>1,ye=P[ue];if(0<i(ye,D))P[ue]=D,P[L]=ye,L=ue;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],L=P.pop();if(L!==D){P[0]=L;e:for(var ue=0,ye=P.length,zs=ye>>>1;ue<zs;){var Rn=2*(ue+1)-1,rl=P[Rn],An=Rn+1,Us=P[An];if(0>i(rl,L))An<ye&&0>i(Us,rl)?(P[ue]=Us,P[An]=L,ue=An):(P[ue]=rl,P[Rn]=L,ue=Rn);else if(An<ye&&0>i(Us,L))P[ue]=Us,P[An]=L,ue=An;else break e}}return D}function i(P,D){var L=P.sortIndex-D.sortIndex;return L!==0?L:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,y=!1,_=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(P){if(_=!1,m(P),!y)if(n(l)!==null)y=!0,tl(S);else{var D=n(u);D!==null&&nl(w,D.startTime-P)}}function S(P,D){y=!1,_&&(_=!1,p(A),A=-1),g=!0;var L=d;try{for(m(D),f=n(l);f!==null&&(!(f.expirationTime>D)||P&&!ot());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,d=f.priorityLevel;var ye=ue(f.expirationTime<=D);D=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(l)&&r(l),m(D)}else r(l);f=n(l)}if(f!==null)var zs=!0;else{var Rn=n(u);Rn!==null&&nl(w,Rn.startTime-D),zs=!1}return zs}finally{f=null,d=L,g=!1}}var N=!1,T=null,A=-1,H=5,j=-1;function ot(){return!(t.unstable_now()-j<H)}function ci(){if(T!==null){var P=t.unstable_now();j=P;var D=!0;try{D=T(!0,P)}finally{D?fi():(N=!1,T=null)}}else N=!1}var fi;if(typeof h=="function")fi=function(){h(ci)};else if(typeof MessageChannel<"u"){var _d=new MessageChannel,F_=_d.port2;_d.port1.onmessage=ci,fi=function(){F_.postMessage(null)}}else fi=function(){C(ci,0)};function tl(P){T=P,N||(N=!0,fi())}function nl(P,D){A=C(function(){P(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,tl(S))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var L=d;d=D;try{return P()}finally{d=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=d;d=P;try{return D()}finally{d=L}},t.unstable_scheduleCallback=function(P,D,L){var ue=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ue+L:ue):L=ue,P){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=L+ye,P={id:c++,callback:D,priorityLevel:P,startTime:L,expirationTime:ye,sortIndex:-1},L>ue?(P.sortIndex=L,e(u,P),n(l)===null&&P===n(u)&&(_?(p(A),A=-1):_=!0,nl(w,L-ue))):(P.sortIndex=ye,e(l,P),y||g||(y=!0,tl(S))),P},t.unstable_shouldYield=ot,t.unstable_wrapCallback=function(P){var D=d;return function(){var L=d;d=D;try{return P.apply(this,arguments)}finally{d=L}}}})(hm);dm.exports=hm;var a0=dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=k,qe=a0;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mm=new Set,Hi={};function or(t,e){Ur(t,e),Ur(t+"Capture",e)}function Ur(t,e){for(Hi[t]=e,t=0;t<e.length;t++)mm.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sd={},xd={};function u0(t){return Kl.call(xd,t)?!0:Kl.call(Sd,t)?!1:l0.test(t)?xd[t]=!0:(Sd[t]=!0,!1)}function c0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function f0(t,e,n,r){if(e===null||typeof e>"u"||c0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tc=/[\-:]([a-z])/g;function Pc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tc,Pc);be[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tc,Pc);be[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tc,Pc);be[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rc(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(f0(e,n,i,r)&&(n=null),r||i===null?u0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wt=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$s=Symbol.for("react.element"),dr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),vm=Symbol.for("react.context"),Oc=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Dc=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),ym=Symbol.for("react.offscreen"),kd=Symbol.iterator;function di(t){return t===null||typeof t!="object"?null:(t=kd&&t[kd]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,sl;function xi(t){if(sl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sl=e&&e[1]||""}return`
`+sl+t}var ol=!1;function al(t,e){if(!t||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xi(t):""}function d0(t){switch(t.tag){case 5:return xi(t.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return t=al(t.type,!1),t;case 11:return t=al(t.type.render,!1),t;case 1:return t=al(t.type,!0),t;default:return""}}function Zl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case dr:return"Portal";case ql:return"Profiler";case Ac:return"StrictMode";case Xl:return"Suspense";case Jl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vm:return(t.displayName||"Context")+".Consumer";case gm:return(t._context.displayName||"Context")+".Provider";case Oc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dc:return e=t.displayName||null,e!==null?e:Zl(t.type)||"Memo";case Qt:e=t._payload,t=t._init;try{return Zl(t(e))}catch{}}return null}function h0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(e);case 8:return e===Ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _m(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p0(t){var e=_m(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bs(t){t._valueTracker||(t._valueTracker=p0(t))}function wm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_m(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Po(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function eu(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Id(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Em(t,e){e=e.checked,e!=null&&Rc(t,"checked",e,!1)}function tu(t,e){Em(t,e);var n=mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&nu(t,e.type,mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nu(t,e,n){(e!=="number"||Po(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ki=Array.isArray;function Nr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ki(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mn(n)}}function Cm(t,e){var n=mn(e.value),r=mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Td(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function iu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hs,xm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m0=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(t){m0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ti[e]=Ti[t]})});function km(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ti.hasOwnProperty(t)&&Ti[t]?(""+e).trim():e+"px"}function Im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=km(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var g0=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function su(t,e){if(e){if(g0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function Lc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lu=null,Tr=null,Pr=null;function Pd(t){if(t=Is(t)){if(typeof lu!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Na(e),lu(t.stateNode,t.type,e))}}function bm(t){Tr?Pr?Pr.push(t):Pr=[t]:Tr=t}function Nm(){if(Tr){var t=Tr,e=Pr;if(Pr=Tr=null,Pd(t),e)for(t=0;t<e.length;t++)Pd(e[t])}}function Tm(t,e){return t(e)}function Pm(){}var ll=!1;function Rm(t,e,n){if(ll)return t(e,n);ll=!0;try{return Tm(t,e,n)}finally{ll=!1,(Tr!==null||Pr!==null)&&(Pm(),Nm())}}function Yi(t,e){var n=t.stateNode;if(n===null)return null;var r=Na(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var uu=!1;if(At)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){uu=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{uu=!1}function v0(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Pi=!1,Ro=null,Ao=!1,cu=null,y0={onError:function(t){Pi=!0,Ro=t}};function _0(t,e,n,r,i,s,o,a,l){Pi=!1,Ro=null,v0.apply(y0,arguments)}function w0(t,e,n,r,i,s,o,a,l){if(_0.apply(this,arguments),Pi){if(Pi){var u=Ro;Pi=!1,Ro=null}else throw Error(E(198));Ao||(Ao=!0,cu=u)}}function ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Am(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rd(t){if(ar(t)!==t)throw Error(E(188))}function E0(t){var e=t.alternate;if(!e){if(e=ar(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rd(i),t;if(s===r)return Rd(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Om(t){return t=E0(t),t!==null?Dm(t):null}function Dm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dm(t);if(e!==null)return e;t=t.sibling}return null}var Lm=qe.unstable_scheduleCallback,Ad=qe.unstable_cancelCallback,C0=qe.unstable_shouldYield,S0=qe.unstable_requestPaint,fe=qe.unstable_now,x0=qe.unstable_getCurrentPriorityLevel,Mc=qe.unstable_ImmediatePriority,Mm=qe.unstable_UserBlockingPriority,Oo=qe.unstable_NormalPriority,k0=qe.unstable_LowPriority,Fm=qe.unstable_IdlePriority,xa=null,St=null;function I0(t){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(xa,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:T0,b0=Math.log,N0=Math.LN2;function T0(t){return t>>>=0,t===0?32:31-(b0(t)/N0|0)|0}var Vs=64,Ys=4194304;function Ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Do(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ii(a):(s&=o,s!==0&&(r=Ii(s)))}else o=n&~i,o!==0?r=Ii(o):s!==0&&(r=Ii(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mt(e),i=1<<n,r|=t[n],e&=~i;return r}function P0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=P0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jm(){var t=Vs;return Vs<<=1,!(Vs&4194240)&&(Vs=64),t}function ul(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mt(e),t[e]=n}function A0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function zm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Um,jc,Wm,$m,Bm,du=!1,Gs=[],nn=null,rn=null,sn=null,Gi=new Map,Qi=new Map,qt=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Od(t,e){switch(t){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Gi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(e.pointerId)}}function pi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Is(e),e!==null&&jc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function D0(t,e,n,r,i){switch(e){case"focusin":return nn=pi(nn,t,e,n,r,i),!0;case"dragenter":return rn=pi(rn,t,e,n,r,i),!0;case"mouseover":return sn=pi(sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,pi(Gi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qi.set(s,pi(Qi.get(s)||null,t,e,n,r,i)),!0}return!1}function Hm(t){var e=jn(t.target);if(e!==null){var n=ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Am(n),e!==null){t.blockedOn=e,Bm(t.priority,function(){Wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);au=r,n.target.dispatchEvent(r),au=null}else return e=Is(n),e!==null&&jc(e),t.blockedOn=n,!1;e.shift()}return!0}function Dd(t,e,n){yo(t)&&n.delete(e)}function L0(){du=!1,nn!==null&&yo(nn)&&(nn=null),rn!==null&&yo(rn)&&(rn=null),sn!==null&&yo(sn)&&(sn=null),Gi.forEach(Dd),Qi.forEach(Dd)}function mi(t,e){t.blockedOn===e&&(t.blockedOn=null,du||(du=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,L0)))}function Ki(t){function e(i){return mi(i,t)}if(0<Gs.length){mi(Gs[0],t);for(var n=1;n<Gs.length;n++){var r=Gs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nn!==null&&mi(nn,t),rn!==null&&mi(rn,t),sn!==null&&mi(sn,t),Gi.forEach(e),Qi.forEach(e),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Hm(n),n.blockedOn===null&&qt.shift()}var Rr=Wt.ReactCurrentBatchConfig,Lo=!0;function M0(t,e,n,r){var i=V,s=Rr.transition;Rr.transition=null;try{V=1,zc(t,e,n,r)}finally{V=i,Rr.transition=s}}function F0(t,e,n,r){var i=V,s=Rr.transition;Rr.transition=null;try{V=4,zc(t,e,n,r)}finally{V=i,Rr.transition=s}}function zc(t,e,n,r){if(Lo){var i=hu(t,e,n,r);if(i===null)_l(t,e,r,Mo,n),Od(t,r);else if(D0(i,t,e,n,r))r.stopPropagation();else if(Od(t,r),e&4&&-1<O0.indexOf(t)){for(;i!==null;){var s=Is(i);if(s!==null&&Um(s),s=hu(t,e,n,r),s===null&&_l(t,e,r,Mo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _l(t,e,r,null,n)}}var Mo=null;function hu(t,e,n,r){if(Mo=null,t=Lc(r),t=jn(t),t!==null)if(e=ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Am(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mo=t,null}function Vm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x0()){case Mc:return 1;case Mm:return 4;case Oo:case k0:return 16;case Fm:return 536870912;default:return 16}default:return 16}}var Jt=null,Uc=null,_o=null;function Ym(){if(_o)return _o;var t,e=Uc,n=e.length,r,i="value"in Jt?Jt.value:Jt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _o=i.slice(t,1<r?1-r:void 0)}function wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function Ld(){return!1}function Je(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qs:Ld,this.isPropagationStopped=Ld,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),e}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=Je(ei),ks=se({},ei,{view:0,detail:0}),j0=Je(ks),cl,fl,gi,ka=se({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gi&&(gi&&t.type==="mousemove"?(cl=t.screenX-gi.screenX,fl=t.screenY-gi.screenY):fl=cl=0,gi=t),cl)},movementY:function(t){return"movementY"in t?t.movementY:fl}}),Md=Je(ka),z0=se({},ka,{dataTransfer:0}),U0=Je(z0),W0=se({},ks,{relatedTarget:0}),dl=Je(W0),$0=se({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Je($0),H0=se({},ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V0=Je(H0),Y0=se({},ei,{data:0}),Fd=Je(Y0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K0[t])?!!e[t]:!1}function $c(){return q0}var X0=se({},ks,{key:function(t){if(t.key){var e=G0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J0=Je(X0),Z0=se({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Je(Z0),e1=se({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),t1=Je(e1),n1=se({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),r1=Je(n1),i1=se({},ka,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=Je(i1),o1=[9,13,27,32],Bc=At&&"CompositionEvent"in window,Ri=null;At&&"documentMode"in document&&(Ri=document.documentMode);var a1=At&&"TextEvent"in window&&!Ri,Gm=At&&(!Bc||Ri&&8<Ri&&11>=Ri),zd=String.fromCharCode(32),Ud=!1;function Qm(t,e){switch(t){case"keyup":return o1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Km(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function l1(t,e){switch(t){case"compositionend":return Km(e);case"keypress":return e.which!==32?null:(Ud=!0,zd);case"textInput":return t=e.data,t===zd&&Ud?null:t;default:return null}}function u1(t,e){if(pr)return t==="compositionend"||!Bc&&Qm(t,e)?(t=Ym(),_o=Uc=Jt=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gm&&e.locale!=="ko"?null:e.data;default:return null}}var c1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c1[t.type]:e==="textarea"}function qm(t,e,n,r){bm(r),e=Fo(e,"onChange"),0<e.length&&(n=new Wc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ai=null,qi=null;function f1(t){ag(t,0)}function Ia(t){var e=vr(t);if(wm(e))return t}function d1(t,e){if(t==="change")return e}var Xm=!1;if(At){var hl;if(At){var pl="oninput"in document;if(!pl){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),pl=typeof $d.oninput=="function"}hl=pl}else hl=!1;Xm=hl&&(!document.documentMode||9<document.documentMode)}function Bd(){Ai&&(Ai.detachEvent("onpropertychange",Jm),qi=Ai=null)}function Jm(t){if(t.propertyName==="value"&&Ia(qi)){var e=[];qm(e,qi,t,Lc(t)),Rm(f1,e)}}function h1(t,e,n){t==="focusin"?(Bd(),Ai=e,qi=n,Ai.attachEvent("onpropertychange",Jm)):t==="focusout"&&Bd()}function p1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ia(qi)}function m1(t,e){if(t==="click")return Ia(e)}function g1(t,e){if(t==="input"||t==="change")return Ia(e)}function v1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yt=typeof Object.is=="function"?Object.is:v1;function Xi(t,e){if(yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kl.call(e,i)||!yt(t[i],e[i]))return!1}return!0}function Hd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vd(t,e){var n=Hd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hd(n)}}function Zm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function eg(){for(var t=window,e=Po();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Po(t.document)}return e}function Hc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function y1(t){var e=eg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zm(n.ownerDocument.documentElement,n)){if(r!==null&&Hc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vd(n,s);var o=Vd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _1=At&&"documentMode"in document&&11>=document.documentMode,mr=null,pu=null,Oi=null,mu=!1;function Yd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mu||mr==null||mr!==Po(r)||(r=mr,"selectionStart"in r&&Hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oi&&Xi(Oi,r)||(Oi=r,r=Fo(pu,"onSelect"),0<r.length&&(e=new Wc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mr)))}function Ks(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gr={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},ml={},tg={};At&&(tg=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function ba(t){if(ml[t])return ml[t];if(!gr[t])return t;var e=gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tg)return ml[t]=e[n];return t}var ng=ba("animationend"),rg=ba("animationiteration"),ig=ba("animationstart"),sg=ba("transitionend"),og=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(t,e){og.set(t,e),or(e,[t])}for(var gl=0;gl<Gd.length;gl++){var vl=Gd[gl],w1=vl.toLowerCase(),E1=vl[0].toUpperCase()+vl.slice(1);Cn(w1,"on"+E1)}Cn(ng,"onAnimationEnd");Cn(rg,"onAnimationIteration");Cn(ig,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(sg,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function Qd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,w0(r,e,void 0,t),t.currentTarget=null}function ag(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qd(i,a,u),s=l}}}if(Ao)throw t=cu,Ao=!1,cu=null,t}function X(t,e){var n=e[wu];n===void 0&&(n=e[wu]=new Set);var r=t+"__bubble";n.has(r)||(lg(e,t,2,!1),n.add(r))}function yl(t,e,n){var r=0;e&&(r|=4),lg(n,t,r,e)}var qs="_reactListening"+Math.random().toString(36).slice(2);function Ji(t){if(!t[qs]){t[qs]=!0,mm.forEach(function(n){n!=="selectionchange"&&(C1.has(n)||yl(n,!1,t),yl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qs]||(e[qs]=!0,yl("selectionchange",!1,e))}}function lg(t,e,n,r){switch(Vm(e)){case 1:var i=M0;break;case 4:i=F0;break;default:i=zc}n=i.bind(null,e,n,t),i=void 0,!uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _l(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=jn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Rm(function(){var u=s,c=Lc(n),f=[];e:{var d=og.get(t);if(d!==void 0){var g=Wc,y=t;switch(t){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":g=J0;break;case"focusin":y="focus",g=dl;break;case"focusout":y="blur",g=dl;break;case"beforeblur":case"afterblur":g=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=U0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=t1;break;case ng:case rg:case ig:g=B0;break;case sg:g=r1;break;case"scroll":g=j0;break;case"wheel":g=s1;break;case"copy":case"cut":case"paste":g=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jd}var _=(e&4)!==0,C=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Yi(h,p),w!=null&&_.push(Zi(h,w,m)))),C)break;h=h.return}0<_.length&&(d=new g(d,y,null,n,c),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==au&&(y=n.relatedTarget||n.fromElement)&&(jn(y)||y[Ot]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?jn(y):null,y!==null&&(C=ar(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=Md,w="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=jd,w="onPointerLeave",p="onPointerEnter",h="pointer"),C=g==null?d:vr(g),m=y==null?d:vr(y),d=new _(w,h+"leave",g,n,c),d.target=C,d.relatedTarget=m,w=null,jn(c)===u&&(_=new _(p,h+"enter",y,n,c),_.target=m,_.relatedTarget=C,w=_),C=w,g&&y)t:{for(_=g,p=y,h=0,m=_;m;m=cr(m))h++;for(m=0,w=p;w;w=cr(w))m++;for(;0<h-m;)_=cr(_),h--;for(;0<m-h;)p=cr(p),m--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=cr(_),p=cr(p)}_=null}else _=null;g!==null&&Kd(f,d,g,_,!1),y!==null&&C!==null&&Kd(f,C,y,_,!0)}}e:{if(d=u?vr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var S=d1;else if(Wd(d))if(Xm)S=g1;else{S=p1;var N=h1}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=m1);if(S&&(S=S(t,u))){qm(f,S,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&nu(d,"number",d.value)}switch(N=u?vr(u):window,t){case"focusin":(Wd(N)||N.contentEditable==="true")&&(mr=N,pu=u,Oi=null);break;case"focusout":Oi=pu=mr=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Yd(f,n,c);break;case"selectionchange":if(_1)break;case"keydown":case"keyup":Yd(f,n,c)}var T;if(Bc)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else pr?Qm(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Gm&&n.locale!=="ko"&&(pr||A!=="onCompositionStart"?A==="onCompositionEnd"&&pr&&(T=Ym()):(Jt=c,Uc="value"in Jt?Jt.value:Jt.textContent,pr=!0)),N=Fo(u,A),0<N.length&&(A=new Fd(A,t,null,n,c),f.push({event:A,listeners:N}),T?A.data=T:(T=Km(n),T!==null&&(A.data=T)))),(T=a1?l1(t,n):u1(t,n))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(c=new Fd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}ag(f,e)})}function Zi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Yi(t,n),s!=null&&r.unshift(Zi(t,s,i)),s=Yi(t,e),s!=null&&r.push(Zi(t,s,i))),t=t.return}return r}function cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Yi(n,s),l!=null&&o.unshift(Zi(n,l,a))):i||(l=Yi(n,s),l!=null&&o.push(Zi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S1=/\r\n?/g,x1=/\u0000|\uFFFD/g;function qd(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(x1,"")}function Xs(t,e,n){if(e=qd(e),qd(t)!==e&&n)throw Error(E(425))}function jo(){}var gu=null,vu=null;function yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,I1=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(t){return Xd.resolve(null).then(t).catch(b1)}:_u;function b1(t){setTimeout(function(){throw t})}function wl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ki(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ki(e)}function on(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ti=Math.random().toString(36).slice(2),Et="__reactFiber$"+ti,es="__reactProps$"+ti,Ot="__reactContainer$"+ti,wu="__reactEvents$"+ti,N1="__reactListeners$"+ti,T1="__reactHandles$"+ti;function jn(t){var e=t[Et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[Et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jd(t);t!==null;){if(n=t[Et])return n;t=Jd(t)}return e}t=n,n=t.parentNode}return null}function Is(t){return t=t[Et]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Na(t){return t[es]||null}var Eu=[],yr=-1;function Sn(t){return{current:t}}function ee(t){0>yr||(t.current=Eu[yr],Eu[yr]=null,yr--)}function q(t,e){yr++,Eu[yr]=t.current,t.current=e}var gn={},Ae=Sn(gn),We=Sn(!1),Qn=gn;function Wr(t,e){var n=t.type.contextTypes;if(!n)return gn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $e(t){return t=t.childContextTypes,t!=null}function zo(){ee(We),ee(Ae)}function Zd(t,e,n){if(Ae.current!==gn)throw Error(E(168));q(Ae,e),q(We,n)}function ug(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,h0(t)||"Unknown",i));return se({},n,r)}function Uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gn,Qn=Ae.current,q(Ae,t),q(We,We.current),!0}function eh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=ug(t,e,Qn),r.__reactInternalMemoizedMergedChildContext=t,ee(We),ee(Ae),q(Ae,t)):ee(We),q(We,n)}var It=null,Ta=!1,El=!1;function cg(t){It===null?It=[t]:It.push(t)}function P1(t){Ta=!0,cg(t)}function xn(){if(!El&&It!==null){El=!0;var t=0,e=V;try{var n=It;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,Ta=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),Lm(Mc,xn),i}finally{V=e,El=!1}}return null}var _r=[],wr=0,Wo=null,$o=0,et=[],tt=0,Kn=null,bt=1,Nt="";function Dn(t,e){_r[wr++]=$o,_r[wr++]=Wo,Wo=t,$o=e}function fg(t,e,n){et[tt++]=bt,et[tt++]=Nt,et[tt++]=Kn,Kn=t;var r=bt;t=Nt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var s=32-mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bt=1<<32-mt(e)+i|n<<i|r,Nt=s+t}else bt=1<<s|n<<i|r,Nt=t}function Vc(t){t.return!==null&&(Dn(t,1),fg(t,1,0))}function Yc(t){for(;t===Wo;)Wo=_r[--wr],_r[wr]=null,$o=_r[--wr],_r[wr]=null;for(;t===Kn;)Kn=et[--tt],et[tt]=null,Nt=et[--tt],et[tt]=null,bt=et[--tt],et[tt]=null}var Ke=null,Qe=null,ne=!1,ct=null;function dg(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function th(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Qe=on(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kn!==null?{id:bt,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Qe=null,!0):!1;default:return!1}}function Cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Su(t){if(ne){var e=Qe;if(e){var n=e;if(!th(t,e)){if(Cu(t))throw Error(E(418));e=on(n.nextSibling);var r=Ke;e&&th(t,e)?dg(r,n):(t.flags=t.flags&-4097|2,ne=!1,Ke=t)}}else{if(Cu(t))throw Error(E(418));t.flags=t.flags&-4097|2,ne=!1,Ke=t}}}function nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function Js(t){if(t!==Ke)return!1;if(!ne)return nh(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yu(t.type,t.memoizedProps)),e&&(e=Qe)){if(Cu(t))throw hg(),Error(E(418));for(;e;)dg(t,e),e=on(e.nextSibling)}if(nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=on(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Ke?on(t.stateNode.nextSibling):null;return!0}function hg(){for(var t=Qe;t;)t=on(t.nextSibling)}function $r(){Qe=Ke=null,ne=!1}function Gc(t){ct===null?ct=[t]:ct.push(t)}var R1=Wt.ReactCurrentBatchConfig;function lt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bo=Sn(null),Ho=null,Er=null,Qc=null;function Kc(){Qc=Er=Ho=null}function qc(t){var e=Bo.current;ee(Bo),t._currentValue=e}function xu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ar(t,e){Ho=t,Qc=Er=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(je=!0),t.firstContext=null)}function it(t){var e=t._currentValue;if(Qc!==t)if(t={context:t,memoizedValue:e,next:null},Er===null){if(Ho===null)throw Error(E(308));Er=t,Ho.dependencies={lanes:0,firstContext:t}}else Er=Er.next=t;return e}var zn=null;function Xc(t){zn===null?zn=[t]:zn.push(t)}function pg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dt(t,r)}function Dt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function an(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dt(t,n)}return i=r.interleaved,i===null?(e.next=e,Xc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dt(t,n)}function Eo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fc(t,n)}}function rh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vo(t,e,n,r){var i=t.updateQueue;Kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(g,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(g,f,d):y,d==null)break e;f=se({},f,d);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xn|=o,t.lanes=o,t.memoizedState=f}}function ih(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var gg=new pm.Component().refs;function ku(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pa={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=De(),i=un(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=an(t,s,i),e!==null&&(gt(e,t,i,r),Eo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=De(),i=un(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=an(t,s,i),e!==null&&(gt(e,t,i,r),Eo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=De(),r=un(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=an(t,i,r),e!==null&&(gt(e,t,r,n),Eo(e,t,r))}};function sh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xi(n,r)||!Xi(i,s):!0}function vg(t,e,n){var r=!1,i=gn,s=e.contextType;return typeof s=="object"&&s!==null?s=it(s):(i=$e(e)?Qn:Ae.current,r=e.contextTypes,s=(r=r!=null)?Wr(t,i):gn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function oh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pa.enqueueReplaceState(e,e.state,null)}function Iu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=gg,Jc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=it(s):(s=$e(e)?Qn:Ae.current,i.context=Wr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ku(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pa.enqueueReplaceState(i,i.state,null),Vo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===gg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Zs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ah(t){var e=t._init;return e(t._payload)}function yg(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=cn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,w){return h===null||h.tag!==6?(h=Nl(m,p.mode,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,w){var S=m.type;return S===hr?c(p,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qt&&ah(S)===h.type)?(w=i(h,m.props),w.ref=vi(p,h,m),w.return=p,w):(w=bo(m.type,m.key,m.props,null,p.mode,w),w.ref=vi(p,h,m),w.return=p,w)}function u(p,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Tl(m,p.mode,w),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,w,S){return h===null||h.tag!==7?(h=Yn(m,p.mode,w,S),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Nl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case $s:return m=bo(h.type,h.key,h.props,null,p.mode,m),m.ref=vi(p,null,h),m.return=p,m;case dr:return h=Tl(h,p.mode,m),h.return=p,h;case Qt:var w=h._init;return f(p,w(h._payload),m)}if(ki(h)||di(h))return h=Yn(h,p.mode,m,null),h.return=p,h;Zs(p,h)}return null}function d(p,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case $s:return m.key===S?l(p,h,m,w):null;case dr:return m.key===S?u(p,h,m,w):null;case Qt:return S=m._init,d(p,h,S(m._payload),w)}if(ki(m)||di(m))return S!==null?null:c(p,h,m,w,null);Zs(p,m)}return null}function g(p,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(h,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $s:return p=p.get(w.key===null?m:w.key)||null,l(h,p,w,S);case dr:return p=p.get(w.key===null?m:w.key)||null,u(h,p,w,S);case Qt:var N=w._init;return g(p,h,m,N(w._payload),S)}if(ki(w)||di(w))return p=p.get(m)||null,c(h,p,w,S,null);Zs(h,w)}return null}function y(p,h,m,w){for(var S=null,N=null,T=h,A=h=0,H=null;T!==null&&A<m.length;A++){T.index>A?(H=T,T=null):H=T.sibling;var j=d(p,T,m[A],w);if(j===null){T===null&&(T=H);break}t&&T&&j.alternate===null&&e(p,T),h=s(j,h,A),N===null?S=j:N.sibling=j,N=j,T=H}if(A===m.length)return n(p,T),ne&&Dn(p,A),S;if(T===null){for(;A<m.length;A++)T=f(p,m[A],w),T!==null&&(h=s(T,h,A),N===null?S=T:N.sibling=T,N=T);return ne&&Dn(p,A),S}for(T=r(p,T);A<m.length;A++)H=g(T,p,A,m[A],w),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?A:H.key),h=s(H,h,A),N===null?S=H:N.sibling=H,N=H);return t&&T.forEach(function(ot){return e(p,ot)}),ne&&Dn(p,A),S}function _(p,h,m,w){var S=di(m);if(typeof S!="function")throw Error(E(150));if(m=S.call(m),m==null)throw Error(E(151));for(var N=S=null,T=h,A=h=0,H=null,j=m.next();T!==null&&!j.done;A++,j=m.next()){T.index>A?(H=T,T=null):H=T.sibling;var ot=d(p,T,j.value,w);if(ot===null){T===null&&(T=H);break}t&&T&&ot.alternate===null&&e(p,T),h=s(ot,h,A),N===null?S=ot:N.sibling=ot,N=ot,T=H}if(j.done)return n(p,T),ne&&Dn(p,A),S;if(T===null){for(;!j.done;A++,j=m.next())j=f(p,j.value,w),j!==null&&(h=s(j,h,A),N===null?S=j:N.sibling=j,N=j);return ne&&Dn(p,A),S}for(T=r(p,T);!j.done;A++,j=m.next())j=g(T,p,A,j.value,w),j!==null&&(t&&j.alternate!==null&&T.delete(j.key===null?A:j.key),h=s(j,h,A),N===null?S=j:N.sibling=j,N=j);return t&&T.forEach(function(ci){return e(p,ci)}),ne&&Dn(p,A),S}function C(p,h,m,w){if(typeof m=="object"&&m!==null&&m.type===hr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case $s:e:{for(var S=m.key,N=h;N!==null;){if(N.key===S){if(S=m.type,S===hr){if(N.tag===7){n(p,N.sibling),h=i(N,m.props.children),h.return=p,p=h;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qt&&ah(S)===N.type){n(p,N.sibling),h=i(N,m.props),h.ref=vi(p,N,m),h.return=p,p=h;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===hr?(h=Yn(m.props.children,p.mode,w,m.key),h.return=p,p=h):(w=bo(m.type,m.key,m.props,null,p.mode,w),w.ref=vi(p,h,m),w.return=p,p=w)}return o(p);case dr:e:{for(N=m.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Tl(m,p.mode,w),h.return=p,p=h}return o(p);case Qt:return N=m._init,C(p,h,N(m._payload),w)}if(ki(m))return y(p,h,m,w);if(di(m))return _(p,h,m,w);Zs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Nl(m,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return C}var Br=yg(!0),_g=yg(!1),bs={},xt=Sn(bs),ts=Sn(bs),ns=Sn(bs);function Un(t){if(t===bs)throw Error(E(174));return t}function Zc(t,e){switch(q(ns,e),q(ts,t),q(xt,bs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:iu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=iu(e,t)}ee(xt),q(xt,e)}function Hr(){ee(xt),ee(ts),ee(ns)}function wg(t){Un(ns.current);var e=Un(xt.current),n=iu(e,t.type);e!==n&&(q(ts,t),q(xt,n))}function ef(t){ts.current===t&&(ee(xt),ee(ts))}var re=Sn(0);function Yo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cl=[];function tf(){for(var t=0;t<Cl.length;t++)Cl[t]._workInProgressVersionPrimary=null;Cl.length=0}var Co=Wt.ReactCurrentDispatcher,Sl=Wt.ReactCurrentBatchConfig,qn=0,ie=null,pe=null,we=null,Go=!1,Di=!1,rs=0,A1=0;function Ne(){throw Error(E(321))}function nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yt(t[n],e[n]))return!1;return!0}function rf(t,e,n,r,i,s){if(qn=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Co.current=t===null||t.memoizedState===null?M1:F1,t=n(r,i),Di){s=0;do{if(Di=!1,rs=0,25<=s)throw Error(E(301));s+=1,we=pe=null,e.updateQueue=null,Co.current=j1,t=n(r,i)}while(Di)}if(Co.current=Qo,e=pe!==null&&pe.next!==null,qn=0,we=pe=ie=null,Go=!1,e)throw Error(E(300));return t}function sf(){var t=rs!==0;return rs=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ie.memoizedState=we=t:we=we.next=t,we}function st(){if(pe===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=pe.next;var e=we===null?ie.memoizedState:we.next;if(e!==null)we=e,pe=t;else{if(t===null)throw Error(E(310));pe=t,t={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?ie.memoizedState=we=t:we=we.next=t}return we}function is(t,e){return typeof e=="function"?e(t):e}function xl(t){var e=st(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((qn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ie.lanes|=c,Xn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,yt(r,e.memoizedState)||(je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,Xn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kl(t){var e=st(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yt(s,e.memoizedState)||(je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Eg(){}function Cg(t,e){var n=ie,r=st(),i=e(),s=!yt(r.memoizedState,i);if(s&&(r.memoizedState=i,je=!0),r=r.queue,of(kg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ss(9,xg.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(E(349));qn&30||Sg(n,e,i)}return i}function Sg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xg(t,e,n,r){e.value=n,e.getSnapshot=r,Ig(e)&&bg(t)}function kg(t,e,n){return n(function(){Ig(e)&&bg(t)})}function Ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yt(t,n)}catch{return!0}}function bg(t){var e=Dt(t,1);e!==null&&gt(e,t,1,-1)}function lh(t){var e=wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},e.queue=t,t=t.dispatch=L1.bind(null,ie,t),[e.memoizedState,t]}function ss(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ng(){return st().memoizedState}function So(t,e,n,r){var i=wt();ie.flags|=t,i.memoizedState=ss(1|e,n,void 0,r===void 0?null:r)}function Ra(t,e,n,r){var i=st();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&nf(r,o.deps)){i.memoizedState=ss(e,n,s,r);return}}ie.flags|=t,i.memoizedState=ss(1|e,n,s,r)}function uh(t,e){return So(8390656,8,t,e)}function of(t,e){return Ra(2048,8,t,e)}function Tg(t,e){return Ra(4,2,t,e)}function Pg(t,e){return Ra(4,4,t,e)}function Rg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ag(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4,4,Rg.bind(null,e,t),n)}function af(){}function Og(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dg(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lg(t,e,n){return qn&21?(yt(n,e)||(n=jm(),ie.lanes|=n,Xn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,je=!0),t.memoizedState=n)}function O1(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=Sl.transition;Sl.transition={};try{t(!1),e()}finally{V=n,Sl.transition=r}}function Mg(){return st().memoizedState}function D1(t,e,n){var r=un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fg(t))jg(e,n);else if(n=pg(t,e,n,r),n!==null){var i=De();gt(n,t,r,i),zg(n,e,r)}}function L1(t,e,n){var r=un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fg(t))jg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yt(a,o)){var l=e.interleaved;l===null?(i.next=i,Xc(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=pg(t,e,i,r),n!==null&&(i=De(),gt(n,t,r,i),zg(n,e,r))}}function Fg(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function jg(t,e){Di=Go=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fc(t,n)}}var Qo={readContext:it,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},M1={readContext:it,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:it,useEffect:uh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,So(4194308,4,Rg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return So(4194308,4,t,e)},useInsertionEffect:function(t,e){return So(4,2,t,e)},useMemo:function(t,e){var n=wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=D1.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:lh,useDebugValue:af,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=lh(!1),e=t[0];return t=O1.bind(null,t[1]),wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=wt();if(ne){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Se===null)throw Error(E(349));qn&30||Sg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uh(kg.bind(null,r,s,t),[t]),r.flags|=2048,ss(9,xg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wt(),e=Se.identifierPrefix;if(ne){var n=Nt,r=bt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=A1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},F1={readContext:it,useCallback:Og,useContext:it,useEffect:of,useImperativeHandle:Ag,useInsertionEffect:Tg,useLayoutEffect:Pg,useMemo:Dg,useReducer:xl,useRef:Ng,useState:function(){return xl(is)},useDebugValue:af,useDeferredValue:function(t){var e=st();return Lg(e,pe.memoizedState,t)},useTransition:function(){var t=xl(is)[0],e=st().memoizedState;return[t,e]},useMutableSource:Eg,useSyncExternalStore:Cg,useId:Mg,unstable_isNewReconciler:!1},j1={readContext:it,useCallback:Og,useContext:it,useEffect:of,useImperativeHandle:Ag,useInsertionEffect:Tg,useLayoutEffect:Pg,useMemo:Dg,useReducer:kl,useRef:Ng,useState:function(){return kl(is)},useDebugValue:af,useDeferredValue:function(t){var e=st();return pe===null?e.memoizedState=t:Lg(e,pe.memoizedState,t)},useTransition:function(){var t=kl(is)[0],e=st().memoizedState;return[t,e]},useMutableSource:Eg,useSyncExternalStore:Cg,useId:Mg,unstable_isNewReconciler:!1};function Vr(t,e){try{var n="",r=e;do n+=d0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Il(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var z1=typeof WeakMap=="function"?WeakMap:Map;function Ug(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qo||(qo=!0,Fu=r),bu(t,e)},n}function Wg(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bu(t,e),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ch(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new z1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Z1.bind(null,t,e,n),e.then(t,t))}function fh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,an(n,e,1))),n.lanes|=1),t)}var U1=Wt.ReactCurrentOwner,je=!1;function Oe(t,e,n,r){e.child=t===null?_g(e,null,n,r):Br(e,t.child,n,r)}function hh(t,e,n,r,i){n=n.render;var s=e.ref;return Ar(e,i),r=rf(t,e,n,r,s,i),n=sf(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(ne&&n&&Vc(e),e.flags|=1,Oe(t,e,r,i),e.child)}function ph(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$g(t,e,s,r,i)):(t=bo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xi,n(o,r)&&t.ref===e.ref)return Lt(t,e,i)}return e.flags|=1,t=cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function $g(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xi(s,r)&&t.ref===e.ref)if(je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(je=!0);else return e.lanes=t.lanes,Lt(t,e,i)}return Nu(t,e,n,r,i)}function Bg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Sr,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,q(Sr,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(Sr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,q(Sr,Ge),Ge|=r;return Oe(t,e,i,n),e.child}function Hg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nu(t,e,n,r,i){var s=$e(n)?Qn:Ae.current;return s=Wr(e,s),Ar(e,i),n=rf(t,e,n,r,s,i),r=sf(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(ne&&r&&Vc(e),e.flags|=1,Oe(t,e,n,i),e.child)}function mh(t,e,n,r,i){if($e(n)){var s=!0;Uo(e)}else s=!1;if(Ar(e,i),e.stateNode===null)xo(t,e),vg(e,n,r),Iu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=$e(n)?Qn:Ae.current,u=Wr(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&oh(e,o,r,u),Kt=!1;var d=e.memoizedState;o.state=d,Vo(e,r,o,i),l=e.memoizedState,a!==r||d!==l||We.current||Kt?(typeof c=="function"&&(ku(e,n,c,r),l=e.memoizedState),(a=Kt||sh(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:lt(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=$e(n)?Qn:Ae.current,l=Wr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&oh(e,o,r,l),Kt=!1,d=e.memoizedState,o.state=d,Vo(e,r,o,i);var y=e.memoizedState;a!==f||d!==y||We.current||Kt?(typeof g=="function"&&(ku(e,n,g,r),y=e.memoizedState),(u=Kt||sh(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Tu(t,e,n,r,s,i)}function Tu(t,e,n,r,i,s){Hg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&eh(e,n,!1),Lt(t,e,s);r=e.stateNode,U1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Br(e,t.child,null,s),e.child=Br(e,null,a,s)):Oe(t,e,a,s),e.memoizedState=r.state,i&&eh(e,n,!0),e.child}function Vg(t){var e=t.stateNode;e.pendingContext?Zd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zd(t,e.context,!1),Zc(t,e.containerInfo)}function gh(t,e,n,r,i){return $r(),Gc(i),e.flags|=256,Oe(t,e,n,r),e.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yg(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),q(re,i&1),t===null)return Su(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Da(o,r,0,null),t=Yn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ru(n),e.memoizedState=Pu,t):lf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return W1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=cn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=cn(a,s):(s=Yn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ru(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pu,r}return s=t.child,t=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lf(t,e){return e=Da({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function eo(t,e,n,r){return r!==null&&Gc(r),Br(e,t.child,null,n),t=lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function W1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Il(Error(E(422))),eo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Da({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Br(e,t.child,null,o),e.child.memoizedState=Ru(o),e.memoizedState=Pu,s);if(!(e.mode&1))return eo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Il(s,r,void 0),eo(t,e,o,r)}if(a=(o&t.childLanes)!==0,je||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(t,i),gt(r,t,i,-1))}return pf(),r=Il(Error(E(421))),eo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ew.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qe=on(i.nextSibling),Ke=e,ne=!0,ct=null,t!==null&&(et[tt++]=bt,et[tt++]=Nt,et[tt++]=Kn,bt=t.id,Nt=t.overflow,Kn=e),e=lf(e,r.children),e.flags|=4096,e)}function vh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xu(t.return,e,n)}function bl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vh(t,n,e);else if(t.tag===19)vh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(q(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bl(e,!0,n,null,s);break;case"together":bl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $1(t,e,n){switch(e.tag){case 3:Vg(e),$r();break;case 5:wg(e);break;case 1:$e(e.type)&&Uo(e);break;case 4:Zc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;q(Bo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(q(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?Yg(t,e,n):(q(re,re.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);q(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,Bg(t,e,n)}return Lt(t,e,n)}var Qg,Au,Kg,qg;Qg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Au=function(){};Kg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Un(xt.current);var s=null;switch(n){case"input":i=eu(t,i),r=eu(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=ru(t,i),r=ru(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jo)}su(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qg=function(t,e,n,r){n!==r&&(e.flags|=4)};function yi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function B1(t,e,n){var r=e.pendingProps;switch(Yc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return $e(e.type)&&zo(),Te(e),null;case 3:return r=e.stateNode,Hr(),ee(We),ee(Ae),tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(Uu(ct),ct=null))),Au(t,e),Te(e),null;case 5:ef(e);var i=Un(ns.current);if(n=e.type,t!==null&&e.stateNode!=null)Kg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Te(e),null}if(t=Un(xt.current),Js(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Et]=e,r[es]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<bi.length;i++)X(bi[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Id(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":Nd(r,s),X("invalid",r)}su(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xs(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xs(r.textContent,a,t),i=["children",""+a]):Hi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Bs(r),bd(r,s,!0);break;case"textarea":Bs(r),Td(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=jo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Et]=e,t[es]=r,Qg(t,e,!1,!1),e.stateNode=t;e:{switch(o=ou(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<bi.length;i++)X(bi[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":Id(t,r),i=eu(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),X("invalid",t);break;case"textarea":Nd(t,r),i=ru(t,r),X("invalid",t);break;default:i=r}su(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Im(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vi(t,l):typeof l=="number"&&Vi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&Rc(t,s,l,o))}switch(n){case"input":Bs(t),bd(t,r,!1);break;case"textarea":Bs(t),Td(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Nr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Nr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)qg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Un(ns.current),Un(xt.current),Js(e)){if(r=e.stateNode,n=e.memoizedProps,r[Et]=e,(s=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:Xs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=e,e.stateNode=r}return Te(e),null;case 13:if(ee(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Qe!==null&&e.mode&1&&!(e.flags&128))hg(),$r(),e.flags|=98560,s=!1;else if(s=Js(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Et]=e}else $r(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),s=!1}else ct!==null&&(Uu(ct),ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?ge===0&&(ge=3):pf())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return Hr(),Au(t,e),t===null&&Ji(e.stateNode.containerInfo),Te(e),null;case 10:return qc(e.type._context),Te(e),null;case 17:return $e(e.type)&&zo(),Te(e),null;case 19:if(ee(re),s=e.memoizedState,s===null)return Te(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)yi(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yo(t),o!==null){for(e.flags|=128,yi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return q(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>Yr&&(e.flags|=128,r=!0,yi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Te(e),null}else 2*fe()-s.renderingStartTime>Yr&&n!==1073741824&&(e.flags|=128,r=!0,yi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=re.current,q(re,r?n&1|2:n&1),e):(Te(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function H1(t,e){switch(Yc(e),e.tag){case 1:return $e(e.type)&&zo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hr(),ee(We),ee(Ae),tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ef(e),null;case 13:if(ee(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));$r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(re),null;case 4:return Hr(),null;case 10:return qc(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var to=!1,Pe=!1,V1=typeof WeakSet=="function"?WeakSet:Set,b=null;function Cr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function Ou(t,e,n){try{n()}catch(r){oe(t,e,r)}}var yh=!1;function Y1(t,e){if(gu=Lo,t=eg(),Hc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vu={focusedElem:t,selectionRange:n},Lo=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,C=y.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:lt(e.type,_),C);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){oe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=yh,yh=!1,y}function Li(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ou(e,n,s)}i=i.next}while(i!==r)}}function Aa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Du(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xg(t){var e=t.alternate;e!==null&&(t.alternate=null,Xg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Et],delete e[es],delete e[wu],delete e[N1],delete e[T1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jg(t){return t.tag===5||t.tag===3||t.tag===4}function _h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jo));else if(r!==4&&(t=t.child,t!==null))for(Lu(t,e,n),t=t.sibling;t!==null;)Lu(t,e,n),t=t.sibling}function Mu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mu(t,e,n),t=t.sibling;t!==null;)Mu(t,e,n),t=t.sibling}var xe=null,ut=!1;function Vt(t,e,n){for(n=n.child;n!==null;)Zg(t,e,n),n=n.sibling}function Zg(t,e,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(xa,n)}catch{}switch(n.tag){case 5:Pe||Cr(n,e);case 6:var r=xe,i=ut;xe=null,Vt(t,e,n),xe=r,ut=i,xe!==null&&(ut?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ut?(t=xe,n=n.stateNode,t.nodeType===8?wl(t.parentNode,n):t.nodeType===1&&wl(t,n),Ki(t)):wl(xe,n.stateNode));break;case 4:r=xe,i=ut,xe=n.stateNode.containerInfo,ut=!0,Vt(t,e,n),xe=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ou(n,e,o),i=i.next}while(i!==r)}Vt(t,e,n);break;case 1:if(!Pe&&(Cr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}Vt(t,e,n);break;case 21:Vt(t,e,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Vt(t,e,n),Pe=r):Vt(t,e,n);break;default:Vt(t,e,n)}}function wh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new V1),e.forEach(function(r){var i=tw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,ut=!1;break e;case 3:xe=a.stateNode.containerInfo,ut=!0;break e;case 4:xe=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(xe===null)throw Error(E(160));Zg(s,o,i),xe=null,ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ev(e,t),e=e.sibling}function ev(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(at(e,t),_t(t),r&4){try{Li(3,t,t.return),Aa(3,t)}catch(_){oe(t,t.return,_)}try{Li(5,t,t.return)}catch(_){oe(t,t.return,_)}}break;case 1:at(e,t),_t(t),r&512&&n!==null&&Cr(n,n.return);break;case 5:if(at(e,t),_t(t),r&512&&n!==null&&Cr(n,n.return),t.flags&32){var i=t.stateNode;try{Vi(i,"")}catch(_){oe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Em(i,s),ou(a,o);var u=ou(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Im(i,f):c==="dangerouslySetInnerHTML"?xm(i,f):c==="children"?Vi(i,f):Rc(i,c,f,u)}switch(a){case"input":tu(i,s);break;case"textarea":Cm(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Nr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Nr(i,!!s.multiple,s.defaultValue,!0):Nr(i,!!s.multiple,s.multiple?[]:"",!1))}i[es]=s}catch(_){oe(t,t.return,_)}}break;case 6:if(at(e,t),_t(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){oe(t,t.return,_)}}break;case 3:if(at(e,t),_t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ki(e.containerInfo)}catch(_){oe(t,t.return,_)}break;case 4:at(e,t),_t(t);break;case 13:at(e,t),_t(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ff=fe())),r&4&&wh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Pe=(u=Pe)||c,at(e,t),Pe=u):at(e,t),_t(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(f=b=c;b!==null;){switch(d=b,g=d.child,d.tag){case 0:case 11:case 14:case 15:Li(4,d,d.return);break;case 1:Cr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){oe(r,n,_)}}break;case 5:Cr(d,d.return);break;case 22:if(d.memoizedState!==null){Ch(f);continue}}g!==null?(g.return=d,b=g):Ch(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=km("display",o))}catch(_){oe(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){oe(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:at(e,t),_t(t),r&4&&wh(t);break;case 21:break;default:at(e,t),_t(t)}}function _t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vi(i,""),r.flags&=-33);var s=_h(t);Mu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_h(t);Lu(t,a,o);break;default:throw Error(E(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function G1(t,e,n){b=t,tv(t)}function tv(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||to;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pe;a=to;var u=Pe;if(to=o,(Pe=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?Sh(i):l!==null?(l.return=o,b=l):Sh(i);for(;s!==null;)b=s,tv(s),s=s.sibling;b=i,to=a,Pe=u}Eh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):Eh(t)}}function Eh(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pe||Aa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ih(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ih(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ki(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Pe||e.flags&512&&Du(e)}catch(d){oe(e,e.return,d)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Ch(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Sh(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Aa(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{Du(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{Du(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var Q1=Math.ceil,Ko=Wt.ReactCurrentDispatcher,uf=Wt.ReactCurrentOwner,rt=Wt.ReactCurrentBatchConfig,$=0,Se=null,de=null,Ie=0,Ge=0,Sr=Sn(0),ge=0,os=null,Xn=0,Oa=0,cf=0,Mi=null,Fe=null,ff=0,Yr=1/0,kt=null,qo=!1,Fu=null,ln=null,no=!1,Zt=null,Xo=0,Fi=0,ju=null,ko=-1,Io=0;function De(){return $&6?fe():ko!==-1?ko:ko=fe()}function un(t){return t.mode&1?$&2&&Ie!==0?Ie&-Ie:R1.transition!==null?(Io===0&&(Io=jm()),Io):(t=V,t!==0||(t=window.event,t=t===void 0?16:Vm(t.type)),t):1}function gt(t,e,n,r){if(50<Fi)throw Fi=0,ju=null,Error(E(185));xs(t,n,r),(!($&2)||t!==Se)&&(t===Se&&(!($&2)&&(Oa|=n),ge===4&&Xt(t,Ie)),Be(t,r),n===1&&$===0&&!(e.mode&1)&&(Yr=fe()+500,Ta&&xn()))}function Be(t,e){var n=t.callbackNode;R0(t,e);var r=Do(t,t===Se?Ie:0);if(r===0)n!==null&&Ad(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ad(n),e===1)t.tag===0?P1(xh.bind(null,t)):cg(xh.bind(null,t)),I1(function(){!($&6)&&xn()}),n=null;else{switch(zm(r)){case 1:n=Mc;break;case 4:n=Mm;break;case 16:n=Oo;break;case 536870912:n=Fm;break;default:n=Oo}n=uv(n,nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nv(t,e){if(ko=-1,Io=0,$&6)throw Error(E(327));var n=t.callbackNode;if(Or()&&t.callbackNode!==n)return null;var r=Do(t,t===Se?Ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jo(t,r);else{e=r;var i=$;$|=2;var s=iv();(Se!==t||Ie!==e)&&(kt=null,Yr=fe()+500,Vn(t,e));do try{X1();break}catch(a){rv(t,a)}while(1);Kc(),Ko.current=s,$=i,de!==null?e=0:(Se=null,Ie=0,e=ge)}if(e!==0){if(e===2&&(i=fu(t),i!==0&&(r=i,e=zu(t,i))),e===1)throw n=os,Vn(t,0),Xt(t,r),Be(t,fe()),n;if(e===6)Xt(t,r);else{if(i=t.current.alternate,!(r&30)&&!K1(i)&&(e=Jo(t,r),e===2&&(s=fu(t),s!==0&&(r=s,e=zu(t,s))),e===1))throw n=os,Vn(t,0),Xt(t,r),Be(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Ln(t,Fe,kt);break;case 3:if(Xt(t,r),(r&130023424)===r&&(e=ff+500-fe(),10<e)){if(Do(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){De(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_u(Ln.bind(null,t,Fe,kt),e);break}Ln(t,Fe,kt);break;case 4:if(Xt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q1(r/1960))-r,10<r){t.timeoutHandle=_u(Ln.bind(null,t,Fe,kt),r);break}Ln(t,Fe,kt);break;case 5:Ln(t,Fe,kt);break;default:throw Error(E(329))}}}return Be(t,fe()),t.callbackNode===n?nv.bind(null,t):null}function zu(t,e){var n=Mi;return t.current.memoizedState.isDehydrated&&(Vn(t,e).flags|=256),t=Jo(t,e),t!==2&&(e=Fe,Fe=n,e!==null&&Uu(e)),t}function Uu(t){Fe===null?Fe=t:Fe.push.apply(Fe,t)}function K1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xt(t,e){for(e&=~cf,e&=~Oa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mt(e),r=1<<n;t[n]=-1,e&=~r}}function xh(t){if($&6)throw Error(E(327));Or();var e=Do(t,0);if(!(e&1))return Be(t,fe()),null;var n=Jo(t,e);if(t.tag!==0&&n===2){var r=fu(t);r!==0&&(e=r,n=zu(t,r))}if(n===1)throw n=os,Vn(t,0),Xt(t,e),Be(t,fe()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ln(t,Fe,kt),Be(t,fe()),null}function df(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(Yr=fe()+500,Ta&&xn())}}function Jn(t){Zt!==null&&Zt.tag===0&&!($&6)&&Or();var e=$;$|=1;var n=rt.transition,r=V;try{if(rt.transition=null,V=1,t)return t()}finally{V=r,rt.transition=n,$=e,!($&6)&&xn()}}function hf(){Ge=Sr.current,ee(Sr)}function Vn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,k1(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:Hr(),ee(We),ee(Ae),tf();break;case 5:ef(r);break;case 4:Hr();break;case 13:ee(re);break;case 19:ee(re);break;case 10:qc(r.type._context);break;case 22:case 23:hf()}n=n.return}if(Se=t,de=t=cn(t.current,null),Ie=Ge=e,ge=0,os=null,cf=Oa=Xn=0,Fe=Mi=null,zn!==null){for(e=0;e<zn.length;e++)if(n=zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zn=null}return t}function rv(t,e){do{var n=de;try{if(Kc(),Co.current=Qo,Go){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Go=!1}if(qn=0,we=pe=ie=null,Di=!1,rs=0,uf.current=null,n===null||n.return===null){ge=1,os=e,de=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=fh(o);if(g!==null){g.flags&=-257,dh(g,o,a,s,e),g.mode&1&&ch(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){ch(s,u,e),pf();break e}l=Error(E(426))}}else if(ne&&a.mode&1){var C=fh(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),dh(C,o,a,s,e),Gc(Vr(l,a));break e}}s=l=Vr(l,a),ge!==4&&(ge=2),Mi===null?Mi=[s]:Mi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Ug(s,l,e);rh(s,p);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ln===null||!ln.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Wg(s,a,e);rh(s,w);break e}}s=s.return}while(s!==null)}ov(n)}catch(S){e=S,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function iv(){var t=Ko.current;return Ko.current=Qo,t===null?Qo:t}function pf(){(ge===0||ge===3||ge===2)&&(ge=4),Se===null||!(Xn&268435455)&&!(Oa&268435455)||Xt(Se,Ie)}function Jo(t,e){var n=$;$|=2;var r=iv();(Se!==t||Ie!==e)&&(kt=null,Vn(t,e));do try{q1();break}catch(i){rv(t,i)}while(1);if(Kc(),$=n,Ko.current=r,de!==null)throw Error(E(261));return Se=null,Ie=0,ge}function q1(){for(;de!==null;)sv(de)}function X1(){for(;de!==null&&!C0();)sv(de)}function sv(t){var e=lv(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?ov(t):de=e,uf.current=null}function ov(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H1(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,de=null;return}}else if(n=B1(n,e,Ge),n!==null){de=n;return}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);ge===0&&(ge=5)}function Ln(t,e,n){var r=V,i=rt.transition;try{rt.transition=null,V=1,J1(t,e,n,r)}finally{rt.transition=i,V=r}return null}function J1(t,e,n,r){do Or();while(Zt!==null);if($&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(A0(t,s),t===Se&&(de=Se=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,uv(Oo,function(){return Or(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var o=V;V=1;var a=$;$|=4,uf.current=null,Y1(t,n),ev(n,t),y1(vu),Lo=!!gu,vu=gu=null,t.current=n,G1(n),S0(),$=a,V=o,rt.transition=s}else t.current=n;if(no&&(no=!1,Zt=t,Xo=i),s=t.pendingLanes,s===0&&(ln=null),I0(n.stateNode),Be(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qo)throw qo=!1,t=Fu,Fu=null,t;return Xo&1&&t.tag!==0&&Or(),s=t.pendingLanes,s&1?t===ju?Fi++:(Fi=0,ju=t):Fi=0,xn(),null}function Or(){if(Zt!==null){var t=zm(Xo),e=rt.transition,n=V;try{if(rt.transition=null,V=16>t?16:t,Zt===null)var r=!1;else{if(t=Zt,Zt=null,Xo=0,$&6)throw Error(E(331));var i=$;for($|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:Li(8,c,s)}var f=c.child;if(f!==null)f.return=c,b=f;else for(;b!==null;){c=b;var d=c.sibling,g=c.return;if(Xg(c),c===u){b=null;break}if(d!==null){d.return=g,b=d;break}b=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var C=_.sibling;_.sibling=null,_=C}while(_!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Li(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,b=p;break e}b=s.return}}var h=t.current;for(b=h;b!==null;){o=b;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,b=m;else e:for(o=h;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Aa(9,a)}}catch(S){oe(a,a.return,S)}if(a===o){b=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,b=w;break e}b=a.return}}if($=i,xn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(xa,t)}catch{}r=!0}return r}finally{V=n,rt.transition=e}}return!1}function kh(t,e,n){e=Vr(n,e),e=Ug(t,e,1),t=an(t,e,1),e=De(),t!==null&&(xs(t,1,e),Be(t,e))}function oe(t,e,n){if(t.tag===3)kh(t,t,n);else for(;e!==null;){if(e.tag===3){kh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){t=Vr(n,t),t=Wg(e,t,1),e=an(e,t,1),t=De(),e!==null&&(xs(e,1,t),Be(e,t));break}}e=e.return}}function Z1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=De(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Ie&n)===n&&(ge===4||ge===3&&(Ie&130023424)===Ie&&500>fe()-ff?Vn(t,0):cf|=n),Be(t,e)}function av(t,e){e===0&&(t.mode&1?(e=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):e=1);var n=De();t=Dt(t,e),t!==null&&(xs(t,e,n),Be(t,n))}function ew(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),av(t,n)}function tw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),av(t,n)}var lv;lv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return je=!1,$1(t,e,n);je=!!(t.flags&131072)}else je=!1,ne&&e.flags&1048576&&fg(e,$o,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xo(t,e),t=e.pendingProps;var i=Wr(e,Ae.current);Ar(e,n),i=rf(null,e,r,t,i,n);var s=sf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$e(r)?(s=!0,Uo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jc(e),i.updater=Pa,e.stateNode=i,i._reactInternals=e,Iu(e,r,t,n),e=Tu(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Vc(e),Oe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rw(r),t=lt(r,t),i){case 0:e=Nu(null,e,r,t,n);break e;case 1:e=mh(null,e,r,t,n);break e;case 11:e=hh(null,e,r,t,n);break e;case 14:e=ph(null,e,r,lt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:lt(r,i),Nu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:lt(r,i),mh(t,e,r,i,n);case 3:e:{if(Vg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,mg(t,e),Vo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vr(Error(E(423)),e),e=gh(t,e,r,n,i);break e}else if(r!==i){i=Vr(Error(E(424)),e),e=gh(t,e,r,n,i);break e}else for(Qe=on(e.stateNode.containerInfo.firstChild),Ke=e,ne=!0,ct=null,n=_g(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){e=Lt(t,e,n);break e}Oe(t,e,r,n)}e=e.child}return e;case 5:return wg(e),t===null&&Su(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,yu(r,i)?o=null:s!==null&&yu(r,s)&&(e.flags|=32),Hg(t,e),Oe(t,e,o,n),e.child;case 6:return t===null&&Su(e),null;case 13:return Yg(t,e,n);case 4:return Zc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Br(e,null,r,n):Oe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:lt(r,i),hh(t,e,r,i,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,q(Bo,r._currentValue),r._currentValue=o,s!==null)if(yt(s.value,o)){if(s.children===i.children&&!We.current){e=Lt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Pt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ar(e,n),i=it(i),r=r(i),e.flags|=1,Oe(t,e,r,n),e.child;case 14:return r=e.type,i=lt(r,e.pendingProps),i=lt(r.type,i),ph(t,e,r,i,n);case 15:return $g(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:lt(r,i),xo(t,e),e.tag=1,$e(r)?(t=!0,Uo(e)):t=!1,Ar(e,n),vg(e,r,i),Iu(e,r,i,n),Tu(null,e,r,!0,t,n);case 19:return Gg(t,e,n);case 22:return Bg(t,e,n)}throw Error(E(156,e.tag))};function uv(t,e){return Lm(t,e)}function nw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new nw(t,e,n,r)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rw(t){if(typeof t=="function")return mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oc)return 11;if(t===Dc)return 14}return 2}function cn(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hr:return Yn(n.children,i,s,e);case Ac:o=8,i|=8;break;case ql:return t=nt(12,n,e,i|2),t.elementType=ql,t.lanes=s,t;case Xl:return t=nt(13,n,e,i),t.elementType=Xl,t.lanes=s,t;case Jl:return t=nt(19,n,e,i),t.elementType=Jl,t.lanes=s,t;case ym:return Da(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gm:o=10;break e;case vm:o=9;break e;case Oc:o=11;break e;case Dc:o=14;break e;case Qt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yn(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function Da(t,e,n,r){return t=nt(22,t,r,e),t.elementType=ym,t.lanes=n,t.stateNode={isHidden:!1},t}function Nl(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function Tl(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gf(t,e,n,r,i,s,o,a,l){return t=new iw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(s),t}function sw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cv(t){if(!t)return gn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if($e(n))return ug(t,n,e)}return e}function fv(t,e,n,r,i,s,o,a,l){return t=gf(n,r,!0,t,i,s,o,a,l),t.context=cv(null),n=t.current,r=De(),i=un(n),s=Pt(r,i),s.callback=e??null,an(n,s,i),t.current.lanes=i,xs(t,i,r),Be(t,r),t}function La(t,e,n,r){var i=e.current,s=De(),o=un(i);return n=cv(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=an(i,e,o),t!==null&&(gt(t,i,o,s),Eo(t,i,o)),o}function Zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ih(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vf(t,e){Ih(t,e),(t=t.alternate)&&Ih(t,e)}function ow(){return null}var dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function yf(t){this._internalRoot=t}Ma.prototype.render=yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));La(t,e,null,null)};Ma.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jn(function(){La(null,t,null,null)}),e[Ot]=null}};function Ma(t){this._internalRoot=t}Ma.prototype.unstable_scheduleHydration=function(t){if(t){var e=$m();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qt.length&&e!==0&&e<qt[n].priority;n++);qt.splice(n,0,t),n===0&&Hm(t)}};function _f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bh(){}function aw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Zo(o);s.call(u)}}var o=fv(e,r,t,0,null,!1,!1,"",bh);return t._reactRootContainer=o,t[Ot]=o.current,Ji(t.nodeType===8?t.parentNode:t),Jn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zo(l);a.call(u)}}var l=gf(t,0,!1,null,null,!1,!1,"",bh);return t._reactRootContainer=l,t[Ot]=l.current,Ji(t.nodeType===8?t.parentNode:t),Jn(function(){La(e,l,n,r)}),l}function ja(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Zo(o);a.call(l)}}La(e,o,t,i)}else o=aw(n,e,t,i,r);return Zo(o)}Um=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ii(e.pendingLanes);n!==0&&(Fc(e,n|1),Be(e,fe()),!($&6)&&(Yr=fe()+500,xn()))}break;case 13:Jn(function(){var r=Dt(t,1);if(r!==null){var i=De();gt(r,t,1,i)}}),vf(t,1)}};jc=function(t){if(t.tag===13){var e=Dt(t,134217728);if(e!==null){var n=De();gt(e,t,134217728,n)}vf(t,134217728)}};Wm=function(t){if(t.tag===13){var e=un(t),n=Dt(t,e);if(n!==null){var r=De();gt(n,t,e,r)}vf(t,e)}};$m=function(){return V};Bm=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};lu=function(t,e,n){switch(e){case"input":if(tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Na(r);if(!i)throw Error(E(90));wm(r),tu(r,i)}}}break;case"textarea":Cm(t,n);break;case"select":e=n.value,e!=null&&Nr(t,!!n.multiple,e,!1)}};Tm=df;Pm=Jn;var lw={usingClientEntryPoint:!1,Events:[Is,vr,Na,bm,Nm,df]},_i={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uw={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Om(t),t===null?null:t.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{xa=ro.inject(uw),St=ro}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lw;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_f(e))throw Error(E(200));return sw(t,e,null,n)};Xe.createRoot=function(t,e){if(!_f(t))throw Error(E(299));var n=!1,r="",i=dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gf(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,Ji(t.nodeType===8?t.parentNode:t),new yf(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Om(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return Jn(t)};Xe.hydrate=function(t,e,n){if(!Fa(e))throw Error(E(200));return ja(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!_f(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fv(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,Ji(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ma(e)};Xe.render=function(t,e,n){if(!Fa(e))throw Error(E(200));return ja(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!Fa(t))throw Error(E(40));return t._reactRootContainer?(Jn(function(){ja(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};Xe.unstable_batchedUpdates=df;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fa(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return ja(t,e,n,!1,r)};Xe.version="18.2.0-next-9e3b772b8-20220608";function hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)}catch(t){console.error(t)}}hv(),fm.exports=Xe;var cw=fm.exports,Nh=cw;Ql.createRoot=Nh.createRoot,Ql.hydrateRoot=Nh.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},as.apply(this,arguments)}var en;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(en||(en={}));const Th="popstate";function fw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Wu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ea(i)}return hw(e,n,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dw(){return Math.random().toString(36).substr(2,8)}function Ph(t,e){return{usr:t.state,key:t.key,idx:e}}function Wu(t,e,n,r){return n===void 0&&(n=null),as({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ni(e):e,{state:n,key:e&&e.key||r||dw()})}function ea(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ni(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=en.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(as({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=en.Pop;let C=c(),p=C==null?null:C-u;u=C,l&&l({action:a,location:_.location,delta:p})}function d(C,p){a=en.Push;let h=Wu(_.location,C,p);n&&n(h,C),u=c()+1;let m=Ph(h,u),w=_.createHref(h);try{o.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function g(C,p){a=en.Replace;let h=Wu(_.location,C,p);n&&n(h,C),u=c();let m=Ph(h,u),w=_.createHref(h);o.replaceState(m,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function y(C){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof C=="string"?C:ea(C);return he(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Th,f),l=C,()=>{i.removeEventListener(Th,f),l=null}},createHref(C){return e(i,C)},createURL:y,encodeLocation(C){let p=y(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(C){return o.go(C)}};return _}var Rh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Rh||(Rh={}));function pw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ni(e):e,i=Ef(r.pathname||"/",n);if(i==null)return null;let s=pv(t);mw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=xw(s[a],bw(i));return o}function pv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=fn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Cw(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of mv(s.path))i(s,o,l)}),e}function mv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=mv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function mw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Sw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gw=/^:\w+$/,vw=3,yw=2,_w=1,ww=10,Ew=-2,Ah=t=>t==="*";function Cw(t,e){let n=t.split("/"),r=n.length;return n.some(Ah)&&(r+=Ew),e&&(r+=yw),n.filter(i=>!Ah(i)).reduce((i,s)=>i+(gw.test(s)?vw:s===""?_w:ww),r)}function Sw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=kw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:fn([i,c.pathname]),pathnameBase:Rw(fn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=fn([i,c.pathnameBase]))}return s}function kw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Iw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Nw(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Iw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bw(t){try{return decodeURI(t)}catch(e){return wf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nw(t,e){try{return decodeURIComponent(t)}catch(n){return wf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ef(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Tw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ni(t):t;return{pathname:n?n.startsWith("/")?n:Pw(n,e):e,search:Aw(r),hash:Ow(i)}}function Pw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gv(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ni(t):(i=as({},t),he(!i.pathname||!i.pathname.includes("?"),Pl("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Pl("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Pl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=Tw(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const fn=t=>t.join("/").replace(/\/\/+/g,"/"),Rw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Aw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ow=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Dw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const yv=["post","put","patch","delete"];new Set(yv);const Lw=["get",...yv];new Set(Lw);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ta.apply(this,arguments)}const Cf=k.createContext(null),Mw=k.createContext(null),ri=k.createContext(null),za=k.createContext(null),lr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),_v=k.createContext(null);function Fw(t,e){let{relative:n}=e===void 0?{}:e;Ns()||he(!1);let{basename:r,navigator:i}=k.useContext(ri),{hash:s,pathname:o,search:a}=Ev(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:fn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ns(){return k.useContext(za)!=null}function Ua(){return Ns()||he(!1),k.useContext(za).location}function wv(t){k.useContext(ri).static||k.useLayoutEffect(t)}function jw(){let{isDataRoute:t}=k.useContext(lr);return t?Xw():zw()}function zw(){Ns()||he(!1);let t=k.useContext(Cf),{basename:e,navigator:n}=k.useContext(ri),{matches:r}=k.useContext(lr),{pathname:i}=Ua(),s=JSON.stringify(gv(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return wv(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=vv(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:fn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function Ev(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(lr),{pathname:i}=Ua(),s=JSON.stringify(gv(r).map(o=>o.pathnameBase));return k.useMemo(()=>vv(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Uw(t,e){return Ww(t,e)}function Ww(t,e,n){Ns()||he(!1);let{navigator:r}=k.useContext(ri),{matches:i}=k.useContext(lr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ua(),u;if(e){var c;let _=typeof e=="string"?ni(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||he(!1),u=_}else u=l;let f=u.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",g=pw(t,{pathname:d}),y=Yw(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:fn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:fn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?k.createElement(za.Provider,{value:{location:ta({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:en.Pop}},y):y}function $w(){let t=qw(),e=Dw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}const Bw=k.createElement($w,null);class Hw extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(lr.Provider,{value:this.props.routeContext},k.createElement(_v.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vw(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Cf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(lr.Provider,{value:e},r)}function Yw(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||he(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||Bw);let d=e.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=f:l.route.Component?y=k.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,k.createElement(Vw,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(Hw,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var Cv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Cv||{}),na=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(na||{});function Gw(t){let e=k.useContext(Cf);return e||he(!1),e}function Qw(t){let e=k.useContext(Mw);return e||he(!1),e}function Kw(t){let e=k.useContext(lr);return e||he(!1),e}function Sv(t){let e=Kw(),n=e.matches[e.matches.length-1];return n.route.id||he(!1),n.route.id}function qw(){var t;let e=k.useContext(_v),n=Qw(na.UseRouteError),r=Sv(na.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Xw(){let{router:t}=Gw(Cv.UseNavigateStable),e=Sv(na.UseNavigateStable),n=k.useRef(!1);return wv(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ta({fromRouteId:e},s)))},[t,e])}function Ye(t){he(!1)}function Jw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=en.Pop,navigator:s,static:o=!1}=t;Ns()&&he(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ni(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,y=k.useMemo(()=>{let _=Ef(u,a);return _==null?null:{location:{pathname:_,search:c,hash:f,state:d,key:g},navigationType:i}},[a,u,c,f,d,g,i]);return y==null?null:k.createElement(ri.Provider,{value:l},k.createElement(za.Provider,{children:n,value:y}))}function Zw(t){let{children:e,location:n}=t;return Uw($u(e),n)}new Promise(()=>{});function $u(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,$u(r.props.children,s));return}r.type!==Ye&&he(!1),!r.props.index||!r.props.children||he(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$u(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bu.apply(this,arguments)}function eE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nE(t,e){return t.button===0&&(!e||e==="_self")&&!tE(t)}const rE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],iE="startTransition",Oh=e0[iE];function sE(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=fw({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=k.useCallback(f=>{u&&Oh?Oh(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>o.listen(c),[o,c]),k.createElement(Jw,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const oE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gt=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=eE(e,rE),{basename:d}=k.useContext(ri),g,y=!1;if(typeof u=="string"&&aE.test(u)&&(g=u,oE))try{let h=new URL(window.location.href),m=u.startsWith("//")?new URL(h.protocol+u):new URL(u),w=Ef(m.pathname,d);m.origin===h.origin&&w!=null?u=w+m.search+m.hash:y=!0}catch{}let _=Fw(u,{relative:i}),C=lE(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||C(h)}return k.createElement("a",Bu({},f,{href:g||_,onClick:y||s?r:p,ref:n,target:l}))});var Dh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Dh||(Dh={}));var Lh;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Lh||(Lh={}));function lE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=jw(),l=Ua(),u=Ev(t,{relative:o});return k.useCallback(c=>{if(nE(c,n)){c.preventDefault();let f=r!==void 0?r:ea(l)===ea(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const uE="_footer_conf_d6kre_1",cE={footer_conf:uE},kn=()=>v.jsxs("footer",{className:cE.footer_conf,children:[v.jsx("h1",{children:"Criador JEREDY"}),v.jsx("p",{children:"© 2023 Página de Mangás"})]}),fE=()=>(k.useEffect(()=>{const t=()=>{const r=document.getElementById("menu");r&&r.classList.toggle("active")},e=document.getElementById("hamburger");e&&e.addEventListener("click",t);const n=document.querySelectorAll("#menu .has-submenu");return n.forEach(r=>{r.addEventListener("click",()=>{r.classList.toggle("active")})}),()=>{e&&e.removeEventListener("click",t),n.forEach(r=>{r.removeEventListener("click",()=>{r.classList.toggle("active")})})}},[]),v.jsxs(v.Fragment,{children:[v.jsx("header",{children:v.jsx("h1",{className:"h1alt",children:"Seja Bem vindo a FURBRComics"})}),v.jsx("div",{id:"hamburger",children:"☰"}),v.jsx("div",{id:"menu",children:v.jsxs("ul",{className:"reto",children:[v.jsx("li",{children:v.jsx("a",{href:"#",children:"Página Inicial"})}),v.jsx("li",{children:v.jsx("a",{href:"./src/html/lancamentos.html",children:"Lançamentos"})}),v.jsx("li",{children:v.jsx("a",{href:"./src/html/teste.html",children:"Serviços"})}),v.jsxs("li",{className:"has-submenu",children:[v.jsxs("a",{className:"anc",href:"#",children:["SFW",v.jsx("span",{className:"submenu-icon",children:"˅"})]}),v.jsxs("ul",{className:"lulu",children:[v.jsx("li",{children:v.jsx(Gt,{to:"/furbr/gay_",children:"Gay"})}),v.jsx("li",{children:v.jsx(Gt,{to:"/furbr/hetero_",children:"Hétero"})}),v.jsx("li",{children:v.jsx(Gt,{to:"/furbr/lesbi_",children:"Lesbi"})})]})]}),v.jsxs("li",{className:"has-submenu",children:[v.jsxs("a",{href:"#",children:["NSFW ",v.jsx("span",{className:"submenu-icon",children:"˅"})]}),v.jsxs("ul",{className:"lulu",children:[v.jsx("li",{children:v.jsx(Gt,{to:"/furbr/gay",children:"Gay"})}),v.jsx("li",{children:v.jsx(Gt,{to:"/furbr/hetero",children:"Hetero"})}),v.jsx("li",{children:v.jsx(Gt,{to:"/furbr/futa",children:"Futa"})}),v.jsx("li",{children:v.jsx(Gt,{to:"/furbr/lesbi",children:" Lesbi"})})]})]})]})}),v.jsx("section",{className:"pig",children:v.jsxs("div",{className:"cont",children:[v.jsxs("div",{className:"ft",children:[v.jsx("h2",{children:"NEKO ARC"}),v.jsx("img",{src:"https://media.tenor.com/rBTJCRQgBvgAAAAi/neco-arc.gif",alt:""}),v.jsx("h2",{children:"Editor: JEREDY"})]}),v.jsxs("div",{className:"ft",children:[v.jsx("h2",{children:"NEKO ARC"}),v.jsx("img",{src:"https://art.ngfiles.com/images/2714000/2714398_lovetopullmicke_neco-arc.png?f1662171604",alt:""}),v.jsx("h2",{children:"Editor: JEREDY"})]}),v.jsxs("div",{className:"ft",children:[v.jsx("h2",{children:"NEKO ARC"}),v.jsx("img",{src:"https://preview.redd.it/is-there-a-neco-arc-plush-v0-b30tarzwh0ya1.jpg?width=1080&crop=smart&auto=webp&s=92008f75a40b5025b7b946721c73f502ecbd3d88",alt:""}),v.jsx("h2",{children:"Editor: JEREDY"})]})]})}),v.jsxs("section",{children:[v.jsx("h2",{children:"Postagens"}),v.jsxs("div",{className:"postagem",children:[v.jsx("h3",{children:"Feline Café"}),v.jsx("a",{href:"http://furrbrcomics.byethost13.com/index.php",children:v.jsx("p",{children:"click"})})]}),v.jsxs("div",{className:"postagem",children:[v.jsx("h3",{children:"Título da Postagem 2"}),v.jsx("p",{children:"Conteúdo da Postagem 2"})]})]}),v.jsx(kn,{})]}));function Mh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mh(Object(n),!0).forEach(function(r){ve(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ra(t){"@babel/helpers - typeof";return ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ra(t)}function dE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fh(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function hE(t,e,n){return e&&Fh(t.prototype,e),n&&Fh(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ve(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Sf(t,e){return mE(t)||vE(t,e)||xv(t,e)||_E()}function Ts(t){return pE(t)||gE(t)||xv(t)||yE()}function pE(t){if(Array.isArray(t))return Hu(t)}function mE(t){if(Array.isArray(t))return t}function gE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vE(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function xv(t,e){if(t){if(typeof t=="string")return Hu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hu(t,e)}}function Hu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function yE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var jh=function(){},xf={},kv={},Iv=null,bv={mark:jh,measure:jh};try{typeof window<"u"&&(xf=window),typeof document<"u"&&(kv=document),typeof MutationObserver<"u"&&(Iv=MutationObserver),typeof performance<"u"&&(bv=performance)}catch{}var wE=xf.navigator||{},zh=wE.userAgent,Uh=zh===void 0?"":zh,vn=xf,te=kv,Wh=Iv,io=bv;vn.document;var $t=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Nv=~Uh.indexOf("MSIE")||~Uh.indexOf("Trident/"),so,oo,ao,lo,uo,Mt="___FONT_AWESOME___",Vu=16,Tv="fa",Pv="svg-inline--fa",Zn="data-fa-i2svg",Yu="data-fa-pseudo-element",EE="data-fa-pseudo-element-pending",kf="data-prefix",If="data-icon",$h="fontawesome-i2svg",CE="async",SE=["HTML","HEAD","STYLE","SCRIPT"],Rv=function(){try{return!0}catch{return!1}}(),Z="classic",ae="sharp",bf=[Z,ae];function Ps(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Z]}})}var ls=Ps((so={},ve(so,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ve(so,ae,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),so)),us=Ps((oo={},ve(oo,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ve(oo,ae,{solid:"fass",regular:"fasr",light:"fasl"}),oo)),cs=Ps((ao={},ve(ao,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ve(ao,ae,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ao)),xE=Ps((lo={},ve(lo,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ve(lo,ae,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),lo)),kE=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Av="fa-layers-text",IE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bE=Ps((uo={},ve(uo,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ve(uo,ae,{900:"fass",400:"fasr",300:"fasl"}),uo)),Ov=[1,2,3,4,5,6,7,8,9,10],NE=Ov.concat([11,12,13,14,15,16,17,18,19,20]),TE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fs=new Set;Object.keys(us[Z]).map(fs.add.bind(fs));Object.keys(us[ae]).map(fs.add.bind(fs));var PE=[].concat(bf,Ts(fs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wn.GROUP,Wn.SWAP_OPACITY,Wn.PRIMARY,Wn.SECONDARY]).concat(Ov.map(function(t){return"".concat(t,"x")})).concat(NE.map(function(t){return"w-".concat(t)})),ji=vn.FontAwesomeConfig||{};function RE(t){var e=te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function AE(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(te&&typeof te.querySelector=="function"){var OE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];OE.forEach(function(t){var e=Sf(t,2),n=e[0],r=e[1],i=AE(RE(n));i!=null&&(ji[r]=i)})}var Dv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Tv,replacementClass:Pv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ji.familyPrefix&&(ji.cssPrefix=ji.familyPrefix);var Gr=I(I({},Dv),ji);Gr.autoReplaceSvg||(Gr.observeMutations=!1);var R={};Object.keys(Dv).forEach(function(t){Object.defineProperty(R,t,{enumerable:!0,set:function(n){Gr[t]=n,zi.forEach(function(r){return r(R)})},get:function(){return Gr[t]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){Gr.cssPrefix=e,zi.forEach(function(n){return n(R)})},get:function(){return Gr.cssPrefix}});vn.FontAwesomeConfig=R;var zi=[];function DE(t){return zi.push(t),function(){zi.splice(zi.indexOf(t),1)}}var Yt=Vu,Ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function LE(t){if(!(!t||!$t)){var e=te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=te.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return te.head.insertBefore(e,r),t}}var ME="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ds(){for(var t=12,e="";t-- >0;)e+=ME[Math.random()*62|0];return e}function ii(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Nf(t){return t.classList?ii(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Lv(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function FE(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Lv(t[n]),'" ')},"").trim()}function Wa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Tf(t){return t.size!==Ct.size||t.x!==Ct.x||t.y!==Ct.y||t.rotate!==Ct.rotate||t.flipX||t.flipY}function jE(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function zE(t){var e=t.transform,n=t.width,r=n===void 0?Vu:n,i=t.height,s=i===void 0?Vu:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Nv?l+="translate(".concat(e.x/Yt-r/2,"em, ").concat(e.y/Yt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Yt,"em), calc(-50% + ").concat(e.y/Yt,"em)) "):l+="translate(".concat(e.x/Yt,"em, ").concat(e.y/Yt,"em) "),l+="scale(".concat(e.size/Yt*(e.flipX?-1:1),", ").concat(e.size/Yt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var UE=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Mv(){var t=Tv,e=Pv,n=R.cssPrefix,r=R.replacementClass,i=UE;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Bh=!1;function Rl(){R.autoAddCss&&!Bh&&(LE(Mv()),Bh=!0)}var WE={mixout:function(){return{dom:{css:Mv,insertCss:Rl}}},hooks:function(){return{beforeDOMElementCreation:function(){Rl()},beforeI2svg:function(){Rl()}}}},Ft=vn||{};Ft[Mt]||(Ft[Mt]={});Ft[Mt].styles||(Ft[Mt].styles={});Ft[Mt].hooks||(Ft[Mt].hooks={});Ft[Mt].shims||(Ft[Mt].shims=[]);var dt=Ft[Mt],Fv=[],$E=function t(){te.removeEventListener("DOMContentLoaded",t),ia=1,Fv.map(function(e){return e()})},ia=!1;$t&&(ia=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),ia||te.addEventListener("DOMContentLoaded",$E));function BE(t){$t&&(ia?setTimeout(t,0):Fv.push(t))}function Rs(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Lv(t):"<".concat(e," ").concat(FE(r),">").concat(s.map(Rs).join(""),"</").concat(e,">")}function Hh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var HE=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Al=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?HE(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function VE(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Gu(t){var e=VE(t);return e.length===1?e[0].toString(16):null}function YE(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Vh(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Qu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Vh(e);typeof dt.hooks.addPack=="function"&&!i?dt.hooks.addPack(t,Vh(e)):dt.styles[t]=I(I({},dt.styles[t]||{}),s),t==="fas"&&Qu("fa",e)}var co,fo,ho,xr=dt.styles,GE=dt.shims,QE=(co={},ve(co,Z,Object.values(cs[Z])),ve(co,ae,Object.values(cs[ae])),co),Pf=null,jv={},zv={},Uv={},Wv={},$v={},KE=(fo={},ve(fo,Z,Object.keys(ls[Z])),ve(fo,ae,Object.keys(ls[ae])),fo);function qE(t){return~PE.indexOf(t)}function XE(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!qE(i)?i:null}var Bv=function(){var e=function(s){return Al(xr,function(o,a,l){return o[l]=Al(a,s,{}),o},{})};jv=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),zv=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),$v=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in xr||R.autoFetchSvg,r=Al(GE,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Uv=r.names,Wv=r.unicodes,Pf=$a(R.styleDefault,{family:R.familyDefault})};DE(function(t){Pf=$a(t.styleDefault,{family:R.familyDefault})});Bv();function Rf(t,e){return(jv[t]||{})[e]}function JE(t,e){return(zv[t]||{})[e]}function $n(t,e){return($v[t]||{})[e]}function Hv(t){return Uv[t]||{prefix:null,iconName:null}}function ZE(t){var e=Wv[t],n=Rf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yn(){return Pf}var Af=function(){return{prefix:null,iconName:null,rest:[]}};function $a(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Z:n,i=ls[r][t],s=us[r][t]||us[r][i],o=t in dt.styles?t:null;return s||o||null}var Yh=(ho={},ve(ho,Z,Object.keys(cs[Z])),ve(ho,ae,Object.keys(cs[ae])),ho);function Ba(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},ve(e,Z,"".concat(R.cssPrefix,"-").concat(Z)),ve(e,ae,"".concat(R.cssPrefix,"-").concat(ae)),e),o=null,a=Z;(t.includes(s[Z])||t.some(function(u){return Yh[Z].includes(u)}))&&(a=Z),(t.includes(s[ae])||t.some(function(u){return Yh[ae].includes(u)}))&&(a=ae);var l=t.reduce(function(u,c){var f=XE(R.cssPrefix,c);if(xr[c]?(c=QE[a].includes(c)?xE[a][c]:c,o=c,u.prefix=c):KE[a].indexOf(c)>-1?(o=c,u.prefix=$a(c,{family:a})):f?u.iconName=f:c!==R.replacementClass&&c!==s[Z]&&c!==s[ae]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?Hv(u.iconName):{},g=$n(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||g||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!xr.far&&xr.fas&&!R.autoFetchSvg&&(u.prefix="fas")}return u},Af());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ae&&(xr.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=$n(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yn()||"fas"),l}var eC=function(){function t(){dE(this,t),this.definitions={}}return hE(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=I(I({},n.definitions[a]||{}),o[a]),Qu(a,o[a]);var l=cs[Z][a];l&&Qu(l,o[a]),Bv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),Gh=[],kr={},Dr={},tC=Object.keys(Dr);function nC(t,e){var n=e.mixoutsTo;return Gh=t,kr={},Object.keys(Dr).forEach(function(r){tC.indexOf(r)===-1&&delete Dr[r]}),Gh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ra(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){kr[o]||(kr[o]=[]),kr[o].push(s[o])})}r.provides&&r.provides(Dr)}),n}function Ku(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=kr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function er(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=kr[t]||[];i.forEach(function(s){s.apply(null,n)})}function jt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Dr[t]?Dr[t].apply(null,e):void 0}function qu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||yn();if(e)return e=$n(n,e)||e,Hh(Vv.definitions,n,e)||Hh(dt.styles,n,e)}var Vv=new eC,rC=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,er("noAuto")},iC={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $t?(er("beforeI2svg",e),jt("pseudoElements2svg",e),jt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,BE(function(){oC({autoReplaceSvgRoot:n}),er("watch",e)})}},sC={icon:function(e){if(e===null)return null;if(ra(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$n(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=$a(e[0]);return{prefix:r,iconName:$n(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(R.cssPrefix,"-"))>-1||e.match(kE))){var i=Ba(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||yn(),iconName:$n(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=yn();return{prefix:s,iconName:$n(s,e)||e}}}},Ze={noAuto:rC,config:R,dom:iC,parse:sC,library:Vv,findIconDefinition:qu,toHtml:Rs},oC=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(dt.styles).length>0||R.autoFetchSvg)&&$t&&R.autoReplaceSvg&&Ze.dom.i2svg({node:r})};function Ha(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Rs(r)})}}),Object.defineProperty(t,"node",{get:function(){if($t){var r=te.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function aC(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Tf(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Wa(I(I({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function lC(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(R.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:o}),children:r}]}]}function Of(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,g=d===void 0?!1:d,y=r.found?r:n,_=y.width,C=y.height,p=i==="fak",h=[R.replacementClass,s?"".concat(R.cssPrefix,"-").concat(s):""].filter(function(H){return f.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(f.classes).join(" "),m={children:[],attributes:I(I({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(C)})},w=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/C*16*.0625,"em")}:{};g&&(m.attributes[Zn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||ds())},children:[l]}),delete m.attributes.title);var S=I(I({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:I(I({},w),f.styles)}),N=r.found&&n.found?jt("generateAbstractMask",S)||{children:[],attributes:{}}:jt("generateAbstractIcon",S)||{children:[],attributes:{}},T=N.children,A=N.attributes;return S.children=T,S.attributes=A,a?lC(S):aC(S)}function Qh(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=I(I(I({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Zn]="");var c=I({},o.styles);Tf(i)&&(c.transform=zE({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Wa(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function uC(t){var e=t.content,n=t.title,r=t.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Wa(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ol=dt.styles;function Xu(t){var e=t[0],n=t[1],r=t.slice(4),i=Sf(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Wn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Wn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Wn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var cC={found:!1,width:512,height:512};function fC(t,e){!Rv&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ju(t,e){var n=e;return e==="fa"&&R.styleDefault!==null&&(e=yn()),new Promise(function(r,i){if(jt("missingIconAbstract"),n==="fa"){var s=Hv(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ol[e]&&Ol[e][t]){var o=Ol[e][t];return r(Xu(o))}fC(t,e),r(I(I({},cC),{},{icon:R.showMissingIcons&&t?jt("missingIconAbstract")||{}:{}}))})}var Kh=function(){},Zu=R.measurePerformance&&io&&io.mark&&io.measure?io:{mark:Kh,measure:Kh},Ni='FA "6.4.2"',dC=function(e){return Zu.mark("".concat(Ni," ").concat(e," begins")),function(){return Yv(e)}},Yv=function(e){Zu.mark("".concat(Ni," ").concat(e," ends")),Zu.measure("".concat(Ni," ").concat(e),"".concat(Ni," ").concat(e," begins"),"".concat(Ni," ").concat(e," ends"))},Df={begin:dC,end:Yv},No=function(){};function qh(t){var e=t.getAttribute?t.getAttribute(Zn):null;return typeof e=="string"}function hC(t){var e=t.getAttribute?t.getAttribute(kf):null,n=t.getAttribute?t.getAttribute(If):null;return e&&n}function pC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function mC(){if(R.autoReplaceSvg===!0)return To.replace;var t=To[R.autoReplaceSvg];return t||To.replace}function gC(t){return te.createElementNS("http://www.w3.org/2000/svg",t)}function vC(t){return te.createElement(t)}function Gv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?gC:vC:n;if(typeof t=="string")return te.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Gv(o,{ceFn:r}))}),i}function yC(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var To={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Gv(i),n)}),n.getAttribute(Zn)===null&&R.keepOriginalSource){var r=te.createComment(yC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Nf(n).indexOf(R.replacementClass))return To.replace(e);var i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Rs(a)}).join(`
`);n.setAttribute(Zn,""),n.innerHTML=o}};function Xh(t){t()}function Qv(t,e){var n=typeof e=="function"?e:No;if(t.length===0)n();else{var r=Xh;R.mutateApproach===CE&&(r=vn.requestAnimationFrame||Xh),r(function(){var i=mC(),s=Df.begin("mutate");t.map(i),s(),n()})}}var Lf=!1;function Kv(){Lf=!0}function ec(){Lf=!1}var sa=null;function Jh(t){if(Wh&&R.observeMutations){var e=t.treeCallback,n=e===void 0?No:e,r=t.nodeCallback,i=r===void 0?No:r,s=t.pseudoElementsCallback,o=s===void 0?No:s,a=t.observeMutationsRoot,l=a===void 0?te:a;sa=new Wh(function(u){if(!Lf){var c=yn();ii(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!qh(f.addedNodes[0])&&(R.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&qh(f.target)&&~TE.indexOf(f.attributeName))if(f.attributeName==="class"&&hC(f.target)){var d=Ba(Nf(f.target)),g=d.prefix,y=d.iconName;f.target.setAttribute(kf,g||c),y&&f.target.setAttribute(If,y)}else pC(f.target)&&i(f.target)})}}),$t&&sa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _C(){sa&&sa.disconnect()}function wC(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function EC(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ba(Nf(t));return i.prefix||(i.prefix=yn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=JE(i.prefix,t.innerText)||Rf(i.prefix,Gu(t.innerText))),!i.iconName&&R.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function CC(t){var e=ii(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||ds()):(e["aria-hidden"]="true",e.focusable="false")),e}function SC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=EC(t),r=n.iconName,i=n.prefix,s=n.rest,o=CC(t),a=Ku("parseNodeAttributes",{},t),l=e.styleParser?wC(t):[];return I({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var xC=dt.styles;function qv(t){var e=R.autoReplaceSvg==="nest"?Zh(t,{styleParser:!1}):Zh(t);return~e.extra.classes.indexOf(Av)?jt("generateLayersText",t,e):jt("generateSvgReplacementMutation",t,e)}var _n=new Set;bf.map(function(t){_n.add("fa-".concat(t))});Object.keys(ls[Z]).map(_n.add.bind(_n));Object.keys(ls[ae]).map(_n.add.bind(_n));_n=Ts(_n);function ep(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$t)return Promise.resolve();var n=te.documentElement.classList,r=function(f){return n.add("".concat($h,"-").concat(f))},i=function(f){return n.remove("".concat($h,"-").concat(f))},s=R.autoFetchSvg?_n:bf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(xC));s.includes("fa")||s.push("fa");var o=[".".concat(Av,":not([").concat(Zn,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Zn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ii(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Df.begin("onTree"),u=a.reduce(function(c,f){try{var d=qv(f);d&&c.push(d)}catch(g){Rv||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Qv(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function kC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qv(t).then(function(n){n&&Qv([n],e)})}function IC(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:qu(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:qu(i||{})),t(r,I(I({},n),{},{mask:i}))}}var bC=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ct:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,g=n.titleId,y=g===void 0?null:g,_=n.classes,C=_===void 0?[]:_,p=n.attributes,h=p===void 0?{}:p,m=n.styles,w=m===void 0?{}:m;if(e){var S=e.prefix,N=e.iconName,T=e.icon;return Ha(I({type:"icon"},e),function(){return er("beforeDOMElementCreation",{iconDefinition:e,params:n}),R.autoA11y&&(d?h["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(y||ds()):(h["aria-hidden"]="true",h.focusable="false")),Of({icons:{main:Xu(T),mask:l?Xu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:N,transform:I(I({},Ct),i),symbol:o,title:d,maskId:c,titleId:y,extra:{attributes:h,styles:w,classes:C}})})}},NC={mixout:function(){return{icon:IC(bC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ep,n.nodeCallback=kC,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?te:r,s=n.callback,o=s===void 0?function(){}:s;return ep(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(g,y){Promise.all([Ju(i,a),c.iconName?Ju(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var C=Sf(_,2),p=C[0],h=C[1];g([n,Of({icons:{main:p,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Wa(a);l.length>0&&(i.style=l);var u;return Tf(o)&&(u=jt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},TC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ha({type:"layer"},function(){er("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(Ts(s)).join(" ")},children:o}]})}}}},PC={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Ha({type:"counter",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),uC({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(Ts(a))}})})}}}},RC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ct:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return Ha({type:"text",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),Qh({content:n,transform:I(I({},Ct),s),title:a,extra:{attributes:f,styles:g,classes:["".concat(R.cssPrefix,"-layers-text")].concat(Ts(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Nv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return R.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qh({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},AC=new RegExp('"',"ug"),tp=[1105920,1112319];function OC(t){var e=t.replace(AC,""),n=YE(e,0),r=n>=tp[0]&&n<=tp[1],i=e.length===2?e[0]===e[1]:!1;return{value:Gu(i?e[0]:e),isSecondary:r||i}}function np(t,e){var n="".concat(EE).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ii(t.children),o=s.filter(function(T){return T.getAttribute(Yu)===e})[0],a=vn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(IE),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ae:Z,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?us[d][l[2].toLowerCase()]:bE[d][u],y=OC(f),_=y.value,C=y.isSecondary,p=l[0].startsWith("FontAwesome"),h=Rf(g,_),m=h;if(p){var w=ZE(_);w.iconName&&w.prefix&&(h=w.iconName,g=w.prefix)}if(h&&!C&&(!o||o.getAttribute(kf)!==g||o.getAttribute(If)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var S=SC(),N=S.extra;N.attributes[Yu]=e,Ju(h,g).then(function(T){var A=Of(I(I({},S),{},{icons:{main:T,mask:Af()},prefix:g,iconName:m,extra:N,watchable:!0})),H=te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=A.map(function(j){return Rs(j)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function DC(t){return Promise.all([np(t,"::before"),np(t,"::after")])}function LC(t){return t.parentNode!==document.head&&!~SE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function rp(t){if($t)return new Promise(function(e,n){var r=ii(t.querySelectorAll("*")).filter(LC).map(DC),i=Df.begin("searchPseudoElements");Kv(),Promise.all(r).then(function(){i(),ec(),e()}).catch(function(){i(),ec(),n()})})}var MC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=rp,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?te:r;R.searchPseudoElements&&rp(i)}}},ip=!1,FC={mixout:function(){return{dom:{unwatch:function(){Kv(),ip=!0}}}},hooks:function(){return{bootstrap:function(){Jh(Ku("mutationObserverCallbacks",{}))},noAuto:function(){_C()},watch:function(n){var r=n.observeMutationsRoot;ip?ec():Jh(Ku("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},sp=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},jC={mixout:function(){return{parse:{transform:function(n){return sp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=sp(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:f,path:d};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Dl={x:0,y:0,width:"100%",height:"100%"};function op(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zC(t){return t.tag==="g"?t.children:[t]}var UC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ba(i.split(" ").map(function(o){return o.trim()})):Af();return s.prefix||(s.prefix=yn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,d=o.icon,g=jE({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:I(I({},Dl),{},{fill:"white"})},_=c.children?{children:c.children.map(op)}:{},C={tag:"g",attributes:I({},g.inner),children:[op(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},_))]},p={tag:"g",attributes:I({},g.outer),children:[C]},h="mask-".concat(a||ds()),m="clip-".concat(a||ds()),w={tag:"mask",attributes:I(I({},Dl),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:zC(d)},w]};return r.push(S,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},Dl)}),{children:r,attributes:i}}}},WC={provides:function(e){var n=!1;vn.matchMedia&&(n=vn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:I(I({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$C={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},BC=[WE,NC,TC,PC,RC,MC,FC,jC,UC,WC,$C];nC(BC,{mixoutsTo:Ze});Ze.noAuto;Ze.config;Ze.library;Ze.dom;var tc=Ze.parse;Ze.findIconDefinition;Ze.toHtml;var HC=Ze.icon;Ze.layer;Ze.text;Ze.counter;var Xv={exports:{}},VC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",YC=VC,GC=YC;function Jv(){}function Zv(){}Zv.resetWarningCache=Jv;var QC=function(){function t(r,i,s,o,a,l){if(l!==GC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Zv,resetWarningCache:Jv};return n.PropTypes=n,n};Xv.exports=QC();var KC=Xv.exports;const z=em(KC);function ap(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function tn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ap(Object(n),!0).forEach(function(r){Ir(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ap(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oa(t){"@babel/helpers - typeof";return oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oa(t)}function Ir(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function XC(t,e){if(t==null)return{};var n=qC(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function nc(t){return JC(t)||ZC(t)||eS(t)||tS()}function JC(t){if(Array.isArray(t))return rc(t)}function ZC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function eS(t,e){if(t){if(typeof t=="string")return rc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rc(t,e)}}function rc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function tS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nS(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,g=t.inverse,y=t.border,_=t.listItem,C=t.flip,p=t.size,h=t.rotation,m=t.pull,w=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":y,"fa-li":_,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},Ir(e,"fa-".concat(p),typeof p<"u"&&p!==null),Ir(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Ir(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Ir(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function rS(t){return t=t-0,t===t}function ey(t){return rS(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var iS=["style"];function sS(t){return t.charAt(0).toUpperCase()+t.slice(1)}function oS(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=ey(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[sS(i)]=s:e[i]=s,e},{})}function ty(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ty(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=oS(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[ey(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=XC(n,iS);return i.attrs.style=tn(tn({},i.attrs.style),o),t.apply(void 0,[e.tag,tn(tn({},i.attrs),a)].concat(nc(r)))}var ny=!1;try{ny=!0}catch{}function aS(){if(!ny&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function lp(t){if(t&&oa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(tc.icon)return tc.icon(t);if(t===null)return null;if(t&&oa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ll(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ir({},t,e):{}}var As=Nc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=lp(n),c=Ll("classes",[].concat(nc(nS(t)),nc(s.split(" ")))),f=Ll("transform",typeof t.transform=="string"?tc.transform(t.transform):t.transform),d=Ll("mask",lp(r)),g=HC(u,tn(tn(tn(tn({},c),f),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return aS("Could not find icon",u),null;var y=g.abstract,_={ref:e};return Object.keys(t).forEach(function(C){As.defaultProps.hasOwnProperty(C)||(_[C]=t[C])}),lS(y[0],_)});As.displayName="FontAwesomeIcon";As.propTypes={beat:z.bool,border:z.bool,beatFade:z.bool,bounce:z.bool,className:z.string,fade:z.bool,flash:z.bool,mask:z.oneOfType([z.object,z.array,z.string]),maskId:z.string,fixedWidth:z.bool,inverse:z.bool,flip:z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:z.oneOfType([z.object,z.array,z.string]),listItem:z.bool,pull:z.oneOf(["right","left"]),pulse:z.bool,rotation:z.oneOf([0,90,180,270]),shake:z.bool,size:z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:z.bool,spinPulse:z.bool,spinReverse:z.bool,symbol:z.oneOfType([z.bool,z.string]),title:z.string,titleId:z.string,transform:z.oneOfType([z.string,z.object]),swapOpacity:z.bool};As.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var lS=ty.bind(null,Nc.createElement),uS={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},cS=uS;const fS="_tico_1r7ry_23",dS="_header_conf_1r7ry_31",hS="_button_1r7ry_43",pS="_footer_conf_1r7ry_81",Ml={tico:fS,header_conf:dS,button:hS,footer_conf:pS},In=()=>v.jsxs("header",{className:Ml.header_conf,children:[v.jsx("h1",{className:Ml.tico,children:"Ola mundo"}),v.jsx(Gt,{to:"/furbr",children:v.jsxs("button",{className:Ml.button,children:[v.jsx(As,{icon:cS})," Home"]})})]}),mS="_pico_1woky_3",gS={pico:mS},vS=()=>v.jsx(v.Fragment,{children:v.jsx("div",{className:gS.pico,children:v.jsx("h1",{children:"ERROr:404"})})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw si(e)},si=function(t){return new Error("Firebase Database ("+ry.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Mf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new _S;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sy=function(t){const e=iy(t);return Mf.encodeByteArray(e,!0)},aa=function(t){return sy(t).replace(/\./g,"")},ic=function(t){try{return Mf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){return oy(void 0,t)}function oy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ES(n)||(t[n]=oy(t[n],e[n]));return t}function ES(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=()=>CS().__FIREBASE_DEFAULTS__,xS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ic(t[1]);return e&&JSON.parse(e)},ay=()=>{try{return SS()||xS()||kS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},IS=t=>{var e,n;return(n=(e=ay())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bS=t=>{const e=IS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ly=()=>{var t;return(t=ay())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[aa(JSON.stringify(n)),aa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(TS())}function PS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cy(){return ry.NODE_ADMIN===!0}function RS(){try{return typeof indexedDB=="object"}catch{return!1}}function AS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="FirebaseError";class Os extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OS,Object.setPrototypeOf(this,Os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fy.prototype.create)}}class fy{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Os(i,a,r)}}function DS(t,e){return t.replace(LS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=hs(ic(s[0])||""),n=hs(ic(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},MS=function(t){const e=dy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FS=function(t){const e=dy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function up(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function la(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function sc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cp(s)&&cp(o)){if(!sc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):f<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Ff(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ya=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){return t&&t._delegate?t._delegate:t}class ps{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Va;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BS(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$S(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $S(t){return t===Mn?void 0:t}function BS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const VS={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},YS=Q.INFO,GS={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},QS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hy{constructor(e){this.name=e,this._logLevel=YS,this._logHandler=QS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const KS=(t,e)=>e.some(n=>t instanceof n);let fp,dp;function qS(){return fp||(fp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XS(){return dp||(dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const py=new WeakMap,oc=new WeakMap,my=new WeakMap,Fl=new WeakMap,jf=new WeakMap;function JS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&py.set(n,t)}).catch(()=>{}),jf.set(e,t),e}function ZS(t){if(oc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});oc.set(t,e)}let ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||my.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ex(t){ac=t(ac)}function tx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jl(this),e,...n);return my.set(r,e.sort?e.sort():[e]),dn(r)}:XS().includes(t)?function(...e){return t.apply(jl(this),e),dn(py.get(this))}:function(...e){return dn(t.apply(jl(this),e))}}function nx(t){return typeof t=="function"?tx(t):(t instanceof IDBTransaction&&ZS(t),KS(t,qS())?new Proxy(t,ac):t)}function dn(t){if(t instanceof IDBRequest)return JS(t);if(Fl.has(t))return Fl.get(t);const e=nx(t);return e!==t&&(Fl.set(t,e),jf.set(e,t)),e}const jl=t=>jf.get(t);function rx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=dn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dn(o.result),l.oldVersion,l.newVersion,dn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ix=["get","getKey","getAll","getAllKeys","count"],sx=["put","add","delete","clear"],zl=new Map;function hp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zl.get(e))return zl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ix.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return zl.set(e,s),s}ex(t=>({...t,get:(e,n,r)=>hp(e,n)||t.get(e,n,r),has:(e,n)=>!!hp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ax(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ax(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lc="@firebase/app",pp="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new hy("@firebase/app"),lx="@firebase/app-compat",ux="@firebase/analytics-compat",cx="@firebase/analytics",fx="@firebase/app-check-compat",dx="@firebase/app-check",hx="@firebase/auth",px="@firebase/auth-compat",mx="@firebase/database",gx="@firebase/database-compat",vx="@firebase/functions",yx="@firebase/functions-compat",_x="@firebase/installations",wx="@firebase/installations-compat",Ex="@firebase/messaging",Cx="@firebase/messaging-compat",Sx="@firebase/performance",xx="@firebase/performance-compat",kx="@firebase/remote-config",Ix="@firebase/remote-config-compat",bx="@firebase/storage",Nx="@firebase/storage-compat",Tx="@firebase/firestore",Px="@firebase/firestore-compat",Rx="firebase",Ax="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="[DEFAULT]",Ox={[lc]:"fire-core",[lx]:"fire-core-compat",[cx]:"fire-analytics",[ux]:"fire-analytics-compat",[dx]:"fire-app-check",[fx]:"fire-app-check-compat",[hx]:"fire-auth",[px]:"fire-auth-compat",[mx]:"fire-rtdb",[gx]:"fire-rtdb-compat",[vx]:"fire-fn",[yx]:"fire-fn-compat",[_x]:"fire-iid",[wx]:"fire-iid-compat",[Ex]:"fire-fcm",[Cx]:"fire-fcm-compat",[Sx]:"fire-perf",[xx]:"fire-perf-compat",[kx]:"fire-rc",[Ix]:"fire-rc-compat",[bx]:"fire-gcs",[Nx]:"fire-gcs-compat",[Tx]:"fire-fst",[Px]:"fire-fst-compat","fire-js":"fire-js",[Rx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Map,cc=new Map;function Dx(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ca(t){const e=t.name;if(cc.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;cc.set(e,t);for(const n of ua.values())Dx(n,t);return!0}function Lx(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hn=new fy("app","Firebase",Mx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=Ax;function gy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=ly()),!n)throw hn.create("no-options");const s=ua.get(i);if(s){if(sc(n,s.options)&&sc(r,s.config))return s;throw hn.create("duplicate-app",{appName:i})}const o=new HS(i);for(const l of cc.values())o.addComponent(l);const a=new Fx(n,r,o);return ua.set(i,a),a}function zx(t=uc){const e=ua.get(t);if(!e&&t===uc&&ly())return gy();if(!e)throw hn.create("no-app",{appName:t});return e}function Lr(t,e,n){var r;let i=(r=Ox[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(a.join(" "));return}ca(new ps(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="firebase-heartbeat-database",Wx=1,ms="firebase-heartbeat-store";let Ul=null;function vy(){return Ul||(Ul=rx(Ux,Wx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ms)}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),Ul}async function $x(t){try{return await(await vy()).transaction(ms).objectStore(ms).get(yy(t))}catch(e){if(e instanceof Os)tr.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(n.message)}}}async function mp(t,e){try{const r=(await vy()).transaction(ms,"readwrite");await r.objectStore(ms).put(e,yy(t)),await r.done}catch(n){if(n instanceof Os)tr.warn(n.message);else{const r=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function yy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=1024,Hx=30*24*60*60*1e3;class Vx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Hx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gp(),{heartbeatsToSend:n,unsentEntries:r}=Yx(this._heartbeatsCache.heartbeats),i=aa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gp(){return new Date().toISOString().substring(0,10)}function Yx(t,e=Bx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Gx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RS()?AS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $x(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vp(t){return aa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){ca(new ps("platform-logger",e=>new ox(e),"PRIVATE")),ca(new ps("heartbeat",e=>new Vx(e),"PRIVATE")),Lr(lc,pp,t),Lr(lc,pp,"esm2017"),Lr("fire-js","")}Qx("");const yp="@firebase/database",_p="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _y="";function Kx(t){_y=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qx(e)}}catch{}return new Xx},Bn=wy("localStorage"),fc=wy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new hy("@firebase/database"),Jx=function(){let t=1;return function(){return t++}}(),Ey=function(t){const e=US(t),n=new zS;n.update(e);const r=n.digest();return Mf.encodeByteArray(r)},Ds=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ds.apply(null,r):typeof r=="object"?e+=Ce(r):e+=r,e+=" "}return e};let Gn=null,wp=!0;const Zx=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Mr.logLevel=Q.VERBOSE,Gn=Mr.log.bind(Mr),e&&fc.set("logging_enabled",!0)):typeof t=="function"?Gn=t:(Gn=null,fc.remove("logging_enabled"))},Re=function(...t){if(wp===!0&&(wp=!1,Gn===null&&fc.get("logging_enabled")===!0&&Zx(!0)),Gn){const e=Ds.apply(null,t);Gn(e)}},Ls=function(t){return function(...e){Re(t,...e)}},dc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ds(...t);Mr.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ds(...t)}`;throw Mr.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Ds(...t);Mr.warn(e)},ek=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Kr="[MIN_NAME]",nr="[MAX_NAME]",ai=function(t,e){if(t===e)return 0;if(t===Kr||e===nr)return-1;if(e===Kr||t===nr)return 1;{const n=Ep(t),r=Ep(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nk=function(t,e){return t===e?0:t<e?-1:1},wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},zf=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ce(e[r]),n+=":",n+=zf(t[e[r]]);return n+="}",n},Sy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xy=function(t){x(!Cy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},rk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ik=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ok=new RegExp("^-?(0*)\\d{1,10}$"),ak=-2147483648,lk=2147483647,Ep=function(t){if(ok.test(t)){const e=Number(t);if(e>=ak&&e<=lk)return e}return null},li=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},uk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ui=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class Fr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="5",ky="v",Iy="s",by="r",Ny="f",Ty=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Py="ls",Ry="p",hc="ac",Ay="websocket",Oy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ly(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===Ay)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Oy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dk(t)&&(n.ns=t.namespace);const i=[];return Ve(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(){this.counters_={}}incrementCounter(e,n=1){Bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return wS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl={},$l={};function Wf(t){const e=t.toString();return Wl[e]||(Wl[e]=new hk),Wl[e]}function pk(t,e){const n=t.toString();return $l[n]||($l[n]=e()),$l[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&li(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="start",gk="close",vk="pLPCommand",yk="pRTLPCB",My="id",Fy="pw",jy="ser",_k="cb",wk="seg",Ek="ts",Ck="d",Sk="dframe",zy=1870,Uy=30,xk=zy-Uy,kk=25e3,Ik=3e4;class br{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ls(e),this.stats_=Wf(n),this.urlFn=l=>(this.appCheckToken&&(l[hc]=this.appCheckToken),Ly(n,Oy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ik)),tk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $f((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cp)this.id=a,this.password=l;else if(o===gk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Cp]="t",r[jy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[_k]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ky]=Uf,this.transportSessionId&&(r[Iy]=this.transportSessionId),this.lastSessionId&&(r[Py]=this.lastSessionId),this.applicationId&&(r[Ry]=this.applicationId),this.appCheckToken&&(r[hc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ty.test(location.hostname)&&(r[by]=Ny);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){br.forceAllow_=!0}static forceDisallow(){br.forceDisallow_=!0}static isAvailable(){return br.forceAllow_?!0:!br.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rk()&&!ik()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sy(n),i=Sy(r,xk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Sk]="t",r[My]=e,r[Fy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $f{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jx(),window[vk+this.uniqueCallbackIdentifier]=e,window[yk+this.uniqueCallbackIdentifier]=n,this.myIFrame=$f.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Re("frame writing exception"),a.stack&&Re(a.stack),Re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[My]=this.myID,e[Fy]=this.myPW,e[jy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Uy+r.length<=zy;){const o=this.pendingSegs.shift();r=r+"&"+wk+i+"="+o.seg+"&"+Ek+i+"="+o.ts+"&"+Ck+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(kk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=16384,Nk=45e3;let fa=null;typeof MozWebSocket<"u"?fa=MozWebSocket:typeof WebSocket<"u"&&(fa=WebSocket);class ft{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ls(this.connId),this.stats_=Wf(n),this.connURL=ft.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[ky]=Uf,typeof location<"u"&&location.hostname&&Ty.test(location.hostname)&&(o[by]=Ny),n&&(o[Iy]=n),r&&(o[Py]=r),i&&(o[hc]=i),s&&(o[Ry]=s),Ly(e,Ay,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let r;cy(),this.mySock=new fa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&fa!==null&&!ft.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=hs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Sy(n,bk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[br,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let r=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ft];else{const i=this.transports_=[];for(const s of gs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=6e4,Pk=5e3,Rk=10*1024,Ak=100*1024,Bl="t",Sp="d",Ok="s",xp="r",Dk="e",kp="o",Ip="a",bp="n",Np="p",Lk="h";class Mk{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ls("c:"+this.id+":"),this.transportManager_=new gs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ui(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ak?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bl in e){const n=e[Bl];n===Ip?this.upgradeIfSecondaryHealthy_():n===xp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Np,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ip,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wi(Bl,e);if(Sp in e){const r=e[Sp];if(n===Lk){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===bp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ok?this.onConnectionShutdown_(r):n===xp?this.onReset_(r):n===Dk?dc("Server Error: "+r):n===kp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Uf!==r&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ui(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ui(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Np,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends $y{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!uy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new da}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=32,Pp=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new G("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function By(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Fk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function me(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return ze(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bf(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class jk{constructor(e,n){this.errorPrefix_=n,this.parts_=Hy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ya(this.parts_[r]);Yy(this)}}function zk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ya(e),Yy(t)}function Uk(t){const e=t.parts_.pop();t.byteLength_-=Ya(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yy(t){if(t.byteLength_>Pp)throw new Error(t.errorPrefix_+"has a key path longer than "+Pp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Tp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tp+") or object contains a cycle "+Fn(t))}function Fn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends $y{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Hf}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=1e3,Wk=60*5*1e3,Rp=30*1e3,$k=1.3,Bk=3e4,Hk="server_kill",Ap=3;class Rt extends Wy{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rt.nextPersistentConnectionId_++,this.log_=Ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ei,this.maxReconnectDelay_=Wk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!cy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&da.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ce(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Va,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Rt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Bt(e,"w")){const r=Qr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||FS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=MS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dc("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Bk&&(this.reconnectDelay_=Ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$k)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new Mk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{He(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Hk)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&He(f),l())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],up(this.interruptReasons_)&&(this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>zf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ap&&(this.reconnectDelay_=Rp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ap&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_y.replace(/\./g,"-")]=1,uy()?e["framework.cordova"]=1:PS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=da.getInstance().currentlyOnline();return up(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0;Rt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Kr,e),i=new F(Kr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;class Gy extends Ga{static get __EMPTY_NODE(){return po}static set __EMPTY_NODE(e){po=e}compare(e,n){return ai(e.name,n.name)}isDefinedOn(e){throw si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(nr,po)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,po)}toString(){return".key"}}const jr=new Gy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ee.RED,this.left=i??Ue.EMPTY_NODE,this.right=s??Ue.EMPTY_NODE}copy(e,n,r,i,s){return new Ee(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class Vk{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mo(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new Vk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t,e){return ai(t.name,e.name)}function Vf(t,e){return ai(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;function Gk(t){pc=t}const Qy=function(t){return typeof t=="number"?"number:"+xy(t):"string:"+t},Ky=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bt(e,".sv"),"Priority must be a string or number.")}else x(t===pc||t.isEmpty(),"priority of unexpected type.");x(t===pc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ky(this.priorityNode_)}static set __childrenNodeConstructor(e){Op=e}static get __childrenNodeConstructor(){return Op}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:M(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xy(this.value_):e+=this.value_,this.lazyHash_=Ey(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),s=_e.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qy,Xy;function Qk(t){qy=t}function Kk(t){Xy=t}class qk extends Ga{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ai(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(nr,new _e("[PRIORITY-POST]",Xy))}makePost(e,n){const r=qy(e);return new F(n,new _e("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new qk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=Math.log(2);class Jk{constructor(e){const n=s=>parseInt(Math.log(s)/Xk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ha=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let f,d;if(c===0)return null;if(c===1)return f=t[l],d=n?n(f):f,new Ee(d,f.node,Ee.BLACK,null,null);{const g=parseInt(c/2,10)+l,y=i(l,g),_=i(g+1,u);return f=t[g],d=n?n(f):f,new Ee(d,f.node,Ee.BLACK,y,_)}},s=function(l){let u=null,c=null,f=t.length;const d=function(y,_){const C=f-y,p=f;f-=y;const h=i(C+1,p),m=t[C],w=n?n(m):m;g(new Ee(w,m.node,_,null,h))},g=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),C=Math.pow(2,l.count-(y+1));_?d(C,Ee.BLACK):(d(C,Ee.BLACK),d(C,Ee.RED))}return c},o=new Jk(t.length),a=s(o);return new Ue(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl;const fr={};class Tt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(fr&&le,"ChildrenNode.ts has not been loaded"),Hl=Hl||new Tt({".priority":fr},{".priority":le}),Hl}get(e){const n=Qr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return Bt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ha(r,e.getCompare()):a=fr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Tt(c,u)}addToIndexes(e,n){const r=la(this.indexes_,(i,s)=>{const o=Qr(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===fr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ha(a,o.getCompare())}else return fr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new Tt(r,this.indexSet_)}removeFromIndexes(e,n){const r=la(this.indexes_,i=>{if(i===fr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Tt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ky(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ci||(Ci=new O(new Ue(Vf),null,Tt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ci}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ci:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ci:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{x(M(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,a)=>{n[o]=a.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qy(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ey(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ms?-1:0}withIndex(e){if(e===jr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zk extends O{constructor(){super(new Ue(Vf),O.EMPTY_NODE,Tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Ms=new Zk;Object.defineProperties(F,{MIN:{value:new F(Kr,O.EMPTY_NODE)},MAX:{value:new F(nr,Ms)}});Gy.__EMPTY_NODE=O.EMPTY_NODE;_e.__childrenNodeConstructor=O;Gk(Ms);Kk(Ms);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=!0;function ke(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,ke(e))}if(!(t instanceof Array)&&eI){const n=[];let r=!1;if(Ve(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ke(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return O.EMPTY_NODE;const s=ha(n,Yk,o=>o.name,Vf);if(r){const o=ha(n,le.getCompare());return new O(s,ke(e),new Tt({".priority":o},{".priority":le}))}else return new O(s,ke(e),Tt.Default)}else{let n=O.EMPTY_NODE;return Ve(t,(r,i)=>{if(Bt(t,r)&&r.substring(0,1)!=="."){const s=ke(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ke(e))}}Qk(ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI extends Ga{constructor(e){super(),this.indexPath_=e,x(!U(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ai(e.name,n.name):s}makePost(e,n){const r=ke(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Ms);return new F(nr,e)}toString(){return Hy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI extends Ga{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ai(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=ke(e);return new F(n,r)}toString(){return".value"}}const rI=new nI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){return{type:"value",snapshotNode:t}}function qr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ys(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(vs(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qr(n,r)):o.trackChildChange(ys(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange(vs(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ys(i,s,o))}else r.trackChildChange(qr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.indexedFilter_=new Yf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_s.getStartPost_(e),this.endPost_=_s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,a)=>{s.matches(new F(o,a))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,g)=>f(g,d)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new F(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ys(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(vs(n,f));const _=a.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(qr(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(vs(u.name,u.node)),s.trackChildChange(qr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kr}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new Gf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oI(t){return t.loadsAllData()?new Yf(t.getIndex()):t.hasLimit()?new sI(t):new _s(t)}function Dp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===rI?n="$value":t.index_===jr?n="$key":(x(t.index_ instanceof tI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Lp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Wy{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ls("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=pa.getListenId_(e,r),a={};this.listens_[o]=a;const l=Dp(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,r),Qr(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=pa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Dp(e._queryParams),r=e._path.toString(),i=new Va;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jS(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hs(a.responseText)}catch{He("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){return{value:null,children:new Map}}function Zy(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,ma());const i=t.children.get(r);e=K(e),Zy(i,e,n)}}function mc(t,e,n){t.value!==null?n(e,t.value):lI(t,(r,i)=>{const s=new G(e.toString()+"/"+r);mc(i,s,n)})}function lI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ve(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=10*1e3,cI=30*1e3,fI=5*60*1e3;class dI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uI(e);const r=Mp+(cI-Mp)*Math.random();Ui(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ve(e,(i,s)=>{s>0&&Bt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ui(this.reportStats_.bind(this),Math.floor(Math.random()*2*fI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function e_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pt.ACK_USER_WRITE,this.source=e_()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new ga(B(),n,this.revert)}}else return x(M(this.path)===e,"operationForChild called for unrelated child."),new ga(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new ws(this.source,B()):new ws(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pt.OVERWRITE}operationForChild(e){return U(this.path)?new rr(this.source,B(),this.snap.getImmediateChild(e)):new rr(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new rr(this.source,B(),n.value):new Es(this.source,B(),n)}else return x(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(iI(o.childName,o.snapshotNode))}),Si(t,i,"child_removed",e,r,n),Si(t,i,"child_added",e,r,n),Si(t,i,"child_moved",s,r,n),Si(t,i,"child_changed",e,r,n),Si(t,i,"value",e,r,n),i}function Si(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>gI(t,a,l)),o.forEach(a=>{const l=mI(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function mI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gI(t,e,n){if(e.childName==null||n.childName==null)throw si("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t,e){return{eventCache:t,serverCache:e}}function Wi(t,e,n,r){return Qa(new ir(e,n,r),t.serverCache)}function t_(t,e,n,r){return Qa(t.eventCache,new ir(e,n,r))}function gc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl;const vI=()=>(Vl||(Vl=new Ue(nk)),Vl);class J{constructor(e,n=vI()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return Ve(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:me(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new J(null)}}set(e,n){if(U(e))return new J(n,this.children);{const r=M(e),s=(this.children.get(r)||new J(null)).set(K(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(U(e))return n;{const r=M(e),s=(this.children.get(r)||new J(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(me(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(K(e),me(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),me(n,i),r):new J(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(me(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new J(null))}}function $i(t,e,n){if(U(e))return new vt(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ze(i,e);return s=s.updateChild(o,n),new vt(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new vt(s)}}}function Fp(t,e,n){let r=t;return Ve(n,(i,s)=>{r=$i(r,me(e,i),s)}),r}function jp(t,e){if(U(e))return vt.empty();{const n=t.writeTree_.setTree(e,new J(null));return new vt(n)}}function vc(t,e){return ur(t,e)!=null}function ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function zp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function pn(t,e){if(U(e))return t;{const n=ur(t,e);return n!=null?new vt(new J(n)):new vt(t.writeTree_.subtree(e))}}function yc(t){return t.writeTree_.isEmpty()}function Xr(t,e){return n_(B(),t.writeTree_,e)}function n_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=n_(me(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(me(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t,e){return o_(e,t)}function yI(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=$i(t.visibleWrites,e,n)),t.lastWriteId=r}function _I(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function wI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&EI(a,r.path)?i=!1:ht(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return CI(t),!0;if(r.snap)t.visibleWrites=jp(t.visibleWrites,r.path);else{const a=r.children;Ve(a,l=>{t.visibleWrites=jp(t.visibleWrites,me(r.path,l))})}return!0}else return!1}function EI(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(me(t.path,n),e))return!0;return!1}function CI(t){t.visibleWrites=r_(t.allWrites,SI,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function SI(t){return t.visible}function r_(t,e,n){let r=vt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ht(n,o)?(a=ze(n,o),r=$i(r,a,s.snap)):ht(o,n)&&(a=ze(o,n),r=$i(r,B(),s.snap.getChild(a)));else if(s.children){if(ht(n,o))a=ze(n,o),r=Fp(r,a,s.children);else if(ht(o,n))if(a=ze(o,n),U(a))r=Fp(r,B(),s.children);else{const l=Qr(s.children,M(a));if(l){const u=l.getChild(K(a));r=$i(r,B(),u)}}}else throw si("WriteRecord should have .snap or .children")}}return r}function i_(t,e,n,r,i){if(!r&&!i){const s=ur(t.visibleWrites,e);if(s!=null)return s;{const o=pn(t.visibleWrites,e);if(yc(o))return n;if(n==null&&!vc(o,B()))return null;{const a=n||O.EMPTY_NODE;return Xr(o,a)}}}else{const s=pn(t.visibleWrites,e);if(!i&&yc(s))return n;if(!i&&n==null&&!vc(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ht(u.path,e)||ht(e,u.path))},a=r_(t.allWrites,o,e),l=n||O.EMPTY_NODE;return Xr(a,l)}}}function xI(t,e,n){let r=O.EMPTY_NODE;const i=ur(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pn(t.visibleWrites,e);return n.forEachChild(le,(o,a)=>{const l=Xr(pn(s,new G(o)),a);r=r.updateImmediateChild(o,l)}),zp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pn(t.visibleWrites,e);return zp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function kI(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=me(e,n);if(vc(t.visibleWrites,s))return null;{const o=pn(t.visibleWrites,s);return yc(o)?i.getChild(n):Xr(o,i.getChild(n))}}function II(t,e,n,r){const i=me(e,n),s=ur(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pn(t.visibleWrites,i);return Xr(o,r.getNode().getImmediateChild(n))}else return null}function bI(t,e){return ur(t.visibleWrites,e)}function NI(t,e,n,r,i,s,o){let a;const l=pn(t.visibleWrites,e),u=ur(l,B());if(u!=null)a=u;else if(n!=null)a=Xr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=d.getNext();for(;g&&c.length<i;)f(g,r)!==0&&c.push(g),g=d.getNext();return c}else return[]}function TI(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function va(t,e,n,r){return i_(t.writeTree,t.treePath,e,n,r)}function Xf(t,e){return xI(t.writeTree,t.treePath,e)}function Up(t,e,n,r){return kI(t.writeTree,t.treePath,e,n,r)}function ya(t,e){return bI(t.writeTree,me(t.treePath,e))}function PI(t,e,n,r,i,s){return NI(t.writeTree,t.treePath,e,n,r,i,s)}function Jf(t,e,n){return II(t.writeTree,t.treePath,e,n)}function s_(t,e){return o_(me(t.treePath,e),t.writeTree)}function o_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ys(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,vs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,qr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ys(r,e.snapshotNode,i.oldSnap));else throw si("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const a_=new AI;class Zf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ir(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sr(this.viewCache_),s=PI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){return{filter:t}}function DI(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function LI(t,e,n,r,i){const s=new RI;let o,a;if(n.type===pt.OVERWRITE){const u=n;u.source.fromUser?o=_c(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=_a(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===pt.MERGE){const u=n;u.source.fromUser?o=FI(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=wc(t,e,u.path,u.children,r,i,a,s))}else if(n.type===pt.ACK_USER_WRITE){const u=n;u.revert?o=UI(t,e,u.path,r,i,s):o=jI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===pt.LISTEN_COMPLETE)o=zI(t,e,n.path,r,s);else throw si("Unknown operation type: "+n.type);const l=s.getChanges();return MI(e,o,l),{viewCache:o,changes:l}}function MI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=gc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Jy(gc(e)))}}function l_(t,e,n,r,i,s){const o=e.eventCache;if(ya(r,n)!=null)return e;{let a,l;if(U(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=sr(e),c=u instanceof O?u:O.EMPTY_NODE,f=Xf(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=va(r,sr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){x(wn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const f=Up(r,n,c,l);f!=null?a=t.filter.updatePriority(c,f):a=o.getNode()}else{const c=K(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=Up(r,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(u).updateChild(c,d):f=o.getNode().getImmediateChild(u)}else f=Jf(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,c,i,s):a=o.getNode()}}return Wi(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function _a(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=M(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return e;const y=K(n),C=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=c.updatePriority(l.getNode(),C):u=c.updateChild(l.getNode(),g,C,y,a_,null)}const f=t_(e,u,l.isFullyInitialized()||U(n),c.filtersNodes()),d=new Zf(i,f,s);return l_(t,f,n,i,d,a)}function _c(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Zf(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Wi(e,u,!0,t.filter.filtersNodes());else{const f=M(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Wi(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=K(n),g=a.getNode().getImmediateChild(f);let y;if(U(d))y=r;else{const _=c.getCompleteChild(f);_!=null?By(d)===".priority"&&_.getChild(Vy(d)).isEmpty()?y=_:y=_.updateChild(d,r):y=O.EMPTY_NODE}if(g.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),f,y,d,c,o);l=Wi(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Wp(t,e){return t.eventCache.isCompleteForChild(e)}function FI(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=me(n,l);Wp(e,M(c))&&(a=_c(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=me(n,l);Wp(e,M(c))||(a=_c(t,a,c,u,i,s,o))}),a}function $p(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function wc(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;U(n)?u=r:u=new J(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((f,d)=>{if(c.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),y=$p(t,g,d);l=_a(t,l,new G(f),y,i,s,o,a)}}),u.children.inorderTraversal((f,d)=>{const g=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!c.hasChild(f)&&!g){const y=e.serverCache.getNode().getImmediateChild(f),_=$p(t,y,d);l=_a(t,l,new G(f),_,i,s,o,a)}}),l}function jI(t,e,n,r,i,s,o){if(ya(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _a(t,e,n,l.getNode().getChild(n),i,s,a,o);if(U(n)){let u=new J(null);return l.getNode().forEachChild(jr,(c,f)=>{u=u.set(new G(c),f)}),wc(t,e,n,u,i,s,a,o)}else return e}else{let u=new J(null);return r.foreach((c,f)=>{const d=me(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),wc(t,e,n,u,i,s,a,o)}}function zI(t,e,n,r,i){const s=e.serverCache,o=t_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return l_(t,o,n,r,a_,i)}function UI(t,e,n,r,i,s){let o;if(ya(r,n)!=null)return e;{const a=new Zf(r,e,i),l=e.eventCache.getNode();let u;if(U(n)||M(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=va(r,sr(e));else{const f=e.serverCache.getNode();x(f instanceof O,"serverChildren would be complete if leaf node"),c=Xf(r,f)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=M(n);let f=Jf(r,c,e.serverCache);f==null&&e.serverCache.isCompleteForChild(c)&&(f=l.getImmediateChild(c)),f!=null?u=t.filter.updateChild(l,c,f,K(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,O.EMPTY_NODE,K(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=va(r,sr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ya(r,B())!=null,Wi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Yf(r.getIndex()),s=oI(r);this.processor_=OI(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,a.getNode(),null),c=new ir(l,o.isFullyInitialized(),i.filtersNodes()),f=new ir(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Qa(f,c),this.eventGenerator_=new hI(this.query_)}get query(){return this.query_}}function $I(t){return t.viewCache_.serverCache.getNode()}function BI(t,e){const n=sr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Bp(t){return t.eventRegistrations_.length===0}function HI(t,e){t.eventRegistrations_.push(e)}function Hp(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Vp(t,e,n,r){e.type===pt.MERGE&&e.source.queryId!==null&&(x(sr(t.viewCache_),"We should always have a full cache before handling merges"),x(gc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=LI(t.processor_,i,e,n,r);return DI(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,u_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function VI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(qr(s,o))}),n.isFullyInitialized()&&r.push(Jy(n.getNode())),u_(t,r,n.getNode(),e)}function u_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return pI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;class YI{constructor(){this.views=new Map}}function GI(t){x(!wa,"__referenceConstructor has already been defined"),wa=t}function QI(){return x(wa,"Reference.ts has not been loaded"),wa}function KI(t){return t.views.size===0}function ed(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Vp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Vp(o,e,n,r));return s}}function qI(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=va(n,i?r:null),l=!1;a?l=!0:r instanceof O?(a=Xf(n,r),l=!1):(a=O.EMPTY_NODE,l=!1);const u=Qa(new ir(a,l,!1),new ir(r,i,!1));return new WI(e,u)}return o}function XI(t,e,n,r,i,s){const o=qI(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),HI(o,n),VI(o,n)}function JI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=En(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Hp(u,n,r)),Bp(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Hp(l,n,r)),Bp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!En(t)&&s.push(new(QI())(e._repo,e._path)),{removed:s,events:o}}function c_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function zr(t,e){let n=null;for(const r of t.views.values())n=n||BI(r,e);return n}function f_(t,e){if(e._queryParams.loadsAllData())return Ka(t);{const r=e._queryIdentifier;return t.views.get(r)}}function d_(t,e){return f_(t,e)!=null}function En(t){return Ka(t)!=null}function Ka(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;function ZI(t){x(!Ea,"__referenceConstructor has already been defined"),Ea=t}function eb(){return x(Ea,"Reference.ts has not been loaded"),Ea}let tb=1;class Yp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=TI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function h_(t,e,n,r,i){return yI(t.pendingWriteTree_,e,n,r,i),i?Fs(t,new rr(e_(),e,n)):[]}function Hn(t,e,n=!1){const r=_I(t.pendingWriteTree_,e);if(wI(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(B(),!0):Ve(r.children,o=>{s=s.set(new G(o),!0)}),Fs(t,new ga(r.path,s,n))}else return[]}function qa(t,e,n){return Fs(t,new rr(Qf(),e,n))}function nb(t,e,n){const r=J.fromObject(n);return Fs(t,new Es(Qf(),e,r))}function rb(t,e){return Fs(t,new ws(Qf(),e))}function ib(t,e,n){const r=nd(t,n);if(r){const i=rd(r),s=i.path,o=i.queryId,a=ze(s,e),l=new ws(Kf(o),a);return id(t,s,l)}else return[]}function Ec(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||d_(o,e))){const l=JI(o,e,n,r);KI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,g)=>En(g));if(c&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const g=ab(d);for(let y=0;y<g.length;++y){const _=g[y],C=_.query,p=g_(t,_);t.listenProvider_.startListening(Bi(C),Ca(t,C),p.hashFn,p.onComplete)}}}!f&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Bi(e),null):u.forEach(d=>{const g=t.queryToTagMap.get(Xa(d));t.listenProvider_.stopListening(Bi(d),g)}))}lb(t,u)}return a}function sb(t,e,n,r){const i=nd(t,r);if(i!=null){const s=rd(i),o=s.path,a=s.queryId,l=ze(o,e),u=new rr(Kf(a),l,n);return id(t,o,u)}else return[]}function ob(t,e,n,r){const i=nd(t,r);if(i){const s=rd(i),o=s.path,a=s.queryId,l=ze(o,e),u=J.fromObject(n),c=new Es(Kf(a),l,u);return id(t,o,c)}else return[]}function Gp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const y=ze(d,i);s=s||zr(g,y),o=o||En(g)});let a=t.syncPointTree_.get(i);a?(o=o||En(a),s=s||zr(a,B())):(a=new YI,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const _=zr(y,B());_&&(s=s.updateImmediateChild(g,_))}));const u=d_(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Xa(e);x(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=ub();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const c=qf(t.pendingWriteTree_,i);let f=XI(a,e,n,c,s,l);if(!u&&!o&&!r){const d=f_(a,e);f=f.concat(cb(t,e,d))}return f}function td(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),u=zr(a,l);if(u)return u});return i_(i,e,s,n,!0)}function Fs(t,e){return p_(e,t.syncPointTree_,null,qf(t.pendingWriteTree_,B()))}function p_(t,e,n,r){if(U(t.path))return m_(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=zr(i,B()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=s_(r,o);s=s.concat(p_(a,l,u,c))}return i&&(s=s.concat(ed(i,t,r,n))),s}}function m_(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=zr(i,B()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=s_(r,o),c=t.operationForChild(o);c&&(s=s.concat(m_(c,a,l,u)))}),i&&(s=s.concat(ed(i,t,r,n))),s}function g_(t,e){const n=e.query,r=Ca(t,n);return{hashFn:()=>($I(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ib(t,n._path,r):rb(t,n._path);{const s=sk(i,n);return Ec(t,n,null,s)}}}}function Ca(t,e){const n=Xa(e);return t.queryToTagMap.get(n)}function Xa(t){return t._path.toString()+"$"+t._queryIdentifier}function nd(t,e){return t.tagToQueryMap.get(e)}function rd(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function id(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=qf(t.pendingWriteTree_,e);return ed(r,n,i,null)}function ab(t){return t.fold((e,n,r)=>{if(n&&En(n))return[Ka(n)];{let i=[];return n&&(i=c_(n)),Ve(r,(s,o)=>{i=i.concat(o)}),i}})}function Bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(eb())(t._repo,t._path):t}function lb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Xa(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function ub(){return tb++}function cb(t,e,n){const r=e._path,i=Ca(t,e),s=g_(t,n),o=t.listenProvider_.startListening(Bi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!En(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,f)=>{if(!U(u)&&c&&En(c))return[Ka(c).query];{let d=[];return c&&(d=d.concat(c_(c).map(g=>g.query))),Ve(f,(g,y)=>{d=d.concat(y)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Bi(c),Ca(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sd(n)}node(){return this.node_}}class od{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new od(this.syncTree_,n)}node(){return td(this.syncTree_,this.path_)}}const fb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qp=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return db(t[".sv"],e,n);if(typeof t[".sv"]=="object")return hb(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},db=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},hb=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},pb=function(t,e,n,r){return ad(e,new od(n,t),r)},v_=function(t,e,n){return ad(t,new sd(e),n)};function ad(t,e,n){const r=t.getPriority().val(),i=Qp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Qp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new _e(a,ke(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new _e(i))),o.forEachChild(le,(a,l)=>{const u=ad(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ud(t,e){let n=e instanceof G?e:new G(e),r=t,i=M(n);for(;i!==null;){const s=Qr(r.node.children,i)||{children:{},childCount:0};r=new ld(i,r,s),n=K(n),i=M(n)}return r}function ui(t){return t.node.value}function y_(t,e){t.node.value=e,Cc(t)}function __(t){return t.node.childCount>0}function mb(t){return ui(t)===void 0&&!__(t)}function Ja(t,e){Ve(t.node.children,(n,r)=>{e(new ld(n,t,r))})}function w_(t,e,n,r){n&&!r&&e(t),Ja(t,i=>{w_(i,e,!0,r)}),n&&r&&e(t)}function gb(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function js(t){return new G(t.parent===null?t.name:js(t.parent)+"/"+t.name)}function Cc(t){t.parent!==null&&vb(t.parent,t.name,t)}function vb(t,e,n){const r=mb(n),i=Bt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=/[\[\].#$\/\u0000-\u001F\u007F]/,_b=/[\[\].#$\u0000-\u001F\u007F]/,Yl=10*1024*1024,E_=function(t){return typeof t=="string"&&t.length!==0&&!yb.test(t)},C_=function(t){return typeof t=="string"&&t.length!==0&&!_b.test(t)},wb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),C_(t)},S_=function(t,e,n,r){r&&e===void 0||cd(Ff(t,"value"),e,n)},cd=function(t,e,n){const r=n instanceof G?new jk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fn(r)+" with contents = "+e.toString());if(Cy(e))throw new Error(t+"contains "+e.toString()+" "+Fn(r));if(typeof e=="string"&&e.length>Yl/3&&Ya(e)>Yl)throw new Error(t+"contains a string greater than "+Yl+" utf8 bytes "+Fn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ve(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!E_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zk(r,o),cd(t,a,r),Uk(r)}),i&&s)throw new Error(t+' contains ".value" child '+Fn(r)+" in addition to actual children.")}},x_=function(t,e,n,r){if(!(r&&n===void 0)&&!C_(n))throw new Error(Ff(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Eb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),x_(t,e,n,r)},k_=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Cb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!E_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wb(n))throw new Error(Ff(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Bf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function I_(t,e,n){fd(t,n),b_(t,r=>Bf(r,e))}function Ut(t,e,n){fd(t,n),b_(t,r=>ht(r,e)||ht(e,r))}function b_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(xb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Gn&&Re("event: "+n.toString()),li(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="repo_interrupt",Ib=25;class bb{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Sb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ma(),this.transactionQueueTree_=new ld,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Nb(t,e,n){if(t.stats_=Wf(t.repoInfo_),t.forceRestClient_||uk())t.server_=new pa(t.repoInfo_,(r,i,s,o)=>{Kp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Rt(t.repoInfo_,e,(r,i,s,o)=>{Kp(t,r,i,s,o)},r=>{qp(t,r)},r=>{Tb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pk(t.repoInfo_,()=>new dI(t.stats_,t.server_)),t.infoData_=new aI,t.infoSyncTree_=new Yp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=qa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hd(t,"connected",!1),t.serverSyncTree_=new Yp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Ut(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function N_(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dd(t){return fb({timestamp:N_(t)})}function Kp(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=la(n,u=>ke(u));o=ob(t.serverSyncTree_,s,l,i)}else{const l=ke(n);o=sb(t.serverSyncTree_,s,l,i)}else if(r){const l=la(n,u=>ke(u));o=nb(t.serverSyncTree_,s,l)}else{const l=ke(n);o=qa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Za(t,s)),Ut(t.eventQueue_,a,o)}function qp(t,e){hd(t,"connected",e),e===!1&&Rb(t)}function Tb(t,e){Ve(e,(n,r)=>{hd(t,n,r)})}function hd(t,e,n){const r=new G("/.info/"+e),i=ke(n);t.infoData_.updateSnapshot(r,i);const s=qa(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function T_(t){return t.nextWriteId_++}function Pb(t,e,n,r,i){pd(t,"set",{path:e.toString(),value:n,priority:r});const s=dd(t),o=ke(n,r),a=td(t.serverSyncTree_,e),l=v_(o,a,s),u=T_(t),c=h_(t.serverSyncTree_,e,l,u,!0);fd(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const y=d==="ok";y||He("set at "+e+" failed: "+d);const _=Hn(t.serverSyncTree_,u,!y);Ut(t.eventQueue_,e,_),Db(t,i,d,g)});const f=D_(t,e);Za(t,f),Ut(t.eventQueue_,f,[])}function Rb(t){pd(t,"onDisconnectEvents");const e=dd(t),n=ma();mc(t.onDisconnect_,B(),(i,s)=>{const o=pb(i,s,t.serverSyncTree_,e);Zy(n,i,o)});let r=[];mc(n,B(),(i,s)=>{r=r.concat(qa(t.serverSyncTree_,i,s));const o=D_(t,i);Za(t,o)}),t.onDisconnect_=ma(),Ut(t.eventQueue_,B(),r)}function Ab(t,e,n){let r;M(e._path)===".info"?r=Gp(t.infoSyncTree_,e,n):r=Gp(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function Xp(t,e,n){let r;M(e._path)===".info"?r=Ec(t.infoSyncTree_,e,n):r=Ec(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function Ob(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kb)}function pd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function Db(t,e,n,r){e&&li(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function P_(t,e,n){return td(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function md(t,e=t.transactionQueueTree_){if(e||el(t,e),ui(e)){const n=A_(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Lb(t,js(e),n)}else __(e)&&Ja(e,n=>{md(t,n)})}function Lb(t,e,n){const r=n.map(u=>u.currentWriteId),i=P_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];x(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=ze(e,c.path);s=s.updateChild(f,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{pd(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Hn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();el(t,ud(t.transactionQueueTree_,e)),md(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,c);for(let d=0;d<f.length;d++)li(f[d])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{He("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Za(t,e)}},o)}function Za(t,e){const n=R_(t,e),r=js(n),i=A_(t,n);return Mb(t,i,r),r}function Mb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ze(n,l.path);let c=!1,f;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,f=l.abortReason,i=i.concat(Hn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ib)c=!0,f="maxretry",i=i.concat(Hn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=P_(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){cd("transaction failed: Data returned ",g,l.path);let y=ke(g);typeof g=="object"&&g!=null&&Bt(g,".priority")||(y=y.updatePriority(d.getPriority()));const C=l.currentWriteId,p=dd(t),h=v_(y,d,p);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=T_(t),o.splice(o.indexOf(C),1),i=i.concat(h_(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Hn(t.serverSyncTree_,C,!0))}else c=!0,f="nodata",i=i.concat(Hn(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}el(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)li(r[a]);md(t,t.transactionQueueTree_)}function R_(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&ui(r)===void 0;)r=ud(r,n),e=K(e),n=M(e);return r}function A_(t,e){const n=[];return O_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function O_(t,e,n){const r=ui(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ja(e,i=>{O_(t,i,n)})}function el(t,e){const n=ui(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,y_(e,n.length>0?n:void 0)}Ja(e,r=>{el(t,r)})}function D_(t,e){const n=js(R_(t,e)),r=ud(t.transactionQueueTree_,e);return gb(r,i=>{Gl(t,i)}),Gl(t,r),w_(r,i=>{Gl(t,i)}),n}function Gl(t,e){const n=ui(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?y_(e,void 0):n.length=s+1,Ut(t.eventQueue_,js(e),i);for(let o=0;o<r.length;o++)li(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jp=function(t,e){const n=zb(t),r=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ek();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Dy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},zb=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(c,f)),c<f&&(i=Fb(t.substring(c,f)));const d=jb(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ub=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Zp.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Zp.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class M_{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:By(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=Lp(this._queryParams),n=zf(e);return n==="{}"?"default":n}get _queryObject(){return Lp(this._queryParams)}isEqual(e){if(e=oi(e),!(e instanceof gd))return!1;const n=this._repo===e._repo,r=Bf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Fk(this._path)}}class Ht extends gd{constructor(e,n){super(e,n,new Gf,!1)}get parent(){const e=Vy(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=Jr(this.ref,e);return new Cs(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Cs(i,Jr(this.ref,r),le)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bn(t,e){return t=oi(t),t._checkNotDeleted("ref"),e!==void 0?Jr(t._root,e):t._root}function Jr(t,e){return t=oi(t),M(t._path)===null?Eb("child","path",e,!1):x_("child","path",e,!1),new Ht(t._repo,me(t._path,e))}function Nn(t,e){t=oi(t),k_("push",t._path),S_("push",e,t._path,!0);const n=N_(t._repo),r=Ub(n),i=Jr(t,r),s=Jr(t,r);let o;return e!=null?o=$b(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function $b(t,e){t=oi(t),k_("set",t._path),S_("set",e,t._path,!1);const n=new Va;return Pb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class vd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new L_("value",this,new Cs(e.snapshotNode,new Ht(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M_(this,e,n):null}matches(e){return e instanceof vd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class yd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M_(this,e,n):null}createEvent(e,n){x(e.childName!=null,"Child events should have a childName.");const r=Jr(new Ht(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new L_(e.type,this,new Cs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof yd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Bb(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,f)=>{Xp(t._repo,t,a),l(c,f)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Wb(n,s||void 0),a=e==="value"?new vd(o):new yd(e,o);return Ab(t._repo,t,a),()=>Xp(t._repo,t,a)}function Tn(t,e,n,r){return Bb(t,"value",e,n,r)}GI(Ht);ZI(Ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="FIREBASE_DATABASE_EMULATOR_HOST",Sc={};let Vb=!1;function Yb(t,e,n,r){t.repoInfo_=new Dy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Gb(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jp(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[Hb]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Jp(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Fr(Fr.OWNER):new fk(t.name,t.options,e);Cb("Invalid Firebase Database URL",o),U(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Kb(a,t,c,new ck(t.name,n));return new qb(f,t)}function Qb(t,e){const n=Sc[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ob(t),delete n[t.key]}function Kb(t,e,n,r){let i=Sc[e.name];i||(i={},Sc[e.name]=i);let s=i[t.toURLString()];return s&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new bb(t,Vb,n,r),i[t.toURLString()]=s,s}class qb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Nb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Qb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function Xb(t=zx(),e){const n=Lx(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=bS("database");r&&Jb(n,...r)}return n}function Jb(t,e,n,r={}){t=oi(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Fr(Fr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:NS(r.mockUserToken,t.app.options.projectId);s=new Fr(o)}Yb(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){Kx(jx),ca(new ps("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Gb(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Lr(yp,_p,t),Lr(yp,_p,"esm2017")}Rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Zb();var eN="firebase",tN="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lr(eN,tN,"app");const nN={apiKey:"AIzaSyDgZl7zJnzvIBv93AgtxvXaXxuWakLG8mw",authDomain:"coments-10b24.firebaseapp.com",databaseURL:"https://coments-10b24-default-rtdb.firebaseio.com",projectId:"coments-10b24",storageBucket:"coments-10b24.appspot.com",messagingSenderId:"213575273623",appId:"1:213575273623:web:b8c67515ebb8f83c3b2dd2",measurementId:"G-1VN2CD5N6M"},rN=gy(nN),Pn=Xb(rN),iN="_driv_1paw0_3",sN="_h2o_1paw0_13",oN="_ul1_1paw0_21",aN="_lid_1paw0_35",lN="_form1_1paw0_45",uN="_input1_1paw0_59",cN="_button1_1paw0_77",fN="_li1_1paw0_107",On={driv:iN,h2o:sN,ul1:oN,lid:aN,form1:lN,input1:uN,button1:cN,li1:fN};function dN(){const[t,e]=k.useState(""),[n,r]=k.useState([]),i=bn(Pn,"comentarios"),s=async o=>{o.preventDefault(),Nn(i,{texto:t}),e("")};return k.useEffect(()=>{Tn(i,o=>{const a=o.val();if(a){const l=Object.values(a);r(l.reverse())}else r([])})},[]),v.jsxs("div",{className:On.driv,children:[v.jsx("h2",{className:On.h2o,children:"Comentários"}),v.jsxs("form",{className:On.form1,onSubmit:s,children:[v.jsx("input",{className:On.input1,type:"text",placeholder:"Digite seu comentário",value:t,onChange:o=>e(o.target.value)}),v.jsx("button",{className:On.button1,type:"submit",children:"Enviar"})]}),v.jsx("ul",{className:On.ul1,children:n.map((o,a)=>v.jsx("li",{className:On.li1,children:o.texto},a))})]})}const hN="_driv_1paw0_3",pN="_h2o_1paw0_13",mN="_ul1_1paw0_21",gN="_lid_1paw0_35",vN="_form1_1paw0_45",yN="_input1_1paw0_59",_N="_button1_1paw0_77",wN="_li1_1paw0_107",Y={driv:hN,h2o:pN,ul1:mN,lid:gN,form1:vN,input1:yN,button1:_N,li1:wN};function EN(){const[t,e]=k.useState(""),[n,r]=k.useState([]),i=bn(Pn,"coments/nsfw/gay"),s=async o=>{o.preventDefault(),Nn(i,{texto:t}),e("")};return k.useEffect(()=>{Tn(i,o=>{const a=o.val();if(a){const l=Object.values(a);r(l.reverse())}else r([])})},[]),v.jsxs(v.Fragment,{children:[v.jsx(In,{}),v.jsxs("div",{className:Y.driv,children:[v.jsx("h2",{className:Y.h2o,children:"Comentários para Gay (NSFW)"}),v.jsxs("form",{className:Y.form1,onSubmit:s,children:[v.jsx("input",{className:Y.input1,type:"text",placeholder:"Digite seu comentário",value:t,onChange:o=>e(o.target.value)}),v.jsx("button",{className:Y.button1,type:"submit",children:"Enviar"})]}),v.jsx("ul",{className:Y.ul1,children:n.map((o,a)=>v.jsx("li",{className:Y.li1,children:o.texto},a))})]}),v.jsx(kn,{})]})}function CN(){const[t,e]=k.useState(""),[n,r]=k.useState([]),i=bn(Pn,"coments/nsfw/hetero"),s=async o=>{o.preventDefault(),Nn(i,{texto:t}),e("")};return k.useEffect(()=>{Tn(i,o=>{const a=o.val();if(a){const l=Object.values(a);r(l.reverse())}else r([])})},[]),v.jsxs(v.Fragment,{children:[v.jsx(In,{}),v.jsxs("div",{className:Y.driv,children:[v.jsx("h2",{className:Y.h2o,children:"Comentários para Hetero (NSFW)"}),v.jsxs("form",{className:Y.form1,onSubmit:s,children:[v.jsx("input",{className:Y.input1,type:"text",placeholder:"Digite seu comentário",value:t,onChange:o=>e(o.target.value)}),v.jsx("button",{className:Y.button1,type:"submit",children:"Enviar"})]}),v.jsx("ul",{className:Y.ul1,children:n.map((o,a)=>v.jsx("li",{className:Y.li1,children:o.texto},a))})]}),v.jsx(kn,{})]})}function SN(){const[t,e]=k.useState(""),[n,r]=k.useState([]),i=bn(Pn,"coments/nsfw/lesbico"),s=async o=>{o.preventDefault(),Nn(i,{texto:t}),e("")};return k.useEffect(()=>{Tn(i,o=>{const a=o.val();if(a){const l=Object.values(a);r(l.reverse())}else r([])})},[]),v.jsxs(v.Fragment,{children:[v.jsx(In,{}),v.jsxs("div",{className:Y.driv,children:[v.jsx("h2",{className:Y.h2o,children:"Comentários para Lesbico (NSFW)"}),v.jsxs("form",{className:Y.form1,onSubmit:s,children:[v.jsx("input",{className:Y.input1,type:"text",placeholder:"Digite seu comentário",value:t,onChange:o=>e(o.target.value)}),v.jsx("button",{className:Y.button1,type:"submit",children:"Enviar"})]}),v.jsx("ul",{className:Y.ul1,children:n.map((o,a)=>v.jsx("li",{className:Y.li1,children:o.texto},a))})]}),v.jsx(kn,{})]})}function xN(){const[t,e]=k.useState(""),[n,r]=k.useState([]),i=bn(Pn,"coments/nsfw/futa"),s=async o=>{o.preventDefault(),Nn(i,{texto:t}),e("")};return k.useEffect(()=>{Tn(i,o=>{const a=o.val();if(a){const l=Object.values(a);r(l.reverse())}else r([])})},[]),v.jsxs(v.Fragment,{children:[v.jsx(In,{}),v.jsxs("div",{className:Y.driv,children:[v.jsx("h2",{className:Y.h2o,children:"Comentários para Futa (NSFW)"}),v.jsxs("form",{className:Y.form1,onSubmit:s,children:[v.jsx("input",{className:Y.input1,type:"text",placeholder:"Digite seu comentário",value:t,onChange:o=>e(o.target.value)}),v.jsx("button",{className:Y.button1,type:"submit",children:"Enviar"})]}),v.jsx("ul",{className:Y.ul1,children:n.map((o,a)=>v.jsx("li",{className:Y.li1,children:o.texto},a))})]}),v.jsx(kn,{})]})}const kN="_driv_1paw0_3",IN="_h2o_1paw0_13",bN="_ul1_1paw0_21",NN="_lid_1paw0_35",TN="_form1_1paw0_45",PN="_input1_1paw0_59",RN="_button1_1paw0_77",AN="_li1_1paw0_107",ce={driv:kN,h2o:IN,ul1:bN,lid:NN,form1:TN,input1:PN,button1:RN,li1:AN};function ON(){const[t,e]=k.useState(""),[n,r]=k.useState([]),i=bn(Pn,"coments/sfw/gay"),s=async o=>{o.preventDefault(),Nn(i,{texto:t}),e("")};return k.useEffect(()=>{Tn(i,o=>{const a=o.val();if(a){const l=Object.values(a);r(l.reverse())}else r([])})},[]),v.jsxs(v.Fragment,{children:[v.jsx(In,{}),v.jsxs("div",{className:ce.driv,children:[v.jsx("h2",{className:ce.h2o,children:"Comentários para Gay (SFW)"}),v.jsxs("form",{className:ce.form1,onSubmit:s,children:[v.jsx("input",{className:ce.input1,type:"text",placeholder:"Digite seu comentário",value:t,onChange:o=>e(o.target.value)}),v.jsx("button",{className:ce.button1,type:"submit",children:"Enviar"})]}),v.jsx("ul",{className:ce.ul1,children:n.map((o,a)=>v.jsx("li",{className:ce.li1,children:o.texto},a))})]}),v.jsx(kn,{})]})}function DN(){const[t,e]=k.useState(""),[n,r]=k.useState([]),i=bn(Pn,"coments/sfw/hetero"),s=async o=>{o.preventDefault(),Nn(i,{texto:t}),e("")};return k.useEffect(()=>{Tn(i,o=>{const a=o.val();if(a){const l=Object.values(a);r(l.reverse())}else r([])})},[]),v.jsxs(v.Fragment,{children:[v.jsx(In,{}),v.jsxs("div",{className:ce.driv,children:[v.jsx("h2",{className:ce.h2o,children:"Comentários para Hetero (SFW)"}),v.jsxs("form",{className:ce.form1,onSubmit:s,children:[v.jsx("input",{className:ce.input1,type:"text",placeholder:"Digite seu comentário",value:t,onChange:o=>e(o.target.value)}),v.jsx("button",{className:ce.button1,type:"submit",children:"Enviar"})]}),v.jsx("ul",{className:ce.ul1,children:n.map((o,a)=>v.jsx("li",{className:ce.li1,children:o.texto},a))})]}),v.jsx(kn,{})]})}function LN(){const[t,e]=k.useState(""),[n,r]=k.useState([]),i=bn(Pn,"coments/sfw/lesbica"),s=async o=>{o.preventDefault(),Nn(i,{texto:t}),e("")};return k.useEffect(()=>{Tn(i,o=>{const a=o.val();if(a){const l=Object.values(a);r(l.reverse())}else r([])})},[]),v.jsxs(v.Fragment,{children:[v.jsx(In,{}),v.jsxs("div",{className:ce.driv,children:[v.jsx("h2",{className:ce.h2o,children:"Comentários para Lesbica (SFW)"}),v.jsxs("form",{className:ce.form1,onSubmit:s,children:[v.jsx("input",{className:ce.input1,type:"text",placeholder:"Digite seu comentário",value:t,onChange:o=>e(o.target.value)}),v.jsx("button",{className:ce.button1,type:"submit",children:"Enviar"})]}),v.jsx("ul",{className:ce.ul1,children:n.map((o,a)=>v.jsx("li",{className:ce.li1,children:o.texto},a))})]}),v.jsx(kn,{})]})}const MN=()=>v.jsx(v.Fragment,{children:v.jsx("h1",{children:"fodase"})}),FN=()=>v.jsxs(Zw,{children:[v.jsx(Ye,{path:"/furbr",element:v.jsx(fE,{})}),v.jsx(Ye,{path:"/furbr/header",element:v.jsx(In,{})}),v.jsx(Ye,{path:"/furbr/gay",element:v.jsx(EN,{})}),v.jsx(Ye,{path:"/furbr/hetero",element:v.jsx(CN,{})}),v.jsx(Ye,{path:"/furbr/lesbi",element:v.jsx(SN,{})}),v.jsx(Ye,{path:"/furbr/futa",element:v.jsx(xN,{})}),v.jsx(Ye,{path:"/furbr/gay_",element:v.jsx(ON,{})}),v.jsx(Ye,{path:"/furbr/hetero_",element:v.jsx(DN,{})}),v.jsx(Ye,{path:"/furbr/lesbi_",element:v.jsx(LN,{})}),v.jsx(Ye,{path:"/furbr/coment",element:v.jsx(dN,{})}),v.jsx(Ye,{path:"/furbr/testt",element:v.jsx(MN,{})}),v.jsx(Ye,{path:"*",element:v.jsx(vS,{})})]});Ql.createRoot(document.getElementById("root")).render(v.jsx(sE,{children:v.jsx(FN,{})}));
