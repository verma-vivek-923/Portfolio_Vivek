(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=o(c);fetch(c.href,u)}})();var wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ev(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Th={exports:{}},jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function tv(){if(Ag)return jl;Ag=1;var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(a,c,u){var f=null;if(u!==void 0&&(f=""+u),c.key!==void 0&&(f=""+c.key),"key"in c){u={};for(var p in c)p!=="key"&&(u[p]=c[p])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:f,ref:c!==void 0?c:null,props:u}}return jl.Fragment=s,jl.jsx=o,jl.jsxs=o,jl}var Dg;function nv(){return Dg||(Dg=1,Th.exports=tv()),Th.exports}var r=nv(),Eh={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function sv(){if(Lg)return _t;Lg=1;var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(A){return A===null||typeof A!="object"?null:(A=y&&A[y]||A["@@iterator"],typeof A=="function"?A:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function M(A,ie,Ce){this.props=A,this.context=ie,this.refs=T,this.updater=Ce||w}M.prototype.isReactComponent={},M.prototype.setState=function(A,ie){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,ie,"setState")},M.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function C(){}C.prototype=M.prototype;function z(A,ie,Ce){this.props=A,this.context=ie,this.refs=T,this.updater=Ce||w}var O=z.prototype=new C;O.constructor=z,S(O,M.prototype),O.isPureReactComponent=!0;var L=Array.isArray,$={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function P(A,ie,Ce,Se,ve,Ze){return Ce=Ze.ref,{$$typeof:t,type:A,key:ie,ref:Ce!==void 0?Ce:null,props:Ze}}function te(A,ie){return P(A.type,ie,void 0,void 0,void 0,A.props)}function F(A){return typeof A=="object"&&A!==null&&A.$$typeof===t}function Q(A){var ie={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Ce){return ie[Ce]})}var ee=/\/+/g;function G(A,ie){return typeof A=="object"&&A!==null&&A.key!=null?Q(""+A.key):ie.toString(36)}function ge(){}function ce(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ge,ge):(A.status="pending",A.then(function(ie){A.status==="pending"&&(A.status="fulfilled",A.value=ie)},function(ie){A.status==="pending"&&(A.status="rejected",A.reason=ie)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Re(A,ie,Ce,Se,ve){var Ze=typeof A;(Ze==="undefined"||Ze==="boolean")&&(A=null);var Fe=!1;if(A===null)Fe=!0;else switch(Ze){case"bigint":case"string":case"number":Fe=!0;break;case"object":switch(A.$$typeof){case t:case s:Fe=!0;break;case g:return Fe=A._init,Re(Fe(A._payload),ie,Ce,Se,ve)}}if(Fe)return ve=ve(A),Fe=Se===""?"."+G(A,0):Se,L(ve)?(Ce="",Fe!=null&&(Ce=Fe.replace(ee,"$&/")+"/"),Re(ve,ie,Ce,"",function(ft){return ft})):ve!=null&&(F(ve)&&(ve=te(ve,Ce+(ve.key==null||A&&A.key===ve.key?"":(""+ve.key).replace(ee,"$&/")+"/")+Fe)),ie.push(ve)),1;Fe=0;var Et=Se===""?".":Se+":";if(L(A))for(var Be=0;Be<A.length;Be++)Se=A[Be],Ze=Et+G(Se,Be),Fe+=Re(Se,ie,Ce,Ze,ve);else if(Be=x(A),typeof Be=="function")for(A=Be.call(A),Be=0;!(Se=A.next()).done;)Se=Se.value,Ze=Et+G(Se,Be++),Fe+=Re(Se,ie,Ce,Ze,ve);else if(Ze==="object"){if(typeof A.then=="function")return Re(ce(A),ie,Ce,Se,ve);throw ie=String(A),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Fe}function J(A,ie,Ce){if(A==null)return A;var Se=[],ve=0;return Re(A,Se,"","",function(Ze){return ie.call(Ce,Ze,ve++)}),Se}function ye(A){if(A._status===-1){var ie=A._result;ie=ie(),ie.then(function(Ce){(A._status===0||A._status===-1)&&(A._status=1,A._result=Ce)},function(Ce){(A._status===0||A._status===-1)&&(A._status=2,A._result=Ce)}),A._status===-1&&(A._status=0,A._result=ie)}if(A._status===1)return A._result.default;throw A._result}var K=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function be(){}return _t.Children={map:J,forEach:function(A,ie,Ce){J(A,function(){ie.apply(this,arguments)},Ce)},count:function(A){var ie=0;return J(A,function(){ie++}),ie},toArray:function(A){return J(A,function(ie){return ie})||[]},only:function(A){if(!F(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},_t.Component=M,_t.Fragment=o,_t.Profiler=c,_t.PureComponent=z,_t.StrictMode=a,_t.Suspense=h,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,_t.act=function(){throw Error("act(...) is not supported in production builds of React.")},_t.cache=function(A){return function(){return A.apply(null,arguments)}},_t.cloneElement=function(A,ie,Ce){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Se=S({},A.props),ve=A.key,Ze=void 0;if(ie!=null)for(Fe in ie.ref!==void 0&&(Ze=void 0),ie.key!==void 0&&(ve=""+ie.key),ie)!W.call(ie,Fe)||Fe==="key"||Fe==="__self"||Fe==="__source"||Fe==="ref"&&ie.ref===void 0||(Se[Fe]=ie[Fe]);var Fe=arguments.length-2;if(Fe===1)Se.children=Ce;else if(1<Fe){for(var Et=Array(Fe),Be=0;Be<Fe;Be++)Et[Be]=arguments[Be+2];Se.children=Et}return P(A.type,ve,void 0,void 0,Ze,Se)},_t.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},_t.createElement=function(A,ie,Ce){var Se,ve={},Ze=null;if(ie!=null)for(Se in ie.key!==void 0&&(Ze=""+ie.key),ie)W.call(ie,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(ve[Se]=ie[Se]);var Fe=arguments.length-2;if(Fe===1)ve.children=Ce;else if(1<Fe){for(var Et=Array(Fe),Be=0;Be<Fe;Be++)Et[Be]=arguments[Be+2];ve.children=Et}if(A&&A.defaultProps)for(Se in Fe=A.defaultProps,Fe)ve[Se]===void 0&&(ve[Se]=Fe[Se]);return P(A,Ze,void 0,void 0,null,ve)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(A){return{$$typeof:p,render:A}},_t.isValidElement=F,_t.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:ye}},_t.memo=function(A,ie){return{$$typeof:_,type:A,compare:ie===void 0?null:ie}},_t.startTransition=function(A){var ie=$.T,Ce={};$.T=Ce;try{var Se=A(),ve=$.S;ve!==null&&ve(Ce,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(be,K)}catch(Ze){K(Ze)}finally{$.T=ie}},_t.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},_t.use=function(A){return $.H.use(A)},_t.useActionState=function(A,ie,Ce){return $.H.useActionState(A,ie,Ce)},_t.useCallback=function(A,ie){return $.H.useCallback(A,ie)},_t.useContext=function(A){return $.H.useContext(A)},_t.useDebugValue=function(){},_t.useDeferredValue=function(A,ie){return $.H.useDeferredValue(A,ie)},_t.useEffect=function(A,ie){return $.H.useEffect(A,ie)},_t.useId=function(){return $.H.useId()},_t.useImperativeHandle=function(A,ie,Ce){return $.H.useImperativeHandle(A,ie,Ce)},_t.useInsertionEffect=function(A,ie){return $.H.useInsertionEffect(A,ie)},_t.useLayoutEffect=function(A,ie){return $.H.useLayoutEffect(A,ie)},_t.useMemo=function(A,ie){return $.H.useMemo(A,ie)},_t.useOptimistic=function(A,ie){return $.H.useOptimistic(A,ie)},_t.useReducer=function(A,ie,Ce){return $.H.useReducer(A,ie,Ce)},_t.useRef=function(A){return $.H.useRef(A)},_t.useState=function(A){return $.H.useState(A)},_t.useSyncExternalStore=function(A,ie,Ce){return $.H.useSyncExternalStore(A,ie,Ce)},_t.useTransition=function(){return $.H.useTransition()},_t.version="19.0.0",_t}var Og;function Qi(){return Og||(Og=1,Eh.exports=sv()),Eh.exports}var b=Qi();const ii=ev(b);var Mh={exports:{}},Cl={},Rh={exports:{}},Nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function iv(){return Bg||(Bg=1,function(t){function s(J,ye){var K=J.length;J.push(ye);e:for(;0<K;){var be=K-1>>>1,A=J[be];if(0<c(A,ye))J[be]=ye,J[K]=A,K=be;else break e}}function o(J){return J.length===0?null:J[0]}function a(J){if(J.length===0)return null;var ye=J[0],K=J.pop();if(K!==ye){J[0]=K;e:for(var be=0,A=J.length,ie=A>>>1;be<ie;){var Ce=2*(be+1)-1,Se=J[Ce],ve=Ce+1,Ze=J[ve];if(0>c(Se,K))ve<A&&0>c(Ze,Se)?(J[be]=Ze,J[ve]=K,be=ve):(J[be]=Se,J[Ce]=K,be=Ce);else if(ve<A&&0>c(Ze,K))J[be]=Ze,J[ve]=K,be=ve;else break e}}return ye}function c(J,ye){var K=J.sortIndex-ye.sortIndex;return K!==0?K:J.id-ye.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();t.unstable_now=function(){return f.now()-p}}var h=[],_=[],g=1,y=null,x=3,w=!1,S=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function O(J){for(var ye=o(_);ye!==null;){if(ye.callback===null)a(_);else if(ye.startTime<=J)a(_),ye.sortIndex=ye.expirationTime,s(h,ye);else break;ye=o(_)}}function L(J){if(T=!1,O(J),!S)if(o(h)!==null)S=!0,ce();else{var ye=o(_);ye!==null&&Re(L,ye.startTime-J)}}var $=!1,W=-1,P=5,te=-1;function F(){return!(t.unstable_now()-te<P)}function Q(){if($){var J=t.unstable_now();te=J;var ye=!0;try{e:{S=!1,T&&(T=!1,C(W),W=-1),w=!0;var K=x;try{t:{for(O(J),y=o(h);y!==null&&!(y.expirationTime>J&&F());){var be=y.callback;if(typeof be=="function"){y.callback=null,x=y.priorityLevel;var A=be(y.expirationTime<=J);if(J=t.unstable_now(),typeof A=="function"){y.callback=A,O(J),ye=!0;break t}y===o(h)&&a(h),O(J)}else a(h);y=o(h)}if(y!==null)ye=!0;else{var ie=o(_);ie!==null&&Re(L,ie.startTime-J),ye=!1}}break e}finally{y=null,x=K,w=!1}ye=void 0}}finally{ye?ee():$=!1}}}var ee;if(typeof z=="function")ee=function(){z(Q)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ge=G.port2;G.port1.onmessage=Q,ee=function(){ge.postMessage(null)}}else ee=function(){M(Q,0)};function ce(){$||($=!0,ee())}function Re(J,ye){W=M(function(){J(t.unstable_now())},ye)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(J){J.callback=null},t.unstable_continueExecution=function(){S||w||(S=!0,ce())},t.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<J?Math.floor(1e3/J):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return o(h)},t.unstable_next=function(J){switch(x){case 1:case 2:case 3:var ye=3;break;default:ye=x}var K=x;x=ye;try{return J()}finally{x=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(J,ye){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var K=x;x=J;try{return ye()}finally{x=K}},t.unstable_scheduleCallback=function(J,ye,K){var be=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?be+K:be):K=be,J){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=K+A,J={id:g++,callback:ye,priorityLevel:J,startTime:K,expirationTime:A,sortIndex:-1},K>be?(J.sortIndex=K,s(_,J),o(h)===null&&J===o(_)&&(T?(C(W),W=-1):T=!0,Re(L,K-be))):(J.sortIndex=A,s(h,J),S||w||(S=!0,ce())),J},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(J){var ye=x;return function(){var K=x;x=ye;try{return J.apply(this,arguments)}finally{x=K}}}}(Nh)),Nh}var zg;function ov(){return zg||(zg=1,Rh.exports=iv()),Rh.exports}var Ah={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function av(){if($g)return Jn;$g=1;var t=Qi();function s(h){var _="https://react.dev/errors/"+h;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)_+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(s(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(h,_,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:h,containerInfo:_,implementation:g}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,_){if(h==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Jn.createPortal=function(h,_){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(s(299));return u(h,_,null,g)},Jn.flushSync=function(h){var _=f.T,g=a.p;try{if(f.T=null,a.p=2,h)return h()}finally{f.T=_,a.p=g,a.d.f()}},Jn.preconnect=function(h,_){typeof h=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,a.d.C(h,_))},Jn.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},Jn.preinit=function(h,_){if(typeof h=="string"&&_&&typeof _.as=="string"){var g=_.as,y=p(g,_.crossOrigin),x=typeof _.integrity=="string"?_.integrity:void 0,w=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;g==="style"?a.d.S(h,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:w}):g==="script"&&a.d.X(h,{crossOrigin:y,integrity:x,fetchPriority:w,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Jn.preinitModule=function(h,_){if(typeof h=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var g=p(_.as,_.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&a.d.M(h)},Jn.preload=function(h,_){if(typeof h=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var g=_.as,y=p(g,_.crossOrigin);a.d.L(h,g,{crossOrigin:y,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Jn.preloadModule=function(h,_){if(typeof h=="string")if(_){var g=p(_.as,_.crossOrigin);a.d.m(h,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else a.d.m(h)},Jn.requestFormReset=function(h){a.d.r(h)},Jn.unstable_batchedUpdates=function(h,_){return h(_)},Jn.useFormState=function(h,_,g){return f.H.useFormState(h,_,g)},Jn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Jn.version="19.0.0",Jn}var Pg;function vd(){if(Pg)return Ah.exports;Pg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(s){console.error(s)}}return t(),Ah.exports=av(),Ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function rv(){if(Hg)return Cl;Hg=1;var t=ov(),s=Qi(),o=vd();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),L=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var P=Symbol.for("react.client.reference");function te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===P?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case p:return"Portal";case g:return"Profiler";case _:return"StrictMode";case T:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return n=e.displayName||null,n!==null?n:te(e.type)||"Memo";case z:n=e._payload,e=e._init;try{return te(e(n))}catch{}}return null}var F=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=Object.assign,ee,G;function ge(e){if(ee===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);ee=n&&n[1]||"",G=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+G}var ce=!1;function Re(e,n){if(!e||ce)return"";ce=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(oe){var Z=oe}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(oe){Z=oe}e.call(pe.prototype)}}else{try{throw Error()}catch(oe){Z=oe}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(oe){if(oe&&Z&&typeof oe.stack=="string")return[oe.stack,Z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),v=m[0],k=m[1];if(v&&k){var N=v.split(`
`),I=k.split(`
`);for(d=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;d<I.length&&!I[d].includes("DetermineComponentFrameRoot");)d++;if(l===N.length||d===I.length)for(l=N.length-1,d=I.length-1;1<=l&&0<=d&&N[l]!==I[d];)d--;for(;1<=l&&0<=d;l--,d--)if(N[l]!==I[d]){if(l!==1||d!==1)do if(l--,d--,0>d||N[l]!==I[d]){var re=`
`+N[l].replace(" at new "," at ");return e.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",e.displayName)),re}while(1<=l&&0<=d);break}}}finally{ce=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?ge(i):""}function J(e){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return e=Re(e.type,!1),e;case 11:return e=Re(e.type.render,!1),e;case 1:return e=Re(e.type,!0),e;default:return""}}function ye(e){try{var n="";do n+=J(e),e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function K(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function be(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function A(e){if(K(e)!==e)throw Error(a(188))}function ie(e){var n=e.alternate;if(!n){if(n=K(e),n===null)throw Error(a(188));return n!==e?null:e}for(var i=e,l=n;;){var d=i.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){i=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===i)return A(d),e;if(m===l)return A(d),n;m=m.sibling}throw Error(a(188))}if(i.return!==l.return)i=d,l=m;else{for(var v=!1,k=d.child;k;){if(k===i){v=!0,i=d,l=m;break}if(k===l){v=!0,l=d,i=m;break}k=k.sibling}if(!v){for(k=m.child;k;){if(k===i){v=!0,i=m,l=d;break}if(k===l){v=!0,l=m,i=d;break}k=k.sibling}if(!v)throw Error(a(189))}}if(i.alternate!==l)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?e:n}function Ce(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Ce(e),n!==null)return n;e=e.sibling}return null}var Se=Array.isArray,ve=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ze={pending:!1,data:null,method:null,action:null},Fe=[],Et=-1;function Be(e){return{current:e}}function ft(e){0>Et||(e.current=Fe[Et],Fe[Et]=null,Et--)}function ht(e,n){Et++,Fe[Et]=e.current,e.current=n}var $t=Be(null),At=Be(null),nn=Be(null),yn=Be(null);function ps(e,n){switch(ht(nn,n),ht(At,e),ht($t,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?rg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=rg(e),n=lg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ft($t),ht($t,n)}function qn(){ft($t),ft(At),ft(nn)}function Es(e){e.memoizedState!==null&&ht(yn,e);var n=$t.current,i=lg(n,e.type);n!==i&&(ht(At,e),ht($t,i))}function se(e){At.current===e&&(ft($t),ft(At)),yn.current===e&&(ft(yn),bl._currentValue=Ze)}var Pe=Object.prototype.hasOwnProperty,it=t.unstable_scheduleCallback,Xe=t.unstable_cancelCallback,St=t.unstable_shouldYield,ut=t.unstable_requestPaint,ot=t.unstable_now,ct=t.unstable_getCurrentPriorityLevel,Mt=t.unstable_ImmediatePriority,qt=t.unstable_UserBlockingPriority,$e=t.unstable_NormalPriority,Y=t.unstable_LowPriority,q=t.unstable_IdlePriority,ue=t.log,he=t.unstable_setDisableYieldValue,De=null,ke=null;function xe(e){if(ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(De,e,void 0,(e.current.flags&128)===128)}catch{}}function at(e){if(typeof ue=="function"&&he(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(De,e)}catch{}}var Ye=Math.clz32?Math.clz32:Ne,kt=Math.log,Ge=Math.LN2;function Ne(e){return e>>>=0,e===0?32:31-(kt(e)/Ge|0)|0}var gt=128,jt=4194304;function It(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ee(e,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,d=e.suspendedLanes,m=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var k=i&134217727;return k!==0?(i=k&~d,i!==0?l=It(i):(m&=k,m!==0?l=It(m):e||(v=k&~v,v!==0&&(l=It(v))))):(k=i&~d,k!==0?l=It(k):m!==0?l=It(m):e||(v=i&~v,v!==0&&(l=It(v)))),l===0?0:n!==0&&n!==l&&!(n&d)&&(d=l&-l,v=n&-n,d>=v||d===32&&(v&4194176)!==0)?n:l}function mt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function pt(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=gt;return gt<<=1,!(gt&4194176)&&(gt=128),e}function cn(){var e=jt;return jt<<=1,!(jt&62914560)&&(jt=4194304),e}function Ue(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function yt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kn(e,n,i,l,d,m){var v=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var k=e.entanglements,N=e.expirationTimes,I=e.hiddenUpdates;for(i=v&~i;0<i;){var re=31-Ye(i),pe=1<<re;k[re]=0,N[re]=-1;var Z=I[re];if(Z!==null)for(I[re]=null,re=0;re<Z.length;re++){var oe=Z[re];oe!==null&&(oe.lane&=-536870913)}i&=~pe}l!==0&&$n(e,l,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~n))}function $n(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Ye(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|i&4194218}function Dn(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-Ye(i),d=1<<l;d&n|e[l]&n&&(e[l]|=n),i&=~d}}function Ti(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ms(){var e=ve.p;return e!==0?e:(e=window.event,e===void 0?32:Cg(e.type))}function ts(e,n){var i=ve.p;try{return ve.p=e,n()}finally{ve.p=i}}var Ot=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Ot,Qt="__reactProps$"+Ot,_s="__reactContainer$"+Ot,Te="__reactEvents$"+Ot,ls="__reactListeners$"+Ot,jr="__reactHandles$"+Ot,ka="__reactResources$"+Ot,gs="__reactMarker$"+Ot;function Cr(e){delete e[Vt],delete e[Qt],delete e[Te],delete e[ls],delete e[jr]}function ai(e){var n=e[Vt];if(n)return n;for(var i=e.parentNode;i;){if(n=i[_s]||i[Vt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=dg(e);e!==null;){if(i=e[Vt])return i;e=dg(e)}return n}e=i,i=e.parentNode}return null}function Gi(e){if(e=e[Vt]||e[_s]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function $o(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Ki(e){var n=e[ka];return n||(n=e[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xn(e){e[gs]=!0}var cc=new Set,Tr={};function ys(e,n){Fs(e,n),Fs(e+"Capture",n)}function Fs(e,n){for(Tr[e]=n,e=0;e<n.length;e++)cc.add(n[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Er={},Zi={};function Po(e){return Pe.call(Zi,e)?!0:Pe.call(Er,e)?!1:ja.test(e)?Zi[e]=!0:(Er[e]=!0,!1)}function ri(e,n,i){if(Po(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function Qn(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function xs(e,n,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+l)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ad(e){var n=uc(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,m=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){l=""+v,m.call(this,v)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ho(e){e._valueTracker||(e._valueTracker=Ad(e))}function Dd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=uc(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var dc=/[\n"\\]/g;function ns(e){return e.replace(dc,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function li(e,n,i,l,d,m,v,k){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?ci(e,v,sn(n)):i!=null?ci(e,v,sn(i)):l!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?e.name=""+sn(k):e.removeAttribute("name")}function un(e,n,i,l,d,m,v,k){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),n!=null||i!=null){if(!(m!=="submit"&&m!=="reset"||n!=null))return;i=i!=null?""+sn(i):"",n=n!=null?""+sn(n):i,k||n===e.value||(e.value=n),e.defaultValue=n}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=k?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function ci(e,n,i){n==="number"&&Ji(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Vn(e,n,i,l){if(e=e.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<e.length;i++)d=n.hasOwnProperty("$"+e[i].value),e[i].selected!==d&&(e[i].selected=d),d&&l&&(e[i].defaultSelected=!0)}else{for(i=""+sn(i),n=null,d=0;d<e.length;d++){if(e[d].value===i){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function Ln(e,n,i){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+sn(i):""}function fc(e,n,i,l){if(n==null){if(l!=null){if(i!=null)throw Error(a(92));if(Se(l)){if(1<l.length)throw Error(a(93));l=l[0]}i=l}i==null&&(i=""),n=i}i=sn(n),e.defaultValue=i,l=e.textContent,l===i&&l!==""&&l!==null&&(e.value=l)}function eo(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Ld=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xt(e,n,i){var l=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,i):typeof i!="number"||i===0||Ld.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function hc(e,n,i){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in n)l=n[d],n.hasOwnProperty(d)&&i[d]!==l&&xt(e,d,l)}else for(var m in n)n.hasOwnProperty(m)&&xt(e,m,n[m])}function cs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(e){return pc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mr=null;function Rr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var us=null,Jt=null;function Ca(e){var n=Gi(e);if(n&&(e=n.stateNode)){var i=e[Qt]||null;e:switch(e=n.stateNode,n.type){case"input":if(li(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ns(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var d=l[Qt]||null;if(!d)throw Error(a(90));li(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<i.length;n++)l=i[n],l.form===e.form&&Dd(l)}break e;case"textarea":Ln(e,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Vn(e,!!i.multiple,n,!1)}}}var Ta=!1;function ds(e,n,i){if(Ta)return e(n,i);Ta=!0;try{var l=e(n);return l}finally{if(Ta=!1,(us!==null||Jt!==null)&&(nu(),us&&(n=us,e=Jt,Jt=us=null,Ca(n),e)))for(n=0;n<e.length;n++)Ca(e[n])}}function bs(e,n){var i=e.stateNode;if(i===null)return null;var l=i[Qt]||null;if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(a(231,n,typeof i));return i}var Bt=!1;if(jn)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Bt=!1}var Gn=null,Ea=null,Xs=null;function Nr(){if(Xs)return Xs;var e,n=Ea,i=n.length,l,d="value"in Gn?Gn.value:Gn.textContent,m=d.length;for(e=0;e<i&&n[e]===d[e];e++);var v=i-e;for(l=1;l<=v&&n[i-l]===d[m-l];l++);return Xs=d.slice(e,1<l?1-l:void 0)}function to(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function no(){return!1}function Un(e){function n(i,l,d,m,v){this._reactName=i,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(i=e[k],this[k]=i?i(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vo:no,this.isPropagationStopped=no,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),n}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=Un(Rs),di=Q({},Rs,{view:0,detail:0}),Od=Un(di),fi,vs,so,qs=Q({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(fi=e.screenX-so.screenX,vs=e.screenY-so.screenY):vs=fi=0,so=e),fi)},movementY:function(e){return"movementY"in e?e.movementY:vs}}),ws=Un(qs),Uo=Q({},qs,{dataTransfer:0}),Yo=Un(Uo),Ma=Q({},di,{relatedTarget:0}),Ra=Un(Ma),Na=Q({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),_c=Un(Na),Ar=Q({},Rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bd=Un(Ar),gc=Q({},Rs,{data:0}),Dr=Un(gc),Wo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ke={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lr[e])?!!n[e]:!1}function Or(){return yc}var Br=Q({},di,{key:function(e){if(e.key){var n=Wo[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ke[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Or,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),io=Un(Br),Aa=Q({},qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zr=Un(Aa),xc=Q({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Or}),Da=Un(xc),$r=Q({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),bc=Un($r),La=Q({},qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ns=Un(La),zd=Q({},Rs,{newState:0,oldState:0}),Pr=Un(zd),Hr=[9,13,27,32],oo=jn&&"CompositionEvent"in window,Fo=null;jn&&"documentMode"in document&&(Fo=document.documentMode);var $d=jn&&"TextEvent"in window&&!Fo,hi=jn&&(!oo||Fo&&8<Fo&&11>=Fo),Oa=" ",Ba=!1;function vc(e,n){switch(e){case"keyup":return Hr.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ao(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ss=!1;function Pd(e,n){switch(e){case"compositionend":return ao(n);case"keypress":return n.which!==32?null:(Ba=!0,Oa);case"textInput":return e=n.data,e===Oa&&Ba?null:e;default:return null}}function wc(e,n){if(Ss)return e==="compositionend"||!oo&&vc(e,n)?(e=Nr(),Xs=Ea=Gn=null,Ss=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hi&&n.locale!=="ko"?null:n.data;default:return null}}var Sc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ir(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sc[e.type]:n==="textarea"}function Vr(e,n,i,l){us?Jt?Jt.push(l):Jt=[l]:us=l,n=ru(n,"onChange"),0<n.length&&(i=new ui("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var ro=null,lo=null;function kc(e){ng(e,0)}function Xo(e){var n=$o(e);if(Dd(n))return e}function j(e,n){if(e==="change")return n}var R=!1;if(jn){var B;if(jn){var D="oninput"in document;if(!D){var V=document.createElement("div");V.setAttribute("oninput","return;"),D=typeof V.oninput=="function"}B=D}else B=!1;R=B&&(!document.documentMode||9<document.documentMode)}function ne(){ro&&(ro.detachEvent("onpropertychange",_e),lo=ro=null)}function _e(e){if(e.propertyName==="value"&&Xo(lo)){var n=[];Vr(n,lo,e,Rr(e)),ds(kc,n)}}function we(e,n,i){e==="focusin"?(ne(),ro=n,lo=i,ro.attachEvent("onpropertychange",_e)):e==="focusout"&&ne()}function je(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(lo)}function ze(e,n){if(e==="click")return Xo(n)}function He(e,n){if(e==="input"||e==="change")return Xo(n)}function Je(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qe=typeof Object.is=="function"?Object.is:Je;function Ie(e,n){if(qe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var d=i[l];if(!Pe.call(n,d)||!qe(e[d],n[d]))return!1}return!0}function Me(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function on(e,n){var i=Me(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Me(i)}}function Ut(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ut(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ji(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Ji(e.document)}return n}function Ct(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function fn(e,n){var i=dn(n);n=e.focusedElem;var l=e.selectionRange;if(i!==n&&n&&n.ownerDocument&&Ut(n.ownerDocument.documentElement,n)){if(l!==null&&Ct(n)){if(e=l.start,i=l.end,i===void 0&&(i=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(i,n.value.length);else if(i=(e=n.ownerDocument||document)&&e.defaultView||window,i.getSelection){i=i.getSelection();var d=n.textContent.length,m=Math.min(l.start,d);l=l.end===void 0?m:Math.min(l.end,d),!i.extend&&m>l&&(d=l,l=m,m=d),d=on(n,m);var v=on(n,l);d&&v&&(i.rangeCount!==1||i.anchorNode!==d.node||i.anchorOffset!==d.offset||i.focusNode!==v.node||i.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(d.node,d.offset),i.removeAllRanges(),m>l?(i.addRange(e),i.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),i.addRange(e)))}}for(e=[],i=n;i=i.parentNode;)i.nodeType===1&&e.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)i=e[n],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var et=jn&&"documentMode"in document&&11>=document.documentMode,nt=null,hn=null,Pt=null,On=!1;function Kn(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;On||nt==null||nt!==Ji(l)||(l=nt,"selectionStart"in l&&Ct(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pt&&Ie(Pt,l)||(Pt=l,l=ru(hn,"onSelect"),0<l.length&&(n=new ui("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=nt)))}function Gt(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var As={animationend:Gt("Animation","AnimationEnd"),animationiteration:Gt("Animation","AnimationIteration"),animationstart:Gt("Animation","AnimationStart"),transitionrun:Gt("Transition","TransitionRun"),transitionstart:Gt("Transition","TransitionStart"),transitioncancel:Gt("Transition","TransitionCancel"),transitionend:Gt("Transition","TransitionEnd")},Qs={},Gs={};jn&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Yt(e){if(Qs[e])return Qs[e];if(!As[e])return e;var n=As[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Gs)return Qs[e]=n[i];return e}var Ks=Yt("animationend"),mi=Yt("animationiteration"),jc=Yt("animationstart"),Hd=Yt("transitionrun"),Id=Yt("transitionstart"),Vd=Yt("transitioncancel"),W0=Yt("transitionend"),F0=new Map,X0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Zs(e,n){F0.set(e,n),ys(n,[e])}var Ds=[],za=0,Ud=0;function Cc(){for(var e=za,n=Ud=za=0;n<e;){var i=Ds[n];Ds[n++]=null;var l=Ds[n];Ds[n++]=null;var d=Ds[n];Ds[n++]=null;var m=Ds[n];if(Ds[n++]=null,l!==null&&d!==null){var v=l.pending;v===null?d.next=d:(d.next=v.next,v.next=d),l.pending=d}m!==0&&q0(i,d,m)}}function Tc(e,n,i,l){Ds[za++]=e,Ds[za++]=n,Ds[za++]=i,Ds[za++]=l,Ud|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Yd(e,n,i,l){return Tc(e,n,i,l),Ec(e)}function co(e,n){return Tc(e,null,null,n),Ec(e)}function q0(e,n,i){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i);for(var d=!1,m=e.return;m!==null;)m.childLanes|=i,l=m.alternate,l!==null&&(l.childLanes|=i),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;d&&n!==null&&e.tag===3&&(m=e.stateNode,d=31-Ye(i),m=m.hiddenUpdates,e=m[d],e===null?m[d]=[n]:e.push(n),n.lane=i|536870912)}function Ec(e){if(50<hl)throw hl=0,Kf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $a={},Q0=new WeakMap;function Ls(e,n){if(typeof e=="object"&&e!==null){var i=Q0.get(e);return i!==void 0?i:(n={value:e,source:n,stack:ye(n)},Q0.set(e,n),n)}return{value:e,source:n,stack:ye(n)}}var Pa=[],Ha=0,Mc=null,Rc=0,Os=[],Bs=0,qo=null,Mi=1,Ri="";function Qo(e,n){Pa[Ha++]=Rc,Pa[Ha++]=Mc,Mc=e,Rc=n}function G0(e,n,i){Os[Bs++]=Mi,Os[Bs++]=Ri,Os[Bs++]=qo,qo=e;var l=Mi;e=Ri;var d=32-Ye(l)-1;l&=~(1<<d),i+=1;var m=32-Ye(n)+d;if(30<m){var v=d-d%5;m=(l&(1<<v)-1).toString(32),l>>=v,d-=v,Mi=1<<32-Ye(n)+d|i<<d|l,Ri=m+e}else Mi=1<<m|i<<d|l,Ri=e}function Wd(e){e.return!==null&&(Qo(e,1),G0(e,1,0))}function Fd(e){for(;e===Mc;)Mc=Pa[--Ha],Pa[Ha]=null,Rc=Pa[--Ha],Pa[Ha]=null;for(;e===qo;)qo=Os[--Bs],Os[Bs]=null,Ri=Os[--Bs],Os[Bs]=null,Mi=Os[--Bs],Os[Bs]=null}var ss=null,Yn=null,Dt=!1,Js=null,pi=!1,Xd=Error(a(519));function Go(e){var n=Error(a(418,""));throw Wr(Ls(n,e)),Xd}function K0(e){var n=e.stateNode,i=e.type,l=e.memoizedProps;switch(n[Vt]=e,n[Qt]=l,i){case"dialog":Rt("cancel",n),Rt("close",n);break;case"iframe":case"object":case"embed":Rt("load",n);break;case"video":case"audio":for(i=0;i<pl.length;i++)Rt(pl[i],n);break;case"source":Rt("error",n);break;case"img":case"image":case"link":Rt("error",n),Rt("load",n);break;case"details":Rt("toggle",n);break;case"input":Rt("invalid",n),un(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ho(n);break;case"select":Rt("invalid",n);break;case"textarea":Rt("invalid",n),fc(n,l.value,l.defaultValue,l.children),Ho(n)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||l.suppressHydrationWarning===!0||ag(n.textContent,i)?(l.popover!=null&&(Rt("beforetoggle",n),Rt("toggle",n)),l.onScroll!=null&&Rt("scroll",n),l.onScrollEnd!=null&&Rt("scrollend",n),l.onClick!=null&&(n.onclick=lu),n=!0):n=!1,n||Go(e)}function Z0(e){for(ss=e.return;ss;)switch(ss.tag){case 3:case 27:pi=!0;return;case 5:case 13:pi=!1;return;default:ss=ss.return}}function Ur(e){if(e!==ss)return!1;if(!Dt)return Z0(e),Dt=!0,!1;var n=!1,i;if((i=e.tag!==3&&e.tag!==27)&&((i=e.tag===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||mh(e.type,e.memoizedProps)),i=!i),i&&(n=!0),n&&Yn&&Go(e),Z0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(i=e.data,i==="/$"){if(n===0){Yn=ti(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++;e=e.nextSibling}Yn=null}}else Yn=ss?ti(e.stateNode.nextSibling):null;return!0}function Yr(){Yn=ss=null,Dt=!1}function Wr(e){Js===null?Js=[e]:Js.push(e)}var Fr=Error(a(460)),J0=Error(a(474)),qd={then:function(){}};function ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nc(){}function tp(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then(Nc,Nc),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Fr?Error(a(483)):e;default:if(typeof n.status=="string")n.then(Nc,Nc);else{if(e=en,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=l}},function(l){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Fr?Error(a(483)):e}throw Xr=n,Fr}}var Xr=null;function np(){if(Xr===null)throw Error(a(459));var e=Xr;return Xr=null,e}var Ia=null,qr=0;function Ac(e){var n=qr;return qr+=1,Ia===null&&(Ia=[]),tp(Ia,e,n)}function Qr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dc(e,n){throw n.$$typeof===u?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sp(e){var n=e._init;return n(e._payload)}function ip(e){function n(U,H){if(e){var X=U.deletions;X===null?(U.deletions=[H],U.flags|=16):X.push(H)}}function i(U,H){if(!e)return null;for(;H!==null;)n(U,H),H=H.sibling;return null}function l(U){for(var H=new Map;U!==null;)U.key!==null?H.set(U.key,U):H.set(U.index,U),U=U.sibling;return H}function d(U,H){return U=wo(U,H),U.index=0,U.sibling=null,U}function m(U,H,X){return U.index=X,e?(X=U.alternate,X!==null?(X=X.index,X<H?(U.flags|=33554434,H):X):(U.flags|=33554434,H)):(U.flags|=1048576,H)}function v(U){return e&&U.alternate===null&&(U.flags|=33554434),U}function k(U,H,X,de){return H===null||H.tag!==6?(H=Uf(X,U.mode,de),H.return=U,H):(H=d(H,X),H.return=U,H)}function N(U,H,X,de){var Oe=X.type;return Oe===h?re(U,H,X.props.children,de,X.key):H!==null&&(H.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===z&&sp(Oe)===H.type)?(H=d(H,X.props),Qr(H,X),H.return=U,H):(H=Kc(X.type,X.key,X.props,null,U.mode,de),Qr(H,X),H.return=U,H)}function I(U,H,X,de){return H===null||H.tag!==4||H.stateNode.containerInfo!==X.containerInfo||H.stateNode.implementation!==X.implementation?(H=Yf(X,U.mode,de),H.return=U,H):(H=d(H,X.children||[]),H.return=U,H)}function re(U,H,X,de,Oe){return H===null||H.tag!==7?(H=aa(X,U.mode,de,Oe),H.return=U,H):(H=d(H,X),H.return=U,H)}function pe(U,H,X){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Uf(""+H,U.mode,X),H.return=U,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case f:return X=Kc(H.type,H.key,H.props,null,U.mode,X),Qr(X,H),X.return=U,X;case p:return H=Yf(H,U.mode,X),H.return=U,H;case z:var de=H._init;return H=de(H._payload),pe(U,H,X)}if(Se(H)||W(H))return H=aa(H,U.mode,X,null),H.return=U,H;if(typeof H.then=="function")return pe(U,Ac(H),X);if(H.$$typeof===w)return pe(U,qc(U,H),X);Dc(U,H)}return null}function Z(U,H,X,de){var Oe=H!==null?H.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Oe!==null?null:k(U,H,""+X,de);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case f:return X.key===Oe?N(U,H,X,de):null;case p:return X.key===Oe?I(U,H,X,de):null;case z:return Oe=X._init,X=Oe(X._payload),Z(U,H,X,de)}if(Se(X)||W(X))return Oe!==null?null:re(U,H,X,de,null);if(typeof X.then=="function")return Z(U,H,Ac(X),de);if(X.$$typeof===w)return Z(U,H,qc(U,X),de);Dc(U,X)}return null}function oe(U,H,X,de,Oe){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return U=U.get(X)||null,k(H,U,""+de,Oe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case f:return U=U.get(de.key===null?X:de.key)||null,N(H,U,de,Oe);case p:return U=U.get(de.key===null?X:de.key)||null,I(H,U,de,Oe);case z:var vt=de._init;return de=vt(de._payload),oe(U,H,X,de,Oe)}if(Se(de)||W(de))return U=U.get(X)||null,re(H,U,de,Oe,null);if(typeof de.then=="function")return oe(U,H,X,Ac(de),Oe);if(de.$$typeof===w)return oe(U,H,X,qc(H,de),Oe);Dc(H,de)}return null}function Ve(U,H,X,de){for(var Oe=null,vt=null,We=H,tt=H=0,In=null;We!==null&&tt<X.length;tt++){We.index>tt?(In=We,We=null):In=We.sibling;var Lt=Z(U,We,X[tt],de);if(Lt===null){We===null&&(We=In);break}e&&We&&Lt.alternate===null&&n(U,We),H=m(Lt,H,tt),vt===null?Oe=Lt:vt.sibling=Lt,vt=Lt,We=In}if(tt===X.length)return i(U,We),Dt&&Qo(U,tt),Oe;if(We===null){for(;tt<X.length;tt++)We=pe(U,X[tt],de),We!==null&&(H=m(We,H,tt),vt===null?Oe=We:vt.sibling=We,vt=We);return Dt&&Qo(U,tt),Oe}for(We=l(We);tt<X.length;tt++)In=oe(We,U,tt,X[tt],de),In!==null&&(e&&In.alternate!==null&&We.delete(In.key===null?tt:In.key),H=m(In,H,tt),vt===null?Oe=In:vt.sibling=In,vt=In);return e&&We.forEach(function(Mo){return n(U,Mo)}),Dt&&Qo(U,tt),Oe}function lt(U,H,X,de){if(X==null)throw Error(a(151));for(var Oe=null,vt=null,We=H,tt=H=0,In=null,Lt=X.next();We!==null&&!Lt.done;tt++,Lt=X.next()){We.index>tt?(In=We,We=null):In=We.sibling;var Mo=Z(U,We,Lt.value,de);if(Mo===null){We===null&&(We=In);break}e&&We&&Mo.alternate===null&&n(U,We),H=m(Mo,H,tt),vt===null?Oe=Mo:vt.sibling=Mo,vt=Mo,We=In}if(Lt.done)return i(U,We),Dt&&Qo(U,tt),Oe;if(We===null){for(;!Lt.done;tt++,Lt=X.next())Lt=pe(U,Lt.value,de),Lt!==null&&(H=m(Lt,H,tt),vt===null?Oe=Lt:vt.sibling=Lt,vt=Lt);return Dt&&Qo(U,tt),Oe}for(We=l(We);!Lt.done;tt++,Lt=X.next())Lt=oe(We,U,tt,Lt.value,de),Lt!==null&&(e&&Lt.alternate!==null&&We.delete(Lt.key===null?tt:Lt.key),H=m(Lt,H,tt),vt===null?Oe=Lt:vt.sibling=Lt,vt=Lt);return e&&We.forEach(function(Jb){return n(U,Jb)}),Dt&&Qo(U,tt),Oe}function wn(U,H,X,de){if(typeof X=="object"&&X!==null&&X.type===h&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case f:e:{for(var Oe=X.key;H!==null;){if(H.key===Oe){if(Oe=X.type,Oe===h){if(H.tag===7){i(U,H.sibling),de=d(H,X.props.children),de.return=U,U=de;break e}}else if(H.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===z&&sp(Oe)===H.type){i(U,H.sibling),de=d(H,X.props),Qr(de,X),de.return=U,U=de;break e}i(U,H);break}else n(U,H);H=H.sibling}X.type===h?(de=aa(X.props.children,U.mode,de,X.key),de.return=U,U=de):(de=Kc(X.type,X.key,X.props,null,U.mode,de),Qr(de,X),de.return=U,U=de)}return v(U);case p:e:{for(Oe=X.key;H!==null;){if(H.key===Oe)if(H.tag===4&&H.stateNode.containerInfo===X.containerInfo&&H.stateNode.implementation===X.implementation){i(U,H.sibling),de=d(H,X.children||[]),de.return=U,U=de;break e}else{i(U,H);break}else n(U,H);H=H.sibling}de=Yf(X,U.mode,de),de.return=U,U=de}return v(U);case z:return Oe=X._init,X=Oe(X._payload),wn(U,H,X,de)}if(Se(X))return Ve(U,H,X,de);if(W(X)){if(Oe=W(X),typeof Oe!="function")throw Error(a(150));return X=Oe.call(X),lt(U,H,X,de)}if(typeof X.then=="function")return wn(U,H,Ac(X),de);if(X.$$typeof===w)return wn(U,H,qc(U,X),de);Dc(U,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,H!==null&&H.tag===6?(i(U,H.sibling),de=d(H,X),de.return=U,U=de):(i(U,H),de=Uf(X,U.mode,de),de.return=U,U=de),v(U)):i(U,H)}return function(U,H,X,de){try{qr=0;var Oe=wn(U,H,X,de);return Ia=null,Oe}catch(We){if(We===Fr)throw We;var vt=Hs(29,We,null,U.mode);return vt.lanes=de,vt.return=U,vt}finally{}}}var Ko=ip(!0),op=ip(!1),Va=Be(null),Lc=Be(0);function ap(e,n){e=Ii,ht(Lc,e),ht(Va,n),Ii=e|n.baseLanes}function Qd(){ht(Lc,Ii),ht(Va,Va.current)}function Gd(){Ii=Lc.current,ft(Va),ft(Lc)}var zs=Be(null),_i=null;function uo(e){var n=e.alternate;ht(Bn,Bn.current&1),ht(zs,e),_i===null&&(n===null||Va.current!==null||n.memoizedState!==null)&&(_i=e)}function rp(e){if(e.tag===22){if(ht(Bn,Bn.current),ht(zs,e),_i===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(_i=e)}}else fo()}function fo(){ht(Bn,Bn.current),ht(zs,zs.current)}function Ni(e){ft(zs),_i===e&&(_i=null),ft(Bn)}var Bn=Be(0);function Oc(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var H5=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},I5=t.unstable_scheduleCallback,V5=t.unstable_NormalPriority,zn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kd(){return{controller:new H5,data:new Map,refCount:0}}function Gr(e){e.refCount--,e.refCount===0&&I5(V5,function(){e.controller.abort()})}var Kr=null,Zd=0,Ua=0,Ya=null;function U5(e,n){if(Kr===null){var i=Kr=[];Zd=0,Ua=oh(),Ya={status:"pending",value:void 0,then:function(l){i.push(l)}}}return Zd++,n.then(lp,lp),n}function lp(){if(--Zd===0&&Kr!==null){Ya!==null&&(Ya.status="fulfilled");var e=Kr;Kr=null,Ua=0,Ya=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Y5(e,n){var i=[],l={status:"pending",value:null,reason:null,then:function(d){i.push(d)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var d=0;d<i.length;d++)(0,i[d])(n)},function(d){for(l.status="rejected",l.reason=d,d=0;d<i.length;d++)(0,i[d])(void 0)}),l}var cp=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&U5(e,n),cp!==null&&cp(e,n)};var Zo=Be(null);function Jd(){var e=Zo.current;return e!==null?e:en.pooledCache}function Bc(e,n){n===null?ht(Zo,Zo.current):ht(Zo,n.pool)}function up(){var e=Jd();return e===null?null:{parent:zn._currentValue,pool:e}}var ho=0,bt=null,Wt=null,Mn=null,zc=!1,Wa=!1,Jo=!1,$c=0,Zr=0,Fa=null,W5=0;function Cn(){throw Error(a(321))}function ef(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!qe(e[i],n[i]))return!1;return!0}function tf(e,n,i,l,d,m){return ho=m,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?ea:mo,Jo=!1,m=i(l,d),Jo=!1,Wa&&(m=fp(n,i,l,d)),dp(e),m}function dp(e){F.H=gi;var n=Wt!==null&&Wt.next!==null;if(ho=0,Mn=Wt=bt=null,zc=!1,Zr=0,Fa=null,n)throw Error(a(300));e===null||Pn||(e=e.dependencies,e!==null&&Xc(e)&&(Pn=!0))}function fp(e,n,i,l){bt=e;var d=0;do{if(Wa&&(Fa=null),Zr=0,Wa=!1,25<=d)throw Error(a(301));if(d+=1,Mn=Wt=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=ta,m=n(i,l)}while(Wa);return m}function F5(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Jr(n):n,e=e.useState()[0],(Wt!==null?Wt.memoizedState:null)!==e&&(bt.flags|=1024),n}function nf(){var e=$c!==0;return $c=0,e}function sf(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function of(e){if(zc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}zc=!1}ho=0,Mn=Wt=bt=null,Wa=!1,Zr=$c=0,Fa=null}function fs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?bt.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function Rn(){if(Wt===null){var e=bt.alternate;e=e!==null?e.memoizedState:null}else e=Wt.next;var n=Mn===null?bt.memoizedState:Mn.next;if(n!==null)Mn=n,Wt=e;else{if(e===null)throw bt.alternate===null?Error(a(467)):Error(a(310));Wt=e,e={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Mn===null?bt.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}var Pc;Pc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Jr(e){var n=Zr;return Zr+=1,Fa===null&&(Fa=[]),e=tp(Fa,e,n),n=bt,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?ea:mo),e}function Hc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===w)return Zn(e)}throw Error(a(438,String(e)))}function af(e){var n=null,i=bt.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var l=bt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Pc(),bt.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),l=0;l<e;l++)i[l]=L;return n.index++,i}function Ai(e,n){return typeof n=="function"?n(e):n}function Ic(e){var n=Rn();return rf(n,Wt,e)}function rf(e,n,i){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=i;var d=e.baseQueue,m=l.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}n.baseQueue=d=m,l.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{n=d.next;var k=v=null,N=null,I=n,re=!1;do{var pe=I.lane&-536870913;if(pe!==I.lane?(Nt&pe)===pe:(ho&pe)===pe){var Z=I.revertLane;if(Z===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),pe===Ua&&(re=!0);else if((ho&Z)===Z){I=I.next,Z===Ua&&(re=!0);continue}else pe={lane:0,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},N===null?(k=N=pe,v=m):N=N.next=pe,bt.lanes|=Z,So|=Z;pe=I.action,Jo&&i(m,pe),m=I.hasEagerState?I.eagerState:i(m,pe)}else Z={lane:pe,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},N===null?(k=N=Z,v=m):N=N.next=Z,bt.lanes|=pe,So|=pe;I=I.next}while(I!==null&&I!==n);if(N===null?v=m:N.next=k,!qe(m,e.memoizedState)&&(Pn=!0,re&&(i=Ya,i!==null)))throw i;e.memoizedState=m,e.baseState=v,e.baseQueue=N,l.lastRenderedState=m}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function lf(e){var n=Rn(),i=n.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=e;var l=i.dispatch,d=i.pending,m=n.memoizedState;if(d!==null){i.pending=null;var v=d=d.next;do m=e(m,v.action),v=v.next;while(v!==d);qe(m,n.memoizedState)||(Pn=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),i.lastRenderedState=m}return[m,l]}function hp(e,n,i){var l=bt,d=Rn(),m=Dt;if(m){if(i===void 0)throw Error(a(407));i=i()}else i=n();var v=!qe((Wt||d).memoizedState,i);if(v&&(d.memoizedState=i,Pn=!0),d=d.queue,df(_p.bind(null,l,d,e),[e]),d.getSnapshot!==n||v||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,Xa(9,pp.bind(null,l,d,i,n),{destroy:void 0},null),en===null)throw Error(a(349));m||ho&60||mp(l,n,i)}return i}function mp(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=bt.updateQueue,n===null?(n=Pc(),bt.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function pp(e,n,i,l){n.value=i,n.getSnapshot=l,gp(n)&&yp(e)}function _p(e,n,i){return i(function(){gp(n)&&yp(e)})}function gp(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!qe(e,i)}catch{return!0}}function yp(e){var n=co(e,2);n!==null&&is(n,e,2)}function cf(e){var n=fs();if(typeof e=="function"){var i=e;if(e=i(),Jo){at(!0);try{i()}finally{at(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:e},n}function xp(e,n,i,l){return e.baseState=i,rf(e,Wt,typeof l=="function"?l:Ai)}function X5(e,n,i,l,d){if(Yc(e))throw Error(a(485));if(e=n.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};F.T!==null?i(!0):m.isTransition=!1,l(m),i=n.pending,i===null?(m.next=n.pending=m,bp(n,m)):(m.next=i.next,n.pending=i.next=m)}}function bp(e,n){var i=n.action,l=n.payload,d=e.state;if(n.isTransition){var m=F.T,v={};F.T=v;try{var k=i(d,l),N=F.S;N!==null&&N(v,k),vp(e,n,k)}catch(I){uf(e,n,I)}finally{F.T=m}}else try{m=i(d,l),vp(e,n,m)}catch(I){uf(e,n,I)}}function vp(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){wp(e,n,l)},function(l){return uf(e,n,l)}):wp(e,n,i)}function wp(e,n,i){n.status="fulfilled",n.value=i,Sp(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,bp(e,i)))}function uf(e,n,i){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=i,Sp(n),n=n.next;while(n!==l)}e.action=null}function Sp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function kp(e,n){return n}function jp(e,n){if(Dt){var i=en.formState;if(i!==null){e:{var l=bt;if(Dt){if(Yn){t:{for(var d=Yn,m=pi;d.nodeType!==8;){if(!m){d=null;break t}if(d=ti(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Yn=ti(d.nextSibling),l=d.data==="F!";break e}}Go(l)}l=!1}l&&(n=i[0])}}return i=fs(),i.memoizedState=i.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:n},i.queue=l,i=Up.bind(null,bt,l),l.dispatch=i,l=cf(!1),m=_f.bind(null,bt,!1,l.queue),l=fs(),d={state:n,dispatch:null,action:e,pending:null},l.queue=d,i=X5.bind(null,bt,d,m,i),d.dispatch=i,l.memoizedState=e,[n,i,!1]}function Cp(e){var n=Rn();return Tp(n,Wt,e)}function Tp(e,n,i){n=rf(e,n,kp)[0],e=Ic(Ai)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Jr(n):n;var l=Rn(),d=l.queue,m=d.dispatch;return i!==l.memoizedState&&(bt.flags|=2048,Xa(9,q5.bind(null,d,i),{destroy:void 0},null)),[n,m,e]}function q5(e,n){e.action=n}function Ep(e){var n=Rn(),i=Wt;if(i!==null)return Tp(n,i,e);Rn(),n=n.memoizedState,i=Rn();var l=i.queue.dispatch;return i.memoizedState=e,[n,l,!1]}function Xa(e,n,i,l){return e={tag:e,create:n,inst:i,deps:l,next:null},n=bt.updateQueue,n===null&&(n=Pc(),bt.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e),e}function Mp(){return Rn().memoizedState}function Vc(e,n,i,l){var d=fs();bt.flags|=e,d.memoizedState=Xa(1|n,i,{destroy:void 0},l===void 0?null:l)}function Uc(e,n,i,l){var d=Rn();l=l===void 0?null:l;var m=d.memoizedState.inst;Wt!==null&&l!==null&&ef(l,Wt.memoizedState.deps)?d.memoizedState=Xa(n,i,m,l):(bt.flags|=e,d.memoizedState=Xa(1|n,i,m,l))}function Rp(e,n){Vc(8390656,8,e,n)}function df(e,n){Uc(2048,8,e,n)}function Np(e,n){return Uc(4,2,e,n)}function Ap(e,n){return Uc(4,4,e,n)}function Dp(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lp(e,n,i){i=i!=null?i.concat([e]):null,Uc(4,4,Dp.bind(null,n,e),i)}function ff(){}function Op(e,n){var i=Rn();n=n===void 0?null:n;var l=i.memoizedState;return n!==null&&ef(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function Bp(e,n){var i=Rn();n=n===void 0?null:n;var l=i.memoizedState;if(n!==null&&ef(n,l[1]))return l[0];if(l=e(),Jo){at(!0);try{e()}finally{at(!1)}}return i.memoizedState=[l,n],l}function hf(e,n,i){return i===void 0||ho&1073741824?e.memoizedState=n:(e.memoizedState=i,e=$_(),bt.lanes|=e,So|=e,i)}function zp(e,n,i,l){return qe(i,n)?i:Va.current!==null?(e=hf(e,i,l),qe(e,n)||(Pn=!0),e):ho&42?(e=$_(),bt.lanes|=e,So|=e,n):(Pn=!0,e.memoizedState=i)}function $p(e,n,i,l,d){var m=ve.p;ve.p=m!==0&&8>m?m:8;var v=F.T,k={};F.T=k,_f(e,!1,n,i);try{var N=d(),I=F.S;if(I!==null&&I(k,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var re=Y5(N,l);el(e,n,re,Ts(e))}else el(e,n,l,Ts(e))}catch(pe){el(e,n,{then:function(){},status:"rejected",reason:pe},Ts())}finally{ve.p=m,F.T=v}}function Q5(){}function mf(e,n,i,l){if(e.tag!==5)throw Error(a(476));var d=Pp(e).queue;$p(e,d,n,Ze,i===null?Q5:function(){return Hp(e),i(l)})}function Pp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Ze,baseState:Ze,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:Ze},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Hp(e){var n=Pp(e).next.queue;el(e,n,{},Ts())}function pf(){return Zn(bl)}function Ip(){return Rn().memoizedState}function Vp(){return Rn().memoizedState}function G5(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=Ts();e=go(i);var l=yo(n,e,i);l!==null&&(is(l,n,i),sl(l,n,i)),n={cache:Kd()},e.payload=n;return}n=n.return}}function K5(e,n,i){var l=Ts();i={lane:l,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Yc(e)?Yp(n,i):(i=Yd(e,n,i,l),i!==null&&(is(i,e,l),Wp(i,n,l)))}function Up(e,n,i){var l=Ts();el(e,n,i,l)}function el(e,n,i,l){var d={lane:l,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Yc(e))Yp(n,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var v=n.lastRenderedState,k=m(v,i);if(d.hasEagerState=!0,d.eagerState=k,qe(k,v))return Tc(e,n,d,0),en===null&&Cc(),!1}catch{}finally{}if(i=Yd(e,n,d,l),i!==null)return is(i,e,l),Wp(i,n,l),!0}return!1}function _f(e,n,i,l){if(l={lane:2,revertLane:oh(),action:l,hasEagerState:!1,eagerState:null,next:null},Yc(e)){if(n)throw Error(a(479))}else n=Yd(e,i,l,2),n!==null&&is(n,e,2)}function Yc(e){var n=e.alternate;return e===bt||n!==null&&n===bt}function Yp(e,n){Wa=zc=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Wp(e,n,i){if(i&4194176){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Dn(e,i)}}var gi={readContext:Zn,use:Hc,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useLayoutEffect:Cn,useInsertionEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useSyncExternalStore:Cn,useId:Cn};gi.useCacheRefresh=Cn,gi.useMemoCache=Cn,gi.useHostTransitionStatus=Cn,gi.useFormState=Cn,gi.useActionState=Cn,gi.useOptimistic=Cn;var ea={readContext:Zn,use:Hc,useCallback:function(e,n){return fs().memoizedState=[e,n===void 0?null:n],e},useContext:Zn,useEffect:Rp,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,Vc(4194308,4,Dp.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Vc(4194308,4,e,n)},useInsertionEffect:function(e,n){Vc(4,2,e,n)},useMemo:function(e,n){var i=fs();n=n===void 0?null:n;var l=e();if(Jo){at(!0);try{e()}finally{at(!1)}}return i.memoizedState=[l,n],l},useReducer:function(e,n,i){var l=fs();if(i!==void 0){var d=i(n);if(Jo){at(!0);try{i(n)}finally{at(!1)}}}else d=n;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=K5.bind(null,bt,e),[l.memoizedState,e]},useRef:function(e){var n=fs();return e={current:e},n.memoizedState=e},useState:function(e){e=cf(e);var n=e.queue,i=Up.bind(null,bt,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:ff,useDeferredValue:function(e,n){var i=fs();return hf(i,e,n)},useTransition:function(){var e=cf(!1);return e=$p.bind(null,bt,e.queue,!0,!1),fs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var l=bt,d=fs();if(Dt){if(i===void 0)throw Error(a(407));i=i()}else{if(i=n(),en===null)throw Error(a(349));Nt&60||mp(l,n,i)}d.memoizedState=i;var m={value:i,getSnapshot:n};return d.queue=m,Rp(_p.bind(null,l,m,e),[e]),l.flags|=2048,Xa(9,pp.bind(null,l,m,i,n),{destroy:void 0},null),i},useId:function(){var e=fs(),n=en.identifierPrefix;if(Dt){var i=Ri,l=Mi;i=(l&~(1<<32-Ye(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=$c++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=W5++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return fs().memoizedState=G5.bind(null,bt)}};ea.useMemoCache=af,ea.useHostTransitionStatus=pf,ea.useFormState=jp,ea.useActionState=jp,ea.useOptimistic=function(e){var n=fs();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=_f.bind(null,bt,!0,i),i.dispatch=n,[e,n]};var mo={readContext:Zn,use:Hc,useCallback:Op,useContext:Zn,useEffect:df,useImperativeHandle:Lp,useInsertionEffect:Np,useLayoutEffect:Ap,useMemo:Bp,useReducer:Ic,useRef:Mp,useState:function(){return Ic(Ai)},useDebugValue:ff,useDeferredValue:function(e,n){var i=Rn();return zp(i,Wt.memoizedState,e,n)},useTransition:function(){var e=Ic(Ai)[0],n=Rn().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:hp,useId:Ip};mo.useCacheRefresh=Vp,mo.useMemoCache=af,mo.useHostTransitionStatus=pf,mo.useFormState=Cp,mo.useActionState=Cp,mo.useOptimistic=function(e,n){var i=Rn();return xp(i,Wt,e,n)};var ta={readContext:Zn,use:Hc,useCallback:Op,useContext:Zn,useEffect:df,useImperativeHandle:Lp,useInsertionEffect:Np,useLayoutEffect:Ap,useMemo:Bp,useReducer:lf,useRef:Mp,useState:function(){return lf(Ai)},useDebugValue:ff,useDeferredValue:function(e,n){var i=Rn();return Wt===null?hf(i,e,n):zp(i,Wt.memoizedState,e,n)},useTransition:function(){var e=lf(Ai)[0],n=Rn().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:hp,useId:Ip};ta.useCacheRefresh=Vp,ta.useMemoCache=af,ta.useHostTransitionStatus=pf,ta.useFormState=Ep,ta.useActionState=Ep,ta.useOptimistic=function(e,n){var i=Rn();return Wt!==null?xp(i,Wt,e,n):(i.baseState=e,[e,i.queue.dispatch])};function gf(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:Q({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var yf={isMounted:function(e){return(e=e._reactInternals)?K(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var l=Ts(),d=go(l);d.payload=n,i!=null&&(d.callback=i),n=yo(e,d,l),n!==null&&(is(n,e,l),sl(n,e,l))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=Ts(),d=go(l);d.tag=1,d.payload=n,i!=null&&(d.callback=i),n=yo(e,d,l),n!==null&&(is(n,e,l),sl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Ts(),l=go(i);l.tag=2,n!=null&&(l.callback=n),n=yo(e,l,i),n!==null&&(is(n,e,i),sl(n,e,i))}};function Fp(e,n,i,l,d,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,v):n.prototype&&n.prototype.isPureReactComponent?!Ie(i,l)||!Ie(d,m):!0}function Xp(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&yf.enqueueReplaceState(n,n.state,null)}function na(e,n){var i=n;if("ref"in n){i={};for(var l in n)l!=="ref"&&(i[l]=n[l])}if(e=e.defaultProps){i===n&&(i=Q({},i));for(var d in e)i[d]===void 0&&(i[d]=e[d])}return i}var Wc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qp(e){Wc(e)}function Qp(e){console.error(e)}function Gp(e){Wc(e)}function Fc(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Kp(e,n,i){try{var l=e.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function xf(e,n,i){return i=go(i),i.tag=3,i.payload={element:null},i.callback=function(){Fc(e,n)},i}function Zp(e){return e=go(e),e.tag=3,e}function Jp(e,n,i,l){var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;e.payload=function(){return d(m)},e.callback=function(){Kp(n,i,l)}}var v=i.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Kp(n,i,l),typeof d!="function"&&(ko===null?ko=new Set([this]):ko.add(this));var k=l.stack;this.componentDidCatch(l.value,{componentStack:k!==null?k:""})})}function Z5(e,n,i,l,d){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=i.alternate,n!==null&&nl(n,i,d,!0),i=zs.current,i!==null){switch(i.tag){case 13:return _i===null?eh():i.alternate===null&&vn===0&&(vn=3),i.flags&=-257,i.flags|=65536,i.lanes=d,l===qd?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([l]):n.add(l),nh(e,l,d)),!1;case 22:return i.flags|=65536,l===qd?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([l]):i.add(l)),nh(e,l,d)),!1}throw Error(a(435,i.tag))}return nh(e,l,d),eh(),!1}if(Dt)return n=zs.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=d,l!==Xd&&(e=Error(a(422),{cause:l}),Wr(Ls(e,i)))):(l!==Xd&&(n=Error(a(423),{cause:l}),Wr(Ls(n,i))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=Ls(l,i),d=xf(e.stateNode,l,d),Lf(e,d),vn!==4&&(vn=2)),!1;var m=Error(a(520),{cause:l});if(m=Ls(m,i),dl===null?dl=[m]:dl.push(m),vn!==4&&(vn=2),n===null)return!0;l=Ls(l,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=d&-d,i.lanes|=e,e=xf(i.stateNode,l,e),Lf(i,e),!1;case 1:if(n=i.type,m=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ko===null||!ko.has(m))))return i.flags|=65536,d&=-d,i.lanes|=d,d=Zp(d),Jp(d,e,i,l),Lf(i,d),!1}i=i.return}while(i!==null);return!1}var e_=Error(a(461)),Pn=!1;function Wn(e,n,i,l){n.child=e===null?op(n,null,i,l):Ko(n,e.child,i,l)}function t_(e,n,i,l,d){i=i.render;var m=n.ref;if("ref"in l){var v={};for(var k in l)k!=="ref"&&(v[k]=l[k])}else v=l;return ia(n),l=tf(e,n,i,v,m,d),k=nf(),e!==null&&!Pn?(sf(e,n,d),Di(e,n,d)):(Dt&&k&&Wd(n),n.flags|=1,Wn(e,n,l,d),n.child)}function n_(e,n,i,l,d){if(e===null){var m=i.type;return typeof m=="function"&&!Vf(m)&&m.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=m,s_(e,n,m,l,d)):(e=Kc(i.type,null,l,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(m=e.child,!Ef(e,d)){var v=m.memoizedProps;if(i=i.compare,i=i!==null?i:Ie,i(v,l)&&e.ref===n.ref)return Di(e,n,d)}return n.flags|=1,e=wo(m,l),e.ref=n.ref,e.return=n,n.child=e}function s_(e,n,i,l,d){if(e!==null){var m=e.memoizedProps;if(Ie(m,l)&&e.ref===n.ref)if(Pn=!1,n.pendingProps=l=m,Ef(e,d))e.flags&131072&&(Pn=!0);else return n.lanes=e.lanes,Di(e,n,d)}return bf(e,n,i,l,d)}function i_(e,n,i){var l=n.pendingProps,d=l.children,m=(n.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(tl(e,n),l.mode==="hidden"||m){if(n.flags&128){if(l=v!==null?v.baseLanes|i:i,e!==null){for(d=n.child=e.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;n.childLanes=m&~l}else n.childLanes=0,n.child=null;return o_(e,n,l,i)}if(i&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bc(n,v!==null?v.cachePool:null),v!==null?ap(n,v):Qd(),rp(n);else return n.lanes=n.childLanes=536870912,o_(e,n,v!==null?v.baseLanes|i:i,i)}else v!==null?(Bc(n,v.cachePool),ap(n,v),fo(),n.memoizedState=null):(e!==null&&Bc(n,null),Qd(),fo());return Wn(e,n,d,i),n.child}function o_(e,n,i,l){var d=Jd();return d=d===null?null:{parent:zn._currentValue,pool:d},n.memoizedState={baseLanes:i,cachePool:d},e!==null&&Bc(n,null),Qd(),rp(n),e!==null&&nl(e,n,l,!0),null}function tl(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof i!="function"&&typeof i!="object")throw Error(a(284));(e===null||e.ref!==i)&&(n.flags|=2097664)}}function bf(e,n,i,l,d){return ia(n),i=tf(e,n,i,l,void 0,d),l=nf(),e!==null&&!Pn?(sf(e,n,d),Di(e,n,d)):(Dt&&l&&Wd(n),n.flags|=1,Wn(e,n,i,d),n.child)}function a_(e,n,i,l,d,m){return ia(n),n.updateQueue=null,i=fp(n,l,i,d),dp(e),l=nf(),e!==null&&!Pn?(sf(e,n,m),Di(e,n,m)):(Dt&&l&&Wd(n),n.flags|=1,Wn(e,n,i,m),n.child)}function r_(e,n,i,l,d){if(ia(n),n.stateNode===null){var m=$a,v=i.contextType;typeof v=="object"&&v!==null&&(m=Zn(v)),m=new i(l,m),n.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=yf,n.stateNode=m,m._reactInternals=n,m=n.stateNode,m.props=l,m.state=n.memoizedState,m.refs={},Af(n),v=i.contextType,m.context=typeof v=="object"&&v!==null?Zn(v):$a,m.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(gf(n,i,v,l),m.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&yf.enqueueReplaceState(m,m.state,null),ol(n,l,m,d),il(),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){m=n.stateNode;var k=n.memoizedProps,N=na(i,k);m.props=N;var I=m.context,re=i.contextType;v=$a,typeof re=="object"&&re!==null&&(v=Zn(re));var pe=i.getDerivedStateFromProps;re=typeof pe=="function"||typeof m.getSnapshotBeforeUpdate=="function",k=n.pendingProps!==k,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(k||I!==v)&&Xp(n,m,l,v),_o=!1;var Z=n.memoizedState;m.state=Z,ol(n,l,m,d),il(),I=n.memoizedState,k||Z!==I||_o?(typeof pe=="function"&&(gf(n,i,pe,l),I=n.memoizedState),(N=_o||Fp(n,i,N,l,Z,I,v))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=I),m.props=l,m.state=I,m.context=v,l=N):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{m=n.stateNode,Df(e,n),v=n.memoizedProps,re=na(i,v),m.props=re,pe=n.pendingProps,Z=m.context,I=i.contextType,N=$a,typeof I=="object"&&I!==null&&(N=Zn(I)),k=i.getDerivedStateFromProps,(I=typeof k=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==pe||Z!==N)&&Xp(n,m,l,N),_o=!1,Z=n.memoizedState,m.state=Z,ol(n,l,m,d),il();var oe=n.memoizedState;v!==pe||Z!==oe||_o||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof k=="function"&&(gf(n,i,k,l),oe=n.memoizedState),(re=_o||Fp(n,i,re,l,Z,oe,N)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(I||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,oe,N),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,oe,N)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=oe),m.props=l,m.state=oe,m.context=N,l=re):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),l=!1)}return m=l,tl(e,n),l=(n.flags&128)!==0,m||l?(m=n.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:m.render(),n.flags|=1,e!==null&&l?(n.child=Ko(n,e.child,null,d),n.child=Ko(n,null,i,d)):Wn(e,n,i,d),n.memoizedState=m.state,e=n.child):e=Di(e,n,d),e}function l_(e,n,i,l){return Yr(),n.flags|=256,Wn(e,n,i,l),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function wf(e){return{baseLanes:e,cachePool:up()}}function Sf(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=Is),e}function c_(e,n,i){var l=n.pendingProps,d=!1,m=(n.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Bn.current&2)!==0),v&&(d=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Dt){if(d?uo(n):fo(),Dt){var k=Yn,N;if(N=k){e:{for(N=k,k=pi;N.nodeType!==8;){if(!k){k=null;break e}if(N=ti(N.nextSibling),N===null){k=null;break e}}k=N}k!==null?(n.memoizedState={dehydrated:k,treeContext:qo!==null?{id:Mi,overflow:Ri}:null,retryLane:536870912},N=Hs(18,null,null,0),N.stateNode=k,N.return=n,n.child=N,ss=n,Yn=null,N=!0):N=!1}N||Go(n)}if(k=n.memoizedState,k!==null&&(k=k.dehydrated,k!==null))return k.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ni(n)}return k=l.children,l=l.fallback,d?(fo(),d=n.mode,k=jf({mode:"hidden",children:k},d),l=aa(l,d,i,null),k.return=n,l.return=n,k.sibling=l,n.child=k,d=n.child,d.memoizedState=wf(i),d.childLanes=Sf(e,v,i),n.memoizedState=vf,l):(uo(n),kf(n,k))}if(N=e.memoizedState,N!==null&&(k=N.dehydrated,k!==null)){if(m)n.flags&256?(uo(n),n.flags&=-257,n=Cf(e,n,i)):n.memoizedState!==null?(fo(),n.child=e.child,n.flags|=128,n=null):(fo(),d=l.fallback,k=n.mode,l=jf({mode:"visible",children:l.children},k),d=aa(d,k,i,null),d.flags|=2,l.return=n,d.return=n,l.sibling=d,n.child=l,Ko(n,e.child,null,i),l=n.child,l.memoizedState=wf(i),l.childLanes=Sf(e,v,i),n.memoizedState=vf,n=d);else if(uo(n),k.data==="$!"){if(v=k.nextSibling&&k.nextSibling.dataset,v)var I=v.dgst;v=I,l=Error(a(419)),l.stack="",l.digest=v,Wr({value:l,source:null,stack:null}),n=Cf(e,n,i)}else if(Pn||nl(e,n,i,!1),v=(i&e.childLanes)!==0,Pn||v){if(v=en,v!==null){if(l=i&-i,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(v.suspendedLanes|i)?0:l,l!==0&&l!==N.retryLane)throw N.retryLane=l,co(e,l),is(v,e,l),e_}k.data==="$?"||eh(),n=Cf(e,n,i)}else k.data==="$?"?(n.flags|=128,n.child=e.child,n=hb.bind(null,e),k._reactRetry=n,n=null):(e=N.treeContext,Yn=ti(k.nextSibling),ss=n,Dt=!0,Js=null,pi=!1,e!==null&&(Os[Bs++]=Mi,Os[Bs++]=Ri,Os[Bs++]=qo,Mi=e.id,Ri=e.overflow,qo=n),n=kf(n,l.children),n.flags|=4096);return n}return d?(fo(),d=l.fallback,k=n.mode,N=e.child,I=N.sibling,l=wo(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&31457280,I!==null?d=wo(I,d):(d=aa(d,k,i,null),d.flags|=2),d.return=n,l.return=n,l.sibling=d,n.child=l,l=d,d=n.child,k=e.child.memoizedState,k===null?k=wf(i):(N=k.cachePool,N!==null?(I=zn._currentValue,N=N.parent!==I?{parent:I,pool:I}:N):N=up(),k={baseLanes:k.baseLanes|i,cachePool:N}),d.memoizedState=k,d.childLanes=Sf(e,v,i),n.memoizedState=vf,l):(uo(n),i=e.child,e=i.sibling,i=wo(i,{mode:"visible",children:l.children}),i.return=n,i.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=i,n.memoizedState=null,i)}function kf(e,n){return n=jf({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jf(e,n){return O_(e,n,0,null)}function Cf(e,n,i){return Ko(n,e.child,null,i),e=kf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function u_(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Rf(e.return,n,i)}function Tf(e,n,i,l,d){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:d}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=i,m.tailMode=d)}function d_(e,n,i){var l=n.pendingProps,d=l.revealOrder,m=l.tail;if(Wn(e,n,l.children,i),l=Bn.current,l&2)l=l&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&u_(e,i,n);else if(e.tag===19)u_(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ht(Bn,l),d){case"forwards":for(i=n.child,d=null;i!==null;)e=i.alternate,e!==null&&Oc(e)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),Tf(n,!1,d,i,m);break;case"backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Oc(e)===null){n.child=d;break}e=d.sibling,d.sibling=i,i=d,d=e}Tf(n,!0,i,null,m);break;case"together":Tf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Di(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),So|=n.lanes,!(i&n.childLanes))if(e!==null){if(nl(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,i=wo(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=wo(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Ef(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function J5(e,n,i){switch(n.tag){case 3:ps(n,n.stateNode.containerInfo),po(n,zn,e.memoizedState.cache),Yr();break;case 27:case 5:Es(n);break;case 4:ps(n,n.stateNode.containerInfo);break;case 10:po(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(uo(n),n.flags|=128,null):i&n.child.childLanes?c_(e,n,i):(uo(n),e=Di(e,n,i),e!==null?e.sibling:null);uo(n);break;case 19:var d=(e.flags&128)!==0;if(l=(i&n.childLanes)!==0,l||(nl(e,n,i,!1),l=(i&n.childLanes)!==0),d){if(l)return d_(e,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ht(Bn,Bn.current),l)break;return null;case 22:case 23:return n.lanes=0,i_(e,n,i);case 24:po(n,zn,e.memoizedState.cache)}return Di(e,n,i)}function f_(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)Pn=!0;else{if(!Ef(e,i)&&!(n.flags&128))return Pn=!1,J5(e,n,i);Pn=!!(e.flags&131072)}else Pn=!1,Dt&&n.flags&1048576&&G0(n,Rc,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,d=l._init;if(l=d(l._payload),n.type=l,typeof l=="function")Vf(l)?(e=na(l,e),n.tag=1,n=r_(null,n,l,e,i)):(n.tag=0,n=bf(null,n,l,e,i));else{if(l!=null){if(d=l.$$typeof,d===S){n.tag=11,n=t_(null,n,l,e,i);break e}else if(d===C){n.tag=14,n=n_(null,n,l,e,i);break e}}throw n=te(l)||l,Error(a(306,n,""))}}return n;case 0:return bf(e,n,n.type,n.pendingProps,i);case 1:return l=n.type,d=na(l,n.pendingProps),r_(e,n,l,d,i);case 3:e:{if(ps(n,n.stateNode.containerInfo),e===null)throw Error(a(387));var m=n.pendingProps;d=n.memoizedState,l=d.element,Df(e,n),ol(n,m,null,i);var v=n.memoizedState;if(m=v.cache,po(n,zn,m),m!==d.cache&&Nf(n,[zn],i,!0),il(),m=v.element,d.isDehydrated)if(d={element:m,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=l_(e,n,m,i);break e}else if(m!==l){l=Ls(Error(a(424)),n),Wr(l),n=l_(e,n,m,i);break e}else for(Yn=ti(n.stateNode.containerInfo.firstChild),ss=n,Dt=!0,Js=null,pi=!0,i=op(n,null,m,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Yr(),m===l){n=Di(e,n,i);break e}Wn(e,n,m,i)}n=n.child}return n;case 26:return tl(e,n),e===null?(i=pg(n.type,null,n.pendingProps,null))?n.memoizedState=i:Dt||(i=n.type,e=n.pendingProps,l=cu(nn.current).createElement(i),l[Vt]=n,l[Qt]=e,Fn(l,i,e),xn(l),n.stateNode=l):n.memoizedState=pg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Es(n),e===null&&Dt&&(l=n.stateNode=fg(n.type,n.pendingProps,nn.current),ss=n,pi=!0,Yn=ti(l.firstChild)),l=n.pendingProps.children,e!==null||Dt?Wn(e,n,l,i):n.child=Ko(n,null,l,i),tl(e,n),n.child;case 5:return e===null&&Dt&&((d=l=Yn)&&(l=Mb(l,n.type,n.pendingProps,pi),l!==null?(n.stateNode=l,ss=n,Yn=ti(l.firstChild),pi=!1,d=!0):d=!1),d||Go(n)),Es(n),d=n.type,m=n.pendingProps,v=e!==null?e.memoizedProps:null,l=m.children,mh(d,m)?l=null:v!==null&&mh(d,v)&&(n.flags|=32),n.memoizedState!==null&&(d=tf(e,n,F5,null,null,i),bl._currentValue=d),tl(e,n),Wn(e,n,l,i),n.child;case 6:return e===null&&Dt&&((e=i=Yn)&&(i=Rb(i,n.pendingProps,pi),i!==null?(n.stateNode=i,ss=n,Yn=null,e=!0):e=!1),e||Go(n)),null;case 13:return c_(e,n,i);case 4:return ps(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ko(n,null,l,i):Wn(e,n,l,i),n.child;case 11:return t_(e,n,n.type,n.pendingProps,i);case 7:return Wn(e,n,n.pendingProps,i),n.child;case 8:return Wn(e,n,n.pendingProps.children,i),n.child;case 12:return Wn(e,n,n.pendingProps.children,i),n.child;case 10:return l=n.pendingProps,po(n,n.type,l.value),Wn(e,n,l.children,i),n.child;case 9:return d=n.type._context,l=n.pendingProps.children,ia(n),d=Zn(d),l=l(d),n.flags|=1,Wn(e,n,l,i),n.child;case 14:return n_(e,n,n.type,n.pendingProps,i);case 15:return s_(e,n,n.type,n.pendingProps,i);case 19:return d_(e,n,i);case 22:return i_(e,n,i);case 24:return ia(n),l=Zn(zn),e===null?(d=Jd(),d===null&&(d=en,m=Kd(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=i),d=m),n.memoizedState={parent:l,cache:d},Af(n),po(n,zn,d)):(e.lanes&i&&(Df(e,n),ol(n,null,null,i),il()),d=e.memoizedState,m=n.memoizedState,d.parent!==l?(d={parent:l,cache:l},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),po(n,zn,l)):(l=m.cache,po(n,zn,l),l!==d.cache&&Nf(n,[zn],i,!0))),Wn(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}var Mf=Be(null),sa=null,Li=null;function po(e,n,i){ht(Mf,n._currentValue),n._currentValue=i}function Oi(e){e._currentValue=Mf.current,ft(Mf)}function Rf(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function Nf(e,n,i,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var v=d.child;m=m.firstContext;e:for(;m!==null;){var k=m;m=d;for(var N=0;N<n.length;N++)if(k.context===n[N]){m.lanes|=i,k=m.alternate,k!==null&&(k.lanes|=i),Rf(m.return,i,e),l||(v=null);break e}m=k.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(a(341));v.lanes|=i,m=v.alternate,m!==null&&(m.lanes|=i),Rf(v,i,e),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===e){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function nl(e,n,i,l){e=null;for(var d=n,m=!1;d!==null;){if(!m){if(d.flags&524288)m=!0;else if(d.flags&262144)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var k=d.type;qe(d.pendingProps.value,v.value)||(e!==null?e.push(k):e=[k])}}else if(d===yn.current){if(v=d.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}d=d.return}e!==null&&Nf(n,e,i,l),n.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!qe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){sa=e,Li=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zn(e){return h_(sa,e)}function qc(e,n){return sa===null&&ia(e),h_(e,n)}function h_(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Li===null){if(e===null)throw Error(a(308));Li=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Li=Li.next=n;return i}var _o=!1;function Af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function go(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yo(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,pn&2){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,n=Ec(e),q0(e,null,i),n}return Tc(e,l,n,i),Ec(e)}function sl(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194176)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Dn(e,i)}}function Lf(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var d=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var v={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};m===null?d=m=v:m=m.next=v,i=i.next}while(i!==null);m===null?d=m=n:m=m.next=n}else d=m=n;i={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var Of=!1;function il(){if(Of){var e=Ya;if(e!==null)throw e}}function ol(e,n,i,l){Of=!1;var d=e.updateQueue;_o=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var N=k,I=N.next;N.next=null,v===null?m=I:v.next=I,v=N;var re=e.alternate;re!==null&&(re=re.updateQueue,k=re.lastBaseUpdate,k!==v&&(k===null?re.firstBaseUpdate=I:k.next=I,re.lastBaseUpdate=N))}if(m!==null){var pe=d.baseState;v=0,re=I=N=null,k=m;do{var Z=k.lane&-536870913,oe=Z!==k.lane;if(oe?(Nt&Z)===Z:(l&Z)===Z){Z!==0&&Z===Ua&&(Of=!0),re!==null&&(re=re.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var Ve=e,lt=k;Z=n;var wn=i;switch(lt.tag){case 1:if(Ve=lt.payload,typeof Ve=="function"){pe=Ve.call(wn,pe,Z);break e}pe=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=lt.payload,Z=typeof Ve=="function"?Ve.call(wn,pe,Z):Ve,Z==null)break e;pe=Q({},pe,Z);break e;case 2:_o=!0}}Z=k.callback,Z!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=d.callbacks,oe===null?d.callbacks=[Z]:oe.push(Z))}else oe={lane:Z,tag:k.tag,payload:k.payload,callback:k.callback,next:null},re===null?(I=re=oe,N=pe):re=re.next=oe,v|=Z;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;oe=k,k=oe.next,oe.next=null,d.lastBaseUpdate=oe,d.shared.pending=null}}while(!0);re===null&&(N=pe),d.baseState=N,d.firstBaseUpdate=I,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),So|=v,e.lanes=v,e.memoizedState=pe}}function m_(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function p_(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)m_(i[e],n)}function al(e,n){try{var i=n.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var d=l.next;i=d;do{if((i.tag&e)===e){l=void 0;var m=i.create,v=i.inst;l=m(),v.destroy=l}i=i.next}while(i!==d)}}catch(k){Kt(n,n.return,k)}}function xo(e,n,i){try{var l=n.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&e)===e){var v=l.inst,k=v.destroy;if(k!==void 0){v.destroy=void 0,d=n;var N=i;try{k()}catch(I){Kt(d,N,I)}}}l=l.next}while(l!==m)}}catch(I){Kt(n,n.return,I)}}function __(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{p_(n,i)}catch(l){Kt(e,e.return,l)}}}function g_(e,n,i){i.props=na(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(l){Kt(e,n,l)}}function oa(e,n){try{var i=e.ref;if(i!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var d=l;break;default:d=l}typeof i=="function"?e.refCleanup=i(d):i.current=d}}catch(m){Kt(e,n,m)}}function ks(e,n){var i=e.ref,l=e.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(d){Kt(e,n,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(d){Kt(e,n,d)}else i.current=null}function y_(e){var n=e.type,i=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(d){Kt(e,e.return,d)}}function x_(e,n,i){try{var l=e.stateNode;kb(l,e.type,i,n),l[Qt]=n}catch(d){Kt(e,e.return,d)}}function b_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Bf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||b_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=lu));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(zf(e,n,i),e=e.sibling;e!==null;)zf(e,n,i),e=e.sibling}function Qc(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Qc(e,n,i),e=e.sibling;e!==null;)Qc(e,n,i),e=e.sibling}var Bi=!1,bn=!1,$f=!1,v_=typeof WeakSet=="function"?WeakSet:Set,Hn=null,w_=!1;function eb(e,n){if(e=e.containerInfo,fh=pu,e=dn(e),Ct(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break e}var v=0,k=-1,N=-1,I=0,re=0,pe=e,Z=null;t:for(;;){for(var oe;pe!==i||d!==0&&pe.nodeType!==3||(k=v+d),pe!==m||l!==0&&pe.nodeType!==3||(N=v+l),pe.nodeType===3&&(v+=pe.nodeValue.length),(oe=pe.firstChild)!==null;)Z=pe,pe=oe;for(;;){if(pe===e)break t;if(Z===i&&++I===d&&(k=v),Z===m&&++re===l&&(N=v),(oe=pe.nextSibling)!==null)break;pe=Z,Z=pe.parentNode}pe=oe}i=k===-1||N===-1?null:{start:k,end:N}}else i=null}i=i||{start:0,end:0}}else i=null;for(hh={focusedElem:e,selectionRange:i},pu=!1,Hn=n;Hn!==null;)if(n=Hn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Hn=e;else for(;Hn!==null;){switch(n=Hn,m=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&m!==null){e=void 0,i=n,d=m.memoizedProps,m=m.memoizedState,l=i.stateNode;try{var Ve=na(i.type,d,i.elementType===i.type);e=l.getSnapshotBeforeUpdate(Ve,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(lt){Kt(i,i.return,lt)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)gh(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Hn=e;break}Hn=n.return}return Ve=w_,w_=!1,Ve}function S_(e,n,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:$i(e,i),l&4&&al(5,i);break;case 1:if($i(e,i),l&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(k){Kt(i,i.return,k)}else{var d=na(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(d,n,e.__reactInternalSnapshotBeforeUpdate)}catch(k){Kt(i,i.return,k)}}l&64&&__(i),l&512&&oa(i,i.return);break;case 3:if($i(e,i),l&64&&(l=i.updateQueue,l!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{p_(l,e)}catch(k){Kt(i,i.return,k)}}break;case 26:$i(e,i),l&512&&oa(i,i.return);break;case 27:case 5:$i(e,i),n===null&&l&4&&y_(i),l&512&&oa(i,i.return);break;case 12:$i(e,i);break;case 13:$i(e,i),l&4&&C_(e,i);break;case 22:if(d=i.memoizedState!==null||Bi,!d){n=n!==null&&n.memoizedState!==null||bn;var m=Bi,v=bn;Bi=d,(bn=n)&&!v?bo(e,i,(i.subtreeFlags&8772)!==0):$i(e,i),Bi=m,bn=v}l&512&&(i.memoizedProps.mode==="manual"?oa(i,i.return):ks(i,i.return));break;default:$i(e,i)}}function k_(e){var n=e.alternate;n!==null&&(e.alternate=null,k_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Cr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Nn=null,js=!1;function zi(e,n,i){for(i=i.child;i!==null;)j_(e,n,i),i=i.sibling}function j_(e,n,i){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(De,i)}catch{}switch(i.tag){case 26:bn||ks(i,n),zi(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:bn||ks(i,n);var l=Nn,d=js;for(Nn=i.stateNode,zi(e,n,i),i=i.stateNode,n=i.attributes;n.length;)i.removeAttributeNode(n[0]);Cr(i),Nn=l,js=d;break;case 5:bn||ks(i,n);case 6:d=Nn;var m=js;if(Nn=null,zi(e,n,i),Nn=d,js=m,Nn!==null)if(js)try{e=Nn,l=i.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(v){Kt(i,n,v)}else try{Nn.removeChild(i.stateNode)}catch(v){Kt(i,n,v)}break;case 18:Nn!==null&&(js?(n=Nn,i=i.stateNode,n.nodeType===8?_h(n.parentNode,i):n.nodeType===1&&_h(n,i),kl(n)):_h(Nn,i.stateNode));break;case 4:l=Nn,d=js,Nn=i.stateNode.containerInfo,js=!0,zi(e,n,i),Nn=l,js=d;break;case 0:case 11:case 14:case 15:bn||xo(2,i,n),bn||xo(4,i,n),zi(e,n,i);break;case 1:bn||(ks(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"&&g_(i,n,l)),zi(e,n,i);break;case 21:zi(e,n,i);break;case 22:bn||ks(i,n),bn=(l=bn)||i.memoizedState!==null,zi(e,n,i),bn=l;break;default:zi(e,n,i)}}function C_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kl(e)}catch(i){Kt(n,n.return,i)}}function tb(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new v_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new v_),n;default:throw Error(a(435,e.tag))}}function Pf(e,n){var i=tb(e);n.forEach(function(l){var d=mb.bind(null,e,l);i.has(l)||(i.add(l),l.then(d,d))})}function $s(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var d=i[l],m=e,v=n,k=v;e:for(;k!==null;){switch(k.tag){case 27:case 5:Nn=k.stateNode,js=!1;break e;case 3:Nn=k.stateNode.containerInfo,js=!0;break e;case 4:Nn=k.stateNode.containerInfo,js=!0;break e}k=k.return}if(Nn===null)throw Error(a(160));j_(m,v,d),Nn=null,js=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)T_(n,e),n=n.sibling}var ei=null;function T_(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$s(n,e),Ps(e),l&4&&(xo(3,e,e.return),al(3,e),xo(5,e,e.return));break;case 1:$s(n,e),Ps(e),l&512&&(bn||i===null||ks(i,i.return)),l&64&&Bi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var d=ei;if($s(n,e),Ps(e),l&512&&(bn||i===null||ks(i,i.return)),l&4){var m=i!==null?i.memoizedState:null;if(l=e.memoizedState,i===null)if(l===null)if(e.stateNode===null){e:{l=e.type,i=e.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[gs]||m[Vt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),Fn(m,l,i),m[Vt]=e,xn(m),l=m;break e;case"link":var v=yg("link","href",d).get(l+(i.href||""));if(v){for(var k=0;k<v.length;k++)if(m=v[k],m.getAttribute("href")===(i.href==null?null:i.href)&&m.getAttribute("rel")===(i.rel==null?null:i.rel)&&m.getAttribute("title")===(i.title==null?null:i.title)&&m.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){v.splice(k,1);break t}}m=d.createElement(l),Fn(m,l,i),d.head.appendChild(m);break;case"meta":if(v=yg("meta","content",d).get(l+(i.content||""))){for(k=0;k<v.length;k++)if(m=v[k],m.getAttribute("content")===(i.content==null?null:""+i.content)&&m.getAttribute("name")===(i.name==null?null:i.name)&&m.getAttribute("property")===(i.property==null?null:i.property)&&m.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&m.getAttribute("charset")===(i.charSet==null?null:i.charSet)){v.splice(k,1);break t}}m=d.createElement(l),Fn(m,l,i),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[Vt]=e,xn(m),l=m}e.stateNode=l}else xg(d,e.type,e.stateNode);else e.stateNode=gg(d,l,e.memoizedProps);else m!==l?(m===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):m.count--,l===null?xg(d,e.type,e.stateNode):gg(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&x_(e,e.memoizedProps,i.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){d=e.stateNode,m=e.memoizedProps;try{for(var N=d.firstChild;N;){var I=N.nextSibling,re=N.nodeName;N[gs]||re==="HEAD"||re==="BODY"||re==="SCRIPT"||re==="STYLE"||re==="LINK"&&N.rel.toLowerCase()==="stylesheet"||d.removeChild(N),N=I}for(var pe=e.type,Z=d.attributes;Z.length;)d.removeAttributeNode(Z[0]);Fn(d,pe,m),d[Vt]=e,d[Qt]=m}catch(Ve){Kt(e,e.return,Ve)}}case 5:if($s(n,e),Ps(e),l&512&&(bn||i===null||ks(i,i.return)),e.flags&32){d=e.stateNode;try{eo(d,"")}catch(Ve){Kt(e,e.return,Ve)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,x_(e,d,i!==null?i.memoizedProps:d)),l&1024&&($f=!0);break;case 6:if($s(n,e),Ps(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,i=e.stateNode;try{i.nodeValue=l}catch(Ve){Kt(e,e.return,Ve)}}break;case 3:if(fu=null,d=ei,ei=uu(n.containerInfo),$s(n,e),ei=d,Ps(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{kl(n.containerInfo)}catch(Ve){Kt(e,e.return,Ve)}$f&&($f=!1,E_(e));break;case 4:l=ei,ei=uu(e.stateNode.containerInfo),$s(n,e),Ps(e),ei=l;break;case 12:$s(n,e),Ps(e);break;case 13:$s(n,e),Ps(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(qf=ot()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 22:if(l&512&&(bn||i===null||ks(i,i.return)),N=e.memoizedState!==null,I=i!==null&&i.memoizedState!==null,re=Bi,pe=bn,Bi=re||N,bn=pe||I,$s(n,e),bn=pe,Bi=re,Ps(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,l&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Bi||bn,i===null||I||n||qa(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(i=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(i===null){I=i=n;try{if(d=I.stateNode,N)m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=I.stateNode,k=I.memoizedProps.style;var oe=k!=null&&k.hasOwnProperty("display")?k.display:null;v.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Ve){Kt(I,I.return,Ve)}}}else if(n.tag===6){if(i===null){I=n;try{I.stateNode.nodeValue=N?"":I.memoizedProps}catch(Ve){Kt(I,I.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,Pf(e,i))));break;case 19:$s(n,e),Ps(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 21:break;default:$s(n,e),Ps(e)}}function Ps(e){var n=e.flags;if(n&2){try{if(e.tag!==27){e:{for(var i=e.return;i!==null;){if(b_(i)){var l=i;break e}i=i.return}throw Error(a(160))}switch(l.tag){case 27:var d=l.stateNode,m=Bf(e);Qc(e,m,d);break;case 5:var v=l.stateNode;l.flags&32&&(eo(v,""),l.flags&=-33);var k=Bf(e);Qc(e,k,v);break;case 3:case 4:var N=l.stateNode.containerInfo,I=Bf(e);zf(e,I,N);break;default:throw Error(a(161))}}}catch(re){Kt(e,e.return,re)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function E_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;E_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)S_(e,n.alternate,n),n=n.sibling}function qa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xo(4,n,n.return),qa(n);break;case 1:ks(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&g_(n,n.return,i),qa(n);break;case 26:case 27:case 5:ks(n,n.return),qa(n);break;case 22:ks(n,n.return),n.memoizedState===null&&qa(n);break;default:qa(n)}e=e.sibling}}function bo(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,d=e,m=n,v=m.flags;switch(m.tag){case 0:case 11:case 15:bo(d,m,i),al(4,m);break;case 1:if(bo(d,m,i),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(I){Kt(l,l.return,I)}if(l=m,d=l.updateQueue,d!==null){var k=l.stateNode;try{var N=d.shared.hiddenCallbacks;if(N!==null)for(d.shared.hiddenCallbacks=null,d=0;d<N.length;d++)m_(N[d],k)}catch(I){Kt(l,l.return,I)}}i&&v&64&&__(m),oa(m,m.return);break;case 26:case 27:case 5:bo(d,m,i),i&&l===null&&v&4&&y_(m),oa(m,m.return);break;case 12:bo(d,m,i);break;case 13:bo(d,m,i),i&&v&4&&C_(d,m);break;case 22:m.memoizedState===null&&bo(d,m,i),oa(m,m.return);break;default:bo(d,m,i)}n=n.sibling}}function Hf(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Gr(i))}function If(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Gr(e))}function vo(e,n,i,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)M_(e,n,i,l),n=n.sibling}function M_(e,n,i,l){var d=n.flags;switch(n.tag){case 0:case 11:case 15:vo(e,n,i,l),d&2048&&al(9,n);break;case 3:vo(e,n,i,l),d&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Gr(e)));break;case 12:if(d&2048){vo(e,n,i,l),e=n.stateNode;try{var m=n.memoizedProps,v=m.id,k=m.onPostCommit;typeof k=="function"&&k(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Kt(n,n.return,N)}}else vo(e,n,i,l);break;case 23:break;case 22:m=n.stateNode,n.memoizedState!==null?m._visibility&4?vo(e,n,i,l):rl(e,n):m._visibility&4?vo(e,n,i,l):(m._visibility|=4,Qa(e,n,i,l,(n.subtreeFlags&10256)!==0)),d&2048&&Hf(n.alternate,n);break;case 24:vo(e,n,i,l),d&2048&&If(n.alternate,n);break;default:vo(e,n,i,l)}}function Qa(e,n,i,l,d){for(d=d&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var m=e,v=n,k=i,N=l,I=v.flags;switch(v.tag){case 0:case 11:case 15:Qa(m,v,k,N,d),al(8,v);break;case 23:break;case 22:var re=v.stateNode;v.memoizedState!==null?re._visibility&4?Qa(m,v,k,N,d):rl(m,v):(re._visibility|=4,Qa(m,v,k,N,d)),d&&I&2048&&Hf(v.alternate,v);break;case 24:Qa(m,v,k,N,d),d&&I&2048&&If(v.alternate,v);break;default:Qa(m,v,k,N,d)}n=n.sibling}}function rl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,l=n,d=l.flags;switch(l.tag){case 22:rl(i,l),d&2048&&Hf(l.alternate,l);break;case 24:rl(i,l),d&2048&&If(l.alternate,l);break;default:rl(i,l)}n=n.sibling}}var ll=8192;function Ga(e){if(e.subtreeFlags&ll)for(e=e.child;e!==null;)R_(e),e=e.sibling}function R_(e){switch(e.tag){case 26:Ga(e),e.flags&ll&&e.memoizedState!==null&&Ub(ei,e.memoizedState,e.memoizedProps);break;case 5:Ga(e);break;case 3:case 4:var n=ei;ei=uu(e.stateNode.containerInfo),Ga(e),ei=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ll,ll=16777216,Ga(e),ll=n):Ga(e));break;default:Ga(e)}}function N_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function cl(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];Hn=l,D_(l,e)}N_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)A_(e),e=e.sibling}function A_(e){switch(e.tag){case 0:case 11:case 15:cl(e),e.flags&2048&&xo(9,e,e.return);break;case 3:cl(e);break;case 12:cl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Gc(e)):cl(e);break;default:cl(e)}}function Gc(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];Hn=l,D_(l,e)}N_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xo(8,n,n.return),Gc(n);break;case 22:i=n.stateNode,i._visibility&4&&(i._visibility&=-5,Gc(n));break;default:Gc(n)}e=e.sibling}}function D_(e,n){for(;Hn!==null;){var i=Hn;switch(i.tag){case 0:case 11:case 15:xo(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Gr(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,Hn=l;else e:for(i=e;Hn!==null;){l=Hn;var d=l.sibling,m=l.return;if(k_(l),l===i){Hn=null;break e}if(d!==null){d.return=m,Hn=d;break e}Hn=m}}}function nb(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hs(e,n,i,l){return new nb(e,n,i,l)}function Vf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wo(e,n){var i=e.alternate;return i===null?(i=Hs(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&31457280,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function L_(e,n){e.flags&=31457282;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Kc(e,n,i,l,d,m){var v=0;if(l=e,typeof e=="function")Vf(e)&&(v=1);else if(typeof e=="string")v=Ib(e,i,$t.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case h:return aa(i.children,d,m,n);case _:v=8,d|=24;break;case g:return e=Hs(12,i,n,d|2),e.elementType=g,e.lanes=m,e;case T:return e=Hs(13,i,n,d),e.elementType=T,e.lanes=m,e;case M:return e=Hs(19,i,n,d),e.elementType=M,e.lanes=m,e;case O:return O_(i,d,m,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case w:v=10;break e;case x:v=9;break e;case S:v=11;break e;case C:v=14;break e;case z:v=16,l=null;break e}v=29,i=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=Hs(v,i,n,d),n.elementType=e,n.type=l,n.lanes=m,n}function aa(e,n,i,l){return e=Hs(7,e,l,n),e.lanes=i,e}function O_(e,n,i,l){e=Hs(22,e,l,n),e.elementType=O,e.lanes=i;var d={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=d._current;if(m===null)throw Error(a(456));if(!(d._pendingVisibility&2)){var v=co(m,2);v!==null&&(d._pendingVisibility|=2,is(v,m,2))}},attach:function(){var m=d._current;if(m===null)throw Error(a(456));if(d._pendingVisibility&2){var v=co(m,2);v!==null&&(d._pendingVisibility&=-3,is(v,m,2))}}};return e.stateNode=d,e}function Uf(e,n,i){return e=Hs(6,e,null,n),e.lanes=i,e}function Yf(e,n,i){return n=Hs(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pi(e){e.flags|=4}function B_(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!bg(n)){if(n=zs.current,n!==null&&((Nt&4194176)===Nt?_i!==null:(Nt&62914560)!==Nt&&!(Nt&536870912)||n!==_i))throw Xr=qd,J0;e.flags|=8192}}function Zc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cn():536870912,e.lanes|=n,Za|=n)}function ul(e,n){if(!Dt)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function mn(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var d=e.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags&31457280,l|=d.flags&31457280,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function sb(e,n,i){var l=n.pendingProps;switch(Fd(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(n),null;case 1:return mn(n),null;case 3:return i=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Oi(zn),qn(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ur(n)?Pi(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Js!==null&&(Zf(Js),Js=null))),mn(n),null;case 26:return i=n.memoizedState,e===null?(Pi(n),i!==null?(mn(n),B_(n,i)):(mn(n),n.flags&=-16777217)):i?i!==e.memoizedState?(Pi(n),mn(n),B_(n,i)):(mn(n),n.flags&=-16777217):(e.memoizedProps!==l&&Pi(n),mn(n),n.flags&=-16777217),null;case 27:se(n),i=nn.current;var d=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Pi(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return mn(n),null}e=$t.current,Ur(n)?K0(n):(e=fg(d,l,i),n.stateNode=e,Pi(n))}return mn(n),null;case 5:if(se(n),i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Pi(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return mn(n),null}if(e=$t.current,Ur(n))K0(n);else{switch(d=cu(nn.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?d.createElement(i,{is:l.is}):d.createElement(i)}}e[Vt]=n,e[Qt]=l;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=e;e:switch(Fn(e,i,l),i){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Pi(n)}}return mn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Pi(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=nn.current,Ur(n)){if(e=n.stateNode,i=n.memoizedProps,l=null,d=ss,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[Vt]=n,e=!!(e.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||ag(e.nodeValue,i)),e||Go(n)}else e=cu(e).createTextNode(l),e[Vt]=n,n.stateNode=e}return mn(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Ur(n),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[Vt]=n}else Yr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;mn(n),d=!1}else Js!==null&&(Zf(Js),Js=null),d=!0;if(!d)return n.flags&256?(Ni(n),n):(Ni(n),null)}if(Ni(n),n.flags&128)return n.lanes=i,n;if(i=l!==null,e=e!==null&&e.memoizedState!==null,i){l=n.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)}return i!==e&&i&&(n.child.flags|=8192),Zc(n,n.updateQueue),mn(n),null;case 4:return qn(),e===null&&ch(n.stateNode.containerInfo),mn(n),null;case 10:return Oi(n.type),mn(n),null;case 19:if(ft(Bn),d=n.memoizedState,d===null)return mn(n),null;if(l=(n.flags&128)!==0,m=d.rendering,m===null)if(l)ul(d,!1);else{if(vn!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(m=Oc(e),m!==null){for(n.flags|=128,ul(d,!1),e=m.updateQueue,n.updateQueue=e,Zc(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)L_(i,e),i=i.sibling;return ht(Bn,Bn.current&1|2),n.child}e=e.sibling}d.tail!==null&&ot()>Jc&&(n.flags|=128,l=!0,ul(d,!1),n.lanes=4194304)}else{if(!l)if(e=Oc(m),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Zc(n,e),ul(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Dt)return mn(n),null}else 2*ot()-d.renderingStartTime>Jc&&i!==536870912&&(n.flags|=128,l=!0,ul(d,!1),n.lanes=4194304);d.isBackwards?(m.sibling=n.child,n.child=m):(e=d.last,e!==null?e.sibling=m:n.child=m,d.last=m)}return d.tail!==null?(n=d.tail,d.rendering=n,d.tail=n.sibling,d.renderingStartTime=ot(),n.sibling=null,e=Bn.current,ht(Bn,l?e&1|2:e&1),n):(mn(n),null);case 22:case 23:return Ni(n),Gd(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?i&536870912&&!(n.flags&128)&&(mn(n),n.subtreeFlags&6&&(n.flags|=8192)):mn(n),i=n.updateQueue,i!==null&&Zc(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048),e!==null&&ft(Zo),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),Oi(zn),mn(n),null;case 25:return null}throw Error(a(156,n.tag))}function ib(e,n){switch(Fd(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Oi(zn),qn(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return se(n),null;case 13:if(Ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ft(Bn),null;case 4:return qn(),null;case 10:return Oi(n.type),null;case 22:case 23:return Ni(n),Gd(),e!==null&&ft(Zo),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Oi(zn),null;case 25:return null;default:return null}}function z_(e,n){switch(Fd(n),n.tag){case 3:Oi(zn),qn();break;case 26:case 27:case 5:se(n);break;case 4:qn();break;case 13:Ni(n);break;case 19:ft(Bn);break;case 10:Oi(n.type);break;case 22:case 23:Ni(n),Gd(),e!==null&&ft(Zo);break;case 24:Oi(zn)}}var ob={getCacheForType:function(e){var n=Zn(zn),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i}},ab=typeof WeakMap=="function"?WeakMap:Map,pn=0,en=null,Tt=null,Nt=0,tn=0,Cs=null,Hi=!1,Ka=!1,Wf=!1,Ii=0,vn=0,So=0,ra=0,Ff=0,Is=0,Za=0,dl=null,yi=null,Xf=!1,qf=0,Jc=1/0,eu=null,ko=null,tu=!1,la=null,fl=0,Qf=0,Gf=null,hl=0,Kf=null;function Ts(){if(pn&2&&Nt!==0)return Nt&-Nt;if(F.T!==null){var e=Ua;return e!==0?e:oh()}return Ms()}function $_(){Is===0&&(Is=!(Nt&536870912)||Dt?rt():536870912);var e=zs.current;return e!==null&&(e.flags|=32),Is}function is(e,n,i){(e===en&&tn===2||e.cancelPendingCommit!==null)&&(Ja(e,0),Vi(e,Nt,Is,!1)),yt(e,i),(!(pn&2)||e!==en)&&(e===en&&(!(pn&2)&&(ra|=i),vn===4&&Vi(e,Nt,Is,!1)),xi(e))}function P_(e,n,i){if(pn&6)throw Error(a(327));var l=!i&&(n&60)===0&&(n&e.expiredLanes)===0||mt(e,n),d=l?cb(e,n):th(e,n,!0),m=l;do{if(d===0){Ka&&!l&&Vi(e,n,0,!1);break}else if(d===6)Vi(e,n,0,!Hi);else{if(i=e.current.alternate,m&&!rb(i)){d=th(e,n,!1),m=!1;continue}if(d===2){if(m=n,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var k=e;d=dl;var N=k.current.memoizedState.isDehydrated;if(N&&(Ja(k,v).flags|=256),v=th(k,v,!1),v!==2){if(Wf&&!N){k.errorRecoveryDisabledLanes|=m,ra|=m,d=4;break e}m=yi,yi=d,m!==null&&Zf(m)}d=v}if(m=!1,d!==2)continue}}if(d===1){Ja(e,0),Vi(e,n,0,!0);break}e:{switch(l=e,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194176)===n){Vi(l,n,Is,!Hi);break e}break;case 2:yi=null;break;case 3:case 5:break;default:throw Error(a(329))}if(l.finishedWork=i,l.finishedLanes=n,(n&62914560)===n&&(m=qf+300-ot(),10<m)){if(Vi(l,n,Is,!Hi),Ee(l,0)!==0)break e;l.timeoutHandle=cg(H_.bind(null,l,i,yi,eu,Xf,n,Is,ra,Za,Hi,2,-0,0),m);break e}H_(l,i,yi,eu,Xf,n,Is,ra,Za,Hi,0,-0,0)}}break}while(!0);xi(e)}function Zf(e){yi===null?yi=e:yi.push.apply(yi,e)}function H_(e,n,i,l,d,m,v,k,N,I,re,pe,Z){var oe=n.subtreeFlags;if((oe&8192||(oe&16785408)===16785408)&&(xl={stylesheets:null,count:0,unsuspend:Vb},R_(n),n=Yb(),n!==null)){e.cancelPendingCommit=n(X_.bind(null,e,i,l,d,v,k,N,1,pe,Z)),Vi(e,m,v,!I);return}X_(e,i,l,d,v,k,N,re,pe,Z)}function rb(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var d=i[l],m=d.getSnapshot;d=d.value;try{if(!qe(m(),d))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vi(e,n,i,l){n&=~Ff,n&=~ra,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var d=n;0<d;){var m=31-Ye(d),v=1<<m;l[m]=-1,d&=~v}i!==0&&$n(e,i,n)}function nu(){return pn&6?!0:(ml(0),!1)}function Jf(){if(Tt!==null){if(tn===0)var e=Tt.return;else e=Tt,Li=sa=null,of(e),Ia=null,qr=0,e=Tt;for(;e!==null;)z_(e.alternate,e),e=e.return;Tt=null}}function Ja(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Cb(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Jf(),en=e,Tt=i=wo(e.current,null),Nt=n,tn=0,Cs=null,Hi=!1,Ka=mt(e,n),Wf=!1,Za=Is=Ff=ra=So=vn=0,yi=dl=null,Xf=!1,n&8&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var d=31-Ye(l),m=1<<d;n|=e[d],l&=~m}return Ii=n,Cc(),i}function I_(e,n){bt=null,F.H=gi,n===Fr?(n=np(),tn=3):n===J0?(n=np(),tn=4):tn=n===e_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Cs=n,Tt===null&&(vn=1,Fc(e,Ls(n,e.current)))}function V_(){var e=F.H;return F.H=gi,e===null?gi:e}function U_(){var e=F.A;return F.A=ob,e}function eh(){vn=4,Hi||(Nt&4194176)!==Nt&&zs.current!==null||(Ka=!0),!(So&134217727)&&!(ra&134217727)||en===null||Vi(en,Nt,Is,!1)}function th(e,n,i){var l=pn;pn|=2;var d=V_(),m=U_();(en!==e||Nt!==n)&&(eu=null,Ja(e,n)),n=!1;var v=vn;e:do try{if(tn!==0&&Tt!==null){var k=Tt,N=Cs;switch(tn){case 8:Jf(),v=6;break e;case 3:case 2:case 6:zs.current===null&&(n=!0);var I=tn;if(tn=0,Cs=null,er(e,k,N,I),i&&Ka){v=0;break e}break;default:I=tn,tn=0,Cs=null,er(e,k,N,I)}}lb(),v=vn;break}catch(re){I_(e,re)}while(!0);return n&&e.shellSuspendCounter++,Li=sa=null,pn=l,F.H=d,F.A=m,Tt===null&&(en=null,Nt=0,Cc()),v}function lb(){for(;Tt!==null;)Y_(Tt)}function cb(e,n){var i=pn;pn|=2;var l=V_(),d=U_();en!==e||Nt!==n?(eu=null,Jc=ot()+500,Ja(e,n)):Ka=mt(e,n);e:do try{if(tn!==0&&Tt!==null){n=Tt;var m=Cs;t:switch(tn){case 1:tn=0,Cs=null,er(e,n,m,1);break;case 2:if(ep(m)){tn=0,Cs=null,W_(n);break}n=function(){tn===2&&en===e&&(tn=7),xi(e)},m.then(n,n);break e;case 3:tn=7;break e;case 4:tn=5;break e;case 7:ep(m)?(tn=0,Cs=null,W_(n)):(tn=0,Cs=null,er(e,n,m,7));break;case 5:var v=null;switch(Tt.tag){case 26:v=Tt.memoizedState;case 5:case 27:var k=Tt;if(!v||bg(v)){tn=0,Cs=null;var N=k.sibling;if(N!==null)Tt=N;else{var I=k.return;I!==null?(Tt=I,su(I)):Tt=null}break t}}tn=0,Cs=null,er(e,n,m,5);break;case 6:tn=0,Cs=null,er(e,n,m,6);break;case 8:Jf(),vn=6;break e;default:throw Error(a(462))}}ub();break}catch(re){I_(e,re)}while(!0);return Li=sa=null,F.H=l,F.A=d,pn=i,Tt!==null?0:(en=null,Nt=0,Cc(),vn)}function ub(){for(;Tt!==null&&!St();)Y_(Tt)}function Y_(e){var n=f_(e.alternate,e,Ii);e.memoizedProps=e.pendingProps,n===null?su(e):Tt=n}function W_(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=a_(i,n,n.pendingProps,n.type,void 0,Nt);break;case 11:n=a_(i,n,n.pendingProps,n.type.render,n.ref,Nt);break;case 5:of(n);default:z_(i,n),n=Tt=L_(n,Ii),n=f_(i,n,Ii)}e.memoizedProps=e.pendingProps,n===null?su(e):Tt=n}function er(e,n,i,l){Li=sa=null,of(n),Ia=null,qr=0;var d=n.return;try{if(Z5(e,d,n,i,Nt)){vn=1,Fc(e,Ls(i,e.current)),Tt=null;return}}catch(m){if(d!==null)throw Tt=d,m;vn=1,Fc(e,Ls(i,e.current)),Tt=null;return}n.flags&32768?(Dt||l===1?e=!0:Ka||Nt&536870912?e=!1:(Hi=e=!0,(l===2||l===3||l===6)&&(l=zs.current,l!==null&&l.tag===13&&(l.flags|=16384))),F_(n,e)):su(n)}function su(e){var n=e;do{if(n.flags&32768){F_(n,Hi);return}e=n.return;var i=sb(n.alternate,n,Ii);if(i!==null){Tt=i;return}if(n=n.sibling,n!==null){Tt=n;return}Tt=n=e}while(n!==null);vn===0&&(vn=5)}function F_(e,n){do{var i=ib(e.alternate,e);if(i!==null){i.flags&=32767,Tt=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){Tt=e;return}Tt=e=i}while(e!==null);vn=6,Tt=null}function X_(e,n,i,l,d,m,v,k,N,I){var re=F.T,pe=ve.p;try{ve.p=2,F.T=null,db(e,n,i,l,pe,d,m,v,k,N,I)}finally{F.T=re,ve.p=pe}}function db(e,n,i,l,d,m,v,k){do tr();while(la!==null);if(pn&6)throw Error(a(327));var N=e.finishedWork;if(l=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var I=N.lanes|N.childLanes;if(I|=Ud,kn(e,l,I,m,v,k),e===en&&(Tt=en=null,Nt=0),!(N.subtreeFlags&10256)&&!(N.flags&10256)||tu||(tu=!0,Qf=I,Gf=i,pb($e,function(){return tr(),null})),i=(N.flags&15990)!==0,N.subtreeFlags&15990||i?(i=F.T,F.T=null,m=ve.p,ve.p=2,v=pn,pn|=4,eb(e,N),T_(N,e),fn(hh,e.containerInfo),pu=!!fh,hh=fh=null,e.current=N,S_(e,N.alternate,N),ut(),pn=v,ve.p=m,F.T=i):e.current=N,tu?(tu=!1,la=e,fl=l):q_(e,I),I=e.pendingLanes,I===0&&(ko=null),xe(N.stateNode),xi(e),n!==null)for(d=e.onRecoverableError,N=0;N<n.length;N++)I=n[N],d(I.value,{componentStack:I.stack});return fl&3&&tr(),I=e.pendingLanes,l&4194218&&I&42?e===Kf?hl++:(hl=0,Kf=e):hl=0,ml(0),null}function q_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Gr(n)))}function tr(){if(la!==null){var e=la,n=Qf;Qf=0;var i=Ti(fl),l=F.T,d=ve.p;try{if(ve.p=32>i?32:i,F.T=null,la===null)var m=!1;else{i=Gf,Gf=null;var v=la,k=fl;if(la=null,fl=0,pn&6)throw Error(a(331));var N=pn;if(pn|=4,A_(v.current),M_(v,v.current,k,i),pn=N,ml(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(De,v)}catch{}m=!0}return m}finally{ve.p=d,F.T=l,q_(e,n)}}return!1}function Q_(e,n,i){n=Ls(i,n),n=xf(e.stateNode,n,2),e=yo(e,n,2),e!==null&&(yt(e,2),xi(e))}function Kt(e,n,i){if(e.tag===3)Q_(e,e,i);else for(;n!==null;){if(n.tag===3){Q_(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ko===null||!ko.has(l))){e=Ls(i,e),i=Zp(2),l=yo(n,i,2),l!==null&&(Jp(i,l,n,e),yt(l,2),xi(l));break}}n=n.return}}function nh(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new ab;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(i)||(Wf=!0,d.add(i),e=fb.bind(null,e,n,i),n.then(e,e))}function fb(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,en===e&&(Nt&i)===i&&(vn===4||vn===3&&(Nt&62914560)===Nt&&300>ot()-qf?!(pn&2)&&Ja(e,0):Ff|=i,Za===Nt&&(Za=0)),xi(e)}function G_(e,n){n===0&&(n=cn()),e=co(e,n),e!==null&&(yt(e,n),xi(e))}function hb(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),G_(e,i)}function mb(e,n){var i=0;switch(e.tag){case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(i=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),G_(e,i)}function pb(e,n){return it(e,n)}var iu=null,nr=null,sh=!1,ou=!1,ih=!1,ca=0;function xi(e){e!==nr&&e.next===null&&(nr===null?iu=nr=e:nr=nr.next=e),ou=!0,sh||(sh=!0,gb(_b))}function ml(e,n){if(!ih&&ou){ih=!0;do for(var i=!1,l=iu;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var v=l.suspendedLanes,k=l.pingedLanes;m=(1<<31-Ye(42|e)+1)-1,m&=d&~(v&~k),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(i=!0,J_(l,m))}else m=Nt,m=Ee(l,l===en?m:0),!(m&3)||mt(l,m)||(i=!0,J_(l,m));l=l.next}while(i);ih=!1}}function _b(){ou=sh=!1;var e=0;ca!==0&&(jb()&&(e=ca),ca=0);for(var n=ot(),i=null,l=iu;l!==null;){var d=l.next,m=K_(l,n);m===0?(l.next=null,i===null?iu=d:i.next=d,d===null&&(nr=i)):(i=l,(e!==0||m&3)&&(ou=!0)),l=d}ml(e)}function K_(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-Ye(m),k=1<<v,N=d[v];N===-1?(!(k&i)||k&l)&&(d[v]=pt(k,n)):N<=n&&(e.expiredLanes|=k),m&=~k}if(n=en,i=Nt,i=Ee(e,e===n?i:0),l=e.callbackNode,i===0||e===n&&tn===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Xe(l),e.callbackNode=null,e.callbackPriority=0;if(!(i&3)||mt(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(l!==null&&Xe(l),Ti(i)){case 2:case 8:i=qt;break;case 32:i=$e;break;case 268435456:i=q;break;default:i=$e}return l=Z_.bind(null,e),i=it(i,l),e.callbackPriority=n,e.callbackNode=i,n}return l!==null&&l!==null&&Xe(l),e.callbackPriority=2,e.callbackNode=null,2}function Z_(e,n){var i=e.callbackNode;if(tr()&&e.callbackNode!==i)return null;var l=Nt;return l=Ee(e,e===en?l:0),l===0?null:(P_(e,l,n),K_(e,ot()),e.callbackNode!=null&&e.callbackNode===i?Z_.bind(null,e):null)}function J_(e,n){if(tr())return null;P_(e,n,!0)}function gb(e){Tb(function(){pn&6?it(Mt,e):e()})}function oh(){return ca===0&&(ca=rt()),ca}function eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Io(""+e)}function tg(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function yb(e,n,i,l,d){if(n==="submit"&&i&&i.stateNode===d){var m=eg((d[Qt]||null).action),v=l.submitter;v&&(n=(n=v[Qt]||null)?eg(n.formAction):v.getAttribute("formAction"),n!==null&&(m=n,v=null));var k=new ui("action","action",null,l,d);e.push({event:k,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ca!==0){var N=v?tg(d,v):new FormData(d);mf(i,{pending:!0,data:N,method:d.method,action:m},null,N)}}else typeof m=="function"&&(k.preventDefault(),N=v?tg(d,v):new FormData(d),mf(i,{pending:!0,data:N,method:d.method,action:m},m,N))},currentTarget:d}]})}}for(var ah=0;ah<X0.length;ah++){var rh=X0[ah],xb=rh.toLowerCase(),bb=rh[0].toUpperCase()+rh.slice(1);Zs(xb,"on"+bb)}Zs(Ks,"onAnimationEnd"),Zs(mi,"onAnimationIteration"),Zs(jc,"onAnimationStart"),Zs("dblclick","onDoubleClick"),Zs("focusin","onFocus"),Zs("focusout","onBlur"),Zs(Hd,"onTransitionRun"),Zs(Id,"onTransitionStart"),Zs(Vd,"onTransitionCancel"),Zs(W0,"onTransitionEnd"),Fs("onMouseEnter",["mouseout","mouseover"]),Fs("onMouseLeave",["mouseout","mouseover"]),Fs("onPointerEnter",["pointerout","pointerover"]),Fs("onPointerLeave",["pointerout","pointerover"]),ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ys("onBeforeInput",["compositionend","keypress","textInput","paste"]),ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function ng(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],d=l.event;l=l.listeners;e:{var m=void 0;if(n)for(var v=l.length-1;0<=v;v--){var k=l[v],N=k.instance,I=k.currentTarget;if(k=k.listener,N!==m&&d.isPropagationStopped())break e;m=k,d.currentTarget=I;try{m(d)}catch(re){Wc(re)}d.currentTarget=null,m=N}else for(v=0;v<l.length;v++){if(k=l[v],N=k.instance,I=k.currentTarget,k=k.listener,N!==m&&d.isPropagationStopped())break e;m=k,d.currentTarget=I;try{m(d)}catch(re){Wc(re)}d.currentTarget=null,m=N}}}}function Rt(e,n){var i=n[Te];i===void 0&&(i=n[Te]=new Set);var l=e+"__bubble";i.has(l)||(sg(n,e,2,!1),i.add(l))}function lh(e,n,i){var l=0;n&&(l|=4),sg(i,e,l,n)}var au="_reactListening"+Math.random().toString(36).slice(2);function ch(e){if(!e[au]){e[au]=!0,cc.forEach(function(i){i!=="selectionchange"&&(vb.has(i)||lh(i,!1,e),lh(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[au]||(n[au]=!0,lh("selectionchange",!1,n))}}function sg(e,n,i,l){switch(Cg(n)){case 2:var d=Xb;break;case 8:d=qb;break;default:d=wh}i=d.bind(null,n,i,e),d=void 0,!Bt||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(n,i,{capture:!0,passive:d}):e.addEventListener(n,i,!0):d!==void 0?e.addEventListener(n,i,{passive:d}):e.addEventListener(n,i,!1)}function uh(e,n,i,l,d){var m=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var k=l.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(v===4)for(v=l.return;v!==null;){var N=v.tag;if((N===3||N===4)&&(N=v.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;v=v.return}for(;k!==null;){if(v=ai(k),v===null)return;if(N=v.tag,N===5||N===6||N===26||N===27){l=m=v;continue e}k=k.parentNode}}l=l.return}ds(function(){var I=m,re=Rr(i),pe=[];e:{var Z=F0.get(e);if(Z!==void 0){var oe=ui,Ve=e;switch(e){case"keypress":if(to(i)===0)break e;case"keydown":case"keyup":oe=io;break;case"focusin":Ve="focus",oe=Ra;break;case"focusout":Ve="blur",oe=Ra;break;case"beforeblur":case"afterblur":oe=Ra;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Yo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Da;break;case Ks:case mi:case jc:oe=_c;break;case W0:oe=bc;break;case"scroll":case"scrollend":oe=Od;break;case"wheel":oe=Ns;break;case"copy":case"cut":case"paste":oe=Bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=zr;break;case"toggle":case"beforetoggle":oe=Pr}var lt=(n&4)!==0,wn=!lt&&(e==="scroll"||e==="scrollend"),U=lt?Z!==null?Z+"Capture":null:Z;lt=[];for(var H=I,X;H!==null;){var de=H;if(X=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||X===null||U===null||(de=bs(H,U),de!=null&&lt.push(_l(H,de,X))),wn)break;H=H.return}0<lt.length&&(Z=new oe(Z,Ve,null,i,re),pe.push({event:Z,listeners:lt}))}}if(!(n&7)){e:{if(Z=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",Z&&i!==Mr&&(Ve=i.relatedTarget||i.fromElement)&&(ai(Ve)||Ve[_s]))break e;if((oe||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,oe?(Ve=i.relatedTarget||i.toElement,oe=I,Ve=Ve?ai(Ve):null,Ve!==null&&(wn=K(Ve),lt=Ve.tag,Ve!==wn||lt!==5&&lt!==27&&lt!==6)&&(Ve=null)):(oe=null,Ve=I),oe!==Ve)){if(lt=ws,de="onMouseLeave",U="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(lt=zr,de="onPointerLeave",U="onPointerEnter",H="pointer"),wn=oe==null?Z:$o(oe),X=Ve==null?Z:$o(Ve),Z=new lt(de,H+"leave",oe,i,re),Z.target=wn,Z.relatedTarget=X,de=null,ai(re)===I&&(lt=new lt(U,H+"enter",Ve,i,re),lt.target=X,lt.relatedTarget=wn,de=lt),wn=de,oe&&Ve)t:{for(lt=oe,U=Ve,H=0,X=lt;X;X=sr(X))H++;for(X=0,de=U;de;de=sr(de))X++;for(;0<H-X;)lt=sr(lt),H--;for(;0<X-H;)U=sr(U),X--;for(;H--;){if(lt===U||U!==null&&lt===U.alternate)break t;lt=sr(lt),U=sr(U)}lt=null}else lt=null;oe!==null&&ig(pe,Z,oe,lt,!1),Ve!==null&&wn!==null&&ig(pe,wn,Ve,lt,!0)}}e:{if(Z=I?$o(I):window,oe=Z.nodeName&&Z.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Z.type==="file")var Oe=j;else if(Ir(Z))if(R)Oe=He;else{Oe=je;var vt=we}else oe=Z.nodeName,!oe||oe.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?I&&cs(I.elementType)&&(Oe=j):Oe=ze;if(Oe&&(Oe=Oe(e,I))){Vr(pe,Oe,i,re);break e}vt&&vt(e,Z,I),e==="focusout"&&I&&Z.type==="number"&&I.memoizedProps.value!=null&&ci(Z,"number",Z.value)}switch(vt=I?$o(I):window,e){case"focusin":(Ir(vt)||vt.contentEditable==="true")&&(nt=vt,hn=I,Pt=null);break;case"focusout":Pt=hn=nt=null;break;case"mousedown":On=!0;break;case"contextmenu":case"mouseup":case"dragend":On=!1,Kn(pe,i,re);break;case"selectionchange":if(et)break;case"keydown":case"keyup":Kn(pe,i,re)}var We;if(oo)e:{switch(e){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Ss?vc(e,i)&&(tt="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(tt="onCompositionStart");tt&&(hi&&i.locale!=="ko"&&(Ss||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Ss&&(We=Nr()):(Gn=re,Ea="value"in Gn?Gn.value:Gn.textContent,Ss=!0)),vt=ru(I,tt),0<vt.length&&(tt=new Dr(tt,e,null,i,re),pe.push({event:tt,listeners:vt}),We?tt.data=We:(We=ao(i),We!==null&&(tt.data=We)))),(We=$d?Pd(e,i):wc(e,i))&&(tt=ru(I,"onBeforeInput"),0<tt.length&&(vt=new Dr("onBeforeInput","beforeinput",null,i,re),pe.push({event:vt,listeners:tt}),vt.data=We)),yb(pe,e,I,i,re)}ng(pe,n)})}function _l(e,n,i){return{instance:e,listener:n,currentTarget:i}}function ru(e,n){for(var i=n+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=bs(e,i),d!=null&&l.unshift(_l(e,d,m)),d=bs(e,n),d!=null&&l.push(_l(e,d,m))),e=e.return}return l}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ig(e,n,i,l,d){for(var m=n._reactName,v=[];i!==null&&i!==l;){var k=i,N=k.alternate,I=k.stateNode;if(k=k.tag,N!==null&&N===l)break;k!==5&&k!==26&&k!==27||I===null||(N=I,d?(I=bs(i,m),I!=null&&v.unshift(_l(i,I,N))):d||(I=bs(i,m),I!=null&&v.push(_l(i,I,N)))),i=i.return}v.length!==0&&e.push({event:n,listeners:v})}var wb=/\r\n?/g,Sb=/\u0000|\uFFFD/g;function og(e){return(typeof e=="string"?e:""+e).replace(wb,`
`).replace(Sb,"")}function ag(e,n){return n=og(n),og(e)===n}function lu(){}function Ft(e,n,i,l,d,m){switch(i){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||eo(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&eo(e,""+l);break;case"className":Qn(e,"class",l);break;case"tabIndex":Qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,i,l);break;case"style":hc(e,l,m);break;case"data":if(n!=="object"){Qn(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Io(""+l),e.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(i==="formAction"?(n!=="input"&&Ft(e,n,"name",d.name,d,null),Ft(e,n,"formEncType",d.formEncType,d,null),Ft(e,n,"formMethod",d.formMethod,d,null),Ft(e,n,"formTarget",d.formTarget,d,null)):(Ft(e,n,"encType",d.encType,d,null),Ft(e,n,"method",d.method,d,null),Ft(e,n,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Io(""+l),e.setAttribute(i,l);break;case"onClick":l!=null&&(e.onclick=lu);break;case"onScroll":l!=null&&Rt("scroll",e);break;case"onScrollEnd":l!=null&&Rt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(i=l.__html,i!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}i=Io(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""+l):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":l===!0?e.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,l):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(i,l):e.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(i):e.setAttribute(i,l);break;case"popover":Rt("beforetoggle",e),Rt("toggle",e),ri(e,"popover",l);break;case"xlinkActuate":xs(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":xs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":xs(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":xs(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":xs(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":xs(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":xs(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":xs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":xs(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ri(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=mc.get(i)||i,ri(e,i,l))}}function dh(e,n,i,l,d,m){switch(i){case"style":hc(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(i=l.__html,i!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"children":typeof l=="string"?eo(e,l):(typeof l=="number"||typeof l=="bigint")&&eo(e,""+l);break;case"onScroll":l!=null&&Rt("scroll",e);break;case"onScrollEnd":l!=null&&Rt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=lu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tr.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(d=i.endsWith("Capture"),n=i.slice(2,d?i.length-7:void 0),m=e[Qt]||null,m=m!=null?m[i]:null,typeof m=="function"&&e.removeEventListener(n,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,l,d);break e}i in e?e[i]=l:l===!0?e.setAttribute(i,""):ri(e,i,l)}}}function Fn(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",e),Rt("load",e);var l=!1,d=!1,m;for(m in i)if(i.hasOwnProperty(m)){var v=i[m];if(v!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ft(e,n,m,v,i,null)}}d&&Ft(e,n,"srcSet",i.srcSet,i,null),l&&Ft(e,n,"src",i.src,i,null);return;case"input":Rt("invalid",e);var k=m=v=d=null,N=null,I=null;for(l in i)if(i.hasOwnProperty(l)){var re=i[l];if(re!=null)switch(l){case"name":d=re;break;case"type":v=re;break;case"checked":N=re;break;case"defaultChecked":I=re;break;case"value":m=re;break;case"defaultValue":k=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,n));break;default:Ft(e,n,l,re,i,null)}}un(e,m,k,N,I,v,d,!1),Ho(e);return;case"select":Rt("invalid",e),l=v=m=null;for(d in i)if(i.hasOwnProperty(d)&&(k=i[d],k!=null))switch(d){case"value":m=k;break;case"defaultValue":v=k;break;case"multiple":l=k;default:Ft(e,n,d,k,i,null)}n=m,i=v,e.multiple=!!l,n!=null?Vn(e,!!l,n,!1):i!=null&&Vn(e,!!l,i,!0);return;case"textarea":Rt("invalid",e),m=d=l=null;for(v in i)if(i.hasOwnProperty(v)&&(k=i[v],k!=null))switch(v){case"value":l=k;break;case"defaultValue":d=k;break;case"children":m=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(a(91));break;default:Ft(e,n,v,k,i,null)}fc(e,l,d,m),Ho(e);return;case"option":for(N in i)if(i.hasOwnProperty(N)&&(l=i[N],l!=null))switch(N){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ft(e,n,N,l,i,null)}return;case"dialog":Rt("cancel",e),Rt("close",e);break;case"iframe":case"object":Rt("load",e);break;case"video":case"audio":for(l=0;l<pl.length;l++)Rt(pl[l],e);break;case"image":Rt("error",e),Rt("load",e);break;case"details":Rt("toggle",e);break;case"embed":case"source":case"link":Rt("error",e),Rt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in i)if(i.hasOwnProperty(I)&&(l=i[I],l!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ft(e,n,I,l,i,null)}return;default:if(cs(n)){for(re in i)i.hasOwnProperty(re)&&(l=i[re],l!==void 0&&dh(e,n,re,l,i,void 0));return}}for(k in i)i.hasOwnProperty(k)&&(l=i[k],l!=null&&Ft(e,n,k,l,i,null))}function kb(e,n,i,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,v=null,k=null,N=null,I=null,re=null;for(oe in i){var pe=i[oe];if(i.hasOwnProperty(oe)&&pe!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":N=pe;default:l.hasOwnProperty(oe)||Ft(e,n,oe,null,l,pe)}}for(var Z in l){var oe=l[Z];if(pe=i[Z],l.hasOwnProperty(Z)&&(oe!=null||pe!=null))switch(Z){case"type":m=oe;break;case"name":d=oe;break;case"checked":I=oe;break;case"defaultChecked":re=oe;break;case"value":v=oe;break;case"defaultValue":k=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(a(137,n));break;default:oe!==pe&&Ft(e,n,Z,oe,l,pe)}}li(e,v,k,N,I,re,m,d);return;case"select":oe=v=k=Z=null;for(m in i)if(N=i[m],i.hasOwnProperty(m)&&N!=null)switch(m){case"value":break;case"multiple":oe=N;default:l.hasOwnProperty(m)||Ft(e,n,m,null,l,N)}for(d in l)if(m=l[d],N=i[d],l.hasOwnProperty(d)&&(m!=null||N!=null))switch(d){case"value":Z=m;break;case"defaultValue":k=m;break;case"multiple":v=m;default:m!==N&&Ft(e,n,d,m,l,N)}n=k,i=v,l=oe,Z!=null?Vn(e,!!i,Z,!1):!!l!=!!i&&(n!=null?Vn(e,!!i,n,!0):Vn(e,!!i,i?[]:"",!1));return;case"textarea":oe=Z=null;for(k in i)if(d=i[k],i.hasOwnProperty(k)&&d!=null&&!l.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:Ft(e,n,k,null,l,d)}for(v in l)if(d=l[v],m=i[v],l.hasOwnProperty(v)&&(d!=null||m!=null))switch(v){case"value":Z=d;break;case"defaultValue":oe=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&Ft(e,n,v,d,l,m)}Ln(e,Z,oe);return;case"option":for(var Ve in i)if(Z=i[Ve],i.hasOwnProperty(Ve)&&Z!=null&&!l.hasOwnProperty(Ve))switch(Ve){case"selected":e.selected=!1;break;default:Ft(e,n,Ve,null,l,Z)}for(N in l)if(Z=l[N],oe=i[N],l.hasOwnProperty(N)&&Z!==oe&&(Z!=null||oe!=null))switch(N){case"selected":e.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:Ft(e,n,N,Z,l,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in i)Z=i[lt],i.hasOwnProperty(lt)&&Z!=null&&!l.hasOwnProperty(lt)&&Ft(e,n,lt,null,l,Z);for(I in l)if(Z=l[I],oe=i[I],l.hasOwnProperty(I)&&Z!==oe&&(Z!=null||oe!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,n));break;default:Ft(e,n,I,Z,l,oe)}return;default:if(cs(n)){for(var wn in i)Z=i[wn],i.hasOwnProperty(wn)&&Z!==void 0&&!l.hasOwnProperty(wn)&&dh(e,n,wn,void 0,l,Z);for(re in l)Z=l[re],oe=i[re],!l.hasOwnProperty(re)||Z===oe||Z===void 0&&oe===void 0||dh(e,n,re,Z,l,oe);return}}for(var U in i)Z=i[U],i.hasOwnProperty(U)&&Z!=null&&!l.hasOwnProperty(U)&&Ft(e,n,U,null,l,Z);for(pe in l)Z=l[pe],oe=i[pe],!l.hasOwnProperty(pe)||Z===oe||Z==null&&oe==null||Ft(e,n,pe,Z,l,oe)}var fh=null,hh=null;function cu(e){return e.nodeType===9?e:e.ownerDocument}function rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function mh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ph=null;function jb(){var e=window.event;return e&&e.type==="popstate"?e===ph?!1:(ph=e,!0):(ph=null,!1)}var cg=typeof setTimeout=="function"?setTimeout:void 0,Cb=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,Tb=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(e){return ug.resolve(null).then(e).catch(Eb)}:cg;function Eb(e){setTimeout(function(){throw e})}function _h(e,n){var i=n,l=0;do{var d=i.nextSibling;if(e.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(l===0){e.removeChild(d),kl(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=d}while(i);kl(n)}function gh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":gh(i),Cr(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Mb(e,n,i,l){for(;e.nodeType===1;){var d=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[gs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function Rb(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=ti(e.nextSibling),e===null))return null;return e}function ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}function fg(e,n,i){switch(n=cu(i),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var Vs=new Map,hg=new Set;function uu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ui=ve.d;ve.d={f:Nb,r:Ab,D:Db,C:Lb,L:Ob,m:Bb,X:$b,S:zb,M:Pb};function Nb(){var e=Ui.f(),n=nu();return e||n}function Ab(e){var n=Gi(e);n!==null&&n.tag===5&&n.type==="form"?Hp(n):Ui.r(e)}var ir=typeof document>"u"?null:document;function mg(e,n,i){var l=ir;if(l&&typeof n=="string"&&n){var d=ns(n);d='link[rel="'+e+'"][href="'+d+'"]',typeof i=="string"&&(d+='[crossorigin="'+i+'"]'),hg.has(d)||(hg.add(d),e={rel:e,crossOrigin:i,href:n},l.querySelector(d)===null&&(n=l.createElement("link"),Fn(n,"link",e),xn(n),l.head.appendChild(n)))}}function Db(e){Ui.D(e),mg("dns-prefetch",e,null)}function Lb(e,n){Ui.C(e,n),mg("preconnect",e,n)}function Ob(e,n,i){Ui.L(e,n,i);var l=ir;if(l&&e&&n){var d='link[rel="preload"][as="'+ns(n)+'"]';n==="image"&&i&&i.imageSrcSet?(d+='[imagesrcset="'+ns(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(d+='[imagesizes="'+ns(i.imageSizes)+'"]')):d+='[href="'+ns(e)+'"]';var m=d;switch(n){case"style":m=or(e);break;case"script":m=ar(e)}Vs.has(m)||(e=Q({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),Vs.set(m,e),l.querySelector(d)!==null||n==="style"&&l.querySelector(gl(m))||n==="script"&&l.querySelector(yl(m))||(n=l.createElement("link"),Fn(n,"link",e),xn(n),l.head.appendChild(n)))}}function Bb(e,n){Ui.m(e,n);var i=ir;if(i&&e){var l=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+ns(l)+'"][href="'+ns(e)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ar(e)}if(!Vs.has(m)&&(e=Q({rel:"modulepreload",href:e},n),Vs.set(m,e),i.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(yl(m)))return}l=i.createElement("link"),Fn(l,"link",e),xn(l),i.head.appendChild(l)}}}function zb(e,n,i){Ui.S(e,n,i);var l=ir;if(l&&e){var d=Ki(l).hoistableStyles,m=or(e);n=n||"default";var v=d.get(m);if(!v){var k={loading:0,preload:null};if(v=l.querySelector(gl(m)))k.loading=5;else{e=Q({rel:"stylesheet",href:e,"data-precedence":n},i),(i=Vs.get(m))&&yh(e,i);var N=v=l.createElement("link");xn(N),Fn(N,"link",e),N._p=new Promise(function(I,re){N.onload=I,N.onerror=re}),N.addEventListener("load",function(){k.loading|=1}),N.addEventListener("error",function(){k.loading|=2}),k.loading|=4,du(v,n,l)}v={type:"stylesheet",instance:v,count:1,state:k},d.set(m,v)}}}function $b(e,n){Ui.X(e,n);var i=ir;if(i&&e){var l=Ki(i).hoistableScripts,d=ar(e),m=l.get(d);m||(m=i.querySelector(yl(d)),m||(e=Q({src:e,async:!0},n),(n=Vs.get(d))&&xh(e,n),m=i.createElement("script"),xn(m),Fn(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function Pb(e,n){Ui.M(e,n);var i=ir;if(i&&e){var l=Ki(i).hoistableScripts,d=ar(e),m=l.get(d);m||(m=i.querySelector(yl(d)),m||(e=Q({src:e,async:!0,type:"module"},n),(n=Vs.get(d))&&xh(e,n),m=i.createElement("script"),xn(m),Fn(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function pg(e,n,i,l){var d=(d=nn.current)?uu(d):null;if(!d)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=or(i.href),i=Ki(d).hoistableStyles,l=i.get(n),l||(l={type:"style",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=or(i.href);var m=Ki(d).hoistableStyles,v=m.get(e);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=d.querySelector(gl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Vs.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Vs.set(e,i),m||Hb(d,e,i,v.state))),n&&l===null)throw Error(a(528,""));return v}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(i),i=Ki(d).hoistableScripts,l=i.get(n),l||(l={type:"script",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function or(e){return'href="'+ns(e)+'"'}function gl(e){return'link[rel="stylesheet"]['+e+"]"}function _g(e){return Q({},e,{"data-precedence":e.precedence,precedence:null})}function Hb(e,n,i,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Fn(n,"link",i),xn(n),e.head.appendChild(n))}function ar(e){return'[src="'+ns(e)+'"]'}function yl(e){return"script[async]"+e}function gg(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+ns(i.href)+'"]');if(l)return n.instance=l,xn(l),l;var d=Q({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xn(l),Fn(l,"style",d),du(l,i.precedence,e),n.instance=l;case"stylesheet":d=or(i.href);var m=e.querySelector(gl(d));if(m)return n.state.loading|=4,n.instance=m,xn(m),m;l=_g(i),(d=Vs.get(d))&&yh(l,d),m=(e.ownerDocument||e).createElement("link"),xn(m);var v=m;return v._p=new Promise(function(k,N){v.onload=k,v.onerror=N}),Fn(m,"link",l),n.state.loading|=4,du(m,i.precedence,e),n.instance=m;case"script":return m=ar(i.src),(d=e.querySelector(yl(m)))?(n.instance=d,xn(d),d):(l=i,(d=Vs.get(m))&&(l=Q({},i),xh(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),xn(d),Fn(d,"link",l),e.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(l=n.instance,n.state.loading|=4,du(l,i.precedence,e));return n.instance}function du(e,n,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,v=0;v<l.length;v++){var k=l[v];if(k.dataset.precedence===n)m=k;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function yh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fu=null;function yg(e,n,i){if(fu===null){var l=new Map,d=fu=new Map;d.set(i,l)}else d=fu,l=d.get(i),l||(l=new Map,d.set(i,l));if(l.has(e))return l;for(l.set(e,null),i=i.getElementsByTagName(e),d=0;d<i.length;d++){var m=i[d];if(!(m[gs]||m[Vt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(n)||"";v=e+v;var k=l.get(v);k?k.push(m):l.set(v,[m])}}return l}function xg(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function Ib(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bg(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var xl=null;function Vb(){}function Ub(e,n,i){if(xl===null)throw Error(a(475));var l=xl;if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var d=or(i.href),m=e.querySelector(gl(d));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=hu.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=m,xn(m);return}m=e.ownerDocument||e,i=_g(i),(d=Vs.get(d))&&yh(i,d),m=m.createElement("link"),xn(m);var v=m;v._p=new Promise(function(k,N){v.onload=k,v.onerror=N}),Fn(m,"link",i),n.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(l.count++,n=hu.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function Yb(){if(xl===null)throw Error(a(475));var e=xl;return e.stylesheets&&e.count===0&&bh(e,e.stylesheets),0<e.count?function(n){var i=setTimeout(function(){if(e.stylesheets&&bh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i)}}:null}function hu(){if(this.count--,this.count===0){if(this.stylesheets)bh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mu=null;function bh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mu=new Map,n.forEach(Wb,e),mu=null,hu.call(e))}function Wb(e,n){if(!(n.state.loading&4)){var i=mu.get(e);if(i)var l=i.get(null);else{i=new Map,mu.set(e,i);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var v=d[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(i.set(v.dataset.precedence,v),l=v)}l&&i.set(null,l)}d=n.instance,v=d.getAttribute("data-precedence"),m=i.get(v)||l,m===l&&i.set(null,d),i.set(v,d),this.count++,l=hu.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),n.state.loading|=4}}var bl={$$typeof:w,Provider:null,Consumer:null,_currentValue:Ze,_currentValue2:Ze,_threadCount:0};function Fb(e,n,i,l,d,m,v,k){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function vg(e,n,i,l,d,m,v,k,N,I,re,pe){return e=new Fb(e,n,i,v,k,N,I,pe),n=1,m===!0&&(n|=24),m=Hs(3,null,null,n),e.current=m,m.stateNode=e,n=Kd(),n.refCount++,e.pooledCache=n,n.refCount++,m.memoizedState={element:l,isDehydrated:i,cache:n},Af(m),e}function wg(e){return e?(e=$a,e):$a}function Sg(e,n,i,l,d,m){d=wg(d),l.context===null?l.context=d:l.pendingContext=d,l=go(n),l.payload={element:i},m=m===void 0?null:m,m!==null&&(l.callback=m),i=yo(e,l,n),i!==null&&(is(i,e,n),sl(i,e,n))}function kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function vh(e,n){kg(e,n),(e=e.alternate)&&kg(e,n)}function jg(e){if(e.tag===13){var n=co(e,67108864);n!==null&&is(n,e,67108864),vh(e,67108864)}}var pu=!0;function Xb(e,n,i,l){var d=F.T;F.T=null;var m=ve.p;try{ve.p=2,wh(e,n,i,l)}finally{ve.p=m,F.T=d}}function qb(e,n,i,l){var d=F.T;F.T=null;var m=ve.p;try{ve.p=8,wh(e,n,i,l)}finally{ve.p=m,F.T=d}}function wh(e,n,i,l){if(pu){var d=Sh(l);if(d===null)uh(e,n,l,_u,i),Tg(e,l);else if(Gb(d,e,n,i,l))l.stopPropagation();else if(Tg(e,l),n&4&&-1<Qb.indexOf(e)){for(;d!==null;){var m=Gi(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=It(m.pendingLanes);if(v!==0){var k=m;for(k.pendingLanes|=2,k.entangledLanes|=2;v;){var N=1<<31-Ye(v);k.entanglements[1]|=N,v&=~N}xi(m),!(pn&6)&&(Jc=ot()+500,ml(0))}}break;case 13:k=co(m,2),k!==null&&is(k,m,2),nu(),vh(m,2)}if(m=Sh(l),m===null&&uh(e,n,l,_u,i),m===d)break;d=m}d!==null&&l.stopPropagation()}else uh(e,n,l,null,i)}}function Sh(e){return e=Rr(e),kh(e)}var _u=null;function kh(e){if(_u=null,e=ai(e),e!==null){var n=K(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=be(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return _u=e,null}function Cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ct()){case Mt:return 2;case qt:return 8;case $e:case Y:return 32;case q:return 268435456;default:return 32}default:return 32}}var jh=!1,jo=null,Co=null,To=null,vl=new Map,wl=new Map,Eo=[],Qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tg(e,n){switch(e){case"focusin":case"focusout":jo=null;break;case"dragenter":case"dragleave":Co=null;break;case"mouseover":case"mouseout":To=null;break;case"pointerover":case"pointerout":vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(n.pointerId)}}function Sl(e,n,i,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},n!==null&&(n=Gi(n),n!==null&&jg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function Gb(e,n,i,l,d){switch(n){case"focusin":return jo=Sl(jo,e,n,i,l,d),!0;case"dragenter":return Co=Sl(Co,e,n,i,l,d),!0;case"mouseover":return To=Sl(To,e,n,i,l,d),!0;case"pointerover":var m=d.pointerId;return vl.set(m,Sl(vl.get(m)||null,e,n,i,l,d)),!0;case"gotpointercapture":return m=d.pointerId,wl.set(m,Sl(wl.get(m)||null,e,n,i,l,d)),!0}return!1}function Eg(e){var n=ai(e.target);if(n!==null){var i=K(n);if(i!==null){if(n=i.tag,n===13){if(n=be(i),n!==null){e.blockedOn=n,ts(e.priority,function(){if(i.tag===13){var l=Ts(),d=co(i,l);d!==null&&is(d,i,l),vh(i,l)}});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Sh(e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Mr=l,i.target.dispatchEvent(l),Mr=null}else return n=Gi(i),n!==null&&jg(n),e.blockedOn=i,!1;n.shift()}return!0}function Mg(e,n,i){gu(e)&&i.delete(n)}function Kb(){jh=!1,jo!==null&&gu(jo)&&(jo=null),Co!==null&&gu(Co)&&(Co=null),To!==null&&gu(To)&&(To=null),vl.forEach(Mg),wl.forEach(Mg)}function yu(e,n){e.blockedOn===n&&(e.blockedOn=null,jh||(jh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Kb)))}var xu=null;function Rg(e){xu!==e&&(xu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){xu===e&&(xu=null);for(var n=0;n<e.length;n+=3){var i=e[n],l=e[n+1],d=e[n+2];if(typeof l!="function"){if(kh(l||i)===null)continue;break}var m=Gi(i);m!==null&&(e.splice(n,3),n-=3,mf(m,{pending:!0,data:d,method:i.method,action:l},l,d))}}))}function kl(e){function n(N){return yu(N,e)}jo!==null&&yu(jo,e),Co!==null&&yu(Co,e),To!==null&&yu(To,e),vl.forEach(n),wl.forEach(n);for(var i=0;i<Eo.length;i++){var l=Eo[i];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Eo.length&&(i=Eo[0],i.blockedOn===null);)Eg(i),i.blockedOn===null&&Eo.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var d=i[l],m=i[l+1],v=d[Qt]||null;if(typeof m=="function")v||Rg(i);else if(v){var k=null;if(m&&m.hasAttribute("formAction")){if(d=m,v=m[Qt]||null)k=v.formAction;else if(kh(d)!==null)continue}else k=v.action;typeof k=="function"?i[l+1]=k:(i.splice(l,3),l-=3),Rg(i)}}}function Ch(e){this._internalRoot=e}bu.prototype.render=Ch.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var i=n.current,l=Ts();Sg(i,l,e,n,null,null)},bu.prototype.unmount=Ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&tr(),Sg(e.current,2,null,e,null,null),nu(),n[_s]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ms();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Eo.length&&n!==0&&n<Eo[i].priority;i++);Eo.splice(i,0,e),i===0&&Eg(e)}};var Ng=s.version;if(Ng!=="19.0.0")throw Error(a(527,Ng,"19.0.0"));ve.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=ie(n),e=e!==null?Ce(e):null,e=e===null?null:e.stateNode,e};var Zb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:F,findFiberByHostInstance:ai,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{De=vu.inject(Zb),ke=vu}catch{}}return Cl.createRoot=function(e,n){if(!c(e))throw Error(a(299));var i=!1,l="",d=qp,m=Qp,v=Gp,k=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(k=n.unstable_transitionCallbacks)),n=vg(e,1,!1,null,null,i,l,d,m,v,k,null),e[_s]=n.current,ch(e.nodeType===8?e.parentNode:e),new Ch(n)},Cl.hydrateRoot=function(e,n,i){if(!c(e))throw Error(a(299));var l=!1,d="",m=qp,v=Qp,k=Gp,N=null,I=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onUncaughtError!==void 0&&(m=i.onUncaughtError),i.onCaughtError!==void 0&&(v=i.onCaughtError),i.onRecoverableError!==void 0&&(k=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(N=i.unstable_transitionCallbacks),i.formState!==void 0&&(I=i.formState)),n=vg(e,1,!0,n,i??null,l,d,m,v,k,N,I),n.context=wg(null),i=n.current,l=Ts(),d=go(l),d.callback=null,yo(i,d,l),n.current.lanes=l,yt(n,l),xi(n),e[_s]=n.current,ch(e),new bu(n)},Cl.version="19.0.0",Cl}var Ig;function lv(){if(Ig)return Mh.exports;Ig=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(s){console.error(s)}}return t(),Mh.exports=rv(),Mh.exports}var cv=lv();let uv={data:""},dv=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||uv,fv=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,hv=/\/\*[^]*?\*\/|  +/g,Vg=/\n+/g,Ao=(t,s)=>{let o="",a="",c="";for(let u in t){let f=t[u];u[0]=="@"?u[1]=="i"?o=u+" "+f+";":a+=u[1]=="f"?Ao(f,u):u+"{"+Ao(f,u[1]=="k"?"":s)+"}":typeof f=="object"?a+=Ao(f,s?s.replace(/([^,])+/g,p=>u.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,h=>/&/.test(h)?h.replace(/&/g,p):p?p+" "+h:h)):u):f!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=Ao.p?Ao.p(u,f):u+":"+f+";")}return o+(s&&c?s+"{"+c+"}":c)+a},Yi={},r2=t=>{if(typeof t=="object"){let s="";for(let o in t)s+=o+r2(t[o]);return s}return t},mv=(t,s,o,a,c)=>{let u=r2(t),f=Yi[u]||(Yi[u]=(h=>{let _=0,g=11;for(;_<h.length;)g=101*g+h.charCodeAt(_++)>>>0;return"go"+g})(u));if(!Yi[f]){let h=u!==t?t:(_=>{let g,y,x=[{}];for(;g=fv.exec(_.replace(hv,""));)g[4]?x.shift():g[3]?(y=g[3].replace(Vg," ").trim(),x.unshift(x[0][y]=x[0][y]||{})):x[0][g[1]]=g[2].replace(Vg," ").trim();return x[0]})(t);Yi[f]=Ao(c?{["@keyframes "+f]:h}:h,o?"":"."+f)}let p=o&&Yi.g?Yi.g:null;return o&&(Yi.g=Yi[f]),((h,_,g,y)=>{y?_.data=_.data.replace(y,h):_.data.indexOf(h)===-1&&(_.data=g?h+_.data:_.data+h)})(Yi[f],s,a,p),f},pv=(t,s,o)=>t.reduce((a,c,u)=>{let f=s[u];if(f&&f.call){let p=f(o),h=p&&p.props&&p.props.className||/^go/.test(p)&&p;f=h?"."+h:p&&typeof p=="object"?p.props?"":Ao(p,""):p===!1?"":p}return a+c+(f??"")},"");function wd(t){let s=this||{},o=t.call?t(s.p):t;return mv(o.unshift?o.raw?pv(o,[].slice.call(arguments,1),s.p):o.reduce((a,c)=>Object.assign(a,c&&c.call?c(s.p):c),{}):o,dv(s.target),s.g,s.o,s.k)}let l2,dm,fm;wd.bind({g:1});let Fi=wd.bind({k:1});function _v(t,s,o,a){Ao.p=s,l2=t,dm=o,fm=a}function Bo(t,s){let o=this||{};return function(){let a=arguments;function c(u,f){let p=Object.assign({},u),h=p.className||c.className;o.p=Object.assign({theme:dm&&dm()},p),o.o=/ *go\d+/.test(h),p.className=wd.apply(o,a)+(h?" "+h:"");let _=t;return t[0]&&(_=p.as||t,delete p.as),fm&&_[0]&&fm(p),l2(_,p)}return c}}var gv=t=>typeof t=="function",ld=(t,s)=>gv(t)?t(s):t,yv=(()=>{let t=0;return()=>(++t).toString()})(),c2=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let s=matchMedia("(prefers-reduced-motion: reduce)");t=!s||s.matches}return t}})(),xv=20,u2=(t,s)=>{switch(s.type){case 0:return{...t,toasts:[s.toast,...t.toasts].slice(0,xv)};case 1:return{...t,toasts:t.toasts.map(u=>u.id===s.toast.id?{...u,...s.toast}:u)};case 2:let{toast:o}=s;return u2(t,{type:t.toasts.find(u=>u.id===o.id)?1:0,toast:o});case 3:let{toastId:a}=s;return{...t,toasts:t.toasts.map(u=>u.id===a||a===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return s.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(u=>u.id!==s.toastId)};case 5:return{...t,pausedAt:s.time};case 6:let c=s.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+c}))}}},ed=[],td={toasts:[],pausedAt:void 0},va=t=>{td=u2(td,t),ed.forEach(s=>{s(td)})},bv={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},vv=(t={})=>{let[s,o]=b.useState(td);b.useEffect(()=>(ed.push(o),()=>{let c=ed.indexOf(o);c>-1&&ed.splice(c,1)}),[s]);let a=s.toasts.map(c=>{var u,f,p;return{...t,...t[c.type],...c,removeDelay:c.removeDelay||((u=t[c.type])==null?void 0:u.removeDelay)||(t==null?void 0:t.removeDelay),duration:c.duration||((f=t[c.type])==null?void 0:f.duration)||(t==null?void 0:t.duration)||bv[c.type],style:{...t.style,...(p=t[c.type])==null?void 0:p.style,...c.style}}});return{...s,toasts:a}},wv=(t,s="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:s,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(o==null?void 0:o.id)||yv()}),tc=t=>(s,o)=>{let a=wv(s,t,o);return va({type:2,toast:a}),a.id},hs=(t,s)=>tc("blank")(t,s);hs.error=tc("error");hs.success=tc("success");hs.loading=tc("loading");hs.custom=tc("custom");hs.dismiss=t=>{va({type:3,toastId:t})};hs.remove=t=>va({type:4,toastId:t});hs.promise=(t,s,o)=>{let a=hs.loading(s.loading,{...o,...o==null?void 0:o.loading});return typeof t=="function"&&(t=t()),t.then(c=>{let u=s.success?ld(s.success,c):void 0;return u?hs.success(u,{id:a,...o,...o==null?void 0:o.success}):hs.dismiss(a),c}).catch(c=>{let u=s.error?ld(s.error,c):void 0;u?hs.error(u,{id:a,...o,...o==null?void 0:o.error}):hs.dismiss(a)}),t};var Sv=(t,s)=>{va({type:1,toast:{id:t,height:s}})},kv=()=>{va({type:5,time:Date.now()})},$l=new Map,jv=1e3,Cv=(t,s=jv)=>{if($l.has(t))return;let o=setTimeout(()=>{$l.delete(t),va({type:4,toastId:t})},s);$l.set(t,o)},Tv=t=>{let{toasts:s,pausedAt:o}=vv(t);b.useEffect(()=>{if(o)return;let u=Date.now(),f=s.map(p=>{if(p.duration===1/0)return;let h=(p.duration||0)+p.pauseDuration-(u-p.createdAt);if(h<0){p.visible&&hs.dismiss(p.id);return}return setTimeout(()=>hs.dismiss(p.id),h)});return()=>{f.forEach(p=>p&&clearTimeout(p))}},[s,o]);let a=b.useCallback(()=>{o&&va({type:6,time:Date.now()})},[o]),c=b.useCallback((u,f)=>{let{reverseOrder:p=!1,gutter:h=8,defaultPosition:_}=f||{},g=s.filter(w=>(w.position||_)===(u.position||_)&&w.height),y=g.findIndex(w=>w.id===u.id),x=g.filter((w,S)=>S<y&&w.visible).length;return g.filter(w=>w.visible).slice(...p?[x+1]:[0,x]).reduce((w,S)=>w+(S.height||0)+h,0)},[s]);return b.useEffect(()=>{s.forEach(u=>{if(u.dismissed)Cv(u.id,u.removeDelay);else{let f=$l.get(u.id);f&&(clearTimeout(f),$l.delete(u.id))}})},[s]),{toasts:s,handlers:{updateHeight:Sv,startPause:kv,endPause:a,calculateOffset:c}}},Ev=Fi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Mv=Fi`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Rv=Fi`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Nv=Bo("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ev} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Mv} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Rv} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Av=Fi`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Dv=Bo("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Av} 1s linear infinite;
`,Lv=Fi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ov=Fi`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Bv=Bo("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Lv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ov} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,zv=Bo("div")`
  position: absolute;
`,$v=Bo("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Pv=Fi`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Hv=Bo("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Pv} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Iv=({toast:t})=>{let{icon:s,type:o,iconTheme:a}=t;return s!==void 0?typeof s=="string"?b.createElement(Hv,null,s):s:o==="blank"?null:b.createElement($v,null,b.createElement(Dv,{...a}),o!=="loading"&&b.createElement(zv,null,o==="error"?b.createElement(Nv,{...a}):b.createElement(Bv,{...a})))},Vv=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Uv=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Yv="0%{opacity:0;} 100%{opacity:1;}",Wv="0%{opacity:1;} 100%{opacity:0;}",Fv=Bo("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Xv=Bo("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,qv=(t,s)=>{let o=t.includes("top")?1:-1,[a,c]=c2()?[Yv,Wv]:[Vv(o),Uv(o)];return{animation:s?`${Fi(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Fi(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Qv=b.memo(({toast:t,position:s,style:o,children:a})=>{let c=t.height?qv(t.position||s||"top-center",t.visible):{opacity:0},u=b.createElement(Iv,{toast:t}),f=b.createElement(Xv,{...t.ariaProps},ld(t.message,t));return b.createElement(Fv,{className:t.className,style:{...c,...o,...t.style}},typeof a=="function"?a({icon:u,message:f}):b.createElement(b.Fragment,null,u,f))});_v(b.createElement);var Gv=({id:t,className:s,style:o,onHeightUpdate:a,children:c})=>{let u=b.useCallback(f=>{if(f){let p=()=>{let h=f.getBoundingClientRect().height;a(t,h)};p(),new MutationObserver(p).observe(f,{subtree:!0,childList:!0,characterData:!0})}},[t,a]);return b.createElement("div",{ref:u,className:s,style:o},c)},Kv=(t,s)=>{let o=t.includes("top"),a=o?{top:0}:{bottom:0},c=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:c2()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(o?1:-1)}px)`,...a,...c}},Zv=wd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Su=16,Jv=({reverseOrder:t,position:s="top-center",toastOptions:o,gutter:a,children:c,containerStyle:u,containerClassName:f})=>{let{toasts:p,handlers:h}=Tv(o);return b.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Su,left:Su,right:Su,bottom:Su,pointerEvents:"none",...u},className:f,onMouseEnter:h.startPause,onMouseLeave:h.endPause},p.map(_=>{let g=_.position||s,y=h.calculateOffset(_,{reverseOrder:t,gutter:a,defaultPosition:s}),x=Kv(g,y);return b.createElement(Gv,{id:_.id,key:_.id,onHeightUpdate:h.updateHeight,className:_.visible?Zv:"",style:x},_.type==="custom"?ld(_.message,_):c?c(_):b.createElement(Qv,{toast:_,position:g}))}))},Tl={},Ug;function e4(){if(Ug)return Tl;Ug=1,Object.defineProperty(Tl,"__esModule",{value:!0}),Tl.parse=f,Tl.serialize=_;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function f(x,w){const S=new u,T=x.length;if(T<2)return S;const M=(w==null?void 0:w.decode)||g;let C=0;do{const z=x.indexOf("=",C);if(z===-1)break;const O=x.indexOf(";",C),L=O===-1?T:O;if(z>L){C=x.lastIndexOf(";",z-1)+1;continue}const $=p(x,C,z),W=h(x,z,$),P=x.slice($,W);if(S[P]===void 0){let te=p(x,z+1,L),F=h(x,L,te);const Q=M(x.slice(te,F));S[P]=Q}C=L+1}while(C<T);return S}function p(x,w,S){do{const T=x.charCodeAt(w);if(T!==32&&T!==9)return w}while(++w<S);return S}function h(x,w,S){for(;w>S;){const T=x.charCodeAt(--w);if(T!==32&&T!==9)return w+1}return S}function _(x,w,S){const T=(S==null?void 0:S.encode)||encodeURIComponent;if(!t.test(x))throw new TypeError(`argument name is invalid: ${x}`);const M=T(w);if(!s.test(M))throw new TypeError(`argument val is invalid: ${w}`);let C=x+"="+M;if(!S)return C;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);C+="; Max-Age="+S.maxAge}if(S.domain){if(!o.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);C+="; Domain="+S.domain}if(S.path){if(!a.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);C+="; Path="+S.path}if(S.expires){if(!y(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);C+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(C+="; HttpOnly"),S.secure&&(C+="; Secure"),S.partitioned&&(C+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return C}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function y(x){return c.call(x)==="[object Date]"}return Tl}e4();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yg="popstate";function t4(t={}){function s(c,u){let{pathname:f="/",search:p="",hash:h=""}=wa(c.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),hm("",{pathname:f,search:p,hash:h},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(c,u){let f=c.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let h=c.location.href,_=h.indexOf("#");p=_===-1?h:h.slice(0,_)}return p+"#"+(typeof u=="string"?u:Wl(u))}function a(c,u){oi(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return s4(s,o,a,t)}function gn(t,s){if(t===!1||t===null||typeof t>"u")throw new Error(s)}function oi(t,s){if(!t){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function n4(){return Math.random().toString(36).substring(2,10)}function Wg(t,s){return{usr:t.state,key:t.key,idx:s}}function hm(t,s,o=null,a){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof s=="string"?wa(s):s,state:o,key:s&&s.key||a||n4()}}function Wl({pathname:t="/",search:s="",hash:o=""}){return s&&s!=="?"&&(t+=s.charAt(0)==="?"?s:"?"+s),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function wa(t){let s={};if(t){let o=t.indexOf("#");o>=0&&(s.hash=t.substring(o),t=t.substring(0,o));let a=t.indexOf("?");a>=0&&(s.search=t.substring(a),t=t.substring(0,a)),t&&(s.pathname=t)}return s}function s4(t,s,o,a={}){let{window:c=document.defaultView,v5Compat:u=!1}=a,f=c.history,p="POP",h=null,_=g();_==null&&(_=0,f.replaceState({...f.state,idx:_},""));function g(){return(f.state||{idx:null}).idx}function y(){p="POP";let M=g(),C=M==null?null:M-_;_=M,h&&h({action:p,location:T.location,delta:C})}function x(M,C){p="PUSH";let z=hm(T.location,M,C);o&&o(z,M),_=g()+1;let O=Wg(z,_),L=T.createHref(z);try{f.pushState(O,"",L)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;c.location.assign(L)}u&&h&&h({action:p,location:T.location,delta:1})}function w(M,C){p="REPLACE";let z=hm(T.location,M,C);o&&o(z,M),_=g();let O=Wg(z,_),L=T.createHref(z);f.replaceState(O,"",L),u&&h&&h({action:p,location:T.location,delta:0})}function S(M){let C=c.location.origin!=="null"?c.location.origin:c.location.href,z=typeof M=="string"?M:Wl(M);return z=z.replace(/ $/,"%20"),gn(C,`No window.location.(origin|href) available to create URL for href: ${z}`),new URL(z,C)}let T={get action(){return p},get location(){return t(c,f)},listen(M){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(Yg,y),h=M,()=>{c.removeEventListener(Yg,y),h=null}},createHref(M){return s(c,M)},createURL:S,encodeLocation(M){let C=S(M);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:x,replace:w,go(M){return f.go(M)}};return T}function d2(t,s,o="/"){return i4(t,s,o,!1)}function i4(t,s,o,a){let c=typeof s=="string"?wa(s):s,u=Do(c.pathname||"/",o);if(u==null)return null;let f=f2(t);o4(f);let p=null;for(let h=0;p==null&&h<f.length;++h){let _=_4(u);p=m4(f[h],_,a)}return p}function f2(t,s=[],o=[],a=""){let c=(u,f,p)=>{let h={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};h.relativePath.startsWith("/")&&(gn(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length));let _=Wi([a,h.relativePath]),g=o.concat(h);u.children&&u.children.length>0&&(gn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),f2(u.children,s,g,_)),!(u.path==null&&!u.index)&&s.push({path:_,score:f4(_,u.index),routesMeta:g})};return t.forEach((u,f)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))c(u,f);else for(let h of h2(u.path))c(u,f,h)}),s}function h2(t){let s=t.split("/");if(s.length===0)return[];let[o,...a]=s,c=o.endsWith("?"),u=o.replace(/\?$/,"");if(a.length===0)return c?[u,""]:[u];let f=h2(a.join("/")),p=[];return p.push(...f.map(h=>h===""?u:[u,h].join("/"))),c&&p.push(...f),p.map(h=>t.startsWith("/")&&h===""?"/":h)}function o4(t){t.sort((s,o)=>s.score!==o.score?o.score-s.score:h4(s.routesMeta.map(a=>a.childrenIndex),o.routesMeta.map(a=>a.childrenIndex)))}var a4=/^:[\w-]+$/,r4=3,l4=2,c4=1,u4=10,d4=-2,Fg=t=>t==="*";function f4(t,s){let o=t.split("/"),a=o.length;return o.some(Fg)&&(a+=d4),s&&(a+=l4),o.filter(c=>!Fg(c)).reduce((c,u)=>c+(a4.test(u)?r4:u===""?c4:u4),a)}function h4(t,s){return t.length===s.length&&t.slice(0,-1).every((a,c)=>a===s[c])?t[t.length-1]-s[s.length-1]:0}function m4(t,s,o=!1){let{routesMeta:a}=t,c={},u="/",f=[];for(let p=0;p<a.length;++p){let h=a[p],_=p===a.length-1,g=u==="/"?s:s.slice(u.length)||"/",y=cd({path:h.relativePath,caseSensitive:h.caseSensitive,end:_},g),x=h.route;if(!y&&_&&o&&!a[a.length-1].route.index&&(y=cd({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(c,y.params),f.push({params:c,pathname:Wi([u,y.pathname]),pathnameBase:b4(Wi([u,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(u=Wi([u,y.pathnameBase]))}return f}function cd(t,s){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,a]=p4(t.path,t.caseSensitive,t.end),c=s.match(o);if(!c)return null;let u=c[0],f=u.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:a.reduce((_,{paramName:g,isOptional:y},x)=>{if(g==="*"){let S=p[x]||"";f=u.slice(0,u.length-S.length).replace(/(.)\/+$/,"$1")}const w=p[x];return y&&!w?_[g]=void 0:_[g]=(w||"").replace(/%2F/g,"/"),_},{}),pathname:u,pathnameBase:f,pattern:t}}function p4(t,s=!1,o=!0){oi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let a=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,h)=>(a.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(a.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,s?void 0:"i"),a]}function _4(t){try{return t.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return oi(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),t}}function Do(t,s){if(s==="/")return t;if(!t.toLowerCase().startsWith(s.toLowerCase()))return null;let o=s.endsWith("/")?s.length-1:s.length,a=t.charAt(o);return a&&a!=="/"?null:t.slice(o)||"/"}function g4(t,s="/"){let{pathname:o,search:a="",hash:c=""}=typeof t=="string"?wa(t):t;return{pathname:o?o.startsWith("/")?o:y4(o,s):s,search:v4(a),hash:w4(c)}}function y4(t,s){let o=s.replace(/\/+$/,"").split("/");return t.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Dh(t,s,o,a){return`Cannot include a '${t}' character in a manually specified \`to.${s}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function x4(t){return t.filter((s,o)=>o===0||s.route.path&&s.route.path.length>0)}function m2(t){let s=x4(t);return s.map((o,a)=>a===s.length-1?o.pathname:o.pathnameBase)}function p2(t,s,o,a=!1){let c;typeof t=="string"?c=wa(t):(c={...t},gn(!c.pathname||!c.pathname.includes("?"),Dh("?","pathname","search",c)),gn(!c.pathname||!c.pathname.includes("#"),Dh("#","pathname","hash",c)),gn(!c.search||!c.search.includes("#"),Dh("#","search","hash",c)));let u=t===""||c.pathname==="",f=u?"/":c.pathname,p;if(f==null)p=o;else{let y=s.length-1;if(!a&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),y-=1;c.pathname=x.join("/")}p=y>=0?s[y]:"/"}let h=g4(c,p),_=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(_||g)&&(h.pathname+="/"),h}var Wi=t=>t.join("/").replace(/\/\/+/g,"/"),b4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),v4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,w4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function S4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var _2=["POST","PUT","PATCH","DELETE"];new Set(_2);var k4=["GET",..._2];new Set(k4);var vr=b.createContext(null);vr.displayName="DataRouter";var Sd=b.createContext(null);Sd.displayName="DataRouterState";var g2=b.createContext({isTransitioning:!1});g2.displayName="ViewTransition";var j4=b.createContext(new Map);j4.displayName="Fetchers";var C4=b.createContext(null);C4.displayName="Await";var ji=b.createContext(null);ji.displayName="Navigation";var nc=b.createContext(null);nc.displayName="Location";var Ci=b.createContext({outlet:null,matches:[],isDataRoute:!1});Ci.displayName="Route";var Xm=b.createContext(null);Xm.displayName="RouteError";function T4(t,{relative:s}={}){gn(sc(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:a}=b.useContext(ji),{hash:c,pathname:u,search:f}=ic(t,{relative:s}),p=u;return o!=="/"&&(p=u==="/"?o:Wi([o,u])),a.createHref({pathname:p,search:f,hash:c})}function sc(){return b.useContext(nc)!=null}function Sa(){return gn(sc(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(nc).location}var y2="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function x2(t){b.useContext(ji).static||b.useLayoutEffect(t)}function E4(){let{isDataRoute:t}=b.useContext(Ci);return t?V4():M4()}function M4(){gn(sc(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(vr),{basename:s,navigator:o}=b.useContext(ji),{matches:a}=b.useContext(Ci),{pathname:c}=Sa(),u=JSON.stringify(m2(a)),f=b.useRef(!1);return x2(()=>{f.current=!0}),b.useCallback((h,_={})=>{if(oi(f.current,y2),!f.current)return;if(typeof h=="number"){o.go(h);return}let g=p2(h,JSON.parse(u),c,_.relative==="path");t==null&&s!=="/"&&(g.pathname=g.pathname==="/"?s:Wi([s,g.pathname])),(_.replace?o.replace:o.push)(g,_.state,_)},[s,o,u,c,t])}b.createContext(null);function R4(){let{matches:t}=b.useContext(Ci),s=t[t.length-1];return s?s.params:{}}function ic(t,{relative:s}={}){let{matches:o}=b.useContext(Ci),{pathname:a}=Sa(),c=JSON.stringify(m2(o));return b.useMemo(()=>p2(t,JSON.parse(c),a,s==="path"),[t,c,a,s])}function N4(t,s){return b2(t,s)}function b2(t,s,o,a){var z;gn(sc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c,static:u}=b.useContext(ji),{matches:f}=b.useContext(Ci),p=f[f.length-1],h=p?p.params:{},_=p?p.pathname:"/",g=p?p.pathnameBase:"/",y=p&&p.route;{let O=y&&y.path||"";v2(_,!y||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let x=Sa(),w;if(s){let O=typeof s=="string"?wa(s):s;gn(g==="/"||((z=O.pathname)==null?void 0:z.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${O.pathname}" was given in the \`location\` prop.`),w=O}else w=x;let S=w.pathname||"/",T=S;if(g!=="/"){let O=g.replace(/^\//,"").split("/");T="/"+S.replace(/^\//,"").split("/").slice(O.length).join("/")}let M=!u&&o&&o.matches&&o.matches.length>0?o.matches:d2(t,{pathname:T});oi(y||M!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),oi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=B4(M&&M.map(O=>Object.assign({},O,{params:Object.assign({},h,O.params),pathname:Wi([g,c.encodeLocation?c.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?g:Wi([g,c.encodeLocation?c.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),f,o,a);return s&&C?b.createElement(nc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},C):C}function A4(){let t=I4(),s=S4(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:u},"ErrorBoundary")," or"," ",b.createElement("code",{style:u},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},s),o?b.createElement("pre",{style:c},o):null,f)}var D4=b.createElement(A4,null),L4=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,s){return s.location!==t.location||s.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:s.error,location:s.location,revalidation:t.revalidation||s.revalidation}}componentDidCatch(t,s){console.error("React Router caught the following error during render",t,s)}render(){return this.state.error!==void 0?b.createElement(Ci.Provider,{value:this.props.routeContext},b.createElement(Xm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function O4({routeContext:t,match:s,children:o}){let a=b.useContext(vr);return a&&a.static&&a.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=s.route.id),b.createElement(Ci.Provider,{value:t},o)}function B4(t,s=[],o=null,a=null){if(t==null){if(!o)return null;if(o.errors)t=o.matches;else if(s.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let c=t,u=o==null?void 0:o.errors;if(u!=null){let h=c.findIndex(_=>_.route.id&&(u==null?void 0:u[_.route.id])!==void 0);gn(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,h+1))}let f=!1,p=-1;if(o)for(let h=0;h<c.length;h++){let _=c[h];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=h),_.route.id){let{loaderData:g,errors:y}=o,x=_.route.loader&&!g.hasOwnProperty(_.route.id)&&(!y||y[_.route.id]===void 0);if(_.route.lazy||x){f=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((h,_,g)=>{let y,x=!1,w=null,S=null;o&&(y=u&&_.route.id?u[_.route.id]:void 0,w=_.route.errorElement||D4,f&&(p<0&&g===0?(v2("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,S=null):p===g&&(x=!0,S=_.route.hydrateFallbackElement||null)));let T=s.concat(c.slice(0,g+1)),M=()=>{let C;return y?C=w:x?C=S:_.route.Component?C=b.createElement(_.route.Component,null):_.route.element?C=_.route.element:C=h,b.createElement(O4,{match:_,routeContext:{outlet:h,matches:T,isDataRoute:o!=null},children:C})};return o&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?b.createElement(L4,{location:o.location,revalidation:o.revalidation,component:w,error:y,children:M(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):M()},null)}function qm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function z4(t){let s=b.useContext(vr);return gn(s,qm(t)),s}function $4(t){let s=b.useContext(Sd);return gn(s,qm(t)),s}function P4(t){let s=b.useContext(Ci);return gn(s,qm(t)),s}function Qm(t){let s=P4(t),o=s.matches[s.matches.length-1];return gn(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function H4(){return Qm("useRouteId")}function I4(){var a;let t=b.useContext(Xm),s=$4("useRouteError"),o=Qm("useRouteError");return t!==void 0?t:(a=s.errors)==null?void 0:a[o]}function V4(){let{router:t}=z4("useNavigate"),s=Qm("useNavigate"),o=b.useRef(!1);return x2(()=>{o.current=!0}),b.useCallback(async(c,u={})=>{oi(o.current,y2),o.current&&(typeof c=="number"?t.navigate(c):await t.navigate(c,{fromRouteId:s,...u}))},[t,s])}var Xg={};function v2(t,s,o){!s&&!Xg[t]&&(Xg[t]=!0,oi(!1,o))}b.memo(U4);function U4({routes:t,future:s,state:o}){return b2(t,void 0,o,s)}function mm(t){gn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Y4({basename:t="/",children:s=null,location:o,navigationType:a="POP",navigator:c,static:u=!1}){gn(!sc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),p=b.useMemo(()=>({basename:f,navigator:c,static:u,future:{}}),[f,c,u]);typeof o=="string"&&(o=wa(o));let{pathname:h="/",search:_="",hash:g="",state:y=null,key:x="default"}=o,w=b.useMemo(()=>{let S=Do(h,f);return S==null?null:{location:{pathname:S,search:_,hash:g,state:y,key:x},navigationType:a}},[f,h,_,g,y,x,a]);return oi(w!=null,`<Router basename="${f}"> is not able to match the URL "${h}${_}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:b.createElement(ji.Provider,{value:p},b.createElement(nc.Provider,{children:s,value:w}))}function W4({children:t,location:s}){return N4(pm(t),s)}function pm(t,s=[]){let o=[];return b.Children.forEach(t,(a,c)=>{if(!b.isValidElement(a))return;let u=[...s,c];if(a.type===b.Fragment){o.push.apply(o,pm(a.props.children,u));return}gn(a.type===mm,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),gn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=pm(a.props.children,u)),o.push(f)}),o}var nd="get",sd="application/x-www-form-urlencoded";function kd(t){return t!=null&&typeof t.tagName=="string"}function F4(t){return kd(t)&&t.tagName.toLowerCase()==="button"}function X4(t){return kd(t)&&t.tagName.toLowerCase()==="form"}function q4(t){return kd(t)&&t.tagName.toLowerCase()==="input"}function Q4(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function G4(t,s){return t.button===0&&(!s||s==="_self")&&!Q4(t)}var ku=null;function K4(){if(ku===null)try{new FormData(document.createElement("form"),0),ku=!1}catch{ku=!0}return ku}var Z4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lh(t){return t!=null&&!Z4.has(t)?(oi(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sd}"`),null):t}function J4(t,s){let o,a,c,u,f;if(X4(t)){let p=t.getAttribute("action");a=p?Do(p,s):null,o=t.getAttribute("method")||nd,c=Lh(t.getAttribute("enctype"))||sd,u=new FormData(t)}else if(F4(t)||q4(t)&&(t.type==="submit"||t.type==="image")){let p=t.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||p.getAttribute("action");if(a=h?Do(h,s):null,o=t.getAttribute("formmethod")||p.getAttribute("method")||nd,c=Lh(t.getAttribute("formenctype"))||Lh(p.getAttribute("enctype"))||sd,u=new FormData(p,t),!K4()){let{name:_,type:g,value:y}=t;if(g==="image"){let x=_?`${_}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else _&&u.append(_,y)}}else{if(kd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=nd,a=null,c=sd,f=t}return u&&c==="text/plain"&&(f=u,u=void 0),{action:a,method:o.toLowerCase(),encType:c,formData:u,body:f}}function Gm(t,s){if(t===!1||t===null||typeof t>"u")throw new Error(s)}async function e6(t,s){if(t.id in s)return s[t.id];try{let o=await import(t.module);return s[t.id]=o,o}catch(o){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function t6(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function n6(t,s,o){let a=await Promise.all(t.map(async c=>{let u=s.routes[c.route.id];if(u){let f=await e6(u,o);return f.links?f.links():[]}return[]}));return a6(a.flat(1).filter(t6).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function qg(t,s,o,a,c,u){let f=(h,_)=>o[_]?h.route.id!==o[_].route.id:!0,p=(h,_)=>{var g;return o[_].pathname!==h.pathname||((g=o[_].route.path)==null?void 0:g.endsWith("*"))&&o[_].params["*"]!==h.params["*"]};return u==="assets"?s.filter((h,_)=>f(h,_)||p(h,_)):u==="data"?s.filter((h,_)=>{var y;let g=a.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(f(h,_)||p(h,_))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((y=o[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function s6(t,s){return i6(t.map(o=>{let a=s.routes[o.route.id];if(!a)return[];let c=[a.module];return a.imports&&(c=c.concat(a.imports)),c}).flat(1))}function i6(t){return[...new Set(t)]}function o6(t){let s={},o=Object.keys(t).sort();for(let a of o)s[a]=t[a];return s}function a6(t,s){let o=new Set;return new Set(s),t.reduce((a,c)=>{let u=JSON.stringify(o6(c));return o.has(u)||(o.add(u),a.push({key:u,link:c})),a},[])}function r6(t){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return s.pathname==="/"?s.pathname="_root.data":s.pathname=`${s.pathname.replace(/\/$/,"")}.data`,s}function l6(){let t=b.useContext(vr);return Gm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function c6(){let t=b.useContext(Sd);return Gm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Km=b.createContext(void 0);Km.displayName="FrameworkContext";function w2(){let t=b.useContext(Km);return Gm(t,"You must render this element inside a <HydratedRouter> element"),t}function u6(t,s){let o=b.useContext(Km),[a,c]=b.useState(!1),[u,f]=b.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:_,onMouseLeave:g,onTouchStart:y}=s,x=b.useRef(null);b.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let T=C=>{C.forEach(z=>{f(z.isIntersecting)})},M=new IntersectionObserver(T,{threshold:.5});return x.current&&M.observe(x.current),()=>{M.disconnect()}}},[t]),b.useEffect(()=>{if(a){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[a]);let w=()=>{c(!0)},S=()=>{c(!1),f(!1)};return o?t!=="intent"?[u,x,{}]:[u,x,{onFocus:El(p,w),onBlur:El(h,S),onMouseEnter:El(_,w),onMouseLeave:El(g,S),onTouchStart:El(y,w)}]:[!1,x,{}]}function El(t,s){return o=>{t&&t(o),o.defaultPrevented||s(o)}}function d6({page:t,...s}){let{router:o}=l6(),a=b.useMemo(()=>d2(o.routes,t,o.basename),[o.routes,t,o.basename]);return a?b.createElement(h6,{page:t,matches:a,...s}):null}function f6(t){let{manifest:s,routeModules:o}=w2(),[a,c]=b.useState([]);return b.useEffect(()=>{let u=!1;return n6(t,s,o).then(f=>{u||c(f)}),()=>{u=!0}},[t,s,o]),a}function h6({page:t,matches:s,...o}){let a=Sa(),{manifest:c,routeModules:u}=w2(),{loaderData:f,matches:p}=c6(),h=b.useMemo(()=>qg(t,s,p,c,a,"data"),[t,s,p,c,a]),_=b.useMemo(()=>qg(t,s,p,c,a,"assets"),[t,s,p,c,a]),g=b.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let w=new Set,S=!1;if(s.forEach(M=>{var z;let C=c.routes[M.route.id];!C||!C.hasLoader||(!h.some(O=>O.route.id===M.route.id)&&M.route.id in f&&((z=u[M.route.id])!=null&&z.shouldRevalidate)||C.hasClientLoader?S=!0:w.add(M.route.id))}),w.size===0)return[];let T=r6(t);return S&&w.size>0&&T.searchParams.set("_routes",s.filter(M=>w.has(M.route.id)).map(M=>M.route.id).join(",")),[T.pathname+T.search]},[f,a,c,h,s,t,u]),y=b.useMemo(()=>s6(_,c),[_,c]),x=f6(_);return b.createElement(b.Fragment,null,g.map(w=>b.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...o})),y.map(w=>b.createElement("link",{key:w,rel:"modulepreload",href:w,...o})),x.map(({key:w,link:S})=>b.createElement("link",{key:w,...S})))}function m6(...t){return s=>{t.forEach(o=>{typeof o=="function"?o(s):o!=null&&(o.current=s)})}}var S2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S2&&(window.__reactRouterVersion="7.1.5")}catch{}function p6({basename:t,children:s,window:o}){let a=b.useRef();a.current==null&&(a.current=t4({window:o,v5Compat:!0}));let c=a.current,[u,f]=b.useState({action:c.action,location:c.location}),p=b.useCallback(h=>{b.startTransition(()=>f(h))},[f]);return b.useLayoutEffect(()=>c.listen(p),[c,p]),b.createElement(Y4,{basename:t,children:s,location:u.location,navigationType:u.action,navigator:c})}var k2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fl=b.forwardRef(function({onClick:s,discover:o="render",prefetch:a="none",relative:c,reloadDocument:u,replace:f,state:p,target:h,to:_,preventScrollReset:g,viewTransition:y,...x},w){let{basename:S}=b.useContext(ji),T=typeof _=="string"&&k2.test(_),M,C=!1;if(typeof _=="string"&&T&&(M=_,S2))try{let F=new URL(window.location.href),Q=_.startsWith("//")?new URL(F.protocol+_):new URL(_),ee=Do(Q.pathname,S);Q.origin===F.origin&&ee!=null?_=ee+Q.search+Q.hash:C=!0}catch{oi(!1,`<Link to="${_}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=T4(_,{relative:c}),[O,L,$]=u6(a,x),W=x6(_,{replace:f,state:p,target:h,preventScrollReset:g,relative:c,viewTransition:y});function P(F){s&&s(F),F.defaultPrevented||W(F)}let te=b.createElement("a",{...x,...$,href:M||z,onClick:C||u?s:P,ref:m6(w,L),target:h,"data-discover":!T&&o==="render"?"true":void 0});return O&&!T?b.createElement(b.Fragment,null,te,b.createElement(d6,{page:z})):te});Fl.displayName="Link";var _6=b.forwardRef(function({"aria-current":s="page",caseSensitive:o=!1,className:a="",end:c=!1,style:u,to:f,viewTransition:p,children:h,..._},g){let y=ic(f,{relative:_.relative}),x=Sa(),w=b.useContext(Sd),{navigator:S,basename:T}=b.useContext(ji),M=w!=null&&k6(y)&&p===!0,C=S.encodeLocation?S.encodeLocation(y).pathname:y.pathname,z=x.pathname,O=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(z=z.toLowerCase(),O=O?O.toLowerCase():null,C=C.toLowerCase()),O&&T&&(O=Do(O,T)||O);const L=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let $=z===C||!c&&z.startsWith(C)&&z.charAt(L)==="/",W=O!=null&&(O===C||!c&&O.startsWith(C)&&O.charAt(C.length)==="/"),P={isActive:$,isPending:W,isTransitioning:M},te=$?s:void 0,F;typeof a=="function"?F=a(P):F=[a,$?"active":null,W?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let Q=typeof u=="function"?u(P):u;return b.createElement(Fl,{..._,"aria-current":te,className:F,ref:g,style:Q,to:f,viewTransition:p},typeof h=="function"?h(P):h)});_6.displayName="NavLink";var g6=b.forwardRef(({discover:t="render",fetcherKey:s,navigate:o,reloadDocument:a,replace:c,state:u,method:f=nd,action:p,onSubmit:h,relative:_,preventScrollReset:g,viewTransition:y,...x},w)=>{let S=w6(),T=S6(p,{relative:_}),M=f.toLowerCase()==="get"?"get":"post",C=typeof p=="string"&&k2.test(p),z=O=>{if(h&&h(O),O.defaultPrevented)return;O.preventDefault();let L=O.nativeEvent.submitter,$=(L==null?void 0:L.getAttribute("formmethod"))||f;S(L||O.currentTarget,{fetcherKey:s,method:$,navigate:o,replace:c,state:u,relative:_,preventScrollReset:g,viewTransition:y})};return b.createElement("form",{ref:w,method:M,action:T,onSubmit:a?h:z,...x,"data-discover":!C&&t==="render"?"true":void 0})});g6.displayName="Form";function y6(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j2(t){let s=b.useContext(vr);return gn(s,y6(t)),s}function x6(t,{target:s,replace:o,state:a,preventScrollReset:c,relative:u,viewTransition:f}={}){let p=E4(),h=Sa(),_=ic(t,{relative:u});return b.useCallback(g=>{if(G4(g,s)){g.preventDefault();let y=o!==void 0?o:Wl(h)===Wl(_);p(t,{replace:y,state:a,preventScrollReset:c,relative:u,viewTransition:f})}},[h,p,_,o,a,s,t,c,u,f])}var b6=0,v6=()=>`__${String(++b6)}__`;function w6(){let{router:t}=j2("useSubmit"),{basename:s}=b.useContext(ji),o=H4();return b.useCallback(async(a,c={})=>{let{action:u,method:f,encType:p,formData:h,body:_}=J4(a,s);if(c.navigate===!1){let g=c.fetcherKey||v6();await t.fetch(g,o,c.action||u,{preventScrollReset:c.preventScrollReset,formData:h,body:_,formMethod:c.method||f,formEncType:c.encType||p,flushSync:c.flushSync})}else await t.navigate(c.action||u,{preventScrollReset:c.preventScrollReset,formData:h,body:_,formMethod:c.method||f,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[t,s,o])}function S6(t,{relative:s}={}){let{basename:o}=b.useContext(ji),a=b.useContext(Ci);gn(a,"useFormAction must be used inside a RouteContext");let[c]=a.matches.slice(-1),u={...ic(t||".",{relative:s})},f=Sa();if(t==null){u.search=f.search;let p=new URLSearchParams(u.search),h=p.getAll("index");if(h.some(g=>g==="")){p.delete("index"),h.filter(y=>y).forEach(y=>p.append("index",y));let g=p.toString();u.search=g?`?${g}`:""}}return(!t||t===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:Wi([o,u.pathname])),Wl(u)}function k6(t,s={}){let o=b.useContext(g2);gn(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=j2("useViewTransitionState"),c=ic(t,{relative:s.relative});if(!o.isTransitioning)return!1;let u=Do(o.currentLocation.pathname,a)||o.currentLocation.pathname,f=Do(o.nextLocation.pathname,a)||o.nextLocation.pathname;return cd(c.pathname,f)!=null||cd(c.pathname,u)!=null}new TextEncoder;var C2=vd(),T2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qg=ii.createContext&&ii.createContext(T2),j6=["attr","size","title"];function C6(t,s){if(t==null)return{};var o=T6(t,s),a,c;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(c=0;c<u.length;c++)a=u[c],!(s.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}function T6(t,s){if(t==null)return{};var o={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(s.indexOf(a)>=0)continue;o[a]=t[a]}return o}function ud(){return ud=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},ud.apply(this,arguments)}function Gg(t,s){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),o.push.apply(o,a)}return o}function dd(t){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?Gg(Object(o),!0).forEach(function(a){E6(t,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Gg(Object(o)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(o,a))})}return t}function E6(t,s,o){return s=M6(s),s in t?Object.defineProperty(t,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[s]=o,t}function M6(t){var s=R6(t,"string");return typeof s=="symbol"?s:s+""}function R6(t,s){if(typeof t!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var a=o.call(t,s);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(t)}function E2(t){return t&&t.map((s,o)=>ii.createElement(s.tag,dd({key:o},s.attr),E2(s.child)))}function dt(t){return s=>ii.createElement(N6,ud({attr:dd({},t.attr)},s),E2(t.child))}function N6(t){var s=o=>{var{attr:a,size:c,title:u}=t,f=C6(t,j6),p=c||o.size||"1em",h;return o.className&&(h=o.className),t.className&&(h=(h?h+" ":"")+t.className),ii.createElement("svg",ud({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,a,f,{className:h,style:dd(dd({color:t.color||o.color},o.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&ii.createElement("title",null,u),t.children)};return Qg!==void 0?ii.createElement(Qg.Consumer,null,o=>s(o)):s(T2)}function A6(t){return dt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(t)}function D6(t){return dt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"},child:[]}]})(t)}function M2(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(t)}function gr(t){return dt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function L6(t){return dt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(t)}function Zm(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function Jm(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function R2(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(t)}function O6(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(t)}function N2(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(t)}function B6(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(t)}function e0(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(t)}function z6(t){return dt({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(t)}function $6(t){return dt({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(t)}function A2(t){return dt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(t)}function P6(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function D2(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(t)}function t0(t){return dt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(t)}function L2(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}function O2(t){return dt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function H6(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function I6(t){return dt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function V6(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function U6(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"},child:[]}]})(t)}var an={},ju={},Cu={},Tu={},Oh,Kg;function Y6(){if(Kg)return Oh;Kg=1;var t="Expected a function",s=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,h=typeof wu=="object"&&wu&&wu.Object===Object&&wu,_=typeof self=="object"&&self&&self.Object===Object&&self,g=h||_||Function("return this")(),y=Object.prototype,x=y.toString,w=Math.max,S=Math.min,T=function(){return g.Date.now()};function M(W,P,te){var F,Q,ee,G,ge,ce,Re=0,J=!1,ye=!1,K=!0;if(typeof W!="function")throw new TypeError(t);P=$(P)||0,z(te)&&(J=!!te.leading,ye="maxWait"in te,ee=ye?w($(te.maxWait)||0,P):ee,K="trailing"in te?!!te.trailing:K);function be(Be){var ft=F,ht=Q;return F=Q=void 0,Re=Be,G=W.apply(ht,ft),G}function A(Be){return Re=Be,ge=setTimeout(Se,P),J?be(Be):G}function ie(Be){var ft=Be-ce,ht=Be-Re,$t=P-ft;return ye?S($t,ee-ht):$t}function Ce(Be){var ft=Be-ce,ht=Be-Re;return ce===void 0||ft>=P||ft<0||ye&&ht>=ee}function Se(){var Be=T();if(Ce(Be))return ve(Be);ge=setTimeout(Se,ie(Be))}function ve(Be){return ge=void 0,K&&F?be(Be):(F=Q=void 0,G)}function Ze(){ge!==void 0&&clearTimeout(ge),Re=0,F=ce=Q=ge=void 0}function Fe(){return ge===void 0?G:ve(T())}function Et(){var Be=T(),ft=Ce(Be);if(F=arguments,Q=this,ce=Be,ft){if(ge===void 0)return A(ce);if(ye)return ge=setTimeout(Se,P),be(ce)}return ge===void 0&&(ge=setTimeout(Se,P)),G}return Et.cancel=Ze,Et.flush=Fe,Et}function C(W,P,te){var F=!0,Q=!0;if(typeof W!="function")throw new TypeError(t);return z(te)&&(F="leading"in te?!!te.leading:F,Q="trailing"in te?!!te.trailing:Q),M(W,P,{leading:F,maxWait:P,trailing:Q})}function z(W){var P=typeof W;return!!W&&(P=="object"||P=="function")}function O(W){return!!W&&typeof W=="object"}function L(W){return typeof W=="symbol"||O(W)&&x.call(W)==o}function $(W){if(typeof W=="number")return W;if(L(W))return s;if(z(W)){var P=typeof W.valueOf=="function"?W.valueOf():W;W=z(P)?P+"":P}if(typeof W!="string")return W===0?W:+W;W=W.replace(a,"");var te=u.test(W);return te||f.test(W)?p(W.slice(2),te?2:8):c.test(W)?s:+W}return Oh=C,Oh}var Ml={},Zg;function n0(){if(Zg)return Ml;Zg=1,Object.defineProperty(Ml,"__esModule",{value:!0}),Ml.addPassiveEventListener=function(o,a,c){var u=c.name;u||(u=a,console.warn("Listener must be a named function.")),t.has(a)||t.set(a,new Set);var f=t.get(a);if(!f.has(u)){var p=function(){var h=!1;try{var _=Object.defineProperty({},"passive",{get:function(){h=!0}});window.addEventListener("test",null,_)}catch{}return h}();o.addEventListener(a,c,p?{passive:!0}:!1),f.add(u)}},Ml.removePassiveEventListener=function(o,a,c){o.removeEventListener(a,c),t.get(a).delete(c.name||a)};var t=new Map;return Ml}var Jg;function s0(){if(Jg)return Tu;Jg=1,Object.defineProperty(Tu,"__esModule",{value:!0});var t=Y6(),s=a(t),o=n0();function a(f){return f&&f.__esModule?f:{default:f}}var c=function(p){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,s.default)(p,h)},u={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(p,h){if(p){var _=c(function(g){u.scrollHandler(p)},h);return u.scrollSpyContainers.push(p),(0,o.addPassiveEventListener)(p,"scroll",_),function(){return(0,o.removePassiveEventListener)(p,"scroll",_)}}return function(){}},isMounted:function(p){return u.scrollSpyContainers.indexOf(p)!==-1},currentPositionX:function(p){if(p===document){var h=window.pageYOffset!==void 0,_=(document.compatMode||"")==="CSS1Compat";return h?window.pageXOffset:_?document.documentElement.scrollLeft:document.body.scrollLeft}else return p.scrollLeft},currentPositionY:function(p){if(p===document){var h=window.pageXOffset!==void 0,_=(document.compatMode||"")==="CSS1Compat";return h?window.pageYOffset:_?document.documentElement.scrollTop:document.body.scrollTop}else return p.scrollTop},scrollHandler:function(p){var h=u.scrollSpyContainers[u.scrollSpyContainers.indexOf(p)].spyCallbacks||[];h.forEach(function(_){return _(u.currentPositionX(p),u.currentPositionY(p))})},addStateHandler:function(p){u.spySetState.push(p)},addSpyHandler:function(p,h){var _=u.scrollSpyContainers[u.scrollSpyContainers.indexOf(h)];_.spyCallbacks||(_.spyCallbacks=[]),_.spyCallbacks.push(p),p(u.currentPositionX(h),u.currentPositionY(h))},updateStates:function(){u.spySetState.forEach(function(p){return p()})},unmount:function(p,h){u.scrollSpyContainers.forEach(function(_){return _.spyCallbacks&&_.spyCallbacks.length&&_.spyCallbacks.indexOf(h)>-1&&_.spyCallbacks.splice(_.spyCallbacks.indexOf(h),1)}),u.spySetState&&u.spySetState.length&&u.spySetState.indexOf(p)>-1&&u.spySetState.splice(u.spySetState.indexOf(p),1),document.removeEventListener("scroll",u.scrollHandler)},update:function(){return u.scrollSpyContainers.forEach(function(p){return u.scrollHandler(p)})}};return Tu.default=u,Tu}var Eu={},Mu={},e1;function jd(){if(e1)return Mu;e1=1,Object.defineProperty(Mu,"__esModule",{value:!0});var t=function(p,h){var _=p.indexOf("#")===0?p.substring(1):p,g=_?"#"+_:"",y=window&&window.location,x=g?y.pathname+y.search+g:y.pathname+y.search;h?history.pushState(history.state,"",x):history.replaceState(history.state,"",x)},s=function(){return window.location.hash.replace(/^#/,"")},o=function(p){return function(h){return p.contains?p!=h&&p.contains(h):!!(p.compareDocumentPosition(h)&16)}},a=function(p){return getComputedStyle(p).position!=="static"},c=function(p,h){for(var _=p.offsetTop,g=p.offsetParent;g&&!h(g);)_+=g.offsetTop,g=g.offsetParent;return{offsetTop:_,offsetParent:g}},u=function(p,h,_){if(_)return p===document?h.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(p).position!=="static"?h.offsetLeft:h.offsetLeft-p.offsetLeft;if(p===document)return h.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(a(p)){if(h.offsetParent!==p){var g=function(M){return M===p||M===document},y=c(h,g),x=y.offsetTop,w=y.offsetParent;if(w!==p)throw new Error("Seems containerElement is not an ancestor of the Element");return x}return h.offsetTop}if(h.offsetParent===p.offsetParent)return h.offsetTop-p.offsetTop;var S=function(M){return M===document};return c(h,S).offsetTop-c(p,S).offsetTop};return Mu.default={updateHash:t,getHash:s,filterElementInContainer:o,scrollOffset:u},Mu}var Ru={},Nu={},t1;function W6(){return t1||(t1=1,Object.defineProperty(Nu,"__esModule",{value:!0}),Nu.default={defaultEasing:function(s){return s<.5?Math.pow(s*2,2)/2:1-Math.pow((1-s)*2,2)/2},linear:function(s){return s},easeInQuad:function(s){return s*s},easeOutQuad:function(s){return s*(2-s)},easeInOutQuad:function(s){return s<.5?2*s*s:-1+(4-2*s)*s},easeInCubic:function(s){return s*s*s},easeOutCubic:function(s){return--s*s*s+1},easeInOutCubic:function(s){return s<.5?4*s*s*s:(s-1)*(2*s-2)*(2*s-2)+1},easeInQuart:function(s){return s*s*s*s},easeOutQuart:function(s){return 1- --s*s*s*s},easeInOutQuart:function(s){return s<.5?8*s*s*s*s:1-8*--s*s*s*s},easeInQuint:function(s){return s*s*s*s*s},easeOutQuint:function(s){return 1+--s*s*s*s*s},easeInOutQuint:function(s){return s<.5?16*s*s*s*s*s:1+16*--s*s*s*s*s}}),Nu}var Au={},n1;function F6(){if(n1)return Au;n1=1,Object.defineProperty(Au,"__esModule",{value:!0});var t=n0(),s=["mousedown","wheel","touchmove","keydown"];return Au.default={subscribe:function(a){return typeof document<"u"&&s.forEach(function(c){return(0,t.addPassiveEventListener)(document,c,a)})}},Au}var Du={},s1;function i0(){if(s1)return Du;s1=1,Object.defineProperty(Du,"__esModule",{value:!0});var t={registered:{},scrollEvent:{register:function(o,a){t.registered[o]=a},remove:function(o){t.registered[o]=null}}};return Du.default=t,Du}var i1;function B2(){if(i1)return Ru;i1=1,Object.defineProperty(Ru,"__esModule",{value:!0});var t=Object.assign||function(Q){for(var ee=1;ee<arguments.length;ee++){var G=arguments[ee];for(var ge in G)Object.prototype.hasOwnProperty.call(G,ge)&&(Q[ge]=G[ge])}return Q},s=jd();h(s);var o=W6(),a=h(o),c=F6(),u=h(c),f=i0(),p=h(f);function h(Q){return Q&&Q.__esModule?Q:{default:Q}}var _=function(ee){return a.default[ee.smooth]||a.default.defaultEasing},g=function(ee){return typeof ee=="function"?ee:function(){return ee}},y=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},x=function(){return y()||function(Q,ee,G){window.setTimeout(Q,G||1e3/60,new Date().getTime())}}(),w=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},S=function(ee){var G=ee.data.containerElement;if(G&&G!==document&&G!==document.body)return G.scrollLeft;var ge=window.pageXOffset!==void 0,ce=(document.compatMode||"")==="CSS1Compat";return ge?window.pageXOffset:ce?document.documentElement.scrollLeft:document.body.scrollLeft},T=function(ee){var G=ee.data.containerElement;if(G&&G!==document&&G!==document.body)return G.scrollTop;var ge=window.pageXOffset!==void 0,ce=(document.compatMode||"")==="CSS1Compat";return ge?window.pageYOffset:ce?document.documentElement.scrollTop:document.body.scrollTop},M=function(ee){var G=ee.data.containerElement;if(G&&G!==document&&G!==document.body)return G.scrollWidth-G.offsetWidth;var ge=document.body,ce=document.documentElement;return Math.max(ge.scrollWidth,ge.offsetWidth,ce.clientWidth,ce.scrollWidth,ce.offsetWidth)},C=function(ee){var G=ee.data.containerElement;if(G&&G!==document&&G!==document.body)return G.scrollHeight-G.offsetHeight;var ge=document.body,ce=document.documentElement;return Math.max(ge.scrollHeight,ge.offsetHeight,ce.clientHeight,ce.scrollHeight,ce.offsetHeight)},z=function Q(ee,G,ge){var ce=G.data;if(!G.ignoreCancelEvents&&ce.cancel){p.default.registered.end&&p.default.registered.end(ce.to,ce.target,ce.currentPositionY);return}if(ce.delta=Math.round(ce.targetPosition-ce.startPosition),ce.start===null&&(ce.start=ge),ce.progress=ge-ce.start,ce.percent=ce.progress>=ce.duration?1:ee(ce.progress/ce.duration),ce.currentPosition=ce.startPosition+Math.ceil(ce.delta*ce.percent),ce.containerElement&&ce.containerElement!==document&&ce.containerElement!==document.body?G.horizontal?ce.containerElement.scrollLeft=ce.currentPosition:ce.containerElement.scrollTop=ce.currentPosition:G.horizontal?window.scrollTo(ce.currentPosition,0):window.scrollTo(0,ce.currentPosition),ce.percent<1){var Re=Q.bind(null,ee,G);x.call(window,Re);return}p.default.registered.end&&p.default.registered.end(ce.to,ce.target,ce.currentPosition)},O=function(ee){ee.data.containerElement=ee?ee.containerId?document.getElementById(ee.containerId):ee.container&&ee.container.nodeType?ee.container:document:null},L=function(ee,G,ge,ce){G.data=G.data||w(),window.clearTimeout(G.data.delayTimeout);var Re=function(){G.data.cancel=!0};if(u.default.subscribe(Re),O(G),G.data.start=null,G.data.cancel=!1,G.data.startPosition=G.horizontal?S(G):T(G),G.data.targetPosition=G.absolute?ee:ee+G.data.startPosition,G.data.startPosition===G.data.targetPosition){p.default.registered.end&&p.default.registered.end(G.data.to,G.data.target,G.data.currentPosition);return}G.data.delta=Math.round(G.data.targetPosition-G.data.startPosition),G.data.duration=g(G.duration)(G.data.delta),G.data.duration=isNaN(parseFloat(G.data.duration))?1e3:parseFloat(G.data.duration),G.data.to=ge,G.data.target=ce;var J=_(G),ye=z.bind(null,J,G);if(G&&G.delay>0){G.data.delayTimeout=window.setTimeout(function(){p.default.registered.begin&&p.default.registered.begin(G.data.to,G.data.target),x.call(window,ye)},G.delay);return}p.default.registered.begin&&p.default.registered.begin(G.data.to,G.data.target),x.call(window,ye)},$=function(ee){return ee=t({},ee),ee.data=ee.data||w(),ee.absolute=!0,ee},W=function(ee){L(0,$(ee))},P=function(ee,G){L(ee,$(G))},te=function(ee){ee=$(ee),O(ee),L(ee.horizontal?M(ee):C(ee),ee)},F=function(ee,G){G=$(G),O(G);var ge=G.horizontal?S(G):T(G);L(ee+ge,G)};return Ru.default={animateTopScroll:L,getAnimationType:_,scrollToTop:W,scrollToBottom:te,scrollTo:P,scrollMore:F},Ru}var o1;function Cd(){if(o1)return Eu;o1=1,Object.defineProperty(Eu,"__esModule",{value:!0});var t=Object.assign||function(g){for(var y=1;y<arguments.length;y++){var x=arguments[y];for(var w in x)Object.prototype.hasOwnProperty.call(x,w)&&(g[w]=x[w])}return g},s=jd(),o=p(s),a=B2(),c=p(a),u=i0(),f=p(u);function p(g){return g&&g.__esModule?g:{default:g}}var h={},_=void 0;return Eu.default={unmount:function(){h={}},register:function(y,x){h[y]=x},unregister:function(y){delete h[y]},get:function(y){return h[y]||document.getElementById(y)||document.getElementsByName(y)[0]||document.getElementsByClassName(y)[0]},setActiveLink:function(y){return _=y},getActiveLink:function(){return _},scrollTo:function(y,x){var w=this.get(y);if(!w){console.warn("target Element not found");return}x=t({},x,{absolute:!1});var S=x.containerId,T=x.container,M=void 0;S?M=document.getElementById(S):T&&T.nodeType?M=T:M=document,x.absolute=!0;var C=x.horizontal,z=o.default.scrollOffset(M,w,C)+(x.offset||0);if(!x.smooth){f.default.registered.begin&&f.default.registered.begin(y,w),M===document?x.horizontal?window.scrollTo(z,0):window.scrollTo(0,z):M.scrollTop=z,f.default.registered.end&&f.default.registered.end(y,w);return}c.default.animateTopScroll(z,x,y,w)}},Eu}var Bh={exports:{}},zh,a1;function X6(){if(a1)return zh;a1=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return zh=t,zh}var $h,r1;function q6(){if(r1)return $h;r1=1;var t=X6();function s(){}function o(){}return o.resetWarningCache=s,$h=function(){function a(f,p,h,_,g,y){if(y!==t){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}a.isRequired=a;function c(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:c,element:a,elementType:a,instanceOf:c,node:a,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:o,resetWarningCache:s};return u.PropTypes=u,u},$h}var l1;function Td(){return l1||(l1=1,Bh.exports=q6()()),Bh.exports}var Lu={},c1;function z2(){if(c1)return Lu;c1=1,Object.defineProperty(Lu,"__esModule",{value:!0}),n0();var t=jd(),s=o(t);function o(c){return c&&c.__esModule?c:{default:c}}var a={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(u){this.scroller=u,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(u,f){this.containers[u]=f},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var u=this,f=this.getHash();f?window.setTimeout(function(){u.scrollTo(f,!0),u.initialized=!0},10):this.initialized=!0},scrollTo:function(u,f){var p=this.scroller,h=p.get(u);if(h&&(f||u!==p.getActiveLink())){var _=this.containers[u]||document;p.scrollTo(u,{container:_})}},getHash:function(){return s.default.getHash()},changeHash:function(u,f){this.isInitialized()&&s.default.getHash()!==u&&s.default.updateHash(u,f)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Lu.default=a,Lu}var u1;function o0(){if(u1)return Cu;u1=1,Object.defineProperty(Cu,"__esModule",{value:!0});var t=Object.assign||function(C){for(var z=1;z<arguments.length;z++){var O=arguments[z];for(var L in O)Object.prototype.hasOwnProperty.call(O,L)&&(C[L]=O[L])}return C},s=function(){function C(z,O){for(var L=0;L<O.length;L++){var $=O[L];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(z,$.key,$)}}return function(z,O,L){return O&&C(z.prototype,O),L&&C(z,L),z}}(),o=Qi(),a=x(o),c=s0(),u=x(c),f=Cd(),p=x(f),h=Td(),_=x(h),g=z2(),y=x(g);function x(C){return C&&C.__esModule?C:{default:C}}function w(C,z){if(!(C instanceof z))throw new TypeError("Cannot call a class as a function")}function S(C,z){if(!C)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z&&(typeof z=="object"||typeof z=="function")?z:C}function T(C,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof z);C.prototype=Object.create(z&&z.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),z&&(Object.setPrototypeOf?Object.setPrototypeOf(C,z):C.__proto__=z)}var M={to:_.default.string.isRequired,containerId:_.default.string,container:_.default.object,activeClass:_.default.string,activeStyle:_.default.object,spy:_.default.bool,horizontal:_.default.bool,smooth:_.default.oneOfType([_.default.bool,_.default.string]),offset:_.default.number,delay:_.default.number,isDynamic:_.default.bool,onClick:_.default.func,duration:_.default.oneOfType([_.default.number,_.default.func]),absolute:_.default.bool,onSetActive:_.default.func,onSetInactive:_.default.func,ignoreCancelEvents:_.default.bool,hashSpy:_.default.bool,saveHashHistory:_.default.bool,spyThrottle:_.default.number};return Cu.default=function(C,z){var O=z||p.default,L=function(W){T(P,W);function P(te){w(this,P);var F=S(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,te));return $.call(F),F.state={active:!1},F.beforeUnmountCallbacks=[],F}return s(P,[{key:"getScrollSpyContainer",value:function(){var F=this.props.containerId,Q=this.props.container;return F&&!Q?document.getElementById(F):Q&&Q.nodeType?Q:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var F=this.getScrollSpyContainer();if(!u.default.isMounted(F)){var Q=u.default.mount(F,this.props.spyThrottle);this.beforeUnmountCallbacks.push(Q)}this.props.hashSpy&&(y.default.isMounted()||y.default.mount(O),y.default.mapContainer(this.props.to,F)),u.default.addSpyHandler(this.spyHandler,F),this.setState({container:F})}}},{key:"componentWillUnmount",value:function(){u.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(F){return F()})}},{key:"render",value:function(){var F="";this.state&&this.state.active?F=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():F=this.props.className;var Q={};this.state&&this.state.active?Q=t({},this.props.style,this.props.activeStyle):Q=t({},this.props.style);var ee=t({},this.props);for(var G in M)ee.hasOwnProperty(G)&&delete ee[G];return ee.className=F,ee.style=Q,ee.onClick=this.handleClick,a.default.createElement(C,ee)}}]),P}(a.default.PureComponent),$=function(){var P=this;this.scrollTo=function(te,F){O.scrollTo(te,t({},P.state,F))},this.handleClick=function(te){P.props.onClick&&P.props.onClick(te),te.stopPropagation&&te.stopPropagation(),te.preventDefault&&te.preventDefault(),P.scrollTo(P.props.to,P.props)},this.spyHandler=function(te,F){var Q=P.getScrollSpyContainer();if(!(y.default.isMounted()&&!y.default.isInitialized())){var ee=P.props.horizontal,G=P.props.to,ge=null,ce=void 0,Re=void 0;if(ee){var J=0,ye=0,K=0;if(Q.getBoundingClientRect){var be=Q.getBoundingClientRect();K=be.left}if(!ge||P.props.isDynamic){if(ge=O.get(G),!ge)return;var A=ge.getBoundingClientRect();J=A.left-K+te,ye=J+A.width}var ie=te-P.props.offset;ce=ie>=Math.floor(J)&&ie<Math.floor(ye),Re=ie<Math.floor(J)||ie>=Math.floor(ye)}else{var Ce=0,Se=0,ve=0;if(Q.getBoundingClientRect){var Ze=Q.getBoundingClientRect();ve=Ze.top}if(!ge||P.props.isDynamic){if(ge=O.get(G),!ge)return;var Fe=ge.getBoundingClientRect();Ce=Fe.top-ve+F,Se=Ce+Fe.height}var Et=F-P.props.offset;ce=Et>=Math.floor(Ce)&&Et<Math.floor(Se),Re=Et<Math.floor(Ce)||Et>=Math.floor(Se)}var Be=O.getActiveLink();if(Re){if(G===Be&&O.setActiveLink(void 0),P.props.hashSpy&&y.default.getHash()===G){var ft=P.props.saveHashHistory,ht=ft===void 0?!1:ft;y.default.changeHash("",ht)}P.props.spy&&P.state.active&&(P.setState({active:!1}),P.props.onSetInactive&&P.props.onSetInactive(G,ge))}if(ce&&(Be!==G||P.state.active===!1)){O.setActiveLink(G);var $t=P.props.saveHashHistory,At=$t===void 0?!1:$t;P.props.hashSpy&&y.default.changeHash(G,At),P.props.spy&&(P.setState({active:!0}),P.props.onSetActive&&P.props.onSetActive(G,ge))}}}};return L.propTypes=M,L.defaultProps={offset:0},L},Cu}var d1;function Q6(){if(d1)return ju;d1=1,Object.defineProperty(ju,"__esModule",{value:!0});var t=Qi(),s=c(t),o=o0(),a=c(o);function c(_){return _&&_.__esModule?_:{default:_}}function u(_,g){if(!(_ instanceof g))throw new TypeError("Cannot call a class as a function")}function f(_,g){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:_}function p(_,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);_.prototype=Object.create(g&&g.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(_,g):_.__proto__=g)}var h=function(_){p(g,_);function g(){var y,x,w,S;u(this,g);for(var T=arguments.length,M=Array(T),C=0;C<T;C++)M[C]=arguments[C];return S=(x=(w=f(this,(y=g.__proto__||Object.getPrototypeOf(g)).call.apply(y,[this].concat(M))),w),w.render=function(){return s.default.createElement("a",w.props,w.props.children)},x),f(w,S)}return g}(s.default.Component);return ju.default=(0,a.default)(h),ju}var Ou={},f1;function G6(){if(f1)return Ou;f1=1,Object.defineProperty(Ou,"__esModule",{value:!0});var t=function(){function g(y,x){for(var w=0;w<x.length;w++){var S=x[w];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(y,S.key,S)}}return function(y,x,w){return x&&g(y.prototype,x),w&&g(y,w),y}}(),s=Qi(),o=u(s),a=o0(),c=u(a);function u(g){return g&&g.__esModule?g:{default:g}}function f(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")}function p(g,y){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:g}function h(g,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);g.prototype=Object.create(y&&y.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(g,y):g.__proto__=y)}var _=function(g){h(y,g);function y(){return f(this,y),p(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return t(y,[{key:"render",value:function(){return o.default.createElement("button",this.props,this.props.children)}}]),y}(o.default.Component);return Ou.default=(0,c.default)(_),Ou}var Bu={},zu={},h1;function $2(){if(h1)return zu;h1=1,Object.defineProperty(zu,"__esModule",{value:!0});var t=Object.assign||function(w){for(var S=1;S<arguments.length;S++){var T=arguments[S];for(var M in T)Object.prototype.hasOwnProperty.call(T,M)&&(w[M]=T[M])}return w},s=function(){function w(S,T){for(var M=0;M<T.length;M++){var C=T[M];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(S,C.key,C)}}return function(S,T,M){return T&&w(S.prototype,T),M&&w(S,M),S}}(),o=Qi(),a=_(o),c=vd();_(c);var u=Cd(),f=_(u),p=Td(),h=_(p);function _(w){return w&&w.__esModule?w:{default:w}}function g(w,S){if(!(w instanceof S))throw new TypeError("Cannot call a class as a function")}function y(w,S){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:w}function x(w,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);w.prototype=Object.create(S&&S.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(w,S):w.__proto__=S)}return zu.default=function(w){var S=function(T){x(M,T);function M(C){g(this,M);var z=y(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,C));return z.childBindings={domNode:null},z}return s(M,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(z){this.props.name!==z.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;f.default.unregister(this.props.name)}},{key:"registerElems",value:function(z){f.default.register(z,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(w,t({},this.props,{parentBindings:this.childBindings}))}}]),M}(a.default.Component);return S.propTypes={name:h.default.string,id:h.default.string},S},zu}var m1;function K6(){if(m1)return Bu;m1=1,Object.defineProperty(Bu,"__esModule",{value:!0});var t=Object.assign||function(w){for(var S=1;S<arguments.length;S++){var T=arguments[S];for(var M in T)Object.prototype.hasOwnProperty.call(T,M)&&(w[M]=T[M])}return w},s=function(){function w(S,T){for(var M=0;M<T.length;M++){var C=T[M];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(S,C.key,C)}}return function(S,T,M){return T&&w(S.prototype,T),M&&w(S,M),S}}(),o=Qi(),a=h(o),c=$2(),u=h(c),f=Td(),p=h(f);function h(w){return w&&w.__esModule?w:{default:w}}function _(w,S){if(!(w instanceof S))throw new TypeError("Cannot call a class as a function")}function g(w,S){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:w}function y(w,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);w.prototype=Object.create(S&&S.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(w,S):w.__proto__=S)}var x=function(w){y(S,w);function S(){return _(this,S),g(this,(S.__proto__||Object.getPrototypeOf(S)).apply(this,arguments))}return s(S,[{key:"render",value:function(){var M=this,C=t({},this.props);return delete C.name,C.parentBindings&&delete C.parentBindings,a.default.createElement("div",t({},C,{ref:function(O){M.props.parentBindings.domNode=O}}),this.props.children)}}]),S}(a.default.Component);return x.propTypes={name:p.default.string,id:p.default.string},Bu.default=(0,u.default)(x),Bu}var Ph,p1;function Z6(){if(p1)return Ph;p1=1;var t=Object.assign||function(x){for(var w=1;w<arguments.length;w++){var S=arguments[w];for(var T in S)Object.prototype.hasOwnProperty.call(S,T)&&(x[T]=S[T])}return x},s=function(){function x(w,S){for(var T=0;T<S.length;T++){var M=S[T];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(w,M.key,M)}}return function(w,S,T){return S&&x(w.prototype,S),T&&x(w,T),w}}();function o(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")}function a(x,w){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:x}function c(x,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);x.prototype=Object.create(w&&w.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(x,w):x.__proto__=w)}var u=Qi();vd(),jd();var f=s0(),p=Cd(),h=Td(),_=z2(),g={to:h.string.isRequired,containerId:h.string,container:h.object,activeClass:h.string,spy:h.bool,smooth:h.oneOfType([h.bool,h.string]),offset:h.number,delay:h.number,isDynamic:h.bool,onClick:h.func,duration:h.oneOfType([h.number,h.func]),absolute:h.bool,onSetActive:h.func,onSetInactive:h.func,ignoreCancelEvents:h.bool,hashSpy:h.bool,spyThrottle:h.number},y={Scroll:function(w,S){console.warn("Helpers.Scroll is deprecated since v1.7.0");var T=S||p,M=function(z){c(O,z);function O(L){o(this,O);var $=a(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,L));return C.call($),$.state={active:!1},$}return s(O,[{key:"getScrollSpyContainer",value:function(){var $=this.props.containerId,W=this.props.container;return $?document.getElementById($):W&&W.nodeType?W:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var $=this.getScrollSpyContainer();f.isMounted($)||f.mount($,this.props.spyThrottle),this.props.hashSpy&&(_.isMounted()||_.mount(T),_.mapContainer(this.props.to,$)),this.props.spy&&f.addStateHandler(this.stateHandler),f.addSpyHandler(this.spyHandler,$),this.setState({container:$})}}},{key:"componentWillUnmount",value:function(){f.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var $="";this.state&&this.state.active?$=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():$=this.props.className;var W=t({},this.props);for(var P in g)W.hasOwnProperty(P)&&delete W[P];return W.className=$,W.onClick=this.handleClick,u.createElement(w,W)}}]),O}(u.Component),C=function(){var O=this;this.scrollTo=function(L,$){T.scrollTo(L,t({},O.state,$))},this.handleClick=function(L){O.props.onClick&&O.props.onClick(L),L.stopPropagation&&L.stopPropagation(),L.preventDefault&&L.preventDefault(),O.scrollTo(O.props.to,O.props)},this.stateHandler=function(){T.getActiveLink()!==O.props.to&&(O.state!==null&&O.state.active&&O.props.onSetInactive&&O.props.onSetInactive(),O.setState({active:!1}))},this.spyHandler=function(L){var $=O.getScrollSpyContainer();if(!(_.isMounted()&&!_.isInitialized())){var W=O.props.to,P=null,te=0,F=0,Q=0;if($.getBoundingClientRect){var ee=$.getBoundingClientRect();Q=ee.top}if(!P||O.props.isDynamic){if(P=T.get(W),!P)return;var G=P.getBoundingClientRect();te=G.top-Q+L,F=te+G.height}var ge=L-O.props.offset,ce=ge>=Math.floor(te)&&ge<Math.floor(F),Re=ge<Math.floor(te)||ge>=Math.floor(F),J=T.getActiveLink();if(Re)return W===J&&T.setActiveLink(void 0),O.props.hashSpy&&_.getHash()===W&&_.changeHash(),O.props.spy&&O.state.active&&(O.setState({active:!1}),O.props.onSetInactive&&O.props.onSetInactive()),f.updateStates();if(ce&&J!==W)return T.setActiveLink(W),O.props.hashSpy&&_.changeHash(W),O.props.spy&&(O.setState({active:!0}),O.props.onSetActive&&O.props.onSetActive(W)),f.updateStates()}}};return M.propTypes=g,M.defaultProps={offset:0},M},Element:function(w){console.warn("Helpers.Element is deprecated since v1.7.0");var S=function(T){c(M,T);function M(C){o(this,M);var z=a(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,C));return z.childBindings={domNode:null},z}return s(M,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(z){this.props.name!==z.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;p.unregister(this.props.name)}},{key:"registerElems",value:function(z){p.register(z,this.childBindings.domNode)}},{key:"render",value:function(){return u.createElement(w,t({},this.props,{parentBindings:this.childBindings}))}}]),M}(u.Component);return S.propTypes={name:h.string,id:h.string},S}};return Ph=y,Ph}var _1;function J6(){if(_1)return an;_1=1,Object.defineProperty(an,"__esModule",{value:!0}),an.Helpers=an.ScrollElement=an.ScrollLink=an.animateScroll=an.scrollSpy=an.Events=an.scroller=an.Element=an.Button=an.Link=void 0;var t=Q6(),s=L(t),o=G6(),a=L(o),c=K6(),u=L(c),f=Cd(),p=L(f),h=i0(),_=L(h),g=s0(),y=L(g),x=B2(),w=L(x),S=o0(),T=L(S),M=$2(),C=L(M),z=Z6(),O=L(z);function L($){return $&&$.__esModule?$:{default:$}}return an.Link=s.default,an.Button=a.default,an.Element=u.default,an.scroller=p.default,an.Events=_.default,an.scrollSpy=y.default,an.animateScroll=w.default,an.ScrollLink=T.default,an.ScrollElement=C.default,an.Helpers=O.default,an.default={Link:s.default,Button:a.default,Element:u.default,scroller:p.default,Events:_.default,scrollSpy:y.default,animateScroll:w.default,ScrollLink:T.default,ScrollElement:C.default,Helpers:O.default},an}var fd=J6();const e3=()=>r.jsx("footer",{className:"border-t border-white/5 bg-[#060d1a]",children:r.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-10 py-10",children:[r.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-8",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-2xl font-bold gradient-text mb-2",style:{fontFamily:"Fredoka, sans-serif"},children:"Vivek Verma"}),r.jsx("p",{className:"text-gray-500 text-sm leading-relaxed max-w-xs",children:"Full Stack Developer building impactful web applications with the MERN stack. Open to collaboration and opportunities."})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xs text-gray-500 uppercase tracking-widest mb-4",children:"Quick Links"}),r.jsx("ul",{className:"space-y-2",children:["home","about","skills","experience","projects","contact"].map(t=>r.jsx("li",{children:r.jsx(fd.Link,{to:t,smooth:!0,duration:500,offset:-70,className:"text-gray-400 hover:text-yellow-400 text-sm capitalize transition-colors cursor-pointer",children:t})},t))})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xs text-gray-500 uppercase tracking-widest mb-4",children:"Connect"}),r.jsx("div",{className:"flex flex-col gap-3",children:[{icon:r.jsx(gr,{size:16}),label:"verma-vivek-923",href:"https://github.com/verma-vivek-923"},{icon:r.jsx(Jm,{size:16}),label:"vivek-verma-v022003",href:"https://www.linkedin.com/in/vivek-verma-v022003"},{icon:r.jsx(Zm,{size:16}),label:"verma.vivek923",href:"https://instagram.com/verma.vivek923"}].map(t=>r.jsxs("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors",children:[t.icon," ",t.label]},t.label))})]})]}),r.jsxs("div",{className:"border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600",children:[r.jsx("span",{children:"© 2025 Vivek Verma. All rights reserved."}),r.jsxs("span",{className:"flex items-center gap-1",children:["Made with ",r.jsx(L2,{className:"text-red-500 mx-1",size:12})," in Indore, India"]})]})]})}),a0="/Portfolio_Vivek/assets/Photo-DmrE1QSK.avif",_m="/Portfolio_Vivek/assets/Vivek_resume-DfO4YIaE.pdf";function t3(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"},child:[]},{tag:"path",attr:{d:"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"},child:[]}]})(t)}function n3(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z"},child:[]},{tag:"path",attr:{d:"m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"},child:[]}]})(t)}function s3(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"},child:[]}]})(t)}function i3(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"},child:[]}]})(t)}const r0=b.createContext({});function l0(t){const s=b.useRef(null);return s.current===null&&(s.current=t()),s.current}const c0=typeof window<"u",P2=c0?b.useLayoutEffect:b.useEffect,Ed=b.createContext(null);function u0(t,s){t.indexOf(s)===-1&&t.push(s)}function d0(t,s){const o=t.indexOf(s);o>-1&&t.splice(o,1)}const Xi=(t,s,o)=>o>s?s:o<t?t:o;let f0=()=>{};const qi={},H2=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function I2(t){return typeof t=="object"&&t!==null}const V2=t=>/^0[^.\s]+$/u.test(t);function h0(t){let s;return()=>(s===void 0&&(s=t()),s)}const Ws=t=>t,o3=(t,s)=>o=>s(t(o)),oc=(...t)=>t.reduce(o3),Xl=(t,s,o)=>{const a=s-t;return a===0?1:(o-t)/a};class m0{constructor(){this.subscriptions=[]}add(s){return u0(this.subscriptions,s),()=>d0(this.subscriptions,s)}notify(s,o,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](s,o,a);else for(let u=0;u<c;u++){const f=this.subscriptions[u];f&&f(s,o,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const wi=t=>t*1e3,Si=t=>t/1e3;function U2(t,s){return s?t*(1e3/s):0}const Y2=(t,s,o)=>(((1-3*o+3*s)*t+(3*o-6*s))*t+3*s)*t,a3=1e-7,r3=12;function l3(t,s,o,a,c){let u,f,p=0;do f=s+(o-s)/2,u=Y2(f,a,c)-t,u>0?o=f:s=f;while(Math.abs(u)>a3&&++p<r3);return f}function ac(t,s,o,a){if(t===s&&o===a)return Ws;const c=u=>l3(u,0,1,t,o);return u=>u===0||u===1?u:Y2(c(u),s,a)}const W2=t=>s=>s<=.5?t(2*s)/2:(2-t(2*(1-s)))/2,F2=t=>s=>1-t(1-s),X2=ac(.33,1.53,.69,.99),p0=F2(X2),q2=W2(p0),Q2=t=>(t*=2)<1?.5*p0(t):.5*(2-Math.pow(2,-10*(t-1))),_0=t=>1-Math.sin(Math.acos(t)),G2=F2(_0),K2=W2(_0),c3=ac(.42,0,1,1),u3=ac(0,0,.58,1),Z2=ac(.42,0,.58,1),d3=t=>Array.isArray(t)&&typeof t[0]!="number",J2=t=>Array.isArray(t)&&typeof t[0]=="number",f3={linear:Ws,easeIn:c3,easeInOut:Z2,easeOut:u3,circIn:_0,circInOut:K2,circOut:G2,backIn:p0,backInOut:q2,backOut:X2,anticipate:Q2},h3=t=>typeof t=="string",g1=t=>{if(J2(t)){f0(t.length===4);const[s,o,a,c]=t;return ac(s,o,a,c)}else if(h3(t))return f3[t];return t},$u=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function m3(t,s){let o=new Set,a=new Set,c=!1,u=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(g){f.has(g)&&(_.schedule(g),t()),g(p)}const _={schedule:(g,y=!1,x=!1)=>{const S=x&&c?o:a;return y&&f.add(g),S.has(g)||S.add(g),g},cancel:g=>{a.delete(g),f.delete(g)},process:g=>{if(p=g,c){u=!0;return}c=!0,[o,a]=[a,o],o.forEach(h),o.clear(),c=!1,u&&(u=!1,_.process(g))}};return _}const p3=40;function ex(t,s){let o=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>o=!0,f=$u.reduce((O,L)=>(O[L]=m3(u),O),{}),{setup:p,read:h,resolveKeyframes:_,preUpdate:g,update:y,preRender:x,render:w,postRender:S}=f,T=()=>{const O=qi.useManualTiming?c.timestamp:performance.now();o=!1,qi.useManualTiming||(c.delta=a?1e3/60:Math.max(Math.min(O-c.timestamp,p3),1)),c.timestamp=O,c.isProcessing=!0,p.process(c),h.process(c),_.process(c),g.process(c),y.process(c),x.process(c),w.process(c),S.process(c),c.isProcessing=!1,o&&s&&(a=!1,t(T))},M=()=>{o=!0,a=!0,c.isProcessing||t(T)};return{schedule:$u.reduce((O,L)=>{const $=f[L];return O[L]=(W,P=!1,te=!1)=>(o||M(),$.schedule(W,P,te)),O},{}),cancel:O=>{for(let L=0;L<$u.length;L++)f[$u[L]].cancel(O)},state:c,steps:f}}const{schedule:rn,cancel:Lo,state:Xn,steps:Hh}=ex(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ws,!0);let id;function _3(){id=void 0}const ms={now:()=>(id===void 0&&ms.set(Xn.isProcessing||qi.useManualTiming?Xn.timestamp:performance.now()),id),set:t=>{id=t,queueMicrotask(_3)}},tx=t=>s=>typeof s=="string"&&s.startsWith(t),g0=tx("--"),g3=tx("var(--"),y0=t=>g3(t)?y3.test(t.split("/*")[0].trim()):!1,y3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,wr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ql={...wr,transform:t=>Xi(0,1,t)},Pu={...wr,default:1},Pl=t=>Math.round(t*1e5)/1e5,x0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function x3(t){return t==null}const b3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,b0=(t,s)=>o=>!!(typeof o=="string"&&b3.test(o)&&o.startsWith(t)||s&&!x3(o)&&Object.prototype.hasOwnProperty.call(o,s)),nx=(t,s,o)=>a=>{if(typeof a!="string")return a;const[c,u,f,p]=a.match(x0);return{[t]:parseFloat(c),[s]:parseFloat(u),[o]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},v3=t=>Xi(0,255,t),Ih={...wr,transform:t=>Math.round(v3(t))},_a={test:b0("rgb","red"),parse:nx("red","green","blue"),transform:({red:t,green:s,blue:o,alpha:a=1})=>"rgba("+Ih.transform(t)+", "+Ih.transform(s)+", "+Ih.transform(o)+", "+Pl(ql.transform(a))+")"};function w3(t){let s="",o="",a="",c="";return t.length>5?(s=t.substring(1,3),o=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(s=t.substring(1,2),o=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),s+=s,o+=o,a+=a,c+=c),{red:parseInt(s,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const gm={test:b0("#"),parse:w3,transform:_a.transform},rc=t=>({test:s=>typeof s=="string"&&s.endsWith(t)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${t}`}),No=rc("deg"),ki=rc("%"),st=rc("px"),S3=rc("vh"),k3=rc("vw"),y1={...ki,parse:t=>ki.parse(t)/100,transform:t=>ki.transform(t*100)},ur={test:b0("hsl","hue"),parse:nx("hue","saturation","lightness"),transform:({hue:t,saturation:s,lightness:o,alpha:a=1})=>"hsla("+Math.round(t)+", "+ki.transform(Pl(s))+", "+ki.transform(Pl(o))+", "+Pl(ql.transform(a))+")"},An={test:t=>_a.test(t)||gm.test(t)||ur.test(t),parse:t=>_a.test(t)?_a.parse(t):ur.test(t)?ur.parse(t):gm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?_a.transform(t):ur.transform(t),getAnimatableNone:t=>{const s=An.parse(t);return s.alpha=0,An.transform(s)}},j3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function C3(t){var s,o;return isNaN(t)&&typeof t=="string"&&(((s=t.match(x0))==null?void 0:s.length)||0)+(((o=t.match(j3))==null?void 0:o.length)||0)>0}const sx="number",ix="color",T3="var",E3="var(",x1="${}",M3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ql(t){const s=t.toString(),o=[],a={color:[],number:[],var:[]},c=[];let u=0;const p=s.replace(M3,h=>(An.test(h)?(a.color.push(u),c.push(ix),o.push(An.parse(h))):h.startsWith(E3)?(a.var.push(u),c.push(T3),o.push(h)):(a.number.push(u),c.push(sx),o.push(parseFloat(h))),++u,x1)).split(x1);return{values:o,split:p,indexes:a,types:c}}function ox(t){return Ql(t).values}function ax(t){const{split:s,types:o}=Ql(t),a=s.length;return c=>{let u="";for(let f=0;f<a;f++)if(u+=s[f],c[f]!==void 0){const p=o[f];p===sx?u+=Pl(c[f]):p===ix?u+=An.transform(c[f]):u+=c[f]}return u}}const R3=t=>typeof t=="number"?0:An.test(t)?An.getAnimatableNone(t):t;function N3(t){const s=ox(t);return ax(t)(s.map(R3))}const Oo={test:C3,parse:ox,createTransformer:ax,getAnimatableNone:N3};function Vh(t,s,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(s-t)*6*o:o<1/2?s:o<2/3?t+(s-t)*(2/3-o)*6:t}function A3({hue:t,saturation:s,lightness:o,alpha:a}){t/=360,s/=100,o/=100;let c=0,u=0,f=0;if(!s)c=u=f=o;else{const p=o<.5?o*(1+s):o+s-o*s,h=2*o-p;c=Vh(h,p,t+1/3),u=Vh(h,p,t),f=Vh(h,p,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(f*255),alpha:a}}function hd(t,s){return o=>o>0?s:t}const _n=(t,s,o)=>t+(s-t)*o,Uh=(t,s,o)=>{const a=t*t,c=o*(s*s-a)+a;return c<0?0:Math.sqrt(c)},D3=[gm,_a,ur],L3=t=>D3.find(s=>s.test(t));function b1(t){const s=L3(t);if(!s)return!1;let o=s.parse(t);return s===ur&&(o=A3(o)),o}const v1=(t,s)=>{const o=b1(t),a=b1(s);if(!o||!a)return hd(t,s);const c={...o};return u=>(c.red=Uh(o.red,a.red,u),c.green=Uh(o.green,a.green,u),c.blue=Uh(o.blue,a.blue,u),c.alpha=_n(o.alpha,a.alpha,u),_a.transform(c))},ym=new Set(["none","hidden"]);function O3(t,s){return ym.has(t)?o=>o<=0?t:s:o=>o>=1?s:t}function B3(t,s){return o=>_n(t,s,o)}function v0(t){return typeof t=="number"?B3:typeof t=="string"?y0(t)?hd:An.test(t)?v1:P3:Array.isArray(t)?rx:typeof t=="object"?An.test(t)?v1:z3:hd}function rx(t,s){const o=[...t],a=o.length,c=t.map((u,f)=>v0(u)(u,s[f]));return u=>{for(let f=0;f<a;f++)o[f]=c[f](u);return o}}function z3(t,s){const o={...t,...s},a={};for(const c in o)t[c]!==void 0&&s[c]!==void 0&&(a[c]=v0(t[c])(t[c],s[c]));return c=>{for(const u in a)o[u]=a[u](c);return o}}function $3(t,s){const o=[],a={color:0,var:0,number:0};for(let c=0;c<s.values.length;c++){const u=s.types[c],f=t.indexes[u][a[u]],p=t.values[f]??0;o[c]=p,a[u]++}return o}const P3=(t,s)=>{const o=Oo.createTransformer(s),a=Ql(t),c=Ql(s);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?ym.has(t)&&!c.values.length||ym.has(s)&&!a.values.length?O3(t,s):oc(rx($3(a,c),c.values),o):hd(t,s)};function lx(t,s,o){return typeof t=="number"&&typeof s=="number"&&typeof o=="number"?_n(t,s,o):v0(t)(t,s)}const H3=t=>{const s=({timestamp:o})=>t(o);return{start:(o=!0)=>rn.update(s,o),stop:()=>Lo(s),now:()=>Xn.isProcessing?Xn.timestamp:ms.now()}},cx=(t,s,o=10)=>{let a="";const c=Math.max(Math.round(s/o),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},md=2e4;function w0(t){let s=0;const o=50;let a=t.next(s);for(;!a.done&&s<md;)s+=o,a=t.next(s);return s>=md?1/0:s}function I3(t,s=100,o){const a=o({...t,keyframes:[0,s]}),c=Math.min(w0(a),md);return{type:"keyframes",ease:u=>a.next(c*u).value/s,duration:Si(c)}}const V3=5;function ux(t,s,o){const a=Math.max(s-V3,0);return U2(o-t(a),s-a)}const Sn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},w1=.001;function U3({duration:t=Sn.duration,bounce:s=Sn.bounce,velocity:o=Sn.velocity,mass:a=Sn.mass}){let c,u,f=1-s;f=Xi(Sn.minDamping,Sn.maxDamping,f),t=Xi(Sn.minDuration,Sn.maxDuration,Si(t)),f<1?(c=_=>{const g=_*f,y=g*t,x=g-o,w=xm(_,f),S=Math.exp(-y);return w1-x/w*S},u=_=>{const y=_*f*t,x=y*o+o,w=Math.pow(f,2)*Math.pow(_,2)*t,S=Math.exp(-y),T=xm(Math.pow(_,2),f);return(-c(_)+w1>0?-1:1)*((x-w)*S)/T}):(c=_=>{const g=Math.exp(-_*t),y=(_-o)*t+1;return-.001+g*y},u=_=>{const g=Math.exp(-_*t),y=(o-_)*(t*t);return g*y});const p=5/t,h=W3(c,u,p);if(t=wi(t),isNaN(h))return{stiffness:Sn.stiffness,damping:Sn.damping,duration:t};{const _=Math.pow(h,2)*a;return{stiffness:_,damping:f*2*Math.sqrt(a*_),duration:t}}}const Y3=12;function W3(t,s,o){let a=o;for(let c=1;c<Y3;c++)a=a-t(a)/s(a);return a}function xm(t,s){return t*Math.sqrt(1-s*s)}const F3=["duration","bounce"],X3=["stiffness","damping","mass"];function S1(t,s){return s.some(o=>t[o]!==void 0)}function q3(t){let s={velocity:Sn.velocity,stiffness:Sn.stiffness,damping:Sn.damping,mass:Sn.mass,isResolvedFromDuration:!1,...t};if(!S1(t,X3)&&S1(t,F3))if(t.visualDuration){const o=t.visualDuration,a=2*Math.PI/(o*1.2),c=a*a,u=2*Xi(.05,1,1-(t.bounce||0))*Math.sqrt(c);s={...s,mass:Sn.mass,stiffness:c,damping:u}}else{const o=U3(t);s={...s,...o,mass:Sn.mass},s.isResolvedFromDuration=!0}return s}function pd(t=Sn.visualDuration,s=Sn.bounce){const o=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:s}:t;let{restSpeed:a,restDelta:c}=o;const u=o.keyframes[0],f=o.keyframes[o.keyframes.length-1],p={done:!1,value:u},{stiffness:h,damping:_,mass:g,duration:y,velocity:x,isResolvedFromDuration:w}=q3({...o,velocity:-Si(o.velocity||0)}),S=x||0,T=_/(2*Math.sqrt(h*g)),M=f-u,C=Si(Math.sqrt(h/g)),z=Math.abs(M)<5;a||(a=z?Sn.restSpeed.granular:Sn.restSpeed.default),c||(c=z?Sn.restDelta.granular:Sn.restDelta.default);let O;if(T<1){const $=xm(C,T);O=W=>{const P=Math.exp(-T*C*W);return f-P*((S+T*C*M)/$*Math.sin($*W)+M*Math.cos($*W))}}else if(T===1)O=$=>f-Math.exp(-C*$)*(M+(S+C*M)*$);else{const $=C*Math.sqrt(T*T-1);O=W=>{const P=Math.exp(-T*C*W),te=Math.min($*W,300);return f-P*((S+T*C*M)*Math.sinh(te)+$*M*Math.cosh(te))/$}}const L={calculatedDuration:w&&y||null,next:$=>{const W=O($);if(w)p.done=$>=y;else{let P=$===0?S:0;T<1&&(P=$===0?wi(S):ux(O,$,W));const te=Math.abs(P)<=a,F=Math.abs(f-W)<=c;p.done=te&&F}return p.value=p.done?f:W,p},toString:()=>{const $=Math.min(w0(L),md),W=cx(P=>L.next($*P).value,$,30);return $+"ms "+W},toTransition:()=>{}};return L}pd.applyToOptions=t=>{const s=I3(t,100,pd);return t.ease=s.ease,t.duration=wi(s.duration),t.type="keyframes",t};function bm({keyframes:t,velocity:s=0,power:o=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:f,min:p,max:h,restDelta:_=.5,restSpeed:g}){const y=t[0],x={done:!1,value:y},w=te=>p!==void 0&&te<p||h!==void 0&&te>h,S=te=>p===void 0?h:h===void 0||Math.abs(p-te)<Math.abs(h-te)?p:h;let T=o*s;const M=y+T,C=f===void 0?M:f(M);C!==M&&(T=C-y);const z=te=>-T*Math.exp(-te/a),O=te=>C+z(te),L=te=>{const F=z(te),Q=O(te);x.done=Math.abs(F)<=_,x.value=x.done?C:Q};let $,W;const P=te=>{w(x.value)&&($=te,W=pd({keyframes:[x.value,S(x.value)],velocity:ux(O,te,x.value),damping:c,stiffness:u,restDelta:_,restSpeed:g}))};return P(0),{calculatedDuration:null,next:te=>{let F=!1;return!W&&$===void 0&&(F=!0,L(te),P(te)),$!==void 0&&te>=$?W.next(te-$):(!F&&L(te),x)}}}function Q3(t,s,o){const a=[],c=o||qi.mix||lx,u=t.length-1;for(let f=0;f<u;f++){let p=c(t[f],t[f+1]);if(s){const h=Array.isArray(s)?s[f]||Ws:s;p=oc(h,p)}a.push(p)}return a}function G3(t,s,{clamp:o=!0,ease:a,mixer:c}={}){const u=t.length;if(f0(u===s.length),u===1)return()=>s[0];if(u===2&&s[0]===s[1])return()=>s[1];const f=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),s=[...s].reverse());const p=Q3(s,a,c),h=p.length,_=g=>{if(f&&g<t[0])return s[0];let y=0;if(h>1)for(;y<t.length-2&&!(g<t[y+1]);y++);const x=Xl(t[y],t[y+1],g);return p[y](x)};return o?g=>_(Xi(t[0],t[u-1],g)):_}function K3(t,s){const o=t[t.length-1];for(let a=1;a<=s;a++){const c=Xl(0,s,a);t.push(_n(o,1,c))}}function Z3(t){const s=[0];return K3(s,t.length-1),s}function J3(t,s){return t.map(o=>o*s)}function ew(t,s){return t.map(()=>s||Z2).splice(0,t.length-1)}function Hl({duration:t=300,keyframes:s,times:o,ease:a="easeInOut"}){const c=d3(a)?a.map(g1):g1(a),u={done:!1,value:s[0]},f=J3(o&&o.length===s.length?o:Z3(s),t),p=G3(f,s,{ease:Array.isArray(c)?c:ew(s,c)});return{calculatedDuration:t,next:h=>(u.value=p(h),u.done=h>=t,u)}}const tw=t=>t!==null;function S0(t,{repeat:s,repeatType:o="loop"},a,c=1){const u=t.filter(tw),p=c<0||s&&o!=="loop"&&s%2===1?0:u.length-1;return!p||a===void 0?u[p]:a}const nw={decay:bm,inertia:bm,tween:Hl,keyframes:Hl,spring:pd};function dx(t){typeof t.type=="string"&&(t.type=nw[t.type])}class k0{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,o){return this.finished.then(s,o)}}const sw=t=>t/100;class j0 extends k0{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,c;const{motionValue:o}=this.options;o&&o.updatedAt!==ms.now()&&this.tick(ms.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;dx(s);const{type:o=Hl,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:f=0}=s;let{keyframes:p}=s;const h=o||Hl;h!==Hl&&typeof p[0]!="number"&&(this.mixKeyframes=oc(sw,lx(p[0],p[1])),p=[0,100]);const _=h({...s,keyframes:p});u==="mirror"&&(this.mirroredGenerator=h({...s,keyframes:[...p].reverse(),velocity:-f})),_.calculatedDuration===null&&(_.calculatedDuration=w0(_));const{calculatedDuration:g}=_;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=_}updateTime(s){const o=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(s,o=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return a.next(0);const{delay:_=0,keyframes:g,repeat:y,repeatType:x,repeatDelay:w,type:S,onUpdate:T,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-c/this.speed,this.startTime)),o?this.currentTime=s:this.updateTime(s);const C=this.currentTime-_*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?C<0:C>c;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let O=this.currentTime,L=a;if(y){const te=Math.min(this.currentTime,c)/p;let F=Math.floor(te),Q=te%1;!Q&&te>=1&&(Q=1),Q===1&&F--,F=Math.min(F,y+1),!!(F%2)&&(x==="reverse"?(Q=1-Q,w&&(Q-=w/p)):x==="mirror"&&(L=f)),O=Xi(0,1,Q)*p}const $=z?{done:!1,value:g[0]}:L.next(O);u&&($.value=u($.value));let{done:W}=$;!z&&h!==null&&(W=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return P&&S!==bm&&($.value=S0(g,this.options,M,this.speed)),T&&T($.value),P&&this.finish(),$}then(s,o){return this.finished.then(s,o)}get duration(){return Si(this.calculatedDuration)}get time(){return Si(this.currentTime)}set time(s){var o;s=wi(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),(o=this.driver)==null||o.start(!1)}get speed(){return this.playbackSpeed}set speed(s){this.updateTime(ms.now());const o=this.playbackSpeed!==s;this.playbackSpeed=s,o&&(this.time=Si(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:s=H3,startTime:o}=this.options;this.driver||(this.driver=s(f=>this.tick(f))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=o??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ms.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var s,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(s=this.options).onComplete)==null||o.call(s)}cancel(){var s,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(s=this.options).onCancel)==null||o.call(s)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),s.observe(this)}}function iw(t){for(let s=1;s<t.length;s++)t[s]??(t[s]=t[s-1])}const ga=t=>t*180/Math.PI,vm=t=>{const s=ga(Math.atan2(t[1],t[0]));return wm(s)},ow={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:vm,rotateZ:vm,skewX:t=>ga(Math.atan(t[1])),skewY:t=>ga(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},wm=t=>(t=t%360,t<0&&(t+=360),t),k1=vm,j1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),C1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),aw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:j1,scaleY:C1,scale:t=>(j1(t)+C1(t))/2,rotateX:t=>wm(ga(Math.atan2(t[6],t[5]))),rotateY:t=>wm(ga(Math.atan2(-t[2],t[0]))),rotateZ:k1,rotate:k1,skewX:t=>ga(Math.atan(t[4])),skewY:t=>ga(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Sm(t){return t.includes("scale")?1:0}function km(t,s){if(!t||t==="none")return Sm(s);const o=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(o)a=aw,c=o;else{const p=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=ow,c=p}if(!c)return Sm(s);const u=a[s],f=c[1].split(",").map(lw);return typeof u=="function"?u(f):f[u]}const rw=(t,s)=>{const{transform:o="none"}=getComputedStyle(t);return km(o,s)};function lw(t){return parseFloat(t.trim())}const Sr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],kr=new Set(Sr),T1=t=>t===wr||t===st,cw=new Set(["x","y","z"]),uw=Sr.filter(t=>!cw.has(t));function dw(t){const s=[];return uw.forEach(o=>{const a=t.getValue(o);a!==void 0&&(s.push([o,a.get()]),a.set(o.startsWith("scale")?1:0))}),s}const ya={width:({x:t},{paddingLeft:s="0",paddingRight:o="0"})=>t.max-t.min-parseFloat(s)-parseFloat(o),height:({y:t},{paddingTop:s="0",paddingBottom:o="0"})=>t.max-t.min-parseFloat(s)-parseFloat(o),top:(t,{top:s})=>parseFloat(s),left:(t,{left:s})=>parseFloat(s),bottom:({y:t},{top:s})=>parseFloat(s)+(t.max-t.min),right:({x:t},{left:s})=>parseFloat(s)+(t.max-t.min),x:(t,{transform:s})=>km(s,"x"),y:(t,{transform:s})=>km(s,"y")};ya.translateX=ya.x;ya.translateY=ya.y;const xa=new Set;let jm=!1,Cm=!1,Tm=!1;function fx(){if(Cm){const t=Array.from(xa).filter(a=>a.needsMeasurement),s=new Set(t.map(a=>a.element)),o=new Map;s.forEach(a=>{const c=dw(a);c.length&&(o.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),s.forEach(a=>{a.render();const c=o.get(a);c&&c.forEach(([u,f])=>{var p;(p=a.getValue(u))==null||p.set(f)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Cm=!1,jm=!1,xa.forEach(t=>t.complete(Tm)),xa.clear()}function hx(){xa.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Cm=!0)})}function fw(){Tm=!0,hx(),fx(),Tm=!1}class C0{constructor(s,o,a,c,u,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=o,this.name=a,this.motionValue=c,this.element=u,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(xa.add(this),jm||(jm=!0,rn.read(hx),rn.resolveKeyframes(fx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:o,element:a,motionValue:c}=this;if(s[0]===null){const u=c==null?void 0:c.get(),f=s[s.length-1];if(u!==void 0)s[0]=u;else if(a&&o){const p=a.readValue(o,f);p!=null&&(s[0]=p)}s[0]===void 0&&(s[0]=f),c&&u===void 0&&c.set(s[0])}iw(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),xa.delete(this)}cancel(){this.state==="scheduled"&&(xa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const hw=t=>t.startsWith("--");function mw(t,s,o){hw(s)?t.style.setProperty(s,o):t.style[s]=o}const pw=h0(()=>window.ScrollTimeline!==void 0),_w={};function gw(t,s){const o=h0(t);return()=>_w[s]??o()}const mx=gw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zl=([t,s,o,a])=>`cubic-bezier(${t}, ${s}, ${o}, ${a})`,E1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zl([0,.65,.55,1]),circOut:zl([.55,0,1,.45]),backIn:zl([.31,.01,.66,-.59]),backOut:zl([.33,1.53,.69,.99])};function px(t,s){if(t)return typeof t=="function"?mx()?cx(t,s):"ease-out":J2(t)?zl(t):Array.isArray(t)?t.map(o=>px(o,s)||E1.easeOut):E1[t]}function yw(t,s,o,{delay:a=0,duration:c=300,repeat:u=0,repeatType:f="loop",ease:p="easeOut",times:h}={},_=void 0){const g={[s]:o};h&&(g.offset=h);const y=px(p,c);Array.isArray(y)&&(g.easing=y);const x={delay:a,duration:c,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:f==="reverse"?"alternate":"normal"};return _&&(x.pseudoElement=_),t.animate(g,x)}function _x(t){return typeof t=="function"&&"applyToOptions"in t}function xw({type:t,...s}){return _x(t)&&mx()?t.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class bw extends k0{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,!s)return;const{element:o,name:a,keyframes:c,pseudoElement:u,allowFlatten:f=!1,finalKeyframe:p,onComplete:h}=s;this.isPseudoElement=!!u,this.allowFlatten=f,this.options=s,f0(typeof s.type!="string");const _=xw(s);this.animation=yw(o,a,c,_,u),_.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=S0(c,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(g):mw(o,a,g),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var s,o;(o=(s=this.animation).finish)==null||o.call(s)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var s,o;this.isPseudoElement||(o=(s=this.animation).commitStyles)==null||o.call(s)}get duration(){var o,a;const s=((a=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:a.call(o).duration)||0;return Si(Number(s))}get time(){return Si(Number(this.animation.currentTime)||0)}set time(s){this.finishedTime=null,this.animation.currentTime=wi(s)}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(s){this.animation.startTime=s}attachTimeline({timeline:s,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,s&&pw()?(this.animation.timeline=s,Ws):o(this)}}const gx={anticipate:Q2,backInOut:q2,circInOut:K2};function vw(t){return t in gx}function ww(t){typeof t.ease=="string"&&vw(t.ease)&&(t.ease=gx[t.ease])}const M1=10;class Sw extends bw{constructor(s){ww(s),dx(s),super(s),s.startTime&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:o,onUpdate:a,onComplete:c,element:u,...f}=this.options;if(!o)return;if(s!==void 0){o.set(s);return}const p=new j0({...f,autoplay:!1}),h=wi(this.finishedTime??this.time);o.setWithVelocity(p.sample(h-M1).value,p.sample(h).value,M1),p.stop()}}const R1=(t,s)=>s==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Oo.test(t)||t==="0")&&!t.startsWith("url("));function kw(t){const s=t[0];if(t.length===1)return!0;for(let o=0;o<t.length;o++)if(t[o]!==s)return!0}function jw(t,s,o,a){const c=t[0];if(c===null)return!1;if(s==="display"||s==="visibility")return!0;const u=t[t.length-1],f=R1(c,s),p=R1(u,s);return!f||!p?!1:kw(t)||(o==="spring"||_x(o))&&a}const Cw=new Set(["opacity","clipPath","filter","transform"]),Tw=h0(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Ew(t){var g;const{motionValue:s,name:o,repeatDelay:a,repeatType:c,damping:u,type:f}=t;if(!(((g=s==null?void 0:s.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:_}=s.owner.getProps();return Tw()&&o&&Cw.has(o)&&(o!=="transform"||!_)&&!h&&!a&&c!=="mirror"&&u!==0&&f!=="inertia"}const Mw=40;class Rw extends k0{constructor({autoplay:s=!0,delay:o=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:f="loop",keyframes:p,name:h,motionValue:_,element:g,...y}){var S;super(),this.stop=()=>{var T,M;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(M=this.keyframeResolver)==null||M.cancel()},this.createdAt=ms.now();const x={autoplay:s,delay:o,type:a,repeat:c,repeatDelay:u,repeatType:f,name:h,motionValue:_,element:g,...y},w=(g==null?void 0:g.KeyframeResolver)||C0;this.keyframeResolver=new w(p,(T,M,C)=>this.onKeyframesResolved(T,M,x,!C),h,_,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(s,o,a,c){this.keyframeResolver=void 0;const{name:u,type:f,velocity:p,delay:h,isHandoff:_,onUpdate:g}=a;this.resolvedAt=ms.now(),jw(s,u,f,p)||((qi.instantAnimations||!h)&&(g==null||g(S0(s,a,o))),s[0]=s[s.length-1],a.duration=0,a.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>Mw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...a,keyframes:s},w=!_&&Ew(x)?new Sw({...x,element:x.motionValue.owner.current}):new j0(x);w.finished.then(()=>this.notifyFinished()).catch(Ws),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(s,o){return this.finished.finally(s).then(()=>{})}get animation(){var s;return this._animation||((s=this.keyframeResolver)==null||s.resume(),fw()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var s;this._animation&&this.animation.cancel(),(s=this.keyframeResolver)==null||s.cancel()}}const Nw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Aw(t){const s=Nw.exec(t);if(!s)return[,];const[,o,a,c]=s;return[`--${o??a}`,c]}function yx(t,s,o=1){const[a,c]=Aw(t);if(!a)return;const u=window.getComputedStyle(s).getPropertyValue(a);if(u){const f=u.trim();return H2(f)?parseFloat(f):f}return y0(c)?yx(c,s,o+1):c}function T0(t,s){return(t==null?void 0:t[s])??(t==null?void 0:t.default)??t}const xx=new Set(["width","height","top","left","right","bottom",...Sr]),Dw={test:t=>t==="auto",parse:t=>t},bx=t=>s=>s.test(t),vx=[wr,st,ki,No,k3,S3,Dw],N1=t=>vx.find(bx(t));function Lw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||V2(t):!0}const Ow=new Set(["brightness","contrast","saturate","opacity"]);function Bw(t){const[s,o]=t.slice(0,-1).split("(");if(s==="drop-shadow")return t;const[a]=o.match(x0)||[];if(!a)return t;const c=o.replace(a,"");let u=Ow.has(s)?1:0;return a!==o&&(u*=100),s+"("+u+c+")"}const zw=/\b([a-z-]*)\(.*?\)/gu,Em={...Oo,getAnimatableNone:t=>{const s=t.match(zw);return s?s.map(Bw).join(" "):t}},A1={...wr,transform:Math.round},$w={rotate:No,rotateX:No,rotateY:No,rotateZ:No,scale:Pu,scaleX:Pu,scaleY:Pu,scaleZ:Pu,skew:No,skewX:No,skewY:No,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:ql,originX:y1,originY:y1,originZ:st},E0={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st,...$w,zIndex:A1,fillOpacity:ql,strokeOpacity:ql,numOctaves:A1},Pw={...E0,color:An,backgroundColor:An,outlineColor:An,fill:An,stroke:An,borderColor:An,borderTopColor:An,borderRightColor:An,borderBottomColor:An,borderLeftColor:An,filter:Em,WebkitFilter:Em},wx=t=>Pw[t];function Sx(t,s){let o=wx(t);return o!==Em&&(o=Oo),o.getAnimatableNone?o.getAnimatableNone(s):void 0}const Hw=new Set(["auto","none","0"]);function Iw(t,s,o){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!Hw.has(u)&&Ql(u).values.length&&(c=t[a]),a++}if(c&&o)for(const u of s)t[u]=Sx(o,c)}class Vw extends C0{constructor(s,o,a,c,u){super(s,o,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:o,name:a}=this;if(!o||!o.current)return;super.readKeyframes();for(let h=0;h<s.length;h++){let _=s[h];if(typeof _=="string"&&(_=_.trim(),y0(_))){const g=yx(_,o.current);g!==void 0&&(s[h]=g),h===s.length-1&&(this.finalKeyframe=_)}}if(this.resolveNoneKeyframes(),!xx.has(a)||s.length!==2)return;const[c,u]=s,f=N1(c),p=N1(u);if(f!==p)if(T1(f)&&T1(p))for(let h=0;h<s.length;h++){const _=s[h];typeof _=="string"&&(s[h]=parseFloat(_))}else ya[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:o}=this,a=[];for(let c=0;c<s.length;c++)(s[c]===null||Lw(s[c]))&&a.push(c);a.length&&Iw(s,a,o)}measureInitialState(){const{element:s,unresolvedKeyframes:o,name:a}=this;if(!s||!s.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ya[a](s.measureViewportBox(),window.getComputedStyle(s.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&s.getValue(a,c).jump(c,!1)}measureEndState(){var p;const{element:s,name:o,unresolvedKeyframes:a}=this;if(!s||!s.current)return;const c=s.getValue(o);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,f=a[u];a[u]=ya[o](s.measureViewportBox(),window.getComputedStyle(s.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([h,_])=>{s.getValue(h).set(_)}),this.resolveNoneKeyframes()}}function Uw(t,s,o){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let a=document;const c=(o==null?void 0:o[t])??a.querySelectorAll(t);return c?Array.from(c):[]}return Array.from(t)}const kx=(t,s)=>s&&typeof t=="number"?s.transform(t):t;function jx(t){return I2(t)&&"offsetHeight"in t}const D1=30,Yw=t=>!isNaN(parseFloat(t));class Ww{constructor(s,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,c=!0)=>{var f,p;const u=ms.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty();c&&((p=this.events.renderRequest)==null||p.notify(this.current))},this.hasAnimated=!1,this.setCurrent(s),this.owner=o.owner}setCurrent(s){this.current=s,this.updatedAt=ms.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=Yw(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,o){this.events[s]||(this.events[s]=new m0);const a=this.events[s].add(o);return s==="change"?()=>{a(),rn.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,o){this.passiveEffect=s,this.stopPassiveEffect=o}set(s,o=!0){!o||!this.passiveEffect?this.updateAndNotify(s,o):this.passiveEffect(s,this.updateAndNotify)}setWithVelocity(s,o,a){this.set(o),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-a}jump(s,o=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var s;(s=this.events.change)==null||s.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=ms.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>D1)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,D1);return U2(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(s){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=s(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var s,o;(s=this.dependents)==null||s.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yr(t,s){return new Ww(t,s)}const{schedule:M0}=ex(queueMicrotask,!1),ni={x:!1,y:!1};function Cx(){return ni.x||ni.y}function Fw(t){return t==="x"||t==="y"?ni[t]?null:(ni[t]=!0,()=>{ni[t]=!1}):ni.x||ni.y?null:(ni.x=ni.y=!0,()=>{ni.x=ni.y=!1})}function Tx(t,s){const o=Uw(t),a=new AbortController,c={passive:!0,...s,signal:a.signal};return[o,c,()=>a.abort()]}function L1(t){return!(t.pointerType==="touch"||Cx())}function Xw(t,s,o={}){const[a,c,u]=Tx(t,o),f=p=>{if(!L1(p))return;const{target:h}=p,_=s(h,p);if(typeof _!="function"||!h)return;const g=y=>{L1(y)&&(_(y),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,c)};return a.forEach(p=>{p.addEventListener("pointerenter",f,c)}),u}const Ex=(t,s)=>s?t===s?!0:Ex(t,s.parentElement):!1,R0=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,qw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Qw(t){return qw.has(t.tagName)||t.tabIndex!==-1}const od=new WeakSet;function O1(t){return s=>{s.key==="Enter"&&t(s)}}function Yh(t,s){t.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const Gw=(t,s)=>{const o=t.currentTarget;if(!o)return;const a=O1(()=>{if(od.has(o))return;Yh(o,"down");const c=O1(()=>{Yh(o,"up")}),u=()=>Yh(o,"cancel");o.addEventListener("keyup",c,s),o.addEventListener("blur",u,s)});o.addEventListener("keydown",a,s),o.addEventListener("blur",()=>o.removeEventListener("keydown",a),s)};function B1(t){return R0(t)&&!Cx()}function Kw(t,s,o={}){const[a,c,u]=Tx(t,o),f=p=>{const h=p.currentTarget;if(!B1(p))return;od.add(h);const _=s(h,p),g=(w,S)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),od.has(h)&&od.delete(h),B1(w)&&typeof _=="function"&&_(w,{success:S})},y=w=>{g(w,h===window||h===document||o.useGlobalTarget||Ex(h,w.target))},x=w=>{g(w,!1)};window.addEventListener("pointerup",y,c),window.addEventListener("pointercancel",x,c)};return a.forEach(p=>{(o.useGlobalTarget?window:p).addEventListener("pointerdown",f,c),jx(p)&&(p.addEventListener("focus",_=>Gw(_,c)),!Qw(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),u}function Mx(t){return I2(t)&&"ownerSVGElement"in t}function Zw(t){return Mx(t)&&t.tagName==="svg"}const es=t=>!!(t&&t.getVelocity),Jw=[...vx,An,Oo],e8=t=>Jw.find(bx(t)),N0=b.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class t8 extends b.Component{getSnapshotBeforeUpdate(s){const o=this.props.childRef.current;if(o&&s.isPresent&&!this.props.isPresent){const a=o.offsetParent,c=jx(a)&&a.offsetWidth||0,u=this.props.sizeRef.current;u.height=o.offsetHeight||0,u.width=o.offsetWidth||0,u.top=o.offsetTop,u.left=o.offsetLeft,u.right=c-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function n8({children:t,isPresent:s,anchorX:o,root:a}){const c=b.useId(),u=b.useRef(null),f=b.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=b.useContext(N0);return b.useInsertionEffect(()=>{const{width:h,height:_,top:g,left:y,right:x}=f.current;if(s||!u.current||!h||!_)return;const w=o==="left"?`left: ${y}`:`right: ${x}`;u.current.dataset.motionPopId=c;const S=document.createElement("style");p&&(S.nonce=p);const T=a??document.head;return T.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${_}px !important;
            ${w}px !important;
            top: ${g}px !important;
          }
        `),()=>{T.removeChild(S),T.contains(S)&&T.removeChild(S)}},[s]),r.jsx(t8,{isPresent:s,childRef:u,sizeRef:f,children:b.cloneElement(t,{ref:u})})}const s8=({children:t,initial:s,isPresent:o,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:f,anchorX:p,root:h})=>{const _=l0(i8),g=b.useId();let y=!0,x=b.useMemo(()=>(y=!1,{id:g,initial:s,isPresent:o,custom:c,onExitComplete:w=>{_.set(w,!0);for(const S of _.values())if(!S)return;a&&a()},register:w=>(_.set(w,!1),()=>_.delete(w))}),[o,_,a]);return u&&y&&(x={...x}),b.useMemo(()=>{_.forEach((w,S)=>_.set(S,!1))},[o]),b.useEffect(()=>{!o&&!_.size&&a&&a()},[o]),f==="popLayout"&&(t=r.jsx(n8,{isPresent:o,anchorX:p,root:h,children:t})),r.jsx(Ed.Provider,{value:x,children:t})};function i8(){return new Map}function Rx(t=!0){const s=b.useContext(Ed);if(s===null)return[!0,null];const{isPresent:o,onExitComplete:a,register:c}=s,u=b.useId();b.useEffect(()=>{if(t)return c(u)},[t]);const f=b.useCallback(()=>t&&a&&a(u),[u,a,t]);return!o&&a?[!1,f]:[!0]}const Hu=t=>t.key||"";function z1(t){const s=[];return b.Children.forEach(t,o=>{b.isValidElement(o)&&s.push(o)}),s}const Nx=({children:t,custom:s,initial:o=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:f=!1,anchorX:p="left",root:h})=>{const[_,g]=Rx(f),y=b.useMemo(()=>z1(t),[t]),x=f&&!_?[]:y.map(Hu),w=b.useRef(!0),S=b.useRef(y),T=l0(()=>new Map),[M,C]=b.useState(y),[z,O]=b.useState(y);P2(()=>{w.current=!1,S.current=y;for(let W=0;W<z.length;W++){const P=Hu(z[W]);x.includes(P)?T.delete(P):T.get(P)!==!0&&T.set(P,!1)}},[z,x.length,x.join("-")]);const L=[];if(y!==M){let W=[...y];for(let P=0;P<z.length;P++){const te=z[P],F=Hu(te);x.includes(F)||(W.splice(P,0,te),L.push(te))}return u==="wait"&&L.length&&(W=L),O(z1(W)),C(y),null}const{forceRender:$}=b.useContext(r0);return r.jsx(r.Fragment,{children:z.map(W=>{const P=Hu(W),te=f&&!_?!1:y===z||x.includes(P),F=()=>{if(T.has(P))T.set(P,!0);else return;let Q=!0;T.forEach(ee=>{ee||(Q=!1)}),Q&&($==null||$(),O(S.current),f&&(g==null||g()),a&&a())};return r.jsx(s8,{isPresent:te,initial:!w.current||o?void 0:!1,custom:s,presenceAffectsLayout:c,mode:u,root:h,onExitComplete:te?void 0:F,anchorX:p,children:W},P)})})},Ax=b.createContext({strict:!1}),$1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},xr={};for(const t in $1)xr[t]={isEnabled:s=>$1[t].some(o=>!!s[o])};function o8(t){for(const s in t)xr[s]={...xr[s],...t[s]}}const a8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _d(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||a8.has(t)}let Dx=t=>!_d(t);function r8(t){typeof t=="function"&&(Dx=s=>s.startsWith("on")?!_d(s):t(s))}try{r8(require("@emotion/is-prop-valid").default)}catch{}function l8(t,s,o){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||(Dx(c)||o===!0&&_d(c)||!s&&!_d(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Md=b.createContext({});function Rd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Gl(t){return typeof t=="string"||Array.isArray(t)}const A0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],D0=["initial",...A0];function Nd(t){return Rd(t.animate)||D0.some(s=>Gl(t[s]))}function Lx(t){return!!(Nd(t)||t.variants)}function c8(t,s){if(Nd(t)){const{initial:o,animate:a}=t;return{initial:o===!1||Gl(o)?o:void 0,animate:Gl(a)?a:void 0}}return t.inherit!==!1?s:{}}function u8(t){const{initial:s,animate:o}=c8(t,b.useContext(Md));return b.useMemo(()=>({initial:s,animate:o}),[P1(s),P1(o)])}function P1(t){return Array.isArray(t)?t.join(" "):t}const Kl={};function d8(t){for(const s in t)Kl[s]=t[s],g0(s)&&(Kl[s].isCSSVariable=!0)}function Ox(t,{layout:s,layoutId:o}){return kr.has(t)||t.startsWith("origin")||(s||o!==void 0)&&(!!Kl[t]||t==="opacity")}const f8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},h8=Sr.length;function m8(t,s,o){let a="",c=!0;for(let u=0;u<h8;u++){const f=Sr[u],p=t[f];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(f.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||o){const _=kx(p,E0[f]);if(!h){c=!1;const g=f8[f]||f;a+=`${g}(${_}) `}o&&(s[f]=_)}}return a=a.trim(),o?a=o(s,c?"":a):c&&(a="none"),a}function L0(t,s,o){const{style:a,vars:c,transformOrigin:u}=t;let f=!1,p=!1;for(const h in s){const _=s[h];if(kr.has(h)){f=!0;continue}else if(g0(h)){c[h]=_;continue}else{const g=kx(_,E0[h]);h.startsWith("origin")?(p=!0,u[h]=g):a[h]=g}}if(s.transform||(f||o?a.transform=m8(s,t.transform,o):a.transform&&(a.transform="none")),p){const{originX:h="50%",originY:_="50%",originZ:g=0}=u;a.transformOrigin=`${h} ${_} ${g}`}}const O0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Bx(t,s,o){for(const a in s)!es(s[a])&&!Ox(a,o)&&(t[a]=s[a])}function p8({transformTemplate:t},s){return b.useMemo(()=>{const o=O0();return L0(o,s,t),Object.assign({},o.vars,o.style)},[s])}function _8(t,s){const o=t.style||{},a={};return Bx(a,o,t),Object.assign(a,p8(t,s)),a}function g8(t,s){const o={},a=_8(t,s);return t.drag&&t.dragListener!==!1&&(o.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(o.tabIndex=0),o.style=a,o}const y8={offset:"stroke-dashoffset",array:"stroke-dasharray"},x8={offset:"strokeDashoffset",array:"strokeDasharray"};function b8(t,s,o=1,a=0,c=!0){t.pathLength=1;const u=c?y8:x8;t[u.offset]=st.transform(-a);const f=st.transform(s),p=st.transform(o);t[u.array]=`${f} ${p}`}function zx(t,{attrX:s,attrY:o,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:f=0,...p},h,_,g){if(L0(t,p,_),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:x}=t;y.transform&&(x.transform=y.transform,delete y.transform),(x.transform||y.transformOrigin)&&(x.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),x.transform&&(x.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete y.transformBox),s!==void 0&&(y.x=s),o!==void 0&&(y.y=o),a!==void 0&&(y.scale=a),c!==void 0&&b8(y,c,u,f,!1)}const $x=()=>({...O0(),attrs:{}}),Px=t=>typeof t=="string"&&t.toLowerCase()==="svg";function v8(t,s,o,a){const c=b.useMemo(()=>{const u=$x();return zx(u,s,Px(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[s]);if(t.style){const u={};Bx(u,t.style,t),c.style={...u,...c.style}}return c}const w8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function B0(t){return typeof t!="string"||t.includes("-")?!1:!!(w8.indexOf(t)>-1||/[A-Z]/u.test(t))}function S8(t,s,o,{latestValues:a},c,u=!1){const p=(B0(t)?v8:g8)(s,a,c,t),h=l8(s,typeof t=="string",u),_=t!==b.Fragment?{...h,...p,ref:o}:{},{children:g}=s,y=b.useMemo(()=>es(g)?g.get():g,[g]);return b.createElement(t,{..._,children:y})}function H1(t){const s=[{},{}];return t==null||t.values.forEach((o,a)=>{s[0][a]=o.get(),s[1][a]=o.getVelocity()}),s}function z0(t,s,o,a){if(typeof s=="function"){const[c,u]=H1(a);s=s(o!==void 0?o:t.custom,c,u)}if(typeof s=="string"&&(s=t.variants&&t.variants[s]),typeof s=="function"){const[c,u]=H1(a);s=s(o!==void 0?o:t.custom,c,u)}return s}function ad(t){return es(t)?t.get():t}function k8({scrapeMotionValuesFromProps:t,createRenderState:s},o,a,c){return{latestValues:j8(o,a,c,t),renderState:s()}}function j8(t,s,o,a){const c={},u=a(t,{});for(const x in u)c[x]=ad(u[x]);let{initial:f,animate:p}=t;const h=Nd(t),_=Lx(t);s&&_&&!h&&t.inherit!==!1&&(f===void 0&&(f=s.initial),p===void 0&&(p=s.animate));let g=o?o.initial===!1:!1;g=g||f===!1;const y=g?p:f;if(y&&typeof y!="boolean"&&!Rd(y)){const x=Array.isArray(y)?y:[y];for(let w=0;w<x.length;w++){const S=z0(t,x[w]);if(S){const{transitionEnd:T,transition:M,...C}=S;for(const z in C){let O=C[z];if(Array.isArray(O)){const L=g?O.length-1:0;O=O[L]}O!==null&&(c[z]=O)}for(const z in T)c[z]=T[z]}}}return c}const Hx=t=>(s,o)=>{const a=b.useContext(Md),c=b.useContext(Ed),u=()=>k8(t,s,a,c);return o?u():l0(u)};function $0(t,s,o){var u;const{style:a}=t,c={};for(const f in a)(es(a[f])||s.style&&es(s.style[f])||Ox(f,t)||((u=o==null?void 0:o.getValue(f))==null?void 0:u.liveStyle)!==void 0)&&(c[f]=a[f]);return c}const C8=Hx({scrapeMotionValuesFromProps:$0,createRenderState:O0});function Ix(t,s,o){const a=$0(t,s,o);for(const c in t)if(es(t[c])||es(s[c])){const u=Sr.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}const T8=Hx({scrapeMotionValuesFromProps:Ix,createRenderState:$x}),E8=Symbol.for("motionComponentSymbol");function dr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function M8(t,s,o){return b.useCallback(a=>{a&&t.onMount&&t.onMount(a),s&&(a?s.mount(a):s.unmount()),o&&(typeof o=="function"?o(a):dr(o)&&(o.current=a))},[s])}const P0=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),R8="framerAppearId",Vx="data-"+P0(R8),Ux=b.createContext({});function N8(t,s,o,a,c){var T,M;const{visualElement:u}=b.useContext(Md),f=b.useContext(Ax),p=b.useContext(Ed),h=b.useContext(N0).reducedMotion,_=b.useRef(null);a=a||f.renderer,!_.current&&a&&(_.current=a(t,{visualState:s,parent:u,props:o,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:h}));const g=_.current,y=b.useContext(Ux);g&&!g.projection&&c&&(g.type==="html"||g.type==="svg")&&A8(_.current,o,c,y);const x=b.useRef(!1);b.useInsertionEffect(()=>{g&&x.current&&g.update(o,p)});const w=o[Vx],S=b.useRef(!!w&&!((T=window.MotionHandoffIsComplete)!=null&&T.call(window,w))&&((M=window.MotionHasOptimisedAnimation)==null?void 0:M.call(window,w)));return P2(()=>{g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),S.current&&g.animationState&&g.animationState.animateChanges())}),b.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,w)}),S.current=!1))}),g}function A8(t,s,o,a){const{layoutId:c,layout:u,drag:f,dragConstraints:p,layoutScroll:h,layoutRoot:_,layoutCrossfade:g}=s;t.projection=new o(t.latestValues,s["data-framer-portal-id"]?void 0:Yx(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!f||p&&dr(p),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:h,layoutRoot:_})}function Yx(t){if(t)return t.options.allowProjection!==!1?t.projection:Yx(t.parent)}function Wh(t,{forwardMotionProps:s=!1}={},o,a){o&&o8(o);const c=B0(t)?T8:C8;function u(p,h){let _;const g={...b.useContext(N0),...p,layoutId:D8(p)},{isStatic:y}=g,x=u8(p),w=c(p,y);if(!y&&c0){L8();const S=O8(g);_=S.MeasureLayout,x.visualElement=N8(t,w,g,a,S.ProjectionNode)}return r.jsxs(Md.Provider,{value:x,children:[_&&x.visualElement?r.jsx(_,{visualElement:x.visualElement,...g}):null,S8(t,p,M8(w,x.visualElement,h),w,y,s)]})}u.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const f=b.forwardRef(u);return f[E8]=t,f}function D8({layoutId:t}){const s=b.useContext(r0).id;return s&&t!==void 0?s+"-"+t:t}function L8(t,s){b.useContext(Ax).strict}function O8(t){const{drag:s,layout:o}=xr;if(!s&&!o)return{};const a={...s,...o};return{MeasureLayout:s!=null&&s.isEnabled(t)||o!=null&&o.isEnabled(t)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function B8(t,s){if(typeof Proxy>"u")return Wh;const o=new Map,a=(u,f)=>Wh(u,f,t,s),c=(u,f)=>a(u,f);return new Proxy(c,{get:(u,f)=>f==="create"?a:(o.has(f)||o.set(f,Wh(f,void 0,t,s)),o.get(f))})}function Wx({top:t,left:s,right:o,bottom:a}){return{x:{min:s,max:o},y:{min:t,max:a}}}function z8({x:t,y:s}){return{top:s.min,right:t.max,bottom:s.max,left:t.min}}function $8(t,s){if(!s)return t;const o=s({x:t.left,y:t.top}),a=s({x:t.right,y:t.bottom});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function Fh(t){return t===void 0||t===1}function Mm({scale:t,scaleX:s,scaleY:o}){return!Fh(t)||!Fh(s)||!Fh(o)}function ma(t){return Mm(t)||Fx(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Fx(t){return I1(t.x)||I1(t.y)}function I1(t){return t&&t!=="0%"}function gd(t,s,o){const a=t-o,c=s*a;return o+c}function V1(t,s,o,a,c){return c!==void 0&&(t=gd(t,c,a)),gd(t,o,a)+s}function Rm(t,s=0,o=1,a,c){t.min=V1(t.min,s,o,a,c),t.max=V1(t.max,s,o,a,c)}function Xx(t,{x:s,y:o}){Rm(t.x,s.translate,s.scale,s.originPoint),Rm(t.y,o.translate,o.scale,o.originPoint)}const U1=.999999999999,Y1=1.0000000000001;function P8(t,s,o,a=!1){const c=o.length;if(!c)return;s.x=s.y=1;let u,f;for(let p=0;p<c;p++){u=o[p],f=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&hr(t,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),f&&(s.x*=f.x.scale,s.y*=f.y.scale,Xx(t,f)),a&&ma(u.latestValues)&&hr(t,u.latestValues))}s.x<Y1&&s.x>U1&&(s.x=1),s.y<Y1&&s.y>U1&&(s.y=1)}function fr(t,s){t.min=t.min+s,t.max=t.max+s}function W1(t,s,o,a,c=.5){const u=_n(t.min,t.max,c);Rm(t,s,o,u,a)}function hr(t,s){W1(t.x,s.x,s.scaleX,s.scale,s.originX),W1(t.y,s.y,s.scaleY,s.scale,s.originY)}function qx(t,s){return Wx($8(t.getBoundingClientRect(),s))}function H8(t,s,o){const a=qx(t,o),{scroll:c}=s;return c&&(fr(a.x,c.offset.x),fr(a.y,c.offset.y)),a}const F1=()=>({translate:0,scale:1,origin:0,originPoint:0}),mr=()=>({x:F1(),y:F1()}),X1=()=>({min:0,max:0}),Tn=()=>({x:X1(),y:X1()}),Nm={current:null},Qx={current:!1};function I8(){if(Qx.current=!0,!!c0)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),s=()=>Nm.current=t.matches;t.addEventListener("change",s),s()}else Nm.current=!1}const V8=new WeakMap;function U8(t,s,o){for(const a in s){const c=s[a],u=o[a];if(es(c))t.addValue(a,c);else if(es(u))t.addValue(a,yr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const f=t.getValue(a);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=t.getStaticValue(a);t.addValue(a,yr(f!==void 0?f:c,{owner:t}))}}for(const a in o)s[a]===void 0&&t.removeValue(a);return s}const q1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Y8{scrapeMotionValuesFromProps(s,o,a){return{}}constructor({parent:s,props:o,presenceContext:a,reducedMotionConfig:c,blockInitialAnimation:u,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=C0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=ms.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,rn.render(this.render,!1,!0))};const{latestValues:h,renderState:_}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=_,this.parent=s,this.props=o,this.presenceContext=a,this.depth=s?s.depth+1:0,this.reducedMotionConfig=c,this.options=p,this.blockInitialAnimation=!!u,this.isControllingVariants=Nd(o),this.isVariantNode=Lx(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:g,...y}=this.scrapeMotionValuesFromProps(o,{},this);for(const x in y){const w=y[x];h[x]!==void 0&&es(w)&&w.set(h[x],!1)}}mount(s){this.current=s,V8.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),Qx.current||I8(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Nm.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Lo(this.notifyUpdate),Lo(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const o=this.features[s];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(s,o){this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)();const a=kr.has(s);a&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",p=>{this.latestValues[s]=p,this.props.onUpdate&&rn.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),u=o.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,s,o)),this.valueSubscriptions.set(s,()=>{c(),u(),f&&f(),o.owner&&o.stop()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in xr){const o=xr[s];if(!o)continue;const{isEnabled:a,Feature:c}=o;if(!this.features[s]&&c&&a(this.props)&&(this.features[s]=new c(this)),this.features[s]){const u=this.features[s];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Tn()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,o){this.latestValues[s]=o}update(s,o){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let a=0;a<q1.length;a++){const c=q1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,f=s[u];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=U8(this,this.scrapeMotionValuesFromProps(s,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(s),()=>o.variantChildren.delete(s)}addValue(s,o){const a=this.values.get(s);o!==a&&(a&&this.removeValue(s),this.bindToMotionValue(s,o),this.values.set(s,o),this.latestValues[s]=o.get())}removeValue(s){this.values.delete(s);const o=this.valueSubscriptions.get(s);o&&(o(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,o){if(this.props.values&&this.props.values[s])return this.props.values[s];let a=this.values.get(s);return a===void 0&&o!==void 0&&(a=yr(o===null?void 0:o,{owner:this}),this.addValue(s,a)),a}readValue(s,o){let a=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return a!=null&&(typeof a=="string"&&(H2(a)||V2(a))?a=parseFloat(a):!e8(a)&&Oo.test(o)&&(a=Sx(s,o)),this.setBaseTarget(s,es(a)?a.get():a)),es(a)?a.get():a}setBaseTarget(s,o){this.baseTarget[s]=o}getBaseTarget(s){var u;const{initial:o}=this.props;let a;if(typeof o=="string"||typeof o=="object"){const f=z0(this.props,o,(u=this.presenceContext)==null?void 0:u.custom);f&&(a=f[s])}if(o&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,s);return c!==void 0&&!es(c)?c:this.initialValues[s]!==void 0&&a===void 0?void 0:this.baseTarget[s]}on(s,o){return this.events[s]||(this.events[s]=new m0),this.events[s].add(o)}notify(s,...o){this.events[s]&&this.events[s].notify(...o)}scheduleRenderMicrotask(){M0.render(this.render)}}class Gx extends Y8{constructor(){super(...arguments),this.KeyframeResolver=Vw}sortInstanceNodePosition(s,o){return s.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(s,o){return s.style?s.style[o]:void 0}removeValueFromRenderState(s,{vars:o,style:a}){delete o[s],delete a[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;es(s)&&(this.childSubscription=s.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function Kx(t,{style:s,vars:o},a,c){const u=t.style;let f;for(f in s)u[f]=s[f];c==null||c.applyProjectionStyles(u,a);for(f in o)u.setProperty(f,o[f])}function W8(t){return window.getComputedStyle(t)}class F8 extends Gx{constructor(){super(...arguments),this.type="html",this.renderInstance=Kx}readValueFromInstance(s,o){var a;if(kr.has(o))return(a=this.projection)!=null&&a.isProjecting?Sm(o):rw(s,o);{const c=W8(s),u=(g0(o)?c.getPropertyValue(o):c[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(s,{transformPagePoint:o}){return qx(s,o)}build(s,o,a){L0(s,o,a.transformTemplate)}scrapeMotionValuesFromProps(s,o,a){return $0(s,o,a)}}const Zx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function X8(t,s,o,a){Kx(t,s,void 0,a);for(const c in s.attrs)t.setAttribute(Zx.has(c)?c:P0(c),s.attrs[c])}class q8 extends Gx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Tn}getBaseTargetFromProps(s,o){return s[o]}readValueFromInstance(s,o){if(kr.has(o)){const a=wx(o);return a&&a.default||0}return o=Zx.has(o)?o:P0(o),s.getAttribute(o)}scrapeMotionValuesFromProps(s,o,a){return Ix(s,o,a)}build(s,o,a){zx(s,o,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(s,o,a,c){X8(s,o,a,c)}mount(s){this.isSVGTag=Px(s.tagName),super.mount(s)}}const Q8=(t,s)=>B0(t)?new q8(s):new F8(s,{allowProjection:t!==b.Fragment});function Zl(t,s,o){const a=t.getProps();return z0(a,s,o!==void 0?o:a.custom,t)}const Am=t=>Array.isArray(t);function G8(t,s,o){t.hasValue(s)?t.getValue(s).set(o):t.addValue(s,yr(o))}function K8(t){return Am(t)?t[t.length-1]||0:t}function Z8(t,s){const o=Zl(t,s);let{transitionEnd:a={},transition:c={},...u}=o||{};u={...u,...a};for(const f in u){const p=K8(u[f]);G8(t,f,p)}}function J8(t){return!!(es(t)&&t.add)}function Dm(t,s){const o=t.getValue("willChange");if(J8(o))return o.add(s);if(!o&&qi.WillChange){const a=new qi.WillChange("auto");t.addValue("willChange",a),a.add(s)}}function Jx(t){return t.props[Vx]}const e7=t=>t!==null;function t7(t,{repeat:s,repeatType:o="loop"},a){const c=t.filter(e7),u=s&&o!=="loop"&&s%2===1?0:c.length-1;return c[u]}const n7={type:"spring",stiffness:500,damping:25,restSpeed:10},s7=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),i7={type:"keyframes",duration:.8},o7={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},a7=(t,{keyframes:s})=>s.length>2?i7:kr.has(t)?t.startsWith("scale")?s7(s[1]):n7:o7;function r7({when:t,delay:s,delayChildren:o,staggerChildren:a,staggerDirection:c,repeat:u,repeatType:f,repeatDelay:p,from:h,elapsed:_,...g}){return!!Object.keys(g).length}const H0=(t,s,o,a={},c,u)=>f=>{const p=T0(a,t)||{},h=p.delay||a.delay||0;let{elapsed:_=0}=a;_=_-wi(h);const g={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:s.getVelocity(),...p,delay:-_,onUpdate:x=>{s.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:t,motionValue:s,element:u?void 0:c};r7(p)||Object.assign(g,a7(t,g)),g.duration&&(g.duration=wi(g.duration)),g.repeatDelay&&(g.repeatDelay=wi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(y=!0)),(qi.instantAnimations||qi.skipAnimations)&&(y=!0,g.duration=0,g.delay=0),g.allowFlatten=!p.type&&!p.ease,y&&!u&&s.get()!==void 0){const x=t7(g.keyframes,p);if(x!==void 0){rn.update(()=>{g.onUpdate(x),g.onComplete()});return}}return p.isSync?new j0(g):new Rw(g)};function l7({protectedKeys:t,needsAnimating:s},o){const a=t.hasOwnProperty(o)&&s[o]!==!0;return s[o]=!1,a}function e5(t,s,{delay:o=0,transitionOverride:a,type:c}={}){let{transition:u=t.getDefaultTransition(),transitionEnd:f,...p}=s;a&&(u=a);const h=[],_=c&&t.animationState&&t.animationState.getState()[c];for(const g in p){const y=t.getValue(g,t.latestValues[g]??null),x=p[g];if(x===void 0||_&&l7(_,g))continue;const w={delay:o,...T0(u||{},g)},S=y.get();if(S!==void 0&&!y.isAnimating&&!Array.isArray(x)&&x===S&&!w.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const C=Jx(t);if(C){const z=window.MotionHandoffAnimation(C,g,rn);z!==null&&(w.startTime=z,T=!0)}}Dm(t,g),y.start(H0(g,y,x,t.shouldReduceMotion&&xx.has(g)?{type:!1}:w,t,T));const M=y.animation;M&&h.push(M)}return f&&Promise.all(h).then(()=>{rn.update(()=>{f&&Z8(t,f)})}),h}function Lm(t,s,o={}){var h;const a=Zl(t,s,o.type==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};o.transitionOverride&&(c=o.transitionOverride);const u=a?()=>Promise.all(e5(t,a,o)):()=>Promise.resolve(),f=t.variantChildren&&t.variantChildren.size?(_=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=c;return c7(t,s,_,g,y,x,o)}:()=>Promise.resolve(),{when:p}=c;if(p){const[_,g]=p==="beforeChildren"?[u,f]:[f,u];return _().then(()=>g())}else return Promise.all([u(),f(o.delay)])}function c7(t,s,o=0,a=0,c=0,u=1,f){const p=[],h=t.variantChildren.size,_=(h-1)*c,g=typeof a=="function",y=g?x=>a(x,h):u===1?(x=0)=>x*c:(x=0)=>_-x*c;return Array.from(t.variantChildren).sort(u7).forEach((x,w)=>{x.notify("AnimationStart",s),p.push(Lm(x,s,{...f,delay:o+(g?0:a)+y(w)}).then(()=>x.notify("AnimationComplete",s)))}),Promise.all(p)}function u7(t,s){return t.sortNodePosition(s)}function d7(t,s,o={}){t.notify("AnimationStart",s);let a;if(Array.isArray(s)){const c=s.map(u=>Lm(t,u,o));a=Promise.all(c)}else if(typeof s=="string")a=Lm(t,s,o);else{const c=typeof s=="function"?Zl(t,s,o.custom):s;a=Promise.all(e5(t,c,o))}return a.then(()=>{t.notify("AnimationComplete",s)})}function t5(t,s){if(!Array.isArray(s))return!1;const o=s.length;if(o!==t.length)return!1;for(let a=0;a<o;a++)if(s[a]!==t[a])return!1;return!0}const f7=D0.length;function n5(t){if(!t)return;if(!t.isControllingVariants){const o=t.parent?n5(t.parent)||{}:{};return t.props.initial!==void 0&&(o.initial=t.props.initial),o}const s={};for(let o=0;o<f7;o++){const a=D0[o],c=t.props[a];(Gl(c)||c===!1)&&(s[a]=c)}return s}const h7=[...A0].reverse(),m7=A0.length;function p7(t){return s=>Promise.all(s.map(({animation:o,options:a})=>d7(t,o,a)))}function _7(t){let s=p7(t),o=Q1(),a=!0;const c=h=>(_,g)=>{var x;const y=Zl(t,g,h==="exit"?(x=t.presenceContext)==null?void 0:x.custom:void 0);if(y){const{transition:w,transitionEnd:S,...T}=y;_={..._,...T,...S}}return _};function u(h){s=h(t)}function f(h){const{props:_}=t,g=n5(t.parent)||{},y=[],x=new Set;let w={},S=1/0;for(let M=0;M<m7;M++){const C=h7[M],z=o[C],O=_[C]!==void 0?_[C]:g[C],L=Gl(O),$=C===h?z.isActive:null;$===!1&&(S=M);let W=O===g[C]&&O!==_[C]&&L;if(W&&a&&t.manuallyAnimateOnMount&&(W=!1),z.protectedKeys={...w},!z.isActive&&$===null||!O&&!z.prevProp||Rd(O)||typeof O=="boolean")continue;const P=g7(z.prevProp,O);let te=P||C===h&&z.isActive&&!W&&L||M>S&&L,F=!1;const Q=Array.isArray(O)?O:[O];let ee=Q.reduce(c(C),{});$===!1&&(ee={});const{prevResolvedValues:G={}}=z,ge={...G,...ee},ce=ye=>{te=!0,x.has(ye)&&(F=!0,x.delete(ye)),z.needsAnimating[ye]=!0;const K=t.getValue(ye);K&&(K.liveStyle=!1)};for(const ye in ge){const K=ee[ye],be=G[ye];if(w.hasOwnProperty(ye))continue;let A=!1;Am(K)&&Am(be)?A=!t5(K,be):A=K!==be,A?K!=null?ce(ye):x.add(ye):K!==void 0&&x.has(ye)?ce(ye):z.protectedKeys[ye]=!0}z.prevProp=O,z.prevResolvedValues=ee,z.isActive&&(w={...w,...ee}),a&&t.blockInitialAnimation&&(te=!1),te&&(!(W&&P)||F)&&y.push(...Q.map(ye=>({animation:ye,options:{type:C}})))}if(x.size){const M={};if(typeof _.initial!="boolean"){const C=Zl(t,Array.isArray(_.initial)?_.initial[0]:_.initial);C&&C.transition&&(M.transition=C.transition)}x.forEach(C=>{const z=t.getBaseTarget(C),O=t.getValue(C);O&&(O.liveStyle=!0),M[C]=z??null}),y.push({animation:M})}let T=!!y.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(T=!1),a=!1,T?s(y):Promise.resolve()}function p(h,_){var y;if(o[h].isActive===_)return Promise.resolve();(y=t.variantChildren)==null||y.forEach(x=>{var w;return(w=x.animationState)==null?void 0:w.setActive(h,_)}),o[h].isActive=_;const g=f(h);for(const x in o)o[x].protectedKeys={};return g}return{animateChanges:f,setActive:p,setAnimateFunction:u,getState:()=>o,reset:()=>{o=Q1(),a=!0}}}function g7(t,s){return typeof s=="string"?s!==t:Array.isArray(s)?!t5(s,t):!1}function ua(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Q1(){return{animate:ua(!0),whileInView:ua(),whileHover:ua(),whileTap:ua(),whileDrag:ua(),whileFocus:ua(),exit:ua()}}class zo{constructor(s){this.isMounted=!1,this.node=s}update(){}}class y7 extends zo{constructor(s){super(s),s.animationState||(s.animationState=_7(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Rd(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:o}=this.node.prevProps||{};s!==o&&this.updateAnimationControlsSubscription()}unmount(){var s;this.node.animationState.reset(),(s=this.unmountControls)==null||s.call(this)}}let x7=0;class b7 extends zo{constructor(){super(...arguments),this.id=x7++}update(){if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:o}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===a)return;const c=this.node.animationState.setActive("exit",!s);o&&!s&&c.then(()=>{o(this.id)})}mount(){const{register:s,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const v7={animation:{Feature:y7},exit:{Feature:b7}};function Jl(t,s,o,a={passive:!0}){return t.addEventListener(s,o,a),()=>t.removeEventListener(s,o)}function lc(t){return{point:{x:t.pageX,y:t.pageY}}}const w7=t=>s=>R0(s)&&t(s,lc(s));function Il(t,s,o,a){return Jl(t,s,w7(o),a)}const s5=1e-4,S7=1-s5,k7=1+s5,i5=.01,j7=0-i5,C7=0+i5;function as(t){return t.max-t.min}function T7(t,s,o){return Math.abs(t-s)<=o}function G1(t,s,o,a=.5){t.origin=a,t.originPoint=_n(s.min,s.max,t.origin),t.scale=as(o)/as(s),t.translate=_n(o.min,o.max,t.origin)-t.originPoint,(t.scale>=S7&&t.scale<=k7||isNaN(t.scale))&&(t.scale=1),(t.translate>=j7&&t.translate<=C7||isNaN(t.translate))&&(t.translate=0)}function Vl(t,s,o,a){G1(t.x,s.x,o.x,a?a.originX:void 0),G1(t.y,s.y,o.y,a?a.originY:void 0)}function K1(t,s,o){t.min=o.min+s.min,t.max=t.min+as(s)}function E7(t,s,o){K1(t.x,s.x,o.x),K1(t.y,s.y,o.y)}function Z1(t,s,o){t.min=s.min-o.min,t.max=t.min+as(s)}function Ul(t,s,o){Z1(t.x,s.x,o.x),Z1(t.y,s.y,o.y)}function Ys(t){return[t("x"),t("y")]}const o5=({current:t})=>t?t.ownerDocument.defaultView:null,J1=(t,s)=>Math.abs(t-s);function M7(t,s){const o=J1(t.x,s.x),a=J1(t.y,s.y);return Math.sqrt(o**2+a**2)}class a5{constructor(s,o,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=qh(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,S=M7(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!S)return;const{point:T}=x,{timestamp:M}=Xn;this.history.push({...T,timestamp:M});const{onStart:C,onMove:z}=this.handlers;w||(C&&C(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),z&&z(this.lastMoveEvent,x)},this.handlePointerMove=(x,w)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Xh(w,this.transformPagePoint),rn.update(this.updatePoint,!0)},this.handlePointerUp=(x,w)=>{this.end();const{onEnd:S,onSessionEnd:T,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=qh(x.type==="pointercancel"?this.lastMoveEventInfo:Xh(w,this.transformPagePoint),this.history);this.startEvent&&S&&S(x,C),T&&T(x,C)},!R0(s))return;this.dragSnapToOrigin=u,this.handlers=o,this.transformPagePoint=a,this.distanceThreshold=f,this.contextWindow=c||window;const p=lc(s),h=Xh(p,this.transformPagePoint),{point:_}=h,{timestamp:g}=Xn;this.history=[{..._,timestamp:g}];const{onSessionStart:y}=o;y&&y(s,qh(h,this.history)),this.removeListeners=oc(Il(this.contextWindow,"pointermove",this.handlePointerMove),Il(this.contextWindow,"pointerup",this.handlePointerUp),Il(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),Lo(this.updatePoint)}}function Xh(t,s){return s?{point:s(t.point)}:t}function ey(t,s){return{x:t.x-s.x,y:t.y-s.y}}function qh({point:t},s){return{point:t,delta:ey(t,r5(s)),offset:ey(t,R7(s)),velocity:N7(s,.1)}}function R7(t){return t[0]}function r5(t){return t[t.length-1]}function N7(t,s){if(t.length<2)return{x:0,y:0};let o=t.length-1,a=null;const c=r5(t);for(;o>=0&&(a=t[o],!(c.timestamp-a.timestamp>wi(s)));)o--;if(!a)return{x:0,y:0};const u=Si(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const f={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function A7(t,{min:s,max:o},a){return s!==void 0&&t<s?t=a?_n(s,t,a.min):Math.max(t,s):o!==void 0&&t>o&&(t=a?_n(o,t,a.max):Math.min(t,o)),t}function ty(t,s,o){return{min:s!==void 0?t.min+s:void 0,max:o!==void 0?t.max+o-(t.max-t.min):void 0}}function D7(t,{top:s,left:o,bottom:a,right:c}){return{x:ty(t.x,o,c),y:ty(t.y,s,a)}}function ny(t,s){let o=s.min-t.min,a=s.max-t.max;return s.max-s.min<t.max-t.min&&([o,a]=[a,o]),{min:o,max:a}}function L7(t,s){return{x:ny(t.x,s.x),y:ny(t.y,s.y)}}function O7(t,s){let o=.5;const a=as(t),c=as(s);return c>a?o=Xl(s.min,s.max-a,t.min):a>c&&(o=Xl(t.min,t.max-c,s.min)),Xi(0,1,o)}function B7(t,s){const o={};return s.min!==void 0&&(o.min=s.min-t.min),s.max!==void 0&&(o.max=s.max-t.min),o}const Om=.35;function z7(t=Om){return t===!1?t=0:t===!0&&(t=Om),{x:sy(t,"left","right"),y:sy(t,"top","bottom")}}function sy(t,s,o){return{min:iy(t,s),max:iy(t,o)}}function iy(t,s){return typeof t=="number"?t:t[s]||0}const $7=new WeakMap;class P7{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Tn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:o=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=y=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(lc(y).point)},f=(y,x)=>{const{drag:w,dragPropagation:S,onDragStart:T}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Fw(w),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ys(C=>{let z=this.getAxisMotionValue(C).get()||0;if(ki.test(z)){const{projection:O}=this.visualElement;if(O&&O.layout){const L=O.layout.layoutBox[C];L&&(z=as(L)*(parseFloat(z)/100))}}this.originPoint[C]=z}),T&&rn.postRender(()=>T(y,x)),Dm(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},p=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:T,onDrag:M}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:C}=x;if(S&&this.currentDirection===null){this.currentDirection=H7(C),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",x.point,C),this.updateAxis("y",x.point,C),this.visualElement.render(),M&&M(y,x)},h=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x,this.stop(y,x),this.latestPointerEvent=null,this.latestPanInfo=null},_=()=>Ys(y=>{var x;return this.getAnimationState(y)==="paused"&&((x=this.getAxisMotionValue(y).animation)==null?void 0:x.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new a5(s,{onSessionStart:u,onStart:f,onMove:p,onSessionEnd:h,resumeAnimation:_},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:o5(this.visualElement)})}stop(s,o){const a=s||this.latestPointerEvent,c=o||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&rn.postRender(()=>p(a,c))}cancel(){this.isDragging=!1;const{projection:s,animationState:o}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(s,o,a){const{drag:c}=this.getProps();if(!a||!Iu(s,c,this.currentDirection))return;const u=this.getAxisMotionValue(s);let f=this.originPoint[s]+a[s];this.constraints&&this.constraints[s]&&(f=A7(f,this.constraints[s],this.elastic[s])),u.set(f)}resolveConstraints(){var u;const{dragConstraints:s,dragElastic:o}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;s&&dr(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&a?this.constraints=D7(a.layoutBox,s):this.constraints=!1,this.elastic=z7(o),c!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Ys(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=B7(a.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:o}=this.getProps();if(!s||!dr(s))return!1;const a=s.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=H8(a,c.root,this.visualElement.getTransformPagePoint());let f=L7(c.layout.layoutBox,u);if(o){const p=o(z8(f));this.hasMutatedConstraints=!!p,p&&(f=Wx(p))}return f}startAnimation(s){const{drag:o,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},_=Ys(g=>{if(!Iu(g,o,this.currentDirection))return;let y=h&&h[g]||{};f&&(y={min:0,max:0});const x=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?s[g]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(g,S)});return Promise.all(_).then(p)}startAxisValueAnimation(s,o){const a=this.getAxisMotionValue(s);return Dm(this.visualElement,s),a.start(H0(s,a,0,o,this.visualElement,!1))}stopAnimation(){Ys(s=>this.getAxisMotionValue(s).stop())}pauseAnimation(){Ys(s=>{var o;return(o=this.getAxisMotionValue(s).animation)==null?void 0:o.pause()})}getAnimationState(s){var o;return(o=this.getAxisMotionValue(s).animation)==null?void 0:o.state}getAxisMotionValue(s){const o=`_drag${s.toUpperCase()}`,a=this.visualElement.getProps(),c=a[o];return c||this.visualElement.getValue(s,(a.initial?a.initial[s]:void 0)||0)}snapToCursor(s){Ys(o=>{const{drag:a}=this.getProps();if(!Iu(o,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(o);if(c&&c.layout){const{min:f,max:p}=c.layout.layoutBox[o];u.set(s[o]-_n(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:o}=this.getProps(),{projection:a}=this.visualElement;if(!dr(o)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Ys(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const h=p.get();c[f]=O7({min:h,max:h},this.constraints[f])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Ys(f=>{if(!Iu(f,s,null))return;const p=this.getAxisMotionValue(f),{min:h,max:_}=this.constraints[f];p.set(_n(h,_,c[f]))})}addListeners(){if(!this.visualElement.current)return;$7.set(this.visualElement,this);const s=this.visualElement.current,o=Il(s,"pointerdown",h=>{const{drag:_,dragListener:g=!0}=this.getProps();_&&g&&this.start(h)}),a=()=>{const{dragConstraints:h}=this.getProps();dr(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,u=c.addEventListener("measure",a);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),rn.read(a);const f=Jl(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",({delta:h,hasLayoutChanged:_})=>{this.isDragging&&_&&(Ys(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=h[g].translate,y.set(y.get()+h[g].translate))}),this.visualElement.render())});return()=>{f(),o(),u(),p&&p()}}getProps(){const s=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:f=Om,dragMomentum:p=!0}=s;return{...s,drag:o,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:f,dragMomentum:p}}}function Iu(t,s,o){return(s===!0||s===t)&&(o===null||o===t)}function H7(t,s=10){let o=null;return Math.abs(t.y)>s?o="y":Math.abs(t.x)>s&&(o="x"),o}class I7 extends zo{constructor(s){super(s),this.removeGroupControls=Ws,this.removeListeners=Ws,this.controls=new P7(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ws}unmount(){this.removeGroupControls(),this.removeListeners()}}const oy=t=>(s,o)=>{t&&rn.postRender(()=>t(s,o))};class V7 extends zo{constructor(){super(...arguments),this.removePointerDownListener=Ws}onPointerDown(s){this.session=new a5(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:o5(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:o,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:oy(s),onStart:oy(o),onMove:a,onEnd:(u,f)=>{delete this.session,c&&rn.postRender(()=>c(u,f))}}}mount(){this.removePointerDownListener=Il(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const rd={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ay(t,s){return s.max===s.min?0:t/(s.max-s.min)*100}const Rl={correct:(t,s)=>{if(!s.target)return t;if(typeof t=="string")if(st.test(t))t=parseFloat(t);else return t;const o=ay(t,s.target.x),a=ay(t,s.target.y);return`${o}% ${a}%`}},U7={correct:(t,{treeScale:s,projectionDelta:o})=>{const a=t,c=Oo.parse(t);if(c.length>5)return a;const u=Oo.createTransformer(t),f=typeof c[0]!="number"?1:0,p=o.x.scale*s.x,h=o.y.scale*s.y;c[0+f]/=p,c[1+f]/=h;const _=_n(p,h,.5);return typeof c[2+f]=="number"&&(c[2+f]/=_),typeof c[3+f]=="number"&&(c[3+f]/=_),u(c)}};let ry=!1;class Y7 extends b.Component{componentDidMount(){const{visualElement:s,layoutGroup:o,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=s;d8(W7),u&&(o.group&&o.group.add(u),a&&a.register&&c&&a.register(u),ry&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),rd.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:o,visualElement:a,drag:c,isPresent:u}=this.props,{projection:f}=a;return f&&(f.isPresent=u,ry=!0,c||s.layoutDependency!==o||o===void 0||s.isPresent!==u?f.willUpdate():this.safeToRemove(),s.isPresent!==u&&(u?f.promote():f.relegate()||rn.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:s}=this.props.visualElement;s&&(s.root.didUpdate(),M0.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:o,switchLayoutGroup:a}=this.props,{projection:c}=s;c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function l5(t){const[s,o]=Rx(),a=b.useContext(r0);return r.jsx(Y7,{...t,layoutGroup:a,switchLayoutGroup:b.useContext(Ux),isPresent:s,safeToRemove:o})}const W7={borderRadius:{...Rl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Rl,borderTopRightRadius:Rl,borderBottomLeftRadius:Rl,borderBottomRightRadius:Rl,boxShadow:U7};function F7(t,s,o){const a=es(t)?t:yr(t);return a.start(H0("",a,s,o)),a.animation}const X7=(t,s)=>t.depth-s.depth;class q7{constructor(){this.children=[],this.isDirty=!1}add(s){u0(this.children,s),this.isDirty=!0}remove(s){d0(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(X7),this.isDirty=!1,this.children.forEach(s)}}function Q7(t,s){const o=ms.now(),a=({timestamp:c})=>{const u=c-o;u>=s&&(Lo(a),t(u-s))};return rn.setup(a,!0),()=>Lo(a)}const c5=["TopLeft","TopRight","BottomLeft","BottomRight"],G7=c5.length,ly=t=>typeof t=="string"?parseFloat(t):t,cy=t=>typeof t=="number"||st.test(t);function K7(t,s,o,a,c,u){c?(t.opacity=_n(0,o.opacity??1,Z7(a)),t.opacityExit=_n(s.opacity??1,0,J7(a))):u&&(t.opacity=_n(s.opacity??1,o.opacity??1,a));for(let f=0;f<G7;f++){const p=`border${c5[f]}Radius`;let h=uy(s,p),_=uy(o,p);if(h===void 0&&_===void 0)continue;h||(h=0),_||(_=0),h===0||_===0||cy(h)===cy(_)?(t[p]=Math.max(_n(ly(h),ly(_),a),0),(ki.test(_)||ki.test(h))&&(t[p]+="%")):t[p]=_}(s.rotate||o.rotate)&&(t.rotate=_n(s.rotate||0,o.rotate||0,a))}function uy(t,s){return t[s]!==void 0?t[s]:t.borderRadius}const Z7=u5(0,.5,G2),J7=u5(.5,.95,Ws);function u5(t,s,o){return a=>a<t?0:a>s?1:o(Xl(t,s,a))}function dy(t,s){t.min=s.min,t.max=s.max}function Us(t,s){dy(t.x,s.x),dy(t.y,s.y)}function fy(t,s){t.translate=s.translate,t.scale=s.scale,t.originPoint=s.originPoint,t.origin=s.origin}function hy(t,s,o,a,c){return t-=s,t=gd(t,1/o,a),c!==void 0&&(t=gd(t,1/c,a)),t}function e9(t,s=0,o=1,a=.5,c,u=t,f=t){if(ki.test(s)&&(s=parseFloat(s),s=_n(f.min,f.max,s/100)-f.min),typeof s!="number")return;let p=_n(u.min,u.max,a);t===u&&(p-=s),t.min=hy(t.min,s,o,p,c),t.max=hy(t.max,s,o,p,c)}function my(t,s,[o,a,c],u,f){e9(t,s[o],s[a],s[c],s.scale,u,f)}const t9=["x","scaleX","originX"],n9=["y","scaleY","originY"];function py(t,s,o,a){my(t.x,s,t9,o?o.x:void 0,a?a.x:void 0),my(t.y,s,n9,o?o.y:void 0,a?a.y:void 0)}function _y(t){return t.translate===0&&t.scale===1}function d5(t){return _y(t.x)&&_y(t.y)}function gy(t,s){return t.min===s.min&&t.max===s.max}function s9(t,s){return gy(t.x,s.x)&&gy(t.y,s.y)}function yy(t,s){return Math.round(t.min)===Math.round(s.min)&&Math.round(t.max)===Math.round(s.max)}function f5(t,s){return yy(t.x,s.x)&&yy(t.y,s.y)}function xy(t){return as(t.x)/as(t.y)}function by(t,s){return t.translate===s.translate&&t.scale===s.scale&&t.originPoint===s.originPoint}class i9{constructor(){this.members=[]}add(s){u0(this.members,s),s.scheduleRender()}remove(s){if(d0(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(s){const o=this.members.findIndex(c=>s===c);if(o===0)return!1;let a;for(let c=o;c>=0;c--){const u=this.members[c];if(u.isPresent!==!1){a=u;break}}return a?(this.promote(a),!0):!1}promote(s,o){const a=this.lead;if(s!==a&&(this.prevLead=a,this.lead=s,s.show(),a)){a.instance&&a.scheduleRender(),s.scheduleRender(),s.resumeFrom=a,o&&(s.resumeFrom.preserveOpacity=!0),a.snapshot&&(s.snapshot=a.snapshot,s.snapshot.latestValues=a.animationValues||a.latestValues),s.root&&s.root.isUpdating&&(s.isLayoutDirty=!0);const{crossfade:c}=s.options;c===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(s=>{const{options:o,resumingFrom:a}=s;o.onExitComplete&&o.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(s=>{s.instance&&s.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function o9(t,s,o){let a="";const c=t.x.translate/s.x,u=t.y.translate/s.y,f=(o==null?void 0:o.z)||0;if((c||u||f)&&(a=`translate3d(${c}px, ${u}px, ${f}px) `),(s.x!==1||s.y!==1)&&(a+=`scale(${1/s.x}, ${1/s.y}) `),o){const{transformPerspective:_,rotate:g,rotateX:y,rotateY:x,skewX:w,skewY:S}=o;_&&(a=`perspective(${_}px) ${a}`),g&&(a+=`rotate(${g}deg) `),y&&(a+=`rotateX(${y}deg) `),x&&(a+=`rotateY(${x}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const p=t.x.scale*s.x,h=t.y.scale*s.y;return(p!==1||h!==1)&&(a+=`scale(${p}, ${h})`),a||"none"}const Qh=["","X","Y","Z"],a9=1e3;let r9=0;function Gh(t,s,o,a){const{latestValues:c}=s;c[t]&&(o[t]=c[t],s.setStaticValue(t,0),a&&(a[t]=0))}function h5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:s}=t.options;if(!s)return;const o=Jx(s);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(o,"transform",rn,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&h5(a)}function m5({attachResizeListener:t,defaultParent:s,measureScroll:o,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(f={},p=s==null?void 0:s()){this.id=r9++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(u9),this.nodes.forEach(m9),this.nodes.forEach(p9),this.nodes.forEach(d9)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new q7)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new m0),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const h=this.eventHandlers.get(f);h&&h.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Mx(f)&&!Zw(f),this.instance=f;const{layoutId:p,layout:h,visualElement:_}=this.options;if(_&&!_.current&&_.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),t){let g,y=0;const x=()=>this.root.updateBlockedByResize=!1;rn.read(()=>{y=window.innerWidth}),t(f,()=>{const w=window.innerWidth;w!==y&&(y=w,this.root.updateBlockedByResize=!0,g&&g(),g=Q7(x,250),rd.hasAnimatedSinceResize&&(rd.hasAnimatedSinceResize=!1,this.nodes.forEach(Sy)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&_&&(p||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||_.getDefaultTransition()||b9,{onLayoutAnimationStart:T,onLayoutAnimationComplete:M}=_.getProps(),C=!this.targetLayout||!f5(this.targetLayout,w),z=!y&&x;if(this.options.layoutRoot||this.resumeFrom||z||y&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...T0(S,"layout"),onPlay:T,onComplete:M};(_.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(g,z)}else y||Sy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Lo(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(_9),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&h5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const _=this.getTransformTemplate();this.prevTransformTemplateValue=_?_(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(vy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(wy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(h9),this.nodes.forEach(l9),this.nodes.forEach(c9)):this.nodes.forEach(wy),this.clearAllSnapshots();const p=ms.now();Xn.delta=Xi(0,1e3/60,p-Xn.timestamp),Xn.timestamp=p,Xn.isProcessing=!0,Hh.update.process(Xn),Hh.preRender.process(Xn),Hh.render.process(Xn),Xn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,M0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(f9),this.sharedNodes.forEach(g9)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,rn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){rn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!as(this.snapshot.measuredBox.x)&&!as(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Tn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const h=a(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!d5(this.projectionDelta),h=this.getTransformTemplate(),_=h?h(this.latestValues,""):void 0,g=_!==this.prevTransformTemplateValue;f&&this.instance&&(p||ma(this.latestValues)||g)&&(c(this.instance,_),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return f&&(h=this.removeTransform(h)),v9(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var _;const{visualElement:f}=this.options;if(!f)return Tn();const p=f.measureViewportBox();if(!(((_=this.scroll)==null?void 0:_.wasRoot)||this.path.some(w9))){const{scroll:g}=this.root;g&&(fr(p.x,g.offset.x),fr(p.y,g.offset.y))}return p}removeElementScroll(f){var h;const p=Tn();if(Us(p,f),(h=this.scroll)!=null&&h.wasRoot)return p;for(let _=0;_<this.path.length;_++){const g=this.path[_],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Us(p,f),fr(p.x,y.offset.x),fr(p.y,y.offset.y))}return p}applyTransform(f,p=!1){const h=Tn();Us(h,f);for(let _=0;_<this.path.length;_++){const g=this.path[_];!p&&g.options.layoutScroll&&g.scroll&&g!==g.root&&hr(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),ma(g.latestValues)&&hr(h,g.latestValues)}return ma(this.latestValues)&&hr(h,this.latestValues),h}removeTransform(f){const p=Tn();Us(p,f);for(let h=0;h<this.path.length;h++){const _=this.path[h];if(!_.instance||!ma(_.latestValues))continue;Mm(_.latestValues)&&_.updateSnapshot();const g=Tn(),y=_.measurePageBox();Us(g,y),py(p,_.latestValues,_.snapshot?_.snapshot.layoutBox:void 0,g)}return ma(this.latestValues)&&py(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var x;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(f||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=Xn.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Tn(),this.relativeTargetOrigin=Tn(),Ul(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Us(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Tn(),this.targetWithTransforms=Tn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),E7(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Us(this.target,this.layout.layoutBox),Xx(this.target,this.targetDelta)):Us(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Tn(),this.relativeTargetOrigin=Tn(),Ul(this.relativeTargetOrigin,this.target,w.target),Us(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Mm(this.parent.latestValues)||Fx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const f=this.getLead(),p=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Xn.timestamp&&(h=!1),h)return;const{layout:_,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(_||g))return;Us(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;P8(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Tn());const{target:w}=f;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fy(this.prevProjectionDelta.x,this.projectionDelta.x),fy(this.prevProjectionDelta.y,this.projectionDelta.y)),Vl(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!by(this.projectionDelta.x,this.prevProjectionDelta.x)||!by(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),f){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=mr(),this.projectionDelta=mr(),this.projectionDeltaWithTransform=mr()}setAnimationOrigin(f,p=!1){const h=this.snapshot,_=h?h.latestValues:{},g={...this.latestValues},y=mr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=Tn(),w=h?h.source:void 0,S=this.layout?this.layout.source:void 0,T=w!==S,M=this.getStack(),C=!M||M.members.length<=1,z=!!(T&&!C&&this.options.crossfade===!0&&!this.path.some(x9));this.animationProgress=0;let O;this.mixTargetDelta=L=>{const $=L/1e3;ky(y.x,f.x,$),ky(y.y,f.y,$),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ul(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),y9(this.relativeTarget,this.relativeTargetOrigin,x,$),O&&s9(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=Tn()),Us(O,this.relativeTarget)),T&&(this.animationValues=g,K7(g,_,this.latestValues,$,z,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var p,h,_;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(_=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||_.stop(),this.pendingAnimation&&(Lo(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=rn.update(()=>{rd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=yr(0)),this.currentAnimation=F7(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(a9),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:h,layout:_,latestValues:g}=f;if(!(!p||!h||!_)){if(this!==f&&this.layout&&_&&p5(this.options.animationType,this.layout.layoutBox,_.layoutBox)){h=this.target||Tn();const y=as(this.layout.layoutBox.x);h.x.min=f.target.x.min,h.x.max=h.x.min+y;const x=as(this.layout.layoutBox.y);h.y.min=f.target.y.min,h.y.max=h.y.min+x}Us(p,h),hr(p,g),Vl(this.projectionDeltaWithTransform,this.layoutCorrected,p,g)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new i9),this.sharedNodes.get(f).add(p);const _=p.options.initialPromotionConfig;p.promote({transition:_?_.transition:void 0,preserveFollowOpacity:_&&_.shouldPreserveFollowOpacity?_.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var p;const{layoutId:f}=this.options;return f?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:f}=this.options;return f?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:h}={}){const _=this.getStack();_&&_.promote(this,h),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:h}=f;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const _={};h.z&&Gh("z",f,_,this.animationValues);for(let g=0;g<Qh.length;g++)Gh(`rotate${Qh[g]}`,f,_,this.animationValues),Gh(`skew${Qh[g]}`,f,_,this.animationValues);f.render();for(const g in _)f.setStaticValue(g,_[g]),this.animationValues&&(this.animationValues[g]=_[g]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=ad(p==null?void 0:p.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none";return}const _=this.getLead();if(!this.projectionDelta||!this.layout||!_.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=ad(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!ma(this.latestValues)&&(f.transform=h?h({},""):"none",this.hasProjected=!1);return}f.visibility="";const g=_.animationValues||_.latestValues;this.applyTransformsToTarget();let y=o9(this.projectionDeltaWithTransform,this.treeScale,g);h&&(y=h(g,y)),f.transform=y;const{x,y:w}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,_.animationValues?f.opacity=_===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:f.opacity=_===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in Kl){if(g[S]===void 0)continue;const{correct:T,applyTo:M,isCSSVariable:C}=Kl[S],z=y==="none"?g[S]:T(g[S],_);if(M){const O=M.length;for(let L=0;L<O;L++)f[M[L]]=z}else C?this.options.visualElement.renderState.vars[S]=z:f[S]=z}this.options.layoutId&&(f.pointerEvents=_===this?ad(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var p;return(p=f.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(vy),this.root.sharedNodes.clear()}}}function l9(t){t.updateLayout()}function c9(t){var o;const s=((o=t.resumeFrom)==null?void 0:o.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&s&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,f=s.source!==t.layout.source;u==="size"?Ys(y=>{const x=f?s.measuredBox[y]:s.layoutBox[y],w=as(x);x.min=a[y].min,x.max=x.min+w}):p5(u,s.layoutBox,a)&&Ys(y=>{const x=f?s.measuredBox[y]:s.layoutBox[y],w=as(a[y]);x.max=x.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+w)});const p=mr();Vl(p,a,s.layoutBox);const h=mr();f?Vl(h,t.applyTransform(c,!0),s.measuredBox):Vl(h,a,s.layoutBox);const _=!d5(p);let g=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:w}=y;if(x&&w){const S=Tn();Ul(S,s.layoutBox,x.layoutBox);const T=Tn();Ul(T,a,w.layoutBox),f5(S,T)||(g=!0),y.options.layoutRoot&&(t.relativeTarget=T,t.relativeTargetOrigin=S,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:s,delta:h,layoutDelta:p,hasLayoutChanged:_,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function u9(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function d9(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function f9(t){t.clearSnapshot()}function vy(t){t.clearMeasurements()}function wy(t){t.isLayoutDirty=!1}function h9(t){const{visualElement:s}=t.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),t.resetTransform()}function Sy(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function m9(t){t.resolveTargetDelta()}function p9(t){t.calcProjection()}function _9(t){t.resetSkewAndRotation()}function g9(t){t.removeLeadSnapshot()}function ky(t,s,o){t.translate=_n(s.translate,0,o),t.scale=_n(s.scale,1,o),t.origin=s.origin,t.originPoint=s.originPoint}function jy(t,s,o,a){t.min=_n(s.min,o.min,a),t.max=_n(s.max,o.max,a)}function y9(t,s,o,a){jy(t.x,s.x,o.x,a),jy(t.y,s.y,o.y,a)}function x9(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const b9={duration:.45,ease:[.4,0,.1,1]},Cy=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Ty=Cy("applewebkit/")&&!Cy("chrome/")?Math.round:Ws;function Ey(t){t.min=Ty(t.min),t.max=Ty(t.max)}function v9(t){Ey(t.x),Ey(t.y)}function p5(t,s,o){return t==="position"||t==="preserve-aspect"&&!T7(xy(s),xy(o),.2)}function w9(t){var s;return t!==t.root&&((s=t.scroll)==null?void 0:s.wasRoot)}const S9=m5({attachResizeListener:(t,s)=>Jl(t,"resize",s),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Kh={current:void 0},_5=m5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Kh.current){const t=new S9({});t.mount(window),t.setOptions({layoutScroll:!0}),Kh.current=t}return Kh.current},resetTransform:(t,s)=>{t.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),k9={pan:{Feature:V7},drag:{Feature:I7,ProjectionNode:_5,MeasureLayout:l5}};function My(t,s,o){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,u=a[c];u&&rn.postRender(()=>u(s,lc(s)))}class j9 extends zo{mount(){const{current:s}=this.node;s&&(this.unmount=Xw(s,(o,a)=>(My(this.node,a,"Start"),c=>My(this.node,c,"End"))))}unmount(){}}class C9 extends zo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=oc(Jl(this.node.current,"focus",()=>this.onFocus()),Jl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ry(t,s,o){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),u=a[c];u&&rn.postRender(()=>u(s,lc(s)))}class T9 extends zo{mount(){const{current:s}=this.node;s&&(this.unmount=Kw(s,(o,a)=>(Ry(this.node,a,"Start"),(c,{success:u})=>Ry(this.node,c,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Bm=new WeakMap,Zh=new WeakMap,E9=t=>{const s=Bm.get(t.target);s&&s(t)},M9=t=>{t.forEach(E9)};function R9({root:t,...s}){const o=t||document;Zh.has(o)||Zh.set(o,{});const a=Zh.get(o),c=JSON.stringify(s);return a[c]||(a[c]=new IntersectionObserver(M9,{root:t,...s})),a[c]}function N9(t,s,o){const a=R9(s);return Bm.set(t,o),a.observe(t),()=>{Bm.delete(t),a.unobserve(t)}}const A9={some:0,all:1};class D9 extends zo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:s={}}=this.node.getProps(),{root:o,margin:a,amount:c="some",once:u}=s,f={root:o?o.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:A9[c]},p=h=>{const{isIntersecting:_}=h;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=_?g:y;x&&x(h)};return N9(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:o}=this.node;["amount","margin","root"].some(L9(s,o))&&this.startObserver()}unmount(){}}function L9({viewport:t={}},{viewport:s={}}={}){return o=>t[o]!==s[o]}const O9={inView:{Feature:D9},tap:{Feature:T9},focus:{Feature:C9},hover:{Feature:j9}},B9={layout:{ProjectionNode:_5,MeasureLayout:l5}},z9={...v7,...O9,...k9,...B9},ln=B8(z9,Q8);function $9(t){return dt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(t)}function P9(t){return dt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"},child:[]}]})(t)}function zm(t){return dt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"},child:[]}]})(t)}function H9(t){return dt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"},child:[]}]})(t)}const Ny=[{to:"home",label:"HOME",icon:r.jsx(n3,{size:13})},{to:"about",label:"ABOUT",icon:r.jsx(V6,{size:12})},{to:"skills",label:"SKILLS",icon:r.jsx(A2,{size:12})},{to:"experience",label:"EXPERIENCE",icon:r.jsx(e0,{size:12})},{to:"projects",label:"PROJECTS",icon:r.jsx(U6,{size:13})},{to:"contact",label:"CONTACT",icon:r.jsx(i3,{size:12})}],I9=()=>{const[t,s]=b.useState(!1),[o,a]=b.useState(!1);return b.useEffect(()=>{const c=()=>a(window.scrollY>40);return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),r.jsxs(ln.nav,{initial:{y:-80,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,ease:"easeOut"},className:`sticky top-0 left-0 z-50 w-full transition-all duration-300 ${o?"bg-[#060d1aee] backdrop-blur-md border-b border-yellow-400/10 shadow-lg shadow-black/30":"bg-transparent"}`,children:[r.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"relative",children:r.jsx("img",{src:a0,alt:"Vivek",className:"h-10 w-10 border-2 object-cover object-center border-yellow-400 rounded-full animate-superman"})}),r.jsxs("div",{className:"leading-tight",children:[r.jsx("p",{className:"text-base font-semibold text-white",style:{fontFamily:"Fredoka, sans-serif"},children:"Vivek Verma"}),r.jsx("p",{className:"text-[10px] text-yellow-400/80 tracking-widest uppercase mono",children:"Full Stack Dev"})]})]}),r.jsx("ul",{className:"hidden md:flex items-center gap-1",children:Ny.map(c=>r.jsx("li",{children:r.jsx(fd.Link,{to:c.to,smooth:!0,duration:500,offset:-70,spy:!0,activeClass:"text-yellow-400",className:"px-3 py-1.5 text-[13px] tracking-widest text-gray-300 hover:text-yellow-400 transition-all duration-200 cursor-pointer rounded-md hover:bg-yellow-400/5",children:c.label})},c.to))}),r.jsx("div",{className:"hidden md:flex items-center gap-3",children:r.jsxs("a",{href:_m,download:!0,className:"flex items-center gap-2 px-4 py-1.5 text-sm text-black bg-yellow-400 hover:bg-yellow-300 rounded-lg font-semibold transition-all duration-200 active:scale-95",children:[r.jsx(zm,{size:16}),"Resume"]})}),r.jsx("button",{className:"md:hidden text-white",onClick:()=>s(!t),"aria-label":"Toggle menu",children:t?r.jsx(t3,{size:28}):r.jsx(s3,{size:28})})]}),r.jsx(Nx,{children:t&&r.jsx(ln.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.25},className:"md:hidden overflow-hidden bg-[#0b1a33] border-t border-yellow-400/10",children:r.jsxs("ul",{className:"flex flex-col px-6 py-4 gap-3",children:[Ny.map(c=>r.jsx("li",{children:r.jsxs(fd.Link,{to:c.to,smooth:!0,duration:500,offset:-70,onClick:()=>s(!1),className:"flex items-center gap-3 text-sm text-gray-300 hover:text-yellow-400 transition-colors py-1 cursor-pointer",children:[r.jsx("span",{className:"text-yellow-400/60",children:c.icon}),c.label]})},c.to)),r.jsx("li",{className:"pt-2 border-t border-yellow-400/10",children:r.jsxs("a",{href:_m,download:!0,onClick:()=>s(!1),className:"flex items-center gap-2 text-sm font-semibold text-black bg-yellow-400 px-4 py-2 rounded-lg w-max",children:[r.jsx(zm,{size:15})," Download Resume"]})})]})})})]})},$m=[{id:1,title:"QuickTalk (MERN)",image:"/Portfolio_Vivek/Projects/images/QuickTalk.png",description:` QuickTalk, a dynamic web application designed to connect people and communicate with each other . 
  This platform enables users to send meassage to any people through internet ,.

  ✨ Key Features:
  - User-Friendly Design: Seamlessly navigate and enjoy a clean, intuitive interface.
  - Login/Signup Functionality: Secure your account to unlock advanced features.
  - Send and recieve message real time with minimum delay through socket.io
  - Contact Us Section: A direct channel for user support and feedback.
  - Responsive Design: Optimized for devices of all sizes, ensuring a smooth experience everywhere.

`,github:"https://github.com/verma-vivek-923/CoolBlogs.com.git",demo:"https://quick-talk-caht-app.vercel.app//"},{id:2,title:"CoolBlog.com (MERN)",image:"/Portfolio_Vivek/Projects/images/Coolblog.png",video:"/Portfolio_Vivek/Projects/videos/Coolblog.mp4",description:` CoolBlog, a dynamic web application designed to connect people through their thoughts and stories. 
  This platform enables users to read and share blogs effortlessly, fostering a vibrant community of readers and writers.

  ✨ Key Features:
  - User-Friendly Design: Seamlessly navigate and enjoy a clean, intuitive interface.
  - Login/Signup Functionality: Secure your account to unlock advanced features.
  - Dedicated Blog Pages: Dive into specific blogs with beautifully crafted pages for an immersive reading experience.
  - Contact Us Section: A direct channel for user support and feedback.
  - Admin Control: Manage and moderate content effectively.
  - Responsive Design: Optimized for devices of all sizes, ensuring a smooth experience everywhere.

  💡 Highlights:
  - Read Without Limits: Browse and enjoy blogs without the need to sign up.
  - Express Yourself: Create an account as an admin to share your thoughts and contribute to the community.`,github:"https://github.com/verma-vivek-923/CoolBlogs.com.git",demo:"https://cool-blogs-com.vercel.app/"},{id:3,title:"Library.com (MERN))",image:"/Portfolio_Vivek/Projects/images/Library.png",video:"/Portfolio_Vivek/Projects/videos/Library.mp4",description:`a full-stack bookstore web app built using the MERN stack! This platform allows users to explore, read, and purchase books online seamlessly. Books that are available for free are prominently featured on the homepage, while users can also browse the complete collection of books effortlessly.

      Key Features:
      User Authentication: Login and signup functionality secured with email-based authentication to ensure a safe and personalized user experience.
      Dark Mode Toggle: A sleek and modern dark mode feature for a visually appealing and comfortable reading experience, perfect for night-time browsing.
      
      Technologies Used:
      Frontend: React.js with Tailwind CSS for a responsive and dynamic user interface.
      Backend: Node.js and Express.js for a robust and scalable server-side architecture.
      Database: MongoDB for efficient data storage and management.
      Authentication: JSON Web Tokens (JWT) and bcrypt for secure user sessions and data protection.`,github:"https://github.com/verma-vivek-923/BookStore_Webapp.git"},{id:4,title:"Docx To Pdf Converter",image:"/Portfolio_Vivek/Projects/images/DocToPdf.png",video:"/Portfolio_Vivek/Projects/videos/DocToPdf.mp4",description:"A fun interactive bubble game where users match numbers to score points.",github:"https://github.com/verma-vivek-923/Word_To_PDF-Converter.git"},{id:5,title:"Currency Converter",image:"/Portfolio_Vivek/Projects/images/Currency_Converter.png",video:"/Portfolio_Vivek/Projects/videos/currency.mp4",description:` a fully responsive Currency Converter Web App!

      This app allows users to input an amount and convert it to a specified currency. Users can select their currencies using the "From" and "To" dropdown menus. After selecting both currencies, simply click the "Exchange" button, and the converted amount will be displayed in the message box.
      
      The app also features country flags corresponding to the selected currencies, displayed just before the currency value. Additionally, users can easily swap the "From" and "To" currencies by clicking the change icon.
      I'd love to hear your feedback on this project! 😊`,github:"https://github.com/verma-vivek-923/Currency_Converter.git"},{id:6,title:"To-Do List",image:"/Portfolio_Vivek/Projects/images/ToDo.png",video:"/Portfolio_Vivek/Projects/videos/ToDo.mp4",description:` a fully responsive To-Do Web App built with JavaScript!

      This app allows users to easily manage their tasks. You can create a new task by typing it into the input bar and either clicking the "Add" button or pressing the "Enter" key. Once a task is completed, you can mark it as done by checking the checkbox, and you can also delete tasks from the list by clicking the delete icon.
      
      One of the best features is that your tasks are saved and accessible even after you reload the page or exit the app. Whenever you return to your To-Do list, your tasks will be just as you left them.
      `,github:"https://github.com/verma-vivek-923/To-Do_App"},{id:7,title:"Tic-Tac-Toe game",image:"/Portfolio_Vivek/Projects/images/Tic_Tac_Toe.png",video:"/Portfolio_Vivek/Projects/videos/Tic_Tac_Toe.mp4",description:` a fully responsive Tic-Tac-Toe game built with HTML, CSS, and JavaScript!

      This game is easy to play and features a user-friendly interface. It starts in dual-player mode by default, so you can enjoy a match with a friend. If you prefer to play solo, simply check the "Play with Computer" checkbox, and you'll be able to challenge the computer.
      
      The game also includes a "Reset/New Game" button, which displays "Reset" during gameplay and changes to "New Game" once the game is complete. This makes it easy to quickly start a new round.`,github:"https://github.com/verma-vivek-923/Tic-Tac-Toe_Game"},{id:8,title:"Rock-Paper-Scissor game",image:"/Portfolio_Vivek/Projects/images/RockPaperScissor.png",video:"/Portfolio_Vivek/Projects/videos/RockPaperScissor.mp4",description:`a fully responsive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript!
      In this game, the player selects one of the three options: rock, paper, or scissors. The computer then makes its choice. If your choice beats the computer's, you win, and your score increases by 1, with a green message displayed at the bottom of the screen. If the computer wins, its score increases by 1, and a red message appears. If both choose the same, it's a draw, and a message in a blackish color is shown.`,github:"https://github.com/verma-vivek-923/Rock-Paper-Scissor_Game"},{id:9,title:"Bubble Game",image:"/Portfolio_Vivek/Projects/images/bubble_game.png",video:"/Portfolio_Vivek/Projects/videos/bubble_game.mp4",description:`a fully responsive Bubble Game web app, created with HTML, CSS, and JavaScript.

      The game generates different random numbers in each bubble and also produces a random "Hit" number. The player needs to click on the bubble that matches the "Hit" number. When the numbers match, the score increases by 10 points, and new random numbers are generated for the bubbles and the "Hit" number.
      
      Players have a 30-second time limit to play the game. Once the time runs out, the game ends and displays the final score on the screen.
      
      The game also features a "Pause" button to pause the game and a "Reset" button at the bottom of the screen, allowing players to reset the game at any time.`,github:"https://github.com/verma-vivek-923/Bubble-Game"}],V9=()=>{const{id:t}=R4(),s=$m.find(o=>o.id===parseInt(t));return s?r.jsx("div",{className:"min-h-screen py-8 px-4 md:px-10",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsxs(Fl,{to:"/",className:"flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-6",children:[r.jsx(B6,{size:14})," Back to Portfolio"]}),r.jsxs(ln.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5},className:"glow-card rounded-2xl overflow-hidden",children:[s.video&&r.jsxs("video",{controls:!0,autoPlay:!0,muted:!0,className:"w-full max-h-96 object-cover bg-black",children:[r.jsx("source",{src:s.video,type:"video/mp4"}),"Your browser does not support the video tag."]}),r.jsxs("div",{className:"p-6 md:p-8",children:[r.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4 mb-6",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mb-1",children:s.title}),r.jsx("div",{className:"flex items-center gap-2",children:s.demo&&r.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-green-400",children:[r.jsxs("span",{className:"relative flex h-2 w-2",children:[r.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"}),r.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-green-500"})]}),"Live"]})})]}),r.jsxs("div",{className:"flex gap-3",children:[s.demo&&r.jsxs("a",{href:s.demo,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl hover:bg-cyan-500/20 transition-all text-sm",children:[r.jsx(D2,{size:12})," Live Demo"]}),r.jsxs("a",{href:s.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-xl hover:bg-yellow-400/20 transition-all text-sm",children:[r.jsx(gr,{size:14})," Source Code"]})]})]}),r.jsxs("div",{className:"border-t border-white/5 pt-6",children:[r.jsx("h3",{className:"text-gray-400 text-sm uppercase tracking-widest mb-3",children:"About This Project"}),r.jsx("p",{className:"text-gray-300 leading-relaxed whitespace-pre-line",children:s.description})]})]})]})]})}):r.jsx("div",{className:"min-h-screen flex items-center justify-center",children:r.jsx("h2",{className:"text-2xl text-gray-400",children:"Project not found"})})};function Pm(){return Pm=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Pm.apply(this,arguments)}var U9={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,s){},onStringTyped:function(t,s){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,s){},onTypingResumed:function(t,s){},onReset:function(t){},onStop:function(t,s){},onStart:function(t,s){},onDestroy:function(t){}},Y9=new(function(){function t(){}var s=t.prototype;return s.load=function(o,a,c){if(o.el=typeof c=="string"?document.querySelector(c):c,o.options=Pm({},U9,a),o.isInput=o.el.tagName.toLowerCase()==="input",o.attr=o.options.attr,o.bindInputFocusEvents=o.options.bindInputFocusEvents,o.showCursor=!o.isInput&&o.options.showCursor,o.cursorChar=o.options.cursorChar,o.cursorBlinking=!0,o.elContent=o.attr?o.el.getAttribute(o.attr):o.el.textContent,o.contentType=o.options.contentType,o.typeSpeed=o.options.typeSpeed,o.startDelay=o.options.startDelay,o.backSpeed=o.options.backSpeed,o.smartBackspace=o.options.smartBackspace,o.backDelay=o.options.backDelay,o.fadeOut=o.options.fadeOut,o.fadeOutClass=o.options.fadeOutClass,o.fadeOutDelay=o.options.fadeOutDelay,o.isPaused=!1,o.strings=o.options.strings.map(function(_){return _.trim()}),o.stringsElement=typeof o.options.stringsElement=="string"?document.querySelector(o.options.stringsElement):o.options.stringsElement,o.stringsElement){o.strings=[],o.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var u=Array.prototype.slice.apply(o.stringsElement.children),f=u.length;if(f)for(var p=0;p<f;p+=1)o.strings.push(u[p].innerHTML.trim())}for(var h in o.strPos=0,o.currentElContent=this.getCurrentElContent(o),o.currentElContent&&o.currentElContent.length>0&&(o.strPos=o.currentElContent.length-1,o.strings.unshift(o.currentElContent)),o.sequence=[],o.strings)o.sequence[h]=h;o.arrayPos=0,o.stopNum=0,o.loop=o.options.loop,o.loopCount=o.options.loopCount,o.curLoop=0,o.shuffle=o.options.shuffle,o.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},o.typingComplete=!1,o.autoInsertCss=o.options.autoInsertCss,o.autoInsertCss&&(this.appendCursorAnimationCss(o),this.appendFadeOutAnimationCss(o))},s.getCurrentElContent=function(o){return o.attr?o.el.getAttribute(o.attr):o.isInput?o.el.value:o.contentType==="html"?o.el.innerHTML:o.el.textContent},s.appendCursorAnimationCss=function(o){var a="data-typed-js-cursor-css";if(o.showCursor&&!document.querySelector("["+a+"]")){var c=document.createElement("style");c.setAttribute(a,"true"),c.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(c)}},s.appendFadeOutAnimationCss=function(o){var a="data-typed-fadeout-js-css";if(o.fadeOut&&!document.querySelector("["+a+"]")){var c=document.createElement("style");c.setAttribute(a,"true"),c.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(c)}},t}()),Ay=new(function(){function t(){}var s=t.prototype;return s.typeHtmlChars=function(o,a,c){if(c.contentType!=="html")return a;var u=o.substring(a).charAt(0);if(u==="<"||u==="&"){var f;for(f=u==="<"?">":";";o.substring(a+1).charAt(0)!==f&&!(1+ ++a>o.length););a++}return a},s.backSpaceHtmlChars=function(o,a,c){if(c.contentType!=="html")return a;var u=o.substring(a).charAt(0);if(u===">"||u===";"){var f;for(f=u===">"?"<":"&";o.substring(a-1).charAt(0)!==f&&!(--a<0););a--}return a},t}()),W9=function(){function t(o,a){Y9.load(this,a,o),this.begin()}var s=t.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(o){o===void 0&&(o=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,o&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var o=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){o.strPos===0?o.typewrite(o.strings[o.sequence[o.arrayPos]],o.strPos):o.backspace(o.strings[o.sequence[o.arrayPos]],o.strPos)},this.startDelay)},s.typewrite=function(o,a){var c=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var u=this.humanizer(this.typeSpeed),f=1;this.pause.status!==!0?this.timeout=setTimeout(function(){a=Ay.typeHtmlChars(o,a,c);var p=0,h=o.substring(a);if(h.charAt(0)==="^"&&/^\^\d+/.test(h)){var _=1;_+=(h=/\d+/.exec(h)[0]).length,p=parseInt(h),c.temporaryPause=!0,c.options.onTypingPaused(c.arrayPos,c),o=o.substring(0,a)+o.substring(a+_),c.toggleBlinking(!0)}if(h.charAt(0)==="`"){for(;o.substring(a+f).charAt(0)!=="`"&&(f++,!(a+f>o.length)););var g=o.substring(0,a),y=o.substring(g.length+1,a+f),x=o.substring(a+f+1);o=g+y+x,f--}c.timeout=setTimeout(function(){c.toggleBlinking(!1),a>=o.length?c.doneTyping(o,a):c.keepTyping(o,a,f),c.temporaryPause&&(c.temporaryPause=!1,c.options.onTypingResumed(c.arrayPos,c))},p)},u):this.setPauseStatus(o,a,!0)},s.keepTyping=function(o,a,c){a===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var u=o.substring(0,a+=c);this.replaceText(u),this.typewrite(o,a)},s.doneTyping=function(o,a){var c=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){c.backspace(o,a)},this.backDelay))},s.backspace=function(o,a){var c=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var u=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){a=Ay.backSpaceHtmlChars(o,a,c);var f=o.substring(0,a);if(c.replaceText(f),c.smartBackspace){var p=c.strings[c.arrayPos+1];c.stopNum=p&&f===p.substring(0,a)?a:0}a>c.stopNum?(a--,c.backspace(o,a)):a<=c.stopNum&&(c.arrayPos++,c.arrayPos===c.strings.length?(c.arrayPos=0,c.options.onLastStringBackspaced(),c.shuffleStringsIfNeeded(),c.begin()):c.typewrite(c.strings[c.sequence[c.arrayPos]],a))},u)}else this.setPauseStatus(o,a,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(o,a,c){this.pause.typewrite=c,this.pause.curString=o,this.pause.curStrPos=a},s.toggleBlinking=function(o){this.cursor&&(this.pause.status||this.cursorBlinking!==o&&(this.cursorBlinking=o,o?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(o){return Math.round(Math.random()*o/2)+o},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var o=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){o.arrayPos++,o.replaceText(""),o.strings.length>o.arrayPos?o.typewrite(o.strings[o.sequence[o.arrayPos]],0):(o.typewrite(o.strings[0],0),o.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(o){this.attr?this.el.setAttribute(this.attr,o):this.isInput?this.el.value=o:this.contentType==="html"?this.el.innerHTML=o:this.el.textContent=o},s.bindFocusEvents=function(){var o=this;this.isInput&&(this.el.addEventListener("focus",function(a){o.stop()}),this.el.addEventListener("blur",function(a){o.el.value&&o.el.value.length!==0||o.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const F9=b.memo(({style:t,className:s,typedRef:o,parseRef:a,stopped:c,children:u,startWhenVisible:f,...p})=>{const h=b.useRef(null),_=b.useMemo(()=>{var y;return[...Object.values(p).filter(x=>typeof x=="boolean"||typeof x=="number"||typeof x=="string"),(y=p.strings)==null?void 0:y.join(",")]},[p]);b.useEffect(()=>{const y=a&&a(h)||h.current,x=new W9(y,{...p});if((c||f)&&(x==null||x.stop()),f){const w=new IntersectionObserver(([S])=>{S.isIntersecting&&(x==null||x.start(),w.disconnect())});w.observe(y)}return o&&x&&o(x),()=>{x.destroy()}},_);const g=u?ii.cloneElement(u,{ref:h}):ii.createElement("span",{style:t,ref:h});return ii.createElement("span",{style:t,className:s,"data-testid":"react-typed"},g)});function g5(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(t)}function X9(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},child:[]}]})(t)}function y5(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(t)}function x5(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(t)}function q9(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"},child:[]}]})(t)}function Q9(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"},child:[]}]})(t)}function b5(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z"},child:[]}]})(t)}function v5(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(t)}function G9(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(t)}function K9(t){return dt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 22.525H0l12-21.05 12 21.05z"},child:[]}]})(t)}const Z9=[{icon:r.jsx(gr,{size:20}),href:"https://github.com/verma-vivek-923",label:"GitHub",color:"hover:text-white"},{icon:r.jsx(Jm,{size:20}),href:"https://www.linkedin.com/in/vivek-verma-v022003",label:"LinkedIn",color:"hover:text-blue-400"},{icon:r.jsx(Zm,{size:20}),href:"https://instagram.com/verma.vivek.022003",label:"Instagram",color:"hover:text-pink-400"},{icon:r.jsx(X9,{size:18}),href:"mailto:verma022003@gmail.com",label:"Gmail",color:"hover:text-red-400"}],Hm=[{label:"Projects Built",value:"10+"},{label:"Technologies",value:"15+"},{label:"GitHub Repos",value:"20+"},{label:"Years Learning",value:"2+"}],J9=[...Hm,...Hm],eS=()=>r.jsxs("section",{name:"home",className:"relative min-h-[90vh] flex items-center overflow-hidden",children:[r.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"}),r.jsx("div",{className:"absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"}),r.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl pointer-events-none"}),r.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-10 w-full py-16",children:[r.jsxs("div",{className:"flex flex-col-reverse md:flex-row items-center justify-between gap-12",children:[r.jsxs(ln.div,{initial:{x:-60,opacity:0},animate:{x:0,opacity:1},transition:{duration:.7,delay:.2},className:"flex-1 max-w-xl",children:[r.jsxs("div",{className:"mono text-yellow-400/70 text-sm tracking-widest mb-3 flex items-center gap-2",children:[r.jsx("span",{className:"inline-block w-8 h-[1px] bg-yellow-400/40"}),"FULL STACK DEVELOPER"]}),r.jsxs("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2",style:{fontFamily:"Fredoka, sans-serif"},children:[r.jsx("span",{className:"text-white",children:"Hi, I'm"})," ",r.jsx("span",{className:"gradient-text",children:"Vivek"})]}),r.jsxs("div",{className:"text-2xl md:text-3xl mb-6 text-gray-300 flex items-center gap-2 flex-wrap",children:[r.jsx("span",{children:"I build"}),r.jsx("span",{className:"text-yellow-400 font-semibold",children:r.jsx(F9,{strings:["Web Applications","REST APIs","Chat Apps","Full Stack Projects"],typeSpeed:50,backSpeed:35,loop:!0})})]}),r.jsx("p",{className:"text-gray-400 leading-relaxed mb-8 text-base max-w-lg",children:"A passionate Full Stack Developer from Indore, India, crafting scalable web experiences with the MERN stack. I love turning complex problems into clean, elegant solutions."}),r.jsxs("div",{className:"flex flex-wrap gap-4 mb-8",children:[r.jsx(fd.Link,{to:"projects",smooth:!0,duration:500,offset:-70,children:r.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 active:scale-95 transition-all duration-200",children:["View Projects ",r.jsx(H9,{size:18})]})}),r.jsx("a",{href:_m,download:!0,children:r.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 border border-yellow-400/40 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400/10 active:scale-95 transition-all duration-200",children:[r.jsx(zm,{size:18})," Resume"]})})]}),r.jsx("div",{className:"flex items-center gap-5",children:Z9.map(t=>r.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer","aria-label":t.label,className:`text-gray-500 ${t.color} transition-all duration-200 hover:scale-110`,children:t.icon},t.label))})]}),r.jsx(ln.div,{initial:{x:60,opacity:0,scale:.9},animate:{x:0,opacity:1,scale:1},transition:{duration:.7,delay:.3},className:"flex-shrink-0 flex justify-center",children:r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 via-cyan-500/20 to-purple-500/20 blur-xl scale-110"}),r.jsx("img",{src:a0,alt:"Vivek Verma",className:"h-56 w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 border-4 object-cover object-center border-yellow-400 rounded-full animate-superman relative z-10"}),r.jsx("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0b1a33] border border-yellow-400/30 px-4 py-1.5 rounded-full z-20 whitespace-nowrap",children:r.jsx("span",{className:"text-xs text-yellow-400 mono tracking-wider",children:"Available for hire ✓"})})]})})]}),r.jsxs(ln.div,{initial:{y:40,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,delay:.6},className:"mt-16",children:[r.jsx("div",{className:"hidden md:grid md:grid-cols-4 gap-4",children:Hm.map(t=>r.jsxs("div",{className:"glow-card rounded-2xl p-5 text-center",children:[r.jsx("div",{className:"stat-number",children:t.value}),r.jsx("div",{className:"text-gray-400 text-sm mt-1",children:t.label})]},t.label))}),r.jsx("div",{className:"md:hidden overflow-hidden",children:r.jsx(ln.div,{className:"flex gap-4 w-max",animate:{x:["0%","-50%"]},transition:{duration:15,repeat:1/0,ease:"linear"},children:J9.map((t,s)=>r.jsxs("div",{className:"glow-card w-36 flex-shrink-0 rounded-2xl p-4 text-center",children:[r.jsx("div",{className:"stat-number text-2xl",children:t.value}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:t.label})]},s))})})]})]})]}),tS=[{icon:r.jsx(O2,{className:"text-yellow-400"}),label:"Location",value:"Indore, Madhya Pradesh, India"},{icon:r.jsx(t0,{className:"text-cyan-400"}),label:"Education",value:"B.Tech in Computer Science"},{icon:r.jsx($9,{className:"text-pink-400"}),label:"Email",value:"web.vivek.022003@gmail.com"},{icon:r.jsx(A2,{className:"text-purple-400"}),label:"Focus",value:"MERN Stack & System Design"}],nS=["Open Source","System Design","Problem Solving","UI/UX Design","Chess","Anime"],sS=()=>r.jsxs("section",{name:"about",className:"relative py-20 overflow-hidden",children:[r.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"}),r.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-10",children:[r.jsxs(ln.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[r.jsx("div",{className:"mono text-yellow-400/60 text-sm tracking-widest mb-2",children:"GET TO KNOW ME"}),r.jsx("h2",{className:"text-4xl md:text-5xl font-bold gradient-text section-heading",children:"About Me"})]}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[r.jsx(ln.div,{initial:{x:-50,opacity:0},whileInView:{x:0,opacity:1},viewport:{once:!0},transition:{duration:.7},className:"relative flex justify-center",children:r.jsxs("div",{className:"relative w-72 h-72 md:w-80 md:h-80",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-cyan-500/20 rounded-2xl blur-2xl"}),r.jsx("img",{src:a0,alt:"About Vivek",className:"w-full h-full object-cover object-center rounded-2xl border border-yellow-400/20 relative z-10"}),r.jsxs("div",{className:"absolute -right-6 -bottom-6 bg-[#0f2244] border border-yellow-400/20 rounded-xl p-4 shadow-xl z-20",children:[r.jsx("div",{className:"text-yellow-400 text-2xl font-bold mono",children:"2+"}),r.jsx("div",{className:"text-gray-400 text-xs",children:"Years of coding"})]}),r.jsxs("div",{className:"absolute -left-6 top-8 bg-[#0f2244] border border-cyan-400/20 rounded-xl p-4 shadow-xl z-20",children:[r.jsx("div",{className:"text-cyan-400 text-2xl font-bold mono",children:"10+"}),r.jsx("div",{className:"text-gray-400 text-xs",children:"Projects Done"})]})]})}),r.jsxs(ln.div,{initial:{x:50,opacity:0},whileInView:{x:0,opacity:1},viewport:{once:!0},transition:{duration:.7},className:"space-y-5",children:[r.jsx("h3",{className:"text-2xl text-white font-semibold",children:"Building the future, one commit at a time 🚀"}),r.jsx("p",{className:"text-gray-400 leading-relaxed",children:"I'm a Full Stack Developer passionate about creating impactful web applications. My journey started with curiosity about how websites work, and now I build them professionally — from database design to polished UIs."}),r.jsxs("p",{className:"text-gray-400 leading-relaxed",children:["I specialize in the ",r.jsx("span",{className:"text-yellow-400 font-medium",children:"MERN Stack"})," (MongoDB, Express, React, Node.js), with a strong focus on clean code, real-time features, and seamless user experiences. When I'm not coding, I'm exploring system design concepts or contributing to open source."]}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:tS.map(t=>r.jsxs("div",{className:"flex items-start gap-3 glow-card rounded-xl p-3",children:[r.jsx("div",{className:"mt-0.5",children:t.icon}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xs text-gray-500 uppercase tracking-wider",children:t.label}),r.jsx("div",{className:"text-sm text-gray-200",children:t.value})]})]},t.label))}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[r.jsx(L2,{className:"text-red-400",size:13}),r.jsx("span",{className:"text-gray-400 text-sm",children:"Interests"})]}),r.jsx("div",{className:"flex flex-wrap gap-2",children:nS.map(t=>r.jsx("span",{className:"tech-badge",children:t},t))})]})]})]})]})]}),Dy=[{label:"Frontend",skills:[{name:"React.js",level:88,icon:r.jsx(N2,{className:"text-cyan-400"})},{name:"JavaScript",level:85,icon:r.jsx(y5,{className:"text-yellow-400"})},{name:"HTML5",level:92,icon:r.jsx(L6,{className:"text-orange-500"})},{name:"CSS3",level:85,icon:r.jsx(A6,{className:"text-blue-400"})},{name:"Tailwind CSS",level:90,icon:r.jsx(v5,{className:"text-cyan-300"})},{name:"Redux",level:72,icon:r.jsx(Q9,{className:"text-purple-400"})}]},{label:"Backend",skills:[{name:"Node.js",level:83,icon:r.jsx(R2,{className:"text-green-400"})},{name:"Express.js",level:85,icon:r.jsx(g5,{className:"text-gray-300"})},{name:"MongoDB",level:80,icon:r.jsx(x5,{className:"text-green-500"})},{name:"Socket.io",level:75,icon:r.jsx(b5,{className:"text-white"})},{name:"Python",level:65,icon:r.jsx(O6,{className:"text-yellow-300"})},{name:"REST APIs",level:88,icon:r.jsx(q9,{className:"text-orange-400"})}]},{label:"Tools & DevOps",skills:[{name:"Git & GitHub",level:88,icon:r.jsx(M2,{className:"text-orange-500"})},{name:"Docker",level:55,icon:r.jsx(D6,{className:"text-blue-400"})},{name:"Vercel",level:82,icon:r.jsx(K9,{className:"text-white"})},{name:"TypeScript",level:60,icon:r.jsx(G9,{className:"text-blue-400"})}]}],Ly=[{icon:r.jsx(N2,{size:28,className:"text-cyan-400"}),name:"React"},{icon:r.jsx(R2,{size:28,className:"text-green-400"}),name:"Node.js"},{icon:r.jsx(x5,{size:28,className:"text-green-500"}),name:"MongoDB"},{icon:r.jsx(g5,{size:28,className:"text-gray-300"}),name:"Express"},{icon:r.jsx(y5,{size:28,className:"text-yellow-400"}),name:"JavaScript"},{icon:r.jsx(v5,{size:28,className:"text-cyan-300"}),name:"Tailwind"},{icon:r.jsx(M2,{size:28,className:"text-orange-500"}),name:"Git"},{icon:r.jsx(b5,{size:28,className:"text-white"}),name:"Socket.io"}],iS=()=>{var o;const[t,s]=b.useState("Frontend");return r.jsxs("section",{name:"skills",className:"relative py-20 overflow-hidden",children:[r.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"}),r.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-10",children:[r.jsxs(ln.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[r.jsx("div",{className:"mono text-yellow-400/60 text-sm tracking-widest mb-2",children:"WHAT I WORK WITH"}),r.jsx("h2",{className:"text-4xl md:text-5xl font-bold gradient-text section-heading",children:"Skills & Technologies"})]}),r.jsx("div",{className:"overflow-hidden mb-12",children:r.jsx("div",{className:"flex gap-8 animate-[scroll_20s_linear_infinite]",style:{width:"max-content"},children:[...Ly,...Ly].map((a,c)=>r.jsxs("div",{className:"flex flex-col items-center gap-2 glow-card px-6 py-4 rounded-xl",children:[a.icon,r.jsx("span",{className:"text-xs text-gray-400",children:a.name})]},c))})}),r.jsx("div",{className:"flex flex-wrap gap-2 justify-center mb-8",children:Dy.map(a=>r.jsx("button",{onClick:()=>s(a.label),className:`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${t===a.label?"bg-yellow-400 text-black":"border border-yellow-400/20 text-gray-400 hover:border-yellow-400/40 hover:text-yellow-400"}`,children:a.label},a.label))}),r.jsx(ln.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto",children:(o=Dy.find(a=>a.label===t))==null?void 0:o.skills.map((a,c)=>r.jsxs(ln.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:c*.07},className:"glow-card rounded-xl p-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{children:a.icon}),r.jsx("span",{className:"text-sm text-gray-200",children:a.name})]}),r.jsxs("span",{className:"mono text-xs text-yellow-400",children:[a.level,"%"]})]}),r.jsx("div",{className:"skill-bar",children:r.jsx(ln.div,{className:"skill-fill",initial:{width:0},whileInView:{width:`${a.level}%`},viewport:{once:!0},transition:{duration:1.2,delay:c*.08,ease:"easeOut"}})})]},a.name))},t)]}),r.jsx("style",{children:`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `})]})},w5=[{type:"work",title:"Full Stack Developer (Freelance)",company:"Self-Employed",period:"Jan 2024 – Present",location:"Indore, India (Remote)",desc:"Built and deployed multiple full-stack web applications for clients using the MERN stack. Developed real-time chat features with Socket.io, REST APIs, and JWT authentication.",tags:["React","Node.js","MongoDB","Socket.io"]},{type:"work",title:"Open Source Contributor",company:"GitHub",period:"Aug 2023 – Present",location:"Remote",desc:"Actively maintaining personal open-source projects including a MERN chat app, blogging platform, and bookstore app. Solved issues and improved documentation for community projects.",tags:["React","Express","GitHub","REST APIs"]}],S5=[{type:"edu",title:"B.Tech – Computer Science & Engineering",company:"Institute of Engineering & Technology, DAVV",period:"2021 – 2025",location:"Indore, MP, India",desc:"Studied core CS fundamentals: Data Structures, Algorithms, DBMS, OS, CN, and Software Engineering. Developed multiple full-stack projects as part of curriculum and personal interest.",tags:["DSA","DBMS","OS","Networking"]},{type:"edu",title:"Higher Secondary (12th) – PCM",company:"Sanjay Gandhi Higher Secondary School",period:"2019 – 2021",location:"Indore, MP, India",desc:"Completed with distinction. Developed an early interest in computers and programming during this phase.",tags:["Mathematics","Physics","Chemistry"]}],Oy=({item:t,index:s})=>r.jsxs(ln.div,{initial:{opacity:0,x:t.type==="work"?-40:40},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:s*.1},className:"flex gap-4",children:[r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${t.type==="work"?"border-yellow-400/40 bg-yellow-400/10 text-yellow-400":"border-cyan-400/40 bg-cyan-400/10 text-cyan-400"}`,children:t.type==="work"?r.jsx(e0,{size:16}):r.jsx(t0,{size:16})}),s<(t.type==="work"?w5.length:S5.length)-1&&r.jsx("div",{className:"timeline-line mt-1"})]}),r.jsxs("div",{className:"glow-card rounded-xl p-5 mb-5 flex-1",children:[r.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-2",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white",children:t.title}),r.jsx("div",{className:`text-sm font-medium ${t.type==="work"?"text-yellow-400":"text-cyan-400"}`,children:t.company})]}),r.jsxs("div",{className:"text-right",children:[r.jsx("div",{className:"mono text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full",children:t.period}),r.jsx("div",{className:"text-xs text-gray-500 mt-1",children:t.location})]})]}),r.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-3",children:t.desc}),r.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(o=>r.jsx("span",{className:"tech-badge",children:o},o))})]})]}),oS=()=>r.jsxs("section",{name:"experience",className:"relative py-20 overflow-hidden",children:[r.jsx("div",{className:"absolute top-0 right-0 w-72 h-72 bg-yellow-400/4 rounded-full blur-3xl"}),r.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-10",children:[r.jsxs(ln.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[r.jsx("div",{className:"mono text-yellow-400/60 text-sm tracking-widest mb-2",children:"MY JOURNEY"}),r.jsx("h2",{className:"text-4xl md:text-5xl font-bold gradient-text section-heading",children:"Experience & Education"})]}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[r.jsxs("div",{children:[r.jsxs("h3",{className:"flex items-center gap-2 text-xl font-semibold text-yellow-400 mb-6",children:[r.jsx(e0,{size:18})," Work Experience"]}),r.jsx("div",{children:w5.map((t,s)=>r.jsx(Oy,{item:t,index:s},s))})]}),r.jsxs("div",{children:[r.jsxs("h3",{className:"flex items-center gap-2 text-xl font-semibold text-cyan-400 mb-6",children:[r.jsx(t0,{size:18})," Education"]}),r.jsx("div",{children:S5.map((t,s)=>r.jsx(Oy,{item:t,index:s},s))})]})]})]})]}),aS=["All","MERN","JavaScript","React"],rS=()=>{const[t,s]=b.useState("All"),o=$m.filter(c=>t==="All"?!0:t==="MERN"?c.title.includes("MERN"):t==="JavaScript"?!c.title.includes("MERN")&&!c.title.includes("React"):t==="React"?c.title.includes("React")||c.title.includes("MERN"):!0),a=t==="All"?$m:o;return r.jsxs("section",{name:"projects",className:"relative py-20 overflow-hidden",children:[r.jsx("div",{className:"absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"}),r.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-10",children:[r.jsxs(ln.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-10",children:[r.jsx("div",{className:"mono text-yellow-400/60 text-sm tracking-widest mb-2",children:"WHAT I'VE BUILT"}),r.jsx("h2",{className:"text-4xl md:text-5xl font-bold gradient-text section-heading",children:"Projects"})]}),r.jsx("div",{className:"flex flex-wrap gap-2 justify-center mb-10",children:aS.map(c=>r.jsx("button",{onClick:()=>s(c),className:`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${t===c?"bg-yellow-400 text-black":"border border-yellow-400/20 text-gray-400 hover:border-yellow-400/40 hover:text-yellow-400"}`,children:c},c))}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:a.map((c,u)=>r.jsxs(ln.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:u*.07},className:"glow-card rounded-2xl overflow-hidden group",children:[r.jsx(Fl,{to:`/project/${c.id}`,children:r.jsxs("div",{className:"relative overflow-hidden h-48",children:[r.jsx("img",{src:c.image,alt:c.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent opacity-80"}),c.demo&&r.jsxs("div",{className:"absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full",children:[r.jsxs("span",{className:"relative flex h-2 w-2",children:[r.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"}),r.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-green-500"})]}),r.jsx("span",{className:"text-xs text-green-400",children:"Live"})]})]})}),r.jsxs("div",{className:"p-5",children:[r.jsxs(Fl,{to:`/project/${c.id}`,children:[r.jsx("h3",{className:"text-lg font-semibold text-white mb-2 hover:text-yellow-400 transition-colors",children:c.title}),r.jsx("p",{className:"text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4",children:c.description.split(`
`)[0].trim()})]}),r.jsxs("div",{className:"flex gap-3 pt-3 border-t border-white/5",children:[c.demo&&r.jsxs("a",{href:c.demo,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-xs px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-all active:scale-95",children:[r.jsx(D2,{size:11})," Live Demo"]}),r.jsxs("a",{href:c.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-xs px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/20 transition-all active:scale-95",children:[r.jsx(gr,{size:12})," Source Code"]})]})]})]},c.id))}),r.jsx(ln.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"text-center mt-12",children:r.jsxs("a",{href:"https://github.com/verma-vivek-923",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 border border-yellow-400/30 text-yellow-400 rounded-xl hover:bg-yellow-400/10 transition-all duration-200",children:[r.jsx(gr,{size:18})," View All on GitHub"]})})]})]})},bi=[{name:"Aryan Sharma",role:"Project Partner – QuickTalk",avatar:"AS",color:"bg-cyan-500",rating:5,text:"Vivek built our real-time chat system from scratch in record time. His understanding of Socket.io and the MERN stack is exceptional. The code was clean, well-documented, and deployment was seamless."},{name:"Priya Patel",role:"Team Lead – Library App",avatar:"PP",color:"bg-purple-500",rating:5,text:"Working with Vivek was a great experience. He delivered the full-stack bookstore app with all features including auth, dark mode, and responsive UI — exactly as planned, ahead of schedule."},{name:"Rahul Gupta",role:"Client – CoolBlog Platform",avatar:"RG",color:"bg-yellow-500",rating:5,text:"The blogging platform Vivek built exceeded our expectations. He implemented admin controls, responsive design, and an intuitive editor. His attention to UX details was remarkable."},{name:"Sneha Verma",role:"Classmate & Collaborator",avatar:"SV",color:"bg-pink-500",rating:5,text:"Vivek has an incredible ability to break down complex problems. Whether it's debugging or system design, his approach is always methodical and collaborative. A fantastic developer to work with."}],lS=()=>{const[t,s]=b.useState(0),o=()=>s(c=>(c-1+bi.length)%bi.length),a=()=>s(c=>(c+1)%bi.length);return r.jsxs("section",{className:"relative py-20 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1a33]/30 to-transparent pointer-events-none"}),r.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-10",children:[r.jsxs(ln.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[r.jsx("div",{className:"mono text-yellow-400/60 text-sm tracking-widest mb-2",children:"KIND WORDS"}),r.jsx("h2",{className:"text-4xl md:text-5xl font-bold gradient-text section-heading",children:"Testimonials"})]}),r.jsxs("div",{className:"max-w-2xl mx-auto relative",children:[r.jsx(Nx,{mode:"wait",children:r.jsxs(ln.div,{initial:{opacity:0,x:60},animate:{opacity:1,x:0},exit:{opacity:0,x:-60},transition:{duration:.4},className:"glow-card rounded-2xl p-8 text-center",children:[r.jsx(H6,{className:"text-yellow-400/30 mx-auto mb-4",size:36}),r.jsxs("p",{className:"text-gray-300 text-base leading-relaxed mb-6 italic",children:['"',bi[t].text,'"']}),r.jsx("div",{className:"flex justify-center gap-1 mb-5",children:Array.from({length:bi[t].rating}).map((c,u)=>r.jsx(I6,{className:"text-yellow-400",size:14},u))}),r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("div",{className:`w-12 h-12 rounded-full ${bi[t].color} flex items-center justify-center text-white font-bold text-sm`,children:bi[t].avatar}),r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"text-white font-semibold",children:bi[t].name}),r.jsx("div",{className:"text-gray-500 text-xs",children:bi[t].role})]})]})]},t)}),r.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[r.jsx("button",{onClick:o,className:"w-10 h-10 rounded-full border border-yellow-400/20 flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 transition-all",children:r.jsx(z6,{size:14})}),r.jsx("div",{className:"flex items-center gap-2",children:bi.map((c,u)=>r.jsx("button",{onClick:()=>s(u),className:`h-2 rounded-full transition-all duration-300 ${u===t?"w-6 bg-yellow-400":"w-2 bg-white/20"}`},u))}),r.jsx("button",{onClick:a,className:"w-10 h-10 rounded-full border border-yellow-400/20 flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 transition-all",children:r.jsx($6,{size:14})})]})]})]})]})},cS=[{icon:r.jsx(gr,{size:20}),label:"GitHub",href:"https://github.com/verma-vivek-923",color:"hover:bg-white/10 hover:text-white"},{icon:r.jsx(Jm,{size:20}),label:"LinkedIn",href:"https://www.linkedin.com/in/vivek-verma-v022003",color:"hover:bg-blue-500/10 hover:text-blue-400"},{icon:r.jsx(Zm,{size:20}),label:"Instagram",href:"https://instagram.com/verma.vivek923",color:"hover:bg-pink-500/10 hover:text-pink-400"}],uS=()=>r.jsxs("section",{name:"contact",className:"relative py-20 overflow-hidden",children:[r.jsx("div",{className:"absolute top-0 left-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"}),r.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-10",children:[r.jsxs(ln.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[r.jsx("div",{className:"mono text-yellow-400/60 text-sm tracking-widest mb-2",children:"GET IN TOUCH"}),r.jsx("h2",{className:"text-4xl md:text-5xl font-bold gradient-text section-heading",children:"Contact Me"}),r.jsx("p",{className:"text-gray-400 mt-4 max-w-md mx-auto",children:"Have a project in mind or just want to say hi? My inbox is always open."})]}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-10 items-start",children:[r.jsxs(ln.div,{initial:{x:-50,opacity:0},whileInView:{x:0,opacity:1},viewport:{once:!0},transition:{duration:.6},className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-2xl font-semibold text-white mb-2",children:"Let's Build Together 🚀"}),r.jsx("p",{className:"text-gray-400 leading-relaxed",children:"I'm currently open to freelance work and full-time opportunities. Whether it's a MERN project, API design, or something entirely new — let's talk!"})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("a",{href:"mailto:web.vivek.022003@gmail.com",className:"flex items-center gap-4 glow-card rounded-xl p-4 hover:border-yellow-400/30 transition-all group",children:[r.jsx("div",{className:"w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400/20 transition-all",children:r.jsx(P6,{size:16})}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xs text-gray-500 uppercase tracking-wider",children:"Email"}),r.jsx("div",{className:"text-sm text-gray-200",children:"web.vivek.022003@gmail.com"})]})]}),r.jsxs("div",{className:"flex items-center gap-4 glow-card rounded-xl p-4",children:[r.jsx("div",{className:"w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400",children:r.jsx(O2,{size:16})}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xs text-gray-500 uppercase tracking-wider",children:"Location"}),r.jsx("div",{className:"text-sm text-gray-200",children:"Indore, Madhya Pradesh, India"})]})]})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm text-gray-500 mb-3 uppercase tracking-widest",children:"Find me on"}),r.jsx("div",{className:"flex gap-3",children:cS.map(t=>r.jsxs("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl text-gray-400 text-sm transition-all duration-200 ${t.color}`,children:[t.icon," ",t.label]},t.label))})]})]}),r.jsx(ln.div,{initial:{x:50,opacity:0},whileInView:{x:0,opacity:1},viewport:{once:!0},transition:{duration:.6},children:r.jsxs("form",{action:"https://getform.io/f/bdrnrneb",method:"POST",className:"glow-card rounded-2xl p-7 space-y-5",children:[r.jsxs("div",{className:"grid sm:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-gray-400 uppercase tracking-wider mb-1.5 block",children:"Full Name"}),r.jsx("input",{name:"name",type:"text",placeholder:"John Doe",className:"w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/40 transition-colors"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-gray-400 uppercase tracking-wider mb-1.5 block",children:"Email"}),r.jsx("input",{name:"email",type:"email",placeholder:"john@email.com",className:"w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/40 transition-colors"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-gray-400 uppercase tracking-wider mb-1.5 block",children:"Subject"}),r.jsx("input",{name:"subject",type:"text",placeholder:"Project discussion / Hire me",className:"w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/40 transition-colors"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-gray-400 uppercase tracking-wider mb-1.5 block",children:"Message"}),r.jsx("textarea",{name:"message",rows:5,placeholder:"Tell me about your project or opportunity...",className:"w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/40 transition-colors resize-none"})]}),r.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center gap-2 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-xl transition-all duration-200 active:scale-95",children:[r.jsx(P9,{size:18})," Send Message"]})]})})]})]})]}),dS=()=>r.jsxs("div",{className:"relative",children:[r.jsx(eS,{}),r.jsx(sS,{}),r.jsx(iS,{}),r.jsx(oS,{}),r.jsx(rS,{}),r.jsx(lS,{}),r.jsx(uS,{})]});var fS=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,hS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=fS}var Zt=hS,mS=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,pS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=mS}var Xt=pS,_S=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),gS=({size:t=24,style:s={}})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:s,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),yS=({size:t=20,...s})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),xS=({size:t=24,copied:s=!1,tint:o})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:o?{color:o,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${Xt.iconState} ${s?Xt.hiddenScaled:Xt.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${Xt.iconState} ${s?Xt.visibleScaled:Xt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),bS=({size:t=24,state:s="idle"})=>{const o=s==="idle",a=s==="sent",c=s==="failed",u=s==="sending";return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${Xt.iconStateFast} ${o?Xt.visibleScaled:u?Xt.sending:Xt.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${Xt.iconStateFast} ${a?Xt.visibleScaled:Xt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Xt.iconStateFast} ${c?Xt.visibleScaled:Xt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},vS=({size:t=24,isOpen:s=!0})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Xt.iconFade} ${s?Xt.visible:Xt.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Xt.iconFade} ${s?Xt.hidden:Xt.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),wS=({size:t=24,isPaused:s=!1})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Xt.iconFadeFast} ${s?Xt.hidden:Xt.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${Xt.iconFadeFast} ${s?Xt.visible:Xt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),SS=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),kS=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),k5=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),jS=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),CS=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),TS=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),ES=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),MS=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),RS=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),NS=({size:t=24})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),j5=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Jh=j5.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Im="feedback-freeze-styles",em="__agentation_freeze";function AS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:s=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[em]||(t[em]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[em]}var wt=AS();typeof window<"u"&&!wt.installed&&(wt.origSetTimeout=window.setTimeout.bind(window),wt.origSetInterval=window.setInterval.bind(window),wt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,s,...o)=>typeof t=="string"?wt.origSetTimeout(t,s):wt.origSetTimeout((...a)=>{wt.frozen?wt.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},s,...o),window.setInterval=(t,s,...o)=>typeof t=="string"?wt.origSetInterval(t,s):wt.origSetInterval((...a)=>{wt.frozen||t(...a)},s,...o),window.requestAnimationFrame=t=>wt.origRAF(s=>{wt.frozen?wt.frozenRAFQueue.push(t):t(s)}),wt.installed=!0);var Qe=wt.origSetTimeout,DS=wt.origSetInterval,pr=wt.origRAF;function LS(t){return t?j5.some(s=>{var o;return!!((o=t.closest)!=null&&o.call(t,`[${s}]`))}):!1}function OS(){if(typeof document>"u"||wt.frozen)return;wt.frozen=!0,wt.frozenTimeoutQueue=[],wt.frozenRAFQueue=[];let t=document.getElementById(Im);t||(t=document.createElement("style"),t.id=Im),t.textContent=`
    *${Jh},
    *${Jh}::before,
    *${Jh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),wt.pausedAnimations=[];try{document.getAnimations().forEach(s=>{var a;if(s.playState!=="running")return;const o=(a=s.effect)==null?void 0:a.target;LS(o)||(s.pause(),wt.pausedAnimations.push(s))})}catch{}document.querySelectorAll("video").forEach(s=>{s.paused||(s.dataset.wasPaused="false",s.pause())})}function By(){var o;if(typeof document>"u"||!wt.frozen)return;wt.frozen=!1;const t=wt.frozenTimeoutQueue;wt.frozenTimeoutQueue=[];for(const a of t)wt.origSetTimeout(()=>{if(wt.frozen){wt.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const s=wt.frozenRAFQueue;wt.frozenRAFQueue=[];for(const a of s)wt.origRAF(c=>{if(wt.frozen){wt.frozenRAFQueue.push(a);return}a(c)});for(const a of wt.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}wt.pausedAnimations=[],(o=document.getElementById(Im))==null||o.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function tm(t){if(!t)return;const s=o=>o.stopImmediatePropagation();document.addEventListener("focusin",s,!0),document.addEventListener("focusout",s,!0);try{t.focus()}finally{document.removeEventListener("focusin",s,!0),document.removeEventListener("focusout",s,!0)}}var yd=b.forwardRef(function({element:s,timestamp:o,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:f="Add",onSubmit:p,onCancel:h,onDelete:_,style:g,accentColor:y="#3c82f7",isExiting:x=!1,lightMode:w=!1,computedStyles:S},T){const[M,C]=b.useState(u),[z,O]=b.useState(!1),[L,$]=b.useState("initial"),[W,P]=b.useState(!1),[te,F]=b.useState(!1),Q=b.useRef(null),ee=b.useRef(null),G=b.useRef(null),ge=b.useRef(null);b.useEffect(()=>{x&&L!=="exit"&&$("exit")},[x,L]),b.useEffect(()=>{Qe(()=>{$("enter")},0);const be=Qe(()=>{$("entered")},200),A=Qe(()=>{const ie=Q.current;ie&&(tm(ie),ie.selectionStart=ie.selectionEnd=ie.value.length,ie.scrollTop=ie.scrollHeight)},50);return()=>{clearTimeout(be),clearTimeout(A),G.current&&clearTimeout(G.current),ge.current&&clearTimeout(ge.current)}},[]);const ce=b.useCallback(()=>{ge.current&&clearTimeout(ge.current),O(!0),ge.current=Qe(()=>{O(!1),tm(Q.current)},250)},[]);b.useImperativeHandle(T,()=>({shake:ce}),[ce]);const Re=b.useCallback(()=>{$("exit"),G.current=Qe(()=>{h()},150)},[h]),J=b.useCallback(()=>{M.trim()&&p(M.trim())},[M,p]),ye=b.useCallback(be=>{be.stopPropagation(),!be.nativeEvent.isComposing&&(be.key==="Enter"&&!be.shiftKey&&(be.preventDefault(),J()),be.key==="Escape"&&Re())},[J,Re]),K=[Zt.popup,w?Zt.light:"",L==="enter"?Zt.enter:"",L==="entered"?Zt.entered:"",L==="exit"?Zt.exit:"",z?Zt.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:ee,className:K,"data-annotation-popup":!0,style:g,onClick:be=>be.stopPropagation(),children:[r.jsxs("div",{className:Zt.header,children:[S&&Object.keys(S).length>0?r.jsxs("button",{className:Zt.headerToggle,onClick:()=>{const be=te;F(!te),be&&Qe(()=>tm(Q.current),0)},type:"button",children:[r.jsx("svg",{className:`${Zt.chevron} ${te?Zt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:Zt.element,children:s})]}):r.jsx("span",{className:Zt.element,children:s}),o&&r.jsx("span",{className:Zt.timestamp,children:o})]}),S&&Object.keys(S).length>0&&r.jsx("div",{className:`${Zt.stylesWrapper} ${te?Zt.expanded:""}`,children:r.jsx("div",{className:Zt.stylesInner,children:r.jsx("div",{className:Zt.stylesBlock,children:Object.entries(S).map(([be,A])=>r.jsxs("div",{className:Zt.styleLine,children:[r.jsx("span",{className:Zt.styleProperty,children:be.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:Zt.styleValue,children:A}),";"]},be))})})}),a&&r.jsxs("div",{className:Zt.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),r.jsx("textarea",{ref:Q,className:Zt.textarea,style:{borderColor:W?y:void 0},placeholder:c,value:M,onChange:be=>C(be.target.value),onFocus:()=>P(!0),onBlur:()=>P(!1),rows:2,onKeyDown:ye}),r.jsxs("div",{className:Zt.actions,children:[_&&r.jsx("div",{className:Zt.deleteWrapper,children:r.jsx("button",{className:Zt.deleteButton,onClick:_,type:"button",children:r.jsx(MS,{size:22})})}),r.jsx("button",{className:Zt.cancel,onClick:Re,children:"Cancel"}),r.jsx("button",{className:Zt.submit,style:{backgroundColor:y,opacity:M.trim()?1:.4},onClick:J,disabled:!M.trim(),children:f})]})]})}),BS=({content:t,children:s,...o})=>{const[a,c]=b.useState(!1),[u,f]=b.useState(!1),[p,h]=b.useState({top:0,right:0}),_=b.useRef(null),g=b.useRef(null),y=b.useRef(null),x=()=>{if(_.current){const T=_.current.getBoundingClientRect();h({top:T.top+T.height/2,right:window.innerWidth-T.left+8})}},w=()=>{f(!0),y.current&&(clearTimeout(y.current),y.current=null),x(),g.current=Qe(()=>{c(!0)},500)},S=()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1),y.current=Qe(()=>{f(!1)},150)};return b.useEffect(()=>()=>{g.current&&clearTimeout(g.current),y.current&&clearTimeout(y.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:_,onMouseEnter:w,onMouseLeave:S,...o,children:s}),u&&C2.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:p.top,right:p.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},zS=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,$S={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=zS}var zy=$S,pa=({content:t})=>r.jsx(BS,{className:zy.tooltip,content:t,children:r.jsx(yS,{className:zy.tooltipIcon})}),Ae={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},C5=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Ae.navigation},{type:"header",label:"Header",...Ae.header},{type:"hero",label:"Hero",...Ae.hero},{type:"section",label:"Section",...Ae.section},{type:"sidebar",label:"Sidebar",...Ae.sidebar},{type:"footer",label:"Footer",...Ae.footer},{type:"modal",label:"Modal",...Ae.modal},{type:"banner",label:"Banner",...Ae.banner},{type:"drawer",label:"Drawer",...Ae.drawer},{type:"popover",label:"Popover",...Ae.popover},{type:"divider",label:"Divider",...Ae.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Ae.card},{type:"text",label:"Text",...Ae.text},{type:"image",label:"Image",...Ae.image},{type:"video",label:"Video",...Ae.video},{type:"table",label:"Table",...Ae.table},{type:"grid",label:"Grid",...Ae.grid},{type:"list",label:"List",...Ae.list},{type:"chart",label:"Chart",...Ae.chart},{type:"codeBlock",label:"Code Block",...Ae.codeBlock},{type:"map",label:"Map",...Ae.map},{type:"timeline",label:"Timeline",...Ae.timeline},{type:"calendar",label:"Calendar",...Ae.calendar},{type:"accordion",label:"Accordion",...Ae.accordion},{type:"carousel",label:"Carousel",...Ae.carousel},{type:"logo",label:"Logo",...Ae.logo},{type:"faq",label:"FAQ",...Ae.faq},{type:"gallery",label:"Gallery",...Ae.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Ae.button},{type:"input",label:"Input",...Ae.input},{type:"search",label:"Search",...Ae.search},{type:"form",label:"Form",...Ae.form},{type:"tabs",label:"Tabs",...Ae.tabs},{type:"dropdown",label:"Dropdown",...Ae.dropdown},{type:"toggle",label:"Toggle",...Ae.toggle},{type:"stepper",label:"Stepper",...Ae.stepper},{type:"rating",label:"Rating",...Ae.rating},{type:"fileUpload",label:"File Upload",...Ae.fileUpload},{type:"checkbox",label:"Checkbox",...Ae.checkbox},{type:"radio",label:"Radio",...Ae.radio},{type:"slider",label:"Slider",...Ae.slider},{type:"datePicker",label:"Date Picker",...Ae.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Ae.avatar},{type:"badge",label:"Badge",...Ae.badge},{type:"tag",label:"Tag",...Ae.tag},{type:"breadcrumb",label:"Breadcrumb",...Ae.breadcrumb},{type:"pagination",label:"Pagination",...Ae.pagination},{type:"progress",label:"Progress",...Ae.progress},{type:"alert",label:"Alert",...Ae.alert},{type:"toast",label:"Toast",...Ae.toast},{type:"notification",label:"Notification",...Ae.notification},{type:"tooltip",label:"Tooltip",...Ae.tooltip},{type:"stat",label:"Stat",...Ae.stat},{type:"skeleton",label:"Skeleton",...Ae.skeleton},{type:"chip",label:"Chip",...Ae.chip},{type:"icon",label:"Icon",...Ae.icon},{type:"spinner",label:"Spinner",...Ae.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Ae.pricing},{type:"testimonial",label:"Testimonial",...Ae.testimonial},{type:"cta",label:"CTA",...Ae.cta},{type:"productCard",label:"Product Card",...Ae.productCard},{type:"profile",label:"Profile",...Ae.profile},{type:"feature",label:"Feature",...Ae.feature},{type:"team",label:"Team",...Ae.team},{type:"login",label:"Login",...Ae.login},{type:"contact",label:"Contact",...Ae.contact}]}],si={};for(const t of C5)for(const s of t.items)si[s.type]=s;function fe({w:t,h:s=3,strong:o}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:s,borderRadius:2,background:o?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Ht({w:t,h:s,radius:o=3,style:a}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof s=="number"?`${s}px`:s,borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function rs({size:t}){return r.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function PS({width:t,height:s}){const o=Math.max(8,s*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${o}px`,gap:t*.02},children:[r.jsx(Ht,{w:Math.max(20,s*.5),h:Math.max(12,s*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[r.jsx(fe,{w:t*.06}),r.jsx(fe,{w:t*.07}),r.jsx(fe,{w:t*.05}),r.jsx(fe,{w:t*.06})]}),r.jsx(Ht,{w:t*.1,h:Math.min(28,s*.5),radius:4})]})}function HS({width:t,height:s,text:o}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:s*.05},children:[o?r.jsx("span",{style:{fontSize:Math.min(20,s*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:o}):r.jsx(fe,{w:t*.5,h:Math.max(6,s*.04),strong:!0}),r.jsx(fe,{w:t*.6}),r.jsx(fe,{w:t*.4}),r.jsx(Ht,{w:Math.min(140,t*.2),h:Math.min(36,s*.12),radius:6,style:{marginTop:s*.06}})]})}function IS({width:t,height:s}){const o=Math.max(3,Math.floor(s/36));return r.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:s*.03},children:[r.jsx(fe,{w:t*.6,h:4,strong:!0}),Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Ht,{w:10,h:10,radius:2}),r.jsx(fe,{w:t*(.4+c*17%30/100)})]},c))]})}function VS({width:t,height:s}){const o=Math.max(2,Math.min(4,Math.floor(t/160)));return r.jsx("div",{style:{display:"flex",padding:`${s*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(fe,{w:"60%",h:3,strong:!0}),r.jsx(fe,{w:"80%",h:2}),r.jsx(fe,{w:"70%",h:2}),r.jsx(fe,{w:"60%",h:2})]},c))})}function US({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(fe,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(fe,{w:"90%"}),r.jsx(fe,{w:"70%"}),r.jsx(fe,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Ht,{w:70,h:26,radius:4}),r.jsx(Ht,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function YS({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(fe,{w:"70%",h:4,strong:!0}),r.jsx(fe,{w:"95%",h:2}),r.jsx(fe,{w:"85%",h:2}),r.jsx(fe,{w:"50%",h:2})]})]})}function WS({width:t,height:s,text:o}){if(o)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,s*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:o});const a=Math.max(2,Math.floor(s/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx(fe,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>r.jsx(fe,{w:`${70+u*13%25}%`,h:2},u))]})}function FS({width:t,height:s}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${s}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:t,y2:s,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:t,y1:"0",x2:"0",y2:s,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t*.3,cy:s*.3,r:Math.min(t,s)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function XS({width:t,height:s}){const o=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(s/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:o},(c,u)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(fe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:o},(f,p)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(fe,{w:`${50+(u*7+p*13)%40}%`,h:2})},p))},u))]})}function qS({width:t,height:s}){const o=Math.max(2,Math.floor(s/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx(rs,{size:8}),r.jsx(fe,{w:`${55+c*17%35}%`,h:2})]},c))})}function QS({width:t,height:s,text:o}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,s/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o?r.jsx("span",{style:{fontSize:Math.min(13,s*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:o}):r.jsx(fe,{w:Math.max(20,t*.5),h:3,strong:!0})})}function GS({width:t,height:s}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx(fe,{w:Math.min(80,t*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,s*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx(fe,{w:"40%",h:2})})]})}function KS({width:t,height:s}){const o=Math.max(2,Math.min(5,Math.floor(s/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:s*.04,padding:8},children:[Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx(fe,{w:60+c*17%30,h:2}),r.jsx(Ht,{w:"100%",h:28,radius:4})]},c)),r.jsx(Ht,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function ZS({width:t,height:s}){const o=Math.max(2,Math.min(4,Math.floor(t/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(a,c)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx(fe,{w:60,h:3,strong:c===0})},c))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(fe,{w:"80%",h:2}),r.jsx(fe,{w:"65%",h:2}),r.jsx(fe,{w:"75%",h:2})]})]})}function JS({width:t,height:s}){const o=Math.min(t,s)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${s}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:s/2,r:o-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:t/2,cy:s*.38,r:o*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${t/2-o*.55} ${s*.78} C${t/2-o*.55} ${s*.55} ${t/2+o*.55} ${s*.55} ${t/2+o*.55} ${s*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function ek({width:t,height:s}){return r.jsx("div",{style:{height:"100%",borderRadius:s/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(fe,{w:Math.max(16,t*.5),h:2,strong:!0})})}function tk({width:t,height:s}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:s*.08},children:[r.jsx(fe,{w:t*.5,h:Math.max(5,s*.06),strong:!0}),r.jsx(fe,{w:t*.35})]})}function nk({width:t,height:s}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:s*.04,padding:t*.04},children:[r.jsx(fe,{w:t*.3,h:4,strong:!0}),r.jsx(fe,{w:t*.7}),r.jsx(fe,{w:t*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:s*.06},children:[r.jsx(Ht,{w:"33%",h:"100%",radius:4}),r.jsx(Ht,{w:"33%",h:"100%",radius:4}),r.jsx(Ht,{w:"33%",h:"100%",radius:4})]})]})}function sk({width:t,height:s}){const o=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(s/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:o*a},(c,u)=>r.jsx(Ht,{w:"100%",h:"100%",radius:4},u))})}function ik({width:t,height:s}){const o=Math.max(2,Math.floor((s-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx(fe,{w:t*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:o},(a,c)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:r.jsx(fe,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function ok({width:t,height:s}){const o=Math.min(t,s)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${s}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:t-2,height:s-2,rx:o,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t-o,cy:s/2,r:o*.7,fill:"var(--agd-bar)"})]})}function ak({width:t,height:s}){const o=Math.min(s/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${o*.6}px`,gap:6},children:[r.jsx(rs,{size:Math.min(14,s*.4)}),r.jsx(fe,{w:"50%",h:2})]})}function rk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(rs,{size:Math.min(20,s*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(fe,{w:"60%",h:3,strong:!0}),r.jsx(fe,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function lk({width:t,height:s}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${s}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:t,height:s,rx:s/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:t*.65,height:s-2,rx:(s-2)/2,fill:"var(--agd-bar)"})]})}function ck({width:t,height:s}){const o=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(o*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(c,u)=>{const f=30+(u*37+17)%55;return r.jsx(Ht,{w:a,h:`${f}%`,radius:2},u)})})}function uk({width:t,height:s}){const o=Math.min(t,s)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Ht,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${o*.6}px solid var(--agd-bar-strong)`,borderTop:`${o*.4}px solid transparent`,borderBottom:`${o*.4}px solid transparent`,marginLeft:o*.15}})})]})}function dk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(fe,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function fk({width:t,height:s}){const o=Math.max(2,Math.min(4,Math.floor(t/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx(fe,{w:40+c*13%20,h:2,strong:c===o-1})]},c))})}function hk({width:t,height:s}){const o=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,s*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:o},(c,u)=>r.jsx(Ht,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function mk({width:t}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function pk({width:t,height:s}){const o=Math.max(2,Math.min(4,Math.floor(s/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsx(fe,{w:`${40+c*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function _k({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Ht,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx(rs,{size:5}),r.jsx(rs,{size:5}),r.jsx(rs,{size:5})]})]})}function gk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:s*.04},children:[r.jsx(fe,{w:t*.4,h:3,strong:!0}),r.jsx(fe,{w:t*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(o,a)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx(rs,{size:5}),r.jsx(fe,{w:`${50+a*17%35}%`,h:2})]},a))}),r.jsx(Ht,{w:t*.7,h:Math.min(32,s*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function yk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(fe,{w:"90%",h:2}),r.jsx(fe,{w:"75%",h:2}),r.jsx(fe,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(rs,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(fe,{w:60,h:3,strong:!0}),r.jsx(fe,{w:40,h:2})]})]})]})}function xk({width:t,height:s}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:s*.08},children:[r.jsx(fe,{w:t*.5,h:Math.max(4,s*.05),strong:!0}),r.jsx(fe,{w:t*.35}),r.jsx(Ht,{w:Math.min(140,t*.25),h:Math.min(32,s*.15),radius:6,style:{marginTop:s*.04,background:"var(--agd-bar)"}})]})}function bk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(fe,{w:"40%",h:3,strong:!0}),r.jsx(fe,{w:"70%",h:2})]})]})}function vk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx(fe,{w:t*.4,h:3,strong:!0}),r.jsx(Ht,{w:60,h:Math.min(24,s*.6),radius:4})]})}function wk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:s*.06},children:[r.jsx(fe,{w:t*.5,h:2}),r.jsx(fe,{w:t*.4,h:Math.max(8,s*.18),strong:!0}),r.jsx(fe,{w:t*.3,h:2})]})}function Sk({width:t,height:s}){const o=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,s*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:o},(c,u)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<o-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function kk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx(fe,{w:Math.max(16,t*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function jk({width:t,height:s}){const a=Math.min(s*.7,t/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>r.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function Ck({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${s}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:s*.3,x2:t,y2:s*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:s*.6,x2:t,y2:s*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:s,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Tk({width:t,height:s}){const o=Math.max(3,Math.min(5,Math.floor(s/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx(rs,{size:8}),c<o-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(fe,{w:`${35+c*13%25}%`,h:3,strong:!0}),r.jsx(fe,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function Ek({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:s*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx(fe,{w:t*.4,h:2}),r.jsx(fe,{w:t*.25,h:2})]})}function Mk({width:t,height:s}){const o=Math.max(3,Math.min(8,Math.floor(s/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx(rs,{size:6}),r.jsx(rs,{size:6}),r.jsx(rs,{size:6})]}),Array.from({length:o},(a,c)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<o-1?12:0},children:r.jsx(fe,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function Rk({width:t,height:s}){const c=Math.min((t-16)/7,(s-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(fe,{w:t*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,f)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:r.jsx(fe,{w:c*.5,h:2})},`h${f}`)),Array.from({length:7*5},(u,f)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:r.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:f===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:f===12?1:.3}})})},f))]})]})}function Nk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(rs,{size:Math.min(32,s*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(fe,{w:"50%",h:3,strong:!0}),r.jsx(fe,{w:"75%",h:2})]}),r.jsx(fe,{w:30,h:2})]})}function Ak({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(fe,{w:"65%",h:4,strong:!0}),r.jsx(fe,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(fe,{w:"30%",h:5,strong:!0}),r.jsx(Ht,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function Dk({width:t,height:s}){const o=Math.min(48,s*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:s*.06},children:[r.jsx(rs,{size:o}),r.jsx(fe,{w:t*.45,h:4,strong:!0}),r.jsx(fe,{w:t*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:s*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(fe,{w:20,h:3,strong:!0}),r.jsx(fe,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(fe,{w:20,h:3,strong:!0}),r.jsx(fe,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(fe,{w:20,h:3,strong:!0}),r.jsx(fe,{w:28,h:2})]})]})]})}function Lk({width:t,height:s}){const o=Math.max(t*.6,80),a=Math.max(3,Math.floor(s/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:t-o,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:s*.06},children:[r.jsx(fe,{w:o*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx(fe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function Ok({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(fe,{w:"70%",h:3,strong:!0}),r.jsx(fe,{w:"90%",h:2}),r.jsx(fe,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function Bk({width:t,height:s}){const o=Math.min(s*.7,t*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[r.jsx(Ht,{w:o,h:o,radius:o*.25}),r.jsx(fe,{w:t*.45,h:Math.max(4,s*.2),strong:!0})]})}function zk({width:t,height:s}){const o=Math.max(2,Math.min(5,Math.floor(s/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx(fe,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function $k({width:t,height:s}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(s/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:o*a},(c,u)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function Pk({width:t,height:s}){const o=Math.min(t,s);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${s}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(s-o+2)/2,width:o-2,height:o-2,rx:o*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${o*.25} ${s/2}l${o*.2} ${o*.2} ${o*.3}-${o*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Hk({width:t,height:s}){const o=Math.min(t,s)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${s}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:s/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:t/2,cy:s/2,r:o*.45,fill:"var(--agd-bar)"})]})}function Ik({width:t,height:s}){const o=Math.max(2,s*.12),a=Math.min(s*.35,10),c=t*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:o,borderRadius:o/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:c,height:"100%",borderRadius:o/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Vk({width:t,height:s}){const o=Math.min(36,s*.15),a=7,c=4,u=Math.min((t-16)/a,(s-o-40)/(c+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:o,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx(fe,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(fe,{w:t*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(f,p)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:r.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:p===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:p===10?1:.25}})})})},p))})]})]})}function Uk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:s*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:s*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,s*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,s*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,s*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Yk({width:t,height:s}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:s/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${s*.3}px`,gap:4},children:[r.jsx(fe,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,s*.3),height:Math.max(6,s*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function Wk({width:t,height:s}){const o=Math.min(t,s);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${s}`,fill:"none",children:r.jsx("path",{d:`M${t/2} ${(s-o)/2+o*.1}l${o*.12} ${o*.25} ${o*.28} ${o*.04}-${o*.2} ${o*.2} ${o*.05} ${o*.28}-${o*.25}-${o*.12}-${o*.25} ${o*.12} ${o*.05}-${o*.28}-${o*.2}-${o*.2} ${o*.28}-${o*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Fk({width:t,height:s}){const o=Math.min(t,s)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${s}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:s/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${t/2} ${s/2-o}a${o} ${o} 0 0 1 ${o} ${o}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Xk({width:t,height:s}){const o=Math.min(36,s*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(s/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>r.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[r.jsx(Ht,{w:o,h:o,radius:o*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(fe,{w:`${40+u*13%20}%`,h:3,strong:!0}),r.jsx(fe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function qk({width:t,height:s}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,s*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:s*.06,padding:s*.06},children:[r.jsx(fe,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:o},(c,u)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(rs,{size:a}),r.jsx(fe,{w:t*.12,h:3,strong:!0}),r.jsx(fe,{w:t*.08,h:2})]},u))})]})}function Qk({width:t,height:s}){const o=Math.max(2,Math.min(3,Math.floor(s/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:s*.04},children:[r.jsx(fe,{w:t*.5,h:Math.max(5,s*.04),strong:!0}),r.jsx(fe,{w:t*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:s*.03,marginTop:s*.04},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(fe,{w:Math.min(60,t*.2),h:2}),r.jsx(Ht,{w:"100%",h:Math.min(32,s*.1),radius:4})]},c))}),r.jsx(Ht,{w:"100%",h:Math.min(36,s*.12),radius:6,style:{marginTop:s*.03,background:"var(--agd-bar)"}}),r.jsx(fe,{w:t*.4,h:2})]})}function Gk({width:t,height:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:s*.03},children:[r.jsx(fe,{w:t*.4,h:4,strong:!0}),r.jsx(fe,{w:t*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:s*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(fe,{w:50,h:2}),r.jsx(Ht,{w:"100%",h:Math.min(28,s*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(fe,{w:40,h:2}),r.jsx(Ht,{w:"100%",h:Math.min(28,s*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(fe,{w:50,h:2}),r.jsx(Ht,{w:"100%",h:Math.min(28,s*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx(fe,{w:60,h:2}),r.jsx(Ht,{w:"100%",h:"100%",radius:4})]}),r.jsx(Ht,{w:Math.min(120,t*.3),h:Math.min(30,s*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Kk={navigation:PS,hero:HS,sidebar:IS,footer:VS,modal:US,card:YS,text:WS,image:FS,table:XS,list:qS,button:QS,input:GS,form:KS,tabs:ZS,avatar:JS,badge:ek,header:tk,section:nk,grid:sk,dropdown:ik,toggle:ok,search:ak,toast:rk,progress:lk,chart:ck,video:uk,tooltip:dk,breadcrumb:fk,pagination:hk,divider:mk,accordion:pk,carousel:_k,pricing:gk,testimonial:yk,cta:xk,alert:bk,banner:vk,stat:wk,stepper:Sk,tag:kk,rating:jk,map:Ck,timeline:Tk,fileUpload:Ek,codeBlock:Mk,calendar:Rk,notification:Nk,productCard:Ak,profile:Dk,drawer:Lk,popover:Ok,logo:Bk,faq:zk,gallery:$k,checkbox:Pk,radio:Hk,slider:Ik,datePicker:Vk,skeleton:Uk,chip:Yk,icon:Wk,spinner:Fk,feature:Xk,team:qk,login:Qk,contact:Gk};function Zk({type:t,width:s,height:o,text:a}){const c=Kk[t];return c?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(c,{width:s,height:o,text:a})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var Jk=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,ej={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=Jk}var le=ej,rr=24,Vu=5;function $y(t,s,o,a,c){let u=1/0,f=1/0;const p=t.x,h=t.x+t.width,_=t.x+t.width/2,g=t.y,y=t.y+t.height,x=t.y+t.height/2,w=!a,S=w?[p,h,_]:[...a.left?[p]:[],...a.right?[h]:[]],T=w?[g,y,x]:[...a.top?[g]:[],...a.bottom?[y]:[]],M=[];for(const ee of s)o.has(ee.id)||M.push(ee);c&&M.push(...c);for(const ee of M){const G=ee.x,ge=ee.x+ee.width,ce=ee.x+ee.width/2,Re=ee.y,J=ee.y+ee.height,ye=ee.y+ee.height/2;for(const K of S)for(const be of[G,ge,ce]){const A=be-K;Math.abs(A)<Vu&&Math.abs(A)<Math.abs(u)&&(u=A)}for(const K of T)for(const be of[Re,J,ye]){const A=be-K;Math.abs(A)<Vu&&Math.abs(A)<Math.abs(f)&&(f=A)}}const C=Math.abs(u)<Vu?u:0,z=Math.abs(f)<Vu?f:0,O=[],L=new Set,$=p+C,W=h+C,P=_+C,te=g+z,F=y+z,Q=x+z;for(const ee of M){const G=ee.x,ge=ee.x+ee.width,ce=ee.x+ee.width/2,Re=ee.y,J=ee.y+ee.height,ye=ee.y+ee.height/2;for(const K of[G,ce,ge])for(const be of[$,P,W])if(Math.abs(be-K)<.5){const A=`x:${Math.round(K)}`;L.has(A)||(L.add(A),O.push({axis:"x",pos:K}))}for(const K of[Re,ye,J])for(const be of[te,Q,F])if(Math.abs(be-K)<.5){const A=`y:${Math.round(K)}`;L.has(A)||(L.add(A),O.push({axis:"y",pos:K}))}}return{dx:C,dy:z,guides:O}}function Py(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function tj({placements:t,onChange:s,activeComponent:o,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:f,className:p,passthrough:h,extraSnapRects:_,onSelectionChange:g,deselectSignal:y,onDragMove:x,onDragEnd:w,clearSignal:S,wireframe:T}){const[M,C]=b.useState(new Set),[z,O]=b.useState(null),[L,$]=b.useState(null),[W,P]=b.useState(null),[te,F]=b.useState([]),[Q,ee]=b.useState(null),[G,ge]=b.useState(!1),ce=b.useRef(!1),[Re,J]=b.useState(new Set),ye=b.useRef(new Map),K=b.useRef(null),be=b.useRef(null),A=b.useRef(t);A.current=t;const ie=b.useRef(g);ie.current=g;const Ce=b.useRef(x);Ce.current=x;const Se=b.useRef(w);Se.current=w;const ve=b.useRef(y);b.useEffect(()=>{y!==ve.current&&(ve.current=y,C(new Set))},[y]);const Ze=b.useRef(S);b.useEffect(()=>{if(S!==void 0&&S!==Ze.current){Ze.current=S;const se=new Set(A.current.map(Pe=>Pe.id));se.size>0&&(J(se),C(new Set),be.current=null,Qe(()=>{s([]),J(new Set)},180))}},[S,s]),b.useEffect(()=>{const se=Pe=>{const it=Pe.target;if(!(it.tagName==="INPUT"||it.tagName==="TEXTAREA"||it.isContentEditable)){if((Pe.key==="Backspace"||Pe.key==="Delete")&&M.size>0){Pe.preventDefault();const St=new Set(M);J(St),C(new Set),Qe(()=>{s(A.current.filter(ut=>!St.has(ut.id))),J(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Pe.key)&&M.size>0){Pe.preventDefault();const St=Pe.shiftKey?20:1,ut=Pe.key==="ArrowLeft"?-St:Pe.key==="ArrowRight"?St:0,ot=Pe.key==="ArrowUp"?-St:Pe.key==="ArrowDown"?St:0;s(t.map(ct=>M.has(ct.id)?{...ct,x:Math.max(0,ct.x+ut),y:Math.max(0,ct.y+ot)}:ct));return}if(Pe.key==="Escape"){o?a(null):M.size>0&&C(new Set);return}}};return document.addEventListener("keydown",se),()=>document.removeEventListener("keydown",se)},[M,o,t,s,a]);const Fe=b.useCallback(se=>{if(se.button!==0||h||se.target.closest(`.${le.placement}`))return;se.preventDefault(),se.stopPropagation();const it=window.scrollY,Xe=se.clientX,St=se.clientY;if(o){be.current="place",f==null||f(!0);let ut=!1,ot=Xe,ct=St;const Mt=$e=>{ot=$e.clientX,ct=$e.clientY;const Y=Math.abs(ot-Xe),q=Math.abs(ct-St);if((Y>5||q>5)&&(ut=!0),ut){const ue=Math.min(Xe,ot),he=Math.min(St,ct),De=Math.abs(ot-Xe),ke=Math.abs(ct-St);O({x:ue,y:he,w:De,h:ke}),P({x:$e.clientX+12,y:$e.clientY+12,text:`${Math.round(De)} × ${Math.round(ke)}`})}},qt=$e=>{window.removeEventListener("mousemove",Mt),window.removeEventListener("mouseup",qt),O(null),P(null),be.current=null,f==null||f(!1);const Y=Ae[o];let q,ue,he,De;ut?(q=Math.min(Xe,ot),ue=Math.min(St,ct)+it,he=Math.max(rr,Math.abs(ot-Xe)),De=Math.max(rr,Math.abs(ct-St))):(he=Y.width,De=Y.height,q=Xe-he/2,ue=St+it-De/2),q=Math.max(0,q),ue=Math.max(0,ue);const ke={id:Py(),type:o,x:q,y:ue,width:he,height:De,scrollY:it,timestamp:Date.now()},xe=[...t,ke];s(xe),C(new Set([ke.id])),a(null)};window.addEventListener("mousemove",Mt),window.addEventListener("mouseup",qt)}else{se.shiftKey||C(new Set),be.current="select";let ut=!1;const ot=Mt=>{const qt=Math.abs(Mt.clientX-Xe),$e=Math.abs(Mt.clientY-St);if((qt>4||$e>4)&&(ut=!0),ut){const Y=Math.min(Xe,Mt.clientX),q=Math.min(St,Mt.clientY);$({x:Y,y:q,w:Math.abs(Mt.clientX-Xe),h:Math.abs(Mt.clientY-St)})}},ct=Mt=>{if(window.removeEventListener("mousemove",ot),window.removeEventListener("mouseup",ct),be.current=null,ut){const qt=Math.min(Xe,Mt.clientX),$e=Math.min(St,Mt.clientY)+it,Y=Math.abs(Mt.clientX-Xe),q=Math.abs(Mt.clientY-St),ue=new Set(se.shiftKey?M:new Set);for(const he of t)he.y-it,he.x+he.width>qt&&he.x<qt+Y&&he.y+he.height>$e&&he.y<$e+q&&ue.add(he.id);C(ue)}$(null)};window.addEventListener("mousemove",ot),window.addEventListener("mouseup",ct)}},[o,h,t,s,M]),Et=b.useCallback((se,Pe)=>{var ke;if(se.button!==0)return;const it=se.target;if(it.closest(`.${le.handle}`)||it.closest(`.${le.deleteButton}`))return;se.preventDefault(),se.stopPropagation();let Xe;se.shiftKey?(Xe=new Set(M),Xe.has(Pe)?Xe.delete(Pe):Xe.add(Pe)):M.has(Pe)?Xe=new Set(M):Xe=new Set([Pe]),C(Xe),(Xe.size!==M.size||[...Xe].some(xe=>!M.has(xe)))&&((ke=ie.current)==null||ke.call(ie,Xe,se.shiftKey));const ut=se.clientX,ot=se.clientY,ct=new Map;for(const xe of t)Xe.has(xe.id)&&ct.set(xe.id,{x:xe.x,y:xe.y});be.current="move",f==null||f(!0);let Mt=!1,qt=!1,$e=t,Y=0,q=0;const ue=new Map;for(const xe of t)ct.has(xe.id)&&ue.set(xe.id,{w:xe.width,h:xe.height});const he=xe=>{var cn;const at=xe.clientX-ut,Ye=xe.clientY-ot;if((Math.abs(at)>2||Math.abs(Ye)>2)&&(Mt=!0),!Mt)return;if(xe.altKey&&!qt){qt=!0;const Ue=[];for(const yt of t)ct.has(yt.id)&&Ue.push({...yt,id:Py(),timestamp:Date.now()});$e=[...t,...Ue]}let kt=1/0,Ge=1/0,Ne=-1/0,gt=-1/0;for(const[Ue,yt]of ct){const kn=ue.get(Ue);kn&&(kt=Math.min(kt,yt.x+at),Ge=Math.min(Ge,yt.y+Ye),Ne=Math.max(Ne,yt.x+at+kn.w),gt=Math.max(gt,yt.y+Ye+kn.h))}const jt={x:kt,y:Ge,width:Ne-kt,height:gt-Ge},{dx:It,dy:Ee,guides:mt}=$y(jt,$e,new Set(ct.keys()),void 0,_);F(mt);const pt=at+It,rt=Ye+Ee;Y=pt,q=rt,s($e.map(Ue=>{const yt=ct.get(Ue.id);return yt?{...Ue,x:Math.max(0,yt.x+pt),y:Math.max(0,yt.y+rt)}:Ue})),(cn=Ce.current)==null||cn.call(Ce,pt,rt)},De=()=>{var xe;window.removeEventListener("mousemove",he),window.removeEventListener("mouseup",De),be.current=null,f==null||f(!1),F([]),(xe=Se.current)==null||xe.call(Se,Y,q,Mt)};window.addEventListener("mousemove",he),window.addEventListener("mouseup",De)},[M,t,s,f]),Be=b.useCallback((se,Pe,it)=>{se.preventDefault(),se.stopPropagation();const Xe=t.find(ue=>ue.id===Pe);if(!Xe)return;C(new Set([Pe])),be.current="resize",f==null||f(!0);const St=se.clientX,ut=se.clientY,ot=Xe.width,ct=Xe.height,Mt=Xe.x,qt=Xe.y,$e={left:it.includes("w"),right:it.includes("e"),top:it.includes("n"),bottom:it.includes("s")},Y=ue=>{const he=ue.clientX-St,De=ue.clientY-ut;let ke=ot,xe=ct,at=Mt,Ye=qt;it.includes("e")&&(ke=Math.max(rr,ot+he)),it.includes("w")&&(ke=Math.max(rr,ot-he),at=Mt+ot-ke),it.includes("s")&&(xe=Math.max(rr,ct+De)),it.includes("n")&&(xe=Math.max(rr,ct-De),Ye=qt+ct-xe);const kt={x:at,y:Ye,width:ke,height:xe},{dx:Ge,dy:Ne,guides:gt}=$y(kt,A.current,new Set([Pe]),$e,_);F(gt),Ge!==0&&($e.right?ke+=Ge:$e.left&&(at+=Ge,ke-=Ge)),Ne!==0&&($e.bottom?xe+=Ne:$e.top&&(Ye+=Ne,xe-=Ne)),s(A.current.map(jt=>jt.id===Pe?{...jt,x:at,y:Ye,width:ke,height:xe}:jt)),P({x:ue.clientX+12,y:ue.clientY+12,text:`${Math.round(ke)} × ${Math.round(xe)}`})},q=()=>{window.removeEventListener("mousemove",Y),window.removeEventListener("mouseup",q),P(null),be.current=null,f==null||f(!1),F([])};window.addEventListener("mousemove",Y),window.addEventListener("mouseup",q)},[t,s,f]),ft=b.useCallback(se=>{be.current=null,J(Pe=>{const it=new Set(Pe);return it.add(se),it}),C(Pe=>{const it=new Set(Pe);return it.delete(se),it}),Qe(()=>{s(A.current.filter(Pe=>Pe.id!==se)),J(Pe=>{const it=new Set(Pe);return it.delete(se),it})},180)},[s]),ht={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},$t=b.useCallback(se=>{const Pe=t.find(it=>it.id===se);Pe&&(ce.current=!!Pe.text,ee(se),ge(!1))},[t]),At=b.useCallback(()=>{Q&&(ge(!0),Qe(()=>{ee(null),ge(!1)},150))},[Q]);b.useEffect(()=>{u&&Q&&At()},[u]);const nn=b.useCallback(se=>{Q&&(s(t.map(Pe=>Pe.id===Q?{...Pe,text:se.trim()||void 0}:Pe)),At())},[Q,t,s,At]),yn=typeof window<"u"?window.scrollY:0,ps=["nw","ne","se","sw"],qn=T?"#f97316":"#3c82f7",Es=[{dir:"n",cls:le.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:qn})})},{dir:"e",cls:le.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:qn})})},{dir:"s",cls:le.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:qn})})},{dir:"w",cls:le.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:qn})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:K,className:`${le.overlay} ${c?"":le.light} ${o?le.placing:""} ${h?le.passthrough:""} ${u?le.overlayExiting:""} ${T?le.wireframe:""}${p?` ${p}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Fe,children:t.map(se=>{var St;const Pe=M.has(se.id),it=((St=si[se.type])==null?void 0:St.label)||se.type,Xe=se.y-yn;return r.jsxs("div",{"data-design-placement":se.id,className:`${le.placement} ${Pe?le.selected:""} ${Re.has(se.id)?le.exiting:""}`,style:{left:se.x,top:Xe,width:se.width,height:se.height,position:"fixed"},onMouseDown:ut=>Et(ut,se.id),onDoubleClick:()=>$t(se.id),children:[r.jsx("span",{className:le.placementLabel,children:it}),r.jsx("span",{className:`${le.placementAnnotation} ${se.text?le.annotationVisible:""}`,children:(se.text&&ye.current.set(se.id,se.text),se.text||ye.current.get(se.id)||"")}),r.jsx("div",{className:le.placementContent,children:r.jsx(Zk,{type:se.type,width:se.width,height:se.height,text:se.text})}),r.jsx("div",{className:le.deleteButton,onMouseDown:ut=>ut.stopPropagation(),onClick:()=>ft(se.id),children:"✕"}),ps.map(ut=>r.jsx("div",{className:`${le.handle} ${le[`handle${ut.charAt(0).toUpperCase()}${ut.slice(1)}`]}`,onMouseDown:ot=>Be(ot,se.id,ut)},ut)),Es.map(({dir:ut,cls:ot,arrow:ct})=>r.jsx("div",{className:`${le.edgeHandle} ${ot}`,onMouseDown:Mt=>Be(Mt,se.id,ut),children:ct},ut))]},se.id)})}),Q&&(()=>{var qt;const se=t.find($e=>$e.id===Q);if(!se)return null;const Pe=se.y-yn,it=se.x+se.width/2,Xe=Pe-8,St=Pe+se.height+8,ut=Xe>200,ot=St<window.innerHeight-100,ct=Math.max(160,Math.min(window.innerWidth-160,it));let Mt;return ut?Mt={left:ct,bottom:window.innerHeight-Xe}:ot?Mt={left:ct,top:St}:Mt={left:ct,top:Math.max(80,window.innerHeight/2-80)},r.jsx(yd,{element:((qt=si[se.type])==null?void 0:qt.label)||se.type,placeholder:ht[se.type]||"Label or content text",initialValue:se.text??"",submitLabel:ce.current?"Save":"Set",onSubmit:nn,onCancel:At,onDelete:ce.current?()=>{nn("")}:void 0,isExiting:G,lightMode:!c,style:Mt})})(),z&&r.jsx("div",{className:le.drawBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),L&&r.jsx("div",{className:le.selectBox,style:{left:L.x,top:L.y,width:L.w,height:L.h},"data-feedback-toolbar":!0}),W&&r.jsx("div",{className:le.sizeIndicator,style:{left:W.x,top:W.y},"data-feedback-toolbar":!0,children:W.text}),te.map((se,Pe)=>r.jsx("div",{className:le.guideLine,style:se.axis==="x"?{position:"fixed",left:se.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:se.pos-yn,right:0,height:1},"data-feedback-toolbar":!0},`${se.axis}-${se.pos}-${Pe}`))]})}function nj(t){if(!t)return"";const s=t.scrollTop>2,o=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${s?le.fadeTop:""} ${o?le.fadeBottom:""}`}var E="currentColor",ae="0.5";function sj({type:t}){switch(t){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:E,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:E,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:E,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:E,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:E,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:E,strokeWidth:ae})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:E,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:E,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:E,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:E,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:E,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:E,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:E,strokeWidth:ae})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:E,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:E,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:E,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:E,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:E,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:E,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:E,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:E,strokeWidth:ae,fill:E,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:E,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:E,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:E,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:E,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:E,strokeWidth:ae})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:E,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:E,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:E,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:E,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:E,strokeWidth:ae})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:E,strokeWidth:ae,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:E,strokeWidth:ae,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:E,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:E,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:E,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:E,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:E,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:E,strokeWidth:ae}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:E,strokeWidth:ae,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:E,strokeWidth:ae,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:E,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:E,strokeWidth:ae})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:E,strokeWidth:ae})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:E,strokeWidth:ae,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:E,strokeWidth:ae,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:E,strokeWidth:ae}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:E,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:E,strokeWidth:ae}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:E,strokeWidth:ae}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:E,strokeWidth:ae})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:E,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:E,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:E,strokeWidth:ae,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:E,strokeWidth:ae,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:E,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:E,opacity:".15",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:E,strokeWidth:ae})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:E,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:E,strokeWidth:ae,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:E,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:E,strokeWidth:ae})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:E,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:E,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:E,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:E,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:E,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:E,strokeWidth:ae,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:E,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:E,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:E,strokeWidth:ae})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:E,strokeWidth:ae,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:E,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:E,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:E,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:E,strokeWidth:ae})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:E,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:E,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:E,opacity:".2",stroke:E,strokeWidth:ae}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:E,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:E,strokeWidth:ae}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:E,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:E,strokeWidth:ae})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:E,strokeWidth:ae,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:E,strokeWidth:ae,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:E,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:E,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:E,strokeWidth:ae,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:E,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:E,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:E,opacity:".15",stroke:E,strokeWidth:ae})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:E,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:E,opacity:".2",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:E,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:E,strokeWidth:ae,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:E,strokeWidth:ae,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:E,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:E,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:E,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:E,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:E,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:E,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:E,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:E,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:E,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:E,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:E,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:E,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:E,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:E,strokeWidth:ae,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:E,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:E,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:E,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:E,strokeWidth:ae})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:E,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:E,strokeWidth:ae,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:E,strokeWidth:ae})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:E,strokeWidth:ae}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:E,strokeWidth:ae,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:E,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:E,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:E,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:E,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:E,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:E,strokeWidth:ae})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:E,strokeWidth:ae,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:E,strokeWidth:ae}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:E,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:E,strokeWidth:ae})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:E,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:E,strokeWidth:ae,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:E,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:E,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:E,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:E,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:E,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:E,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:E,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:E,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:E,opacity:".08",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:E,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:E,strokeWidth:ae,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:E,strokeWidth:ae,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:E,strokeWidth:ae,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:E,strokeWidth:ae,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:E,strokeWidth:ae,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:E,strokeWidth:ae,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:E,strokeWidth:ae,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:E,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:E,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:E,strokeWidth:ae,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:E,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:E,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:E,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:E,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:E,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:E,strokeWidth:ae}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:E,opacity:".2"})]});default:return null}}function ij({activeType:t,onSelect:s,onDragStart:o,scrollRef:a,fadeClass:c,blankCanvas:u}){return r.jsx("div",{ref:a,className:`${le.placeScroll} ${c||""}`,children:C5.map(f=>r.jsxs("div",{className:le.paletteSection,children:[r.jsx("div",{className:le.paletteSectionTitle,children:f.section}),f.items.map(p=>r.jsxs("div",{className:`${le.paletteItem} ${t===p.type?le.active:""} ${u?le.wireframe:""}`,onClick:()=>s(p.type),onMouseDown:h=>{h.button===0&&o(p.type,h)},children:[r.jsx("div",{className:le.paletteItemIcon,children:r.jsx(sj,{type:p.type})}),r.jsx("span",{className:le.paletteItemLabel,children:p.label})]},p.type))]},f.section))})}function oj({value:t,suffix:s}){const[o,a]=b.useState(null),[c,u]=b.useState(s),[f,p]=b.useState("up"),h=b.useRef(t),_=b.useRef(s),g=b.useRef(),y=o!==null&&c!==s;return b.useEffect(()=>{if(t!==h.current){if(t===0){h.current=t,_.current=s,a(null);return}p(t>h.current?"up":"down"),a(h.current),u(_.current),h.current=t,_.current=s,clearTimeout(g.current),g.current=Qe(()=>a(null),250)}else _.current=s},[t,s]),o===null?r.jsxs(r.Fragment,{children:[t,s?` ${s}`:""]}):y?r.jsxs("span",{className:le.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[t," ",s]}),r.jsxs("span",{className:`${le.rollingNum} ${f==="up"?le.exitUp:le.exitDown}`,children:[o," ",c]},`o${o}-${t}`),r.jsxs("span",{className:`${le.rollingNum} ${f==="up"?le.enterUp:le.enterDown}`,children:[t," ",s]},`n${t}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:le.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:t}),r.jsx("span",{className:`${le.rollingNum} ${f==="up"?le.exitUp:le.exitDown}`,children:o},`o${o}-${t}`),r.jsx("span",{className:`${le.rollingNum} ${f==="up"?le.enterUp:le.enterDown}`,children:t},`n${t}`)]}),s?` ${s}`:""]})}function aj({activeType:t,onSelect:s,isDarkMode:o,sectionCount:a,onDetectSections:c,visible:u,onExited:f,placementCount:p,onClearPlacements:h,onDragStart:_,blankCanvas:g,onBlankCanvasChange:y,wireframePurpose:x,onWireframePurposeChange:w,Tooltip:S}){const[T,M]=b.useState(!1),[C,z]=b.useState("exit"),[O,L]=b.useState(!1),[$,W]=b.useState(!0),P=b.useRef(0),te=b.useRef(""),F=b.useRef(0),Q=b.useRef(),ee=b.useRef(null),[G,ge]=b.useState("");b.useEffect(()=>(u?(M(!0),clearTimeout(Q.current),cancelAnimationFrame(F.current),F.current=pr(()=>{F.current=pr(()=>{z("enter")})})):(cancelAnimationFrame(F.current),z("exit"),clearTimeout(Q.current),Q.current=Qe(()=>{M(!1),f==null||f()},200)),()=>cancelAnimationFrame(F.current)),[u]);const ce=p>0||a>0,Re=p+a;return Re>0&&(P.current=Re,te.current=g?Re===1?"Component":"Components":Re===1?"Change":"Changes"),b.useEffect(()=>{if(ce)O?W(!1):(W(!0),L(!0),pr(()=>{pr(()=>{W(!1)})}));else{W(!0);const J=Qe(()=>L(!1),300);return()=>clearTimeout(J)}},[ce]),b.useEffect(()=>{if(!T)return;const J=ee.current;if(!J)return;const ye=()=>ge(nj(J));ye(),J.addEventListener("scroll",ye,{passive:!0});const K=new ResizeObserver(ye);return K.observe(J),()=>{J.removeEventListener("scroll",ye),K.disconnect()}},[T]),T?r.jsxs("div",{className:`${le.palette} ${le[C]} ${o?"":le.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:J=>J.stopPropagation(),onMouseDown:J=>J.stopPropagation(),onTransitionEnd:J=>{J.target===J.currentTarget&&(u||(clearTimeout(Q.current),M(!1),z("exit"),f==null||f()))},children:[r.jsxs("div",{className:le.paletteHeader,children:[r.jsx("div",{className:le.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:le.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${le.canvasToggle} ${g?le.active:""}`,onClick:()=>y(!g),children:[r.jsx("span",{className:le.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:le.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${le.wireframePurposeWrap} ${g?"":le.collapsed}`,children:r.jsx("div",{className:le.wireframePurposeInner,children:r.jsx("textarea",{className:le.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:x,onChange:J=>w(J.target.value),rows:2})})}),r.jsx(ij,{activeType:t,onSelect:s,onDragStart:_,scrollRef:ee,fadeClass:G,blankCanvas:g}),O&&r.jsx("div",{className:`${le.paletteFooterWrap} ${$?le.footerHidden:""}`,children:r.jsx("div",{className:le.paletteFooterInner,children:r.jsx("div",{className:le.paletteFooterInnerContent,children:r.jsxs("div",{className:le.paletteFooter,children:[r.jsx("span",{className:le.paletteFooterCount,children:r.jsx(oj,{value:P.current,suffix:te.current})}),r.jsx("button",{className:le.paletteFooterClear,onClick:h,children:"Clear"})]})})})})]}):null}function br(t){if(t.parentElement)return t.parentElement;const s=t.getRootNode();return s instanceof ShadowRoot?s.host:null}function os(t,s){let o=t;for(;o;){if(o.matches(s))return o;o=br(o)}return null}function rj(t,s=4){const o=[];let a=t,c=0;for(;a&&c<s;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let f=u;if(a.id)f=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const h=a.className.split(/\s+/).find(_=>_.length>2&&!_.match(/^[a-z]{1,2}$/)&&!_.match(/[A-Z0-9]{5,}/));h&&(f=`.${h.split("_")[0]}`)}const p=br(a);!a.parentElement&&p&&(f=`⟨shadow⟩ ${f}`),o.unshift(f),a=p,c++}return o.join(" > ")}function _r(t){var a,c,u,f,p,h,_,g;const s=rj(t);if(t.dataset.element)return{name:t.dataset.element,path:s};const o=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(o)){const y=os(t,"svg");if(y){const x=br(y);if(x instanceof HTMLElement)return{name:`graphic in ${_r(x).name}`,path:s}}return{name:"graphic element",path:s}}if(o==="svg"){const y=br(t);if((y==null?void 0:y.tagName.toLowerCase())==="button"){const x=(a=y.textContent)==null?void 0:a.trim();return{name:x?`icon in "${x}" button`:"button icon",path:s}}return{name:"icon",path:s}}if(o==="button"){const y=(c=t.textContent)==null?void 0:c.trim(),x=t.getAttribute("aria-label");return x?{name:`button [${x}]`,path:s}:{name:y?`button "${y.slice(0,25)}"`:"button",path:s}}if(o==="a"){const y=(u=t.textContent)==null?void 0:u.trim(),x=t.getAttribute("href");return y?{name:`link "${y.slice(0,25)}"`,path:s}:x?{name:`link to ${x.slice(0,30)}`,path:s}:{name:"link",path:s}}if(o==="input"){const y=t.getAttribute("type")||"text",x=t.getAttribute("placeholder"),w=t.getAttribute("name");return x?{name:`input "${x}"`,path:s}:w?{name:`input [${w}]`,path:s}:{name:`${y} input`,path:s}}if(["h1","h2","h3","h4","h5","h6"].includes(o)){const y=(f=t.textContent)==null?void 0:f.trim();return{name:y?`${o} "${y.slice(0,35)}"`:o,path:s}}if(o==="p"){const y=(p=t.textContent)==null?void 0:p.trim();return y?{name:`paragraph: "${y.slice(0,40)}${y.length>40?"...":""}"`,path:s}:{name:"paragraph",path:s}}if(o==="span"||o==="label"){const y=(h=t.textContent)==null?void 0:h.trim();return y&&y.length<40?{name:`"${y}"`,path:s}:{name:o,path:s}}if(o==="li"){const y=(_=t.textContent)==null?void 0:_.trim();return y&&y.length<40?{name:`list item: "${y.slice(0,35)}"`,path:s}:{name:"list item",path:s}}if(o==="blockquote")return{name:"blockquote",path:s};if(o==="code"){const y=(g=t.textContent)==null?void 0:g.trim();return y&&y.length<30?{name:`code: \`${y}\``,path:s}:{name:"code",path:s}}if(o==="pre")return{name:"code block",path:s};if(o==="img"){const y=t.getAttribute("alt");return{name:y?`image "${y.slice(0,30)}"`:"image",path:s}}if(o==="video")return{name:"video",path:s};if(["div","section","article","nav","header","footer","aside","main"].includes(o)){const y=t.className,x=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${o} [${w}]`,path:s};if(x)return{name:`${x}`,path:s};if(typeof y=="string"&&y){const S=y.split(/[\s_-]+/).map(T=>T.replace(/[A-Z0-9]{5,}.*$/,"")).filter(T=>T.length>2&&!/^[a-z]{1,2}$/.test(T)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:s}}return{name:o==="div"?"container":o,path:s}}return{name:o,path:s}}function Nl(t){var u,f,p;const s=[],o=(u=t.textContent)==null?void 0:u.trim();o&&o.length<100&&s.push(o);const a=t.previousElementSibling;if(a){const h=(f=a.textContent)==null?void 0:f.trim();h&&h.length<50&&s.unshift(`[before: "${h.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const h=(p=c.textContent)==null?void 0:p.trim();h&&h.length<50&&s.push(`[after: "${h.slice(0,40)}"]`)}return s.join(" ")}function Uu(t){const s=br(t);if(!s)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(s.children)).filter(g=>g!==t&&g instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(g=>{var S;const y=g.tagName.toLowerCase(),x=g.className;let w="";if(typeof x=="string"&&x){const T=x.split(/\s+/).map(M=>M.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M));T&&(w=`.${T}`)}if(y==="button"||y==="a"){const T=(S=g.textContent)==null?void 0:S.trim().slice(0,15);if(T)return`${y}${w} "${T}"`}return`${y}${w}`});let p=s.tagName.toLowerCase();if(typeof s.className=="string"&&s.className){const g=s.className.split(/\s+/).map(y=>y.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(y=>y.length>2&&!/^[a-z]{1,2}$/.test(y));g&&(p=`.${g}`)}const h=s.children.length,_=h>u.length+1?` (${h} total in ${p})`:"";return u.join(", ")+_}function Al(t){const s=t.className;return typeof s!="string"||!s?"":s.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var T5=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),lj=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),cj=new Set(["input","textarea","select"]),uj=new Set(["img","video","canvas","svg"]),dj=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Yu(t){if(typeof window>"u")return{};const s=window.getComputedStyle(t),o={},a=t.tagName.toLowerCase();let c;lj.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:cj.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:uj.has(a)?c=["width","height","objectFit","borderRadius"]:dj.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const f=u.replace(/([A-Z])/g,"-$1").toLowerCase(),p=s.getPropertyValue(f);p&&!T5.has(p)&&(o[u]=p)}return o}var fj=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Wu(t){if(typeof window>"u")return"";const s=window.getComputedStyle(t),o=[];for(const a of fj){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=s.getPropertyValue(c);u&&!T5.has(u)&&o.push(`${c}: ${u}`)}return o.join("; ")}function hj(t){if(!t)return;const s={},o=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of o){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),f=a.slice(c+1).trim();u&&f&&(s[u]=f)}}return Object.keys(s).length>0?s:void 0}function Fu(t){const s=[],o=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),f=t.getAttribute("aria-hidden");return o&&s.push(`role="${o}"`),a&&s.push(`aria-label="${a}"`),c&&s.push(`aria-describedby="${c}"`),u&&s.push(`tabindex=${u}`),f==="true"&&s.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&s.push("focusable"),s.join(", ")}function Xu(t){const s=[];let o=t;for(;o&&o.tagName.toLowerCase()!=="html";){const a=o.tagName.toLowerCase();let c=a;if(o.id)c=`${a}#${o.id}`;else if(o.className&&typeof o.className=="string"){const f=o.className.split(/\s+/).map(p=>p.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(p=>p.length>2);f&&(c=`${a}.${f}`)}const u=br(o);!o.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),s.unshift(c),o=u}return s.join(" > ")}var mj=new Set(["nav","header","main","section","article","footer","aside"]),Vm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Hy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},pj=new Set(["script","style","noscript","link","meta"]),_j=40;function E5(t){let s=t;for(;s&&s!==document.body&&s!==document.documentElement;){const o=window.getComputedStyle(s).position;if(o==="fixed"||o==="sticky")return!0;s=s.parentElement}return!1}function ba(t){const s=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(s)&&document.querySelectorAll(s).length===1)return s;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${s}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const o=t.parentElement;if(o){const c=Array.from(o.children).indexOf(t)+1;return`${o===document.body?"body":ba(o)} > ${s}:nth-child(${c})`}return s}function xd(t){var f;const s=t.tagName.toLowerCase(),o=t.getAttribute("aria-label");if(o)return o;const a=t.getAttribute("role");if(a&&Vm[a])return Vm[a];if(Hy[s])return Hy[s];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const p=(f=c.textContent)==null?void 0:f.trim();if(p&&p.length<=50)return p;if(p)return p.slice(0,47)+"..."}const{name:u}=_r(t);return u.charAt(0).toUpperCase()+u.slice(1)}function M5(t){const s=t.className;return typeof s!="string"||!s?null:s.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function R5(t){var a;const s=(a=t.textContent)==null?void 0:a.trim();if(!s)return null;const o=s.replace(/\s+/g," ");return o.length<=30?o:o.slice(0,30)+"…"}function gj(){const t=document.querySelector("main")||document.body,s=Array.from(t.children);let o=s;t!==document.body&&s.length<3&&(o=Array.from(document.body.children));const a=[];return o.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const f=c.tagName.toLowerCase();if(pj.has(f)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const p=window.getComputedStyle(c);if(p.display==="none"||p.visibility==="hidden")return;const h=c.getBoundingClientRect();if(h.height<_j)return;const _=mj.has(f),g=c.getAttribute("role")&&Vm[c.getAttribute("role")],y=f==="div"&&h.height>=60;if(!_&&!g&&!y)return;const x=window.scrollY,w=E5(c),S={x:h.x,y:w?h.y:h.y+x,width:h.width,height:h.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:xd(c),tagName:f,selector:ba(c),role:c.getAttribute("role"),className:M5(c),textSnippet:R5(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function yj(t){const s=window.scrollY,o=t.getBoundingClientRect(),a=E5(t),c={x:o.x,y:a?o.y:o.y+s,width:o.width,height:o.height},u=t.parentElement;let f=0;return u&&(f=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:xd(t),tagName:t.tagName.toLowerCase(),selector:ba(t),role:t.getAttribute("role"),className:M5(t),textSnippet:R5(t),originalRect:c,currentRect:{...c},originalIndex:f,isFixed:a}}var Iy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Vy=["nw","n","ne","e","se","s","sw","w"],qu=24,Uy=16,Qu=5;function Yy(t,s,o,a){let c=1/0,u=1/0;const f=t.x,p=t.x+t.width,h=t.x+t.width/2,_=t.y,g=t.y+t.height,y=t.y+t.height/2,x=[];for(const P of s)o.has(P.id)||x.push(P.currentRect);a&&x.push(...a);for(const P of x){const te=P.x,F=P.x+P.width,Q=P.x+P.width/2,ee=P.y,G=P.y+P.height,ge=P.y+P.height/2;for(const ce of[f,p,h])for(const Re of[te,F,Q]){const J=Re-ce;Math.abs(J)<Qu&&Math.abs(J)<Math.abs(c)&&(c=J)}for(const ce of[_,g,y])for(const Re of[ee,G,ge]){const J=Re-ce;Math.abs(J)<Qu&&Math.abs(J)<Math.abs(u)&&(u=J)}}const w=Math.abs(c)<Qu?c:0,S=Math.abs(u)<Qu?u:0,T=[],M=new Set,C=f+w,z=p+w,O=h+w,L=_+S,$=g+S,W=y+S;for(const P of x){const te=P.x,F=P.x+P.width,Q=P.x+P.width/2,ee=P.y,G=P.y+P.height,ge=P.y+P.height/2;for(const ce of[te,Q,F])for(const Re of[C,O,z])if(Math.abs(Re-ce)<.5){const J=`x:${Math.round(ce)}`;M.has(J)||(M.add(J),T.push({axis:"x",pos:ce}))}for(const ce of[ee,ge,G])for(const Re of[L,W,$])if(Math.abs(Re-ce)<.5){const J=`y:${Math.round(ce)}`;M.has(J)||(M.add(J),T.push({axis:"y",pos:ce}))}}return{dx:w,dy:S,guides:T}}var xj=new Set(["script","style","noscript","link","meta","br","hr"]);function Wy(t){let s=t;for(;s&&s!==document.body&&s!==document.documentElement;){if(s.closest("[data-feedback-toolbar]"))return null;if(xj.has(s.tagName.toLowerCase())){s=s.parentElement;continue}const o=s.getBoundingClientRect();if(o.width>=Uy&&o.height>=Uy)return s;s=s.parentElement}return null}function bj({rearrangeState:t,onChange:s,isDarkMode:o,exiting:a,className:c,blankCanvas:u,extraSnapRects:f,onSelectionChange:p,deselectSignal:h,onDragMove:_,onDragEnd:g,clearSignal:y}){const{sections:x}=t,w=b.useRef(t);w.current=t;const[S,T]=b.useState(new Set),[M,C]=b.useState(!1),z=b.useRef(y);b.useEffect(()=>{y!==void 0&&y!==z.current&&(z.current=y,x.length>0&&C(!0))},[y,x.length]);const O=b.useRef(h);b.useEffect(()=>{h!==O.current&&(O.current=h,T(new Set))},[h]);const[L,$]=b.useState(null),[W,P]=b.useState(!1),te=b.useRef(!1),F=b.useCallback(Y=>{const q=x.find(ue=>ue.id===Y);q&&(te.current=!!q.note,$(Y),P(!1))},[x]),Q=b.useCallback(()=>{L&&(P(!0),Qe(()=>{$(null),P(!1)},150))},[L]),ee=b.useCallback(Y=>{L&&(s({...t,sections:x.map(q=>q.id===L?{...q,note:Y.trim()||void 0}:q)}),Q())},[L,x,t,s,Q]);b.useEffect(()=>{a&&L&&Q()},[a]);const[G,ge]=b.useState(new Set),ce=b.useRef(new Map),[Re,J]=b.useState(null),[ye,K]=b.useState(null),[be,A]=b.useState([]),[ie,Ce]=b.useState(0),Se=b.useRef(null),ve=b.useRef(new Set),Ze=b.useRef(new Map),[Fe,Et]=b.useState(new Map),[Be,ft]=b.useState(new Map),ht=b.useRef(new Set),$t=b.useRef(new Map),At=b.useRef(p);At.current=p;const nn=b.useRef(_);nn.current=_;const yn=b.useRef(g);yn.current=g,b.useEffect(()=>{u&&T(new Set)},[u]);const[ps,qn]=b.useState(()=>!t.sections.some(Y=>{const q=Y.originalRect,ue=Y.currentRect;return Math.abs(q.x-ue.x)>1||Math.abs(q.y-ue.y)>1||Math.abs(q.width-ue.width)>1||Math.abs(q.height-ue.height)>1}));b.useEffect(()=>{if(!ps){const Y=Qe(()=>qn(!0),380);return()=>clearTimeout(Y)}},[]);const Es=b.useRef(new Set);b.useEffect(()=>{Es.current=new Set(x.map(Y=>Y.selector))},[x]),b.useEffect(()=>{const Y=()=>Ce(window.scrollY);return Y(),window.addEventListener("scroll",Y,{passive:!0}),window.addEventListener("resize",Y,{passive:!0}),()=>{window.removeEventListener("scroll",Y),window.removeEventListener("resize",Y)}},[]),b.useEffect(()=>{const Y=q=>{if(Se.current){J(null);return}const ue=document.elementFromPoint(q.clientX,q.clientY);if(!ue){J(null);return}if(ue.closest("[data-feedback-toolbar]")){J(null);return}if(ue.closest("[data-design-placement]")){J(null);return}if(ue.closest("[data-annotation-popup]")){J(null);return}const he=Wy(ue);if(!he){J(null);return}for(const ke of Es.current)try{const xe=document.querySelector(ke);if(xe&&(xe===he||he.contains(xe))){J(null);return}}catch{}const De=he.getBoundingClientRect();J({x:De.x,y:De.y,w:De.width,h:De.height})};return document.addEventListener("mousemove",Y,{passive:!0}),()=>document.removeEventListener("mousemove",Y)},[x]),b.useEffect(()=>{const Y=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=Y}},[]),b.useEffect(()=>{const Y=q=>{var xe,at,Ye,kt;if(Se.current||q.button!==0)return;const ue=q.target;if(!ue||ue.closest("[data-feedback-toolbar]")||ue.closest("[data-design-placement]")||ue.closest("[data-annotation-popup]"))return;const he=Wy(ue);let De=!1;if(he)for(const Ge of Es.current)try{const Ne=document.querySelector(Ge);if(Ne&&(Ne===he||he.contains(Ne))){De=!0;break}}catch{}const ke=!!(q.shiftKey||q.metaKey||q.ctrlKey);if(he&&!De){q.preventDefault(),q.stopPropagation();const Ge=yj(he),Ne=[...x,Ge],gt=[...t.originalOrder,Ge.id];s({...t,sections:Ne,originalOrder:gt});const jt=new Set([Ge.id]);T(jt),(xe=At.current)==null||xe.call(At,jt,ke),J(null);const It=q.clientX,Ee=q.clientY,mt={x:Ge.currentRect.x,y:Ge.currentRect.y};Ge.originalRect;let pt=!1,rt=0,cn=0;Se.current="move";const Ue=kn=>{var Qt;const $n=kn.clientX-It,Dn=kn.clientY-Ee;if(!pt&&(Math.abs($n)>2||Math.abs(Dn)>2)&&(pt=!0),!pt)return;const Ti={x:mt.x+$n,y:mt.y+Dn,width:Ge.currentRect.width,height:Ge.currentRect.height},Ms=Yy(Ti,Ne,new Set([Ge.id]),f);A(Ms.guides);const ts=$n+Ms.dx,Ot=Dn+Ms.dy;rt=ts,cn=Ot;const Vt=document.querySelector(`[data-rearrange-section="${Ge.id}"]`);Vt&&(Vt.style.transform=`translate(${ts}px, ${Ot}px)`),Et(new Map([[Ge.id,{x:mt.x+ts,y:mt.y+Ot,width:Ge.currentRect.width,height:Ge.currentRect.height}]])),(Qt=nn.current)==null||Qt.call(nn,ts,Ot)},yt=()=>{var $n;window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",yt),Se.current=null,A([]),Et(new Map);const kn=document.querySelector(`[data-rearrange-section="${Ge.id}"]`);kn&&(kn.style.transform=""),pt&&s({...t,sections:Ne.map(Dn=>Dn.id===Ge.id?{...Dn,currentRect:{...Dn.currentRect,x:Math.max(0,mt.x+rt),y:Math.max(0,mt.y+cn)}}:Dn),originalOrder:gt}),($n=yn.current)==null||$n.call(yn,rt,cn,pt)};window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",yt)}else if(De&&he){q.preventDefault();for(const Ge of x)try{const Ne=document.querySelector(Ge.selector);if(Ne&&Ne===he){const gt=new Set([Ge.id]);T(gt),(at=At.current)==null||at.call(At,gt,ke);return}}catch{}ke||(T(new Set),(Ye=At.current)==null||Ye.call(At,new Set,!1))}else ke||(T(new Set),(kt=At.current)==null||kt.call(At,new Set,!1))};return document.addEventListener("mousedown",Y,!0),()=>document.removeEventListener("mousedown",Y,!0)},[x,t,s]),b.useEffect(()=>{const Y=q=>{const ue=q.target;if(!(ue.tagName==="INPUT"||ue.tagName==="TEXTAREA"||ue.isContentEditable)){if((q.key==="Backspace"||q.key==="Delete")&&S.size>0){q.preventDefault();const he=new Set(S);ge(De=>{const ke=new Set(De);for(const xe of he)ke.add(xe);return ke}),T(new Set),Qe(()=>{const De=w.current;s({...De,sections:De.sections.filter(ke=>!he.has(ke.id)),originalOrder:De.originalOrder.filter(ke=>!he.has(ke))}),ge(ke=>{const xe=new Set(ke);for(const at of he)xe.delete(at);return xe})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(q.key)&&S.size>0){q.preventDefault();const he=q.shiftKey?20:1,De=q.key==="ArrowLeft"?-he:q.key==="ArrowRight"?he:0,ke=q.key==="ArrowUp"?-he:q.key==="ArrowDown"?he:0;s({...t,sections:x.map(xe=>S.has(xe.id)?{...xe,currentRect:{...xe.currentRect,x:Math.max(0,xe.currentRect.x+De),y:Math.max(0,xe.currentRect.y+ke)}}:xe)});return}q.key==="Escape"&&S.size>0&&T(new Set)}};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[S,x,t,s]);const se=b.useCallback((Y,q)=>{var It;if(Y.button!==0)return;const ue=Y.target;if(ue.closest(`.${le.handle}`)||ue.closest(`.${le.deleteButton}`))return;Y.preventDefault(),Y.stopPropagation();let he;Y.shiftKey||Y.metaKey||Y.ctrlKey?(he=new Set(S),he.has(q)?he.delete(q):he.add(q)):S.has(q)?he=new Set(S):he=new Set([q]),T(he),(he.size!==S.size||[...he].some(Ee=>!S.has(Ee)))&&((It=At.current)==null||It.call(At,he,!!(Y.shiftKey||Y.metaKey||Y.ctrlKey)));const ke=Y.clientX,xe=Y.clientY,at=new Map;for(const Ee of x)he.has(Ee.id)&&at.set(Ee.id,{x:Ee.currentRect.x,y:Ee.currentRect.y});Se.current="move";let Ye=!1,kt=0,Ge=0;const Ne=new Map;for(const Ee of x)if(he.has(Ee.id)){const mt=document.querySelector(`[data-rearrange-section="${Ee.id}"]`);Ne.set(Ee.id,{outlineEl:mt,curW:Ee.currentRect.width,curH:Ee.currentRect.height})}const gt=Ee=>{var Ms;const mt=Ee.clientX-ke,pt=Ee.clientY-xe;if(mt===0&&pt===0)return;Ye=!0;let rt=1/0,cn=1/0,Ue=-1/0,yt=-1/0;for(const[ts,{curW:Ot,curH:Vt}]of Ne){const Qt=at.get(ts);if(!Qt)continue;const _s=Qt.x+mt,Te=Qt.y+pt;rt=Math.min(rt,_s),cn=Math.min(cn,Te),Ue=Math.max(Ue,_s+Ot),yt=Math.max(yt,Te+Vt)}const kn=Yy({x:rt,y:cn,width:Ue-rt,height:yt-cn},x,he,f),$n=mt+kn.dx,Dn=pt+kn.dy;kt=$n,Ge=Dn,A(kn.guides);for(const[,{outlineEl:ts}]of Ne)ts&&(ts.style.transform=`translate(${$n}px, ${Dn}px)`);const Ti=new Map;for(const[ts,{curW:Ot,curH:Vt}]of Ne){const Qt=at.get(ts);if(Qt){const _s={x:Math.max(0,Qt.x+$n),y:Math.max(0,Qt.y+Dn),width:Ot,height:Vt};Ti.set(ts,_s)}}Et(Ti),(Ms=nn.current)==null||Ms.call(nn,$n,Dn)},jt=Ee=>{var mt,pt;window.removeEventListener("mousemove",gt),window.removeEventListener("mouseup",jt),Se.current=null,A([]),Et(new Map);for(const[,{outlineEl:rt}]of Ne)rt&&(rt.style.transform="");if(Ye){const rt=Ee.clientX-ke,cn=Ee.clientY-xe;if(Math.abs(rt)<5&&Math.abs(cn)<5)s({...t,sections:x.map(Ue=>{const yt=at.get(Ue.id);return yt?{...Ue,currentRect:{...Ue.currentRect,x:yt.x,y:yt.y}}:Ue})});else{s({...t,sections:x.map(Ue=>{const yt=at.get(Ue.id);return yt?{...Ue,currentRect:{...Ue.currentRect,x:Math.max(0,yt.x+kt),y:Math.max(0,yt.y+Ge)}}:Ue})}),(mt=yn.current)==null||mt.call(yn,kt,Ge,!0);return}}(pt=yn.current)==null||pt.call(yn,0,0,!1)};window.addEventListener("mousemove",gt),window.addEventListener("mouseup",jt)},[S,x,t,s]),Pe=b.useCallback((Y,q,ue)=>{Y.preventDefault(),Y.stopPropagation();const he=x.find(gt=>gt.id===q);if(!he)return;T(new Set([q])),Se.current="resize";const De=Y.clientX,ke=Y.clientY,xe={...he.currentRect};he.originalRect;const at=xe.width/xe.height;let Ye={...xe};const kt=document.querySelector(`[data-rearrange-section="${q}"]`),Ge=gt=>{const jt=gt.clientX-De,It=gt.clientY-ke;let Ee=xe.x,mt=xe.y,pt=xe.width,rt=xe.height;if(ue.includes("e")&&(pt=Math.max(qu,xe.width+jt)),ue.includes("w")&&(pt=Math.max(qu,xe.width-jt),Ee=xe.x+xe.width-pt),ue.includes("s")&&(rt=Math.max(qu,xe.height+It)),ue.includes("n")&&(rt=Math.max(qu,xe.height-It),mt=xe.y+xe.height-rt),gt.shiftKey)if(ue.length===2){const Ue=Math.abs(pt-xe.width),yt=Math.abs(rt-xe.height);Ue>yt?rt=pt/at:pt=rt*at,ue.includes("w")&&(Ee=xe.x+xe.width-pt),ue.includes("n")&&(mt=xe.y+xe.height-rt)}else ue==="e"||ue==="w"?rt=pt/at:pt=rt*at,ue==="w"&&(Ee=xe.x+xe.width-pt),ue==="n"&&(mt=xe.y+xe.height-rt);Ye={x:Ee,y:mt,width:pt,height:rt},kt&&(kt.style.left=`${Ee}px`,kt.style.top=`${mt-ie}px`,kt.style.width=`${pt}px`,kt.style.height=`${rt}px`),K({x:gt.clientX+12,y:gt.clientY+12,text:`${Math.round(pt)} × ${Math.round(rt)}`}),Et(new Map([[q,Ye]]))},Ne=()=>{window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Ne),K(null),Se.current=null,Et(new Map),s({...t,sections:x.map(gt=>gt.id===q?{...gt,currentRect:Ye}:gt)})};window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Ne)},[x,t,s,ie]),it=b.useCallback(Y=>{ge(q=>{const ue=new Set(q);return ue.add(Y),ue}),T(q=>{const ue=new Set(q);return ue.delete(Y),ue}),Qe(()=>{const q=w.current;s({...q,sections:q.sections.filter(ue=>ue.id!==Y),originalOrder:q.originalOrder.filter(ue=>ue!==Y)}),ge(ue=>{const he=new Set(ue);return he.delete(Y),he})},180)},[s]),Xe=Y=>{const q=Y.originalRect,ue=Y.currentRect;return Math.abs(q.x-ue.x)>1||Math.abs(q.y-ue.y)>1||Math.abs(q.width-ue.width)>1||Math.abs(q.height-ue.height)>1},St=Y=>{const q=Y.originalRect,ue=Y.currentRect;return Math.abs(q.x-ue.x)>1||Math.abs(q.y-ue.y)>1},ut=Y=>{const q=Y.originalRect,ue=Y.currentRect;return Math.abs(q.width-ue.width)>1||Math.abs(q.height-ue.height)>1};for(const Y of x)Ze.current.has(Y.id)||(St(Y)?Ze.current.set(Y.id,"move"):ut(Y)&&Ze.current.set(Y.id,"resize"));for(const Y of Ze.current.keys())x.some(q=>q.id===Y)||Ze.current.delete(Y);const ot=x.filter(Y=>{try{if(G.has(Y.id)||S.has(Y.id))return!0;const q=document.querySelector(Y.selector);if(!q)return!1;const ue=q.getBoundingClientRect(),he=Y.originalRect;return Math.abs(ue.width-he.width)+Math.abs(ue.height-he.height)<200}catch{return!1}}),ct=ot.filter(Y=>Xe(Y)),Mt=ot.filter(Y=>!Xe(Y)),qt=new Set(ct.map(Y=>Y.id));for(const Y of ve.current)qt.has(Y)||ve.current.delete(Y);const $e=[...qt].sort().join(",");for(const Y of ct)$t.current.set(Y.id,{currentRect:Y.currentRect,originalRect:Y.originalRect,isFixed:Y.isFixed});return b.useEffect(()=>{const Y=ht.current;ht.current=qt;const q=new Map;for(const ue of Y)if(!qt.has(ue)){if(!x.some(De=>De.id===ue))continue;const he=$t.current.get(ue);he&&(q.set(ue,{orig:he.originalRect,target:he.currentRect,isFixed:he.isFixed}),$t.current.delete(ue))}if(q.size>0){ft(he=>{const De=new Map(he);for(const[ke,xe]of q)De.set(ke,xe);return De});const ue=Qe(()=>{ft(he=>{const De=new Map(he);for(const ke of q.keys())De.delete(ke);return De})},250);return()=>clearTimeout(ue)}},[$e,x]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${le.rearrangeOverlay} ${o?"":le.light} ${a?le.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[Re&&r.jsx("div",{className:le.hoverHighlight,style:{left:Re.x,top:Re.y,width:Re.w,height:Re.h}}),Mt.map(Y=>{const q=Y.currentRect,ue=Y.isFixed?q.y:q.y-ie,he=Iy,De=S.has(Y.id);return r.jsxs("div",{"data-rearrange-section":Y.id,className:`${le.sectionOutline} ${De?le.selected:""} ${M||a||G.has(Y.id)?le.exiting:""}`,style:{left:q.x,top:ue,width:q.width,height:q.height,borderColor:he.border,backgroundColor:he.bg,...ps?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ke=>se(ke,Y.id),onDoubleClick:()=>F(Y.id),children:[r.jsx("span",{className:le.sectionLabel,style:{backgroundColor:he.pill},children:Y.label}),r.jsx("span",{className:`${le.sectionAnnotation} ${Y.note?le.annotationVisible:""}`,children:(Y.note&&ce.current.set(Y.id,Y.note),Y.note||ce.current.get(Y.id)||"")}),r.jsxs("span",{className:le.sectionDimensions,children:[Math.round(q.width)," × ",Math.round(q.height)]}),r.jsx("div",{className:le.deleteButton,onMouseDown:ke=>ke.stopPropagation(),onClick:()=>it(Y.id),children:"✕"}),Vy.map(ke=>r.jsx("div",{className:`${le.handle} ${le[`handle${ke.charAt(0).toUpperCase()}${ke.slice(1)}`]}`,onMouseDown:xe=>Pe(xe,Y.id,ke)},ke))]},Y.id)}),ct.map(Y=>{const q=Y.currentRect,ue=Y.isFixed?q.y:q.y-ie,he=S.has(Y.id),De=St(Y),ke=ut(Y);if(u&&!he)return null;const at=!ve.current.has(Y.id);return at&&ve.current.add(Y.id),r.jsxs("div",{"data-rearrange-section":Y.id,className:`${le.ghostOutline} ${he?le.selected:""} ${M||a||G.has(Y.id)?le.exiting:""}`,style:{left:q.x,top:ue,width:q.width,height:q.height,...ps?{}:{opacity:0,animation:"none",transition:"none"},...at?{}:{animation:"none"}},onMouseDown:Ye=>se(Ye,Y.id),onDoubleClick:()=>F(Y.id),children:[r.jsx("span",{className:le.sectionLabel,style:{backgroundColor:Iy.pill},children:Y.label}),r.jsx("span",{className:`${le.sectionAnnotation} ${Y.note?le.annotationVisible:""}`,children:(Y.note&&ce.current.set(Y.id,Y.note),Y.note||ce.current.get(Y.id)||"")}),r.jsxs("span",{className:le.sectionDimensions,children:[Math.round(q.width)," × ",Math.round(q.height)]}),r.jsx("div",{className:le.deleteButton,onMouseDown:Ye=>Ye.stopPropagation(),onClick:()=>it(Y.id),children:"✕"}),Vy.map(Ye=>r.jsx("div",{className:`${le.handle} ${le[`handle${Ye.charAt(0).toUpperCase()}${Ye.slice(1)}`]}`,onMouseDown:kt=>Pe(kt,Y.id,Ye)},Ye)),r.jsx("span",{className:le.ghostBadge,children:(()=>{const Ye=Ze.current.get(Y.id);if(De&&ke){const[kt,Ge]=Ye==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",kt," ",r.jsxs("span",{className:le.ghostBadgeExtra,children:["& ",Ge]})]})}return`Suggested ${ke?"Resize":"Move"}`})()})]},Y.id)})]}),!u&&(()=>{const Y=[];for(const q of ct){const ue=Fe.get(q.id);Y.push({id:q.id,orig:q.originalRect,target:ue||q.currentRect,isFixed:q.isFixed,isSelected:S.has(q.id),isExiting:G.has(q.id)})}for(const[q,ue]of Fe)if(!Y.some(he=>he.id===q)){const he=x.find(De=>De.id===q);he&&Y.push({id:q,orig:he.originalRect,target:ue,isFixed:he.isFixed,isSelected:S.has(q)})}for(const[q,ue]of Be)Y.some(he=>he.id===q)||Y.push({id:q,orig:ue.orig,target:ue.target,isFixed:ue.isFixed,isSelected:!1,isExiting:!0});return Y.length===0?null:r.jsxs("svg",{className:`${le.connectorSvg} ${M||a?le.connectorExiting:""}`,children:[Y.map(({id:q,orig:ue,target:he,isFixed:De,isSelected:ke,isExiting:xe})=>{const at=ue.x+ue.width/2,Ye=(De?ue.y:ue.y-ie)+ue.height/2,kt=he.x+he.width/2,Ge=(De?he.y:he.y-ie)+he.height/2,Ne=kt-at,gt=Ge-Ye,jt=Math.sqrt(Ne*Ne+gt*gt);if(jt<2)return null;const It=Math.min(1,jt/40),Ee=Math.min(jt*.3,60),mt=jt>0?-gt/jt:0,pt=jt>0?Ne/jt:0,rt=(at+kt)/2+mt*Ee,cn=(Ye+Ge)/2+pt*Ee,Ue=Fe.has(q),yt=Ue||ke?1:.4,kn=Ue||ke?1:.5;return r.jsxs("g",{className:xe?le.connectorExiting:"",children:[r.jsx("path",{className:le.connectorLine,d:`M ${at} ${Ye} Q ${rt} ${cn} ${kt} ${Ge}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:yt*It}),r.jsx("circle",{className:le.connectorDot,cx:at,cy:Ye,r:4*It,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:kn*It,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:le.connectorDot,cx:kt,cy:Ge,r:4*It,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:kn*It,filter:"url(#connDotShadow)"})]},`conn-${q}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),L&&(()=>{const Y=x.find(Ge=>Ge.id===L);if(!Y)return null;const q=Y.currentRect,ue=Y.isFixed?q.y:q.y-ie,he=q.x+q.width/2,De=ue-8,ke=ue+q.height+8,xe=De>200,at=ke<window.innerHeight-100,Ye=Math.max(160,Math.min(window.innerWidth-160,he));let kt;return xe?kt={left:Ye,bottom:window.innerHeight-De}:at?kt={left:Ye,top:ke}:kt={left:Ye,top:Math.max(80,window.innerHeight/2-80)},r.jsx(yd,{element:Y.label,placeholder:"Add a note about this section",initialValue:Y.note??"",submitLabel:te.current?"Save":"Set",onSubmit:ee,onCancel:Q,onDelete:te.current?()=>{ee("")}:void 0,isExiting:W,lightMode:!o,style:kt})})(),ye&&r.jsx("div",{className:le.sizeIndicator,style:{left:ye.x,top:ye.y},"data-feedback-toolbar":!0,children:ye.text}),be.map((Y,q)=>r.jsx("div",{className:le.guideLine,style:Y.axis==="x"?{position:"fixed",left:Y.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:Y.pos-ie,width:"100vw",height:1}},`${Y.axis}-${Y.pos}-${q}`))]})}var Um=new Set(["script","style","noscript","link","meta","br","hr"]);function vj(){const t=document.querySelector("main")||document.body,s=[],o=Array.from(t.children),a=t!==document.body&&o.length<3?Array.from(document.body.children):o;for(const c of a){if(!(c instanceof HTMLElement)||Um.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const f=c.getBoundingClientRect();if(!(f.height<10||f.width<10)){s.push({label:xd(c),selector:ba(c),top:f.top,bottom:f.bottom,left:f.left,right:f.right,area:f.width*f.height});for(const p of Array.from(c.children)){if(!(p instanceof HTMLElement)||Um.has(p.tagName.toLowerCase())||p.hasAttribute("data-feedback-toolbar"))continue;const h=window.getComputedStyle(p);if(h.display==="none"||h.visibility==="hidden")continue;const _=p.getBoundingClientRect();_.height<10||_.width<10||s.push({label:xd(p),selector:ba(p),top:_.top,bottom:_.bottom,left:_.left,right:_.right,area:_.width*_.height})}}}return s}function wj(t){const s=window.scrollY;return t.map(({label:o,selector:a,rect:c})=>{const u=c.y-s;return{label:o,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function Sj(t){const s=window.scrollY,o=t.y-s,a=t.x;return{top:o,bottom:o+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Ym(t,s){const o=s?wj(s):vj(),a=Sj(t);let c=null,u=null,f=null,p=null,h=null;for(const S of o){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!h||S.area<h._area)&&(h={label:S.label,selector:S.selector,_area:S.area});const T=a.right>S.left+5&&a.left<S.right-5,M=a.bottom>S.top+5&&a.top<S.bottom-5;if(T&&S.bottom<=a.top+5){const C=Math.round(a.top-S.bottom);(!c||C<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,C),_dist:C})}if(T&&S.top>=a.bottom-5){const C=Math.round(S.top-a.bottom);(!u||C<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,C),_dist:C})}if(M&&S.right<=a.left+5){const C=Math.round(a.left-S.right);(!f||C<f._dist)&&(f={label:S.label,selector:S.selector,gap:Math.max(0,C),_dist:C})}if(M&&S.left>=a.right-5){const C=Math.round(S.left-a.right);(!p||C<p._dist)&&(p={label:S.label,selector:S.selector,gap:Math.max(0,C),_dist:C})}}const _=window.innerWidth,g=window.innerHeight,y=jj(t,_),x=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=kj(a,t,_,g,h?{label:h.label,selector:h.selector,_area:h._area}:null,o);return{above:x(c),below:x(u),left:x(f),right:x(p),alignment:y,containedIn:h?{label:h.label,selector:h.selector}:null,outOfBounds:w}}function kj(t,s,o,a,c,u){const f={};let p=!1;const h=[];if(t.left<-2&&h.push("left"),t.right>o+2&&h.push("right"),t.top<-2&&h.push("top"),t.bottom>a+2&&h.push("bottom"),h.length>0&&(f.viewport=h,p=!0),c){const _=u.find(g=>g.label===c.label&&g.selector===c.selector&&Math.abs(g.area-c._area)<10);if(_){const g=[];t.left<_.left-2&&g.push("left"),t.right>_.right+2&&g.push("right"),t.top<_.top-2&&g.push("top"),t.bottom>_.bottom+2&&g.push("bottom"),g.length>0&&(f.container={label:c.label,edges:g},p=!0)}}return p?f:null}function jj(t,s){if(t.width/s>.85)return"full-width";const a=t.x+t.width/2,c=s/2,u=a-c,f=s*.08;return Math.abs(u)<f?"center":u<0?"left":"right"}function N5(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function A5(t,s={}){const o=[];t.above&&o.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&o.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),s.includeLeftRight&&(t.left&&o.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&o.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=N5(t.alignment);return t.containedIn?o.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):o.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),s.includePixelRef&&s.pixelRef&&o.push(`Pixel ref: \`${s.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&o.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&o.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),o}function Cj(t,s,o){var u,f;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(N5(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(f=t.outOfBounds)!=null&&f.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=o?`, ${Math.round(o.width)}×${Math.round(o.height)}px`:"";return`at (${Math.round(s.x)}, ${Math.round(s.y)})${c}: ${a.join(", ")}`}var Fy=15;function Xy(t){if(t.length<2)return[];const s=[],o=new Set;for(let a=0;a<t.length;a++){if(o.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)o.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Fy&&c.push(u);if(c.length>=2){const u=c.map(h=>t[h]);u.sort((h,_)=>h.rect.x-_.rect.x);const f=[];for(let h=0;h<u.length-1;h++)f.push(Math.round(u[h+1].rect.x-(u[h].rect.x+u[h].rect.width)));const p=Math.round(u.reduce((h,_)=>h+_.rect.y,0)/u.length);s.push({labels:u.map(h=>h.label),type:"row",sharedEdge:p,gaps:f,avgGap:f.length?Math.round(f.reduce((h,_)=>h+_,0)/f.length):0}),c.forEach(h=>o.add(h))}}for(let a=0;a<t.length;a++){if(o.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)o.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Fy&&c.push(u);if(c.length>=2){const u=c.map(h=>t[h]);u.sort((h,_)=>h.rect.y-_.rect.y);const f=[];for(let h=0;h<u.length-1;h++)f.push(Math.round(u[h+1].rect.y-(u[h].rect.y+u[h].rect.height)));const p=Math.round(u.reduce((h,_)=>h+_.rect.x,0)/u.length);s.push({labels:u.map(h=>h.label),type:"column",sharedEdge:p,gaps:f,avgGap:f.length?Math.round(f.reduce((h,_)=>h+_,0)/f.length):0}),c.forEach(h=>o.add(h))}}return s}function Tj(t){if(t.length<2)return[];const s=Xy(t.map(f=>({label:f.label,rect:f.originalRect}))),o=Xy(t.map(f=>({label:f.label,rect:f.currentRect}))),a=[],c=new Set;for(const f of s){const p=new Set(f.labels);let h=null,_=0;for(const g of o){const y=g.labels.filter(x=>p.has(x)).length;y>=2&&y>_&&(h=g,_=y)}if(h){const g=h.labels.filter(x=>p.has(x)),y=g.join(", ");if(h.type!==f.type){const x=f.type==="row"?"y":"x",w=h.type==="row"?"y":"x";a.push(`**${y}**: ${f.type} (${x}≈${f.sharedEdge}, ${f.avgGap}px gaps) → ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps)`)}else if(Math.abs(f.sharedEdge-h.sharedEdge)>20||Math.abs(f.avgGap-h.avgGap)>5){const x=f.type==="row"?"y":"x",w=Math.abs(f.sharedEdge-h.sharedEdge)>20?` ${x}: ${f.sharedEdge} → ${h.sharedEdge}`:"",S=Math.abs(f.avgGap-h.avgGap)>5?` gaps: ${f.avgGap}px → ${h.avgGap}px`:"";a.push(`**${y}**: ${f.type} shifted —${w}${S}`)}g.forEach(x=>c.add(x))}else{const g=f.labels.join(", "),y=f.type==="row"?"y":"x";a.push(`**${g}**: ${f.type} (${y}≈${f.sharedEdge}) dissolved`),f.labels.forEach(x=>c.add(x))}}for(const f of o){if(f.labels.every(_=>c.has(_))||f.labels.filter(_=>!c.has(_)).length<2)continue;if(!s.some(_=>_.labels.filter(y=>f.labels.includes(y)).length>=2)){const _=f.type==="row"?"y":"x";a.push(`**${f.labels.join(", ")}**: new ${f.type} (${_}≈${f.sharedEdge}, ${f.avgGap}px gaps)`),f.labels.forEach(g=>c.add(g))}}const u=t.filter(f=>!c.has(f.label));if(u.length>=2){const f={};for(const p of u){const h=Math.round(p.currentRect.x/5)*5;(f[h]??(f[h]=[])).push(p.label)}for(const[p,h]of Object.entries(f))h.length>=2&&a.push(`**${h.join(", ")}**: shared left edge at x≈${p}`)}return a}function D5(t){if(typeof document>"u")return{viewport:t,contentArea:null};const s=[],o=new Set,a=p=>{o.has(p)||p instanceof HTMLElement&&(p.hasAttribute("data-feedback-toolbar")||Um.has(p.tagName.toLowerCase())||(o.add(p),s.push(p)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const p of Array.from(document.body.children))if(a(p),p.children){for(const h of Array.from(p.children))if(a(h),h.children)for(const _ of Array.from(h.children))a(_)}let f=null;for(const p of s){const h=p.getBoundingClientRect();if(h.height<50)continue;const _=getComputedStyle(p);if(_.maxWidth&&_.maxWidth!=="none"&&_.maxWidth!=="0px"){(!f||h.width<f.rect.width)&&(f={el:p,rect:h});continue}!f&&h.width<t.width-20&&h.width>100&&(f={el:p,rect:h})}if(f){const{el:p,rect:h}=f;return{viewport:t,contentArea:{width:Math.round(h.width),left:Math.round(h.left),right:Math.round(h.right),centerX:Math.round(h.left+h.width/2),selector:ba(p)}}}return{viewport:t,contentArea:null}}function Ej(t){if(typeof document>"u")return null;const s=document.querySelector(t);if(!(s!=null&&s.parentElement))return null;const o=getComputedStyle(s.parentElement),a={parentDisplay:o.display,parentSelector:ba(s.parentElement)};return o.display.includes("flex")&&(a.flexDirection=o.flexDirection),o.display.includes("grid")&&o.gridTemplateColumns!=="none"&&(a.gridCols=o.gridTemplateColumns),o.gap&&o.gap!=="normal"&&o.gap!=="0px"&&(a.gap=o.gap),a}function L5(t,s){const o=s.contentArea,a=o?o.width:s.viewport.width,c=o?o.left:0,u=o?o.centerX:Math.round(s.viewport.width/2),f=Math.round(t.x-c),p=Math.round(c+a-(t.x+t.width)),h=(t.width/a*100).toFixed(1),_=t.x+t.width/2,g=Math.abs(_-u)<20,y=t.width/a>.95,x=[];return y?x.push("`width: 100%` of container"):x.push(`left \`${f}px\` in container, right \`${p}px\`, width \`${h}%\` (\`${Math.round(t.width)}px\`)`),g&&!y&&x.push("centered — `margin-inline: auto`"),x.join(" — ")}function O5(t){const{viewport:s,contentArea:o}=t;let a=`### Reference Frame
`;if(a+=`- Viewport: \`${s.width}×${s.height}px\`
`,o){const c=o;a+=`- Content area: \`${c.width}px\` wide, left edge at \`x=${c.left}\`, right at \`x=${c.right}\` (\`${c.selector}\`)
`,a+=`- Pixel → CSS translation:
`,a+=`  - **Horizontal position in container**: \`element.x - ${c.left}\` → use as \`margin-left\` or \`left\`
`,a+=`  - **Width as % of container**: \`element.width / ${c.width} × 100\` → use as \`width: X%\`
`,a+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",a+=`  - **Centered**: if \`|element.centerX - ${c.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else a+=`- No distinct content container — elements positioned relative to full viewport
`,a+=`- Pixel → CSS translation:
`,a+=`  - **Width as % of viewport**: \`element.width / ${s.width} × 100\` → use as \`width: X%\`
`,a+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(s.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return a+=`
`,a}function Mj(t){const s=Ej(t);if(!s)return null;let o=`\`${s.parentDisplay}\``;return s.flexDirection&&(o+=`, flex-direction: \`${s.flexDirection}\``),s.gridCols&&(o+=`, grid-template-columns: \`${s.gridCols}\``),s.gap&&(o+=`, gap: \`${s.gap}\``),`Parent: ${o} (\`${s.parentSelector}\`)`}function qy(t,s,o,a="standard"){var M,C,z,O;if(t.length===0)return"";const c=[...t].sort((L,$)=>Math.abs(L.y-$.y)<20?L.x-$.x:L.y-$.y);let u="";if(o!=null&&o.blankCanvas?(u+=`## Wireframe: New Page

`,o.wireframePurpose&&(u+=`> **Purpose:** ${o.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((L,$)=>{var P;const W=((P=si[L.type])==null?void 0:P.label)||L.type;u+=`${$+1}. **${W}** — \`${Math.round(L.width)}×${Math.round(L.height)}px\` at \`(${Math.round(L.x)}, ${Math.round(L.y)})\`
`}),u;const f=D5(s);u+=O5(f),u+=`### Components
`,c.forEach((L,$)=>{var G;const W=((G=si[L.type])==null?void 0:G.label)||L.type,P={x:L.x,y:L.y,width:L.width,height:L.height};u+=`${$+1}. **${W}** — \`${Math.round(L.width)}×${Math.round(L.height)}px\` at \`(${Math.round(L.x)}, ${Math.round(L.y)})\`
`;const te=Ym(P),Q=A5(te,{includeLeftRight:a==="detailed"||a==="forensic"});for(const ge of Q)u+=`   - ${ge}
`;const ee=L5(P,f);ee&&(u+=`   - CSS: ${ee}
`)}),u+=`
### Layout Analysis
`;const p=[];for(const L of c){const $=p.find(W=>Math.abs(W.y-L.y)<30);$?$.items.push(L):p.push({y:L.y,items:[L]})}if(p.sort((L,$)=>L.y-$.y),p.forEach((L,$)=>{L.items.sort((P,te)=>P.x-te.x);const W=L.items.map(P=>{var te;return((te=si[P.type])==null?void 0:te.label)||P.type});if(L.items.length===1){const te=L.items[0].width>s.width*.8;u+=`- Row ${$+1} (y≈${Math.round(L.y)}): ${W[0]}${te?" — full width":""}
`}else u+=`- Row ${$+1} (y≈${Math.round(L.y)}): ${W.join(" | ")} — ${L.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let L=0;L<c.length-1;L++){const $=c[L],W=c[L+1],P=((M=si[$.type])==null?void 0:M.label)||$.type,te=((C=si[W.type])==null?void 0:C.label)||W.type,F=Math.round(W.y-($.y+$.height)),Q=Math.round(W.x-($.x+$.width));Math.abs($.y-W.y)<30?u+=`- ${P} → ${te}: \`${Q}px\` horizontal gap
`:u+=`- ${P} → ${te}: \`${F}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let L=0;L<c.length;L++)for(let $=L+1;$<c.length;$++){const W=c[L],P=c[$],te=((z=si[W.type])==null?void 0:z.label)||W.type,F=((O=si[P.type])==null?void 0:O.label)||P.type,Q=Math.round(P.y-(W.y+W.height)),ee=Math.round(P.x-(W.x+W.width));u+=`- ${te} ↔ ${F}: h=\`${ee}px\` v=\`${Q}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((L,$)=>{var P;const W=((P=si[L.type])==null?void 0:P.label)||L.type;u+=`${$}. ${W} at \`(${Math.round(L.x)}, ${Math.round(L.y)})\`
`}))}u+=`
### Suggested Implementation
`;const h=c.some(L=>L.type==="navigation"),_=c.some(L=>L.type==="hero"),g=c.some(L=>L.type==="sidebar"),y=c.some(L=>L.type==="footer"),x=c.filter(L=>L.type==="card"),w=c.filter(L=>L.type==="form"),S=c.filter(L=>L.type==="table"),T=c.filter(L=>L.type==="modal");if(h&&(u+=`- Top navigation bar with logo + nav links + CTA
`),_&&(u+=`- Hero section with heading, subtext, and call-to-action
`),g&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),x.length>1?u+=`- ${x.length}-column card grid — use CSS Grid or Flexbox
`:x.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),T.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),y&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,g){const L=c.find($=>$.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(L.width)}px 1fr;\`
`}if(x.length>1){const L=Math.round(x[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${x.length}, ${L}px); gap: 16px;\`
`}h&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Qy(t,s="standard",o){const{sections:a}=t,c=[];for(const g of a){const y=g.originalRect,x=g.currentRect,w=Math.abs(y.x-x.x)>1||Math.abs(y.y-x.y)>1,S=Math.abs(y.width-x.width)>1||Math.abs(y.height-x.height)>1;if(!w&&!S){s==="forensic"&&c.push({section:g,posMoved:!1,sizeChanged:!1});continue}c.push({section:g,posMoved:w,sizeChanged:S})}if(c.length===0||s!=="forensic"&&c.every(g=>!g.posMoved&&!g.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const f=o?o.width:typeof window<"u"?window.innerWidth:0,p=o?o.height:typeof window<"u"?window.innerHeight:0,h=D5({width:f,height:p});s!=="compact"&&(u+=O5(h)),s==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const _=g=>a.map(y=>({label:y.label,selector:y.selector,rect:g==="original"?y.originalRect:y.currentRect}));u+=`**Changes:**
`;for(const{section:g,posMoved:y,sizeChanged:x}of c){const w=g.originalRect,S=g.currentRect;if(!y&&!x){u+=`- ${g.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(s==="compact"){y&&x?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:y?u+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${g.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(y&&x?u+=`- Suggested: move and resize **${g.label}**
`:y?u+=`- Suggested: move **${g.label}**
`:u+=`- Suggested: resize **${g.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,y){const M=Ym(w,_("original")),C=Ym(S,_("current")),z=x?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${Cj(M,{x:w.x,y:w.y},z)}
`;const O=x?{width:S.width,height:S.height}:void 0,L=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,$=O?`, ${Math.round(O.width)}×${Math.round(O.height)}px`:"",P=A5(C,{includeLeftRight:s==="detailed"||s==="forensic"});if(P.length>0){u+=`  - Suggested position ${L}${$}: ${P[0]}
`;for(let F=1;F<P.length;F++)u+=`    ${P[F]}
`}else u+=`  - Suggested position ${L}${$}
`;const te=L5(S,h);te&&(u+=`  - CSS: ${te}
`)}const T=Mj(g.selector);if(T&&(u+=`  - ${T}
`),u+=`  - Selector: \`${g.selector}\`
`,s==="detailed"||s==="forensic"){const M=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;M!==g.selector&&(u+=`  - Element: \`${M}\`
`),g.role&&(u+=`  - Role: \`${g.role}\`
`),s==="forensic"&&g.textSnippet&&(u+=`  - Text: "${g.textSnippet}"
`)}s==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(s!=="compact"){const g=c.filter(x=>x.posMoved).map(x=>({label:x.section.label,originalRect:x.section.originalRect,currentRect:x.section.currentRect})),y=Tj(g);if(y.length>0){u+=`
### Layout Summary
`;for(const x of y)u+=`- ${x}
`}}if(s!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const g=[...a].sort((y,x)=>Math.abs(y.currentRect.y-x.currentRect.y)<20?y.currentRect.x-x.currentRect.x:y.currentRect.y-x.currentRect.y);for(const y of g){const x=y.currentRect,w=Math.abs(x.x-y.originalRect.x)>1||Math.abs(x.y-y.originalRect.y)>1||Math.abs(x.width-y.originalRect.width)>1||Math.abs(x.height-y.originalRect.height)>1;u+=`- ${y.label}: \`${Math.round(x.width)}×${Math.round(x.height)}px\` at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`${w?" ← suggested":""}
`}}return u}var Wm="feedback-annotations-",B5=7;function bd(t){return`${Wm}${t}`}function nm(t){if(typeof window>"u")return[];try{const s=localStorage.getItem(bd(t));if(!s)return[];const o=JSON.parse(s),a=Date.now()-B5*24*60*60*1e3;return o.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function z5(t,s){if(!(typeof window>"u"))try{localStorage.setItem(bd(t),JSON.stringify(s))}catch{}}function Rj(){const t=new Map;if(typeof window>"u")return t;try{const s=Date.now()-B5*24*60*60*1e3;for(let o=0;o<localStorage.length;o++){const a=localStorage.key(o);if(a!=null&&a.startsWith(Wm)){const c=a.slice(Wm.length),u=localStorage.getItem(a);if(u){const p=JSON.parse(u).filter(h=>!h.timestamp||h.timestamp>s);p.length>0&&t.set(c,p)}}}}catch{}return t}function Dl(t,s,o){const a=s.map(c=>({...c,_syncedTo:o}));z5(t,a)}var I0="agentation-design-";function Nj(t){if(typeof window>"u")return[];try{const s=localStorage.getItem(`${I0}${t}`);return s?JSON.parse(s):[]}catch{return[]}}function Aj(t,s){if(!(typeof window>"u"))try{localStorage.setItem(`${I0}${t}`,JSON.stringify(s))}catch{}}function Dj(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${I0}${t}`)}catch{}}var V0="agentation-rearrange-";function Lj(t){if(typeof window>"u")return null;try{const s=localStorage.getItem(`${V0}${t}`);return s?JSON.parse(s):null}catch{return null}}function Oj(t,s){if(!(typeof window>"u"))try{localStorage.setItem(`${V0}${t}`,JSON.stringify(s))}catch{}}function Bj(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${V0}${t}`)}catch{}}var U0="agentation-wireframe-";function zj(t){if(typeof window>"u")return null;try{const s=localStorage.getItem(`${U0}${t}`);return s?JSON.parse(s):null}catch{return null}}function Gy(t,s){if(!(typeof window>"u"))try{localStorage.setItem(`${U0}${t}`,JSON.stringify(s))}catch{}}function Gu(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${U0}${t}`)}catch{}}var $5="agentation-session-";function Y0(t){return`${$5}${t}`}function $j(t){if(typeof window>"u")return null;try{return localStorage.getItem(Y0(t))}catch{return null}}function sm(t,s){if(!(typeof window>"u"))try{localStorage.setItem(Y0(t),s)}catch{}}function Pj(t){if(!(typeof window>"u"))try{localStorage.removeItem(Y0(t))}catch{}}var P5=`${$5}toolbar-hidden`;function Hj(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(P5)==="1"}catch{return!1}}function Ij(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(P5,"1")}catch{}}async function im(t,s){const o=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:s})});if(!o.ok)throw new Error(`Failed to create session: ${o.status}`);return o.json()}async function Ky(t,s){const o=await fetch(`${t}/sessions/${s}`);if(!o.ok)throw new Error(`Failed to get session: ${o.status}`);return o.json()}async function lr(t,s,o){const a=await fetch(`${t}/sessions/${s}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Zy(t,s,o){const a=await fetch(`${t}/annotations/${s}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Ro(t,s){const o=await fetch(`${t}/annotations/${s}`,{method:"DELETE"});if(!o.ok)throw new Error(`Failed to delete annotation: ${o.status}`)}var zt={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Jy=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),e2=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Vj=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Uj(t){const s=(t==null?void 0:t.mode)??"filtered";let o=Jy;if(t!=null&&t.skipExact){const a=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);o=new Set([...Jy,...a])}return{maxComponents:(t==null?void 0:t.maxComponents)??6,maxDepth:(t==null?void 0:t.maxDepth)??30,mode:s,skipExact:o,skipPatterns:t!=null&&t.skipPatterns?[...e2,...t.skipPatterns]:e2,userPatterns:(t==null?void 0:t.userPatterns)??Vj,filter:t==null?void 0:t.filter}}function Yj(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Wj(t,s=10){const o=new Set;let a=t,c=0;for(;a&&c<s;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const f=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();f.length>1&&o.add(f)}}),a=a.parentElement,c++;return o}function Fj(t,s){const o=Yj(t);for(const a of s){if(a===o)return!0;const c=o.split("-").filter(f=>f.length>2),u=a.split("-").filter(f=>f.length>2);for(const f of c)for(const p of u)if(f===p||f.includes(p)||p.includes(f))return!0}return!1}function Xj(t,s,o,a){if(o.filter)return o.filter(t,s);switch(o.mode){case"all":return!0;case"filtered":return!(o.skipExact.has(t)||o.skipPatterns.some(c=>c.test(t)));case"smart":return o.skipExact.has(t)||o.skipPatterns.some(c=>c.test(t))?!1:!!(a&&Fj(t,a)||o.userPatterns.some(c=>c.test(t)));default:return!0}}var cr=null,qj=new WeakMap;function om(t){return Object.keys(t).some(s=>s.startsWith("__reactFiber$")||s.startsWith("__reactInternalInstance$")||s.startsWith("__reactProps$"))}function Qj(){if(cr!==null)return cr;if(typeof document>"u")return!1;if(document.body&&om(document.body))return cr=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const s of t){const o=document.querySelector(s);if(o&&om(o))return cr=!0,!0}if(document.body){for(const s of document.body.children)if(om(s))return cr=!0,!0}return cr=!1,!1}var Ll={map:qj};function Gj(t){return Object.keys(t).find(o=>o.startsWith("__reactFiber$")||o.startsWith("__reactInternalInstance$"))||null}function Kj(t){const s=Gj(t);return s?t[s]:null}function da(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function Zj(t){var c;const{tag:s,type:o,elementType:a}=t;if(s===zt.HostComponent||s===zt.HostText||s===zt.HostHoistable||s===zt.HostSingleton||s===zt.Fragment||s===zt.Mode||s===zt.Profiler||s===zt.DehydratedFragment||s===zt.HostRoot||s===zt.HostPortal||s===zt.ScopeComponent||s===zt.OffscreenComponent||s===zt.LegacyHiddenComponent||s===zt.CacheComponent||s===zt.TracingMarkerComponent||s===zt.Throw||s===zt.ViewTransitionComponent||s===zt.ActivityComponent)return null;if(s===zt.ForwardRef){const u=a;if(u!=null&&u.render){const f=da(u.render);if(f)return f}return u!=null&&u.displayName?u.displayName:da(o)}if(s===zt.MemoComponent||s===zt.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const f=da(u.type);if(f)return f}return u!=null&&u.displayName?u.displayName:da(o)}if(s===zt.ContextProvider){const u=o;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(s===zt.ContextConsumer){const u=o;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(s===zt.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?da(u._result):null}return s===zt.SuspenseComponent||s===zt.SuspenseListComponent?null:s===zt.IncompleteClassComponent||s===zt.IncompleteFunctionComponent||s===zt.FunctionComponent||s===zt.ClassComponent||s===zt.IndeterminateComponent?da(o):null}function Jj(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function eC(t,s){const o=Uj(s),a=o.mode==="all";if(a){const h=Ll.map.get(t);if(h!==void 0)return h}if(!Qj()){const h={path:null,components:[]};return a&&Ll.map.set(t,h),h}const c=o.mode==="smart"?Wj(t):void 0,u=[];try{let h=Kj(t),_=0;for(;h&&_<o.maxDepth&&u.length<o.maxComponents;){const g=Zj(h);g&&!Jj(g)&&Xj(g,_,o,c)&&u.push(g),h=h.return,_++}}catch{const h={path:null,components:[]};return a&&Ll.map.set(t,h),h}if(u.length===0){const h={path:null,components:[]};return a&&Ll.map.set(t,h),h}const p={path:u.slice().reverse().map(h=>`<${h}>`).join(" "),components:u};return a&&Ll.map.set(t,p),p}var Ol={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function tC(t){if(!t||typeof t!="object")return null;const s=Object.keys(t),o=s.find(u=>u.startsWith("__reactFiber$"));if(o)return t[o]||null;const a=s.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=s.find(u=>{if(!u.startsWith("__react"))return!1;const f=t[u];return f&&typeof f=="object"&&"_debugSource"in f});return c&&t[c]||null}function ec(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const s=t.type;if(s.displayName)return s.displayName;if(s.name)return s.name}return null}function nC(t,s=50){var c;let o=t,a=0;for(;o&&a<s;){if(o._debugSource)return{source:o._debugSource,componentName:ec(o)};if((c=o._debugOwner)!=null&&c._debugSource)return{source:o._debugOwner._debugSource,componentName:ec(o._debugOwner)};o=o.return,a++}return null}function sC(t){let s=t,o=0;const a=50;for(;s&&o<a;){const c=s,u=["_debugSource","__source","_source","debugSource"];for(const f of u){const p=c[f];if(p&&typeof p=="object"&&"fileName"in p)return{source:p,componentName:ec(s)}}if(s.memoizedProps){const f=s.memoizedProps;if(f.__source&&typeof f.__source=="object"){const p=f.__source;if(p.fileName&&p.lineNumber)return{source:{fileName:p.fileName,lineNumber:p.lineNumber,columnNumber:p.columnNumber},componentName:ec(s)}}}s=s.return,o++}return null}var Ku=new Map;function iC(t){var c;const s=t.tag,o=t.type,a=t.elementType;if(typeof o=="string"||o==null||typeof o=="function"&&((c=o.prototype)!=null&&c.isReactComponent))return null;if((s===Ol.FunctionComponent||s===Ol.IndeterminateComponent)&&typeof o=="function")return o;if(s===Ol.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((s===Ol.MemoComponent||s===Ol.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof o=="function"?o:null}function oC(){const t=ii,s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(s&&"H"in s)return{get:()=>s.H,set:a=>{s.H=a}};const o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(o){const a=o.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function aC(t){const s=t.split(`
`),o=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of s){const f=u.trim();if(!f||o.some(h=>h.test(f)))continue;const p=a.exec(f)||c.exec(f);if(p)return{fileName:p[1],line:parseInt(p[2],10),column:parseInt(p[3],10)}}return null}function rC(t){let s=t;return s=s.replace(/[?#].*$/,""),s=s.replace(/^turbopack:\/\/\/\[project\]\//,""),s=s.replace(/^webpack-internal:\/\/\/\.\//,""),s=s.replace(/^webpack-internal:\/\/\//,""),s=s.replace(/^webpack:\/\/\/\.\//,""),s=s.replace(/^webpack:\/\/\//,""),s=s.replace(/^turbopack:\/\/\//,""),s=s.replace(/^https?:\/\/[^/]+\//,""),s=s.replace(/^file:\/\/\//,"/"),s=s.replace(/^\([^)]+\)\/\.\//,""),s=s.replace(/^\.\//,""),s}function lC(t){const s=iC(t);if(!s)return null;if(Ku.has(s))return Ku.get(s);const o=oC();if(!o)return Ku.set(s,null),null;const a=o.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});o.set(u);try{s({})}catch(f){if(f instanceof Error&&f.message==="probe"&&f.stack){const p=aC(f.stack);p&&(c={fileName:rC(p.fileName),lineNumber:p.line,columnNumber:p.column,componentName:ec(t)||void 0})}}}finally{o.set(a)}return Ku.set(s,c),c}function cC(t,s=15){let o=t,a=0;for(;o&&a<s;){const c=lC(o);if(c)return c;o=o.return,a++}return null}function Fm(t){const s=tC(t);if(!s)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let o=nC(s);if(o||(o=sC(s)),o!=null&&o.source)return{found:!0,source:{fileName:o.source.fileName,lineNumber:o.source.lineNumber,columnNumber:o.source.columnNumber,componentName:o.componentName||void 0},isReactApp:!0,isProduction:!1};const a=cC(s);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function uC(t,s="path"){const{fileName:o,lineNumber:a,columnNumber:c}=t;let u=`${o}:${a}`;return c!==void 0&&(u+=`:${c}`),s==="vscode"?`vscode://file${o.startsWith("/")?"":"/"}${u}`:u}function dC(t,s=10){let o=t,a=0;for(;o&&a<s;){const c=Fm(o);if(c.found)return c;o=o.parentElement,a++}return Fm(t)}var fC=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,hC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=fC}var me=hC,Bl=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function t2(t,s,o="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${s}
`;return o==="forensic"?(c+=`
**Environment:**
`,c+=`- Viewport: ${a}
`,typeof window<"u"&&(c+=`- URL: ${window.location.href}
`,c+=`- User Agent: ${navigator.userAgent}
`,c+=`- Timestamp: ${new Date().toISOString()}
`,c+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),c+=`
---
`):o!=="compact"&&(c+=`**Viewport:** ${a}
`),c+=`
`,t.forEach((u,f)=>{o==="compact"?(c+=`${f+1}. **${u.element}**${u.sourceFile?` (${u.sourceFile})`:""}: ${u.comment}`,u.selectedText&&(c+=` (re: "${u.selectedText.slice(0,30)}${u.selectedText.length>30?"...":""}")`),c+=`
`):o==="forensic"?(c+=`### ${f+1}. ${u.element}
`,u.isMultiSelect&&u.fullPath&&(c+=`*Forensic data shown for first element of selection*
`),u.fullPath&&(c+=`**Full DOM Path:** ${u.fullPath}
`),u.cssClasses&&(c+=`**CSS Classes:** ${u.cssClasses}
`),u.boundingBox&&(c+=`**Position:** x:${Math.round(u.boundingBox.x)}, y:${Math.round(u.boundingBox.y)} (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`),c+=`**Annotation at:** ${u.x.toFixed(1)}% from left, ${Math.round(u.y)}px from top
`,u.selectedText&&(c+=`**Selected text:** "${u.selectedText}"
`),u.nearbyText&&!u.selectedText&&(c+=`**Context:** ${u.nearbyText.slice(0,100)}
`),u.computedStyles&&(c+=`**Computed Styles:** ${u.computedStyles}
`),u.accessibility&&(c+=`**Accessibility:** ${u.accessibility}
`),u.nearbyElements&&(c+=`**Nearby Elements:** ${u.nearbyElements}
`),u.sourceFile&&(c+=`**Source:** ${u.sourceFile}
`),u.reactComponents&&(c+=`**React:** ${u.reactComponents}
`),c+=`**Feedback:** ${u.comment}

`):(c+=`### ${f+1}. ${u.element}
`,c+=`**Location:** ${u.elementPath}
`,u.sourceFile&&(c+=`**Source:** ${u.sourceFile}
`),u.reactComponents&&(c+=`**React:** ${u.reactComponents}
`),o==="detailed"&&(u.cssClasses&&(c+=`**Classes:** ${u.cssClasses}
`),u.boundingBox&&(c+=`**Position:** ${Math.round(u.boundingBox.x)}px, ${Math.round(u.boundingBox.y)}px (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`)),u.selectedText&&(c+=`**Selected text:** "${u.selectedText}"
`),o==="detailed"&&u.nearbyText&&!u.selectedText&&(c+=`**Context:** ${u.nearbyText.slice(0,100)}
`),c+=`**Feedback:** ${u.comment}

`)}),c.trim()}var mC=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,pC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=mC}var En=pC;function n2({annotation:t,globalIndex:s,layerIndex:o,layerSize:a,isExiting:c,isClearing:u,isAnimated:f,isHovered:p,isDeleting:h,isEditingAny:_,renumberFrom:g,markerClickBehavior:y,tooltipStyle:x,onHoverEnter:w,onHoverLeave:S,onClick:T,onContextMenu:M}){const C=(p||h)&&!_,z=C&&y==="delete",O=t.isMultiSelect,L=O?"var(--agentation-color-green)":"var(--agentation-color-accent)",$=c?En.exit:u?En.clearing:f?"":En.enter,W=c?`${(a-1-o)*20}ms`:`${o*20}ms`;return r.jsxs("div",{className:`${En.marker} ${O?En.multiSelect:""} ${$} ${z?En.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:z?void 0:L,animationDelay:W},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:P=>{P.stopPropagation(),c||T(t)},onContextMenu:M?P=>{y==="delete"&&(P.preventDefault(),P.stopPropagation(),c||M(t))}:void 0,children:[C?z?r.jsx(k5,{size:O?18:16}):r.jsx(ES,{size:16}):r.jsx("span",{className:g!==null&&s>=g?En.renumber:void 0,children:s+1}),p&&!_&&r.jsxs("div",{className:`${En.markerTooltip} ${En.enter}`,style:x,children:[r.jsxs("span",{className:En.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:En.markerNote,children:t.comment})]})]})}function _C({x:t,y:s,isMultiSelect:o,isExiting:a}){return r.jsx("div",{className:`${En.marker} ${En.pending} ${o?En.multiSelect:""} ${a?En.exit:En.enter}`,style:{left:`${t}%`,top:s,backgroundColor:o?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(_S,{size:12})})}function s2({annotation:t,fixed:s}){const o=t.isMultiSelect;return r.jsx("div",{className:`${En.marker} ${s?En.fixed:""} ${En.hovered} ${o?En.multiSelect:""} ${En.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:r.jsx(k5,{size:o?12:10})})}var gC=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,yC={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=gC}var am=yC,rm=({className:t="",...s})=>r.jsxs("div",{className:`${am.switchContainer} ${t}`,children:[r.jsx("input",{className:am.switchInput,type:"checkbox",...s}),r.jsx("div",{className:am.switchThumb})]}),xC=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,bC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=xC}var Zu=bC,vC=({className:t="",...s})=>r.jsxs("div",{className:`${Zu.checkboxContainer} ${t}`,children:[r.jsx("input",{className:Zu.checkboxInput,type:"checkbox",...s}),r.jsx("svg",{className:Zu.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{className:Zu.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),wC=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,SC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=wC}var i2=SC,o2=({className:t="",label:s,tooltip:o,checked:a,onChange:c,...u})=>{const f=b.useId();return r.jsxs("div",{className:`${i2.container} ${t}`,...u,children:[r.jsx(vC,{id:f,onChange:c,checked:a}),r.jsx("label",{className:i2.label,htmlFor:f,children:s}),o&&r.jsx(pa,{content:o})]})},kC=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,jC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=kC}var Le=jC;function CC({settings:t,onSettingsChange:s,isDarkMode:o,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:f,isVisible:p,toolbarNearBottom:h,settingsPage:_,onSettingsPageChange:g,onHideToolbar:y}){var x;return r.jsx("div",{className:`${Le.settingsPanel} ${p?Le.enter:Le.exit}`,style:h?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:Le.settingsPanelContainer,children:[r.jsxs("div",{className:`${Le.settingsPage} ${_==="automations"?Le.slideLeft:""}`,children:[r.jsxs("div",{className:Le.settingsHeader,children:[r.jsx("a",{className:Le.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:Le.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:Le.themeToggle,onClick:a,title:o?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:Le.themeIconWrapper,children:r.jsx("span",{className:Le.themeIcon,children:o?r.jsx(CS,{size:20}):r.jsx(TS,{size:20})},o?"sun":"moon")})})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:Le.settingsSection,children:[r.jsxs("div",{className:Le.settingsRow,children:[r.jsxs("div",{className:Le.settingsLabel,children:["Output Detail",r.jsx(pa,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:Le.cycleButton,onClick:()=>{const S=(Bl.findIndex(T=>T.value===t.outputDetail)+1)%Bl.length;s({outputDetail:Bl[S].value})},children:[r.jsx("span",{className:Le.cycleButtonText,children:(x=Bl.find(w=>w.value===t.outputDetail))==null?void 0:x.label},t.outputDetail),r.jsx("span",{className:Le.cycleDots,children:Bl.map(w=>r.jsx("span",{className:`${Le.cycleDot} ${t.outputDetail===w.value?Le.active:""}`},w.value))})]})]}),r.jsxs("div",{className:`${Le.settingsRow} ${Le.settingsRowMarginTop} ${c?"":Le.settingsRowDisabled}`,children:[r.jsxs("div",{className:Le.settingsLabel,children:["React Components",r.jsx(pa,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx(rm,{checked:c&&t.reactEnabled,onChange:w=>s({reactEnabled:w.target.checked}),disabled:!c})]}),r.jsxs("div",{className:`${Le.settingsRow} ${Le.settingsRowMarginTop}`,children:[r.jsxs("div",{className:Le.settingsLabel,children:["Hide Until Restart",r.jsx(pa,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx(rm,{checked:!1,onChange:w=>{w.target.checked&&y()}})]})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:Le.settingsSection,children:[r.jsx("div",{className:`${Le.settingsLabel} ${Le.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:Le.colorOptions,children:Yl.map(w=>r.jsx("button",{className:`${Le.colorOption} ${t.annotationColorId===w.id?Le.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>s({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:Le.settingsSection,children:[r.jsx(o2,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>s({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(o2,{className:Le.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>s({blockInteractions:w.target.checked})})]}),r.jsx("div",{className:Le.divider}),r.jsxs("button",{className:Le.settingsNavLink,onClick:()=>g("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:Le.settingsNavLinkRight,children:[f&&u!=="disconnected"&&r.jsx("span",{className:`${Le.mcpNavIndicator} ${Le[u]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${Le.settingsPage} ${Le.automationsPage} ${_==="automations"?Le.slideIn:""}`,children:[r.jsxs("button",{className:Le.settingsBackButton,onClick:()=>g("main"),children:[r.jsx(RS,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:Le.settingsSection,children:[r.jsxs("div",{className:Le.settingsRow,children:[r.jsxs("span",{className:Le.automationHeader,children:["MCP Connection",r.jsx(pa,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),f&&r.jsx("div",{className:`${Le.mcpStatusDot} ${Le[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:Le.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Le.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:`${Le.settingsSection} ${Le.settingsSectionGrow}`,children:[r.jsxs("div",{className:Le.settingsRow,children:[r.jsxs("span",{className:Le.automationHeader,children:["Webhooks",r.jsx(pa,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:Le.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${Le.autoSendLabel} ${t.webhooksEnabled?Le.active:""} ${t.webhookUrl?"":Le.disabled}`,children:"Auto-Send"}),r.jsx(rm,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>s({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),r.jsx("p",{className:Le.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:Le.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>s({webhookUrl:w.target.value})})]})]})]})})}function lm(t,s="filtered"){const{name:o,path:a}=_r(t);if(s==="off")return{name:o,elementName:o,path:a,reactComponents:null};const c=eC(t,{mode:s});return{name:c.path?`${c.path} ${o}`:o,elementName:o,path:a,reactComponents:c.path}}var a2=!1,cm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},vi=t=>{if(!t||!t.trim())return!1;try{const s=new URL(t.trim());return s.protocol==="http:"||s.protocol==="https:"}catch{return!1}},Yl=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],TC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...Yl.map(s=>`
      [data-agentation-accent="${s.id}"] {
        --agentation-color-accent: ${s.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${s.id}"] {
          --agentation-color-accent: ${s.p3};
        }
      }
    `),`:root {
      ${Yl.map(s=>`--agentation-color-${s.id}: ${s.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Yl.map(s=>`--agentation-color-${s.id}: ${s.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};TC();function fa(t,s){let o=document.elementFromPoint(t,s);if(!o)return null;for(;o!=null&&o.shadowRoot;){const a=o.shadowRoot.elementFromPoint(t,s);if(!a||a===o)break;o=a}return o}function um(t){let s=t;for(;s&&s!==document.body;){const a=window.getComputedStyle(s).position;if(a==="fixed"||a==="sticky")return!0;s=s.parentElement}return!1}function ha(t){return t.status!=="resolved"&&t.status!=="dismissed"}function Ju(t){const s=Fm(t),o=s.found?s:dC(t);if(o.found&&o.source)return uC(o.source,"path")}function EC({demoAnnotations:t,demoDelay:s=1e3,enableDemoMode:o=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:f,onCopy:p,onSubmit:h,copyToClipboard:_=!0,endpoint:g,sessionId:y,onSessionCreated:x,webhookUrl:w,className:S}={}){var Ir,Vr,ro,lo,kc,Xo;const[T,M]=b.useState(!1),[C,z]=b.useState([]),[O,L]=b.useState(!0),[$,W]=b.useState(()=>Hj()),[P,te]=b.useState(!1),F=b.useRef(null);b.useEffect(()=>{const j=B=>{const D=F.current;D&&D.contains(B.target)&&B.stopPropagation()},R=["mousedown","click","pointerdown"];return R.forEach(B=>document.body.addEventListener(B,j)),()=>{R.forEach(B=>document.body.removeEventListener(B,j))}},[]);const[Q,ee]=b.useState(!1),[G,ge]=b.useState(!1),[ce,Re]=b.useState(null),[J,ye]=b.useState({x:0,y:0}),[K,be]=b.useState(null),[A,ie]=b.useState(!1),[Ce,Se]=b.useState("idle"),[ve,Ze]=b.useState(!1),[Fe,Et]=b.useState(!1),[Be,ft]=b.useState(null),[ht,$t]=b.useState(null),[At,nn]=b.useState([]),[yn,ps]=b.useState(null),[qn,Es]=b.useState(null),[se,Pe]=b.useState(null),[it,Xe]=b.useState(null),[St,ut]=b.useState([]),[ot,ct]=b.useState(0),[Mt,qt]=b.useState(!1),[$e,Y]=b.useState(!1),[q,ue]=b.useState(!1),[he,De]=b.useState(!1),[ke,xe]=b.useState(!1),[at,Ye]=b.useState("main"),[kt,Ge]=b.useState(!1),[Ne,gt]=b.useState(!1),[jt,It]=b.useState(!1),[Ee,mt]=b.useState([]),[pt,rt]=b.useState(null),cn=b.useRef(!1),[Ue,yt]=b.useState(!1),[kn,$n]=b.useState(!1),[Dn,Ti]=b.useState(1),[Ms,ts]=b.useState("new-page"),[Ot,Vt]=b.useState(""),[Qt,_s]=b.useState(!1),[Te,ls]=b.useState(null),jr=b.useRef(!1),ka=b.useRef({rearrange:null,placements:[]}),gs=b.useRef({rearrange:null,placements:[]}),[Cr,ai]=b.useState(0),[Gi,$o]=b.useState(0),[Ki,xn]=b.useState(0),[cc,Tr]=b.useState(0),ys=b.useRef(new Set),Fs=b.useRef(new Set),jn=b.useRef(null),ja=b.useRef(),Er=Ne&&T&&!jt&&Ue;b.useEffect(()=>{if(Er){$n(!1);const j=pr(()=>{$n(!0)});return()=>cancelAnimationFrame(j)}else $n(!1)},[Er]);const Zi=b.useRef(new Map),Po=b.useRef(new Map),ri=b.useRef(),[Qn,xs]=b.useState(!1),[sn,uc]=b.useState([]),Ad=b.useRef(sn);Ad.current=sn;const[Ho,Dd]=b.useState(null),Ji=b.useRef(null);b.useRef(!1),b.useRef([]),b.useRef(0),b.useRef(null),b.useRef(null),b.useRef(1);const[dc,ns]=b.useState(!1),li=b.useRef(null),[un,ci]=b.useState([]),Vn=b.useRef({cmd:!1,shift:!1}),Ln=()=>{Ge(!0)},fc=()=>{Ge(!1)},eo=()=>{dc||(li.current=Qe(()=>ns(!0),850))},Ld=()=>{li.current&&(clearTimeout(li.current),li.current=null),ns(!1),fc()};b.useEffect(()=>()=>{li.current&&clearTimeout(li.current)},[]);const[xt,hc]=b.useState(()=>{try{const j=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...cm,...j,annotationColorId:Yl.find(R=>R.id===j.annotationColorId)?j.annotationColorId:cm.annotationColorId}}catch{return cm}}),[cs,mc]=b.useState(!0),[pc,Io]=b.useState(!1),Mr=()=>{var j;(j=F.current)==null||j.classList.add(me.disableTransitions),mc(R=>!R),pr(()=>{var R;(R=F.current)==null||R.classList.remove(me.disableTransitions)})},Rr=!1,us="off",[Jt,Ca]=b.useState(y??null),Ta=b.useRef(!1),[ds,bs]=b.useState(g?"connecting":"disconnected"),[Bt,Ei]=b.useState(null),[Gn,Ea]=b.useState(!1),[Xs,Nr]=b.useState(null),to=b.useRef(!1),[Vo,no]=b.useState(new Set),[Un,Rs]=b.useState(new Set),[ui,di]=b.useState(!1),[Od,fi]=b.useState(!1),[vs,so]=b.useState(!1),qs=b.useRef(null),ws=b.useRef(null),Uo=b.useRef(null),Yo=b.useRef(null),Ma=b.useRef(!1),Ra=b.useRef(0),Na=b.useRef(null),_c=b.useRef(null),Ar=8,Bd=50,gc=b.useRef(null),Dr=b.useRef(null),Wo=b.useRef(null),Ke=typeof window<"u"?window.location.pathname:"/";b.useEffect(()=>{if(he)xe(!0);else{Ge(!1),Ye("main");const j=Qe(()=>xe(!1),0);return()=>clearTimeout(j)}},[he]);const Lr=T&&O&&!Ne;b.useEffect(()=>{if(Lr){ge(!1),ee(!0),no(new Set);const j=Qe(()=>{no(R=>{const B=new Set(R);return C.forEach(D=>B.add(D.id)),B})},350);return()=>clearTimeout(j)}else if(Q){ge(!0);const j=Qe(()=>{ee(!1),ge(!1)},250);return()=>clearTimeout(j)}},[Lr]),b.useEffect(()=>{Y(!0),ct(window.scrollY);const j=nm(Ke);z(j.filter(ha)),a2||(Io(!0),a2=!0,Qe(()=>Io(!1),750));try{const R=localStorage.getItem("feedback-toolbar-theme");R!==null&&mc(R==="dark")}catch{}try{const R=localStorage.getItem("feedback-toolbar-position");if(R){const B=JSON.parse(R);typeof B.x=="number"&&typeof B.y=="number"&&Ei(B)}}catch{}},[Ke]),b.useEffect(()=>{$e&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(xt))},[xt,$e]),b.useEffect(()=>{$e&&localStorage.setItem("feedback-toolbar-theme",cs?"dark":"light")},[cs,$e]);const yc=b.useRef(!1);b.useEffect(()=>{const j=yc.current;yc.current=Gn,j&&!Gn&&Bt&&$e&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Bt))},[Gn,Bt,$e]),b.useEffect(()=>{if(!g||!$e||Ta.current)return;Ta.current=!0,bs("connecting"),(async()=>{try{const R=$j(Ke),B=y||R;let D=!1;if(B)try{const V=await Ky(g,B);Ca(V.id),bs("connected"),sm(Ke,V.id),D=!0;const ne=nm(Ke),_e=new Set(V.annotations.map(je=>je.id)),we=ne.filter(je=>!_e.has(je.id));if(we.length>0){const ze=`${typeof window<"u"?window.location.origin:""}${Ke}`,Je=(await Promise.allSettled(we.map(Ie=>lr(g,V.id,{...Ie,sessionId:V.id,url:ze})))).map((Ie,Me)=>Ie.status==="fulfilled"?Ie.value:(console.warn("[Agentation] Failed to sync annotation:",Ie.reason),we[Me])),qe=[...V.annotations,...Je];z(qe.filter(ha)),Dl(Ke,qe.filter(ha),V.id)}else z(V.annotations.filter(ha)),Dl(Ke,V.annotations.filter(ha),V.id)}catch(V){console.warn("[Agentation] Could not join session, creating new:",V),Pj(Ke)}if(!D){const V=typeof window<"u"?window.location.href:"/",ne=await im(g,V);Ca(ne.id),bs("connected"),sm(Ke,ne.id),x==null||x(ne.id);const _e=Rj(),we=typeof window<"u"?window.location.origin:"",je=[];for(const[ze,He]of _e){const Je=He.filter(Me=>!Me._syncedTo);if(Je.length===0)continue;const qe=`${we}${ze}`,Ie=ze===Ke;je.push((async()=>{try{const Me=Ie?ne:await im(g,qe),dn=(await Promise.allSettled(Je.map(Ct=>lr(g,Me.id,{...Ct,sessionId:Me.id,url:qe})))).map((Ct,fn)=>Ct.status==="fulfilled"?Ct.value:(console.warn("[Agentation] Failed to sync annotation:",Ct.reason),Je[fn])).filter(ha);if(Dl(ze,dn,Me.id),Ie){const Ct=new Set(Je.map(fn=>fn.id));z(fn=>{const et=fn.filter(nt=>!Ct.has(nt.id));return[...dn,...et]})}}catch(Me){console.warn(`[Agentation] Failed to sync annotations for ${ze}:`,Me)}})())}await Promise.allSettled(je)}}catch(R){bs("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",R)}})()},[g,y,$e,x,Ke]),b.useEffect(()=>{if(!g||!$e)return;const j=async()=>{try{(await fetch(`${g}/health`)).ok?bs("connected"):bs("disconnected")}catch{bs("disconnected")}};j();const R=DS(j,1e4);return()=>clearInterval(R)},[g,$e]),b.useEffect(()=>{if(!g||!$e||!Jt)return;const j=new EventSource(`${g}/sessions/${Jt}/events`),R=["resolved","dismissed"],B=D=>{var V;try{const ne=JSON.parse(D.data);if(R.includes((V=ne.payload)==null?void 0:V.status)){const _e=ne.payload.id,we=ne.payload.kind;if(we==="placement"){for(const[je,ze]of Zi.current)if(ze===_e){Zi.current.delete(je),mt(He=>He.filter(Je=>Je.id!==je));break}}else if(we==="rearrange"){for(const[je,ze]of Po.current)if(ze===_e){Po.current.delete(je),ls(He=>{if(!He)return null;const Je=He.sections.filter(qe=>qe.id!==je);return Je.length===0?null:{...He,sections:Je}});break}}else Rs(je=>new Set(je).add(_e)),Qe(()=>{z(je=>je.filter(ze=>ze.id!==_e)),Rs(je=>{const ze=new Set(je);return ze.delete(_e),ze})},150)}}catch{}};return j.addEventListener("annotation.updated",B),()=>{j.removeEventListener("annotation.updated",B),j.close()}},[g,$e,Jt]),b.useEffect(()=>{if(!g||!$e)return;const j=_c.current==="disconnected",R=ds==="connected";_c.current=ds,j&&R&&(async()=>{try{const D=nm(Ke);if(D.length===0)return;const ne=`${typeof window<"u"?window.location.origin:""}${Ke}`;let _e=Jt,we=[];if(_e)try{we=(await Ky(g,_e)).annotations}catch{_e=null}_e||(_e=(await im(g,ne)).id,Ca(_e),sm(Ke,_e));const je=new Set(we.map(He=>He.id)),ze=D.filter(He=>!je.has(He.id));if(ze.length>0){const Je=(await Promise.allSettled(ze.map(Me=>lr(g,_e,{...Me,sessionId:_e,url:ne})))).map((Me,on)=>Me.status==="fulfilled"?Me.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Me.reason),ze[on])),Ie=[...we,...Je].filter(ha);z(Ie),Dl(Ke,Ie,_e)}}catch(D){console.warn("[Agentation] Failed to sync on reconnect:",D)}})()},[ds,g,$e,Jt,Ke]);const Or=b.useCallback(()=>{P||(te(!0),De(!1),M(!1),Qe(()=>{Ij(!0),W(!0),te(!1)},400))},[P]);b.useEffect(()=>{if(!o||!$e||!t||t.length===0||C.length>0)return;const j=[];return j.push(Qe(()=>{M(!0)},s-200)),t.forEach((R,B)=>{const D=s+B*300;j.push(Qe(()=>{const V=document.querySelector(R.selector);if(!V)return;const ne=V.getBoundingClientRect(),{name:_e,path:we}=_r(V),je={id:`demo-${Date.now()}-${B}`,x:(ne.left+ne.width/2)/window.innerWidth*100,y:ne.top+ne.height/2+window.scrollY,comment:R.comment,element:_e,elementPath:we,timestamp:Date.now(),selectedText:R.selectedText,boundingBox:{x:ne.left,y:ne.top+window.scrollY,width:ne.width,height:ne.height},nearbyText:Nl(V),cssClasses:Al(V)};z(ze=>[...ze,je])},D))}),()=>{j.forEach(clearTimeout)}},[o,$e,t,s]),b.useEffect(()=>{const j=()=>{ct(window.scrollY),qt(!0),Wo.current&&clearTimeout(Wo.current),Wo.current=Qe(()=>{qt(!1)},150)};return window.addEventListener("scroll",j,{passive:!0}),()=>{window.removeEventListener("scroll",j),Wo.current&&clearTimeout(Wo.current)}},[]),b.useEffect(()=>{$e&&C.length>0?Jt?Dl(Ke,C,Jt):z5(Ke,C):$e&&C.length===0&&localStorage.removeItem(bd(Ke))},[C,Ke,$e,Jt]),b.useEffect(()=>{if($e&&!cn.current){cn.current=!0;const j=Nj(Ke);j.length>0&&mt(j)}},[$e,Ke]),b.useEffect(()=>{$e&&cn.current&&!Ue&&(Ee.length>0?Aj(Ke,Ee):Dj(Ke))},[Ee,Ke,$e,Ue]),b.useEffect(()=>{if($e&&!jr.current){jr.current=!0;const j=Lj(Ke);if(j){const R={...j,sections:j.sections.map(B=>({...B,currentRect:B.currentRect??{...B.originalRect}}))};ls(R)}}},[$e,Ke]),b.useEffect(()=>{$e&&jr.current&&!Ue&&(Te?Oj(Ke,Te):Bj(Ke))},[Te,Ke,$e,Ue]);const Br=b.useRef(!1);b.useEffect(()=>{if($e&&!Br.current){Br.current=!0;const j=zj(Ke);j&&(gs.current={rearrange:j.rearrange,placements:j.placements||[]},j.purpose&&Vt(j.purpose))}},[$e,Ke]),b.useEffect(()=>{var R,B,D;if(!$e||!Br.current)return;const j=gs.current;Ue?(((R=Te==null?void 0:Te.sections)==null?void 0:R.length)??0)>0||Ee.length>0||Ot?Gy(Ke,{rearrange:Te,placements:Ee,purpose:Ot}):Gu(Ke):(((D=(B=j.rearrange)==null?void 0:B.sections)==null?void 0:D.length)??0)>0||j.placements.length>0||Ot?Gy(Ke,{rearrange:j.rearrange,placements:j.placements,purpose:Ot}):Gu(Ke)},[Te,Ee,Ot,Ue,Ke,$e]),b.useEffect(()=>{Ne&&!Te&&ls({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ne,Te]),b.useEffect(()=>{if(!g||!Jt)return;const j=Zi.current,R=new Set(Ee.map(B=>B.id));for(const B of Ee){if(j.has(B.id))continue;j.set(B.id,"");const D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;lr(g,Jt,{id:B.id,x:B.x/window.innerWidth*100,y:B.y,comment:`Place ${B.type} at (${Math.round(B.x)}, ${Math.round(B.y)}), ${B.width}×${B.height}px${B.text?` — "${B.text}"`:""}`,element:`[design:${B.type}]`,elementPath:"[placement]",timestamp:B.timestamp,url:D,intent:"change",severity:"important",kind:"placement",placement:{componentType:B.type,width:B.width,height:B.height,scrollY:B.scrollY,text:B.text}}).then(V=>{j.has(B.id)&&j.set(B.id,V.id)}).catch(V=>{console.warn("[Agentation] Failed to sync placement annotation:",V),j.delete(B.id)})}for(const[B,D]of j)R.has(B)||(j.delete(B),D&&Ro(g,D).catch(()=>{}))},[Ee,g,Jt,Ke]),b.useEffect(()=>{if(!(!g||!Jt))return ri.current&&clearTimeout(ri.current),ri.current=Qe(()=>{const j=Po.current;if(!Te||Te.sections.length===0){for(const[,D]of j)D&&Ro(g,D).catch(()=>{});j.clear();return}const R=new Set(Te.sections.map(D=>D.id)),B=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;for(const D of Te.sections){const V=D.originalRect,ne=D.currentRect;if(!(Math.abs(V.x-ne.x)>1||Math.abs(V.y-ne.y)>1||Math.abs(V.width-ne.width)>1||Math.abs(V.height-ne.height)>1)){const je=j.get(D.id);je&&(j.delete(D.id),Ro(g,je).catch(()=>{}));continue}const we=j.get(D.id);we?Zy(g,we,{comment:`Move ${D.label} section (${D.tagName}) — from (${Math.round(V.x)},${Math.round(V.y)}) ${Math.round(V.width)}×${Math.round(V.height)} to (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}×${Math.round(ne.height)}`}).catch(je=>{console.warn("[Agentation] Failed to update rearrange annotation:",je)}):(j.set(D.id,""),lr(g,Jt,{id:D.id,x:ne.x/window.innerWidth*100,y:ne.y,comment:`Move ${D.label} section (${D.tagName}) — from (${Math.round(V.x)},${Math.round(V.y)}) ${Math.round(V.width)}×${Math.round(V.height)} to (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}×${Math.round(ne.height)}`,element:D.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:B,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:D.selector,label:D.label,tagName:D.tagName,originalRect:V,currentRect:ne}}).then(je=>{j.has(D.id)&&j.set(D.id,je.id)}).catch(je=>{console.warn("[Agentation] Failed to sync rearrange annotation:",je),j.delete(D.id)}))}for(const[D,V]of j)R.has(D)||(j.delete(D),V&&Ro(g,V).catch(()=>{}))},300),()=>{ri.current&&clearTimeout(ri.current)}},[Te,g,Jt,Ke]);const io=b.useRef(new Map);b.useLayoutEffect(()=>{const j=(Te==null?void 0:Te.sections)??[],R=new Set;if((Ne||jt)&&T)for(const B of j){R.add(B.id);try{const D=document.querySelector(B.selector);if(!D)continue;if(!io.current.has(B.id)){const V={transform:D.style.transform,transformOrigin:D.style.transformOrigin,opacity:D.style.opacity,position:D.style.position,zIndex:D.style.zIndex,display:D.style.display},ne=[];let _e=D.parentElement;for(;_e&&_e!==document.body;){const je=getComputedStyle(_e);(je.overflow!=="visible"||je.overflowX!=="visible"||je.overflowY!=="visible")&&(ne.push({el:_e,overflow:_e.style.overflow}),_e.style.overflow="visible"),_e=_e.parentElement}getComputedStyle(D).display==="inline"&&(D.style.display="inline-block"),io.current.set(B.id,{el:D,origStyles:V,ancestors:ne}),D.style.transformOrigin="top left",D.style.zIndex="9999"}}catch{}}for(const[B,D]of io.current)if(!R.has(B)){const{el:V,origStyles:ne,ancestors:_e}=D;V.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",V.style.transform=ne.transform,V.style.transformOrigin=ne.transformOrigin,V.style.opacity=ne.opacity,V.style.position=ne.position,V.style.zIndex=ne.zIndex,io.current.delete(B),Qe(()=>{V.style.transition="",V.style.display=ne.display;for(const we of _e)we.el.style.overflow=we.overflow},450)}},[Te,Ne,jt,T]),b.useEffect(()=>()=>{for(const[,j]of io.current){const{el:R,origStyles:B,ancestors:D}=j;R.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",R.style.transform=B.transform,R.style.transformOrigin=B.transformOrigin,R.style.opacity=B.opacity,R.style.position=B.position,R.style.zIndex=B.zIndex,Qe(()=>{R.style.transition="",R.style.display=B.display;for(const V of D)V.el.style.overflow=V.overflow},450)}io.current.clear()},[]);const Aa=b.useCallback(()=>{It(!0),gt(!1),rt(null),clearTimeout(ja.current),ja.current=Qe(()=>{It(!1)},300)},[]),zr=b.useCallback(()=>{Ne&&(It(!0),gt(!1),rt(null),clearTimeout(ja.current),ja.current=Qe(()=>{It(!1)},300)),M(!1)},[Ne]),xc=b.useCallback(()=>{q||(OS(),ue(!0))},[q]),Da=b.useCallback(()=>{q&&(By(),ue(!1))},[q]),$r=b.useCallback(()=>{q?Da():xc()},[q,xc,Da]),bc=b.useCallback(()=>{if(un.length===0)return;const j=un[0],R=j.element,B=un.length>1,D=un.map(V=>V.element.getBoundingClientRect());if(B){const V={left:Math.min(...D.map(Me=>Me.left)),top:Math.min(...D.map(Me=>Me.top)),right:Math.max(...D.map(Me=>Me.right)),bottom:Math.max(...D.map(Me=>Me.bottom))},ne=un.slice(0,5).map(Me=>Me.name).join(", "),_e=un.length>5?` +${un.length-5} more`:"",we=D.map(Me=>({x:Me.left,y:Me.top+window.scrollY,width:Me.width,height:Me.height})),ze=un[un.length-1].element,He=D[D.length-1],Je=He.left+He.width/2,qe=He.top+He.height/2,Ie=um(ze);be({x:Je/window.innerWidth*100,y:Ie?qe:qe+window.scrollY,clientY:qe,element:`${un.length} elements: ${ne}${_e}`,elementPath:"multi-select",boundingBox:{x:V.left,y:V.top+window.scrollY,width:V.right-V.left,height:V.bottom-V.top},isMultiSelect:!0,isFixed:Ie,elementBoundingBoxes:we,multiSelectElements:un.map(Me=>Me.element),targetElement:ze,fullPath:Xu(R),accessibility:Fu(R),computedStyles:Wu(R),computedStylesObj:Yu(R),nearbyElements:Uu(R),cssClasses:Al(R),nearbyText:Nl(R),sourceFile:Ju(R)})}else{const V=D[0],ne=um(R);be({x:V.left/window.innerWidth*100,y:ne?V.top:V.top+window.scrollY,clientY:V.top,element:j.name,elementPath:j.path,boundingBox:{x:V.left,y:ne?V.top:V.top+window.scrollY,width:V.width,height:V.height},isFixed:ne,fullPath:Xu(R),accessibility:Fu(R),computedStyles:Wu(R),computedStylesObj:Yu(R),nearbyElements:Uu(R),cssClasses:Al(R),nearbyText:Nl(R),reactComponents:j.reactComponents,sourceFile:Ju(R)})}ci([]),Re(null)},[un]);b.useEffect(()=>{T||(be(null),Pe(null),Xe(null),ut([]),Re(null),De(!1),ci([]),Vn.current={cmd:!1,shift:!1},q&&Da())},[T,q,Da]),b.useEffect(()=>()=>{By()},[]),b.useEffect(()=>{if(!T)return;const j=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),R=":not([data-agentation-root]):not([data-agentation-root] *)",B=document.createElement("style");return B.id="feedback-cursor-styles",B.textContent=`
      body ${R} {
        cursor: crosshair !important;
      }

      body :is(${j})${R} {
        cursor: text !important;
      }
    `,document.head.appendChild(B),()=>{const D=document.getElementById("feedback-cursor-styles");D&&D.remove()}},[T]),b.useEffect(()=>{if(Ho!==null&&T)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ho,T]),b.useEffect(()=>{if(!T||K||Qn||Ne)return;const j=R=>{const B=R.composedPath()[0]||R.target;if(os(B,"[data-feedback-toolbar]")){Re(null);return}const D=fa(R.clientX,R.clientY);if(!D||os(D,"[data-feedback-toolbar]")){Re(null);return}const{name:V,elementName:ne,path:_e,reactComponents:we}=lm(D,us),je=D.getBoundingClientRect();Re({element:V,elementName:ne,elementPath:_e,rect:je,reactComponents:we}),ye({x:R.clientX,y:R.clientY})};return document.addEventListener("mousemove",j),()=>document.removeEventListener("mousemove",j)},[T,K,Qn,Ne,us,sn]);const La=b.useCallback(j=>{var R;if(Pe(j),ft(null),$t(null),nn([]),(R=j.elementBoundingBoxes)!=null&&R.length){const B=[];for(const D of j.elementBoundingBoxes){const V=D.x+D.width/2,ne=D.y+D.height/2-window.scrollY,_e=fa(V,ne);_e&&B.push(_e)}ut(B),Xe(null)}else if(j.boundingBox){const B=j.boundingBox,D=B.x+B.width/2,V=j.isFixed?B.y+B.height/2:B.y+B.height/2-window.scrollY,ne=fa(D,V);if(ne){const _e=ne.getBoundingClientRect(),we=_e.width/B.width,je=_e.height/B.height;we<.5||je<.5?Xe(null):Xe(ne)}else Xe(null);ut([])}else Xe(null),ut([])},[]);b.useEffect(()=>{if(!T||Qn||Ne)return;const j=R=>{var Ut,dn;if(Ma.current){Ma.current=!1;return}const B=R.composedPath()[0]||R.target;if(os(B,"[data-feedback-toolbar]")||os(B,"[data-annotation-popup]")||os(B,"[data-annotation-marker]"))return;if(R.metaKey&&R.shiftKey&&!K&&!se){R.preventDefault(),R.stopPropagation();const Ct=fa(R.clientX,R.clientY);if(!Ct)return;const fn=Ct.getBoundingClientRect(),{name:et,path:nt,reactComponents:hn}=lm(Ct,us),Pt=un.findIndex(On=>On.element===Ct);Pt>=0?ci(On=>On.filter((Kn,Gt)=>Gt!==Pt)):ci(On=>[...On,{element:Ct,rect:fn,name:et,path:nt,reactComponents:hn??void 0}]);return}const D=os(B,"button, a, input, select, textarea, [role='button'], [onclick]");if(xt.blockInteractions&&D&&(R.preventDefault(),R.stopPropagation()),K){if(D&&!xt.blockInteractions)return;R.preventDefault(),(Ut=gc.current)==null||Ut.shake();return}if(se){if(D&&!xt.blockInteractions)return;R.preventDefault(),(dn=Dr.current)==null||dn.shake();return}R.preventDefault();const V=fa(R.clientX,R.clientY);if(!V)return;const{name:ne,path:_e,reactComponents:we}=lm(V,us),je=V.getBoundingClientRect(),ze=R.clientX/window.innerWidth*100,He=um(V),Je=He?R.clientY:R.clientY+window.scrollY,qe=window.getSelection();let Ie;qe&&qe.toString().trim().length>0&&(Ie=qe.toString().trim().slice(0,500));const Me=Yu(V),on=Wu(V);be({x:ze,y:Je,clientY:R.clientY,element:ne,elementPath:_e,selectedText:Ie,boundingBox:{x:je.left,y:He?je.top:je.top+window.scrollY,width:je.width,height:je.height},nearbyText:Nl(V),cssClasses:Al(V),isFixed:He,fullPath:Xu(V),accessibility:Fu(V),computedStyles:on,computedStylesObj:Me,nearbyElements:Uu(V),reactComponents:we??void 0,sourceFile:Ju(V),targetElement:V}),Re(null)};return document.addEventListener("click",j,!0),()=>document.removeEventListener("click",j,!0)},[T,Qn,Ne,K,se,xt.blockInteractions,us,un]),b.useEffect(()=>{if(!T)return;const j=D=>{D.key==="Meta"&&(Vn.current.cmd=!0),D.key==="Shift"&&(Vn.current.shift=!0)},R=D=>{const V=Vn.current.cmd&&Vn.current.shift;D.key==="Meta"&&(Vn.current.cmd=!1),D.key==="Shift"&&(Vn.current.shift=!1);const ne=Vn.current.cmd&&Vn.current.shift;V&&!ne&&un.length>0&&bc()},B=()=>{Vn.current={cmd:!1,shift:!1},ci([])};return document.addEventListener("keydown",j),document.addEventListener("keyup",R),window.addEventListener("blur",B),()=>{document.removeEventListener("keydown",j),document.removeEventListener("keyup",R),window.removeEventListener("blur",B)}},[T,un,bc]),b.useEffect(()=>{if(!T||K||Qn||Ne)return;const j=R=>{const B=R.composedPath()[0]||R.target;os(B,"[data-feedback-toolbar]")||os(B,"[data-annotation-marker]")||os(B,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(B.tagName)||B.isContentEditable||(R.preventDefault(),qs.current={x:R.clientX,y:R.clientY})};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[T,K,Qn,Ne]),b.useEffect(()=>{if(!T||K)return;const j=R=>{if(!qs.current)return;const B=R.clientX-qs.current.x,D=R.clientY-qs.current.y,V=B*B+D*D,ne=Ar*Ar;if(!vs&&V>=ne&&(ws.current=qs.current,so(!0),R.preventDefault()),(vs||V>=ne)&&ws.current){if(Uo.current){const et=Math.min(ws.current.x,R.clientX),nt=Math.min(ws.current.y,R.clientY),hn=Math.abs(R.clientX-ws.current.x),Pt=Math.abs(R.clientY-ws.current.y);Uo.current.style.transform=`translate(${et}px, ${nt}px)`,Uo.current.style.width=`${hn}px`,Uo.current.style.height=`${Pt}px`}const _e=Date.now();if(_e-Ra.current<Bd)return;Ra.current=_e;const we=ws.current.x,je=ws.current.y,ze=Math.min(we,R.clientX),He=Math.min(je,R.clientY),Je=Math.max(we,R.clientX),qe=Math.max(je,R.clientY),Ie=(ze+Je)/2,Me=(He+qe)/2,on=new Set,Ut=[[ze,He],[Je,He],[ze,qe],[Je,qe],[Ie,Me],[Ie,He],[Ie,qe],[ze,Me],[Je,Me]];for(const[et,nt]of Ut){const hn=document.elementsFromPoint(et,nt);for(const Pt of hn)Pt instanceof HTMLElement&&on.add(Pt)}const dn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const et of dn)if(et instanceof HTMLElement){const nt=et.getBoundingClientRect(),hn=nt.left+nt.width/2,Pt=nt.top+nt.height/2,On=hn>=ze&&hn<=Je&&Pt>=He&&Pt<=qe,Kn=Math.min(nt.right,Je)-Math.max(nt.left,ze),Gt=Math.min(nt.bottom,qe)-Math.max(nt.top,He),As=Kn>0&&Gt>0?Kn*Gt:0,Qs=nt.width*nt.height,Gs=Qs>0?As/Qs:0;(On||Gs>.5)&&on.add(et)}const Ct=[],fn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const et of on){if(os(et,"[data-feedback-toolbar]")||os(et,"[data-annotation-marker]"))continue;const nt=et.getBoundingClientRect();if(!(nt.width>window.innerWidth*.8&&nt.height>window.innerHeight*.5)&&!(nt.width<10||nt.height<10)&&nt.left<Je&&nt.right>ze&&nt.top<qe&&nt.bottom>He){const hn=et.tagName;let Pt=fn.has(hn);if(!Pt&&(hn==="DIV"||hn==="SPAN")){const On=et.textContent&&et.textContent.trim().length>0,Kn=et.onclick!==null||et.getAttribute("role")==="button"||et.getAttribute("role")==="link"||et.classList.contains("clickable")||et.hasAttribute("data-clickable");(On||Kn)&&!et.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Pt=!0)}if(Pt){let On=!1;for(const Kn of Ct)if(Kn.left<=nt.left&&Kn.right>=nt.right&&Kn.top<=nt.top&&Kn.bottom>=nt.bottom){On=!0;break}On||Ct.push(nt)}}}if(Yo.current){const et=Yo.current;for(;et.children.length>Ct.length;)et.removeChild(et.lastChild);Ct.forEach((nt,hn)=>{let Pt=et.children[hn];Pt||(Pt=document.createElement("div"),Pt.className=me.selectedElementHighlight,et.appendChild(Pt)),Pt.style.transform=`translate(${nt.left}px, ${nt.top}px)`,Pt.style.width=`${nt.width}px`,Pt.style.height=`${nt.height}px`})}}};return document.addEventListener("mousemove",j,{passive:!0}),()=>document.removeEventListener("mousemove",j)},[T,K,vs,Ar]),b.useEffect(()=>{if(!T)return;const j=R=>{const B=vs,D=ws.current;if(vs&&D){Ma.current=!0;const V=Math.min(D.x,R.clientX),ne=Math.min(D.y,R.clientY),_e=Math.max(D.x,R.clientX),we=Math.max(D.y,R.clientY),je=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Ie=>{if(!(Ie instanceof HTMLElement)||os(Ie,"[data-feedback-toolbar]")||os(Ie,"[data-annotation-marker]"))return;const Me=Ie.getBoundingClientRect();Me.width>window.innerWidth*.8&&Me.height>window.innerHeight*.5||Me.width<10||Me.height<10||Me.left<_e&&Me.right>V&&Me.top<we&&Me.bottom>ne&&je.push({element:Ie,rect:Me})});const He=je.filter(({element:Ie})=>!je.some(({element:Me})=>Me!==Ie&&Ie.contains(Me))),Je=R.clientX/window.innerWidth*100,qe=R.clientY+window.scrollY;if(He.length>0){const Ie=He.reduce((fn,{rect:et})=>({left:Math.min(fn.left,et.left),top:Math.min(fn.top,et.top),right:Math.max(fn.right,et.right),bottom:Math.max(fn.bottom,et.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Me=He.slice(0,5).map(({element:fn})=>_r(fn).name).join(", "),on=He.length>5?` +${He.length-5} more`:"",Ut=He[0].element,dn=Yu(Ut),Ct=Wu(Ut);be({x:Je,y:qe,clientY:R.clientY,element:`${He.length} elements: ${Me}${on}`,elementPath:"multi-select",boundingBox:{x:Ie.left,y:Ie.top+window.scrollY,width:Ie.right-Ie.left,height:Ie.bottom-Ie.top},isMultiSelect:!0,fullPath:Xu(Ut),accessibility:Fu(Ut),computedStyles:Ct,computedStylesObj:dn,nearbyElements:Uu(Ut),cssClasses:Al(Ut),nearbyText:Nl(Ut),sourceFile:Ju(Ut)})}else{const Ie=Math.abs(_e-V),Me=Math.abs(we-ne);Ie>20&&Me>20&&be({x:Je,y:qe,clientY:R.clientY,element:"Area selection",elementPath:`region at (${Math.round(V)}, ${Math.round(ne)})`,boundingBox:{x:V,y:ne+window.scrollY,width:Ie,height:Me},isMultiSelect:!0})}Re(null)}else B&&(Ma.current=!0);qs.current=null,ws.current=null,so(!1),Yo.current&&(Yo.current.innerHTML="")};return document.addEventListener("mouseup",j),()=>document.removeEventListener("mouseup",j)},[T,vs]);const Ns=b.useCallback(async(j,R,B)=>{const D=xt.webhookUrl||w;if(!D||!xt.webhooksEnabled&&!B)return!1;try{return(await fetch(D,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:j,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...R})})).ok}catch(V){return console.warn("[Agentation] Webhook failed:",V),!1}},[w,xt.webhookUrl,xt.webhooksEnabled]),zd=b.useCallback(j=>{var B;if(!K)return;const R={id:Date.now().toString(),x:K.x,y:K.y,comment:j,element:K.element,elementPath:K.elementPath,timestamp:Date.now(),selectedText:K.selectedText,boundingBox:K.boundingBox,nearbyText:K.nearbyText,cssClasses:K.cssClasses,isMultiSelect:K.isMultiSelect,isFixed:K.isFixed,fullPath:K.fullPath,accessibility:K.accessibility,computedStyles:K.computedStyles,nearbyElements:K.nearbyElements,reactComponents:K.reactComponents,sourceFile:K.sourceFile,elementBoundingBoxes:K.elementBoundingBoxes,...g&&Jt?{sessionId:Jt,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};z(D=>[...D,R]),Na.current=R.id,Qe(()=>{Na.current=null},300),Qe(()=>{no(D=>new Set(D).add(R.id))},250),a==null||a(R),Ns("annotation.add",{annotation:R}),di(!0),Qe(()=>{be(null),di(!1)},150),(B=window.getSelection())==null||B.removeAllRanges(),g&&Jt&&lr(g,Jt,R).then(D=>{D.id!==R.id&&(z(V=>V.map(ne=>ne.id===R.id?{...ne,id:D.id}:ne)),no(V=>{const ne=new Set(V);return ne.delete(R.id),ne.add(D.id),ne}))}).catch(D=>{console.warn("[Agentation] Failed to sync annotation:",D)})},[K,a,Ns,g,Jt]),Pr=b.useCallback(()=>{di(!0),Qe(()=>{be(null),di(!1)},150)},[]),Hr=b.useCallback(j=>{const R=C.findIndex(D=>D.id===j),B=C[R];(se==null?void 0:se.id)===j&&(fi(!0),Qe(()=>{Pe(null),Xe(null),ut([]),fi(!1)},150)),ps(j),Rs(D=>new Set(D).add(j)),B&&(c==null||c(B),Ns("annotation.delete",{annotation:B})),g&&Ro(g,j).catch(D=>{console.warn("[Agentation] Failed to delete annotation from server:",D)}),Qe(()=>{z(D=>D.filter(V=>V.id!==j)),Rs(D=>{const V=new Set(D);return V.delete(j),V}),ps(null),R<C.length-1&&(Es(R),Qe(()=>Es(null),200))},150)},[C,se,c,Ns,g]),oo=b.useCallback(j=>{var R;if(!j){ft(null),$t(null),nn([]);return}if(ft(j.id),(R=j.elementBoundingBoxes)!=null&&R.length){const B=[];for(const D of j.elementBoundingBoxes){const V=D.x+D.width/2,ne=D.y+D.height/2-window.scrollY,we=document.elementsFromPoint(V,ne).find(je=>!je.closest("[data-annotation-marker]")&&!je.closest("[data-agentation-root]"));we&&B.push(we)}nn(B),$t(null)}else if(j.boundingBox){const B=j.boundingBox,D=B.x+B.width/2,V=j.isFixed?B.y+B.height/2:B.y+B.height/2-window.scrollY,ne=fa(D,V);if(ne){const _e=ne.getBoundingClientRect(),we=_e.width/B.width,je=_e.height/B.height;we<.5||je<.5?$t(null):$t(ne)}else $t(null);nn([])}else $t(null),nn([])},[]),Fo=b.useCallback(j=>{if(!se)return;const R={...se,comment:j};z(B=>B.map(D=>D.id===se.id?R:D)),u==null||u(R),Ns("annotation.update",{annotation:R}),g&&Zy(g,se.id,{comment:j}).catch(B=>{console.warn("[Agentation] Failed to update annotation on server:",B)}),fi(!0),Qe(()=>{Pe(null),Xe(null),ut([]),fi(!1)},150)},[se,u,Ns,g]),$d=b.useCallback(()=>{fi(!0),Qe(()=>{Pe(null),Xe(null),ut([]),fi(!1)},150)},[]),hi=b.useCallback(()=>{const j=C.length,R=Ee.length>0||!!Te;if(j===0&&sn.length===0&&!R)return;if(f==null||f(C),Ns("annotations.clear",{annotations:C}),g){Promise.all(C.map(V=>Ro(g,V.id).catch(ne=>{console.warn("[Agentation] Failed to delete annotation from server:",ne)})));for(const[,V]of Zi.current)V&&Ro(g,V).catch(()=>{});Zi.current.clear();for(const[,V]of Po.current)V&&Ro(g,V).catch(()=>{});Po.current.clear()}Et(!0),Ze(!0),uc([]);const B=Ji.current;if(B){const V=B.getContext("2d");V&&V.clearRect(0,0,B.width,B.height)}(Ee.length>0||Te)&&(xn(V=>V+1),Tr(V=>V+1),Qe(()=>{mt([]),ls(null)},200)),Ue&&yt(!1),Ot&&Vt(""),gs.current={rearrange:null,placements:[]},Gu(Ke);const D=j*30+200;Qe(()=>{z([]),no(new Set),localStorage.removeItem(bd(Ke)),Et(!1)},D),Qe(()=>Ze(!1),1500)},[Ke,C,sn,Ee,Te,Ue,Ot,f,Ns,g]),Oa=b.useCallback(async()=>{const j=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke,R=Ne&&Ue;let B;if(R){if(Ee.length===0&&!Te&&!Ot)return;B=""}else{if(B=t2(C,j,xt.outputDetail),!B&&sn.length===0&&Ee.length===0&&!Te)return;B||(B=`## Page Feedback: ${j}
`)}if(!R&&sn.length>0){const D=new Set;for(const we of C)we.drawingIndex!=null&&D.add(we.drawingIndex);const V=Ji.current;V&&(V.style.visibility="hidden");const ne=[],_e=window.scrollY;for(let we=0;we<sn.length;we++){if(D.has(we))continue;const je=sn[we];if(je.points.length<2)continue;const ze=je.fixed?je.points:je.points.map(Yt=>({x:Yt.x,y:Yt.y-_e}));let He=1/0,Je=1/0,qe=-1/0,Ie=-1/0;for(const Yt of ze)He=Math.min(He,Yt.x),Je=Math.min(Je,Yt.y),qe=Math.max(qe,Yt.x),Ie=Math.max(Ie,Yt.y);const Me=qe-He,on=Ie-Je,Ut=Math.hypot(Me,on),dn=ze[0],Ct=ze[ze.length-1],fn=Math.hypot(Ct.x-dn.x,Ct.y-dn.y);let et;const nt=fn<Ut*.35,hn=Me/Math.max(on,1);if(nt&&Ut>20){const Yt=Math.max(Me,on)*.15;let Ks=0;for(const mi of ze){const jc=mi.x-He<Yt,Hd=qe-mi.x<Yt,Id=mi.y-Je<Yt,Vd=Ie-mi.y<Yt;(jc||Hd)&&(Id||Vd)&&Ks++}et=Ks>ze.length*.15?"box":"circle"}else hn>3&&on<40?et="underline":fn>Ut*.5?et="arrow":et="drawing";const Pt=Math.min(10,ze.length),On=Math.max(1,Math.floor(ze.length/Pt)),Kn=new Set,Gt=[],As=[dn];for(let Yt=On;Yt<ze.length-1;Yt+=On)As.push(ze[Yt]);As.push(Ct);for(const Yt of As){const Ks=fa(Yt.x,Yt.y);if(!Ks||Kn.has(Ks)||os(Ks,"[data-feedback-toolbar]"))continue;Kn.add(Ks);const{name:mi}=_r(Ks);Gt.includes(mi)||Gt.push(mi)}const Qs=`${Math.round(He)},${Math.round(Je)} → ${Math.round(qe)},${Math.round(Ie)}`;let Gs;(et==="circle"||et==="box")&&Gt.length>0?Gs=`${et==="box"?"Boxed":"Circled"} **${Gt[0]}**${Gt.length>1?` (and ${Gt.slice(1).join(", ")})`:""} (region: ${Qs})`:et==="underline"&&Gt.length>0?Gs=`Underlined **${Gt[0]}** (${Qs})`:et==="arrow"&&Gt.length>=2?Gs=`Arrow from **${Gt[0]}** to **${Gt[Gt.length-1]}** (${Math.round(dn.x)},${Math.round(dn.y)} → ${Math.round(Ct.x)},${Math.round(Ct.y)})`:Gt.length>0?Gs=`${et==="arrow"?"Arrow":"Drawing"} near **${Gt.join("**, **")}** (region: ${Qs})`:Gs=`Drawing at ${Qs}`,ne.push(Gs)}V&&(V.style.visibility=""),ne.length>0&&(B+=`
**Drawings:**
`,ne.forEach((we,je)=>{B+=`${je+1}. ${we}
`}))}if((Ee.length>0||R&&Ot)&&(B+=`
`+qy(Ee,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ue,wireframePurpose:Ot||void 0},xt.outputDetail)),Te){const D=Qy(Te,xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});D&&(B+=`
`+D)}if(_)try{await navigator.clipboard.writeText(B)}catch{}p==null||p(B),ie(!0),Qe(()=>ie(!1),2e3),xt.autoClearAfterCopy&&Qe(()=>hi(),500)},[C,sn,Ee,Te,Ue,Ne,Ms,Ot,Ke,xt.outputDetail,us,xt.autoClearAfterCopy,hi,_,p]),Ba=b.useCallback(async()=>{const j=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;let R=t2(C,j,xt.outputDetail);if(!R&&Ee.length===0&&!Te)return;if(R||(R=`## Page Feedback: ${j}
`),Ee.length>0&&(R+=`
`+qy(Ee,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ue,wireframePurpose:Ot||void 0},xt.outputDetail)),Te){const D=Qy(Te,xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});D&&(R+=`
`+D)}h&&h(R,C),Se("sending"),await new Promise(D=>Qe(D,150));const B=await Ns("submit",{output:R,annotations:C},!0);Se(B?"sent":"failed"),Qe(()=>Se("idle"),2500),B&&xt.autoClearAfterCopy&&Qe(()=>hi(),500)},[h,Ns,C,Ee,Te,Ue,Ms,Ke,xt.outputDetail,us,xt.autoClearAfterCopy,hi]);b.useEffect(()=>{if(!Xs)return;const j=10,R=D=>{const V=D.clientX-Xs.x,ne=D.clientY-Xs.y,_e=Math.sqrt(V*V+ne*ne);if(!Gn&&_e>j&&Ea(!0),Gn||_e>j){let we=Xs.toolbarX+V,je=Xs.toolbarY+ne;const ze=20,He=337,Je=44,Ie=He-(T?ds==="connected"?297:257:44),Me=ze-Ie,on=window.innerWidth-ze-He;we=Math.max(Me,Math.min(on,we)),je=Math.max(ze,Math.min(window.innerHeight-Je-ze,je)),Ei({x:we,y:je})}},B=()=>{Gn&&(to.current=!0),Ea(!1),Nr(null)};return document.addEventListener("mousemove",R),document.addEventListener("mouseup",B),()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",B)}},[Xs,Gn,T,ds]);const vc=b.useCallback(j=>{if(j.target.closest("button")||j.target.closest("[data-agentation-settings-panel]"))return;const R=j.currentTarget.parentElement;if(!R)return;const B=R.getBoundingClientRect(),D=(Bt==null?void 0:Bt.x)??B.left,V=(Bt==null?void 0:Bt.y)??B.top;Nr({x:j.clientX,y:j.clientY,toolbarX:D,toolbarY:V})},[Bt]);if(b.useEffect(()=>{if(!Bt)return;const j=()=>{let V=Bt.x,ne=Bt.y;const je=20-(337-(T?ds==="connected"?297:257:44)),ze=window.innerWidth-20-337;V=Math.max(je,Math.min(ze,V)),ne=Math.max(20,Math.min(window.innerHeight-44-20,ne)),(V!==Bt.x||ne!==Bt.y)&&Ei({x:V,y:ne})};return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[Bt,T,ds]),b.useEffect(()=>{const j=R=>{const B=R.target,D=B.tagName==="INPUT"||B.tagName==="TEXTAREA"||B.isContentEditable;if(R.key==="Escape"){if(Ne){pt?rt(null):Aa();return}if(Qn){xs(!1);return}if(un.length>0){ci([]);return}K||T&&(Ln(),M(!1))}if((R.metaKey||R.ctrlKey)&&R.shiftKey&&(R.key==="f"||R.key==="F")){R.preventDefault(),Ln(),T?zr():M(!0);return}if(!(D||R.metaKey||R.ctrlKey)&&((R.key==="p"||R.key==="P")&&(R.preventDefault(),Ln(),$r()),(R.key==="l"||R.key==="L")&&(R.preventDefault(),Ln(),Qn&&xs(!1),he&&De(!1),K&&Pr(),Ne?Aa():gt(!0)),(R.key==="h"||R.key==="H")&&C.length>0&&(R.preventDefault(),Ln(),L(V=>!V)),(R.key==="c"||R.key==="C")&&(C.length>0||Ee.length>0||Te)&&(R.preventDefault(),Ln(),Oa()),(R.key==="x"||R.key==="X")&&(C.length>0||Ee.length>0||Te)&&(R.preventDefault(),Ln(),hi(),Ee.length>0&&mt([]),Te&&ls(null)),R.key==="s"||R.key==="S")){const V=vi(xt.webhookUrl)||vi(w||"");C.length>0&&V&&Ce==="idle"&&(R.preventDefault(),Ln(),Ba())}};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[T,Qn,Ne,pt,Ee,Te,K,C.length,xt.webhookUrl,w,Ce,Ba,$r,Oa,hi,un]),!$e||$)return null;const ao=C.length>0,Ss=C.filter(j=>!Un.has(j.id)&&j.kind!=="placement"&&j.kind!=="rearrange"),Pd=Ss.length>0,wc=C.filter(j=>Un.has(j.id)),Sc=j=>{const ne=j.x/100*window.innerWidth,_e=typeof j.y=="string"?parseFloat(j.y):j.y,we={};window.innerHeight-_e-22-10<80&&(we.top="auto",we.bottom="calc(100% + 10px)");const ze=ne-200/2,He=10;if(ze<He){const Je=He-ze;we.left=`calc(50% + ${Je}px)`}else if(ze+200>window.innerWidth-He){const Je=ze+200-(window.innerWidth-He);we.left=`calc(50% - ${Je}px)`}return we};return C2.createPortal(r.jsxs("div",{ref:F,style:{display:"contents"},"data-agentation-theme":cs?"dark":"light","data-agentation-accent":xt.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${me.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Bt?{left:Bt.x,top:Bt.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${me.toolbarContainer} ${T?me.expanded:me.collapsed} ${pc?me.entrance:""} ${P?me.hiding:""} ${!xt.webhooksEnabled&&(vi(xt.webhookUrl)||vi(w||""))?me.serverConnected:""}`,onClick:T?void 0:j=>{if(to.current){to.current=!1,j.preventDefault();return}M(!0)},onMouseDown:vc,role:T?void 0:"button",tabIndex:T?-1:0,title:T?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${me.toggleContent} ${T?me.hidden:me.visible}`,children:[r.jsx(gS,{size:24}),Pd&&r.jsx("span",{className:`${me.badge} ${T?me.fadeOut:""} ${pc?me.entrance:""}`,children:Ss.length})]}),r.jsxs("div",{className:`${me.controlsContent} ${T?me.visible:me.hidden} ${Bt&&Bt.y<100?me.tooltipBelow:""} ${kt||he?me.tooltipsHidden:""} ${dc?me.tooltipsInSession:""}`,onMouseEnter:eo,onMouseLeave:Ld,children:[r.jsxs("div",{className:`${me.buttonWrapper} ${Bt&&Bt.x<120?me.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:me.controlButton,onClick:j=>{j.stopPropagation(),Ln(),$r()},"data-active":q,children:r.jsx(wS,{size:24,isPaused:q})}),r.jsxs("span",{className:me.buttonTooltip,children:[q?"Resume animations":"Pause animations",r.jsx("span",{className:me.shortcut,children:"P"})]})]}),r.jsxs("div",{className:me.buttonWrapper,children:[r.jsx("button",{className:`${me.controlButton} ${cs?"":me.light}`,onClick:j=>{j.stopPropagation(),Ln(),Qn&&xs(!1),he&&De(!1),K&&Pr(),Ne?Aa():gt(!0)},"data-active":Ne,style:Ne&&Ue?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(NS,{size:21})}),r.jsxs("span",{className:me.buttonTooltip,children:[Ne?"Exit layout mode":"Layout mode",r.jsx("span",{className:me.shortcut,children:"L"})]})]}),r.jsxs("div",{className:me.buttonWrapper,children:[r.jsx("button",{className:me.controlButton,onClick:j=>{j.stopPropagation(),Ln(),L(!O)},disabled:!ao||Ne,children:r.jsx(vS,{size:24,isOpen:O})}),r.jsxs("span",{className:me.buttonTooltip,children:[O?"Hide markers":"Show markers",r.jsx("span",{className:me.shortcut,children:"H"})]})]}),r.jsxs("div",{className:me.buttonWrapper,children:[r.jsx("button",{className:`${me.controlButton} ${A?me.statusShowing:""}`,onClick:j=>{j.stopPropagation(),Ln(),Oa()},disabled:Ne&&Ue?Ee.length===0&&!((Ir=Te==null?void 0:Te.sections)!=null&&Ir.length):!ao&&sn.length===0&&Ee.length===0&&!((Vr=Te==null?void 0:Te.sections)!=null&&Vr.length),"data-active":A,children:r.jsx(xS,{size:24,copied:A,tint:Ne&&Ue&&(Ee.length>0||(ro=Te==null?void 0:Te.sections)!=null&&ro.length)?"#f97316":void 0})}),r.jsxs("span",{className:me.buttonTooltip,children:[Ne&&Ue?"Copy layout":"Copy feedback",r.jsx("span",{className:me.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${me.buttonWrapper} ${me.sendButtonWrapper} ${T&&!xt.webhooksEnabled&&(vi(xt.webhookUrl)||vi(w||""))?me.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${me.controlButton} ${Ce==="sent"||Ce==="failed"?me.statusShowing:""}`,onClick:j=>{j.stopPropagation(),Ln(),Ba()},disabled:!ao||!vi(xt.webhookUrl)&&!vi(w||"")||Ce==="sending","data-no-hover":Ce==="sent"||Ce==="failed",tabIndex:vi(xt.webhookUrl)||vi(w||"")?0:-1,children:[r.jsx(bS,{size:24,state:Ce}),ao&&Ce==="idle"&&r.jsx("span",{className:me.buttonBadge,children:C.length})]}),r.jsxs("span",{className:me.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:me.shortcut,children:"S"})]})]}),r.jsxs("div",{className:me.buttonWrapper,children:[r.jsx("button",{className:me.controlButton,onClick:j=>{j.stopPropagation(),Ln(),hi()},disabled:!ao&&sn.length===0&&Ee.length===0&&!((lo=Te==null?void 0:Te.sections)!=null&&lo.length),"data-danger":!0,children:r.jsx(kS,{size:24})}),r.jsxs("span",{className:me.buttonTooltip,children:["Clear all",r.jsx("span",{className:me.shortcut,children:"X"})]})]}),r.jsxs("div",{className:me.buttonWrapper,children:[r.jsx("button",{className:me.controlButton,onClick:j=>{j.stopPropagation(),Ln(),Ne&&Aa(),De(!he)},children:r.jsx(SS,{size:24})}),g&&ds!=="disconnected"&&r.jsx("span",{className:`${me.mcpIndicator} ${me[ds]} ${he?me.hidden:""}`,title:ds==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:me.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:me.divider}),r.jsxs("div",{className:`${me.buttonWrapper} ${Bt&&typeof window<"u"&&Bt.x>window.innerWidth-120?me.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:me.controlButton,onClick:j=>{j.stopPropagation(),Ln(),zr()},children:r.jsx(jS,{size:24})}),r.jsxs("span",{className:me.buttonTooltip,children:["Exit",r.jsx("span",{className:me.shortcut,children:"Esc"})]})]})]}),r.jsx(aj,{visible:Ne&&T,activeType:pt,onSelect:j=>{rt(pt===j?null:j)},isDarkMode:cs,sectionCount:(Te==null?void 0:Te.sections.length)??0,onDetectSections:()=>{const j=gj(),R=(Te==null?void 0:Te.sections)??[],B=new Set(R.map(_e=>_e.selector)),D=j.filter(_e=>!B.has(_e.selector)),V=[...R,...D],ne=[...(Te==null?void 0:Te.originalOrder)??[],...D.map(_e=>_e.id)];ls({sections:V,originalOrder:ne,detectedAt:Date.now()})},placementCount:Ee.length,onClearPlacements:()=>{xn(j=>j+1),Tr(j=>j+1),Qe(()=>{ls({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Ue,onBlankCanvasChange:j=>{const R={sections:[],originalOrder:[],detectedAt:Date.now()};j?(ka.current={rearrange:Te,placements:Ee},ls(gs.current.rearrange||R),mt(gs.current.placements),rt(null)):(gs.current={rearrange:Te,placements:Ee},ls(ka.current.rearrange||R),mt(ka.current.placements)),yt(j)},wireframePurpose:Ot,onWireframePurposeChange:Vt,Tooltip:pa,onDragStart:(j,R)=>{R.preventDefault();const B=Ae[j];let D=null,V=!1;const ne=R.clientX,_e=R.clientY,we=R.target.closest("[data-feedback-toolbar]"),je=(we==null?void 0:we.getBoundingClientRect().top)??window.innerHeight,ze=Je=>{const qe=Je.clientX-ne,Ie=Je.clientY-_e;if(!V&&(Math.abs(qe)>4||Math.abs(Ie)>4)&&(V=!0,D=document.createElement("div"),D.className=`${le.dragPreview}${Ue?` ${le.dragPreviewWireframe}`:""}`,document.body.appendChild(D)),!D)return;const Me=Math.max(0,je-Je.clientY),on=Math.min(1,Me/180),Ut=1-Math.pow(1-on,2),dn=28,Ct=20,fn=Math.min(140,B.width*.18),et=Math.min(90,B.height*.18),nt=dn+(fn-dn)*Ut,hn=Ct+(et-Ct)*Ut;D.style.width=`${nt}px`,D.style.height=`${hn}px`,D.style.left=`${Je.clientX-nt/2}px`,D.style.top=`${Je.clientY-hn/2}px`,D.style.opacity=`${.5+.5*Ut}`,D.textContent=Ut>.25?j:""},He=Je=>{if(window.removeEventListener("mousemove",ze),window.removeEventListener("mouseup",He),D&&document.body.removeChild(D),V){const qe=B.width,Ie=B.height,Me=window.scrollY,on=Math.max(0,Je.clientX-qe/2),Ut=Math.max(0,Je.clientY+Me-Ie/2),dn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:j,x:on,y:Ut,width:qe,height:Ie,scrollY:Me,timestamp:Date.now()};mt(Ct=>[...Ct,dn]),rt(null),ys.current=new Set,ai(Ct=>Ct+1)}};window.addEventListener("mousemove",ze),window.addEventListener("mouseup",He)}}),r.jsx(CC,{settings:xt,onSettingsChange:j=>hc(R=>({...R,...j})),isDarkMode:cs,onToggleTheme:Mr,isDevMode:Rr,connectionStatus:ds,endpoint:g,isVisible:ke,toolbarNearBottom:!!Bt&&Bt.y<230,settingsPage:at,onSettingsPageChange:Ye,onHideToolbar:Or})]})}),(Ne||jt)&&r.jsx("div",{className:`${le.blankCanvas} ${kn?le.visible:""} ${Qt?le.gridActive:""}`,style:{"--canvas-opacity":Dn},"data-feedback-toolbar":!0}),Ne&&Ue&&kn&&r.jsxs("div",{className:le.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:le.wireframeOpacityRow,children:[r.jsx("span",{className:le.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:le.wireframeOpacitySlider,min:0,max:1,step:.01,value:Dn,onChange:j=>Ti(Number(j.target.value))})]}),r.jsxs("div",{className:le.wireframeNoticeTitleRow,children:[r.jsx("span",{className:le.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:le.wireframeNoticeDivider}),r.jsx("button",{className:le.wireframeStartOver,onClick:()=>{xn(j=>j+1),ls({sections:[],originalOrder:[],detectedAt:Date.now()}),gs.current={rearrange:null,placements:[]},Vt(""),Gu(Ke)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ne||jt)&&r.jsx(tj,{placements:Ee,onChange:mt,activeComponent:jt?null:pt,onActiveComponentChange:rt,isDarkMode:cs,exiting:jt,onInteractionChange:_s,passthrough:!pt,extraSnapRects:Te==null?void 0:Te.sections.map(j=>j.currentRect),deselectSignal:Cr,clearSignal:Ki,wireframe:Ue,onSelectionChange:(j,R)=>{ys.current=j,R||(Fs.current=new Set,$o(B=>B+1))},onDragMove:(j,R)=>{const B=Fs.current;if(!(!B.size||!Te)){if(!jn.current){jn.current=new Map;for(const D of Te.sections)B.has(D.id)&&jn.current.set(D.id,{x:D.currentRect.x,y:D.currentRect.y})}for(const D of Te.sections){if(!B.has(D.id)||!jn.current.get(D.id))continue;const ne=document.querySelector(`[data-rearrange-section="${D.id}"]`);ne&&(ne.style.transform=`translate(${j}px, ${R}px)`)}}},onDragEnd:(j,R,B)=>{const D=Fs.current,V=jn.current;if(jn.current=null,!(!D.size||!Te||!V)){for(const ne of D){const _e=document.querySelector(`[data-rearrange-section="${ne}"]`);_e&&(_e.style.transform="")}B&&ls(ne=>ne&&{...ne,sections:ne.sections.map(_e=>{const we=V.get(_e.id);return we?{..._e,currentRect:{..._e.currentRect,x:Math.max(0,we.x+j),y:Math.max(0,we.y+R)}}:_e})})}}}),(Ne||jt)&&Te&&r.jsx(bj,{rearrangeState:Te,onChange:ls,isDarkMode:cs,exiting:jt,blankCanvas:Ue,extraSnapRects:Ee.map(j=>({x:j.x,y:j.y,width:j.width,height:j.height})),clearSignal:cc,deselectSignal:Gi,onSelectionChange:(j,R)=>{Fs.current=j,R||(ys.current=new Set,ai(B=>B+1))},onDragMove:(j,R)=>{const B=ys.current;if(B.size){if(!jn.current){jn.current=new Map;for(const D of Ee)B.has(D.id)&&jn.current.set(D.id,{x:D.x,y:D.y})}for(const D of B){const V=document.querySelector(`[data-design-placement="${D}"]`);V&&(V.style.transform=`translate(${j}px, ${R}px)`)}}},onDragEnd:(j,R,B)=>{const D=ys.current,V=jn.current;if(jn.current=null,!(!D.size||!V)){for(const ne of D){const _e=document.querySelector(`[data-design-placement="${ne}"]`);_e&&(_e.style.transform="")}B&&mt(ne=>ne.map(_e=>{const we=V.get(_e.id);return we?{..._e,x:Math.max(0,we.x+j),y:Math.max(0,we.y+R)}:_e}))}}}),r.jsx("canvas",{ref:Ji,className:`${me.drawCanvas} ${Qn?me.active:""}`,style:{opacity:Lr?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:me.markersLayer,"data-feedback-toolbar":!0,children:[Q&&Ss.filter(j=>!j.isFixed).map((j,R,B)=>r.jsx(n2,{annotation:j,globalIndex:Ss.findIndex(D=>D.id===j.id),layerIndex:R,layerSize:B.length,isExiting:G,isClearing:Fe,isAnimated:Vo.has(j.id),isHovered:!G&&Be===j.id,isDeleting:yn===j.id,isEditingAny:!!se,renumberFrom:qn,markerClickBehavior:xt.markerClickBehavior,tooltipStyle:Sc(j),onHoverEnter:D=>!G&&D.id!==Na.current&&oo(D),onHoverLeave:()=>oo(null),onClick:D=>xt.markerClickBehavior==="delete"?Hr(D.id):La(D),onContextMenu:La},j.id)),Q&&!G&&wc.filter(j=>!j.isFixed).map(j=>r.jsx(s2,{annotation:j},j.id))]}),r.jsxs("div",{className:me.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[Q&&Ss.filter(j=>j.isFixed).map((j,R,B)=>r.jsx(n2,{annotation:j,globalIndex:Ss.findIndex(D=>D.id===j.id),layerIndex:R,layerSize:B.length,isExiting:G,isClearing:Fe,isAnimated:Vo.has(j.id),isHovered:!G&&Be===j.id,isDeleting:yn===j.id,isEditingAny:!!se,renumberFrom:qn,markerClickBehavior:xt.markerClickBehavior,tooltipStyle:Sc(j),onHoverEnter:D=>!G&&D.id!==Na.current&&oo(D),onHoverLeave:()=>oo(null),onClick:D=>xt.markerClickBehavior==="delete"?Hr(D.id):La(D),onContextMenu:La},j.id)),Q&&!G&&wc.filter(j=>j.isFixed).map(j=>r.jsx(s2,{annotation:j,fixed:!0},j.id))]}),T&&r.jsxs("div",{className:me.overlay,"data-feedback-toolbar":!0,style:K||se?{zIndex:99999}:void 0,children:[(ce==null?void 0:ce.rect)&&!K&&!Mt&&!vs&&r.jsx("div",{className:`${me.hoverHighlight} ${me.enter}`,style:{left:ce.rect.left,top:ce.rect.top,width:ce.rect.width,height:ce.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),un.filter(j=>document.contains(j.element)).map((j,R)=>{const B=j.element.getBoundingClientRect(),D=un.length>1;return r.jsx("div",{className:D?me.multiSelectOutline:me.singleSelectOutline,style:{position:"fixed",left:B.left,top:B.top,width:B.width,height:B.height,...D?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},R)}),Be&&!K&&(()=>{var V;const j=C.find(ne=>ne.id===Be);if(!(j!=null&&j.boundingBox))return null;if((V=j.elementBoundingBoxes)!=null&&V.length)return At.length>0?At.filter(ne=>document.contains(ne)).map((ne,_e)=>{const we=ne.getBoundingClientRect();return r.jsx("div",{className:`${me.multiSelectOutline} ${me.enter}`,style:{left:we.left,top:we.top,width:we.width,height:we.height}},`hover-outline-live-${_e}`)}):j.elementBoundingBoxes.map((ne,_e)=>r.jsx("div",{className:`${me.multiSelectOutline} ${me.enter}`,style:{left:ne.x,top:ne.y-ot,width:ne.width,height:ne.height}},`hover-outline-${_e}`));const R=ht&&document.contains(ht)?ht.getBoundingClientRect():null,B=R?{x:R.left,y:R.top,width:R.width,height:R.height}:{x:j.boundingBox.x,y:j.isFixed?j.boundingBox.y:j.boundingBox.y-ot,width:j.boundingBox.width,height:j.boundingBox.height},D=j.isMultiSelect;return r.jsx("div",{className:`${D?me.multiSelectOutline:me.singleSelectOutline} ${me.enter}`,style:{left:B.x,top:B.y,width:B.width,height:B.height,...D?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ce&&!K&&!Mt&&!vs&&r.jsxs("div",{className:`${me.hoverTooltip} ${me.enter}`,style:{left:Math.max(8,Math.min(J.x,window.innerWidth-100)),top:Math.max(J.y-(ce.reactComponents?48:32),8)},children:[ce.reactComponents&&r.jsx("div",{className:me.hoverReactPath,children:ce.reactComponents}),r.jsx("div",{className:me.hoverElementName,children:ce.elementName})]}),K&&r.jsxs(r.Fragment,{children:[(kc=K.multiSelectElements)!=null&&kc.length?K.multiSelectElements.filter(j=>document.contains(j)).map((j,R)=>{const B=j.getBoundingClientRect();return r.jsx("div",{className:`${me.multiSelectOutline} ${ui?me.exit:me.enter}`,style:{left:B.left,top:B.top,width:B.width,height:B.height}},`pending-multi-${R}`)}):K.targetElement&&document.contains(K.targetElement)?(()=>{const j=K.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${me.singleSelectOutline} ${ui?me.exit:me.enter}`,style:{left:j.left,top:j.top,width:j.width,height:j.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():K.boundingBox&&r.jsx("div",{className:`${K.isMultiSelect?me.multiSelectOutline:me.singleSelectOutline} ${ui?me.exit:me.enter}`,style:{left:K.boundingBox.x,top:K.boundingBox.y-ot,width:K.boundingBox.width,height:K.boundingBox.height,...K.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const j=K.x,R=K.isFixed?K.y:K.y-ot;return r.jsxs(r.Fragment,{children:[r.jsx(_C,{x:j,y:R,isMultiSelect:K.isMultiSelect,isExiting:ui}),r.jsx(yd,{ref:gc,element:K.element,selectedText:K.selectedText,computedStyles:K.computedStylesObj,placeholder:K.element==="Area selection"?"What should change in this area?":K.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:zd,onCancel:Pr,isExiting:ui,lightMode:!cs,accentColor:K.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,j/100*window.innerWidth)),...R>window.innerHeight-290?{bottom:window.innerHeight-R+20}:{top:R+20}}})]})})()]}),se&&r.jsxs(r.Fragment,{children:[(Xo=se.elementBoundingBoxes)!=null&&Xo.length?St.length>0?St.filter(j=>document.contains(j)).map((j,R)=>{const B=j.getBoundingClientRect();return r.jsx("div",{className:`${me.multiSelectOutline} ${me.enter}`,style:{left:B.left,top:B.top,width:B.width,height:B.height}},`edit-multi-live-${R}`)}):se.elementBoundingBoxes.map((j,R)=>r.jsx("div",{className:`${me.multiSelectOutline} ${me.enter}`,style:{left:j.x,top:j.y-ot,width:j.width,height:j.height}},`edit-multi-${R}`)):(()=>{const j=it&&document.contains(it)?it.getBoundingClientRect():null,R=j?{x:j.left,y:j.top,width:j.width,height:j.height}:se.boundingBox?{x:se.boundingBox.x,y:se.isFixed?se.boundingBox.y:se.boundingBox.y-ot,width:se.boundingBox.width,height:se.boundingBox.height}:null;return R?r.jsx("div",{className:`${se.isMultiSelect?me.multiSelectOutline:me.singleSelectOutline} ${me.enter}`,style:{left:R.x,top:R.y,width:R.width,height:R.height,...se.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(yd,{ref:Dr,element:se.element,selectedText:se.selectedText,computedStyles:hj(se.computedStyles),placeholder:"Edit your feedback...",initialValue:se.comment,submitLabel:"Save",onSubmit:Fo,onCancel:$d,onDelete:()=>Hr(se.id),isExiting:Od,lightMode:!cs,accentColor:se.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const j=se.isFixed?se.y:se.y-ot;return{left:Math.max(160,Math.min(window.innerWidth-160,se.x/100*window.innerWidth)),...j>window.innerHeight-290?{bottom:window.innerHeight-j+20}:{top:j+20}}})()})]}),vs&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:Uo,className:me.dragSelection}),r.jsx("div",{ref:Yo,className:me.highlightsContainer})]})]})]}),document.body)}const MC=()=>r.jsxs(r.Fragment,{children:[r.jsx(I9,{}),r.jsxs(W4,{children:[r.jsx(mm,{exact:!0,path:"/",element:r.jsx(dS,{})}),r.jsx(mm,{exact:!0,path:"/project/:id",element:r.jsx(V9,{})})]}),r.jsx(e3,{}),r.jsx(Jv,{position:"bottom-right",toastOptions:{style:{background:"#0f2244",color:"#f0f4ff",border:"1px solid rgba(245,158,11,0.2)"}}}),r.jsx(EC,{})]});cv.createRoot(document.getElementById("root")).render(r.jsx(p6,{children:r.jsx(MC,{})}));
