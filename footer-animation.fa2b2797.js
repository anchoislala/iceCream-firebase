parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"m96E":[function(require,module,exports) {
function e(){let e=document.getElementById("myAnimation"),t=0,n=document.getElementById("footerIce"),d=window.screen.width,l=26;window.screen.width<=480&&(l=Math.round(8*l/10));let o=null;n.style.width=l+"px",d-=l;let i=1;o=setInterval(function(){t%d==0&&i++;i%2==0?(t++,e.style.left=t+"px"):(t--,e.style.left=t+"px")},10)}document.addEventListener("DOMContentLoaded",t=>{e()});
},{}]},{},["m96E"], null)
//# sourceMappingURL=/iceCream-firebase/footer-animation.fa2b2797.js.map