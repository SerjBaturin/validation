!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=new RegExp("^[a-zA-Z ]{2,30}$"),a=new RegExp("^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"),o=new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"),u=new RegExp("^[a-zA-Z ]{3,30}$");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputName=t}var t,n,r;return t=e,(n=[{key:"getSuccessMessage",value:function(){return"".concat(this.inputName," is Correct")}},{key:"getErrorMessage",value:function(){return"".concat(this.inputName," is Incorrect")}}])&&i(t.prototype,n),r&&i(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t}var t,n,r;return t=e,(n=[{key:"makeOutput",value:function(e,t){this.element.innerHTML=e,this.element.style.color=t}}])&&c(t.prototype,n),r&&c(t,r),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=t}var t,n,i;return t=e,(n=[{key:"validate",value:function(){var e,t,n,i,c=new s(this.input.name.toUpperCase()),f=new l(this.input.parentNode.getElementsByTagName("span")[0]);switch(this.input.name){case"name":i=this.input.value,!0===r.test(i)?f.makeOutput(c.getSuccessMessage(),"green"):f.makeOutput(c.getErrorMessage(),"red");break;case"email":n=this.input.value,!0===a.test(n)?f.makeOutput(c.getSuccessMessage(),"green"):f.makeOutput(c.getErrorMessage(),"red");break;case"password":t=this.input.value,!0===o.test(t)?f.makeOutput(c.getSuccessMessage(),"green"):f.makeOutput(c.getErrorMessage(),"red");break;case"textarea":e=this.input.value,!0===u.test(e)?f.makeOutput(c.getSuccessMessage(),"green"):f.makeOutput(c.getErrorMessage(),"red")}}}])&&f(t.prototype,n),i&&f(t,i),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t}var t,n,r;return t=e,(n=[{key:"parse",value:function(){for(var e=this.form.getElementsByClassName("input"),t=0;t<e.length;t++)new p(e[t]).validate()}},{key:"validate",value:function(){console.log("Validate",this.form.className),this.parse()}}])&&g(t.prototype,n),r&&g(t,r),e}(),v=document.querySelector("#textarea"),y=document.querySelector("#textarea_length"),d=function(){v.addEventListener("keyup",(function(){y.innerHTML="left ".concat(30-v.value.length," char"),y.style.color="red"}))};!function(){for(var e=document.getElementsByTagName("form"),t=function(t){e[t].addEventListener("submit",(function(n){n.preventDefault(),new m(e[t]).validate()}))},n=0;n<e.length;n++)t(n)}(),d()}]);