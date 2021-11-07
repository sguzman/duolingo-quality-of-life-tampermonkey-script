// ==UserScript==
// @name         Make a text selectable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.duolingo.com/*
// @homepage      https://userstyles.org/styles/152853
// @icon         https://www.google.com/s2/favicons?domain=duolingo.com
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function () {
        let eles = document.getElementsByTagName('*');

        console.log('Got ', eles.length, ' elements');
        for (let i = 0; i < eles.length; ++i) {
            eles[i].style.userSelect = 'text';
        }
    }, 500);
})();