!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var d=(()=>{const e=document.createElement("div"),t=document.querySelector("#content"),n=document.createElement("h4"),d=document.createElement("div"),o=document.createElement("span"),l=document.createElement("a"),a=document.createElement("a"),c=document.createElement("a"),i=document.createElement("button"),r=document.createElement("div"),s=document.createElement("h2"),u=document.createElement("p"),m=document.createElement("div"),p=document.createElement("a"),y=document.createElement("a");e.classList.add("home-img"),n.classList.add("logo"),d.classList.add("nav-items"),l.classList.add("home-l"),a.classList.add("recipes-l"),c.classList.add("about-l"),i.classList.add("contact-btn"),r.classList.add("info"),s.classList.add("about-heading"),u.classList.add("about-desc"),m.classList.add("full-desc"),p.classList.add("read-more"),y.classList.add("show-less");return{render:()=>{n.textContent="Rico Meals",l.textContent="home",a.textContent="recipes",c.textContent="about",i.textContent="Conctact Us",s.textContent="DELICOUS FOODS",u.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit.",m.textContent="Eius est soluta blanditiis velit doloremque corrupti aliquid ducimus consectetur ea nobis dolorem, id quibusdam praesentium consequuntur modi eligendi, sunt suscipit ullam iure nesciunt tempore. Itaque placeat, libero aliquam odio ex voluptas.'\n\nVel vitae, assumenda blanditiis nemo in vero reprehenderit asperiores distinctio exercitationem aliquid, quam velit explicabo neque. Sapiente provident sequi omnis itaque eaque voluptatum vel. Accusamus deserunt atque eligendi mollitia voluptates eum libero, ratione id labore. Magnam porro dolorem aspernatur, dolor?",p.textContent="Read More",y.textContent="Show less",p.addEventListener("click",()=>{m.style.display="block",p.style.display="none",y.style.display="block"}),y.addEventListener("click",()=>{m.style.display="none",p.style.display="block",y.style.display="none"}),r.appendChild(s),r.appendChild(u),r.appendChild(p),r.appendChild(m),r.appendChild(y),o.appendChild(l),o.appendChild(a),o.appendChild(c),d.appendChild(n),d.appendChild(o),d.appendChild(i),e.appendChild(d),e.appendChild(r),t.appendChild(e),t.style.margin="0"}}})();var o={render:()=>{null!==document.querySelector(".menu-cont")&&(document.querySelector(".menu-cont").style.display="none"),null!==document.querySelector(".contact-cont")&&(document.querySelector(".contact-cont").style.display="none"),document.querySelector(".info").style.display="block",document.querySelector(".about-heading").textContent="About Us"}};var l=(()=>{document.createElement("div");const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("img"),l=document.createElement("p");return{render:()=>{"none"!==document.querySelector(".info").style.display?document.querySelector(".info").style.display="none":document.querySelector(".contact-cont").style.display="none";const a=document.querySelector(".home-img");e.classList.add("menu-cont"),t.classList.add("menu-heading"),n.classList.add("menu-items"),d.classList.add("menu-item"),t.classList.add("menu-heading"),t.textContent="Our Menu",e.appendChild(t);let c=0;if(1===e.childNodes.length)for(;c<4;){if(0===c)o.src="../images/dishes_1.webp",l.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",d.appendChild(o),d.appendChild(l),n.appendChild(d);else{let e=d.cloneNode(!0);n.appendChild(e)}c+=1}e.appendChild(n),a.appendChild(e),e.style.display="block"}}})();var a=(()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("p"),l=document.createElement("p"),a=document.createElement("p"),c=document.createElement("textarea");e.classList.add("contact-cont"),n.classList.add("contact-det"),d.classList.add("leave-msg");return{render:()=>{console.log(document.querySelector(".info").style.display),null!==document.querySelector(".menu-cont")&&(document.querySelector(".menu-cont").style.display="none"),null!==document.querySelector(".info")&&(document.querySelector(".info").style.display="none"),t.textContent="REACH OUT TO OUR TEAM",o.textContent="Manger: Kevin Dan",l.textContent="Email: dankevin@ricomeals.org",a.textContent="Tel: +254173673043",d.textContent="Leave us a message:",c.placeholder="Tell us anything",d.appendChild(c),n.appendChild(t),n.appendChild(o),n.appendChild(l),n.appendChild(a),e.appendChild(n),e.appendChild(d),document.querySelector(".home-img").appendChild(e),document.querySelector(".contact-cont").style.display="block"}}})();d.render(),document.querySelector(".home-l").addEventListener("click",()=>{location.reload()}),document.querySelector(".about-l").addEventListener("click",()=>{o.render()}),document.querySelector(".recipes-l").addEventListener("click",()=>{l.render()}),document.querySelector(".contact-btn").addEventListener("click",()=>{a.render()})}]);