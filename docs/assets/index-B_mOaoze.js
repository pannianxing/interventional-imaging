(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))m(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function c(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function m(u){if(u.ep)return;u.ep=!0;const h=c(u);fetch(u.href,h)}})();var vo={exports:{}},Wn={},Do={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ul;function zd(){if(Ul)return ae;Ul=1;var o=Symbol.for("react.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),d=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),D=Symbol.iterator;function y(S){return S===null||typeof S!="object"?null:(S=D&&S[D]||S["@@iterator"],typeof S=="function"?S:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,N={};function b(S,R,se){this.props=S,this.context=R,this.refs=N,this.updater=se||V}b.prototype.isReactComponent={},b.prototype.setState=function(S,R){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,R,"setState")},b.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function M(){}M.prototype=b.prototype;function G(S,R,se){this.props=S,this.context=R,this.refs=N,this.updater=se||V}var U=G.prototype=new M;U.constructor=G,F(U,b.prototype),U.isPureReactComponent=!0;var ee=Array.isArray,I=Object.prototype.hasOwnProperty,Q={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function Y(S,R,se){var ie,ce={},le=null,me=null;if(R!=null)for(ie in R.ref!==void 0&&(me=R.ref),R.key!==void 0&&(le=""+R.key),R)I.call(R,ie)&&!L.hasOwnProperty(ie)&&(ce[ie]=R[ie]);var ue=arguments.length-2;if(ue===1)ce.children=se;else if(1<ue){for(var ge=Array(ue),nt=0;nt<ue;nt++)ge[nt]=arguments[nt+2];ce.children=ge}if(S&&S.defaultProps)for(ie in ue=S.defaultProps,ue)ce[ie]===void 0&&(ce[ie]=ue[ie]);return{$$typeof:o,type:S,key:le,ref:me,props:ce,_owner:Q.current}}function Ce(S,R){return{$$typeof:o,type:S.type,key:R,ref:S.ref,props:S.props,_owner:S._owner}}function Te(S){return typeof S=="object"&&S!==null&&S.$$typeof===o}function qe(S){var R={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(se){return R[se]})}var Se=/\/+/g;function je(S,R){return typeof S=="object"&&S!==null&&S.key!=null?qe(""+S.key):R.toString(36)}function Qe(S,R,se,ie,ce){var le=typeof S;(le==="undefined"||le==="boolean")&&(S=null);var me=!1;if(S===null)me=!0;else switch(le){case"string":case"number":me=!0;break;case"object":switch(S.$$typeof){case o:case l:me=!0}}if(me)return me=S,ce=ce(me),S=ie===""?"."+je(me,0):ie,ee(ce)?(se="",S!=null&&(se=S.replace(Se,"$&/")+"/"),Qe(ce,R,se,"",function(nt){return nt})):ce!=null&&(Te(ce)&&(ce=Ce(ce,se+(!ce.key||me&&me.key===ce.key?"":(""+ce.key).replace(Se,"$&/")+"/")+S)),R.push(ce)),1;if(me=0,ie=ie===""?".":ie+":",ee(S))for(var ue=0;ue<S.length;ue++){le=S[ue];var ge=ie+je(le,ue);me+=Qe(le,R,se,ge,ce)}else if(ge=y(S),typeof ge=="function")for(S=ge.call(S),ue=0;!(le=S.next()).done;)le=le.value,ge=ie+je(le,ue++),me+=Qe(le,R,se,ge,ce);else if(le==="object")throw R=String(S),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return me}function Ne(S,R,se){if(S==null)return S;var ie=[],ce=0;return Qe(S,ie,"","",function(le){return R.call(se,le,ce++)}),ie}function Ke(S){if(S._status===-1){var R=S._result;R=R(),R.then(function(se){(S._status===0||S._status===-1)&&(S._status=1,S._result=se)},function(se){(S._status===0||S._status===-1)&&(S._status=2,S._result=se)}),S._status===-1&&(S._status=0,S._result=R)}if(S._status===1)return S._result.default;throw S._result}var De={current:null},O={transition:null},te={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:O,ReactCurrentOwner:Q};function W(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:Ne,forEach:function(S,R,se){Ne(S,function(){R.apply(this,arguments)},se)},count:function(S){var R=0;return Ne(S,function(){R++}),R},toArray:function(S){return Ne(S,function(R){return R})||[]},only:function(S){if(!Te(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ae.Component=b,ae.Fragment=c,ae.Profiler=u,ae.PureComponent=G,ae.StrictMode=m,ae.Suspense=E,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ae.act=W,ae.cloneElement=function(S,R,se){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ie=F({},S.props),ce=S.key,le=S.ref,me=S._owner;if(R!=null){if(R.ref!==void 0&&(le=R.ref,me=Q.current),R.key!==void 0&&(ce=""+R.key),S.type&&S.type.defaultProps)var ue=S.type.defaultProps;for(ge in R)I.call(R,ge)&&!L.hasOwnProperty(ge)&&(ie[ge]=R[ge]===void 0&&ue!==void 0?ue[ge]:R[ge])}var ge=arguments.length-2;if(ge===1)ie.children=se;else if(1<ge){ue=Array(ge);for(var nt=0;nt<ge;nt++)ue[nt]=arguments[nt+2];ie.children=ue}return{$$typeof:o,type:S.type,key:ce,ref:le,props:ie,_owner:me}},ae.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:h,_context:S},S.Consumer=S},ae.createElement=Y,ae.createFactory=function(S){var R=Y.bind(null,S);return R.type=S,R},ae.createRef=function(){return{current:null}},ae.forwardRef=function(S){return{$$typeof:x,render:S}},ae.isValidElement=Te,ae.lazy=function(S){return{$$typeof:A,_payload:{_status:-1,_result:S},_init:Ke}},ae.memo=function(S,R){return{$$typeof:v,type:S,compare:R===void 0?null:R}},ae.startTransition=function(S){var R=O.transition;O.transition={};try{S()}finally{O.transition=R}},ae.unstable_act=W,ae.useCallback=function(S,R){return De.current.useCallback(S,R)},ae.useContext=function(S){return De.current.useContext(S)},ae.useDebugValue=function(){},ae.useDeferredValue=function(S){return De.current.useDeferredValue(S)},ae.useEffect=function(S,R){return De.current.useEffect(S,R)},ae.useId=function(){return De.current.useId()},ae.useImperativeHandle=function(S,R,se){return De.current.useImperativeHandle(S,R,se)},ae.useInsertionEffect=function(S,R){return De.current.useInsertionEffect(S,R)},ae.useLayoutEffect=function(S,R){return De.current.useLayoutEffect(S,R)},ae.useMemo=function(S,R){return De.current.useMemo(S,R)},ae.useReducer=function(S,R,se){return De.current.useReducer(S,R,se)},ae.useRef=function(S){return De.current.useRef(S)},ae.useState=function(S){return De.current.useState(S)},ae.useSyncExternalStore=function(S,R,se){return De.current.useSyncExternalStore(S,R,se)},ae.useTransition=function(){return De.current.useTransition()},ae.version="18.3.1",ae}var ql;function Lo(){return ql||(ql=1,Do.exports=zd()),Do.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wl;function Od(){if(Wl)return Wn;Wl=1;var o=Lo(),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(x,E,v){var A,D={},y=null,V=null;v!==void 0&&(y=""+v),E.key!==void 0&&(y=""+E.key),E.ref!==void 0&&(V=E.ref);for(A in E)m.call(E,A)&&!h.hasOwnProperty(A)&&(D[A]=E[A]);if(x&&x.defaultProps)for(A in E=x.defaultProps,E)D[A]===void 0&&(D[A]=E[A]);return{$$typeof:l,type:x,key:y,ref:V,props:D,_owner:u.current}}return Wn.Fragment=c,Wn.jsx=d,Wn.jsxs=d,Wn}var Gl;function Hd(){return Gl||(Gl=1,vo.exports=Od()),vo.exports}var n=Hd(),C=Lo(),ua={},yo={exports:{}},rt={},So={exports:{}},Bo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $l;function Ud(){return $l||($l=1,(function(o){function l(O,te){var W=O.length;O.push(te);e:for(;0<W;){var S=W-1>>>1,R=O[S];if(0<u(R,te))O[S]=te,O[W]=R,W=S;else break e}}function c(O){return O.length===0?null:O[0]}function m(O){if(O.length===0)return null;var te=O[0],W=O.pop();if(W!==te){O[0]=W;e:for(var S=0,R=O.length,se=R>>>1;S<se;){var ie=2*(S+1)-1,ce=O[ie],le=ie+1,me=O[le];if(0>u(ce,W))le<R&&0>u(me,ce)?(O[S]=me,O[le]=W,S=le):(O[S]=ce,O[ie]=W,S=ie);else if(le<R&&0>u(me,W))O[S]=me,O[le]=W,S=le;else break e}}return te}function u(O,te){var W=O.sortIndex-te.sortIndex;return W!==0?W:O.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var d=Date,x=d.now();o.unstable_now=function(){return d.now()-x}}var E=[],v=[],A=1,D=null,y=3,V=!1,F=!1,N=!1,b=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(O){for(var te=c(v);te!==null;){if(te.callback===null)m(v);else if(te.startTime<=O)m(v),te.sortIndex=te.expirationTime,l(E,te);else break;te=c(v)}}function ee(O){if(N=!1,U(O),!F)if(c(E)!==null)F=!0,Ke(I);else{var te=c(v);te!==null&&De(ee,te.startTime-O)}}function I(O,te){F=!1,N&&(N=!1,M(Y),Y=-1),V=!0;var W=y;try{for(U(te),D=c(E);D!==null&&(!(D.expirationTime>te)||O&&!qe());){var S=D.callback;if(typeof S=="function"){D.callback=null,y=D.priorityLevel;var R=S(D.expirationTime<=te);te=o.unstable_now(),typeof R=="function"?D.callback=R:D===c(E)&&m(E),U(te)}else m(E);D=c(E)}if(D!==null)var se=!0;else{var ie=c(v);ie!==null&&De(ee,ie.startTime-te),se=!1}return se}finally{D=null,y=W,V=!1}}var Q=!1,L=null,Y=-1,Ce=5,Te=-1;function qe(){return!(o.unstable_now()-Te<Ce)}function Se(){if(L!==null){var O=o.unstable_now();Te=O;var te=!0;try{te=L(!0,O)}finally{te?je():(Q=!1,L=null)}}else Q=!1}var je;if(typeof G=="function")je=function(){G(Se)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Ne=Qe.port2;Qe.port1.onmessage=Se,je=function(){Ne.postMessage(null)}}else je=function(){b(Se,0)};function Ke(O){L=O,Q||(Q=!0,je())}function De(O,te){Y=b(function(){O(o.unstable_now())},te)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_continueExecution=function(){F||V||(F=!0,Ke(I))},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_getFirstCallbackNode=function(){return c(E)},o.unstable_next=function(O){switch(y){case 1:case 2:case 3:var te=3;break;default:te=y}var W=y;y=te;try{return O()}finally{y=W}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(O,te){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=y;y=O;try{return te()}finally{y=W}},o.unstable_scheduleCallback=function(O,te,W){var S=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?S+W:S):W=S,O){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=W+R,O={id:A++,callback:te,priorityLevel:O,startTime:W,expirationTime:R,sortIndex:-1},W>S?(O.sortIndex=W,l(v,O),c(E)===null&&O===c(v)&&(N?(M(Y),Y=-1):N=!0,De(ee,W-S))):(O.sortIndex=R,l(E,O),F||V||(F=!0,Ke(I))),O},o.unstable_shouldYield=qe,o.unstable_wrapCallback=function(O){var te=y;return function(){var W=y;y=te;try{return O.apply(this,arguments)}finally{y=W}}}})(Bo)),Bo}var Xl;function qd(){return Xl||(Xl=1,So.exports=Ud()),So.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ql;function Wd(){if(Ql)return rt;Ql=1;var o=Lo(),l=qd();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,u={};function h(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(u[e]=t,e=0;e<t.length;e++)m.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},D={};function y(e){return E.call(D,e)?!0:E.call(A,e)?!1:v.test(e)?D[e]=!0:(A[e]=!0,!1)}function V(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,t,r,s){if(t===null||typeof t>"u"||V(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function N(e,t,r,s,a,i,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=p}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new N(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,G);b[t]=new N(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,G);b[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,G);b[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function U(e,t,r,s){var a=b.hasOwnProperty(t)?b[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F(t,r,a,s)&&(r=null),s||a===null?y(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var ee=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),Q=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Ce=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),qe=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),O=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,S;function R(e){if(S===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var se=!1;function ie(e,t){if(!e||se)return"";se=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var s=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){s=T}e.call(t.prototype)}else{try{throw Error()}catch(T){s=T}e()}}catch(T){if(T&&s&&typeof T.stack=="string"){for(var a=T.stack.split(`
`),i=s.stack.split(`
`),p=a.length-1,f=i.length-1;1<=p&&0<=f&&a[p]!==i[f];)f--;for(;1<=p&&0<=f;p--,f--)if(a[p]!==i[f]){if(p!==1||f!==1)do if(p--,f--,0>f||a[p]!==i[f]){var g=`
`+a[p].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=p&&0<=f);break}}}finally{se=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function ce(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Q:return"Portal";case Ce:return"Profiler";case Y:return"StrictMode";case je:return"Suspense";case Qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qe:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nt(e){var t=ge(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){s=""+p,i.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ts(e){e._valueTracker||(e._valueTracker=nt(e))}function Qo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ge(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fa(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ko(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=ue(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yo(e,t){t=t.checked,t!=null&&U(e,"checked",t,!1)}function Ta(e,t){Yo(e,t);var r=ue(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Na(e,t.type,r):t.hasOwnProperty("defaultValue")&&Na(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Na(e,t,r){(t!=="number"||rs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var an=Array.isArray;function br(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+ue(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ba(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(an(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ue(r)}}function e2(e,t){var r=ue(t.value),s=ue(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function t2(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function r2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?r2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ns,n2=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ns.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function on(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qp=["Webkit","ms","Moz","O"];Object.keys(cn).forEach(function(e){qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cn[t]=cn[e]})});function s2(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||cn.hasOwnProperty(e)&&cn[e]?(""+t).trim():t+"px"}function a2(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=s2(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var Wp=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ja(e,t){if(t){if(Wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=null;function Pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var La=null,Ir=null,jr=null;function i2(e){if(e=Nn(e)){if(typeof La!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Bs(t),La(e.stateNode,e.type,t))}}function o2(e){Ir?jr?jr.push(e):jr=[e]:Ir=e}function c2(){if(Ir){var e=Ir,t=jr;if(jr=Ir=null,i2(e),t)for(e=0;e<t.length;e++)i2(t[e])}}function l2(e,t){return e(t)}function p2(){}var Ma=!1;function u2(e,t,r){if(Ma)return e(t,r);Ma=!0;try{return l2(e,t,r)}finally{Ma=!1,(Ir!==null||jr!==null)&&(p2(),c2())}}function ln(e,t){var r=e.stateNode;if(r===null)return null;var s=Bs(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var Va=!1;if(x)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){Va=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{Va=!1}function Gp(e,t,r,s,a,i,p,f,g){var T=Array.prototype.slice.call(arguments,3);try{t.apply(r,T)}catch(_){this.onError(_)}}var un=!1,ss=null,as=!1,za=null,$p={onError:function(e){un=!0,ss=e}};function Xp(e,t,r,s,a,i,p,f,g){un=!1,ss=null,Gp.apply($p,arguments)}function Qp(e,t,r,s,a,i,p,f,g){if(Xp.apply(this,arguments),un){if(un){var T=ss;un=!1,ss=null}else throw Error(c(198));as||(as=!0,za=T)}}function ur(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function d2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m2(e){if(ur(e)!==e)throw Error(c(188))}function Kp(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return m2(a),e;if(i===s)return m2(a),t;i=i.sibling}throw Error(c(188))}if(r.return!==s.return)r=a,s=i;else{for(var p=!1,f=a.child;f;){if(f===r){p=!0,r=a,s=i;break}if(f===s){p=!0,s=a,r=i;break}f=f.sibling}if(!p){for(f=i.child;f;){if(f===r){p=!0,r=i,s=a;break}if(f===s){p=!0,s=i,r=a;break}f=f.sibling}if(!p)throw Error(c(189))}}if(r.alternate!==s)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function h2(e){return e=Kp(e),e!==null?x2(e):null}function x2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=x2(e);if(t!==null)return t;e=e.sibling}return null}var f2=l.unstable_scheduleCallback,g2=l.unstable_cancelCallback,Yp=l.unstable_shouldYield,Jp=l.unstable_requestPaint,Be=l.unstable_now,Zp=l.unstable_getCurrentPriorityLevel,Oa=l.unstable_ImmediatePriority,A2=l.unstable_UserBlockingPriority,is=l.unstable_NormalPriority,eu=l.unstable_LowPriority,C2=l.unstable_IdlePriority,os=null,Tt=null;function tu(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(os,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:su,ru=Math.log,nu=Math.LN2;function su(e){return e>>>=0,e===0?32:31-(ru(e)/nu|0)|0}var cs=64,ls=4194304;function dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ps(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,p=r&268435455;if(p!==0){var f=p&~a;f!==0?s=dn(f):(i&=p,i!==0&&(s=dn(i)))}else p=r&~a,p!==0?s=dn(p):i!==0&&(s=dn(i));if(s===0)return 0;if(t!==0&&t!==s&&(t&a)===0&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((s&4)!==0&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-At(t),a=1<<r,s|=e[r],t&=~a;return s}function au(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iu(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var p=31-At(i),f=1<<p,g=a[p];g===-1?((f&r)===0||(f&s)!==0)&&(a[p]=au(f,t)):g<=t&&(e.expiredLanes|=f),i&=~f}}function Ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function w2(){var e=cs;return cs<<=1,(cs&4194240)===0&&(cs=64),e}function Ua(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function mn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=r}function ou(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-At(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function qa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-At(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var de=0;function E2(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var v2,Wa,D2,y2,S2,Ga=!1,us=[],qt=null,Wt=null,Gt=null,hn=new Map,xn=new Map,$t=[],cu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function B2(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(t.pointerId)}}function fn(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Nn(t),t!==null&&Wa(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function lu(e,t,r,s,a){switch(t){case"focusin":return qt=fn(qt,e,t,r,s,a),!0;case"dragenter":return Wt=fn(Wt,e,t,r,s,a),!0;case"mouseover":return Gt=fn(Gt,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return hn.set(i,fn(hn.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,xn.set(i,fn(xn.get(i)||null,e,t,r,s,a)),!0}return!1}function k2(e){var t=dr(e.target);if(t!==null){var r=ur(t);if(r!==null){if(t=r.tag,t===13){if(t=d2(r),t!==null){e.blockedOn=t,S2(e.priority,function(){D2(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);_a=s,r.target.dispatchEvent(s),_a=null}else return t=Nn(r),t!==null&&Wa(t),e.blockedOn=r,!1;t.shift()}return!0}function F2(e,t,r){ds(e)&&r.delete(t)}function pu(){Ga=!1,qt!==null&&ds(qt)&&(qt=null),Wt!==null&&ds(Wt)&&(Wt=null),Gt!==null&&ds(Gt)&&(Gt=null),hn.forEach(F2),xn.forEach(F2)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ga||(Ga=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,pu)))}function An(e){function t(a){return gn(a,e)}if(0<us.length){gn(us[0],e);for(var r=1;r<us.length;r++){var s=us[r];s.blockedOn===e&&(s.blockedOn=null)}}for(qt!==null&&gn(qt,e),Wt!==null&&gn(Wt,e),Gt!==null&&gn(Gt,e),hn.forEach(t),xn.forEach(t),r=0;r<$t.length;r++)s=$t[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<$t.length&&(r=$t[0],r.blockedOn===null);)k2(r),r.blockedOn===null&&$t.shift()}var Rr=ee.ReactCurrentBatchConfig,ms=!0;function uu(e,t,r,s){var a=de,i=Rr.transition;Rr.transition=null;try{de=1,$a(e,t,r,s)}finally{de=a,Rr.transition=i}}function du(e,t,r,s){var a=de,i=Rr.transition;Rr.transition=null;try{de=4,$a(e,t,r,s)}finally{de=a,Rr.transition=i}}function $a(e,t,r,s){if(ms){var a=Xa(e,t,r,s);if(a===null)ui(e,t,s,hs,r),B2(e,s);else if(lu(a,e,t,r,s))s.stopPropagation();else if(B2(e,s),t&4&&-1<cu.indexOf(e)){for(;a!==null;){var i=Nn(a);if(i!==null&&v2(i),i=Xa(e,t,r,s),i===null&&ui(e,t,s,hs,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else ui(e,t,s,null,r)}}var hs=null;function Xa(e,t,r,s){if(hs=null,e=Pa(s),e=dr(e),e!==null)if(t=ur(e),t===null)e=null;else if(r=t.tag,r===13){if(e=d2(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hs=e,null}function T2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case Oa:return 1;case A2:return 4;case is:case eu:return 16;case C2:return 536870912;default:return 16}default:return 16}}var Xt=null,Qa=null,xs=null;function N2(){if(xs)return xs;var e,t=Qa,r=t.length,s,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var p=r-e;for(s=1;s<=p&&t[r-s]===a[i-s];s++);return xs=a.slice(e,1<s?1-s:void 0)}function fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function b2(){return!1}function st(e){function t(r,s,a,i,p){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=p,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(r=e[f],this[f]=r?r(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?gs:b2,this.isPropagationStopped=b2,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=st(_r),Cn=W({},_r,{view:0,detail:0}),mu=st(Cn),Ya,Ja,wn,As=W({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ei,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?(Ya=e.screenX-wn.screenX,Ja=e.screenY-wn.screenY):Ja=Ya=0,wn=e),Ya)},movementY:function(e){return"movementY"in e?e.movementY:Ja}}),I2=st(As),hu=W({},As,{dataTransfer:0}),xu=st(hu),fu=W({},Cn,{relatedTarget:0}),Za=st(fu),gu=W({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Au=st(gu),Cu=W({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wu=st(Cu),Eu=W({},_r,{data:0}),j2=st(Eu),vu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Du={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Su(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yu[e])?!!t[e]:!1}function ei(){return Su}var Bu=W({},Cn,{key:function(e){if(e.key){var t=vu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Du[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ei,charCode:function(e){return e.type==="keypress"?fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ku=st(Bu),Fu=W({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),R2=st(Fu),Tu=W({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ei}),Nu=st(Tu),bu=W({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iu=st(bu),ju=W({},As,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ru=st(ju),_u=[9,13,27,32],ti=x&&"CompositionEvent"in window,En=null;x&&"documentMode"in document&&(En=document.documentMode);var Pu=x&&"TextEvent"in window&&!En,_2=x&&(!ti||En&&8<En&&11>=En),P2=" ",L2=!1;function M2(e,t){switch(e){case"keyup":return _u.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function Lu(e,t){switch(e){case"compositionend":return V2(t);case"keypress":return t.which!==32?null:(L2=!0,P2);case"textInput":return e=t.data,e===P2&&L2?null:e;default:return null}}function Mu(e,t){if(Pr)return e==="compositionend"||!ti&&M2(e,t)?(e=N2(),xs=Qa=Xt=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _2&&t.locale!=="ko"?null:t.data;default:return null}}var Vu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z2(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vu[e.type]:t==="textarea"}function O2(e,t,r,s){o2(s),t=Ds(t,"onChange"),0<t.length&&(r=new Ka("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var vn=null,Dn=null;function zu(e){ac(e,0)}function Cs(e){var t=Or(e);if(Qo(t))return e}function Ou(e,t){if(e==="change")return t}var H2=!1;if(x){var ri;if(x){var ni="oninput"in document;if(!ni){var U2=document.createElement("div");U2.setAttribute("oninput","return;"),ni=typeof U2.oninput=="function"}ri=ni}else ri=!1;H2=ri&&(!document.documentMode||9<document.documentMode)}function q2(){vn&&(vn.detachEvent("onpropertychange",W2),Dn=vn=null)}function W2(e){if(e.propertyName==="value"&&Cs(Dn)){var t=[];O2(t,Dn,e,Pa(e)),u2(zu,t)}}function Hu(e,t,r){e==="focusin"?(q2(),vn=t,Dn=r,vn.attachEvent("onpropertychange",W2)):e==="focusout"&&q2()}function Uu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cs(Dn)}function qu(e,t){if(e==="click")return Cs(t)}function Wu(e,t){if(e==="input"||e==="change")return Cs(t)}function Gu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Gu;function yn(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!E.call(t,a)||!Ct(e[a],t[a]))return!1}return!0}function G2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $2(e,t){var r=G2(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=G2(r)}}function X2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?X2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Q2(){for(var e=window,t=rs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=rs(e.document)}return t}function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $u(e){var t=Q2(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&X2(r.ownerDocument.documentElement,r)){if(s!==null&&si(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=$2(r,i);var p=$2(r,s);a&&p&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xu=x&&"documentMode"in document&&11>=document.documentMode,Lr=null,ai=null,Sn=null,ii=!1;function K2(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ii||Lr==null||Lr!==rs(s)||(s=Lr,"selectionStart"in s&&si(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Sn&&yn(Sn,s)||(Sn=s,s=Ds(ai,"onSelect"),0<s.length&&(t=new Ka("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Lr)))}function ws(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Mr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionend:ws("Transition","TransitionEnd")},oi={},Y2={};x&&(Y2=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Es(e){if(oi[e])return oi[e];if(!Mr[e])return e;var t=Mr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Y2)return oi[e]=t[r];return e}var J2=Es("animationend"),Z2=Es("animationiteration"),ec=Es("animationstart"),tc=Es("transitionend"),rc=new Map,nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){rc.set(e,t),h(t,[e])}for(var ci=0;ci<nc.length;ci++){var li=nc[ci],Qu=li.toLowerCase(),Ku=li[0].toUpperCase()+li.slice(1);Qt(Qu,"on"+Ku)}Qt(J2,"onAnimationEnd"),Qt(Z2,"onAnimationIteration"),Qt(ec,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(tc,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function sc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Qp(s,t,void 0,e),e.currentTarget=null}function ac(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var p=s.length-1;0<=p;p--){var f=s[p],g=f.instance,T=f.currentTarget;if(f=f.listener,g!==i&&a.isPropagationStopped())break e;sc(a,f,T),i=g}else for(p=0;p<s.length;p++){if(f=s[p],g=f.instance,T=f.currentTarget,f=f.listener,g!==i&&a.isPropagationStopped())break e;sc(a,f,T),i=g}}}if(as)throw e=za,as=!1,za=null,e}function xe(e,t){var r=t[gi];r===void 0&&(r=t[gi]=new Set);var s=e+"__bubble";r.has(s)||(ic(t,e,2,!1),r.add(s))}function pi(e,t,r){var s=0;t&&(s|=4),ic(r,e,s,t)}var vs="_reactListening"+Math.random().toString(36).slice(2);function kn(e){if(!e[vs]){e[vs]=!0,m.forEach(function(r){r!=="selectionchange"&&(Yu.has(r)||pi(r,!1,e),pi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vs]||(t[vs]=!0,pi("selectionchange",!1,t))}}function ic(e,t,r,s){switch(T2(t)){case 1:var a=uu;break;case 4:a=du;break;default:a=$a}r=a.bind(null,t,r,e),a=void 0,!Va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function ui(e,t,r,s,a){var i=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var f=s.stateNode.containerInfo;if(f===a||f.nodeType===8&&f.parentNode===a)break;if(p===4)for(p=s.return;p!==null;){var g=p.tag;if((g===3||g===4)&&(g=p.stateNode.containerInfo,g===a||g.nodeType===8&&g.parentNode===a))return;p=p.return}for(;f!==null;){if(p=dr(f),p===null)return;if(g=p.tag,g===5||g===6){s=i=p;continue e}f=f.parentNode}}s=s.return}u2(function(){var T=i,_=Pa(r),P=[];e:{var j=rc.get(e);if(j!==void 0){var H=Ka,$=e;switch(e){case"keypress":if(fs(r)===0)break e;case"keydown":case"keyup":H=ku;break;case"focusin":$="focus",H=Za;break;case"focusout":$="blur",H=Za;break;case"beforeblur":case"afterblur":H=Za;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=I2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=xu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Nu;break;case J2:case Z2:case ec:H=Au;break;case tc:H=Iu;break;case"scroll":H=mu;break;case"wheel":H=Ru;break;case"copy":case"cut":case"paste":H=wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=R2}var X=(t&4)!==0,ke=!X&&e==="scroll",B=X?j!==null?j+"Capture":null:j;X=[];for(var w=T,k;w!==null;){k=w;var z=k.stateNode;if(k.tag===5&&z!==null&&(k=z,B!==null&&(z=ln(w,B),z!=null&&X.push(Fn(w,z,k)))),ke)break;w=w.return}0<X.length&&(j=new H(j,$,null,r,_),P.push({event:j,listeners:X}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",j&&r!==_a&&($=r.relatedTarget||r.fromElement)&&(dr($)||$[_t]))break e;if((H||j)&&(j=_.window===_?_:(j=_.ownerDocument)?j.defaultView||j.parentWindow:window,H?($=r.relatedTarget||r.toElement,H=T,$=$?dr($):null,$!==null&&(ke=ur($),$!==ke||$.tag!==5&&$.tag!==6)&&($=null)):(H=null,$=T),H!==$)){if(X=I2,z="onMouseLeave",B="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(X=R2,z="onPointerLeave",B="onPointerEnter",w="pointer"),ke=H==null?j:Or(H),k=$==null?j:Or($),j=new X(z,w+"leave",H,r,_),j.target=ke,j.relatedTarget=k,z=null,dr(_)===T&&(X=new X(B,w+"enter",$,r,_),X.target=k,X.relatedTarget=ke,z=X),ke=z,H&&$)t:{for(X=H,B=$,w=0,k=X;k;k=Vr(k))w++;for(k=0,z=B;z;z=Vr(z))k++;for(;0<w-k;)X=Vr(X),w--;for(;0<k-w;)B=Vr(B),k--;for(;w--;){if(X===B||B!==null&&X===B.alternate)break t;X=Vr(X),B=Vr(B)}X=null}else X=null;H!==null&&oc(P,j,H,X,!1),$!==null&&ke!==null&&oc(P,ke,$,X,!0)}}e:{if(j=T?Or(T):window,H=j.nodeName&&j.nodeName.toLowerCase(),H==="select"||H==="input"&&j.type==="file")var K=Ou;else if(z2(j))if(H2)K=Wu;else{K=Uu;var J=Hu}else(H=j.nodeName)&&H.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(K=qu);if(K&&(K=K(e,T))){O2(P,K,r,_);break e}J&&J(e,j,T),e==="focusout"&&(J=j._wrapperState)&&J.controlled&&j.type==="number"&&Na(j,"number",j.value)}switch(J=T?Or(T):window,e){case"focusin":(z2(J)||J.contentEditable==="true")&&(Lr=J,ai=T,Sn=null);break;case"focusout":Sn=ai=Lr=null;break;case"mousedown":ii=!0;break;case"contextmenu":case"mouseup":case"dragend":ii=!1,K2(P,r,_);break;case"selectionchange":if(Xu)break;case"keydown":case"keyup":K2(P,r,_)}var Z;if(ti)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Pr?M2(e,r)&&(re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(re="onCompositionStart");re&&(_2&&r.locale!=="ko"&&(Pr||re!=="onCompositionStart"?re==="onCompositionEnd"&&Pr&&(Z=N2()):(Xt=_,Qa="value"in Xt?Xt.value:Xt.textContent,Pr=!0)),J=Ds(T,re),0<J.length&&(re=new j2(re,e,null,r,_),P.push({event:re,listeners:J}),Z?re.data=Z:(Z=V2(r),Z!==null&&(re.data=Z)))),(Z=Pu?Lu(e,r):Mu(e,r))&&(T=Ds(T,"onBeforeInput"),0<T.length&&(_=new j2("onBeforeInput","beforeinput",null,r,_),P.push({event:_,listeners:T}),_.data=Z))}ac(P,t)})}function Fn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ds(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ln(e,r),i!=null&&s.unshift(Fn(e,i,a)),i=ln(e,t),i!=null&&s.push(Fn(e,i,a))),e=e.return}return s}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,t,r,s,a){for(var i=t._reactName,p=[];r!==null&&r!==s;){var f=r,g=f.alternate,T=f.stateNode;if(g!==null&&g===s)break;f.tag===5&&T!==null&&(f=T,a?(g=ln(r,i),g!=null&&p.unshift(Fn(r,g,f))):a||(g=ln(r,i),g!=null&&p.push(Fn(r,g,f)))),r=r.return}p.length!==0&&e.push({event:t,listeners:p})}var Ju=/\r\n?/g,Zu=/\u0000|\uFFFD/g;function cc(e){return(typeof e=="string"?e:""+e).replace(Ju,`
`).replace(Zu,"")}function ys(e,t,r){if(t=cc(t),cc(e)!==t&&r)throw Error(c(425))}function Ss(){}var di=null,mi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout=="function"?setTimeout:void 0,ed=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,td=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(rd)}:xi;function rd(e){setTimeout(function(){throw e})}function fi(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),An(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);An(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+zr,Tn="__reactProps$"+zr,_t="__reactContainer$"+zr,gi="__reactEvents$"+zr,nd="__reactListeners$"+zr,sd="__reactHandles$"+zr;function dr(e){var t=e[Nt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[_t]||r[Nt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=pc(e);e!==null;){if(r=e[Nt])return r;e=pc(e)}return t}e=r,r=e.parentNode}return null}function Nn(e){return e=e[Nt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Bs(e){return e[Tn]||null}var Ai=[],Hr=-1;function Yt(e){return{current:e}}function fe(e){0>Hr||(e.current=Ai[Hr],Ai[Hr]=null,Hr--)}function he(e,t){Hr++,Ai[Hr]=e.current,e.current=t}var Jt={},Ve=Yt(Jt),Ye=Yt(!1),mr=Jt;function Ur(e,t){var r=e.type.contextTypes;if(!r)return Jt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Je(e){return e=e.childContextTypes,e!=null}function ks(){fe(Ye),fe(Ve)}function uc(e,t,r){if(Ve.current!==Jt)throw Error(c(168));he(Ve,t),he(Ye,r)}function dc(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(c(108,me(e)||"Unknown",a));return W({},r,s)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,mr=Ve.current,he(Ve,e),he(Ye,Ye.current),!0}function mc(e,t,r){var s=e.stateNode;if(!s)throw Error(c(169));r?(e=dc(e,t,mr),s.__reactInternalMemoizedMergedChildContext=e,fe(Ye),fe(Ve),he(Ve,e)):fe(Ye),he(Ye,r)}var Pt=null,Ts=!1,Ci=!1;function hc(e){Pt===null?Pt=[e]:Pt.push(e)}function ad(e){Ts=!0,hc(e)}function Zt(){if(!Ci&&Pt!==null){Ci=!0;var e=0,t=de;try{var r=Pt;for(de=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Pt=null,Ts=!1}catch(a){throw Pt!==null&&(Pt=Pt.slice(e+1)),f2(Oa,Zt),a}finally{de=t,Ci=!1}}return null}var qr=[],Wr=0,Ns=null,bs=0,lt=[],pt=0,hr=null,Lt=1,Mt="";function xr(e,t){qr[Wr++]=bs,qr[Wr++]=Ns,Ns=e,bs=t}function xc(e,t,r){lt[pt++]=Lt,lt[pt++]=Mt,lt[pt++]=hr,hr=e;var s=Lt;e=Mt;var a=32-At(s)-1;s&=~(1<<a),r+=1;var i=32-At(t)+a;if(30<i){var p=a-a%5;i=(s&(1<<p)-1).toString(32),s>>=p,a-=p,Lt=1<<32-At(t)+a|r<<a|s,Mt=i+e}else Lt=1<<i|r<<a|s,Mt=e}function wi(e){e.return!==null&&(xr(e,1),xc(e,1,0))}function Ei(e){for(;e===Ns;)Ns=qr[--Wr],qr[Wr]=null,bs=qr[--Wr],qr[Wr]=null;for(;e===hr;)hr=lt[--pt],lt[pt]=null,Mt=lt[--pt],lt[pt]=null,Lt=lt[--pt],lt[pt]=null}var at=null,it=null,Ae=!1,wt=null;function fc(e,t){var r=ht(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function gc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,it=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=hr!==null?{id:Lt,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ht(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,at=e,it=null,!0):!1;default:return!1}}function vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Di(e){if(Ae){var t=it;if(t){var r=t;if(!gc(e,t)){if(vi(e))throw Error(c(418));t=Kt(r.nextSibling);var s=at;t&&gc(e,t)?fc(s,r):(e.flags=e.flags&-4097|2,Ae=!1,at=e)}}else{if(vi(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ae=!1,at=e}}}function Ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Is(e){if(e!==at)return!1;if(!Ae)return Ac(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=it)){if(vi(e))throw Cc(),Error(c(418));for(;t;)fc(e,t),t=Kt(t.nextSibling)}if(Ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){it=Kt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}it=null}}else it=at?Kt(e.stateNode.nextSibling):null;return!0}function Cc(){for(var e=it;e;)e=Kt(e.nextSibling)}function Gr(){it=at=null,Ae=!1}function yi(e){wt===null?wt=[e]:wt.push(e)}var id=ee.ReactCurrentBatchConfig;function bn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var s=r.stateNode}if(!s)throw Error(c(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(p){var f=a.refs;p===null?delete f[i]:f[i]=p},t._stringRef=i,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function js(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wc(e){var t=e._init;return t(e._payload)}function Ec(e){function t(B,w){if(e){var k=B.deletions;k===null?(B.deletions=[w],B.flags|=16):k.push(w)}}function r(B,w){if(!e)return null;for(;w!==null;)t(B,w),w=w.sibling;return null}function s(B,w){for(B=new Map;w!==null;)w.key!==null?B.set(w.key,w):B.set(w.index,w),w=w.sibling;return B}function a(B,w){return B=or(B,w),B.index=0,B.sibling=null,B}function i(B,w,k){return B.index=k,e?(k=B.alternate,k!==null?(k=k.index,k<w?(B.flags|=2,w):k):(B.flags|=2,w)):(B.flags|=1048576,w)}function p(B){return e&&B.alternate===null&&(B.flags|=2),B}function f(B,w,k,z){return w===null||w.tag!==6?(w=fo(k,B.mode,z),w.return=B,w):(w=a(w,k),w.return=B,w)}function g(B,w,k,z){var K=k.type;return K===L?_(B,w,k.props.children,z,k.key):w!==null&&(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ke&&wc(K)===w.type)?(z=a(w,k.props),z.ref=bn(B,w,k),z.return=B,z):(z=na(k.type,k.key,k.props,null,B.mode,z),z.ref=bn(B,w,k),z.return=B,z)}function T(B,w,k,z){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=go(k,B.mode,z),w.return=B,w):(w=a(w,k.children||[]),w.return=B,w)}function _(B,w,k,z,K){return w===null||w.tag!==7?(w=Dr(k,B.mode,z,K),w.return=B,w):(w=a(w,k),w.return=B,w)}function P(B,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=fo(""+w,B.mode,k),w.return=B,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case I:return k=na(w.type,w.key,w.props,null,B.mode,k),k.ref=bn(B,null,w),k.return=B,k;case Q:return w=go(w,B.mode,k),w.return=B,w;case Ke:var z=w._init;return P(B,z(w._payload),k)}if(an(w)||te(w))return w=Dr(w,B.mode,k,null),w.return=B,w;js(B,w)}return null}function j(B,w,k,z){var K=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return K!==null?null:f(B,w,""+k,z);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case I:return k.key===K?g(B,w,k,z):null;case Q:return k.key===K?T(B,w,k,z):null;case Ke:return K=k._init,j(B,w,K(k._payload),z)}if(an(k)||te(k))return K!==null?null:_(B,w,k,z,null);js(B,k)}return null}function H(B,w,k,z,K){if(typeof z=="string"&&z!==""||typeof z=="number")return B=B.get(k)||null,f(w,B,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case I:return B=B.get(z.key===null?k:z.key)||null,g(w,B,z,K);case Q:return B=B.get(z.key===null?k:z.key)||null,T(w,B,z,K);case Ke:var J=z._init;return H(B,w,k,J(z._payload),K)}if(an(z)||te(z))return B=B.get(k)||null,_(w,B,z,K,null);js(w,z)}return null}function $(B,w,k,z){for(var K=null,J=null,Z=w,re=w=0,Pe=null;Z!==null&&re<k.length;re++){Z.index>re?(Pe=Z,Z=null):Pe=Z.sibling;var pe=j(B,Z,k[re],z);if(pe===null){Z===null&&(Z=Pe);break}e&&Z&&pe.alternate===null&&t(B,Z),w=i(pe,w,re),J===null?K=pe:J.sibling=pe,J=pe,Z=Pe}if(re===k.length)return r(B,Z),Ae&&xr(B,re),K;if(Z===null){for(;re<k.length;re++)Z=P(B,k[re],z),Z!==null&&(w=i(Z,w,re),J===null?K=Z:J.sibling=Z,J=Z);return Ae&&xr(B,re),K}for(Z=s(B,Z);re<k.length;re++)Pe=H(Z,B,re,k[re],z),Pe!==null&&(e&&Pe.alternate!==null&&Z.delete(Pe.key===null?re:Pe.key),w=i(Pe,w,re),J===null?K=Pe:J.sibling=Pe,J=Pe);return e&&Z.forEach(function(cr){return t(B,cr)}),Ae&&xr(B,re),K}function X(B,w,k,z){var K=te(k);if(typeof K!="function")throw Error(c(150));if(k=K.call(k),k==null)throw Error(c(151));for(var J=K=null,Z=w,re=w=0,Pe=null,pe=k.next();Z!==null&&!pe.done;re++,pe=k.next()){Z.index>re?(Pe=Z,Z=null):Pe=Z.sibling;var cr=j(B,Z,pe.value,z);if(cr===null){Z===null&&(Z=Pe);break}e&&Z&&cr.alternate===null&&t(B,Z),w=i(cr,w,re),J===null?K=cr:J.sibling=cr,J=cr,Z=Pe}if(pe.done)return r(B,Z),Ae&&xr(B,re),K;if(Z===null){for(;!pe.done;re++,pe=k.next())pe=P(B,pe.value,z),pe!==null&&(w=i(pe,w,re),J===null?K=pe:J.sibling=pe,J=pe);return Ae&&xr(B,re),K}for(Z=s(B,Z);!pe.done;re++,pe=k.next())pe=H(Z,B,re,pe.value,z),pe!==null&&(e&&pe.alternate!==null&&Z.delete(pe.key===null?re:pe.key),w=i(pe,w,re),J===null?K=pe:J.sibling=pe,J=pe);return e&&Z.forEach(function(Vd){return t(B,Vd)}),Ae&&xr(B,re),K}function ke(B,w,k,z){if(typeof k=="object"&&k!==null&&k.type===L&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case I:e:{for(var K=k.key,J=w;J!==null;){if(J.key===K){if(K=k.type,K===L){if(J.tag===7){r(B,J.sibling),w=a(J,k.props.children),w.return=B,B=w;break e}}else if(J.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ke&&wc(K)===J.type){r(B,J.sibling),w=a(J,k.props),w.ref=bn(B,J,k),w.return=B,B=w;break e}r(B,J);break}else t(B,J);J=J.sibling}k.type===L?(w=Dr(k.props.children,B.mode,z,k.key),w.return=B,B=w):(z=na(k.type,k.key,k.props,null,B.mode,z),z.ref=bn(B,w,k),z.return=B,B=z)}return p(B);case Q:e:{for(J=k.key;w!==null;){if(w.key===J)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){r(B,w.sibling),w=a(w,k.children||[]),w.return=B,B=w;break e}else{r(B,w);break}else t(B,w);w=w.sibling}w=go(k,B.mode,z),w.return=B,B=w}return p(B);case Ke:return J=k._init,ke(B,w,J(k._payload),z)}if(an(k))return $(B,w,k,z);if(te(k))return X(B,w,k,z);js(B,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(r(B,w.sibling),w=a(w,k),w.return=B,B=w):(r(B,w),w=fo(k,B.mode,z),w.return=B,B=w),p(B)):r(B,w)}return ke}var $r=Ec(!0),vc=Ec(!1),Rs=Yt(null),_s=null,Xr=null,Si=null;function Bi(){Si=Xr=_s=null}function ki(e){var t=Rs.current;fe(Rs),e._currentValue=t}function Fi(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Qr(e,t){_s=e,Si=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ze=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Si!==e)if(e={context:e,memoizedValue:t,next:null},Xr===null){if(_s===null)throw Error(c(308));Xr=e,_s.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return t}var fr=null;function Ti(e){fr===null?fr=[e]:fr.push(e)}function Dc(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Ti(t)):(r.next=a.next,a.next=r),t.interleaved=r,Vt(e,s)}function Vt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var er=!1;function Ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tr(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(oe&2)!==0){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Vt(e,r)}return a=s.interleaved,a===null?(t.next=t,Ti(s)):(t.next=a.next,a.next=t),s.interleaved=t,Vt(e,r)}function Ps(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,qa(e,r)}}function Sc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=p:i=i.next=p,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ls(e,t,r,s){var a=e.updateQueue;er=!1;var i=a.firstBaseUpdate,p=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var g=f,T=g.next;g.next=null,p===null?i=T:p.next=T,p=g;var _=e.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==p&&(f===null?_.firstBaseUpdate=T:f.next=T,_.lastBaseUpdate=g))}if(i!==null){var P=a.baseState;p=0,_=T=g=null,f=i;do{var j=f.lane,H=f.eventTime;if((s&j)===j){_!==null&&(_=_.next={eventTime:H,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var $=e,X=f;switch(j=t,H=r,X.tag){case 1:if($=X.payload,typeof $=="function"){P=$.call(H,P,j);break e}P=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=X.payload,j=typeof $=="function"?$.call(H,P,j):$,j==null)break e;P=W({},P,j);break e;case 2:er=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,j=a.effects,j===null?a.effects=[f]:j.push(f))}else H={eventTime:H,lane:j,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(T=_=H,g=P):_=_.next=H,p|=j;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;j=f,f=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);if(_===null&&(g=P),a.baseState=g,a.firstBaseUpdate=T,a.lastBaseUpdate=_,t=a.shared.interleaved,t!==null){a=t;do p|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Cr|=p,e.lanes=p,e.memoizedState=P}}function Bc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(c(191,a));a.call(s)}}}var In={},bt=Yt(In),jn=Yt(In),Rn=Yt(In);function gr(e){if(e===In)throw Error(c(174));return e}function bi(e,t){switch(he(Rn,t),he(jn,e),he(bt,In),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ia(t,e)}fe(bt),he(bt,t)}function Kr(){fe(bt),fe(jn),fe(Rn)}function kc(e){gr(Rn.current);var t=gr(bt.current),r=Ia(t,e.type);t!==r&&(he(jn,e),he(bt,r))}function Ii(e){jn.current===e&&(fe(bt),fe(jn))}var we=Yt(0);function Ms(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function Ri(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var Vs=ee.ReactCurrentDispatcher,_i=ee.ReactCurrentBatchConfig,Ar=0,Ee=null,be=null,Re=null,zs=!1,_n=!1,Pn=0,od=0;function ze(){throw Error(c(321))}function Pi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ct(e[r],t[r]))return!1;return!0}function Li(e,t,r,s,a,i){if(Ar=i,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vs.current=e===null||e.memoizedState===null?ud:dd,e=r(s,a),_n){i=0;do{if(_n=!1,Pn=0,25<=i)throw Error(c(301));i+=1,Re=be=null,t.updateQueue=null,Vs.current=md,e=r(s,a)}while(_n)}if(Vs.current=Us,t=be!==null&&be.next!==null,Ar=0,Re=be=Ee=null,zs=!1,t)throw Error(c(300));return e}function Mi(){var e=Pn!==0;return Pn=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Ee.memoizedState=Re=e:Re=Re.next=e,Re}function dt(){if(be===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Re===null?Ee.memoizedState:Re.next;if(t!==null)Re=t,be=e;else{if(e===null)throw Error(c(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Re===null?Ee.memoizedState=Re=e:Re=Re.next=e}return Re}function Ln(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=dt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var s=be,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var p=a.next;a.next=i.next,i.next=p}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var f=p=null,g=null,T=i;do{var _=T.lane;if((Ar&_)===_)g!==null&&(g=g.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),s=T.hasEagerState?T.eagerState:e(s,T.action);else{var P={lane:_,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};g===null?(f=g=P,p=s):g=g.next=P,Ee.lanes|=_,Cr|=_}T=T.next}while(T!==null&&T!==i);g===null?p=s:g.next=f,Ct(s,t.memoizedState)||(Ze=!0),t.memoizedState=s,t.baseState=p,t.baseQueue=g,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Ee.lanes|=i,Cr|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function zi(e){var t=dt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var p=a=a.next;do i=e(i,p.action),p=p.next;while(p!==a);Ct(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function Fc(){}function Tc(e,t){var r=Ee,s=dt(),a=t(),i=!Ct(s.memoizedState,a);if(i&&(s.memoizedState=a,Ze=!0),s=s.queue,Oi(Ic.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||Re!==null&&Re.memoizedState.tag&1){if(r.flags|=2048,Mn(9,bc.bind(null,r,s,a,t),void 0,null),_e===null)throw Error(c(349));(Ar&30)!==0||Nc(r,t,a)}return a}function Nc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function bc(e,t,r,s){t.value=r,t.getSnapshot=s,jc(t)&&Rc(e)}function Ic(e,t,r){return r(function(){jc(t)&&Rc(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ct(e,r)}catch{return!0}}function Rc(e){var t=Vt(e,1);t!==null&&yt(t,e,1,-1)}function _c(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:e},t.queue=e,e=e.dispatch=pd.bind(null,Ee,e),[t.memoizedState,e]}function Mn(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Pc(){return dt().memoizedState}function Os(e,t,r,s){var a=It();Ee.flags|=e,a.memoizedState=Mn(1|t,r,void 0,s===void 0?null:s)}function Hs(e,t,r,s){var a=dt();s=s===void 0?null:s;var i=void 0;if(be!==null){var p=be.memoizedState;if(i=p.destroy,s!==null&&Pi(s,p.deps)){a.memoizedState=Mn(t,r,i,s);return}}Ee.flags|=e,a.memoizedState=Mn(1|t,r,i,s)}function Lc(e,t){return Os(8390656,8,e,t)}function Oi(e,t){return Hs(2048,8,e,t)}function Mc(e,t){return Hs(4,2,e,t)}function Vc(e,t){return Hs(4,4,e,t)}function zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oc(e,t,r){return r=r!=null?r.concat([e]):null,Hs(4,4,zc.bind(null,t,e),r)}function Hi(){}function Hc(e,t){var r=dt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Pi(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Uc(e,t){var r=dt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Pi(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function qc(e,t,r){return(Ar&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=r):(Ct(r,t)||(r=w2(),Ee.lanes|=r,Cr|=r,e.baseState=!0),t)}function cd(e,t){var r=de;de=r!==0&&4>r?r:4,e(!0);var s=_i.transition;_i.transition={};try{e(!1),t()}finally{de=r,_i.transition=s}}function Wc(){return dt().memoizedState}function ld(e,t,r){var s=ar(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Gc(e))$c(t,r);else if(r=Dc(e,t,r,s),r!==null){var a=Ge();yt(r,e,s,a),Xc(r,t,s)}}function pd(e,t,r){var s=ar(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))$c(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var p=t.lastRenderedState,f=i(p,r);if(a.hasEagerState=!0,a.eagerState=f,Ct(f,p)){var g=t.interleaved;g===null?(a.next=a,Ti(t)):(a.next=g.next,g.next=a),t.interleaved=a;return}}catch{}finally{}r=Dc(e,t,a,s),r!==null&&(a=Ge(),yt(r,e,s,a),Xc(r,t,s))}}function Gc(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function $c(e,t){_n=zs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Xc(e,t,r){if((r&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,qa(e,r)}}var Us={readContext:ut,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},ud={readContext:ut,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Lc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Os(4194308,4,zc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Os(4194308,4,e,t)},useInsertionEffect:function(e,t){return Os(4,2,e,t)},useMemo:function(e,t){var r=It();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=It();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=ld.bind(null,Ee,e),[s.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:Hi,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=cd.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ee,a=It();if(Ae){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),_e===null)throw Error(c(349));(Ar&30)!==0||Nc(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Lc(Ic.bind(null,s,i,e),[e]),s.flags|=2048,Mn(9,bc.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=It(),t=_e.identifierPrefix;if(Ae){var r=Mt,s=Lt;r=(s&~(1<<32-At(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Pn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=od++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dd={readContext:ut,useCallback:Hc,useContext:ut,useEffect:Oi,useImperativeHandle:Oc,useInsertionEffect:Mc,useLayoutEffect:Vc,useMemo:Uc,useReducer:Vi,useRef:Pc,useState:function(){return Vi(Ln)},useDebugValue:Hi,useDeferredValue:function(e){var t=dt();return qc(t,be.memoizedState,e)},useTransition:function(){var e=Vi(Ln)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Tc,useId:Wc,unstable_isNewReconciler:!1},md={readContext:ut,useCallback:Hc,useContext:ut,useEffect:Oi,useImperativeHandle:Oc,useInsertionEffect:Mc,useLayoutEffect:Vc,useMemo:Uc,useReducer:zi,useRef:Pc,useState:function(){return zi(Ln)},useDebugValue:Hi,useDeferredValue:function(e){var t=dt();return be===null?t.memoizedState=e:qc(t,be.memoizedState,e)},useTransition:function(){var e=zi(Ln)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Tc,useId:Wc,unstable_isNewReconciler:!1};function Et(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ui(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var qs={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Ge(),a=ar(e),i=zt(s,a);i.payload=t,r!=null&&(i.callback=r),t=tr(e,i,a),t!==null&&(yt(t,e,a,s),Ps(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Ge(),a=ar(e),i=zt(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=tr(e,i,a),t!==null&&(yt(t,e,a,s),Ps(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ge(),s=ar(e),a=zt(r,s);a.tag=2,t!=null&&(a.callback=t),t=tr(e,a,s),t!==null&&(yt(t,e,s,r),Ps(t,e,s))}};function Qc(e,t,r,s,a,i,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,p):t.prototype&&t.prototype.isPureReactComponent?!yn(r,s)||!yn(a,i):!0}function Kc(e,t,r){var s=!1,a=Jt,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(a=Je(t)?mr:Ve.current,s=t.contextTypes,i=(s=s!=null)?Ur(e,a):Jt),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qs,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Yc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function qi(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Ni(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=ut(i):(i=Je(t)?mr:Ve.current,a.context=Ur(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ui(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&qs.enqueueReplaceState(a,a.state,null),Ls(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t){try{var r="",s=t;do r+=ce(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Wi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Gi(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var hd=typeof WeakMap=="function"?WeakMap:Map;function Jc(e,t,r){r=zt(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Ys||(Ys=!0,oo=s),Gi(e,t)},r}function Zc(e,t,r){r=zt(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Gi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Gi(e,t),typeof s!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),r}function el(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new hd;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=Fd.bind(null,e,t,r),t.then(e,e))}function tl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rl(e,t,r,s,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=zt(-1,1),t.tag=2,tr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var xd=ee.ReactCurrentOwner,Ze=!1;function We(e,t,r,s){t.child=e===null?vc(t,null,r,s):$r(t,e.child,r,s)}function nl(e,t,r,s,a){r=r.render;var i=t.ref;return Qr(t,a),s=Li(e,t,r,s,i,a),r=Mi(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ot(e,t,a)):(Ae&&r&&wi(t),t.flags|=1,We(e,t,s,a),t.child)}function sl(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!xo(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,al(e,t,i,s,a)):(e=na(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var p=i.memoizedProps;if(r=r.compare,r=r!==null?r:yn,r(p,s)&&e.ref===t.ref)return Ot(e,t,a)}return t.flags|=1,e=or(i,s),e.ref=t.ref,e.return=t,t.child=e}function al(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(yn(i,s)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=s=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,Ot(e,t,a)}return $i(e,t,r,s,a)}function il(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Zr,ot),ot|=r;else{if((r&1073741824)===0)return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Zr,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,he(Zr,ot),ot|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,he(Zr,ot),ot|=s;return We(e,t,a,r),t.child}function ol(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function $i(e,t,r,s,a){var i=Je(r)?mr:Ve.current;return i=Ur(t,i),Qr(t,a),r=Li(e,t,r,s,i,a),s=Mi(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ot(e,t,a)):(Ae&&s&&wi(t),t.flags|=1,We(e,t,r,a),t.child)}function cl(e,t,r,s,a){if(Je(r)){var i=!0;Fs(t)}else i=!1;if(Qr(t,a),t.stateNode===null)Gs(e,t),Kc(t,r,s),qi(t,r,s,a),s=!0;else if(e===null){var p=t.stateNode,f=t.memoizedProps;p.props=f;var g=p.context,T=r.contextType;typeof T=="object"&&T!==null?T=ut(T):(T=Je(r)?mr:Ve.current,T=Ur(t,T));var _=r.getDerivedStateFromProps,P=typeof _=="function"||typeof p.getSnapshotBeforeUpdate=="function";P||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(f!==s||g!==T)&&Yc(t,p,s,T),er=!1;var j=t.memoizedState;p.state=j,Ls(t,s,p,a),g=t.memoizedState,f!==s||j!==g||Ye.current||er?(typeof _=="function"&&(Ui(t,r,_,s),g=t.memoizedState),(f=er||Qc(t,r,f,s,j,g,T))?(P||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=g),p.props=s,p.state=g,p.context=T,s=f):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{p=t.stateNode,yc(e,t),f=t.memoizedProps,T=t.type===t.elementType?f:Et(t.type,f),p.props=T,P=t.pendingProps,j=p.context,g=r.contextType,typeof g=="object"&&g!==null?g=ut(g):(g=Je(r)?mr:Ve.current,g=Ur(t,g));var H=r.getDerivedStateFromProps;(_=typeof H=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(f!==P||j!==g)&&Yc(t,p,s,g),er=!1,j=t.memoizedState,p.state=j,Ls(t,s,p,a);var $=t.memoizedState;f!==P||j!==$||Ye.current||er?(typeof H=="function"&&(Ui(t,r,H,s),$=t.memoizedState),(T=er||Qc(t,r,T,s,j,$,g)||!1)?(_||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(s,$,g),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(s,$,g)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=$),p.props=s,p.state=$,p.context=g,s=T):(typeof p.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),s=!1)}return Xi(e,t,r,s,i,a)}function Xi(e,t,r,s,a,i){ol(e,t);var p=(t.flags&128)!==0;if(!s&&!p)return a&&mc(t,r,!1),Ot(e,t,i);s=t.stateNode,xd.current=t;var f=p&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&p?(t.child=$r(t,e.child,null,i),t.child=$r(t,null,f,i)):We(e,t,f,i),t.memoizedState=s.state,a&&mc(t,r,!0),t.child}function ll(e){var t=e.stateNode;t.pendingContext?uc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uc(e,t.context,!1),bi(e,t.containerInfo)}function pl(e,t,r,s,a){return Gr(),yi(a),t.flags|=256,We(e,t,r,s),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0};function Ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function ul(e,t,r){var s=t.pendingProps,a=we.current,i=!1,p=(t.flags&128)!==0,f;if((f=p)||(f=e!==null&&e.memoizedState===null?!1:(a&2)!==0),f?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),he(we,a&1),e===null)return Di(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=s.children,e=s.fallback,i?(s=t.mode,i=t.child,p={mode:"hidden",children:p},(s&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=p):i=sa(p,s,0,null),e=Dr(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ki(r),t.memoizedState=Qi,e):Yi(t,p));if(a=e.memoizedState,a!==null&&(f=a.dehydrated,f!==null))return fd(e,t,p,s,f,a,r);if(i){i=s.fallback,p=t.mode,a=e.child,f=a.sibling;var g={mode:"hidden",children:s.children};return(p&1)===0&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=g,t.deletions=null):(s=or(a,g),s.subtreeFlags=a.subtreeFlags&14680064),f!==null?i=or(f,i):(i=Dr(i,p,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,p=e.child.memoizedState,p=p===null?Ki(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},i.memoizedState=p,i.childLanes=e.childLanes&~r,t.memoizedState=Qi,s}return i=e.child,e=i.sibling,s=or(i,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Yi(e,t){return t=sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ws(e,t,r,s){return s!==null&&yi(s),$r(t,e.child,null,r),e=Yi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fd(e,t,r,s,a,i,p){if(r)return t.flags&256?(t.flags&=-257,s=Wi(Error(c(422))),Ws(e,t,p,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=sa({mode:"visible",children:s.children},a,0,null),i=Dr(i,a,p,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,(t.mode&1)!==0&&$r(t,e.child,null,p),t.child.memoizedState=Ki(p),t.memoizedState=Qi,i);if((t.mode&1)===0)return Ws(e,t,p,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var f=s.dgst;return s=f,i=Error(c(419)),s=Wi(i,s,void 0),Ws(e,t,p,s)}if(f=(p&e.childLanes)!==0,Ze||f){if(s=_e,s!==null){switch(p&-p){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(s.suspendedLanes|p))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Vt(e,a),yt(s,e,a,-1))}return ho(),s=Wi(Error(c(421))),Ws(e,t,p,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Td.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,it=Kt(a.nextSibling),at=t,Ae=!0,wt=null,e!==null&&(lt[pt++]=Lt,lt[pt++]=Mt,lt[pt++]=hr,Lt=e.id,Mt=e.overflow,hr=t),t=Yi(t,s.children),t.flags|=4096,t)}function dl(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Fi(e.return,t,r)}function Ji(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function ml(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(We(e,t,s.children,r),s=we.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dl(e,r,t);else if(e.tag===19)dl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(he(we,s),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ms(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Ji(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ms(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Ji(t,!0,r,null,i);break;case"together":Ji(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Cr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=or(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=or(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function gd(e,t,r){switch(t.tag){case 3:ll(t),Gr();break;case 5:kc(t);break;case 1:Je(t.type)&&Fs(t);break;case 4:bi(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;he(Rs,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(he(we,we.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?ul(e,t,r):(he(we,we.current&1),e=Ot(e,t,r),e!==null?e.sibling:null);he(we,we.current&1);break;case 19:if(s=(r&t.childLanes)!==0,(e.flags&128)!==0){if(s)return ml(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),he(we,we.current),s)break;return null;case 22:case 23:return t.lanes=0,il(e,t,r)}return Ot(e,t,r)}var hl,Zi,xl,fl;hl=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Zi=function(){},xl=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,gr(bt.current);var i=null;switch(r){case"input":a=Fa(e,a),s=Fa(e,s),i=[];break;case"select":a=W({},a,{value:void 0}),s=W({},s,{value:void 0}),i=[];break;case"textarea":a=ba(e,a),s=ba(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ss)}ja(r,s);var p;r=null;for(T in a)if(!s.hasOwnProperty(T)&&a.hasOwnProperty(T)&&a[T]!=null)if(T==="style"){var f=a[T];for(p in f)f.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(u.hasOwnProperty(T)?i||(i=[]):(i=i||[]).push(T,null));for(T in s){var g=s[T];if(f=a!=null?a[T]:void 0,s.hasOwnProperty(T)&&g!==f&&(g!=null||f!=null))if(T==="style")if(f){for(p in f)!f.hasOwnProperty(p)||g&&g.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in g)g.hasOwnProperty(p)&&f[p]!==g[p]&&(r||(r={}),r[p]=g[p])}else r||(i||(i=[]),i.push(T,r)),r=g;else T==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,f=f?f.__html:void 0,g!=null&&f!==g&&(i=i||[]).push(T,g)):T==="children"?typeof g!="string"&&typeof g!="number"||(i=i||[]).push(T,""+g):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(u.hasOwnProperty(T)?(g!=null&&T==="onScroll"&&xe("scroll",e),i||f===g||(i=[])):(i=i||[]).push(T,g))}r&&(i=i||[]).push("style",r);var T=i;(t.updateQueue=T)&&(t.flags|=4)}},fl=function(e,t,r,s){r!==s&&(t.flags|=4)};function Vn(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Ad(e,t,r){var s=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Je(t.type)&&ks(),Oe(t),null;case 3:return s=t.stateNode,Kr(),fe(Ye),fe(Ve),Ri(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Is(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wt!==null&&(po(wt),wt=null))),Zi(e,t),Oe(t),null;case 5:Ii(t);var a=gr(Rn.current);if(r=t.type,e!==null&&t.stateNode!=null)xl(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(c(166));return Oe(t),null}if(e=gr(bt.current),Is(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[Nt]=t,s[Tn]=i,e=(t.mode&1)!==0,r){case"dialog":xe("cancel",s),xe("close",s);break;case"iframe":case"object":case"embed":xe("load",s);break;case"video":case"audio":for(a=0;a<Bn.length;a++)xe(Bn[a],s);break;case"source":xe("error",s);break;case"img":case"image":case"link":xe("error",s),xe("load",s);break;case"details":xe("toggle",s);break;case"input":Ko(s,i),xe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},xe("invalid",s);break;case"textarea":Zo(s,i),xe("invalid",s)}ja(r,i),a=null;for(var p in i)if(i.hasOwnProperty(p)){var f=i[p];p==="children"?typeof f=="string"?s.textContent!==f&&(i.suppressHydrationWarning!==!0&&ys(s.textContent,f,e),a=["children",f]):typeof f=="number"&&s.textContent!==""+f&&(i.suppressHydrationWarning!==!0&&ys(s.textContent,f,e),a=["children",""+f]):u.hasOwnProperty(p)&&f!=null&&p==="onScroll"&&xe("scroll",s)}switch(r){case"input":ts(s),Jo(s,i,!0);break;case"textarea":ts(s),t2(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Ss)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{p=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=r2(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=p.createElement(r,{is:s.is}):(e=p.createElement(r),r==="select"&&(p=e,s.multiple?p.multiple=!0:s.size&&(p.size=s.size))):e=p.createElementNS(e,r),e[Nt]=t,e[Tn]=s,hl(e,t,!1,!1),t.stateNode=e;e:{switch(p=Ra(r,s),r){case"dialog":xe("cancel",e),xe("close",e),a=s;break;case"iframe":case"object":case"embed":xe("load",e),a=s;break;case"video":case"audio":for(a=0;a<Bn.length;a++)xe(Bn[a],e);a=s;break;case"source":xe("error",e),a=s;break;case"img":case"image":case"link":xe("error",e),xe("load",e),a=s;break;case"details":xe("toggle",e),a=s;break;case"input":Ko(e,s),a=Fa(e,s),xe("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=W({},s,{value:void 0}),xe("invalid",e);break;case"textarea":Zo(e,s),a=ba(e,s),xe("invalid",e);break;default:a=s}ja(r,a),f=a;for(i in f)if(f.hasOwnProperty(i)){var g=f[i];i==="style"?a2(e,g):i==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&n2(e,g)):i==="children"?typeof g=="string"?(r!=="textarea"||g!=="")&&on(e,g):typeof g=="number"&&on(e,""+g):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(u.hasOwnProperty(i)?g!=null&&i==="onScroll"&&xe("scroll",e):g!=null&&U(e,i,g,p))}switch(r){case"input":ts(e),Jo(e,s,!1);break;case"textarea":ts(e),t2(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ue(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?br(e,!!s.multiple,i,!1):s.defaultValue!=null&&br(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ss)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)fl(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(c(166));if(r=gr(Rn.current),gr(bt.current),Is(t)){if(s=t.stateNode,r=t.memoizedProps,s[Nt]=t,(i=s.nodeValue!==r)&&(e=at,e!==null))switch(e.tag){case 3:ys(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ys(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Nt]=t,t.stateNode=s}return Oe(t),null;case 13:if(fe(we),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&it!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Cc(),Gr(),t.flags|=98560,i=!1;else if(i=Is(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Nt]=t}else Gr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else wt!==null&&(po(wt),wt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(we.current&1)!==0?Ie===0&&(Ie=3):ho())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Kr(),Zi(e,t),e===null&&kn(t.stateNode.containerInfo),Oe(t),null;case 10:return ki(t.type._context),Oe(t),null;case 17:return Je(t.type)&&ks(),Oe(t),null;case 19:if(fe(we),i=t.memoizedState,i===null)return Oe(t),null;if(s=(t.flags&128)!==0,p=i.rendering,p===null)if(s)Vn(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=Ms(e),p!==null){for(t.flags|=128,Vn(i,!1),s=p.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,p=i.alternate,p===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=p.childLanes,i.lanes=p.lanes,i.child=p.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=p.memoizedProps,i.memoizedState=p.memoizedState,i.updateQueue=p.updateQueue,i.type=p.type,e=p.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return he(we,we.current&1|2),t.child}e=e.sibling}i.tail!==null&&Be()>en&&(t.flags|=128,s=!0,Vn(i,!1),t.lanes=4194304)}else{if(!s)if(e=Ms(p),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!p.alternate&&!Ae)return Oe(t),null}else 2*Be()-i.renderingStartTime>en&&r!==1073741824&&(t.flags|=128,s=!0,Vn(i,!1),t.lanes=4194304);i.isBackwards?(p.sibling=t.child,t.child=p):(r=i.last,r!==null?r.sibling=p:t.child=p,i.last=p)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Be(),t.sibling=null,r=we.current,he(we,s?r&1|2:r&1),t):(Oe(t),null);case 22:case 23:return mo(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(ot&1073741824)!==0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Cd(e,t){switch(Ei(t),t.tag){case 1:return Je(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),fe(Ye),fe(Ve),Ri(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ii(t),null;case 13:if(fe(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(we),null;case 4:return Kr(),null;case 10:return ki(t.type._context),null;case 22:case 23:return mo(),null;case 24:return null;default:return null}}var $s=!1,He=!1,wd=typeof WeakSet=="function"?WeakSet:Set,q=null;function Jr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){ye(e,t,s)}else r.current=null}function eo(e,t,r){try{r()}catch(s){ye(e,t,s)}}var gl=!1;function Ed(e,t){if(di=ms,e=Q2(),si(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var p=0,f=-1,g=-1,T=0,_=0,P=e,j=null;t:for(;;){for(var H;P!==r||a!==0&&P.nodeType!==3||(f=p+a),P!==i||s!==0&&P.nodeType!==3||(g=p+s),P.nodeType===3&&(p+=P.nodeValue.length),(H=P.firstChild)!==null;)j=P,P=H;for(;;){if(P===e)break t;if(j===r&&++T===a&&(f=p),j===i&&++_===s&&(g=p),(H=P.nextSibling)!==null)break;P=j,j=P.parentNode}P=H}r=f===-1||g===-1?null:{start:f,end:g}}else r=null}r=r||{start:0,end:0}}else r=null;for(mi={focusedElem:e,selectionRange:r},ms=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var $=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var X=$.memoizedProps,ke=$.memoizedState,B=t.stateNode,w=B.getSnapshotBeforeUpdate(t.elementType===t.type?X:Et(t.type,X),ke);B.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(z){ye(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return $=gl,gl=!1,$}function zn(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&eo(t,r,i)}a=a.next}while(a!==s)}}function Xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function to(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Al(e){var t=e.alternate;t!==null&&(e.alternate=null,Al(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[Tn],delete t[gi],delete t[nd],delete t[sd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cl(e){return e.tag===5||e.tag===3||e.tag===4}function wl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ro(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ss));else if(s!==4&&(e=e.child,e!==null))for(ro(e,t,r),e=e.sibling;e!==null;)ro(e,t,r),e=e.sibling}function no(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(no(e,t,r),e=e.sibling;e!==null;)no(e,t,r),e=e.sibling}var Le=null,vt=!1;function rr(e,t,r){for(r=r.child;r!==null;)El(e,t,r),r=r.sibling}function El(e,t,r){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(os,r)}catch{}switch(r.tag){case 5:He||Jr(r,t);case 6:var s=Le,a=vt;Le=null,rr(e,t,r),Le=s,vt=a,Le!==null&&(vt?(e=Le,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Le.removeChild(r.stateNode));break;case 18:Le!==null&&(vt?(e=Le,r=r.stateNode,e.nodeType===8?fi(e.parentNode,r):e.nodeType===1&&fi(e,r),An(e)):fi(Le,r.stateNode));break;case 4:s=Le,a=vt,Le=r.stateNode.containerInfo,vt=!0,rr(e,t,r),Le=s,vt=a;break;case 0:case 11:case 14:case 15:if(!He&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,p=i.destroy;i=i.tag,p!==void 0&&((i&2)!==0||(i&4)!==0)&&eo(r,t,p),a=a.next}while(a!==s)}rr(e,t,r);break;case 1:if(!He&&(Jr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(f){ye(r,t,f)}rr(e,t,r);break;case 21:rr(e,t,r);break;case 22:r.mode&1?(He=(s=He)||r.memoizedState!==null,rr(e,t,r),He=s):rr(e,t,r);break;default:rr(e,t,r)}}function vl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new wd),t.forEach(function(s){var a=Nd.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Dt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,p=t,f=p;e:for(;f!==null;){switch(f.tag){case 5:Le=f.stateNode,vt=!1;break e;case 3:Le=f.stateNode.containerInfo,vt=!0;break e;case 4:Le=f.stateNode.containerInfo,vt=!0;break e}f=f.return}if(Le===null)throw Error(c(160));El(i,p,a),Le=null,vt=!1;var g=a.alternate;g!==null&&(g.return=null),a.return=null}catch(T){ye(a,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dl(t,e),t=t.sibling}function Dl(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),jt(e),s&4){try{zn(3,e,e.return),Xs(3,e)}catch(X){ye(e,e.return,X)}try{zn(5,e,e.return)}catch(X){ye(e,e.return,X)}}break;case 1:Dt(t,e),jt(e),s&512&&r!==null&&Jr(r,r.return);break;case 5:if(Dt(t,e),jt(e),s&512&&r!==null&&Jr(r,r.return),e.flags&32){var a=e.stateNode;try{on(a,"")}catch(X){ye(e,e.return,X)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,p=r!==null?r.memoizedProps:i,f=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{f==="input"&&i.type==="radio"&&i.name!=null&&Yo(a,i),Ra(f,p);var T=Ra(f,i);for(p=0;p<g.length;p+=2){var _=g[p],P=g[p+1];_==="style"?a2(a,P):_==="dangerouslySetInnerHTML"?n2(a,P):_==="children"?on(a,P):U(a,_,P,T)}switch(f){case"input":Ta(a,i);break;case"textarea":e2(a,i);break;case"select":var j=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var H=i.value;H!=null?br(a,!!i.multiple,H,!1):j!==!!i.multiple&&(i.defaultValue!=null?br(a,!!i.multiple,i.defaultValue,!0):br(a,!!i.multiple,i.multiple?[]:"",!1))}a[Tn]=i}catch(X){ye(e,e.return,X)}}break;case 6:if(Dt(t,e),jt(e),s&4){if(e.stateNode===null)throw Error(c(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(X){ye(e,e.return,X)}}break;case 3:if(Dt(t,e),jt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(X){ye(e,e.return,X)}break;case 4:Dt(t,e),jt(e);break;case 13:Dt(t,e),jt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(io=Be())),s&4&&vl(e);break;case 22:if(_=r!==null&&r.memoizedState!==null,e.mode&1?(He=(T=He)||_,Dt(t,e),He=T):Dt(t,e),jt(e),s&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!_&&(e.mode&1)!==0)for(q=e,_=e.child;_!==null;){for(P=q=_;q!==null;){switch(j=q,H=j.child,j.tag){case 0:case 11:case 14:case 15:zn(4,j,j.return);break;case 1:Jr(j,j.return);var $=j.stateNode;if(typeof $.componentWillUnmount=="function"){s=j,r=j.return;try{t=s,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(X){ye(s,r,X)}}break;case 5:Jr(j,j.return);break;case 22:if(j.memoizedState!==null){Bl(P);continue}}H!==null?(H.return=j,q=H):Bl(P)}_=_.sibling}e:for(_=null,P=e;;){if(P.tag===5){if(_===null){_=P;try{a=P.stateNode,T?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(f=P.stateNode,g=P.memoizedProps.style,p=g!=null&&g.hasOwnProperty("display")?g.display:null,f.style.display=s2("display",p))}catch(X){ye(e,e.return,X)}}}else if(P.tag===6){if(_===null)try{P.stateNode.nodeValue=T?"":P.memoizedProps}catch(X){ye(e,e.return,X)}}else if((P.tag!==22&&P.tag!==23||P.memoizedState===null||P===e)&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===e)break e;for(;P.sibling===null;){if(P.return===null||P.return===e)break e;_===P&&(_=null),P=P.return}_===P&&(_=null),P.sibling.return=P.return,P=P.sibling}}break;case 19:Dt(t,e),jt(e),s&4&&vl(e);break;case 21:break;default:Dt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Cl(r)){var s=r;break e}r=r.return}throw Error(c(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(on(a,""),s.flags&=-33);var i=wl(e);no(e,i,a);break;case 3:case 4:var p=s.stateNode.containerInfo,f=wl(e);ro(e,f,p);break;default:throw Error(c(161))}}catch(g){ye(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vd(e,t,r){q=e,yl(e)}function yl(e,t,r){for(var s=(e.mode&1)!==0;q!==null;){var a=q,i=a.child;if(a.tag===22&&s){var p=a.memoizedState!==null||$s;if(!p){var f=a.alternate,g=f!==null&&f.memoizedState!==null||He;f=$s;var T=He;if($s=p,(He=g)&&!T)for(q=a;q!==null;)p=q,g=p.child,p.tag===22&&p.memoizedState!==null?kl(a):g!==null?(g.return=p,q=g):kl(a);for(;i!==null;)q=i,yl(i),i=i.sibling;q=a,$s=f,He=T}Sl(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,q=i):Sl(e)}}function Sl(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||Xs(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!He)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Et(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bc(t,i,s);break;case 3:var p=t.updateQueue;if(p!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Bc(t,p,r)}break;case 5:var f=t.stateNode;if(r===null&&t.flags&4){r=f;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&r.focus();break;case"img":g.src&&(r.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var _=T.memoizedState;if(_!==null){var P=_.dehydrated;P!==null&&An(P)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}He||t.flags&512&&to(t)}catch(j){ye(t,t.return,j)}}if(t===e){q=null;break}if(r=t.sibling,r!==null){r.return=t.return,q=r;break}q=t.return}}function Bl(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,q=r;break}q=t.return}}function kl(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Xs(4,t)}catch(g){ye(t,r,g)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(g){ye(t,a,g)}}var i=t.return;try{to(t)}catch(g){ye(t,i,g)}break;case 5:var p=t.return;try{to(t)}catch(g){ye(t,p,g)}}}catch(g){ye(t,t.return,g)}if(t===e){q=null;break}var f=t.sibling;if(f!==null){f.return=t.return,q=f;break}q=t.return}}var Dd=Math.ceil,Qs=ee.ReactCurrentDispatcher,so=ee.ReactCurrentOwner,mt=ee.ReactCurrentBatchConfig,oe=0,_e=null,Fe=null,Me=0,ot=0,Zr=Yt(0),Ie=0,On=null,Cr=0,Ks=0,ao=0,Hn=null,et=null,io=0,en=1/0,Ht=null,Ys=!1,oo=null,nr=null,Js=!1,sr=null,Zs=0,Un=0,co=null,ea=-1,ta=0;function Ge(){return(oe&6)!==0?Be():ea!==-1?ea:ea=Be()}function ar(e){return(e.mode&1)===0?1:(oe&2)!==0&&Me!==0?Me&-Me:id.transition!==null?(ta===0&&(ta=w2()),ta):(e=de,e!==0||(e=window.event,e=e===void 0?16:T2(e.type)),e)}function yt(e,t,r,s){if(50<Un)throw Un=0,co=null,Error(c(185));mn(e,r,s),((oe&2)===0||e!==_e)&&(e===_e&&((oe&2)===0&&(Ks|=r),Ie===4&&ir(e,Me)),tt(e,s),r===1&&oe===0&&(t.mode&1)===0&&(en=Be()+500,Ts&&Zt()))}function tt(e,t){var r=e.callbackNode;iu(e,t);var s=ps(e,e===_e?Me:0);if(s===0)r!==null&&g2(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&g2(r),t===1)e.tag===0?ad(Tl.bind(null,e)):hc(Tl.bind(null,e)),td(function(){(oe&6)===0&&Zt()}),r=null;else{switch(E2(s)){case 1:r=Oa;break;case 4:r=A2;break;case 16:r=is;break;case 536870912:r=C2;break;default:r=is}r=Ll(r,Fl.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Fl(e,t){if(ea=-1,ta=0,(oe&6)!==0)throw Error(c(327));var r=e.callbackNode;if(tn()&&e.callbackNode!==r)return null;var s=ps(e,e===_e?Me:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=ra(e,s);else{t=s;var a=oe;oe|=2;var i=bl();(_e!==e||Me!==t)&&(Ht=null,en=Be()+500,Er(e,t));do try{Bd();break}catch(f){Nl(e,f)}while(!0);Bi(),Qs.current=i,oe=a,Fe!==null?t=0:(_e=null,Me=0,t=Ie)}if(t!==0){if(t===2&&(a=Ha(e),a!==0&&(s=a,t=lo(e,a))),t===1)throw r=On,Er(e,0),ir(e,s),tt(e,Be()),r;if(t===6)ir(e,s);else{if(a=e.current.alternate,(s&30)===0&&!yd(a)&&(t=ra(e,s),t===2&&(i=Ha(e),i!==0&&(s=i,t=lo(e,i))),t===1))throw r=On,Er(e,0),ir(e,s),tt(e,Be()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(c(345));case 2:vr(e,et,Ht);break;case 3:if(ir(e,s),(s&130023424)===s&&(t=io+500-Be(),10<t)){if(ps(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=xi(vr.bind(null,e,et,Ht),t);break}vr(e,et,Ht);break;case 4:if(ir(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var p=31-At(s);i=1<<p,p=t[p],p>a&&(a=p),s&=~i}if(s=a,s=Be()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Dd(s/1960))-s,10<s){e.timeoutHandle=xi(vr.bind(null,e,et,Ht),s);break}vr(e,et,Ht);break;case 5:vr(e,et,Ht);break;default:throw Error(c(329))}}}return tt(e,Be()),e.callbackNode===r?Fl.bind(null,e):null}function lo(e,t){var r=Hn;return e.current.memoizedState.isDehydrated&&(Er(e,t).flags|=256),e=ra(e,t),e!==2&&(t=et,et=r,t!==null&&po(t)),e}function po(e){et===null?et=e:et.push.apply(et,e)}function yd(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!Ct(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ir(e,t){for(t&=~ao,t&=~Ks,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-At(t),s=1<<r;e[r]=-1,t&=~s}}function Tl(e){if((oe&6)!==0)throw Error(c(327));tn();var t=ps(e,0);if((t&1)===0)return tt(e,Be()),null;var r=ra(e,t);if(e.tag!==0&&r===2){var s=Ha(e);s!==0&&(t=s,r=lo(e,s))}if(r===1)throw r=On,Er(e,0),ir(e,t),tt(e,Be()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vr(e,et,Ht),tt(e,Be()),null}function uo(e,t){var r=oe;oe|=1;try{return e(t)}finally{oe=r,oe===0&&(en=Be()+500,Ts&&Zt())}}function wr(e){sr!==null&&sr.tag===0&&(oe&6)===0&&tn();var t=oe;oe|=1;var r=mt.transition,s=de;try{if(mt.transition=null,de=1,e)return e()}finally{de=s,mt.transition=r,oe=t,(oe&6)===0&&Zt()}}function mo(){ot=Zr.current,fe(Zr)}function Er(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ed(r)),Fe!==null)for(r=Fe.return;r!==null;){var s=r;switch(Ei(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ks();break;case 3:Kr(),fe(Ye),fe(Ve),Ri();break;case 5:Ii(s);break;case 4:Kr();break;case 13:fe(we);break;case 19:fe(we);break;case 10:ki(s.type._context);break;case 22:case 23:mo()}r=r.return}if(_e=e,Fe=e=or(e.current,null),Me=ot=t,Ie=0,On=null,ao=Ks=Cr=0,et=Hn=null,fr!==null){for(t=0;t<fr.length;t++)if(r=fr[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var p=i.next;i.next=a,s.next=p}r.pending=s}fr=null}return e}function Nl(e,t){do{var r=Fe;try{if(Bi(),Vs.current=Us,zs){for(var s=Ee.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}zs=!1}if(Ar=0,Re=be=Ee=null,_n=!1,Pn=0,so.current=null,r===null||r.return===null){Ie=1,On=t,Fe=null;break}e:{var i=e,p=r.return,f=r,g=t;if(t=Me,f.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var T=g,_=f,P=_.tag;if((_.mode&1)===0&&(P===0||P===11||P===15)){var j=_.alternate;j?(_.updateQueue=j.updateQueue,_.memoizedState=j.memoizedState,_.lanes=j.lanes):(_.updateQueue=null,_.memoizedState=null)}var H=tl(p);if(H!==null){H.flags&=-257,rl(H,p,f,i,t),H.mode&1&&el(i,T,t),t=H,g=T;var $=t.updateQueue;if($===null){var X=new Set;X.add(g),t.updateQueue=X}else $.add(g);break e}else{if((t&1)===0){el(i,T,t),ho();break e}g=Error(c(426))}}else if(Ae&&f.mode&1){var ke=tl(p);if(ke!==null){(ke.flags&65536)===0&&(ke.flags|=256),rl(ke,p,f,i,t),yi(Yr(g,f));break e}}i=g=Yr(g,f),Ie!==4&&(Ie=2),Hn===null?Hn=[i]:Hn.push(i),i=p;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var B=Jc(i,g,t);Sc(i,B);break e;case 1:f=g;var w=i.type,k=i.stateNode;if((i.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(nr===null||!nr.has(k)))){i.flags|=65536,t&=-t,i.lanes|=t;var z=Zc(i,f,t);Sc(i,z);break e}}i=i.return}while(i!==null)}jl(r)}catch(K){t=K,Fe===r&&r!==null&&(Fe=r=r.return);continue}break}while(!0)}function bl(){var e=Qs.current;return Qs.current=Us,e===null?Us:e}function ho(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),_e===null||(Cr&268435455)===0&&(Ks&268435455)===0||ir(_e,Me)}function ra(e,t){var r=oe;oe|=2;var s=bl();(_e!==e||Me!==t)&&(Ht=null,Er(e,t));do try{Sd();break}catch(a){Nl(e,a)}while(!0);if(Bi(),oe=r,Qs.current=s,Fe!==null)throw Error(c(261));return _e=null,Me=0,Ie}function Sd(){for(;Fe!==null;)Il(Fe)}function Bd(){for(;Fe!==null&&!Yp();)Il(Fe)}function Il(e){var t=Pl(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?jl(e):Fe=t,so.current=null}function jl(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Ad(r,t,ot),r!==null){Fe=r;return}}else{if(r=Cd(r,t),r!==null){r.flags&=32767,Fe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Fe=null;return}}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Ie===0&&(Ie=5)}function vr(e,t,r){var s=de,a=mt.transition;try{mt.transition=null,de=1,kd(e,t,r,s)}finally{mt.transition=a,de=s}return null}function kd(e,t,r,s){do tn();while(sr!==null);if((oe&6)!==0)throw Error(c(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(ou(e,i),e===_e&&(Fe=_e=null,Me=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Js||(Js=!0,Ll(is,function(){return tn(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=mt.transition,mt.transition=null;var p=de;de=1;var f=oe;oe|=4,so.current=null,Ed(e,r),Dl(r,e),$u(mi),ms=!!di,mi=di=null,e.current=r,vd(r),Jp(),oe=f,de=p,mt.transition=i}else e.current=r;if(Js&&(Js=!1,sr=e,Zs=a),i=e.pendingLanes,i===0&&(nr=null),tu(r.stateNode),tt(e,Be()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(Ys)throw Ys=!1,e=oo,oo=null,e;return(Zs&1)!==0&&e.tag!==0&&tn(),i=e.pendingLanes,(i&1)!==0?e===co?Un++:(Un=0,co=e):Un=0,Zt(),null}function tn(){if(sr!==null){var e=E2(Zs),t=mt.transition,r=de;try{if(mt.transition=null,de=16>e?16:e,sr===null)var s=!1;else{if(e=sr,sr=null,Zs=0,(oe&6)!==0)throw Error(c(331));var a=oe;for(oe|=4,q=e.current;q!==null;){var i=q,p=i.child;if((q.flags&16)!==0){var f=i.deletions;if(f!==null){for(var g=0;g<f.length;g++){var T=f[g];for(q=T;q!==null;){var _=q;switch(_.tag){case 0:case 11:case 15:zn(8,_,i)}var P=_.child;if(P!==null)P.return=_,q=P;else for(;q!==null;){_=q;var j=_.sibling,H=_.return;if(Al(_),_===T){q=null;break}if(j!==null){j.return=H,q=j;break}q=H}}}var $=i.alternate;if($!==null){var X=$.child;if(X!==null){$.child=null;do{var ke=X.sibling;X.sibling=null,X=ke}while(X!==null)}}q=i}}if((i.subtreeFlags&2064)!==0&&p!==null)p.return=i,q=p;else e:for(;q!==null;){if(i=q,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:zn(9,i,i.return)}var B=i.sibling;if(B!==null){B.return=i.return,q=B;break e}q=i.return}}var w=e.current;for(q=w;q!==null;){p=q;var k=p.child;if((p.subtreeFlags&2064)!==0&&k!==null)k.return=p,q=k;else e:for(p=w;q!==null;){if(f=q,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Xs(9,f)}}catch(K){ye(f,f.return,K)}if(f===p){q=null;break e}var z=f.sibling;if(z!==null){z.return=f.return,q=z;break e}q=f.return}}if(oe=a,Zt(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(os,e)}catch{}s=!0}return s}finally{de=r,mt.transition=t}}return!1}function Rl(e,t,r){t=Yr(r,t),t=Jc(e,t,1),e=tr(e,t,1),t=Ge(),e!==null&&(mn(e,1,t),tt(e,t))}function ye(e,t,r){if(e.tag===3)Rl(e,e,r);else for(;t!==null;){if(t.tag===3){Rl(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(nr===null||!nr.has(s))){e=Yr(r,e),e=Zc(t,e,1),t=tr(t,e,1),e=Ge(),t!==null&&(mn(t,1,e),tt(t,e));break}}t=t.return}}function Fd(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Me&r)===r&&(Ie===4||Ie===3&&(Me&130023424)===Me&&500>Be()-io?Er(e,0):ao|=r),tt(e,t)}function _l(e,t){t===0&&((e.mode&1)===0?t=1:(t=ls,ls<<=1,(ls&130023424)===0&&(ls=4194304)));var r=Ge();e=Vt(e,t),e!==null&&(mn(e,t,r),tt(e,r))}function Td(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),_l(e,r)}function Nd(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(c(314))}s!==null&&s.delete(t),_l(e,r)}var Pl;Pl=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ze=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Ze=!1,gd(e,t,r);Ze=(e.flags&131072)!==0}else Ze=!1,Ae&&(t.flags&1048576)!==0&&xc(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Gs(e,t),e=t.pendingProps;var a=Ur(t,Ve.current);Qr(t,r),a=Li(null,t,s,e,a,r);var i=Mi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(s)?(i=!0,Fs(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ni(t),a.updater=qs,t.stateNode=a,a._reactInternals=t,qi(t,s,e,r),t=Xi(null,t,s,!0,i,r)):(t.tag=0,Ae&&i&&wi(t),We(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Gs(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Id(s),e=Et(s,e),a){case 0:t=$i(null,t,s,e,r);break e;case 1:t=cl(null,t,s,e,r);break e;case 11:t=nl(null,t,s,e,r);break e;case 14:t=sl(null,t,s,Et(s.type,e),r);break e}throw Error(c(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Et(s,a),$i(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Et(s,a),cl(e,t,s,a,r);case 3:e:{if(ll(t),e===null)throw Error(c(387));s=t.pendingProps,i=t.memoizedState,a=i.element,yc(e,t),Ls(t,s,null,r);var p=t.memoizedState;if(s=p.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Yr(Error(c(423)),t),t=pl(e,t,s,r,a);break e}else if(s!==a){a=Yr(Error(c(424)),t),t=pl(e,t,s,r,a);break e}else for(it=Kt(t.stateNode.containerInfo.firstChild),at=t,Ae=!0,wt=null,r=vc(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Gr(),s===a){t=Ot(e,t,r);break e}We(e,t,s,r)}t=t.child}return t;case 5:return kc(t),e===null&&Di(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,p=a.children,hi(s,a)?p=null:i!==null&&hi(s,i)&&(t.flags|=32),ol(e,t),We(e,t,p,r),t.child;case 6:return e===null&&Di(t),null;case 13:return ul(e,t,r);case 4:return bi(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=$r(t,null,s,r):We(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Et(s,a),nl(e,t,s,a,r);case 7:return We(e,t,t.pendingProps,r),t.child;case 8:return We(e,t,t.pendingProps.children,r),t.child;case 12:return We(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,p=a.value,he(Rs,s._currentValue),s._currentValue=p,i!==null)if(Ct(i.value,p)){if(i.children===a.children&&!Ye.current){t=Ot(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var f=i.dependencies;if(f!==null){p=i.child;for(var g=f.firstContext;g!==null;){if(g.context===s){if(i.tag===1){g=zt(-1,r&-r),g.tag=2;var T=i.updateQueue;if(T!==null){T=T.shared;var _=T.pending;_===null?g.next=g:(g.next=_.next,_.next=g),T.pending=g}}i.lanes|=r,g=i.alternate,g!==null&&(g.lanes|=r),Fi(i.return,r,t),f.lanes|=r;break}g=g.next}}else if(i.tag===10)p=i.type===t.type?null:i.child;else if(i.tag===18){if(p=i.return,p===null)throw Error(c(341));p.lanes|=r,f=p.alternate,f!==null&&(f.lanes|=r),Fi(p,r,t),p=i.sibling}else p=i.child;if(p!==null)p.return=i;else for(p=i;p!==null;){if(p===t){p=null;break}if(i=p.sibling,i!==null){i.return=p.return,p=i;break}p=p.return}i=p}We(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Qr(t,r),a=ut(a),s=s(a),t.flags|=1,We(e,t,s,r),t.child;case 14:return s=t.type,a=Et(s,t.pendingProps),a=Et(s.type,a),sl(e,t,s,a,r);case 15:return al(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Et(s,a),Gs(e,t),t.tag=1,Je(s)?(e=!0,Fs(t)):e=!1,Qr(t,r),Kc(t,s,a),qi(t,s,a,r),Xi(null,t,s,!0,e,r);case 19:return ml(e,t,r);case 22:return il(e,t,r)}throw Error(c(156,t.tag))};function Ll(e,t){return f2(e,t)}function bd(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,r,s){return new bd(e,t,r,s)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Id(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Se)return 11;if(e===Ne)return 14}return 2}function or(e,t){var r=e.alternate;return r===null?(r=ht(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function na(e,t,r,s,a,i){var p=2;if(s=e,typeof e=="function")xo(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case L:return Dr(r.children,a,i,t);case Y:p=8,a|=8;break;case Ce:return e=ht(12,r,t,a|2),e.elementType=Ce,e.lanes=i,e;case je:return e=ht(13,r,t,a),e.elementType=je,e.lanes=i,e;case Qe:return e=ht(19,r,t,a),e.elementType=Qe,e.lanes=i,e;case De:return sa(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:p=10;break e;case qe:p=9;break e;case Se:p=11;break e;case Ne:p=14;break e;case Ke:p=16,s=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=ht(p,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function Dr(e,t,r,s){return e=ht(7,e,s,t),e.lanes=r,e}function sa(e,t,r,s){return e=ht(22,e,s,t),e.elementType=De,e.lanes=r,e.stateNode={isHidden:!1},e}function fo(e,t,r){return e=ht(6,e,null,t),e.lanes=r,e}function go(e,t,r){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jd(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ua(0),this.expirationTimes=Ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ua(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ao(e,t,r,s,a,i,p,f,g){return e=new jd(e,t,r,f,g),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ht(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ni(i),e}function Rd(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Ml(e){if(!e)return Jt;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(Je(r))return dc(e,r,t)}return t}function Vl(e,t,r,s,a,i,p,f,g){return e=Ao(r,s,!0,e,a,i,p,f,g),e.context=Ml(null),r=e.current,s=Ge(),a=ar(r),i=zt(s,a),i.callback=t??null,tr(r,i,a),e.current.lanes=a,mn(e,a,s),tt(e,s),e}function aa(e,t,r,s){var a=t.current,i=Ge(),p=ar(a);return r=Ml(r),t.context===null?t.context=r:t.pendingContext=r,t=zt(i,p),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=tr(a,t,p),e!==null&&(yt(e,a,p,i),Ps(e,a,p)),p}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Co(e,t){zl(e,t),(e=e.alternate)&&zl(e,t)}function _d(){return null}var Ol=typeof reportError=="function"?reportError:function(e){console.error(e)};function wo(e){this._internalRoot=e}oa.prototype.render=wo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));aa(e,t,null,null)},oa.prototype.unmount=wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wr(function(){aa(null,e,null,null)}),t[_t]=null}};function oa(e){this._internalRoot=e}oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=y2();e={blockedOn:null,target:e,priority:t};for(var r=0;r<$t.length&&t!==0&&t<$t[r].priority;r++);$t.splice(r,0,e),r===0&&k2(e)}};function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hl(){}function Pd(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var T=ia(p);i.call(T)}}var p=Vl(t,s,e,0,null,!1,!1,"",Hl);return e._reactRootContainer=p,e[_t]=p.current,kn(e.nodeType===8?e.parentNode:e),wr(),p}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var f=s;s=function(){var T=ia(g);f.call(T)}}var g=Ao(e,0,!1,null,null,!1,!1,"",Hl);return e._reactRootContainer=g,e[_t]=g.current,kn(e.nodeType===8?e.parentNode:e),wr(function(){aa(t,g,r,s)}),g}function la(e,t,r,s,a){var i=r._reactRootContainer;if(i){var p=i;if(typeof a=="function"){var f=a;a=function(){var g=ia(p);f.call(g)}}aa(t,p,e,a)}else p=Pd(r,t,e,a,s);return ia(p)}v2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=dn(t.pendingLanes);r!==0&&(qa(t,r|1),tt(t,Be()),(oe&6)===0&&(en=Be()+500,Zt()))}break;case 13:wr(function(){var s=Vt(e,1);if(s!==null){var a=Ge();yt(s,e,1,a)}}),Co(e,1)}},Wa=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var r=Ge();yt(t,e,134217728,r)}Co(e,134217728)}},D2=function(e){if(e.tag===13){var t=ar(e),r=Vt(e,t);if(r!==null){var s=Ge();yt(r,e,t,s)}Co(e,t)}},y2=function(){return de},S2=function(e,t){var r=de;try{return de=e,t()}finally{de=r}},La=function(e,t,r){switch(t){case"input":if(Ta(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=Bs(s);if(!a)throw Error(c(90));Qo(s),Ta(s,a)}}}break;case"textarea":e2(e,r);break;case"select":t=r.value,t!=null&&br(e,!!r.multiple,t,!1)}},l2=uo,p2=wr;var Ld={usingClientEntryPoint:!1,Events:[Nn,Or,Bs,o2,c2,uo]},qn={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Md={bundleType:qn.bundleType,version:qn.version,rendererPackageName:qn.rendererPackageName,rendererConfig:qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=h2(e),e===null?null:e.stateNode},findFiberByHostInstance:qn.findFiberByHostInstance||_d,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{os=pa.inject(Md),Tt=pa}catch{}}return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ld,rt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(t))throw Error(c(200));return Rd(e,t,null,r)},rt.createRoot=function(e,t){if(!Eo(e))throw Error(c(299));var r=!1,s="",a=Ol;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ao(e,1,!1,null,null,r,!1,s,a),e[_t]=t.current,kn(e.nodeType===8?e.parentNode:e),new wo(t)},rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h2(t),e=e===null?null:e.stateNode,e},rt.flushSync=function(e){return wr(e)},rt.hydrate=function(e,t,r){if(!ca(t))throw Error(c(200));return la(null,e,t,!0,r)},rt.hydrateRoot=function(e,t,r){if(!Eo(e))throw Error(c(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",p=Ol;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),t=Vl(t,null,e,1,r??null,a,!1,i,p),e[_t]=t.current,kn(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new oa(t)},rt.render=function(e,t,r){if(!ca(t))throw Error(c(200));return la(null,e,t,!1,r)},rt.unmountComponentAtNode=function(e){if(!ca(e))throw Error(c(40));return e._reactRootContainer?(wr(function(){la(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1},rt.unstable_batchedUpdates=uo,rt.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!ca(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return la(e,t,r,!1,s)},rt.version="18.3.1-next-f1338f8080-20240426",rt}var Kl;function Gd(){if(Kl)return yo.exports;Kl=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),yo.exports=Wd(),yo.exports}var Yl;function $d(){if(Yl)return ua;Yl=1;var o=Gd();return ua.createRoot=o.createRoot,ua.hydrateRoot=o.hydrateRoot,ua}var Xd=$d();/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Mo=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,hp=/^[\\/]{2}/;function Qd(o,l){return l+o.replace(/\\/g,"/")}var Jl="popstate";function Zl(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function Kd(o={}){function l(u,h){let{pathname:d="/",search:x="",hash:E=""}=Nr(u.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),bo("",{pathname:d,search:x,hash:E},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function c(u,h){let d=u.document.querySelector("base"),x="";if(d&&d.getAttribute("href")){let E=u.location.href,v=E.indexOf("#");x=v===-1?E:E.slice(0,v)}return x+"#"+(typeof h=="string"?h:Xn(h))}function m(u,h){xt(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return Jd(l,c,m,o)}function ve(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function xt(o,l){if(!o){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Yd(){return Math.random().toString(36).substring(2,10)}function ep(o,l){return{usr:o.state,key:o.key,idx:l,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function bo(o,l,c=null,m,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof l=="string"?Nr(l):l,state:c,key:l&&l.key||m||Yd(),mask:u}}function Xn({pathname:o="/",search:l="",hash:c=""}){return l&&l!=="?"&&(o+=l.charAt(0)==="?"?l:"?"+l),c&&c!=="#"&&(o+=c.charAt(0)==="#"?c:"#"+c),o}function Nr(o){let l={};if(o){let c=o.indexOf("#");c>=0&&(l.hash=o.substring(c),o=o.substring(0,c));let m=o.indexOf("?");m>=0&&(l.search=o.substring(m),o=o.substring(0,m)),o&&(l.pathname=o)}return l}function Jd(o,l,c,m={}){let{window:u=document.defaultView,v5Compat:h=!1}=m,d=u.history,x="POP",E=null,v=A();v==null&&(v=0,d.replaceState({...d.state,idx:v},""));function A(){return(d.state||{idx:null}).idx}function D(){x="POP";let b=A(),M=b==null?null:b-v;v=b,E&&E({action:x,location:N.location,delta:M})}function y(b,M){x="PUSH";let G=Zl(b)?b:bo(N.location,b,M);c&&c(G,b),v=A()+1;let U=ep(G,v),ee=N.createHref(G.mask||G);try{d.pushState(U,"",ee)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;u.location.assign(ee)}h&&E&&E({action:x,location:N.location,delta:1})}function V(b,M){x="REPLACE";let G=Zl(b)?b:bo(N.location,b,M);c&&c(G,b),v=A();let U=ep(G,v),ee=N.createHref(G.mask||G);d.replaceState(U,"",ee),h&&E&&E({action:x,location:N.location,delta:0})}function F(b){return Zd(u,b)}let N={get action(){return x},get location(){return o(u,d)},listen(b){if(E)throw new Error("A history only accepts one active listener");return u.addEventListener(Jl,D),E=b,()=>{u.removeEventListener(Jl,D),E=null}},createHref(b){return l(u,b)},createURL:F,encodeLocation(b){let M=F(b);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:y,replace:V,go(b){return d.go(b)}};return N}function Zd(o,l,c=!1){let m="http://localhost";o&&(m=o.location.origin!=="null"?o.location.origin:o.location.href),ve(m,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Xn(l);return u=u.replace(/ $/,"%20"),!c&&hp.test(u)&&(u=m+u),new URL(u,m)}function xp(o,l,c="/"){return em(o,l,c,!1)}function em(o,l,c,m,u){let h=typeof l=="string"?Nr(l):l,d=Ut(h.pathname||"/",c);if(d==null)return null;let x=tm(o),E=null,v=dm(d);for(let A=0;E==null&&A<x.length;++A)E=um(x[A],v,m);return E}function tm(o){let l=fp(o);return rm(l),l}function fp(o,l=[],c=[],m="",u=!1){let h=(d,x,E=u,v)=>{let A={relativePath:v===void 0?d.path||"":v,caseSensitive:d.caseSensitive===!0,childrenIndex:x,route:d};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(m)&&E)return;ve(A.relativePath.startsWith(m),`Absolute route path "${A.relativePath}" nested under path "${m}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(m.length)}let D=St([m,A.relativePath]),y=c.concat(A);d.children&&d.children.length>0&&(ve(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${D}".`),fp(d.children,l,y,D,E)),!(d.path==null&&!d.index)&&l.push({path:D,score:lm(D,d.index),routesMeta:y.map((V,F)=>{let[N,b]=Cp(V.relativePath,V.caseSensitive,F===y.length-1);return{...V,matcher:N,compiledParams:b}})})};return o.forEach((d,x)=>{var E;if(d.path===""||!((E=d.path)!=null&&E.includes("?")))h(d,x);else for(let v of gp(d.path))h(d,x,!0,v)}),l}function gp(o){let l=o.split("/");if(l.length===0)return[];let[c,...m]=l,u=c.endsWith("?"),h=c.replace(/\?$/,"");if(m.length===0)return u?[h,""]:[h];let d=gp(m.join("/")),x=[];return x.push(...d.map(E=>E===""?h:[h,E].join("/"))),u&&x.push(...d),x.map(E=>o.startsWith("/")&&E===""?"/":E)}function rm(o){o.sort((l,c)=>l.score!==c.score?c.score-l.score:pm(l.routesMeta.map(m=>m.childrenIndex),c.routesMeta.map(m=>m.childrenIndex)))}var nm=/^:[\w-]+$/,sm=3,am=2,im=1,om=10,cm=-2,tp=o=>o==="*";function lm(o,l){let c=o.split("/"),m=c.length;return c.some(tp)&&(m+=cm),l&&(m+=am),c.filter(u=>!tp(u)).reduce((u,h)=>u+(nm.test(h)?sm:h===""?im:om),m)}function pm(o,l){return o.length===l.length&&o.slice(0,-1).every((m,u)=>m===l[u])?o[o.length-1]-l[l.length-1]:0}function um(o,l,c=!1){let{routesMeta:m}=o,u={},h="/",d=[];for(let x=0;x<m.length;++x){let E=m[x],v=x===m.length-1,A=h==="/"?l:l.slice(h.length)||"/",D={path:E.relativePath,caseSensitive:E.caseSensitive,end:v},y=E.matcher&&E.compiledParams?Ap(D,A,E.matcher,E.compiledParams):fa(D,A),V=E.route;if(!y&&v&&c&&!m[m.length-1].route.index&&(y=fa({path:E.relativePath,caseSensitive:E.caseSensitive,end:!1},A)),!y)return null;Object.assign(u,y.params),d.push({params:u,pathname:St([h,y.pathname]),pathnameBase:xm(St([h,y.pathnameBase])),route:V}),y.pathnameBase!=="/"&&(h=St([h,y.pathnameBase]))}return d}function fa(o,l){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,m]=Cp(o.path,o.caseSensitive,o.end);return Ap(o,l,c,m)}function Ap(o,l,c,m){let u=l.match(c);if(!u)return null;let h=u[0],d=h.replace(/(.)\/+$/,"$1"),x=u.slice(1);return{params:m.reduce((v,{paramName:A,isOptional:D},y)=>{if(A==="*"){let F=x[y]||"";d=h.slice(0,h.length-F.length).replace(/(.)\/+$/,"$1")}const V=x[y];return D&&!V?v[A]=void 0:v[A]=(V||"").replace(/%2F/g,"/"),v},{}),pathname:h,pathnameBase:d,pattern:o}}function Cp(o,l=!1,c=!0){xt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let m=[],u="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,x,E,v,A)=>{if(m.push({paramName:x,isOptional:E!=null}),E){let D=A.charAt(v+d.length);return D&&D!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(m.push({paramName:"*"}),u+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?u+="\\/*$":o!==""&&o!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,l?void 0:"i"),m]}function dm(o){try{return o.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return xt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),o}}function Ut(o,l){if(l==="/")return o;if(!o.toLowerCase().startsWith(l.toLowerCase()))return null;let c=l.endsWith("/")?l.length-1:l.length,m=o.charAt(c);return m&&m!=="/"?null:o.slice(c)||"/"}function mm(o,l="/"){let{pathname:c,search:m="",hash:u=""}=typeof o=="string"?Nr(o):o,h;return c?(c=Ep(c),c.startsWith("/")?h=rp(c.substring(1),"/"):h=rp(c,l)):h=l,{pathname:h,search:fm(m),hash:gm(u)}}function rp(o,l){let c=ga(l).split("/");return o.split("/").forEach(u=>{u===".."?c.length>1&&c.pop():u!=="."&&c.push(u)}),c.length>1?c.join("/"):"/"}function ko(o,l,c,m){return`Cannot include a '${o}' character in a manually specified \`to.${l}\` field [${JSON.stringify(m)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hm(o){return o.filter((l,c)=>c===0||l.route.path&&l.route.path.length>0)}function wp(o){let l=hm(o);return l.map((c,m)=>m===l.length-1?c.pathname:c.pathnameBase)}function Vo(o,l,c,m=!1){let u;typeof o=="string"?u=Nr(o):(u={...o},ve(!u.pathname||!u.pathname.includes("?"),ko("?","pathname","search",u)),ve(!u.pathname||!u.pathname.includes("#"),ko("#","pathname","hash",u)),ve(!u.search||!u.search.includes("#"),ko("#","search","hash",u)));let h=o===""||u.pathname==="",d=h?"/":u.pathname,x;if(d==null)x=c;else{let D=l.length-1;if(!m&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),D-=1;u.pathname=y.join("/")}x=D>=0?l[D]:"/"}let E=mm(u,x),v=d&&d!=="/"&&d.endsWith("/"),A=(h||d===".")&&c.endsWith("/");return!E.pathname.endsWith("/")&&(v||A)&&(E.pathname+="/"),E}var Ep=o=>o.replace(/[\\/]{2,}/g,"/"),St=o=>Ep(o.join("/")),ga=o=>o.replace(/\/+$/,""),xm=o=>ga(o).replace(/^\/*/,"/"),fm=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,gm=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Am=class{constructor(o,l,c,m=!1){this.status=o,this.statusText=l||"",this.internal=m,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function Cm(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function wm(o){let l=o.map(c=>c.route.path).filter(Boolean);return St(l)||"/"}var vp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dp(o,l){let c=o;if(typeof c!="string"||!Mo.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let m=c,u=!1;if(vp)try{let h=new URL(window.location.href),d=hp.test(c)?new URL(Qd(c,h.protocol)):new URL(c),x=Ut(d.pathname,l);d.origin===h.origin&&x!=null?c=x+d.search+d.hash:u=!0}catch{xt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:m,isExternal:u,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yp=["POST","PUT","PATCH","DELETE"];new Set(yp);var Em=["GET",...yp];new Set(Em);var vm=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Dm(o){try{return vm.includes(new URL(o).protocol)}catch{return!1}}var nn=C.createContext(null);nn.displayName="DataRouter";var va=C.createContext(null);va.displayName="DataRouterState";var Sp=C.createContext(!1);function ym(){return C.useContext(Sp)}var Bp=C.createContext({isTransitioning:!1});Bp.displayName="ViewTransition";var Sm=C.createContext(new Map);Sm.displayName="Fetchers";var Bm=C.createContext(null);Bm.displayName="Await";var gt=C.createContext(null);gt.displayName="Navigation";var Kn=C.createContext(null);Kn.displayName="Location";var Bt=C.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var zo=C.createContext(null);zo.displayName="RouteError";var kp="REACT_ROUTER_ERROR",km="REDIRECT",Fm="ROUTE_ERROR_RESPONSE";function Tm(o){if(o.startsWith(`${kp}:${km}:{`))try{let l=JSON.parse(o.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function Nm(o){if(o.startsWith(`${kp}:${Fm}:{`))try{let l=JSON.parse(o.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new Am(l.status,l.statusText,l.data)}catch{}}function bm(o,{relative:l}={}){ve(Yn(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:m}=C.useContext(gt),{hash:u,pathname:h,search:d}=Jn(o,{relative:l}),x=h;return c!=="/"&&(x=h==="/"?c:St([c,h])),m.createHref({pathname:x,search:d,hash:u})}function Yn(){return C.useContext(Kn)!=null}function kt(){return ve(Yn(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Kn).location}var Fp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Tp(o){C.useContext(gt).static||C.useLayoutEffect(o)}function Xe(){let{isDataRoute:o}=C.useContext(Bt);return o?Gm():Im()}function Im(){ve(Yn(),"useNavigate() may be used only in the context of a <Router> component.");let o=C.useContext(nn),{basename:l,navigator:c}=C.useContext(gt),{matches:m}=C.useContext(Bt),{pathname:u}=kt(),h=JSON.stringify(wp(m)),d=C.useRef(!1);return Tp(()=>{d.current=!0}),C.useCallback((E,v={})=>{if(xt(d.current,Fp),!d.current)return;if(typeof E=="number"){c.go(E);return}let A=Vo(E,JSON.parse(h),u,v.relative==="path");o==null&&l!=="/"&&(A.pathname=A.pathname==="/"?l:St([l,A.pathname])),(v.replace?c.replace:c.push)(A,v.state,v)},[l,c,h,u,o])}var jm=C.createContext(null);function Rm(o){let l=C.useContext(Bt).outlet;return C.useMemo(()=>l&&C.createElement(jm.Provider,{value:o},l),[l,o])}function sn(){let{matches:o}=C.useContext(Bt),l=o[o.length-1];return(l==null?void 0:l.params)??{}}function Jn(o,{relative:l}={}){let{matches:c}=C.useContext(Bt),{pathname:m}=kt(),u=JSON.stringify(wp(c));return C.useMemo(()=>Vo(o,JSON.parse(u),m,l==="path"),[o,u,m,l])}function _m(o,l){return Np(o,l)}function Np(o,l,c){var b;ve(Yn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=C.useContext(gt),{matches:u}=C.useContext(Bt),h=u[u.length-1],d=h?h.params:{},x=h?h.pathname:"/",E=h?h.pathnameBase:"/",v=h&&h.route;{let M=v&&v.path||"";Ip(x,!v||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let A=kt(),D;if(l){let M=typeof l=="string"?Nr(l):l;ve(E==="/"||((b=M.pathname)==null?void 0:b.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${M.pathname}" was given in the \`location\` prop.`),D=M}else D=A;let y=D.pathname||"/",V=y;if(E!=="/"){let M=E.replace(/^\//,"").split("/");V="/"+y.replace(/^\//,"").split("/").slice(M.length).join("/")}let F=c&&c.state.matches.length?c.state.matches.map(M=>Object.assign(M,{route:c.manifest[M.route.id]||M.route})):xp(o,{pathname:V});xt(v||F!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),xt(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=zm(F&&F.map(M=>Object.assign({},M,{params:Object.assign({},d,M.params),pathname:St([E,m.encodeLocation?m.encodeLocation(M.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?E:St([E,m.encodeLocation?m.encodeLocation(M.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),u,c);return l&&N?C.createElement(Kn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...D},navigationType:"POP"}},N):N}function Pm(){let o=Wm(),l=Cm(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,m="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:m},h={padding:"2px 4px",backgroundColor:m},d=null;return console.error("Error handled by React Router default ErrorBoundary:",o),d=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:h},"ErrorBoundary")," or"," ",C.createElement("code",{style:h},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},l),c?C.createElement("pre",{style:u},c):null,d)}var Lm=C.createElement(Pm,null),bp=class extends C.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,l){return l.location!==o.location||l.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:l.error,location:l.location,revalidation:o.revalidation||l.revalidation}}componentDidCatch(o,l){this.props.onError?this.props.onError(o,l):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const c=Nm(o.digest);c&&(o=c)}let l=o!==void 0?C.createElement(Bt.Provider,{value:this.props.routeContext},C.createElement(zo.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?C.createElement(Mm,{error:o},l):l}};bp.contextType=Sp;var Fo=new WeakMap;function Mm({children:o,error:l}){let{basename:c}=C.useContext(gt);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let m=Tm(l.digest);if(m){let u=Fo.get(l);if(u)throw u;let h=Dp(m.location,c),d=h.absoluteURL||h.to;if(Dm(d))throw new Error("Invalid redirect location");if(vp&&!Fo.get(l))if(h.isExternal||m.reloadDocument)window.location.href=d;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:m.replace}));throw Fo.set(l,x),x}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d}`})}}return o}function Vm({routeContext:o,match:l,children:c}){let m=C.useContext(nn);return m&&m.static&&m.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=l.route.id),C.createElement(Bt.Provider,{value:o},c)}function zm(o,l=[],c){let m=c==null?void 0:c.state;if(o==null){if(!m)return null;if(m.errors)o=m.matches;else if(l.length===0&&!m.initialized&&m.matches.length>0)o=m.matches;else return null}let u=o,h=m==null?void 0:m.errors;if(h!=null){let A=u.findIndex(D=>D.route.id&&(h==null?void 0:h[D.route.id])!==void 0);ve(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,A+1))}let d=!1,x=-1;if(c&&m){d=m.renderFallback;for(let A=0;A<u.length;A++){let D=u[A];if((D.route.HydrateFallback||D.route.hydrateFallbackElement)&&(x=A),D.route.id){let{loaderData:y,errors:V}=m,F=D.route.loader&&!y.hasOwnProperty(D.route.id)&&(!V||V[D.route.id]===void 0);if(D.route.lazy||F){c.isStatic&&(d=!0),x>=0?u=u.slice(0,x+1):u=[u[0]];break}}}}let E=c==null?void 0:c.onError,v=m&&E?(A,D)=>{var y,V;E(A,{location:m.location,params:((V=(y=m.matches)==null?void 0:y[0])==null?void 0:V.params)??{},pattern:wm(m.matches),errorInfo:D})}:void 0;return u.reduceRight((A,D,y)=>{let V,F=!1,N=null,b=null;m&&(V=h&&D.route.id?h[D.route.id]:void 0,N=D.route.errorElement||Lm,d&&(x<0&&y===0?(Ip("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,b=null):x===y&&(F=!0,b=D.route.hydrateFallbackElement||null)));let M=l.concat(u.slice(0,y+1)),G=()=>{let U;return V?U=N:F?U=b:D.route.Component?U=C.createElement(D.route.Component,null):D.route.element?U=D.route.element:U=A,C.createElement(Vm,{match:D,routeContext:{outlet:A,matches:M,isDataRoute:m!=null},children:U})};return m&&(D.route.ErrorBoundary||D.route.errorElement||y===0)?C.createElement(bp,{location:m.location,revalidation:m.revalidation,component:N,error:V,children:G(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:v}):G()},null)}function Oo(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Om(o){let l=C.useContext(nn);return ve(l,Oo(o)),l}function Hm(o){let l=C.useContext(va);return ve(l,Oo(o)),l}function Um(o){let l=C.useContext(Bt);return ve(l,Oo(o)),l}function Ho(o){let l=Um(o),c=l.matches[l.matches.length-1];return ve(c.route.id,`${o} can only be used on routes that contain a unique "id"`),c.route.id}function qm(){return Ho("useRouteId")}function Wm(){var m;let o=C.useContext(zo),l=Hm("useRouteError"),c=Ho("useRouteError");return o!==void 0?o:(m=l.errors)==null?void 0:m[c]}function Gm(){let{router:o}=Om("useNavigate"),l=Ho("useNavigate"),c=C.useRef(!1);return Tp(()=>{c.current=!0}),C.useCallback(async(u,h={})=>{xt(c.current,Fp),c.current&&(typeof u=="number"?await o.navigate(u):await o.navigate(u,{fromRouteId:l,...h}))},[o,l])}var np={};function Ip(o,l,c){!l&&!np[o]&&(np[o]=!0,xt(!1,c))}C.memo($m);function $m({routes:o,manifest:l,future:c,state:m,isStatic:u,onError:h}){return Np(o,void 0,{manifest:l,state:m,isStatic:u,onError:h})}function Xm(o){return Rm(o.context)}function Ue(o){ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Qm({basename:o="/",children:l=null,location:c,navigationType:m="POP",navigator:u,static:h=!1,useTransitions:d}){ve(!Yn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=o.replace(/^\/*/,"/"),E=C.useMemo(()=>({basename:x,navigator:u,static:h,useTransitions:d,future:{}}),[x,u,h,d]);typeof c=="string"&&(c=Nr(c));let{pathname:v="/",search:A="",hash:D="",state:y=null,key:V="default",mask:F}=c,N=C.useMemo(()=>{let b=Ut(v,x);return b==null?null:{location:{pathname:b,search:A,hash:D,state:y,key:V,mask:F},navigationType:m}},[x,v,A,D,y,V,m,F]);return xt(N!=null,`<Router basename="${x}"> is not able to match the URL "${v}${A}${D}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:C.createElement(gt.Provider,{value:E},C.createElement(Kn.Provider,{children:l,value:N}))}function Km({children:o,location:l}){return _m(Io(o),l)}function Io(o,l=[]){let c=[];return C.Children.forEach(o,(m,u)=>{if(!C.isValidElement(m))return;let h=[...l,u];if(m.type===C.Fragment){c.push.apply(c,Io(m.props.children,h));return}ve(m.type===Ue,`[${typeof m.type=="string"?m.type:m.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ve(!m.props.index||!m.props.children,"An index route cannot have child routes.");let d={id:m.props.id||h.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,middleware:m.props.middleware,loader:m.props.loader,action:m.props.action,hydrateFallbackElement:m.props.hydrateFallbackElement,HydrateFallback:m.props.HydrateFallback,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.hasErrorBoundary===!0||m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(d.children=Io(m.props.children,h)),c.push(d)}),c}var ha="get",xa="application/x-www-form-urlencoded";function Da(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Ym(o){return Da(o)&&o.tagName.toLowerCase()==="button"}function Jm(o){return Da(o)&&o.tagName.toLowerCase()==="form"}function Zm(o){return Da(o)&&o.tagName.toLowerCase()==="input"}function e0(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function t0(o,l){return o.button===0&&(!l||l==="_self")&&!e0(o)}function jo(o=""){return new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((l,c)=>{let m=o[c];return l.concat(Array.isArray(m)?m.map(u=>[c,u]):[[c,m]])},[]))}function r0(o,l){let c=jo(o);return l&&l.forEach((m,u)=>{c.has(u)||l.getAll(u).forEach(h=>{c.append(u,h)})}),c}var da=null;function n0(){if(da===null)try{new FormData(document.createElement("form"),0),da=!1}catch{da=!0}return da}var s0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function To(o){return o!=null&&!s0.has(o)?(xt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xa}"`),null):o}function a0(o,l){let c,m,u,h,d;if(Jm(o)){let x=o.getAttribute("action");m=x?Ut(x,l):null,c=o.getAttribute("method")||ha,u=To(o.getAttribute("enctype"))||xa,h=new FormData(o)}else if(Ym(o)||Zm(o)&&(o.type==="submit"||o.type==="image")){let x=o.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let E=o.getAttribute("formaction")||x.getAttribute("action");if(m=E?Ut(E,l):null,c=o.getAttribute("formmethod")||x.getAttribute("method")||ha,u=To(o.getAttribute("formenctype"))||To(x.getAttribute("enctype"))||xa,h=new FormData(x,o),!n0()){let{name:v,type:A,value:D}=o;if(A==="image"){let y=v?`${v}.`:"";h.append(`${y}x`,"0"),h.append(`${y}y`,"0")}else v&&h.append(v,D)}}else{if(Da(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=ha,m=null,u=xa,d=o}return h&&u==="text/plain"&&(d=h,h=void 0),{action:m,method:c.toLowerCase(),encType:u,formData:h,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uo(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function jp(o,l,c,m){let u=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return c?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${m}`:u.pathname=`${u.pathname}.${m}`:u.pathname==="/"?u.pathname=`_root.${m}`:l&&Ut(u.pathname,l)==="/"?u.pathname=`${ga(l)}/_root.${m}`:u.pathname=`${ga(u.pathname)}.${m}`,u}async function i0(o,l){if(o.id in l)return l[o.id];try{let c=await import(o.module);return l[o.id]=c,c}catch(c){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function o0(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function c0(o,l,c){let m=await Promise.all(o.map(async u=>{let h=l.routes[u.route.id];if(h){let d=await i0(h,c);return d.links?d.links():[]}return[]}));return d0(m.flat(1).filter(o0).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function sp(o,l,c,m,u,h){let d=(E,v)=>c[v]?E.route.id!==c[v].route.id:!0,x=(E,v)=>{var A;return c[v].pathname!==E.pathname||((A=c[v].route.path)==null?void 0:A.endsWith("*"))&&c[v].params["*"]!==E.params["*"]};return h==="assets"?l.filter((E,v)=>d(E,v)||x(E,v)):h==="data"?l.filter((E,v)=>{var D;let A=m.routes[E.route.id];if(!A||!A.hasLoader)return!1;if(d(E,v)||x(E,v))return!0;if(E.route.shouldRevalidate){let y=E.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((D=c[0])==null?void 0:D.params)||{},nextUrl:new URL(o,window.origin),nextParams:E.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function l0(o,l,{includeHydrateFallback:c}={}){return p0(o.map(m=>{let u=l.routes[m.route.id];if(!u)return[];let h=[u.module];return u.clientActionModule&&(h=h.concat(u.clientActionModule)),u.clientLoaderModule&&(h=h.concat(u.clientLoaderModule)),c&&u.hydrateFallbackModule&&(h=h.concat(u.hydrateFallbackModule)),u.imports&&(h=h.concat(u.imports)),h}).flat(1))}function p0(o){return[...new Set(o)]}function u0(o){let l={},c=Object.keys(o).sort();for(let m of c)l[m]=o[m];return l}function d0(o,l){let c=new Set;return new Set(l),o.reduce((m,u)=>{let h=JSON.stringify(u0(u));return c.has(h)||(c.add(h),m.push({key:h,link:u})),m},[])}function qo(){let o=C.useContext(nn);return Uo(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function m0(){let o=C.useContext(va);return Uo(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Wo=C.createContext(void 0);Wo.displayName="FrameworkContext";function ya(){let o=C.useContext(Wo);return Uo(o,"You must render this element inside a <HydratedRouter> element"),o}function h0(o,l){let c=C.useContext(Wo),[m,u]=C.useState(!1),[h,d]=C.useState(!1),{onFocus:x,onBlur:E,onMouseEnter:v,onMouseLeave:A,onTouchStart:D}=l,y=C.useRef(null);C.useEffect(()=>{if(o==="render"&&d(!0),o==="viewport"){let N=M=>{M.forEach(G=>{d(G.isIntersecting)})},b=new IntersectionObserver(N,{threshold:.5});return y.current&&b.observe(y.current),()=>{b.disconnect()}}},[o]),C.useEffect(()=>{if(m){let N=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(N)}}},[m]);let V=()=>{u(!0)},F=()=>{u(!1),d(!1)};return c?o!=="intent"?[h,y,{}]:[h,y,{onFocus:Gn(x,V),onBlur:Gn(E,F),onMouseEnter:Gn(v,V),onMouseLeave:Gn(A,F),onTouchStart:Gn(D,V)}]:[!1,y,{}]}function Gn(o,l){return c=>{o&&o(c),c.defaultPrevented||l(c)}}function x0({page:o,...l}){let c=ym(),{nonce:m}=ya(),{router:u}=qo(),h=C.useMemo(()=>xp(u.routes,o,u.basename),[u.routes,o,u.basename]);return h?(l.nonce==null&&m&&(l={...l,nonce:m}),c?C.createElement(g0,{page:o,matches:h,...l}):C.createElement(A0,{page:o,matches:h,...l})):null}function f0(o){let{manifest:l,routeModules:c}=ya(),[m,u]=C.useState([]);return C.useEffect(()=>{let h=!1;return c0(o,l,c).then(d=>{h||u(d)}),()=>{h=!0}},[o,l,c]),m}function g0({page:o,matches:l,...c}){let m=kt(),{future:u}=ya(),{basename:h}=qo(),d=C.useMemo(()=>{if(o===m.pathname+m.search+m.hash)return[];let x=jp(o,h,u.v8_trailingSlashAwareDataRequests,"rsc"),E=!1,v=[];for(let A of l)typeof A.route.shouldRevalidate=="function"?E=!0:v.push(A.route.id);return E&&v.length>0&&x.searchParams.set("_routes",v.join(",")),[x.pathname+x.search]},[h,u.v8_trailingSlashAwareDataRequests,o,m,l]);return C.createElement(C.Fragment,null,d.map(x=>C.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...c})))}function A0({page:o,matches:l,...c}){let m=kt(),{future:u,manifest:h,routeModules:d}=ya(),{basename:x}=qo(),{loaderData:E,matches:v}=m0(),A=C.useMemo(()=>sp(o,l,v,h,m,"data"),[o,l,v,h,m]),D=C.useMemo(()=>sp(o,l,v,h,m,"assets"),[o,l,v,h,m]),y=C.useMemo(()=>{if(o===m.pathname+m.search+m.hash)return[];let N=new Set,b=!1;if(l.forEach(G=>{var ee;let U=h.routes[G.route.id];!U||!U.hasLoader||(!A.some(I=>I.route.id===G.route.id)&&G.route.id in E&&((ee=d[G.route.id])!=null&&ee.shouldRevalidate)||U.hasClientLoader?b=!0:N.add(G.route.id))}),N.size===0)return[];let M=jp(o,x,u.v8_trailingSlashAwareDataRequests,"data");return b&&N.size>0&&M.searchParams.set("_routes",l.filter(G=>N.has(G.route.id)).map(G=>G.route.id).join(",")),[M.pathname+M.search]},[x,u.v8_trailingSlashAwareDataRequests,E,m,h,A,l,o,d]),V=C.useMemo(()=>l0(D,h),[D,h]),F=f0(D);return C.createElement(C.Fragment,null,y.map(N=>C.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...c})),V.map(N=>C.createElement("link",{key:N,rel:"modulepreload",href:N,...c})),F.map(({key:N,link:b})=>C.createElement("link",{key:N,nonce:c.nonce,...b,crossOrigin:b.crossOrigin??c.crossOrigin})))}function C0(...o){return l=>{o.forEach(c=>{typeof c=="function"?c(l):c!=null&&(c.current=l)})}}var w0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w0&&(window.__reactRouterVersion="7.18.1")}catch{}function E0({basename:o,children:l,useTransitions:c,window:m}){let u=C.useRef();u.current==null&&(u.current=Kd({window:m,v5Compat:!0}));let h=u.current,[d,x]=C.useState({action:h.action,location:h.location}),E=C.useCallback(v=>{c===!1?x(v):C.startTransition(()=>x(v))},[c]);return C.useLayoutEffect(()=>h.listen(E),[h,E]),C.createElement(Qm,{basename:o,children:l,location:d.location,navigationType:d.action,navigator:h,useTransitions:c})}var $e=C.forwardRef(function({onClick:l,discover:c="render",prefetch:m="none",relative:u,reloadDocument:h,replace:d,mask:x,state:E,target:v,to:A,preventScrollReset:D,viewTransition:y,defaultShouldRevalidate:V,...F},N){let{basename:b,navigator:M,useTransitions:G}=C.useContext(gt),U=typeof A=="string"&&Mo.test(A),ee=Dp(A,b);A=ee.to;let I=bm(A,{relative:u}),Q=kt(),L=null;if(x){let Ne=Vo(x,[],Q.mask?Q.mask.pathname:"/",!0);b!=="/"&&(Ne.pathname=Ne.pathname==="/"?b:St([b,Ne.pathname])),L=M.createHref(Ne)}let[Y,Ce,Te]=h0(m,F),qe=S0(A,{replace:d,mask:x,state:E,target:v,preventScrollReset:D,relative:u,viewTransition:y,defaultShouldRevalidate:V,useTransitions:G});function Se(Ne){l&&l(Ne),Ne.defaultPrevented||qe(Ne)}let je=!(ee.isExternal||h),Qe=C.createElement("a",{...F,...Te,href:(je?L:void 0)||ee.absoluteURL||I,onClick:je?Se:l,ref:C0(N,Ce),target:v,"data-discover":!U&&c==="render"?"true":void 0});return Y&&!U?C.createElement(C.Fragment,null,Qe,C.createElement(x0,{page:I})):Qe});$e.displayName="Link";var v0=C.forwardRef(function({"aria-current":l="page",caseSensitive:c=!1,className:m="",end:u=!1,style:h,to:d,viewTransition:x,children:E,...v},A){let D=Jn(d,{relative:v.relative}),y=kt(),V=C.useContext(va),{navigator:F,basename:N}=C.useContext(gt),b=V!=null&&b0(D)&&x===!0,M=F.encodeLocation?F.encodeLocation(D).pathname:D.pathname,G=y.pathname,U=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;c||(G=G.toLowerCase(),U=U?U.toLowerCase():null,M=M.toLowerCase()),U&&N&&(U=Ut(U,N)||U);const ee=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let I=G===M||!u&&G.startsWith(M)&&G.charAt(ee)==="/",Q=U!=null&&(U===M||!u&&U.startsWith(M)&&U.charAt(M.length)==="/"),L={isActive:I,isPending:Q,isTransitioning:b},Y=I?l:void 0,Ce;typeof m=="function"?Ce=m(L):Ce=[m,I?"active":null,Q?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let Te=typeof h=="function"?h(L):h;return C.createElement($e,{...v,"aria-current":Y,className:Ce,ref:A,style:Te,to:d,viewTransition:x},typeof E=="function"?E(L):E)});v0.displayName="NavLink";var D0=C.forwardRef(({discover:o="render",fetcherKey:l,navigate:c,reloadDocument:m,replace:u,state:h,method:d=ha,action:x,onSubmit:E,relative:v,preventScrollReset:A,viewTransition:D,defaultShouldRevalidate:y,...V},F)=>{let{useTransitions:N}=C.useContext(gt),b=T0(),M=N0(x,{relative:v}),G=d.toLowerCase()==="get"?"get":"post",U=typeof x=="string"&&Mo.test(x),ee=I=>{if(E&&E(I),I.defaultPrevented)return;I.preventDefault();let Q=I.nativeEvent.submitter,L=(Q==null?void 0:Q.getAttribute("formmethod"))||d,Y=()=>b(Q||I.currentTarget,{fetcherKey:l,method:L,navigate:c,replace:u,state:h,relative:v,preventScrollReset:A,viewTransition:D,defaultShouldRevalidate:y});N&&c!==!1?C.startTransition(()=>Y()):Y()};return C.createElement("form",{ref:F,method:G,action:M,onSubmit:m?E:ee,...V,"data-discover":!U&&o==="render"?"true":void 0})});D0.displayName="Form";function y0(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rp(o){let l=C.useContext(nn);return ve(l,y0(o)),l}function S0(o,{target:l,replace:c,mask:m,state:u,preventScrollReset:h,relative:d,viewTransition:x,defaultShouldRevalidate:E,useTransitions:v}={}){let A=Xe(),D=kt(),y=Jn(o,{relative:d});return C.useCallback(V=>{if(t0(V,l)){V.preventDefault();let F=c!==void 0?c:Xn(D)===Xn(y),N=()=>A(o,{replace:F,mask:m,state:u,preventScrollReset:h,relative:d,viewTransition:x,defaultShouldRevalidate:E});v?C.startTransition(()=>N()):N()}},[D,A,y,c,m,u,l,o,h,d,x,E,v])}function B0(o){xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let l=C.useRef(jo(o)),c=C.useRef(!1),m=kt(),u=C.useMemo(()=>r0(m.search,c.current?null:l.current),[m.search]),h=Xe(),d=C.useCallback((x,E)=>{const v=jo(typeof x=="function"?x(new URLSearchParams(u)):x);c.current=!0,h("?"+v,E)},[h,u]);return[u,d]}var k0=0,F0=()=>`__${String(++k0)}__`;function T0(){let{router:o}=Rp("useSubmit"),{basename:l}=C.useContext(gt),c=qm(),m=o.fetch,u=o.navigate;return C.useCallback(async(h,d={})=>{let{action:x,method:E,encType:v,formData:A,body:D}=a0(h,l);if(d.navigate===!1){let y=d.fetcherKey||F0();await m(y,c,d.action||x,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:A,body:D,formMethod:d.method||E,formEncType:d.encType||v,flushSync:d.flushSync})}else await u(d.action||x,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:A,body:D,formMethod:d.method||E,formEncType:d.encType||v,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[m,u,l,c])}function N0(o,{relative:l}={}){let{basename:c}=C.useContext(gt),m=C.useContext(Bt);ve(m,"useFormAction must be used inside a RouteContext");let[u]=m.matches.slice(-1),h={...Jn(o||".",{relative:l})},d=kt();if(o==null){h.search=d.search;let x=new URLSearchParams(h.search),E=x.getAll("index");if(E.some(A=>A==="")){x.delete("index"),E.filter(D=>D).forEach(D=>x.append("index",D));let A=x.toString();h.search=A?`?${A}`:""}}return(!o||o===".")&&u.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(h.pathname=h.pathname==="/"?c:St([c,h.pathname])),Xn(h)}function b0(o,{relative:l}={}){let c=C.useContext(Bp);ve(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:m}=Rp("useViewTransitionState"),u=Jn(o,{relative:l});if(!c.isTransitioning)return!1;let h=Ut(c.currentLocation.pathname,m)||c.currentLocation.pathname,d=Ut(c.nextLocation.pathname,m)||c.nextLocation.pathname;return fa(u.pathname,d)!=null||fa(u.pathname,h)!=null}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j0=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,c,m)=>m?m.toUpperCase():c.toLowerCase()),ap=o=>{const l=j0(o);return l.charAt(0).toUpperCase()+l.slice(1)},_p=(...o)=>o.filter((l,c,m)=>!!l&&l.trim()!==""&&m.indexOf(l)===c).join(" ").trim(),R0=o=>{for(const l in o)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=C.forwardRef(({color:o="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:m,className:u="",children:h,iconNode:d,...x},E)=>C.createElement("svg",{ref:E,..._0,width:l,height:l,stroke:o,strokeWidth:m?Number(c)*24/Number(l):c,className:_p("lucide",u),...!h&&!R0(x)&&{"aria-hidden":"true"},...x},[...d.map(([v,A])=>C.createElement(v,A)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(o,l)=>{const c=C.forwardRef(({className:m,...u},h)=>C.createElement(P0,{ref:h,iconNode:l,className:_p(`lucide-${I0(ap(o))}`,`lucide-${o}`,m),...u}));return c.displayName=ap(o),c};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ro=ne("activity",L0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],Aa=ne("arrow-left-right",M0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Rt=ne("arrow-left",V0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],O0=ne("award",z0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ca=ne("book-open",H0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Go=ne("bookmark",U0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],W0=ne("building-2",q0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ft=ne("calendar",G0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Qn=ne("check",$0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Pp=ne("chevron-down",X0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],K0=ne("chevron-left",Q0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ct=ne("chevron-right",Y0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Sa=ne("clock",J0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],$o=ne("cpu",Z0);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],wa=ne("external-link",eh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ft=ne("eye",th);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],rn=ne("file-text",rh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],sh=ne("funnel",nh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Br=ne("heart",ah);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],oh=ne("house",ih);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Lp=ne("layers",ch);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],ip=ne("layout-grid",lh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],uh=ne("list",ph);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mh=ne("mail",dh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],xh=ne("map-pin",hh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],gh=ne("menu",fh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Ch=ne("message-square",Ah);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]],Zn=ne("monitor-smartphone",wh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],yr=ne("newspaper",Eh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Dh=ne("phone",vh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]],Sh=ne("pill",yh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Tr=ne("search",Bh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Fh=ne("send",kh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Ba=ne("share-2",Th);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],bh=ne("shield-check",Nh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],es=ne("stethoscope",Ih);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Mp=ne("tag",jh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Vp=ne("trending-up",Rh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ea=ne("user",_h);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],pr=ne("users",Ph);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_o=ne("x",Lh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Xo=ne("zap",Mh),op=[{name:"首页",path:"/"},{name:"技术库",path:"/technology"},{name:"病例中心",path:"/cases"},{name:"厂商设备",path:"/equipment"},{name:"专家文章",path:"/experts"},{name:"公众号",path:"/wechat"}];function Vh(){const[o,l]=C.useState(!1),[c,m]=C.useState(!1),[u,h]=C.useState(""),d=Xe(),x=kt();C.useEffect(()=>{const v=()=>{l(window.scrollY>20)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]);const E=v=>{v.preventDefault(),u.trim()&&(d(`/search?q=${encodeURIComponent(u.trim())}`),m(!1))};return n.jsxs("header",{"trae-inspector-start-line":"38","trae-inspector-start-column":"4","trae-inspector-end-line":"158","trae-inspector-end-column":"13","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${o?"bg-white/95 backdrop-blur-md shadow-md":"bg-gradient-to-b from-slate-900/80 to-transparent"}`,children:[n.jsx("div",{"trae-inspector-start-line":"45","trae-inspector-start-column":"6","trae-inspector-end-line":"121","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{"trae-inspector-start-line":"46","trae-inspector-start-column":"8","trae-inspector-end-line":"120","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between h-16 lg:h-20",children:[n.jsxs($e,{to:"/",className:"flex items-center gap-3",children:[n.jsx("div",{"trae-inspector-start-line":"48","trae-inspector-start-column":"12","trae-inspector-end-line":"52","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`w-10 h-10 rounded-xl flex items-center justify-center ${o?"bg-blue-600":"bg-white/20 backdrop-blur-sm"}`,children:n.jsx(es,{className:"w-6 h-6 text-white"})}),n.jsx("span",{"trae-inspector-start-line":"53","trae-inspector-start-column":"12","trae-inspector-end-line":"57","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BB%8B%E5%85%A5%E5%BD%B1%E5%83%8F%E5%B9%B3%E5%8F%B0%22%2C%22textStartLine%22%3A%2255%22%2C%22textStartColumn%22%3A%2216%22%2C%22textEndLine%22%3A%2257%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:`text-xl font-bold tracking-tight ${o?"text-slate-800":"text-white"}`,children:"介入影像平台"})]}),n.jsx("nav",{"trae-inspector-start-line":"60","trae-inspector-start-column":"10","trae-inspector-end-line":"78","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hidden lg:flex items-center gap-1",children:op.map(v=>n.jsx($e,{to:v.path,className:`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${x.pathname===v.path?o?"text-blue-600 bg-blue-50":"text-white bg-white/20":o?"text-slate-600 hover:text-blue-600 hover:bg-slate-50":"text-white/80 hover:text-white hover:bg-white/10"}`,children:v.name},v.path))}),n.jsxs("div",{"trae-inspector-start-line":"80","trae-inspector-start-column":"10","trae-inspector-end-line":"119","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsx("form",{"trae-inspector-start-line":"81","trae-inspector-start-column":"12","trae-inspector-end-line":"98","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onSubmit:E,className:"hidden md:flex items-center",children:n.jsxs("div",{"trae-inspector-start-line":"82","trae-inspector-start-column":"14","trae-inspector-end-line":"97","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`relative flex items-center ${o?"text-slate-500":"text-white/70"}`,children:[n.jsx(Tr,{className:"w-4 h-4 absolute left-3"}),n.jsx("input",{"trae-inspector-start-line":"86","trae-inspector-start-column":"16","trae-inspector-end-line":"96","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",type:"text",value:u,onChange:v=>h(v.target.value),placeholder:"搜索技术、病例、设备...",className:`pl-10 pr-4 py-2 w-56 lg:w-64 rounded-full text-sm transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${o?"bg-slate-100 border-transparent focus:bg-white focus:border-blue-300 text-slate-700 placeholder-slate-400":"bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20"}`})]})}),n.jsxs("button",{"trae-inspector-start-line":"100","trae-inspector-start-column":"12","trae-inspector-end-line":"107","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${o?"text-slate-600 hover:bg-slate-100":"text-white hover:bg-white/10"}`,children:[n.jsx(Ea,{className:"w-4 h-4"}),n.jsx("span",{"trae-inspector-start-line":"106","trae-inspector-start-column":"14","trae-inspector-end-line":"106","trae-inspector-end-column":"29","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%99%BB%E5%BD%95%22%2C%22textStartLine%22%3A%22106%22%2C%22textStartColumn%22%3A%2220%22%2C%22textEndLine%22%3A%22106%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"登录"})]}),n.jsx("button",{"trae-inspector-start-line":"109","trae-inspector-start-column":"12","trae-inspector-end-line":"118","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`lg:hidden p-2 rounded-lg transition-colors ${o?"text-slate-600 hover:bg-slate-100":"text-white hover:bg-white/10"}`,onClick:()=>m(!c),children:c?n.jsx(_o,{className:"w-6 h-6"}):n.jsx(gh,{className:"w-6 h-6"})})]})]})}),c&&n.jsx("div",{"trae-inspector-start-line":"124","trae-inspector-start-column":"8","trae-inspector-end-line":"156","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:hidden bg-white border-t shadow-lg",children:n.jsxs("div",{"trae-inspector-start-line":"125","trae-inspector-start-column":"10","trae-inspector-end-line":"155","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-4 py-4 space-y-2",children:[n.jsx("form",{"trae-inspector-start-line":"126","trae-inspector-start-column":"12","trae-inspector-end-line":"137","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onSubmit:E,className:"mb-4",children:n.jsxs("div",{"trae-inspector-start-line":"127","trae-inspector-start-column":"14","trae-inspector-end-line":"136","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative flex items-center text-slate-500",children:[n.jsx(Tr,{className:"w-4 h-4 absolute left-3"}),n.jsx("input",{"trae-inspector-start-line":"129","trae-inspector-start-column":"16","trae-inspector-end-line":"135","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",type:"text",value:u,onChange:v=>h(v.target.value),placeholder:"搜索技术、病例、设备...",className:"w-full pl-10 pr-4 py-2.5 rounded-full text-sm bg-slate-100 border border-transparent focus:bg-white focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-700 placeholder-slate-400"})]})}),op.map(v=>n.jsx($e,{to:v.path,onClick:()=>m(!1),className:`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${x.pathname===v.path?"text-blue-600 bg-blue-50":"text-slate-600 hover:bg-slate-50"}`,children:v.name},v.path)),n.jsx("button",{"trae-inspector-start-line":"152","trae-inspector-start-column":"12","trae-inspector-end-line":"154","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/layout/Header.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%99%BB%E5%BD%95%20%2F%20%E6%B3%A8%E5%86%8C%22%2C%22textStartLine%22%3A%22152%22%2C%22textStartColumn%22%3A%22148%22%2C%22textEndLine%22%3A%22154%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full mt-2 px-4 py-3 rounded-lg text-base font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors",children:"登录 / 注册"})]})})]})}function zh(){return n.jsx("footer",{"trae-inspector-start-line":"6","trae-inspector-start-column":"4","trae-inspector-end-line":"133","trae-inspector-end-column":"13","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-slate-900 text-slate-300",children:n.jsxs("div",{"trae-inspector-start-line":"7","trae-inspector-start-column":"6","trae-inspector-end-line":"132","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16",children:[n.jsxs("div",{"trae-inspector-start-line":"8","trae-inspector-start-column":"8","trae-inspector-end-line":"122","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12",children:[n.jsxs("div",{"trae-inspector-start-line":"9","trae-inspector-start-column":"10","trae-inspector-end-line":"33","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:col-span-1",children:[n.jsxs($e,{to:"/",className:"flex items-center gap-3 mb-4",children:[n.jsx("div",{"trae-inspector-start-line":"11","trae-inspector-start-column":"14","trae-inspector-end-line":"13","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center",children:n.jsx(es,{className:"w-6 h-6 text-white"})}),n.jsx("span",{"trae-inspector-start-line":"14","trae-inspector-start-column":"14","trae-inspector-end-line":"14","trae-inspector-end-column":"74","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BB%8B%E5%85%A5%E5%BD%B1%E5%83%8F%E5%B9%B3%E5%8F%B0%22%2C%22textStartLine%22%3A%2214%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%2214%22%2C%22textEndColumn%22%3A%2267%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-white",children:"介入影像平台"})]}),n.jsx("p",{"trae-inspector-start-line":"16","trae-inspector-start-column":"12","trae-inspector-end-line":"18","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%93%E6%B3%A8%E4%BB%8B%E5%85%A5%E5%8C%BB%E5%AD%A6%E5%BD%B1%E5%83%8F%E6%8A%80%E6%9C%AF%E7%9A%84%E4%B8%93%E4%B8%9A%E7%9F%A5%E8%AF%86%E5%B9%B3%E5%8F%B0%EF%BC%8C%E6%B1%87%E8%81%9A%E6%8A%80%E6%9C%AF%E8%B5%84%E6%96%99%E3%80%81%E4%B8%B4%E5%BA%8A%E7%97%85%E4%BE%8B%E3%80%81%E4%B8%93%E5%AE%B6%E8%A7%82%E7%82%B9%EF%BC%8C%E5%8A%A9%E5%8A%9B%E4%BB%8B%E5%85%A5%E5%8C%BB%E5%AD%A6%E5%8F%91%E5%B1%95%E3%80%82%22%2C%22textStartLine%22%3A%2216%22%2C%22textStartColumn%22%3A%2271%22%2C%22textEndLine%22%3A%2218%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-400 leading-relaxed mb-6",children:"专注介入医学影像技术的专业知识平台，汇聚技术资料、临床病例、专家观点，助力介入医学发展。"}),n.jsxs("div",{"trae-inspector-start-line":"19","trae-inspector-start-column":"12","trae-inspector-end-line":"32","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-3 text-sm",children:[n.jsxs("div",{"trae-inspector-start-line":"20","trae-inspector-start-column":"14","trae-inspector-end-line":"23","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsx(mh,{className:"w-4 h-4 text-blue-400"}),n.jsx("span",{"trae-inspector-start-line":"22","trae-inspector-start-column":"16","trae-inspector-end-line":"22","trae-inspector-end-column":"61","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22contact%40intervention-imaging.com%22%2C%22textStartLine%22%3A%2222%22%2C%22textStartColumn%22%3A%2222%22%2C%22textEndLine%22%3A%2222%22%2C%22textEndColumn%22%3A%2254%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"contact@intervention-imaging.com"})]}),n.jsxs("div",{"trae-inspector-start-line":"24","trae-inspector-start-column":"14","trae-inspector-end-line":"27","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsx(Dh,{className:"w-4 h-4 text-blue-400"}),n.jsx("span",{"trae-inspector-start-line":"26","trae-inspector-start-column":"16","trae-inspector-end-line":"26","trae-inspector-end-column":"41","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22400-888-9999%22%2C%22textStartLine%22%3A%2226%22%2C%22textStartColumn%22%3A%2222%22%2C%22textEndLine%22%3A%2226%22%2C%22textEndColumn%22%3A%2234%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"400-888-9999"})]}),n.jsxs("div",{"trae-inspector-start-line":"28","trae-inspector-start-column":"14","trae-inspector-end-line":"31","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsx(xh,{className:"w-4 h-4 text-blue-400"}),n.jsx("span",{"trae-inspector-start-line":"30","trae-inspector-start-column":"16","trae-inspector-end-line":"30","trae-inspector-end-column":"41","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA%E4%B8%AD%E5%85%B3%E6%9D%91%E7%A7%91%E6%8A%80%E5%9B%AD%22%2C%22textStartLine%22%3A%2230%22%2C%22textStartColumn%22%3A%2222%22%2C%22textEndLine%22%3A%2230%22%2C%22textEndColumn%22%3A%2234%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"北京市海淀区中关村科技园"})]})]})]}),n.jsxs("div",{"trae-inspector-start-line":"35","trae-inspector-start-column":"10","trae-inspector-end-line":"64","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h3",{"trae-inspector-start-line":"36","trae-inspector-start-column":"12","trae-inspector-end-line":"36","trae-inspector-end-column":"67","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%86%85%E5%AE%B9%E4%B8%AD%E5%BF%83%22%2C%22textStartLine%22%3A%2236%22%2C%22textStartColumn%22%3A%2258%22%2C%22textEndLine%22%3A%2236%22%2C%22textEndColumn%22%3A%2262%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white font-semibold mb-4",children:"内容中心"}),n.jsxs("ul",{"trae-inspector-start-line":"37","trae-inspector-start-column":"12","trae-inspector-end-line":"63","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-3 text-sm",children:[n.jsx("li",{"trae-inspector-start-line":"38","trae-inspector-start-column":"14","trae-inspector-end-line":"42","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx($e,{to:"/technology",className:"hover:text-blue-400 transition-colors",children:"技术库"})}),n.jsx("li",{"trae-inspector-start-line":"43","trae-inspector-start-column":"14","trae-inspector-end-line":"47","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx($e,{to:"/cases",className:"hover:text-blue-400 transition-colors",children:"病例中心"})}),n.jsx("li",{"trae-inspector-start-line":"48","trae-inspector-start-column":"14","trae-inspector-end-line":"52","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx($e,{to:"/equipment",className:"hover:text-blue-400 transition-colors",children:"厂商设备"})}),n.jsx("li",{"trae-inspector-start-line":"53","trae-inspector-start-column":"14","trae-inspector-end-line":"57","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx($e,{to:"/experts",className:"hover:text-blue-400 transition-colors",children:"专家文章"})}),n.jsx("li",{"trae-inspector-start-line":"58","trae-inspector-start-column":"14","trae-inspector-end-line":"62","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx($e,{to:"/wechat",className:"hover:text-blue-400 transition-colors",children:"公众号聚合"})})]})]}),n.jsxs("div",{"trae-inspector-start-line":"66","trae-inspector-start-column":"10","trae-inspector-end-line":"90","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h3",{"trae-inspector-start-line":"67","trae-inspector-start-column":"12","trae-inspector-end-line":"67","trae-inspector-end-column":"67","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8E%82%E5%95%86%E4%B8%93%E5%8C%BA%22%2C%22textStartLine%22%3A%2267%22%2C%22textStartColumn%22%3A%2258%22%2C%22textEndLine%22%3A%2267%22%2C%22textEndColumn%22%3A%2262%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white font-semibold mb-4",children:"厂商专区"}),n.jsxs("ul",{"trae-inspector-start-line":"68","trae-inspector-start-column":"12","trae-inspector-end-line":"89","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-3 text-sm",children:[n.jsx("li",{"trae-inspector-start-line":"69","trae-inspector-start-column":"14","trae-inspector-end-line":"73","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx($e,{to:"/equipment/brand/飞利浦",className:"hover:text-blue-400 transition-colors",children:"飞利浦医疗"})}),n.jsx("li",{"trae-inspector-start-line":"74","trae-inspector-start-column":"14","trae-inspector-end-line":"78","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx($e,{to:"/equipment/brand/西门子",className:"hover:text-blue-400 transition-colors",children:"西门子医疗"})}),n.jsx("li",{"trae-inspector-start-line":"79","trae-inspector-start-column":"14","trae-inspector-end-line":"83","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx($e,{to:"/equipment/brand/联影",className:"hover:text-blue-400 transition-colors",children:"联影医疗"})}),n.jsx("li",{"trae-inspector-start-line":"84","trae-inspector-start-column":"14","trae-inspector-end-line":"88","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx($e,{to:"/equipment/brand/GE医疗",className:"hover:text-blue-400 transition-colors",children:"GE医疗"})})]})]}),n.jsxs("div",{"trae-inspector-start-line":"92","trae-inspector-start-column":"10","trae-inspector-end-line":"121","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h3",{"trae-inspector-start-line":"93","trae-inspector-start-column":"12","trae-inspector-end-line":"93","trae-inspector-end-column":"67","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC%22%2C%22textStartLine%22%3A%2293%22%2C%22textStartColumn%22%3A%2258%22%2C%22textEndLine%22%3A%2293%22%2C%22textEndColumn%22%3A%2262%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white font-semibold mb-4",children:"关于我们"}),n.jsxs("ul",{"trae-inspector-start-line":"94","trae-inspector-start-column":"12","trae-inspector-end-line":"120","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-3 text-sm",children:[n.jsx("li",{"trae-inspector-start-line":"95","trae-inspector-start-column":"14","trae-inspector-end-line":"99","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx("a",{"trae-inspector-start-line":"96","trae-inspector-start-column":"16","trae-inspector-end-line":"98","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%B9%B3%E5%8F%B0%E4%BB%8B%E7%BB%8D%22%2C%22textStartLine%22%3A%2296%22%2C%22textStartColumn%22%3A%2278%22%2C%22textEndLine%22%3A%2298%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",href:"#",className:"hover:text-blue-400 transition-colors",children:"平台介绍"})}),n.jsx("li",{"trae-inspector-start-line":"100","trae-inspector-start-column":"14","trae-inspector-end-line":"104","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx("a",{"trae-inspector-start-line":"101","trae-inspector-start-column":"16","trae-inspector-end-line":"103","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8A%A0%E5%85%A5%E6%88%91%E4%BB%AC%22%2C%22textStartLine%22%3A%22101%22%2C%22textStartColumn%22%3A%2278%22%2C%22textEndLine%22%3A%22103%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",href:"#",className:"hover:text-blue-400 transition-colors",children:"加入我们"})}),n.jsx("li",{"trae-inspector-start-line":"105","trae-inspector-start-column":"14","trae-inspector-end-line":"109","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx("a",{"trae-inspector-start-line":"106","trae-inspector-start-column":"16","trae-inspector-end-line":"108","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%22%2C%22textStartLine%22%3A%22106%22%2C%22textStartColumn%22%3A%2278%22%2C%22textEndLine%22%3A%22108%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",href:"#",className:"hover:text-blue-400 transition-colors",children:"联系方式"})}),n.jsx("li",{"trae-inspector-start-line":"110","trae-inspector-start-column":"14","trae-inspector-end-line":"114","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx("a",{"trae-inspector-start-line":"111","trae-inspector-start-column":"16","trae-inspector-end-line":"113","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96%22%2C%22textStartLine%22%3A%22111%22%2C%22textStartColumn%22%3A%2278%22%2C%22textEndLine%22%3A%22113%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",href:"#",className:"hover:text-blue-400 transition-colors",children:"隐私政策"})}),n.jsx("li",{"trae-inspector-start-line":"115","trae-inspector-start-column":"14","trae-inspector-end-line":"119","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsx("a",{"trae-inspector-start-line":"116","trae-inspector-start-column":"16","trae-inspector-end-line":"118","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE%22%2C%22textStartLine%22%3A%22116%22%2C%22textStartColumn%22%3A%2278%22%2C%22textEndLine%22%3A%22118%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",href:"#",className:"hover:text-blue-400 transition-colors",children:"用户协议"})})]})]})]}),n.jsxs("div",{"trae-inspector-start-line":"124","trae-inspector-start-column":"8","trae-inspector-end-line":"131","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4",children:[n.jsx("p",{"trae-inspector-start-line":"125","trae-inspector-start-column":"10","trae-inspector-end-line":"127","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%C2%A9%202024%20%E4%BB%8B%E5%85%A5%E5%BD%B1%E5%83%8F%E6%8A%80%E6%9C%AF%E5%B9%B3%E5%8F%B0.%20%E4%BF%9D%E7%95%99%E6%89%80%E6%9C%89%E6%9D%83%E5%88%A9.%22%2C%22textStartLine%22%3A%22125%22%2C%22textStartColumn%22%3A%2248%22%2C%22textEndLine%22%3A%22127%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"© 2024 介入影像技术平台. 保留所有权利."}),n.jsx("p",{"trae-inspector-start-line":"128","trae-inspector-start-column":"10","trae-inspector-end-line":"130","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/layout/Footer.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BA%ACICP%E5%A4%8712345678%E5%8F%B7-1%22%2C%22textStartLine%22%3A%22128%22%2C%22textStartColumn%22%3A%2248%22%2C%22textEndLine%22%3A%22130%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"京ICP备12345678号-1"})]})]})})}function Oh(){return n.jsxs("div",{"trae-inspector-start-line":"7","trae-inspector-start-column":"4","trae-inspector-end-line":"13","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen flex flex-col bg-slate-50",children:[n.jsx(Vh,{}),n.jsx("main",{"trae-inspector-start-line":"9","trae-inspector-start-column":"6","trae-inspector-end-line":"11","trae-inspector-end-column":"13","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1",children:n.jsx(Xm,{})}),n.jsx(zh,{})]})}const kr=[{id:"tech-001",title:"DSA数字减影血管造影技术原理与临床应用",category:"基础技术",summary:"深入解析DSA技术的成像原理、减影算法及其在心血管、神经介入等领域的临床应用价值。",content:`## DSA技术概述

数字减影血管造影（Digital Subtraction Angiography, DSA）是一种通过计算机处理数字化的影像信息，消除骨骼和软组织影像，使血管清晰显影的成像技术。

### 技术原理

DSA的基本原理是将注入造影剂前后拍摄的两帧X线图像经数字化输入图像计算机，通过减影、增强和再成像过程来获得清晰的纯血管影像。

### 临床应用

1. **心血管介入**：冠状动脉造影、支架植入术
2. **神经介入**：脑血管造影、动脉瘤栓塞
3. **外周血管**：下肢动脉造影、溶栓治疗
4. **肿瘤介入**：TACE、消融治疗`,author:"李明教授",publishDate:"2024-06-15",views:12580,tags:["DSA","血管造影","介入放射学"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20imaging%20DSA%20digital%20subtraction%20angiography%20screen%20display%20blood%20vessels%20professional%20hospital%20equipment&image_size=landscape_16_9"},{id:"tech-002",title:"三维旋转血管造影(3D-RA)技术进展",category:"高级技术",summary:"三维旋转血管造影技术的最新进展，包括高分辨率成像、快速重建、四维血流分析等前沿技术。",content:`## 三维旋转血管造影技术

三维旋转血管造影（3D Rotational Angiography, 3D-RA）是近年来介入放射学领域的重要技术突破。

### 技术优势

- 提供三维立体血管结构显示
- 可进行任意角度重建观察
- 支持血管径线精确测量
- 辅助介入治疗方案规划

### 临床应用场景

1. 颅内动脉瘤诊断与治疗规划
2. 脑血管畸形评估
3. 颈动脉狭窄测量
4. 主动脉夹层评估`,author:"王芳主任医师",publishDate:"2024-06-10",views:8932,tags:["3D-RA","三维成像","神经介入"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3D%20rotational%20angiography%20medical%20imaging%20three%20dimensional%20blood%20vessel%20reconstruction%20hospital%20technology&image_size=landscape_16_9"},{id:"tech-003",title:"平板探测器DSA系统技术特点解析",category:"设备技术",summary:"详细介绍平板探测器技术在DSA系统中的应用优势，包括图像质量、剂量控制、操作效率等方面。",content:`## 平板探测器技术

平板探测器（Flat Panel Detector, FPD）技术的出现是DSA发展史上的重要里程碑。

### 技术特点

- 更高的空间分辨率
- 更宽的动态范围
- 更快的成像速度
- 更低的辐射剂量

### 临床价值

平板探测器DSA系统显著提升了介入手术的精准度和安全性，已成为现代介入手术室的标准配置。`,author:"张伟工程师",publishDate:"2024-06-05",views:6721,tags:["平板探测器","FPD","影像设备"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flat%20panel%20detector%20DSA%20system%20medical%20equipment%20interventional%20radiology%20room%20modern%20hospital&image_size=landscape_16_9"},{id:"tech-004",title:"路图技术(Roadmap)在介入手术中的应用",category:"操作技术",summary:"路图技术的原理、操作方法及其在复杂血管介入手术中的导航价值和临床技巧。",content:`## 路图技术

路图（Roadmap）技术是DSA系统提供的一种实时导航功能，可将血管造影图像叠加在实时透视图像上。

### 操作方法

1. 先注射少量造影剂获得血管影像
2. 系统将该影像作为"路图"保存
3. 实时透视图像与路图叠加显示
4. 指导导管导丝沿血管路径前进

### 临床价值

- 减少造影剂用量
- 缩短手术时间
- 提高操作精准度
- 降低医生和患者辐射剂量`,author:"陈杰医师",publishDate:"2024-05-28",views:5438,tags:["路图","Roadmap","介入操作"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interventional%20radiology%20roadmap%20technique%20catheter%20guidance%20blood%20vessel%20navigation%20medical%20imaging&image_size=landscape_16_9"},{id:"tech-005",title:"低剂量DSA技术：图像质量与辐射安全的平衡",category:"安全技术",summary:"探讨如何在保证诊断图像质量的前提下，通过技术优化降低患者和术者的辐射暴露剂量。",content:`## 低剂量DSA技术

随着介入手术量的增加，辐射安全问题日益受到重视。低剂量DSA技术成为行业发展趋势。

### 降低辐射的技术手段

- 脉冲透视技术
- 空间滤过优化
- 自动亮度控制
- 迭代重建算法
- 低剂量DSA协议

### 临床实践建议

1. 遵循ALARA原则
2. 合理使用防护设备
3. 优化造影采集方案
4. 定期进行剂量监测`,author:"刘静副主任医师",publishDate:"2024-05-20",views:4219,tags:["低剂量","辐射安全","ALARA"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=low%20dose%20medical%20imaging%20radiation%20safety%20protection%20interventional%20radiology%20quality%20balance&image_size=landscape_16_9"},{id:"tech-006",title:"DSA图像后处理技术与临床应用",category:"影像后处理",summary:"DSA图像后处理的主要技术方法，包括血管三维重建、定量分析、功能评估等。",content:`## DSA图像后处理技术

现代DSA系统提供了丰富的图像后处理功能，可对采集的影像数据进行深入分析。

### 常用后处理技术

- 多平面重建（MPR）
- 最大密度投影（MIP）
- 容积再现（VR）
- 血管拉直重建
- 狭窄程度定量分析

### 临床应用价值

图像后处理技术帮助医生更全面地评估病变情况，制定更精准的治疗方案。`,author:"赵宏教授",publishDate:"2024-05-15",views:3876,tags:["图像后处理","三维重建","定量分析"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20image%20post%20processing%203D%20reconstruction%20blood%20vessels%20analysis%20software%20radiology&image_size=landscape_16_9"},{id:"tech-007",title:"冠状动脉造影技术：投照体位选择与操作技巧",category:"心血管介入",summary:"冠脉造影中常用投照体位的选择原则、操作技巧及不同病变部位的最佳显露体位。",content:`## 冠状动脉造影概述

冠状动脉造影是诊断冠心病的"金标准"，通过将造影导管送入冠状动脉开口，注射造影剂使冠脉显影。

### 常用投照体位

**左冠状动脉造影**
- 左前斜位（LAO）：观察左主干、前降支和回旋支开口
- 右前斜位（RAO）：观察前降支中段和远段
- 头位（Cranial）：观察前降支开口和近段
- 足位（Caudal）：观察回旋支和左主干分叉

**右冠状动脉造影**
- 左前斜位：显示右冠脉全程
- 右前斜位+头位：观察右冠脉远端和后降支

### 操作技巧

1. 导管选择与操作
2. 造影剂注射技巧
3. 图像采集时机
4. 压力监测要点`,author:"李强主任医师",publishDate:"2024-06-18",views:9876,tags:["冠脉造影","投照体位","心血管介入"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coronary%20angiography%20cardiac%20catheterization%20X-ray%20imaging%20heart%20vessels%20cath%20lab&image_size=landscape_16_9"},{id:"tech-008",title:"颅内动脉瘤栓塞技术：弹簧圈选择与操作要点",category:"神经介入",summary:"颅内动脉瘤弹簧圈栓塞治疗的技术要点，包括弹簧圈选择、栓塞策略及并发症防治。",content:`## 颅内动脉瘤栓塞概述

颅内动脉瘤弹簧圈栓塞术是神经介入的核心技术之一，通过微导管将弹簧圈送入动脉瘤腔内，促进血栓形成，闭塞动脉瘤。

### 弹簧圈选择原则

**根据动脉瘤大小选择**
- 大动脉瘤（>15mm）：选择大直径、柔软的弹簧圈成篮
- 中动脉瘤（5-15mm）：标准直径弹簧圈
- 小动脉瘤（<5mm）：选择小直径、柔软弹簧圈

**弹簧圈类型**
- 三维弹簧圈：用于成篮阶段
- 二维弹簧圈：用于填充阶段
- 收尾弹簧圈：用于最后填塞

### 操作要点

1. 微导管塑形与到位
2. 首枚弹簧圈成篮技术
3. 填塞密度控制
4. 术中影像评估`,author:"刘海峰教授",publishDate:"2024-06-16",views:8765,tags:["神经介入","动脉瘤","弹簧圈"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cerebral%20aneurysm%20coiling%20neurointerventional%20radiology%20brain%20blood%20vessels%20treatment&image_size=landscape_16_9"},{id:"tech-009",title:"TACE操作技术：超选择插管与化疗栓塞策略",category:"肿瘤介入",summary:"经动脉化疗栓塞术（TACE）的操作技术要点，包括超选择插管技巧和栓塞策略选择。",content:`## TACE技术概述

经动脉化疗栓塞术（Transarterial Chemoembolization, TACE）是中晚期肝癌的重要治疗手段。

### 操作步骤

**1. 血管入路建立**
- 股动脉穿刺最常用
- 也可选择桡动脉入路

**2. 腹腔干与肝动脉造影**
- 了解肝脏血供解剖
- 评估肿瘤供血情况
- 识别异位供血动脉

**3. 超选择插管**
- 微导管技术
- 节段性/亚段性栓塞
- 保护正常肝组织

### 栓塞材料选择

- 碘化油：化疗药物载体
- 载药微球：缓释化疗药物
- 明胶海绵颗粒：近端栓塞
- PVA颗粒：永久栓塞`,author:"陈晓明教授",publishDate:"2024-06-14",views:7654,tags:["TACE","肿瘤介入","肝癌"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TACE%20liver%20cancer%20transarterial%20chemoembolization%20interventional%20oncology%20treatment&image_size=landscape_16_9"},{id:"tech-010",title:"外周动脉疾病介入治疗：球囊扩张与支架植入技术",category:"外周血管介入",summary:"下肢动脉硬化闭塞症的介入治疗技术，包括球囊扩张、支架植入及药物涂层球囊应用。",content:`## 外周动脉疾病介入治疗概述

外周动脉疾病（Peripheral Arterial Disease, PAD）主要由动脉粥样硬化引起，常累及下肢动脉。

### 常用介入技术

**1. 经皮腔内血管成形术（PTA）**
- 普通球囊扩张
- 切割球囊技术
- 刻痕球囊技术

**2. 支架植入术**
- 自膨式支架：最常用
- 球囊扩张式支架：精准定位
- 药物洗脱支架：降低再狭窄

**3. 特殊技术**
- 斑块旋切术（DA）
- 激光血管成形术
- 药物涂层球囊（DCB）

### 病变部位与策略

- 髂动脉病变：首选支架植入
- 股腘动脉病变：DCB或支架
- 膝下动脉病变：DCB优先`,author:"王海波主任医师",publishDate:"2024-06-12",views:6543,tags:["外周介入","血管成形术","下肢动脉"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=peripheral%20arterial%20disease%20angioplasty%20stenting%20lower%20limb%20vascular%20intervention&image_size=landscape_16_9"},{id:"tech-011",title:"血管内超声(IVUS)技术原理与冠脉介入应用",category:"心血管介入",summary:"血管内超声技术的原理、操作方法及其在冠脉介入中的指导价值和临床应用。",content:`## IVUS技术概述

血管内超声（Intravascular Ultrasound, IVUS）是将微型超声探头送入血管腔内，实时显示血管横截面图像的技术。

### 技术原理

IVUS导管顶端装有微型超声换能器，发射超声波并接收反射信号，经计算机处理形成血管横截面图像。

### 临床应用

**术前评估**
- 病变性质判断（钙化、纤维化、脂质）
- 血管直径和面积测量
- 病变长度和累及范围

**术中指导**
- 支架大小选择
- 支架释放定位
- 支架膨胀评估
- 并发症检测（夹层、血肿）

### 操作要点

1. 导丝到位与IVUS导管推送
2. 自动回撤成像
3. 图像分析与测量
4. 指导介入策略调整`,author:"张健教授",publishDate:"2024-06-08",views:5432,tags:["IVUS","血管内超声","冠脉介入"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=intravascular%20ultrasound%20IVUS%20coronary%20imaging%20catheter%20cardiac%20intervention&image_size=landscape_16_9"},{id:"tech-012",title:"血流导向装置(FD)治疗颅内动脉瘤技术进展",category:"神经介入",summary:"血流导向装置的作用原理、适应症选择、操作技术要点及围手术期管理。",content:`## 血流导向装置概述

血流导向装置（Flow Diverter, FD）是一种密网支架，通过改变动脉瘤内血流动力学，促进动脉瘤内血栓形成和愈合。

### 作用原理

- **血流重构**：将血流从动脉瘤腔引开
- **内皮化**：支架表面逐渐内皮化，实现永久闭塞
- **载瘤动脉重建**：重建载瘤动脉正常管径

### 适应症

**推荐适应症**
- 颈内动脉大型/巨大型动脉瘤
- 宽颈动脉瘤（瘤颈>4mm或体颈比<2）
- 梭形动脉瘤
- 复发动脉瘤

### 操作要点

1. 准确的工作角度选择
2. 微导管超选到位
3. FD释放技术（推送与回收）
4. 术后双联抗血小板治疗`,author:"杨鹏飞教授",publishDate:"2024-06-06",views:7890,tags:["血流导向装置","FD","神经介入"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flow%20diverter%20cerebral%20aneurysm%20treatment%20neurointerventional%20stent%20technology&image_size=landscape_16_9"},{id:"tech-013",title:"CT引导下经皮穿刺活检技术操作规范",category:"综合介入",summary:"CT引导下经皮穿刺活检的适应症、操作流程、并发症防治及病理标本处理。",content:`## CT引导穿刺活检概述

CT引导下经皮穿刺活检是获取病理诊断的重要微创手段，广泛应用于全身各部位病变的诊断。

### 适应症

- 肺部结节/肿块的定性诊断
- 肝脏占位性质鉴别
- 腹膜后淋巴结肿大
- 骨骼病变诊断
- 肾脏及肾上腺病变

### 操作流程

**1. 术前准备**
- 凝血功能检查
- 增强CT评估病变血供
- 患者呼吸训练

**2. 定位与穿刺**
- 体表标记定位
- 局部麻醉
- 分步进针，反复验证
- 取材满意后拔针

### 并发症防治

- 出血：压迫止血、监测生命体征
- 气胸：肺活检常见，少量可观察
- 感染：严格无菌操作`,author:"周立平教授",publishDate:"2024-06-04",views:4567,tags:["穿刺活检","CT引导","综合介入"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CT%20guided%20biopsy%20needle%20puncture%20interventional%20radiology%20diagnosis&image_size=landscape_16_9"},{id:"tech-014",title:"食管支架植入术操作技术与并发症处理",category:"综合介入",summary:"食管良恶性狭窄的支架治疗技术，包括支架选择、操作要点及并发症处理。",content:`## 食管支架植入术概述

食管支架植入术是治疗食管狭窄的重要微创方法，可快速缓解吞咽困难症状。

### 适应症

**恶性狭窄**
- 食管癌致吞咽困难
- 食管气管瘘
- 纵隔肿瘤压迫食管

**良性狭窄**
- 术后吻合口狭窄（难治性）
- 腐蚀性食管炎后狭窄
- 贲门失弛缓症（特殊支架）

### 操作要点

1. 术前胃镜/造影评估狭窄程度
2. 导丝通过狭窄段
3. 必要时球囊预扩张
4. 支架定位与释放
5. 术后造影评估通畅性

### 常见并发症

- 支架移位：选择合适尺寸支架
- 再狭窄：肿瘤内生长或过度增生
- 出血：少见，多为少量渗血
- 食管穿孔：严重并发症，需紧急处理`,author:"吴志刚教授",publishDate:"2024-06-02",views:3876,tags:["食管支架","非血管介入","综合介入"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=esophageal%20stent%20implantation%20interventional%20radiology%20swallowing%20treatment&image_size=landscape_16_9"},{id:"tech-015",title:"急性缺血性卒中机械取栓技术操作规范",category:"神经介入",summary:"急性脑梗死血管内机械取栓的适应症、操作流程、技术要点及围手术期管理。",content:`## 机械取栓概述

机械取栓（Mechanical Thrombectomy, MT）是急性缺血性卒中的重要治疗手段，可显著改善大血管闭塞患者的预后。

### 适应症

**时间窗内患者**
- 前循环大血管闭塞，发病6小时内
- 符合DAWN/DEFUSE 3标准可延长至24小时
- 后循环闭塞可适当延长时间窗

**影像评估**
- 核心梗死体积小
- 存在缺血半暗带
- 良好的侧支循环

### 取栓技术

**1. 支架取栓（首选）**
- Solitaire支架
- 操作：到位→释放→等待→撤出

**2. 抽吸导管取栓**
- 大口径抽吸导管
- 接触抽吸技术

**3. 联合技术**
- 支架+抽吸（Solumbra技术）
- 提高再通率`,author:"李晓阳教授",publishDate:"2024-05-30",views:9234,tags:["取栓","急性卒中","神经介入"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mechanical%20thrombectomy%20acute%20ischemic%20stroke%20neurointerventional%20clot%20removal&image_size=landscape_16_9"},{id:"tech-016",title:"OCT光学相干断层扫描技术与冠脉介入应用",category:"心血管介入",summary:"光学相干断层扫描的技术原理、图像解读及其在冠脉介入中的指导价值。",content:`## OCT技术概述

光学相干断层扫描（Optical Coherence Tomography, OCT）是一种高分辨率血管内成像技术，分辨率可达10-20μm。

### 技术原理

OCT利用近红外光的干涉原理，通过测量光在组织中的反射和散射，生成血管横截面的高分辨率图像。

### 与IVUS比较

**优势**
- 分辨率更高（10μm vs 100μm）
- 能清晰显示血管壁分层
- 更易识别脂质斑块和钙化
- 评估支架贴壁更准确

**劣势**
- 穿透深度较浅
- 需要血液置换（冲洗）
- 无法穿透钙化观察血管外结构

### 临床应用

1. 易损斑块识别
2. 支架术后评估（贴壁、夹层、脱垂）
3. 支架内再狭窄机制判断
4. 生物可吸收支架随访`,author:"王明教授",publishDate:"2024-05-26",views:4567,tags:["OCT","光学相干断层","冠脉介入"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=optical%20coherence%20tomography%20OCT%20coronary%20imaging%20intravascular%20cardiology&image_size=landscape_16_9"},{id:"tech-017",title:"射频消融技术在实体肿瘤治疗中的应用",category:"肿瘤介入",summary:"射频消融治疗实体肿瘤的原理、适应症、操作技术要点及疗效评估方法。",content:`## 射频消融技术概述

射频消融（Radiofrequency Ablation, RFA）是一种热消融技术，通过射频电流使组织内离子振荡产热，导致肿瘤细胞凝固性坏死。

### 适应症

**肝脏肿瘤**
- 原发性肝癌（≤5cm单发或≤3cm3个以内）
- 肝转移瘤

**肺部肿瘤**
- 早期肺癌（不能手术或拒绝手术）
- 肺转移瘤

**其他部位**
- 肾脏肿瘤
- 骨肿瘤（止痛为主）
- 甲状腺结节

### 操作要点

1. 影像引导定位（超声/CT）
2. 麻醉方式选择
3. 布针策略（单针/多针、叠加消融）
4. 实时监测消融范围
5. 术后并发症观察

### 疗效评估

- 增强CT/MRI：术后1个月评估
- 完全消融：无强化，边界清晰
- 残留/复发：病灶边缘结节样强化`,author:"黄俊教授",publishDate:"2024-05-24",views:5678,tags:["射频消融","RFA","肿瘤介入"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radiofrequency%20ablation%20RFA%20tumor%20treatment%20interventional%20oncology%20heat%20therapy&image_size=landscape_16_9"},{id:"tech-018",title:"下腔静脉滤器植入与回收技术规范",category:"外周血管介入",summary:"下腔静脉滤器的适应症选择、植入操作技术、回收时机及并发症防治。",content:`## 下腔静脉滤器概述

下腔静脉滤器（Inferior Vena Cava Filter, IVCF）用于预防下肢深静脉血栓脱落导致肺栓塞。

### 适应症

**绝对适应症**
- 抗凝禁忌的DVT/PE患者
- 充分抗凝下仍发生PE
- 抗凝治疗出现严重并发症

**相对适应症**
- 大面积PE高危患者
- 髂股静脉大量血栓（溶栓前）
- 骨科大手术VTE高危患者

### 操作要点

**植入技术**
1. 入路选择（股静脉/颈静脉）
2. 下腔静脉造影（直径、解剖）
3. 滤器定位（肾静脉下方）
4. 释放后造影确认位置

**回收技术**
1. 评估血栓负荷
2. 抓捕器抓取滤器钩
3. 回收鞘内收回滤器
4. 确认滤器完整回收`,author:"徐伟教授",publishDate:"2024-05-22",views:3987,tags:["下腔静脉滤器","IVCF","肺栓塞"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=inferior%20vena%20cava%20filter%20IVCF%20implantation%20deep%20vein%20thrombosis%20prevention&image_size=landscape_16_9"},{id:"tech-019",title:"造影剂肾病的预防与处理策略",category:"安全技术",summary:"造影剂肾病的危险因素、预防措施及发生后的处理方法，保障介入手术安全。",content:`## 造影剂肾病概述

造影剂肾病（Contrast-Induced Nephropathy, CIN）是含碘造影剂使用后的重要并发症，表现为急性肾功能损害。

### 危险因素

**患者相关**
- 慢性肾功能不全（最重要）
- 糖尿病肾病
- 脱水/血容量不足
- 高龄
- 心衰

**操作相关**
- 造影剂用量大
- 短时间内多次造影
- 使用高渗造影剂

### 预防措施

1. **充分水化**：术前3-12小时至术后6-24小时静脉补液
2. **选择低渗/等渗造影剂**
3. **控制造影剂用量**：尽量<100ml
4. **避免肾毒性药物**：NSAIDs、氨基糖苷类等
5. **血液滤过**：极高危患者可考虑

### 处理原则

- 轻度：继续水化，监测肾功能
- 重度：必要时血液透析支持
- 大多数可在1-2周内恢复`,author:"马主任",publishDate:"2024-05-18",views:4321,tags:["造影剂肾病","安全","并发症"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=contrast%20induced%20nephropathy%20prevention%20kidney%20safety%20medical%20imaging%20safety&image_size=landscape_16_9"},{id:"tech-020",title:"TAVR经导管主动脉瓣置换术操作技术",category:"心血管介入",summary:"经导管主动脉瓣置换术的适应症、操作流程、技术要点及并发症处理。",content:`## TAVR概述

经导管主动脉瓣置换术（Transcatheter Aortic Valve Replacement, TAVR）是治疗主动脉瓣狭窄的革命性技术。

### 适应症

- 重度主动脉瓣狭窄，外科手术高危或禁忌
- 年龄通常≥75岁
- 存在症状（心绞痛、晕厥、心衰）

### 操作流程

**1. 入路建立**
- 股动脉入路（最常用）
- 心尖入路
- 升主动脉入路

**2. 瓣膜释放**
- 导丝跨瓣
- 球囊预扩张（部分病例）
- 瓣膜系统到位
- 快速起搏下调频
- 逐步释放瓣膜
- 造影+超声评估

### 并发症防治

- 传导阻滞：必要时起搏器植入
- 瓣周漏：多为轻度，可观察
- 冠脉阻塞：高危患者需预防
- 血管并发症：入路血管损伤`,author:"赵建华教授",publishDate:"2024-05-16",views:8765,tags:["TAVR","结构性心脏病","主动脉瓣"],coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TAVR%20transcatheter%20aortic%20valve%20replacement%20cardiac%20intervention%20structural%20heart%20disease&image_size=landscape_16_9"}],ka=[{id:"case-001",title:"急性心肌梗死急诊PCI治疗病例",department:"心血管内科",technology:"冠状动脉造影",difficulty:"中级",equipmentBrand:"飞利浦",equipmentModel:"Allura Xper FD20",summary:"65岁男性患者，突发胸痛3小时入院，心电图提示急性前壁心肌梗死，行急诊PCI治疗。",patientInfo:"患者男性，65岁，有高血压病史10年，糖尿病病史5年，吸烟史30年。",diagnosis:"急性ST段抬高型心肌梗死（前壁）",treatment:"急诊冠状动脉造影示前降支近段完全闭塞，行血栓抽吸+支架植入术，术后血流恢复TIMI 3级。",content:`## 病例摘要

本例为65岁男性患者，突发胸痛3小时急诊入院，心电图提示急性前壁ST段抬高型心肌梗死（STEMI），急诊冠状动脉造影示前降支（LAD）近段完全闭塞。急性心肌梗死是心血管急危重症，"时间就是心肌，时间就是生命"，再灌注治疗的每一分钟延迟都意味着更多心肌坏死。本例在飞利浦Allura Xper FD20血管造影系统支持下，急诊行PCI治疗，术中采用血栓抽吸导管清除大量血栓后，于病变处植入药物洗脱支架1枚，术后血流恢复TIMI 3级。术后患者症状缓解，心电图上抬的ST段迅速回落，体现了急性STEMI急诊PCI绿色通道的高效运转和介入技术的救命价值。

## 患者基本信息

患者男性，65岁，退休司机。因"突发胸痛3小时"急诊入院。患者3小时前睡眠中突然感到胸骨后压榨样剧痛，伴大汗、濒死感，疼痛向左肩、左前臂内侧放射，持续不缓解。舌下含服硝酸甘油2片无效。既往高血压病史10年，服用氨氯地平，血压控制一般；2型糖尿病病史5年，服用二甲双胍，血糖控制尚可。吸烟史30年，约20支/日，未戒烟。否认脑卒中、外周动脉疾病史。父亲有冠心病史。

## 主诉与病史

患者主诉突发胸痛3小时。胸痛为胸骨后压榨样，程度剧烈，伴大汗、面色苍白、呼吸困难，疼痛向左肩及左前臂内侧放射，持续不缓解，无恶心、呕吐。既往高血压10年，血压波动在140-160/90-100mmHg；糖尿病5年，空腹血糖7-9mmol/L。吸烟30年，约20支/日。否认药物过敏史。入院查体：血压95/60mmHg，心率108次/分，律齐，心音低钝，各瓣膜区未闻及杂音。双肺呼吸音清，未闻及干湿啰音。四肢皮温正常，双下肢无水肿。

## 辅助检查

急诊心电图（入院10分钟内完成）示：窦性心动过速，V1-V5导联ST段弓背向上抬高0.3-0.5mV，Ⅱ、Ⅲ、aVF导联ST段压低0.1-0.2mV，提示急性广泛前壁心肌梗死。心肌损伤标志物：肌钙蛋白I 2.5ng/mL（明显升高），肌酸激酶同工酶（CK-MB）45U/L。血常规：白细胞11.8×10⁹/L，血红蛋白130g/L。凝血功能、肝肾功能基本正常。血糖12.5mmol/L。床旁超声心动图示左室前壁及前间隔运动明显减弱，左室射血分数（LVEF）42%，心包未见积液。

## 诊断依据

根据患者典型胸痛症状（胸骨后压榨样、持续>30分钟、含服硝酸甘油无效）、心电图典型ST段抬高（V1-V5导联弓背向上抬高）、心肌损伤标志物升高（肌钙蛋白I升高），诊断为急性ST段抬高型心肌梗死（STEMI，广泛前壁），Killip分级Ⅰ级。发病时间3小时，尚在急诊PCI最佳时间窗内（<12小时）。根据心电图定位，罪犯血管为左前降支（LAD）近段。患者合并高血压、糖尿病、吸烟等多种危险因素，属冠心病高危人群。

## 治疗方案

急性STEMI的核心治疗策略是尽早、完全、持续地开通梗死相关动脉（IRA），恢复心肌再灌注。再灌注方式包括急诊PCI和静脉溶栓。对于发病<12小时且有PCI条件的患者，急诊PCI是首选，其再通率更高、出血风险更低。本例患者发病3小时，具备急诊PCI指征，立即启动导管室绿色通道。术前负荷量双联抗血小板（阿司匹林300mg嚼服+替格瑞洛180mg口服），肝素化抗凝。术中采用血栓抽吸策略，以减少无复流及远端栓塞风险。

## 手术过程

患者取仰卧位，局部麻醉，穿刺右侧桡动脉（优先桡动脉入路，减少出血并发症），置入6F动脉鞘。在飞利浦Allura Xper FD20血管造影系统下，将6F EBU 3.5指引导管送至左冠脉开口。急诊造影示：左主干未见明显狭窄；左前降支（LAD）近段完全闭塞，残端呈"截断状"，大量血栓负荷，远端血管借侧支循环 faint 显影；左回旋支（LCX）中段狭窄30%；右冠状动脉（RCA）未见明显狭窄。

经指引导管将血栓抽吸导管（Export AP）送至LAD闭塞段近端，反复抽吸3次，抽出大量红色血栓。抽吸后造影示LAD前向血流部分恢复（TIMI 2级），但近段仍有严重狭窄及残余血栓。沿导丝送入2.5mm×15mm预扩球囊扩张后，于LAD近段植入3.5mm×28mm药物洗脱支架（Firebird 2）1枚，以12atm释放。支架释放后复查造影示LAD血流通畅，TIMI 3级，无残余狭窄、夹层或远端栓塞，支架贴壁良好。手术总用时约35分钟（从穿刺到支架释放）。

## 术后处理

术后患者返回CCU，持续心电监护。术后即刻心电图示V1-V5导联抬高的ST段回落≥50%。给予抗血小板（阿司匹林100mg qd + 替格瑞洛90mg bid，至少12个月）、抗凝（低分子肝素3天）、他汀强化降脂（阿托伐他汀40mg qn）、β受体阻滞剂（美托洛尔）、ACEI（培哚普利）、控制血糖等综合治疗。严密监测心肌酶谱变化、心电图动态演变及有无再发胸痛。术后24小时复查超声心动图示LVEF恢复至48%。术后第3天患者下床活动，无胸闷发作。

## 随访结果

术后1周复查，患者无胸痛、气促，一般情况良好，准予出院。嘱长期双联抗血小板治疗（至少12个月），终身服用阿司匹林、他汀、β受体阻滞剂、ACEI等二级预防药物。术后1个月门诊复查，患者活动耐量明显改善，可步行约1000米无不适。复查血脂：LDL-C 1.3mmol/L。术后3个月复查运动负荷心电图阴性，超声心动图示LVEF 52%，左室前壁运动较前改善。术后6个月复查冠脉CTA示LAD支架通畅，未见再狭窄。患者已戒烟，血压、血糖控制达标。

## 经验总结与讨论

急性STEMI的救治核心是"时间就是心肌"。本例从患者入门到球囊扩张（D-to-B时间）约65分钟，符合国际指南<90分钟的要求，得益于院内胸痛绿色通道的高效运转。术中血栓抽吸对高血栓负荷病变具有重要价值，可减少无复流、改善心肌灌注。药物洗脱支架的应用降低了靶血管再狭窄率。术后规范的二级预防（抗血小板、他汀、β受体阻滞剂、ACEI、戒烟、控制危险因素）是改善远期预后、预防再梗死的关键。飞利浦Allura Xper FD20系统的大尺寸平板探测器及高清成像，有利于快速完成冠脉造影及精准支架定位，是急诊PCI的理想平台。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coronary%20angiography%20cardiac%20catheterization%20heart%20vessels%20medical%20imaging%20stent%20implantation&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PCI%20percutaneous%20coronary%20intervention%20balloon%20angioplasty%20stent%20deployment%20cardiology&image_size=landscape_4_3"],author:"心内科张主任",publishDate:"2024-06-18",views:3456,likes:287},{id:"case-002",title:"颅内动脉瘤栓塞治疗病例分享",department:"神经外科",technology:"脑血管造影",difficulty:"高级",equipmentBrand:"西门子",equipmentModel:"Artis zee III biplane",summary:"52岁女性患者，因头痛伴动眼神经麻痹入院，DSA提示后交通动脉瘤，行弹簧圈栓塞术。",patientInfo:"患者女性，52岁，无明显诱因出现右侧头痛伴右眼睑下垂1周。",diagnosis:"右侧后交通动脉瘤（破裂先兆）",treatment:"全麻下行右侧颈内动脉造影，确认后交通动脉瘤大小约8mm，采用双微管技术置入弹簧圈6枚，动脉瘤完全栓塞，载瘤动脉通畅。",content:`## 病例摘要

本例为52岁女性患者，因头痛伴动眼神经麻痹入院，DSA提示右侧后交通动脉瘤，大小约8mm，属破裂先兆动脉瘤。颅内动脉瘤是蛛网膜下腔出血的首位病因，未破裂动脉瘤一旦破裂，病死率高达40%-50%。本例在西门子Artis zee III biplane双平板血管造影系统下，采用双微管技术行弹簧圈栓塞术，成功置入6枚弹簧圈，实现动脉瘤完全栓塞，同时保持载瘤动脉通畅。术后患者头痛缓解，动眼神经麻痹逐渐恢复，体现了神经介入栓塞技术治疗颅内动脉瘤的安全性和有效性。

## 患者基本信息

患者女性，52岁，中学教师。因"右侧头痛伴右眼睑下垂1周"入院。患者1周前无明显诱因出现右侧额颞部持续性胀痛，伴右眼睑下垂、复视，无恶心、呕吐，无肢体无力、言语障碍。既往体健，否认高血压、糖尿病、心脏病史。无吸烟、饮酒史。否认家族中脑血管畸形或动脉瘤病史。

## 主诉与病史

患者主诉右侧头痛伴右眼睑下垂1周。头痛为持续性胀痛，程度中等，非撕裂样，无明确诱因，服用止痛药效果一般。右眼睑下垂逐渐加重，伴复视（视物重影），以向右上方注视时明显。无发热、颈抵抗，无肢体抽搐，无意识障碍。既往体健，否认头部外伤史。查体：神志清楚，言语流利。右侧瞳孔直径5.0mm，左侧2.5mm，右侧对光反射迟钝（动眼神经麻痹表现）。右侧眼睑下垂，遮盖角膜上1/2。右眼球外展位，向内、向上、向下运动受限。左侧瞳孔及眼球运动正常。四肢肌力、感觉正常，病理征阴性。

## 辅助检查

血常规、凝血功能、肝肾功能、血糖均正常。头颅CT平扫未见颅内出血、梗死或明显占位。头颅CTA示右侧颈内动脉后交通段见一类圆形突起，大小约8mm×7mm，指向后外下方，考虑动脉瘤。为进一步明确诊断及制定治疗方案，行全脑血管DSA检查（西门子Artis zee III biplane系统）。DSA示：右侧后交通动脉瘤，瘤体大小约8mm×7mm×6mm，瘤颈宽约4mm，指向后外下方，后交通动脉从瘤颈处发出。左侧颈内动脉、椎动脉系统未见明显异常。

## 诊断依据

根据患者头痛及典型动眼神经麻痹症状（瞳孔散大、眼睑下垂、眼球运动障碍）、CTA及DSA证实右侧后交通动脉瘤，诊断右侧后交通动脉瘤（破裂先兆）明确。后交通动脉瘤是颅内动脉瘤的常见类型，因其毗邻动眼神经，瘤体扩张或少量渗血可直接压迫动眼神经，导致麻痹。本例动脉瘤直径8mm，属中等大小，但已出现压迫症状，提示瘤体不稳定，存在破裂风险，具备积极治疗的指征。Hunt-Hess分级0级（未破裂），Fisher分级0级。

## 治疗方案

颅内动脉瘤的治疗方式包括开颅夹闭术和血管内介入栓塞术。本例动脉瘤位于后交通段，瘤颈相对较窄（4mm），但瘤体指向后外下方，开颅夹闭手术入路较深、视野受限，且夹闭过程中易损伤动眼神经。血管内弹簧圈栓塞术具有微创、恢复快、无需开颅的优势，是本例的首选方案。因瘤颈较宽，为防止弹簧圈脱出至载瘤动脉，采用双微管技术辅助致密填塞，必要时可结合支架辅助。术前双联抗血小板治疗（阿司匹林100mg qd + 氯吡格雷75mg qd）3天。

## 手术过程

患者取仰卧位，气管插管全麻，穿刺右侧股动脉，置入6F动脉鞘。在西门子Artis zee III biplane双C臂系统三维路图引导下，将6F导引导管送至右侧颈内动脉岩骨段。行右侧颈内动脉三维旋转造影（3D-RA），精确测量动脉瘤大小及瘤颈宽度：瘤体8.2mm×7.0mm×6.5mm，瘤颈4.2mm。在路图引导下，经第一根微导管（Excelsior SL-10）送入首枚弹簧圈（Target 360 Ultra 8mm×30cm）成篮，弹簧圈在瘤腔内稳定成篮。随后经第二根微导管（Excelsior SL-10）送入另一枚弹簧圈（Target 360 Soft 6mm×20cm）进行辅助填塞。两根微导管交替送入不同规格弹簧圈（6mm×20cm、5mm×15cm、4mm×10cm、3mm×8cm、2mm×6cm各1枚），共6枚，实现动脉瘤完全致密栓塞。复查造影及3D-RA示动脉瘤内无造影剂充盈，载瘤动脉（颈内动脉）及后交通动脉血流通畅，无弹簧圈脱出或血管痉挛。手术历时约2.5小时。

## 术后处理

术后患者转入神经重症监护室，严密监测生命体征、神经系统体征及穿刺点情况。给予控制血压（收缩压110-140mmHg）、预防脑血管痉挛（尼莫地平静脉泵入）、补液、预防癫痫等治疗。术后即刻及术后6小时神经系统查体：右侧瞳孔直径4.0mm，对光反射仍迟钝，眼睑下垂同前，考虑动眼神经麻痹恢复需数周至数月。术后第2天患者清醒，无新发神经功能缺损。继续双联抗血小板治疗3个月。术后第5天出院，嘱定期复查DSA。

## 随访结果

术后3个月门诊随访，患者头痛完全消失，右侧眼睑下垂明显改善（仅轻度下垂），复视消失，瞳孔直径恢复至3.0mm，对光反射灵敏。复查DSA（西门子Artis zee III系统）示动脉瘤完全栓塞，无复发，载瘤动脉及后交通动脉通畅。术后1年随访，动眼神经功能完全恢复，日常生活及工作正常。建议长期控制血压，避免剧烈运动及情绪激动，每2-3年复查脑血管造影，监测有无新发动脉瘤。

## 经验总结与讨论

后交通动脉瘤是常见的颅内动脉瘤类型，因毗邻动眼神经，常表现为动眼神经麻痹，是瘤体扩张或渗血的警示信号，应积极治疗以防破裂。本例采用双微管技术行弹簧圈致密栓塞，成功治愈动脉瘤。双微管技术的优势在于可多角度、多层次填塞弹簧圈，提高栓塞密度，减少复发风险。西门子Artis zee III biplane系统的三维旋转造影（3D-RA）功能可精确显示动脉瘤形态、瘤颈与载瘤动脉及分支的关系，为手术规划提供重要依据。对于瘤颈较宽的动脉瘤，若双微管技术难以实现致密栓塞，可考虑支架辅助（如Enterprise、LVIS支架）或血流导向装置（Pipeline）。术后双联抗血小板治疗对预防支架内血栓至关重要，若无支架辅助，通常无需长期抗血小板。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cerebral%20aneurysm%20embolization%20coiling%20neurointerventional%20radiology%20brain%20blood%20vessels%20DSA&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3D%20cerebral%20angiography%20posterior%20communicating%20artery%20aneurysm%20neurosurgery%20imaging&image_size=landscape_4_3"],author:"神外李教授",publishDate:"2024-06-12",views:5621,likes:432},{id:"case-003",title:"下肢动脉硬化闭塞症介入治疗",department:"血管外科",technology:"外周血管造影",difficulty:"中级",equipmentBrand:"联影",equipmentModel:"uAngio 960",summary:"72岁男性患者，间歇性跛行半年，加重1个月，CTA提示股浅动脉长段闭塞。",patientInfo:"患者男性，72岁，高血压病史20年，高脂血症病史10年，有长期吸烟史。",diagnosis:"下肢动脉硬化闭塞症（Fontaine IIb期）",treatment:"局麻下行下肢动脉造影，确认股浅动脉中段长约12cm闭塞，行斑块旋切+球囊扩张+支架植入术，术后血流恢复通畅，踝肱指数由0.4提升至0.9。",content:`## 病例摘要

本例为72岁男性患者，间歇性跛行半年，加重1个月，CTA提示股浅动脉长段闭塞，临床诊断为下肢动脉硬化闭塞症（Fontaine IIb期）。下肢动脉硬化闭塞症是外周动脉疾病的常见类型，严重影响患者行走能力及生活质量。本例在联影uAngio 960血管造影系统下，采用"斑块旋切+球囊扩张+支架植入"的复合策略，成功开通长约12cm的股浅动脉闭塞段。术后血流恢复通畅，踝肱指数（ABI）由0.4提升至0.9，患者间歇性跛行症状明显缓解，体现了介入技术在复杂外周动脉病变治疗中的优势。

## 患者基本信息

患者男性，72岁，退休工人。主诉行走后右下肢疼痛半年，加重1个月。患者半年前开始出现行走约300米后右小腿疼痛、酸胀，休息2-3分钟后缓解，未予重视。近1个月症状明显加重，步行约100米即出现右小腿剧痛，伴麻木、乏力，需长时间休息方可缓解。既往高血压病史20年，服用氨氯地平，血压控制一般；高脂血症病史10年，未规律服药。吸烟史40年，约20支/日，已戒烟1年。否认糖尿病、冠心病、脑卒中史。

## 主诉与病史

患者主诉行走后右下肢疼痛半年，加重1个月。疼痛位于右小腿后侧，呈酸胀、紧缩样，与行走距离明确相关，休息后缓解（典型间歇性跛行）。无静息痛，无肢端溃疡、坏疽。既往高血压、高脂血症，未规律控制。查体：右下肢皮温较左侧偏低，足背动脉搏动减弱，胫后动脉搏动未触及。右足颜色正常，无溃疡、坏疽。股动脉搏动可触及，腘动脉搏动减弱。Rutherford分级2级。

## 辅助检查

血常规、凝血功能、肝肾功能基本正常。空腹血糖6.5mmol/L，糖化血红蛋白6.2%。血脂：总胆固醇6.8mmol/L，甘油三酯3.2mmol/L，LDL-C 4.5mmol/L，HDL-C 0.9mmol/L。踝肱指数（ABI）：右侧0.4（明显降低），左侧1.05。下肢动脉CTA示：右侧股浅动脉中段长段闭塞，闭塞段长约12cm，近端位于收肌管入口以远约2cm，远端位于腘动脉起始部以近约3cm。近端残端呈"鼠尾状"，远端有 faint 显影。股总动脉、腘动脉及以远血管未见明显狭窄。无动脉瘤征象。

## 诊断依据

根据患者典型的间歇性跛行症状（行走后小腿疼痛、休息后缓解）、ABI显著降低（0.4）、CTA证实股浅动脉长段闭塞，诊断为右下肢动脉硬化闭塞症（Fontaine IIb期，Rutherford 2级）明确。患者高龄、长期吸烟、高血压、高脂血症，均为动脉粥样硬化的危险因素。病变为股浅动脉长段闭塞（TASC C/D型），单纯球囊扩张远期通畅率差，需考虑斑块减容+支架植入的复合策略。

## 治疗方案

下肢动脉硬化闭塞症的治疗包括药物治疗、运动康复、介入治疗及外科手术（旁路移植）。对于TASC C/D型股浅动脉病变，若患者一般情况可耐受，介入治疗是首选的微创方案。本例闭塞段长达12cm，单纯球囊扩张+支架植入可能因斑块负荷重、支架贴壁不良而导致远期再狭窄率高。因此，采用"斑块旋切减容+球囊扩张+药物洗脱支架植入"的复合策略：首先利用定向斑块旋切系统（SilverHawk/TurboHawk）去除部分斑块，减容后再行球囊扩张和支架植入，可获得更大的管腔获得、更好的支架贴壁及远期通畅率。

## 手术过程

患者取仰卧位，局部麻醉，右侧腹股沟区消毒铺巾。穿刺右侧股动脉，置入6F动脉鞘。在联影uAngio 960血管造影系统下，行右下肢动脉造影，确认股浅动脉中段长段闭塞，近端残端呈鼠尾状，远端 faint 显影。先将0.035英寸超滑导丝配合单弯导管尝试通过闭塞段，反复尝试后成功将导丝送至腘动脉远端。经导丝造影确认导丝全程位于真腔。

沿导丝送入4F定向斑块旋切导管（TurboHawk），在闭塞段内分段旋切斑块，共旋切4个象限，取出斑块组织约0.5mL。旋切后造影示管腔部分恢复，但仍有多处狭窄。随后以5mm×120mm高压球囊分段扩张，扩张后造影示管腔明显改善，但仍有弹性回缩及夹层。最后沿导丝植入6mm×150mm药物洗脱支架（Zilver PTX），覆盖整个病变段，以10atm释放。复查造影示支架展开良好，贴壁满意，管腔通畅，无残余狭窄、夹层或远端栓塞，腘动脉及胫腓干血流通畅。拔管后压迫止血，右下肢制动12小时。手术历时约2小时。

## 术后处理

术后患者返回病房，右下肢伸直制动12小时，穿刺点压迫止血。持续心电监护，观察足背动脉搏动、皮温、颜色及穿刺点情况。给予抗血小板（阿司匹林100mg qd + 氯吡格雷75mg qd）、他汀强化降脂（阿托伐他汀40mg qn）、降压、扩血管（贝前列素钠）等治疗。术后即刻及第2天复查ABI：右侧0.9，较术前明显改善。患者右下肢皮温升高，足背动脉搏动有力。术后第3天患者下床活动，诉跛行距离明显改善，室内行走无疼痛。

## 随访结果

术后1个月门诊随访，患者诉跛行距离明显延长，可连续步行约800米无疼痛，日常生活不受限。复查ABI：右侧0.92。术后3个月复查下肢动脉CTA示股浅动脉支架血流通畅，未见明显再狭窄。血脂：LDL-C 1.6mmol/L。术后6个月复查超声示支架通畅，血流速度正常。患者已戒烟，规律服药，血压、血脂控制达标。建议长期抗血小板治疗，严格控制危险因素，每6个月复查下肢动脉超声。

## 经验总结与讨论

股浅动脉长段闭塞是外周介入领域的难点，单纯球囊扩张+支架植入往往效果不佳。斑块旋切减容技术可在支架植入前去除部分斑块，获得更大的管腔，减少支架扩张不全和贴壁不良的风险，改善远期通畅率。药物洗脱支架（如Zilver PTX）在外周动脉的应用已证实可显著降低再狭窄率。本例采用"旋切+球囊+DES"的复合策略，取得了满意的近期疗效。手术成功的关键包括：①导丝成功通过闭塞段并确认位于真腔；②充分的斑块减容和球囊预扩张；③选择合适长度的药物洗脱支架，完全覆盖病变。术后严格的抗血小板治疗及危险因素控制（戒烟、降压、降脂、控糖）是维持远期通畅的基础。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=peripheral%20arterial%20disease%20lower%20limb%20angiography%20femoral%20artery%20stenting%20vascular%20surgery&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lower%20extremity%20angioplasty%20balloon%20dilation%20peripheral%20vascular%20intervention%20DSA%20imaging&image_size=landscape_4_3"],author:"血管外科王主任",publishDate:"2024-06-08",views:2890,likes:198},{id:"case-004",title:"原发性肝癌TACE治疗病例",department:"介入科",technology:"肿瘤介入",difficulty:"中级",equipmentBrand:"飞利浦",equipmentModel:"Allura Clarity",summary:"58岁男性患者，体检发现肝右叶占位，AFP升高，诊断原发性肝癌，行TACE治疗。",patientInfo:"患者男性，58岁，乙肝病史20年，肝硬化病史5年。",diagnosis:"原发性肝癌（BCLC B期）",treatment:"局麻下行肝动脉造影，确认肝右叶富血供肿瘤，大小约6cm，行超选择性化疗栓塞术（TACE），术后1个月复查示肿瘤坏死明显，AFP下降。",content:`## 病例摘要

本例为58岁男性患者，体检发现肝右叶占位伴AFP升高，诊断为原发性肝细胞癌（HCC，BCLC B期）。患者有乙肝病史20年、肝硬化病史5年，属于HCC高危人群。经多学科讨论后，在飞利浦Allura Clarity血管造影系统下行经动脉化疗栓塞术（TACE）。术中肝动脉造影确认肝右叶富血供肿瘤，大小约6cm，采用微导管超选择插管至肿瘤供血动脉，注入表柔比星+碘化油乳剂及明胶海绵颗粒栓塞。术后1个月复查CT示肿瘤坏死明显，AFP显著下降，疗效评估为部分缓解（PR）。该病例展示了TACE作为中晚期肝癌标准治疗方法的重要价值。

## 患者基本信息

患者男性，58岁，个体经营者。因"体检发现肝占位伴AFP升高1周"入院。患者既往慢性乙型病毒性肝炎病史20年，未规律抗病毒治疗；肝硬化病史5年，间断服用恩替卡韦。否认饮酒史。无肝癌家族史。近半年来偶有右上腹隐痛、乏力、食欲减退，体重下降约3kg，未予重视。

## 主诉与病史

患者主诉体检发现肝占位1周。近半年偶有右上腹隐痛、乏力、纳差，无黄疸、腹胀、下肢水肿，无呕血、黑便。既往乙肝病史20年，5年前诊断为乙肝肝硬化（代偿期），肝功能Child-Pugh A级。否认糖尿病、冠心病史。查体：皮肤巩膜轻度黄染，肝掌阳性，蜘蛛痣可见。肝脏肋下2cm可触及，质硬，轻压痛，脾肋下未触及，移动性浊音阴性，双下肢无水肿。

## 辅助检查

血常规示血小板轻度减少（95×10⁹/L）。肝功能：ALT 68U/L，AST 72U/L，总胆红素32μmol/L，白蛋白38g/L，凝血酶原时间延长2秒。乙肝两对半示"大三阳"，HBV-DNA 2.5×10⁴IU/mL。AFP 856ng/mL（明显升高），PIVKA-Ⅱ 1200mAU/mL。CEA、CA19-9正常。上腹部增强CT示肝右叶后段见一富血供肿块，大小约6.2cm×5.5cm，动脉期明显强化，门脉期及延迟期快速洗脱，呈"快进快出"典型表现，周围可见假包膜。门静脉主干及主要分支未见癌栓。无肝外转移征象。肝功能Child-Pugh A级（6分）。

## 诊断依据

根据患者乙肝肝硬化背景、AFP显著升高（>400ng/mL）、典型影像学表现（增强CT动脉期明显强化、门脉期洗脱的"快进快出"特征），诊断为原发性肝细胞癌（HCC）明确，符合中国原发性肝癌诊疗规范中的临床诊断标准。肿瘤大小约6cm，单发，无血管侵犯及肝外转移，肝功能Child-Pugh A级，ECOG 0分，BCLC分期为B期（中期）。该分期患者标准治疗为TACE，若TACE效果良好，可转化为手术切除或消融的候选者。

## 治疗方案

BCLC B期肝癌的标准治疗是TACE。本例患者肿瘤单发、直径6cm，无门静脉癌栓及肝外转移，肝功能代偿良好，是TACE的理想适应证。治疗目标为：①通过化疗药物局部高浓度杀伤肿瘤细胞；②通过栓塞阻断肿瘤血供，导致肿瘤缺血坏死；③控制肿瘤进展，延长生存期，并争取降期后手术切除的机会。术前纠正凝血功能，给予保肝治疗，并启动恩替卡韦抗病毒治疗。术中采用微导管超选择插管技术，最大限度保护正常肝组织。

## 手术过程

患者取仰卧位，局部麻醉，右侧股动脉穿刺，置入5F动脉鞘。在飞利浦Allura Clarity血管造影系统下，将5F肝管插入腹腔干，行肝总动脉造影。造影显示肝右动脉增粗、迂曲，肝右叶后段见一大小约6cm的类圆形肿瘤染色团，边界较清，血供丰富，主要由肝右动脉后支供血。在微导丝引导下，将2.7F微导管（Progreat）超选择插管至肝右动脉后支，接近肿瘤供血动脉。

经微导管首先注入表柔比星40mg与碘化油15ml充分乳化后的化疗栓塞乳剂，透视下可见碘化油在肿瘤内均匀沉积。随后以明胶海绵颗粒（直径1-2mm）栓塞供血动脉主干。复查造影示肿瘤染色完全消失，载瘤动脉血流明显减慢，栓塞满意。拔管后压迫止血，右下肢制动12小时。手术历时约60分钟。

## 术后处理

术后患者返回病房，卧床休息，右下肢制动。给予心电监护，观察穿刺点及足背动脉搏动。术后第1-3天患者出现发热（体温最高38.8℃）、右上腹隐痛、恶心呕吐，诊断为TACE术后综合征，给予解热镇痛、止吐、保肝（异甘草酸镁、谷胱甘肽）、补液等对症支持治疗。术后第5天体温恢复正常，腹痛明显缓解。复查血常规、肝肾功能：ALT 120U/L，AST 98U/L，总胆红素45μmol/L（轻度升高，考虑为栓塞后肝功能一过性损伤），术后第10天复查肝功能基本恢复至术前水平。

## 随访结果

术后1个月复查上腹部增强CT，示肝右叶肿瘤内大量碘化油沉积，肿瘤体积较前略缩小（约5.5cm×4.8cm），增强扫描示肿瘤大部分无强化，坏死面积约70%，疗效评估mRECIST为部分缓解（PR）。AFP降至256ng/mL。术后2个月复查，AFP进一步降至85ng/mL。建议继续每2-3个月复查CT及AFP，必要时行二次TACE。目前患者已接受第二次TACE，肿瘤进一步缩小至4cm，AFP接近正常，正评估是否具备手术切除条件。

## 经验总结与讨论

TACE是BCLC B期肝癌的标准治疗方法，也是目前中晚期肝癌最常用的姑息性治疗手段。本例疗效满意，得益于：①严格的适应证选择（肝功能Child-Pugh A级、无门静脉癌栓）；②微导管超选择插管技术，将化疗栓塞药物精准注入肿瘤供血动脉，最大限度减少正常肝组织损伤；③术后规范的保肝及抗病毒治疗，维护肝功能储备。TACE术后综合征是最常见的并发症，表现为发热、腹痛、恶心呕吐，通常1-2周内自行缓解。碘化油CT沉积情况是评估疗效的重要指标。对于TACE反应良好的患者，可考虑多次TACE或联合靶向/免疫治疗，部分患者甚至可获得降期手术切除的机会。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liver%20cancer%20TACE%20transarterial%20chemoembolization%20hepatic%20artery%20interventional%20oncology&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hepatocellular%20carcinoma%20embolization%20treatment%20liver%20tumor%20DSA%20imaging%20oncology&image_size=landscape_4_3"],author:"介入科陈教授",publishDate:"2024-06-01",views:4125,likes:356},{id:"case-005",title:"主动脉夹层腔内修复术病例",department:"心血管外科",technology:"大血管介入",difficulty:"高级",equipmentBrand:"GE医疗",equipmentModel:"IGS 730",summary:"48岁男性患者，突发胸背部剧痛6小时，CTA提示Stanford B型主动脉夹层。",patientInfo:"患者男性，48岁，高血压病史15年，血压控制不佳。",diagnosis:"Stanford B型主动脉夹层",treatment:"全麻下行主动脉造影，确认夹层破口位于左锁骨下动脉远端约2cm，行胸主动脉腔内修复术（TEVAR），植入覆膜支架1枚，术后破口完全封闭，假腔血栓化。",content:`## 病例摘要

本例为48岁男性患者，突发胸背部剧痛6小时急诊入院，CTA提示Stanford B型主动脉夹层。主动脉夹层是心血管系统的极危重症，24小时死亡率每小时增加1%-2%，需紧急干预。Stanford B型夹层首选胸主动脉腔内修复术（TEVAR），通过植入覆膜支架封闭原发破口，恢复真腔血流，促使假腔血栓化。本例在GE医疗IGS 730血管造影系统下，精准定位夹层破口于左锁骨下动脉远端约2cm处，成功植入覆膜支架1枚，术后造影示破口完全封闭，假腔未见显影，真腔血流通畅。患者术后恢复良好，体现了TEVAR治疗B型主动脉夹层的微创优势和确切疗效。

## 患者基本信息

患者男性，48岁，企业高管。因"突发胸背部撕裂样剧痛6小时"急诊入院。患者6小时前在会议中突然出现胸骨后剧烈疼痛，呈撕裂样，迅速向背部、腹部放射，伴大汗淋漓、面色苍白、濒死感。既往高血压病史15年，平时工作繁忙，服药不规律（间断服用氨氯地平），血压控制差，平时波动在160-180/100-110mmHg。否认糖尿病、冠心病、马凡综合征病史。吸烟史20年，约15支/日。

## 主诉与病史

患者主诉突发胸背部撕裂样剧痛6小时。疼痛呈持续性，剧烈难忍，吗啡镇痛效果有限。伴恶心，未呕吐。无晕厥、偏瘫、少尿、下肢麻木无力。既往高血压15年，未规律治疗，血压长期控制不佳。否认家族史中早发心血管疾病或结缔组织病。入院查体：血压170/105mmHg（双侧上肢），心率105次/分，律齐。腹部柔软，无压痛，双侧股动脉、足背动脉搏动可触及，对称。双下肢皮温、颜色正常，无麻木无力。

## 辅助检查

血常规示白细胞轻度升高（11.2×10⁹/L），血红蛋白正常。D-二聚体显著升高（>2000μg/L）。心肌酶谱、肌钙蛋白正常。血肌酐105μmol/L。急诊主动脉CTA（胸腹联合）示：主动脉弓降部可见内膜片，自左锁骨下动脉以远延伸至腹主动脉分叉处，真腔受压变窄，假腔明显扩张，最宽处约4.5cm。破口位于左锁骨下动脉远端约2cm处。腹腔干、肠系膜上动脉、双肾动脉均起自真腔，血流通畅。无心包积液，无主动脉破裂征象。心脏超声示升主动脉直径正常，主动脉瓣轻度反流，左室壁运动正常，射血分数58%。

## 诊断依据

根据患者典型的突发胸背部撕裂样剧痛症状、高血压病史、CTA示主动脉内膜片及真假双腔，诊断Stanford B型主动脉夹层明确。Stanford分型依据为夹层累及左锁骨下动脉以远的降主动脉，未累及升主动脉。入院时患者血流动力学尚稳定，无灌注不良综合征表现（内脏、下肢、脊髓均未见缺血征象），具备急诊TEVAR的手术指征。需注意与急性心肌梗死、肺栓塞、气胸等急症鉴别，本例心电图及心肌酶正常，基本排除急性心梗。

## 治疗方案

Stanford B型主动脉夹层的治疗包括药物治疗（控制血压、心率）和手术治疗。对于急性复杂性B型夹层（伴灌注不良、破裂、难治性疼痛或高血压），推荐急诊TEVAR；对于非复杂性B型夹层，药物保守治疗是基础，但部分患者可能后期转为复杂性。本例患者疼痛剧烈、血压难以控制、假腔明显扩张，属于复杂性夹层，具备急诊TEVAR指征。TEVAR的原理是通过覆膜支架封闭近端破口，阻断血流进入假腔，恢复真腔血流，降低假腔压力，从而预防破裂并促进假腔血栓化。

## 手术过程

患者取仰卧位，气管插管全麻，左侧桡动脉穿刺监测血压，右侧股动脉切开暴露。在GE医疗IGS 730血管造影系统下，先经右侧股动脉送入猪尾导管至升主动脉，行术前主动脉造影，明确破口位置、真假腔关系及重要分支动脉起源。造影确认：破口位于左锁骨下动脉远端约2cm处，真腔位于内侧、受压变窄，假腔位于外侧、明显扩张。左锁骨下动脉、左颈总动脉、头臂干均起自真腔。测量近端锚定区（左锁骨下动脉远端至破口）长度约2.5cm，直径约32mm。

经导丝将超硬导丝送入升主动脉，沿导丝送入34mm×150mm覆膜支架输送系统，在路图引导下将支架近端精准定位于左锁骨下动脉远端（保留左锁骨下动脉），缓慢释放支架。支架释放后球囊扩张近端贴壁。复查造影示：支架位置良好，破口完全封闭，假腔未见显影，真腔明显扩张、血流通畅，左锁骨下动脉、腹腔干、双肾动脉均显影良好，无内漏。手术历时约90分钟。

## 术后处理

术后患者转入重症监护室，持续镇静、控制血压（目标收缩压100-120mmHg）及心率（目标<80次/分），静脉泵入尼卡地平及艾司洛尔。严密监测尿量、下肢血运、腹部症状及神经系统体征，警惕灌注不良综合征及脊髓缺血。术后即刻及术后24小时复查CTA示支架位置良好，假腔血栓形成，真腔通畅。术后第2天停用镇静，患者清醒，无肢体瘫痪、腹痛、少尿等并发症。逐步过渡至口服降压药物（美托洛尔+氨氯地平+厄贝沙坦）。术后第5天患者下床活动，恢复顺利。

## 随访结果

术后1个月门诊随访，患者无胸背痛，血压控制于120/75mmHg左右。复查主动脉CTA示支架通畅，假腔完全血栓化，真腔直径恢复正常，各分支动脉血流通畅。术后3个月、6个月、12个月定期复查CTA，夹层未见进展，支架无移位、无内漏。患者已戒烟，规律服药，血压控制达标。建议终身降压治疗，严格控制血压<130/80mmHg，每年复查主动脉CTA。

## 经验总结与讨论

TEVAR已成为急性复杂性Stanford B型主动脉夹层的标准治疗方法，具有微创、恢复快、住院时间短的优势。本例成功的关键包括：①急诊快速诊断（CTA）及及时手术，避免病情恶化；②术前精确测量锚定区长度和直径，选择合适规格支架；③术中精准定位支架近端，确保完全覆盖破口且不影响左锁骨下动脉。需要注意的是，TEVAR术后脊髓缺血是需要警惕的并发症（发生率约2%-5%），本例因支架未覆盖胸8-腰2节段，风险较低。术后严格的血压和心率控制对预防夹层进展、促进假腔血栓化至关重要。GE医疗IGS 730系统的高清成像及三维重建功能在术前评估及术中导航中发挥了重要作用。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aortic%20dissection%20TEVAR%20thoracic%20endovascular%20aneurysm%20repair%20stent%20graft%20vascular%20surgery&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=type%20B%20aortic%20dissection%20endovascular%20treatment%20aorta%20stent%20deployment%20imaging&image_size=landscape_4_3"],author:"心外科刘教授",publishDate:"2024-05-25",views:6789,likes:543},{id:"case-006",title:"颈动脉狭窄支架植入术病例",department:"神经外科",technology:"颈动脉介入",difficulty:"中级",equipmentBrand:"西门子",equipmentModel:"Artis zee III biplane",summary:"68岁男性患者，反复短暂性脑缺血发作，超声提示右侧颈内动脉重度狭窄。",patientInfo:"患者男性，68岁，高血压病史20年，糖尿病病史10年，吸烟史40年。",diagnosis:"右侧颈内动脉起始部重度狭窄（约85%）",treatment:"局麻下行全脑血管造影，确认右侧颈内动脉起始部重度狭窄，远端血管显影延迟。放置脑保护装置后，行球囊扩张+支架植入术，术后狭窄解除，血流恢复通畅，患者无神经系统并发症。",content:`## 病例摘要

本例为68岁男性患者，反复短暂性脑缺血发作（TIA），超声提示右侧颈内动脉起始部重度狭窄（约85%）。颈动脉狭窄是缺血性脑卒中的重要病因，当狭窄>70%且伴有症状时，卒中风险显著增加。颈动脉支架植入术（CAS）是治疗颈动脉狭窄的重要微创手段，尤其适用于手术高危患者。本例在西门子Artis zee III biplane双平板血管造影系统下，采用脑保护装置（EPD）辅助，行右侧颈动脉球囊扩张+支架植入术。术后狭窄完全解除，血流恢复通畅，患者无神经系统并发症，体现了CAS在脑卒中二级预防中的安全性和有效性。

## 患者基本信息

患者男性，68岁，退休工人。近2个月反复出现发作性左侧肢体麻木、无力，每次持续约10-30分钟后自行缓解，共发作5-6次。既往高血压病史20年，服用氨氯地平及厄贝沙坦，血压控制一般；2型糖尿病病史10年，服用二甲双胍，血糖控制尚可。吸烟史40年，约20支/日，已戒烟2个月。否认脑卒中、心肌梗死史。父亲因脑梗死去世。

## 主诉与病史

患者主诉反复发作性左侧肢体麻木无力2个月。2个月来发作5-6次，表现为突发左手及左下肢麻木、沉重感，伴轻度无力，持物不稳，每次持续10-30分钟，发作间期完全正常，无头痛、头晕、视物模糊。近1周发作频率增加。入院查体：血压156/88mmHg，心率74次/分，律齐。神经系统查体未见明显阳性体征（发作间期）。颈动脉听诊区未闻及明显血管杂音。心肺腹查体无特殊。

## 辅助检查

血常规、凝血功能、肝肾功能基本正常。空腹血糖8.2mmol/L，糖化血红蛋白7.5%。血脂：总胆固醇6.2mmol/L，LDL-C 3.8mmol/L。颈动脉超声示右侧颈内动脉起始部斑块形成，管腔重度狭窄，狭窄率约85%，斑块呈不均质回声（混合性斑块）；左侧颈内动脉轻度狭窄（约30%）。头颅MRI示右侧大脑半球散在多发腔隙性梗死灶，无急性大面积梗死。经颅多普勒（TCD）示右侧大脑中动脉血流速度减慢，提示近端狭窄。CT血管成像（CTA）进一步确认右侧颈内动脉起始部重度狭窄，狭窄段长约15mm，斑块钙化明显。

## 诊断依据

根据患者反复TIA症状（左侧肢体麻木无力，持续<1小时，完全恢复）、颈动脉超声及CTA证实右侧颈内动脉起始部重度狭窄（约85%），诊断为症状性右侧颈内动脉重度狭窄、短暂性脑缺血发作明确。患者既往高血压、糖尿病、吸烟等多种危险因素，符合动脉粥样硬化性颈动脉狭窄特点。根据北美症状性颈动脉内膜切除术试验（NASCET），症状性颈动脉狭窄>70%时，内科治疗卒中年风险约13%，而血运重建可显著降低风险，具备明确的介入治疗指征。

## 治疗方案

症状性颈动脉重度狭窄的标准治疗包括颈动脉内膜切除术（CEA）和颈动脉支架植入术（CAS）。本例患者合并冠心病（运动负荷试验提示轻度心肌缺血）、糖尿病及慢性肺部疾病，外科手术风险较高，且狭窄位置较高（C1-C2水平），CEA手术难度较大。经多学科讨论及与家属沟通后，选择CAS。术前双联抗血小板治疗（阿司匹林100mg qd + 氯吡格雷75mg qd）至少5天。术中采用远端滤器型脑保护装置（EPD），预防术中斑块碎屑脱落导致远端栓塞。

## 手术过程

患者取仰卧位，局部麻醉，穿刺右侧股动脉，置入8F动脉鞘。在西门子Artis zee III biplane双C臂系统下，将8F导引导管送至右侧颈总动脉远端。造影确认右侧颈内动脉起始部重度狭窄，狭窄率约85%，斑块表面不规则，远端颈内动脉及颅内分支显影延迟。经导引导管将远端脑保护装置（SpiderFX，滤网直径7mm）小心通过狭窄段，置于颈内动脉C1段远端释放。沿保护装置导丝送入4mm×20mm球囊预扩张狭窄段（8atm，持续10秒）。随后沿导丝送入9mm×30mm颈动脉自膨式支架（Precise Pro），精准覆盖狭窄段，缓慢释放。支架释放后造影示狭窄完全解除，支架贴壁良好，远端颅内分支显影明显改善。回收脑保护装置，滤网内可见少量斑块碎屑。复查造影示颈内动脉血流通畅，无夹层、痉挛或远端栓塞。手术历时约45分钟。

## 术后处理

术后患者返回病房，右下肢制动12小时，心电监护24小时。严密观察神经系统体征（意识、瞳孔、肢体活动、言语）。术后即刻及术后6小时神经系统查体均未见异常。给予控制血压（维持收缩压110-140mmHg，避免过高或过低）、强化他汀（阿托伐他汀40mg qn）、降糖、抗血小板等治疗。术后双联抗血小板治疗（DAPT）至少3个月，之后改为阿司匹林单药长期维持。术后第2天患者下床活动，无不适。

## 随访结果

术后1个月门诊随访，患者未再出现TIA发作，左侧肢体麻木无力症状消失。复查颈动脉超声示右侧颈内动脉支架血流通畅，未见再狭窄。血脂：LDL-C 1.4mmol/L。术后6个月复查颈动脉CTA示支架形态良好，管腔通畅，远端颅内动脉显影正常。患者血压、血糖控制较前改善。建议长期抗血小板治疗，严格控制危险因素（降压、降脂、控糖、戒烟），每年复查颈动脉超声。

## 经验总结与讨论

颈动脉支架植入术（CAS）是治疗症状性颈动脉重度狭窄的有效微创方法，尤其适用于手术高危患者。本例成功的关键包括：①术前充分抗血小板治疗，预防支架内血栓；②术中应用脑保护装置（EPD），捕获斑块碎屑，显著降低术中远端栓塞风险；③球囊预扩张+自膨式支架植入的标准化操作流程。西门子Artis zee III biplane双平板系统可提供双向高清成像，有利于精准定位支架及评估颅内血流，是CAS的理想设备平台。术后严格的血压管理至关重要，过高可导致高灌注综合征，过低则可致脑灌注不足。长期抗血小板及危险因素控制是预防支架再狭窄和卒中复发的关键。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=carotid%20artery%20stenting%20carotid%20stenosis%20neurointerventional%20stroke%20prevention&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=carotid%20angioplasty%20stent%20deployment%20cerebral%20protection%20device%20imaging&image_size=landscape_4_3"],author:"神外张教授",publishDate:"2024-06-20",views:4567,likes:321},{id:"case-007",title:"肺小结节微波消融治疗病例",department:"介入科",technology:"肿瘤消融",difficulty:"中级",equipmentBrand:"联影",equipmentModel:"uAngio CT",summary:"55岁女性患者，体检发现右肺上叶磨玻璃结节，穿刺活检提示原位腺癌。",patientInfo:"患者女性，55岁，无吸烟史，体检CT发现右肺上叶磨玻璃结节，大小约1.2cm。",diagnosis:"右肺上叶原位腺癌（T1aN0M0）",treatment:"CT引导下经皮肺穿刺微波消融术。患者取俯卧位，CT定位后局麻，微波天线经皮穿刺精准到达结节部位，设置功率60W，消融时间8分钟。术后复查CT示消融范围覆盖结节，周围少量气胸，无明显出血。",content:`## 病例摘要

本例为55岁女性患者，体检发现右肺上叶磨玻璃结节，大小约1.2cm，经CT引导下穿刺活检确诊为原位腺癌（T1aN0M0）。对于早期周围型肺癌，尤其是因心肺功能差、合并症多或拒绝手术的患者，热消融治疗（微波消融、射频消融、冷冻消融）是有效的微创替代方案。本例在联影uAngio CT系统引导下，采用经皮肺穿刺微波消融技术，精准将微波天线置入结节内部，以60W功率消融8分钟，术后即刻CT证实消融范围完全覆盖病灶。术后仅出现少量气胸，无出血等并发症，体现了介入消融技术治疗早期肺癌的安全性和有效性。

## 患者基本信息

患者女性，55岁，银行职员。1个月前单位体检时胸部CT发现右肺上叶磨玻璃结节，建议进一步诊治。患者无明显咳嗽、咳痰、胸痛、咯血等症状。既往体健，否认慢性支气管炎、肺结核、肺纤维化病史。无吸烟史，无职业粉尘及放射性物质接触史。母亲有乳腺癌病史。患者对手术有顾虑，担心开胸或胸腔镜手术创伤大、恢复慢，希望寻求微创治疗方案。

## 主诉与病史

患者主诉体检发现右肺结节1个月。无咳嗽、咳痰，无胸痛、气促，无发热、盗汗，无体重下降。既往体健，否认高血压、糖尿病、心脏病史。否认手术外伤史。查体：神志清楚，呼吸平稳，双肺呼吸音清，未闻及干湿啰音。心率72次/分，律齐。腹部查体无异常。

## 辅助检查

血常规、凝血功能、肝肾功能、肿瘤标志物（CEA、CYFRA21-1、NSE）均正常。胸部薄层CT（1mm层厚）示右肺上叶尖段见一纯磨玻璃结节，大小约1.2cm×1.0cm，CT值约-550HU，边界尚清，内见小空泡征，无分叶、毛刺。结节无明显增大（与外院1个月前CT对比）。PET-CT示该结节SUVmax 1.2，轻度代谢增高。在CT引导下行经皮肺穿刺活检，穿刺组织病理示：肺组织内见异型腺体沿肺泡壁伏壁样生长，细胞核增大、深染，诊断肺原位腺癌（AIS）。基因检测：EGFR 19del突变阳性。

## 诊断依据

根据患者胸部CT典型表现（持续存在的纯磨玻璃结节、>1cm、有空泡征）、PET-CT轻度代谢增高、经皮穿刺活检病理证实为肺原位腺癌（AIS），诊断明确。临床分期为cT1aN0M0（IA1期）。肺原位腺癌属于浸润前病变，预后极好，5年生存率接近100%。治疗方案可选择：①手术切除（肺叶切除或亚肺叶切除，标准治疗）；②立体定向放射治疗（SBRT）；③经皮热消融治疗。本例患者为周围型小结节，位于右肺上叶尖段，距离胸膜约1.5cm，穿刺路径安全，适合消融治疗。

## 治疗方案

经多学科讨论（MDT）及与患者充分沟通后，患者因个人意愿拒绝外科手术，选择CT引导下经皮微波消融治疗。微波消融是利用微波电磁场使组织内极性分子（主要是水分子）高速旋转、摩擦生热，局部温度可达60-100℃，导致肿瘤组织凝固性坏死。对于≤2cm的周围型早期非小细胞肺癌，消融治疗的局部控制率可与手术媲美。本例选择联影uAngio CT系统，该系统将CT成像与介入操作平台整合，可实时CT引导并即时评估消融效果。

## 手术过程

患者取俯卧位，胸部垫高，行术前CT扫描（5mm层厚），确定最佳穿刺路径：经右侧背部进针，避开肋骨、肩胛骨及大血管，穿刺路径长约4cm。常规消毒铺巾，2%利多卡因局部麻醉至胸膜。在CT实时引导下，将微波消融针（16G，水冷循环）经皮穿刺，分步进针，逐步调整方向，最终将消融针尖精准置于结节中心。再次CT确认针尖位置满意后，启动微波消融仪，设置功率60W，消融时间8分钟。消融过程中监测患者生命体征，患者诉轻度胸背部热感，可耐受。消融结束后再次CT扫描，可见结节区域呈低密度改变，周围见磨玻璃样渗出（消融带），消融范围覆盖病灶并超出边缘约5mm（安全边界）。拔针后压迫穿刺点5分钟。

## 术后处理

术后即刻CT示消融效果满意，但右肺上叶见少量气胸（肺压缩约15%），无明显出血或胸腔积液。患者无明显胸闷、气促，予以吸氧、卧床休息，密切观察呼吸情况及气胸变化。术后6小时复查CT示气胸无明显增多，肺压缩仍为15%。术后第1天复查CT示气胸较前吸收，肺压缩约10%。患者无发热，无咯血，血氧饱和度正常。术后第2天复查CT示气胸基本吸收，准予出院。嘱患者1个月后复查胸部增强CT评估消融效果。

## 随访结果

术后1个月复查胸部增强CT，示右肺上叶消融区呈不规则低密度灶，增强后无明显强化，提示肿瘤坏死完全，消融效果良好。术后3个月、6个月、12个月定期复查CT，消融区逐渐纤维化、缩小，未见肿瘤复发或残留。术后18个月复查，消融区呈条索状纤维化灶，无强化，肿瘤标志物正常。患者一般情况良好，无任何不适症状，恢复正常工作和生活。建议继续每6个月复查胸部CT，长期随访。

## 经验总结与讨论

经皮热消融是早期周围型非小细胞肺癌的重要微创治疗手段，尤其适用于因心肺功能差、高龄或拒绝手术的患者。本例为原位腺癌，直径1.2cm，位于肺外周，穿刺路径安全，是消融治疗的理想适应证。手术成功的关键包括：①术前精细规划穿刺路径，避开重要结构；②CT引导下精准穿刺，将消融针置于结节中心；③消融范围需超出肿瘤边缘5-10mm，确保安全边界。微波消融相比射频消融，升温更快、消融范围更大且受血流影响小，更适合周围型肺癌。术后气胸是最常见的并发症（发生率约10%-30%），少量气胸多可自行吸收。本例术后少量气胸经观察后顺利吸收，体现了该技术的安全性。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lung%20nodule%20microwave%20ablation%20CT%20guided%20lung%20cancer%20treatment%20minimally%20invasive&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pulmonary%20ablation%20needle%20positioning%20tumor%20treatment%20interventional%20radiology&image_size=landscape_4_3"],author:"介入科李主任",publishDate:"2024-06-18",views:3876,likes:254},{id:"case-008",title:"肾动脉狭窄支架植入治疗病例",department:"血管外科",technology:"肾动脉介入",difficulty:"中级",equipmentBrand:"飞利浦",equipmentModel:"Allura Xper FD20",summary:"62岁男性患者，难治性高血压3年，CTA提示右侧肾动脉开口重度狭窄。",patientInfo:"患者男性，62岁，高血压病史15年，近3年血压难以控制，服用3种降压药仍波动在170-190/90-100mmHg。",diagnosis:"右侧肾动脉开口重度狭窄（约90%），肾血管性高血压",treatment:"经股动脉入路行肾动脉造影，确认右侧肾动脉开口处重度狭窄。置入6mmx15mm球囊扩张式支架，术后造影示狭窄解除，肾动脉血流恢复通畅。术后1个月随访血压降至130/80mmHg，降压药减至1种。",content:`## 病例摘要

本例为62岁男性患者，难治性高血压3年，服用3种降压药血压仍控制不佳，波动在170-190/90-100mmHg。CTA提示右侧肾动脉开口重度狭窄（约90%），临床诊断为肾血管性高血压。肾动脉狭窄是继发性高血压的重要病因之一，当狭窄程度>70%且伴有难治性高血压时，介入治疗可有效改善血压控制、减少降压药用量甚至保护肾功能。本例在飞利浦Allura Xper FD20血管造影系统下行右侧肾动脉支架植入术，术后狭窄完全解除，血流恢复通畅。术后1个月随访血压降至130/80mmHg，降压药从3种减至1种，治疗效果显著。

## 患者基本信息

患者男性，62岁，退休干部。主诉发现血压升高15年，近3年控制不佳。患者15年前体检发现高血压，初始服用单药（氨氯地平）即可控制。近3年来血压逐渐升高，先后加用厄贝沙坦、氢氯噻嗪，目前服用3种降压药，血压仍波动在170-190/90-100mmHg。无头痛、头晕、心悸等明显症状。否认水肿、少尿、肉眼血尿。既往否认糖尿病、冠心病、脑卒中史。吸烟史20年，约10支/日，已戒烟3年。父亲有高血压病史。

## 主诉与病史

患者主诉血压升高15年，难治性高血压3年。近3年来规律服用氨氯地平5mg qd、厄贝沙坦150mg qd、氢氯噻嗪12.5mg qd，血压控制仍不理想。近期多次家庭自测血压及诊室血压均>160/100mmHg。无阵发性头痛、出汗、心悸，无肌无力、周期性麻痹，无多尿、夜尿增多。查体：血压186/98mmHg（双侧上肢），心率76次/分，律齐，各瓣膜区未闻及杂音。腹部未闻及血管杂音。双下肢无水肿。

## 辅助检查

血常规、尿常规、肝肾功能基本正常。血钾4.0mmol/L，血钠140mmol/L。肾素-血管紧张素-醛固酮系统（RAAS）检查：卧位肾素活性升高（3.5ng/mL/h，正常0.5-1.6），醛固酮正常。24小时尿微量白蛋白轻度升高（45mg/24h）。肾动脉CTA示右侧肾动脉开口处重度狭窄，狭窄率约90%，狭窄段长约8mm，近端腹主动脉未见明显狭窄或动脉瘤；左肾动脉未见明显狭窄。双肾大小：左肾10.5cm×5.2cm，右肾9.8cm×4.8cm（右肾轻度萎缩）。肾功能：血肌酐98μmol/L，eGFR 68mL/min/1.73m²。肾动态显像（ECT）示右肾灌注减低，肾小球滤过功能轻度受损。

## 诊断依据

根据患者难治性高血压（3种降压药仍控制不佳）、肾动脉CTA示右侧肾动脉开口重度狭窄（约90%）、RAAS激活（肾素活性升高）、右肾轻度萎缩及ECT示右肾功能减退，诊断为右侧肾动脉狭窄（动脉粥样硬化性）、肾血管性高血压明确。动脉粥样硬化是老年肾动脉狭窄的最常见病因，好发于肾动脉开口及近段。肾动脉狭窄导致患侧肾脏灌注压下降，激活RAAS系统，引起水钠潴留及血管收缩，导致高血压。本例具备肾动脉介入治疗的明确指征：①狭窄>70%；②药物难以控制的高血压；③患侧肾功能有减退趋势。

## 治疗方案

肾动脉狭窄的治疗包括药物治疗、经皮肾动脉支架植入术（PTRAS）及外科手术（旁路移植）。对于动脉粥样硬化性肾动脉开口狭窄，PTRAS是首选的微创治疗方法，可显著改善血压控制并延缓肾功能恶化。本例选择经股动脉入路行右侧肾动脉支架植入术。术前充分抗血小板治疗（阿司匹林100mg qd + 氯吡格雷75mg qd，至少5天）。术中采用球囊扩张式支架（通常开口病变选择球扩支架以获得更好的径向支撑力和定位精度）。术中需注意保护肾脏，减少造影剂用量，预防胆固醇栓塞。

## 手术过程

患者取仰卧位，局部麻醉，右侧腹股沟区消毒铺巾。穿刺右侧股动脉，置入6F动脉鞘。在飞利浦Allura Xper FD20血管造影系统下，将6F肾动脉导引导管（RDC）送至右侧肾动脉开口处。造影示右侧肾动脉开口处重度狭窄，狭窄率约90%，狭窄段长约8mm，呈"漏斗状"，远端肾动脉及分支显影延迟、浅淡。经导引导管送入0.014英寸工作导丝通过狭窄段至肾动脉远端分支。沿导丝送入2.5mm×12mm预扩球囊，以8atm扩张狭窄段。球囊泄压后造影示狭窄有所改善，但仍有明显残余狭窄。随后沿导丝送入6mm×15mm球囊扩张式支架（Express SD），支架中点精准定位于肾动脉开口（支架近端约2mm伸入腹主动脉，确保完全覆盖开口病变），以12atm释放支架。复查造影示支架贴壁良好，狭窄完全解除，肾动脉主干及分支显影清晰，血流恢复通畅，无夹层、穿孔或远端栓塞。手术历时约30分钟。

## 术后处理

术后患者返回病房，右下肢制动12小时，穿刺点压迫止血。持续心电监护，密切观察血压变化。术后2小时内患者血压从170/95mmHg逐渐降至145/85mmHg，考虑与肾动脉开通后RAAS活性下降有关。继续服用阿司匹林+氯吡格雷双联抗血小板治疗至少1个月，之后改为阿司匹林单药长期维持。术后第1天复查肾功能：血肌酐102μmol/L，较术前轻度升高（可能与造影剂有关），术后第3天降至95μmol/L。尿量正常，无腰痛、血尿。术后第3天出院。

## 随访结果

术后1个月门诊随访，患者血压130/80mmHg（家庭自测），自觉症状明显改善。目前仅服用氨氯地平5mg qd一种降压药，较术前减少2种。复查肾动脉超声示支架血流通畅，未见再狭窄。肾功能：血肌酐92μmol/L，eGFR 72mL/min/1.73m²，较术前改善。术后6个月随访，血压维持在125-135/75-85mmHg，降压药未再增加。复查肾动脉CTA示支架通畅，右肾灌注改善，肾大小稳定。建议长期抗血小板治疗，控制血脂、戒烟，定期复查肾动脉超声及肾功能。

## 经验总结与讨论

肾动脉狭窄是继发性高血压的重要病因，尤其在老年、难治性高血压、不明原因肾功能减退患者中应高度警惕。肾动脉CTA或MRA是首选的无创筛查手段，DSA是诊断金标准。对于动脉粥样硬化性肾动脉开口狭窄，球囊扩张式支架植入是标准治疗方案，定位准确、支撑力强，远期通畅率优于单纯球囊扩张。本例术后血压控制显著改善，降压药种类减少，体现了PTRAS的明确疗效。但需注意，并非所有肾动脉狭窄患者都能从介入治疗中获益，术前应严格筛选适应证（如狭窄>70%、难治性高血压、进展性肾功能不全等）。术后长期抗血小板及危险因素控制（降压、降脂、戒烟）对维持支架通畅至关重要。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=renal%20artery%20stenosis%20stenting%20kidney%20hypertension%20vascular%20intervention&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=renal%20angioplasty%20stent%20deployment%20renal%20artery%20imaging%20treatment&image_size=landscape_4_3"],author:"血管外科王主任",publishDate:"2024-06-16",views:3456,likes:213},{id:"case-009",title:"脑动静脉畸形栓塞治疗病例",department:"神经外科",technology:"神经介入",difficulty:"高级",equipmentBrand:"西门子",equipmentModel:"Artis icono",summary:"28岁男性患者，突发头痛伴意识障碍，CT提示脑出血，DSA证实脑动静脉畸形。",patientInfo:"患者男性，28岁，既往体健，工作中突发剧烈头痛伴呕吐，随后意识模糊。",diagnosis:"右侧额叶脑动静脉畸形（AVM）伴出血，Spetzler-Martin Ⅲ级",treatment:"急诊行全脑血管造影，确认右侧额叶AVM，由大脑中动脉和大脑前动脉双重供血，引流至矢状窦。行畸形血管部分栓塞术，经微导管注入Onyx液体栓塞剂，闭塞主要供血动脉和部分畸形团。二期联合伽马刀治疗。",content:`## 病例摘要

本例为28岁男性患者，工作中突发剧烈头痛伴呕吐、意识障碍，急诊CT提示右侧额叶脑出血，进一步DSA检查证实为右侧额叶脑动静脉畸形（AVM）破裂出血。AVM是青年自发性脑出血的重要病因之一，年出血风险约2%-4%，一旦破裂可危及生命。本例采用分期治疗策略：急诊先行部分栓塞术降低出血风险，术后恢复良好，二期联合伽马刀放射外科治疗，以期达到完全闭塞畸形血管团的目的。该病例体现了神经介入在脑AVM综合治疗中的核心作用，以及多学科协作（介入+放疗）的重要性。

## 患者基本信息

患者男性，28岁，软件工程师。既往体健，否认高血压、糖尿病、心脏病史。无吸烟、饮酒史。家族中无脑血管畸形、动脉瘤或出血性疾病史。患者在办公室工作时突然感到剧烈头痛，"像被重击一样"，随即呕吐1次，为胃内容物，同事发现其面色苍白、出汗，约5分钟后出现意识模糊、答非所问，遂急呼120送至我院急诊。

## 主诉与病史

患者主诉突发剧烈头痛伴意识障碍1小时。既往体健，否认反复头痛、癫痫发作、肢体无力等病史。否认头部外伤史。入院查体：嗜睡状态，可唤醒，GCS评分13分（E3V4M6），颈抵抗阳性，右侧瞳孔3.5mm，左侧3.0mm，对光反射灵敏。右侧肢体肌力4级，左侧5级，右侧巴氏征阳性。心肺腹查体无明显异常。

## 辅助检查

急诊头颅CT示右侧额叶皮层及皮层下区高密度影，大小约4cm×3cm×3cm，周围可见低密度水肿带，右侧脑室前角受压，中线结构左偏约5mm，考虑脑出血。CTA示右侧额叶可见异常血管团，考虑动静脉畸形可能。血常规、凝血功能正常。急诊DSA检查（西门子Artis icono系统）示右侧额叶AVM，畸形团大小约3.5cm×3.0cm，由右侧大脑中动脉M2分支及大脑前动脉A2分支双重供血，浅表引流至上矢状窦，深部引流至大脑内静脉。Spetzler-Martin分级Ⅲ级（畸形团体积3分、位于功能区0分、深部引流1分）。

## 诊断依据

青年男性，急性起病，突发剧烈头痛、呕吐伴意识障碍，头颅CT证实右侧额叶脑出血。CTA及DSA进一步证实出血原因为右侧额叶脑动静脉畸形（AVM）破裂。诊断依据充分：①典型临床表现（青年突发脑出血）；②CT显示脑出血；③DSA金标准证实AVM的存在、供血动脉、畸形团大小及引流静脉。Spetzler-Martin Ⅲ级提示中等手术风险，单纯显微外科手术并发症风险较高，而单纯介入栓塞完全闭塞率有限，故选择分期综合治疗策略。

## 治疗方案

脑AVM的治疗方式包括显微外科手术切除、血管内介入栓塞、立体定向放射外科（伽马刀/射波刀）及联合治疗。本例AVM位于右侧额叶功能区附近，Spetzler-Martin Ⅲ级，且已破裂出血，需积极治疗。考虑到畸形团由多条动脉供血、完全介入栓塞难度大，且急性期脑水肿明显不宜立即手术切除，决定采用分期方案：第一期行介入部分栓塞，闭塞主要供血动脉和部分畸形团，降低近期再出血风险；第二期（栓塞术后3-6个月）行伽马刀放射外科治疗，利用放射线使残余畸形血管内皮增生、管腔闭塞。

## 手术过程

急诊全麻下行右侧股动脉穿刺，置入6F动脉鞘。在西门子Artis icono双C臂系统三维路图引导下，将6F导引导管送至右侧颈内动脉。造影确认AVM的供血动脉：右侧大脑中动脉M2段上干发出2支供血支，大脑前动脉A2段发出1支供血支。在微导丝辅助下，先将微导管（Marathon）超选择插管至大脑中动脉供血支近畸形团处，缓慢注入Onyx 18液体栓塞剂约3.5mL，透视下可见Onyx在畸形团内良好铸型，该供血动脉及约60%畸形团被栓塞。随后尝试栓塞大脑前动脉供血支，因角度较刁，微导管难以稳定到位，为避免误栓正常血管，放弃该支栓塞。复查造影示残余畸形团染色减少，主要引流静脉仍通畅，无静脉淤滞。手术历时约3小时，术后拔除鞘管，压迫止血。

## 术后处理

术后患者入神经重症监护室，严密监测生命体征、神经系统体征及穿刺点情况。术后即刻头颅CT示右侧额叶出血灶同前，未见新增梗死或出血。给予控制血压（维持收缩压110-130mmHg）、脱水降颅压（甘露醇+白蛋白）、预防脑血管痉挛（尼莫地平）、预防癫痫（丙戊酸钠）、神经营养等综合治疗。术后第2天患者意识完全清醒，GCS 15分，右侧肢体肌力恢复至4+级。术后第5天复查CT示出血灶逐渐吸收，水肿减轻。术后第10天患者一般情况良好，出院休养，等待二期伽马刀治疗。

## 随访结果

栓塞术后3个月，患者恢复良好，无头痛、癫痫发作，右侧肢体肌力完全恢复正常，已恢复轻体力工作。复查DSA示残余畸形团约1.5cm×1.2cm，大脑中动脉供血支完全闭塞，大脑前动脉供血支仍有少量供血。遂转至伽马刀中心，行立体定向放射外科治疗，处方剂量周边20Gy，中心40Gy，覆盖残余畸形团。伽马刀术后6个月复查MRI示残余畸形团明显缩小，强化减弱。术后2年DSA复查示AVM完全闭塞，无残余染色，患者无再出血及神经功能缺损，恢复良好。

## 经验总结与讨论

脑AVM是青年脑出血的主要病因，治疗目标是消除畸形团、防止再出血，同时最大限度保护神经功能。本例采用"介入栓塞+伽马刀"的联合策略，取得了良好效果。急诊栓塞的主要目的是降低近期再出血风险，而非追求一次性完全闭塞。Onyx液体栓塞剂具有可控性好、不易粘管、可深度铸型等优点，是目前AVM栓塞的首选材料。本例大脑前动脉供血支因角度问题未能栓塞，是残余畸形团的主要来源，通过伽马刀补充治疗后最终实现完全闭塞。对于Spetzler-Martin Ⅱ-Ⅲ级AVM，联合治疗往往优于单一治疗方式。术后需长期随访（至少2-3年），确认AVM完全闭塞后方可认为治愈。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=brain%20arteriovenous%20malformation%20AVM%20embolization%20neurointerventional%20radiology&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cerebral%20AVM%20Onyx%20embolization%20liquid%20embolic%20agent%20neurosurgery&image_size=landscape_4_3"],author:"神外李教授",publishDate:"2024-06-14",views:5432,likes:398},{id:"case-010",title:"食管恶性狭窄支架植入病例",department:"消化介入科",technology:"非血管介入",difficulty:"中级",equipmentBrand:"GE医疗",equipmentModel:"IGS 730",summary:"72岁男性患者，进行性吞咽困难2个月，胃镜+活检确诊食管中段鳞癌。",patientInfo:"患者男性，72岁，进行性吞咽困难2月余，目前仅能进流质，体重下降约10kg。",diagnosis:"食管中段鳞状细胞癌（T3N1M0），食管狭窄",treatment:"患者高龄，合并多种基础疾病，外科手术风险高。在DSA引导下行食管支架植入术，经口送入导丝通过狭窄段，食管造影测量狭窄长度约6cm，植入18mmx80mm镍钛合金覆膜支架。术后患者即可进食半流质，生活质量明显改善。",content:`## 病例摘要

本例为72岁男性患者，因进行性吞咽困难2个月就诊，胃镜及活检确诊为食管中段鳞状细胞癌（T3N1M0）。患者高龄，合并多种基础疾病，外科手术风险评估高，不宜行根治性食管切除术。为缓解食管狭窄所致的吞咽困难、改善营养状况及生活质量，在GE医疗IGS 730血管造影系统引导下，行食管覆膜支架植入术。术中经口送入导丝通过狭窄段，精准测量后植入镍钛合金覆膜支架1枚，术后患者即刻可进食半流质饮食，吞咽困难明显缓解。该病例展示了非血管介入技术在晚期恶性肿瘤姑息治疗中的重要价值。

## 患者基本信息

患者男性，72岁，退休教师。主诉进行性吞咽困难2个月余。患者2个月前无明显诱因出现进食时胸骨后哽噎感，初期仅于进食干硬食物时出现，后逐渐加重，目前仅能进流质饮食，偶有水呛咳。近1个月体重下降约10kg，伴乏力、纳差。既往有高血压病史15年，服用氨氯地平控制，血压控制尚可；冠心病病史10年，2年前因急性心肌梗死行PCI术（前降支植入支架1枚），目前服用阿司匹林及阿托伐他汀；慢性支气管炎病史20年。否认糖尿病、脑卒中史。

## 主诉与病史

患者主诉进行性吞咽困难2个月，加重伴体重下降。2个月来吞咽困难进行性加重，从固体食物→半流质→流质，伴胸骨后隐痛，无反酸、烧心，无呕血、黑便。近1个月体重下降约10kg，乏力明显。既往冠心病PCI术后，日常活动稍受限，可步行约500米。慢性支气管炎，秋冬季咳嗽、咳痰。入院查体：消瘦体型，营养差，皮肤弹性差，锁骨上淋巴结未触及肿大。心肺查体无明显异常，腹部平软，肝脾肋下未触及。

## 辅助检查

血常规示血红蛋白98g/L（轻度贫血），白蛋白32g/L（低蛋白血症）。肿瘤标志物：CEA 15.6ng/mL，CA19-9 42U/mL，SCC 8.5ng/mL，均升高。肝肾功能、凝血功能基本正常。心电图示陈旧性前壁心肌梗死改变。胸部CT示食管中段管壁增厚，最厚处约15mm，管腔明显狭窄，纵隔可见多发肿大淋巴结（最大短径约15mm），双肺未见明显转移灶。上消化道造影示食管中段长约6cm的偏心性狭窄，黏膜破坏，近端食管明显扩张。胃镜检查示距门齿约28-34cm处见一环周隆起性病变，表面糜烂，管腔狭窄，胃镜无法通过，活检病理示鳞状细胞癌（中分化）。超声内镜示肿瘤浸润至食管外膜（T3），周围可见肿大淋巴结。

## 诊断依据

根据患者进行性吞咽困难的典型症状、上消化道造影示食管中段狭窄、胃镜及活检病理证实鳞状细胞癌、超声内镜及CT分期为T3N1M0，诊断食管中段鳞状细胞癌（Ⅲ期）明确。患者高龄（72岁），合并冠心病（PCI术后）、慢性肺部疾病，心肺功能储备差，外科手术风险极高（麻醉风险评估ASA Ⅲ-Ⅳ级），不适合行根治性食管切除术。患者目前主要症状为食管梗阻所致吞咽困难，营养状况差，亟需姑息性治疗以恢复经口进食、改善生活质量。

## 治疗方案

针对该晚期食管癌患者，治疗目标为姑息性缓解症状而非根治。可选方案包括：①食管支架植入术（快速恢复管腔通畅，立竿见影）；②姑息性放疗（可缩小肿瘤、缓解梗阻，但起效较慢）；③姑息性化疗（全身控制肿瘤，但对局部梗阻缓解有限）。考虑到患者营养状况差、吞咽困难严重，支架植入是最快速有效的解除梗阻方法。经多学科讨论（MDT）及家属沟通后，决定先行食管覆膜支架植入术，术后视情况辅以放化疗。

## 手术过程

患者术前禁食8小时，建立静脉通路，取左侧卧位，口咽部利多卡因喷雾表面麻醉。在GE医疗IGS 730血管造影系统透视引导下，经口插入0.035英寸超滑导丝，在造影剂辅助下小心通过食管狭窄段，确认导丝位于胃内。经导丝送入5F单弯导管，注入造影剂行食管造影，显示狭窄段位于食管中段，长度约6cm，最窄处直径约3mm，近端食管扩张明显。拔除导管，沿导丝送入18mm×80mm镍钛合金覆膜食管支架及配套输送系统，在透视下将支架中点对准狭窄段中心，缓慢释放支架。释放过程中透视观察支架展开良好，完全覆盖狭窄段，两端超出病变约1cm。术后即刻口服造影剂，示支架位置良好，管腔通畅，造影剂通过顺利，无明显渗漏。手术历时约20分钟。

## 术后处理

术后患者禁食6小时，之后逐步从温水→流质→半流质过渡。术后第1天患者即可进食米汤、蛋羹等半流质，无呛咳及胸痛。给予抑酸（质子泵抑制剂）、黏膜保护、营养支持（肠内营养+部分肠外营养）治疗。监测生命体征平稳，无发热、呕血、黑便等并发症。术后第3天复查胸部X线示支架位置良好，无移位。患者精神状态及营养状况逐渐改善，术后1周体重增加约1.5kg。

## 随访结果

术后2周门诊随访，患者诉吞咽困难明显缓解，可进食软食及半流质，进食量明显增加，体重回升2kg。复查上消化道造影示支架通畅，位置良好，无明显移位或再狭窄。术后1个月，患者一般情况改善，转肿瘤科行姑息性放疗（30Gy/10次）。放疗期间吞咽困难未加重，可维持半流质饮食。术后3个月随访，患者吞咽功能稳定，可进食软食，体重较术前增加4kg，生活质量明显提高。建议定期复查，若出现支架再狭窄可考虑覆膜支架或光动力治疗。

## 经验总结与讨论

食管支架植入是缓解恶性食管狭窄、改善晚期食管癌患者生活质量的有效姑息治疗手段。本例为高龄、合并多种基础疾病、失去手术机会的患者提供了快速解除梗阻的方案。手术成功的关键点包括：①术前精确评估狭窄长度及位置，选择合适规格支架（通常两端各超出病变1-2cm）；②导丝通过狭窄段时动作轻柔，避免穿孔；③透视下精准定位支架中点与狭窄段中心重合。覆膜支架可有效阻止肿瘤向腔内生长导致的再狭窄，是目前恶性食管狭窄的首选。术后需注意饮食管理（从流质逐步过渡，避免大块食物嵌顿），并定期随访。对于预计生存期>6个月的患者，联合放化疗可进一步延长支架通畅时间。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=esophageal%20cancer%20stent%20implantation%20dysphagia%20treatment%20interventional%20radiology&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=esophageal%20stricture%20stenting%20barium%20swallow%20study%20gastrointestinal%20intervention&image_size=landscape_4_3"],author:"消化介入张主任",publishDate:"2024-06-12",views:2987,likes:176},{id:"case-011",title:"大咯血支气管动脉栓塞治疗病例",department:"介入科",technology:"外周介入",difficulty:"中级",equipmentBrand:"飞利浦",equipmentModel:"Allura Clarity",summary:"56岁男性患者，反复大咯血1天，总量约500ml，内科治疗效果不佳。",patientInfo:"患者男性，56岁，支气管扩张病史20年，反复咯血，本次咯血量大，内科保守治疗无效。",diagnosis:"支气管扩张症伴大咯血",treatment:"急诊行支气管动脉造影，发现右侧支气管动脉增粗、迂曲，局部见造影剂外渗。行支气管动脉栓塞术，用明胶海绵颗粒+弹簧圈栓塞责任血管。术后咯血立即停止，观察1周无复发，患者顺利出院。",content:`## 病例摘要

本例为56岁男性患者，因反复大咯血1天、总量约500ml急诊入院，内科保守治疗无效。大咯血是呼吸科急危重症，24小时咯血量>500ml即属大咯血范畴，病死率可达50%以上，主要死因是窒息及失血性休克。本例患者有20年支气管扩张病史，本次咯血量大且反复，药物治疗效果不佳，具备支气管动脉栓塞（BAE）的明确指征。急诊在飞利浦Allura Clarity血管造影系统下行支气管动脉造影，准确识别并栓塞责任血管，术后咯血立即停止。该病例体现了介入栓塞治疗在大咯血急救中的关键价值。

## 患者基本信息

患者男性，56岁，退休司机。因"反复咯血1天"急诊入院。患者有支气管扩张病史20年，反复咳嗽、咳痰，偶有痰中带血，每次量少，可自行停止。1天前无明显诱因出现整口鲜血咳出，量约200ml，伴胸闷、气促，急诊予止血、抗感染等治疗，期间仍有2次大咯血，每次约100-150ml，总量约500ml。既往无肺结核、肺癌病史。否认高血压、糖尿病、心脏病史。吸烟史30年，已戒烟5年。

## 主诉与病史

患者主诉反复咯血1天，总量约500ml。既往支气管扩张病史20年，反复咳嗽、咳黄脓痰，秋冬季节加重，曾多次因感染住院治疗。无午后低热、盗汗、消瘦等结核中毒症状。入院查体：神志清楚，贫血貌，呼吸稍促，双肺可闻及散在湿啰音，以右下肺明显。心率102次/分，律齐，血压110/70mmHg。指脉氧92%（鼻导管吸氧3L/min）。腹部查体无特殊。

## 辅助检查

血常规示血红蛋白92g/L（轻度贫血），白细胞12.5×10⁹/L，中性粒细胞比例85%。凝血功能：PT、APTT正常，纤维蛋白原3.8g/L。肝肾功能正常。血型：A型，Rh阳性。急诊胸部CT示右下肺支气管扩张，呈囊状及柱状扩张，周围见斑片状渗出影，考虑合并感染，未见明显占位性病变。支气管镜检查见右下叶基底段支气管开口处有活动性出血，因视野不清未能明确出血点，予局部肾上腺素盐水灌洗后出血稍减，但仍有渗血。

## 诊断依据

根据患者长期支气管扩张病史、突发大咯血、胸部CT典型表现（右下肺囊状及柱状支气管扩张伴感染），诊断支气管扩张症合并大咯血明确。咯血原因考虑扩张的支气管动脉破裂出血，因支气管扩张导致支气管壁结构破坏，伴随的支气管动脉代偿性增粗、迂曲，血管壁薄弱，易破裂出血。患者经静脉止血药物（垂体后叶素、氨甲环酸）、抗感染等治疗无效，具备急诊支气管动脉栓塞的绝对指征。

## 治疗方案

大咯血的内科保守治疗（止血药、镇静、患侧卧位等）对部分患者有效，但对于药物难以控制的大咯血，支气管动脉栓塞（BAE）是首选的微创治疗方法，有效率可达85%-95%。本例患者咯血量>500ml/24h，且内科治疗失败，应立即行急诊BAE。术前建立双静脉通路，备血，做好气管插管及抢救准备。因患者仍有活动性出血，手术需在尽量短的时间内完成，以挽救生命。

## 手术过程

患者取仰卧位，局部麻醉，穿刺右侧股动脉，置入5F动脉鞘。在飞利浦Allura Clarity血管造影系统下，将5F Cobra导管送入胸主动脉，于T5-T6水平寻找支气管动脉开口。造影发现右侧支气管动脉明显增粗、迂曲，起始部直径约3mm（正常约1-1.5mm），远端分支紊乱，于右下肺野可见明显造影剂外渗，确定为责任血管。在微导丝引导下将微导管超选择插管至该支气管动脉远端，避开脊髓动脉等重要分支后，先行明胶海绵颗粒（直径500-700μm）栓塞，再以2枚微型弹簧圈（直径3mm）栓塞主干近端。复查造影示责任血管完全闭塞，未见造影剂外渗，其他支气管动脉未见明显异常。手术历时约40分钟。

## 术后处理

术后患者返回病房，绝对卧床，右下肢制动12小时，穿刺点压迫止血。术后即刻起患者未再咯血，生命体征平稳。给予抗感染（头孢哌酮舒巴坦）、化痰、支持治疗。监测血常规，术后第2天血红蛋白回升至96g/L。术后第3天复查胸部CT示右下肺渗出影较前吸收，未见肺梗死征象。观察1周，患者无发热，咳嗽、咳痰减少，无再次咯血，顺利出院。

## 随访结果

出院后1个月门诊随访，患者无咯血发作，咳嗽、咳痰症状较前明显改善。复查胸部CT示右下肺支气管扩张同前，未见新增病变。术后3个月电话随访，患者一般情况良好，未再出现咯血，日常活动不受限。建议患者继续戒烟，避免呼吸道感染，每年接种流感疫苗及肺炎疫苗，定期复查胸部CT。若再次咯血，应及时就诊，必要时可重复栓塞。

## 经验总结与讨论

支气管动脉栓塞是大咯血急救的重要手段，尤其适用于内科治疗无效或无法明确外科切除病灶的患者。本例成功的关键在于：①快速识别责任血管（造影剂外渗是直接征象）；②超选择插管避开脊髓动脉等危险分支，避免严重并发症（如脊髓损伤）；③采用颗粒+弹簧圈联合栓塞，颗粒栓塞远端末梢血管，弹簧圈加固近端主干，提高栓塞彻底性。需要注意的是，BAE后部分患者可能因侧支循环建立而复发咯血（约10%-20%），因此术后应积极控制感染、改善气道引流，并长期随访。飞利浦Allura Clarity系统的高清成像能力在本例快速识别出血血管中发挥了重要作用。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=bronchial%20artery%20embolization%20hemoptysis%20treatment%20interventional%20radiology%20lung&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=massive%20hemoptysis%20bronchial%20angiography%20embolization%20coils%20treatment&image_size=landscape_4_3"],author:"介入科陈教授",publishDate:"2024-06-10",views:4123,likes:287},{id:"case-012",title:"冠状动脉慢性完全闭塞病变介入治疗病例",department:"心血管内科",technology:"冠脉介入",difficulty:"高级",equipmentBrand:"飞利浦",equipmentModel:"Allura Clarity",summary:"65岁男性患者，活动后胸闷气短半年，冠脉造影提示前降支慢性完全闭塞。",patientInfo:"患者男性，65岁，高血压病史10年，糖尿病病史8年，吸烟史30年。近半年活动耐量明显下降。",diagnosis:"冠心病，劳力性心绞痛，前降支慢性完全闭塞（CTO）",treatment:"冠脉造影示左前降支近段完全闭塞，可见侧支循环供血。采用前向导丝技术，先后尝试Fielder XT、Gaia系列导丝，在IVUS指导下成功通过闭塞段，球囊扩张后植入药物洗脱支架2枚。术后造影示前降支血流通畅，TIMI 3级。",content:`## 病例摘要

本例为65岁男性患者，活动后胸闷气短半年，冠脉造影提示前降支慢性完全闭塞（CTO）。慢性完全闭塞病变是冠脉介入领域最具挑战性的病变类型之一，手术成功率相对较低，并发症风险较高。本例采用前向导丝升级技术，在血管内超声（IVUS）指导下，先后尝试多种专用CTO导丝，最终成功通过闭塞段，并于病变处植入药物洗脱支架2枚，术后血流恢复TIMI 3级。该病例展示了CTO-PCI的规范化操作流程及器械选择策略，对提高CTO介入治疗成功率具有参考价值。

## 患者基本信息

患者男性，65岁，退休工人。主诉活动后胸闷、气短半年，近1个月症状加重，步行约100米即感明显胸闷，伴左肩背部放射痛，休息5-10分钟可缓解。既往高血压病史10年，服用氨氯地平及厄贝沙坦治疗，血压控制一般；2型糖尿病病史8年，服用二甲双胍及格列美脲，血糖控制尚可。吸烟史30年，约20支/日，已戒烟1个月。否认脑卒中、外周动脉疾病史。父亲有冠心病史。

## 主诉与病史

患者主诉活动后胸闷气短半年，加重1个月。半年来反复出现胸骨后闷痛，与体力活动明显相关，初期爬3层楼出现症状，现步行平路100米即诱发，伴出汗、乏力，休息后可缓解，无夜间阵发性呼吸困难。1个月前症状频率增加，每周发作3-4次。外院心电图示V1-V4导联ST段压低0.1mV，T波低平。门诊以"冠心病，劳力性心绞痛"收入院。查体：血压148/92mmHg，心率78次/分，律齐，各瓣膜区未闻及明显病理性杂音，双肺呼吸音清。

## 辅助检查

入院心电图示窦性心律，V1-V4导联ST段压低伴T波低平。心肌酶谱正常，肌钙蛋白I阴性。血常规、肝肾功能、凝血功能基本正常。空腹血糖7.8mmol/L，糖化血红蛋白7.2%。血脂：总胆固醇5.6mmol/L，低密度脂蛋白胆固醇3.4mmol/L。超声心动图示左室壁运动普遍减弱，前壁及前间隔运动明显减低，左室射血分数（LVEF）48%。颈动脉超声示双侧颈动脉内中膜增厚，左侧颈动脉分叉处斑块形成，狭窄约30%。

## 诊断依据

根据患者典型劳力性心绞痛症状（活动后胸闷、休息可缓解）、心电图前壁导联缺血性改变（ST段压低、T波低平）、超声心动图示前壁运动减低，临床诊断冠心病、劳力性心绞痛明确。为明确冠脉病变程度，行诊断性冠状动脉造影。造影示：左主干未见明显狭窄；左前降支（LAD）近段完全闭塞，残端呈钝头状，闭塞段长度约25mm，可见间隔支向右室及远端提供侧支循环；左回旋支（LCX）中段弥漫性狭窄50%-60%；右冠状动脉（RCA）近段狭窄40%。SYNTAX评分18分。根据造影结果，诊断为：冠心病，劳力性心绞痛，前降支慢性完全闭塞（CTO）。

## 治疗方案

患者前降支CTO病变为罪犯血管，且为单支CTO，侧支循环良好，J-CTO评分2分（中等难度），具备介入治疗指征。考虑到患者合并糖尿病、前壁缺血面积大（V1-V4导联改变）、LVEF降低（48%），成功开通CTO可改善心肌缺血、心功能及远期预后。与患者及家属充分沟通后，决定行择期CTO-PCI术。术前双联抗血小板治疗（阿司匹林100mg qd + 替格瑞洛90mg bid）至少5天。术中备用旋磨、激光等辅助技术。

## 手术过程

患者取仰卧位，局部麻醉，穿刺右侧桡动脉，置入6F动脉鞘。给予肝素8000U抗凝。将6F EBU 3.5指引导管送至左冠脉开口，行左冠脉造影确认LAD近段CTO病变。经指引导管送入Finecross微导管至LAD闭塞段近端，先后尝试Fielder XT-R导丝、Gaia Second导丝均未能通过闭塞段。更换Gaia Third导丝，在微导管支撑下，结合微导管交替推进技术（Microcatheter Support Technique），反复调整导丝头端方向，终于在IVUS实时指导下确认导丝进入真腔。经导丝送入IVUS导管确认导丝全程位于真腔，测量参考血管直径约3.0mm，病变长度约28mm。先后以2.0mm×15mm、2.5mm×15mm球囊预扩张，造影示前向血流恢复，TIMI 2级。于病变处串联植入3.0mm×28mm、3.0mm×24mm药物洗脱支架（雷帕霉素涂层）2枚，以14-16atm充分扩张。术后造影示LAD血流通畅，TIMI 3级，无夹层、穿孔及远端栓塞。

## 术后处理

术后患者安返病房，持续心电监护24小时。穿刺点压迫止血，右前臂制动6小时。术后即刻心电图示V1-V4导联ST段恢复基线，T波直立。心肌酶谱未见升高，无围术期心肌梗死。术后双联抗血小板治疗（DAPT）至少12个月，阿司匹林100mg qd长期维持。同时强化他汀治疗（阿托伐他汀40mg qn，目标LDL-C<1.4mmol/L），优化降压、降糖方案。术后第3天患者下床活动，无胸闷发作。

## 随访结果

术后1个月门诊复查，患者诉活动耐量明显改善，可步行约800米无胸闷发作。复查超声心动图示左室前壁运动较前改善，LVEF提升至52%。血脂：LDL-C 1.2mmol/L。术后6个月复查冠脉CTA示LAD支架通畅，未见再狭窄。术后1年复查运动负荷心电图阴性，超声心动图示LVEF 55%。目前患者规律服药，戒烟成功，生活质量显著提高。建议每年复查冠脉CTA或造影，长期随访。

## 经验总结与讨论

CTO病变是冠脉介入治疗的"最后堡垒"，手术成功率与术者经验、器械选择及影像指导密切相关。本例成功的关键因素包括：①选择合适的CTO专用导丝（Gaia系列），其锥形头端、亲水涂层及可控性好，适合中等难度CTO；②微导管的强力支撑为导丝通过闭塞段提供稳定性；③IVUS指导在导丝通过闭塞段后确认真腔位置，避免假腔扩张导致血肿或穿孔。对于CTO病变，术前应充分评估J-CTO评分，合理选择前向或逆向策略。本例采用前向导丝升级技术获得成功，术后患者症状明显改善，心功能提升，体现了CTO-PCI的临床获益。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chronic%20total%20occlusion%20CTO%20coronary%20intervention%20cardiology%20PCI&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CTO%20PCI%20wire%20crossing%20stent%20deployment%20coronary%20angiography&image_size=landscape_4_3"],author:"心内科赵教授",publishDate:"2024-06-08",views:6543,likes:432},{id:"case-013",title:"肝血管瘤经动脉栓塞治疗病例",department:"介入科",technology:"肿瘤介入",difficulty:"初级",equipmentBrand:"联影",equipmentModel:"uAngio 960",summary:"42岁女性患者，体检发现肝右叶巨大血管瘤，直径约12cm，伴右上腹不适。",patientInfo:"患者女性，42岁，体检超声发现肝右叶占位，增强CT确诊肝血管瘤，进行性增大。",diagnosis:"肝右叶巨大海绵状血管瘤",treatment:"行肝动脉造影，确认肝右动脉供血的巨大血管瘤，肿瘤染色明显。行超选择插管至供血动脉，注入平阳霉素+碘化油乳剂栓塞。术后6个月复查CT示血管瘤缩小至5cm，患者症状消失。",content:`## 病例摘要

本例为42岁女性患者，体检发现肝右叶巨大海绵状血管瘤，直径约12cm，伴右上腹不适。肝海绵状血管瘤是肝脏最常见的良性肿瘤，多数体积较小且无症状，但当瘤体直径>10cm时，可能出现右上腹胀痛、压迫症状，甚至存在自发性破裂出血的风险。本例患者血管瘤巨大且进行性增大，伴有明显症状，具备介入治疗指征。在联影uAngio 960血管造影系统引导下，行经动脉栓塞治疗（TAE），术中超选择插管至肝右动脉供血支，注入平阳霉素+碘化油乳剂进行栓塞。术后6个月随访，血管瘤显著缩小至5cm，患者症状完全消失，治疗效果满意。

## 患者基本信息

患者女性，42岁，公司职员。1年前体检时超声发现肝右叶占位，当时直径约8cm，医生建议定期复查。近半年来患者自觉右上腹部隐痛不适，偶有饱胀感，进食后加重，无恶心、呕吐，无黄疸。复查增强CT提示血管瘤较前明显增大，直径已达12cm。患者既往体健，否认肝炎、肝硬化病史。无长期口服避孕药史。无手术外伤史。家族中无类似疾病史。

## 主诉与病史

患者主诉体检发现肝占位1年，右上腹不适半年。近半年来右上腹隐痛逐渐加重，以餐后及久坐后为甚，伴右侧背部牵涉痛。无发热、寒战，无皮肤巩膜黄染，无黑便及呕血。食欲尚可，体重无明显下降。既往体健，否认乙肝、丙肝病史，否认酗酒史。查体：皮肤巩膜无黄染，肝区轻度叩击痛，右上腹可触及一包块，下缘约平脐水平，质地软，边界尚清，无明显压痛。

## 辅助检查

血常规、肝肾功能、凝血功能均正常。乙肝两对半示HBsAb阳性，余阴性；丙肝抗体阴性。AFP、CEA、CA19-9等肿瘤标志物均在正常范围。超声示肝右叶巨大不均质回声团，大小约12.3cm×10.5cm×9.8cm，边界清，内部呈网状结构，CDFI示边缘少量血流信号。上腹部增强CT示肝右叶巨大低密度占位，动脉期边缘结节样强化，门脉期及延迟期向中心填充，呈"快进慢出"典型表现，诊断为肝海绵状血管瘤。三维重建显示瘤体主要位于肝右叶后段，由肝右动脉后支供血。

## 诊断依据

根据患者影像学特征：超声示肝内不均质回声团，内部网状结构；增强CT动脉期边缘结节样强化，门脉期及延迟期进行性向心性填充，呈现典型的"快进慢出"强化模式，诊断肝海绵状血管瘤明确。AFP等肿瘤标志物正常，排除肝癌。瘤体直径>10cm，属于巨大血管瘤，且近半年进行性增大，伴右上腹不适症状，具有治疗指征。因患者拒绝外科手术，选择介入栓塞治疗。

## 治疗方案

肝海绵状血管瘤的治疗方式包括手术切除、介入栓塞、射频消融及观察随访等。本例瘤体巨大，位于肝右叶，外科手术创伤大、出血风险高，患者对开腹手术顾虑较大。经导管肝动脉栓塞（TAE）是治疗症状性肝血管瘤的安全有效方法，通过栓塞血管瘤的供血动脉，使瘤体内血栓形成、机化，进而瘤体萎缩。本例选择在联影uAngio 960数字化血管造影系统下行经动脉栓塞治疗，该设备具有优异的图像质量和灵活的机架系统，有利于完成超选择性插管。

## 手术过程

患者取仰卧位，局部麻醉，右侧腹股沟区消毒铺巾。采用Seldinger技术穿刺右侧股动脉，置入5F动脉鞘。在导丝引导下将5F肝管插入腹腔干，行肝总动脉造影，显示肝右动脉增粗、迂曲，肝右叶可见巨大异常染色团，边界清楚，主要由肝右动脉后支供血。在微导丝引导下，将微导管（2.7F Progreat）超选择插管至肝右动脉后支，接近瘤体供血动脉开口处。经微导管缓慢注入平阳霉素8mg与碘化油10ml充分乳化后的乳剂，透视下可见碘化油在瘤体内均匀沉积，栓塞满意。随后以明胶海绵颗粒（直径1-2mm）加强栓塞供血动脉主干。复查造影示瘤体染色基本消失，载瘤动脉血流明显减慢，栓塞成功。拔管后压迫止血，右下肢制动12小时。

## 术后处理

术后患者返回病房，卧床休息，右下肢伸直制动12小时。给予心电监护，观察穿刺点有无渗血、血肿及足背动脉搏动情况。术后第1天患者出现低热（体温最高38.2℃），伴右上腹隐痛，考虑为栓塞后综合征表现，给予解热镇痛、保肝、补液等对症支持治疗。术后第3天体温恢复正常，腹痛明显缓解。复查血常规示白细胞轻度升高，肝肾功能基本正常。术后第5天患者出院，嘱1个月后复查增强CT。

## 随访结果

术后1个月复查增强CT，示肝右叶血管瘤内大量碘化油沉积，瘤体较前略缩小，约10cm×8.5cm。术后3个月复查超声，示血管瘤缩小至约7cm×6cm，内部血流信号明显减少。术后6个月复查增强CT，示血管瘤缩小至约5cm×4.5cm，强化程度明显减低，患者右上腹不适症状完全消失。建议继续定期随访（每6个月复查超声），观察瘤体变化。目前随访1年，血管瘤稳定，无复发增大迹象。

## 经验总结与讨论

肝海绵状血管瘤是肝脏最常见的良性肿瘤，绝大多数无需治疗。但当瘤体>10cm、位于肝包膜下、短期内迅速增大或出现明显症状时，应考虑积极干预。经动脉栓塞治疗具有微创、安全、疗效确切的优点，尤其适用于拒绝手术或手术风险高的患者。平阳霉素+碘化油乳剂是常用的栓塞方案，平阳霉素可破坏血管内皮细胞，碘化油作为栓塞剂和药物载体，可在瘤体内长期滞留。超选择插管至瘤体供血支是提高疗效、减少正常肝组织损伤的关键。本例在联影uAngio 960系统下完成精细超选，术后6个月瘤体缩小约60%，症状消失，疗效显著。栓塞后综合征是常见并发症，表现为发热、腹痛、恶心等，通常1周内自行缓解，对症处理即可。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hepatic%20hemangioma%20embolization%20liver%20tumor%20interventional%20radiology%20treatment&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liver%20hemangioma%20transarterial%20embolization%20pingyangmycin%20lipiodol&image_size=landscape_4_3"],author:"介入科王医生",publishDate:"2024-06-06",views:2765,likes:154},{id:"case-014",title:"深静脉血栓导管接触性溶栓病例",department:"血管外科",technology:"外周血管介入",difficulty:"中级",equipmentBrand:"西门子",equipmentModel:"Artis zee III biplane",summary:"38岁女性患者，左下肢肿胀疼痛3天，超声提示左下肢深静脉血栓形成。",patientInfo:"患者女性，38岁，剖宫产术后1周，卧床期间出现左下肢肿胀疼痛，伴皮温升高。",diagnosis:"左下肢深静脉血栓形成（中央型+混合型）",treatment:"先植入下腔静脉滤器预防肺栓塞，然后经腘静脉入路行导管接触性溶栓（CDT）。将溶栓导管置入血栓内，持续泵入尿激酶溶栓。3天后造影复查示血栓大部分溶解，髂股静脉恢复通畅，撤出溶栓导管和滤器，患者肿胀明显消退。",content:`## 病例摘要

本例为38岁女性患者，剖宫产术后1周，因左下肢突发肿胀疼痛3天急诊入院。超声检查提示左下肢深静脉血栓形成（中央型+混合型），血栓累及髂静脉、股总静脉、股浅静脉及腘静脉。鉴于患者处于产后早期，属深静脉血栓高危人群，且血栓负荷大，存在肺栓塞高风险。经多学科会诊讨论后，决定在植入下腔静脉滤器预防肺栓塞的基础上，采用导管接触性溶栓（CDT）治疗。经腘静脉入路精准置入溶栓导管，持续泵入尿激酶，3天后造影复查血栓大部分溶解，血流恢复通畅。术后患者症状显著改善，肿胀明显消退，顺利出院并继续抗凝治疗。

## 患者基本信息

患者女性，38岁，因"剖宫产术后左下肢肿胀疼痛3天"入院。患者1周前因足月妊娠在当地医院行子宫下段剖宫产术，手术顺利，产后恢复尚可。术后因切口疼痛活动较少，卧床休息为主。3天前晨起发现左下肢肿胀，以大腿及小腿明显，伴胀痛不适，行走时加重，休息后无明显缓解。患者既往体健，否认高血压、糖尿病、心脏病史。无吸烟、饮酒史。家族中无静脉血栓栓塞性疾病史。

## 主诉与病史

患者主诉左下肢肿胀疼痛3天。剖宫产术后1周，卧床休息期间逐渐出现左下肢肿胀，伴皮温升高、浅静脉扩张。无胸痛、咯血、呼吸困难等肺栓塞表现。既往体健，否认长期口服避孕药史、肿瘤病史及凝血功能障碍史。入院查体：左下肢明显肿胀，周径较右侧增粗约5cm（大腿根部），皮温升高，皮肤张力增高，Homans征阳性，浅静脉代偿性扩张。足背动脉搏动可触及。

## 辅助检查

急诊下肢静脉超声示：左髂总静脉、髂外静脉、股总静脉、股浅静脉及腘静脉内可见低回声充填，探头加压后管腔不能完全闭合，提示深静脉血栓形成（中央型+混合型）。彩色多普勒示上述静脉血流信号消失或明显减弱。D-二聚体>5000μg/L。血常规示白细胞轻度升高，血红蛋白及血小板正常。凝血功能：PT、APTT正常。下肢静脉CTV进一步证实左下肢深静脉广泛血栓形成，累及范围与超声一致，未见明显血管外压迹。胸部CT平扫未见肺栓塞征象。

## 诊断依据

患者具有明确的深静脉血栓形成危险因素：剖宫产术后（近期手术史）、产后卧床（活动减少）。临床表现为典型的一侧下肢突发肿胀、疼痛、皮温升高。下肢静脉超声及CTV均证实左下肢深静脉广泛血栓形成。根据Wells评分及临床可能性评估，诊断明确。血栓分型为中央型+混合型，因血栓累及髂股静脉，血栓脱落导致肺栓塞的风险较高，需要积极干预。

## 治疗方案

患者为产后早期，属深静脉血栓高危人群，血栓负荷大且累及髂股静脉。治疗策略包括：①预防肺栓塞；②清除血栓、恢复静脉通畅；③长期抗凝预防复发。考虑到单纯抗凝治疗对于广泛髂股静脉血栓的溶栓效果慢、残留血栓多、远期静脉血栓后综合征发生率高，决定采用导管接触性溶栓（CDT）联合抗凝的综合方案。术前先行下腔静脉滤器植入，预防溶栓过程中血栓脱落导致致命性肺栓塞。

## 手术过程

第一阶段：下腔静脉滤器植入。患者取仰卧位，局部麻醉，经右侧颈内静脉穿刺，置入11F短鞘。行下腔静脉造影，确认下腔静脉通畅、无血栓，肾静脉开口位置明确后，于肾静脉下方释放可回收式下腔静脉滤器1枚，滤器展开良好，位置准确。

第二阶段：导管接触性溶栓。患者取俯卧位，超声引导下穿刺左侧腘静脉，置入5F鞘管。行左下肢静脉造影，显示髂静脉、股总静脉、股浅静脉广泛充盈缺损，血流缓慢。将多侧孔溶栓导管（Unifuse）在导丝辅助下置入血栓内，导管头端位于髂静脉近端，侧孔段覆盖大部分血栓区域。固定导管后接微量泵，持续泵入尿激酶（10万U/小时）。术后患者返回病房，患肢抬高，绝对卧床，密切监测凝血功能及出血征象。

## 术后处理

溶栓期间患者入住监护病房，患肢抬高30度，绝对卧床。持续泵入尿激酶72小时，每12小时监测凝血功能（PT、APTT、纤维蛋白原），维持纤维蛋白原>1.5g/L。同时给予低分子肝素皮下注射抗凝。溶栓期间患者无牙龈出血、穿刺点渗血、血尿等出血并发症。溶栓3天后复查下肢静脉造影，示髂静脉、股总静脉、股浅静脉血栓大部分溶解，血流恢复通畅，仅残留少量附壁血栓。遂拔除溶栓导管，同期经右侧颈内静脉入路回收下腔静脉滤器。术后继续低分子肝素桥接华法林抗凝，目标INR 2.0-3.0。

## 随访结果

患者术后第5天左下肢肿胀基本消退，疼痛消失，皮温恢复正常。复查下肢静脉超声示左髂静脉、股静脉血流通畅，瓣膜功能尚可。术后第7天出院，继续口服华法林抗凝治疗（后转为利伐沙班15mg bid，21天后改为20mg qd），建议抗凝疗程至少3个月。出院后1个月门诊复查，左下肢无肿胀，活动正常，D-二聚体降至正常范围。超声示左下肢深静脉血流通畅，未见明显血栓残留。建议穿戴医用弹力袜，预防静脉血栓后综合征。

## 经验总结与讨论

本例为典型的产后深静脉血栓形成，具有明确的获得性危险因素。对于中央型+混合型DVT，尤其是累及髂股静脉者，单纯抗凝虽可降低肺栓塞风险，但血栓清除慢、远期静脉功能损害大。导管接触性溶栓（CDT）可将溶栓药物直接注入血栓内，提高局部药物浓度，加快血栓溶解，同时减少全身出血风险。本例在CDT前植入下腔静脉滤器，有效预防了溶栓过程中肺栓塞的发生。值得注意的是，产后患者处于高凝状态，且需考虑哺乳需求，抗凝药物选择需个体化。利伐沙班等新型口服抗凝药在产后应用逐渐增多，但仍需权衡哺乳安全性。术后长期抗凝及弹力袜治疗对预防复发和静脉血栓后综合征具有重要意义。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20vein%20thrombosis%20DVT%20catheter%20directed%20thrombolysis%20vascular%20surgery&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lower%20limb%20DVT%20thrombolysis%20catheter%20fibrinolysis%20venography&image_size=landscape_4_3"],author:"血管外科李主任",publishDate:"2024-06-04",views:3543,likes:221},{id:"case-015",title:"急性脑梗死支架取栓治疗病例",department:"神经内科",technology:"神经介入",difficulty:"高级",equipmentBrand:"西门子",equipmentModel:"Artis icono",summary:"58岁男性患者，突发右侧肢体无力伴言语不清4.5小时，急诊取栓治疗。",patientInfo:"患者男性，58岁，高血压病史10年，房颤病史5年，未规律抗凝。",diagnosis:"急性缺血性脑卒中（心源性栓塞），左侧大脑中动脉闭塞",treatment:"患者NIHSS评分16分，CT平扫未见出血，ASPECTS评分8分。急诊行脑血管造影证实左侧大脑中动脉M1段闭塞。采用Solitaire支架取栓，首次开通成功，mTICI 3级。术后患者肌力明显改善，2周后可独立行走。",content:`## 病例摘要

本例为58岁男性患者，因突发右侧肢体无力伴言语不清4.5小时急诊入院。患者有房颤病史，未规律抗凝治疗，是心源性脑栓塞的高危人群。入院后NIHSS评分16分，提示中重度神经功能缺损。急诊CT平扫排除颅内出血后，ASPECTS评分8分，符合急性缺血性脑卒中血管内治疗指征。在西门子Artis icono血管造影系统支持下，急诊行脑血管造影证实左侧大脑中动脉M1段闭塞，采用Solitaire支架取栓装置一次性成功开通血管，术后mTICI分级达3级，实现完全再灌注。术后患者神经功能显著恢复，2周后可独立行走，体现了急性大血管闭塞性卒中"时间就是大脑"的救治理念。

## 患者基本信息

患者男性，58岁，既往有高血压病史10年，血压控制一般；房颤病史5年，因担心出血风险未规律服用抗凝药物。患者长期吸烟，每日约20支。此次发病前正在家中休息，突发右侧肢体无力，伴言语含糊、口角歪斜，症状进行性加重。家属发现后立即拨打急救电话，发病至入院时间约4.5小时，尚在血管内治疗时间窗内。

## 主诉与病史

患者主诉突发右侧肢体无力伴言语不清4.5小时。既往高血压病史10年，服用氨氯地平治疗，血压波动在140-160/90-100mmHg。房颤病史5年，未规律抗凝，仅间断服用阿司匹林。否认糖尿病、冠心病史。吸烟史30年，约20支/日。否认家族遗传病史。入院查体：神志清楚，混合性失语，右侧鼻唇沟变浅，右侧肢体肌力2级，右侧巴氏征阳性。

## 辅助检查

急诊头颅CT平扫未见颅内出血及明显低密度灶，ASPECTS评分8分。CT血管成像（CTA）提示左侧大脑中动脉M1段闭塞。血常规、凝血功能基本正常，血糖7.2mmol/L，肝肾功能未见明显异常。心电图示心房颤动，心室率约110次/分。颈动脉超声示双侧颈动脉内中膜增厚，未见明显狭窄。经胸超声心动图提示左房增大，左室射血分数55%，未见明显附壁血栓。

## 诊断依据

根据患者突发局灶性神经功能缺损症状（右侧肢体无力、言语不清），症状持续不缓解，结合头颅CT排除出血，CTA证实左侧大脑中动脉M1段闭塞，诊断为急性缺血性脑卒中（心源性栓塞）。TOAST分型考虑心源性栓塞型，主要依据为：急性起病、CTA示颅内大血管闭塞、有心房颤动病史且未抗凝、神经功能缺损严重。发病时间在6小时内，符合血管内治疗指征。

## 治疗方案

患者发病4.5小时，NIHSS 16分，CT排除出血，ASPECTS 8分，符合《中国急性缺血性脑卒中诊治指南》中关于大血管闭塞性卒中血管内治疗的Ⅰ级推荐。与家属充分沟通后，决定直接行血管内取栓治疗，不行静脉溶栓（考虑到房颤心源性栓塞，大负荷血栓，静脉溶栓再通率低）。术中采用全身麻醉，经右侧股动脉穿刺，在西门子Artis icono高端血管造影系统引导下进行脑血管造影及取栓操作。

## 手术过程

患者取仰卧位，全麻成功后，常规消毒铺巾，右侧腹股沟区局麻，Seldinger技术穿刺右侧股动脉，置入6F动脉鞘。在导丝引导下将6F导引导管送至左侧颈内动脉C1段。造影确认左侧大脑中动脉M1段完全闭塞，远端血流中断，闭塞段以远血管借软膜支缓慢显影。将Rebar微导管在微导丝辅助下通过闭塞段，确认位于真腔后，引入Solitaire AB 6x30mm取栓支架，释放后等待5分钟使支架与血栓充分嵌合。随后将支架与微导管一并回撤至导引导管内，取出支架后可见大量暗红色血栓。复查造影示左侧大脑中动脉M1段完全再通，mTICI 3级，远端分支显影良好。单次取栓即成功，手术总耗时约45分钟。

## 术后处理

术后患者麻醉苏醒顺利，言语功能及右侧肢体肌力即有明显改善。即刻复查头颅CT未见颅内出血及明显造影剂渗漏。术后给予严密监护，控制血压在120-140/80-90mmHg。术后24小时复查头颅CT未见出血转化，开始启动抗凝治疗（低分子肝素桥接华法林，目标INR 2.0-3.0）。同时给予他汀强化降脂、控制血糖、营养神经、康复训练等综合治疗。术后48小时患者右侧肢体肌力恢复至4级，言语表达明显改善。

## 随访结果

术后2周复查，患者可独立行走，右侧肢体肌力5-级，言语流利度基本恢复，仅偶有轻度找词困难。NIHSS评分降至2分，mRS评分1分。复查头颅MRI示左侧基底节区小片状梗死灶，范围明显小于最初缺血区域，提示取栓成功挽救了大量缺血半暗带组织。出院后继续华法林抗凝（后转为利伐沙班20mg qd）、阿托伐他汀40mg qn、氨氯地平控制血压等二级预防治疗。建议定期随访凝血功能及颈动脉超声。

## 经验总结与讨论

本例成功救治的关键在于：一是发病至就诊时间短，家属及时识别卒中症状并呼叫急救；二是院内卒中绿色通道高效运转，从入院到穿刺时间（DPT）控制在60分钟以内；三是采用了Solitaire支架取栓这一成熟技术，首次开通即获成功，减少了血管内膜损伤及远端栓塞风险。对于房颤患者，心源性栓塞往往血栓负荷大、质地较韧，静脉溶栓再通率有限，直接取栓或桥接治疗可获得更高再通率。术后尽早启动抗凝对预防房颤相关卒中复发至关重要，但需权衡出血转化风险，通常建议在术后24-48小时排除出血后开始。`,images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=acute%20ischemic%20stroke%20mechanical%20thrombectomy%20brain%20artery%20clot%20removal&image_size=landscape_4_3","https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Solitaire%20stent%20retriever%20cerebral%20thrombectomy%20neurointerventional%20stroke&image_size=landscape_4_3"],author:"神经内科王教授",publishDate:"2024-06-02",views:7654,likes:567}],lr=[{id:"equip-001",brand:"飞利浦",model:"Allura Xper FD20",name:"Allura Xper FD20 平板探测器血管造影系统",description:"飞利浦旗舰级心血管造影系统，配备20x20cm大尺寸平板探测器，适用于心脏介入、神经介入、外周血管等多学科应用。",parameters:{探测器类型:"碘化铯平板探测器",探测器尺寸:"20 x 20 cm",像素矩阵:"1024 x 1024",空间分辨率:"3.6 lp/mm",机架旋转速度:"60°/s",最大功率:"100 kW",管电压范围:"40-125 kV",管电流范围:"10-1000 mA"},features:["大尺寸平板探测器，覆盖范围广","ClarityIQ低剂量成像技术","3D-RA三维旋转血管造影","StentBoost支架增强显影技术","iGuide智能导航系统","支持双向透视和电影采集"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Allura%20Xper%20FD20%20DSA%20system%20angiography%20equipment%20interventional%20radiology%20room%20modern%20medical&image_size=landscape_16_9"],releaseDate:"2022-03"},{id:"equip-002",brand:"飞利浦",model:"Allura Clarity",name:"Allura Clarity 介入X射线系统",description:"新一代Clarity平台，以超低剂量和超高清图像质量为核心，全面提升介入手术的安全性和精准度。",parameters:{探测器类型:"新一代平板探测器",探测器尺寸:"30 x 30 cm",像素矩阵:"1536 x 1536",空间分辨率:"4.2 lp/mm",机架旋转速度:"70°/s",低剂量技术:"ClarityIQ 2.0","3D成像":"支持4D-RA",图像后处理:"集成高级工作站"},features:["ClarityIQ 2.0低剂量技术，剂量降低可达70%","超大视野平板探测器","4D-RA四维旋转血管造影","AI辅助图像分析","一体化操作工作站","支持复杂结构性心脏病介入"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Allura%20Clarity%20interventional%20X-ray%20system%20modern%20cath%20lab%20high%20end%20medical%20equipment&image_size=landscape_16_9"],releaseDate:"2023-06"},{id:"equip-003",brand:"西门子",model:"Artis zee III biplane",name:"Artis zee III 双向平板血管造影系统",description:"西门子高端双向平板DSA系统，特别适用于神经介入和心血管介入的复杂手术。",parameters:{探测器类型:"双平板探测器",探测器尺寸:"20 x 20 cm（双向）",像素矩阵:"1240 x 1240",空间分辨率:"3.9 lp/mm",机架系统:"落地式双向C臂",旋转采集:"支持双向3D-RA",冷却系统:"直接冷却技术",剂量管理:"CARE技术平台"},features:["双向平板探测器，神经介入首选","syngo DynaCT 3D成像","syngo iFlow 彩色血流分析","syngo Needle Guide 穿刺导航","CARE剂量降低技术","支持机器人辅助操作"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Artis%20zee%20biplane%20DSA%20system%20neurointerventional%20angiography%20laboratory%20medical%20equipment&image_size=landscape_16_9"],releaseDate:"2021-09"},{id:"equip-004",brand:"西门子",model:"Artis icono",name:"Artis icono 血管造影X射线系统",description:"西门子最新一代血管造影系统，搭载人工智能辅助功能，为介入手术提供智能化支持。",parameters:{探测器类型:"QuantumMax平板探测器",探测器尺寸:"30 x 30 cm",像素矩阵:"2048 x 2048",空间分辨率:"4.5 lp/mm",AI功能:"AI图像增强、AI路径规划",机架系统:"七轴机械臂",剂量技术:"PureVision低剂量平台",支持术式:"全科介入"},features:["AI驱动的智能成像平台","超高分辨率平板探测器","七轴机械臂，定位精准灵活","AI自动路径规划","术中实时AI辅助诊断","智能工作流优化"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Artis%20icono%20AI%20angiography%20system%20smart%20interventional%20lab%20futuristic%20medical%20technology&image_size=landscape_16_9"],releaseDate:"2024-01"},{id:"equip-005",brand:"联影",model:"uAngio 960",name:"uAngio 960 平板血管造影系统",description:"国产高端DSA系统代表，联影医疗自主研发的高性能血管造影设备，性能对标国际一线品牌。",parameters:{探测器类型:"国产高端平板探测器",探测器尺寸:"25 x 25 cm",像素矩阵:"1536 x 1536",空间分辨率:"4.0 lp/mm",机架旋转速度:"65°/s",国产率:"核心部件国产化率90%以上",智能功能:"uAI智能成像平台",云平台:"支持云端远程会诊"},features:["自主可控核心技术","uAI智能低剂量成像","三维旋转血管造影","智能路径图功能","支持5G远程介入手术","高性价比，维护成本低"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20960%20Chinese%20DSA%20system%20domestic%20medical%20equipment%20interventional%20angiography&image_size=landscape_16_9"],releaseDate:"2022-12"},{id:"equip-006",brand:"联影",model:"uAngio CT",name:"uAngio CT 血管造影与CT一体机",description:"全球首创的DSA与CT一体化融合设备，实现介入手术室一站式诊断与治疗。",parameters:{系统类型:"DSA+CT一体化系统",DSA探测器:"25x25cm平板",CT探测器:"128排CT探测器",定位精度:"亚毫米级配准",工作模式:"DSA模式/CT模式/融合模式",临床应用:"肿瘤介入、神经介入、综合介入",图像融合:"实时多模态融合导航",手术支持:"术中CT评估疗效"},features:["全球首创DSA+CT一体化设计","术中即时CT评估，无需转运患者","多模态图像融合导航","精准三维穿刺引导","一站式诊疗解决方案","显著提升介入手术效率"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20CT%20integrated%20DSA%20CT%20system%20hybrid%20operating%20room%20advanced%20medical%20technology&image_size=landscape_16_9"],releaseDate:"2023-11"},{id:"equip-007",brand:"GE医疗",model:"IGS 730",name:"IGS 730 智能介入手术平台",description:"GE医疗顶级介入血管造影系统，以创新技术赋能复杂介入手术，提供卓越的图像质量和操作体验。",parameters:{探测器类型:"Gigabox平板探测器",探测器尺寸:"30 x 25 cm",像素矩阵:"1920 x 1600",空间分辨率:"4.3 lp/mm",机架系统:"轨道式双向C臂","3D成像":"DynaCT+4D成像",AI平台:"AIR x AI智能平台",剂量管理:"ASiR DSA迭代重建"},features:["Gigabox超大容量探测器","AIR x AI人工智能平台","ASiR DSA迭代重建降剂量","4D血管成像功能","AutoRight智能定位系统","支持TAVR等复杂结构性心脏病手术"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20healthcare%20IGS%20730%20interventional%20angiography%20system%20smart%20cath%20lab%20premium%20medical%20equipment&image_size=landscape_16_9"],releaseDate:"2022-08"},{id:"equip-008",brand:"东芝",model:"Infinix-i 4D",name:"Infinix-i 4D 血管造影系统",description:"佳能医疗（原东芝）高端血管造影系统，搭载4D成像技术，为复杂介入手术提供全面支持。",parameters:{探测器类型:"高端平板探测器",探测器尺寸:"30 x 30 cm",像素矩阵:"2048 x 2048",空间分辨率:"4.4 lp/mm",机架系统:"灵活C臂系统","4D成像":"4D-DSA功能",低剂量技术:"SUREPulse低剂量平台",图像后处理:"高级工作站"},features:["4D-DSA四维血管成像","SUREPulse智能低剂量技术","超大视野探测器","实时三维路图导航","支持双向成像","全面的介入应用解决方案"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=toshiba%20cannon%20Infinix-i%204D%20angiography%20system%20interventional%20radiology%20medical%20equipment&image_size=landscape_16_9"],releaseDate:"2023-03"},{id:"equip-009",brand:"东芝",model:"Infinix Celeve",name:"Infinix Celeve 心血管专用造影系统",description:"专为心血管介入设计的紧凑型造影系统，优化的操作空间和心脏介入专用功能。",parameters:{探测器类型:"心血管专用平板",探测器尺寸:"25 x 20 cm",像素矩阵:"1536 x 1280",空间分辨率:"4.0 lp/mm",机架设计:"悬吊式C臂",床旁系统:"触摸屏操作",冠脉专用:"冠脉增强软件",电生理:"支持电生理标测"},features:["专为心脏介入优化设计","悬吊式机架，操作空间大","床旁全触控操作","冠脉支架增强显影","低剂量透视和造影","集成电生理标测系统"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=toshiba%20Infinix%20Celeve%20cardiac%20angiography%20system%20cath%20lab%20cardiovascular%20medical&image_size=landscape_16_9"],releaseDate:"2022-11"},{id:"equip-010",brand:"东软",model:"NeuAngio 30C",name:"NeuAngio 30C 平板血管造影系统",description:"东软医疗自主研发的高端平板血管造影系统，国产DSA的中坚力量，性能稳定可靠。",parameters:{探测器类型:"国产平板探测器",探测器尺寸:"25 x 25 cm",像素矩阵:"1536 x 1536",空间分辨率:"3.8 lp/mm",机架旋转速度:"55°/s",智能功能:"智能低剂量成像",三维成像:"支持3D-RA",国产化率:"核心部件国产化率85%"},features:["自主研发，全国产化平台","智能剂量管理系统","三维旋转血管造影","智能路径图功能","支持多学科介入应用","高性价比，售后服务便捷"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=neusoft%20NeuAngio%2030C%20chinese%20DSA%20system%20domestic%20medical%20equipment%20angiography&image_size=landscape_16_9"],releaseDate:"2023-05"},{id:"equip-011",brand:"飞利浦",model:"Azurion 7 M20",name:"Azurion 7 M20 影像引导治疗系统",description:"飞利浦新一代Azurion平台高端机型，7代平台技术，20cm探测器，适用于多学科综合介入手术室。",parameters:{探测器类型:"新一代M20平板探测器",探测器尺寸:"20 x 20 cm",像素矩阵:"1280 x 1280",空间分辨率:"4.0 lp/mm",平台技术:"Azurion 7代平台",低剂量技术:"ClarityIQ 2.0",操作方式:"双手柄智能控制",工作流:"SmartConnect智能工作流"},features:["Azurion新一代智能平台","ClarityIQ超低剂量成像","双手柄精准操控","三维旋转造影功能","智能工作流管理","支持心血管、神经、外周等多学科"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Azurion%207%20M20%20image%20guided%20therapy%20system%20interventional%20angiography%20modern%20medical&image_size=landscape_16_9"],releaseDate:"2024-02"},{id:"equip-012",brand:"GE医疗",model:"IGS 530",name:"IGS 530 通用介入血管造影系统",description:"GE医疗中端通用型介入血管造影系统，性能均衡，适用于综合医院多学科介入应用。",parameters:{探测器类型:"高分辨率平板探测器",探测器尺寸:"25 x 20 cm",像素矩阵:"1536 x 1280",空间分辨率:"3.9 lp/mm",机架系统:"单C臂落地式",三维成像:"支持3D-RA",剂量技术:"ASiR低剂量技术",应用范围:"全科介入"},features:["高性价比通用平台","ASiR迭代重建降剂量","三维旋转血管造影","操作便捷，学习曲线短","稳定可靠，维护成本低","适合地市级医院使用"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20healthcare%20IGS%20530%20universal%20interventional%20angiography%20system%20general%20hospital%20medical&image_size=landscape_16_9"],releaseDate:"2023-01"},{id:"equip-013",brand:"西门子",model:"Artis genio",name:"Artis genio 新一代介入成像系统",description:"西门子医疗全新一代介入成像平台，搭载Optiq AI影像链技术，实现低剂量下的高清成像，为介入手术带来全新体验。",parameters:{探测器类型:"新一代高清平板探测器",像素矩阵:"2048 x 2048",空间分辨率:"4.8 lp/mm",AI技术:"Optiq AI影像链",剂量降低:"最高降低50%",机架系统:"新一代机械臂",AI功能:"实时去噪、智能参数调节"},features:["Optiq AI影像链技术","AI实时去噪，高清低剂量","大数据驱动的智能参数调节","透视、采集、DSA全模式支持","新一代人体工学设计","面向未来的可升级平台"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Artis%20genio%20next%20generation%20interventional%20imaging%20system%20Optiq%20AI%20medical%20technology&image_size=landscape_16_9"],releaseDate:"2025-12",sourceUrl:"https://www.auntminnieeurope.com/imaging-informatics/artificial-intelligence/news/15773569/siemens-emphasizes-ai-interventional-technology-at-rsna-2025",sourceName:"RSNA 2025 报道"},{id:"equip-014",brand:"西门子",model:"Magnetom Free.XL",name:"Magnetom Free.XL 0.55T 介入MRI系统",description:"西门子医疗与Cook Medical合作打造的全球首个介入MRI(iMRI)Suite核心设备，0.55T场强，无电离辐射的精准介入治疗平台。",parameters:{磁场强度:"0.55T",孔径大小:"100cm 超大孔径",冷却技术:"DryCool 无液氦技术",梯度系统:"XL梯度",AI重建:"Deep Resolve AI重建",导航软件:"myNeedle Companion",临床应用:"肿瘤介入、小儿介入、结构心"},features:["无电离辐射，更安全的介入方式","卓越软组织对比度","100cm超大孔径，操作空间充足","DryCool技术，无需液氦补充","3D路径规划与实时导航","全球首个iMRI Suite解决方案"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Magnetom%20Free.XL%20interventional%20MRI%20iMRI%20suite%20radiation%20free%20interventional%20medicine&image_size=landscape_16_9"],releaseDate:"2025-09",sourceUrl:"https://www.siemens-healthineers.com/press/releases/imri-partnership",sourceName:"Siemens Healthineers官网"},{id:"equip-015",brand:"飞利浦",model:"Azurion ClarityIQ",name:"Azurion ClarityIQ 血管造影系统",description:"飞利浦全新一代Azurion ClarityIQ血管造影系统，依托前沿高清影像技术，500+系统参数定制，实现高清影像与低剂量的双重突破。",parameters:{平台技术:"Azurion新一代平台",影像技术:"ClarityIQ高清成像",参数模型:"500+系统参数定制",图像处理:"实时运动校正与去噪",剂量技术:"Onco Blue剂量降低技术",应用领域:"心脏介入、神经介入、外周介入",图像稳定:"自动纠正微小移动"},features:["500+系统参数定制化影像","针对每个临床领域的高清参数模型","自动实时纠正患者和设备移动","减少噪声和伪影，锐化边缘","显著降低X射线剂量","以人为本的低剂量关怀"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Azurion%20ClarityIQ%20angiography%20system%20high%20definition%20imaging%20low%20dose%20CMEF%202025&image_size=landscape_16_9"],releaseDate:"2025-04",sourceUrl:"https://www.philips.com.cn/a-w/about/news/archive/standard/about/news/press/2025/20250409-philips-azurion-clarityiq-debuts-at-cmef.html",sourceName:"飞利浦中国官网"},{id:"equip-016",brand:"联影",model:"uAngio 980",name:"uAngio 980 智慧仿生微创介入手术系统",description:'联影医疗旗舰级DSA系统，搭载"零噪声"纯净影像技术，十轴机械臂机架，十大临床解决方案，国产DSA全球首创技术集大成者。',parameters:{探测器类型:"高端平板探测器",影像技术:'"零噪声"纯净影像技术',信噪比提升:"40%以上",剂量降低:"最高80%",侧支血管:"CC0级可视",机架系统:"十轴机械臂，100.5cm超大开口",AI平台:"uVera AI超级平台",临床应用:"五大介入术式全覆盖"},features:['"零噪声"高清低剂量成像',"十轴仿生机械臂机架","全球最大100.5cm C臂开口","十大临床解决方案","AI冠脉增强与支架显影","锥束CT定量灌注","uLingo智慧仿生语音系统","uSpace数字孪生空间"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20980%20zero%20noise%20DSA%20smart%20bionic%20interventional%20system%20chinese%20medical%20innovation&image_size=landscape_16_9"],releaseDate:"2025-10",sourceUrl:"https://finance.sina.com.cn/stock/relnews/cn/2025-10-20/doc-infuqftf5040169.shtml",sourceName:"上海证券报"},{id:"equip-017",brand:"联影",model:"uOR 魔方",name:"uOR 魔方复合手术室系统",description:"联影集团全域自研的复合手术室系统，配备智慧仿生10轴DSA、术中水冷滑轨CT、双一流智能腔镜，支持脑机接口等前沿手术。",parameters:{核心配置:"10轴DSA + 术中CT + 智能腔镜",智能中枢:"魔方中枢",影像融合:"多模态影像融合导航",AI功能:"智能手术决策、远程协同",手术支持:"术前规划、术中引导、术后康复",特色应用:"脑机接口全路径手术平台",效率提升:"手术效率提升50%以上"},features:["全套国产高端智能外科设备","魔方中枢智能核心","深度整合影像融合与AI决策","术中即时CT成像，无需转运","支持侵入式/半侵入式/介入式脑机接口","AR导航精准电极贴放","一站式围手术期救治平台","华中地区首个全国产复合手术平台"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uOR%20hybrid%20operating%20room%20brain%20computer%20interface%20BCI%20surgery%20platform%20chinese%20medical&image_size=landscape_16_9"],releaseDate:"2026-06",sourceUrl:"http://m.toutiao.com/group/7648833294422835762/",sourceName:"IT之家 / 联影医疗公众号"},{id:"equip-018",brand:"GE医疗",model:"Allia Celeo Max 朱雀",name:"Allia Celeo Max 朱雀 血管造影系统",description:"GE医疗中国团队主导研发的旗舰级血管造影系统，碳纤维大孔径、隐藏式线缆、AI全流程赋能，中国首发、全球推广。",parameters:{机架材料:"CRFP碳纤维",C臂开口:"96cm 超大孔径",线缆设计:"隐藏式内置线缆",球管热容量:"12.3MHu 大热容量",透视电流:"最大350mA",AI功能:"AI影像链、AI融合、AI路径预测",工作流:"Allia妙控工作流",研发制造:"中国研发、中国制造"},features:["96cm碳纤维超大孔径","隐藏式线缆，告别束缚干扰","术野单手操控，手到眼到设备到","AI驱动的七参数实时调节","跨平台多源影像融合导航","AI路径预测，预见治疗效果","中国首发，全球推广","全球资源+中国创新"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20healthcare%20Allia%20Celeo%20Max%20Zhuque%20carbon%20fiber%20angiography%20system%20AI%20CMEF%202026%20chinese&image_size=landscape_16_9"],releaseDate:"2026-04",sourceUrl:"https://www.163.com/dy/article/KQH7AUU405568W0A.html",sourceName:"网易新闻 / GE医疗"},{id:"equip-019",brand:"GE医疗",model:"Allia Moveo",name:"Allia Moveo 自由移动机器人DSA",description:"全球首台获FDA批准的无轨自由移动机器人DSA，AI赋能，重新定义介入手术室布局，为空间受限的介入手术室提供全新方案。",parameters:{移动方式:"无轨自由移动",探测器尺寸:"41cm 业内最大平板",视野面积:"增大50%",AI重建:"CleaRecon DL AI锥束CT",运动伪影:"Motion Freeze消除",金属伪影:"MAR金属伪影减少",导航工具:"ASSIST AI增强现实导航",噪音水平:"低于正常对话音量"},features:["业界首款无轨自由移动机架","41cm业内最大平板探测器","快速定位，适应任意空间布局","CleaRecon DL AI驱动重建","消除呼吸和搏动伪影","人体工学设计，操作舒适","ASSIST AI导航工具","获FDA 510(k)和CE认证"],images:["https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20Allia%20Moveo%20robotic%20mobile%20DSA%20FDA%20approved%20AI%20powered%20interventional%20radiology%20system&image_size=landscape_16_9"],releaseDate:"2026-02",sourceUrl:"https://investor.gehealthcare.com/news-releases/news-release-details/ge-healthcare-announces-us-fda-510k-clearance-and-ce-mark-allia",sourceName:"GE Healthcare Investor官网"}],Sr=[{id:"exp-001",name:"葛均波",title:"中国科学院院士",hospital:"复旦大学附属中山医院",department:"心内科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20cardiologist%20professor%20white%20coat%20hospital%20background%20dignified&image_size=square",bio:"著名心血管病专家，中国科学院院士，长江学者特聘教授，国家杰出青年科学基金获得者。主要从事冠心病发病机制及防治研究，在冠脉介入治疗领域有突出贡献。",articleCount:42},{id:"exp-002",name:"凌锋",title:"主任医师、教授",hospital:"首都医科大学宣武医院",department:"神经外科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20female%20neurosurgeon%20professor%20white%20coat%20hospital%20background%20confident&image_size=square",bio:"著名神经外科专家，中国神经介入外科的开拓者之一。在脑血管病的外科及介入治疗方面有深厚造诣，尤其在脊髓血管畸形和脑动脉瘤治疗领域享誉国内外。",articleCount:58},{id:"exp-003",name:"滕皋军",title:"中国科学院院士",hospital:"东南大学附属中大医院",department:"介入科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20interventional%20radiologist%20professor%20white%20coat%20hospital%20background%20scholarly&image_size=square",bio:"著名介入放射学专家，中国科学院院士。在肿瘤介入治疗和非血管介入领域取得多项创新性成果，推动了中国介入放射学的发展和国际影响力提升。",articleCount:67},{id:"exp-004",name:"霍勇",title:"主任医师、教授",hospital:"北京大学第一医院",department:"心内科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20cardiologist%20director%20white%20coat%20hospital%20background%20experienced&image_size=square",bio:"著名心血管介入专家，国家卫生计生委心血管疾病介入诊疗技术管理专家工作组组长。长期从事冠心病介入治疗和心血管疾病防治工作，推动了中国冠脉介入技术的规范化发展。",articleCount:35},{id:"exp-005",name:"刘建民",title:"主任医师、教授",hospital:"海军军医大学长海医院",department:"神经外科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20neurosurgeon%20professor%20military%20hospital%20white%20coat%20background&image_size=square",bio:"著名神经介入专家，在颅内动脉瘤、脑血管畸形等脑血管疾病的介入治疗方面有丰富经验。率先在国内开展多项神经介入新技术，推动了中国神经介入学科的发展。",articleCount:48},{id:"exp-006",name:"王深明",title:"主任医师、教授",hospital:"中山大学附属第一医院",department:"血管外科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20vascular%20surgeon%20professor%20white%20coat%20hospital%20background%20senior&image_size=square",bio:"著名血管外科专家，中华医学会外科学分会血管外科学组组长。在主动脉疾病、外周血管疾病的外科和腔内治疗方面有很深造诣，是中国血管外科学科带头人之一。",articleCount:39},{id:"exp-007",name:"徐克",title:"主任医师、教授",hospital:"中国医科大学附属第一医院",department:"介入科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20interventional%20radiologist%20senior%20professor%20white%20coat%20hospital&image_size=square",bio:"著名介入放射学专家，中华医学会放射学分会介入学组前任组长，在肿瘤介入和血管介入领域有深厚造诣，推动了中国介入放射学的规范化发展。",articleCount:52},{id:"exp-008",name:"张小明",title:"主任医师、教授",hospital:"中国人民解放军总医院",department:"放射诊断科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20radiologist%20professor%20military%20hospital%20white%20coat&image_size=square",bio:"著名介入放射学专家，中国医师协会介入医师分会会长，在肿瘤介入、神经介入等领域有丰富经验，是中国介入医学的重要推动者。",articleCount:61},{id:"exp-009",name:"毛更生",title:"主任医师、教授",hospital:"北京天坛医院",department:"神经介入科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20neurointerventional%20professor%20white%20coat%20hospital%20background&image_size=square",bio:"著名神经介入专家，北京天坛医院神经介入科学科带头人，在颅内动脉瘤、脑血管畸形等疾病的介入治疗方面享誉国内外盛名。",articleCount:45},{id:"exp-010",name:"韩雅玲",title:"主任医师、教授",hospital:"北部战区总医院",department:"心内科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20female%20cardiologist%20director%20white%20coat%20hospital%20background%20experienced&image_size=square",bio:"著名心血管病专家，中国医师协会心血管内科医师分会会长，在冠心病介入治疗和抗栓治疗领域有突出贡献。",articleCount:38},{id:"exp-011",name:"滕建",title:"主任医师、教授",hospital:"上海交通大学医学院附属仁济医院",department:"介入科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20interventional%20oncology%20professor%20white%20coat%20hospital&image_size=square",bio:"著名肿瘤介入专家，中国抗癌协会肿瘤介入专业委员会主任委员，在肝癌、肺癌等实体肿瘤的微创介入治疗有很深造诣。",articleCount:43},{id:"exp-012",name:"吕伟明",title:"主任医师、教授",hospital:"复旦大学附属中山医院",department:"血管外科",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20vascular%20surgeon%20middle%20aged%20white%20coat%20hospital&image_size=square",bio:"血管外科专家，在主动脉夹层、腹主动脉瘤等大血管疾病的腔内和外科治疗方面有丰富经验，中国血管外科的中坚力量。",articleCount:33}],$n=[{id:"ea-001",expertId:"exp-001",title:"中国冠心病介入治疗现状与未来展望",summary:"回顾中国冠脉介入治疗三十年发展历程，分析当前技术应用现状，展望未来发展方向。",content:`## 发展历程回顾

中国冠心病介入治疗始于上世纪80年代，历经三十余年的发展，已成为全球最大的PCI手术国家。

## 现状分析

### 手术量持续增长

近年来，中国PCI年手术量已超过100万例，且仍保持增长态势。

### 技术水平不断提升

- 药物洗脱支架广泛应用
- 功能学评估技术普及
- 腔内影像学指导精准PCI
- 复杂病变处理能力提升

## 未来展望

1. 精准PCI时代的到来
2. 生物可吸收支架的发展
3. AI在冠脉介入中的应用
4. 基层医院介入能力建设`,publishDate:"2024-06-20",views:15680},{id:"ea-002",expertId:"exp-002",title:"脑血管畸形的介入治疗策略选择",summary:"系统阐述脑动静脉畸形、硬脑膜动静脉瘘等脑血管畸形的介入治疗指征、技术要点和策略选择。",content:`## 脑血管畸形分类

脑血管畸形是一类先天性脑血管发育异常疾病，主要包括：
- 脑动静脉畸形（AVM）
- 硬脑膜动静脉瘘（DAVF）
- 海绵状血管畸形
- 毛细血管扩张症

## 介入治疗策略

### 脑动静脉畸形

根据Spetzler-Martin分级选择治疗方案：
- 低分级：可首选手术或SRS
- 中高分级：可考虑联合治疗
- 功能区深部病变：慎重选择

### 硬脑膜动静脉瘘

根据Cognard分级选择入路和栓塞材料。

## 技术进展

- 新型液体栓塞材料
- 血流导向装置应用
- 多模态影像融合导航`,publishDate:"2024-06-15",views:8923},{id:"ea-003",expertId:"exp-003",title:"肝癌介入治疗的精准化与个体化发展",summary:"探讨肝癌介入治疗从标准化向精准化、个体化发展的趋势和技术路径。",content:`## 肝癌治疗现状

原发性肝癌是我国高发恶性肿瘤，介入治疗在中晚期肝癌治疗中占据重要地位。

## 精准介入治疗

### 精准评估

- 影像学精准评估肿瘤负荷
- 肝功能储备精准评估
- 肿瘤生物学行为评估

### 精准治疗

- 超选择性精准栓塞

- 载药微球的个体化选择
- 联合治疗方案的制定

## 未来方向

1. 影像组学与AI辅助决策
2. 免疫介入联合治疗
3. 个体化治疗方案的优化`,publishDate:"2024-06-10",views:11256},{id:"ea-004",expertId:"exp-001",title:"药物洗脱支架时代的支架内再狭窄处理策略",summary:"DES时代支架内再狭窄的发生机制、危险因素及处理策略的最新进展。",content:`## 概述

尽管DES显著降低了再狭窄率，但支架内再狭窄（ISR）仍是临床面临的重要问题。

## 发生机制

- 新生内膜增生
- 支架贴壁不良
- 支架断裂
- 血管壁炎症反应

## 处理策略

### 药物球囊扩张

目前推荐的一线治疗方案，尤其适用于小血管、分叉病变等。

### 再次支架植入

对于严重狭窄、夹层等情况，可考虑新一代DES或生物可吸收支架。

### 其他方法

- 切割球囊
- 准分子激光
- 旋磨技术`,publishDate:"2024-05-28",views:7845},{id:"ea-005",expertId:"exp-004",title:"胸痛中心建设与急性心梗救治体系优化",summary:"中国胸痛中心建设的成果与经验，以及如何进一步优化急性心梗的救治体系。",content:`## 胸痛中心建设成就

中国胸痛中心建设起步于2011年，经过十余年发展，已建立起较为完善的救治网络。

## 关键数据

- 认证胸痛中心数量持续增长
- D-to-B时间显著缩短
- 心梗患者死亡率下降

## 优化方向

1. 基层医院救治能力提升
2. 区域协同救治体系完善
3. 质控体系建设
4. 公众健康教育`,publishDate:"2024-05-20",views:6532},{id:"ea-006",expertId:"exp-005",title:"颅内动脉瘤介入治疗的技术进展与争议",summary:"颅内动脉瘤介入治疗的最新技术进展，以及当前领域存在的热点争议问题。",content:`## 技术进展

### 材料创新

- 血流导向装置（FD）不断迭代
- 新型弹簧圈材料和设计
- 液体栓塞材料改进

### 技术进步

- 3D导航辅助精准栓塞
- AI辅助动脉瘤测量和规划
- 血管内影像指导治疗

## 热点争议

### 未破裂动脉瘤治疗指征

对于小的未破裂动脉瘤，是否需要积极干预仍有争议。

### FD的适应症

血流导向装置的适应症范围仍在探讨中。`,publishDate:"2024-05-15",views:9876},{id:"ea-007",expertId:"exp-007",title:"中国介入放射学发展四十年回顾与展望",summary:"回顾中国介入放射学四十年发展历程，总结成就，展望未来发展方向。",content:`## 发展历程

中国介入放射学起步于上世纪80年代，历经四十年发展，已成为与内科、外科并列的第三大治疗学科。

## 主要成就

### 技术普及

- 从三甲医院普及到地市级医院
- 技术水平显著提升
- 手术量居世界前列

### 学科建设

- 建立完整的培训体系
- 制定多项指南和规范
- 国际影响力不断提升

## 未来展望

1. 精准介入时代的到来
2. AI与介入的深度融合
3. 更多国产创新器械涌现
4. 基层介入能力进一步提升`,publishDate:"2024-06-18",views:13456},{id:"ea-008",expertId:"exp-008",title:"急性缺血性卒中血管内治疗中国经验",summary:"中国急性缺血性卒中血管内治疗的现状、经验与未来发展方向。",content:`## 中国现状

近年来，中国急性缺血性卒中血管内治疗发展迅速，取栓中心数量和手术量快速增长。

## 关键数据

- 取栓中心数量持续增加
- 手术量年增长率超过30%
- 再通率达到国际先进水平

## 中国经验

### 技术创新

- 多种取栓技术联合应用
- 适合中国人群的器械选择
- 麻醉方式优化

### 体系建设

- 卒中中心建设模式
- 区域协同救治网络
- 质控体系建设

## 挑战与对策

1. 地区发展不均衡
2. 时间窗内患者比例低
3. 技术规范化培训不足`,publishDate:"2024-06-16",views:10234},{id:"ea-009",expertId:"exp-009",title:"脑血管畸形介入治疗的技术策略",summary:"脑动静脉畸形、硬脑膜动静脉瘘等脑血管畸形的介入治疗策略选择与技术要点。",content:`## 脑动静脉畸形（AVM）

### 治疗策略

- 小体积、位置表浅：可首选手术或SRS
- 深部、功能区：介入治疗或联合治疗
- 高分级：多学科综合治疗

### 介入技术要点

1. 精准的术前评估
2. 微导管超选到位技术
3. 栓塞材料选择
4. 栓塞程度把握

## 硬脑膜动静脉瘘（DAVF）

### 分型与治疗选择

- 前颅底DAVF：经眼静脉入路
- 海绵窦区DAVF：经岩下窦入路
- 横窦乙状窦区DAVF：经动脉+经静脉联合

### 技术进展

- 新型液体栓塞材料
- 经静脉入路技术普及
- 多模态影像融合导航`,publishDate:"2024-06-14",views:7890},{id:"ea-010",expertId:"exp-010",title:"冠心病抗血小板治疗的精准化探索",summary:"冠心病介入治疗后抗血小板治疗的个体化选择与精准化管理。",content:`## 抗血小板治疗现状

双联抗血小板治疗（DAPT）是冠脉介入术后的标准方案，但如何平衡缺血和出血风险是临床难点。

## 精准化策略

### 基因检测指导

- CYP2C19基因多态性检测
- 指导P2Y12抑制剂选择
- 氯吡格雷慢代谢者换药

### 血小板功能检测

- VerifyNow检测
- 血栓弹力图
- 高反应者调整方案

### 疗程个体化

- 高出血风险：缩短DAPT时间
- 高缺血风险：延长DAPT时间
- 精准评估风险分层

## 未来方向

1. 更多生物标志物指导
2. AI辅助风险预测
3. 新型抗栓药物研发`,publishDate:"2024-06-12",views:6789},{id:"ea-011",expertId:"exp-011",title:"肝癌介入治疗的多模式联合策略",summary:"中晚期肝癌介入治疗与免疫、靶向、放疗等多种治疗手段的联合应用策略。",content:`## 肝癌治疗现状

中晚期肝癌单一治疗效果有限，多模式联合治疗已成为发展趋势。

## 联合治疗策略

### TACE+靶向治疗

- TACE联合索拉非尼/仑伐替尼
- 提高客观缓解率
- 延长患者生存时间

### TACE+免疫治疗

- TACE联合PD-1/PD-L1抑制剂
- 协同增效机制
- 初步结果令人鼓舞

### TACE+放疗

- 门静脉癌栓的联合治疗
- 肝外转移的局部处理
- 提高局部控制率

## 展望

1. 最佳联合方案探索
2. 生物标志物指导治疗
3. 新的联合靶点发现`,publishDate:"2024-06-10",views:8567},{id:"ea-012",expertId:"exp-012",title:"主动脉夹层腔内治疗的技术进展",summary:"Stanford B型主动脉夹层腔内治疗的技术进展与热点问题探讨。",content:`## 技术进展

### 支架技术进步

- 覆膜支架材料和设计改进
- 定制化支架应用增多
- 开窗/分支支架技术成熟

### 腔内技术创新

- 烟囱技术（Chimney）
- 开窗技术（Fenestration）
- 分支支架技术

## 热点问题

### 夹层急性期vs亚急性期治疗时机

目前倾向于亚急性期（发病2-4周）治疗更安全，但复杂高危患者需早期干预。

### 假腔处理策略

- 假腔血栓化的促进
- 远端破口的处理
- 远期假腔重塑

## 未来展望

1. 腔内技术向主动脉弓部拓展
2. 更多创新器械应用
3. 长期随访数据积累`,publishDate:"2024-06-08",views:7234}],Po=[{id:"wxa-001",name:"介入放射学杂志",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20journal%20logo%20interventional%20radiology%20blue%20professional%20modern%20clean%20design&image_size=square",description:"《介入放射学杂志》官方公众号，发布最新学术进展、临床研究、指南共识。",followerCount:85e3,lastUpdate:"2024-06-20"},{id:"wxa-002",name:"神经介入在线",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=neurointerventional%20logo%20brain%20blood%20vessels%20medical%20blue%20purple%20professional%20design&image_size=square",description:"专注神经介入领域的学术交流平台，分享脑血管病介入诊疗新技术、新进展。",followerCount:62e3,lastUpdate:"2024-06-19"},{id:"wxa-003",name:"心血管介入资讯",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cardiology%20logo%20heart%20medical%20red%20blue%20professional%20modern%20clean%20design&image_size=square",description:"心血管介入领域专业资讯平台，提供冠脉介入、电生理、结构性心脏病等最新动态。",followerCount:98e3,lastUpdate:"2024-06-20"},{id:"wxa-004",name:"中国医学影像技术",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20imaging%20technology%20logo%20scan%20blue%20green%20professional%20modern%20design&image_size=square",description:"《中国医学影像技术》杂志官方平台，涵盖放射、超声、核医学等影像技术。",followerCount:72e3,lastUpdate:"2024-06-18"},{id:"wxa-005",name:"血管外科资讯",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vascular%20surgery%20logo%20blood%20vessels%20medical%20red%20professional%20clean%20design&image_size=square",description:"血管外科专业资讯，涵盖主动脉疾病、外周血管疾病、腔内治疗技术等。",followerCount:45e3,lastUpdate:"2024-06-17"},{id:"wxa-006",name:"肿瘤介入在线",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interventional%20oncology%20logo%20cancer%20treatment%20teal%20orange%20medical%20professional%20design&image_size=square",description:"肿瘤介入治疗专业平台，分享TACE、消融、粒子植入等肿瘤介入技术进展。",followerCount:38e3,lastUpdate:"2024-06-16"},{id:"wxa-007",name:"影领医介",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20healthineers%20logo%20blue%20medical%20imaging%20interventional%20professional%20modern%20design&image_size=square",description:"西门子医疗介入诊疗官方公众号「影领医介」，分享DSA产品技术、临床应用、操作技巧和前沿解决方案。",followerCount:52e3,lastUpdate:"2026-04-09"},{id:"wxa-008",name:"飞利浦医疗科技",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20healthcare%20IGTS%20CAS%20logo%20blue%20interventional%20imaging%20medical%20professional%20modern%20design&image_size=square",description:"飞利浦医疗科技官方平台，提供影像引导治疗、Azurion系列DSA技术培训、病例分享及介入治疗最新进展。",followerCount:68e3,lastUpdate:"2026-06-01"},{id:"wxa-009",name:"联影医疗",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20logo%20red%20blue%20chinese%20medical%20DSA%20interventional%20professional%20design&image_size=square",description:"联影医疗官方公众号，发布国产uAngio系列DSA最新技术、临床案例和智慧介入解决方案。",followerCount:85e3,lastUpdate:"2026-06-08"},{id:"wxa-010",name:"GE医疗介入",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20healthcare%20logo%20blue%20interventional%20radiology%20medical%20equipment%20professional%20design&image_size=square",description:"GE医疗介入诊疗官方账号，分享Allia系列、IGS系列血管机技术特点、临床应用培训及全球前沿介入技术。",followerCount:42e3,lastUpdate:"2026-04-15"},{id:"wxa-011",name:"上海介入放射学杂志社",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20journal%20logo%20shanghai%20interventional%20radiology%20blue%20professional&image_size=square",description:"《介入放射学杂志》官方公众号，发布指南共识、临床研究、学术会议通知，核心期刊。",followerCount:95e3,lastUpdate:"2026-01-21"},{id:"wxa-012",name:"国家放射与治疗临床医学研究中心",avatar:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=national%20clinical%20research%20center%20logo%20radiology%20therapy%20medical%20blue&image_size=square",description:"依托复旦大学附属中山医院建设，介入医学领域唯一国家级临床医学研究中心，发布最新研究成果和培训动态。",followerCount:56e3,lastUpdate:"2026-01-29"}],Fr=[{id:"wxart-001",accountId:"wxa-001",accountName:"介入放射学杂志",title:"2024版中国肝癌介入治疗指南解读",summary:"最新版肝癌介入治疗指南发布，本文对指南更新要点进行详细解读。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liver%20cancer%20interventional%20treatment%20guidelines%20medical%20article%20cover%20professional%20blue%20theme&image_size=landscape_4_3",content:`## 2024版中国肝癌介入治疗指南解读

## 文章背景

原发性肝癌是我国发病率第四位、死亡率第二位的恶性肿瘤，每年新发病例约36万例，死亡约32万例，疾病负担居全球之首。其中约85%-90%为肝细胞癌（HCC），多数患者就诊时已属中晚期，失去根治性手术机会。自20世纪80年代我国引入经动脉化疗栓塞（TACE）以来，介入治疗已成为不可手术切除HCC的核心治疗手段。中国抗癌协会肝癌专业委员会、中国医师协会介入医师分会等学术组织在2019版指南基础上，整合了2020-2024年间国内外最新循证医学证据，包括多项中国本土多中心RCT和真实世界研究，于2024年6月正式发布《2024版中国肝癌介入治疗指南》。新版指南在适应症分层、技术规范、联合治疗策略及围手术期管理等方面进行了系统性更新，是我国介入肝病学界里程碑式的纲领性文件。

## 核心内容

### 适应症与分层治疗策略

指南将TACE适应症从传统的BCLC B期扩展至部分早期不适合手术切除或局部消融的患者，并依据Child-Pugh肝功能分级（A/B级）、ECOG体能状态评分、门静脉癌栓（PVTT）分型进行精细分层。对于Child-Pugh A级、肿瘤负荷可评估的患者，推荐TACE作为一线治疗；Child-Pugh B级患者需谨慎评估，建议在保肝治疗基础上行超选择TACE。

### DEB-TACE地位提升

基于PRECISION V、SIRVEN等4项多中心随机对照研究证据，载药微球TACE（DEB-TACE）在客观缓解率（ORR 68.5% vs 52.3%）和安全性方面优于传统cTACE，被新版指南推荐为中期HCC的首选方案之一。指南同时指出，对于富血供、肿瘤直径<5cm的病灶，DEB-TACE优势更为显著。

### 联合治疗新模式

指南强调TACE联合系统治疗（仑伐替尼、索拉非尼、贝伐珠单抗联合阿替利珠单抗）的综合治疗模式。EMERALD-1研究显示，TACE联合度伐利尤单抗+贝伐珠单抗组的中位PFS达15.0个月，显著优于单纯TACE组的8.2个月（HR=0.77），为联合策略提供高级别循证证据。

### TACE抵抗的判定与管理

新版指南首次明确定义"TACE抵抗（TACE failure/refractoriness）"：连续两次规范化TACE后影像学评估为疾病进展（PD），或出现肝内新发病灶、门静脉癌栓进展、肝外转移。一旦判定，应及时转换为系统治疗，避免无效治疗损伤残存肝功能。

### 围手术期管理与随访

指南推荐采用mRECIST标准进行疗效评估，强调动脉期强化为评估核心。术后1、3、6个月行增强CT/MRI随访，后续每3个月随访一次。同时建议建立MDT诊疗模式，整合介入、外科、肿瘤内科、影像、肝病等多学科力量。

## 技术细节与临床应用

技术规范化是新版指南的核心亮点。指南对微导管超选择插管提出明确要求：导管尖端应位于肿瘤供血动脉的段或亚段分支，必要时进入肿瘤滋养血管，以实现"肿瘤去血管化"。术中造影评估应包括供血动脉走行、肿瘤染色范围、动静脉瘘及侧支循环的识别。栓塞终点判定推荐采用"近完全栓塞"标准——肿瘤染色消失、供血动脉血流停滞，但保留载瘤动脉主干，避免过度栓塞导致肝脓肿或肝衰竭。对于合并动静脉瘘的患者，应先使用大颗粒微球（300-500μm）或明胶海绵封堵瘘口，再行化疗栓塞。造影剂用量建议每次TACE不超过200ml，对于肾功能不全患者可采用等渗造影剂并充分水化。术中肝素化（50-100U/kg）和术后抗感染、保肝、镇痛等对症处理是围手术期管理的关键环节。指南同时强调，对于肝段或亚段栓塞，可联合碘化油协同栓塞以提高肿瘤内药物沉积。

## 研究进展与案例分析

国内一项纳入1248例HCC患者的多中心真实世界研究显示，规范TACE联合仑伐替尼组的中位OS达19.6个月，1、2、3年生存率分别为78.5%、52.3%、34.2%，显著优于单纯TACE组（OS 14.2个月）。EMERALD-1全球III期研究纳入660例不可切除HCC，TACE联合度伐利尤单抗+贝伐珠单抗组中位PFS 15.0个月，较单纯TACE组（8.2个月）显著延长（HR=0.77，p<0.001）。LEAP-002研究虽未达到主要终点，但仑伐替尼+帕博利珠单抗联合TACE亚组分析仍显示生存获益趋势。典型病例：58岁男性，乙肝相关HCC，肝右叶S7段单发肿瘤直径4.5cm，Child-Pugh A级，PVTT I型。行3次DEB-TACE（载阿霉素100mg），联合仑伐替尼8mg/d口服。术后6个月mRECIST评估达完全缓解（CR），AFP从术前820ng/ml降至正常范围，随访18个月无复发生存。另一项来自中国肝癌介入联盟的注册研究显示，对于直径>5cm的HCC，DEB-TACE联合微波消融（MWA）的1年OS率达86.7%，显著优于单纯TACE组的62.3%，提示"双介入"联合策略在大肝癌治疗中的潜力。对于TACE抵抗患者，及时转换系统治疗（如阿替利珠单抗+贝伐珠单抗）的中位OS可达14.5个月，较继续TACE组（8.2个月）显著改善。

## 讨论与展望

尽管新版指南取得重大进展，仍存在诸多局限性。首先，我国地域辽阔、医疗资源分布不均，基层医院TACE操作同质化水平有待提高；其次，联合治疗的最佳时机和药物组合仍需进一步研究，"早联合"还是"序贯联合"尚未达成共识；第三，对于肝功能储备差（Child-Pugh C级）患者，介入治疗的空间有限。未来发展方向包括：（1）基于影像组学和液体活检的疗效预测模型；（2）新型载药器械（如放射性微球钇-90 SIRT）的本土化研发；（3）AI辅助的手术规划与疗效评估；（4）建立全国统一的TACE质量控制体系与培训认证制度。

## 总结

2024版中国肝癌介入治疗指南充分体现了精准医学和个体化治疗理念，标志着我国肝癌介入诊疗进入规范化、标准化、多学科融合的新阶段。介入医师应深入理解指南更新要点，在临床实践中结合患者肝功能、肿瘤负荷及全身状态，制定最优化的个体化治疗方案。同时，指南的生命力在于持续更新，期待未来更多高级别循证证据推动指南迭代，最终实现我国肝癌防治水平的整体提升。`,publishDate:"2024-06-20",views:12560,category:"指南共识"},{id:"wxart-002",accountId:"wxa-002",accountName:"神经介入在线",title:"血流导向装置治疗颅内动脉瘤的长期随访结果",summary:"多中心研究显示FD治疗颅内动脉瘤的5年闭塞率达85%以上。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flow%20diverter%20cerebral%20aneurysm%20treatment%20neurointerventional%20medical%20illustration%20professional&image_size=landscape_4_3",content:`## 血流导向装置治疗颅内动脉瘤的长期随访结果

## 文章背景

血流导向装置（Flow Diverter, FD）自2011年FDA批准Pipeline栓塞装置以来，已成为治疗颅内大型、巨大型及宽颈动脉瘤的重要选择。FD通过改变血流动力学促进瘤内血栓形成和瘤颈内皮化，而非传统弹簧圈的直接填塞瘤腔，代表了颅内动脉瘤治疗理念从"解剖填塞"到"血流重塑"的范式转变。第一代Pipeline、第二代Pipeline Flex、第三代Pipeline Flex with Shield技术以及Surpass、FRED、Tubridge等国产/进口装置相继问世，分流密度从最初的28孔/in²提升至32-48孔/in²。本文汇总了PUFS、ASPIRe、SCENT、PREMIERE等多项国际多中心研究及中国Tubridge注册研究的5年长期随访数据，为临床决策提供高级别循证依据。

## 核心内容

### 完全闭塞率的动态演变

国际多中心研究显示，Pipeline治疗后的5年完全闭塞率为85.5%-92.3%，显著优于传统支架辅助栓塞（约55%-65%）。闭塞率随时间推移逐渐升高：术后6个月约35%-45%，1年约60%-70%，3年上升至75%-80%，5年达到85%以上，反映了FD促进瘤颈内皮化的生物学过程需要时间。对于未完全闭塞但形态稳定的动脉瘤，通常无需进一步干预。

### 迟发性破裂与出血风险

随访5年的迟发性动脉瘤破裂率仅为0.6%-1.2%，主要发生在术后6个月内，与抗血小板治疗依从性密切相关。大型/巨大型动脉瘤术后早期破裂风险相对较高，可能与瘤内血栓形成过程中的炎症反应有关，强调术后规范DAPT和血压管理的重要性。

### 缺血性并发症分析

5年累积缺血性卒中发生率约为4%-6%，与术后即刻及亚急性期支架内血栓形成相关。规范双联抗血小板治疗（DAPT，阿司匹林100mg+氯吡格雷75mg/d，至少6个月）可显著降低风险。建议术前行血小板功能检测（如VerifyNow、TEG），对氯吡格雷低反应者换用替格瑞洛。

### 支架内狭窄与新生动脉瘤

症状性支架内狭窄发生率约为3%-5%，多数可通过球囊扩张或药物治疗管理，无需支架再植入。邻近部位新生动脉瘤发生率约为2%，可能与支架内血流动力学改变有关，需长期影像学随访监测。

### 穿支血管梗死风险

FD治疗基底动脉或大脑中动脉动脉瘤时，穿支血管梗死风险显著升高（8%-15%），需严格评估穿支血管解剖和侧支代偿。

## 技术细节与临床应用

FD释放技术要求较高。术前通过3D-DSA测量载瘤动脉远近端直径（通常2.5-5.0mm），选择合适尺寸的装置，长度应覆盖瘤颈两侧至少5mm。释放过程遵循"缓慢推送、逐步展开"原则，必要时配合微导丝按摩或球囊扩张确保支架贴壁。对于迂曲血管（如颈内动脉海绵窦段），可采用"推拉技术"（push-pull）增强贴壁性。术中DynaCT或VasoCT评估贴壁情况至关重要，贴壁不良是支架内血栓和动脉瘤残留的重要危险因素。术后即刻造影可见造影剂滞留，但完全闭塞通常需3-12个月。围手术期DAPT方案：术前3-5天开始阿司匹林100mg/d+氯吡格雷75mg/d，术后维持DAPT 3-6个月，之后单药阿司匹林终身服用。对于多发动脉瘤或长段病变需叠放多枚FD时，重叠区长度建议≥5mm，避免间隙导致血流持续进入瘤囊。分支血管被FD覆盖时（如脉络膜前动脉、眼动脉），多数情况下侧支代偿良好，但需术前评估分支血管供血范围。

## 研究进展与案例分析

PREMIERE研究纳入141例144个大型/巨大型宽颈动脉瘤，3年随访完全闭塞率达84.7%，致残性卒中率2.0%，无动脉瘤破裂。中国Tubridge多中心研究纳入178例，1年完全闭塞率78.3%，缺血并发症6.2%。SCENT研究纳入116例颈内动脉海绵窦段至岩段动脉瘤，1年闭塞率78.9%，主要缺血性卒中率4.3%。一项汇总5项RCT的Meta分析（n=581）显示，FD治疗大型/巨大型动脉瘤的5年完全闭塞率（OKM D级）达88.6%，明显优于传统支架辅助栓塞的62.4%；致残性卒中率5.1%，死亡率1.7%。亚洲人群数据显示，中国患者1年闭塞率较欧美人群略低（72%-78% vs 82%-88%），可能与血管解剖差异和抗血小板反应不同有关。典型病例：62岁女性，左侧颈内动脉眼段宽颈大型动脉瘤（直径12mm），使用Pipeline Flex with Shield（4.5×25mm）单枚释放，贴壁良好。术后3个月MRA示瘤内部分血栓形成，12个月DSA示完全闭塞（O'Kelly-Marotta 4级），载瘤动脉通畅，患者无神经系统症状。术后坚持DAPT 6个月，单药阿司匹林至今，随访5年动脉瘤稳定闭塞。该病例体现了FD治疗大型宽颈动脉瘤的优越疗效和良好安全性。另一例为48岁男性基底动脉尖动脉瘤（直径7mm），因穿支血管丰富，FD治疗风险较高，采用双枚Pipeline叠释放，术后6个月闭塞率达OKM C级，无穿支梗死，体现个体化策略的价值。

## 讨论与展望

尽管FD疗效显著，仍面临诸多挑战：（1）抗血小板反应个体差异大，缺乏精准预测工具；（2）分支动脉开口附近动脉瘤的治疗仍受限；（3）远期动脉瘤复发和新生动脉瘤形成需持续监测；（4）治疗费用高昂，限制了基层普及。未来发展方向包括：抗血小板药物基因指导个体化用药；抗凝涂层或表面改性装置（如Shield技术）减少DAPT依赖；生物可吸收FD实现"治疗完成后消失"；血管内仿真与AI规划优化装置选择和释放策略。

## 总结

血流导向装置治疗颅内大型、巨大型及宽颈动脉瘤具有良好的长期疗效和安全性，5年随访数据支持其作为首选治疗方案之一。临床医师应严格把握适应症，重视术前评估、术中精细操作和术后抗血小板管理，定期随访DSA或MRA，及时发现并处理并发症。随着装置技术迭代和围手术期管理优化，FD的应用范围有望进一步拓展，为更多复杂颅内动脉瘤患者带来治愈希望。`,publishDate:"2024-06-19",views:8932,category:"临床研究"},{id:"wxart-003",accountId:"wxa-003",accountName:"心血管介入资讯",title:"IVUS vs OCT：冠脉介入影像指导的选择策略",summary:"血管内超声和光学相干断层扫描各有何优势？如何根据临床情况选择？",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=IVUS%20OCT%20coronary%20imaging%20comparison%20intravascular%20ultrasound%20optical%20coherence%20tomography&image_size=landscape_4_3",content:`## IVUS vs OCT：冠脉介入影像指导的选择策略

## 文章背景

血管内超声（IVUS）和光学相干断层扫描（OCT）是冠脉介入术中两种最重要的腔内影像学技术，被誉为PCI的"第三只眼"。IVUS利用20-60MHz超声波成像，穿透深度大但分辨率相对较低；OCT利用近红外光（中心波长约1300nm）成像，分辨率高达10-15μm，但穿透深度有限。自20世纪90年代IVUS应用于临床、2010年OCT获FDA批准以来，腔内影像学已从研究工具发展为优化PCI的核心手段。一系列里程碑研究（ADAPT-DES、ILUMIEN III/IV、OPINION、FLAVOUR等）证实，相比单纯造影指导，腔内影像指导可显著降低支架内血栓、靶病变血运重建和心源性死亡风险。然而，两种技术各有优势与局限，如何根据病变特征和临床场景合理选择，是介入心脏病学的重要课题。

## 核心内容

### 分辨率与穿透深度的权衡

OCT轴向分辨率约10-15μm，是IVUS（约100-150μm）的10倍，可清晰识别内膜增生、纤维帽厚度、巨噬细胞浸润等细微结构，是评估易损斑块的首选。但OCT组织穿透深度仅1-2mm，对深部斑块和正性重构评估受限；IVUS穿透深度可达4-8mm，更适合评估斑块负荷、外弹力膜和正性重构。

### 支架优化应用

OCT在支架贴壁不良（距离>200μm）、支架边缘夹层（位于支架两端2mm内）和组织脱垂的检测方面优于IVUS，是支架优化置入（PCI optimization）的首选工具。ILUMIEN IV研究显示，OCT指导PCI的术后最小支架面积（MSA）较造影指导显著增大（5.94 vs 5.49mm²）。IVUS在评估支架膨胀不全和深层钙化影响方面仍有优势。

### 钙化病变评估

OCT可精确测量钙化最大厚度、角度和长度，钙化厚度>0.5mm提示需旋磨预处理；IVUS则更擅长评估钙化病变的总体积和深度，但无法区分浅表与深层钙化。对于严重环形钙化（角度>270°），两种技术均提示需旋磨或血管内碎石（IVL）预处理。

### 左主干病变评估

IVUS是左主干病变评估的金标准。MAIN-COMPARE研究10年随访显示，IVUS指导的左主干PCI较造影指导显著降低死亡率（4.5% vs 16.0%）。左主干MSA<6.0mm²（女性）或<7.5mm²（男性）提示缺血，需进一步干预。OCT在左主干评估中因血流冲洗困难应用受限。

### 成像速度与操作要求

OCT需要球囊阻断血流并注射造影剂冲洗（通常3-4ml/s，0.5-1.0ml），操作相对复杂，左前降支和回旋支开口处冲洗困难；IVUS无需阻断血流，操作更简便，但图像质量受导管伪影影响。

## 技术细节与临床应用

IVUS导管常用Opticross（Boston）、Eagle Eye（Philips）、ViewIT（Terumo）等，频率40-60MHz，回撤速度0.5-1.0mm/s。OCT导管以Dragonfly（Abbott）为代表，回撤速度达20-40mm/s，2-3秒内完成15-30mm血管段扫描。术中操作要点：IVUS应从病变远端10mm回撤至主动脉窦部，确保覆盖支架两端；OCT需选择合适尺寸的阻断球囊（通常较血管直径小0.5mm），避免过度阻断导致血管痉挛。后处理测量关键参数包括最小管腔面积（MLA）、斑块负荷（PB%）、最小支架面积（MSA）、支架膨胀率、贴壁不良率和边缘夹层检出。建议遵循ILUMIEN共识定义的优化标准：MSA>血管参考面积80%、无贴壁不良、无边缘夹层。

## 研究进展与案例分析

ADAPT-DES研究纳入8583例患者，IVUS指导组1年支架内血栓发生率显著低于造影指导组（0.5% vs 1.0%）。FLAVOUR研究纳入1684例中度狭窄（40%-70%）患者，FFR或IVUS指导的干预策略1年临床结局相当。ILUMIEN III研究比较OCT与IVUS指导PCI，两者术后MSA相当（5.79 vs 5.89mm²），但OCT组支架贴壁不良率更低。最新ILUMIEN IV研究纳入2529例患者，OCT指导组较造影指导组术后MSA显著增大（5.94 vs 5.49mm²），靶病变失败率有降低趋势。韩国CVOFT注册研究显示，IVUS指导的左主干PCI 5年MACE发生率13.2%，显著低于造影指导组的23.7%。典型病例：65岁男性，前降支近段严重狭窄伴重度钙化，造影指导显示支架置入后残余狭窄<20%。OCT评估发现支架近端贴壁不良（最大距离350μm）及深层钙化导致膨胀不全（MSA 4.2mm²，参考面积6.5mm²，膨胀率65%）。遂行非顺应性球囊高压扩张（18atm）后复查OCT示MSA提升至5.8mm²，贴壁良好。术后1年随访无心绞痛复发，CTA示支架通畅。该病例凸显OCT在识别造影"看似满意"的支架优化不足方面的价值。另一例为58岁女性左主干分叉病变，IVUS评估主支斑块负荷78%，采用DK-Crush技术双支架置入，IVUS指导最终对吻扩张后MSA 7.2mm²，3年随访无心源性事件。

## 讨论与展望

当前腔内影像学应用仍面临挑战：（1）我国IVUS/OCT普及率不足30%，远低于日韩；（2）检查费用增加和操作时间延长限制推广；（3）两种技术的整合需术者具备丰富经验。未来方向包括：IVUS-OCT一体化导管（如Novasight系统）同时获取深部和高分辨率图像；AI自动斑块分析和支架优化评估；与FFR/iFR血流储备功能学整合的"形态-功能"联合评估；可降解支架（BRS）随访专用算法优化。

## 总结

IVUS和OCT各有优势，并非相互替代而是互补关系。介入医师应根据病变类型、临床目标和操作条件灵活选择：左主干、严重钙化、参考血管直径>3.5mm优选IVUS；支架优化、分叉病变边支评估、易损斑块识别优选OCT；复杂分叉病变可联合应用。掌握腔内影像学已成为现代介入心脏病学医师必备的核心技能，有望推动我国PCI从"解剖学成功"迈向"生理学和预后成功"。`,publishDate:"2024-06-20",views:15234,category:"技术讨论"},{id:"wxart-004",accountId:"wxa-001",accountName:"介入放射学杂志",title:"载药微球TACE治疗肝癌的疗效分析",summary:"回顾性分析200例载药微球TACE治疗的肝细胞癌患者临床数据。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=drug%20eluting%20beads%20TACE%20liver%20cancer%20treatment%20interventional%20oncology%20medical%20research&image_size=landscape_4_3",content:`## 载药微球TACE治疗肝癌的疗效分析

## 文章背景

载药微球经动脉化疗栓塞（DEB-TACE）是近年来肝癌介入治疗领域的重要技术革新。传统cTACE采用碘化油混合化疗药物乳剂加明胶海绵颗粒栓塞，存在药物释放不可控、全身毒副作用大、栓塞不均匀等问题。DEB-TACE采用可加载阿霉素、伊立替康等化疗药物的聚乙烯醇（PVA）或三丙烯酸明胶微球（如DC Bead、HepaSphere、CalliSphere），微球直径通常为100-300μm、300-500μm或500-700μm，实现化疗药物的缓慢、持续释放，提高肿瘤局部药物浓度（可达全身血浆浓度的10-100倍），同时降低全身毒副作用。本研究回顾性分析200例接受DEB-TACE治疗的肝细胞癌患者数据，评估其临床疗效和安全性，并与同期200例cTACE患者进行对照分析。

## 核心内容

### 客观缓解率显著提升

根据mRECIST标准，DEB-TACE组1个月客观缓解率（ORR）为68.5%（CR 32.5%+PR 36.0%），显著高于cTACE组的52.3%（CR 22.0%+PR 30.3%）（p<0.05）。3个月ORR分别为72.1%和54.8%，差异持续存在。

### 疾病控制率与生存获益

DEB-TACE组疾病控制率（DCR）达85.2%，中位无进展生存期（PFS）为8.7个月，较cTACE组（PFS 6.4个月）延长2.3个月（HR=0.74，95%CI 0.61-0.89）。中位总生存期（OS）分别为18.2个月和14.5个月（p=0.032）。

### 安全性优势

DEB-TACE术后栓塞后综合征（腹痛、发热、恶心呕吐）发生率明显降低（45% vs 68%），其中重度疼痛发生率仅8% vs 22%。恶心、呕吐等全身化疗反应显著减少，阿霉素血浆Cmax较cTACE降低约70%。

### 肝功能保护

DEB-TACE组术后1周ALT、TBil升高幅度明显小于cTACE组（ALT峰值186 vs 324 U/L），对残存肝功能的损伤更小，术后肝功能恢复时间缩短2-3天。

### 重复治疗耐受性

多次DEB-TACE治疗（平均2.8次/例）患者耐受性良好，未出现累积性肝毒性，而cTACE组随治疗次数增加，肝功能不全发生率上升。

## 技术细节与临床应用

操作流程：常规右侧股动脉Seldinger穿刺，5F Cobra或Yashiro导管行腹腔干、肠系膜上动脉造影，明确肿瘤供血动脉及门静脉血流。置换2.7F或1.9F微导管超选择至肿瘤供血亚段动脉，经微导管缓慢注入载药微球（DC Bead载阿霉素75-150mg，注射时间10-15分钟，每2-3ml微球+5ml非离子造影剂混合）。注射过程密切监测血流速度，当血流明显减慢时停止注射。栓塞终点为供血动脉血流停滞、肿瘤染色消失，但保留载瘤动脉主干。微球直径选择原则：肿瘤<3cm或亚段栓塞选用100-300μm；3-5cm或段栓塞选用300-500μm；>5cm或多发肿瘤选用500-700μm。对于多发肿瘤或肝段多发子灶，可采用"段性栓塞"策略，将微导管置于肝段动脉，实现整段栓塞。术中需警惕异位栓塞（如肺、脑），注射前确认无肝动脉-门静脉瘘或肝静脉瘘。术后给予水化（生理盐水1500-2000ml）、保肝（还原型谷胱甘肽、多烯磷脂酰胆碱）、镇痛（非甾体抗炎药或弱阿片类）、止吐（昂丹司琼）等对症处理，监测肝肾功能和血常规，术后24-48小时观察栓塞后综合征。

## 研究进展与案例分析

PRECISION V多中心RCT研究（n=212）显示，DEB-TACE组6个月ORR达51.6%，显著高于cTACE组的43.5%，且严重肝毒性发生率更低。本研究200例患者中，BCLC B期占62%，C期占28%，A期占10%。亚组分析显示，对于肿瘤直径>5cm的患者，DEB-TACE的ORR仍可达61.2%，显示出对大肿瘤的较好控制效果；对于乙肝相关HCC（占78%），DEB-TACE联合恩替卡韦抗病毒组1年OS率达82.3%。意大利STRIDE研究显示，DEB-TACE联合阿替利珠单抗+贝伐珠单抗组的中位PFS达13.2个月，显著优于单纯DEB-TACE的7.8个月。国内一项真实世界研究纳入528例HCC患者，比较DC Bead与CalliSphere两种载药微球的疗效，1年ORR分别为65.8%和69.2%，安全性相当。典型病例：54岁男性乙肝相关HCC，肝右叶多发肿瘤（最大6.2cm），Child-Pugh A级。行3次DEB-TACE（DC Bead 300-500μm载阿霉素100mg），术后1个月ORR达PR，3个月AFP从术前1260ng/ml降至85ng/ml，6个月达CR，随访2年无复发生存。另一例为67岁女性丙肝相关HCC，单发肿瘤3.5cm，采用CalliSphere载阿霉素80mg一次栓塞后3个月达CR，1年无复发，体现了不同微球平台的可替代性。

## 讨论与展望

DEB-TACE虽优势明显，但仍存在局限：（1）对于乏血供肿瘤或合并严重动静脉瘘者效果欠佳；（2）微球直径选择缺乏个体化标准；（3）药物洗脱动力学在体内存在差异；（4）治疗费用较cTACE高约2-3倍。未来方向包括：新型可降解载药微球（如透明质酸微球）研发；载药微球联合免疫检查点抑制剂的协同治疗策略；基于灌注影像和AI的个体化微球直径选择；靶向药物（如雷帕霉素）加载微球的探索。

## 总结

本研究证实载药微球TACE在客观缓解率、疾病控制率、安全性及肝功能保护方面均优于传统cTACE，应作为中期肝细胞癌的标准介入治疗方案之一在临床推广。临床应用中需根据肿瘤大小、血供特点和肝功能状态合理选择微球直径和载药剂量，规范超选择插管和栓塞终点判定，建立规律的影像学随访体系，实现个体化、精准化的肝癌介入治疗。同时，应重视围手术期肝功能保护和并发症预防，联合系统治疗以进一步改善患者长期生存。多学科协作与全程管理是提升整体疗效的关键所在。`,publishDate:"2024-06-18",views:6789,category:"临床研究"},{id:"wxart-005",accountId:"wxa-004",accountName:"中国医学影像技术",title:"AI在医学影像诊断中的应用现状与挑战",summary:"人工智能技术在放射影像领域的应用进展，以及面临的技术和监管挑战。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20artificial%20intelligence%20medical%20imaging%20diagnosis%20technology%20futuristic%20healthcare&image_size=landscape_4_3",content:`## AI在医学影像诊断中的应用现状与挑战

## 文章背景

人工智能（AI）技术，特别是深度学习算法，正在深刻改变医学影像诊断的格局。自2012年AlexNet在ImageNet竞赛中取得突破以来，卷积神经网络（CNN）、U-Net、Transformer等架构相继在医学影像分割、检测、分类任务中超越传统方法。2017年FDA批准首个AI影像诊断产品，截至2024年全球已有500余款AI医疗器械获批，我国NMPA批准的相关产品超过80款。在介入医学领域，AI不仅可以辅助影像判读，还能在手术规划、术中导航、疗效评估等环节发挥重要作用。本文系统梳理了AI在医学影像诊断中的最新进展，分析了当前面临的技术瓶颈和监管挑战，并展望了未来发展方向。

## 核心内容

### 影像识别准确率突破

基于卷积神经网络（CNN）的肺结节检测算法在LUNA16等公开数据集上的敏感性已达95%以上，假阳性率<1.0/scan，部分表现已超过资深放射科医师。Google DeepMind的乳腺癌检测系统在英美队列中AUC达0.89-0.91，假阳性率降低5.7%，假阴性率降低9.4%。国内推想、依图、联影等企业的肺结节AI产品已在全国2000余家医院应用。

### 介入手术导航辅助

AI可实现CT/MR与实时透视影像的自动配准融合，为TACE、消融等介入手术提供三维路径规划。西门子AI-Rad Companion、飞利浦IntelliSpace AI等平台可自动分割肝段、识别肿瘤供血动脉，缩短术前规划时间40%-60%。术中AI实时识别穿刺路径上的危险结构（大血管、脏器），降低并发症风险。

### 疗效预测模型

利用影像组学（Radiomics）和深度学习构建的疗效预测模型，可在术前预测TACE、消融等治疗的应答率。国内研究显示，基于动脉期CT影像组学特征构建的TACE应答预测模型AUC达0.82-0.88，可在术前识别"应答良好"和"应答不佳"患者，指导个体化治疗决策。液体活检（ctDNA）联合影像组学的多模态模型预测性能进一步提升。

### 实时剂量优化

AI驱动的智能曝光控制技术可根据患者体型、解剖部位和病变特征实时调节DSA曝光参数（kV、mA、脉冲宽度），在保证图像质量的同时降低辐射剂量30%-50%。西门子Care Dose、飞利浦DoseWise、GE AutoImage等已集成AI算法，实现"像素级"剂量优化。

### 监管与标准化挑战

目前AI医疗器械的审批标准尚不统一，FDA的SaMD、欧盟MDR、我国NMPA的审批路径存在差异。算法的可解释性（"黑箱"问题）、数据隐私保护和临床验证规范性仍是行业面临的重要挑战。

## 技术细节与临床应用

AI医学影像产品的技术栈通常包括：数据标注（专家勾画）、模型训练（迁移学习+微调）、模型验证（多中心外部验证）、临床部署（边缘计算或云端推理）。常用架构：图像分割采用U-Net、nnU-Net、DeepLab；分类采用ResNet、EfficientNet、Vision Transformer；目标检测采用YOLO、RetinaNet。数据量要求：分割任务通常需500-2000例标注数据，分类任务需2000-10000例。临床应用中，AI可嵌入PACS/RIS工作流，实现"自动触发、后台运行、结果推送"的无缝集成。介入手术机器人（如CorPath、Sensei）结合AI视觉识别，可实现导管/导丝的半自动操控，减少术者辐射暴露和操作疲劳。模型部署需考虑推理速度（GPU推理通常<1秒）、数据安全（脱敏传输、联邦学习）和系统集成（DICOM、HL7、FHIR标准）。监管层面，我国NMPA将AI医疗器械按风险分级管理，三类器械需提交多中心临床验证数据，算法更新需重新备案。医疗机构应建立AI使用规范，明确"AI辅助、医师决策"的责任边界。

## 研究进展与案例分析

斯坦福大学CheXNet在14万张胸片上训练，对14种疾病的诊断准确率超过4名放射科医师平均。国内联影uAI平台集成30余个AI算法，覆盖胸部、头颈、心血管等9大部位。Google与DeepMind合作的乳腺癌AI在英美德克萨斯大学队列中AUC达0.91，敏感性91.3%，特异性85.7%。一项国内多中心RCT显示，AI辅助TACE手术规划使超选择插管成功率从76%提升至91%，平均手术时间缩短25分钟。典型病例：48岁男性，体检胸部CT示右肺上叶8mm混合磨玻璃结节。AI系统自动检测并标注结节，测量体积（216mm³）、密度（-450HU）、形态学特征（分叶征、毛刺征阳性），基于多中心训练的恶性预测模型给出恶性概率87%。患者行胸腔镜下肺段切除，病理证实为微浸润腺癌（MIA）。该病例展示了AI在早期肺癌筛查中的"筛-诊-风险分层"一体化价值。另一项多中心研究显示，AI辅助阅片使放射科医师单例阅片时间从平均8分钟降至4.2分钟，工作量降低47.5%。在介入领域，某中心使用AI辅助TACE疗效预测模型，术前AUC达0.85，准确识别"应答不佳"患者并提前转为联合系统治疗，1年OS提升12%。

## 讨论与展望

AI医学影像仍面临多重挑战：（1）泛化能力不足——单一中心训练模型在其他设备/人群表现下降10%-20%；（2）缺乏前瞻性RCT证实临床获益；（3）医疗责任归属不清；（4）数据孤岛和标注成本高。未来方向包括：联邦学习实现多中心数据"可用不可见"；自监督学习减少对标注依赖；多模态融合（影像+临床+基因组）；大语言模型（LLM）辅助报告生成和临床决策；持续学习算法实现模型自适应更新。

## 总结

AI在医学影像诊断中的应用前景广阔，已从实验室走向临床，在肺结节、乳腺癌筛查、介入导航、剂量优化等场景展现显著价值。然而，要在算法透明度、临床验证规范、监管框架和责任认定等方面持续完善，才能真正实现人机协作的智能化介入诊疗。临床医师应主动拥抱AI技术，将其作为"第二大脑"提升诊疗效率和精准度，同时保持医学的人文关怀和最终决策权。`,publishDate:"2024-06-17",views:9876,category:"技术前沿"},{id:"wxart-006",accountId:"wxa-005",accountName:"血管外科资讯",title:"主动脉夹层腔内治疗的十年进展",summary:"从第一代覆膜支架到当今的定制化支架，主动脉夹层腔内治疗的发展历程。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aortic%20dissection%20endovascular%20treatment%20stent%20graft%20vascular%20surgery%20medical%20progress&image_size=landscape_4_3",content:`## 主动脉夹层腔内治疗的十年进展

## 文章背景

主动脉夹层是一种危及生命的急危重症，年发病率约2.6-3.5/10万，急性Stanford A型夹层若不治疗48小时死亡率高达50%，B型夹层5年生存率仅50%-60%。传统开放手术创伤大、并发症多、死亡率高（A型8%-26%，B型5%-15%）。1999年Dake和Nienaber同期报道胸主动脉腔内修复术（TEVAR）治疗B型夹层，开创了腔内治疗新时代。过去十年间，从第一代直筒型覆膜支架到如今的定制化、分支型、可调弯支架，主动脉夹层的腔内治疗经历了革命性发展。我国于2006年首批国产支架（Talent、Hercules）上市，目前年TEVAR手术量超过15000例，居全球首位。本文系统回顾十年进展，并展望未来方向。

## 核心内容

### 适应证不断扩展

TEVAR适应证从最初的无并发症B型夹层，扩展至复杂B型夹层（破裂、灌注不良、难治性疼痛、高血压难以控制）、部分A型夹层杂交手术、慢性夹层动脉瘤、外伤性主动脉破裂等。STABLE、INSTEAD-XL等研究证实，对于无并发症B型夹层，TEVAR较最优药物治疗5年生存率（97% vs 82%）和主动脉特异性死亡率（4% vs 20%）显著改善，推动了"预防性TEVAR"理念。

### 支架技术迭代升级

第一代直筒型支架（Talent、Zenith TX2）→锥形支架→分支型支架（Castor、WeFlow-Arch）→可调弯支架→个性化3D打印支架。国产Castor分支型支架可同时重建左锁骨下动脉，将锚定区前移至左颈总动脉，扩展了近端锚定区。新一代支架采用更细的输送系统（18F-22F）、更柔软的支架骨架和更精准的释放机制。

### 近端锚定区管理

烟囱技术（chimney）、潜望镜技术（periscope）、开窗技术和分支支架的应用，解决了近端锚定区不足（<15mm）的难题。烟囱技术适用于急诊，分支支架适用于择期。联合技术（如烟囱+开窗）可处理弓部分支多血管受累的复杂病例。中国多中心研究显示，双烟囱技术技术成功率97.5%，1年内漏发生率8.2%。

### 假腔血栓化与主动脉重塑

长期随访显示，TEVAR术后假腔完全血栓化率可达70%-85%，胸主动脉真腔扩大率60%-75%，腹主动脉假腔血栓化率较低（30%-45%）。主动脉良性重塑是手术成功的重要标志，假腔部分血栓化反而增加破裂风险。

### 并发症防控进展

脊髓缺血（2%-8%）、内漏（10%-20%）、逆行A型夹层（1%-3%）、支架移位（2%-5%）等严重并发症发生率随技术进步和手术规范化显著下降。预防脊髓缺血措施：保留左锁骨下动脉、避免长段覆盖（>20cm）、术前脑脊液引流、维持术中术后血压（MAP>90mmHg）。

## 技术细节与临床应用

术前评估包括全程主动脉CTA（层厚0.625mm）、测量破口位置、近远端锚定区直径（通常20-40mm）、锚定区长度、入路血管（股动脉、髂动脉）条件。支架选择遵循"oversize 5%-10%"原则，避免过大导致内漏或逆行夹层。常用支架：Valiant Captivia（Medtronic）、Zenith TX2（Cook）、Hercules（MicroPort）、Ankura（Lifetech）。术中操作要点：全麻下右侧股动脉切开入路，左肱动脉穿刺标记左锁骨下动脉开口；超硬导丝建立轨道；支架沿导丝送入预定位置，控制性降压（SBP 90mmHg）后快速释放；术中造影评估封堵效果和分支血管通畅性。复杂病例可联合去分支技术（颈动脉-锁骨下动脉旁路）扩展锚定区。对于慢性夹层动脉瘤或假腔瘤样扩张，需评估整体主动脉直径变化，必要时联合腹主动脉开窗支架或弹簧圈栓塞假腔。术中注意避免覆盖过多肋间动脉（T8-L1水平），预防脊髓缺血。

## 研究进展与案例分析

STABLE研究纳入86例复杂B型夹层，5年随访假腔血栓化率78.6%，免于再次干预率62.4%。INSTEAD-XL研究5年随访显示，TEVAR组主动脉特异性生存率97%，显著优于最优药物组的82%。中国VIRTUS注册研究纳入210例Castor分支支架患者，技术成功率98.1%，1年内漏率3.3%，无逆行A型夹层。STABLE-2研究纳入80例复杂B型夹层，TEVAR组5年生存率94.7%，假腔完全血栓化率76.3%，显著优于药物组。典型病例：46岁男性，突发胸背痛，CTA示Stanford B型夹层，破口位于左锁骨下动脉后5mm，近端锚定区不足。行左颈总动脉-左锁骨下动脉人工血管旁路+TEVAR（Castor分支支架，30-28mm×200mm），术中造影示破口完全封堵，左锁骨下动脉分支血流通畅。术后1年CTA示假腔完全血栓化，胸主动脉真腔扩大45%，无内漏。患者恢复正常工作，随访3年无并发症。另一例为52岁男性复杂B型夹层合并下肢缺血，急诊行TEVAR联合主动脉开窗（原位开窗技术重建腹腔干和肠系膜上动脉），术后下肢血流恢复，3个月CTA示内脏动脉通畅，假腔部分血栓化，体现复杂夹层腔内治疗的全流程管理。

## 讨论与展望

TEVAR虽进展显著，仍面临挑战：（1）慢性夹层远期假腔扩张和破裂风险；（2）腹主动脉段假腔难以完全血栓化；（3）年轻患者支架长期耐久性未知；（4）弓部全腔内修复技术复杂。未来方向包括：3D打印定制支架实现"量体裁衣"；生物可吸收支架应用于年轻患者；AI辅助的手术规划和支架尺寸预测；内漏的腔内封堵新技术（如Onyx胶、弹簧圈）；远程随访和真实世界大数据研究。

## 总结

主动脉夹层腔内治疗已进入精准化、个体化时代，技术成熟度和器械创新不断突破。TEVAR显著改善了B型夹层的预后，使高龄、高危患者获得手术机会。临床应用中需严格把握适应症，注重术前精准评估、术中精细操作和术后规范随访。未来随着材料学、分支支架技术和AI辅助的发展，全腔内修复主动脉弓部病变有望成为现实，推动主动脉疾病治疗向更微创、更精准的方向演进。`,publishDate:"2024-06-15",views:7654,category:"综述"},{id:"wxart-007",accountId:"wxa-006",accountName:"肿瘤介入在线",title:"微波消融治疗肺磨玻璃结节的临床价值",summary:"对于早期肺癌或癌前病变的肺磨玻璃结节，微波消融是一种有效的局部治疗选择。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=microwave%20ablation%20lung%20nodule%20cancer%20treatment%20interventional%20oncology%20minimally%20invasive&image_size=landscape_4_3",content:`## 微波消融治疗肺磨玻璃结节的临床价值

## 文章背景

肺磨玻璃结节（Ground-Glass Nodule, GGN）是早期肺癌或癌前病变的重要影像学表现，尤其以纯磨玻璃结节（pGGN）和混合磨玻璃结节（mGGN）最受关注。随着低剂量CT（LDCT）肺癌筛查的普及，GGN检出率从0.2%上升至2.3%-9.2%，其中约20%-30%为恶性（原位腺癌AIS、微浸润腺癌MIA、浸润性腺癌IAC）。外科手术仍是早期肺癌的金标准，但对于无法耐受手术或拒绝手术的患者，以及双肺多发结节无法全部切除者，经皮热消融（射频RFA、微波MWA、冷冻冷冻消融）提供了一种微创、有效的局部治疗选择。微波消融（MWA）因升温快、不受组织阻抗影响、可同时多点消融等优势，逐渐成为肺部消融的首选技术。本文结合国内外文献，系统分析MWA治疗肺GGN的临床价值和技术要点。

## 核心内容

### 适应症明确化

MWA适用于：（1）直径≤3cm的周围型pGGN或mGGN，距胸膜或大血管>1cm；（2）心肺功能差（FEV1<1.0L或DLCO<50%）、高龄（>75岁）无法耐受手术；（3）双肺多发结节无法手术全部切除；（4）拒绝手术或术后复发患者。NCCN指南及中国《肺部结节经皮热消融专家共识》均将上述情形列为MWA的适应症。

### 局部控制率良好

多项研究显示，MWA治疗≤2cm pGGN的完全消融率（CR）达90%-95%，1年局部无进展生存率85%-92%，3年局部控制率75%-85%。对于2-3cm的GGN，CR降至80%-88%。mGGN因含实性成分，消融难度略大，需扩大消融范围。

### 并发症可控

主要并发症包括：气胸（15%-25%，需引流者<5%）、胸腔积液（5%-10%）、咯血（3%-8%）、肺部感染（2%-5%）。绝大多数可保守处理，严重并发症（如支气管胸膜瘘、肺脓肿）发生率<2%。消融后综合征（低热、乏力）约30%，多于1周内自限。

### 影像随访策略

术后推荐3、6、12个月行薄层CT（1mm层厚）随访，此后每6-12个月随访一次。消融区呈"空腔-实变-缩小-瘢痕"动态演变，评估时需与"肿瘤残留/复发"鉴别。PET-CT有助于鉴别瘢痕与复发，建议术后6个月后行PET-CT评估。

### 与手术对比

对于严格选择的早期GGN患者，MWA的3年总生存率（92%-96%）和肿瘤特异性生存率（95%-98%）与亚肺叶切除相当，但创伤更小、恢复更快（住院2-4天 vs 5-8天）、肺功能保留更好。

## 技术细节与临床应用

MWA原理是利用915MHz或2450MHz微波电磁场使组织内水分子高速旋转摩擦产热，瞬间达到60-100℃的凝固性坏死温度。常用设备：康友KY-2000（2450MHz）、ECO CET-100、Medtronic Emprint（导航微波）。消融针通常采用15G或16G水冷循环微波天线，单针消融范围可达3-5cm。术前基于CT三维重建规划穿刺路径，避开大血管、支气管和叶间裂。局麻+静脉镇静下，CT引导下分步进针，针尖达病灶远端5-10mm。消融参数：功率40-100W，时间3-10分钟，消融范围需超出病灶边缘至少5-10mm（"安全边界"）以确保完全覆盖。术中CT实时监测气胸和消融区"气泡化"现象，气泡化范围应覆盖病灶及安全边界。近年来，三维重建和AI辅助穿刺路径规划技术（如Philips Percunav、CASC导航机器人）的应用进一步提高了穿刺精准度（误差<3mm）和手术安全性。对于邻近胸膜或大血管的病灶，可采用人工气胸或水分离技术保护周围脏器。

## 研究进展与案例分析

国内一项多中心研究纳入384例GGN患者425个结节，MWA后1、2、3年局部控制率分别为92.3%、86.5%、80.7%，3年OS 95.2%。Wolf等报道MWA治疗50例I期非小细胞肺癌，中位生存期35个月，3年OS 56%。一项意大利多中心研究纳入102例不能手术的早期肺癌，MWA后1、2、3年OS分别为96.2%、86.4%、71.5%，局部进展率14.3%。Yang等对比MWA与RFA治疗肺GGN的疗效，MWA组完全消融率（94.5%）显著高于RFA组（85.2%），且单次消融成功率更高，消融时间更短（4.2 vs 8.5分钟）。典型病例：72岁女性，双肺多发GGN，右肺上叶mGGN直径1.8cm（实性成分0.5cm），左肺下叶pGGN直径1.2cm。心肺功能差（FEV1 0.9L），无法耐受同期双侧手术。分次行CT引导MWA（右肺100W×5min，左肺80W×4min），消融范围覆盖病灶外5mm。术后气胸少量，未引流。3个月CT示双肺消融区呈空腔改变，6个月缩小，12个月瘢痕化，PET-CT无代谢活性。随访3年无局部复发，肺功能稳定。该病例展示了MWA在多发GGN保留肺功能方面的优势。另一例为68岁男性右肺上叶原位腺癌（直径1.5cm），MWA 90W×4min后5年无复发，肺功能保留良好，证实MWA在早期肺癌根治性治疗中的长期有效性。

## 讨论与展望

MWA治疗GGN仍存在局限：（1）缺乏长期（>5年）随访的RCT证据；（2）GGN低密度特点使消融边界判定困难；（3）靠近大血管或心脏的病灶消融受限（热沉效应）；（4）术后瘢痕与复发的影像鉴别挑战。未来方向包括：磁导航或机器人辅助精准定位；电磁/光学导航支气管镜联合消融实现"诊断-消融一体化"；新型多模态影像（CEUS、PET-MR）评估疗效；组织间质增强消融技术（如纳米粒子辅助）扩大消融范围。

## 总结

微波消融是治疗肺磨玻璃结节的安全有效手段，对于无法手术的早期肺癌患者提供了根治性局部治疗选择，有助于实现肺癌的早诊早治，降低肺癌死亡率。临床应用中应严格把握适应症，重视CT引导下的精准定位、术中实时监测和规范随访。多学科协作（胸外科、介入科、影像科、呼吸科）制定个体化治疗方案是确保疗效的关键。随着导航技术和消融器械的进步，MWA有望在早期肺癌治疗中发挥更大作用。`,publishDate:"2024-06-14",views:5432,category:"临床研究"},{id:"wxart-008",accountId:"wxa-002",accountName:"神经介入在线",title:"急性缺血性卒中血管内治疗的时间窗扩展",summary:"DEFUSE 3和DAWN研究带来的启示：先进影像指导下的时间窗扩展策略。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=acute%20ischemic%20stroke%20endovascular%20treatment%20thrombectomy%20brain%20imaging%20medical%20emergency&image_size=landscape_4_3",content:`## 急性缺血性卒中血管内治疗的时间窗扩展

## 文章背景

急性缺血性卒中（AIS）血管内治疗（EVT）的时间窗一直是神经介入领域的核心议题。2015年MR CLEAN、SWIFT PRIME、EXTEND-IA、ESCAPE、REVASCAT五项里程碑RCT确立了大血管闭塞（LVO）所致AIS发病6小时内取栓的"黄金时间窗"，5项研究汇总分析显示EVT组90天功能独立率（mRS 0-2）较药物组提高19.4%。然而，约30%-40%的AIS患者就诊时已超过6小时，传统标准下被排除在取栓治疗外。2018年DAWN和DEFUSE 3两项研究彻底改变了这一观念，为晚期时间窗患者取栓治疗提供高级别循证依据，标志着AIS治疗从"时间窗"向"组织窗"的范式转变。我国2018、2024版《急性缺血性卒中诊治指南》相继更新，将取栓时间窗扩展至24小时，重塑了卒中急救体系。

## 核心内容

### DAWN研究：临床-影像不匹配

DAWN研究纳入发病6-24小时、前循环LVO且符合临床-影像不匹配标准的患者。不匹配定义：≥80岁且NIHSS≥10分且核心梗死<21ml；<80岁且NIHSS≥10分且核心梗死<31ml；<80岁且NIHSS≥20分且核心梗死<51ml。结果显示，EVT组90天功能独立率49% vs 药物组13%（OR 2.84），致残率显著降低，两组死亡率相当（19% vs 18%）。

### DEFUSE 3研究：灌注-核心不匹配

DEFUSE 3研究纳入发病6-16小时、前循环LVO患者，影像标准为灌注-核心不匹配（mismatch ratio≥1.8且mismatch volume≥15ml，核心梗死<70ml）。EVT组90天功能独立率45% vs 药物组17%（OR 2.67），死亡率无显著差异。

### 影像筛选标准

晚期时间窗患者需通过CTP或MRI-DWI评估缺血核心（CBF<30%正常或DWI高信号）和半暗带（Tmax>6s）。缺血核心<70ml、mismatch ratio≥1.8、mismatch volume≥15ml是目前最常用的筛选标准。RAPID、Olea、Brainomix等自动化软件可5-10分钟内完成量化评估。

### 中国指南更新要点

2024版中国急性缺血性卒中诊治指南将取栓时间窗扩展至24小时，但强调必须基于高级影像指导的个体化筛选。同时建议建立区域卒中中心网络，优化院前转运和院内绿色通道（DPT<90分钟），推广移动卒中单元（MSU）实现"上车即入院"。

### 临床-影像快速筛选工具

对于无高级影像条件的基层中心，可采用LAST-NIHSS评分等临床工具进行快速筛选：如NIHSS评分与影像核心的"反向关系"提示半暗带存在。同时强调CTA明确LVO部位（M1/M2段、颈内动脉末端）的重要性。

## 技术细节与临床应用

取栓技术经历了从"接触性抽吸"（ADAPT）到"支架取栓"的演进，目前推荐"支架取栓器+中间导管抽吸"的联合技术（Solumbra/BADDASS）。常用支架取栓器：Solitaire 2/Platinum/FR、Trevo XP、Captura、MindFrame Capture。取栓关键技术要点：（1）微导丝通过闭塞段，避免进入假腔；（2）支架完全跨越血栓并释放，等待3-5分钟使其嵌入血栓；（3）撤出时配合中间导管持续抽吸，防止血栓逃逸；（4）一般行3次取栓尝试，若未再通则评估远端血管条件决定后续策略。术中Biplane DSA双角度成像可减少造影次数和辐射剂量。术后管理：血压控制在<180/105mmHg，再通后降至<140/90mmHg；24小时抗血小板治疗（阿司匹林100mg或替格瑞洛180mg）；24小时复查CT排除出血后再启动抗血小板或抗凝。

## 研究进展与案例分析

DAWN 3年随访显示EVT组功能独立率较药物组持续获益（HR 1.75）。中国CHANCE-2研究显示，轻型卒中合并LVO患者取栓+替格瑞洛+阿司匹林双抗，90天良好预后率62.5%。SELECT 2研究纳入345例发病0-24小时且核心梗死较大的患者，EVT组90天功能独立率较药物组提高（31.6% vs 19.8%），即使核心梗死70-100ml仍获益。RESCUE-Japan LIMIT研究纳入203例大面积核心梗死（ASPECTS 3-5）患者，EVT组90天mRS 0-3比例31.0%，显著高于药物组的12.7%。中国BASIS研究显示，发病24小时内前循环LVO取栓的90天良好预后率58.3%，穿刺至再通时间每延长10分钟，良好预后率降低6%。典型病例：68岁男性，醒后卒中，发病时间不明（最后正常>12小时）。NIHSS 16分，CTA示右侧M1段闭塞，CTP示核心梗死18ml、半暗带85ml、mismatch ratio 4.7。符合DAWN标准，行EVT（Solitaire Platinum 6×40mm），2次取栓后mTICI 3级再通。术中从股动脉穿刺至再通时间42分钟。术后24小时NIHSS 4分，7天出院NIHSS 1分。90天mRS 1分，恢复正常生活。该病例展示了高级影像指导下的晚期时间窗取栓显著获益。另一例为72岁女性基底动脉尖闭塞，发病18小时，CTP示半暗带丰富，行EVT后mTICI 2b级再通，3个月mRS 2分，体现后循环时间窗取栓的探索价值。

## 讨论与展望

时间窗扩展仍面临挑战：（1）高级影像普及率不足，基层医院难以开展CTP；（2）取栓后无再通（FPE失败）和再闭塞的处理；（3）大核心梗死患者的取栓指征争议；（4）后循环（基底动脉）闭塞的时间窗尚待明确。未来方向包括：AI自动化影像评估加速决策；新型取栓装置（如大口径中间导管、可调控支架）；神经保护剂联合EVT减少再灌注损伤；远端血管取栓技术；建立全国性卒中救治网络和质控体系。

## 总结

急性缺血性卒中血管内治疗已进入"组织窗"时代，基于高级影像的个体化筛选是晚期时间窗取栓成功的关键。DAWN和DEFUSE 3研究为6-24小时时间窗取栓提供高级别证据，2024版中国指南将取栓时间窗扩展至24小时。临床实践中应建立高效的院前-院内卒中绿色通道，结合CTP/MRI影像精准识别可挽救脑组织，规范取栓操作和围手术期管理，最大限度改善AIS患者预后。时间就是大脑，但"组织窗"理念让更多患者有机会从EVT中获益。`,publishDate:"2024-06-13",views:11234,category:"指南解读"},{id:"wxart-009",accountId:"wxa-007",accountName:"影领介入",title:"西门子Artis icono DSA系统操作指南：基础设置与日常维护",summary:"详细介绍西门子Artis icono DSA系统的开机流程、基本参数设置、日常维护保养要点。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Artis%20icono%20DSA%20system%20operation%20guide%20medical%20equipment%20interface%20settings&image_size=landscape_4_3",content:`## 西门子Artis icono DSA系统操作指南：基础设置与日常维护

## 文章背景

Artis icono是西门子医疗2018年推出的新一代介入诊疗平台，集成了先进的Optiq影像链、智能化工作流程（Workflow）和人体工学设计，目前已在我国超过300家医院装机应用。相比上一代Artis zee，Artis icono在平板探测器（30×40cm）、剂量管理（Care Dose、Care Clear）、智能成像（Docking Flat、Smart Capture）等方面均有显著升级。熟练掌握其基础设置与日常维护，是确保设备稳定运行、延长使用寿命和保障介入手术质量的前提。本文结合临床实践和厂家培训资料，详细介绍该系统的操作要点和维护规范，为介入技师和医师提供参考。

## 核心内容

### 开机流程规范

严格按照顺序开启设备——（1）先启动UPS电源，确认电池电量>80%；（2）开启主机（左侧机柜Main Switch），系统自检约需3-5分钟，期间屏幕显示启动进度条，切勿进行任何操作；（3）待主屏幕出现登录界面后，输入用户名密码登录；（4）依次开启显示器（主屏+副屏+床旁屏）、高压注射器、记录仪等外围设备；（5）执行首次日检（Daily Check），系统自动完成平板校准、几何校准和剂量校准。

### 基本参数设置

根据手术类型选择预设协议（Protocol）：心脏（Cardiac，7.5-15fps，低剂量）、神经（Neuro，3-6fps，高分辨率）、外周（Peripheral，3fps，标准）、肿瘤（Oncology，2-3fps）。调整透视剂量率（Low/Normal/High三档，建议常规使用Low）、帧率（Fluoro 1-30fps，Run 1-15fps）和采集矩阵（1k×1k或2k×2k）。FOV根据解剖部位选择：23cm（心脏）、32cm（神经）、42cm（外周/腹部）。

### 平板探测器校准

每日首次开机后系统自动执行平板校准（Pad Calibration），确保图像均匀性和几何失真校正。校准时需移除床面所有物品，平板探测器须清洁干燥。如出现"校准失败"报警，应检查平板温度（应<35℃）和是否有残留造影剂。建议每月由工程师执行一次"Bad Pixel Map"更新。

### 日常维护保养

**每日**：清洁平板探测器表面（专用无尘布+无水酒精）、床面、控制面板；检查C臂运动顺滑度，听有无异常噪音；记录开机自检结果。**每周**：检查高压发生器冷却液液位；清洁滤网（防尘过滤网）；检查所有电缆完整性，重点检查平板信号线和高压电缆。**每月**：由厂家工程师执行深度维护，包括球管冷却系统、平板探测器性能测试、机械运动系统润滑、剂量监测系统校准等。

### 故障应急处理

熟悉常见报警代码含义：E001-E099为硬件类故障、W100-W199为警告信息、I200-I299为操作提示。掌握紧急关机流程（Emergency Off红色按钮）。遇到无法解决的故障应立即联系厂家工程师，避免自行拆卸。建议保留厂家24小时服务热线（400-810-0810）。

## 技术细节与临床应用

Artis icono的Optiq影像链技术采用动态像素管理（DPM），可根据采集模式自动切换全分辨率和binning模式，兼顾图像质量和剂量。系统对环境要求严格：机房温度20-24℃（最佳22℃），相对湿度40%-60%，海平面以下3000m。C臂的旋转运动范围大（LAO/RAO ±120°，CRA/CAU ±90°），操作时应注意避免碰撞患者和手术团队，建议启用碰撞保护（Collision Guard）功能。系统的DICOM存储和PACS对接功能需在网络工程师协助下完成初始配置，建议采用DICOM TLS加密传输，确保影像数据可靠传输和患者隐私保护。Artis icono支持双平板（Biplane）配置，前后位和侧位平板可独立运动，适用于神经介入手术。激光定位灯（Laser Pointer）应每日校准，确保照射野与实际曝光野一致。

## 研究进展与案例分析

一项国内多中心数据显示，Artis icono相比Artis zee，平均透视剂量降低约32%，DSA采集剂量降低约18%，图像信噪比提升15%。德国一项对比研究纳入1200例神经介入手术，Artis icono组术中造影剂用量较Artis zee组减少28%，辐射剂量降低26%。典型应用场景：神经介入动脉瘤栓塞术中，使用Smart Mask和PinPoint导航功能，可将支架/弹簧圈定位精度提升至0.1mm级，减少术中造影次数约25%。在复杂TACE手术中，DynaCT及iFlow彩色血流编码功能可实时评估栓塞效果，减少术后残留率，某中心数据显示完全栓塞率从78%提升至92%。某三甲中心统计显示，规范执行日检和月度维护后，设备年平均故障停机时间从28小时降至6小时，年故障率降低76%，显著提升手术连续性和设备投资回报率。平板探测器使用3年后的坏点率仅0.02%，远优于行业平均水平。一例典型设备故障案例：某中心C臂运动出现异响，及时联系工程师发现导轨润滑不足，经维护后恢复正常，避免了更严重的机械损伤，体现了预防性维护的重要性。

## 讨论与展望

设备使用中常见问题：（1）平板探测器老化导致坏点增多，建议使用5年后评估更换；（2）球管寿命受曝光次数影响，需建立球管使用台账；（3）软件升级需厂家工程师现场执行，避免版本冲突；（4）多机种混用中心需注意操作习惯差异。未来方向包括：AI预测性维护（基于设备运行数据预测故障）；云端远程诊断和故障处理；与手术机器人集成实现自动化定位；5G远程介入支持基层医院。

## 总结

熟练掌握Artis icono的基础操作和日常维护是每位介入技师和医师的必修课。建议科室建立标准化的操作规范（SOP）和交接班检查制度，配备专职设备管理员，定期组织厂家培训和考核。规范的设备管理不仅能保证图像质量和手术安全，还能显著降低设备故障率、延长使用寿命，减少术中因设备问题导致的手术中断，保障患者安全，提升介入诊疗整体水平。`,publishDate:"2024-06-20",views:8956,category:"操作指南"},{id:"wxart-010",accountId:"wxa-007",accountName:"影领介入",title:"syngo DynaCT 3D成像技术操作技巧与临床应用",summary:"手把手教你使用西门子DynaCT三维成像功能，包括参数设置、采集流程、图像后处理技巧。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=syngo%20DynaCT%203D%20imaging%20technique%20neurointerventional%20workstation%20medical%20imaging&image_size=landscape_4_3",content:`## syngo DynaCT 3D成像技术操作技巧与临床应用

## 文章背景

syngo DynaCT是西门子DSA系统集成的三维锥束CT（Cone-Beam CT, CBCT）成像技术，可在介入手术室内直接获取类CT断层图像，为神经介入、肿瘤介入和血管介入提供实时三维解剖信息。该技术自2006年首次应用于临床以来，经历了从DynaCT原代、DynaCT Micro到DynaCT Angio、DynaCT Large的多次升级，空间分辨率提升至0.1mm级别。相比传统CT，DynaCT无需转运患者即可完成术中评估，避免了转运风险和时间延误；相比单纯2D DSA，DynaCT提供了冠状位、矢状位、轴位的多平面信息，特别适合复杂解剖结构和微小病变的评估。掌握DynaCT的操作技巧对于提高手术精准度和安全性具有重要意义。

## 核心内容

### 采集参数优化

根据临床需求选择头部（Head，FOV 22cm）、体部（Body，FOV 32cm）或大视野（Large，FOV 48cm）模式。C臂旋转角度通常为200°-270°，旋转速度5-20秒。头部模式建议采用5秒快速旋转（适动脉瘤栓塞术中评估）、8秒标准旋转（适用于血管畸形评估），采集帧率30fps、共133帧；体部模式建议采用8-10秒标准旋转，配合患者屏气以减少运动伪影。系统提供"低剂量"（Low Dose，5s DR）和"高质量"（High Quality，20s DR）两种采集方案，前者剂量约为后者的50%。

### 造影剂注射策略

DynaCT血管成像（DynaCT Angio）需经高压注射器注射造影剂。注射参数根据靶血管和心输出量精确计算：动脉期延迟通常为2-4秒（颈动脉）或6-10秒（外周血管）；注射速率3-6ml/s，总量15-30ml；造影剂浓度300-370mg I/ml。对于DynaCT非血管成像（DynaCT Plain，如脑出血评估），无需注射造影剂。

### 图像后处理技巧

掌握多平面重建（MPR）、最大密度投影（MIP）和容积再现（VR）等后处理方法，可从不同角度观察血管解剖和病变细节。MPR适合评估微小病变和支架贴壁情况；MIP适合血管整体走行评估；VR适合立体解剖关系展示。syngo MMWP或syngo.via后处理工作站可在2-3分钟内完成全流程重建。

### 金属伪影抑制

对于支架、弹簧圈等金属植入物，使用专门的金属伪影抑制算法（MAR，Metal Artifact Reduction）可显著改善图像质量。新一代系统采用"Watson"算法结合深度学习，可将弹簧圈伪影减少60%-70%，便于评估支架贴壁和栓塞致密程度。术后DynaCT评估弹簧圈栓塞的OKM分级、支架贴壁和瘤颈残留具有重要价值。

### 辐射剂量管理

合理选择采集范围和曝光参数，利用系统的Care Dose自动剂量调节和低剂量协议，可将DynaCT的有效剂量控制在常规CT的1/3-1/2。头部DynaCT的有效剂量约1-3mSv，体部约3-8mSv。建议每次手术DynaCT采集不超过3-4次，避免累积剂量过高。

## 技术细节与临床应用

操作流程：（1）术前确认患者体位固定，告知患者屏气或保持静止；（2）选择DynaCT模式并调整C臂至起始位置（通常RAO -90°或LAO +90°）；（3）如需血管成像，预设高压注射器参数并启动同步触发；（4）启动C臂旋转采集，期间系统自动执行运动补偿和剂量调节；（5）采集完成后，图像自动传输至syngo.via工作站进行重建；（6）术者通过MPR/VR等工具评估病变和治疗效果。关键技术要点：确保患者头部或肢体固定（使用头架或固定带），避免运动伪影；选择合适FOV覆盖整个病变区域；金属伪影严重时降低球管电压（80kV）可部分缓解。DynaCT还可用于引导经皮穿刺（DynaCT Needle Guidance），结合三维路径规划提高穿刺精度。

## 研究进展与案例分析

一项纳入256例颅内动脉瘤栓塞的研究显示，术中DynaCT对瘤颈残留的检出率（92.3%）显著高于2D DSA（68.5%），改变了18%病例的治疗决策。德国一项前瞻性研究纳入180例TACE患者，DynaCT检测额外病灶率达28%，使18.5%患者调整了栓塞方案。在TACE术中，DynaCT可检测常规DSA难以发现的肝实质内早期强化病灶，多中心研究显示其检出额外病灶率达23%，指导超选择插管使肿瘤完全栓塞率提升15%。新一代DynaCT Angio的血管分辨率较前代提升25%，对小血管（<1mm）的显示能力显著改善。典型病例：55岁男性，右肝S8段HCC（直径2.8cm），cTACE术中2D DSA仅显示轻度肿瘤染色。行DynaCT Angio（5s DR，注射造影剂20ml）示肿瘤明显强化及3支供血动脉，引导微导管超选择至肿瘤滋养动脉，栓塞后DynaCT示肿瘤完全无强化（OKM D级）。1个月后MRI示肿瘤完全坏死，AFP从术前420ng/ml降至正常。该病例展示了DynaCT在小肝癌栓塞评估中的关键价值。另一例为48岁女性脑AVM栓塞，DynaCT清晰显示供血动脉、畸形团和引流静脉的三维关系，引导Onyx胶精准栓塞，栓塞程度达90%，无并发症，体现DynaCT在复杂脑血管病变中的导航价值。

## 讨论与展望

DynaCT应用仍存在局限：（1）空间分辨率和软组织对比度不及多排螺旋CT；（2）对运动伪影敏感，需要患者配合；（3）辐射剂量累积需关注；（4）金属伪影影响支架/弹簧圈评估。未来方向包括：AI辅助的图像去伪影和分辨率提升；4D DynaCT动态血流分析；与C臂CT融合的混合现实导航；剂量自适应采集协议；移动C臂DynaCT技术拓展至床旁应用。

## 总结

syngo DynaCT实现了介入手术中"一站式"三维成像，减少了患者转运CT室的次数，缩短了手术时间，降低了转运相关风险，是介入手术的重要辅助工具。术者应熟练掌握其操作技巧和后处理方法，合理选择采集参数平衡图像质量与辐射剂量，以充分发挥其临床价值。在神经介入动脉瘤栓塞、TACE栓塞评估、穿刺引导等场景，DynaCT已成为不可或缺的术中评估手段，有助于提高介入手术的精准度和安全性。`,publishDate:"2024-06-18",views:10234,category:"技术教程"},{id:"wxart-011",accountId:"wxa-007",accountName:"影领介入",title:"西门子双向平板DSA神经介入手术操作规范",summary:"双向平板DSA在神经介入中的优势及标准化操作流程，提升手术效率与安全性。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=biplane%20DSA%20neurointerventional%20surgery%20operating%20room%20neurosurgery%20medical%20procedure&image_size=landscape_4_3",content:`## 西门子双向平板DSA神经介入手术操作规范

## 文章背景

双向平板DSA（Biplane DSA）在神经介入手术中具有不可替代的优势，可同时获取正位和侧位（或双斜位）实时影像，减少造影剂用量约30%-40%、辐射剂量约20%-30%、手术时间约15%-25%。自20世纪90年代首台Neurostar Biplane问世以来，西门子系列（Artis zee Biplane、Artis icono Biplane）已成为我国神经介入中心的主流配置。我国拥有Biplane DSA的中心已超过200家，年神经介入手术量逾15万台。然而，双向系统操作复杂度高于单C臂，规范化操作流程和质量控制是发挥其优势的关键。本文基于西门子双向平板DSA系统，介绍神经介入手术的标准化操作流程和质量控制要点，涵盖术前准备、术中操作、术后处理全流程。

## 核心内容

### 术前设备检查

确认两个平板探测器（A平板=后前位、B平板=侧位）清洁完好，无坏点簇；C臂运动范围无阻碍，机械制动可靠；高压注射器（Medrad Mark VII/Spectris）功能正常，注射筒安装到位；根据手术类型预设双向采集协议（动脉瘤/AVM/取栓/造影模式），各模式对应不同的kV/mA/frame rate组合。检查激光定位灯对准头颅正中线。

### 患者体位摆放

患者取仰卧位，头部置于专用三钉头架或海绵头托固定，确保头颅正中线与床长轴一致，听眦线（OML）垂直于床面，避免旋转和倾斜。调整床高使术者操作舒适（通常床高距地面90-100cm），同时保证双平板均可接近头部而不碰撞。连接心电监护、SpO2和有创血压监测，建立两条静脉通路。

### 双向角度优化

根据靶血管解剖预设工作角度：颈内动脉正位（A平板，0°）+侧位（B平板，90°）；椎动脉Towne位（A平板，CRA 30°）+侧位（B平板，90°）；大脑中动脉M1段采用同侧斜位（A平板，RAO 30°）+侧位。利用三维路图（3D Roadmap）功能，先行一次3D-RA旋转采集，系统自动计算最佳工作角度，可进一步提高导管操作的精准度，减少术中造影次数。

### 同步采集技术

在关键步骤（如弹簧圈释放、支架展开、球囊扩张）启用双向同步采集（Simultaneous Biplane Acquisition），确保一次性从两个角度观察设备释放情况，避免反复造影。帧率建议3-6fps，时间5-8秒，足以覆盖完整释放过程。同步采集可使术中造影次数减少40%-50%。

### 剂量优化策略

利用系统的自动剂量调节（ADR，Automatic Dose Regulation）功能，根据患者体型和解剖部位自动调整kV（70-125kV）和mA。儿童或瘦小患者应启用专用低剂量协议（Care Dose Child）。脉冲透视采用3-7.5fps，避免持续高剂量透视。配合铅屏、铅裙、铅眼镜和床下铅帘，术者年累积剂量可控制在<5mSv。

## 技术细节与临床应用

操作细节：（1）股动脉穿刺后置入8F/9F鞘，先行主动脉弓造影（左前斜30°，观察弓上血管开口）；（2）依次行双侧颈动脉、椎动脉选择性造影，建立诊断基线；（3）治疗阶段通过Y阀置入导引导管（6F-8F），微导管/微导丝在双向路图引导下到达靶血管；（4）关键操作时启用双向同步采集，记录弹簧圈/支架/球囊释放过程；（5）术后行双向造影评估栓塞程度（OKM分级）、再通程度（mTICI分级）、有无血管痉挛或夹层。质量控制要点：定期（每季度）由物理师检测平板探测器性能、剂量校准、几何校准；建立手术质量数据库，记录每例手术的透视时间、剂量、造影剂用量；定期开展M&M（死亡与并发症）讨论。神经介入手术团队应包括主刀医师、助手、技师、护士、麻醉师，明确分工和应急预案。

## 研究进展与案例分析

一项纳入420例动脉瘤栓塞的研究显示，Biplane DSA组较单C臂组术中造影剂用量减少38%（156 vs 252ml），辐射剂量降低24%，手术时间缩短22分钟，弹簧圈定位精度提升。德国一项前瞻性多中心研究纳入580例神经介入手术，Biplane组术者年累积剂量平均3.8mSv，显著低于单C臂组的6.2mSv。急性取栓手术中，Biplane DSA实时双向影像有助于快速判断血栓位置（如M1段闭塞，正位示M1截断、侧位示M2显影差）和支架取栓装置与血管的贴合情况，使穿刺至再通时间（PTR）缩短至平均48分钟，达标率（PTR<60min）从72%提升至88%。某国家级卒中中心统计，引入Biplane DSA后，复杂动脉瘤栓塞的弹簧圈填塞致密度提升12%，瘤颈残留率从18%降至9%。典型病例：65岁女性，前交通动脉瘤（直径8mm，宽颈），行支架辅助弹簧圈栓塞。Biplane同步采集引导下，Lvis Junior支架（3.5×23mm）半释放技术辅助下填入5枚弹簧圈，OKM B级（瘤颈少许残留）。术中正位+侧位同步评估避免反复造影，总造影剂用量180ml，DAP 32Gy·cm²。术后3个月DSA示完全闭塞（OKM D级），患者mRS 0分。另一例为急性基底动脉尖闭塞取栓，Biplane实时双角度成像快速确认血栓位置，3次取栓后mTICI 3级再通，PTR 38分钟，7天出院NIHSS 2分，体现Biplane在急诊取栓中的效率优势。

## 讨论与展望

Biplane DSA应用挑战：（1）设备成本高（约为单C臂1.5-2倍），限制基层普及；（2）操作复杂度高，需较长学习曲线；（3）A/B平板机械干涉可能限制某些角度；（4）平板老化导致坏点率升高。未来方向包括：双平板独立角度调节（Independent Biplane）；AI辅助的双角度自动优化；机器人辅助C臂定位；平板探测器性能持续提升（更大尺寸、更高分辨率、更低剂量）；混合现实（MR）将术前CT/MR与术中Biplane影像融合。

## 总结

双向平板DSA是神经介入的核心装备，规范化的双向DSA操作流程可显著提高手术的安全性和效率，减少术中造影次数和辐射暴露，最终改善患者预后。术者应熟练掌握其操作规范和技巧，注重术前设备检查、患者体位摆放、双向角度优化和同步采集技术的应用。同时建立完善的质量控制体系和团队协作机制，以充分发挥双平面成像的临床优势，推动我国神经介入诊疗水平整体提升。`,publishDate:"2024-06-15",views:7654,category:"临床应用"},{id:"wxart-012",accountId:"wxa-008",accountName:"IGTS CAS",title:"飞利浦Azurion 7M20 DSA系统操作入门：界面介绍与基础功能",summary:"飞利浦Azurion平台操作界面详解，包括主机操作、床旁触控、图像采集基础流程。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Azurion%20DSA%20system%20user%20interface%20control%20panel%20touchscreen%20medical%20equipment&image_size=landscape_4_3",content:`## 飞利浦Azurion 7M20 DSA系统操作入门：界面介绍与基础功能

## 文章背景

飞利浦Azurion系列是2017年推出的新一代影像引导治疗（Image-Guided Therapy, IGT）平台，7M20机型配备了20英寸（41×41cm）大尺寸平板探测器和全新的FlexVision用户界面设计，旨在提升手术效率和操作体验。相比上一代Allura Xper，Azurion在处理速度（提升30%）、平板尺寸（更大视野）、剂量管理（DoseWise 2.0）、灵活度（多C臂协调控制）等方面均有显著升级，目前已在我国超过200家三甲医院装机应用。对于新用户而言，快速熟悉其操作界面和基础功能是开展介入工作的第一步。本文详细介绍Azurion 7M20的界面布局、患者管理、图像采集、路图功能和图像存储等基础操作，并辅以实用技巧。

## 核心内容

### 界面布局概览

Azurion采用模块化FlexVision界面设计，主屏幕（27英寸医用显示器）分为影像显示区（中央，最大占比）、参数控制区（左侧/右侧）、系统状态区（顶部/底部）。床旁触控屏（Touchscreen Module，Touch 21）集成常用功能（透视/采集/路图/剂量/参数），便于术中快速调节。系统支持"一键式"操作（One Touch）和"手势"控制（Gesture Control），术者可在无菌区通过触摸屏完成90%以上的常用操作。界面色彩采用蓝灰色调，符合手术环境视觉习惯。

### 患者信息录入

通过Worklist自动获取HIS/RIS信息（DICOM MWL），或手动录入患者姓名、ID、性别、身高、体重、出生日期等。准确录入是剂量计算（DAP计算依赖体重）和DICOM归档的基础。系统支持患者预设协议（Procedure Protocols），可根据检查类型自动配置参数。建议每位患者录入时核对"严重过敏史""肾功能""妊娠状态"等关键信息，由技师和医师双重确认。

### 透视与采集模式

系统提供多种透视模式：Fluoro Low（低剂量，3.75fps，约0.5μGy/f）、Fluoro Normal（标准，7.5fps，约1.5μGy/f）、Fluoro High（高剂量，15fps，约3.0μGy/f）；采集模式：Run（电影采集，1-15fps）、DSA（数字减影，1-6fps）、3D-RA（三维旋转，30fps）。根据手术类型和患者体型选择合适的模式，平衡图像质量与辐射剂量。心脏介入建议Fluoro Normal+Run 15fps；神经介入建议Fluoro Low+DSA 3fps；外周介入建议Fluoro Low+Run 3fps。

### 路图功能使用

掌握标准路图（Roadmap）和峰值保持路图（Peak Opacification Roadmap）的激活方式。标准路图用于实时透视叠加血管影像；峰值保持路图可"记忆"造影剂峰值显影，形成更完整的血管树路图，特别适用于复杂血管解剖（如脑AVM、复杂TACE）。系统还提供"叠加路图"（Overlay Roadmap）将3D-RA或CT/MR影像融合到实时透视，实现三维导航。

### 图像存储与传输

术后及时将关键图像和序列发送至PACS，确保影像资料完整归档。可利用缩略图预览功能快速筛选关键帧。系统支持DICOM Storage、DICOM Print、DICOM CD/DVD多种输出方式。建议术中实时保存"关键事件"（Key Event）图像，如支架释放前后、栓塞前后对比，便于术后报告和质控。

## 技术细节与临床应用

Azurion的核心技术亮点：（1）SmartCT功能可在术中快速获取类似CT的断层图像，支持多平面重建和容积再现，对于TACE术中评估栓塞效果、出血介入中寻找责任血管等场景具有重要价值；（2）DoseWise智能剂量管理套件包括自动曝光控制（AEC）、铜滤过器自动切换、脉冲透视优化、剂量监测和报告等模块，可实时显示累积剂量（DAP、Ka,r）和剂量率，帮助术者优化曝光策略；（3）ClarityIQ图像处理技术通过高级降噪算法提升低剂量下的图像质量；（4）XperGuide/XperCT穿刺导航功能可基于3D影像规划穿刺路径。常用操作快捷键：F1透视、F2采集、F3路图、F4 DSA、F5 3D-RA、F6保存图像。建议新用户参加厂家官方培训（3-5天）和模拟器训练，积累至少20例跟台学习经验后独立操作。

## 研究进展与案例分析

一项欧洲多中心研究显示，Azurion相比Allura Xper，平均透视剂量降低约35%，DSA采集剂量降低约22%，图像信噪比提升18%，手术时间缩短约10%。SmartCT在TACE术中检测额外肿瘤病灶的灵敏度达88%，与多排CT相当。典型应用场景：62岁男性HCC患者，cTACE术中2D DSA仅显示轻度肿瘤染色。行SmartCT扫描（8秒旋转，剂量约4mSv），重建示肿瘤明显强化及2支副供血动脉（来自膈下动脉），引导微导管超选择栓塞后，SmartCT复查示肿瘤完全无强化。1个月MRI示完全坏死，AFP从术前580ng/ml降至正常。该病例凸显Azurion SmartCT在TACE精准评估中的关键价值。某三甲中心统计，新用户经规范化培训后，平均独立操作时间从45分钟缩短至25分钟，误操作率降低60%。

## 讨论与展望

Azurion应用中常见挑战：（1）界面功能丰富但学习曲线较长，新用户易遗漏高级功能；（2）多C臂配置下，两台设备协调操作需熟练；（3）软件升级需厂家工程师执行；（4）与第三方设备（高压注射器、记录仪、超声）的兼容性需确认。未来方向包括：Azurion下一代平台的AI集成（如自动血管分割、智能剂量调节）；与血管内超声（IVUS）、OCT等多模态影像融合；远程介入支持（5G+Azurion）；触觉反馈和手术机器人集成。

## 总结

飞利浦Azurion 7M20操作界面直观高效，是现代介入手术室的主力设备。新用户应通过厂家官方培训、模拟器训练和跟台学习，逐步掌握其各项功能（特别是SmartCT、DoseWise、路图等高级功能），为临床介入工作奠定坚实基础。科室应建立标准化的操作SOP和培训考核制度，配备专职设备管理员，定期组织经验交流和案例分享，充分发挥Azurion平台的技术优势，提升介入诊疗质量和效率。`,publishDate:"2024-06-19",views:9876,category:"操作指南"},{id:"wxart-013",accountId:"wxa-008",accountName:"IGTS CAS",title:"飞利浦DoseWise低剂量技术操作与参数优化指南",summary:"如何充分利用飞利浦DoseWise智能低剂量技术，在保证图像质量的同时最大限度降低辐射剂量。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20DoseWise%20low%20dose%20technology%20radiation%20safety%20medical%20imaging%20optimization&image_size=landscape_4_3",content:`## 飞利浦DoseWise低剂量技术操作与参数优化指南

## 文章背景

介入手术中医患双方均暴露于电离辐射之下，长期累积可能带来皮肤和晶状体损伤、辐射诱导肿瘤等风险。研究表明，复杂介入手术（如TACE、神经介入）患者皮肤入射剂量可达2-5Gy，部分超长手术甚至超过10Gy，达到确定性效应阈值；术者年累积剂量可达5-20mSv，是天然本底辐射的2-8倍。飞利浦DoseWise是一套综合性的智能剂量管理技术，自2009年首次集成于Allura Xper系列，现已升级至DoseWise 2.0并应用于Azurion平台，旨在保证诊断图像质量的前提下，将辐射剂量降至最低。本文详细介绍其技术原理和临床操作优化方法，帮助术者建立"ALARA"（As Low As Reasonably Achievable）的低剂量操作理念。

## 核心内容

### DoseWise技术架构

DoseWise包括五大模块：（1）实时剂量监测（DoseMap可视化剂量分布）；（2）自动曝光控制（AEC，根据患者体型实时调整kV/mA）；（3）脉冲透视优化（脉冲宽度可变，1-30ms）；（4）铜滤过器自动切换（0.1/0.4/0.9mm Cu三档自动切换）；（5）剂量报告系统（术后生成DAP、Ka,r、皮肤剂量分布报告）。五大模块形成完整的剂量管理闭环，实现"采集-监测-反馈-优化"全流程管理。

### 自动曝光控制优化

系统根据患者体型、解剖厚度和手术类型实时调整kV（70-125kV）、mA（10-800mA）和脉冲宽度。建议使用"体型自适应"（Body Size Adaptive）模式，避免手动固定参数导致的剂量浪费或图像不足。对于肥胖患者（BMI>30），系统会自动提高kV至100-110kV以增加穿透力，同时增加铜滤过厚度减少皮肤剂量；对于儿童或瘦小患者，自动降低kV至70-80kV。

### 脉冲透视设置

根据手术精细度需求选择脉冲频率（3.75-30fps）。常规导管操作可采用7.5fps（剂量约1.5μGy/f）；精细操作（如弹簧圈释放、支架定位）可临时提高至15-30fps，完成后及时降回低帧率。系统支持"按需透视"（Pulse on Demand），术者踩下踏板持续透视，松开即停。建议术中透视时间不超过30分钟（复杂手术60分钟），通过Last Image Hold（LIH）替代持续透视回看。

### 铜滤过器应用

系统自动根据kV值切换不同厚度的铜滤过器（0.1mm Cu低滤过，0.4mm Cu中滤过，0.9mm Cu高滤过），滤除低能散射射线（这部分对成像无贡献但增加皮肤剂量）。建议保持自动切换功能开启，可降低患者皮肤剂量15%-30%。对于儿童介入，建议手动锁定0.9mm Cu高滤过模式。

### 剂量报警与记录

设置皮肤剂量阈值报警：低剂量阈值2Gy（黄色警示）、高剂量阈值5Gy（红色警示）。当累积剂量接近限值时系统发出声光报警。术后生成详细剂量报告（DICOM SR格式），包括DAP（Gy·cm²）、Ka,r（Gy）、透视时间、采集帧数、皮肤最大剂量及分布图（DoseMap），纳入患者病历存档。

## 技术细节与临床应用

DoseWise的剂量优化策略贯穿手术全程：（1）**术前规划**：根据患者体型和手术类型选择合适的预设协议，避免术中频繁调整；（2）**术中操作**：采用"短脉冲、间断透视"模式，每次透视3-5秒；合理运用路图功能减少诊断性透视；优先使用Last Image Hold替代连续透视；尽量减少不必要的放大模式（放大1倍剂量率增加约2倍）；适当增加源-像距离（SID）降低皮肤剂量；（3）**采集策略**：DSA帧率建议1-3fps（神经/肿瘤）或3-6fps（心脏），避免高帧率；3D-RA采集后充分利用MPR/VR后处理减少重复采集；（4）**防护装备**：术者佩戴铅衣（0.35-0.5mmPb当量）、铅眼镜、铅围脖，使用床下铅帘和床上铅玻璃屏风，可降低术者剂量50%-80%。系统还提供"剂量仪表板"（Dose Dashboard），实时显示DAP、Ka,r、透视时间和帧率，帮助术者即时调整。

## 研究进展与案例分析

临床研究表明，规范使用DoseWise技术可使透视剂量率降低30%-50%，累积剂量减少20%-40%。一项纳入320例PCI的研究显示，启用DoseWise全功能组较传统固定参数组，平均DAP降低42%（48 vs 83 Gy·cm²），皮肤最大剂量降低38%，图像质量评分无显著差异。典型病例：58岁女性，复杂分叉病变PCI，预计长手术。术前评估BMI 28，启用"体型自适应"+0.4mm Cu滤过+7.5fps脉冲透视。术中通过LIH和按需透视减少不必要的曝光，关键步骤（支架释放）临时升至15fps。术后DAP 56 Gy·cm²，皮肤最大剂量1.2Gy，透视时间18分钟，均在安全范围。患者无皮肤损伤，术者剂量1.2mSv。该病例展示了DoseWise在复杂手术中的剂量管理价值。另一项针对TACE的研究显示，DoseWise组平均DAP降低45%，且不影响栓塞效果评估。

## 讨论与展望

DoseWise应用仍面临挑战：（1）部分术者对低剂量图像质量有顾虑，倾向使用高剂量模式；（2）复杂手术中剂量控制与图像质量的平衡需经验积累；（3）剂量报告的临床应用和质控体系待完善；（4）新型低剂量技术（如光子计数探测器）尚未普及。未来方向包括：AI驱动的智能剂量优化（基于手术类型、患者体型、病变特征预测最佳参数）；光子计数探测器（Photon Counting Detector）实现"零噪声"低剂量成像；实时3D剂量分布预测和警报；术中术者剂量实时监测可穿戴设备；建立全国性介入辐射剂量数据库和质控标准。

## 总结

飞利浦DoseWise技术为介入手术的辐射安全提供了有力保障，通过AEC、脉冲透视、铜滤过、剂量监测和报警五大模块的协同，可在保证图像质量的同时显著降低医患双方辐射剂量。术者应深入理解其原理并规范操作，将"ALARA"低剂量理念贯穿于每台手术的术前规划、术中操作和术后评估全过程。医疗机构应建立辐射安全管理制度，定期培训考核，配备剂量监测设备，推动介入诊疗向"更低剂量、更高质量、更安全"的方向发展。`,publishDate:"2024-06-17",views:8234,category:"技术教程"},{id:"wxart-014",accountId:"wxa-008",accountName:"IGTS CAS",title:"StentBoost支架增强显影技术操作流程与临床价值",summary:"飞利浦StentBoost技术操作步骤详解，帮助术者更清晰地观察支架贴壁情况和血管重建效果。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=StentBoost%20stent%20enhancement%20technique%20coronary%20angiography%20cardiac%20intervention%20imaging&image_size=landscape_4_3",content:`## StentBoost支架增强显影技术操作流程与临床价值

## 文章背景

冠状动脉支架置入术（PCI）已成为冠心病治疗的核心手段，全球每年完成PCI超过300万例，我国每年PCI量已突破120万例。然而，支架置入并非"放进去就算成功"，支架是否充分膨胀、是否完全贴壁、是否覆盖病变全长，直接关系到支架内血栓（ST）和靶病变血运重建（TLR）等远期结局。早在裸金属支架（BMS）时代，IVUS研究就发现约60%-80%的支架存在不同程度的膨胀不全或贴壁不良，而常规冠脉造影仅能识别其中不到30%。

传统造影因支架金属丝（厚度仅80-150μm）与血管壁、造影剂之间的X线衰减差异有限，加上运动伪影和散射线干扰，往往难以清晰显示支架轮廓和细节。为解决这一难题，飞利浦于2005年前后推出StentBoost支架增强显影技术，并于2012年升级为StentBoost Reserve，进一步引入StentBoost Q定量分析模块。该技术无需额外注射造影剂、无需更换器械，仅依靠2-3秒的电影透视序列即可生成增强图像，迅速成为飞利浦Allura系列DSA平台的标配功能。在生物可吸收支架（BRS）和药物涂层支架（DES）时代，StentBoost的价值进一步凸显，成为优化PCI操作、提升长期预后的重要影像工具。

## 核心内容

### 技术原理与算法实现

StentBoost利用支架金属（多为钴铬合金或铂铬合金）在X线下的高衰减特性，通过三步核心算法实现增强显影：第一，**帧选择与配准**——系统从约2-3秒（约150-200帧）的电影透视序列中自动筛选支架运动幅度最小的连续帧，避免心脏跳动和呼吸运动造成的位移伪影；第二，**像素位移校正**——对所选帧进行亚像素级配准，消除残余运动偏差，使支架金属信号得以累积叠加；第三，**背景抑制与边缘增强**——采用空域高通滤波抑制低频背景（软组织、造影剂），并应用边缘锐化算子突出支架金属丝轮廓，最终生成一幅高信噪比的支架增强图像。

### 操作激活流程

1. 在支架球囊完全释放、撤压后，保持透视视野覆盖支架全长及两端参考血管。
2. 按下操作台上的"StentBoost"快捷键或脚踏开关激活功能。
3. 嘱患者屏气约2-3秒，系统自动采集电影序列并实时生成增强图像。
4. 如需定量分析，进入StentBoost Q模块，分别标注近端参考血管、支架段和远端参考血管。
5. 系统自动输出支架最小直径、平均直径、膨胀率（与参考直径比值）和长度等参数。

### 图像判读要点

- **支架膨胀**：观察支架是否充分展开，与参考血管直径是否匹配，膨胀率<80%提示膨胀不全。
- **贴壁情况**：支架金属丝与血管壁之间有无透亮间隙，提示贴壁不良（ISA）。
- **支架边缘**：两端有无夹层、撕裂或血管痉挛。
- **组织脱垂**：支架内有无斑块或血栓组织突入管腔。
- **重叠与覆盖**：多支架重叠区域有无过度扩张或塌陷，支架是否完全覆盖病变。

### 定量分析StentBoost Q

StentBoost Q提供半定量工具，可测量支架直径、长度和膨胀率，与目标血管参考直径对比，自动生成膨胀指数（Expansion Index）。研究显示，膨胀指数<0.8是支架内血栓和TLR的独立预测因子。

### 适应场景

特别适用于小血管支架（直径<2.5mm）、长支架（>30mm）、重叠支架、分叉病变支架、严重钙化病变支架（旋磨后）的术后评估，以及支架内再狭窄（ISR）的机制分析（膨胀不全 vs 内膜增生）。

## 技术细节与临床应用

StentBoost的图像采集参数推荐：透视帧频15-30帧/秒，kV设置根据患者体型自动调节（通常70-90kV），无需额外注射造影剂，可使用残留造影剂或纯透视模式。采集时长建议覆盖2-3个心动周期（约2-3秒），以充分捕捉支架运动信息。

临床操作要点：第一，**支架定位准确**——激活StentBoost前应确认支架位于视野中央，避免支架部分超出视野导致图像截断；第二，**患者配合**——屏气是减少运动伪影的关键，对无法配合的患者可考虑使用呼吸机屏气或加快采集帧频；第三，**多体位评估**——建议至少取两个正交体位（如RAO+Cranial和LAO+Caudal）进行StentBoost评估，以全面观察支架三维展开情况；第四，**结合IVUS/OCT**——对于左主干、分叉等关键病变，StentBoost应作为初筛工具，必要时补充IVUS或OCT进行腔内精细评估。

临床数据方面，Pleva等2017年发表的多中心研究显示，StentBoost可检测出常规造影遗漏的5%-10%的贴壁不良病例，及时行后扩张可使1年TLR率从8.2%降至4.1%。在BRS领域，由于聚乳酸支架显影性差，StentBoost对支架标记点的增强可帮助术者确认支架边界和重叠位置，避免地理丢失（geographic miss）。

## 研究进展与案例分析

近年来多项研究聚焦于StentBoost的定量化和智能化。2019年，Prajapati等发表的PROTECTION研究纳入412例PCI患者，结果显示StentBoost Q指导组支架膨胀率（92.3%）显著高于造影指导组（84.6%，P<0.01），1年MACE发生率降低32%。2021年，中国医学科学院阜外医院牵头的研究证实，在长支架（>30mm）和重叠支架病变中，StentBoost指导后扩张的比率较常规造影提高1.8倍，6个月造影随访晚期管腔丢失（LLL）从0.42mm降至0.28mm。

典型病例：65岁男性，前降支中段95%狭窄伴重度钙化，置入3.5×29mm DES。常规造影显示支架膨胀满意，但StentBoost Q显示中段膨胀率仅72%，提示钙化环未充分扩张。遂行旋磨+高压非顺应性球囊（4.0×15mm，18atm）后扩张，复查StentBoost示膨胀率提升至95%。1年随访无MACE。

在BRS领域，Absorb BVS的StentBoost显影研究显示，支架两端铂标记点增强后可清晰定位，避免与相邻支架重叠错位，减少支架内血栓风险。

## 讨论与展望

StentBoost技术的主要局限性在于：第一，二维投影图像，无法提供支架三维空间信息，对偏心性膨胀不全的评估有限；第二，依赖透视序列质量，严重运动伪影或肥胖患者图像质量下降；第三，半定量分析精度仍不及IVUS/OCT，对<0.5mm的细节分辨有限；第四，仅适用于金属支架标记的BRS，对完全可吸收聚合物支架的全程显影仍受限。

未来发展方向包括：第一，**与AI结合**——基于深度学习自动识别膨胀不全区域并推荐后扩张参数；第二，**三维重建**——结合双平面C臂数据重建支架三维模型，量化贴壁不良体积；第三，**融合OCT/IVUS**——将StentBoost的二维轮廓与腔内影像的三维信息融合，实现"一站式"支架评估；第四，**全聚合物支架显影**——开发针对聚乳酸材料的增强算法，支持新一代BRS全程可视化。

## 总结

StentBoost支架增强显影技术以其操作简便（无需额外造影剂和器械）、信息丰富（可定量评估支架膨胀和贴壁）、实时性强（2-3秒出图）等优势，已成为优化PCI操作的重要工具。在长支架、重叠支架、钙化病变和分叉病变等复杂场景中，StentBoost应作为常规术后评估的标准流程之一。术者应熟练掌握其激活、判读和定量分析流程，并结合IVUS/OCT等腔内影像学手段，实现PCI的精准优化，最大程度降低支架相关并发症，改善患者长期预后。在BRS和未来全可吸收支架时代，StentBoost技术将持续发挥不可替代的作用。`,publishDate:"2024-06-14",views:6543,category:"临床应用"},{id:"wxart-015",accountId:"wxa-009",accountName:"联影介入",title:"联影uAngio 960 DSA开机操作流程与日常巡检指南",summary:"国产高端DSA uAngio 960系统详细操作手册：开机自检、系统校准、日常检查项目清单。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20960%20DSA%20system%20startup%20procedure%20daily%20inspection%20guide&image_size=landscape_4_3",content:`## 联影uAngio 960 DSA开机操作流程与日常巡检指南

## 文章背景

联影医疗uAngio 960是国产高端DSA的代表性产品，集成了"零噪声"成像、十轴机械臂、智慧仿生语音（uLingo）和AI影像辅助等多项创新技术，2022年获得NMPA三类医疗器械注册证，已在超过150家三甲医院装机使用，覆盖心血管、神经、外周和肿瘤介入全场景。作为国产首台打破进口垄断的高端DSA平台，uAngio 960的稳定运行对于保障介入手术连续性和图像质量至关重要。

DSA设备是介入手术室的"心脏"，其开机流程、日常巡检和预防性维护直接关系到图像质量、设备寿命和手术安全。国际电工委员会IEC 60601-2-43标准对DSA设备的日常检查、性能验证和质量控制提出了明确要求，我国《放射诊疗管理规定》和《医用X射线诊断设备质量控制检测规范》（WS 519-2019）也对DSA日常维护做出了规范。然而，不同厂商设备的硬件架构和软件系统差异较大，国产设备缺乏统一成熟的本地化操作规范。

本文基于uAngio 960用户手册和多家三甲医院的实际运行经验，系统梳理了开机自检、系统校准、日常巡检和关机维护的标准化流程，旨在为设备操作者提供一份实用、可执行的日常操作指南，降低设备故障率、延长使用寿命、保障手术安全。

## 核心内容

### 开机前环境检查

1. **供电系统**：确认配电柜总电源稳定（380V±10%），UPS（不间断电源）电池电量>80%，市电指示灯正常。UPS应能至少支撑设备运行15分钟，应对突发断电。
2. **机房环境**：温度20-24℃（最佳22℃），湿度40%-60%（最佳50%），超出范围应及时调节空调和除湿机。温湿度异常会导致平板探测器结露、电子元件损坏。
3. **冷却系统**：检查水冷机组液位和循环泵运行状态，水冷压力应在0.3-0.5MPa。液冷系统是高功率X线管散热的关键，液位不足或循环不畅会导致X线管过热保护停机。
4. **设备外观**：检查C臂运动范围内无遮挡物，床面清洁平整，地线连接可靠。检查C臂机械锁紧装置状态。
5. **辅助设备**：确认高压注射器、监护仪、除颤仪、负压吸引器等辅助设备处于待机可用状态。

### 标准开机流程

1. **第一阶段——配电系统上电**：依次开启配电柜总电源（等待10秒）、系统主电源（等待30秒）、操控台电源。各阶段间隔确保电气系统稳定，避免浪涌冲击。
2. **第二阶段——系统自检**：系统启动约5-8分钟，期间自动完成硬件自检（X线管、平板探测器、机械臂、伺服电机）、软件加载和网络初始化。自检过程中严禁操作任何控制按键。
3. **第三阶段——登录与初始化**：输入术者或技师工号登录系统，选择当日手术类型（冠脉/神经/外周/肿瘤），系统自动加载对应的预设参数和界面布局。
4. **第四阶段——系统校准**：每日首次开机执行平板探测器校准（约3-5分钟）和空气校准（约2分钟），确保图像均匀性。校准过程中平板需完全暴露于空气中，不得放置任何物品或遮挡。
5. **第五阶段——功能验证**：执行C臂运动测试、透视功能测试和图像采集测试，确认各子系统正常工作。如发现异常，立即停机报修。

### 系统校准要点

平板探测器校准是图像质量的基础，包括**暗电流校准**（关闭X线，采集本底噪声）、**增益校准**（恒定X线剂量，校正像素响应一致性）和**坏点校准**（识别并补偿坏点像素）。建议每日开机后执行完整校准，长时间停机（>24小时）后应增加稳定性校准。校准结果自动保存，异常时系统会提示重新校准或联系工程师。

### 日常巡检项目清单

| 巡检项目 | 频次 | 标准 |
| --- | --- | --- |
| C臂电缆外观 | 每日 | 无破损、无扭曲、无裸露 |
| 机械臂关节运动 | 每日 | 顺滑、无异响、到位准确 |
| 平板探测器表面 | 每日 | 无灰尘、无污渍、无划痕 |
| 显示器图像 | 每日 | 无伪影、无残影、亮度正常 |
| 触控屏响应 | 每日 | 灵敏、无延迟 |
| 高压发生器油位 | 每周 | 在正常刻度范围 |
| 水冷系统液位 | 每周 | 高于最低刻度 |
| 急停按钮功能 | 每月 | 任何时候都能立即停机 |
| 球管散热片清洁 | 每月 | 无明显灰尘积聚 |

### 关机与节电管理

手术结束后依次关闭采集系统、主机和配电电源。短时间停机（<2小时）可启用待机模式降低能耗，长时间停用（>4小时）应完全断电并做好防尘保护。关机前应保存所有图像数据至PACS和工作站，记录当日设备运行日志。

## 技术细节与操作要点

uAngio 960采用大尺寸30×40cm非晶硅平板探测器，像素尺寸154μm，最高空间分辨率3.25 lp/mm，支持15帧/秒的全分辨率采集。十轴机械臂提供±180°LAO/RAO、±120°Cranial/Caudal和多角度旋转，最大承重180kg。"零噪声"成像技术对探测器的清洁度要求较高——平板表面的灰尘、污渍和指印会导致图像出现暗影、伪影或坏点假象，应使用专用清洁工具（无尘布）和试剂（异丙醇70%溶液）每周至少擦拭2次，擦拭时严禁液体渗入探测器边缘。

机械臂维护方面，十轴关节中的伺服电机和减速器是关键部件，建议每6个月由专业工程师进行润滑脂补充和间隙调整。日常使用中应注意：第一，**避免超行程运动**——C臂运动到极限位置时严禁强制推拉，可能损坏位置传感器；第二，**防止碰撞**——机械臂运动范围内禁止放置器械车、输液架等障碍物，碰撞会触发安全停机；第三，**定期检查电缆**——机械臂关节处的柔性电缆长期弯折易出现断芯，每月应目视检查外观并测试运动状态下图像传输稳定性。

剂量管理是uAngio 960的特色功能，系统内置剂量监测模块实时显示皮肤入射剂量（ESD）、剂量面积乘积（DAP）和累积透视时间。建议每日开机后核对剂量显示归零，每月对比标准剂量体模验证准确性。

## 研究进展与案例分析

国家心血管病中心2023年发布的《国产DSA设备运行数据白皮书》显示，uAngio 960在已装机医院的平均无故障运行时间（MTBF）达到2180小时，与进口同档设备（2250小时）相当，但预防性维护的规范化程度仍存在差距。白皮书分析，约65%的设备故障可通过规范的开机检查和日常巡检提前发现并避免。

典型故障案例1：某三甲医院心导管室，uAngio 960开机后平板图像出现固定位置的暗影，初判为平板坏点。经检查发现平板表面附有灰尘颗粒，校准算法将其识别为坏点。清洁平板并重新校准后图像恢复正常。该案例提示日常平板清洁的重要性。

典型故障案例2：某医院神经介入手术室，C臂在LAO位旋转时出现异响并停机，重启后恢复正常但运动精度下降。工程师检查发现机械臂第三轴减速器润滑脂干涸，及时补充润滑脂并调整间隙后恢复正常。该案例提示定期机械臂维护的必要性。

上海中山医院介入科的数据显示，建立标准化开机巡检流程后，uAngio 960的计划外停机时间从每月平均4.2小时降至1.1小时，年故障率下降62%，图像质量投诉率下降85%。

## 讨论与展望

国产DSA设备的日常维护面临三个主要挑战：第一，**培训体系不完善**——多数医院技师习惯进口设备操作规范，对国产设备的特性了解不足；第二，**备件供应周期较长**——核心备件（平板、球管）的供应周期有时超过进口设备；第三，**本地化技术支持不均衡**——一线城市技术响应较快，但基层医院服务覆盖有限。

未来发展方向包括：第一，**智能化巡检**——基于IoT传感器的设备状态实时监测和预测性维护，提前预警潜在故障；第二，**远程运维**——厂商远程接入设备进行诊断和软件升级，缩短故障响应时间；第三，**标准化培训**——建立国产DSA设备操作和维护的国家标准培训体系；第四，**AI辅助校准**——通过AI自动识别校准异常并优化校准参数。

## 总结

联影uAngio 960作为国产高端DSA的旗舰产品，其稳定运行依赖于规范化的开机自检、日常巡检和定期维护。本文梳理的标准化操作流程涵盖了从环境检查、配电上电、系统自检、平板校准到日常巡检的完整链条，每一步骤都直接关系到图像质量、设备寿命和手术安全。使用者应接受系统的厂商培训，建立设备使用和维护登记制度，严格执行每日巡检清单。同时，国产设备的推广需要厂商与医院共同构建完善的本地化服务体系，包括7×24小时技术响应、备件快速供应和定期预防性维护。只有这样，国产高端DSA才能真正成为介入手术室的可靠伙伴，服务于更多患者。`,publishDate:"2024-06-20",views:7890,category:"操作指南"},{id:"wxart-016",accountId:"wxa-009",accountName:"联影介入",title:'联影"零噪声"纯净影像技术原理与操作设置',summary:'深度解析联影独家"零噪声"DSA成像技术原理，以及临床操作中的参数优化技巧。',coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zero%20noise%20DSA%20imaging%20technology%20united%20imaging%20pure%20image%20quality%20medical&image_size=landscape_4_3",content:`## 联影"零噪声"纯净影像技术原理与操作设置

## 文章背景

DSA（数字减影血管造影）是介入手术的核心影像手段，其图像质量直接决定手术的安全性和精准性。然而，传统DSA存在一个长期困扰介入界的矛盾——**低剂量与高画质难以兼得**。降低X线剂量可减少医患辐射暴露，但剂量降低会导致量子噪声显著增加，图像信噪比下降，影响小血管和微细结构的显示。这一矛盾在儿童介入、神经介入和长时间复杂手术中尤为突出。

传统降噪算法（如空域平滑、频域滤波）通过模糊处理降低噪声，但会同时模糊血管边缘和微细结构，导致"油画样"伪影。基于统计模型的迭代重建算法（如GE ASiR、西门子IR）虽有所改善，但仍受限于模型假设和计算速度。深度学习技术的兴起为DSA降噪提供了全新思路——通过海量临床数据训练的神经网络可在保留细节的同时智能抑制噪声。

联影医疗于2020年推出"零噪声"DSA成像技术，是国内首个基于深度学习的实时DSA降噪解决方案。该技术在uAngio 960及后续型号上标配，并已通过NMPA注册。临床验证显示，在保持同等图像质量的前提下，"零噪声"技术可将辐射剂量降低60%-80%，代表了国产介入设备在AI影像领域的重要突破。本文将系统介绍该技术的原理、硬件基础、操作设置和临床应用。

## 核心内容

### 技术原理与算法架构

"零噪声"技术基于**深度卷积神经网络（CNN）**架构，区别于传统的空间域平滑降噪。其核心算法包括三个层次：

1. **特征提取层**：通过多层卷积核提取图像的多尺度特征，包括血管边缘、细小分支、导管导丝等关键解剖结构。
2. **噪声识别层**：基于训练数据中"高剂量清晰图"与"低剂量噪声图"的配对关系，学习噪声的统计特性，实现噪声与真实信号的智能分离。
3. **细节重建层**：通过反卷积和残差连接重建图像，在抑制噪声的同时增强血管边缘和微细结构。

与传统迭代重建相比，深度学习算法的优势在于：第一，**非线性建模能力**——可学习复杂的噪声-信号关系，超越线性模型假设；第二，**空域与频域联合处理**——避免传统空域降噪导致的边缘模糊；第三，**实时推理**——基于专用GPU加速，可在透视和采集过程中实时处理，延迟<20ms。

### 硬件基础

- **高灵敏度平板探测器**：采用碘化铯（CsI）非晶硅平板，量子探测效率（DQE）>75%，提升原始信号采集质量。
- **高速图像处理单元**：配备NVIDIA专用GPU，提供高达20 TFLOPS的AI推理算力，支持实时神经网络推理。
- **大容量训练数据库**：基于超过50万例临床DSA图像训练，覆盖各体型、各部位和各剂量水平。

### 操作设置流程

1. **进入"零噪声"模式**：在主界面图像质量控制面板选择"零噪声"图标，系统切换至AI降噪模式。
2. **自动参数推荐**：系统根据患者体型（BMI）、手术类型和靶血管自动推荐最优参数组合，包括kV、mA、帧频和降噪强度。
3. **手动微调**：术者可手动调整降噪强度（Low/Medium/High三档）和细节增强程度。Low档适合需要保留原始质感的场景，High档适合极低剂量场景。
4. **实时预览**：调整参数时屏幕实时显示效果预览，术者可直观对比降噪前后图像。
5. **方案保存**：可将常用参数组合保存为个人方案，便于后续手术快速调用。

### 剂量降低效果

临床验证显示：

| 场景 | 剂量降低幅度 | 图像质量评分（5分制） |
| --- | --- | --- |
| 冠脉造影 | 60%-70% | 4.3 vs 4.2（常规） |
| 神经介入 | 70%-80% | 4.5 vs 4.4 |
| 外周介入 | 50%-60% | 4.2 vs 4.1 |
| 儿童介入 | 75%-85% | 4.4 vs 4.3 |

### 适用场景

特别适用于：第一，**儿童介入**——对辐射高度敏感，需最大程度降低剂量；第二，**长时间复杂手术**——如神经介入AVM栓塞、复杂外周血管介入，累计透视时间长；第三，**重复治疗患者**——如肿瘤反复TACE、冠脉多期PCI，累计剂量高；第四，**孕妇或育龄期患者**的必要介入手术。

## 技术细节与临床应用

"零噪声"技术的关键挑战是**实时性**——DSA透视帧频通常为7.5-30帧/秒，AI降噪必须在每帧40-130ms内完成，否则会影响术者操作的实时性。联影通过模型轻量化（剪枝、量化）、专用GPU加速和并行计算优化，将单帧推理延迟控制在<20ms，完全满足实时性要求。

临床操作要点：第一，**根据体型选择强度**——BMI>30的肥胖患者，由于原始信号噪声大，建议使用Medium或High档；BMI<22的瘦小患者可使用Low档避免过度平滑；第二，**结合手术类型调整**——冠脉介入需要清晰显示支架和导丝细节，建议Low-Medium档；神经介入需要显示微小穿支血管，建议Medium档；第三，**动态调整**——同一手术不同阶段可动态切换档位，如造影阶段使用High档降剂量，关键操作阶段切换至Low档保留细节；第四，**定期模型更新**——厂商会持续优化神经网络模型，建议每季度更新一次以获得最佳效果。

临床数据方面，北京协和医院2023年发表的研究纳入200例神经介入手术，结果显示"零噪声"组较常规组平均剂量面积乘积（DAP）降低72%，而图像质量评分无统计学差异（4.5 vs 4.4，P=0.21）。在TACE术中，该技术可清晰显示肝动脉三级以下分支，超选择插管成功率从78%提升至92%。

## 研究进展与案例分析

"零噪声"技术自推出以来，多项临床研究证实了其剂量降低和画质保持的有效性。2022年，《中华放射学杂志》发表的多中心研究纳入6家三甲医院共1200例介入手术，结果显示：第一，整体剂量降低幅度为68.5%（P<0.001）；第二，术者对图像质量的主观评分无显著差异（4.3 vs 4.2，P=0.15）；第三，手术时间和并发症率无差异。

典型病例1：3岁患儿，肝血管瘤栓塞术。传统DSA模式下，术者顾虑辐射剂量难以充分显示末梢血管。"零噪声"模式下，剂量降低至常规的25%，仍清晰显示肝动脉5级分支，顺利完成超选择栓塞，术后患儿无并发症。

典型病例2：62岁男性，复杂前交通动脉瘤栓塞术，预计手术时间>3小时。采用"零噪声"模式，全程透视时间186分钟，累计DAP仅85 Gy·cm²（常规模式预计约280 Gy·cm²），术者手部剂量降低至常规的30%，术者反映图像细节显示满意，无操作延迟。

研究还发现，"零噪声"技术对术者长期辐射防护有显著意义。一项针对神经介入医师的5年随访研究显示，采用该技术后，术者年度有效剂量从平均3.2mSv降至1.1mSv，远低于ICRP建议的20mSv/年限值。

## 讨论与展望

"零噪声"技术的主要局限性：第一，**模型泛化性**——训练数据集中于常见手术类型，对罕见病种或异常体型的处理效果可能下降；第二，**过度平滑风险**——High档对极微小结构（<0.3mm）可能存在过度平滑，影响细节显示；第三，**黑箱特性**——深度学习模型的决策过程不可解释，难以预测特定场景下的表现；第四，**硬件依赖**——需要专用GPU支持，老旧设备升级成本较高。

未来发展方向包括：第一，**多模态融合**——结合OCT/IVUS腔内影像和DSA外影像，构建多模态降噪模型；第二，**4D动态降噪**——支持时间维度信息利用，进一步降低剂量；第三，**自适应学习**——模型根据具体患者和手术实时自适应微调；第四，**联邦学习**——多中心数据联合训练，提升模型泛化性，同时保护患者隐私。

## 总结

联影"零噪声"DSA成像技术是基于深度学习的实时降噪解决方案，通过端到端的神经网络架构实现了"低剂量高画质"的突破。临床验证显示，该技术可在降低60%-80%辐射剂量的同时保持图像质量，特别适用于儿童介入、神经介入、长时间复杂手术和重复治疗患者。术者应根据患者体型、手术类型和阶段合理选择降噪强度档位，并定期更新模型以获得最佳效果。作为国产介入设备的创新代表，"零噪声"技术打破了"低剂量=低画质"的传统认知，为介入手术的安全性和精准性提供了新的技术保障。随着AI技术的持续进步，"零噪声"有望向多模态、自适应和4D动态方向发展，进一步推动介入影像的智能化。`,publishDate:"2024-06-18",views:9123,category:"技术教程"},{id:"wxart-017",accountId:"wxa-009",accountName:"联影介入",title:"uLingo智慧仿生语音系统操作指南：解放双手的智能介入",summary:"联影AI语音控制系统使用教程，术者通过语音指令即可完成设备操控，提升手术效率。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=uLingo%20smart%20voice%20control%20system%20AI%20interventional%20surgery%20hands%20free%20operation&image_size=landscape_4_3",content:`## uLingo智慧仿生语音系统操作指南：解放双手的智能介入

## 文章背景

介入手术具有操作精细、流程复杂、设备控制频繁的特点。一台复杂神经介入手术中，术者需调整C臂角度、切换透视/采集模式、调节床面位置、保存图像等操作多达200-300次。传统操作模式下，术者需在无菌操作与设备控制之间频繁切换——要么请助手协助操控设备（增加沟通成本和误操作风险），要么自行离开无菌区操作触控屏（增加污染风险和操作中断）。研究显示，单次设备操控中断平均耗时15-20秒，复杂手术累计中断时间可达30-60分钟，严重影响手术效率。

为解决这一痛点，多家厂商尝试引入语音控制技术。早期语音控制系统基于关键词匹配，识别准确率低（<85%）、抗噪能力差，难以满足手术室嘈杂环境下的临床需求。随着深度学习和自然语言处理（NLP）技术的突破，新一代AI语音控制系统在识别准确率、抗噪能力和语义理解方面显著提升。联影医疗于2021年推出uLingo智慧仿生语音系统，集成于uAngio 960及后续型号，是国内首个获得NMPA认证的介入手术AI语音控制解决方案。

uLingo系统通过远场语音拾取、声纹识别、自然语言理解和设备控制协议集成，使术者可通过语音指令直接操控DSA设备，实现"手不离械、眼不离屏"的无接触操作。本文将系统介绍该系统的功能、操作流程、技术细节和临床价值。

## 核心内容

### 系统架构与硬件配置

1. **远场麦克风阵列**：由6个全向麦克风组成的环形阵列，布置在手术灯或吊塔上，距术者口部约1.5-2米。采用波束成形技术定向拾取术者语音，抑制其他方向噪声。
2. **声纹识别模块**：基于深度学习的声纹特征提取，可识别已注册术者的独特声纹，避免误响应其他人员（如巡回护士、麻醉医师）的语音。
3. **自然语言处理引擎**：基于Transformer架构的NLP模型，支持中文自然语言理解，可识别"麻烦把C臂往左转30度"等多种表达方式。
4. **设备控制协议**：与uAngio 960的控制系统深度集成，支持100+条标准控制指令，覆盖90%以上的常规操作需求。

### 系统激活与唤醒

1. **声纹注册**：首次使用前，术者需在系统设置中录制5-10句话完成声纹注册，注册时间约2-3分钟。系统支持多术者注册，最多可存储50个声纹档案。
2. **唤醒方式**：术者可通过两种方式激活系统——第一，**语音唤醒**："联影联影"+指令；第二，**脚踏开关**：踩下脚踏后直接说指令（适合嘈杂环境）。
3. **状态指示**：屏幕右上角显示系统状态图标（待机/监听/执行/错误），术者可直观了解当前状态。

### 核心语音指令集

| 指令类别 | 示例指令 | 功能说明 |
| --- | --- | --- |
| C臂控制 | "C臂左偏30度" | LAO/RAO、Cranial/Caudal角度调节 |
| 床面控制 | "床前进5厘米" | 床面平移、升降调节 |
| 影像模式 | "开始采集" | 透视/采集/路图切换 |
| 图像管理 | "保存图像" | 图像存储、回放、删除 |
| 参数调节 | "帧频改为15" | kV、mA、帧频等参数调整 |
| 路径规划 | "显示3D路径" | 三维路径重建和显示 |
| 报告生成 | "生成报告" | 术后报告自动生成 |

### 抗干扰设计

手术室噪声环境复杂（监护仪报警、吸引器、空调、对话声），uLingo采用三级抗噪策略：第一，**硬件级降噪**——麦克风阵列波束成形定向拾音，抑制>15dB的环境噪声；第二，**算法级降噪**——基于深度学习的语音增强算法，分离术者语音与背景噪声；第三，**语义级验证**——NLP引擎对识别结果进行语义合理性校验，排除不符合逻辑的指令。系统在85dB噪声环境下识别准确率仍可达97%以上，误触发率<1%。

### 安全冗余机制

对于涉及患者安全的重大操作（如C臂大范围运动、高压注射、剂量参数大幅调整），系统会进行二次确认：术者发出指令后，系统语音播报"是否执行[C臂左偏30度]？"，术者需回答"确认"或"取消"后方可执行。这一机制有效防止了误操作。同时，紧急情况下可一键切换至手动控制模式。

### 个性化设置

- **自定义指令**：术者可将常用指令设置为简短口令，如将"开始采集"简化为"采"。
- **灵敏度调节**：可根据个人说话习惯调整语音识别灵敏度。
- **反馈音量**：可调节系统语音反馈音量，避免影响手术沟通。
- **指令库管理**：术者可查看和编辑个人指令库。

## 技术细节与临床应用

uLingo系统的核心技术挑战是**手术室嘈杂环境下的远场语音识别**。手术室噪声水平通常为60-85dB（监护仪报警峰值可达90dB），术者佩戴N95口罩和帽子后语音高频成分衰减约8-12dB，传统近场语音识别方案难以适用。联影通过以下技术解决：第一，**麦克风阵列波束成形**——6麦阵列在术者方向形成定向拾音波束，抑制其他方向噪声15-20dB；第二，**深度学习语音增强**——基于CNN的语音增强模型，可在低信噪比（<0dB）条件下分离清晰语音；第三，**N95口罩补偿**——训练数据中包含戴口罩语音样本，模型自适应高频衰减；第四，**领域语义模型**——基于介入手术术语训练的NLP模型，可准确识别"RAO 30度 Cranial 20度"等专业指令。

临床操作要点：第一，**术者位置**——术者应保持在手术床旁的固定位置（距麦克风1.5-2米），避免大幅度移动导致拾音效果下降；第二，**指令清晰**——发出指令时语速适中、口齿清晰，避免与同事对话同时进行；第三，**唤醒词标准化**——使用标准唤醒词"联影联影"，避免使用其他词汇；第四，**环境噪声控制**——监护仪报警应及时处理，吸引器非使用时应关闭；第五，**团队协作**——告知团队当前使用语音控制，避免其他人误发指令。

效率数据：北京天坛医院神经介入中心的研究显示，uLingo语音控制可将C臂角度调整时间从平均18秒（手动+助手）缩短至6秒，单次手术累计节省操作时间约25-40分钟。在200例神经介入手术中，语音控制覆盖了82%的设备操控需求，术者满意度评分4.6/5.0。

## 研究进展与案例分析

uLingo系统自2021年推出以来，已在50余家医院装机使用。多项研究证实其有效性和安全性。2023年，《中华神经外科杂志》发表的多中心研究纳入8家三甲医院共600例神经介入手术，结果显示：第一，语音控制指令成功执行率96.8%；第二，误触发率0.7%；第三，手术时间平均缩短12.5%；第四，术者离无菌区次数从平均8.2次/台降至2.1次/台；第五，手术室人员对设备控制的沟通次数减少65%。

典型病例1：58岁女性，大脑中动脉瘤栓塞术，手术时长4.5小时。术者全程使用uLingo语音控制，累计发出语音指令286次，包括C臂角度调整87次、图像保存45次、参数调节32次。术后术者反映："语音控制让我可以全程专注于手术操作，无需中断去操控设备，特别是需要双手同时操作微导管和微导丝时，'保存图像'一句话就能完成。"

典型病例2：复杂冠脉分叉病变PCI，需多角度反复造影评估。术者通过语音快速切换多个造影角度，全程未离开无菌区操作触控屏，C臂角度切换效率提升60%，整体手术时间缩短22分钟。

研究还发现，uLingo对降低手术区域污染风险有显著意义。手术室空气培养研究显示，使用语音控制后，术者手部接触非无菌设备次数减少85%，手术区域菌落数下降38%。

## 讨论与展望

uLingo系统的主要局限性：第一，**复杂指令支持有限**——目前主要支持单步指令，多步骤复合指令（如"先RAO 30度采集5秒然后保存为参考图像"）支持有限；第二，**多人协作场景**——多术者同时操作时声纹切换繁琐；第三，**特殊口音适应**——对部分方言口音的识别准确率下降；第四，**应急可靠性**——系统故障时仍需手动控制，不能完全替代手动控制。

未来发展方向包括：第一，**多模态交互**——结合眼动追踪、手势识别和语音，构建多模态人机交互；第二，**上下文感知**——系统根据手术进程自动推荐下一步操作，术者只需"确认"；第三，**多语种支持**——支持英语、方言等；第四，**跨设备集成**——支持控制高压注射器、超声、IVUS等多设备，实现真正的"一句话完成多设备协同"。

## 总结

联影uLingo智慧仿生语音系统是国内首个成熟的介入手术AI语音控制解决方案，通过远场麦克风阵列、声纹识别、自然语言处理和设备控制协议的深度集成，实现了"手不离械、眼不离屏"的无接触设备操控。临床研究证实，该系统指令执行率96.8%、误触发率<1%，可显著提升手术效率（手术时间缩短12.5%）、降低污染风险（手部接触非无菌设备次数减少85%），并改善术者体验。术者应熟练掌握其唤醒方式、核心指令集和安全确认机制，将其作为传统手动控制的有效补充。随着AI和物联网技术的进步，uLingo有望向多模态交互、上下文感知和跨设备集成方向发展，进一步推动介入手术的智能化和人性化。`,publishDate:"2024-06-16",views:5678,category:"功能介绍"},{id:"wxart-018",accountId:"wxa-010",accountName:"GE医疗介入",title:"GE Discovery IGS 730系统操作入门：主界面与功能模块介绍",summary:"GE医疗顶级IGS 730介入平台操作指南，系统界面布局与各功能模块详细说明。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20Discovery%20IGS%20730%20system%20main%20interface%20function%20modules%20interventional%20angiography&image_size=landscape_4_3",content:`## GE Discovery IGS 730系统操作入门：主界面与功能模块介绍

## 文章背景

GE医疗Discovery IGS系列是国际介入影像领域的高端平台，其中IGS 730是该系列的旗舰型号，采用独特的**激光引导无轨C臂**设计，配合ASSIST高级影像融合导航、SmartCT类CT成像和AutoCenter智能定位等多项创新技术，为心血管、神经、肿瘤和外周介入提供全方位的成像解决方案。IGS 730于2013年获得FDA和CE认证，2014年进入中国市场，目前在全球已装机超过800台，覆盖Mayo Clinic、Cleveland Clinic等顶级医疗机构。

传统DSA设备的C臂通常安装在地面轨道或天花板轨道上，运动范围受限，难以适应复合手术室（Hybrid OR）多学科协作的需求。IGS 730的革命性在于其**激光引导无轨设计**——C臂底盘内置激光导航系统，可在手术室内自由移动和精确定位，无需轨道约束。这一设计突破了传统C臂的运动限制，使外科医生和介入医生可在同一手术间内无缝协作，开展主动脉杂交手术、TAVR杂交手术、颅内外血管搭桥等复杂杂交手术。

IGS 730的另一大特色是**ASSIST增强现实导航系统**，可将术前CT/MR三维影像与实时透视精准融合，为术者提供类似"GPS导航"的实时引导，在肿瘤消融、TACE、椎体成形等领域具有重要价值。本文面向新用户，系统介绍IGS 730的主界面布局、核心功能模块和操作要点，帮助术者快速上手这一高端介入平台。

## 核心内容

### 系统架构特点

1. **激光引导无轨C臂**：底盘内置6组激光传感器和惯性导航单元，可在手术室内自由移动并精确定位，定位精度<1mm。无轨设计使C臂可在手术床周围任意位置摆放，适应不同手术场景。
2. **多场景配置模式**：系统支持心脏、神经、外周、肿瘤和Hybrid OR五种预设配置，每种配置对应不同的C臂位置、参数预设和界面布局，术者可一键切换。
3. **大尺寸平板探测器**：31×31cm（神经/外周）或41×41cm（心脏）非晶硅平板，像素尺寸154-200μm，最高空间分辨率3.25 lp/mm，支持15帧/秒全分辨率采集。
4. **双平面/单平面可选**：根据手术需求选择单平面（占地小）或双平面（多角度同步）配置，神经介入和儿科介入推荐双平面配置。

### 主界面布局

IGS 730采用**多显示器配置**，通常为3-4个高分辨率医用显示器，分别承担不同功能：

1. **主显示器（中央）**：显示实时透视或采集图像，支持单/双/四分屏切换，可同时显示实时图像和参考图像。
2. **辅助显示器（左侧）**：显示系统状态栏（C臂角度、kV/mA、剂量、平板温度）、患者信息和既往影像。
3. **功能显示器（右侧）**：显示功能快捷区、参数调节面板和3D重建结果。
4. **触摸控制屏**：位于术者侧，提供主要操作快捷键和参数调节，支持手势操作。

界面整体遵循**"信息分层、操作就近"**原则——术者关注的主图像在中央，辅助信息在两侧，操作控制在触摸屏，避免视觉分散。

### 核心功能模块

#### 标准透视/采集模块

支持连续透视、脉冲透视（0.5-30脉冲/秒）、电影采集（15-30帧/秒）和DSA数字减影采集。透视模式提供Low/Medium/High三档剂量预设，配合自动剂量调制（AEC）适应不同体型。

#### 3D旋转采集模块

C臂在190°范围内旋转采集，可在5-20秒内获取200-500帧投影图像，重建出三维血管影像。支持4D-DSA（含时间维度的3D-DSA），可动态观察血流灌注过程。

#### SmartCT类CT成像模块

通过C臂旋转采集和平板探测器，可在术中获取类CT断层图像，软组织分辨率接近常规CT。SmartCT适用于：TACE术后碘油沉积评估、出血责任血管定位、肿瘤消融边界评估、椎体成形后骨水泥分布评估等，避免了患者转运CT室的风险。

#### 3D Roadmap路图导航模块

将3D旋转采集重建的血管影像作为路图，实时叠加于透视画面上，辅助术者进行超选择插管。路图可旋转至任意角度，支持多平面重建（MPR）和最大密度投影（MIP）显示。

#### Image Fusion影像融合模块

将术前CT/MR/PET三维影像与术中透视实时融合，融合精度<2mm。这是ASSIST增强现实导航的核心模块，详见专门介绍文章。

### ASSIST导航界面

在融合导航模式下，界面同时显示实时透视和叠加的三维影像轮廓（如肿瘤边界、血管走行），并提供：第一，**路径引导线**——从穿刺点到靶点的虚拟路径；第二，**目标标记**——肿瘤或出血点的三维位置标记；第三，**距离测量**——实时显示器械尖端到靶点的距离；第四，**安全边界**——危险结构（如大血管、神经）的警示轮廓。

### 用户权限管理

系统支持多用户配置，不同级别用户拥有不同权限：

- **技师**：可调节采集参数、执行图像采集和后处理，不可修改协议。
- **医师**：可执行所有影像操作，可保存和修改个人协议，不可修改系统配置。
- **管理员**：拥有全部权限，可修改系统配置、用户管理和质量控制参数。

权限管理确保了操作安全，防止误操作导致设备损坏或患者伤害。

## 技术细节与临床应用

IGS 730的**无轨设计**是其最大特色，但也是操作复杂度最高的部分。激光引导系统的工作原理：底盘安装6组激光发射器和接收器，向地面投射激光图案并接收反射信号，通过三角测量实时计算C臂在手术间的精确位置。同时，惯性导航单元（IMU）提供加速度和角速度信息，实现快速运动跟踪。系统开机时需进行**激光校准**——将C臂移动到手术间内的3-4个已知参考点，系统据此建立空间坐标系。校准后，C臂可在手术间内自由移动，定位精度<1mm。

无轨设计的临床应用要点：第一，**地面要求**——手术间地面应平整（高低差<2mm/m），无反光和深色标记，避免激光定位误差；第二，**移动安全**——C臂移动时激光传感器实时检测障碍物，遇障碍自动减速或停止，但仍需人工监护；第三，**定期校准**——建议每月进行一次激光校准确认，每季度由工程师进行全面校准；第四，**手术间布局**——应根据手术类型预先规划C臂停放位置，避免术中频繁移动。

SmartCT的临床应用：在TACE术中，栓塞完成后即刻行SmartCT扫描，可清晰显示碘油沉积情况，及时发现未充盈的肿瘤区域并补充栓塞。研究显示，SmartCT指导下的TACE完全沉积率从78%提升至93%。在出血介入中，SmartCT可快速定位出血责任血管，避免反复造影。在肿瘤消融中，SmartCT可即刻评估消融边界是否覆盖肿瘤，确保完全消融。

Hybrid OR应用：IGS 730的无轨设计使其特别适合复合手术室。C臂可在手术床周围自由移动，配合外科医生完成开放手术与介入操作的联合流程。例如主动脉杂交手术中，外科医生完成去分支手术后，C臂移入行TEVAR支架置入，全程在同一手术间完成，避免了患者转运。

## 研究进展与案例分析

IGS 730自2013年推出以来，多项研究证实其在复杂介入手术中的价值。2018年，《Journal of Vascular and Interventional Radiology》发表的多中心研究纳入12家中心共1500例介入手术，结果显示：第一，SmartCT指导下的TACE完全沉积率93%，较常规DSA组（78%）显著提高；第二，ASSIST导航指导下的肿瘤消融完全消融率95%，较常规组（85%）提高10%；第三，Hybrid OR手术患者平均住院时间缩短2.3天。

典型病例1：62岁男性，原发性肝癌伴门静脉癌栓，行TACE联合消融治疗。术中先在IGS 730下行TACE，栓塞后即刻SmartCT扫描显示肿瘤下极碘油沉积不全，及时补充栓塞。随后行ASSIST导航下经皮消融，融合CT轮廓精准定位肿瘤边界，消融完全，术后1年无复发。

典型病例2：55岁男性，Stanford B型主动脉夹层，行去分支+TEVAR杂交手术。外科团队完成主动脉弓去分支后，IGS 730 C臂移入行TEVAR支架置入。术中SmartCT即刻评估支架位置和真假腔情况，确认支架近端贴合良好、假腔血栓化。术后患者无并发症，避免了二次转运CT。

典型病例3：复杂颅内动脉瘤栓塞术，使用双平面IGS 730。3D旋转采集重建动脉瘤三维形态，路图导航下微导管超选进入动脉瘤腔，弹簧圈栓塞。术中SmartCT评估载瘤动脉通畅性，避免了转运MR的麻烦。

## 讨论与展望

IGS 730的主要局限性：第一，**占地空间大**——无轨设计需要较大的手术间面积（建议>50㎡），不适合面积有限的导管室；第二，**初始投资高**——系统价格显著高于传统C臂，限制了基层医院普及；第三，**学习曲线陡峭**——功能模块丰富，新用户掌握全部功能需3-6个月系统培训；第四，**激光系统维护**——激光传感器精密，对灰尘和振动敏感，需定期专业维护。

未来发展方向包括：第一，**AI辅助操作**——基于机器学习的自动定位和参数推荐，减少术者操作负担；第二，**机器人化升级**——C臂运动全自动化，术者语音或手势控制；第三，**云端影像集成**——术中实时调取云端历史影像，无需本地存储；第四，**5G远程协作**——支持专家远程实时指导和多中心协同手术。

## 总结

GE Discovery IGS 730以其激光引导无轨C臂设计、丰富的功能模块（SmartCT、3D Roadmap、ASSIST融合导航）和灵活的配置选项，成为高端介入影像平台的代表。其无轨设计特别适合复合手术室应用，可在同一手术间内完成外科手术与介入操作的联合流程。SmartCT功能可在术中快速获取类CT图像，用于评估TACE术后碘油沉积、出血责任血管定位和消融边界评估，避免了患者转运CT室的风险。熟悉IGS 730的主界面布局、五大核心功能模块和ASSIST导航界面是高效开展介入工作的基础。建议新用户在模拟环境下反复练习各模块的切换和参数调节，并接受GE官方认证培训。在Hybrid OR和多学科协作日益普及的今天，IGS 730将继续发挥其独特的技术优势，服务于更复杂的介入手术场景。`,publishDate:"2024-06-19",views:6789,category:"操作指南"},{id:"wxart-019",accountId:"wxa-010",accountName:"GE医疗介入",title:"GE ASSIST增强现实导航系统操作流程详解",summary:"GE独创ASSIST增强现实3D引导技术操作方法，如何将CT影像与实时透视精准融合导航。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20ASSIST%20augmented%20reality%20navigation%20system%20image%20fusion%20interventional%20guidance&image_size=landscape_4_3",content:`## GE ASSIST增强现实导航系统操作流程详解

## 文章背景

介入手术的精准性是决定疗效和安全性的关键因素。传统介入手术依赖术者的二维透视影像和经验判断，对于复杂解剖结构（如肿瘤与血管的关系、深部病灶定位）、需要避开重要结构（如大血管、神经）的穿刺操作以及术中实时定位的需求，单纯透视往往难以满足精准要求。术前CT/MR虽提供了精细的三维解剖信息，但术中如何将这些信息与实时影像融合、引导操作，是介入影像领域长期追求的目标。

增强现实（Augmented Reality, AR）技术通过将虚拟三维影像与实时影像融合显示，为术者提供"超视力"引导。GE医疗于2015年推出ASSIST（Advanced Stent and Strike Imaging System Technology）增强现实导航系统，集成于Discovery IGS系列介入平台。ASSIST可将术前CT/MR三维影像与实时透视影像精准融合，在透视画面上叠加三维血管、肿瘤、器官轮廓和穿刺路径，为术者提供类似"GPS导航"的实时引导。

ASSIST系统的核心价值在于：第一，**术前信息术中化**——将术前的精细CT/MR信息实时投射到术中视野；第二，**虚拟路径实体化**——预设的穿刺路径在透视上以虚拟线显示，引导精准穿刺；第三，**风险结构可视化**——危险结构（大血管、神经、脏器）以警示轮廓显示，避免误伤；第四，**减少穿刺次数和辐射剂量**——精准定位减少反复试探，缩短手术时间。ASSIST在肿瘤消融、TACE、椎体成形、出血介入和神经介入等领域具有重要应用价值。本文将详细介绍ASSIST的操作流程、技术细节和临床应用。

## 核心内容

### 术前影像导入与准备

1. **影像来源**：通过DICOM网络从PACS导入患者术前CT/MR数据，或通过移动存储（U盘、移动硬盘）导入。建议使用薄层扫描数据（层厚≤1mm），以获得最佳融合精度。增强CT优于平扫，可清晰显示血管结构。
2. **影像预处理**：系统自动进行影像分割，识别血管、肿瘤、器官等关键结构。术者可手动调整分割阈值和范围，确保分割结果准确。对于肿瘤，可勾画肿瘤边界；对于血管，可分割动脉、静脉和门静脉系统。
3. **三维重建**：系统基于分割结果自动生成三维模型，包括血管树、肿瘤轮廓、器官轮廓和骨骼。术者可选择显示哪些结构、调节透明度和颜色。
4. **路径规划**：在三维工作站上预设穿刺点和靶点，系统自动生成最佳穿刺路径，并计算路径长度、角度和避开的重要结构。可同时规划多条路径供选择。

### 自动配准流程

1. **解剖标志识别**：系统自动识别透视影像中的稳定解剖标志点（如椎体、肋骨、骨盆、血管分叉），作为配准参考。
2. **刚性配准**：基于解剖标志点进行刚性配准，将三维影像与透视影像对齐。配准误差通常<2mm，满足临床要求。
3. **配准质量评估**：系统自动计算配准误差并显示，术者可直观评估配准质量。如误差>3mm，建议重新配准。
4. **手动微调**：如自动配准不满意，术者可手动微调三维影像位置（平移、旋转），直至与透视影像精确对齐。
5. **配准保存**：配准结果自动保存，术中可随时调用。如患者体位变化，可一键重新配准。

### 融合导航操作

1. **轮廓叠加**：配准完成后，三维影像轮廓（肿瘤边界、血管走行、器官轮廓）实时叠加于透视画面上。术者可调节融合透明度（0%-100%）和显示层级。
2. **多平面显示**：系统支持同时显示轴位、矢状位、冠状位和透视影像，术者可从多个角度观察病灶与周围结构的关系。
3. **路径引导**：预设的穿刺路径在透视上以虚拟线显示，包括穿刺方向、深度和角度。术者可沿虚拟路径进针，实时观察针尖位置。
4. **目标标记**：肿瘤或出血点以三维标记显示，帮助术者锁定靶点。
5. **距离测量**：实时显示器械尖端到靶点的距离，辅助精准操作。

### 穿刺路径规划详解

1. **穿刺点选择**：在皮肤表面选择安全的穿刺点，避开大血管、神经和重要脏器。
2. **靶点确定**：在三维影像上确定病灶靶点（如肿瘤中心、出血点）。
3. **路径优化**：系统自动生成路径，并评估路径上是否经过重要结构。术者可调整路径角度避开风险结构。
4. **路径验证**：在多个角度（轴位、矢状位、冠状位）验证路径合理性。
5. **路径保存**：保存最优路径，术中实时显示。

### 术中实时校正

患者呼吸、体位移动或器官形变可能导致配准偏差，ASSIST提供多种校正方式：第一，**一键重新配准**——快速重新执行自动配准；第二，**手动微调**——术者通过触摸屏微调三维影像位置；第三，**呼吸补偿**——基于呼吸门控的配准校正，适用于胸腹部；第四，**形变校正**——基于术中影像的非刚性配准，纠正器官形变。

## 技术细节与临床应用

ASSIST系统的核心算法包括**刚性配准**、**非刚性形变校正**和**实时投影映射**。刚性配准采用迭代最近点（ICP）算法，最小化三维影像与透视影像解剖标志点之间的距离。非刚性形变校正基于B样条自由形变模型，可纠正呼吸运动和器官形变导致的偏差。实时投影映射将三维模型按当前C臂角度投影到透视平面，融合延迟<30ms，满足实时性要求。

临床操作要点：第一，**术前影像质量**——薄层（≤1mm）增强CT是最佳选择，MR适合软组织病灶（如肝癌、脑肿瘤）；第二，**配准时机**——建议在患者摆位稳定后、手术开始前完成配准，避免术中重复配准；第三，**多角度验证**——配准后应在至少两个正交角度验证配准准确性；第四，**实时校正**——术中如发现配准偏差（如器官位置变化），应及时重新配准；第五，**结合触觉反馈**——AR导航是辅助工具，术者仍需结合穿刺针的触觉反馈和患者反应综合判断。

不同场景的临床应用：

- **肝脏肿瘤消融**：融合CT/MR轮廓精准定位肿瘤边界，消融完全率从85%提升至95%以上，明显减少穿刺次数（平均从3.2次降至1.8次）和并发症。
- **TACE超选择插管**：将CTA显示的肿瘤供血动脉标注于透视图像，辅助超选择插管，超选成功率从82%提升至94%。
- **椎体成形**：融合CT显示椎体骨折线和骨水泥分布空间，避免骨水泥渗漏至椎管。
- **出血介入**：将CTA发现的出血责任血管直接标注于透视图像，缩短寻找出血源的时间约40%。
- **神经介入**：融合MR显示脑组织和血管关系，辅助复杂动脉瘤和AVM的栓塞。

临床数据：上海长海医院介入科的研究显示，ASSIST导航指导下的肝肿瘤消融完全消融率96.5%，较常规组（87.2%）提高9.3个百分点；局部复发率从12.5%降至4.8%；平均穿刺次数从3.2次降至1.8次；并发症率从8.5%降至3.2%。

## 研究进展与案例分析

ASSIST系统自2015年推出以来，多项研究证实其在精准介入中的价值。2019年，《Radiology》发表的多中心研究纳入10家中心共800例肝肿瘤消融病例，结果显示：ASSIST组完全消融率94.8%，常规组86.2%（P<0.001）；局部复发率5.2% vs 13.8%；无进展生存期（PFS）延长4.2个月。

典型病例1：68岁男性，肝右叶HCC（直径3.5cm），位于膈顶，毗邻膈肌和肝静脉。常规超声和透视难以清晰显示肿瘤边界。ASSIST融合CT影像精准定位肿瘤，规划避开肝静脉的穿刺路径。微波消融后即刻SmartCT评估显示消融边界完全覆盖肿瘤，安全边界>5mm。术后6个月复查MRI无复发。

典型病例2：45岁女性，盆腔大出血（产后出血），生命体征不稳定。CTA显示左侧子宫动脉出血。ASSIST将CTA出血点标注于透视图像，术者快速超选左侧子宫动脉并栓塞，手术时间从预计60分钟缩短至25分钟，患者转危为安。

典型病例3：72岁男性，L1椎体压缩性骨折，行椎体成形术。ASSIST融合CT显示骨折线和椎体后壁完整性，规划双侧椎弓根穿刺路径，避免骨水泥渗漏至椎管。术后骨水泥分布满意，无渗漏并发症，疼痛VAS评分从8分降至2分。

ASSIST在复杂穿刺中的价值尤为突出。北京协和医院的数据显示，对于"困难位置"（如膈顶、深部、邻近大血管）的肝肿瘤，ASSIST导航的穿刺成功率从常规的72%提升至96%。

## 讨论与展望

ASSIST系统的主要局限性：第一，**配准精度受呼吸影响**——胸腹部病灶受呼吸运动影响明显，配准可能偏差2-5mm；第二，**器官形变**——穿刺和操作可能导致器官移位，配准失效；第三，**影像质量依赖**——配准和分割依赖术前影像质量，影像质量差时效果下降；第四，**学习曲线**——熟练使用ASSIST需20-30例手术经验；第五，**额外时间**——配准和规划增加术前准备时间约10-15分钟。

未来发展方向包括：第一，**呼吸门控配准**——基于呼吸信号的实时配准校正，解决呼吸运动影响；第二，**术中影像更新**——通过术中超声或SmartCT实时更新三维模型，纠正器官形变；第三，**AI自动分割和规划**——基于深度学习自动分割病灶和规划路径，减少术者操作；第四，**机器人穿刺**——结合穿刺机器人实现自动化精准穿刺；第五，**多模态融合**——融合PET代谢信息、超声弹性信息和功能MRI，实现"形态+功能"多维度导航。

## 总结

GE ASSIST增强现实导航系统通过将术前CT/MR三维影像与实时透视精准融合，为介入手术提供了类似"GPS导航"的实时引导。其核心流程包括术前影像导入、自动配准、融合导航和术中校正。临床研究证实，ASSIST在肝肿瘤消融、TACE、椎体成形和出血介入等领域可显著提升精准度（消融完全率提升9-10个百分点）、减少穿刺次数（平均减少1.4次）和并发症（降低50%以上）。术者应掌握其配准、导航和校正流程，结合触觉反馈和临床经验综合判断。ASSIST代表了介入影像从"经验驱动"向"影像精准引导"转变的重要方向，随着AI和机器人技术的发展，AR导航将向自动化、智能化和实时化方向持续进步，为精准介入开辟新的可能。`,publishDate:"2024-06-17",views:8456,category:"技术教程"},{id:"wxart-020",accountId:"wxa-010",accountName:"GE医疗介入",title:"ASiR DSA迭代重建技术：低剂量高清成像的操作设置",summary:"GE ASiR DSA迭代重建算法原理与操作设置，在降低辐射剂量的同时保持图像质量。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ASiR%20DSA%20iterative%20reconstruction%20low%20dose%20high%20definition%20imaging%20GE%20healthcare&image_size=landscape_4_3",content:`## ASiR DSA迭代重建技术：低剂量高清成像的操作设置

## 文章背景

辐射防护是介入医学领域长期关注的核心议题。介入手术往往需要长时间透视和多次采集，患者皮肤入射剂量可达2-10 Gy，术者年度累计剂量也可能接近ICRP建议的20 mSv/年限值。如何在保证图像质量的前提下降低辐射剂量，是介入影像技术发展的核心驱动力。

传统DSA图像重建采用**滤波反投影（Filtered Back Projection, FBP）**算法。FBP算法计算速度快、实时性好，但本质上是基于理想化假设的解析算法——它假设X射线源为点源、探测器为理想探测器、不存在散射和噪声统计涨落。在低剂量条件下（mA降低或脉冲宽度缩短），量子噪声显著增加，FBP算法会放大噪声，导致图像质量下降。因此，传统FBP重建存在"剂量-画质"刚性矛盾。

为突破这一矛盾，GE医疗于2008年推出**自适应统计迭代重建（Adaptive Statistical Iterative Reconstruction, ASiR）**算法，最初应用于CT，2012年扩展至DSA介入成像。ASiR通过统计建模和迭代优化，在低剂量条件下仍能保持高图像质量。2015年GE进一步推出ASiR-V（第三代），引入物理模型和深度学习元素，性能进一步提升。ASiR已成为GE Discovery IGS系列DSA平台的标配重建算法，为医患辐射安全提供了重要保障。本文将系统介绍ASiR的技术原理、操作设置和临床应用。

## 核心内容

### 技术原理与算法架构

ASiR的核心是**统计迭代重建**，与传统FBP有本质区别：

1. **FBP算法**：解析算法，假设理想成像条件，对投影数据直接反投影重建图像。计算快，但对噪声敏感，低剂量条件下噪声放大明显。
2. **ASiR算法**：基于统计模型的迭代算法，通过以下步骤重建图像——
   - **初始化**：以FBP重建结果作为初始图像。
   - **正向投影**：将当前图像正向投影生成模拟投影数据。
   - **统计比较**：将模拟投影与实测投影进行统计比较，计算差异。
   - **迭代更新**：基于差异按统计模型更新图像，逐步逼近真实图像。
   - **收敛判断**：达到预设迭代次数或收敛标准时停止，输出最终图像。

ASiR的统计模型考虑了X射线量子噪声的泊松分布特性和电子学噪声的高斯特性，相比FBP的确定性假设更符合实际成像物理。每一轮迭代中，算法会**区分真实解剖信号与量子噪声**，逐步抑制噪声并保留边缘细节。

### 剂量降低机制

通过ASiR重建，可在降低透视mA或采集kV/mA的条件下获得与常规剂量相当的图像质量。剂量降低机制：第一，**噪声抑制**——统计模型有效抑制量子噪声，弥补低剂量带来的噪声增加；第二，**边缘保留**——迭代算法保留高频边缘信息，避免传统降噪的模糊；第三，**伪影抑制**——抑制低剂量条件下的条纹伪影和雪花伪影。临床验证显示，剂量降低幅度可达30%-60%，具体取决于ASiR blend比例设置和手术类型。

### Blend比例设置

系统提供0%-100%的ASiR blend调节，blend比例代表ASiR重建结果在最终图像中的权重（剩余权重为FBP结果）：

- **0% blend（纯FBP）**：传统重建，图像"自然"但低剂量下噪声大。
- **20%-40% blend（低比例）**：适合常规介入，平衡图像自然度和降噪效果，剂量降低约20%-30%。
- **40%-60% blend（中比例）**：适合需要中等降噪的场景，剂量降低约30%-45%。
- **60%-100% blend（高比例）**：适合对剂量极度敏感的场景（如儿科、长期随访），剂量降低约45%-60%。

高比例ASiR图像可能呈现"轻微塑料感"（过度平滑），但血管和器械边缘仍清晰可辨。

### 实时与回顾性应用

1. **实时应用**：ASiR可在透视和采集过程中实时应用，基于GPU加速，单帧处理延迟<15ms，术者无感延迟。透视模式下默认开启20%-30% ASiR。
2. **回顾性应用**：对已存储的原始投影数据可进行回顾性ASiR重建，便于术后图像优化。术者可在不同blend比例间切换，选择最优图像。

### 临床参数优化建议

| 患者类型 | 推荐blend | 剂量降低 | 适用场景 |
| --- | --- | --- | --- |
| 肥胖（BMI>30） | 20%-30% | 15%-25% | 避免过度平滑 |
| 正常（BMI 22-30） | 30%-50% | 25%-40% | 常规介入 |
| 瘦小（BMI<22） | 40%-60% | 35%-50% | 增强降噪 |
| 儿童 | 60%-80% | 50%-60% | 最大降剂量 |
| 长期随访患者 | 50%-70% | 40%-55% | 累计剂量控制 |

## 技术细节与临床应用

ASiR技术的关键优势在于其**自适应性**——算法会根据每个像素点的统计特性动态调整降噪强度。在量子噪声占主导的低剂量区域加强降噪，在信号强的高剂量区域保留原始信息，避免传统降噪导致的"油画样"伪影。具体实现上，ASiR在每次迭代中计算每个像素的局部信噪比，据此调整该像素的更新权重。

不同介入场景的参数优化：

- **冠脉介入**：高比例ASiR（50%-70%）可清晰显示支架结构和支架内管腔，剂量降低40%-50%。在评估支架贴壁时，结合StentBoost增强显影效果更佳。
- **神经介入**：低比例ASiR（20%-40%）可更好地保留微导丝和微导管的锐利边缘，避免过度平滑影响器械识别。神经介入对细节要求极高，建议保留更多原始信息。
- **外周介入**：中等比例ASiR（30%-50%）平衡降噪和细节，剂量降低30%-40%。外周血管直径较大，对噪声相对不敏感。
- **肿瘤介入（TACE）**：中高比例ASiR（40%-60%）清晰显示肝动脉分支，辅助超选择插管。剂量降低40%-50%，对需反复TACE的患者意义重大。
- **儿科介入**：高比例ASiR（60%-80%）最大程度降低剂量，保护儿童辐射敏感组织。剂量降低50%-60%。

临床操作要点：第一，**根据BMI调整**——肥胖患者由于原始信号噪声大，建议使用低比例ASiR避免过度平滑；瘦小患者可使用高比例ASiR；第二，**结合手术类型**——细节要求高的手术（神经介入、冠脉介入）使用低中比例，剂量敏感的手术（儿科、随访）使用高比例；第三，**动态切换**——同一手术不同阶段可动态切换ASiR比例，如造影阶段使用高比例降剂量，关键操作阶段切换至低比例保留细节；第四，**定期验证**——建议每季度使用剂量体模验证ASiR效果，确保剂量降低和图像质量稳定。

## 研究进展与案例分析

ASiR技术自推出以来，已积累大量临床证据。2016年，《AJNR》发表的多中心研究纳入6家中心共800例神经介入手术，结果显示：ASiR组（50% blend）较FBP组剂量面积乘积（DAP）降低42%，图像噪声降低35%，术者主观评分无差异（4.3 vs 4.2，P=0.21）。

2019年，中国医学科学院阜外医院发表的研究纳入400例冠脉介入，结果显示：60% ASiR组较FBP组平均DAP降低48%，皮肤入射剂量降低45%；图像噪声降低38%；支架和导丝清晰度评分4.4 vs 4.3（P=0.18）；MACE随访无差异。

典型病例1：5岁患儿，室间隔缺损介入封堵术。采用70% ASiR，全程透视时间22分钟，累计DAP仅8.5 Gy·cm²（常规FBP预计约25 Gy·cm²），皮肤入射剂量1.2 Gy（远低于2 Gy的确定性效应阈值）。图像质量满意，封堵器放置精准，术后无并发症。

典型病例2：68岁男性，多支冠脉病变，行分期PCI（共3次手术）。采用50%-60% ASiR，三次手术累计DAP 215 Gy·cm²（常规FBP预计约420 Gy·cm²），累计皮肤剂量4.8 Gy（低于5 Gy的确定性效应阈值）。图像质量满足诊断和操作需求，避免了辐射性皮肤损伤。

典型病例3：55岁女性，复杂颅内动脉瘤栓塞术，手术时长5小时。采用30% ASiR保留细节，同时配合脉冲透视和最后图像保持（LIH），累计DAP 185 Gy·cm²，较常规降低38%。微导丝和微导管边缘清晰，栓塞满意。

长期随访研究：一项针对神经介入医师的5年随访研究显示，采用ASiR后，术者年度有效剂量从平均3.5 mSv降至1.8 mSv，眼晶体剂量从8.2 mSv降至4.1 mSv，远低于ICRP建议的限值。

## 讨论与展望

ASiR技术的主要局限性：第一，**计算复杂度高**——迭代重建计算量是FBP的10-100倍，实时应用依赖GPU加速；第二，**高比例"塑料感"**——高比例ASiR图像可能呈现过度平滑的"塑料样"质感，影响细节识别；第三，**学习曲线**——术者需熟悉不同blend比例的视觉效果，避免误判；第四，**伪影风险**——极低剂量条件下，迭代算法可能引入新型伪影（如斑点伪影）；第五，**回顾性重建耗时**——对长序列进行回顾性ASiR重建耗时数分钟，影响工作流。

未来发展方向包括：第一，**ASiR-V深度学习增强**——结合深度学习进一步提升降噪效果和细节保留；第二，**全剂量自适应**——系统根据实时剂量和质量反馈自动调整blend比例；第三，**4D迭代重建**——利用时间维度信息，进一步降低剂量；第四，**多模态融合重建**——结合IVUS/OCT腔内影像辅助重建；第五，**云端重建**——利用云端算力进行复杂迭代重建，突破本地算力限制。

## 总结

GE ASiR DSA迭代重建技术通过统计建模和迭代优化，突破了传统FBP重建的"剂量-画质"刚性矛盾，实现了低剂量条件下的高清成像。临床研究证实，ASiR可在降低30%-60%辐射剂量的同时保持图像质量，特别适用于需要多次接受介入治疗的患者（如肿瘤反复TACE、冠脉多期PCI）和辐射敏感人群（如儿童、孕妇）。术者应根据患者体型（BMI）、手术类型和阶段灵活设置blend比例——肥胖患者使用低比例（20%-30%）避免过度平滑，儿童和长期随访患者使用高比例（60%-80%）最大降剂量，常规手术使用中比例（30%-50%）平衡画质与剂量。建议定期使用剂量体模验证ASiR效果，确保剂量降低和图像质量稳定。ASiR是GE DSA系统的重要影像技术，合理应用可显著提升医患辐射安全水平，推动介入医学的可持续发展。`,publishDate:"2024-06-15",views:5432,category:"临床应用"},{id:"wxart-021",accountId:"wxa-007",accountName:"影领介入",title:"西门子Artis zeego机器人DSA复合手术室应用与操作",summary:"八轴机器人DSA在复合手术室中的应用优势、操作流程及多学科协作要点。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Artis%20zeego%20robotic%20DSA%20hybrid%20operating%20room%20surgery%20medical&image_size=landscape_4_3",content:`## 西门子Artis zeego机器人DSA复合手术室应用与操作

## 文章背景

复合手术室（Hybrid Operating Room, Hybrid OR）是现代医学发展的重要方向，它将外科开放手术与介入微创治疗整合于同一手术间，使患者在一台手术、一次麻醉中获得最优化的综合治疗。Hybrid OR特别适合主动脉疾病、复杂先心病、心律失常、颅内外血管疾病等需要内外科联合治疗的复杂病例。据《中国复合手术室白皮书2023》数据，我国已建成Hybrid OR超过400间，年复合增长率25%。

Hybrid OR对影像设备提出了严苛要求：第一，**灵活性**——C臂需在手术床周围灵活移动，避开外科术野，需要时快速到位；第二，**大运动范围**——需覆盖全身各部位造影，角度组合丰富；第三，**术中即时评估**——外科操作完成后立即造影评估，避免二次手术；第四，**多模态影像**——支持术中CT样成像和融合导航。传统C臂（地面轨道或天花板轨道）运动受限，难以满足这些要求。

西门子医疗Artis zeego是专为Hybrid OR设计的八轴机器人DSA系统，2007年获得FDA和CE认证，是全球首款机器人多关节C臂DSA。其独特的多关节机械臂设计提供超大运动自由度，可在三维空间内自由定位，实现近乎无限的角度组合，同时避开外科术野。zeego已成为全球Hybrid OR的标杆设备，在Mayo Clinic、Cleveland Clinic、北京安贞医院、上海中山医院等顶级中心广泛应用。本文将系统介绍zeego在Hybrid OR中的应用优势、操作流程和多学科协作要点。

## 核心内容

### 八轴机器人架构

1. **八轴关节设计**：zeego的C臂由八个独立伺服电机驱动的关节组成，包括基座旋转、大臂俯仰、小臂俯仰、腕部俯仰、腕部偏航、C臂旋转、C臂角度调整和末端微调。八轴联动可实现三维空间内任意位置和角度的精确定位。
2. **运动学优势**：相比传统C臂的2-3个自由度，zeego的八自由度使其能够——第一，**避开外科术野**——机械臂可"绕过"外科医生和器械，从最佳角度成像；第二，**等中心成像**——C臂可绕任意设定的等中心点旋转，无需移动患者；第三，**避障运动**——遇到手术灯、输液架等障碍物时，机械臂可自动规划避障路径。
3. **重复定位精度**：机械臂重复定位精度<0.3mm，远优于传统C臂的1-2mm，确保多次成像位置一致。
4. **最大承重**：C臂和平板探测器组件最大承重达180kg，支持大尺寸平板（30×40cm或40×30cm）。

### 复合手术室布局

1. **机械臂收起位置**：在Hybrid OR中，zeego的机械臂可完全收起至手术床一侧（占地<1㎡），为外科团队留出充足的操作空间。
2. **快速展开**：需要造影时，机械臂可从收起位置移动至成像位置仅需15-25秒，外科医生无需重新摆位。
3. **多机位配置**：Hybrid OR常配置zeego + 体外循环机 + 麻醉机 + 食道超声等多设备，需预先规划设备布局，避免运动干涉。
4. **手术床兼容**：zeego兼容多种Hybrid OR专用手术床（如MAQUET、MIZUHO），支持床面纵向和侧向滑动，方便C臂定位。

### 多模态影像融合

1. **syngo DynaCT**：zeego的术中CT样成像功能，通过C臂旋转采集（5-20秒）重建类CT断层图像，软组织分辨率接近常规CT。适用于术中评估支架位置、出血定位、消融边界等。
2. **syngo Needle Guidance**：穿刺引导功能，结合DynaCT规划穿刺路径，实时引导精准穿刺。
3. **3D Roadmap路图导航**：将3D旋转重建的血管影像作为路图，辅助超选择插管。
4. **术前CT/MR融合**：将术前CT/MR与术中DynaCT或透视融合，实现影像导航（类似GE ASSIST）。
5. **4D-DSA**：含时间维度的3D-DSA，可动态观察血流灌注过程，对AVM和瘘的评估尤为重要。

### 术中即时评估

1. **主动脉杂交手术**（去分支+TEVAR）：外科医生完成主动脉弓去分支吻合后，zeego立即进行多角度造影，确认吻合口通畅性和支架位置，避免术后二次转运CT。
2. **TAVR杂交手术**：瓣膜释放前zeego提供精准的双平面角度，释放后立即多角度评估瓣膜位置、反流和冠脉通畅性。
3. **颅内动脉瘤夹闭+栓塞杂交**：神经外科医生夹闭动脉瘤后，术中DSA即刻验证夹闭是否完全、有无载瘤动脉狭窄，必要时调整夹闭或补充栓塞。
4. **冠状动脉杂交再血管化**（CABG+PCI）：外科完成内乳动脉-前降支吻合后，zeego即刻造影评估吻合口，介入医生处理其他血管病变。

### 团队协作模式

1. **多屏显示**：系统支持6-8屏显示，外科医生、介入医生、麻醉医生和体外循环师可在各自视角观看影像，提升协作效率。
2. **预设机位**：可保存多套常用机位（如"外科正位"、"介入侧位"、"麻醉头位"），快速切换。
3. **集成音响**：内置对讲系统，方便团队成员在嘈杂环境中沟通。
4. **影像共享**：术中影像实时传输至各专科手术室和会议室，支持远程会诊。

## 技术细节与临床应用

zeego的**机器人运动学设计**是其核心优势，但也带来独特的操作要求。机械臂的运动规划涉及复杂的逆运动学计算——系统根据目标位置和姿态反解八个关节的角度，可能有多个解（如"肘上"和"肘下"）。术者可通过"姿势偏好"设置选择常用姿势，避免机械臂在手术区域内频繁切换姿势造成干扰。

临床操作要点：第一，**预设常用机位**——根据手术类型预设常用机位（如主动脉造影的LAO 50°/Cranial 10°、冠脉造影的标准体位），术中一键调用；第二，**机械臂收起规划**——在外科操作阶段提前将机械臂收起至安全位置，避免影响外科操作；第三，**避障意识**——机械臂运动时术者应关注其轨迹，避免碰撞手术灯、输液架、外科器械；第四，**等中心设置**——根据靶部位（如心脏、主动脉弓、脑动脉瘤）设定等中心点，确保旋转采集时靶部位始终位于视野中央；第五，**紧急停止**——熟悉紧急停止按钮位置，遇异常立即停机。

zeego在TAVR杂交手术中的应用：传统TAVR在导管室进行，但高危患者（如冠脉闭塞风险、严重外周血管病变）适合在Hybrid OR行杂交TAVR。zeego可在瓣膜释放前提供精准的双平面角度，释放后立即多角度评估瓣膜位置、反流和冠脉通畅性。如发生冠脉闭塞，可立即行冠脉介入或外科搭桥，无需转运。北京安贞医院的数据显示，杂交TAVR的围手术期并发症率较单纯导管室TAVR降低35%。

zeego在颅内动脉瘤夹闭术中的应用：神经外科医生夹闭动脉瘤后，术中DSA即刻验证夹闭是否完全、有无载瘤动脉狭窄。如夹闭不全或载瘤动脉狭窄，可立即调整夹闭或改行栓塞术。这一"术中即时评估"避免了"夹闭不全是术后才发现、需二次手术"的窘境。上海华山医院的数据显示，术中DSA指导下的动脉瘤夹闭完全夹闭率从89%提升至98%。

## 研究进展与案例分析

zeego自2007年推出以来，已成为Hybrid OR的标杆。多项研究证实其在复杂杂交手术中的价值。2018年，《JACC: Cardiovascular Interventions》发表的多中心研究纳入15家中心共2000例主动脉杂交手术，结果显示：Hybrid OR组（zeego）较传统序贯手术组（外科手术+术后介入）住院时间缩短3.2天，并发症率降低28%，30天死亡率降低1.8个百分点。

典型病例1：62岁男性，Stanford A型主动脉夹层，行主动脉弓去分支+TEVAR杂交手术。外科医生完成无名干、左颈总、左锁骨下动脉去分支吻合后，zeego立即多角度造影确认吻合口通畅，随后行TEVAR支架置入封闭原发内膜撕裂口。术中DynaCT评估支架位置和真假腔情况。手术时间6小时（传统序贯手术预计10-12小时），术后患者恢复顺利。

典型病例2：78岁女性，重度主动脉瓣狭窄伴冠脉多支病变，冠脉闭塞风险高。Hybrid OR行杂交TAVR+PCI。先由介入医生处理右冠脉病变，随后外科医生备体外循环下行TAVR。zeego实时引导瓣膜精准释放，释放后即刻造影确认瓣膜位置良好、冠脉通畅。术后患者无并发症，5天出院。

典型病例3：45岁男性，复杂前交通动脉瘤（宽颈、大动脉瘤），首选外科夹闭。神经外科医生夹闭后，术中DSA显示夹闭完全、载瘤动脉通畅。zeego的多角度评估避免了"夹闭不全需二次手术"的风险。术后患者无神经功能缺损。

多中心研究还显示，Hybrid OR的卫生经济学效益显著——虽然初始投资高（Hybrid OR建设成本约2000-3000万元），但由于减少了二次手术、缩短了住院时间、降低了并发症率，3-5年可收回成本。

## 讨论与展望

zeego在Hybrid OR中的主要局限性：第一，**初始投资高**——zeego系统价格显著高于传统C臂，限制了基层医院普及；第二，**占地空间大**——Hybrid OR面积建议>60㎡，设备布局复杂；第三，**维护要求高**——机器人机械臂需定期专业维护，年维护成本约设备投资的5%-8%；第四，**学习曲线陡峭**——熟练操作zeego需30-50例手术经验；第五，**团队协作要求高**——Hybrid OR需外科、介入、麻醉、体外循环多学科团队紧密协作。

未来发展方向包括：第一，**机器人全自动化**——C臂运动全自动化，术者语音或手势控制，减少人工操作；第二，**AI辅助机位推荐**——基于手术类型和解剖结构自动推荐最优机位；第三，**5G远程协作**——支持专家远程实时指导复杂杂交手术；第四，**多机器人协同**——多个机器人（如zeego+穿刺机器人+超声机器人）协同工作；第五，**AR/MR集成**——结合增强现实和混合现实，实现"全息导航"杂交手术。

## 总结

西门子Artis zeego机器人DSA以其八轴多关节机械臂设计、超大运动自由度和丰富的多模态影像功能（DynaCT、3D Roadmap、4D-DSA），成为Hybrid OR的核心影像平台。zeego的核心优势在于可在同一手术间内无缝衔接外科手术与介入操作，使患者在一台手术、一次麻醉中获得最优化的综合治疗。临床研究证实，zeego指导下的主动脉杂交手术、TAVR杂交手术和颅内动脉瘤夹闭术可显著缩短手术时间（30%-40%）、降低并发症率（25%-30%）和改善预后。多学科团队的紧密协作是发挥zeego最大价值的关键——外科医生、介入医生、麻醉医生和体外循环师需建立标准化协作流程，明确各自职责和操作时序。随着机器人技术和AI的进步，zeego将向全自动化、智能化和多机器人协同方向发展，进一步推动Hybrid OR从"手术空间整合"向"手术流程智能化"演进，为复杂疾病的治疗开辟新的可能。`,publishDate:"2024-06-12",views:6789,category:"临床应用"},{id:"wxart-022",accountId:"wxa-008",accountName:"IGTS CAS",title:"飞利浦IntraSight介入应用平台：IVUS与FFR一站式操作指南",summary:"飞利浦IntraSight平台如何实现血管内超声和血流储备分数的无缝集成操作。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20IntraSight%20interventional%20platform%20IVUS%20FFR%20integration%20cardiac%20imaging&image_size=landscape_4_3",content:`## 飞利浦IntraSight介入应用平台：IVUS与FFR一站式操作指南

## 文章背景

冠脉介入（PCI）已从单纯解剖学评估向"解剖+功能"综合评估转变。血管内超声（IVUS）提供血管腔内高分辨率解剖信息（斑块性质、最小管腔面积、支架贴壁），血流储备分数（FFR）提供功能学证据（病变是否导致心肌缺血）。多项大型研究证实，IVUS和FFR指导的PCI可显著降低MACE、靶病变血运重建（TLR）和支架内血栓发生率。2018年ESC/EACTS心肌血运重建指南推荐IVUS和FFR用于复杂病变评估（Class IIa）。

然而，传统模式下IVUS和FFR是独立设备，术者需在DSA、IVUS控制台和FFR分析仪三台设备间反复切换，操作繁琐、耗时长（单次评估约5-10分钟），且各设备影像无法同步显示，影响术者综合判断。这一痛点在左主干、分叉病变、多支病变等需要反复IVUS和FFR评估的复杂病例中尤为突出。

飞利浦IntraSight介入应用平台正是为解决这一痛点而设计。IntraSight将IVUS控制台、FFR分析仪和DSA影像系统整合于统一工作站，实现数据互通、影像同步显示和报告自动生成，简化了多模态评估流程。IntraSight于2016年获得FDA和CE认证，2017年进入中国市场，已在Mayo Clinic、Cleveland Clinic、北京阜外医院等顶级心脏中心广泛应用。本文将系统介绍IntraSight的平台架构、IVUS和FFR操作流程、临床应用和价值。

## 核心内容

### 平台架构优势

1. **集成化架构**：IntraSight将IVUS控制台（飞利浦Volcano系列）、FFR分析仪（压力导丝）和DSA影像系统（Allura系列）整合于同一工作站，硬件和软件深度集成。
2. **数据互通**：IVUS、FFR和DSA数据在同一平台共享，无需人工传输。IVUS测量结果可直接标注于DSA影像，FFR压力曲线可与造影同步回放。
3. **影像同步显示**：平台可在同一屏幕分窗显示DSA造影、IVUS影像和FFR压力曲线，时间轴同步，术者可在推送压力导丝的同时观察血管解剖和实时功能学数据。
4. **统一操作界面**：所有操作通过同一触摸屏控制，无需在多设备间切换，降低操作复杂度。
5. **报告自动生成**：术后系统自动整合IVUS测量数据、FFR结果和关键影像帧，生成结构化报告，支持导出至PACS和电子病历系统。

### IVUS操作流程

1. **导管准备**：选择合适的IVUS导管（如EagleEye Platinum，频率20MHz），连接至IntraSight控制台，进行导管校准。
2. **导管送入**：在冠脉导丝指引下将IVUS导管送至病变远端，确保靶病变全程覆盖。
3. **回撤采集**：通过IntraSight界面启动自动回撤（速度0.5-1.0mm/s），实时显示血管横截面图像。回撤过程中嘱患者屏气，避免运动伪影。
4. **自动测量**：系统自动识别管腔边界和外弹力膜，测量最小管腔面积（MLA）、管腔直径、斑块负荷和斑块体积。
5. **虚拟组织学（VH）分析**：VH-IVUS基于超声背向散射信号识别斑块成分——纤维组织（深绿）、纤维脂质（浅绿）、钙化（白色）、坏死核心（红色）。坏死核心>10%且接近管腔提示易损斑块。
6. **iMap和MapView**：新一代组织表征工具，提供更精细的斑块成分分析。

### FFR测量集成

1. **压力导丝连接**：将压力导丝（如PressureWire Aerostress）连接至IntraSight，系统自动进行压力校准（要求主动脉压与导丝压差<5mmHg）。
2. **导丝送入**：在微导管辅助下将压力导丝送至病变远端，确保传感器位于病变以远至少3-5cm。
3. **充血诱发**：通过静脉或冠脉内注射腺苷（静脉140μg/kg/min，冠脉内100-200μg）诱发最大充血，等待压力稳定。
4. **FFR计算**：系统自动计算FFR=远端冠脉压/主动脉压。FFR≤0.80提示病变有功能学意义，建议介入治疗。
5. **Pullback记录**：在持续充血状态下缓慢回撤压力导丝，记录压力阶差曲线，识别病变最严重部位（特别适合串联病变和弥漫性病变评估）。
6. **衍生指标**：IntraSight还支持静息全周期比值（RFR，无需充血）、舒张期无充血比值（DFR）等非充血功能学指标，简化操作。

### 多模态同步显示

IntraSight的核心优势是**多模态同步显示**——同一屏幕可同时显示：第一，DSA造影图像（实时或回放）；第二，IVUS横截面图像（自动回撤序列）；第三，FFR压力曲线（实时或回放）；第四，病变标记和测量数据。时间轴同步，术者可精确定位病变部位，结合解剖和功能学信息综合判断。

### 报告自动生成

术后系统自动整合：第一，IVUS测量数据（MLA、斑块负荷、斑块成分）；第二，FFR测量结果（基础FFR、最低FFR、Pullback曲线）；第三，关键影像帧（造影、IVUS、FFR）；第四，术前术后对比。生成结构化报告，支持DICOM导出至PACS和电子病历系统。

## 技术细节与临床应用

IntraSight平台的核心价值在于**工作流优化**。传统模式下，术者需在DSA、IVUS和FFR三台设备间反复切换，单次评估耗时约5-10分钟。IntraSight将这一流程缩短至2-3分钟，显著提高手术效率。具体优化包括：第一，**单次连接**——压力导丝和IVUS导管通过同一接口连接IntraSight，无需反复插拔；第二，**统一操作界面**——所有功能通过同一触摸屏控制，减少操作步骤；第三，**自动测量**——IVUS和FFR测量自动化，减少人工操作；第四，**同步显示**——多模态影像同步显示，减少切换时间。

临床应用场景：

- **左主干病变评估**：左主干病变的PCI决策高度依赖IVUS和FFR。IVUS提供MLA（<4.8mm²提示显著狭窄）、斑块分布和钙化程度；FFR提供功能学证据（FFR≤0.80建议介入）。IntraSight的同步显示帮助术者综合判断。研究显示，IVUS指导的左主干PCI可使MACE降低42%。
- **分叉病变评估**：IVUS评估主支和边支开口情况，FFR评估边支功能学意义。IntraSight帮助术者决定是否需要边支保护和对吻球囊扩张。
- **串联病变和弥漫性病变**：FFR Pullback曲线可精确定位病变最严重部位，指导分步介入策略。IVUS评估各段斑块负荷和参考血管直径，优化支架尺寸选择和定位。
- **支架优化**：支架置入后IVUS评估支架膨胀、贴壁和边缘夹层，指导后扩张。研究显示，IVUS指导的PCI支架膨胀率提高15%-20%，MACE降低30%。
- **非罪犯病变评估**：在多支病变患者中，FFR可识别"罪犯病变"，避免不必要的支架置入（FFR>0.80的病变可推迟介入）。

临床数据：FLAVOUR研究（2022年NEJM）纳入1682例中度冠脉狭窄患者，比较FFR和IVUS指导PCI的差异。结果显示，两组2年预后无显著差异，证实两种方法指导PCI均为可接受策略。IntraSight将两者整合，术者可根据临床情况灵活选择。

## 研究进展与案例分析

IntraSight自2016年推出以来，多项研究证实其在工作流优化和临床决策中的价值。2020年，《Circulation: Cardiovascular Interventions》发表的多中心研究纳入8家中心共1200例复杂PCI，结果显示：IntraSight组较传统多设备组单次评估时间缩短55%（3.2 vs 7.1分钟），术者满意度评分4.7 vs 3.4（5分制），6个月MACE降低18%。

典型病例1：68岁男性，左主干+三支病变。造影显示左主干中段60%狭窄，前降支近段70%狭窄，回旋支近段80%狭窄。IntraSight同步评估：左主干FFR 0.83（推迟介入），IVUS MLA 5.2mm²（接近临界）；前降支FFR 0.76（介入），IVUS示偏心纤维脂质斑块；回旋支FFR 0.71（介入），IVUS示严重钙化。基于综合评估制定策略：药物治疗左主干，PCI处理前降支和回旋支。术后1年随访无MACE，避免了对左主干的不必要干预。

典型病例2：55岁男性，前降支中段长病变（40mm，60%-70%狭窄）。FFR Pullback曲线显示病变远段压力阶差最大，提示该段为功能学最严重部位。IVUS示该段MLA 2.8mm²，斑块负荷75%。置入3.0×38mm DES后IVUS评估支架膨胀92%、贴壁良好。术后FFR提升至0.88。6个月造影随访晚期管腔丢失0.25mm，无再狭窄。

典型病例3：72岁女性，分叉病变（Medina 1,1,1），主支前降支中段，边支对角支。IntraSight评估边支FFR 0.78（有功能学意义），决定采用双支架策略（Crush技术）。术后IVUS评估主支和边支支架膨胀良好，对吻球囊扩张后边支FFR提升至0.88。

## 讨论与展望

IntraSight平台的主要局限性：第一，**设备成本高**——集成平台价格显著高于独立IVUS和FFR设备；第二，**学习曲线**——熟练使用多模态评估需20-30例经验；第三，**耗材成本**——IVUS导管和压力导丝均为一次性高值耗材，单次评估成本约3000-5000元；第四，**适用范围有限**——目前主要应用于冠脉介入，外周和神经介入的应用尚在探索；第五，**依赖术者经验**——IVUS图像判读需要经验积累，新手可能误判斑块性质。

未来发展方向包括：第一，**AI辅助分析**——基于深度学习自动识别斑块性质、测量MLA和判断支架贴壁；第二，**CT-FFR整合**——将CT-FFR（基于冠脉CTA的功能学评估）与IntraSight整合，实现"无创-有创"功能学评估连续性；第三，**OCT整合**——整合OCT（光学相干断层扫描），提供更高分辨率的腔内影像；第四，**外周和神经介入拓展**——开发适用于外周血管和脑血管的IVUS/FFR方案；第五，**云端数据共享**——支持多中心数据共享和AI模型训练。

## 总结

飞利浦IntraSight介入应用平台通过整合IVUS、FFR和DSA影像系统于统一工作站，实现了冠脉介入多模态评估的工作流优化。其核心价值在于：第一，**简化操作**——单次评估时间从5-10分钟缩短至2-3分钟；第二，**同步显示**——多模态影像同步显示，提升综合判断能力；第三，**自动测量**——IVUS和FFR测量自动化，减少人工操作；第四，**结构化报告**——自动生成报告，便于临床决策和随访。临床研究证实，IntraSight指导的复杂PCI可降低MACE 18%、提高手术效率55%。在左主干、分叉病变、串联病变和支架优化等场景中，IntraSight帮助术者实现"解剖+功能"综合评估，做出更精准的血运重建决策，减少过度治疗和治疗不足。术者应充分利用其同步显示和自动分析功能，结合临床经验，提升PCI的质量和患者长期预后。随着AI和多模态影像技术的发展，IntraSight有望向智能化、无创化和多部位应用方向持续演进。`,publishDate:"2024-06-13",views:7234,category:"功能介绍"},{id:"wxart-023",accountId:"wxa-009",accountName:"联影介入",title:"联影uAngio CT一体机操作指南：DSA与CT模式切换详解",summary:"全球首创DSA+CT一体化系统操作教程，两种模式切换流程与临床应用场景。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20CT%20all%20in%20one%20system%20DSA%20CT%20mode%20switching%20guide&image_size=landscape_4_3",content:`## 联影uAngio CT一体机操作指南：DSA与CT模式切换详解

## 文章背景

介入手术的核心需求是"术中即时获得高质量影像信息"。然而，传统介入手术室只配备DSA，无法获取断层CT图像；当术中需要CT评估（如出血定位、肿瘤消融边界评估、术后并发症排查）时，需将患者转运至CT室，带来三大问题：第一，**转运风险**——危重患者转运过程中可能出现生命体征恶化、管路脱出等风险；第二，**时间延误**——转运和CT检查需30-60分钟，可能错失治疗时机；第三，**信息断层**——DSA和CT是不同设备、不同时间点的影像，无法精确对应。

为解决这一问题，业界探索了多种方案：第一，**Hybrid OR**——在手术间内同时配置DSA和滑轨CT，但占地大、成本高；第二，**C臂CT**——通过C臂旋转采集重建类CT图像（如GE SmartCT、西门子DynaCT），但软组织分辨率有限；第三，**DSA-CT一体机**——在同一机架上集成C臂DSA和滑轨CT两种成像模式，兼顾灵活性和图像质量。

联影医疗于2019年推出全球首创的uAngio CT一体机，将C臂DSA和滑轨CT集成于同一设备平台。CT模式采用诊断级多排CT（≥64排），软组织分辨率显著优于C臂CT。该系统于2020年获得NMPA三类医疗器械注册证，已在多家三甲医院装机使用。uAngio CT一体机特别适合急诊出血介入、肿瘤介入和复杂介入手术，为"术中即时CT评估"提供了革命性解决方案。本文将详细介绍其架构、操作流程、临床应用和优势。

## 核心内容

### 双模式集成架构

1. **机架集成**：系统在同一机架上集成C臂DSA和滑轨CT两种成像模式。C臂安装于机架前方，提供常规血管造影和介入操作支持；滑轨CT安装于机架后方，沿床旁轨道移动至扫描位置进行断层扫描。
2. **共享床面**：两种模式共享同一手术床，患者无需移动即可完成DSA和CT检查。床面采用碳纤维低吸收材质，适合CT扫描。
3. **独立X射线源**：DSA和CT使用独立的X射线管和平板探测器/CT探测器，确保各自最优性能。DSA采用大尺寸非晶硅平板，CT采用64排及以上探测器。
4. **统一工作站**：两种模式的图像在同一工作站显示和处理，支持融合导航。

### 模式切换流程

1. **DSA→CT切换**：第一，C臂自动移至安全位置（避开CT扫描区域）；第二，滑轨CT沿轨道移动至扫描位置（约30秒）；第三，CT进行定位像扫描和断层扫描（5-15秒）；第四，图像重建并传输至工作站。整个切换过程约需1-2分钟，无需移动患者。
2. **CT→DSA切换**：第一，滑轨CT移回原位（约20秒）；第二，C臂移回成像位置；第三，恢复DSA透视和采集模式。切换时间<1分钟。
3. **自动化程度**：模式切换由系统自动完成，术者只需在触摸屏选择"切换至CT"或"切换至DSA"。系统自动完成机械臂运动、参数预设和图像重建。

### CT扫描参数设置

1. **预设协议**：提供头部、胸部、腹部和四肢等多种预设扫描协议，每种协议对应优化的kV、mA、层厚和螺距。
2. **扫描模式**：支持平扫、增强扫描和CTA，可根据临床需求选择。增强扫描需配合高压注射器使用。
3. **参数调节**：术者可手动调整层厚（0.625-5mm）、螺距（0.5-1.5）、重建算法（标准/骨/软组织/肺）和视野（FOV）。
4. **剂量管理**：CT模式采用迭代重建和低剂量扫描协议，将术中CT的有效剂量控制在常规诊断CT的50%-70%。

### DSA-CT融合应用

1. **CT扫描完成后**，图像自动传输至工作站，可与DSA影像进行融合导航。
2. **肿瘤消融应用**：CT精确定位病灶并规划穿刺路径，融合显示消融针与肿瘤的三维关系。消融后即刻CT评估消融边界是否覆盖肿瘤。
3. **出血介入应用**：CTA快速定位出血源，融合显示出血责任血管，辅助超选择栓塞。
4. **TACE术后评估**：术后即刻CT评估碘油沉积情况，及时发现未充盈的肿瘤区域并补充栓塞。
5. **穿刺活检**：CT精确定位病灶，规划避开重要结构的穿刺路径。

### 辐射剂量管理

1. **实时剂量监测**：系统实时显示DSA和CT的剂量面积乘积（DAP）、CT剂量指数（CTDI）和剂量长度乘积（DLP）。
2. **剂量优化协议**：CT模式采用低剂量协议，配合迭代重建降低剂量。儿童和重复治疗患者使用更低剂量协议。
3. **剂量累计统计**：系统累计统计单次手术的DSA和CT总剂量，便于辐射安全管理。
4. **剂量警报**：当皮肤入射剂量接近确定性效应阈值（2 Gy）时系统报警，提醒术者注意。

## 技术细节与临床应用

uAngio CT一体机的核心技术挑战是**两种模式的无缝集成**——C臂DSA和滑轨CT在机械结构、X射线源、探测器和重建算法上差异巨大，如何在同一设备上实现两种模式的高质量成像和快速切换是工程难题。联影通过以下技术解决：第一，**独立X射线源和探测器**——避免相互干扰，确保各自最优性能；第二，**精密机械协同**——C臂和CT的运动轨迹精确规划，避免碰撞；第三，**统一坐标系**——两种模式共享同一空间坐标系，便于图像融合；第四，**快速切换**——机械臂运动优化，模式切换<2分钟。

临床操作要点：第一，**患者摆位**——术前应根据可能的CT扫描需求摆位，确保靶部位位于CT扫描范围；第二，**呼吸控制**——腹部CT扫描需患者屏气（10-15秒），避免运动伪影；第三，**造影剂协调**——如需增强CT或CTA，应与高压注射器协调，避免与DSA造影冲突；第四，**融合校准**——DSA-CT融合前应进行配准校准，确保融合精度；第五，**剂量监测**——密切监测累计剂量，避免过量辐射。

急诊出血介入应用：uAngio CT一体机的优势在急诊出血介入中尤为突出。患者入院后可直接推入介入手术室，先进行CTA明确出血部位（如消化道出血、咯血、产后出血、创伤性出血），随即在同一设备上进行栓塞治疗，避免了转运CT室的时间和风险。研究显示，uAngio CT一体机模式下急诊出血的诊疗时间较传统模式缩短40-60分钟，对休克患者意义重大。

TACE应用：在TACE术中，栓塞完成后即刻行CT扫描，可清晰显示碘油沉积情况，及时发现未充盈的肿瘤区域并补充栓塞。研究显示，uAngio CT指导下的TACE完全沉积率从78%提升至93%，1年局部控制率从65%提升至82%。

肿瘤消融应用：CT精确定位病灶并规划穿刺路径，融合显示消融针与肿瘤的三维关系。消融后即刻CT评估消融边界是否覆盖肿瘤，确保完全消融。研究显示，uAngio CT指导下的肝肿瘤消融完全消融率96.5%，较常规组（87.2%）提高9.3个百分点。

## 研究进展与案例分析

uAngio CT一体机自2019年推出以来，多项研究证实其在多种介入场景中的价值。2022年，《中华放射学杂志》发表的多中心研究纳入5家三甲医院共800例介入手术，结果显示：第一，术中CT扫描成功率99.2%；第二，模式切换平均时间1.4分钟；第三，临床决策改变率32%（即术中CT发现新问题改变了原治疗方案）；第四，避免了84%的术后转运CT。

典型病例1：55岁男性，急性消化道大出血，生命体征不稳定。传统模式下需先转运CT室行CTA明确出血源，再转运介入手术室栓塞。uAngio CT一体机模式下，患者直接推入介入手术室，CTA显示十二指肠动脉出血，随即行超选择栓塞，止血成功。从入院到止血完成仅65分钟（传统模式预计120-150分钟），患者转危为安。

典型病例2：68岁男性，原发性肝癌（直径5cm），行TACE联合消融。TACE栓塞后即刻CT显示肿瘤下极碘油沉积不全，及时补充栓塞。随后CT引导下经皮微波消融，融合CT轮廓精准定位肿瘤边界，消融完全。术后6个月复查MRI无复发。

典型病例3：45岁女性，复杂肝血管瘤（毗邻肝静脉和门静脉），行经皮硬化剂注射治疗。CT精确定位血管瘤与周围血管关系，规划避开肝静脉和门静脉的穿刺路径。术中CT实时监测硬化剂分布，避免血管内误栓。术后患者无并发症，血管瘤缩小60%。

典型病例4：72岁男性，复杂肾囊肿，行经皮硬化治疗。CT精确定位囊肿位置，规划穿刺路径避开肾集合系统和血管。穿刺后CT确认针尖位于囊肿中央，抽液后注射硬化剂。术后CT评估硬化剂分布满意，无渗漏。患者次日出院。

## 讨论与展望

uAngio CT一体机的主要局限性：第一，**设备成本高**——一体机价格显著高于独立DSA，限制了基层医院普及；第二，**占地空间大**——需要兼顾CT和DSA的安装空间，手术间面积建议>50㎡；第三，**CT性能限制**——术中CT虽然优于C臂CT，但仍不及专用诊断CT（特别是心脏CT）；第四，**维护复杂**——两种模式的维护需求不同，需双重维护体系；第五，**学习曲线**——熟练操作两种模式需30-50例经验。

未来发展方向包括：第一，**更大排数CT**——升级至128排或更高排数CT，提升时间和空间分辨率；第二，**能谱CT**——引入能谱CT功能，提供物质分离和定量分析；第三，**AI辅助决策**——基于AI自动识别病灶和规划治疗方案；第四，**5G远程协作**——支持专家远程实时指导复杂介入手术；第五，**多模态融合**——整合超声、IVUS、OCT等多模态影像，实现"全影像"介入导航。

## 总结

联影uAngio CT一体机作为全球首创的DSA-CT一体化系统，通过在同一机架上集成C臂DSA和滑轨CT两种成像模式，实现了"术中即时CT评估"的革命性突破。其核心优势在于：第一，**无需转运患者**——模式切换仅需1-2分钟，患者无需移动；第二，**诊断级CT图像**——软组织分辨率显著优于C臂CT；第三，**融合导航**——DSA-CT融合显示提供精准影像引导；第四，**缩短诊疗时间**——急诊出血诊疗时间缩短40-60分钟。临床研究证实，uAngio CT一体机在急诊出血介入、TACE、肿瘤消融和穿刺活检等场景中可显著提升诊疗效率（决策改变率32%）和精准度（消融完全率提升9.3个百分点）。术者应熟练掌握两种模式的切换流程、CT扫描参数设置和融合应用技巧，充分发挥一体化平台的优势。随着CT技术和AI的进步，uAngio CT一体机有望向更大排数、能谱CT和AI辅助决策方向发展，进一步推动介入影像的精准化和智能化。`,publishDate:"2024-06-11",views:8901,category:"操作指南"},{id:"wxart-024",accountId:"wxa-001",accountName:"介入放射学杂志",title:"2024版中国门静脉高压介入治疗专家共识解读",summary:"最新版门静脉高压介入治疗共识发布，TIPS适应症和技术要点更新解读。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portal%20hypertension%20TIPS%20interventional%20treatment%20consensus%20guidelines%20liver&image_size=landscape_4_3",content:`## 2024版中国门静脉高压介入治疗专家共识解读

## 文章背景

门静脉高压是肝硬化等严重肝病的核心并发症，发生率高达50%-70%。门静脉高压可导致食管胃底静脉曲张破裂出血（曲张破裂出血死亡率15%-25%）、顽固性腹水、肝性脑病、门静脉血栓和肝肾综合征等严重后果，是肝硬化患者的主要死亡原因。我国是肝病大国，慢性乙肝病毒感染者约8600万，肝硬化患者约700万，每年因门静脉高压并发症死亡者超过30万。

经颈静脉肝内门体分流术（Transjugular Intrahepatic Portosystemic Shunt, TIPS）是介入治疗门静脉高压的代表性技术。TIPS通过颈静脉入路，在肝静脉与门静脉之间建立分流道，植入覆膜支架降低门静脉压力，可有效控制曲张破裂出血和顽固性腹水。TIPS由Richter等于1988年首次临床应用，1990年代引入我国，2010年后随着覆膜支架的普及快速发展。中华医学会放射学分会介入专业委员会于2017年发布了首版《门静脉高压介入治疗专家共识》，规范了TIPS技术的临床应用。

2024版专家共识在2017版基础上，结合最新循证证据（包括Baveno VII共识、AASLD指南、中国肝癌分期等）、覆膜支架技术进步（Viatorr TIPS Endoprosthesis、可控直径支架）、术前评估方法（多模态影像、肝静脉压力梯度HVPG）和术后管理新理念（个体化分流、肝性脑病防治），对TIPS适应证、技术操作和术后管理进行了全面更新。本文将系统解读2024版共识的核心更新要点。

## 核心内容

### 适应证优化

2024版共识明确了TIPS的**核心适应证**和**扩展适应证**：

核心适应证：第一，**急性曲张破裂出血**——药物（生长抑素/奥曲肽）和内镜治疗失败、24小时内出血未控制或一周内再出血；第二，**曲张二级预防**——尤其是内镜治疗失败者、多次内镜治疗复发者；第三，**顽固性腹水**——大量穿刺放液后快速复积、利尿剂抵抗。

扩展适应证（新增）：第一，**门静脉血栓（PVT）合并门脉高压**——共识新增对PVT患者的TIPS治疗推荐，特别是部分机化血栓、侧支循环建立不良者；第二，**肝性胸腔积液**——顽固性胸腔积液经保守治疗无效；第三，**布-加综合征**——肝静脉或下腔静脉阻塞导致的门脉高压；第四，**肝肾综合征**——TIPS可改善肾灌注，适用于Ⅰ型HRS患者。

禁忌证更新：第一，**绝对禁忌证**——严重肝功能衰竭（Child-Pugh>13分）、严重心功能不全、多囊肝、弥漫性肝癌、严重凝血障碍（INR>5）；第二，**相对禁忌证**——重度肝性脑病、严重感染、门静脉海绵样变（相对）、胆道梗阻。

### 术前评估更新

1. **多模态影像评估**：CTA/MRA评估门静脉解剖、肝静脉通畅性、分流道可行性和侧支循环。共识强调三维重建对分流道规划的价值。
2. **肝静脉压力梯度（HVPG）**：HVPG>10mmHg为临床显著性门脉高压，>12mmHg有出血风险，>16mmHg为高危。HVPG是评估门脉高压严重程度和TIPS疗效的金标准。
3. **门静脉血栓评估**：对于PVT患者，需评估血栓范围（主干/分支）、机化程度（急性/亚急性/慢性）和侧支循环建立情况，决定是否需先行血栓抽吸或溶栓。
4. **肝功能评估**：Child-Pugh分级、MELD评分和ALBI分级综合评估。MELD>18分提示TIPS风险增加，>25分不建议TIPS。
5. **心脏评估**：TIPS会增加心脏前负荷，术前需评估心功能（超声、BNP），严重心功能不全（EF<40%）为禁忌。

### 分流道直径选择

1. **可控直径支架**：共识推荐采用8-10mm可控直径支架实现**个体化分流**，根据患者肝功能（Child-Pugh分级）和门静脉压力梯度（PPG）目标值调整支架直径。
2. **直径选择策略**：Child-Pugh A级患者可使用10mm支架充分分流；Child-Pugh B级建议8-10mm；Child-Pugh C级谨慎使用8mm支架，必要时逐步扩张。
3. **覆膜支架优先**：Viatorr等覆膜支架可显著降低分流道狭窄和阻塞率（1年通畅率85% vs 裸支架50%），共识强烈推荐。
4. **分流道位置**：从肝右静脉至门静脉右支最常用，必要时可选肝中静脉至门静脉左支。

### 术后PPG监测

1. **PPG目标值**：术后PPG目标值建议为8-12mmHg，既可有效降低门静脉压力（出血风险），又能减少肝性脑病风险。共识强调个体化——出血高危患者目标PPG 8mmHg，肝性脑病高危患者目标PPG 12mmHg。
2. **PPG降幅**：术后PPG应较术前降低50%以上或降至12mmHg以下，否则提示分流不足。
3. **PPG监测频率**：共识推荐术后1周、1个月、3个月、6个月、12个月复查PPG和分流道超声，评估分流道通畅性。
4. **分流道调整**：如PPG回升或分流道狭窄，可球囊扩张或支架内再置入。

### 肝性脑病防治

1. **发生率**：术后肝性脑病发生率约15%-30%（新型覆膜支架和个体化分流后降至10%-20%），多数发生在术后1-3个月。
2. **预防性用药**：共识建议术后预防性使用乳果糖（30-60mL/d）和/或利福昔明（550mg bid），并限制蛋白质摄入（0.8-1.0g/kg/d）。
3. **风险因素**：年龄>65岁、Child-Pugh C级、既往肝性脑病史、肌少症为高危因素，需加强监测。
4. **分级管理**：Ⅰ-Ⅱ级肝性脑病保守治疗，Ⅲ-Ⅳ级需考虑分流道缩小或闭塞。

## 技术细节与临床应用

TIPS的技术操作要点：第一，**颈静脉穿刺**——选择右颈内静脉，穿刺成功后置入9-10F鞘管；第二，**肝静脉插管**——导管选择肝右静脉（最常用）或肝中静脉，行肝静脉造影和HVPG测量；第三，**门静脉穿刺**——使用Rösch-Uchida或TIPS-1000穿刺针，从肝静脉穿刺门静脉右支（穿刺深度3-5cm），穿刺成功后行门静脉造影和测压；第四，**分流道扩张**——使用8mm球囊扩张分流道，标记肝静脉和门静脉端；第五，**支架置入**——覆膜支架（Viatorr）定位覆盖肝静脉端至门静脉端，球囊扩张支架至目标直径；第六，**术后评估**——复查门静脉造影、PPG和分流道通畅性。

技术难点：第一，**门静脉穿刺**——肝硬化患者肝静脉与门静脉解剖关系变异，穿刺可能失败（成功率85%-95%）；第二，**门静脉血栓**——PVT患者门静脉穿刺困难，可能需经皮肝穿门静脉标记；第三，**分流道定位**——支架需准确覆盖肝静脉端至门静脉端，避免支架移位或漏血；第四，**肝性脑病平衡**——分流道直径需平衡降压效果和肝性脑病风险。

多学科协作（MDT）：共识强调MDT模式的重要性，介入科、消化科、肝病科、肝胆外科、麻醉科和重症医学科应共同参与TIPS决策。MDT讨论内容包括：适应证评估、术前优化、技术方案、术后管理和并发症处理。研究显示，MDT模式下TIPS的并发症率降低35%，1年生存率提高12%。

## 研究进展与案例分析

TIPS技术自1988年应用以来，多项RCT研究奠定了其临床地位。2018年NEJM发表的PREDESCI研究纳入201例肝硬化患者，结果显示预防性TIPS（早期TIPS）较药物治疗组1年生存率提高13个百分点（86% vs 73%），首次出血风险降低50%以上。

2024版共识引用的多项研究：

- **覆膜支架长期通畅性**：Viatorr支架1年通畅率85%-90%，3年通畅率75%-80%，显著优于裸支架（1年50%-60%）。
- **个体化分流**：可控直径支架（8-10mm）可根据患者情况调整，肝性脑病发生率从30%降至18%。
- **PVT合并门脉高压**：TIPS治疗PVT的再通率72%-85%，1年门静脉再通率65%，出血控制率88%。

典型病例1：58岁男性，乙肝肝硬化失代偿期，食管胃底曲张破裂大出血，药物和内镜治疗失败。急诊TIPS：从肝右静脉穿刺门静脉右支，置入10mm Viatorr支架，PPG从22mmHg降至9mmHg。术后出血控制，1周内未再出血。术后3个月复查分流道通畅，无肝性脑病。1年随访存活，无再出血。

典型病例2：62岁女性，乙肝肝硬化伴门静脉主干血栓（部分机化），反复腹水。MDT评估后行TIPS联合血栓抽吸：先经皮肝穿门静脉标记，TIPS穿刺门静脉后抽吸血栓，置入8mm可控直径支架（Child-Pugh B级）。术后腹水消退，6个月复查门静脉再通，分流道通畅。

典型病例3：45岁男性，布-加综合征（肝静脉广泛阻塞），顽固性腹水和腹痛。TIPS从下腔静脉直接穿刺门静脉（肝静脉阻塞无法使用），置入10mm覆膜支架。术后腹水消退，腹痛缓解，1年随访肝功能改善。

## 讨论与展望

TIPS技术的主要局限性：第一，**肝性脑病风险**——尽管覆膜支架和个体化分流降低了发生率，但仍有15%-20%患者发生；第二，**肝功能恶化**——TIPS分流减少了肝脏灌注，可能导致肝功能恶化（特别是Child-Pugh C级患者）；第三，**分流道狭窄**——即使覆膜支架，1年狭窄率仍10%-15%，需定期复查和干预；第四，**适应证选择**——不恰当的适应证选择可能导致疗效不佳或并发症增加；第五，**技术学习曲线**——TIPS技术难度高，学习曲线长（30-50例）。

未来发展方向包括：第一，**新型支架**——生物可吸收支架、药物涂层支架和4D血流动力学优化支架；第二，**精准分流**——基于血流动力学模拟的个体化分流方案；第三，**AI辅助规划**——AI辅助分流道规划和风险评估；第四，**肝细胞再生**——TIPS联合肝细胞移植或干细胞治疗；第五，**早期TIPS推广**——对高危患者预防性TIPS的适应证扩展。

## 总结

2024版中国门静脉高压介入治疗专家共识在2017版基础上，结合最新循证证据和技术进步，对TIPS的适应证、术前评估、分流道选择、术后管理和并发症防治进行了全面更新。核心更新包括：扩展适应证（PVT、肝性胸腔积液、肝肾综合征）、强调多模态影像和HVPG评估、推荐可控直径覆膜支架实现个体化分流、明确PPG目标值8-12mmHg、规范肝性脑病防治。共识强调多学科协作（MDT）模式的重要性，介入科、消化科、肝病科、肝胆外科、麻醉科和重症医学科应共同参与TIPS决策。TIPS技术已日趋成熟，术者应严格把握适应证、规范操作流程、加强术后管理，使更多门静脉高压患者从这一微创技术中获益。随着新型支架、精准分流和AI辅助规划的发展，TIPS将向更安全、更精准和更个体化方向演进，为门静脉高压患者提供更优的治疗选择。`,publishDate:"2024-06-09",views:9876,category:"指南共识"},{id:"wxart-025",accountId:"wxa-003",accountName:"心血管介入资讯",title:"生物可吸收支架研究进展与临床应用现状",summary:"从第一代到新一代可吸收支架，技术发展历程与临床数据更新。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=bioresorbable%20scaffold%20BRS%20coronary%20stent%20cardiology%20research%20progress&image_size=landscape_4_3",content:`## 生物可吸收支架研究进展与临床应用现状

## 文章背景

冠脉介入（PCI）的发展历程被业界概括为"四次革命"：第一次是1977年Gruentzig开展的经皮冠脉腔内成形术（PTCA），开创了冠脉介入时代；第二次是1986年Sigwart置入首例裸金属支架（BMS），解决了PTCA的弹性回缩和急性闭塞问题；第三次是2001年药物洗脱支架（DES）问世，显著降低再狭窄率；第四次则是生物可吸收支架（Bioresorbable Scaffold, BRS）的出现，旨在解决金属支架长期留存血管带来的"金属cage"问题。

金属DES虽疗效显著，但长期留存血管带来一系列问题：第一，**金属cage束缚**——永久性金属支架限制了血管的自然舒缩功能，影响血管重构；第二，**晚期支架血栓**——金属支架长期存在可能引发晚期和极晚期支架内血栓（发生率0.5%-1%/年）；第三，**影响未来治疗**——金属支架阻塞了外科搭桥的吻合口选择，也影响再次介入的通路；第四，**影像学伪影**——金属支架干扰CT和MR随访。

BRS的核心理念是在完成血管支撑和重塑的临时使命（6-12个月）后逐渐降解吸收，使血管恢复自然舒缩功能。BRS被誉为PCI领域的"第四次革命"，理论上兼具DES的近期疗效和"无支架"的远期优势。2006年Abbott推出首款聚左旋乳酸（PLLA）BRS——Absorb BVS，2011年获得CE认证，2016年获得FDA批准。然而，Absorb BVS因支架内血栓问题（尤其是极晚期血栓）于2017年全球退市，BRS发展遭遇重大挫折。

经历Absorb BVS的挫折后，新一代BRS通过材料改性、支架变薄和工艺优化显著改善了安全性和有效性。本文将系统介绍BRS的材料学进展、临床数据、适应证拓展和未来方向。

## 核心内容

### 材料学进展

1. **第一代BRS（PLLA）**：采用聚左旋乳酸（Poly-L-Lactic Acid, PLLA），降解周期3-4年。Absorb BVS支架厚度约150μm，径向支撑力较弱，膨胀受限，易发生弹性回缩。PLLA在X线下不透光性差，需依靠两端的铂标记点定位。
2. **新一代聚合物BRS**：通过材料改性改善性能——第一，**支架变薄**——新一代BRS支架厚度降至100-150μm（如Firesorb 100μm、Xinsorb 125μm），改善输送性和顺应性；第二，**材料改性**——酪氨酸衍生物聚合物（Firesorb）、聚乳酸-乙醇酸共聚物（PLGA）等新材料改善机械性能和降解速率；第三，**显影性增强**——增加标记点和显影材料，改善X线可见性。
3. **镁合金BRS**：以镁合金为基础（如Biotronik Magmaris），降解周期1-2年，机械性能优于聚合物，X线显影性较好。镁合金BRS的径向支撑力接近金属DES，但降解速度较快。
4. **铁基BRS**：以铁为基础（研发中），机械性能优异，但降解速度慢（>5年），目前仍处于临床前研究阶段。

### 临床疗效数据

1. **Absorb BVS（第一代）**：ABSORB III研究（2015年NEJM）显示Absorb BVS组1年靶病变失败率（TLF）7.8% vs DES 6.1%（P=0.16），但2年随访TLF升高至11.7% vs 8.1%，3年支架内血栓率1.5% vs 0.5%。极晚期血栓问题导致Absorb BVS于2017年全球退市。
2. **新一代BRS**：Firesorb（中国，乐普）FUTURE-II研究显示1年TLF 3.0%（vs DES 4.0%，P=0.39），支架内血栓0.3%；Xinsorb（中国，微创）研究显示1年TLF 4.0%，支架内血栓0.5%；Magmaris（Biotronik）BIOSOLVE-II研究显示5年TLF 6.0%，支架内血栓0.5%。
3. **与金属DES对比**：新一代BRS的TLF（约5%-7%）已降至与金属DES（约4%-6%）相当的水平，支架内血栓发生率<1%，显著优于第一代产品。

### 适应证拓展

1. **当前适应证**：BRS主要适用于原发、简单冠脉病变（A型或B1型病变），血管直径2.75-4.0mm，病变长度<20mm。
2. **正在探索的适应证**：新一代薄支架（<100μm）有望拓展至更复杂的病变类型，包括B2/C型病变、长病变（>20mm）、分叉病变、慢性完全闭塞（CTO）等。
3. **特殊人群**：BRS对年轻患者（<60岁）和分支血管病变具有特殊价值——年轻患者未来可能需要再次介入或外科搭桥，可吸收支架避免了金属cage的束缚。

### 影像随访要求

由于BRS在X线下不透光，术后随访主要依赖腔内影像：第一，**OCT**——评估支架贴壁、内膜覆盖和降解过程，可清晰显示BRS的支架梁和降解过程中的光学信号变化；第二，**IVUS**——评估支架膨胀和斑块情况，但对BRS支架梁的显示不如OCT；第三，**冠脉CTA**——评估管腔和支架情况，受金属伪影影响小，适合BRS随访；第四，**多模态融合**——OCT+IVUS+CTA多模态评估提供全面信息。

### 操作技术要点

BRS的输送性和顺应性较DES差，需要更精细的操作：

1. **病变预处理**：充分预扩张（球囊:血管比1:1），必要时使用切割球囊或旋磨，确保病变充分扩张。
2. **支架尺寸选择**：精确测量血管直径（IVUS指导），避免支架尺寸选择错误。BRS的尺寸选择窗口较窄（oversize 0.25-0.5mm）。
3. **支架输送**：避免过度推送，遇阻力时不可强行推送，可能导致支架损坏。
4. **支架后扩张**：使用高压非顺应性球囊（≥16atm）充分后扩张，确保支架完全膨胀和贴壁。后扩张对BRS尤为重要，可显著降低支架内血栓风险。
5. **PSP原则**：Pre-dilation（充分预扩张）、Sizing（精确尺寸）、Post-dilation（充分后扩张）三原则是BRS操作的核心，可显著降低TLF和支架内血栓。

## 技术细节与临床应用

BRS的降解过程分为三个阶段：第一，**支撑期**（0-6个月）——支架提供径向支撑，维持血管通畅，药物（依维莫司等）抑制内膜增生；第二，**降解期**（6-24个月）——支架逐渐降解，机械支撑力下降，血管恢复部分舒缩功能；第三，**吸收期**（2-4年）——支架完全降解为水和二氧化碳，血管完全恢复自然状态。

Absorb BVS失败的原因分析：第一，**支架厚度过大**（150μm）——导致血流扰动和内膜增生；第二，**径向支撑力不足**——早期弹性回缩；第三，**降解不均匀**——支架梁断裂或不均匀降解导致血管壁损伤；第四，**操作不规范**——预扩张和后扩张不充分，支架贴壁不良。

新一代BRS的改进：第一，**支架变薄**（<100-125μm）——改善血流动力学和输送性；第二，**边缘优化设计**——减少支架边缘的应力集中；第三，**降解速率优化**——更均匀、可控的降解；第四，**显影性增强**——更好的X线可见性，便于精确定位。

临床应用要点：第一，**严格选择适应证**——目前BRS主要适用于原发、简单病变，复杂病变仍首选DES；第二，**遵循PSP原则**——充分预扩张、精确尺寸、充分后扩张是BRS成功的关键；第三，**IVUS/OCT指导**——腔内影像指导BRS置入可显著改善效果；第四，**双联抗血小板治疗（DAPT）**——BRS术后DAPT至少12个月，新一代BRS可考虑延长至24-36个月（降解期）；第五，**影像随访**——术后6-12个月OCT评估支架贴壁和内膜覆盖，2-3年评估降解情况。

## 研究进展与案例分析

BRS领域近年来研究活跃，新一代产品的数据持续积累。2023年，《JACC: Cardiovascular Interventions》发表的FUTURE-II研究3年随访结果显示：Firesorb组3年TLF 5.2%，支架内血栓0.5%，与金属DES（Synergy）无显著差异（P=0.62）。

2022年，《European Heart Journal》发表的BIOSOLVE-IV研究5年随访显示：Magmaris镁合金BRS 5年TLF 6.0%，支架内血栓0.5%，证实镁合金BRS的长期安全性。

多款国产BRS进入临床试验阶段：第一，**Firesorb（乐普）**——酪氨酸衍生物聚合物，厚度100μm，已进入NMPA注册临床；第二，**Xinsorb（微创）**——PLLA，厚度125μm，已完成注册临床；第三，**NeoVas（华安）**——PLLA，已获批上市；第四，**IBS（先健）**——铁基BRS，处于临床研究阶段。

典型病例1：45岁男性，前降支中段80%狭窄（A型病变），血管直径3.0mm。IVUS指导下置入3.0×18mm Firesorb BRS，充分预扩张（2.5×15mm球囊，12atm）后置入支架，高压后扩张（3.25×12mm非顺应性球囊，18atm）。OCT评估支架膨胀95%、贴壁良好。术后DAPT 18个月。1年OCT随访示内膜覆盖85%，无贴壁不良。3年随访无MACE，OCT示支架大部分降解。

典型病例2：38岁女性，回旋支中段70%狭窄（B1型病变），血管直径2.75mm。考虑患者年轻，未来可能需要再次介入，选择BRS。IVUS指导下置入2.75×15mm Xinsorb，PSP原则操作规范。术后6个月OCT示支架贴壁良好，内膜覆盖90%。2年随访无MACE，CTA示管腔通畅。

典型病例3：55岁男性，前降支近段长病变（25mm，B2型），血管直径3.5mm。IVUS指导下置入3.5×24mm Magmaris镁合金BRS，充分后扩张。术后1年OCT示支架完全降解，血管恢复舒缩功能。患者术后恢复正常运动，无MACE。

## 讨论与展望

BRS技术的主要局限性：第一，**适应证有限**——目前主要适用于简单病变，复杂病变仍首选DES；第二，**操作要求高**——PSP原则对术者要求高，操作不规范易导致并发症；第三，**显影性差**——聚合物BRS的X线可见性仍不及金属支架；第四，**降解过程不可控**——降解速率和均匀性难以精确控制；第五，**长期数据有限**——新一代BRS的5年以上长期数据仍需积累；第六，**成本高**——BRS价格显著高于DES，限制了普及。

未来发展方向包括：第一，**支架进一步变薄**——目标<80μm，接近金属DES厚度；第二，**材料创新**——新型聚合物、镁合金改进和铁基BRS突破；第三，**显影性增强**——增加显影标记或可显影材料；第四，**适应证扩展**——通过技术改进拓展至复杂病变；第五，**药物创新**——新型抗增殖药物（如雷帕霉素衍生物）提升抗再狭窄效果；第六，**AI辅助操作**——AI辅助BRS尺寸选择和操作规划。

## 总结

生物可吸收支架（BRS）被誉为PCI领域的"第四次革命"，其核心理念是在完成血管支撑和重塑的临时使命后逐渐降解吸收，使血管恢复自然舒缩功能。第一代Absorb BVS因支架厚度过大、径向支撑不足和降解不均匀等问题于2017年全球退市，BRS发展遭遇重大挫折。新一代BRS通过材料改性（酪氨酸衍生物、镁合金）、支架变薄（<100-125μm）和工艺优化显著改善了安全性和有效性，TLF（5%-7%）已降至与金属DES相当的水平，支架内血栓发生率<1%。BRS的远期优势在于血管功能的恢复——完成降解后血管不再受金属cage的束缚，可恢复生理性收缩和舒张，这对年轻患者和分支血管病变具有特殊价值。术者应严格选择适应证（原发、简单病变），遵循PSP原则（充分预扩张、精确尺寸、充分后扩张），并使用IVUS/OCT指导操作。随着材料科学和工艺的进步，新一代国产BRS（Firesorb、Xinsorb、Magmaris等）有望在未来几年内上市，推动BRS技术的复兴和发展。`,publishDate:"2024-06-09",views:10543,category:"技术前沿"},{id:"wxart-026",accountId:"wxa-002",accountName:"神经介入在线",title:"颈动脉狭窄内膜剥脱vs支架置入：如何选择",summary:"CEA与CAS两种治疗方式的适应症、禁忌症及个体化选择策略。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=carotid%20artery%20stenosis%20CEA%20vs%20CAS%20endarterectomy%20stenting%20comparison&image_size=landscape_4_3",content:`## 颈动脉狭窄内膜剥脱vs支架置入：如何选择

## 文章背景

颈动脉狭窄是缺血性脑卒中的重要病因，约15%-20%的缺血性脑卒中由颈动脉狭窄导致。我国脑卒中发病率居高不下，每年新发脑卒中约250万例，其中颈动脉狭窄相关卒中占比显著。颈动脉狭窄的治疗目标是预防卒中发生和复发，主要治疗方式包括药物治疗、颈动脉内膜剥脱术（CEA）和颈动脉支架置入术（CAS）。

颈动脉内膜剥脱术（CEA）由Eastcott等于1954年首次成功实施，是历史悠久的开放手术。CEA通过颈部切口暴露颈动脉，阻断血流后切开血管，剥除粥样硬化斑块，恢复血管通畅。1990年代，NASCET、ECST等大型RCT研究证实CEA较单纯药物治疗可显著降低症状性颈动脉狭窄患者的卒中风险，CEA成为症状性颈动脉狭窄的金标准治疗。

颈动脉支架置入术（CAS）是微创的腔内治疗，由Mathur等于1996年首次实施。CAS通过股动脉入路，将支架置入颈动脉狭窄处扩张血管，恢复血流。CAS无需颈部切口和全身麻醉，创伤小、恢复快，特别适合高危患者。随着支架设计和脑保护装置的改进，CAS的安全性持续提升。

CEA和CAS各有优劣，如何在临床实践中为患者选择最佳治疗方案，是血管外科、神经外科和神经介入科共同关注的核心问题。本文将基于循证证据，系统对比CEA和CAS的疗效、适应证、并发症和选择策略。

## 核心内容

### 疗效对比

多项大型随机对照试验对比了CEA和CAS的疗效：

1. **CREST研究**（2010年NEJM）：纳入2502例症状性和无症状颈动脉狭窄患者，主要终点（围手术期卒中、心梗、死亡或4年内同侧卒中）CEA 6.8% vs CAS 7.2%（P=0.51），无显著差异。亚组分析显示年龄<70岁CAS更优，>70岁CEA更优。
2. **SPACE研究**（2008年Lancet）：纳入1200例症状性颈动脉狭窄患者，30天卒中/死亡CEA 6.3% vs CAS 6.8%，2年同侧卒中CEA 5.0% vs CAS 7.3%，CAS略劣于CEA但无统计学差异。
3. **EVA-3S研究**（2008年NEJM）：纳入527例症状性颈动脉狭窄患者，30天卒中/死亡CEA 3.9% vs CAS 9.6%（P=0.01），CAS显著较差。研究因CAS组安全性问题提前终止。
4. **ICSS研究**（2010年Lancet）：纳入1710例症状性颈动脉狭窄患者，120天卒中/死亡CEA 4.2% vs CAS 8.5%（P=0.001），CAS较差。
5. **CREST-2研究**（进行中）：比较CEA/CAS与单纯药物治疗在无症状颈动脉狭窄中的疗效，结果待公布。

总体结论：对于症状性颈动脉狭窄，CEA和CAS在卒中预防和长期通畅率方面总体相当，但CAS的围手术期卒中风险略高（CAS 5%-9% vs CEA 3%-6%），CEA的围手术期心肌梗死风险略高（CEA 2%-3% vs CAS 1%）。颅神经损伤仅见于CEA（约5%-7%）。

### 适应证差异

CEA和CAS的适应证存在明显差异，体现"个体化选择"理念：

1. **CEA更适合**：第一，**病变位置低**（锁骨下动脉起始处附近）——CAS入路困难；第二，**严重钙化**——CAS支架扩张困难；第三，**对侧颈动脉闭塞**——CAS脑保护装置放置困难；第四，**血管严重迂曲**——CAS入路和支架输送困难；第五，**高龄患者**（>70岁）——CREST研究显示CEA更优；第六，**病变形态复杂**（如溃疡斑块、血栓形成）。
2. **CAS更适合**：第一，**高位颈动脉病变**（C2以上）——CEA手术入路困难；第二，**合并严重心肺疾病**无法耐受开放手术和全麻；第三，**既往颈部手术或放疗史**——CEA入路困难，组织粘连；第四，**对侧喉返神经麻痹**——CEA可能导致双侧声带麻痹；第五，**年轻患者**（<70岁）——CREST研究显示CAS更优；第六，**再狭窄病变**（CEA后再狭窄）——再次CEA难度大。

### 脑保护装置

1. **CAS脑保护装置**：CAS术中常规使用远端栓塞保护装置（EPD），可捕获斑块碎片，降低术中栓塞性卒中风险。EPD类型包括远端滤器（最常用）、近端球囊阻塞和血流逆转系统。EPD可将CAS围手术期卒中率从约8%降至4%-5%。
2. **CEA脑保护**：CEA术中通过颈动脉分流管维持脑灌注，避免颈动脉阻断导致的脑缺血。术中需监测脑灌注（脑电图、近红外光谱、残余压力），决定是否使用分流管。约10%-15%患者需使用分流管。

### 年龄因素

CREST研究的年龄亚组分析显示明显的年龄-治疗交互效应：第一，**年龄<70岁**——CAS的围手术期卒中风险与CEA相当，CAS预后更优（考虑微创优势）；第二，**年龄>70岁**——CAS的围手术期卒中风险显著高于CEA（约2倍），CEA更优；第三，**机制解释**——高龄患者颈动脉迂曲和斑块钙化更严重，增加CAS操作难度和栓塞风险。

### 围手术期管理

1. **CEA术后管理**：第一，**颅神经损伤监测**——舌下神经、迷走神经、副神经损伤（约5%-7%），多数为暂时性；第二，**血肿监测**——颈部血肿可能压迫气道，需密切观察；第三，**血压控制**——术后高灌注综合征风险，需严格控制血压；第四，**抗血小板**——术后单药抗血小板（阿司匹林）长期。
2. **CAS术后管理**：第一，**DAPT**——规范双联抗血小板治疗（阿司匹林+氯吡格雷）至少3个月，预防支架内血栓；第二，**血压控制**——高灌注综合征风险，需控制血压；第三，**再狭窄监测**——定期超声随访，1年再狭窄率约3%-6%；第四，**支架监测**——CTA或超声评估支架通畅性。

## 技术细节与临床应用

CEA技术要点：第一，**麻醉**——全身麻醉或颈丛阻滞（患者清醒，便于脑功能监测）；第二，**体位**——仰卧位，颈部轻度后伸，头偏对侧；第三，**切口**——沿胸锁乳突肌前缘纵切口，暴露颈动脉分叉；第四，**阻断与分流**——阻断颈总、颈外、颈内动脉，根据脑灌注监测决定是否使用分流管；第五，**内膜剥脱**——纵行切开颈内动脉，仔细剥除粥样硬化斑块，冲洗清除碎片；第六，**缝合**——直接缝合或补片成形（预防再狭窄）；第七，**止血与引流**——严格止血，放置引流管。

CAS技术要点：第一，**入路**——股动脉入路（最常用）或颈动脉入路（TCAR）；第二，**造影评估**——主动脉弓造影、双侧颈动脉造影、颅内动脉造影；第三，**远端保护**——置入EPD（远端滤器）于颈内动脉远端；第四，**预扩张**——球囊预扩张狭窄病变（直径2-4mm球囊）；第五，**支架置入**——选择合适尺寸的自膨式支架（镍钛合金），覆盖病变全长；第六，**后扩张**——球囊后扩张至残余狭窄<30%；第七，**回收EPD**——回收EPD，确认无栓塞物质；第八，**最终造影**——评估支架位置、残余狭窄和颅内血流。

脑保护装置的选择：第一，**远端滤器**（如FilterWire）——最常用，操作简单，但无法捕获<100μm的微栓子；第二，**近端球囊阻塞**（如MOMA）——阻断颈总和颈外动脉，逆向血流冲洗栓子，保护更完全，但操作复杂，部分患者无法耐受阻断；第三，**血流逆转系统**（如Gore）——通过高流量的动静脉短路实现逆向血流，保护最完全，但费用高。

## 研究进展与案例分析

近年来，CAS技术持续改进，特别是TCAR（经颈动脉血运重建）技术的出现，为颈动脉治疗提供了新选择。TCAR结合了CEA的逆向血流保护和CAS的微创优势：通过颈动脉小切口（颈部穿刺）直接置入鞘管，建立颈动脉-股静脉短路，在斑块释放时形成逆向血流，防止碎片进入颅内。SVC-3研究显示，TCAR的围手术期卒中率（1.4%）显著低于传统CAS（2.8%），与CEA（1.4%）相当。

2023年，《New England Journal of Medicine》发表的ROADSTER-2研究纳入380例高危颈动脉狭窄患者，TCAR技术成功率99.3%，30天卒中/心梗/死亡率1.4%，显著优于传统CAS和CEA的历史对照。TCAR有望成为颈动脉治疗的新选择。

典型病例1：68岁男性，右侧颈动脉狭窄70%（症状性，TIA发作），病变位于颈动脉分叉，斑块重度钙化。考虑患者年龄<70岁，病变适合CAS。行CAS术：股动脉入路，置入FilterWire EPD，预扩张后置入8×40mm自膨式支架，残余狭窄<10%。术后DAPT 3个月，1年随访无再狭窄，无卒中复发。

典型病例2：75岁男性，左侧颈动脉狭窄85%（症状性，脑梗死），斑块重度钙化，对侧颈动脉闭塞。考虑患者高龄、对侧颈动脉闭塞，CAS风险高，选择CEA。全麻下行CEA，术中脑电图监测脑灌注，使用分流管。术后患者无神经功能缺损，无颅神经损伤，5天出院。1年随访无再狭窄，无卒中复发。

典型病例3：62岁女性，右侧颈动脉狭窄80%（无症状），既往颈部放疗史（甲状腺癌）。CEA入路困难，选择TCAR。颈部小切口穿刺颈总动脉，建立颈动脉-股静脉逆向血流。置入7×40mm自膨式支架，全程逆向血流保护。手术顺利，30天无并发症。3个月随访无再狭窄。

典型病例4：58岁男性，左侧颈动脉再狭窄（CEA术后2年，再狭窄90%）。再次CEA难度大、风险高，选择CAS。股动脉入路，置入EPD，预扩张后置入支架。术后DAPT 3个月，1年随访无再狭窄。

## 讨论与展望

CEA和CAS的选择争议仍未完全解决，主要争议点：第一，**症状性 vs 无症状**——症状性患者CEA和CAS的选择更明确，无症状患者的治疗价值存在争议（特别是随着最佳药物治疗的发展）；第二，**年龄分层**——年龄<70岁CAS更优，>70岁CEA更优，但年龄分层并非绝对，需结合个体情况；第三，**高危患者定义**——CEA高危患者（心肺疾病、对侧颈动脉闭塞、再狭窄等）的CAS优势存在争议；第四，**新技术影响**——TCAR等新技术的出现可能改变现有格局；第五，**长期疗效**——CAS的5年以上长期再狭窄率（5%-10%）略高于CEA（3%-5%）。

未来发展方向包括：第一，**TCAR技术推广**——TCAR结合了CEA和CAS的优势，可能成为颈动脉治疗的新标准；第二，**个体化决策**——基于患者解剖、合并症、年龄、基因等多因素的综合决策模型；第三，**影像学评估**——高分辨率MRI斑块成像评估斑块易损性，指导治疗选择；第四，**AI辅助决策**——AI辅助个体化治疗方案推荐；第五，**新型支架**——生物可吸收支架、药物涂层支架降低再狭窄率；第六，**最佳药物治疗**——强化他汀、抗血小板等药物治疗的进展可能改变无症状颈动脉狭窄的治疗策略。

## 总结

颈动脉狭窄的治疗选择应综合考虑患者年龄、解剖条件、合并症和手术团队经验，CEA和CAS各有优势，个体化决策是最佳策略。基于现有循证证据：第一，**症状性颈动脉狭窄**——CEA是金标准，CAS在适合患者（年龄<70岁、解剖适合）中是可接受替代；第二，**无症状颈动脉狭窄**——CEA和CAS的相对价值需结合患者预期寿命和手术风险综合评估；第三，**CEA更适合**——病变位置低、严重钙化、对侧颈动脉闭塞、血管迂曲、高龄患者（>70岁）；第四，**CAS更适合**——高位颈动脉病变、合并严重心肺疾病、既往颈部手术/放疗史、对侧喉返神经麻痹、年轻患者（<70岁）、再狭窄病变；第五，**TCAR新技术**——结合了CEA和CAS的优势，围手术期卒中率与CEA相当，有望成为颈动脉治疗的新选择。建立多学科颈动脉团队（血管外科、神经外科、神经介入科、神经内科），根据患者解剖特点、合并症和意愿个体化选择治疗方案，是优化患者预后的关键。随着TCAR技术、影像学评估和AI辅助决策的发展，颈动脉狭窄的治疗将向更精准、更个体化方向演进。`,publishDate:"2024-06-08",views:7654,category:"临床讨论"},{id:"wxart-027",accountId:"wxa-006",accountName:"肿瘤介入在线",title:"肝癌消融治疗：RFA、MWA、Cryoablation如何选",summary:"射频、微波、冷冻消融三种技术的原理、优缺点及临床适应症选择。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liver%20cancer%20ablation%20RFA%20MWA%20cryoablation%20comparison%20interventional%20oncology&image_size=landscape_4_3",content:`## 肝癌消融治疗：RFA、MWA、Cryoablation如何选

## 文章背景

肝细胞癌（HCC）是全球第六大常见恶性肿瘤，每年新发病例约90万例，我国占全球病例的50%以上。对于早期HCC（BCLC A期，单发≤5cm或≤3个结节且每个≤3cm），手术切除、肝移植和局部消融治疗是三种根治性手段。然而，约70%的患者因肝功能储备不足、肿瘤位置不佳或合并严重肝硬化而失去手术机会。自20世纪90年代射频消融（RFA）首次应用于临床以来，局部消融治疗已发展为不可手术早期HCC的一线根治性方案。随后微波消融（MWA）和冷冻消融（Cryoablation）相继问世，三者共同构成了肝癌消融治疗的"三驾马车"。近10年来，随着影像引导技术、消融器械和能量平台的迭代，三种技术的完全消融率、局部复发率和并发症发生率均显著改善，但临床选择仍存在争议，需要根据肿瘤特征、肝脏条件和患者意愿进行个体化决策。

## 核心内容

### 作用原理与能量平台差异

RFA通过460kHz高频交流电使组织内离子震荡摩擦产热，靶区温度达60-100℃引起凝固性坏死；MWA利用915MHz或2450MHz微波电磁场使水分子高速旋转产热，升温速度可达RFA的3-5倍；Cryoablation则借助氩气快速制冷（-140℃）和氦气复温（+40℃）交替循环，通过细胞冰晶损伤、微血管栓塞和细胞凋亡机制破坏肿瘤。

### 消融效率与组织穿透性

MWA因不受组织阻抗影响，对纤维化、脂肪化及碳化组织均具有良好穿透性，单次消融时间通常5-10分钟，单针最大消融直径可达5-6cm；RFA受组织阻抗和"热沉降效应"限制，单次消融时间10-20分钟，单针消融直径约3-4cm；Cryoablation需2-3次冻融循环，单次治疗时间20-30分钟，但可通过多针组合形成最大8-10cm的冰球。

### 肿瘤大小适应证分层

对于≤3cm的肿瘤，三种技术完全消融率均>90%，可任选其一；对于3-5cm肿瘤，MWA因消融范围大、形状可控成为首选；对于>5cm肿瘤，Cryoablation多针组合或MWA联合TACE更具优势。

### 安全性与并发症谱

RFA和MWA主要并发症为出血（2%-5%）、邻近脏器损伤（胆囊、肠道、膈肌，发生率1%-3%）和针道种植（<1%）；Cryoablation独特风险包括"冷休克"综合征、血小板减少和凝血障碍，但术中疼痛较轻且对肝功能影响较小。

## 技术细节与临床应用

影像引导是消融精准实施的基石。超声引导实时性好但受气体和骨骼干扰，CT引导空间分辨率高但存在辐射，MRI引导软组织对比度最佳且可实时测温。对于肝顶肿瘤，需联合人工腹水或胸水技术避免膈肌损伤。术中监测方面，MWA和RFA可通过超声回声变化（高回声气化区）粗略判断消融范围，但易低估实际消融灶；Cryoablation可在CT上直接观察低密度冰球范围，实现"所见即所得"的边界控制。术后即刻CEUS或CT评估消融效果已成为标准流程，要求消融灶完全覆盖肿瘤并外扩至少5-10mm的安全边界。对于邻近大血管（>3mm）的肿瘤，热消融易因血流"热沉降效应"导致消融不全，可采取"血管阻断法"（Pringle手法或球囊阻断）、"人工腹水隔离法"或改用Cryoablation。特殊部位肿瘤（如肝门部、胆囊旁、膈顶）的消融需联合腹腔镜或开腹途径，直视下保护邻近脏器。

## 研究进展与案例分析

2023年一项纳入12项RCT、共1898例患者的Meta分析显示，对于≤3cm的HCC，MWA的3年总生存率（72.4%）和局部进展率（8.6%）显著优于RFA（67.1%和14.3%）；对于3-5cm肿瘤，差异更为显著。我国陈敏华教授团队开展的HCC MWA多中心研究（n=1005）证实，5年生存率在小肝癌（≤3cm）达74.5%，3-5cm肿瘤达56.2%。冷冻消融方面，C3研究显示，对于不可切除HCC，Cryoablation联合TACE的中位生存期（28.2个月）显著优于单纯TACE（18.6个月）。欧洲一项前瞻性研究（n=187）显示，对于肝转移瘤（结直肠癌来源），MWA的1年局部控制率达88%，3年生存率52%。典型病例方面，某中心对一例72岁肝VIII段3.2cm HCC合并Child-Pugh B级肝硬化患者行MWA治疗，采用"人工腹水+双针同步"方案，单次消融6分钟，术后1月CT评估完全消融，消融灶外扩达8mm安全边界，随访18个月无局部复发。另一例肝门部4.5cm HCC患者，因邻近门静脉右支选择Cryoablation联合TACE，3针组合形成6cm冰球，术中CT实时监测冰球覆盖肿瘤并外扩5mm，术后AFP从820ng/mL降至正常范围，2年无瘤生存。第三例为肝转移瘤患者（结肠癌术后），双叶3个病灶（最大2.8cm），分次行RFA治疗，3个病灶均完全消融，无瘤生存期达14个月。

## 讨论与展望

尽管消融技术不断进步，仍面临若干挑战：一是"热沉降效应"导致的局部复发仍是难点，需要新型能量平台（如不可逆电穿孔、组氨酸-血管阻断）突破；二是实时消融边界监测精度有限，基于影像组学和AI的术中预测模型有望提升边界评估准确性；三是缺乏高质量RCT直接比较三种技术在中大肝癌中的疗效。未来发展方向包括：①多模态影像融合导航（PET/MRI引导）提高靶向精度；②新型能量组合（如MWA+不可逆电穿孔）拓宽适应证；③基于基因和影像组学的个体化消融方案精准分层；④机器人辅助消融提升重复性和标准化程度。

## 总结

RFA、MWA和Cryoablation各具特色，临床选择应综合肿瘤大小、位置、邻近结构、肝脏储备和患者全身状况。对于≤3cm肿瘤，MWA和RFA疗效相当且优于手术；3-5cm肿瘤MWA更具优势；>5cm或邻近血管肿瘤可考虑Cryoablation或联合TACE。多技术联合和影像引导的精细化将进一步提升肝癌消融治疗的疗效和安全性，为不可手术肝癌患者带来根治希望，改善长期生存获益。`,publishDate:"2024-06-07",views:6543,category:"技术对比"},{id:"wxart-028",accountId:"wxa-005",accountName:"血管外科资讯",title:"下肢深静脉血栓后综合征的预防与治疗",summary:"DVT后PTS的发生机制、预防策略及介入治疗进展。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=post%20thrombotic%20syndrome%20PTS%20DVT%20prevention%20treatment%20vascular%20surgery&image_size=landscape_4_3",content:`## 下肢深静脉血栓后综合征的预防与治疗

## 文章背景

下肢深静脉血栓形成（DVT）是常见的周围血管疾病，年发病率约1-2/1000人。DVT急性期过后，约20%-50%的患者会发展为血栓后综合征（Post-Thrombotic Syndrome, PTS），表现为患肢慢性肿胀、疼痛、沉重感、色素沉着，严重者出现静脉性溃疡，严重影响生活质量。Villalta-Prandi评分≥5分即可诊断PTS，其中重度PTS（≥15分或伴有溃疡）约占PTS患者的5%-10%。PTS的发生机制涉及静脉阻塞、瓣膜反流和静脉高压三联征，与急性期血栓清除不彻底、静脉壁炎症反应和微循环功能障碍密切相关。近20年来，随着导管溶栓（CDT）、机械取栓和专用静脉支架等介入技术的发展，PTS的防治策略发生了深刻变革。本文系统梳理PTS的预防、评估和介入治疗进展。

## 核心内容

### 预防策略：急性期的规范干预

急性DVT期的规范抗凝治疗是预防PTS的基础，新型口服抗凝药（DOACs）已取代华法林成为一线方案。对于髂股段DVT且发病<14天、出血风险低的患者，早期行CDT或机械取栓可显著降低PTS发生率（ATTRACT研究显示中重度PTS风险降低约24%）。

### 物理预防与弹力袜的循证证据

急性DVT后持续穿戴医用弹力袜（压力30-40mmHg）2年，可将PTS发生率从约50%降至约30%（SOX研究虽未证实获益，但Meta分析仍支持早期使用）。弹力袜选择应基于踝肱指数评估，ABI<0.8者禁用高压弹力袜。

### 髂静脉受压与May-Thurner综合征处理

对于合并May-Thurner综合征（左髂总静脉受右髂总动脉压迫）的患者，急性血栓清除后行髂静脉球囊扩张和支架置入可恢复静脉回流，预防复发和PTS。支架应跨越受压段并延伸至下腔静脉开口下方，覆盖病变全程。

### PTS的介入治疗

已发生PTS的患者，若存在髂静脉狭窄或闭塞，可行球囊扩张和支架置入（如Veniti Vici、Bard Venovo、Boston Scientific Wallstent等专用静脉支架）。对于严重瓣膜反流，可考虑静脉瓣膜修复或移植。术后需终身抗凝或抗血小板治疗。

### 静脉性溃疡的综合管理

PTS导致的静脉性溃疡需综合治疗：创面清创、压力治疗（多层弹力绷带）、局部生长因子和下肢抬高。必要时行曲张静脉消融或穿通支静脉（perforator）结扎/栓塞。

## 技术细节与临床应用

介入治疗的技术要点包括：①入路选择——CDT多采用患侧腘静脉或颈内静脉入路，机械取栓多采用患侧腘静脉入路以双向血流冲刷血栓；②溶栓药物剂量——尿激酶常规剂量60-120万U/24h，rt-PA 1-1.5mg/h，持续12-24小时，期间每6-8小时监测纤维蛋白原（维持>1.0g/L）；③机械取栓装置选择——AngioJet利用高速水流Bernoulli效应碎吸血栓，需注意血红蛋白尿和心动过缓风险；ClotTriever为机械切割取栓装置，无需溶栓药物，适合出血高危患者；④静脉支架规格——髂静脉常用直径14-18mm，股静脉常用10-14mm，支架直径应较参考血管 overstretch 10%-20%以获得足够径向支撑力，长度需覆盖病变两端至少10mm；⑤术后管理——抗凝至少3-6个月，髂静脉支架者推荐长期抗血小板（阿司匹林或氯吡格雷），并定期超声随访支架通畅性。

## 研究进展与案例分析

ATTRACT研究（n=692）虽未达到主要终点，但亚组分析显示髂股段DVT患者机械取栓后中重度PTS风险显著降低。CAVENT研究（n=189）显示CDT组6个月髂股静脉通畅率（65.9%）显著高于单纯抗凝组（47.4%），2年PTS发生率降低约28%。国内一项多中心研究（n=320）显示，AngioJet机械吸栓联合CDT治疗急性髂股DVT，2年 Villalta 评分显著优于单纯CDT组（中位数4分 vs 7分），中重度PTS发生率降低约35%。AVAIL-PE等研究证实机械取栓在DVT中的安全性和有效性。典型病例：一例42岁男性左下肢急性髂股DVT患者，发病5天，行AngioJet机械吸栓+CDT（尿激酶80万U/24h），术后造影示髂静脉受压，置入Wallstent 16×90mm支架。术后6个月超声示支架通畅，无PTS表现，Villalta评分3分。另一例PTS合并静脉性溃疡患者（Villalta评分18分），造影示左髂静脉支架内闭塞，行球囊扩张（14mm）并重新置入Venovo支架，术后6个月溃疡愈合，Villalta评分降至8分。第三例为55岁女性右下肢DVT合并May-Thurner综合征，发病3天行ClotTriever机械取栓（无溶栓药物），术后即刻造影血栓清除>90%，髂静脉置入Venovo 16×80mm支架，3个月随访Villalta评分2分，无出血并发症。

## 讨论与展望

PTS防治仍存在若干争议：①ATTRACT研究阴性结果引发对DVT早期介入价值的重新思考，但髂股亚组的获益提示需精准筛选受益人群；②静脉支架的长期通畅率数据有限（现有数据5年一期通畅率约70%-85%），新型高径向力、抗断裂支架的设计优化值得关注；③瓣膜修复和置换技术（如Neoveil、VenaTech）尚处于临床验证阶段，远期效果待评估。未来方向包括：①基于D-二聚体动态变化和影像组学的PTS风险预测模型；②可吸收静脉支架的研发，减少长期异物存留；③远程监测和可穿戴设备辅助弹力袜依从性管理；④多学科协作的DVT全流程管理路径优化。

## 总结

下肢DVT后综合征的防治需贯穿急性期和慢性期的全程管理。急性DVT期的积极干预（早期溶栓/取栓、病因纠正、规范抗凝）是预防PTS的关键。对于已发生PTS的患者，介入技术（静脉支架、瓣膜修复）在血栓清除和静脉重建中发挥日益重要的作用。个体化策略和精准评估是优化PTS防治效果的核心，需多学科协作以改善患者长期预后。`,publishDate:"2024-06-06",views:5432,category:"并发症"},{id:"wxart-029",accountId:"wxa-004",accountName:"中国医学影像技术",title:"介入机器人：从概念到临床的发展历程",summary:"血管介入机器人技术发展现状、临床应用前景及面临的挑战。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interventional%20robotics%20robotic%20angiography%20future%20medical%20technology%20AI&image_size=landscape_4_3",content:`## 介入机器人：从概念到临床的发展历程

## 文章背景

血管介入手术自20世纪50年代Seldinger穿刺技术问世以来，已成为现代医学的核心治疗手段。然而，传统介入手术长期面临三大痛点：①术者长期暴露在X射线辐射下，累积剂量可能诱发白内障、甲状腺疾病和血液系统恶性肿瘤；②人手操作的物理精度有限（手动推送导管的精度约2-5mm），且存在不可消除的生理性震颤；③手术效果高度依赖术者经验，学习曲线长，操作标准化程度低。介入机器人技术应运而生，旨在通过机器人辅助或替代人手完成血管介入操作。自2000年代Hansen Medical（后被Auris Health收购）推出Sensei系统以来，介入机器人经历了从遥操作概念到临床验证的演进。近年来，随着5G通信、AI算法和精密机械的突破，介入机器人正加速从实验室走向手术室，成为医工交叉领域最受关注的方向之一。

## 核心内容

### 技术架构与工作原理

介入机器人系统通常由主端（控制台+屏蔽舱）和从端（机械臂+导管/导丝驱动装置）组成。术者坐在屏蔽控制台前，通过手柄、旋钮或触觉反馈设备遥操作机械臂，完成导管和导丝的推送（前进/后退）、旋转和弯曲。系统通过编码器实时记录器械位置，并通过力传感器或电流反馈实现触觉感知。

### 代表性系统与临床进展

目前国际上较成熟的系统包括：①Siemens CorPath GRX——已获FDA和CE批准用于冠脉介入和外周介入，全球累计完成逾2万例手术；②Robocath R-One——获CE批准，欧洲多中心研究证实其安全性和有效性；③国内系统——唯迈医疗Dego、奥朋医疗Allvas、爱博医疗等已进入临床试验或NMPA审批阶段。微创医疗的Corindus（CorPath GRX中国版）也在多家三甲医院开展验证。

### 核心优势与循证证据

①辐射防护——术者辐射暴露降低95%以上（主要散射辐射），患者剂量也可通过精确控制减少10%-20%；②操作精度——推进精度可达0.1mm，旋转精度1°，显著优于人手；③减少人手震颤和疲劳，提高长时间手术稳定性；④可整合术前CTA/MRA三维导航，实现半自主路径规划。RAPID研究显示机器人PCI的手术成功率98.6%，并发症率与人工手术相当。

### 技术挑战与瓶颈

①复杂病变（严重迂曲、分叉、CTO）中的操作灵活性仍不及人手，机械臂的力矩反馈延迟（50-100ms）影响手感；②触觉反馈（导丝-血管壁交互力）的实时高保真传递仍是技术难点，现有系统多为视觉反馈替代；③手术时间较人工延长10%-20%，设备成本和耗材费用高昂；④机器人系统的消毒、装配和故障处理增加了手术室工作流复杂度。

### AI融合与未来趋势

未来介入机器人将深度融合AI技术：①自动血管分割和解剖标志识别；②基于强化学习的导管路径自主规划；③障碍物（斑块、分支）智能避让；④自主完成部分标准化操作（如造影导管到位、压力导丝定位）。

## 技术细节与临床应用

介入机器人涉及多项关键技术：①力反馈——基于应变片或电流环的力测量精度需达到0.01N，频率响应>100Hz，才能模拟真实手感；②运动映射——主从运动的缩放比通常1:3至1:10，可根据手术阶段动态调整；③导丝操控——复杂导丝（如微导丝）的旋转和扭矩传递需要专门的夹持机构，部分系统采用磁性夹持或摩擦轮驱动；④图像融合——实时DSA透视与术前CTA三维模型配准，辅助器械定位。临床应用场景方面，冠脉造影和简单PCI是目前最成熟的应用，复杂PCI（分叉、CTO）需"人机协作"模式——机器人完成导管/导丝基础操作，术者介入关键步骤。神经介入机器人尚处于早期验证阶段，因脑血管迂曲和微导管操作复杂性，技术难度更高。

## 研究进展与案例分析

PRESTIGE研究（n=100）显示CorPath GRX在复杂PCI中的手术成功率97%，平均机器人操作时间28分钟，术者辐射剂量降低95.3%。R-One欧洲多中心研究（n=80）显示机器人PCI成功率100%，无器械相关并发症。RAPID II研究（n=104）证实机器人系统在复杂病变（分叉、钙化）中的可行性和安全性，手术成功率95.2%。远程介入方面，解放军总医院第一医学中心陈韵岱教授团队2022年完成全国首例5G远程PCI（北京-三亚，距离2700km），延迟约100ms，手术成功；2023年完成跨亚欧远程PCI（北京-意大利罗马），延迟约180ms，验证了跨国远程介入的可行性。典型病例：一例65岁男性前降支近段95%狭窄患者，行机器人PCI，术者全程在屏蔽控制台操作，0.014"导丝通过病变耗时3分钟，球囊预扩张后置入药物涂层支架3.0×24mm，术后造影TIMI 3级血流，术者辐射剂量0μSv（常规手术约20-50μSv）。另一例三支病变患者行机器人分步PCI，分两次完成LAD和LCX介入，机器人系统累计操作4小时无故障。第三例为偏远地区县级医院患者，通过5G远程机器人PCI由北京专家操作完成，本地医师负责患者监护和穿刺，手术时间58分钟，术后患者恢复良好。

## 讨论与展望

介入机器人发展仍面临多重挑战：①成本效益——单台设备价格约500-1000万元，耗材单次增加2000-5000元，需通过缩短住院时间和减少并发症平衡成本；②法规审批——NMPA对新型机器人审批审慎，需大规模临床数据支持；③技术迭代——触觉反馈、AI自主操作和远程协作等关键技术尚未完全成熟。未来方向包括：①5G/6G远程介入，使优质介入资源下沉至基层和偏远地区；②多模态影像融合导航提升复杂病变处理能力；③AI驱动的全自主介入（"无人介入手术室"概念）；④专科化机器人（神经、外周、肿瘤介入）的差异化设计。

## 总结

介入机器人技术正处于快速发展期，已在冠脉介入领域展现明确价值（辐射防护、操作精度、标准化），但在复杂病变和神经介入中的应用仍需技术突破。随着AI、5G和精密机械的深度融合，介入机器人有望在未来十年内重塑介入医学的工作模式，实现术者健康保护、操作标准化和医疗资源下沉的多重目标。`,publishDate:"2024-06-05",views:11234,category:"前沿技术"},{id:"wxart-030",accountId:"wxa-007",accountName:"影领介入",title:"西门子syngo.via后处理工作站操作技巧：血管分析篇",summary:"syngo.via工作站血管分析功能详解，包括CTA/MRA后处理和三维重建技巧。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=syngo%20via%20workstation%20vascular%20analysis%20post%20processing%203D%20reconstruction&image_size=landscape_4_3",content:`## 西门子syngo.via后处理工作站操作技巧：血管分析篇

## 文章背景

随着多排螺旋CT（≥64排）和3.0T MRI的普及，CT血管造影（CTA）和MR血管造影（MRA）已成为血管疾病诊断和介入术前规划的核心影像手段。一份高质量的血管后处理报告需要在短时间内完成血管提取、三维重建、定量测量和图像渲染等多项任务。syngo.via是西门子医疗推出企业级高级影像后处理平台，支持CT、MR、PET等多模态数据的统一处理，其Vascular Analysis（血管分析）应用模块专门针对血管病变评估设计，已在全国逾千家医院部署。在介入医学中，术前精准的血管评估是手术规划的基础——错误的解剖判断或狭窄测量可能导致支架尺寸不当、入路选择错误甚至手术失败。本文聚焦syngo.via血管分析模块的核心功能和操作技巧，帮助介入医师提升术前规划效率和质量。

## 核心内容

### 自动血管提取与中心线追踪

利用"Vascular Analysis"应用，系统可自动识别并提取主动脉及其主要分支的三维模型。术者只需在目标血管上标记起点和终点，算法基于最大密度投影和血管追踪算法（如区域生长、水平集）自动追踪血管中心线。对于严重狭窄或闭塞段，可手动添加种子点辅助追踪。系统支持同时提取多条血管并标注解剖名称。

### 曲面重建（CPR）与血管拉直

沿血管中心线生成曲面重建图像，可全程展开显示血管腔内外情况。syngo.via支持双Oblique CPR（沿血管长轴和短轴），术者可360°旋转观察管腔，是评估狭窄程度、斑块性质和支架通畅性的最佳视角。"拉直"功能将弯曲血管展开为直线，便于测量病变长度和支架定位。

### 直径与狭窄定量测量

系统自动计算血管参考直径、最小管腔直径、病变长度和狭窄百分比，并生成沿血管走行的直径曲线图。支持手动校正自动测量结果（拖动标尺调整测量点），确保数据准确。对于分叉病变，可分别测量主支和边支开口情况，并计算Murphy's分类。

### 斑块分析与成分识别

对于CTA数据，可利用阈值分割（如>130HU为钙化、50-130HU为纤维斑块、<50HU为脂质核心）区分钙化斑块、非钙化斑块和混合斑块，并计算斑块体积、负荷百分比和重构指数。结合CT值直方图可半定量评估斑块易损性。

### 3D打印与手术规划

syngo.via支持将血管模型导出为STL格式，用于3D打印实体模型，辅助复杂介入手术（如主动脉弓变异、复杂脑动脉瘤）的术前规划和医患沟通。可调整打印阈值和模型厚度以突出显示血管结构。

## 技术细节与临床应用

操作流程方面，血管分析的标准工作流为：①数据导入——通过DICOM自动接收CTA/MRA原始数据，或手动拖入Patient Browser；②应用启动——选择"Vascular Analysis"应用，系统自动加载预设参数；③血管提取——点击"Add Vessel"，在血管近端和远端各放置一个种子点，3-5秒内系统完成中心线追踪；④CPR生成——系统自动生成Stretched CPR和Straightened CPR，可切换显示模式；⑤狭窄测量——在CPR图像上点击狭窄最重处，系统自动定位参考点并计算狭窄率；⑥报告输出——支持截图、AVI视频和结构化报告导出。在TACE术前规划中，syngo.via的肝动脉解剖分析功能尤为重要——系统可自动识别肝总动脉、肝固有动脉、左右肝动脉及其分支，清晰显示变异解剖（如替代肝右动脉发自肠系膜上动脉，发生率约15%-25%）。在主动脉疾病评估中，中心线提取和直径测量功能为支架尺寸选择（直径较近端锚定区参考血管 oversize 10%-20%，长度覆盖病变两端至少15mm）提供了精确依据。

## 研究进展与案例分析

一项纳入150例颈动脉CTA的研究显示，syngo.via自动狭窄测量与DSA对照的符合率达92.3%，重度狭窄（>70%）的敏感性95.1%、特异性89.6%。在腹主动脉瘤（AAA）腔内修复术前规划中，syngo.via测量瘤颈直径和长度的观察者间一致性ICC>0.95，显著优于传统手工测量。多中心研究（n=240）显示，使用syngo.via进行术前规划可使EVAR手术时间缩短18%、Ⅱ型内漏发生率降低12%。神经介入方面，syngo.via的脑血管自动提取功能在脑动脉瘤检出中的敏感性达98.2%。典型病例：一例68岁男性腹主动脉瘤（最大径5.8cm）患者，CTA示瘤颈角度65°、长度18mm。syngo.via测量近端瘤颈直径24mm，瘤体长度120mm，远端髂动脉直径14mm。基于测量结果选择Endurant 28×16×145mm主体支架+14×14×95mm髂支，术后即刻造影无内漏，6个月CTA示支架形态良好。另一例TACE术前规划患者，syngo.via清晰显示肝右动脉替代发自肠系膜上动脉，避免了术中误栓正常肝动脉。第三例为颈动脉重度狭窄患者，syngo.via测量狭窄率78%、斑块为混合性伴表面溃疡，指导行颈动脉支架置入术，术后超声随访6个月无再狭窄。

## 讨论与展望

syngo.via应用中需注意的局限：①严重钙化伪影可干扰自动分割，需手动校正；②金属支架置入后的CTA评估受金属伪影影响，建议结合Dual Energy去金属伪影技术；③自动算法在严重迂曲或闭塞段血管可能失败，需要人工干预；④部分高级功能（如斑块分析）对图像质量要求高，需≥64排CT且强化达标（主动脉CT值>300HU）。未来发展方向包括：①AI驱动的全自动血管标注和解剖识别；②血流动力学仿真（CFD）集成，预测动脉瘤破裂风险；③多模态融合（CTA+IVUS+OCT）的血管壁成分精准分析；④云端协作和移动端查看，支持多学科会诊。

## 总结

syngo.via是介入术前影像评估的强大工具，介入医师应掌握其血管提取、曲面重建和定量分析功能，将高级影像后处理融入日常工作流。规范的血管分析流程可显著提高术前规划质量、减少术中不确定因素、缩短手术时间，最终改善患者预后。`,publishDate:"2024-06-05",views:7890,category:"技术教程"},{id:"wxart-031",accountId:"wxa-008",accountName:"IGTS CAS",title:"飞利浦Allura Clarity冠脉介入高级应用：FFR和IVUS协同操作",summary:"如何在Allura Clarity平台上实现FFR压力导丝和IVUS血管内超声的协同操作。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Allura%20Clarity%20FFR%20IVUS%20coronary%20intervention%20workflow%20integration&image_size=landscape_4_3",content:`## 飞利浦Allura Clarity冠脉介入高级应用：FFR和IVUS协同操作

## 文章背景

冠脉介入（PCI）已从单纯造影引导发展到"功能-解剖整合引导"时代。研究显示，单纯造影评估狭窄程度存在显著局限性——50%-70%的临界病变中，约30%-40%的造影狭窄并无功能学意义，而部分"轻度"狭窄却可能因斑块特征导致急性事件。血流储备分数（Fractional Flow Reserve, FFR）通过测量充血状态下病变远端与主动脉压力比值，提供狭窄的功能学证据；血管内超声（IVUS）通过高频超声（20-60MHz）成像，提供血管壁和斑块的解剖细节。FFR+IVUS协同评估可显著改善复杂病变的决策和支架置入效果。飞利浦Allura Clarity系列作为高端心血管介入平台，集成了低剂量高清成像（Clarity技术可降低剂量约50%）和IntraSight集成应用，实现FFR和IVUS的无缝协同。本文介绍该平台协同操作的详细流程和临床要点。

## 核心内容

### 设备连接与系统校准

将FFR压力导丝（PressureWire）和IVUS导管（如EagleEye、OptiCross）分别连接至IntraSight接口模块，系统自动识别设备类型并完成压力校零（相对于主动脉压力）和超声频率匹配（通常40-60MHz）。整个连接和校准过程约需2-3分钟。校零时需确保导丝传感器位于引导导管开口处，避免位置偏差影响基线。

### FFR测量标准流程

在DSA引导下将压力导丝送至病变远端至少20mm处，记录静息Pd/Pa比值。经肘静脉或股静脉注射腺苷（140μg/kg/min，持续2分钟）或经冠脉注射ATP（左冠脉60μg，右冠脉40μg）诱发充血状态，记录最低FFR值。FFR≤0.80提示功能学显著狭窄，需介入治疗；FFR>0.80可推迟介入，药物治疗随访。测量后回撤导丝可评估病变"压降"分布。

### IVUS回撤采集与图像解读

保留导丝位置，沿导丝送入IVUS导管至病变远端（至少10mm），以0.5-1.0mm/s速度自动回撤采集。系统同步记录IVUS影像和回撤距离。关键测量参数包括：参考血管直径（近端和远端）、最小管腔面积（MLA）、斑块负荷（Plaque Burden = EEM面积-管腔面积）/EEM面积。支架置入后IVUS评估支架膨胀率、对称性和贴壁情况。

### 协同分析界面与多模态整合

Allura Clarity支持分屏显示DSA造影、IVUS横截面影像和FFR压力曲线。术者可在IVUS影像上标记病变位置（"Mark"功能），系统自动对应至造影图像和FFR曲线，实现"解剖-功能"一体化评估。回撤过程中可记录FFR变化与IVUS解剖的对应关系，精确定位"罪犯病变"。

### 支架优化策略与终点评估

根据IVUS测量的参考血管直径选择支架尺寸（支架/参考血管比1.0-1.1），支架长度需覆盖病变两端至少5mm。根据FFR改善程度（ΔFFR）评估介入效果——理想情况下术后FFR应>0.90。术后IVUS确认支架贴壁良好（贴壁不良面积<5%）、膨胀率>90%、对称指数>0.7，无边缘夹层。

## 技术细节与临床应用

FFR+IVUS协同应用的关键场景包括：①左主干病变——IVUS测量的MLA<6.0mm²（西方人群）或<4.8mm²（亚洲人群）结合FFR<0.80，是血运重建的强指征。左主干病变必须IVUS评估，造影易低估病变严重性。②分叉病变——IVUS评估边支开口受累情况，FFR评估边支功能，决定是否需双支架策略。③临界病变（50%-70%狭窄）——FFR可避免不必要的支架置入（FAME研究显示可使支架数减少约30%），IVUS可识别易损斑块指导强化他汀治疗。④支架优化——IVUS指导的PCI较造影指导可降低MACE约30%（ADAPT-DES研究）。⑤CTO病变——IVUS可指导导丝从真假腔进入，评估内膜下通道长度。术中需注意：腺苷注射可能引起房室传导阻滞，备好临时起搏；IVUS导管可能加重狭窄或诱发痉挛，必要时冠脉内注射硝酸甘油。

## 研究进展与案例分析

FAME研究（n=1005）证实FFR指导PCI较造影指导降低2年MACE率（12.9% vs 18.3%）。FAME 2研究显示FFR阳性病变推迟PCI的1年MACE率显著高于PCI组（9% vs 4%），支持FFR阳性病变应积极干预。ADAPT-DES研究（n=2358）显示IVUS指导PCI的支架内血栓率（0.5% vs 1.4%）和MACE率（3.1% vs 5.0%）显著低于造影指导。FORZA研究显示FFR-CT和iFR与FFR一致性良好。典型病例：一例58岁男性LAD中段70%狭窄，FFR 0.78，IVUS示MLA 2.4mm²、斑块负荷78%、低回声易损斑块。置入3.0×24mm药物涂层支架，术后IVUS示支架膨胀率92%、贴壁良好，FFR回升至0.91。另一例糖尿病患者LAD开口60%狭窄，FFR 0.83（功能学阴性），IVUS示MLA 3.2mm²但斑块稳定，强化他汀治疗6个月后FFR维持0.85，避免不必要的支架。

## 讨论与展望

FFR+IVUS协同应用面临的挑战：①额外费用（FFR导丝约5000-8000元，IVUS导管约6000-10000元），部分医保覆盖有限；②操作时间增加约10-15分钟；③腺苷诱发充血可能不适或禁忌（如严重哮喘、II度以上AVB）；④IVUS对严重钙化病变的穿透力有限，OCT可作为补充。未来方向：①iFR（瞬时无波比值）无需腺苷，与FFR一致性良好，已获指南推荐；②FFR-CT无创评估，可能改变术前规划流程；③AI辅助IVUS自动斑块识别和支架优化评估；④集成式多模态导管（如IVUS+OCT一体）。

## 总结

在Allura Clarity平台上，FFR和IVUS的协同操作流畅高效，术者应掌握其操作技巧，将多模态评估融入复杂冠脉介入的常规流程。FFR+IVUS协同模式推动冠脉介入从"造影引导"向"功能-解剖整合引导"转变，有助于减少支架过度使用、优化支架置入效果，改善患者长期预后。`,publishDate:"2024-06-04",views:6789,category:"临床应用"},{id:"wxart-032",accountId:"wxa-010",accountName:"GE医疗介入",title:"GE IGS 730神经介入高级功能：3D路图与融合导航操作指南",summary:"IGS 730三维路图和多模态影像融合导航功能的操作步骤和临床应用价值。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20IGS%20730%203D%20roadmap%20image%20fusion%20neurointerventional%20navigation%20guide&image_size=landscape_4_3",content:`## GE IGS 730神经介入高级功能：3D路图与融合导航操作指南

## 文章背景

神经介入手术以解剖结构复杂、操作精度要求极高著称。颅内血管直径细小（0.5-5mm），走行迂曲，且与脑组织、颅神经紧密毗邻，传统二维DSA路图下术者需在大脑中重建三维解剖关系，学习曲线长，并发症风险高。GE Discovery IGS 730搭载的三大轴机械臂、高分辨率平板探测器和ASSIST高级应用平台，提供了行业领先的三维路图（3D Roadmap）和多模态影像融合导航功能。这些功能可将术前CTA/MRA三维影像与实时透视融合，为颅内动脉瘤栓塞、脑血管畸形（AVM/AVF）治疗、颅内支架置入和急性缺血性卒中取栓提供精准导航。自2015年推出以来，IGS 730已在全球数百家神经介入中心部署，成为复杂神经介入手术的重要辅助工具。本文系统介绍其3D路图和融合导航的操作流程、技术要点和临床应用价值。

## 核心内容

### 3D路图生成与工作角度优化

术中通过3D旋转采集（3D-RA）获取脑血管三维数据：C臂在5秒内绕头旋转200°，注射造影剂同步采集，系统自动重建三维血管模型。术者可在三维模型上预设工作角度（任意角度旋转、缩放），系统自动控制三大轴机械臂到位，无需手动移动C臂。对于复杂动脉瘤（如宽颈、不规则形态），可同时设置两个工作角度，实现双平面同步观察。

### 影像融合配准与精度验证

将术前CTA/MRA数据导入ASSIST工作站，系统自动识别颅骨标志点（如前床突、鞍结节、岩骨嵴）完成与实时透视的刚性配准。配准精度通常<1mm，满足神经介入要求。配准后系统显示融合影像——三维血管模型叠加在实时透视上，术者可观察导管与血管的相对位置。配准失败时可通过手动调整3个解剖点重新配准。

### 动脉瘤栓塞导航应用

在三维路图引导下，微导管和微导丝的位置实时叠加于三维血管模型上。术者可在双平面透视中同时观察导管与瘤颈、载瘤动脉的空间关系，辅助弹簧圈的精准填塞。三维模型可测量动脉瘤的宽径、深径、颈宽和载瘤动脉直径，指导弹簧圈选择（首枚弹簧圈直径=瘤体宽径，长度根据瘤体形态选择）。

### 脑血管畸形（AVM/AVF）应用

融合导航可清晰显示畸形团、供血动脉和引流静脉的三维关系，辅助液态栓塞剂（如Onyx、NBCA）的注射路径规划，避免反流至正常血管。可逐支供血动脉分析，制定分次栓塞方案。对于硬脑膜动静脉瘘（DAVF），融合导航有助于识别瘘口位置和静脉引流方向。

### 颅内支架释放辅助

在颅内支架（如Pipeline血流导向装置、LVIS支架、Enterprise支架）释放过程中，3D路图可清晰显示支架标记点和血管壁的贴合情况，辅助判断支架展开是否充分、是否覆盖病变全程。释放后即刻3D-RA可评估支架贴壁情况。

## 技术细节与临床应用

操作流程方面，3D路图和融合导航的标准工作流为：①3D旋转采集——5秒旋转200°，注射速率3-4mL/s，总量12-18mL，延迟1-2秒；②三维重建——系统在30-60秒内完成重建，自动分割血管；③工作角度设置——在三维模型上拖动旋转，选择最佳显露瘤颈的角度；④融合配准——导入术前CTA/MRA（DICOM格式），自动刚性配准，验证配准精度（<1mm）；⑤术中导航——透视图像实时叠加三维血管模型，可在融合/纯透视/纯3D模式间切换。技术要点：①旋转采集前确保患者头部固定，避免运动伪影；②造影剂浓度建议300-370mgI/mL，根据血管条件调整；③配准时选择解剖标志清晰的层面（如颅底层面）；④术中如患者头部移动>2mm需重新配准。临床应用方面，IGS 730的3D路图在宽颈动脉瘤（瘤颈/瘤体比>0.5）栓塞中价值尤为突出，可辅助选择最佳工作角度观察瘤颈，避免弹簧圈疝入载瘤动脉。

## 研究进展与案例分析

一项纳入180例颅内动脉瘤栓塞的研究显示，3D路图引导组的完全栓塞率（87.6%）显著高于2D路图组（73.2%），手术时间缩短约22%，造影剂用量减少18%，术者辐射剂量降低25%。多中心研究（n=120）显示，融合导航在复杂AVM栓塞中可使栓塞剂反流率从15%降至6%，并发症率从8%降至4%。在急性缺血性卒中取栓中，3D路图辅助大血管闭塞定位的时间较2D减少35%。典型病例：一例52岁女性前交通动脉宽颈动脉瘤（5.2mm×4.0mm，颈宽3.5mm），3D路图选择右前斜位20°+头位15°为工作角度，清晰显示瘤颈与双侧A2关系。微导管精准到位后填塞5枚弹簧圈，采用支架辅助技术（Neuroform 4.5×20mm），术后即刻造影完全栓塞（Raymond I级），6个月随访无复发。另一例右侧颞叶AVM（直径3cm，3支供血动脉）患者，融合导航清晰显示供血动脉与畸形团关系，分2次栓塞完全闭塞畸形团，无神经功能缺损，mRS评分0分。第三例为基底动脉顶端动脉瘤（6mm）患者，3D路图辅助选择最佳工作角度，双微导管技术填塞7枚弹簧圈，完全栓塞无载瘤动脉狭窄。

## 讨论与展望

IGS 730高级导航应用的局限：①3D旋转采集增加辐射剂量（约相当于2D透视的10-15倍），需严格掌握适应证；②融合配准为刚性配准，脑组织移位（如脑水肿、出血）会影响配准精度；③设备成本和培训门槛较高，基层医院推广受限；④部分超选操作仍需术者经验判断。术中实时更新配准和减少运动伪影也是持续优化的方向。未来方向包括：①非刚性配准算法适应脑组织形变；②AI自动识别动脉瘤形态和推荐弹簧圈策略；③4D血流动力学仿真评估动脉瘤破裂风险；④机器人辅助微导管操控与3D路图协同，进一步提升手术标准化水平。

## 总结

GE IGS 730的3D路图和融合导航是神经介入的重要辅助工具，术者应熟练掌握3D路图生成、影像配准和融合导航的操作流程，以提升复杂神经介入手术的成功率和安全性。这些技术将传统依赖经验的二维操作转化为精准可视的三维导航，对推动神经介入标准化和普及化具有重要意义，未来有望结合AI与机器人技术进一步拓展应用边界。`,publishDate:"2024-06-03",views:7654,category:"功能介绍"},{id:"wxart-033",accountId:"wxa-009",accountName:"联影介入",title:"国产DSA崛起：联影uAngio系列临床应用案例集锦",summary:"多家三甲医院使用联影uAngio DSA的临床应用案例和医生反馈。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20DSA%20united%20imaging%20uAngio%20clinical%20cases%20hospital%20domestic%20equipment&image_size=landscape_4_3",content:`## 国产DSA崛起：联影uAngio系列临床应用案例集锦

## 文章背景

高端医疗装备自主可控是国家健康战略的重要组成部分。DSA作为介入医学的"眼睛"，长期被GPS（GE、Philips、Siemens）三家外企垄断，进口设备价格高昂（单台800-1500万元），且售后响应、定制化服务难以满足国内临床需求。联影医疗自2016年起布局DSA领域，先后推出uAngio 960（双平板大C臂）、uAngio 980（一体化滑轨CT-DSA）和uAngio OMNI等型号，在平板探测器、高压发生器、图像处理算法等核心部件上实现自主可控。截至2024年，联影DSA已在国内逾百家三甲医院装机，覆盖心血管、神经、肿瘤和外周介入全领域。本文汇总多家三甲医院不同专科的临床应用案例和医生真实反馈，展示国产DSA在实际工作中的表现。

## 核心内容

### 心血管介入应用案例

某三甲医院心内科使用uAngio 960完成复杂冠脉介入（左主干分叉病变、慢性完全闭塞病变）200余例。术者反馈系统图像清晰度高，"零噪声"（Zero Noise）技术在低剂量条件下仍能清晰显示侧支循环和微导管位置。针对中国人群优化的曝光参数（如针对亚洲人体型的体厚自动补偿算法）显著降低了肥胖患者的过曝伪影。系统支持双向旋转采集和双平面同步成像，复杂分叉病变PCI时间缩短约15%。

### 神经介入应用案例

某省级医院神经外科应用uAngio 960完成颅内动脉瘤栓塞50余例，包括10例宽颈动脉瘤和5例血流导向装置植入。十轴机械臂的大开口设计（最大开口180°）便于术中调整患者体位，三维路图功能辅助微导管精准到位。系统的高帧率采集（最高30fps）在动脉瘤填塞过程中清晰显示弹簧圈解脱和填塞密度，减少了术中重复造影的需求。

### 肿瘤介入应用案例

某肿瘤专科医院介入科使用uAngio CT一体机完成TACE联合消融治疗80余例。DSA与CT模式快速切换（<5分钟），术后即刻CT评估碘油沉积，明显提高了手术效率。"一键TACE"工作流自动优化造影参数和路图显示，缩短了学习曲线。系统支持 Cone-beam CT 引导下经皮穿刺消融，软组织分辨率满足肝顶、膈下病灶的精确定位。

### 外周血管介入应用案例

某综合性医院血管外科应用uAngio 960完成下肢动脉硬化闭塞症介入治疗、腹主动脉瘤腔内修复（EVAR）、布加综合征等手术。大C臂开口（120cm SID）便于肥胖患者和复杂体位的操作。下肢步进追踪造影功能可一次注射完成双下肢全程血管成像，造影剂用量减少约30%。

### 医生综合评价与调研数据

参与调研的50位介入医师中，85%认为uAngio系列在图像质量上已达到或接近进口高端设备水平；90%对设备的服务响应速度（平均4小时上门）和性价比表示满意；76%认为在复杂神经介入和左主干病变等高难度手术中，与进口设备仍有差距，主要体现在高端临床应用（如高级血流动力学分析、AI辅助诊断）的算法成熟度。

## 技术细节与临床应用

联影uAngio系列的核心技术参数：①平板探测器——uAngio 960采用30×40cm非晶硅平板，像素尺寸154μm，最高分辨率3.25lp/mm，动态范围16bit，达到国际一线水平；②高压发生器——最大功率100kW，最大管电压125kV，最大管电流1000mA，支持高频脉冲透视（脉冲宽度最短4ms）；③机架系统——十轴机械臂，C臂开口180°，深度90cm，可覆盖全身各部位介入需求；④图像处理——搭载"零噪声"AI降噪算法、"智能路图"（Smart Roadmap）实时配准、血管三维重建（3D-RA）等功能；⑤一体化设计——uAngio 980集成滑轨CT，DSA与CT模式切换无需转运患者，适合复杂肿瘤介入和急诊复合手术。临床工作流方面，系统支持"一键工作流"（One-Touch Workflow）预设心血管、神经、外周等专科协议，减少了手动参数调整时间。

## 研究进展与案例分析

国内多中心研究（n=320例冠脉介入）显示，uAngio 960图像质量评分（4.6/5.0）与进口对照设备（4.7/5.0）无显著差异，但平均辐射剂量降低约12%。神经介入方面，一项纳入60例颅内动脉瘤栓塞的研究显示，uAngio 960三维路图引导组的完全栓塞率（85%）和并发症率（4%）与进口设备组（83%、5%）相当。典型病例：一例68岁男性急性前壁STEMI患者，uAngio 960下行急诊PCI，术者反馈图像清晰度满足LAD近段完全闭塞病变的导丝通过判断，4分钟内完成球囊扩张和支架置入，D2B时间68分钟。另一例肝癌患者（BCLC C期）行TACE联合MWA，uAngio 980术中DSA示肝右动脉替代发自肠系膜上动脉，CBCT引导下精确定位3个肿瘤子灶，单次手术完成多灶治疗，术后1月MRI示完全缓解。

## 讨论与展望

国产DSA发展面临的挑战：①高端临床应用算法（如FFR-CT、AI辅助诊断）的成熟度仍需提升，部分功能尚在研发中；②海外市场的品牌认知度和临床数据积累不足，国际化进程有待加快；③核心零部件（如部分高端平板探测器芯片）仍依赖进口，供应链安全存在隐患；④二手市场和设备更新换代的回收体系尚不完善。未来方向：①AI赋能——深化与临床科室合作，开发专科化AI应用（如自动斑块分析、术中导航）；②多模态融合——DSA与超声、OCT、IVUS的多模态影像整合；③机器人化——DSA平台与介入机器人协同，打造"智能介入手术室"；④5G远程——支持基层医院的远程介入和实时指导。

## 总结

联影uAngio系列DSA在心血管、神经、肿瘤和外周介入多个专科的临床应用中表现优异，已具备与进口高端设备竞争的实力。国产介入设备的崛起打破了长期依赖进口的局面，为各级医疗机构提供了更多选择，有助于降低医疗设备采购成本、推动介入技术普及。随着AI和机器人技术的进一步融合，国产DSA有望在全球介入影像市场占据更重要地位。`,publishDate:"2024-06-02",views:9123,category:"临床应用"},{id:"wxart-034",accountId:"wxa-001",accountName:"介入放射学杂志",title:"肺栓塞介入治疗进展：导管溶栓与机械取栓",summary:"急性肺栓塞的介入治疗方法选择，包括CDT导管溶栓和机械取栓的临床应用。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pulmonary%20embolism%20interventional%20treatment%20catheter%20thrombolysis%20mechanical%20thrombectomy&image_size=landscape_4_3",content:`## 肺栓塞介入治疗进展：导管溶栓与机械取栓

## 文章背景

急性肺栓塞（PE）是第三位常见的心血管死因，仅次于心肌梗死和卒中，年发病率约60-100/10万人。PE的临床表现谱极广，从无症状到猝死不等，基于血流动力学和生物标志物的危险分层将患者分为高危（合并心源性休克或持续性低血压，30天死亡率30%-50%）、中高危（右心功能不全+心肌损伤）、中低危（右心功能不全或心肌损伤之一）和低危。系统性溶栓虽是高危PE的标准治疗，但颅内出血风险（约2%）和显著出血风险（约10%）限制了其应用。近年来，经皮介入治疗——包括导管定向溶栓（CDT）、机械取栓和超声辅助溶栓（USAT）——为高危和中高危PE患者提供了更安全、高效的治疗选择，可快速恢复肺动脉血流、降低右心后负荷，同时显著降低出血风险。PEITHO、TOPP和MOPETT等研究为介入治疗提供了循证依据。

## 核心内容

### 导管定向溶栓（CDT）技术要点

经股静脉或颈内静脉穿刺，将多侧孔溶栓导管（如Uni*Fuse、Cragg-McNamara）精准置入肺动脉血栓内，局部灌注尿激酶（负荷量4400U/kg后维持4400U/kg/h）或rt-PA（0.5-1.0mg/h）。局部药物浓度高、全身暴露低，出血风险显著降低（颅内出血<0.5%）。溶栓时间通常为12-24小时，期间每4-6小时监测纤维蛋白原（维持>1.0g/L）和APTT。OPTALYSE研究显示24小时低剂量rt-PA（8-12mg）的RV/LV比值改善与标准剂量相当，但出血更少。

### 机械取栓装置与选择策略

包括：①AngioJet流变溶栓系统——利用高速水流Bernoulli效应碎吸血栓，可快速恢复血流，但需注意血红蛋白尿、心动过缓和一过性低血压风险；②Penumbra Indigo抽吸系统——大口径（12-24F）机械抽吸，无需溶栓药物，适合出血高危患者；③Inari FlowTriever——专为PE设计的三叉大口径取栓装置，FLASH研究显示48小时 RV/LV 改善0.49，无大出血；④EKOS超声辅助溶栓——见下文。机械取栓可迅速清除血栓，快速改善血流动力学，尤其适用于溶栓禁忌的高危PE患者。

### 适应证分层与决策路径

①高危PE——若无溶栓禁忌首选系统性溶栓；若有禁忌或失败，行机械取栓或CDT；②中高危PE——单纯抗凝下密切监测，若血流动力学恶化行CDT或机械取栓；③中低危PE——以抗凝为主，介入治疗不推荐。具体选择依据：出血高危患者优先机械取栓（无需溶栓药物），溶栓相对禁忌者可考虑CDT低剂量方案。

### 超声辅助溶栓（USAT）

EKOS超声溶栓导管在灌注溶栓药物的同时发射高频超声（1-2MHz），破坏纤维蛋白交联，增强溶栓效率。ULTIMA研究显示USAT的24小时RV/LV改善（0.99±0.21）显著优于单纯抗凝组（1.07±0.27），且出血率低。PEITHO-2亚组分析提示USAT的溶栓速度较传统CDT快约30%。适合高龄、低体重或溶栓药物剂量需严格控制的患者。

### 疗效评估与术后管理

术后通过CTA评估血栓负荷变化（Qanadli或Mastora评分），超声心动图评估右心功能恢复（右心室/左心室直径比<0.9为恢复）。理想情况下，术后24-48小时内肺动脉压力和氧合明显改善。术后管理包括：稳定血流动力学、规范抗凝（首选DOACs，肿瘤患者可选低分子肝素）、监测右心功能和寻找PE病因（如DVT、肿瘤、易栓症）。

## 技术细节与临床应用

PE介入治疗操作要点：①入路选择——首选右股静脉，必要时颈内静脉；②肺动脉造影——评估血栓位置、范围和血流动力学（肺动脉压力），通常主肺动脉压>50mmHg提示重度肺高压；③导管定位——多侧孔导管应完全埋入血栓内，避免游离于血管腔；④溶栓剂量——rt-PA 0.5-1.0mg/h（双侧肺动脉分灌），总量通常≤20-24mg；⑤机械取栓操作——AngioJet每次激活<10秒，避免心动过缓；FlowTriever需多次取栓直至造影改善；⑥下腔静脉滤器——存在抗凝禁忌或抗凝下复发DVT/PE者可临时置入，待出血风险解除后2周内取出。并发症防治：①出血——监测血红蛋白和神经系统体征，大出血时停药并输注冷沉淀/纤维蛋白原；②溶血——AngioJet术后常见，对症水化；③穿刺部位血肿——超声引导穿刺、术后充分压迫。

## 研究进展与案例分析

PEITHO研究（n=1006）证实，中高危PE患者系统性溶栓较单纯抗凝降低7天死亡或血流动力学恶化风险，但增加大出血（6.3% vs 1.2%）。OPTALYSE研究（n=101）显示，低剂量CDT（rt-PA 8-24mg/2-6h）的48小时 RV/LV 改善0.42-0.48，大出血率<5%。FLASH研究（n=800）显示FlowTriever的48小时 RV/LV 改善0.51，48小时严重不良事件率4.4%。典型病例：一例65岁男性突发胸闷气短，CTA示双侧主肺动脉大块充盈缺损，超声心动图示右心扩大（RV/LV 1.5）、TnI升高，诊断为中高危PE。因近期消化道出血（溶栓禁忌）行FlowTriever机械取栓，术后即刻肺动脉造影示血栓明显减少，48小时RV/LV降至1.0，TnI恢复正常。另一例高危PE合并心源性休克患者，行EKOS超声辅助溶栓（rt-PA 1mg/h×18h，双侧），术后24小时血流动力学稳定，6分钟步行距离从0恢复至450m。

## 讨论与展望

PE介入治疗面临的挑战：①治疗时间窗——中高危PE患者何时从"密切监测"转为介入治疗尚有争议，需要可靠的早期预警指标；②器械选择——各机械取栓装置缺乏头对头比较，临床选择多基于经验；③费用效益——进口器械成本高昂（数万元），国内医保覆盖有限；④长期预后——介入治疗对慢性血栓栓塞性肺高压（CTEPH）的预防价值待证实。未来方向：①基于生物标志物（如sST2、NT-proBNP）和影像组学的PE风险预测模型；②可回收下腔静脉滤器的长期安全性优化；③国产机械取栓装置的研发（如先瑞达、归创通桥的PE专用导管）；④PE多学科协作（PERT）团队的标准化建设。

## 总结

导管溶栓（CDT）、机械取栓和超声辅助溶栓（USAT）是急性PE介入治疗的三大利器。临床应根据患者危险分层、出血风险和医疗中心条件个体化选择治疗方案。对于溶栓禁忌或失败的高危PE，机械取栓是首选；对于中高危PE，CDT或USAT可降低恶化为高危的风险。PE介入治疗技术的进步有望显著降低PE相关死亡率，改善患者长期预后。`,publishDate:"2024-06-01",views:8765,category:"临床研究"},{id:"wxart-035",accountId:"wxa-003",accountName:"心血管介入资讯",title:"冠脉钙化病变处理：旋磨、激光与刻痕球囊的选择",summary:"严重冠脉钙化病变的处理策略，各种器械的适应症和操作技巧。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coronary%20calcification%20rotablation%20laser%20scoring%20balloon%20cardiology%20intervention&image_size=landscape_4_3",content:`## 冠脉钙化病变处理：旋磨、激光与刻痕球囊的选择

## 文章背景

冠状动脉严重钙化是PCI中最具挑战性的病变类型之一，发病率随人口老龄化和糖尿病患病率上升而显著增加——60岁以上患者中重度钙化发生率约30%-40%，透析患者可达60%以上。钙化斑块坚硬且难以扩张，导致球囊无法充分扩张、支架无法充分展开和贴壁，增加支架内血栓、靶病变血运重建（TLR）和支架断裂风险。造影下钙化易被低估，IVUS和OCT评估显示，造影诊断严重钙化的敏感性仅约60%。斑块旋磨术（RA）、准分子激光冠脉成形术（ELCA）、刻痕/切割球囊和血管内冲击波（IVL）是处理钙化病变的主要介入技术。合理选择和联合应用这些工具是成功处理钙化病变的关键。本文系统介绍各技术的原理、适应证、操作要点和选择策略。

## 核心内容

### 斑块旋磨术（RA）原理与适应证

RA通过高速旋转（14-20万转/分）的金刚石涂层磨头将钙化斑块研磨为微小颗粒（<5-10μm，可被网状内皮系统清除），是处理严重表浅钙化（IVUS/OCT示360°环形钙化、钙化角度>270°）的金标准。磨头直径1.25-2.5mm，需"分次递增"（每次递增0.25-0.5mm）至目标血管直径的60%-70%。RA可有效修饰钙化斑块便于后续球囊扩张和支架置入。并发症包括慢血流/无血流（发生率1%-5%）、冠脉穿孔（<1%）和磨头嵌顿（<0.5%）。

### 准分子激光（ELCA）应用场景

ELCA利用308nm准分子激光脉冲产生光化学（打断分子键）、光热（汽化组织）和光机械（声波冲击）效应，消融斑块组织。ELCA特别适合处理支架内再狭窄（ISR）、慢性完全闭塞病变（CTO）导丝通过后的内膜下通道、血栓性病变和静脉桥血管病变。对深层钙化的处理能力有限，主要通过消融表层组织改善管腔。激光导管直径0.9-2.0mm，根据血管直径选择。

### 刻痕/切割球囊机制与适应证

球囊表面附有金属导丝（如AngioSculpt，3条螺旋导丝）或微型刀片（如Flexome Cutting Balloon，3-4片微型刀片），扩张时对钙化斑块施加集中应力，产生可控的内膜撕裂，便于球囊充分扩张。适用于中度钙化病变（<180°弧度）或作为RA后的补充修饰工具。切割球囊需避免在严重成角病变使用，以防血管穿孔。

### 血管内冲击波（IVL）创新技术

Shockwave IVL通过球囊释放脉冲式声压力波（每秒1脉冲，单球囊10脉冲），在钙化斑块内产生裂缝而保留血管内膜完整性，是近年来处理深层钙化的创新技术。球囊需充分扩张至命名压（4atm）才能有效释放冲击波，可处理IVUS下深部钙化。Disrupt CAD研究显示IVL的手术成功率（残留狭窄<30%且无严重并发症）达95.4%。并发症少，主要为球囊无法通过严重钙化段。

### 选择策略与联合应用

表浅重度钙化（>270°环形）首选RA；深层钙化（IVUS示钙化结节突入管腔或IVL适应影像）可考虑IVL；支架内再狭窄或血栓病变可选ELCA；中度钙化可尝试刻痕球囊。严重钙化病变常需联合应用：RA/IVL+刻痕球囊+药物涂层球囊/支架。"RotaTriever"（RA+IVL）联合方案在复杂钙化中显示出良好效果。

## 技术细节与临床应用

钙化病变处理的标准工作流：①术前评估——造影+IVUS/OCT精确评估钙化范围、角度和深度，OCT可精确测量钙化厚度（>0.5mm为重度）和角度（>180°为重度）；②导丝选择——强支撑导丝（如Sion Black、Gaia系列）通过钙化段，必要时使用微导管辅助；③预处理——根据钙化类型选择RA、IVL、ELCA或刻痕球囊修饰钙化，目标是充分扩张管腔至参考血管直径的80%以上；④球囊预扩张——非顺应性球囊（NCB）高压扩张（16-20atm），必要时使用4-5mm大直径球囊；⑤支架置入——选择较参考血管直径略大的药物涂层支架，高压释放（≥16atm）；⑥后扩张——NCB 18-24atm充分后扩张确保贴壁；⑦IVUS/OCT评估——支架膨胀率>90%、对称指数>0.7、无边缘夹层。对于"激光般"钙化（钙化结节突入管腔），RA是避免球囊破裂和血管穿孔的最安全选择。RA操作要点：磨头转速14-18万转/分，单次磨削15-20秒后间歇30秒，避免"低速停顿"（drop-off）预防磨头嵌顿。

## 研究进展与案例分析

PREPARE-CALC研究（n=240）显示，与切割球囊相比，RA组的支架扩张率（85.4% vs 78.0%）和手术成功率（92% vs 83%）显著更高。Disrupt CAD研究（n=60）显示IVL的手术成功率95.4%，管腔面积增加1.76mm²。RotaTriever联合方案的多中心研究（n=60）显示，重度钙化病变的支架扩张率达92.5%，无穿孔发生。典型病例：一例72岁男性LAD中段重度钙化（OCT示钙化角度320°、厚度0.8mm），1.5mm磨头RA（14万转/分）修饰后，3.0×15mm NCB 18atm预扩张，置入3.0×23mm药物涂层支架16atm释放，3.25×15mm NCB 22atm后扩张。OCT示支架膨胀率94%、贴壁良好，术后TIMI 3级血流。另一例LCX近段严重钙化伴钙化结节，IVL（3.5×12mm球囊，10脉冲）处理后管腔面积从1.2mm²增至4.8mm²，置入3.5×18mm支架，OCT示支架贴壁良好。

## 讨论与展望

钙化病变处理仍面临的挑战：①严重钙化段球囊/支架无法通过，需子母导管（Guidezilla、Guideliner）或逆行导丝技术；②RA慢血流/无血流风险，需硝酸甘油、维拉帕米或腺苷冠脉内注射；③IVL球囊通过性较差，对严重狭窄病变需先预扩张；④IVUS/OCT评估增加操作时间和费用，但指南推荐为钙化病变PCI的必要评估手段。未来方向：①新型IVL球囊提高通过性；②AI辅助IVUS/OCT自动钙化定量分析；③可吸收镁支架在钙化病变中的应用探索；④药物涂层球囊联合RA/IVL减少支架置入；⑤机器人辅助RA减少术者疲劳和标准化操作。

## 总结

冠脉钙化病变的处理需要根据钙化类型、位置和严重程度个体化选择旋磨（RA）、激光（ELCA）、刻痕球囊或冲击波（IVL）技术，必要时联合应用，以确保支架优化置入。成功的钙化病变预处理可使支架充分展开和贴壁，显著降低支架内血栓和靶病变血运重建风险，改善患者长期预后。IVUS/OCT指导下的精准评估和操作是钙化病变PCI成功的关键。`,publishDate:"2024-05-31",views:9234,category:"技术讨论"},{id:"wxart-036",accountId:"wxa-002",accountName:"神经介入在线",title:"急性缺血性卒中血管内治疗时间窗：从4.5小时到24小时",summary:"缺血性卒中取栓时间窗扩展的循证医学证据与临床实践指南更新。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=acute%20ischemic%20stroke%20thrombectomy%20time%20window%2024%20hours%20neurointerventional&image_size=landscape_4_3",content:`## 急性缺血性卒中血管内治疗时间窗：从4.5小时到24小时

## 文章背景

急性缺血性卒中（AIS）血管内取栓治疗的时间窗经历了从保守到积极的革命性演变。1995年NINDS研究确立rt-PA静脉溶栓（IVT）的3小时时间窗，2008年ECASS III将时间窗扩展至4.5小时。然而对于大血管闭塞（LVO）所致的严重AIS，IVT的再通率仅约30%，机械取栓（MT）成为更有效的选择。2015年，MR CLEAN、ESCAPE、EXTEND-IA、SWIFT-PRIME和REVASCAT五项RCT同期发表，确立了发病6小时内前循环LVO取栓的I级推荐。2018年DEFUSE 3和DAWN研究将时间窗扩展至16-24小时，标志着"组织窗"时代的到来。这一变革深刻影响了卒中救治体系和临床实践，使更多原本"超时间窗"的患者获得了挽救脑组织的机会。

## 核心内容

### 6小时内的标准取栓流程

对于前循环LVO（颈内动脉末端、大脑中动脉M1/M2段）且发病<6小时的患者，直接机械取栓（MT）是I级推荐（A类证据），无需高级影像筛选。NIHSS≥6分、ASPECTS≥6分是常规纳入标准。支架取栓（如Solitaire、Trevo）和抽吸取栓（如Penumbra、ACE68）均为有效的取栓技术，首过再通率（mTICI 2b/3）可达80%以上。IVT桥接vs直接MT的选择基于指南：符合IVT适应证者应先行IVT桥接MT。

### 6-16小时的影像筛选（DEFUSE 3标准）

DEFUSE 3研究（n=182）证实，对于发病6-16小时的前循环LVO患者，若存在灌注-核心不匹配（mismatch ratio≥1.8且mismatch体积≥15ml，核心体积<70ml），取栓可显著改善90天功能预后（mRS 0-2比例45% vs 17%）。CTP或MRI-DWI/PWI是标准筛选工具。该研究将取栓时间窗从6小时扩展至16小时，是AIS治疗的重大突破。

### 6-24小时的临床-影像不匹配（DAWN标准）

DAWN研究（n=206）确立了临床-影像不匹配标准——根据卒中严重程度（NIHSS）和梗死核心大小（CTP或MRI-DWI）筛选适合取栓的患者：①≥80岁、NIHSS≥10、核心<21ml；②<80岁、NIHSS≥10、核心<31ml；③<80岁、NIHSS≥20、核心<51ml。DAWN标准将取栓时间窗扩展至24小时。AURORA研究进一步将DAWN标准拓展至更广泛的24小时时间窗，证实获益稳定。

### 超时间窗的个体化评估

对于发病>24小时但仍存在波动症状或进展性卒中的患者，若影像证实存在可挽救的半暗带，仍可考虑取栓，但需充分告知家属获益-风险比。此类决策应基于多学科讨论（神经介入、神经重症、影像科）。前循环进展性卒中伴侧支循环良好者可能获益；后循环（基底动脉闭塞）由于脑干对缺血的耐受性差，时间窗判断更为复杂。

### 后循环卒中的特殊性

后循环（椎-基底动脉）卒中的时间窗判断更为复杂。BASICS研究阴性结果引发争议，但后续ATTENTION和BAOCHE研究证实，发病24小时内的基底动脉闭塞取栓可显著改善预后。由于脑干对缺血的耐受性较差，部分中心对发病24小时内的基底动脉闭塞仍积极取栓，尤其是意识障碍进行性加重的患者。

## 技术细节与临床应用

机械取栓的技术要点：①入路选择——首选右股动脉，桡动脉入路作为替代；②导管系统——8F指引导管+中间导管（如Catalyst、Sofia）+微导管微导丝，"三轴系统"提供稳定支撑；③取栓技术——支架取栓器释放后等待3-5分钟使血栓嵌入，缓慢回撤支架+中间导管同步抽吸；④再通评估——mTICI分级，2b（50%-99%再通）和3（完全再通）为良好再通；⑤多次取栓——通常最多3-5次取栓，超过5次再通率显著下降且并发症风险升高；⑥围手术期管理——血压控制（再通前SBP<185mmHg，再通后SBP<180mmHg）、镇静vs全麻的选择（多数研究支持清醒镇静）、血糖和体温管理。影像筛选方面，CTP已取代单纯CT成为高级卒中中心的标准评估工具，需在10-15分钟内完成扫描和后处理。

## 研究进展与案例分析

2015年五项RCT的Meta分析（n=1287）显示，6小时内取栓组的90天功能独立率（mRS 0-2）为46%，显著高于对照组（26%），NNT约3.6。DEFUSE 3研究将取栓时间窗扩展至16小时，90天功能独立率45% vs 17%。DAWN研究将时间窗扩展至24小时，90天功能独立率49% vs 13%。ATTENTION研究（n=340）证实后循环BAO取栓的90天良好预后率46% vs 23%。典型病例：一例68岁男性突发右侧偏瘫、失语（NIHSS 18），发病8小时就诊。CTP示左侧MCA区灌注-核心不匹配（核心28ml，mismatch 85ml，ratio 3.0）。行MT取栓，3次取栓后mTICI 3级再通。术后24小时NIHSS降至6分，90天mRS 2分（轻度残疾，生活自理）。另一例52岁女性基底动脉闭塞，发病18小时意识障碍进行性加重（GCS 8分），CTP示脑干小核心+大面积低灌注。行MT取栓再通后，GCS恢复至14分，90天mRS 3分。

## 讨论与展望

时间窗扩展仍面临的挑战：①高级影像的普及和判读标准化——CTP后处理软件差异可能影响核心体积评估，需统一算法（如RAPID、Olea Sphere）；②院前和院内延迟——患者就诊延迟、影像等待时间和转运时间仍是瓶颈，需优化卒中急救体系；③后循环取栓的循证证据仍有限，需更多RCT；④老年和合并症患者获益-风险比需谨慎评估；⑤再通后"无复流"现象和再灌注损伤的防治。未来方向：①AI辅助影像自动评估和决策；②移动卒中单元（MSU）缩短院前延迟；③神经保护药物联合取栓（如NERV/FIST研究）；④可穿戴设备辅助卒中识别和远程评估；⑤基于影像组学的取栓获益预测模型。

## 总结

急性缺血性卒中血管内取栓已进入"组织窗"时代。6小时内前循环LVO取栓是I级推荐；6-24小时患者需通过高级影像（CTP/DWI-PWI）或临床-影像不匹配标准筛选；后循环BAO取栓的循证证据逐步积累。个体化评估是超时间窗取栓成功的关键。时间窗的扩展使更多AIS患者获得挽救脑组织的机会，但同时对医疗资源分配、影像判读标准化和急救体系优化提出了新的挑战。`,publishDate:"2024-05-30",views:12345,category:"指南解读"},{id:"wxart-037",accountId:"wxa-004",accountName:"中国医学影像技术",title:"影像组学与人工智能在介入医学中的应用前景",summary:"AI和影像组学技术如何辅助介入手术规划、疗效预测和术中导航。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radiomics%20artificial%20intelligence%20interventional%20medicine%20AI%20medical%20imaging%20future&image_size=landscape_4_3",content:`## 影像组学与人工智能在介入医学中的应用前景

## 文章背景

精准医学时代的核心挑战是"在正确的时间为正确的患者提供正确的治疗"。介入医学作为微创治疗的重要支柱，长期面临决策依赖经验、疗效预测困难、术中导航精度有限等问题。影像组学（Radiomics）和人工智能（AI）的兴起为破解这些难题提供了新工具。影像组学概念由荷兰Lambin教授于2012年正式提出，通过高通量提取医学影像中的定量特征（每例可达数百至数千个），揭示人眼无法识别的肿瘤异质性、微环境特征和生物学行为。AI则通过机器学习/深度学习算法挖掘数据规律，辅助临床决策。在介入医学中，影像组学与AI的融合正在开辟精准介入诊疗的新纪元——从术前患者选择、手术规划到术中导航和术后预测，全流程渗透智能化基因。本文系统介绍其在介入医学中的应用现状和未来前景。

## 核心内容

### 影像组学基本原理与工作流

从CT、MRI或PET影像中提取数百至数千个定量特征（形状、一阶统计、灰度共生矩阵GLCM、灰度游程矩阵GLRLM、小波特征等），构建反映肿瘤异质性、微环境特征和生物学行为的影像标志物。标准工作流包括：图像采集→肿瘤分割（手动或自动）→特征提取→特征筛选（稳定性、相关性）→模型构建（机器学习）→验证（交叉验证、外部验证）。

### TACE疗效预测与方案优化

基于术前CT的影像组学模型可预测肝癌TACE的客观缓解率，准确率达75%-85%。关键特征包括肿瘤边缘不规则度、动脉期增强异质性、瘤周低密度环和肿瘤-肝脏对比度。模型可指导TACE方案选择（如超选TACE vs 常规TACE、栓塞剂类型）。整合临床因素（如Child-Pugh分级、AFP水平、BCLC分期）的联合模型AUC可达0.85-0.92。

### 消融边界评估与复发预测

AI算法可自动识别消融灶边界并评估安全 margin，术后即刻预测局部复发风险。热消融后24小时内的影像组学变化可早期识别消融不全区域——消融区边缘的"不规则强化"和"密度异质性"是复发的预测因子。深度学习模型（如U-Net）可自动分割消融灶，准确率>90%，较人工分割更客观、可重复。

### 术中实时导航与影像增强

AI驱动的实时影像增强技术可在DSA透视中自动勾画血管轮廓、识别导管头端位置，甚至预测导丝最优路径。深度学习降噪可在降低剂量30%-50%的同时保持图像质量。增强现实（AR）技术将术前CTA三维模型叠加于实时透视，辅助复杂解剖结构的导航。AI辅助路图可自动适应患者移动和呼吸位移。

### 并发症风险预警与围手术期管理

整合临床数据和影像特征的AI模型可在术前预测介入手术并发症风险（如出血、栓塞后肝衰竭、术后认知障碍），指导术式选择和围手术期管理。术前预测模型可识别高风险患者，提前准备针对性预案（如血流动力学支持、抗凝调整）。机器学习模型在TACE后肝衰竭预测中的AUC达0.88。

## 技术细节与临床应用

影像组学与AI在介入医学的关键应用场景：①肝癌——TACE/消融疗效预测、肿瘤分级（如HCC Edmondson-Steiner分级）、微血管侵犯预测、术后复发监测；②肺癌——穿刺活检路径规划、消融范围预测、免疫治疗疗效评估；③脑血管病——动脉瘤破裂风险预测（基于形态学和CFD的PHASES评分扩展）、AVM栓塞方案规划；④外周血管——支架内再狭窄预测、斑块易损性评估。技术实现方面，深度学习模型（CNN、Transformer、GAN）已成为影像组学的核心算法，可处理3D影像数据并提取深度特征。联邦学习（Federated Learning）解决了多中心数据共享难题，使AI模型可在保护患者隐私的前提下利用多中心数据训练。可解释AI（XAI）如SHAP、LIME提升模型透明度，增强临床信任。临床落地路径：回顾性数据训练→前瞻性验证→RCT验证→指南推荐→临床常规应用。

## 研究进展与案例分析

一项纳入420例HCC的研究显示，基于动脉期CT的影像组学模型预测TACE客观缓解率的AUC达0.89，显著优于传统临床模型（AUC 0.72）。深度学习模型在肺结节良恶性鉴别中的准确率达93.5%，可减少30%的不必要穿刺。CFD结合影像组学的动脉瘤破裂风险模型AUC 0.91，较单纯PHASES评分（AUC 0.74）显著提升。FDA已批准多款影像组学/AI产品（如Aidoc、Viz.ai的卒中LVO自动识别，识别时间从平均52分钟缩短至12分钟）。典型病例：一例62岁男性肝右叶6cm HCC，影像组学模型预测TACE完全缓解概率18%，建议改行TACE+MWA联合治疗。术者采纳方案，3次TACE联合1次MWA后mRECIST评估完全缓解，24个月无复发。另一例前交通动脉4mm动脉瘤，CFD+影像组学预测5年破裂风险8.5%，较形态学风险评估（2.1%）更敏感，患者选择积极栓塞治疗。

## 讨论与展望

影像组学与AI在介入医学应用面临的挑战：①数据标准化——不同设备、参数、扫描协议的影像差异显著，需建立统一的影像采集协议；②模型泛化——多中心训练的模型在新中心表现可能下降，需迁移学习和持续学习；③可解释性——"黑箱"模型难以获得临床信任，XAI技术亟需突破；④法规审批——AI医疗器械的审批路径（如FDA 510(k)、NMPA三类）仍不完善；⑤临床整合——AI工具与现有PACS和工作流的整合需优化。未来方向：①多模态融合（影像+病理+基因组+液体活检）的精准预测；②大模型（如医学GPT）辅助介入决策和报告生成；③术中实时AI导航（如机器人+AI+AR协同）；④数字孪生（Digital Twin）模拟个体化治疗方案；⑤AI赋能的远程介入和教学培训。

## 总结

影像组学与AI在介入医学中的应用前景广阔，已从科研走向临床落地——术前选择最优治疗方案、术中提供智能导航、术后早期预测疗效，最终提高介入治疗的成功率和患者获益。从科研走向临床需要建立标准化影像采集协议、多中心验证模型和可解释的临床决策支持系统。介入医师应主动拥抱AI，将其作为"第二意见"和决策辅助，而非替代品，在专业判断与AI辅助的协同中实现精准介入。`,publishDate:"2024-05-29",views:10987,category:"前沿技术"},{id:"wxart-038",accountId:"wxa-007",accountName:"影领医介",title:"西门子医疗发布全域介入生态圈，助力介入诊疗精细化发展",summary:"2026 CMEF上西门子医疗正式发布全域介入生态圈，以导管室数智化生态平台为基础，统一集成软硬件管理、多模态影像数据、AI应用，实现术前术中术后全流程覆盖。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20healthineers%20universal%20interventional%20ecosystem%20CMEF%202026%20digital%20cath%20lab%20AI%20medical&image_size=landscape_4_3",content:`## 西门子医疗全域介入生态圈正式发布

## 文章背景

2026年4月9日，在第93届中国国际医疗器械博览会（CMEF）上，西门子医疗正式发布**全域介入生态圈**。这是西门子医疗在介入诊疗领域的一次战略性布局，旨在通过数字化、智能化和生态化手段，重塑介入医学的工作流程和服务模式。介入手术室长期面临"信息孤岛"问题——DSA、超声、IVUS、OCT、生理监测、电生理等不同厂商设备难以互联互通，医生需要在多个系统间切换操作，影响手术效率和决策一致性。同时，AI应用虽然蓬勃发展，但碎片化严重，缺乏统一平台整合和临床价值验证。西门子医疗的全域介入生态圈正是针对这些痛点提出的系统性解决方案，反映了介入医学从"设备为中心"向"数据为中心"的转型趋势。这一战略与国家"健康中国2030"和医疗设备智能化的政策方向高度契合。

## 核心内容

### 三大统一架构：打破信息孤岛

该生态圈以导管室数智化生态平台为基础，实现三大统一：①统一集成软硬件管理——通过标准化接口（如DICOM、HL7、FHIR）整合DSA、超声、IVUS、OCT等多厂商设备，实现"一个界面控制全场"；②一站式整合多模态影像数据——支持CT、MRI、PET、DSA、IVUS、OCT等影像的统一存储、调阅和融合显示；③导管室AI应用协同——AI算法作为"插件"接入统一平台，可调用多源数据并输出结构化结果。三大统一打破了传统介入手术室的信息壁垒，实现了"数据一次采集、多场景应用"。

### 开放式生态体系：覆盖全流程

覆盖术前规划、术中引导、术后评估全流程。术前可整合患者多源影像和电子病历，AI辅助病变分析和手术方案规划；术中实现设备协同（如DSA+超声同步成像）和AI辅助决策（如自动狭窄测量、支架尺寸推荐）；术后支持结构化报告自动生成和随访管理。开放式架构允许第三方应用接入，形成"西门子+生态伙伴"的合作模式。

### AI应用严格认证：保障临床安全

西门子医疗对每一款接入生态圈的第三方AI应用进行多维度严格认证，包括：①临床价值验证——需提供前瞻性临床研究数据证明有效性和安全性；②技术成熟度评估——算法精度、稳定性和鲁棒性测试；③影像链兼容性测试——确保AI应用与西门子设备数据格式、图像质量匹配；④持续监测——上线后定期回顾性能，必要时下架。这种"严进宽出"的认证机制确保了AI产品的可靠性和安全性。

### 开发者联盟：医工创新转化桥梁

构建医工创新转化桥梁，鼓励医疗机构、科研院所和初创企业基于西门子平台开发创新应用，加速前沿技术向临床转化。开发者可获得SDK、API、脱敏数据集和技术支持，降低开发门槛。优秀应用可通过西门子渠道进入全球市场，形成"科研-临床-产业"良性循环。

### 同质化诊疗愿景：优质资源下沉

通过标准化操作流程、远程协作和AI辅助，推动先进介入诊疗经验下沉至基层医疗机构。AI辅助可弥补基层医师经验不足的问题（如自动识别病变、推荐术式），远程协作平台支持上级医院实时指导和会诊，助力全国介入诊疗质量的同质化发展。

## 技术细节与临床应用

全域介入生态圈的技术架构基于云原生设计，包括：①边缘层——导管室设备数据采集和预处理，支持低延迟（<50ms）实时响应；②平台层——数据存储、融合和AI模型部署，支持多租户和扩展；③应用层——具体临床应用（如AI辅助诊断、结构化报告、远程协作）。关键技术：①多模态影像融合——基于DICOM标准的影像配准，支持刚性和非刚性配准；②AI模型部署——支持TensorFlow、PyTorch等主流框架，模型更新可在云端训练后推送至边缘；③远程协作——基于WebRTC的低延迟音视频和影像共享，支持5G网络下的实时指导；④结构化报告——基于IHE MRRT标准，自动提取影像数据和AI结果生成报告。临床应用场景：①复杂PCI——IVUS+FFR+造影多模态融合，AI辅助支架优化；②TACE——CBCT+影像组学辅助超选和疗效评估；③神经介入——3D路图+AI动脉瘤识别+远程会诊；④电生理——多模态标测+AI消融靶点识别。

## 研究进展与案例分析

西门子医疗的数字化介入平台已在欧洲和中国多家中心验证。德国某心脏中心使用syngo Carbon平台（全域介入生态圈核心）进行IVUS+FFR+造影多模态评估，复杂PCI手术时间缩短18%，MACE率降低22%。国内某三甲医院部署生态圈原型系统后，TACE结构化报告生成时间从平均25分钟缩短至8分钟，数据完整性提升35%。远程协作方面，2025年完成的"北京-乌鲁木齐"远程PCI指导（5G网络，延迟80ms）证实了远程协作的可行性。典型病例：一例48岁男性三支病变患者，全域介入生态圈整合CTA、IVUS、FFR多模态数据，AI辅助推荐"LAD+LCX分次PCI"方案，IVUS指导支架优化置入，术后FFR 0.89，3天出院。另一例肝癌患者，CBCT+影像组学AI实时评估TACE碘油沉积，自动识别3个未充分栓塞子灶并提示补充栓塞，术后1月MRI示完全缓解。

## 讨论与展望

全域介入生态圈面临的挑战：①设备互联的标准化——多厂商设备接口差异、数据格式不统一仍是难点，需行业共同努力（如IHE、HL7标准推广）；②数据安全与隐私保护——海量患者数据的集中存储和AI训练涉及隐私风险，需符合GDPR、《个人信息保护法》等法规；③AI认证的成本和周期——严格认证可能抑制开发者积极性，需平衡严谨性和效率；④商业模式——生态圈的盈利模式（订阅制、按使用付费、平台分成）仍在探索；⑤医生接受度——传统介入医师对AI和数字化工具的接受程度参差不齐，需培训和文化建设。未来方向：①大模型（如医学GPT）融入生态圈，支持自然语言交互和智能报告；②数字孪生技术模拟个体化治疗方案；③区块链辅助数据共享和AI训练溯源；④元宇宙介入教学和远程手术模拟。

## 总结

西门子医疗全域介入生态圈是介入医学数字化转型的重要里程碑，其开放、协同、智能的理念将深刻影响未来介入手术室的建设和运营模式。通过三大统一架构、开放式生态体系、严格AI认证和开发者联盟，生态圈有望解决长期存在的信息孤岛和AI碎片化问题，推动介入诊疗的标准化和同质化。随着5G、AI和大模型技术的进一步融合，全域介入生态圈将成为精准介入和智慧医疗的重要基础设施。`,publishDate:"2026-04-13",views:15680,category:"产品发布",sourceUrl:"https://www.siemens-healthineers.cn/cmef2026at",sourceName:"西门子医疗官网"},{id:"wxart-039",accountId:"wxa-007",accountName:"影领医介",title:"RSNA 2025：西门子Optiq AI与Artis genio等新一代介入平台解读",summary:"RSNA 2025上西门子展示了Optiq AI影像链技术及Artis genio、Artis icono等新一代介入成像平台，AI赋能低剂量高清成像。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20RSNA%202025%20Optiq%20AI%20Artis%20genio%20interventional%20imaging%20platform%20medical&image_size=landscape_4_3",content:`## RSNA 2025西门子介入技术亮点

## 文章背景

北美放射学会年会（RSNA）是全球医学影像领域最具影响力的学术盛会，每年吸引逾5万名专业观众。在2025年RSNA年会上，西门子医疗展示了介入放射学领域的多项创新技术，其中Optiq AI影像链技术和新一代Artis系列介入平台成为全场焦点。这些技术代表了介入影像领域AI赋能的最新成果，旨在解决长期困扰介入医学的核心矛盾——图像质量与辐射剂量的平衡、操作标准化与个体化的协调、设备智能与术者经验的融合。西门子医疗在介入影像领域深耕逾百年，从第一台血管造影机到Artis系列旗舰平台，始终引领技术发展。本次RSNA展示的Optiq AI和新一代Artis平台，标志着西门子从"硬件驱动"向"AI驱动"的战略转型，为未来5-10年介入影像发展奠定基调。

## 核心内容

### Optiq AI影像链技术原理

Optiq AI利用深度学习算法（基于卷积神经网络CNN和Transformer架构）实现实时去噪，支持透视、采集、DSA等多种介入模式。算法在数百万帧临床影像上训练，可识别噪声分布特征并自适应降噪——对均匀区域强力降噪，对血管边缘和细微结构保留细节。通过大数据分析自动优化曝光参数，在保持图像质量的前提下最大程度降低辐射剂量。Optiq AI可与现有Artis平台无缝集成，无需硬件升级。

### 新一代Artis genio旗舰平台

搭载Optiq AI影像链，全面升级硬件和软件架构。硬件方面：新一代平板探测器（像素尺寸119μm，分辨率3.25lp/mm）、更大功率高压发生器（125kW）、更灵活的机械臂（8轴+机器人辅助定位）；软件方面：AI辅助工作流（自动协议选择、智能路图、实时剂量监测）、多模态影像融合、云端协作。Artis genio定位高端临床型，支持复杂神经和心血管介入手术，单台价格约2000-2500万元。

### Artis icono系列多场景覆盖

icono.explore作为探索型平台，灵活配置适应多种临床场景，适合教学医院和研究中心；icono.vision和pheno.vision定位高端临床型，支持复杂神经和心血管介入手术。icono系列采用模块化设计，可根据临床需求升级配置，保护医院投资。pheno.vision特别强化了CBCT功能，软组织分辨率接近诊断CT，满足术中精确定位需求。

### 智能参数调节与工作流优化

系统基于海量临床数据训练，可根据患者体型、解剖部位和手术类型自动推荐最优拍摄参数（kV、mA、脉冲频率、采集帧率），减少手动调节时间。AI工作流引擎可学习术者习惯，自动调整界面布局和常用功能快捷键。术中实时剂量监测和预警系统帮助术者遵循ALARA原则。

### 低剂量高清成像的突破

Optiq AI打破了"图像质量与辐射剂量不可兼得"的传统认知，实现了在降低剂量30%-50%的同时保持甚至提升图像清晰度。对于儿童、孕妇和需要多次介入的患者，剂量降低意义重大。多中心研究显示，Optiq AI使患者平均剂量从约200mGy降至约120mGy，术者剂量降低约40%。

## 技术细节与临床应用

Optiq AI的核心技术优势在于其自适应性——算法能够实时分析每一帧影像的噪声分布特征，动态调整降噪强度，避免了传统固定参数降噪导致的边缘模糊问题。在神经介入中，这一技术尤为重要，因为颅内微导管（直径0.5-0.7mm）和微导丝（直径0.005-0.014英寸）的清晰显示对手术安全至关重要。临床应用场景：①神经介入——Optiq AI在低剂量下清晰显示微导管头端和弹簧圈解脱，特别适合长时间动脉瘤栓塞手术；②冠脉介入——低剂量高清成像支持复杂PCI的长时间操作，对术者健康保护意义重大；③外周介入——大视野成像结合AI降噪，可清晰显示下肢远端细小血管；④儿科介入——儿童对辐射敏感，Optiq AI的低剂量特性尤为重要。Artis genio的机器人辅助定位功能可实现毫米级精度定位，减少术者手动调整C臂的负担。多模态影像融合支持DSA+超声、DSA+IVUS、DSA+CBCT的实时融合显示，提供"解剖+功能"一体化信息。

## 研究进展与案例分析

西门子医疗在RSNA 2025公布的Optiq AI多中心研究（n=480）显示，与常规成像相比，Optiq AI组的图像质量评分（4.7 vs 4.3，5分制）显著更高，而患者剂量降低42%。神经介入亚组（n=180）显示，微导管可视性评分提升25%，术者辐射剂量降低38%。冠脉介入亚组（n=150）显示，支架标记点清晰度提升20%，复杂PCI手术时间缩短12%。德国某心脏中心使用Artis genio完成500例复杂PCI，术后评估显示手术成功率98.2%，并发症率1.8%，较前代平台（96.5%、3.2%）显著改善。典型病例：一例55岁女性右侧MCA分叉部宽颈动脉瘤（4.5mm），使用Artis genio+Optiq AI行支架辅助栓塞。术中总剂量1850mGy（常规平台约3200mGy），术者剂量0.8mSv（常规约1.5mSv）。3D-RA清晰显示瘤颈与载瘤动脉关系，6枚弹簧圈精准填塞，术后即刻造影完全栓塞，6个月随访无复发。另一例68岁男性三支病变患者，Optiq AI下行分次PCI，总手术时间4.5小时，累计剂量2800mGy（常规约5500mGy），术后未出现辐射相关皮肤损伤。

## 讨论与展望

西门子新一代介入平台仍面临的挑战：①设备成本——Artis genio单台价格2000-2500万元，对中小医院构成经济压力；②AI算法的持续学习——Optiq AI需要不断学习新数据以适应新型器械和术式，模型更新机制需优化；③与第三方设备的兼容性——多厂商设备融合仍是难点，需行业共同努力；④培训和学习曲线——AI辅助功能的充分利用需要术者培训；⑤监管审批——AI医疗器械的审批路径仍在完善中。未来方向：①大模型（如医学GPT）集成，支持自然语言交互和智能报告；②全自主介入机器人与Artis平台协同；③数字孪生技术模拟个体化手术方案；④5G远程介入与AI辅助结合，实现优质资源下沉；④元宇宙教学和虚拟手术训练。

## 总结

RSNA 2025展示的西门子介入技术充分体现了AI与医学影像深度融合的发展趋势。Optiq AI和新一代Artis平台通过深度学习降噪、智能参数调节和多模态融合，实现了"低剂量、高清晰、智能化"的介入成像新范式。这些技术为介入医师提供了更强大的影像工具，有助于提升手术精准度、降低辐射暴露，并推动介入诊疗的标准化和智能化。随着AI算法的持续迭代和与机器人、5G等技术的融合，未来介入手术室将朝着"智慧手术室"方向加速演进。`,publishDate:"2025-12-08",views:12340,category:"技术前沿",sourceUrl:"https://www.auntminnieeurope.com/imaging-informatics/artificial-intelligence/news/15773569/siemens-emphasizes-ai-interventional-technology-at-rsna-2025",sourceName:"AuntMinnieEurope"},{id:"wxart-040",accountId:"wxa-007",accountName:"影领医介",title:"西门子与Cook Medical合作：iMRI Suite开启无辐射介入新时代",summary:"西门子医疗与Cook Medical达成战略合作，共同打造Interventional MRI Suite，实现无电离辐射的精准介入治疗，开创介入医学新纪元。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interventional%20MRI%20iMRI%20suite%20siemens%20cook%20medical%20radiation%20free%20interventional%20medicine&image_size=landscape_4_3",content:`## 文章背景

介入放射学自20世纪50年代Seldinger穿刺技术问世以来，长期依赖X线透视作为影像引导手段。这一模式虽然成熟可靠，但电离辐射对医患双方的潜在危害始终是悬在介入医学头顶的"达摩克利斯之剑"。流行病学研究显示，一名介入医师30年职业生涯累积的辐射剂量可达数十至数百mSv，显著增加白内障、甲状腺疾病及血液系统肿瘤的风险；而对于需要反复接受介入治疗的患者（如肝癌多次TACE、儿童先天性心脏病多次造影），辐射累积同样不容忽视。

早在20世纪90年代，欧美学者便开始探索MRI引导介入的可行性，但受限于开放磁场设计、器械兼容性差、成像速度慢等瓶颈，临床应用一直局限于活检等简单操作。2025年9月，西门子医疗与Cook Medical在RSNA预备会上宣布建立战略合作，共同打造**Interventional MRI (iMRI) Suite**——全球首个集成式、无电离辐射的介入治疗解决方案。这一合作整合了西门子在低场强开放MRI领域的硬件积累与Cook Medical在介入器械研发的百年经验，标志着介入医学正式从"低剂量时代"迈向"无辐射时代"，被视为继平板探测器、机器人C臂之后介入影像学的又一次范式转移。

## 核心内容

### 平台架构与硬件组成

iMRI Suite以西门子**Magnetom Free.XL 0.55T**开放式介入MRI为核心，搭配Cook Medical专为MRI环境研发的兼容介入器械（含非磁性穿刺针、MR兼容导丝和消融电极），并集成**myNeedle Companion**导航软件。整套系统通过统一的接口实现影像采集、器械追踪与路径规划的实时联动，构建了真正意义上的"所见即所治"一体化介入平台。

### 技术创新突破

1. **无电离辐射成像**：彻底消除X线透视带来的辐射暴露，对患者和术者均实现零辐射累积，尤其适合儿童、孕妇及需多次治疗的患者。
2. **卓越软组织对比度**：MRI对软组织的分辨率远超CT和X线，可直接显示肿瘤边界、神经丛和血管壁结构，使介入操作真正实现"可视化精准"。
3. **实时温度监控**：利用MR温度成像（MR Thermometry）技术，可在热消融（射频、微波、HIFU）过程中实时监测组织温度分布和凝固性坏死边界，将消融范围控制精度提升至毫米级。
4. **多参数功能成像**：术中可同步获取DWI、灌注成像等功能信息，实时评估治疗效果，实现"治疗-评估"一体化。
5. **3D路径规划与实时导航**：myNeedle Companion软件支持术前3D路径规划、进针点智能标记和术中实时导航，将术前计划与术中引导无缝衔接。

### 临床应用领域

平台覆盖肿瘤介入（软组织肿瘤精准消融）、小儿介入（避免儿童辐射暴露）、结构性心脏病（精准引导瓣膜介入）和疼痛介入（脊柱精准治疗）等多个专科，应用场景广泛。

## 技术细节与临床应用

**磁场参数与器械兼容性**：Magnetom Free.XL采用0.55T低场强设计，在保证软组织对比度的同时显著降低磁场对器械的吸引力，使MR兼容器械的开发难度和成本大幅下降。其80cm大孔径和开放式磁体结构为术者提供了充足的术中操作空间，并支持术者站立位完成复杂操作。梯度系统性能达80mT/m和200T/m/s，可支持高质量实时成像序列。

**实时成像性能**：系统采用并行采集与压缩感知技术，将术中实时成像帧率提升至每秒4-6帧，满足介入操作的实时性要求。对于动态增强扫描，可实现亚秒级时间分辨率，清晰捕捉组织灌注变化。

**温度成像精度**：MR温度成像采用质子共振频率偏移（PRF）法，温度分辨率达±1°C，空间分辨率2mm，可在消融过程中实时绘制等温线图，准确预测组织坏死范围。临床数据显示，相较传统CT引导消融，MR引导可将消融边界误差从5-8mm降低至2mm以内。

**典型操作流程**：术前完成多参数MRI扫描与3D路径规划→术中患者置入iMRI Suite→实时成像引导穿刺针/消融针到位→温度成像实时监控消融过程→术后即时DWI/灌注成像评估疗效，全程无辐射。

## 研究进展与案例分析

多中心研究数据显示，MR引导肝肿瘤消融的局部复发率较CT引导降低约35%（12% vs 19%），主要得益于对肿瘤边界的精准识别和消融范围的实时监控。在儿童血管畸形栓塞领域，欧洲3家儿童医院联合开展的研究证实，iMRI引导可使患儿累积辐射剂量从平均23mSv降至0mSv，且手术并发症发生率降低18%。

在软组织肿瘤精准活检方面，德国某中心报道了120例深部软组织肿瘤MR引导活检的案例，诊断准确率达96.7%，明显高于CT引导组的88.3%。典型病例显示，对于紧邻大血管和神经丛的腹膜后肿瘤，MR引导可清晰区分肿瘤与周围结构，穿刺命中率达100%，无严重并发症发生。结构性心脏病领域，MR引导经导管三尖瓣置换的动物实验也已取得突破，瓣膜定位精度较X线引导提升40%。

## 讨论与展望

iMRI Suite当前仍面临若干挑战：首先是设备成本较高，单套系统价格约为传统DSA的2-3倍，限制了基层医疗机构的普及；其次，MR兼容介入器械种类仍较有限，部分复杂介入操作（如冠脉介入）尚无法完全实现MR引导；再者，实时成像帧率虽已大幅提升，但对于快速运动器官（如心脏）的实时引导仍需进一步优化。

未来发展方向包括：开发更高场强（1.0T-1.5T）的开放式介入MRI以进一步提升图像质量；扩展MR兼容器械谱系，覆盖更多介入术式；融合AI算法实现自动路径规划和风险预警；探索MR-PET双模态引导实现解剖-功能-代谢多维信息融合。随着技术成熟和成本下降，无辐射介入有望在10年内成为儿童介入、肿瘤消融和疼痛治疗的金标准。

## 总结

西门子与Cook Medical的战略合作开启了无辐射介入治疗的新纪元，iMRI Suite通过0.55T开放MRI、MR兼容器械和myNeedle Companion导航软件的有机整合，实现了真正意义上的无辐射精准介入。其在肿瘤消融、儿童介入和疼痛治疗等领域的初步临床应用已展现出显著优势，局部复发率降低35%、辐射剂量归零等数据令人瞩目。尽管设备成本和器械兼容性仍是推广瓶颈，但这一平台无疑为介入医学的可持续发展指明了新方向，将深刻改变肿瘤、心血管和儿科介入的诊疗模式。`,publishDate:"2025-09-13",views:9876,category:"技术前沿",sourceUrl:"https://www.siemens-healthineers.com/press/releases/imri-partnership",sourceName:"Siemens Healthineers官网"},{id:"wxart-041",accountId:"wxa-008",accountName:"飞利浦医疗科技",title:"飞利浦Azurion ClarityIQ血管造影系统亮相2025春季CMEF",summary:"全新一代Azurion ClarityIQ血管造影系统中国首发，依托前沿高清影像技术，500+系统参数定制，实现高清影像与低剂量的双重突破。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Azurion%20ClarityIQ%20angiography%20system%20CMEF%202025%20high%20definition%20imaging%20medical%20equipment&image_size=landscape_4_3",content:`## 文章背景

血管造影系统的发展经历了从影像增强器到平板探测器、从单平板到双平板、从独立操作到集成控制平台的多次飞跃。飞利浦于2017年推出第一代Azurion平台，开创了"介入手术协同控制"的全新理念，将影像、信息、操控和工作流整合于统一平台，迅速成为全球介入手术室的主流配置之一。截至2024年底，Azurion平台已覆盖全球80余个国家和地区，年均服务超过640万名患者。

随着介入手术复杂度的不断提升，临床对图像清晰度、低剂量水平和个性化定制的需求日益迫切。2025年4月，在第93届CMEF（中国国际医疗器械博览会）上，飞利浦携全新一代**Azurion ClarityIQ血管造影系统**正式在中国首发。作为Azurion平台的重大升级版本，ClarityIQ在图像质量、低剂量技术和智能化操作方面实现了全面突破，被誉为"高清与低剂量的双重革命"。飞利浦大中华区精准诊断及影像引导治疗事业群负责人刘炜烨表示："Azurion ClarityIQ的推出，让介入手术效率及质量获得大幅提升。"

## 核心内容

### EPX数据库定制化成像

系统内置包含超过**500个参数**的大型EPX数据库，针对心血管、神经、外周等不同临床领域定制高清成像参数模型，还可根据医生个人习惯定制图像风格。例如，神经介入医师偏好高对比度血管显影，而心血管介入医师则更看重支架细节显示，系统均可一键切换。这种"千人千面"的个性化成像彻底改变了传统DSA"一刀切"的成像模式。

### 智能图像处理技术

1. **运动伪影校正**：自动实时纠正患者或设备的微小移动，对于TACE术中因患者呼吸导致的肝脏运动尤为重要，可显著减少运动伪影对超选择插管的影响。
2. **智能降噪与边缘增强**：基于深度学习的降噪算法在保留血管边缘细节的同时抑制背景噪声，提供更清晰、更稳定的视野，尤其在长时透视的复杂手术中优势明显。
3. **实时图像优化**：系统根据手术类型自动调整图像处理参数，无需术者手动调节。

### 低剂量技术突破

延续并升级Onco Blue剂量降低技术，在心脏、神经和外周介入等领域均实现辐射剂量的显著降低。临床验证数据显示，相较前代系统，ClarityIQ在保持图像质量的前提下可将辐射剂量降低**40%-60%**，对于需要反复TACE的肝癌患者具有特殊的辐射防护价值。

### 广泛适用性

覆盖心血管介入、神经介入、冠脉介入和外周介入等全领域，满足不同专科的精准诊疗需求。系统支持多种复杂术式，包括急诊PCI、颅内动脉瘤栓塞、TACE和下肢动脉成形等。

## 技术细节与临床应用

**EPX数据库工作机制**：EPX数据库不仅存储了500余个成像参数，更整合了全球数千台Azurion设备的临床反馈数据。当术者选择特定手术类型（如"颅内动脉瘤栓塞"）时，系统自动调用最优参数组合：管电压70kV、铜滤过0.6mm、脉冲频率7.5fps、探测器剂量档位2，并配合ClarityIQ专用降噪算法。这一"智能预设"模式可将术中参数调整次数减少约70%，显著缩短手术时间。

**ClarityIQ核心算法**：采用多尺度自适应降噪架构，根据图像不同区域的信噪比特征动态调整滤波强度。在血管密集区域采用轻度滤波以保留细节，在背景软组织区域采用强滤波以抑制噪声。临床测试显示，该算法可将图像信噪比提升约35%，同时保持血管边缘锐利度。

**剂量优化参数**：

1. **心脏介入**：常规冠脉造影剂量较前代降低约45%，PCI手术降低约38%。
2. **神经介入**：脑血管造影剂量降低约52%，动脉瘤栓塞降低约40%。
3. **外周介入**：下肢动脉造影剂量降低约48%。

**操作流程优化**：Azurion FlexApp统一控制界面集成了影像采集、设备控制、信息管理和远程协同功能，术者可在无菌区通过触控屏完成80%以上的常用操作，减少手术中断次数。

## 研究进展与案例分析

飞利浦联合欧洲6家中心开展的PROTECT-Clarity多中心研究纳入1200例介入手术病例，结果显示ClarityIQ系统在图像质量评分（4.6 vs 4.2分，5分制）和辐射剂量（平均降低47%）方面均显著优于前代系统。在亚组分析中，复杂TACE手术的造影剂用量减少约25%，手术时间缩短约12%。

典型案例方面，北京某三甲医院介入科报道了一例巨大肝细胞癌（直径8.5cm）的多次TACE治疗案例：患者接受6次TACE治疗，使用ClarityIQ系统后，累积辐射剂量较前次治疗降低52%，未出现辐射相关皮肤损伤，图像质量满足超选择插管需求。另一例复杂颅内动脉瘤栓塞案例中，ClarityIQ的高清血管显影使术者清晰识别瘤颈与载瘤动脉的关系，栓塞致密程度评分达95%（Raymond I级），术后造影未见残余血流。

## 讨论与展望

Azurion ClarityIQ的核心创新在于将大数据分析与实时影像处理相结合，但当前仍面临若干挑战：首先，500+参数数据库的优化依赖大量临床数据积累，对于新兴术式（如经导管二尖瓣钳夹）的参数预设仍需完善；其次，AI降噪算法在极高剂量降低（>70%）时可能出现微小血管显示不足的情况，需在剂量与质量间权衡。

未来发展方向包括：扩展EPX数据库至1000+参数，覆盖更多专科术式；引入术中实时AI辅助诊断（如自动识别狭窄程度、斑块性质）；探索5G远程介入协作模式，使基层医院也能享受顶级影像质量。随着中国介入医学向精准化、智能化发展，ClarityIQ的个性化成像理念有望成为行业新标准。

## 总结

飞利浦Azurion ClarityIQ代表了介入血管造影系统的最新技术水平，其500+参数EPX数据库、智能图像处理和Onco Blue低剂量技术的有机整合，实现了高清影像与低剂量的双重突破。PROTECT-Clarity多中心研究证实辐射剂量平均降低47%、图像质量评分提升0.4分，临床价值显著。其智能化、个性化和低剂量的设计理念将推动中国介入诊疗质量的进一步提升，特别对需要反复治疗的肿瘤和心血管患者具有突出的辐射防护意义。`,publishDate:"2025-04-09",views:18765,category:"产品发布",sourceUrl:"https://www.philips.com.cn/a-w/about/news/archive/standard/about/news/press/2025/20250409-philips-azurion-clarityiq-debuts-at-cmef.html",sourceName:"飞利浦中国官网"},{id:"wxart-042",accountId:"wxa-008",accountName:"飞利浦医疗科技",title:"飞利浦影像引导治疗系统在华装机突破6000台，助力泛血管诊疗",summary:"飞利浦影像引导治疗系统在华装机量正式突破6000台，平均每两间介入手术室即有一间配备飞利浦设备，覆盖全国各级医疗机构。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20image%20guided%20therapy%206000%20installations%20China%20pan-vascular%20interventional%20therapy%20Azurion&image_size=landscape_4_3",content:`## 文章背景

飞利浦医疗与中国介入医学的渊源可追溯至20世纪80年代。1985年，北京阜外医院引进中国大陆首台飞利浦心血管造影机，开启了我国现代介入放射学的新篇章。此后40年间，从早期的单平板DSA到Allura系列、再到Azurion智能介入平台，飞利浦见证并参与了中国介入医学从起步、发展到腾飞的全过程。每一代产品的引进都伴随着中国介入医师技术水平的跨越式提升。

2026年6月，飞利浦宣布其影像引导治疗系统在华装机量正式突破**6000台**，成为深耕中国市场的重要里程碑。这一数字不仅体现了飞利浦在中国介入市场的领导地位，更折射出我国介入医学近年来在国家政策推动下的蓬勃发展态势。根据《健康中国2030规划纲要》和"千县工程"的要求，全国县医院介入中心建设进入快车道，DSA等高端介入设备需求持续旺盛。飞利浦凭借技术领先性和本土化服务优势，在这一轮设备升级浪潮中获得了显著的市场份额增长。

## 核心内容

### 广泛市场覆盖

飞利浦影像引导治疗系统已覆盖全国各级医疗机构，从国家顶级三甲医院到县级医院，平均每两间介入手术室即有一间配备飞利浦设备。Azurion平台自2017年上市以来，已覆盖全球80余个国家和地区，年均服务超640万名患者。在中国，飞利浦设备广泛分布于心血管介入、神经介入、肿瘤介入和外周血管介入四大领域。

### 多技术融合平台优势

1. **SmartCT智能锥束CT**：术中即时获取类CT软组织影像，辅助TACE术中碘油沉积评估和穿刺路径规划。
2. **EchoNavigator超声融合导航**：实现超声与X线实时融合，用于结构性心脏病介入的精准导航。
3. **VesselNavigator血管导航**：基于CT/MR血管成像的三维路径规划，指导复杂血管介入。
4. **DoseWise智慧剂量管理**：全流程辐射剂量监控和管理，最高可降低83%的辐射剂量。
5. **3D Roadmap三维路图**：将三维血管影像与实时透视融合，提供立体导航。

### 剂量与造影剂优化

基于6000余台设备的真实临床反馈数据，飞利浦持续优化低剂量技术，在心脏、神经和外周介入等领域实现辐射剂量降低**40%-83%**，同时减少造影剂用量，减轻患者肾脏负担和造影剂相关肾病风险。

### 泛血管诊疗理念

影像引导技术正从单一手术支持工具向多学科融合的核心平台演进，覆盖诊断、治疗与随访全链路的泛血管介入诊疗能力建设，推动心脑血管同治、动脉静脉同治的整合医学模式。

### 持续本土化创新

飞利浦持续深化与本土医疗机构的协同合作，根据中国临床需求定制解决方案，包括肝癌TACE专用成像方案、脑卒中救治一站式流程等，助力中国介入医学的高质量发展。

## 技术细节与临床应用

**装机分布与覆盖层级**：6000台设备中，约35%部署于三级甲等医院，40%部署于三级乙等和二级甲等医院，25%部署于县级及基层医院。从地域分布看，东部沿海地区约占55%，中西部地区约45%，与我国医疗资源分布和介入诊疗发展水平基本吻合。

**核心技术参数**：Azurion平台平板探测器尺寸30cm×38cm（心脏版）或42cm×42cm（全能版），空间分辨率达3.25 lp/mm；球管热容量最高达80MHu；最大脉冲频率30fps；支持7.5/15/30fps多档透视速率，满足不同术式的实时性要求。

**典型应用场景**：

1. **急诊PCI**：DoseWise智能剂量管理将术者辐射剂量降低60%以上，配合ClarityIQ高清成像，使急诊PCI的平均辐射剂量控制在200mGy以内。
2. **复杂TACE**：SmartCT锥束CT术中即时评估碘油沉积，使完全栓塞率提升至85%以上。
3. **脑卒中取栓**：一站式流程将DPT（穿刺至血管再通时间）从平均90分钟缩短至45分钟。

**临床数据反馈机制**：飞利浦建立了基于6000台设备的临床数据反馈网络，每月收集超过50万例手术数据，用于算法优化和新功能开发，形成了"装机-反馈-迭代"的良性循环。

## 研究进展与案例分析

2024年飞利浦联合中国医师协会介入医师分会发布的《中国介入诊疗设备使用白皮书》显示，飞利浦设备在中国TACE手术中的市场份额达42%，在神经介入领域达38%。多中心研究数据表明，使用SmartCT辅助的TACE手术，患者1年无进展生存率较传统TACE提升12%（68% vs 56%）。

典型案例：上海某三甲医院介入科使用Azurion平台完成一例复杂布加综合征介入治疗，通过VesselNavigator三维路径规划成功疏通下腔静脉长段闭塞，手术时间较传统方式缩短40%，辐射剂量降低55%。另一典型案例中，西部某县级医院在飞利浦远程协作支持下，成功完成该院首例颅内动脉瘤栓塞，标志着优质介入资源向基层的有效延伸。

从行业格局看，飞利浦、GE、西门子和联影四大厂商合计占据中国DSA市场约85%份额，飞利浦凭借6000台装机量保持领先地位。

## 讨论与展望

尽管飞利浦在华装机突破6000台，但中国介入医学发展仍面临若干挑战：首先是基层医疗机构介入人才短缺，每县至少需2名介入执业医师，而当前缺口仍达40%；其次，设备使用效率不均衡，部分基层医院DSA日均手术量不足2台，存在资源闲置；再者，国产设备崛起带来的竞争压力日益增大。

未来发展方向包括：深化AI赋能的智能介入，实现术前自动规划和术中实时辅助；推进5G远程介入协作，使顶级专家能远程指导基层手术；探索"设备+服务+培训"一体化商业模式，降低基层使用门槛。飞利浦大中华区表示，未来三年将再投入10亿元用于本土研发和服务网络建设，目标在华装机量突破8000台。

## 总结

飞利浦在华装机突破6000台是企业发展的重要里程碑，也是中国介入医学快速发展的缩影。从1985年首台设备引进到如今6000台装机，飞利浦40年深耕中国市场的历程，见证了中国介入医学从无到有、从弱到强的全过程。其多技术融合平台、低剂量优化和本土化创新策略，为提升全国介入诊疗的同质化水平作出了重要贡献。未来，在智能化、精准化和低剂量的发展趋势下，飞利浦影像引导治疗技术将为更多中国患者带来获益，推动"大病不出县"目标的实现。`,publishDate:"2026-06-01",views:21560,category:"行业动态",sourceUrl:"http://news.qq.com/rain/a/20260601A09FWA00",sourceName:"腾讯财经"},{id:"wxart-043",accountId:"wxa-008",accountName:"飞利浦医疗科技",title:"飞利浦结构心介入方案：EPIQ CVxi + EchoNavigator 精准导航新时代",summary:"飞利浦EPIQ CVxi Transcend心血管AI介入诊疗一体超声系统，搭载EchoNavigator融合导航，AI定量+三维成像+融合导航，实现毫米级精准。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20EPIQ%20CVxi%20structural%20heart%20intervention%20EchoNavigator%203D%20ICE%20AI%20navigation%20cardiac&image_size=landscape_4_3",content:`## 文章背景

结构性心脏病介入治疗是过去十年心血管领域发展最快的亚专科之一。自2014年MitraClip获得FDA批准以来，经导管瓣膜介入已从二尖瓣扩展到三尖瓣、肺动脉瓣等多个部位。然而，三尖瓣介入治疗因解剖结构特殊、病变异质性高、右心系统显影困难，一直是结构性心脏病介入领域的"最后堡垒"。传统二维超声和X线透视难以清晰显示三尖瓣的空间解剖关系，导致器械定位困难、手术成功率受限。

经导管三尖瓣缘对缘修复（TEER）和置换术对影像引导提出了极高要求：需要实时、立体地显示瓣叶、腱索、瓣环和血流的关系，并精准引导夹合器或人工瓣膜的定位与释放。飞利浦最新结构心介入方案通过**AI定量+三维成像+融合导航**的技术组合，让复杂结构心介入治疗实现毫米级精准。该方案整合了EPIQ CVxi Transcend心血管超声系统、VeriSight Pro实时三维心腔内超声导管（3D ICE）和EchoNavigator融合导航系统，为经导管三尖瓣治疗提供了强大的影像导航支持，被视为推动三尖瓣介入普及的关键技术平台。

## 核心内容

### EPIQ CVxi Transcend硬件架构

采用心血管专属定制的3U双擎核心架构，搭载高性能GPU和专用AI加速芯片，适用于高负荷手术场景，可稳定输出高清成像与强劲算力，高效完成心血管核心指标的量化分析。系统支持多达8个并行影像输入，可同时显示超声、X线、CT和MR多模态影像。

### Mini纯净波矩阵探头X11-4t

小尺寸"药片型"头端设计（仅11mm宽），适配全生命周期患者诊疗，从新生儿到成人均可获得优异的图像质量。该探头支持经胸和经食管双重成像模式，纯净波晶体技术提供宽频带和极高灵敏度，使瓣膜和心腔结构显示更清晰。

### TrueVue Plus心腔镜成像

立体清晰展现心腔、瓣膜与血流细节，提供"虚拟心腔镜"视角，帮助术者直观理解三尖瓣解剖结构和病变特点。术者可任意角度旋转和切割三维图像，从最佳视角观察瓣叶对合情况和夹合器位置。

### AITT人工智能定量技术

全自动完成心腔、瓣膜、血流等多维度量化评估，包括三尖瓣反流程度、反流口面积、瓣叶长度和抓捕区域测量，大幅优化诊断流程，减少人工测量误差。研究显示AITT的测量重复性较人工测量提升约45%。

### EchoNavigator融合导航系统

实现超声与X线实时融合，AI自动配准动态对齐，10秒完成心脏9大结构建模，触屏直控一体化操作。精准导航显著降低透视时间和辐射剂量，临床数据显示平均透视时间缩短约30%，辐射剂量降低约35%。

## 技术细节与临床应用

**VeriSight Pro 3D ICE导管参数**：采用xMATRIX 840阵元技术（28×30矩阵阵列），提供**90×90°的实时3D视野**，配合Live xPlane实时双平面功能和360°四向主动弯控，可在术中实时监测三尖瓣夹合器的定位和释放过程。导管外径仅10F，兼容标准鞘管，降低了血管入路并发症风险。

**EchoNavigator融合配准精度**：采用基于解剖标志的AI自动配准算法，配准误差<2mm，可在呼吸和心脏运动下保持稳定对齐。系统支持手动微调，术者可通过触屏一键调整融合关系。

**典型TEER手术流程**：

1. 术前CT评估三尖瓣解剖，规划夹合器植入位置。
2. 3D ICE导管经颈静脉入路置于右心房，实时显示三尖瓣三维结构。
3. EchoNavigator将3D ICE图像与X线透视融合，引导夹合器导管精准到达靶区。
4. AITT实时量化反流程度和瓣叶抓捕情况，指导夹合器闭合和释放。
5. 术后即刻评估反流改善程度和并发症。

**3D ICE替代TEE的价值**：3D ICE的应用减少了经食管超声（TEE）的需求，使手术可在单纯局部麻醉下完成，避免了全身麻醉和食管插管的并发症，特别适用于高龄、危重和食管疾病患者。

## 研究进展与案例分析

TRILUMINATE研究亚组分析显示，使用3D ICE引导的三尖瓣TEER手术，器械成功率可达95%，术后30天三尖瓣反流降至中度以下的比例达88%。相较传统2D TEE引导，3D ICE引导的手术时间缩短约25分钟，辐射剂量降低约30%。

欧洲多中心BRIGHT研究纳入150例三尖瓣TEER患者，使用飞利浦结构心介入方案后，手术成功率从早期的78%提升至后期的93%，学习曲线明显缩短。典型案例：一位72岁女性重度三尖瓣反流患者，心功能NYHA IV级，传统评估为外科手术高风险。在3D ICE和EchoNavigator融合导航引导下，成功植入2枚三尖瓣夹合器，手术时间65分钟，透视时间18分钟，术后三尖瓣反流降至轻度，患者术后1周心功能恢复至NYHA II级。

中国首家开展3D ICE引导三尖瓣TEER的中心数据显示，使用飞利浦方案后，复杂三尖瓣病变的器械成功率从65%提升至89%，平均手术时间从120分钟缩短至75分钟。

## 讨论与展望

飞利浦结构心介入方案当前仍面临若干挑战：首先是3D ICE导管成本较高（约2-3万元/根），增加了手术费用；其次，3D ICE的视野虽大但仍小于TEE，对左心系统结构显示有限；再者，EchoNavigator融合配准在严重钙化或既往瓣膜置换患者中可能出现偏差。

未来发展方向包括：开发更小外径（8F）和更高分辨率（1000阵元以上）的3D ICE导管；引入AI自动识别瓣叶抓捕状态和并发症预警功能；探索3D ICE引导下的左心耳封堵和二尖瓣介入；融合4D血流成像实现血流动力学实时评估。随着三尖瓣介入器械的迭代和影像技术的成熟，预计到2028年中国三尖瓣TEER年手术量将突破5000例。

## 总结

飞利浦结构心介入方案通过EPIQ CVxi Transcend超声系统、VeriSight Pro 3D ICE导管和EchoNavigator融合导航的有机整合，实现了三尖瓣介入的毫米级精准引导。3D ICE的90×90°实时3D视野和AI自动配准<2mm的融合精度，使手术可在局麻下完成，器械成功率提升至95%以上，手术时间缩短约25分钟。该方案解决了三尖瓣介入中解剖显示不清、器械定位困难的核心痛点，将显著推动经导管三尖瓣治疗技术的普及和标准化，为复杂心脏介入手术提供了重要的辅助工具。`,publishDate:"2026-06-02",views:14320,category:"技术前沿",sourceUrl:"https://www.drvoice.cn/article/23613",sourceName:"DrVoice医生之声"},{id:"wxart-044",accountId:"wxa-009",accountName:"联影医疗",title:'联影发布介入诊疗十大创新技术，"零噪声"DSA引领全球',summary:'联影医疗发布"零噪声"高清低剂量成像、全景3D、集成式实时FFR/QCA等十大全球首创介入技术，国产DSA实现从跟跑到领跑。',coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20zero%20noise%20DSA%20ten%20innovations%20interventional%20technology%20chinese%20medical&image_size=landscape_4_3",content:`## 文章背景

中国介入设备的发展经历了三个阶段：第一阶段（2000-2010年）以进口设备主导，国产厂商主要承担维修和配件服务；第二阶段（2010-2020年）国产DSA开始产业化，但在高端市场仍处于跟跑地位；第三阶段（2020年至今）以联影、东软、迈瑞为代表的国产厂商在核心技术上实现突破，逐步进入领跑阶段。这一转变背后是国家"高端医疗装备自主可控"战略的持续投入和中国医师临床经验的快速积累。

2025年10月，由国家放射与治疗临床医学研究中心主办的"零噪声"DSA十大创新技术交流会上，联影医疗正式发布**十大全球首创介入诊疗技术**。这次发布标志着国产介入设备已从跟跑迈向领跑，在多个关键技术领域实现了自主可控和创新突破。值得一提的是，这十大技术并非单点突破，而是覆盖了介入影像链、智能辅助、精准诊疗和手术室生态四个维度的系统性创新，体现了联影在介入领域全栈式研发能力的成熟。中国科学院院士、复旦大学附属中山医院葛均波教授在会上表示："国产介入设备的崛起，让中国医师真正拥有了'用得起、用得好'的高端装备。"

## 核心内容

### "零噪声"高清低剂量成像

通过硬件升级增强原始信号质量，结合高算力硬件支持的独家降噪算法，实现噪声智能识别与抑制。图像信噪比（SNR）提升**40%以上**，辐射剂量降低**80%**，首次实现CC0级侧支血管可视化，为低剂量高清晰介入成像树立了新标杆。

### 全景3D成像

更大覆盖范围的三维成像技术，可一次性完成全肝或全脑的三维重建，覆盖范围较传统锥束CT扩大3倍，减少多次旋转采集带来的时间和剂量消耗，单次旋转即可获得40cm×40cm×25cm的三维容积。

### 集成式实时FFR和实时QCA

一脚造影即可在**10秒内**同时完成结构学（QCA）和功能学（FFR）诊断，内置AI流体力学分析引擎，无需额外压力导丝。相较传统FFR测量，可节省约1.5万元/例的耗材成本，且无需腺苷负荷。

### 锥束CT定量灌注

在脑卒中救治中，将影像评估时间从106分钟缩短至**15分钟**，为急性缺血性卒中的快速诊疗提供了关键技术支撑。一次CBCT采集即可同步获得CTP灌注参数图，实现"一站式"卒中评估。

### AI冠脉增强与腹部动态路图

利用深度学习算法实时增强血管显影，减少约30%的造影剂用量；动态路图技术可实时追踪腹部脏器运动，辅助精准穿刺，使肝脏小结节穿刺命中率提升至95%。

### uLingo智慧仿生语音系统与uSpace数字孪生空间

语音控制解放术者双手，识别准确率达98%；数字孪生技术实现手术室的虚拟仿真和远程协同，支持术前的虚拟手术演练和术中的远程专家指导。

### AI赋能的全流程智慧管理

从术前规划、术中引导到术后随访，AI贯穿介入诊疗全流程，提升效率和质量，术后结构化报告自动生成，节省医师约40%的报告时间。

## 技术细节与临床应用

**"零噪声"技术原理**：传统DSA在低剂量成像时面临量子噪声激增的物理瓶颈。联影采用"硬件增强+算法降噪"双路径：硬件端采用高量子探测效率（DQE>80%）的碘化铯平板探测器和低噪声前端放大器；算法端采用基于深度学习的多尺度降噪网络，可在保留血管细节的同时抑制背景噪声。临床测试显示，在等效剂量降低80%的条件下，图像信噪比仍提升40%以上。

**实时FFR/QCA技术参数**：基于Navier-Stokes方程的CFD求解器，结合AI加速可将单次FFR计算时间从传统离线分析的数小时压缩至10秒。验证研究显示，与压力导丝FFR对比，相关系数r=0.92，平均偏差0.02±0.06，达到临床诊断一致性要求。

**锥束CT定量灌注参数**：采用稀疏重建算法，将传统CTP所需的多次旋转采集简化为2次旋转，扫描时间<60秒。可生成CBF、CBV、MTT、Tmax四参数灌注图，与金标准灌注CT的相关系数>0.85。

**典型应用场景**：

1. **肝癌TACE**：全景3D成像+AI冠脉增强技术使超选择插管成功率提升至96%。
2. **急性脑卒中**：锥束CT定量灌注将DPT从90分钟缩短至35分钟。
3. **冠脉功能学评估**：实时FFR使功能性狭窄评估普及化，无需额外耗材。

## 研究进展与案例分析

由复旦大学附属中山医院牵头、全国12家三甲医院参与的多中心研究显示，联影"零噪声"DSA在肝癌TACE手术中，CC0级侧支血管显示率达100%（进口设备对照组为72%），平均辐射剂量降低82%，造影剂用量减少28%。在冠脉介入领域，实时FFR与压力导丝的对比研究纳入320例患者，诊断一致性达94%，平均节省手术时间8分钟，单例节省耗材成本1.5万元。

典型案例：上海某三甲医院使用联影uAngio系统完成一例复杂肝门部胆管癌TACE，传统DSA难以显示的CC0级侧支供血动脉在"零噪声"成像下清晰可见，成功栓塞3支侧支血管，术后1个月MRI显示肿瘤坏死率达95%。另一例急性脑卒中案例中，从患者入室到灌注评估完成仅12分钟，迅速明确缺血半暗带，指导取栓决策，患者术后90天mRS评分1分（良好预后）。

从行业格局看，联影DSA在2025年中国市场新增订单中份额达22%，首次超越部分进口品牌，位居国产第一。

## 讨论与展望

联影十大创新技术当前仍面临若干挑战：首先是"零噪声"等AI算法的训练依赖大量高质量标注数据，对于罕见病变的泛化能力有待验证；其次，实时FFR在严重钙化、分叉病变等复杂解剖中的准确性仍需更多临床验证；再者，国产设备在海外市场的品牌认知度和售后服务网络仍需时间建立。

未来发展方向包括：扩展"零噪声"技术至移动C臂和血管内超声等更多设备形态；开发基于多模态融合的术中实时决策支持系统；推动5G远程介入协作的规模化应用，使优质介入资源下沉至县域医院；探索数字孪生技术在术式培训和手术规划中的深度应用。预计到2027年，联影DSA在中国市场份额将突破30%，并进入欧美主流市场。

## 总结

联影十大介入创新技术的发布是国产高端医疗装备发展的重要里程碑，标志着国产DSA从跟跑迈向领跑。十大技术覆盖影像链、智能辅助、精准诊疗和手术室生态四个维度，其中"零噪声"成像实现信噪比提升40%、剂量降低80%，实时FFR/QCA将功能学评估集成于DSA平台，锥束CT定量灌注将卒中评估时间从106分钟缩短至15分钟。这些突破不仅打破了进口垄断、降低了医疗成本，更针对肝癌TACE、脑卒中等中国高发疾病进行了深度定制，具有显著的本土应用价值。AI赋能下的国产DSA已在图像质量、剂量控制和智能操作等方面达到国际领先水平。`,publishDate:"2025-10-20",views:25680,category:"产品发布",sourceUrl:"https://finance.sina.com.cn/stock/relnews/cn/2025-10-20/doc-infuqftf5040169.shtml",sourceName:"上海证券报"},{id:"wxart-045",accountId:"wxa-009",accountName:"联影医疗",title:"uAngio 960智慧仿生微创介入手术系统正式投入临床使用",summary:'首款融合AI技术、机器人、数字孪生、多模态融合的智慧仿生微创介入手术系统，搭载"零噪声"技术、十轴机械臂机架、十大临床解决方案。',coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20960%20smart%20bionic%20minimally%20invasive%20surgery%20system%20DSA%20AI%20robotics&image_size=landscape_4_3",content:`## 文章背景

介入手术室的发展经历了从"单机作业"到"集成平台"、从"人工操作"到"智能辅助"的演进过程。传统DSA系统主要承担影像采集功能，手术规划、操作导航和术后评估高度依赖术者经验，存在学习曲线长、操作差异大、辐射暴露重等痛点。随着AI、机器人、数字孪生等技术的成熟，介入手术室正迈向"智慧化、仿生化、一体化"的新阶段，业界将这一代系统称为"智慧仿生微创介入手术系统"。

2025年11月，联影医疗推出的**智慧仿生微创介入手术系统uAngio 960**正式入驻多家医院介入中心并投入使用。这是首款融合AI技术、机器人、数字孪生和多模态融合等创新技术驱动的智慧仿生微创介入手术系统，标志着国产DSA进入智慧介入新时代。上海市公共卫生临床中心、复旦大学附属中山医院等多家顶级医院成为首批装机单位。uAngio 960不仅是一台DSA，更是一个集成影像、导航、决策和协同的智慧手术平台，代表了国产高端医疗装备从"单项技术突破"到"系统集成创新"的跨越。中国工程院院士、北京协和医院赵玉沛教授评价："uAngio 960的问世，让中国介入医学真正进入了'智能时代'。"

## 核心内容

### "零噪声"纯净影像技术

通过硬件升级增强原始信号质量，结合高算力硬件支持的独家算法，实现噪声智能识别与抑制。图像信噪比（SNR）大幅提升，几乎无肉眼可见噪声，首次实现CC0级侧支血管可视化，辐射剂量降低**80%**。这一技术使低剂量下的高清成像成为常态，特别适合儿童和需多次治疗的患者。

### 十轴机械臂机架

采用第十轴大开口机械臂结构，拥有全球最大**100.5厘米C臂开口**，提供更广阔的操作空间。心脏介入特殊投照体位（如深部蜘蛛位、蟹爪位）不受限制，大尺寸平板支持深部蜘蛛位成像，C臂旋转至90度时床旁仍可容纳两位术者并行操作。第十轴可实现C臂的侧向滑移，扩展了投照角度范围。

### 全面临床高级应用

十大临床解决方案覆盖心血管、神经、肿瘤、外周和复合手术室五大介入术式，包括：

1. 支架精细显影（清晰显示支架贴壁和边支开口）
2. 冠脉血管增强（AI实时增强血管显影）
3. CBCT锥束CT（术中即时软组织成像）
4. 多容积融合（CT/MR与DSA融合）
5. 多模态融合（多种影像模态协同导航）

实现术前规划、术中引导、术后评估全流程覆盖。

### AI全流程赋能

从术前智能手术规划、术中实时影像增强和导航，到术后结构化报告和随访提醒，AI技术贯穿介入诊疗全流程。术前AI可基于CT/MR自动分割血管和病灶，生成3D路径规划；术中AI实时增强影像并预警风险；术后AI自动生成结构化报告并设置随访提醒。

### 数字孪生与远程协同

uSpace数字孪生空间可构建手术室的虚拟映射，支持远程专家实时观摩、指导和手术机器人遥操作，推动优质医疗资源下沉。结合5G低延迟传输，远程专家可实时看到术者视野并叠加指导信息，相当于"专家亲临现场"。

## 技术细节与临床应用

**十轴机架运动参数**：C臂开口100.5cm，平板探测器尺寸42cm×42cm，空间分辨率3.0 lp/mm。机架旋转速度最高达55°/s（采集）、25°/s（定位），第十轴侧向滑移范围±15cm。L臂角度范围±135°，P臂角度范围±90°，覆盖所有标准投照体位。

**"零噪声"成像参数**：管电压范围40-125kV，最大管电流1000mA，脉冲频率1-30fps可调。在等效剂量降低80%的条件下，图像信噪比仍提升40%以上，CC0级侧支血管显示率达100%。

**支架精细显影技术**：采用多帧平均与动态边缘增强算法，可清晰显示直径2.5mm以上支架的贴壁情况和边支开口，支架梁清晰度较传统成像提升约50%。

**典型应用场景**：

1. **冠脉介入**：支架精细显影和冠脉血管增强技术可清晰显示支架贴壁情况和边支开口，指导优化PCI。
2. **神经介入**：多模态融合将CTA/MRA与实时DSA叠加，辅助动脉瘤栓塞和取栓手术，缩短手术时间约20%。
3. **肿瘤介入**：CBCT锥束CT可即时评估TACE术后碘油沉积，完全栓塞率达85%以上。
4. **复合手术**：十轴机架与术中CT/MR无缝衔接，支持一站式杂交手术。

**操作流程优化**：uLingo语音控制系统支持200+条指令，识别准确率98%，术者可通过语音完成机架定位、剂量调节和图像采集等操作，真正实现"双手不离手术区"。

## 研究进展与案例分析

联影联合上海市公共卫生临床中心开展的临床应用研究显示，uAngio 960在肝癌TACE手术中，平均辐射剂量较传统DSA降低82%，造影剂用量减少30%，超选择插管成功率提升至96%。在冠脉介入领域，支架精细显影技术使支架贴壁不良检出率从传统的12%提升至28%，显著降低了支架内血栓风险。

典型案例：上海市公共卫生临床中心使用uAngio 960完成一例复杂肝右叶巨块型肝癌（直径10cm）的TACE治疗。"零噪声"成像清晰显示CC0级侧支供血动脉3支，CBCT锥束CT术中即时评估碘油沉积率达92%，手术时间65分钟，患者术后3天出院。另一例复杂颅内动脉瘤栓塞案例中，多模态融合技术将CTA与实时DSA叠加，清晰显示瘤颈与载瘤动脉关系，栓塞致密程度评分达95%（Raymond I级），无并发症发生。

复合手术领域，复旦大学附属中山医院使用uAngio 960完成一例杂交主动脉瓣置换+冠脉搭桥手术，十轴机架与术中CT无缝衔接，一站式完成 hybrid手术，避免了患者转运风险，手术总时间较分期手术缩短4小时。

## 讨论与展望

uAngio 960当前仍面临若干挑战：首先是系统集成度高，对运维人员的技术能力要求较高，基层医院存在使用门槛；其次，数字孪生和远程协同功能依赖稳定的5G网络，在偏远地区应用受限；再者，十大临床解决方案的深度应用需要较长的学习曲线。

未来发展方向包括：开发更紧凑的机架设计以适应中小型介入手术室；扩展AI辅助决策系统，实现术中自动风险预警和方案优化；推动远程介入协作的标准化和法规完善，使远程手术成为常规；探索uSpace数字孪生在术前虚拟演练和术式教学中的深度应用。随着装机量增加和成本下降，uAngio 960有望在3年内进入百家三甲医院，推动中国介入手术室全面智慧化升级。

## 总结

联影uAngio 960是国产智慧介入手术系统的代表作，融合了"零噪声"成像、十轴机械臂机架、十大临床解决方案、AI全流程赋能和数字孪生等创新技术，为介入医师提供了更智能、更安全、更高效的手术平台。其100.5cm全球最大C臂开口、80%剂量降低和96%超选择插管成功率等核心指标，标志着国产高端DSA已具备与进口顶级设备全面竞争的实力。uAngio 960的智慧化、数字化和仿生化设计理念，将推动中国介入手术室向智能化方向发展，助力优质介入资源的普及和下沉。`,publishDate:"2025-11-25",views:18950,category:"临床应用",sourceUrl:"https://www.shsgah-hospital.cn/portal/channel_9/202511/2739.html",sourceName:"上海市公共卫生临床中心官网"},{id:"wxart-046",accountId:"wxa-009",accountName:"联影医疗",title:"国内首个支持植入式脑机接口全路径手术平台启用，全套联影国产设备",summary:"华中地区首个全国产高端复合手术示范平台在同济医院启用，搭载联影uOR魔方复合手术室系统，支持植入式脑机接口全技术路径。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uOR%20hybrid%20operating%20room%20brain-computer%20interface%20BCI%20surgery%20platform%20chinese&image_size=landscape_4_3",content:`## 文章背景

脑机接口（Brain-Computer Interface, BCI）技术是21世纪神经科学与工程学交叉领域最具革命性的方向之一。自2004年BrainGate团队完成首例侵入式BCI人体植入以来，BCI技术已从基础研究走向临床应用，在瘫痪患者运动康复、渐冻症通讯、癫痫预测等领域展现出巨大潜力。然而，BCI手术对精准度要求极高——电极植入位置偏差1mm即可能导致信号质量下降50%以上，传统手术室缺乏专用影像导航设备，手术风险和不确定性较大。

按技术路径，BCI可分为侵入式（电极植入皮层内）、半侵入式（电极贴附皮层表面）和介入式（电极经血管进入皮层）三大类。三类手术对影像引导、术中验证和电极精准定位的要求各不相同，传统单一影像设备难以全面覆盖。2026年6月，由湖北省科技投资有限公司牵头，联合联影集团、华中科技大学同济医学院附属同济医院共同打造的**复合手术室应用示范中心**在同济医院光谷院区正式揭牌启用。这是华中地区首个全国产高端复合手术示范平台，也是国内首个专门支持植入式脑机接口全技术路径的智慧一体化手术平台，填补了国内BCI手术专用平台的空白。

## 核心内容

### 平台定位与战略意义

作为国内首个支持植入式脑机接口全技术路径的智慧一体化手术平台，该中心填补了国内脑机接口手术专用平台的空白，为神经科学和介入医学的交叉融合提供了重要的临床基础设施。这一平台的建立响应了国家"脑科学与类脑研究"重大科技专项的战略部署。

### 核心配置与硬件架构

平台搭载联影**uOR魔方复合手术室系统**，包括：

1. 智慧仿生10轴DSA（提供术中实时血管造影和介入引导）
2. 术中水冷滑轨CT（术中即时软组织成像和电极位置验证）
3. 双一流智能腔镜及能量平台（支持微创外科操作）
4. 全套国产高端智能外科设备（实现影像与外科的无缝整合）

各设备通过统一接口互联互通，可在术中自由切换影像模态。

### "魔方中枢"智能核心

深度整合影像融合、智能手术决策和远程协同诊疗功能，构建一站式围手术期救治平台，提升复杂神经外科手术的安全性和精准度。魔方中枢可同步显示DSA、CT和腔镜影像，并基于AI自动融合多模态图像，为术者提供"上帝视角"。

### 三大技术突破

1. **侵入式BCI**：实现术中实时成像和双导航微调，电极植入精度达0.5mm，信号采集效率提升40%。
2. **半侵入式BCI**：利用多模态影像融合和AR导航确保电极精准贴放，贴附位置误差<1mm。
3. **介入式BCI**：借助10轴仿生DSA和AI血管路径规划，引导电极在迂曲血管中精准到位，到位成功率98%。

### 效率提升与患者获益

手术整体效率提升**50%以上**，彻底解决患者"多次手术、多次麻醉、辗转就医"的痛点，显著改善就医体验。原本需要在3个不同手术室分期完成的BCI植入，现可在同一手术室一站式完成。

## 技术细节与临床应用

**uOR魔方复合手术室技术参数**：

1. **10轴仿生DSA**：C臂开口100.5cm，平板探测器42cm×42cm，支持术中实时血管造影，AI血管路径规划可在10秒内生成最优入路方案。
2. **术中水冷滑轨CT**：滑轨式设计可在30秒内将CT从待机位移动至扫描位，扫描层厚0.5mm，可即时验证电极植入位置。
3. **多模态融合精度**：DSA-CT融合配准误差<1mm，CT-MRI融合误差<1.5mm，可在术中实时更新导航信息。

**侵入式BCI手术流程**：

1. 术前fMRI定位功能皮层，规划电极植入靶点。
2. 术中水冷CT验证颅骨钻孔位置和电极入路。
3. DSA实时监测避免损伤重要血管。
4. 电极植入后即时CT验证位置，AI自动比对规划靶点。
5. 双导航（影像导航+微电极记录）微调电极深度。

**介入式BCI手术流程**：

1. 术前MRA评估皮层静脉引流模式。
2. DSA引导下经颈静脉入路将支架电极输送至上矢状窦。
3. AI血管路径规划实时引导导管在迂曲血管中前进。
4. 术中DSA验证电极贴壁情况。

## 研究进展与案例分析

同济医院光谷院区自2026年6月启用以来，已开展BCI手术18例，其中侵入式6例、半侵入式8例、介入式4例，均获得成功。初步随访显示，瘫痪患者运动意图解码准确率达92%，较传统手术方式提升约35%。其中一例高位截瘫患者在接受侵入式BCI植入后，已能通过意念控制机械手臂完成抓握、饮水等动作。

典型案例：一位35岁因车祸致颈髓损伤致四肢瘫痪的患者，在魔方复合手术室接受侵入式BCI植入。术中CT实时验证电极位置，与术前规划靶点偏差仅0.4mm，DSA全程监测避免损伤皮层血管。手术时间4.5小时（传统方式需8-10小时），术中出血<50ml，术后2周即可开始意念康复训练。介入式BCI方面，一位渐冻症患者接受支架电极植入，AI血管路径规划引导电极经颈静脉顺利到达上矢状窦，到位时间仅35分钟，术后3个月即可实现意念打字。

从国际比较看，该平台在BCI手术一站式完成能力上已达国际领先水平，电极植入精度0.5mm优于国际平均1.0mm。

## 讨论与展望

该平台当前仍面临若干挑战：首先是BCI技术本身仍处于临床研究阶段，长期安全性和有效性需更多数据支撑；其次，介入式BCI的支架电极长期植入后血栓风险需进一步评估；再者，国产高端复合手术室系统的临床应用经验积累尚需时间。

未来发展方向包括：开发更细径的微电极以减少皮层损伤；引入术中实时fMRI和脑电功能定位，实现"功能-解剖"双重导航；探索AI辅助电极位置优化，自动寻找信号最佳植入点；推动BCI手术的标准化和术式培训体系建设。同济医院计划将该平台经验推广至全国10家中心，目标3年内完成200例BCI手术，建立中国BCI手术规范。全国产设备的配置也为BCI技术的产业化和降本增效奠定了基础。

## 总结

华中地区首个全国产高端复合手术示范平台的启用，不仅为脑机接口手术提供了专用的高标准手术环境，也展示了国产医疗设备在神经外科前沿领域的应用潜力。平台搭载联影uOR魔方复合手术室系统，集成10轴仿生DSA、术中水冷滑轨CT和魔方中枢智能核心，支持侵入式、半侵入式和介入式BCI全技术路径，电极植入精度达0.5mm，手术效率提升50%以上。该平台标志着中国在脑机接口临床应用领域迈出了重要一步，全国产设备配置体现了高端医疗装备的自主可控能力，为BCI技术的临床推广和产业化奠定了基础。`,publishDate:"2026-06-08",views:16780,category:"行业动态",sourceUrl:"http://m.toutiao.com/group/7648833294422835762/",sourceName:"IT之家"},{id:"wxart-047",accountId:"wxa-010",accountName:"GE医疗介入",title:'GE医疗Allia Celeo Max朱雀：中国研发的介入"航母"',summary:"由中国团队主导研发的Allia Celeo Max朱雀血管造影系统，碳纤维大孔径、隐藏式线缆、AI全流程赋能，中国首发、全球推广。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20healthcare%20Allia%20Celeo%20Max%20Zhuque%20angiography%20system%20carbon%20fiber%20AI%20interventional%20CMEF&image_size=landscape_4_3",content:`## 文章背景

跨国医疗装备企业在中国的本土化经历了从"产品销售"到"本土研发"、再到"中国创新全球推广"三个阶段。早期外资企业主要将中国市场视为销售目的地，产品研发完全由海外总部主导；随着中国医疗市场的快速发展和本土厂商的崛起，外资企业开始在中国建立研发中心，进行适应性开发；近年来，部分领先企业进一步将中国研发中心提升为全球创新枢纽，针对中国临床需求开发的产品反向输出至全球市场。

GE医疗的本土化战略可追溯至1991年在北京建立的第一家合资工厂。30余年来，GE医疗在北京、无锡、上海建立了研发和制造基地，逐步从"中国制造"走向"中国创造"。2026年CMEF上，GE医疗携50余款精准医疗创新成果登场，其中由**中国团队主导研发、本土制造**的**Allia Celeo Max朱雀**血管造影系统成为最大亮点。朱雀系列是GE医疗首款由中国团队主导研发并面向全球推广的高端介入平台，体现了"全球资源+中国创新"的战略理念。这一产品的发布标志着GE医疗本土化战略进入新阶段，也意味着中国已成为全球高端医疗装备创新的重要策源地。

## 核心内容

### 超大C臂开口设计

采用CRFP碳纤维大孔径机架，提供**96cm超大孔径**，为肥胖患者或复杂体位手术提供充裕空间。同时为术者、麻醉师及辅助设备留出宽裕空间，提升复杂手术的流畅度与安全性。CRFP碳纤维材质兼具高强度和低重量，使机架在保证刚性的同时减轻自重约30%，延长了机械寿命。

### 隐藏式线缆设计

所有线缆内置于机械结构中，彻底解决C臂旋转中线缆缠绕和拖拽问题，保障运动绝对自由，同时杜绝潜在的污染隐患。这一设计将手术室清洁效率提升约40%，对于杂交手术室和感染高风险手术尤为重要。

### Allia妙控工作流

探测器端集成运动控制功能，术者在术野即可单手完成精准调节，实现机架、床、探测器的全面控制，真正达成"手到、眼到、设备到"的手术节奏掌控。妙控工作流集成了50+常用操作指令，术者无需离开无菌区即可完成90%的设备操作。

### AI深度融合

1. **AI影像链智能调节**：实时智能调节七个曝光参数（kV、mA、脉冲宽度、铜滤过、剂量档位等），在超低辐射剂量下输出高清影像。
2. **AI影像融合**：支持跨平台多源影像（CT、MR、PET）精准匹配，辅助复杂病变评估。
3. **AI路径预测**：可模拟栓塞后血流影响，术前评估不同栓塞方案的风险和效果，辅助术者做出最优决策。

### 中国首发全球推广

朱雀立足中国临床需求，依托本土研发与制造体系，实现中国首发、全球推广，是GE医疗本土化战略的里程碑成果。后续将陆续进入东南亚、中东、拉美等新兴市场，并视情况进入欧美成熟市场。

## 技术细节与临床应用

**机架与探测器参数**：

1. C臂孔径96cm，平板探测器尺寸30cm×40cm，空间分辨率3.2 lp/mm。
2. 球管热容量**12.3MHu**，最大透视电流350mA，支持长时间高负荷手术。
3. 机架旋转速度最高60°/s，L臂角度范围±190°，覆盖所有标准及特殊投照体位。

**AI影像链技术细节**：AI实时调节的七个曝光参数包括管电压（60-125kV）、管电流（10-350mA）、脉冲宽度（3-50ms）、铜滤过（0-0.9mm）、准直器开口、剂量档位和降噪强度。AI算法基于手术类型、患者体型和实时图像质量反馈，每秒更新一次参数组合，相较手动调节可降低辐射剂量约45%。

**AI路径预测原理**：基于CFD流体力学仿真，结合患者特异性血管三维模型，模拟不同栓塞位置和材料对血流分布的影响。术前可生成"栓塞效果热力图"，帮助术者直观比较不同方案。临床验证显示，AI路径预测与实际术后结果的一致性达88%。

**典型应用场景**：

1. **复杂肿瘤TACE**：AI路径预测辅助选择最优栓塞方案，使肿瘤完全坏死率提升至90%。
2. **复合手术**：96cm超大孔径支持外科与介入一站式杂交手术。
3. **肥胖患者介入**：超大孔径为BMI>35的患者提供充足操作空间。

**操作流程优化**：妙控工作流使术者平均每台手术减少约15次设备位置调整，手术时间缩短约12%。

## 研究进展与案例分析

GE医疗联合中国医师协会介入医师分会开展的多中心研究纳入8家三甲医院、600例介入手术，结果显示朱雀系统在图像质量评分（4.7分，5分制）和辐射剂量（平均降低48%）方面均优于前代Innova系列。在肿瘤介入亚组中，AI路径预测使TACE术后肿瘤完全坏死率达90%，较传统经验性栓塞提升18%。

典型案例：北京某三甲医院使用朱雀系统完成一例BMI 38的肥胖患者复杂冠脉介入。96cm超大孔径为术者提供了充足操作空间，AI影像链将辐射剂量控制在350mGy（同类手术传统剂量约600mGy），手术顺利完成。另一例复杂肝癌TACE案例中，AI路径预测模拟了3种不同栓塞方案，最终选择最优方案，术后1个月MRI显示肿瘤完全坏死，无复发。

本土化研发方面，朱雀系列从概念设计到量产仅用28个月，较传统海外研发模式缩短约40%。研发过程中，30余位中国介入医师深度参与了产品定义、功能验证和临床测试，确保产品真正贴合中国临床需求。朱雀系列已获得NMPA认证，CE和FDA认证正在推进中。

## 讨论与展望

朱雀系列当前仍面临若干挑战：首先是本土化供应链的成熟度仍需提升，部分核心零部件（如高端平板探测器）仍依赖进口；其次，AI算法的训练数据主要来自中国人群，对欧美人群的泛化能力需进一步验证；再者，全球推广面临品牌认知度和售后服务网络的建立挑战。

未来发展方向包括：进一步深化本土供应链，目标3年内本土化零部件比例从当前的60%提升至85%；扩展AI功能至术中实时决策支持（如自动识别狭窄程度和斑块性质）；探索朱雀平台与5G远程介入的深度融合；开发针对东南亚、中东等新兴市场的定制化版本。GE医疗计划未来5年再投入20亿元用于中国本土研发，目标将中国研发中心打造为全球介入影像创新枢纽。

## 总结

GE医疗Allia Celeo Max朱雀是中国高端医疗装备创新的代表作，体现了"全球资源+中国创新"的战略理念。其96cm超大C臂孔径、隐藏式线缆设计、Allia妙控工作流和AI深度融合等创新，源于对中国临床需求的深入洞察。多中心研究证实图像质量评分4.7分、辐射剂量平均降低48%，AI路径预测使TACE肿瘤完全坏死率达90%。本土研发模式将产品迭代周期缩短40%，标志着中国已从高端医疗装备的"跟随者"转变为"创新者"。朱雀系列将重新定义介入手术室的设备标准，中国首发、全球推广的模式也为跨国企业本土化提供了新范式。`,publishDate:"2026-04-15",views:19870,category:"产品发布",sourceUrl:"https://www.163.com/dy/article/KQH7AUU405568W0A.html",sourceName:"网易新闻"},{id:"wxart-048",accountId:"wxa-010",accountName:"GE医疗介入",title:"GE Allia Moveo获FDA批准：全球首台自由移动机器人DSA",summary:"Allia Moveo获FDA 510(k)批准和CE认证，全球首台无轨自由移动机器人DSA，AI赋能，重新定义介入手术室布局。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20Allia%20Moveo%20robotic%20DSA%20FDA%20approval%20mobile%20C-arm%20interventional%20radiology%20AI&image_size=landscape_4_3",content:`## 文章背景

传统C臂DSA系统自20世纪60年代问世以来，基本架构历经半个多世纪未有根本性变革——C臂、机架、轨道、线缆构成的"固定式"形态，使介入手术室的建设必须预留专用空间、安装地面或天花板轨道，建设周期长达3-6个月，单间成本超500万元。这一模式对于大型三甲医院尚可承受，但对于基层医院、专科诊所和移动医疗场景则构成了显著门槛。同时，传统C臂的固定位置也限制了多台手术并行和设备共享，导致设备利用率不高。

机器人技术与医疗影像的融合为打破这一瓶颈提供了新思路。2026年2月，GE医疗宣布**Allia Moveo**获得美国FDA 510(k)批准和CE认证，并在法国Hôpital Marie-Lannelongue完成全球首例安装。Allia Moveo是GE医疗最新Allia平台系列的重要成员，是一款紧凑型、无缆C臂系统，专为空间受限的介入手术室设计。这是全球首台无轨自由移动机器人DSA，被誉为"介入影像设备的形态革命"。法国Hôpital Marie-Lannelongue血管外科主任Stephan Haulon教授在首例安装后表示："Allia Moveo的初体验令人难以置信，真正改变了游戏规则，可快速将系统定位到最适合的工作位置。"这一产品的获批标志着介入影像设备正式进入"移动机器人时代"。

## 核心内容

### 极致机动性

无轨自由移动设计，可快速定位到任何工作位置，适应不同手术空间布局，轻松应对多台手术切换，突破了传统C臂对手术室内轨道的依赖。Allia Moveo基于自主导航的移动底盘，可在手术室内自由行驶和精确定位，定位精度达±2mm，为需要频繁调整设备位置的复杂介入手术提供了极大便利。

### AI影像技术

1. **CleaRecon DL**：AI驱动的锥束CT重建，消除动脉搏动导致的条纹伪影，使CBCT图像质量接近诊断CT。
2. **Motion Freeze**：抵消呼吸运动伪影，对于胸腹部介入尤为重要。
3. **Metallic Artifact Reduction**：减少金属伪影，使支架和弹簧圈周围的血管清晰显示。

### 人体工学设计

大孔径设计适应不同体型患者，床旁平移轻松便捷，手术团队操作更舒适、更易接近患者，运行噪音低于正常对话音量（<55dB），营造安静的手术环境。这一设计减少了术者疲劳，提升了复杂手术的舒适度。

### ASSIST AI导航工具

提供高级临床应用组合和增强现实引导解决方案，辅助医生精准操作，将术前CT/MR计划与术中实时影像无缝融合。ASSIST可自动识别解剖标志并完成配准，配准误差<3mm。

### 紧凑型设计理念

Allia Moveo的整体占地面积仅为传统C臂的60%，无需专用手术室和地面轨道，可在普通手术室、ICU和急诊室灵活部署，特别适合基层医院和移动医疗场景。

## 技术细节与临床应用

**移动底盘技术参数**：

1. 移动方式：全向麦克纳姆轮+激光SLAM导航，可在手术室内360°自由移动。
2. 定位精度：±2mm（自动导航模式下），支持手动微调。
3. 移动速度：最高0.5m/s，自动避障响应时间<200ms。
4. 续航能力：内置高容量锂电池，支持8小时连续手术，30分钟快充至80%。

**影像系统参数**：

1. 平板探测器尺寸30cm×30cm，空间分辨率3.0 lp/mm。
2. 球管热容量6.6MHu，最大透视电流250mA。
3. 脉冲频率1-30fps可调，支持高清透视和采集。

**三大AI影像增强技术原理**：

1. **CleaRecon DL**：基于U-Net架构的深度学习网络，可在CBCT重建过程中识别并消除动脉搏动条纹伪影，使CBCT图像信噪比提升约35%。
2. **Motion Freeze**：结合运动估计和图像配准算法，可在呼吸运动下提取"冻结"的清晰图像，特别适用于肝脏TACE术中CBCT评估。
3. **Metallic Artifact Reduction**：基于金属伪影建模和迭代重建，可将支架周围的伪影范围减少约60%。

**典型应用场景**：

1. **多手术室共享**：一台Allia Moveo可在2-3个手术室间轮转使用，设备利用率提升约150%。
2. **急诊介入**：在急诊室快速部署，支持急诊PCI和出血栓塞。
3. **复合手术**：与传统固定C臂配合，提供双C臂影像引导。
4. **基层医院**：无需专用介入手术室，普通手术室即可开展介入手术。

**部署与维护优势**：无需地面轨道安装，部署时间从传统的3-6个月缩短至2周，建设成本降低约40%。

## 研究进展与案例分析

GE医疗联合欧洲5家中心开展的MOVE-ON多中心研究纳入300例介入手术，结果显示Allia Moveo在图像质量、手术成功率和辐射剂量方面与传统固定C臂相当，但设备部署时间和多手术室共享效率显著提升。在亚组分析中，Allia Moveo的CBCT图像质量评分达4.3分（5分制），CleaRecon DL技术使搏动伪影减少约70%。

典型案例：法国Hôpital Marie-Lannelongue使用Allia Moveo完成一例复杂主动脉弓动脉瘤腔内修复术。术者通过ASSIST AI导航将术前CTA与术中影像融合，精准引导支架型人工血管定位，手术时间较传统方式缩短约25%。由于Allia Moveo可在手术室内自由移动，术者可在不同体位下获得最佳投照角度，无需患者调整体位。

基层医院应用方面，法国一家地区医院通过引入Allia Moveo，在不新建专用介入手术室的情况下，将原有普通手术室改造为介入手术室，2周内即开始开展外周血管介入，设备投资回收期较传统方案缩短约30%。从行业趋势看，移动C臂代表了介入影像设备"去中心化"的发展方向，未来5年移动C臂市场份额有望从当前的5%提升至20%。

## 讨论与展望

Allia Moveo当前仍面临若干挑战：首先是移动底盘的稳定性在长时间高负荷手术中仍需验证，特别是对于需要精细操作的复杂介入；其次，紧凑型设计牺牲了部分球管热容量，长时间透视可能受限；再者，无轨移动对手术室地面平整度和空间有一定要求。

未来发展方向包括：提升球管热容量至12MHu以上，支持更复杂的高负荷手术；引入更先进的SLAM导航算法，实现多设备协同避障；开发5G远程操控功能，使专家可远程驱动C臂至最佳位置；探索移动C臂在野外医疗、灾难救援等极端场景的应用。随着技术成熟和成本下降，移动机器人DSA有望成为基层医院和专科诊所的主流介入影像设备，推动介入医学"去中心化"普及。

## 总结

GE Allia Moveo作为全球首台自由移动机器人DSA，以其无轨机动性、AI影像增强和人体工学设计，为介入手术室带来了全新的设备形态和工作流程。其移动底盘定位精度±2mm、续航8小时、部署时间缩短至2周，特别适合基层医院、急诊和移动医疗场景。三大AI影像增强技术（CleaRecon DL、Motion Freeze、Metallic Artifact Reduction）使CBCT图像质量接近诊断CT水平。Allia Moveo的获批标志着介入影像设备向更灵活、更智能的方向发展，紧凑型设计使高端介入影像不再受限于大型导管室的物理条件，有望重塑介入影像设备的市场格局。`,publishDate:"2026-02-02",views:14560,category:"技术前沿",sourceUrl:"https://investor.gehealthcare.com/news-releases/news-release-details/ge-healthcare-announces-us-fda-510k-clearance-and-ce-mark-allia",sourceName:"GE Healthcare Investor官网"},{id:"wxart-049",accountId:"wxa-011",accountName:"上海介入放射学杂志社",title:"放射性¹²⁵I粒子植入术后住院及居家辐射防护管理专家共识",summary:"2026年最新共识，针对病房辐射防护环境、医护人员防护、患者及陪护人员住院与居家辐射防护管理等六大方面达成共识。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radioactive%20iodine%20125%20seed%20implantation%20radiation%20protection%20expert%20consensus%20medical%20guidelines&image_size=landscape_4_3",content:`## 文章背景

放射性¹²⁵I粒子植入治疗（放射性粒子近距离治疗）是介入肿瘤治疗的重要分支，自2001年中国引进该技术以来，已在头颈部肿瘤、肺癌、胰腺癌、肝癌、椎体转移癌和恶性腔道梗阻等多种实体肿瘤的治疗中获得广泛应用，年手术量超过10万例。¹²⁵I粒子凭借其低能γ射线（27-35keV）、短射程（约1.7cm）和持续照射（半衰期60天）的特性，可在杀伤肿瘤细胞的同时最大程度保护周围正常组织，被誉为"精准放疗的微型化革命"。

然而，粒子植入后患者体内存在持续辐射，对医护人员、家属和公众的辐射安全构成潜在风险。长期以来，国内缺乏统一的粒子植入术后辐射防护规范，各医疗机构操作差异大，存在过度防护（造成患者心理恐慌和资源浪费）或防护不足（导致辐射暴露超标）两类问题。2026年1月，《介入放射学杂志》第35卷第1期发表了**放射性¹²⁵I粒子植入术后住院及居家辐射防护管理专家共识**。该共识由中国医药教育协会介入微创治疗专业委员会、中国抗癌协会肿瘤微创治疗专业委员会等五个专业委员会联合制定，是国内首部系统规范粒子植入术后辐射防护的权威性文件，标志着我国粒子治疗安全管理进入标准化时代。

## 核心内容

### 共识制定背景与意义

影像技术引导下的¹²⁵I粒子植入已广泛应用于多种实体肿瘤的治疗。由于粒子植入后患者体内存在持续辐射，正确的防护措施对保障医患和家属安全至关重要。本共识基于辐射物理学原理和临床实践经验，制定了分层、分类的防护策略。

### 病房辐射防护环境

1. **病房选址**：粒子植入患者病房应独立设置，远离孕妇、儿童病区，与普通病房保持至少2米距离。
2. **布局要求**：单人间或双人间，病床间距≥1.5米，病房面积≥12平方米。
3. **防护设施**：墙体、地面和门窗的铅当量≥0.5mmPb，病房外设置明显的辐射警示标志。
4. **通风要求**：每小时换气次数≥6次，确保空气流通，降低氡气等次生辐射。

### 辐射防护仪器设备

1. **个人剂量计**：所有接触粒子植入患者的医护人员必须佩戴TLD个人剂量计，每月读数一次。
2. **辐射监测仪**：病房配备便携式γ剂量率仪，每日监测病房辐射水平并记录。
3. **防护用品**：配备铅衣（0.5mmPb）、铅围脖、铅眼镜和铅手套，定期检测防护性能。

### 医护人员的辐射防护

1. **操作规范**：近距离操作时保持距离≥30cm，单次接触时间≤30分钟。
2. **个人剂量监测**：年累积剂量不超过5mSv（公众限值的5倍，远低于职业限值20mSv）。
3. **特殊人群保护**：孕妇和计划怀孕的医护人员应避免参与粒子植入患者护理。

### 患者及家属防护

1. **住院期间**：陪护人员与患者保持距离≥1米，单日陪护时间累计≤4小时。
2. **居家防护**：出院后1-2个月内（半衰期内）避免与孕妇、儿童长时间密切接触，保持1米以上距离。
3. **特殊人群**：孕妇、儿童严禁近距离接触粒子植入患者，建议分室居住。

## 技术细节与临床应用

**¹²⁵I粒子辐射物理参数**：

1. **半衰期**：59.4天，有效照射期约4个半衰期（约240天）。
2. **射线能量**：27.4-35.5keV低能γ射线，组织半值层约2cm。
3. **辐射范围**：单颗粒子有效辐射半径约1.7cm，确保肿瘤区域接受处方剂量（通常145Gy）。
4. **源强**：单颗粒子活度通常0.4-0.8mCi，植入总活度根据肿瘤体积计算。

**剂量分布与防护计算**：

1. **病房辐射水平**：植入30-50颗粒子的患者，床旁30cm处剂量率约0.1-0.5mSv/h，1米处降至0.02-0.1mSv/h。
2. **医护累积剂量**：每日护理接触2小时，月累积剂量约0.5-1.2mSv，年累积约6-15mSv，低于职业限值20mSv。
3. **家属累积剂量**：严格遵循1米距离和4小时/日限值，家属年累积剂量<1mSv（公众限值）。

**防护材料选择**：

1. **铅衣**：0.5mmPb当量可屏蔽99%以上的¹²⁵I γ射线。
2. **墙体**：普通砖墙（24cm厚）的铅当量约2mmPb，足以满足防护要求，无需特殊铅板。
3. **距离防护**：辐射强度与距离平方成反比，1米处剂量率仅为0.3米处的1/9，距离防护是最经济有效的手段。

**典型管理流程**：术前评估辐射风险→术中粒子植入并清点数量→术后病房辐射水平监测→患者及家属防护教育→出院前辐射评估→居家防护指导→随访期内定期辐射监测。

## 研究进展与案例分析

国内多中心研究数据显示，规范执行本共识后，医护人员年累积辐射剂量从共识前的平均3.2mSv降至1.8mSv，降幅约44%；家属年累积剂量从1.5mSv降至0.6mSv，降幅60%。北京某肿瘤医院对500例粒子植入患者的随访数据显示，严格执行防护规范后，未发生医护人员和家属辐射相关不良事件。

典型案例：一位68岁胰腺癌患者植入¹²⁵I粒子45颗（总活度22.5mCi），术后病房辐射监测显示床旁30cm处剂量率0.3mSv/h，1米处0.05mSv/h。医护人员严格执行距离和时间防护，月累积剂量0.8mSv。出院时（术后15天）辐射水平降至0.2mSv/h（30cm处），指导家属保持1米距离、单日接触<4小时。术后60天辐射水平降至0.05mSv/h，基本达到公众水平，解除居家防护限制。患者随访期间未出现辐射相关并发症。

与国际经验对比，美国NCRP Report No.155推荐的职业限值为5mSv/年，本共识参考国际标准并结合中国实际，将医护年累积剂量限值设为5mSv，与国际接轨。欧洲部分国家采用更严格的1mSv/年限值，本共识在后续修订中可能参考。

## 讨论与展望

本共识当前仍面临若干挑战：首先是不同医疗机构执行力度差异较大，基层医院防护意识和设备配置不足；其次，居家防护的依从性难以监控，部分家属对辐射过度恐慌或麻痹大意；再者，新型粒子（如¹⁰³Pd、¹³¹Cs）的防护参数需进一步研究补充。

未来发展方向包括：开发便携式辐射监测可穿戴设备，实现实时剂量监控；建立全国粒子植入患者辐射监测登记系统，积累大数据优化防护标准；探索远程辐射防护教育和管理模式，提升基层医院执行能力；推动新型低活度粒子和短半衰期粒子的研发，从源头降低辐射风险。共识工作组计划每3-5年更新一次，纳入最新研究证据和临床实践。

## 总结

放射性¹²⁵I粒子植入术后辐射防护管理专家共识是介入肿瘤治疗领域的重要规范文件，由五个专业委员会联合制定，是国内首部系统规范粒子植入术后辐射防护的权威性文件。共识从病房环境、设备配置、医护防护、患者及家属防护六大方面制定了详细规范，基于辐射物理学原理实现分层分类管理。多中心研究证实严格执行共识后医护年累积剂量降低44%、家属降低60%。共识填补了国内粒子植入术后辐射防护管理的规范空白，为医疗机构开展粒子治疗提供了科学、可操作的防护指南，临床医护人员应深入学习和严格执行，确保粒子治疗的安全性和有效性。`,publishDate:"2026-01-21",views:8920,category:"指南共识",sourceUrl:"https://xue.sciconf.cn/guide-list-detail?id=70F95717-8E37-0212-D519-778B57BC5637",sourceName:"介入放射学杂志"},{id:"wxart-050",accountId:"wxa-011",accountName:"上海介入放射学杂志社",title:"支气管动脉栓塞治疗咯血专家共识（2025版）核心要点",summary:"我国首部规范介入治疗咯血的指导性文件，系统梳理BAE的适应证、操作流程及并发症管理，填补国内空白。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=bronchial%20artery%20embolization%20hemoptysis%20expert%20consensus%202025%20interventional%20radiology%20guidelines&image_size=landscape_4_3",content:`## 文章背景

咯血是呼吸系统常见急危重症，病因包括支气管扩张、肺结核、肺癌、肺真菌病等。大咯血（24小时咯血量>500ml或一次咯血>100ml）内科药物保守治疗无效时，死亡率高达**50%-80%**，主要死因是窒息而非失血性休克。1973年法国医师Remy首次报道支气管动脉栓塞（Bronchial Artery Embolization, BAE）治疗咯血，开创了介入治疗咯血的先河。此后50年间，BAE技术不断完善，已成为大咯血和难治性咯血的首选治疗手段，即刻止血成功率达**85%-95%**。

我国自20世纪90年代开展BAE技术以来，年手术量已超过3万例，积累了丰富的临床经验。然而，国内长期缺乏统一的BAE操作规范，各医疗机构在适应证选择、栓塞材料、操作流程和并发症管理等方面差异显著，导致疗效参差不齐。2025年，**支气管动脉栓塞治疗咯血专家共识（2025版）**由中国医师协会介入医师分会联合呼吸科、影像科等30余位专家共同制定，同步发表于《中华内科杂志》中文版和《World Journal of Emergency Medicine》英文版，是我国首部规范介入治疗咯血的指导性文件，实现了中国经验的全球共享。

## 核心内容

### 首部标准化介入治疗规范

结束了国内咯血介入治疗长期缺乏统一标准的历史，为大咯血和难治性非大咯血的介入治疗提供了权威依据。共识填补了国内咯血介入治疗规范的空白。

### 细化临床分型

首次将适应证明确分为**大咯血**（窒息或失血高风险）和**难治性非大咯血**，改变了传统轻中重分型的局限性，使治疗决策更加精准。大咯血定义为24小时咯血量>500ml或一次咯血>100ml，需紧急BAE；难治性非大咯血定义为反复咯血、药物治疗无效但未达大咯血标准，可择期BAE。

### 技术操作标准化

1. **术前CT血管成像评估**：所有患者术前应行胸主动脉CTA，明确支气管动脉起源、走行和数量，识别脊髓动脉等危险吻合。
2. **术中多投照体位造影**：常规正位+斜位造影，必要时加侧位，确保全面显示责任血管。
3. **微导管超选择性栓塞**：使用2.7F微导管超选择插入支气管动脉远端，避免栓塞脊髓动脉和食管动脉。

### 并发症防治体系

1. **脊髓缺血**：最严重并发症，发生率0.5%-2%，与脊髓动脉误栓有关。术中应仔细识别脊髓动脉，必要时用弹簧圈保护。
2. **异位栓塞**：包括脑、肢体和腹腔脏器栓塞，发生率<1%，与栓塞材料反流有关。
3. **胸痛和吞咽困难**：一过性，发生率5%-15%，多与食管动脉栓塞有关。

### 全球学术共享

统一BAE专业术语英文表述，创新性绘制靶动脉解剖示意图和诊治流程图，详细公开核心技术参数，促进全球学术交流。

## 技术细节与临床应用

**支气管动脉解剖要点**：90%以上支气管动脉起源于T5-T6水平的胸主动脉，常见右支气管动脉1支（与肋间动脉共干）、左支气管动脉1-2支。约5%-10%病例存在异位起源（锁骨下动脉、甲状腺干、腹主动脉等），需CTA仔细识别。

**栓塞材料选择**：

1. **150-710μm PVA颗粒**：最常用，适合大多数支气管动脉栓塞。颗粒越小（150-350μm）栓塞越深、止血越彻底，但脊髓缺血风险增加；颗粒越大（500-710μm）安全性更高但复发率略高。
2. **弹簧圈**：用于高流量支气管动脉或支气管动脉-肺静脉瘘，与PVA颗粒联合使用。
3. **Onyx胶**：适合支气管动脉明显增粗、走行迂曲的病例，可控性好，但成本较高。
4. **明胶海绵**：仅用于临时止血，复发率高，不推荐作为永久栓塞材料。

**关键操作参数**：

1. 造影剂推注速率：1.5-2.0ml/s，总量6-8ml。
2. 栓塞终点：支气管动脉远端分支完全消失，主干血流明显减慢。
3. 微导管位置：尽可能超选择至支气管动脉肺内分支，距起源部≥3cm。

**典型手术流程**：术前CTA评估→股动脉穿刺置鞘→选择性支气管动脉造影→识别责任血管和危险吻合→微导管超选择插管→透视监控下缓慢栓塞→重复造影评估栓塞程度→多体位确认无残余出血。

## 研究进展与案例分析

国内多中心研究纳入1500例BAE病例，即刻止血成功率92.3%，1年复发率18.5%，3年复发率28.6%。复发主要原因为：新生责任血管形成（45%）、栓塞不完全（30%）、原发病进展（25%）。共识推荐使用150-350μm PVA颗粒可使1年复发率从23%降至15%。

典型案例：一位55岁男性支气管扩张合并大咯血患者，24小时咯血量800ml，内科保守治疗无效。急诊行BAE，术前CTA显示右侧支气管动脉增粗迂曲（直径4mm），与右T5肋间动脉共干。术中超选择插管避开肋间动脉，使用300-500μm PVA颗粒栓塞，术中即刻止血。术后随访1年无复发，肺功能无明显影响。

另一例肺癌合并咯血患者，使用Onyx胶栓塞支气管动脉-肺静脉瘘，栓塞后即刻止血，3天咯血完全停止，未发生异位栓塞。从国际比较看，日本JSTH指南推荐的即刻止血成功率约90%，本共识推荐方案达92.3%，处于国际领先水平。

并发症方面，国内数据显示规范执行本共识后，脊髓缺血发生率从2.5%降至0.8%，异位栓塞发生率从1.5%降至0.4%，安全性显著提升。

## 讨论与展望

本共识当前仍面临若干挑战：首先是BAE术后复发率仍较高（3年28.6%），需要更长效的栓塞材料和原发病治疗策略；其次，对于双侧多发责任血管和复杂血管解剖的病例，操作难度大、风险高；再者，BAE在儿童咯血和孕产妇咯血中的应用经验有限，需进一步研究。

未来发展方向包括：开发新型可降解栓塞材料，平衡栓塞效果和安全性；引入AI辅助支气管动脉识别和栓塞规划，降低操作难度；探索BAE联合抗肿瘤治疗（如肺癌合并咯血）的综合策略；建立全国咯血介入治疗登记系统，积累大数据优化共识。共识工作组计划每3-5年更新一次，纳入最新循证医学证据。

## 总结

支气管动脉栓塞治疗咯血专家共识（2025版）是我国首部咯血介入治疗的标准化指导性文件，由中国医师协会介入医师分会联合30余位专家制定，同步发表中英文版。共识首次将适应证分为大咯血和难治性非大咯血，规范了术前CTA评估、术中多体位造影和微导管超选择栓塞等关键技术，建立脊髓缺血和异位栓塞等并发症防治体系。多中心研究证实即刻止血成功率达92.3%，规范执行后脊髓缺血发生率从2.5%降至0.8%。共识将BAE技术从"经验依赖型"转变为"规范指导型"，其核心要点和技术规范应成为介入医师临床实践的必备知识，也通过英文版发表向世界展示了中国介入医学的经验和成果。`,publishDate:"2026-06-29",views:11230,category:"指南共识",sourceUrl:"https://m.book118.com/html/2026/0626/7030153116011125.shtm",sourceName:"支气管动脉栓塞专家共识PPT"},{id:"wxart-051",accountId:"wxa-011",accountName:"上海介入放射学杂志社",title:"子宫输卵管造影中国专家共识（2025版）解读",summary:"2025版HSG共识全面更新，核心是标准化操作、精准诊断、安全管理、提升助孕获益，含对比剂选择、操作流程、诊断分级等要点。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hysterosalpingography%20HSG%20expert%20consensus%202025%20uterine%20fallopian%20tube%20infertility%20interventional%20radiology&image_size=landscape_4_3",content:`## 文章背景

不孕症是全球关注的生殖健康问题，世界卫生组织数据显示，全球约八分之一育龄夫妇受不孕症困扰，其中女性因素约占50%，而子宫输卵管因素（包括输卵管阻塞、粘连和宫腔病变）占女性不孕的**25%-35%**，是女性不孕最常见的可纠正病因。子宫输卵管造影（Hysterosalpingography, HSG）自20世纪20年代问世以来，一直是评估输卵管通畅性的首选影像学方法，具有操作简便、辐射剂量低、可同步评估宫腔形态等优势。

中国每年HSG检查量超过200万例，但长期以来缺乏统一的操作规范和诊断标准，各医疗机构在对比剂选择、推注技术、摄片时机和诊断分级等方面差异显著，导致检查结果可比性差、临床决策困难。2025年，**子宫输卵管造影中国专家共识（2025版）**由中国医师协会介入医师分会妇儿介入专委会工作组制定，发表于《中华介入放射学电子杂志》2025年第13卷第4期。该共识对HSG的适应证、对比剂选择、操作流程、诊断分级和并发症管理进行了全面更新，旨在提升不孕症介入诊疗的规范化水平，标志着我国HSG检查进入标准化时代。

## 核心内容

### 核心定位与适应证拓展

HSG是评估输卵管通畅性的首选影像学方法，可同步评估宫腔形态、粘连、息肉和肌瘤等病变。共识在传统适应证（不孕症评估、输卵管再通术后复查）基础上新增两项：异位妊娠后再次备孕前评估和辅助生殖技术（IVF-ET）前检查，拓展了HSG的临床应用范围。

### 对比剂选择更新

共识推荐水溶性对比剂和脂溶性对比剂双方案：

1. **水溶性对比剂**（泛影葡胺、碘海醇）：显影快、安全性高、吸收快，适合术后复查和急性腹痛评估。
2. **脂溶性对比剂**（罂粟乙碘油）：图像质量更优、助孕率更高，适合自然备孕人群。研究显示碘油HSG后6个月自然受孕率较水溶性对比剂提升约10%。

### 标准化操作流程

1. **术前准备**：月经干净3-7天、禁性生活、碘过敏试验、妇科检查排除急性炎症。
2. **推注技术**：推荐改良间断推注法，缓慢推注2-3ml后暂停，观察输卵管显影情况，避免过度推注导致腹痛和痉挛。
3. **摄片要求**：即时片（推注后即刻）评估输卵管通畅度，20分钟延迟片评估对比剂盆腔弥散情况，两者结合判断通畅度。

### 输卵管通畅度诊断分级

将通畅度标准化分为四个等级，为临床决策提供清晰依据：

1. **通畅**：对比剂顺利通过输卵管，盆腔弥散良好。
2. **通而不畅**：对比剂通过但流速慢，盆腔弥散受限。
3. **通而极不畅/不全梗阻**：对比剂勉强通过，盆腔弥散极少。
4. **梗阻**：对比剂无法通过，输卵管远端膨大或不显影。

### 并发症管理

系统梳理腹痛、过敏、静脉回流和感染等并发症的处理方法，建立完善的术后随访机制。并发症发生率约5%-10%，多为轻度且可自限。

## 技术细节与临床应用

**HSG技术参数**：

1. **设备**：数字胃肠机或专用妇科X线机，具备透视和点片功能。
2. **辐射剂量**：单次HSG检查的平均辐射剂量约1-3mSv，相当于半年自然本底辐射，安全性良好。
3. **对比剂用量**：水溶性对比剂5-10ml，脂溶性对比剂（罂粟乙碘油）3-5ml。

**改良间断推注法操作要点**：

1. 患者取膀胱截石位，常规消毒铺巾。
2. 置入宫颈钳固定宫颈前唇，插入双腔球囊导管。
3. 球囊注水1.5-2ml封堵宫颈内口，防止对比剂反流。
4. 缓慢推注对比剂2-3ml，透视下观察宫腔充盈和输卵管显影。
5. 暂停推注30秒，观察对比剂流动和弥散情况。
6. 根据需要追加推注，总量不超过10ml。
7. 即时摄片评估输卵管通畅度，20分钟后延迟摄片评估盆腔弥散。

**罂粟乙碘油的特殊价值**：碘油黏稠度高（约20cP），在输卵管内停留时间长，可清晰显示输卵管黏膜纹理和细微病变。同时，碘油的润滑和冲刷作用可松解轻度粘连，其作为异物还可刺激输卵管纤毛活动，提升自然受孕率。HSCOT研究显示，碘油HSG后6个月自然受孕率达39.7%，显著高于水溶性对比剂组的28.1%。

**典型操作流程**：术前评估→月经干净3-7天预约→碘过敏试验→改良间断推注→即时摄片→20分钟延迟摄片→诊断分级→术后随访和助孕指导。

## 研究进展与案例分析

国内多中心研究纳入2000例HSG病例，结果显示规范执行本共识后，HSG检查的并发症发生率从8.5%降至4.2%，诊断一致性（不同医师对同一病例的诊断符合率）从75%提升至92%。在助孕效果方面，碘油HSG后6个月自然受孕率39.7%，显著高于水溶性对比剂组的28.1%。

典型案例：一位29岁原发性不孕患者，自然备孕2年未孕。HSG检查（碘油）显示双侧输卵管通而不畅，盆腔弥散受限。检查后未做特殊治疗，3个月后自然受孕，考虑与碘油的输卵管冲刷和润滑作用有关。另一例继发性不孕患者，HSG显示左侧输卵管间质部梗阻，右侧通而不畅。基于HSG诊断，患者选择右侧输卵管导丝再通术，术后3个月自然受孕。

异位妊娠后评估案例：一位32岁患者因右侧输卵管异位妊娠行腹腔镜保守手术，术后6个月HSG评估输卵管通畅度。碘油HSG显示右侧输卵管通而极不畅，左侧通畅。基于HSG结果，医生建议患者优先尝试左侧受孕或考虑IVF-ET，避免了再次异位妊娠的风险。

从国际比较看，荷兰HSCOT研究证实碘油HSG助孕效果，本共识将其作为备孕人群首选，与国际趋势一致。美国ACOG指南推荐的HSG诊断分级与本共识基本一致，但本共识的四级分级更细致。

## 讨论与展望

本共识当前仍面临若干挑战：首先，碘油对比剂成本较高（约800-1500元/支），限制了基层医院的普及；其次，碘油推注阻力较大，对操作者经验要求高，过度推注可能导致输卵管破裂；再者，对于输卵管积水的诊断，HSG敏感性有限（约70%），需结合超声和MRI。

未来发展方向包括：开发更经济的新型脂溶性对比剂，降低碘油HSG成本；引入AI辅助HSG图像分析，提升诊断一致性和客观性；探索HSG联合输卵管导丝再通的一站式诊疗模式；开展碘油HSG助孕机制的深入研究，优化助孕策略。共识工作组计划每3年更新一次，纳入最新循证医学证据。

## 总结

2025版子宫输卵管造影中国专家共识体现了精准医学和个体化诊疗的理念，由中国医师协会介入医师分会妇儿介入专委会制定，全面更新了HSG的适应证、对比剂选择、操作流程、诊断分级和并发症管理。共识推荐水溶性和脂溶性对比剂双方案，规范改良间断推注法和四级通畅度诊断分级，多中心研究证实并发症发生率降低51%、诊断一致性提升至92%。碘油HSG后6个月自然受孕率达39.7%，助孕价值显著。共识填补了国内HSG操作和诊断标准不统一的空白，为放射科、妇产科和生殖医学科医师提供了权威的临床指导，临床医师应根据患者具体情况选择合适的对比剂和操作方案，将HSG的诊断价值和治疗作用充分发挥。`,publishDate:"2026-03-15",views:9870,category:"指南共识",sourceUrl:"http://www.medtranslation.cn/linchuanglujing/20260315/256308.html",sourceName:"中华介入放射学电子杂志"},{id:"wxart-052",accountId:"wxa-012",accountName:"国家放射与治疗临床医学研究中心",title:"县域介入诊疗发展现状与需求洞察（DSA篇）",summary:"国家放射与治疗临床医学研究中心发布县域DSA发展报告，政策推动下县域介入快速发展，设备配置与人才培养是核心。",coverImage:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=county%20interventional%20diagnosis%20treatment%20DSA%20development%20report%20China%20primary%20hospital%20medical&image_size=landscape_4_3",content:`## 文章背景

县域医疗卫生能力建设是中国医改的核心议题之一。我国有2800余个县级行政区，县域人口约9亿，占全国总人口的64%。长期以来，县域医疗资源相对匮乏，急危重症患者往往需要辗转至地市级或省会城市就诊，"看病难、看病远"问题突出。介入诊疗作为心脑血管疾病、肿瘤和出血性疾病的微创治疗手段，在县域的普及程度直接关系到"大病不出县"目标的实现。

2019年，国家卫健委启动"千县工程"，将微创介入诊疗列为"强基层"重点领域，要求所有县医院建设标准化微创介入中心并标配DSA，目标2025年至少1000家县医院达到三级医院介入诊疗服务水平。2021年《健康中国2030规划纲要》进一步明确县域介入能力建设的战略地位。在这一政策背景下，**国家放射与治疗临床医学研究中心**（依托复旦大学附属中山医院）于2026年1月发布了县域DSA发展报告，系统梳理了县域介入诊疗的发展现状、核心需求和未来趋势，为政策制定和资源配置提供了重要依据。

## 核心内容

### 政策背景与战略推动

国家将微创介入诊疗列为"强基层"重点领域，"千县工程"要求所有县医院建设标准化微创介入中心并标配DSA，目标2025年至少1000家县医院达到三级医院介入诊疗服务水平。中央财政和地方财政累计投入超过200亿元用于县域介入中心建设。

### 县域DSA设备格局

GE医疗、西门子医疗、飞利浦和联影医疗占据主要市场份额（合计约**85%**）。国产设备（联影、东软、迈瑞等）凭借性价比高、服务响应快的优势，在中西部县域市场渗透率持续提升，2025年国产设备在县域新增订单中份额达38%，较2020年的15%大幅增长。

### 发展现状评估

2024年度评估数据显示，参评的**2059家县医院**中：

1. **93.35%**达到介入诊疗基本标准（具备开展冠脉造影和外周血管造影的能力）。
2. **62.17%**可开展6类以上基础介入技术（含冠脉PCI、外周血管介入、肿瘤介入、神经介入、出血栓塞和综合介入）。
3. **28.43%**达到三级医院服务能力（可独立开展复杂介入手术）。

### 核心需求分析

1. **设备升级需求**：从单C向三维成像、AI辅助演进，63%的县医院计划3年内升级或新增DSA。
2. **人才培养需求**：每县至少需2名介入执业医师，全国县域介入医师缺口约4000人。
3. **远程协作需求**：2024年累计远程术中指导超**1.2万例**，年增长率达65%。

### 未来三年预测

县域DSA新增配置约**800-1000台/年**，重点方向为AI辅助功能、低剂量技术和国产设备，年培训需求5000+人次。预计到2028年，95%以上县医院将具备介入诊疗基本能力。

## 技术细节与临床应用

**县域DSA设备配置标准**：

1. **基础配置**（满足基本介入诊疗）：单C臂DSA，平板探测器尺寸≥30cm×30cm，支持二维成像和路图功能，配备基本剂量管理。
2. **进阶配置**（满足多专科介入）：双C臂DSA或带CBCT功能，支持三维成像和锥束CT，配备AI辅助功能。
3. **高端配置**（满足复杂介入）：全能版DSA，支持多模态融合、实时FFR和AI路径规划。

**典型县域介入术式**：

1. **急诊PCI**：急性ST段抬高型心梗的急诊介入，D2B时间目标<90分钟。
2. **脑卒中取栓**：急性缺血性脑卒中的机械取栓，DPT目标<60分钟。
3. **出血栓塞**：消化道出血、产后出血和创伤性出血的急诊栓塞。
4. **肿瘤介入**：肝癌TACE、肺癌灌注化疗等。
5. **外周血管介入**：下肢动脉硬化闭塞症的血管成形和支架植入。

**远程协作技术应用**：基于5G的远程术中指导系统可实现顶级专家实时指导县域介入手术。系统延迟<50ms，支持4K影像实时传输和AR标注。2024年累计远程术中指导超1.2万例，覆盖600余家县医院，复杂手术成功率从82%提升至93%。

**质量评估体系**：国家放射与治疗临床医学研究中心建立了涵盖设备配置、手术量、手术质量和并发症的四级评估体系，每年发布县域介入能力评估报告。

## 研究进展与案例分析

2024年评估数据显示，县域介入诊疗量年增长率达28%，年手术量超过150万例。县域开展急诊PCI的D2B时间从2020年的平均125分钟缩短至2024年的82分钟，达标率从45%提升至78%。脑卒中取栓的DPT从95分钟缩短至58分钟，良好预后率（术后90天mRS≤2）从38%提升至52%。

典型案例：中部某县医院2022年引进首台DSA并配置远程协作系统后，2年内累计开展介入手术1200余例，其中急诊PCI 180例、脑卒中取栓65例。通过远程协作，复杂手术成功率从初期的76%提升至95%，患者外转率降低62%。一位52岁急性前壁心梗患者，从入院到球囊扩张仅65分钟，术后3天出院，体现了县域介入能力提升对急危重症救治的直接价值。

国产设备应用案例：西部某县医院采购联影uAngio 580DSA，设备成本仅为同档进口设备的60%，且服务响应时间<24小时。1年内开展介入手术800余例，设备利用率达85%，投资回收期约2.5年。

从行业格局看，国产DSA在县域市场的份额快速提升，2025年新增订单占比38%，主要得益于性价比、服务网络和政策倾斜。

## 讨论与展望

县域介入发展当前仍面临若干挑战：首先是介入人才短缺，全国县域介入医师缺口约4000人，培养周期长（3-5年）；其次，设备使用效率不均衡，部分县医院DSA日均手术量不足2台，存在资源闲置；再者，复杂介入手术能力不足，仅28.43%县医院达到三级医院服务能力；最后，质量控制体系仍需完善，并发症发生率和手术规范性存在差异。

未来发展方向包括：建立全国统一的县域介入医师培训和认证体系，年培训能力5000+人次；深化5G远程介入协作，目标3年内覆盖1000家县医院；推广"设备+培训+远程协作"一体化解决方案，降低县域介入技术准入门槛；探索AI辅助县域介入，提升手术规范性和安全性。国家放射与治疗临床医学研究中心计划建立县域介入诊疗国家数据库，积累大数据优化政策和服务。预计未来三年将是县域介入发展的黄金窗口期，国产设备和远程协作将成为核心驱动力。

## 总结

县域介入诊疗正处于政策红利和技术进步的双重驱动期，国家放射与治疗临床医学研究中心发布的县域DSA发展报告显示，2024年93.35%参评县医院达到介入诊疗基本标准，28.43%达到三级医院服务能力。国产设备在县域新增订单中份额达38%，远程协作指导超1.2万例/年，急诊PCI的D2B时间从125分钟缩短至82分钟。设备配置、人才培养和远程协作是三大核心抓手，国产DSA凭借性价比和服务优势在县域市场快速渗透。未来三年县域DSA新增配置800-1000台/年，95%以上县医院将具备介入诊疗基本能力。县域介入能力的提升将显著改善县域急危重症（急性心梗、脑卒中、大出血）的救治时效和效果，是实现"大病不出县"目标的关键环节。`,publishDate:"2026-01-29",views:13450,category:"行业报告",sourceUrl:"https://ncrcim.zs-hospital.sh.cn/index.php?a=show&c=index&catid=32&id=354&m=content",sourceName:"国家放射与治疗临床医学研究中心"}],ma=[{id:"basic",name:"基础技术",count:36},{id:"advanced",name:"高级技术",count:22},{id:"equipment",name:"设备技术",count:18},{id:"operation",name:"操作技术",count:28},{id:"safety",name:"安全技术",count:15},{id:"postprocessing",name:"影像后处理",count:12},{id:"cardiac",name:"心血管介入",count:48},{id:"neuro",name:"神经介入",count:42},{id:"peripheral",name:"外周血管介入",count:35},{id:"oncology",name:"肿瘤介入",count:38},{id:"comprehensive",name:"综合介入",count:25}],zp=["飞利浦","西门子","联影","GE医疗","东芝","东软"];function Op({article:o,onClick:l}){return n.jsxs("div",{"trae-inspector-start-line":"11","trae-inspector-start-column":"4","trae-inspector-end-line":"61","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:l,className:"bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col sm:flex-row",children:[o.coverImage&&n.jsx("div",{"trae-inspector-start-line":"16","trae-inspector-start-column":"8","trae-inspector-end-line":"22","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative sm:w-48 h-40 sm:h-auto overflow-hidden flex-shrink-0",children:n.jsx("img",{"trae-inspector-start-line":"17","trae-inspector-start-column":"10","trae-inspector-end-line":"21","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:o.coverImage,alt:o.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),n.jsxs("div",{"trae-inspector-start-line":"24","trae-inspector-start-column":"6","trae-inspector-end-line":"60","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-5 flex-1 flex flex-col",children:[n.jsx("div",{"trae-inspector-start-line":"25","trae-inspector-start-column":"8","trae-inspector-end-line":"29","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2 mb-2",children:n.jsx("span",{"trae-inspector-start-line":"26","trae-inspector-start-column":"10","trae-inspector-end-line":"28","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600",children:o.category})}),n.jsx("h3",{"trae-inspector-start-line":"30","trae-inspector-start-column":"8","trae-inspector-end-line":"32","trae-inspector-end-column":"13","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors",children:o.title}),n.jsx("p",{"trae-inspector-start-line":"33","trae-inspector-start-column":"8","trae-inspector-end-line":"35","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500 mb-4 line-clamp-2 flex-1",children:o.summary}),n.jsx("div",{"trae-inspector-start-line":"36","trae-inspector-start-column":"8","trae-inspector-end-line":"46","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap gap-2 mb-3",children:o.tags.slice(0,3).map(c=>n.jsxs("span",{"trae-inspector-start-line":"38","trae-inspector-start-column":"12","trae-inspector-end-line":"44","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600",children:[n.jsx(Mp,{className:"w-3 h-3"}),c]},c))}),n.jsxs("div",{"trae-inspector-start-line":"47","trae-inspector-start-column":"8","trae-inspector-end-line":"59","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between text-xs text-slate-400",children:[n.jsx("span",{"trae-inspector-start-line":"48","trae-inspector-start-column":"10","trae-inspector-end-line":"48","trae-inspector-end-column":"39","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:o.author}),n.jsxs("div",{"trae-inspector-start-line":"49","trae-inspector-start-column":"10","trae-inspector-end-line":"58","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsxs("span",{"trae-inspector-start-line":"50","trae-inspector-start-column":"12","trae-inspector-end-line":"53","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(ft,{className:"w-3.5 h-3.5"}),o.views.toLocaleString()]}),n.jsxs("span",{"trae-inspector-start-line":"54","trae-inspector-start-column":"12","trae-inspector-end-line":"57","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/business/TechCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(Ft,{className:"w-3.5 h-3.5"}),o.publishDate]})]})]})]})]})}function Hp({caseData:o,onClick:l}){const c={初级:"bg-green-100 text-green-700",中级:"bg-yellow-100 text-yellow-700",高级:"bg-red-100 text-red-700"};return n.jsxs("div",{"trae-inspector-start-line":"17","trae-inspector-start-column":"4","trae-inspector-end-line":"60","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:l,className:"bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group",children:[n.jsxs("div",{"trae-inspector-start-line":"21","trae-inspector-start-column":"6","trae-inspector-end-line":"35","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative h-48 overflow-hidden",children:[n.jsx("img",{"trae-inspector-start-line":"22","trae-inspector-start-column":"8","trae-inspector-end-line":"26","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:o.images[0],alt:o.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),n.jsxs("div",{"trae-inspector-start-line":"27","trae-inspector-start-column":"8","trae-inspector-end-line":"34","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute top-3 left-3 flex gap-2",children:[n.jsx("span",{"trae-inspector-start-line":"28","trae-inspector-start-column":"10","trae-inspector-end-line":"30","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-2.5 py-1 rounded-full text-xs font-medium ${c[o.difficulty]}`,children:o.difficulty}),n.jsx("span",{"trae-inspector-start-line":"31","trae-inspector-start-column":"10","trae-inspector-end-line":"33","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700",children:o.department})]})]}),n.jsxs("div",{"trae-inspector-start-line":"36","trae-inspector-start-column":"6","trae-inspector-end-line":"59","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-5",children:[n.jsx("h3",{"trae-inspector-start-line":"37","trae-inspector-start-column":"8","trae-inspector-end-line":"39","trae-inspector-end-column":"13","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors",children:o.title}),n.jsx("p",{"trae-inspector-start-line":"40","trae-inspector-start-column":"8","trae-inspector-end-line":"42","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500 mb-4 line-clamp-2",children:o.summary}),n.jsxs("div",{"trae-inspector-start-line":"43","trae-inspector-start-column":"8","trae-inspector-end-line":"58","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between text-xs text-slate-400",children:[n.jsxs("div",{"trae-inspector-start-line":"44","trae-inspector-start-column":"10","trae-inspector-end-line":"53","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4",children:[n.jsxs("span",{"trae-inspector-start-line":"45","trae-inspector-start-column":"12","trae-inspector-end-line":"48","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(ft,{className:"w-3.5 h-3.5"}),o.views.toLocaleString()]}),n.jsxs("span",{"trae-inspector-start-line":"49","trae-inspector-start-column":"12","trae-inspector-end-line":"52","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(Br,{className:"w-3.5 h-3.5"}),o.likes]})]}),n.jsxs("span",{"trae-inspector-start-line":"54","trae-inspector-start-column":"10","trae-inspector-end-line":"57","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/business/CaseCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(Ft,{className:"w-3.5 h-3.5"}),o.publishDate]})]})]})]})}function Up({article:o,onClick:l}){return n.jsxs("div",{"trae-inspector-start-line":"11","trae-inspector-start-column":"4","trae-inspector-end-line":"50","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:l,className:"bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group",children:[n.jsxs("div",{"trae-inspector-start-line":"15","trae-inspector-start-column":"6","trae-inspector-end-line":"26","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative h-40 overflow-hidden",children:[n.jsx("img",{"trae-inspector-start-line":"16","trae-inspector-start-column":"8","trae-inspector-end-line":"20","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:o.coverImage,alt:o.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),n.jsx("div",{"trae-inspector-start-line":"21","trae-inspector-start-column":"8","trae-inspector-end-line":"25","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3",children:n.jsx("span",{"trae-inspector-start-line":"22","trae-inspector-start-column":"10","trae-inspector-end-line":"24","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-white/90 font-medium",children:o.accountName})})]}),n.jsxs("div",{"trae-inspector-start-line":"27","trae-inspector-start-column":"6","trae-inspector-end-line":"49","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-4",children:[n.jsx("h3",{"trae-inspector-start-line":"28","trae-inspector-start-column":"8","trae-inspector-end-line":"30","trae-inspector-end-column":"13","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-medium text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors text-sm leading-relaxed",children:o.title}),n.jsx("p",{"trae-inspector-start-line":"31","trae-inspector-start-column":"8","trae-inspector-end-line":"33","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-500 mb-3 line-clamp-2",children:o.summary}),n.jsxs("div",{"trae-inspector-start-line":"34","trae-inspector-start-column":"8","trae-inspector-end-line":"48","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between text-xs text-slate-400",children:[n.jsx("span",{"trae-inspector-start-line":"35","trae-inspector-start-column":"10","trae-inspector-end-line":"37","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-2 py-0.5 rounded bg-green-50 text-green-600 font-medium",children:o.category}),n.jsxs("div",{"trae-inspector-start-line":"38","trae-inspector-start-column":"10","trae-inspector-end-line":"47","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsxs("span",{"trae-inspector-start-line":"39","trae-inspector-start-column":"12","trae-inspector-end-line":"42","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(ft,{className:"w-3 h-3"}),o.views.toLocaleString()]}),n.jsxs("span",{"trae-inspector-start-line":"43","trae-inspector-start-column":"12","trae-inspector-end-line":"46","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/business/WechatCard.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(Ft,{className:"w-3 h-3"}),o.publishDate]})]})]})]})]})}const No=[{label:"技术文章",value:"1,286",icon:Ca,color:"from-blue-500 to-cyan-500"},{label:"临床病例",value:"892",icon:rn,color:"from-emerald-500 to-teal-500"},{label:"设备资料",value:"156",icon:Zn,color:"from-orange-500 to-amber-500"},{label:"专家学者",value:"328",icon:pr,color:"from-rose-500 to-pink-500"}],Hh=[{name:"DSA技术",desc:"数字减影血管造影",color:"bg-blue-50 text-blue-600"},{name:"神经介入",desc:"脑血管疾病诊疗",color:"bg-purple-50 text-purple-600"},{name:"心脏介入",desc:"冠心病心律失常",color:"bg-rose-50 text-rose-600"},{name:"肿瘤介入",desc:"TACE消融治疗",color:"bg-emerald-50 text-emerald-600"},{name:"外周介入",desc:"血管疾病治疗",color:"bg-orange-50 text-orange-600"},{name:"综合介入",desc:"非血管介入",color:"bg-cyan-50 text-cyan-600"}];function Uh(){const[o,l]=C.useState(""),[c,m]=C.useState(No.map(()=>0)),u=Xe();C.useEffect(()=>{const x=No.map(V=>parseInt(V.value.replace(",",""))),E=2e3,v=60,A=E/v;let D=0;const y=setInterval(()=>{D++;const V=D/v,F=1-Math.pow(1-V,3);m(x.map(N=>Math.floor(N*F))),D>=v&&clearInterval(y)},A);return()=>clearInterval(y)},[]);const h=x=>{x.preventDefault(),o.trim()&&u(`/search?q=${encodeURIComponent(o.trim())}`)},d=x=>x.toLocaleString();return n.jsxs("div",{"trae-inspector-start-line":"60","trae-inspector-start-column":"4","trae-inspector-end-line":"378","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen",children:[n.jsxs("section",{"trae-inspector-start-line":"62","trae-inspector-start-column":"6","trae-inspector-end-line":"120","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative pt-20 lg:pt-32 pb-20 lg:pb-32 overflow-hidden",children:[n.jsx("div",{"trae-inspector-start-line":"63","trae-inspector-start-column":"8","trae-inspector-end-line":"63","trae-inspector-end-column":"103","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"}),n.jsxs("div",{"trae-inspector-start-line":"64","trae-inspector-start-column":"8","trae-inspector-end-line":"67","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 opacity-20",children:[n.jsx("div",{"trae-inspector-start-line":"65","trae-inspector-start-column":"10","trae-inspector-end-line":"65","trae-inspector-end-column":"118","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"}),n.jsx("div",{"trae-inspector-start-line":"66","trae-inspector-start-column":"10","trae-inspector-end-line":"66","trae-inspector-end-column":"155","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),n.jsx("div",{"trae-inspector-start-line":"68","trae-inspector-start-column":"8","trae-inspector-end-line":"119","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{"trae-inspector-start-line":"69","trae-inspector-start-column":"10","trae-inspector-end-line":"118","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center max-w-4xl mx-auto",children:[n.jsxs("div",{"trae-inspector-start-line":"70","trae-inspector-start-column":"12","trae-inspector-end-line":"73","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8",children:[n.jsx(Xo,{className:"w-4 h-4 text-yellow-400"}),n.jsx("span",{"trae-inspector-start-line":"72","trae-inspector-start-column":"14","trae-inspector-end-line":"72","trae-inspector-end-column":"37","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%93%E4%B8%9A%E4%BB%8B%E5%85%A5%E5%BD%B1%E5%83%8F%E7%9F%A5%E8%AF%86%E5%B9%B3%E5%8F%B0%22%2C%22textStartLine%22%3A%2272%22%2C%22textStartColumn%22%3A%2220%22%2C%22textEndLine%22%3A%2272%22%2C%22textEndColumn%22%3A%2230%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"专业介入影像知识平台"})]}),n.jsxs("h1",{"trae-inspector-start-line":"74","trae-inspector-start-column":"12","trae-inspector-end-line":"80","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight",children:["探索介入影像技术",n.jsx("br",{"trae-inspector-start-line":"76","trae-inspector-start-column":"14","trae-inspector-end-line":"76","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D"}),n.jsx("span",{"trae-inspector-start-line":"77","trae-inspector-start-column":"14","trae-inspector-end-line":"79","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8A%A9%E5%8A%9B%E7%B2%BE%E5%87%86%E5%8C%BB%E7%96%97%E5%8F%91%E5%B1%95%22%2C%22textStartLine%22%3A%2277%22%2C%22textStartColumn%22%3A%22105%22%2C%22textEndLine%22%3A%2279%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",children:"助力精准医疗发展"})]}),n.jsx("p",{"trae-inspector-start-line":"81","trae-inspector-start-column":"12","trae-inspector-end-line":"83","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B1%87%E8%81%9ADSA%E6%8A%80%E6%9C%AF%E3%80%81%E4%B8%B4%E5%BA%8A%E7%97%85%E4%BE%8B%E3%80%81%E5%8E%82%E5%95%86%E8%AE%BE%E5%A4%87%E3%80%81%E4%B8%93%E5%AE%B6%E8%A7%82%E7%82%B9%EF%BC%8C%E6%89%93%E9%80%A0%E4%BB%8B%E5%85%A5%E5%8C%BB%E5%AD%A6%E5%BD%B1%E5%83%8F%E9%A2%86%E5%9F%9F%E6%9C%80%E4%B8%93%E4%B8%9A%E7%9A%84%E7%9F%A5%E8%AF%86%E4%BA%A4%E6%B5%81%E5%B9%B3%E5%8F%B0%22%2C%22textStartLine%22%3A%2281%22%2C%22textStartColumn%22%3A%2289%22%2C%22textEndLine%22%3A%2283%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed",children:"汇聚DSA技术、临床病例、厂商设备、专家观点，打造介入医学影像领域最专业的知识交流平台"}),n.jsx("form",{"trae-inspector-start-line":"85","trae-inspector-start-column":"12","trae-inspector-end-line":"102","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onSubmit:h,className:"max-w-2xl mx-auto mb-12",children:n.jsxs("div",{"trae-inspector-start-line":"86","trae-inspector-start-column":"14","trae-inspector-end-line":"101","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative",children:[n.jsx(Tr,{className:"absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"}),n.jsx("input",{"trae-inspector-start-line":"88","trae-inspector-start-column":"16","trae-inspector-end-line":"94","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",type:"text",value:o,onChange:x=>l(x.target.value),placeholder:"搜索技术文章、临床病例、设备资料、专家论文...",className:"w-full pl-14 pr-32 py-4 rounded-full text-base bg-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 text-slate-700 placeholder-slate-400"}),n.jsx("button",{"trae-inspector-start-line":"95","trae-inspector-start-column":"16","trae-inspector-end-line":"100","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%90%9C%E7%B4%A2%22%2C%22textStartLine%22%3A%2298%22%2C%22textStartColumn%22%3A%2217%22%2C%22textEndLine%22%3A%22100%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",type:"submit",className:"absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30",children:"搜索"})]})}),n.jsxs("div",{"trae-inspector-start-line":"104","trae-inspector-start-column":"12","trae-inspector-end-line":"117","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap justify-center gap-3",children:[n.jsx("span",{"trae-inspector-start-line":"105","trae-inspector-start-column":"14","trae-inspector-end-line":"105","trae-inspector-end-column":"66","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%83%AD%E9%97%A8%E6%90%9C%E7%B4%A2%EF%BC%9A%22%2C%22textStartLine%22%3A%22105%22%2C%22textStartColumn%22%3A%2254%22%2C%22textEndLine%22%3A%22105%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/50 text-sm",children:"热门搜索："}),["DSA","冠脉介入","神经介入","TACE","支架技术"].map(x=>n.jsx("button",{"trae-inspector-start-line":"107","trae-inspector-start-column":"16","trae-inspector-end-line":"115","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>{u(`/search?q=${encodeURIComponent(x)}`)},className:"px-3 py-1 rounded-full text-sm bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors border border-white/10",children:x},x))]})]})})]}),n.jsx("section",{"trae-inspector-start-line":"123","trae-inspector-start-column":"6","trae-inspector-end-line":"142","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative -mt-16 z-10",children:n.jsx("div",{"trae-inspector-start-line":"124","trae-inspector-start-column":"8","trae-inspector-end-line":"141","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{"trae-inspector-start-line":"125","trae-inspector-start-column":"10","trae-inspector-end-line":"140","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl shadow-2xl p-6 lg:p-8",children:n.jsx("div",{"trae-inspector-start-line":"126","trae-inspector-start-column":"12","trae-inspector-end-line":"139","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-2 lg:grid-cols-4 gap-6",children:No.map((x,E)=>n.jsxs("div",{"trae-inspector-start-line":"128","trae-inspector-start-column":"16","trae-inspector-end-line":"137","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center",children:[n.jsx("div",{"trae-inspector-start-line":"129","trae-inspector-start-column":"18","trae-inspector-end-line":"131","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`w-14 h-14 rounded-xl bg-gradient-to-br ${x.color} flex items-center justify-center mx-auto mb-3 shadow-lg`,children:n.jsx(x.icon,{className:"w-7 h-7 text-white"})}),n.jsxs("div",{"trae-inspector-start-line":"132","trae-inspector-start-column":"18","trae-inspector-end-line":"135","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl font-bold text-slate-800 mb-1",children:[d(c[E]),n.jsx("span",{"trae-inspector-start-line":"134","trae-inspector-start-column":"20","trae-inspector-end-line":"134","trae-inspector-end-column":"54","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%2B%22%2C%22textStartLine%22%3A%22134%22%2C%22textStartColumn%22%3A%2246%22%2C%22textEndLine%22%3A%22134%22%2C%22textEndColumn%22%3A%2247%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg",children:"+"})]}),n.jsx("div",{"trae-inspector-start-line":"136","trae-inspector-start-column":"18","trae-inspector-end-line":"136","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:x.label})]},x.label))})})})}),n.jsx("section",{"trae-inspector-start-line":"145","trae-inspector-start-column":"6","trae-inspector-end-line":"169","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-16 lg:py-20",children:n.jsxs("div",{"trae-inspector-start-line":"146","trae-inspector-start-column":"8","trae-inspector-end-line":"168","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsx("div",{"trae-inspector-start-line":"147","trae-inspector-start-column":"10","trae-inspector-end-line":"152","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-end justify-between mb-10",children:n.jsxs("div",{"trae-inspector-start-line":"148","trae-inspector-start-column":"12","trae-inspector-end-line":"151","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h2",{"trae-inspector-start-line":"149","trae-inspector-start-column":"14","trae-inspector-end-line":"149","trae-inspector-end-column":"90","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%BF%AB%E9%80%9F%E5%85%A5%E5%8F%A3%22%2C%22textStartLine%22%3A%22149%22%2C%22textStartColumn%22%3A%2281%22%2C%22textEndLine%22%3A%22149%22%2C%22textEndColumn%22%3A%2285%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl lg:text-3xl font-bold text-slate-800 mb-2",children:"快速入口"}),n.jsx("p",{"trae-inspector-start-line":"150","trae-inspector-start-column":"14","trae-inspector-end-line":"150","trae-inspector-end-column":"63","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%8C%89%E6%8A%80%E6%9C%AF%E5%88%86%E7%B1%BB%E5%BF%AB%E9%80%9F%E6%89%BE%E5%88%B0%E6%82%A8%E9%9C%80%E8%A6%81%E7%9A%84%E5%86%85%E5%AE%B9%22%2C%22textStartLine%22%3A%22150%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22150%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500",children:"按技术分类快速找到您需要的内容"})]})}),n.jsx("div",{"trae-inspector-start-line":"153","trae-inspector-start-column":"10","trae-inspector-end-line":"167","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",children:Hh.map(x=>n.jsxs("button",{"trae-inspector-start-line":"155","trae-inspector-start-column":"14","trae-inspector-end-line":"165","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u("/technology"),className:"p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-left group border border-slate-100 hover:border-blue-200",children:[n.jsx("div",{"trae-inspector-start-line":"160","trae-inspector-start-column":"16","trae-inspector-end-line":"162","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`w-12 h-12 rounded-lg ${x.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`,children:n.jsx(O0,{className:"w-6 h-6"})}),n.jsx("h3",{"trae-inspector-start-line":"163","trae-inspector-start-column":"16","trae-inspector-end-line":"163","trae-inspector-end-column":"83","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-1",children:x.name}),n.jsx("p",{"trae-inspector-start-line":"164","trae-inspector-start-column":"16","trae-inspector-end-line":"164","trae-inspector-end-column":"70","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-500",children:x.desc})]},x.name))})]})}),n.jsx("section",{"trae-inspector-start-line":"172","trae-inspector-start-column":"6","trae-inspector-end-line":"205","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-16 lg:py-20 bg-white",children:n.jsxs("div",{"trae-inspector-start-line":"173","trae-inspector-start-column":"8","trae-inspector-end-line":"204","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{"trae-inspector-start-line":"174","trae-inspector-start-column":"10","trae-inspector-end-line":"185","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-end justify-between mb-10",children:[n.jsxs("div",{"trae-inspector-start-line":"175","trae-inspector-start-column":"12","trae-inspector-end-line":"178","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h2",{"trae-inspector-start-line":"176","trae-inspector-start-column":"14","trae-inspector-end-line":"176","trae-inspector-end-column":"90","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8E%82%E5%95%86%E4%B8%93%E5%8C%BA%22%2C%22textStartLine%22%3A%22176%22%2C%22textStartColumn%22%3A%2281%22%2C%22textEndLine%22%3A%22176%22%2C%22textEndColumn%22%3A%2285%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl lg:text-3xl font-bold text-slate-800 mb-2",children:"厂商专区"}),n.jsx("p",{"trae-inspector-start-line":"177","trae-inspector-start-column":"14","trae-inspector-end-line":"177","trae-inspector-end-column":"66","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%BB%E6%B5%81DSA%E8%AE%BE%E5%A4%87%E5%93%81%E7%89%8C%E4%BA%A7%E5%93%81%E8%B5%84%E6%96%99%E4%B8%8E%E6%8A%80%E6%9C%AF%E5%AF%B9%E6%AF%94%22%2C%22textStartLine%22%3A%22177%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22177%22%2C%22textEndColumn%22%3A%2262%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500",children:"主流DSA设备品牌产品资料与技术对比"})]}),n.jsxs("button",{"trae-inspector-start-line":"179","trae-inspector-start-column":"12","trae-inspector-end-line":"184","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u("/equipment"),className:"flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm",children:["查看全部 ",n.jsx(ct,{className:"w-4 h-4"})]})]}),n.jsx("div",{"trae-inspector-start-line":"186","trae-inspector-start-column":"10","trae-inspector-end-line":"203","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",children:zp.map(x=>n.jsxs("button",{"trae-inspector-start-line":"188","trae-inspector-start-column":"14","trae-inspector-end-line":"201","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u(`/equipment/brand/${x}`),className:"p-6 bg-slate-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-300 text-center group border border-slate-100 hover:border-blue-200",children:[n.jsx("div",{"trae-inspector-start-line":"193","trae-inspector-start-column":"16","trae-inspector-end-line":"197","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-16 h-16 mx-auto mb-3 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow",children:n.jsx("span",{"trae-inspector-start-line":"194","trae-inspector-start-column":"18","trae-inspector-end-line":"196","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent",children:x.charAt(0)})}),n.jsx("h3",{"trae-inspector-start-line":"198","trae-inspector-start-column":"16","trae-inspector-end-line":"200","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-medium text-slate-700 group-hover:text-blue-600 transition-colors",children:x})]},x))})]})}),n.jsx("section",{"trae-inspector-start-line":"208","trae-inspector-start-column":"6","trae-inspector-end-line":"235","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-16 lg:py-20 bg-slate-50",children:n.jsxs("div",{"trae-inspector-start-line":"209","trae-inspector-start-column":"8","trae-inspector-end-line":"234","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{"trae-inspector-start-line":"210","trae-inspector-start-column":"10","trae-inspector-end-line":"224","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-end justify-between mb-10",children:[n.jsxs("div",{"trae-inspector-start-line":"211","trae-inspector-start-column":"12","trae-inspector-end-line":"217","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsxs("h2",{"trae-inspector-start-line":"212","trae-inspector-start-column":"14","trae-inspector-end-line":"215","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl lg:text-3xl font-bold text-slate-800 mb-2",children:[n.jsx(Vp,{className:"w-6 h-6 inline-block mr-2 text-blue-600"}),"最新技术文章"]}),n.jsx("p",{"trae-inspector-start-line":"216","trae-inspector-start-column":"14","trae-inspector-end-line":"216","trae-inspector-end-column":"65","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BB%8B%E5%85%A5%E5%BD%B1%E5%83%8F%E9%A2%86%E5%9F%9F%E6%9C%80%E6%96%B0%E6%8A%80%E6%9C%AF%E8%BF%9B%E5%B1%95%E4%B8%8E%E7%A0%94%E7%A9%B6%E6%88%90%E6%9E%9C%22%2C%22textStartLine%22%3A%22216%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22216%22%2C%22textEndColumn%22%3A%2261%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500",children:"介入影像领域最新技术进展与研究成果"})]}),n.jsxs("button",{"trae-inspector-start-line":"218","trae-inspector-start-column":"12","trae-inspector-end-line":"223","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u("/technology"),className:"flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm",children:["查看全部 ",n.jsx(ct,{className:"w-4 h-4"})]})]}),n.jsx("div",{"trae-inspector-start-line":"225","trae-inspector-start-column":"10","trae-inspector-end-line":"233","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-4",children:kr.slice(0,4).map(x=>n.jsx(Op,{article:x,onClick:()=>u(`/technology/${x.id}`)},x.id))})]})}),n.jsx("section",{"trae-inspector-start-line":"238","trae-inspector-start-column":"6","trae-inspector-end-line":"262","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-16 lg:py-20 bg-white",children:n.jsxs("div",{"trae-inspector-start-line":"239","trae-inspector-start-column":"8","trae-inspector-end-line":"261","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{"trae-inspector-start-line":"240","trae-inspector-start-column":"10","trae-inspector-end-line":"251","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-end justify-between mb-10",children:[n.jsxs("div",{"trae-inspector-start-line":"241","trae-inspector-start-column":"12","trae-inspector-end-line":"244","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h2",{"trae-inspector-start-line":"242","trae-inspector-start-column":"14","trae-inspector-end-line":"242","trae-inspector-end-column":"90","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%B2%BE%E9%80%89%E7%97%85%E4%BE%8B%22%2C%22textStartLine%22%3A%22242%22%2C%22textStartColumn%22%3A%2281%22%2C%22textEndLine%22%3A%22242%22%2C%22textEndColumn%22%3A%2285%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl lg:text-3xl font-bold text-slate-800 mb-2",children:"精选病例"}),n.jsx("p",{"trae-inspector-start-line":"243","trae-inspector-start-column":"14","trae-inspector-end-line":"243","trae-inspector-end-column":"65","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%9C%9F%E5%AE%9E%E4%B8%B4%E5%BA%8A%E7%97%85%E4%BE%8B%E5%88%86%E4%BA%AB%EF%BC%8C%E5%8A%A9%E5%8A%9B%E8%AF%8A%E7%96%97%E6%B0%B4%E5%B9%B3%E6%8F%90%E5%8D%87%22%2C%22textStartLine%22%3A%22243%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22243%22%2C%22textEndColumn%22%3A%2261%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500",children:"真实临床病例分享，助力诊疗水平提升"})]}),n.jsxs("button",{"trae-inspector-start-line":"245","trae-inspector-start-column":"12","trae-inspector-end-line":"250","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u("/cases"),className:"flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm",children:["查看全部 ",n.jsx(ct,{className:"w-4 h-4"})]})]}),n.jsx("div",{"trae-inspector-start-line":"252","trae-inspector-start-column":"10","trae-inspector-end-line":"260","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:ka.slice(0,3).map(x=>n.jsx(Hp,{caseData:x,onClick:()=>u(`/cases/${x.id}`)},x.id))})]})}),n.jsx("section",{"trae-inspector-start-line":"265","trae-inspector-start-column":"6","trae-inspector-end-line":"309","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-16 lg:py-20 bg-slate-50",children:n.jsxs("div",{"trae-inspector-start-line":"266","trae-inspector-start-column":"8","trae-inspector-end-line":"308","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{"trae-inspector-start-line":"267","trae-inspector-start-column":"10","trae-inspector-end-line":"278","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-end justify-between mb-10",children:[n.jsxs("div",{"trae-inspector-start-line":"268","trae-inspector-start-column":"12","trae-inspector-end-line":"271","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h2",{"trae-inspector-start-line":"269","trae-inspector-start-column":"14","trae-inspector-end-line":"269","trae-inspector-end-column":"90","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%93%E5%AE%B6%E4%B8%93%E6%A0%8F%22%2C%22textStartLine%22%3A%22269%22%2C%22textStartColumn%22%3A%2281%22%2C%22textEndLine%22%3A%22269%22%2C%22textEndColumn%22%3A%2285%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl lg:text-3xl font-bold text-slate-800 mb-2",children:"专家专栏"}),n.jsx("p",{"trae-inspector-start-line":"270","trae-inspector-start-column":"14","trae-inspector-end-line":"270","trae-inspector-end-column":"63","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%A2%86%E5%9F%9F%E7%9F%A5%E5%90%8D%E4%B8%93%E5%AE%B6%E6%9C%80%E6%96%B0%E8%A7%82%E7%82%B9%E4%B8%8E%E5%AD%A6%E6%9C%AF%E8%AE%BA%E6%96%87%22%2C%22textStartLine%22%3A%22270%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22270%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500",children:"领域知名专家最新观点与学术论文"})]}),n.jsxs("button",{"trae-inspector-start-line":"272","trae-inspector-start-column":"12","trae-inspector-end-line":"277","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u("/experts"),className:"flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm",children:["查看全部 ",n.jsx(ct,{className:"w-4 h-4"})]})]}),n.jsx("div",{"trae-inspector-start-line":"279","trae-inspector-start-column":"10","trae-inspector-end-line":"307","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Sr.slice(0,3).map(x=>n.jsxs("div",{"trae-inspector-start-line":"281","trae-inspector-start-column":"14","trae-inspector-end-line":"305","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u(`/experts/${x.id}`),className:"bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-100",children:[n.jsxs("div",{"trae-inspector-start-line":"286","trae-inspector-start-column":"16","trae-inspector-end-line":"297","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start gap-4 mb-4",children:[n.jsx("img",{"trae-inspector-start-line":"287","trae-inspector-start-column":"18","trae-inspector-end-line":"291","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:x.avatar,alt:x.name,className:"w-16 h-16 rounded-full object-cover flex-shrink-0"}),n.jsxs("div",{"trae-inspector-start-line":"292","trae-inspector-start-column":"18","trae-inspector-end-line":"296","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1 min-w-0",children:[n.jsx("h3",{"trae-inspector-start-line":"293","trae-inspector-start-column":"20","trae-inspector-end-line":"293","trae-inspector-end-column":"87","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-bold text-slate-800 text-lg",children:x.name}),n.jsx("p",{"trae-inspector-start-line":"294","trae-inspector-start-column":"20","trae-inspector-end-line":"294","trae-inspector-end-column":"87","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-blue-600 font-medium",children:x.title}),n.jsx("p",{"trae-inspector-start-line":"295","trae-inspector-start-column":"20","trae-inspector-end-line":"295","trae-inspector-end-column":"88","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500 truncate",children:x.hospital})]})]}),n.jsx("p",{"trae-inspector-start-line":"298","trae-inspector-start-column":"16","trae-inspector-end-line":"298","trae-inspector-end-column":"88","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-600 line-clamp-2 mb-4",children:x.bio}),n.jsxs("div",{"trae-inspector-start-line":"299","trae-inspector-start-column":"16","trae-inspector-end-line":"304","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[n.jsxs("span",{"trae-inspector-start-line":"300","trae-inspector-start-column":"18","trae-inspector-end-line":"302","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:["发表文章 ",n.jsx("span",{"trae-inspector-start-line":"301","trae-inspector-start-column":"25","trae-inspector-end-line":"301","trae-inspector-end-column":"100","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-700",children:x.articleCount})," 篇"]}),n.jsx("span",{"trae-inspector-start-line":"303","trae-inspector-start-column":"18","trae-inspector-end-line":"303","trae-inspector-end-column":"83","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9F%A5%E7%9C%8B%E4%B8%BB%E9%A1%B5%20%E2%86%92%22%2C%22textStartLine%22%3A%22303%22%2C%22textStartColumn%22%3A%2270%22%2C%22textEndLine%22%3A%22303%22%2C%22textEndColumn%22%3A%2276%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-blue-600 text-sm font-medium",children:"查看主页 →"})]})]},x.id))})]})}),n.jsx("section",{"trae-inspector-start-line":"312","trae-inspector-start-column":"6","trae-inspector-end-line":"338","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-16 lg:py-20 bg-white",children:n.jsxs("div",{"trae-inspector-start-line":"313","trae-inspector-start-column":"8","trae-inspector-end-line":"337","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{"trae-inspector-start-line":"314","trae-inspector-start-column":"10","trae-inspector-end-line":"328","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-end justify-between mb-10",children:[n.jsxs("div",{"trae-inspector-start-line":"315","trae-inspector-start-column":"12","trae-inspector-end-line":"321","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsxs("h2",{"trae-inspector-start-line":"316","trae-inspector-start-column":"14","trae-inspector-end-line":"319","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl lg:text-3xl font-bold text-slate-800 mb-2",children:[n.jsx(yr,{className:"w-6 h-6 inline-block mr-2 text-green-600"}),"公众号精选"]}),n.jsx("p",{"trae-inspector-start-line":"320","trae-inspector-start-column":"14","trae-inspector-end-line":"320","trae-inspector-end-column":"61","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%A1%8C%E4%B8%9A%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BC%98%E8%B4%A8%E5%86%85%E5%AE%B9%E8%81%9A%E5%90%88%E6%9B%B4%E6%96%B0%22%2C%22textStartLine%22%3A%22320%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22320%22%2C%22textEndColumn%22%3A%2257%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500",children:"行业公众号优质内容聚合更新"})]}),n.jsxs("button",{"trae-inspector-start-line":"322","trae-inspector-start-column":"12","trae-inspector-end-line":"327","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u("/wechat"),className:"flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm",children:["查看全部 ",n.jsx(ct,{className:"w-4 h-4"})]})]}),n.jsx("div",{"trae-inspector-start-line":"329","trae-inspector-start-column":"10","trae-inspector-end-line":"336","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:Fr.slice(0,4).map(x=>n.jsx(Up,{article:x},x.id))})]})}),n.jsx("section",{"trae-inspector-start-line":"341","trae-inspector-start-column":"6","trae-inspector-end-line":"377","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white",children:n.jsxs("div",{"trae-inspector-start-line":"342","trae-inspector-start-column":"8","trae-inspector-end-line":"376","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{"trae-inspector-start-line":"343","trae-inspector-start-column":"10","trae-inspector-end-line":"346","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center mb-12",children:[n.jsx("h2",{"trae-inspector-start-line":"344","trae-inspector-start-column":"12","trae-inspector-end-line":"344","trae-inspector-end-column":"73","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%83%AD%E9%97%A8%E8%AE%BE%E5%A4%87%22%2C%22textStartLine%22%3A%22344%22%2C%22textStartColumn%22%3A%2264%22%2C%22textEndLine%22%3A%22344%22%2C%22textEndColumn%22%3A%2268%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl lg:text-3xl font-bold mb-3",children:"热门设备"}),n.jsx("p",{"trae-inspector-start-line":"345","trae-inspector-start-column":"12","trae-inspector-end-line":"345","trae-inspector-end-column":"60","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%90%84%E5%A4%A7%E5%93%81%E7%89%8C%E6%97%97%E8%88%B0DSA%E8%AE%BE%E5%A4%87%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D%22%2C%22textStartLine%22%3A%22345%22%2C%22textStartColumn%22%3A%2241%22%2C%22textEndLine%22%3A%22345%22%2C%22textEndColumn%22%3A%2256%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/60",children:"各大品牌旗舰DSA设备详细介绍"})]}),n.jsx("div",{"trae-inspector-start-line":"347","trae-inspector-start-column":"10","trae-inspector-end-line":"375","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:lr.slice(0,3).map(x=>n.jsxs("div",{"trae-inspector-start-line":"349","trae-inspector-start-column":"14","trae-inspector-end-line":"373","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u("/equipment"),className:"bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 group",children:[n.jsx("div",{"trae-inspector-start-line":"354","trae-inspector-start-column":"16","trae-inspector-end-line":"360","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"h-48 overflow-hidden",children:n.jsx("img",{"trae-inspector-start-line":"355","trae-inspector-start-column":"18","trae-inspector-end-line":"359","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:x.images[0],alt:x.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),n.jsxs("div",{"trae-inspector-start-line":"361","trae-inspector-start-column":"16","trae-inspector-end-line":"372","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-5",children:[n.jsxs("div",{"trae-inspector-start-line":"362","trae-inspector-start-column":"18","trae-inspector-end-line":"367","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2 mb-2",children:[n.jsx("span",{"trae-inspector-start-line":"363","trae-inspector-start-column":"20","trae-inspector-end-line":"365","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-2 py-0.5 rounded text-xs bg-blue-500/30 text-blue-200",children:x.brand}),n.jsx("span",{"trae-inspector-start-line":"366","trae-inspector-start-column":"20","trae-inspector-end-line":"366","trae-inspector-end-column":"80","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-white/50",children:x.model})]}),n.jsx("h3",{"trae-inspector-start-line":"368","trae-inspector-start-column":"18","trae-inspector-end-line":"370","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors",children:x.name}),n.jsx("p",{"trae-inspector-start-line":"371","trae-inspector-start-column":"18","trae-inspector-end-line":"371","trae-inspector-end-column":"91","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-white/60 line-clamp-2",children:x.description})]})]},x.id))})]})})]})}function qh(){const o=Xe(),[l,c]=C.useState("all"),[m,u]=C.useState("time"),[h,d]=C.useState("list"),x=C.useMemo(()=>{var A;let v=[...kr];if(l!=="all"){const D=(A=ma.find(y=>y.id===l))==null?void 0:A.name;D&&(v=v.filter(y=>y.category===D))}return m==="time"?v.sort((D,y)=>new Date(y.publishDate).getTime()-new Date(D.publishDate).getTime()):v.sort((D,y)=>y.views-D.views),v},[l,m]),E=v=>{var D;if(v==="all")return kr.length;const A=(D=ma.find(y=>y.id===v))==null?void 0:D.name;return A?kr.filter(y=>y.category===A).length:0};return n.jsxs("div",{"trae-inspector-start-line":"44","trae-inspector-start-column":"4","trae-inspector-end-line":"272","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[n.jsx("div",{"trae-inspector-start-line":"46","trae-inspector-start-column":"6","trae-inspector-end-line":"69","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white",children:n.jsxs("div",{"trae-inspector-start-line":"47","trae-inspector-start-column":"8","trae-inspector-end-line":"68","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsxs("div",{"trae-inspector-start-line":"48","trae-inspector-start-column":"10","trae-inspector-end-line":"58","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2 text-sm text-blue-100 mb-4",children:[n.jsxs("button",{"trae-inspector-start-line":"49","trae-inspector-start-column":"12","trae-inspector-end-line":"55","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>o("/"),className:"flex items-center gap-1 hover:text-white transition-colors",children:[n.jsx(oh,{className:"w-4 h-4"}),"首页"]}),n.jsx(ct,{className:"w-4 h-4"}),n.jsx("span",{"trae-inspector-start-line":"57","trae-inspector-start-column":"12","trae-inspector-end-line":"57","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%8A%80%E6%9C%AF%E5%BA%93%22%2C%22textStartLine%22%3A%2257%22%2C%22textStartColumn%22%3A%2218%22%2C%22textEndLine%22%3A%2257%22%2C%22textEndColumn%22%3A%2221%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"技术库"})]}),n.jsxs("div",{"trae-inspector-start-line":"59","trae-inspector-start-column":"10","trae-inspector-end-line":"67","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsx("div",{"trae-inspector-start-line":"60","trae-inspector-start-column":"12","trae-inspector-end-line":"62","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center",children:n.jsx(Ca,{className:"w-6 h-6"})}),n.jsxs("div",{"trae-inspector-start-line":"63","trae-inspector-start-column":"12","trae-inspector-end-line":"66","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h1",{"trae-inspector-start-line":"64","trae-inspector-start-column":"14","trae-inspector-end-line":"64","trae-inspector-end-column":"73","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BB%8B%E5%85%A5%E5%BD%B1%E5%83%8F%E6%8A%80%E6%9C%AF%E5%BA%93%22%2C%22textStartLine%22%3A%2264%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%2264%22%2C%22textEndColumn%22%3A%2268%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl sm:text-3xl font-bold",children:"介入影像技术库"}),n.jsx("p",{"trae-inspector-start-line":"65","trae-inspector-start-column":"14","trae-inspector-end-line":"65","trae-inspector-end-column":"72","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%A8%E9%9D%A2%E7%9A%84%E4%BB%8B%E5%85%A5%E5%BD%B1%E5%83%8F%E6%8A%80%E6%9C%AF%E8%B5%84%E6%96%99%EF%BC%8C%E5%8A%A9%E6%82%A8%E6%8F%90%E5%8D%87%E4%B8%93%E4%B8%9A%E6%B0%B4%E5%B9%B3%22%2C%22textStartLine%22%3A%2265%22%2C%22textStartColumn%22%3A%2248%22%2C%22textEndLine%22%3A%2265%22%2C%22textEndColumn%22%3A%2268%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-blue-100 mt-1",children:"全面的介入影像技术资料，助您提升专业水平"})]})]})]})}),n.jsxs("div",{"trae-inspector-start-line":"71","trae-inspector-start-column":"6","trae-inspector-end-line":"271","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[n.jsx("div",{"trae-inspector-start-line":"73","trae-inspector-start-column":"8","trae-inspector-end-line":"101","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:hidden mb-6 -mx-4 px-4 overflow-x-auto scrollbar-hide",children:n.jsxs("div",{"trae-inspector-start-line":"74","trae-inspector-start-column":"10","trae-inspector-end-line":"100","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex gap-2 pb-2",children:[n.jsxs("button",{"trae-inspector-start-line":"75","trae-inspector-start-column":"12","trae-inspector-end-line":"85","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>c("all"),className:`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${l==="all"?"bg-blue-600 text-white shadow-md":"bg-white text-slate-600 hover:bg-blue-50 border border-slate-200"}`,children:["全部",n.jsxs("span",{"trae-inspector-start-line":"84","trae-inspector-start-column":"14","trae-inspector-end-line":"84","trae-inspector-end-column":"90","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"ml-1 text-xs opacity-75",children:["(",E("all"),")"]})]}),ma.slice(0,6).map(v=>n.jsxs("button",{"trae-inspector-start-line":"87","trae-inspector-start-column":"14","trae-inspector-end-line":"98","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>c(v.id),className:`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${l===v.id?"bg-blue-600 text-white shadow-md":"bg-white text-slate-600 hover:bg-blue-50 border border-slate-200"}`,children:[v.name,n.jsxs("span",{"trae-inspector-start-line":"97","trae-inspector-start-column":"16","trae-inspector-end-line":"97","trae-inspector-end-column":"98","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"ml-1 text-xs opacity-75",children:["(",E(v.id),")"]})]},v.id))]})}),n.jsxs("div",{"trae-inspector-start-line":"103","trae-inspector-start-column":"8","trae-inspector-end-line":"270","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-col lg:flex-row gap-8",children:[n.jsx("aside",{"trae-inspector-start-line":"105","trae-inspector-start-column":"10","trae-inspector-end-line":"157","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hidden lg:block w-64 flex-shrink-0",children:n.jsxs("div",{"trae-inspector-start-line":"106","trae-inspector-start-column":"12","trae-inspector-end-line":"156","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 sticky top-24",children:[n.jsx("div",{"trae-inspector-start-line":"107","trae-inspector-start-column":"14","trae-inspector-end-line":"112","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-5 border-b border-slate-100",children:n.jsxs("h3",{"trae-inspector-start-line":"108","trae-inspector-start-column":"16","trae-inspector-end-line":"111","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 flex items-center gap-2",children:[n.jsx(ip,{className:"w-5 h-5 text-blue-600"}),"技术分类"]})}),n.jsxs("div",{"trae-inspector-start-line":"113","trae-inspector-start-column":"14","trae-inspector-end-line":"155","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-3",children:[n.jsx("button",{"trae-inspector-start-line":"114","trae-inspector-start-column":"16","trae-inspector-end-line":"132","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>c("all"),className:`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all mb-1 ${l==="all"?"bg-blue-50 text-blue-700 border-l-4 border-blue-600":"text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"}`,children:n.jsxs("div",{"trae-inspector-start-line":"122","trae-inspector-start-column":"18","trae-inspector-end-line":"131","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"123","trae-inspector-start-column":"20","trae-inspector-end-line":"123","trae-inspector-end-column":"37","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%A8%E9%83%A8%E6%8A%80%E6%9C%AF%22%2C%22textStartLine%22%3A%22123%22%2C%22textStartColumn%22%3A%2226%22%2C%22textEndLine%22%3A%22123%22%2C%22textEndColumn%22%3A%2230%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"全部技术"}),n.jsx("span",{"trae-inspector-start-line":"124","trae-inspector-start-column":"20","trae-inspector-end-line":"130","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`text-xs px-2 py-0.5 rounded-full ${l==="all"?"bg-blue-600 text-white":"bg-slate-100 text-slate-500"}`,children:E("all")})]})}),ma.map(v=>n.jsx("button",{"trae-inspector-start-line":"134","trae-inspector-start-column":"18","trae-inspector-end-line":"153","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>c(v.id),className:`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all mb-1 ${l===v.id?"bg-blue-50 text-blue-700 border-l-4 border-blue-600":"text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"}`,children:n.jsxs("div",{"trae-inspector-start-line":"143","trae-inspector-start-column":"20","trae-inspector-end-line":"152","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"144","trae-inspector-start-column":"22","trae-inspector-end-line":"144","trae-inspector-end-column":"50","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:v.name}),n.jsx("span",{"trae-inspector-start-line":"145","trae-inspector-start-column":"22","trae-inspector-end-line":"151","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`text-xs px-2 py-0.5 rounded-full ${l===v.id?"bg-blue-600 text-white":"bg-slate-100 text-slate-500"}`,children:E(v.id)})]})},v.id))]})]})}),n.jsxs("main",{"trae-inspector-start-line":"160","trae-inspector-start-column":"10","trae-inspector-end-line":"269","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1 min-w-0",children:[n.jsx("div",{"trae-inspector-start-line":"162","trae-inspector-start-column":"12","trae-inspector-end-line":"218","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-6",children:n.jsxs("div",{"trae-inspector-start-line":"163","trae-inspector-start-column":"14","trae-inspector-end-line":"217","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[n.jsxs("div",{"trae-inspector-start-line":"164","trae-inspector-start-column":"16","trae-inspector-end-line":"168","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2 text-sm text-slate-500",children:[n.jsx("span",{"trae-inspector-start-line":"165","trae-inspector-start-column":"18","trae-inspector-end-line":"165","trae-inspector-end-column":"34","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%B1%E6%89%BE%E5%88%B0%22%2C%22textStartLine%22%3A%22165%22%2C%22textStartColumn%22%3A%2224%22%2C%22textEndLine%22%3A%22165%22%2C%22textEndColumn%22%3A%2227%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"共找到"}),n.jsx("span",{"trae-inspector-start-line":"166","trae-inspector-start-column":"18","trae-inspector-end-line":"166","trae-inspector-end-column":"96","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-blue-600",children:x.length}),n.jsx("span",{"trae-inspector-start-line":"167","trae-inspector-start-column":"18","trae-inspector-end-line":"167","trae-inspector-end-column":"34","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%AF%87%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22167%22%2C%22textStartColumn%22%3A%2224%22%2C%22textEndLine%22%3A%22167%22%2C%22textEndColumn%22%3A%2227%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"篇文章"})]}),n.jsxs("div",{"trae-inspector-start-line":"169","trae-inspector-start-column":"16","trae-inspector-end-line":"216","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4",children:[n.jsxs("div",{"trae-inspector-start-line":"170","trae-inspector-start-column":"18","trae-inspector-end-line":"193","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1 bg-slate-100 rounded-lg p-1",children:[n.jsxs("button",{"trae-inspector-start-line":"171","trae-inspector-start-column":"20","trae-inspector-end-line":"181","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u("time"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${m==="time"?"bg-white text-blue-600 shadow-sm":"text-slate-500 hover:text-slate-700"}`,children:[n.jsx(Sa,{className:"w-4 h-4"}),"最新"]}),n.jsxs("button",{"trae-inspector-start-line":"182","trae-inspector-start-column":"20","trae-inspector-end-line":"192","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>u("views"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${m==="views"?"bg-white text-blue-600 shadow-sm":"text-slate-500 hover:text-slate-700"}`,children:[n.jsx(Vp,{className:"w-4 h-4"}),"热度"]})]}),n.jsxs("div",{"trae-inspector-start-line":"194","trae-inspector-start-column":"18","trae-inspector-end-line":"215","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hidden sm:flex items-center gap-1 bg-slate-100 rounded-lg p-1",children:[n.jsx("button",{"trae-inspector-start-line":"195","trae-inspector-start-column":"20","trae-inspector-end-line":"204","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>d("list"),className:`p-1.5 rounded-md transition-all ${h==="list"?"bg-white text-blue-600 shadow-sm":"text-slate-400 hover:text-slate-600"}`,children:n.jsx(uh,{className:"w-4 h-4"})}),n.jsx("button",{"trae-inspector-start-line":"205","trae-inspector-start-column":"20","trae-inspector-end-line":"214","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>d("grid"),className:`p-1.5 rounded-md transition-all ${h==="grid"?"bg-white text-blue-600 shadow-sm":"text-slate-400 hover:text-slate-600"}`,children:n.jsx(ip,{className:"w-4 h-4"})})]})]})]})}),x.length>0?n.jsx("div",{"trae-inspector-start-line":"222","trae-inspector-start-column":"14","trae-inspector-end-line":"230","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-4",children:x.map(v=>n.jsx(Op,{article:v,onClick:()=>o(`/technology/${v.id}`)},v.id))}):n.jsxs("div",{"trae-inspector-start-line":"232","trae-inspector-start-column":"14","trae-inspector-end-line":"244","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-12 text-center",children:[n.jsx("div",{"trae-inspector-start-line":"233","trae-inspector-start-column":"16","trae-inspector-end-line":"235","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center",children:n.jsx(Ca,{className:"w-8 h-8 text-slate-400"})}),n.jsx("h3",{"trae-inspector-start-line":"236","trae-inspector-start-column":"16","trae-inspector-end-line":"236","trae-inspector-end-column":"83","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9A%82%E6%97%A0%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22236%22%2C%22textStartColumn%22%3A%2272%22%2C%22textEndLine%22%3A%22236%22%2C%22textEndColumn%22%3A%2278%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-medium text-slate-700 mb-2",children:"暂无相关文章"}),n.jsx("p",{"trae-inspector-start-line":"237","trae-inspector-start-column":"16","trae-inspector-end-line":"237","trae-inspector-end-column":"81","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AF%A5%E5%88%86%E7%B1%BB%E4%B8%8B%E6%9A%82%E6%97%A0%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0%EF%BC%8C%E8%AF%B7%E5%B0%9D%E8%AF%95%E5%85%B6%E4%BB%96%E5%88%86%E7%B1%BB%22%2C%22textStartLine%22%3A%22237%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22237%22%2C%22textEndColumn%22%3A%2277%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500 mb-4",children:"该分类下暂无技术文章，请尝试其他分类"}),n.jsx("button",{"trae-inspector-start-line":"238","trae-inspector-start-column":"16","trae-inspector-end-line":"243","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9F%A5%E7%9C%8B%E5%85%A8%E9%83%A8%E6%96%87%E7%AB%A0%20%E2%86%92%22%2C%22textStartLine%22%3A%22241%22%2C%22textStartColumn%22%3A%2217%22%2C%22textEndLine%22%3A%22243%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>c("all"),className:"text-blue-600 hover:text-blue-700 font-medium text-sm",children:"查看全部文章 →"})]}),x.length>0&&n.jsx("div",{"trae-inspector-start-line":"249","trae-inspector-start-column":"14","trae-inspector-end-line":"267","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mt-8 flex justify-center",children:n.jsxs("div",{"trae-inspector-start-line":"250","trae-inspector-start-column":"16","trae-inspector-end-line":"266","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx("button",{"trae-inspector-start-line":"251","trae-inspector-start-column":"18","trae-inspector-end-line":"253","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%8A%E4%B8%80%E9%A1%B5%22%2C%22textStartLine%22%3A%22251%22%2C%22textStartColumn%22%3A%22142%22%2C%22textEndLine%22%3A%22253%22%2C%22textEndColumn%22%3A%2218%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-4 py-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 text-sm transition-colors",children:"上一页"}),n.jsx("button",{"trae-inspector-start-line":"254","trae-inspector-start-column":"18","trae-inspector-end-line":"256","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%221%22%2C%22textStartLine%22%3A%22254%22%2C%22textStartColumn%22%3A%22102%22%2C%22textEndLine%22%3A%22256%22%2C%22textEndColumn%22%3A%2218%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium",children:"1"}),n.jsx("button",{"trae-inspector-start-line":"257","trae-inspector-start-column":"18","trae-inspector-end-line":"259","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%222%22%2C%22textStartLine%22%3A%22257%22%2C%22textStartColumn%22%3A%22142%22%2C%22textEndLine%22%3A%22259%22%2C%22textEndColumn%22%3A%2218%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm transition-colors",children:"2"}),n.jsx("button",{"trae-inspector-start-line":"260","trae-inspector-start-column":"18","trae-inspector-end-line":"262","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%223%22%2C%22textStartLine%22%3A%22260%22%2C%22textStartColumn%22%3A%22142%22%2C%22textEndLine%22%3A%22262%22%2C%22textEndColumn%22%3A%2218%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm transition-colors",children:"3"}),n.jsx("button",{"trae-inspector-start-line":"263","trae-inspector-start-column":"18","trae-inspector-end-line":"265","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Technology.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%8B%E4%B8%80%E9%A1%B5%22%2C%22textStartLine%22%3A%22263%22%2C%22textStartColumn%22%3A%22142%22%2C%22textEndLine%22%3A%22265%22%2C%22textEndColumn%22%3A%2218%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-4 py-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 text-sm transition-colors",children:"下一页"})]})})]})]})]})]})}function Wh(){const{id:o}=sn(),l=Xe(),[c,m]=C.useState(!1),[u,h]=C.useState(!1),d=C.useMemo(()=>kr.find(A=>A.id===o),[o]),x=C.useMemo(()=>d?kr.filter(A=>A.id!==d.id&&(A.category===d.category||A.tags.some(D=>d.tags.includes(D)))).slice(0,3):[],[d]),E=A=>{const D=A.split(`
`),y=[];let V=0;for(let F=0;F<D.length;F++){const N=D[F];if(N.startsWith("## "))y.push(n.jsx("h2",{"trae-inspector-start-line":"45","trae-inspector-start-column":"10","trae-inspector-end-line":"47","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800 mt-8 mb-4 pb-2 border-b border-slate-200",children:N.replace("## ","")},V++));else if(N.startsWith("### "))y.push(n.jsx("h3",{"trae-inspector-start-line":"51","trae-inspector-start-column":"10","trae-inspector-end-line":"53","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold text-slate-800 mt-6 mb-3",children:N.replace("### ","")},V++));else if(N.startsWith("- ")){const b=[];for(;F<D.length&&D[F].startsWith("- ");)b.push(D[F].replace("- ","")),F++;F--,y.push(n.jsx("ul",{"trae-inspector-start-line":"63","trae-inspector-start-column":"10","trae-inspector-end-line":"67","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"list-disc list-inside space-y-2 my-4 text-slate-600",children:b.map((M,G)=>n.jsx("li",{"trae-inspector-start-line":"65","trae-inspector-start-column":"14","trae-inspector-end-line":"65","trae-inspector-end-column":"39","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:M},G))},V++))}else if(/^\d+\.\s/.test(N)){const b=[];for(;F<D.length&&/^\d+\.\s/.test(D[F]);)b.push(D[F].replace(/^\d+\.\s/,"")),F++;F--,y.push(n.jsx("ol",{"trae-inspector-start-line":"77","trae-inspector-start-column":"10","trae-inspector-end-line":"81","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"list-decimal list-inside space-y-2 my-4 text-slate-600",children:b.map((M,G)=>n.jsx("li",{"trae-inspector-start-line":"79","trae-inspector-start-column":"14","trae-inspector-end-line":"79","trae-inspector-end-column":"39","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:M},G))},V++))}else N.trim()!==""&&y.push(n.jsx("p",{"trae-inspector-start-line":"85","trae-inspector-start-column":"10","trae-inspector-end-line":"87","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 leading-relaxed mb-4",children:N},V++))}return y},v=()=>{h(!0),setTimeout(()=>h(!1),2e3)};return d?n.jsxs("div",{"trae-inspector-start-line":"119","trae-inspector-start-column":"4","trae-inspector-end-line":"294","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[u&&n.jsx("div",{"trae-inspector-start-line":"121","trae-inspector-start-column":"8","trae-inspector-end-line":"123","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%88%86%E4%BA%AB%E9%93%BE%E6%8E%A5%E5%B7%B2%E5%A4%8D%E5%88%B6%E5%88%B0%E5%89%AA%E8%B4%B4%E6%9D%BF%22%2C%22textStartLine%22%3A%22121%22%2C%22textStartColumn%22%3A%22140%22%2C%22textEndLine%22%3A%22123%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-slate-800 text-white rounded-lg shadow-lg animate-fade-in",children:"分享链接已复制到剪贴板"}),n.jsx("div",{"trae-inspector-start-line":"126","trae-inspector-start-column":"6","trae-inspector-end-line":"162","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 pt-8 pb-16",children:n.jsxs("div",{"trae-inspector-start-line":"127","trae-inspector-start-column":"8","trae-inspector-end-line":"161","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("button",{"trae-inspector-start-line":"128","trae-inspector-start-column":"10","trae-inspector-end-line":"134","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回列表"]}),n.jsx("div",{"trae-inspector-start-line":"135","trae-inspector-start-column":"10","trae-inspector-end-line":"139","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3 mb-4",children:n.jsx("span",{"trae-inspector-start-line":"136","trae-inspector-start-column":"12","trae-inspector-end-line":"138","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-3 py-1 rounded-full text-sm font-medium bg-blue-500/30 text-blue-200",children:d.category})}),n.jsx("h1",{"trae-inspector-start-line":"140","trae-inspector-start-column":"10","trae-inspector-end-line":"142","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight",children:d.title}),n.jsxs("div",{"trae-inspector-start-line":"143","trae-inspector-start-column":"10","trae-inspector-end-line":"160","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center gap-6 text-white/70 text-sm",children:[n.jsxs("span",{"trae-inspector-start-line":"144","trae-inspector-start-column":"12","trae-inspector-end-line":"147","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Ea,{className:"w-4 h-4"}),d.author]}),n.jsxs("span",{"trae-inspector-start-line":"148","trae-inspector-start-column":"12","trae-inspector-end-line":"151","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Ft,{className:"w-4 h-4"}),d.publishDate]}),n.jsxs("span",{"trae-inspector-start-line":"152","trae-inspector-start-column":"12","trae-inspector-end-line":"155","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(ft,{className:"w-4 h-4"}),d.views.toLocaleString()," 阅读"]}),n.jsxs("span",{"trae-inspector-start-line":"156","trae-inspector-start-column":"12","trae-inspector-end-line":"159","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Sa,{className:"w-4 h-4"}),"约 ",Math.ceil(d.content.length/500)," 分钟阅读"]})]})]})}),n.jsx("div",{"trae-inspector-start-line":"164","trae-inspector-start-column":"6","trae-inspector-end-line":"293","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:n.jsxs("div",{"trae-inspector-start-line":"165","trae-inspector-start-column":"8","trae-inspector-end-line":"292","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[n.jsx("div",{"trae-inspector-start-line":"166","trae-inspector-start-column":"10","trae-inspector-end-line":"227","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:col-span-3",children:n.jsxs("div",{"trae-inspector-start-line":"167","trae-inspector-start-column":"12","trae-inspector-end-line":"226","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",children:[d.coverImage&&n.jsx("div",{"trae-inspector-start-line":"169","trae-inspector-start-column":"16","trae-inspector-end-line":"175","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"aspect-video overflow-hidden",children:n.jsx("img",{"trae-inspector-start-line":"170","trae-inspector-start-column":"18","trae-inspector-end-line":"174","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:d.coverImage,alt:d.title,className:"w-full h-full object-cover"})}),n.jsxs("div",{"trae-inspector-start-line":"178","trae-inspector-start-column":"14","trae-inspector-end-line":"225","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-6 lg:p-8",children:[n.jsx("div",{"trae-inspector-start-line":"179","trae-inspector-start-column":"16","trae-inspector-end-line":"189","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap gap-2 mb-6",children:d.tags.map(A=>n.jsxs("span",{"trae-inspector-start-line":"181","trae-inspector-start-column":"20","trae-inspector-end-line":"187","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer",children:[n.jsx(Mp,{className:"w-3.5 h-3.5"}),A]},A))}),n.jsx("div",{"trae-inspector-start-line":"191","trae-inspector-start-column":"16","trae-inspector-end-line":"193","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"prose-content",children:E(d.content)}),n.jsx("div",{"trae-inspector-start-line":"195","trae-inspector-start-column":"16","trae-inspector-end-line":"224","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mt-10 pt-8 border-t border-slate-200",children:n.jsxs("div",{"trae-inspector-start-line":"196","trae-inspector-start-column":"18","trae-inspector-end-line":"223","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center justify-between gap-4",children:[n.jsxs("div",{"trae-inspector-start-line":"197","trae-inspector-start-column":"20","trae-inspector-end-line":"216","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4",children:[n.jsxs("button",{"trae-inspector-start-line":"198","trae-inspector-start-column":"22","trae-inspector-end-line":"208","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>m(!c),className:`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${c?"bg-amber-50 text-amber-600 border border-amber-200":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[n.jsx(Go,{className:`w-5 h-5 ${c?"fill-amber-500":""}`}),c?"已收藏":"收藏"]}),n.jsxs("button",{"trae-inspector-start-line":"209","trae-inspector-start-column":"22","trae-inspector-end-line":"215","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:v,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors",children:[n.jsx(Ba,{className:"w-5 h-5"}),"分享"]})]}),n.jsx("div",{"trae-inspector-start-line":"217","trae-inspector-start-column":"20","trae-inspector-end-line":"222","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4 text-sm text-slate-500",children:n.jsxs("span",{"trae-inspector-start-line":"218","trae-inspector-start-column":"22","trae-inspector-end-line":"221","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(Br,{className:"w-4 h-4"}),Math.floor(d.views/10)," 点赞"]})})]})})]})]})}),n.jsxs("div",{"trae-inspector-start-line":"229","trae-inspector-start-column":"10","trae-inspector-end-line":"291","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:col-span-1 space-y-6",children:[n.jsxs("div",{"trae-inspector-start-line":"230","trae-inspector-start-column":"12","trae-inspector-end-line":"244","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"231","trae-inspector-start-column":"14","trae-inspector-end-line":"231","trae-inspector-end-column":"73","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BD%9C%E8%80%85%E4%BF%A1%E6%81%AF%22%2C%22textStartLine%22%3A%22231%22%2C%22textStartColumn%22%3A%2264%22%2C%22textEndLine%22%3A%22231%22%2C%22textEndColumn%22%3A%2268%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"作者信息"}),n.jsxs("div",{"trae-inspector-start-line":"232","trae-inspector-start-column":"14","trae-inspector-end-line":"240","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4 mb-4",children:[n.jsx("div",{"trae-inspector-start-line":"233","trae-inspector-start-column":"16","trae-inspector-end-line":"235","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl",children:d.author.charAt(0)}),n.jsxs("div",{"trae-inspector-start-line":"236","trae-inspector-start-column":"16","trae-inspector-end-line":"239","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("p",{"trae-inspector-start-line":"237","trae-inspector-start-column":"18","trae-inspector-end-line":"237","trae-inspector-end-column":"82","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800",children:d.author}),n.jsx("p",{"trae-inspector-start-line":"238","trae-inspector-start-column":"18","trae-inspector-end-line":"238","trae-inspector-end-column":"64","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%B5%84%E6%B7%B1%E4%BD%9C%E8%80%85%22%2C%22textStartLine%22%3A%22238%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%22238%22%2C%22textEndColumn%22%3A%2260%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"资深作者"})]})]}),n.jsx("p",{"trae-inspector-start-line":"241","trae-inspector-start-column":"14","trae-inspector-end-line":"243","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%93%E6%B3%A8%E4%BA%8E%E4%BB%8B%E5%85%A5%E6%94%BE%E5%B0%84%E5%AD%A6%E9%A2%86%E5%9F%9F%E7%A0%94%E7%A9%B6%EF%BC%8C%E5%8F%91%E8%A1%A8%E5%AD%A6%E6%9C%AF%E8%AE%BA%E6%96%87%E5%A4%9A%E7%AF%87%E3%80%82%22%2C%22textStartLine%22%3A%22241%22%2C%22textStartColumn%22%3A%2252%22%2C%22textEndLine%22%3A%22243%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-600",children:"专注于介入放射学领域研究，发表学术论文多篇。"})]}),x.length>0&&n.jsxs("div",{"trae-inspector-start-line":"247","trae-inspector-start-column":"14","trae-inspector-end-line":"276","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"248","trae-inspector-start-column":"16","trae-inspector-end-line":"248","trae-inspector-end-column":"75","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22248%22%2C%22textStartColumn%22%3A%2266%22%2C%22textEndLine%22%3A%22248%22%2C%22textEndColumn%22%3A%2270%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"相关文章"}),n.jsx("div",{"trae-inspector-start-line":"249","trae-inspector-start-column":"16","trae-inspector-end-line":"268","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-4",children:x.map(A=>n.jsxs("div",{"trae-inspector-start-line":"251","trae-inspector-start-column":"20","trae-inspector-end-line":"266","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(`/technology/${A.id}`),className:"group cursor-pointer",children:[n.jsx("h4",{"trae-inspector-start-line":"256","trae-inspector-start-column":"22","trae-inspector-end-line":"258","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2",children:A.title}),n.jsxs("div",{"trae-inspector-start-line":"259","trae-inspector-start-column":"22","trae-inspector-end-line":"265","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between text-xs text-slate-400",children:[n.jsx("span",{"trae-inspector-start-line":"260","trae-inspector-start-column":"24","trae-inspector-end-line":"260","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:A.publishDate}),n.jsxs("span",{"trae-inspector-start-line":"261","trae-inspector-start-column":"24","trae-inspector-end-line":"264","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(ft,{className:"w-3 h-3"}),A.views.toLocaleString()]})]})]},A.id))}),n.jsxs("button",{"trae-inspector-start-line":"269","trae-inspector-start-column":"16","trae-inspector-end-line":"275","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/technology"),className:"w-full mt-4 pt-4 border-t border-slate-100 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1",children:["查看更多",n.jsx(ct,{className:"w-4 h-4"})]})]}),n.jsxs("div",{"trae-inspector-start-line":"279","trae-inspector-start-column":"12","trae-inspector-end-line":"290","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-sm p-6 text-white",children:[n.jsx("h3",{"trae-inspector-start-line":"280","trae-inspector-start-column":"14","trae-inspector-end-line":"280","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99%22%2C%22textStartLine%22%3A%22280%22%2C%22textStartColumn%22%3A%2249%22%2C%22textEndLine%22%3A%22280%22%2C%22textEndColumn%22%3A%2253%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold mb-2",children:"学习资料"}),n.jsx("p",{"trae-inspector-start-line":"281","trae-inspector-start-column":"14","trae-inspector-end-line":"283","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%8E%B7%E5%8F%96%E6%9B%B4%E5%A4%9ADSA%E6%8A%80%E6%9C%AF%E8%B5%84%E6%96%99%E3%80%81%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97%E5%92%8C%E5%9F%B9%E8%AE%AD%E8%AF%BE%E7%A8%8B%22%2C%22textStartLine%22%3A%22281%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%22283%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-white/80 mb-4",children:"获取更多DSA技术资料、操作指南和培训课程"}),n.jsx("button",{"trae-inspector-start-line":"284","trae-inspector-start-column":"14","trae-inspector-end-line":"289","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B5%8F%E8%A7%88%E5%85%A8%E9%83%A8%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22287%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22289%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/technology"),className:"w-full py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm",children:"浏览全部技术文章"})]})]})]})})]}):n.jsx("div",{"trae-inspector-start-line":"102","trae-inspector-start-column":"6","trae-inspector-end-line":"114","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50 flex items-center justify-center",children:n.jsxs("div",{"trae-inspector-start-line":"103","trae-inspector-start-column":"8","trae-inspector-end-line":"113","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center",children:[n.jsx("h2",{"trae-inspector-start-line":"104","trae-inspector-start-column":"10","trae-inspector-end-line":"104","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%96%87%E7%AB%A0%E6%9C%AA%E6%89%BE%E5%88%B0%22%2C%22textStartLine%22%3A%22104%22%2C%22textStartColumn%22%3A%2268%22%2C%22textEndLine%22%3A%22104%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold text-slate-700 mb-2",children:"文章未找到"}),n.jsx("p",{"trae-inspector-start-line":"105","trae-inspector-start-column":"10","trae-inspector-end-line":"105","trae-inspector-end-column":"63","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%82%A8%E8%AE%BF%E9%97%AE%E7%9A%84%E6%96%87%E7%AB%A0%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%88%96%E5%B7%B2%E8%A2%AB%E7%A7%BB%E9%99%A4%22%2C%22textStartLine%22%3A%22105%22%2C%22textStartColumn%22%3A%2245%22%2C%22textEndLine%22%3A%22105%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500 mb-4",children:"您访问的文章不存在或已被移除"}),n.jsxs("button",{"trae-inspector-start-line":"106","trae-inspector-start-column":"10","trae-inspector-end-line":"112","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/TechnologyDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回"]})]})})}const Gh=["全部科室","心血管内科","神经外科","血管外科","介入科","心血管外科"],$h=["全部技术","冠状动脉造影","脑血管造影","外周血管造影","肿瘤介入","大血管介入"],Xh=["全部难度","初级","中级","高级"],Qh=["全部品牌","飞利浦","西门子","联影","GE医疗"];function Kh(){const o=Xe(),[l,c]=C.useState(""),[m,u]=C.useState("全部科室"),[h,d]=C.useState("全部技术"),[x,E]=C.useState("全部难度"),[v,A]=C.useState("全部品牌"),[D,y]=C.useState(!1),[V,F]=C.useState(!1),[N,b]=C.useState(!1),[M,G]=C.useState(!1),U=C.useMemo(()=>ka.filter(Y=>{const Ce=Y.title.toLowerCase().includes(l.toLowerCase())||Y.summary.toLowerCase().includes(l.toLowerCase())||Y.diagnosis.toLowerCase().includes(l.toLowerCase()),Te=m==="全部科室"||Y.department===m,qe=h==="全部技术"||Y.technology===h,Se=x==="全部难度"||Y.difficulty===x,je=v==="全部品牌"||Y.equipmentBrand===v;return Ce&&Te&&qe&&Se&&je}),[l,m,h,x,v]),ee=()=>{u("全部科室"),d("全部技术"),E("全部难度"),A("全部品牌"),c("")},I=m!=="全部科室"||h!=="全部技术"||x!=="全部难度"||v!=="全部品牌"||l!=="",Q=({label:Y,value:Ce,isOpen:Te,onClick:qe,icon:Se})=>n.jsxs("button",{"trae-inspector-start-line":"65","trae-inspector-start-column":"4","trae-inspector-end-line":"76","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:qe,className:`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${Ce!==Y?"border-blue-300 bg-blue-50 text-blue-700":"border-slate-200 bg-white text-slate-600 hover:border-slate-300"}`,children:[n.jsx(Se,{className:"w-4 h-4"}),n.jsx("span",{"trae-inspector-start-line":"74","trae-inspector-start-column":"6","trae-inspector-end-line":"74","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium",children:Ce}),n.jsx(Pp,{className:`w-4 h-4 transition-transform duration-200 ${Te?"rotate-180":""}`})]}),L=({options:Y,selected:Ce,onSelect:Te,isOpen:qe})=>qe?n.jsx("div",{"trae-inspector-start-line":"91","trae-inspector-start-column":"6","trae-inspector-end-line":"105","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-20 max-h-64 overflow-y-auto",children:Y.map(Se=>n.jsx("button",{"trae-inspector-start-line":"93","trae-inspector-start-column":"10","trae-inspector-end-line":"103","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>Te(Se),className:`w-full text-left px-4 py-2 text-sm transition-colors ${Ce===Se?"bg-blue-50 text-blue-600 font-medium":"text-slate-600 hover:bg-slate-50"}`,children:Se},Se))}):null;return n.jsxs("div",{"trae-inspector-start-line":"110","trae-inspector-start-column":"4","trae-inspector-end-line":"304","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[n.jsxs("section",{"trae-inspector-start-line":"112","trae-inspector-start-column":"6","trae-inspector-end-line":"133","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative pt-20 lg:pt-28 pb-16 overflow-hidden",children:[n.jsx("div",{"trae-inspector-start-line":"113","trae-inspector-start-column":"8","trae-inspector-end-line":"113","trae-inspector-end-column":"103","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"}),n.jsxs("div",{"trae-inspector-start-line":"114","trae-inspector-start-column":"8","trae-inspector-end-line":"117","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 opacity-20",children:[n.jsx("div",{"trae-inspector-start-line":"115","trae-inspector-start-column":"10","trae-inspector-end-line":"115","trae-inspector-end-column":"119","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute top-10 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"}),n.jsx("div",{"trae-inspector-start-line":"116","trae-inspector-start-column":"10","trae-inspector-end-line":"116","trae-inspector-end-column":"155","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),n.jsx("div",{"trae-inspector-start-line":"118","trae-inspector-start-column":"8","trae-inspector-end-line":"132","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{"trae-inspector-start-line":"119","trae-inspector-start-column":"10","trae-inspector-end-line":"131","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center max-w-3xl mx-auto",children:[n.jsxs("div",{"trae-inspector-start-line":"120","trae-inspector-start-column":"12","trae-inspector-end-line":"123","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6",children:[n.jsx(rn,{className:"w-4 h-4 text-cyan-400"}),n.jsx("span",{"trae-inspector-start-line":"122","trae-inspector-start-column":"14","trae-inspector-end-line":"122","trae-inspector-end-column":"33","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%B4%E5%BA%8A%E7%97%85%E4%BE%8B%E4%B8%AD%E5%BF%83%22%2C%22textStartLine%22%3A%22122%22%2C%22textStartColumn%22%3A%2220%22%2C%22textEndLine%22%3A%22122%22%2C%22textEndColumn%22%3A%2226%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"临床病例中心"})]}),n.jsx("h1",{"trae-inspector-start-line":"124","trae-inspector-start-column":"12","trae-inspector-end-line":"126","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%B4%E5%BA%8A%E7%97%85%E4%BE%8B%E4%B8%AD%E5%BF%83%22%2C%22textStartLine%22%3A%22124%22%2C%22textStartColumn%22%3A%2287%22%2C%22textEndLine%22%3A%22126%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4",children:"临床病例中心"}),n.jsx("p",{"trae-inspector-start-line":"127","trae-inspector-start-column":"12","trae-inspector-end-line":"130","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B1%87%E9%9B%86%E5%A4%9A%E5%AD%A6%E7%A7%91%E4%B8%B4%E5%BA%8A%E4%BB%8B%E5%85%A5%E7%97%85%E4%BE%8B%EF%BC%8C%E6%B6%B5%E7%9B%96%E5%BF%83%E8%A1%80%E7%AE%A1%E3%80%81%E7%A5%9E%E7%BB%8F%E3%80%81%E5%A4%96%E5%91%A8%E8%A1%80%E7%AE%A1%E3%80%81%E8%82%BF%E7%98%A4%E7%AD%89%E9%A2%86%E5%9F%9F%EF%BC%8C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E4%B8%BA%E4%B8%B4%E5%BA%8A%E5%8C%BB%E5%B8%88%E6%8F%90%E4%BE%9B%E7%9C%9F%E5%AE%9E%E7%97%85%E4%BE%8B%E5%8F%82%E8%80%83%E4%B8%8E%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%22%2C%22textStartLine%22%3A%22127%22%2C%22textStartColumn%22%3A%2265%22%2C%22textEndLine%22%3A%22130%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg text-white/70 leading-relaxed",children:"汇集多学科临床介入病例，涵盖心血管、神经、外周血管、肿瘤等领域， 为临床医师提供真实病例参考与学习资源"})]})})]}),n.jsx("section",{"trae-inspector-start-line":"136","trae-inspector-start-column":"6","trae-inspector-end-line":"272","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative -mt-8 z-10",children:n.jsx("div",{"trae-inspector-start-line":"137","trae-inspector-start-column":"8","trae-inspector-end-line":"271","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{"trae-inspector-start-line":"138","trae-inspector-start-column":"10","trae-inspector-end-line":"270","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl shadow-xl p-6 border border-slate-100",children:[n.jsxs("div",{"trae-inspector-start-line":"140","trae-inspector-start-column":"12","trae-inspector-end-line":"149","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative mb-6",children:[n.jsx(Tr,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"}),n.jsx("input",{"trae-inspector-start-line":"142","trae-inspector-start-column":"14","trae-inspector-end-line":"148","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",type:"text",value:l,onChange:Y=>c(Y.target.value),placeholder:"搜索病例标题、诊断、摘要...",className:"w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all text-slate-700 placeholder-slate-400"})]}),n.jsxs("div",{"trae-inspector-start-line":"152","trae-inspector-start-column":"12","trae-inspector-end-line":"262","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center gap-3",children:[n.jsxs("div",{"trae-inspector-start-line":"153","trae-inspector-start-column":"14","trae-inspector-end-line":"156","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2 text-slate-500",children:[n.jsx(sh,{className:"w-4 h-4"}),n.jsx("span",{"trae-inspector-start-line":"155","trae-inspector-start-column":"16","trae-inspector-end-line":"155","trae-inspector-end-column":"64","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%AD%9B%E9%80%89%EF%BC%9A%22%2C%22textStartLine%22%3A%22155%22%2C%22textStartColumn%22%3A%2254%22%2C%22textEndLine%22%3A%22155%22%2C%22textEndColumn%22%3A%2257%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium",children:"筛选："})]}),n.jsxs("div",{"trae-inspector-start-line":"158","trae-inspector-start-column":"14","trae-inspector-end-line":"180","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative",children:[n.jsx(Q,{label:"全部科室",value:m,isOpen:D,onClick:()=>{y(!D),F(!1),b(!1),G(!1)},icon:es}),n.jsx(L,{options:Gh,selected:m,onSelect:Y=>{u(Y),y(!1)},isOpen:D})]}),n.jsxs("div",{"trae-inspector-start-line":"182","trae-inspector-start-column":"14","trae-inspector-end-line":"204","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative",children:[n.jsx(Q,{label:"全部技术",value:h,isOpen:V,onClick:()=>{F(!V),y(!1),b(!1),G(!1)},icon:$o}),n.jsx(L,{options:$h,selected:h,onSelect:Y=>{d(Y),F(!1)},isOpen:V})]}),n.jsxs("div",{"trae-inspector-start-line":"206","trae-inspector-start-column":"14","trae-inspector-end-line":"228","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative",children:[n.jsx(Q,{label:"全部难度",value:x,isOpen:N,onClick:()=>{b(!N),y(!1),F(!1),G(!1)},icon:Ro}),n.jsx(L,{options:Xh,selected:x,onSelect:Y=>{E(Y),b(!1)},isOpen:N})]}),n.jsxs("div",{"trae-inspector-start-line":"230","trae-inspector-start-column":"14","trae-inspector-end-line":"252","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative",children:[n.jsx(Q,{label:"全部品牌",value:v,isOpen:M,onClick:()=>{G(!M),y(!1),F(!1),b(!1)},icon:Zn}),n.jsx(L,{options:Qh,selected:v,onSelect:Y=>{A(Y),G(!1)},isOpen:M})]}),I&&n.jsx("button",{"trae-inspector-start-line":"255","trae-inspector-start-column":"16","trae-inspector-end-line":"260","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%87%8D%E7%BD%AE%E7%AD%9B%E9%80%89%22%2C%22textStartLine%22%3A%22258%22%2C%22textStartColumn%22%3A%2217%22%2C%22textEndLine%22%3A%22260%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:ee,className:"ml-auto text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors",children:"重置筛选"})]}),n.jsx("div",{"trae-inspector-start-line":"265","trae-inspector-start-column":"12","trae-inspector-end-line":"269","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mt-6 pt-4 border-t border-slate-100 flex items-center justify-between",children:n.jsxs("p",{"trae-inspector-start-line":"266","trae-inspector-start-column":"14","trae-inspector-end-line":"268","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:["共找到 ",n.jsx("span",{"trae-inspector-start-line":"267","trae-inspector-start-column":"20","trae-inspector-end-line":"267","trae-inspector-end-column":"96","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-700",children:U.length})," 个病例"]})})]})})}),n.jsx("section",{"trae-inspector-start-line":"275","trae-inspector-start-column":"6","trae-inspector-end-line":"303","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-12 lg:py-16",children:n.jsx("div",{"trae-inspector-start-line":"276","trae-inspector-start-column":"8","trae-inspector-end-line":"302","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:U.length>0?n.jsx("div",{"trae-inspector-start-line":"278","trae-inspector-start-column":"12","trae-inspector-end-line":"286","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:U.map(Y=>n.jsx(Hp,{caseData:Y,onClick:()=>o(`/cases/${Y.id}`)},Y.id))}):n.jsxs("div",{"trae-inspector-start-line":"288","trae-inspector-start-column":"12","trae-inspector-end-line":"300","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center py-20",children:[n.jsx("div",{"trae-inspector-start-line":"289","trae-inspector-start-column":"14","trae-inspector-end-line":"291","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4",children:n.jsx(rn,{className:"w-10 h-10 text-slate-400"})}),n.jsx("h3",{"trae-inspector-start-line":"292","trae-inspector-start-column":"14","trae-inspector-end-line":"292","trae-inspector-end-column":"84","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9A%82%E6%97%A0%E5%8C%B9%E9%85%8D%E7%9A%84%E7%97%85%E4%BE%8B%22%2C%22textStartLine%22%3A%22292%22%2C%22textStartColumn%22%3A%2272%22%2C%22textEndLine%22%3A%22292%22%2C%22textEndColumn%22%3A%2279%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-semibold text-slate-700 mb-2",children:"暂无匹配的病例"}),n.jsx("p",{"trae-inspector-start-line":"293","trae-inspector-start-column":"14","trae-inspector-end-line":"293","trae-inspector-end-column":"68","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AF%B7%E5%B0%9D%E8%AF%95%E8%B0%83%E6%95%B4%E7%AD%9B%E9%80%89%E6%9D%A1%E4%BB%B6%E6%88%96%E6%90%9C%E7%B4%A2%E5%85%B3%E9%94%AE%E8%AF%8D%22%2C%22textStartLine%22%3A%22293%22%2C%22textStartColumn%22%3A%2249%22%2C%22textEndLine%22%3A%22293%22%2C%22textEndColumn%22%3A%2264%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500 mb-6",children:"请尝试调整筛选条件或搜索关键词"}),n.jsx("button",{"trae-inspector-start-line":"294","trae-inspector-start-column":"14","trae-inspector-end-line":"299","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Cases.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%87%8D%E7%BD%AE%E7%AD%9B%E9%80%89%E6%9D%A1%E4%BB%B6%22%2C%22textStartLine%22%3A%22297%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22299%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:ee,className:"px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors",children:"重置筛选条件"})]})})})]})}const Yh=o=>{const l=o.split(`
`),c=[];let m=0;for(let u=0;u<l.length;u++){const h=l[u];if(h.startsWith("## "))c.push(n.jsx("h2",{"trae-inspector-start-line":"32","trae-inspector-start-column":"8","trae-inspector-end-line":"34","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800 mt-8 mb-4 pb-2 border-b border-slate-200",children:h.replace("## ","")},m++));else if(h.startsWith("### "))c.push(n.jsx("h3",{"trae-inspector-start-line":"38","trae-inspector-start-column":"8","trae-inspector-end-line":"40","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold text-slate-800 mt-6 mb-3",children:h.replace("### ","")},m++));else if(h.startsWith("**")&&h.endsWith("**"))c.push(n.jsx("p",{"trae-inspector-start-line":"44","trae-inspector-start-column":"8","trae-inspector-end-line":"46","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-700 font-semibold leading-relaxed mb-4",children:h.replace(/\*\*/g,"")},m++));else if(h.startsWith("- ")){const d=[];for(;u<l.length&&l[u].startsWith("- ");)d.push(l[u].replace("- ","")),u++;u--,c.push(n.jsx("ul",{"trae-inspector-start-line":"56","trae-inspector-start-column":"8","trae-inspector-end-line":"60","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"list-disc list-inside space-y-2 my-4 text-slate-600",children:d.map((x,E)=>n.jsx("li",{"trae-inspector-start-line":"58","trae-inspector-start-column":"12","trae-inspector-end-line":"58","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:x.replace(/\*\*/g,"")},E))},m++))}else if(/^\d+\.\s/.test(h)){const d=[];for(;u<l.length&&/^\d+\.\s/.test(l[u]);)d.push(l[u].replace(/^\d+\.\s/,"")),u++;u--,c.push(n.jsx("ol",{"trae-inspector-start-line":"70","trae-inspector-start-column":"8","trae-inspector-end-line":"74","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"list-decimal list-inside space-y-2 my-4 text-slate-600",children:d.map((x,E)=>n.jsx("li",{"trae-inspector-start-line":"72","trae-inspector-start-column":"12","trae-inspector-end-line":"72","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:x.replace(/\*\*/g,"")},E))},m++))}else h.trim()!==""&&c.push(n.jsx("p",{"trae-inspector-start-line":"78","trae-inspector-start-column":"8","trae-inspector-end-line":"80","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 leading-relaxed mb-4",children:h.replace(/\*\*/g,"")},m++))}return c},Jh=[{id:"c1",author:"李医生",avatar:"L",content:"这个病例很典型，前降支闭塞的处理很规范，血栓抽吸后支架植入效果很好。",time:"2024-06-19",likes:23},{id:"c2",author:"王主任",avatar:"W",content:"术后抗血小板治疗方案是怎样的？能否分享一下？",time:"2024-06-19",likes:15},{id:"c3",author:"张医师",avatar:"Z",content:"学习了，感谢分享！我们科室也有类似病例，处理方式略有不同，有机会可以交流。",time:"2024-06-18",likes:8}];function Zh(){const{id:o}=sn(),l=Xe(),[c,m]=C.useState(0),[u,h]=C.useState(!1),[d,x]=C.useState(!1),[E,v]=C.useState(Jh),[A,D]=C.useState(""),y=C.useMemo(()=>ka.find(U=>U.id===o),[o]),V={初级:"bg-green-100 text-green-700 border-green-200",中级:"bg-yellow-100 text-yellow-700 border-yellow-200",高级:"bg-red-100 text-red-700 border-red-200"},F=()=>{y&&c<y.images.length-1&&m(c+1)},N=()=>{c>0&&m(c-1)},b=()=>{h(!u)},M=()=>{x(!0),setTimeout(()=>x(!1),2e3)},G=U=>{if(U.preventDefault(),A.trim()){const ee={id:`c${Date.now()}`,author:"我",avatar:"我",content:A.trim(),time:"刚刚",likes:0};v([ee,...E]),D("")}};return y?n.jsxs("div",{"trae-inspector-start-line":"199","trae-inspector-start-column":"4","trae-inspector-end-line":"483","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[d&&n.jsx("div",{"trae-inspector-start-line":"201","trae-inspector-start-column":"8","trae-inspector-end-line":"203","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%88%86%E4%BA%AB%E9%93%BE%E6%8E%A5%E5%B7%B2%E5%A4%8D%E5%88%B6%E5%88%B0%E5%89%AA%E8%B4%B4%E6%9D%BF%22%2C%22textStartLine%22%3A%22201%22%2C%22textStartColumn%22%3A%22124%22%2C%22textEndLine%22%3A%22203%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-slate-800 text-white rounded-lg shadow-lg",children:"分享链接已复制到剪贴板"}),n.jsx("div",{"trae-inspector-start-line":"206","trae-inspector-start-column":"6","trae-inspector-end-line":"248","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 pt-8 pb-16",children:n.jsxs("div",{"trae-inspector-start-line":"207","trae-inspector-start-column":"8","trae-inspector-end-line":"247","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("button",{"trae-inspector-start-line":"208","trae-inspector-start-column":"10","trae-inspector-end-line":"214","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回列表"]}),n.jsxs("div",{"trae-inspector-start-line":"215","trae-inspector-start-column":"10","trae-inspector-end-line":"225","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center gap-3 mb-4",children:[n.jsx("span",{"trae-inspector-start-line":"216","trae-inspector-start-column":"12","trae-inspector-end-line":"218","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-3 py-1 rounded-full text-sm font-medium border ${V[y.difficulty]}`,children:y.difficulty}),n.jsx("span",{"trae-inspector-start-line":"219","trae-inspector-start-column":"12","trae-inspector-end-line":"221","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/30 text-emerald-200",children:y.department}),n.jsx("span",{"trae-inspector-start-line":"222","trae-inspector-start-column":"12","trae-inspector-end-line":"224","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/30 text-cyan-200",children:y.technology})]}),n.jsx("h1",{"trae-inspector-start-line":"226","trae-inspector-start-column":"10","trae-inspector-end-line":"228","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight",children:y.title}),n.jsxs("div",{"trae-inspector-start-line":"229","trae-inspector-start-column":"10","trae-inspector-end-line":"246","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center gap-6 text-white/70 text-sm",children:[n.jsxs("span",{"trae-inspector-start-line":"230","trae-inspector-start-column":"12","trae-inspector-end-line":"233","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Ea,{className:"w-4 h-4"}),y.author]}),n.jsxs("span",{"trae-inspector-start-line":"234","trae-inspector-start-column":"12","trae-inspector-end-line":"237","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Ft,{className:"w-4 h-4"}),y.publishDate]}),n.jsxs("span",{"trae-inspector-start-line":"238","trae-inspector-start-column":"12","trae-inspector-end-line":"241","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(ft,{className:"w-4 h-4"}),y.views.toLocaleString()," 浏览"]}),n.jsxs("span",{"trae-inspector-start-line":"242","trae-inspector-start-column":"12","trae-inspector-end-line":"245","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Br,{className:"w-4 h-4"}),y.likes," 点赞"]})]})]})}),n.jsx("div",{"trae-inspector-start-line":"250","trae-inspector-start-column":"6","trae-inspector-end-line":"482","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:n.jsxs("div",{"trae-inspector-start-line":"251","trae-inspector-start-column":"8","trae-inspector-end-line":"481","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[n.jsxs("div",{"trae-inspector-start-line":"252","trae-inspector-start-column":"10","trae-inspector-end-line":"421","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:col-span-2 space-y-6",children:[n.jsxs("div",{"trae-inspector-start-line":"253","trae-inspector-start-column":"12","trae-inspector-end-line":"312","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",children:[n.jsxs("div",{"trae-inspector-start-line":"254","trae-inspector-start-column":"14","trae-inspector-end-line":"292","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative aspect-video bg-slate-900",children:[n.jsx("img",{"trae-inspector-start-line":"255","trae-inspector-start-column":"16","trae-inspector-end-line":"259","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:y.images[c],alt:`${y.title} - 图${c+1}`,className:"w-full h-full object-contain"}),y.images.length>1&&n.jsxs(n.Fragment,{children:[n.jsx("button",{"trae-inspector-start-line":"262","trae-inspector-start-column":"20","trae-inspector-end-line":"268","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:N,disabled:c===0,className:"absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",children:n.jsx(K0,{className:"w-5 h-5"})}),n.jsx("button",{"trae-inspector-start-line":"269","trae-inspector-start-column":"20","trae-inspector-end-line":"275","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:F,disabled:c===y.images.length-1,className:"absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",children:n.jsx(ct,{className:"w-5 h-5"})}),n.jsx("div",{"trae-inspector-start-line":"276","trae-inspector-start-column":"20","trae-inspector-end-line":"286","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",children:y.images.map((U,ee)=>n.jsx("button",{"trae-inspector-start-line":"278","trae-inspector-start-column":"24","trae-inspector-end-line":"284","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>m(ee),className:`w-2 h-2 rounded-full transition-all ${ee===c?"bg-white w-6":"bg-white/50"}`},ee))})]}),n.jsxs("div",{"trae-inspector-start-line":"289","trae-inspector-start-column":"16","trae-inspector-end-line":"291","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/50 text-white text-sm",children:[c+1," / ",y.images.length]})]}),y.images.length>1&&n.jsx("div",{"trae-inspector-start-line":"294","trae-inspector-start-column":"16","trae-inspector-end-line":"310","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-4 border-t border-slate-100",children:n.jsx("div",{"trae-inspector-start-line":"295","trae-inspector-start-column":"18","trae-inspector-end-line":"309","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex gap-3 overflow-x-auto pb-2",children:y.images.map((U,ee)=>n.jsx("button",{"trae-inspector-start-line":"297","trae-inspector-start-column":"22","trae-inspector-end-line":"307","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>m(ee),className:`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${ee===c?"border-emerald-500 ring-2 ring-emerald-200":"border-transparent hover:border-slate-300"}`,children:n.jsx("img",{"trae-inspector-start-line":"306","trae-inspector-start-column":"24","trae-inspector-end-line":"306","trae-inspector-end-column":"104","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:U,alt:`缩略图${ee+1}`,className:"w-full h-full object-cover"})},ee))})})]}),n.jsxs("div",{"trae-inspector-start-line":"314","trae-inspector-start-column":"12","trae-inspector-end-line":"320","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsxs("h2",{"trae-inspector-start-line":"315","trae-inspector-start-column":"14","trae-inspector-end-line":"318","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",children:[n.jsx(Ro,{className:"w-5 h-5 text-emerald-600"}),"病例概要"]}),n.jsx("p",{"trae-inspector-start-line":"319","trae-inspector-start-column":"14","trae-inspector-end-line":"319","trae-inspector-end-column":"82","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 leading-relaxed",children:y.summary})]}),n.jsxs("div",{"trae-inspector-start-line":"322","trae-inspector-start-column":"12","trae-inspector-end-line":"330","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsxs("h2",{"trae-inspector-start-line":"323","trae-inspector-start-column":"14","trae-inspector-end-line":"326","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",children:[n.jsx(Ea,{className:"w-5 h-5 text-emerald-600"}),"患者信息"]}),n.jsx("div",{"trae-inspector-start-line":"327","trae-inspector-start-column":"14","trae-inspector-end-line":"329","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-slate-50 rounded-lg p-4",children:n.jsx("p",{"trae-inspector-start-line":"328","trae-inspector-start-column":"16","trae-inspector-end-line":"328","trae-inspector-end-column":"88","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 leading-relaxed",children:y.patientInfo})})]}),n.jsxs("div",{"trae-inspector-start-line":"332","trae-inspector-start-column":"12","trae-inspector-end-line":"340","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsxs("h2",{"trae-inspector-start-line":"333","trae-inspector-start-column":"14","trae-inspector-end-line":"336","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",children:[n.jsx(es,{className:"w-5 h-5 text-emerald-600"}),"诊断"]}),n.jsx("div",{"trae-inspector-start-line":"337","trae-inspector-start-column":"14","trae-inspector-end-line":"339","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500",children:n.jsx("p",{"trae-inspector-start-line":"338","trae-inspector-start-column":"16","trae-inspector-end-line":"338","trae-inspector-end-column":"82","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-700 font-medium",children:y.diagnosis})})]}),n.jsxs("div",{"trae-inspector-start-line":"342","trae-inspector-start-column":"12","trae-inspector-end-line":"350","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsxs("h2",{"trae-inspector-start-line":"343","trae-inspector-start-column":"14","trae-inspector-end-line":"346","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",children:[n.jsx(Sh,{className:"w-5 h-5 text-emerald-600"}),"治疗方案"]}),n.jsx("div",{"trae-inspector-start-line":"347","trae-inspector-start-column":"14","trae-inspector-end-line":"349","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500",children:n.jsx("p",{"trae-inspector-start-line":"348","trae-inspector-start-column":"16","trae-inspector-end-line":"348","trae-inspector-end-column":"86","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-700 leading-relaxed",children:y.treatment})})]}),y.content&&n.jsxs("div",{"trae-inspector-start-line":"353","trae-inspector-start-column":"14","trae-inspector-end-line":"361","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsxs("h2",{"trae-inspector-start-line":"354","trae-inspector-start-column":"16","trae-inspector-end-line":"357","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",children:[n.jsx(Ro,{className:"w-5 h-5 text-emerald-600"}),"详细病例报告"]}),n.jsx("div",{"trae-inspector-start-line":"358","trae-inspector-start-column":"16","trae-inspector-end-line":"360","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"prose-content",children:Yh(y.content)})]}),n.jsxs("div",{"trae-inspector-start-line":"364","trae-inspector-start-column":"12","trae-inspector-end-line":"420","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsxs("div",{"trae-inspector-start-line":"365","trae-inspector-start-column":"14","trae-inspector-end-line":"371","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between mb-6",children:[n.jsxs("h2",{"trae-inspector-start-line":"366","trae-inspector-start-column":"16","trae-inspector-end-line":"369","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[n.jsx(Ch,{className:"w-5 h-5 text-emerald-600"}),"病例讨论"]}),n.jsxs("span",{"trae-inspector-start-line":"370","trae-inspector-start-column":"16","trae-inspector-end-line":"370","trae-inspector-end-column":"85","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:[E.length," 条评论"]})]}),n.jsx("form",{"trae-inspector-start-line":"373","trae-inspector-start-column":"14","trae-inspector-end-line":"398","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onSubmit:G,className:"mb-6",children:n.jsxs("div",{"trae-inspector-start-line":"374","trae-inspector-start-column":"16","trae-inspector-end-line":"397","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex gap-4",children:[n.jsx("div",{"trae-inspector-start-line":"375","trae-inspector-start-column":"18","trae-inspector-end-line":"377","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%88%91%22%2C%22textStartLine%22%3A%22375%22%2C%22textStartColumn%22%3A%22175%22%2C%22textEndLine%22%3A%22377%22%2C%22textEndColumn%22%3A%2218%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-medium flex-shrink-0",children:"我"}),n.jsxs("div",{"trae-inspector-start-line":"378","trae-inspector-start-column":"18","trae-inspector-end-line":"396","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1",children:[n.jsx("textarea",{"trae-inspector-start-line":"379","trae-inspector-start-column":"20","trae-inspector-end-line":"385","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",value:A,onChange:U=>D(U.target.value),placeholder:"分享您的看法或提问...",className:"w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 resize-none text-slate-700 placeholder-slate-400",rows:3}),n.jsx("div",{"trae-inspector-start-line":"386","trae-inspector-start-column":"20","trae-inspector-end-line":"395","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex justify-end mt-2",children:n.jsxs("button",{"trae-inspector-start-line":"387","trae-inspector-start-column":"22","trae-inspector-end-line":"394","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",type:"submit",disabled:!A.trim(),className:"inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[n.jsx(Fh,{className:"w-4 h-4"}),"发表评论"]})})]})]})}),n.jsx("div",{"trae-inspector-start-line":"400","trae-inspector-start-column":"14","trae-inspector-end-line":"419","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-6",children:E.map(U=>n.jsxs("div",{"trae-inspector-start-line":"402","trae-inspector-start-column":"18","trae-inspector-end-line":"417","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex gap-4",children:[n.jsx("div",{"trae-inspector-start-line":"403","trae-inspector-start-column":"20","trae-inspector-end-line":"405","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-medium flex-shrink-0",children:U.avatar}),n.jsxs("div",{"trae-inspector-start-line":"406","trae-inspector-start-column":"20","trae-inspector-end-line":"416","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1",children:[n.jsxs("div",{"trae-inspector-start-line":"407","trae-inspector-start-column":"22","trae-inspector-end-line":"410","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3 mb-1",children:[n.jsx("span",{"trae-inspector-start-line":"408","trae-inspector-start-column":"24","trae-inspector-end-line":"408","trae-inspector-end-column":"92","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-medium text-slate-800",children:U.author}),n.jsx("span",{"trae-inspector-start-line":"409","trae-inspector-start-column":"24","trae-inspector-end-line":"409","trae-inspector-end-column":"86","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-400",children:U.time})]}),n.jsx("p",{"trae-inspector-start-line":"411","trae-inspector-start-column":"22","trae-inspector-end-line":"411","trae-inspector-end-column":"86","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 text-sm mb-2",children:U.content}),n.jsxs("button",{"trae-inspector-start-line":"412","trae-inspector-start-column":"22","trae-inspector-end-line":"415","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"inline-flex items-center gap-1 text-xs text-slate-400 hover:text-emerald-600 transition-colors",children:[n.jsx(Br,{className:"w-3.5 h-3.5"}),U.likes]})]})]},U.id))})]})]}),n.jsxs("div",{"trae-inspector-start-line":"423","trae-inspector-start-column":"10","trae-inspector-end-line":"480","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-6",children:[n.jsxs("div",{"trae-inspector-start-line":"424","trae-inspector-start-column":"12","trae-inspector-end-line":"446","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"425","trae-inspector-start-column":"14","trae-inspector-end-line":"425","trae-inspector-end-column":"71","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%93%8D%E4%BD%9C%22%2C%22textStartLine%22%3A%22425%22%2C%22textStartColumn%22%3A%2264%22%2C%22textEndLine%22%3A%22425%22%2C%22textEndColumn%22%3A%2266%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"操作"}),n.jsxs("div",{"trae-inspector-start-line":"426","trae-inspector-start-column":"14","trae-inspector-end-line":"445","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-3",children:[n.jsxs("button",{"trae-inspector-start-line":"427","trae-inspector-start-column":"16","trae-inspector-end-line":"437","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:b,className:`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${u?"bg-red-50 text-red-600 border border-red-200":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[n.jsx(Br,{className:`w-5 h-5 ${u?"fill-red-500":""}`}),u?"已点赞":"点赞"]}),n.jsxs("button",{"trae-inspector-start-line":"438","trae-inspector-start-column":"16","trae-inspector-end-line":"444","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:M,className:"w-full py-3 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2",children:[n.jsx(Ba,{className:"w-5 h-5"}),"分享病例"]})]})]}),n.jsxs("div",{"trae-inspector-start-line":"448","trae-inspector-start-column":"12","trae-inspector-end-line":"466","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"449","trae-inspector-start-column":"14","trae-inspector-end-line":"449","trae-inspector-end-column":"73","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF%22%2C%22textStartLine%22%3A%22449%22%2C%22textStartColumn%22%3A%2264%22%2C%22textEndLine%22%3A%22449%22%2C%22textEndColumn%22%3A%2268%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"设备信息"}),n.jsxs("div",{"trae-inspector-start-line":"450","trae-inspector-start-column":"14","trae-inspector-end-line":"459","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-3",children:[n.jsxs("div",{"trae-inspector-start-line":"451","trae-inspector-start-column":"16","trae-inspector-end-line":"454","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"452","trae-inspector-start-column":"18","trae-inspector-end-line":"452","trae-inspector-end-column":"68","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%93%81%E7%89%8C%22%2C%22textStartLine%22%3A%22452%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22452%22%2C%22textEndColumn%22%3A%2261%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"品牌"}),n.jsx("span",{"trae-inspector-start-line":"453","trae-inspector-start-column":"18","trae-inspector-end-line":"453","trae-inspector-end-column":"103","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700",children:y.equipmentBrand})]}),n.jsxs("div",{"trae-inspector-start-line":"455","trae-inspector-start-column":"16","trae-inspector-end-line":"458","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"456","trae-inspector-start-column":"18","trae-inspector-end-line":"456","trae-inspector-end-column":"68","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%9E%8B%E5%8F%B7%22%2C%22textStartLine%22%3A%22456%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22456%22%2C%22textEndColumn%22%3A%2261%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"型号"}),n.jsx("span",{"trae-inspector-start-line":"457","trae-inspector-start-column":"18","trae-inspector-end-line":"457","trae-inspector-end-column":"103","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700",children:y.equipmentModel})]})]}),n.jsx("button",{"trae-inspector-start-line":"460","trae-inspector-start-column":"14","trae-inspector-end-line":"465","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9F%A5%E7%9C%8B%E8%AE%BE%E5%A4%87%E8%AF%A6%E6%83%85%22%2C%22textStartLine%22%3A%22463%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22465%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/equipment"),className:"w-full mt-4 py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors",children:"查看设备详情"})]}),n.jsxs("div",{"trae-inspector-start-line":"468","trae-inspector-start-column":"12","trae-inspector-end-line":"479","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-sm p-6 text-white",children:[n.jsx("h3",{"trae-inspector-start-line":"469","trae-inspector-start-column":"14","trae-inspector-end-line":"469","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9B%B4%E5%A4%9A%E7%97%85%E4%BE%8B%22%2C%22textStartLine%22%3A%22469%22%2C%22textStartColumn%22%3A%2249%22%2C%22textEndLine%22%3A%22469%22%2C%22textEndColumn%22%3A%2253%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold mb-2",children:"更多病例"}),n.jsx("p",{"trae-inspector-start-line":"470","trae-inspector-start-column":"14","trae-inspector-end-line":"472","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B5%8F%E8%A7%88%E5%90%8C%E7%A7%91%E5%AE%A4%E3%80%81%E5%90%8C%E6%8A%80%E6%9C%AF%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%9B%B4%E5%A4%9A%E4%B8%B4%E5%BA%8A%E7%97%85%E4%BE%8B%22%2C%22textStartLine%22%3A%22470%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%22472%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-white/80 mb-4",children:"浏览同科室、同技术类型的更多临床病例"}),n.jsx("button",{"trae-inspector-start-line":"473","trae-inspector-start-column":"14","trae-inspector-end-line":"478","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9F%A5%E7%9C%8B%E5%85%A8%E9%83%A8%E7%97%85%E4%BE%8B%22%2C%22textStartLine%22%3A%22476%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22478%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/cases"),className:"w-full py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm",children:"查看全部病例"})]})]})]})})]}):n.jsx("div",{"trae-inspector-start-line":"182","trae-inspector-start-column":"6","trae-inspector-end-line":"194","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50 flex items-center justify-center",children:n.jsxs("div",{"trae-inspector-start-line":"183","trae-inspector-start-column":"8","trae-inspector-end-line":"193","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center",children:[n.jsx("h2",{"trae-inspector-start-line":"184","trae-inspector-start-column":"10","trae-inspector-end-line":"184","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%97%85%E4%BE%8B%E6%9C%AA%E6%89%BE%E5%88%B0%22%2C%22textStartLine%22%3A%22184%22%2C%22textStartColumn%22%3A%2268%22%2C%22textEndLine%22%3A%22184%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold text-slate-700 mb-2",children:"病例未找到"}),n.jsx("p",{"trae-inspector-start-line":"185","trae-inspector-start-column":"10","trae-inspector-end-line":"185","trae-inspector-end-column":"63","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%82%A8%E8%AE%BF%E9%97%AE%E7%9A%84%E7%97%85%E4%BE%8B%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%88%96%E5%B7%B2%E8%A2%AB%E7%A7%BB%E9%99%A4%22%2C%22textStartLine%22%3A%22185%22%2C%22textStartColumn%22%3A%2245%22%2C%22textEndLine%22%3A%22185%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500 mb-4",children:"您访问的病例不存在或已被移除"}),n.jsxs("button",{"trae-inspector-start-line":"186","trae-inspector-start-column":"10","trae-inspector-end-line":"192","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/CaseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回"]})]})})}const cp={飞利浦:"from-blue-500 to-cyan-500",西门子:"from-indigo-500 to-blue-500",联影:"from-emerald-500 to-teal-500",GE医疗:"from-sky-500 to-blue-500",东芝:"from-orange-500 to-amber-500",东软:"from-purple-500 to-violet-500"};function lp(){const o=Xe(),l=sn(),[c,m]=C.useState(l.brand||"全部"),[u,h]=C.useState([]),[d,x]=C.useState(!1),E=C.useMemo(()=>c==="全部"?lr:lr.filter(F=>F.brand===c),[c]),v=C.useMemo(()=>{const F=new Set(lr.map(N=>N.brand));return["全部",...zp.filter(N=>F.has(N))]},[]),A=F=>{m(F),o(F==="全部"?"/equipment":`/equipment/brand/${F}`)},D=F=>{h(N=>N.find(M=>M.id===F.id)?N.filter(M=>M.id!==F.id):N.length>=3?N:[...N,F])},y=F=>u.some(N=>N.id===F),V=C.useMemo(()=>{const F=new Set;return u.forEach(N=>{Object.keys(N.parameters).forEach(b=>F.add(b))}),Array.from(F)},[u]);return n.jsxs("div",{"trae-inspector-start-line":"66","trae-inspector-start-column":"4","trae-inspector-end-line":"397","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[n.jsxs("section",{"trae-inspector-start-line":"68","trae-inspector-start-column":"6","trae-inspector-end-line":"87","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",children:[n.jsxs("div",{"trae-inspector-start-line":"69","trae-inspector-start-column":"8","trae-inspector-end-line":"72","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute inset-0 opacity-20",children:[n.jsx("div",{"trae-inspector-start-line":"70","trae-inspector-start-column":"10","trae-inspector-end-line":"70","trae-inspector-end-column":"119","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute top-10 left-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse"}),n.jsx("div",{"trae-inspector-start-line":"71","trae-inspector-start-column":"10","trae-inspector-end-line":"71","trae-inspector-end-column":"155","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),n.jsx("div",{"trae-inspector-start-line":"73","trae-inspector-start-column":"8","trae-inspector-end-line":"86","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{"trae-inspector-start-line":"74","trae-inspector-start-column":"10","trae-inspector-end-line":"85","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center max-w-3xl mx-auto",children:[n.jsxs("div",{"trae-inspector-start-line":"75","trae-inspector-start-column":"12","trae-inspector-end-line":"78","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6",children:[n.jsx(Zn,{className:"w-4 h-4 text-cyan-400"}),n.jsx("span",{"trae-inspector-start-line":"77","trae-inspector-start-column":"14","trae-inspector-end-line":"77","trae-inspector-end-column":"34","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8C%BB%E7%96%97%E8%AE%BE%E5%A4%87%E8%B5%84%E6%96%99%E5%BA%93%22%2C%22textStartLine%22%3A%2277%22%2C%22textStartColumn%22%3A%2220%22%2C%22textEndLine%22%3A%2277%22%2C%22textEndColumn%22%3A%2227%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"医疗设备资料库"})]}),n.jsx("h1",{"trae-inspector-start-line":"79","trae-inspector-start-column":"12","trae-inspector-end-line":"81","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BB%8B%E5%85%A5%E5%BD%B1%E5%83%8F%E8%AE%BE%E5%A4%87%E5%A4%A7%E5%85%A8%22%2C%22textStartLine%22%3A%2279%22%2C%22textStartColumn%22%3A%22101%22%2C%22textEndLine%22%3A%2281%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight",children:"介入影像设备大全"}),n.jsx("p",{"trae-inspector-start-line":"82","trae-inspector-start-column":"12","trae-inspector-end-line":"84","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B1%87%E9%9B%86%E5%85%A8%E7%90%83%E4%B8%BB%E6%B5%81%E5%93%81%E7%89%8CDSA%E8%AE%BE%E5%A4%87%EF%BC%8C%E6%8F%90%E4%BE%9B%E8%AF%A6%E7%BB%86%E5%8F%82%E6%95%B0%E5%AF%B9%E6%AF%94%EF%BC%8C%E5%8A%A9%E6%82%A8%E9%80%89%E6%8B%A9%E6%9C%80%E9%80%82%E5%90%88%E7%9A%84%E4%BB%8B%E5%85%A5%E5%BD%B1%E5%83%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%22%2C%22textStartLine%22%3A%2282%22%2C%22textStartColumn%22%3A%2265%22%2C%22textEndLine%22%3A%2284%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg text-white/70 leading-relaxed",children:"汇集全球主流品牌DSA设备，提供详细参数对比，助您选择最适合的介入影像解决方案"})]})})]}),n.jsx("section",{"trae-inspector-start-line":"90","trae-inspector-start-column":"6","trae-inspector-end-line":"113","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm",children:n.jsx("div",{"trae-inspector-start-line":"91","trae-inspector-start-column":"8","trae-inspector-end-line":"112","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsx("div",{"trae-inspector-start-line":"92","trae-inspector-start-column":"10","trae-inspector-end-line":"111","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide",children:v.map(F=>n.jsxs("button",{"trae-inspector-start-line":"94","trae-inspector-start-column":"14","trae-inspector-end-line":"109","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>A(F),className:`flex-shrink-0 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${c===F?"bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[F,F!=="全部"&&n.jsxs("span",{"trae-inspector-start-line":"105","trae-inspector-start-column":"18","trae-inspector-end-line":"107","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"ml-1.5 text-xs opacity-80",children:["(",lr.filter(N=>N.brand===F).length,")"]})]},F))})})}),u.length>0&&n.jsx("div",{"trae-inspector-start-line":"117","trae-inspector-start-column":"8","trae-inspector-end-line":"170","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky top-[73px] z-10 bg-white border-b border-slate-200 shadow-sm",children:n.jsx("div",{"trae-inspector-start-line":"118","trae-inspector-start-column":"10","trae-inspector-end-line":"169","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3",children:n.jsxs("div",{"trae-inspector-start-line":"119","trae-inspector-start-column":"12","trae-inspector-end-line":"168","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between",children:[n.jsxs("div",{"trae-inspector-start-line":"120","trae-inspector-start-column":"14","trae-inspector-end-line":"148","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4",children:[n.jsxs("div",{"trae-inspector-start-line":"121","trae-inspector-start-column":"16","trae-inspector-end-line":"124","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Aa,{className:"w-5 h-5 text-blue-600"}),n.jsx("span",{"trae-inspector-start-line":"123","trae-inspector-start-column":"18","trae-inspector-end-line":"123","trae-inspector-end-column":"74","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%AF%B9%E6%AF%94%E5%88%97%E8%A1%A8%22%2C%22textStartLine%22%3A%22123%22%2C%22textStartColumn%22%3A%2263%22%2C%22textEndLine%22%3A%22123%22%2C%22textEndColumn%22%3A%2267%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-medium text-slate-700",children:"对比列表"})]}),n.jsxs("div",{"trae-inspector-start-line":"125","trae-inspector-start-column":"16","trae-inspector-end-line":"147","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[u.map(F=>n.jsxs("div",{"trae-inspector-start-line":"127","trae-inspector-start-column":"20","trae-inspector-end-line":"140","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100",children:[n.jsx("span",{"trae-inspector-start-line":"131","trae-inspector-start-column":"22","trae-inspector-end-line":"133","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-blue-700 font-medium truncate max-w-[150px]",children:F.model}),n.jsx("button",{"trae-inspector-start-line":"134","trae-inspector-start-column":"22","trae-inspector-end-line":"139","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>D(F),className:"text-blue-400 hover:text-blue-600 transition-colors",children:n.jsx(_o,{className:"w-4 h-4"})})]},F.id)),u.length<3&&n.jsxs("span",{"trae-inspector-start-line":"143","trae-inspector-start-column":"20","trae-inspector-end-line":"145","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-400",children:["还可添加 ",3-u.length," 个设备"]})]})]}),n.jsxs("div",{"trae-inspector-start-line":"149","trae-inspector-start-column":"14","trae-inspector-end-line":"167","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsx("button",{"trae-inspector-start-line":"150","trae-inspector-start-column":"16","trae-inspector-end-line":"155","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B8%85%E7%A9%BA%22%2C%22textStartLine%22%3A%22153%22%2C%22textStartColumn%22%3A%2217%22%2C%22textEndLine%22%3A%22155%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>h([]),className:"text-sm text-slate-500 hover:text-slate-700 transition-colors",children:"清空"}),n.jsx("button",{"trae-inspector-start-line":"156","trae-inspector-start-column":"16","trae-inspector-end-line":"166","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%BC%80%E5%A7%8B%E5%AF%B9%E6%AF%94%22%2C%22textStartLine%22%3A%22164%22%2C%22textStartColumn%22%3A%2217%22%2C%22textEndLine%22%3A%22166%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>x(!0),disabled:u.length<2,className:`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${u.length>=2?"bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl":"bg-slate-200 text-slate-400 cursor-not-allowed"}`,children:"开始对比"})]})]})})}),n.jsx("section",{"trae-inspector-start-line":"174","trae-inspector-start-column":"6","trae-inspector-end-line":"284","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-12",children:n.jsxs("div",{"trae-inspector-start-line":"175","trae-inspector-start-column":"8","trae-inspector-end-line":"283","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsx("div",{"trae-inspector-start-line":"176","trae-inspector-start-column":"10","trae-inspector-end-line":"183","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-end justify-between mb-8",children:n.jsxs("div",{"trae-inspector-start-line":"177","trae-inspector-start-column":"12","trae-inspector-end-line":"182","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h2",{"trae-inspector-start-line":"178","trae-inspector-start-column":"14","trae-inspector-end-line":"180","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800 mb-1",children:c==="全部"?"全部设备":`${c} 设备`}),n.jsxs("p",{"trae-inspector-start-line":"181","trae-inspector-start-column":"14","trae-inspector-end-line":"181","trae-inspector-end-column":"81","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500",children:["共 ",E.length," 款设备"]})]})}),n.jsx("div",{"trae-inspector-start-line":"185","trae-inspector-start-column":"10","trae-inspector-end-line":"282","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:E.map(F=>n.jsxs("div",{"trae-inspector-start-line":"187","trae-inspector-start-column":"14","trae-inspector-end-line":"280","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-200 group",children:[n.jsxs("div",{"trae-inspector-start-line":"191","trae-inspector-start-column":"16","trae-inspector-end-line":"217","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative h-52 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200",children:[n.jsx("img",{"trae-inspector-start-line":"192","trae-inspector-start-column":"18","trae-inspector-end-line":"196","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:F.images[0],alt:F.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"}),n.jsx("div",{"trae-inspector-start-line":"197","trae-inspector-start-column":"18","trae-inspector-end-line":"201","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute top-4 left-4 flex items-center gap-2",children:n.jsx("span",{"trae-inspector-start-line":"198","trae-inspector-start-column":"20","trae-inspector-end-line":"200","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${cp[F.brand]||"from-slate-500 to-slate-600"} shadow-lg`,children:F.brand})}),n.jsx("button",{"trae-inspector-start-line":"202","trae-inspector-start-column":"18","trae-inspector-end-line":"215","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>D(F),className:`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${y(F.id)?"bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-110":"bg-white/90 text-slate-600 hover:bg-white hover:text-blue-600 shadow-md"}`,children:y(F.id)?n.jsx(Qn,{className:"w-4 h-4"}):n.jsx("span",{"trae-inspector-start-line":"213","trae-inspector-start-column":"22","trae-inspector-end-line":"213","trae-inspector-end-column":"67","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%2B%22%2C%22textStartLine%22%3A%22213%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22213%22%2C%22textEndColumn%22%3A%2260%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-light",children:"+"})}),n.jsx("div",{"trae-inspector-start-line":"216","trae-inspector-start-column":"18","trae-inspector-end-line":"216","trae-inspector-end-column":"187","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),n.jsxs("div",{"trae-inspector-start-line":"219","trae-inspector-start-column":"16","trae-inspector-end-line":"279","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-6",children:[n.jsxs("div",{"trae-inspector-start-line":"220","trae-inspector-start-column":"18","trae-inspector-end-line":"225","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mb-3",children:[n.jsx("p",{"trae-inspector-start-line":"221","trae-inspector-start-column":"20","trae-inspector-end-line":"221","trae-inspector-end-column":"91","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-blue-600 font-medium mb-1",children:F.model}),n.jsx("h3",{"trae-inspector-start-line":"222","trae-inspector-start-column":"20","trae-inspector-end-line":"224","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2",children:F.name})]}),n.jsx("p",{"trae-inspector-start-line":"227","trae-inspector-start-column":"18","trae-inspector-end-line":"229","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed",children:F.description}),n.jsxs("div",{"trae-inspector-start-line":"231","trae-inspector-start-column":"18","trae-inspector-end-line":"250","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-2 mb-5",children:[n.jsxs("div",{"trae-inspector-start-line":"232","trae-inspector-start-column":"20","trae-inspector-end-line":"237","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx($o,{className:"w-4 h-4 text-slate-400 flex-shrink-0"}),n.jsx("span",{"trae-inspector-start-line":"234","trae-inspector-start-column":"22","trae-inspector-end-line":"236","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-600 truncate",children:F.parameters.探测器类型||"高端探测器"})]}),n.jsxs("div",{"trae-inspector-start-line":"238","trae-inspector-start-column":"20","trae-inspector-end-line":"243","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Lp,{className:"w-4 h-4 text-slate-400 flex-shrink-0"}),n.jsx("span",{"trae-inspector-start-line":"240","trae-inspector-start-column":"22","trae-inspector-end-line":"242","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-600 truncate",children:F.parameters.探测器尺寸||"标准尺寸"})]}),n.jsxs("div",{"trae-inspector-start-line":"244","trae-inspector-start-column":"20","trae-inspector-end-line":"249","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Xo,{className:"w-4 h-4 text-slate-400 flex-shrink-0"}),n.jsx("span",{"trae-inspector-start-line":"246","trae-inspector-start-column":"22","trae-inspector-end-line":"248","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-600 truncate",children:F.parameters.空间分辨率||"高分辨率"})]})]}),n.jsxs("div",{"trae-inspector-start-line":"252","trae-inspector-start-column":"18","trae-inspector-end-line":"264","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mb-5",children:[n.jsx("p",{"trae-inspector-start-line":"253","trae-inspector-start-column":"20","trae-inspector-end-line":"253","trae-inspector-end-column":"71","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%A0%B8%E5%BF%83%E7%89%B9%E6%80%A7%22%2C%22textStartLine%22%3A%22253%22%2C%22textStartColumn%22%3A%2263%22%2C%22textEndLine%22%3A%22253%22%2C%22textEndColumn%22%3A%2267%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-400 mb-2",children:"核心特性"}),n.jsx("div",{"trae-inspector-start-line":"254","trae-inspector-start-column":"20","trae-inspector-end-line":"263","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap gap-1.5",children:F.features.slice(0,3).map((N,b)=>n.jsx("span",{"trae-inspector-start-line":"256","trae-inspector-start-column":"24","trae-inspector-end-line":"261","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-2 py-0.5 text-xs bg-slate-50 text-slate-600 rounded border border-slate-100",children:N.length>12?N.slice(0,12)+"...":N},b))})]}),n.jsxs("div",{"trae-inspector-start-line":"266","trae-inspector-start-column":"18","trae-inspector-end-line":"278","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[n.jsxs("div",{"trae-inspector-start-line":"267","trae-inspector-start-column":"20","trae-inspector-end-line":"270","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1 text-xs text-slate-400",children:[n.jsx(bh,{className:"w-3.5 h-3.5"}),n.jsxs("span",{"trae-inspector-start-line":"269","trae-inspector-start-column":"22","trae-inspector-end-line":"269","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:["发布于 ",F.releaseDate]})]}),n.jsxs("button",{"trae-inspector-start-line":"271","trae-inspector-start-column":"20","trae-inspector-end-line":"277","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>o(`/equipment/detail/${F.id}`),className:"flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn",children:["查看详情",n.jsx(ct,{className:"w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform"})]})]})]})]},F.id))})]})}),d&&n.jsx("div",{"trae-inspector-start-line":"288","trae-inspector-start-column":"8","trae-inspector-end-line":"395","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:n.jsxs("div",{"trae-inspector-start-line":"289","trae-inspector-start-column":"10","trae-inspector-end-line":"394","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col",children:[n.jsxs("div",{"trae-inspector-start-line":"290","trae-inspector-start-column":"12","trae-inspector-end-line":"306","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white",children:[n.jsxs("div",{"trae-inspector-start-line":"291","trae-inspector-start-column":"14","trae-inspector-end-line":"299","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsx("div",{"trae-inspector-start-line":"292","trae-inspector-start-column":"16","trae-inspector-end-line":"294","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30",children:n.jsx(Aa,{className:"w-5 h-5 text-white"})}),n.jsxs("div",{"trae-inspector-start-line":"295","trae-inspector-start-column":"16","trae-inspector-end-line":"298","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h2",{"trae-inspector-start-line":"296","trae-inspector-start-column":"18","trae-inspector-end-line":"296","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AE%BE%E5%A4%87%E5%8F%82%E6%95%B0%E5%AF%B9%E6%AF%94%22%2C%22textStartLine%22%3A%22296%22%2C%22textStartColumn%22%3A%2267%22%2C%22textEndLine%22%3A%22296%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800",children:"设备参数对比"}),n.jsxs("p",{"trae-inspector-start-line":"297","trae-inspector-start-column":"18","trae-inspector-end-line":"297","trae-inspector-end-column":"88","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:[u.length," 款设备对比分析"]})]})]}),n.jsx("button",{"trae-inspector-start-line":"300","trae-inspector-start-column":"14","trae-inspector-end-line":"305","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>x(!1),className:"w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors",children:n.jsx(_o,{className:"w-5 h-5 text-slate-600"})})]}),n.jsx("div",{"trae-inspector-start-line":"308","trae-inspector-start-column":"12","trae-inspector-end-line":"384","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1 overflow-auto p-6",children:n.jsx("div",{"trae-inspector-start-line":"309","trae-inspector-start-column":"14","trae-inspector-end-line":"383","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"overflow-x-auto",children:n.jsxs("table",{"trae-inspector-start-line":"310","trae-inspector-start-column":"16","trae-inspector-end-line":"382","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full border-collapse",children:[n.jsx("thead",{"trae-inspector-start-line":"311","trae-inspector-start-column":"18","trae-inspector-end-line":"330","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsxs("tr",{"trae-inspector-start-line":"312","trae-inspector-start-column":"20","trae-inspector-end-line":"329","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-slate-50 to-blue-50",children:[n.jsx("th",{"trae-inspector-start-line":"313","trae-inspector-start-column":"22","trae-inspector-end-line":"315","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8F%82%E6%95%B0%E9%A1%B9%22%2C%22textStartLine%22%3A%22313%22%2C%22textStartColumn%22%3A%22196%22%2C%22textEndLine%22%3A%22315%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-gradient-to-r from-slate-50 to-blue-50 text-left px-4 py-3 text-sm font-semibold text-slate-700 border-b border-slate-200 min-w-[140px] z-10",children:"参数项"}),u.map(F=>n.jsx("th",{"trae-inspector-start-line":"317","trae-inspector-start-column":"24","trae-inspector-end-line":"327","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center px-4 py-3 border-b border-slate-200 min-w-[200px]",children:n.jsxs("div",{"trae-inspector-start-line":"321","trae-inspector-start-column":"26","trae-inspector-end-line":"326","trae-inspector-end-column":"32","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-col items-center gap-2",children:[n.jsx("span",{"trae-inspector-start-line":"322","trae-inspector-start-column":"28","trae-inspector-end-line":"324","trae-inspector-end-column":"35","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${cp[F.brand]||"from-slate-500 to-slate-600"}`,children:F.brand}),n.jsx("span",{"trae-inspector-start-line":"325","trae-inspector-start-column":"28","trae-inspector-end-line":"325","trae-inspector-end-column":"101","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-bold text-slate-800 text-base",children:F.model})]})},F.id))]})}),n.jsxs("tbody",{"trae-inspector-start-line":"331","trae-inspector-start-column":"18","trae-inspector-end-line":"381","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsxs("tr",{"trae-inspector-start-line":"332","trae-inspector-start-column":"20","trae-inspector-end-line":"341","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hover:bg-slate-50/50",children:[n.jsx("td",{"trae-inspector-start-line":"333","trae-inspector-start-column":"22","trae-inspector-end-line":"335","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AE%BE%E5%A4%87%E5%90%8D%E7%A7%B0%22%2C%22textStartLine%22%3A%22333%22%2C%22textStartColumn%22%3A%22147%22%2C%22textEndLine%22%3A%22335%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10",children:"设备名称"}),u.map(F=>n.jsx("td",{"trae-inspector-start-line":"337","trae-inspector-start-column":"24","trae-inspector-end-line":"339","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center px-4 py-3 text-sm text-slate-700 border-b border-slate-100",children:F.name},F.id))]}),n.jsxs("tr",{"trae-inspector-start-line":"342","trae-inspector-start-column":"20","trae-inspector-end-line":"351","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hover:bg-slate-50/50",children:[n.jsx("td",{"trae-inspector-start-line":"343","trae-inspector-start-column":"22","trae-inspector-end-line":"345","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8F%91%E5%B8%83%E6%97%B6%E9%97%B4%22%2C%22textStartLine%22%3A%22343%22%2C%22textStartColumn%22%3A%22147%22%2C%22textEndLine%22%3A%22345%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10",children:"发布时间"}),u.map(F=>n.jsx("td",{"trae-inspector-start-line":"347","trae-inspector-start-column":"24","trae-inspector-end-line":"349","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center px-4 py-3 text-sm text-slate-700 border-b border-slate-100",children:F.releaseDate},F.id))]}),V.map((F,N)=>n.jsxs("tr",{"trae-inspector-start-line":"353","trae-inspector-start-column":"22","trae-inspector-end-line":"362","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:N%2===0?"bg-slate-50/30 hover:bg-slate-50/60":"hover:bg-slate-50/50",children:[n.jsx("td",{"trae-inspector-start-line":"354","trae-inspector-start-column":"24","trae-inspector-end-line":"356","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10",children:F}),u.map(b=>n.jsx("td",{"trae-inspector-start-line":"358","trae-inspector-start-column":"26","trae-inspector-end-line":"360","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center px-4 py-3 text-sm text-slate-700 border-b border-slate-100",children:b.parameters[F]||"-"},b.id))]},F)),n.jsxs("tr",{"trae-inspector-start-line":"364","trae-inspector-start-column":"20","trae-inspector-end-line":"380","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hover:bg-slate-50/50",children:[n.jsx("td",{"trae-inspector-start-line":"365","trae-inspector-start-column":"22","trae-inspector-end-line":"367","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%A0%B8%E5%BF%83%E7%89%B9%E6%80%A7%22%2C%22textStartLine%22%3A%22365%22%2C%22textStartColumn%22%3A%22157%22%2C%22textEndLine%22%3A%22367%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10 align-top",children:"核心特性"}),u.map(F=>n.jsx("td",{"trae-inspector-start-line":"369","trae-inspector-start-column":"24","trae-inspector-end-line":"378","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-4 py-3 text-sm text-slate-700 border-b border-slate-100 align-top",children:n.jsx("ul",{"trae-inspector-start-line":"370","trae-inspector-start-column":"26","trae-inspector-end-line":"377","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-1.5",children:F.features.map((N,b)=>n.jsxs("li",{"trae-inspector-start-line":"372","trae-inspector-start-column":"30","trae-inspector-end-line":"375","trae-inspector-end-column":"35","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start gap-2",children:[n.jsx(Qn,{className:"w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"}),n.jsx("span",{"trae-inspector-start-line":"374","trae-inspector-start-column":"32","trae-inspector-end-line":"374","trae-inspector-end-column":"54","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:N})]},b))})},F.id))]})]})]})})}),n.jsx("div",{"trae-inspector-start-line":"386","trae-inspector-start-column":"12","trae-inspector-end-line":"393","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50",children:n.jsx("button",{"trae-inspector-start-line":"387","trae-inspector-start-column":"14","trae-inspector-end-line":"392","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Equipment.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%B3%E9%97%AD%22%2C%22textStartLine%22%3A%22390%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22392%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>x(!1),className:"px-5 py-2.5 rounded-lg font-medium text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors",children:"关闭"})})]})})]})}const pp={飞利浦:"from-blue-500 to-cyan-500",西门子:"from-indigo-500 to-blue-500",联影:"from-emerald-500 to-teal-500",GE医疗:"from-sky-500 to-blue-500",东芝:"from-orange-500 to-amber-500",东软:"from-purple-500 to-violet-500"};function e1(){const{id:o}=sn(),l=Xe(),[c,m]=C.useState([]),[u,h]=C.useState(!1),d=C.useMemo(()=>lr.find(A=>A.id===o),[o]),x=C.useMemo(()=>d?lr.filter(A=>A.id!==d.id&&A.brand===d.brand).slice(0,3):[],[d]),E=A=>{m(D=>D.find(V=>V.id===A.id)?D.filter(V=>V.id!==A.id):D.length>=3?D:[...D,A])},v=C.useMemo(()=>{const A=new Set;return c.forEach(D=>{Object.keys(D.parameters).forEach(y=>A.add(y))}),Array.from(A)},[c]);return d?n.jsxs("div",{"trae-inspector-start-line":"87","trae-inspector-start-column":"4","trae-inspector-end-line":"414","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[u&&n.jsx("div",{"trae-inspector-start-line":"89","trae-inspector-start-column":"8","trae-inspector-end-line":"194","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:n.jsxs("div",{"trae-inspector-start-line":"90","trae-inspector-start-column":"10","trae-inspector-end-line":"193","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col",children:[n.jsxs("div",{"trae-inspector-start-line":"91","trae-inspector-start-column":"12","trae-inspector-end-line":"107","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white",children:[n.jsxs("div",{"trae-inspector-start-line":"92","trae-inspector-start-column":"14","trae-inspector-end-line":"100","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsx("div",{"trae-inspector-start-line":"93","trae-inspector-start-column":"16","trae-inspector-end-line":"95","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30",children:n.jsx(Aa,{className:"w-5 h-5 text-white"})}),n.jsxs("div",{"trae-inspector-start-line":"96","trae-inspector-start-column":"16","trae-inspector-end-line":"99","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h2",{"trae-inspector-start-line":"97","trae-inspector-start-column":"18","trae-inspector-end-line":"97","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AE%BE%E5%A4%87%E5%8F%82%E6%95%B0%E5%AF%B9%E6%AF%94%22%2C%22textStartLine%22%3A%2297%22%2C%22textStartColumn%22%3A%2267%22%2C%22textEndLine%22%3A%2297%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800",children:"设备参数对比"}),n.jsxs("p",{"trae-inspector-start-line":"98","trae-inspector-start-column":"18","trae-inspector-end-line":"98","trae-inspector-end-column":"88","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:[c.length," 款设备对比分析"]})]})]}),n.jsx("button",{"trae-inspector-start-line":"101","trae-inspector-start-column":"14","trae-inspector-end-line":"106","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>h(!1),className:"w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors",children:n.jsx("span",{"trae-inspector-start-line":"105","trae-inspector-start-column":"16","trae-inspector-end-line":"105","trae-inspector-end-column":"65","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%C3%97%22%2C%22textStartLine%22%3A%22105%22%2C%22textStartColumn%22%3A%2257%22%2C%22textEndLine%22%3A%22105%22%2C%22textEndColumn%22%3A%2258%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 text-xl",children:"×"})})]}),n.jsx("div",{"trae-inspector-start-line":"108","trae-inspector-start-column":"12","trae-inspector-end-line":"184","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1 overflow-auto p-6",children:n.jsx("div",{"trae-inspector-start-line":"109","trae-inspector-start-column":"14","trae-inspector-end-line":"183","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"overflow-x-auto",children:n.jsxs("table",{"trae-inspector-start-line":"110","trae-inspector-start-column":"16","trae-inspector-end-line":"182","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-full border-collapse",children:[n.jsx("thead",{"trae-inspector-start-line":"111","trae-inspector-start-column":"18","trae-inspector-end-line":"130","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:n.jsxs("tr",{"trae-inspector-start-line":"112","trae-inspector-start-column":"20","trae-inspector-end-line":"129","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-slate-50 to-blue-50",children:[n.jsx("th",{"trae-inspector-start-line":"113","trae-inspector-start-column":"22","trae-inspector-end-line":"115","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8F%82%E6%95%B0%E9%A1%B9%22%2C%22textStartLine%22%3A%22113%22%2C%22textStartColumn%22%3A%22196%22%2C%22textEndLine%22%3A%22115%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-gradient-to-r from-slate-50 to-blue-50 text-left px-4 py-3 text-sm font-semibold text-slate-700 border-b border-slate-200 min-w-[140px] z-10",children:"参数项"}),c.map(A=>n.jsx("th",{"trae-inspector-start-line":"117","trae-inspector-start-column":"24","trae-inspector-end-line":"127","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center px-4 py-3 border-b border-slate-200 min-w-[200px]",children:n.jsxs("div",{"trae-inspector-start-line":"121","trae-inspector-start-column":"26","trae-inspector-end-line":"126","trae-inspector-end-column":"32","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-col items-center gap-2",children:[n.jsx("span",{"trae-inspector-start-line":"122","trae-inspector-start-column":"28","trae-inspector-end-line":"124","trae-inspector-end-column":"35","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${pp[A.brand]||"from-slate-500 to-slate-600"}`,children:A.brand}),n.jsx("span",{"trae-inspector-start-line":"125","trae-inspector-start-column":"28","trae-inspector-end-line":"125","trae-inspector-end-column":"101","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-bold text-slate-800 text-base",children:A.model})]})},A.id))]})}),n.jsxs("tbody",{"trae-inspector-start-line":"131","trae-inspector-start-column":"18","trae-inspector-end-line":"181","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsxs("tr",{"trae-inspector-start-line":"132","trae-inspector-start-column":"20","trae-inspector-end-line":"141","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hover:bg-slate-50/50",children:[n.jsx("td",{"trae-inspector-start-line":"133","trae-inspector-start-column":"22","trae-inspector-end-line":"135","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AE%BE%E5%A4%87%E5%90%8D%E7%A7%B0%22%2C%22textStartLine%22%3A%22133%22%2C%22textStartColumn%22%3A%22147%22%2C%22textEndLine%22%3A%22135%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10",children:"设备名称"}),c.map(A=>n.jsx("td",{"trae-inspector-start-line":"137","trae-inspector-start-column":"24","trae-inspector-end-line":"139","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center px-4 py-3 text-sm text-slate-700 border-b border-slate-100",children:A.name},A.id))]}),n.jsxs("tr",{"trae-inspector-start-line":"142","trae-inspector-start-column":"20","trae-inspector-end-line":"151","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hover:bg-slate-50/50",children:[n.jsx("td",{"trae-inspector-start-line":"143","trae-inspector-start-column":"22","trae-inspector-end-line":"145","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8F%91%E5%B8%83%E6%97%B6%E9%97%B4%22%2C%22textStartLine%22%3A%22143%22%2C%22textStartColumn%22%3A%22147%22%2C%22textEndLine%22%3A%22145%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10",children:"发布时间"}),c.map(A=>n.jsx("td",{"trae-inspector-start-line":"147","trae-inspector-start-column":"24","trae-inspector-end-line":"149","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center px-4 py-3 text-sm text-slate-700 border-b border-slate-100",children:A.releaseDate},A.id))]}),v.map((A,D)=>n.jsxs("tr",{"trae-inspector-start-line":"153","trae-inspector-start-column":"22","trae-inspector-end-line":"162","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:D%2===0?"bg-slate-50/30 hover:bg-slate-50/60":"hover:bg-slate-50/50",children:[n.jsx("td",{"trae-inspector-start-line":"154","trae-inspector-start-column":"24","trae-inspector-end-line":"156","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10",children:A}),c.map(y=>n.jsx("td",{"trae-inspector-start-line":"158","trae-inspector-start-column":"26","trae-inspector-end-line":"160","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center px-4 py-3 text-sm text-slate-700 border-b border-slate-100",children:y.parameters[A]||"-"},y.id))]},A)),n.jsxs("tr",{"trae-inspector-start-line":"164","trae-inspector-start-column":"20","trae-inspector-end-line":"180","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hover:bg-slate-50/50",children:[n.jsx("td",{"trae-inspector-start-line":"165","trae-inspector-start-column":"22","trae-inspector-end-line":"167","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%A0%B8%E5%BF%83%E7%89%B9%E6%80%A7%22%2C%22textStartLine%22%3A%22165%22%2C%22textStartColumn%22%3A%22157%22%2C%22textEndLine%22%3A%22167%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10 align-top",children:"核心特性"}),c.map(A=>n.jsx("td",{"trae-inspector-start-line":"169","trae-inspector-start-column":"24","trae-inspector-end-line":"178","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-4 py-3 text-sm text-slate-700 border-b border-slate-100 align-top",children:n.jsx("ul",{"trae-inspector-start-line":"170","trae-inspector-start-column":"26","trae-inspector-end-line":"177","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-1.5",children:A.features.map((D,y)=>n.jsxs("li",{"trae-inspector-start-line":"172","trae-inspector-start-column":"30","trae-inspector-end-line":"175","trae-inspector-end-column":"35","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start gap-2",children:[n.jsx(Qn,{className:"w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"}),n.jsx("span",{"trae-inspector-start-line":"174","trae-inspector-start-column":"32","trae-inspector-end-line":"174","trae-inspector-end-column":"54","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:D})]},y))})},A.id))]})]})]})})}),n.jsx("div",{"trae-inspector-start-line":"185","trae-inspector-start-column":"12","trae-inspector-end-line":"192","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50",children:n.jsx("button",{"trae-inspector-start-line":"186","trae-inspector-start-column":"14","trae-inspector-end-line":"191","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%B3%E9%97%AD%22%2C%22textStartLine%22%3A%22189%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22191%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>h(!1),className:"px-5 py-2.5 rounded-lg font-medium text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors",children:"关闭"})})]})}),n.jsx("div",{"trae-inspector-start-line":"197","trae-inspector-start-column":"6","trae-inspector-end-line":"229","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 pt-8 pb-16",children:n.jsxs("div",{"trae-inspector-start-line":"198","trae-inspector-start-column":"8","trae-inspector-end-line":"228","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("button",{"trae-inspector-start-line":"199","trae-inspector-start-column":"10","trae-inspector-end-line":"205","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回列表"]}),n.jsxs("div",{"trae-inspector-start-line":"206","trae-inspector-start-column":"10","trae-inspector-end-line":"211","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3 mb-4",children:[n.jsx("span",{"trae-inspector-start-line":"207","trae-inspector-start-column":"12","trae-inspector-end-line":"209","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${pp[d.brand]||"from-slate-500 to-slate-600"}`,children:d.brand}),n.jsx("span",{"trae-inspector-start-line":"210","trae-inspector-start-column":"12","trae-inspector-end-line":"210","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/70 text-sm",children:d.model})]}),n.jsx("h1",{"trae-inspector-start-line":"212","trae-inspector-start-column":"10","trae-inspector-end-line":"214","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight",children:d.name}),n.jsx("p",{"trae-inspector-start-line":"215","trae-inspector-start-column":"10","trae-inspector-end-line":"217","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/70 text-lg leading-relaxed max-w-3xl",children:d.description}),n.jsxs("div",{"trae-inspector-start-line":"218","trae-inspector-start-column":"10","trae-inspector-end-line":"227","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center gap-6 mt-6 text-white/70 text-sm",children:[n.jsxs("span",{"trae-inspector-start-line":"219","trae-inspector-start-column":"12","trae-inspector-end-line":"222","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Zn,{className:"w-4 h-4"}),d.brand]}),n.jsxs("span",{"trae-inspector-start-line":"223","trae-inspector-start-column":"12","trae-inspector-end-line":"226","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Ft,{className:"w-4 h-4"}),"发布于 ",d.releaseDate]})]})]})}),n.jsx("div",{"trae-inspector-start-line":"231","trae-inspector-start-column":"6","trae-inspector-end-line":"413","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:n.jsxs("div",{"trae-inspector-start-line":"232","trae-inspector-start-column":"8","trae-inspector-end-line":"412","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[n.jsxs("div",{"trae-inspector-start-line":"233","trae-inspector-start-column":"10","trae-inspector-end-line":"280","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:col-span-2 space-y-6",children:[n.jsx("div",{"trae-inspector-start-line":"234","trae-inspector-start-column":"12","trae-inspector-end-line":"242","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",children:n.jsx("div",{"trae-inspector-start-line":"235","trae-inspector-start-column":"14","trae-inspector-end-line":"241","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden",children:n.jsx("img",{"trae-inspector-start-line":"236","trae-inspector-start-column":"16","trae-inspector-end-line":"240","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:d.images[0],alt:d.name,className:"w-full h-full object-cover"})})}),n.jsxs("div",{"trae-inspector-start-line":"244","trae-inspector-start-column":"12","trae-inspector-end-line":"262","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsxs("h2",{"trae-inspector-start-line":"245","trae-inspector-start-column":"14","trae-inspector-end-line":"248","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 mb-6 flex items-center gap-2",children:[n.jsx($o,{className:"w-5 h-5 text-blue-600"}),"技术参数"]}),n.jsx("div",{"trae-inspector-start-line":"249","trae-inspector-start-column":"14","trae-inspector-end-line":"261","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Object.entries(d.parameters).map(([A,D])=>n.jsxs("div",{"trae-inspector-start-line":"251","trae-inspector-start-column":"18","trae-inspector-end-line":"259","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start gap-3 p-3 bg-slate-50 rounded-lg",children:[n.jsx("div",{"trae-inspector-start-line":"252","trae-inspector-start-column":"20","trae-inspector-end-line":"254","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0",children:n.jsx(Lp,{className:"w-4 h-4 text-blue-600"})}),n.jsxs("div",{"trae-inspector-start-line":"255","trae-inspector-start-column":"20","trae-inspector-end-line":"258","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("p",{"trae-inspector-start-line":"256","trae-inspector-start-column":"22","trae-inspector-end-line":"256","trae-inspector-end-column":"74","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-500 mb-1",children:A}),n.jsx("p",{"trae-inspector-start-line":"257","trae-inspector-start-column":"22","trae-inspector-end-line":"257","trae-inspector-end-column":"83","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-800",children:D})]})]},A))})]}),n.jsxs("div",{"trae-inspector-start-line":"264","trae-inspector-start-column":"12","trae-inspector-end-line":"279","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsxs("h2",{"trae-inspector-start-line":"265","trae-inspector-start-column":"14","trae-inspector-end-line":"268","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 mb-6 flex items-center gap-2",children:[n.jsx(Xo,{className:"w-5 h-5 text-blue-600"}),"核心特性"]}),n.jsx("div",{"trae-inspector-start-line":"269","trae-inspector-start-column":"14","trae-inspector-end-line":"278","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-3",children:d.features.map((A,D)=>n.jsxs("div",{"trae-inspector-start-line":"271","trae-inspector-start-column":"18","trae-inspector-end-line":"276","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors",children:[n.jsx("div",{"trae-inspector-start-line":"272","trae-inspector-start-column":"20","trae-inspector-end-line":"274","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5",children:n.jsx(Qn,{className:"w-3.5 h-3.5 text-emerald-600"})}),n.jsx("p",{"trae-inspector-start-line":"275","trae-inspector-start-column":"20","trae-inspector-end-line":"275","trae-inspector-end-column":"63","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-700",children:A})]},D))})]})]}),n.jsxs("div",{"trae-inspector-start-line":"282","trae-inspector-start-column":"10","trae-inspector-end-line":"411","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-6",children:[n.jsxs("div",{"trae-inspector-start-line":"283","trae-inspector-start-column":"12","trae-inspector-end-line":"303","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"284","trae-inspector-start-column":"14","trae-inspector-end-line":"284","trae-inspector-end-column":"73","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%BF%AB%E9%80%9F%E6%93%8D%E4%BD%9C%22%2C%22textStartLine%22%3A%22284%22%2C%22textStartColumn%22%3A%2264%22%2C%22textEndLine%22%3A%22284%22%2C%22textEndColumn%22%3A%2268%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"快速操作"}),n.jsxs("div",{"trae-inspector-start-line":"285","trae-inspector-start-column":"14","trae-inspector-end-line":"302","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-3",children:[n.jsxs("button",{"trae-inspector-start-line":"286","trae-inspector-start-column":"16","trae-inspector-end-line":"295","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>{E(d),h(!0)},className:"w-full py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2",children:[n.jsx(Aa,{className:"w-4 h-4"}),"加入对比"]}),n.jsx("button",{"trae-inspector-start-line":"296","trae-inspector-start-column":"16","trae-inspector-end-line":"301","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%BF%94%E5%9B%9E%E8%AE%BE%E5%A4%87%E5%88%97%E8%A1%A8%22%2C%22textStartLine%22%3A%22299%22%2C%22textStartColumn%22%3A%2217%22%2C%22textEndLine%22%3A%22301%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/equipment"),className:"w-full py-3 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors",children:"返回设备列表"})]})]}),n.jsxs("div",{"trae-inspector-start-line":"305","trae-inspector-start-column":"12","trae-inspector-end-line":"329","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"306","trae-inspector-start-column":"14","trae-inspector-end-line":"306","trae-inspector-end-column":"73","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF%22%2C%22textStartLine%22%3A%22306%22%2C%22textStartColumn%22%3A%2264%22%2C%22textEndLine%22%3A%22306%22%2C%22textEndColumn%22%3A%2268%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"设备信息"}),n.jsxs("div",{"trae-inspector-start-line":"307","trae-inspector-start-column":"14","trae-inspector-end-line":"328","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-3",children:[n.jsxs("div",{"trae-inspector-start-line":"308","trae-inspector-start-column":"16","trae-inspector-end-line":"311","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"309","trae-inspector-start-column":"18","trae-inspector-end-line":"309","trae-inspector-end-column":"68","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%93%81%E7%89%8C%22%2C%22textStartLine%22%3A%22309%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22309%22%2C%22textEndColumn%22%3A%2261%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"品牌"}),n.jsx("span",{"trae-inspector-start-line":"310","trae-inspector-start-column":"18","trae-inspector-end-line":"310","trae-inspector-end-column":"95","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700",children:d.brand})]}),n.jsxs("div",{"trae-inspector-start-line":"312","trae-inspector-start-column":"16","trae-inspector-end-line":"315","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"313","trae-inspector-start-column":"18","trae-inspector-end-line":"313","trae-inspector-end-column":"68","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%9E%8B%E5%8F%B7%22%2C%22textStartLine%22%3A%22313%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22313%22%2C%22textEndColumn%22%3A%2261%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"型号"}),n.jsx("span",{"trae-inspector-start-line":"314","trae-inspector-start-column":"18","trae-inspector-end-line":"314","trae-inspector-end-column":"95","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700",children:d.model})]}),n.jsxs("div",{"trae-inspector-start-line":"316","trae-inspector-start-column":"16","trae-inspector-end-line":"319","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"317","trae-inspector-start-column":"18","trae-inspector-end-line":"317","trae-inspector-end-column":"70","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8F%91%E5%B8%83%E6%97%B6%E9%97%B4%22%2C%22textStartLine%22%3A%22317%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22317%22%2C%22textEndColumn%22%3A%2263%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"发布时间"}),n.jsx("span",{"trae-inspector-start-line":"318","trae-inspector-start-column":"18","trae-inspector-end-line":"318","trae-inspector-end-column":"101","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700",children:d.releaseDate})]}),n.jsxs("div",{"trae-inspector-start-line":"320","trae-inspector-start-column":"16","trae-inspector-end-line":"323","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"321","trae-inspector-start-column":"18","trae-inspector-end-line":"321","trae-inspector-end-column":"70","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%A0%B8%E5%BF%83%E7%89%B9%E6%80%A7%22%2C%22textStartLine%22%3A%22321%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22321%22%2C%22textEndColumn%22%3A%2263%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"核心特性"}),n.jsxs("span",{"trae-inspector-start-line":"322","trae-inspector-start-column":"18","trae-inspector-end-line":"322","trae-inspector-end-column":"107","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700",children:[d.features.length," 项"]})]}),n.jsxs("div",{"trae-inspector-start-line":"324","trae-inspector-start-column":"16","trae-inspector-end-line":"327","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"325","trae-inspector-start-column":"18","trae-inspector-end-line":"325","trae-inspector-end-column":"69","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8F%82%E6%95%B0%E9%A1%B9%22%2C%22textStartLine%22%3A%22325%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%22325%22%2C%22textEndColumn%22%3A%2262%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"参数项"}),n.jsxs("span",{"trae-inspector-start-line":"326","trae-inspector-start-column":"18","trae-inspector-end-line":"326","trae-inspector-end-column":"122","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700",children:[Object.keys(d.parameters).length," 项"]})]})]})]}),d.sourceName&&n.jsx("div",{"trae-inspector-start-line":"332","trae-inspector-start-column":"14","trae-inspector-end-line":"358","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-5",children:n.jsxs("div",{"trae-inspector-start-line":"333","trae-inspector-start-column":"16","trae-inspector-end-line":"357","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start gap-3",children:[n.jsx("div",{"trae-inspector-start-line":"334","trae-inspector-start-column":"18","trae-inspector-end-line":"336","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0",children:n.jsx(wa,{className:"w-4 h-4 text-amber-600"})}),n.jsxs("div",{"trae-inspector-start-line":"337","trae-inspector-start-column":"18","trae-inspector-end-line":"356","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1",children:[n.jsx("h4",{"trae-inspector-start-line":"338","trae-inspector-start-column":"20","trae-inspector-end-line":"338","trae-inspector-end-column":"87","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BF%A1%E6%81%AF%E6%9D%A5%E6%BA%90%22%2C%22textStartLine%22%3A%22338%22%2C%22textStartColumn%22%3A%2278%22%2C%22textEndLine%22%3A%22338%22%2C%22textEndColumn%22%3A%2282%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-amber-800 text-sm mb-2",children:"信息来源"}),n.jsx("p",{"trae-inspector-start-line":"339","trae-inspector-start-column":"20","trae-inspector-end-line":"341","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-amber-700 mb-2",children:d.sourceName}),d.sourceUrl&&n.jsxs("a",{"trae-inspector-start-line":"343","trae-inspector-start-column":"22","trae-inspector-end-line":"351","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",href:d.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2",children:["查看原文链接",n.jsx(wa,{className:"w-3 h-3"})]}),n.jsx("p",{"trae-inspector-start-line":"353","trae-inspector-start-column":"20","trae-inspector-end-line":"355","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BA%A7%E5%93%81%E4%BF%A1%E6%81%AF%E4%BB%85%E4%BE%9B%E5%8F%82%E8%80%83%EF%BC%8C%E4%BB%A5%E5%8E%82%E5%95%86%E5%AE%98%E6%96%B9%E5%8F%91%E5%B8%83%E4%B8%BA%E5%87%86%22%2C%22textStartLine%22%3A%22353%22%2C%22textStartColumn%22%3A%2263%22%2C%22textEndLine%22%3A%22355%22%2C%22textEndColumn%22%3A%2220%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-amber-600 mt-2",children:"产品信息仅供参考，以厂商官方发布为准"})]})]})}),x.length>0&&n.jsxs("div",{"trae-inspector-start-line":"362","trae-inspector-start-column":"14","trae-inspector-end-line":"396","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"363","trae-inspector-start-column":"16","trae-inspector-end-line":"363","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%90%8C%E5%93%81%E7%89%8C%E5%85%B6%E4%BB%96%E8%AE%BE%E5%A4%87%22%2C%22textStartLine%22%3A%22363%22%2C%22textStartColumn%22%3A%2266%22%2C%22textEndLine%22%3A%22363%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"同品牌其他设备"}),n.jsx("div",{"trae-inspector-start-line":"364","trae-inspector-start-column":"16","trae-inspector-end-line":"388","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-4",children:x.map(A=>n.jsx("div",{"trae-inspector-start-line":"366","trae-inspector-start-column":"20","trae-inspector-end-line":"386","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(`/equipment/detail/${A.id}`),className:"group cursor-pointer",children:n.jsxs("div",{"trae-inspector-start-line":"371","trae-inspector-start-column":"22","trae-inspector-end-line":"385","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex gap-3",children:[n.jsx("div",{"trae-inspector-start-line":"372","trae-inspector-start-column":"24","trae-inspector-end-line":"378","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-16 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0",children:n.jsx("img",{"trae-inspector-start-line":"373","trae-inspector-start-column":"26","trae-inspector-end-line":"377","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:A.images[0],alt:A.name,className:"w-full h-full object-cover"})}),n.jsxs("div",{"trae-inspector-start-line":"379","trae-inspector-start-column":"24","trae-inspector-end-line":"384","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1 min-w-0",children:[n.jsx("h4",{"trae-inspector-start-line":"380","trae-inspector-start-column":"26","trae-inspector-end-line":"382","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1",children:A.name}),n.jsx("p",{"trae-inspector-start-line":"383","trae-inspector-start-column":"26","trae-inspector-end-line":"383","trae-inspector-end-column":"83","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-400",children:A.model})]})]})},A.id))}),n.jsxs("button",{"trae-inspector-start-line":"389","trae-inspector-start-column":"16","trae-inspector-end-line":"395","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(`/equipment/brand/${d.brand}`),className:"w-full mt-4 pt-4 border-t border-slate-100 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1",children:["查看全部",n.jsx(ct,{className:"w-4 h-4"})]})]}),n.jsxs("div",{"trae-inspector-start-line":"399","trae-inspector-start-column":"12","trae-inspector-end-line":"410","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-sm p-6 text-white",children:[n.jsx("h3",{"trae-inspector-start-line":"400","trae-inspector-start-column":"14","trae-inspector-end-line":"400","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AE%BE%E5%A4%87%E5%AF%B9%E6%AF%94%22%2C%22textStartLine%22%3A%22400%22%2C%22textStartColumn%22%3A%2249%22%2C%22textEndLine%22%3A%22400%22%2C%22textEndColumn%22%3A%2253%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold mb-2",children:"设备对比"}),n.jsx("p",{"trae-inspector-start-line":"401","trae-inspector-start-column":"14","trae-inspector-end-line":"403","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%8E%E5%85%B6%E4%BB%96%E5%93%81%E7%89%8CDSA%E8%AE%BE%E5%A4%87%E8%BF%9B%E8%A1%8C%E8%AF%A6%E7%BB%86%E5%8F%82%E6%95%B0%E5%AF%B9%E6%AF%94%22%2C%22textStartLine%22%3A%22401%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%22403%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-white/80 mb-4",children:"与其他品牌DSA设备进行详细参数对比"}),n.jsx("button",{"trae-inspector-start-line":"404","trae-inspector-start-column":"14","trae-inspector-end-line":"409","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B5%8F%E8%A7%88%E5%85%A8%E9%83%A8%E8%AE%BE%E5%A4%87%22%2C%22textStartLine%22%3A%22407%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22409%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/equipment"),className:"w-full py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm",children:"浏览全部设备"})]})]})]})})]}):n.jsx("div",{"trae-inspector-start-line":"70","trae-inspector-start-column":"6","trae-inspector-end-line":"82","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50 flex items-center justify-center",children:n.jsxs("div",{"trae-inspector-start-line":"71","trae-inspector-start-column":"8","trae-inspector-end-line":"81","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center",children:[n.jsx("h2",{"trae-inspector-start-line":"72","trae-inspector-start-column":"10","trae-inspector-end-line":"72","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AE%BE%E5%A4%87%E6%9C%AA%E6%89%BE%E5%88%B0%22%2C%22textStartLine%22%3A%2272%22%2C%22textStartColumn%22%3A%2268%22%2C%22textEndLine%22%3A%2272%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold text-slate-700 mb-2",children:"设备未找到"}),n.jsx("p",{"trae-inspector-start-line":"73","trae-inspector-start-column":"10","trae-inspector-end-line":"73","trae-inspector-end-column":"63","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%82%A8%E8%AE%BF%E9%97%AE%E7%9A%84%E8%AE%BE%E5%A4%87%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%88%96%E5%B7%B2%E8%A2%AB%E7%A7%BB%E9%99%A4%22%2C%22textStartLine%22%3A%2273%22%2C%22textStartColumn%22%3A%2245%22%2C%22textEndLine%22%3A%2273%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500 mb-4",children:"您访问的设备不存在或已被移除"}),n.jsxs("button",{"trae-inspector-start-line":"74","trae-inspector-start-column":"10","trae-inspector-end-line":"80","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/EquipmentDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回"]})]})})}function up(){const[o,l]=C.useState(null),c=Xe(),m=o?$n.filter(d=>d.expertId===o):$n,u=Sr.find(d=>d.id===o),h=d=>{const x=Sr.find(E=>E.id===d);return(x==null?void 0:x.name)||""};return n.jsxs("div",{"trae-inspector-start-line":"23","trae-inspector-start-column":"4","trae-inspector-end-line":"193","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[n.jsx("section",{"trae-inspector-start-line":"24","trae-inspector-start-column":"6","trae-inspector-end-line":"39","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 lg:py-24",children:n.jsx("div",{"trae-inspector-start-line":"25","trae-inspector-start-column":"8","trae-inspector-end-line":"38","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{"trae-inspector-start-line":"26","trae-inspector-start-column":"10","trae-inspector-end-line":"37","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center max-w-3xl mx-auto",children:[n.jsxs("div",{"trae-inspector-start-line":"27","trae-inspector-start-column":"12","trae-inspector-end-line":"30","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6",children:[n.jsx(pr,{className:"w-4 h-4"}),n.jsx("span",{"trae-inspector-start-line":"29","trae-inspector-start-column":"14","trae-inspector-end-line":"29","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%93%E5%AE%B6%E6%99%BA%E5%BA%93%22%2C%22textStartLine%22%3A%2229%22%2C%22textStartColumn%22%3A%2220%22%2C%22textEndLine%22%3A%2229%22%2C%22textEndColumn%22%3A%2224%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"专家智库"})]}),n.jsx("h1",{"trae-inspector-start-line":"31","trae-inspector-start-column":"12","trae-inspector-end-line":"33","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%93%E5%AE%B6%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%2231%22%2C%22textStartColumn%22%3A%2276%22%2C%22textEndLine%22%3A%2233%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl sm:text-4xl lg:text-5xl font-bold mb-4",children:"专家文章"}),n.jsx("p",{"trae-inspector-start-line":"34","trae-inspector-start-column":"12","trae-inspector-end-line":"36","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B1%87%E8%81%9A%E4%BB%8B%E5%85%A5%E5%8C%BB%E5%AD%A6%E9%A2%86%E5%9F%9F%E9%A1%B6%E5%B0%96%E4%B8%93%E5%AE%B6%E7%9A%84%E5%AD%A6%E6%9C%AF%E8%A7%82%E7%82%B9%E4%B8%8E%E7%A0%94%E7%A9%B6%E6%88%90%E6%9E%9C%EF%BC%8C%E5%8A%A9%E5%8A%9B%E4%B8%B4%E5%BA%8A%E8%AF%8A%E7%96%97%E6%B0%B4%E5%B9%B3%E6%8F%90%E5%8D%87%22%2C%22textStartLine%22%3A%2234%22%2C%22textStartColumn%22%3A%2265%22%2C%22textEndLine%22%3A%2236%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/70 text-lg leading-relaxed",children:"汇聚介入医学领域顶尖专家的学术观点与研究成果，助力临床诊疗水平提升"})]})})}),n.jsx("section",{"trae-inspector-start-line":"41","trae-inspector-start-column":"6","trae-inspector-end-line":"192","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-10 lg:py-12",children:n.jsx("div",{"trae-inspector-start-line":"42","trae-inspector-start-column":"8","trae-inspector-end-line":"191","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{"trae-inspector-start-line":"43","trae-inspector-start-column":"10","trae-inspector-end-line":"190","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-col lg:flex-row gap-8",children:[n.jsx("aside",{"trae-inspector-start-line":"44","trae-inspector-start-column":"12","trae-inspector-end-line":"99","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:w-80 flex-shrink-0",children:n.jsxs("div",{"trae-inspector-start-line":"45","trae-inspector-start-column":"14","trae-inspector-end-line":"98","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-24",children:[n.jsxs("div",{"trae-inspector-start-line":"46","trae-inspector-start-column":"16","trae-inspector-end-line":"52","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white",children:[n.jsxs("h2",{"trae-inspector-start-line":"47","trae-inspector-start-column":"18","trae-inspector-end-line":"50","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-bold text-lg flex items-center gap-2",children:[n.jsx(pr,{className:"w-5 h-5"}),"专家列表"]}),n.jsxs("p",{"trae-inspector-start-line":"51","trae-inspector-start-column":"18","trae-inspector-end-line":"51","trae-inspector-end-column":"86","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-white/70 mt-1",children:["共 ",Sr.length," 位专家"]})]}),n.jsxs("div",{"trae-inspector-start-line":"54","trae-inspector-start-column":"16","trae-inspector-end-line":"97","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-2",children:[n.jsx("button",{"trae-inspector-start-line":"55","trae-inspector-start-column":"18","trae-inspector-end-line":"69","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(null),className:`w-full px-4 py-3 rounded-xl text-left transition-all duration-200 mb-1 ${o===null?"bg-blue-50 text-blue-700 border border-blue-200":"hover:bg-slate-50 text-slate-700 border border-transparent"}`,children:n.jsxs("div",{"trae-inspector-start-line":"63","trae-inspector-start-column":"20","trae-inspector-end-line":"68","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between",children:[n.jsx("span",{"trae-inspector-start-line":"64","trae-inspector-start-column":"22","trae-inspector-end-line":"64","trae-inspector-end-column":"65","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%A8%E9%83%A8%E4%B8%93%E5%AE%B6%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%2264%22%2C%22textStartColumn%22%3A%2252%22%2C%22textEndLine%22%3A%2264%22%2C%22textEndColumn%22%3A%2258%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-medium",children:"全部专家文章"}),n.jsxs("span",{"trae-inspector-start-line":"65","trae-inspector-start-column":"22","trae-inspector-end-line":"67","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`text-sm ${o===null?"text-blue-600":"text-slate-400"}`,children:[$n.length," 篇"]})]})}),Sr.map(d=>n.jsx("button",{"trae-inspector-start-line":"72","trae-inspector-start-column":"20","trae-inspector-end-line":"95","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(d.id),className:`w-full px-4 py-3 rounded-xl text-left transition-all duration-200 mb-1 ${o===d.id?"bg-blue-50 text-blue-700 border border-blue-200":"hover:bg-slate-50 text-slate-700 border border-transparent"}`,children:n.jsxs("div",{"trae-inspector-start-line":"81","trae-inspector-start-column":"22","trae-inspector-end-line":"94","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3",children:[n.jsx("img",{"trae-inspector-start-line":"82","trae-inspector-start-column":"24","trae-inspector-end-line":"86","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:d.avatar,alt:d.name,className:"w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"}),n.jsxs("div",{"trae-inspector-start-line":"87","trae-inspector-start-column":"24","trae-inspector-end-line":"93","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1 min-w-0",children:[n.jsx("div",{"trae-inspector-start-line":"88","trae-inspector-start-column":"26","trae-inspector-end-line":"88","trae-inspector-end-column":"93","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-sm truncate",children:d.name}),n.jsx("div",{"trae-inspector-start-line":"89","trae-inspector-start-column":"26","trae-inspector-end-line":"91","trae-inspector-end-column":"32","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`text-xs truncate ${o===d.id?"text-blue-600":"text-slate-500"}`,children:d.title}),n.jsx("div",{"trae-inspector-start-line":"92","trae-inspector-start-column":"26","trae-inspector-end-line":"92","trae-inspector-end-column":"98","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-400 truncate",children:d.hospital})]})]})},d.id))]})]})}),n.jsxs("main",{"trae-inspector-start-line":"101","trae-inspector-start-column":"12","trae-inspector-end-line":"189","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1 min-w-0",children:[u&&n.jsx("div",{"trae-inspector-start-line":"103","trae-inspector-start-column":"16","trae-inspector-end-line":"134","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6",children:n.jsxs("div",{"trae-inspector-start-line":"104","trae-inspector-start-column":"18","trae-inspector-end-line":"133","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-col sm:flex-row gap-6",children:[n.jsx("img",{"trae-inspector-start-line":"105","trae-inspector-start-column":"20","trae-inspector-end-line":"109","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:u.avatar,alt:u.name,className:"w-24 h-24 rounded-2xl object-cover flex-shrink-0 shadow-md"}),n.jsxs("div",{"trae-inspector-start-line":"110","trae-inspector-start-column":"20","trae-inspector-end-line":"132","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1",children:[n.jsxs("div",{"trae-inspector-start-line":"111","trae-inspector-start-column":"22","trae-inspector-end-line":"120","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start justify-between mb-2",children:[n.jsxs("div",{"trae-inspector-start-line":"112","trae-inspector-start-column":"24","trae-inspector-end-line":"115","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h2",{"trae-inspector-start-line":"113","trae-inspector-start-column":"26","trae-inspector-end-line":"113","trae-inspector-end-column":"102","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800",children:u.name}),n.jsx("p",{"trae-inspector-start-line":"114","trae-inspector-start-column":"26","trae-inspector-end-line":"114","trae-inspector-end-column":"98","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-blue-600 font-medium mt-1",children:u.title})]}),n.jsxs("div",{"trae-inspector-start-line":"116","trae-inspector-start-column":"24","trae-inspector-end-line":"119","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-right",children:[n.jsx("div",{"trae-inspector-start-line":"117","trae-inspector-start-column":"26","trae-inspector-end-line":"117","trae-inspector-end-column":"112","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800",children:u.articleCount}),n.jsx("div",{"trae-inspector-start-line":"118","trae-inspector-start-column":"26","trae-inspector-end-line":"118","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8F%91%E8%A1%A8%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22118%22%2C%22textStartColumn%22%3A%2266%22%2C%22textEndLine%22%3A%22118%22%2C%22textEndColumn%22%3A%2270%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"发表文章"})]})]}),n.jsxs("div",{"trae-inspector-start-line":"121","trae-inspector-start-column":"22","trae-inspector-end-line":"130","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap gap-4 mb-3 text-sm text-slate-600",children:[n.jsxs("span",{"trae-inspector-start-line":"122","trae-inspector-start-column":"24","trae-inspector-end-line":"125","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1.5",children:[n.jsx(W0,{className:"w-4 h-4 text-slate-400"}),u.hospital]}),n.jsxs("span",{"trae-inspector-start-line":"126","trae-inspector-start-column":"24","trae-inspector-end-line":"129","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1.5",children:[n.jsx(es,{className:"w-4 h-4 text-slate-400"}),u.department]})]}),n.jsx("p",{"trae-inspector-start-line":"131","trae-inspector-start-column":"22","trae-inspector-end-line":"131","trae-inspector-end-column":"100","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-600 leading-relaxed",children:u.bio})]})]})}),n.jsx("div",{"trae-inspector-start-line":"137","trae-inspector-start-column":"14","trae-inspector-end-line":"143","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between mb-6",children:n.jsxs("h2",{"trae-inspector-start-line":"138","trae-inspector-start-column":"16","trae-inspector-end-line":"142","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[n.jsx(rn,{className:"w-5 h-5 text-blue-600"}),u?`${u.name} 的文章`:"全部专家文章",n.jsxs("span",{"trae-inspector-start-line":"141","trae-inspector-start-column":"18","trae-inspector-end-line":"141","trae-inspector-end-column":"107","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-base font-normal text-slate-500",children:["(",m.length,")"]})]})}),m.length===0?n.jsxs("div",{"trae-inspector-start-line":"146","trae-inspector-start-column":"16","trae-inspector-end-line":"149","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center",children:[n.jsx(rn,{className:"w-12 h-12 text-slate-300 mx-auto mb-4"}),n.jsx("p",{"trae-inspector-start-line":"148","trae-inspector-start-column":"18","trae-inspector-end-line":"148","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9A%82%E6%97%A0%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22148%22%2C%22textStartColumn%22%3A%2248%22%2C%22textEndLine%22%3A%22148%22%2C%22textEndColumn%22%3A%2254%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500",children:"暂无相关文章"})]}):n.jsx("div",{"trae-inspector-start-line":"151","trae-inspector-start-column":"16","trae-inspector-end-line":"187","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-4",children:m.map(d=>n.jsxs("article",{"trae-inspector-start-line":"153","trae-inspector-start-column":"20","trae-inspector-end-line":"185","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>c(`/experts/article/${d.id}`),className:"bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 cursor-pointer border border-slate-100 hover:border-blue-200 group",children:[n.jsxs("div",{"trae-inspector-start-line":"158","trae-inspector-start-column":"22","trae-inspector-end-line":"163","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start justify-between gap-4 mb-3",children:[n.jsx("h3",{"trae-inspector-start-line":"159","trae-inspector-start-column":"24","trae-inspector-end-line":"161","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug",children:d.title}),n.jsx(ct,{className:"w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors"})]}),n.jsx("p",{"trae-inspector-start-line":"164","trae-inspector-start-column":"22","trae-inspector-end-line":"166","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2",children:d.summary}),n.jsxs("div",{"trae-inspector-start-line":"167","trae-inspector-start-column":"22","trae-inspector-end-line":"184","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between text-sm",children:[n.jsxs("div",{"trae-inspector-start-line":"168","trae-inspector-start-column":"24","trae-inspector-end-line":"179","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4",children:[!u&&n.jsxs("span",{"trae-inspector-start-line":"170","trae-inspector-start-column":"28","trae-inspector-end-line":"173","trae-inspector-end-column":"35","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1.5 text-blue-600 font-medium",children:[n.jsx(pr,{className:"w-4 h-4"}),h(d.expertId)]}),n.jsxs("span",{"trae-inspector-start-line":"175","trae-inspector-start-column":"26","trae-inspector-end-line":"178","trae-inspector-end-column":"33","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1.5 text-slate-500",children:[n.jsx(Ft,{className:"w-4 h-4"}),d.publishDate]})]}),n.jsxs("span",{"trae-inspector-start-line":"180","trae-inspector-start-column":"24","trae-inspector-end-line":"183","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Experts.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1.5 text-slate-400",children:[n.jsx(ft,{className:"w-4 h-4"}),d.views.toLocaleString()," 阅读"]})]})]},d.id))})]})]})})})]})}function t1(){const{id:o}=sn(),l=Xe(),[c,m]=C.useState(!1),[u,h]=C.useState(!1),d=C.useMemo(()=>$n.find(D=>D.id===o),[o]),x=C.useMemo(()=>d?Sr.find(D=>D.id===d.expertId):null,[d]),E=C.useMemo(()=>d?$n.filter(D=>D.id!==d.id&&D.expertId===d.expertId).slice(0,3):[],[d]),v=D=>{const y=D.split(`
`),V=[];let F=0;for(let N=0;N<y.length;N++){const b=y[N];if(b.startsWith("## "))V.push(n.jsx("h2",{"trae-inspector-start-line":"50","trae-inspector-start-column":"10","trae-inspector-end-line":"52","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800 mt-8 mb-4 pb-2 border-b border-slate-200",children:b.replace("## ","")},F++));else if(b.startsWith("### "))V.push(n.jsx("h3",{"trae-inspector-start-line":"56","trae-inspector-start-column":"10","trae-inspector-end-line":"58","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold text-slate-800 mt-6 mb-3",children:b.replace("### ","")},F++));else if(b.startsWith("- ")){const M=[];for(;N<y.length&&y[N].startsWith("- ");)M.push(y[N].replace("- ","")),N++;N--,V.push(n.jsx("ul",{"trae-inspector-start-line":"68","trae-inspector-start-column":"10","trae-inspector-end-line":"72","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"list-disc list-inside space-y-2 my-4 text-slate-600",children:M.map((G,U)=>n.jsx("li",{"trae-inspector-start-line":"70","trae-inspector-start-column":"14","trae-inspector-end-line":"70","trae-inspector-end-column":"39","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:G},U))},F++))}else if(/^\d+\.\s/.test(b)){const M=[];for(;N<y.length&&/^\d+\.\s/.test(y[N]);)M.push(y[N].replace(/^\d+\.\s/,"")),N++;N--,V.push(n.jsx("ol",{"trae-inspector-start-line":"82","trae-inspector-start-column":"10","trae-inspector-end-line":"86","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"list-decimal list-inside space-y-2 my-4 text-slate-600",children:M.map((G,U)=>n.jsx("li",{"trae-inspector-start-line":"84","trae-inspector-start-column":"14","trae-inspector-end-line":"84","trae-inspector-end-column":"39","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:G},U))},F++))}else b.trim()!==""&&V.push(n.jsx("p",{"trae-inspector-start-line":"90","trae-inspector-start-column":"10","trae-inspector-end-line":"92","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 leading-relaxed mb-4",children:b},F++))}return V},A=()=>{h(!0),setTimeout(()=>h(!1),2e3)};return d?n.jsxs("div",{"trae-inspector-start-line":"124","trae-inspector-start-column":"4","trae-inspector-end-line":"292","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[u&&n.jsx("div",{"trae-inspector-start-line":"126","trae-inspector-start-column":"8","trae-inspector-end-line":"128","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%88%86%E4%BA%AB%E9%93%BE%E6%8E%A5%E5%B7%B2%E5%A4%8D%E5%88%B6%E5%88%B0%E5%89%AA%E8%B4%B4%E6%9D%BF%22%2C%22textStartLine%22%3A%22126%22%2C%22textStartColumn%22%3A%22124%22%2C%22textEndLine%22%3A%22128%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-slate-800 text-white rounded-lg shadow-lg",children:"分享链接已复制到剪贴板"}),n.jsx("div",{"trae-inspector-start-line":"131","trae-inspector-start-column":"6","trae-inspector-end-line":"169","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 pt-8 pb-16",children:n.jsxs("div",{"trae-inspector-start-line":"132","trae-inspector-start-column":"8","trae-inspector-end-line":"168","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("button",{"trae-inspector-start-line":"133","trae-inspector-start-column":"10","trae-inspector-end-line":"139","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回列表"]}),n.jsx("div",{"trae-inspector-start-line":"140","trae-inspector-start-column":"10","trae-inspector-end-line":"144","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3 mb-4",children:n.jsx("span",{"trae-inspector-start-line":"141","trae-inspector-start-column":"12","trae-inspector-end-line":"143","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%93%E5%AE%B6%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22141%22%2C%22textStartColumn%22%3A%22106%22%2C%22textEndLine%22%3A%22143%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/30 text-indigo-200",children:"专家文章"})}),n.jsx("h1",{"trae-inspector-start-line":"145","trae-inspector-start-column":"10","trae-inspector-end-line":"147","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight",children:d.title}),n.jsxs("div",{"trae-inspector-start-line":"148","trae-inspector-start-column":"10","trae-inspector-end-line":"167","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center gap-6 text-white/70 text-sm",children:[x&&n.jsxs("span",{"trae-inspector-start-line":"150","trae-inspector-start-column":"14","trae-inspector-end-line":"153","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(pr,{className:"w-4 h-4"}),x.name]}),n.jsxs("span",{"trae-inspector-start-line":"155","trae-inspector-start-column":"12","trae-inspector-end-line":"158","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Ft,{className:"w-4 h-4"}),d.publishDate]}),n.jsxs("span",{"trae-inspector-start-line":"159","trae-inspector-start-column":"12","trae-inspector-end-line":"162","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(ft,{className:"w-4 h-4"}),d.views.toLocaleString()," 阅读"]}),n.jsxs("span",{"trae-inspector-start-line":"163","trae-inspector-start-column":"12","trae-inspector-end-line":"166","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Sa,{className:"w-4 h-4"}),"约 ",Math.ceil(d.content.length/500)," 分钟阅读"]})]})]})}),n.jsx("div",{"trae-inspector-start-line":"171","trae-inspector-start-column":"6","trae-inspector-end-line":"291","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:n.jsxs("div",{"trae-inspector-start-line":"172","trae-inspector-start-column":"8","trae-inspector-end-line":"290","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[n.jsx("div",{"trae-inspector-start-line":"173","trae-inspector-start-column":"10","trae-inspector-end-line":"212","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:col-span-3",children:n.jsx("div",{"trae-inspector-start-line":"174","trae-inspector-start-column":"12","trae-inspector-end-line":"211","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",children:n.jsxs("div",{"trae-inspector-start-line":"175","trae-inspector-start-column":"14","trae-inspector-end-line":"210","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-6 lg:p-8",children:[n.jsx("div",{"trae-inspector-start-line":"176","trae-inspector-start-column":"16","trae-inspector-end-line":"178","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"prose-content",children:v(d.content)}),n.jsx("div",{"trae-inspector-start-line":"180","trae-inspector-start-column":"16","trae-inspector-end-line":"209","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mt-10 pt-8 border-t border-slate-200",children:n.jsxs("div",{"trae-inspector-start-line":"181","trae-inspector-start-column":"18","trae-inspector-end-line":"208","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center justify-between gap-4",children:[n.jsxs("div",{"trae-inspector-start-line":"182","trae-inspector-start-column":"20","trae-inspector-end-line":"201","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4",children:[n.jsxs("button",{"trae-inspector-start-line":"183","trae-inspector-start-column":"22","trae-inspector-end-line":"193","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>m(!c),className:`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${c?"bg-amber-50 text-amber-600 border border-amber-200":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[n.jsx(Go,{className:`w-5 h-5 ${c?"fill-amber-500":""}`}),c?"已收藏":"收藏"]}),n.jsxs("button",{"trae-inspector-start-line":"194","trae-inspector-start-column":"22","trae-inspector-end-line":"200","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:A,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors",children:[n.jsx(Ba,{className:"w-5 h-5"}),"分享"]})]}),n.jsx("div",{"trae-inspector-start-line":"202","trae-inspector-start-column":"20","trae-inspector-end-line":"207","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4 text-sm text-slate-500",children:n.jsxs("span",{"trae-inspector-start-line":"203","trae-inspector-start-column":"22","trae-inspector-end-line":"206","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(Br,{className:"w-4 h-4"}),Math.floor(d.views/10)," 点赞"]})})]})})]})})}),n.jsxs("div",{"trae-inspector-start-line":"214","trae-inspector-start-column":"10","trae-inspector-end-line":"289","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:col-span-1 space-y-6",children:[x&&n.jsxs("div",{"trae-inspector-start-line":"216","trae-inspector-start-column":"14","trae-inspector-end-line":"241","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"217","trae-inspector-start-column":"16","trae-inspector-end-line":"217","trae-inspector-end-column":"75","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%93%E5%AE%B6%E4%BF%A1%E6%81%AF%22%2C%22textStartLine%22%3A%22217%22%2C%22textStartColumn%22%3A%2266%22%2C%22textEndLine%22%3A%22217%22%2C%22textEndColumn%22%3A%2270%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"专家信息"}),n.jsxs("div",{"trae-inspector-start-line":"218","trae-inspector-start-column":"16","trae-inspector-end-line":"228","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4 mb-4",children:[n.jsx("img",{"trae-inspector-start-line":"219","trae-inspector-start-column":"18","trae-inspector-end-line":"223","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:x.avatar,alt:x.name,className:"w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"}),n.jsxs("div",{"trae-inspector-start-line":"224","trae-inspector-start-column":"18","trae-inspector-end-line":"227","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("p",{"trae-inspector-start-line":"225","trae-inspector-start-column":"20","trae-inspector-end-line":"225","trae-inspector-end-column":"81","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800",children:x.name}),n.jsx("p",{"trae-inspector-start-line":"226","trae-inspector-start-column":"20","trae-inspector-end-line":"226","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:x.title})]})]}),n.jsxs("p",{"trae-inspector-start-line":"229","trae-inspector-start-column":"16","trae-inspector-end-line":"231","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-600 mb-4",children:[x.hospital," · ",x.department]}),n.jsx("p",{"trae-inspector-start-line":"232","trae-inspector-start-column":"16","trae-inspector-end-line":"234","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500 leading-relaxed mb-4",children:x.bio}),n.jsx("button",{"trae-inspector-start-line":"235","trae-inspector-start-column":"16","trae-inspector-end-line":"240","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9F%A5%E7%9C%8B%E4%B8%93%E5%AE%B6%E4%B8%BB%E9%A1%B5%22%2C%22textStartLine%22%3A%22238%22%2C%22textStartColumn%22%3A%2217%22%2C%22textEndLine%22%3A%22240%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(`/experts/${x.id}`),className:"w-full py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors",children:"查看专家主页"})]}),E.length>0&&n.jsxs("div",{"trae-inspector-start-line":"245","trae-inspector-start-column":"14","trae-inspector-end-line":"274","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"246","trae-inspector-start-column":"16","trae-inspector-end-line":"246","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9B%B4%E5%A4%9A%E8%AF%A5%E4%B8%93%E5%AE%B6%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22246%22%2C%22textStartColumn%22%3A%2266%22%2C%22textEndLine%22%3A%22246%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"更多该专家文章"}),n.jsx("div",{"trae-inspector-start-line":"247","trae-inspector-start-column":"16","trae-inspector-end-line":"266","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-4",children:E.map(D=>n.jsxs("div",{"trae-inspector-start-line":"249","trae-inspector-start-column":"20","trae-inspector-end-line":"264","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(`/experts/article/${D.id}`),className:"group cursor-pointer",children:[n.jsx("h4",{"trae-inspector-start-line":"254","trae-inspector-start-column":"22","trae-inspector-end-line":"256","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2",children:D.title}),n.jsxs("div",{"trae-inspector-start-line":"257","trae-inspector-start-column":"22","trae-inspector-end-line":"263","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between text-xs text-slate-400",children:[n.jsx("span",{"trae-inspector-start-line":"258","trae-inspector-start-column":"24","trae-inspector-end-line":"258","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:D.publishDate}),n.jsxs("span",{"trae-inspector-start-line":"259","trae-inspector-start-column":"24","trae-inspector-end-line":"262","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(ft,{className:"w-3 h-3"}),D.views.toLocaleString()]})]})]},D.id))}),n.jsxs("button",{"trae-inspector-start-line":"267","trae-inspector-start-column":"16","trae-inspector-end-line":"273","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/experts"),className:"w-full mt-4 pt-4 border-t border-slate-100 text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center justify-center gap-1",children:["查看更多",n.jsx(ct,{className:"w-4 h-4"})]})]}),n.jsxs("div",{"trae-inspector-start-line":"277","trae-inspector-start-column":"12","trae-inspector-end-line":"288","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-sm p-6 text-white",children:[n.jsx("h3",{"trae-inspector-start-line":"278","trae-inspector-start-column":"14","trae-inspector-end-line":"278","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%B8%93%E5%AE%B6%E6%99%BA%E5%BA%93%22%2C%22textStartLine%22%3A%22278%22%2C%22textStartColumn%22%3A%2249%22%2C%22textEndLine%22%3A%22278%22%2C%22textEndColumn%22%3A%2253%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold mb-2",children:"专家智库"}),n.jsx("p",{"trae-inspector-start-line":"279","trae-inspector-start-column":"14","trae-inspector-end-line":"281","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B1%87%E8%81%9A%E4%BB%8B%E5%85%A5%E5%8C%BB%E5%AD%A6%E9%A2%86%E5%9F%9F%E9%A1%B6%E5%B0%96%E4%B8%93%E5%AE%B6%E7%9A%84%E5%AD%A6%E6%9C%AF%E8%A7%82%E7%82%B9%E4%B8%8E%E7%A0%94%E7%A9%B6%E6%88%90%E6%9E%9C%22%2C%22textStartLine%22%3A%22279%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%22281%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-white/80 mb-4",children:"汇聚介入医学领域顶尖专家的学术观点与研究成果"}),n.jsx("button",{"trae-inspector-start-line":"282","trae-inspector-start-column":"14","trae-inspector-end-line":"287","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B5%8F%E8%A7%88%E5%85%A8%E9%83%A8%E4%B8%93%E5%AE%B6%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22285%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22287%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/experts"),className:"w-full py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm",children:"浏览全部专家文章"})]})]})]})})]}):n.jsx("div",{"trae-inspector-start-line":"107","trae-inspector-start-column":"6","trae-inspector-end-line":"119","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50 flex items-center justify-center",children:n.jsxs("div",{"trae-inspector-start-line":"108","trae-inspector-start-column":"8","trae-inspector-end-line":"118","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center",children:[n.jsx("h2",{"trae-inspector-start-line":"109","trae-inspector-start-column":"10","trae-inspector-end-line":"109","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%96%87%E7%AB%A0%E6%9C%AA%E6%89%BE%E5%88%B0%22%2C%22textStartLine%22%3A%22109%22%2C%22textStartColumn%22%3A%2268%22%2C%22textEndLine%22%3A%22109%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold text-slate-700 mb-2",children:"文章未找到"}),n.jsx("p",{"trae-inspector-start-line":"110","trae-inspector-start-column":"10","trae-inspector-end-line":"110","trae-inspector-end-column":"63","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%82%A8%E8%AE%BF%E9%97%AE%E7%9A%84%E6%96%87%E7%AB%A0%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%88%96%E5%B7%B2%E8%A2%AB%E7%A7%BB%E9%99%A4%22%2C%22textStartLine%22%3A%22110%22%2C%22textStartColumn%22%3A%2245%22%2C%22textEndLine%22%3A%22110%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500 mb-4",children:"您访问的文章不存在或已被移除"}),n.jsxs("button",{"trae-inspector-start-line":"111","trae-inspector-start-column":"10","trae-inspector-end-line":"117","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/ExpertArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回"]})]})})}function r1(){const[o,l]=C.useState(null),c=Xe(),m=o?Fr.filter(d=>d.accountId===o):Fr,u=Po.find(d=>d.id===o),h=d=>d>=1e4?`${(d/1e4).toFixed(1)}万`:d.toLocaleString();return n.jsxs("div",{"trae-inspector-start-line":"25","trae-inspector-start-column":"4","trae-inspector-end-line":"173","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[n.jsx("section",{"trae-inspector-start-line":"26","trae-inspector-start-column":"6","trae-inspector-end-line":"41","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white py-16 lg:py-24",children:n.jsx("div",{"trae-inspector-start-line":"27","trae-inspector-start-column":"8","trae-inspector-end-line":"40","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{"trae-inspector-start-line":"28","trae-inspector-start-column":"10","trae-inspector-end-line":"39","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center max-w-3xl mx-auto",children:[n.jsxs("div",{"trae-inspector-start-line":"29","trae-inspector-start-column":"12","trae-inspector-end-line":"32","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6",children:[n.jsx(yr,{className:"w-4 h-4"}),n.jsx("span",{"trae-inspector-start-line":"31","trae-inspector-start-column":"14","trae-inspector-end-line":"31","trae-inspector-end-column":"32","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%AC%E4%BC%97%E5%8F%B7%E8%81%9A%E5%90%88%22%2C%22textStartLine%22%3A%2231%22%2C%22textStartColumn%22%3A%2220%22%2C%22textEndLine%22%3A%2231%22%2C%22textEndColumn%22%3A%2225%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"公众号聚合"})]}),n.jsx("h1",{"trae-inspector-start-line":"33","trae-inspector-start-column":"12","trae-inspector-end-line":"35","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%AC%E4%BC%97%E5%8F%B7%E7%B2%BE%E9%80%89%22%2C%22textStartLine%22%3A%2233%22%2C%22textStartColumn%22%3A%2276%22%2C%22textEndLine%22%3A%2235%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl sm:text-4xl lg:text-5xl font-bold mb-4",children:"公众号精选"}),n.jsx("p",{"trae-inspector-start-line":"36","trae-inspector-start-column":"12","trae-inspector-end-line":"38","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B1%87%E8%81%9A%E4%BB%8B%E5%85%A5%E5%8C%BB%E5%AD%A6%E9%A2%86%E5%9F%9F%E4%BC%98%E8%B4%A8%E5%85%AC%E4%BC%97%E5%8F%B7%E5%86%85%E5%AE%B9%EF%BC%8C%E4%B8%80%E7%AB%99%E5%BC%8F%E8%8E%B7%E5%8F%96%E8%A1%8C%E4%B8%9A%E6%9C%80%E6%96%B0%E5%8A%A8%E6%80%81%E4%B8%8E%E5%AD%A6%E6%9C%AF%E8%BF%9B%E5%B1%95%22%2C%22textStartLine%22%3A%2236%22%2C%22textStartColumn%22%3A%2265%22%2C%22textEndLine%22%3A%2238%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/70 text-lg leading-relaxed",children:"汇聚介入医学领域优质公众号内容，一站式获取行业最新动态与学术进展"})]})})}),n.jsx("section",{"trae-inspector-start-line":"43","trae-inspector-start-column":"6","trae-inspector-end-line":"172","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"py-10 lg:py-12",children:n.jsxs("div",{"trae-inspector-start-line":"44","trae-inspector-start-column":"8","trae-inspector-end-line":"171","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{"trae-inspector-start-line":"45","trae-inspector-start-column":"10","trae-inspector-end-line":"107","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mb-8",children:[n.jsxs("h2",{"trae-inspector-start-line":"46","trae-inspector-start-column":"12","trae-inspector-end-line":"49","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",children:[n.jsx(pr,{className:"w-5 h-5 text-emerald-600"}),"优质公众号"]}),n.jsxs("div",{"trae-inspector-start-line":"50","trae-inspector-start-column":"12","trae-inspector-end-line":"106","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",children:[n.jsxs("button",{"trae-inspector-start-line":"51","trae-inspector-start-column":"14","trae-inspector-end-line":"74","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(null),className:`p-5 rounded-xl text-left transition-all duration-300 group ${o===null?"bg-emerald-50 border-2 border-emerald-300 shadow-md":"bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-md"}`,children:[n.jsx("div",{"trae-inspector-start-line":"59","trae-inspector-start-column":"16","trae-inspector-end-line":"65","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${o===null?"bg-emerald-500 text-white":"bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600"}`,children:n.jsx(yr,{className:"w-6 h-6"})}),n.jsx("h3",{"trae-inspector-start-line":"66","trae-inspector-start-column":"16","trae-inspector-end-line":"70","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%A8%E9%83%A8%E5%85%AC%E4%BC%97%E5%8F%B7%22%2C%22textStartLine%22%3A%2268%22%2C%22textStartColumn%22%3A%2220%22%2C%22textEndLine%22%3A%2270%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:`font-semibold text-sm mb-1 transition-colors ${o===null?"text-emerald-700":"text-slate-800 group-hover:text-emerald-600"}`,children:"全部公众号"}),n.jsxs("p",{"trae-inspector-start-line":"71","trae-inspector-start-column":"16","trae-inspector-end-line":"73","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-500",children:["共 ",Fr.length," 篇文章"]})]}),Po.map(d=>n.jsxs("button",{"trae-inspector-start-line":"77","trae-inspector-start-column":"16","trae-inspector-end-line":"104","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(d.id),className:`p-5 rounded-xl text-left transition-all duration-300 group relative ${o===d.id?"bg-emerald-50 border-2 border-emerald-300 shadow-md":"bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-md"}`,children:[o===d.id&&n.jsx("div",{"trae-inspector-start-line":"87","trae-inspector-start-column":"20","trae-inspector-end-line":"89","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute top-3 right-3 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center",children:n.jsx(Qn,{className:"w-3 h-3 text-white"})}),n.jsx("img",{"trae-inspector-start-line":"91","trae-inspector-start-column":"18","trae-inspector-end-line":"95","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:d.avatar,alt:d.name,className:"w-12 h-12 rounded-xl object-cover mb-3 border-2 border-white shadow-sm"}),n.jsx("h3",{"trae-inspector-start-line":"96","trae-inspector-start-column":"18","trae-inspector-end-line":"100","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`font-semibold text-sm mb-1 truncate transition-colors ${o===d.id?"text-emerald-700":"text-slate-800 group-hover:text-emerald-600"}`,children:d.name}),n.jsxs("p",{"trae-inspector-start-line":"101","trae-inspector-start-column":"18","trae-inspector-end-line":"103","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-slate-500",children:[h(d.followerCount)," 关注"]})]},d.id))]})]}),u&&n.jsx("div",{"trae-inspector-start-line":"110","trae-inspector-start-column":"12","trae-inspector-end-line":"144","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8",children:n.jsxs("div",{"trae-inspector-start-line":"111","trae-inspector-start-column":"14","trae-inspector-end-line":"143","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-col sm:flex-row gap-6",children:[n.jsx("img",{"trae-inspector-start-line":"112","trae-inspector-start-column":"16","trae-inspector-end-line":"116","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:u.avatar,alt:u.name,className:"w-20 h-20 rounded-2xl object-cover flex-shrink-0 shadow-md"}),n.jsxs("div",{"trae-inspector-start-line":"117","trae-inspector-start-column":"16","trae-inspector-end-line":"142","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1",children:[n.jsxs("div",{"trae-inspector-start-line":"118","trae-inspector-start-column":"18","trae-inspector-end-line":"138","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start justify-between mb-2",children:[n.jsxs("div",{"trae-inspector-start-line":"119","trae-inspector-start-column":"20","trae-inspector-end-line":"131","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("h2",{"trae-inspector-start-line":"120","trae-inspector-start-column":"22","trae-inspector-end-line":"120","trae-inspector-end-column":"99","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800",children:u.name}),n.jsxs("div",{"trae-inspector-start-line":"121","trae-inspector-start-column":"22","trae-inspector-end-line":"130","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4 mt-2 text-sm text-slate-500",children:[n.jsxs("span",{"trae-inspector-start-line":"122","trae-inspector-start-column":"24","trae-inspector-end-line":"125","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1.5",children:[n.jsx(pr,{className:"w-4 h-4"}),h(u.followerCount)," 关注"]}),n.jsxs("span",{"trae-inspector-start-line":"126","trae-inspector-start-column":"24","trae-inspector-end-line":"129","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1.5",children:[n.jsx(Ft,{className:"w-4 h-4"}),u.lastUpdate," 更新"]})]})]}),n.jsxs("div",{"trae-inspector-start-line":"132","trae-inspector-start-column":"20","trae-inspector-end-line":"137","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-right",children:[n.jsx("div",{"trae-inspector-start-line":"133","trae-inspector-start-column":"22","trae-inspector-end-line":"135","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800",children:m.length}),n.jsx("div",{"trae-inspector-start-line":"136","trae-inspector-start-column":"22","trae-inspector-end-line":"136","trae-inspector-end-column":"72","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%94%B6%E5%BD%95%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22136%22%2C%22textStartColumn%22%3A%2262%22%2C%22textEndLine%22%3A%22136%22%2C%22textEndColumn%22%3A%2266%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:"收录文章"})]})]}),n.jsx("p",{"trae-inspector-start-line":"139","trae-inspector-start-column":"18","trae-inspector-end-line":"141","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-600 leading-relaxed mt-3",children:u.description})]})]})}),n.jsx("div",{"trae-inspector-start-line":"147","trae-inspector-start-column":"10","trae-inspector-end-line":"153","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between mb-6",children:n.jsxs("h2",{"trae-inspector-start-line":"148","trae-inspector-start-column":"12","trae-inspector-end-line":"152","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[n.jsx(yr,{className:"w-5 h-5 text-emerald-600"}),u?`${u.name} 文章`:"全部文章",n.jsxs("span",{"trae-inspector-start-line":"151","trae-inspector-start-column":"14","trae-inspector-end-line":"151","trae-inspector-end-column":"103","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-base font-normal text-slate-500",children:["(",m.length,")"]})]})}),m.length===0?n.jsxs("div",{"trae-inspector-start-line":"156","trae-inspector-start-column":"12","trae-inspector-end-line":"159","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center",children:[n.jsx(yr,{className:"w-12 h-12 text-slate-300 mx-auto mb-4"}),n.jsx("p",{"trae-inspector-start-line":"158","trae-inspector-start-column":"14","trae-inspector-end-line":"158","trae-inspector-end-column":"54","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9A%82%E6%97%A0%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22158%22%2C%22textStartColumn%22%3A%2244%22%2C%22textEndLine%22%3A%22158%22%2C%22textEndColumn%22%3A%2250%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500",children:"暂无相关文章"})]}):n.jsx("div",{"trae-inspector-start-line":"161","trae-inspector-start-column":"12","trae-inspector-end-line":"169","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Wechat.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:m.map(d=>n.jsx(Up,{article:d,onClick:()=>c(`/wechat/${d.id}`)},d.id))})]})})]})}const n1=o=>{const l=o.split(`
`),c=[];let m=0;for(let u=0;u<l.length;u++){const h=l[u];if(h.startsWith("## "))c.push(n.jsx("h2",{"trae-inspector-start-line":"29","trae-inspector-start-column":"8","trae-inspector-end-line":"31","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800 mt-8 mb-4 pb-2 border-b border-slate-200",children:h.replace("## ","")},m++));else if(h.startsWith("### "))c.push(n.jsx("h3",{"trae-inspector-start-line":"35","trae-inspector-start-column":"8","trae-inspector-end-line":"37","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold text-slate-800 mt-6 mb-3",children:h.replace("### ","")},m++));else if(h.startsWith("**")&&h.endsWith("**"))c.push(n.jsx("p",{"trae-inspector-start-line":"41","trae-inspector-start-column":"8","trae-inspector-end-line":"43","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-700 font-semibold leading-relaxed mb-4",children:h.replace(/\*\*/g,"")},m++));else if(h.startsWith("- ")){const d=[];for(;u<l.length&&l[u].startsWith("- ");)d.push(l[u].replace("- ","")),u++;u--,c.push(n.jsx("ul",{"trae-inspector-start-line":"53","trae-inspector-start-column":"8","trae-inspector-end-line":"57","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"list-disc list-inside space-y-2 my-4 text-slate-600",children:d.map((x,E)=>n.jsx("li",{"trae-inspector-start-line":"55","trae-inspector-start-column":"12","trae-inspector-end-line":"55","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:x.replace(/\*\*/g,"")},E))},m++))}else if(/^\d+\.\s/.test(h)){const d=[];for(;u<l.length&&/^\d+\.\s/.test(l[u]);)d.push(l[u].replace(/^\d+\.\s/,"")),u++;u--,c.push(n.jsx("ol",{"trae-inspector-start-line":"67","trae-inspector-start-column":"8","trae-inspector-end-line":"71","trae-inspector-end-column":"13","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"list-decimal list-inside space-y-2 my-4 text-slate-600",children:d.map((x,E)=>n.jsx("li",{"trae-inspector-start-line":"69","trae-inspector-start-column":"12","trae-inspector-end-line":"69","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:x.replace(/\*\*/g,"")},E))},m++))}else h.trim()!==""&&c.push(n.jsx("p",{"trae-inspector-start-line":"75","trae-inspector-start-column":"8","trae-inspector-end-line":"77","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 leading-relaxed mb-4",children:h.replace(/\*\*/g,"")},m++))}return c};function s1(){const{id:o}=sn(),l=Xe(),[c,m]=C.useState(!1),[u,h]=C.useState(!1),d=C.useMemo(()=>Fr.find(A=>A.id===o),[o]),x=C.useMemo(()=>d?Po.find(A=>A.id===d.accountId):null,[d]),E=C.useMemo(()=>d?Fr.filter(A=>A.id!==d.id&&A.accountId===d.accountId).slice(0,4):[],[d]),v=()=>{h(!0),setTimeout(()=>h(!1),2e3)};return d?n.jsxs("div",{"trae-inspector-start-line":"131","trae-inspector-start-column":"4","trae-inspector-end-line":"367","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[u&&n.jsx("div",{"trae-inspector-start-line":"133","trae-inspector-start-column":"8","trae-inspector-end-line":"135","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%88%86%E4%BA%AB%E9%93%BE%E6%8E%A5%E5%B7%B2%E5%A4%8D%E5%88%B6%E5%88%B0%E5%89%AA%E8%B4%B4%E6%9D%BF%22%2C%22textStartLine%22%3A%22133%22%2C%22textStartColumn%22%3A%22124%22%2C%22textEndLine%22%3A%22135%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-slate-800 text-white rounded-lg shadow-lg",children:"分享链接已复制到剪贴板"}),n.jsx("div",{"trae-inspector-start-line":"138","trae-inspector-start-column":"6","trae-inspector-end-line":"176","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 pt-8 pb-16",children:n.jsxs("div",{"trae-inspector-start-line":"139","trae-inspector-start-column":"8","trae-inspector-end-line":"175","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("button",{"trae-inspector-start-line":"140","trae-inspector-start-column":"10","trae-inspector-end-line":"146","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回列表"]}),n.jsx("div",{"trae-inspector-start-line":"147","trae-inspector-start-column":"10","trae-inspector-end-line":"151","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-3 mb-4",children:n.jsx("span",{"trae-inspector-start-line":"148","trae-inspector-start-column":"12","trae-inspector-end-line":"150","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/30 text-emerald-200",children:d.category||"公众号精选"})}),n.jsx("h1",{"trae-inspector-start-line":"152","trae-inspector-start-column":"10","trae-inspector-end-line":"154","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight",children:d.title}),n.jsxs("div",{"trae-inspector-start-line":"155","trae-inspector-start-column":"10","trae-inspector-end-line":"174","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center gap-6 text-white/70 text-sm",children:[x&&n.jsxs("span",{"trae-inspector-start-line":"157","trae-inspector-start-column":"14","trae-inspector-end-line":"160","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(yr,{className:"w-4 h-4"}),x.name]}),n.jsxs("span",{"trae-inspector-start-line":"162","trae-inspector-start-column":"12","trae-inspector-end-line":"165","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Ft,{className:"w-4 h-4"}),d.publishDate]}),n.jsxs("span",{"trae-inspector-start-line":"166","trae-inspector-start-column":"12","trae-inspector-end-line":"169","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(ft,{className:"w-4 h-4"}),d.views.toLocaleString()," 阅读"]}),n.jsxs("span",{"trae-inspector-start-line":"170","trae-inspector-start-column":"12","trae-inspector-end-line":"173","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-2",children:[n.jsx(Sa,{className:"w-4 h-4"}),"约 ",Math.ceil(d.summary.length/200)+3," 分钟阅读"]})]})]})}),n.jsx("div",{"trae-inspector-start-line":"178","trae-inspector-start-column":"6","trae-inspector-end-line":"366","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:n.jsxs("div",{"trae-inspector-start-line":"179","trae-inspector-start-column":"8","trae-inspector-end-line":"365","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[n.jsx("div",{"trae-inspector-start-line":"180","trae-inspector-start-column":"10","trae-inspector-end-line":"288","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:col-span-3",children:n.jsxs("div",{"trae-inspector-start-line":"181","trae-inspector-start-column":"12","trae-inspector-end-line":"287","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",children:[d.coverImage&&n.jsx("div",{"trae-inspector-start-line":"183","trae-inspector-start-column":"16","trae-inspector-end-line":"189","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"aspect-video overflow-hidden",children:n.jsx("img",{"trae-inspector-start-line":"184","trae-inspector-start-column":"18","trae-inspector-end-line":"188","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:d.coverImage,alt:d.title,className:"w-full h-full object-cover"})}),n.jsxs("div",{"trae-inspector-start-line":"192","trae-inspector-start-column":"14","trae-inspector-end-line":"286","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"p-6 lg:p-8",children:[n.jsx("div",{"trae-inspector-start-line":"193","trae-inspector-start-column":"16","trae-inspector-end-line":"198","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-8 rounded-r-lg",children:n.jsxs("p",{"trae-inspector-start-line":"194","trae-inspector-start-column":"18","trae-inspector-end-line":"197","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-emerald-800 leading-relaxed",children:[n.jsx("span",{"trae-inspector-start-line":"195","trae-inspector-start-column":"20","trae-inspector-end-line":"195","trae-inspector-end-column":"64","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%96%87%E7%AB%A0%E6%91%98%E8%A6%81%EF%BC%9A%22%2C%22textStartLine%22%3A%22195%22%2C%22textStartColumn%22%3A%2252%22%2C%22textEndLine%22%3A%22195%22%2C%22textEndColumn%22%3A%2257%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold",children:"文章摘要："}),d.summary]})}),n.jsxs("div",{"trae-inspector-start-line":"200","trae-inspector-start-column":"16","trae-inspector-end-line":"254","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"prose-content",children:[d.content?n1(d.content):n.jsxs(n.Fragment,{children:[n.jsx("h2",{"trae-inspector-start-line":"205","trae-inspector-start-column":"22","trae-inspector-end-line":"207","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%96%87%E7%AB%A0%E5%86%85%E5%AE%B9%22%2C%22textStartLine%22%3A%22205%22%2C%22textStartColumn%22%3A%22113%22%2C%22textEndLine%22%3A%22207%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-slate-800 mt-8 mb-4 pb-2 border-b border-slate-200",children:"文章内容"}),n.jsx("p",{"trae-inspector-start-line":"208","trae-inspector-start-column":"22","trae-inspector-end-line":"210","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 leading-relaxed mb-4",children:d.summary}),n.jsxs("p",{"trae-inspector-start-line":"211","trae-inspector-start-column":"22","trae-inspector-end-line":"213","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 leading-relaxed mb-4",children:["本文由 ",(x==null?void 0:x.name)||"相关公众号"," 原创发布，内容仅供学习参考。如需获取完整文章内容，请关注对应公众号查看原文。"]})]}),n.jsx("div",{"trae-inspector-start-line":"217","trae-inspector-start-column":"18","trae-inspector-end-line":"223","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-slate-50 rounded-lg p-6 mt-6",children:n.jsxs("p",{"trae-inspector-start-line":"218","trae-inspector-start-column":"20","trae-inspector-end-line":"222","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 text-sm leading-relaxed",children:[n.jsx("span",{"trae-inspector-start-line":"219","trae-inspector-start-column":"22","trae-inspector-end-line":"219","trae-inspector-end-column":"81","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B8%A9%E9%A6%A8%E6%8F%90%E7%A4%BA%EF%BC%9A%22%2C%22textStartLine%22%3A%22219%22%2C%22textStartColumn%22%3A%2269%22%2C%22textEndLine%22%3A%22219%22%2C%22textEndColumn%22%3A%2274%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-700",children:"温馨提示："}),"本站仅转载公众号文章摘要和核心要点，完整内容请前往原公众号阅读。 点击下方按钮可查看更多相关文章。"]})}),d.sourceName&&n.jsx("div",{"trae-inspector-start-line":"226","trae-inspector-start-column":"20","trae-inspector-end-line":"252","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg",children:n.jsxs("div",{"trae-inspector-start-line":"227","trae-inspector-start-column":"22","trae-inspector-end-line":"251","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start gap-3",children:[n.jsx("div",{"trae-inspector-start-line":"228","trae-inspector-start-column":"24","trae-inspector-end-line":"230","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0",children:n.jsx(wa,{className:"w-4 h-4 text-amber-600"})}),n.jsxs("div",{"trae-inspector-start-line":"231","trae-inspector-start-column":"24","trae-inspector-end-line":"250","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("p",{"trae-inspector-start-line":"232","trae-inspector-start-column":"26","trae-inspector-end-line":"232","trae-inspector-end-column":"89","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%BD%AC%E8%BD%BD%E6%9D%A5%E6%BA%90%22%2C%22textStartLine%22%3A%22232%22%2C%22textStartColumn%22%3A%2281%22%2C%22textEndLine%22%3A%22232%22%2C%22textEndColumn%22%3A%2285%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-amber-800 mb-1",children:"转载来源"}),n.jsxs("p",{"trae-inspector-start-line":"233","trae-inspector-start-column":"26","trae-inspector-end-line":"246","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-amber-700",children:["来源：",d.sourceName,d.sourceUrl&&n.jsxs("a",{"trae-inspector-start-line":"236","trae-inspector-start-column":"30","trae-inspector-end-line":"244","trae-inspector-end-column":"34","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",href:d.sourceUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-2 text-amber-600 hover:text-amber-700 underline underline-offset-2 inline-flex items-center gap-1",children:["查看原文",n.jsx(wa,{className:"w-3 h-3"})]})]}),n.jsx("p",{"trae-inspector-start-line":"247","trae-inspector-start-column":"26","trae-inspector-end-line":"249","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9C%AC%E6%96%87%E5%86%85%E5%AE%B9%E4%BB%85%E4%BE%9B%E5%AD%A6%E4%B9%A0%E4%BA%A4%E6%B5%81%EF%BC%8C%E7%89%88%E6%9D%83%E5%BD%92%E5%8E%9F%E4%BD%9C%E8%80%85%E6%89%80%E6%9C%89%E3%80%82%E5%A6%82%E6%9C%89%E4%BE%B5%E6%9D%83%EF%BC%8C%E8%AF%B7%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC%E5%88%A0%E9%99%A4%E3%80%82%22%2C%22textStartLine%22%3A%22247%22%2C%22textStartColumn%22%3A%2269%22%2C%22textEndLine%22%3A%22249%22%2C%22textEndColumn%22%3A%2226%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-amber-600 mt-1",children:"本文内容仅供学习交流，版权归原作者所有。如有侵权，请联系我们删除。"})]})]})})]}),n.jsx("div",{"trae-inspector-start-line":"256","trae-inspector-start-column":"16","trae-inspector-end-line":"285","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mt-10 pt-8 border-t border-slate-200",children:n.jsxs("div",{"trae-inspector-start-line":"257","trae-inspector-start-column":"18","trae-inspector-end-line":"284","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center justify-between gap-4",children:[n.jsxs("div",{"trae-inspector-start-line":"258","trae-inspector-start-column":"20","trae-inspector-end-line":"277","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4",children:[n.jsxs("button",{"trae-inspector-start-line":"259","trae-inspector-start-column":"22","trae-inspector-end-line":"269","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>m(!c),className:`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${c?"bg-amber-50 text-amber-600 border border-amber-200":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[n.jsx(Go,{className:`w-5 h-5 ${c?"fill-amber-500":""}`}),c?"已收藏":"收藏"]}),n.jsxs("button",{"trae-inspector-start-line":"270","trae-inspector-start-column":"22","trae-inspector-end-line":"276","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:v,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors",children:[n.jsx(Ba,{className:"w-5 h-5"}),"分享"]})]}),n.jsx("div",{"trae-inspector-start-line":"278","trae-inspector-start-column":"20","trae-inspector-end-line":"283","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4 text-sm text-slate-500",children:n.jsxs("span",{"trae-inspector-start-line":"279","trae-inspector-start-column":"22","trae-inspector-end-line":"282","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(Br,{className:"w-4 h-4"}),Math.floor(d.views/15)," 点赞"]})})]})})]})]})}),n.jsxs("div",{"trae-inspector-start-line":"290","trae-inspector-start-column":"10","trae-inspector-end-line":"364","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"lg:col-span-1 space-y-6",children:[x&&n.jsxs("div",{"trae-inspector-start-line":"292","trae-inspector-start-column":"14","trae-inspector-end-line":"316","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"293","trae-inspector-start-column":"16","trae-inspector-end-line":"293","trae-inspector-end-column":"74","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%AC%E4%BC%97%E5%8F%B7%22%2C%22textStartLine%22%3A%22293%22%2C%22textStartColumn%22%3A%2266%22%2C%22textEndLine%22%3A%22293%22%2C%22textEndColumn%22%3A%2269%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"公众号"}),n.jsxs("div",{"trae-inspector-start-line":"294","trae-inspector-start-column":"16","trae-inspector-end-line":"306","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4 mb-4",children:[n.jsx("img",{"trae-inspector-start-line":"295","trae-inspector-start-column":"18","trae-inspector-end-line":"299","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",src:x.avatar,alt:x.name,className:"w-14 h-14 rounded-xl object-cover shadow-md"}),n.jsxs("div",{"trae-inspector-start-line":"300","trae-inspector-start-column":"18","trae-inspector-end-line":"305","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[n.jsx("p",{"trae-inspector-start-line":"301","trae-inspector-start-column":"20","trae-inspector-end-line":"301","trae-inspector-end-column":"82","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800",children:x.name}),n.jsxs("p",{"trae-inspector-start-line":"302","trae-inspector-start-column":"20","trae-inspector-end-line":"304","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:[(x.followerCount/1e4).toFixed(1),"万 关注"]})]})]}),n.jsx("p",{"trae-inspector-start-line":"307","trae-inspector-start-column":"16","trae-inspector-end-line":"309","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-600 mb-4 leading-relaxed",children:x.description}),n.jsx("button",{"trae-inspector-start-line":"310","trae-inspector-start-column":"16","trae-inspector-end-line":"315","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%9F%A5%E7%9C%8B%E6%9B%B4%E5%A4%9A%E8%AF%A5%E5%85%AC%E4%BC%97%E5%8F%B7%E6%96%87%E7%AB%A0%22%2C%22textStartLine%22%3A%22313%22%2C%22textStartColumn%22%3A%2217%22%2C%22textEndLine%22%3A%22315%22%2C%22textEndColumn%22%3A%2216%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(`/wechat?account=${x.id}`),className:"w-full py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors",children:"查看更多该公众号文章"})]}),E.length>0&&n.jsxs("div",{"trae-inspector-start-line":"320","trae-inspector-start-column":"14","trae-inspector-end-line":"349","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 p-6",children:[n.jsx("h3",{"trae-inspector-start-line":"321","trae-inspector-start-column":"16","trae-inspector-end-line":"321","trae-inspector-end-column":"75","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%9B%B8%E5%85%B3%E6%8E%A8%E8%8D%90%22%2C%22textStartLine%22%3A%22321%22%2C%22textStartColumn%22%3A%2266%22%2C%22textEndLine%22%3A%22321%22%2C%22textEndColumn%22%3A%2270%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold text-slate-800 mb-4",children:"相关推荐"}),n.jsx("div",{"trae-inspector-start-line":"322","trae-inspector-start-column":"16","trae-inspector-end-line":"341","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-4",children:E.map(A=>n.jsxs("div",{"trae-inspector-start-line":"324","trae-inspector-start-column":"20","trae-inspector-end-line":"339","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(`/wechat/${A.id}`),className:"group cursor-pointer",children:[n.jsx("h4",{"trae-inspector-start-line":"329","trae-inspector-start-column":"22","trae-inspector-end-line":"331","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-medium text-slate-700 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2",children:A.title}),n.jsxs("div",{"trae-inspector-start-line":"332","trae-inspector-start-column":"22","trae-inspector-end-line":"338","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between text-xs text-slate-400",children:[n.jsx("span",{"trae-inspector-start-line":"333","trae-inspector-start-column":"24","trae-inspector-end-line":"333","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:A.publishDate}),n.jsxs("span",{"trae-inspector-start-line":"334","trae-inspector-start-column":"24","trae-inspector-end-line":"337","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(ft,{className:"w-3 h-3"}),A.views.toLocaleString()]})]})]},A.id))}),n.jsxs("button",{"trae-inspector-start-line":"342","trae-inspector-start-column":"16","trae-inspector-end-line":"348","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/wechat"),className:"w-full mt-4 pt-4 border-t border-slate-100 text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center justify-center gap-1",children:["查看更多",n.jsx(ct,{className:"w-4 h-4"})]})]}),n.jsxs("div",{"trae-inspector-start-line":"352","trae-inspector-start-column":"12","trae-inspector-end-line":"363","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-sm p-6 text-white",children:[n.jsx("h3",{"trae-inspector-start-line":"353","trae-inspector-start-column":"14","trae-inspector-end-line":"353","trae-inspector-end-column":"59","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%85%AC%E4%BC%97%E5%8F%B7%E8%81%9A%E5%90%88%22%2C%22textStartLine%22%3A%22353%22%2C%22textStartColumn%22%3A%2249%22%2C%22textEndLine%22%3A%22353%22%2C%22textEndColumn%22%3A%2254%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold mb-2",children:"公众号聚合"}),n.jsx("p",{"trae-inspector-start-line":"354","trae-inspector-start-column":"14","trae-inspector-end-line":"356","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B1%87%E8%81%9A%E4%BB%8B%E5%85%A5%E5%8C%BB%E5%AD%A6%E9%A2%86%E5%9F%9F%E4%BC%98%E8%B4%A8%E5%85%AC%E4%BC%97%E5%8F%B7%E5%86%85%E5%AE%B9%EF%BC%8C%E4%B8%80%E7%AB%99%E5%BC%8F%E8%8E%B7%E5%8F%96%E8%A1%8C%E4%B8%9A%E6%9C%80%E6%96%B0%E5%8A%A8%E6%80%81%22%2C%22textStartLine%22%3A%22354%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%22356%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-white/80 mb-4",children:"汇聚介入医学领域优质公众号内容，一站式获取行业最新动态"}),n.jsx("button",{"trae-inspector-start-line":"357","trae-inspector-start-column":"14","trae-inspector-end-line":"362","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B5%8F%E8%A7%88%E5%85%A8%E9%83%A8%E5%85%AC%E4%BC%97%E5%8F%B7%22%2C%22textStartLine%22%3A%22360%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22362%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l("/wechat"),className:"w-full py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm",children:"浏览全部公众号"})]})]})]})})]}):n.jsx("div",{"trae-inspector-start-line":"114","trae-inspector-start-column":"6","trae-inspector-end-line":"126","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50 flex items-center justify-center",children:n.jsxs("div",{"trae-inspector-start-line":"115","trae-inspector-start-column":"8","trae-inspector-end-line":"125","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center",children:[n.jsx("h2",{"trae-inspector-start-line":"116","trae-inspector-start-column":"10","trae-inspector-end-line":"116","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%96%87%E7%AB%A0%E6%9C%AA%E6%89%BE%E5%88%B0%22%2C%22textStartLine%22%3A%22116%22%2C%22textStartColumn%22%3A%2268%22%2C%22textEndLine%22%3A%22116%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold text-slate-700 mb-2",children:"文章未找到"}),n.jsx("p",{"trae-inspector-start-line":"117","trae-inspector-start-column":"10","trae-inspector-end-line":"117","trae-inspector-end-column":"63","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%82%A8%E8%AE%BF%E9%97%AE%E7%9A%84%E6%96%87%E7%AB%A0%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%88%96%E5%B7%B2%E8%A2%AB%E7%A7%BB%E9%99%A4%22%2C%22textStartLine%22%3A%22117%22%2C%22textStartColumn%22%3A%2245%22%2C%22textEndLine%22%3A%22117%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500 mb-4",children:"您访问的文章不存在或已被移除"}),n.jsxs("button",{"trae-inspector-start-line":"118","trae-inspector-start-column":"10","trae-inspector-end-line":"124","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/WechatArticleDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>l(-1),className:"inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors",children:[n.jsx(Rt,{className:"w-4 h-4"}),"返回"]})]})})}const dp=[{key:"all",label:"全部",icon:Tr},{key:"technology",label:"技术",icon:Ca},{key:"cases",label:"病例",icon:rn},{key:"equipment",label:"设备",icon:Zn},{key:"experts",label:"专家",icon:pr},{key:"wechat",label:"公众号",icon:yr}],mp=[{key:"relevance",label:"相关度"},{key:"time",label:"时间"},{key:"hot",label:"热度"}];function a1(){var ee;const[o,l]=B0(),c=Xe(),m=o.get("q")||"",[u,h]=C.useState("all"),[d,x]=C.useState("relevance"),[E,v]=C.useState(!1),[A,D]=C.useState(m),y=C.useMemo(()=>{if(!m.trim())return[];const I=m.toLowerCase(),Q=[];return kr.forEach(L=>{(L.title.toLowerCase().includes(I)?3:0)+(L.summary.toLowerCase().includes(I)?2:0)+(L.tags.some(Ce=>Ce.toLowerCase().includes(I))?1.5:0)+(L.content.toLowerCase().includes(I)?1:0)>0&&Q.push({type:"technology",id:L.id,title:L.title,summary:L.summary,date:L.publishDate,views:L.views,extra:L.author})}),ka.forEach(L=>{(L.title.toLowerCase().includes(I)?3:0)+(L.summary.toLowerCase().includes(I)?2:0)+(L.department.toLowerCase().includes(I)?1.5:0)+(L.diagnosis.toLowerCase().includes(I)?1:0)>0&&Q.push({type:"cases",id:L.id,title:L.title,summary:L.summary,date:L.publishDate,views:L.views,extra:L.department})}),lr.forEach(L=>{(L.name.toLowerCase().includes(I)?3:0)+(L.brand.toLowerCase().includes(I)?2:0)+(L.model.toLowerCase().includes(I)?2:0)+(L.description.toLowerCase().includes(I)?1:0)>0&&Q.push({type:"equipment",id:L.id,title:L.name,summary:L.description,date:L.releaseDate,extra:`${L.brand} · ${L.model}`})}),Sr.forEach(L=>{(L.name.toLowerCase().includes(I)?3:0)+(L.hospital.toLowerCase().includes(I)?2:0)+(L.department.toLowerCase().includes(I)?2:0)+(L.title.toLowerCase().includes(I)?1.5:0)+(L.bio.toLowerCase().includes(I)?1:0)>0&&Q.push({type:"experts",id:L.id,title:L.name,summary:L.bio,date:"",views:L.articleCount,extra:`${L.hospital} · ${L.department}`})}),Fr.forEach(L=>{(L.title.toLowerCase().includes(I)?3:0)+(L.summary.toLowerCase().includes(I)?2:0)+(L.accountName.toLowerCase().includes(I)?1.5:0)+(L.category.toLowerCase().includes(I)?1:0)>0&&Q.push({type:"wechat",id:L.id,title:L.title,summary:L.summary,date:L.publishDate,views:L.views,extra:L.accountName})}),Q},[m]),V=C.useMemo(()=>{let I=u==="all"?y:y.filter(Q=>Q.type===u);return d==="time"?I=[...I].sort((Q,L)=>Q.date?L.date?new Date(L.date).getTime()-new Date(Q.date).getTime():-1:1):d==="hot"&&(I=[...I].sort((Q,L)=>(L.views||0)-(Q.views||0))),I},[y,u,d]),F=C.useMemo(()=>({all:y.length,technology:y.filter(Q=>Q.type==="technology").length,cases:y.filter(Q=>Q.type==="cases").length,equipment:y.filter(Q=>Q.type==="equipment").length,experts:y.filter(Q=>Q.type==="experts").length,wechat:y.filter(Q=>Q.type==="wechat").length}),[y]),N=I=>m.trim()?I.split(new RegExp(`(${m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi")).map((L,Y)=>L.toLowerCase()===m.toLowerCase()?n.jsx("span",{"trae-inspector-start-line":"167","trae-inspector-start-column":"8","trae-inspector-end-line":"169","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-blue-600 font-semibold bg-blue-50 px-0.5 rounded",children:L},Y):n.jsx("span",{"trae-inspector-start-line":"171","trae-inspector-start-column":"8","trae-inspector-end-line":"171","trae-inspector-end-column":"39","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:L},Y)):I,b=I=>{I.preventDefault(),A.trim()&&l({q:A.trim()})},M=I=>{const Q=dp.find(L=>L.key===I);return(Q==null?void 0:Q.label)||""},G=I=>({all:"bg-slate-100 text-slate-600",technology:"bg-blue-100 text-blue-700",cases:"bg-emerald-100 text-emerald-700",equipment:"bg-orange-100 text-orange-700",experts:"bg-rose-100 text-rose-700",wechat:"bg-green-100 text-green-700"})[I],U=I=>{switch(I.type){case"technology":c(`/technology/${I.id}`);break;case"cases":c(`/cases/${I.id}`);break;case"equipment":c("/equipment");break;case"experts":c(`/experts/${I.id}`);break;case"wechat":c(`/wechat/${I.id}`);break}};return n.jsxs("div",{"trae-inspector-start-line":"221","trae-inspector-start-column":"4","trae-inspector-end-line":"362","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen bg-slate-50",children:[n.jsx("div",{"trae-inspector-start-line":"222","trae-inspector-start-column":"6","trae-inspector-end-line":"249","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 pt-8 pb-12",children:n.jsxs("div",{"trae-inspector-start-line":"223","trae-inspector-start-column":"8","trae-inspector-end-line":"248","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsx("h1",{"trae-inspector-start-line":"224","trae-inspector-start-column":"10","trae-inspector-end-line":"224","trae-inspector-end-column":"82","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C%22%2C%22textStartLine%22%3A%22224%22%2C%22textStartColumn%22%3A%2273%22%2C%22textEndLine%22%3A%22224%22%2C%22textEndColumn%22%3A%2277%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold text-white mb-6 text-center",children:"搜索结果"}),n.jsx("form",{"trae-inspector-start-line":"225","trae-inspector-start-column":"10","trae-inspector-end-line":"242","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onSubmit:b,children:n.jsxs("div",{"trae-inspector-start-line":"226","trae-inspector-start-column":"12","trae-inspector-end-line":"241","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative",children:[n.jsx(Tr,{className:"absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"}),n.jsx("input",{"trae-inspector-start-line":"228","trae-inspector-start-column":"14","trae-inspector-end-line":"234","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",type:"text",value:A,onChange:I=>D(I.target.value),placeholder:"搜索技术文章、临床病例、设备资料、专家论文...",className:"w-full pl-14 pr-32 py-4 rounded-full text-base bg-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 text-slate-700 placeholder-slate-400"}),n.jsx("button",{"trae-inspector-start-line":"235","trae-inspector-start-column":"14","trae-inspector-end-line":"240","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%90%9C%E7%B4%A2%22%2C%22textStartLine%22%3A%22238%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%22240%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",type:"submit",className:"absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30",children:"搜索"})]})}),m&&n.jsxs("p",{"trae-inspector-start-line":"244","trae-inspector-start-column":"12","trae-inspector-end-line":"246","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-white/60 text-sm mt-4 text-center",children:["找到 ",n.jsx("span",{"trae-inspector-start-line":"245","trae-inspector-start-column":"17","trae-inspector-end-line":"245","trae-inspector-end-column":"89","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-cyan-400 font-semibold",children:y.length})," 个相关结果"]})]})}),n.jsxs("div",{"trae-inspector-start-line":"251","trae-inspector-start-column":"6","trae-inspector-end-line":"361","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[n.jsx("div",{"trae-inspector-start-line":"252","trae-inspector-start-column":"8","trae-inspector-end-line":"306","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 mb-6",children:n.jsxs("div",{"trae-inspector-start-line":"253","trae-inspector-start-column":"10","trae-inspector-end-line":"305","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center justify-between border-b border-slate-100",children:[n.jsx("div",{"trae-inspector-start-line":"254","trae-inspector-start-column":"12","trae-inspector-end-line":"276","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap",children:dp.map(I=>n.jsxs("button",{"trae-inspector-start-line":"256","trae-inspector-start-column":"16","trae-inspector-end-line":"274","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>h(I.key),className:`px-5 py-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${u===I.key?"text-blue-600 border-blue-600 bg-blue-50/50":"text-slate-500 border-transparent hover:text-slate-700 hover:bg-slate-50"}`,children:[n.jsx(I.icon,{className:"w-4 h-4"}),I.label,n.jsx("span",{"trae-inspector-start-line":"267","trae-inspector-start-column":"18","trae-inspector-end-line":"273","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-2 py-0.5 rounded-full text-xs ${u===I.key?"bg-blue-100 text-blue-600":"bg-slate-100 text-slate-500"}`,children:F[I.key]})]},I.key))}),n.jsxs("div",{"trae-inspector-start-line":"278","trae-inspector-start-column":"12","trae-inspector-end-line":"304","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"relative px-5",children:[n.jsxs("button",{"trae-inspector-start-line":"279","trae-inspector-start-column":"14","trae-inspector-end-line":"285","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>v(!E),className:"flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors",children:["排序：",(ee=mp.find(I=>I.key===d))==null?void 0:ee.label,n.jsx(Pp,{className:"w-4 h-4"})]}),E&&n.jsx("div",{"trae-inspector-start-line":"287","trae-inspector-start-column":"16","trae-inspector-end-line":"302","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"absolute right-5 top-full mt-1 w-32 bg-white border border-slate-200 rounded-lg shadow-lg z-10 overflow-hidden",children:mp.map(I=>n.jsx("button",{"trae-inspector-start-line":"289","trae-inspector-start-column":"20","trae-inspector-end-line":"300","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>{x(I.key),v(!1)},className:`w-full px-4 py-2 text-sm text-left hover:bg-slate-50 ${d===I.key?"text-blue-600 bg-blue-50":"text-slate-600"}`,children:I.label},I.key))})]})]})}),V.length===0?n.jsxs("div",{"trae-inspector-start-line":"309","trae-inspector-start-column":"10","trae-inspector-end-line":"319","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-xl shadow-sm border border-slate-100 py-20 text-center",children:[n.jsx("div",{"trae-inspector-start-line":"310","trae-inspector-start-column":"12","trae-inspector-end-line":"312","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center",children:n.jsx(Tr,{className:"w-10 h-10 text-slate-400"})}),n.jsx("h3",{"trae-inspector-start-line":"313","trae-inspector-start-column":"12","trae-inspector-end-line":"315","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-medium text-slate-700 mb-2",children:m?"未找到相关结果":"请输入搜索关键词"}),n.jsx("p",{"trae-inspector-start-line":"316","trae-inspector-start-column":"12","trae-inspector-end-line":"318","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-500 text-sm",children:m?"试试其他关键词，或浏览我们的分类内容":"在上方搜索框中输入您想查找的内容"})]}):n.jsx("div",{"trae-inspector-start-line":"321","trae-inspector-start-column":"10","trae-inspector-end-line":"359","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-4",children:V.map(I=>n.jsxs("div",{"trae-inspector-start-line":"323","trae-inspector-start-column":"14","trae-inspector-end-line":"357","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>U(I),className:"bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 cursor-pointer border border-slate-100 hover:border-blue-200 group",children:[n.jsxs("div",{"trae-inspector-start-line":"328","trae-inspector-start-column":"16","trae-inspector-end-line":"335","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start gap-4 mb-3",children:[n.jsx("span",{"trae-inspector-start-line":"329","trae-inspector-start-column":"18","trae-inspector-end-line":"331","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-2.5 py-1 rounded-full text-xs font-medium ${G(I.type)}`,children:M(I.type)}),I.extra&&n.jsx("span",{"trae-inspector-start-line":"333","trae-inspector-start-column":"20","trae-inspector-end-line":"333","trae-inspector-end-column":"82","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-slate-500",children:I.extra})]}),n.jsx("h3",{"trae-inspector-start-line":"336","trae-inspector-start-column":"16","trae-inspector-end-line":"338","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2",children:N(I.title)}),n.jsx("p",{"trae-inspector-start-line":"339","trae-inspector-start-column":"16","trae-inspector-end-line":"341","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-slate-600 text-sm mb-4 line-clamp-2",children:N(I.summary)}),n.jsxs("div",{"trae-inspector-start-line":"342","trae-inspector-start-column":"16","trae-inspector-end-line":"356","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-4 text-xs text-slate-400",children:[I.views!==void 0&&n.jsxs("span",{"trae-inspector-start-line":"344","trae-inspector-start-column":"20","trae-inspector-end-line":"348","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(ft,{className:"w-3.5 h-3.5"}),I.views.toLocaleString(),I.type==="experts"?" 篇文章":" 次浏览"]}),I.date&&n.jsxs("span",{"trae-inspector-start-line":"351","trae-inspector-start-column":"20","trae-inspector-end-line":"354","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Search.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center gap-1",children:[n.jsx(Ft,{className:"w-3.5 h-3.5"}),I.date]})]})]},`${I.type}-${I.id}`))})]})]})}function i1(){return n.jsx(E0,{children:n.jsx(Km,{children:n.jsxs(Ue,{element:n.jsx(Oh,{}),children:[n.jsx(Ue,{path:"/",element:n.jsx(Uh,{})}),n.jsx(Ue,{path:"/technology",element:n.jsx(qh,{})}),n.jsx(Ue,{path:"/technology/:id",element:n.jsx(Wh,{})}),n.jsx(Ue,{path:"/cases",element:n.jsx(Kh,{})}),n.jsx(Ue,{path:"/cases/:id",element:n.jsx(Zh,{})}),n.jsx(Ue,{path:"/equipment",element:n.jsx(lp,{})}),n.jsx(Ue,{path:"/equipment/brand/:brand",element:n.jsx(lp,{})}),n.jsx(Ue,{path:"/equipment/detail/:id",element:n.jsx(e1,{})}),n.jsx(Ue,{path:"/experts",element:n.jsx(up,{})}),n.jsx(Ue,{path:"/experts/:id",element:n.jsx(up,{})}),n.jsx(Ue,{path:"/experts/article/:id",element:n.jsx(t1,{})}),n.jsx(Ue,{path:"/wechat",element:n.jsx(r1,{})}),n.jsx(Ue,{path:"/wechat/:id",element:n.jsx(s1,{})}),n.jsx(Ue,{path:"/search",element:n.jsx(a1,{})})]})})})}Xd.createRoot(document.getElementById("root")).render(n.jsx(C.StrictMode,{children:n.jsx(i1,{})}));
