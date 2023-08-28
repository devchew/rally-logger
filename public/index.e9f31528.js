function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=i.parcelRequiref9f2;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},i.parcelRequiref9f2=a),a.register("1b2ls",function(e,n){t(e.exports,"Fragment",()=>i,t=>i=t),t(e.exports,"jsx",()=>o,t=>o=t),t(e.exports,"jsxs",()=>r,t=>r=t);var i,o,r,s=a("acw62"),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,h=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,n){var i,o={},r=null,a=null;for(i in void 0!==n&&(r=""+n),void 0!==e.key&&(r=""+e.key),void 0!==e.ref&&(a=e.ref),e)c.call(e,i)&&!d.hasOwnProperty(i)&&(o[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps)void 0===o[i]&&(o[i]=e[i]);return{$$typeof:l,type:t,key:r,ref:a,props:o,_owner:h.current}}i=u,o=f,r=f}),a.register("acw62",function(t,e){t.exports=a("2pUnB")}),a.register("2pUnB",function(e,n){t(e.exports,"Children",()=>i,t=>i=t),t(e.exports,"Component",()=>o,t=>o=t),t(e.exports,"Fragment",()=>r,t=>r=t),t(e.exports,"Profiler",()=>a,t=>a=t),t(e.exports,"PureComponent",()=>s,t=>s=t),t(e.exports,"StrictMode",()=>l,t=>l=t),t(e.exports,"Suspense",()=>u,t=>u=t),t(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,t=>c=t),t(e.exports,"cloneElement",()=>h,t=>h=t),t(e.exports,"createContext",()=>d,t=>d=t),t(e.exports,"createElement",()=>f,t=>f=t),t(e.exports,"createFactory",()=>p,t=>p=t),t(e.exports,"createRef",()=>m,t=>m=t),t(e.exports,"forwardRef",()=>_,t=>_=t),t(e.exports,"isValidElement",()=>g,t=>g=t),t(e.exports,"lazy",()=>v,t=>v=t),t(e.exports,"memo",()=>y,t=>y=t),t(e.exports,"startTransition",()=>b,t=>b=t),t(e.exports,"unstable_act",()=>w,t=>w=t),t(e.exports,"useCallback",()=>x,t=>x=t),t(e.exports,"useContext",()=>k,t=>k=t),t(e.exports,"useDebugValue",()=>S,t=>S=t),t(e.exports,"useDeferredValue",()=>P,t=>P=t),t(e.exports,"useEffect",()=>T,t=>T=t),t(e.exports,"useId",()=>E,t=>E=t),t(e.exports,"useImperativeHandle",()=>C,t=>C=t),t(e.exports,"useInsertionEffect",()=>z,t=>z=t),t(e.exports,"useLayoutEffect",()=>M,t=>M=t),t(e.exports,"useMemo",()=>O,t=>O=t),t(e.exports,"useReducer",()=>I,t=>I=t),t(e.exports,"useRef",()=>N,t=>N=t),t(e.exports,"useState",()=>A,t=>A=t),t(e.exports,"useSyncExternalStore",()=>R,t=>R=t),t(e.exports,"useTransition",()=>D,t=>D=t),t(e.exports,"version",()=>B,t=>B=t);var i,o,r,a,s,l,u,c,h,d,f,p,m,_,g,v,y,b,w,x,k,S,P,T,E,C,z,M,O,I,N,A,R,D,B,Z=Symbol.for("react.element"),F=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),V=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Q=Symbol.iterator,Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function tt(t,e,n){this.props=t,this.context=e,this.refs=J,this.updater=n||Y}function te(){}function tn(t,e,n){this.props=t,this.context=e,this.refs=J,this.updater=n||Y}tt.prototype.isReactComponent={},tt.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},tt.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},te.prototype=tt.prototype;var ti=tn.prototype=new te;ti.constructor=tn,X(ti,tt.prototype),ti.isPureReactComponent=!0;var to=Array.isArray,tr=Object.prototype.hasOwnProperty,ta={current:null},ts={key:!0,ref:!0,__self:!0,__source:!0};function tl(t,e,n){var i,o={},r=null,a=null;if(null!=e)for(i in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(r=""+e.key),e)tr.call(e,i)&&!ts.hasOwnProperty(i)&&(o[i]=e[i]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:Z,type:t,key:r,ref:a,props:o,_owner:ta.current}}function tu(t){return"object"==typeof t&&null!==t&&t.$$typeof===Z}var tc=/\/+/g;function th(t,e){var n,i;return"object"==typeof t&&null!==t&&null!=t.key?(n=""+t.key,i={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(t){return i[t]})):e.toString(36)}function td(t,e,n){if(null==t)return t;var i=[],o=0;return function t(e,n,i,o,r){var a,s,l,u=typeof e;("undefined"===u||"boolean"===u)&&(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case Z:case F:c=!0}}if(c)return r=r(c=e),e=""===o?"."+th(c,0):o,to(r)?(i="",null!=e&&(i=e.replace(tc,"$&/")+"/"),t(r,n,i,"",function(t){return t})):null!=r&&(tu(r)&&(a=r,s=i+(!r.key||c&&c.key===r.key?"":(""+r.key).replace(tc,"$&/")+"/")+e,r={$$typeof:Z,type:a.type,key:s,ref:a.ref,props:a.props,_owner:a._owner}),n.push(r)),1;if(c=0,o=""===o?".":o+":",to(e))for(var h=0;h<e.length;h++){var d=o+th(u=e[h],h);c+=t(u,n,i,d,r)}else if("function"==typeof(d=null===(l=e)||"object"!=typeof l?null:"function"==typeof(l=Q&&l[Q]||l["@@iterator"])?l:null))for(e=d.call(e),h=0;!(u=e.next()).done;)d=o+th(u=u.value,h++),c+=t(u,n,i,d,r);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(e))?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(t,i,"","",function(t){return e.call(n,t,o++)}),i}function tf(t){if(-1===t._status){var e=t._result;(e=e()).then(function(e){(0===t._status||-1===t._status)&&(t._status=1,t._result=e)},function(e){(0===t._status||-1===t._status)&&(t._status=2,t._result=e)}),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var tp={current:null},tm={transition:null};i={map:td,forEach:function(t,e,n){td(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return td(t,function(){e++}),e},toArray:function(t){return td(t,function(t){return t})||[]},only:function(t){if(!tu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},o=tt,r=j,a=H,s=tn,l=U,u=$,c={ReactCurrentDispatcher:tp,ReactCurrentBatchConfig:tm,ReactCurrentOwner:ta},h=function(t,e,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=X({},t.props),o=t.key,r=t.ref,a=t._owner;if(null!=e){if(void 0!==e.ref&&(r=e.ref,a=ta.current),void 0!==e.key&&(o=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)tr.call(e,l)&&!ts.hasOwnProperty(l)&&(i[l]=void 0===e[l]&&void 0!==s?s[l]:e[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:Z,type:t.type,key:o,ref:r,props:i,_owner:a}},d=function(t){return(t={$$typeof:V,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:W,_context:t},t.Consumer=t},f=tl,p=function(t){var e=tl.bind(null,t);return e.type=t,e},m=function(){return{current:null}},_=function(t){return{$$typeof:G,render:t}},g=tu,v=function(t){return{$$typeof:K,_payload:{_status:-1,_result:t},_init:tf}},y=function(t,e){return{$$typeof:q,type:t,compare:void 0===e?null:e}},b=function(t){var e=tm.transition;tm.transition={};try{t()}finally{tm.transition=e}},w=function(){throw Error("act(...) is not supported in production builds of React.")},x=function(t,e){return tp.current.useCallback(t,e)},k=function(t){return tp.current.useContext(t)},S=function(){},P=function(t){return tp.current.useDeferredValue(t)},T=function(t,e){return tp.current.useEffect(t,e)},E=function(){return tp.current.useId()},C=function(t,e,n){return tp.current.useImperativeHandle(t,e,n)},z=function(t,e){return tp.current.useInsertionEffect(t,e)},M=function(t,e){return tp.current.useLayoutEffect(t,e)},O=function(t,e){return tp.current.useMemo(t,e)},I=function(t,e,n){return tp.current.useReducer(t,e,n)},N=function(t){return tp.current.useRef(t)},A=function(t){return tp.current.useState(t)},R=function(t,e,n){return tp.current.useSyncExternalStore(t,e,n)},D=function(){return tp.current.useTransition()},B="18.2.0"}),a.register("Xw6Mv",function(e,n){t(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>W,t=>W=t),t(e.exports,"createPortal",()=>V,t=>V=t),t(e.exports,"createRoot",()=>G,t=>G=t),t(e.exports,"findDOMNode",()=>$,t=>$=t),t(e.exports,"flushSync",()=>q,t=>q=t),t(e.exports,"hydrate",()=>K,t=>K=t),t(e.exports,"hydrateRoot",()=>Q,t=>Q=t),t(e.exports,"render",()=>Y,t=>Y=t),t(e.exports,"unmountComponentAtNode",()=>X,t=>X=t),t(e.exports,"unstable_batchedUpdates",()=>J,t=>J=t),t(e.exports,"unstable_renderSubtreeIntoContainer",()=>tt,t=>tt=t),t(e.exports,"version",()=>te,t=>te=t);var i,o,r,s,l,u,c=a("acw62"),h=a("fO90s");function d(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function m(t,e){_(t,e),_(t+"Capture",e)}function _(t,e){for(p[t]=e,t=0;t<e.length;t++)f.add(e[t])}var g=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},w={};function x(t,e,n,i,o,r,a){this.acceptsBooleans=2===e||3===e||4===e,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=a}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){k[t]=new x(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];k[e]=new x(e,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){k[t]=new x(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){k[t]=new x(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){k[t]=new x(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){k[t]=new x(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){k[t]=new x(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){k[t]=new x(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){k[t]=new x(t,5,!1,t.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function P(t){return t[1].toUpperCase()}function T(t,e,n,i){var o,r=k.hasOwnProperty(e)?k[e]:null;(null!==r?0!==r.type:i||!(2<e.length)||"o"!==e[0]&&"O"!==e[0]||"n"!==e[1]&&"N"!==e[1])&&(function(t,e,n,i){if(null==e||function(t,e,n,i){if(null!==n&&0===n.type)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":if(i)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(t=t.toLowerCase().slice(0,5))&&"aria-"!==t;default:return!1}}(t,e,n,i))return!0;if(i)return!1;if(null!==n)switch(n.type){case 3:return!e;case 4:return!1===e;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}(e,n,r,i)&&(n=null),i||null===r?(o=e,(!!v.call(w,o)||!v.call(b,o)&&(y.test(o)?w[o]=!0:(b[o]=!0,!1)))&&(null===n?t.removeAttribute(e):t.setAttribute(e,""+n))):r.mustUseProperty?t[r.propertyName]=null===n?3!==r.type&&"":n:(e=r.attributeName,i=r.attributeNamespace,null===n?t.removeAttribute(e):(n=3===(r=r.type)||4===r&&!0===n?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(S,P);k[e]=new x(e,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(S,P);k[e]=new x(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(S,P);k[e]=new x(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){k[t]=new x(t,1,!1,t.toLowerCase(),null,!1,!1)}),k.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){k[t]=new x(t,1,!1,t.toLowerCase(),null,!0,!0)});var E=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),z=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),A=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var j=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var U=Symbol.iterator;function H(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=U&&t[U]||t["@@iterator"])?t:null}var W,V,G,$,q,K,Q,Y,X,J,tt,te,tn,ti=Object.assign;function to(t){if(void 0===tn)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);tn=e&&e[1]||""}return"\n"+tn+t}var tr=!1;function ta(t,e){if(!t||tr)return"";tr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e){if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(e,[])}catch(t){var i=t}Reflect.construct(t,[],e)}else{try{e.call()}catch(t){i=t}t.call(e.prototype)}}else{try{throw Error()}catch(t){i=t}t()}}catch(e){if(e&&i&&"string"==typeof e.stack){for(var o=e.stack.split("\n"),r=i.stack.split("\n"),a=o.length-1,s=r.length-1;1<=a&&0<=s&&o[a]!==r[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==r[s]){if(1!==a||1!==s)do if(a--,0>--s||o[a]!==r[s]){var l="\n"+o[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s)break}}}finally{tr=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function ts(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":case"object":return t;default:return""}}function tl(t){var e=t.type;return(t=t.nodeName)&&"input"===t.toLowerCase()&&("checkbox"===e||"radio"===e)}function tu(t){t._valueTracker||(t._valueTracker=function(t){var e=tl(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(t){i=""+t,r.call(this,t)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(t){i=""+t},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}(t))}function tc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tl(t)?t.checked?"true":"false":t.value),(t=i)!==n&&(e.setValue(t),!0)}function th(t){if(void 0===(t=t||("undefined"!=typeof document?document:void 0)))return null;try{return t.activeElement||t.body}catch(e){return t.body}}function td(t,e){var n=e.checked;return ti({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:t._wrapperState.initialChecked})}function tf(t,e){var n=null==e.defaultValue?"":e.defaultValue,i=null!=e.checked?e.checked:e.defaultChecked;n=ts(null!=e.value?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}}function tp(t,e){null!=(e=e.checked)&&T(t,"checked",e,!1)}function tm(t,e){tp(t,e);var n=ts(e.value),i=e.type;if(null!=n)"number"===i?(0===n&&""===t.value||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if("submit"===i||"reset"===i){t.removeAttribute("value");return}e.hasOwnProperty("value")?tg(t,e.type,n):e.hasOwnProperty("defaultValue")&&tg(t,e.type,ts(e.defaultValue)),null==e.checked&&null!=e.defaultChecked&&(t.defaultChecked=!!e.defaultChecked)}function t_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!("submit"!==i&&"reset"!==i||void 0!==e.value&&null!==e.value))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}""!==(n=t.name)&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,""!==n&&(t.name=n)}function tg(t,e,n){("number"!==e||th(t.ownerDocument)!==t)&&(null==n?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var tv=Array.isArray;function ty(t,e,n,i){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&i&&(t[n].defaultSelected=!0)}else{for(o=0,n=""+ts(n),e=null;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,i&&(t[o].defaultSelected=!0);return}null!==e||t[o].disabled||(e=t[o])}null!==e&&(e.selected=!0)}}function tb(t,e){if(null!=e.dangerouslySetInnerHTML)throw Error(d(91));return ti({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tw(t,e){var n=e.value;if(null==n){if(n=e.children,e=e.defaultValue,null!=n){if(null!=e)throw Error(d(92));if(tv(n)){if(1<n.length)throw Error(d(93));n=n[0]}e=n}null==e&&(e=""),n=e}t._wrapperState={initialValue:ts(n)}}function tx(t,e){var n=ts(e.value),i=ts(e.defaultValue);null!=n&&((n=""+n)!==t.value&&(t.value=n),null==e.defaultValue&&t.defaultValue!==n&&(t.defaultValue=n)),null!=i&&(t.defaultValue=""+i)}function tk(t){var e=t.textContent;e===t._wrapperState.initialValue&&""!==e&&null!==e&&(t.value=e)}function tS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tP(t,e){return null==t||"http://www.w3.org/1999/xhtml"===t?tS(e):"http://www.w3.org/2000/svg"===t&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":t}var tL,tT,tE=(tL=function(t,e){if("http://www.w3.org/2000/svg"!==t.namespaceURI||"innerHTML"in t)t.innerHTML=e;else{for((tT=tT||document.createElement("div")).innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tT.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,e,n,i){MSApp.execUnsafeLocalFunction(function(){return tL(t,e,n,i)})}:tL);function tC(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&3===n.nodeType){n.nodeValue=e;return}}t.textContent=e}var tz={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tM=["Webkit","ms","Moz","O"];function tO(t,e,n){return null==e||"boolean"==typeof e||""===e?"":n||"number"!=typeof e||0===e||tz.hasOwnProperty(t)&&tz[t]?(""+e).trim():e+"px"}function tI(t,e){for(var n in t=t.style,e)if(e.hasOwnProperty(n)){var i=0===n.indexOf("--"),o=tO(n,e[n],i);"float"===n&&(n="cssFloat"),i?t.setProperty(n,o):t[n]=o}}Object.keys(tz).forEach(function(t){tM.forEach(function(e){tz[e=e+t.charAt(0).toUpperCase()+t.substring(1)]=tz[t]})});var tN=ti({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tA(t,e){if(e){if(tN[t]&&(null!=e.children||null!=e.dangerouslySetInnerHTML))throw Error(d(137,t));if(null!=e.dangerouslySetInnerHTML){if(null!=e.children)throw Error(d(60));if("object"!=typeof e.dangerouslySetInnerHTML||!("__html"in e.dangerouslySetInnerHTML))throw Error(d(61))}if(null!=e.style&&"object"!=typeof e.style)throw Error(d(62))}}function tR(t,e){if(-1===t.indexOf("-"))return"string"==typeof e.is;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tD=null;function tB(t){return(t=t.target||t.srcElement||window).correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}var tZ=null,tF=null,tj=null;function tU(t){if(t=iX(t)){if("function"!=typeof tZ)throw Error(d(280));var e=t.stateNode;e&&(e=i0(e),tZ(t.stateNode,t.type,e))}}function tH(t){tF?tj?tj.push(t):tj=[t]:tF=t}function tW(){if(tF){var t=tF,e=tj;if(tj=tF=null,tU(t),e)for(t=0;t<e.length;t++)tU(e[t])}}function tV(t,e){return t(e)}function tG(){}var t$=!1;function tq(t,e,n){if(t$)return t(e,n);t$=!0;try{return tV(t,e,n)}finally{t$=!1,(null!==tF||null!==tj)&&(tG(),tW())}}function tK(t,e){var n=t.stateNode;if(null===n)return null;var i=i0(n);if(null===i)return null;switch(n=i[e],e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(i=!("button"===(t=t.type)||"input"===t||"select"===t||"textarea"===t)),t=!i;break;default:t=!1}if(t)return null;if(n&&"function"!=typeof n)throw Error(d(231,e,typeof n));return n}var tQ=!1;if(g)try{var tY={};Object.defineProperty(tY,"passive",{get:function(){tQ=!0}}),window.addEventListener("test",tY,tY),window.removeEventListener("test",tY,tY)}catch(t){tQ=!1}function tX(t,e,n,i,o,r,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(t){this.onError(t)}}var tJ=!1,t0=null,t1=!1,t2=null,t3={onError:function(t){tJ=!0,t0=t}};function t4(t,e,n,i,o,r,a,s,l){tJ=!1,t0=null,tX.apply(t3,arguments)}function t8(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do 0!=(4098&(e=t).flags)&&(n=e.return),t=e.return;while(t)}return 3===e.tag?n:null}function t5(t){if(13===t.tag){var e=t.memoizedState;if(null===e&&null!==(t=t.alternate)&&(e=t.memoizedState),null!==e)return e.dehydrated}return null}function t6(t){if(t8(t)!==t)throw Error(d(188))}function t9(t){return null!==(t=function(t){var e=t.alternate;if(!e){if(null===(e=t8(t)))throw Error(d(188));return e!==t?null:t}for(var n=t,i=e;;){var o=n.return;if(null===o)break;var r=o.alternate;if(null===r){if(null!==(i=o.return)){n=i;continue}break}if(o.child===r.child){for(r=o.child;r;){if(r===n)return t6(o),t;if(r===i)return t6(o),e;r=r.sibling}throw Error(d(188))}if(n.return!==i.return)n=o,i=r;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,i=r;break}if(s===i){a=!0,i=o,n=r;break}s=s.sibling}if(!a){for(s=r.child;s;){if(s===n){a=!0,n=r,i=o;break}if(s===i){a=!0,i=r,n=o;break}s=s.sibling}if(!a)throw Error(d(189))}}if(n.alternate!==i)throw Error(d(190))}if(3!==n.tag)throw Error(d(188));return n.stateNode.current===n?t:e}(t))?function t(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var n=t(e);if(null!==n)return n;e=e.sibling}return null}(t):null}var t7=h.unstable_scheduleCallback,et=h.unstable_cancelCallback,ee=h.unstable_shouldYield,en=h.unstable_requestPaint,ei=h.unstable_now,eo=h.unstable_getCurrentPriorityLevel,er=h.unstable_ImmediatePriority,ea=h.unstable_UserBlockingPriority,es=h.unstable_NormalPriority,el=h.unstable_LowPriority,eu=h.unstable_IdlePriority,ec=null,eh=null,ed=Math.clz32?Math.clz32:function(t){return 0==(t>>>=0)?32:31-(ef(t)/ep|0)|0},ef=Math.log,ep=Math.LN2,em=64,e_=4194304;function eg(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&t;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&t;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ev(t,e){var n=t.pendingLanes;if(0===n)return 0;var i=0,o=t.suspendedLanes,r=t.pingedLanes,a=268435455&n;if(0!==a){var s=a&~o;0!==s?i=eg(s):0!=(r&=a)&&(i=eg(r))}else 0!=(a=n&~o)?i=eg(a):0!==r&&(i=eg(r));if(0===i)return 0;if(0!==e&&e!==i&&0==(e&o)&&((o=i&-i)>=(r=e&-e)||16===o&&0!=(4194240&r)))return e;if(0!=(4&i)&&(i|=16&n),0!==(e=t.entangledLanes))for(t=t.entanglements,e&=i;0<e;)o=1<<(n=31-ed(e)),i|=t[n],e&=~o;return i}function ey(t){return 0!=(t=-1073741825&t.pendingLanes)?t:1073741824&t?1073741824:0}function eb(){var t=em;return 0==(4194240&(em<<=1))&&(em=64),t}function ew(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ex(t,e,n){t.pendingLanes|=e,536870912!==e&&(t.suspendedLanes=0,t.pingedLanes=0),(t=t.eventTimes)[e=31-ed(e)]=n}function ek(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ed(n),o=1<<i;o&e|t[i]&e&&(t[i]|=e),n&=~o}}var eS=0;function eP(t){return 1<(t&=-t)?4<t?0!=(268435455&t)?16:536870912:4:1}var eL,eT,eE,eC,ez,eM=!1,eO=[],eI=null,eN=null,eA=null,eR=new Map,eD=new Map,eB=[],eZ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eF(t,e){switch(t){case"focusin":case"focusout":eI=null;break;case"dragenter":case"dragleave":eN=null;break;case"mouseover":case"mouseout":eA=null;break;case"pointerover":case"pointerout":eR.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eD.delete(e.pointerId)}}function ej(t,e,n,i,o,r){return null===t||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[o]},null!==e&&null!==(e=iX(e))&&eT(e)):(t.eventSystemFlags|=i,e=t.targetContainers,null!==o&&-1===e.indexOf(o)&&e.push(o)),t}function eU(t){var e=iY(t.target);if(null!==e){var n=t8(e);if(null!==n){if(13===(e=n.tag)){if(null!==(e=t5(n))){t.blockedOn=e,ez(t.priority,function(){eE(n)});return}}else if(3===e&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eH(t){if(null!==t.blockedOn)return!1;for(var e=t.targetContainers;0<e.length;){var n=e0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(null!==n)return null!==(e=iX(n))&&eT(e),t.blockedOn=n,!1;var i=new(n=t.nativeEvent).constructor(n.type,n);tD=i,n.target.dispatchEvent(i),tD=null,e.shift()}return!0}function eW(t,e,n){eH(t)&&n.delete(e)}function eV(){eM=!1,null!==eI&&eH(eI)&&(eI=null),null!==eN&&eH(eN)&&(eN=null),null!==eA&&eH(eA)&&(eA=null),eR.forEach(eW),eD.forEach(eW)}function eG(t,e){t.blockedOn===e&&(t.blockedOn=null,eM||(eM=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,eV)))}function e$(t){function e(e){return eG(e,t)}if(0<eO.length){eG(eO[0],t);for(var n=1;n<eO.length;n++){var i=eO[n];i.blockedOn===t&&(i.blockedOn=null)}}for(null!==eI&&eG(eI,t),null!==eN&&eG(eN,t),null!==eA&&eG(eA,t),eR.forEach(e),eD.forEach(e),n=0;n<eB.length;n++)(i=eB[n]).blockedOn===t&&(i.blockedOn=null);for(;0<eB.length&&null===(n=eB[0]).blockedOn;)eU(n),null===n.blockedOn&&eB.shift()}var eq=E.ReactCurrentBatchConfig,eK=!0;function eQ(t,e,n,i){var o=eS,r=eq.transition;eq.transition=null;try{eS=1,eX(t,e,n,i)}finally{eS=o,eq.transition=r}}function eY(t,e,n,i){var o=eS,r=eq.transition;eq.transition=null;try{eS=4,eX(t,e,n,i)}finally{eS=o,eq.transition=r}}function eX(t,e,n,i){if(eK){var o=e0(t,e,n,i);if(null===o)ik(t,e,i,eJ,n),eF(t,i);else if(function(t,e,n,i,o){switch(e){case"focusin":return eI=ej(eI,t,e,n,i,o),!0;case"dragenter":return eN=ej(eN,t,e,n,i,o),!0;case"mouseover":return eA=ej(eA,t,e,n,i,o),!0;case"pointerover":var r=o.pointerId;return eR.set(r,ej(eR.get(r)||null,t,e,n,i,o)),!0;case"gotpointercapture":return r=o.pointerId,eD.set(r,ej(eD.get(r)||null,t,e,n,i,o)),!0}return!1}(o,t,e,n,i))i.stopPropagation();else if(eF(t,i),4&e&&-1<eZ.indexOf(t)){for(;null!==o;){var r=iX(o);if(null!==r&&eL(r),null===(r=e0(t,e,n,i))&&ik(t,e,i,eJ,n),r===o)break;o=r}null!==o&&i.stopPropagation()}else ik(t,e,i,null,n)}}var eJ=null;function e0(t,e,n,i){if(eJ=null,null!==(t=iY(t=tB(i)))){if(null===(e=t8(t)))t=null;else if(13===(n=e.tag)){if(null!==(t=t5(e)))return t;t=null}else if(3===n){if(e.stateNode.current.memoizedState.isDehydrated)return 3===e.tag?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}return eJ=t,null}function e1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eo()){case er:return 1;case ea:return 4;case es:case el:return 16;case eu:return 536870912;default:return 16}default:return 16}}var e2=null,e3=null,e4=null;function e8(){if(e4)return e4;var t,e,n=e3,i=n.length,o="value"in e2?e2.value:e2.textContent,r=o.length;for(t=0;t<i&&n[t]===o[t];t++);var a=i-t;for(e=1;e<=a&&n[i-e]===o[r-e];e++);return e4=o.slice(t,1<e?1-e:void 0)}function e5(t){var e=t.keyCode;return"charCode"in t?0===(t=t.charCode)&&13===e&&(t=13):t=e,10===t&&(t=13),32<=t||13===t?t:0}function e6(){return!0}function e9(){return!1}function e7(t){function e(e,n,i,o,r){for(var a in this._reactName=e,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=r,this.currentTarget=null,t)t.hasOwnProperty(a)&&(e=t[a],this[a]=e?e(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?e6:e9,this.isPropagationStopped=e9,this}return ti(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():"unknown"!=typeof t.returnValue&&(t.returnValue=!1),this.isDefaultPrevented=e6)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():"unknown"!=typeof t.cancelBubble&&(t.cancelBubble=!0),this.isPropagationStopped=e6)},persist:function(){},isPersistent:e6}),e}var nt,ne,nn,ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=e7(ni),nr=ti({},ni,{view:0,detail:0}),na=e7(nr),ns=ti({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nv,button:0,buttons:0,relatedTarget:function(t){return void 0===t.relatedTarget?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nn&&(nn&&"mousemove"===t.type?(nt=t.screenX-nn.screenX,ne=t.screenY-nn.screenY):ne=nt=0,nn=t),nt)},movementY:function(t){return"movementY"in t?t.movementY:ne}}),nl=e7(ns),nu=e7(ti({},ns,{dataTransfer:0})),nc=e7(ti({},nr,{relatedTarget:0})),nh=e7(ti({},ni,{animationName:0,elapsedTime:0,pseudoElement:0})),nd=e7(ti({},ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}})),nf=e7(ti({},ni,{data:0})),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):!!(t=n_[t])&&!!e[t]}function nv(){return ng}var ny=e7(ti({},nr,{key:function(t){if(t.key){var e=np[t.key]||t.key;if("Unidentified"!==e)return e}return"keypress"===t.type?13===(t=e5(t))?"Enter":String.fromCharCode(t):"keydown"===t.type||"keyup"===t.type?nm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nv,charCode:function(t){return"keypress"===t.type?e5(t):0},keyCode:function(t){return"keydown"===t.type||"keyup"===t.type?t.keyCode:0},which:function(t){return"keypress"===t.type?e5(t):"keydown"===t.type||"keyup"===t.type?t.keyCode:0}})),nb=e7(ti({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nw=e7(ti({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nv})),nx=e7(ti({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0})),nk=e7(ti({},ns,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0})),nS=[9,13,27,32],nP=g&&"CompositionEvent"in window,nL=null;g&&"documentMode"in document&&(nL=document.documentMode);var nT=g&&"TextEvent"in window&&!nL,nE=g&&(!nP||nL&&8<nL&&11>=nL),nC=!1;function nz(t,e){switch(t){case"keyup":return -1!==nS.indexOf(e.keyCode);case"keydown":return 229!==e.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nM(t){return"object"==typeof(t=t.detail)&&"data"in t?t.data:null}var nO=!1,nI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nN(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return"input"===e?!!nI[t.type]:"textarea"===e}function nA(t,e,n,i){tH(i),0<(e=iP(e,"onChange")).length&&(n=new no("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var nR=null,nD=null;function nB(t){ig(t,0)}function nZ(t){if(tc(iJ(t)))return t}function nF(t,e){if("change"===t)return e}var nj=!1;if(g){if(g){var nU="oninput"in document;if(!nU){var nH=document.createElement("div");nH.setAttribute("oninput","return;"),nU="function"==typeof nH.oninput}i=nU}else i=!1;nj=i&&(!document.documentMode||9<document.documentMode)}function nW(){nR&&(nR.detachEvent("onpropertychange",nV),nD=nR=null)}function nV(t){if("value"===t.propertyName&&nZ(nD)){var e=[];nA(e,nD,t,tB(t)),tq(nB,e)}}function nG(t,e,n){"focusin"===t?(nW(),nR=e,nD=n,nR.attachEvent("onpropertychange",nV)):"focusout"===t&&nW()}function n$(t){if("selectionchange"===t||"keyup"===t||"keydown"===t)return nZ(nD)}function nq(t,e){if("click"===t)return nZ(e)}function nK(t,e){if("input"===t||"change"===t)return nZ(e)}var nQ="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e};function nY(t,e){if(nQ(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!v.call(e,o)||!nQ(t[o],e[o]))return!1}return!0}function nX(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nJ(t,e){var n,i=nX(t);for(t=0;i;){if(3===i.nodeType){if(n=t+i.textContent.length,t<=e&&n>=e)return{node:i,offset:e-t};t=n}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=nX(i)}}function n0(){for(var t=window,e=th();e instanceof t.HTMLIFrameElement;){try{var n="string"==typeof e.contentWindow.location.href}catch(t){n=!1}if(n)t=e.contentWindow;else break;e=th(t.document)}return e}function n1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&("input"===e&&("text"===t.type||"search"===t.type||"tel"===t.type||"url"===t.type||"password"===t.type)||"textarea"===e||"true"===t.contentEditable)}var n2=g&&"documentMode"in document&&11>=document.documentMode,n3=null,n4=null,n8=null,n5=!1;function n6(t,e,n){var i=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n5||null==n3||n3!==th(i)||(i="selectionStart"in(i=n3)&&n1(i)?{start:i.selectionStart,end:i.selectionEnd}:{anchorNode:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset},n8&&nY(n8,i)||(n8=i,0<(i=iP(n4,"onSelect")).length&&(e=new no("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=n3)))}function n9(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var n7={animationend:n9("Animation","AnimationEnd"),animationiteration:n9("Animation","AnimationIteration"),animationstart:n9("Animation","AnimationStart"),transitionend:n9("Transition","TransitionEnd")},it={},ie={};function ii(t){if(it[t])return it[t];if(!n7[t])return t;var e,n=n7[t];for(e in n)if(n.hasOwnProperty(e)&&e in ie)return it[t]=n[e];return t}g&&(ie=document.createElement("div").style,"AnimationEvent"in window||(delete n7.animationend.animation,delete n7.animationiteration.animation,delete n7.animationstart.animation),"TransitionEvent"in window||delete n7.transitionend.transition);var io=ii("animationend"),ir=ii("animationiteration"),ia=ii("animationstart"),is=ii("transitionend"),il=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ic(t,e){il.set(t,e),m(e,[t])}for(var ih=0;ih<iu.length;ih++){var id=iu[ih];ic(id.toLowerCase(),"on"+(id[0].toUpperCase()+id.slice(1)))}ic(io,"onAnimationEnd"),ic(ir,"onAnimationIteration"),ic(ia,"onAnimationStart"),ic("dblclick","onDoubleClick"),ic("focusin","onFocus"),ic("focusout","onBlur"),ic(is,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ip="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(ip));function i_(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,function(t,e,n,i,o,r,a,s,l){if(t4.apply(this,arguments),tJ){if(tJ){var u=t0;tJ=!1,t0=null}else throw Error(d(198));t1||(t1=!0,t2=u)}}(i,e,void 0,t),t.currentTarget=null}function ig(t,e){e=0!=(4&e);for(var n=0;n<t.length;n++){var i=t[n],o=i.event;i=i.listeners;t:{var r=void 0;if(e)for(var a=i.length-1;0<=a;a--){var s=i[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==r&&o.isPropagationStopped())break t;i_(o,s,u),r=l}else for(a=0;a<i.length;a++){if(l=(s=i[a]).instance,u=s.currentTarget,s=s.listener,l!==r&&o.isPropagationStopped())break t;i_(o,s,u),r=l}}}if(t1)throw t=t2,t1=!1,t2=null,t}function iv(t,e){var n=e[iq];void 0===n&&(n=e[iq]=new Set);var i=t+"__bubble";n.has(i)||(ix(e,t,2,!1),n.add(i))}function iy(t,e,n){var i=0;e&&(i|=4),ix(n,t,i,e)}var ib="_reactListening"+Math.random().toString(36).slice(2);function iw(t){if(!t[ib]){t[ib]=!0,f.forEach(function(e){"selectionchange"!==e&&(im.has(e)||iy(e,!1,t),iy(e,!0,t))});var e=9===t.nodeType?t:t.ownerDocument;null===e||e[ib]||(e[ib]=!0,iy("selectionchange",!1,e))}}function ix(t,e,n,i){switch(e1(e)){case 1:var o=eQ;break;case 4:o=eY;break;default:o=eX}n=o.bind(null,e,n,t),o=void 0,tQ&&("touchstart"===e||"touchmove"===e||"wheel"===e)&&(o=!0),i?void 0!==o?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):void 0!==o?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function ik(t,e,n,i,o){var r=i;if(0==(1&e)&&0==(2&e)&&null!==i)t:for(;;){if(null===i)return;var a=i.tag;if(3===a||4===a){var s=i.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=i.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=iY(s)))return;if(5===(l=a.tag)||6===l){i=r=a;continue t}s=s.parentNode}}i=i.return}tq(function(){var i=r,o=tB(n),a=[];t:{var s=il.get(t);if(void 0!==s){var l=no,u=t;switch(t){case"keypress":if(0===e5(n))break t;case"keydown":case"keyup":l=ny;break;case"focusin":u="focus",l=nc;break;case"focusout":u="blur",l=nc;break;case"beforeblur":case"afterblur":l=nc;break;case"click":if(2===n.button)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=nu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=nw;break;case io:case ir:case ia:l=nh;break;case is:l=nx;break;case"scroll":l=na;break;case"wheel":l=nk;break;case"copy":case"cut":case"paste":l=nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=nb}var c=0!=(4&e),h=!c&&"scroll"===t,d=c?null!==s?s+"Capture":null:s;c=[];for(var f,p=i;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&null!=(m=tK(p,d))&&c.push(iS(p,m,f))),h)break;p=p.return}0<c.length&&(s=new l(s,u,null,n,o),a.push({event:s,listeners:c}))}}if(0==(7&e)){if(s="mouseover"===t||"pointerover"===t,l="mouseout"===t||"pointerout"===t,!(s&&n!==tD&&(u=n.relatedTarget||n.fromElement)&&(iY(u)||u[i$]))&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=i,null!==(u=u?iY(u):null)&&(h=t8(u),u!==h||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=i),l!==u)){if(c=nl,m="onMouseLeave",d="onMouseEnter",p="mouse",("pointerout"===t||"pointerover"===t)&&(c=nb,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?s:iJ(l),f=null==u?s:iJ(u),(s=new c(m,p+"leave",l,n,o)).target=h,s.relatedTarget=f,m=null,iY(o)===i&&((c=new c(d,p+"enter",u,n,o)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(c=l,d=u,p=0,f=c;f;f=iL(f))p++;for(f=0,m=d;m;m=iL(m))f++;for(;0<p-f;)c=iL(c),p--;for(;0<f-p;)d=iL(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=iL(c),d=iL(d)}c=null}else c=null;null!==l&&iT(a,s,l,c,!1),null!==u&&null!==h&&iT(a,h,u,c,!0)}t:{if("select"===(l=(s=i?iJ(i):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var _,g=nF;else if(nN(s)){if(nj)g=nK;else{g=n$;var v=nG}}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=nq);if(g&&(g=g(t,i))){nA(a,g,n,o);break t}v&&v(t,s,i),"focusout"===t&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&tg(s,"number",s.value)}switch(v=i?iJ(i):window,t){case"focusin":(nN(v)||"true"===v.contentEditable)&&(n3=v,n4=i,n8=null);break;case"focusout":n8=n4=n3=null;break;case"mousedown":n5=!0;break;case"contextmenu":case"mouseup":case"dragend":n5=!1,n6(a,n,o);break;case"selectionchange":if(n2)break;case"keydown":case"keyup":n6(a,n,o)}if(nP)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else nO?nz(t,n)&&(y="onCompositionEnd"):"keydown"===t&&229===n.keyCode&&(y="onCompositionStart");y&&(nE&&"ko"!==n.locale&&(nO||"onCompositionStart"!==y?"onCompositionEnd"===y&&nO&&(_=e8()):(e3="value"in(e2=o)?e2.value:e2.textContent,nO=!0)),0<(v=iP(i,y)).length&&(y=new nf(y,t,null,n,o),a.push({event:y,listeners:v}),_?y.data=_:null!==(_=nM(n))&&(y.data=_))),(_=nT?function(t,e){switch(t){case"compositionend":return nM(e);case"keypress":if(32!==e.which)return null;return nC=!0," ";case"textInput":return" "===(t=e.data)&&nC?null:t;default:return null}}(t,n):function(t,e){if(nO)return"compositionend"===t||!nP&&nz(t,e)?(t=e8(),e4=e3=e2=null,nO=!1,t):null;switch(t){case"paste":default:return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nE&&"ko"!==e.locale?null:e.data}}(t,n))&&0<(i=iP(i,"onBeforeInput")).length&&(o=new nf("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:i}),o.data=_)}ig(a,e)})}function iS(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iP(t,e){for(var n=e+"Capture",i=[];null!==t;){var o=t,r=o.stateNode;5===o.tag&&null!==r&&(o=r,null!=(r=tK(t,n))&&i.unshift(iS(t,r,o)),null!=(r=tK(t,e))&&i.push(iS(t,r,o))),t=t.return}return i}function iL(t){if(null===t)return null;do t=t.return;while(t&&5!==t.tag)return t||null}function iT(t,e,n,i,o){for(var r=e._reactName,a=[];null!==n&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===i)break;5===s.tag&&null!==u&&(s=u,o?null!=(l=tK(n,r))&&a.unshift(iS(n,l,s)):o||null!=(l=tK(n,r))&&a.push(iS(n,l,s))),n=n.return}0!==a.length&&t.push({event:e,listeners:a})}var iE=/\r\n?/g,iC=/\u0000|\uFFFD/g;function iz(t){return("string"==typeof t?t:""+t).replace(iE,"\n").replace(iC,"")}function iM(t,e,n){if(e=iz(e),iz(t)!==e&&n)throw Error(d(425))}function iO(){}var iI=null,iN=null;function iA(t,e){return"textarea"===t||"noscript"===t||"string"==typeof e.children||"number"==typeof e.children||"object"==typeof e.dangerouslySetInnerHTML&&null!==e.dangerouslySetInnerHTML&&null!=e.dangerouslySetInnerHTML.__html}var iR="function"==typeof setTimeout?setTimeout:void 0,iD="function"==typeof clearTimeout?clearTimeout:void 0,iB="function"==typeof Promise?Promise:void 0,iZ="function"==typeof queueMicrotask?queueMicrotask:void 0!==iB?function(t){return iB.resolve(null).then(t).catch(iF)}:iR;function iF(t){setTimeout(function(){throw t})}function ij(t,e){var n=e,i=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&8===o.nodeType){if("/$"===(n=o.data)){if(0===i){t.removeChild(o),e$(e);return}i--}else"$"!==n&&"$?"!==n&&"$!"!==n||i++}n=o}while(n)e$(e)}function iU(t){for(;null!=t;t=t.nextSibling){var e=t.nodeType;if(1===e||3===e)break;if(8===e){if("$"===(e=t.data)||"$!"===e||"$?"===e)break;if("/$"===e)return null}}return t}function iH(t){t=t.previousSibling;for(var e=0;t;){if(8===t.nodeType){var n=t.data;if("$"===n||"$!"===n||"$?"===n){if(0===e)return t;e--}else"/$"===n&&e++}t=t.previousSibling}return null}var iW=Math.random().toString(36).slice(2),iV="__reactFiber$"+iW,iG="__reactProps$"+iW,i$="__reactContainer$"+iW,iq="__reactEvents$"+iW,iK="__reactListeners$"+iW,iQ="__reactHandles$"+iW;function iY(t){var e=t[iV];if(e)return e;for(var n=t.parentNode;n;){if(e=n[i$]||n[iV]){if(n=e.alternate,null!==e.child||null!==n&&null!==n.child)for(t=iH(t);null!==t;){if(n=t[iV])return n;t=iH(t)}return e}n=(t=n).parentNode}return null}function iX(t){return(t=t[iV]||t[i$])&&(5===t.tag||6===t.tag||13===t.tag||3===t.tag)?t:null}function iJ(t){if(5===t.tag||6===t.tag)return t.stateNode;throw Error(d(33))}function i0(t){return t[iG]||null}var i1=[],i2=-1;function i3(t){return{current:t}}function i4(t){0>i2||(t.current=i1[i2],i1[i2]=null,i2--)}function i8(t,e){i1[++i2]=t.current,t.current=e}var i5={},i6=i3(i5),i9=i3(!1),i7=i5;function ot(t,e){var n=t.type.contextTypes;if(!n)return i5;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var o,r={};for(o in n)r[o]=e[o];return i&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function oe(t){return null!=(t=t.childContextTypes)}function on(){i4(i9),i4(i6)}function oi(t,e,n){if(i6.current!==i5)throw Error(d(168));i8(i6,e),i8(i9,n)}function oo(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,"function"!=typeof i.getChildContext)return n;for(var o in i=i.getChildContext())if(!(o in e))throw Error(d(108,function(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=(t=e.render).displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function t(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case z:return"Portal";case I:return"Profiler";case O:return"StrictMode";case D:return"Suspense";case B:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case A:return(e.displayName||"Context")+".Consumer";case N:return(e._context.displayName||"Context")+".Provider";case R:var n=e.render;return(e=e.displayName)||(e=""!==(e=n.displayName||n.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return null!==(n=e.displayName||null)?n:t(e.type)||"Memo";case F:n=e._payload,e=e._init;try{return t(e(n))}catch(t){}}return null}(e);case 8:return e===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e}return null}(t)||"Unknown",o));return ti({},n,i)}function or(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||i5,i7=i6.current,i8(i6,t),i8(i9,i9.current),!0}function oa(t,e,n){var i=t.stateNode;if(!i)throw Error(d(169));n?(t=oo(t,e,i7),i.__reactInternalMemoizedMergedChildContext=t,i4(i9),i4(i6),i8(i6,t)):i4(i9),i8(i9,n)}var os=null,ol=!1,ou=!1;function oc(t){null===os?os=[t]:os.push(t)}function oh(){if(!ou&&null!==os){ou=!0;var t=0,e=eS;try{var n=os;for(eS=1;t<n.length;t++){var i=n[t];do i=i(!0);while(null!==i)}os=null,ol=!1}catch(e){throw null!==os&&(os=os.slice(t+1)),t7(er,oh),e}finally{eS=e,ou=!1}}return null}var od=[],of=0,op=null,om=0,o_=[],og=0,ov=null,oy=1,ob="";function ow(t,e){od[of++]=om,od[of++]=op,op=t,om=e}function ox(t,e,n){o_[og++]=oy,o_[og++]=ob,o_[og++]=ov,ov=t;var i=oy;t=ob;var o=32-ed(i)-1;i&=~(1<<o),n+=1;var r=32-ed(e)+o;if(30<r){var a=o-o%5;r=(i&(1<<a)-1).toString(32),i>>=a,o-=a,oy=1<<32-ed(e)+o|n<<o|i,ob=r+t}else oy=1<<r|n<<o|i,ob=t}function ok(t){null!==t.return&&(ow(t,1),ox(t,1,0))}function oS(t){for(;t===op;)op=od[--of],od[of]=null,om=od[--of],od[of]=null;for(;t===ov;)ov=o_[--og],o_[og]=null,ob=o_[--og],o_[og]=null,oy=o_[--og],o_[og]=null}var oP=null,oL=null,oT=!1,oE=null;function oC(t,e){var n=s7(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,null===(e=t.deletions)?(t.deletions=[n],t.flags|=16):e.push(n)}function oz(t,e){switch(t.tag){case 5:var n=t.type;return null!==(e=1!==e.nodeType||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e)&&(t.stateNode=e,oP=t,oL=iU(e.firstChild),!0);case 6:return null!==(e=""===t.pendingProps||3!==e.nodeType?null:e)&&(t.stateNode=e,oP=t,oL=null,!0);case 13:return null!==(e=8!==e.nodeType?null:e)&&(n=null!==ov?{id:oy,overflow:ob}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},(n=s7(18,null,null,0)).stateNode=e,n.return=t,t.child=n,oP=t,oL=null,!0);default:return!1}}function oM(t){return 0!=(1&t.mode)&&0==(128&t.flags)}function oO(t){if(oT){var e=oL;if(e){var n=e;if(!oz(t,e)){if(oM(t))throw Error(d(418));e=iU(n.nextSibling);var i=oP;e&&oz(t,e)?oC(i,n):(t.flags=-4097&t.flags|2,oT=!1,oP=t)}}else{if(oM(t))throw Error(d(418));t.flags=-4097&t.flags|2,oT=!1,oP=t}}}function oI(t){for(t=t.return;null!==t&&5!==t.tag&&3!==t.tag&&13!==t.tag;)t=t.return;oP=t}function oN(t){if(t!==oP)return!1;if(!oT)return oI(t),oT=!0,!1;if((e=3!==t.tag)&&!(e=5!==t.tag)&&(e="head"!==(e=t.type)&&"body"!==e&&!iA(t.type,t.memoizedProps)),e&&(e=oL)){if(oM(t))throw oA(),Error(d(418));for(;e;)oC(t,e),e=iU(e.nextSibling)}if(oI(t),13===t.tag){if(!(t=null!==(t=t.memoizedState)?t.dehydrated:null))throw Error(d(317));t:{for(e=0,t=t.nextSibling;t;){if(8===t.nodeType){var e,n=t.data;if("/$"===n){if(0===e){oL=iU(t.nextSibling);break t}e--}else"$"!==n&&"$!"!==n&&"$?"!==n||e++}t=t.nextSibling}oL=null}}else oL=oP?iU(t.stateNode.nextSibling):null;return!0}function oA(){for(var t=oL;t;)t=iU(t.nextSibling)}function oR(){oL=oP=null,oT=!1}function oD(t){null===oE?oE=[t]:oE.push(t)}var oB=E.ReactCurrentBatchConfig;function oZ(t,e){if(t&&t.defaultProps)for(var n in e=ti({},e),t=t.defaultProps)void 0===e[n]&&(e[n]=t[n]);return e}var oF=i3(null),oj=null,oU=null,oH=null;function oW(){oH=oU=oj=null}function oV(t){var e=oF.current;i4(oF),t._currentValue=e}function oG(t,e,n){for(;null!==t;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,null!==i&&(i.childLanes|=e)):null!==i&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function o$(t,e){oj=t,oH=oU=null,null!==(t=t.dependencies)&&null!==t.firstContext&&(0!=(t.lanes&e)&&(ax=!0),t.firstContext=null)}function oq(t){var e=t._currentValue;if(oH!==t){if(t={context:t,memoizedValue:e,next:null},null===oU){if(null===oj)throw Error(d(308));oU=t,oj.dependencies={lanes:0,firstContext:t}}else oU=oU.next=t}return e}var oK=null;function oQ(t){null===oK?oK=[t]:oK.push(t)}function oY(t,e,n,i){var o=e.interleaved;return null===o?(n.next=n,oQ(e)):(n.next=o.next,o.next=n),e.interleaved=n,oX(t,i)}function oX(t,e){t.lanes|=e;var n=t.alternate;for(null!==n&&(n.lanes|=e),n=t,t=t.return;null!==t;)t.childLanes|=e,null!==(n=t.alternate)&&(n.childLanes|=e),n=t,t=t.return;return 3===n.tag?n.stateNode:null}var oJ=!1;function o0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function o2(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function o3(t,e,n){var i=t.updateQueue;if(null===i)return null;if(i=i.shared,0!=(2&su)){var o=i.pending;return null===o?e.next=e:(e.next=o.next,o.next=e),i.pending=e,oX(t,n)}return null===(o=i.interleaved)?(e.next=e,oQ(i)):(e.next=o.next,o.next=e),i.interleaved=e,oX(t,n)}function o4(t,e,n){if(null!==(e=e.updateQueue)&&(e=e.shared,0!=(4194240&n))){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ek(t,n)}}function o8(t,e){var n=t.updateQueue,i=t.alternate;if(null!==i&&n===(i=i.updateQueue)){var o=null,r=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===r?o=r=a:r=r.next=a,n=n.next}while(null!==n)null===r?o=r=e:r=r.next=e}else o=r=e;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:r,shared:i.shared,effects:i.effects},t.updateQueue=n;return}null===(t=n.lastBaseUpdate)?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function o5(t,e,n,i){var o=t.updateQueue;oJ=!1;var r=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?r=u:a.next=u,a=l;var c=t.alternate;null!==c&&(s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l)}if(null!==r){var h=o.baseState;for(a=0,c=u=l=null,s=r;;){var d=s.lane,f=s.eventTime;if((i&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});t:{var p=t,m=s;switch(d=e,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break t}h=p;break t;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break t;h=ti({},h,d);break t;case 2:oJ=!0}}null!==s.callback&&0!==s.lane&&(t.flags|=64,null===(d=o.effects)?o.effects=[s]:d.push(s))}else f={eventTime:f,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,a|=d;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(d=s).next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}if(null===c&&(l=h),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(e=o.shared.interleaved)){o=e;do a|=o.lane,o=o.next;while(o!==e)}else null===r&&(o.shared.lanes=0);sg|=a,t.lanes=a,t.memoizedState=h}}function o6(t,e,n){if(t=e.effects,e.effects=null,null!==t)for(e=0;e<t.length;e++){var i=t[e],o=i.callback;if(null!==o){if(i.callback=null,i=n,"function"!=typeof o)throw Error(d(191,o));o.call(i)}}}var o9=(new c.Component).refs;function o7(t,e,n,i){n=null==(n=n(i,e=t.memoizedState))?e:ti({},e,n),t.memoizedState=n,0===t.lanes&&(t.updateQueue.baseState=n)}var rt={isMounted:function(t){return!!(t=t._reactInternals)&&t8(t)===t},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sA(),o=sR(t),r=o2(i,o);r.payload=e,null!=n&&(r.callback=n),null!==(e=o3(t,r,o))&&(sD(e,t,o,i),o4(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sA(),o=sR(t),r=o2(i,o);r.tag=1,r.payload=e,null!=n&&(r.callback=n),null!==(e=o3(t,r,o))&&(sD(e,t,o,i),o4(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sA(),i=sR(t),o=o2(n,i);o.tag=2,null!=e&&(o.callback=e),null!==(e=o3(t,o,i))&&(sD(e,t,i,n),o4(e,t,i))}};function re(t,e,n,i,o,r,a){return"function"==typeof(t=t.stateNode).shouldComponentUpdate?t.shouldComponentUpdate(i,r,a):!e.prototype||!e.prototype.isPureReactComponent||!nY(n,i)||!nY(o,r)}function rn(t,e,n){var i=!1,o=i5,r=e.contextType;return"object"==typeof r&&null!==r?r=oq(r):(o=oe(e)?i7:i6.current,r=(i=null!=(i=e.contextTypes))?ot(t,o):i5),e=new e(n,r),t.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,e.updater=rt,t.stateNode=e,e._reactInternals=t,i&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=r),e}function ri(t,e,n,i){t=e.state,"function"==typeof e.componentWillReceiveProps&&e.componentWillReceiveProps(n,i),"function"==typeof e.UNSAFE_componentWillReceiveProps&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&rt.enqueueReplaceState(e,e.state,null)}function ro(t,e,n,i){var o=t.stateNode;o.props=n,o.state=t.memoizedState,o.refs=o9,o0(t);var r=e.contextType;"object"==typeof r&&null!==r?o.context=oq(r):(r=oe(e)?i7:i6.current,o.context=ot(t,r)),o.state=t.memoizedState,"function"==typeof(r=e.getDerivedStateFromProps)&&(o7(t,e,r,n),o.state=t.memoizedState),"function"==typeof e.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(e=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),e!==o.state&&rt.enqueueReplaceState(o,o.state,null),o5(t,n,o,i),o.state=t.memoizedState),"function"==typeof o.componentDidMount&&(t.flags|=4194308)}function rr(t,e,n){if(null!==(t=n.ref)&&"function"!=typeof t&&"object"!=typeof t){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(d(309));var i=n.stateNode}if(!i)throw Error(d(147,t));var o=i,r=""+t;return null!==e&&null!==e.ref&&"function"==typeof e.ref&&e.ref._stringRef===r?e.ref:((e=function(t){var e=o.refs;e===o9&&(e=o.refs={}),null===t?delete e[r]:e[r]=t})._stringRef=r,e)}if("string"!=typeof t)throw Error(d(284));if(!n._owner)throw Error(d(290,t))}return t}function ra(t,e){throw Error(d(31,"[object Object]"===(t=Object.prototype.toString.call(e))?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rs(t){return(0,t._init)(t._payload)}function rl(t){function e(e,n){if(t){var i=e.deletions;null===i?(e.deletions=[n],e.flags|=16):i.push(n)}}function n(n,i){if(!t)return null;for(;null!==i;)e(n,i),i=i.sibling;return null}function i(t,e){for(t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(t,e){return(t=le(t,e)).index=0,t.sibling=null,t}function r(e,n,i){return(e.index=i,t)?null!==(i=e.alternate)?(i=i.index)<n?(e.flags|=2,n):i:(e.flags|=2,n):(e.flags|=1048576,n)}function a(e){return t&&null===e.alternate&&(e.flags|=2),e}function s(t,e,n,i){return null===e||6!==e.tag?(e=lr(n,t.mode,i)).return=t:(e=o(e,n)).return=t,e}function l(t,e,n,i){var r=n.type;return r===M?c(t,e,n.props.children,i,n.key):(null!==e&&(e.elementType===r||"object"==typeof r&&null!==r&&r.$$typeof===F&&rs(r)===e.type)?(i=o(e,n.props)).ref=rr(t,e,n):(i=ln(n.type,n.key,n.props,null,t.mode,i)).ref=rr(t,e,n),i.return=t,i)}function u(t,e,n,i){return null===e||4!==e.tag||e.stateNode.containerInfo!==n.containerInfo||e.stateNode.implementation!==n.implementation?(e=la(n,t.mode,i)).return=t:(e=o(e,n.children||[])).return=t,e}function c(t,e,n,i,r){return null===e||7!==e.tag?(e=li(n,t.mode,i,r)).return=t:(e=o(e,n)).return=t,e}function h(t,e,n){if("string"==typeof e&&""!==e||"number"==typeof e)return(e=lr(""+e,t.mode,n)).return=t,e;if("object"==typeof e&&null!==e){switch(e.$$typeof){case C:return(n=ln(e.type,e.key,e.props,null,t.mode,n)).ref=rr(t,null,e),n.return=t,n;case z:return(e=la(e,t.mode,n)).return=t,e;case F:return h(t,(0,e._init)(e._payload),n)}if(tv(e)||H(e))return(e=li(e,t.mode,n,null)).return=t,e;ra(t,e)}return null}function f(t,e,n,i){var o=null!==e?e.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==o?null:s(t,e,""+n,i);if("object"==typeof n&&null!==n){switch(n.$$typeof){case C:return n.key===o?l(t,e,n,i):null;case z:return n.key===o?u(t,e,n,i):null;case F:return f(t,e,(o=n._init)(n._payload),i)}if(tv(n)||H(n))return null!==o?null:c(t,e,n,i,null);ra(t,n)}return null}function p(t,e,n,i,o){if("string"==typeof i&&""!==i||"number"==typeof i)return s(e,t=t.get(n)||null,""+i,o);if("object"==typeof i&&null!==i){switch(i.$$typeof){case C:return l(e,t=t.get(null===i.key?n:i.key)||null,i,o);case z:return u(e,t=t.get(null===i.key?n:i.key)||null,i,o);case F:return p(t,e,n,(0,i._init)(i._payload),o)}if(tv(i)||H(i))return c(e,t=t.get(n)||null,i,o,null);ra(e,i)}return null}return function s(l,u,c,m){if("object"==typeof c&&null!==c&&c.type===M&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case C:t:{for(var _=c.key,g=u;null!==g;){if(g.key===_){if((_=c.type)===M){if(7===g.tag){n(l,g.sibling),(u=o(g,c.props.children)).return=l,l=u;break t}}else if(g.elementType===_||"object"==typeof _&&null!==_&&_.$$typeof===F&&rs(_)===g.type){n(l,g.sibling),(u=o(g,c.props)).ref=rr(l,g,c),u.return=l,l=u;break t}n(l,g);break}e(l,g),g=g.sibling}c.type===M?((u=li(c.props.children,l.mode,m,c.key)).return=l,l=u):((m=ln(c.type,c.key,c.props,null,l.mode,m)).ref=rr(l,u,c),m.return=l,l=m)}return a(l);case z:t:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=o(u,c.children||[])).return=l,l=u;break t}n(l,u);break}e(l,u),u=u.sibling}(u=la(c,l.mode,m)).return=l,l=u}return a(l);case F:return s(l,u,(g=c._init)(c._payload),m)}if(tv(c))return function(o,a,s,l){for(var u=null,c=null,d=a,m=a=0,_=null;null!==d&&m<s.length;m++){d.index>m?(_=d,d=null):_=d.sibling;var g=f(o,d,s[m],l);if(null===g){null===d&&(d=_);break}t&&d&&null===g.alternate&&e(o,d),a=r(g,a,m),null===c?u=g:c.sibling=g,c=g,d=_}if(m===s.length)return n(o,d),oT&&ow(o,m),u;if(null===d){for(;m<s.length;m++)null!==(d=h(o,s[m],l))&&(a=r(d,a,m),null===c?u=d:c.sibling=d,c=d);return oT&&ow(o,m),u}for(d=i(o,d);m<s.length;m++)null!==(_=p(d,o,m,s[m],l))&&(t&&null!==_.alternate&&d.delete(null===_.key?m:_.key),a=r(_,a,m),null===c?u=_:c.sibling=_,c=_);return t&&d.forEach(function(t){return e(o,t)}),oT&&ow(o,m),u}(l,u,c,m);if(H(c))return function(o,a,s,l){var u=H(s);if("function"!=typeof u)throw Error(d(150));if(null==(s=u.call(s)))throw Error(d(151));for(var c=u=null,m=a,_=a=0,g=null,v=s.next();null!==m&&!v.done;_++,v=s.next()){m.index>_?(g=m,m=null):g=m.sibling;var y=f(o,m,v.value,l);if(null===y){null===m&&(m=g);break}t&&m&&null===y.alternate&&e(o,m),a=r(y,a,_),null===c?u=y:c.sibling=y,c=y,m=g}if(v.done)return n(o,m),oT&&ow(o,_),u;if(null===m){for(;!v.done;_++,v=s.next())null!==(v=h(o,v.value,l))&&(a=r(v,a,_),null===c?u=v:c.sibling=v,c=v);return oT&&ow(o,_),u}for(m=i(o,m);!v.done;_++,v=s.next())null!==(v=p(m,o,_,v.value,l))&&(t&&null!==v.alternate&&m.delete(null===v.key?_:v.key),a=r(v,a,_),null===c?u=v:c.sibling=v,c=v);return t&&m.forEach(function(t){return e(o,t)}),oT&&ow(o,_),u}(l,u,c,m);ra(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=o(u,c)).return=l):(n(l,u),(u=lr(c,l.mode,m)).return=l),a(l=u)):n(l,u)}}var ru=rl(!0),rc=rl(!1),rh={},rd=i3(rh),rf=i3(rh),rp=i3(rh);function rm(t){if(t===rh)throw Error(d(174));return t}function r_(t,e){switch(i8(rp,e),i8(rf,t),i8(rd,rh),t=e.nodeType){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tP(null,"");break;default:e=tP(e=(t=8===t?e.parentNode:e).namespaceURI||null,t=t.tagName)}i4(rd),i8(rd,e)}function rg(){i4(rd),i4(rf),i4(rp)}function rv(t){rm(rp.current);var e=rm(rd.current),n=tP(e,t.type);e!==n&&(i8(rf,t),i8(rd,n))}function ry(t){rf.current===t&&(i4(rd),i4(rf))}var rb=i3(0);function rw(t){for(var e=t;null!==e;){if(13===e.tag){var n=e.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return e}else if(19===e.tag&&void 0!==e.memoizedProps.revealOrder){if(0!=(128&e.flags))return e}else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rx=[];function rk(){for(var t=0;t<rx.length;t++)rx[t]._workInProgressVersionPrimary=null;rx.length=0}var rS=E.ReactCurrentDispatcher,rP=E.ReactCurrentBatchConfig,rL=0,rT=null,rE=null,rC=null,rz=!1,rM=!1,rO=0,rI=0;function rN(){throw Error(d(321))}function rA(t,e){if(null===e)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nQ(t[n],e[n]))return!1;return!0}function rR(t,e,n,i,o,r){if(rL=r,rT=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rS.current=null===t||null===t.memoizedState?au:ac,t=n(i,o),rM){r=0;do{if(rM=!1,rO=0,25<=r)throw Error(d(301));r+=1,rC=rE=null,e.updateQueue=null,rS.current=ah,t=n(i,o)}while(rM)}if(rS.current=al,e=null!==rE&&null!==rE.next,rL=0,rC=rE=rT=null,rz=!1,e)throw Error(d(300));return t}function rD(){var t=0!==rO;return rO=0,t}function rB(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===rC?rT.memoizedState=rC=t:rC=rC.next=t,rC}function rZ(){if(null===rE){var t=rT.alternate;t=null!==t?t.memoizedState:null}else t=rE.next;var e=null===rC?rT.memoizedState:rC.next;if(null!==e)rC=e,rE=t;else{if(null===t)throw Error(d(310));t={memoizedState:(rE=t).memoizedState,baseState:rE.baseState,baseQueue:rE.baseQueue,queue:rE.queue,next:null},null===rC?rT.memoizedState=rC=t:rC=rC.next=t}return rC}function rF(t,e){return"function"==typeof e?e(t):e}function rj(t){var e=rZ(),n=e.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=t;var i=rE,o=i.baseQueue,r=n.pending;if(null!==r){if(null!==o){var a=o.next;o.next=r.next,r.next=a}i.baseQueue=o=r,n.pending=null}if(null!==o){r=o.next,i=i.baseState;var s=a=null,l=null,u=r;do{var c=u.lane;if((rL&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=h,a=i):l=l.next=h,rT.lanes|=c,sg|=c}u=u.next}while(null!==u&&u!==r)null===l?a=i:l.next=s,nQ(i,e.memoizedState)||(ax=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(null!==(t=n.interleaved)){o=t;do r=o.lane,rT.lanes|=r,sg|=r,o=o.next;while(o!==t)}else null===o&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rU(t){var e=rZ(),n=e.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=t;var i=n.dispatch,o=n.pending,r=e.memoizedState;if(null!==o){n.pending=null;var a=o=o.next;do r=t(r,a.action),a=a.next;while(a!==o)nQ(r,e.memoizedState)||(ax=!0),e.memoizedState=r,null===e.baseQueue&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function rH(){}function rW(t,e){var n=rT,i=rZ(),o=e(),r=!nQ(i.memoizedState,o);if(r&&(i.memoizedState=o,ax=!0),i=i.queue,r2(r$.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||null!==rC&&1&rC.memoizedState.tag){if(n.flags|=2048,rY(9,rG.bind(null,n,i,o,e),void 0,null),null===sc)throw Error(d(349));0!=(30&rL)||rV(n,e,o)}return o}function rV(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},null===(e=rT.updateQueue)?(e={lastEffect:null,stores:null},rT.updateQueue=e,e.stores=[t]):null===(n=e.stores)?e.stores=[t]:n.push(t)}function rG(t,e,n,i){e.value=n,e.getSnapshot=i,rq(e)&&rK(t)}function r$(t,e,n){return n(function(){rq(e)&&rK(t)})}function rq(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nQ(t,n)}catch(t){return!0}}function rK(t){var e=oX(t,1);null!==e&&sD(e,t,1,-1)}function rQ(t){var e=rB();return"function"==typeof t&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rF,lastRenderedState:t},e.queue=t,t=t.dispatch=ao.bind(null,rT,t),[e.memoizedState,t]}function rY(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},null===(e=rT.updateQueue)?(e={lastEffect:null,stores:null},rT.updateQueue=e,e.lastEffect=t.next=t):null===(n=e.lastEffect)?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function rX(){return rZ().memoizedState}function rJ(t,e,n,i){var o=rB();rT.flags|=t,o.memoizedState=rY(1|e,n,void 0,void 0===i?null:i)}function r0(t,e,n,i){var o=rZ();i=void 0===i?null:i;var r=void 0;if(null!==rE){var a=rE.memoizedState;if(r=a.destroy,null!==i&&rA(i,a.deps)){o.memoizedState=rY(e,n,r,i);return}}rT.flags|=t,o.memoizedState=rY(1|e,n,r,i)}function r1(t,e){return rJ(8390656,8,t,e)}function r2(t,e){return r0(2048,8,t,e)}function r3(t,e){return r0(4,2,t,e)}function r4(t,e){return r0(4,4,t,e)}function r8(t,e){return"function"==typeof e?(e(t=t()),function(){e(null)}):null!=e?(t=t(),e.current=t,function(){e.current=null}):void 0}function r5(t,e,n){return n=null!=n?n.concat([t]):null,r0(4,4,r8.bind(null,e,t),n)}function r6(){}function r9(t,e){var n=rZ();e=void 0===e?null:e;var i=n.memoizedState;return null!==i&&null!==e&&rA(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function r7(t,e){var n=rZ();e=void 0===e?null:e;var i=n.memoizedState;return null!==i&&null!==e&&rA(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function at(t,e,n){return 0==(21&rL)?(t.baseState&&(t.baseState=!1,ax=!0),t.memoizedState=n):(nQ(n,e)||(n=eb(),rT.lanes|=n,sg|=n,t.baseState=!0),e)}function ae(t,e){var n=eS;eS=0!==n&&4>n?n:4,t(!0);var i=rP.transition;rP.transition={};try{t(!1),e()}finally{eS=n,rP.transition=i}}function an(){return rZ().memoizedState}function ai(t,e,n){var i=sR(t);n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ar(t)?aa(e,n):null!==(n=oY(t,e,n,i))&&(sD(n,t,i,sA()),as(n,e,i))}function ao(t,e,n){var i=sR(t),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ar(t))aa(e,o);else{var r=t.alternate;if(0===t.lanes&&(null===r||0===r.lanes)&&null!==(r=e.lastRenderedReducer))try{var a=e.lastRenderedState,s=r(a,n);if(o.hasEagerState=!0,o.eagerState=s,nQ(s,a)){var l=e.interleaved;null===l?(o.next=o,oQ(e)):(o.next=l.next,l.next=o),e.interleaved=o;return}}catch(t){}finally{}null!==(n=oY(t,e,o,i))&&(sD(n,t,i,o=sA()),as(n,e,i))}}function ar(t){var e=t.alternate;return t===rT||null!==e&&e===rT}function aa(t,e){rM=rz=!0;var n=t.pending;null===n?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function as(t,e,n){if(0!=(4194240&n)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ek(t,n)}}var al={readContext:oq,useCallback:rN,useContext:rN,useEffect:rN,useImperativeHandle:rN,useInsertionEffect:rN,useLayoutEffect:rN,useMemo:rN,useReducer:rN,useRef:rN,useState:rN,useDebugValue:rN,useDeferredValue:rN,useTransition:rN,useMutableSource:rN,useSyncExternalStore:rN,useId:rN,unstable_isNewReconciler:!1},au={readContext:oq,useCallback:function(t,e){return rB().memoizedState=[t,void 0===e?null:e],t},useContext:oq,useEffect:r1,useImperativeHandle:function(t,e,n){return n=null!=n?n.concat([t]):null,rJ(4194308,4,r8.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rJ(4194308,4,t,e)},useInsertionEffect:function(t,e){return rJ(4,2,t,e)},useMemo:function(t,e){var n=rB();return e=void 0===e?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=rB();return e=void 0!==n?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ai.bind(null,rT,t),[i.memoizedState,t]},useRef:function(t){return t={current:t},rB().memoizedState=t},useState:rQ,useDebugValue:r6,useDeferredValue:function(t){return rB().memoizedState=t},useTransition:function(){var t=rQ(!1),e=t[0];return t=ae.bind(null,t[1]),rB().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rT,o=rB();if(oT){if(void 0===n)throw Error(d(407));n=n()}else{if(n=e(),null===sc)throw Error(d(349));0!=(30&rL)||rV(i,e,n)}o.memoizedState=n;var r={value:n,getSnapshot:e};return o.queue=r,r1(r$.bind(null,i,r,t),[t]),i.flags|=2048,rY(9,rG.bind(null,i,r,n,e),void 0,null),n},useId:function(){var t=rB(),e=sc.identifierPrefix;if(oT){var n=ob,i=oy;e=":"+e+"R"+(n=(i&~(1<<32-ed(i)-1)).toString(32)+n),0<(n=rO++)&&(e+="H"+n.toString(32)),e+=":"}else e=":"+e+"r"+(n=rI++).toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ac={readContext:oq,useCallback:r9,useContext:oq,useEffect:r2,useImperativeHandle:r5,useInsertionEffect:r3,useLayoutEffect:r4,useMemo:r7,useReducer:rj,useRef:rX,useState:function(){return rj(rF)},useDebugValue:r6,useDeferredValue:function(t){return at(rZ(),rE.memoizedState,t)},useTransition:function(){return[rj(rF)[0],rZ().memoizedState]},useMutableSource:rH,useSyncExternalStore:rW,useId:an,unstable_isNewReconciler:!1},ah={readContext:oq,useCallback:r9,useContext:oq,useEffect:r2,useImperativeHandle:r5,useInsertionEffect:r3,useLayoutEffect:r4,useMemo:r7,useReducer:rU,useRef:rX,useState:function(){return rU(rF)},useDebugValue:r6,useDeferredValue:function(t){var e=rZ();return null===rE?e.memoizedState=t:at(e,rE.memoizedState,t)},useTransition:function(){return[rU(rF)[0],rZ().memoizedState]},useMutableSource:rH,useSyncExternalStore:rW,useId:an,unstable_isNewReconciler:!1};function ad(t,e){try{var n="",i=e;do n+=function(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=ta(t.type,!1);case 11:return t=ta(t.type.render,!1);case 1:return t=ta(t.type,!0);default:return""}}(i),i=i.return;while(i)var o=n}catch(t){o="\nError generating stack: "+t.message+"\n"+t.stack}return{value:t,source:e,stack:o,digest:null}}function af(t,e,n){return{value:t,source:null,stack:null!=n?n:null,digest:null!=e?e:null}}function ap(t,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var am="function"==typeof WeakMap?WeakMap:Map;function a_(t,e,n){(n=o2(-1,n)).tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){sP||(sP=!0,sL=i),ap(t,e)},n}function ag(t,e,n){(n=o2(-1,n)).tag=3;var i=t.type.getDerivedStateFromError;if("function"==typeof i){var o=e.value;n.payload=function(){return i(o)},n.callback=function(){ap(t,e)}}var r=t.stateNode;return null!==r&&"function"==typeof r.componentDidCatch&&(n.callback=function(){ap(t,e),"function"!=typeof i&&(null===sT?sT=new Set([this]):sT.add(this));var n=e.stack;this.componentDidCatch(e.value,{componentStack:null!==n?n:""})}),n}function av(t,e,n){var i=t.pingCache;if(null===i){i=t.pingCache=new am;var o=new Set;i.set(e,o)}else void 0===(o=i.get(e))&&(o=new Set,i.set(e,o));o.has(n)||(o.add(n),t=s4.bind(null,t,e,n),e.then(t,t))}function ay(t){do{var e;if((e=13===t.tag)&&(e=null===(e=t.memoizedState)||null!==e.dehydrated),e)return t;t=t.return}while(null!==t)return null}function ab(t,e,n,i,o){return 0==(1&t.mode)?t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((e=o2(-1,1)).tag=2,o3(n,e,1))),n.lanes|=1):(t.flags|=65536,t.lanes=o),t}var aw=E.ReactCurrentOwner,ax=!1;function ak(t,e,n,i){e.child=null===t?rc(e,null,n,i):ru(e,t.child,n,i)}function aS(t,e,n,i,o){n=n.render;var r=e.ref;return(o$(e,o),i=rR(t,e,n,i,r,o),n=rD(),null===t||ax)?(oT&&n&&ok(e),e.flags|=1,ak(t,e,i,o),e.child):(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,aH(t,e,o))}function aP(t,e,n,i,o){if(null===t){var r=n.type;return"function"!=typeof r||lt(r)||void 0!==r.defaultProps||null!==n.compare||void 0!==n.defaultProps?((t=ln(n.type,null,i,e,e.mode,o)).ref=e.ref,t.return=e,e.child=t):(e.tag=15,e.type=r,aL(t,e,r,i,o))}if(r=t.child,0==(t.lanes&o)){var a=r.memoizedProps;if((n=null!==(n=n.compare)?n:nY)(a,i)&&t.ref===e.ref)return aH(t,e,o)}return e.flags|=1,(t=le(r,i)).ref=e.ref,t.return=e,e.child=t}function aL(t,e,n,i,o){if(null!==t){var r=t.memoizedProps;if(nY(r,i)&&t.ref===e.ref){if(ax=!1,e.pendingProps=i=r,0==(t.lanes&o))return e.lanes=t.lanes,aH(t,e,o);0!=(131072&t.flags)&&(ax=!0)}}return aC(t,e,n,i,o)}function aT(t,e,n){var i=e.pendingProps,o=i.children,r=null!==t?t.memoizedState:null;if("hidden"===i.mode){if(0==(1&e.mode))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i8(sp,sf),sf|=n;else{if(0==(1073741824&n))return t=null!==r?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,i8(sp,sf),sf|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=null!==r?r.baseLanes:n,i8(sp,sf),sf|=i}}else null!==r?(i=r.baseLanes|n,e.memoizedState=null):i=n,i8(sp,sf),sf|=i;return ak(t,e,o,n),e.child}function aE(t,e){var n=e.ref;(null===t&&null!==n||null!==t&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function aC(t,e,n,i,o){var r=oe(n)?i7:i6.current;return(r=ot(e,r),o$(e,o),n=rR(t,e,n,i,r,o),i=rD(),null===t||ax)?(oT&&i&&ok(e),e.flags|=1,ak(t,e,n,o),e.child):(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,aH(t,e,o))}function az(t,e,n,i,o){if(oe(n)){var r=!0;or(e)}else r=!1;if(o$(e,o),null===e.stateNode)aU(t,e),rn(e,n,i),ro(e,n,i,o),i=!0;else if(null===t){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,u=n.contextType;u="object"==typeof u&&null!==u?oq(u):ot(e,u=oe(n)?i7:i6.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==i||l!==u)&&ri(e,a,i,u),oJ=!1;var d=e.memoizedState;a.state=d,o5(e,i,a,o),l=e.memoizedState,s!==i||d!==l||i9.current||oJ?("function"==typeof c&&(o7(e,n,c,i),l=e.memoizedState),(s=oJ||re(e,n,s,i,d,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(e.flags|=4194308)):("function"==typeof a.componentDidMount&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=s):("function"==typeof a.componentDidMount&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,o1(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:oZ(e.type,s),a.props=u,h=e.pendingProps,d=a.context,l="object"==typeof(l=n.contextType)&&null!==l?oq(l):ot(e,l=oe(n)?i7:i6.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==h||d!==l)&&ri(e,a,i,l),oJ=!1,d=e.memoizedState,a.state=d,o5(e,i,a,o);var p=e.memoizedState;s!==h||d!==p||i9.current||oJ?("function"==typeof f&&(o7(e,n,f,i),p=e.memoizedState),(u=oJ||re(e,n,u,i,d,p,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(i,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(i,p,l)),"function"==typeof a.componentDidUpdate&&(e.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(e.flags|=1024)):("function"!=typeof a.componentDidUpdate||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):("function"!=typeof a.componentDidUpdate||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return aM(t,e,n,i,r,o)}function aM(t,e,n,i,o,r){aE(t,e);var a=0!=(128&e.flags);if(!i&&!a)return o&&oa(e,n,!1),aH(t,e,r);i=e.stateNode,aw.current=e;var s=a&&"function"!=typeof n.getDerivedStateFromError?null:i.render();return e.flags|=1,null!==t&&a?(e.child=ru(e,t.child,null,r),e.child=ru(e,null,s,r)):ak(t,e,s,r),e.memoizedState=i.state,o&&oa(e,n,!0),e.child}function aO(t){var e=t.stateNode;e.pendingContext?oi(t,e.pendingContext,e.pendingContext!==e.context):e.context&&oi(t,e.context,!1),r_(t,e.containerInfo)}function aI(t,e,n,i,o){return oR(),oD(o),e.flags|=256,ak(t,e,n,i),e.child}var aN={dehydrated:null,treeContext:null,retryLane:0};function aA(t){return{baseLanes:t,cachePool:null,transitions:null}}function aR(t,e,n){var i,o=e.pendingProps,r=rb.current,a=!1,s=0!=(128&e.flags);if((i=s)||(i=(null===t||null!==t.memoizedState)&&0!=(2&r)),i?(a=!0,e.flags&=-129):(null===t||null!==t.memoizedState)&&(r|=1),i8(rb,1&r),null===t)return(oO(e),null!==(t=e.memoizedState)&&null!==(t=t.dehydrated))?(0==(1&e.mode)?e.lanes=1:"$!"===t.data?e.lanes=8:e.lanes=1073741824,null):(s=o.children,t=o.fallback,a?(o=e.mode,a=e.child,s={mode:"hidden",children:s},0==(1&o)&&null!==a?(a.childLanes=0,a.pendingProps=s):a=lo(s,o,0,null),t=li(t,o,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=aA(n),e.memoizedState=aN,t):aD(e,s));if(null!==(r=t.memoizedState)&&null!==(i=r.dehydrated))return function(t,e,n,i,o,r,a){if(n)return 256&e.flags?(e.flags&=-257,aB(t,e,a,i=af(Error(d(422))))):null!==e.memoizedState?(e.child=t.child,e.flags|=128,null):(r=i.fallback,o=e.mode,i=lo({mode:"visible",children:i.children},o,0,null),r=li(r,o,a,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,0!=(1&e.mode)&&ru(e,t.child,null,a),e.child.memoizedState=aA(a),e.memoizedState=aN,r);if(0==(1&e.mode))return aB(t,e,a,null);if("$!"===o.data){if(i=o.nextSibling&&o.nextSibling.dataset)var s=i.dgst;return i=s,aB(t,e,a,i=af(r=Error(d(419)),i,void 0))}if(s=0!=(a&t.childLanes),ax||s){if(null!==(i=sc)){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!=(o&(i.suspendedLanes|a))?0:o)&&o!==r.retryLane&&(r.retryLane=o,oX(t,o),sD(i,t,o,-1))}return sQ(),aB(t,e,a,i=af(Error(d(421))))}return"$?"===o.data?(e.flags|=128,e.child=t.child,e=s5.bind(null,t),o._reactRetry=e,null):(t=r.treeContext,oL=iU(o.nextSibling),oP=e,oT=!0,oE=null,null!==t&&(o_[og++]=oy,o_[og++]=ob,o_[og++]=ov,oy=t.id,ob=t.overflow,ov=e),e=aD(e,i.children),e.flags|=4096,e)}(t,e,s,o,i,r,n);if(a){a=o.fallback,s=e.mode,i=(r=t.child).sibling;var l={mode:"hidden",children:o.children};return 0==(1&s)&&e.child!==r?((o=e.child).childLanes=0,o.pendingProps=l,e.deletions=null):(o=le(r,l)).subtreeFlags=14680064&r.subtreeFlags,null!==i?a=le(i,a):(a=li(a,s,n,null),a.flags|=2),a.return=e,o.return=e,o.sibling=a,e.child=o,o=a,a=e.child,s=null===(s=t.child.memoizedState)?aA(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=aN,o}return t=(a=t.child).sibling,o=le(a,{mode:"visible",children:o.children}),0==(1&e.mode)&&(o.lanes=n),o.return=e,o.sibling=null,null!==t&&(null===(n=e.deletions)?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=o,e.memoizedState=null,o}function aD(t,e){return(e=lo({mode:"visible",children:e},t.mode,0,null)).return=t,t.child=e}function aB(t,e,n,i){return null!==i&&oD(i),ru(e,t.child,null,n),t=aD(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aZ(t,e,n){t.lanes|=e;var i=t.alternate;null!==i&&(i.lanes|=e),oG(t.return,e,n)}function aF(t,e,n,i,o){var r=t.memoizedState;null===r?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=o)}function aj(t,e,n){var i=e.pendingProps,o=i.revealOrder,r=i.tail;if(ak(t,e,i.children,n),0!=(2&(i=rb.current)))i=1&i|2,e.flags|=128;else{if(null!==t&&0!=(128&t.flags))t:for(t=e.child;null!==t;){if(13===t.tag)null!==t.memoizedState&&aZ(t,n,e);else if(19===t.tag)aZ(t,n,e);else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(i8(rb,i),0==(1&e.mode))e.memoizedState=null;else switch(o){case"forwards":for(o=null,n=e.child;null!==n;)null!==(t=n.alternate)&&null===rw(t)&&(o=n),n=n.sibling;null===(n=o)?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),aF(e,!1,o,n,r);break;case"backwards":for(n=null,o=e.child,e.child=null;null!==o;){if(null!==(t=o.alternate)&&null===rw(t)){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}aF(e,!0,n,null,r);break;case"together":aF(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function aU(t,e){0==(1&e.mode)&&null!==t&&(t.alternate=null,e.alternate=null,e.flags|=2)}function aH(t,e,n){if(null!==t&&(e.dependencies=t.dependencies),sg|=e.lanes,0==(n&e.childLanes))return null;if(null!==t&&e.child!==t.child)throw Error(d(153));if(null!==e.child){for(n=le(t=e.child,t.pendingProps),e.child=n,n.return=e;null!==t.sibling;)t=t.sibling,(n=n.sibling=le(t,t.pendingProps)).return=e;n.sibling=null}return e.child}function aW(t,e){if(!oT)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;null!==e;)null!==e.alternate&&(n=e),e=e.sibling;null===n?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;null!==n;)null!==n.alternate&&(i=n),n=n.sibling;null===i?e||null===t.tail?t.tail=null:t.tail.sibling=null:i.sibling=null}}function aV(t){var e=null!==t.alternate&&t.alternate.child===t.child,n=0,i=0;if(e)for(var o=t.child;null!==o;)n|=o.lanes|o.childLanes,i|=14680064&o.subtreeFlags,i|=14680064&o.flags,o.return=t,o=o.sibling;else for(o=t.child;null!==o;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}o=function(t,e){for(var n=e.child;null!==n;){if(5===n.tag||6===n.tag)t.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},r=function(){},s=function(t,e,n,i){var o=t.memoizedProps;if(o!==i){t=e.stateNode,rm(rd.current);var r,a=null;switch(n){case"input":o=td(t,o),i=td(t,i),a=[];break;case"select":o=ti({},o,{value:void 0}),i=ti({},i,{value:void 0}),a=[];break;case"textarea":o=tb(t,o),i=tb(t,i),a=[];break;default:"function"!=typeof o.onClick&&"function"==typeof i.onClick&&(t.onclick=iO)}for(u in tA(n,i),n=null,o)if(!i.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u]){if("style"===u){var s=o[u];for(r in s)s.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null))}for(u in i){var l=i[u];if(s=null!=o?o[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s)){if("style"===u){if(s){for(r in s)!s.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in l)l.hasOwnProperty(r)&&s[r]!==l[r]&&(n||(n={}),n[r]=l[r])}else n||(a||(a=[]),a.push(u,n)),n=l}else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(p.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&iv("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}},l=function(t,e,n,i){n!==i&&(e.flags|=4)};var aG=!1,a$=!1,aq="function"==typeof WeakSet?WeakSet:Set,aK=null;function aQ(t,e){var n=t.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){s3(t,e,n)}else n.current=null}}function aY(t,e,n){try{n()}catch(n){s3(t,e,n)}}var aX=!1;function aJ(t,e,n){var i=e.updateQueue;if(null!==(i=null!==i?i.lastEffect:null)){var o=i=i.next;do{if((o.tag&t)===t){var r=o.destroy;o.destroy=void 0,void 0!==r&&aY(e,n,r)}o=o.next}while(o!==i)}}function a0(t,e){if(null!==(e=null!==(e=e.updateQueue)?e.lastEffect:null)){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function a1(t){var e=t.ref;if(null!==e){var n=t.stateNode;t.tag,t=n,"function"==typeof e?e(t):e.current=t}}function a2(t){return 5===t.tag||3===t.tag||4===t.tag}function a3(t){t:for(;;){for(;null===t.sibling;){if(null===t.return||a2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;5!==t.tag&&6!==t.tag&&18!==t.tag;){if(2&t.flags||null===t.child||4===t.tag)continue t;t.child.return=t,t=t.child}if(!(2&t.flags))return t.stateNode}}var a4=null,a8=!1;function a5(t,e,n){for(n=n.child;null!==n;)a6(t,e,n),n=n.sibling}function a6(t,e,n){if(eh&&"function"==typeof eh.onCommitFiberUnmount)try{eh.onCommitFiberUnmount(ec,n)}catch(t){}switch(n.tag){case 5:a$||aQ(n,e);case 6:var i=a4,o=a8;a4=null,a5(t,e,n),a4=i,a8=o,null!==a4&&(a8?(t=a4,n=n.stateNode,8===t.nodeType?t.parentNode.removeChild(n):t.removeChild(n)):a4.removeChild(n.stateNode));break;case 18:null!==a4&&(a8?(t=a4,n=n.stateNode,8===t.nodeType?ij(t.parentNode,n):1===t.nodeType&&ij(t,n),e$(t)):ij(a4,n.stateNode));break;case 4:i=a4,o=a8,a4=n.stateNode.containerInfo,a8=!0,a5(t,e,n),a4=i,a8=o;break;case 0:case 11:case 14:case 15:if(!a$&&null!==(i=n.updateQueue)&&null!==(i=i.lastEffect)){o=i=i.next;do{var r=o,a=r.destroy;r=r.tag,void 0!==a&&(0!=(2&r)?aY(n,e,a):0!=(4&r)&&aY(n,e,a)),o=o.next}while(o!==i)}a5(t,e,n);break;case 1:if(!a$&&(aQ(n,e),"function"==typeof(i=n.stateNode).componentWillUnmount))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(t){s3(n,e,t)}a5(t,e,n);break;case 21:default:a5(t,e,n);break;case 22:1&n.mode?(a$=(i=a$)||null!==n.memoizedState,a5(t,e,n),a$=i):a5(t,e,n)}}function a9(t){var e=t.updateQueue;if(null!==e){t.updateQueue=null;var n=t.stateNode;null===n&&(n=t.stateNode=new aq),e.forEach(function(e){var i=s6.bind(null,t,e);n.has(e)||(n.add(e),e.then(i,i))})}}function a7(t,e){var n=e.deletions;if(null!==n)for(var i=0;i<n.length;i++){var o=n[i];try{var r=e,a=r;t:for(;null!==a;){switch(a.tag){case 5:a4=a.stateNode,a8=!1;break t;case 3:case 4:a4=a.stateNode.containerInfo,a8=!0;break t}a=a.return}if(null===a4)throw Error(d(160));a6(t,r,o),a4=null,a8=!1;var s=o.alternate;null!==s&&(s.return=null),o.return=null}catch(t){s3(o,e,t)}}if(12854&e.subtreeFlags)for(e=e.child;null!==e;)st(e,t),e=e.sibling}function st(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(a7(e,t),se(t),4&i){try{aJ(3,t,t.return),a0(3,t)}catch(e){s3(t,t.return,e)}try{aJ(5,t,t.return)}catch(e){s3(t,t.return,e)}}break;case 1:a7(e,t),se(t),512&i&&null!==n&&aQ(n,n.return);break;case 5:if(a7(e,t),se(t),512&i&&null!==n&&aQ(n,n.return),32&t.flags){var o=t.stateNode;try{tC(o,"")}catch(e){s3(t,t.return,e)}}if(4&i&&null!=(o=t.stateNode)){var r=t.memoizedProps,a=null!==n?n.memoizedProps:r,s=t.type,l=t.updateQueue;if(t.updateQueue=null,null!==l)try{"input"===s&&"radio"===r.type&&null!=r.name&&tp(o,r),tR(s,a);var u=tR(s,r);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];"style"===c?tI(o,h):"dangerouslySetInnerHTML"===c?tE(o,h):"children"===c?tC(o,h):T(o,c,h,u)}switch(s){case"input":tm(o,r);break;case"textarea":tx(o,r);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!r.multiple;var p=r.value;null!=p?ty(o,!!r.multiple,p,!1):!!r.multiple!==f&&(null!=r.defaultValue?ty(o,!!r.multiple,r.defaultValue,!0):ty(o,!!r.multiple,r.multiple?[]:"",!1))}o[iG]=r}catch(e){s3(t,t.return,e)}}break;case 6:if(a7(e,t),se(t),4&i){if(null===t.stateNode)throw Error(d(162));o=t.stateNode,r=t.memoizedProps;try{o.nodeValue=r}catch(e){s3(t,t.return,e)}}break;case 3:if(a7(e,t),se(t),4&i&&null!==n&&n.memoizedState.isDehydrated)try{e$(e.containerInfo)}catch(e){s3(t,t.return,e)}break;case 4:default:a7(e,t),se(t);break;case 13:a7(e,t),se(t),8192&(o=t.child).flags&&(r=null!==o.memoizedState,o.stateNode.isHidden=r,r&&(null===o.alternate||null===o.alternate.memoizedState)&&(sx=ei())),4&i&&a9(t);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&t.mode?(a$=(u=a$)||c,a7(e,t),a$=u):a7(e,t),se(t),8192&i){if(u=null!==t.memoizedState,(t.stateNode.isHidden=u)&&!c&&0!=(1&t.mode))for(aK=t,c=t.child;null!==c;){for(h=aK=c;null!==aK;){switch(p=(f=aK).child,f.tag){case 0:case 11:case 14:case 15:aJ(4,f,f.return);break;case 1:aQ(f,f.return);var m=f.stateNode;if("function"==typeof m.componentWillUnmount){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(t){s3(i,n,t)}}break;case 5:aQ(f,f.return);break;case 22:if(null!==f.memoizedState){si(h);continue}}null!==p?(p.return=f,aK=p):si(h)}c=c.sibling}t:for(c=null,h=t;;){if(5===h.tag){if(null===c){c=h;try{o=h.stateNode,u?(r=o.style,"function"==typeof r.setProperty?r.setProperty("display","none","important"):r.display="none"):(s=h.stateNode,a=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=tO("display",a))}catch(e){s3(t,t.return,e)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(e){s3(t,t.return,e)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===t)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===t)break;for(;null===h.sibling;){if(null===h.return||h.return===t)break t;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:a7(e,t),se(t),4&i&&a9(t);case 21:}}function se(t){var e=t.flags;if(2&e){try{t:{for(var n=t.return;null!==n;){if(a2(n)){var i=n;break t}n=n.return}throw Error(d(160))}switch(i.tag){case 5:var o=i.stateNode;32&i.flags&&(tC(o,""),i.flags&=-33);var r=a3(t);!function t(e,n,i){var o=e.tag;if(5===o||6===o)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(4!==o&&null!==(e=e.child))for(t(e,n,i),e=e.sibling;null!==e;)t(e,n,i),e=e.sibling}(t,r,o);break;case 3:case 4:var a=i.stateNode.containerInfo,s=a3(t);!function t(e,n,i){var o=e.tag;if(5===o||6===o)e=e.stateNode,n?8===i.nodeType?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(8===i.nodeType?(n=i.parentNode).insertBefore(e,i):(n=i).appendChild(e),null!=(i=i._reactRootContainer)||null!==n.onclick||(n.onclick=iO));else if(4!==o&&null!==(e=e.child))for(t(e,n,i),e=e.sibling;null!==e;)t(e,n,i),e=e.sibling}(t,s,a);break;default:throw Error(d(161))}}catch(e){s3(t,t.return,e)}t.flags&=-3}4096&e&&(t.flags&=-4097)}function sn(t){for(;null!==aK;){var e=aK;if(0!=(8772&e.flags)){var n=e.alternate;try{if(0!=(8772&e.flags))switch(e.tag){case 0:case 11:case 15:a$||a0(5,e);break;case 1:var i=e.stateNode;if(4&e.flags&&!a$){if(null===n)i.componentDidMount();else{var o=e.elementType===e.type?n.memoizedProps:oZ(e.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var r=e.updateQueue;null!==r&&o6(e,r,i);break;case 3:var a=e.updateQueue;if(null!==a){if(n=null,null!==e.child)switch(e.child.tag){case 5:case 1:n=e.child.stateNode}o6(e,a,n)}break;case 5:var s=e.stateNode;if(null===n&&4&e.flags){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===e.memoizedState){var u=e.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&e$(h)}}}break;default:throw Error(d(163))}a$||512&e.flags&&a1(e)}catch(t){s3(e,e.return,t)}}if(e===t){aK=null;break}if(null!==(n=e.sibling)){n.return=e.return,aK=n;break}aK=e.return}}function si(t){for(;null!==aK;){var e=aK;if(e===t){aK=null;break}var n=e.sibling;if(null!==n){n.return=e.return,aK=n;break}aK=e.return}}function so(t){for(;null!==aK;){var e=aK;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{a0(4,e)}catch(t){s3(e,n,t)}break;case 1:var i=e.stateNode;if("function"==typeof i.componentDidMount){var o=e.return;try{i.componentDidMount()}catch(t){s3(e,o,t)}}var r=e.return;try{a1(e)}catch(t){s3(e,r,t)}break;case 5:var a=e.return;try{a1(e)}catch(t){s3(e,a,t)}}}catch(t){s3(e,e.return,t)}if(e===t){aK=null;break}var s=e.sibling;if(null!==s){s.return=e.return,aK=s;break}aK=e.return}}var sr=Math.ceil,sa=E.ReactCurrentDispatcher,ss=E.ReactCurrentOwner,sl=E.ReactCurrentBatchConfig,su=0,sc=null,sh=null,sd=0,sf=0,sp=i3(0),sm=0,s_=null,sg=0,sv=0,sy=0,sb=null,sw=null,sx=0,sk=1/0,sS=null,sP=!1,sL=null,sT=null,sE=!1,sC=null,sz=0,sM=0,sO=null,sI=-1,sN=0;function sA(){return 0!=(6&su)?ei():-1!==sI?sI:sI=ei()}function sR(t){return 0==(1&t.mode)?1:0!=(2&su)&&0!==sd?sd&-sd:null!==oB.transition?(0===sN&&(sN=eb()),sN):0!==(t=eS)?t:t=void 0===(t=window.event)?16:e1(t.type)}function sD(t,e,n,i){if(50<sM)throw sM=0,sO=null,Error(d(185));ex(t,n,i),(0==(2&su)||t!==sc)&&(t===sc&&(0==(2&su)&&(sv|=n),4===sm&&sU(t,sd)),sB(t,i),1===n&&0===su&&0==(1&e.mode)&&(sk=ei()+500,ol&&oh()))}function sB(t,e){var n,i,o,r=t.callbackNode;!function(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,o=t.expirationTimes,r=t.pendingLanes;0<r;){var a=31-ed(r),s=1<<a,l=o[a];-1===l?(0==(s&n)||0!=(s&i))&&(o[a]=function(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;default:return -1}}(s,e)):l<=e&&(t.expiredLanes|=s),r&=~s}}(t,e);var a=ev(t,t===sc?sd:0);if(0===a)null!==r&&et(r),t.callbackNode=null,t.callbackPriority=0;else if(e=a&-a,t.callbackPriority!==e){if(null!=r&&et(r),1===e)0===t.tag?(o=sH.bind(null,t),ol=!0,oc(o)):oc(sH.bind(null,t)),iZ(function(){0==(6&su)&&oh()}),r=null;else{switch(eP(a)){case 1:r=er;break;case 4:r=ea;break;case 16:default:r=es;break;case 536870912:r=eu}r=t7(r,sZ.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function sZ(t,e){if(sI=-1,sN=0,0!=(6&su))throw Error(d(327));var n=t.callbackNode;if(s1()&&t.callbackNode!==n)return null;var i=ev(t,t===sc?sd:0);if(0===i)return null;if(0!=(30&i)||0!=(i&t.expiredLanes)||e)e=sY(t,i);else{e=i;var o=su;su|=2;var r=sK();for((sc!==t||sd!==e)&&(sS=null,sk=ei()+500,s$(t,e));;)try{(function(){for(;null!==sh&&!ee();)sX(sh)})();break}catch(e){sq(t,e)}oW(),sa.current=r,su=o,null!==sh?e=0:(sc=null,sd=0,e=sm)}if(0!==e){if(2===e&&0!==(o=ey(t))&&(i=o,e=sF(t,o)),1===e)throw n=s_,s$(t,0),sU(t,i),sB(t,ei()),n;if(6===e)sU(t,i);else{if(o=t.current.alternate,0==(30&i)&&!function(t){for(var e=t;;){if(16384&e.flags){var n=e.updateQueue;if(null!==n&&null!==(n=n.stores))for(var i=0;i<n.length;i++){var o=n[i],r=o.getSnapshot;o=o.value;try{if(!nQ(r(),o))return!1}catch(t){return!1}}}if(n=e.child,16384&e.subtreeFlags&&null!==n)n.return=e,e=n;else{if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}(o)&&(2===(e=sY(t,i))&&0!==(r=ey(t))&&(i=r,e=sF(t,r)),1===e))throw n=s_,s$(t,0),sU(t,i),sB(t,ei()),n;switch(t.finishedWork=o,t.finishedLanes=i,e){case 0:case 1:throw Error(d(345));case 2:case 5:s0(t,sw,sS);break;case 3:if(sU(t,i),(130023424&i)===i&&10<(e=sx+500-ei())){if(0!==ev(t,0))break;if(((o=t.suspendedLanes)&i)!==i){sA(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=iR(s0.bind(null,t,sw,sS),e);break}s0(t,sw,sS);break;case 4:if(sU(t,i),(4194240&i)===i)break;for(o=-1,e=t.eventTimes;0<i;){var a=31-ed(i);r=1<<a,(a=e[a])>o&&(o=a),i&=~r}if(i=o,10<(i=(120>(i=ei()-i)?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sr(i/1960))-i)){t.timeoutHandle=iR(s0.bind(null,t,sw,sS),i);break}s0(t,sw,sS);break;default:throw Error(d(329))}}}return sB(t,ei()),t.callbackNode===n?sZ.bind(null,t):null}function sF(t,e){var n=sb;return t.current.memoizedState.isDehydrated&&(s$(t,e).flags|=256),2!==(t=sY(t,e))&&(e=sw,sw=n,null!==e&&sj(e)),t}function sj(t){null===sw?sw=t:sw.push.apply(sw,t)}function sU(t,e){for(e&=~sy,e&=~sv,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ed(e),i=1<<n;t[n]=-1,e&=~i}}function sH(t){if(0!=(6&su))throw Error(d(327));s1();var e=ev(t,0);if(0==(1&e))return sB(t,ei()),null;var n=sY(t,e);if(0!==t.tag&&2===n){var i=ey(t);0!==i&&(e=i,n=sF(t,i))}if(1===n)throw n=s_,s$(t,0),sU(t,e),sB(t,ei()),n;if(6===n)throw Error(d(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,s0(t,sw,sS),sB(t,ei()),null}function sW(t,e){var n=su;su|=1;try{return t(e)}finally{0===(su=n)&&(sk=ei()+500,ol&&oh())}}function sV(t){null!==sC&&0===sC.tag&&0==(6&su)&&s1();var e=su;su|=1;var n=sl.transition,i=eS;try{if(sl.transition=null,eS=1,t)return t()}finally{eS=i,sl.transition=n,0==(6&(su=e))&&oh()}}function sG(){sf=sp.current,i4(sp)}function s$(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(-1!==n&&(t.timeoutHandle=-1,iD(n)),null!==sh)for(n=sh.return;null!==n;){var i=n;switch(oS(i),i.tag){case 1:null!=(i=i.type.childContextTypes)&&on();break;case 3:rg(),i4(i9),i4(i6),rk();break;case 5:ry(i);break;case 4:rg();break;case 13:case 19:i4(rb);break;case 10:oV(i.type._context);break;case 22:case 23:sG()}n=n.return}if(sc=t,sh=t=le(t.current,null),sd=sf=e,sm=0,s_=null,sy=sv=sg=0,sw=sb=null,null!==oK){for(e=0;e<oK.length;e++)if(null!==(i=(n=oK[e]).interleaved)){n.interleaved=null;var o=i.next,r=n.pending;if(null!==r){var a=r.next;r.next=o,i.next=a}n.pending=i}oK=null}return t}function sq(t,e){for(;;){var n=sh;try{if(oW(),rS.current=al,rz){for(var i=rT.memoizedState;null!==i;){var o=i.queue;null!==o&&(o.pending=null),i=i.next}rz=!1}if(rL=0,rC=rE=rT=null,rM=!1,rO=0,ss.current=null,null===n||null===n.return){sm=1,s_=e,sh=null;break}t:{var r=t,a=n.return,s=n,l=e;if(e=sd,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,h=c.tag;if(0==(1&c.mode)&&(0===h||11===h||15===h)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=ay(a);if(null!==p){p.flags&=-257,ab(p,a,s,r,e),1&p.mode&&av(r,u,e),e=p,l=u;var m=e.updateQueue;if(null===m){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break t}if(0==(1&e)){av(r,u,e),sQ();break t}l=Error(d(426))}else if(oT&&1&s.mode){var g=ay(a);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),ab(g,a,s,r,e),oD(ad(l,s));break t}}r=l=ad(l,s),4!==sm&&(sm=2),null===sb?sb=[r]:sb.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var v=a_(r,l,e);o8(r,v);break t;case 1:s=l;var y=r.type,b=r.stateNode;if(0==(128&r.flags)&&("function"==typeof y.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===sT||!sT.has(b)))){r.flags|=65536,e&=-e,r.lanes|=e;var w=ag(r,s,e);o8(r,w);break t}}r=r.return}while(null!==r)}sJ(n)}catch(t){e=t,sh===n&&null!==n&&(sh=n=n.return);continue}break}}function sK(){var t=sa.current;return sa.current=al,null===t?al:t}function sQ(){(0===sm||3===sm||2===sm)&&(sm=4),null===sc||0==(268435455&sg)&&0==(268435455&sv)||sU(sc,sd)}function sY(t,e){var n=su;su|=2;var i=sK();for((sc!==t||sd!==e)&&(sS=null,s$(t,e));;)try{(function(){for(;null!==sh;)sX(sh)})();break}catch(e){sq(t,e)}if(oW(),su=n,sa.current=i,null!==sh)throw Error(d(261));return sc=null,sd=0,sm}function sX(t){var e=u(t.alternate,t,sf);t.memoizedProps=t.pendingProps,null===e?sJ(t):sh=e,ss.current=null}function sJ(t){var e=t;do{var n=e.alternate;if(t=e.return,0==(32768&e.flags)){if(null!==(n=function(t,e,n){var i=e.pendingProps;switch(oS(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return aV(e),null;case 1:case 17:return oe(e.type)&&on(),aV(e),null;case 3:return i=e.stateNode,rg(),i4(i9),i4(i6),rk(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(null===t||null===t.child)&&(oN(e)?e.flags|=4:null===t||t.memoizedState.isDehydrated&&0==(256&e.flags)||(e.flags|=1024,null!==oE&&(sj(oE),oE=null))),r(t,e),aV(e),null;case 5:ry(e);var a=rm(rp.current);if(n=e.type,null!==t&&null!=e.stateNode)s(t,e,n,i,a),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(null===e.stateNode)throw Error(d(166));return aV(e),null}if(t=rm(rd.current),oN(e)){i=e.stateNode,n=e.type;var u=e.memoizedProps;switch(i[iV]=e,i[iG]=u,t=0!=(1&e.mode),n){case"dialog":iv("cancel",i),iv("close",i);break;case"iframe":case"object":case"embed":iv("load",i);break;case"video":case"audio":for(a=0;a<ip.length;a++)iv(ip[a],i);break;case"source":iv("error",i);break;case"img":case"image":case"link":iv("error",i),iv("load",i);break;case"details":iv("toggle",i);break;case"input":tf(i,u),iv("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},iv("invalid",i);break;case"textarea":tw(i,u),iv("invalid",i)}for(var c in tA(n,u),a=null,u)if(u.hasOwnProperty(c)){var h=u[c];"children"===c?"string"==typeof h?i.textContent!==h&&(!0!==u.suppressHydrationWarning&&iM(i.textContent,h,t),a=["children",h]):"number"==typeof h&&i.textContent!==""+h&&(!0!==u.suppressHydrationWarning&&iM(i.textContent,h,t),a=["children",""+h]):p.hasOwnProperty(c)&&null!=h&&"onScroll"===c&&iv("scroll",i)}switch(n){case"input":tu(i),t_(i,u,!0);break;case"textarea":tu(i),tk(i);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(i.onclick=iO)}i=a,e.updateQueue=i,null!==i&&(e.flags|=4)}else{c=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===t&&(t=tS(n)),"http://www.w3.org/1999/xhtml"===t?"script"===n?((t=c.createElement("div")).innerHTML="<script></script>",t=t.removeChild(t.firstChild)):"string"==typeof i.is?t=c.createElement(n,{is:i.is}):(t=c.createElement(n),"select"===n&&(c=t,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):t=c.createElementNS(t,n),t[iV]=e,t[iG]=i,o(t,e,!1,!1),e.stateNode=t;t:{switch(c=tR(n,i),n){case"dialog":iv("cancel",t),iv("close",t),a=i;break;case"iframe":case"object":case"embed":iv("load",t),a=i;break;case"video":case"audio":for(a=0;a<ip.length;a++)iv(ip[a],t);a=i;break;case"source":iv("error",t),a=i;break;case"img":case"image":case"link":iv("error",t),iv("load",t),a=i;break;case"details":iv("toggle",t),a=i;break;case"input":tf(t,i),a=td(t,i),iv("invalid",t);break;case"option":default:a=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},a=ti({},i,{value:void 0}),iv("invalid",t);break;case"textarea":tw(t,i),a=tb(t,i),iv("invalid",t)}for(u in tA(n,a),h=a)if(h.hasOwnProperty(u)){var f=h[u];"style"===u?tI(t,f):"dangerouslySetInnerHTML"===u?null!=(f=f?f.__html:void 0)&&tE(t,f):"children"===u?"string"==typeof f?("textarea"!==n||""!==f)&&tC(t,f):"number"==typeof f&&tC(t,""+f):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?null!=f&&"onScroll"===u&&iv("scroll",t):null!=f&&T(t,u,f,c))}switch(n){case"input":tu(t),t_(t,i,!1);break;case"textarea":tu(t),tk(t);break;case"option":null!=i.value&&t.setAttribute("value",""+ts(i.value));break;case"select":t.multiple=!!i.multiple,null!=(u=i.value)?ty(t,!!i.multiple,u,!1):null!=i.defaultValue&&ty(t,!!i.multiple,i.defaultValue,!0);break;default:"function"==typeof a.onClick&&(t.onclick=iO)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}}i&&(e.flags|=4)}null!==e.ref&&(e.flags|=512,e.flags|=2097152)}return aV(e),null;case 6:if(t&&null!=e.stateNode)l(t,e,t.memoizedProps,i);else{if("string"!=typeof i&&null===e.stateNode)throw Error(d(166));if(n=rm(rp.current),rm(rd.current),oN(e)){if(i=e.stateNode,n=e.memoizedProps,i[iV]=e,(u=i.nodeValue!==n)&&null!==(t=oP))switch(t.tag){case 3:iM(i.nodeValue,n,0!=(1&t.mode));break;case 5:!0!==t.memoizedProps.suppressHydrationWarning&&iM(i.nodeValue,n,0!=(1&t.mode))}u&&(e.flags|=4)}else(i=(9===n.nodeType?n:n.ownerDocument).createTextNode(i))[iV]=e,e.stateNode=i}return aV(e),null;case 13:if(i4(rb),i=e.memoizedState,null===t||null!==t.memoizedState&&null!==t.memoizedState.dehydrated){if(oT&&null!==oL&&0!=(1&e.mode)&&0==(128&e.flags))oA(),oR(),e.flags|=98560,u=!1;else if(u=oN(e),null!==i&&null!==i.dehydrated){if(null===t){if(!u)throw Error(d(318));if(!(u=null!==(u=e.memoizedState)?u.dehydrated:null))throw Error(d(317));u[iV]=e}else oR(),0==(128&e.flags)&&(e.memoizedState=null),e.flags|=4;aV(e),u=!1}else null!==oE&&(sj(oE),oE=null),u=!0;if(!u)return 65536&e.flags?e:null}if(0!=(128&e.flags))return e.lanes=n,e;return(i=null!==i)!=(null!==t&&null!==t.memoizedState)&&i&&(e.child.flags|=8192,0!=(1&e.mode)&&(null===t||0!=(1&rb.current)?0===sm&&(sm=3):sQ())),null!==e.updateQueue&&(e.flags|=4),aV(e),null;case 4:return rg(),r(t,e),null===t&&iw(e.stateNode.containerInfo),aV(e),null;case 10:return oV(e.type._context),aV(e),null;case 19:if(i4(rb),null===(u=e.memoizedState))return aV(e),null;if(i=0!=(128&e.flags),null===(c=u.rendering)){if(i)aW(u,!1);else{if(0!==sm||null!==t&&0!=(128&t.flags))for(t=e.child;null!==t;){if(null!==(c=rw(t))){for(e.flags|=128,aW(u,!1),null!==(i=c.updateQueue)&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;null!==n;)u=n,t=i,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=t,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,t=c.dependencies,u.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return i8(rb,1&rb.current|2),e.child}t=t.sibling}null!==u.tail&&ei()>sk&&(e.flags|=128,i=!0,aW(u,!1),e.lanes=4194304)}}else{if(!i){if(null!==(t=rw(c))){if(e.flags|=128,i=!0,null!==(n=t.updateQueue)&&(e.updateQueue=n,e.flags|=4),aW(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!oT)return aV(e),null}else 2*ei()-u.renderingStartTime>sk&&1073741824!==n&&(e.flags|=128,i=!0,aW(u,!1),e.lanes=4194304)}u.isBackwards?(c.sibling=e.child,e.child=c):(null!==(n=u.last)?n.sibling=c:e.child=c,u.last=c)}if(null!==u.tail)return e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=ei(),e.sibling=null,n=rb.current,i8(rb,i?1&n|2:1&n),e;return aV(e),null;case 22:case 23:return sG(),i=null!==e.memoizedState,null!==t&&null!==t.memoizedState!==i&&(e.flags|=8192),i&&0!=(1&e.mode)?0!=(1073741824&sf)&&(aV(e),6&e.subtreeFlags&&(e.flags|=8192)):aV(e),null;case 24:case 25:return null}throw Error(d(156,e.tag))}(n,e,sf))){sh=n;return}}else{if(null!==(n=function(t,e){switch(oS(e),e.tag){case 1:return oe(e.type)&&on(),65536&(t=e.flags)?(e.flags=-65537&t|128,e):null;case 3:return rg(),i4(i9),i4(i6),rk(),0!=(65536&(t=e.flags))&&0==(128&t)?(e.flags=-65537&t|128,e):null;case 5:return ry(e),null;case 13:if(i4(rb),null!==(t=e.memoizedState)&&null!==t.dehydrated){if(null===e.alternate)throw Error(d(340));oR()}return 65536&(t=e.flags)?(e.flags=-65537&t|128,e):null;case 19:return i4(rb),null;case 4:return rg(),null;case 10:return oV(e.type._context),null;case 22:case 23:return sG(),null;default:return null}}(n,e))){n.flags&=32767,sh=n;return}if(null!==t)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{sm=6,sh=null;return}}if(null!==(e=e.sibling)){sh=e;return}sh=e=t}while(null!==e)0===sm&&(sm=5)}function s0(t,e,n){var i=eS,o=sl.transition;try{sl.transition=null,eS=1,function(t,e,n,i){do s1();while(null!==sC)if(0!=(6&su))throw Error(d(327));n=t.finishedWork;var o=t.finishedLanes;if(null!==n){if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(d(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(function(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var o=31-ed(n),r=1<<o;e[o]=0,i[o]=-1,t[o]=-1,n&=~r}}(t,r),t===sc&&(sh=sc=null,sd=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||sE||(sE=!0,a=es,s=function(){return s1(),null},t7(a,s)),r=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||r){r=sl.transition,sl.transition=null;var a,s,l,u,c,h=eS;eS=1;var f=su;su|=4,ss.current=null,function(t,e){if(iI=eK,n1(t=n0())){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{var i=(n=(n=t.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(i&&0!==i.rangeCount){n=i.anchorNode;var o,r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch(t){n=null;break t}var s=0,l=-1,u=-1,c=0,h=0,f=t,p=null;e:for(;;){for(;f!==n||0!==r&&3!==f.nodeType||(l=s+r),f!==a||0!==i&&3!==f.nodeType||(u=s+i),3===f.nodeType&&(s+=f.nodeValue.length),null!==(o=f.firstChild);)p=f,f=o;for(;;){if(f===t)break e;if(p===n&&++c===r&&(l=s),p===a&&++h===i&&(u=s),null!==(o=f.nextSibling))break;p=(f=p).parentNode}f=o}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(iN={focusedElem:t,selectionRange:n},eK=!1,aK=e;null!==aK;)if(t=(e=aK).child,0!=(1028&e.subtreeFlags)&&null!==t)t.return=e,aK=t;else for(;null!==aK;){e=aK;try{var m=e.alternate;if(0!=(1024&e.flags))switch(e.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var _=m.memoizedProps,g=m.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:oZ(e.type,_),g);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=e.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(d(163))}}catch(t){s3(e,e.return,t)}if(null!==(t=e.sibling)){t.return=e.return,aK=t;break}aK=e.return}m=aX,aX=!1}(t,n),st(n,t),function(t){var e=n0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&function t(e,n){return!!e&&!!n&&(e===n||(!e||3!==e.nodeType)&&(n&&3===n.nodeType?t(e,n.parentNode):"contains"in e?e.contains(n):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==i&&n1(n)){if(e=i.start,void 0===(t=i.end)&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if((t=(e=n.ownerDocument||document)&&e.defaultView||window).getSelection){t=t.getSelection();var o=n.textContent.length,r=Math.min(i.start,o);i=void 0===i.end?r:Math.min(i.end,o),!t.extend&&r>i&&(o=i,i=r,r=o),o=nJ(n,r);var a=nJ(n,i);o&&a&&(1!==t.rangeCount||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&((e=e.createRange()).setStart(o.node,o.offset),t.removeAllRanges(),r>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)1===t.nodeType&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<e.length;n++)(t=e[n]).element.scrollLeft=t.left,t.element.scrollTop=t.top}}(iN),eK=!!iI,iN=iI=null,t.current=n,l=n,u=t,c=o,aK=l,function t(e,n,i){for(var o=0!=(1&e.mode);null!==aK;){var r=aK,a=r.child;if(22===r.tag&&o){var s=null!==r.memoizedState||aG;if(!s){var l=r.alternate,u=null!==l&&null!==l.memoizedState||a$;l=aG;var c=a$;if(aG=s,(a$=u)&&!c)for(aK=r;null!==aK;)u=(s=aK).child,22===s.tag&&null!==s.memoizedState?so(r):null!==u?(u.return=s,aK=u):so(r);for(;null!==a;)aK=a,t(a,n,i),a=a.sibling;aK=r,aG=l,a$=c}sn(e,n,i)}else 0!=(8772&r.subtreeFlags)&&null!==a?(a.return=r,aK=a):sn(e,n,i)}}(l,u,c),en(),su=f,eS=h,sl.transition=r}else t.current=n;if(sE&&(sE=!1,sC=t,sz=o),0===(r=t.pendingLanes)&&(sT=null),function(t){if(eh&&"function"==typeof eh.onCommitFiberRoot)try{eh.onCommitFiberRoot(ec,t,void 0,128==(128&t.current.flags))}catch(t){}}(n.stateNode,i),sB(t,ei()),null!==e)for(i=t.onRecoverableError,n=0;n<e.length;n++)i((o=e[n]).value,{componentStack:o.stack,digest:o.digest});if(sP)throw sP=!1,t=sL,sL=null,t;0!=(1&sz)&&0!==t.tag&&s1(),0!=(1&(r=t.pendingLanes))?t===sO?sM++:(sM=0,sO=t):sM=0,oh()}}(t,e,n,i)}finally{sl.transition=o,eS=i}return null}function s1(){if(null!==sC){var t=eP(sz),e=sl.transition,n=eS;try{if(sl.transition=null,eS=16>t?16:t,null===sC)var i=!1;else{if(t=sC,sC=null,sz=0,0!=(6&su))throw Error(d(331));var o=su;for(su|=4,aK=t.current;null!==aK;){var r=aK,a=r.child;if(0!=(16&aK.flags)){var s=r.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(aK=u;null!==aK;){var c=aK;switch(c.tag){case 0:case 11:case 15:aJ(8,c,r)}var h=c.child;if(null!==h)h.return=c,aK=h;else for(;null!==aK;){var f=(c=aK).sibling,p=c.return;if(function t(e){var n=e.alternate;null!==n&&(e.alternate=null,t(n)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(n=e.stateNode)&&(delete n[iV],delete n[iG],delete n[iq],delete n[iK],delete n[iQ]),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}(c),c===u){aK=null;break}if(null!==f){f.return=p,aK=f;break}aK=p}}}var m=r.alternate;if(null!==m){var _=m.child;if(null!==_){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(null!==_)}}aK=r}}if(0!=(2064&r.subtreeFlags)&&null!==a)a.return=r,aK=a;else for(;null!==aK;){if(r=aK,0!=(2048&r.flags))switch(r.tag){case 0:case 11:case 15:aJ(9,r,r.return)}var v=r.sibling;if(null!==v){v.return=r.return,aK=v;break}aK=r.return}}var y=t.current;for(aK=y;null!==aK;){var b=(a=aK).child;if(0!=(2064&a.subtreeFlags)&&null!==b)b.return=a,aK=b;else for(a=y;null!==aK;){if(s=aK,0!=(2048&s.flags))try{switch(s.tag){case 0:case 11:case 15:a0(9,s)}}catch(t){s3(s,s.return,t)}if(s===a){aK=null;break}var w=s.sibling;if(null!==w){w.return=s.return,aK=w;break}aK=s.return}}if(su=o,oh(),eh&&"function"==typeof eh.onPostCommitFiberRoot)try{eh.onPostCommitFiberRoot(ec,t)}catch(t){}i=!0}return i}finally{eS=n,sl.transition=e}}return!1}function s2(t,e,n){e=a_(t,e=ad(n,e),1),t=o3(t,e,1),e=sA(),null!==t&&(ex(t,1,e),sB(t,e))}function s3(t,e,n){if(3===t.tag)s2(t,t,n);else for(;null!==e;){if(3===e.tag){s2(e,t,n);break}if(1===e.tag){var i=e.stateNode;if("function"==typeof e.type.getDerivedStateFromError||"function"==typeof i.componentDidCatch&&(null===sT||!sT.has(i))){t=ag(e,t=ad(n,t),1),e=o3(e,t,1),t=sA(),null!==e&&(ex(e,1,t),sB(e,t));break}}e=e.return}}function s4(t,e,n){var i=t.pingCache;null!==i&&i.delete(e),e=sA(),t.pingedLanes|=t.suspendedLanes&n,sc===t&&(sd&n)===n&&(4===sm||3===sm&&(130023424&sd)===sd&&500>ei()-sx?s$(t,0):sy|=n),sB(t,e)}function s8(t,e){0===e&&(0==(1&t.mode)?e=1:(e=e_,0==(130023424&(e_<<=1))&&(e_=4194304)));var n=sA();null!==(t=oX(t,e))&&(ex(t,e,n),sB(t,n))}function s5(t){var e=t.memoizedState,n=0;null!==e&&(n=e.retryLane),s8(t,n)}function s6(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,o=t.memoizedState;null!==o&&(n=o.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(d(314))}null!==i&&i.delete(e),s8(t,n)}function s9(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function s7(t,e,n,i){return new s9(t,e,n,i)}function lt(t){return!(!(t=t.prototype)||!t.isReactComponent)}function le(t,e){var n=t.alternate;return null===n?((n=s7(t.tag,e,t.key,t.mode)).elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&t.flags,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ln(t,e,n,i,o,r){var a=2;if(i=t,"function"==typeof t)lt(t)&&(a=1);else if("string"==typeof t)a=5;else t:switch(t){case M:return li(n.children,o,r,e);case O:a=8,o|=8;break;case I:return(t=s7(12,n,e,2|o)).elementType=I,t.lanes=r,t;case D:return(t=s7(13,n,e,o)).elementType=D,t.lanes=r,t;case B:return(t=s7(19,n,e,o)).elementType=B,t.lanes=r,t;case j:return lo(n,o,r,e);default:if("object"==typeof t&&null!==t)switch(t.$$typeof){case N:a=10;break t;case A:a=9;break t;case R:a=11;break t;case Z:a=14;break t;case F:a=16,i=null;break t}throw Error(d(130,null==t?t:typeof t,""))}return(e=s7(a,n,e,o)).elementType=t,e.type=i,e.lanes=r,e}function li(t,e,n,i){return(t=s7(7,t,i,e)).lanes=n,t}function lo(t,e,n,i){return(t=s7(22,t,i,e)).elementType=j,t.lanes=n,t.stateNode={isHidden:!1},t}function lr(t,e,n){return(t=s7(6,t,null,e)).lanes=n,t}function la(t,e,n){return(e=s7(4,null!==t.children?t.children:[],t.key,e)).lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ls(t,e,n,i,o){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ew(0),this.expirationTimes=ew(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ew(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ll(t,e,n,i,o,r,a,s,l){return t=new ls(t,e,n,s,l),1===e?(e=1,!0===r&&(e|=8)):e=0,r=s7(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},o0(r),t}function lu(t){if(!t)return i5;t=t._reactInternals;t:{if(t8(t)!==t||1!==t.tag)throw Error(d(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(oe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(null!==e)throw Error(d(171))}if(1===t.tag){var n=t.type;if(oe(n))return oo(t,n,e)}return e}function lc(t,e,n,i,o,r,a,s,l){return(t=ll(n,i,!0,t,o,r,a,s,l)).context=lu(null),n=t.current,(r=o2(i=sA(),o=sR(n))).callback=null!=e?e:null,o3(n,r,o),t.current.lanes=o,ex(t,o,i),sB(t,i),t}function lh(t,e,n,i){var o=e.current,r=sA(),a=sR(o);return n=lu(n),null===e.context?e.context=n:e.pendingContext=n,(e=o2(r,a)).payload={element:t},null!==(i=void 0===i?null:i)&&(e.callback=i),null!==(t=o3(o,e,a))&&(sD(t,o,a,r),o4(t,o,a)),a}function ld(t){return(t=t.current).child?(t.child.tag,t.child.stateNode):null}function lf(t,e){if(null!==(t=t.memoizedState)&&null!==t.dehydrated){var n=t.retryLane;t.retryLane=0!==n&&n<e?n:e}}function lp(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}u=function(t,e,n){if(null!==t){if(t.memoizedProps!==e.pendingProps||i9.current)ax=!0;else{if(0==(t.lanes&n)&&0==(128&e.flags))return ax=!1,function(t,e,n){switch(e.tag){case 3:aO(e),oR();break;case 5:rv(e);break;case 1:oe(e.type)&&or(e);break;case 4:r_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,o=e.memoizedProps.value;i8(oF,i._currentValue),i._currentValue=o;break;case 13:if(null!==(i=e.memoizedState)){if(null!==i.dehydrated)return i8(rb,1&rb.current),e.flags|=128,null;if(0!=(n&e.child.childLanes))return aR(t,e,n);return i8(rb,1&rb.current),null!==(t=aH(t,e,n))?t.sibling:null}i8(rb,1&rb.current);break;case 19:if(i=0!=(n&e.childLanes),0!=(128&t.flags)){if(i)return aj(t,e,n);e.flags|=128}if(null!==(o=e.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),i8(rb,rb.current),!i)return null;break;case 22:case 23:return e.lanes=0,aT(t,e,n)}return aH(t,e,n)}(t,e,n);ax=0!=(131072&t.flags)}}else ax=!1,oT&&0!=(1048576&e.flags)&&ox(e,om,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;aU(t,e),t=e.pendingProps;var o=ot(e,i6.current);o$(e,n),o=rR(null,e,i,t,o,n);var r=rD();return e.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof?(e.tag=1,e.memoizedState=null,e.updateQueue=null,oe(i)?(r=!0,or(e)):r=!1,e.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o0(e),o.updater=rt,e.stateNode=o,o._reactInternals=e,ro(e,i,t,n),e=aM(null,e,i,!0,r,n)):(e.tag=0,oT&&r&&ok(e),ak(null,e,o,n),e=e.child),e;case 16:i=e.elementType;t:{switch(aU(t,e),t=e.pendingProps,i=(o=i._init)(i._payload),e.type=i,o=e.tag=function(t){if("function"==typeof t)return lt(t)?1:0;if(null!=t){if((t=t.$$typeof)===R)return 11;if(t===Z)return 14}return 2}(i),t=oZ(i,t),o){case 0:e=aC(null,e,i,t,n);break t;case 1:e=az(null,e,i,t,n);break t;case 11:e=aS(null,e,i,t,n);break t;case 14:e=aP(null,e,i,oZ(i.type,t),n);break t}throw Error(d(306,i,""))}return e;case 0:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:oZ(i,o),aC(t,e,i,o,n);case 1:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:oZ(i,o),az(t,e,i,o,n);case 3:t:{if(aO(e),null===t)throw Error(d(387));i=e.pendingProps,o=(r=e.memoizedState).element,o1(t,e),o5(e,i,null,n);var a=e.memoizedState;if(i=a.element,r.isDehydrated){if(r={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=r,e.memoizedState=r,256&e.flags){o=ad(Error(d(423)),e),e=aI(t,e,i,n,o);break t}if(i!==o){o=ad(Error(d(424)),e),e=aI(t,e,i,n,o);break t}for(oL=iU(e.stateNode.containerInfo.firstChild),oP=e,oT=!0,oE=null,n=rc(e,null,i,n),e.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(oR(),i===o){e=aH(t,e,n);break t}ak(t,e,i,n)}e=e.child}return e;case 5:return rv(e),null===t&&oO(e),i=e.type,o=e.pendingProps,r=null!==t?t.memoizedProps:null,a=o.children,iA(i,o)?a=null:null!==r&&iA(i,r)&&(e.flags|=32),aE(t,e),ak(t,e,a,n),e.child;case 6:return null===t&&oO(e),null;case 13:return aR(t,e,n);case 4:return r_(e,e.stateNode.containerInfo),i=e.pendingProps,null===t?e.child=ru(e,null,i,n):ak(t,e,i,n),e.child;case 11:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:oZ(i,o),aS(t,e,i,o,n);case 7:return ak(t,e,e.pendingProps,n),e.child;case 8:case 12:return ak(t,e,e.pendingProps.children,n),e.child;case 10:t:{if(i=e.type._context,o=e.pendingProps,r=e.memoizedProps,a=o.value,i8(oF,i._currentValue),i._currentValue=a,null!==r){if(nQ(r.value,a)){if(r.children===o.children&&!i9.current){e=aH(t,e,n);break t}}else for(null!==(r=e.child)&&(r.return=e);null!==r;){var s=r.dependencies;if(null!==s){a=r.child;for(var l=s.firstContext;null!==l;){if(l.context===i){if(1===r.tag){(l=o2(-1,n&-n)).tag=2;var u=r.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}r.lanes|=n,null!==(l=r.alternate)&&(l.lanes|=n),oG(r.return,n,e),s.lanes|=n;break}l=l.next}}else if(10===r.tag)a=r.type===e.type?null:r.child;else if(18===r.tag){if(null===(a=r.return))throw Error(d(341));a.lanes|=n,null!==(s=a.alternate)&&(s.lanes|=n),oG(a,n,e),a=r.sibling}else a=r.child;if(null!==a)a.return=r;else for(a=r;null!==a;){if(a===e){a=null;break}if(null!==(r=a.sibling)){r.return=a.return,a=r;break}a=a.return}r=a}}ak(t,e,o.children,n),e=e.child}return e;case 9:return o=e.type,i=e.pendingProps.children,o$(e,n),i=i(o=oq(o)),e.flags|=1,ak(t,e,i,n),e.child;case 14:return o=oZ(i=e.type,e.pendingProps),o=oZ(i.type,o),aP(t,e,i,o,n);case 15:return aL(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,o=e.pendingProps,o=e.elementType===i?o:oZ(i,o),aU(t,e),e.tag=1,oe(i)?(t=!0,or(e)):t=!1,o$(e,n),rn(e,i,o),ro(e,i,o,n),aM(null,e,i,!0,t,n);case 19:return aj(t,e,n);case 22:return aT(t,e,n)}throw Error(d(156,e.tag))};var lm="function"==typeof reportError?reportError:function(t){console.error(t)};function l_(t){this._internalRoot=t}function lg(t){this._internalRoot=t}function lv(t){return!(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)}function ly(t){return!(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType&&(8!==t.nodeType||" react-mount-point-unstable "!==t.nodeValue))}function lb(){}function lw(t,e,n,i,o){var r=n._reactRootContainer;if(r){var a=r;if("function"==typeof o){var s=o;o=function(){var t=ld(a);s.call(t)}}lh(e,a,t,o)}else a=function(t,e,n,i,o){if(o){if("function"==typeof i){var r=i;i=function(){var t=ld(a);r.call(t)}}var a=lc(e,i,t,0,null,!1,!1,"",lb);return t._reactRootContainer=a,t[i$]=a.current,iw(8===t.nodeType?t.parentNode:t),sV(),a}for(;o=t.lastChild;)t.removeChild(o);if("function"==typeof i){var s=i;i=function(){var t=ld(l);s.call(t)}}var l=ll(t,0,!1,null,null,!1,!1,"",lb);return t._reactRootContainer=l,t[i$]=l.current,iw(8===t.nodeType?t.parentNode:t),sV(function(){lh(e,l,n,i)}),l}(n,e,t,o,i);return ld(a)}lg.prototype.render=l_.prototype.render=function(t){var e=this._internalRoot;if(null===e)throw Error(d(409));lh(t,e,null,null)},lg.prototype.unmount=l_.prototype.unmount=function(){var t=this._internalRoot;if(null!==t){this._internalRoot=null;var e=t.containerInfo;sV(function(){lh(null,t,null,null)}),e[i$]=null}},lg.prototype.unstable_scheduleHydration=function(t){if(t){var e=eC();t={blockedOn:null,target:t,priority:e};for(var n=0;n<eB.length&&0!==e&&e<eB[n].priority;n++);eB.splice(n,0,t),0===n&&eU(t)}},eL=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eg(e.pendingLanes);0!==n&&(ek(e,1|n),sB(e,ei()),0==(6&su)&&(sk=ei()+500,oh()))}break;case 13:sV(function(){var e=oX(t,1);null!==e&&sD(e,t,1,sA())}),lp(t,1)}},eT=function(t){if(13===t.tag){var e=oX(t,134217728);null!==e&&sD(e,t,134217728,sA()),lp(t,134217728)}},eE=function(t){if(13===t.tag){var e=sR(t),n=oX(t,e);null!==n&&sD(n,t,e,sA()),lp(t,e)}},eC=function(){return eS},ez=function(t,e){var n=eS;try{return eS=t,e()}finally{eS=n}},tZ=function(t,e,n){switch(e){case"input":if(tm(t,n),e=n.name,"radio"===n.type&&null!=e){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var o=i0(i);if(!o)throw Error(d(90));tc(i),tm(i,o)}}}break;case"textarea":tx(t,n);break;case"select":null!=(e=n.value)&&ty(t,!!n.multiple,e,!1)}},tV=sW,tG=sV;var lx={findFiberByHostInstance:iY,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lk={bundleType:lx.bundleType,version:lx.version,rendererPackageName:lx.rendererPackageName,rendererConfig:lx.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return null===(t=t9(t))?null:t.stateNode},findFiberByHostInstance:lx.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lS=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lS.isDisabled&&lS.supportsFiber)try{ec=lS.inject(lk),eh=lS}catch(t){}}W={usingClientEntryPoint:!1,Events:[iX,iJ,i0,tH,tW,sW]},V=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lv(e))throw Error(d(200));return function(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:z,key:null==i?null:""+i,children:t,containerInfo:e,implementation:null}}(t,e,null,n)},G=function(t,e){if(!lv(t))throw Error(d(299));var n=!1,i="",o=lm;return null!=e&&(!0===e.unstable_strictMode&&(n=!0),void 0!==e.identifierPrefix&&(i=e.identifierPrefix),void 0!==e.onRecoverableError&&(o=e.onRecoverableError)),e=ll(t,1,!1,null,null,n,!1,i,o),t[i$]=e.current,iw(8===t.nodeType?t.parentNode:t),new l_(e)},$=function(t){if(null==t)return null;if(1===t.nodeType)return t;var e=t._reactInternals;if(void 0===e){if("function"==typeof t.render)throw Error(d(188));throw Error(d(268,t=Object.keys(t).join(",")))}return t=null===(t=t9(e))?null:t.stateNode},q=function(t){return sV(t)},K=function(t,e,n){if(!ly(e))throw Error(d(200));return lw(null,t,e,!0,n)},Q=function(t,e,n){if(!lv(t))throw Error(d(405));var i=null!=n&&n.hydratedSources||null,o=!1,r="",a=lm;if(null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(r=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),e=lc(e,null,t,1,null!=n?n:null,o,!1,r,a),t[i$]=e.current,iw(t),i)for(t=0;t<i.length;t++)o=(o=(n=i[t])._getVersion)(n._source),null==e.mutableSourceEagerHydrationData?e.mutableSourceEagerHydrationData=[n,o]:e.mutableSourceEagerHydrationData.push(n,o);return new lg(e)},Y=function(t,e,n){if(!ly(e))throw Error(d(200));return lw(null,t,e,!1,n)},X=function(t){if(!ly(t))throw Error(d(40));return!!t._reactRootContainer&&(sV(function(){lw(null,null,t,!1,function(){t._reactRootContainer=null,t[i$]=null})}),!0)},J=sW,tt=function(t,e,n,i){if(!ly(n))throw Error(d(200));if(null==t||void 0===t._reactInternals)throw Error(d(38));return lw(t,e,n,!1,i)},te="18.2.0-next-9e3b772b8-20220608"}),a.register("fO90s",function(t,e){t.exports=a("gcnCG")}),a.register("gcnCG",function(e,n){function i(t,e){var n=t.length;for(t.push(e);0<n;){var i=n-1>>>1,o=t[i];if(0<a(o,e))t[i]=e,t[n]=o,n=i;else break}}function o(t){return 0===t.length?null:t[0]}function r(t){if(0===t.length)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;for(var i=0,o=t.length,r=o>>>1;i<r;){var s=2*(i+1)-1,l=t[s],u=s+1,c=t[u];if(0>a(l,n))u<o&&0>a(c,l)?(t[i]=c,t[u]=n,i=u):(t[i]=l,t[s]=n,i=s);else if(u<o&&0>a(c,n))t[i]=c,t[u]=n,i=u;else break}}return e}function a(t,e){var n=t.sortIndex-e.sortIndex;return 0!==n?n:t.id-e.id}if(t(e.exports,"unstable_now",()=>s,t=>s=t),t(e.exports,"unstable_IdlePriority",()=>l,t=>l=t),t(e.exports,"unstable_ImmediatePriority",()=>u,t=>u=t),t(e.exports,"unstable_LowPriority",()=>c,t=>c=t),t(e.exports,"unstable_NormalPriority",()=>h,t=>h=t),t(e.exports,"unstable_Profiling",()=>d,t=>d=t),t(e.exports,"unstable_UserBlockingPriority",()=>f,t=>f=t),t(e.exports,"unstable_cancelCallback",()=>p,t=>p=t),t(e.exports,"unstable_continueExecution",()=>m,t=>m=t),t(e.exports,"unstable_forceFrameRate",()=>_,t=>_=t),t(e.exports,"unstable_getCurrentPriorityLevel",()=>g,t=>g=t),t(e.exports,"unstable_getFirstCallbackNode",()=>v,t=>v=t),t(e.exports,"unstable_next",()=>y,t=>y=t),t(e.exports,"unstable_pauseExecution",()=>b,t=>b=t),t(e.exports,"unstable_requestPaint",()=>w,t=>w=t),t(e.exports,"unstable_runWithPriority",()=>x,t=>x=t),t(e.exports,"unstable_scheduleCallback",()=>k,t=>k=t),t(e.exports,"unstable_shouldYield",()=>S,t=>S=t),t(e.exports,"unstable_wrapCallback",()=>P,t=>P=t),"object"==typeof performance&&"function"==typeof performance.now){var s,l,u,c,h,d,f,p,m,_,g,v,y,b,w,x,k,S,P,T,E=performance;s=function(){return E.now()}}else{var C=Date,z=C.now();s=function(){return C.now()-z}}var M=[],O=[],I=1,N=null,A=3,R=!1,D=!1,B=!1,Z="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,j="undefined"!=typeof setImmediate?setImmediate:null;function U(t){for(var e=o(O);null!==e;){if(null===e.callback)r(O);else if(e.startTime<=t)r(O),e.sortIndex=e.expirationTime,i(M,e);else break;e=o(O)}}function H(t){if(B=!1,U(t),!D){if(null!==o(M))D=!0,tt(W);else{var e=o(O);null!==e&&te(H,e.startTime-t)}}}function W(t,e){D=!1,B&&(B=!1,F($),$=-1),R=!0;var n=A;try{for(U(e),N=o(M);null!==N&&(!(N.expirationTime>e)||t&&!Q());){var i=N.callback;if("function"==typeof i){N.callback=null,A=N.priorityLevel;var a=i(N.expirationTime<=e);e=s(),"function"==typeof a?N.callback=a:N===o(M)&&r(M),U(e)}else r(M);N=o(M)}if(null!==N)var l=!0;else{var u=o(O);null!==u&&te(H,u.startTime-e),l=!1}return l}finally{N=null,A=n,R=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var V=!1,G=null,$=-1,q=5,K=-1;function Q(){return!(s()-K<q)}function Y(){if(null!==G){var t=s();K=t;var e=!0;try{e=G(!0,t)}finally{e?T():(V=!1,G=null)}}else V=!1}if("function"==typeof j)T=function(){j(Y)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,J=X.port2;X.port1.onmessage=Y,T=function(){J.postMessage(null)}}else T=function(){Z(Y,0)};function tt(t){G=t,V||(V=!0,T())}function te(t,e){$=Z(function(){t(s())},e)}l=5,u=1,c=4,h=3,d=null,f=2,p=function(t){t.callback=null},m=function(){D||R||(D=!0,tt(W))},_=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<t?Math.floor(1e3/t):5},g=function(){return A},v=function(){return o(M)},y=function(t){switch(A){case 1:case 2:case 3:var e=3;break;default:e=A}var n=A;A=e;try{return t()}finally{A=n}},b=function(){},w=function(){},x=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=A;A=t;try{return e()}finally{A=n}},k=function(t,e,n){var r=s();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?r+n:r,t){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,t={id:I++,callback:e,priorityLevel:t,startTime:n,expirationTime:a,sortIndex:-1},n>r?(t.sortIndex=n,i(O,t),null===o(M)&&t===o(O)&&(B?(F($),$=-1):B=!0,te(H,n-r))):(t.sortIndex=a,i(M,t),D||R||(D=!0,tt(W))),t},S=Q,P=function(t){var e=A;return function(){var n=A;A=e;try{return t.apply(this,arguments)}finally{A=n}}}}),a.register("8JYDX",function(t,e){t.exports,function(t){/*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function e(t){var e,n,i,o;for(n=1,i=arguments.length;n<i;n++)for(e in o=arguments[n])t[e]=o[e];return t}// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var n,i,o,r,a,s,l,u,c,h,d=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function f(t,e){var n=Array.prototype.slice;if(t.bind)return t.bind.apply(t,n.call(arguments,1));var i=n.call(arguments,2);return function(){return t.apply(e,i.length?i.concat(n.call(arguments)):arguments)}}// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var p=0;// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function m(t){return"_leaflet_id"in t||(t._leaflet_id=++p),t._leaflet_id}// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function _(t,e,n){var i,o,r,a;return a=function(){// reset lock and call if queued
i=!1,o&&(r.apply(n,o),o=!1)},r=function(){i?o=arguments:(// call and lock until later
t.apply(n,arguments),setTimeout(a,e),i=!0)}}// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function g(t,e,n){var i=e[1],o=e[0],r=i-o;return t===i&&n?t:((t-o)%r+r)%r+o}// @function falseFn(): Function
// Returns a function which always returns `false`.
function v(){return!1}// @function formatNum(num: Number, precision?: Number|false): Number
// Returns the number `num` rounded with specified `precision`.
// The default `precision` value is 6 decimal places.
// `false` can be passed to skip any processing (can be useful to avoid round-off errors).
function y(t,e){if(!1===e)return t;var n=Math.pow(10,void 0===e?6:e);return Math.round(t*n)/n}// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function b(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function w(t){return b(t).split(/\s+/)}// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function x(t,e){for(var n in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?d(t.options):{}),e)t.options[n]=e[n];return t.options}// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function k(t,e,n){var i=[];for(var o in t)i.push(encodeURIComponent(n?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+i.join("&")}var S=/\{ *([\w_ -]+) *\}/g;// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function P(t,e){return t.replace(S,function(t,n){var i=e[n];if(void 0===i)throw Error("No value provided for variable "+t);return"function"==typeof i&&(i=i(e)),i})}// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var T=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function E(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return -1}// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var C="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";// inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/
function z(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var M=0;// fallback for IE 7-8
function O(t){var e=+new Date,n=Math.max(0,16-(e-M));return M=e+n,window.setTimeout(t,n)}var I=window.requestAnimationFrame||z("RequestAnimationFrame")||O,N=window.cancelAnimationFrame||z("CancelAnimationFrame")||z("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function A(t,e,n){if(!n||I!==O)return I.call(window,f(t,e));t.call(e)}// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function R(t){t&&N.call(window,t)}// @class Class
// @aka L.Class
// @section
// @uninheritable
// Thanks to John Resig and Dean Edwards for inspiration!
function D(){}D.extend=function(t){// @function extend(props: Object): Function
// [Extends the current class](#class-inheritance) given the properties to be included.
// Returns a Javascript function that is a class constructor (to be called with `new`).
var n=function(){x(this),this.initialize&&this.initialize.apply(this,arguments),// call all constructor hooks
this.callInitHooks()},i=n.__super__=this.prototype,o=d(i);// inherit parent's statics
for(var r in o.constructor=n,n.prototype=o,this)Object.prototype.hasOwnProperty.call(this,r)&&"prototype"!==r&&"__super__"!==r&&(n[r]=this[r]);return t.statics&&e(n,t.statics),t.includes&&(function(t){/* global L: true */if("undefined"!=typeof L&&L&&L.Mixin){t=T(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",Error().stack)}}(t.includes),e.apply(null,[o].concat(t.includes))),// mix given properties into the prototype
e(o,t),delete o.statics,delete o.includes,o.options&&(o.options=i.options?d(i.options):{},e(o.options,t.options)),o._initHooks=[],// add method for calling all hooks
o.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},n},// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
D.include=function(t){var n=this.prototype.options;return e(this.prototype,t),t.options&&(this.prototype.options=n,this.mergeOptions(t.options)),this},// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
D.mergeOptions=function(t){return e(this.prototype.options,t),this},// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
D.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),n="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};/*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */var B={/* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */on:function(t,e,n){// types can be a map of types/handlers
if("object"==typeof t)for(var i in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(i,t[i],e);else{// types can be a string of space-separated words
t=w(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,n)}return this},/* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */off:function(t,e,n){if(arguments.length){if("object"==typeof t)for(var i in t)this._off(i,t[i],e);else{t=w(t);for(var o=1==arguments.length,r=0,a=t.length;r<a;r++)o?this._off(t[r]):this._off(t[r],e,n)}}else delete this._events;return this},// attach listener (without syntactic sugar now)
_on:function(t,e,n,i){if("function"!=typeof e){console.warn("wrong listener type: "+typeof e);return}// check if fn already there
if(!1===this._listens(t,e,n)){n===this&&(n=void 0);var o={fn:e,ctx:n};i&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,n){if(this._events&&(i=this._events[t])){if(1==arguments.length){if(this._firingCount)// so they are not called if remove happens in fire
for(o=0,r=i.length;o<r;o++)i[o].fn=v;// clear all listeners for a type if function isn't specified
delete this._events[t];return}if("function"!=typeof e){console.warn("wrong listener type: "+typeof e);return}// find fn and remove it
var i,o,r,a=this._listens(t,e,n);if(!1!==a){var s=i[a];this._firingCount&&(// set the removed listener to noop so that's not called if remove happens in fire
s.fn=v,/* copy array in case events are being fired */this._events[t]=i=i.slice()),i.splice(a,1)}}},// @method fire(type: String, data?: Object, propagate?: Boolean): this
// Fires an event of the specified type. You can optionally provide a data
// object — the first argument of the listener function will contain its
// properties. The event can optionally be propagated to event parents.
fire:function(t,n,i){if(!this.listens(t,i))return this;var o=e({},n,{type:t,target:this,sourceTarget:n&&n.sourceTarget||this});if(this._events){var r=this._events[t];if(r){this._firingCount=this._firingCount+1||1;for(var a=0,s=r.length;a<s;a++){var l=r[a],u=l.fn;l.once&&this.off(t,u,l.ctx),u.call(l.ctx||this,o)}this._firingCount--}}return i&&this._propagateEvent(o),this},// @method listens(type: String, propagate?: Boolean): Boolean
// @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
// Returns `true` if a particular event type has any listeners attached to it.
// The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
listens:function(t,e,n,i){"string"!=typeof t&&console.warn('"string" type argument expected');// we don't overwrite the input `fn` value, because we need to use it for propagation
var o=e;"function"!=typeof e&&(i=!!e,o=void 0,n=void 0);var r=this._events&&this._events[t];if(r&&r.length&&!1!==this._listens(t,o,n))return!0;if(i){for(var a in this._eventParents)if(this._eventParents[a].listens(t,e,n,i))return!0}return!1},// returns the index (number) or false
_listens:function(t,e,n){if(!this._events)return!1;var i=this._events[t]||[];if(!e)return!!i.length;n===this&&(n=void 0);for(var o=0,r=i.length;o<r;o++)if(i[o].fn===e&&i[o].ctx===n)return o;return!1},// @method once(…): this
// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
once:function(t,e,n){// types can be a map of types/handlers
if("object"==typeof t)for(var i in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(i,t[i],e,!0);else{// types can be a string of space-separated words
t=w(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,n,!0)}return this},// @method addEventParent(obj: Evented): this
// Adds an event parent - an `Evented` that will receive propagated events
addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[m(t)]=t,this},// @method removeEventParent(obj: Evented): this
// Removes an event parent, so it will stop receiving propagated events
removeEventParent:function(t){return this._eventParents&&delete this._eventParents[m(t)],this},_propagateEvent:function(t){for(var n in this._eventParents)this._eventParents[n].fire(t.type,e({layer:t.target,propagatedFrom:t.target},t),!0)}};// aliases; we should ditch those eventually
// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
B.addEventListener=B.on,// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)
// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
B.removeEventListener=B.clearAllEventListeners=B.off,// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
B.addOneTimeEventListener=B.once,// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
B.fireEvent=B.fire,// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
B.hasEventListeners=B.listens;var Z=D.extend(B);/*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function F(t,e,n){// @property x: Number; The `x` coordinate of the point
this.x=n?Math.round(t):t,// @property y: Number; The `y` coordinate of the point
this.y=n?Math.round(e):e}var j=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.
// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function U(t,e,n){return t instanceof F?t:T(t)?new F(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new F(t.x,t.y):new F(t,e,n)}/*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function H(t,e){if(t)for(var n=e?[t,e]:t,i=0,o=n.length;i<o;i++)this.extend(n[i])}// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function W(t,e){return!t||t instanceof H?t:new H(t,e)}/*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function V(t,e){if(t)for(var n=e?[t,e]:t,i=0,o=n.length;i<o;i++)this.extend(n[i])}// TODO International date line?
// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function G(t,e){return t instanceof V?t:new V(t,e)}/* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function $(t,e,n){if(isNaN(t)||isNaN(e))throw Error("Invalid LatLng object: ("+t+", "+e+")");// @property lat: Number
// Latitude in degrees
this.lat=+t,// @property lng: Number
// Longitude in degrees
this.lng=+e,void 0!==n&&(this.alt=+n)}// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
function q(t,e,n){return t instanceof $?t:T(t)&&"object"!=typeof t[0]?3===t.length?new $(t[0],t[1],t[2]):2===t.length?new $(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new $(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new $(t,e,n)}F.prototype={// @method clone(): Point
// Returns a copy of the current point.
clone:function(){return new F(this.x,this.y)},// @method add(otherPoint: Point): Point
// Returns the result of addition of the current and the given points.
add:function(t){// non-destructive, returns a new point
return this.clone()._add(U(t))},_add:function(t){return(// destructive, used directly for performance in situations where it's safe to modify existing point
this.x+=t.x,this.y+=t.y,this)},// @method subtract(otherPoint: Point): Point
// Returns the result of subtraction of the given point from the current.
subtract:function(t){return this.clone()._subtract(U(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},// @method divideBy(num: Number): Point
// Returns the result of division of the current point by the given number.
divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},// @method multiplyBy(num: Number): Point
// Returns the result of multiplication of the current point by the given number.
multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},// @method scaleBy(scale: Point): Point
// Multiply each coordinate of the current point by each coordinate of
// `scale`. In linear algebra terms, multiply the point by the
// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
// defined by `scale`.
scaleBy:function(t){return new F(this.x*t.x,this.y*t.y)},// @method unscaleBy(scale: Point): Point
// Inverse of `scaleBy`. Divide each coordinate of the current point by
// each coordinate of `scale`.
unscaleBy:function(t){return new F(this.x/t.x,this.y/t.y)},// @method round(): Point
// Returns a copy of the current point with rounded coordinates.
round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},// @method floor(): Point
// Returns a copy of the current point with floored coordinates (rounded down).
floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},// @method ceil(): Point
// Returns a copy of the current point with ceiled coordinates (rounded up).
ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},// @method trunc(): Point
// Returns a copy of the current point with truncated coordinates (rounded towards zero).
trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=j(this.x),this.y=j(this.y),this},// @method distanceTo(otherPoint: Point): Number
// Returns the cartesian distance between the current and the given points.
distanceTo:function(t){var e=(t=U(t)).x-this.x,n=t.y-this.y;return Math.sqrt(e*e+n*n)},// @method equals(otherPoint: Point): Boolean
// Returns `true` if the given point has the same coordinates.
equals:function(t){return(t=U(t)).x===this.x&&t.y===this.y},// @method contains(otherPoint: Point): Boolean
// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
contains:function(t){return Math.abs((t=U(t)).x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},// @method toString(): String
// Returns a string representation of the point for debugging purposes.
toString:function(){return"Point("+y(this.x)+", "+y(this.y)+")"}},H.prototype={// @method extend(point: Point): this
// Extends the bounds to contain the given point.
// @alternative
// @method extend(otherBounds: Bounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var e,n;if(!t)return this;if(t instanceof F||"number"==typeof t[0]||"x"in t)e=n=U(t);else if(e=(t=W(t)).min,n=t.max,!e||!n)return this;return this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)):(this.min=e.clone(),this.max=n.clone()),this},// @method getCenter(round?: Boolean): Point
// Returns the center point of the bounds.
getCenter:function(t){return U((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},// @method getBottomLeft(): Point
// Returns the bottom-left point of the bounds.
getBottomLeft:function(){return U(this.min.x,this.max.y)},// @method getTopRight(): Point
// Returns the top-right point of the bounds.
getTopRight:function(){return U(this.max.x,this.min.y)},// @method getTopLeft(): Point
// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
getTopLeft:function(){return this.min;// left, top
},// @method getBottomRight(): Point
// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
getBottomRight:function(){return this.max;// right, bottom
},// @method getSize(): Point
// Returns the size of the given bounds
getSize:function(){return this.max.subtract(this.min)},// @method contains(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains(point: Point): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){var e,n;return(t="number"==typeof t[0]||t instanceof F?U(t):W(t))instanceof H?(e=t.min,n=t.max):e=n=t,e.x>=this.min.x&&n.x<=this.max.x&&e.y>=this.min.y&&n.y<=this.max.y},// @method intersects(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds
// intersect if they have at least one point in common.
intersects:function(t){t=W(t);var e=this.min,n=this.max,i=t.min,o=t.max,r=o.x>=e.x&&i.x<=n.x,a=o.y>=e.y&&i.y<=n.y;return r&&a},// @method overlaps(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds
// overlap if their intersection is an area.
overlaps:function(t){t=W(t);var e=this.min,n=this.max,i=t.min,o=t.max,r=o.x>e.x&&i.x<n.x,a=o.y>e.y&&i.y<n.y;return r&&a},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this.min&&this.max)},// @method pad(bufferRatio: Number): Bounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var e=this.min,n=this.max,i=Math.abs(e.x-n.x)*t,o=Math.abs(e.y-n.y)*t;return W(U(e.x-i,e.y-o),U(n.x+i,n.y+o))},// @method equals(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle is equivalent to the given bounds.
equals:function(t){return!!t&&(t=W(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},V.prototype={// @method extend(latlng: LatLng): this
// Extend the bounds to contain the given point
// @alternative
// @method extend(otherBounds: LatLngBounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var e,n,i=this._southWest,o=this._northEast;if(t instanceof $)e=t,n=t;else if(!(t instanceof V))return t?this.extend(q(t)||G(t)):this;else if(e=t._southWest,n=t._northEast,!e||!n)return this;return i||o?(i.lat=Math.min(e.lat,i.lat),i.lng=Math.min(e.lng,i.lng),o.lat=Math.max(n.lat,o.lat),o.lng=Math.max(n.lng,o.lng)):(this._southWest=new $(e.lat,e.lng),this._northEast=new $(n.lat,n.lng)),this},// @method pad(bufferRatio: Number): LatLngBounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var e=this._southWest,n=this._northEast,i=Math.abs(e.lat-n.lat)*t,o=Math.abs(e.lng-n.lng)*t;return new V(new $(e.lat-i,e.lng-o),new $(n.lat+i,n.lng+o))},// @method getCenter(): LatLng
// Returns the center point of the bounds.
getCenter:function(){return new $((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},// @method getSouthWest(): LatLng
// Returns the south-west point of the bounds.
getSouthWest:function(){return this._southWest},// @method getNorthEast(): LatLng
// Returns the north-east point of the bounds.
getNorthEast:function(){return this._northEast},// @method getNorthWest(): LatLng
// Returns the north-west point of the bounds.
getNorthWest:function(){return new $(this.getNorth(),this.getWest())},// @method getSouthEast(): LatLng
// Returns the south-east point of the bounds.
getSouthEast:function(){return new $(this.getSouth(),this.getEast())},// @method getWest(): Number
// Returns the west longitude of the bounds
getWest:function(){return this._southWest.lng},// @method getSouth(): Number
// Returns the south latitude of the bounds
getSouth:function(){return this._southWest.lat},// @method getEast(): Number
// Returns the east longitude of the bounds
getEast:function(){return this._northEast.lng},// @method getNorth(): Number
// Returns the north latitude of the bounds
getNorth:function(){return this._northEast.lat},// @method contains(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains (latlng: LatLng): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){t="number"==typeof t[0]||t instanceof $||"lat"in t?q(t):G(t);var e,n,i=this._southWest,o=this._northEast;return t instanceof V?(e=t.getSouthWest(),n=t.getNorthEast()):e=n=t,e.lat>=i.lat&&n.lat<=o.lat&&e.lng>=i.lng&&n.lng<=o.lng},// @method intersects(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
intersects:function(t){t=G(t);var e=this._southWest,n=this._northEast,i=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>=e.lat&&i.lat<=n.lat,a=o.lng>=e.lng&&i.lng<=n.lng;return r&&a},// @method overlaps(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
overlaps:function(t){t=G(t);var e=this._southWest,n=this._northEast,i=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>e.lat&&i.lat<n.lat,a=o.lng>e.lng&&i.lng<n.lng;return r&&a},// @method toBBoxString(): String
// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,e){return!!t&&(t=G(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this._southWest&&this._northEast)}},$.prototype={// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,e){return!!t&&(t=q(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},// @method toString(): String
// Returns a string representation of the point (for debugging purposes).
toString:function(t){return"LatLng("+y(this.lat,t)+", "+y(this.lng,t)+")"},// @method distanceTo(otherLatLng: LatLng): Number
// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
distanceTo:function(t){return Q.distance(this,q(t))},// @method wrap(): LatLng
// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
wrap:function(){return Q.wrapLatLng(this)},// @method toBounds(sizeInMeters: Number): LatLngBounds
// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
toBounds:function(t){var e=180*t/40075017,n=e/Math.cos(Math.PI/180*this.lat);return G([this.lat-e,this.lng-n],[this.lat+e,this.lng+n])},clone:function(){return new $(this.lat,this.lng,this.alt)}};/*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */var K={// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
// Projects geographical coordinates into pixel coordinates for a given zoom.
latLngToPoint:function(t,e){var n=this.projection.project(t),i=this.scale(e);return this.transformation._transform(n,i)},// @method pointToLatLng(point: Point, zoom: Number): LatLng
// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
// zoom into geographical coordinates.
pointToLatLng:function(t,e){var n=this.scale(e),i=this.transformation.untransform(t,n);return this.projection.unproject(i)},// @method project(latlng: LatLng): Point
// Projects geographical coordinates into coordinates in units accepted for
// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
project:function(t){return this.projection.project(t)},// @method unproject(point: Point): LatLng
// Given a projected coordinate returns the corresponding LatLng.
// The inverse of `project`.
unproject:function(t){return this.projection.unproject(t)},// @method scale(zoom: Number): Number
// Returns the scale used when transforming projected coordinates into
// pixel coordinates for a particular zoom. For example, it returns
// `256 * 2^zoom` for Mercator-based CRS.
scale:function(t){return 256*Math.pow(2,t)},// @method zoom(scale: Number): Number
// Inverse of `scale()`, returns the zoom level corresponding to a scale
// factor of `scale`.
zoom:function(t){return Math.log(t/256)/Math.LN2},// @method getProjectedBounds(zoom: Number): Bounds
// Returns the projection's bounds scaled and transformed for the provided `zoom`.
getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,n=this.scale(t),i=this.transformation.transform(e.min,n),o=this.transformation.transform(e.max,n);return new H(i,o)},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates.
// @property code: String
// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
//
// @property wrapLng: Number[]
// An array of two numbers defining whether the longitude (horizontal) coordinate
// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
//
// @property wrapLat: Number[]
// Like `wrapLng`, but for the latitude (vertical) axis.
// wrapLng: [min, max],
// wrapLat: [min, max],
// @property infinite: Boolean
// If true, the coordinate space will be unbounded (infinite in both axes)
infinite:!1,// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where lat and lng has been wrapped according to the
// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
wrapLatLng:function(t){var e=this.wrapLng?g(t.lng,this.wrapLng,!0):t.lng,n=this.wrapLat?g(t.lat,this.wrapLat,!0):t.lat,i=t.alt;return new $(n,e,i)},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring
// that its center is within the CRS's bounds.
// Only accepts actual `L.LatLngBounds` instances, not arrays.
wrapLatLngBounds:function(t){var e=t.getCenter(),n=this.wrapLatLng(e),i=e.lat-n.lat,o=e.lng-n.lng;if(0===i&&0===o)return t;var r=t.getSouthWest(),a=t.getNorthEast(),s=new $(r.lat-i,r.lng-o),l=new $(a.lat-i,a.lng-o);return new V(s,l)}},Q=e({},K,{wrapLng:[-180,180],// Mean Earth Radius, as recommended for use by
// the International Union of Geodesy and Geophysics,
// see https://rosettacode.org/wiki/Haversine_formula
R:6371e3,// distance between two geographical points using spherical law of cosines approximation
distance:function(t,e){var n=Math.PI/180,i=t.lat*n,o=e.lat*n,r=Math.sin((e.lat-t.lat)*n/2),a=Math.sin((e.lng-t.lng)*n/2),s=r*r+Math.cos(i)*Math.cos(o)*a*a;return this.R*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}}),Y={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,n=this.MAX_LATITUDE,i=Math.sin(Math.max(Math.min(n,t.lat),-n)*e);return new F(this.R*t.lng*e,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(t){var e=180/Math.PI;return new $((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(l=6378137*Math.PI,new H([-l,-l],[l,l]))};/*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function X(t,e,n,i){if(T(t)){// use array properties
this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=n,this._d=i}// factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.
// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.
function J(t,e,n,i){return new X(t,e,n,i)}X.prototype={// @method transform(point: Point, scale?: Number): Point
// Returns a transformed point, optionally multiplied by the given scale.
// Only accepts actual `L.Point` instances, not arrays.
transform:function(t,e){return this._transform(t.clone(),e)},// destructive transform (faster)
_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},// @method untransform(point: Point, scale?: Number): Point
// Returns the reverse transformation of the given point, optionally divided
// by the given scale. Only accepts actual `L.Point` instances, not arrays.
untransform:function(t,e){return e=e||1,new F((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};/*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */var tt=e({},Q,{code:"EPSG:3857",projection:Y,transformation:J(u=.5/(Math.PI*Y.R),.5,-u,.5)}),te=e({},tt,{code:"EPSG:900913"});// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:
// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function tn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function ti(t,e){var n,i,o,r,a,s,l="";for(n=0,o=t.length;n<o;n++){for(i=0,r=(a=t[n]).length;i<r;i++)s=a[i],l+=(i?"L":"M")+s.x+" "+s.y;// closes the ring for polygons; "x" is VML syntax
l+=e?tR.svg?"z":"x":""}// SVG complains about empty path strings
return l||"M0 0"}/*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */var to=document.documentElement.style,tr="ActiveXObject"in window,ta=tr&&!document.addEventListener,ts="msLaunchUri"in navigator&&!("documentMode"in document),tl=tA("webkit"),tu=tA("android"),tc=tA("android 2")||tA("android 3"),th=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),td=tu&&tA("Google")&&th<537&&!("AudioNode"in window),tf=!!window.opera,tp=!ts&&tA("chrome"),tm=tA("gecko")&&!tl&&!tf&&!tr,t_=!tp&&tA("safari"),tg=tA("phantom"),tv="OTransition"in to,ty=0===navigator.platform.indexOf("Win"),tb=tr&&"transition"in to,tw="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!tc,tx="MozPerspective"in to,tk=!window.L_DISABLE_3D&&(tb||tw||tx)&&!tv&&!tg,tS="undefined"!=typeof orientation||tA("mobile"),tP=!window.PointerEvent&&window.MSPointerEvent,tL=!!(window.PointerEvent||tP),tT="ontouchstart"in window||!!window.TouchEvent,tE=!window.L_NO_TOUCH&&(tT||tL),tC=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,tz=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",v,e),window.removeEventListener("testPassiveEventSupport",v,e)}catch(t){// Errors can safely be ignored since this is only a browser support test.
}return t}(),tM=!!document.createElement("canvas").getContext,tO=!!(document.createElementNS&&tn("svg").createSVGRect),tI=!!tO&&((c=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(c.firstChild&&c.firstChild.namespaceURI)),tN=!tO&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}();function tA(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var tR={ie:tr,ielt9:ta,edge:ts,webkit:tl,android:tu,android23:tc,androidStock:td,opera:tf,chrome:tp,gecko:tm,safari:t_,phantom:tg,opera12:tv,win:ty,ie3d:tb,webkit3d:tw,gecko3d:tx,any3d:tk,mobile:tS,mobileWebkit:tS&&tl,mobileWebkit3d:tS&&tw,msPointer:tP,pointer:tL,touch:tE,touchNative:tT,mobileOpera:tS&&tf,mobileGecko:tS&&tm,retina:tC,passiveEvents:tz,canvas:tM,svg:tO,vml:tN,inlineSvg:tI,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},tD=tR.msPointer?"MSPointerDown":"pointerdown",tB=tR.msPointer?"MSPointerMove":"pointermove",tZ=tR.msPointer?"MSPointerUp":"pointerup",tF=tR.msPointer?"MSPointerCancel":"pointercancel",tj={touchstart:tD,touchmove:tB,touchend:tZ,touchcancel:tF},tU={touchstart:function(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&ex(e),tq(t,e)},touchmove:tq,touchend:tq,touchcancel:tq},tH={},tW=!1;function tV(t){tH[t.pointerId]=t}function tG(t){tH[t.pointerId]&&(tH[t.pointerId]=t)}function t$(t){delete tH[t.pointerId]}function tq(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var n in e.touches=[],tH)e.touches.push(tH[n]);e.changedTouches=[e],t(e)}}/*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var tK=ee(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),tQ=ee(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),tY="webkitTransition"===tQ||"OTransition"===tQ?tQ+"End":"transitionend";// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function tX(t){return"string"==typeof t?document.getElementById(t):t}// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function tJ(t,e){var n=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!n||"auto"===n)&&document.defaultView){var i=document.defaultView.getComputedStyle(t,null);n=i?i[e]:null}return"auto"===n?null:n}// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function t0(t,e,n){var i=document.createElement(t);return i.className=e||"",n&&n.appendChild(i),i}// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function t1(t){var e=t.parentNode;e&&e.removeChild(t)}// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function t2(t){for(;t.firstChild;)t.removeChild(t.firstChild)}// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function t3(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function t4(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function t8(t,e){if(void 0!==t.classList)return t.classList.contains(e);var n=t7(t);return n.length>0&&RegExp("(^|\\s)"+e+"(\\s|$)").test(n)}// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function t5(t,e){if(void 0!==t.classList)for(var n=w(e),i=0,o=n.length;i<o;i++)t.classList.add(n[i]);else if(!t8(t,e)){var r=t7(t);t9(t,(r?r+" ":"")+e)}}// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function t6(t,e){void 0!==t.classList?t.classList.remove(e):t9(t,b((" "+t7(t)+" ").replace(" "+e+" "," ")))}// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function t9(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}// @function getClass(el: HTMLElement): String
// Returns the element's class.
function t7(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function et(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&function(t,e){var n=!1,i="DXImageTransform.Microsoft.Alpha";// filters collection throws an error if we try to retrieve a filter that doesn't exist
try{n=t.filters.item(i)}catch(t){// don't set opacity to 1 if we haven't already set an opacity,
// it isn't needed and breaks transparent pngs.
if(1===e)return}e=Math.round(100*e),n?(n.Enabled=100!==e,n.Opacity=e):t.style.filter+=" progid:"+i+"(opacity="+e+")"}(t,e)}// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function ee(t){for(var e=document.documentElement.style,n=0;n<t.length;n++)if(t[n]in e)return t[n];return!1}// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function en(t,e,n){var i=e||new F(0,0);t.style[tK]=(tR.ie3d?"translate("+i.x+"px,"+i.y+"px)":"translate3d("+i.x+"px,"+i.y+"px,0)")+(n?" scale("+n+")":"")}// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function ei(t,e){/*eslint-disable */t._leaflet_pos=e,tR.any3d?en(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function eo(t){// this method is only used for elements previously positioned using setPosition,
// so it's safe to cache the position for performance
return t._leaflet_pos||new F(0,0)}if("onselectstart"in document)n=function(){ed(window,"selectstart",ex)},i=function(){ep(window,"selectstart",ex)};else{var er=ee(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);n=function(){if(er){var t=document.documentElement.style;o=t[er],t[er]="none"}},i=function(){er&&(document.documentElement.style[er]=o,o=void 0)}}// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function ea(){ed(window,"dragstart",ex)}// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function es(){ep(window,"dragstart",ex)}// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function el(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(eu(),r=t,a=t.style.outlineStyle,t.style.outlineStyle="none",ed(window,"keydown",eu))}// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function eu(){r&&(r.style.outlineStyle=a,r=void 0,a=void 0,ep(window,"keydown",eu))}// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function ec(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body)return t}// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function eh(t){var e=t.getBoundingClientRect();// Read-only in old browsers.
return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}/*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).
// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function ed(t,e,n,i){if(e&&"object"==typeof e)for(var o in e)eg(t,o,e[o],n);else{e=w(e);for(var r=0,a=e.length;r<a;r++)eg(t,e[r],n,i)}return this}var ef="_leaflet_events";// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.
// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
// @alternative
// @function off(el: HTMLElement, types: String): this
// Removes all previously added listeners of given types.
// @alternative
// @function off(el: HTMLElement): this
// Removes all previously added listeners from given HTMLElement
function ep(t,e,n,i){if(1==arguments.length)em(t),delete t[ef];else if(e&&"object"==typeof e)for(var o in e)ev(t,o,e[o],n);else if(e=w(e),2==arguments.length)em(t,function(t){return -1!==E(e,t)});else for(var r=0,a=e.length;r<a;r++)ev(t,e[r],n,i);return this}function em(t,e){for(var n in t[ef]){var i=n.split(/\d/)[0];(!e||e(i))&&ev(t,i,null,null,n)}}var e_={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function eg(t,e,n,i){var o=e+m(n)+(i?"_"+m(i):"");if(t[ef]&&t[ef][o])return this;var r=function(e){return n.call(i||t,e||window.event)},a=r;!tR.touchNative&&tR.pointer&&0===e.indexOf("touch")?r=// Provides a touch events wrapper for (ms)pointer events.
// ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
function(t,e,n){return("touchstart"===e&&(tW||(// we listen document as any drags that end by moving the touch off the screen get fired there
document.addEventListener(tD,tV,!0),document.addEventListener(tB,tG,!0),document.addEventListener(tZ,t$,!0),document.addEventListener(tF,t$,!0),tW=!0)),tU[e])?(n=tU[e].bind(this,n),t.addEventListener(tj[e],n,!1),n):(console.warn("wrong event specified:",e),v)}(t,e,r):tR.touch&&"dblclick"===e?r=function(t,e){// Most browsers handle double tap natively
t.addEventListener("dblclick",e);// On some platforms the browser doesn't fire native dblclicks for touch events.
// It seems that in all such cases `detail` property of `click` event is always `1`.
// So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.
var n,i=0;function o(t){if(1!==t.detail){n=t.detail;// keep in sync to avoid false dblclick in some cases
return}if("mouse"!==t.pointerType&&(!t.sourceCapabilities||t.sourceCapabilities.firesTouchEvents)){// When clicking on an <input>, the browser generates a click on its
// <label> (and vice versa) triggering two clicks in quick succession.
// This ignores clicks on elements which are a label with a 'for'
// attribute (or children of such a label), but not children of
// a <input>.
var o=eS(t);if(!o.some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})||o.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})){var r=Date.now();r-i<=200?2==++n&&e(/*
   * Extends the event handling code with double tap support for mobile browsers.
   *
   * Note: currently most browsers fire native dblclick, with only a few exceptions
   * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)
   */function(t){// in modern browsers `type` cannot be just overridden:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only
var e,n,i={};for(n in t)e=t[n],i[n]=e&&e.bind?e.bind(t):e;return t=i,i.type="dblclick",i.detail=2,i.isTrusted=!1,i._simulated=!0,i}(t)):n=1,i=r}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}(t,r):"addEventListener"in t?"touchstart"===e||"touchmove"===e||"wheel"===e||"mousewheel"===e?t.addEventListener(e_[e]||e,r,!!tR.passiveEvents&&{passive:!1}):"mouseenter"===e||"mouseleave"===e?(r=function(e){eE(t,e=e||window.event)&&a(e)},t.addEventListener(e_[e],r,!1)):t.addEventListener(e,a,!1):t.attachEvent("on"+e,r),t[ef]=t[ef]||{},t[ef][o]=r}function ev(t,e,n,i,o){o=o||e+m(n)+(i?"_"+m(i):"");var r=t[ef]&&t[ef][o];if(!r)return this;!tR.touchNative&&tR.pointer&&0===e.indexOf("touch")?function(t,e,n){if(!tj[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(tj[e],n,!1)}(t,e,r):tR.touch&&"dblclick"===e?(t.removeEventListener("dblclick",r.dblclick),t.removeEventListener("click",r.simDblclick)):"removeEventListener"in t?t.removeEventListener(e_[e]||e,r,!1):t.detachEvent("on"+e,r),t[ef][o]=null}// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function ey(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
function eb(t){return eg(t,"wheel",ey),this}// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function ew(t){return ed(t,"mousedown touchstart dblclick contextmenu",ey),t._leaflet_disable_click=!0,this}// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function ex(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function ek(t){return ex(t),ey(t),this}// @function getPropagationPath(ev: DOMEvent): Array
// Compatibility polyfill for [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).
// Returns an array containing the `HTMLElement`s that the given DOM event
// should propagate to (if not stopped).
function eS(t){if(t.composedPath)return t.composedPath();for(var e=[],n=t.target;n;)e.push(n),n=n.parentNode;return e}// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function eP(t,e){if(!e)return new F(t.clientX,t.clientY);var n=eh(e),i=n.boundingClientRect;// left and top  values are in page scale (like the event clientX/Y)
return new F(// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
(t.clientX-i.left)/n.x-e.clientLeft,(t.clientY-i.top)/n.y-e.clientTop)}//  except , Safari and
// We need double the scroll pixels (see #7403 and #4538) for all Browsers
// except OSX (Mac) -> 3x, Chrome running on Linux 1x
var eL=tR.linux&&tR.chrome?window.devicePixelRatio:tR.mac?3*window.devicePixelRatio:window.devicePixelRatio>0?2*window.devicePixelRatio:1;// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a wheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function eT(t){return tR.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/eL:t.deltaY&&1===t.deltaMode?-(20*t.deltaY):t.deltaY&&2===t.deltaMode?-(60*t.deltaY):t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&32765>Math.abs(t.detail)?-(20*t.detail):t.detail?-(60*(t.detail/32765)):0}// check if element really left/entered the event target (for mouseenter/mouseleave)
function eE(t,e){var n=e.relatedTarget;if(!n)return!0;try{for(;n&&n!==t;)n=n.parentNode}catch(t){return!1}return n!==t}/*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var myPositionMarker = L.marker([48.864716, 2.294694]).addTo(map);
   *
   * myPositionMarker.on("click", function() {
   * 	var pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
   * 	pos.y -= 25;
   * 	var fx = new L.PosAnimation();
   *
   * 	fx.once('end',function() {
   * 		pos.y += 25;
   * 		fx.run(myPositionMarker._icon, pos, 0.8);
   * 	});
   *
   * 	fx.run(myPositionMarker._icon, pos, 0.3);
   * });
   *
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */var eC=Z.extend({// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
// Run an animation of a given element to a new position, optionally setting
// duration in seconds (`0.25` by default) and easing linearity factor (3rd
// argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
// `0.5` by default).
run:function(t,e,n,i){this.stop(),this._el=t,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(i||.5,.2),this._startPos=eo(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,// @event start: Event
// Fired when the animation starts
this.fire("start"),this._animate()},// @method stop()
// Stops the animation (if currently running).
stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){// animation loop
this._animId=A(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,n=1e3*this._duration;e<n?this._runFrame(this._easeOut(e/n),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var n=this._startPos.add(this._offset.multiplyBy(t));e&&n._round(),ei(this._el,n),// @event step: Event
// Fired continuously during the animation.
this.fire("step")},_complete:function(){R(this._animId),this._inProgress=!1,// @event end: Event
// Fired when the animation ends.
this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),ez=Z.extend({options:{// @section Map State Options
// @option crs: CRS = L.CRS.EPSG3857
// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
// sure what it means.
crs:tt,// @option center: LatLng = undefined
// Initial geographic center of the map
center:void 0,// @option zoom: Number = undefined
// Initial map zoom level
zoom:void 0,// @option minZoom: Number = *
// Minimum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the lowest of their `minZoom` options will be used instead.
minZoom:void 0,// @option maxZoom: Number = *
// Maximum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the highest of their `maxZoom` options will be used instead.
maxZoom:void 0,// @option layers: Layer[] = []
// Array of layers that will be added to the map initially
layers:[],// @option maxBounds: LatLngBounds = null
// When this option is set, the map restricts the view to the given
// geographical bounds, bouncing the user back if the user tries to pan
// outside the view. To set the restriction dynamically, use
// [`setMaxBounds`](#map-setmaxbounds) method.
maxBounds:void 0,// @option renderer: Renderer = *
// The default method for drawing vector layers on the map. `L.SVG`
// or `L.Canvas` by default depending on browser support.
renderer:void 0,// @section Animation Options
// @option zoomAnimation: Boolean = true
// Whether the map zoom animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
zoomAnimation:!0,// @option zoomAnimationThreshold: Number = 4
// Won't animate zoom if the zoom difference exceeds this value.
zoomAnimationThreshold:4,// @option fadeAnimation: Boolean = true
// Whether the tile fade animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
fadeAnimation:!0,// @option markerZoomAnimation: Boolean = true
// Whether markers animate their zoom with the zoom animation, if disabled
// they will disappear for the length of the animation. By default it's
// enabled in all browsers that support CSS3 Transitions except Android.
markerZoomAnimation:!0,// @option transform3DLimit: Number = 2^23
// Defines the maximum size of a CSS translation transform. The default
// value should not be changed unless a web browser positions layers in
// the wrong place after doing a large `panBy`.
transform3DLimit:8388608,// @section Interaction Options
// @option zoomSnap: Number = 1
// Forces the map's zoom level to always be a multiple of this, particularly
// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
// By default, the zoom level snaps to the nearest integer; lower values
// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
zoomSnap:1,// @option zoomDelta: Number = 1
// Controls how much the map's zoom level will change after a
// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
zoomDelta:1,// @option trackResize: Boolean = true
// Whether the map automatically handles browser window resize to update itself.
trackResize:!0},initialize:function(t,e){e=x(this,e),// Make sure to assign internal flags at the beginning,
// to avoid inconsistent state in some edge cases.
this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),// hack for https://github.com/Leaflet/Leaflet/issues/1980
this._onResize=f(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(q(e.center),e.zoom,{reset:!0}),this.callInitHooks(),// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
this._zoomAnimated=tQ&&tR.any3d&&!tR.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ed(this._proxy,tY,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},// @section Methods for modifying map state
// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) with the given
// animation options.
setView:function(t,n,i){return(n=void 0===n?this._zoom:this._limitZoom(n),t=this._limitCenter(q(t),n,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&!0!==i&&(void 0!==i.animate&&(i.zoom=e({animate:i.animate},i.zoom),i.pan=e({animate:i.animate,duration:i.duration},i.pan)),this._zoom!==n?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,n,i.zoom):this._tryAnimatedPan(t,i.pan)))?// prevent resize handler call, the view will refresh after animation anyway
clearTimeout(this._sizeTimer):// animation didn't start, just reset the map view
this._resetView(t,n,i.pan&&i.pan.noMoveStart),this},// @method setZoom(zoom: Number, options?: Zoom/pan options): this
// Sets the zoom of the map.
setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},// @method zoomIn(delta?: Number, options?: Zoom options): this
// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomIn:function(t,e){return t=t||(tR.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},// @method zoomOut(delta?: Number, options?: Zoom options): this
// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomOut:function(t,e){return t=t||(tR.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified geographical point on the map
// stationary (e.g. used internally for scroll zoom and double-click zoom).
// @alternative
// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
setZoomAround:function(t,e,n){var i=this.getZoomScale(e),o=this.getSize().divideBy(2),r=(t instanceof F?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/i),a=this.containerPointToLatLng(o.add(r));return this.setView(a,e,{zoom:n})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():G(t);var n=U(e.paddingTopLeft||e.padding||[0,0]),i=U(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,n.add(i));if((o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var r=i.subtract(n).divideBy(2),a=this.project(t.getSouthWest(),o),s=this.project(t.getNorthEast(),o);return{center:this.unproject(a.add(s).divideBy(2).add(r),o),zoom:o}},// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets a map view that contains the given geographical bounds with the
// maximum zoom level possible.
fitBounds:function(t,e){if(!(t=G(t)).isValid())throw Error("Bounds are not valid.");var n=this._getBoundsCenterZoom(t,e);return this.setView(n.center,n.zoom,e)},// @method fitWorld(options?: fitBounds options): this
// Sets a map view that mostly contains the whole world with the maximum
// zoom level possible.
fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},// @method panTo(latlng: LatLng, options?: Pan options): this
// Pans the map to a given center.
panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},// @method panBy(offset: Point, options?: Pan options): this
// Pans the map by a given number of pixels (animated).
panBy:function(t,e){if(t=U(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");// If we pan too far, Chrome gets issues with tiles
// and makes them disappear or appear in the wrong place (slightly offset) #2602
if(!0!==e.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;// animate pan unless animate: false specified
if(this._panAnim||(this._panAnim=new eC,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate){t5(this._mapPane,"leaflet-pan-anim");var n=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,n,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) performing a smooth
// pan-zoom animation.
flyTo:function(t,e,n){if(!1===(n=n||{}).animate||!tR.any3d)return this.setView(t,e,n);this._stop();var i=this.project(this.getCenter()),o=this.project(t),r=this.getSize(),a=this._zoom;t=q(t),e=void 0===e?a:e;var s=Math.max(r.x,r.y),l=s*this.getZoomScale(a,e),u=o.distanceTo(i)||1;function c(t){var e=t?l:s,n=(l*l-s*s+(t?-1:1)*4.0658689599999995*u*u)/(2*e*2.0164*u),i=Math.sqrt(n*n+1)-n;return i<1e-9?-18:Math.log(i)}function h(t){return(Math.exp(t)-Math.exp(-t))/2}function d(t){return(Math.exp(t)+Math.exp(-t))/2}var f=c(0),p=Date.now(),m=(c(1)-f)/1.42,_=n.duration?1e3*n.duration:1e3*m*.8;return this._moveStart(!0,n.noMoveStart),(function n(){var r,l=(Date.now()-p)/_,c=(1-Math.pow(1-l,1.5))*m;l<=1?(this._flyToFrame=A(n,this),this._move(this.unproject(i.add(o.subtract(i).multiplyBy(s*(d(f)*(h(r=f+1.42*c)/d(r))-h(f))/2.0164/u)),a),this.getScaleZoom(s/(s*(d(f)/d(f+1.42*c))),a),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}).call(this),this},// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
flyToBounds:function(t,e){var n=this._getBoundsCenterZoom(t,e);return this.flyTo(n.center,n.zoom,e)},// @method setMaxBounds(bounds: LatLngBounds): this
// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
setMaxBounds:function(t){return(t=G(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid())?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},// @method setMinZoom(zoom: Number): this
// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
setMinZoom:function(t){var e=this.options.minZoom;return(this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom))?this.setZoom(t):this},// @method setMaxZoom(zoom: Number): this
// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
setMaxZoom:function(t){var e=this.options.maxZoom;return(this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom))?this.setZoom(t):this},// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
panInsideBounds:function(t,e){this._enforcingBounds=!0;var n=this.getCenter(),i=this._limitCenter(n,this._zoom,G(t));return n.equals(i)||this.panTo(i,e),this._enforcingBounds=!1,this},// @method panInside(latlng: LatLng, options?: padding options): this
// Pans the map the minimum amount to make the `latlng` visible. Use
// padding options to fit the display to more restricted bounds.
// If `latlng` is already within the (optionally padded) display bounds,
// the map will not be panned.
panInside:function(t,e){var n=U((e=e||{}).paddingTopLeft||e.padding||[0,0]),i=U(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),r=this.project(t),a=this.getPixelBounds(),s=W([a.min.add(n),a.max.subtract(i)]),l=s.getSize();if(!s.contains(r)){this._enforcingBounds=!0;var u=r.subtract(s.getCenter()),c=s.extend(r).getSize().subtract(l);o.x+=u.x<0?-c.x:c.x,o.y+=u.y<0?-c.y:c.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},// @method invalidateSize(options: Zoom/pan options): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default. If `options.pan` is `false`, panning will not occur.
// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
// that it doesn't happen often even if the method is called many
// times in a row.
// @alternative
// @method invalidateSize(animate: Boolean): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default.
invalidateSize:function(t){if(!this._loaded)return this;t=e({animate:!1,pan:!0},!0===t?{animate:!0}:t);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),o=n.divideBy(2).round(),r=i.divideBy(2).round(),a=o.subtract(r);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(f(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:i})):this},// @section Methods for modifying map state
// @method stop(): this
// Stops the currently running `panTo` or `flyTo` animation, if any.
stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},// @section Geolocation methods
// @method locate(options?: Locate options): this
// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
// and optionally sets the map view to the user's location with respect to
// detection accuracy (or to the world view if geolocation failed).
// Note that, if your page doesn't use HTTPS, this method will fail in
// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
// See `Locate options` for more details.
locate:function(t){if(t=this._locateOptions=e({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=f(this._handleGeolocationResponse,this),i=f(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,i,t):navigator.geolocation.getCurrentPosition(n,i,t),this},// @method stopLocate(): this
// Stops watching location previously initiated by `map.locate({watch: true})`
// and aborts resetting the map view if map.locate was called with
// `{setView: true}`.
stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,n=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),// @section Location events
// @event locationerror: ErrorEvent
// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
this.fire("locationerror",{code:e,message:"Geolocation error: "+n+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,n=t.coords.longitude,i=new $(e,n),o=i.toBounds(2*t.coords.accuracy),r=this._locateOptions;if(r.setView){var a=this.getBoundsZoom(o);this.setView(i,r.maxZoom?Math.min(a,r.maxZoom):a)}var s={latlng:i,bounds:o,timestamp:t.timestamp};for(var l in t.coords)"number"==typeof t.coords[l]&&(s[l]=t.coords[l]);// @event locationfound: LocationEvent
// Fired when geolocation (using the [`locate`](#map-locate) method)
// went successfully.
this.fire("locationfound",s)}},// TODO Appropriate docs section?
// @section Other Methods
// @method addHandler(name: String, HandlerClass: Function): this
// Adds a new `Handler` to the map, given its name and constructor function.
addHandler:function(t,e){if(!e)return this;var n=this[t]=new e(this);return this._handlers.push(n),this.options[t]&&n.enable(),this},// @method remove(): this
// Destroys the map and clears all related event listeners.
remove:function(){var t;if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error("Map container is being reused by another instance");try{// throws error in IE6-8
delete this._container._leaflet_id,delete this._containerId}catch(t){/*eslint-disable */this._container._leaflet_id=void 0,/* eslint-enable */this._containerId=void 0}for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),t1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(R(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&// @event unload: Event
// Fired when the map is destroyed with [remove](#map-remove) method.
this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)t1(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},// @section Other Methods
// @method createPane(name: String, container?: HTMLElement): HTMLElement
// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
// then returns it. The pane is created as a child of `container`, or
// as a child of the main map pane if not set.
createPane:function(t,e){var n=t0("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=n),n},// @section Methods for Getting Map State
// @method getCenter(): LatLng
// Returns the geographical center of the map view
getCenter:function(){return(this._checkIfLoaded(),this._lastCenter&&!this._moved())?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},// @method getZoom(): Number
// Returns the current zoom level of the map view
getZoom:function(){return this._zoom},// @method getBounds(): LatLngBounds
// Returns the geographical bounds visible in the current map view
getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),n=this.unproject(t.getTopRight());return new V(e,n)},// @method getMinZoom(): Number
// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},// @method getMaxZoom(): Number
// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
// Returns the maximum zoom level on which the given bounds fit to the map
// view in its entirety. If `inside` (optional) is set to `true`, the method
// instead returns the minimum zoom level on which the map view fits into
// the given bounds in its entirety.
getBoundsZoom:function(t,e,n){t=G(t),n=U(n||[0,0]);var i=this.getZoom()||0,o=this.getMinZoom(),r=this.getMaxZoom(),a=t.getNorthWest(),s=t.getSouthEast(),l=this.getSize().subtract(n),u=W(this.project(s,i),this.project(a,i)).getSize(),c=tR.any3d?this.options.zoomSnap:1,h=l.x/u.x,d=l.y/u.y,f=e?Math.max(h,d):Math.min(h,d);return i=this.getScaleZoom(f,i),c&&(i=Math.round(i/(c/100))*(c/100),i=e?Math.ceil(i/c)*c:Math.floor(i/c)*c),Math.max(o,Math.min(r,i))},// @method getSize(): Point
// Returns the current size of the map container (in pixels).
getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new F(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},// @method getPixelBounds(): Bounds
// Returns the bounds of the current map view in projected pixel
// coordinates (sometimes useful in layer and overlay implementations).
getPixelBounds:function(t,e){var n=this._getTopLeftPoint(t,e);return new H(n,n.add(this.getSize()))},// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
// the map pane? "left point of the map layer" can be confusing, specially
// since there can be negative offsets.
// @method getPixelOrigin(): Point
// Returns the projected pixel coordinates of the top left point of
// the map layer (useful in custom layer and overlay implementations).
getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},// @method getPixelWorldBounds(zoom?: Number): Bounds
// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
// If `zoom` is omitted, the map's current zoom level is used.
getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},// @section Other Methods
// @method getPane(pane: String|HTMLElement): HTMLElement
// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
getPane:function(t){return"string"==typeof t?this._panes[t]:t},// @method getPanes(): Object
// Returns a plain object containing the names of all [panes](#map-pane) as keys and
// the panes as values.
getPanes:function(){return this._panes},// @method getContainer: HTMLElement
// Returns the HTML element that contains the map.
getContainer:function(){return this._container},// @section Conversion Methods
// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
// Returns the scale factor to be applied to a map transition from zoom level
// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
getZoomScale:function(t,e){// TODO replace with universal implementation after refactoring projections
var n=this.options.crs;return e=void 0===e?this._zoom:e,n.scale(t)/n.scale(e)},// @method getScaleZoom(scale: Number, fromZoom: Number): Number
// Returns the zoom level that the map would end up at, if it is at `fromZoom`
// level and everything is scaled by a factor of `scale`. Inverse of
// [`getZoomScale`](#map-getZoomScale).
getScaleZoom:function(t,e){var n=this.options.crs;e=void 0===e?this._zoom:e;var i=n.zoom(t*n.scale(e));return isNaN(i)?1/0:i},// @method project(latlng: LatLng, zoom: Number): Point
// Projects a geographical coordinate `LatLng` according to the projection
// of the map's CRS, then scales it according to `zoom` and the CRS's
// `Transformation`. The result is pixel coordinate relative to
// the CRS origin.
project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(q(t),e)},// @method unproject(point: Point, zoom: Number): LatLng
// Inverse of [`project`](#map-project).
unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(U(t),e)},// @method layerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding geographical coordinate (for the current zoom level).
layerPointToLatLng:function(t){var e=U(t).add(this.getPixelOrigin());return this.unproject(e)},// @method latLngToLayerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the [origin pixel](#map-getpixelorigin).
latLngToLayerPoint:function(t){return this.project(q(t))._round()._subtract(this.getPixelOrigin())},// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
// CRS's bounds.
// By default this means longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees.
wrapLatLng:function(t){return this.options.crs.wrapLatLng(q(t))},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring that
// its center is within the CRS's bounds.
// By default this means the center longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees, and the majority of the bounds
// overlaps the CRS's bounds.
wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(G(t))},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates according to
// the map's CRS. By default this measures distance in meters.
distance:function(t,e){return this.options.crs.distance(q(t),q(e))},// @method containerPointToLayerPoint(point: Point): Point
// Given a pixel coordinate relative to the map container, returns the corresponding
// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
containerPointToLayerPoint:function(t){return U(t).subtract(this._getMapPanePos())},// @method layerPointToContainerPoint(point: Point): Point
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding pixel coordinate relative to the map container.
layerPointToContainerPoint:function(t){return U(t).add(this._getMapPanePos())},// @method containerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the map container, returns
// the corresponding geographical coordinate (for the current zoom level).
containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(U(t));return this.layerPointToLatLng(e)},// @method latLngToContainerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the map container.
latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(q(t)))},// @method mouseEventToContainerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to the
// map container where the event took place.
mouseEventToContainerPoint:function(t){return eP(t,this._container)},// @method mouseEventToLayerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to
// the [origin pixel](#map-getpixelorigin) where the event took place.
mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},// @method mouseEventToLatLng(ev: MouseEvent): LatLng
// Given a MouseEvent object, returns geographical coordinate where the
// event took place.
mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},// map initialization methods
_initContainer:function(t){var e=this._container=tX(t);if(e){if(e._leaflet_id)throw Error("Map container is already initialized.")}else throw Error("Map container not found.");ed(e,"scroll",this._onScroll,this),this._containerId=m(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&tR.any3d,t5(t,"leaflet-container"+(tR.touch?" leaflet-touch":"")+(tR.retina?" leaflet-retina":"")+(tR.ielt9?" leaflet-oldie":"")+(tR.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=tJ(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},// @section
//
// Panes are DOM elements used to control the ordering of layers on the map. You
// can access panes with [`map.getPane`](#map-getpane) or
// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
// [`map.createPane`](#map-createpane) method.
//
// Every map has the following default panes that differ only in zIndex.
//
// @pane mapPane: HTMLElement = 'auto'
// Pane that contains all other map panes
this._mapPane=this.createPane("mapPane",this._container),ei(this._mapPane,new F(0,0)),// @pane tilePane: HTMLElement = 200
// Pane for `GridLayer`s and `TileLayer`s
this.createPane("tilePane"),// @pane overlayPane: HTMLElement = 400
// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
this.createPane("overlayPane"),// @pane shadowPane: HTMLElement = 500
// Pane for overlay shadows (e.g. `Marker` shadows)
this.createPane("shadowPane"),// @pane markerPane: HTMLElement = 600
// Pane for `Icon`s of `Marker`s
this.createPane("markerPane"),// @pane tooltipPane: HTMLElement = 650
// Pane for `Tooltip`s.
this.createPane("tooltipPane"),// @pane popupPane: HTMLElement = 700
// Pane for `Popup`s.
this.createPane("popupPane"),this.options.markerZoomAnimation||(t5(t.markerPane,"leaflet-zoom-hide"),t5(t.shadowPane,"leaflet-zoom-hide"))},// private methods that modify map state
// @section Map state change events
_resetView:function(t,e,n){ei(this._mapPane,new F(0,0));var i=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,n)._move(t,e)._moveEnd(o),// @event viewreset: Event
// Fired when the map needs to redraw its content (this usually happens
// on map zoom or load). Very useful for creating custom overlays.
this.fire("viewreset"),i&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,n,i){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),i?n&&n.pinch&&this.fire("zoom",n):((o||n&&n.pinch)&&this.fire("zoom",n),// @event move: Event
// Fired repeatedly during any movement of the map,
// including pan and fly animations.
this.fire("move",n)),this},_moveEnd:function(t){// @event moveend: Event
// Fired when the center of the map stops changing
// (e.g. user stopped dragging the map or after non-centered zoom).
return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return R(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){ei(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error("Set map center and zoom first.")},// DOM event handling
// @section Interaction events
_initEvents:function(t){this._targets={},this._targets[m(this._container)]=this;var e=t?ep:ed;// @event click: MouseEvent
// Fired when the user clicks (or taps) the map.
// @event dblclick: MouseEvent
// Fired when the user double-clicks (or double-taps) the map.
// @event mousedown: MouseEvent
// Fired when the user pushes the mouse button on the map.
// @event mouseup: MouseEvent
// Fired when the user releases the mouse button on the map.
// @event mouseover: MouseEvent
// Fired when the mouse enters the map.
// @event mouseout: MouseEvent
// Fired when the mouse leaves the map.
// @event mousemove: MouseEvent
// Fired while the mouse moves over the map.
// @event contextmenu: MouseEvent
// Fired when the user pushes the right mouse button on the map, prevents
// default browser context menu from showing if there are listeners on
// this event. Also fired on mobile when the user holds a single touch
// for a second (also called long press).
// @event keypress: KeyboardEvent
// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
// @event keydown: KeyboardEvent
// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
// the `keydown` event is fired for keys that produce a character value and for keys
// that do not produce a character value.
// @event keyup: KeyboardEvent
// Fired when the user releases a key from the keyboard while the map is focused.
e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),tR.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){R(this._resizeRequest),this._resizeRequest=A(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&// a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/
this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var n,i=[],o="mouseout"===e||"mouseover"===e,r=t.target||t.srcElement,a=!1;r;){if((n=this._targets[m(r)])&&("click"===e||"preclick"===e)&&this._draggableMoved(n)){// Prevent firing click after you just dragged an object.
a=!0;break}if(n&&n.listens(e,!0)&&(o&&!eE(r,t)||(i.push(n),o))||r===this._container)break;r=r.parentNode}return!i.length&&!a&&!o&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(e))){var n=t.type;"mousedown"===n&&el(e),this._fireDOMEvent(t,n)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,n,i){if("click"===t.type){// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
// @event preclick: MouseEvent
// Fired before mouse click on the map (sometimes useful when you
// want something to happen on click before any existing click
// handlers start running).
var o=e({},t);o.type="preclick",this._fireDOMEvent(o,o.type,i)}// Find the layer the event is propagating from and its parents.
var r=this._findEventTargets(t,n);if(i){for(var a=[],s=0;s<i.length;s++)i[s].listens(n,!0)&&a.push(i[s]);r=a.concat(r)}if(r.length){"contextmenu"===n&&ex(t);var l=r[0],u={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var c=l.getLatLng&&(!l._radius||l._radius<=10);u.containerPoint=c?this.latLngToContainerPoint(l.getLatLng()):this.mouseEventToContainerPoint(t),u.layerPoint=this.containerPointToLayerPoint(u.containerPoint),u.latlng=c?l.getLatLng():this.layerPointToLatLng(u.layerPoint)}for(s=0;s<r.length;s++)if(r[s].fire(n,u,!0),u.originalEvent._stopped||!1===r[s].options.bubblingMouseEvents&&-1!==E(this._mouseEvents,n))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},// @section Other Methods
// @method whenReady(fn: Function, context?: Object): this
// Runs the given function `fn` when the map gets initialized with
// a view (center and zoom) and at least one layer, or immediately
// if it's already initialized, optionally passing a function context.
whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},// private methods for getting map state
_getMapPanePos:function(){return eo(this._mapPane)||new F(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var n=this.getSize()._divideBy(2);return this.project(t,e)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,n){var i=this._getNewPixelOrigin(n,e);return this.project(t,e)._subtract(i)},_latLngBoundsToNewLayerBounds:function(t,e,n){var i=this._getNewPixelOrigin(n,e);return W([this.project(t.getSouthWest(),e)._subtract(i),this.project(t.getNorthWest(),e)._subtract(i),this.project(t.getSouthEast(),e)._subtract(i),this.project(t.getNorthEast(),e)._subtract(i)])},// layer point of the current center
_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},// offset of the specified place to the current center in pixels
_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},// adjust center for view to get inside bounds
_limitCenter:function(t,e,n){if(!n)return t;var i=this.project(t,e),o=this.getSize().divideBy(2),r=new H(i.subtract(o),i.add(o)),a=this._getBoundsOffset(r,n,e);return(// If offset is less than a pixel, ignore.
// This prevents unstable projections from getting into
// an infinite loop of tiny offsets.
1>=Math.abs(a.x)&&1>=Math.abs(a.y)?t:this.unproject(i.add(a),e))},// adjust offset for view to get inside bounds
_limitOffset:function(t,e){if(!e)return t;var n=this.getPixelBounds(),i=new H(n.min.add(t),n.max.add(t));return t.add(this._getBoundsOffset(i,e))},// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
_getBoundsOffset:function(t,e,n){var i=W(this.project(e.getNorthEast(),n),this.project(e.getSouthWest(),n)),o=i.min.subtract(t.min),r=i.max.subtract(t.max),a=this._rebound(o.x,-r.x),s=this._rebound(o.y,-r.y);return new F(a,s)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),n=this.getMaxZoom(),i=tR.any3d?this.options.zoomSnap:1;return i&&(t=Math.round(t/i)*i),Math.max(e,Math.min(n,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){t6(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){// difference between the new and current centers in pixels
var n=this._getCenterOffset(t)._trunc();return(// don't animate too far unless animate: true specified in options
!!(!0===(e&&e.animate)||this.getSize().contains(n))&&(this.panBy(n,e),!0))},_createAnimProxy:function(){var t=this._proxy=t0("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=this._proxy.style[tK];en(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[tK]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){t1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();en(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,n){if(this._animatingZoom)return!0;// don't animate if disabled, not supported or zoom difference is too large
if(n=n||{},!this._zoomAnimated||!1===n.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;// offset is the pixel coords of the zoom origin relative to the current center
var i=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/i);return(// don't animate if the zoom origin isn't within one screen from the current center, unless forced
!!(!0===n.animate||this.getSize().contains(o))&&(A(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0))},_animateZoom:function(t,e,n,i){this._mapPane&&(n&&(this._animatingZoom=!0,// remember what center/zoom to set after animation
this._animateToCenter=t,this._animateToZoom=e,t5(this._mapPane,"leaflet-zoom-anim")),// @section Other Events
// @event zoomanim: ZoomAnimEvent
// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
this.fire("zoomanim",{center:t,zoom:e,noUpdate:i}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
setTimeout(f(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&t6(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}}),eM=D.extend({// @section
// @aka Control Options
options:{// @option position: String = 'topright'
// The position of the control (one of the map corners). Possible values are `'topleft'`,
// `'topright'`, `'bottomleft'` or `'bottomright'`
position:"topright"},initialize:function(t){x(this,t)},/* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */getPosition:function(){return this.options.position},// @method setPosition(position: string): this
// Sets the position of the control.
setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},// @method getContainer: HTMLElement
// Returns the HTMLElement that contains the control.
getContainer:function(){return this._container},// @method addTo(map: Map): this
// Adds the control to the given map.
addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),n=this.getPosition(),i=t._controlCorners[n];return t5(e,"leaflet-control"),-1!==n.indexOf("bottom")?i.insertBefore(e,i.firstChild):i.appendChild(e),this._map.on("unload",this.remove,this),this},// @method remove: this
// Removes the control from the map it is currently active on.
remove:function(){return this._map&&(t1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),eO=function(t){return new eM(t)};/* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   *//* @namespace Map
   * @section Methods for Layers and Controls
   */ez.include({// @method addControl(control: Control): this
// Adds the given control to the map
addControl:function(t){return t.addTo(this),this},// @method removeControl(control: Control): this
// Removes the given control from the map
removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",n=this._controlContainer=t0("div",e+"control-container",this._container);function i(i,o){var r=e+i+" "+e+o;t[i+o]=t0("div",r,n)}i("top","left"),i("top","right"),i("bottom","left"),i("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)t1(this._controlCorners[t]);t1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});/*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */var eI=eM.extend({// @section
// @aka Control.Layers options
options:{// @option collapsed: Boolean = true
// If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
collapsed:!0,position:"topright",// @option autoZIndex: Boolean = true
// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
autoZIndex:!0,// @option hideSingleBase: Boolean = false
// If `true`, the base layers in the control will be hidden when there is only one.
hideSingleBase:!1,// @option sortLayers: Boolean = false
// Whether to sort the layers. When `false`, layers will keep the order
// in which they were added to the control.
sortLayers:!1,// @option sortFunction: Function = *
// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// that will be used for sorting the layers, when `sortLayers` is `true`.
// The function receives both the `L.Layer` instances and their names, as in
// `sortFunction(layerA, layerB, nameA, nameB)`.
// By default, it sorts layers alphabetically by their name.
sortFunction:function(t,e,n,i){return n<i?-1:i<n?1:0}},initialize:function(t,e,n){for(var i in x(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[i],i);for(i in e)this._addLayer(e[i],i,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
return eM.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},// @method addBaseLayer(layer: Layer, name: String): this
// Adds a base layer (radio button entry) with the given name to the control.
addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},// @method addOverlay(layer: Layer, name: String): this
// Adds an overlay (checkbox entry) with the given name to the control.
addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},// @method removeLayer(layer: Layer): this
// Remove the given layer from the control.
removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(m(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},// @method expand(): this
// Expand the control container if collapsed.
expand:function(){t5(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(t5(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):t6(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},// @method collapse(): this
// Collapse the control container if expanded.
collapse:function(){return t6(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=t0("div",t),n=this.options.collapsed;// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
e.setAttribute("aria-haspopup",!0),ew(e),eb(e);var i=this._section=t0("section",t+"-list");n&&(this._map.on("click",this.collapse,this),ed(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=t0("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),ed(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},// Certain screen readers intercept the key event and instead send a click event
click:function(t){ex(t),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=t0("div",t+"-base",i),this._separator=t0("div",t+"-separator",i),this._overlaysList=t0("div",t+"-overlays",i),e.appendChild(i)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&m(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:n}),this.options.sortLayers&&this._layers.sort(f(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;t2(this._baseLayersList),t2(this._overlaysList),this._layerControlInputs=[];var t,e,n,i,o=0;for(n=0;n<this._layers.length;n++)i=this._layers[n],this._addItem(i),e=e||i.overlay,t=t||!i.overlay,o+=i.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(m(t.target)),n=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;n&&this._map.fire(n,e)},// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
_createRadioElement:function(t,e){var n=document.createElement("div");return n.innerHTML='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n.firstChild},_addItem:function(t){var e,n=document.createElement("label"),i=this._map.hasLayer(t.layer);t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=i):e=this._createRadioElement("leaflet-base-layers_"+m(this),i),this._layerControlInputs.push(e),e.layerId=m(t.layer),ed(e,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;// Helps from preventing layer control flicker when checkboxes are disabled
// https://github.com/Leaflet/Leaflet/issues/2771
var r=document.createElement("span");return n.appendChild(r),r.appendChild(e),r.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(n),this._checkDisabledLayers(),n},_onInputClick:function(){// expanding the control on mobile with a click can cause adding a layer - we don't want this
if(!this._preventClick){var t,e,n=this._layerControlInputs,i=[],o=[];this._handlingClick=!0;for(var r=n.length-1;r>=0;r--)t=n[r],e=this._getLayer(t.layerId).layer,t.checked?i.push(e):t.checked||o.push(e);// Bugfix issue 2318: Should remove all old layers before readding new ones
for(r=0;r<o.length;r++)this._map.hasLayer(o[r])&&this._map.removeLayer(o[r]);for(r=0;r<i.length;r++)this._map.hasLayer(i[r])||this._map.addLayer(i[r]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,n=this._layerControlInputs,i=this._map.getZoom(),o=n.length-1;o>=0;o--)t=n[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&i<e.options.minZoom||void 0!==e.options.maxZoom&&i>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,ed(t,"click",ex),this.expand();var e=this;setTimeout(function(){ep(t,"click",ex),e._preventClick=!1})}}),eN=eM.extend({// @section
// @aka Control.Zoom options
options:{position:"topleft",// @option zoomInText: String = '<span aria-hidden="true">+</span>'
// The text set on the 'zoom in' button.
zoomInText:'<span aria-hidden="true">+</span>',// @option zoomInTitle: String = 'Zoom in'
// The title set on the 'zoom in' button.
zoomInTitle:"Zoom in",// @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
// The text set on the 'zoom out' button.
zoomOutText:'<span aria-hidden="true">&#x2212;</span>',// @option zoomOutTitle: String = 'Zoom out'
// The title set on the 'zoom out' button.
zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",n=t0("div",e+" leaflet-bar"),i=this.options;return this._zoomInButton=this._createButton(i.zoomInText,i.zoomInTitle,e+"-in",n,this._zoomIn),this._zoomOutButton=this._createButton(i.zoomOutText,i.zoomOutTitle,e+"-out",n,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),n},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,n,i,o){var r=t0("a",n,i);return r.innerHTML=t,r.href="#",r.title=e,/*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */r.setAttribute("role","button"),r.setAttribute("aria-label",e),ew(r),ed(r,"click",ek),ed(r,"click",o,this),ed(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";t6(this._zoomInButton,e),t6(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(t5(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(t5(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
ez.mergeOptions({zoomControl:!0}),ez.addInitHook(function(){this.options.zoomControl&&(// @section Controls
// @property zoomControl: Control.Zoom
// The default zoom control (only available if the
// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
this.zoomControl=new eN,this.addControl(this.zoomControl))});/*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */var eA=eM.extend({// @section
// @aka Control.Scale options
options:{position:"bottomleft",// @option maxWidth: Number = 100
// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
maxWidth:100,// @option metric: Boolean = True
// Whether to show the metric scale line (m/km).
metric:!0,// @option imperial: Boolean = True
// Whether to show the imperial scale line (mi/ft).
imperial:!0},onAdd:function(t){var e="leaflet-control-scale",n=t0("div",e),i=this.options;return this._addScales(i,e+"-line",n),t.on(i.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),n},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,n){t.metric&&(this._mScale=t0("div",e,n)),t.imperial&&(this._iScale=t0("div",e,n))},_update:function(){var t=this._map,e=t.getSize().y/2,n=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(n)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),n=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,n,e/t)},_updateImperial:function(t){var e,n,i,o=3.2808399*t;o>5280?(e=o/5280,n=this._getRoundNum(e),this._updateScale(this._iScale,n+" mi",n/e)):(i=this._getRoundNum(o),this._updateScale(this._iScale,i+" ft",i/o))},_updateScale:function(t,e,n){t.style.width=Math.round(this.options.maxWidth*n)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),n=t/e;return e*(n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1)}}),eR=eM.extend({// @section
// @aka Control.Attribution options
options:{position:"bottomright",// @option prefix: String|false = 'Leaflet'
// The HTML text shown before the attributions. Pass `false` to disable.
prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(tR.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){x(this,t),this._attributions={}},onAdd:function(t){// TODO ugly, refactor
for(var e in t.attributionControl=this,this._container=t0("div","leaflet-control-attribution"),ew(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},// @method setPrefix(prefix: String|false): this
// The HTML text shown before the attributions. Pass `false` to disable.
setPrefix:function(t){return this.options.prefix=t,this._update(),this},// @method addAttribution(text: String): this
// Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},// @method removeAttribution(text: String): this
// Removes an attribution text.
removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var n=[];this.options.prefix&&n.push(this.options.prefix),t.length&&n.push(t.join(", ")),this._container.innerHTML=n.join(' <span aria-hidden="true">|</span> ')}}});// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
ez.mergeOptions({attributionControl:!0}),ez.addInitHook(function(){this.options.attributionControl&&new eR().addTo(this)}),eM.Layers=eI,eM.Zoom=eN,eM.Scale=eA,eM.Attribution=eR,eO.layers=function(t,e,n){return new eI(t,e,n)},eO.zoom=function(t){return new eN(t)},eO.scale=function(t){return new eA(t)},eO.attribution=function(t){return new eR(t)};/*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers
var eD=D.extend({initialize:function(t){this._map=t},// @method enable(): this
// Enables the handler
enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},// @method disable(): this
// Disables the handler
disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},// @method enabled(): Boolean
// Returns `true` if the handler is enabled
enabled:function(){return!!this._enabled}});// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
eD.addTo=function(t,e){return t.addHandler(e,this),this};/*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */var eB=tR.touch?"touchstart mousedown":"mousedown",eZ=Z.extend({options:{// @section
// @aka Draggable options
// @option clickTolerance: Number = 3
// The max number of pixels a user can shift the mouse pointer during a click
// for it to be considered a valid click (as opposed to a mouse drag).
clickTolerance:3},// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
initialize:function(t,e,n,i){x(this,i),this._element=t,this._dragStartTarget=e||t,this._preventOutline=n},// @method enable()
// Enables the dragging ability
enable:function(){this._enabled||(ed(this._dragStartTarget,eB,this._onDown,this),this._enabled=!0)},// @method disable()
// Disables the dragging ability
disable:function(){this._enabled&&(eZ._dragging===this&&this.finishDrag(!0),ep(this._dragStartTarget,eB,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(!(!this._enabled||(this._moved=!1,t8(this._element,"leaflet-zoom-anim")))){if(t.touches&&1!==t.touches.length){eZ._dragging===this&&this.finishDrag();return}if(!eZ._dragging&&!t.shiftKey&&(1===t.which||1===t.button||t.touches)&&(eZ._dragging=this,this._preventOutline&&el(this._element),ea(),n(),!this._moving)){// @event down: Event
// Fired when a drag is about to start.
this.fire("down");var e=t.touches?t.touches[0]:t,i=ec(this._element);this._startPoint=new F(e.clientX,e.clientY),this._startPos=eo(this._element),// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
this._parentScale=eh(i);var o="mousedown"===t.type;ed(document,o?"mousemove":"touchmove",this._onMove,this),ed(document,o?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&1===t.touches.length?t.touches[0]:t,n=new F(e.clientX,e.clientY)._subtract(this._startPoint);(n.x||n.y)&&(Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(// We assume that the parent container's position, border and scale do not change for the duration of the drag.
// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
// and we can use the cached value for the scale.
n.x/=this._parentScale.x,n.y/=this._parentScale.y,ex(t),this._moved||(// @event dragstart: Event
// Fired when a drag starts
this.fire("dragstart"),this._moved=!0,t5(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),t5(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=t,this._updatePosition()))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};// @event predrag: Event
// Fired continuously during dragging *before* each corresponding
// update of the element's position.
this.fire("predrag",t),ei(this._element,this._newPos),// @event drag: Event
// Fired continuously during dragging.
this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){t6(document.body,"leaflet-dragging"),this._lastTarget&&(t6(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ep(document,"mousemove touchmove",this._onMove,this),ep(document,"mouseup touchend touchcancel",this._onUp,this),es(),i();var e=this._moved&&this._moving;this._moving=!1,eZ._dragging=!1,e&&// Fired when the drag ends.
this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});/*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   *//* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */function eF(t,e,n){var i,o,r,a,s,l,u,c,h,d=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=e$(t[o],e);// for each edge (left, bottom, right, top)
for(a=0;a<4;a++){for(o=0,c=d[a],i=[],r=(u=t.length)-1;o<u;r=o++)s=t[o],l=t[r],s._code&c?l._code&c||((h=eG(l,s,c,e,n))._code=e$(h,e),i.push(h)):(l._code&c&&((h=eG(l,s,c,e,n))._code=e$(h,e),i.push(h)),i.push(s));t=i}return t}/* @function polygonCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polygon.
   */function ej(t,e){if(!t||0===t.length)throw Error("latlngs not passed");eK(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var n,i,o,r,a,s,l,u,c,h=q([0,0]),d=G(t);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(h=eU(t));var f=t.length,p=[];for(n=0;n<f;n++){var m=q(t[n]);p.push(e.project(q([m.lat-h.lat,m.lng-h.lng])))}// polygon centroid algorithm;
for(n=0,s=l=u=0,i=f-1;n<f;i=n++)o=p[n],r=p[i],a=o.y*r.x-r.y*o.x,l+=(o.x+r.x)*a,u+=(o.y+r.y)*a,s+=3*a;c=0===s?p[0]:[l/s,u/s];var _=e.unproject(U(c));return q([_.lat+h.lat,_.lng+h.lng])}/* @function centroid(latlngs: LatLng[]): LatLng
   * Returns the 'center of mass' of the passed LatLngs.
   */function eU(t){for(var e=0,n=0,i=0,o=0;o<t.length;o++){var r=q(t[o]);e+=r.lat,n+=r.lng,i++}return q([e/i,n/i])}/*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.
// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Ramer-Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](https://mourner.github.io/simplify-js/).
function eH(t,e){if(!e||!t.length)return t.slice();var n=e*e;return(// stage 2: Douglas-Peucker simplification
t=// Ramer-Douglas-Peucker simplification, see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
function(t,e){var n=t.length,i=new("undefined"!=typeof Uint8Array?Uint8Array:Array)(n);i[0]=i[n-1]=1,function t(e,n,i,o,r){var a,s,l,u=0;for(s=o+1;s<=r-1;s++)(l=eq(e[s],e[o],e[r],!0))>u&&(a=s,u=l);u>i&&(n[a]=1,t(e,n,i,o,a),t(e,n,i,a,r))}(t,i,e,0,n-1);var o,r=[];for(o=0;o<n;o++)i[o]&&r.push(t[o]);return r}(// stage 1: vertex reduction
t=// reduce points that are too close to each other to a single point
function(t,e){for(var n=[t[0]],i=1,o=0,r=t.length;i<r;i++)// square distance (to avoid unnecessary Math.sqrt calls)
(function(t,e){var n=e.x-t.x,i=e.y-t.y;return n*n+i*i})(t[i],t[o])>e&&(n.push(t[i]),o=i);return o<r-1&&n.push(t[r-1]),n}(t,n),n))}// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function eW(t,e,n){return Math.sqrt(eq(t,e,n,!0))}// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function eV(t,e,n,i,o){var r,a,l,u=i?s:e$(t,n),c=e$(e,n);for(// save 2nd code to avoid calculating it on the next segment
s=c;;){// if a,b is inside the clip window (trivial accept)
if(!(u|c))return[t,e];// if a,b is outside the clip window (trivial reject)
if(u&c)return!1;l=e$(a=eG(t,e,// other cases
r=u||c,n,o),n),r===u?(t=a,u=l):(e=a,c=l)}}function eG(t,e,n,i,o){var r,a,s=e.x-t.x,l=e.y-t.y,u=i.min,c=i.max;return 8&n?(r=t.x+s*(c.y-t.y)/l,a=c.y):4&n?(r=t.x+s*(u.y-t.y)/l,a=u.y):2&n?(r=c.x,a=t.y+l*(c.x-t.x)/s):1&n&&(r=u.x,a=t.y+l*(u.x-t.x)/s),new F(r,a,o)}function e$(t,e){var n=0;return t.x<e.min.x?n|=1:t.x>e.max.x&&(n|=2),t.y<e.min.y?n|=4:t.y>e.max.y&&(n|=8),n}// return closest point on segment or distance to that point
function eq(t,e,n,i){var o,r=e.x,a=e.y,s=n.x-r,l=n.y-a,u=s*s+l*l;return u>0&&((o=((t.x-r)*s+(t.y-a)*l)/u)>1?(r=n.x,a=n.y):o>0&&(r+=s*o,a+=l*o)),s=t.x-r,l=t.y-a,i?s*s+l*l:new F(r,a)}// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function eK(t){return!T(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function eQ(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),eK(t)}/* @function polylineCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polyline.
   */function eY(t,e){if(!t||0===t.length)throw Error("latlngs not passed");eK(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var n,i,o,r,a,s,l,u,c=q([0,0]),h=G(t);h.getNorthWest().distanceTo(h.getSouthWest())*h.getNorthEast().distanceTo(h.getNorthWest())<1700&&(c=eU(t));var d=t.length,f=[];for(n=0;n<d;n++){var p=q(t[n]);f.push(e.project(q([p.lat-c.lat,p.lng-c.lng])))}for(n=0,i=0;n<d-1;n++)i+=f[n].distanceTo(f[n+1])/2;// The line is so small in the current view that all points are on the same pixel.
if(0===i)u=f[0];else for(n=0,r=0;n<d-1;n++)if(a=f[n],s=f[n+1],(r+=o=a.distanceTo(s))>i){l=(r-i)/o,u=[s.x-l*(s.x-a.x),s.y-l*(s.y-a.y)];break}var m=e.unproject(U(u));return q([m.lat+c.lat,m.lng+c.lng])}/*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */var eX={project:function(t){return new F(t.lng,t.lat)},unproject:function(t){return new $(t.y,t.x)},bounds:new H([-180,-90],[180,90])},eJ={R:6378137,R_MINOR:6356752.314245179,bounds:new H([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,n=this.R,i=t.lat*e,o=this.R_MINOR/n,r=Math.sqrt(1-o*o),a=r*Math.sin(i);return i=-n*Math.log(Math.max(Math.tan(Math.PI/4-i/2)/Math.pow((1-a)/(1+a),r/2),1e-10)),new F(t.lng*e*n,i)},unproject:function(t){for(var e,n=180/Math.PI,i=this.R,o=this.R_MINOR/i,r=Math.sqrt(1-o*o),a=Math.exp(-t.y/i),s=Math.PI/2-2*Math.atan(a),l=0,u=.1;l<15&&Math.abs(u)>1e-7;l++)u=Math.PI/2-2*Math.atan(a*(e=Math.pow((1-(e=r*Math.sin(s)))/(1+e),r/2)))-s,s+=u;return new $(s*n,t.x*n/i)}},e0=e({},Q,{code:"EPSG:3395",projection:eJ,transformation:J(h=.5/(Math.PI*eJ.R),.5,-h,.5)}),e1=e({},Q,{code:"EPSG:4326",projection:eX,transformation:J(1/180,1,-1/180,.5)}),e2=e({},K,{projection:eX,transformation:J(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var n=e.lng-t.lng,i=e.lat-t.lat;return Math.sqrt(n*n+i*i)},infinite:!0});K.Earth=Q,K.EPSG3395=e0,K.EPSG3857=tt,K.EPSG900913=te,K.EPSG4326=e1,K.Simple=e2;/*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */var e3=Z.extend({// Classes extending `L.Layer` will inherit the following options:
options:{// @option pane: String = 'overlayPane'
// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
pane:"overlayPane",// @option attribution: String = null
// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
attribution:null,bubblingMouseEvents:!0},/* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */addTo:function(t){return t.addLayer(this),this},// @method remove: this
// Removes the layer from the map it is currently active on.
remove:function(){return this.removeFrom(this._map||this._mapToAdd)},// @method removeFrom(map: Map): this
// Removes the layer from the given map
//
// @alternative
// @method removeFrom(group: LayerGroup): this
// Removes the layer from the given `LayerGroup`
removeFrom:function(t){return t&&t.removeLayer(this),this},// @method getPane(name? : String): HTMLElement
// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[m(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[m(t)],this},// @method getAttribution: String
// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;// check in case layer gets added and then removed before the map is ready
if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var n=this.getEvents();e.on(n,this),this.once("remove",function(){e.off(n,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});/* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   *//* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */ez.include({// @method addLayer(layer: Layer): this
// Adds the given layer to the map
addLayer:function(t){if(!t._layerAdd)throw Error("The provided object is not a Layer.");var e=m(t);return this._layers[e]||(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the map.
removeLayer:function(t){var e=m(t);return this._layers[e]&&(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the map
hasLayer:function(t){return m(t) in this._layers},/* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */eachLayer:function(t,e){for(var n in this._layers)t.call(e,this._layers[n]);return this},_addLayers:function(t){t=t?T(t)?t:[t]:[];for(var e=0,n=t.length;e<n;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[m(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=m(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,n=this._getZoomSpan();for(var i in this._zoomBoundLayers){var o=this._zoomBoundLayers[i].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),e=void 0===o.maxZoom?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});/*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Interactive layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */var e4=e3.extend({initialize:function(t,e){var n,i;if(x(this,e),this._layers={},t)for(n=0,i=t.length;n<i;n++)this.addLayer(t[n])},// @method addLayer(layer: Layer): this
// Adds the given layer to the group.
addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the group.
// @alternative
// @method removeLayer(id: Number): this
// Removes the layer with the given internal ID from the group.
removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the group.
// @alternative
// @method hasLayer(id: Number): Boolean
// Returns `true` if the given internal ID is currently added to the group.
hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},// @method clearLayers(): this
// Removes all the layers from the group.
clearLayers:function(){return this.eachLayer(this.removeLayer,this)},// @method invoke(methodName: String, …): this
// Calls `methodName` on every layer contained in this group, passing any
// additional parameters. Has no effect if the layers contained do not
// implement `methodName`.
invoke:function(t){var e,n,i=Array.prototype.slice.call(arguments,1);for(e in this._layers)(n=this._layers[e])[t]&&n[t].apply(n,i);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},// @method eachLayer(fn: Function, context?: Object): this
// Iterates over the layers of the group, optionally specifying context of the iterator function.
// ```js
// group.eachLayer(function (layer) {
// 	layer.bindPopup('Hello');
// });
// ```
eachLayer:function(t,e){for(var n in this._layers)t.call(e,this._layers[n]);return this},// @method getLayer(id: Number): Layer
// Returns the layer with the given internal ID.
getLayer:function(t){return this._layers[t]},// @method getLayers(): Layer[]
// Returns an array of all the layers added to the group.
getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},// @method setZIndex(zIndex: Number): this
// Calls `setZIndex` on every layer contained in this group, passing the z-index.
setZIndex:function(t){return this.invoke("setZIndex",t)},// @method getLayerId(layer: Layer): Number
// Returns the internal ID for a layer
getLayerId:function(t){return m(t)}}),e8=e4.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),e4.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),e4.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},// @method setStyle(style: Path options): this
// Sets the given path options to each layer of the group that has a `setStyle` method.
setStyle:function(t){return this.invoke("setStyle",t)},// @method bringToFront(): this
// Brings the layer group to the top of all other layers
bringToFront:function(){return this.invoke("bringToFront")},// @method bringToBack(): this
// Brings the layer group to the back of all other layers
bringToBack:function(){return this.invoke("bringToBack")},// @method getBounds(): LatLngBounds
// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
getBounds:function(){var t=new V;for(var e in this._layers){var n=this._layers[e];t.extend(n.getBounds?n.getBounds():n.getLatLng())}return t}}),e5=D.extend({/* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */options:{popupAnchor:[0,0],tooltipAnchor:[0,0],// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1},initialize:function(t){x(this,t)},// @method createIcon(oldIcon?: HTMLElement): HTMLElement
// Called internally when the icon has to be shown, returns a `<img>` HTML element
// styled according to the options.
createIcon:function(t){return this._createIcon("icon",t)},// @method createShadow(oldIcon?: HTMLElement): HTMLElement
// As `createIcon`, but for the shadow beneath it.
createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var n=this._getIconUrl(t);if(!n){if("icon"===t)throw Error("iconUrl not set in Icon options (see the docs).");return null}var i=this._createImg(n,e&&"IMG"===e.tagName?e:null);return this._setIconStyles(i,t),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i},_setIconStyles:function(t,e){var n=this.options,i=n[e+"Size"];"number"==typeof i&&(i=[i,i]);var o=U(i),r=U("shadow"===e&&n.shadowAnchor||n.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(n.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return tR.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),e6=e5.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){// @option imagePath: String
// `Icon.Default` will try to auto-detect the location of the
// blue icon images. If you are placing these images in a non-standard
// way, set this option to point to the right path.
return"string"!=typeof e6.imagePath&&(e6.imagePath=this._detectIconPath()),(this.options.imagePath||e6.imagePath)+e5.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(t,e,n){var i=e.exec(t);return i&&i[n]};return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=t0("div","leaflet-default-icon-path",document.body),e=tJ(t,"background-image")||tJ(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e))return e;var n=document.querySelector('link[href$="leaflet.css"]');return n?n.href.substring(0,n.href.length-11-1):""}}),e9=eD.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new eZ(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),t5(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&t6(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,n=e._map,i=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,r=eo(e._icon),a=n.getPixelBounds(),s=n.getPixelOrigin(),l=W(a.min._subtract(s).add(o),a.max._subtract(s).subtract(o));if(!l.contains(r)){// Compute incremental movement
var u=U((Math.max(l.max.x,r.x)-l.max.x)/(a.max.x-l.max.x)-(Math.min(l.min.x,r.x)-l.min.x)/(a.min.x-l.min.x),(Math.max(l.max.y,r.y)-l.max.y)/(a.max.y-l.max.y)-(Math.min(l.min.y,r.y)-l.min.y)/(a.min.y-l.min.y)).multiplyBy(i);n.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),ei(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=A(this._adjustPan.bind(this,t))}},_onDragStart:function(){// @section Dragging events
// @event dragstart: Event
// Fired when the user starts dragging the marker.
// @event movestart: Event
// Fired when the marker starts moving (because of dragging).
this._oldLatLng=this._marker.getLatLng(),// When using ES6 imports it could not be set when `Popup` was not imported as well
this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(R(this._panRequest),this._panRequest=A(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,n=e._shadow,i=eo(e._icon),o=e._map.layerPointToLatLng(i);n&&ei(n,i),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,// @event drag: Event
// Fired repeatedly while the user drags the marker.
e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){// @event dragend: DragEndEvent
// Fired when the user stops dragging the marker.
R(this._panRequest),// @event moveend: Event
// Fired when the marker stops moving (because of dragging).
delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),e7=e3.extend({// @section
// @aka Marker options
options:{// @option icon: Icon = *
// Icon instance to use for rendering the marker.
// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
// If not specified, a common instance of `L.Icon.Default` is used.
icon:new e6,// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option keyboard: Boolean = true
// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
keyboard:!0,// @option title: String = ''
// Text for the browser tooltip that appear on marker hover (no tooltip by default).
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
title:"",// @option alt: String = 'Marker'
// Text for the `alt` attribute of the icon image.
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
alt:"Marker",// @option zIndexOffset: Number = 0
// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
zIndexOffset:0,// @option opacity: Number = 1.0
// The opacity of the marker.
opacity:1,// @option riseOnHover: Boolean = false
// If `true`, the marker will get on top of others when you hover the mouse over it.
riseOnHover:!1,// @option riseOffset: Number = 250
// The z-index offset used for the `riseOnHover` feature.
riseOffset:250,// @option pane: String = 'markerPane'
// `Map pane` where the markers icon will be added.
pane:"markerPane",// @option shadowPane: String = 'shadowPane'
// `Map pane` where the markers shadow will be added.
shadowPane:"shadowPane",// @option bubblingMouseEvents: Boolean = false
// When `true`, a mouse event on this marker will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!1,// @option autoPanOnFocus: Boolean = true
// When `true`, the map will pan whenever the marker is focused (via
// e.g. pressing `tab` on the keyboard) to ensure the marker is
// visible within the map's bounds
autoPanOnFocus:!0,// @section Draggable marker options
// @option draggable: Boolean = false
// Whether the marker is draggable with mouse/touch or not.
draggable:!1,// @option autoPan: Boolean = false
// Whether to pan the map when dragging this marker near its edge or not.
autoPan:!1,// @option autoPanPadding: Point = Point(50, 50)
// Distance (in pixels to the left/right and to the top/bottom) of the
// map edge to start panning the map.
autoPanPadding:[50,50],// @option autoPanSpeed: Number = 10
// Number of pixels the map should pan by.
autoPanSpeed:10},/* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */initialize:function(t,e){x(this,e),this._latlng=q(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},// @method getLatLng: LatLng
// Returns the current geographical position of the marker.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Changes the marker position to the given point.
setLatLng:function(t){var e=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=q(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},// @method setZIndexOffset(offset: Number): this
// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},// @method getIcon: Icon
// Returns the current icon used by the marker
getIcon:function(){return this.options.icon},// @method setIcon(icon: Icon): this
// Changes the marker icon.
setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),n=t.icon.createIcon(this._icon),i=!1;n!==this._icon&&(this._icon&&this._removeIcon(),i=!0,t.title&&(n.title=t.title),"IMG"===n.tagName&&(n.alt=t.alt||"")),t5(n,e),t.keyboard&&(n.tabIndex="0",n.setAttribute("role","button")),this._icon=n,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ed(n,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),r=!1;o!==this._shadow&&(this._removeShadow(),r=!0),o&&(t5(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),i&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&r&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ep(this._icon,"focus",this._panOnFocus,this),t1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&t1(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&ei(this._icon,t),this._shadow&&ei(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(t5(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),e9)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new e9(this),t&&this.dragging.enable()}},// @method setOpacity(opacity: Number): this
// Changes the opacity of the marker.
setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&et(this._icon,t),this._shadow&&et(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,n=e.iconSize?U(e.iconSize):U(0,0),i=e.iconAnchor?U(e.iconAnchor):U(0,0);t.panInside(this._latlng,{paddingTopLeft:i,paddingBottomRight:n.subtract(i)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),nt=e3.extend({// @section
// @aka Path options
options:{// @option stroke: Boolean = true
// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
stroke:!0,// @option color: String = '#3388ff'
// Stroke color
color:"#3388ff",// @option weight: Number = 3
// Stroke width in pixels
weight:3,// @option opacity: Number = 1.0
// Stroke opacity
opacity:1,// @option lineCap: String= 'round'
// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
lineCap:"round",// @option lineJoin: String = 'round'
// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
lineJoin:"round",// @option dashArray: String = null
// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashArray:null,// @option dashOffset: String = null
// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashOffset:null,// @option fill: Boolean = depends
// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
fill:!1,// @option fillColor: String = *
// Fill color. Defaults to the value of the [`color`](#path-color) option
fillColor:null,// @option fillOpacity: Number = 0.2
// Fill opacity.
fillOpacity:.2,// @option fillRule: String = 'evenodd'
// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
fillRule:"evenodd",// className: '',
// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option bubblingMouseEvents: Boolean = true
// When `true`, a mouse event on this path will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!0},beforeAdd:function(t){// Renderer is set here because we need to call renderer.getEvents
// before this.getEvents.
this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},// @method redraw(): this
// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
redraw:function(){return this._map&&this._renderer._updatePath(this),this},// @method setStyle(style: Path options): this
// Changes the appearance of a Path based on the options in the `Path options` object.
setStyle:function(t){return x(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},// @method bringToFront(): this
// Brings the layer to the top of all path layers.
bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},// @method bringToBack(): this
// Brings the layer to the bottom of all path layers.
bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){// defined in child classes
this._project(),this._update()},_clickTolerance:function(){// used when doing hit detection for Canvas layers
return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ne=nt.extend({// @section
// @aka CircleMarker options
options:{fill:!0,// @option radius: Number = 10
// Radius of the circle marker, in pixels
radius:10},initialize:function(t,e){x(this,e),this._latlng=q(t),this._radius=this.options.radius},// @method setLatLng(latLng: LatLng): this
// Sets the position of a circle marker to a new location.
setLatLng:function(t){var e=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=q(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},// @method getLatLng(): LatLng
// Returns the current geographical position of the circle marker
getLatLng:function(){return this._latlng},// @method setRadius(radius: Number): this
// Sets the radius of a circle marker. Units are in pixels.
setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of the circle
getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return nt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,n=this._clickTolerance(),i=[t+n,e+n];this._pxBounds=new H(this._point.subtract(i),this._point.add(i))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),nn=ne.extend({initialize:function(t,n,i){if("number"==typeof n&&(n=e({},i,{radius:n})),x(this,n),this._latlng=q(t),isNaN(this.options.radius))throw Error("Circle radius cannot be NaN");// @section
// @aka Circle options
// @option radius: Number; Radius of the circle, in meters.
this._mRadius=this.options.radius},// @method setRadius(radius: Number): this
// Sets the radius of a circle. Units are in meters.
setRadius:function(t){return this._mRadius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of a circle. Units are in meters.
getRadius:function(){return this._mRadius},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new V(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:nt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,n=this._map,i=n.options.crs;if(i.distance===Q.distance){var o=Math.PI/180,r=this._mRadius/Q.R/o,a=n.project([e+r,t]),s=n.project([e-r,t]),l=a.add(s).divideBy(2),u=n.unproject(l).lat,c=Math.acos((Math.cos(r*o)-Math.sin(e*o)*Math.sin(u*o))/(Math.cos(e*o)*Math.cos(u*o)))/o;(isNaN(c)||0===c)&&(c=r/Math.cos(Math.PI/180*e)),this._point=l.subtract(n.getPixelOrigin()),this._radius=isNaN(c)?0:l.x-n.project([u,t-c]).x,this._radiusY=l.y-a.y}else{var h=i.unproject(i.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(h).x}this._updateBounds()}}),ni=nt.extend({// @section
// @aka Polyline options
options:{// @option smoothFactor: Number = 1.0
// How much to simplify the polyline on each zoom level. More means
// better performance and smoother look, and less means more accurate representation.
smoothFactor:1,// @option noClip: Boolean = false
// Disable polyline clipping.
noClip:!1},initialize:function(t,e){x(this,e),this._setLatLngs(t)},// @method getLatLngs(): LatLng[]
// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
getLatLngs:function(){return this._latlngs},// @method setLatLngs(latlngs: LatLng[]): this
// Replaces all the points in the polyline with the given array of geographical points.
setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},// @method isEmpty(): Boolean
// Returns `true` if the Polyline has no LatLngs.
isEmpty:function(){return!this._latlngs.length},// @method closestLayerPoint(p: Point): Point
// Returns the point closest to `p` on the Polyline.
closestLayerPoint:function(t){for(var e,n,i=1/0,o=null,r=eq,a=0,s=this._parts.length;a<s;a++)for(var l=this._parts[a],u=1,c=l.length;u<c;u++){var h=r(t,e=l[u-1],n=l[u],!0);h<i&&(i=h,o=r(t,e,n))}return o&&(o.distance=Math.sqrt(i)),o},// @method getCenter(): LatLng
// Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return eY(this._defaultShape(),this._map.options.crs)},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){return this._bounds},// @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
// Adds a given point to the polyline. By default, adds to the first ring of
// the polyline in case of a multi-polyline, but can be overridden by passing
// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
addLatLng:function(t,e){return e=e||this._defaultShape(),t=q(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new V,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return eK(this._latlngs)?this._latlngs:this._latlngs[0]},// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
_convertLatLngs:function(t){for(var e=[],n=eK(t),i=0,o=t.length;i<o;i++)n?(e[i]=q(t[i]),this._bounds.extend(e[i])):e[i]=this._convertLatLngs(t[i]);return e},_project:function(){var t=new H;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new F(t,t);this._rawPxBounds&&(this._pxBounds=new H([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},// recursively turns latlngs into a set of rings with projected coordinates
_projectLatlngs:function(t,e,n){var i,o,r=t[0]instanceof $,a=t.length;if(r){for(i=0,o=[];i<a;i++)o[i]=this._map.latLngToLayerPoint(t[i]),n.extend(o[i]);e.push(o)}else for(i=0;i<a;i++)this._projectLatlngs(t[i],e,n)},// clip polyline by renderer bounds so that we have less to render for performance
_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}var e,n,i,o,r,a,s,l=this._parts;for(e=0,i=0,o=this._rings.length;e<o;e++)for(n=0,r=(s=this._rings[e]).length;n<r-1;n++)(a=eV(s[n],s[n+1],t,n,!0))&&(l[i]=l[i]||[],l[i].push(a[0]),(a[1]!==s[n+1]||n===r-2)&&(l[i].push(a[1]),i++))}},// simplify each clipped part of the polyline for performance
_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,n=0,i=t.length;n<i;n++)t[n]=eH(t[n],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t,e){var n,i,o,r,a,s,l=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// hit detection for polylines
for(n=0,r=this._parts.length;n<r;n++)for(i=0,o=(a=(s=this._parts[n]).length)-1;i<a;o=i++)if((e||0!==i)&&eW(t,s[o],s[i])<=l)return!0;return!1}});// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
ni._flat=eQ;/*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */var no=ni.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},// @method getCenter(): LatLng
// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return ej(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=ni.prototype._convertLatLngs.call(this,t),n=e.length;return n>=2&&e[0]instanceof $&&e[0].equals(e[n-1])&&e.pop(),e},_setLatLngs:function(t){ni.prototype._setLatLngs.call(this,t),eK(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return eK(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){// polygons need a different clipping algorithm so we redefine that
var t=this._renderer._bounds,e=this.options.weight,n=new F(e,e);if(// increase clip padding by stroke width to avoid stroke on clip edges
t=new H(t.min.subtract(n),t.max.add(n)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}for(var i,o=0,r=this._rings.length;o<r;o++)(i=eF(this._rings[o],t,!0)).length&&this._parts.push(i)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){var e,n,i,o,r,a,s,l,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// ray casting algorithm for detecting if point is in polygon
for(o=0,s=this._parts.length;o<s;o++)for(r=0,a=(l=(e=this._parts[o]).length)-1;r<l;a=r++)n=e[r],i=e[a],n.y>t.y!=i.y>t.y&&t.x<(i.x-n.x)*(t.y-n.y)/(i.y-n.y)+n.x&&(u=!u);// also check if it's on polygon stroke
return u||ni.prototype._containsPoint.call(this,t,!0)}}),nr=e8.extend({/* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */initialize:function(t,e){x(this,e),this._layers={},t&&this.addData(t)},// @method addData( <GeoJSON> data ): this
// Adds a GeoJSON object to the layer.
addData:function(t){var e,n,i,o=T(t)?t:t.features;if(o){for(e=0,n=o.length;e<n;e++)(// only add this if geometry or geometries are set and not null
(i=o[e]).geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var a=na(t,r);return a?(a.feature=nf(t),a.defaultOptions=a.options,this.resetStyle(a),r.onEachFeature&&r.onEachFeature(t,a),this.addLayer(a)):this},// @method resetStyle( <Path> layer? ): this
// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
// If `layer` is omitted, the style of all features in the current layer is reset.
resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(// reset any custom styles
t.options=e({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},// @method setStyle( <Function> style ): this
// Changes styles of GeoJSON vector layers with the given style function.
setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});// @section
// There are several static functions which can be called without instantiating L.GeoJSON:
// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function na(t,e){var n,i,o,r,a="Feature"===t.type?t.geometry:t,s=a?a.coordinates:null,l=[],u=e&&e.pointToLayer,c=e&&e.coordsToLatLng||nl;if(!s&&!a)return null;switch(a.type){case"Point":return ns(u,t,n=c(s),e);case"MultiPoint":for(o=0,r=s.length;o<r;o++)n=c(s[o]),l.push(ns(u,t,n,e));return new e8(l);case"LineString":case"MultiLineString":return i=nu(s,"LineString"===a.type?0:1,c),new ni(i,e);case"Polygon":case"MultiPolygon":return i=nu(s,"Polygon"===a.type?1:2,c),new no(i,e);case"GeometryCollection":for(o=0,r=a.geometries.length;o<r;o++){var h=na({geometry:a.geometries[o],type:"Feature",properties:t.properties},e);h&&l.push(h)}return new e8(l);case"FeatureCollection":for(o=0,r=a.features.length;o<r;o++){var d=na(a.features[o],e);d&&l.push(d)}return new e8(l);default:throw Error("Invalid GeoJSON object.")}}function ns(t,e,n,i){return t?t(e,n):new e7(n,i&&i.markersInheritOptions&&i)}// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function nl(t){return new $(t[1],t[0],t[2])}// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function nu(t,e,n){for(var i=[],o=0,r=t.length;o<r;o++)i.push(e?nu(t[o],e-1,n):(n||nl)(t[o]));return i}// @function latLngToCoords(latlng: LatLng, precision?: Number|false): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function nc(t,e){return void 0!==(t=q(t)).alt?[y(t.lng,e),y(t.lat,e),y(t.alt,e)]:[y(t.lng,e),y(t.lat,e)]}// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean, precision?: Number|false): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function nh(t,e,n,i){for(var o=[],r=0,a=t.length;r<a;r++)o.push(e?nh(t[r],eK(t[r])?0:e-1,n,i):nc(t[r],i));return!e&&n&&o.length>0&&o.push(o[0].slice()),o}function nd(t,n){return t.feature?e({},t.feature,{geometry:n}):nf(n)}// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function nf(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var np={toGeoJSON:function(t){return nd(this,{type:"Point",coordinates:nc(this.getLatLng(),t)})}};// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function nm(t,e){return new nr(t,e)}// @namespace Marker
// @section Other methods
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
e7.include(np),// @namespace CircleMarker
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
nn.include(np),ne.include(np),// @namespace Polyline
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
ni.include({toGeoJSON:function(t){var e=!eK(this._latlngs),n=nh(this._latlngs,e?1:0,!1,t);return nd(this,{type:(e?"Multi":"")+"LineString",coordinates:n})}}),// @namespace Polygon
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
no.include({toGeoJSON:function(t){var e=!eK(this._latlngs),n=e&&!eK(this._latlngs[0]),i=nh(this._latlngs,n?2:e?1:0,!0,t);return e||(i=[i]),nd(this,{type:(n?"Multi":"")+"Polygon",coordinates:i})}}),// @namespace LayerGroup
e4.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(n){e.push(n.toGeoJSON(t).geometry.coordinates)}),nd(this,{type:"MultiPoint",coordinates:e})},// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===e)return this.toMultiPoint(t);var n="GeometryCollection"===e,i=[];return(this.eachLayer(function(e){if(e.toGeoJSON){var o=e.toGeoJSON(t);if(n)i.push(o.geometry);else{var r=nf(o);"FeatureCollection"===r.type?i.push.apply(i,r.features):i.push(r)}}}),n)?nd(this,{geometries:i,type:"GeometryCollection"}):{type:"FeatureCollection",features:i}}});/*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */var n_=e3.extend({// @section
// @aka ImageOverlay options
options:{// @option opacity: Number = 1.0
// The opacity of the image overlay.
opacity:1,// @option alt: String = ''
// Text for the `alt` attribute of the image (useful for accessibility).
alt:"",// @option interactive: Boolean = false
// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
interactive:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the image.
// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option errorOverlayUrl: String = ''
// URL to the overlay image to show in place of the overlay that failed to load.
errorOverlayUrl:"",// @option zIndex: Number = 1
// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
zIndex:1,// @option className: String = ''
// A custom class name to assign to the image. Empty by default.
className:""},initialize:function(t,e,n){this._url=t,this._bounds=G(e),x(this,n)},onAdd:function(){!this._image&&(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(t5(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){t1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},// @method setOpacity(opacity: Number): this
// Sets the opacity of the overlay.
setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},// @method bringToFront(): this
// Brings the layer to the top of all overlays.
bringToFront:function(){return this._map&&t3(this._image),this},// @method bringToBack(): this
// Brings the layer to the bottom of all overlays.
bringToBack:function(){return this._map&&t4(this._image),this},// @method setUrl(url: String): this
// Changes the URL of the image.
setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},// @method setBounds(bounds: LatLngBounds): this
// Update the bounds that this ImageOverlay covers
setBounds:function(t){return this._bounds=G(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method setZIndex(value: Number): this
// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method getBounds(): LatLngBounds
// Get the bounds that this ImageOverlay covers
getBounds:function(){return this._bounds},// @method getElement(): HTMLElement
// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
// used by this overlay.
getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:t0("img");if(t5(e,"leaflet-image-layer"),this._zoomAnimated&&t5(e,"leaflet-zoom-animated"),this.options.className&&t5(e,this.options.className),e.onselectstart=v,e.onmousemove=v,// @event load: Event
// Fired when the ImageOverlay layer has loaded its image
e.onload=f(this.fire,this,"load"),e.onerror=f(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;en(this._image,n,e)},_reset:function(){var t=this._image,e=new H(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=e.getSize();ei(t,e.min),t.style.width=n.x+"px",t.style.height=n.y+"px"},_updateOpacity:function(){et(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){// @event error: Event
// Fired when the ImageOverlay layer fails to load its image
this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},// @method getCenter(): LatLng
// Returns the center of the ImageOverlay.
getCenter:function(){return this._bounds.getCenter()}}),ng=n_.extend({// @section
// @aka VideoOverlay options
options:{// @option autoplay: Boolean = true
// Whether the video starts playing automatically when loaded.
// On some browsers autoplay will only work with `muted: true`
autoplay:!0,// @option loop: Boolean = true
// Whether the video will loop back to the beginning when played.
loop:!0,// @option keepAspectRatio: Boolean = true
// Whether the video will save aspect ratio after the projection.
// Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
keepAspectRatio:!0,// @option muted: Boolean = false
// Whether the video starts on mute when loaded.
muted:!1,// @option playsInline: Boolean = true
// Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:t0("video");if(t5(e,"leaflet-image-layer"),this._zoomAnimated&&t5(e,"leaflet-zoom-animated"),this.options.className&&t5(e,this.options.className),e.onselectstart=v,e.onmousemove=v,// @event load: Event
// Fired when the video has finished loading the first frame
e.onloadeddata=f(this.fire,this,"load"),t){for(var n=e.getElementsByTagName("source"),i=[],o=0;o<n.length;o++)i.push(n[o].src);this._url=n.length>0?i:[e.src];return}T(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var r=0;r<this._url.length;r++){var a=t0("source");a.src=this._url[r],e.appendChild(a)}}}),nv=n_.extend({_initImage:function(){var t=this._image=this._url;t5(t,"leaflet-image-layer"),this._zoomAnimated&&t5(t,"leaflet-zoom-animated"),this.options.className&&t5(t,this.options.className),t.onselectstart=v,t.onmousemove=v}}),ny=e3.extend({// @section
// @aka DivOverlay options
options:{// @option interactive: Boolean = false
// If true, the popup/tooltip will listen to the mouse events.
interactive:!1,// @option offset: Point = Point(0, 0)
// The offset of the overlay position.
offset:[0,0],// @option className: String = ''
// A custom CSS class name to assign to the overlay.
className:"",// @option pane: String = undefined
// `Map pane` where the overlay will be added.
pane:void 0,// @option content: String|HTMLElement|Function = ''
// Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
// passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
content:""},initialize:function(t,e){t&&(t instanceof $||T(t))?(this._latlng=q(t),x(this,e)):(x(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},// @method openOn(map: Map): this
// Adds the overlay to the map.
// Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},// @method close(): this
// Closes the overlay.
// Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
// and `layer.closePopup()`/`.closeTooltip()`.
close:function(){return this._map&&this._map.removeLayer(this),this},// @method toggle(layer?: Layer): this
// Opens or closes the overlay bound to layer depending on its current state.
// Argument may be omitted only for overlay bound to layer.
// Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),// open the overlay on the map
this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&et(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&et(this._container,1),this.bringToFront(),this.options.interactive&&(t5(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(et(this._container,0),this._removeTimeout=setTimeout(f(t1,void 0,this._container),200)):t1(this._container),this.options.interactive&&(t6(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},// @namespace DivOverlay
// @method getLatLng: LatLng
// Returns the geographical point of the overlay.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Sets the geographical point where the overlay will open.
setLatLng:function(t){return this._latlng=q(t),this._map&&(this._updatePosition(),this._adjustPan()),this},// @method getContent: String|HTMLElement
// Returns the content of the overlay.
getContent:function(){return this._content},// @method setContent(htmlContent: String|HTMLElement|Function): this
// Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
// The function should return a `String` or `HTMLElement` to be used in the overlay.
setContent:function(t){return this._content=t,this.update(),this},// @method getElement: String|HTMLElement
// Returns the HTML container of the overlay.
getElement:function(){return this._container},// @method update: null
// Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method isOpen: Boolean
// Returns `true` when the overlay is visible on the map.
isOpen:function(){return!!this._map&&this._map.hasLayer(this)},// @method bringToFront: this
// Brings this overlay in front of other overlays (in the same map pane).
bringToFront:function(){return this._map&&t3(this._container),this},// @method bringToBack: this
// Brings this overlay to the back of other overlays (in the same map pane).
bringToBack:function(){return this._map&&t4(this._container),this},// prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof e8){e=null;var n=this._source._layers;for(var i in n)if(n[i]._map){e=n[i];break}if(!e)return!1;// Unable to get source layer.
// set overlay source to this layer
this._source=e}if(!t){if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw Error("Unable to get source layer LatLng.")}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}// @namespace DivOverlay
// @section DivOverlay events
// @event contentupdate: Event
// Fired when the content of the overlay is updated
this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=U(this.options.offset),n=this._getAnchor();this._zoomAnimated?ei(this._container,t.add(n)):e=e.add(t).add(n);var i=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;// bottom position the overlay in case the height of the overlay changes (images loading etc)
this._container.style.bottom=i+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});ez.include({_initOverlay:function(t,e,n,i){var o=e;return o instanceof t||(o=new t(i).setContent(e)),n&&o.setLatLng(n),o}}),e3.include({_initOverlay:function(t,e,n,i){var o=n;return o instanceof t?(x(o,i),o._source=this):(o=e&&!i?e:new t(i,this)).setContent(n),o}});/*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   *
   * A popup can be also standalone:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   * or
   * ```js
   * var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */// @namespace Popup
var nb=ny.extend({// @section
// @aka Popup options
options:{// @option pane: String = 'popupPane'
// `Map pane` where the popup will be added.
pane:"popupPane",// @option offset: Point = Point(0, 7)
// The offset of the popup position.
offset:[0,7],// @option maxWidth: Number = 300
// Max width of the popup, in pixels.
maxWidth:300,// @option minWidth: Number = 50
// Min width of the popup, in pixels.
minWidth:50,// @option maxHeight: Number = null
// If set, creates a scrollable container of the given height
// inside a popup if its content exceeds it.
// The scrollable container can be styled using the
// `leaflet-popup-scrolled` CSS class selector.
maxHeight:null,// @option autoPan: Boolean = true
// Set it to `false` if you don't want the map to do panning animation
// to fit the opened popup.
autoPan:!0,// @option autoPanPaddingTopLeft: Point = null
// The margin between the popup and the top left corner of the map
// view after autopanning was performed.
autoPanPaddingTopLeft:null,// @option autoPanPaddingBottomRight: Point = null
// The margin between the popup and the bottom right corner of the map
// view after autopanning was performed.
autoPanPaddingBottomRight:null,// @option autoPanPadding: Point = Point(5, 5)
// Equivalent of setting both top left and bottom right autopan padding to the same value.
autoPanPadding:[5,5],// @option keepInView: Boolean = false
// Set it to `true` if you want to prevent users from panning the popup
// off of the screen while it is open.
keepInView:!1,// @option closeButton: Boolean = true
// Controls the presence of a close button in the popup.
closeButton:!0,// @option autoClose: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the popup closing when another popup is opened.
autoClose:!0,// @option closeOnEscapeKey: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the ESC key for closing of the popup.
closeOnEscapeKey:!0,// @option closeOnClick: Boolean = *
// Set it if you want to override the default behavior of the popup closing when user clicks
// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
// @option className: String = ''
// A custom CSS class name to assign to the popup.
className:""},// @namespace Popup
// @method openOn(map: Map): this
// Alternative to `map.openPopup(popup)`.
// Adds the popup to the map and closes the previous one.
openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ny.prototype.openOn.call(this,t)},onAdd:function(t){ny.prototype.onAdd.call(this,t),// @namespace Map
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup is opened in the map
t.fire("popupopen",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup bound to this layer is opened
this._source.fire("popupopen",{popup:this},!0),this._source instanceof nt||this._source.on("preclick",ey))},onRemove:function(t){ny.prototype.onRemove.call(this,t),// @namespace Map
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup in the map is closed
t.fire("popupclose",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup bound to this layer is closed
this._source.fire("popupclose",{popup:this},!0),this._source instanceof nt||this._source.off("preclick",ey))},getEvents:function(){var t=ny.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=t0("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),n=this._wrapper=t0("div",t+"-content-wrapper",e);if(this._contentNode=t0("div",t+"-content",n),ew(e),eb(this._contentNode),ed(e,"contextmenu",ey),this._tipContainer=t0("div",t+"-tip-container",e),this._tip=t0("div",t+"-tip",this._tipContainer),this.options.closeButton){var i=this._closeButton=t0("a",t+"-close-button",e);i.setAttribute("role","button"),i.setAttribute("aria-label","Close popup"),i.href="#close",i.innerHTML='<span aria-hidden="true">&#215;</span>',ed(i,"click",function(t){ex(t),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var n=t.offsetWidth;n=Math.max(n=Math.min(n,this.options.maxWidth),this.options.minWidth),e.width=n+1+"px",e.whiteSpace="",e.height="";var i=t.offsetHeight,o=this.options.maxHeight,r="leaflet-popup-scrolled";o&&i>o?(e.height=o+"px",t5(t,r)):t6(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),n=this._getAnchor();ei(this._container,e.add(n))},_adjustPan:function(){if(this.options.autoPan){// We can endlessly recurse if keepInView is set and the view resets.
// Let's guard against that by exiting early if we're responding to our own autopan.
if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(tJ(this._container,"marginBottom"),10)||0,n=this._container.offsetHeight+e,i=this._containerWidth,o=new F(this._containerLeft,-n-this._containerBottom);o._add(eo(this._container));var r=t.layerPointToContainerPoint(o),a=U(this.options.autoPanPadding),s=U(this.options.autoPanPaddingTopLeft||a),l=U(this.options.autoPanPaddingBottomRight||a),u=t.getSize(),c=0,h=0;r.x+i+l.x>u.x&&(c=r.x+i-u.x+l.x),r.x-c-s.x<0&&(c=r.x-s.x),r.y+n+l.y>u.y&&(h=r.y+n-u.y+l.y),r.y-h-s.y<0&&(h=r.y-s.y),(c||h)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([c,h]))}},_getAnchor:function(){// Where should we anchor the popup on the source layer?
return U(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});/* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */ez.mergeOptions({closePopupOnClick:!0}),// @namespace Map
// @section Methods for Layers and Controls
ez.include({// @method openPopup(popup: Popup): this
// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
// @alternative
// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
// Creates a popup with the specified content and options and opens it in the given point on a map.
openPopup:function(t,e,n){return this._initOverlay(nb,t,e,n).openOn(this),this},// @method closePopup(popup?: Popup): this
// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),/*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */// @section Popup methods
e3.include({// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
// Binds a popup to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindPopup:function(t,e){return this._popup=this._initOverlay(nb,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},// @method unbindPopup(): this
// Removes the popup previously bound with `bindPopup`.
unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},// @method openPopup(latlng?: LatLng): this
// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
openPopup:function(t){return this._popup&&(this instanceof e8||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},// @method closePopup(): this
// Closes the popup bound to this layer if it is open.
closePopup:function(){return this._popup&&this._popup.close(),this},// @method togglePopup(): this
// Opens or closes the popup bound to this layer depending on its current state.
togglePopup:function(){return this._popup&&this._popup.toggle(this),this},// @method isPopupOpen(): boolean
// Returns `true` if the popup bound to this layer is currently open.
isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},// @method setPopupContent(content: String|HTMLElement|Popup): this
// Sets the content of the popup bound to this layer.
setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},// @method getPopup(): Popup
// Returns the popup bound to this layer.
getPopup:function(){return this._popup},_openPopup:function(t){if(this._popup&&this._map){// prevent map click
ek(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof nt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});/*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   * If you want to just bind a tooltip to marker:
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Path overlays like polylines also have a `bindTooltip` method.
   *
   * A tooltip can be also standalone:
   *
   * ```js
   * var tooltip = L.tooltip()
   * 	.setLatLng(latlng)
   * 	.setContent('Hello world!<br />This is a nice tooltip.')
   * 	.addTo(map);
   * ```
   * or
   * ```js
   * var tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
   * 	.addTo(map);
   * ```
   *
   *
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */// @namespace Tooltip
var nw=ny.extend({// @section
// @aka Tooltip options
options:{// @option pane: String = 'tooltipPane'
// `Map pane` where the tooltip will be added.
pane:"tooltipPane",// @option offset: Point = Point(0, 0)
// Optional offset of the tooltip position.
offset:[0,0],// @option direction: String = 'auto'
// Direction where to open the tooltip. Possible values are: `right`, `left`,
// `top`, `bottom`, `center`, `auto`.
// `auto` will dynamically switch between `right` and `left` according to the tooltip
// position on the map.
direction:"auto",// @option permanent: Boolean = false
// Whether to open the tooltip permanently or only on mouseover.
permanent:!1,// @option sticky: Boolean = false
// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
sticky:!1,// @option opacity: Number = 0.9
// Tooltip container opacity.
opacity:.9},onAdd:function(t){ny.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),// @namespace Map
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip is opened in the map.
t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip bound to this layer is opened.
this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ny.prototype.onRemove.call(this,t),// @namespace Map
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip in the map is closed.
t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip bound to this layer is closed.
this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ny.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=t0("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+m(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,n,i=this._map,o=this._container,r=i.latLngToContainerPoint(i.getCenter()),a=i.layerPointToContainerPoint(t),s=this.options.direction,l=o.offsetWidth,u=o.offsetHeight,c=U(this.options.offset),h=this._getAnchor();"top"===s?(e=l/2,n=u):"bottom"===s?(e=l/2,n=0):("center"===s?e=l/2:"right"===s?e=0:"left"===s?e=l:a.x<r.x?(s="right",e=0):(s="left",e=l+(c.x+h.x)*2),n=u/2),t=t.subtract(U(e,n,!0)).add(c).add(h),t6(o,"leaflet-tooltip-right"),t6(o,"leaflet-tooltip-left"),t6(o,"leaflet-tooltip-top"),t6(o,"leaflet-tooltip-bottom"),t5(o,"leaflet-tooltip-"+s),ei(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&et(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){// Where should we anchor the tooltip on the source layer?
return U(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});// @namespace Map
// @section Methods for Layers and Controls
ez.include({// @method openTooltip(tooltip: Tooltip): this
// Opens the specified tooltip.
// @alternative
// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
// Creates a tooltip with the specified content and options and open it.
openTooltip:function(t,e,n){return this._initOverlay(nw,t,e,n).openOn(this),this},// @method closeTooltip(tooltip: Tooltip): this
// Closes the tooltip given as parameter.
closeTooltip:function(t){return t.close(),this}}),/*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */// @section Tooltip methods
e3.include({// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
// Binds a tooltip to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(nw,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},// @method unbindTooltip(): this
// Removes the tooltip previously bound with `bindTooltip`.
unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,e.click=this._openTooltip,this._map?this._addFocusListeners():e.add=this._addFocusListeners),this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),this[t?"off":"on"](e),this._tooltipHandlersAdded=!t}},// @method openTooltip(latlng?: LatLng): this
// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
openTooltip:function(t){return this._tooltip&&(this instanceof e8||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(// open the tooltip on the map
this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},// @method closeTooltip(): this
// Closes the tooltip bound to this layer if it is open.
closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},// @method toggleTooltip(): this
// Opens or closes the tooltip bound to this layer depending on its current state.
toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},// @method isTooltipOpen(): boolean
// Returns `true` if the tooltip bound to this layer is currently open.
isTooltipOpen:function(){return this._tooltip.isOpen()},// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
// Sets the content of the tooltip bound to this layer.
setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},// @method getTooltip(): Tooltip
// Returns the tooltip bound to this layer.
getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&(ed(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),ed(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(this._tooltip&&this._map){// If the map is moving, we will show the tooltip after it's done.
if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e,n,i=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(e),i=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(i)}});/*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */var nx=e5.extend({options:{// @section
// @aka DivIcon options
iconSize:[12,12],// iconAnchor: (Point),
// popupAnchor: (Point),
// @option html: String|HTMLElement = ''
// Custom HTML code to put inside the div element, empty by default. Alternatively,
// an instance of `HTMLElement`.
html:!1,// @option bgPos: Point = [0, 0]
// Optional relative position of the background, in pixels
bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&"DIV"===t.tagName?t:document.createElement("div"),n=this.options;if(n.html instanceof Element?(t2(e),e.appendChild(n.html)):e.innerHTML=!1!==n.html?n.html:"",n.bgPos){var i=U(n.bgPos);e.style.backgroundPosition=-i.x+"px "+-i.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});e5.Default=e6;/*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */var nk=e3.extend({// @section
// @aka GridLayer options
options:{// @option tileSize: Number|Point = 256
// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
tileSize:256,// @option opacity: Number = 1.0
// Opacity of the tiles. Can be used in the `createTile()` function.
opacity:1,// @option updateWhenIdle: Boolean = (depends)
// Load new tiles only when panning ends.
// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
updateWhenIdle:tR.mobile,// @option updateWhenZooming: Boolean = true
// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
updateWhenZooming:!0,// @option updateInterval: Number = 200
// Tiles will not update more than once every `updateInterval` milliseconds when panning.
updateInterval:200,// @option zIndex: Number = 1
// The explicit zIndex of the tile layer.
zIndex:1,// @option bounds: LatLngBounds = undefined
// If set, tiles will only be loaded inside the set `LatLngBounds`.
bounds:null,// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = undefined
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:void 0,// @option maxNativeZoom: Number = undefined
// Maximum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
// from `maxNativeZoom` level and auto-scaled.
maxNativeZoom:void 0,// @option minNativeZoom: Number = undefined
// Minimum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
// from `minNativeZoom` level and auto-scaled.
minNativeZoom:void 0,// @option noWrap: Boolean = false
// Whether the layer is wrapped around the antimeridian. If `true`, the
// GridLayer will only be displayed once at low zoom levels. Has no
// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
// tiles outside the CRS limits.
noWrap:!1,// @option pane: String = 'tilePane'
// `Map pane` where the grid layer will be added.
pane:"tilePane",// @option className: String = ''
// A custom class name to assign to the tile layer. Empty by default.
className:"",// @option keepBuffer: Number = 2
// When panning the map, keep this many rows and columns of tiles before unloading them.
keepBuffer:2},initialize:function(t){x(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),t1(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},// @method bringToFront: this
// Brings the tile layer to the top of all tile layers.
bringToFront:function(){return this._map&&(t3(this._container),this._setAutoZIndex(Math.max)),this},// @method bringToBack: this
// Brings the tile layer to the bottom of all tile layers.
bringToBack:function(){return this._map&&(t4(this._container),this._setAutoZIndex(Math.min)),this},// @method getContainer: HTMLElement
// Returns the HTML element that contains the tiles for this layer.
getContainer:function(){return this._container},// @method setOpacity(opacity: Number): this
// Changes the [opacity](#gridlayer-opacity) of the grid layer.
setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},// @method setZIndex(zIndex: Number): this
// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method isLoading: Boolean
// Returns `true` if any tile in the grid layer has not finished loading.
isLoading:function(){return this._loading},// @method redraw: this
// Causes the layer to clear all the tiles and request them again.
redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=_(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @section Extension methods
// Layers extending `GridLayer` shall reimplement the following method.
// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, must be overridden by classes extending `GridLayer`.
// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
// is specified, it must be called when the tile has finished loading and drawing.
createTile:function(){return document.createElement("div")},// @section
// @method getTileSize: Point
// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
getTileSize:function(){var t=this.options.tileSize;return t instanceof F?t:new F(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,n=this.getPane().children,i=-t(-1/0,1/0),o=0,r=n.length;o<r;o++)e=n[o].style.zIndex,n[o]!==this._container&&e&&(i=t(i,+e));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!tR.ielt9){et(this._container,this.options.opacity);var t=+new Date,e=!1,n=!1;for(var i in this._tiles){var o=this._tiles[i];if(o.current&&o.loaded){var r=Math.min(1,(t-o.loaded)/200);et(o.el,r),r<1?e=!0:(o.active?n=!0:this._onOpaqueTile(o),o.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),e&&(R(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=t0("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===t?(this._levels[n].el.style.zIndex=e-Math.abs(t-n),this._onUpdateLevel(n)):(t1(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var i=this._levels[t],o=this._map;return i||((i=this._levels[t]={}).el=t0("div","leaflet-tile-container leaflet-zoom-animated",this._container),i.el.style.zIndex=e,i.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),i.zoom=t,this._setZoomTransform(i,o.getCenter(),o.getZoom()),// force the browser to consider the newly added element for transition
v(i.el.offsetWidth),this._onCreateLevel(i)),this._level=i,i}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(this._map){var t,e,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)(e=this._tiles[t]).retain=e.current;for(t in this._tiles)if((e=this._tiles[t]).current&&!e.active){var i=e.coords;this._retainParent(i.x,i.y,i.z,i.z-5)||this._retainChildren(i.x,i.y,i.z,i.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)t1(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,n,i){var o=Math.floor(t/2),r=Math.floor(e/2),a=n-1,s=new F(+o,+r);s.z=+a;var l=this._tileCoordsToKey(s),u=this._tiles[l];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),a>i&&this._retainParent(o,r,a,i))},_retainChildren:function(t,e,n,i){for(var o=2*t;o<2*t+2;o++)for(var r=2*e;r<2*e+2;r++){var a=new F(o,r);a.z=n+1;var s=this._tileCoordsToKey(a),l=this._tiles[s];if(l&&l.active){l.retain=!0;continue}l&&l.loaded&&(l.retain=!0),n+1<i&&this._retainChildren(o,r,n+1,i)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,n,i){var o=Math.round(e);o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o);var r=this.options.updateWhenZooming&&o!==this._tileZoom;(!i||r)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),n||this._pruneTiles(),// Flag to prevent _updateOpacity from pruning tiles during
// a zoom anim or a pinch gesture
this._noPrune=!!n),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var n in this._levels)this._setZoomTransform(this._levels[n],t,e)},_setZoomTransform:function(t,e,n){var i=this._map.getZoomScale(n,t.zoom),o=t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e,n)).round();tR.any3d?en(t.el,o,i):ei(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,n=this._tileSize=this.getTileSize(),i=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],i).x/n.x),Math.ceil(t.project([0,e.wrapLng[1]],i).x/n.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],i).y/n.x),Math.ceil(t.project([e.wrapLat[1],0],i).y/n.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,n=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),i=e.getZoomScale(n,this._tileZoom),o=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(2*i);return new H(o.subtract(r),o.add(r))},// Private method to load tiles in the grid's active zoom level according to map bounds
_update:function(t){var e=this._map;if(e){var n=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){// if out of minzoom/maxzoom
var i=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(i),r=o.getCenter(),a=[],s=this.options.keepBuffer,l=new H(o.getBottomLeft().subtract([s,-s]),o.getTopRight().add([s,-s]));// Sanity check: panic if the tile range contains Infinity somewhere.
if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var c=this._tiles[u].coords;c.z===this._tileZoom&&l.contains(new F(c.x,c.y))||(this._tiles[u].current=!1)}// _update just loads more tiles. If the tile zoom level differs too much
// from the map's, let _setView reset levels and prune old tiles.
if(Math.abs(n-this._tileZoom)>1){this._setView(t,n);return}// create a queue of coordinates to load tiles from
for(var h=o.min.y;h<=o.max.y;h++)for(var d=o.min.x;d<=o.max.x;d++){var f=new F(d,h);if(f.z=this._tileZoom,this._isValidTile(f)){var p=this._tiles[this._tileCoordsToKey(f)];p?p.current=!0:a.push(f)}}if(// sort tile queue to load tiles in order of their distance to center
a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)}),0!==a.length){this._loading||(this._loading=!0,// @event loading: Event
// Fired when the grid layer starts loading tiles.
this.fire("loading"));// create DOM fragment to append tiles in one batch
var m=document.createDocumentFragment();for(d=0;d<a.length;d++)this._addTile(a[d],m);this._level.el.appendChild(m)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){// don't load tile if it's out of bounds and not wrapped
var n=this._globalTileRange;if(!e.wrapLng&&(t.x<n.min.x||t.x>n.max.x)||!e.wrapLat&&(t.y<n.min.y||t.y>n.max.y))return!1}if(!this.options.bounds)return!0;// don't load tile if it doesn't intersect the bounds in options
var i=this._tileCoordsToBounds(t);return G(this.options.bounds).overlaps(i)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,n=this.getTileSize(),i=t.scaleBy(n),o=i.add(n);return[e.unproject(i,t.z),e.unproject(o,t.z)]},// converts tile coordinates to its geographical bounds
_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),n=new V(e[0],e[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},// converts tile coordinates to key for the tile cache
_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},// converts tile cache key to coordinates
_keyToTileCoords:function(t){var e=t.split(":"),n=new F(+e[0],+e[1]);return n.z=+e[2],n},_removeTile:function(t){var e=this._tiles[t];e&&(t1(e.el),delete this._tiles[t],// @event tileunload: TileEvent
// Fired when a tile is removed (e.g. when a tile goes off the screen).
this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){t5(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=v,t.onmousemove=v,tR.ielt9&&this.options.opacity<1&&et(t,this.options.opacity)},_addTile:function(t,e){var n=this._getTilePos(t),i=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),f(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&A(f(this._tileReady,this,t,null,o)),ei(o,n),// save tile in cache
this._tiles[i]={el:o,coords:t,current:!0},e.appendChild(o),// @event tileloadstart: TileEvent
// Fired when a tile is requested and starts loading.
this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,n){e&&// Fired when there is an error loading a tile.
this.fire("tileerror",{error:e,tile:n,coords:t});var i=this._tileCoordsToKey(t);(n=this._tiles[i])&&(n.loaded=+new Date,this._map._fadeAnimated?(et(n.el,0),R(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),e||(t5(n.el,"leaflet-tile-loaded"),// @event tileload: TileEvent
// Fired when a tile loads.
this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,// @event load: Event
// Fired when the grid layer loaded all visible tiles.
this.fire("load"),tR.ielt9||!this._map._fadeAnimated?A(this._pruneTiles,this):// to trigger a pruning.
setTimeout(f(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new F(this._wrapX?g(t.x,this._wrapX):t.x,this._wrapY?g(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new H(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),nS=nk.extend({// @section
// @aka TileLayer options
options:{// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = 18
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:18,// @option subdomains: String|String[] = 'abc'
// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
subdomains:"abc",// @option errorTileUrl: String = ''
// URL to the tile image to show in place of the tile that failed to load.
errorTileUrl:"",// @option zoomOffset: Number = 0
// The zoom number used in tile URLs will be offset with this value.
zoomOffset:0,// @option tms: Boolean = false
// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
tms:!1,// @option zoomReverse: Boolean = false
// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
zoomReverse:!1,// @option detectRetina: Boolean = false
// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
detectRetina:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option referrerPolicy: Boolean|String = false
// Whether the referrerPolicy attribute will be added to the tiles.
// If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
// This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
// (e.g. to validate an API token).
// Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=x(this,e)).detectRetina&&tR.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},// @method setUrl(url: String, noRedraw?: Boolean): this
// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
// If the URL does not change, the layer will not be redrawn unless
// the noRedraw parameter is set to false.
setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
// callback is called when the tile has been loaded.
createTile:function(t,e){var n=document.createElement("img");return ed(n,"load",f(this._tileOnLoad,this,e,n)),ed(n,"error",f(this._tileOnError,this,e,n)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(n.referrerPolicy=this.options.referrerPolicy),// The alt attribute is set to the empty string,
// allowing screen readers to ignore the decorative image tiles.
// https://www.w3.org/WAI/tutorials/images/decorative/
// https://www.w3.org/TR/html-aria/#el-img-empty-alt
n.alt="",n.src=this.getTileUrl(t),n},// @section Extension methods
// @uninheritable
// Layers extending `TileLayer` might reimplement the following method.
// @method getTileUrl(coords: Object): String
// Called only internally, returns the URL for a tile given its coordinates.
// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
getTileUrl:function(t){var n={r:tR.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(n.y=i),n["-y"]=i}return P(this._url,e(n,this.options))},_tileOnLoad:function(t,e){tR.ielt9?setTimeout(f(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,n){var i=this.options.errorTileUrl;i&&e.getAttribute("src")!==i&&(e.src=i),t(n,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,n=this.options.zoomReverse,i=this.options.zoomOffset;return n&&(t=e-t),t+i},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},// stops loading all tiles in the background layer
_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&((e=this._tiles[t].el).onload=v,e.onerror=v,!e.complete)){e.src=C;var n=this._tiles[t].coords;t1(e),delete this._tiles[t],// @event tileabort: TileEvent
// Fired when a tile was loading but is now not wanted.
this.fire("tileabort",{tile:e,coords:n})}},_removeTile:function(t){var e=this._tiles[t];if(e)return(// Cancels any pending http requests associated with the tile
e.el.setAttribute("src",C),nk.prototype._removeTile.call(this,t))},_tileReady:function(t,e,n){if(this._map&&(!n||n.getAttribute("src")!==C))return nk.prototype._tileReady.call(this,t,e,n)}});// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.
function nP(t,e){return new nS(t,e)}/*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */var nL=nS.extend({// @section
// @aka TileLayer.WMS options
// If any custom options not documented here are used, they will be sent to the
// WMS server as extra parameters in each request URL. This can be useful for
// [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
defaultWmsParams:{service:"WMS",request:"GetMap",// @option layers: String = ''
// **(required)** Comma-separated list of WMS layers to show.
layers:"",// @option styles: String = ''
// Comma-separated list of WMS styles.
styles:"",// @option format: String = 'image/jpeg'
// WMS image format (use `'image/png'` for layers with transparency).
format:"image/jpeg",// @option transparent: Boolean = false
// If `true`, the WMS service will return images with transparency.
transparent:!1,// @option version: String = '1.1.1'
// Version of the WMS service to use
version:"1.1.1"},options:{// @option crs: CRS = null
// Coordinate Reference System to use for the WMS requests, defaults to
// map CRS. Don't change this if you're not sure what it means.
crs:null,// @option uppercase: Boolean = false
// If `true`, WMS request parameter keys will be uppercase.
uppercase:!1},initialize:function(t,n){this._url=t;var i=e({},this.defaultWmsParams);// all keys that are not TileLayer options go to WMS params
for(var o in n)o in this.options||(i[o]=n[o]);var r=(n=x(this,n)).detectRetina&&tR.retina?2:1,a=this.getTileSize();i.width=a.x*r,i.height=a.y*r,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,nS.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),n=this._crs,i=W(n.project(e[0]),n.project(e[1])),o=i.min,r=i.max,a=(this._wmsVersion>=1.3&&this._crs===e1?[o.y,o.x,r.y,r.x]:[o.x,o.y,r.x,r.y]).join(","),s=nS.prototype.getTileUrl.call(this,t);return s+k(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+a},// @method setParams(params: Object, noRedraw?: Boolean): this
// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
setParams:function(t,n){return e(this.wmsParams,t),n||this.redraw(),this}});nS.WMS=nL,nP.wms=// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function(t,e){return new nL(t,e)};/*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */var nT=e3.extend({// @section
// @aka Renderer options
options:{// @option padding: Number = 0.1
// How much to extend the clip area around the map view (relative to its size)
// e.g. 0.1 would be 10% of map view in each direction
padding:.1},initialize:function(t){x(this,t),m(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),// always keep transform-origin as 0 0
t5(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var n=this._map.getZoomScale(e,this._zoom),i=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),r=i.multiplyBy(-n).add(o).subtract(this._map._getNewPixelOrigin(t,e));tR.any3d?en(this._container,r,n):ei(this._container,r)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
// Subclasses are responsible of firing the 'update' event.
var t=this.options.padding,e=this._map.getSize(),n=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new H(n,n.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),nE=nT.extend({// @section
// @aka Canvas options
options:{// @option tolerance: Number = 0
// How much to extend the click tolerance around a path/object on the map.
tolerance:0},getEvents:function(){var t=nT.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
this._postponeUpdatePaths=!0},onAdd:function(){nT.prototype.onAdd.call(this),// Redraw vectors since canvas is cleared upon removal,
// in case of removing the renderer itself from the map.
this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");ed(t,"mousemove",this._onMouseMove,this),ed(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ed(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){R(this._redrawRequest),delete this._ctx,t1(this._container),ep(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){nT.prototype._update.call(this);var t=this._bounds,e=this._container,n=t.getSize(),i=tR.retina?2:1;ei(e,t.min),// set canvas size (also clearing it); use double size on retina
e.width=i*n.x,e.height=i*n.y,e.style.width=n.x+"px",e.style.height=n.y+"px",tR.retina&&this._ctx.scale(2,2),// translate so we use the same path coordinates after canvas element moves
this._ctx.translate(-t.min.x,-t.min.y),// Tell paths to redraw themselves
this.fire("update")}},_reset:function(){nT.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[m(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,n=e.next,i=e.prev;n?n.prev=i:this._drawLast=i,i?i.next=n:this._drawFirst=n,delete t._order,delete this._layers[m(t)],this._requestRedraw(t)},_updatePath:function(t){// Redraw the union of the layer's old pixel
// bounds and the new pixel bounds.
this._extendRedrawBounds(t),t._project(),t._update(),// The redraw will extend the redraw bounds
// with the new pixel bounds.
this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var e,n,i=t.options.dashArray.split(/[, ]+/),o=[];for(n=0;n<i.length;n++){// Ignore dash array containing invalid lengths
if(isNaN(e=Number(i[n])))return;o.push(e)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||A(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new H,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var n=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var i=this._drawFirst;i;i=i.next)t=i.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var n,i,o,r,a=t._parts,s=a.length,l=this._ctx;if(s){for(l.beginPath(),n=0;n<s;n++){for(i=0,o=a[n].length;i<o;i++)r=a[n][i],l[i?"lineTo":"moveTo"](r.x,r.y);e&&l.closePath()}this._fillStroke(l,t)}}// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,n=this._ctx,i=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||i)/i;1!==o&&(n.save(),n.scale(1,o)),n.beginPath(),n.arc(e.x,e.y/o,i,0,2*Math.PI,!1),1!==o&&n.restore(),this._fillStroke(n,t)}},_fillStroke:function(t,e){var n=e.options;n.fill&&(t.globalAlpha=n.fillOpacity,t.fillStyle=n.fillColor||n.color,t.fill(n.fillRule||"evenodd")),n.stroke&&0!==n.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=n.opacity,t.lineWidth=n.weight,t.strokeStyle=n.color,t.lineCap=n.lineCap,t.lineJoin=n.lineJoin,t.stroke())},// Canvas obviously doesn't have mouse events for individual drawn objects,
// so we emulate that by calculating what's under the mouse on mousemove/click manually
_onClick:function(t){for(var e,n,i=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(!("click"===t.type||"preclick"===t.type)||!this._map._draggableMoved(e))&&(n=e);this._fireEvent(!!n&&[n],t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving())&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(// if we're leaving the layer, fire mouseout
t6(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var n,i,o=this._drawFirst;o;o=o.next)(n=o.layer).options.interactive&&n._containsPoint(e)&&(i=n);i!==this._hoveredLayer&&(this._handleMouseOut(t),i&&(t5(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseover"),this._hoveredLayer=i)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(f(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,n){this._map._fireDOMEvent(e,n||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var n=e.next,i=e.prev;if(!n)return;n.prev=i,i?i.next=n:n&&// single entry
(this._drawFirst=n),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var n=e.next,i=e.prev;if(!i)return;i.next=n,n?n.prev=i:i&&// single entry
(this._drawLast=i),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function nC(t){return tR.canvas?new nE(t):null}/*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */var nz=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){// Do not return fn from catch block so `e` can be garbage collected
// See https://github.com/Leaflet/Leaflet/pull/7279
}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),nM=tR.vml?nz:tn,nO=nT.extend({_initContainer:function(){this._container=nM("svg"),// makes it possible to click through svg root; we'll reset it back in individual paths
this._container.setAttribute("pointer-events","none"),this._rootGroup=nM("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){t1(this._container),ep(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!this._map._animatingZoom||!this._bounds){nT.prototype._update.call(this);var t=this._bounds,e=t.getSize(),n=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,n.setAttribute("width",e.x),n.setAttribute("height",e.y)),// movement: update container viewBox so that we don't have to change coordinates of individual layers
ei(n,t.min),n.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},// methods below are called by vector layers implementations
_initPath:function(t){var e=t._path=nM("path");t.options.className&&t5(e,t.options.className),t.options.interactive&&t5(e,"leaflet-interactive"),this._updateStyle(t),this._layers[m(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){t1(t._path),t.removeInteractiveTarget(t._path),delete this._layers[m(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,n=t.options;e&&(n.stroke?(e.setAttribute("stroke",n.color),e.setAttribute("stroke-opacity",n.opacity),e.setAttribute("stroke-width",n.weight),e.setAttribute("stroke-linecap",n.lineCap),e.setAttribute("stroke-linejoin",n.lineJoin),n.dashArray?e.setAttribute("stroke-dasharray",n.dashArray):e.removeAttribute("stroke-dasharray"),n.dashOffset?e.setAttribute("stroke-dashoffset",n.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),n.fill?(e.setAttribute("fill",n.fillColor||n.color),e.setAttribute("fill-opacity",n.fillOpacity),e.setAttribute("fill-rule",n.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,ti(t._parts,e))},_updateCircle:function(t){var e=t._point,n=Math.max(Math.round(t._radius),1),i=Math.max(Math.round(t._radiusY),1)||n,o="a"+n+","+i+" 0 1,0 ",r=t._empty()?"M0 0":"M"+(e.x-n)+","+e.y+o+2*n+",0 "+o+-(2*n)+",0 ";this._setPath(t,r)},_setPath:function(t,e){t._path.setAttribute("d",e)},// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
_bringToFront:function(t){t3(t._path)},_bringToBack:function(t){t4(t._path)}});// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function nI(t){return tR.svg||tR.vml?new nO(t):null}tR.vml&&nO.include({_initContainer:function(){this._container=t0("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(nT.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=nz("shape");t5(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=nz("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[m(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;t1(e),t.removeInteractiveTarget(e),delete this._layers[m(t)]},_updateStyle:function(t){var e=t._stroke,n=t._fill,i=t.options,o=t._container;o.stroked=!!i.stroke,o.filled=!!i.fill,i.stroke?(e||(e=t._stroke=nz("stroke")),o.appendChild(e),e.weight=i.weight+"px",e.color=i.color,e.opacity=i.opacity,i.dashArray?e.dashStyle=T(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=i.lineCap.replace("butt","flat"),e.joinstyle=i.lineJoin):e&&(o.removeChild(e),t._stroke=null),i.fill?(n||(n=t._fill=nz("fill")),o.appendChild(n),n.color=i.fillColor||i.color,n.opacity=i.fillOpacity):n&&(o.removeChild(n),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),n=Math.round(t._radius),i=Math.round(t._radiusY||n);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+n+","+i+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){t3(t._container)},_bringToBack:function(t){t4(t._container)}}),ez.include({// @namespace Map; @method getRenderer(layer: Path): Renderer
// Returns the instance of `Renderer` that should be used to render the given
// `Path`. It will ensure that the `renderer` options of the map and paths
// are respected, and that the renderers do exist on the map.
getRenderer:function(t){// @namespace Path; @option renderer: Renderer
// Use this specific instance of `Renderer` for this path. Takes
// precedence over the map's [default renderer](#map-renderer).
var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var e=this._paneRenderers[t];return void 0===e&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){// @namespace Map; @option preferCanvas: Boolean = false
// Whether `Path`s should be rendered on a `Canvas` renderer.
// By default, all `Path`s are rendered in a `SVG` renderer.
return this.options.preferCanvas&&nC(t)||nI(t)}});/*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   *//*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */var nN=no.extend({initialize:function(t,e){no.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},// @method setBounds(latLngBounds: LatLngBounds): this
// Redraws the rectangle with the passed bounds.
setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=G(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});nO.create=nM,nO.pointsToPath=ti,nr.geometryToLayer=na,nr.coordsToLatLng=nl,nr.coordsToLatLngs=nu,nr.latLngToCoords=nc,nr.latLngsToCoords=nh,nr.getFeature=nd,nr.asFeature=nf,/*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */// @namespace Map
// @section Interaction Options
ez.mergeOptions({// @option boxZoom: Boolean = true
// Whether the map can be zoomed to a rectangular area specified by
// dragging the mouse while pressing the shift key.
boxZoom:!0});var nA=eD.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){ed(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ep(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){t1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;// Clear the deferred resetState if it hasn't executed yet, otherwise it
// will interrupt the interaction and orphan a box element in the container.
this._clearDeferredResetState(),this._resetState(),n(),ea(),this._startPoint=this._map.mouseEventToContainerPoint(t),ed(document,{contextmenu:ek,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=t0("div","leaflet-zoom-box",this._container),t5(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new H(this._point,this._startPoint),n=e.getSize();ei(this._box,e.min),this._box.style.width=n.x+"px",this._box.style.height=n.y+"px"},_finish:function(){this._moved&&(t1(this._box),t6(this._container,"leaflet-crosshair")),i(),es(),ep(document,{contextmenu:ek,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){// Postpone to next JS tick so internal click event handling
// still see it as "moved".
this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(f(this._resetState,this),0);var e=new V(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
ez.addInitHook("addHandler","boxZoom",nA),/*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */// @namespace Map
// @section Interaction Options
ez.mergeOptions({// @option doubleClickZoom: Boolean|String = true
// Whether the map can be zoomed in by double clicking on it and
// zoomed out by double clicking while holding shift. If passed
// `'center'`, double-click zoom will zoom to the center of the
//  view regardless of where the mouse was.
doubleClickZoom:!0});var nR=eD.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,n=e.getZoom(),i=e.options.zoomDelta,o=t.originalEvent.shiftKey?n-i:n+i;"center"===e.options.doubleClickZoom?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
ez.addInitHook("addHandler","doubleClickZoom",nR),/*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */// @namespace Map
// @section Interaction Options
ez.mergeOptions({// @option dragging: Boolean = true
// Whether the map is draggable with mouse/touch or not.
dragging:!0,// @section Panning Inertia Options
// @option inertia: Boolean = *
// If enabled, panning of the map will have an inertia effect where
// the map builds momentum while dragging and continues moving in
// the same direction for some time. Feels especially nice on touch
// devices. Enabled by default.
inertia:!0,// @option inertiaDeceleration: Number = 3000
// The rate with which the inertial movement slows down, in pixels/second².
inertiaDeceleration:3400,// @option inertiaMaxSpeed: Number = Infinity
// Max speed of the inertial movement, in pixels/second.
inertiaMaxSpeed:1/0,// @option easeLinearity: Number = 0.2
easeLinearity:.2,// TODO refactor, move to CRS
// @option worldCopyJump: Boolean = false
// With this option enabled, the map tracks when you pan to another "copy"
// of the world and seamlessly jumps to the original one so that all overlays
// like markers and vector layers are still visible.
worldCopyJump:!1,// @option maxBoundsViscosity: Number = 0.0
// If `maxBounds` is set, this option will control how solid the bounds
// are when dragging the map around. The default value of `0.0` allows the
// user to drag outside the bounds at normal speed, higher values will
// slow down map dragging outside bounds, and `1.0` makes the bounds fully
// solid, preventing the user from dragging outside the bounds.
maxBoundsViscosity:0});var nD=eD.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new eZ(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}t5(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){t6(this._map._container,"leaflet-grab"),t6(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=G(this._map.options.maxBounds);this._offsetLimit=W(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){// TODO refactor to be able to adjust map pane position after zoom
var t=this._worldWidth,e=Math.round(t/2),n=this._initialWorldOffset,i=this._draggable._newPos.x,o=(i-e+n)%t+e-n,r=(i+e+n)%t-e-n;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=Math.abs(o+n)<Math.abs(r+n)?o:r},_onDragEnd:function(t){var e=this._map,n=e.options,i=!n.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),i)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,a=n.easeLinearity,s=o.multiplyBy(a/r),l=s.distanceTo([0,0]),u=Math.min(n.inertiaMaxSpeed,l),c=s.multiplyBy(u/l),h=u/(n.inertiaDeceleration*a),d=c.multiplyBy(-h/2).round();d.x||d.y?(d=e._limitOffset(d,e.options.maxBounds),A(function(){e.panBy(d,{duration:h,easeLinearity:a,noMoveStart:!0,animate:!0})})):e.fire("moveend")}}});// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
ez.addInitHook("addHandler","dragging",nD),/*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */// @namespace Map
// @section Keyboard Navigation Options
ez.mergeOptions({// @option keyboard: Boolean = true
// Makes the map focusable and allows users to navigate the map with keyboard
// arrows and `+`/`-` keys.
keyboard:!0,// @option keyboardPanDelta: Number = 80
// Amount of pixels to pan when pressing an arrow key.
keyboardPanDelta:80});var nB=eD.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),ed(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ep(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,n=t.scrollTop||e.scrollTop,i=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(i,n)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,n,i=this._panKeys={},o=this.keyCodes;for(e=0,n=o.left.length;e<n;e++)i[o.left[e]]=[-1*t,0];for(e=0,n=o.right.length;e<n;e++)i[o.right[e]]=[t,0];for(e=0,n=o.down.length;e<n;e++)i[o.down[e]]=[0,t];for(e=0,n=o.up.length;e<n;e++)i[o.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,n,i=this._zoomKeys={},o=this.keyCodes;for(e=0,n=o.zoomIn.length;e<n;e++)i[o.zoomIn[e]]=t;for(e=0,n=o.zoomOut.length;e<n;e++)i[o.zoomOut[e]]=-t},_addHooks:function(){ed(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ep(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var e,n=t.keyCode,i=this._map;if(n in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress){if(e=this._panKeys[n],t.shiftKey&&(e=U(e).multiplyBy(3)),i.options.maxBounds&&(e=i._limitOffset(U(e),i.options.maxBounds)),i.options.worldCopyJump){var o=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(e)));i.panTo(o)}else i.panBy(e)}}else if(n in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[n]);else{if(27!==n||!i._popup||!i._popup.options.closeOnEscapeKey)return;i.closePopup()}ek(t)}}});// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
ez.addInitHook("addHandler","keyboard",nB),/*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */// @namespace Map
// @section Interaction Options
ez.mergeOptions({// @section Mouse wheel options
// @option scrollWheelZoom: Boolean|String = true
// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
// it will zoom to the center of the view regardless of where the mouse was.
scrollWheelZoom:!0,// @option wheelDebounceTime: Number = 40
// Limits the rate at which a wheel can fire (in milliseconds). By default
// user can't zoom via wheel more often than once per 40 ms.
wheelDebounceTime:40,// @option wheelPxPerZoomLevel: Number = 60
// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
// mean a change of one full zoom level. Smaller values will make wheel-zooming
// faster (and vice versa).
wheelPxPerZoomLevel:60});var nZ=eD.extend({addHooks:function(){ed(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ep(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=eT(t),n=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(f(this._performZoom,this),i),ek(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),n=this._map.options.zoomSnap||0;t._stop();// map the delta with a sigmoid function to -4..4 range leaning on -1..1
var i=4*Math.log(2/(1+Math.exp(-Math.abs(this._delta/(4*this._map.options.wheelPxPerZoomLevel)))))/Math.LN2,o=n?Math.ceil(i/n)*n:i,r=t._limitZoom(e+(this._delta>0?o:-o))-e;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(e+r):t.setZoomAround(this._lastMousePos,e+r))}});// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
ez.addInitHook("addHandler","scrollWheelZoom",nZ),// @namespace Map
// @section Interaction Options
ez.mergeOptions({// @section Touch interaction options
// @option tapHold: Boolean
// Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
tapHold:tR.touchNative&&tR.safari&&tR.mobile,// @option tapTolerance: Number = 15
// The max number of pixels a user can shift his finger during touch
// for it to be considered a valid tap.
tapTolerance:15});var nF=eD.extend({addHooks:function(){ed(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ep(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),1===t.touches.length){var e=t.touches[0];this._startPos=this._newPos=new F(e.clientX,e.clientY),this._holdTimeout=setTimeout(f(function(){this._cancel(),this._isTapValid()&&(// prevent simulated mouse events https://w3c.github.io/touch-events/#mouse-events
ed(document,"touchend",ex),ed(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),600),ed(document,"touchend touchcancel contextmenu",this._cancel,this),ed(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){ep(document,"touchend",ex),ep(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),ep(document,"touchend touchcancel contextmenu",this._cancel,this),ep(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new F(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var n=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,// detail: 1,
screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});n._simulated=!0,e.target.dispatchEvent(n)}});// @section Handlers
// @property tapHold: Handler
// Long tap handler to simulate `contextmenu` event (useful in mobile Safari).
ez.addInitHook("addHandler","tapHold",nF),/*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */// @namespace Map
// @section Interaction Options
ez.mergeOptions({// @section Touch interaction options
// @option touchZoom: Boolean|String = *
// Whether the map can be zoomed by touch-dragging with two fingers. If
// passed `'center'`, it will zoom to the center of the view regardless of
// where the touch events (fingers) were. Enabled for touch-capable web
// browsers.
touchZoom:tR.touch,// @option bounceAtZoomLimits: Boolean = true
// Set it to false if you don't want the map to zoom beyond min/max zoom
// and then bounce back when pinch-zooming.
bounceAtZoomLimits:!0});var nj=eD.extend({addHooks:function(){t5(this._map._container,"leaflet-touch-zoom"),ed(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){t6(this._map._container,"leaflet-touch-zoom"),ep(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&!e._animatingZoom&&!this._zooming){var n=e.mouseEventToContainerPoint(t.touches[0]),i=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),"center"!==e.options.touchZoom&&(this._pinchStartLatLng=e.containerPointToLatLng(n.add(i)._divideBy(2))),this._startDist=n.distanceTo(i),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),ed(document,"touchmove",this._onTouchMove,this),ed(document,"touchend touchcancel",this._onTouchEnd,this),ex(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,n=e.mouseEventToContainerPoint(t.touches[0]),i=e.mouseEventToContainerPoint(t.touches[1]),o=n.distanceTo(i)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===o)return}else{// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
var r=n._add(i)._divideBy(2)._subtract(this._centerPoint);if(1===o&&0===r.x&&0===r.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),R(this._animRequest);var a=f(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=A(a,this,!0),ex(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,R(this._animRequest),ep(document,"touchmove",this._onTouchMove,this),ep(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
ez.addInitHook("addHandler","touchZoom",nj),ez.BoxZoom=nA,ez.DoubleClickZoom=nR,ez.Drag=nD,ez.Keyboard=nB,ez.ScrollWheelZoom=nZ,ez.TapHold=nF,ez.TouchZoom=nj,t.Bounds=H,t.Browser=tR,t.CRS=K,t.Canvas=nE,t.Circle=nn,t.CircleMarker=ne,t.Class=D,t.Control=eM,t.DivIcon=nx,t.DivOverlay=ny,t.DomEvent={__proto__:null,on:ed,off:ep,stopPropagation:ey,disableScrollPropagation:eb,disableClickPropagation:ew,preventDefault:ex,stop:ek,getPropagationPath:eS,getMousePosition:eP,getWheelDelta:eT,isExternalTarget:eE,addListener:ed,removeListener:ep},t.DomUtil={__proto__:null,TRANSFORM:tK,TRANSITION:tQ,TRANSITION_END:tY,get:tX,getStyle:tJ,create:t0,remove:t1,empty:t2,toFront:t3,toBack:t4,hasClass:t8,addClass:t5,removeClass:t6,setClass:t9,getClass:t7,setOpacity:et,testProp:ee,setTransform:en,setPosition:ei,getPosition:eo,get disableTextSelection(){return n},get enableTextSelection(){return i},disableImageDrag:ea,enableImageDrag:es,preventOutline:el,restoreOutline:eu,getSizedParentNode:ec,getScale:eh},t.Draggable=eZ,t.Evented=Z,t.FeatureGroup=e8,t.GeoJSON=nr,t.GridLayer=nk,t.Handler=eD,t.Icon=e5,t.ImageOverlay=n_,t.LatLng=$,t.LatLngBounds=V,t.Layer=e3,t.LayerGroup=e4,t.LineUtil={__proto__:null,simplify:eH,pointToSegmentDistance:eW,closestPointOnSegment:// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function(t,e,n){return eq(t,e,n)},clipSegment:eV,_getEdgeIntersection:eG,_getBitCode:e$,_sqClosestPointOnSegment:eq,isFlat:eK,_flat:eQ,polylineCenter:eY},t.Map=ez,t.Marker=e7,t.Mixin={Events:B},t.Path=nt,t.Point=F,t.PolyUtil={__proto__:null,clipPolygon:eF,polygonCenter:ej,centroid:eU},t.Polygon=no,t.Polyline=ni,t.Popup=nb,t.PosAnimation=eC,t.Projection={__proto__:null,LonLat:eX,Mercator:eJ,SphericalMercator:Y},t.Rectangle=nN,t.Renderer=nT,t.SVG=nO,t.SVGOverlay=nv,t.TileLayer=nS,t.Tooltip=nw,t.Transformation=X,t.Util={__proto__:null,extend:e,create:d,bind:f,get lastId(){return p},stamp:m,throttle:_,wrapNum:g,falseFn:v,formatNum:y,trim:b,splitWords:w,setOptions:x,getParamString:k,template:P,isArray:T,indexOf:E,emptyImageUrl:C,requestFn:I,cancelFn:N,requestAnimFrame:A,cancelAnimFrame:R},t.VideoOverlay=ng,t.bind=f,t.bounds=W,t.canvas=nC,t.circle=// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function(t,e,n){return new nn(t,e,n)},t.circleMarker=// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function(t,e){return new ne(t,e)},t.control=eO,t.divIcon=// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function(t){return new nx(t)},t.extend=e,t.featureGroup=function(t,e){return new e8(t,e)},t.geoJSON=nm,t.geoJson=nm,t.gridLayer=// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function(t){return new nk(t)},t.icon=// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function(t){return new e5(t)},t.imageOverlay=function(t,e,n){return new n_(t,e,n)},t.latLng=q,t.latLngBounds=G,t.layerGroup=function(t,e){return new e4(t,e)},t.map=// @section
// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function(t,e){return new ez(t,e)},t.marker=// factory L.marker(latlng: LatLng, options? : Marker options)
// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function(t,e){return new e7(t,e)},t.point=U,t.polygon=// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function(t,e){return new no(t,e)},t.polyline=// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function(t,e){return new ni(t,e)},t.popup=function(t,e){return new nb(t,e)},t.rectangle=// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function(t,e){return new nN(t,e)},t.setOptions=x,t.stamp=m,t.svg=nI,t.svgOverlay=// @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
// Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
// A viewBox attribute is required on the SVG element to zoom in and out properly.
function(t,e,n){return new nv(t,e,n)},t.tileLayer=nP,t.tooltip=function(t,e){return new nw(t,e)},t.transformation=J,t.version="1.9.4",t.videoOverlay=// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.
function(t,e,n){return new ng(t,e,n)};var nU=window.L;t.noConflict=function(){return window.L=nU,this},// Always export us to window global (see #2364)
window.L=t}(t.exports)}),a.register("gcRXi",function(t,e){var n,i=t.exports&&t.exports.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(t.exports,"__esModule",{value:!0}),"object"!=typeof window.exports&&(window.exports={});var o=window.L?window.L:a("8JYDX"),r=/** @class */function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._slideToUntil=0,e._slideToDuration=1e3,e._slideToLatLng=[0,0],e._slideFromLatLng=[0,0],e._slideKeepAtCenter=!1,e._slideDraggingWasAllowed=!1,e._slideFrame=0,e.addInitHook=function(){e.on("move",e.slideCancel,e)},// 🍂method slideTo(latlng: LatLng, options: Slide Options): this
// Moves this marker until `latlng`, like `setLatLng()`, but with a smooth
// sliding animation. Fires `movestart` and `moveend` events.
e.slideTo=function(t,n){if(e._map)return e._slideToDuration=n.duration,e._slideToUntil=performance.now()+n.duration,e._slideFromLatLng=e.getLatLng(),e._slideToLatLng=t,e._slideKeepAtCenter=!!n.keepAtCenter,e._slideDraggingWasAllowed=void 0!==e._slideDraggingWasAllowed?e._slideDraggingWasAllowed:e._map.dragging.enabled(),e._slideKeepAtCenter&&(e._map.dragging.disable(),e._map.doubleClickZoom.disable(),e._map.options.touchZoom="center",e._map.options.scrollWheelZoom="center"),e.fire("movestart"),e._slideTo(),e},e._slideTo=function(){if(e._map){var t=e._slideToUntil-performance.now();if(t<0)return e.setLatLng(e._slideToLatLng),e.fire("moveend"),e._slideDraggingWasAllowed&&(e._map.dragging.enable(),e._map.doubleClickZoom.enable(),e._map.options.touchZoom=!0,e._map.options.scrollWheelZoom=!0),e._slideDraggingWasAllowed=!1,e;var n=e._map.latLngToContainerPoint(e._slideFromLatLng),i=e._map.latLngToContainerPoint(e._slideToLatLng),r=(e._slideToDuration-t)/e._slideToDuration,a=i.multiplyBy(r).add(n.multiplyBy(1-r)),s=e._map.containerPointToLatLng(a);e.setLatLng(s),e._slideKeepAtCenter&&e._map.panTo(s,{animate:!1}),e._slideFrame=o.Util.requestAnimFrame(e._slideTo,e)}},e}return i(e,t),// 🍂method slideCancel(): this
// Cancels the sliding animation from `slideTo`, if applicable.
e.prototype.slideCancel=function(){o.Util.cancelAnimFrame(this._slideFrame)},e}(o.Marker);window.DriftMarker=r,t.exports.default=r});var s={};s=a("1b2ls"),a("acw62");var l={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function t(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(t){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(t)}}(),n=(l=a("Xw6Mv")).createRoot,l.hydrateRoot;var u=a("acw62"),c=a("8JYDX"),u=(a("acw62"),a("acw62"));const h=(0,u.createContext)(null),d=h.Provider;function f(){let t=(0,u.useContext)(h);if(null==t)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}var c=a("8JYDX"),u=a("acw62");function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}const m=/*#__PURE__*/(0,u.forwardRef)(function({bounds:t,boundsOptions:n,center:i,children:o,className:r,id:a,placeholder:s,style:l,whenReady:h,zoom:f,...m},_){let[g]=(0,u.useState)({className:r,id:a,style:l}),[v,y]=(0,u.useState)(null);(0,u.useImperativeHandle)(_,()=>v?.map??null,[v]);let b=(0,u.useCallback)(e=>{if(null!==e&&null===v){let o=new c.Map(e,m);null!=i&&null!=f?o.setView(i,f):null!=t&&o.fitBounds(t,n),null!=h&&o.whenReady(h),y(Object.freeze({__version:1,map:o}))}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);(0,u.useEffect)(()=>()=>{v?.map.remove()},[v]);let w=v?/*@__PURE__*/e(u).createElement(d,{value:v},o):s??null;return /*@__PURE__*/e(u).createElement("div",p({},g,{ref:b}),w)});function _(t,e,n){return Object.freeze({instance:t,context:e,container:n})}function g(t,e){return null==e?function(e,n){let i=(0,u.useRef)();return i.current||(i.current=t(e,n)),i}:function(n,i){let o=(0,u.useRef)();o.current||(o.current=t(n,i));let r=(0,u.useRef)(n),{instance:a}=o.current;return(0,u.useEffect)(function(){r.current!==n&&(e(a,n,r.current),r.current=n)},[a,n,i]),o}}function v(t){return/*#__PURE__*/(0,u.forwardRef)(function(n,i){let{instance:o,context:r}=t(n).current;return(0,u.useImperativeHandle)(i,()=>o),null==n.children?null:/*@__PURE__*/e(u).createElement(d,{value:r},n.children)})}function y(t,e){let n=(0,u.useRef)(e);(0,u.useEffect)(function(){e!==n.current&&null!=t.attributionControl&&(null!=n.current&&t.attributionControl.removeAttribution(n.current),null!=e&&t.attributionControl.addAttribution(e)),n.current=e},[t,e])}function b(t,e){let n=(0,u.useRef)();(0,u.useEffect)(function(){return null!=e&&t.instance.on(e),n.current=e,function(){null!=n.current&&t.instance.off(n.current),n.current=null}},[t,e])}function w(t,e){let n=t.pane??e.pane;return n?{...t,pane:n}:t}function x(t,e){(0,u.useEffect)(function(){let n=e.layerContainer??e.map;return n.addLayer(t.instance),function(){e.layerContainer?.removeLayer(t.instance),e.map.removeLayer(t.instance)}},[e,t])}function k(t){return function(e){let n=f(),i=t(w(e,n),n);return y(n.map,e.attribution),b(i.current,e.eventHandlers),x(i.current,n),i}}var u=(a("acw62"),a("acw62"),a("acw62"),a("acw62"),a("acw62"),a("acw62"),a("acw62")),c=a("8JYDX");const S=function(t,e){let n=g(t,e);return v(function(t){let e=f(),i=n(w(t,e),e);return b(i.current,t.eventHandlers),x(i.current,e),function(t,e){let n=(0,u.useRef)();(0,u.useEffect)(function(){if(e.pathOptions!==n.current){let i=e.pathOptions??{};t.instance.setStyle(i),n.current=i}},[t,e])}(i.current,t),i})}(function({positions:t,...e},n){let i=new c.Polyline(t,e);return _(i,Object.freeze({...n,overlayContainer:i}))},function(t,e,n){e.positions!==n.positions&&t.setLatLngs(e.positions)});var c=a("8JYDX"),u=a("acw62");const P=function(t,e){var n;let i=g(t);return n=function(t,n){let o=f(),r=i(w(t,o),o);return y(o.map,t.attribution),b(r.current,t.eventHandlers),e(r.current,o,t,n),r},/*#__PURE__*/(0,u.forwardRef)(function(t,e){let[i,o]=(0,u.useState)(!1),{instance:r}=n(t,o).current;(0,u.useImperativeHandle)(e,()=>r),(0,u.useEffect)(function(){i&&r.update()},[r,i,t.children]);// @ts-ignore _contentNode missing in type definition
let a=r._contentNode;return a?/*#__PURE__*/(0,l.createPortal)(t.children,a):null})}(function(t,e){let n=new c.Popup(t,e.overlayContainer);return _(n,e)},function(t,e,{position:n},i){(0,u.useEffect)(function(){let{instance:o}=t;function r(t){t.popup===o&&(o.update(),i(!0))}function a(t){t.popup===o&&i(!1)}return e.map.on({popupopen:r,popupclose:a}),null==e.overlayContainer?(null!=n&&o.setLatLng(n),o.openOn(e.map)):e.overlayContainer.bindPopup(o),function(){e.map.off({popupopen:r,popupclose:a}),e.overlayContainer?.unbindPopup(),e.map.removeLayer(o)}},[t,e,i,n])});var c=a("8JYDX");const T=function(t,e){let n=g(t,e),i=k(n);return/*#__PURE__*/(0,u.forwardRef)(function(t,e){let{instance:n}=i(t).current;return(0,u.useImperativeHandle)(e,()=>n),null})}(function({url:t,...e},n){let i=new c.TileLayer(t,w(e,n));return _(i,n)},function(t,e,n){!function(t,e,n){let{opacity:i,zIndex:o}=e;null!=i&&i!==n.opacity&&t.setOpacity(i),null!=o&&o!==n.zIndex&&t.setZIndex(o)}(t,e,n);let{url:i}=e;null!=i&&i!==n.url&&t.setUrl(i)});var E={},C=E&&E.__assign||function(){return(C=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},z=E&&E.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&0>e.indexOf(i)&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)0>e.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]]);return n},M=E&&E.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(E,"__esModule",{value:!0});var O=M(a("gcRXi"));E.default=function(t,e){let n=g(t,e),i=k(n);return v(i)}(function(t,e){var n=t.position,i=z(t,["position"]),o=new O.default(n,i);return{instance:o,context:C(C({},e),{overlayContainer:o})}},function(t,e,n){n.position!==e.position&&"number"==typeof e.duration&&t.slideTo(e.position,{duration:e.duration,keepAtCenter:e.keepAtCenter}),null!=e.icon&&e.icon!==n.icon&&t.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==n.zIndexOffset&&t.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==n.opacity&&t.setOpacity(e.opacity),null!=t.dragging&&e.draggable!==n.draggable&&(!0===e.draggable?t.dragging.enable():t.dragging.disable())});const I=(0,c.icon)({iconUrl:"https://www.svgrepo.com/show/143359/car-placeholder.svg",iconSize:[50,50],iconAnchor:[25,50],popupAnchor:[0,-50]}),N={color:"lime"},A=t=>[t.lat||0,t.lon||0],R=({points:t,position:n})=>{let[i,o]=(0,u.useState)(null),r=(0,u.useMemo)(()=>t.map(A),[t]);return(0,u.useEffect)(()=>{i&&!(r.length<1)&&r[n||0]&&i.setView(r[n||0])},[r,i,n]),/*#__PURE__*/(0,s.jsxs)(m,{center:r[0]||[50,21],zoom:10,className:"map",ref:o,children:[/*#__PURE__*/(0,s.jsx)(T,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.length>0&&/*#__PURE__*/(0,s.jsxs)(s.Fragment,{children:[/*#__PURE__*/(0,s.jsx)(S,{pathOptions:N,positions:r}),/*#__PURE__*/(0,s.jsx)(/*@__PURE__*/e(E),{// if position changes, marker will drift its way to new position
position:r[n||0]||r[0],// time in ms that marker will take to reach its destination
duration:1,icon:I,children:/*#__PURE__*/(0,s.jsxs)(P,{children:[/*#__PURE__*/(0,s.jsx)("h5",{children:new Date(t[n||0].time).toLocaleString()}),/*#__PURE__*/(0,s.jsxs)("h4",{children:[Math.round(t[n||0].speed)," km/h"]})]})})]})]})};var u=a("acw62"),D={};!/**
 * @license GPS.js v0.6.1 26/01/2016
 *
 * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/function(t){var e=Math.PI/180,n={},i={};/**
   *
   * @param {String} time
   * @param {String=} date
   * @returns {Date}
   */function o(t,e){if(""===t)return null;var n=new Date;if(e){var i=e.slice(4),o=e.slice(2,4)-1,r=e.slice(0,2);4===i.length?n.setUTCFullYear(Number(i),Number(o),Number(r)):// year < 73 ? 2000+year : 1900+year
// Since GPS appeared in 1973
n.setUTCFullYear(Number("20"+i),Number(o),Number(r))}n.setUTCHours(Number(t.slice(0,2))),n.setUTCMinutes(Number(t.slice(2,4))),n.setUTCSeconds(Number(t.slice(4,6)));// Extract the milliseconds, since they can be not present, be 3 decimal place, or 2 decimal places, or other?
var a=t.slice(7),s=a.length,l=0;return 0!==s&&(l=parseFloat(a)*Math.pow(10,3-s)),n.setUTCMilliseconds(Number(l)),n}function r(t,e){// Latitude can go from 0 to 90; longitude can go from -180 to 180.
if(""===t)return null;var n,i=1;switch(e){case"S":i=-1;case"N":n=2;break;case"W":i=-1;case"E":n=3}/*
     * Mathematically, but more expensive and not numerical stable:
     *
     * raw = 4807.038
     * deg = Math.floor(raw / 100)
     *
     * dec = (raw - (100 * deg)) / 60
     * res = deg + dec // 48.1173
     */return i*(parseFloat(t.slice(0,n))+parseFloat(t.slice(n))/60)}function a(t){return""===t?null:parseFloat(t)}function s(t){return""===t?null:1.852*parseFloat(t)}function l(t){switch(t){case"A":return"active";case"V":return"void";case"":return null}throw Error("INVALID RMC/GLL STATUS: "+t)}function u(t){// Only A and D will correspond to an Active and reliable Sentence
switch(t){case"":return null;case"A":return"autonomous";case"D":return"differential";case"E":return"estimated";// dead reckoning
case"M":return"manual input";case"S":return"simulated";case"N":return"not valid";case"P":return"precise";case"R":return"rtk";// valid (real time kinematic) RTK fix
case"F":return"rtk-float";// valid (real time kinematic) RTK float
}throw Error("INVALID FAA MODE: "+t)}function c(t,e){if("M"===e||""===e)return a(t);throw Error("Unknown unit: "+e)}/**
   *
   * @constructor
   */function h(){if(!(this instanceof h))return new h;this.events={},this.state={errors:0,processed:0}}h.prototype.events=null,h.prototype.state=null,h.mod={// Global Positioning System Fix Data
GGA:function(t,e){if(16!==e.length&&14!==e.length)throw Error("Invalid GGA length: "+t);/*
       11
       1         2       3 4        5 6 7  8   9  10 |  12 13  14  15
       |         |       | |        | | |  |   |   | |   | |   |   |
       $--GGA,hhmmss.ss,llll.ll,a,yyyyy.yy,a,x,xx,x.x,x.x,M,x.x,M,x.x,xxxx*hh
       
       1) Time (UTC)
       2) Latitude
       3) N or S (North or South)
       4) Longitude
       5) E or W (East or West)
       6) GPS Quality Indicator,
       0 = Invalid, 1 = Valid SPS, 2 = Valid DGPS, 3 = Valid PPS
       7) Number of satellites in view, 00 - 12
       8) Horizontal Dilution of precision, lower is better
       9) Antenna Altitude above/below mean-sea-level (geoid)
       10) Units of antenna altitude, meters
       11) Geoidal separation, the difference between the WGS-84 earth
       ellipsoid and mean-sea-level (geoid), '-' means mean-sea-level below ellipsoid
       12) Units of geoidal separation, meters
       13) Age of differential GPS data, time in seconds since last SC104
       type 1 or 9 update, null field when DGPS is not used
       14) Differential reference station ID, 0000-1023
       15) Checksum
       */return{time:o(e[1]),lat:r(e[2],e[3]),lon:r(e[4],e[5]),alt:c(e[9],e[10]),quality:function(t){if(""===t)return null;switch(parseInt(t,10)){case 0:return null;case 1:return"fix";// valid SPS fix
case 2:return"dgps-fix";// valid DGPS fix
case 3:return"pps-fix";// valid PPS fix
case 4:return"rtk";// valid (real time kinematic) RTK fix
case 5:return"rtk-float";// valid (real time kinematic) RTK float
case 6:return"estimated";// dead reckoning
case 7:return"manual";case 8:return"simulated"}throw Error("INVALID GGA FIX: "+t)}(e[6]),satellites:a(e[7]),hdop:a(e[8]),geoidal:c(e[11],e[12]),age:void 0===e[13]?null:a(e[13]),stationID:void 0===e[14]?null:a(e[14])// dgpsReference??
}},// GPS DOP and active satellites
GSA:function(t,e){if(19!==e.length&&20!==e.length)throw Error("Invalid GSA length: "+t);for(var n=[],i=3;i<15;i++)""!==e[i]&&n.push(parseInt(e[i],10));return{mode:function(t){switch(t){case"M":return"manual";case"A":return"automatic";case"":return null}throw Error("INVALID GSA MODE: "+t)}(e[1]),fix:function(t){switch(t){case"1":case"":return null;case"2":return"2D";case"3":return"3D"}throw Error("INVALID GSA FIX: "+t)}(e[2]),satellites:n,pdop:a(e[15]),hdop:a(e[16]),vdop:a(e[17]),systemId:e.length>19?a(e[18]):null}},// Recommended Minimum data for gps
RMC:function(t,e){var n,i;if(13!==e.length&&14!==e.length&&15!==e.length)throw Error("Invalid RMC length: "+t);/*
       $GPRMC,hhmmss.ss,A,llll.ll,a,yyyyy.yy,a,x.x,x.x,ddmmyy,x.x,a*hh
       
       RMC  = Recommended Minimum Specific GPS/TRANSIT Data
       1    = UTC of position fix
       2    = Data status (A-ok, V-invalid)
       3    = Latitude of fix
       4    = N or S
       5    = Longitude of fix
       6    = E or W
       7    = Speed over ground in knots
       8    = Track made good in degrees True
       9    = UT date
       10   = Magnetic variation degrees (Easterly var. subtracts from true course)
       11   = E or W
       (12) = NMEA 2.3 introduced FAA mode indicator (A=Autonomous, D=Differential, E=Estimated, N=Data not valid)
       (13) = NMEA 4.10 introduced nav status
       12   = Checksum
       */return{time:o(e[1],e[9]),status:l(e[2]),lat:r(e[3],e[4]),lon:r(e[5],e[6]),speed:s(e[7]),track:a(e[8]),variation:(n=e[10],i=e[11],""===n||""===i?null:parseFloat(n)*("W"===i?-1:1)),faa:e.length>13?u(e[12]):null,navStatus:e.length>14?e[13]:null}},// Track info
VTG:function(t,e){if(10!==e.length&&11!==e.length)throw Error("Invalid VTG length: "+t);/*
       ------------------------------------------------------------------------------
       1  2  3  4  5  6  7  8 9   10
       |  |  |  |  |  |  |  | |   |
       $--VTG,x.x,T,x.x,M,x.x,N,x.x,K,m,*hh<CR><LF>
       ------------------------------------------------------------------------------
       
       1    = Track made good (degrees true)
       2    = Fixed text 'T' indicates that track made good is relative to true north
       3    = optional: Track made good (degrees magnetic)
       4    = optional: M: track made good is relative to magnetic north
       5    = Speed over ground in knots
       6    = Fixed text 'N' indicates that speed over ground in in knots
       7    = Speed over ground in kilometers/hour
       8    = Fixed text 'K' indicates that speed over ground is in kilometers/hour
       (9)   = FAA mode indicator (NMEA 2.3 and later)
       9/10 = Checksum
       */if(""===e[2]&&""===e[8]&&""===e[6])return{track:null,trackMagetic:null,speed:null,faa:null};if("T"!==e[2])throw Error("Invalid VTG track mode: "+t);if("K"!==e[8]||"N"!==e[6])throw Error("Invalid VTG speed tag: "+t);return{track:a(e[1]),trackMagnetic:""===e[3]?null:a(e[3]),speed:s(e[5]),faa:11===e.length?u(e[9]):null}},// satellites in view
GSV:function(t,e){if(e.length%4==0)// = 2 -> NMEA 4.10 extension
// = 3 -> BeiDou extension?
throw Error("Invalid GSV length: "+t);for(var n=[],i=4;i<e.length-3;i+=4){var o=a(e[i]),r=a(e[i+3]);/*
         Plot satellites in Radar chart with north on top
         by linear map elevation from 0° to 90° into r to 0
         
         centerX + cos(azimuth - 90) * (1 - elevation / 90) * radius
         centerY + sin(azimuth - 90) * (1 - elevation / 90) * radius
         */n.push({prn:o,elevation:a(e[i+1]),azimuth:a(e[i+2]),snr:r,status:null!==o?null!==r?"tracking":"in view":null})}return{msgNumber:a(e[2]),msgsTotal:a(e[1]),satsInView:a(e[3]),satellites:n,signalId:e.length%4==2?a(e[e.length-2]):null// NMEA 4.10 addition
}},// Geographic Position - Latitude/Longitude
GLL:function(t,e){if(9!==e.length&&8!==e.length)throw Error("Invalid GLL length: "+t);/*
       ------------------------------------------------------------------------------
       1       2 3        4 5         6 7   8
       |       | |        | |         | |   |
       $--GLL,llll.ll,a,yyyyy.yy,a,hhmmss.ss,a,m,*hh<CR><LF>
       ------------------------------------------------------------------------------
       
       1. Latitude
       2. N or S (North or South)
       3. Longitude
       4. E or W (East or West)
       5. Universal Time Coordinated (UTC)
       6. Status A - Data Valid, V - Data Invalid
       7. FAA mode indicator (NMEA 2.3 and later)
       8. Checksum
       */return{time:o(e[5]),status:l(e[6]),lat:r(e[1],e[2]),lon:r(e[3],e[4]),faa:9===e.length?u(e[7]):null}},// UTC Date / Time and Local Time Zone Offset
ZDA:function(t,e){/*
       1    = hhmmss.ss = UTC
       2    = xx = Day, 01 to 31
       3    = xx = Month, 01 to 12
       4    = xxxx = Year
       5    = xx = Local zone description, 00 to +/- 13 hours
       6    = xx = Local zone minutes description (same sign as hours)
       */// TODO: incorporate local zone information
return{time:o(e[1],e[2]+e[3]+e[4])}},GST:function(t,e){if(10!==e.length)throw Error("Invalid GST length: "+t);/*
       1    = Time (UTC)
       2    = RMS value of the pseudorange residuals; includes carrier phase residuals during periods of RTK (float) and RTK (fixed) processing
       3    = Error ellipse semi-major axis 1 sigma error, in meters
       4    = Error ellipse semi-minor axis 1 sigma error, in meters
       5    = Error ellipse orientation, degrees from true north
       6    = Latitude 1 sigma error, in meters
       7    = Longitude 1 sigma error, in meters
       8    = Height 1 sigma error, in meters
       9    = Checksum
       */return{time:o(e[1]),rms:a(e[2]),ellipseMajor:a(e[3]),ellipseMinor:a(e[4]),ellipseOrientation:a(e[5]),latitudeError:a(e[6]),longitudeError:a(e[7]),heightError:a(e[8])}},// add HDT
HDT:function(t,e){if(4!==e.length)throw Error("Invalid HDT length: "+t);/*
       ------------------------------------------------------------------------------
       1      2  3
       |      |  |
       $--HDT,hhh.hhh,T*XX<CR><LF>
       ------------------------------------------------------------------------------
       
       1. Heading in degrees
       2. T: indicates heading relative to True North
       3. Checksum
       */return{heading:parseFloat(e[1]),trueNorth:"T"===e[2]}},GRS:function(t,e){if(18!==e.length)throw Error("Invalid GRS length: "+t);for(var n=[],i=3;i<=14;i++){var r=a(e[i]);null!==r&&n.push(r)}return{time:o(e[1]),mode:a(e[2]),res:n}},GBS:function(t,e){if(10!==e.length&&12!==e.length)throw Error("Invalid GBS length: "+t);/*
       0      1   2   3   4   5   6   7   8
       |      |   |   |   |   |   |   |   |
       $--GBS,hhmmss.ss,x.x,x.x,x.x,x.x,x.x,x.x,x.x*hh<CR><LF>
       
       1. UTC time of the GGA or GNS fix associated with this sentence
       2. Expected error in latitude (meters)
       3. Expected error in longitude (meters)
       4. Expected error in altitude (meters)
       5. PRN (id) of most likely failed satellite
       6. Probability of missed detection for most likely failed satellite
       7. Estimate of bias in meters on most likely failed satellite
       8. Standard deviation of bias estimate
       --
       9. systemID (NMEA 4.10)
       10. signalID (NMEA 4.10)
       */return{time:o(e[1]),errLat:a(e[2]),errLon:a(e[3]),errAlt:a(e[4]),failedSat:a(e[5]),probFailedSat:a(e[6]),biasFailedSat:a(e[7]),stdFailedSat:a(e[8]),systemId:12===e.length?a(e[9]):null,signalId:12===e.length?a(e[10]):null}},GNS:function(t,e){if(14!==e.length&&15!==e.length)throw Error("Invalid GNS length: "+t);return{time:o(e[1]),lat:r(e[2],e[3]),lon:r(e[4],e[5]),mode:e[6],satsUsed:a(e[7]),hdop:a(e[8]),alt:a(e[9]),sep:a(e[10]),diffAge:a(e[11]),diffStation:a(e[12]),navStatus:15===e.length?e[13]:null// NMEA 4.10
}}},h.Parse=function(t){if("string"!=typeof t)return!1;var e=t.split(","),n=e.pop();// HDT is 2 items length
if(e.length<2||"$"!==t.charAt(0)||-1===n.indexOf("*"))return!1;if(n=n.split("*"),e.push(n[0]),e.push(n[1]),// Remove $ character and first two chars from the beginning
e[0]=e[0].slice(3),void 0!==h.mod[e[0]]){// set raw data here as well?
var i=this.mod[e[0]](t,e);return i.raw=t,i.valid=function(t,e){for(var n=0,i=1;i<t.length;i++){var o=t.charCodeAt(i);if(42===o)break;n^=o}return n===parseInt(e,16)}(t,e[e.length-1]),i.type=e[0],i}return!1},// Heading (N=0, E=90, S=189, W=270) from point 1 to point 2
h.Heading=function(t,n,i,o){var r=(o-n)*e;t*=e,i*=e;var a=Math.sin(t),s=Math.sin(i),l=Math.cos(i);return(180*Math.atan2(Math.sin(r)*l,Math.cos(t)*s-a*l*Math.cos(r))/Math.PI+360)%360},h.Distance=function(t,n,i,o){var r=(i-t)*e*.5;// Half of lat difference
t*=e,i*=e;var a=Math.sin(r),s=Math.sin((o-n)*e*.5);//return RADIUS * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1.0 - a));
return 12745.6*Math.asin(Math.sqrt(a*a+Math.cos(t)*Math.cos(i)*s*s))},h.TotalDistance=function(t){if(t.length<2)return 0;for(var e=0,n=0;n<t.length-1;n++){var i=t[n],o=t[n+1];e+=h.Distance(i.lat,i.lon,o.lat,o.lon)}return e},h.prototype.update=function(t){var e=h.Parse(t);return(this.state.processed++,!1===e)?(this.state.errors++,!1):(function(t,e){if(("RMC"===e.type||"GGA"===e.type||"GLL"===e.type||"GNS"===e.type)&&(t.time=e.time,t.lat=e.lat,t.lon=e.lon),"ZDA"===e.type&&(t.time=e.time),"GGA"===e.type&&(t.alt=e.alt),"RMC"/* || data['type'] === 'VTG'*/===e.type&&(// TODO: is rmc speed/track really interchangeable with vtg speed/track?
t.speed=e.speed,t.track=e.track),"GSA"===e.type&&(t.satsActive=e.satellites,t.fix=e.fix,t.hdop=e.hdop,t.pdop=e.pdop,t.vdop=e.vdop),"GSV"===e.type){for(var o=new Date().getTime(),r=e.satellites,a=0;a<r.length;a++){var s=r[a].prn;i[s]=o,n[s]=r[a]}var l=[];for(var s in n)o-i[s]<3e3&&l.push(n[s]);t.satsVisible=l}}(this.state,e),this.emit("data",e),this.emit(e.type,e),!0)},h.prototype.partial="",h.prototype.updatePartial=function(t){for(this.partial+=t;;){var e=this.partial.indexOf("\r\n");if(-1===e)break;var n=this.partial.slice(0,e);if("$"===n.charAt(0))try{this.update(n)}catch(t){throw this.partial="",Error(t)}this.partial=this.partial.slice(e+2)}},h.prototype.on=function(t,e){return void 0===this.events[t]?(this.events[t]=e,this):null},h.prototype.off=function(t){return void 0!==this.events[t]&&(this.events[t]=void 0),this},h.prototype.emit=function(t,e){void 0!==this.events[t]&&this.events[t].call(this,e)},Object.defineProperty(h,"__esModule",{value:!0}),h.default=h,h.GPS=h,D=h}(0);// @ts-ignore
const B="http://rally-logger.local",Z=t=>{let e=t=>new Date(t).getTime(),n=t.get("fromDate"),i=t.get("toDate");return n?i?`${B}/api/gps/${e(n)}/${e(i)}`:`${B}/api/gps/${e(n)}`:`${B}/api/gps`},F=t=>t.filter(Boolean).filter(t=>"RMC"===t.type).sort((t,e)=>t.time-e.time).filter(t=>t.lon&&t.valid),j=({onLoad:t})=>{let[n,i]=(0,u.useState)(!1);return/*#__PURE__*/(0,s.jsx)("fieldset",{className:"setting",children:/*#__PURE__*/(0,s.jsxs)("form",{onSubmit:n=>{n.preventDefault(),i(!0);// @ts-ignore
let o=new FormData(n.target);fetch(Z(o)).then(t=>t.json()).then(t=>t.map(t=>{try{return /*@__PURE__*/e(D).Parse(t[1])}catch(t){return}})).then(t=>(console.log(t),t)).then(F).then(t).catch(console.log).finally(()=>i(!1))},children:[/*#__PURE__*/(0,s.jsx)("label",{children:"Od"}),/*#__PURE__*/(0,s.jsx)("input",{type:"datetime-local",id:"fromDate",name:"fromDate",title:"from date"}),/*#__PURE__*/(0,s.jsx)("label",{children:"Do"}),/*#__PURE__*/(0,s.jsx)("input",{type:"datetime-local",id:"toDate",name:"toDate",title:"to date"}),/*#__PURE__*/(0,s.jsx)("button",{type:"submit",disabled:n,children:n?"wczytuję...":"wczytaj"})]})})},U=t=>e=>t(parseInt(e.target.value,10)),H=document.getElementById("app"),W=n(H);W.render(/*#__PURE__*/(0,s.jsx)(()=>{let[t,e]=(0,u.useState)([]),[n,i]=(0,u.useState)(0),[o,r]=(0,u.useState)(!1),a=(0,u.useRef)(),l=()=>i(t=>t+1),c=()=>i(t=>t-1);return(0,u.useEffect)(()=>{if(!o||n>t.length-1){r(!1);return}let e=0===n?0:t[n].time-t[n-1].time;console.log(n,e/100),setTimeout(l,e/100)},[o,n]),/*#__PURE__*/(0,s.jsxs)("div",{className:"map",children:[/*#__PURE__*/(0,s.jsx)(j,{onLoad:e}),/*#__PURE__*/(0,s.jsx)(R,{points:t,position:n}),/*#__PURE__*/(0,s.jsxs)("div",{className:"seakBar",children:[/*#__PURE__*/(0,s.jsx)("button",{className:"seakBar__step",onClick:c,onMouseDown:()=>a.current=setInterval(c,100),onMouseUp:()=>clearInterval(a.current),children:"<"}),/*#__PURE__*/(0,s.jsx)("input",{type:"range",min:"0",max:t.length-1||0,onChange:U(i),title:"seakBar",className:"seakBar__bar",value:n}),/*#__PURE__*/(0,s.jsx)("button",{className:"seakBar__step",onClick:l,onMouseDown:()=>a.current=setInterval(l,100),onMouseUp:()=>clearInterval(a.current),children:">"}),/*#__PURE__*/(0,s.jsx)("button",{onClick:()=>{r(!o)},children:o?"stop":"play"})]})]})},{}));//# sourceMappingURL=index.e9f31528.js.map

//# sourceMappingURL=index.e9f31528.js.map
