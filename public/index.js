!function(e){function t(t){for(var r,l,c=t[0],i=t[1],s=t[2],m=0,d=[];m<c.length;m++)l=c[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={0:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;o.push([29,1]),n()}({23:function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(28)(r,a);r.locals&&(e.exports=r.locals)},24:function(e,t,n){(t=e.exports=n(25)(!1)).push([e.i,"@import url(https://www.w3schools.com/w3css/4/w3.css);",""]),t.push([e.i,"@import url(https://www.w3schools.com/lib/w3-theme-light-green.css);",""]),t.push([e.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);",""]);var r=n(26)(n(27));t.push([e.i,".text-ar {\r\n  text-align: right; }\r\n\r\n.text-al {\r\n  text-align: left; }\r\n\r\n.text-ac {\r\n  text-align: center; }\r\n\r\n.div-row-grey {\r\n  background-color: #f9f9f9; }\r\n\r\n.row-checked {\r\n  background-color: lightblue; }\r\n\r\n.p-cell {\r\n  padding: 0.2em 0.2em;\r\n  margin: 0.2em 0.4em;\r\n  height: 1.8em; }\r\n\r\n.whitespace {\r\n  white-space: nowrap; }\r\n\r\n.hover-div div:hover {\r\n  background-color: #628e2f !important;\r\n  cursor: pointer; }\r\n\r\n.doc-check {\r\n  width: 1.5em;\r\n  padding: 0 .5em;\r\n  height: 1.9em;\r\n  cursor: auto; }\r\n\r\n.input-checkbox {\r\n  margin-top: 0.5em; }\r\n\r\n.doc-id {\r\n  width: 5em;\r\n  cursor: auto; }\r\n\r\n.doc-number {\r\n  width: 9em; }\r\n\r\n.doc-type {\r\n  width: 5.8em;\r\n  cursor: auto; }\r\n\r\n.div-doc-norm {\r\n  color: dodgerblue; }\r\n\r\n.div-doc-corr {\r\n  background-color: #f44336;\r\n  color: #fff; }\r\n\r\n.doc-val {\r\n  width: 8em; }\r\n\r\n.doc-nip {\r\n  width: 11em; }\r\n\r\n.div-detail {\r\n  height: 0px;\r\n  overflow: hidden;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  overflow: auto; }\r\n\r\n.art-cell {\r\n  margin: 0px;\r\n  white-space: nowrap; }\r\n\r\n.doc-opening {\r\n  position: relative;\r\n  -webkit-animation-name: opening;\r\n  /* Safari 4.0 - 8.0 */\r\n  -webkit-animation-duration: 0.7s;\r\n  /* Safari 4.0 - 8.0 */\r\n  animation-name: opening;\r\n  animation-duration: 0.7s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  /* Safari 4.0 - 8.0 */\r\n  animation-fill-mode: forwards; }\r\n\r\n.doc-closing {\r\n  height: 0px;\r\n  position: relative;\r\n  -webkit-animation-name: closing;\r\n  /* Safari 4.0 - 8.0 */\r\n  -webkit-animation-duration: 0.7s;\r\n  /* Safari 4.0 - 8.0 */\r\n  animation-name: closing;\r\n  animation-duration: 0.7s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  /* Safari 4.0 - 8.0 */\r\n  animation-fill-mode: forwards; }\r\n\r\n/* Safari 4.0 - 8.0 */\r\n@-webkit-keyframes opening {\r\n  0% {\r\n    height: 0px; }\r\n  100% {\r\n    height: 400px;\r\n    visibility: visible; } }\r\n\r\n/* Standard syntax */\r\n@keyframes opening {\r\n  0% {\r\n    height: 0px; }\r\n  100% {\r\n    height: 400px;\r\n    visibility: visible; } }\r\n\r\n/* Safari 4.0 - 8.0 */\r\n@-webkit-keyframes closing {\r\n  0% {\r\n    height: 400px; }\r\n  100% {\r\n    height: 0px;\r\n    visibility: hidden; } }\r\n\r\n/* Standard syntax */\r\n@keyframes closing {\r\n  0% {\r\n    height: 400px; }\r\n  100% {\r\n    height: 0px;\r\n    visibility: hidden; } }\r\n\r\n.button-margin {\r\n  margin: 8px 8px 8px 0px; }\r\n\r\n.button-style {\r\n  color: #616161;\r\n  float: left; }\r\n\r\n.error_msg {\r\n  background-color: #ff5722;\r\n  color: #fff; }\r\n\r\n.request-documentdetail-spinner {\r\n  background-image: url("+r+");\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: 18px 18px; }\r\n",""])},27:function(e,t,n){e.exports=n.p+"e7f37025d0421cdc4e0e70989dfb01ef.svg"},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),l=n.n(o),c=n(12),i=n(4),s=(n(18),n(6)),u=function(e){if(e){for(var t=!1,n=0;n<e.length;n++)e[n].even=!t,t=!t;return e}},m=function(e){return{type:"TOOGLE_SPINNER",id:e,receivedAt:Date.now()}},d=function(e){return{type:"FETCH_ERROR",status:e}},p=function(){return function(e,t){return e({type:"REQUEST_DOCUMENTS"}),fetch((n=t(),"/documents/"+n.documents.order+"/"+n.documents.pageNmb+"/"+n.documents.pageSize+"/"+n.documents.dirOrder)).then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"RECEIVE_DOCUMENTS",items:u(e.documents),receivedAt:Date.now()}}(t))}).catch(function(t){var n=t.response?t.response.status:500;e(d(n))});var n}},f=function(){return function(e,t){if(n=t(),!(r=n.documents).items||!r.isFetching&&r.didInvalidate)return e(p());var n,r}},h=function(e,t){return function(n){n(function(e,t){return{type:"RECEIVE_DOCUMENTDETAIL",document:e,id:t,receivedAt:Date.now()}}(e,t)),n(m(t)),n(function(e){return{type:"OPEN_DOCUMENT",id:e,receivedAt:Date.now()}}(t))}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){v(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={isFetching:!1,items:[],selectedItems:[],allSelectedItems:!1,lastUpdated:"",didInvalidate:!0,pageNmb:0,pageSize:20,order:"number",dirOrder:"asc",isFetchError:!1,fetchErrorStatus:200},w=function(e,t,n){return t.map(function(t){return t.id===e?b({},t,{opening:!0,closing:!1,lastUpdated:n}):t})},E=function(e,t,n){return t.map(function(t){return t.id===e?b({},t,{opening:!1,closing:!0,lastUpdated:n}):t})},O=function(e,t,n,r){var a=e.slice();return a[n]?delete a[n]:a[n]=!0,{items:t.map(function(e){return e.id===parseInt(n,10)?b({},e,{checked:!!a[n],lastUpdated:r}):e}),selectedItems:a}},N=function(e,t){var n=[];return{_items:e.map(function(e){return t.selectAll&&(n[e.id]=!0),b({},e,{checked:t.selectAll,lastUpdated:t.receivedAt})}),_selectedItems:n}},C=function(e,t,n){return t?t.map(function(t){return e[t.id]?b({},t,{checked:!0,opening:!1,closing:!1,spinner:!1,lastUpdated:n}):b({},t,{checked:!1,opening:!1,closing:!1,spinner:!1,lastUpdated:n})}):null},k={items:[]},_=Object(i.c)({documents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_DOCUMENTS":return b({},e,{isFetching:!0,didInvalidate:!1});case"RECEIVE_DOCUMENTS":return b({},e,{isFetching:!1,didInvalidate:!1,items:C(e.selectedItems,t.items,t.receivedAt),lastUpdated:t.receivedAt,isFetchError:!1,fetchErrorStatus:200});case"INVALIDATE_DOCUMENTS":return b({},e,{didInvalidate:!0});case"NEXT_PAGE":return b({},e,{pageNmb:e.pageNmb+1,didInvalidate:!0,allSelectedItems:!1,selectedItems:e.allSelectedItems?[]:e.selectedItems});case"PREV_PAGE":return b({},e,{pageNmb:e.pageNmb>0?e.pageNmb-1:e.pageNmb,didInvalidate:!0});case"CHANGE_ORDER":return e.order===t.order?b({},e,{order:t.order,dirOrder:"asc"===e.dirOrder?"desc":"asc",didInvalidate:!0}):b({},e,{order:t.order,dirOrder:"asc",didInvalidate:!0});case"TOOGLE_DOCUMENT":var n=O(e.selectedItems,e.items,t.id,t.receivedAt),r=n.items,a=n.selectedItems;return b({},e,{items:r,lastUpdated:t.receivedAt,selectedItems:a,allSelectedItems:!1});case"TOOGLE_ALL_DOCUMENTS":var o=N(e.items,t),l=o._items,c=o._selectedItems;return b({},e,{items:l,selectedItems:c,allSelectedItems:t.selectAll});case"OPEN_DOCUMENT":return b({},e,{items:w(t.id,e.items,t.receivedAt)});case"CLOSE_DOCUMENT":return b({},e,{items:E(t.id,e.items,t.receivedAt)});case"TOOGLE_SPINNER":return b({},e,{items:e.items.map(function(e){return e.id===t.id?b({},e,{spinner:!e.spinner,lastUpdated:t.receivedAt}):e})});case"CLOSE_ALLDOCUMENTS":return b({},e,{items:e.items.map(function(e){return e.opening?b({},e,{opening:!1,closing:!0,lastUpdated:t.receivedAt}):e}),lastUpdated:t.receivedAt});case"FETCH_ERROR":return b({},e,{isFetchError:!0,fetchErrorStatus:t.status,isFetching:!1});default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_DOCUMENTDETAIL":var n=e.items.slice();return n[t.id]={articles:t.document.articles},b({},e,{items:n});default:return e}}}),D=n(2);function S(e,t,n){var r,a=n||!1,o=(r=parseFloat(e),+(Math.round(r+"e+2")+"e-2")).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ");return t?a?t+" "+o:o+" "+t:o}function x(e,t){var n=Math.pow(10,t),r=e*n;return Math.round(r)/n}var T=function(e){return a.a.createElement("header",{className:"w3-container w3-amber"},a.a.createElement("h5",null,"Invoice Nmb: ",e.document.number))},P=function(e){return a.a.createElement("div",{className:"w3-cell",style:{width:"50%"}},a.a.createElement("label",{className:"w3-text-gray"},e.label),a.a.createElement("input",{className:"w3-input w3-padding-small",type:"text",defaultValue:e.value}))},j=function(e){return a.a.createElement("div",null,a.a.createElement("label",{className:"w3-text-gray"},e.label),a.a.createElement("input",{className:"w3-input w3-padding-small",type:"text",defaultValue:e.value}))},A=function(e){return a.a.createElement("div",{className:"w3-cell-row"},a.a.createElement("div",{className:"w3-container w3-cell w3-mobile w3-padding-small",style:{width:"50%"}},a.a.createElement("form",{className:"w3-container w3-padding-small"},a.a.createElement("div",{className:"w3-cell-row"},a.a.createElement(P,{label:"Document nmb",value:e.document.number}),a.a.createElement(P,{label:"Place of Invoice",value:e.document.location})),a.a.createElement("div",{className:"w3-cell-row"},a.a.createElement(P,{label:"Date",value:e.document.date}),a.a.createElement(P,{label:"Payment",value:e.document.paymethod_name})),a.a.createElement("div",{className:"w3-cell-row"},a.a.createElement(P,{label:"Period from:",value:e.document.period_startdate}),a.a.createElement(P,{label:"Period to:",value:e.document.period_enddate})))),a.a.createElement("div",{className:"w3-cell w3-mobile w3-padding-small",style:{width:"50%"}},a.a.createElement("form",{className:"w3-padding-small"},a.a.createElement(j,{label:"Customer Name 1",value:e.document.custname1}),a.a.createElement(j,{label:"Customer Name 2",value:e.document.custname2}),a.a.createElement(j,{label:"VAT ID",value:e.document.custnip}),a.a.createElement(j,{label:"Internal Account Nmb",value:e.document.custaccnmb}))))};function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,R(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,r["Component"]),n=t,(o=[{key:"renderArticles",value:function(){var e=1;return this.props.articles.items[this.props.document.id].articles.map(function(t,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,e++),a.a.createElement("td",null,t.artname1),a.a.createElement("td",null,a.a.createElement("p",{className:"text-ar art-cell"},S(t.artprice))),a.a.createElement("td",null,t.arttaxlabel),a.a.createElement("td",null,t.artunit),a.a.createElement("td",null,a.a.createElement("p",{className:"text-ar art-cell"},S(t.quantity))),a.a.createElement("td",null,a.a.createElement("p",{className:"text-ar art-cell"},S(t.nettovalue))),a.a.createElement("td",null,a.a.createElement("p",{className:"text-ar art-cell"},S(t.bruttovalue))))})}},{key:"render",value:function(){return a.a.createElement("div",{className:"w3-cell-row"},a.a.createElement("table",{className:"w3-table-all"},a.a.createElement("tbody",null,a.a.createElement("tr",{className:"w3-yellow"},a.a.createElement("th",null,"Nmb"),a.a.createElement("th",null,"Article's name"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Tax Rate"),a.a.createElement("th",null,"Unit"),a.a.createElement("th",null,"Qty"),a.a.createElement("th",null,"Netto"),a.a.createElement("th",null,"Brutto")),this.props.articles.items?this.renderArticles():"")))}}])&&U(n.prototype,o),l&&U(n,l),t}();function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),G(this,B(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,r["Component"]),n=t,(o=[{key:"renderInvFooter",value:function(){for(var e=0,t=0,n=this.props.articles.items[this.props.document.id].articles,r=0;r<n.length;r++)e+=parseFloat(n[r].bruttovalue),t+=parseFloat(n[r].nettovalue);return a.a.createElement("table",{className:"w3-table w3-striped"},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",{className:"w3-right-align w3-padding-small"},"Total Netto"),a.a.createElement("th",{className:"w3-right-align w3-padding-small"},"Total Brutto")),a.a.createElement("tr",null,a.a.createElement("td",{className:"w3-right-align w3-padding-small"},S(x(t,2))),a.a.createElement("td",{className:"w3-right-align w3-padding-small"},S(x(e,2))))))}},{key:"render",value:function(){return a.a.createElement("div",{className:"w3-cell-row"},a.a.createElement("div",{className:"w3-third w3-right"},this.renderInvFooter()))}}])&&V(n.prototype,o),l&&V(n,l),t}();function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=W(t).call(this,e))||"object"!==Q(a)&&"function"!=typeof a?X(r):a).state={classNameAnim:e.document.opening?"doc-opening":"doc-closing"},n.onClose=n.onClose.bind(X(n)),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentWillReceiveProps",value:function(e){this.props.document.opening!==e.document.opening&&this.setState({classNameAnim:e.document.opening?"doc-opening":"doc-closing"})}},{key:"onClose",value:function(){this.props.onCloseDetail(this.props.document.id)}},{key:"render",value:function(){return console.log("DocumentItemDetail.render()"),a.a.createElement("div",{className:"w3-card w3-leftbar w3-border-grey div-detail "+this.state.classNameAnim},a.a.createElement("span",{onClick:this.onClose,className:"w3-button w3-display-topright"},"x"),a.a.createElement(T,{document:this.props.document}),a.a.createElement("div",{className:"w3-container w3-padding-small"},a.a.createElement(A,{document:this.props.document}),a.a.createElement(H,{document:this.props.document,articles:this.props.articles}),a.a.createElement(q,{document:this.props.document,articles:this.props.articles})))}}])&&J(n.prototype,o),l&&J(n,l),t}();function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=ee(t).call(this,e))||"object"!==Y(a)&&"function"!=typeof a?te(r):a).state={hover:!1},n.onMouseEnterHandler=n.onMouseEnterHandler.bind(te(n)),n.onMouseLeaveHandler=n.onMouseLeaveHandler.bind(te(n)),n.onCheckClick=n.onCheckClick.bind(te(n)),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,r["Component"]),n=t,(o=[{key:"shouldComponentUpdate",value:function(e,t){return e.document.lastUpdated!==this.props.document.lastUpdated||this.state.hover!==t.hover}},{key:"onMouseEnterHandler",value:function(){this.setState({hover:!0})}},{key:"onMouseLeaveHandler",value:function(){this.setState({hover:!1})}},{key:"onCheckClick",value:function(e){this.props.onCheckClick(e.target.value,e.target.checked)}},{key:"getHighlightedColClass",value:function(e){return this.props.order!==e||this.props.document&&this.props.document.checked||this.state.hover?"":"w3-theme-l4"}},{key:"render",value:function(){var e=this;console.log("DocumentItem.render()");var t=this.props.document,n=-2===t.type?"Corr":"Inv VAT",r="w3-cell w3-left doc-id"+(this.props.document.spinner?" request-documentdetail-spinner":"");return a.a.createElement("div",null,a.a.createElement("div",{className:"w3-row "+(t.even?"div-row-grey":"")+" "+(this.state.hover?"w3-theme-l3":"")+" "+(t.checked?"row-checked":""),onMouseEnter:this.onMouseEnterHandler,onMouseLeave:this.onMouseLeaveHandler},a.a.createElement("div",{className:"w3-cell w3-left doc-check"},a.a.createElement("input",{className:"input-checkbox",type:"checkbox",name:"",value:t.id,onChange:this.onCheckClick,checked:t.checked?"checked":""})),a.a.createElement("div",{onClick:function(){e.props.onOpenDetail(t.id)}},a.a.createElement("div",{className:r},a.a.createElement("p",{className:"text-ar p-cell whitespace"},this.props.document.spinner?"":t.id)),a.a.createElement("div",{className:"w3-cell w3-left doc-number "+this.getHighlightedColClass("number")},a.a.createElement("p",{className:"text-al p-cell whitespace"},t.number)),a.a.createElement("div",{className:"w3-cell w3-left doc-type "+(-1===t.type?"div-doc-norm":"div-doc-corr")},a.a.createElement("p",{className:"text-ac p-cell whitespace"},n)),a.a.createElement("div",{className:"w3-cell w3-left doc-number "+this.getHighlightedColClass("date")},a.a.createElement("p",{className:"text-al p-cell whitespace"},t.date)),a.a.createElement("div",{className:"w3-cell w3-right doc-val "+this.getHighlightedColClass("excise")},a.a.createElement("p",{className:"text-ar p-cell whitespace"},S(t.excise))),a.a.createElement("div",{className:"w3-cell w3-right doc-val "+this.getHighlightedColClass("brutto")},a.a.createElement("p",{className:"text-ar p-cell whitespace"},S(t.brutto))),a.a.createElement("div",{className:"w3-cell w3-right doc-val "+this.getHighlightedColClass("netto")},a.a.createElement("p",{className:"text-ar p-cell whitespace"},S(t.netto))),a.a.createElement("div",{className:"w3-cell w3-right doc-nip "+this.getHighlightedColClass("custnip")},a.a.createElement("p",{className:"text-al p-cell whitespace"},t.custnip)),a.a.createElement("div",{className:"w3-rest doc-customername1 text-al "+this.getHighlightedColClass("custname1")},a.a.createElement("p",{className:"p-cell whitespace",style:{minWidth:"200px"}},t.custname1)))),t.opening||t.closing?a.a.createElement(K,{document:this.props.document,onCloseDetail:function(t){e.props.onCloseDetail(t)},articles:this.props.articles}):"")}}])&&Z(n.prototype,o),l&&Z(n,l),t}();function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e,t){return!t||"object"!==ae(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),le(this,ce(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,r["Component"]),n=t,(o=[{key:"onChangeOrder",value:function(e){this.props.onChangeOrder(e)}},{key:"getOrderElement",value:function(e){var t=this.props.documents.order===e?"asc"===this.props.documents.dirOrder?1:2:0;return t?1===t?a.a.createElement("i",{className:"fa fa-sort-amount-asc w3-padding-small",style:{float:"right"},"aria-hidden":"true"}):a.a.createElement("i",{className:"fa fa-sort-amount-desc w3-padding-small",style:{float:"right"},"aria-hidden":"true"}):""}},{key:"onToogleAllDocuments",value:function(e){this.props.onToggleAllDocuments(e.target.checked)}},{key:"renderDocument",value:function(e,t){return a.a.createElement(re,{key:e.id,document:e,articles:this.props.articles,order:t,onCheckClick:this.props.onToggle,onOpenDetail:this.props.onOpenDetail,onCloseDetail:this.props.onCloseDetail})}},{key:"getHighlightedColClass",value:function(e){return this.props.documents.order===e?"w3-theme-d2":""}},{key:"render",value:function(){var e=this;console.log("DocumentList.render()");var t="w3-padding-small fa fa-refresh"+(this.props.documents&&this.props.documents.isFetching?" w3-spin":"");return a.a.createElement("div",null,a.a.createElement("div",{className:"w3-container"},a.a.createElement("div",{className:"w3-bar"},a.a.createElement("a",{className:"w3-button w3-border w3-round w3-padding-small button-margin button-style",href:"#",onClick:function(t){return e.props.onPageClick(t,-1,e.props.documents.pageNmb)}},"Backward",a.a.createElement("i",{className:"w3-padding-small fa fa-arrow-left","aria-hidden":"true"})),a.a.createElement("a",{className:"w3-button w3-border w3-round w3-padding-small button-margin button-style",href:"#",onClick:function(t){return e.props.onPageClick(t,1,e.props.documents.pageNmb)}},"Forward",a.a.createElement("i",{className:"w3-padding-small fa fa-arrow-right"})),a.a.createElement("a",{className:"w3-button w3-border w3-round w3-padding-small button-margin button-style",href:"#",onClick:this.props.onRefreshData},"Reload",a.a.createElement("i",{className:t})),a.a.createElement("a",{className:"w3-button w3-border w3-round w3-padding-small button-margin button-style",href:"#",onClick:this.props.onCloseAllDocuments},"Close all",a.a.createElement("i",{className:"w3-padding-small fa fa-compress"})),this.props.documents.isFetchError?a.a.createElement("div",{className:"button-margin w3-left w3-padding-small error_msg"},"Oops, no response from the server or an unexpected format received"):"",a.a.createElement("div",{className:"button-margin w3-right w3-padding-small"},"Page: ",this.props.documents&&this.props.documents.isFetching?"..":this.props.documents.pageNmb+1)),a.a.createElement("div",{className:"w3-border w3-round w3-medium"},a.a.createElement("div",{className:"w3-row w3-theme-d1 w3-text-white"}," ",a.a.createElement("div",{className:"w3-col w3-left doc-check"},a.a.createElement("input",{type:"checkbox",className:"input-checkbox",name:"",value:"",checked:this.props.documents.allSelectedItems,onClick:function(t){return e.onToogleAllDocuments(t)}})),a.a.createElement("div",{className:"w3-col w3-left doc-id"},a.a.createElement("p",{className:"text-ar p-cell"},"id")),a.a.createElement("div",{className:"hover-div"},a.a.createElement("div",{className:"w3-col w3-left doc-number "+this.getHighlightedColClass("number"),onClick:function(){return e.onChangeOrder("number")}},a.a.createElement("p",{className:"text-al p-cell"},"Inv Nmb ",this.getOrderElement("number")," "))),a.a.createElement("div",{className:"w3-col w3-left doc-type"},a.a.createElement("p",{className:"text-ac p-cell"},"Inv Type")),a.a.createElement("div",{className:"hover-div"},a.a.createElement("div",{className:"w3-col w3-left doc-number "+this.getHighlightedColClass("date"),onClick:function(){return e.onChangeOrder("date")}},a.a.createElement("p",{className:"text-al p-cell"},"Date ",this.getOrderElement("date")))),a.a.createElement("div",{className:"hover-div"},a.a.createElement("div",{className:"w3-col w3-right doc-val "+this.getHighlightedColClass("excise"),onClick:function(){return e.onChangeOrder("excise")}},a.a.createElement("p",{className:"text-al p-cell"},"Excise ",this.getOrderElement("excise")))),a.a.createElement("div",{className:"hover-div"},a.a.createElement("div",{className:"w3-col w3-right doc-val "+this.getHighlightedColClass("brutto"),onClick:function(){return e.onChangeOrder("brutto")}},a.a.createElement("p",{className:"text-al p-cell"},"Brutto ",this.getOrderElement("brutto")))),a.a.createElement("div",{className:"hover-div"},a.a.createElement("div",{className:"w3-col w3-right doc-val "+this.getHighlightedColClass("netto"),onClick:function(){return e.onChangeOrder("netto")}},a.a.createElement("p",{className:"text-al p-cell"},"Netto ",this.getOrderElement("netto")))),a.a.createElement("div",{className:"hover-div"},a.a.createElement("div",{className:"w3-col w3-right doc-nip "+this.getHighlightedColClass("custnip"),onClick:function(){return e.onChangeOrder("custnip")}},a.a.createElement("p",{className:"text-al p-cell"},"VAT ID ",this.getOrderElement("custnip")))),a.a.createElement("div",{className:"hover-div"},a.a.createElement("div",{className:"w3-rest text-al "+this.getHighlightedColClass("custname1"),onClick:function(){return e.onChangeOrder("custname1")}},a.a.createElement("p",{className:"p-cell"},"Customer ",this.getOrderElement("custname1"))))),this.props.documents.items.map(function(t){return e.renderDocument(t,e.props.documents.order)}))))}}])&&oe(n.prototype,o),l&&oe(n,l),t}();function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}D.a.initialize("UA-105506825-2");var he=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),de(this,pe(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.props.fetchDocumentsIfNeeded()}},{key:"render",value:function(){var e=this;return console.log("DocumentListContainer.render()"),a.a.createElement(se,{documents:this.props.documents,articles:this.props.articles,onPageClick:this.props.onPageClick,onRefreshData:this.props.onRefreshData,onCloseAllDocuments:this.props.onCloseAllDocuments,onChangeOrder:function(t,n){return e.props.onChangeOrder(t,n)},onToggle:function(t){return e.props.onToggle(t)},onToggleAllDocuments:function(t){return e.props.onToggleAllDocuments(t)},onOpenDetail:this.props.onOpenDetail,onCloseDetail:this.props.onCloseDetail})}}])&&me(n.prototype,o),l&&me(n,l),t}(),ge=Object(s.b)(function(e){return{articles:e.articles,documents:e.documents}},function(e){return{fetchDocumentsIfNeeded:function(){e(f())},onPageClick:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;-1===n&&r>0&&(e({type:"PREV_PAGE"}),e({type:"INVALIDATE_DOCUMENTS"}),e(f()),D.a.event({category:"Navigation",action:"Prev page",label:"Top navigation"})),1===n&&(e({type:"NEXT_PAGE"}),e({type:"INVALIDATE_DOCUMENTS"}),e(f()),D.a.event({category:"Navigation",action:"Next page",label:"Top navigation"}))},onChangeOrder:function(t){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"number";return{type:"CHANGE_ORDER",order:e}}(t)),e({type:"INVALIDATE_DOCUMENTS"}),e(f()),D.a.event({category:"Documents",action:"Change order: "+t,label:"Sorting"})},onRefreshData:function(){e({type:"INVALIDATE_DOCUMENTS"}),e(f()),D.a.event({category:"Navigation",action:"Refresh",label:"Top navigation"})},onToggle:function(t){e(function(e){return{type:"TOOGLE_DOCUMENT",id:e,receivedAt:Date.now()}}(t)),D.a.event({category:"Documents",action:"Toggle document",label:""})},onToggleAllDocuments:function(t){e(function(e){return{type:"TOOGLE_ALL_DOCUMENTS",selectAll:e,receivedAt:Date.now()}}(t)),D.a.event({category:"Documents",action:"Toggle all documents",label:""})},onCloseDetail:function(t){e(function(e){return{type:"CLOSE_DOCUMENT",id:e,receivedAt:Date.now()}}(t)),D.a.event({category:"Document",action:"Close detail",label:"Document detail"})},onCloseAllDocuments:function(){e({type:"CLOSE_ALLDOCUMENTS",receivedAt:Date.now()}),D.a.event({category:"Document",action:"Close all documents",label:"Document detail"})},onOpenDetail:function(t){e(function(e){return function(t,n){var r=!1;if(n().documents.items.forEach(function(t){t.id===e&&t.opening&&(r=!0)}),!r)return t(m(e)),fetch(function(e){return"/documentarticles/"+e}(e)).then(function(e){return e.json()}).then(function(n){return t(h(n,e))}).catch(function(e){var n=e.response?e.response.status:500;t(d(n))})}}(t)),D.a.event({category:"Document",action:"Open detail",label:"Document detail"})}}})(he),be=(n(23),[c.a]);var ve=Object(i.d)(_,i.a.apply(void 0,be));l.a.render(a.a.createElement(s.a,{store:ve},a.a.createElement(ge,null)),document.getElementById("root"))}});