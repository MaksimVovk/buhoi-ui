module.exports=function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=23)}([function(e,t,n){"use strict";var r=n(56);e.exports=function(){return r.NO_OP}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},u=0;u<this.length;u++){var o=this[u][0];"number"==typeof o&&(r[o]=!0)}for(u=0;u<t.length;u++){var i=t[u];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),u=n(45),o=n(44),i=n(43),a=n(10);n(12);n.d(t,"createStore",function(){return r.a}),n.d(t,"combineReducers",function(){return u.a}),n.d(t,"bindActionCreators",function(){return o.a}),n.d(t,"applyMiddleware",function(){return i.a}),n.d(t,"compose",function(){return a.a})},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],u=d[r.id];if(u){u.refs++;for(var o=0;o<u.parts.length;o++)u.parts[o](r.parts[o]);for(;o<r.parts.length;o++)u.parts.push(l(r.parts[o],t))}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(l(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var u=e[r],o=u[0],i=u[1],a=u[2],l=u[3],c={css:i,media:a,sourceMap:l};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function u(e,t){var n=v(),r=I[I.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),I.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=I.indexOf(e);t>=0&&I.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",u(e,t),t}function a(e){var t=document.createElement("link");return t.rel="stylesheet",u(e,t),t}function l(e,t){var n,r,u;if(t.singleton){var l=h++;n=T||(T=i(t)),r=c.bind(null,n,l,!1),u=c.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),r=f.bind(null,n),u=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),r=s.bind(null,n),u=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else u()}}function c(e,t,n,r){var u=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,u);else{var o=document.createTextNode(u),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var u=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(u),o&&URL.revokeObjectURL(o)}var d={},p=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},E=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=p(function(){return document.head||document.getElementsByTagName("head")[0]}),T=null,h=0,I=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},void 0===t.singleton&&(t.singleton=E()),void 0===t.insertAt&&(t.insertAt="bottom");var u=r(e);return n(u,t),function(e){for(var o=[],i=0;i<u.length;i++){var a=u[i],l=d[a.id];l.refs--,o.push(l)}if(e){n(r(e),t)}for(var i=0;i<o.length;i++){var l=o[i];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete d[l.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=require("buhoi-client")},function(e,t){e.exports=require("moment")},function(e,t,n){"use strict";function r(e){function t(e){n(e.toDate())}var n=e.onChange,r=e.mode,i=void 0===r?"start":r;if(!e.value)return v(16,E);var a="start"==i?s(e.value).startOf("day"):s(e.value).endOf("day");return v(2,"div","calendar",[v(2,"div","header",[o({value:a,months:-1,handleChange:t}),v(2,"div",null,[" ",a.format("MMM YYYY")," "]),o({value:a,months:1,handleChange:t})]),v(2,"table",null,[v(2,"thead",null,v(2,"tr",null,p.map(function(e){return v(2,"th",null,e)}))),v(2,"tbody",null,u(a).map(function(e){return v(2,"tr",null,e.map(function(e){return e?v(2,"td",a.date()==e.date()?"selected":"selectable",e.format("D"),{onClick:function(){return t(e)}}):v(2,"td")}))}))])])}function u(e){for(var t=[],n=s(e).date(1);n.month()==e.month();){var r=[null,null,null,null,null,null,null];do{r[n.weekday()]=s(n),n.add({days:1})}while(n.month()==e.month()&&n.weekday());t.push(r)}return t}function o(e){var t=e.value,n=e.months,r=e.handleChange,u=s(t).add({months:n});return n>0?v(2,"div",null,["→ ",u.format("MMM")],{onClick:function(){return r(u)}}):v(2,"div",null,[u.format("MMM")," ←"],{onClick:function(){return r(u)}})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"CALENDAR_SET_VALUE":return t.value;default:return e}}function a(e){return{type:"CALENDAR_SET_VALUE",value:e}}var l=n(2),c=l.combineReducers,s=n(5);n(46);var f=s.weekdaysMin(),d=s.localeData()._week.dow,p=f.map(function(e,t){return f[(t+d)%7]}),E=n(0);e.exports=r,e.exports.reducer=c({value:i}),e.exports.actions={setValue:a};var v=Inferno.createVNode},function(e,t,n){"use strict";function r(e){return{type:"LIST_SET_QUERY",query:e}}function u(e,t,n){return{type:"LIST_SET_FILTER",field:e,value:t,invalidateList:n}}function o(e){return{type:"LIST_SET_GROUPING",field:e,invalidateList:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function i(e,t){return{type:"LIST_SET_SORTING",field:e,direction:t,invalidateList:!(arguments.length>2&&void 0!==arguments[2])||arguments[2]}}function a(e){return{type:"LIST_SET_PAGE",index:e,invalidateList:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function l(e){return{type:"LIST_SET_PAGE_SIZE",size:e,invalidateList:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function c(e,t){return d("LIST_LOADING",e,t)}function s(){return{type:"LIST_INVALIDATE"}}var f=n(4),d=f.actions.read;e.exports={resetQuery:r,setFilter:u,setGrouping:o,setSorting:i,setPage:a,setPageSize:l,loadItems:c,invalidate:s}},function(e,t,n){"use strict";var r=n(41),u=r.a.Symbol;t.a=u},function(e,t,n){"use strict";function r(e){if(!n.i(i.a)(e)||n.i(u.a)(e)!=a)return!1;var t=n.i(o.a)(e);if(null===t)return!0;var r=f.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==d}var u=n(35),o=n(37),i=n(42),a="[object Object]",l=Function.prototype,c=Object.prototype,s=l.toString,f=c.hasOwnProperty,d=s.call(Object);t.a=r},function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var r=t[t.length-1],u=t.slice(0,-1);return function(){return u.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}}t.a=r},function(e,t,n){"use strict";function r(e,t,o){function l(){I===h&&(I=h.slice())}function c(){return T}function s(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return l(),I.push(e),function(){if(t){t=!1,l();var n=I.indexOf(e);I.splice(n,1)}}}function f(e){if(!n.i(u.a)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(_)throw new Error("Reducers may not dispatch actions.");try{_=!0,T=v(T,e)}finally{_=!1}for(var t=h=I,r=0;r<t.length;r++)t[r]();return e}function d(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");v=e,f({type:a.INIT})}function p(){var e,t=s;return e={subscribe:function(e){function n(){e.next&&e.next(c())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[i.a]=function(){return this},e}var E;if("function"==typeof t&&void 0===o&&(o=t,t=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(r)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var v=e,T=t,h=[],I=h,_=!1;return f({type:a.INIT}),E={dispatch:f,subscribe:s,getState:c,replaceReducer:d},E[i.a]=p,E}var u=n(9),o=n(52),i=n.n(o);n.d(t,"b",function(){return a}),t.a=r;var a={INIT:"@@redux/INIT"}},function(e,t,n){"use strict"},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(e){function t(e){o(e<=u[1]?[e,u[1]]:[e,l(e).endOf("day").toDate()])}function n(e){o(u[0]<=e?[u[0],e]:[l(e).startOf("day").toDate(),e])}var r=e.label,u=e.value,o=e.onChange;return u?d(2,"div","date-range-input",[d(2,"div",null,r),d(2,"div","range",[d(16,c,null,null,{value:u[0],mode:"start",onChange:t}),d(16,c,null,null,{value:u[1],mode:"end",onChange:n}),d(2,"ul",null,f.map(function(e){return d(2,"li",null,e.name,{onClick:function(){return o(e.range)}})}))])]):d(16,s)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"DATE_RANGE_INPUT_SET_VALUE":return t.value;default:return e}}function o(e){return{type:"DATE_RANGE_INPUT_SET_VALUE",value:e}}var i=n(2),a=i.combineReducers,l=n(5),c=n(6),s=n(0);n(47);var f=n(22);e.exports=r,e.exports.reducer=a({value:u}),e.exports.actions={setValue:o};var d=Inferno.createVNode},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){function t(e){e.preventDefault(),S(f(v,I))}function n(e){e.preventDefault(),confirm("Do you want to remove this item?")&&S(d(v,h))}function r(e){e.preventDefault(),confirm("Do you want to restore this item?")&&S(p(v,h))}function u(e){e.preventDefault(),S(T())}var v=e.resource,h=e.id,I=e.fields,_=e.removable,y=e.restorable,S=e.dispatch,g=e.onFinish,b=e.Form,O=e.Loading,A=void 0===O?D:O,N=e.Error,x=void 0===N?L:N;return o(e)?(S(s(v,h)),R(16,G)):i(e)?R(16,A,null,null,m({},e)):a(e)?R(16,x,null,null,m({},e)):l(e)?(S(E()),R(16,G)):c(e)?(g(),R(16,G)):R(2,"form",null,[b(e),R(512,"input",null,null,{type:"submit",value:"save"}),null!=h&&_?R(2,"button",null,"remove",{onClick:n}):null,null!=h&&y?R(2,"button",null,"restore",{onClick:r}):null,R(2,"button",null,"cancel",{onClick:u})],{onSubmit:t})}function o(e){var t=e.id,n=e.fields,r=e.request,u=e.error;return null!=t&&null==n&&null==r&&null==u}function i(e){return e.request}function a(e){return e.error}function l(e){var t=e.id,n=e.fields;return null==t&&null==n}function c(e){return e.isEditingFinished}function s(e,t){return x("EDIT_LOADING",e+"/"+t)}function f(e,t){return C("EDIT_SAVING",e,t)}function d(e,t){return w("EDIT_REMOVING",e,t)}function p(e,t){return C("EDIT_RESTORING",e+".restore",{id:t})}function E(){return{type:"EDIT_INITIALIZE_FIELDS"}}function v(e,t){return{type:"EDIT_SET_FIELD",name:e,value:t}}function T(){return{type:"EDIT_CANCEL"}}function h(){return{type:"EDIT_RESET"}}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"EDIT_LOADING_STARTED":return t.request;case"EDIT_LOADING_SUCCEEDED":case"EDIT_LOADING_FAILED":case"EDIT_RESET":return null;default:return e}}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"EDIT_LOADING_STARTED":return null;case"EDIT_LOADING_SUCCEEDED":return t.result;case"EDIT_LOADING_FAILED":return null;case"EDIT_INITIALIZE_FIELDS":return{};case"EDIT_SET_FIELD":return m({},e,r({},t.name,t.value));case"EDIT_RESET":return null;default:return e}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"EDIT_SAVING_STARTED":case"EDIT_SAVING_SUCCEEDED":return{};case"EDIT_SAVING_FAILED":return 400==t.error.statusCode?t.error.body:{};case"EDIT_RESET":return{};default:return e}}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"EDIT_LOADING_STARTED":case"EDIT_SAVING_STARTED":case"EDIT_REMOVING_STARTED":case"EDIT_RESTORING_STARTED":case"EDIT_LOADING_SUCCEEDED":case"EDIT_SAVING_SUCCEEDED":case"EDIT_REMOVING_SUCCEEDED":case"EDIT_RESTORING_SUCCEEDED":case"EDIT_RESET":return null;case"EDIT_LOADING_FAILED":case"EDIT_SAVING_FAILED":case"EDIT_REMOVING_FAILED":case"EDIT_RESTORING_FAILED":return 400!=t.error.statusCode?t.error:null;default:return e}}function g(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case"EDIT_INITIALIZE_FIELDS":case"EDIT_LOADING_STARTED":case"EDIT_SAVING_STARTED":return!1;case"EDIT_SAVING_SUCCEEDED":case"EDIT_CANCEL":return!0;case"EDIT_RESET":case"EDIT_REMOVING_STARTED":return!1;case"EDIT_REMOVING_SUCCEEDED":return!0;case"EDIT_RESTORING_STARTED":return!1;case"EDIT_RESTORING_SUCCEEDED":return!0;default:return e}}function D(){return R(2,"p",null,"Loading...")}function L(e){var t=e.error;return R(2,"p",null,["Error: ",t.message])}var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=n(2),O=b.combineReducers,A=n(4),N=A.actions,x=N.read,C=N.write,w=N.remove,G=n(0);e.exports=u,u.actions={setField:v,reset:h},u.reducer=O({request:I,fields:_,error:S,validationErrors:y,isEditingFinished:g});var R=Inferno.createVNode},function(e,t,n){"use strict";e.exports=n(24),e.exports.actions=n(7),e.exports.reducer=n(25)},function(e,t,n){"use strict";e.exports=n(26)},function(e,t,n){"use strict";function r(e){function t(e){8!=e.keyCode||r||E(i()),38==e.keyCode&&d>0&&(e.preventDefault(),E(l(d-1))),40==e.keyCode&&d<f.length-1&&(e.preventDefault(),E(l(d+1))),13==e.keyCode&&null!=d&&E(u(f[d]))}var n=e.resource,r=e.query,f=e.suggestedItems,d=e.selectedSuggestionIndex,p=e.selectedItems,E=e.dispatch;return s(2,"div","multiselect",[s(2,"div","input",[p.map(function(e){return s(2,"span",null,[e.name," ✕"],{onClick:function(){return E(o(e))}})}),s(512,"input",null,null,{type:"text",value:r,onKeyDown:t,onInput:function(e){return E(a(n,e.target.value))},onBlur:function(e){return E(c())},onFocus:function(e){return E(a(n,r))}})]),f?s(2,"div","suggestion",f.map(function(e,t){return s(2,"span",t==d?"selected":null,e.name,{onMouseDown:function(){return E(u(e))}})})):null])}function u(e){return{type:"MULTISELECT_ADD",item:e}}function o(e){return{type:"MULTISELECT_REMOVE",item:e}}function i(){return{type:"MULTISELECT_REMOVE_LAST"}}function a(e,t){return function(n){return n({type:"MULTISELECT_SUGGESTION_STARTED",query:t,request:e(t).then(function(e){return n(e.statusCode<400?{type:"MULTISELECT_SUGGESTION_SUCCEEDED",items:e.body}:{type:"MULTISELECT_SUGGESTION_FAILED",reason:e.body||e.statusCode})}).catch(function(e){return n({type:"MULTISELECT_SUGGESTION_ABORTED",reason:e})})})}}function l(e){return{type:"MULTISELECT_SELECT_SUGGESTION",index:e}}function c(){return{type:"MULTISELECT_FINISH_SUGGESTION"}}n(49),e.exports=r,e.exports.reducer=n(27);var s=Inferno.createVNode},function(e,t,n){"use strict";function r(e){function t(e){var t=e.target.value;a("null"==t&&f?d[0]:d.find(function(e){return e.id==t}))}var n=e.value,r=e.request,o=e.items,i=e.dispatch,a=e.onChange,l=e.label,c=e.resource,s=e.query,f=e.optional;if(!o&&c&&!r)return i(u(c,s)),E(16,p);if(r)return E(16,p);var d=f?[{id:null,name:"any"}].concat(o):o;return E(2,"div","select",[l?E(2,"span",null,l):void 0,E(2048,"select",null,d.map(function(e){return E(2,"option",null,e.name,{value:e.id,selected:n&&n.id==e.id})}),{onChange:t})])}function u(e,t){return d("SELECT_LOADING",e,t)}function o(e){return{type:"SELECT_SET_VALUE",value:e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];return"SELECT_SET_VALUE"==t.type?t.value:e}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"SELECT_LOADING_SUCCEEDED":return t.result;case"SELECT_LOADING_STARTED":return null;case"SELECT_LOADING_FAILED":return[];default:return e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"SELECT_LOADING_STARTED":return t.request;case"SELECT_LOADING_SUCCEEDED":case"SELECT_LOADING_FAILED":return null;default:return e}}var c=n(2),s=c.combineReducers,f=n(4),d=f.actions.read,p=n(0);n(50),e.exports=r,e.exports.actions={setValue:o},e.exports.reducer=s({value:i,items:a,request:l});var E=Inferno.createVNode},function(e,t,n){"use strict";function r(e){function t(e){s(e.target.value)}var n=e.label,r=e.lines,u=e.minLines,o=void 0===u?5:u,i=e.value,a=e.error,c=e.sensitive,s=e.onChange,f=e.preventAutocomplete;return null==r?l(2,"label",null,[l(2,"span",null,n),f?l(512,"input",null,null,{type:"text",style:"display:none;"}):null,f?l(512,"input",null,null,{type:"password",style:"display:none;"}):null,l(512,"input",null,null,{type:c?"password":"text",defaultValue:i,onChange:t}),a?l(2,"span","validation-error",a):null]):l(2,"label",null,[l(2,"span",null,n),l(1024,"textarea",null,null,{defaultValue:i,onChange:t,rows:function(){return isNaN(Number(r))?i?Math.max(o,i.split(/\n\r?/).length):o:r}()}),a?l(2,"span","validation-error",a):null])}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return"TEXT_INPUT_SET_VALUE"==t.type?t.value:e}function o(e){return{type:"TEXT_INPUT_SET_VALUE",value:e}}var i=n(2),a=i.combineReducers;e.exports=r,e.exports.reducer=a({value:u}),e.exports.actions={setValue:o},n(51);var l=Inferno.createVNode},function(e,t,n){var r=n(30);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";function r(e,t){return[u(e,t),o(e,t)]}function u(e,t){return i().add(t).startOf(e).toDate()}function o(e,t){return i().add(t).endOf(e).toDate()}var i=n(5);e.exports=[{name:"today",range:r("day")},{name:"yesterday",range:r("day",{days:-1})},{name:"this week",range:r("week")},{name:"last week",range:r("week",{weeks:-1})},{name:"week before last",range:r("week",{weeks:-2})},{name:"this month",range:r("month")},{name:"last month",range:r("month",{months:-1})},{name:"month before last",range:r("month",{months:-2})},{name:"this year",range:r("year")}]},function(e,t,n){"use strict";Object.assign;n(21);var r=n(6),u=n(14),o=n(16),i=n(15),a=n(18),l=n(17),c=n(0),s=n(20),f=n(19),d={DateInput:r,DateRangeInput:u,List:o,Edit:i,Multiselect:a,Menu:l,Same:c,TextInput:s,Select:f};e.exports=d;Inferno.createVNode},function(e,t,n){"use strict";function r(e){var t=e.resource,n=e.defaultQuery,r=e.query,v=e.Query,_=void 0===v?c:v,y=e.Table,S=e.Loading,g=void 0===S?f:S,D=e.LoadingError,L=void 0===D?d:D,m=e.Empty,b=void 0===m?s:m,O=e.dispatch;if(!y)throw new Error("Table is required.");return u(e)?(O(T(n)),I(16,E,null,null,p({},e))):o(e)?(O(h(t,r)),I(16,E,null,null,p({},e))):i(e)?I(16,g,null,null,p({},e)):l(e)?I(16,b,null,null,p({},e)):a(e)?I(16,L,null,null,p({},e)):I(2,"div",null,[_(e),y(e)])}function u(e){return!e.query}function o(e){var t=e.items,n=e.request,r=e.error;return!(t||n||null!=r)}function i(e){return e.request}function a(e){return null!=e.error}function l(e){var t=e.items;return null!=t&&0==t.length}function c(){}function s(){return I(2,"p",null,"No data.")}function f(){return I(2,"p",null,"Loading...")}function d(e){var t=e.error;return t?I(2,"p",null,["Loading error: ",t.message]):I(2,"p",null,"Loading error")}var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E=n(0),v=n(7),T=v.resetQuery,h=v.loadItems;e.exports=r;var I=Inferno.createVNode},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments[1];switch(t.type){case"LIST_SET_QUERY":return t.query?l({},f,t.query):f;case"LIST_SET_FILTER":return l({},e,{filtering:l({},e.filtering,r({},t.field,t.value))});case"LIST_SET_GROUPING":return l({},e,{grouping:{field:t.field}});case"LIST_SET_SORTING":return l({},e,{sorting:{field:t.field,direction:t.direction}});case"LIST_SET_PAGE":return l({},e,{paging:l({},e.paging,{index:t.index})});case"LIST_SET_PAGE_SIZE":return l({},e,{paging:l({},e.paging,{size:t.size})});default:return e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"LIST_SET_QUERY":case"LIST_INVALIDATE":return null;case"LIST_SET_FILTER":case"LIST_SET_GROUPING":case"LIST_SET_SORTING":return t.invalidate?null:e;case"LIST_LOADING_STARTED":return null;case"LIST_LOADING_SUCCEEDED":return t.result;case"LIST_LOADING_FAILED":case"LIST_LOADING_FORBIDDEN":return null;default:return e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"LIST_LOADING_STARTED":return t.request;case"LIST_LOADING_SUCCEEDED":case"LIST_LOADING_FAILED":case"LIST_LOADING_FORBIDDEN":return null;default:return e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"LIST_LOADING_STARTED":case"LIST_LOADING_SUCCEEDED":return null;case"LIST_LOADING_FAILED":return t.error;default:return e}}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(2),s=c.combineReducers,f={filtering:{},grouping:{},sorting:{},paging:{}};e.exports=s({query:u,items:o,request:i,error:a})},function(e,t,n){"use strict";function r(e){function t(e,t){e.preventDefault(),u(o(t))}var n=e.route,r=e.items,u=e.dispatch;return n?a(2,"div","menu",r.map(function(e){return a(2,"a",n.url.includes(e.url)?"active":null,e.title,{href:e.url,onClick:function(n){return t(n,e.url)}})})):a(16,i)}var u=n(4),o=u.actions.navigateTo,i=n(0);n(48),e.exports=r;var a=Inferno.createVNode},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];switch(t.type){case"MULTISELECT_SUGGESTION_STARTED":return t.query;default:return e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"MULTISELECT_ADD":return e.some(function(e){return e.id==t.item.id})?e:[].concat(r(e),[t.item]);case"MULTISELECT_REMOVE":return e.filter(function(e){return e.id!=t.item.id});case"MULTISELECT_REMOVE_LAST":return e.length>0?e.slice(0,-1):e;default:return e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"MULTISELECT_SUGGESTION_STARTED":return null;case"MULTISELECT_SUGGESTION_SUCCEEDED":return t.items;case"MULTISELECT_SUGGESTION_FAILED":case"MULTISELECT_SUGGESTION_ABORTED":case"MULTISELECT_FINISH_SUGGESTION":return null;default:return e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"MULTISELECT_SUGGESTION_STARTED":return null;case"MULTISELECT_SUGGESTION_SUCCEEDED":return 0;case"MULTISELECT_SUGGESTION_FAILED":case"MULTISELECT_SUGGESTION_ABORTED":return null;case"MULTISELECT_SELECT_SUGGESTION":return t.index;case"MULTISELECT_FINISH_SUGGESTION":return null;default:return e}}var l=n(2),c=l.combineReducers;e.exports=c({query:u,selectedItems:o,suggestedItems:i,selectedSuggestionIndex:a})},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".calendar{text-align:center;width:210px}.calendar .header div:first-child:hover,.calendar .header div:last-child:hover,.calendar .selectable:hover,.calendar .selected{background:#000;color:#fff;cursor:pointer}.calendar .header{font-weight:700;display:flex}.calendar .header div:first-child,.calendar .header div:last-child{flex-grow:1;cursor:pointer}.calendar .header div:nth-child(2){margin:0 5px}.calendar table{table-layout:fixed}.calendar td,.calendar th{padding:2px 0;width:30px}.calendar td{text-align:center}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".date-range-input .range{display:flex}.date-range-input .range>*{margin-right:10px}.date-range-input ul{list-style:none;margin:0;padding:0}.date-range-input li:hover{background:#000;color:#fff;cursor:pointer}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"#root,body,html{height:100%;padding:0;margin:0}.validation-error{color:darkred}h2,p{margin:0}table{border-collapse:collapse}thead tr{border-bottom:1px solid gray}td{padding:2px 4px}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".menu a{text-decoration:none;border-bottom:1px solid #000;padding:4px}.menu a.active,.menu a.active:visited,.menu a:hover,.menu a:visited:hover{background:#000;color:#fff}.menu a,.menu a:visited{color:#000;background:#fff}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".multiselect{margin-bottom:4px}.multiselect .input{width:100%;box-sizing:border-box;display:flex}.multiselect .input span{flex-shrink:0;border-bottom:1px dotted #000;margin-right:4px;cursor:pointer}.multiselect .input input{width:100%;box-sizing:border-box}.multiselect .suggestion span{padding-right:4px;cursor:pointer}.multiselect .suggestion .selected{background-color:#000;color:#fff}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".select select,.select span{width:100%}.select select{padding:2px}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"label input,label span,label textarea{box-sizing:border-box;display:inline-block;width:100%}",""])},function(e,t,n){"use strict";function r(e){return null==e?void 0===e?l:a:c&&c in Object(e)?n.i(o.a)(e):n.i(i.a)(e)}var u=n(8),o=n(38),i=n(39),a="[object Null]",l="[object Undefined]",c=u.a?u.a.toStringTag:void 0;t.a=r},function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(t,n(13))},function(e,t,n){"use strict";var r=n(40),u=n.i(r.a)(Object.getPrototypeOf,Object);t.a=u},function(e,t,n){"use strict";function r(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0}catch(e){}var r=a.call(e);return t?e[l]=n:delete e[l],r}var u=n(8),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=u.a?u.a.toStringTag:void 0;t.a=r},function(e,t,n){"use strict";function r(e){return o.call(e)}var u=Object.prototype,o=u.toString;t.a=r},function(e,t,n){"use strict";function r(e,t){return function(n){return e(t(n))}}t.a=r},function(e,t,n){"use strict";var r=n(36),u="object"==typeof self&&self&&self.Object===Object&&self,o=r.a||u||Function("return this")();t.a=o},function(e,t,n){"use strict";function r(e){return null!=e&&"object"==typeof e}t.a=r},function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,i){var a=e(n,r,i),l=a.dispatch,c=[],s={getState:a.getState,dispatch:function(e){return l(e)}};return c=t.map(function(e){return e(s)}),l=u.a.apply(void 0,c)(a.dispatch),o({},a,{dispatch:l})}}}var u=n(10);t.a=r;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},function(e,t,n){"use strict";function r(e,t){return function(){return t(e.apply(void 0,arguments))}}function u(e,t){if("function"==typeof e)return r(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),u={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(u[i]=r(a,t))}return u}t.a=u},function(e,t,n){"use strict";function r(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function u(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:i.b.INIT}))throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.b.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function o(e){for(var t=Object.keys(e),n={},o=0;o<t.length;o++){var i=t[o];"function"==typeof e[i]&&(n[i]=e[i])}var a,l=Object.keys(n);try{u(n)}catch(e){a=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var u=!1,o={},i=0;i<l.length;i++){var c=l[i],s=n[c],f=e[c],d=s(f,t);if(void 0===d){var p=r(c,t);throw new Error(p)}o[c]=d,u=u||d!==f}return u?o:e}}var i=n(11);n(9),n(12);t.a=o},function(e,t,n){var r=n(28);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(29);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(31);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(32);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(33);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(34);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){e.exports=n(53)},function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(54),i=function(e){return e&&e.__esModule?e:{default:e}}(o);u="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=(0,i.default)(u);t.default=a}).call(t,n(13),n(55)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=require("inferno")}]);
//# sourceMappingURL=bundle.js.map