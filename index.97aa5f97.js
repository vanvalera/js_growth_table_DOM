function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=document.querySelector(".remove-column"),n=document.querySelector(".append-row"),o=t(document.querySelectorAll("tr"));r.addEventListener("click",function(e){o.forEach(function(e){var t=e.children.length,n=e.querySelector("td:last-child");t>2&&(n.remove(),r.disabled=!1),2===e.children.length&&(r.disabled=!0),t<11&&(l.disabled=!1)})});var l=document.querySelector(".append-column");l.addEventListener("click",function(e){o.forEach(function(e){var t=document.createElement("td"),n=e.children.length,o=e.querySelector("td:last-child");n>1&&(o.insertAdjacentElement("beforebegin",t),r.disabled=!1),n>8&&(l.disabled=!0)})});var i=document.querySelector(".remove-row");i.addEventListener("click",function(e){o[0].remove(),o.shift(),(2===o.length||10===o.length)&&(i.disabled=!0),o.length<10&&(n.disabled=!1)}),n.addEventListener("click",function(e){o.length>1&&o.length<10&&(i.disabled=!1);var r=o[o.length-1],l=r.cloneNode(!0);r.after(l),10===(o=t(document.querySelectorAll("tr"))).length&&(n.disabled=!0)});
//# sourceMappingURL=index.97aa5f97.js.map