 // ==UserScript==
// @name         阮一峰ES6入门样式优化
// @version      0.2.14
// @namespace    http://tampermonkey.net
// @description  fontSize Changed
// @author       SatanFaker
// @match        *://*.ruanyifeng.com/*
// @grant        none
// ==/UserScript==
// @run-at document-end



(function () {

    var content=document.getElementById("content")
    content.style.width = "70%";
    content.style.margin = "0 auto";
    var code=document.getElementsByTagName("code");
    for(var i=0;i<code.length;i++){
        code[i].style.fontSize="1rem";
    }
    var backtotop= document.getElementById("back_to_top")
    backtotop.style.display="none"
    var edit=document.getElementById("edit")
    edit.style.display="none"
    var theme=document.getElementById("theme")
    theme.style.display="none"

})();
