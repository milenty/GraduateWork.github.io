!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=130)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(58))},function(t,n,e){var r=e(0),o=e(13),i=e(26),u=e(50),c=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,n,e){"use strict";e.d(n,"e",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return i})),e.d(n,"b",(function(){return c}));var r=0,o=-1,i="STORAGE_RESULT_KEY",u="STORAGE_OBJECTS_KEY",c="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(8),o=e(38),i=e(5),u=e(20),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(8),o=e(7),i=e(19);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(0),o=e(18).f,i=e(10),u=e(12),c=e(23),a=e(44),f=e(40);t.exports=function(t,n){var e,s,l,p,v,g=t.target,d=t.global,y=t.stat;if(e=d?r:y?r[g]||c(g,{}):(r[g]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(d?s:g+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n,e){var r=e(0),o=e(13),i=e(10),u=e(6),c=e(23),a=e(39),f=e(31),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,e,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||u(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=e:i(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,n,e){var r=e(30),o=e(59);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(45),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(37),o=e(22);t.exports=function(t){return r(o(t))}},function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i}));e(75),e(34),e(77);function r(t){var n=new Date(t);return n.getDate().toString()+" "+["января","февраля"," марта","апреля","мая","июня"," июля","августа","сентября","октября","ноября","декабря"][n.getMonth()]+", "+n.getFullYear().toString()}function o(t){return t.getFullYear().toString()+"-"+("0"+String(t.getMonth()+1)).slice(-2)+"-"+t.getDate().toString()}function i(t){var n=new Date(t);return n.getDate().toString()+","+[" вс","пн","вт"," ср","чт","пт","сб"][n.getDay()]}},function(t,n,e){var r=e(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(8),o=e(43),i=e(19),u=e(15),c=e(20),a=e(6),f=e(38),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(10);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(46),o=e(33).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(9);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(0),o=e(4),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,e){var r,o,i,u=e(60),c=e(0),a=e(4),f=e(10),s=e(6),l=e(32),p=e(21),v=c.WeakMap;if(u){var g=new v,d=g.get,y=g.has,h=g.set;r=function(t,n){return h.call(g,t,n),n},o=function(t){return d.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var b=l("state");p[b]=!0,r=function(t,n){return f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(13),o=e(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(12),o=e(63),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,n,e){var r=e(25);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(35),o=e(37),i=e(42),u=e(17),c=e(53),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,g,d,y){for(var h,b,x=i(v),m=o(x),S=r(g,d,3),w=u(m.length),E=0,O=y||c,j=n?O(v,w):e?O(v,0):void 0;w>E;E++)if((p||E in m)&&(b=S(h=m[E],E,x),t))if(n)j[E]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return E;case 2:a.call(j,h)}else if(s)return!1;return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(3),o=e(9),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(8),o=e(3),i=e(29);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(13);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r=e(3),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r,o,i=e(0),u=e(51),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(6),o=e(61),i=e(18),u=e(7);t.exports=function(t,n){for(var e=o(n),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||c(t,s,a(n,s))}}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(6),o=e(15),i=e(62).indexOf,u=e(21);t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)!r(u,e)&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(24),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(3),o=e(1),i=e(41),u=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r=e(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(14);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(9),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(4),o=e(28),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(7).f,o=e(6),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(14);t.exports=r("document","documentElement")},function(t,n,e){"use strict";e.p},function(t,n,e){"use strict";e.p},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(23),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=e(39),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(14),o=e(27),i=e(48),u=e(5);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(15),o=e(17),i=e(47),u=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){"use strict";var r=e(52),o={};o[e(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,n,e){"use strict";var r=e(5);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},,function(t,n,e){"use strict";var r=e(14),o=e(7),i=e(1),u=e(8),c=i("species");t.exports=function(t){var n=r(t),e=o.f;u&&n&&!n[c]&&e(n,c,{configurable:!0,get:function(){return this}})}},,,,,function(t,n,e){var r=e(46),o=e(33);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){n.f=e(1)},function(t,n,e){"use strict";var r=e(36).forEach,o=e(100);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(2);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,i;return n=t,(e=[{key:"resetCards",value:function(){null!=localStorage.getItem(r.d)&&localStorage.removeItem(r.d),null!=localStorage.getItem(r.c)&&localStorage.removeItem(r.c)}},{key:"setCards",value:function(t,n){localStorage.setItem(r.d,t),null!=n&&localStorage.setItem(r.c,n)}},{key:"getCards",value:function(){return JSON.parse(localStorage.getItem(r.c)).articles}},{key:"resultSuccess",value:function(){return JSON.parse(localStorage.getItem(r.d)).RESULT===r.e}},{key:"resultError",value:function(){return JSON.parse(localStorage.getItem(r.d)).ERRORMESSAGE}},{key:"resultKeyWord",value:function(){return JSON.parse(localStorage.getItem(r.d)).KEYWORD}},{key:"getDateFrom",value:function(){return JSON.parse(localStorage.getItem(r.d)).DATEFROM}},{key:"getDateTo",value:function(){return JSON.parse(localStorage.getItem(r.d)).DATETO}}])&&o(n.prototype,e),i&&o(n,i),t}()},function(t,n,e){"use strict";var r=e(11),o=e(4),i=e(28),u=e(47),c=e(17),a=e(15),f=e(76),s=e(49),l=e(1)("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!s("slice")},{slice:function(t,n){var e,r,s,g=a(this),d=c(g.length),y=u(t,d),h=u(void 0===n?d:n,d);if(i(g)&&("function"!=typeof(e=g.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[l])&&(e=void 0):e=void 0,e===Array||void 0===e))return p.call(g,y,h);for(r=new(void 0===e?Array:e)(v(h-y,0)),s=0;y<h;y++,s++)y in g&&f(r,s,g[y]);return r.length=s,r}})},function(t,n,e){"use strict";var r=e(20),o=e(7),i=e(19);t.exports=function(t,n,e){var u=r(n);u in t?o.f(t,u,i(0,e)):t[u]=e}},function(t,n,e){"use strict";var r=e(12),o=e(5),i=e(3),u=e(64),c=RegExp.prototype,a=c.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in c)?u.call(t):e)}),{unsafe:!0})},function(t,n,e){"use strict";var r=e(11),o=e(0),i=e(14),u=e(30),c=e(8),a=e(50),f=e(3),s=e(6),l=e(28),p=e(4),v=e(5),g=e(42),d=e(15),y=e(20),h=e(19),b=e(79),x=e(71),m=e(27),S=e(97),w=e(48),E=e(18),O=e(7),j=e(43),P=e(10),T=e(12),_=e(13),R=e(32),A=e(21),C=e(26),D=e(1),I=e(72),L=e(98),N=e(54),k=e(31),M=e(36).forEach,F=R("hidden"),G=D("toPrimitive"),W=k.set,K=k.getterFor("Symbol"),J=Object.prototype,V=o.Symbol,Y=i("JSON","stringify"),q=E.f,z=O.f,B=S.f,H=j.f,$=_("symbols"),U=_("op-symbols"),X=_("string-to-symbol-registry"),Q=_("symbol-to-string-registry"),Z=_("wks"),tt=o.QObject,nt=!tt||!tt.prototype||!tt.prototype.findChild,et=c&&f((function(){return 7!=b(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=q(J,n);r&&delete J[n],z(t,n,e),r&&t!==J&&z(J,n,r)}:z,rt=function(t,n){var e=$[t]=b(V.prototype);return W(e,{type:"Symbol",tag:t,description:n}),c||(e.description=n),e},ot=a&&"symbol"==typeof V.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},it=function(t,n,e){t===J&&it(U,n,e),v(t);var r=y(n,!0);return v(e),s($,r)?(e.enumerable?(s(t,F)&&t[F][r]&&(t[F][r]=!1),e=b(e,{enumerable:h(0,!1)})):(s(t,F)||z(t,F,h(1,{})),t[F][r]=!0),et(t,r,e)):z(t,r,e)},ut=function(t,n){v(t);var e=d(n),r=x(e).concat(st(e));return M(r,(function(n){c&&!ct.call(e,n)||it(t,n,e[n])})),t},ct=function(t){var n=y(t,!0),e=H.call(this,n);return!(this===J&&s($,n)&&!s(U,n))&&(!(e||!s(this,n)||!s($,n)||s(this,F)&&this[F][n])||e)},at=function(t,n){var e=d(t),r=y(n,!0);if(e!==J||!s($,r)||s(U,r)){var o=q(e,r);return!o||!s($,r)||s(e,F)&&e[F][r]||(o.enumerable=!0),o}},ft=function(t){var n=B(d(t)),e=[];return M(n,(function(t){s($,t)||s(A,t)||e.push(t)})),e},st=function(t){var n=t===J,e=B(n?U:d(t)),r=[];return M(e,(function(t){!s($,t)||n&&!s(J,t)||r.push($[t])})),r};(a||(T((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=C(t),e=function(t){this===J&&e.call(U,t),s(this,F)&&s(this[F],n)&&(this[F][n]=!1),et(this,n,h(1,t))};return c&&nt&&et(J,n,{configurable:!0,set:e}),rt(n,t)}).prototype,"toString",(function(){return K(this).tag})),j.f=ct,O.f=it,E.f=at,m.f=S.f=ft,w.f=st,c&&(z(V.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),u||T(J,"propertyIsEnumerable",ct,{unsafe:!0})),I.f=function(t){return rt(D(t),t)}),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:V}),M(x(Z),(function(t){L(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(s(X,n))return X[n];var e=V(n);return X[n]=e,Q[e]=n,e},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(s(Q,t))return Q[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!c},{create:function(t,n){return void 0===n?b(t):ut(b(t),n)},defineProperty:it,defineProperties:ut,getOwnPropertyDescriptor:at}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ft,getOwnPropertySymbols:st}),r({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(g(t))}}),Y)&&r({target:"JSON",stat:!0,forced:!a||f((function(){var t=V();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}))},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(p(n)||void 0!==t)&&!ot(t))return l(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!ot(n))return n}),o[1]=n,Y.apply(null,o)}});V.prototype[G]||P(V.prototype,G,V.prototype.valueOf),N(V,"Symbol"),A[F]=!0},function(t,n,e){var r=e(5),o=e(96),i=e(33),u=e(21),c=e(55),a=e(29),f=e(32)("IE_PROTO"),s=function(){},l=function(){var t,n=a("iframe"),e=i.length;for(n.style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;e--;)delete l.prototype[i[e]];return l()};t.exports=Object.create||function(t,n){var e;return null!==t?(s.prototype=r(t),e=new s,s.prototype=null,e[f]=t):e=l(),void 0===n?e:o(e,n)},u[f]=!0},function(t,n,e){"use strict";var r=e(11),o=e(8),i=e(0),u=e(6),c=e(4),a=e(7).f,f=e(44),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var g=v.toString,d="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=g.call(t);if(u(l,t))return"";var e=d?n.slice(7,-1):n.replace(y,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},,,,,,,,,,,,,,,,function(t,n,e){var r=e(8),o=e(7),i=e(5),u=e(71);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,a=0;c>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(15),o=e(27).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(45),o=e(6),i=e(72),u=e(7).f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||u(n,t,{value:i.f(t)})}},function(t,n,e){"use strict";var r=e(11),o=e(73);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){"use strict";var r=e(3);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},,function(t,n,e){var r=e(0),o=e(103),i=e(73),u=e(10);for(var c in o){var a=r[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r,o,i=e(64),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,f=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(a=function(t){var n,e,r,o,a=this;return s&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(n=a.lastIndex),r=u.call(a,t),f&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),s&&r&&r.length>1&&c.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},,,,function(t,n,e){},function(t,n,e){"use strict";var r=e(11),o=e(36).findIndex,i=e(110),u=!0;"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),r({target:"Array",proto:!0,forced:u},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},function(t,n,e){var r=e(1),o=e(79),i=e(10),u=r("unscopables"),c=Array.prototype;null==c[u]&&i(c,u,o(null)),t.exports=function(t){c[u][t]=!0}},function(t,n,e){"use strict";var r=e(11),o=e(24),i=e(112),u=e(113),c=e(3),a=1..toFixed,f=Math.floor,s=function(t,n,e){return 0===n?e:n%2==1?s(t,n-1,e*t):s(t*t,n/2,e)};r({target:"Number",proto:!0,forced:a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){a.call({})}))},{toFixed:function(t){var n,e,r,c,a=i(this),l=o(t),p=[0,0,0,0,0,0],v="",g="0",d=function(t,n){for(var e=-1,r=n;++e<6;)r+=t*p[e],p[e]=r%1e7,r=f(r/1e7)},y=function(t){for(var n=6,e=0;--n>=0;)e+=p[n],p[n]=f(e/t),e=e%t*1e7},h=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==p[t]){var e=String(p[t]);n=""===n?e:n+u.call("0",7-e.length)+e}return n};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(v="-",a=-a),a>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(a*s(2,69,1))-69)<0?a*s(2,-n,1):a/s(2,n,1),e*=4503599627370496,(n=52-n)>0){for(d(0,e),r=l;r>=7;)d(1e7,0),r-=7;for(d(s(10,r,1),0),r=n-1;r>=23;)y(1<<23),r-=23;y(1<<r),d(1,1),y(2),g=h()}else d(0,e),d(1<<-n,0),g=h()+u.call("0",l);return g=l>0?v+((c=g.length)<=l?"0."+u.call("0",l-c)+g:g.slice(0,c-l)+"."+g.slice(c-l)):v+g}})},function(t,n,e){var r=e(9);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},function(t,n,e){"use strict";var r=e(24),o=e(22);t.exports="".repeat||function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},function(t,n,e){var r=e(8),o=e(0),i=e(40),u=e(115),c=e(7).f,a=e(27).f,f=e(118),s=e(64),l=e(12),p=e(3),v=e(66),g=e(1)("match"),d=o.RegExp,y=d.prototype,h=/a/g,b=/a/g,x=new d(h)!==h;if(r&&i("RegExp",!x||p((function(){return b[g]=!1,d(h)!=h||d(b)==b||"/a/i"!=d(h,"i")})))){for(var m=function(t,n){var e=this instanceof m,r=f(t),o=void 0===n;return!e&&r&&t.constructor===m&&o?t:u(x?new d(r&&!o?t.source:t,n):d((r=t instanceof m)?t.source:t,r&&o?s.call(t):n),e?this:y,m)},S=function(t){t in m||c(m,t,{configurable:!0,get:function(){return d[t]},set:function(n){d[t]=n}})},w=a(d),E=0;w.length>E;)S(w[E++]);y.constructor=m,m.prototype=y,l(o,"RegExp",m)}v("RegExp")},function(t,n,e){var r=e(4),o=e(116);t.exports=function(t,n,e){var i,u;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(u=i.prototype)&&u!==e.prototype&&o(t,u),t}},function(t,n,e){var r=e(5),o=e(117);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){var r=e(4),o=e(9),i=e(1)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){"use strict";var r=e(11),o=e(104);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r=e(121),o=e(5),i=e(17),u=e(22),c=e(122),a=e(124);r("match",1,(function(t,n,e){return[function(n){var e=u(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var u=o(t),f=String(this);if(!u.global)return a(u,f);var s=u.unicode;u.lastIndex=0;for(var l,p=[],v=0;null!==(l=a(u,f));){var g=String(l[0]);p[v]=g,""===g&&(u.lastIndex=c(f,i(u.lastIndex),s)),v++}return 0===v?null:p}]}))},function(t,n,e){"use strict";var r=e(10),o=e(12),i=e(3),u=e(1),c=e(104),a=u("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var p=u(t),v=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),g=v&&!i((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[p]=/./[p]),e.exec=function(){return n=!0,null},e[p](""),!n}));if(!v||!g||"replace"===t&&!f||"split"===t&&!s){var d=/./[p],y=e(p,""[t],(function(t,n,e,r,o){return n.exec===c?v&&!o?{done:!0,value:d.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),h=y[0],b=y[1];o(String.prototype,t,h),o(RegExp.prototype,p,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)}),l&&r(RegExp.prototype[p],"sham",!0)}}},function(t,n,e){"use strict";var r=e(123).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(24),o=e(22),i=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(9),o=e(104);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},,,,,,function(t,n,e){"use strict";e.r(n);e(108),e(56),e(57);var r=e(74),o=(e(78),e(80),e(109),e(99),e(111),e(34),e(114),e(119),e(77),e(120),e(102),e(16));function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}for(var u=function(){function t(n,e,r,o,i){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.dataStorage=n,this.keyWordElement=e,this.analyticsNewsPerWeekElement=r,this.analyticsNewsKeywordElement=o,this.newsGridDataElements=i,this.showStatistics()}var n,e,r;return n=t,(e=[{key:"showStatistics",value:function(){this.keyWordElement.textContent="«"+this.dataStorage.resultKeyWord()+"»",this.analyticsNewsPerWeekElement.textContent=this.getNewsCount(),this.analyticsNewsKeywordElement.textContent=this.getWordRefCount();var t=this.getWordRefPerDateArr(),n=0;t.forEach((function(t){n+=t.wordRefPerDateCount})),this.newsGridDataElements.forEach((function(e){var r,i=0;(r=t.findIndex((function(t){return Object(o.b)(new Date(t.publishedAt))===e.publishedAt})))>=0&&(i=t[r].wordRefPerDateCount),e.axisYGridElement.textContent=Object(o.a)(e.publishedAt);var u=(100*i/n).toFixed(2);e.axisXGridElement.textContent=u.toString(),e.dataGridElement.style.width=u.toString()+"%"}))}},{key:"getNewsCount",value:function(){var t=this.dataStorage.getCards(),n=0;return null!=t&&(n=t.length),n}},{key:"getWordRefCount",value:function(){var t=this.dataStorage.resultKeyWord(),n=new RegExp(t,"gi"),e=this.dataStorage.getCards(),r=0;return null!=e&&e.forEach((function(t){var e=t.title.toString().match(n);null!=e&&(r+=e.length)}),this),r}},{key:"getWordRefPerDateArr",value:function(){var t=this.dataStorage.resultKeyWord(),n=new RegExp(t,"gi"),e=this.dataStorage.getCards(),r=0,i=[],u=-1;return null!=e&&e.forEach((function(t){u=-1,r=0,i.length>0&&(u=i.findIndex((function(n){return Object(o.b)(new Date(n.publishedAt))===Object(o.b)(new Date(t.publishedAt))}))),u<0&&(u=i.push({publishedAt:Object(o.b)(new Date(t.publishedAt)),wordRefPerDateCount:0})-1);var e=(t.title+t.description).toString().match(n);null!=e&&(r=e.length),i[u].wordRefPerDateCount=i[u].wordRefPerDateCount+r}),this),i}}])&&i(n.prototype,e),r&&i(n,r),t}(),c=document.querySelector(".analytics__title_user-request"),a=document.getElementById("analyticsNewsPerWeek"),f=document.getElementById("analyticsNewsKeyword"),s=new r.a,l=new Date(s.getDateFrom()),p=new Date(s.getDateTo()),v=l,g=0,d=[];v<=p;)d[g]={publishedAt:Object(o.b)(v),dataGridElement:document.querySelector(".table__rectangle_".concat(g+1)),axisYGridElement:document.querySelector(".table__date_".concat(g+1)),axisXGridElement:document.querySelector(".table__rectangle_point-".concat(g+1))},v.setDate(v.getDate()+1),g+=1;new u(s,c,a,f,d)}]);