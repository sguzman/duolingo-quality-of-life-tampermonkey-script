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

/* globals $, jQuery */


(function() {
    'use strict';
    console.log('hi :)');
    $(document).ready(function () {
        $("body").bind("DOMSubtreeModified", function() {
            const a = window.location.href.startsWith('https://www.duolingo.com/practice');
            const b = window.location.href.startsWith('https://www.duolingo.com/skill');
            if (a || b) {
                let obj1 = $('span[data-test="hint-sentence"]');
                let obj2 = $('textarea');
                if (obj1.length > 0 && obj2.length === 1) {
                    obj1.css('user-select', 'text');
                    obj1.children().css('user-select', 'text');
                    //console.log('found it');
                }

            }
        });
    });

    console.log('bye :(');
})();