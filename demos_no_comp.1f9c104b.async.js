(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1DhI":function(e,t,a){"use strict";var n=a("ahKI"),r=a("sJN1"),c=a("cxPF"),l=a("FBt5"),u=e=>{l["a"]&&(Object(c["a"])(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=Object(r["a"])(e);Object(n["useEffect"])((()=>()=>{Object(c["a"])(t.current)&&t.current()}),[])};t["a"]=u},"3lnb":function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("eUqg"),u=a("naKy"),o=a("nnHe");t["default"]=function(){var e=Object(o["a"])("use-local-storage-state-demo3",{defaultValue:"Hello~",serializer:e=>null!==e&&void 0!==e?e:"",deserializer:e=>e}),t=Object(n["a"])(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(l["a"],{value:a||"",placeholder:"Please enter some words...",onChange:e=>r(e.target.value),style:{width:300}}),c.a.createElement(u["a"],{style:{margin:"0 8px"},onClick:()=>r("Hello~")},"Reset"),c.a.createElement(u["a"],{danger:!0,onClick:()=>r(void 0)},"Clear"))}},"82LI":function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("naKy"),u=a("L2hj");t["default"]=()=>{var e=Object(u["a"])(),t=Object(n["a"])(e,2),a=t[0],r=t[1],o=r.toggle,i=r.setLeft,s=r.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a","".concat(a)),c.a.createElement("p",null,c.a.createElement(l["a"],{type:"primary",onClick:o},"Toggle"),c.a.createElement(l["a"],{type:"primary",onClick:i,style:{margin:"0 8px"}},"Toggle False"),c.a.createElement(l["a"],{type:"primary",onClick:s},"Toggle True")))}},A8p3:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("eUqg"),u=a("hsQr");function o(e,t){var a=Object(r["useState"])(e),c=Object(n["a"])(a,2),l=c[0],o=c[1],i=Object(u["a"])((()=>{o(e)}),t),s=i.run;return Object(r["useEffect"])((()=>{s()}),[e]),l}var i=o;t["default"]=()=>{var e=Object(r["useState"])(""),t=Object(n["a"])(e,2),a=t[0],u=t[1],o=i(a,{wait:500});return c.a.createElement(c.a.Fragment,null,c.a.createElement(l["a"],{style:{width:"500px"},value:a,onChange:e=>u(e.target.value),placeholder:"\u8bf7\u8f93\u5165..."}),c.a.createElement("div",{style:{marginTop:"20px"}},"DebouncedValue: ",o))}},CAf6:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("naKy"),u=a("L2hj"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(u["a"])(!!e),a=Object(n["a"])(t,2),c=a[0],l=a[1],o=l.toggle,i=l.set,s=Object(r["useMemo"])((()=>{var e=()=>i(!0),t=()=>i(!1);return{setTrue:e,setFalse:t,set:e=>i(!!e),toggle:o}}),[]);return[c,s]},i=o;t["default"]=()=>{var e=i(!0),t=Object(n["a"])(e,2),a=t[0],r=t[1],u=r.toggle,o=r.setTrue,s=r.setFalse;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a",JSON.stringify(a)),c.a.createElement("div",null,c.a.createElement(l["a"],{onClick:u},"Toggle"),c.a.createElement(l["a"],{onClick:s,style:{margin:"0 16px"}},"Set false"),c.a.createElement(l["a"],{onClick:o},"Set true")))}},"Dr+N":function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("naKy"),u=a("L2hj");t["default"]=()=>{var e=Object(u["a"])("Hello","World"),t=Object(n["a"])(e,2),a=t[0],r=t[1],o=r.toggle,i=r.set,s=r.setLeft,m=r.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a",a),c.a.createElement("p",null,c.a.createElement(l["a"],{type:"primary",onClick:o},"Toggle"),c.a.createElement(l["a"],{type:"primary",onClick:()=>i("Hello"),style:{margin:"0 8px"}},"Set Hello"),c.a.createElement(l["a"],{type:"primary",onClick:()=>i("World")},"Set World"),c.a.createElement(l["a"],{type:"primary",onClick:s,style:{margin:"0 8px"}},"Set Left"),c.a.createElement(l["a"],{type:"primary",onClick:m},"Set Right")))}},FBt5:function(e,t,a){"use strict";var n=!1;t["a"]=n},L2hj:function(e,t,a){"use strict";var n=a("iojd"),r=a("ahKI");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=Object(r["useState"])(e),c=Object(n["a"])(a,2),l=c[0],u=c[1],o=Object(r["useMemo"])((()=>{var a=void 0===t?!e:t,n=()=>u((t=>t===e?a:e)),r=e=>u(e),c=()=>u(e),l=()=>u(a);return{toggle:n,set:r,setLeft:c,setRight:l}}),[]);return[l,o]}t["a"]=c},OCTU:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("sJN1");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(n["a"])(e,2),a=t[0],u=t[1],o=Object(l["a"])(a);return Object(r["useEffect"])((()=>{var e=setInterval((()=>{u(o.current+1)}),1e3);return()=>{clearInterval(e)}}),[]),c.a.createElement("div",null,c.a.createElement("p",null,"count: ",a))}},VaEu:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("eUqg"),u=a("naKy"),o=a("nnHe");t["default"]=function(){var e=Object(o["a"])("use-local-storage-state-demo1",{defaultValue:"Hello~"}),t=Object(n["a"])(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(l["a"],{value:a||"",placeholder:"Please enter some words...",onChange:e=>r(e.target.value),style:{width:300}}),c.a.createElement(u["a"],{style:{margin:"0 8px"},onClick:()=>r("Hello~")},"Reset"),c.a.createElement(u["a"],{danger:!0,onClick:()=>r(void 0)},"Clear"))}},VoNs:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("Ys1N"),u=a("eUqg");t["default"]=()=>{var e=Object(l["a"])("useCookieStateString"),t=Object(n["a"])(e,2),a=t[0],r=t[1];return c.a.createElement(u["a"],{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",value:a,onChange:e=>r(e.target.value),style:{width:"300px"}})}},Ys1N:function(e,t,a){"use strict";var n=a("G3cz"),r=a("J9RX"),c=a("iojd"),l=a("keS/"),u=a.n(l),o=a("ahKI"),i=a("pYEw"),s=a("cxPF"),m=["defaultValue"];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(o["useState"])((()=>{var a=u.a.get(e);return Object(s["b"])(a)?a:Object(s["a"])(t.defaultValue)?t.defaultValue():t.defaultValue})),l=Object(c["a"])(a,2),d=l[0],f=l[1],v=Object(i["a"])((function(a){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Object(n["a"])(Object(n["a"])({},t),c),o=(l.defaultValue,Object(r["a"])(l,m)),i=Object(s["a"])(a)?a(d):a;f(i),void 0===i?u.a.remove(e):u.a.set(e,i,o)}));return[d,v]}t["a"]=d},aQ7k:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("naKy"),u=a("Ys1N");function o(){var e=Object(u["a"])("useCookieStateOptions",{defaultValue:"0",path:"/",expires:(()=>new Date(+new Date+1e4))()}),t=Object(n["a"])(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,a),c.a.createElement(l["a"],{style:{marginRight:16},onClick:()=>r((e=>String(Number(e)+1)),{expires:(()=>new Date(+new Date+1e4))()})},"inc + (10s expires)"),c.a.createElement(l["a"],{style:{marginRight:16},onClick:()=>r((e=>String(Number(e)-1)),{expires:(()=>new Date(+new Date+1e4))()})},"dec - (10s expires)"),c.a.createElement(l["a"],{onClick:()=>r("0")},"reset"))}},b2g7:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("naKy"),u=a("Ys1N");function o(){var e=Object(u["a"])("useCookieStateUpdater",{defaultValue:"0"}),t=Object(n["a"])(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,a),c.a.createElement(l["a"],{style:{marginRight:"16px"},onClick:()=>r((e=>String(Number(e)+1)))},"inc +"),c.a.createElement(l["a"],{style:{marginRight:"16px"},onClick:()=>r((e=>String(Number(e)-1)))},"dec -"),c.a.createElement(l["a"],{onClick:()=>r("0")},"reset"))}},cxPF:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c}));var n=e=>"function"===typeof e,r=e=>"string"===typeof e,c=e=>"undefined"===typeof e},hsQr:function(e,t,a){"use strict";var n=a("YArd"),r=a("ahKI"),c=a("sJN1"),l=a("1DhI"),u=a("cxPF"),o=a("FBt5");function i(e,t){var a;o["a"]&&(Object(u["a"])(e)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e)));var i=Object(c["a"])(e),s=null!==(a=null===t||void 0===t?void 0:t.wait)&&void 0!==a?a:1e3,m=Object(r["useMemo"])((()=>Object(n["a"])((function(){return i.current(...arguments)}),s,t)),[]);return Object(l["a"])((()=>{m.cancel()})),{run:m,cancel:m.cancel,flush:m.flush}}t["a"]=i},lkYe:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("9f6e"),u=a("naKy"),o=a("pYEw");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(n["a"])(e,2),a=t[0],s=t[1],m=Object(r["useCallback"])((()=>{l["a"].info("Current count is ".concat(a))}),[a]),d=Object(o["a"])((()=>{l["a"].info("Current count is ".concat(a))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"count: ",a),c.a.createElement(u["a"],{type:"primary",onClick:()=>{s((e=>e+1))}},"Add Count"),c.a.createElement("p",null,"You can click the button to see the number of sub-component renderings"),c.a.createElement("div",{style:{marginTop:32}},c.a.createElement("h3",null,"Component with useCallback function:"),c.a.createElement(i,{showCount:m})),c.a.createElement("div",{style:{marginTop:32}},c.a.createElement("h3",null,"Component with useMemoizedFn function:"),c.a.createElement(i,{showCount:d})))};var i=c.a.memo((e=>{var t=e.showCount,a=Object(r["useRef"])(0);return a.current+=1,c.a.createElement("div",null,c.a.createElement("p",null,"Render Count: ",a.current),c.a.createElement(u["a"],{type:"primary",onClick:t},"showParentCount"))}))},nnHe:function(e,t,a){"use strict";var n=a("iojd"),r=a("ahKI"),c=a("pYEw"),l=a("rpwH"),u=a("cxPF");function o(e){function t(t){var a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.onError,s=void 0===i?e=>{console.error(e)}:i;try{a=e()}catch(E){s(E)}var m=e=>o.serializer?o.serializer(e):JSON.stringify(e),d=e=>o.deserializer?o.deserializer(e):JSON.parse(e);function f(){try{var e,n=null===(e=a)||void 0===e?void 0:e.getItem(t);if(n)return d(n)}catch(r){s(r)}return Object(u["a"])(o.defaultValue)?o.defaultValue():o.defaultValue}var v=Object(r["useState"])(f),p=Object(n["a"])(v,2),j=p[0],b=p[1];Object(l["a"])((()=>{b(f())}),[t]);var g=e=>{var n,r=Object(u["a"])(e)?e(j):e;if(b(r),Object(u["c"])(r))null===(n=a)||void 0===n||n.removeItem(t);else try{var c;null===(c=a)||void 0===c||c.setItem(t,m(r))}catch(l){console.error(l)}};return[j,Object(c["a"])(g)]}return t}var i=!("undefined"===typeof window||!window.document||!window.document.createElement),s=i,m=o((()=>s?localStorage:void 0));t["a"]=m},pYEw:function(e,t,a){"use strict";var n=a("ahKI"),r=a("cxPF"),c=a("FBt5");function l(e){c["a"]&&(Object(r["a"])(e)||console.error("useMemoizedFn expected parameter is a function, but got ".concat(e)));var t=Object(n["useRef"])(e);t.current=Object(n["useMemo"])((()=>e),[e]);var a=Object(n["useRef"])();return a.current||(a.current=function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return t.current.apply(this,a)}),a.current}t["a"]=l},"pd+N":function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("naKy"),u=a("nnHe"),o=["a","e","i","o","u"];t["default"]=function(){var e=Object(u["a"])("use-local-storage-state-demo2",{defaultValue:o}),t=Object(n["a"])(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,null===a||void 0===a?void 0:a.join("-")),c.a.createElement(l["a"],{style:{marginRight:"16px"},onClick:()=>r([...a,Math.random().toString(36).slice(-1)])},"push random"),c.a.createElement(l["a"],{danger:!0,onClick:()=>r(o)},"reset"))}},rpwH:function(e,t,a){"use strict";var n=a("ahKI"),r=e=>(t,a)=>{var r=Object(n["useRef"])(!1);e((()=>()=>{r.current=!1}),[]),e((()=>{if(r.current)return t();r.current=!0}),a)};t["a"]=r(n["useEffect"])},sJN1:function(e,t,a){"use strict";var n=a("ahKI");function r(e){var t=Object(n["useRef"])(e);return t.current=e,t}t["a"]=r},tHpm:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("naKy"),u=a("hsQr");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(n["a"])(e,2),a=t[0],o=t[1],i=Object(u["a"])((()=>{o(a+1)}),{wait:500}),s=i.run;return c.a.createElement("div",null,c.a.createElement("p",{style:{marginTop:16}}," Clicked count: ",a," "),c.a.createElement(l["a"],{onClick:s},"Click fast!"))}},vcr8:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("naKy"),u=a("rpwH");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(n["a"])(e,2),a=t[0],o=t[1],i=Object(r["useState"])(0),s=Object(n["a"])(i,2),m=s[0],d=s[1],f=Object(r["useState"])(0),v=Object(n["a"])(f,2),p=v[0],j=v[1];return Object(r["useEffect"])((()=>{d((e=>e+1))}),[a]),Object(u["a"])((()=>(j((e=>e+1)),()=>{})),[a]),c.a.createElement("div",null,c.a.createElement("p",null,"effectCount: ",m),c.a.createElement("p",null,"updateEffectCount: ",p),c.a.createElement("p",null,c.a.createElement(l["a"],{type:"primary",onClick:()=>o((e=>e+1))},"reRender: click count: ",a)))}},y7Gi:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("9f6e"),c=a("ahKI"),l=a.n(c),u=a("1DhI"),o=()=>(Object(u["a"])((()=>{r["a"].info("unmount")})),l.a.createElement("p",null,"Hello World!"));t["default"]=()=>{var e=Object(c["useState"])(!0),t=Object(n["a"])(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:()=>r((e=>!e))},a?"unmount":"mount"),a&&l.a.createElement(o,null))}},yQWC:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("9f6e"),u=a("naKy"),o=a("pYEw");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(n["a"])(e,2),a=t[0],i=t[1],s=Object(r["useCallback"])((()=>{l["a"].info("Current count is ".concat(a))}),[a]),m=Object(o["a"])((()=>{l["a"].info("Current count is ".concat(a))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"count: ",a),c.a.createElement(u["a"],{type:"primary",onClick:()=>{i((e=>e+1))}},"Add Count"),c.a.createElement("div",{style:{marginTop:16}},c.a.createElement(u["a"],{type:"primary",onClick:s},"call callbackFn"),c.a.createElement(u["a"],{type:"primary",onClick:m,style:{marginLeft:8}},"call memoizedFn")))}}}]);