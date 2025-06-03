(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Ed={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function jb(){if(T_)return dl;T_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var g in o)g!=="key"&&(u[g]=o[g])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return dl.Fragment=t,dl.jsx=n,dl.jsxs=n,dl}var E_;function Bb(){return E_||(E_=1,Ed.exports=jb()),Ed.exports}var q=Bb(),Ad={exports:{}},Dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function qb(){if(A_)return Dt;A_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function D(b){return b===null||typeof b!="object"?null:(b=w&&b[w]||b["@@iterator"],typeof b=="function"?b:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,W={};function et(b,G,nt){this.props=b,this.context=G,this.refs=W,this.updater=nt||B}et.prototype.isReactComponent={},et.prototype.setState=function(b,G){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,G,"setState")},et.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function pt(){}pt.prototype=et.prototype;function dt(b,G,nt){this.props=b,this.context=G,this.refs=W,this.updater=nt||B}var ct=dt.prototype=new pt;ct.constructor=dt,Q(ct,et.prototype),ct.isPureReactComponent=!0;var Rt=Array.isArray,ut={H:null,A:null,T:null,S:null,V:null},Ct=Object.prototype.hasOwnProperty;function O(b,G,nt,J,ot,St){return nt=St.ref,{$$typeof:r,type:b,key:G,ref:nt!==void 0?nt:null,props:St}}function S(b,G){return O(b.type,G,void 0,void 0,void 0,b.props)}function I(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function x(b){var G={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(nt){return G[nt]})}var M=/\/+/g;function V(b,G){return typeof b=="object"&&b!==null&&b.key!=null?x(""+b.key):G.toString(36)}function C(){}function at(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(C,C):(b.status="pending",b.then(function(G){b.status==="pending"&&(b.status="fulfilled",b.value=G)},function(G){b.status==="pending"&&(b.status="rejected",b.reason=G)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function bt(b,G,nt,J,ot){var St=typeof b;(St==="undefined"||St==="boolean")&&(b=null);var vt=!1;if(b===null)vt=!0;else switch(St){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(b.$$typeof){case r:case t:vt=!0;break;case E:return vt=b._init,bt(vt(b._payload),G,nt,J,ot)}}if(vt)return ot=ot(b),vt=J===""?"."+V(b,0):J,Rt(ot)?(nt="",vt!=null&&(nt=vt.replace(M,"$&/")+"/"),bt(ot,G,nt,"",function(pn){return pn})):ot!=null&&(I(ot)&&(ot=S(ot,nt+(ot.key==null||b&&b.key===ot.key?"":(""+ot.key).replace(M,"$&/")+"/")+vt)),G.push(ot)),1;vt=0;var te=J===""?".":J+":";if(Rt(b))for(var Ht=0;Ht<b.length;Ht++)J=b[Ht],St=te+V(J,Ht),vt+=bt(J,G,nt,St,ot);else if(Ht=D(b),typeof Ht=="function")for(b=Ht.call(b),Ht=0;!(J=b.next()).done;)J=J.value,St=te+V(J,Ht++),vt+=bt(J,G,nt,St,ot);else if(St==="object"){if(typeof b.then=="function")return bt(at(b),G,nt,J,ot);throw G=String(b),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return vt}function F(b,G,nt){if(b==null)return b;var J=[],ot=0;return bt(b,J,"","",function(St){return G.call(nt,St,ot++)}),J}function st(b){if(b._status===-1){var G=b._result;G=G(),G.then(function(nt){(b._status===0||b._status===-1)&&(b._status=1,b._result=nt)},function(nt){(b._status===0||b._status===-1)&&(b._status=2,b._result=nt)}),b._status===-1&&(b._status=0,b._result=G)}if(b._status===1)return b._result.default;throw b._result}var Z=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function it(){}return Dt.Children={map:F,forEach:function(b,G,nt){F(b,function(){G.apply(this,arguments)},nt)},count:function(b){var G=0;return F(b,function(){G++}),G},toArray:function(b){return F(b,function(G){return G})||[]},only:function(b){if(!I(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Dt.Component=et,Dt.Fragment=n,Dt.Profiler=o,Dt.PureComponent=dt,Dt.StrictMode=s,Dt.Suspense=p,Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ut,Dt.__COMPILER_RUNTIME={__proto__:null,c:function(b){return ut.H.useMemoCache(b)}},Dt.cache=function(b){return function(){return b.apply(null,arguments)}},Dt.cloneElement=function(b,G,nt){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var J=Q({},b.props),ot=b.key,St=void 0;if(G!=null)for(vt in G.ref!==void 0&&(St=void 0),G.key!==void 0&&(ot=""+G.key),G)!Ct.call(G,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&G.ref===void 0||(J[vt]=G[vt]);var vt=arguments.length-2;if(vt===1)J.children=nt;else if(1<vt){for(var te=Array(vt),Ht=0;Ht<vt;Ht++)te[Ht]=arguments[Ht+2];J.children=te}return O(b.type,ot,void 0,void 0,St,J)},Dt.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:u,_context:b},b},Dt.createElement=function(b,G,nt){var J,ot={},St=null;if(G!=null)for(J in G.key!==void 0&&(St=""+G.key),G)Ct.call(G,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ot[J]=G[J]);var vt=arguments.length-2;if(vt===1)ot.children=nt;else if(1<vt){for(var te=Array(vt),Ht=0;Ht<vt;Ht++)te[Ht]=arguments[Ht+2];ot.children=te}if(b&&b.defaultProps)for(J in vt=b.defaultProps,vt)ot[J]===void 0&&(ot[J]=vt[J]);return O(b,St,void 0,void 0,null,ot)},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(b){return{$$typeof:g,render:b}},Dt.isValidElement=I,Dt.lazy=function(b){return{$$typeof:E,_payload:{_status:-1,_result:b},_init:st}},Dt.memo=function(b,G){return{$$typeof:y,type:b,compare:G===void 0?null:G}},Dt.startTransition=function(b){var G=ut.T,nt={};ut.T=nt;try{var J=b(),ot=ut.S;ot!==null&&ot(nt,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(it,Z)}catch(St){Z(St)}finally{ut.T=G}},Dt.unstable_useCacheRefresh=function(){return ut.H.useCacheRefresh()},Dt.use=function(b){return ut.H.use(b)},Dt.useActionState=function(b,G,nt){return ut.H.useActionState(b,G,nt)},Dt.useCallback=function(b,G){return ut.H.useCallback(b,G)},Dt.useContext=function(b){return ut.H.useContext(b)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(b,G){return ut.H.useDeferredValue(b,G)},Dt.useEffect=function(b,G,nt){var J=ut.H;if(typeof nt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(b,G)},Dt.useId=function(){return ut.H.useId()},Dt.useImperativeHandle=function(b,G,nt){return ut.H.useImperativeHandle(b,G,nt)},Dt.useInsertionEffect=function(b,G){return ut.H.useInsertionEffect(b,G)},Dt.useLayoutEffect=function(b,G){return ut.H.useLayoutEffect(b,G)},Dt.useMemo=function(b,G){return ut.H.useMemo(b,G)},Dt.useOptimistic=function(b,G){return ut.H.useOptimistic(b,G)},Dt.useReducer=function(b,G,nt){return ut.H.useReducer(b,G,nt)},Dt.useRef=function(b){return ut.H.useRef(b)},Dt.useState=function(b){return ut.H.useState(b)},Dt.useSyncExternalStore=function(b,G,nt){return ut.H.useSyncExternalStore(b,G,nt)},Dt.useTransition=function(){return ut.H.useTransition()},Dt.version="19.1.0",Dt}var b_;function mm(){return b_||(b_=1,Ad.exports=qb()),Ad.exports}var kt=mm(),bd={exports:{}},ml={},Sd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Hb(){return S_||(S_=1,function(r){function t(F,st){var Z=F.length;F.push(st);t:for(;0<Z;){var it=Z-1>>>1,b=F[it];if(0<o(b,st))F[it]=st,F[Z]=b,Z=it;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var st=F[0],Z=F.pop();if(Z!==st){F[0]=Z;t:for(var it=0,b=F.length,G=b>>>1;it<G;){var nt=2*(it+1)-1,J=F[nt],ot=nt+1,St=F[ot];if(0>o(J,Z))ot<b&&0>o(St,J)?(F[it]=St,F[ot]=Z,it=ot):(F[it]=J,F[nt]=Z,it=nt);else if(ot<b&&0>o(St,Z))F[it]=St,F[ot]=Z,it=ot;else break t}}return st}function o(F,st){var Z=F.sortIndex-st.sortIndex;return Z!==0?Z:F.id-st.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],y=[],E=1,w=null,D=3,B=!1,Q=!1,W=!1,et=!1,pt=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;function Rt(F){for(var st=n(y);st!==null;){if(st.callback===null)s(y);else if(st.startTime<=F)s(y),st.sortIndex=st.expirationTime,t(p,st);else break;st=n(y)}}function ut(F){if(W=!1,Rt(F),!Q)if(n(p)!==null)Q=!0,Ct||(Ct=!0,V());else{var st=n(y);st!==null&&bt(ut,st.startTime-F)}}var Ct=!1,O=-1,S=5,I=-1;function x(){return et?!0:!(r.unstable_now()-I<S)}function M(){if(et=!1,Ct){var F=r.unstable_now();I=F;var st=!0;try{t:{Q=!1,W&&(W=!1,dt(O),O=-1),B=!0;var Z=D;try{e:{for(Rt(F),w=n(p);w!==null&&!(w.expirationTime>F&&x());){var it=w.callback;if(typeof it=="function"){w.callback=null,D=w.priorityLevel;var b=it(w.expirationTime<=F);if(F=r.unstable_now(),typeof b=="function"){w.callback=b,Rt(F),st=!0;break e}w===n(p)&&s(p),Rt(F)}else s(p);w=n(p)}if(w!==null)st=!0;else{var G=n(y);G!==null&&bt(ut,G.startTime-F),st=!1}}break t}finally{w=null,D=Z,B=!1}st=void 0}}finally{st?V():Ct=!1}}}var V;if(typeof ct=="function")V=function(){ct(M)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,at=C.port2;C.port1.onmessage=M,V=function(){at.postMessage(null)}}else V=function(){pt(M,0)};function bt(F,st){O=pt(function(){F(r.unstable_now())},st)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(F){switch(D){case 1:case 2:case 3:var st=3;break;default:st=D}var Z=D;D=st;try{return F()}finally{D=Z}},r.unstable_requestPaint=function(){et=!0},r.unstable_runWithPriority=function(F,st){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=D;D=F;try{return st()}finally{D=Z}},r.unstable_scheduleCallback=function(F,st,Z){var it=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?it+Z:it):Z=it,F){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=Z+b,F={id:E++,callback:st,priorityLevel:F,startTime:Z,expirationTime:b,sortIndex:-1},Z>it?(F.sortIndex=Z,t(y,F),n(p)===null&&F===n(y)&&(W?(dt(O),O=-1):W=!0,bt(ut,Z-it))):(F.sortIndex=b,t(p,F),Q||B||(Q=!0,Ct||(Ct=!0,V()))),F},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(F){var st=D;return function(){var Z=D;D=st;try{return F.apply(this,arguments)}finally{D=Z}}}}(wd)),wd}var w_;function Fb(){return w_||(w_=1,Sd.exports=Hb()),Sd.exports}var Rd={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function Gb(){if(R_)return Fe;R_=1;var r=mm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fe.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(p,y,null,E)},Fe.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Fe.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Fe.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Fe.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,w=g(E,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:D,fetchPriority:B}):E==="script"&&s.d.X(p,{crossOrigin:w,integrity:D,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Fe.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=g(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Fe.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,w=g(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Fe.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=g(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Fe.requestFormReset=function(p){s.d.r(p)},Fe.unstable_batchedUpdates=function(p,y){return p(y)},Fe.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Fe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fe.version="19.1.0",Fe}var I_;function Qb(){if(I_)return Rd.exports;I_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rd.exports=Gb(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Kb(){if(C_)return ml;C_=1;var r=Fb(),t=mm(),n=Qb();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===l)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,w=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),pt=Symbol.for("react.provider"),dt=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),Rt=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),Ct=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var C=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case et:return"Profiler";case W:return"StrictMode";case ut:return"Suspense";case Ct:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case ct:return(e.displayName||"Context")+".Provider";case dt:return(e._context.displayName||"Context")+".Consumer";case Rt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:at(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return at(e(i))}catch{}}return null}var bt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},it=[],b=-1;function G(e){return{current:e}}function nt(e){0>b||(e.current=it[b],it[b]=null,b--)}function J(e,i){b++,it[b]=e.current,e.current=i}var ot=G(null),St=G(null),vt=G(null),te=G(null);function Ht(e,i){switch(J(vt,i),J(St,e),J(ot,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Yy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Yy(i),e=Xy(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(ot),J(ot,e)}function pn(){nt(ot),nt(St),nt(vt)}function Xi(e){e.memoizedState!==null&&J(te,e);var i=ot.current,a=Xy(i,e.type);i!==a&&(J(St,e),J(ot,a))}function gi(e){St.current===e&&(nt(ot),nt(St)),te.current===e&&(nt(te),ll._currentValue=Z)}var Fr=Object.prototype.hasOwnProperty,Gr=r.unstable_scheduleCallback,Qr=r.unstable_cancelCallback,ro=r.unstable_shouldYield,Gl=r.unstable_requestPaint,yn=r.unstable_now,Th=r.unstable_getCurrentPriorityLevel,so=r.unstable_ImmediatePriority,qs=r.unstable_UserBlockingPriority,Kr=r.unstable_NormalPriority,Eh=r.unstable_LowPriority,Hs=r.unstable_IdlePriority,ao=r.log,Ql=r.unstable_setDisableYieldValue,le=null,Kt=null;function on(e){if(typeof ao=="function"&&Ql(e),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(le,e)}catch{}}var qe=Math.clz32?Math.clz32:Yr,Kl=Math.log,Ah=Math.LN2;function Yr(e){return e>>>=0,e===0?32:31-(Kl(e)/Ah|0)|0}var Xr=256,$r=4194304;function Mn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Mn(l):(v&=T,v!==0?h=Mn(v):a||(a=T&~e,a!==0&&(h=Mn(a))))):(T=l&~d,T!==0?h=Mn(T):v!==0?h=Mn(v):a||(a=l&~e,a!==0&&(h=Mn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Zr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function oo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lo(){var e=Xr;return Xr<<=1,(Xr&4194048)===0&&(Xr=256),e}function uo(){var e=$r;return $r<<=1,($r&62914560)===0&&($r=4194304),e}function pi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function yi(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function co(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,R=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var K=31-qe(a),X=1<<K;T[K]=0,R[K]=-1;var z=L[K];if(z!==null)for(L[K]=null,K=0;K<z.length;K++){var j=z[K];j!==null&&(j.lane&=-536870913)}a&=~X}l!==0&&Qn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Qn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-qe(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function ho(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-qe(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function $i(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zi(){var e=st.p;return e!==0?e:(e=window.event,e===void 0?32:m_(e.type))}function Yl(e,i){var a=st.p;try{return st.p=e,i()}finally{st.p=a}}var re=Math.random().toString(36).slice(2),Ee="__reactFiber$"+re,ge="__reactProps$"+re,_n="__reactContainer$"+re,fo="__reactEvents$"+re,bh="__reactListeners$"+re,Wi="__reactHandles$"+re,Xl="__reactResources$"+re,Wr="__reactMarker$"+re;function Ji(e){delete e[Ee],delete e[ge],delete e[fo],delete e[bh],delete e[Wi]}function _i(e){var i=e[Ee];if(i)return i;for(var a=e.parentNode;a;){if(i=a[_n]||a[Ee]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Jy(e);e!==null;){if(a=e[Ee])return a;e=Jy(e)}return i}e=a,a=e.parentNode}return null}function Kn(e){if(e=e[Ee]||e[_n]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Yn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Xe(e){var i=e[Xl];return i||(i=e[Xl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function he(e){e[Wr]=!0}var mo=new Set,Qs={};function Vn(e,i){vi(e,i),vi(e+"Capture",i)}function vi(e,i){for(Qs[e]=i,e=0;e<i.length;e++)mo.add(i[e])}var $l=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zl={},Jr={};function Wl(e){return Fr.call(Jr,e)?!0:Fr.call(Zl,e)?!1:$l.test(e)?Jr[e]=!0:(Zl[e]=!0,!1)}function tr(e,i,a){if(Wl(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Xn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ve(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var ts,Jl;function Ti(e){if(ts===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ts=i&&i[1]||"",Jl=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ts+e+Jl}var Ks=!1;function Ys(e,i){if(!e||Ks)return"";Ks=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(j){var z=j}Reflect.construct(e,[],X)}else{try{X.call()}catch(j){z=j}e.call(X.prototype)}}else{try{throw Error()}catch(j){z=j}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var R=v.split(`
`),L=T.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===L.length)for(l=R.length-1,h=L.length-1;1<=l&&0<=h&&R[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==L[h]){var K=`
`+R[l].replace(" at new "," at ");return e.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",e.displayName)),K}while(1<=l&&0<=h);break}}}finally{Ks=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ti(a):""}function go(e){switch(e.tag){case 26:case 27:case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 15:return Ys(e.type,!1);case 11:return Ys(e.type.render,!1);case 1:return Ys(e.type,!0);case 31:return Ti("Activity");default:return""}}function Xs(e){try{var i="";do i+=go(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function po(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Sh(e){var i=po(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function $s(e){e._valueTracker||(e._valueTracker=Sh(e))}function yo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=po(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wh=/[\n"\\]/g;function pe(e){return e.replace(wh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ln(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+$e(i)):e.value!==""+$e(i)&&(e.value=""+$e(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?er(e,v,$e(i)):a!=null?er(e,v,$e(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+$e(T):e.removeAttribute("name")}function ns(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+$e(a):"",i=i!=null?""+$e(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function er(e,i,a){i==="number"&&es(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ei(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function $t(e,i,a){if(i!=null&&(i=""+$e(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+$e(a):""}function is(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(bt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=$e(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function vn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var rs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||rs.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function _o(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&tu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&tu(e,d,i[d])}function vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ih=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zs(e){return Ih.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ai=null;function Tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,Si=null;function To(e){var i=Kn(e);if(i&&(e=i.stateNode)){var a=e[ge]||null;t:switch(e=i.stateNode,i.type){case"input":if(ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[ge]||null;if(!h)throw Error(s(90));ln(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&yo(l)}break t;case"textarea":$t(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ei(e,!!a.multiple,i,!1)}}}var $n=!1;function eu(e,i,a){if($n)return e(i,a);$n=!0;try{var l=e(i);return l}finally{if($n=!1,(bi!==null||Si!==null)&&(Yu(),bi&&(i=bi,e=Si,Si=bi=null,To(i),e)))for(i=0;i<e.length;i++)To(e[i])}}function ss(e,i){var a=e.stateNode;if(a===null)return null;var l=a[ge]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),En=!1;if(kn)try{var as={};Object.defineProperty(as,"passive",{get:function(){En=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{En=!1}var Zn=null,nr=null,wi=null;function Eo(){if(wi)return wi;var e,i=nr,a=i.length,l,h="value"in Zn?Zn.value:Zn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return wi=h.slice(e,1<l?1-l:void 0)}function Wn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function Ao(){return!1}function Ce(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Jn:Ao,this.isPropagationStopped=Ao,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),i}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Ce(Gt),os=E({},Gt,{view:0,detail:0}),nu=Ce(os),Js,ta,ti,ls=E({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(Js=e.screenX-ti.screenX,ta=e.screenY-ti.screenY):ta=Js=0,ti=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:ta}}),An=Ce(ls),iu=E({},ls,{dataTransfer:0}),Ch=Ce(iu),us=E({},os,{relatedTarget:0}),ea=Ce(us),bo=E({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),na=Ce(bo),ru=E({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ia=Ce(ru),Dh=E({},Gt,{data:0}),So=Ce(Dh),cs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},su={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=au[e])?!!i[e]:!1}function hs(){return wo}var ou=E({},os,{key:function(e){if(e.key){var i=cs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?su[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hs,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ra=Ce(ou),lu=E({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ro=Ce(lu),Ri=E({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hs}),uu=Ce(Ri),cu=E({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),hu=Ce(cu),fu=E({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sa=Ce(fu),Ze=E({},Gt,{newState:0,oldState:0}),du=Ce(Ze),mu=[9,13,27,32],ei=kn&&"CompositionEvent"in window,c=null;kn&&"documentMode"in document&&(c=document.documentMode);var m=kn&&"TextEvent"in window&&!c,_=kn&&(!ei||c&&8<c&&11>=c),A=" ",P=!1;function H(e,i){switch(e){case"keyup":return mu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function Ae(e,i){switch(e){case"compositionend":return rt(i);case"keypress":return i.which!==32?null:(P=!0,A);case"textInput":return e=i.data,e===A&&P?null:e;default:return null}}function zt(e,i){if(Lt)return e==="compositionend"||!ei&&H(e,i)?(e=Eo(),wi=nr=Zn=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var De={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function be(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!De[e.type]:i==="textarea"}function Ii(e,i,a,l){bi?Si?Si.push(l):Si=[l]:bi=l,i=tc(i,"onChange"),0<i.length&&(a=new Ws("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var ke=null,ni=null;function Io(e){Hy(e,0)}function gu(e){var i=Yn(e);if(yo(i))return e}function cg(e,i){if(e==="change")return i}var hg=!1;if(kn){var Nh;if(kn){var Oh="oninput"in document;if(!Oh){var fg=document.createElement("div");fg.setAttribute("oninput","return;"),Oh=typeof fg.oninput=="function"}Nh=Oh}else Nh=!1;hg=Nh&&(!document.documentMode||9<document.documentMode)}function dg(){ke&&(ke.detachEvent("onpropertychange",mg),ni=ke=null)}function mg(e){if(e.propertyName==="value"&&gu(ni)){var i=[];Ii(i,ni,e,Tn(e)),eu(Io,i)}}function pA(e,i,a){e==="focusin"?(dg(),ke=i,ni=a,ke.attachEvent("onpropertychange",mg)):e==="focusout"&&dg()}function yA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gu(ni)}function _A(e,i){if(e==="click")return gu(i)}function vA(e,i){if(e==="input"||e==="change")return gu(i)}function TA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var un=typeof Object.is=="function"?Object.is:TA;function Co(e,i){if(un(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Fr.call(i,h)||!un(e[h],i[h]))return!1}return!0}function gg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pg(e,i){var a=gg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gg(a)}}function yg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?yg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function _g(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=es(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=es(e.document)}return i}function xh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var EA=kn&&"documentMode"in document&&11>=document.documentMode,aa=null,Mh=null,Do=null,Vh=!1;function vg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vh||aa==null||aa!==es(l)||(l=aa,"selectionStart"in l&&xh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Do&&Co(Do,l)||(Do=l,l=tc(Mh,"onSelect"),0<l.length&&(i=new Ws("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=aa)))}function fs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var oa={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},kh={},Tg={};kn&&(Tg=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function ds(e){if(kh[e])return kh[e];if(!oa[e])return e;var i=oa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Tg)return kh[e]=i[a];return e}var Eg=ds("animationend"),Ag=ds("animationiteration"),bg=ds("animationstart"),AA=ds("transitionrun"),bA=ds("transitionstart"),SA=ds("transitioncancel"),Sg=ds("transitionend"),wg=new Map,Ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ph.push("scrollEnd");function Pn(e,i){wg.set(e,i),Vn(i,[e])}var Rg=new WeakMap;function bn(e,i){if(typeof e=="object"&&e!==null){var a=Rg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Xs(i)},Rg.set(e,i),i)}return{value:e,source:i,stack:Xs(i)}}var Sn=[],la=0,Uh=0;function pu(){for(var e=la,i=Uh=la=0;i<e;){var a=Sn[i];Sn[i++]=null;var l=Sn[i];Sn[i++]=null;var h=Sn[i];Sn[i++]=null;var d=Sn[i];if(Sn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Ig(a,h,d)}}function yu(e,i,a,l){Sn[la++]=e,Sn[la++]=i,Sn[la++]=a,Sn[la++]=l,Uh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Lh(e,i,a,l){return yu(e,i,a,l),_u(e)}function ua(e,i){return yu(e,null,null,i),_u(e)}function Ig(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-qe(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function _u(e){if(50<tl)throw tl=0,Gf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ca={};function wA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,i,a,l){return new wA(e,i,a,l)}function zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,i){var a=e.alternate;return a===null?(a=cn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function vu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")zh(e)&&(v=1);else if(typeof e=="string")v=Ib(e,a,ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=cn(31,a,i,h),e.elementType=I,e.lanes=d,e;case Q:return ms(a.children,h,d,i);case W:v=8,h|=24;break;case et:return e=cn(12,a,i,h|2),e.elementType=et,e.lanes=d,e;case ut:return e=cn(13,a,i,h),e.elementType=ut,e.lanes=d,e;case Ct:return e=cn(19,a,i,h),e.elementType=Ct,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pt:case ct:v=10;break t;case dt:v=9;break t;case Rt:v=11;break t;case O:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=cn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function ms(e,i,a,l){return e=cn(7,e,l,i),e.lanes=a,e}function jh(e,i,a){return e=cn(6,e,null,i),e.lanes=a,e}function Bh(e,i,a){return i=cn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ha=[],fa=0,Tu=null,Eu=0,wn=[],Rn=0,gs=null,Di=1,Ni="";function ps(e,i){ha[fa++]=Eu,ha[fa++]=Tu,Tu=e,Eu=i}function Dg(e,i,a){wn[Rn++]=Di,wn[Rn++]=Ni,wn[Rn++]=gs,gs=e;var l=Di;e=Ni;var h=32-qe(l)-1;l&=~(1<<h),a+=1;var d=32-qe(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Di=1<<32-qe(i)+h|a<<h|l,Ni=d+e}else Di=1<<d|a<<h|l,Ni=e}function qh(e){e.return!==null&&(ps(e,1),Dg(e,1,0))}function Hh(e){for(;e===Tu;)Tu=ha[--fa],ha[fa]=null,Eu=ha[--fa],ha[fa]=null;for(;e===gs;)gs=wn[--Rn],wn[Rn]=null,Ni=wn[--Rn],wn[Rn]=null,Di=wn[--Rn],wn[Rn]=null}var We=null,ue=null,Ft=!1,ys=null,ii=!1,Fh=Error(s(519));function _s(e){var i=Error(s(418,""));throw xo(bn(i,e)),Fh}function Ng(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Ee]=e,i[ge]=l,a){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(a=0;a<nl.length;a++)Vt(nl[a],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":Vt("invalid",i),ns(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),$s(i);break;case"select":Vt("invalid",i);break;case"textarea":Vt("invalid",i),is(i,l.value,l.defaultValue,l.children),$s(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Ky(i.textContent,a)?(l.popover!=null&&(Vt("beforetoggle",i),Vt("toggle",i)),l.onScroll!=null&&Vt("scroll",i),l.onScrollEnd!=null&&Vt("scrollend",i),l.onClick!=null&&(i.onclick=ec),i=!0):i=!1,i||_s(e)}function Og(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:We=We.return}}function No(e){if(e!==We)return!1;if(!Ft)return Og(e),Ft=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||od(e.type,e.memoizedProps)),a=!a),a&&ue&&_s(e),Og(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){ue=Ln(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}ue=null}}else i===27?(i=ue,_r(e.type)?(e=hd,hd=null,ue=e):ue=i):ue=We?Ln(e.stateNode.nextSibling):null;return!0}function Oo(){ue=We=null,Ft=!1}function xg(){var e=ys;return e!==null&&(nn===null?nn=e:nn.push.apply(nn,e),ys=null),e}function xo(e){ys===null?ys=[e]:ys.push(e)}var Gh=G(null),vs=null,Oi=null;function ir(e,i,a){J(Gh,i._currentValue),i._currentValue=a}function xi(e){e._currentValue=Gh.current,nt(Gh)}function Qh(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function Kh(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var R=0;R<i.length;R++)if(T.context===i[R]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Qh(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Qh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Mo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;un(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===te.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}h=h.return}e!==null&&Kh(i,e,a,l),i.flags|=262144}function Au(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ts(e){vs=e,Oi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function He(e){return Mg(vs,e)}function bu(e,i){return vs===null&&Ts(e),Mg(e,i)}function Mg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Oi===null){if(e===null)throw Error(s(308));Oi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Oi=Oi.next=i;return a}var RA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},IA=r.unstable_scheduleCallback,CA=r.unstable_NormalPriority,Se={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yh(){return{controller:new RA,data:new Map,refCount:0}}function Vo(e){e.refCount--,e.refCount===0&&IA(CA,function(){e.controller.abort()})}var ko=null,Xh=0,da=0,ma=null;function DA(e,i){if(ko===null){var a=ko=[];Xh=0,da=Wf(),ma={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Xh++,i.then(Vg,Vg),i}function Vg(){if(--Xh===0&&ko!==null){ma!==null&&(ma.status="fulfilled");var e=ko;ko=null,da=0,ma=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function NA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var kg=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&DA(e,i),kg!==null&&kg(e,i)};var Es=G(null);function $h(){var e=Es.current;return e!==null?e:ne.pooledCache}function Su(e,i){i===null?J(Es,Es.current):J(Es,i.pool)}function Pg(){var e=$h();return e===null?null:{parent:Se._currentValue,pool:e}}var Po=Error(s(460)),Ug=Error(s(474)),wu=Error(s(542)),Zh={then:function(){}};function Lg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ru(){}function zg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Ru,Ru),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Bg(e),e;default:if(typeof i.status=="string")i.then(Ru,Ru);else{if(e=ne,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Bg(e),e}throw Uo=i,Po}}var Uo=null;function jg(){if(Uo===null)throw Error(s(459));var e=Uo;return Uo=null,e}function Bg(e){if(e===Po||e===wu)throw Error(s(483))}var rr=!1;function Wh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ar(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Yt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=_u(e),Ig(e,null,a),i}return yu(e,l,i,a),_u(e)}function Lo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,ho(e,a)}}function tf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var ef=!1;function zo(){if(ef){var e=ma;if(e!==null)throw e}}function jo(e,i,a,l){ef=!1;var h=e.updateQueue;rr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var R=T,L=R.next;R.next=null,v===null?d=L:v.next=L,v=R;var K=e.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==v&&(T===null?K.firstBaseUpdate=L:T.next=L,K.lastBaseUpdate=R))}if(d!==null){var X=h.baseState;v=0,K=L=R=null,T=d;do{var z=T.lane&-536870913,j=z!==T.lane;if(j?(jt&z)===z:(l&z)===z){z!==0&&z===da&&(ef=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Et=e,yt=T;z=i;var Jt=a;switch(yt.tag){case 1:if(Et=yt.payload,typeof Et=="function"){X=Et.call(Jt,X,z);break t}X=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=yt.payload,z=typeof Et=="function"?Et.call(Jt,X,z):Et,z==null)break t;X=E({},X,z);break t;case 2:rr=!0}}z=T.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(L=K=j,R=X):K=K.next=j,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;j=T,T=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);K===null&&(R=X),h.baseState=R,h.firstBaseUpdate=L,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),mr|=v,e.lanes=v,e.memoizedState=X}}function qg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Hg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qg(a[e],i)}var ga=G(null),Iu=G(0);function Fg(e,i){e=zi,J(Iu,e),J(ga,i),zi=e|i.baseLanes}function nf(){J(Iu,zi),J(ga,ga.current)}function rf(){zi=Iu.current,nt(ga),nt(Iu)}var or=0,Nt=null,Zt=null,ye=null,Cu=!1,pa=!1,As=!1,Du=0,Bo=0,ya=null,OA=0;function fe(){throw Error(s(321))}function sf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!un(e[a],i[a]))return!1;return!0}function af(e,i,a,l,h,d){return or=d,Nt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Ip:Cp,As=!1,d=a(l,h),As=!1,pa&&(d=Qg(i,a,l,h)),Gg(e),d}function Gg(e){F.H=ku;var i=Zt!==null&&Zt.next!==null;if(or=0,ye=Zt=Nt=null,Cu=!1,Bo=0,ya=null,i)throw Error(s(300));e===null||Ne||(e=e.dependencies,e!==null&&Au(e)&&(Ne=!0))}function Qg(e,i,a,l){Nt=e;var h=0;do{if(pa&&(ya=null),Bo=0,pa=!1,25<=h)throw Error(s(301));if(h+=1,ye=Zt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=LA,d=i(a,l)}while(pa);return d}function xA(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?qo(i):i,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(Nt.flags|=1024),i}function of(){var e=Du!==0;return Du=0,e}function lf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function uf(e){if(Cu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Cu=!1}or=0,ye=Zt=Nt=null,pa=!1,Bo=Du=0,ya=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?Nt.memoizedState=ye=e:ye=ye.next=e,ye}function _e(){if(Zt===null){var e=Nt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var i=ye===null?Nt.memoizedState:ye.next;if(i!==null)ye=i,Zt=e;else{if(e===null)throw Nt.alternate===null?Error(s(467)):Error(s(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},ye===null?Nt.memoizedState=ye=e:ye=ye.next=e}return ye}function cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(e){var i=Bo;return Bo+=1,ya===null&&(ya=[]),e=zg(ya,e,i),i=Nt,(ye===null?i.memoizedState:ye.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Ip:Cp),e}function Nu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qo(e);if(e.$$typeof===ct)return He(e)}throw Error(s(438,String(e)))}function hf(e){var i=null,a=Nt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Nt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=cf(),Nt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=x;return i.index++,a}function Mi(e,i){return typeof i=="function"?i(e):i}function Ou(e){var i=_e();return ff(i,Zt,e)}function ff(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,R=null,L=i,K=!1;do{var X=L.lane&-536870913;if(X!==L.lane?(jt&X)===X:(or&X)===X){var z=L.revertLane;if(z===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),X===da&&(K=!0);else if((or&z)===z){L=L.next,z===da&&(K=!0);continue}else X={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(T=R=X,v=d):R=R.next=X,Nt.lanes|=z,mr|=z;X=L.action,As&&a(d,X),d=L.hasEagerState?L.eagerState:a(d,X)}else z={lane:X,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(T=R=z,v=d):R=R.next=z,Nt.lanes|=X,mr|=X;L=L.next}while(L!==null&&L!==i);if(R===null?v=d:R.next=T,!un(d,e.memoizedState)&&(Ne=!0,K&&(a=ma,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function df(e){var i=_e(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);un(d,i.memoizedState)||(Ne=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Kg(e,i,a){var l=Nt,h=_e(),d=Ft;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!un((Zt||h).memoizedState,a);v&&(h.memoizedState=a,Ne=!0),h=h.queue;var T=$g.bind(null,l,h,e);if(Ho(2048,8,T,[e]),h.getSnapshot!==i||v||ye!==null&&ye.memoizedState.tag&1){if(l.flags|=2048,_a(9,xu(),Xg.bind(null,l,h,a,i),null),ne===null)throw Error(s(349));d||(or&124)!==0||Yg(l,i,a)}return a}function Yg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Nt.updateQueue,i===null?(i=cf(),Nt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Xg(e,i,a,l){i.value=a,i.getSnapshot=l,Zg(i)&&Wg(e)}function $g(e,i,a){return a(function(){Zg(i)&&Wg(e)})}function Zg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!un(e,a)}catch{return!0}}function Wg(e){var i=ua(e,2);i!==null&&gn(i,e,2)}function mf(e){var i=tn();if(typeof e=="function"){var a=e;if(e=a(),As){on(!0);try{a()}finally{on(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},i}function Jg(e,i,a,l){return e.baseState=a,ff(e,Zt,typeof l=="function"?l:Mi)}function MA(e,i,a,l,h){if(Vu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,tp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function tp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var T=a(h,l),R=F.S;R!==null&&R(v,T),ep(e,i,T)}catch(L){gf(e,i,L)}finally{F.T=d}}else try{d=a(h,l),ep(e,i,d)}catch(L){gf(e,i,L)}}function ep(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){np(e,i,l)},function(l){return gf(e,i,l)}):np(e,i,a)}function np(e,i,a){i.status="fulfilled",i.value=a,ip(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,tp(e,a)))}function gf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,ip(i),i=i.next;while(i!==l)}e.action=null}function ip(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function rp(e,i){return i}function sp(e,i){if(Ft){var a=ne.formState;if(a!==null){t:{var l=Nt;if(Ft){if(ue){e:{for(var h=ue,d=ii;h.nodeType!==8;){if(!d){h=null;break e}if(h=Ln(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ue=Ln(h.nextSibling),l=h.data==="F!";break t}}_s(l)}l=!1}l&&(i=a[0])}}return a=tn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rp,lastRenderedState:i},a.queue=l,a=Sp.bind(null,Nt,l),l.dispatch=a,l=mf(!1),d=Tf.bind(null,Nt,!1,l.queue),l=tn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=MA.bind(null,Nt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function ap(e){var i=_e();return op(i,Zt,e)}function op(e,i,a){if(i=ff(e,i,rp)[0],e=Ou(Mi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=qo(i)}catch(v){throw v===Po?wu:v}else l=i;i=_e();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Nt.flags|=2048,_a(9,xu(),VA.bind(null,h,a),null)),[l,d,e]}function VA(e,i){e.action=i}function lp(e){var i=_e(),a=Zt;if(a!==null)return op(i,a,e);_e(),i=i.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function _a(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Nt.updateQueue,i===null&&(i=cf(),Nt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function xu(){return{destroy:void 0,resource:void 0}}function up(){return _e().memoizedState}function Mu(e,i,a,l){var h=tn();l=l===void 0?null:l,Nt.flags|=e,h.memoizedState=_a(1|i,xu(),a,l)}function Ho(e,i,a,l){var h=_e();l=l===void 0?null:l;var d=h.memoizedState.inst;Zt!==null&&l!==null&&sf(l,Zt.memoizedState.deps)?h.memoizedState=_a(i,d,a,l):(Nt.flags|=e,h.memoizedState=_a(1|i,d,a,l))}function cp(e,i){Mu(8390656,8,e,i)}function hp(e,i){Ho(2048,8,e,i)}function fp(e,i){return Ho(4,2,e,i)}function dp(e,i){return Ho(4,4,e,i)}function mp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function gp(e,i,a){a=a!=null?a.concat([e]):null,Ho(4,4,mp.bind(null,i,e),a)}function pf(){}function pp(e,i){var a=_e();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&sf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function yp(e,i){var a=_e();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&sf(i,l[1]))return l[0];if(l=e(),As){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l}function yf(e,i,a){return a===void 0||(or&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Ty(),Nt.lanes|=e,mr|=e,a)}function _p(e,i,a,l){return un(a,i)?a:ga.current!==null?(e=yf(e,a,l),un(e,i)||(Ne=!0),e):(or&42)===0?(Ne=!0,e.memoizedState=a):(e=Ty(),Nt.lanes|=e,mr|=e,i)}function vp(e,i,a,l,h){var d=st.p;st.p=d!==0&&8>d?d:8;var v=F.T,T={};F.T=T,Tf(e,!1,i,a);try{var R=h(),L=F.S;if(L!==null&&L(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=NA(R,l);Fo(e,i,K,mn(e))}else Fo(e,i,l,mn(e))}catch(X){Fo(e,i,{then:function(){},status:"rejected",reason:X},mn())}finally{st.p=d,F.T=v}}function kA(){}function _f(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Tp(e).queue;vp(e,h,i,Z,a===null?kA:function(){return Ep(e),a(l)})}function Tp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:Z},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Ep(e){var i=Tp(e).next.queue;Fo(e,i,{},mn())}function vf(){return He(ll)}function Ap(){return _e().memoizedState}function bp(){return _e().memoizedState}function PA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=mn();e=sr(a);var l=ar(i,e,a);l!==null&&(gn(l,i,a),Lo(l,i,a)),i={cache:Yh()},e.payload=i;return}i=i.return}}function UA(e,i,a){var l=mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Vu(e)?wp(i,a):(a=Lh(e,i,a,l),a!==null&&(gn(a,e,l),Rp(a,i,l)))}function Sp(e,i,a){var l=mn();Fo(e,i,a,l)}function Fo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))wp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,un(T,v))return yu(e,i,h,0),ne===null&&pu(),!1}catch{}finally{}if(a=Lh(e,i,h,l),a!==null)return gn(a,e,l),Rp(a,i,l),!0}return!1}function Tf(e,i,a,l){if(l={lane:2,revertLane:Wf(),action:l,hasEagerState:!1,eagerState:null,next:null},Vu(e)){if(i)throw Error(s(479))}else i=Lh(e,a,l,2),i!==null&&gn(i,e,2)}function Vu(e){var i=e.alternate;return e===Nt||i!==null&&i===Nt}function wp(e,i){pa=Cu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Rp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,ho(e,a)}}var ku={readContext:He,use:Nu,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe},Ip={readContext:He,use:Nu,useCallback:function(e,i){return tn().memoizedState=[e,i===void 0?null:i],e},useContext:He,useEffect:cp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Mu(4194308,4,mp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Mu(4194308,4,e,i)},useInsertionEffect:function(e,i){Mu(4,2,e,i)},useMemo:function(e,i){var a=tn();i=i===void 0?null:i;var l=e();if(As){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=tn();if(a!==void 0){var h=a(i);if(As){on(!0);try{a(i)}finally{on(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=UA.bind(null,Nt,e),[l.memoizedState,e]},useRef:function(e){var i=tn();return e={current:e},i.memoizedState=e},useState:function(e){e=mf(e);var i=e.queue,a=Sp.bind(null,Nt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(e,i){var a=tn();return yf(a,e,i)},useTransition:function(){var e=mf(!1);return e=vp.bind(null,Nt,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Nt,h=tn();if(Ft){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ne===null)throw Error(s(349));(jt&124)!==0||Yg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,cp($g.bind(null,l,d,e),[e]),l.flags|=2048,_a(9,xu(),Xg.bind(null,l,d,a,i),null),a},useId:function(){var e=tn(),i=ne.identifierPrefix;if(Ft){var a=Ni,l=Di;a=(l&~(1<<32-qe(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Du++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=OA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:vf,useFormState:sp,useActionState:sp,useOptimistic:function(e){var i=tn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Tf.bind(null,Nt,!0,a),a.dispatch=i,[e,i]},useMemoCache:hf,useCacheRefresh:function(){return tn().memoizedState=PA.bind(null,Nt)}},Cp={readContext:He,use:Nu,useCallback:pp,useContext:He,useEffect:hp,useImperativeHandle:gp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:yp,useReducer:Ou,useRef:up,useState:function(){return Ou(Mi)},useDebugValue:pf,useDeferredValue:function(e,i){var a=_e();return _p(a,Zt.memoizedState,e,i)},useTransition:function(){var e=Ou(Mi)[0],i=_e().memoizedState;return[typeof e=="boolean"?e:qo(e),i]},useSyncExternalStore:Kg,useId:Ap,useHostTransitionStatus:vf,useFormState:ap,useActionState:ap,useOptimistic:function(e,i){var a=_e();return Jg(a,Zt,e,i)},useMemoCache:hf,useCacheRefresh:bp},LA={readContext:He,use:Nu,useCallback:pp,useContext:He,useEffect:hp,useImperativeHandle:gp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:yp,useReducer:df,useRef:up,useState:function(){return df(Mi)},useDebugValue:pf,useDeferredValue:function(e,i){var a=_e();return Zt===null?yf(a,e,i):_p(a,Zt.memoizedState,e,i)},useTransition:function(){var e=df(Mi)[0],i=_e().memoizedState;return[typeof e=="boolean"?e:qo(e),i]},useSyncExternalStore:Kg,useId:Ap,useHostTransitionStatus:vf,useFormState:lp,useActionState:lp,useOptimistic:function(e,i){var a=_e();return Zt!==null?Jg(a,Zt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:bp},va=null,Go=0;function Pu(e){var i=Go;return Go+=1,va===null&&(va=[]),zg(va,e,i)}function Qo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Uu(e,i){throw i.$$typeof===w?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Dp(e){var i=e._init;return i(e._payload)}function Np(e){function i(k,N){if(e){var U=k.deletions;U===null?(k.deletions=[N],k.flags|=16):U.push(N)}}function a(k,N){if(!e)return null;for(;N!==null;)i(k,N),N=N.sibling;return null}function l(k){for(var N=new Map;k!==null;)k.key!==null?N.set(k.key,k):N.set(k.index,k),k=k.sibling;return N}function h(k,N){return k=Ci(k,N),k.index=0,k.sibling=null,k}function d(k,N,U){return k.index=U,e?(U=k.alternate,U!==null?(U=U.index,U<N?(k.flags|=67108866,N):U):(k.flags|=67108866,N)):(k.flags|=1048576,N)}function v(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function T(k,N,U,Y){return N===null||N.tag!==6?(N=jh(U,k.mode,Y),N.return=k,N):(N=h(N,U),N.return=k,N)}function R(k,N,U,Y){var ht=U.type;return ht===Q?K(k,N,U.props.children,Y,U.key):N!==null&&(N.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===S&&Dp(ht)===N.type)?(N=h(N,U.props),Qo(N,U),N.return=k,N):(N=vu(U.type,U.key,U.props,null,k.mode,Y),Qo(N,U),N.return=k,N)}function L(k,N,U,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=Bh(U,k.mode,Y),N.return=k,N):(N=h(N,U.children||[]),N.return=k,N)}function K(k,N,U,Y,ht){return N===null||N.tag!==7?(N=ms(U,k.mode,Y,ht),N.return=k,N):(N=h(N,U),N.return=k,N)}function X(k,N,U){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=jh(""+N,k.mode,U),N.return=k,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case D:return U=vu(N.type,N.key,N.props,null,k.mode,U),Qo(U,N),U.return=k,U;case B:return N=Bh(N,k.mode,U),N.return=k,N;case S:var Y=N._init;return N=Y(N._payload),X(k,N,U)}if(bt(N)||V(N))return N=ms(N,k.mode,U,null),N.return=k,N;if(typeof N.then=="function")return X(k,Pu(N),U);if(N.$$typeof===ct)return X(k,bu(k,N),U);Uu(k,N)}return null}function z(k,N,U,Y){var ht=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ht!==null?null:T(k,N,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case D:return U.key===ht?R(k,N,U,Y):null;case B:return U.key===ht?L(k,N,U,Y):null;case S:return ht=U._init,U=ht(U._payload),z(k,N,U,Y)}if(bt(U)||V(U))return ht!==null?null:K(k,N,U,Y,null);if(typeof U.then=="function")return z(k,N,Pu(U),Y);if(U.$$typeof===ct)return z(k,N,bu(k,U),Y);Uu(k,U)}return null}function j(k,N,U,Y,ht){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return k=k.get(U)||null,T(N,k,""+Y,ht);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case D:return k=k.get(Y.key===null?U:Y.key)||null,R(N,k,Y,ht);case B:return k=k.get(Y.key===null?U:Y.key)||null,L(N,k,Y,ht);case S:var xt=Y._init;return Y=xt(Y._payload),j(k,N,U,Y,ht)}if(bt(Y)||V(Y))return k=k.get(U)||null,K(N,k,Y,ht,null);if(typeof Y.then=="function")return j(k,N,U,Pu(Y),ht);if(Y.$$typeof===ct)return j(k,N,U,bu(N,Y),ht);Uu(N,Y)}return null}function Et(k,N,U,Y){for(var ht=null,xt=null,mt=N,_t=N=0,xe=null;mt!==null&&_t<U.length;_t++){mt.index>_t?(xe=mt,mt=null):xe=mt.sibling;var qt=z(k,mt,U[_t],Y);if(qt===null){mt===null&&(mt=xe);break}e&&mt&&qt.alternate===null&&i(k,mt),N=d(qt,N,_t),xt===null?ht=qt:xt.sibling=qt,xt=qt,mt=xe}if(_t===U.length)return a(k,mt),Ft&&ps(k,_t),ht;if(mt===null){for(;_t<U.length;_t++)mt=X(k,U[_t],Y),mt!==null&&(N=d(mt,N,_t),xt===null?ht=mt:xt.sibling=mt,xt=mt);return Ft&&ps(k,_t),ht}for(mt=l(mt);_t<U.length;_t++)xe=j(mt,k,_t,U[_t],Y),xe!==null&&(e&&xe.alternate!==null&&mt.delete(xe.key===null?_t:xe.key),N=d(xe,N,_t),xt===null?ht=xe:xt.sibling=xe,xt=xe);return e&&mt.forEach(function(br){return i(k,br)}),Ft&&ps(k,_t),ht}function yt(k,N,U,Y){if(U==null)throw Error(s(151));for(var ht=null,xt=null,mt=N,_t=N=0,xe=null,qt=U.next();mt!==null&&!qt.done;_t++,qt=U.next()){mt.index>_t?(xe=mt,mt=null):xe=mt.sibling;var br=z(k,mt,qt.value,Y);if(br===null){mt===null&&(mt=xe);break}e&&mt&&br.alternate===null&&i(k,mt),N=d(br,N,_t),xt===null?ht=br:xt.sibling=br,xt=br,mt=xe}if(qt.done)return a(k,mt),Ft&&ps(k,_t),ht;if(mt===null){for(;!qt.done;_t++,qt=U.next())qt=X(k,qt.value,Y),qt!==null&&(N=d(qt,N,_t),xt===null?ht=qt:xt.sibling=qt,xt=qt);return Ft&&ps(k,_t),ht}for(mt=l(mt);!qt.done;_t++,qt=U.next())qt=j(mt,k,_t,qt.value,Y),qt!==null&&(e&&qt.alternate!==null&&mt.delete(qt.key===null?_t:qt.key),N=d(qt,N,_t),xt===null?ht=qt:xt.sibling=qt,xt=qt);return e&&mt.forEach(function(zb){return i(k,zb)}),Ft&&ps(k,_t),ht}function Jt(k,N,U,Y){if(typeof U=="object"&&U!==null&&U.type===Q&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case D:t:{for(var ht=U.key;N!==null;){if(N.key===ht){if(ht=U.type,ht===Q){if(N.tag===7){a(k,N.sibling),Y=h(N,U.props.children),Y.return=k,k=Y;break t}}else if(N.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===S&&Dp(ht)===N.type){a(k,N.sibling),Y=h(N,U.props),Qo(Y,U),Y.return=k,k=Y;break t}a(k,N);break}else i(k,N);N=N.sibling}U.type===Q?(Y=ms(U.props.children,k.mode,Y,U.key),Y.return=k,k=Y):(Y=vu(U.type,U.key,U.props,null,k.mode,Y),Qo(Y,U),Y.return=k,k=Y)}return v(k);case B:t:{for(ht=U.key;N!==null;){if(N.key===ht)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(k,N.sibling),Y=h(N,U.children||[]),Y.return=k,k=Y;break t}else{a(k,N);break}else i(k,N);N=N.sibling}Y=Bh(U,k.mode,Y),Y.return=k,k=Y}return v(k);case S:return ht=U._init,U=ht(U._payload),Jt(k,N,U,Y)}if(bt(U))return Et(k,N,U,Y);if(V(U)){if(ht=V(U),typeof ht!="function")throw Error(s(150));return U=ht.call(U),yt(k,N,U,Y)}if(typeof U.then=="function")return Jt(k,N,Pu(U),Y);if(U.$$typeof===ct)return Jt(k,N,bu(k,U),Y);Uu(k,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,N!==null&&N.tag===6?(a(k,N.sibling),Y=h(N,U),Y.return=k,k=Y):(a(k,N),Y=jh(U,k.mode,Y),Y.return=k,k=Y),v(k)):a(k,N)}return function(k,N,U,Y){try{Go=0;var ht=Jt(k,N,U,Y);return va=null,ht}catch(mt){if(mt===Po||mt===wu)throw mt;var xt=cn(29,mt,null,k.mode);return xt.lanes=Y,xt.return=k,xt}finally{}}}var Ta=Np(!0),Op=Np(!1),In=G(null),ri=null;function lr(e){var i=e.alternate;J(we,we.current&1),J(In,e),ri===null&&(i===null||ga.current!==null||i.memoizedState!==null)&&(ri=e)}function xp(e){if(e.tag===22){if(J(we,we.current),J(In,e),ri===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ri=e)}}else ur()}function ur(){J(we,we.current),J(In,In.current)}function Vi(e){nt(In),ri===e&&(ri=null),nt(we)}var we=G(0);function Lu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||cd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Ef(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Af={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=mn(),h=sr(l);h.payload=i,a!=null&&(h.callback=a),i=ar(e,h,l),i!==null&&(gn(i,e,l),Lo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=mn(),h=sr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=ar(e,h,l),i!==null&&(gn(i,e,l),Lo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=mn(),l=sr(a);l.tag=2,i!=null&&(l.callback=i),i=ar(e,l,a),i!==null&&(gn(i,e,a),Lo(i,e,a))}};function Mp(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Co(a,l)||!Co(h,d):!0}function Vp(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Af.enqueueReplaceState(i,i.state,null)}function bs(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var zu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function kp(e){zu(e)}function Pp(e){console.error(e)}function Up(e){zu(e)}function ju(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Lp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function bf(e,i,a){return a=sr(a),a.tag=3,a.payload={element:null},a.callback=function(){ju(e,i)},a}function zp(e){return e=sr(e),e.tag=3,e}function jp(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Lp(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Lp(i,a,l),typeof h!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function zA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Mo(i,a,h,!0),a=In.current,a!==null){switch(a.tag){case 13:return ri===null?Kf():a.alternate===null&&ce===0&&(ce=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Zh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Xf(e,l,h)),!1;case 22:return a.flags|=65536,l===Zh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Xf(e,l,h)),!1}throw Error(s(435,a.tag))}return Xf(e,l,h),Kf(),!1}if(Ft)return i=In.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Fh&&(e=Error(s(422),{cause:l}),xo(bn(e,a)))):(l!==Fh&&(i=Error(s(423),{cause:l}),xo(bn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=bn(l,a),h=bf(e.stateNode,l,h),tf(e,h),ce!==4&&(ce=2)),!1;var d=Error(s(520),{cause:l});if(d=bn(d,a),Jo===null?Jo=[d]:Jo.push(d),ce!==4&&(ce=2),i===null)return!0;l=bn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=bf(a.stateNode,l,e),tf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gr===null||!gr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=zp(h),jp(h,e,a,l),tf(a,h),!1}a=a.return}while(a!==null);return!1}var Bp=Error(s(461)),Ne=!1;function Pe(e,i,a,l){i.child=e===null?Op(i,null,a,l):Ta(i,e.child,a,l)}function qp(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ts(i),l=af(e,i,a,v,d,h),T=of(),e!==null&&!Ne?(lf(e,i,h),ki(e,i,h)):(Ft&&T&&qh(i),i.flags|=1,Pe(e,i,l,h),i.child)}function Hp(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!zh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Fp(e,i,d,l,h)):(e=vu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Of(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(v,l)&&e.ref===i.ref)return ki(e,i,h)}return i.flags|=1,e=Ci(d,l),e.ref=i.ref,e.return=i,i.child=e}function Fp(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Co(d,l)&&e.ref===i.ref)if(Ne=!1,i.pendingProps=l=d,Of(e,h))(e.flags&131072)!==0&&(Ne=!0);else return i.lanes=e.lanes,ki(e,i,h)}return Sf(e,i,a,l,h)}function Gp(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Qp(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Su(i,d!==null?d.cachePool:null),d!==null?Fg(i,d):nf(),xp(i);else return i.lanes=i.childLanes=536870912,Qp(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Su(i,d.cachePool),Fg(i,d),ur(),i.memoizedState=null):(e!==null&&Su(i,null),nf(),ur());return Pe(e,i,h,a),i.child}function Qp(e,i,a,l){var h=$h();return h=h===null?null:{parent:Se._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Su(i,null),nf(),xp(i),e!==null&&Mo(e,i,l,!0),null}function Bu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Sf(e,i,a,l,h){return Ts(i),a=af(e,i,a,l,void 0,h),l=of(),e!==null&&!Ne?(lf(e,i,h),ki(e,i,h)):(Ft&&l&&qh(i),i.flags|=1,Pe(e,i,a,h),i.child)}function Kp(e,i,a,l,h,d){return Ts(i),i.updateQueue=null,a=Qg(i,l,a,h),Gg(e),l=of(),e!==null&&!Ne?(lf(e,i,d),ki(e,i,d)):(Ft&&l&&qh(i),i.flags|=1,Pe(e,i,a,d),i.child)}function Yp(e,i,a,l,h){if(Ts(i),i.stateNode===null){var d=ca,v=a.contextType;typeof v=="object"&&v!==null&&(d=He(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Af,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Wh(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?He(v):ca,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ef(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Af.enqueueReplaceState(d,d.state,null),jo(i,l,d,h),zo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,R=bs(a,T);d.props=R;var L=d.context,K=a.contextType;v=ca,typeof K=="object"&&K!==null&&(v=He(K));var X=a.getDerivedStateFromProps;K=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&Vp(i,d,l,v),rr=!1;var z=i.memoizedState;d.state=z,jo(i,l,d,h),zo(),L=i.memoizedState,T||z!==L||rr?(typeof X=="function"&&(Ef(i,a,X,l),L=i.memoizedState),(R=rr||Mp(i,a,R,l,z,L,v))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Jh(e,i),v=i.memoizedProps,K=bs(a,v),d.props=K,X=i.pendingProps,z=d.context,L=a.contextType,R=ca,typeof L=="object"&&L!==null&&(R=He(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==X||z!==R)&&Vp(i,d,l,R),rr=!1,z=i.memoizedState,d.state=z,jo(i,l,d,h),zo();var j=i.memoizedState;v!==X||z!==j||rr||e!==null&&e.dependencies!==null&&Au(e.dependencies)?(typeof T=="function"&&(Ef(i,a,T,l),j=i.memoizedState),(K=rr||Mp(i,a,K,l,z,j,R)||e!==null&&e.dependencies!==null&&Au(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=R,l=K):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Bu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ta(i,e.child,null,h),i.child=Ta(i,null,a,h)):Pe(e,i,a,h),i.memoizedState=d.state,e=i.child):e=ki(e,i,h),e}function Xp(e,i,a,l){return Oo(),i.flags|=256,Pe(e,i,a,l),i.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(e){return{baseLanes:e,cachePool:Pg()}}function If(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Cn),e}function $p(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ft){if(h?lr(i):ur(),Ft){var T=ue,R;if(R=T){t:{for(R=T,T=ii;R.nodeType!==8;){if(!T){T=null;break t}if(R=Ln(R.nextSibling),R===null){T=null;break t}}T=R}T!==null?(i.memoizedState={dehydrated:T,treeContext:gs!==null?{id:Di,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},R=cn(18,null,null,0),R.stateNode=T,R.return=i,i.child=R,We=i,ue=null,R=!0):R=!1}R||_s(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return cd(T)?i.lanes=32:i.lanes=536870912,null;Vi(i)}return T=l.children,l=l.fallback,h?(ur(),h=i.mode,T=qu({mode:"hidden",children:T},h),l=ms(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Rf(a),h.childLanes=If(e,v,a),i.memoizedState=wf,l):(lr(i),Cf(i,T))}if(R=e.memoizedState,R!==null&&(T=R.dehydrated,T!==null)){if(d)i.flags&256?(lr(i),i.flags&=-257,i=Df(e,i,a)):i.memoizedState!==null?(ur(),i.child=e.child,i.flags|=128,i=null):(ur(),h=l.fallback,T=i.mode,l=qu({mode:"visible",children:l.children},T),h=ms(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ta(i,e.child,null,a),l=i.child,l.memoizedState=Rf(a),l.childLanes=If(e,v,a),i.memoizedState=wf,i=h);else if(lr(i),cd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,xo({value:l,source:null,stack:null}),i=Df(e,i,a)}else if(Ne||Mo(e,i,a,!1),v=(a&e.childLanes)!==0,Ne||v){if(v=ne,v!==null&&(l=a&-a,l=(l&42)!==0?1:$i(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==R.retryLane))throw R.retryLane=l,ua(e,l),gn(v,e,l),Bp;T.data==="$?"||Kf(),i=Df(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=R.treeContext,ue=Ln(T.nextSibling),We=i,Ft=!0,ys=null,ii=!1,e!==null&&(wn[Rn++]=Di,wn[Rn++]=Ni,wn[Rn++]=gs,Di=e.id,Ni=e.overflow,gs=i),i=Cf(i,l.children),i.flags|=4096);return i}return h?(ur(),h=l.fallback,T=i.mode,R=e.child,L=R.sibling,l=Ci(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,L!==null?h=Ci(L,h):(h=ms(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=Rf(a):(R=T.cachePool,R!==null?(L=Se._currentValue,R=R.parent!==L?{parent:L,pool:L}:R):R=Pg(),T={baseLanes:T.baseLanes|a,cachePool:R}),h.memoizedState=T,h.childLanes=If(e,v,a),i.memoizedState=wf,l):(lr(i),a=e.child,e=a.sibling,a=Ci(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Cf(e,i){return i=qu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function qu(e,i){return e=cn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Df(e,i,a){return Ta(i,e.child,null,a),e=Cf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Zp(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Qh(e.return,i,a)}function Nf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Wp(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Pe(e,i,l.children,a),l=we.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zp(e,a,i);else if(e.tag===19)Zp(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(J(we,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Lu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Nf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Lu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Nf(i,!0,a,null,d);break;case"together":Nf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ki(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),mr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Mo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ci(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ci(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Of(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Au(e)))}function jA(e,i,a){switch(i.tag){case 3:Ht(i,i.stateNode.containerInfo),ir(i,Se,e.memoizedState.cache),Oo();break;case 27:case 5:Xi(i);break;case 4:Ht(i,i.stateNode.containerInfo);break;case 10:ir(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(lr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?$p(e,i,a):(lr(i),e=ki(e,i,a),e!==null?e.sibling:null);lr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Mo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Wp(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(we,we.current),l)break;return null;case 22:case 23:return i.lanes=0,Gp(e,i,a);case 24:ir(i,Se,e.memoizedState.cache)}return ki(e,i,a)}function Jp(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ne=!0;else{if(!Of(e,a)&&(i.flags&128)===0)return Ne=!1,jA(e,i,a);Ne=(e.flags&131072)!==0}else Ne=!1,Ft&&(i.flags&1048576)!==0&&Dg(i,Eu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")zh(l)?(e=bs(l,e),i.tag=1,i=Yp(null,i,l,e,a)):(i.tag=0,i=Sf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===Rt){i.tag=11,i=qp(null,i,l,e,a);break t}else if(h===O){i.tag=14,i=Hp(null,i,l,e,a);break t}}throw i=at(l)||l,Error(s(306,i,""))}}return i;case 0:return Sf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=bs(l,i.pendingProps),Yp(e,i,l,h,a);case 3:t:{if(Ht(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Jh(e,i),jo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,ir(i,Se,l),l!==d.cache&&Kh(i,[Se],a,!0),zo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Xp(e,i,l,a);break t}else if(l!==h){h=bn(Error(s(424)),i),xo(h),i=Xp(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ue=Ln(e.firstChild),We=i,Ft=!0,ys=null,ii=!0,a=Op(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Oo(),l===h){i=ki(e,i,a);break t}Pe(e,i,l,a)}i=i.child}return i;case 26:return Bu(e,i),e===null?(a=i_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ft||(a=i.type,e=i.pendingProps,l=nc(vt.current).createElement(a),l[Ee]=i,l[ge]=e,Le(l,a,e),he(l),i.stateNode=l):i.memoizedState=i_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Xi(i),e===null&&Ft&&(l=i.stateNode=t_(i.type,i.pendingProps,vt.current),We=i,ii=!0,h=ue,_r(i.type)?(hd=h,ue=Ln(l.firstChild)):ue=h),Pe(e,i,i.pendingProps.children,a),Bu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ft&&((h=l=ue)&&(l=mb(l,i.type,i.pendingProps,ii),l!==null?(i.stateNode=l,We=i,ue=Ln(l.firstChild),ii=!1,h=!0):h=!1),h||_s(i)),Xi(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,od(h,d)?l=null:v!==null&&od(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=af(e,i,xA,null,null,a),ll._currentValue=h),Bu(e,i),Pe(e,i,l,a),i.child;case 6:return e===null&&Ft&&((e=a=ue)&&(a=gb(a,i.pendingProps,ii),a!==null?(i.stateNode=a,We=i,ue=null,e=!0):e=!1),e||_s(i)),null;case 13:return $p(e,i,a);case 4:return Ht(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ta(i,null,l,a):Pe(e,i,l,a),i.child;case 11:return qp(e,i,i.type,i.pendingProps,a);case 7:return Pe(e,i,i.pendingProps,a),i.child;case 8:return Pe(e,i,i.pendingProps.children,a),i.child;case 12:return Pe(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ir(i,i.type,l.value),Pe(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ts(i),h=He(h),l=l(h),i.flags|=1,Pe(e,i,l,a),i.child;case 14:return Hp(e,i,i.type,i.pendingProps,a);case 15:return Fp(e,i,i.type,i.pendingProps,a);case 19:return Wp(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=qu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Ci(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Gp(e,i,a);case 24:return Ts(i),l=He(Se),e===null?(h=$h(),h===null&&(h=ne,d=Yh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Wh(i),ir(i,Se,h)):((e.lanes&a)!==0&&(Jh(e,i),jo(i,null,null,a),zo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ir(i,Se,l)):(l=d.cache,ir(i,Se,l),l!==h.cache&&Kh(i,[Se],a,!0))),Pe(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Pi(e){e.flags|=4}function ty(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l_(i)){if(i=In.current,i!==null&&((jt&4194048)===jt?ri!==null:(jt&62914560)!==jt&&(jt&536870912)===0||i!==ri))throw Uo=Zh,Ug;e.flags|=8192}}function Hu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?uo():536870912,e.lanes|=i,Sa|=i)}function Ko(e,i){if(!Ft)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ae(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function BA(e,i,a){var l=i.pendingProps;switch(Hh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(i),null;case 1:return ae(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),xi(Se),pn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(No(i)?Pi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xg())),ae(i),null;case 26:return a=i.memoizedState,e===null?(Pi(i),a!==null?(ae(i),ty(i,a)):(ae(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Pi(i),ae(i),ty(i,a)):(ae(i),i.flags&=-16777217):(e.memoizedProps!==l&&Pi(i),ae(i),i.flags&=-16777217),null;case 27:gi(i),a=vt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Pi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ae(i),null}e=ot.current,No(i)?Ng(i):(e=t_(h,l,a),i.stateNode=e,Pi(i))}return ae(i),null;case 5:if(gi(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Pi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ae(i),null}if(e=ot.current,No(i))Ng(i);else{switch(h=nc(vt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Ee]=i,e[ge]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Le(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Pi(i)}}return ae(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Pi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=vt.current,No(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=We,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Ee]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ky(e.nodeValue,a)),e||_s(i)}else e=nc(e).createTextNode(l),e[Ee]=i,i.stateNode=e}return ae(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=No(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ee]=i}else Oo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ae(i),h=!1}else h=xg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Vi(i),i):(Vi(i),null)}if(Vi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Hu(i,i.updateQueue),ae(i),null;case 4:return pn(),e===null&&nd(i.stateNode.containerInfo),ae(i),null;case 10:return xi(i.type),ae(i),null;case 19:if(nt(we),h=i.memoizedState,h===null)return ae(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Ko(h,!1);else{if(ce!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Lu(e),d!==null){for(i.flags|=128,Ko(h,!1),e=d.updateQueue,i.updateQueue=e,Hu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Cg(a,e),a=a.sibling;return J(we,we.current&1|2),i.child}e=e.sibling}h.tail!==null&&yn()>Qu&&(i.flags|=128,l=!0,Ko(h,!1),i.lanes=4194304)}else{if(!l)if(e=Lu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Hu(i,e),Ko(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ft)return ae(i),null}else 2*yn()-h.renderingStartTime>Qu&&a!==536870912&&(i.flags|=128,l=!0,Ko(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=yn(),i.sibling=null,e=we.current,J(we,l?e&1|2:e&1),i):(ae(i),null);case 22:case 23:return Vi(i),rf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ae(i),i.subtreeFlags&6&&(i.flags|=8192)):ae(i),a=i.updateQueue,a!==null&&Hu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&nt(Es),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),xi(Se),ae(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function qA(e,i){switch(Hh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return xi(Se),pn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return gi(i),null;case 13:if(Vi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Oo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(we),null;case 4:return pn(),null;case 10:return xi(i.type),null;case 22:case 23:return Vi(i),rf(),e!==null&&nt(Es),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return xi(Se),null;case 25:return null;default:return null}}function ey(e,i){switch(Hh(i),i.tag){case 3:xi(Se),pn();break;case 26:case 27:case 5:gi(i);break;case 4:pn();break;case 13:Vi(i);break;case 19:nt(we);break;case 10:xi(i.type);break;case 22:case 23:Vi(i),rf(),e!==null&&nt(Es);break;case 24:xi(Se)}}function Yo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){ee(i,i.return,T)}}function cr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var R=a,L=T;try{L()}catch(K){ee(h,R,K)}}}l=l.next}while(l!==d)}}catch(K){ee(i,i.return,K)}}function ny(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Hg(i,a)}catch(l){ee(e,e.return,l)}}}function iy(e,i,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ee(e,i,l)}}function Xo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){ee(e,i,h)}}function si(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){ee(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){ee(e,i,h)}else a.current=null}function ry(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){ee(e,e.return,h)}}function xf(e,i,a){try{var l=e.stateNode;ub(l,e.type,a,i),l[ge]=i}catch(h){ee(e,e.return,h)}}function sy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_r(e.type)||e.tag===4}function Mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||sy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_r(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ec));else if(l!==4&&(l===27&&_r(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Vf(e,i,a),e=e.sibling;e!==null;)Vf(e,i,a),e=e.sibling}function Fu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&_r(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fu(e,i,a),e=e.sibling;e!==null;)Fu(e,i,a),e=e.sibling}function ay(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Le(i,l,a),i[Ee]=e,i[ge]=a}catch(d){ee(e,e.return,d)}}var Ui=!1,de=!1,kf=!1,oy=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function HA(e,i){if(e=e.containerInfo,sd=lc,e=_g(e),xh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,R=-1,L=0,K=0,X=e,z=null;e:for(;;){for(var j;X!==a||h!==0&&X.nodeType!==3||(T=v+h),X!==d||l!==0&&X.nodeType!==3||(R=v+l),X.nodeType===3&&(v+=X.nodeValue.length),(j=X.firstChild)!==null;)z=X,X=j;for(;;){if(X===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++K===l&&(R=v),(j=X.nextSibling)!==null)break;X=z,z=X.parentNode}X=j}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(ad={focusedElem:e,selectionRange:a},lc=!1,Oe=i;Oe!==null;)if(i=Oe,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Oe=e;else for(;Oe!==null;){switch(i=Oe,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Et=bs(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(yt){ee(a,a.return,yt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)ud(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Oe=e;break}Oe=i.return}}function ly(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:hr(e,a),l&4&&Yo(5,a);break;case 1:if(hr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){ee(a,a.return,v)}else{var h=bs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ee(a,a.return,v)}}l&64&&ny(a),l&512&&Xo(a,a.return);break;case 3:if(hr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Hg(e,i)}catch(v){ee(a,a.return,v)}}break;case 27:i===null&&l&4&&ay(a);case 26:case 5:hr(e,a),i===null&&l&4&&ry(a),l&512&&Xo(a,a.return);break;case 12:hr(e,a);break;case 13:hr(e,a),l&4&&hy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=WA.bind(null,a),pb(e,a))));break;case 22:if(l=a.memoizedState!==null||Ui,!l){i=i!==null&&i.memoizedState!==null||de,h=Ui;var d=de;Ui=l,(de=i)&&!d?fr(e,a,(a.subtreeFlags&8772)!==0):hr(e,a),Ui=h,de=d}break;case 30:break;default:hr(e,a)}}function uy(e){var i=e.alternate;i!==null&&(e.alternate=null,uy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ji(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var se=null,en=!1;function Li(e,i,a){for(a=a.child;a!==null;)cy(e,i,a),a=a.sibling}function cy(e,i,a){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(le,a)}catch{}switch(a.tag){case 26:de||si(a,i),Li(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:de||si(a,i);var l=se,h=en;_r(a.type)&&(se=a.stateNode,en=!1),Li(e,i,a),rl(a.stateNode),se=l,en=h;break;case 5:de||si(a,i);case 6:if(l=se,h=en,se=null,Li(e,i,a),se=l,en=h,se!==null)if(en)try{(se.nodeType===9?se.body:se.nodeName==="HTML"?se.ownerDocument.body:se).removeChild(a.stateNode)}catch(d){ee(a,i,d)}else try{se.removeChild(a.stateNode)}catch(d){ee(a,i,d)}break;case 18:se!==null&&(en?(e=se,Wy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fl(e)):Wy(se,a.stateNode));break;case 4:l=se,h=en,se=a.stateNode.containerInfo,en=!0,Li(e,i,a),se=l,en=h;break;case 0:case 11:case 14:case 15:de||cr(2,a,i),de||cr(4,a,i),Li(e,i,a);break;case 1:de||(si(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&iy(a,i,l)),Li(e,i,a);break;case 21:Li(e,i,a);break;case 22:de=(l=de)||a.memoizedState!==null,Li(e,i,a),de=l;break;default:Li(e,i,a)}}function hy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fl(e)}catch(a){ee(i,i.return,a)}}function FA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new oy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new oy),i;default:throw Error(s(435,e.tag))}}function Pf(e,i){var a=FA(e);i.forEach(function(l){var h=JA.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function hn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(_r(T.type)){se=T.stateNode,en=!1;break t}break;case 5:se=T.stateNode,en=!1;break t;case 3:case 4:se=T.stateNode.containerInfo,en=!0;break t}T=T.return}if(se===null)throw Error(s(160));cy(d,v,h),se=null,en=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)fy(i,e),i=i.sibling}var Un=null;function fy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(i,e),fn(e),l&4&&(cr(3,e,e.return),Yo(3,e),cr(5,e,e.return));break;case 1:hn(i,e),fn(e),l&512&&(de||a===null||si(a,a.return)),l&64&&Ui&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Un;if(hn(i,e),fn(e),l&512&&(de||a===null||si(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Wr]||d[Ee]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Le(d,l,a),d[Ee]=e,he(d),l=d;break t;case"link":var v=a_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),Le(d,l,a),h.head.appendChild(d);break;case"meta":if(v=a_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),Le(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ee]=e,he(d),l=d}e.stateNode=l}else o_(h,e.type,e.stateNode);else e.stateNode=s_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?o_(h,e.type,e.stateNode):s_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:hn(i,e),fn(e),l&512&&(de||a===null||si(a,a.return)),a!==null&&l&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(hn(i,e),fn(e),l&512&&(de||a===null||si(a,a.return)),e.flags&32){h=e.stateNode;try{vn(h,"")}catch(j){ee(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,xf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(kf=!0);break;case 6:if(hn(i,e),fn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){ee(e,e.return,j)}}break;case 3:if(sc=null,h=Un,Un=ic(i.containerInfo),hn(i,e),Un=h,fn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{fl(i.containerInfo)}catch(j){ee(e,e.return,j)}kf&&(kf=!1,dy(e));break;case 4:l=Un,Un=ic(e.stateNode.containerInfo),hn(i,e),fn(e),Un=l;break;case 12:hn(i,e),fn(e);break;case 13:hn(i,e),fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qf=yn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 22:h=e.memoizedState!==null;var R=a!==null&&a.memoizedState!==null,L=Ui,K=de;if(Ui=L||h,de=K||R,hn(i,e),de=K,Ui=L,fn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||R||Ui||de||Ss(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){R=a=i;try{if(d=R.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=R.stateNode;var X=R.memoizedProps.style,z=X!=null&&X.hasOwnProperty("display")?X.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){ee(R,R.return,j)}}}else if(i.tag===6){if(a===null){R=i;try{R.stateNode.nodeValue=h?"":R.memoizedProps}catch(j){ee(R,R.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Pf(e,a))));break;case 19:hn(i,e),fn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pf(e,l)));break;case 30:break;case 21:break;default:hn(i,e),fn(e)}}function fn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(sy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Mf(e);Fu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(vn(v,""),a.flags&=-33);var T=Mf(e);Fu(e,T,v);break;case 3:case 4:var R=a.stateNode.containerInfo,L=Mf(e);Vf(e,L,R);break;default:throw Error(s(161))}}catch(K){ee(e,e.return,K)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function dy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;dy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function hr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ly(e,i.alternate,i),i=i.sibling}function Ss(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:cr(4,i,i.return),Ss(i);break;case 1:si(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&iy(i,i.return,a),Ss(i);break;case 27:rl(i.stateNode);case 26:case 5:si(i,i.return),Ss(i);break;case 22:i.memoizedState===null&&Ss(i);break;case 30:Ss(i);break;default:Ss(i)}e=e.sibling}}function fr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:fr(h,d,a),Yo(4,d);break;case 1:if(fr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){ee(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)qg(R[h],T)}catch(L){ee(l,l.return,L)}}a&&v&64&&ny(d),Xo(d,d.return);break;case 27:ay(d);case 26:case 5:fr(h,d,a),a&&l===null&&v&4&&ry(d),Xo(d,d.return);break;case 12:fr(h,d,a);break;case 13:fr(h,d,a),a&&v&4&&hy(h,d);break;case 22:d.memoizedState===null&&fr(h,d,a),Xo(d,d.return);break;case 30:break;default:fr(h,d,a)}i=i.sibling}}function Uf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vo(a))}function Lf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Vo(e))}function ai(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)my(e,i,a,l),i=i.sibling}function my(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ai(e,i,a,l),h&2048&&Yo(9,i);break;case 1:ai(e,i,a,l);break;case 3:ai(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Vo(e)));break;case 12:if(h&2048){ai(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){ee(i,i.return,R)}}else ai(e,i,a,l);break;case 13:ai(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ai(e,i,a,l):$o(e,i):d._visibility&2?ai(e,i,a,l):(d._visibility|=2,Ea(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Uf(v,i);break;case 24:ai(e,i,a,l),h&2048&&Lf(i.alternate,i);break;default:ai(e,i,a,l)}}function Ea(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,R=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ea(d,v,T,R,h),Yo(8,v);break;case 23:break;case 22:var K=v.stateNode;v.memoizedState!==null?K._visibility&2?Ea(d,v,T,R,h):$o(d,v):(K._visibility|=2,Ea(d,v,T,R,h)),h&&L&2048&&Uf(v.alternate,v);break;case 24:Ea(d,v,T,R,h),h&&L&2048&&Lf(v.alternate,v);break;default:Ea(d,v,T,R,h)}i=i.sibling}}function $o(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:$o(a,l),h&2048&&Uf(l.alternate,l);break;case 24:$o(a,l),h&2048&&Lf(l.alternate,l);break;default:$o(a,l)}i=i.sibling}}var Zo=8192;function Aa(e){if(e.subtreeFlags&Zo)for(e=e.child;e!==null;)gy(e),e=e.sibling}function gy(e){switch(e.tag){case 26:Aa(e),e.flags&Zo&&e.memoizedState!==null&&Db(Un,e.memoizedState,e.memoizedProps);break;case 5:Aa(e);break;case 3:case 4:var i=Un;Un=ic(e.stateNode.containerInfo),Aa(e),Un=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Zo,Zo=16777216,Aa(e),Zo=i):Aa(e));break;default:Aa(e)}}function py(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Wo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Oe=l,_y(l,e)}py(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yy(e),e=e.sibling}function yy(e){switch(e.tag){case 0:case 11:case 15:Wo(e),e.flags&2048&&cr(9,e,e.return);break;case 3:Wo(e);break;case 12:Wo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Gu(e)):Wo(e);break;default:Wo(e)}}function Gu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Oe=l,_y(l,e)}py(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:cr(8,i,i.return),Gu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Gu(i));break;default:Gu(i)}e=e.sibling}}function _y(e,i){for(;Oe!==null;){var a=Oe;switch(a.tag){case 0:case 11:case 15:cr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Oe=l;else t:for(a=e;Oe!==null;){l=Oe;var h=l.sibling,d=l.return;if(uy(l),l===a){Oe=null;break t}if(h!==null){h.return=d,Oe=h;break t}Oe=d}}}var GA={getCacheForType:function(e){var i=He(Se),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},QA=typeof WeakMap=="function"?WeakMap:Map,Yt=0,ne=null,Mt=null,jt=0,Xt=0,dn=null,dr=!1,ba=!1,zf=!1,zi=0,ce=0,mr=0,ws=0,jf=0,Cn=0,Sa=0,Jo=null,nn=null,Bf=!1,qf=0,Qu=1/0,Ku=null,gr=null,Ue=0,pr=null,wa=null,Ra=0,Hf=0,Ff=null,vy=null,tl=0,Gf=null;function mn(){if((Yt&2)!==0&&jt!==0)return jt&-jt;if(F.T!==null){var e=da;return e!==0?e:Wf()}return Zi()}function Ty(){Cn===0&&(Cn=(jt&536870912)===0||Ft?lo():536870912);var e=In.current;return e!==null&&(e.flags|=32),Cn}function gn(e,i,a){(e===ne&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Ia(e,0),yr(e,jt,Cn,!1)),yi(e,a),((Yt&2)===0||e!==ne)&&(e===ne&&((Yt&2)===0&&(ws|=a),ce===4&&yr(e,jt,Cn,!1)),oi(e))}function Ey(e,i,a){if((Yt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Zr(e,i),h=l?XA(e,i):Yf(e,i,!0),d=l;do{if(h===0){ba&&!l&&yr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!KA(a)){h=Yf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=Jo;var R=T.current.memoizedState.isDehydrated;if(R&&(Ia(T,v).flags|=256),v=Yf(T,v,!1),v!==2){if(zf&&!R){T.errorRecoveryDisabledLanes|=d,ws|=d,h=4;break t}d=nn,nn=h,d!==null&&(nn===null?nn=d:nn.push.apply(nn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ia(e,0),yr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:yr(l,i,Cn,!dr);break t;case 2:nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=qf+300-yn(),10<h)){if(yr(l,i,Cn,!dr),Fs(l,0,!0)!==0)break t;l.timeoutHandle=$y(Ay.bind(null,l,a,nn,Ku,Bf,i,Cn,ws,Sa,dr,d,2,-0,0),h);break t}Ay(l,a,nn,Ku,Bf,i,Cn,ws,Sa,dr,d,0,-0,0)}}break}while(!0);oi(e)}function Ay(e,i,a,l,h,d,v,T,R,L,K,X,z,j){if(e.timeoutHandle=-1,X=i.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(ol={stylesheets:null,count:0,unsuspend:Cb},gy(i),X=Nb(),X!==null)){e.cancelPendingCommit=X(Dy.bind(null,e,i,d,a,l,h,v,T,R,K,1,z,j)),yr(e,d,v,!L);return}Dy(e,i,d,a,l,h,v,T,R)}function KA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!un(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(e,i,a,l){i&=~jf,i&=~ws,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-qe(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Qn(e,a,i)}function Yu(){return(Yt&6)===0?(el(0),!1):!0}function Qf(){if(Mt!==null){if(Xt===0)var e=Mt.return;else e=Mt,Oi=vs=null,uf(e),va=null,Go=0,e=Mt;for(;e!==null;)ey(e.alternate,e),e=e.return;Mt=null}}function Ia(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qf(),ne=e,Mt=a=Ci(e.current,null),jt=i,Xt=0,dn=null,dr=!1,ba=Zr(e,i),zf=!1,Sa=Cn=jf=ws=mr=ce=0,nn=Jo=null,Bf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-qe(l),d=1<<h;i|=e[h],l&=~d}return zi=i,pu(),a}function by(e,i){Nt=null,F.H=ku,i===Po||i===wu?(i=jg(),Xt=3):i===Ug?(i=jg(),Xt=4):Xt=i===Bp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,dn=i,Mt===null&&(ce=1,ju(e,bn(i,e.current)))}function Sy(){var e=F.H;return F.H=ku,e===null?ku:e}function wy(){var e=F.A;return F.A=GA,e}function Kf(){ce=4,dr||(jt&4194048)!==jt&&In.current!==null||(ba=!0),(mr&134217727)===0&&(ws&134217727)===0||ne===null||yr(ne,jt,Cn,!1)}function Yf(e,i,a){var l=Yt;Yt|=2;var h=Sy(),d=wy();(ne!==e||jt!==i)&&(Ku=null,Ia(e,i)),i=!1;var v=ce;t:do try{if(Xt!==0&&Mt!==null){var T=Mt,R=dn;switch(Xt){case 8:Qf(),v=6;break t;case 3:case 2:case 9:case 6:In.current===null&&(i=!0);var L=Xt;if(Xt=0,dn=null,Ca(e,T,R,L),a&&ba){v=0;break t}break;default:L=Xt,Xt=0,dn=null,Ca(e,T,R,L)}}YA(),v=ce;break}catch(K){by(e,K)}while(!0);return i&&e.shellSuspendCounter++,Oi=vs=null,Yt=l,F.H=h,F.A=d,Mt===null&&(ne=null,jt=0,pu()),v}function YA(){for(;Mt!==null;)Ry(Mt)}function XA(e,i){var a=Yt;Yt|=2;var l=Sy(),h=wy();ne!==e||jt!==i?(Ku=null,Qu=yn()+500,Ia(e,i)):ba=Zr(e,i);t:do try{if(Xt!==0&&Mt!==null){i=Mt;var d=dn;e:switch(Xt){case 1:Xt=0,dn=null,Ca(e,i,d,1);break;case 2:case 9:if(Lg(d)){Xt=0,dn=null,Iy(i);break}i=function(){Xt!==2&&Xt!==9||ne!==e||(Xt=7),oi(e)},d.then(i,i);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:Lg(d)?(Xt=0,dn=null,Iy(i)):(Xt=0,dn=null,Ca(e,i,d,7));break;case 5:var v=null;switch(Mt.tag){case 26:v=Mt.memoizedState;case 5:case 27:var T=Mt;if(!v||l_(v)){Xt=0,dn=null;var R=T.sibling;if(R!==null)Mt=R;else{var L=T.return;L!==null?(Mt=L,Xu(L)):Mt=null}break e}}Xt=0,dn=null,Ca(e,i,d,5);break;case 6:Xt=0,dn=null,Ca(e,i,d,6);break;case 8:Qf(),ce=6;break t;default:throw Error(s(462))}}$A();break}catch(K){by(e,K)}while(!0);return Oi=vs=null,F.H=l,F.A=h,Yt=a,Mt!==null?0:(ne=null,jt=0,pu(),ce)}function $A(){for(;Mt!==null&&!ro();)Ry(Mt)}function Ry(e){var i=Jp(e.alternate,e,zi);e.memoizedProps=e.pendingProps,i===null?Xu(e):Mt=i}function Iy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Kp(a,i,i.pendingProps,i.type,void 0,jt);break;case 11:i=Kp(a,i,i.pendingProps,i.type.render,i.ref,jt);break;case 5:uf(i);default:ey(a,i),i=Mt=Cg(i,zi),i=Jp(a,i,zi)}e.memoizedProps=e.pendingProps,i===null?Xu(e):Mt=i}function Ca(e,i,a,l){Oi=vs=null,uf(i),va=null,Go=0;var h=i.return;try{if(zA(e,h,i,a,jt)){ce=1,ju(e,bn(a,e.current)),Mt=null;return}}catch(d){if(h!==null)throw Mt=h,d;ce=1,ju(e,bn(a,e.current)),Mt=null;return}i.flags&32768?(Ft||l===1?e=!0:ba||(jt&536870912)!==0?e=!1:(dr=e=!0,(l===2||l===9||l===3||l===6)&&(l=In.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cy(i,e)):Xu(i)}function Xu(e){var i=e;do{if((i.flags&32768)!==0){Cy(i,dr);return}e=i.return;var a=BA(i.alternate,i,zi);if(a!==null){Mt=a;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=e}while(i!==null);ce===0&&(ce=5)}function Cy(e,i){do{var a=qA(e.alternate,e);if(a!==null){a.flags&=32767,Mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=a}while(e!==null);ce=6,Mt=null}function Dy(e,i,a,l,h,d,v,T,R){e.cancelPendingCommit=null;do $u();while(Ue!==0);if((Yt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Uh,co(e,a,d,v,T,R),e===ne&&(Mt=ne=null,jt=0),wa=i,pr=e,Ra=a,Hf=d,Ff=h,vy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tb(Kr,function(){return Vy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=st.p,st.p=2,v=Yt,Yt|=4;try{HA(e,i,a)}finally{Yt=v,st.p=h,F.T=l}}Ue=1,Ny(),Oy(),xy()}}function Ny(){if(Ue===1){Ue=0;var e=pr,i=wa,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=st.p;st.p=2;var h=Yt;Yt|=4;try{fy(i,e);var d=ad,v=_g(e.containerInfo),T=d.focusedElem,R=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&yg(T.ownerDocument.documentElement,T)){if(R!==null&&xh(T)){var L=R.start,K=R.end;if(K===void 0&&(K=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(K,T.value.length);else{var X=T.ownerDocument||document,z=X&&X.defaultView||window;if(z.getSelection){var j=z.getSelection(),Et=T.textContent.length,yt=Math.min(R.start,Et),Jt=R.end===void 0?yt:Math.min(R.end,Et);!j.extend&&yt>Jt&&(v=Jt,Jt=yt,yt=v);var k=pg(T,yt),N=pg(T,Jt);if(k&&N&&(j.rangeCount!==1||j.anchorNode!==k.node||j.anchorOffset!==k.offset||j.focusNode!==N.node||j.focusOffset!==N.offset)){var U=X.createRange();U.setStart(k.node,k.offset),j.removeAllRanges(),yt>Jt?(j.addRange(U),j.extend(N.node,N.offset)):(U.setEnd(N.node,N.offset),j.addRange(U))}}}}for(X=[],j=T;j=j.parentNode;)j.nodeType===1&&X.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<X.length;T++){var Y=X[T];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}lc=!!sd,ad=sd=null}finally{Yt=h,st.p=l,F.T=a}}e.current=i,Ue=2}}function Oy(){if(Ue===2){Ue=0;var e=pr,i=wa,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=st.p;st.p=2;var h=Yt;Yt|=4;try{ly(e,i.alternate,i)}finally{Yt=h,st.p=l,F.T=a}}Ue=3}}function xy(){if(Ue===4||Ue===3){Ue=0,Gl();var e=pr,i=wa,a=Ra,l=vy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ue=5:(Ue=0,wa=pr=null,My(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(gr=null),Gs(a),i=i.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(le,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=st.p,st.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{F.T=i,st.p=h}}(Ra&3)!==0&&$u(),oi(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Gf?tl++:(tl=0,Gf=e):tl=0,el(0)}}function My(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Vo(i)))}function $u(e){return Ny(),Oy(),xy(),Vy()}function Vy(){if(Ue!==5)return!1;var e=pr,i=Hf;Hf=0;var a=Gs(Ra),l=F.T,h=st.p;try{st.p=32>a?32:a,F.T=null,a=Ff,Ff=null;var d=pr,v=Ra;if(Ue=0,wa=pr=null,Ra=0,(Yt&6)!==0)throw Error(s(331));var T=Yt;if(Yt|=4,yy(d.current),my(d,d.current,v,a),Yt=T,el(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(le,d)}catch{}return!0}finally{st.p=h,F.T=l,My(e,i)}}function ky(e,i,a){i=bn(a,i),i=bf(e.stateNode,i,2),e=ar(e,i,2),e!==null&&(yi(e,2),oi(e))}function ee(e,i,a){if(e.tag===3)ky(e,e,a);else for(;i!==null;){if(i.tag===3){ky(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gr===null||!gr.has(l))){e=bn(a,e),a=zp(2),l=ar(i,a,2),l!==null&&(jp(a,l,i,e),yi(l,2),oi(l));break}}i=i.return}}function Xf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new QA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(zf=!0,h.add(a),e=ZA.bind(null,e,i,a),i.then(e,e))}function ZA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ne===e&&(jt&a)===a&&(ce===4||ce===3&&(jt&62914560)===jt&&300>yn()-qf?(Yt&2)===0&&Ia(e,0):jf|=a,Sa===jt&&(Sa=0)),oi(e)}function Py(e,i){i===0&&(i=uo()),e=ua(e,i),e!==null&&(yi(e,i),oi(e))}function WA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Py(e,a)}function JA(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Py(e,a)}function tb(e,i){return Gr(e,i)}var Zu=null,Da=null,$f=!1,Wu=!1,Zf=!1,Rs=0;function oi(e){e!==Da&&e.next===null&&(Da===null?Zu=Da=e:Da=Da.next=e),Wu=!0,$f||($f=!0,nb())}function el(e,i){if(!Zf&&Wu){Zf=!0;do for(var a=!1,l=Zu;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-qe(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,jy(l,d))}else d=jt,d=Fs(l,l===ne?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Zr(l,d)||(a=!0,jy(l,d));l=l.next}while(a);Zf=!1}}function eb(){Uy()}function Uy(){Wu=$f=!1;var e=0;Rs!==0&&(cb()&&(e=Rs),Rs=0);for(var i=yn(),a=null,l=Zu;l!==null;){var h=l.next,d=Ly(l,i);d===0?(l.next=null,a===null?Zu=h:a.next=h,h===null&&(Da=a)):(a=l,(e!==0||(d&3)!==0)&&(Wu=!0)),l=h}el(e)}function Ly(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-qe(d),T=1<<v,R=h[v];R===-1?((T&a)===0||(T&l)!==0)&&(h[v]=oo(T,i)):R<=i&&(e.expiredLanes|=T),d&=~T}if(i=ne,a=jt,a=Fs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Qr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Qr(l),Gs(a)){case 2:case 8:a=qs;break;case 32:a=Kr;break;case 268435456:a=Hs;break;default:a=Kr}return l=zy.bind(null,e),a=Gr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Qr(l),e.callbackPriority=2,e.callbackNode=null,2}function zy(e,i){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if($u()&&e.callbackNode!==a)return null;var l=jt;return l=Fs(e,e===ne?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ey(e,l,i),Ly(e,yn()),e.callbackNode!=null&&e.callbackNode===a?zy.bind(null,e):null)}function jy(e,i){if($u())return null;Ey(e,i,!0)}function nb(){fb(function(){(Yt&6)!==0?Gr(so,eb):Uy()})}function Wf(){return Rs===0&&(Rs=lo()),Rs}function By(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zs(""+e)}function qy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function ib(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=By((h[ge]||null).action),v=l.submitter;v&&(i=(i=v[ge]||null)?By(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new Ws("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Rs!==0){var R=v?qy(h,v):new FormData(h);_f(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=v?qy(h,v):new FormData(h),_f(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var Jf=0;Jf<Ph.length;Jf++){var td=Ph[Jf],rb=td.toLowerCase(),sb=td[0].toUpperCase()+td.slice(1);Pn(rb,"on"+sb)}Pn(Eg,"onAnimationEnd"),Pn(Ag,"onAnimationIteration"),Pn(bg,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(AA,"onTransitionRun"),Pn(bA,"onTransitionStart"),Pn(SA,"onTransitionCancel"),Pn(Sg,"onTransitionEnd"),vi("onMouseEnter",["mouseout","mouseover"]),vi("onMouseLeave",["mouseout","mouseover"]),vi("onPointerEnter",["pointerout","pointerover"]),vi("onPointerLeave",["pointerout","pointerover"]),Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function Hy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],R=T.instance,L=T.currentTarget;if(T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(K){zu(K)}h.currentTarget=null,d=R}else for(v=0;v<l.length;v++){if(T=l[v],R=T.instance,L=T.currentTarget,T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(K){zu(K)}h.currentTarget=null,d=R}}}}function Vt(e,i){var a=i[fo];a===void 0&&(a=i[fo]=new Set);var l=e+"__bubble";a.has(l)||(Fy(i,e,2,!1),a.add(l))}function ed(e,i,a){var l=0;i&&(l|=4),Fy(a,e,l,i)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function nd(e){if(!e[Ju]){e[Ju]=!0,mo.forEach(function(a){a!=="selectionchange"&&(ab.has(a)||ed(a,!1,e),ed(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ju]||(i[Ju]=!0,ed("selectionchange",!1,i))}}function Fy(e,i,a,l){switch(m_(i)){case 2:var h=Mb;break;case 8:h=Vb;break;default:h=pd}a=h.bind(null,i,a,e),h=void 0,!En||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function id(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var R=v.tag;if((R===3||R===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=_i(T),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){l=d=v;continue t}T=T.parentNode}}l=l.return}eu(function(){var L=d,K=Tn(a),X=[];t:{var z=wg.get(e);if(z!==void 0){var j=Ws,Et=e;switch(e){case"keypress":if(Wn(a)===0)break t;case"keydown":case"keyup":j=ra;break;case"focusin":Et="focus",j=ea;break;case"focusout":Et="blur",j=ea;break;case"beforeblur":case"afterblur":j=ea;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=An;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=uu;break;case Eg:case Ag:case bg:j=na;break;case Sg:j=hu;break;case"scroll":case"scrollend":j=nu;break;case"wheel":j=sa;break;case"copy":case"cut":case"paste":j=ia;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Ro;break;case"toggle":case"beforetoggle":j=du}var yt=(i&4)!==0,Jt=!yt&&(e==="scroll"||e==="scrollend"),k=yt?z!==null?z+"Capture":null:z;yt=[];for(var N=L,U;N!==null;){var Y=N;if(U=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||U===null||k===null||(Y=ss(N,k),Y!=null&&yt.push(il(N,Y,U))),Jt)break;N=N.return}0<yt.length&&(z=new j(z,Et,null,a,K),X.push({event:z,listeners:yt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Ai&&(Et=a.relatedTarget||a.fromElement)&&(_i(Et)||Et[_n]))break t;if((j||z)&&(z=K.window===K?K:(z=K.ownerDocument)?z.defaultView||z.parentWindow:window,j?(Et=a.relatedTarget||a.toElement,j=L,Et=Et?_i(Et):null,Et!==null&&(Jt=u(Et),yt=Et.tag,Et!==Jt||yt!==5&&yt!==27&&yt!==6)&&(Et=null)):(j=null,Et=L),j!==Et)){if(yt=An,Y="onMouseLeave",k="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(yt=Ro,Y="onPointerLeave",k="onPointerEnter",N="pointer"),Jt=j==null?z:Yn(j),U=Et==null?z:Yn(Et),z=new yt(Y,N+"leave",j,a,K),z.target=Jt,z.relatedTarget=U,Y=null,_i(K)===L&&(yt=new yt(k,N+"enter",Et,a,K),yt.target=U,yt.relatedTarget=Jt,Y=yt),Jt=Y,j&&Et)e:{for(yt=j,k=Et,N=0,U=yt;U;U=Na(U))N++;for(U=0,Y=k;Y;Y=Na(Y))U++;for(;0<N-U;)yt=Na(yt),N--;for(;0<U-N;)k=Na(k),U--;for(;N--;){if(yt===k||k!==null&&yt===k.alternate)break e;yt=Na(yt),k=Na(k)}yt=null}else yt=null;j!==null&&Gy(X,z,j,yt,!1),Et!==null&&Jt!==null&&Gy(X,Jt,Et,yt,!0)}}t:{if(z=L?Yn(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var ht=cg;else if(be(z))if(hg)ht=vA;else{ht=yA;var xt=pA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&vo(L.elementType)&&(ht=cg):ht=_A;if(ht&&(ht=ht(e,L))){Ii(X,ht,a,K);break t}xt&&xt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&er(z,"number",z.value)}switch(xt=L?Yn(L):window,e){case"focusin":(be(xt)||xt.contentEditable==="true")&&(aa=xt,Mh=L,Do=null);break;case"focusout":Do=Mh=aa=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,vg(X,a,K);break;case"selectionchange":if(EA)break;case"keydown":case"keyup":vg(X,a,K)}var mt;if(ei)t:{switch(e){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else Lt?H(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(_&&a.locale!=="ko"&&(Lt||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Lt&&(mt=Eo()):(Zn=K,nr="value"in Zn?Zn.value:Zn.textContent,Lt=!0)),xt=tc(L,_t),0<xt.length&&(_t=new So(_t,e,null,a,K),X.push({event:_t,listeners:xt}),mt?_t.data=mt:(mt=rt(a),mt!==null&&(_t.data=mt)))),(mt=m?Ae(e,a):zt(e,a))&&(_t=tc(L,"onBeforeInput"),0<_t.length&&(xt=new So("onBeforeInput","beforeinput",null,a,K),X.push({event:xt,listeners:_t}),xt.data=mt)),ib(X,e,L,a,K)}Hy(X,i)})}function il(e,i,a){return{instance:e,listener:i,currentTarget:a}}function tc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ss(e,a),h!=null&&l.unshift(il(e,h,d)),h=ss(e,i),h!=null&&l.push(il(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Na(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gy(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,R=T.alternate,L=T.stateNode;if(T=T.tag,R!==null&&R===l)break;T!==5&&T!==26&&T!==27||L===null||(R=L,h?(L=ss(a,d),L!=null&&v.unshift(il(a,L,R))):h||(L=ss(a,d),L!=null&&v.push(il(a,L,R)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var ob=/\r\n?/g,lb=/\u0000|\uFFFD/g;function Qy(e){return(typeof e=="string"?e:""+e).replace(ob,`
`).replace(lb,"")}function Ky(e,i){return i=Qy(i),Qy(e)===i}function ec(){}function Wt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||vn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&vn(e,""+l);break;case"className":Xn(e,"class",l);break;case"tabIndex":Xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(e,a,l);break;case"style":_o(e,l,d);break;case"data":if(i!=="object"){Xn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zs(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Wt(e,i,"name",h.name,h,null),Wt(e,i,"formEncType",h.formEncType,h,null),Wt(e,i,"formMethod",h.formMethod,h,null),Wt(e,i,"formTarget",h.formTarget,h,null)):(Wt(e,i,"encType",h.encType,h,null),Wt(e,i,"method",h.method,h,null),Wt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zs(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ec);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),tr(e,"popover",l);break;case"xlinkActuate":Ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ve(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ve(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ve(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ve(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":tr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rh.get(a)||a,tr(e,a,l))}}function rd(e,i,a,l,h,d){switch(a){case"style":_o(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?vn(e,l):(typeof l=="number"||typeof l=="bigint")&&vn(e,""+l);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ec);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[ge]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):tr(e,a,l)}}}function Le(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Wt(e,i,d,v,a,null)}}h&&Wt(e,i,"srcSet",a.srcSet,a,null),l&&Wt(e,i,"src",a.src,a,null);return;case"input":Vt("invalid",e);var T=d=v=h=null,R=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":v=K;break;case"checked":R=K;break;case"defaultChecked":L=K;break;case"value":d=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:Wt(e,i,l,K,a,null)}}ns(e,d,T,R,L,v,h,!1),$s(e);return;case"select":Vt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Wt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ei(e,!!l,i,!1):a!=null&&Ei(e,!!l,a,!0);return;case"textarea":Vt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Wt(e,i,v,T,a,null)}is(e,l,h,d),$s(e);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Wt(e,i,R,l,a,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(l=0;l<nl.length;l++)Vt(nl[l],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Wt(e,i,L,l,a,null)}return;default:if(vo(i)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&rd(e,i,K,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Wt(e,i,T,l,a,null))}function ub(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,R=null,L=null,K=null;for(j in a){var X=a[j];if(a.hasOwnProperty(j)&&X!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":R=X;default:l.hasOwnProperty(j)||Wt(e,i,j,null,l,X)}}for(var z in l){var j=l[z];if(X=a[z],l.hasOwnProperty(z)&&(j!=null||X!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":K=j;break;case"value":v=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==X&&Wt(e,i,z,j,l,X)}}ln(e,v,T,R,L,K,d,h);return;case"select":j=v=T=z=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":j=R;default:l.hasOwnProperty(d)||Wt(e,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==R&&Wt(e,i,h,d,l,R)}i=T,a=v,l=j,z!=null?Ei(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ei(e,!!a,i,!0):Ei(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Wt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Wt(e,i,v,h,l,d)}$t(e,z,j);return;case"option":for(var Et in a)if(z=a[Et],a.hasOwnProperty(Et)&&z!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Wt(e,i,Et,null,l,z)}for(R in l)if(z=l[R],j=a[R],l.hasOwnProperty(R)&&z!==j&&(z!=null||j!=null))switch(R){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Wt(e,i,R,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var yt in a)z=a[yt],a.hasOwnProperty(yt)&&z!=null&&!l.hasOwnProperty(yt)&&Wt(e,i,yt,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Wt(e,i,L,z,l,j)}return;default:if(vo(i)){for(var Jt in a)z=a[Jt],a.hasOwnProperty(Jt)&&z!==void 0&&!l.hasOwnProperty(Jt)&&rd(e,i,Jt,void 0,l,z);for(K in l)z=l[K],j=a[K],!l.hasOwnProperty(K)||z===j||z===void 0&&j===void 0||rd(e,i,K,z,l,j);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!l.hasOwnProperty(k)&&Wt(e,i,k,null,l,z);for(X in l)z=l[X],j=a[X],!l.hasOwnProperty(X)||z===j||z==null&&j==null||Wt(e,i,X,z,l,j)}var sd=null,ad=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function Yy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function od(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ld=null;function cb(){var e=window.event;return e&&e.type==="popstate"?e===ld?!1:(ld=e,!0):(ld=null,!1)}var $y=typeof setTimeout=="function"?setTimeout:void 0,hb=typeof clearTimeout=="function"?clearTimeout:void 0,Zy=typeof Promise=="function"?Promise:void 0,fb=typeof queueMicrotask=="function"?queueMicrotask:typeof Zy<"u"?function(e){return Zy.resolve(null).then(e).catch(db)}:$y;function db(e){setTimeout(function(){throw e})}function _r(e){return e==="head"}function Wy(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&rl(v.documentElement),a&2&&rl(v.body),a&4)for(a=v.head,rl(a),v=a.firstChild;v;){var T=v.nextSibling,R=v.nodeName;v[Wr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),fl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);fl(i)}function ud(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),Ji(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mb(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ln(e.nextSibling),e===null)break}return null}function gb(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ln(e.nextSibling),e===null))return null;return e}function cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function pb(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ln(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var hd=null;function Jy(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function t_(e,i,a){switch(i=nc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function rl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ji(e)}var Dn=new Map,e_=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=st.d;st.d={f:yb,r:_b,D:vb,C:Tb,L:Eb,m:Ab,X:Sb,S:bb,M:wb};function yb(){var e=ji.f(),i=Yu();return e||i}function _b(e){var i=Kn(e);i!==null&&i.tag===5&&i.type==="form"?Ep(i):ji.r(e)}var Oa=typeof document>"u"?null:document;function n_(e,i,a){var l=Oa;if(l&&typeof i=="string"&&i){var h=pe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),e_.has(h)||(e_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Le(i,"link",e),he(i),l.head.appendChild(i)))}}function vb(e){ji.D(e),n_("dns-prefetch",e,null)}function Tb(e,i){ji.C(e,i),n_("preconnect",e,i)}function Eb(e,i,a){ji.L(e,i,a);var l=Oa;if(l&&e&&i){var h='link[rel="preload"][as="'+pe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+pe(a.imageSizes)+'"]')):h+='[href="'+pe(e)+'"]';var d=h;switch(i){case"style":d=xa(e);break;case"script":d=Ma(e)}Dn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Dn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(sl(d))||i==="script"&&l.querySelector(al(d))||(i=l.createElement("link"),Le(i,"link",e),he(i),l.head.appendChild(i)))}}function Ab(e,i){ji.m(e,i);var a=Oa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+pe(l)+'"][href="'+pe(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ma(e)}if(!Dn.has(d)&&(e=E({rel:"modulepreload",href:e},i),Dn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(d)))return}l=a.createElement("link"),Le(l,"link",e),he(l),a.head.appendChild(l)}}}function bb(e,i,a){ji.S(e,i,a);var l=Oa;if(l&&e){var h=Xe(l).hoistableStyles,d=xa(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(sl(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Dn.get(d))&&fd(e,a);var R=v=l.createElement("link");he(R),Le(R,"link",e),R._p=new Promise(function(L,K){R.onload=L,R.onerror=K}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,rc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function Sb(e,i){ji.X(e,i);var a=Oa;if(a&&e){var l=Xe(a).hoistableScripts,h=Ma(e),d=l.get(h);d||(d=a.querySelector(al(h)),d||(e=E({src:e,async:!0},i),(i=Dn.get(h))&&dd(e,i),d=a.createElement("script"),he(d),Le(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function wb(e,i){ji.M(e,i);var a=Oa;if(a&&e){var l=Xe(a).hoistableScripts,h=Ma(e),d=l.get(h);d||(d=a.querySelector(al(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=Dn.get(h))&&dd(e,i),d=a.createElement("script"),he(d),Le(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function i_(e,i,a,l){var h=(h=vt.current)?ic(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=xa(a.href),a=Xe(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xa(a.href);var d=Xe(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(sl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Dn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dn.set(e,a),d||Rb(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ma(a),a=Xe(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xa(e){return'href="'+pe(e)+'"'}function sl(e){return'link[rel="stylesheet"]['+e+"]"}function r_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Rb(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Le(i,"link",a),he(i),e.head.appendChild(i))}function Ma(e){return'[src="'+pe(e)+'"]'}function al(e){return"script[async]"+e}function s_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(l)return i.instance=l,he(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),he(l),Le(l,"style",h),rc(l,a.precedence,e),i.instance=l;case"stylesheet":h=xa(a.href);var d=e.querySelector(sl(h));if(d)return i.state.loading|=4,i.instance=d,he(d),d;l=r_(a),(h=Dn.get(h))&&fd(l,h),d=(e.ownerDocument||e).createElement("link"),he(d);var v=d;return v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),Le(d,"link",l),i.state.loading|=4,rc(d,a.precedence,e),i.instance=d;case"script":return d=Ma(a.src),(h=e.querySelector(al(d)))?(i.instance=h,he(h),h):(l=a,(h=Dn.get(d))&&(l=E({},a),dd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),he(h),Le(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,rc(l,a.precedence,e));return i.instance}function rc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function dd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var sc=null;function a_(e,i,a){if(sc===null){var l=new Map,h=sc=new Map;h.set(a,l)}else h=sc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[Wr]||d[Ee]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function o_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function Ib(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function l_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ol=null;function Cb(){}function Db(e,i,a){if(ol===null)throw Error(s(475));var l=ol;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=xa(a.href),d=e.querySelector(sl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ac.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,he(d);return}d=e.ownerDocument||e,a=r_(a),(h=Dn.get(h))&&fd(a,h),d=d.createElement("link"),he(d);var v=d;v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),Le(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=ac.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function Nb(){if(ol===null)throw Error(s(475));var e=ol;return e.stylesheets&&e.count===0&&md(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&md(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ac(){if(this.count--,this.count===0){if(this.stylesheets)md(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function md(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,i.forEach(Ob,e),oc=null,ac.call(e))}function Ob(e,i){if(!(i.state.loading&4)){var a=oc.get(e);if(a)var l=a.get(null);else{a=new Map,oc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=ac.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ll={$$typeof:ct,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function xb(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.hiddenUpdates=pi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function u_(e,i,a,l,h,d,v,T,R,L,K,X){return e=new xb(e,i,a,v,T,R,L,X),i=1,d===!0&&(i|=24),d=cn(3,null,null,i),e.current=d,d.stateNode=e,i=Yh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Wh(d),e}function c_(e){return e?(e=ca,e):ca}function h_(e,i,a,l,h,d){h=c_(h),l.context===null?l.context=h:l.pendingContext=h,l=sr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=ar(e,l,i),a!==null&&(gn(a,e,i),Lo(a,e,i))}function f_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function gd(e,i){f_(e,i),(e=e.alternate)&&f_(e,i)}function d_(e){if(e.tag===13){var i=ua(e,67108864);i!==null&&gn(i,e,67108864),gd(e,67108864)}}var lc=!0;function Mb(e,i,a,l){var h=F.T;F.T=null;var d=st.p;try{st.p=2,pd(e,i,a,l)}finally{st.p=d,F.T=h}}function Vb(e,i,a,l){var h=F.T;F.T=null;var d=st.p;try{st.p=8,pd(e,i,a,l)}finally{st.p=d,F.T=h}}function pd(e,i,a,l){if(lc){var h=yd(l);if(h===null)id(e,i,l,uc,a),g_(e,l);else if(Pb(h,e,i,a,l))l.stopPropagation();else if(g_(e,l),i&4&&-1<kb.indexOf(e)){for(;h!==null;){var d=Kn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Mn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var R=1<<31-qe(v);T.entanglements[1]|=R,v&=~R}oi(d),(Yt&6)===0&&(Qu=yn()+500,el(0))}}break;case 13:T=ua(d,2),T!==null&&gn(T,d,2),Yu(),gd(d,2)}if(d=yd(l),d===null&&id(e,i,l,uc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else id(e,i,l,null,a)}}function yd(e){return e=Tn(e),_d(e)}var uc=null;function _d(e){if(uc=null,e=_i(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return uc=e,null}function m_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Th()){case so:return 2;case qs:return 8;case Kr:case Eh:return 32;case Hs:return 268435456;default:return 32}default:return 32}}var vd=!1,vr=null,Tr=null,Er=null,ul=new Map,cl=new Map,Ar=[],kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(e,i){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ul.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(i.pointerId)}}function hl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Kn(i),i!==null&&d_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function Pb(e,i,a,l,h){switch(i){case"focusin":return vr=hl(vr,e,i,a,l,h),!0;case"dragenter":return Tr=hl(Tr,e,i,a,l,h),!0;case"mouseover":return Er=hl(Er,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return ul.set(d,hl(ul.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,cl.set(d,hl(cl.get(d)||null,e,i,a,l,h)),!0}return!1}function p_(e){var i=_i(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Yl(e.priority,function(){if(a.tag===13){var l=mn();l=$i(l);var h=ua(a,l);h!==null&&gn(h,a,l),gd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=yd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ai=l,a.target.dispatchEvent(l),Ai=null}else return i=Kn(a),i!==null&&d_(i),e.blockedOn=a,!1;i.shift()}return!0}function y_(e,i,a){cc(e)&&a.delete(i)}function Ub(){vd=!1,vr!==null&&cc(vr)&&(vr=null),Tr!==null&&cc(Tr)&&(Tr=null),Er!==null&&cc(Er)&&(Er=null),ul.forEach(y_),cl.forEach(y_)}function hc(e,i){e.blockedOn===i&&(e.blockedOn=null,vd||(vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ub)))}var fc=null;function __(e){fc!==e&&(fc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(_d(l||a)===null)continue;break}var d=Kn(a);d!==null&&(e.splice(i,3),i-=3,_f(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function fl(e){function i(R){return hc(R,e)}vr!==null&&hc(vr,e),Tr!==null&&hc(Tr,e),Er!==null&&hc(Er,e),ul.forEach(i),cl.forEach(i);for(var a=0;a<Ar.length;a++){var l=Ar[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ar.length&&(a=Ar[0],a.blockedOn===null);)p_(a),a.blockedOn===null&&Ar.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[ge]||null;if(typeof d=="function")v||__(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[ge]||null)T=v.formAction;else if(_d(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),__(a)}}}function Td(e){this._internalRoot=e}dc.prototype.render=Td.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=mn();h_(a,l,e,i,null,null)},dc.prototype.unmount=Td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;h_(e.current,2,null,e,null,null),Yu(),i[_n]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Zi();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ar.length&&i!==0&&i<Ar[a].priority;a++);Ar.splice(a,0,e),a===0&&p_(e)}};var v_=t.version;if(v_!=="19.1.0")throw Error(s(527,v_,"19.1.0"));st.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Lb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{le=mc.inject(Lb),Kt=mc}catch{}}return ml.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=kp,d=Pp,v=Up,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=u_(e,1,!1,null,null,a,l,h,d,v,T,null),e[_n]=i.current,nd(e),new Td(i)},ml.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=kp,v=Pp,T=Up,R=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=u_(e,1,!0,i,a??null,l,h,d,v,T,R,L),i.context=c_(null),a=i.current,l=mn(),l=$i(l),h=sr(l),h.callback=null,ar(a,h,l),a=l,i.current.lanes=a,yi(i,a),oi(i),e[_n]=i.current,nd(e),new dc(i)},ml.version="19.1.0",ml}var D_;function Yb(){if(D_)return bd.exports;D_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bd.exports=Kb(),bd.exports}var Xb=Yb();const $b=()=>{};var N_={};/**
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
 */const v0=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Zb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],g=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},T0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,g=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,w=(u&3)<<4|g>>4;let D=(g&15)<<2|y>>6,B=y&63;p||(B=64,f||(D=64)),s.push(n[E],n[w],n[D],n[B])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(v0(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Zb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],g=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const w=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||g==null||y==null||w==null)throw new Wb;const D=u<<2|g>>4;if(s.push(D),y!==64){const B=g<<4&240|y>>2;if(s.push(B),w!==64){const Q=y<<6&192|w;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jb=function(r){const t=v0(r);return T0.encodeByteArray(t,!0)},xc=function(r){return Jb(r).replace(/\./g,"")},E0=function(r){try{return T0.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function tS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eS=()=>tS().__FIREBASE_DEFAULTS__,nS=()=>{if(typeof process>"u"||typeof N_>"u")return;const r=N_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},iS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&E0(r[1]);return t&&JSON.parse(t)},Jc=()=>{try{return $b()||eS()||nS()||iS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},A0=r=>{var t,n;return(n=(t=Jc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},rS=r=>{const t=A0(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},b0=()=>{var r;return(r=Jc())===null||r===void 0?void 0:r.config},S0=r=>{var t;return(t=Jc())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class sS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Vl(r){return r.endsWith(".cloudworkstations.dev")}async function w0(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function aS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[xc(JSON.stringify(n)),xc(JSON.stringify(f)),""].join(".")}const vl={};function oS(){const r={prod:[],emulator:[]};for(const t of Object.keys(vl))vl[t]?r.emulator.push(t):r.prod.push(t);return r}function lS(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let O_=!1;function R0(r,t){if(typeof window>"u"||typeof document>"u"||!Vl(window.location.host)||vl[r]===t||vl[r]||O_)return;vl[r]=t;function n(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=oS().prod.length>0;function f(){const D=document.getElementById(s);D&&D.remove()}function g(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function p(D,B){D.setAttribute("width","24"),D.setAttribute("id",B),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function y(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{O_=!0,f()},D}function E(D,B){D.setAttribute("id",B),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function w(){const D=lS(s),B=n("text"),Q=document.getElementById(B)||document.createElement("span"),W=n("learnmore"),et=document.getElementById(W)||document.createElement("a"),pt=n("preprendIcon"),dt=document.getElementById(pt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const ct=D.element;g(ct),E(et,W);const Rt=y();p(dt,pt),ct.append(dt,Q,et,Rt),document.body.appendChild(ct)}u?(Q.innerText="Preview backend disconnected.",dt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(dt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function cS(){var r;const t=(r=Jc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function I0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function fS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dS(){const r=Ye();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function mS(){return!cS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C0(){try{return typeof indexedDB=="object"}catch{return!1}}function D0(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}function gS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pS="FirebaseError";class Gn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=pS,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?yS(u,s):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new Gn(o,g,s)}}function yS(r,t){return r.replace(_S,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const _S=/\{\$([^}]+)}/g;function vS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Os(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(x_(u)&&x_(f)){if(!Os(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function x_(r){return r!==null&&typeof r=="object"}/**
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
 */function kl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function TS(r,t){const n=new ES(r,t);return n.subscribe.bind(n)}class ES{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");AS(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Id),o.error===void 0&&(o.error=Id),o.complete===void 0&&(o.complete=Id);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Id(){}/**
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
 */const bS=1e3,SS=2,wS=4*60*60*1e3,RS=.5;function M_(r,t=bS,n=SS){const s=t*Math.pow(n,r),o=Math.round(RS*s*(Math.random()-.5)*2);return Math.min(wS,s+o)}/**
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
 */function Je(r){return r&&r._delegate?r._delegate:r}class Hn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Is="[DEFAULT]";/**
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
 */class IS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new sS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(DS(t))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Is){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Is){return this.instances.has(t)}getOptions(t=Is){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(u);s===g&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:CS(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Is){return this.component?this.component.multipleInstances?t:Is:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(r){return r===Is?void 0:r}function DS(r){return r.instantiationMode==="EAGER"}/**
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
 */class NS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new IS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pt||(Pt={}));const OS={debug:Pt.DEBUG,verbose:Pt.VERBOSE,info:Pt.INFO,warn:Pt.WARN,error:Pt.ERROR,silent:Pt.SILENT},xS=Pt.INFO,MS={[Pt.DEBUG]:"log",[Pt.VERBOSE]:"log",[Pt.INFO]:"info",[Pt.WARN]:"warn",[Pt.ERROR]:"error"},VS=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=MS[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class th{constructor(t){this.name=t,this._logLevel=xS,this._logHandler=VS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Pt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?OS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Pt.DEBUG,...t),this._logHandler(this,Pt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Pt.VERBOSE,...t),this._logHandler(this,Pt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Pt.INFO,...t),this._logHandler(this,Pt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Pt.WARN,...t),this._logHandler(this,Pt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Pt.ERROR,...t),this._logHandler(this,Pt.ERROR,...t)}}const kS=(r,t)=>t.some(n=>r instanceof n);let V_,k_;function PS(){return V_||(V_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function US(){return k_||(k_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N0=new WeakMap,Bd=new WeakMap,O0=new WeakMap,Cd=new WeakMap,gm=new WeakMap;function LS(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Or(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&N0.set(n,r)}).catch(()=>{}),gm.set(t,r),t}function zS(r){if(Bd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Bd.set(r,t)}let qd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Bd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||O0.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function jS(r){qd=r(qd)}function BS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Dd(this),t,...n);return O0.set(s,t.sort?t.sort():[t]),Or(s)}:US().includes(r)?function(...t){return r.apply(Dd(this),t),Or(N0.get(this))}:function(...t){return Or(r.apply(Dd(this),t))}}function qS(r){return typeof r=="function"?BS(r):(r instanceof IDBTransaction&&zS(r),kS(r,PS())?new Proxy(r,qd):r)}function Or(r){if(r instanceof IDBRequest)return LS(r);if(Cd.has(r))return Cd.get(r);const t=qS(r);return t!==r&&(Cd.set(r,t),gm.set(t,r)),t}const Dd=r=>gm.get(r);function x0(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),g=Or(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Or(f.result),p.oldVersion,p.newVersion,Or(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const HS=["get","getKey","getAll","getAllKeys","count"],FS=["put","add","delete","clear"],Nd=new Map;function P_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Nd.get(t))return Nd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=FS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||HS.includes(n)))return;const u=async function(f,...g){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),o&&p.done]))[0]};return Nd.set(t,u),u}jS(r=>({...r,get:(t,n,s)=>P_(t,n)||r.get(t,n,s),has:(t,n)=>!!P_(t,n)||r.has(t,n)}));/**
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
 */class GS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function QS(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hd="@firebase/app",U_="0.13.0";/**
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
 */const Fi=new th("@firebase/app"),KS="@firebase/app-compat",YS="@firebase/analytics-compat",XS="@firebase/analytics",$S="@firebase/app-check-compat",ZS="@firebase/app-check",WS="@firebase/auth",JS="@firebase/auth-compat",tw="@firebase/database",ew="@firebase/data-connect",nw="@firebase/database-compat",iw="@firebase/functions",rw="@firebase/functions-compat",sw="@firebase/installations",aw="@firebase/installations-compat",ow="@firebase/messaging",lw="@firebase/messaging-compat",uw="@firebase/performance",cw="@firebase/performance-compat",hw="@firebase/remote-config",fw="@firebase/remote-config-compat",dw="@firebase/storage",mw="@firebase/storage-compat",gw="@firebase/firestore",pw="@firebase/ai",yw="@firebase/firestore-compat",_w="firebase",vw="11.8.0";/**
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
 */const Fd="[DEFAULT]",Tw={[Hd]:"fire-core",[KS]:"fire-core-compat",[XS]:"fire-analytics",[YS]:"fire-analytics-compat",[ZS]:"fire-app-check",[$S]:"fire-app-check-compat",[WS]:"fire-auth",[JS]:"fire-auth-compat",[tw]:"fire-rtdb",[ew]:"fire-data-connect",[nw]:"fire-rtdb-compat",[iw]:"fire-fn",[rw]:"fire-fn-compat",[sw]:"fire-iid",[aw]:"fire-iid-compat",[ow]:"fire-fcm",[lw]:"fire-fcm-compat",[uw]:"fire-perf",[cw]:"fire-perf-compat",[hw]:"fire-rc",[fw]:"fire-rc-compat",[dw]:"fire-gcs",[mw]:"fire-gcs-compat",[gw]:"fire-fst",[yw]:"fire-fst-compat",[pw]:"fire-vertex","fire-js":"fire-js",[_w]:"fire-js-all"};/**
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
 */const Mc=new Map,Ew=new Map,Gd=new Map;function L_(r,t){try{r.container.addComponent(t)}catch(n){Fi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function di(r){const t=r.name;if(Gd.has(t))return Fi.debug(`There were multiple attempts to register component ${t}.`),!1;Gd.set(t,r);for(const n of Mc.values())L_(n,r);for(const n of Ew.values())L_(n,r);return!0}function Pl(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function zn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Aw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Us("app","Firebase",Aw);/**
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
 */class bw{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const Za=vw;function M0(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Fd,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw xr.create("bad-app-name",{appName:String(o)});if(n||(n=b0()),!n)throw xr.create("no-options");const u=Mc.get(o);if(u){if(Os(n,u.options)&&Os(s,u.config))return u;throw xr.create("duplicate-app",{appName:o})}const f=new NS(o);for(const p of Gd.values())f.addComponent(p);const g=new bw(n,s,f);return Mc.set(o,g),g}function V0(r=Fd){const t=Mc.get(r);if(!t&&r===Fd&&b0())return M0();if(!t)throw xr.create("no-app",{appName:r});return t}function On(r,t,n){var s;let o=(s=Tw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const g=[`Unable to register library "${o}" with version "${t}":`];u&&g.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fi.warn(g.join(" "));return}di(new Hn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const Sw="firebase-heartbeat-database",ww=1,Rl="firebase-heartbeat-store";let Od=null;function k0(){return Od||(Od=x0(Sw,ww,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Rl)}catch(n){console.warn(n)}}}}).catch(r=>{throw xr.create("idb-open",{originalErrorMessage:r.message})})),Od}async function Rw(r){try{const n=(await k0()).transaction(Rl),s=await n.objectStore(Rl).get(P0(r));return await n.done,s}catch(t){if(t instanceof Gn)Fi.warn(t.message);else{const n=xr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Fi.warn(n.message)}}}async function z_(r,t){try{const s=(await k0()).transaction(Rl,"readwrite");await s.objectStore(Rl).put(t,P0(r)),await s.done}catch(n){if(n instanceof Gn)Fi.warn(n.message);else{const s=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fi.warn(s.message)}}}function P0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Iw=1024,Cw=30;class Dw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ow(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=j_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Cw){const f=xw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Fi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=j_(),{heartbeatsToSend:s,unsentEntries:o}=Nw(this._heartbeatsCache.heartbeats),u=xc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Fi.warn(n),""}}}function j_(){return new Date().toISOString().substring(0,10)}function Nw(r,t=Iw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),B_(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),B_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ow{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return C0()?D0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return z_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return z_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function B_(r){return xc(JSON.stringify({version:2,heartbeats:r})).length}function xw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function Mw(r){di(new Hn("platform-logger",t=>new GS(t),"PRIVATE")),di(new Hn("heartbeat",t=>new Dw(t),"PRIVATE")),On(Hd,U_,r),On(Hd,U_,"esm2017"),On("fire-js","")}Mw("");function pm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function U0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vw=U0,L0=new Us("auth","Firebase",U0());/**
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
 */const Vc=new th("@firebase/auth");function kw(r,...t){Vc.logLevel<=Pt.WARN&&Vc.warn(`Auth (${Za}): ${r}`,...t)}function Ac(r,...t){Vc.logLevel<=Pt.ERROR&&Vc.error(`Auth (${Za}): ${r}`,...t)}/**
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
 */function Gi(r,...t){throw ym(r,...t)}function ui(r,...t){return ym(r,...t)}function z0(r,t,n){const s=Object.assign(Object.assign({},Vw()),{[t]:n});return new Us("auth","Firebase",s).create(t,{appName:r.name})}function Mr(r){return z0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ym(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return L0.create(r,...t)}function At(r,t,...n){if(!r)throw ym(t,...n)}function qi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Ac(t),new Error(t)}function Qi(r,t){r||qi(t)}/**
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
 */function Qd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Pw(){return q_()==="http:"||q_()==="https:"}function q_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Uw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pw()||I0()||"connection"in navigator)?navigator.onLine:!0}function Lw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ul{constructor(t,n){this.shortDelay=t,this.longDelay=n,Qi(n>t,"Short delay should be less than long delay!"),this.isMobile=uS()||fS()}get(){return Uw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _m(r,t){Qi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class j0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Bw=new Ul(3e4,6e4);function eh(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Wa(r,t,n,s,o={}){return B0(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const g=kl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},u);return hS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Vl(r.emulatorConfig.host)&&(y.credentials="include"),j0.fetch()(await H0(r,r.config.apiHost,n,g),y)})}async function B0(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},zw),t);try{const o=new qw(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw gc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const g=u.ok?f.errorMessage:f.error.message,[p,y]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw gc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw gc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw gc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw z0(r,E,y);Gi(r,E)}}catch(o){if(o instanceof Gn)throw o;Gi(r,"network-request-failed",{message:String(o)})}}async function q0(r,t,n,s,o={}){const u=await Wa(r,t,n,s,o);return"mfaPendingCredential"in u&&Gi(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function H0(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?_m(r.config,o):`${r.config.apiScheme}://${o}`;return jw.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class qw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ui(this.auth,"network-request-failed")),Bw.get())})}}function gc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=ui(r,t,s);return o.customData._tokenResponse=n,o}/**
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
 */async function Hw(r,t){return Wa(r,"POST","/v1/accounts:delete",t)}async function kc(r,t){return Wa(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Tl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Fw(r,t=!1){const n=Je(r),s=await n.getIdToken(t),o=vm(s);At(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Tl(xd(o.auth_time)),issuedAtTime:Tl(xd(o.iat)),expirationTime:Tl(xd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function xd(r){return Number(r)*1e3}function vm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Ac("JWT malformed, contained fewer than 3 sections"),null;try{const o=E0(n);return o?JSON.parse(o):(Ac("Failed to decode base64 JWT payload"),null)}catch(o){return Ac("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function H_(r){const t=vm(r);return At(t,"internal-error"),At(typeof t.exp<"u","internal-error"),At(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Il(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Gn&&Gw(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Gw({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Qw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tl(this.lastLoginAt),this.creationTime=Tl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Il(r,kc(n,{idToken:s}));At(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?F0(u.providerUserInfo):[],g=Yw(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(g!=null&&g.length),E=p?y:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:g,metadata:new Kd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,w)}async function Kw(r){const t=Je(r);await Pc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Yw(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function F0(r){return r.map(t=>{var{providerId:n}=t,s=pm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Xw(r,t){const n=await B0(r,{},async()=>{const s=kl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await H0(r,o,"/v1/token",`key=${u}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",j0.fetch()(f,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $w(r,t){return Wa(r,"POST","/v2/accounts:revokeToken",eh(r,t))}/**
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
 */class za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){At(t.idToken,"internal-error"),At(typeof t.idToken<"u","internal-error"),At(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):H_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){At(t.length!==0,"internal-error");const n=H_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(At(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await Xw(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new za;return s&&(At(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(At(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(At(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new za,this.toJSON())}_performRefresh(){return qi("not implemented")}}/**
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
 */function Sr(r,t){At(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class jn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=pm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Kd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Il(this,this.stsTokenManager.getToken(this.auth,t));return At(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Fw(this,t)}reload(){return Kw(this)}_assign(t){this!==t&&(At(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new jn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){At(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Pc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(Mr(this.auth));const t=await this.getIdToken();return await Il(this,Hw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,g,p,y,E;const w=(s=n.displayName)!==null&&s!==void 0?s:void 0,D=(o=n.email)!==null&&o!==void 0?o:void 0,B=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(f=n.photoURL)!==null&&f!==void 0?f:void 0,W=(g=n.tenantId)!==null&&g!==void 0?g:void 0,et=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,pt=(y=n.createdAt)!==null&&y!==void 0?y:void 0,dt=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ct,emailVerified:Rt,isAnonymous:ut,providerData:Ct,stsTokenManager:O}=n;At(ct&&O,t,"internal-error");const S=za.fromJSON(this.name,O);At(typeof ct=="string",t,"internal-error"),Sr(w,t.name),Sr(D,t.name),At(typeof Rt=="boolean",t,"internal-error"),At(typeof ut=="boolean",t,"internal-error"),Sr(B,t.name),Sr(Q,t.name),Sr(W,t.name),Sr(et,t.name),Sr(pt,t.name),Sr(dt,t.name);const I=new jn({uid:ct,auth:t,email:D,emailVerified:Rt,displayName:w,isAnonymous:ut,photoURL:Q,phoneNumber:B,tenantId:W,stsTokenManager:S,createdAt:pt,lastLoginAt:dt});return Ct&&Array.isArray(Ct)&&(I.providerData=Ct.map(x=>Object.assign({},x))),et&&(I._redirectEventId=et),I}static async _fromIdTokenResponse(t,n,s=!1){const o=new za;o.updateFromServerResponse(n);const u=new jn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Pc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];At(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?F0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),g=new za;g.updateFromIdToken(s);const p=new jn({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Kd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
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
 */const F_=new Map;function Hi(r){Qi(r instanceof Function,"Expected a class definition");let t=F_.get(r);return t?(Qi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,F_.set(r,t),t)}/**
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
 */class G0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}G0.type="NONE";const G_=G0;/**
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
 */function bc(r,t,n){return`firebase:${r}:${t}:${n}`}class ja{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=bc(this.userKey,o.apiKey,u),this.fullPersistenceKey=bc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await kc(this.auth,{idToken:t}).catch(()=>{});return n?jn._fromGetAccountInfoResponse(this.auth,n,t):null}return jn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new ja(Hi(G_),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Hi(G_);const f=bc(s,t.config.apiKey,t.name);let g=null;for(const y of n)try{const E=await y._get(f);if(E){let w;if(typeof E=="string"){const D=await kc(t,{idToken:E}).catch(()=>{});if(!D)break;w=await jn._fromGetAccountInfoResponse(t,D,E)}else w=jn._fromJSON(t,E);y!==u&&(g=w),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ja(u,t,s):(u=p[0],g&&await u._set(f,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new ja(u,t,s))}}/**
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
 */function Q_(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(X0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Q0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Z0(t))return"Blackberry";if(W0(t))return"Webos";if(K0(t))return"Safari";if((t.includes("chrome/")||Y0(t))&&!t.includes("edge/"))return"Chrome";if($0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Q0(r=Ye()){return/firefox\//i.test(r)}function K0(r=Ye()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Y0(r=Ye()){return/crios\//i.test(r)}function X0(r=Ye()){return/iemobile/i.test(r)}function $0(r=Ye()){return/android/i.test(r)}function Z0(r=Ye()){return/blackberry/i.test(r)}function W0(r=Ye()){return/webos/i.test(r)}function Tm(r=Ye()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Zw(r=Ye()){var t;return Tm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ww(){return dS()&&document.documentMode===10}function J0(r=Ye()){return Tm(r)||$0(r)||W0(r)||Z0(r)||/windows phone/i.test(r)||X0(r)}/**
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
 */function tT(r,t=[]){let n;switch(r){case"Browser":n=Q_(Ye());break;case"Worker":n=`${Q_(Ye())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Za}/${s}`}/**
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
 */class Jw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,g)=>{try{const p=t(u);f(p)}catch(p){g(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function t1(r,t={}){return Wa(r,"GET","/v2/passwordPolicy",eh(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const e1=6;class n1{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:e1,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,g;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(g=p.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class i1{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new K_(this),this.idTokenSubscription=new K_(this),this.beforeStateQueue=new Jw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Hi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await ja.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await kc(this,{idToken:t}),s=await jn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(zn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===g)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return At(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Pc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Lw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(zn(this.app))return Promise.reject(Mr(this));const n=t?Je(t):null;return n&&At(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&At(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return zn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await t1(this),n=new n1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Us("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await $w(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Hi(t)||this._popupRedirectResolver;At(n,this,"argument-error"),this.redirectPersistenceManager=await ja.create(this,[Hi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(At(g,this,"internal-error"),g.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return At(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=tT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&kw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nh(r){return Je(r)}class K_{constructor(t){this.auth=t,this.observer=null,this.addObserver=TS(n=>this.observer=n)}get next(){return At(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Em={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function r1(r){Em=r}function s1(r){return Em.loadJS(r)}function a1(){return Em.gapiScript}function o1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function l1(r,t){const n=Pl(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Os(u,t??{}))return o;Gi(o,"already-initialized")}return n.initialize({options:t})}function u1(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Hi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function c1(r,t,n){const s=nh(r);At(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=eT(t),{host:f,port:g}=h1(t),p=g===null?"":`:${g}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:g,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){At(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),At(Os(y,s.config.emulator)&&Os(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Vl(f)?(w0(`${u}//${f}${p}`),R0("Auth",!0)):f1()}function eT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function h1(r){const t=eT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Y_(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Y_(f)}}}function Y_(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function f1(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class nT{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return qi("not implemented")}_getIdTokenResponse(t){return qi("not implemented")}_linkToIdToken(t,n){return qi("not implemented")}_getReauthenticationResolver(t){return qi("not implemented")}}/**
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
 */async function Ba(r,t){return q0(r,"POST","/v1/accounts:signInWithIdp",eh(r,t))}/**
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
 */const d1="http://localhost";class xs extends nT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Gi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=pm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new xs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Ba(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ba(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ba(t,n)}buildRequest(){const t={requestUri:d1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=kl(n)}return t}}/**
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
 */class iT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ll extends iT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rr extends Ll{constructor(){super("facebook.com")}static credential(t){return xs._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rr.credentialFromTaggedObject(t)}static credentialFromError(t){return Rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rr.credential(t.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
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
 */class Ir extends Ll{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xs._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Ir.credential(n,s)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
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
 */class Cr extends Ll{constructor(){super("github.com")}static credential(t){return xs._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cr.credentialFromTaggedObject(t)}static credentialFromError(t){return Cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Cr.credential(t.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
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
 */class Dr extends Ll{constructor(){super("twitter.com")}static credential(t,n){return xs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Dr.credential(n,s)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
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
 */async function m1(r,t){return q0(r,"POST","/v1/accounts:signUp",eh(r,t))}/**
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
 */class Ur{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await jn._fromIdTokenResponse(t,s,o),f=X_(s);return new Ur({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=X_(s);return new Ur({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function X_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function g1(r){var t;if(zn(r.app))return Promise.reject(Mr(r));const n=nh(r);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new Ur({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await m1(n,{returnSecureToken:!0}),o=await Ur._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(o.user),o}/**
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
 */class Uc extends Gn{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Uc(t,n,s,o)}}function rT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(r,u,t,s):u})}async function p1(r,t,n=!1){const s=await Il(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Ur._forOperation(r,"link",s)}/**
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
 */async function y1(r,t,n=!1){const{auth:s}=r;if(zn(s.app))return Promise.reject(Mr(s));const o="reauthenticate";try{const u=await Il(r,rT(s,o,t,r),n);At(u.idToken,s,"internal-error");const f=vm(u.idToken);At(f,s,"internal-error");const{sub:g}=f;return At(r.uid===g,s,"user-mismatch"),Ur._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Gi(s,"user-mismatch"),u}}/**
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
 */async function _1(r,t,n=!1){if(zn(r.app))return Promise.reject(Mr(r));const s="signIn",o=await rT(r,s,t),u=await Ur._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function v1(r,t,n,s){return Je(r).onIdTokenChanged(t,n,s)}function T1(r,t,n){return Je(r).beforeAuthStateChanged(t,n)}function E1(r,t,n,s){return Je(r).onAuthStateChanged(t,n,s)}const Lc="__sak";/**
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
 */class sT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const A1=1e3,b1=10;class aT extends sT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);Ww()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,b1):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},A1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}aT.type="LOCAL";const S1=aT;/**
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
 */class oT extends sT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}oT.type="SESSION";const lT=oT;/**
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
 */function w1(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ih{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new ih(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(f).map(async y=>y(n.origin,u)),p=await w1(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ih.receivers=[];/**
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
 */function Am(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class R1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((g,p)=>{const y=Am("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(w){const D=w;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),g(D.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function ci(){return window}function I1(r){ci().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function uT(){return typeof ci().WorkerGlobalScope<"u"&&typeof ci().importScripts=="function"}async function C1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function N1(){return uT()?self:null}/**
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
 */const cT="firebaseLocalStorageDb",O1=1,zc="firebaseLocalStorage",hT="fbase_key";class zl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rh(r,t){return r.transaction([zc],t?"readwrite":"readonly").objectStore(zc)}function x1(){const r=indexedDB.deleteDatabase(cT);return new zl(r).toPromise()}function Yd(){const r=indexedDB.open(cT,O1);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(zc,{keyPath:hT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(zc)?t(s):(s.close(),await x1(),t(await Yd()))})})}async function $_(r,t,n){const s=rh(r,!0).put({[hT]:t,value:n});return new zl(s).toPromise()}async function M1(r,t){const n=rh(r,!1).get(t),s=await new zl(n).toPromise();return s===void 0?null:s.value}function Z_(r,t){const n=rh(r,!0).delete(t);return new zl(n).toPromise()}const V1=800,k1=3;class fT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>k1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ih._getInstance(N1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await C1(),!this.activeServiceWorker)return;this.sender=new R1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||D1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yd();return await $_(t,Lc,"1"),await Z_(t,Lc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$_(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>M1(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Z_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=rh(o,!1).getAll();return new zl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fT.type="LOCAL";const P1=fT;new Ul(3e4,6e4);/**
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
 */function U1(r,t){return t?Hi(t):(At(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class bm extends nT{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ba(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ba(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ba(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function L1(r){return _1(r.auth,new bm(r),r.bypassAuthState)}function z1(r){const{auth:t,user:n}=r;return At(n,t,"internal-error"),y1(n,new bm(r),r.bypassAuthState)}async function j1(r){const{auth:t,user:n}=r;return At(n,t,"internal-error"),p1(n,new bm(r),r.bypassAuthState)}/**
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
 */class dT{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:g}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return L1;case"linkViaPopup":case"linkViaRedirect":return j1;case"reauthViaPopup":case"reauthViaRedirect":return z1;default:Gi(this.auth,"internal-error")}}resolve(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const B1=new Ul(2e3,1e4);class La extends dT{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,La.currentPopupAction&&La.currentPopupAction.cancel(),La.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return At(t,this.auth,"internal-error"),t}async onExecution(){Qi(this.filter.length===1,"Popup operations only handle one event");const t=Am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,La.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,B1.get())};t()}}La.currentPopupAction=null;/**
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
 */const q1="pendingRedirect",Sc=new Map;class H1 extends dT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Sc.get(this.auth._key());if(!t){try{const s=await F1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Sc.set(this.auth._key(),t)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function F1(r,t){const n=K1(t),s=Q1(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function G1(r,t){Sc.set(r._key(),t)}function Q1(r){return Hi(r._redirectPersistence)}function K1(r){return bc(q1,r.config.apiKey,r.name)}async function Y1(r,t,n=!1){if(zn(r.app))return Promise.reject(Mr(r));const s=nh(r),o=U1(s,t),f=await new H1(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const X1=10*60*1e3;class $1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Z1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!mT(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ui(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=X1&&this.cachedEventUids.clear(),this.cachedEventUids.has(W_(t))}saveEventToCache(t){this.cachedEventUids.add(W_(t)),this.lastProcessedEventTime=Date.now()}}function W_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function mT({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Z1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mT(r);default:return!1}}/**
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
 */async function W1(r,t={}){return Wa(r,"GET","/v1/projects",t)}/**
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
 */const J1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tR=/^https?/;async function eR(r){if(r.config.emulator)return;const{authorizedDomains:t}=await W1(r);for(const n of t)try{if(nR(n))return}catch{}Gi(r,"unauthorized-domain")}function nR(r){const t=Qd(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!tR.test(n))return!1;if(J1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const iR=new Ul(3e4,6e4);function J_(){const r=ci().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function rR(r){return new Promise((t,n)=>{var s,o,u;function f(){J_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{J_(),n(ui(r,"network-request-failed"))},timeout:iR.get()})}if(!((o=(s=ci().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=ci().gapi)===null||u===void 0)&&u.load)f();else{const g=o1("iframefcb");return ci()[g]=()=>{gapi.load?f():n(ui(r,"network-request-failed"))},s1(`${a1()}?onload=${g}`).catch(p=>n(p))}}).catch(t=>{throw wc=null,t})}let wc=null;function sR(r){return wc=wc||rR(r),wc}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const aR=new Ul(5e3,15e3),oR="__/auth/iframe",lR="emulator/auth/iframe",uR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hR(r){const t=r.config;At(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?_m(t,lR):`https://${r.config.authDomain}/${oR}`,s={apiKey:t.apiKey,appName:r.name,v:Za},o=cR.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${kl(s).slice(1)}`}async function fR(r){const t=await sR(r),n=ci().gapi;return At(n,r,"internal-error"),t.open({where:document.body,url:hR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=ui(r,"network-request-failed"),g=ci().setTimeout(()=>{u(f)},aR.get());function p(){ci().clearTimeout(g),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const dR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mR=500,gR=600,pR="_blank",yR="http://localhost";class tv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _R(r,t,n,s=mR,o=gR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p=Object.assign(Object.assign({},dR),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Ye().toLowerCase();n&&(g=Y0(y)?pR:n),Q0(y)&&(t=t||yR,p.scrollbars="yes");const E=Object.entries(p).reduce((D,[B,Q])=>`${D}${B}=${Q},`,"");if(Zw(y)&&g!=="_self")return vR(t||"",g),new tv(null);const w=window.open(t||"",g,E);At(w,r,"popup-blocked");try{w.focus()}catch{}return new tv(w)}function vR(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const TR="__/auth/handler",ER="emulator/auth/handler",AR=encodeURIComponent("fac");async function ev(r,t,n,s,o,u){At(r.config.authDomain,r,"auth-domain-config-required"),At(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Za,eventId:o};if(t instanceof iT){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",vS(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,w]of Object.entries({}))f[E]=w}if(t instanceof Ll){const E=t.getScopes().filter(w=>w!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const E of Object.keys(g))g[E]===void 0&&delete g[E];const p=await r._getAppCheckToken(),y=p?`#${AR}=${encodeURIComponent(p)}`:"";return`${bR(r)}?${kl(g).slice(1)}${y}`}function bR({config:r}){return r.emulator?_m(r,ER):`https://${r.authDomain}/${TR}`}/**
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
 */const Md="webStorageSupport";class SR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lT,this._completeRedirectFn=Y1,this._overrideRedirectResult=G1}async _openPopup(t,n,s,o){var u;Qi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await ev(t,n,s,Qd(),o);return _R(t,f,Am())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await ev(t,n,s,Qd(),o);return I1(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Qi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await fR(t),s=new $1(t);return n.register("authEvent",o=>(At(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Md,{type:Md},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Md];f!==void 0&&n(!!f),Gi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return J0()||K0()||Tm()}}const wR=SR;var nv="@firebase/auth",iv="1.10.6";/**
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
 */class RR{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){At(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CR(r){di(new Hn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;At(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tT(r)},y=new i1(s,o,u,p);return u1(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),di(new Hn("auth-internal",t=>{const n=nh(t.getProvider("auth").getImmediate());return(s=>new RR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(nv,iv,IR(r)),On(nv,iv,"esm2017")}/**
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
 */const DR=5*60,NR=S0("authIdTokenMaxAge")||DR;let rv=null;const OR=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>NR)return;const o=n==null?void 0:n.token;rv!==o&&(rv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function xR(r=V0()){const t=Pl(r,"auth");if(t.isInitialized())return t.getImmediate();const n=l1(r,{popupRedirectResolver:wR,persistence:[P1,S1,lT]}),s=S0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=OR(u.toString());T1(n,f,()=>f(n.currentUser)),v1(n,g=>f(g))}}const o=A0("auth");return o&&c1(n,`http://${o}`),n}function MR(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}r1({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=ui("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",MR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CR("Browser");var sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,gT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(O,S){function I(){}I.prototype=S.prototype,O.D=S.prototype,O.prototype=new I,O.prototype.constructor=O,O.C=function(x,M,V){for(var C=Array(arguments.length-2),at=2;at<arguments.length;at++)C[at-2]=arguments[at];return S.prototype[M].apply(x,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,S,I){I||(I=0);var x=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)x[M]=S.charCodeAt(I++)|S.charCodeAt(I++)<<8|S.charCodeAt(I++)<<16|S.charCodeAt(I++)<<24;else for(M=0;16>M;++M)x[M]=S[I++]|S[I++]<<8|S[I++]<<16|S[I++]<<24;S=O.g[0],I=O.g[1],M=O.g[2];var V=O.g[3],C=S+(V^I&(M^V))+x[0]+3614090360&4294967295;S=I+(C<<7&4294967295|C>>>25),C=V+(M^S&(I^M))+x[1]+3905402710&4294967295,V=S+(C<<12&4294967295|C>>>20),C=M+(I^V&(S^I))+x[2]+606105819&4294967295,M=V+(C<<17&4294967295|C>>>15),C=I+(S^M&(V^S))+x[3]+3250441966&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(V^I&(M^V))+x[4]+4118548399&4294967295,S=I+(C<<7&4294967295|C>>>25),C=V+(M^S&(I^M))+x[5]+1200080426&4294967295,V=S+(C<<12&4294967295|C>>>20),C=M+(I^V&(S^I))+x[6]+2821735955&4294967295,M=V+(C<<17&4294967295|C>>>15),C=I+(S^M&(V^S))+x[7]+4249261313&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(V^I&(M^V))+x[8]+1770035416&4294967295,S=I+(C<<7&4294967295|C>>>25),C=V+(M^S&(I^M))+x[9]+2336552879&4294967295,V=S+(C<<12&4294967295|C>>>20),C=M+(I^V&(S^I))+x[10]+4294925233&4294967295,M=V+(C<<17&4294967295|C>>>15),C=I+(S^M&(V^S))+x[11]+2304563134&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(V^I&(M^V))+x[12]+1804603682&4294967295,S=I+(C<<7&4294967295|C>>>25),C=V+(M^S&(I^M))+x[13]+4254626195&4294967295,V=S+(C<<12&4294967295|C>>>20),C=M+(I^V&(S^I))+x[14]+2792965006&4294967295,M=V+(C<<17&4294967295|C>>>15),C=I+(S^M&(V^S))+x[15]+1236535329&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(M^V&(I^M))+x[1]+4129170786&4294967295,S=I+(C<<5&4294967295|C>>>27),C=V+(I^M&(S^I))+x[6]+3225465664&4294967295,V=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(V^S))+x[11]+643717713&4294967295,M=V+(C<<14&4294967295|C>>>18),C=I+(V^S&(M^V))+x[0]+3921069994&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(M^V&(I^M))+x[5]+3593408605&4294967295,S=I+(C<<5&4294967295|C>>>27),C=V+(I^M&(S^I))+x[10]+38016083&4294967295,V=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(V^S))+x[15]+3634488961&4294967295,M=V+(C<<14&4294967295|C>>>18),C=I+(V^S&(M^V))+x[4]+3889429448&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(M^V&(I^M))+x[9]+568446438&4294967295,S=I+(C<<5&4294967295|C>>>27),C=V+(I^M&(S^I))+x[14]+3275163606&4294967295,V=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(V^S))+x[3]+4107603335&4294967295,M=V+(C<<14&4294967295|C>>>18),C=I+(V^S&(M^V))+x[8]+1163531501&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(M^V&(I^M))+x[13]+2850285829&4294967295,S=I+(C<<5&4294967295|C>>>27),C=V+(I^M&(S^I))+x[2]+4243563512&4294967295,V=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(V^S))+x[7]+1735328473&4294967295,M=V+(C<<14&4294967295|C>>>18),C=I+(V^S&(M^V))+x[12]+2368359562&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(I^M^V)+x[5]+4294588738&4294967295,S=I+(C<<4&4294967295|C>>>28),C=V+(S^I^M)+x[8]+2272392833&4294967295,V=S+(C<<11&4294967295|C>>>21),C=M+(V^S^I)+x[11]+1839030562&4294967295,M=V+(C<<16&4294967295|C>>>16),C=I+(M^V^S)+x[14]+4259657740&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(I^M^V)+x[1]+2763975236&4294967295,S=I+(C<<4&4294967295|C>>>28),C=V+(S^I^M)+x[4]+1272893353&4294967295,V=S+(C<<11&4294967295|C>>>21),C=M+(V^S^I)+x[7]+4139469664&4294967295,M=V+(C<<16&4294967295|C>>>16),C=I+(M^V^S)+x[10]+3200236656&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(I^M^V)+x[13]+681279174&4294967295,S=I+(C<<4&4294967295|C>>>28),C=V+(S^I^M)+x[0]+3936430074&4294967295,V=S+(C<<11&4294967295|C>>>21),C=M+(V^S^I)+x[3]+3572445317&4294967295,M=V+(C<<16&4294967295|C>>>16),C=I+(M^V^S)+x[6]+76029189&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(I^M^V)+x[9]+3654602809&4294967295,S=I+(C<<4&4294967295|C>>>28),C=V+(S^I^M)+x[12]+3873151461&4294967295,V=S+(C<<11&4294967295|C>>>21),C=M+(V^S^I)+x[15]+530742520&4294967295,M=V+(C<<16&4294967295|C>>>16),C=I+(M^V^S)+x[2]+3299628645&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(M^(I|~V))+x[0]+4096336452&4294967295,S=I+(C<<6&4294967295|C>>>26),C=V+(I^(S|~M))+x[7]+1126891415&4294967295,V=S+(C<<10&4294967295|C>>>22),C=M+(S^(V|~I))+x[14]+2878612391&4294967295,M=V+(C<<15&4294967295|C>>>17),C=I+(V^(M|~S))+x[5]+4237533241&4294967295,I=M+(C<<21&4294967295|C>>>11),C=S+(M^(I|~V))+x[12]+1700485571&4294967295,S=I+(C<<6&4294967295|C>>>26),C=V+(I^(S|~M))+x[3]+2399980690&4294967295,V=S+(C<<10&4294967295|C>>>22),C=M+(S^(V|~I))+x[10]+4293915773&4294967295,M=V+(C<<15&4294967295|C>>>17),C=I+(V^(M|~S))+x[1]+2240044497&4294967295,I=M+(C<<21&4294967295|C>>>11),C=S+(M^(I|~V))+x[8]+1873313359&4294967295,S=I+(C<<6&4294967295|C>>>26),C=V+(I^(S|~M))+x[15]+4264355552&4294967295,V=S+(C<<10&4294967295|C>>>22),C=M+(S^(V|~I))+x[6]+2734768916&4294967295,M=V+(C<<15&4294967295|C>>>17),C=I+(V^(M|~S))+x[13]+1309151649&4294967295,I=M+(C<<21&4294967295|C>>>11),C=S+(M^(I|~V))+x[4]+4149444226&4294967295,S=I+(C<<6&4294967295|C>>>26),C=V+(I^(S|~M))+x[11]+3174756917&4294967295,V=S+(C<<10&4294967295|C>>>22),C=M+(S^(V|~I))+x[2]+718787259&4294967295,M=V+(C<<15&4294967295|C>>>17),C=I+(V^(M|~S))+x[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(M+(C<<21&4294967295|C>>>11))&4294967295,O.g[2]=O.g[2]+M&4294967295,O.g[3]=O.g[3]+V&4294967295}s.prototype.u=function(O,S){S===void 0&&(S=O.length);for(var I=S-this.blockSize,x=this.B,M=this.h,V=0;V<S;){if(M==0)for(;V<=I;)o(this,O,V),V+=this.blockSize;if(typeof O=="string"){for(;V<S;)if(x[M++]=O.charCodeAt(V++),M==this.blockSize){o(this,x),M=0;break}}else for(;V<S;)if(x[M++]=O[V++],M==this.blockSize){o(this,x),M=0;break}}this.h=M,this.o+=S},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;var I=8*this.o;for(S=O.length-8;S<O.length;++S)O[S]=I&255,I/=256;for(this.u(O),O=Array(16),S=I=0;4>S;++S)for(var x=0;32>x;x+=8)O[I++]=this.g[S]>>>x&255;return O};function u(O,S){var I=g;return Object.prototype.hasOwnProperty.call(I,O)?I[O]:I[O]=S(O)}function f(O,S){this.h=S;for(var I=[],x=!0,M=O.length-1;0<=M;M--){var V=O[M]|0;x&&V==S||(I[M]=V,x=!1)}this.g=I}var g={};function p(O){return-128<=O&&128>O?u(O,function(S){return new f([S|0],0>S?-1:0)}):new f([O|0],0>O?-1:0)}function y(O){if(isNaN(O)||!isFinite(O))return w;if(0>O)return et(y(-O));for(var S=[],I=1,x=0;O>=I;x++)S[x]=O/I|0,I*=4294967296;return new f(S,0)}function E(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return et(E(O.substring(1),S));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=y(Math.pow(S,8)),x=w,M=0;M<O.length;M+=8){var V=Math.min(8,O.length-M),C=parseInt(O.substring(M,M+V),S);8>V?(V=y(Math.pow(S,V)),x=x.j(V).add(y(C))):(x=x.j(I),x=x.add(y(C)))}return x}var w=p(0),D=p(1),B=p(16777216);r=f.prototype,r.m=function(){if(W(this))return-et(this).m();for(var O=0,S=1,I=0;I<this.g.length;I++){var x=this.i(I);O+=(0<=x?x:4294967296+x)*S,S*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(Q(this))return"0";if(W(this))return"-"+et(this).toString(O);for(var S=y(Math.pow(O,6)),I=this,x="";;){var M=Rt(I,S).g;I=pt(I,M.j(S));var V=((0<I.g.length?I.g[0]:I.h)>>>0).toString(O);if(I=M,Q(I))return V+x;for(;6>V.length;)V="0"+V;x=V+x}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function Q(O){if(O.h!=0)return!1;for(var S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function W(O){return O.h==-1}r.l=function(O){return O=pt(this,O),W(O)?-1:Q(O)?0:1};function et(O){for(var S=O.g.length,I=[],x=0;x<S;x++)I[x]=~O.g[x];return new f(I,~O.h).add(D)}r.abs=function(){return W(this)?et(this):this},r.add=function(O){for(var S=Math.max(this.g.length,O.g.length),I=[],x=0,M=0;M<=S;M++){var V=x+(this.i(M)&65535)+(O.i(M)&65535),C=(V>>>16)+(this.i(M)>>>16)+(O.i(M)>>>16);x=C>>>16,V&=65535,C&=65535,I[M]=C<<16|V}return new f(I,I[I.length-1]&-2147483648?-1:0)};function pt(O,S){return O.add(et(S))}r.j=function(O){if(Q(this)||Q(O))return w;if(W(this))return W(O)?et(this).j(et(O)):et(et(this).j(O));if(W(O))return et(this.j(et(O)));if(0>this.l(B)&&0>O.l(B))return y(this.m()*O.m());for(var S=this.g.length+O.g.length,I=[],x=0;x<2*S;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(var M=0;M<O.g.length;M++){var V=this.i(x)>>>16,C=this.i(x)&65535,at=O.i(M)>>>16,bt=O.i(M)&65535;I[2*x+2*M]+=C*bt,dt(I,2*x+2*M),I[2*x+2*M+1]+=V*bt,dt(I,2*x+2*M+1),I[2*x+2*M+1]+=C*at,dt(I,2*x+2*M+1),I[2*x+2*M+2]+=V*at,dt(I,2*x+2*M+2)}for(x=0;x<S;x++)I[x]=I[2*x+1]<<16|I[2*x];for(x=S;x<2*S;x++)I[x]=0;return new f(I,0)};function dt(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function ct(O,S){this.g=O,this.h=S}function Rt(O,S){if(Q(S))throw Error("division by zero");if(Q(O))return new ct(w,w);if(W(O))return S=Rt(et(O),S),new ct(et(S.g),et(S.h));if(W(S))return S=Rt(O,et(S)),new ct(et(S.g),S.h);if(30<O.g.length){if(W(O)||W(S))throw Error("slowDivide_ only works with positive integers.");for(var I=D,x=S;0>=x.l(O);)I=ut(I),x=ut(x);var M=Ct(I,1),V=Ct(x,1);for(x=Ct(x,2),I=Ct(I,2);!Q(x);){var C=V.add(x);0>=C.l(O)&&(M=M.add(I),V=C),x=Ct(x,1),I=Ct(I,1)}return S=pt(O,M.j(S)),new ct(M,S)}for(M=w;0<=O.l(S);){for(I=Math.max(1,Math.floor(O.m()/S.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),V=y(I),C=V.j(S);W(C)||0<C.l(O);)I-=x,V=y(I),C=V.j(S);Q(V)&&(V=D),M=M.add(V),O=pt(O,C)}return new ct(M,O)}r.A=function(O){return Rt(this,O).h},r.and=function(O){for(var S=Math.max(this.g.length,O.g.length),I=[],x=0;x<S;x++)I[x]=this.i(x)&O.i(x);return new f(I,this.h&O.h)},r.or=function(O){for(var S=Math.max(this.g.length,O.g.length),I=[],x=0;x<S;x++)I[x]=this.i(x)|O.i(x);return new f(I,this.h|O.h)},r.xor=function(O){for(var S=Math.max(this.g.length,O.g.length),I=[],x=0;x<S;x++)I[x]=this.i(x)^O.i(x);return new f(I,this.h^O.h)};function ut(O){for(var S=O.g.length+1,I=[],x=0;x<S;x++)I[x]=O.i(x)<<1|O.i(x-1)>>>31;return new f(I,O.h)}function Ct(O,S){var I=S>>5;S%=32;for(var x=O.g.length-I,M=[],V=0;V<x;V++)M[V]=0<S?O.i(V+I)>>>S|O.i(V+I+1)<<32-S:O.i(V+I);return new f(M,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,gT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Vr=f}).apply(typeof sv<"u"?sv:typeof self<"u"?self:typeof window<"u"?window:{});var pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pT,gl,yT,Rc,Xd,_T,vT,TT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,_){return c==Array.prototype||c==Object.prototype||(c[m]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof pc=="object"&&pc];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,m){if(m)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var P=c[A];if(!(P in _))break t;_=_[P]}c=c[c.length-1],A=_[c],m=m(A),m!=A&&m!=null&&t(_,c,{configurable:!0,writable:!0,value:m})}}function u(c,m){c instanceof String&&(c+="");var _=0,A=!1,P={next:function(){if(!A&&_<c.length){var H=_++;return{value:m(H,c[H]),done:!1}}return A=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}o("Array.prototype.values",function(c){return c||function(){return u(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function p(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function y(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function E(c,m,_){return c.call.apply(c.bind,arguments)}function w(c,m,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,A),c.apply(m,P)}}return function(){return c.apply(m,arguments)}}function D(c,m,_){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,D.apply(null,arguments)}function B(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function Q(c,m){function _(){}_.prototype=m.prototype,c.aa=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,P,H){for(var rt=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)rt[Lt-2]=arguments[Lt];return m.prototype[P].apply(A,rt)}}function W(c){const m=c.length;if(0<m){const _=Array(m);for(let A=0;A<m;A++)_[A]=c[A];return _}return[]}function et(c,m){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const P=c.length||0,H=A.length||0;c.length=P+H;for(let rt=0;rt<H;rt++)c[P+rt]=A[rt]}else c.push(A)}}class pt{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function dt(c){return/^[\s\xa0]*$/.test(c)}function ct(){var c=g.navigator;return c&&(c=c.userAgent)?c:""}function Rt(c){return Rt[" "](c),c}Rt[" "]=function(){};var ut=ct().indexOf("Gecko")!=-1&&!(ct().toLowerCase().indexOf("webkit")!=-1&&ct().indexOf("Edge")==-1)&&!(ct().indexOf("Trident")!=-1||ct().indexOf("MSIE")!=-1)&&ct().indexOf("Edge")==-1;function Ct(c,m,_){for(const A in c)m.call(_,c[A],A,c)}function O(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function S(c){const m={};for(const _ in c)m[_]=c[_];return m}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,m){let _,A;for(let P=1;P<arguments.length;P++){A=arguments[P];for(_ in A)c[_]=A[_];for(let H=0;H<I.length;H++)_=I[H],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function M(c){var m=1;c=c.split(":");const _=[];for(;0<m&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function V(c){g.setTimeout(()=>{throw c},0)}function C(){var c=it;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class at{constructor(){this.h=this.g=null}add(m,_){const A=bt.get();A.set(m,_),this.h?this.h.next=A:this.g=A,this.h=A}}var bt=new pt(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let st,Z=!1,it=new at,b=()=>{const c=g.Promise.resolve(void 0);st=()=>{c.then(G)}};var G=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){V(_)}var m=bt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}Z=!1};function nt(){this.s=this.s,this.C=this.C}nt.prototype.s=!1,nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ot=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};g.addEventListener("test",_,m),g.removeEventListener("test",_,m)}catch{}return c}();function St(c,m){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(ut){t:{try{Rt(m.nodeName);var P=!0;break t}catch{}P=!1}P||(m=null)}}else _=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement);this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:vt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&St.aa.h.call(this)}}Q(St,J);var vt={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),Ht=0;function pn(c,m,_,A,P){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!A,this.ha=P,this.key=++Ht,this.da=this.fa=!1}function Xi(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function gi(c){this.src=c,this.g={},this.h=0}gi.prototype.add=function(c,m,_,A,P){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var rt=Gr(c,m,A,P);return-1<rt?(m=c[rt],_||(m.fa=!1)):(m=new pn(m,this.src,H,!!A,P),m.fa=_,c.push(m)),m};function Fr(c,m){var _=m.type;if(_ in c.g){var A=c.g[_],P=Array.prototype.indexOf.call(A,m,void 0),H;(H=0<=P)&&Array.prototype.splice.call(A,P,1),H&&(Xi(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Gr(c,m,_,A){for(var P=0;P<c.length;++P){var H=c[P];if(!H.da&&H.listener==m&&H.capture==!!_&&H.ha==A)return P}return-1}var Qr="closure_lm_"+(1e6*Math.random()|0),ro={};function Gl(c,m,_,A,P){if(Array.isArray(m)){for(var H=0;H<m.length;H++)Gl(c,m[H],_,A,P);return null}return _=Ql(_),c&&c[te]?c.K(m,_,y(A)?!!A.capture:!1,P):yn(c,m,_,!1,A,P)}function yn(c,m,_,A,P,H){if(!m)throw Error("Invalid event type");var rt=y(P)?!!P.capture:!!P,Lt=Hs(c);if(Lt||(c[Qr]=Lt=new gi(c)),_=Lt.add(m,_,A,rt,H),_.proxy)return _;if(A=Th(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ot||(P=rt),P===void 0&&(P=!1),c.addEventListener(m.toString(),A,P);else if(c.attachEvent)c.attachEvent(Kr(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Th(){function c(_){return m.call(c.src,c.listener,_)}const m=Eh;return c}function so(c,m,_,A,P){if(Array.isArray(m))for(var H=0;H<m.length;H++)so(c,m[H],_,A,P);else A=y(A)?!!A.capture:!!A,_=Ql(_),c&&c[te]?(c=c.i,m=String(m).toString(),m in c.g&&(H=c.g[m],_=Gr(H,_,A,P),-1<_&&(Xi(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete c.g[m],c.h--)))):c&&(c=Hs(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Gr(m,_,A,P)),(_=-1<c?m[c]:null)&&qs(_))}function qs(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[te])Fr(m.i,c);else{var _=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(_,A,c.capture):m.detachEvent?m.detachEvent(Kr(_),A):m.addListener&&m.removeListener&&m.removeListener(A),(_=Hs(m))?(Fr(_,c),_.h==0&&(_.src=null,m[Qr]=null)):Xi(c)}}}function Kr(c){return c in ro?ro[c]:ro[c]="on"+c}function Eh(c,m){if(c.da)c=!0;else{m=new St(m,this);var _=c.listener,A=c.ha||c.src;c.fa&&qs(c),c=_.call(A,m)}return c}function Hs(c){return c=c[Qr],c instanceof gi?c:null}var ao="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ql(c){return typeof c=="function"?c:(c[ao]||(c[ao]=function(m){return c.handleEvent(m)}),c[ao])}function le(){nt.call(this),this.i=new gi(this),this.M=this,this.F=null}Q(le,nt),le.prototype[te]=!0,le.prototype.removeEventListener=function(c,m,_,A){so(this,c,m,_,A)};function Kt(c,m){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new J(m,c);else if(m instanceof J)m.target=m.target||c;else{var P=m;m=new J(A,c),x(m,P)}if(P=!0,_)for(var H=_.length-1;0<=H;H--){var rt=m.g=_[H];P=on(rt,A,!0,m)&&P}if(rt=m.g=c,P=on(rt,A,!0,m)&&P,P=on(rt,A,!1,m)&&P,_)for(H=0;H<_.length;H++)rt=m.g=_[H],P=on(rt,A,!1,m)&&P}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var _=c.g[m],A=0;A<_.length;A++)Xi(_[A]);delete c.g[m],c.h--}}this.F=null},le.prototype.K=function(c,m,_,A){return this.i.add(String(c),m,!1,_,A)},le.prototype.L=function(c,m,_,A){return this.i.add(String(c),m,!0,_,A)};function on(c,m,_,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var P=!0,H=0;H<m.length;++H){var rt=m[H];if(rt&&!rt.da&&rt.capture==_){var Lt=rt.listener,Ae=rt.ha||rt.src;rt.fa&&Fr(c.i,rt),P=Lt.call(Ae,A)!==!1&&P}}return P&&!A.defaultPrevented}function qe(c,m,_){if(typeof c=="function")_&&(c=D(c,_));else if(c&&typeof c.handleEvent=="function")c=D(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(c,m||0)}function Kl(c){c.g=qe(()=>{c.g=null,c.i&&(c.i=!1,Kl(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Ah extends nt{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Kl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yr(c){nt.call(this),this.h=c,this.g={}}Q(Yr,nt);var Xr=[];function $r(c){Ct(c.g,function(m,_){this.g.hasOwnProperty(_)&&qs(m)},c),c.g={}}Yr.prototype.N=function(){Yr.aa.N.call(this),$r(this)},Yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mn=g.JSON.stringify,Fs=g.JSON.parse,Zr=class{stringify(c){return g.JSON.stringify(c,void 0)}parse(c){return g.JSON.parse(c,void 0)}};function oo(){}oo.prototype.h=null;function lo(c){return c.h||(c.h=c.i())}function uo(){}var pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yi(){J.call(this,"d")}Q(yi,J);function co(){J.call(this,"c")}Q(co,J);var Qn={},ho=null;function $i(){return ho=ho||new le}Qn.La="serverreachability";function Gs(c){J.call(this,Qn.La,c)}Q(Gs,J);function Zi(c){const m=$i();Kt(m,new Gs(m))}Qn.STAT_EVENT="statevent";function Yl(c,m){J.call(this,Qn.STAT_EVENT,c),this.stat=m}Q(Yl,J);function re(c){const m=$i();Kt(m,new Yl(m,c))}Qn.Ma="timingevent";function Ee(c,m){J.call(this,Qn.Ma,c),this.size=m}Q(Ee,J);function ge(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){c()},m)}function _n(){this.g=!0}_n.prototype.xa=function(){this.g=!1};function fo(c,m,_,A,P,H){c.info(function(){if(c.g)if(H)for(var rt="",Lt=H.split("&"),Ae=0;Ae<Lt.length;Ae++){var zt=Lt[Ae].split("=");if(1<zt.length){var De=zt[0];zt=zt[1];var be=De.split("_");rt=2<=be.length&&be[1]=="type"?rt+(De+"="+zt+"&"):rt+(De+"=redacted&")}}else rt=null;else rt=H;return"XMLHTTP REQ ("+A+") [attempt "+P+"]: "+m+`
`+_+`
`+rt})}function bh(c,m,_,A,P,H,rt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+P+"]: "+m+`
`+_+`
`+H+" "+rt})}function Wi(c,m,_,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Wr(c,_)+(A?" "+A:"")})}function Xl(c,m){c.info(function(){return"TIMEOUT: "+m})}_n.prototype.info=function(){};function Wr(c,m){if(!c.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var P=A[1];if(Array.isArray(P)&&!(1>P.length)){var H=P[0];if(H!="noop"&&H!="stop"&&H!="close")for(var rt=1;rt<P.length;rt++)P[rt]=""}}}}return Mn(_)}catch{return m}}var Ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_i={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kn;function Yn(){}Q(Yn,oo),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},Kn=new Yn;function Xe(c,m,_,A){this.j=c,this.i=m,this.l=_,this.R=A||1,this.U=new Yr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new he}function he(){this.i=null,this.g="",this.h=!1}var mo={},Qs={};function Vn(c,m,_){c.L=1,c.v=is(ln(m)),c.m=_,c.P=!0,vi(c,null)}function vi(c,m){c.F=Date.now(),Jr(c),c.A=ln(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),To(_.i,"t",A),c.C=0,_=c.j.J,c.h=new he,c.g=hu(c.j,_?m:null,!c.m),0<c.O&&(c.M=new Ah(D(c.Y,c,c.g),c.O)),m=c.U,_=c.g,A=c.ca;var P="readystatechange";Array.isArray(P)||(P&&(Xr[0]=P.toString()),P=Xr);for(var H=0;H<P.length;H++){var rt=Gl(_,P[H],A||m.handleEvent,!1,m.h||m);if(!rt)break;m.g[rt.key]=rt}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Zi(),fo(c.i,c.u,c.A,c.l,c.R,c.m)}Xe.prototype.ca=function(c){c=c.target;const m=this.M;m&&An(c)==3?m.j():this.Y(c)},Xe.prototype.Y=function(c){try{if(c==this.g)t:{const be=An(this.g);var m=this.g.Ba();const Ii=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||iu(this.g)))){this.J||be!=4||m==7||(m==8||0>=Ii?Zi(3):Zi(2)),tr(this);var _=this.g.Z();this.X=_;e:if($l(this)){var A=iu(this.g);c="";var P=A.length,H=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ve(this),Xn(this);var rt="";break e}this.h.i=new g.TextDecoder}for(m=0;m<P;m++)this.h.h=!0,c+=this.h.i.decode(A[m],{stream:!(H&&m==P-1)});A.length=0,this.h.g+=c,this.C=0,rt=this.h.g}else rt=this.g.oa();if(this.o=_==200,bh(this.i,this.u,this.A,this.l,this.R,be,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Lt,Ae=this.g;if((Lt=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dt(Lt)){var zt=Lt;break e}}zt=null}if(_=zt)Wi(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ts(this,_);else{this.o=!1,this.s=3,re(12),Ve(this),Xn(this);break t}}if(this.P){_=!0;let ke;for(;!this.J&&this.C<rt.length;)if(ke=Zl(this,rt),ke==Qs){be==4&&(this.s=4,re(14),_=!1),Wi(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==mo){this.s=4,re(15),Wi(this.i,this.l,rt,"[Invalid Chunk]"),_=!1;break}else Wi(this.i,this.l,ke,null),ts(this,ke);if($l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||rt.length!=0||this.h.h||(this.s=1,re(16),_=!1),this.o=this.o&&_,!_)Wi(this.i,this.l,rt,"[Invalid Chunked Response]"),Ve(this),Xn(this);else if(0<rt.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+rt.length),hs(De),De.M=!0,re(11))}}else Wi(this.i,this.l,rt,null),ts(this,rt);be==4&&Ve(this),this.o&&!this.J&&(be==4?lu(this.j,this):(this.o=!1,Jr(this)))}else Ch(this.g),_==400&&0<rt.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),Ve(this),Xn(this)}}}catch{}finally{}};function $l(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Zl(c,m){var _=c.C,A=m.indexOf(`
`,_);return A==-1?Qs:(_=Number(m.substring(_,A)),isNaN(_)?mo:(A+=1,A+_>m.length?Qs:(m=m.slice(A,A+_),c.C=A+_,m)))}Xe.prototype.cancel=function(){this.J=!0,Ve(this)};function Jr(c){c.S=Date.now()+c.I,Wl(c,c.I)}function Wl(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ge(D(c.ba,c),m)}function tr(c){c.B&&(g.clearTimeout(c.B),c.B=null)}Xe.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Xl(this.i,this.A),this.L!=2&&(Zi(),re(17)),Ve(this),this.s=2,Xn(this)):Wl(this,this.S-c)};function Xn(c){c.j.G==0||c.J||lu(c.j,c)}function Ve(c){tr(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,$r(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function ts(c,m){try{var _=c.j;if(_.G!=0&&(_.g==c||go(_.h,c))){if(!c.K&&go(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var P=A;if(P[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ra(_),na(_);else break t;wo(_),re(18)}}else _.za=P[1],0<_.za-_.T&&37500>P[2]&&_.F&&_.v==0&&!_.C&&(_.C=ge(D(_.Za,_),6e3));if(1>=Ys(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ri(_,11)}else if((c.K||_.g==c)&&ra(_),!dt(m))for(P=_.Da.g.parse(m),m=0;m<P.length;m++){let zt=P[m];if(_.T=zt[0],zt=zt[1],_.G==2)if(zt[0]=="c"){_.K=zt[1],_.ia=zt[2];const De=zt[3];De!=null&&(_.la=De,_.j.info("VER="+_.la));const be=zt[4];be!=null&&(_.Aa=be,_.j.info("SVER="+_.Aa));const Ii=zt[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(A=1.5*Ii,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const ke=c.g;if(ke){const ni=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var H=A.h;H.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Xs(H,H.h),H.h=null))}if(A.D){const Io=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Io&&(A.ya=Io,$t(A.I,A.D,Io))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var rt=c;if(A.qa=cu(A,A.J?A.ia:null,A.W),rt.K){$e(A.h,rt);var Lt=rt,Ae=A.L;Ae&&(Lt.I=Ae),Lt.B&&(tr(Lt),Jr(Lt)),A.g=rt}else au(A);0<_.i.length&&ia(_)}else zt[0]!="stop"&&zt[0]!="close"||Ri(_,7);else _.G==3&&(zt[0]=="stop"||zt[0]=="close"?zt[0]=="stop"?Ri(_,7):bo(_):zt[0]!="noop"&&_.l&&_.l.ta(zt),_.v=0)}}Zi(4)}catch{}}var Jl=class{constructor(c,m){this.g=c,this.map=m}};function Ti(c){this.l=c||10,g.PerformanceNavigationTiming?(c=g.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ks(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ys(c){return c.h?1:c.g?c.g.size:0}function go(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Xs(c,m){c.g?c.g.add(m):c.h=m}function $e(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Ti.prototype.cancel=function(){if(this.i=po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function po(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.D);return m}return W(c.i)}function Sh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var m=[],_=c.length,A=0;A<_;A++)m.push(c[A]);return m}m=[],_=0;for(A in c)m[_++]=c[A];return m}function $s(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var m=[];c=c.length;for(var _=0;_<c;_++)m.push(_);return m}m=[],_=0;for(const A in c)m[_++]=A;return m}}}function yo(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var _=$s(c),A=Sh(c),P=A.length,H=0;H<P;H++)m.call(void 0,A[H],_&&_[H],c)}var es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wh(c,m){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),P=null;if(0<=A){var H=c[_].substring(0,A);P=c[_].substring(A+1)}else H=c[_];m(H,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function pe(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof pe){this.h=c.h,ns(this,c.j),this.o=c.o,this.g=c.g,er(this,c.s),this.l=c.l;var m=c.i,_=new Ai;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Ei(this,_),this.m=c.m}else c&&(m=String(c).match(es))?(this.h=!1,ns(this,m[1]||"",!0),this.o=vn(m[2]||""),this.g=vn(m[3]||"",!0),er(this,m[4]),this.l=vn(m[5]||"",!0),Ei(this,m[6]||"",!0),this.m=vn(m[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}pe.prototype.toString=function(){var c=[],m=this.j;m&&c.push(rs(m,_o,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(rs(m,_o,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(rs(_,_.charAt(0)=="/"?Rh:vo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",rs(_,Zs)),c.join("")};function ln(c){return new pe(c)}function ns(c,m,_){c.j=_?vn(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function er(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function Ei(c,m,_){m instanceof Ai?(c.i=m,eu(c.i,c.h)):(_||(m=rs(m,Ih)),c.i=new Ai(m,c.h))}function $t(c,m,_){c.i.set(m,_)}function is(c){return $t(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function vn(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function rs(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,tu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function tu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var _o=/[#\/\?@]/g,vo=/[#\?:]/g,Rh=/[#\?]/g,Ih=/[#\?@]/g,Zs=/#/g;function Ai(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Tn(c){c.g||(c.g=new Map,c.h=0,c.i&&wh(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Ai.prototype,r.add=function(c,m){Tn(this),this.i=null,c=$n(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function bi(c,m){Tn(c),m=$n(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Si(c,m){return Tn(c),m=$n(c,m),c.g.has(m)}r.forEach=function(c,m){Tn(this),this.g.forEach(function(_,A){_.forEach(function(P){c.call(m,P,A,this)},this)},this)},r.na=function(){Tn(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let A=0;A<m.length;A++){const P=c[A];for(let H=0;H<P.length;H++)_.push(m[A])}return _},r.V=function(c){Tn(this);let m=[];if(typeof c=="string")Si(this,c)&&(m=m.concat(this.g.get($n(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)m=m.concat(c[_])}return m},r.set=function(c,m){return Tn(this),this.i=null,c=$n(this,c),Si(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function To(c,m,_){bi(c,m),0<_.length&&(c.i=null,c.g.set($n(c,m),W(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var A=m[_];const H=encodeURIComponent(String(A)),rt=this.V(A);for(A=0;A<rt.length;A++){var P=H;rt[A]!==""&&(P+="="+encodeURIComponent(String(rt[A]))),c.push(P)}}return this.i=c.join("&")};function $n(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function eu(c,m){m&&!c.j&&(Tn(c),c.i=null,c.g.forEach(function(_,A){var P=A.toLowerCase();A!=P&&(bi(this,A),To(this,P,_))},c)),c.j=m}function ss(c,m){const _=new _n;if(g.Image){const A=new Image;A.onload=B(En,_,"TestLoadImage: loaded",!0,m,A),A.onerror=B(En,_,"TestLoadImage: error",!1,m,A),A.onabort=B(En,_,"TestLoadImage: abort",!1,m,A),A.ontimeout=B(En,_,"TestLoadImage: timeout",!1,m,A),g.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function kn(c,m){const _=new _n,A=new AbortController,P=setTimeout(()=>{A.abort(),En(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(H=>{clearTimeout(P),H.ok?En(_,"TestPingServer: ok",!0,m):En(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),En(_,"TestPingServer: error",!1,m)})}function En(c,m,_,A,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),A(_)}catch{}}function as(){this.g=new Zr}function Zn(c,m,_){const A=_||"";try{yo(c,function(P,H){let rt=P;y(P)&&(rt=Mn(P)),m.push(A+H+"="+encodeURIComponent(rt))})}catch(P){throw m.push(A+"type="+encodeURIComponent("_badmap")),P}}function nr(c){this.l=c.Ub||null,this.j=c.eb||!1}Q(nr,oo),nr.prototype.g=function(){return new wi(this.l,this.j)},nr.prototype.i=function(c){return function(){return c}}({});function wi(c,m){le.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(wi,le),r=wi.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Jn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Wn(this):Jn(this),this.readyState==3&&Eo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Wn(this))},r.Qa=function(c){this.g&&(this.response=c,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Jn(c)}r.setRequestHeader=function(c,m){this.u.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function Jn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ao(c){let m="";return Ct(c,function(_,A){m+=A,m+=":",m+=_,m+=`\r
`}),m}function Ce(c,m,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Ao(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):$t(c,m,_))}function Gt(c){le.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(Gt,le);var Ws=/^https?$/i,os=["POST","PUT"];r=Gt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,m,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kn.g(),this.v=this.o?lo(this.o):lo(Kn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(H){nu(this,H);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var P in A)_.set(P,A[P]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())_.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),P=g.FormData&&c instanceof g.FormData,!(0<=Array.prototype.indexOf.call(os,m,void 0))||A||P||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,rt]of _)this.g.setRequestHeader(H,rt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ls(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){nu(this,H)}};function nu(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,Js(c),ti(c)}function Js(c){c.A||(c.A=!0,Kt(c,"complete"),Kt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Kt(this,"complete"),Kt(this,"abort"),ti(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),Gt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},r.bb=function(){ta(this)};function ta(c){if(c.h&&typeof f<"u"&&(!c.v[1]||An(c)!=4||c.Z()!=2)){if(c.u&&An(c)==4)qe(c.Ea,0,c);else if(Kt(c,"readystatechange"),An(c)==4){c.h=!1;try{const rt=c.Z();t:switch(rt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var A;if(A=rt===0){var P=String(c.D).match(es)[1]||null;!P&&g.self&&g.self.location&&(P=g.self.location.protocol.slice(0,-1)),A=!Ws.test(P?P.toLowerCase():"")}_=A}if(_)Kt(c,"complete"),Kt(c,"success");else{c.m=6;try{var H=2<An(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",Js(c)}}finally{ti(c)}}}}function ti(c,m){if(c.g){ls(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Kt(c,"ready");try{_.onreadystatechange=A}catch{}}}function ls(c){c.I&&(g.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function An(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Fs(m)}};function iu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ch(c){const m={};c=(c.g&&2<=An(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(dt(c[A]))continue;var _=M(c[A]);const P=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=m[P]||[];m[P]=H,H.push(_)}O(m,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function ea(c){this.Aa=0,this.i=[],this.j=new _n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,c),this.cb=us("retryDelaySeedMs",1e4,c),this.Wa=us("forwardChannelMaxRetries",2,c),this.wa=us("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ti(c&&c.concurrentRequestLimit),this.Da=new as,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ea.prototype,r.la=8,r.G=1,r.connect=function(c,m,_,A){re(0),this.W=c,this.H=m||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=cu(this,null,this.W),ia(this)};function bo(c){if(ru(c),c.G==3){var m=c.U++,_=ln(c.I);if($t(_,"SID",c.K),$t(_,"RID",m),$t(_,"TYPE","terminate"),cs(c,_),m=new Xe(c,c.j,m),m.L=2,m.v=is(ln(_)),_=!1,g.navigator&&g.navigator.sendBeacon)try{_=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&g.Image&&(new Image().src=m.v,_=!0),_||(m.g=hu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Jr(m)}uu(c)}function na(c){c.g&&(hs(c),c.g.cancel(),c.g=null)}function ru(c){na(c),c.u&&(g.clearTimeout(c.u),c.u=null),ra(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&g.clearTimeout(c.s),c.s=null)}function ia(c){if(!Ks(c.h)&&!c.s){c.s=!0;var m=c.Ga;st||b(),Z||(st(),Z=!0),it.add(m,c),c.B=0}}function Dh(c,m){return Ys(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ge(D(c.Ga,c,m),Ro(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const P=new Xe(this,this.j,c);let H=this.o;if(this.S&&(H?(H=S(H),x(H,this.S)):H=this.S),this.m!==null||this.O||(P.H=H,H=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=su(this,P,m),_=ln(this.I),$t(_,"RID",c),$t(_,"CVER",22),this.D&&$t(_,"X-HTTP-Session-Id",this.D),cs(this,_),H&&(this.O?m="headers="+encodeURIComponent(String(Ao(H)))+"&"+m:this.m&&Ce(_,this.m,H)),Xs(this.h,P),this.Ua&&$t(_,"TYPE","init"),this.P?($t(_,"$req",m),$t(_,"SID","null"),P.T=!0,Vn(P,_,null)):Vn(P,_,m),this.G=2}}else this.G==3&&(c?So(this,c):this.i.length==0||Ks(this.h)||So(this))};function So(c,m){var _;m?_=m.l:_=c.U++;const A=ln(c.I);$t(A,"SID",c.K),$t(A,"RID",_),$t(A,"AID",c.T),cs(c,A),c.m&&c.o&&Ce(A,c.m,c.o),_=new Xe(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),m&&(c.i=m.D.concat(c.i)),m=su(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Xs(c.h,_),Vn(_,A,m)}function cs(c,m){c.H&&Ct(c.H,function(_,A){$t(m,A,_)}),c.l&&yo({},function(_,A){$t(m,A,_)})}function su(c,m,_){_=Math.min(c.i.length,_);var A=c.l?D(c.l.Na,c.l,c):null;t:{var P=c.i;let H=-1;for(;;){const rt=["count="+_];H==-1?0<_?(H=P[0].g,rt.push("ofs="+H)):H=0:rt.push("ofs="+H);let Lt=!0;for(let Ae=0;Ae<_;Ae++){let zt=P[Ae].g;const De=P[Ae].map;if(zt-=H,0>zt)H=Math.max(0,P[Ae].g-100),Lt=!1;else try{Zn(De,rt,"req"+zt+"_")}catch{A&&A(De)}}if(Lt){A=rt.join("&");break t}}}return c=c.i.splice(0,_),m.D=c,A}function au(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;st||b(),Z||(st(),Z=!0),it.add(m,c),c.v=0}}function wo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ge(D(c.Fa,c),Ro(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,ou(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ge(D(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,re(10),na(this),ou(this))};function hs(c){c.A!=null&&(g.clearTimeout(c.A),c.A=null)}function ou(c){c.g=new Xe(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=ln(c.qa);$t(m,"RID","rpc"),$t(m,"SID",c.K),$t(m,"AID",c.T),$t(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&$t(m,"TO",c.ja),$t(m,"TYPE","xmlhttp"),cs(c,m),c.m&&c.o&&Ce(m,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=is(ln(m)),_.m=null,_.P=!0,vi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,na(this),wo(this),re(19))};function ra(c){c.C!=null&&(g.clearTimeout(c.C),c.C=null)}function lu(c,m){var _=null;if(c.g==m){ra(c),hs(c),c.g=null;var A=2}else if(go(c.h,m))_=m.D,$e(c.h,m),A=1;else return;if(c.G!=0){if(m.o)if(A==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var P=c.B;A=$i(),Kt(A,new Ee(A,_)),ia(c)}else au(c);else if(P=m.s,P==3||P==0&&0<m.X||!(A==1&&Dh(c,m)||A==2&&wo(c)))switch(_&&0<_.length&&(m=c.h,m.i=m.i.concat(_)),P){case 1:Ri(c,5);break;case 4:Ri(c,10);break;case 3:Ri(c,6);break;default:Ri(c,2)}}}function Ro(c,m){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*m}function Ri(c,m){if(c.j.info("Error code "+m),m==2){var _=D(c.fb,c),A=c.Xa;const P=!A;A=new pe(A||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||ns(A,"https"),is(A),P?ss(A.toString(),_):kn(A.toString(),_)}else re(2);c.G=0,c.l&&c.l.sa(m),uu(c),ru(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function uu(c){if(c.G=0,c.ka=[],c.l){const m=po(c.h);(m.length!=0||c.i.length!=0)&&(et(c.ka,m),et(c.ka,c.i),c.h.i.length=0,W(c.i),c.i.length=0),c.l.ra()}}function cu(c,m,_){var A=_ instanceof pe?ln(_):new pe(_);if(A.g!="")m&&(A.g=m+"."+A.g),er(A,A.s);else{var P=g.location;A=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;var H=new pe(null);A&&ns(H,A),m&&(H.g=m),P&&er(H,P),_&&(H.l=_),A=H}return _=c.D,m=c.ya,_&&m&&$t(A,_,m),$t(A,"VER",c.la),cs(c,A),A}function hu(c,m,_){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new Gt(new nr({eb:_})):new Gt(c.pa),m.Ha(c.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fu(){}r=fu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function sa(){}sa.prototype.g=function(c,m){return new Ze(c,m)};function Ze(c,m){le.call(this),this.g=new ea(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!dt(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!dt(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new ei(this)}Q(Ze,le),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){bo(this.g)},Ze.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Mn(c),c=_);m.i.push(new Jl(m.Ya++,c)),m.G==3&&ia(m)},Ze.prototype.N=function(){this.g.l=null,delete this.j,bo(this.g),delete this.g,Ze.aa.N.call(this)};function du(c){yi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const _ in m){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}Q(du,yi);function mu(){co.call(this),this.status=1}Q(mu,co);function ei(c){this.g=c}Q(ei,fu),ei.prototype.ua=function(){Kt(this.g,"a")},ei.prototype.ta=function(c){Kt(this.g,new du(c))},ei.prototype.sa=function(c){Kt(this.g,new mu)},ei.prototype.ra=function(){Kt(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,TT=function(){return new sa},vT=function(){return $i()},_T=Qn,Xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ji.NO_ERROR=0,Ji.TIMEOUT=8,Ji.HTTP_ERROR=6,Rc=Ji,_i.COMPLETE="complete",yT=_i,uo.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",le.prototype.listen=le.prototype.K,gl=uo,Gt.prototype.listenOnce=Gt.prototype.L,Gt.prototype.getLastError=Gt.prototype.Ka,Gt.prototype.getLastErrorCode=Gt.prototype.Ba,Gt.prototype.getStatus=Gt.prototype.Z,Gt.prototype.getResponseJson=Gt.prototype.Oa,Gt.prototype.getResponseText=Gt.prototype.oa,Gt.prototype.send=Gt.prototype.ea,Gt.prototype.setWithCredentials=Gt.prototype.Ha,pT=Gt}).apply(typeof pc<"u"?pc:typeof self<"u"?self:typeof window<"u"?window:{});const av="@firebase/firestore",ov="4.7.16";/**
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
 */class Qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let Ja="11.8.1";/**
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
 */const Ms=new th("@firebase/firestore");function Va(){return Ms.logLevel}function lt(r,...t){if(Ms.logLevel<=Pt.DEBUG){const n=t.map(Sm);Ms.debug(`Firestore (${Ja}): ${r}`,...n)}}function Ki(r,...t){if(Ms.logLevel<=Pt.ERROR){const n=t.map(Sm);Ms.error(`Firestore (${Ja}): ${r}`,...n)}}function Ha(r,...t){if(Ms.logLevel<=Pt.WARN){const n=t.map(Sm);Ms.warn(`Firestore (${Ja}): ${r}`,...n)}}function Sm(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function Tt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,ET(r,s,n)}function ET(r,t,n){let s=`FIRESTORE (${Ja}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ki(s),new Error(s)}function Qt(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||ET(t,o,s)}function It(r,t){return r}/**
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
 */const tt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ft extends Gn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ns{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class AT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class VR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class kR{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PR{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Qt(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Ns;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ns,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},g=p=>{lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ns)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qt(typeof s.accessToken=="string",31837,{l:s}),new AT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Qt(t===null||typeof t=="string",2055,{h:t}),new Qe(t)}}class UR{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class LR{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new UR(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zR{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Qt(this.o===void 0,3512);const s=u=>{u.error!=null&&lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,lt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new lv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Qt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new lv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function jR(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function bT(){return new TextEncoder}/**
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
 */class ST{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=jR(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function Ot(r,t){return r<t?-1:r>t?1:0}function $d(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return Ot(s,o);{const u=bT(),f=BR(u.encode(uv(r,n)),u.encode(uv(t,n)));return f!==0?f:Ot(s,o)}}n+=s>65535?2:1}return Ot(r.length,t.length)}function uv(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function BR(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return Ot(r[n],t[n]);return Ot(r.length,t.length)}function Fa(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
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
 */const cv=-62135596800,hv=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(t){return Re.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*hv);return new Re(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ft(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ft(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<cv)throw new ft(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ft(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hv}_compareTo(t){return this.seconds===t.seconds?Ot(this.nanoseconds,t.nanoseconds):Ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-cv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class wt{static fromTimestamp(t){return new wt(t)}static min(){return new wt(new Re(0,0))}static max(){return new wt(new Re(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fv="__name__";class li{constructor(t,n,s){n===void 0?n=0:n>t.length&&Tt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&Tt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return li.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof li?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=li.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Ot(t.length,n.length)}static compareSegments(t,n){const s=li.isNumericId(t),o=li.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?li.extractNumericId(t).compare(li.extractNumericId(n)):$d(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Vr.fromString(t.substring(4,t.length-2))}}class ie extends li{construct(t,n,s){return new ie(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new ft(tt.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const qR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends li{construct(t,n,s){return new je(t,n,s)}static isValidIdentifier(t){return qR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fv}static keyField(){return new je([fv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ft(tt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new ft(tt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ft(tt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(s+=g,o++):(u(),o++)}if(u(),f)throw new ft(tt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new je(n)}static emptyPath(){return new je([])}}/**
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
 */class gt{constructor(t){this.path=t}static fromPath(t){return new gt(ie.fromString(t))}static fromName(t){return new gt(ie.fromString(t).popFirst(5))}static empty(){return new gt(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ie.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new gt(new ie(t.slice()))}}/**
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
 */const Cl=-1;function HR(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=wt.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new Lr(o,gt.empty(),t)}function FR(r){return new Lr(r.readTime,r.key,Cl)}class Lr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Lr(wt.min(),gt.empty(),Cl)}static max(){return new Lr(wt.max(),gt.empty(),Cl)}}function GR(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=gt.comparator(r.documentKey,t.documentKey),n!==0?n:Ot(r.largestBatchId,t.largestBatchId))}/**
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
 */const QR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function to(r){if(r.code!==tt.FAILED_PRECONDITION||r.message!==QR)throw r;lt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):$.reject(n)}static resolve(t){return new $((n,s)=>{n(t)})}static reject(t){return new $((n,s)=>{s(t)})}static waitFor(t){return new $((n,s)=>{let o=0,u=0,f=!1;t.forEach(g=>{++o,g.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(t){let n=$.resolve(!1);for(const s of t)n=n.next(o=>o?$.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new $((s,o)=>{const u=t.length,f=new Array(u);let g=0;for(let p=0;p<u;p++){const y=p;n(t[y]).next(E=>{f[y]=E,++g,g===u&&s(f)},E=>o(E))}})}static doWhile(t,n){return new $((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function YR(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class sh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}sh.le=-1;/**
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
 */const wm=-1;function ah(r){return r==null}function jc(r){return r===0&&1/r==-1/0}function XR(r){return typeof r=="number"&&Number.isInteger(r)&&!jc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const wT="";function $R(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=dv(t)),t=ZR(r.get(n),t);return dv(t)}function ZR(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case wT:n+="";break;default:n+=u}}return n}function dv(r){return r+wT+""}/**
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
 */function mv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Ls(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function RT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class oe{constructor(t,n){this.comparator=t,this.root=n||ze.EMPTY}insert(t,n){return new oe(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(t){return new oe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ze.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yc(this.root,t,this.comparator,!1)}getReverseIterator(){return new yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yc(this.root,t,this.comparator,!0)}}class yc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ze{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??ze.RED,this.left=o??ze.EMPTY,this.right=u??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new ze(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return ze.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Tt(27949);return t+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Tt(57766)}get value(){throw Tt(16141)}get color(){throw Tt(16727)}get left(){throw Tt(29726)}get right(){throw Tt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new ze(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(t){this.comparator=t,this.data=new oe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new gv(this.data.getIterator())}getIteratorFrom(t){return new gv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ie(this.comparator);return n.data=t,n}}class gv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bn{constructor(t){this.fields=t,t.sort(je.comparator)}static empty(){return new Bn([])}unionWith(t){let n=new Ie(je.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Bn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Fa(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class IT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Be{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new IT("Invalid base64 string: "+u):u}}(t);return new Be(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new Be(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const WR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(r){if(Qt(!!r,39018),typeof r=="string"){let t=0;const n=WR.exec(r);if(Qt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:me(r.seconds),nanos:me(r.nanos)}}function me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function jr(r){return typeof r=="string"?Be.fromBase64String(r):Be.fromUint8Array(r)}/**
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
 */const CT="server_timestamp",DT="__type__",NT="__previous_value__",OT="__local_write_time__";function Rm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[DT])===null||n===void 0?void 0:n.stringValue)===CT}function oh(r){const t=r.mapValue.fields[NT];return Rm(t)?oh(t):t}function Dl(r){const t=zr(r.mapValue.fields[OT].timestampValue);return new Re(t.seconds,t.nanos)}/**
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
 */class JR{constructor(t,n,s,o,u,f,g,p,y,E){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E}}const Bc="(default)";class Nl{constructor(t,n){this.projectId=t,this.database=n||Bc}static empty(){return new Nl("","")}get isDefaultDatabase(){return this.database===Bc}isEqual(t){return t instanceof Nl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const xT="__type__",tI="__max__",_c={mapValue:{}},MT="__vector__",qc="value";function Br(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Rm(r)?4:nI(r)?9007199254740991:eI(r)?10:11:Tt(28295,{value:r})}function mi(r,t){if(r===t)return!0;const n=Br(r);if(n!==Br(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Dl(r).isEqual(Dl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=zr(o.timestampValue),g=zr(u.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return jr(o.bytesValue).isEqual(jr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return me(o.geoPointValue.latitude)===me(u.geoPointValue.latitude)&&me(o.geoPointValue.longitude)===me(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return me(o.integerValue)===me(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=me(o.doubleValue),g=me(u.doubleValue);return f===g?jc(f)===jc(g):isNaN(f)&&isNaN(g)}return!1}(r,t);case 9:return Fa(r.arrayValue.values||[],t.arrayValue.values||[],mi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},g=u.mapValue.fields||{};if(mv(f)!==mv(g))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(g[p]===void 0||!mi(f[p],g[p])))return!1;return!0}(r,t);default:return Tt(52216,{left:r})}}function Ol(r,t){return(r.values||[]).find(n=>mi(n,t))!==void 0}function Ga(r,t){if(r===t)return 0;const n=Br(r),s=Br(t);if(n!==s)return Ot(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ot(r.booleanValue,t.booleanValue);case 2:return function(u,f){const g=me(u.integerValue||u.doubleValue),p=me(f.integerValue||f.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return pv(r.timestampValue,t.timestampValue);case 4:return pv(Dl(r),Dl(t));case 5:return $d(r.stringValue,t.stringValue);case 6:return function(u,f){const g=jr(u),p=jr(f);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const g=u.split("/"),p=f.split("/");for(let y=0;y<g.length&&y<p.length;y++){const E=Ot(g[y],p[y]);if(E!==0)return E}return Ot(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const g=Ot(me(u.latitude),me(f.latitude));return g!==0?g:Ot(me(u.longitude),me(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return yv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var g,p,y,E;const w=u.fields||{},D=f.fields||{},B=(g=w[qc])===null||g===void 0?void 0:g.arrayValue,Q=(p=D[qc])===null||p===void 0?void 0:p.arrayValue,W=Ot(((y=B==null?void 0:B.values)===null||y===void 0?void 0:y.length)||0,((E=Q==null?void 0:Q.values)===null||E===void 0?void 0:E.length)||0);return W!==0?W:yv(B,Q)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===_c.mapValue&&f===_c.mapValue)return 0;if(u===_c.mapValue)return 1;if(f===_c.mapValue)return-1;const g=u.fields||{},p=Object.keys(g),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let w=0;w<p.length&&w<E.length;++w){const D=$d(p[w],E[w]);if(D!==0)return D;const B=Ga(g[p[w]],y[E[w]]);if(B!==0)return B}return Ot(p.length,E.length)}(r.mapValue,t.mapValue);default:throw Tt(23264,{Pe:n})}}function pv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Ot(r,t);const n=zr(r),s=zr(t),o=Ot(n.seconds,s.seconds);return o!==0?o:Ot(n.nanos,s.nanos)}function yv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Ga(n[o],s[o]);if(u)return u}return Ot(n.length,s.length)}function Qa(r){return Zd(r)}function Zd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=zr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return jr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return gt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Zd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Zd(n.fields[f])}`;return o+"}"}(r.mapValue):Tt(61005,{value:r})}function Ic(r){switch(Br(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=oh(r);return t?16+Ic(t):16;case 5:return 2*r.stringValue.length;case 6:return jr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Ic(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Ls(s.fields,(u,f)=>{o+=u.length+Ic(f)}),o}(r.mapValue);default:throw Tt(13486,{value:r})}}function _v(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Wd(r){return!!r&&"integerValue"in r}function Im(r){return!!r&&"arrayValue"in r}function vv(r){return!!r&&"nullValue"in r}function Tv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Cc(r){return!!r&&"mapValue"in r}function eI(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[xT])===null||n===void 0?void 0:n.stringValue)===MT}function El(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Ls(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=El(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=El(r.arrayValue.values[n]);return t}return Object.assign({},r)}function nI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===tI}/**
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
 */class Nn{constructor(t){this.value=t}static empty(){return new Nn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Cc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=El(n)}setAll(t){let n=je.emptyPath(),s={},o=[];t.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=g.popLast()}f?s[g.lastSegment()]=El(f):o.push(g.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Cc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return mi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Cc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Ls(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new Nn(El(this.value))}}function VT(r){const t=[];return Ls(r.fields,(n,s)=>{const o=new je([n]);if(Cc(s)){const u=VT(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new Bn(t)}/**
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
 */class Ke{constructor(t,n,s,o,u,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=g}static newInvalidDocument(t){return new Ke(t,0,wt.min(),wt.min(),wt.min(),Nn.empty(),0)}static newFoundDocument(t,n,s,o){return new Ke(t,1,n,wt.min(),s,o,0)}static newNoDocument(t,n){return new Ke(t,2,n,wt.min(),wt.min(),Nn.empty(),0)}static newUnknownDocument(t,n){return new Ke(t,3,n,wt.min(),wt.min(),Nn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(wt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ke&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hc{constructor(t,n){this.position=t,this.inclusive=n}}function Ev(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=gt.comparator(gt.fromName(f.referenceValue),n.key):s=Ga(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Av(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!mi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Fc{constructor(t,n="asc"){this.field=t,this.dir=n}}function iI(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class kT{}class Te extends kT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new sI(t,n,s):n==="array-contains"?new lI(t,s):n==="in"?new uI(t,s):n==="not-in"?new cI(t,s):n==="array-contains-any"?new hI(t,s):new Te(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new aI(t,s):new oI(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ga(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(Ga(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends kT{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new Fn(t,n)}matches(t){return PT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function PT(r){return r.op==="and"}function UT(r){return rI(r)&&PT(r)}function rI(r){for(const t of r.filters)if(t instanceof Fn)return!1;return!0}function Jd(r){if(r instanceof Te)return r.field.canonicalString()+r.op.toString()+Qa(r.value);if(UT(r))return r.filters.map(t=>Jd(t)).join(",");{const t=r.filters.map(n=>Jd(n)).join(",");return`${r.op}(${t})`}}function LT(r,t){return r instanceof Te?function(s,o){return o instanceof Te&&s.op===o.op&&s.field.isEqual(o.field)&&mi(s.value,o.value)}(r,t):r instanceof Fn?function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,g)=>u&&LT(f,o.filters[g]),!0):!1}(r,t):void Tt(19439)}function zT(r){return r instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${Qa(n.value)}`}(r):r instanceof Fn?function(n){return n.op.toString()+" {"+n.getFilters().map(zT).join(" ,")+"}"}(r):"Filter"}class sI extends Te{constructor(t,n,s){super(t,n,s),this.key=gt.fromName(s.referenceValue)}matches(t){const n=gt.comparator(t.key,this.key);return this.matchesComparison(n)}}class aI extends Te{constructor(t,n){super(t,"in",n),this.keys=jT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class oI extends Te{constructor(t,n){super(t,"not-in",n),this.keys=jT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function jT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>gt.fromName(s.referenceValue))}class lI extends Te{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Im(n)&&Ol(n.arrayValue,this.value)}}class uI extends Te{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ol(this.value.arrayValue,n)}}class cI extends Te{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ol(this.value.arrayValue,n)}}class hI extends Te{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Im(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ol(this.value.arrayValue,s))}}/**
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
 */class fI{constructor(t,n=null,s=[],o=[],u=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=g,this.Ie=null}}function bv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new fI(r,t,n,s,o,u,f)}function Cm(r){const t=It(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Jd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ah(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Qa(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Qa(s)).join(",")),t.Ie=n}return t.Ie}function Dm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!iI(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!LT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Av(r.startAt,t.startAt)&&Av(r.endAt,t.endAt)}function tm(r){return gt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class jl{constructor(t,n=null,s=[],o=[],u=null,f="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=g,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function dI(r,t,n,s,o,u,f,g){return new jl(r,t,n,s,o,u,f,g)}function Nm(r){return new jl(r)}function Sv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function BT(r){return r.collectionGroup!==null}function Al(r){const t=It(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new Ie(je.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(g=g.add(y.field))})}),g})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new Fc(u,s))}),n.has(je.keyField().canonicalString())||t.Ee.push(new Fc(je.keyField(),s))}return t.Ee}function hi(r){const t=It(r);return t.de||(t.de=mI(t,Al(r))),t.de}function mI(r,t){if(r.limitType==="F")return bv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Fc(o.field,u)});const n=r.endAt?new Hc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Hc(r.startAt.position,r.startAt.inclusive):null;return bv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function em(r,t){const n=r.filters.concat([t]);return new jl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function nm(r,t,n){return new jl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function lh(r,t){return Dm(hi(r),hi(t))&&r.limitType===t.limitType}function qT(r){return`${Cm(hi(r))}|lt:${r.limitType}`}function ka(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>zT(o)).join(", ")}]`),ah(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Qa(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Qa(o)).join(",")),`Target(${s})`}(hi(r))}; limitType=${r.limitType})`}function uh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):gt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of Al(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,g,p){const y=Ev(f,g,p);return f.inclusive?y<=0:y<0}(s.startAt,Al(s),o)||s.endAt&&!function(f,g,p){const y=Ev(f,g,p);return f.inclusive?y>=0:y>0}(s.endAt,Al(s),o))}(r,t)}function gI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function HT(r){return(t,n)=>{let s=!1;for(const o of Al(r)){const u=pI(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function pI(r,t,n){const s=r.field.isKeyField()?gt.comparator(t.key,n.key):function(u,f,g){const p=f.data.field(u),y=g.data.field(u);return p!==null&&y!==null?Ga(p,y):Tt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Tt(19790,{direction:r.dir})}}/**
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
 */class zs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Ls(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return RT(this.inner)}size(){return this.innerSize}}/**
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
 */const yI=new oe(gt.comparator);function Yi(){return yI}const FT=new oe(gt.comparator);function pl(...r){let t=FT;for(const n of r)t=t.insert(n.key,n);return t}function GT(r){let t=FT;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Cs(){return bl()}function QT(){return bl()}function bl(){return new zs(r=>r.toString(),(r,t)=>r.isEqual(t))}const _I=new oe(gt.comparator),vI=new Ie(gt.comparator);function Ut(...r){let t=vI;for(const n of r)t=t.add(n);return t}const TI=new Ie(Ot);function EI(){return TI}/**
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
 */function Om(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jc(t)?"-0":t}}function KT(r){return{integerValue:""+r}}function AI(r,t){return XR(t)?KT(t):Om(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ch{constructor(){this._=void 0}}function bI(r,t,n){return r instanceof Gc?function(o,u){const f={fields:{[DT]:{stringValue:CT},[OT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Rm(u)&&(u=oh(u)),u&&(f.fields[NT]=u),{mapValue:f}}(n,t):r instanceof xl?XT(r,t):r instanceof Ml?$T(r,t):function(o,u){const f=YT(o,u),g=wv(f)+wv(o.Re);return Wd(f)&&Wd(o.Re)?KT(g):Om(o.serializer,g)}(r,t)}function SI(r,t,n){return r instanceof xl?XT(r,t):r instanceof Ml?$T(r,t):n}function YT(r,t){return r instanceof Qc?function(s){return Wd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class Gc extends ch{}class xl extends ch{constructor(t){super(),this.elements=t}}function XT(r,t){const n=ZT(t);for(const s of r.elements)n.some(o=>mi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Ml extends ch{constructor(t){super(),this.elements=t}}function $T(r,t){let n=ZT(t);for(const s of r.elements)n=n.filter(o=>!mi(o,s));return{arrayValue:{values:n}}}class Qc extends ch{constructor(t,n){super(),this.serializer=t,this.Re=n}}function wv(r){return me(r.integerValue||r.doubleValue)}function ZT(r){return Im(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function wI(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof xl&&o instanceof xl||s instanceof Ml&&o instanceof Ml?Fa(s.elements,o.elements,mi):s instanceof Qc&&o instanceof Qc?mi(s.Re,o.Re):s instanceof Gc&&o instanceof Gc}(r.transform,t.transform)}class RI{constructor(t,n){this.version=t,this.transformResults=n}}class qn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qn}static exists(t){return new qn(void 0,t)}static updateTime(t){return new qn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Dc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class hh{}function WT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new xm(r.key,qn.none()):new Bl(r.key,r.data,qn.none());{const n=r.data,s=Nn.empty();let o=new Ie(je.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new js(r.key,s,new Bn(o.toArray()),qn.none())}}function II(r,t,n){r instanceof Bl?function(o,u,f){const g=o.value.clone(),p=Iv(o.fieldTransforms,u,f.transformResults);g.setAll(p),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):r instanceof js?function(o,u,f){if(!Dc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const g=Iv(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(JT(o)),p.setAll(g),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Sl(r,t,n,s){return r instanceof Bl?function(u,f,g,p){if(!Dc(u.precondition,f))return g;const y=u.value.clone(),E=Cv(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof js?function(u,f,g,p){if(!Dc(u.precondition,f))return g;const y=Cv(u.fieldTransforms,p,f),E=f.data;return E.setAll(JT(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),g===null?null:g.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(r,t,n,s):function(u,f,g){return Dc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(r,t,n)}function CI(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=YT(s.transform,o||null);u!=null&&(n===null&&(n=Nn.empty()),n.set(s.field,u))}return n||null}function Rv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Fa(s,o,(u,f)=>wI(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Bl extends hh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class js extends hh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function JT(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Iv(r,t,n){const s=new Map;Qt(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,g=t.data.field(u.field);s.set(u.field,SI(f,g,n[o]))}return s}function Cv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,bI(u,f,t))}return s}class xm extends hh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DI extends hh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class NI{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&II(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Sl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Sl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=QT();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let g=this.applyToLocalView(f,u.mutatedFields);g=n.has(o.key)?null:g;const p=WT(f,g);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(wt.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Ut())}isEqual(t){return this.batchId===t.batchId&&Fa(this.mutations,t.mutations,(n,s)=>Rv(n,s))&&Fa(this.baseMutations,t.baseMutations,(n,s)=>Rv(n,s))}}class Mm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Qt(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return _I}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Mm(t,n,s,o)}}/**
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
 */class OI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class xI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var ve,Bt;function MI(r){switch(r){case tt.OK:return Tt(64938);case tt.CANCELLED:case tt.UNKNOWN:case tt.DEADLINE_EXCEEDED:case tt.RESOURCE_EXHAUSTED:case tt.INTERNAL:case tt.UNAVAILABLE:case tt.UNAUTHENTICATED:return!1;case tt.INVALID_ARGUMENT:case tt.NOT_FOUND:case tt.ALREADY_EXISTS:case tt.PERMISSION_DENIED:case tt.FAILED_PRECONDITION:case tt.ABORTED:case tt.OUT_OF_RANGE:case tt.UNIMPLEMENTED:case tt.DATA_LOSS:return!0;default:return Tt(15467,{code:r})}}function tE(r){if(r===void 0)return Ki("GRPC error has no .code"),tt.UNKNOWN;switch(r){case ve.OK:return tt.OK;case ve.CANCELLED:return tt.CANCELLED;case ve.UNKNOWN:return tt.UNKNOWN;case ve.DEADLINE_EXCEEDED:return tt.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return tt.RESOURCE_EXHAUSTED;case ve.INTERNAL:return tt.INTERNAL;case ve.UNAVAILABLE:return tt.UNAVAILABLE;case ve.UNAUTHENTICATED:return tt.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return tt.INVALID_ARGUMENT;case ve.NOT_FOUND:return tt.NOT_FOUND;case ve.ALREADY_EXISTS:return tt.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return tt.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return tt.FAILED_PRECONDITION;case ve.ABORTED:return tt.ABORTED;case ve.OUT_OF_RANGE:return tt.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return tt.UNIMPLEMENTED;case ve.DATA_LOSS:return tt.DATA_LOSS;default:return Tt(39323,{code:r})}}(Bt=ve||(ve={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const VI=new Vr([4294967295,4294967295],0);function Dv(r){const t=bT().encode(r),n=new gT;return n.update(t),new Uint8Array(n.digest())}function Nv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Vr([n,s],0),new Vr([o,u],0)]}class Vm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new yl(`Invalid padding: ${n}`);if(s<0)throw new yl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new yl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Vr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(Vr.fromNumber(s)));return o.compare(VI)===1&&(o=new Vr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}Se(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=Dv(t),[s,o]=Nv(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);if(!this.Se(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Vm(u,o,n);return s.forEach(g=>f.insert(g)),f}insert(t){if(this.pe===0)return;const n=Dv(t),[s,o]=Nv(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);this.be(f)}}be(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,ql.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new fh(wt.min(),o,new oe(Ot),Yi(),Ut())}}class ql{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new ql(s,n,Ut(),Ut(),Ut())}}/**
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
 */class Nc{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class eE{constructor(t,n){this.targetId=t,this.Ce=n}}class nE{constructor(t,n,s=Be.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Ov{constructor(){this.Fe=0,this.Me=xv(),this.xe=Be.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Ut(),n=Ut(),s=Ut();return this.Me.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Tt(38017,{changeType:u})}}),new ql(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=xv()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Qt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class kI{constructor(t){this.ze=t,this.je=new Map,this.He=Yi(),this.Je=vc(),this.Ye=vc(),this.Ze=new oe(Ot)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:Tt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const u=o.target;if(tm(u))if(s===0){const f=new gt(u.path);this.tt(n,f,Ke.newNoDocument(f,wt.min()))}else Qt(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const g=this.ct(t),p=g?this.lt(g,t,f):1;if(p!==0){this.st(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,g;try{f=jr(s).toUint8Array()}catch(p){if(p instanceof IT)return Ha("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new Vm(f,o,u)}catch(p){return Ha(p instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.pe===0?null:g}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ze.Pt(),g=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(g)||(this.tt(n,u,null),o++)}),o}It(t){const n=new Map;this.je.forEach((u,f)=>{const g=this._t(f);if(g){if(u.current&&tm(g.target)){const p=new gt(g.target.path);this.Et(p).has(f)||this.dt(f,p)||this.tt(f,p,Ke.newNoDocument(p,t))}u.Le&&(n.set(f,u.qe()),u.Qe())}});let s=Ut();this.Ye.forEach((u,f)=>{let g=!0;f.forEachWhile(p=>{const y=this._t(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(s=s.add(u))}),this.He.forEach((u,f)=>f.setReadTime(t));const o=new fh(t,n,this.Ze,this.He,s);return this.He=Yi(),this.Je=vc(),this.Ye=vc(),this.Ze=new oe(Ot),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new Ov,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new Ie(Ot),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Ie(Ot),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||lt("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Ov),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function vc(){return new oe(gt.comparator)}function xv(){return new oe(gt.comparator)}const PI={asc:"ASCENDING",desc:"DESCENDING"},UI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LI={and:"AND",or:"OR"};class zI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function im(r,t){return r.useProto3Json||ah(t)?t:{value:t}}function Kc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function iE(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function jI(r,t){return Kc(r,t.toTimestamp())}function fi(r){return Qt(!!r,49232),wt.fromTimestamp(function(n){const s=zr(n);return new Re(s.seconds,s.nanos)}(r))}function km(r,t){return rm(r,t).canonicalString()}function rm(r,t){const n=function(o){return new ie(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function rE(r){const t=ie.fromString(r);return Qt(uE(t),10190,{key:t.toString()}),t}function sm(r,t){return km(r.databaseId,t.path)}function Vd(r,t){const n=rE(t);if(n.get(1)!==r.databaseId.projectId)throw new ft(tt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ft(tt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new gt(aE(n))}function sE(r,t){return km(r.databaseId,t)}function BI(r){const t=rE(r);return t.length===4?ie.emptyPath():aE(t)}function am(r){return new ie(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function aE(r){return Qt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Mv(r,t,n){return{name:sm(r,t),fields:n.value.mapValue.fields}}function qI(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Tt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Qt(E===void 0||typeof E=="string",58123),Be.fromBase64String(E||"")):(Qt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Be.fromUint8Array(E||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&function(y){const E=y.code===void 0?tt.UNKNOWN:tE(y.code);return new ft(E,y.message||"")}(f);n=new nE(s,o,u,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Vd(r,s.document.name),u=fi(s.document.updateTime),f=s.document.createTime?fi(s.document.createTime):wt.min(),g=new Nn({mapValue:{fields:s.document.fields}}),p=Ke.newFoundDocument(o,u,f,g),y=s.targetIds||[],E=s.removedTargetIds||[];n=new Nc(y,E,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Vd(r,s.document),u=s.readTime?fi(s.readTime):wt.min(),f=Ke.newNoDocument(o,u),g=s.removedTargetIds||[];n=new Nc([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Vd(r,s.document),u=s.removedTargetIds||[];n=new Nc([],u,o,null)}else{if(!("filter"in t))return Tt(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new xI(o,u),g=s.targetId;n=new eE(g,f)}}return n}function HI(r,t){let n;if(t instanceof Bl)n={update:Mv(r,t.key,t.value)};else if(t instanceof xm)n={delete:sm(r,t.key)};else if(t instanceof js)n={update:Mv(r,t.key,t.data),updateMask:WI(t.fieldMask)};else{if(!(t instanceof DI))return Tt(16599,{ft:t.type});n={verify:sm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const g=f.transform;if(g instanceof Gc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof xl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Ml)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Qc)return{fieldPath:f.field.canonicalString(),increment:g.Re};throw Tt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:jI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Tt(27497)}(r,t.precondition)),n}function FI(r,t){return r&&r.length>0?(Qt(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?fi(o.updateTime):fi(u);return f.isEqual(wt.min())&&(f=fi(u)),new RI(f,o.transformResults||[])}(n,t))):[]}function GI(r,t){return{documents:[sE(r,t.path)]}}function QI(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=sE(r,o);const u=function(y){if(y.length!==0)return lE(Fn.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(D){return{field:Pa(D.field),direction:XI(D.dir)}}(E))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=im(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{gt:n,parent:o}}function KI(r){let t=BI(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Qt(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(w){const D=oE(w);return D instanceof Fn&&UT(D)?D.getFilters():[D]}(n.where));let f=[];n.orderBy&&(f=function(w){return w.map(D=>function(Q){return new Fc(Ua(Q.field),function(et){switch(et){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Q.direction))}(D))}(n.orderBy));let g=null;n.limit&&(g=function(w){let D;return D=typeof w=="object"?w.value:w,ah(D)?null:D}(n.limit));let p=null;n.startAt&&(p=function(w){const D=!!w.before,B=w.values||[];return new Hc(B,D)}(n.startAt));let y=null;return n.endAt&&(y=function(w){const D=!w.before,B=w.values||[];return new Hc(B,D)}(n.endAt)),dI(t,o,f,u,g,"F",p,y)}function YI(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Tt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function oE(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ua(n.unaryFilter.field);return Te.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ua(n.unaryFilter.field);return Te.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ua(n.unaryFilter.field);return Te.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ua(n.unaryFilter.field);return Te.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Tt(61313);default:return Tt(60726)}}(r):r.fieldFilter!==void 0?function(n){return Te.create(Ua(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Tt(58110);default:return Tt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Fn.create(n.compositeFilter.filters.map(s=>oE(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Tt(1026)}}(n.compositeFilter.op))}(r):Tt(30097,{filter:r})}function XI(r){return PI[r]}function $I(r){return UI[r]}function ZI(r){return LI[r]}function Pa(r){return{fieldPath:r.canonicalString()}}function Ua(r){return je.fromServerFormat(r.fieldPath)}function lE(r){return r instanceof Te?function(n){if(n.op==="=="){if(Tv(n.value))return{unaryFilter:{field:Pa(n.field),op:"IS_NAN"}};if(vv(n.value))return{unaryFilter:{field:Pa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tv(n.value))return{unaryFilter:{field:Pa(n.field),op:"IS_NOT_NAN"}};if(vv(n.value))return{unaryFilter:{field:Pa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pa(n.field),op:$I(n.op),value:n.value}}}(r):r instanceof Fn?function(n){const s=n.getFilters().map(o=>lE(o));return s.length===1?s[0]:{compositeFilter:{op:ZI(n.op),filters:s}}}(r):Tt(54877,{filter:r})}function WI(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function uE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Nr{constructor(t,n,s,o,u=wt.min(),f=wt.min(),g=Be.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new Nr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class JI{constructor(t){this.wt=t}}function tC(r){const t=KI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?nm(t,t.limit,"L"):t}/**
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
 */class eC{constructor(){this.Cn=new nC}addToCollectionParentIndex(t,n){return this.Cn.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(Lr.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(Lr.min())}updateCollectionGroup(t,n,s){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class nC{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ie(ie.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ie(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Vv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cE=41943040;class rn{static withCacheSize(t){return new rn(t,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(cE,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
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
 */class Ka{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Ka(0)}static lr(){return new Ka(-1)}}/**
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
 */const kv="LruGarbageCollector",iC=1048576;function Pv([r,t],[n,s]){const o=Ot(r,n);return o===0?Ot(t,s):o}class rC{constructor(t){this.Er=t,this.buffer=new Ie(Pv),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Pv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sC{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){lt(kv,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){eo(n)?lt(kv,"Ignoring IndexedDB error during garbage collection: ",n):await to(n)}await this.mr(3e5)})}}class aC{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return $.resolve(sh.le);const s=new rC(n);return this.gr.forEachTarget(t,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(t,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.gr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(lt("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Vv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(lt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vv):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let s,o,u,f,g,p,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(lt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(t,o))).next(w=>(s=w,g=Date.now(),this.removeTargets(t,s,n))).next(w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(w=>(y=Date.now(),Va()<=Pt.DEBUG&&lt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${u} targets in `+(p-g)+`ms
	Removed ${w} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function oC(r,t){return new aC(r,t)}/**
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
 */class lC{constructor(){this.changes=new zs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ke.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class uC{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class cC{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Sl(s.mutation,o,Bn.empty(),Re.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Ut()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Ut()){const o=Cs();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=pl();return u.forEach((g,p)=>{f=f.insert(g,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Cs();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Ut()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,g)=>{n.set(f,g)})})}computeViews(t,n,s,o){let u=Yi();const f=bl(),g=function(){return bl()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof js)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Sl(E.mutation,y,E.mutation.getFieldMask(),Re.now())):f.set(y.key,Bn.empty())}),this.recalculateAndSaveOverlays(t,u).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var w;return g.set(y,new uC(E,(w=f.get(y))!==null&&w!==void 0?w:null))}),g))}recalculateAndSaveOverlays(t,n){const s=bl();let o=new oe((f,g)=>f-g),u=Ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const g of f)g.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||Bn.empty();E=g.applyToLocalView(y,E),s.set(p,E);const w=(o.get(g.batchId)||Ut()).add(p);o=o.insert(g.batchId,w)})}).next(()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),y=p.key,E=p.value,w=QT();E.forEach(D=>{if(!u.has(D)){const B=WT(n.get(D),s.get(D));B!==null&&w.set(D,B),u=u.add(D)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,w))}return $.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return gt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):BT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):$.resolve(Cs());let g=Cl,p=u;return f.next(y=>$.forEach(y,(E,w)=>(g<w.largestBatchId&&(g=w.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(t,E).next(D=>{p=p.insert(E,D)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,p,y,Ut())).next(E=>({batchId:g,changes:GT(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new gt(n)).next(s=>{let o=pl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=pl();return this.indexManager.getCollectionParents(t,u).next(g=>$.forEach(g,p=>{const y=function(w,D){return new jl(D,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(E=>{E.forEach((w,D)=>{f=f.insert(w,D)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Ke.newInvalidDocument(E)))});let g=pl();return f.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Sl(E.mutation,y,Bn.empty(),Re.now()),uh(n,y)&&(g=g.insert(p,y))}),g})}}/**
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
 */class hC{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return $.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:fi(o.createTime)}}(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(o){return{name:o.name,query:tC(o.bundledQuery),readTime:fi(o.readTime)}}(n)),$.resolve()}}/**
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
 */class fC{constructor(){this.overlays=new oe(gt.comparator),this.Qr=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Cs();return $.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.bt(t,n,u)}),$.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),$.resolve()}getOverlaysForCollection(t,n,s){const o=Cs(),u=n.length+1,f=new gt(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const p=g.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return $.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new oe((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Cs(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const g=Cs(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>g.set(y,E)),!(g.size()>=o)););return $.resolve(g)}bt(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new OI(n,s));let u=this.Qr.get(n);u===void 0&&(u=Ut(),this.Qr.set(n,u)),this.Qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class dC{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Pm{constructor(){this.$r=new Ie(Me.Ur),this.Kr=new Ie(Me.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const s=new Me(t,n);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.zr(new Me(t,n))}jr(t,n){t.forEach(s=>this.removeReference(s,n))}Hr(t){const n=new gt(new ie([])),s=new Me(n,t),o=new Me(n,t+1),u=[];return this.Kr.forEachInRange([s,o],f=>{this.zr(f),u.push(f.key)}),u}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new gt(new ie([])),s=new Me(n,t),o=new Me(n,t+1);let u=Ut();return this.Kr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new Me(t,0),s=this.$r.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Me{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return gt.comparator(t.key,n.key)||Ot(t.Zr,n.Zr)}static Wr(t,n){return Ot(t.Zr,n.Zr)||gt.comparator(t.key,n.key)}}/**
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
 */class mC{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Ie(Me.Ur)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new NI(u,n,s,o);this.mutationQueue.push(f);for(const g of o)this.Xr=this.Xr.add(new Me(g.key,u)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return $.resolve(f)}lookupMutationBatch(t,n){return $.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ti(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?wm:this.nr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Me(n,0),o=new Me(n,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],f=>{const g=this.ei(f.Zr);u.push(g)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ie(Ot);return n.forEach(o=>{const u=new Me(o,0),f=new Me(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,f],g=>{s=s.add(g.Zr)})}),$.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;gt.isDocumentKey(u)||(u=u.child(""));const f=new Me(new gt(u),0);let g=new Ie(Ot);return this.Xr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(g=g.add(p.Zr)),!0)},f),$.resolve(this.ni(g))}ni(t){const n=[];return t.forEach(s=>{const o=this.ei(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Qt(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return $.forEach(n.mutations,o=>{const u=new Me(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Xr=s})}sr(t){}containsKey(t,n){const s=new Me(n,0),o=this.Xr.firstAfterOrEqual(s);return $.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gC{constructor(t){this.ii=t,this.docs=function(){return new oe(gt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ii(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(t,n){let s=Yi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ke.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Yi();const f=n.path,g=new gt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||GR(FR(E),s)<=0||(o.has(E.key)||uh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(t,n,s,o){Tt(9500)}si(t,n){return $.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new pC(this)}getSize(t){return $.resolve(this.size)}}class pC extends lC{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Br.addEntry(t,o)):this.Br.removeEntry(s)}),$.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
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
 */class yC{constructor(t){this.persistence=t,this.oi=new zs(n=>Cm(n),Dm),this.lastRemoteSnapshotVersion=wt.min(),this.highestTargetId=0,this._i=0,this.ai=new Pm,this.targetCount=0,this.ui=Ka.cr()}forEachTarget(t,n){return this.oi.forEach((s,o)=>n(o)),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this._i&&(this._i=n),$.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new Ka(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.Tr(n),$.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.oi.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.oi.delete(f),u.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)}),$.waitFor(u).next(()=>o)}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const s=this.oi.get(n)||null;return $.resolve(s)}addMatchingKeys(t,n,s){return this.ai.Gr(n,s),$.resolve()}removeMatchingKeys(t,n,s){this.ai.jr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),$.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ai.Yr(n);return $.resolve(s)}containsKey(t,n){return $.resolve(this.ai.containsKey(n))}}/**
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
 */class hE{constructor(t,n){this.ci={},this.overlays={},this.li=new sh(0),this.hi=!1,this.hi=!0,this.Pi=new dC,this.referenceDelegate=t(this),this.Ti=new yC(this),this.indexManager=new eC,this.remoteDocumentCache=function(o){return new gC(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new JI(n),this.Ei=new hC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new fC,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ci[t.toKey()];return s||(s=new mC(n,this.referenceDelegate),this.ci[t.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,s){lt("MemoryPersistence","Starting transaction:",t);const o=new _C(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(t,n){return $.or(Object.values(this.ci).map(s=>()=>s.containsKey(t,n)))}}class _C extends KR{constructor(t){super(),this.currentSequenceNumber=t}}class Um{constructor(t){this.persistence=t,this.Vi=new Pm,this.mi=null}static fi(t){return new Um(t)}get gi(){if(this.mi)return this.mi;throw Tt(60996)}addReference(t,n,s){return this.Vi.addReference(s,n),this.gi.delete(s.toString()),$.resolve()}removeReference(t,n,s){return this.Vi.removeReference(s,n),this.gi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),$.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.gi,s=>{const o=gt.fromPath(s);return this.pi(t,o).next(u=>{u||n.removeEntry(o,wt.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(s=>{s?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return $.or([()=>$.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class Yc{constructor(t,n){this.persistence=t,this.yi=new zs(s=>$R(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=oC(this,n)}static fi(t,n){return new Yc(t,n)}di(){}Ai(t){return $.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.Sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}Sr(t){let n=0;return this.yr(t,s=>{n++}).next(()=>n)}yr(t,n){return $.forEach(this.yi,(s,o)=>this.Dr(t,s,o).next(u=>u?$.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(t,f=>this.Dr(t,f,n).next(g=>{g||(s++,u.removeEntry(f,wt.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),$.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),$.resolve()}removeReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),$.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),$.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ic(t.data.value)),n}Dr(t,n,s){return $.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.yi.get(n);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Lm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.ds=s,this.As=o}static Rs(t,n){let s=Ut(),o=Ut();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Lm(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class vC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class TC{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return mS()?8:YR(Ye())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ws(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.Ss(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new vC;return this.bs(t,n,f).next(g=>{if(u.result=g,this.fs)return this.Ds(t,n,f,g.size)})}).next(()=>u.result)}Ds(t,n,s,o){return s.documentReadCount<this.gs?(Va()<=Pt.DEBUG&&lt("QueryEngine","SDK will not create cache indexes for query:",ka(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),$.resolve()):(Va()<=Pt.DEBUG&&lt("QueryEngine","Query:",ka(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(Va()<=Pt.DEBUG&&lt("QueryEngine","The SDK decides to create cache indexes for query:",ka(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,hi(n))):$.resolve())}ws(t,n){if(Sv(n))return $.resolve(null);let s=hi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=nm(n,null,"F"),s=hi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Ut(...u);return this.ys.getDocuments(t,f).next(g=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.vs(n,g);return this.Cs(n,y,f,p.readTime)?this.ws(t,nm(n,null,"F")):this.Fs(t,y,n,p)}))})))}Ss(t,n,s,o){return Sv(n)||o.isEqual(wt.min())?$.resolve(null):this.ys.getDocuments(t,s).next(u=>{const f=this.vs(n,u);return this.Cs(n,f,s,o)?$.resolve(null):(Va()<=Pt.DEBUG&&lt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ka(n)),this.Fs(t,f,n,HR(o,Cl)).next(g=>g))})}vs(t,n){let s=new Ie(HT(t));return n.forEach((o,u)=>{uh(t,u)&&(s=s.add(u))}),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}bs(t,n,s){return Va()<=Pt.DEBUG&&lt("QueryEngine","Using full collection scan to execute query:",ka(n)),this.ys.getDocumentsMatchingQuery(t,n,Lr.min(),s)}Fs(t,n,s,o){return this.ys.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const zm="LocalStore",EC=3e8;class AC{constructor(t,n,s,o){this.persistence=t,this.Ms=n,this.serializer=o,this.xs=new oe(Ot),this.Os=new zs(u=>Cm(u),Dm),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(s)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cC(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function bC(r,t,n,s){return new AC(r,t,n,s)}async function fE(r,t){const n=It(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ls(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],g=[];let p=Ut();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){g.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({ks:y,removedBatchIds:f,addedBatchIds:g}))})})}function SC(r,t){const n=It(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Bs.newChangeBuffer({trackRemovals:!0});return function(g,p,y,E){const w=y.batch,D=w.keys();let B=$.resolve();return D.forEach(Q=>{B=B.next(()=>E.getEntry(p,Q)).next(W=>{const et=y.docVersions.get(Q);Qt(et!==null,48541),W.version.compareTo(et)<0&&(w.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),E.addEntry(W)))})}),B.next(()=>g.mutationQueue.removeMutationBatch(p,w))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let p=Ut();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(p=p.add(g.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function dE(r){const t=It(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function wC(r,t){const n=It(r),s=t.snapshotVersion;let o=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Bs.newChangeBuffer({trackRemovals:!0});o=n.xs;const g=[];t.targetChanges.forEach((E,w)=>{const D=o.get(w);if(!D)return;g.push(n.Ti.removeMatchingKeys(u,E.removedDocuments,w).next(()=>n.Ti.addMatchingKeys(u,E.addedDocuments,w)));let B=D.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?B=B.withResumeToken(Be.EMPTY_BYTE_STRING,wt.min()).withLastLimboFreeSnapshotVersion(wt.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(w,B),function(W,et,pt){return W.resumeToken.approximateByteSize()===0||et.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=EC?!0:pt.addedDocuments.size+pt.modifiedDocuments.size+pt.removedDocuments.size>0}(D,B,E)&&g.push(n.Ti.updateTargetData(u,B))});let p=Yi(),y=Ut();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),g.push(RC(u,f,t.documentUpdates).next(E=>{p=E.qs,y=E.Qs})),!s.isEqual(wt.min())){const E=n.Ti.getLastRemoteSnapshotVersion(u).next(w=>n.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));g.push(E)}return $.waitFor(g).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.xs=o,u))}function RC(r,t,n){let s=Ut(),o=Ut();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Yi();return n.forEach((g,p)=>{const y=u.get(g);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(g)),p.isNoDocument()&&p.version.isEqual(wt.min())?(t.removeEntry(g,p.readTime),f=f.insert(g,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(g,p)):lt(zm,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",p.version)}),{qs:f,Qs:o}})}function IC(r,t){const n=It(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=wm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function CC(r,t){const n=It(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Ti.getTargetData(s,t).next(u=>u?(o=u,$.resolve(o)):n.Ti.allocateTargetId(s).next(f=>(o=new Nr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.xs=n.xs.insert(s.targetId,s),n.Os.set(t,s.targetId)),s})}async function om(r,t,n){const s=It(r),o=s.xs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!eo(f))throw f;lt(zm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.xs=s.xs.remove(t),s.Os.delete(o.target)}function Uv(r,t,n){const s=It(r);let o=wt.min(),u=Ut();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const w=It(p),D=w.Os.get(E);return D!==void 0?$.resolve(w.xs.get(D)):w.Ti.getTargetData(y,E)}(s,f,hi(t)).next(g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(f,g.targetId).next(p=>{u=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(f,t,n?o:wt.min(),n?u:Ut())).next(g=>(DC(s,gI(t),g),{documents:g,$s:u})))}function DC(r,t,n){let s=r.Ns.get(t)||wt.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Ns.set(t,s)}class Lv{constructor(){this.activeTargetIds=EI()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class NC{constructor(){this.xo=new Lv,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,s){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Lv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class OC{No(t){}shutdown(){}}/**
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
 */const zv="ConnectivityMonitor";class jv{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){lt(zv,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){lt(zv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Tc=null;function lm(){return Tc===null?Tc=function(){return 268435456+Math.round(2147483648*Math.random())}():Tc++,"0x"+Tc.toString(16)}/**
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
 */const kd="RestConnection",xC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MC{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Bc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(t,n,s,o,u){const f=lm(),g=this.jo(t,n.toUriEncodedString());lt(kd,`Sending RPC '${t}' ${f}:`,g,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,o,u);const{host:y}=new URL(g),E=Vl(y);return this.Jo(t,g,p,s,E).then(w=>(lt(kd,`Received RPC '${t}' ${f}: `,w),w),w=>{throw Ha(kd,`RPC '${t}' ${f} failed with error: `,w,"url: ",g,"request:",s),w})}Yo(t,n,s,o,u,f){return this.zo(t,n,s,o,u)}Ho(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ja}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}jo(t,n){const s=xC[t];return`${this.Ko}/v1/${n}:${s}`}terminate(){}}/**
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
 */class VC{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const Ge="WebChannelConnection";class kC extends MC{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=lm();return new Promise((g,p)=>{const y=new pT;y.setWithCredentials(!0),y.listenOnce(yT.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Rc.NO_ERROR:const w=y.getResponseJson();lt(Ge,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(w)),g(w);break;case Rc.TIMEOUT:lt(Ge,`RPC '${t}' ${f} timed out`),p(new ft(tt.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const D=y.getStatus();if(lt(Ge,`RPC '${t}' ${f} failed with status:`,D,"response text:",y.getResponseText()),D>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const Q=B==null?void 0:B.error;if(Q&&Q.status&&Q.message){const W=function(pt){const dt=pt.toLowerCase().replace(/_/g,"-");return Object.values(tt).indexOf(dt)>=0?dt:tt.UNKNOWN}(Q.status);p(new ft(W,Q.message))}else p(new ft(tt.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ft(tt.UNAVAILABLE,"Connection failed."));break;default:Tt(9055,{l_:t,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{lt(Ge,`RPC '${t}' ${f} completed.`)}});const E=JSON.stringify(o);lt(Ge,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)})}T_(t,n,s){const o=lm(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=TT(),g=vT(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");lt(Ge,`Creating RPC '${t}' stream ${o}: ${E}`,p);const w=f.createWebChannel(E,p);let D=!1,B=!1;const Q=new VC({Zo:et=>{B?lt(Ge,`Not sending because RPC '${t}' stream ${o} is closed:`,et):(D||(lt(Ge,`Opening RPC '${t}' stream ${o} transport.`),w.open(),D=!0),lt(Ge,`RPC '${t}' stream ${o} sending:`,et),w.send(et))},Xo:()=>w.close()}),W=(et,pt,dt)=>{et.listen(pt,ct=>{try{dt(ct)}catch(Rt){setTimeout(()=>{throw Rt},0)}})};return W(w,gl.EventType.OPEN,()=>{B||(lt(Ge,`RPC '${t}' stream ${o} transport opened.`),Q.__())}),W(w,gl.EventType.CLOSE,()=>{B||(B=!0,lt(Ge,`RPC '${t}' stream ${o} transport closed`),Q.u_())}),W(w,gl.EventType.ERROR,et=>{B||(B=!0,Ha(Ge,`RPC '${t}' stream ${o} transport errored. Name:`,et.name,"Message:",et.message),Q.u_(new ft(tt.UNAVAILABLE,"The operation could not be completed")))}),W(w,gl.EventType.MESSAGE,et=>{var pt;if(!B){const dt=et.data[0];Qt(!!dt,16349);const ct=dt,Rt=(ct==null?void 0:ct.error)||((pt=ct[0])===null||pt===void 0?void 0:pt.error);if(Rt){lt(Ge,`RPC '${t}' stream ${o} received error:`,Rt);const ut=Rt.status;let Ct=function(I){const x=ve[I];if(x!==void 0)return tE(x)}(ut),O=Rt.message;Ct===void 0&&(Ct=tt.INTERNAL,O="Unknown error status: "+ut+" with message "+Rt.message),B=!0,Q.u_(new ft(Ct,O)),w.close()}else lt(Ge,`RPC '${t}' stream ${o} received:`,dt),Q.c_(dt)}}),W(g,_T.STAT_EVENT,et=>{et.stat===Xd.PROXY?lt(Ge,`RPC '${t}' stream ${o} detected buffering proxy`):et.stat===Xd.NOPROXY&&lt(Ge,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{Q.a_()},0),Q}}function Pd(){return typeof document<"u"?document:null}/**
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
 */function dh(r){return new zI(r,!0)}/**
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
 */class mE{constructor(t,n,s=1e3,o=1.5,u=6e4){this.xi=t,this.timerId=n,this.I_=s,this.E_=o,this.d_=u,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const n=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),o=Math.max(0,n-s);o>0&&lt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const Bv="PersistentStream";class gE{constructor(t,n,s,o,u,f,g,p){this.xi=t,this.y_=s,this.w_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new mE(t,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():n&&n.code===tt.RESOURCE_EXHAUSTED?(Ki(n.toString()),Ki("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===tt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.S_===n&&this.K_(s,o)},s=>{t(()=>{const o=new ft(tt.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(o)})})}K_(t,n){const s=this.U_(this.S_);this.stream=this.G_(t,n),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.W_(o))}),this.stream.onMessage(o=>{s(()=>++this.v_==1?this.z_(o):this.onNext(o))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return lt(Bv,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return n=>{this.xi.enqueueAndForget(()=>this.S_===t?n():(lt(Bv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PC extends gE{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}G_(t,n){return this.connection.T_("Listen",t,n)}z_(t){return this.onNext(t)}onNext(t){this.C_.reset();const n=qI(this.serializer,t),s=function(u){if(!("targetChange"in u))return wt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?wt.min():f.readTime?fi(f.readTime):wt.min()}(t);return this.listener.j_(n,s)}H_(t){const n={};n.database=am(this.serializer),n.addTarget=function(u,f){let g;const p=f.target;if(g=tm(p)?{documents:GI(u,p)}:{query:QI(u,p).gt},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=iE(u,f.resumeToken);const y=im(u,f.expectedCount);y!==null&&(g.expectedCount=y)}else if(f.snapshotVersion.compareTo(wt.min())>0){g.readTime=Kc(u,f.snapshotVersion.toTimestamp());const y=im(u,f.expectedCount);y!==null&&(g.expectedCount=y)}return g}(this.serializer,t);const s=YI(this.serializer,t);s&&(n.labels=s),this.L_(n)}J_(t){const n={};n.database=am(this.serializer),n.removeTarget=t,this.L_(n)}}class UC extends gE{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(t,n){return this.connection.T_("Write",t,n)}z_(t){return Qt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Qt(!t.writeResults||t.writeResults.length===0,55816),this.listener.X_()}onNext(t){Qt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.C_.reset();const n=FI(t.writeResults,t.commitTime),s=fi(t.commitTime);return this.listener.ea(s,n)}ta(){const t={};t.database=am(this.serializer),this.L_(t)}Z_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>HI(this.serializer,s))};this.L_(n)}}/**
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
 */class LC{}class zC extends LC{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.na=!1}ra(){if(this.na)throw new ft(tt.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,s,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.zo(t,rm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ft(tt.UNKNOWN,u.toString())})}Yo(t,n,s,o,u){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Yo(t,rm(n,s),o,f,g,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ft(tt.UNKNOWN,f.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class jC{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Ki(n),this.oa=!1):lt("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const Vs="RemoteStore";class BC{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=u,this.Ea.No(f=>{s.enqueueAndForget(async()=>{Bs(this)&&(lt(Vs,"Restarting streams for network reachability change."),await async function(p){const y=It(p);y.Ta.add(4),await Hl(y),y.da.set("Unknown"),y.Ta.delete(4),await mh(y)}(this))})}),this.da=new jC(s,o)}}async function mh(r){if(Bs(r))for(const t of r.Ia)await t(!0)}async function Hl(r){for(const t of r.Ia)await t(!1)}function pE(r,t){const n=It(r);n.Pa.has(t.targetId)||(n.Pa.set(t.targetId,t),Hm(n)?qm(n):no(n).M_()&&Bm(n,t))}function jm(r,t){const n=It(r),s=no(n);n.Pa.delete(t),s.M_()&&yE(n,t),n.Pa.size===0&&(s.M_()?s.N_():Bs(n)&&n.da.set("Unknown"))}function Bm(r,t){if(r.Aa.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(wt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}no(r).H_(t)}function yE(r,t){r.Aa.Ke(t),no(r).J_(t)}function qm(r){r.Aa=new kI({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Pa.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),no(r).start(),r.da._a()}function Hm(r){return Bs(r)&&!no(r).F_()&&r.Pa.size>0}function Bs(r){return It(r).Ta.size===0}function _E(r){r.Aa=void 0}async function qC(r){r.da.set("Online")}async function HC(r){r.Pa.forEach((t,n)=>{Bm(r,t)})}async function FC(r,t){_E(r),Hm(r)?(r.da.ca(t),qm(r)):r.da.set("Unknown")}async function GC(r,t,n){if(r.da.set("Online"),t instanceof nE&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const g of u.targetIds)o.Pa.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o.Pa.delete(g),o.Aa.removeTarget(g))}(r,t)}catch(s){lt(Vs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Xc(r,s)}else if(t instanceof Nc?r.Aa.Xe(t):t instanceof eE?r.Aa.ot(t):r.Aa.nt(t),!n.isEqual(wt.min()))try{const s=await dE(r.localStore);n.compareTo(s)>=0&&await function(u,f){const g=u.Aa.It(f);return g.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Pa.get(y);E&&u.Pa.set(y,E.withResumeToken(p.resumeToken,f))}}),g.targetMismatches.forEach((p,y)=>{const E=u.Pa.get(p);if(!E)return;u.Pa.set(p,E.withResumeToken(Be.EMPTY_BYTE_STRING,E.snapshotVersion)),yE(u,p);const w=new Nr(E.target,p,y,E.sequenceNumber);Bm(u,w)}),u.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(s){lt(Vs,"Failed to raise snapshot:",s),await Xc(r,s)}}async function Xc(r,t,n){if(!eo(t))throw t;r.Ta.add(1),await Hl(r),r.da.set("Offline"),n||(n=()=>dE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{lt(Vs,"Retrying IndexedDB access"),await n(),r.Ta.delete(1),await mh(r)})}function vE(r,t){return t().catch(n=>Xc(r,n,t))}async function gh(r){const t=It(r),n=qr(t);let s=t.ha.length>0?t.ha[t.ha.length-1].batchId:wm;for(;QC(t);)try{const o=await IC(t.localStore,s);if(o===null){t.ha.length===0&&n.N_();break}s=o.batchId,KC(t,o)}catch(o){await Xc(t,o)}TE(t)&&EE(t)}function QC(r){return Bs(r)&&r.ha.length<10}function KC(r,t){r.ha.push(t);const n=qr(r);n.M_()&&n.Y_&&n.Z_(t.mutations)}function TE(r){return Bs(r)&&!qr(r).F_()&&r.ha.length>0}function EE(r){qr(r).start()}async function YC(r){qr(r).ta()}async function XC(r){const t=qr(r);for(const n of r.ha)t.Z_(n.mutations)}async function $C(r,t,n){const s=r.ha.shift(),o=Mm.from(s,t,n);await vE(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await gh(r)}async function ZC(r,t){t&&qr(r).Y_&&await async function(s,o){if(function(f){return MI(f)&&f!==tt.ABORTED}(o.code)){const u=s.ha.shift();qr(s).O_(),await vE(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await gh(s)}}(r,t),TE(r)&&EE(r)}async function qv(r,t){const n=It(r);n.asyncQueue.verifyOperationInProgress(),lt(Vs,"RemoteStore received new credentials");const s=Bs(n);n.Ta.add(3),await Hl(n),s&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ta.delete(3),await mh(n)}async function WC(r,t){const n=It(r);t?(n.Ta.delete(2),await mh(n)):t||(n.Ta.add(2),await Hl(n),n.da.set("Unknown"))}function no(r){return r.Ra||(r.Ra=function(n,s,o){const u=It(n);return u.ra(),new PC(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:qC.bind(null,r),n_:HC.bind(null,r),i_:FC.bind(null,r),j_:GC.bind(null,r)}),r.Ia.push(async t=>{t?(r.Ra.O_(),Hm(r)?qm(r):r.da.set("Unknown")):(await r.Ra.stop(),_E(r))})),r.Ra}function qr(r){return r.Va||(r.Va=function(n,s,o){const u=It(n);return u.ra(),new UC(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:YC.bind(null,r),i_:ZC.bind(null,r),X_:XC.bind(null,r),ea:$C.bind(null,r)}),r.Ia.push(async t=>{t?(r.Va.O_(),await gh(r)):(await r.Va.stop(),r.ha.length>0&&(lt(Vs,`Stopping write stream with ${r.ha.length} pending writes`),r.ha=[]))})),r.Va}/**
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
 */class Fm{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,g=new Fm(t,n,f,o,u);return g.start(s),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ft(tt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gm(r,t){if(Ki("AsyncQueue",`${t}: ${r}`),eo(r))return new ft(tt.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class qa{static emptySet(t){return new qa(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||gt.comparator(n.key,s.key):(n,s)=>gt.comparator(n.key,s.key),this.keyedMap=pl(),this.sortedSet=new oe(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof qa)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new qa;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Hv{constructor(){this.ma=new oe(gt.comparator)}track(t){const n=t.doc.key,s=this.ma.get(n);s?t.type!==0&&s.type===3?this.ma=this.ma.insert(n,t):t.type===3&&s.type!==1?this.ma=this.ma.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ma=this.ma.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ma=this.ma.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ma=this.ma.remove(n):t.type===1&&s.type===2?this.ma=this.ma.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ma=this.ma.insert(n,{type:2,doc:t.doc}):Tt(63341,{Vt:t,fa:s}):this.ma=this.ma.insert(n,t)}ga(){const t=[];return this.ma.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ya{constructor(t,n,s,o,u,f,g,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new Ya(t,n,qa.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class JC{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(t=>t.Sa())}}class t2{constructor(){this.queries=Fv(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,s){const o=It(n),u=o.queries;o.queries=Fv(),u.forEach((f,g)=>{for(const p of g.ya)p.onError(s)})})(this,new ft(tt.ABORTED,"Firestore shutting down"))}}function Fv(){return new zs(r=>qT(r),lh)}async function e2(r,t){const n=It(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.wa()&&t.Sa()&&(s=2):(u=new JC,s=t.Sa()?0:1);try{switch(s){case 0:u.pa=await n.onListen(o,!0);break;case 1:u.pa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=Gm(f,`Initialization of query '${ka(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,u),u.ya.push(t),t.Da(n.onlineState),u.pa&&t.va(u.pa)&&Qm(n)}async function n2(r,t){const n=It(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ya.indexOf(t);f>=0&&(u.ya.splice(f,1),u.ya.length===0?o=t.Sa()?0:1:!u.wa()&&t.Sa()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function i2(r,t){const n=It(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const g of f.ya)g.va(o)&&(s=!0);f.pa=o}}s&&Qm(n)}function r2(r,t,n){const s=It(r),o=s.queries.get(t);if(o)for(const u of o.ya)u.onError(n);s.queries.delete(t)}function Qm(r){r.ba.forEach(t=>{t.next()})}var um,Gv;(Gv=um||(um={})).Ca="default",Gv.Cache="cache";class s2{constructor(t,n,s){this.query=t,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Ya(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Ma?this.Oa(t)&&(this.Fa.next(t),n=!0):this.Na(t,this.onlineState)&&(this.Ba(t),n=!0),this.xa=t,n}onError(t){this.Fa.error(t)}Da(t){this.onlineState=t;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,t)&&(this.Ba(this.xa),n=!0),n}Na(t,n){if(!t.fromCache||!this.Sa())return!0;const s=n!=="Offline";return(!this.options.La||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Oa(t){if(t.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(t){t=Ya.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Ma=!0,this.Fa.next(t)}Sa(){return this.options.source!==um.Cache}}/**
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
 */class AE{constructor(t){this.key=t}}class bE{constructor(t){this.key=t}}class a2{constructor(t,n){this.query=t,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Ut(),this.mutatedKeys=Ut(),this.Ha=HT(t),this.Ja=new qa(this.Ha)}get Ya(){return this.Ga}Za(t,n){const s=n?n.Xa:new Hv,o=n?n.Ja:this.Ja;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,w)=>{const D=o.get(E),B=uh(this.query,w)?w:null,Q=!!D&&this.mutatedKeys.has(D.key),W=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let et=!1;D&&B?D.data.isEqual(B.data)?Q!==W&&(s.track({type:3,doc:B}),et=!0):this.eu(D,B)||(s.track({type:2,doc:B}),et=!0,(p&&this.Ha(B,p)>0||y&&this.Ha(B,y)<0)&&(g=!0)):!D&&B?(s.track({type:0,doc:B}),et=!0):D&&!B&&(s.track({type:1,doc:D}),et=!0,(p||y)&&(g=!0)),et&&(B?(f=f.add(B),u=W?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{Ja:f,Xa:s,Cs:g,mutatedKeys:u}}eu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.Ja;this.Ja=t.Ja,this.mutatedKeys=t.mutatedKeys;const f=t.Xa.ga();f.sort((E,w)=>function(B,Q){const W=et=>{switch(et){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tt(20277,{Vt:et})}};return W(B)-W(Q)}(E.type,w.type)||this.Ha(E.doc,w.doc)),this.tu(s),o=o!=null&&o;const g=n&&!o?this.nu():[],p=this.ja.size===0&&this.current&&!o?1:0,y=p!==this.za;return this.za=p,f.length!==0||y?{snapshot:new Ya(this.query,t.Ja,u,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:g}:{ru:g}}Da(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Hv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(t){return!this.Ga.has(t)&&!!this.Ja.has(t)&&!this.Ja.get(t).hasLocalMutations}tu(t){t&&(t.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=t.current)}nu(){if(!this.current)return[];const t=this.ja;this.ja=Ut(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const n=[];return t.forEach(s=>{this.ja.has(s)||n.push(new bE(s))}),this.ja.forEach(s=>{t.has(s)||n.push(new AE(s))}),n}su(t){this.Ga=t.$s,this.ja=Ut();const n=this.Za(t.documents);return this.applyChanges(n,!0)}ou(){return Ya.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Km="SyncEngine";class o2{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class l2{constructor(t){this.key=t,this._u=!1}}class u2{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.au={},this.uu=new zs(g=>qT(g),lh),this.cu=new Map,this.lu=new Set,this.hu=new oe(gt.comparator),this.Pu=new Map,this.Tu=new Pm,this.Iu={},this.Eu=new Map,this.du=Ka.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function c2(r,t,n=!0){const s=DE(r);let o;const u=s.uu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.ou()):o=await SE(s,t,n,!0),o}async function h2(r,t){const n=DE(r);await SE(n,t,!0,!1)}async function SE(r,t,n,s){const o=await CC(r.localStore,hi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let g;return s&&(g=await f2(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&pE(r.remoteStore,o),g}async function f2(r,t,n,s,o){r.Ru=(w,D,B)=>async function(W,et,pt,dt){let ct=et.view.Za(pt);ct.Cs&&(ct=await Uv(W.localStore,et.query,!1).then(({documents:O})=>et.view.Za(O,ct)));const Rt=dt&&dt.targetChanges.get(et.targetId),ut=dt&&dt.targetMismatches.get(et.targetId)!=null,Ct=et.view.applyChanges(ct,W.isPrimaryClient,Rt,ut);return Kv(W,et.targetId,Ct.ru),Ct.snapshot}(r,w,D,B);const u=await Uv(r.localStore,t,!0),f=new a2(t,u.$s),g=f.Za(u.documents),p=ql.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(g,r.isPrimaryClient,p);Kv(r,n,y.ru);const E=new o2(t,n,f);return r.uu.set(t,E),r.cu.has(n)?r.cu.get(n).push(t):r.cu.set(n,[t]),y.snapshot}async function d2(r,t,n){const s=It(r),o=s.uu.get(t),u=s.cu.get(o.targetId);if(u.length>1)return s.cu.set(o.targetId,u.filter(f=>!lh(f,t))),void s.uu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await om(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&jm(s.remoteStore,o.targetId),cm(s,o.targetId)}).catch(to)):(cm(s,o.targetId),await om(s.localStore,o.targetId,!0))}async function m2(r,t){const n=It(r),s=n.uu.get(t),o=n.cu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),jm(n.remoteStore,s.targetId))}async function g2(r,t,n){const s=A2(r);try{const o=await function(f,g){const p=It(f),y=Re.now(),E=g.reduce((B,Q)=>B.add(Q.key),Ut());let w,D;return p.persistence.runTransaction("Locally write mutations","readwrite",B=>{let Q=Yi(),W=Ut();return p.Bs.getEntries(B,E).next(et=>{Q=et,Q.forEach((pt,dt)=>{dt.isValidDocument()||(W=W.add(pt))})}).next(()=>p.localDocuments.getOverlayedDocuments(B,Q)).next(et=>{w=et;const pt=[];for(const dt of g){const ct=CI(dt,w.get(dt.key).overlayedDocument);ct!=null&&pt.push(new js(dt.key,ct,VT(ct.value.mapValue),qn.exists(!0)))}return p.mutationQueue.addMutationBatch(B,y,pt,g)}).next(et=>{D=et;const pt=et.applyToLocalDocumentSet(w,W);return p.documentOverlayCache.saveOverlays(B,et.batchId,pt)})}).then(()=>({batchId:D.batchId,changes:GT(w)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,g,p){let y=f.Iu[f.currentUser.toKey()];y||(y=new oe(Ot)),y=y.insert(g,p),f.Iu[f.currentUser.toKey()]=y}(s,o.batchId,n),await Fl(s,o.changes),await gh(s.remoteStore)}catch(o){const u=Gm(o,"Failed to persist write");n.reject(u)}}async function wE(r,t){const n=It(r);try{const s=await wC(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Pu.get(u);f&&(Qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f._u=!0:o.modifiedDocuments.size>0?Qt(f._u,14607):o.removedDocuments.size>0&&(Qt(f._u,42227),f._u=!1))}),await Fl(n,s,t)}catch(s){await to(s)}}function Qv(r,t,n){const s=It(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.uu.forEach((u,f)=>{const g=f.view.Da(t);g.snapshot&&o.push(g.snapshot)}),function(f,g){const p=It(f);p.onlineState=g;let y=!1;p.queries.forEach((E,w)=>{for(const D of w.ya)D.Da(g)&&(y=!0)}),y&&Qm(p)}(s.eventManager,t),o.length&&s.au.j_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function p2(r,t,n){const s=It(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Pu.get(t),u=o&&o.key;if(u){let f=new oe(gt.comparator);f=f.insert(u,Ke.newNoDocument(u,wt.min()));const g=Ut().add(u),p=new fh(wt.min(),new Map,new oe(Ot),f,g);await wE(s,p),s.hu=s.hu.remove(u),s.Pu.delete(t),Ym(s)}else await om(s.localStore,t,!1).then(()=>cm(s,t,n)).catch(to)}async function y2(r,t){const n=It(r),s=t.batch.batchId;try{const o=await SC(n.localStore,t);IE(n,s,null),RE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fl(n,o)}catch(o){await to(o)}}async function _2(r,t,n){const s=It(r);try{const o=await function(f,g){const p=It(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,g).next(w=>(Qt(w!==null,37113),E=w.keys(),p.mutationQueue.removeMutationBatch(y,w))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,g)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,t);IE(s,t,n),RE(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Fl(s,o)}catch(o){await to(o)}}function RE(r,t){(r.Eu.get(t)||[]).forEach(n=>{n.resolve()}),r.Eu.delete(t)}function IE(r,t,n){const s=It(r);let o=s.Iu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Iu[s.currentUser.toKey()]=o}}function cm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.cu.get(t))r.uu.delete(s),n&&r.au.Vu(s,n);r.cu.delete(t),r.isPrimaryClient&&r.Tu.Hr(t).forEach(s=>{r.Tu.containsKey(s)||CE(r,s)})}function CE(r,t){r.lu.delete(t.path.canonicalString());const n=r.hu.get(t);n!==null&&(jm(r.remoteStore,n),r.hu=r.hu.remove(t),r.Pu.delete(n),Ym(r))}function Kv(r,t,n){for(const s of n)s instanceof AE?(r.Tu.addReference(s.key,t),v2(r,s)):s instanceof bE?(lt(Km,"Document no longer in limbo: "+s.key),r.Tu.removeReference(s.key,t),r.Tu.containsKey(s.key)||CE(r,s.key)):Tt(19791,{mu:s})}function v2(r,t){const n=t.key,s=n.path.canonicalString();r.hu.get(n)||r.lu.has(s)||(lt(Km,"New document in limbo: "+n),r.lu.add(s),Ym(r))}function Ym(r){for(;r.lu.size>0&&r.hu.size<r.maxConcurrentLimboResolutions;){const t=r.lu.values().next().value;r.lu.delete(t);const n=new gt(ie.fromString(t)),s=r.du.next();r.Pu.set(s,new l2(n)),r.hu=r.hu.insert(n,s),pE(r.remoteStore,new Nr(hi(Nm(n.path)),s,"TargetPurposeLimboResolution",sh.le))}}async function Fl(r,t,n){const s=It(r),o=[],u=[],f=[];s.uu.isEmpty()||(s.uu.forEach((g,p)=>{f.push(s.Ru(p,t,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const w=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(y){o.push(y);const w=Lm.Rs(p.targetId,y);u.push(w)}}))}),await Promise.all(f),s.au.j_(o),await async function(p,y){const E=It(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>$.forEach(y,D=>$.forEach(D.ds,B=>E.persistence.referenceDelegate.addReference(w,D.targetId,B)).next(()=>$.forEach(D.As,B=>E.persistence.referenceDelegate.removeReference(w,D.targetId,B)))))}catch(w){if(!eo(w))throw w;lt(zm,"Failed to update sequence numbers: "+w)}for(const w of y){const D=w.targetId;if(!w.fromCache){const B=E.xs.get(D),Q=B.snapshotVersion,W=B.withLastLimboFreeSnapshotVersion(Q);E.xs=E.xs.insert(D,W)}}}(s.localStore,u))}async function T2(r,t){const n=It(r);if(!n.currentUser.isEqual(t)){lt(Km,"User change. New user:",t.toKey());const s=await fE(n.localStore,t);n.currentUser=t,function(u,f){u.Eu.forEach(g=>{g.forEach(p=>{p.reject(new ft(tt.CANCELLED,f))})}),u.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Fl(n,s.ks)}}function E2(r,t){const n=It(r),s=n.Pu.get(t);if(s&&s._u)return Ut().add(s.key);{let o=Ut();const u=n.cu.get(t);if(!u)return o;for(const f of u){const g=n.uu.get(f);o=o.unionWith(g.view.Ya)}return o}}function DE(r){const t=It(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=wE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=E2.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=p2.bind(null,t),t.au.j_=i2.bind(null,t.eventManager),t.au.Vu=r2.bind(null,t.eventManager),t}function A2(r){const t=It(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=y2.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_2.bind(null,t),t}class $c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=dh(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,n){return null}bu(t,n){return null}wu(t){return bC(this.persistence,new TC,t.initialUser,this.serializer)}yu(t){return new hE(Um.fi,this.serializer)}pu(t){return new NC}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$c.provider={build:()=>new $c};class b2 extends $c{constructor(t){super(),this.cacheSizeBytes=t}Su(t,n){Qt(this.persistence.referenceDelegate instanceof Yc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new sC(s,t.asyncQueue,n)}yu(t){const n=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new hE(s=>Yc.fi(s,n),this.serializer)}}class hm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=T2.bind(null,this.syncEngine),await WC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new t2}()}createDatastore(t){const n=dh(t.databaseInfo.databaseId),s=function(u){return new kC(u)}(t.databaseInfo);return function(u,f,g,p){return new zC(u,f,g,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,g){return new BC(s,o,u,f,g)}(this.localStore,this.datastore,t.asyncQueue,n=>Qv(this.syncEngine,n,0),function(){return jv.C()?new jv:new OC}())}createSyncEngine(t,n){return function(o,u,f,g,p,y,E){const w=new u2(o,u,f,g,p,y);return E&&(w.Au=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=It(o);lt(Vs,"RemoteStore shutting down."),u.Ta.add(5),await Hl(u),u.Ea.shutdown(),u.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hm.provider={build:()=>new hm};/**
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
 *//**
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
 */class S2{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.vu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.vu(this.observer.error,t):Ki("Uncaught Error in snapshot listener:",t.toString()))}Cu(){this.muted=!0}vu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Hr="FirestoreClient";class w2{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Qe.UNAUTHENTICATED,this.clientId=ST.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{lt(Hr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(lt(Hr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Gm(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ud(r,t){r.asyncQueue.verifyOperationInProgress(),lt(Hr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await fE(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Yv(r,t){r.asyncQueue.verifyOperationInProgress();const n=await R2(r);lt(Hr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>qv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>qv(t.remoteStore,o)),r._onlineComponents=t}async function R2(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){lt(Hr,"Using user provided OfflineComponentProvider");try{await Ud(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===tt.FAILED_PRECONDITION||o.code===tt.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Ha("Error using user provided cache. Falling back to memory cache: "+n),await Ud(r,new $c)}}else lt(Hr,"Using default OfflineComponentProvider"),await Ud(r,new b2(void 0));return r._offlineComponents}async function NE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(lt(Hr,"Using user provided OnlineComponentProvider"),await Yv(r,r._uninitializedComponentsProvider._online)):(lt(Hr,"Using default OnlineComponentProvider"),await Yv(r,new hm))),r._onlineComponents}function I2(r){return NE(r).then(t=>t.syncEngine)}async function Xv(r){const t=await NE(r),n=t.eventManager;return n.onListen=c2.bind(null,t.syncEngine),n.onUnlisten=d2.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=h2.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=m2.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function OE(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const $v=new Map;/**
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
 */function xE(r,t,n){if(!n)throw new ft(tt.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function C2(r,t,n,s){if(t===!0&&s===!0)throw new ft(tt.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Zv(r){if(!gt.isDocumentKey(r))throw new ft(tt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Wv(r){if(gt.isDocumentKey(r))throw new ft(tt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ph(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Tt(12329,{type:typeof r})}function kr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ft(tt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ph(r);throw new ft(tt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */const ME="firestore.googleapis.com",Jv=!0;class t0{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new ft(tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ME,this.ssl=Jv}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Jv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=cE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<iC)throw new ft(tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}C2("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=OE((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ft(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ft(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ft(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ft(tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ft(tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t0(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new VR;switch(s.type){case"firstParty":return new LR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ft(tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=$v.get(n);s&&(lt("ComponentProvider","Removing Datastore"),$v.delete(n),s.terminate())}(this),Promise.resolve()}}function D2(r,t,n,s={}){var o;r=kr(r,yh);const u=Vl(t),f=r._getSettings(),g=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${n}`;u&&(w0(`https://${p}`),R0("Firestore",!0)),f.host!==ME&&f.host!==p&&Ha("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:p,ssl:u,emulatorOptions:s});if(!Os(y,g)&&(r._setSettings(y),s.mockUserToken)){let E,w;if(typeof s.mockUserToken=="string")E=s.mockUserToken,w=Qe.MOCK_USER;else{E=aS(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new ft(tt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Qe(D)}r._authCredentials=new kR(new AT(E,w))}}/**
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
 */class io{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new io(this.firestore,t,this._query)}}class sn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sn(this.firestore,t,this._key)}}class Pr extends io{constructor(t,n,s){super(t,n,Nm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sn(this.firestore,null,new gt(t))}withConverter(t){return new Pr(this.firestore,t,this._path)}}function Ec(r,t,...n){if(r=Je(r),xE("collection","path",t),r instanceof yh){const s=ie.fromString(t,...n);return Wv(s),new Pr(r,null,s)}{if(!(r instanceof sn||r instanceof Pr))throw new ft(tt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ie.fromString(t,...n));return Wv(s),new Pr(r.firestore,null,s)}}function fm(r,t,...n){if(r=Je(r),arguments.length===1&&(t=ST.newId()),xE("doc","path",t),r instanceof yh){const s=ie.fromString(t,...n);return Zv(s),new sn(r,null,new gt(s))}{if(!(r instanceof sn||r instanceof Pr))throw new ft(tt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ie.fromString(t,...n));return Zv(s),new sn(r.firestore,r instanceof Pr?r.converter:null,new gt(s))}}/**
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
 */const e0="AsyncQueue";class n0{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new mE(this,"async_queue_retry"),this.ec=()=>{const s=Pd();s&&lt(e0,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=t;const n=Pd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const n=Pd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Ns;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!eo(t))throw t;lt(e0,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const n=this.tc.then(()=>(this.Yu=!0,t().catch(s=>{throw this.Ju=s,this.Yu=!1,Ki("INTERNAL UNHANDLED ERROR: ",i0(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=n,n}enqueueAfterDelay(t,n,s){this.nc(),this.Xu.indexOf(t)>-1&&(n=0);const o=Fm.createAndSchedule(this,t,n,s,u=>this.oc(u));return this.Hu.push(o),o}nc(){this.Ju&&Tt(47125,{_c:i0(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const n of this.Hu)if(n.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const n=this.Hu.indexOf(t);this.Hu.splice(n,1)}}function i0(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
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
 */function r0(r){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Xa extends yh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new n0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new n0(t),this._firestoreClient=void 0,await t}}}function N2(r,t){const n=typeof r=="object"?r:V0(),s=typeof r=="string"?r:Bc,o=Pl(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=rS("firestore");u&&D2(o,...u)}return o}function VE(r){if(r._terminated)throw new ft(tt.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||O2(r),r._firestoreClient}function O2(r){var t,n,s;const o=r._freezeSettings(),u=function(g,p,y,E){return new JR(g,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,OE(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new w2(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(g){const p=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class $a{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $a(Be.fromBase64String(t))}catch(n){throw new ft(tt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new $a(Be.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Xm{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ft(tt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class kE{constructor(t){this._methodName=t}}/**
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
 */class $m{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ft(tt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ft(tt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ot(this._lat,t._lat)||Ot(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Zm{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
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
 */const x2=/^__.*__$/;class M2{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new js(t,this.data,this.fieldMask,n,this.fieldTransforms):new Bl(t,this.data,n,this.fieldTransforms)}}function PE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tt(40011,{hc:r})}}class Wm{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Pc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(t){return new Wm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Tc({path:s,Ec:!1});return o.dc(t),o}Ac(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Tc({path:s,Ec:!1});return o.Pc(),o}Rc(t){return this.Tc({path:void 0,Ec:!0})}Vc(t){return Zc(t,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let t=0;t<this.path.length;t++)this.dc(this.path.get(t))}dc(t){if(t.length===0)throw this.Vc("Document fields must not be empty");if(PE(this.hc)&&x2.test(t))throw this.Vc('Document fields cannot begin and end with "__"')}}class V2{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||dh(t)}gc(t,n,s,o=!1){return new Wm({hc:t,methodName:n,fc:s,path:je.emptyPath(),Ec:!1,mc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jm(r){const t=r._freezeSettings(),n=dh(r._databaseId);return new V2(r._databaseId,!!t.ignoreUndefinedProperties,n)}function UE(r,t,n,s,o,u={}){const f=r.gc(u.merge||u.mergeFields?2:0,t,n,o);jE("Data must be an object, but it was:",f,s);const g=LE(s,f);let p,y;if(u.merge)p=new Bn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const D=P2(t,w,n);if(!f.contains(D))throw new ft(tt.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);L2(E,D)||E.push(D)}p=new Bn(E),y=f.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,y=f.fieldTransforms;return new M2(new Nn(g),p,y)}function k2(r,t,n,s=!1){return tg(n,r.gc(s?4:3,t))}function tg(r,t){if(zE(r=Je(r)))return jE("Unsupported field value:",t,r),LE(r,t);if(r instanceof kE)return function(s,o){if(!PE(o.hc))throw o.Vc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Vc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Ec&&t.hc!==4)throw t.Vc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const g of s){let p=tg(g,o.Rc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=Je(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return AI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Re.fromDate(s);return{timestampValue:Kc(o.serializer,u)}}if(s instanceof Re){const u=new Re(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Kc(o.serializer,u)}}if(s instanceof $m)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof $a)return{bytesValue:iE(o.serializer,s._byteString)};if(s instanceof sn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Vc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:km(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Zm)return function(f,g){return{mapValue:{fields:{[xT]:{stringValue:MT},[qc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw g.Vc("VectorValues must only contain numeric values.");return Om(g.serializer,y)})}}}}}}(s,o);throw o.Vc(`Unsupported field value: ${ph(s)}`)}(r,t)}function LE(r,t){const n={};return RT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ls(r,(s,o)=>{const u=tg(o,t.Ic(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function zE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Re||r instanceof $m||r instanceof $a||r instanceof sn||r instanceof kE||r instanceof Zm)}function jE(r,t,n){if(!zE(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=ph(n);throw s==="an object"?t.Vc(r+" a custom object"):t.Vc(r+" "+s)}}function P2(r,t,n){if((t=Je(t))instanceof Xm)return t._internalPath;if(typeof t=="string")return BE(r,t);throw Zc("Field path arguments must be of type string or ",r,!1,void 0,n)}const U2=new RegExp("[~\\*/\\[\\]]");function BE(r,t,n){if(t.search(U2)>=0)throw Zc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Xm(...t.split("."))._internalPath}catch{throw Zc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Zc(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new ft(tt.INVALID_ARGUMENT,g+r+p)}function L2(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class qE{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new z2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(HE("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class z2 extends qE{data(){return super.data()}}function HE(r,t){return typeof t=="string"?BE(r,t):t instanceof Xm?t._internalPath:t._delegate._internalPath}/**
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
 */function j2(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ft(tt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eg{}class B2 extends eg{}function s0(r,t,...n){let s=[];t instanceof eg&&s.push(t),s=s.concat(n),function(u){const f=u.filter(p=>p instanceof ig).length,g=u.filter(p=>p instanceof ng).length;if(f>1||f>0&&g>0)throw new ft(tt.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class ng extends B2{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new ng(t,n,s)}_apply(t){const n=this._parse(t);return FE(t._query,n),new io(t.firestore,t.converter,em(t._query,n))}_parse(t){const n=Jm(t.firestore);return function(u,f,g,p,y,E,w){let D;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ft(tt.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){o0(w,E);const Q=[];for(const W of w)Q.push(a0(p,u,W));D={arrayValue:{values:Q}}}else D=a0(p,u,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||o0(w,E),D=k2(g,f,w,E==="in"||E==="not-in");return Te.create(y,E,D)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class ig extends eg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new ig(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Fn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,u){let f=o;const g=u.getFlattenedFilters();for(const p of g)FE(f,p),f=em(f,p)}(t._query,n),new io(t.firestore,t.converter,em(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function a0(r,t,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new ft(tt.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!BT(t)&&n.indexOf("/")!==-1)throw new ft(tt.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(ie.fromString(n));if(!gt.isDocumentKey(s))throw new ft(tt.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _v(r,new gt(s))}if(n instanceof sn)return _v(r,n._key);throw new ft(tt.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ph(n)}.`)}function o0(r,t){if(!Array.isArray(r)||r.length===0)throw new ft(tt.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function FE(r,t){const n=function(o,u){for(const f of o)for(const g of f.getFlattenedFilters())if(u.indexOf(g.op)>=0)return g.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new ft(tt.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ft(tt.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class q2{convertValue(t,n="none"){switch(Br(t)){case 0:return null;case 1:return t.booleanValue;case 2:return me(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Tt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Ls(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[qc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>me(f.doubleValue));return new Zm(u)}convertGeoPoint(t){return new $m(me(t.latitude),me(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=oh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Dl(t));default:return null}}convertTimestamp(t){const n=zr(t);return new Re(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ie.fromString(t);Qt(uE(s),9688,{name:t});const o=new Nl(s.get(1),s.get(3)),u=new gt(s.popFirst(5));return o.isEqual(n)||Ki(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function GE(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}/**
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
 */class _l{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class QE extends qE{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(HE("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Oc extends QE{data(t={}){return super.data(t)}}class H2{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new _l(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Oc(this._firestore,this._userDataWriter,s.key,s,new _l(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ft(tt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(g=>{const p=new Oc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new _l(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(g=>u||g.type!==3).map(g=>{const p=new Oc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new _l(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return g.type!==0&&(y=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),E=f.indexOf(g.doc.key)),{type:F2(g.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function F2(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tt(61501,{type:r})}}class KE extends q2{constructor(t){super(),this.firestore=t}convertBytes(t){return new $a(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function G2(r,t,n){r=kr(r,sn);const s=kr(r.firestore,Xa),o=GE(r.converter,t,n);return rg(s,[UE(Jm(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,qn.none())])}function Q2(r){return rg(kr(r.firestore,Xa),[new xm(r._key,qn.none())])}function l0(r,t){const n=kr(r.firestore,Xa),s=fm(r),o=GE(r.converter,t);return rg(n,[UE(Jm(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,qn.exists(!1))]).then(()=>s)}function u0(r,...t){var n,s,o;r=Je(r);let u={includeMetadataChanges:!1,source:"default"},f=0;typeof t[f]!="object"||r0(t[f])||(u=t[f],f++);const g={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(r0(t[f])){const w=t[f];t[f]=(n=w.next)===null||n===void 0?void 0:n.bind(w),t[f+1]=(s=w.error)===null||s===void 0?void 0:s.bind(w),t[f+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let p,y,E;if(r instanceof sn)y=kr(r.firestore,Xa),E=Nm(r._key.path),p={next:w=>{t[f]&&t[f](K2(y,r,w))},error:t[f+1],complete:t[f+2]};else{const w=kr(r,io);y=kr(w.firestore,Xa),E=w._query;const D=new KE(y);p={next:B=>{t[f]&&t[f](new H2(y,D,w,B))},error:t[f+1],complete:t[f+2]},j2(r._query)}return function(D,B,Q,W){const et=new S2(W),pt=new s2(B,et,Q);return D.asyncQueue.enqueueAndForget(async()=>e2(await Xv(D),pt)),()=>{et.Cu(),D.asyncQueue.enqueueAndForget(async()=>n2(await Xv(D),pt))}}(VE(y),E,g,p)}function rg(r,t){return function(s,o){const u=new Ns;return s.asyncQueue.enqueueAndForget(async()=>g2(await I2(s),o,u)),u.promise}(VE(r),t)}function K2(r,t,n){const s=n.docs.get(t._key),o=new KE(r);return new QE(r,o,t._key,s,new _l(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){Ja=o})(Za),di(new Hn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),g=new Xa(new PR(s.getProvider("auth-internal")),new zR(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ft(tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nl(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),g._setSettings(u),g},"PUBLIC").setMultipleInstances(!0)),On(av,ov,t),On(av,ov,"esm2017")})();var Y2="firebase",X2="11.8.1";/**
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
 */On(Y2,X2,"app");const YE="@firebase/installations",sg="0.6.17";/**
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
 */const XE=1e4,$E=`w:${sg}`,ZE="FIS_v2",$2="https://firebaseinstallations.googleapis.com/v1",Z2=60*60*1e3,W2="installations",J2="Installations";/**
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
 */const tD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ks=new Us(W2,J2,tD);function WE(r){return r instanceof Gn&&r.code.includes("request-failed")}/**
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
 */function JE({projectId:r}){return`${$2}/projects/${r}/installations`}function tA(r){return{token:r.token,requestStatus:2,expiresIn:nD(r.expiresIn),creationTime:Date.now()}}async function eA(r,t){const s=(await t.json()).error;return ks.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function nA({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function eD(r,{refreshToken:t}){const n=nA(r);return n.append("Authorization",iD(t)),n}async function iA(r){const t=await r();return t.status>=500&&t.status<600?r():t}function nD(r){return Number(r.replace("s","000"))}function iD(r){return`${ZE} ${r}`}/**
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
 */async function rD({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=JE(r),o=nA(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:ZE,appId:r.appId,sdkVersion:$E},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await iA(()=>fetch(s,g));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:tA(y.authToken)}}else throw await eA("Create Installation",p)}/**
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
 */function rA(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function sD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const aD=/^[cdef][\w-]{21}$/,dm="";function oD(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=lD(r);return aD.test(n)?n:dm}catch{return dm}}function lD(r){return sD(r).substr(0,22)}/**
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
 */function _h(r){return`${r.appName}!${r.appId}`}/**
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
 */const sA=new Map;function aA(r,t){const n=_h(r);oA(n,t),uD(n,t)}function oA(r,t){const n=sA.get(r);if(n)for(const s of n)s(t)}function uD(r,t){const n=cD();n&&n.postMessage({key:r,fid:t}),hD()}let Ds=null;function cD(){return!Ds&&"BroadcastChannel"in self&&(Ds=new BroadcastChannel("[Firebase] FID Change"),Ds.onmessage=r=>{oA(r.data.key,r.data.fid)}),Ds}function hD(){sA.size===0&&Ds&&(Ds.close(),Ds=null)}/**
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
 */const fD="firebase-installations-database",dD=1,Ps="firebase-installations-store";let Ld=null;function ag(){return Ld||(Ld=x0(fD,dD,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ps)}}})),Ld}async function Wc(r,t){const n=_h(r),o=(await ag()).transaction(Ps,"readwrite"),u=o.objectStore(Ps),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&aA(r,t.fid),t}async function lA(r){const t=_h(r),s=(await ag()).transaction(Ps,"readwrite");await s.objectStore(Ps).delete(t),await s.done}async function vh(r,t){const n=_h(r),o=(await ag()).transaction(Ps,"readwrite"),u=o.objectStore(Ps),f=await u.get(n),g=t(f);return g===void 0?await u.delete(n):await u.put(g,n),await o.done,g&&(!f||f.fid!==g.fid)&&aA(r,g.fid),g}/**
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
 */async function og(r){let t;const n=await vh(r.appConfig,s=>{const o=mD(s),u=gD(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===dm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function mD(r){const t=r||{fid:oD(),registrationStatus:0};return uA(t)}function gD(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ks.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=pD(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yD(r)}:{installationEntry:t}}async function pD(r,t){try{const n=await rD(r,t);return Wc(r.appConfig,n)}catch(n){throw WE(n)&&n.customData.serverCode===409?await lA(r.appConfig):await Wc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function yD(r){let t=await c0(r.appConfig);for(;t.registrationStatus===1;)await rA(100),t=await c0(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await og(r);return s||n}return t}function c0(r){return vh(r,t=>{if(!t)throw ks.create("installation-not-found");return uA(t)})}function uA(r){return _D(r)?{fid:r.fid,registrationStatus:0}:r}function _D(r){return r.registrationStatus===1&&r.registrationTime+XE<Date.now()}/**
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
 */async function vD({appConfig:r,heartbeatServiceProvider:t},n){const s=TD(r,n),o=eD(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:$E,appId:r.appId}},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await iA(()=>fetch(s,g));if(p.ok){const y=await p.json();return tA(y)}else throw await eA("Generate Auth Token",p)}function TD(r,{fid:t}){return`${JE(r)}/${t}/authTokens:generate`}/**
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
 */async function lg(r,t=!1){let n;const s=await vh(r.appConfig,u=>{if(!cA(u))throw ks.create("not-registered");const f=u.authToken;if(!t&&bD(f))return u;if(f.requestStatus===1)return n=ED(r,t),u;{if(!navigator.onLine)throw ks.create("app-offline");const g=wD(u);return n=AD(r,g),g}});return n?await n:s.authToken}async function ED(r,t){let n=await h0(r.appConfig);for(;n.authToken.requestStatus===1;)await rA(100),n=await h0(r.appConfig);const s=n.authToken;return s.requestStatus===0?lg(r,t):s}function h0(r){return vh(r,t=>{if(!cA(t))throw ks.create("not-registered");const n=t.authToken;return RD(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function AD(r,t){try{const n=await vD(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Wc(r.appConfig,s),n}catch(n){if(WE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lA(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Wc(r.appConfig,s)}throw n}}function cA(r){return r!==void 0&&r.registrationStatus===2}function bD(r){return r.requestStatus===2&&!SD(r)}function SD(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+Z2}function wD(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function RD(r){return r.requestStatus===1&&r.requestTime+XE<Date.now()}/**
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
 */async function ID(r){const t=r,{installationEntry:n,registrationPromise:s}=await og(t);return s?s.catch(console.error):lg(t).catch(console.error),n.fid}/**
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
 */async function CD(r,t=!1){const n=r;return await DD(n),(await lg(n,t)).token}async function DD(r){const{registrationPromise:t}=await og(r);t&&await t}/**
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
 */function ND(r){if(!r||!r.options)throw zd("App Configuration");if(!r.name)throw zd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw zd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function zd(r){return ks.create("missing-app-config-values",{valueName:r})}/**
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
 */const hA="installations",OD="installations-internal",xD=r=>{const t=r.getProvider("app").getImmediate(),n=ND(t),s=Pl(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},MD=r=>{const t=r.getProvider("app").getImmediate(),n=Pl(t,hA).getImmediate();return{getId:()=>ID(n),getToken:o=>CD(n,o)}};function VD(){di(new Hn(hA,xD,"PUBLIC")),di(new Hn(OD,MD,"PRIVATE"))}VD();On(YE,sg);On(YE,sg,"esm2017");/**
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
 */const f0="analytics",kD="firebase_id",PD="origin",UD=60*1e3,LD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ug="https://www.googletagmanager.com/gtag/js";/**
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
 */const an=new th("@firebase/analytics");/**
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
 */const zD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xn=new Us("analytics","Analytics",zD);/**
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
 */function jD(r){if(!r.startsWith(ug)){const t=xn.create("invalid-gtag-resource",{gtagURL:r});return an.warn(t.message),""}return r}function fA(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function BD(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function qD(r,t){const n=BD("firebase-js-sdk-policy",{createScriptURL:jD}),s=document.createElement("script"),o=`${ug}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function HD(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function FD(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const p=(await fA(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(g){an.error(g)}r("config",o,u)}async function GD(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const g=await fA(n);for(const p of f){const y=g.find(w=>w.measurementId===p),E=y&&t[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){an.error(u)}}function QD(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[g,p]=f;await GD(r,t,n,g,p)}else if(u==="config"){const[g,p]=f;await FD(r,t,n,s,g,p)}else if(u==="consent"){const[g,p]=f;r("consent",g,p)}else if(u==="get"){const[g,p,y]=f;r("get",g,p,y)}else if(u==="set"){const[g]=f;r("set",g)}else r(u,...f)}catch(g){an.error(g)}}return o}function KD(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=QD(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function YD(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ug)&&n.src.includes(r))return n;return null}/**
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
 */const XD=30,$D=1e3;class ZD{constructor(t={},n=$D){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const dA=new ZD;function WD(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function JD(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:WD(s)},u=LD.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let g="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw xn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function tN(r,t=dA,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw xn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw xn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new iN;return setTimeout(async()=>{g.abort()},UD),mA({appId:s,apiKey:o,measurementId:u},f,g,t)}async function mA(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=dA){var u;const{appId:f,measurementId:g}=r;try{await eN(s,t)}catch(p){if(g)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:g};throw p}try{const p=await JD(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!nN(y)){if(o.deleteThrottleMetadata(f),g)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:g};throw p}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?M_(n,o.intervalMillis,XD):M_(n,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,w),an.debug(`Calling attemptFetch again in ${E} millis`),mA(r,w,s,o)}}function eN(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(xn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function nN(r){if(!(r instanceof Gn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class iN{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function rN(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
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
 */async function sN(){if(C0())try{await D0()}catch(r){return an.warn(xn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return an.warn(xn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function aN(r,t,n,s,o,u,f){var g;const p=tN(r);p.then(B=>{n[B.measurementId]=B.appId,r.options.measurementId&&B.measurementId!==r.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${B.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(B=>an.error(B)),t.push(p);const y=sN().then(B=>{if(B)return s.getId()}),[E,w]=await Promise.all([p,y]);YD(u)||qD(u,E.measurementId),o("js",new Date);const D=(g=f==null?void 0:f.config)!==null&&g!==void 0?g:{};return D[PD]="firebase",D.update=!0,w!=null&&(D[kD]=w),o("config",E.measurementId,D),E.measurementId}/**
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
 */class oN{constructor(t){this.app=t}_delete(){return delete wl[this.app.options.appId],Promise.resolve()}}let wl={},d0=[];const m0={};let jd="dataLayer",lN="gtag",g0,gA,p0=!1;function uN(){const r=[];if(I0()&&r.push("This is a browser extension environment."),gS()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=xn.create("invalid-analytics-context",{errorInfo:t});an.warn(n.message)}}function cN(r,t,n){uN();const s=r.options.appId;if(!s)throw xn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xn.create("no-api-key");if(wl[s]!=null)throw xn.create("already-exists",{id:s});if(!p0){HD(jd);const{wrappedGtag:u,gtagCore:f}=KD(wl,d0,m0,jd,lN);gA=u,g0=f,p0=!0}return wl[s]=aN(r,d0,m0,t,g0,jd,n),new oN(r)}function hN(r,t,n,s){r=Je(r),rN(gA,wl[r.app.options.appId],t,n,s).catch(o=>an.error(o))}const y0="@firebase/analytics",_0="0.10.16";function fN(){di(new Hn(f0,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return cN(s,o,n)},"PUBLIC")),di(new Hn("analytics-internal",r,"PRIVATE")),On(y0,_0),On(y0,_0,"esm2017");function r(t){try{const n=t.getProvider(f0).getImmediate();return{logEvent:(s,o,u)=>hN(n,s,o,u)}}catch(n){throw xn.create("interop-component-reg-failed",{reason:n})}}}fN();const Bi=["Andrina","Dani","Jasai","Monsse","Simone"],wr={apiKey:"AIzaSyCZgbvntvwHmIVs02t272w3jWcB5xOWORQ",authDomain:"texas-expense-tracker.firebaseapp.com",projectId:"texas-expense-tracker",storageBucket:"texas-expense-tracker.firebasestorage.app",messagingSenderId:"682696379726",appId:"1:682696379726:web:cae95d2c3d26a7397aa21f",measurementId:"G-61S0F1FGL4"};function dN(){const[r,t]=kt.useState(null),[n,s]=kt.useState(null),[o,u]=kt.useState(null),[f,g]=kt.useState([]),[p,y]=kt.useState([]),[E,w]=kt.useState({}),[D,B]=kt.useState(!1),[Q,W]=kt.useState(!1),[et,pt]=kt.useState(!1),[dt,ct]=kt.useState(!1),[Rt,ut]=kt.useState(null),[Ct,O]=kt.useState(""),[S,I]=kt.useState("");kt.useEffect(()=>{let Z;try{Z=M0(wr);const it=N2(Z),b=xR(Z);t(it),s(b);const G=async()=>{try{await g1(b)}catch(nt){console.error("Firebase authentication failed:",nt),O("Authentication failed. Please try again."),I("error")}finally{B(!0)}};E1(b,nt=>{u(nt?nt.uid:null),B(!0)}),G()}catch(it){console.error("Failed to initialize Firebase services:",it),O("Failed to initialize the application. Check console for details."),I("error")}},[]);const x=kt.useCallback(()=>{const Z={};Bi.forEach(it=>{Z[it]={},Bi.forEach(b=>{it!==b&&(Z[it][b]=0)})}),f.forEach(it=>{var vt;const{paidBy:b,totalAmount:G,participants:nt,splitType:J,allocations:ot}=it,St=parseFloat(G);if(J==="equal"){const te=St/nt.length;nt.forEach(Ht=>{Ht!==b&&(Z[Ht][b]+=te)})}else if(J==="percent"||J==="custom")for(const[te,Ht]of Object.entries(ot)){const pn=parseFloat(Ht);te!==b&&(Z[te][b]+=pn)}else if(J==="weekly"){const te=(vt=it.weeklyDetails)==null?void 0:vt.personPayingWeekly;te&&te!==b&&(Z[te][b]+=St)}}),p.forEach(({payer:it,receiver:b,amount:G})=>{if(it===b)return;const nt=parseFloat(G);Z[it]||(Z[it]={}),Z[it][b]||(Z[it][b]=0),Z[it][b]-=nt}),Bi.forEach(it=>{Bi.forEach(b=>{if(it!==b){const G=Z[it][b];G<0&&(Z[b][it]+=-G,Z[it][b]=0)}})}),Bi.forEach(it=>{Bi.forEach(b=>{var G,nt;if(it!==b){const J=((G=Z[it])==null?void 0:G[b])||0,ot=((nt=Z[b])==null?void 0:nt[it])||0;J>ot?(Z[it][b]=J-ot,Z[b][it]=0):(Z[b][it]=ot-J,Z[it][b]=0)}})}),w(Z)},[f,p]);kt.useEffect(()=>{if(r&&o&&D){const Z=wr.projectId,it=Ec(r,`artifacts/${Z}/public/data/expenses`),b=s0(it),G=u0(b,nt=>{const J=nt.docs.map(ot=>({id:ot.id,...ot.data()}));J.sort((ot,St)=>new Date(St.date)-new Date(ot.date)),g(J)},nt=>{console.error("Error fetching expenses:",nt),O("Error fetching expenses."),I("error")});return()=>G()}},[r,o,D,wr.projectId]),kt.useEffect(()=>{if(r&&o&&D){const Z=wr.projectId,it=Ec(r,`artifacts/${Z}/public/data/payments`),b=s0(it),G=u0(b,nt=>{const J=nt.docs.map(ot=>({id:ot.id,...ot.data()}));J.sort((ot,St)=>new Date(St.date)-new Date(ot.date)),y(J)},nt=>{console.error("Error fetching payments:",nt),O("Error fetching payments."),I("error")});return()=>G()}},[r,o,D,wr.projectId]),kt.useEffect(()=>{(f.length>0||p.length>0||Object.keys(E).length===0)&&x()},[f,p,x]);const M=(Z,it="success")=>{O(Z),I(it),setTimeout(()=>{O(""),I("")},3e3)},V=async Z=>{if(!r||!o){M("Application not ready. Please wait for authentication.","error");return}try{const it=wr.projectId;if(Rt){const b=fm(r,`artifacts/${it}/public/data/expenses`,Rt.id);await G2(b,Z,{merge:!0}),M("Expense updated successfully!"),ut(null)}else{const b=Ec(r,`artifacts/${it}/public/data/expenses`);await l0(b,{...Z,appId:it,userId:o}),M("Expense added successfully!")}W(!1)}catch(it){console.error("Error saving document: ",it),M("Failed to save expense. Please try again.","error")}},C=async Z=>{if(!r||!o){M("Application not ready. Please wait for authentication.","error");return}if(window.confirm("Are you sure you want to delete this expense?"))try{const b=wr.projectId;console.log(`Attempting to delete document with ID: ${Z}`),await Q2(fm(r,`artifacts/${b}/public/data/expenses`,Z)),M("Expense deleted successfully!"),console.log(`Document with ID: ${Z} deleted successfully.`)}catch(b){console.error("Error deleting document: ",b),M("Failed to delete expense. Please try again.","error")}},at=async Z=>{if(!r||!o){M("Application not ready. Please wait for authentication.","error");return}try{const it=wr.projectId,b=Ec(r,`artifacts/${it}/public/data/payments`);await l0(b,{...Z,appId:it,userId:o}),M("Payment recorded successfully!"),ct(!1)}catch(it){console.error("Error adding payment: ",it),M("Failed to record payment. Please try again.","error")}},bt=Z=>{ut(Z),W(!0),pt(!1),ct(!1)},F=()=>{ut(null),W(!1)},st=()=>{ct(!1)};return q.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4 font-inter text-gray-800",children:[q.jsxs("header",{className:"text-center mb-8",children:[q.jsx("h1",{className:"text-4xl font-extrabold text-blue-700 mb-2",children:"Texas House Expense Tracker"}),q.jsx("p",{className:"text-lg text-blue-600",children:"Managing shared costs for Andrina, Dani, Jasai, Monsse, and Simone."}),o&&q.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Your User ID:"," ",q.jsx("span",{className:"font-mono bg-gray-200 px-2 py-1 rounded-md",children:o})]})]}),Ct&&q.jsx("div",{className:`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 ${S==="success"?"bg-green-500":"bg-red-500"}`,children:Ct}),q.jsxs("div",{className:"max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8",children:[q.jsxs("div",{className:"flex justify-center flex-wrap gap-4 mb-6",children:[q.jsx("button",{onClick:()=>{W(!0),pt(!1),ct(!1),ut(null)},className:"px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400",children:"Add New Expense"}),q.jsx("button",{onClick:()=>{W(!1),pt(!0),ct(!1),ut(null)},className:"px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400",children:"View Who Owes Whom"}),q.jsx("button",{onClick:()=>{W(!1),pt(!1),ct(!1),ut(null)},className:"px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400",children:"View All Expenses"}),q.jsx("button",{onClick:()=>{ct(!0),W(!1),pt(!1),ut(null)},className:"px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400",children:"Record a Payment"})]}),Q&&q.jsx(mN,{onSave:V,onCancel:F,people:Bi,initialExpenseData:Rt}),dt&&q.jsx(gN,{onRecordPayment:at,onCancel:st,people:Bi}),et&&q.jsx(yN,{balances:E,people:Bi}),!Q&&!et&&!dt&&q.jsx(pN,{expenses:f,onDeleteExpense:C,onEditExpense:bt})]})]})}function mN({onSave:r,onCancel:t,people:n,initialExpenseData:s}){const o=!!s,[u,f]=kt.useState(""),[g,p]=kt.useState(""),[y,E]=kt.useState(""),[w,D]=kt.useState(new Date().toISOString().split("T")[0]),[B,Q]=kt.useState([]),[W,et]=kt.useState("equal"),[pt,dt]=kt.useState({}),[ct,Rt]=kt.useState({}),[ut,Ct]=kt.useState({personPayingWeekly:"",weeklyAmount:"",numberOfWeeks:""}),[O,S]=kt.useState("");kt.useEffect(()=>{o?(f(s.description||""),p(s.totalAmount||""),E(s.paidBy||""),D(s.date||new Date().toISOString().split("T")[0]),Q(s.participants||[]),et(s.splitType||"equal"),s.splitType==="percent"?dt(s.allocations||{}):dt({}),s.splitType==="custom"?Rt(s.allocations||{}):Rt({}),s.splitType==="weekly"?Ct(s.weeklyDetails||{personPayingWeekly:"",weeklyAmount:"",numberOfWeeks:""}):Ct({personPayingWeekly:"",weeklyAmount:"",numberOfWeeks:""})):(f(""),p(""),E(""),D(new Date().toISOString().split("T")[0]),Q([]),et("equal"),dt({}),Rt({}),Ct({personPayingWeekly:"",weeklyAmount:"",numberOfWeeks:""})),S("")},[s,o]),kt.useEffect(()=>{if(W==="weekly"&&ut.weeklyAmount&&ut.numberOfWeeks){const at=parseFloat(ut.weeklyAmount)*parseInt(ut.numberOfWeeks);!isNaN(at)&&at>0&&p(at.toFixed(2))}},[ut.weeklyAmount,ut.numberOfWeeks,W]);const I=at=>{Q(bt=>bt.includes(at)?bt.filter(F=>F!==at):[...bt,at])},x=(at,bt)=>{dt(F=>({...F,[at]:bt}))},M=(at,bt)=>{Rt(F=>({...F,[at]:bt}))},V=(at,bt)=>{Ct(F=>({...F,[at]:bt}))},C=at=>{if(at.preventDefault(),S(""),!u||!g||!y||!w){S("Please fill in all basic expense details.");return}const bt=parseFloat(g);if(isNaN(bt)||bt<=0){S("Total amount must be a positive number.");return}if(B.length===0&&W!=="weekly"){S("Please select at least one participant.");return}let F={};if(W==="percent"){let Z=0,it=!1;if(B.forEach(b=>{const G=parseFloat(pt[b]);(isNaN(G)||G<0)&&(it=!0),Z+=G||0,F[b]=G||0}),it){S("All percentages must be valid non-negative numbers.");return}if(Math.round(Z)!==100){S(`Percentages must sum up to 100%. Current sum: ${Z.toFixed(2)}%`);return}}else if(W==="custom"){let Z=0,it=!1;if(B.forEach(b=>{const G=parseFloat(ct[b]);(isNaN(G)||G<0)&&(it=!0),Z+=G||0,F[b]=G||0}),it){S("All custom values must be valid non-negative numbers.");return}if(Math.abs(Z-bt)>.01){S(`Custom values must sum up to the total amount ($${bt.toFixed(2)}). Current sum: $${Z.toFixed(2)}`);return}}else if(W==="weekly"){const{personPayingWeekly:Z,weeklyAmount:it,numberOfWeeks:b}=ut,G=parseFloat(it),nt=parseInt(b);if(!Z||isNaN(G)||G<=0||isNaN(nt)||nt<=0){S("Please provide valid weekly details (person, amount per week, number of weeks).");return}F[Z]=bt,B.includes(Z)||Q(J=>[...J,Z])}const st={description:u,totalAmount:bt,paidBy:y,date:w,participants:W==="weekly"?[ut.personPayingWeekly]:B,splitType:W,allocations:W==="equal"?{}:F,...W==="weekly"&&{weeklyDetails:{...ut,weeklyAmount:parseFloat(weeklyAmount),numberOfWeeks:parseInt(numberOfWeeks)}}};r(st)};return q.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg shadow-inner mb-8",children:[q.jsx("h2",{className:"text-2xl font-semibold text-blue-700 mb-6 border-b pb-2",children:o?"Edit Expense":"Add New Expense"}),O&&q.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4",role:"alert",children:q.jsx("span",{className:"block sm:inline",children:O})}),q.jsxs("form",{onSubmit:C,className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[q.jsxs("div",{children:[q.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700 mb-1",children:"Description"}),q.jsx("input",{type:"text",id:"description",value:u,onChange:at=>f(at.target.value),className:"w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",required:!0})]}),q.jsxs("div",{children:[q.jsx("label",{htmlFor:"totalAmount",className:"block text-sm font-medium text-gray-700 mb-1",children:"Total Amount ($)"}),q.jsx("input",{type:"number",id:"totalAmount",value:g,onChange:at=>p(at.target.value),className:"w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",step:"0.01",min:"0.01",required:!0,disabled:W==="weekly"})]}),q.jsxs("div",{children:[q.jsx("label",{htmlFor:"paidBy",className:"block text-sm font-medium text-gray-700 mb-1",children:"Paid By"}),q.jsxs("select",{id:"paidBy",value:y,onChange:at=>E(at.target.value),className:"w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",required:!0,children:[q.jsx("option",{value:"",children:"Select Payer"}),n.map(at=>q.jsx("option",{value:at,children:at},at))]})]}),q.jsxs("div",{children:[q.jsx("label",{htmlFor:"date",className:"block text-sm font-medium text-gray-700 mb-1",children:"Date"}),q.jsx("input",{type:"date",id:"date",value:w,onChange:at=>D(at.target.value),className:"w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",required:!0})]}),q.jsxs("div",{className:"md:col-span-2",children:[q.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Participants (Who is involved in this expense?)"}),q.jsx("div",{className:"flex flex-wrap gap-4",children:n.map(at=>q.jsxs("label",{className:"inline-flex items-center",children:[q.jsx("input",{type:"checkbox",value:at,checked:B.includes(at),onChange:()=>I(at),className:"form-checkbox h-5 w-5 text-blue-600 rounded",disabled:W==="weekly"&&at!==ut.personPayingWeekly}),q.jsx("span",{className:"ml-2 text-gray-900",children:at})]},at))})]}),q.jsxs("div",{className:"md:col-span-2",children:[q.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"How to Split?"}),q.jsxs("div",{className:"flex flex-wrap gap-4",children:[q.jsxs("label",{className:"inline-flex items-center",children:[q.jsx("input",{type:"radio",value:"equal",checked:W==="equal",onChange:()=>et("equal"),className:"form-radio h-5 w-5 text-blue-600"}),q.jsx("span",{className:"ml-2 text-gray-900",children:"Equally Split"})]}),q.jsxs("label",{className:"inline-flex items-center",children:[q.jsx("input",{type:"radio",value:"percent",checked:W==="percent",onChange:()=>et("percent"),className:"form-radio h-5 w-5 text-blue-600"}),q.jsx("span",{className:"ml-2 text-gray-900",children:"Percentages"})]}),q.jsxs("label",{className:"inline-flex items-center",children:[q.jsx("input",{type:"radio",value:"custom",checked:W==="custom",onChange:()=>et("custom"),className:"form-radio h-5 w-5 text-blue-600"}),q.jsx("span",{className:"ml-2 text-gray-900",children:"Custom Values"})]}),q.jsxs("label",{className:"inline-flex items-center",children:[q.jsx("input",{type:"radio",value:"weekly",checked:W==="weekly",onChange:()=>et("weekly"),className:"form-radio h-5 w-5 text-blue-600"}),q.jsx("span",{className:"ml-2 text-gray-900",children:"Weekly Charge (e.g., 4 weeks of internet)"})]})]})]}),W==="percent"&&q.jsxs("div",{className:"md:col-span-2 bg-blue-50 p-4 rounded-lg",children:[q.jsx("h3",{className:"text-lg font-medium text-blue-700 mb-3",children:"Allocate by Percentage (Sum must be 100%)"}),q.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:B.length>0?B.map(at=>q.jsxs("div",{children:[q.jsxs("label",{htmlFor:`percent-${at}`,className:"block text-sm font-medium text-gray-700 mb-1",children:[at," (%)"]}),q.jsx("input",{type:"number",id:`percent-${at}`,value:pt[at]||"",onChange:bt=>x(at,bt.target.value),className:"w-full p-2 border border-gray-300 rounded-md",step:"0.01",min:"0"})]},at)):q.jsx("p",{className:"text-sm text-gray-600",children:"Select participants above to set percentages."})})]}),W==="custom"&&q.jsxs("div",{className:"md:col-span-2 bg-blue-50 p-4 rounded-lg",children:[q.jsx("h3",{className:"text-lg font-medium text-blue-700 mb-3",children:"Allocate by Custom Amount (Sum must equal Total Amount)"}),q.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:B.length>0?B.map(at=>q.jsxs("div",{children:[q.jsxs("label",{htmlFor:`custom-${at}`,className:"block text-sm font-medium text-gray-700 mb-1",children:[at," ($)"]}),q.jsx("input",{type:"number",id:`custom-${at}`,value:ct[at]||"",onChange:bt=>M(at,bt.target.value),className:"w-full p-2 border border-gray-300 rounded-md",step:"0.01",min:"0"})]},at)):q.jsx("p",{className:"text-sm text-gray-600",children:"Select participants above to set custom amounts."})})]}),W==="weekly"&&q.jsxs("div",{className:"md:col-span-2 bg-blue-50 p-4 rounded-lg",children:[q.jsx("h3",{className:"text-lg font-medium text-blue-700 mb-3",children:"Weekly Charge Details"}),q.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[q.jsxs("div",{children:[q.jsx("label",{htmlFor:"weeklyPerson",className:"block text-sm font-medium text-gray-700 mb-1",children:"Person Paying Weekly"}),q.jsxs("select",{id:"weeklyPerson",value:ut.personPayingWeekly,onChange:at=>{V("personPayingWeekly",at.target.value),Q([at.target.value])},className:"w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",required:!0,children:[q.jsx("option",{value:"",children:"Select Person"}),n.map(at=>q.jsx("option",{value:at,children:at},at))]})]}),q.jsxs("div",{children:[q.jsx("label",{htmlFor:"weeklyAmount",className:"block text-sm font-medium text-gray-700 mb-1",children:"Amount Per Week ($)"}),q.jsx("input",{type:"number",id:"weeklyAmount",value:ut.weeklyAmount,onChange:at=>V("weeklyAmount",at.target.value),className:"w-full p-2 border border-gray-300 rounded-md",step:"0.01",min:"0.01",required:!0})]}),q.jsxs("div",{children:[q.jsx("label",{htmlFor:"numberOfWeeks",className:"block text-sm font-medium text-gray-700 mb-1",children:"Number of Weeks"}),q.jsx("input",{type:"number",id:"numberOfWeeks",value:ut.numberOfWeeks,onChange:at=>V("numberOfWeeks",at.target.value),className:"w-full p-2 border border-gray-300 rounded-md",min:"1",step:"1",required:!0})]})]}),q.jsx("p",{className:"text-sm text-gray-600 mt-3",children:'The total amount for this expense should be the "Amount Per Week" multiplied by "Number of Weeks". This will be automatically allocated to the selected person.'})]}),q.jsxs("div",{className:"md:col-span-2 text-center flex justify-center space-x-4",children:[q.jsx("button",{type:"submit",className:"px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400",children:o?"Update Expense":"Add Expense"}),o&&q.jsx("button",{type:"button",onClick:t,className:"px-8 py-3 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-500 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300",children:"Cancel"})]})]})]})}function gN({onRecordPayment:r,onCancel:t,people:n}){const[s,o]=kt.useState(""),[u,f]=kt.useState(""),[g,p]=kt.useState(""),[y,E]=kt.useState(new Date().toISOString().split("T")[0]),[w,D]=kt.useState(""),B=Q=>{if(Q.preventDefault(),D(""),!s||!u||!g||!y){D("Please fill in all payment details.");return}if(s===u){D("Payer and Receiver cannot be the same person.");return}const W=parseFloat(g);if(isNaN(W)||W<=0){D("Amount must be a positive number.");return}r({payer:s,receiver:u,amount:W,date:y}),o(""),f(""),p(""),E(new Date().toISOString().split("T")[0])};return q.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg shadow-inner mb-8",children:[q.jsx("h2",{className:"text-2xl font-semibold text-green-700 mb-6 border-b pb-2",children:"Record a Payment"}),w&&q.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4",role:"alert",children:q.jsx("span",{className:"block sm:inline",children:w})}),q.jsxs("form",{onSubmit:B,className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[q.jsxs("div",{children:[q.jsx("label",{htmlFor:"payer",className:"block text-sm font-medium text-gray-700 mb-1",children:"Payer (Who is paying?)"}),q.jsxs("select",{id:"payer",value:s,onChange:Q=>o(Q.target.value),className:"w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",required:!0,children:[q.jsx("option",{value:"",children:"Select Payer"}),n.map(Q=>q.jsx("option",{value:Q,children:Q},Q))]})]}),q.jsxs("div",{children:[q.jsx("label",{htmlFor:"receiver",className:"block text-sm font-medium text-gray-700 mb-1",children:"Receiver (Who is receiving?)"}),q.jsxs("select",{id:"receiver",value:u,onChange:Q=>f(Q.target.value),className:"w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",required:!0,children:[q.jsx("option",{value:"",children:"Select Receiver"}),n.map(Q=>q.jsx("option",{value:Q,children:Q},Q))]})]}),q.jsxs("div",{children:[q.jsx("label",{htmlFor:"paymentAmount",className:"block text-sm font-medium text-gray-700 mb-1",children:"Amount ($)"}),q.jsx("input",{type:"number",id:"paymentAmount",value:g,onChange:Q=>p(Q.target.value),className:"w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",step:"0.01",min:"0.01",required:!0})]}),q.jsxs("div",{children:[q.jsx("label",{htmlFor:"paymentDate",className:"block text-sm font-medium text-gray-700 mb-1",children:"Date"}),q.jsx("input",{type:"date",id:"paymentDate",value:y,onChange:Q=>E(Q.target.value),className:"w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",required:!0})]}),q.jsxs("div",{className:"md:col-span-2 text-center flex justify-center space-x-4",children:[q.jsx("button",{type:"submit",className:"px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400",children:"Record Payment"}),q.jsx("button",{type:"button",onClick:t,className:"px-8 py-3 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-500 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300",children:"Cancel"})]})]})]})}function pN({expenses:r,onDeleteExpense:t,onEditExpense:n}){return q.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg shadow-inner",children:[q.jsx("h2",{className:"text-2xl font-semibold text-blue-700 mb-6 border-b pb-2",children:"All Expenses"}),r.length===0?q.jsx("p",{className:"text-gray-600 text-center py-8",children:"No expenses added yet. Add a new expense to get started!"}):q.jsx("div",{className:"overflow-x-auto",children:q.jsxs("table",{className:"min-w-full bg-white rounded-lg shadow-md",children:[q.jsx("thead",{className:"bg-blue-100",children:q.jsxs("tr",{children:[q.jsx("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg",children:"Date"}),q.jsx("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider",children:"Description"}),q.jsx("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider",children:"Paid By"}),q.jsx("th",{className:"py-3 px-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider",children:"Amount"}),q.jsx("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider",children:"Split Type"}),q.jsx("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider",children:"Participants"}),q.jsx("th",{className:"py-3 px-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg",children:"Actions"})]})}),q.jsx("tbody",{className:"divide-y divide-gray-200",children:r.map(s=>q.jsxs("tr",{className:"hover:bg-gray-50",children:[q.jsx("td",{className:"py-3 px-4 whitespace-nowrap text-sm text-gray-900",children:s.date}),q.jsx("td",{className:"py-3 px-4 whitespace-nowrap text-sm text-gray-900",children:s.description}),q.jsx("td",{className:"py-3 px-4 whitespace-nowrap text-sm text-gray-900",children:s.paidBy}),q.jsxs("td",{className:"py-3 px-4 whitespace-nowrap text-sm text-gray-900 text-right",children:["$",parseFloat(s.totalAmount).toFixed(2)]}),q.jsxs("td",{className:"py-3 px-4 whitespace-nowrap text-sm text-gray-900 capitalize",children:[s.splitType==="weekly"?"Weekly Charge":s.splitType,s.splitType==="weekly"&&s.weeklyDetails&&q.jsxs("span",{className:"block text-xs text-gray-500",children:["($",s.weeklyDetails.weeklyAmount.toFixed(2),"/wk for ",s.weeklyDetails.numberOfWeeks," wks)"]})]}),q.jsx("td",{className:"py-3 px-4 text-sm text-gray-900",children:s.participants&&s.participants.length>0?q.jsx("ul",{className:"list-disc list-inside",children:s.participants.map(o=>q.jsx("li",{children:o},o))}):"N/A"}),q.jsxs("td",{className:"py-3 px-4 whitespace-nowrap text-right text-sm font-medium",children:[q.jsx("button",{onClick:()=>n(s),className:"text-blue-600 hover:text-blue-900 transition duration-150 ease-in-out mr-4",children:"Edit"}),q.jsx("button",{onClick:()=>t(s.id),className:"text-red-600 hover:text-red-900 transition duration-150 ease-in-out",children:"Delete"})]})]},s.id))})]})})]})}function yN({balances:r,people:t}){return q.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg shadow-inner",children:[q.jsx("h2",{className:"text-2xl font-semibold text-purple-700 mb-6 border-b pb-2",children:"Who Owes Whom"}),q.jsx("ul",{className:"list-disc list-inside space-y-2 text-gray-800",children:t.flatMap(n=>t.filter(s=>{var o;return n!==s&&(((o=r==null?void 0:r[n])==null?void 0:o[s])||0)>.01}).map(s=>{var o;return q.jsxs("li",{children:[n," owes ",s," $",Number(((o=r==null?void 0:r[n])==null?void 0:o[s])||0).toFixed(2)]},`${n}->${s}`)}))})]})}Xb.createRoot(document.getElementById("root")).render(q.jsx(kt.StrictMode,{children:q.jsx(dN,{})}));
