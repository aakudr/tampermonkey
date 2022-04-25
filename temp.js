// ==UserScript==
// @name         template 1.0
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Мое описание
// @author       You
// @match        https://unirenter.bitrix24.ru/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://cdn.jsdelivr.net/npm/jquery.growl@1.3.5/javascripts/jquery.growl.min.js
// @require      https://raw.githubusercontent.com/aakudr/tampermonkey/main/bitrix_helper.js
// @require      https://raw.githubusercontent.com/urtvs/tempermonkey/main/tempermonkey_test.js

// @run-at document-end
// ==/UserScript==

// Режим отладки. 0 - отключен; 1 - включен
var DEBUG_MODE = 0;

var userID = 1;
var versionID=2;

testFunc();

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}



addGlobalStyle('button[id$="_convert_button"].ui-btn-extra {background-color: #ddd}')
addGlobalStyle('button[id$="_convert_label"].ui-btn-main {padding: 0; margin: 0; width: 0}')
document.body.innerHTML = document.body.innerHTML.replace(/Сделку \+ контакт/g,"");

document.querySelectorAll('button[id^="toolbar_lead_details_"]')[3].setAttribute('style', 'background-color: #ddd')
document.querySelectorAll('button[id^="toolbar_lead_details_"]')[2].setAttribute('style', 'padding: 0; margin: 0; width: 0')
