const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let d;t.addEventListener("click",(o=>{d=setInterval((()=>{const d=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.setAttribute("disabled","true"),e.removeAttribute("disabled","true"),r.style.backgroundColor=d}),1e3)})),e.addEventListener("click",(r=>{clearInterval(d),e.setAttribute("disabled","true"),t.removeAttribute("disabled","true")}));
//# sourceMappingURL=01-color-switcher.c4476d29.js.map
