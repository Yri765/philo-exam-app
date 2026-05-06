var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function E(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(E(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function D(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function te(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(te)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=te,ne=function(){ie.postMessage(null)}}else ne=function(){_(te,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function E(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function D(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?D(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return D(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function A(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function j(e,t){ue++,le[ue]=e.current,e.current=t}var fe=de(null),pe=de(null),me=de(null),M=de(null);function he(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}A(fe),j(fe,e)}function N(){A(fe),A(pe),A(me)}function ge(e){e.memoizedState!==null&&j(M,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function _e(e){pe.current===e&&(A(fe),A(pe)),M.current===e&&(A(M),Qf._currentValue=ce)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Oe=t.unstable_shouldYield,ke=t.unstable_requestPaint,Ae=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,Me=t.unstable_ImmediatePriority,Ne=t.unstable_UserBlockingPriority,Pe=t.unstable_NormalPriority,Fe=t.unstable_LowPriority,Ie=t.unstable_IdlePriority,Le=t.log,Re=t.unstable_setDisableYieldValue,ze=null,Be=null;function Ve(e){if(typeof Le==`function`&&Re(e),Be&&typeof Be.setStrictMode==`function`)try{Be.setStrictMode(ze,e)}catch{}}var He=Math.clz32?Math.clz32:Ge,Ue=Math.log,We=Math.LN2;function Ge(e){return e>>>=0,e===0?32:31-(Ue(e)/We|0)|0}var Ke=256,qe=262144,Je=4194304;function Ye(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ye(n))):i=Ye(o):i=Ye(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ye(n))):i=Ye(o)):i=Ye(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=Je;return Je<<=1,!(Je&62914560)&&(Je=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-He(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-He(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function lt(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ut=Math.random().toString(36).slice(2),dt=`__reactFiber$`+ut,ft=`__reactProps$`+ut,pt=`__reactContainer$`+ut,mt=`__reactEvents$`+ut,ht=`__reactListeners$`+ut,gt=`__reactHandles$`+ut,_t=`__reactResources$`+ut,vt=`__reactMarker$`+ut;function yt(e){delete e[dt],delete e[ft],delete e[mt],delete e[ht],delete e[gt]}function bt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[dt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[dt]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ct(e){var t=e[_t];return t||=e[_t]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[vt]=!0}var Tt=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},P={};function jt(e){return Te.call(P,e)?!0:Te.call(At,e)?!1:kt.test(e)?P[e]=!0:(At[e]=!0,!1)}function Mt(e,t,n){if(jt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Nt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Pt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ft(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function It(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Lt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rt(e){if(!e._valueTracker){var t=It(e)?`checked`:`value`;e._valueTracker=Lt(e,t,``+e[t])}}function zt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=It(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Bt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Vt=/[\n"\\]/g;function Ht(e){return e.replace(Vt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ut(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ft(t)):e.value!==``+Ft(t)&&(e.value=``+Ft(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Gt(e,o,Ft(n)):Gt(e,o,Ft(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ft(s):e.removeAttribute(`name`)}function Wt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Rt(e);return}n=n==null?``:``+Ft(n),t=t==null?n:``+Ft(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Rt(e)}function Gt(e,t,n){t===`number`&&Bt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qt(e,t,n){if(t!=null&&(t=``+Ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ft(n)}function Jt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ft(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Rt(e)}function Yt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Zt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Xt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Zt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Zt(e,o,t[o])}function $t(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var en=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),tn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nn(e){return tn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function rn(){}var an=null;function F(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,sn=null;function cn(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ut(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ht(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ft]||null;if(!a)throw Error(i(90));Ut(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&zt(r)}break a;case`textarea`:qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}}}var ln=!1;function un(e,t,n){if(ln)return e(t,n);ln=!0;try{return e(t)}finally{if(ln=!1,(on!==null||sn!==null)&&(bu(),on&&(t=on,e=sn,sn=on=null,cn(t),e)))for(t=0;t<e.length;t++)cn(e[t])}}function dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var fn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),pn=!1;if(fn)try{var mn={};Object.defineProperty(mn,`passive`,{get:function(){pn=!0}}),window.addEventListener(`test`,mn,mn),window.removeEventListener(`test`,mn,mn)}catch{pn=!1}var hn=null,gn=null,_n=null;function vn(){if(_n)return _n;var e,t=gn,n=t.length,r,i=`value`in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _n=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Sn(Cn),Tn=h({},Cn,{view:0,detail:0}),En=Sn(Tn),Dn,On,kn,An=h({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(Dn=e.screenX-kn.screenX,On=e.screenY-kn.screenY):On=Dn=0,kn=e),Dn)},movementY:function(e){return`movementY`in e?e.movementY:On}}),jn=Sn(An),Mn=Sn(h({},An,{dataTransfer:0})),Nn=Sn(h({},Tn,{relatedTarget:0})),Pn=Sn(h({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0})),Fn=Sn(h({},Cn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),In=Sn(h({},Cn,{data:0})),Ln={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Rn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zn[e])?!!t[e]:!1}function Vn(){return Bn}var Hn=Sn(h({},Tn,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Rn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=Sn(h({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=Sn(h({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=Sn(h({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=Sn(h({},An,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=Sn(h({},Cn,{newState:0,oldState:0})),Jn=[9,13,27,32],Yn=fn&&`CompositionEvent`in window,Xn=null;fn&&`documentMode`in document&&(Xn=document.documentMode);var Zn=fn&&`TextEvent`in window&&!Xn,Qn=fn&&(!Yn||Xn&&8<Xn&&11>=Xn),$n=` `,er=!1;function tr(e,t){switch(e){case`keyup`:return Jn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function nr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var rr=!1;function ir(e,t){switch(e){case`compositionend`:return nr(t);case`keypress`:return t.which===32?(er=!0,$n):null;case`textInput`:return e=t.data,e===$n&&er?null:e;default:return null}}function ar(e,t){if(rr)return e===`compositionend`||!Yn&&tr(e,t)?(e=vn(),_n=gn=hn=null,rr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Qn&&t.locale!==`ko`?null:t.data;default:return null}}var or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!or[e.type]:t===`textarea`}function cr(e,t,n,r){on?sn?sn.push(r):sn=[r]:on=r,t=Ed(t,`onChange`),0<t.length&&(n=new wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var lr=null,ur=null;function dr(e){yd(e,0)}function fr(e){if(zt(St(e)))return e}function pr(e,t){if(e===`change`)return t}var mr=!1;if(fn){var hr;if(fn){var gr=`oninput`in document;if(!gr){var _r=document.createElement(`div`);_r.setAttribute(`oninput`,`return;`),gr=typeof _r.oninput==`function`}hr=gr}else hr=!1;mr=hr&&(!document.documentMode||9<document.documentMode)}function vr(){lr&&(lr.detachEvent(`onpropertychange`,yr),ur=lr=null)}function yr(e){if(e.propertyName===`value`&&fr(ur)){var t=[];cr(t,ur,e,F(e)),un(dr,t)}}function br(e,t,n){e===`focusin`?(vr(),lr=t,ur=n,lr.attachEvent(`onpropertychange`,yr)):e===`focusout`&&vr()}function xr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return fr(ur)}function Sr(e,t){if(e===`click`)return fr(t)}function Cr(e,t){if(e===`input`||e===`change`)return fr(t)}function wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Tr=typeof Object.is==`function`?Object.is:wr;function Er(e,t){if(Tr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!Tr(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bt(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Mr=fn&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==Bt(r)||(r=Nr,`selectionStart`in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Er(Fr,r)||(Fr=r,r=Ed(Pr,`onSelect`),0<r.length&&(t=new wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};fn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Dt(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&I(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),si(e)}function oi(e,t){return ii(e,null,null,t),si(e)}function I(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-He(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function si(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function li(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function L(e,t,n,r){return new li(e,t,n,r)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function di(e,t){var n=e.alternate;return n===null?(n=L(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ui(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=L(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return mi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=L(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=L(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=L(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case ne:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=L(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function mi(e,t,n,r){return e=L(7,e,r,t),e.lanes=n,e}function hi(e,t,n){return e=L(6,e,null,t),e.lanes=n,e}function gi(e){var t=L(18,null,null,0);return t.stateNode=e,t}function _i(e,t,n){return t=L(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vi=new WeakMap;function yi(e,t){if(typeof e==`object`&&e){var n=vi.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},vi.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var bi=[],xi=0,Si=null,Ci=0,wi=[],Ti=0,Ei=null,Di=1,Oi=``;function ki(e,t){bi[xi++]=Ci,bi[xi++]=Si,Si=e,Ci=t}function Ai(e,t,n){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Ei=e;var r=Di;e=Oi;var i=32-He(r)-1;r&=~(1<<i),n+=1;var a=32-He(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Di=1<<32-He(t)+i|n<<i|r,Oi=a+e}else Di=1<<a|n<<i|r,Oi=e}function ji(e){e.return!==null&&(ki(e,1),Ai(e,1,0))}function Mi(e){for(;e===Si;)Si=bi[--xi],bi[xi]=null,Ci=bi[--xi],bi[xi]=null;for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Oi=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null}function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Di=t.id,Oi=t.overflow,Ei=e}var Pi=null,Fi=null,R=!1,Ii=null,Li=!1,z=Error(i(519));function Ri(e){throw Ui(yi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),z}function B(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[ft]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Wt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=rn),t=!0):t=!1,t||Ri(e,!0)}function zi(e){for(Pi=e.return;Pi;)switch(Pi.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Pi=Pi.return}}function Bi(e){if(e!==Pi)return!1;if(!R)return zi(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Fi&&Ri(e),zi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Fi=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Fi=uf(e)}else t===27?(t=Fi,Zd(e.type)?(e=lf,lf=null,Fi=e):Fi=t):Fi=Pi?cf(e.stateNode.nextSibling):null;return!0}function Vi(){Fi=Pi=null,R=!1}function Hi(){var e=Ii;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ii=null),e}function Ui(e){Ii===null?Ii=[e]:Ii.push(e)}var Wi=de(null),Gi=null,Ki=null;function qi(e,t,n){j(Wi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Wi.current,A(Wi)}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Yi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Tr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===M.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Xi(t,e,n,r),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Tr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $i(e){Gi=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return na(Gi,e)}function ta(e,t){return Gi===null&&$i(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(i(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ia=t.unstable_scheduleCallback,aa=t.unstable_NormalPriority,oa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sa(){return{controller:new ra,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&ia(aa,function(){e.controller.abort()})}var la=null,ua=0,da=0,fa=null;function pa(e,t){if(la===null){var n=la=[];ua=0,da=dd(),fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ua++,t.then(ma,ma),t}function ma(){if(--ua===0&&la!==null){fa!==null&&(fa.status=`fulfilled`);var e=la;la=null,da=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ga=O.S;O.S=function(e,t){eu=Ae(),typeof t==`object`&&t&&typeof t.then==`function`&&pa(e,t),ga!==null&&ga(e,t)};var _a=de(null);function va(){var e=_a.current;return e===null?q.pooledCache:e}function ya(e,t){t===null?j(_a,_a.current):j(_a,t.pool)}function ba(){var e=va();return e===null?null:{parent:oa._currentValue,pool:e}}var xa=Error(i(460)),Sa=Error(i(474)),Ca=Error(i(542)),wa={then:function(){}};function Ta(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ea(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(rn,rn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then(rn,rn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,xa}}function Da(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Oa=e,xa):e}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===xa||e===Ca)throw Error(i(483))}var ja=null,Ma=0;function Na(e){var t=Ma;return Ma+=1,ja===null&&(ja=[]),Ea(ja,e,t)}function Pa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Fa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ia(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&Da(i)===t.type)?(t=a(t,n.props),Pa(t,n),t.return=e,t):(t=pi(n.type,n.key,n.props,null,e.mode,r),Pa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=mi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=hi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=pi(t.type,t.key,t.props,null,e.mode,n),Pa(n,t),n.return=e,n;case v:return t=_i(t,e.mode,n),t.return=e,t;case ne:return t=Da(t),f(e,t,n)}if(se(t)||E(t))return t=mi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Na(t),n);if(t.$$typeof===C)return f(e,ta(e,t),n);Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=Da(n),p(e,t,n,r)}if(se(n)||E(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Na(n),r);if(n.$$typeof===C)return p(e,t,ta(e,n),r);Fa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=Da(r),m(e,t,n,r,i)}if(se(r)||E(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Na(r),i);if(r.$$typeof===C)return m(e,t,n,ta(t,r),i);Fa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&ki(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&ki(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&ki(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&ki(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&ki(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&ki(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&Da(l)===r.type){n(e,r.sibling),c=a(r,o.props),Pa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=mi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=pi(o.type,o.key,o.props,null,e.mode,c),Pa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=_i(o,e.mode,c),c.return=e,e=c}return s(e);case ne:return o=Da(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(E(o)){if(l=E(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Na(o),c);if(o.$$typeof===C)return b(e,r,ta(e,o),c);Fa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=hi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ma=0;var i=b(e,t,n,r);return ja=null,i}catch(t){if(t===xa||t===Ca)throw t;var a=L(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var La=Ia(!0),Ra=Ia(!1),za=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Va(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=si(e),I(e,null,n),t}return ii(e,r,t,n),si(e)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ka=!1;function qa(){if(Ka){var e=fa;if(e!==null)throw e}}function Ja(e,t,n,r){Ka=!1;var i=e.updateQueue;za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===da&&(Ka=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:za=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Xa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ya(n[e],t)}var Za=de(null),Qa=de(0);function $a(e,t){e=Ul,j(Qa,e),j(Za,t),Ul=e|t.baseLanes}function eo(){j(Qa,Ul),j(Za,Za.current)}function to(){Ul=Qa.current,A(Za),A(Qa)}var no=de(null),ro=null;function io(e){var t=e.alternate;j(lo,lo.current&1),j(no,e),ro===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(ro=e)}function ao(e){j(lo,lo.current),j(no,e),ro===null&&(ro=e)}function oo(e){e.tag===22?(j(lo,lo.current),j(no,e),ro===null&&(ro=e)):so(e)}function so(){j(lo,lo.current),j(no,no.current)}function co(e){A(no),ro===e&&(ro=null),A(lo)}var lo=de(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=0,V=null,H=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return fo=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Rs:zs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){O.H=Ls;var t=H!==null&&H.next!==null;if(fo=0,po=H=V=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&Qi(e)&&(nc=!0))}function To(e,t,n,r){V=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Bs,o=t(n,r)}while(ho);return o}function Eo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function U(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}fo=0,po=H=V=null,ho=!1,vo=_o=0,yo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?V.memoizedState=po=e:po=po.next=e,po}function Ao(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=po===null?V.memoizedState:po.next;if(t!==null)po=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},po===null?V.memoizedState=po=e:po=po.next=e}return po}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Ea(yo,e,t),t=V,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Rs:zs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===C)return ea(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),H,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(fo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===da&&(d=!0);else if((fo&p)===p){u=u.next,p===da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,Gl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Tr(o,e.memoizedState)&&(nc=!0,d&&(n=fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Tr(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=V,a=Ao(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Tr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},W.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||fo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=jo(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function W(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Uo(e){var t=oi(e,2);t!==null&&hu(t,e,2)}function Wo(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),go){Ve(!0);try{n()}finally{Ve(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Lo(e,H,typeof r==`function`?r:Fo)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(R){var n=q.formState;if(n!==null){a:{var r=V;if(R){if(Fi){b:{for(var i=Fi,a=Li;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Fi=cf(i.nextSibling),r=i.data===`F!`;break a}}Ri(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,V,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,V,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(Ao(),H,e)}function ts(e,t,n){if(t=Lo(e,t,Qo)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===xa?Ca:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=Ao(),n=H;if(n!==null)return ts(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=jo(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return Ao().memoizedState}function os(e,t,n,r){var i=ko();V.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&So(r,H.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(V.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=jo(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=Ao().memoizedState;return us({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||fo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),V.lanes|=e,Gl|=e,n)}function bs(e,t,n,r){return Tr(n,t)?n:Za.current===null?!(fo&42)||fo&1073741824&&!(Y&261930)?(nc=!0,e.memoizedState=n):(e=mu(),V.lanes|=e,Gl|=e,t):(e=ys(e,n,r),Tr(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ns(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,ha(c,r),pu(e)):Ms(e,t,r,pu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,ce,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},pu())}function Es(){return ea(Qf)}function Ds(){return Ao().memoizedState}function Os(){return Ao().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ha(n);var r=Ua(t,e,n);r!==null&&(hu(r,t,n),Wa(r,t,n)),t={cache:sa()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=ai(e,t,n,r),n!==null&&(hu(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,pu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,o))return ii(e,t,i,0),q===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return hu(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&hu(t,e,2)}function Ps(e){var t=e.alternate;return e===V||t!==null&&t===V}function Fs(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var Ls={readContext:ea,use:No,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};Ls.useEffectEvent=xo;var Rs={readContext:ea,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:ea,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(go){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(go){Ve(!0);try{n(t)}finally{Ve(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(ko(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,V,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=ko();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},W.bind(null,r,o,n,t),null),n},useId:function(){var e=ko(),t=q.identifierPrefix;if(R){var n=Oi,r=Di;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=ks.bind(null,V)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:ea,use:No,useCallback:_s,useContext:ea,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Io,useRef:as,useState:function(){return Io(Fo)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(Ao(),H.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(Ao(),H,e,t)},useMemoCache:Po,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:ea,use:No,useCallback:_s,useContext:ea,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Ro,useRef:as,useState:function(){return Ro(Fo)},useDebugValue:gs,useDeferredValue:function(e,t){var n=Ao();return H===null?ys(n,e,t):bs(n,H.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=Ao();return H===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,H,e,t)},useMemoCache:Po,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ha(r);i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(hu(t,e,r),Wa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ha(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(hu(t,e,r),Wa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ha(n);r.tag=2,t!=null&&(r.callback=t),t=Ua(e,r,n),t!==null&&(hu(t,e,n),Wa(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){$r(e)}function qs(e){console.error(e)}function Js(e){$r(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=Ha(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=Ha(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zi(t,n,a,!0),n=no.current,n!==null){switch(n.tag){case 31:case 13:return ro===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(R)return t=no.current,t===null?(r!==z&&(t=Error(i(423),{cause:r}),Ui(yi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=yi(r,n),a=Zs(e.stateNode,r,a),Ga(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==z&&(e=Error(i(422),{cause:r}),Ui(yi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=yi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=yi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Ga(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Ga(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?Ra(t,null,n,r):La(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $i(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!nc?(U(e,t,i),Oc(e,t,i)):(R&&s&&ji(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ui(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Er:n,n(o,r)&&e.ref===t.ref)return Oc(e,t,i)}return t.flags|=1,e=di(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Er(a,r)&&e.ref===t.ref)if(nc=!1,t.pendingProps=r=a,kc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Oc(e,t,i)}return mc(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ya(t,a===null?null:a.cachePool),a===null?eo():$a(t,a),oo(t);else return r=t.lanes=536870912,lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ya(t,null),eo(),so(t)):(ya(t,a.cachePool),$a(t,a),so(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lc(e,t,n,r,i){var a=va();return a=a===null?null:{parent:oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ya(t,null),eo(),oo(t),e!==null&&Zi(e,t,r,!0),t.childLanes=i,null}function uc(e,t){return t=Cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dc(e,t,n){return La(t,e.child,null,n),e=uc(t,t.pendingProps),e.flags|=2,co(t),t.memoizedState=null,e}function fc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=uc(t,r),t.lanes=536870912,cc(null,e);if(ao(t),(e=Fi)?(e=rf(e,Li),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,Fi=null)):e=null,e===null)throw Ri(t);return t.lanes=536870912,null}return uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ao(t),a)if(t.flags&256)t.flags&=-257,t=dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(nc||Zi(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=q,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),hu(r,e,s),tc;Du(),t=dc(e,t,n)}else e=o.treeContext,Fi=cf(s.nextSibling),Pi=t,R=!0,Ii=null,Li=!1,e!==null&&Ni(t,e),t=uc(t,r),t.flags|=4096;return t}return e=di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,r,i){return $i(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!nc?(U(e,t,i),Oc(e,t,i)):(R&&r&&ji(t),t.flags|=1,rc(e,t,n,i),t.child)}function hc(e,t,n,r,i,a){return $i(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!nc?(U(e,t,a),Oc(e,t,a)):(R&&r&&ji(t),t.flags|=1,rc(e,t,n,a),t.child)}function gc(e,t,n,r,i){if($i(t),t.stateNode===null){var a=ci,o=n.contextType;typeof o==`object`&&o&&(a=ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ba(t),o=n.contextType,a.context=typeof o==`object`&&o?ea(o):ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),Ja(t,r,a,i),qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ci,typeof u==`object`&&u&&(o=ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),za=!1;var f=t.memoizedState;a.state=f,Ja(t,r,a,i),qa(),l=t.memoizedState,s||f!==l||za?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=za||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Va(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ci,typeof l==`object`&&l&&(c=ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),za=!1,f=t.memoizedState,a.state=f,Ja(t,r,a,i),qa();var p=t.memoizedState;o!==d||f!==p||za||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=za||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,pc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=La(t,e.child,null,i),t.child=La(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Oc(e,t,i),e}function _c(e,t,n,r){return Vi(),t.flags|=256,rc(e,t,n,r),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:ba()}}function bc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function xc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(lo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(R){if(a?io(t):so(t),(e=Fi)?(e=rf(e,Li),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,Fi=null)):e=null,e===null)throw Ri(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(so(t),a=t.mode,c=Cc({mode:`hidden`,children:c},a),r=mi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(null,r)):(io(t),Sc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(io(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState===null?(so(t),c=r.fallback,a=t.mode,r=Cc({mode:`visible`,children:r.children},a),c=mi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,La(t,e.child,null,n),r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,t=cc(null,r)):(so(t),t.child=e.child,t.flags|=128,t=null);else if(io(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ui({value:r,source:null,stack:null}),t=wc(e,t,n)}else if(nc||Zi(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=q,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),hu(s,e,r),tc;af(c)||Du(),t=wc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Fi=cf(c.nextSibling),Pi=t,R=!0,Ii=null,Li=!1,e!==null&&Ni(t,e),t=Sc(t,r.children),t.flags|=4096);return t}return a?(so(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=di(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=mi(c,a,n,null),c.flags|=2):c=di(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=yc(n):(a=c.cachePool,a===null?a=ba():(l=oa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(e.child,r)):(io(t),n=e.child,e=n.sibling,n=di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=Cc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Cc(e,t){return e=L(22,e,null,t),e.lanes=0,e}function wc(e,t,n){return La(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function Ec(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=lo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(lo,o),rc(e,t,r,n),r=R?Ci:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,a,r);break;case`together`:Ec(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qi(e))):!0}function Ac(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),qi(t,oa,e.memoizedState.cache),Vi();break;case 27:case 5:ge(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(io(t),e=Oc(e,t,n),e===null?null:e.sibling):xc(e,t,n):(io(t),t.flags|=128,null);io(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(lo,lo.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:qi(t,oa,e.memoizedState.cache)}return Oc(e,t,n)}function jc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!kc(e,n)&&!(t.flags&128))return nc=!1,Ac(e,t,n);nc=!!(e.flags&131072)}else nc=!1,R&&t.flags&1048576&&Ai(t,Ci,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e==`function`)ui(e)?(r=Gs(e,r),t.tag=1,t=gc(null,t,e,r,n)):(t.tag=0,t=mc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ic(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=D(e)||e,Error(i(306,t,``))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),gc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Va(e,t),Ja(t,r,null,n);var s=t.memoizedState;if(r=s.cache,qi(t,oa,r),r!==o.cache&&Xi(t,[oa],n,!0),qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_c(e,t,r,n);break a}else if(r!==a){a=yi(Error(i(424)),t),Ui(a),t=_c(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Fi=cf(e.firstChild),Pi=t,R=!0,Ii=null,Li=!0,n=Ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),r===a){t=Oc(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[dt]=t,r[ft]=e,Pd(r,n,e),wt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&R&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),Pi=t,Li=!0,a=Fi,Zd(t.type)?(lf=a,Fi=cf(r.firstChild)):Fi=a),rc(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=Fi)&&(r=tf(r,t.type,t.pendingProps,Li),r===null?a=!1:(t.stateNode=r,Pi=t,Fi=cf(r.firstChild),Li=!1,a=!0)),a||Ri(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),pc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=Fi)&&(n=nf(n,t.pendingProps,Li),n===null?e=!1:(t.stateNode=n,Pi=t,Fi=null,e=!0)),e||Ri(t)),null;case 13:return xc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=La(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qi(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$i(t),a=ea(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Dc(e,t,n);case 31:return fc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return $i(t),r=ea(oa),e===null?(a=va(),a===null&&(a=q,o=sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ba(t),qi(t,oa,a)):((e.lanes&n)!==0&&(Va(e,t),Ja(t,null,null,n),qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qi(t,oa,r),r!==a.cache&&Xi(t,[oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,oa,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Oa=wa,Sa}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Oa=wa,Sa}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,Yl|=t)}function Ic(e,t){if(!R)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Lc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lc(t),null;case 1:return Lc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ji(oa),N(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hi())),Lc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(Lc(t),Nc(t,a,null,r,n)):(Lc(t),Pc(t,o))):o?o===e.memoizedState?(Lc(t),t.flags&=-16777217):(Mc(t),Lc(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),Lc(t),Nc(t,a,e,r,n)),null;case 27:if(_e(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lc(t),null}e=fe.current,Bi(t)?B(t,e):(e=ff(a,r,n),t.stateNode=e,Mc(t))}return Lc(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lc(t),null}if(o=fe.current,Bi(t))B(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[dt]=t,o[ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return Lc(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Bi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Pi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ri(t,!0)}else e=Bd(e).createTextNode(r),e[dt]=t,t.stateNode=e}return Lc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Bi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[dt]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lc(t),e=!1}else n=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(co(t),t):(co(t),null);if(t.flags&128)throw Error(i(558))}return Lc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[dt]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lc(t),a=!1}else a=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(co(t),t):(co(t),null)}return co(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),Lc(t),null);case 4:return N(),e===null&&Sd(t.stateNode.containerInfo),Lc(t),null;case 10:return Ji(t.type),Lc(t),null;case 19:if(A(lo),r=t.memoizedState,r===null)return Lc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Ic(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uo(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fi(n,e),n=n.sibling;return j(lo,lo.current&1|2),R&&ki(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ae()>tu&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}else{if(!a)if(e=uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!R)return Lc(t),null}else 2*Ae()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Lc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ae(),e.sibling=null,n=lo.current,j(lo,a?n&1|2:n&1),R&&ki(t,r.treeForkCount),e);case 22:case 23:return co(t),to(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Lc(t),t.subtreeFlags&6&&(t.flags|=8192)):Lc(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&A(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(oa),Lc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Mi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(oa),N(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(co(t),t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(lo),null;case 4:return N(),null;case 10:return Ji(t.type),null;case 22:case 23:return co(t),to(),e!==null&&A(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(oa),null;case 25:return null;default:return null}}function Bc(e,t){switch(Mi(t),t.tag){case 3:Ji(oa),N();break;case 26:case 27:case 5:_e(t);break;case 4:N();break;case 31:t.memoizedState!==null&&co(t);break;case 13:co(t);break;case 19:A(lo);break;case 10:Ji(t.type);break;case 22:case 23:co(t),to(),e!==null&&A(_a);break;case 24:Ji(oa)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xa(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ft]=t}catch(t){Z(e,e.return,t)}}function G(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||G(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[dt]=e,t[ft]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Ar(e),jr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount==`function`)try{Be.onCommitFiberUnmount(ze,n)}catch{}switch(n.tag){case 26:el||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Kc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Kc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),el||Hc(4,n,t),ll(e,t,n);break;case 1:el||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Kc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[vt]||o[dt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[dt]=e,wt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[dt]=e,wt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Yt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ae()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(G(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Yt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ya(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ca(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=ea(oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ea(oa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:O.T===null?ct():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||R){var e=qe;qe<<=1,!(qe&3932160)&&(qe=262144),Jl=e}else Jl=536870912;return e=no.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),tt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ze(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ae(),10<a)){if(yu(r,t,Jl,!Bl),Xe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rn},jl(t,a,d);var m=(a&62914560)===a?$l-Ae():(a&4194048)===a?eu-Ae():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-He(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ki=Gi=null,Oo(e),ja=null,Ma=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=di(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ze(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-He(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ri(),n}function Cu(e,t){V=null,O.H=Ls,t===xa||t===Ca?(t=ka(),X=3):t===Sa?(t=ka(),X=4):X=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Ys(e,yi(t,e.current)))}function wu(){var e=no.current;return e===null?!0:(Y&4194048)===Y?ro===null:(Y&62914560)===Y||Y&536870912?e===ro:!1}function Tu(){var e=O.H;return O.H=Ls,e===null?Ls:e}function Eu(){var e=O.A;return O.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&no.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:no.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ki=Gi=null,K=r,O.H=i,O.A=a,J===null&&(q=null,Y=0,ri()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Ae()+500,Su(e,t)):Vl=Ze(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ta(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ta(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ki=Gi=null,O.H=r,O.A=a,K=n,J===null?(q=null,Y=0,ri(),Wl):0}function ju(){for(;J!==null&&!Oe();)Mu(J)}function Mu(e){var t=jc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=hc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Oo(t);default:Bc(n,t),t=J=fi(t,Ul),t=jc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ki=Gi=null,Oo(t),ja=null,Ma=0;var i=t.return;try{if(ec(e,i,t,n,Y)){Wl=1,Ys(e,yi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Ys(e,yi(n,e.current)),J=null;return}t.flags&32768?(R||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=no.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,nt(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Pe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Ar(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,ke();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),st(n),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot==`function`)try{Be.onCommitFiberRoot(ze,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=st(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Be&&typeof Be.onPostCommitFiberRoot==`function`)try{Be.onPostCommitFiberRoot(ze,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=yi(n,t),t=Zs(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(tt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=yi(n,e),n=Qs(2),r=Ua(t,n,2),r!==null&&($s(n,r,t,e),tt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Ae()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=$e()),e=oi(e,t),e!==null&&(tt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ee(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-He(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Xe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ae(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-He(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),st(n)){case 2:case 8:n=Ne;break;case 32:n=Pe;break;case 268435456:n=Ie;break;default:n=Pe}return r=cd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Xe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ae()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Ee(Me,ad):od()})}function dd(){if(nd===0){var e=da;e===0&&(e=Ke,Ke<<=1,!(Ke&261888)&&(Ke=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:nn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ft]||null).action),o=r.submitter;o&&(t=(t=o[ft]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[mt];n===void 0&&(n=t[mt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Tt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!pn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}un(function(){var r=a,i=F(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=wn,u=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:l=Hn;break;case`focusin`:u=`focus`,l=Nn;break;case`focusout`:u=`blur`,l=Nn;break;case`beforeblur`:case`afterblur`:l=Nn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Mn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Wn;break;case Ur:case Wr:case Gr:l=Pn;break;case Yr:l=Gn;break;case`scroll`:case`scrollend`:l=En;break;case`wheel`:l=Kn;break;case`copy`:case`cut`:case`paste`:l=Fn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Un;break;case`toggle`:case`beforetoggle`:l=qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=dn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==an&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[pt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?bt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Un,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:St(l),h=u==null?c:St(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=pr;else if(sr(c))if(mr)v=Cr;else{v=xr;var y=br}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&$t(r.elementType)&&(v=pr):v=Sr;if(v&&=v(e,r)){cr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Gt(c,`number`,c.value)}switch(y=r?St(r):window,e){case`focusin`:(sr(y)||y.contentEditable===`true`)&&(Nr=y,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(s,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(s,n,i)}var b;if(Yn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else rr?tr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Qn&&n.locale!==`ko`&&(rr||x!==`onCompositionStart`?x===`onCompositionEnd`&&rr&&(b=vn()):(hn=i,gn=`value`in hn?hn.value:hn.textContent,rr=!0)),y=Ed(r,x),0<y.length&&(x=new In(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=nr(n),b!==null&&(x.data=b)))),(b=Zn?ir(e,n):ar(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new In(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=dn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=dn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=dn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=dn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Yt(e,``+r);break;case`className`:Nt(e,`class`,r);break;case`tabIndex`:Nt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Nt(e,n,r);break;case`style`:Qt(e,r,o);break;case`data`:if(t!==`object`){Nt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=rn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=nn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Mt(e,`popover`,r);break;case`xlinkActuate`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Mt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=en.get(n)||n,Mt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Yt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=rn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ft]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Mt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Wt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Kt(e,!!r,n,!0):Kt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Jt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if($t(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Ut(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Kt(e,!!n,n?[]:``,!1):Kt(e,!!n,t,!0)):Kt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if($t(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),yt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ht(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ht(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ht(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ht(n.imageSizes)+`"]`)):i+=`[href="`+Ht(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ht(r)+`"][href="`+Ht(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),wt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ct(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);wt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ct(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ct(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ct(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ht(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),wt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ht(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ht(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,wt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),wt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[vt]||a[dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=L(3,null,null,t),e.current=a,a.stateNode=e,t=sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ba(a),e}function tp(e){return e?(e=ci,e):ci}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ha(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ua(e,r,t),n!==null&&(hu(n,e,t),Wa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ot(t);var n=oi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ye(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-He(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Ae()+500,id(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=F(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case Me:return 2;case Ne:return 8;case Pe:case Fe:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);an=r,n.target.dispatchEvent(r),an=null}else return t=xt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ft]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ft]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[pt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{ze=zp.inject(Rp),Be=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[pt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_={black:`#000`,white:`#fff`},v={50:`#ffebee`,100:`#ffcdd2`,200:`#ef9a9a`,300:`#e57373`,400:`#ef5350`,500:`#f44336`,600:`#e53935`,700:`#d32f2f`,800:`#c62828`,900:`#b71c1c`,A100:`#ff8a80`,A200:`#ff5252`,A400:`#ff1744`,A700:`#d50000`},y={50:`#f3e5f5`,100:`#e1bee7`,200:`#ce93d8`,300:`#ba68c8`,400:`#ab47bc`,500:`#9c27b0`,600:`#8e24aa`,700:`#7b1fa2`,800:`#6a1b9a`,900:`#4a148c`,A100:`#ea80fc`,A200:`#e040fb`,A400:`#d500f9`,A700:`#aa00ff`},b={50:`#e3f2fd`,100:`#bbdefb`,200:`#90caf9`,300:`#64b5f6`,400:`#42a5f5`,500:`#2196f3`,600:`#1e88e5`,700:`#1976d2`,800:`#1565c0`,900:`#0d47a1`,A100:`#82b1ff`,A200:`#448aff`,A400:`#2979ff`,A700:`#2962ff`},x={50:`#e1f5fe`,100:`#b3e5fc`,200:`#81d4fa`,300:`#4fc3f7`,400:`#29b6f6`,500:`#03a9f4`,600:`#039be5`,700:`#0288d1`,800:`#0277bd`,900:`#01579b`,A100:`#80d8ff`,A200:`#40c4ff`,A400:`#00b0ff`,A700:`#0091ea`},S={50:`#e8f5e9`,100:`#c8e6c9`,200:`#a5d6a7`,300:`#81c784`,400:`#66bb6a`,500:`#4caf50`,600:`#43a047`,700:`#388e3c`,800:`#2e7d32`,900:`#1b5e20`,A100:`#b9f6ca`,A200:`#69f0ae`,A400:`#00e676`,A700:`#00c853`},C={50:`#fff3e0`,100:`#ffe0b2`,200:`#ffcc80`,300:`#ffb74d`,400:`#ffa726`,500:`#ff9800`,600:`#fb8c00`,700:`#f57c00`,800:`#ef6c00`,900:`#e65100`,A100:`#ffd180`,A200:`#ffab40`,A400:`#ff9100`,A700:`#ff6d00`},w={50:`#fafafa`,100:`#f5f5f5`,200:`#eeeeee`,300:`#e0e0e0`,400:`#bdbdbd`,500:`#9e9e9e`,600:`#757575`,700:`#616161`,800:`#424242`,900:`#212121`,A100:`#f5f5f5`,A200:`#eeeeee`,A400:`#bdbdbd`,A700:`#616161`};function ee(e,...t){let n=new URL(`https://mui.com/production-error/?code=${e}`);return t.forEach(e=>n.searchParams.append(`args[]`,e)),`Minified MUI error #${e}; visit ${n} for the full message.`}var T=`$$material`;function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(null,arguments)}var ne=!1;function re(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ie(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var ae=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!ne:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(ie(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=re(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),E=`-ms-`,oe=`-moz-`,D=`-webkit-`,se=`comm`,O=`rule`,k=`decl`,ce=`@import`,le=`@keyframes`,ue=`@layer`,de=Math.abs,A=String.fromCharCode,j=Object.assign;function fe(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function pe(e){return e.trim()}function me(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function he(e,t){return e.indexOf(t)}function N(e,t){return e.charCodeAt(t)|0}function ge(e,t,n){return e.slice(t,n)}function _e(e){return e.length}function ve(e){return e.length}function ye(e,t){return t.push(e),e}function be(e,t){return e.map(t).join(``)}var xe=1,Se=1,Ce=0,we=0,Te=0,Ee=``;function De(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:xe,column:Se,length:o,return:``}}function Oe(e,t){return j(De(``,null,null,``,null,null,0),e,{length:-e.length},t)}function ke(){return Te}function Ae(){return Te=we>0?N(Ee,--we):0,Se--,Te===10&&(Se=1,xe--),Te}function je(){return Te=we<Ce?N(Ee,we++):0,Se++,Te===10&&(Se=1,xe++),Te}function Me(){return N(Ee,we)}function Ne(){return we}function Pe(e,t){return ge(Ee,e,t)}function Fe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ie(e){return xe=Se=1,Ce=_e(Ee=e),we=0,[]}function Le(e){return Ee=``,e}function Re(e){return pe(Pe(we-1,Ve(e===91?e+2:e===40?e+1:e)))}function ze(e){for(;(Te=Me())&&Te<33;)je();return Fe(e)>2||Fe(Te)>3?``:` `}function Be(e,t){for(;--t&&je()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return Pe(e,Ne()+(t<6&&Me()==32&&je()==32))}function Ve(e){for(;je();)switch(Te){case e:return we;case 34:case 39:e!==34&&e!==39&&Ve(Te);break;case 40:e===41&&Ve(e);break;case 92:je();break}return we}function He(e,t){for(;je()&&e+Te!==57&&!(e+Te===84&&Me()===47););return`/*`+Pe(t,we-1)+`*`+A(e===47?e:je())}function Ue(e){for(;!Fe(Me());)je();return Pe(e,we)}function We(e){return Le(Ge(``,null,null,null,[``],e=Ie(e),0,[0],e))}function Ge(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=je()){case 40:if(m!=108&&N(C,d-1)==58){he(C+=M(Re(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Re(v);break;case 9:case 10:case 13:case 32:C+=ze(m);break;case 92:C+=Be(Ne()-1,7);continue;case 47:switch(Me()){case 42:case 47:ye(qe(He(je(),Ne()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=_e(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=M(C,/\f/g,``)),p>0&&_e(C)-d&&ye(p>32?Je(C+`;`,r,n,d-1):Je(M(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(ye(S=Ke(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)Ge(C,t,S,S,b,a,d,s,x);else switch(f===99&&N(C,3)===110?100:f){case 100:case 108:case 109:case 115:Ge(e,S,S,r&&ye(Ke(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:Ge(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+_e(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Ae()==125)continue}switch(C+=A(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(_e(C)-1)*_,_=1;break;case 64:Me()===45&&(C+=Re(je())),f=Me(),u=d=_e(y=C+=Ue(Ne())),v++;break;case 45:m===45&&_e(C)==2&&(h=0)}}return a}function Ke(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=ve(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=ge(e,d+1,d=de(h=o[m])),y=e;_<p;++_)(y=pe(h>0?f[_]+` `+v:M(v,/&\f/g,f[_])))&&(c[g++]=y);return De(e,t,n,i===0?O:s,c,l,u)}function qe(e,t,n){return De(e,t,n,se,A(ke()),ge(e,2,-2),0)}function Je(e,t,n,r){return De(e,t,n,k,ge(e,0,r),ge(e,r+1,-1),r)}function Ye(e,t){for(var n=``,r=ve(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function Xe(e,t,n,r){switch(e.type){case ue:if(e.children.length)break;case ce:case k:return e.return=e.return||e.value;case se:return``;case le:return e.return=e.value+`{`+Ye(e.children,r)+`}`;case O:e.value=e.props.join(`,`)}return _e(n=Ye(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ze(e){var t=ve(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Qe(e){return function(t){t.root||(t=t.return)&&e(t)}}function $e(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var et=function(e,t,n){for(var r=0,i=0;r=i,i=Me(),r===38&&i===12&&(t[n]=1),!Fe(i);)je();return Pe(e,we)},tt=function(e,t){var n=-1,r=44;do switch(Fe(r)){case 0:r===38&&Me()===12&&(t[n]=1),e[n]+=et(we-1,t,n);break;case 2:e[n]+=Re(r);break;case 4:if(r===44){e[++n]=Me()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=A(r)}while(r=je());return e},nt=function(e,t){return Le(tt(Ie(e),t))},rt=new WeakMap,it=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!rt.get(n))&&!r){rt.set(e,!0);for(var i=[],a=nt(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},at=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function ot(e,t){switch(fe(e,t)){case 5103:return D+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+oe+e+E+e+e;case 6828:case 4268:return D+e+E+e+e;case 6165:return D+e+E+`flex-`+e+e;case 5187:return D+e+M(e,/(\w+).+(:[^]+)/,D+`box-$1$2`+E+`flex-$1$2`)+e;case 5443:return D+e+E+`flex-item-`+M(e,/flex-|-self/,``)+e;case 4675:return D+e+E+`flex-line-pack`+M(e,/align-content|flex-|-self/,``)+e;case 5548:return D+e+E+M(e,`shrink`,`negative`)+e;case 5292:return D+e+E+M(e,`basis`,`preferred-size`)+e;case 6060:return D+`box-`+M(e,`-grow`,``)+D+e+E+M(e,`grow`,`positive`)+e;case 4554:return D+M(e,/([^-])(transform)/g,`$1`+D+`$2`)+e;case 6187:return M(M(M(e,/(zoom-|grab)/,D+`$1`),/(image-set)/,D+`$1`),e,``)+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,D+`box-pack:$3`+E+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+D+e+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,D+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_e(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,`$1`+D+`$2-$3$1`+oe+(N(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~he(e,`stretch`)?ot(M(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(N(e,t+1)!==115)break;case 6444:switch(N(e,_e(e)-3-(~he(e,`!important`)&&10))){case 107:return M(e,`:`,`:`+D)+e;case 101:return M(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+D+(N(e,14)===45?`inline-`:``)+`box$3$1`+D+`$2$3$1`+E+`$2box$3`)+e}break;case 5936:switch(N(e,t+11)){case 114:return D+e+E+M(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return D+e+E+M(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return D+e+E+M(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return D+e+E+e+e}return e}var st=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case k:e.return=ot(e.value,e.length);break;case le:return Ye([Oe(e,{value:M(e.value,`@`,`@`+D)})],r);case O:if(e.length)return be(e.props,function(t){switch(me(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return Ye([Oe(e,{props:[M(t,/:(read-\w+)/,`:`+oe+`$1`)]})],r);case`::placeholder`:return Ye([Oe(e,{props:[M(t,/:(plac\w+)/,`:`+D+`input-$1`)]}),Oe(e,{props:[M(t,/:(plac\w+)/,`:`+oe+`$1`)]}),Oe(e,{props:[M(t,/:(plac\w+)/,E+`input-$1`)]})],r)}return``})}}],ct=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||st,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[it,at],l,u=[Xe,Qe(function(e){l.insert(e)})],d=Ze(c.concat(r,u)),f=function(e){return Ye(We(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new ae({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},lt=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),ut=o(((e,t)=>{t.exports=lt()})),dt=o(((e,t)=>{var n=ut(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h})),ft=!0;function pt(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var mt=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||ft===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},ht=function(e,t,n){mt(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function gt(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var _t={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt=!1,yt=/[A-Z]|^ms/g,bt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,xt=function(e){return e.charCodeAt(1)===45},St=function(e){return e!=null&&typeof e!=`boolean`},Ct=$e(function(e){return xt(e)?e:e.replace(yt,`-$&`).toLowerCase()}),wt=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(bt,function(e,t,n){return kt={name:t,styles:n,next:kt},t})}return _t[e]!==1&&!xt(e)&&typeof t==`number`&&t!==0?t+`px`:t},Tt=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Et(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return kt={name:i.name,styles:i.styles,next:kt},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)kt={name:o.name,styles:o.styles,next:kt},o=o.next;return a.styles+`;`}return Dt(e,t,n);case`function`:if(e!==void 0){var s=kt,c=n(e);return kt=s,Et(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Dt(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Et(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:St(s)&&(r+=Ct(a)+`:`+wt(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&vt)throw Error(Tt);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)St(o[c])&&(r+=Ct(a)+`:`+wt(a,o[c])+`;`);else{var l=Et(e,t,o);switch(a){case`animation`:case`animationName`:r+=Ct(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Ot=/label:\s*([^\s;{]+)\s*(;|$)/g,kt;function At(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;kt=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Et(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Et(n,t,e[o]),r&&(i+=a[o]);Ot.lastIndex=0;for(var s=``,c;(c=Ot.exec(i))!==null;)s+=`-`+c[1];return{name:gt(i)+s,styles:i,next:kt}}var P=c(u()),jt=function(e){return e()},Mt=P.useInsertionEffect?P.useInsertionEffect:!1,Nt=Mt||jt,Pt=Mt||P.useLayoutEffect,Ft=P.createContext(typeof HTMLElement<`u`?ct({key:`css`}):null);Ft.Provider;var It=function(e){return(0,P.forwardRef)(function(t,n){return e(t,(0,P.useContext)(Ft),n)})},Lt=P.createContext({}),Rt={}.hasOwnProperty,zt=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,Bt=function(e,t){var n={};for(var r in t)Rt.call(t,r)&&(n[r]=t[r]);return n[zt]=e,n},Vt=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return mt(t,n,r),Nt(function(){return ht(t,n,r)}),null},Ht=It(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[zt],a=[r],o=``;typeof e.className==`string`?o=pt(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=At(a,void 0,P.useContext(Lt));o+=t.key+`-`+s.name;var c={};for(var l in e)Rt.call(e,l)&&l!==`css`&&l!==zt&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),P.createElement(P.Fragment,null,P.createElement(Vt,{cache:t,serialized:s,isStringTag:typeof i==`string`}),P.createElement(i,c))});dt();var Ut=function(e,t){var n=arguments;if(t==null||!Rt.call(t,`css`))return P.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=Ht,i[1]=Bt(e,t);for(var a=2;a<r;a++)i[a]=n[a];return P.createElement.apply(null,i)};(function(e){var t;(function(e){})(t||=e.JSX||={})})(Ut||={});var Wt=It(function(e,t){var n=e.styles,r=At([n],void 0,P.useContext(Lt)),i=P.useRef();return Pt(function(){var e=t.key+`-global`,n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,o=document.querySelector(`style[data-emotion="`+e+` `+r.name+`"]`);return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),o!==null&&(a=!0,o.setAttribute(`data-emotion`,e),n.hydrate([o])),i.current=[n,a],function(){n.flush()}},[t]),Pt(function(){var e=i.current,n=e[0];if(e[1]){e[1]=!1;return}r.next!==void 0&&ht(t,r.next,!0),n.tags.length&&(n.before=n.tags[n.tags.length-1].nextElementSibling,n.flush()),t.insert(``,r,n,!1)},[t,r.name]),null});function Gt(){return At([...arguments])}function Kt(){var e=Gt.apply(void 0,arguments),t=`animation-`+e.name;return{name:t,styles:`@keyframes `+t+`{`+e.styles+`}`,anim:1,toString:function(){return`_EMO_`+this.name+`_`+this.styles+`_EMO_`}}}var qt=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Jt=$e(function(e){return qt.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Yt=!1,Xt=Jt,Zt=function(e){return e!==`theme`},Qt=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Xt:Zt},$t=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},en=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return mt(t,n,r),Nt(function(){return ht(t,n,r)}),null},tn=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=$t(t,n,r),c=s||Qt(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=It(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=P.useContext(Lt)}typeof e.className==`string`?a=pt(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=At(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Qt(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),P.createElement(P.Fragment,null,P.createElement(en,{cache:t,serialized:m,isStringTag:typeof r==`string`}),P.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Yt?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,te({},n,r,{shouldForwardProp:$t(h,r,!0)})).apply(void 0,d)},h}},nn=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),rn=tn.bind(null);nn.forEach(function(e){rn[e]=rn(e)});var an=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),F=o(((e,t)=>{t.exports=an()}))();function on(e){return e==null||Object.keys(e).length===0}function sn(e){let{styles:t,defaultTheme:n={}}=e;return(0,F.jsx)(Wt,{styles:typeof t==`function`?e=>t(on(e)?n:e):t})}function cn(e,t){return rn(e,t)}function ln(e,t){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}var un=[];function dn(e){return un[0]=e,At(un)}var fn=o((e=>{var t=Symbol.for(`react.fragment`),n=Symbol.for(`react.strict_mode`),r=Symbol.for(`react.profiler`),i=Symbol.for(`react.consumer`),a=Symbol.for(`react.context`),o=Symbol.for(`react.forward_ref`),s=Symbol.for(`react.suspense`),c=Symbol.for(`react.suspense_list`),l=Symbol.for(`react.memo`),u=Symbol.for(`react.lazy`),d=Symbol.for(`react.client.reference`);e.isValidElementType=function(e){return!!(typeof e==`string`||typeof e==`function`||e===t||e===r||e===n||e===s||e===c||typeof e==`object`&&e&&(e.$$typeof===u||e.$$typeof===l||e.$$typeof===a||e.$$typeof===i||e.$$typeof===o||e.$$typeof===d||e.getModuleId!==void 0))}})),pn=o(((e,t)=>{t.exports=fn()}))();function mn(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function hn(e){if(P.isValidElement(e)||(0,pn.isValidElementType)(e)||!mn(e))return e;let t={};return Object.keys(e).forEach(n=>{t[n]=hn(e[n])}),t}function gn(e,t,n={clone:!0}){let r=n.clone?{...e}:e;return mn(e)&&mn(t)&&Object.keys(t).forEach(i=>{P.isValidElement(t[i])||(0,pn.isValidElementType)(t[i])?r[i]=t[i]:mn(t[i])&&Object.prototype.hasOwnProperty.call(e,i)&&mn(e[i])?r[i]=gn(e[i],t[i],n):n.clone?r[i]=mn(t[i])?hn(t[i]):t[i]:r[i]=t[i]}),r}var _n=e=>{let t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>({...e,[t.key]:t.val}),{})};function vn(e){let{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n=`px`,step:r=5,...i}=e,a=_n(t),o=Object.keys(a);function s(e){return`@media (min-width:${typeof t[e]==`number`?t[e]:e}${n})`}function c(e){return`@media (max-width:${(typeof t[e]==`number`?t[e]:e)-r/100}${n})`}function l(e,i){let a=o.indexOf(i);return`@media (min-width:${typeof t[e]==`number`?t[e]:e}${n}) and (max-width:${(a!==-1&&typeof t[o[a]]==`number`?t[o[a]]:i)-r/100}${n})`}function u(e){return o.indexOf(e)+1<o.length?l(e,o[o.indexOf(e)+1]):s(e)}function d(e){let t=o.indexOf(e);return t===0?s(o[1]):t===o.length-1?c(o[t]):l(e,o[o.indexOf(e)+1]).replace(`@media`,`@media not all and`)}let f=[];for(let e=0;e<o.length;e+=1)f.push(s(o[e]));return{keys:o,values:a,up:s,down:c,between:l,only:u,not:d,unit:n,internal_mediaKeys:f,...i}}var yn=/min-width:\s*([0-9.]+)/;function bn(e,t){if(!e.containerQueries||!xn(t))return t;let n=[];for(let e in t)e.startsWith(`@container`)&&n.push(e);n.sort((e,t)=>(e.match(yn)?.[1]||0)-+(t.match(yn)?.[1]||0));let r=t;for(let e=0;e<n.length;e+=1){let t=n[e],i=r[t];delete r[t],r[t]=i}return r}function xn(e){for(let t in e)if(t.startsWith(`@container`))return!0;return!1}function Sn(e,t){return t===`@`||t.startsWith(`@`)&&(e.some(e=>t.startsWith(`@${e}`))||!!t.match(/^@\d/))}function Cn(e,t){let n=t.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;let[,r,i]=n,a=Number.isNaN(+r)?r||0:+r;return e.containerQueries(i).up(a)}function wn(e){let t=(e,t)=>e.replace(`@media`,t?`@container ${t}`:`@container`);function n(n,r){n.up=(...n)=>t(e.breakpoints.up(...n),r),n.down=(...n)=>t(e.breakpoints.down(...n),r),n.between=(...n)=>t(e.breakpoints.between(...n),r),n.only=(...n)=>t(e.breakpoints.only(...n),r),n.not=(...n)=>{let i=t(e.breakpoints.not(...n),r);return i.includes(`not all and`)?i.replace(`not all and `,``).replace(`min-width:`,`width<`).replace(`max-width:`,`width>`).replace(`and`,`or`):i}}let r={},i=e=>(n(r,e),r);return n(i),{...e,containerQueries:i}}var Tn={borderRadius:4};function En(e){if(e==null)return!0;for(let t in e)return!1;return!0}function Dn(e,t){let n=Array.isArray(t),r=Array.isArray(e);return Mn(t)?t:Nn(e)?Pn(t):n&&r?An(e,t):n===r?Fn(e,t):Pn(t)}function On(e){let t=0,n=e.length,r=Array(n);for(t=0;t<n;t+=1)r[t]=Pn(e[t]);return r}function kn(e){let t={};for(let n in e)t[n]=Pn(e[n]);return t}function An(e,t){let n=e.length;for(let r=0;r<t.length;r+=1)e[n+r]=Pn(t[r]);return e}function jn(e){return typeof e==`object`&&!!e&&!(e instanceof RegExp)&&!(e instanceof Date)}function Mn(e){return typeof e!=`object`||!e}function Nn(e){return typeof e!=`object`||!e||e instanceof RegExp||e instanceof Date}function Pn(e){return jn(e)?Array.isArray(e)?On(e):kn(e):e}function Fn(e,t){for(let n in t)n in e?e[n]=Dn(e[n],t[n]):e[n]=Pn(t[n]);return e}var In={},Ln={xs:0,sm:600,md:900,lg:1200,xl:1536},Rn=vn({values:Ln}),zn={containerQueries:e=>({up:t=>{let n=typeof t==`number`?t:Ln[t]||t;return typeof n==`number`&&(n=`${n}px`),e?`@container ${e} (min-width:${n})`:`@container (min-width:${n})`}})};function Bn(e,t,n){let r={};return Vn(r,e.theme,t,(e,t,i)=>{let a=n(t,i);e?r[e]=a:Dn(r,a)})}function Vn(e,t,n,r){if(t??=In,Array.isArray(n)){let i=t.breakpoints??Rn;for(let t=0;t<n.length;t+=1)Hn(e,i.up(i.keys[t]),n[t],void 0,r);return e}if(typeof n==`object`){let i=t.breakpoints??Rn,a=i.values??Ln;for(let o in n)if(Sn(i.keys,o)){let i=Cn(t.containerQueries?t:zn,o);i&&Hn(e,i,n[o],o,r)}else if(o in a)Hn(e,i.up(o),n[o],o,r);else{let t=o;e[t]=n[t]}return e}return r(void 0,n),e}function Hn(e,t,n,r,i){e[t]??={},i(t,n,r)}function Un(e=Rn){let{internal_mediaKeys:t}=e,n={};for(let e=0;e<t.length;e+=1)n[t[e]]={};return n}function Wn(e,t){let n=e.internal_mediaKeys;for(let e=0;e<n.length;e+=1){let r=n[e];En(t[r])&&delete t[r]}return t}function Gn(e,...t){return Wn(e,[Un(e),...t].reduce((e,t)=>gn(e,t),{}))}function Kn(e,t){if(typeof e!=`object`)return{};let n={},r=Object.keys(t);return Array.isArray(e)?r.forEach((t,r)=>{r<e.length&&(n[t]=!0)}):r.forEach(t=>{e[t]!=null&&(n[t]=!0)}),n}function qn({values:e,breakpoints:t,base:n}){let r=n||Kn(e,t),i=Object.keys(r);if(i.length===0)return e;let a;return i.reduce((t,n,r)=>(Array.isArray(e)?(t[n]=e[r]==null?e[a]:e[r],a=r):typeof e==`object`?(t[n]=e[n]==null?e[a]:e[n],a=n):t[n]=e,t),{})}function Jn(e,t){if(Array.isArray(t))return!0;if(typeof t==`object`&&t){for(let n=0;n<e.keys.length;n+=1)if(e.keys[n]in t)return!0;let n=Object.keys(t);for(let t=0;t<n.length;t+=1)if(Sn(e.keys,n[t]))return!0}return!1}function Yn(e){if(typeof e!=`string`)throw Error(ee(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Xn(e,t,n,r){let i;return i=typeof e==`function`?e(n):Array.isArray(e)?e[n]||n:typeof n==`string`&&Zn(e,n,!0,r)||n,t&&(i=t(i,n,e)),i}function Zn(e,t,n=!0,r=void 0){if(!e||!t)return null;let i=t.split(`.`);if(e.vars&&n){let t=Qn(e.vars,i,r);if(t!=null)return t}return Qn(e,i,r)}function Qn(e,t,n=void 0){let r,i=e,a=0;for(;a<t.length;){if(i==null)return i;r=i,i=i[t[a]],a+=1}if(n&&i===void 0){let e=t[t.length-1],i=`${n}${e===`default`?``:Yn(e)}`;return r?.[i]}return i}function $n(e){let{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,a=e=>{if(e[t]==null)return null;let a=e[t],o=e.theme,s=Zn(o,r)||{};return Bn(e,a,e=>{let r=Xn(s,i,e,t);return n===!1?r:{[n]:r}})};return a.propTypes={},a.filterProps=[t],a}var er={internal_cache:{}},tr={m:`margin`,p:`padding`},nr={t:`Top`,r:`Right`,b:`Bottom`,l:`Left`,x:[`Left`,`Right`],y:[`Top`,`Bottom`]},rr={marginX:`mx`,marginY:`my`,paddingX:`px`,paddingY:`py`},ir={};for(let e in tr)ir[e]=[tr[e]];for(let e in tr)for(let t in nr){let n=tr[e],r=nr[t],i=Array.isArray(r)?r.map(e=>n+e):[n+r];ir[e+t]=i}for(let e in rr)ir[e]=ir[rr[e]];var ar=new Set([`m`,`mt`,`mr`,`mb`,`ml`,`mx`,`my`,`margin`,`marginTop`,`marginRight`,`marginBottom`,`marginLeft`,`marginX`,`marginY`,`marginInline`,`marginInlineStart`,`marginInlineEnd`,`marginBlock`,`marginBlockStart`,`marginBlockEnd`]),or=new Set([`p`,`pt`,`pr`,`pb`,`pl`,`px`,`py`,`padding`,`paddingTop`,`paddingRight`,`paddingBottom`,`paddingLeft`,`paddingX`,`paddingY`,`paddingInline`,`paddingInlineStart`,`paddingInlineEnd`,`paddingBlock`,`paddingBlockStart`,`paddingBlockEnd`]),sr=new Set([...ar,...or]);function cr(e,t,n,r){let i=Zn(e,t,!0)??n;return typeof i==`number`||typeof i==`string`?e=>typeof e==`string`?e:typeof i==`string`?i.startsWith(`var(`)&&e===0?0:i.startsWith(`var(`)&&e===1?i:`calc(${e} * ${i})`:i*e:Array.isArray(i)?e=>{if(typeof e==`string`)return e;let t=i[Math.abs(e)];return e>=0?t:typeof t==`number`?-t:typeof t==`string`&&t.startsWith(`var(`)?`calc(-1 * ${t})`:`-${t}`}:typeof i==`function`?i:()=>void 0}function lr(e){return cr(e,`spacing`,8,`spacing`)}function ur(e,t){return typeof t==`string`||t==null?t:e(t)}var dr=[``];function fr(e,t){let n=e.theme??er,r=n?.internal_cache?.unarySpacing??lr(n),i={};for(let n in e){if(!t.has(n))continue;let a=ir[n]??(dr[0]=n,dr),o=e[n];Vn(i,e.theme,o,(e,t)=>{let n=e?i[e]:i;for(let e=0;e<a.length;e+=1)n[a[e]]=ur(r,t)})}return i}function pr(e){return fr(e,ar)}pr.propTypes={},pr.filterProps=ar;function mr(e){return fr(e,or)}mr.propTypes={},mr.filterProps=or;function hr(e){return fr(e,sr)}hr.propTypes={},hr.filterProps=sr;function gr(e=8,t=lr({spacing:e})){if(e.mui)return e;let n=(...e)=>(e.length===0?[1]:e).map(e=>{let n=t(e);return typeof n==`number`?`${n}px`:n}).join(` `);return n.mui=!0,n}function _r(...e){let t=e.reduce((e,t)=>(t.filterProps.forEach(n=>{e[n]=t}),e),{}),n=e=>{let n={};for(let r in e)t[r]&&Dn(n,t[r](e));return n};return n.propTypes={},n.filterProps=e.reduce((e,t)=>e.concat(t.filterProps),[]),n}function vr(e){return typeof e==`number`?`${e}px solid`:e}function yr(e,t){return $n({prop:e,themeKey:`borders`,transform:t})}var br=yr(`border`,vr),xr=yr(`borderTop`,vr),Sr=yr(`borderRight`,vr),Cr=yr(`borderBottom`,vr),wr=yr(`borderLeft`,vr),Tr=yr(`borderColor`),Er=yr(`borderTopColor`),Dr=yr(`borderRightColor`),Or=yr(`borderBottomColor`),kr=yr(`borderLeftColor`),Ar=yr(`outline`,vr),jr=yr(`outlineColor`),Mr=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){let t=cr(e.theme,`shape.borderRadius`,4,`borderRadius`);return Bn(e,e.borderRadius,e=>({borderRadius:ur(t,e)}))}return null};Mr.propTypes={},Mr.filterProps=[`borderRadius`],_r(br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Mr,Ar,jr);var Nr=e=>{if(e.gap!==void 0&&e.gap!==null){let t=cr(e.theme,`spacing`,8,`gap`);return Bn(e,e.gap,e=>({gap:ur(t,e)}))}return null};Nr.propTypes={},Nr.filterProps=[`gap`];var Pr=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){let t=cr(e.theme,`spacing`,8,`columnGap`);return Bn(e,e.columnGap,e=>({columnGap:ur(t,e)}))}return null};Pr.propTypes={},Pr.filterProps=[`columnGap`];var Fr=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){let t=cr(e.theme,`spacing`,8,`rowGap`);return Bn(e,e.rowGap,e=>({rowGap:ur(t,e)}))}return null};Fr.propTypes={},Fr.filterProps=[`rowGap`],_r(Nr,Pr,Fr,$n({prop:`gridColumn`}),$n({prop:`gridRow`}),$n({prop:`gridAutoFlow`}),$n({prop:`gridAutoColumns`}),$n({prop:`gridAutoRows`}),$n({prop:`gridTemplateColumns`}),$n({prop:`gridTemplateRows`}),$n({prop:`gridTemplateAreas`}),$n({prop:`gridArea`}));function Ir(e,t){return t===`grey`?t:e}_r($n({prop:`color`,themeKey:`palette`,transform:Ir}),$n({prop:`bgcolor`,cssProperty:`backgroundColor`,themeKey:`palette`,transform:Ir}),$n({prop:`backgroundColor`,themeKey:`palette`,transform:Ir}));function Lr(e){return e<=1&&e!==0?`${e*100}%`:e}var Rr=$n({prop:`width`,transform:Lr}),zr=e=>e.maxWidth!==void 0&&e.maxWidth!==null?Bn(e,e.maxWidth,t=>{let n=e.theme?.breakpoints?.values?.[t]||Ln[t];return n?e.theme?.breakpoints?.unit===`px`?{maxWidth:n}:{maxWidth:`${n}${e.theme.breakpoints.unit}`}:{maxWidth:Lr(t)}}):null;zr.filterProps=[`maxWidth`];var Br=$n({prop:`minWidth`,transform:Lr}),Vr=$n({prop:`height`,transform:Lr}),Hr=$n({prop:`maxHeight`,transform:Lr}),Ur=$n({prop:`minHeight`,transform:Lr});$n({prop:`size`,cssProperty:`width`,transform:Lr}),$n({prop:`size`,cssProperty:`height`,transform:Lr}),_r(Rr,zr,Br,Vr,Hr,Ur,$n({prop:`boxSizing`}));var Wr={border:{themeKey:`borders`,transform:vr},borderTop:{themeKey:`borders`,transform:vr},borderRight:{themeKey:`borders`,transform:vr},borderBottom:{themeKey:`borders`,transform:vr},borderLeft:{themeKey:`borders`,transform:vr},borderColor:{themeKey:`palette`},borderTopColor:{themeKey:`palette`},borderRightColor:{themeKey:`palette`},borderBottomColor:{themeKey:`palette`},borderLeftColor:{themeKey:`palette`},outline:{themeKey:`borders`,transform:vr},outlineColor:{themeKey:`palette`},borderRadius:{themeKey:`shape.borderRadius`,style:Mr},color:{themeKey:`palette`,transform:Ir},bgcolor:{themeKey:`palette`,cssProperty:`backgroundColor`,transform:Ir},backgroundColor:{themeKey:`palette`,transform:Ir},p:{style:mr},pt:{style:mr},pr:{style:mr},pb:{style:mr},pl:{style:mr},px:{style:mr},py:{style:mr},padding:{style:mr},paddingTop:{style:mr},paddingRight:{style:mr},paddingBottom:{style:mr},paddingLeft:{style:mr},paddingX:{style:mr},paddingY:{style:mr},paddingInline:{style:mr},paddingInlineStart:{style:mr},paddingInlineEnd:{style:mr},paddingBlock:{style:mr},paddingBlockStart:{style:mr},paddingBlockEnd:{style:mr},m:{style:pr},mt:{style:pr},mr:{style:pr},mb:{style:pr},ml:{style:pr},mx:{style:pr},my:{style:pr},margin:{style:pr},marginTop:{style:pr},marginRight:{style:pr},marginBottom:{style:pr},marginLeft:{style:pr},marginX:{style:pr},marginY:{style:pr},marginInline:{style:pr},marginInlineStart:{style:pr},marginInlineEnd:{style:pr},marginBlock:{style:pr},marginBlockStart:{style:pr},marginBlockEnd:{style:pr},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Nr},rowGap:{style:Fr},columnGap:{style:Pr},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:`zIndex`},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:`shadows`},width:{transform:Lr},maxWidth:{style:zr},minWidth:{transform:Lr},height:{transform:Lr},maxHeight:{transform:Lr},minHeight:{transform:Lr},boxSizing:{},font:{themeKey:`font`},fontFamily:{themeKey:`typography`},fontSize:{themeKey:`typography`},fontStyle:{themeKey:`typography`},fontWeight:{themeKey:`typography`},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:`typography`}},Gr={};function Kr(){function e(t){if(!t.sx)return null;let{sx:n,theme:r=Gr,nested:i}=t,a=r.unstable_sxConfig??Wr,o={sx:null,theme:r,nested:!0};function s(n){let s=n;if(typeof n==`function`)s=n(r);else if(typeof n!=`object`)return n;if(!s)return null;let c=r.breakpoints??Rn,l=Un(c);for(let n in s){let i=Yr(s[n],r);if(i!=null){if(typeof i!=`object`){Jr(l,n,i,r,a);continue}if(a[n]){Jr(l,n,i,r,a);continue}Jn(c,i)?Vn(l,t.theme,i,(e,t)=>{l[e][n]=t}):(o.sx=i,l[n]=e(o))}}return!i&&r.modularCssLayers?{"@layer sx":bn(r,Wn(c,l))}:bn(r,Wn(c,l))}return Array.isArray(n)?n.map(s):s(n)}return e.filterProps=[`sx`],e}var qr=Kr();function Jr(e,t,n,r,i){let a=i[t];if(!a){e[t]=n;return}if(n==null)return;let{themeKey:o}=a;if(o===`typography`&&n===`inherit`){e[t]=n;return}let{style:s}=a;if(s){Dn(e,s({[t]:n,theme:r}));return}let{cssProperty:c=t,transform:l}=a,u=Zn(r,o);Vn(e,r,n,(n,r)=>{let i=Xn(u,l,r,t);c===!1?n?e[n]=i:Dn(e,i):n?e[n][c]=i:e[c]=i})}function Yr(e,t){return typeof e==`function`?e(t):e}function Xr(e,t){let n=this;if(n.vars){if(!n.colorSchemes?.[e]||typeof n.getColorSchemeSelector!=`function`)return{};let r=n.getColorSchemeSelector(e);return r===`&`?t:((r.includes(`data-`)||r.includes(`.`))&&(r=`*:where(${r.replace(/\s*&$/,``)}) &`),{[r]:t})}return n.palette.mode===e?t:{}}function Zr(e={},...t){let{breakpoints:n={},palette:r={},spacing:i,shape:a={},...o}=e,s=vn(n),c=gr(i),l=gn({breakpoints:s,direction:`ltr`,components:{},palette:{mode:`light`,...r},spacing:c,shape:{...Tn,...a}},o);return l=wn(l),l.applyStyles=Xr,l=t.reduce((e,t)=>gn(e,t),l),l.unstable_sxConfig={...Wr,...o?.unstable_sxConfig},l.unstable_sx=function(e){return qr({sx:e,theme:this})},l.internal_cache={},l}function Qr(e){return Object.keys(e).length===0}function $r(e=null){let t=P.useContext(Lt);return!t||Qr(t)?e:t}var ei=Zr();function ti(e=ei){return $r(e)}function ni(e){let t=dn(e);return e!==t&&t.styles?(t.styles.match(/^@layer\s+[^{]*$/)||(t.styles=`@layer global{${t.styles}}`),t):e}function ri({styles:e,themeId:t,defaultTheme:n={}}){let r=ti(n),i=t&&r[t]||r,a=typeof e==`function`?e(i):e;return i.modularCssLayers&&(a=Array.isArray(a)?a.map(e=>ni(typeof e==`function`?e(i):e)):ni(a)),(0,F.jsx)(sn,{styles:a})}var ii=e=>e,ai=(()=>{let e=ii;return{configure(t){e=t},generate(t){return e(t)},reset(){e=ii}}})();function oi(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=oi(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function I(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=oi(e))&&(r&&(r+=` `),r+=t);return r}function si(e={}){let{themeId:t,defaultTheme:n,defaultClassName:r=`MuiBox-root`,generateClassName:i}=e,a=cn(`div`,{shouldForwardProp:e=>e!==`theme`&&e!==`sx`&&e!==`as`})(qr);return P.forwardRef(function(e,o){let s=ti(n),{className:c,component:l=`div`,...u}=e;return(0,F.jsx)(a,{as:l,ref:o,className:I(c,i?i(r):r),theme:t&&s[t]||s,...u})})}var ci={active:`active`,checked:`checked`,completed:`completed`,disabled:`disabled`,error:`error`,expanded:`expanded`,focused:`focused`,focusVisible:`focusVisible`,open:`open`,readOnly:`readOnly`,required:`required`,selected:`selected`};function li(e,t,n=`Mui`){let r=ci[t];return r?`${n}-${r}`:`${ai.generate(e)}-${t}`}function L(e,t,n=`Mui`){let r={};return t.forEach(t=>{r[t]=li(e,t,n)}),r}function ui(e){let{variants:t,...n}=e,r={variants:t,style:dn(n),isProcessed:!0};return r.style===n||t&&t.forEach(e=>{typeof e.style!=`function`&&(e.style=dn(e.style))}),r}var di=Zr();function fi(e){return e!==`ownerState`&&e!==`theme`&&e!==`sx`&&e!==`as`}function pi(e,t){return t&&e&&typeof e==`object`&&e.styles&&!e.styles.startsWith(`@layer`)&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}function mi(e){return e?(t,n)=>n[e]:null}function hi(e,t,n){e.theme=En(e.theme)?n:e.theme[t]||e.theme}function gi(e,t,n){let r=typeof t==`function`?t(e):t;if(Array.isArray(r))return r.flatMap(t=>gi(e,t,n));if(Array.isArray(r?.variants)){let t;if(r.isProcessed)t=n?pi(r.style,n):r.style;else{let{variants:e,...i}=r;t=n?pi(dn(i),n):i}return _i(e,r.variants,[t],n)}return r?.isProcessed?n?pi(dn(r.style),n):r.style:n?pi(dn(r),n):r}function _i(e,t,n=[],r=void 0){let i;variantLoop:for(let a=0;a<t.length;a+=1){let o=t[a];if(typeof o.props==`function`){if(i??={...e,...e.ownerState,ownerState:e.ownerState},!o.props(i))continue}else for(let t in o.props)if(e[t]!==o.props[t]&&e.ownerState?.[t]!==o.props[t])continue variantLoop;typeof o.style==`function`?(i??={...e,...e.ownerState,ownerState:e.ownerState},n.push(r?pi(dn(o.style(i)),r):o.style(i))):n.push(r?pi(dn(o.style),r):o.style)}return n}function vi(e={}){let{themeId:t,defaultTheme:n=di,rootShouldForwardProp:r=fi,slotShouldForwardProp:i=fi}=e;function a(e){hi(e,t,n)}return(e,t={})=>{ln(e,e=>e.filter(e=>e!==qr));let{name:n,slot:o,skipVariantsResolver:s,skipSx:c,overridesResolver:l=mi(bi(o)),...u}=t,d=n&&n.startsWith(`Mui`)||o?`components`:`custom`,f=s===void 0?o&&o!==`Root`&&o!==`root`||!1:s,p=c||!1,m=fi;o===`Root`||o===`root`?m=r:o?m=i:yi(e)&&(m=void 0);let h=cn(e,{shouldForwardProp:m,label:void 0,...u}),g=e=>{if(e.__emotion_real===e)return e;if(typeof e==`function`)return function(t){return gi(t,e,t.theme.modularCssLayers?d:void 0)};if(mn(e)){let t=ui(e);return function(e){return t.variants?gi(e,t,e.theme.modularCssLayers?d:void 0):e.theme.modularCssLayers?pi(t.style,d):t.style}}return e},_=(...t)=>{let r=[],i=t.map(g),o=[];if(r.push(a),n&&l&&o.push(function(e){let t=e.theme.components?.[n]?.styleOverrides;if(!t)return null;let r={};for(let n in t)r[n]=gi(e,t[n],e.theme.modularCssLayers?`theme`:void 0);return l(e,r)}),n&&!f&&o.push(function(e){let t=e.theme?.components?.[n]?.variants;return t?_i(e,t,[],e.theme.modularCssLayers?`theme`:void 0):null}),p||o.push(qr),Array.isArray(i[0])){let e=i.shift(),t=Array(r.length).fill(``),n=Array(o.length).fill(``),a;a=[...t,...e,...n],a.raw=[...t,...e.raw,...n],r.unshift(a)}let s=h(...r,...i,...o);return e.muiName&&(s.muiName=e.muiName),s};return h.withConfig&&(_.withConfig=h.withConfig),_}}function yi(e){return typeof e==`string`&&e.charCodeAt(0)>96}function bi(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}var xi=vi();function Si(e,t,n=!1){let r={...t};for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i)){let a=i;if(a===`components`||a===`slots`)r[a]={...e[a],...r[a]};else if(a===`componentsProps`||a===`slotProps`){let i=e[a],o=t[a];if(!o)r[a]=i||{};else if(!i)r[a]=o;else{r[a]={...o};for(let e in i)if(Object.prototype.hasOwnProperty.call(i,e)){let t=e;r[a][t]=Si(i[t],o[t],n)}}}else a===`className`&&n&&t.className?r.className=I(e?.className,t?.className):a===`style`&&n&&t.style?r.style={...e?.style,...t?.style}:r[a]===void 0&&(r[a]=e[a])}return r}function Ci(e){let{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Si(t.components[n].defaultProps,r)}function wi({props:e,name:t,defaultTheme:n,themeId:r}){let i=ti(n);return r&&(i=i[r]||i),Ci({theme:i,name:t,props:e})}var Ti=typeof window<`u`?P.useLayoutEffect:P.useEffect;function Ei(e,t=-(2**53-1),n=2**53-1){return Math.max(t,Math.min(e,n))}function Di(e,t=0,n=1){return Ei(e,t,n)}function Oi(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,`g`),n=e.match(t);return n&&n[0].length===1&&(n=n.map(e=>e+e)),n?`rgb${n.length===4?`a`:``}(${n.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(`, `)})`:``}function ki(e){if(e.type)return e;if(e.charAt(0)===`#`)return ki(Oi(e));let t=e.indexOf(`(`),n=e.substring(0,t);if(![`rgb`,`rgba`,`hsl`,`hsla`,`color`].includes(n))throw Error(ee(9,e));let r=e.substring(t+1,e.length-1),i;if(n===`color`){if(r=r.split(` `),i=r.shift(),r.length===4&&r[3].charAt(0)===`/`&&(r[3]=r[3].slice(1)),![`srgb`,`display-p3`,`a98-rgb`,`prophoto-rgb`,`rec-2020`].includes(i))throw Error(ee(10,i))}else r=r.split(`,`);return r=r.map(e=>parseFloat(e)),{type:n,values:r,colorSpace:i}}var Ai=e=>{let t=ki(e);return t.values.slice(0,3).map((e,n)=>t.type.includes(`hsl`)&&n!==0?`${e}%`:e).join(` `)},ji=(e,t)=>{try{return Ai(e)}catch{return e}};function Mi(e){let{type:t,colorSpace:n}=e,{values:r}=e;return t.includes(`rgb`)?r=r.map((e,t)=>t<3?parseInt(e,10):e):t.includes(`hsl`)&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=t.includes(`color`)?`${n} ${r.join(` `)}`:`${r.join(`, `)}`,`${t}(${r})`}function Ni(e){e=ki(e);let{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,a=r*Math.min(i,1-i),o=(e,t=(e+n/30)%12)=>i-a*Math.max(Math.min(t-3,9-t,1),-1),s=`rgb`,c=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return e.type===`hsla`&&(s+=`a`,c.push(t[3])),Mi({type:s,values:c})}function Pi(e){e=ki(e);let t=e.type===`hsl`||e.type===`hsla`?ki(Ni(e)).values:e.values;return t=t.map(t=>(e.type!==`color`&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Fi(e,t){let n=Pi(e),r=Pi(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function R(e,t){return e=ki(e),t=Di(t),(e.type===`rgb`||e.type===`hsl`)&&(e.type+=`a`),e.type===`color`?e.values[3]=`/${t}`:e.values[3]=t,Mi(e)}function Ii(e,t,n){try{return R(e,t)}catch{return e}}function Li(e,t){if(e=ki(e),t=Di(t),e.type.includes(`hsl`))e.values[2]*=1-t;else if(e.type.includes(`rgb`)||e.type.includes(`color`))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Mi(e)}function z(e,t,n){try{return Li(e,t)}catch{return e}}function Ri(e,t){if(e=ki(e),t=Di(t),e.type.includes(`hsl`))e.values[2]+=(100-e.values[2])*t;else if(e.type.includes(`rgb`))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.includes(`color`))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Mi(e)}function B(e,t,n){try{return Ri(e,t)}catch{return e}}function zi(e,t=.15){return Pi(e)>.5?Li(e,t):Ri(e,t)}function Bi(e,t,n){try{return zi(e,t)}catch{return e}}var Vi=P.createContext(null);function Hi(){return P.useContext(Vi)}var Ui=typeof Symbol==`function`&&Symbol.for?Symbol.for(`mui.nested`):`__THEME_NESTED__`;function Wi(e,t){return typeof t==`function`?t(e):{...e,...t}}function Gi(e){let{children:t,theme:n}=e,r=Hi(),i=P.useMemo(()=>{let e=r===null?{...n}:Wi(r,n);return e!=null&&(e[Ui]=r!==null),e},[n,r]);return(0,F.jsx)(Vi.Provider,{value:i,children:t})}var Ki=P.createContext();function qi({value:e,...t}){return(0,F.jsx)(Ki.Provider,{value:e??!0,...t})}var Ji=()=>P.useContext(Ki)??!1,Yi=P.createContext(void 0);function Xi({value:e,children:t}){return(0,F.jsx)(Yi.Provider,{value:e,children:t})}function Zi(e){let{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;let i=t.components[n];return i.defaultProps?Si(i.defaultProps,r,t.components.mergeClassNameAndStyle):!i.styleOverrides&&!i.variants?Si(i,r,t.components.mergeClassNameAndStyle):r}function Qi({props:e,name:t}){return Zi({props:e,name:t,theme:{components:P.useContext(Yi)}})}var $i=0;function ea(e){let[t,n]=P.useState(e),r=e||t;return P.useEffect(()=>{t??($i+=1,n(`mui-${$i}`))},[t]),r}var ta={...P}.useId;function na(e){if(ta!==void 0){let t=ta();return e??t}return ea(e)}function ra(e){let t=$r(),n=na()||``,{modularCssLayers:r}=e,i=`mui.global, mui.components, mui.theme, mui.custom, mui.sx`;return i=!r||t!==null?``:typeof r==`string`?r.replace(/mui(?!\.)/g,i):`@layer ${i};`,Ti(()=>{let e=document.querySelector(`head`);if(!e)return;let t=e.firstChild;if(i){if(t&&t.hasAttribute?.(`data-mui-layer-order`)&&t.getAttribute(`data-mui-layer-order`)===n)return;let r=document.createElement(`style`);r.setAttribute(`data-mui-layer-order`,n),r.textContent=i,e.prepend(r)}else e.querySelector(`style[data-mui-layer-order="${n}"]`)?.remove()},[i,n]),i?(0,F.jsx)(ri,{styles:i}):null}var ia={};function aa(e,t,n,r=!1){return P.useMemo(()=>{let i=e&&t[e]||t;if(typeof n==`function`){let a=n(i),o=e?{...t,[e]:a}:a;return r?()=>o:o}return e?{...t,[e]:n}:{...t,...n}},[e,t,n,r])}function oa(e){let{children:t,theme:n,themeId:r}=e,i=$r(ia),a=Hi()||ia,o=aa(r,i,n),s=aa(r,a,n,!0),c=(r?o[r]:o).direction===`rtl`,l=ra(o);return(0,F.jsx)(Gi,{theme:s,children:(0,F.jsx)(Lt.Provider,{value:o,children:(0,F.jsx)(qi,{value:c,children:(0,F.jsxs)(Xi,{value:r?o[r].components:o.components,children:[l,t]})})})})}var sa={theme:void 0};function ca(e){let t,n;return function(r){let i=t;return(i===void 0||r.theme!==n)&&(sa.theme=r.theme,i=ui(e(sa)),t=i,n=r.theme),i}}var la=`mode`,ua=`color-scheme`,da=`data-color-scheme`;function fa(e){let{defaultMode:t=`system`,defaultLightColorScheme:n=`light`,defaultDarkColorScheme:r=`dark`,modeStorageKey:i=la,colorSchemeStorageKey:a=ua,attribute:o=da,colorSchemeNode:s=`document.documentElement`,nonce:c}=e||{},l=``,u=o;if(o===`class`&&(u=`.%s`),o===`data`&&(u=`[data-%s]`),u.startsWith(`.`)){let e=u.substring(1);l+=`${s}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${s}.classList.add('${e}'.replace('%s', colorScheme));`}let d=u.match(/\[([^[\]]+)\]/);if(d){let[e,t]=d[1].split(`=`);t||(l+=`${s}.removeAttribute('${e}'.replace('%s', light));
      ${s}.removeAttribute('${e}'.replace('%s', dark));`),l+=`
      ${s}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:`""`});`}else u!==`.%s`&&(l+=`${s}.setAttribute('${u}', colorScheme);`);return(0,F.jsx)(`script`,{suppressHydrationWarning:!0,nonce:typeof window>`u`?c:``,dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${r}';
  const light = localStorage.getItem('${a}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${l}
  }
} catch(e){}})();`}},`mui-color-scheme-init`)}function pa(){}var ma=({key:e,storageWindow:t})=>(!t&&typeof window<`u`&&(t=window),{get(n){if(typeof window>`u`)return;if(!t)return n;let r;try{r=t.localStorage.getItem(e)}catch{}return r||n},set:n=>{if(t)try{t.localStorage.setItem(e,n)}catch{}},subscribe:n=>{if(!t)return pa;let r=t=>{let r=t.newValue;t.key===e&&n(r)};return t.addEventListener(`storage`,r),()=>{t.removeEventListener(`storage`,r)}}});function ha(){}function ga(e){if(typeof window<`u`&&typeof window.matchMedia==`function`&&e===`system`)return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}function _a(e,t){if(e.mode===`light`||e.mode===`system`&&e.systemMode===`light`)return t(`light`);if(e.mode===`dark`||e.mode===`system`&&e.systemMode===`dark`)return t(`dark`)}function va(e){return _a(e,t=>{if(t===`light`)return e.lightColorScheme;if(t===`dark`)return e.darkColorScheme})}function ya(e){let{defaultMode:t=`light`,defaultLightColorScheme:n,defaultDarkColorScheme:r,supportedColorSchemes:i=[],modeStorageKey:a=la,colorSchemeStorageKey:o=ua,storageWindow:s=typeof window>`u`?void 0:window,storageManager:c=ma,noSsr:l=!1}=e,u=i.join(`,`),d=i.length>1,f=P.useMemo(()=>c?.({key:a,storageWindow:s}),[c,a,s]),p=P.useMemo(()=>c?.({key:`${o}-light`,storageWindow:s}),[c,o,s]),m=P.useMemo(()=>c?.({key:`${o}-dark`,storageWindow:s}),[c,o,s]),[h,g]=P.useState(()=>{let e=f?.get(t)||t,i=p?.get(n)||n,a=m?.get(r)||r;return{mode:e,systemMode:ga(e),lightColorScheme:i,darkColorScheme:a}}),[_,v]=P.useState(l||!d);P.useEffect(()=>{v(!0)},[]);let y=va(h),b=P.useCallback(e=>{g(n=>{if(e===n.mode)return n;let r=e??t;return f?.set(r),{...n,mode:r,systemMode:ga(r)}})},[f,t]),x=P.useCallback(e=>{e?typeof e==`string`?e&&!u.includes(e)?console.error(`\`${e}\` does not exist in \`theme.colorSchemes\`.`):g(t=>{let n={...t};return _a(t,t=>{t===`light`&&(p?.set(e),n.lightColorScheme=e),t===`dark`&&(m?.set(e),n.darkColorScheme=e)}),n}):g(t=>{let i={...t},a=e.light===null?n:e.light,o=e.dark===null?r:e.dark;return a&&(u.includes(a)?(i.lightColorScheme=a,p?.set(a)):console.error(`\`${a}\` does not exist in \`theme.colorSchemes\`.`)),o&&(u.includes(o)?(i.darkColorScheme=o,m?.set(o)):console.error(`\`${o}\` does not exist in \`theme.colorSchemes\`.`)),i}):g(e=>(p?.set(n),m?.set(r),{...e,lightColorScheme:n,darkColorScheme:r}))},[u,p,m,n,r]),S=P.useCallback(e=>{h.mode===`system`&&g(t=>{let n=e?.matches?`dark`:`light`;return t.systemMode===n?t:{...t,systemMode:n}})},[h.mode]),C=P.useRef(S);return C.current=S,P.useEffect(()=>{if(typeof window.matchMedia!=`function`||!d)return;let e=(...e)=>C.current(...e),t=window.matchMedia(`(prefers-color-scheme: dark)`);return t.addListener(e),e(t),()=>{t.removeListener(e)}},[d]),P.useEffect(()=>{if(d){let e=f?.subscribe(e=>{(!e||[`light`,`dark`,`system`].includes(e))&&b(e||t)})||ha,n=p?.subscribe(e=>{(!e||u.match(e))&&x({light:e})})||ha,r=m?.subscribe(e=>{(!e||u.match(e))&&x({dark:e})})||ha;return()=>{e(),n(),r()}}},[x,b,u,t,s,d,f,p,m]),{...h,mode:_?h.mode:void 0,systemMode:_?h.systemMode:void 0,colorScheme:_?y:void 0,setMode:b,setColorScheme:x}}var ba=`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;function xa(e){let{themeId:t,theme:n={},modeStorageKey:r=la,colorSchemeStorageKey:i=ua,disableTransitionOnChange:a=!1,defaultColorScheme:o,resolveTheme:s}=e,c={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},l=P.createContext(void 0),u=()=>P.useContext(l)||c,d={},f={};function p(e){let{children:c,theme:u,modeStorageKey:p=r,colorSchemeStorageKey:m=i,disableTransitionOnChange:h=a,storageManager:g,storageWindow:_=typeof window>`u`?void 0:window,documentNode:v=typeof document>`u`?void 0:document,colorSchemeNode:y=typeof document>`u`?void 0:document.documentElement,disableNestedContext:b=!1,disableStyleSheetGeneration:x=!1,defaultMode:S=`system`,forceThemeRerender:C=!1,noSsr:w}=e,ee=P.useRef(!1),T=Hi(),te=P.useContext(l),ne=!!te&&!b,re=P.useMemo(()=>u||(typeof n==`function`?n():n),[u]),ie=re[t],ae=ie||re,{colorSchemes:E=d,components:oe=f,cssVarPrefix:D}=ae,se=Object.keys(E).filter(e=>!!E[e]).join(`,`),O=P.useMemo(()=>se.split(`,`),[se]),k=typeof o==`string`?o:o.light,ce=typeof o==`string`?o:o.dark,{mode:le,setMode:ue,systemMode:de,lightColorScheme:A,darkColorScheme:j,colorScheme:fe,setColorScheme:pe}=ya({supportedColorSchemes:O,defaultLightColorScheme:k,defaultDarkColorScheme:ce,modeStorageKey:p,colorSchemeStorageKey:m,defaultMode:E[k]&&E[ce]?S:E[ae.defaultColorScheme]?.palette?.mode||ae.palette?.mode,storageManager:g,storageWindow:_,noSsr:w}),me=le,M=fe;ne&&(me=te.mode,M=te.colorScheme);let he=M||ae.defaultColorScheme;ae.vars&&!C&&(he=ae.defaultColorScheme);let N=P.useMemo(()=>{let e=ae.generateThemeVars?.()||ae.vars,t={...ae,components:oe,colorSchemes:E,cssVarPrefix:D,vars:e};if(typeof t.generateSpacing==`function`&&(t.spacing=t.generateSpacing()),he){let e=E[he];e&&typeof e==`object`&&Object.keys(e).forEach(n=>{e[n]&&typeof e[n]==`object`?t[n]={...t[n],...e[n]}:t[n]=e[n]})}return s?s(t):t},[ae,he,oe,E,D]),ge=ae.colorSchemeSelector;Ti(()=>{if(M&&y&&ge&&ge!==`media`){let e=ge,t=ge;if(e===`class`&&(t=`.%s`),e===`data`&&(t=`[data-%s]`),e?.startsWith(`data-`)&&!e.includes(`%s`)&&(t=`[${e}="%s"]`),t.startsWith(`.`))y.classList.remove(...O.map(e=>t.substring(1).replace(`%s`,e))),y.classList.add(t.substring(1).replace(`%s`,M));else{let e=t.replace(`%s`,M).match(/\[([^\]]+)\]/);if(e){let[t,n]=e[1].split(`=`);n||O.forEach(e=>{y.removeAttribute(t.replace(M,e))}),y.setAttribute(t,n?n.replace(/"|'/g,``):``)}else y.setAttribute(t,M)}}},[M,ge,y,O]),P.useEffect(()=>{let e;if(h&&ee.current&&v){let t=v.createElement(`style`);t.appendChild(v.createTextNode(ba)),v.head.appendChild(t),window.getComputedStyle(v.body),e=setTimeout(()=>{v.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[M,h,v]),P.useEffect(()=>(ee.current=!0,()=>{ee.current=!1}),[]);let _e=P.useMemo(()=>({allColorSchemes:O,colorScheme:M,darkColorScheme:j,lightColorScheme:A,mode:me,setColorScheme:pe,setMode:ue,systemMode:de}),[O,M,j,A,me,pe,ue,de,N.colorSchemeSelector]),ve=!0;(x||ae.cssVariables===!1||ne&&T?.cssVarPrefix===D)&&(ve=!1);let ye=(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(oa,{themeId:ie?t:void 0,theme:N,children:c}),ve&&(0,F.jsx)(sn,{styles:N.generateStyleSheets?.()||[]})]});return ne?ye:(0,F.jsx)(l.Provider,{value:_e,children:ye})}let m=typeof o==`string`?o:o.light,h=typeof o==`string`?o:o.dark;return{CssVarsProvider:p,useColorScheme:u,getInitColorSchemeScript:e=>fa({colorSchemeStorageKey:i,defaultLightColorScheme:m,defaultDarkColorScheme:h,modeStorageKey:r,...e})}}function Sa(e=``){function t(...n){if(!n.length)return``;let r=n[0];return typeof r==`string`&&!r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${e?`${e}-`:``}${r}${t(...n.slice(1))})`:`, ${r}`}return(n,...r)=>`var(--${e?`${e}-`:``}${n}${t(...r)})`}var Ca=(e,t,n,r=[])=>{let i=e;t.forEach((e,a)=>{a===t.length-1?Array.isArray(i)?i[Number(e)]=n:i&&typeof i==`object`&&(i[e]=n):i&&typeof i==`object`&&(i[e]||(i[e]=r.includes(e)?[]:{}),i=i[e])})},wa=(e,t,n)=>{function r(e,i=[],a=[]){Object.entries(e).forEach(([e,o])=>{(!n||n&&!n([...i,e]))&&o!=null&&(typeof o==`object`&&Object.keys(o).length>0?r(o,[...i,e],Array.isArray(o)?[...a,e]:a):t([...i,e],o,a))})}r(e)},Ta=(e,t)=>typeof t==`number`?[`lineHeight`,`fontWeight`,`opacity`,`zIndex`].some(t=>e.includes(t))||e[e.length-1].toLowerCase().includes(`opacity`)?t:`${t}px`:t;function Ea(e,t){let{prefix:n,shouldSkipGeneratingVar:r}=t||{},i={},a={},o={};return wa(e,(e,t,s)=>{if((typeof t==`string`||typeof t==`number`)&&(!r||!r(e,t))){let r=`--${n?`${n}-`:``}${e.join(`-`)}`,c=Ta(e,t);Object.assign(i,{[r]:c}),Ca(a,e,`var(${r})`,s),Ca(o,e,`var(${r}, ${c})`,s)}},e=>e[0]===`vars`),{css:i,vars:a,varsWithDefaults:o}}function Da(e,t={}){let{getSelector:n=_,disableCssColorScheme:r,colorSchemeSelector:i,enableContrastVars:a}=t,{colorSchemes:o={},components:s,defaultColorScheme:c=`light`,...l}=e,{vars:u,css:d,varsWithDefaults:f}=Ea(l,t),p=f,m={},{[c]:h,...g}=o;if(Object.entries(g||{}).forEach(([e,n])=>{let{vars:r,css:i,varsWithDefaults:a}=Ea(n,t);p=gn(p,a),m[e]={css:i,vars:r}}),h){let{css:e,vars:n,varsWithDefaults:r}=Ea(h,t);p=gn(p,r),m[c]={css:e,vars:n}}function _(t,n){let r=i;if(i===`class`&&(r=`.%s`),i===`data`&&(r=`[data-%s]`),i?.startsWith(`data-`)&&!i.includes(`%s`)&&(r=`[${i}="%s"]`),t){if(r===`media`)return e.defaultColorScheme===t?`:root`:{[`@media (prefers-color-scheme: ${o[t]?.palette?.mode||t})`]:{":root":n}};if(r)return e.defaultColorScheme===t?`:root, ${r.replace(`%s`,String(t))}`:r.replace(`%s`,String(t))}return`:root`}return{vars:p,generateThemeVars:()=>{let e={...u};return Object.entries(m).forEach(([,{vars:t}])=>{e=gn(e,t)}),e},generateStyleSheets:()=>{let t=[],i=e.defaultColorScheme||`light`;function s(e,n){Object.keys(n).length&&t.push(typeof e==`string`?{[e]:{...n}}:e)}s(n(void 0,{...d}),d);let{[i]:c,...l}=m;if(c){let{css:e}=c,t=o[i]?.palette?.mode,a=!r&&t?{colorScheme:t,...e}:{...e};s(n(i,{...a}),a)}return Object.entries(l).forEach(([e,{css:t}])=>{let i=o[e]?.palette?.mode,a=!r&&i?{colorScheme:i,...t}:{...t};s(n(e,{...a}),a)}),a&&t.push({":root":{"--__l-threshold":`0.7`,"--__l":`clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)`,"--__a":`clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)`}}),t}}}function Oa(e){return function(t){return e===`media`?`@media (prefers-color-scheme: ${t})`:e?e.startsWith(`data-`)&&!e.includes(`%s`)?`[${e}="${t}"] &`:e===`class`?`.${t} &`:e===`data`?`[data-${t}] &`:`${e.replace(`%s`,t)} &`:`&`}}function ka(e,t,n=void 0){let r={};for(let i in e){let a=e[i],o=``,s=!0;for(let e=0;e<a.length;e+=1){let r=a[e];r&&(o+=(s===!0?``:` `)+t(r),s=!1,n&&n[r]&&(o+=` `+n[r]))}r[i]=o}return r}var Aa=Zr(),ja=xi(`div`,{name:`MuiStack`,slot:`Root`});function Ma(e){return wi({props:e,name:`MuiStack`,defaultTheme:Aa})}function Na(e,t){let n=P.Children.toArray(e).filter(Boolean);return n.reduce((e,r,i)=>(e.push(r),i<n.length-1&&e.push(P.cloneElement(t,{key:`separator-${i}`})),e),[])}var Pa=e=>({row:`Left`,"row-reverse":`Right`,column:`Top`,"column-reverse":`Bottom`})[e],Fa=({ownerState:e,theme:t})=>{let n={display:`flex`,flexDirection:`column`,...Bn({theme:t},qn({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let r=lr(t),i=Object.keys(t.breakpoints.values).reduce((t,n)=>((typeof e.spacing==`object`&&e.spacing[n]!=null||typeof e.direction==`object`&&e.direction[n]!=null)&&(t[n]=!0),t),{}),a=qn({values:e.direction,base:i}),o=qn({values:e.spacing,base:i});typeof a==`object`&&Object.keys(a).forEach((e,t,n)=>{a[e]||(a[e]=t>0?a[n[t-1]]:`column`)}),n=gn(n,Bn({theme:t},o,(t,n)=>e.useFlexGap?{gap:ur(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Pa(n?a[n]:e.direction)}`]:ur(r,t)}}))}return n=Gn(t.breakpoints,n),n};function Ia(e={}){let{createStyledComponent:t=ja,useThemeProps:n=Ma,componentName:r=`MuiStack`}=e,i=()=>ka({root:[`root`]},e=>li(r,e),{}),a=t(Fa);return P.forwardRef(function(e,t){let{component:r=`div`,direction:o=`column`,spacing:s=0,divider:c,children:l,className:u,useFlexGap:d=!1,...f}=n(e);return(0,F.jsx)(a,{as:r,ownerState:{direction:o,spacing:s,useFlexGap:d},ref:t,className:I(i().root,u),...f,children:c?Na(l,c):l})})}function La(){return{text:{primary:`rgba(0, 0, 0, 0.87)`,secondary:`rgba(0, 0, 0, 0.6)`,disabled:`rgba(0, 0, 0, 0.38)`},divider:`rgba(0, 0, 0, 0.12)`,background:{paper:_.white,default:_.white},action:{active:`rgba(0, 0, 0, 0.54)`,hover:`rgba(0, 0, 0, 0.04)`,hoverOpacity:.04,selected:`rgba(0, 0, 0, 0.08)`,selectedOpacity:.08,disabled:`rgba(0, 0, 0, 0.26)`,disabledBackground:`rgba(0, 0, 0, 0.12)`,disabledOpacity:.38,focus:`rgba(0, 0, 0, 0.12)`,focusOpacity:.12,activatedOpacity:.12}}}var Ra=La();function za(){return{text:{primary:_.white,secondary:`rgba(255, 255, 255, 0.7)`,disabled:`rgba(255, 255, 255, 0.5)`,icon:`rgba(255, 255, 255, 0.5)`},divider:`rgba(255, 255, 255, 0.12)`,background:{paper:`#121212`,default:`#121212`},action:{active:_.white,hover:`rgba(255, 255, 255, 0.08)`,hoverOpacity:.08,selected:`rgba(255, 255, 255, 0.16)`,selectedOpacity:.16,disabled:`rgba(255, 255, 255, 0.3)`,disabledBackground:`rgba(255, 255, 255, 0.12)`,disabledOpacity:.38,focus:`rgba(255, 255, 255, 0.12)`,focusOpacity:.12,activatedOpacity:.24}}}var Ba=za();function Va(e,t,n,r){let i=r.light||r,a=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t===`light`?e.light=Ri(e.main,i):t===`dark`&&(e.dark=Li(e.main,a)))}function Ha(e,t,n,r,i){let a=i.light||i,o=i.dark||i*1.5;t[n]||(t.hasOwnProperty(r)?t[n]=t[r]:n===`light`?t.light=`color-mix(in ${e}, ${t.main}, #fff ${(a*100).toFixed(0)}%)`:n===`dark`&&(t.dark=`color-mix(in ${e}, ${t.main}, #000 ${(o*100).toFixed(0)}%)`))}function Ua(e=`light`){return e===`dark`?{main:b[200],light:b[50],dark:b[400]}:{main:b[700],light:b[400],dark:b[800]}}function Wa(e=`light`){return e===`dark`?{main:y[200],light:y[50],dark:y[400]}:{main:y[500],light:y[300],dark:y[700]}}function Ga(e=`light`){return e===`dark`?{main:v[500],light:v[300],dark:v[700]}:{main:v[700],light:v[400],dark:v[800]}}function Ka(e=`light`){return e===`dark`?{main:x[400],light:x[300],dark:x[700]}:{main:x[700],light:x[500],dark:x[900]}}function qa(e=`light`){return e===`dark`?{main:S[400],light:S[300],dark:S[700]}:{main:S[800],light:S[500],dark:S[900]}}function Ja(e=`light`){return e===`dark`?{main:C[400],light:C[300],dark:C[700]}:{main:`#ed6c02`,light:C[500],dark:C[900]}}function Ya(e){return`oklch(from ${e} var(--__l) 0 h / var(--__a))`}function Xa(e){let{mode:t=`light`,contrastThreshold:n=3,tonalOffset:r=.2,colorSpace:i,...a}=e,o=e.primary||Ua(t),s=e.secondary||Wa(t),c=e.error||Ga(t),l=e.info||Ka(t),u=e.success||qa(t),d=e.warning||Ja(t);function f(e){return i?Ya(e):Fi(e,Ba.text.primary)>=n?Ba.text.primary:Ra.text.primary}let p=({color:e,name:t,mainShade:n=500,lightShade:a=300,darkShade:o=700})=>{if(e={...e},!e.main&&e[n]&&(e.main=e[n]),!e.hasOwnProperty(`main`))throw Error(ee(11,t?` (${t})`:``,n));if(typeof e.main!=`string`)throw Error(ee(12,t?` (${t})`:``,JSON.stringify(e.main)));return i?(Ha(i,e,`light`,a,r),Ha(i,e,`dark`,o,r)):(Va(e,`light`,a,r),Va(e,`dark`,o,r)),e.contrastText||=f(e.main),e},m;return t===`light`?m=La():t===`dark`&&(m=za()),gn({common:{..._},mode:t,primary:p({color:o,name:`primary`}),secondary:p({color:s,name:`secondary`,mainShade:`A400`,lightShade:`A200`,darkShade:`A700`}),error:p({color:c,name:`error`}),warning:p({color:d,name:`warning`}),info:p({color:l,name:`info`}),success:p({color:u,name:`success`}),grey:w,contrastThreshold:n,getContrastText:f,augmentColor:p,tonalOffset:r,...m},a)}function Za(e){let t={};return Object.entries(e).forEach(e=>{let[n,r]=e;typeof r==`object`&&(t[n]=`${r.fontStyle?`${r.fontStyle} `:``}${r.fontVariant?`${r.fontVariant} `:``}${r.fontWeight?`${r.fontWeight} `:``}${r.fontStretch?`${r.fontStretch} `:``}${r.fontSize||``}${r.lineHeight?`/${r.lineHeight} `:``}${r.fontFamily||``}`)}),t}function Qa(e,t){return{toolbar:{minHeight:56,[e.up(`xs`)]:{"@media (orientation: landscape)":{minHeight:48}},[e.up(`sm`)]:{minHeight:64}},...t}}function $a(e){return Math.round(e*1e5)/1e5}var eo={textTransform:`uppercase`},to=`"Roboto", "Helvetica", "Arial", sans-serif`;function no(e,t){let{fontFamily:n=to,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:o=500,fontWeightBold:s=700,htmlFontSize:c=16,allVariants:l,pxToRem:u,...d}=typeof t==`function`?t(e):t,f=r/14,p=u||(e=>`${e/c*f}rem`),m=(e,t,r,i,a)=>({fontFamily:n,fontWeight:e,fontSize:p(t),lineHeight:r,...n===to?{letterSpacing:`${$a(i/t)}em`}:{},...a,...l});return gn({htmlFontSize:c,pxToRem:p,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:o,fontWeightBold:s,h1:m(i,96,1.167,-1.5),h2:m(i,60,1.2,-.5),h3:m(a,48,1.167,0),h4:m(a,34,1.235,.25),h5:m(a,24,1.334,0),h6:m(o,20,1.6,.15),subtitle1:m(a,16,1.75,.15),subtitle2:m(o,14,1.57,.1),body1:m(a,16,1.5,.15),body2:m(a,14,1.43,.15),button:m(o,14,1.75,.4,eo),caption:m(a,12,1.66,.4),overline:m(a,12,2.66,1,eo),inherit:{fontFamily:`inherit`,fontWeight:`inherit`,fontSize:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`}},d,{clone:!1})}var ro=.2,io=.14,ao=.12;function oo(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ro})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${io})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ao})`].join(`,`)}var so=[`none`,oo(0,2,1,-1,0,1,1,0,0,1,3,0),oo(0,3,1,-2,0,2,2,0,0,1,5,0),oo(0,3,3,-2,0,3,4,0,0,1,8,0),oo(0,2,4,-1,0,4,5,0,0,1,10,0),oo(0,3,5,-1,0,5,8,0,0,1,14,0),oo(0,3,5,-1,0,6,10,0,0,1,18,0),oo(0,4,5,-2,0,7,10,1,0,2,16,1),oo(0,5,5,-3,0,8,10,1,0,3,14,2),oo(0,5,6,-3,0,9,12,1,0,3,16,2),oo(0,6,6,-3,0,10,14,1,0,4,18,3),oo(0,6,7,-4,0,11,15,1,0,4,20,3),oo(0,7,8,-4,0,12,17,2,0,5,22,4),oo(0,7,8,-4,0,13,19,2,0,5,24,4),oo(0,7,9,-4,0,14,21,2,0,5,26,4),oo(0,8,9,-5,0,15,22,2,0,6,28,5),oo(0,8,10,-5,0,16,24,2,0,6,30,5),oo(0,8,11,-5,0,17,26,2,0,6,32,5),oo(0,9,11,-5,0,18,28,2,0,7,34,6),oo(0,9,12,-6,0,19,29,2,0,7,36,6),oo(0,10,13,-6,0,20,31,3,0,8,38,7),oo(0,10,13,-6,0,21,33,3,0,8,40,7),oo(0,10,14,-6,0,22,35,3,0,8,42,7),oo(0,11,14,-7,0,23,36,3,0,9,44,8),oo(0,11,15,-7,0,24,38,3,0,9,46,8)],co={easeInOut:`cubic-bezier(0.4, 0, 0.2, 1)`,easeOut:`cubic-bezier(0.0, 0, 0.2, 1)`,easeIn:`cubic-bezier(0.4, 0, 1, 1)`,sharp:`cubic-bezier(0.4, 0, 0.6, 1)`},lo={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function uo(e){return`${Math.round(e)}ms`}function fo(e){if(!e)return 0;let t=e/36;return Math.min(Math.round((4+15*t**.25+t/5)*10),3e3)}function V(e){let t={...co,...e.easing},n={...lo,...e.duration};return{getAutoHeightDuration:fo,create:(e=[`all`],r={})=>{let{duration:i=n.standard,easing:a=t.easeInOut,delay:o=0,...s}=r;return(Array.isArray(e)?e:[e]).map(e=>`${e} ${typeof i==`string`?i:uo(i)} ${a} ${typeof o==`string`?o:uo(o)}`).join(`,`)},...e,easing:t,duration:n}}var H={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function po(e){return mn(e)||e===void 0||typeof e==`string`||typeof e==`boolean`||typeof e==`number`||Array.isArray(e)}function mo(e={}){let t={...e};function n(e){let t=Object.entries(e);for(let r=0;r<t.length;r++){let[i,a]=t[r];!po(a)||i.startsWith(`unstable_`)||i.startsWith(`internal_`)?delete e[i]:mn(a)&&(e[i]={...a},n(e[i]))}}return n(t),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function ho(e){return typeof e==`number`?`${(e*100).toFixed(0)}%`:`calc((${e}) * 100%)`}var go=e=>{if(!Number.isNaN(+e))return+e;let t=e.match(/\d*\.?\d+/g);if(!t)return 0;let n=0;for(let e=0;e<t.length;e+=1)n+=+t[e];return n};function _o(e){Object.assign(e,{alpha(t,n){let r=this||e;return r.colorSpace?`oklch(from ${t} l c h / ${typeof n==`string`?`calc(${n})`:n})`:r.vars?`rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,`var(--$1Channel)`)} / ${typeof n==`string`?`calc(${n})`:n})`:R(t,go(n))},lighten(t,n){let r=this||e;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${t}, #fff ${ho(n)})`:Ri(t,n)},darken(t,n){let r=this||e;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${t}, #000 ${ho(n)})`:Li(t,n)}})}function vo(e={},...t){let{breakpoints:n,mixins:r={},spacing:i,palette:a={},transitions:o={},typography:s={},shape:c,colorSpace:l,...u}=e;if(e.vars&&e.generateThemeVars===void 0)throw Error(ee(22));let d=Xa({...a,colorSpace:l}),f=Zr(e),p=gn(f,{mixins:Qa(f.breakpoints,r),palette:d,shadows:so.slice(),typography:no(d,s),transitions:V(o),zIndex:{...H}});return p=gn(p,u),p=t.reduce((e,t)=>gn(e,t),p),p.unstable_sxConfig={...Wr,...u?.unstable_sxConfig},p.unstable_sx=function(e){return qr({sx:e,theme:this})},p.toRuntimeSource=mo,_o(p),p}function yo(e){let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,Math.round(t*10)/1e3}var bo=[...Array(25)].map((e,t)=>{if(t===0)return`none`;let n=yo(t);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function xo(e){return{inputPlaceholder:e===`dark`?.5:.42,inputUnderline:e===`dark`?.7:.42,switchTrackDisabled:e===`dark`?.2:.12,switchTrack:e===`dark`?.3:.38}}function So(e){return e===`dark`?bo:[]}function Co(e){let{palette:t={mode:`light`},opacity:n,overlays:r,colorSpace:i,...a}=e,o=Xa({...t,colorSpace:i});return{palette:o,opacity:{...xo(o.mode),...n},overlays:r||So(o.mode),...a}}function wo(e){return!!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||e[0]===`palette`&&!!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}var To=e=>[...[...Array(25)].map((t,n)=>`--${e?`${e}-`:``}overlays-${n}`),`--${e?`${e}-`:``}palette-AppBar-darkBg`,`--${e?`${e}-`:``}palette-AppBar-darkColor`],Eo=e=>(t,n)=>{let r=e.rootSelector||`:root`,i=e.colorSchemeSelector,a=i;if(i===`class`&&(a=`.%s`),i===`data`&&(a=`[data-%s]`),i?.startsWith(`data-`)&&!i.includes(`%s`)&&(a=`[${i}="%s"]`),e.defaultColorScheme===t){if(t===`dark`){let i={};return To(e.cssVarPrefix).forEach(e=>{i[e]=n[e],delete n[e]}),a===`media`?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:i}}:a?{[a.replace(`%s`,t)]:i,[`${r}, ${a.replace(`%s`,t)}`]:n}:{[r]:{...n,...i}}}if(a&&a!==`media`)return`${r}, ${a.replace(`%s`,String(t))}`}else if(t){if(a===`media`)return{[`@media (prefers-color-scheme: ${String(t)})`]:{[r]:n}};if(a)return a.replace(`%s`,String(t))}return r};function Do(e,t){t.forEach(t=>{e[t]||(e[t]={})})}function U(e,t,n){!e[t]&&n&&(e[t]=n)}function Oo(e){return typeof e!=`string`||!e.startsWith(`hsl`)?e:Ni(e)}function ko(e,t){`${t}Channel`in e||(e[`${t}Channel`]=ji(Oo(e[t]),`MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function Ao(e){return typeof e==`number`?`${e}px`:typeof e==`string`||typeof e==`function`||Array.isArray(e)?e:`8px`}var jo=e=>{try{return e()}catch{}},Mo=(e=`mui`)=>Sa(e);function No(e,t,n,r,i){if(!n)return;n=n===!0?{}:n;let a=i===`dark`?`dark`:`light`;if(!r){t[i]=Co({...n,palette:{mode:a,...n?.palette},colorSpace:e});return}let{palette:o,...s}=vo({...r,palette:{mode:a,...n?.palette},colorSpace:e});return t[i]={...n,palette:o,opacity:{...xo(a),...n?.opacity},overlays:n?.overlays||So(a)},s}function Po(e={},...t){let{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:a=`mui`,nativeColor:o=!1,shouldSkipGeneratingVar:s=wo,colorSchemeSelector:c=n.light&&n.dark?`media`:void 0,rootSelector:l=`:root`,...u}=e,d=Object.keys(n)[0],f=r||(n.light&&d!==`light`?`light`:d),p=Mo(a),{[f]:m,light:h,dark:g,..._}=n,v={..._},y=m;if((f===`dark`&&!(`dark`in n)||f===`light`&&!(`light`in n))&&(y=!0),!y)throw Error(ee(21,f));let b;o&&(b=`oklch`);let x=No(b,v,y,u,f);h&&!v.light&&No(b,v,h,void 0,`light`),g&&!v.dark&&No(b,v,g,void 0,`dark`);let S={defaultColorScheme:f,...x,cssVarPrefix:a,colorSchemeSelector:c,rootSelector:l,getCssVar:p,colorSchemes:v,font:{...Za(x.typography),...x.font},spacing:Ao(u.spacing)};Object.keys(S.colorSchemes).forEach(e=>{let t=S.colorSchemes[e].palette,n=e=>{let n=e.split(`-`),r=n[1],i=n[2];return p(e,t[r][i])};t.mode===`light`&&(U(t.common,`background`,`#fff`),U(t.common,`onBackground`,`#000`)),t.mode===`dark`&&(U(t.common,`background`,`#000`),U(t.common,`onBackground`,`#fff`));function r(e,t,n){if(b){let r;return e===Ii&&(r=`transparent ${((1-n)*100).toFixed(0)}%`),e===z&&(r=`#000 ${(n*100).toFixed(0)}%`),e===B&&(r=`#fff ${(n*100).toFixed(0)}%`),`color-mix(in ${b}, ${t}, ${r})`}return e(t,n)}if(Do(t,[`Alert`,`AppBar`,`Avatar`,`Button`,`Chip`,`FilledInput`,`LinearProgress`,`Skeleton`,`Slider`,`SnackbarContent`,`SpeedDialAction`,`StepConnector`,`StepContent`,`Switch`,`TableCell`,`Tooltip`]),t.mode===`light`){U(t.Alert,`errorColor`,r(z,o?p(`palette-error-light`):t.error.light,.6)),U(t.Alert,`infoColor`,r(z,o?p(`palette-info-light`):t.info.light,.6)),U(t.Alert,`successColor`,r(z,o?p(`palette-success-light`):t.success.light,.6)),U(t.Alert,`warningColor`,r(z,o?p(`palette-warning-light`):t.warning.light,.6)),U(t.Alert,`errorFilledBg`,n(`palette-error-main`)),U(t.Alert,`infoFilledBg`,n(`palette-info-main`)),U(t.Alert,`successFilledBg`,n(`palette-success-main`)),U(t.Alert,`warningFilledBg`,n(`palette-warning-main`)),U(t.Alert,`errorFilledColor`,jo(()=>t.getContrastText(t.error.main))),U(t.Alert,`infoFilledColor`,jo(()=>t.getContrastText(t.info.main))),U(t.Alert,`successFilledColor`,jo(()=>t.getContrastText(t.success.main))),U(t.Alert,`warningFilledColor`,jo(()=>t.getContrastText(t.warning.main))),U(t.Alert,`errorStandardBg`,r(B,o?p(`palette-error-light`):t.error.light,.9)),U(t.Alert,`infoStandardBg`,r(B,o?p(`palette-info-light`):t.info.light,.9)),U(t.Alert,`successStandardBg`,r(B,o?p(`palette-success-light`):t.success.light,.9)),U(t.Alert,`warningStandardBg`,r(B,o?p(`palette-warning-light`):t.warning.light,.9)),U(t.Alert,`errorIconColor`,n(`palette-error-main`)),U(t.Alert,`infoIconColor`,n(`palette-info-main`)),U(t.Alert,`successIconColor`,n(`palette-success-main`)),U(t.Alert,`warningIconColor`,n(`palette-warning-main`)),U(t.AppBar,`defaultBg`,n(`palette-grey-100`)),U(t.Avatar,`defaultBg`,n(`palette-grey-400`)),U(t.Button,`inheritContainedBg`,n(`palette-grey-300`)),U(t.Button,`inheritContainedHoverBg`,n(`palette-grey-A100`)),U(t.Chip,`defaultBorder`,n(`palette-grey-400`)),U(t.Chip,`defaultAvatarColor`,n(`palette-grey-700`)),U(t.Chip,`defaultIconColor`,n(`palette-grey-700`)),U(t.FilledInput,`bg`,`rgba(0, 0, 0, 0.06)`),U(t.FilledInput,`hoverBg`,`rgba(0, 0, 0, 0.09)`),U(t.FilledInput,`disabledBg`,`rgba(0, 0, 0, 0.12)`),U(t.LinearProgress,`primaryBg`,r(B,o?p(`palette-primary-main`):t.primary.main,.62)),U(t.LinearProgress,`secondaryBg`,r(B,o?p(`palette-secondary-main`):t.secondary.main,.62)),U(t.LinearProgress,`errorBg`,r(B,o?p(`palette-error-main`):t.error.main,.62)),U(t.LinearProgress,`infoBg`,r(B,o?p(`palette-info-main`):t.info.main,.62)),U(t.LinearProgress,`successBg`,r(B,o?p(`palette-success-main`):t.success.main,.62)),U(t.LinearProgress,`warningBg`,r(B,o?p(`palette-warning-light`):t.warning.main,.62)),U(t.Skeleton,`bg`,b?r(Ii,o?p(`palette-text-primary`):t.text.primary,.11):`rgba(${n(`palette-text-primaryChannel`)} / 0.11)`),U(t.Slider,`primaryTrack`,r(B,o?p(`palette-primary-main`):t.primary.main,.62)),U(t.Slider,`secondaryTrack`,r(B,o?p(`palette-secondary-main`):t.secondary.main,.62)),U(t.Slider,`errorTrack`,r(B,o?p(`palette-error-main`):t.error.main,.62)),U(t.Slider,`infoTrack`,r(B,o?p(`palette-info-main`):t.info.main,.62)),U(t.Slider,`successTrack`,r(B,o?p(`palette-success-main`):t.success.main,.62)),U(t.Slider,`warningTrack`,r(B,o?p(`palette-warning-main`):t.warning.main,.62));let e=b?r(z,o?p(`palette-background-default`):t.background.default,.6825):Bi(t.background.default,.8);U(t.SnackbarContent,`bg`,e),U(t.SnackbarContent,`color`,jo(()=>b?Ba.text.primary:t.getContrastText(e))),U(t.SpeedDialAction,`fabHoverBg`,Bi(t.background.paper,.15)),U(t.StepConnector,`border`,n(`palette-grey-400`)),U(t.StepContent,`border`,n(`palette-grey-400`)),U(t.Switch,`defaultColor`,n(`palette-common-white`)),U(t.Switch,`defaultDisabledColor`,n(`palette-grey-100`)),U(t.Switch,`primaryDisabledColor`,r(B,o?p(`palette-primary-main`):t.primary.main,.62)),U(t.Switch,`secondaryDisabledColor`,r(B,o?p(`palette-secondary-main`):t.secondary.main,.62)),U(t.Switch,`errorDisabledColor`,r(B,o?p(`palette-error-main`):t.error.main,.62)),U(t.Switch,`infoDisabledColor`,r(B,o?p(`palette-info-main`):t.info.main,.62)),U(t.Switch,`successDisabledColor`,r(B,o?p(`palette-success-main`):t.success.main,.62)),U(t.Switch,`warningDisabledColor`,r(B,o?p(`palette-warning-main`):t.warning.main,.62)),U(t.TableCell,`border`,r(B,Ii(o?p(`palette-divider`):t.divider,1),.88)),U(t.Tooltip,`bg`,r(Ii,o?p(`palette-grey-700`):t.grey[700],.92))}if(t.mode===`dark`){U(t.Alert,`errorColor`,r(B,o?p(`palette-error-light`):t.error.light,.6)),U(t.Alert,`infoColor`,r(B,o?p(`palette-info-light`):t.info.light,.6)),U(t.Alert,`successColor`,r(B,o?p(`palette-success-light`):t.success.light,.6)),U(t.Alert,`warningColor`,r(B,o?p(`palette-warning-light`):t.warning.light,.6)),U(t.Alert,`errorFilledBg`,n(`palette-error-dark`)),U(t.Alert,`infoFilledBg`,n(`palette-info-dark`)),U(t.Alert,`successFilledBg`,n(`palette-success-dark`)),U(t.Alert,`warningFilledBg`,n(`palette-warning-dark`)),U(t.Alert,`errorFilledColor`,jo(()=>t.getContrastText(t.error.dark))),U(t.Alert,`infoFilledColor`,jo(()=>t.getContrastText(t.info.dark))),U(t.Alert,`successFilledColor`,jo(()=>t.getContrastText(t.success.dark))),U(t.Alert,`warningFilledColor`,jo(()=>t.getContrastText(t.warning.dark))),U(t.Alert,`errorStandardBg`,r(z,o?p(`palette-error-light`):t.error.light,.9)),U(t.Alert,`infoStandardBg`,r(z,o?p(`palette-info-light`):t.info.light,.9)),U(t.Alert,`successStandardBg`,r(z,o?p(`palette-success-light`):t.success.light,.9)),U(t.Alert,`warningStandardBg`,r(z,o?p(`palette-warning-light`):t.warning.light,.9)),U(t.Alert,`errorIconColor`,n(`palette-error-main`)),U(t.Alert,`infoIconColor`,n(`palette-info-main`)),U(t.Alert,`successIconColor`,n(`palette-success-main`)),U(t.Alert,`warningIconColor`,n(`palette-warning-main`)),U(t.AppBar,`defaultBg`,n(`palette-grey-900`)),U(t.AppBar,`darkBg`,n(`palette-background-paper`)),U(t.AppBar,`darkColor`,n(`palette-text-primary`)),U(t.Avatar,`defaultBg`,n(`palette-grey-600`)),U(t.Button,`inheritContainedBg`,n(`palette-grey-800`)),U(t.Button,`inheritContainedHoverBg`,n(`palette-grey-700`)),U(t.Chip,`defaultBorder`,n(`palette-grey-700`)),U(t.Chip,`defaultAvatarColor`,n(`palette-grey-300`)),U(t.Chip,`defaultIconColor`,n(`palette-grey-300`)),U(t.FilledInput,`bg`,`rgba(255, 255, 255, 0.09)`),U(t.FilledInput,`hoverBg`,`rgba(255, 255, 255, 0.13)`),U(t.FilledInput,`disabledBg`,`rgba(255, 255, 255, 0.12)`),U(t.LinearProgress,`primaryBg`,r(z,o?p(`palette-primary-main`):t.primary.main,.5)),U(t.LinearProgress,`secondaryBg`,r(z,o?p(`palette-secondary-main`):t.secondary.main,.5)),U(t.LinearProgress,`errorBg`,r(z,o?p(`palette-error-main`):t.error.main,.5)),U(t.LinearProgress,`infoBg`,r(z,o?p(`palette-info-main`):t.info.main,.5)),U(t.LinearProgress,`successBg`,r(z,o?p(`palette-success-main`):t.success.main,.5)),U(t.LinearProgress,`warningBg`,r(z,o?p(`palette-warning-main`):t.warning.main,.5)),U(t.Skeleton,`bg`,b?r(Ii,o?p(`palette-text-primary`):t.text.primary,.13):`rgba(${n(`palette-text-primaryChannel`)} / 0.13)`),U(t.Slider,`primaryTrack`,r(z,o?p(`palette-primary-main`):t.primary.main,.5)),U(t.Slider,`secondaryTrack`,r(z,o?p(`palette-secondary-main`):t.secondary.main,.5)),U(t.Slider,`errorTrack`,r(z,o?p(`palette-error-main`):t.error.main,.5)),U(t.Slider,`infoTrack`,r(z,o?p(`palette-info-main`):t.info.main,.5)),U(t.Slider,`successTrack`,r(z,o?p(`palette-success-main`):t.success.main,.5)),U(t.Slider,`warningTrack`,r(z,o?p(`palette-warning-light`):t.warning.main,.5));let e=b?r(B,o?p(`palette-background-default`):t.background.default,.985):Bi(t.background.default,.98);U(t.SnackbarContent,`bg`,e),U(t.SnackbarContent,`color`,jo(()=>b?Ra.text.primary:t.getContrastText(e))),U(t.SpeedDialAction,`fabHoverBg`,Bi(t.background.paper,.15)),U(t.StepConnector,`border`,n(`palette-grey-600`)),U(t.StepContent,`border`,n(`palette-grey-600`)),U(t.Switch,`defaultColor`,n(`palette-grey-300`)),U(t.Switch,`defaultDisabledColor`,n(`palette-grey-600`)),U(t.Switch,`primaryDisabledColor`,r(z,o?p(`palette-primary-main`):t.primary.main,.55)),U(t.Switch,`secondaryDisabledColor`,r(z,o?p(`palette-secondary-main`):t.secondary.main,.55)),U(t.Switch,`errorDisabledColor`,r(z,o?p(`palette-error-main`):t.error.main,.55)),U(t.Switch,`infoDisabledColor`,r(z,o?p(`palette-info-main`):t.info.main,.55)),U(t.Switch,`successDisabledColor`,r(z,o?p(`palette-success-main`):t.success.main,.55)),U(t.Switch,`warningDisabledColor`,r(z,o?p(`palette-warning-light`):t.warning.main,.55)),U(t.TableCell,`border`,r(z,Ii(o?p(`palette-divider`):t.divider,1),.68)),U(t.Tooltip,`bg`,r(Ii,o?p(`palette-grey-700`):t.grey[700],.92))}o||(ko(t.background,`default`),ko(t.background,`paper`),ko(t.common,`background`),ko(t.common,`onBackground`),ko(t,`divider`)),Object.keys(t).forEach(e=>{let n=t[e];e!==`tonalOffset`&&!o&&n&&typeof n==`object`&&(n.main&&U(t[e],`mainChannel`,ji(Oo(n.main))),n.light&&U(t[e],`lightChannel`,ji(Oo(n.light))),n.dark&&U(t[e],`darkChannel`,ji(Oo(n.dark))),n.contrastText&&U(t[e],`contrastTextChannel`,ji(Oo(n.contrastText))),e===`text`&&(ko(t[e],`primary`),ko(t[e],`secondary`)),e===`action`&&(n.active&&ko(t[e],`active`),n.selected&&ko(t[e],`selected`)))})}),S=t.reduce((e,t)=>gn(e,t),S);let C={prefix:a,disableCssColorScheme:i,shouldSkipGeneratingVar:s,getSelector:Eo(S),enableContrastVars:o},{vars:w,generateThemeVars:T,generateStyleSheets:te}=Da(S,C);return S.vars=w,Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([e,t])=>{S[e]=t}),S.generateThemeVars=T,S.generateStyleSheets=te,S.generateSpacing=function(){return gr(u.spacing,lr(this))},S.getColorSchemeSelector=Oa(c),S.spacing=S.generateSpacing(),S.shouldSkipGeneratingVar=s,S.unstable_sxConfig={...Wr,...u?.unstable_sxConfig},S.unstable_sx=function(e){return qr({sx:e,theme:this})},S.internal_cache={},S.toRuntimeSource=mo,S}function Fo(e,t,n){e.colorSchemes&&n&&(e.colorSchemes[t]={...n!==!0&&n,palette:Xa({...n===!0?{}:n.palette,mode:t})})}function Io(e={},...t){let{palette:n,cssVariables:r=!1,colorSchemes:i=n?void 0:{light:!0},defaultColorScheme:a=n?.mode,...o}=e,s=a||`light`,c=i?.[s],l={...i,...n?{[s]:{...typeof c!=`boolean`&&c,palette:n}}:void 0};if(r===!1){if(!(`colorSchemes`in e))return vo(e,...t);let r=n;`palette`in e||l[s]&&(l[s]===!0?s===`dark`&&(r={mode:`dark`}):r=l[s].palette);let i=vo({...e,palette:r},...t);return i.defaultColorScheme=s,i.colorSchemes=l,i.palette.mode===`light`&&(i.colorSchemes.light={...l.light!==!0&&l.light,palette:i.palette},Fo(i,`dark`,l.dark)),i.palette.mode===`dark`&&(i.colorSchemes.dark={...l.dark!==!0&&l.dark,palette:i.palette},Fo(i,`light`,l.light)),i}return!n&&!(`light`in l)&&s===`light`&&(l.light=!0),Po({...o,colorSchemes:l,defaultColorScheme:s,...typeof r!=`boolean`&&r},...t)}var Lo=Io();function Ro(){let e=ti(Lo);return e.$$material||e}function zo(e){return e!==`ownerState`&&e!==`theme`&&e!==`sx`&&e!==`as`}var Bo=e=>zo(e)&&e!==`classes`,W=vi({themeId:T,defaultTheme:Lo,rootShouldForwardProp:Bo});function Vo({theme:e,...t}){let n=`$$material`in e?e[T]:void 0;return(0,F.jsx)(oa,{...t,themeId:n?T:void 0,theme:n||e})}var Ho={attribute:`data-mui-color-scheme`,colorSchemeStorageKey:`mui-color-scheme`,defaultLightColorScheme:`light`,defaultDarkColorScheme:`dark`,modeStorageKey:`mui-mode`},{CssVarsProvider:Uo,useColorScheme:Wo,getInitColorSchemeScript:Go}=xa({themeId:T,theme:()=>Io({cssVariables:!0}),colorSchemeStorageKey:Ho.colorSchemeStorageKey,modeStorageKey:Ho.modeStorageKey,defaultColorScheme:{light:Ho.defaultLightColorScheme,dark:Ho.defaultDarkColorScheme},resolveTheme:e=>{let t={...e,typography:no(e.palette,e.typography)};return t.unstable_sx=function(e){return qr({sx:e,theme:this})},t}}),Ko=Uo;function qo({theme:e,...t}){let n=P.useMemo(()=>{if(typeof e==`function`)return e;let t=`$$material`in e?e[T]:e;return`colorSchemes`in t?null:`vars`in t?e:{...e,vars:null}},[e]);return n?(0,F.jsx)(Vo,{theme:n,...t}):(0,F.jsx)(Ko,{theme:e,...t})}var Jo=Yn;function Yo(e){return(0,F.jsx)(ri,{...e,defaultTheme:Lo,themeId:T})}function Xo(e){return function(t){return(0,F.jsx)(Yo,{styles:typeof e==`function`?n=>e({theme:n,...t}):e})}}var Zo=ca;function Qo(e){return Qi(e)}function $o(e){return li(`MuiSvgIcon`,e)}L(`MuiSvgIcon`,[`root`,`colorPrimary`,`colorSecondary`,`colorAction`,`colorError`,`colorDisabled`,`fontSizeInherit`,`fontSizeSmall`,`fontSizeMedium`,`fontSizeLarge`]);var es=e=>{let{color:t,fontSize:n,classes:r}=e;return ka({root:[`root`,t!==`inherit`&&`color${Jo(t)}`,`fontSize${Jo(n)}`]},$o,r)},ts=W(`svg`,{name:`MuiSvgIcon`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.color!==`inherit`&&t[`color${Jo(n.color)}`],t[`fontSize${Jo(n.fontSize)}`]]}})(Zo(({theme:e})=>({userSelect:`none`,width:`1em`,height:`1em`,display:`inline-block`,flexShrink:0,transition:e.transitions?.create?.(`fill`,{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:`currentColor`}},{props:{fontSize:`inherit`},style:{fontSize:`inherit`}},{props:{fontSize:`small`},style:{fontSize:e.typography?.pxToRem?.(20)||`1.25rem`}},{props:{fontSize:`medium`},style:{fontSize:e.typography?.pxToRem?.(24)||`1.5rem`}},{props:{fontSize:`large`},style:{fontSize:e.typography?.pxToRem?.(35)||`2.1875rem`}},...Object.entries((e.vars??e).palette).filter(([,e])=>e&&e.main).map(([t])=>({props:{color:t},style:{color:(e.vars??e).palette?.[t]?.main}})),{props:{color:`action`},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:`disabled`},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:`inherit`},style:{color:void 0}}]}))),ns=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiSvgIcon`}),{children:r,className:i,color:a=`inherit`,component:o=`svg`,fontSize:s=`medium`,htmlColor:c,inheritViewBox:l=!1,titleAccess:u,viewBox:d=`0 0 24 24`,...f}=n,p=P.isValidElement(r)&&r.type===`svg`,m={...n,color:a,component:o,fontSize:s,instanceFontSize:e.fontSize,inheritViewBox:l,viewBox:d,hasSvgAsChild:p},h={};return l||(h.viewBox=d),(0,F.jsxs)(ts,{as:o,className:I(es(m).root,i),focusable:`false`,color:c,"aria-hidden":u?void 0:!0,role:u?`img`:void 0,ref:t,...h,...f,...p&&r.props,ownerState:m,children:[p?r.props.children:r,u?(0,F.jsx)(`title`,{children:u}):null]})});ns.muiName=`SvgIcon`;function rs(e,t){function n(t,n){return(0,F.jsx)(ns,{"data-testid":void 0,ref:n,...t,children:e})}return n.muiName=ns.muiName,P.memo(P.forwardRef(n))}var is=na;function as(e){let t=P.useRef(e);return Ti(()=>{t.current=e}),P.useRef((...e)=>(0,t.current)(...e)).current}var os=as;function ss(...e){let t=P.useRef(void 0),n=P.useCallback(t=>{let n=e.map(e=>{if(e==null)return null;if(typeof e==`function`){let n=e,r=n(t);return typeof r==`function`?r:()=>{n(null)}}return e.current=t,()=>{e.current=null}});return()=>{n.forEach(e=>e?.())}},e);return P.useMemo(()=>e.every(e=>e==null)?null:e=>{t.current&&=(t.current(),void 0),e!=null&&(t.current=n(e))},e)}var cs=ss;function ls(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function us(e,t){return us=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},us(e,t)}function ds(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,us(e,t)}var fs={disabled:!1},ps=P.createContext(null),ms=function(e){return e.scrollTop},hs=c(m()),gs=`unmounted`,_s=`exited`,vs=`entering`,ys=`entered`,bs=`exiting`,xs=function(e){ds(t,e);function t(t,n){var r=e.call(this,t,n)||this,i=n,a=i&&!i.isMounting?t.enter:t.appear,o;return r.appearStatus=null,t.in?a?(o=_s,r.appearStatus=vs):o=ys:o=t.unmountOnExit||t.mountOnEnter?gs:_s,r.state={status:o},r.nextCallback=null,r}t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===`unmounted`?{status:_s}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==`entering`&&n!==`entered`&&(t=vs):(n===`entering`||n===`entered`)&&(t=bs)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e=this.props.timeout,t=n=r=e,n,r;return e!=null&&typeof e!=`number`&&(t=e.exit,n=e.enter,r=e.appear===void 0?n:e.appear),{exit:t,enter:n,appear:r}},n.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===`entering`){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:hs.default.findDOMNode(this);n&&ms(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===`exited`&&this.setState({status:gs})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[hs.default.findDOMNode(this),r],a=i[0],o=i[1],s=this.getTimeouts(),c=r?s.appear:s.enter;if(!e&&!n||fs.disabled){this.safeSetState({status:ys},function(){t.props.onEntered(a)});return}this.props.onEnter(a,o),this.safeSetState({status:vs},function(){t.props.onEntering(a,o),t.onTransitionEnd(c,function(){t.safeSetState({status:ys},function(){t.props.onEntered(a,o)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:hs.default.findDOMNode(this);if(!t||fs.disabled){this.safeSetState({status:_s},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:bs},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:_s},function(){e.props.onExited(r)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:hs.default.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],o=i[1];this.props.addEndListener(a,o)}e!=null&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===`unmounted`)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=ls(t,[`children`,`in`,`mountOnEnter`,`unmountOnExit`,`appear`,`enter`,`exit`,`timeout`,`addEndListener`,`onEnter`,`onEntering`,`onEntered`,`onExit`,`onExiting`,`onExited`,`nodeRef`]);return P.createElement(ps.Provider,{value:null},typeof n==`function`?n(e,r):P.cloneElement(P.Children.only(n),r))},t}(P.Component);xs.contextType=ps,xs.propTypes={};function Ss(){}xs.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ss,onEntering:Ss,onEntered:Ss,onExit:Ss,onExiting:Ss,onExited:Ss},xs.UNMOUNTED=gs,xs.EXITED=_s,xs.ENTERING=vs,xs.ENTERED=ys,xs.EXITING=bs;function Cs(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function ws(e,t){var n=function(e){return t&&(0,P.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&P.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function Ts(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function Es(e,t,n){return n[t]==null?e.props[t]:n[t]}function Ds(e,t){return ws(e.children,function(n){return(0,P.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:Es(n,`appear`,e),enter:Es(n,`enter`,e),exit:Es(n,`exit`,e)})})}function Os(e,t,n){var r=ws(e.children),i=Ts(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,P.isValidElement)(o)){var s=a in t,c=a in r,l=t[a],u=(0,P.isValidElement)(l)&&!l.props.in;c&&(!s||u)?i[a]=(0,P.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:Es(o,`exit`,e),enter:Es(o,`enter`,e)}):!c&&s&&!u?i[a]=(0,P.cloneElement)(o,{in:!1}):c&&s&&(0,P.isValidElement)(l)&&(i[a]=(0,P.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:Es(o,`exit`,e),enter:Es(o,`enter`,e)}))}}),i}var ks=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},As={component:`div`,childFactory:function(e){return e}},js=function(e){ds(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(Cs(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?Ds(e,r):Os(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=ws(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=te({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=ls(e,[`component`,`childFactory`]),i=this.state.contextValue,a=ks(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,t===null?P.createElement(ps.Provider,{value:i},a):P.createElement(ps.Provider,{value:i},P.createElement(t,r,a))},t}(P.Component);js.propTypes={},js.defaultProps=As;var Ms={};function Ns(e,t){let n=P.useRef(Ms);return n.current===Ms&&(n.current=e(t)),n}var Ps=[];function Fs(e){P.useEffect(e,Ps)}var Is=class e{static create(){return new e}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear};function Ls(){let e=Ns(Is.create).current;return Fs(e.disposeEffect),e}var Rs=e=>e.scrollTop;function zs(e,t){return n=>{if(t){let r=e.current;n===void 0?t(r):t(r,n)}}}function Bs(e,t,n,r,i,a){let o=e===`exited`&&!t?r:n[e]||n.exited;return i||a?{...o,...i,...a}:o}function Vs(e,t){let{timeout:n,easing:r,style:i={}}=e;return{duration:i.transitionDuration??(typeof n==`number`?n:n[t.mode]||0),easing:i.transitionTimingFunction??(typeof r==`object`?r[t.mode]:r),delay:i.transitionDelay}}function Hs(e){return typeof e==`string`}function Us(e,t,n){return e===void 0||Hs(e)?t:{...t,ownerState:{...t.ownerState,...n}}}function Ws(e,t,n){return typeof e==`function`?e(t,n):e}function Gs(e,t=[]){if(e===void 0)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]==`function`&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n}function Ks(e){if(e===void 0)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&typeof e[t]==`function`)).forEach(n=>{t[n]=e[n]}),t}function qs(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:a}=e;if(!t){let e=I(n?.className,a,i?.className,r?.className),t={...n?.style,...i?.style,...r?.style},o={...n,...i,...r};return e.length>0&&(o.className=e),Object.keys(t).length>0&&(o.style=t),{props:o,internalRef:void 0}}let o=Gs({...i,...r}),s=Ks(r),c=Ks(i),l=t(o),u=I(l?.className,n?.className,a,i?.className,r?.className),d={...l?.style,...n?.style,...i?.style,...r?.style},f={...l,...n,...c,...s};return u.length>0&&(f.className=u),Object.keys(d).length>0&&(f.style=d),{props:f,internalRef:l.ref}}function Js(e,t){let{className:n,elementType:r,ownerState:i,externalForwardedProps:a,internalForwardedProps:o,shouldForwardComponentProp:s=!1,...c}=t,{component:l,slots:u={[e]:void 0},slotProps:d={[e]:void 0},...f}=a,p=u[e]||r,m=Ws(d[e],i),{props:{component:h,...g},internalRef:_}=qs({className:n,...c,externalForwardedProps:e===`root`?f:void 0,externalSlotProps:m}),v=ss(_,m?.ref,t.ref),y=e===`root`?h||l:h;return[p,Us(p,{...e===`root`&&!l&&!u[e]&&o,...e!==`root`&&!u[e]&&o,...g,...y&&!s&&{as:y},...y&&s&&{component:y},ref:v},i)]}function Ys(e){return li(`MuiPaper`,e)}L(`MuiPaper`,`root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24`.split(`.`));var Xs=e=>{let{square:t,elevation:n,variant:r,classes:i}=e;return ka({root:[`root`,r,!t&&`rounded`,r===`elevation`&&`elevation${n}`]},Ys,i)},Zs=W(`div`,{name:`MuiPaper`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant===`elevation`&&t[`elevation${n.elevation}`]]}})(Zo(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create(`box-shadow`),variants:[{props:({ownerState:e})=>!e.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:`outlined`},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:`elevation`},style:{boxShadow:`var(--Paper-shadow)`,backgroundImage:`var(--Paper-overlay)`}}]}))),Qs=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiPaper`}),r=Ro(),{className:i,component:a=`div`,elevation:o=1,square:s=!1,variant:c=`elevation`,...l}=n,u={...n,component:a,elevation:o,square:s,variant:c};return(0,F.jsx)(Zs,{as:a,ownerState:u,className:I(Xs(u).root,i),ref:t,...l,style:{...c===`elevation`&&{"--Paper-shadow":(r.vars||r).shadows[o],...r.vars&&{"--Paper-overlay":r.vars.overlays?.[o]},...!r.vars&&r.palette.mode===`dark`&&{"--Paper-overlay":`linear-gradient(${R(`#fff`,yo(o))}, ${R(`#fff`,yo(o))})`}},...l.style}})});function $s(e){try{return e.matches(`:focus-visible`)}catch{}return!1}function ec(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return P.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}var tc={};function nc(e){let{nativeButton:t,nativeButtonProp:n,internalNativeButton:r=t,allowInferredHostMismatch:i=!1,disabled:a,type:o,hasFormAction:s=!1,tabIndex:c=0,focusableWhenDisabled:l,stopEventPropagation:u=!1,onBeforeKeyDown:d,onBeforeKeyUp:f}=e,p=P.useRef(null),m=l===!0,h=ec({focusableWhenDisabled:m,disabled:a,isNativeButton:t,tabIndex:c}),g=P.useCallback(()=>{let e=p.current;return e==null?t:e.tagName===`BUTTON`?!0:!!(e.tagName===`A`&&e.href)},[t]),_=P.useMemo(()=>{let e=m?{}:{tabIndex:a?-1:c};return t?(e.type=o===void 0&&!s?`button`:o,m||(e.disabled=a)):(e.role=`button`,!m&&a&&(e[`aria-disabled`]=a)),m?{...e,...h}:e},[a,m,h,s,t,c,o]);return{getButtonProps:P.useCallback((e=tc)=>{let{onClick:t,onKeyDown:n,onKeyUp:r,...i}=e,o=e=>{if(u&&e.stopPropagation(),a){e.preventDefault();return}t?.(e)},s=e=>{if(m&&h.onKeyDown(e),!a&&(d?.(e),n?.(e),!(e.target!==e.currentTarget||g()))){if(e.key===` `){e.preventDefault();return}e.key===`Enter`&&(e.preventDefault(),e.currentTarget.click())}},c=e=>{a||(f?.(e),r?.(e),e.target===e.currentTarget&&!g()&&e.key===` `&&!e.defaultPrevented&&e.currentTarget.click())};return{..._,...i,onClick:o,onKeyDown:s,onKeyUp:c}},[_,a,m,h,g,d,f,u]),rootRef:p}}var rc=class e{static create(){return new e}static use(){let t=Ns(e.create).current,[n,r]=P.useState(!1);return t.shouldMount=n,t.setShouldMount=r,P.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=ac(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function ic(){return rc.use()}function ac(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}function oc(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:o,in:s,onExited:c,timeout:l}=e,[u,d]=P.useState(!1),f=I(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),p={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},m=I(n.child,u&&n.childLeaving,r&&n.childPulsate);return!s&&!u&&d(!0),P.useEffect(()=>{if(!s&&c!=null){let e=setTimeout(c,l);return()=>{clearTimeout(e)}}},[c,s,l]),(0,F.jsx)(`span`,{className:f,style:p,children:(0,F.jsx)(`span`,{className:m})})}var sc=L(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),cc=550,lc=Kt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,uc=Kt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,dc=Kt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,fc=W(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),pc=W(oc,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${sc.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${lc};
    animation-duration: ${cc}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${sc.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${sc.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${sc.childLeaving} {
    opacity: 0;
    animation-name: ${uc};
    animation-duration: ${cc}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${sc.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${dc};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,mc=P.forwardRef(function(e,t){let{center:n=!1,classes:r={},className:i,...a}=Qo({props:e,name:`MuiTouchRipple`}),[o,s]=P.useState([]),c=P.useRef(0),l=P.useRef(null);P.useEffect(()=>{l.current&&=(l.current(),null)},[o]);let u=P.useRef(!1),d=Ls(),f=P.useRef(null),p=P.useRef(null),m=P.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:i,rippleSize:a,cb:o}=e;s(e=>[...e,(0,F.jsx)(pc,{classes:{ripple:I(r.ripple,sc.ripple),rippleVisible:I(r.rippleVisible,sc.rippleVisible),ripplePulsate:I(r.ripplePulsate,sc.ripplePulsate),child:I(r.child,sc.child),childLeaving:I(r.childLeaving,sc.childLeaving),childPulsate:I(r.childPulsate,sc.childPulsate)},timeout:cc,pulsate:t,rippleX:n,rippleY:i,rippleSize:a},c.current)]),c.current+=1,l.current=o},[r]),h=P.useCallback((e={},t={},r=()=>{})=>{let{pulsate:i=!1,center:a=n||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&u.current){u.current=!1;return}e?.type===`touchstart`&&(u.current=!0);let s=o?null:p.current,c=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0},l,h,g;if(a||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)l=Math.round(c.width/2),h=Math.round(c.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-c.left),h=Math.round(n-c.top)}if(a)g=Math.sqrt((2*c.width**2+c.height**2)/3),g%2==0&&(g+=1);else{let e=Math.max(Math.abs((s?s.clientWidth:0)-l),l)*2+2,t=Math.max(Math.abs((s?s.clientHeight:0)-h),h)*2+2;g=Math.sqrt(e**2+t**2)}e?.touches?f.current===null&&(f.current=()=>{m({pulsate:i,rippleX:l,rippleY:h,rippleSize:g,cb:r})},d.start(80,()=>{f.current&&=(f.current(),null)})):m({pulsate:i,rippleX:l,rippleY:h,rippleSize:g,cb:r})},[n,m,d]),g=P.useCallback(()=>{h({},{pulsate:!0})},[h]),_=P.useCallback((e,t)=>{if(d.clear(),e?.type===`touchend`&&f.current){f.current(),f.current=null,d.start(0,()=>{_(e,t)});return}f.current=null,s(e=>e.length>0?e.slice(1):e),l.current=t},[d]);return P.useImperativeHandle(t,()=>({pulsate:g,start:h,stop:_}),[g,h,_]),(0,F.jsx)(fc,{className:I(sc.root,r.root,i),ref:p,...a,children:(0,F.jsx)(js,{component:null,exit:!0,children:o})})});function hc(e){return li(`MuiButtonBase`,e)}var gc=L(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),_c=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,suppressFocusVisible:i,classes:a}=e,o=ka({root:[`root`,t&&`disabled`,n&&!i&&`focusVisible`]},hc,a);return n&&!i&&r&&(o.root+=` ${r}`),o},vc=W(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${gc.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),yc=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:i=!1,children:a,className:o,component:s=`button`,disabled:c=!1,disableRipple:l=!1,disableTouchRipple:u=!1,focusRipple:d=!1,focusVisibleClassName:f,focusableWhenDisabled:p,suppressFocusVisible:m=!1,internalNativeButton:h,LinkComponent:g=`a`,nativeButton:_,onBlur:v,onClick:y,onContextMenu:b,onDragLeave:x,onFocus:S,onFocusVisible:C,onKeyDown:w,onKeyUp:ee,onMouseDown:T,onMouseLeave:te,onMouseUp:ne,onTouchEnd:re,onTouchMove:ie,onTouchStart:ae,tabIndex:E=0,TouchRippleProps:oe,touchRippleRef:D,type:se,...O}=n,k=!!(O.href||O.to),ce=!!O.formAction,le=s;le===`button`&&k&&(le=g);let ue=typeof le==`string`?le===`button`:h??!1,de=_??ue,A=ic(),j=cs(A.ref,D),[fe,pe]=P.useState(!1);(c||m)&&fe&&pe(!1);let me=os(e=>{d&&!e.repeat&&fe&&e.key===` `&&A.stop(e,()=>{A.start(e)})}),M=os(e=>{d&&e.key===` `&&fe&&!e.defaultPrevented&&A.stop(e,()=>{A.pulsate(e)})}),{getButtonProps:he,rootRef:N}=nc({nativeButton:de,nativeButtonProp:_,internalNativeButton:ue,allowInferredHostMismatch:k||typeof le==`string`,disabled:c,type:se,hasFormAction:ce,tabIndex:E,onBeforeKeyDown:me,onBeforeKeyUp:M}),{onClick:ge,onKeyDown:_e,onKeyUp:ve,...ye}=he({onClick:y,onKeyDown:w,onKeyUp:ee});P.useImperativeHandle(r,()=>({focusVisible:()=>{pe(!0),N.current.focus()}}),[N]);let be=A.shouldMount&&!l&&!c;P.useEffect(()=>{fe&&d&&!l&&A.pulsate()},[l,d,fe,A]);let xe=bc(A,`start`,T,u),Se=bc(A,`stop`,b,u),Ce=bc(A,`stop`,x,u),we=bc(A,`stop`,ne,u),Te=bc(A,`stop`,e=>{fe&&e.preventDefault(),te&&te(e)},u),Ee=bc(A,`start`,ae,u),De=bc(A,`stop`,re,u),Oe=bc(A,`stop`,ie,u),ke=bc(A,`stop`,e=>{$s(e.target)||pe(!1),v&&v(e)},!1),Ae=os(e=>{N.current||=e.currentTarget,!m&&$s(e.target)&&(pe(!0),C&&C(e)),S&&S(e)}),je={};k&&(je.tabIndex=c?-1:E,c&&(je[`aria-disabled`]=c),je.type=se);let Me=cs(t,N),Ne={...n,centerRipple:i,component:s,disabled:c,disableRipple:l,disableTouchRipple:u,focusRipple:d,suppressFocusVisible:m,tabIndex:E,focusVisible:fe},Pe=_c(Ne);return(0,F.jsxs)(vc,{as:le,className:I(Pe.root,o),ownerState:Ne,onBlur:ke,onClick:ge,onContextMenu:Se,onFocus:Ae,onKeyDown:_e,onKeyUp:ve,onMouseDown:xe,onMouseLeave:Te,onMouseUp:we,onDragLeave:Ce,onTouchEnd:De,onTouchMove:Oe,onTouchStart:Ee,ref:Me,...k?je:ye,...O,children:[a,be?(0,F.jsx)(mc,{ref:j,center:i,...oe}):null]})});function bc(e,t,n,r=!1){return os(i=>(n&&n(i),r||e[t](i),!0))}function xc(e){return typeof e.main==`string`}function Sc(e,t=[]){if(!xc(e))return!1;for(let n of t)if(!e.hasOwnProperty(n)||typeof e[n]!=`string`)return!1;return!0}function Cc(e=[]){return([,t])=>t&&Sc(t,e)}function wc(e){return li(`MuiCircularProgress`,e)}L(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDisableShrink`]);var Tc=44,Ec=Kt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,Dc=Kt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,Oc=typeof Ec==`string`?null:Gt`
        animation: ${Ec} 1.4s linear infinite;
      `,kc=typeof Dc==`string`?null:Gt`
        animation: ${Dc} 1.4s ease-in-out infinite;
      `,Ac=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e;return ka({root:[`root`,n,`color${Jo(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,i&&`circleDisableShrink`]},wc,t)},jc=W(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${Jo(n.color)}`]]}})(Zo(({theme:e})=>({display:`inline-block`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`transform`)}},{props:{variant:`indeterminate`},style:Oc||{animation:`${Ec} 1.4s linear infinite`}},...Object.entries(e.palette).filter(Cc()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),Mc=W(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),Nc=W(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,n.disableShrink&&t.circleDisableShrink]}})(Zo(({theme:e})=>({stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:kc||{animation:`${Dc} 1.4s ease-in-out infinite`}}]}))),Pc=W(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(Zo(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),Fc=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:a=!1,enableTrackSlot:o=!1,size:s=40,style:c,thickness:l=3.6,value:u=0,variant:d=`indeterminate`,...f}=n,p={...n,color:i,disableShrink:a,size:s,thickness:l,value:u,variant:d,enableTrackSlot:o},m=Ac(p),h={},g={},_={};if(d===`determinate`){let e=2*Math.PI*((Tc-l)/2);h.strokeDasharray=e.toFixed(3),_[`aria-valuenow`]=Math.round(u),h.strokeDashoffset=`${((100-u)/100*e).toFixed(3)}px`,g.transform=`rotate(-90deg)`}return(0,F.jsx)(jc,{className:I(m.root,r),style:{width:s,height:s,...g,...c},ownerState:p,ref:t,role:`progressbar`,..._,...f,children:(0,F.jsxs)(Mc,{className:m.svg,ownerState:p,viewBox:`${Tc/2} ${Tc/2} ${Tc} ${Tc}`,children:[o?(0,F.jsx)(Pc,{className:m.track,ownerState:p,cx:Tc,cy:Tc,r:(Tc-l)/2,fill:`none`,strokeWidth:l,"aria-hidden":`true`}):null,(0,F.jsx)(Nc,{className:m.circle,style:h,ownerState:p,cx:Tc,cy:Tc,r:(Tc-l)/2,fill:`none`,strokeWidth:l})]})})});function Ic(e){return li(`MuiTypography`,e)}L(`MuiTypography`,[`root`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`subtitle1`,`subtitle2`,`body1`,`body2`,`inherit`,`button`,`caption`,`overline`,`alignLeft`,`alignRight`,`alignCenter`,`alignJustify`,`noWrap`,`gutterBottom`]);var Lc=e=>{let{align:t,gutterBottom:n,noWrap:r,variant:i,classes:a}=e;return ka({root:[`root`,i,e.align!==`inherit`&&`align${Jo(t)}`,n&&`gutterBottom`,r&&`noWrap`]},Ic,a)},Rc=W(`span`,{name:`MuiTypography`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!==`inherit`&&t[`align${Jo(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom]}})(Zo(({theme:e})=>({margin:0,variants:[{props:{variant:`inherit`},style:{font:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`}},...Object.entries(e.typography).filter(([e,t])=>e!==`inherit`&&t&&typeof t==`object`).map(([e,t])=>({props:{variant:e},style:t})),...Object.entries(e.palette).filter(Cc()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette?.text||{}).filter(([,e])=>typeof e==`string`).map(([t])=>({props:{color:`text${Jo(t)}`},style:{color:(e.vars||e).palette.text[t]}})),{props:({ownerState:e})=>e.align!==`inherit`,style:{textAlign:`var(--Typography-textAlign)`}},{props:({ownerState:e})=>e.noWrap,style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:`0.35em`}}]}))),zc={h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,h6:`h6`,subtitle1:`h6`,subtitle2:`h6`,body1:`p`,body2:`p`,inherit:`p`},Bc=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiTypography`}),{color:r,align:i=`inherit`,className:a,component:o,gutterBottom:s=!1,noWrap:c=!1,variant:l=`body1`,variantMapping:u=zc,...d}=n,f={...n,align:i,color:r,className:a,component:o,gutterBottom:s,noWrap:c,variant:l,variantMapping:u};return(0,F.jsx)(Rc,{as:o||u[l]||zc[l]||`span`,ref:t,className:I(Lc(f).root,a),...d,ownerState:f,style:{...i!==`inherit`&&{"--Typography-textAlign":i},...d.style}})});function Vc(e){return li(`MuiAppBar`,e)}L(`MuiAppBar`,[`root`,`positionFixed`,`positionAbsolute`,`positionSticky`,`positionStatic`,`positionRelative`,`colorDefault`,`colorPrimary`,`colorSecondary`,`colorInherit`,`colorTransparent`,`colorError`,`colorInfo`,`colorSuccess`,`colorWarning`]);var Hc=e=>{let{color:t,position:n,classes:r}=e;return ka({root:[`root`,`color${Jo(t)}`,`position${Jo(n)}`]},Vc,r)},Uc=(e,t)=>e?`${e.replace(`)`,``)}, ${t})`:t,Wc=W(Qs,{name:`MuiAppBar`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`position${Jo(n.position)}`],t[`color${Jo(n.color)}`]]}})(Zo(({theme:e})=>({display:`flex`,flexDirection:`column`,width:`100%`,boxSizing:`border-box`,flexShrink:0,variants:[{props:{position:`fixed`},style:{position:`fixed`,zIndex:(e.vars||e).zIndex.appBar,top:0,left:`auto`,right:0,"@media print":{position:`absolute`}}},{props:{position:`absolute`},style:{position:`absolute`,zIndex:(e.vars||e).zIndex.appBar,top:0,left:`auto`,right:0}},{props:{position:`sticky`},style:{position:`sticky`,zIndex:(e.vars||e).zIndex.appBar,top:0,left:`auto`,right:0}},{props:{position:`static`},style:{position:`static`}},{props:{position:`relative`},style:{position:`relative`}},{props:{color:`inherit`},style:{"--AppBar-color":`inherit`,color:`var(--AppBar-color)`}},{props:{color:`default`},style:{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[100],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[100]),...e.applyStyles(`dark`,{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[900],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[900])})}},...Object.entries(e.palette).filter(Cc([`contrastText`])).map(([t])=>({props:{color:t},style:{"--AppBar-background":(e.vars??e).palette[t].main,"--AppBar-color":(e.vars??e).palette[t].contrastText}})),{props:e=>e.enableColorOnDark===!0&&![`inherit`,`transparent`].includes(e.color),style:{backgroundColor:`var(--AppBar-background)`,color:`var(--AppBar-color)`}},{props:e=>e.enableColorOnDark===!1&&![`inherit`,`transparent`].includes(e.color),style:{backgroundColor:`var(--AppBar-background)`,color:`var(--AppBar-color)`,...e.applyStyles(`dark`,{backgroundColor:e.vars?Uc(e.vars.palette.AppBar.darkBg,`var(--AppBar-background)`):null,color:e.vars?Uc(e.vars.palette.AppBar.darkColor,`var(--AppBar-color)`):null})}},{props:{color:`transparent`},style:{"--AppBar-background":`transparent`,"--AppBar-color":`inherit`,backgroundColor:`var(--AppBar-background)`,color:`var(--AppBar-color)`,...e.applyStyles(`dark`,{backgroundImage:`none`})}}]}))),Gc=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiAppBar`}),{className:r,color:i=`primary`,enableColorOnDark:a=!1,position:o=`fixed`,...s}=n,c={...n,color:i,position:o,enableColorOnDark:a};return(0,F.jsx)(Wc,{square:!0,component:`header`,ownerState:c,elevation:4,className:I(Hc(c).root,r,o===`fixed`&&`mui-fixed`),ref:t,...s})});function Kc(e){return e?.props?.ref||null}var qc=rs((0,F.jsx)(`path`,{d:`M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z`}),`Cancel`);function Jc(e){return li(`MuiChip`,e)}var G=L(`MuiChip`,[`root`,`sizeSmall`,`sizeMedium`,`colorDefault`,`colorError`,`colorInfo`,`colorPrimary`,`colorSecondary`,`colorSuccess`,`colorWarning`,`disabled`,`clickable`,`deletable`,`outlined`,`filled`,`avatar`,`icon`,`label`,`deleteIcon`,`focusVisible`]),Yc=e=>{let{classes:t,disabled:n,size:r,color:i,onDelete:a,clickable:o,variant:s}=e;return ka({root:[`root`,s,n&&`disabled`,`size${Jo(r)}`,`color${Jo(i)}`,o&&`clickable`,a&&`deletable`],label:[`label`],avatar:[`avatar`],icon:[`icon`],deleteIcon:[`deleteIcon`]},Jc,t)},Xc=W(`div`,{name:`MuiChip`,slot:`Root`,shouldForwardProp:e=>Bo(e)&&e!==`focusableWhenDisabled`&&e!==`skipFocusWhenDisabled`,overridesResolver:(e,t)=>{let{ownerState:n}=e,{color:r,clickable:i,onDelete:a,size:o,variant:s}=n;return[{[`& .${G.avatar}`]:t.avatar},{[`& .${G.icon}`]:t.icon},{[`& .${G.deleteIcon}`]:t.deleteIcon},t.root,t[`size${Jo(o)}`],t[`color${Jo(r)}`],i&&t.clickable,a&&t.deletable,t[s]]}})(Zo(({theme:e})=>{let t=e.palette.mode===`light`?e.palette.grey[700]:e.palette.grey[300];return{maxWidth:`100%`,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:`inline-flex`,alignItems:`center`,justifyContent:`center`,height:32,lineHeight:1.5,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:`nowrap`,transition:e.transitions.create([`background-color`,`box-shadow`]),cursor:`unset`,outline:0,textDecoration:`none`,border:0,padding:0,verticalAlign:`middle`,boxSizing:`border-box`,[`&.${G.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:`none`},[`& .${G.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:t,fontSize:e.typography.pxToRem(12)},[`& .${G.icon}`]:{marginLeft:5,marginRight:-6},[`& .${G.deleteIcon}`]:{WebkitTapHighlightColor:`transparent`,color:e.alpha((e.vars||e).palette.text.primary,.26),fontSize:22,cursor:`pointer`,margin:`0 5px 0 -6px`,"&:hover":{color:e.alpha((e.vars||e).palette.text.primary,.4)}},variants:[{props:{color:`primary`},style:{[`& .${G.avatar}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark}}},{props:{color:`secondary`},style:{[`& .${G.avatar}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark}}},{props:{size:`small`},style:{height:24,[`& .${G.avatar}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${G.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${G.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(e.palette).filter(Cc([`contrastText`])).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main,color:(e.vars||e).palette[t].contrastText,[`& .${G.deleteIcon}`]:{color:e.alpha((e.vars||e).palette[t].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t].contrastText}}}})),{props:e=>e.iconColor===e.color,style:{[`& .${G.icon}`]:{color:e.vars?e.vars.palette.Chip.defaultIconColor:t}}},{props:e=>e.iconColor===e.color&&e.color!==`default`,style:{[`& .${G.icon}`]:{color:`inherit`}}},{props:{onDelete:!0},style:{[`&.${G.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}}},...Object.entries(e.palette).filter(Cc([`dark`])).map(([t])=>({props:{color:t,onDelete:!0},style:{[`&.${G.focusVisible}`]:{background:(e.vars||e).palette[t].dark}}})),{props:{clickable:!0},style:{userSelect:`none`,WebkitTapHighlightColor:`transparent`,cursor:`pointer`,"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`)},[`&.${G.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.action.selected,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)},"&:active":{boxShadow:(e.vars||e).shadows[1]}}},...Object.entries(e.palette).filter(Cc([`dark`])).map(([t])=>({props:{color:t,clickable:!0},style:{[`&:hover, &.${G.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t].dark}}})),{props:{variant:`outlined`},style:{backgroundColor:`transparent`,border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode===`light`?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${G.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${G.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${G.avatar}`]:{marginLeft:4},[`& .${G.icon}`]:{marginLeft:4},[`& .${G.deleteIcon}`]:{marginRight:5}}},{props:{size:`small`,variant:`outlined`},style:{[`& .${G.avatar}`]:{marginLeft:2},[`& .${G.icon}`]:{marginLeft:2},[`& .${G.deleteIcon}`]:{marginRight:3}}},...Object.entries(e.palette).filter(Cc()).map(([t])=>({props:{variant:`outlined`,color:t},style:{color:(e.vars||e).palette[t].main,border:`1px solid ${e.alpha((e.vars||e).palette[t].main,.7)}`,[`&.${G.clickable}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity)},[`&.${G.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.focusOpacity)},[`& .${G.deleteIcon}`]:{color:e.alpha((e.vars||e).palette[t].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t].main}}}}))]}})),Zc=W(`span`,{name:`MuiChip`,slot:`Label`})({overflow:`hidden`,textOverflow:`ellipsis`,paddingLeft:12,paddingRight:12,whiteSpace:`nowrap`,variants:[{props:{variant:`outlined`},style:{paddingLeft:11,paddingRight:11}},{props:{size:`small`},style:{paddingLeft:8,paddingRight:8}},{props:{size:`small`,variant:`outlined`},style:{paddingLeft:7,paddingRight:7}}]});function Qc(e){return e.key===`Backspace`||e.key===`Delete`}var $c=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiChip`}),{avatar:r,className:i,clickable:a,color:o=`default`,component:s,deleteIcon:c,disabled:l=!1,icon:u,label:d,onClick:f,onDelete:p,onKeyDown:m,onKeyUp:h,size:g=`medium`,variant:_=`filled`,tabIndex:v,skipFocusWhenDisabled:y=!1,slots:b={},slotProps:x={},...S}=n,{nativeButton:C,...w}=S,ee=cs(P.useRef(null),t),T=e=>{e.stopPropagation(),p(e)},te=e=>{e.currentTarget===e.target&&Qc(e)&&e.preventDefault(),m&&m(e)},ne=e=>{e.currentTarget===e.target&&p&&Qc(e)&&p(e),h&&h(e)},re=a!==!1&&f?!0:a,ie=re||p?yc:s||`div`,ae={...n,component:ie,disabled:l,size:g,color:o,iconColor:P.isValidElement(u)&&u.props.color||o,onDelete:!!p,clickable:re,variant:_},E=Yc(ae),oe=ie===yc?{component:s||`div`,internalNativeButton:!1,focusVisibleClassName:E.focusVisible,...p&&{disableRipple:!0},...C!==void 0&&{nativeButton:C}}:{},D=null;p&&(D=c&&P.isValidElement(c)?P.cloneElement(c,{className:I(c.props.className,E.deleteIcon),onClick:T}):(0,F.jsx)(qc,{className:E.deleteIcon,onClick:T}));let se=null;r&&P.isValidElement(r)&&(se=P.cloneElement(r,{className:I(E.avatar,r.props.className)}));let O=null;u&&P.isValidElement(u)&&(O=P.cloneElement(u,{className:I(E.icon,u.props.className)}));let k={slots:b,slotProps:x},[ce,le]=Js(`root`,{elementType:Xc,externalForwardedProps:{...k,...w},ownerState:ae,shouldForwardComponentProp:!0,ref:ee,className:I(E.root,i),additionalProps:{disabled:re&&l?!0:void 0,tabIndex:y&&l?-1:v,...oe},getSlotProps:e=>({...e,onClick:t=>{e.onClick?.(t),f?.(t)},onKeyDown:t=>{e.onKeyDown?.(t),te(t)},onKeyUp:t=>{e.onKeyUp?.(t),ne(t)}})}),[ue,de]=Js(`label`,{elementType:Zc,externalForwardedProps:k,ownerState:ae,className:E.label});return(0,F.jsxs)(ce,{as:ie,...le,children:[se||O,(0,F.jsx)(ue,{...de,children:d}),D]})}),el={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},tl={opacity:0,visibility:`hidden`},nl=P.forwardRef(function(e,t){let n=Ro(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:i,appear:a=!0,children:o,easing:s,in:c,onEnter:l,onEntered:u,onEntering:d,onExit:f,onExited:p,onExiting:m,style:h,timeout:g=r,..._}=e,v=P.useRef(null),y=cs(v,Kc(o),t),b=zs(v,d),x=zs(v,(e,t)=>{Rs(e);let r=Vs({style:h,timeout:g,easing:s},{mode:`enter`});e.style.transition=n.transitions.create(`opacity`,r),l&&l(e,t)}),S=zs(v,u),C=zs(v,m),w=zs(v,e=>{let t=Vs({style:h,timeout:g,easing:s},{mode:`exit`});e.style.transition=n.transitions.create(`opacity`,t),f&&f(e)}),ee=zs(v,e=>{e.style.transition=``,p&&p(e)});return(0,F.jsx)(xs,{appear:a,in:c,nodeRef:v,onEnter:x,onEntered:S,onEntering:b,onExit:w,onExited:ee,onExiting:C,addEndListener:e=>{i&&i(v.current,e)},timeout:g,..._,children:(e,{ownerState:t,...n})=>{let r=Bs(e,c,el,tl,h,o.props.style);return P.cloneElement(o,{style:r,ref:y,...n})}})}),rl=L(`MuiBox`,[`root`]),il=si({themeId:T,defaultTheme:Io(),defaultClassName:rl.root,generateClassName:ai.generate});function al(e){return li(`MuiButton`,e)}var ol=L(`MuiButton`,`root.text.outlined.contained.disableElevation.focusVisible.disabled.colorInherit.colorPrimary.colorSecondary.colorSuccess.colorError.colorInfo.colorWarning.sizeMedium.sizeSmall.sizeLarge.fullWidth.startIcon.endIcon.icon.loading.loadingWrapper.loadingIconPlaceholder.loadingIndicator.loadingPositionCenter.loadingPositionStart.loadingPositionEnd`.split(`.`)),sl=P.createContext({}),cl=P.createContext(void 0),ll=e=>{let{color:t,disableElevation:n,fullWidth:r,size:i,variant:a,loading:o,loadingPosition:s,classes:c}=e,l=ka({root:[`root`,o&&`loading`,a,`size${Jo(i)}`,`color${Jo(t)}`,n&&`disableElevation`,r&&`fullWidth`,o&&`loadingPosition${Jo(s)}`],startIcon:[`icon`,`startIcon`],endIcon:[`icon`,`endIcon`],loadingIndicator:[`loadingIndicator`],loadingWrapper:[`loadingWrapper`]},al,c);return{...c,...l}},ul=[{props:{size:`small`},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:`medium`},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:`large`},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],dl=W(yc,{shouldForwardProp:e=>Bo(e)||e===`classes`,name:`MuiButton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`size${Jo(n.size)}`],n.color===`inherit`&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,n.loading&&t.loading]}})(Zo(({theme:e})=>{let t=e.palette.mode===`light`?e.palette.grey[300]:e.palette.grey[800],n=e.palette.mode===`light`?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:`6px 16px`,border:0,borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create([`background-color`,`box-shadow`,`border-color`,`color`],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:`none`},[`&.${ol.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:`contained`},style:{color:`var(--variant-containedColor)`,backgroundColor:`var(--variant-containedBg)`,boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${ol.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${ol.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:`outlined`},style:{padding:`5px 15px`,border:`1px solid currentColor`,borderColor:`var(--variant-outlinedBorder, currentColor)`,backgroundColor:`var(--variant-outlinedBg)`,color:`var(--variant-outlinedColor)`,[`&.${ol.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:`text`},style:{padding:`6px 8px`,color:`var(--variant-textColor)`,backgroundColor:`var(--variant-textBg)`}},...Object.entries(e.palette).filter(Cc()).map(([t])=>({props:{color:t},style:{"--variant-textColor":(e.vars||e).palette[t].main,"--variant-outlinedColor":(e.vars||e).palette[t].main,"--variant-outlinedBorder":e.alpha((e.vars||e).palette[t].main,.5),"--variant-containedColor":(e.vars||e).palette[t].contrastText,"--variant-containedBg":(e.vars||e).palette[t].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[t].dark,"--variant-textBg":e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[t].main,"--variant-outlinedBg":e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity)}}}})),{props:{color:`inherit`},style:{color:`inherit`,borderColor:`currentColor`,"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"--variant-outlinedBg":e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity)}}}},{props:{size:`small`,variant:`text`},style:{padding:`4px 5px`,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`,variant:`text`},style:{padding:`8px 11px`,fontSize:e.typography.pxToRem(15)}},{props:{size:`small`,variant:`outlined`},style:{padding:`3px 9px`,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`,variant:`outlined`},style:{padding:`7px 21px`,fontSize:e.typography.pxToRem(15)}},{props:{size:`small`,variant:`contained`},style:{padding:`4px 10px`,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`,variant:`contained`},style:{padding:`8px 22px`,fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:`none`,"&:hover":{boxShadow:`none`},[`&.${ol.focusVisible}`]:{boxShadow:`none`},"&:active":{boxShadow:`none`},[`&.${ol.disabled}`]:{boxShadow:`none`}}},{props:{fullWidth:!0},style:{width:`100%`}},{props:{loadingPosition:`center`},style:{transition:e.transitions.create([`background-color`,`box-shadow`,`border-color`],{duration:e.transitions.duration.short}),[`&.${ol.loading}`]:{color:`transparent`}}}]}})),fl=W(`span`,{name:`MuiButton`,slot:`StartIcon`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,n.loading&&t.startIconLoadingStart]}})(({theme:e})=>({display:`inherit`,marginRight:8,marginLeft:-4,variants:[{props:{size:`small`},style:{marginLeft:-2}},{props:{loadingPosition:`start`,loading:!0},style:{transition:e.transitions.create([`opacity`],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:`start`,loading:!0,fullWidth:!0},style:{marginRight:-8}},...ul]})),pl=W(`span`,{name:`MuiButton`,slot:`EndIcon`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,n.loading&&t.endIconLoadingEnd]}})(({theme:e})=>({display:`inherit`,marginRight:-4,marginLeft:8,variants:[{props:{size:`small`},style:{marginRight:-2}},{props:{loadingPosition:`end`,loading:!0},style:{transition:e.transitions.create([`opacity`],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:`end`,loading:!0,fullWidth:!0},style:{marginLeft:-8}},...ul]})),ml=W(`span`,{name:`MuiButton`,slot:`LoadingIndicator`})(({theme:e})=>({display:`none`,position:`absolute`,visibility:`visible`,variants:[{props:{loading:!0},style:{display:`flex`}},{props:{loadingPosition:`start`},style:{left:14}},{props:{loadingPosition:`start`,size:`small`},style:{left:10}},{props:{variant:`text`,loadingPosition:`start`},style:{left:6}},{props:{loadingPosition:`center`},style:{left:`50%`,transform:`translate(-50%)`,color:(e.vars||e).palette.action.disabled}},{props:{loadingPosition:`end`},style:{right:14}},{props:{loadingPosition:`end`,size:`small`},style:{right:10}},{props:{variant:`text`,loadingPosition:`end`},style:{right:6}},{props:{loadingPosition:`start`,fullWidth:!0},style:{position:`relative`,left:-10}},{props:{loadingPosition:`end`,fullWidth:!0},style:{position:`relative`,right:-10}}]})),hl=W(`span`,{name:`MuiButton`,slot:`LoadingIconPlaceholder`})({display:`inline-block`,width:`1em`,height:`1em`}),gl=P.forwardRef(function(e,t){let n=P.useContext(sl),r=P.useContext(cl),i=Qo({props:Si(n,e),name:`MuiButton`}),{children:a,color:o=`primary`,component:s=`button`,className:c,disabled:l=!1,disableElevation:u=!1,disableFocusRipple:d=!1,endIcon:f,focusVisibleClassName:p,fullWidth:m=!1,id:h,loading:g=null,loadingIndicator:_,loadingPosition:v=`center`,size:y=`medium`,startIcon:b,type:x,variant:S=`text`,...C}=i,w=is(h),ee=_??(0,F.jsx)(Fc,{"aria-labelledby":w,color:`inherit`,size:16}),T={...i,color:o,component:s,disabled:l,disableElevation:u,disableFocusRipple:d,fullWidth:m,loading:g,loadingIndicator:ee,loadingPosition:v,size:y,type:x,variant:S},te=ll(T),ne=(b||g&&v===`start`)&&(0,F.jsx)(fl,{className:te.startIcon,ownerState:T,children:b||(0,F.jsx)(hl,{className:te.loadingIconPlaceholder,ownerState:T})}),re=(f||g&&v===`end`)&&(0,F.jsx)(pl,{className:te.endIcon,ownerState:T,children:f||(0,F.jsx)(hl,{className:te.loadingIconPlaceholder,ownerState:T})}),ie=r||``,ae=typeof g==`boolean`?(0,F.jsx)(`span`,{className:te.loadingWrapper,style:{display:`contents`},children:g&&(0,F.jsx)(ml,{className:te.loadingIndicator,ownerState:T,children:ee})}):null;return(0,F.jsxs)(dl,{ownerState:T,className:I(n.className,te.root,c,ie),component:s,disabled:l||g,focusRipple:!d,focusVisibleClassName:I(te.focusVisible,p),ref:t,internalNativeButton:!0,type:x,id:g?w:h,...C,classes:te,children:[ne,v!==`end`&&ae,a,v===`end`&&ae,re]})});function _l(e){return li(`MuiCard`,e)}L(`MuiCard`,[`root`]);var vl=e=>{let{classes:t}=e;return ka({root:[`root`]},_l,t)},yl=W(Qs,{name:`MuiCard`,slot:`Root`})({overflow:`hidden`}),bl=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiCard`}),{className:r,raised:i=!1,...a}=n,o={...n,raised:i};return(0,F.jsx)(yl,{className:I(vl(o).root,r),elevation:i?8:void 0,ref:t,ownerState:o,...a})});function xl(e){return li(`MuiCardContent`,e)}L(`MuiCardContent`,[`root`]);var Sl=e=>{let{classes:t}=e;return ka({root:[`root`]},xl,t)},Cl=W(`div`,{name:`MuiCardContent`,slot:`Root`})({padding:16,"&:last-child":{paddingBottom:24}}),wl=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiCardContent`}),{className:r,component:i=`div`,...a}=n,o={...n,component:i};return(0,F.jsx)(Cl,{as:i,className:I(Sl(o).root,r),ownerState:o,ref:t,...a})}),Tl=typeof Xo({})==`function`,El=(e,t)=>({WebkitFontSmoothing:`antialiased`,MozOsxFontSmoothing:`grayscale`,boxSizing:`border-box`,WebkitTextSizeAdjust:`100%`,...t&&!e.vars&&{colorScheme:e.palette.mode}}),Dl=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),Ol=(e,t=!1)=>{let n={};t&&e.colorSchemes&&typeof e.getColorSchemeSelector==`function`&&Object.entries(e.colorSchemes).forEach(([t,r])=>{let i=e.getColorSchemeSelector(t);i.startsWith(`@`)?n[i]={":root":{colorScheme:r.palette?.mode}}:n[i.replace(/\s*&/,``)]={colorScheme:r.palette?.mode}});let r={html:El(e,t),"*, *::before, *::after":{boxSizing:`inherit`},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...Dl(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...n},i=e.components?.MuiCssBaseline?.styleOverrides;return i&&(r=[r,i]),r},kl=`mui-ecs`,Al=e=>{let t=Ol(e,!1),n=Array.isArray(t)?t[0]:t;return!e.vars&&n&&(n.html[`:root:has(${kl})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,r])=>{let i=e.getColorSchemeSelector(t);i.startsWith(`@`)?n[i]={[`:root:not(:has(.${kl}))`]:{colorScheme:r.palette?.mode}}:n[i.replace(/\s*&/,``)]={[`&:not(:has(.${kl}))`]:{colorScheme:r.palette?.mode}}}),t},jl=Xo(Tl?({theme:e,enableColorScheme:t})=>Ol(e,t):({theme:e})=>Al(e));function Ml(e){let{children:t,enableColorScheme:n=!1}=Qo({props:e,name:`MuiCssBaseline`});return(0,F.jsxs)(P.Fragment,{children:[Tl&&(0,F.jsx)(jl,{enableColorScheme:n}),!Tl&&!n&&(0,F.jsx)(`span`,{className:kl,style:{display:`none`}}),t]})}function Nl(e){return li(`MuiLinearProgress`,e)}L(`MuiLinearProgress`,[`root`,`colorPrimary`,`colorSecondary`,`determinate`,`indeterminate`,`buffer`,`query`,`dashed`,`bar`,`bar1`,`bar2`]);var Pl=4,Fl=Kt`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,Il=typeof Fl==`string`?null:Gt`
        animation: ${Fl} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `,Ll=Kt`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,Rl=typeof Ll==`string`?null:Gt`
        animation: ${Ll} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `,K=Kt`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,q=typeof K==`string`?null:Gt`
        animation: ${K} 3s infinite linear;
      `,J=e=>{let{classes:t,variant:n,color:r}=e;return ka({root:[`root`,`color${Jo(r)}`,n],dashed:[`dashed`],bar1:[`bar`,`bar1`],bar2:[`bar`,`bar2`,n===`buffer`&&`color${Jo(r)}`]},Nl,t)},Y=(e,t)=>e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:e.palette.mode===`light`?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.5),X=W(`span`,{name:`MuiLinearProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`color${Jo(n.color)}`],t[n.variant]]}})(Zo(({theme:e})=>({position:`relative`,overflow:`hidden`,display:`block`,height:4,zIndex:0,"@media print":{colorAdjust:`exact`},variants:[...Object.entries(e.palette).filter(Cc()).map(([t])=>({props:{color:t},style:{backgroundColor:Y(e,t)}})),{props:({ownerState:e})=>e.color===`inherit`&&e.variant!==`buffer`,style:{"&::before":{content:`""`,position:`absolute`,left:0,top:0,right:0,bottom:0,backgroundColor:`currentColor`,opacity:.3}}},{props:{variant:`buffer`},style:{backgroundColor:`transparent`}},{props:{variant:`query`},style:{transform:`rotate(180deg)`}}]}))),zl=W(`span`,{name:`MuiLinearProgress`,slot:`Dashed`})(Zo(({theme:e})=>({position:`absolute`,marginTop:0,height:`100%`,width:`100%`,backgroundSize:`10px 10px`,backgroundPosition:`0 -23px`,variants:[{props:{color:`inherit`},style:{opacity:.3,backgroundImage:`radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`}},...Object.entries(e.palette).filter(Cc()).map(([t])=>{let n=Y(e,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`}}})]})),q||{animation:`${K} 3s infinite linear`}),Bl=W(`span`,{name:`MuiLinearProgress`,slot:`Bar1`,overridesResolver:(e,t)=>[t.bar,t.bar1]})(Zo(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[{props:{color:`inherit`},style:{backgroundColor:`currentColor`}},...Object.entries(e.palette).filter(Cc()).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main}})),{props:{variant:`determinate`},style:{transition:`transform .${Pl}s linear`}},{props:{variant:`buffer`},style:{zIndex:1,transition:`transform .${Pl}s linear`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:Il||{animation:`${Fl} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),Vl=W(`span`,{name:`MuiLinearProgress`,slot:`Bar2`,overridesResolver:(e,t)=>[t.bar,t.bar2]})(Zo(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[...Object.entries(e.palette).filter(Cc()).map(([t])=>({props:{color:t},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[t].main}})),{props:({ownerState:e})=>e.variant!==`buffer`&&e.color!==`inherit`,style:{backgroundColor:`var(--LinearProgressBar2-barColor, currentColor)`}},{props:({ownerState:e})=>e.variant!==`buffer`&&e.color===`inherit`,style:{backgroundColor:`currentColor`}},{props:{color:`inherit`},style:{opacity:.3}},...Object.entries(e.palette).filter(Cc()).map(([t])=>({props:{color:t,variant:`buffer`},style:{backgroundColor:Y(e,t),transition:`transform .${Pl}s linear`}})),{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:Rl||{animation:`${Ll} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),Hl=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiLinearProgress`}),{className:r,color:i=`primary`,value:a,valueBuffer:o,variant:s=`indeterminate`,...c}=n,l={...n,color:i,variant:s},u=J(l),d=Ji(),f={},p={bar1:{},bar2:{}};if((s===`determinate`||s===`buffer`)&&a!==void 0){f[`aria-valuenow`]=Math.round(a),f[`aria-valuemin`]=0,f[`aria-valuemax`]=100;let e=a-100;d&&(e=-e),p.bar1.transform=`translateX(${e}%)`}if(s===`buffer`&&o!==void 0){let e=(o||0)-100;d&&(e=-e),p.bar2.transform=`translateX(${e}%)`}return(0,F.jsxs)(X,{className:I(u.root,r),ownerState:l,role:`progressbar`,...f,ref:t,...c,children:[s===`buffer`?(0,F.jsx)(zl,{className:u.dashed,ownerState:l}):null,(0,F.jsx)(Bl,{className:u.bar1,ownerState:l,style:p.bar1}),s===`determinate`?null:(0,F.jsx)(Vl,{className:u.bar2,ownerState:l,style:p.bar2})]})}),Ul={entering:{transform:`none`},entered:{transform:`none`},exiting:{transform:`scale(0)`},exited:{transform:`scale(0)`}},Wl={transform:`scale(0)`,visibility:`hidden`},Gl=P.forwardRef(function(e,t){let n=Ro(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:i,appear:a=!0,children:o,easing:s,in:c,onEnter:l,onEntered:u,onEntering:d,onExit:f,onExited:p,onExiting:m,style:h,timeout:g=r,..._}=e,v=P.useRef(null),y=cs(v,Kc(o),t),b=zs(v,d),x=zs(v,(e,t)=>{Rs(e);let r=Vs({style:h,timeout:g,easing:s},{mode:`enter`});e.style.transition=n.transitions.create(`transform`,r),l&&l(e,t)}),S=zs(v,u),C=zs(v,m),w=zs(v,e=>{let t=Vs({style:h,timeout:g,easing:s},{mode:`exit`});e.style.transition=n.transitions.create(`transform`,t),f&&f(e)}),ee=zs(v,e=>{e.style.transition=``,p&&p(e)});return(0,F.jsx)(xs,{appear:a,in:c,nodeRef:v,onEnter:x,onEntered:S,onEntering:b,onExit:w,onExited:ee,onExiting:C,addEndListener:e=>{i&&i(v.current,e)},timeout:g,..._,children:(e,{ownerState:t,...n})=>{let r=Bs(e,c,Ul,Wl,h,o.props.style);return P.cloneElement(o,{style:r,ref:y,...n})}})}),Kl=Ia({createStyledComponent:W(`div`,{name:`MuiStack`,slot:`Root`}),useThemeProps:e=>Qo({props:e,name:`MuiStack`})});function ql(e){return li(`MuiToolbar`,e)}L(`MuiToolbar`,[`root`,`gutters`,`regular`,`dense`]);var Jl=e=>{let{classes:t,disableGutters:n,variant:r}=e;return ka({root:[`root`,!n&&`gutters`,r]},ql,t)},Yl=W(`div`,{name:`MuiToolbar`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})(Zo(({theme:e})=>({position:`relative`,display:`flex`,alignItems:`center`,variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up(`sm`)]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:`dense`},style:{minHeight:48}},{props:{variant:`regular`},style:e.mixins.toolbar}]}))),Xl=P.forwardRef(function(e,t){let n=Qo({props:e,name:`MuiToolbar`}),{className:r,component:i=`div`,disableGutters:a=!1,variant:o=`regular`,...s}=n,c={...n,component:i,disableGutters:a,variant:o};return(0,F.jsx)(Yl,{as:i,className:I(Jl(c).root,r),ref:t,ownerState:c,...s})}),Zl=rs((0,F.jsx)(`path`,{d:`m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z`}),`AutoAwesome`),Ql=rs((0,F.jsx)(`path`,{d:`M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z`}),`Cancel`),$l=rs((0,F.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z`}),`CheckCircle`),eu=rs((0,F.jsx)(`path`,{d:`M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z`}),`EmojiEvents`),tu=rs((0,F.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),nu=rs((0,F.jsx)(`path`,{d:`M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z`}),`School`),ru=rs((0,F.jsx)(`path`,{d:`m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08z`}),`StarRounded`),iu=c(g(),1),au=`1.Система обобщенных взглядов на окружающую действительность -- это:\r
\r
а) наука\r
\r
б) мировоззрение\r
\r
в) философия\r
\r
г) культура\r
\r
д) искусство\r
\r
2.Объектом философского исследования является:\r
\r
а) культура\r
\r
б) человек и его место в мире\r
\r
в) социальные структуры\r
\r
г) закономерности природного бытия\r
\r
д) мир как целостность\r
\r
3.Материализм -- это:\r
\r
а) философское направление, утверждающее первичность материи\r
\r
б) принцип философского исследования\r
\r
в) учение о материальности мира\r
\r
г) провозглашение приоритета чувственных удовольствий\r
\r
д) философское направление, утверждающее первичность сознания\r
\r
4.Выберите в предложенных суждениях идеализм:\r
\r
а) сознание есть продукт материи\r
\r
б) сознание неразрывно связано с материей\r
\r
в) сознание может существовать до и независимо от материи\r
\r
г) сознание не всегда адекватно отражает материю\r
\r
д) нет верного ответа\r
\r
5.Кто из мыслителей античности ввел в обиход слово «философия»?\r
\r
а) Демокрит\r
\r
б) Гераклит\r
\r
в) Пифагор\r
\r
г) Сократ\r
\r
д) Анаксимен\r
\r
6.Предметом философского исследования являются:\r
\r
а) благо\r
\r
б) всеобщие законы и принципы\r
\r
в) общественно-исторический процесс\r
\r
г) законы мышления\r
\r
д) мораль\r
\r
7.Учение о единой субстанции в основе мира -- это:\r
\r
а) плюрализм\r
\r
б) монизм\r
\r
в) материализм\r
\r
г) дуализм\r
\r
д) скептицизм\r
\r
8.Какое из нижеперечисленных определений философии первоначальное?\r
\r
а) любовь к мудрости\r
\r
б) душа культуры\r
\r
в) учение о мудрости\r
\r
г) форма теоретического мировоззрения\r
\r
д) учение о нравственности\r
\r
9.Раздел философии -- гносеология:\r
\r
а) искусство\r
\r
б) учение о ценностях\r
\r
в) учение о познании\r
\r
г) учение о человека\r
\r
д) учение об обществе\r
\r
10.Самой ранней мировой религией является:\r
\r
а) христианство\r
\r
б) буддизм\r
\r
в) ислам\r
\r
г) иудаизм\r
\r
д) конфуцианство\r
\r
11.Раздел философии -- онтология:\r
\r
а) логика\r
\r
б) учение о методах познания\r
\r
в) учение о бытии\r
\r
г) учение о человека\r
\r
д) учение об обществе\r
\r
12.Существенной чертой мифологического миропонимания является:\r
\r
а) благоговейное отношение к природе\r
\r
б) убеждение в особом предназначении человека\r
\r
в) вера в сверхъестественные силы\r
\r
г) представление о тождестве субъекта и объекта\r
\r
д) связь с идеологией\r
\r
13.Отличие менталитета от мировоззрения заключается в том, что\r
\r
менталитет:\r
\r
а) является синонимом только ценностных ориентации\r
\r
б) формируется на бессознательном уровне\r
\r
в) существует исключительно в сфере рационального\r
\r
г) связан единственно с убеждениями\r
\r
д) связан с идеологией\r
\r
14.Сущность второй стороны основного вопроса философии:\r
\r
а) может ли человечество знать обо всем\r
\r
б) можно ли в процессе познания получить точное знание обо всем мире\r
\r
в) можно ли познать сущность вещей, законы материального мира\r
\r
г) что первично материя или сознание\r
\r
д) нет верного ответа\r
\r
15.Укажите правильное определение мировоззрения:\r
\r
а) понятийная форма мышления\r
\r
б) общественная форма сознания\r
\r
в) окружающий мир человека\r
\r
г) система взглядов на мир\r
\r
д) интегральное образование человеческого знания\r
\r
16.Укажите три исторических типа мировоззрения:\r
\r
а) наука, право и политика\r
\r
б) искусство, наука и политика\r
\r
в) мораль, право и религия\r
\r
г) миф, религия и философия\r
\r
д) мораль, искусство и миф\r
\r
17.Укажите, какое из ниже перечисленных соотношений представляет\r
основной вопрос философии:\r
\r
а) веры и разума\r
\r
б) чувственного познания и абстрактного мышления\r
\r
в) теории и практики\r
\r
г) цивилизации и культуры\r
\r
д) материи и сознания\r
\r
18.Укажите основные направления философии:\r
\r
а) материализм и реализм\r
\r
б) номинализм и реализм\r
\r
в) сциентизм и антисциентизм\r
\r
г) материализм и идеализм\r
\r
д) идеализм и реализм\r
\r
19.Выделите, как переводится «философия» с древнегреческого:\r
\r
а ) наука о мудрости\r
\r
б) метафизика удивления\r
\r
в) наука о мышлении\r
\r
г) любовь к мудрости\r
\r
д) любовь к слову\r
\r
20.Определите мировоззренческую функцию философии:\r
\r
а) подвергает сомнению окружающий мир\r
\r
б) вырабатывает основные методы познания окружающей действительности\r
\r
в) на основании имеющихся философских знаний об окружающем мире и\r
человеке даёт возможность предвидеть тенденции развитии человека,\r
природы, общества\r
\r
г) даёт достоверное познание окружающей действительности\r
\r
д) способствует формированию целостности картины мира\r
\r
21.Определите познавательную функцию философии:\r
\r
а) подвергает сомнению окружающий мир\r
\r
б) даёт достоверное познание окружающей действительности\r
\r
в) способствует формированию целостности картины мира\r
\r
г) даёт возможность предвидеть тенденции развитии человека, природы,\r
общества\r
\r
д) вырабатывает основные методы познания окружающей действительности\r
\r
22.Определите методологическую функцию философию:\r
\r
а) даёт достоверное познание окружающей действительности\r
\r
б) вырабатывает основные методы познания окружающей действительности\r
\r
в) способствует формированию целостности картины мира\r
\r
г) даёт возможность предвидеть тенденции развитии человека, природы,\r
общества\r
\r
д) подвергает сомнению окружающий мир\r
\r
23.Определите прогностическую функцию философии:\r
\r
а) подвергает сомнению окружающий мир\r
\r
б) вырабатывает основные методы познания окружающей действительности\r
\r
в) даёт достоверное познание окружающей действительности\r
\r
г) способствует формированию целостности картины мира\r
\r
д) на основании имеющихся философских знаний об окружающем мире и\r
человеке даёт возможность предвидеть тенденции развития человека,\r
природы, общества.\r
\r
24.В чем смысл философии?\r
\r
а) поиск и обоснование веры\r
\r
б) поиск истины, добра и красоты\r
\r
в) поиск идеала красоты\r
\r
г) анализ природных явлений\r
\r
д) анализ общественных явлений\r
\r
25.Выделите один из исторических типов мировоззрения:\r
\r
а) мораль\r
\r
б) искусство\r
\r
в) философия\r
\r
г) экология\r
\r
д) право\r
\r
26.Определите специфическую черту философии:\r
\r
а) обыденное знание\r
\r
б) обобщенное знание\r
\r
в) практическое знание\r
\r
г) конкретное знание\r
\r
д) частное знание\r
\r
27.Философия возникла:\r
\r
а) в Древней Греции\r
\r
б) одновременно в древней Индии, Китае и Греции\r
\r
в) в Европе\r
\r
г) в Древнем Китае\r
\r
д) в Древней Индии\r
\r
28.Кастовый строй -- общая черта многих древневосточных цивилизаций. Где\r
кастовый строй получил классическое воплощение?\r
\r
а) в Китае\r
\r
б) в Индии\r
\r
в) в Вавилоне\r
\r
г) в Двуречье\r
\r
д) в древней Греции\r
\r
29.Постепенное изменение смысла понятия «карма» приводит его к\r
\r
следующему значению:\r
\r
а) принцип недеяния\r
\r
б) внешние обстоятельства, неподвластные контролю со стороны человека\r
\r
в) темная, враждебная сторона человеческой природы, которую следует\r
\r
подавлять\r
\r
г) необходимость тщательного исполнения обязанностей своей варны и касты\r
\r
д) закон космического воздаяния за любое действие, которое нарушает\r
мировое равновесие\r
\r
30.Что такое Веды?\r
\r
а) одно из главных философских понятий древней Индии\r
\r
б) древнейшие письменные (кон.II -- нач.1 тыс. до н.э.) памятники\r
\r
индийской культуры\r
\r
в) мощная и влиятельная религиозно-философская система в Индии\r
\r
г) магическая формула, имеющая внутреннюю силу воздействия\r
\r
д) литературный памятник древнего Китая\r
\r
31.Назовите китайского философа, который считается основателем\r
\r
даосизма:\r
\r
а) Лао-цзы\r
\r
б) Конфуций\r
\r
в) Мо-цзы\r
\r
г) Шан-ян\r
\r
д) Сидхартха\r
\r
32.Основными этическими принципами даосизма являются:\r
\r
а) принцип утилитаризма\r
\r
б) принципы морального анархизма и бездействия\r
\r
в) принципы ненасилия и всепрощения\r
\r
г) принципы индивидуализма и гедонизма\r
\r
д) принципы недеяния и спонтанности\r
\r
33.Основателем буддизма является:\r
\r
а) Мо-Цзы\r
\r
б) Конфуций\r
\r
в) Сидхартха\r
\r
г) Шан-ян\r
\r
д) Лао-цзы\r
\r
34.Натурфилософия -- это:\r
\r
а) одна из философских категорий\r
\r
б) синоним материализма\r
\r
в) философия природы\r
\r
г) способ познания объективного мира\r
\r
д) учение о ценностях\r
\r
35.Каким образом первые философы понимали природное первоначало?\r
\r
а) как чистую идею\r
\r
б) как физическое вещество\r
\r
в) как тело первой жертвы\r
\r
г) как овеществление первоначальной идеи\r
\r
д) как определенную стихию\r
\r
36.Анаксимен считал первоосновой всего сущего:\r
\r
а) воду\r
\r
б) число\r
\r
в) огонь\r
\r
г) воздух\r
\r
д) идеи\r
\r
37.Первоначалом всего сущего в мире философ Гераклит признавал:\r
\r
а) число\r
\r
б) воду\r
\r
в) огонь\r
\r
г) атомы\r
\r
д) идеи\r
\r
38.Кому из мыслителей принадлежит утверждение, что «все сущее есть\r
\r
число»?\r
\r
а) Пифагор\r
\r
б) 3енон\r
\r
в) Гераклит\r
\r
г) Эпикур\r
\r
д) Сенека\r
\r
39.Кто первым сформулировал диалектические принципы развития мира?\r
\r
а) Сократ\r
\r
б) Гераклит\r
\r
в) Анаксимандр\r
\r
г) Эпикур\r
\r
д) Сенека\r
\r
40.«Человек -- мера всех вещей», так считал:\r
\r
а) Эпикур\r
\r
б) Аристотель\r
\r
в) Сократ\r
\r
г) Протагор\r
\r
д) Платон\r
\r
41.«Я знаю, что ничего не знаю» Автор афоризма?\r
\r
а) Пифагор\r
\r
б) Сократ\r
\r
в) Фалес\r
\r
г) Протагор\r
\r
д) Анаксимандр\r
\r
42.Какая проблема была в центре внимания у Сократа?\r
\r
а) что такое «физиc»?\r
\r
б) проблема первоначала\r
\r
в) какова природа (сущность) человека?\r
\r
г) проблема бытия и небытия\r
\r
д) проблема познания\r
\r
43.Какому философу принадлежит изречение: «Платон мне друг, но истина\r
\r
дороже»?\r
\r
а) Цицерон\r
\r
б) Эпикур\r
\r
в) Аристотель\r
\r
г) Демокрит\r
\r
д) Сократ\r
\r
44.Укажите науку, считавшуюся наиболее важной в Средневековье:\r
\r
а) аксиология\r
\r
б) гносеология\r
\r
в) логика\r
\r
г) онтология\r
\r
д) теология\r
\r
45.Что такое теология?\r
\r
а) родословная богов\r
\r
б) учение о Боге\r
\r
в) учение о Логосе\r
\r
г) учение об Эдосах\r
\r
д) учение о морали\r
\r
46.Креационизм -- это:\r
\r
а) реализм\r
\r
б) учение о материальности мира\r
\r
в) номинализм\r
\r
г) принцип, в соответствии с которым Бог из ничего сотворил мира\r
\r
д) неотомизм\r
\r
47.Христианско-религиозное понимание истории означает:\r
\r
а) история есть прогресс науки и техники\r
\r
б) история --- это движение от первобытности к идеальному, совершенному\r
\r
обществу\r
\r
в) история есть прямолинейное движение от грехопадения до судного дня\r
\r
г) история циклична: она есть рождение из хаоса и возвращение в него\r
\r
д) развитие истории хаотично\r
\r
48.Религиозно-христианское понимание человека утверждает, что:\r
\r
а) человек --- худшее из творений, созданных Богом\r
\r
б) человек --- одно из существ равное другим существам, созданных Богом\r
\r
в) человек -- «венец творения» и повелитель всего созданного для него\r
Богом\r
\r
г) человек --- случайность, ничего не стоящая\r
\r
д) человек- «мыслящая вещь»\r
\r
49.Эпоха Возрождения датируется:\r
\r
а) XIV -- XVI вв.\r
\r
б) X -- XI вв.\r
\r
в) XII -- XIII вв.\r
\r
г) XVII-XIXвв.\r
\r
д) XXв.\r
\r
50.Мировоззрением Возрождения является:\r
\r
а) индивидуализм\r
\r
б) гуманизм\r
\r
в) антропоцентризм\r
\r
г) теология\r
\r
д) космоцентризм\r
\r
51.Что такое пантеизм?\r
\r
а) человек-венец творения бога\r
\r
б) признание первичности материи по отношению к сознанию\r
\r
в) признание того, что разум - главное орудие познания\r
\r
г) всебожие - признание присутствия Бога во всей природе\r
\r
д) признание того, что опыт - главное орудие познания\r
\r
52.Главной проблемой философии Нового времени XVII в. является проблема:\r
\r
а) человека\r
\r
б) метода научного познания\r
\r
в) материального и идеального\r
\r
г) бытия\r
\r
д) аксиологии\r
\r
53.Кто из философов Нового Времени является автором афоризма: «Знание --\r
сила»?\r
\r
а) Р.Декарт\r
\r
б) Т.Гоббс\r
\r
в) Ф.Бэкон\r
\r
г) Дж.Локк\r
\r
д) Б.Спиноза\r
\r
54.Френсис Бэкон был основоположником:\r
\r
а) реализма\r
\r
б) номинализма\r
\r
в) рационализма\r
\r
г) эмпиризма\r
\r
д) неопозитивизма\r
\r
55.Кто автор высказывания: «Я мыслю, следовательно, я существую»?\r
\r
а) Д.Беркли\r
\r
б) Р.Декарт\r
\r
в) Ф.Бэкон\r
\r
г) Б.Спиноза\r
\r
д) Г.Лейбниц\r
\r
56.Кто является основоположником рационализма в философии Нового\r
\r
времени?\r
\r
а) И.Кант\r
\r
б) Ф.Бекон\r
\r
в) Д.Локк\r
\r
г) Р.Декарт\r
\r
д) Б.Спиноза\r
\r
57.Кто из философов является родоначальником немецкой классической\r
\r
философии?\r
\r
а) Г.Гегель\r
\r
б) Л.Фейербах\r
\r
в) И.Фихте\r
\r
г) И. Кант\r
\r
д) Ф. Шеллинг\r
\r
58.К. Маркс и Ф. Энгельс утверждали, что характер общества определяет:\r
\r
а) духовная деятельность людей\r
\r
б) трудовая, производительная деятельность людей\r
\r
в) взаимодействие власти и личности\r
\r
г) индивидуализм\r
\r
д) коллективное бессознательное\r
\r
59.Основателем психоаналитической философии является:\r
\r
а) К. Юнг\r
\r
б) З. Фрейд\r
\r
в) А. Адлер\r
\r
г) Э. Фромм\r
\r
д) К.Хорни\r
\r
60.Представителем «философии жизни» является:\r
\r
а) Ф.Ницше\r
\r
б) И.Кант\r
\r
в) Ф.Шеллинг\r
\r
г) Г.Гегель\r
\r
д) Л.Фейербах\r
\r
61.В основе экзистенциализма находится учение:\r
\r
а) о ценностях человеческого общества\r
\r
б) о человеческом существовании\r
\r
в) о законах объективного мира\r
\r
г) об общественном прогрессе\r
\r
д) об общественном договоре\r
\r
62.Укажите, какое философское направление определяют эти имена: Ж.П.\r
\r
Сартр, А. Камю, Н. Бердяев, М. Хайдеггер:\r
\r
а) позитивизм\r
\r
б) неогегельянство\r
\r
в) неотомизм\r
\r
г) экзистенциализм\r
\r
д) структурализм\r
\r
63.Какое философское направление XX века сделало своей главной проблемой\r
смысл жизни человека?\r
\r
а) неотомизм\r
\r
б) экзистенциализм\r
\r
в) неопозитивизм\r
\r
г) герменевтика\r
\r
д) структурализм\r
\r
64.Основополагающим понятием в философии Ф. Ницше является:\r
\r
а) воля к жизни\r
\r
б) воля к власти\r
\r
в) воля к богатству\r
\r
г) воля к богу\r
\r
д) интуиция\r
\r
65.Согласно учению З. Фрейда, жизнь в целом и большинство конкретных\r
\r
поступков человека определяется:\r
\r
а) интуицией\r
\r
б) мышлением\r
\r
в) разумом\r
\r
г) рассудком\r
\r
д) бессознательным\r
\r
66.Экзистенциалисты утверждают, что сущность человека определяется:\r
\r
а) случайностью\r
\r
б) непостижимой судьбой\r
\r
в) совокупностью производственных отношений\r
\r
г) божественным предопределением\r
\r
д) собственным выбором человека своей цели\r
\r
67.Онтология --- это учение:\r
\r
а) о морали\\\r
б) о ценностях, об их происхождении и сущности\\\r
в) о развитии вселенной\\\r
г) о духовной культуре общества и человека\r
\r
д) о бытии как таковом\r
\r
68.Понятие «бытие» сходно, однопорядково с такими понятиями как:\\\r
а) субстанция\\\r
б) существование, реальность\\\r
в) первоначало\\\r
г) материя\r
\r
д) дух\r
\r
69.Длительность существования материи характеризуется понятием:\\\r
а) пространство\r
\r
б) время\\\r
в) скорость\\\r
г) бытие\r
\r
д) развитие\r
\r
70.Онтология как раздел философского знания -- наука о всеобщем, в\r
истории философии не называлась:\r
\r
а) первая философия\r
\r
б) этика\\\r
в) метафизика\\\r
г) объективная логика\\\r
д) эпистемология\r
\r
71.Материя есть философская категория для обозначения:\r
\r
а) атомов\\\r
б) объективной реальности, данной нам только в ощущениях\\\r
в) вещества\\\r
г) объективной реальности\\\r
д) идей\r
\r
72.Материалисты утверждают, что материя -- это:\r
\r
а) объективная реальность, данная человеку в ощущениях\r
\r
б) пассивное начало, преобразующееся под воздействием сознания\r
\r
в) абсолютное Единое\r
\r
г) абстрактное понятие\r
\r
д) духовное начало\r
\r
73.В каком суждении выражено диалектико-материалистическое понимание\r
\r
принципа единства мира:\r
\r
а) единство мира проявляется в единстве его химического состава\r
\r
б) единство мира состоит в его материальности\r
\r
в) единство мира состоит в том, что во всех его частях действуют одни и\r
те же законы\r
\r
г) мир един, поскольку в нем все взаимосвязано\r
\r
д) мир - собрание атомов\r
\r
74.Идеалисты утверждают, что:\r
\r
а) единство мира состоит в его материальности\r
\r
б) существуют два независимых и равноправных начала (принципа):\r
материальное и духовное\r
\r
в) материя существует абсолютно, она несотворима и неуничтожима,\r
\r
бесконечна в формах своего проявления\r
\r
г) материя состоит из вечных, неизменных и неделимых частиц -- атомов\r
\r
д) первоосновой мира, природы, сущего является духовное начало\r
\r
75.Равноправие материального и духовного первоначал бытия\r
\r
провозглашает:\r
\r
а) плюрализм\r
\r
б) монизм\r
\r
в) скептицизм\r
\r
г) релятивизм\r
\r
д) дуализм\r
\r
76.Существование множества исходных оснований и начал бытия утверждает:\r
\r
а) релятивизм\r
\r
б) агностицизм\r
\r
в) эмпиризм\r
\r
г) плюрализм\r
\r
д) скептицизм\r
\r
77.Философская категория для обозначения объективной реальности, которая\r
дана человеку в его ощущениях есть:\r
\r
а) сознание\r
\r
б) явление\r
\r
в) материя\r
\r
г) мера\r
\r
д) причина\r
\r
78.Способ существования материи:\r
\r
а) небытие\r
\r
б) неподвижность\r
\r
в) сознание\r
\r
г) движение\r
\r
д) пространство\r
\r
79.Высшая форма движения материи:\r
\r
а) механическое движение\r
\r
б) социальное движение\r
\r
в) биологическое движение\r
\r
г) физическое движение\r
\r
д) химическое движение\r
\r
80.Последовательность состояний отражает категория:\r
\r
а) необходимости\r
\r
б) пространства\r
\r
в) материи\r
\r
г) времени\r
\r
д) случайности\r
\r
81.Форма бытия материи, выражающая ее протяженность, структурность,\r
\r
сосуществование и взаимодействие элементов во всех материальных\r
системах:\r
\r
а) время\r
\r
б) движение\r
\r
в) пространство\r
\r
г) качество\r
\r
д) количество\r
\r
82.Бытие, как философское понятие, охватывает:\r
\r
а) физическую реальность\r
\r
б) всю совокупную реальность\r
\r
в) психический мир человека\r
\r
г) результаты интеллектуальной деятельности\r
\r
д) физический мир человека\r
\r
83.Назовите важнейшее из свойств материи, зафиксированное в её\r
диалектико-материалистическом определении:\r
\r
а) быть трансцендентной миру\r
\r
б) существовать в ощущениях человека\r
\r
в) быть объективной реальностью\r
\r
г) быть фиксируемой физическими методами\r
\r
д) существовать в сознании человека\r
\r
84.Укажите философскую традицию, которая с научных позиций изучает\r
уровни структурной организации материи в живой и неживой природе:\r
\r
а) иррационализм\r
\r
б) рационализм\r
\r
в) скептицизм\r
\r
г) агностицизм\r
\r
д) эмпиризм\r
\r
85.Выделите изменения, которые составляют суть процесса развития:\r
\r
а) обратимые\r
\r
б) направленные\r
\r
в) качественные\r
\r
г) закономерные\r
\r
д) количественные\r
\r
86.Как соотносятся между собой понятия «движение» и «развитие»:\r
\r
а) движение и развитие исключают друг друга\r
\r
б) развитие является частью движения\r
\r
в) движение является частью развития\r
\r
г) движение и развитие дополняют друг друга\r
\r
д) никак не соотносятся\r
\r
87.Выберите определение, соответствующее диалектико- материалистическому\r
пониманию движения:\r
\r
а) движение -- это любая совокупность ощущений человека\r
\r
б) движение -- это перемещение тел в пространстве\r
\r
в) движение -- это поток сознания\r
\r
г) движение -- это любое изменение\r
\r
д) движение-иллюзия\r
\r
88.Какая философская традиция признает два равноправных начала мира\r
(материя и сознание):\r
\r
а) агностицизм\r
\r
б) скептицизм\r
\r
в) дуализм\r
\r
г) материализм\r
\r
д) монизм\r
\r
89.Какая философская традиция исторически первой обратилась к изучению\r
природы?\r
\r
а) теологическая\r
\r
б) антропологическая\r
\r
в) социологическая\r
\r
г) натурфилософия\r
\r
д) культурологическая\r
\r
90.Укажите тип объектов, особенности которого зафиксированы в содержа\r
\r
нии понятия «биосфера»:\r
\r
а) сознание\r
\r
б) неживое вещество\r
\r
в) неразумное существо\r
\r
г) разумное существо\r
\r
д) живое вещество\r
\r
91.Что характеризует термин «ноосфера»?\r
\r
а) сфера духа\r
\r
б) сфера труда\r
\r
в) сфера разума\r
\r
г) сфера человеческого общения\r
\r
д) сфера образования\r
\r
92.Выделите принцип, лежащий в основе учения о ноосфере:\r
\r
а) принцип господства человека над природой\r
\r
б) принцип коэволюции человека и природы\r
\r
в) принцип равновесия природных сил\r
\r
г) принцип детерминизма\r
\r
д) принцип объективности\r
\r
93.Сознание рассматривается как свойство высокоорганизованной материи, в\r
философском направлении:\r
\r
а) субъективный идеализм\r
\r
б) объективный идеализм\r
\r
в) диалектический материализм\r
\r
г) экзистенциализм\r
\r
д) персонализм\r
\r
94.«Бессознательное» в современной философии это:\r
\r
а) нечто, присущее только отдельному человеку\r
\r
б) опыт, не поддающийся логическому анализу\r
\r
в) общественное, социальное в личности\r
\r
г) рефлекторные процессы в организме человека\r
\r
д) практическая деятельность\r
\r
95.Чем сознание человека отличается от психики животного?\r
\r
а) памятью\r
\r
б) абстрактным мышлением\r
\r
в) активностью\r
\r
г) интуицией\r
\r
д) воображением\r
\r
96.Выделите в предложенных суждениях диалектический материализм:\r
\r
а) сознание как самостоятельная субстанция не существует\r
\r
б) сознание- свойство всей материи\r
\r
в) сознание материально\r
\r
г) сознание человека -- это проявление мирового духа\r
\r
д) сознание есть свойство высокоорганизованной материи\r
\r
97.Выделите в предложенных суждениях идеализм:\r
\r
\\<variant\\> сознание неразрывно связано с материей\r
\r
\\<variant\\> сознание может существовать до и независимо от материи\r
\r
\\<variant\\> сознание есть продукт материи\r
\r
\\<variant\\> сознание не всегда адекватно отражает материю\r
\r
\\<variant\\> сознание как самостоятельная субстанция не существует\r
\r
98.Сознание возникает, функционирует и развивается в процессе:\r
\r
а) взросления человека\r
\r
б) взаимодействия человека с реальностью\r
\r
в) получения образования\r
\r
г) научного познания\r
\r
д) творчества\r
\r
99.В какую эпоху сознание начинают рассматривать как функцию\r
\r
человеческого мозга по отражению действительности?\r
\r
а) Античность\r
\r
б) Нового времени\r
\r
в) Средневековье\r
\r
г) Возрождение\r
\r
д) Просвещение\r
\r
100.Свойство отражения:\r
\r
а) присуще только неживой материи\r
\r
б) это - глобальное свойство материи\r
\r
в) присуще только живой материи\r
\r
г) присуще только человеку\r
\r
д) присуще только обществу\r
\r
101.Человеческое сознание отличается от психики животных:\r
\r
а) наличием воображения\r
\r
б) способностью более четко отражать окружающий мир\r
\r
в) способностью воздействовать на окружающий мир\r
\r
г) способностью адекватно реагировать на воздействие окружающей среды\r
\r
д) способностью к рефлексии, т.е. самопознанию\r
\r
102.Что появилось у человека раньше --- мышление или язык?\r
\r
а) мышление\r
\r
б) одновременно\r
\r
в) язык\r
\r
г) они совершенно не связаны между собой, поэтому вопрос некорректен\r
\r
д) нет верного ответа\r
\r
103.Ключевая ценность нравственности:\r
\r
а) долг\r
\r
б) добро\r
\r
в) закон\r
\r
г) власть\r
\r
д) зло\r
\r
104.Каков коренной признак идеологии:\r
\r
а) научность\r
\r
б) зависимость от бытия\r
\r
в) обобщенное выражение классовых (групповых) интересов\r
\r
г) отсутствие политических интересов\r
\r
д) ненаучность\r
\r
105.Гносеология --- это учение:\r
\r
а) о нравственности\r
\r
б) о ценностях, об их происхождении и сущности\r
\r
в) о бытии как таковом\r
\r
г) о сущности человеческой истории\r
\r
д) о сущности познания, о путях постижения истины\r
\r
106.Познание в современной философии преимущественно рассматривается\r
\r
как:\r
\r
а) процесс образования\r
\r
б) способности, умения, навыки в определенной области деятельности\r
\r
в) значимая информация в аспекте деятельности\r
\r
г) объективная реальность, данная в сознании действующего человека\r
\r
д) обусловленный практикой процесс приобретения и развития знаний\r
\r
107.В онтологическом аспекте противоположным термину «рационализм»\r
\r
выступает понятие:\r
\r
а) солипсизм\r
\r
б) эмпиризм\r
\r
в) иррационализм\r
\r
г) материализм\r
\r
д) эмпириокритицизм\r
\r
108.Абсолютизация роли и значения чувственных данных в философии связана\r
с направлением:\r
\r
а) скептицизма\r
\r
б) реализма\r
\r
в) рационализма\r
\r
г) сенсуализма\r
\r
д) номинализма\r
\r
109.Эмпиризм выводит все познание из:\r
\r
а) интуиции\r
\r
б) рациональных рассуждений\r
\r
в) чувственного представления\r
\r
г) чувственных восприятий\r
\r
д) чувственного опыт\r
\r
110.Разум есть основа познания и поведения человека, утверждает:\r
\r
а) релятивизм\r
\r
б) рационализм\r
\r
в) иррационализм\r
\r
г) сенсуализм\r
\r
д) солипсизм\r
\r
111.Индукция --- это:\r
\r
а) логический путь от общего к частному\r
\r
б) логический путь от частного к общему\r
\r
в) подача ложного знания, как истинного\r
\r
г) моделирование\r
\r
д) систематизация\r
\r
112.Что является целью познания\r
\r
а) объект познания\r
\r
б) преобразование предметного содержания в содержание сознания\r
\r
в) истинное знание\r
\r
г) социальные ценности\r
\r
д) предмет познания\r
\r
113.Что такое истина\r
\r
а) это правда\r
\r
б) это результат соглашения между учеными\r
\r
в) это соответствие мысли той реальности, которую она отражает\r
\r
г) это реально существующие явления (дом, дерево, экономика,\r
деятельность человека и т.д.)\r
\r
д) это иллюзия\r
\r
114.В какую эпоху вопросы методологии научного знания становятся\r
\r
центральными\r
\r
а) Просвещение\r
\r
б) Античность\r
\r
в) Средневековье\r
\r
г) Возрождение\r
\r
д) Новое время\r
\r
115.Что является критерием истины?\r
\r
а) наблюдение\r
\r
б) практика\r
\r
в) логическое следование из исходных принципов\r
\r
г) простота, экономная организация знания\r
\r
д) чувственный опыт\r
\r
116.Агностицизм --- это:\r
\r
а) учение о нравственности\r
\r
б) учение в онтологии, рассматривающее проблемы бытия человека\r
\r
в) учение о развитии мира\r
\r
г) учение о всеобщей причинной связи\r
\r
д) учение в гносеологии, отрицающее возможность достоверного познания\r
мира\r
\r
117.Поскольку истина не зависит от познающего субъекта, она:\r
\r
а) абстрактна\r
\r
б) объективна\r
\r
в) абсолютна\r
\r
г) субъективна\r
\r
д) недостижима\r
\r
118.К какой форме научного познания относится концепция инопланетного\r
\r
происхождения жизни на земле:\r
\r
а) теория\r
\r
б) гипотеза\r
\r
в) проблема\r
\r
г) модель\r
\r
д) нет верного ответа\r
\r
119.Что из перечисленного относится к форме рационального познания\r
\r
а) убеждение\r
\r
б) интуиция\r
\r
в) понятие\r
\r
г) представление\r
\r
д) ощущение\r
\r
120.Укажите верное высказывание:\r
\r
а) истина -- это общепринятая точка зрения\r
\r
б) истина есть очевидное, наглядное, бесспорное утверждение\r
\r
в) истина представляет собой логически непротиворечивое, безупречное\r
утверждение\r
\r
г) истина есть адекватное, соответствующее действительности утверждение\r
\r
д) истина -- это иллюзия\r
\r
121.Из суждения-посылки «Все люди мыслят» и суждения, обосновывающего\r
знание «Я - человек», сделайте умозаключение:\r
\r
а) все люди похожи на меня\r
\r
б) я мыслю\r
\r
в) я отношусь ко всем людям\r
\r
г) животные тоже мыслят\r
\r
д) нет верного ответа\r
\r
122.Понятие, противоположное по смыслу «истине» в гносеологии:\r
\r
а) ложь\r
\r
б) заблуждение\r
\r
в) суждение\r
\r
г) предрассудок\r
\r
д) иллюзия\r
\r
123.Агностицизм -- это философское учение:\r
\r
а) признающее сложность процесса познания\r
\r
б) отрицающее возможность познания мира\r
\r
в) отрицающее существование объективного мира\r
\r
г) отрицающее существование разума\r
\r
д) отрицающее существование материи\r
\r
124.Высшей формой отражения действительности считается:\r
\r
а) речь\r
\r
б) сознание\r
\r
в) прямохождение\r
\r
г) труд\r
\r
д) практика\r
\r
125.Выделите положение, которое соответствует прагматической концепции\r
истины:\r
\r
а) истина -- знание, которое соответствует показаниям органов чувств\r
\r
б) истина -- знание, которое является адекватным отражением объективного\r
мира\r
\r
в) истина -- логическая схема, в которую укладываются данные опыта\r
\r
г) истина идея, руководство которой приводит к успеху\r
\r
д) истина -- иллюзия\r
\r
126.Выберите верное утверждение:\r
\r
а) истина - это вера\r
\r
б) истина - это сама вещь\r
\r
в) истина - это знание, соответствующее действительности\r
\r
г) истина - это понятие о вещи\r
\r
д) истина - иллюзия\r
\r
127.«Эклектика» - это:\r
\r
а) ошибочные суждения\r
\r
б) некритическое смешение разных учений\r
\r
в) понятие, употребляемое в астрономии\r
\r
г) присвоение чужих идей\r
\r
д) деградация\r
\r
128.Развитие, сопровождающееся появлением более совершенного качества по\r
сравнению с предыдущим:\r
\r
а) цикличность\r
\r
б) деградация\r
\r
в) упадок\r
\r
г) регресс\r
\r
д) прогресс\r
\r
129.Прогресс и регресс -- это две формы:\r
\r
а) движения\r
\r
б) существование\r
\r
в) развития\r
\r
г) иерархии\r
\r
д) нет верного ответа\r
\r
130.Фундаментальные понятия, отражающие наиболее существенные,\r
\r
устойчивые и повторяющиеся связи и отношения действительности и\r
\r
познания:\r
\r
а) термины\r
\r
б) категории\r
\r
в) символы\r
\r
г) универсалии\r
\r
д) образы\r
\r
131.Сущность любых объектов мира проявляется:\r
\r
а) в иллюзорности\r
\r
б) в их внутренних качествах\r
\r
в) в их внешних признаках\r
\r
г) в их обособленности\r
\r
д) во взаимодействии с другими объектами\r
\r
132.Ядром политической подсистемы общества является:\r
\r
а) власть\r
\r
б) государство\r
\r
в) политические партии\r
\r
г) общественные организации\r
\r
д) общественные движения\r
\r
133.Разделом философской науки, изучающей общество, является:\r
\r
а) социология\r
\r
б) социальная философия\r
\r
в) философская антропология\r
\r
г) философия истории\r
\r
д) гносеология\r
\r
134.В основе экономической подсистемы общества находится:\r
\r
а) научно-техническая революция\r
\r
б) система распределения материальных благ\r
\r
в) система обмена произведенной продукции\r
\r
г) материальное производство\r
\r
д) нет верного ответа\r
\r
135.Что считается решающим фактором развития общества:\r
\r
а) культура\r
\r
б) географическая среда\r
\r
в) экологические отношения\r
\r
г) развитие науки и техники\r
\r
д) экономические отношения\r
\r
136.Что является высшим критерием общественного развития:\r
\r
а) самосовершенствование человека, качества его жизни\r
\r
б) развитие духовной культуры\r
\r
в) развитие науки и техники\r
\r
г) развитие производительных сил\r
\r
д) развитие искусства\r
\r
137.Будущее человечества как направление научного анализа является\r
\r
содержанием следующего направления философии:\r
\r
а) эпистемиологии\r
\r
б) онтология\r
\r
в) гносеология\r
\r
г) футурология\r
\r
д) аксиологии\r
\r
138.Ступень всемирной истории, пришедшая на смену дикости и варварства\r
\r
человечества, стала обозначаться понятием:\r
\r
а) общество\r
\r
б) культура\r
\r
в) цивилизация\r
\r
г) формация\r
\r
д) нет верного ответа\r
\r
139.Что такое общество?\r
\r
а) совокупность человеческих индивидов, объединившихся для защиты своих\r
прав и свобод\r
\r
б) обособившаяся от природы система, представляющая собой совокупность\r
исторически сложившихся способов совместной деятельности людей и форм их\r
объединений\r
\r
в) организация для обеспечения порядка в отношениях между людьми\r
\r
г) человеческие группы и объединения, связанные общими культурными\r
ценностями\r
\r
д) нет верного ответа\r
\r
140.Что является источником коренных качественных изменений в обществе\r
\r
согласно материалистической теории исторического процесса:\r
\r
а) моральное совершенствование общества\r
\r
б) развитие материального производства\r
\r
в) географическая среда\r
\r
г) эффективное политическое руководство\r
\r
д) коллективные представления\r
\r
141.Что составляет основу формации в формационной концепции\r
исторического процесса?\r
\r
а) наука\r
\r
б) система ценностей\r
\r
в) государство\r
\r
г) технико-технологический базис\r
\r
д) способ производства\r
\r
142.Учение о финале мировой истории, о конечной судьбе мира и человека:\r
\r
а) апокалиптика\r
\r
б) оккультизм\r
\r
в) метемпсихоз\r
\r
г) эсхатология\r
\r
д) футурология\r
\r
143.Фактор, который согласно социал-дарвинизму, является основной\r
\r
движущей силой развития общества:\r
\r
а) коллективные представления\r
\r
б) мировой дух\r
\r
в) классовая борьба\r
\r
г) воля выдающихся людей\r
\r
д) борьба за существование\r
\r
144.Понятие общественно-экономическая формация принадлежит:\r
\r
а) позитивизму\r
\r
б) экзистенционализму\r
\r
в) фрейдизму\r
\r
г) марксизму\r
\r
д) структурализму\r
\r
145.Общественный прогресс -- это:\r
\r
а) поступательное движение общества от сложных форм к более простым\r
\r
б) уровень развития общества\r
\r
в) производственное развитие\r
\r
г) состояние общества в целом на определенном этапе развития\r
\r
д) поступательное движение общества от простых форм к более сложным\r
\r
146.Глубокие качественные изменения в развитии общества или познания,\r
\r
происходящие за относительно короткий период времени:\r
\r
а) реформа\r
\r
б) эволюция\r
\r
в) революция\r
\r
г) движение\r
\r
д) нет верного ответа\r
\r
147.Сущность натурализма как подхода, объясняющего общественную\r
\r
жизнь, состоит в положении о том, что:\r
\r
а) движущей силой развития общества являются коллективные представления\r
\r
б) развитие общества подчинено объективным законам\r
\r
в) движущей силой развития общества являются идеи исторических личностей\r
\r
г) определяющим фактором развития общества признается материальное\r
производство\r
\r
д) общественная жизнь существенно зависит от природных факторов\r
\r
148.Гражданское общество -- это:\r
\r
а) общественная организация\r
\r
б) ветвь государственной власти\r
\r
в) партийная политическая система\r
\r
г) система вне государственных общественных образований, помогающая\r
государству и оппонирующая государству в случае неэффективного\r
выполнения им своих функций\r
\r
д) нет верного ответа\r
\r
149.Идеократический подход к объяснению связей и закономерностей\r
\r
человеческого общества усматривает:\r
\r
а) в естественном продолжении законов Космоса\r
\r
б) в естественном продолжении закономерностей природы мира животных\r
\r
в) в комплексе тех или иных идей, верований\r
\r
г) в производственных (экономических) отношениях\r
\r
д) нет верного ответа\r
\r
150.Материалистический подход к объяснению связей и закономерностей\r
\r
человеческого общества усматривает:\r
\r
а) в естественном продолжении закономерностей природы мира животных\r
\r
б) в производственных (экономических) отношениях\r
\r
в) в естественном продолжении законов Космоса\r
\r
г) в комплексе тех или иных идей, верований, мифов\r
\r
д) в Божественном замысле\r
\r
151.Что является предметом социальной философии:\r
\r
а) социальная жизнь\r
\r
б) общество как система\r
\r
в) конкретная действительность общественной жизни\r
\r
г) нормы социального бытия\r
\r
д) культура\r
\r
152.Выделите основу жизни общества в понимании К. Маркса:\r
\r
а) сфера торговли\r
\r
б) семейный быт\r
\r
в) материальное производство\r
\r
г) природное окружение\r
\r
д) культура\r
\r
153.Какой критерий является основанием для формационного подхода?\r
\r
а) тип культуры\r
\r
б) географический и экономический\r
\r
в) уровень развития науки и техники\r
\r
г) способ производства материальных благ\r
\r
д) нет верного ответа\r
\r
154.Назовите мыслителя XIX века, выделившего социально -- экономический\r
класс в качестве главного элемента социальной структуры общества:\r
\r
а) М Вебер\r
\r
б) К. Маркс\r
\r
в) Л. Фейербах\r
\r
г) М. А. Бакунин\r
\r
д) О.Конт\r
\r
155.Важнейшей особенностью современного этапа социального прогресса\r
является:\r
\r
а) цикличность\r
\r
б) замедление темпов исторического развития\r
\r
в) стагнация общественных процессов\r
\r
г) возрастание его темпов («ускорение ритма истории»)\r
\r
д) нет верного ответа\r
\r
156.Укажите закон общественного развития, который ввел Т. Мальтус:\r
\r
а) закон энтропии\r
\r
б) закон единства и борьбы противоположностей\r
\r
в) закон народонаселения\r
\r
г) закон отрицания отрицания\r
\r
д) закон перехода количественных изменений в качественные\r
\r
157.Укажите главный источник социальной динамики?\r
\r
а) борьба социальных противоположностей, возникающих, прежде всего, в\r
экономической сфере\r
\r
б) социальные конфликты\r
\r
в) согласие социальных групп\r
\r
г) коллективные представления\r
\r
д) нет верного ответа\r
\r
158.Личность в философии понимается, как:\r
\r
а) синоним понятий «индивид», «человек»\r
\r
б) устойчивая система социально-значимых черт, характеристика человека\r
как члена общества\r
\r
в) родовое понятие, т. е. выражающее общие черты, присущие человеческому\r
роду\r
\r
г) совокупность физических способностей отдельного человека\r
\r
д) совокупность психических способностей отдельного человека\r
\r
159.При употреблении понятия «личность» подразумевают такие качества,\r
\r
как:\r
\r
а) физические отличия\r
\r
б) возрасные отличия\r
\r
в) приобретенные каждым человеком духовные, социальные качества\r
\r
г) нейродинамические отличия (свойства нервной системы)\r
\r
д) совокупность психических способностей отдельного человека\r
\r
160.Термин «антропогенез» означает:\r
\r
а) процесс исторического формирования социальной сущности человека\r
\r
б) процесс историко-эволюционного формирования физического типа человека\r
\r
в) процесс формирования «сверхчеловека»\r
\r
г) процесс развития человека от момента рождения до смерти\r
\r
д) нет верного ответа\r
\r
161.Средневековые философы утверждали, что человек:\r
\r
а) создан по образу и подобию Божьему\r
\r
б) есть результат биологической эволюции\r
\r
в) есть продукт социальной действительности\r
\r
г) есть продукт речевой активности\r
\r
д) нет верного ответа\r
\r
162.Это качество в человеке считалось самым главным в философии Нового\r
\r
времени:\r
\r
а) креативность\r
\r
б) эмоциональность\r
\r
в) набожность\r
\r
г) разумность, рациональность\r
\r
д) эмпатия\r
\r
163.Биологизаторские концепции утверждают, что:\r
\r
а) жизнь человека определена его генотипом\r
\r
б) все люди рождаются равными от природы, только социальная среда делает\r
всех разными\r
\r
в) жизнь человека определена процессом воспитания\r
\r
г) жизнь человека определена роком (судьбой)\r
\r
д) жизнь человека определена Богом\r
\r
164.Процесс социализации означает:\r
\r
а) активное участие человека в общественной жизни\r
\r
б) усвоение и использование человеком социокультурного опыта\r
\r
в) принадлежность человека к той или иной социальной группе\r
\r
г) участие человека в социалистическом движении\r
\r
д) изменение социального статуса\r
\r
165.С точки зрения гедонизма, смысл жизни состоит в том, что:\r
\r
а) жизнь - это стремление к Богу\r
\r
б) жизнь - это отречение от мира и умерщвление плоти ради искупления\r
грехов\r
\r
в) жизнь - это стремление к счастью как подлинному назначению человека\r
\r
г) жизнь - это наслаждения, желательно, как можно более разнообразные,\r
здесь и сейчас\r
\r
д) жизнь - это служение идеалу\r
\r
166.Ответственность человека за свои поступки возможна только при\r
\r
наличии:\r
\r
а) вины\r
\r
б) выбора\r
\r
в) непреодолимой силы\r
\r
г) необходимости\r
\r
д) случайности\r
\r
167.Приоритет интересов общества над интересами индивида характерно:\r
\r
а) для анархизма\r
\r
б) для либерализма\r
\r
в) для коллективизма\r
\r
г) для индивидуализма\r
\r
д) нет верного ответа\r
\r
168.«Все в мире предопределено, человек абсолютно не свободен», считают\r
\r
представители:\r
\r
а) волюнтаризма\r
\r
б) иррационализма\r
\r
в) фатализма\r
\r
г) рационализма\r
\r
д) персонализма\r
\r
169.Приоритет отдельных личностей над общественным целым\r
\r
утверждает:\r
\r
а) коллективизм\r
\r
б) рационализм\r
\r
в) индивидуализм\r
\r
г) иррационализм\r
\r
д) скептицизм\r
\r
170.Сущность проблемы биологического и социального в человеке состоит в\r
\r
вопросе:\r
\r
а) о приоритете материальных, либо духовных потребностей\r
\r
б) о взаимодействии и соотношении генов и воспитания\r
\r
в) о формах борьбы за существование в человеческом обществе\r
\r
г) о соотношении сознательных и бессознательных факторов детерминации\r
человеческих поступков\r
\r
д) нет верного ответа\r
\r
171.Что из нижеперечисленного не включает в себя трудовая теория\r
\r
происхождения человека?\r
\r
а) орудийную деятельность\r
\r
б) вера в высшие силы, воздействующие на людей\r
\r
в) сплочение в общество\r
\r
г) речь и мышление\r
\r
д) нет верного ответа\r
\r
172.Совокупность неповторимых черт, отличающих данного индивида от\r
\r
всех других:\r
\r
а) персона\r
\r
б) личность\r
\r
в) человек\r
\r
г) индивидуальность\r
\r
д) нет верного ответа\r
\r
173.Производство -- не просто отличительный, а основополагающий признак\r
\r
Homo Sapiens, считал:\r
\r
а) Л.Фейербах\r
\r
б) Ф.Энгельс\r
\r
в) З.Фрейд\r
\r
г) Н.Бердяев\r
\r
д) О.Конт\r
\r
174.Бессознательное обуславливает большинство психических действий\r
\r
человека, считал:\r
\r
а) К.Ясперс\r
\r
б) Ж.Сартр\r
\r
в) Ф.Аквинский\r
\r
г) З.Фрейд\r
\r
д) Р.Декарт\r
\r
175.Укажите верное положение:\r
\r
а) человек и его поведение определяются биологическими законами\r
\r
б) человек, прежде всего социальное существо, но на его поведение\r
\r
оказывают влияние и биологические факторы\r
\r
в) человек -- это социальное существо, биологические факторы не влияют\r
на его поведение\r
\r
г) сознательное и подсознательное в человеке находиться в динамическом\r
равновесии\r
\r
д) нет верного ответа\r
\r
176.Какой ответ на вопрос о том, каково соотношение понятий «человек» и\r
\r
«личность», будет правильным:\r
\r
а) главным свойством личности является то, что у нее есть мировоззрение\r
и самосознание\r
\r
б) человек и личность -- это тождественные понятия\r
\r
в) человек становится личностью, когда овладевает культурой и моралью\r
\r
г) человек -- это антропологическое понятие, а личность -- социальное\r
\r
д) нет верного ответа\r
\r
177.Что из перечисленного соответствует гносеологическому подходу в\r
\r
исследовании человека:\r
\r
а) общественная психология\r
\r
б) обыденное сознание\r
\r
в) познавательная деятельность\r
\r
г) идеология\r
\r
д) аксиология\r
\r
178.Эволюцию человека и образование человеческих рас изучает:\r
\r
а) археология\r
\r
б) эмбриология\r
\r
в) антропология\r
\r
г) этнология\r
\r
д) демография\r
\r
179.Жизненная позиция, исходящая из принципа «смысл жизни в служении\r
\r
людям», есть:\r
\r
а) эгоизм\r
\r
б) альтруизм\r
\r
в) гедонизм\r
\r
г) аскетизм\r
\r
д) скептицизм\r
\r
180Учение о предопределенности человеческих поступков -- это:\r
\r
а) детерминизм\r
\r
б) фатализм\r
\r
в) субъективизм\r
\r
г) волюнтаризм\r
\r
д) аскетизм\r
\r
181.Укажите сферу философского знания, обращенную к изучению человека,\r
фундаментальных основ его бытия:\r
\r
а) аксиология\r
\r
б) гносеология\r
\r
в) онтология\r
\r
г) социальная философия\r
\r
д) философская антропология\r
\r
182.Какому философскому воззрению характерен тезис: «Философия должна\r
переместить точку зрения со Вселенной на человека»:\r
\r
а) антропоморфизм\r
\r
б) гуманизм\r
\r
в) теоцентризм\r
\r
г) антропоцентризм\r
\r
д) аксиология\r
\r
183.Какое из предложенных определений понятия «человек» наиболее полно\r
\r
раскрывает его содержание:\r
\r
а) животное, способное изготавливать орудия труда\r
\r
б) человек -- это индивид с присущей ему генетической программой\r
\r
в) биопсихосоциальное существо, способное мыслить, говорить и трудиться\r
\r
г) общественное животное, способное мыслить\r
\r
д) «политическое животное»\r
\r
184.Процесс историко--генетического становления общества и человека\r
называется:\r
\r
а) антропогенез\r
\r
б) социогенез\r
\r
в) антропосоциогенез\r
\r
г) социология\r
\r
д) генетика\r
\r
185.Как называется процесс совместного развития биосферы и человеческого\r
общества?\r
\r
а) эволюция\r
\r
б) коэволюция\r
\r
в) революция\r
\r
г) менталитет\r
\r
д) реформа\r
\r
186.Личное спасение является смыслом жизни в:\r
\r
а) антропологии\r
\r
б) экзегетике\r
\r
в) гедонизме\r
\r
г) религии\r
\r
д) герменевтике\r
\r
187.Культура с позиции аксиологии предстает как:\r
\r
а) система информационных кодов\r
\r
б) специфический способ человеческой деятельности\r
\r
в) система ценностей и идеалов\r
\r
г) выражение разумного начала\r
\r
д) результаты предметной деятельности\r
\r
188.Смысл жизни человека, согласно эвдемонизму, состоит в:\r
\r
а) совершении героических поступков\r
\r
б) борьбе с тиранией\r
\r
в) служении Богу\r
\r
г) свободе от телесных страданий и душевных тревог\r
\r
д) в пассивном созерцании\r
\r
189.О смысле жизни человек начинает задумываться, когда:\r
\r
а) попадает в экстремальную жизненную ситуацию\r
\r
б) начинает ходить и говорить\r
\r
в) при осознанном отношении к жизни, миру\r
\r
г) выбирает профессию\r
\r
д) подводит итоги жизненного пути\r
\r
190.Нигилистическое отношение к действительности, достоянию культуры,\r
\r
особенно к моральным и другим социальным нормам -- это:\r
\r
а) цинизм\r
\r
б) холизм\r
\r
в) эгоизм\r
\r
г) эвдемонизм\r
\r
д) гедонизм\r
\r
191.Эстетическое отношение к действительности определяется ценностью:\r
\r
а) истинного знания\r
\r
б) прекрасного\r
\r
в) материального блага\r
\r
г) священного\r
\r
д)научного\r
\r
192.Проблема ценностей раскрывается в разделе современного\r
\r
философского знания:\r
\r
а) логика\r
\r
б) онтология\r
\r
в) гносеология\r
\r
г) аксиология\r
\r
д) антропология\r
\r
193.Аксиология изучает вопросы, связанные с:\r
\r
а) познанием\r
\r
б) природой ценностей, их месте в реальности\r
\r
в) историей философии\r
\r
г) проблемами онтологии\r
\r
д) проблемой человека\r
\r
194.Впервые основной вопрос о ценностях «Что есть благо?» был поставлен\r
\r
философом:\r
\r
а) А.Блаженным\r
\r
б) Л.Фейербахом\r
\r
в) Сократом\r
\r
г) Г.Гегелем\r
\r
д) Л.Фейербахом\r
\r
195.Известное выражение «Красота спасет мир» принадлежит:\r
\r
а) В.Соловьеву\r
\r
б) Л.Н. Толстому\r
\r
в) Ф.М. Достоевскому\r
\r
г) А.С. Хомякову\r
\r
д) П.Я.Чаадаев\r
\r
196.Религиозный характер ценностей и их связь с божественной сущностью\r
\r
характерно для философии:\r
\r
а) античности\r
\r
б) средневековья\r
\r
в) эпохи Возрождения\r
\r
г) Нового времени\r
\r
д) Просвещения\r
\r
197.В научный оборот термин «аксиология» был введен в:\r
\r
а) XVIII веке\r
\r
б) V веке н.э.\r
\r
в) XVI веке\r
\r
г) XX веке\r
\r
д) XIX веке\r
\r
198.Что из ниже перечисленного не раскрывает философский смысл категории\r
ценность?\r
\r
а) ценность носит исключительно субъективный характер\r
\r
б) ценность социальна и имеет объективно-субъективный характер\r
\r
в) ценность возникает в ходе практической деятельности человека\r
\r
г) всякая ценность характеризуется двумя свойствами: функциональным\r
значением и личностным смыслом\r
\r
д) нет верного ответа\r
\r
199.Ценностью интегрального порядка является:\r
\r
а) обычаи и традиции\r
\r
б) культура\r
\r
в) социально-политические ценности\r
\r
г) материальные ценности\r
\r
д) нет верного ответа\r
\r
200.Важнейшим фактором регулирующим мотивацию личности является:\r
\r
а) ценностные ориентации\r
\r
б) образование\r
\r
в) воспитание\r
\r
г) характер личности\r
\r
д) темперамент\r
\r
201.В переводе с греческого «аксиос» означает:\r
\r
а) знание\r
\r
б) ценность\r
\r
в) общество\r
\r
г) богатство\r
\r
д) истина\r
\r
202.Этика -- это:\r
\r
а) учение о прекрасном\r
\r
б) учение о развитии\r
\r
в) учение о бытии\r
\r
г) теория о нравственном превосходстве одних людей над другими\r
\r
д) учение о морали и нравственных ценностях\r
\r
203.Культура с позиции аксиологии предстает как:\r
\r
а) выражение разумного начала\r
\r
б) специфический способ человеческой деятельности\r
\r
в) система информационных кодов\r
\r
г) система ценностей и идеалов\r
\r
д) нет верного ответа\r
\r
204.Согласно какой традиции высшей ценностью жизни считается\r
наслаждение?\r
\r
а) прагматизм\r
\r
б) гедонизм\r
\r
в) тоталитаризм\r
\r
г) ригоризм\r
\r
д) аскетизм\r
\r
205.Согласно какой традиции высшей ценностью провозглашается отказ от\r
наслаждений?\r
\r
а) ригоризм\r
\r
б) прагматизм\r
\r
в) тоталитаризм\r
\r
г) аскетизм\r
\r
д) гедонизм\r
\r
206.Что согласно утилитаризму является высшей ценностью?\r
\r
а) счастье\r
\r
б) добро\r
\r
в) польза\r
\r
г) удовольствие\r
\r
д) любовь\r
\r
207.Как называется этическая концепция, разработанная И.Кантом?\r
\r
а) этика прагматизма\r
\r
б) этика утилитаризма\r
\r
в) этика долга\r
\r
г) этика ценностей\r
\r
д) этика добродетелей\r
\r
208.Как называется система норм, правил поведения, выражающая\r
представления людей о зле, добре, справедливости:\r
\r
а) философия\r
\r
б) мораль\r
\r
в) наука\r
\r
г) религия\r
\r
д) искусство\r
\r
209.Определите понимание человека, характерное для философии\r
Возрождения:\r
\r
а) человек -- это мыслящее существо\r
\r
б) человек -- это микрокосм\r
\r
в) человек -- это общественное животное\r
\r
г) человек -- это творец, художник\r
\r
д) человек -- созданное Богом существо\r
\r
210.Пантеизм -- это учение о максимальном сближении:\r
\r
а) Духа и материи\r
\r
б) Бога и природы\r
\r
в) Разума и воли\r
\r
г) Знания и веры\r
\r
д) Время и пространства\r
\r
211.Не является видом искусства:\r
\r
а) театр\r
\r
б) музыка\r
\r
в) язык\r
\r
г) живопись\r
\r
д) архитектура\r
\r
212.Принцип единства мира в марксистской философии выражается в:\r
\r
а) целесообразности\r
\r
б) абсолютности\r
\r
в) идеальности\r
\r
г) причинности\r
\r
д) материальности\r
\r
213.Выделите качество, которое отличает человека от всех других живых\r
существ и их «псевдосоциальных» объединений:\r
\r
а) наличие инстинктов\r
\r
б) наличие культуры\r
\r
в) работа органов чувств\r
\r
г) функция воспроизведения рода, потомства\r
\r
д) смертность\r
\r
214.Понятие, отражающее повторяющиеся, устойчивые связи и отношения\r
между явлениями называется:\r
\r
а) причиной\r
\r
б) законом\r
\r
в) возможностью\r
\r
г) количеством\r
\r
д) методом\r
\r
215.Одной из сторон основного вопроса философии является вопрос:\r
\r
а) Что такое свобода?\r
\r
б) Есть жизнь на Марсе?\r
\r
в) Что первично, материя или дух?\r
\r
г) Куда мы идем?\r
\r
д) Что такое равенство?\r
\r
216.Выделите суждение, которое может принадлежать только дуалисту:\r
\r
а) сознание определяет бытие\r
\r
б) мир существует вне сознания людей\r
\r
в) основой мира является мировой разум\r
\r
г) материя и сознания -- две основы всего сущего\r
\r
д) бытие определяет сознание\r
\r
217.Формы чувственного познания:\r
\r
а) понятие суждение, умозаключение\r
\r
б) рассудок, разум, дух\r
\r
в) ощущение, восприятие ,представление\r
\r
г) интуиция, память воображение\r
\r
д) гипотеза, идея, теория\r
\r
218.Впервые философия возникла в:\r
\r
а) 1-2 в. до н.э.\r
\r
б) 5-6 в.в.\r
\r
в) 6-5 в.в. до н.э.\r
\r
г) ХХв.\r
\r
д) 5-10 в.\r
\r
219.Основные формы движения материи были разработаны:\r
\r
а) К.Марксом\r
\r
б) Ф.Энгельсом\r
\r
в) В.Лениным\r
\r
г) И.Кантом\r
\r
д) Л.Фейербахом\r
\r
220.Укажите, на каком этапе развития общества возникают социальные\r
группы, называемые классами:\r
\r
а) в феодальном обществе\r
\r
б) в первобытном обществе\r
\r
в) в рабовладельческом обществе\r
\r
г) в буржуазном обществе\r
\r
д) в социалистическом обществе\r
\r
221.Форма мышления, в которой отражаются общие, существенные свойства\r
определенного класса предметов, называются:\r
\r
а) суждением\r
\r
б) умозаключением\r
\r
в) восприятием\r
\r
г) представлением\r
\r
д) понятием\r
\r
222.Одномерность, одно направленность, необратимость-это основные\r
свойства:\r
\r
а) энергии\r
\r
б) природы\r
\r
в) экзистенции\r
\r
г) времени\r
\r
д) пространства\r
\r
223.Что, по мнению Энгельса, является основой антропосоциогенеза?\r
\r
а) сознание, способность к познанию.\r
\r
б) абстрактное мышление\r
\r
в) труд\r
\r
г) бессознательное.\r
\r
д) наличие в человеке инстинкта самосохранения.\r
\r
224.Атрибут материи, характеризующий протяженность, структурность\r
материальных систем есть:\r
\r
а) время\r
\r
б) покой\r
\r
в) развитие\r
\r
г) пространство\r
\r
д) движение\r
\r
225.Процесс общественной жизни с точки зрения его основных этапов, целей\r
и смыслов является предметом:\r
\r
а) истории философии\r
\r
б) философской антропологии\r
\r
в) философии истории\r
\r
г) историографии\r
\r
д) логики\r
\r
226.Понятие «философия истории» предложено в 1765 г. философом:\r
\r
а) Г.Гегелем.\r
\r
б) К.Марксом\r
\r
в) Л.Фейербахом\r
\r
г) Ф.Вольтером\r
\r
д) И.Кантом\r
\r
227.Не является предметом, изучаемым философией истории:\r
\r
а) проблема устройства (структуры) общества\r
\r
б) проблема движущих сил общественного развития\r
\r
в) проблема типологизации обществ\r
\r
г) проблема возникновения общества\r
\r
д) культура\r
\r
228.Согласно Г.Гегелю истинный двигатель истории:\r
\r
а) классовая борьба\r
\r
б) естественный отбор\r
\r
в) мировой дух\r
\r
г) исторические личности\r
\r
д) случайность\r
\r
229.Единой истории человечества не существует, есть только история\r
\r
локальных цивилизаций, так считают представители:\r
\r
а) культурологического подхода к истории общества\r
\r
б) формационного подхода к истории общества\r
\r
в) цивилизационного подхода к истории общества\r
\r
г) немецкой классической школы\r
\r
д) античной философии\r
\r
230.Понимание исторического процесса как автономного развития самобытных\r
культур разработано:\r
\r
а) Н.Бердяевым\r
\r
б) А.Тойнби\r
\r
в) К.Марксом\r
\r
г) В.Соловьевым\r
\r
д) О.Шпенглером\r
\r
231.Испанский мыслитель ХХ века Х. Ортега-и-Гассет введя в философию\r
\r
понятие «Восстание масс» имел ввиду:\r
\r
а) национально-освободительные революции\r
\r
б) эпоху массового общества\r
\r
в) «цветные» революции в постсоциалистических странах\r
\r
г) борьбу с коррупцией и привилегиями\r
\r
д) культурные изменения\r
\r
232.Культура -- это:\r
\r
а) умение вести себя в обществе\r
\r
б) система ценностей, определяющих жизнь человека\r
\r
в) совокупность созданных человеком вещей и предметов\r
\r
г) умение красиво говорить и одеваться\r
\r
д) нравственные нормы\r
\r
233.Какой вид творчества обладает минимальным потенциалом новизны?\r
\r
а) технический;\r
\r
б) художественный;\r
\r
в) религиозный;\r
\r
г) научный\r
\r
д) ремесленный\r
\r
234.Культура, из которой СМИ сделали отрасль экономики называется:\r
\r
а) элитарной\r
\r
б) народной\r
\r
в) массовой\r
\r
г) политической\r
\r
д) субкультурой\r
\r
235.Каково предназначение религии в обществе?\r
\r
а) религия помогает контролировать души людей\r
\r
б) религия помогает преодолеть все трудности жизни\r
\r
в) религия помогает защититься от искушений греха\r
\r
г) религия спасает людей от соблазна гордыни\r
\r
д) религия ничего не дает человеку\r
\r
236.Религиозные идеи относятся:\r
\r
а) к социальным ценностям\r
\r
б) к духовным ценностям\r
\r
в) ко всем видам ценностей\r
\r
г) к политическим ценностям\r
\r
д) утилитарным ценностям\r
\r
237.Сфера человеческой деятельности, функцией которой является\r
\r
выработка и теоретическая систематизация объективных данных о\r
\r
действительности -- это:\r
\r
а) философия\r
\r
б) наука\r
\r
в) общественное сознание\r
\r
г) образование\r
\r
д) культура\r
\r
238.Выберите правильное суждение, характеризующее цивилизацию:\r
\r
а) цивилизация - это духовная культура общества\r
\r
б) цивилизация -- это совокупность людей, объединенных единством\r
\r
религии\r
\r
в) цивилизация -- это моральная культура общества\r
\r
г) цивилизация -- это ступень развития общества, где взаимоотношения\r
между различными сторонами жизни регулируются при помощи выработанных\r
норм, установок, законов\r
\r
д) цивилизация-это совокупность людей с одинаковым статусом\r
\r
239.Философствование начинается с удивления:\r
\r
а) по Конфуцию\r
\r
б) по Соловьеву\r
\r
в) по философии прагматизма\r
\r
г) по позитивизму\r
\r
д) по Платону\r
\r
240.Не характерно для средневековой философии:\r
\r
а) символизм\r
\r
б) сциентизм\r
\r
в) теоцентризм\r
\r
г) креационизм\r
\r
д) провиденциализм\r
\r
241.Теория самоорганизации открытых систем называется:\r
\r
а) софистика\r
\r
б) диалектика\r
\r
в) метафизика\r
\r
г) синергетика\r
\r
д) эволюция\r
\r
242.Научное допущение или предположение называется:\r
\r
а) проблемой\r
\r
б) гипотезой\r
\r
в) принципом\r
\r
г) идеей\r
\r
д) теорией\r
\r
243.Высшая, самая развитая форма организации научного знания -- это:\r
\r
а) идея\r
\r
б) теория\r
\r
в) принцип\r
\r
г) проблема\r
\r
д) гипотеза\r
\r
244.Понятия «философская вера», «осевое время» были введены:\r
\r
а) А.Камю\r
\r
б) М.Хайдеггером\r
\r
в) К.Ясперсом\r
\r
г) Ж.-П.Сартром\r
\r
д) М.Бубером\r
\r
245.Наука по существу -- это:\r
\r
а) научные гипотезы\r
\r
б) жизненный опыт индивида\r
\r
в) теория и методология познания законов природы и общества\r
\r
г) сумма разнообразных знаний\r
\r
д) экспериментальная деятельность ученого\r
\r
246.Роль солнца в возникновении и развитии жизни на планете показал:\r
\r
а) Н.К. Рерих\r
\r
б) С.Н.Булгаков\r
\r
в) А.Л. Чижевский\r
\r
г) Н.О.Лосский\r
\r
д) Н.А.Бердяев\r
\r
247.Укажите, чувственно -- наглядный образ, сохраняемый в памяти и\r
воспроизводимый в сознании:\r
\r
а) понятие\r
\r
б) представление\r
\r
в) ощущение\r
\r
г) суждение\r
\r
д) восприятие\r
\r
248.Укажите, основные формы бытия:\r
\r
а) Бытие природы, бытие общества\r
\r
б) Бытие явлений, бытие сущностей, бытие формы, бытие содержания\r
\r
в) Бытие индивидуальное, бытие личностное\r
\r
г) Бытие вещей (тел), процессов, бытие человека, бытие духовного\r
(идеального), бытие социального\r
\r
д) Бытие единичного, бытие особенного, бытие общего\r
\r
249.Укажите, абсолютная истина в научно-философском смысле -- это:\r
\r
а) констатация фактов\r
\r
б) отход наших знаний от действительности\r
\r
в) точное, полное знание, которое постоянно подтверждается жизнью\r
\r
г) ограниченно верное, неполное знание о предмете\r
\r
д) застывшие научные догмы\r
\r
250.Укажите, искусство, мораль, религия, политика -- это:\r
\r
а) Формы духовного опыта\r
\r
б) Формы массового сознания\r
\r
в) Формы общественного сознания\r
\r
г) Формы практического сознания\r
\r
д) Формы повседневного сознания\r
\r
251.Укажите, кто из знаменитых ученых считал, что пространство - это\r
неизменное и неподвижное грандиозное вместилище, куда помещена материя:\r
\r
а) Эйнштейн\r
\r
б) Ньютон\r
\r
в) Максвелл\r
\r
г) Бор\r
\r
д) Дарвин\r
\r
252.Определите, что предполагает философский подход к человеку:\r
\r
а) анализ его поведения\r
\r
б) описание его внешнего вида\r
\r
в) измерение его роста и объема\r
\r
г) выявление его сущности\r
\r
д) излечение от болезней\r
\r
253.Укажите, религия как форма общественного сознания -- это:\r
\r
а) Система нравственных заповедей\r
\r
б) Научные высказывания и гипотезы\r
\r
в) Совокупность ценностных ориентаций\r
\r
г) Система взглядов, отражающих веру в Абсолют\r
\r
д) Свобода индивидуального выбора\r
\r
254.Отражение отдельных качеств, свойств, сторон предмета с помощью\r
органов чувств называется:\r
\r
а) восприятие\r
\r
б) ощущение\r
\r
в) понятие\r
\r
г) суждение\r
\r
д) представление\r
\r
255.Социальный характер сознания понимается как:\r
\r
а) Форма отражения\r
\r
б) Инстинкты влечения\r
\r
в) Комплекс ощущений\r
\r
г) Продукт предметно-практической деятельности\r
\r
д) Физиологические процессы\r
\r
256.Укажите, относительная истина в научно-философском смысле -- это:\r
\r
а) соответствие знаний о предмете самому предмету\r
\r
б) отход наших знаний от действительности\r
\r
в) ограниченно верное, неполное знание о предмете\r
\r
г) полное точное знание о предмете\r
\r
д) досадное недоразумение\r
\r
257.Кто из философов утверждал, что наука и техника должны быть\r
направлены на благо человечества и служить решению социальных проблем?\r
\r
а) Рене Декарт\r
\r
б) Фрэнсис Бэкон\r
\r
в) Иммануил Кант\r
\r
г) Карл Маркс\r
\r
д) Георг Вильгельм Фридрих Гегель\r
\r
258.Какое из утверждений соответствует философии образования в эпоху\r
Просвещения?\r
\r
а) Образование должно служить для воспитания моральных и религиозных\r
принципов\r
\r
б) Образование должно быть средством для развития разума и научного\r
подхода к миру\r
\r
в) Образование должно быть доступным только для элиты\r
\r
г) Образование должно оставаться в пределах традиционных религиозных\r
учений\r
\r
д) Образование должно быть строго политически ориентированным\r
\r
259.Какую роль в развитии науки и техники придавал Фрэнсис Бэкон?\r
\r
а) Наука должна подчиняться философским идеям и быть абстрактной\r
\r
б) Наука должна быть направлена на постижение Бога\r
\r
в) Наука должна быть практическим инструментом для улучшения жизни людей\r
\r
г) Наука должна служить духовным целям человека\r
\r
д) Наука должна быть только средством для развития искусства\r
\r
260.Кто из философов утверждал, что наука развивается через серию\r
парадигм, которые сменяются революционным образом?\r
\r
а) Мартин Хайдеггер\r
\r
б) Томас Кун\r
\r
в) Фридрих Ницше\r
\r
г) Иммануил Кант\r
\r
д) Жан-Поль Сартр\r
\r
261.Какую роль в философии науки играл концепт "научной объективности"?\r
\r
а) Наука не должна иметь объективных критериев\r
\r
б) Наука должна быть подчинена политическим интересам\r
\r
в) Научное знание должно быть объективным и независимым от человеческих\r
эмоций и предвзятости\r
\r
г) Наука служит исключительно для морального очищения человека\r
\r
д) Научные исследования всегда подвержены субъективной интерпретации\r
\r
262.Какое из утверждений о философии образования соответствует взглядам\r
Платона?\r
\r
а) Образование должно быть доступным только для элиты\r
\r
б) Образование должно служить для воспитания нравственности и\r
справедливости в государстве\r
\r
в) Образование должно быть связано исключительно с развитием технических\r
навыков\r
\r
г) Образование не имеет значения для социальной структуры\r
\r
д) Образование должно быть нейтральным и не вмешиваться в моральные\r
вопросы\r
\r
263.Кто из философов утверждал, что научный прогресс не всегда приводит\r
к улучшению жизни людей?\r
\r
а) Карл Маркс\r
\r
б) Мартин Хайдеггер\r
\r
б) Жан-Поль Сартр\r
\r
в) Рене Декарт\r
\r
г)Фридрих Ницше\r
\r
264.Какое из утверждений отражает позицию философов технократического\r
направления?\r
\r
а) Техника и наука должны быть независимыми от общества и политической\r
власти\r
\r
б) Технологический прогресс всегда ведет к моральному упадку\r
\r
в) Техника и наука должны быть подчинены религиозной морали\r
\r
г) Научные знания могут быть опасными и подлежат строгому контролю\r
\r
д) Научный и технический прогресс являются основой для общественного и\r
экономического развития\r
\r
265.Кто из философов утверждал, что социальная ответственность ученых\r
заключается в том, чтобы результаты их труда служили благу всего\r
человечества?\r
\r
а) Карл Маркс\r
\r
б) Жан-Поль Сартр\r
\r
в) Альберт Эйнштейн\r
\r
г) Иммануил Кант\r
\r
д) Фридрих Ницше\r
\r
266.Какое из понятий связано с философским понятием \\"экзистенция\\"?\\\r
а) Добродетель\r
\r
б) Материя\\\r
в) Разум\\\r
г) Истина\\\r
д) Существование\r
\r
267\\. Кто из философов считал, что смерть не должна тревожить, ибо пока\r
мы есть, смерти нет?\\\r
а) Пифагор\r
\r
б) Платон\\\r
в) Эпикур\\\r
г) Сенека\\\r
д) Августин\r
\r
268.Какое понятие отражает философское представление о \\"бессмысленности\r
жизни\\" у экзистенциалистов?\\\r
а) Порядок\\\r
б) Истина\\\r
в) Абсурд\\\r
г) Гармония\\\r
д) Космос\r
\r
269.Как называется философское учение о смерти как переходе в иной\r
бытийный режим?\\\r
а) Стоицизм\\\r
б) Гедонизм\\\r
в) Эпикуреизм\\\r
г) Трансцендентализм\\\r
д) Солипсизм\r
\r
270.Какая философская традиция особенно акцентирует значение \\"момента\r
смерти\\" для определения смысла жизни?\\\r
а) Стоицизм\\\r
б) Аристотелизм\\\r
в) Буддизм\\\r
г) Номинализм\\\r
д) Рационализм\r
\r
271.Как философы-стоики воспринимали смерть?\\\r
а) Как вечное проклятие\\\r
б) Как трагедию\r
\r
в) Как ужас\\\r
г) Как обман\\\r
д) Как освобождение\r
\r
272.Что означает \\"memento mori\\" в философском контексте?\\\r
а) Бойся вечности\\\r
б) Живи настоящим\\\r
в) Радуйся жизни\\\r
г) Стремись к истине\\\r
д) Помни о смерти\r
\r
273.Что означает понятие \\"фатализм\\" в философии?\\\r
а) Осознание абсурда\\\r
б) Стремление к удовольствию\\\r
в) Поиск смысла\\\r
г) Отрицание свободы воли\\\r
д) Борьба за свободу\r
\r
274.Как в философии определяют термин \\"эсхатология\\"?\\\r
а) Учение о смерти души\\\r
б) Учение о смысле жизни\\\r
в) Учение о природе\\\r
г) Учение о свободе\\\r
д) Учение о конце мира\r
\r
275.Кто писал: \\"Мир абсурден, но человек не должен сдаваться\\"?\\\r
а) Кьеркегор\\\r
б) Камю\\\r
в) Сартр\\\r
г) Ницше\\\r
д) Шопенгауэр\r
\r
276.Как называется философская дисциплина, изучающая природу ценностей?\\\r
а) Эпистемология\\\r
б) Аксиология\\\r
в) Эстетика\\\r
г) Этика\\\r
д) Логика\r
\r
277.Кто считается одним из основателей аксиологии?\\\r
а) Ницше\\\r
б) Шелер\\\r
в) Декарт\r
\r
г) Гоббс\\\r
д) Бэкон\r
\r
278.Какая философская школа настаивала на относительности всех\r
ценностей?\\\r
а) Стоики\\\r
б) Киники\\\r
в) Софисты\\\r
г) Перипатетики\\\r
д) Платоники\r
\r
279.Какая ценность считается основной в стоицизме?\\\r
а) Счастье\\\r
б) Удовольствие\\\r
в) Добродетель\\\r
г) Сила\\\r
д) Красота\r
\r
280.Кто говорил о \\"пересмотре всех ценностей\\"?\\\r
а) Кант\\\r
б) Гегель\r
\r
в) Ницше\\\r
г) Маркс\\\r
д) Спиноза\r
\r
281.Как называется учение, отрицающее наличие абсолютных ценностей?\\\r
а) Позитивизм\\\r
б) Рационализм\r
\r
в) Эмпиризм\\\r
г) Релятивизм\\\r
д) Метафизика\r
\r
282.Кто ввёл различие между \\"высшими\\" и \\"низшими\\" ценностями?\\\r
а) Кант\\\r
б) Кьеркегор\\\r
в) Ницше\\\r
г) Шелер\r
\r
д) Руссо\r
\r
283.Какая из этих ценностей считается \\"эстетической\\"?\\\r
а) Свобода\\\r
б) Справедливость\\\r
в) Истина\r
\r
г) Долг\\\r
д) Красота\r
\r
284\\. Какое понятие связано с оценкой поведения в категориях \\"добро\\" и\r
\\"зло\\"?\\\r
а) Логика\\\r
б) Эстетика\\\r
в) Политика\\\r
г) Этика\\\r
д) Эпистемология\r
\r
285\\. Кто рассматривал ценности как \\"переживаемые интуитивно\\"?\\\r
а) Кант\\\r
б) Шелер\\\r
в) Гегель\\\r
г) Руссо\\\r
д) Спиноза\r
\r
286.Какое из следующих утверждений соответствует релятивизму ценностей?\\\r
а) Существуют универсальные ценности\\\r
б) Все ценности субъективны\r
\r
в) Истина абсолютна.\\\r
г) Мораль едина для всех.\\\r
д) Все культуры одинаково ценны.\r
\r
287.Какой термин обозначает отрицание ценностей?\\\r
а) Гедонизм\\\r
б) Эвдемонизм\\\r
в) Рационализм\\\r
г) Стоицизм\\\r
д) Нигилизм\r
\r
288.Кто утверждал: \\"Человек есть мера всех вещей\\"?\\\r
а) Сократ\\\r
б) Платон\\\r
в) Аристотель\\\r
г) Протагор\\\r
д) Эпикур\r
\r
289.Что выражает понятие \\"инструментальная ценность\\"?\\\r
а) Ценность ради самой себя\\\r
б) Ценность как средство достижения цели\\\r
в) Эстетическую значимость\\\r
г) Моральное обязательство\\\r
д) Абсолютную истину\r
\r
290.Какая ценность традиционно считается \\"познавательной\\"?\\\r
а) Свобода\\\r
б) Истина\\\r
в) Долг\\\r
г) Любовь\\\r
д) Красота\r
\r
291.Кто ввёл понятие \\"ценностной установки\\" в философию?\\\r
а) Фрейд\\\r
б) Хайдеггер\\\r
в) Шелер\\\r
г) Гуссерль\\\r
д) Юм\r
\r
292.Что понимается под термином \\"аксиологический плюрализм\\"?\\\r
а) Рационализация ценностей\\\r
б) Наличие единой системы ценностей\\\r
в) Отрицание всех ценностей\\\r
г) Превосходство одной культуры\\\r
д) Существование множества равноправных ценностей\r
\r
293.Как называется философская концепция, утверждающая приоритет\r
чувственного удовольствия как высшей ценности?\\\r
а) Солипсизм\\\r
б) Рационализм\\\r
в) Стоицизм\r
\r
г) Нигилизм\\\r
д) Гедонизм\r
\r
294.В буддизме основными ценностями считаются:\\\r
а) Истина и красота\\\r
б) Нирвана и сострадание\r
\r
в) Власть и слава\\\r
г) Сила и воля\\\r
д) Свобода и долг\r
\r
295.Какое понятие обозначает полное отрицание моральных и культурных\r
ценностей?\\\r
а) Гуманизм\\\r
б) Солипсизм\\\r
в) Эвдемонизм\\\r
г) Рационализм\r
\r
д) Нигилизм\r
\r
296.Какая ценность считается базовой в гуманистической философии?\\\r
а) Честь\\\r
б) Человеческая личность\\\r
в) Власть\\\r
г) Сила\\\r
д) Богатство\r
\r
297.Кто из философов ввёл понятие "позитивная" и "негативная" свобода?\r
\r
а) Томас Гоббс\r
\r
б) Исайя Берлин\r
\r
в) Жан-Жак Руссо\r
\r
г) Иммануил Кант\r
\r
д) Фридрих Ницше\r
\r
298.Как Кант понимал свободу?\r
\r
а) Как подчинение природным инстинктам\r
\r
б) Как способность действовать по закону долга\r
\r
в) Как полное отсутствие ограничений\r
\r
г) Как стремление к удовольствию\r
\r
д) Как власть сильного над слабым\r
\r
299.Что утверждал Жан-Поль Сартр о человеческой свободе?\r
\r
а) Свобода --- иллюзия, навязанная обществом\r
\r
б) Свобода --- способность жить в гармонии с природой\r
\r
в) Человек обречён быть свободным\r
\r
г) Свобода --- привилегия избранных\r
\r
д) Свобода состоит в подчинении Божественной воле\r
\r
300.Что означает "негативная свобода" в философском контексте?\r
\r
а) Свобода через самоотречение\r
\r
б) Способность к самопожертвованию\r
\r
в) Свобода действовать исключительно на основе эмоций\r
\r
г) Свобода от внешнего принуждения\r
\r
д) Свобода как абсолютная власть\r
\r
301.Как философия определяет свободу?\r
\r
а) Следование традициям и обычаям\r
\r
б) Возможность действовать в соответствии с необходимостью природы\r
\r
в) Способность действовать по принуждению\r
\r
г) Отказ от любой ответственности\r
\r
д) Возможность сознательно выбирать и действовать на основе собственной\r
воли\r
\r
302.Какая проблема тесно связана с темой свободы в философии?\r
\r
а) Проблема бытия\r
\r
б) Проблема ответственности\r
\r
в) Проблема истины\r
\r
г) Проблема познания\r
\r
д) Проблема красоты\r
\r
303.Какое понятие противопоставляется свободе в философии?\r
\r
а) Вера\r
\r
б) Необходимость\r
\r
в) Невежество\r
\r
г) Истина\r
\r
д) Разум\r
\r
304.В философии свобода часто рассматривается как:\r
\r
а) Отсутствие каких-либо правил\r
\r
б) Возможность действовать по воле других\r
\r
в) Осознанный выбор между альтернативами\r
\r
г) Принудительное выполнение обязанностей\r
\r
д) Отказ от социальной жизни\r
\r
305.Кто утверждал, что человек "обречён быть свободным"?\r
\r
а) Жан-Жак Руссо\r
\r
б) Жан-Поль Сартр\r
\r
в) Иммануил Кант\r
\r
г) Гегель\r
\r
д) Фридрих Ницше\r
\r
306.Какое из следующих утверждений лучше всего отражает философское\r
понимание свободы?\r
\r
а) Свобода --- это следование правилам общества\r
\r
б) Свобода --- это отсутствие обязательств\r
\r
в) Свобода --- это выполнение желаний без ограничений\r
\r
г) Свобода --- это предопределение всех поступков\r
\r
д) Свобода --- это возможность действовать в рамках собственной\r
ответственности\r
\r
307.Какая философская школа особенно акцентировала внимание на\r
внутренней свободе человека, независимо от внешних обстоятельств?\r
\r
а) Софистика\r
\r
б) Стоицизм\r
\r
в) Схоластика\r
\r
г) Платонизм\r
\r
д)Эпикурейство\r
\r
308.Какое понятие тесно связано с идеей свободы в философии\r
экзистенциализма?\r
\r
а) Истина\r
\r
б) Судьба\r
\r
в) Бессознательное\r
\r
г) Ответственность\r
\r
д) Рок\r
\r
309.Какое понятие связано с отрицанием свободы в философии?\r
\r
а) Эстетизм\r
\r
б) Рационализм\r
\r
в) Гуманизм\r
\r
г) Детерминизм\r
\r
д) Оптимизм\r
\r
310.Кто из философов заявил, что искусство является способом выражения\r
высших духовных истин?\r
\r
а) Платон\r
\r
б) Карл Маркс\r
\r
в) Имануил Кант\r
\r
г) Георг Вильгельм Фридрих Гегель\r
\r
д) Фридрих Ницше\r
\r
311.Кто из философов утверждал, что искусство имеет функцию поддержания\r
стабильности в обществе через образы и символы?\r
\r
а) Карл Маркс\r
\r
б) Эмиль Дюркгейм\r
\r
в) Вильгельм Дильтей\r
\r
г) Георг Вильгельм Фридрих Гегель\r
\r
д) Жан-Поль Сартр\r
\r
312.Какой философ утверждал, что искусство служит для выражения духа\r
народов и их культурных особенностей?\r
\r
а) Вильгельм Дильтей\r
\r
б) Георг Вильгельм Фридрих Гегель\r
\r
в) Фридрих Ницше\r
\r
г) Карл Маркс\r
\r
д) Иоганн Готлиб Фихте\r
\r
313.Какую роль в философии искусства придавал Карл Маркс?\r
\r
а) Искусство является отражением воли к власти личности\r
\r
б) Искусство служит выражением социальной и политической борьбы\r
\r
в) Искусство должно поддерживать религиозные идеалы\r
\r
г) Искусство --- это исключительно эстетическая категория\r
\r
д) Искусство имеет значение только для нравственного очищения человека\r
\r
314\\. Кто из философов предложил концепцию, согласно которой культура\r
является отражением экономических и социальных условий общества?\r
\r
а) Жан-Жак Руссо\r
\r
б) Карл Маркс\r
\r
в) Георг Вильгельм Фридрих Гегель\r
\r
г) Иммануил Кант\r
\r
д) Фридрих Ницше\r
\r
315.Какое из утверждений наиболее точно отражает концепцию культуры в\r
философии Гегеля?\r
\r
а) Культура не имеет отношения к истории и обществу\r
\r
б) Культура всегда развивается хаотично и случайно\r
\r
в) Культура полностью определяется материальными условиями жизни\r
\r
г) Культура --- это продукт внешних воздействий и империи\r
\r
д) Культура является выражением духовного развития человечества\r
\r
316.Какое утверждение соответствует философии культурного релятивизма?\r
\r
а) Все культуры одинаковы и должны быть подчинены одной универсальной\r
системе\r
\r
б) Каждая культура имеет свою ценность и правомерность в своём контексте\r
\r
в) Культуры должны быть сравниваемы только с учётом экономических\r
факторов\r
\r
г) Культура является фиксированной и неизменной для всех народов\r
\r
д) Культура должна развиваться согласно принципам западного рационализма\r
\r
317.Какую роль в обществе и культуре, согласно Карлу Марксу, играет\r
классовая борьба?\r
\r
а) Классовая борьба способствует гармонии в культуре\r
\r
б) Она не имеет значения для культурного развития\r
\r
в) Классовая борьба не имеет влияния на культуру\r
\r
г) Она приводит только к разрушению культурных ценностей\r
\r
д) Классовая борьба является основой всех культурных изменений\r
\r
318.Кто из философов утверждал, что культура существует как результат\r
внешних социальных и экономических факторов, а не как субъективный акт\r
человека?\r
\r
а) Фридрих Ницше\r
\r
б) Георг Вильгельм Фридрих Гегель\r
\r
в) Рене Декарт\r
\r
г) Карл Маркс\r
\r
д) Жан-Жак Руссо\r
\r
319.Какое из утверждений лучше всего описывает концепцию культурного\r
детерминизма?\r
\r
а) Культура формируется исключительно через взаимодействие с природой\r
\r
б) Культура полностью зависит от биологических факторов\r
\r
в) Культура не имеет отношения к развитию общества\r
\r
г) Культура существует независимо от условий жизни людей\r
\r
д) Культура является основой для формирования общества\r
\r
320.Какой философ утверждал, что культура и цивилизация развиваются в\r
зависимости от философских и религиозных идей общества?\r
\r
а) Фридрих Ницше\r
\r
б) Георг Вильгельм Фридрих Гегель\r
\r
в) Арнольд Тойнби\r
\r
г) Томас Гоббс\r
\r
д) Карл Поппер\r
\r
321.В философии, что такое "культура"?\r
\r
а) Культура --- это временное явление, исчезающее со временем\r
\r
б) Культура --- это совокупность материальных объектов, созданных\r
человеком\r
\r
в) Культура --- это биологическая основа существования человека\r
\r
г) Культура --- это система норм, ценностей и представлений, которые\r
регулируют общественную жизнь\r
\r
д) Культура --- это только форма искусства\r
\r
322.Какую роль в развитии культуры играет семья, согласно философии\r
социальной реальности?\r
\r
а) Семья --- это основной институт, передающий традиции и культурные\r
ценности\r
\r
б) Семья не имеет отношения к культурным процессам\r
\r
в) Семья только изолирует индивидов от общества\r
\r
г) Семья препятствует развитию культуры\r
\r
д) Семья существует только для выполнения экономических функций\r
\r
323.Какую роль в развитии культуры имеет технология, согласно Марксу?\r
\r
а) Технологии определяют только экономическое развитие, но не культуру\r
\r
б) Технологии не влияют на культуру\r
\r
в) Технологии должны подчиняться культуре и религии\r
\r
г) Технологии и культура существуют независимо друг от друга\r
\r
д) Технологии являются основой для создания новых культурных форм и\r
общественных отношений\r
\r
324.Что характеризует культуру в рамках философии символического\r
интеракционизма?\r
\r
а) Культура --- это набор материальных объектов и технологий\r
\r
б) Культура --- это система символов и значений, формирующих\r
общественные отношения\r
\r
в) Культура определяется только через экономические категории\r
\r
г) Культура --- это продукт религиозных верований\r
\r
д) Культура развивается исключительно через внешние политические силы\r
\r
325.Как философия утверждает взаимосвязь между культурой и национальной\r
идентичностью?\r
\r
а) Культура независима от национальных аспектов\r
\r
б) Культура не имеет отношения к национальной идентичности\r
\r
в) Национальная идентичность всегда подчиняется мировым культурным\r
стандартам\r
\r
г) Культура и национальная идентичность взаимно влияют друг на друга,\r
поддерживая национальные традиции\r
\r
д) Национальная идентичность существует только как культурный феномен\r
без истории\r
\r
326.В философии, что подразумевается под понятием «социальная культура»?\r
\r
а) Культура, лишённая духовных ценностей\r
\r
б) Культура, существующая вне социальных взаимодействий\r
\r
в) Культура, созданная исключительно интеллектуальными элитами\r
\r
г) Культура, которая обусловлена и формирует общественные отношения и\r
нормы\r
\r
д) Культура, ограниченная только материальными аспектами\r
\r
327.Какое утверждение о культуре, согласно философии Маркса, является\r
верным?\r
\r
а) Культура всегда противопоставляется материальной жизни\r
\r
б) Культура формируется исключительно через эстетические взгляды и\r
искусство\r
\r
в) Культура является результатом независимой духовной активности\r
человека\r
\r
г) Культура является производной от материальных и экономических условий\r
жизни\r
\r
д) Культура развивается по законам, независимым от социальной структуры\r
\r
328.Что, согласно философии символического интеракционизма, является\r
основой культуры?\r
\r
а) Личностные переживания и внутренние эмоции\r
\r
б) Материальные объекты и технологии\r
\r
в) Экономические и политические факторы\r
\r
г) Символы и значения, возникающие в процессе общения и взаимодействия\r
людей\r
\r
д) Природные и биологические инстинкты\r
\r
329.Какое из утверждений наиболее точно отражает философию культурного\r
плюрализма?\r
\r
а) Каждая культура изначально превосходит все другие\r
\r
б) Все культуры должны подчиняться единому культурному стандарту\r
\r
в) Все культуры должны ассимилироваться в глобализированном обществе\r
\r
г) Культуры не могут существовать без единой религии\r
\r
д) Культуры должны взаимодействовать и влиять друг на друга, но\r
сохранять свою уникальность\r
\r
330.Кто из философов первым предложил идею о прогрессивном развитии\r
человеческой истории?\r
\r
а) Карл Маркс\r
\r
б) Георг Вильгельм Фридрих Гегель\r
\r
в) Фридрих Ницше\r
\r
г) Иммануил Кант\r
\r
д) Жан-Жак Руссо\r
\r
331.Какое направление в философии истории утверждает, что история\r
является цикличной?\r
\r
а) Прогрессивизм\r
\r
б) Романтизм\r
\r
в) Античный пессимизм\r
\r
г) Исторический материализм\r
\r
д) Циклическая теория\r
\r
332.В философии истории, что означает концепция «исторического\r
материализма»?\r
\r
а) История не имеет определённого смысла\r
\r
б) История развивается по духовным и культурным законам\r
\r
в) История развивается через действия индивидуумов и героев\r
\r
г) История объясняется через материальные условия и экономические\r
факторы\r
\r
д) История развивается через научные открытия и философские размышления\r
\r
333.Какое из утверждений лучше всего описывает концепцию истории у Карла\r
Маркса?\r
\r
а) История --- это путь гуманистического прогресса человечества\r
\r
б) История является последовательностью религиозных откровений\r
\r
в) История развивается через духовное просветление\r
\r
г) История есть борьба классов, основанная на экономических интересах\r
\r
д) История не имеет смысла и происходит случайным образом\r
\r
334\\. В каком философском течении основной акцент делается на\r
индивидуальные поступки и судьбы людей как движущую силу истории?\r
\r
а) Реализм\r
\r
б) Идеализм\r
\r
в) Эмпиризм\r
\r
г) Романтизм\r
\r
д) Экзистенциализм\r
\r
335.Кто из философов предложил концепцию «мирового духа» как движущей\r
силы истории?\r
\r
а) Иммануил Кант\r
\r
б) Карл Маркс\r
\r
в) Георг Вильгельм Фридрих Гегель\r
\r
г) Фридрих Ницше\r
\r
д) Давид Юм\r
\r
336.Что утверждает исторический оптимизм в философии истории?\r
\r
а) История всегда циклична и не имеет конца\r
\r
б) История --- это процесс морального и культурного прогресса\r
\r
в) История человечества неизбежно ведет к полному разрушению\r
\r
г) История не имеет никакого смысла и не поддается анализу\r
\r
д) История человечества всегда ведет к краху государства\r
\r
337.Какой философ утверждал, что история развивается не по прямой линии,\r
а через серию скачков и переломных моментов?\r
\r
а) Карл Маркс\r
\r
б) Георг Вильгельм Фридрих Гегель\r
\r
в) Платон\r
\r
г) Фридрих Ницше\r
\r
д)Томас Гоббс\r
\r
338.В философии истории, как называют переход от феодального общества к\r
капиталистическому?\r
\r
а) Экономическая эволюция\r
\r
в) Культурная трансформация\r
\r
в) Духовная революция\r
\r
г) Социальная революция\r
\r
д) Революция идей\r
\r
339.Кто из философов подчеркивал, что история есть борьба за власть\r
между различными классами общества?\r
\r
а) Жан-Жак Руссо\r
\r
б) Карл Маркс\r
\r
в) Фридрих Ницше\r
\r
г) Мартин Хайдеггер\r
\r
д) Иммануил Кант\r
\r
340.Какое утверждение верно в отношении концепции «исторического\r
детерминизма»?\r
\r
а) История --- это субъективная интерпретация событий\r
\r
б) Человеческие действия не влияют на ход истории\r
\r
в) История развивается случайным образом, без каких-либо закономерностей\r
\r
г) История полностью определяется духовными идеями\r
\r
д) История подчинена определённым неизбежным законам\r
\r
341.Что означает «исторический оптимизм»?\r
\r
а) Вера в неизбежность катастроф и трагедий\r
\r
б) Вера в бесконечное страдание человечества\r
\r
в) Идея, что история не имеет смысла\r
\r
г) Утверждение, что прогресс невозможен\r
\r
д) Идея, что история всегда движется к лучшему\r
\r
342.Какую роль в философии истории играют великие личности, согласно\r
философии Гегеля?\r
\r
а) Великие личности создают отдельные исторические эпохи\r
\r
б) Они бессознательно формируют историческое развитие\r
\r
в) Они не имеют влияния на ход истории\r
\r
г) Их действия являются чисто случайными\r
\r
д) Они являются инструментами мирового духа в его самопознании\r
\r
343.Какое место в философии истории занимает концепция исторического\r
прогресса у Маркса?\r
\r
а) Прогресс является абсолютной истиной для всех народов\r
\r
б) Прогресс --- это продолжение разрушений и хаоса\r
\r
в) Прогресс возможен только в духовной сфере\r
\r
г) Прогресс невозможно понять без религиозного контекста\r
\r
д) Прогресс --- это развитие человеческой свободы через классовую борьбу\r
\r
344.Кто из философов утверждал, что идеология и политика непосредственно\r
влияют на ход истории?\r
\r
а) Георг Вильгельм Фридрих Гегель\r
\r
б) Карл Маркс\r
\r
в) Рене Декарт\r
\r
г) Жан-Поль Сартр\r
\r
д) Фридрих Ницше\r
\r
345.Какое из утверждений отражает философию истории, предложенную\r
Жан-Жаком Руссо?\r
\r
а) История человечества --- это прогресс разума\r
\r
б) История --- это борьба за справедливость и свободу\r
\r
в) История --- это противоречие между разумом и моралью\r
\r
г) История --- это результат экономических процессов\r
\r
д) История человечества --- это вечный круговорот без изменений\r
\r
346.Какое из утверждений описывает философию истории, предложенную\r
Марксом?\r
\r
а) История --- это результат борьбы классов и изменений в экономике\r
\r
б) История --- это результат действий великих личностей\r
\r
в) История --- это поиск морального совершенства\r
\r
г) История --- это путь к духовному прогрессу\r
\r
д) История не имеет смысла и подчиняется случайности\r
\r
347.Кто из философов был противником идеи прогресса в истории,\r
утверждая, что история имеет циклический характер?\r
\r
а) Арнольд Тойнби\r
\r
б) Георг Вильгельм Фридрих Гегель\r
\r
в) Карл Маркс\r
\r
г) Фридрих Ницше\r
\r
д) Жан-Поль Сартр\r
\r
348.Что утверждает философия истории в контексте «исторической\r
закономерности»?\r
\r
а) История подчиняется исключительно моральным законам\r
\r
б) История развивается случайным образом, без конкретных закономерностей\r
\r
в) История всегда повторяется в циклах, но никогда не повторяется в\r
точности\r
\r
г) История подчинена определённым экономическим и социальным законам\r
\r
д) История развивается лишь по законам природных катастроф\r
\r
349.Какую философскую концепцию утверждал Платон относительно истории?\r
\r
а) История --- это путешествие человеческого духа через моральные\r
испытания\r
\r
б) История --- это прогресс науки и технологий\r
\r
в) История --- это процесс революции и разрушения\r
\r
г) История движется к абсолютному справедливому обществу\r
\r
д) История --- это путь духовного просветления\r
\r
350.Что изучает философия религии?\r
\r
а) Историческое развитие отдельных религий\r
\r
б) Археологию древних храмов\r
\r
в) Ритуальные практики разных народов\r
\r
г) Обычаи и традиции религиозных сообществ\r
\r
д) Рациональный анализ природы религиозной веры и понятий о Боге\r
\r
351.Как называется философское учение, отрицающее существование Бога?\r
\r
а) Пантеизм\r
\r
б) Атеизм\r
\r
в) Теизм\r
\r
г) Агностицизм\r
\r
д) Деизм\r
\r
352.В чем заключается суть космологического аргумента за существование\r
Бога?\r
\r
а) Бог существует только в вере\r
\r
б) Бог --- это первопричина мира\r
\r
в) Бог является проекцией человеческих желаний\r
\r
г) Бог проявляется через природу\r
\r
д) Бог доступен только через мистический опыт\r
\r
353.Кто из философов утверждал, что религия возникает из человеческой\r
потребности в спасении?\r
\r
а) Дэвид Юм\r
\r
б) Иммануил Кант\r
\r
в) Людвиг Фейербах\r
\r
г) Блез Паскаль\r
\r
д) Фридрих Ницше\r
\r
354.Что означает термин "пантеизм" в философии религии?\r
\r
а) Вера в множество богов\r
\r
б) Отрицание существования Бога\r
\r
в) Отождествление Бога с природой и вселенной\r
\r
г) Строгое различие Бога и мира\r
\r
д) Вера в спасение через добрые дела\r
\r
355.Какое высказывание отражает позицию атеизма?\r
\r
а) Бог существует, но его природа непознаваема\r
\r
б) Бог существует и проявляет себя в откровении\r
\r
в) Существование Бога недоказуемо и неважно\r
\r
г) Существование Бога отрицается\r
\r
д) Существование Бога подтверждается священными текстами\r
\r
356.Какое утверждение верно в отношении деизма?\r
\r
а) Бог существует только как идея в разуме\r
\r
б) Бог постоянно вмешивается в дела мира\r
\r
в) Бог создал мир, но не управляет им напрямую\r
\r
г) Бога нет, существует только природа\r
\r
д) Бог требует постоянного культа и жертвоприношений\r
\r
357.Какое направление в философии религии акцентирует веру на опыте\r
личного откровения, а не на рациональных доказательствах?\r
\r
а) Деизм\r
\r
б) Рационализм\r
\r
в) Скептицизм\r
\r
г) Материализм\r
\r
д) Мистицизм\r
\r
358.Кто является автором идеи «Мәңгілік Ел» («Вечная страна») в\r
философии современного Казахстана?\r
\r
а) Нурсултан Назарбаев\r
\r
б) Аблай хан\r
\r
в) Чокан Валиханов\r
\r
г) Абай Кунанбаев\r
\r
д) Аль-Фараби\r
\r
359.Какое философское значение имеет концепция «Рухани жаңғыру»\r
("Духовное обновление")?\r
\r
а) Совмещение национальной идентичности и глобализации\r
\r
б) Возвращение к кочевому образу жизни\r
\r
в) Отказ от традиций ради технологий\r
\r
г) Стремление к полной западной интеграции\r
\r
д) Полный отказ от реформ\r
\r
360.Какой философско-культурный процесс особенно усилился в Казахстане в\r
постсоветский период?\r
\r
а) Возрождение интереса к исламской философии\r
\r
б) Возврат к социалистическим идеям\r
\r
в) Повсеместное распространение аграрного образа жизни\r
\r
г) Отказ от национальной культуры\r
\r
д)Ренессанс марксистской философии\r
\r
361.Какую роль в философии современного Казахстана играет идея\r
евразийства?\r
\r
а) Объединение восточных и западных традиций\r
\r
б) Отрицание культурных различий\r
\r
в) Призыв к изоляции от мира\r
\r
г) Превосходство одной культуры над другими\r
\r
д) Игнорирование национального самосознания\r
\r
362.Какая ценность традиционно подчёркивается в казахстанской философии?\r
\r
а) Коллективизм и уважение к старшим\r
\r
б) Индивидуализм\r
\r
в) Культ личной свободы без ограничений\r
\r
г) Абсолютная власть монарха\r
\r
д) Приоритет частной собственности над обществом\r
\r
363.Какую роль философия играет в программе «Рухани жаңғыру»?\r
\r
а) Открывает путь для осознанной модернизации общества\r
\r
б) Способствует сохранению традиций без изменений\r
\r
в) Лишь критикует глобализацию\r
\r
г) Призывает отказаться от национальных ценностей\r
\r
д) Защищает консервативные взгляды без реформ\r
\r
364.Какой принцип важен для философии независимого Казахстана?\r
\r
а) Укрепление национального сознания в условиях глобализации\r
\r
б) Полное подчинение идеям прошлого\r
\r
в) Отказ от исторического наследия\r
\r
г) Превосходство одной нации над другими\r
\r
д) Доминирование сельского уклада жизни\r
\r
365.Какая ценность занимает важное место в философии современного\r
Казахстана?\r
\r
а) Коллективизм\r
\r
б) Индивидуализм\r
\r
в) Равнодушие\r
\r
г) Противостояние\r
\r
д) Изоляция\r
\r
366.Как называется официальная идеология независимого Казахстана,\r
связанная с укреплением национального самосознания?\r
\r
а) Идея национального единства\r
\r
б) Марксизм\r
\r
в) Пантеизм\r
\r
г) Космополитизм\r
\r
д) Постмодернизм\r
\r
367.Какой принцип считается важным для общественного развития в\r
современной философии Казахстана?\r
\r
а) Доминирование одной этнической группы\r
\r
б) Приоритезация материального богатства\r
\r
в) Толерантность и межэтническое согласие\r
\r
г) Превосходство традиций над правом\r
\r
д) Отказ от глобализации\r
\r
368.В философии современного Казахстана какое значение придается понятию\r
«духовной модернизации»?\r
\r
а) Восстановление традиционных ценностей в рамках новых социальных\r
реалий\r
\r
б) Отказ от религиозных ценностей в пользу науки\r
\r
в) Открытое принятие западной культуры без критики\r
\r
г) Поддержка агрессивной политической идеологии\r
\r
д) Полное замыкание на национальной культуре\r
\r
369.В чем заключается основной смысл философии «инклюзивного роста» для\r
Казахстана?\r
\r
а) Обеспечение равных возможностей для всех граждан, независимо от их\r
социального положения\r
\r
б) Поддержка свободного рынка без государственной регуляции\r
\r
в) Исключение определённых групп людей из социальной и экономической\r
жизни\r
\r
г) Создание экономики, ориентированной исключительно на экспорт сырья\r
\r
д) Снижение роли гражданского общества в развитии страны\r
\r
370.Какое философское направление в Казахстане поддерживает идею о\r
взаимосвязанности и взаимозависимости человека и природы?\r
\r
а) Социальный дарвинизм\r
\r
б) Экспансивный капитализм\r
\r
в) Экологический гуманизм\r
\r
г) Абстрактный рационализм\r
\r
д) Позитивизм\r
\r
371.Какая философская идея лежит в основе концепции «Мәңгілік Ел»?\r
\r
а) Вечное существование и процветание Казахстана как независимого\r
государства\r
\r
б) Национальная изоляция от внешнего мира\r
\r
в) Полное принятие западных ценностей и отказ от традиций\r
\r
г) Осуществление глобальных экономических реформ\r
\r
д) Подчинение Казахстана мировой политической элите\r
\r
372.В философии Казахстана какое значение придается понятию «духовной\r
модернизации»?\r
\r
а) Обновление духовных и моральных ценностей с учетом современных\r
вызовов\r
\r
б) Создание научных моделей для устранения культурных различий\r
\r
в) Отказ от всех религиозных учений в пользу секуляризма\r
\r
г) Принятие исключительно западной модели гуманизма\r
\r
д) Переход к агрессивной националистической идеологии\r
\r
373.В экономической сфере жизни общества материальное производство\r
решает следующие задачи:\r
\r
а) создает материальную базу существования общества\r
\r
б) способствует развитию философского знания\r
\r
в) непосредственно влияет на социальную структуру (классы, социальные\r
группы и т.д.)\r
\r
г) определяет политические процессы\r
\r
д) определяет духовные процессы\r
\r
374.Социал-дарвинизм признает, что:\r
\r
а) необходимо иметь целенаправленный контроль над воспроизводством людей\r
\r
б) социальные проблемы и конфликты не зависят от природных задатков\r
человеческого рода\r
\r
в) человек есть и природное, и социальное существо\r
\r
г) в обществе, как и в природе, действует естественный отбор\r
\r
д) нет верного ответа\r
\r
375.Фактору случайности в саморазвитии общества основное значение\r
придает современное направление:\r
\r
а) постмодернизма\r
\r
б) структурализма\r
\r
в) синергетики\r
\r
г) герменевтики\r
\r
д) функционализма\r
\r
376.Укажите сферу философского знания, обращенную к изучению человека:\r
\r
а) диалектика\r
\r
б) гносеология\r
\r
в) онтология\r
\r
г) социальная философия\r
\r
д) философская антропология\r
\r
377.Выделите социальный фактор, который, по мнению немецкого философа\r
XIX в. Ф. Энгельса, сыграл решающую роль в антропосоциогенезе:\r
\r
а) освобождение верхних конечностей\r
\r
б) использование огня\r
\r
в) трудовая деятельность в коллективе\r
\r
г) вмешательство внеземных цивилизаций\r
\r
д) нет верного ответа\r
\r
378.Гносеология --- это учение:\r
\r
а) о ценностях, об их происхождении и сущности;\r
\r
б) о бытии как таковом;\r
\r
в) о сущности познания, о путях постижения истины;\r
\r
г) о сущности человеческой истории.\r
\r
д) нет верного ответа\r
\r
379.Термин «культура» латинского происхождения и он первоначально\r
означал:\r
\r
а) все созданное человеком;\r
\r
б) возделывание почвы;\r
\r
в) духовную культуру;\r
\r
г) возделывание души человека\r
\r
д) нет верного ответа\r
\r
380.Учение о сущности человека, смысле человеческой жизни, необходимости\r
и случайности, свободе и т. д., носит название:\r
\r
а) философская антропология;\r
\r
б) онтология;\r
\r
в) гносеология;\r
\r
г) аксиология.\r
\r
д)диалектика\r
\r
381.Вера в одухотворенность природы называется (укажите):\r
\r
а) фетишизм.\r
\r
б) анимизм.\r
\r
в) табу.\r
\r
г) шаманизм.\r
\r
д) тотемизм\r
\r
382.Родство групп людей с какими-то видами животных, растений, явлений\r
\r
природы называется (укажите):\r
\r
а) тотемизм.\r
\r
б) табу.\r
\r
в) шаманизм.\r
\r
г) магия.\r
\r
д) анимизм.\r
\r
383.Вера в способность отдельных людей общаться с духами и использовать\r
их силу для врачевания и других целей называется (укажите):\r
\r
а) Магия.\r
\r
б) Анимизм.\r
\r
в) Табу.\r
\r
г) Шаманизм.\r
\r
д)Тотемизм.\r
\r
384.Фетишизм это вера в:\r
\r
а) судьбу\r
\r
б) магическую вещь\r
\r
в) жизнь\r
\r
г) Бога\r
\r
д) природу\r
\r
385.Тотемизм это вера в:\r
\r
а) связь между людьми\r
\r
б) удачу\r
\r
в) судьбу\r
\r
г) любовь\r
\r
д) связь между группой людей и каким-либо растением или животным\r
\r
386.Табу это:\r
\r
а) амулет\r
\r
б) ритуальный барабан\r
\r
в) запрет на что-то\r
\r
г) разрешение на что-то\r
\r
д)нет верного ответа\r
\r
387.Когда возник буддизм?\r
\r
а) I век до н.э.\r
\r
б) ХI век до н.э.\r
\r
в) IХ век до н.э.\r
\r
г) VI век до н.э.\r
\r
д) VI I век н.э.\r
\r
388.Кто является основателем буддизма?\r
\r
а) Сирвата Сиддхартаха Гаутама\r
\r
б) Кунфу- цзы\r
\r
в) Лао-цзы\r
\r
г) Сыма-цянь\r
\r
д) Махавира Вардхамана\r
\r
389.Автором какого учения стал Будда?\r
\r
а) учение о четырех благородных истинах\r
\r
б) учение о восьми стихиях\r
\r
в) учение о взаимоотношениях инь и ян\r
\r
г) учение о трѐх ипостасях Бога\r
\r
д)учение о дао и дэ\r
\r
390.Что такое трипитака (или типитака)?\r
\r
а) название главной книги в буддизме\r
\r
б) молитва буддистов\r
\r
в) три способа вхождения в нирвану\r
\r
г) название способа жертвоприношения\r
\r
д) название женских монастырей в буддизме\r
\r
391.Суть своего учения Будда выразил в ...?\r
\r
а) "четырех благородных истинах"\r
\r
б) "десяти заповедях"\r
\r
в) "восьми благородных указаниях"\r
\r
г) " учении о восьми стихиях\r
\r
д) нет верного ответа\r
\r
392.Карма это:\r
\r
а) идея воздаяния\r
\r
б) обряд буддизма\r
\r
в) грех\r
\r
г) молитва\r
\r
д) нет верного ответа\r
\r
393.Будда в переводе означает:\r
\r
а) просветленный\r
\r
б) ученый\r
\r
в) продвинутый\r
\r
г) мудрый\r
\r
д) нет верного ответа\r
\r
394.Как можно перевести название свода буддийской канонической\r
литературы -Трипитака?\r
\r
а) три корзины\r
\r
б) три драгоценности\r
\r
в) три бриллианта\r
\r
г) три храма\r
\r
д) три веры\r
\r
395.Когда возникло христианство?\r
\r
а) в I веке н.э.\r
\r
б) во II веке до н.э.\r
\r
в) в III веке н.э.\r
\r
г) во II веке н.э.\r
\r
д) в IV веке н.э.\r
\r
396.Сколько основных направлений выделилось в христианстве?\r
\r
а) три\r
\r
б) одно\r
\r
в) два\r
\r
г) четыре\r
\r
д)пять\r
\r
397.В каком веке христианство стало государственной религией в Римской\r
империи?\r
\r
а) IV век\r
\r
б) I век\r
\r
в) II век\r
\r
г) III век\r
\r
д) V век\r
\r
398.В каком веке зародился ислам?\r
\r
а) в VII веке н.э\r
\r
б) в III веке до н.э.\r
\r
в) в III веке н.э.\r
\r
г) в IV веке до н.э.\r
\r
д) в VI веке н.э.\r
\r
399.Основы вероучения ислама изложены в (укажите):\r
\r
а) Коране\r
\r
б) Библии\r
\r
в) Торе\r
\r
г) Талмуде\r
\r
д)Типитаке\r
\r
400.В чем заключается главное условие спасения в буддизме?\r
\r
а) избавление от желаний.\r
\r
б) послушание воле Божьей.\r
\r
в) магические ритуалы.\r
\r
г) самоистязание.\r
\r
д)нет верного ответа\r
\r
401.Мировые религии -- это:\r
\r
а) ислам, христианство, буддизм\r
\r
б) религии Древней Греции и Рима\r
\r
в) иудаизм, индуизм\r
\r
г) иудаизм, христианство, буддизм\r
\r
д) конфуцианство и даосизм\r
\r
402.Национальные религии - это:\r
\r
а) синтоизм, конфуцианство, индуизм\r
\r
б) синтоизм, буддизм, иудаизм\r
\r
в) синтоизм, индуизм, ислам\r
\r
г) синтоизм, христианство, иудаизм\r
\r
д) нет верного ответа\r
\r
403.К какой этической традиции можно отнести следующее высказывание\r
Дж.Локка : «Добром мы называем то, что способно вызвать или увеличить\r
наше удовольствие»?\r
\r
а) гедонизм\r
\r
б) ригоризм\r
\r
в) эвдемонизм\r
\r
г) прагматизм\r
\r
д) утилитаризм\r
\r
404.Как называется этическая концепция, разработанная И.Кантом?\r
\r
а) этика долга\r
\r
б) этика утилитаризма\r
\r
в) этика прагматизма\r
\r
г) этика ценностей\r
\r
д) этика добродетелей\r
\r
405.Как называется система норм, правил поведения, выражающая\r
представления людей о зле, добре, справедливости:\r
\r
а) мораль\r
\r
б) философия\r
\r
в) наука\r
\r
г) религия\r
\r
д) искусство\r
\r
406.Антропоцентрический характер философствования присущ:\r
\r
а) Эпохе Возрождения\r
\r
б) Эпохе Научной революции\r
\r
в) Эпохе Средневековья\r
\r
г) Эпохе Античности\r
\r
д) Эпохе Просвещения\r
\r
407.Определите понимание человека, характерное для философии\r
Возрождения:\r
\r
а) человек -- это творец, художник\r
\r
б) человек -- это микрокосм\r
\r
в) человек -- это общественное животное\r
\r
г) человек -- это мыслящее существо\r
\r
д) человек -- созданное Богом существо\r
\r
408.Пантеизм -- это учение о максимальном сближении:\r
\r
а) Бога и природы\r
\r
б) Духа и материи\r
\r
в) Разума и воли\r
\r
г) Знания и веры\r
\r
д) Время и пространства\r
\r
409.Не является видом искусства:\r
\r
а) язык\r
\r
б) музыка\r
\r
в) театр\r
\r
г) живопись\r
\r
д) архитектура\r
\r
410.Как называется философское направление, признающее одно начало мира:\r
\r
а) монизм\r
\r
б) дуализм\r
\r
в) агностицизм\r
\r
г) механицизм\r
\r
д) плюрализм\r
\r
411.Принцип единства мира в марксистской философии выражается в:\r
\r
а) материальности\r
\r
б) абсолютности\r
\r
в) идеальности\r
\r
г) причинности\r
\r
д) целесообразности\r
\r
412.Выделите качество, которое отличает человека от всех других живых\r
существ и их «псевдосоциальных» объединений:\r
\r
а) наличие культуры\r
\r
б) наличие инстинктов\r
\r
в) работа органов чувств\r
\r
г) функция воспроизведения рода, потомства\r
\r
д)смертность\r
\r
413.Понятие, отражающее повторяющиеся, устойчивые связи и отношения\r
между явлениями называется:\r
\r
а) законом\r
\r
б) причиной\r
\r
в) возможностью\r
\r
г) количеством\r
\r
д) методом\r
\r
414.Одной из сторон основного вопроса философии является вопрос:\r
\r
а) Что первично, материя или дух?\r
\r
б) Есть жизнь на Марсе?\r
\r
в) Что такое свобода?\r
\r
г) Куда мы идем?\r
\r
д) Что такое равенство?\r
\r
415.Выделите суждение, которое может принадлежать только дуалисту:\r
\r
а) материя и сознания -- две основы всего сущего\r
\r
б) мир существует вне сознания людей\r
\r
в) основой мира является мировой разум\r
\r
г) сознание определяет бытие\r
\r
д) бытие определяет сознание\r
\r
416.Формы чувственного познания:\r
\r
а) ощущение, восприятие ,представление\r
\r
б) рассудок, разум, дух\r
\r
в) понятие суждение, умозаключение\r
\r
г) интуиция, память воображение\r
\r
д) гипотеза, идея, теория\r
\r
417.Представление о материи как атом, из которых состоит все в мире,\r
было выработано:\r
\r
а) в эпоху античности\r
\r
б) в эпоху средневековья\r
\r
в) в эпоху возрождение\r
\r
г) в ХVIII веке\r
\r
д) в эпоху просвещения\r
\r
418.Впервые философия возникла в:\r
\r
а) 6-5 в.в. до н.э.\r
\r
б) 5-6 в.в.\r
\r
в) 1-2 в. до н.э.\r
\r
г) ХХв.\r
\r
д) 5-10 в.\r
\r
419.Основные формы движения материи были разработаны:\r
\r
а) Ф.Энгельсом\r
\r
б) К.Марксом\r
\r
в) В.Лениным\r
\r
г) И.Кантом\r
\r
д) Л.Фейербахом\r
\r
420.Укажите, на каком этапе развития общества возникают социальные\r
группы, называемые классами:\r
\r
а) в рабовладельческом обществе\r
\r
б) в первобытном обществе\r
\r
в) в феодальном обществе\r
\r
г) в буржуазном обществе\r
\r
д) в социалистическом обществе\r
\r
421.Форма мышления, в которой отражаются общие, существенные свойства\r
определенного класса предметов, называются:\r
\r
а) понятием\r
\r
б) умозаключением\r
\r
в) восприятием\r
\r
г) представлением\r
\r
д) суждением\r
\r
422.Одномерность, одно направленность, необратимость-это основные\r
свойства:\r
\r
а) времени\r
\r
б) природы\r
\r
в) экзистенции\r
\r
г) энергии\r
\r
д) пространства\r
\r
423.Что, по мнению Энгельса, является основой антропосоциогенеза?\r
\r
а) труд\r
\r
б) абстрактное мышление\r
\r
в) сознание, способность к познанию.\r
\r
г) бессознательное.\r
\r
д) наличие в человеке инстинкта самосохранения.\r
\r
424.Атрибут материи, характеризующий протяженность, структурность\r
материальных систем есть:\r
\r
а) пространство\r
\r
б) покой\r
\r
в) развитие\r
\r
г) время\r
\r
д) движение\r
\r
425.Процесс общественной жизни с точки зрения его основных этапов, целей\r
и смыслов является предметом:\r
\r
а) философии истории\r
\r
б) философской антропологии\r
\r
в) истории философии\r
\r
г) историографии\r
\r
д) логики\r
\r
426.Материализм -- это:\r
\r
а) философское направление, утверждающее первичность материи\r
\r
б) принцип философского исследования\r
\r
в) учение о материальности мира\r
\r
г) провозглашение приоритета чувственных удовольствий\r
\r
д) философское направление, утверждающее первичность сознания\r
\r
427.Выберите в предложенных суждениях идеализм:\r
\r
а) сознание может существовать до и независимо от материи\r
\r
б) сознание неразрывно связано с материей\r
\r
в) сознание есть продукт материи\r
\r
г) сознание не всегда адекватно отражает материю\r
\r
д) нет верного ответа\r
\r
428.Кто из мыслителей античности ввел в обиход слово «философия»?\r
\r
а) Пифагор\r
\r
б) Гераклит\r
\r
в) Демокрит\r
\r
г) Сократ\r
\r
д) Анаксимен\r
\r
429.Предметом философского исследования являются:\r
\r
а) всеобщие законы и принципы\r
\r
б) благо\r
\r
в) общественно-исторический процесс\r
\r
г) законы мышления\r
\r
д) мораль\r
\r
430.Представления о мире и месте в нем человека называют:\r
\r
а) философией\r
\r
б) идеологией\r
\r
в) мировоззрением\r
\r
г) наукой\r
\r
д) культурой\r
\r
431.Учение о единой субстанции в основе мира -- это:\r
\r
а) монизм\r
\r
б) плюрализм\r
\r
в) материализм\r
\r
г) дуализм\r
\r
д) скептицизм\r
\r
432.Какое из нижеперечисленных определений философии первоначальное?\r
\r
а) любовь к мудрости\r
\r
б) душа культуры\r
\r
в) учение о мудрости\r
\r
г) форма теоретического мировоззрения\r
\r
д) учение о нравственности\r
\r
433.Раздел философии -- гносеология:\r
\r
а) учение о познании\r
\r
б) учение о ценностях\r
\r
в) искусство\r
\r
г) учение о человека\r
\r
д) учение об обществе\r
\r
434.Самой ранней мировой религией является:\r
\r
а) буддизм\r
\r
б) христианство\r
\r
в) ислам\r
\r
г) иудаизм\r
\r
д) конфуцианство\r
\r
435.Раздел философии -- онтология:\r
\r
а) учение о бытии\r
\r
б) учение о методах познания\r
\r
в) логика\r
\r
г) учение о человека\r
\r
д) учение об обществе\r
\r
436.Существенной чертой мифологического миропонимания является:\r
\r
а) вера в сверхъестественные силы\r
\r
б) убеждение в особом предназначении человека\r
\r
в) благоговейное отношение к природе\r
\r
г) представление о тождестве субъекта и объекта\r
\r
д) связь с идеологией\r
\r
437.Отличие менталитета от мировоззрения заключается в том, что\r
\r
менталитет:\r
\r
а) является синонимом только ценностных ориентации\r
\r
в) формируется на бессознательном уровне\r
\r
в) существует исключительно в сфере рационального\r
\r
г) связан единственно с убеждениями\r
\r
д) связан с идеологией\r
\r
438.Сущность второй стороны основного вопроса философии:\r
\r
а) можно ли в процессе познания получить точное знание обо всем мире\r
\r
б) может ли человечество знать обо всем\r
\r
в) можно ли познать сущность вещей, законы материального мира\r
\r
г) что первично материя или сознание\r
\r
д) нет верного ответа\r
\r
439.Укажите правильное определение мировоззрения:\r
\r
а) система взглядов на мир\r
\r
б) общественная форма сознания\r
\r
в) окружающий мир человека\r
\r
г) понятийная форма мышления\r
\r
д) интегральное образование человеческого знания\r
\r
440.Укажите три исторических типа мировоззрения:\r
\r
а) миф, религия и философия\r
\r
б) искусство, наука и политика\r
\r
в) мораль, право и религия\r
\r
г) наука, право и политика\r
\r
д) мораль, искусство и миф\r
\r
441.Укажите, какое из ниже перечисленных соотношений представляет\r
основной вопрос философии:\r
\r
а) материи и сознания\r
\r
б) чувственного познания и абстрактного мышления\r
\r
в) теории и практики\r
\r
г) цивилизации и культуры\r
\r
д) веры и разума\r
\r
442.Укажите основные направления философии:\r
\r
а) материализм и идеализм\r
\r
б) номинализм и реализм\r
\r
в) сциентизм и антисциентизм\r
\r
г) материализм и реализм\r
\r
д) идеализм и реализм\r
\r
443.Дайте определение предмета философии:\r
\r
а) наиболее общие характеристики мира, человеческого отношения к\r
природе, обществу и духовной жизни человека\r
\r
б) объективная реальность\r
\r
в) человек\r
\r
г) бог\r
\r
д) физическая реальность\r
\r
444.Выделите, как переводится «философия» с древнегреческого:\r
\r
а) любовь к мудрости\r
\r
б) метафизика удивления\r
\r
в) наука о мышлении\r
\r
г) наука о мудрости\r
\r
д) любовь к слову\r
\r
445.Определите мировоззренческую функцию философии:\r
\r
а) способствует формированию целостности картины мира\r
\r
б) вырабатывает основные методы познания окружающей действительности\r
\r
в) на основании имеющихся философских знаний об окружающем мире и\r
человеке даёт возможность предвидеть тенденции развитии человека,\r
природы, общества\r
\r
г) даёт достоверное познание окружающей действительности\r
\r
д) подвергает сомнению окружающий мир\r
\r
446.Определите познавательную функцию философии:\r
\r
а) вырабатывает основные методы познания окружающей действительности\r
\r
б) даёт достоверное познание окружающей действительности\r
\r
в) способствует формированию целостности картины мира\r
\r
г) даёт возможность предвидеть тенденции развитии человека, природы,\r
общества\r
\r
д) подвергает сомнению окружающий мир\r
\r
447.Определите методологическую функцию философию:\r
\r
а) вырабатывает основные методы познания окружающей действительности\r
\r
б) даёт достоверное познание окружающей действительности\r
\r
в) способствует формированию целостности картины мира\r
\r
г) даёт возможность предвидеть тенденции развитии человека, природы,\r
общества\r
\r
д) подвергает сомнению окружающий мир\r
\r
448.Определите прогностическую функцию философии:\r
\r
а) на основании имеющихся философских знаний об окружающем мире и\r
человеке даёт возможность предвидеть тенденции развития человека,\r
природы, общества.\r
\r
б) вырабатывает основные методы познания окружающей действительности\r
\r
в) даёт достоверное познание окружающей действительности\r
\r
г) способствует формированию целостности картины мира\r
\r
д) подвергает сомнению окружающий мир\r
\r
449.В чем смысл философии?\r
\r
а) поиск истины, добра и красоты\r
\r
б) поиск и обоснование веры\r
\r
в) поиск идеала красоты\r
\r
г) анализ природных явлений\r
\r
д) анализ общественных явлений\r
\r
450.Выделите один из исторических типов мировоззрения:\r
\r
а) философия\r
\r
б) искусство\r
\r
в) мораль\r
\r
г) экология\r
\r
д) право\r
\r
451.Определите специфическую черту философии:\r
\r
а) обобщенное знание\r
\r
б) обыденное знание\r
\r
в) практическое знание\r
\r
г) конкретное знание\r
\r
д) частное знание\r
\r
452.Философия возникла:\r
\r
а) одновременно в древней Индии, Китае и Греции\r
\r
б) в Древней Греции\r
\r
в) в Европе\r
\r
г) в Древнем Китае\r
\r
д) в Древней Индии\r
\r
453.Кастовый строй -- общая черта многих древневосточных цивилизаций.\r
Где кастовый строй получил классическое воплощение?\r
\r
а) в Индии\r
\r
б) в Китае\r
\r
в) в Вавилоне\r
\r
г) в Двуречье\r
\r
д) в древней Греции\r
\r
454.Постепенное изменение смысла понятия «карма» приводит его к\r
\r
следующему значению:\r
\r
а) закон космического воздаяния за любое действие, которое нарушает\r
мировое равновесие\r
\r
б) внешние обстоятельства, неподвластные контролю со стороны человека\r
\r
в) темная, враждебная сторона человеческой природы, которую следует\r
\r
подавлять\r
\r
г) необходимость тщательного исполнения обязанностей своей варны и касты\r
\r
д) принцип недеяния\r
\r
455.Что такое Веды?\r
\r
а) древнейшие письменные (кон.II -- нач.1 тыс. до н.э.) памятники\r
\r
индийской культуры\r
\r
б) одно из главных философских понятий древней Индии\r
\r
в) мощная и влиятельная религиозно-философская система в Индии\r
\r
г) магическая формула, имеющая внутреннюю силу воздействия\r
\r
д) литературный памятник древнего Китая\r
\r
456.Назовите китайского философа, который считается основателем\r
\r
даосизма:\r
\r
а) Лао-цзы\r
\r
б) Конфуций\r
\r
в) Мо-цзы\r
\r
г) Шан-ян\r
\r
д) Сидхартха\r
\r
457.Основными этическими принципами даосизма являются:\r
\r
а) принципы недеяния и спонтанности\r
\r
б) принципы морального анархизма и бездействия\r
\r
в) принципы ненасилия и всепрощения\r
\r
г) принципы индивидуализма и гедонизма\r
\r
д) принцип утилитаризма\r
\r
458.Основателем буддизма является:\r
\r
а) Сидхартха\r
\r
б) Конфуций\r
\r
в) Мо-Цзы\r
\r
г) Шан-ян\r
\r
д) Лао-цзы\r
\r
459.Натурфилософия -- это:\r
\r
а) философия природы\r
\r
б) синоним материализма\r
\r
в) одна из философских категорий\r
\r
г) способ познания объективного мира\r
\r
д) учение о ценностях\r
\r
460.Каким образом первые философы понимали природное первоначало?\r
\r
а) как определенную стихию\r
\r
б) как физическое вещество\r
\r
в) как тело первой жертвы\r
\r
г) как овеществление первоначальной идеи\r
\r
д) как чистую идею\r
\r
461.Анаксимен считал первоосновой всего сущего:\r
\r
а) воздух\r
\r
б)число\r
\r
в) огонь\r
\r
г) воду\r
\r
д) идеи\r
\r
462.Первоначалом всего сущего в мире философ Гераклит признавал:\r
\r
а) огонь\r
\r
б) воду\r
\r
в) число\r
\r
г) атомы\r
\r
д) идеи\r
\r
463.Кому из мыслителей принадлежит утверждение, что «все сущее есть\r
\r
число»?\r
\r
а) Пифагор\r
\r
б) 3енон\r
\r
в) Гераклит\r
\r
г) Эпикур\r
\r
д) Сенека\r
\r
464.Кто первым сформулировал диалектические принципы развития мира?\r
\r
а) Гераклит\r
\r
б) Сократ\r
\r
в) Анаксимандр\r
\r
г) Эпикур\r
\r
д) Сенека\r
\r
465.«Человек -- мера всех вещей», так считал:\r
\r
а) Протагор\r
\r
б) Аристотель\r
\r
в) Сократ\r
\r
г) Эпикур\r
\r
д) Платон\r
\r
466.«Я знаю, что ничего не знаю» Автор афоризма?\r
\r
а) Сократ\r
\r
б) Пифагор\r
\r
в) Фалес\r
\r
г) Протагор\r
\r
д)Анаксимандр\r
\r
467.Какая проблема была в центре внимания у Сократа?\r
\r
а) какова природа (сущность) человека?\r
\r
б) проблема первоначала\r
\r
в) что такое «физиc»?\r
\r
г) проблема бытия и небытия\r
\r
д) проблема познания\r
\r
468.Какому философу принадлежит изречение: «Платон мне друг, но истина\r
\r
дороже»?\r
\r
а) Аристотель\r
\r
б) Эпикур\r
\r
в) Цицерон\r
\r
г) Демокрит\r
\r
д) Сократ\r
\r
469.Укажите науку, считавшуюся наиболее важной в Средневековье:\r
\r
а) теология\r
\r
б) гносеология\r
\r
в) логика\r
\r
г) онтология\r
\r
д) аксиология\r
\r
470.Что такое теология?\r
\r
а) учение о Боге\r
\r
б) родословная богов\r
\r
в) учение о Логосе\r
\r
г) учение об Эдосах\r
\r
д) учение о морали\r
\r
471.Креационизм -- это:\r
\r
а) принцип, в соответствии с которым Бог из ничего сотворил ми\\\\\r
\r
б) учение о материальности мира\r
\r
в) номинализм\r
\r
г) реализм\r
\r
д) неотомизм\r
\r
472.Христианско-религиозное понимание истории означает:\r
\r
а) история есть прямолинейное движение от грехопадения до судного дня\r
\r
б) история --- это движение от первобытности к идеальному, совершенному\r
\r
обществу\r
\r
в) история есть прогресс науки и техники\r
\r
г) история циклична: она есть рождение из хаоса и возвращение в него\r
\r
д) развитие истории хаотично\r
\r
473.Религиозно-христианское понимание человека утверждает, что:\r
\r
а) человек -- «венец творения» и повелитель всего созданного для него\r
Богом\r
\r
б) человек --- одно из существ равное другим существам, созданных Богом\r
\r
в) человек --- худшее из творений, созданных Богом\r
\r
г) человек --- случайность, ничего не стоящая\r
\r
д) человек- «мыслящая вещь»\r
\r
474.Эпоха Возрождения датируется:\r
\r
а) XIV -- XV вв.\r
\r
б) XV -- XVI вв.\r
\r
в) XIV -- XVI вв.\r
\r
г) XVII-XIXвв.\r
\r
д) XXв.\r
\r
475.Мировоззрением Возрождения является:\r
\r
а) антропоцентризм\r
\r
б) гуманизм\r
\r
в) индивидуализм\r
\r
г) теология\r
\r
д) космоцентризм\r
\r
476.Что такое пантеизм?\r
\r
а) всебожие - признание присутствия Бога во всей природе\r
\r
б) признание первичности материи по отношению к сознанию\r
\r
в) признание того, что разум - главное орудие познания\r
\r
г) человек-венец творения бога\r
\r
д) признание того, что опыт - главное орудие познания\r
\r
477.Главной проблемой философии Нового времени XVII в. является\r
проблема:\r
\r
а) метода научного познания\r
\r
б) человека\r
\r
в) материального и идеального\r
\r
г) бытия\r
\r
д) аксиологии\r
\r
478.Кто из философов Нового Времени является автором афоризма: «Знание\r
-- сила»?\r
\r
а) Ф.Бэкон\r
\r
б) Т.Гоббс\r
\r
в) Р.Декарт\r
\r
г) Дж.Локк\r
\r
д) Б.Спиноза\r
\r
479.Френсис Бэкон был основоположником:\r
\r
а) эмпиризма\r
\r
б) номинализма\r
\r
в) рационализма\r
\r
г) реализма\r
\r
д)неопозитивизма\r
\r
480.Кто автор высказывания: «Я мыслю, следовательно, я существую»?\r
\r
а) Р.Декарт\r
\r
б) Д.Беркли\r
\r
в) Ф.Бэкон\r
\r
г) Б.Спиноза\r
\r
д) Г.Лейбниц\r
\r
481.Основа теории познания Рене Декарта:\r
\r
а) «Мыслю, следовательно, существую»\r
\r
б) «Быть, значит быть воспринимаемым»\r
\r
в) «На все воля божья»\r
\r
г) «Знание-сила»\r
\r
д) «Я знаю, что ничего не знаю»\r
\r
482.Кто является основоположником рационализма в философии Нового\r
\r
времени?\r
\r
а) Р.Декарт\r
\r
б) Ф.Бекон\r
\r
в) Д.Локк\r
\r
г) И.Кант\r
\r
д) Б.Спиноза\r
\r
483.Кто из философов является родоначальником немецкой классической\r
\r
философии?\r
\r
а) И. Кант\r
\r
б) Л.Фейербах\r
\r
в) И.Фихте\r
\r
г) Г.Гегель\r
\r
д) Ф. Шеллинг\r
\r
484.К какому философскому направлению относится учение Г.Гегеля?\r
\r
а) объективный идеализм\r
\r
б) субъективный идеализм\r
\r
в) идеалистический плюрализм\r
\r
г) материалистический монизм\r
\r
д) дуализм\r
\r
485.К. Маркс и Ф. Энгельс утверждали, что характер общества определяет:\r
\r
а) трудовая, производительная деятельность людей\r
\r
б) духовная деятельность людей\r
\r
в) взаимодействие власти и личности\r
\r
г) индивидуализм\r
\r
д) коллективное бессознательное\r
\r
486.Основателем психоаналитической философии является:\r
\r
а) З. Фрейд\r
\r
б) К. Юнг\r
\r
в) А. Адлер\r
\r
г) Э. Фромм\r
\r
д) К.Хорни\r
\r
487.Представителем «философии жизни» является:\r
\r
а) Ф.Ницше\r
\r
б) И.Кант\r
\r
в) Ф.Шеллинг\r
\r
г) Г.Гегель\r
\r
д) Л.Фейербах\r
\r
488.В основе экзистенциализма находится учение:\r
\r
а) о человеческом существовании\r
\r
б) о ценностях человеческого общества\r
\r
в) о законах объективного мира\r
\r
г) об общественном прогрессе\r
\r
д) об общественном договоре\r
\r
489.Укажите, какое философское направление определяют эти имена: Ж.П.\r
\r
Сартр, А. Камю, Н. Бердяев, М. Хайдеггер:\r
\r
а) экзистенциализм\r
\r
б) неогегельянство\r
\r
в) неотомизм\r
\r
г) позитивизм\r
\r
д) структурализм\r
\r
490.К. Ясперс -- это:\r
\r
а) видный представитель экзистенциализма\r
\r
б) представитель современного марксизма\r
\r
в) один из основоположников эмпириокритицизма\r
\r
г) основатель структурализма\r
\r
д) основатель позитивизма\r
\r
491.Какое философское направление XX века сделало своей главной\r
проблемой смысл жизни человека?\r
\r
а) экзистенциализм\r
\r
б) неотомизм\r
\r
в) неопозитивизм\r
\r
г) герменевтика\r
\r
д)структурализм\r
\r
492.Основополагающим понятием в философии Ф. Ницше является:\r
\r
а) воля к жизни\r
\r
б) воля к власти\r
\r
в) воля к богатству\r
\r
г) воля к богу\r
\r
д) интуиция\r
\r
493.Согласно учению З. Фрейда, жизнь в целом и большинство конкретных\r
\r
поступков человека определяется:\r
\r
а) бессознательным\r
\r
б) мышлением\r
\r
в) разумом\r
\r
г) рассудком\r
\r
д) интуицией\r
\r
494.Экзистенциалисты утверждают, что сущность человека определяется:\r
\r
а) собственным выбором человека своей цели\r
\r
б) непостижимой судьбой\r
\r
в) совокупностью производственных отношений\r
\r
г) божественным предопределением\r
\r
д) случайностью\r
\r
495.Онтология --- это учение:\r
\r
а) о бытии как таковом\\\r
б) о ценностях, об их происхождении и сущности\\\r
в) о развитии вселенной\\\r
г) о духовной культуре общества и человека\r
\r
д) о морали\r
\r
496.Понятие «бытие» сходно, однопорядково с такими понятиями как:\\\r
а)существование, реальность\\\r
б) субстанция\\\r
в) первоначало\\\r
г) материя\r
\r
д) дух\r
\r
497.Длительность существования материи характеризуется понятием:\\\r
а) время\\\r
б) пространство\\\r
в) скорость\\\r
г) бытие\r
\r
д) развитие\r
\r
498.Онтология как раздел философского знания -- наука о всеобщем, в\r
истории философии не называлась:\r
\r
а) этика\r
б) первая философия\\\r
в) метафизика\\\r
г) объективная логика\\\r
д) эпистемология\r
\r
499.Материя есть философская категория для обозначения:\r
\r
а) объективной реальности, данной нам только в ощущениях\\\r
б) атомов\\\r
в) вещества\\\r
г) объективной реальности\\\r
д) идей\r
\r
500.В каком суждении выражено диалектико-материалистическое понимание\r
\r
принципа единства мира:\r
\r
а) единство мира состоит в его материальности\r
\r
б) единство мира проявляется в единстве его химического состава\r
\r
в) единство мира состоит в том, что во всех его частях действуют одни и\r
те же законы\r
\r
г) мир един, поскольку в нем все взаимосвязано\r
\r
д) мир - собрание атомов\r
\r
\r
--- ОТВЕТЫ НА ВОПРОСЫ (1-128) ---\r
1. б) мировоззрение\r
2. б) человек и его место в мире\r
3. а) философское направление, утверждающее первичность материи\r
4. в) сознание может существовать до и независимо от материи\r
5. в) Пифагор\r
6. б) всеобщие законы и принципы\r
7. б) монизм\r
8. а) любовь к мудрости\r
9. в) учение о познании\r
10. б) буддизм\r
11. в) учение о бытии\r
12. г) представление о тождестве субъекта и объекта\r
13. б) формируется на бессознательном уровне\r
14. в) можно ли познать сущность вещей, законы материального мира\r
15. г) система взглядов на мир\r
16. г) миф, религия и философия\r
17. д) материи и сознания\r
18. г) материализм и идеализм\r
19. г) любовь к мудрости\r
20. д) способствует формированию целостности картины мира\r
21. б) даёт достоверное познание окружающей действительности\r
22. б) вырабатывает основные методы познания окружающей действительности\r
23. д) на основании имеющихся философских знаний об окружающем мире и человеке даёт возможность предвидеть тенденции развития человека, природы, общества\r
24. б) поиск истины, добра и красоты\r
25. в) философия\r
26. б) обобщенное знание\r
27. б) одновременно в древней Индии, Китае и Греции\r
28. б) в Индии\r
29. д) закон космического воздаяния за любое действие, которое нарушает мировое равновесие\r
30. б) древнейшие письменные (кон.II -- нач.1 тыс. до н.э.) памятники индийской культуры\r
31. а) Лао-цзы\r
32. д) принципы недеяния и спонтанности\r
33. в) Сидхартха\r
34. в) философия природы\r
35. д) как определенную стихию\r
36. г) воздух\r
37. в) огонь\r
38. а) Пифагор\r
39. б) Гераклит\r
40. г) Протагор\r
41. б) Сократ\r
42. в) какова природа (сущность) человека?\r
43. в) Аристотель\r
44. д) теология\r
45. б) учение о Боге\r
46. г) принцип, в соответствии с которым Бог из ничего сотворил мира\r
47. в) история есть прямолинейное движение от грехопадения до судного дня\r
48. в) человек -- «венец творения» и повелитель всего созданного для него Богом\r
49. а) XIV -- XVI вв.\r
50. б) гуманизм\r
51. г) всебожие - признание присутствия Бога во всей природе\r
52. б) метода научного познания\r
53. в) Ф.Бэкон\r
54. г) эмпиризма\r
55. б) Р.Декарт\r
56. г) Р.Декарт\r
57. г) И. Кант\r
58. б) трудовая, производительная деятельность людей\r
59. б) З. Фрейд\r
60. а) Ф.Ницше\r
61. б) о человеческом существовании\r
62. г) экзистенциализм\r
63. б) экзистенциализм\r
64. б) воля к власти\r
65. д) бессознательным\r
66. д) собственным выбором человека своей цели\r
67. д) о бытии как таковом\r
68. б) существование, реальность\r
69. б) время\r
70. б) этика\r
71. г) объективной реальности\r
72. а) объективная реальность, данная человеку в ощущениях\r
73. б) единство мира состоит в его материальности\r
74. д) первоосновой мира, природы, сущего является духовное начало\r
75. д) дуализм\r
76. г) плюрализм\r
77. в) материя\r
78. г) движение\r
79. б) социальное движение\r
80. г) времени\r
81. в) пространство\r
82. б) всю совокупную реальность\r
83. в) быть объективной реальностью\r
84. д) эмпиризм\r
85. в) качественные\r
86. б) развитие является частью движения\r
87. г) движение -- это любое изменение\r
88. в) дуализм\r
89. г) натурфилософия\r
90. д) живое вещество\r
91. в) сфера разума\r
92. б) принцип коэволюции человека и природы\r
93. в) диалектический материализм\r
94. б) опыт, не поддающийся логическому анализу\r
95. б) абстрактным мышлением\r
96. д) сознание есть свойство высокоорганизованной материи\r
97. сознание может существовать до и независимо от материи\r
98. б) взаимодействия человека с реальностью\r
99. б) Нового времени\r
100. б) это - глобальное свойство материи\r
101. д) способностью к рефлексии, т.е. самопознанию\r
102. б) одновременно\r
103. б) добро\r
104. в) обобщенное выражение классовых (групповых) интересов\r
105. д) о сущности познания, о путях постижения истины\r
106. д) обусловленный практикой процесс приобретения и развития знаний\r
107. в) иррационализм\r
108. г) сенсуализма\r
109. д) чувственного опыт\r
110. б) рационализм\r
111. б) логический путь от частного к общему\r
112. в) истинное знание\r
113. в) это соответствие мысли той реальности, которую она отражает\r
114. д) Новое время\r
115. б) практика\r
116. д) учение в гносеологии, отрицающее возможность достоверного познания мира\r
117. б) объективна\r
118. б) гипотеза\r
119. в) понятие\r
120. г) истина есть адекватное, соответствующее действительности утверждение\r
121. б) я мыслю\r
122. б) заблуждение\r
123. б) отрицающее возможность познания мира\r
124. б) сознание\r
125. г) истина идея, руководство которой приводит к успеху\r
126. в) истина - это знание, соответствующее действительности\r
127. б) некритическое смешение разных учений\r
128. д) прогресс\r
\r
\r
--- ОТВЕТЫ НА ВОПРОСЫ (129-251) ---\r
129. в) развития\r
130. б) категории\r
131. в) в их внешних признаках\r
132. б) государство\r
133. б) социальная философия\r
134. г) материальное производство\r
135. д) экономические отношения\r
136. а) самосовершенствование человека, качества его жизни\r
137. г) футурология\r
138. в) цивилизация\r
139. б) обособившаяся от природы система, представляющая собой совокупность исторически сложившихся способов совместной деятельности людей и форм их объединений\r
140. б) развитие материального производства\r
141. д) способ производства\r
142. г) эсхатология\r
143. д) борьба за существование\r
144. г) марксизму\r
145. д) поступательное движение общества от простых форм к более сложным\r
146. в) революция\r
147. д) общественная жизнь существенно зависит от природных факторов\r
148. г) система вне государственных общественных образований, помогающая государству и оппонирующая государству в случае неэффективного выполнения им своих функций\r
149. в) в комплексе тех или иных идей, верований\r
150. б) в производственных (экономических) отношениях\r
151. б) общество как система\r
152. в) материальное производство\r
153. г) способ производства материальных благ\r
154. б) К. Маркс\r
155. г) возрастание его темпов («ускорение ритма истории»)\r
156. в) закон народонаселения\r
157. а) борьба социальных противоположностей, возникающих, прежде всего, в экономической сфере\r
158. б) устойчивая система социально-значимых черт, характеристика человека как члена общества\r
159. в) приобретенные каждым человеком духовные, социальные качества\r
160. б) процесс историко-эволюционного формирования физического типа человека\r
161. а) создан по образу и подобию Божьему\r
162. г) разумность, рациональность\r
163. а) жизнь человека определена его генотипом\r
164. б) усвоение и использование человеком социокультурного опыта\r
165. г) жизнь - это наслаждения, желательно, как можно более разнообразные, здесь и сейчас\r
166. б) выбора\r
167. в) коллективизма\r
168. в) фатализма\r
169. в) индивидуализм\r
170. б) о взаимодействии и соотношении генов и воспитания\r
171. б) вера в высшие силы, воздействующие на людей\r
172. г) индивидуальность\r
173. б) Ф.Энгельс\r
174. г) З.Фрейд\r
175. б) человек, прежде всего социальное существо, но на его поведение оказывают влияние и биологические факторы\r
176. г) человек -- это антропологическое понятие, а личность -- социальное\r
177. в) познавательная деятельность\r
178. в) антропология\r
179. б) альтруизм\r
180. б) фатализм\r
181. д) философская антропология\r
182. г) антропоцентризм\r
183. в) биопсихосоциальное существо, способное мыслить, говорить и трудиться\r
184. в) антропосоциогенез\r
185. б) коэволюция\r
186. г) религии\r
187. в) система ценностей и идеалов\r
188. г) свободе от телесных страданий и душевных тревог\r
189. а) попадает в экстремальную жизненную ситуацию\r
190. а) цинизм\r
191. б) прекрасного\r
192. г) аксиология\r
193. б) природой ценностей, их месте в реальности\r
194. в) Сократом\r
195. в) Ф.М. Достоевскому\r
196. б) средневековья\r
197. д) XIX веке\r
198. а) ценность носит исключительно субъективный характер\r
199. б) культура\r
200. а) ценностные ориентации\r
201. б) ценность\r
202. д) учение о морали и нравственных ценностях\r
203. г) система ценностей и идеалов\r
204. б) гедонизм\r
205. г) аскетизм\r
206. в) польза\r
207. в) этика долга\r
208. б) мораль\r
209. г) человек -- это творец, художник\r
210. б) Бога и природы\r
211. в) язык\r
212. д) материальности\r
213. б) наличие культуры\r
214. б) законом\r
215. в) Что первично, материя или дух?\r
216. г) материя и сознания -- две основы всего сущего\r
217. в) ощущение, восприятие ,представление\r
218. в) 6-5 в.в. до н.э.\r
219. б) Ф.Энгельсом\r
220. в) в рабовладельческом обществе\r
221. д) понятием\r
222. г) времени\r
223. в) труд\r
224. г) пространство\r
225. в) философии истории\r
226. г) Ф.Вольтером\r
227. д) культура\r
228. в) мировой дух\r
229. в) цивилизационного подхода к истории общества\r
230. д) О.Шпенглером\r
231. б) эпоху массового общества\r
232. в) совокупность созданных человеком вещей и предметов\r
233. д) ремесленный\r
234. в) массовой\r
235. б) религия помогает преодолеть все трудности жизни\r
236. б) к духовным ценностям\r
237. б) наука\r
238. г) цивилизация -- это ступень развития общества, где взаимоотношения между различными сторонами жизни регулируются при помощи выработанных норм, установок, законов\r
239. д) по Платону\r
240. б) сциентизм\r
241. г) синергетика\r
242. б) гипотезой\r
243. б) теория\r
244. в) К.Ясперсом\r
245. в) теория и методология познания законов природы и общества\r
246. в) А.Л. Чижевский\r
247. б) представление\r
248. г) Бытие вещей (тел), процессов, бытие человека, бытие духовного (идеального), бытие социального\r
249. в) точное, полное знание, которое постоянно подтверждается жизнью\r
250. в) Формы общественного сознания\r
251. б) Ньютон\r
\r
\r
--- ОТВЕТЫ НА ВОПРОСЫ (252-384) ---\r
252. г) выявление его сущности\r
253. г) Система взглядов, отражающих веру в Абсолют\r
254. б) ощущение\r
255. г) Продукт предметно-практической деятельности\r
256. в) ограниченно верное, неполное знание о предмете\r
257. б) Фрэнсис Бэкон\r
258. б) Образование должно быть средством для развития разума и научного подхода к миру\r
259. в) Наука должна быть практическим инструментом для улучшения жизни людей\r
260. б) Томас Кун\r
261. в) Научное знание должно быть объективным и независимым от человеческих эмоций и предвзятости\r
262. б) Образование должно служить для воспитания нравственности и справедливости в государстве\r
263. б) Мартин Хайдеггер\r
264. д) Научный и технический прогресс являются основой для общественного и экономического развития\r
265. в) Альберт Эйнштейн\r
266. д) Существование\r
267. в) Эпикур\r
268. в) Абсурд\r
269. г) Трансцендентализм\r
270. а) Стоицизм\r
271. д) Как освобождение\r
272. д) Помни о смерти\r
273. г) Отрицание свободы воли\r
274. д) Учение о конце мира\r
275. б) Камю\r
276. б) Аксиология\r
277. б) Шелер\r
278. в) Софисты\r
279. в) Добродетель\r
280. в) Ницше\r
281. г) Релятивизм\r
282. г) Шелер\r
283. д) Красота\r
284. г) Этика\r
285. б) Шелер\r
286. б) Все ценности субъективны\r
287. д) Нигилизм\r
288. г) Протагор\r
289. б) Ценность как средство достижения цели\r
290. б) Истина\r
291. в) Шелер\r
292. д) Существование множества равноправных ценностей\r
293. д) Гедонизм\r
294. б) Нирвана и сострадание\r
295. д) Нигилизм\r
296. б) Человеческая личность\r
297. б) Исайя Берлин\r
298. б) Как способность действовать по закону долга\r
299. в) Человек обречён быть свободным\r
300. г) Свобода от внешнего принуждения\r
301. д) Возможность сознательно выбирать и действовать на основе собственной воли\r
302. б) Проблема ответственности\r
303. б) Необходимость\r
304. в) Осознанный выбор между альтернативами\r
305. б) Жан-Поль Сартр\r
306. д) Свобода --- это возможность действовать в рамках собственной ответственности\r
307. б) Стоицизм\r
308. г) Ответственность\r
309. г) Детерминизм\r
310. г) Георг Вильгельм Фридрих Гегель\r
311. б) Эмиль Дюркгейм\r
312. б) Георг Вильгельм Фридрих Гегель\r
313. б) Искусство служит выражением социальной и политической борьбы\r
314. б) Карл Маркс\r
315. д) Культура является выражением духовного развития человечества\r
316. б) Каждая культура имеет свою ценность и правомерность в своём контексте\r
317. д) Классовая борьба является основой всех культурных изменений\r
318. г) Карл Маркс\r
319. д) Культура является основой для формирования общества\r
320. в) Арнольд Тойнби\r
321. г) Культура --- это система норм, ценностей и представлений, которые регулируют общественную жизнь\r
322. а) Семья --- это основной институт, передающий традиции и культурные ценности\r
323. д) Технологии являются основой для создания новых культурных форм и общественных отношений\r
324. б) Культура --- это система символов и значений, формирующих общественные отношения\r
325. г) Культура и национальная идентичность взаимно влияют друг на друга, поддерживая национальные традиции\r
326. г) Культура, которая обусловлена и формирует общественные отношения и нормы\r
327. г) Культура является производной от материальных и экономических условий жизни\r
328. г) Символы и значения, возникающие в процессе общения и взаимодействия людей\r
329. д) Культуры должны взаимодействовать и влиять друг на друга, но сохранять свою уникальность\r
330. б) Георг Вильгельм Фридрих Гегель\r
331. д) Циклическая теория\r
332. г) История объясняется через материальные условия и экономические факторы\r
333. г) История есть борьба классов, основанная на экономических интересах\r
334. д) Экзистенциализм\r
335. в) Георг Вильгельм Фридрих Гегель\r
336. б) История --- это процесс морального и культурного прогресса\r
337. а) Карл Маркс\r
338. г) Социальная революция\r
339. б) Карл Маркс\r
340. д) История подчинена определённым неизбежным законам\r
341. д) Идея, что история всегда движется к лучшему\r
342. д) Они являются инструментами мирового духа в его самопознании\r
343. д) Прогресс --- это развитие человеческой свободы через классовую борьбу\r
344. б) Карл Маркс\r
345. в) История --- это противоречие между разумом и моралью\r
346. а) История --- это результат борьбы классов и изменений в экономике\r
347. а) Арнольд Тойнби\r
348. г) История подчинена определённым экономическим и социальным законам\r
349. г) История движется к абсолютному справедливому обществу\r
350. д) Рациональный анализ природы религиозной веры и понятий о Боге\r
351. б) Атеизм\r
352. б) Бог --- это первопричина мира\r
353. в) Людвиг Фейербах\r
354. в) Отождествление Бога с природой и вселенной\r
355. г) Существование Бога отрицается\r
356. в) Бог создал мир, но не управляет им напрямую\r
357. д) Мистицизм\r
358. а) Нурсултан Назарбаев\r
359. а) Совмещение национальной идентичности и глобализации\r
360. а) Возрождение интереса к исламской философии\r
361. а) Объединение восточных и западных традиций\r
362. а) Коллективизм и уважение к старшим\r
363. а) Открывает путь для осознанной модернизации общества\r
364. а) Укрепление национального сознания в условиях глобализации\r
365. а) Коллективизм\r
366. а) Идея национального единства\r
367. в) Толерантность и межэтническое согласие\r
368. а) Восстановление традиционных ценностей в рамках новых социальных реалий\r
369. а) Обеспечение равных возможностей для всех граждан, независимо от их социального положения\r
370. в) Экологический гуманизм\r
371. а) Вечное существование и процветание Казахстана как независимого государства\r
372. а) Обновление духовных и моральных ценностей с учетом современных вызовов\r
373. а) создает материальную базу существования общества\r
374. г) в обществе, как и в природе, действует естественный отбор\r
375. в) синергетики\r
376. д) философская антропология\r
377. в) трудовая деятельность в коллективе\r
378. в) о сущности познания, о путях постижения истины;\r
379. б) возделывание почвы;\r
380. а) философская антропология;\r
381. б) анимизм.\r
382. а) тотемизм.\r
383. г) Шаманизм.\r
384. б) магическую вещь\r
\r
\r
--- ОТВЕТЫ НА ВОПРОСЫ (385-500) ---\r
385. д) связь между группой людей и каким-либо растением или животным\r
386. в) запрет на что-то\r
387. г) VI век до н.э.\r
388. а) Сирвата Сиддхартаха Гаутама\r
389. а) учение о четырех благородных истинах\r
390. а) название главной книги в буддизме\r
391. а) четырех благородных истинах\r
392. а) идея воздаяния\r
393. а) просветленный\r
394. а) три корзины\r
395. а) в I веке н.э.\r
396. а) три\r
397. а) IV век\r
398. а) в VII веке н.э\r
399. а) Коране\r
400. а) избавление от желаний.\r
401. а) ислам, христианство, буддизм\r
402. а) синтоизм, конфуцианство, индуизм\r
403. а) гедонизм\r
404. а) этика долга\r
405. а) мораль\r
406. а) Эпохе Возрождения\r
407. а) человек -- это творец, художник\r
408. а) Бога и природы\r
409. а) язык\r
410. а) монизм\r
411. а) материальности\r
412. а) наличие культуры\r
413. а) законом\r
414. а) Что первично, материя или дух?\r
415. а) материя и сознания -- две основы всего сущего\r
416. а) ощущение, восприятие ,представление\r
417. а) в эпоху античности\r
418. а) 6-5 в.в. до н.э.\r
419. а) Ф.Энгельсом\r
420. а) в рабовладельческом обществе\r
421. а) понятием\r
422. а) времени\r
423. а) труд\r
424. а) пространство\r
425. а) философии истории\r
426. а) философское направление, утверждающее первичность материи\r
427. а) сознание может существовать до и независимо от материи\r
428. а) Пифагор\r
429. а) всеобщие законы и принципы\r
430. в) мировоззрением\r
431. а) монизм\r
432. а) любовь к мудрости\r
433. а) учение о познании\r
434. а) буддизм\r
435. а) учение о бытии\r
436. г) представление о тождестве субъекта и объекта\r
437. б) формируется на бессознательном уровне\r
438. в) можно ли познать сущность вещей, законы материального мира\r
439. а) система взглядов на мир\r
440. а) миф, религия и философия\r
441. а) материи и сознания\r
442. а) материализм и идеализм\r
443. а) наиболее общие характеристики мира, человеческого отношения к природе, обществу и духовной жизни человека\r
444. а) любовь к мудрости\r
445. а) способствует формированию целостности картины мира\r
446. б) даёт достоверное познание окружающей действительности\r
447. а) вырабатывает основные методы познания окружающей действительности\r
448. а) на основании имеющихся философских знаний об окружающем мире и человеке даёт возможность предвидеть тенденции развития человека, природы, общества.\r
449. а) поиск истины, добра и красоты\r
450. а) философия\r
451. а) обобщенное знание\r
452. а) одновременно в древней Индии, Китае и Греции\r
453. а) в Индии\r
454. а) закон космического воздаяния за любое действие, которое нарушает мировое равновесие\r
455. а) древнейшие письменные (кон.II -- нач.1 тыс. до н.э.) памятники индийской культуры\r
456. а) Лао-цзы\r
457. а) принципы недеяния и спонтанности\r
458. а) Сидхартха\r
459. а) философия природы\r
460. а) как определенную стихию\r
461. а) воздух\r
462. а) огонь\r
463. а) Пифагор\r
464. а) Гераклит\r
465. а) Протагор\r
466. а) Сократ\r
467. а) какова природа (сущность) человека?\r
468. а) Аристотель\r
469. а) теология\r
470. а) учение о Боге\r
471. а) принцип, в соответствии с которым Бог из ничего сотворил мир\r
472. а) история есть прямолинейное движение от грехопадения до судного дня\r
473. а) человек -- венец творения и повелитель всего созданного для него Богом\r
474. в) XIV -- XVI вв.\r
475. а) антропоцентризм\r
476. а) всебожие - признание присутствия Бога во всей природе\r
477. а) метода научного познания\r
478. а) Ф.Бэкон\r
479. а) эмпиризма\r
480. а) Р.Декарт\r
481. а) Мыслю, следовательно, существую\r
482. а) Р.Декарт\r
483. а) И. Кант\r
484. а) объективный идеализм\r
485. а) трудовая, производительная деятельность людей\r
486. а) З. Фрейд\r
487. а) Ф.Ницше\r
488. а) о человеческом существовании\r
489. а) экзистенциализм\r
490. а) видный представитель экзистенциализма\r
491. а) экзистенциализм\r
492. б) воля к власти\r
493. а) бессознательным\r
494. а) собственным выбором человека своей цели\r
495. а) о бытии как таковом\r
496. а) существование, реальность\r
497. а) время\r
498. д) эпистемология\r
499. а) объективной реальности, данной нам только в ощущениях\r
500. а) единство мира состоит в его материальности\r
`,ou=e=>{let t=e.indexOf(`--- ОТВЕТЫ НА ВОПРОСЫ`),n=e.slice(0,t>-1?t:e.length),r=t>-1?e.slice(t):``,i={},a=/^(\d+)\.\s*(?:([а-я])\))?\s*(.+)/gm,o;for(;(o=a.exec(r))!==null;)i[o[1]]={letter:o[2]?o[2].toLowerCase():null,text:o[3].trim()};let s=[],c=n.split(/^(\d+)(?:\.|\\|\s)*/gm);for(let e=1;e<c.length;e+=2){let t=c[e],n=c[e+1];if(!n)continue;let r=n.split(`
`).map(e=>e.trim()).filter(Boolean),a=[],o=[],l=[`а`,`б`,`в`,`г`,`д`,`е`,`ж`],u=0;for(let e=0;e<r.length;e++){let t=r[e].match(/^([а-я])\)\s*(.+)/i),n=r[e].match(/^(?:\\?<variant\\?>|<variant>)\s*(.+)/i);t?(a.push({letter:t[1].toLowerCase(),text:t[2]}),u++):n?(a.push({letter:l[u],text:n[1]}),u++):o.push(r[e])}let d=i[t],f=null;if(d)if(d.letter)f=d.letter;else{let e=a.find(e=>e.text===d.text);e&&(f=e.letter)}s.push({id:parseInt(t,10),question:o.join(` `),options:a,correctAnswer:f})}return s},su=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let n=new Uint32Array(1);window.crypto.getRandomValues(n);let r=n[0]/4294967296,i=Math.floor(r*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t};function cu(){let[e,t]=(0,P.useState)([]),[n,r]=(0,P.useState)([]),[i,a]=(0,P.useState)(0),[o,s]=(0,P.useState)(0),[c,l]=(0,P.useState)(0),[u,d]=(0,P.useState)(0),[f,p]=(0,P.useState)(!1),[m,h]=(0,P.useState)(null),[g,_]=(0,P.useState)(null);(0,P.useEffect)(()=>{t(ou(au))},[]);let v=t=>{let n=[...e];t===`exam`&&(n=su(n).slice(0,30)),n=n.map(e=>({...e,options:su(e.options)})),r(n),a(0),s(0),l(0),d(0),p(!1),h(null),_(t)},y=e=>{f||(h(e),p(!0),e===n[i].correctAnswer?(s(e=>e+1),l(e=>{let t=e+1;return t>u&&d(t),t})):l(0))},b=()=>{a(e=>e+1),p(!1),h(null)},x=g?i/n.length*100:0;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Gc,{position:`sticky`,children:[(0,F.jsxs)(Xl,{sx:{justifyContent:`space-between`},children:[(0,F.jsxs)(il,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,F.jsx)(nu,{color:`primary`}),(0,F.jsx)(Bc,{variant:`h6`,color:`primary`,sx:{fontWeight:800},children:`PhiloTest Pro`})]}),g&&(0,F.jsxs)(il,{sx:{display:`flex`,alignItems:`center`,gap:2},children:[(0,F.jsx)($c,{icon:(0,F.jsx)(ru,{sx:{color:`#fbbf24 !important`}}),label:`Счет: ${o}`,variant:`outlined`,sx:{fontWeight:`bold`,borderColor:`primary.light`,bgcolor:`primary.50`}}),(0,F.jsx)($c,{icon:(0,F.jsx)(Zl,{sx:{color:`#f43f5e !important`}}),label:`Серия: ${c}`,variant:`outlined`,sx:{fontWeight:`bold`,borderColor:`secondary.light`,bgcolor:`secondary.50`}})]})]}),g&&(0,F.jsx)(Hl,{variant:`determinate`,value:x,color:`primary`})]}),(0,F.jsx)(il,{sx:{flex:1,py:6,px:2,display:`flex`,flexDirection:`column`,alignItems:`center`},children:g?i>=n.length?(0,F.jsx)(nl,{in:!0,children:(0,F.jsxs)(bl,{sx:{maxWidth:600,width:`100%`,p:5,textAlign:`center`,borderRadius:4},children:[(0,F.jsx)(eu,{sx:{fontSize:100,color:`#fbbf24`,mb:2}}),(0,F.jsx)(Bc,{variant:`h4`,gutterBottom:!0,fontWeight:`800`,children:`Отличная работа!`}),(0,F.jsxs)(Bc,{variant:`h6`,color:`text.secondary`,mb:4,children:[`Вы ответили правильно на `,o,` из `,n.length,` вопросов.`]}),(0,F.jsxs)(il,{sx:{display:`flex`,flexWrap:`wrap`,gap:3,justifyContent:`center`,mb:5},children:[(0,F.jsx)($c,{icon:(0,F.jsx)(Zl,{}),label:`Максимальная серия: ${u}`,color:`secondary`,sx:{py:2.5,px:1,fontSize:`1rem`,borderRadius:4}}),(0,F.jsx)($c,{icon:(0,F.jsx)(ru,{}),label:`Успешность: ${Math.round(o/n.length*100)}%`,color:`primary`,sx:{py:2.5,px:1,fontSize:`1rem`,borderRadius:4}})]}),(0,F.jsx)(gl,{variant:`contained`,size:`large`,sx:{py:1.5,px:6,borderRadius:8,fontSize:`1.1rem`},onClick:()=>_(null),children:`На главную`})]})}):(0,F.jsx)(nl,{in:!0,children:(0,F.jsxs)(il,{sx:{maxWidth:800,width:`100%`},children:[(0,F.jsxs)(Bc,{variant:`subtitle1`,gutterBottom:!0,color:`primary`,fontWeight:`700`,sx:{mb:2},children:[`ВОПРОС `,i+1,` / `,n.length]}),(0,F.jsx)(bl,{sx:{mb:4,p:2,borderRadius:4,backgroundColor:`background.paper`},children:(0,F.jsx)(wl,{children:(0,F.jsx)(Bc,{variant:`h5`,sx:{fontWeight:600,lineHeight:1.5},children:n[i].question})})}),(0,F.jsx)(Kl,{spacing:2,children:n[i].options.map(e=>{let t=e.letter===n[i].correctAnswer,r=e.letter===m,a=`background.paper`,o=`text.primary`,s=`grey.300`,c=1,l=null;return f&&(t?(a=`#ecfdf5`,o=`#065f46`,s=`#10b981`,l=(0,F.jsx)($l,{sx:{color:`#10b981`}})):r?(a=`#fef2f2`,o=`#991b1b`,s=`#ef4444`,l=(0,F.jsx)(Ql,{sx:{color:`#ef4444`}})):c=.5),(0,F.jsx)(gl,{variant:`outlined`,fullWidth:!0,onClick:()=>y(e.letter),endIcon:l,sx:{justifyContent:`space-between`,textAlign:`left`,textTransform:`none`,p:2.5,borderRadius:3,borderWidth:f&&(t||r)?2:1,backgroundColor:a,color:o,borderColor:s,opacity:c,transition:`all 0.3s ease`,"&:hover":{backgroundColor:f?a:`#f8fafc`,borderColor:f?s:`primary.main`,transform:f?`none`:`translateY(-2px)`}},children:(0,F.jsxs)(Bc,{variant:`body1`,sx:{fontWeight:500},children:[(0,F.jsxs)(Bc,{component:`span`,sx:{fontWeight:700,mr:1,color:`text.secondary`},children:[e.letter,`)`]}),e.text]})},e.letter)})}),f&&(0,F.jsx)(Gl,{in:f,children:(0,F.jsx)(il,{sx:{mt:5,display:`flex`,justifyContent:`flex-end`},children:(0,F.jsx)(gl,{variant:`contained`,size:`large`,onClick:b,endIcon:(0,F.jsx)(tu,{}),sx:{borderRadius:8,px:4,py:1.5,fontSize:`1.1rem`},children:i===n.length-1?`Завершить`:`Следующий вопрос`})})})]})},i):(0,F.jsx)(Gl,{in:!0,children:(0,F.jsxs)(bl,{sx:{maxWidth:600,width:`100%`,p:4,textAlign:`center`,borderRadius:4},children:[(0,F.jsx)(eu,{sx:{fontSize:80,color:`primary.main`,mb:2}}),(0,F.jsx)(Bc,{variant:`h4`,gutterBottom:!0,fontWeight:`800`,color:`text.primary`,children:`Добро пожаловать`}),(0,F.jsxs)(Bc,{variant:`body1`,color:`text.secondary`,mb:4,children:[`Выберите режим прохождения теста. Экзамен проверит ваши знания на 30 случайных вопросах, а свободный режим позволит пройти все `,e.length,`.`]}),(0,F.jsxs)(Kl,{spacing:2,children:[(0,F.jsx)(gl,{variant:`contained`,size:`large`,onClick:()=>v(`exam`),children:`Начать Экзамен (30 вопросов)`}),(0,F.jsx)(gl,{variant:`outlined`,size:`large`,onClick:()=>v(`free`),children:`Свободный режим`})]})]})})})]})}var lu=Io({palette:{mode:`light`,primary:{main:`#4338ca`,light:`#6366f1`,dark:`#312e81`},secondary:{main:`#ec4899`},success:{main:`#10b981`,light:`#d1fae5`,contrastText:`#fff`},error:{main:`#ef4444`,light:`#fee2e2`,contrastText:`#fff`},background:{default:`#f8fafc`,paper:`#ffffff`},text:{primary:`#0f172a`,secondary:`#475569`}},shape:{borderRadius:16},typography:{fontFamily:`"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,h5:{fontWeight:700},h6:{fontWeight:600}},components:{MuiButton:{styleOverrides:{root:{textTransform:`none`,fontSize:`1rem`,borderRadius:12,padding:`10px 24px`,fontWeight:600,boxShadow:`none`,"&:hover":{boxShadow:`0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`}},contained:{background:`linear-gradient(135deg, #6366f1 0%, #4338ca 100%)`}}},MuiCard:{styleOverrides:{root:{boxShadow:`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`,border:`1px solid #e2e8f0`}}},MuiAppBar:{styleOverrides:{root:{background:`rgba(255, 255, 255, 0.8)`,backdropFilter:`blur(12px)`,color:`#0f172a`,boxShadow:`0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`}}}}});iu.createRoot(document.getElementById(`root`)).render((0,F.jsx)(P.StrictMode,{children:(0,F.jsxs)(qo,{theme:lu,children:[(0,F.jsx)(Ml,{}),(0,F.jsx)(cu,{})]})}));