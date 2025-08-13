import{R as d}from"./index.BKz8HbS8.js";var m={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S;function j(){if(S)return i;S=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function s(o,n,r){var l=null;if(r!==void 0&&(l=""+r),n.key!==void 0&&(l=""+n.key),"key"in n){r={};for(var u in n)u!=="key"&&(r[u]=n[u])}else r=n;return n=r.ref,{$$typeof:e,type:o,key:l,ref:n!==void 0?n:null,props:r}}return i.Fragment=t,i.jsx=s,i.jsxs=s,i}var R;function I(){return R||(R=1,m.exports=j()),m.exports}var J=I();const f=e=>{let t;const s=new Set,o=(a,x)=>{const c=typeof a=="function"?a(t):a;if(!Object.is(c,t)){const E=t;t=x??(typeof c!="object"||c===null)?c:Object.assign({},t,c),s.forEach(g=>g(t,E))}},n=()=>t,u={setState:o,getState:n,getInitialState:()=>p,subscribe:a=>(s.add(a),()=>s.delete(a))},p=t=e(o,n,u);return u},b=e=>e?f(e):f,k=e=>e;function M(e,t=k){const s=d.useSyncExternalStore(e.subscribe,d.useCallback(()=>t(e.getState()),[e,t]),d.useCallback(()=>t(e.getInitialState()),[e,t]));return d.useDebugValue(s),s}const v=e=>{const t=b(e),s=o=>M(t,o);return Object.assign(s,t),s},_=e=>e?v(e):v,q=_(e=>({imageModal:!1,selectedImg:null,selectedName:"",openImageModal:(t,s)=>e({imageModal:!0,selectedImg:t,selectedName:s}),closeImageModal:()=>e({imageModal:!1,selectedImg:null,selectedName:""})}));export{J as j,q as u};
