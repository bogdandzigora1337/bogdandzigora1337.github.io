!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5)},function(e,t,n){},function(e,t){new Swiper(".items-slider",{direction:"horizontal",loop:!1,spaceBetween:16,width:238,breakpoints:{768:{enabled:!1,width:222,spaceBetween:24},1120:{enabled:!1,width:238,spaceBetween:32}},pagination:{el:".swiper-pagination",type:"bullets"}});let n=document.querySelectorAll(".items-slider"),l=document.querySelectorAll(".swiper__btn"),o=document.querySelectorAll(".swiper__btn-img"),i=document.querySelectorAll(".swiper__btn-text"),r=1,c=function(e,t,n,l){e.addEventListener("click",(function(){r+=1,t.classList.toggle("items-slider"),r%2==0?(l.textContent="Скрыть",l.style.paddingLeft="7px",n.style.top="-3px",n.src="./img/expand-close.svg",e.style.marginBottom="14px"):(l.textContent="Показать все",l.style.paddingLeft="0",n.src="./img/icon-open.svg",n.style.top="3px",e.style.marginBottom="32px")}))};for(let e=0;e<l.length;e++)c(l[e],n[e],o[e],i[e])},function(e,t){let n=document.querySelector(".main__company-description-text"),l=document.querySelector(".main__company-btn-hidden"),o=1;l.addEventListener("click",(function(){o+=1,n.classList.toggle("main__company-description-text--hidden"),o%2==0?(l.children[0].style.transform="rotate(-180deg)",l.children[1].textContent="Скрыть",l.children[1].style.transform="translate(-40px)"):(l.children[0].style.transform="rotate(360deg)",l.children[1].textContent="Читать далее",l.children[1].style.transform="translate(0px)")}))},function(e,t){let n=document.querySelector(".page"),l=document.querySelector(".sidebar");document.querySelectorAll(".header__btn--burger-icon").forEach(e=>{e.addEventListener("click",(function(e){e.isClick=!0,window.innerWidth<=767?(l.classList.toggle("sidebar-hidden"),n.classList.toggle("page-none")):(l.classList.toggle("sidebar-hidden"),l.style.zIndex=1,n.classList.toggle("page-hidden"),n.style.display="block")}))}),document.body.addEventListener("click",(function(e){1!=e.isClick&&1!=e.target.classList.contains("header__btn--burger-icon")&&(l.classList.remove("sidebar-hidden"),n.classList.remove("page-hidden"))}));let o=document.querySelector(".feedback"),i=document.querySelectorAll(".feedback--btn");document.querySelector(".feedback-btn--close").addEventListener("click",(function(){window.innerWidth<=767?(o.style.display="none",l.style.display="block"):(o.style.display="none",n.style.opacity="1",l.style.opacity="1")}));for(let e=0;e<i.length;e++)i[e].addEventListener("click",(function(){window.innerWidth<=767?(o.style.display="block",n.style.display="none",l.style.display="none"):(o.style.display="block",n.style.opacity="0.05",l.style.opacity="0.05")}));let r=document.querySelector(".call-order"),c=document.querySelectorAll(".call-order--btn"),s=document.querySelector(".call-order-btn--close");for(let e=0;e<c.length;e++)c[e].addEventListener("click",(function(){r.style.display="block",window.innerWidth<=767?(n.style.display="none",l.style.display="none"):(n.style.opacity="0.05",l.style.opacity="0.05")}));s.addEventListener("click",(function(){window.innerWidth<=767?(r.style.display="none",l.style.display="block"):(r.style.display="none",n.style.opacity="1",l.style.opacity="1")}))}]);
//# sourceMappingURL=bundle.js.map