!function(){var t,e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(a){t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.setAttribute("disabled","true"),r.removeAttribute("disabled","true"),o.style.backgroundColor=t}),1e3)})),r.addEventListener("click",(function(o){clearInterval(t),r.setAttribute("disabled","true"),e.removeAttribute("disabled","true")}))}();
//# sourceMappingURL=01-color-switcher.97c7acf5.js.map