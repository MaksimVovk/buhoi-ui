module.exports=function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=22)}([function(e,t){e.exports=require("buhoi-client")},function(e,t,n){"use strict";var r=n(21);e.exports=function(){return r.NO_OP}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},u=0;u<this.length;u++){var i=this[u][0];"number"==typeof i&&(r[i]=!0)}for(u=0;u<t.length;u++){var o=t[u];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],u=f[r.id];if(u){u.refs++;for(var i=0;i<u.parts.length;i++)u.parts[i](r.parts[i]);for(;i<r.parts.length;i++)u.parts.push(a(r.parts[i],t))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(a(r.parts[i],t));f[r.id]={id:r.id,refs:1,parts:o}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var u=e[r],i=u[0],o=u[1],s=u[2],a=u[3],l={css:o,media:s,sourceMap:a};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function u(e,t){var n=I(),r=_[_.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),_.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=_.indexOf(e);t>=0&&_.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",u(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",u(e,t),t}function a(e,t){var n,r,u;if(t.singleton){var a=S++;n=p||(p=o(t)),r=l.bind(null,n,a,!1),u=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=E.bind(null,n),u=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(t),r=c.bind(null,n),u=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else u()}}function l(e,t,n,r){var u=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,u);else{var i=document.createTextNode(u),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function E(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var u=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(u),i&&URL.revokeObjectURL(i)}var f={},d=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},T=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),I=d(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,S=0,_=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},void 0===t.singleton&&(t.singleton=T()),void 0===t.insertAt&&(t.insertAt="bottom");var u=r(e);return n(u,t),function(e){for(var i=[],o=0;o<u.length;o++){var s=u[o],a=f[s.id];a.refs--,i.push(a)}if(e){n(r(e),t)}for(var o=0;o<i.length;o++){var a=i[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete f[a.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e){return{type:"LIST_SET_QUERY",query:e}}function u(e,t,n){return{type:"LIST_SET_FILTER",field:e,value:t,invalidateList:n}}function i(e){return{type:"LIST_SET_GROUPING",field:e,invalidateList:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function o(e,t){return{type:"LIST_SET_SORTING",field:e,direction:t,invalidateList:!(arguments.length>2&&void 0!==arguments[2])||arguments[2]}}function s(e){return{type:"LIST_SET_PAGE",index:e,invalidateList:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function a(e){return{type:"LIST_SET_PAGE_SIZE",size:e,invalidateList:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function l(e,t){return f.read("LIST_LOADING",e,{query:t})}function c(){return{type:"LIST_INVALIDATE"}}var E=n(0),f=E.rest;e.exports={resetQuery:r,setFilter:u,setGrouping:i,setSorting:o,setPage:s,setPageSize:a,loadItems:l,invalidate:c}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){function t(e){e.preventDefault(),D(E(I,_))}function n(e){e.preventDefault(),confirm("Подтвердите удаление.")&&D(f(I,S))}function r(e){e.preventDefault(),confirm("Подтвердите восстановление")&&D(d(I,S))}function u(e){e.preventDefault(),D(p())}var I=e.resource,S=e.id,_=e.fields,v=e.removable,L=e.restorable,D=e.dispatch,g=e.onFinish,N=e.Form,A=e.Loading,G=void 0===A?h:A,C=e.Error,U=void 0===C?y:C;return i(e)?(D(c(I,S)),b(16,O)):o(e)?b(16,G,m({},e)):s(e)?b(16,U,m({},e)):a(e)?(D(T()),b(16,O)):l(e)?(g(),b(16,O)):b(2,"form",null,[N(e),b(512,"input",{type:"submit",value:"сохранить"}),null!=S&&v?b(2,"button",null,"удалить",{onClick:n}):null,null!=S&&L?b(2,"button",null,"восстановить",{onClick:r}):null,b(2,"button",null,"отмена",{onClick:u})],{onSubmit:t})}function i(e){var t=e.id,n=e.fields,r=e.request,u=e.error;return null!=t&&null==n&&null==r&&null==u}function o(e){return e.request}function s(e){return e.error}function a(e){var t=e.id,n=e.fields;return null==t&&null==n}function l(e){return e.isEditingFinished}function c(e,t){return A.read("EDIT_LOADING",e+"/"+t)}function E(e,t){return A.write("EDIT_SAVING",e,t)}function f(e,t){return A.remove("EDIT_REMOVING",e,t)}function d(e,t){return A.write("EDIT_RESTORING",e+".restore",{id:t})}function T(){return{type:"EDIT_INITIALIZE_FIELDS"}}function I(e,t){return{type:"EDIT_SET_FIELD",name:e,value:t}}function p(){return{type:"EDIT_CANCEL"}}function S(){return{type:"EDIT_RESET"}}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"EDIT_LOADING_STARTED":return t.request;case"EDIT_LOADING_SUCCEEDED":case"EDIT_LOADING_FAILED":return null;case"EDIT_RESET":return null;default:return e}}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"EDIT_LOADING_STARTED":return null;case"EDIT_LOADING_SUCCEEDED":return t.result;case"EDIT_LOADING_FAILED":return null;case"EDIT_INITIALIZE_FIELDS":return{};case"EDIT_SET_FIELD":return m({},e,r({},t.name,t.value));case"EDIT_RESET":return null;default:return e}}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"EDIT_SAVING_STARTED":case"EDIT_SAVING_SUCCEEDED":return{};case"EDIT_SAVING_FAILED":return 400==t.error.statusCode?t.error.body:{};case"EDIT_RESET":return{};default:return e}}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"EDIT_LOADING_STARTED":case"EDIT_SAVING_STARTED":case"EDIT_REMOVING_STARTED":case"EDIT_RESTORING_STARTED":case"EDIT_LOADING_SUCCEEDED":case"EDIT_SAVING_SUCCEEDED":case"EDIT_REMOVING_SUCCEEDED":case"EDIT_RESTORING_SUCCEEDED":case"EDIT_RESET":return null;case"EDIT_LOADING_FAILED":case"EDIT_SAVING_FAILED":case"EDIT_REMOVING_FAILED":case"EDIT_RESTORING_FAILED":return 400!=t.error.statusCode?t.error:null;default:return e}}function g(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case"EDIT_INITIALIZE_FIELDS":return!1;case"EDIT_LOADING_STARTED":return!1;case"EDIT_SAVING_STARTED":return!1;case"EDIT_SAVING_SUCCEEDED":return!0;case"EDIT_CANCEL":return!0;case"EDIT_RESET":return!1;case"EDIT_REMOVING_STARTED":return!1;case"EDIT_REMOVING_SUCCEEDED":return!0;case"EDIT_RESTORING_STARTED":return!1;case"EDIT_RESTORING_SUCCEEDED":return!0;default:return e}}function h(){return b(2,"p",null,"Loading...")}function y(e){return b(2,"p",null,["Error: ",e.error.message])}var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N=n(0),A=N.rest,G=N.combineReducers,O=n(1);e.exports=u,u.actions={setField:I,reset:S},u.reducer=G({request:_,fields:v,error:D,validationErrors:L,isEditingFinished:g});var b=Inferno.createVNode},function(e,t,n){"use strict";e.exports=n(11),e.exports.actions=n(4),e.exports.reducer=n(12)},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e){function t(e){8!=e.keyCode||r||s(E()),38==e.keyCode&&i>0&&(e.preventDefault(),s(d(i-1))),40==e.keyCode&&i<u.length-1&&(e.preventDefault(),s(d(i+1))),13==e.keyCode&&null!=i&&s(l(u[i]))}var n=e.resource,r=e.query,u=e.suggestedItems,i=e.selectedSuggestionIndex,o=e.selectedItems,s=e.dispatch;return S(2,"div",{className:"multiselect"},[S(2,"div",{className:"input"},[o.map(function(e){return S(2,"span",null,[e.name," ✕"],{onClick:function(){return s(c(e))}})}),S(512,"input",{type:"text",value:r},null,{onKeyDown:t,onInput:function(e){return s(f(n,e.target.value))},onBlur:function(e){return s(T())},onFocus:function(e){return s(f(n,r))}})]),u?S(2,"div",{className:"suggestion"},u.map(function(e,t){return S(2,"span",{className:t==i?"selected":null},e.name,{onMouseDown:function(){return s(l(e))}})})):null])}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];switch(t.type){case"MULTISELECT_SUGGESTION_STARTED":return t.query;default:return e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"MULTISELECT_ADD":return e.some(function(e){return e.id==t.item.id})?e:[].concat(r(e),[t.item]);case"MULTISELECT_REMOVE":return e.filter(function(e){return e.id!=t.item.id});case"MULTISELECT_REMOVE_LAST":return e.length>0?e.slice(0,-1):e;default:return e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"MULTISELECT_SUGGESTION_STARTED":return null;case"MULTISELECT_SUGGESTION_SUCCEEDED":return t.items;case"MULTISELECT_SUGGESTION_FAILED":case"MULTISELECT_SUGGESTION_ABORTED":return null;case"MULTISELECT_FINISH_SUGGESTION":return null;default:return e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"MULTISELECT_SUGGESTION_STARTED":return null;case"MULTISELECT_SUGGESTION_SUCCEEDED":return 0;case"MULTISELECT_SUGGESTION_FAILED":case"MULTISELECT_SUGGESTION_ABORTED":return null;case"MULTISELECT_SELECT_SUGGESTION":return t.index;case"MULTISELECT_FINISH_SUGGESTION":return null;default:return e}}function l(e){return{type:"MULTISELECT_ADD",item:e}}function c(e){return{type:"MULTISELECT_REMOVE",item:e}}function E(){return{type:"MULTISELECT_REMOVE_LAST"}}function f(e,t){return function(n){return n({type:"MULTISELECT_SUGGESTION_STARTED",query:t,request:e(t).then(function(e){return n(e.statusCode<400?{type:"MULTISELECT_SUGGESTION_SUCCEEDED",items:e.body}:{type:"MULTISELECT_SUGGESTION_FAILED",reason:e.body||e.statusCode})}).catch(function(e){return n({type:"MULTISELECT_SUGGESTION_ABORTED",reason:e})})})}}function d(e){return{type:"MULTISELECT_SELECT_SUGGESTION",index:e}}function T(){return{type:"MULTISELECT_FINISH_SUGGESTION"}}var I=n(0),p=I.combineReducers;n(19),e.exports=u,u.reducer=p({query:i,selectedItems:o,suggestedItems:s,selectedSuggestionIndex:a});var S=Inferno.createVNode},function(e,t,n){"use strict";function r(e){var t=e.label,n=e.value,r=e.error,u=e.sensitive,i=e.onChange,o=e.preventAutocomplete;return a(2,"label",null,[a(2,"span",null,t),o?a(512,"input",{type:"text",style:"display:none;"}):null,o?a(512,"input",{type:"password",style:"display:none;"}):null,a(512,"input",{type:u?"password":"text",defaultValue:n},null,{onChange:function(e){return i(e.target.value)}}),r?a(2,"span",{className:"validation-error"},r):null])}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return"TEXT_INPUT_SET_VALUE"==t.type?t.value:e}function i(e){return{type:"TEXT_INPUT_SET_VALUE",value:e}}var o=n(0),s=o.combineReducers;e.exports=r,e.exports.reducer=s({value:u}),e.exports.actions={setValue:i},n(20);var a=Inferno.createVNode},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";function r(e){var t=e.resource,n=e.defaultQuery,r=e.query,I=e.Query,v=void 0===I?l:I,L=e.Table,D=e.Loading,g=void 0===D?E:D,h=e.LoadingError,y=void 0===h?f:h,m=e.Empty,N=void 0===m?c:m,A=e.dispatch;if(!L)throw new Error("Table is required.");return u(e)?(A(p(n)),_(16,T,d({},e))):i(e)?(A(S(t,r)),_(16,T,d({},e))):o(e)?_(16,g,d({},e)):a(e)?_(16,N,d({},e)):s(e)?_(16,y,d({},e)):_(2,"div",null,[v(e),L(e)])}function u(e){return!e.query}function i(e){var t=e.items,n=e.request,r=e.error;return!(t||n||null!=r)}function o(e){return e.request}function s(e){return null!=e.error}function a(e){var t=e.items;return null!=t&&0==t.length}function l(){}function c(){return _(2,"p",null,"No data.")}function E(){return _(2,"p",null,"Loading...")}function f(e){var t=e.error;return t?_(2,"p",null,["Loading error: ",t.message]):_(2,"p",null,"Loading error")}var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T=n(1),I=n(4),p=I.resetQuery,S=I.loadItems;e.exports=r;var _=Inferno.createVNode},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments[1];switch(t.type){case"LIST_SET_QUERY":return t.query?a({},E,t.query):E;case"LIST_SET_FILTER":return a({},e,{filtering:a({},e.filtering,r({},t.field,t.value))});case"LIST_SET_GROUPING":return a({},e,{grouping:{field:t.field}});case"LIST_SET_SORTING":return a({},e,{sorting:{field:t.field,direction:t.direction}});case"LIST_SET_PAGE":return a({},e,{paging:a({},e.paging,{index:t.index})});case"LIST_SET_PAGE_SIZE":return a({},e,{paging:a({},e.paging,{size:t.size})});default:return e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"LIST_SET_QUERY":case"LIST_INVALIDATE":return null;case"LIST_SET_FILTER":case"LIST_SET_GROUPING":case"LIST_SET_SORTING":return t.invalidate?null:e;case"LIST_LOADING_STARTED":return null;case"LIST_LOADING_SUCCEEDED":return t.result;case"LIST_LOADING_FAILED":case"LIST_LOADING_FORBIDDEN":return null;default:return e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"LIST_LOADING_STARTED":return t.request;case"LIST_LOADING_SUCCEEDED":case"LIST_LOADING_FAILED":case"LIST_LOADING_FORBIDDEN":return null;default:return e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case"LIST_LOADING_STARTED":case"LIST_LOADING_SUCCEEDED":return null;case"LIST_LOADING_FAILED":return t.error;default:return e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(0),c=l.combineReducers,E={filtering:{},grouping:{},sorting:{},paging:{}};e.exports=c({query:u,items:i,request:o,error:s})},function(e,t,n){"use strict";function r(e){function t(e,t){e.preventDefault(),u(i(t))}var n=e.route,r=e.items,u=e.dispatch;return n?s(2,"div",{className:"menu"},r.map(function(e){return s(2,"a",{href:e.url,className:n.url.includes(e.url)?"active":null},e.title,{onClick:function(n){return t(n,e.url)}})})):s(16,o)}var u=n(0),i=u.navigateTo,o=n(1);n(18),e.exports=r;var s=Inferno.createVNode},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,"#root,body,html{height:100%;padding:0;margin:0}.validation-error{color:darkred}h2,p{margin:0}table{border-collapse:collapse}thead tr{border-bottom:1px solid gray}td{padding:2px 4px}",""])},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,".menu a{text-decoration:none;border-bottom:1px solid #000;padding:4px}.menu a.active,.menu a.active:visited,.menu a:hover,.menu a:visited:hover{background:#000;color:#fff}.menu a,.menu a:visited{color:#000;background:#fff}",""])},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,".multiselect{margin-bottom:4px}.multiselect .input{width:100%;box-sizing:border-box;display:flex}.multiselect .input span{flex-shrink:0;border-bottom:1px dotted #000;margin-right:4px;cursor:pointer}.multiselect .input input{width:100%;box-sizing:border-box}.multiselect .suggestion span{padding-right:4px;cursor:pointer}.multiselect .suggestion .selected{background-color:#000;color:#fff}",""])},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,"label input,label span{box-sizing:border-box;display:inline-block;width:100%}",""])},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(e,t){e.exports=require("inferno")},function(e,t,n){"use strict";Object.assign;n(10);var r=n(6),u=n(5),i=n(8),o=n(7),s=n(1),a=n(9),l={List:r,Edit:u,Multiselect:i,Menu:o,Same:s,TextInput:a};e.exports=l;Inferno.createVNode}]);
//# sourceMappingURL=bundle.js.map