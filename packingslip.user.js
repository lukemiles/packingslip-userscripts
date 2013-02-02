// ==UserScript==
// @name       Invoice Corrector
// @namespace  https://sellercentral.amazon.com
// @version    0.1b
// @description  Fixes Amazon Invoices
// @match 		https://sellercentral.amazon.com/*
// @copyright  2012+, You
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// ==/UserScript==

//remove ship to
$("table:first").find("tr:first").remove();

//move address
$("table:first").css("margin-left","-21px").css("margin-top", "-27px");

//remove everything after the info containter
$('.printbucket').nextAll().remove();

//regex to find box number
var info = $('.printedsubtext:first').text();
re = /\((.*)\)/i;
var boxnumber = info.match(re)[1];

//prints large box number
$('body').append('<p id="boxnumber" style="font-size: 60px; text-align:center;">' + boxnumber + '</p>');