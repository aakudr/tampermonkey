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
var DEBUG_MODE = 1;

var userID = 1;
var versionID=2;

let userToken = '9bae926779705bce2a7d96ae0cf2f2c8'

bitrix_helper()

window.onload = function()
{
   console.log('debug start')
   let els = document.getElementsByClassName('ui-btn-icon-phone-call')
   console.log(els[0])
   document.getElementsByClassName('ui-btn-icon-phone-call').item(0).innerHTML = "asdfasdf"
}
