!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1776)}({13:function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"===typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"===typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"===typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},14:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a=i[1],c=i[2],u=i[3],f={css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(f):n.push(r[s]={id:s,parts:[f]})}return n}function i(t,e){var n=b(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!==typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=b(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),i(t,e),e}function u(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function f(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=y++;n=m||(m=a(e)),r=l.bind(null,n,u,!1),o=l.bind(null,n,u,!0)}else t.sourceMap&&"function"===typeof URL&&"function"===typeof URL.createObjectURL&&"function"===typeof URL.revokeObjectURL&&"function"===typeof Blob&&"function"===typeof btoa?(n=c(e),r=d.bind(null,n,e),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=p.bind(null,n),o=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function p(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},v=function(t){var e;return function(){return"undefined"===typeof e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),b=function(t){var e={};return function(n){if("undefined"===typeof e[n]){var r=t.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[n]=r}return e[n]}}(function(t){return document.querySelector(t)}),m=null,y=0,g=[],x=n(252);t.exports=function(t,e){if("undefined"!==typeof DEBUG&&DEBUG&&"object"!==typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"===typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=h[a.id];c.refs--,i.push(c)}if(t){r(o(t,e),e)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete h[c.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},1776:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1777),o=(n.n(r),n(1778));n.n(o);console.log('To prevent the redirect, add "desktop-redirect-disabled"="true" to localStorage'),console.log("Loading /"),document.getElementById("app").src="/"},1777:function(t,e){},1778:function(t,e,n){var r=n(1779);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(14)(r,o);r.locals&&(t.exports=r.locals)},1779:function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n",""])},252:function(t,e){t.exports=function(t){var e="undefined"!==typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!==typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}});
//# sourceMappingURL=desktop.bundle.js.map