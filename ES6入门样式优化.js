 // ==UserScript==
// @name         阮一峰ES6入门样式优化 
// @version      0.2.14
// @namespace    http://tampermonkey.net
// @description  fontSize Changed
// @author       SatanFaker
// @match        http://*.ruanyifeng.com/*
// @grant        none
// ==/UserScript==
// @run-at document-end



(function () {
 
    var  content=document.getElementById("content")
    content.style.width = "70%";
    content.style.margin  = "0 auto";
    var code=document.getElementsByTagName("code");
    for(var i=0;i<code.length;i++){
        code[i].style.fontSize="0.9rem";
    }
    var backtotop= document.getElementById("back_to_top")
    backtotop.style.marginLeft="95%"
    backtotop.style.backgroundColor="#2ea79a"
    var edit=document.getElementById("edit")
    edit.style.marginLeft="95%"
    edit.style.backgroundColor="#2ea79a"
    
})();
