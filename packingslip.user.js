// ==UserScript==
// @name       Invoice Corrector
// @namespace  https://sellercentral.amazon.com
// @version    0.1
// @description  Fixes Amazon Invoices
//  @match 		https://sellercentral.amazon.com/*
// @copyright  2012+, You
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// @require       http://ajax.googleapis.com/ajax/libs/jqueryui/1.5.2/jquery-ui.min.js
// ==/UserScript==

//remove ship to
$("table:first").find("tr:first").remove();

//remove everything after the info containter
$('.printbucket').nextAll().remove();
