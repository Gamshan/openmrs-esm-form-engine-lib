/*! For license information please see 41.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_form_engine_lib=globalThis.webpackChunk_openmrs_esm_form_engine_lib||[]).push([[41,422],{1063:(e,t,n)=>{var r=n(6072),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,s=r.useEffect,u=r.useLayoutEffect,o=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,d=r[1];return u((function(){i.value=n,i.getSnapshot=t,l(i)&&d({inst:i})}),[e,n,t]),s((function(){return l(i)&&d({inst:i}),e((function(){l(i)&&d({inst:i})}))}),[e]),o(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},9888:(e,t,n)=>{e.exports=n(1063)},3041:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E,infinite:()=>f,unstable_serialize:()=>d});var r=n(6072),i=n(9888),a=n(8465);const s=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),u={dedupe:!0};a.OBJECT.defineProperty(a.SWRConfig,"defaultValue",{value:a.defaultConfig});const o=(0,a.withArgs)(((e,t,n)=>{const{cache:o,compare:l,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:h,refreshWhenOffline:v,keepPreviousData:p}=n,[_,b,U,m]=a.SWRGlobalState.get(o),[R,S]=(0,a.serialize)(e),C=(0,r.useRef)(!1),y=(0,r.useRef)(!1),I=(0,r.useRef)(R),T=(0,r.useRef)(t),V=(0,r.useRef)(n),w=()=>V.current,k=()=>w().isVisible()&&w().isOnline(),[L,N,D,F]=(0,a.createCacheHelper)(o,R),O=(0,r.useRef)({}).current,A=(0,a.isUndefined)(c)?n.fallback[R]:c,P=(e,t)=>{for(const n in O){const r=n;if("data"===r){if(!l(e[r],t[r])){if(!(0,a.isUndefined)(e[r]))return!1;if(!l(Y,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},z=(0,r.useMemo)((()=>{const e=!!R&&!!t&&((0,a.isUndefined)(f)?!w().isPaused()&&!d&&(!!(0,a.isUndefined)(E)||E):f),n=t=>{const n=(0,a.mergeObjects)(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=L(),i=F(),s=n(r),u=r===i?s:n(i);let o=s;return[()=>{const e=n(L());return P(e,o)?(o.data=e.data,o.isLoading=e.isLoading,o.isValidating=e.isValidating,o.error=e.error,o):(o=e,e)},()=>u]}),[o,R]),H=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>D(R,((t,n)=>{P(n,t)||e()}))),[o,R]),z[0],z[1]),x=!C.current,M=_[R]&&_[R].length>0,j=H.data,W=(0,a.isUndefined)(j)?A:j,G=H.error,X=(0,r.useRef)(W),Y=p?(0,a.isUndefined)(j)?X.current:j:W,q=!(M&&!(0,a.isUndefined)(G))&&(x&&!(0,a.isUndefined)(f)?f:!w().isPaused()&&(d?!(0,a.isUndefined)(W)&&E:(0,a.isUndefined)(W)||E)),B=!!(R&&t&&x&&q),J=(0,a.isUndefined)(H.isValidating)?B:H.isValidating,K=(0,a.isUndefined)(H.isLoading)?B:H.isLoading,Q=(0,r.useCallback)((async e=>{const t=T.current;if(!R||!t||y.current||w().isPaused())return!1;let r,i,s=!0;const u=e||{},o=!U[R]||!u.dedupe,d=()=>a.IS_REACT_LEGACY?!y.current&&R===I.current&&C.current:R===I.current,c={isValidating:!1,isLoading:!1},f=()=>{N(c)},E=()=>{const e=U[R];e&&e[1]===i&&delete U[R]},g={isValidating:!0};(0,a.isUndefined)(L().data)&&(g.isLoading=!0);try{if(o&&(N(g),n.loadingTimeout&&(0,a.isUndefined)(L().data)&&setTimeout((()=>{s&&d()&&w().onLoadingSlow(R,n)}),n.loadingTimeout),U[R]=[t(S),(0,a.getTimestamp)()]),[r,i]=U[R],r=await r,o&&setTimeout(E,n.dedupingInterval),!U[R]||U[R][1]!==i)return o&&d()&&w().onDiscarded(R),!1;c.error=a.UNDEFINED;const e=b[R];if(!(0,a.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return f(),o&&d()&&w().onDiscarded(R),!1;const u=L().data;c.data=l(u,r)?u:r,o&&d()&&w().onSuccess(r,R,n)}catch(e){E();const t=w(),{shouldRetryOnError:n}=t;t.isPaused()||(c.error=e,o&&d()&&(t.onError(e,R,t),(!0===n||(0,a.isFunction)(n)&&n(e))&&(w().revalidateOnFocus&&w().revalidateOnReconnect&&!k()||t.onErrorRetry(e,R,t,(e=>{const t=_[R];t&&t[0]&&t[0](a.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0}))))}return s=!1,f(),!0}),[R,o]),Z=(0,r.useCallback)(((...e)=>(0,a.internalMutate)(o,I.current,...e)),[]);if((0,a.useIsomorphicLayoutEffect)((()=>{T.current=t,V.current=n,(0,a.isUndefined)(j)||(X.current=j)})),(0,a.useIsomorphicLayoutEffect)((()=>{if(!R)return;const e=Q.bind(a.UNDEFINED,u);let t=0;const n=(0,a.subscribeCallback)(R,_,((n,r={})=>{if(n==a.revalidateEvents.FOCUS_EVENT){const n=Date.now();w().revalidateOnFocus&&n>t&&k()&&(t=n+w().focusThrottleInterval,e())}else if(n==a.revalidateEvents.RECONNECT_EVENT)w().revalidateOnReconnect&&k()&&e();else{if(n==a.revalidateEvents.MUTATE_EVENT)return Q();if(n==a.revalidateEvents.ERROR_REVALIDATE_EVENT)return Q(r)}}));return y.current=!1,I.current=R,C.current=!0,N({_k:S}),q&&((0,a.isUndefined)(W)||a.IS_SERVER?e():(0,a.rAF)(e)),()=>{y.current=!0,n()}}),[R]),(0,a.useIsomorphicLayoutEffect)((()=>{let e;function t(){const t=(0,a.isFunction)(g)?g(L().data):g;t&&-1!==e&&(e=setTimeout(n,t))}function n(){L().error||!h&&!w().isVisible()||!v&&!w().isOnline()?t():Q(u).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[g,h,v,R]),(0,r.useDebugValue)(Y),d&&(0,a.isUndefined)(W)&&R){if(!a.IS_REACT_LEGACY&&a.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");T.current=t,V.current=n,y.current=!1;const e=m[R];if(!(0,a.isUndefined)(e)){const t=Z(e);s(t)}if(!(0,a.isUndefined)(G))throw G;{const e=Q(u);(0,a.isUndefined)(Y)||(e.status="fulfilled",e.value=!0),s(e)}}return{mutate:Z,get data(){return O.data=!0,Y},get error(){return O.error=!0,G},get isValidating(){return O.isValidating=!0,J},get isLoading(){return O.isLoading=!0,K}}})),l=e=>(0,a.serialize)(e?e(0,null):null)[0],d=e=>a.INFINITE_PREFIX+l(e),c=Promise.resolve(),f=e=>(t,n,s)=>{const u=(0,r.useRef)(!1),{cache:o,initialSize:d=1,revalidateAll:f=!1,persistSize:E=!1,revalidateFirstPage:g=!0,revalidateOnMount:h=!1,parallel:v=!1}=s,[,,,p]=a.SWRGlobalState.get(a.cache);let _;try{_=l(t),_&&(_=a.INFINITE_PREFIX+_)}catch(e){}const[b,U,m]=(0,a.createCacheHelper)(o,_),R=(0,r.useCallback)((()=>(0,a.isUndefined)(b()._l)?d:b()._l),[o,_,d]);(0,i.useSyncExternalStore)((0,r.useCallback)((e=>_?m(_,(()=>{e()})):()=>{}),[o,_]),R,R);const S=(0,r.useCallback)((()=>{const e=b()._l;return(0,a.isUndefined)(e)?d:e}),[_,d]),C=(0,r.useRef)(S());(0,a.useIsomorphicLayoutEffect)((()=>{u.current?_&&U({_l:E?C.current:S()}):u.current=!0}),[_,o]);const y=h&&!u.current,I=e(_,(async e=>{const r=b()._i,i=b()._r;U({_r:a.UNDEFINED});const u=[],l=S(),[d]=(0,a.createCacheHelper)(o,e),c=d().data,E=[];let h=null;for(let e=0;e<l;++e){const[l,d]=(0,a.serialize)(t(e,v?null:h));if(!l)break;const[_,b]=(0,a.createCacheHelper)(o,l);let U=_().data;const m=f||r||(0,a.isUndefined)(U)||g&&!e&&!(0,a.isUndefined)(c)||y||c&&!(0,a.isUndefined)(c[e])&&!s.compare(c[e],U);if(n&&("function"==typeof i?i(U,d):m)){const t=async()=>{if(l in p){const e=p[l];delete p[l],U=await e}else U=await n(d);b({data:U,_k:d}),u[e]=U};v?E.push(t):await t()}else u[e]=U;v||(h=U)}return v&&await Promise.all(E.map((e=>e()))),U({_i:a.UNDEFINED}),u}),s),T=(0,r.useCallback)((function(e,t){const n="boolean"==typeof t?{revalidate:t}:t||{},r=!1!==n.revalidate;return _?(r&&((0,a.isUndefined)(e)?U({_i:!0,_r:n.revalidate}):U({_i:!1,_r:n.revalidate})),arguments.length?I.mutate(e,{...n,revalidate:r}):I.mutate()):c}),[_,o]),V=(0,r.useCallback)((e=>{if(!_)return c;const[,n]=(0,a.createCacheHelper)(o,_);let r;if((0,a.isFunction)(e)?r=e(S()):"number"==typeof e&&(r=e),"number"!=typeof r)return c;n({_l:r}),C.current=r;const i=[],[s]=(0,a.createCacheHelper)(o,_);let u=null;for(let e=0;e<r;++e){const[n]=(0,a.serialize)(t(e,u)),[r]=(0,a.createCacheHelper)(o,n),l=n?r().data:a.UNDEFINED;if((0,a.isUndefined)(l))return T(s().data);i.push(l),u=l}return T(i)}),[_,o,T,S]);return{size:S(),setSize:V,mutate:T,get data(){return I.data},get error(){return I.error},get isValidating(){return I.isValidating},get isLoading(){return I.isLoading}}},E=(0,a.withMiddleware)(o,f)}}]);