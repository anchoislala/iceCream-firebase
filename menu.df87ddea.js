parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PrRB":[function(require,module,exports) {
var define;
var e;parcelRequire=function(t,r,n,i){var o,u="function"==typeof parcelRequire&&parcelRequire,c="function"==typeof require&&require;function a(e,n){if(!r[e]){if(!t[e]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(e,!0);if(u)return u(e,!0);if(c&&"string"==typeof e)return c(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}l.resolve=function(r){return t[e][1][r]||r},l.cache={};var f=r[e]=new a.Module(e);t[e][0].call(f.exports,l,f,f.exports,this)}return r[e].exports;function l(e){return a(l.resolve(e))}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=t,a.cache=r,a.parent=u,a.register=function(e,r){t[e]=[function(e,t){t.exports=r},{}]};for(var f=0;f<n.length;f++)try{a(n[f])}catch(t){o||(o=t)}if(n.length){var l=a(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof e&&e.amd&&e(function(){return l})}if(parcelRequire=a,o)throw o;return a}({i0CD:[function(e,t,r){var n,i;n=document.querySelector("[data-menu-button]"),i=document.querySelector("[data-menu]"),n.addEventListener("click",function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.classList.toggle("is-open"),n.setAttribute("aria-expanded",!e),i.classList.toggle("is-open")})},{}]},{},["i0CD"]);
},{}]},{},["PrRB"], null)
//# sourceMappingURL=/iceCream-firebase/menu.df87ddea.js.map