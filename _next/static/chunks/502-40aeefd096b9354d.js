"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{4069:function(e,n,r){r.d(n,{m:function(){return t}});var t=function(e){return e.replace(/[\uff01-\uff5e]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)}))}},3851:function(e,n,r){r.d(n,{wy:function(){return fn}});var t=r(4051),i=r.n(t),o=r(5893),a=r(3853),u=r(8640),c=r(7536),s=r(7294),l=r(4184),f=r.n(l);function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function m(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var v={lg:"input-lg",md:"input-md",sm:"input-sm",xs:"input-xs"},p={default:void 0,primary:"input-primary",secondary:"input-secondary",accent:"input-accent",info:"input-info",success:"input-success",warning:"input-warning",error:"input-error"},h=function(e,n){return n?"input-error":p[e]},b=s.forwardRef((function(e,n){var r=e.size,t=void 0===r?"md":r,i=e.color,a=void 0===i?"default":i,u=e.error,c=void 0!==u&&u,s=m(e,["size","color","error"]);return(0,o.jsx)("input",function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}({type:"text"},s,{className:f()(["input input-bordered w-full",v[t],h(a,c)]),ref:n}))})),x=r(3912),y=r(9382),j=(0,r(5152).default)((function(){return Promise.all([r.e(279),r.e(229)]).then(r.bind(r,7229))}),{loadableGenerated:{webpack:function(){return[7229]}},ssr:!1}),g=function(e){var n=e.nutrition,r=e.recommendedNutrition,t=n.carbohydrate/r.carbohydrate*100,i=n.protein/r.protein*100,a=n.fat/r.fat*100,u=(0,s.useMemo)((function(){return{stroke:{colors:["#5BBBC1"]},fill:{opacity:.3,colors:["#5BBBC1"]},chart:{id:"basic-bar",toolbar:{show:!1},parentHeightOffset:0},legend:{show:!1},xaxis:{categories:["\u70ad\u6c34\u5316\u7269","\u30bf\u30f3\u30d1\u30af\u8cea","\u8102\u8cea"]},yaxis:{max:100,labels:{formatter:function(e){return 100===e?"100%":""}}},markers:{size:0},tooltip:{enabled:!1}}}),[]),c=(0,s.useMemo)((function(){return[{name:"\u6442\u53d6\u91cf",data:[t,i,a]}]}),[t,i,a]);return(0,o.jsx)(j,{options:u,series:c,type:"radar",height:"300"})},w=function(e){var n=e.name,r=e.value,t=e.items,i=e.onChange,a=(0,s.useCallback)((function(e){var n=t[e];if(void 0===n)throw new Error("ButtonGroupComponent\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044".concat(e,"\u756a\u76ee\u306eindex\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u307e\u3057\u305f"));i(n.value)}),[t,i]);return(0,o.jsx)("div",{className:"btn-group",children:t.map((function(e,t){return void 0===n?(0,o.jsx)("button",{type:"button",className:f()(["btn btn-sm",{"btn-active":r===e.value}]),onClick:function(){return a(t)},children:e.label},t):(0,o.jsx)("input",{type:"radio",name:n,"data-title":e.label,className:"btn btn-sm",value:e.value,checked:r===e.value,onChange:function(){return a(t)}},t)}))})},O=function(e,n){var r=Math.pow(10,-n);return Math.round(e*r)/r},k=function(e){var n=e.title,r=e.max,t=e.data,i=e.unit,a=(0,s.useState)(!1),u=a[0],c=a[1],l=(0,s.useMemo)((function(){return t/r*100}),[t,r]);(0,s.useEffect)((function(){setTimeout((function(){c(!0)}),250)}),[]);var d=(0,s.useMemo)((function(){return u?{width:"".concat(l,"%")}:{width:"0%"}}),[u,l]);return(0,o.jsxs)("div",{className:"my-4",children:[(0,o.jsxs)("div",{className:f()(["flex","items-center","w-full"]),children:[(0,o.jsx)("div",{className:f()(["flex-grow-0","flex-shrink-0","w-20","text-xs"]),children:n}),(0,o.jsx)("div",{className:f()(["flex-grow"]),children:(0,o.jsx)("div",{className:"h-4 w-full bg-base-200 overflow-hidden rounded-r-full",children:(0,o.jsx)("div",{className:"h-full bg-primary rounded-r-full transition-all duration-500 origin-left",style:d})})})]}),(0,o.jsxs)("div",{className:f()(["flex","items-center","w-full"]),children:[(0,o.jsx)("div",{className:f()(["flex-grow-0","flex-shrink-0","w-20"])}),(0,o.jsx)("div",{className:f()(["flex-grow"]),children:(0,o.jsxs)("div",{className:"flex justify-between mt-1",children:[(0,o.jsxs)("div",{className:"text-xs",children:[O(t,-2),i]}),(0,o.jsxs)("div",{className:"text-xs text-gray-500",children:[O(r,-2),i]})]})})]})]})};function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return _(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(e,n){return Object.fromEntries(Object.entries(e).map((function(e){var r=S(e,2),t=r[0],i=r[1];return[t,n(t,i)]})))},N=r(624),P=function(e,n){return C(e,(function(e,r){return r*n}))},F={energy_kcal:"\u30a8\u30cd\u30eb\u30ae\u30fc",protein:"\u30bf\u30f3\u30d1\u30af\u8cea",fat:"\u8102\u8cea",carbohydrate:"\u70ad\u6c34\u5316\u7269",vitamin_a:"\u30d3\u30bf\u30df\u30f3A",vitamin_d:"\u30d3\u30bf\u30df\u30f3D",vitamin_e:"\u30d3\u30bf\u30df\u30f3E",vitamin_k:"\u30d3\u30bf\u30df\u30f3K",vitamin_b1:"\u30d3\u30bf\u30df\u30f3B1",vitamin_b2:"\u30d3\u30bf\u30df\u30f3B2",niacin:"\u30ca\u30a4\u30a2\u30b7\u30f3",vitamin_b6:"\u30d3\u30bf\u30df\u30f3B6",vitamin_b12:"\u30d3\u30bf\u30df\u30f3B12",folic_acid:"\u8449\u9178",pantothenic_acid:"\u30d1\u30f3\u30c8\u30c6\u30f3\u9178",vitamin_c:"\u30d3\u30bf\u30df\u30f3C",k:"\u30ab\u30ea\u30a6\u30e0",ca:"\u30ab\u30eb\u30b7\u30a6\u30e0",mg:"\u30de\u30b0\u30cd\u30b7\u30a6\u30e0",phosphorus:"\u30ea\u30f3",iron:"\u9244",zn:"\u4e9c\u925b",copper:"\u9285",mn:"\u30de\u30f3\u30ac\u30f3",salt:"\u98df\u5869\u76f8\u5f53\u91cf"},E={energy_kcal:"kcal",protein:"g",fat:"g",carbohydrate:"g",vitamin_a:"\u03bcg",vitamin_d:"\u03bcg",vitamin_e:"mg",vitamin_k:"\u03bcg",vitamin_b1:"mg",vitamin_b2:"mg",niacin:"mg",vitamin_b6:"mg",vitamin_b12:"\u03bcg",folic_acid:"\u03bcg",pantothenic_acid:"mg",vitamin_c:"mg",k:"mg",ca:"mg",mg:"mg",phosphorus:"mg",iron:"mg",zn:"mg",copper:"mg",mn:"mg",salt:"g"},I=function(e){var n=e.value,r=e.onChange;return(0,o.jsx)(w,{value:n,items:[{label:"1\u65e5\u3042\u305f\u308a",value:"per_day"},{label:"1\u98df\u3042\u305f\u308a",value:"per_meal"}],onChange:r})},A=function(e){var n=e.nutrientDetails;return(0,o.jsx)("div",{children:n.map((function(e,n){return(0,o.jsx)(k,{title:e.name,max:e.recommended,data:e.data,unit:e.unit},n)}))})},M=["energy_kcal","protein","fat","carbohydrate"],D=["vitamin_a","vitamin_d","vitamin_e","vitamin_k","vitamin_b1","vitamin_b2","niacin","vitamin_b6","vitamin_b12","folic_acid","pantothenic_acid","vitamin_c"],z=["k","ca","mg","phosphorus","iron","zn","copper","mn","salt"],B=function(e,n,r){return e.map((function(e){return function(e,n,r){return{name:F[e],data:n[e],recommended:r[e],unit:E[e]}}(e,n,r)}))},T=function(e){var n=e.nutrition,r=e.recommendedNutrition,t=(0,s.useMemo)((function(){return B(M,n,r)}),[n,r]),i=(0,s.useMemo)((function(){return B(D,n,r)}),[n,r]),a=(0,s.useMemo)((function(){return B(z,n,r)}),[n,r]);return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:(0,o.jsx)(g,{nutrition:n,recommendedNutrition:r})}),(0,o.jsx)("div",{children:(0,o.jsx)(A,{nutrientDetails:t})}),(0,o.jsxs)("div",{className:"sm:grid grid-cols-2 gap-8 mt-16",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"text-xl font-bold",children:"\u30d3\u30bf\u30df\u30f3"}),(0,o.jsx)("div",{className:"mt-8",children:(0,o.jsx)(A,{nutrientDetails:i})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"text-xl font-bold",children:"\u30df\u30cd\u30e9\u30eb\u30fb\u305d\u306e\u4ed6"}),(0,o.jsx)("div",{className:"mt-8",children:(0,o.jsx)(A,{nutrientDetails:a})})]})]})]})},R=function(e){var n=e.nutrition,r=(0,s.useState)("per_day"),t=r[0],i=r[1],a=(0,s.useMemo)((function(){return{energy_kcal:2700,protein:65,fat:75,carbohydrate:388,vitamin_a:900,vitamin_d:8.5,vitamin_e:6,vitamin_k:150,vitamin_b1:1.4,vitamin_b2:1.6,niacin:15,vitamin_b6:1.4,vitamin_b12:2.4,folic_acid:240,pantothenic_acid:5,vitamin_c:100,k:2500,ca:750,mg:370,phosphorus:1e3,iron:7.5,zn:11,copper:.9,mn:4,salt:7.5}}),[]),u=(0,s.useMemo)((function(){return C(a,(function(e,n){return"per_meal"===t?n/3:n}))}),[a,t]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"sm:flex justify-between",children:[(0,o.jsx)("div",{children:(0,o.jsx)(N.B,{size:"sub",children:"\u6804\u990a\u8a73\u7d30"})}),(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("p",{className:"text-sm",children:"\u6804\u990a\u76ee\u5b89"}),(0,o.jsx)("div",{className:"ml-1",children:(0,o.jsx)(I,{value:t,onChange:i})})]})]}),(0,o.jsx)("div",{className:"mt-4",children:(0,o.jsx)(T,{nutrition:n,recommendedNutrition:u})})]})},U=r(9743);function Z(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function V(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var q=function(e){var n=e.children,r=V(e,["children"]);return(0,o.jsxs)(U.C,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){Z(e,n,r[n])}))}return e}({target:"_blank",rel:"noopener noreferrer"},r,{children:[n,(0,o.jsx)(y.o,{icon:"open_in_new"})]}))},L=r(4697),$=r(5625),G=r(4069);function K(e,n,r,t,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void r(s)}u.done?n(c):Promise.resolve(c).then(t,i)}function H(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){K(o,t,i,a,u,"next",e)}function u(e){K(o,t,i,a,u,"throw",e)}a(void 0)}))}}function Q(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function X(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var J=function(e){var n=e.onValueChange,r=e.onChange,t=e.onBlur,a=X(e,["onValueChange","onChange","onBlur"]),u=function(){var e=H(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t.target.value);case 2:void 0!==r&&r(t);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=H(i().mark((function e(r){var o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.target.value,a=(0,G.m)(o),e.next=4,n(a);case 4:void 0!==t&&t(r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,o.jsx)(b,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){Q(e,n,r[n])}))}return e}({},a,{onChange:u,onBlur:c}))},W=function(e){var n=e.children;return(0,o.jsx)("div",{className:"w-28 inline-block",children:(0,o.jsxs)("label",{className:"input-group",children:[n,(0,o.jsx)("span",{children:"g"})]})})};function Y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ee(){return ee=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},ee.apply(this,arguments)}function ne(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){Y(e,n,r[n])}))}return e}var re=function(e){var n=ee({},e);return(0,o.jsx)(W,{children:(0,o.jsx)(J,ne({},n,{size:"sm"}))})};function te(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function ie(e,n,r,t,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void r(s)}u.done?n(c):Promise.resolve(c).then(t,i)}function oe(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return te(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return te(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ae=function(e){var n=e.foodstuff,r=n.unit.amount,t=(0,s.useState)("".concat(r)),a=t[0],u=t[1],c=(0,s.useMemo)((function(){var e=(0,$.v)(a);return e.isFailure()?0:e.value}),[a]),l=oe((0,L.Nr)(c,500),1)[0],f=(0,s.useMemo)((function(){return P(n.nutrition,l)}),[n.nutrition,l]),d="https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=".concat(n.id);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"inline-block mr-2",children:(0,o.jsx)(N.B,{size:"main",children:n.name})}),(0,o.jsxs)("span",{className:"text-sm inline-block align-bottom",children:[r,"g",void 0!==n.unit.text&&"(".concat(n.unit.text,")")]})]}),(0,o.jsxs)("div",{className:"text-sm mt-4",children:[(0,o.jsx)(re,{value:a,onValueChange:function(){var e,n=(e=i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u(n));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){ie(o,t,i,a,u,"next",e)}function u(e){ie(o,t,i,a,u,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}()}),"\u3042\u305f\u308a\u306e\u6804\u990a\u91cf"]}),(0,o.jsx)("div",{className:"mt-8",children:(0,o.jsx)(R,{nutrition:f})}),(0,o.jsxs)("div",{className:"text-xs text-right mt-4",children:["\u98df\u54c1\u6210\u5206\u306b\u95a2\u3057\u3066\u306f\u3001",(0,o.jsx)(q,{href:d,children:"\u98df\u54c1\u6210\u5206\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30c7\u30fc\u30bf"}),"\u3092\u5143\u306b\u7b97\u51fa\u3057\u3066\u304a\u308a\u307e\u3059\u3002"]})]})},ue=r(3935),ce=function(e){var n=e.children,r=document.getElementById("root");if(null===r)throw new Error("id=root\u306e\u8981\u7d20\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002");return ue.createPortal(n,r)},se=function(e){var n=e.children,r=e.onClose,t=e.actionAreaContent;return(0,o.jsx)(ce,{children:(0,o.jsxs)("div",{className:"modal modal-open",children:[(0,o.jsx)("div",{className:f()(["fixed","inset-0"]),onClick:r}),(0,o.jsxs)("div",{className:"modal-box max-w-2xl",children:[n,void 0!==t&&(0,o.jsx)("div",{className:"modal-action",children:t})]})]})})},le=r(8767),fe=r(452),de=r(8453),me=r(2433),ve=r(1642),pe=r(1514),he=r(7186);function be(e,n,r,t,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void r(s)}u.done?n(c):Promise.resolve(c).then(t,i)}function xe(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){be(o,t,i,a,u,"next",e)}function u(e){be(o,t,i,a,u,"throw",e)}a(void 0)}))}}var ye=he.R.getFoodstuffsSchema,je=function(e){return xe(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,ve.c)({method:"get",url:pe.T.getFoodstuffsUrl(),params:new URLSearchParams({keyword:e})});case 2:if(!(r=n.sent).isFailure()){n.next=5;break}return n.abrupt("return",r);case 5:return n.abrupt("return",new me.f(ye.parse(r.value)));case 6:case"end":return n.stop()}}),n)})))()},ge=function(e){return xe(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,ve.c)({method:"get",url:pe.T.getFoodstuffUrl(e)});case 2:if(!(r=n.sent).isFailure()){n.next=5;break}return n.abrupt("return",r);case 5:return n.abrupt("return",new me.f(he.R.getFoodstuffSchema.parse(r.value)));case 6:case"end":return n.stop()}}),n)})))()},we=r(6302);function Oe(e,n,r,t,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void r(s)}u.done?n(c):Promise.resolve(c).then(t,i)}function ke(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var _e=function(){var e,n=(e=i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge(n);case 2:if(!(r=e.sent).isFailure()){e.next=5;break}throw r.error;case 5:return e.abrupt("return",r.value);case 6:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){Oe(o,t,i,a,u,"next",e)}function u(e){Oe(o,t,i,a,u,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}(),Se=function(e){var n=(0,s.useMemo)((function(){return e.map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){ke(e,n,r[n])}))}return e}({queryKey:[fe.Z.FOODSTUFF,e],queryFn:function(){return _e(e)}},de.b.FOODSTUFF)}))}),[e]),r=(0,le.useQueries)(n),t=r.some((function(e){return e.isError}));return{data:(0,s.useMemo)((function(){var e=r.map((function(e){return e.data}));if(!(0,we.$)(e))return e}),[r]),isError:t}},Ce=function(e){var n=e.foodstuffId,r=e.onClose,t=function(e){var n=(0,s.useMemo)((function(){return[fe.Z.FOODSTUFF,e]}),[e]),r=(0,s.useCallback)((function(){return _e(e)}),[e]),t=(0,le.useQuery)(n,r,de.b.FOODSTUFF);return{data:t.data,isError:t.isError}}(n),i=t.data,a=t.isError;return(0,o.jsx)(se,{onClose:r,children:a?(0,o.jsx)(x.w,{type:"error",children:"\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"}):void 0===i?(0,o.jsx)("div",{}):(0,o.jsx)(ae,{foodstuff:i})})},Ne=r(900),Pe=r(6860);function Fe(e,n,r,t,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void r(s)}u.done?n(c):Promise.resolve(c).then(t,i)}var Ee=function(){var e,n=(e=i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(n);case 2:if(!(r=e.sent).isFailure()){e.next=5;break}throw r.error;case 5:return e.abrupt("return",r.value);case 6:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){Fe(o,t,i,a,u,"next",e)}function u(e){Fe(o,t,i,a,u,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();function Ie(e,n,r,t,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void r(s)}u.done?n(c):Promise.resolve(c).then(t,i)}var Ae=function(e){return"button_add_".concat(e)},Me=function(e){var n=e.foodstuff,r=e.onClickAdd,t=(0,s.useState)("".concat(n.unit.amount)),a=t[0],c=t[1],l=(0,s.useCallback)((function(){r(n,a)}),[n,r,a]),d=(0,s.useState)(!1),m=d[0],v=d[1],p=(0,s.useCallback)((function(){v(!0)}),[]),h=(0,s.useCallback)((function(){v(!1)}),[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex justify-between items-center",children:[(0,o.jsxs)("div",{className:"sm:flex items-end",children:[(0,o.jsx)("button",{type:"button",className:"link mr-4",onClick:p,children:n.name}),n.unit.text&&(0,o.jsx)("div",{className:f()(["text-xs"]),children:"".concat(n.unit.text,"(").concat(n.unit.amount,"g)")})]}),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:f()(["flex","gap-2"]),children:[(0,o.jsx)(re,{value:a,onValueChange:function(){var e,n=(e=i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c(n));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){Ie(o,t,i,a,u,"next",e)}function u(e){Ie(o,t,i,a,u,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}()}),(0,o.jsx)(u.r,{size:"sm",onClick:l,"data-testid":Ae(n.id),children:(0,o.jsx)("span",{children:"\u8ffd\u52a0"})})]})})]}),m&&(0,o.jsx)(Ce,{foodstuffId:n.id,onClose:h})]})},De=function(e){var n=e.items,r=e.onClickAdd;return(0,o.jsx)(Ne.n,{children:n.map((function(e){return(0,o.jsx)(Pe.G,{children:(0,o.jsx)(Me,{foodstuff:e,onClickAdd:r})},e.id)}))})},ze=function(e){var n=e.onClick;return(0,o.jsxs)(u.r,{onClick:n,xSize:"block",color:"ghost",children:[(0,o.jsx)("span",{className:"mr-2",children:(0,o.jsx)(y.o,{icon:"arrow_back"})}),"\u30ec\u30b7\u30d4\u8a73\u7d30\u3078\u623b\u308b"]})},Be=function(e){var n=e.keyword,r=e.onClickAdd,t=e.onClickBack,i=function(e){var n=(0,s.useMemo)((function(){return[fe.Z.FOODSTUFFS,e]}),[e]),r=(0,s.useCallback)((function(){return Ee(e)}),[e]),t=(0,le.useQuery)(n,r,de.b.FOODSTUFF);return{data:t.data,isError:t.isError}}(n),a=i.data,u=i.isError;return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"mb-8",children:(0,o.jsx)(ze,{onClick:t})}),(0,o.jsxs)("div",{className:"text-2xl font-bold mb-8",children:["\u300c",n,"\u300d\u306e\u691c\u7d22\u7d50\u679c"]}),(0,o.jsx)("div",{className:"mb-8",children:u?(0,o.jsx)(x.w,{type:"error",children:"\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"}):void 0===a?(0,o.jsx)("div",{}):(0,o.jsx)(De,{items:a,onClickAdd:r})}),(0,o.jsx)(ze,{onClick:t})]})},Te=function(e){var n=e.id,r=e.placeholder,t=e.onSubmit,i=e.submitText,a=(0,s.useState)(""),c=a[0],l=a[1],f=(0,s.useCallback)((function(e){l(e.target.value)}),[]),d=(0,s.useCallback)((function(e){e.stopPropagation(),e.preventDefault(),t(c),l("")}),[c,t]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ce,{children:(0,o.jsx)("form",{id:n,"data-testid":n,onSubmit:d})}),(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)(b,{value:c,placeholder:r,onChange:f,form:n}),(0,o.jsx)(u.r,{type:"submit",form:n,children:null!==i&&void 0!==i?i:"\u691c\u7d22"})]})]})},Re=function(e){var n=(0,s.useMemo)((function(){return e.map((function(e){return e.foodstuffId}))}),[e]),r=Se(n),t=r.data,i=r.isError;return{data:(0,s.useMemo)((function(){if(void 0!==t)return function(e){var n={energy_kcal:0,protein:0,fat:0,carbohydrate:0,vitamin_a:0,vitamin_d:0,vitamin_e:0,vitamin_k:0,vitamin_b1:0,vitamin_b2:0,niacin:0,vitamin_b6:0,vitamin_b12:0,folic_acid:0,pantothenic_acid:0,vitamin_c:0,k:0,ca:0,mg:0,phosphorus:0,iron:0,zn:0,copper:0,mn:0,salt:0};return e.map((function(e){return P(e.foodstuff.nutrition,e.amount)})).reduce((function(e,n){return C(e,(function(e,r){return r+n[e]}))}),n)}(e.map((function(e){var n=e.foodstuffId,r=e.amount,i=t.find((function(e){return e.id===n}));if(void 0===i)throw new Error("".concat(n," \u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"));return{foodstuff:i,amount:r}})))}),[t,e]),isError:i}},Ue=function(e){var n=e.message,r=e.withMargin,t=void 0===r||r;return(0,o.jsx)(o.Fragment,{children:n&&(0,o.jsx)("div",{className:f()(["text-error",{"mt-2":t}]),role:"alert",children:n})})},Ze=function(e,n){var r=n.getFieldState,t=n.formState;return(0,s.useMemo)((function(){return function(e,n,r){var t;return null===(t=e(r,n).error)||void 0===t?void 0:t.message}(r,t,e)}),[r,t,e])};function Ve(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function qe(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Le=s.forwardRef((function(e,n){var r=e.onBlur,t=qe(e,["onBlur"]);return(0,o.jsx)(b,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){Ve(e,n,r[n])}))}return e}({ref:n},t,{onBlur:function(e){var n=(0,G.m)(e.target.value);e.target.value="".concat(n),void 0!==r&&r(e)}}))}));function $e(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Ge(){return Ge=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},Ge.apply(this,arguments)}function Ke(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){$e(e,n,r[n])}))}return e}var He=s.forwardRef((function(e,n){var r=Ge({},e);return(0,o.jsx)(W,{children:(0,o.jsx)(Le,Ke({ref:n},r,{size:"sm"}))})}));function Qe(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function Xe(e,n,r,t,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void r(s)}u.done?n(c):Promise.resolve(c).then(t,i)}function Je(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){Xe(o,t,i,a,u,"next",e)}function u(e){Xe(o,t,i,a,u,"throw",e)}a(void 0)}))}}function We(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Ye(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){We(e,n,r[n])}))}return e}function en(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Qe(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Qe(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var nn="input_name",rn="button_submit",tn="form_foodstuff_search",on=function(e){return"button_delete_".concat(e)},an=function(e){var n=e.index,r=e.foodstuff,t=e.onClickDelete,i=(0,a.r)(),c=i.register,l="items.".concat(n,".amount"),d=Ze(l,i),m=(0,s.useState)(!1),v=m[0],p=m[1],h=(0,s.useCallback)((function(){p(!0)}),[]),b=(0,s.useCallback)((function(){p(!1)}),[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex justify-between items-center",children:[(0,o.jsxs)("div",{className:"sm:flex items-end",children:[(0,o.jsx)("button",{type:"button",className:"link mr-4",onClick:h,children:r.name}),r.unit.text&&(0,o.jsx)("div",{className:f()(["text-xs"]),children:"".concat(r.unit.text,"(").concat(r.unit.amount,"g)")})]}),(0,o.jsxs)("div",{className:"flex flex-col items-end",children:[(0,o.jsxs)("div",{className:"flex gap-2",children:[(0,o.jsx)(He,Ye({},c(l),{error:!!d})),(0,o.jsx)(u.r,{size:"sm",shape:"circle",color:"ghost",onClick:t,"data-testid":on(n),children:(0,o.jsx)(y.o,{icon:"delete",size:"xl"})})]}),(0,o.jsx)(Ue,{message:d})]})]}),v&&(0,o.jsx)(Ce,{foodstuffId:r.id,onClose:b})]})},un=function(e){var n=e.recipeItemFields,r=e.onClickDelete,t=(0,s.useCallback)(function(){var e=Je(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[r]);return(0,o.jsx)(o.Fragment,{children:n.length>0?(0,o.jsx)(Ne.n,{children:n.map((function(e,n){return(0,o.jsx)(Pe.G,{children:(0,o.jsx)(an,{index:n,foodstuff:e.foodstuff,onClickDelete:function(){return t(n)}})},e.id)}))}):(0,o.jsx)("div",{className:"text-sm",children:"\u98df\u6750\u3092\u691c\u7d22\u3057\u3066\u3001\u30ec\u30b7\u30d4\u306b\u98df\u6750\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})})},cn=s.memo((function(e){var n=e.foodstuffs,r=Re(n),t=r.data;return r.isError?(0,o.jsx)(x.w,{type:"error",children:"\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"}):void 0===t?(0,o.jsx)("div",{}):(0,o.jsx)(R,{nutrition:t})})),sn=s.memo((function(){var e=(0,a.r)().control,n=(0,c.qo)({name:"items",control:e,defaultValue:[]}),r=en((0,L.Nr)(n,500),1)[0],t=(0,s.useMemo)((function(){return r.map((function(e){var n=(0,$.v)(e.amount),r=n.isSuccess()?n.value:0;return{foodstuffId:e.foodstuff.id,amount:r}}))}),[r]);return(0,o.jsx)(o.Fragment,{children:t.length>0&&(0,o.jsx)(cn,{foodstuffs:t})})})),ln=function(e){var n=e.recipeItemFields,r=e.onClickDelete,t=e.onClickSearch,i=(0,a.r)(),c=i.register,s=Ze("name",i);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:(0,o.jsx)(N.B,{size:"sub",children:"\u30ec\u30b7\u30d4"})}),(0,o.jsxs)("div",{className:"mt-8",children:[(0,o.jsx)("div",{children:(0,o.jsx)(N.B,{size:"subsub",children:"\u30ec\u30b7\u30d4\u540d"})}),(0,o.jsxs)("div",{className:"mt-4",children:[(0,o.jsx)(b,Ye({},c("name"),{error:!!s,"data-testid":nn})),(0,o.jsx)(Ue,{message:s})]})]}),(0,o.jsxs)("div",{className:"mt-6",children:[(0,o.jsx)("div",{className:"mb-4",children:(0,o.jsx)(N.B,{size:"subsub",children:"\u4f7f\u7528\u98df\u6750"})}),(0,o.jsx)("div",{children:(0,o.jsx)(un,{recipeItemFields:n,onClickDelete:r})}),(0,o.jsx)("div",{className:"mt-4",children:(0,o.jsx)(Te,{id:tn,onSubmit:t,submitText:"\u98df\u6750\u691c\u7d22"})})]})]}),(0,o.jsx)("div",{className:"mt-8",children:(0,o.jsx)(sn,{})}),(0,o.jsx)("div",{className:"text-center mt-8",children:(0,o.jsx)(u.r,{type:"submit",xSize:"wide",color:"primary","data-testid":rn,children:"\u767b\u9332"})})]})},fn=function(e){var n=e.topErrorMessage,r=e.onSubmit,t=(0,a.r)(),u=t.handleSubmit,l=t.control,d=(0,c.Dq)({name:"items",control:l}),m=d.fields,v=d.append,p=d.remove,h=function(){var e=(0,s.useState)("recipe"),n=e[0],r=e[1],t=(0,s.useState)(""),i=t[0],o=t[1];return(0,s.useEffect)((function(){window.scrollTo({top:0})}),[n]),{mode:n,filteringKeyword:i,toSearchResult:(0,s.useCallback)((function(e){o(e),r("search")}),[]),toRecipeDetail:(0,s.useCallback)((function(){r("recipe")}),[])}}(),b=h.mode,y=h.filteringKeyword,j=h.toSearchResult,g=h.toRecipeDetail,w=(0,s.useCallback)((function(e,n){v({foodstuff:e,amount:n},{shouldFocus:!1}),g()}),[g,v]),O=(0,s.useCallback)(function(){var e=Je(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[p]);return(0,o.jsxs)("form",{onSubmit:u(r),children:["search"===b&&(0,o.jsx)(Be,{keyword:y,onClickAdd:w,onClickBack:g}),(0,o.jsxs)("div",{className:f()({hidden:"recipe"!==b}),children:[n.length>0&&(0,o.jsx)("div",{className:"mb-8",children:(0,o.jsx)(x.w,{type:"error",children:n})}),(0,o.jsx)(ln,{recipeItemFields:m,onClickDelete:O,onClickSearch:j})]})]})}},4299:function(e,n,r){r.d(n,{H:function(){return m}});var t=r(5893),i=r(1604),o=r(5625),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.z.string().superRefine((function(n,r){!0===e.required&&""===n&&r.addIssue({code:i.z.ZodIssueCode.custom,message:"\u5fc5\u9808\u9805\u76ee\u3067\u3059\u3002"}),void 0!==e.minLength&&n.length<e.minLength&&r.addIssue({code:i.z.ZodIssueCode.custom,message:"".concat(e.minLength,"\u6587\u5b57\u4ee5\u4e0a\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002")}),void 0!==e.maxLength&&n.length>e.maxLength&&r.addIssue({code:i.z.ZodIssueCode.custom,message:"".concat(e.maxLength,"\u6587\u5b57\u4ee5\u4e0b\u3067\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002")})}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.z.string().superRefine((function(n,r){var t=(0,o.v)(n);if(t.isFailure())r.addIssue({code:i.z.ZodIssueCode.custom,message:"\u6570\u5024\u3092\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002"});else{var a=t.value;void 0!==e.min&&a<e.min&&r.addIssue({code:i.z.ZodIssueCode.custom,message:"".concat(e.min,"\u4ee5\u4e0a\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")}),void 0!==e.max&&e.max<a&&r.addIssue({code:i.z.ZodIssueCode.custom,message:"".concat(e.max,"\u4ee5\u4e0b\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")})}}))},c=r(7536);var s=r(6522),l=r(8742);function f(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var d=i.Ry({name:a({required:!0}),items:i.IX(i.Ry({foodstuff:i.Ry({id:i.Z_(),name:i.Z_(),unit:i.Ry({text:i.Z_().optional(),amount:i.Rx()})}),amount:u({min:l.M.RECIPE_FOODSTUFF_AMOUNT_MIN,max:l.M.RECIPE_FOODSTUFF_AMOUNT_MAX})}))}),m=function(e){var n=e.defaultValues,r=e.children,i=function(e,n){return(0,c.cI)({mode:"onBlur",defaultValues:e,resolver:n})}(n,(0,s.F)(d));return(0,t.jsx)(c.RV,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){f(e,n,r[n])}))}return e}({},i,{children:r}))}},3853:function(e,n,r){r.d(n,{r:function(){return i}});var t=r(7536),i=function(){return(0,t.Gc)()}},5045:function(e,n,r){r.d(n,{F:function(){return s},i:function(){return c}});var t=r(5625),i=r(6302),o=r(2433);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}var c=function(e){var n=e.items.map((function(e){var n=(0,t.v)(e.amount);if(!n.isFailure())return u({},e,{amount:n.value})}));return(0,i.$)(n)?new o.t(new Error("amount\u306e\u6587\u5b57\u5217\u304b\u3089\u6570\u5024\u306e\u5909\u63db\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002")):new o.f(u({},e,{items:n}))},s=function(e){var n=e.items.map((function(e){return u({},e,{amount:"".concat(e.amount)})}));return u({},e,{items:n})}},4237:function(e,n,r){r.d(n,{H:function(){return l}});var t=r(4051),i=r.n(t),o=r(7294);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function u(e,n,r,t,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void r(s)}u.done?n(c):Promise.resolve(c).then(t,i)}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=function(e,n){Object.entries(e).forEach((function(e){var r=c(e,2),t=r[0];r[1].forEach((function(e){n.setError(t,{message:e})}))}))},l=function(e){var n=e.execFunc,r=e.onSuccess,t=e.useFormReturn,a=e.scrollToTopOnError,c=void 0===a||a,l=(0,o.useState)(""),f=l[0],d=l[1],m=(0,o.useCallback)(function(){var e,o=(e=i().mark((function e(o){var a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(""),e.next=3,n(o);case 3:(a=e.sent).isFailure()?("bad_request"===(u=a.error.details).type?(s(u.data,t),d("\u5165\u529b\u5185\u5bb9\u306b\u8aa4\u308a\u304c\u3042\u308a\u307e\u3059\u3002")):d("\u901a\u4fe1\u30a8\u30e9\u30fc"),c&&window.scrollTo({top:0})):r(a.value);case 5:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){u(o,t,i,a,c,"next",e)}function c(e){u(o,t,i,a,c,"throw",e)}a(void 0)}))});return function(e){return o.apply(this,arguments)}}(),[n,r,c,t]);return{topErrorMessage:f,onSubmit:m}}},5625:function(e,n,r){r.d(n,{v:function(){return o}});var t=r(2433),i=r(4069),o=function(e){var n=(0,i.m)(e);if(n.length<=0)return new t.t(new Error("\u7a7a\u6587\u5b57\u5217\u306f\u6570\u5024\u306b\u5909\u63db\u3067\u304d\u307e\u305b\u3093\u3002"));var r=Number(n);return isNaN(r)?new t.t(new Error("\u6587\u5b57\u5217".concat(e,"\u3092\u6570\u5024\u306b\u5909\u63db\u3057\u305f\u7d50\u679cNaN\u306b\u306a\u308a\u307e\u3057\u305f\u3002"))):new t.f(r)}}}]);