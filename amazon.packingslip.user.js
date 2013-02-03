// ==UserScript==
// @name       Amazon Invoice Corrector
// @namespace  https://sellercentral.amazon.com
// @version    0.1.4
// @description  Fixes Amazon Invoices
// @match   	https://sellercentral.amazon.com/gp/orders-v2/packing-slip/*
// @match 		https://sellercentral.amazon.co.uk/gp/orders-v2/packing-slip/*
// @copyright  2012+, You
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// ==/UserScript==

//remove ship to... replace logic thanks to http://www.benalman.com/projects/jquery-replacetext-plugin/
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);
$("body *").replaceText("Ship To:", "");

//move address
$("table:first").css("margin-left","-21px").css("margin-top", "-27px");

//remove everything after the info containter
$('.printbucket').nextAll().remove();

//Prints thanks for purchase
$('body').append('<div class="printbucket printednormaltext"><b>Thank you for your purchase!</b><br>We greatly appreciate your business. It is our highest goal to provide our customers with 5-star service. If you feel that you did not receive 5-star service, please contact us before leaving any feedback so that we may resolve the issue. Our email is <b>1963kennedy@gmail.com.</b></div>');

//Prints feedback information
$('body').append('<div class="printbucket printednormaltext"><b>To leave 5-star feedback:</b><br>1. Go to <a href="http//amazon.com/feedback">amazon.com/feedback</a> 2. You\'ll be prompted to log in to your account. 3. After logging in, you\'ll see a list of all of your orders that need feedback. 4. Find the order on the list and click the "Leave Seller Feedback" button on the right. 5. Select 5-stars for J.E. Miles, A Bookseller.</div>');

//Prints BAFBE info
$('body').append('<div class="printbucket printednormaltext"><b>Visit our free bookstore that we co-operate at <a href="http://bayareafreebookexchange.com">www.bayareafreebookexchange.com</a></b></div>');

//regex to find box number
var info = $('.printedsubtext:first').text();
re = /\((.*)\)/i;
var boxnumber = info.match(re)[1];

//prints large box number
$('body').append('<br><p id="boxnumber" style="margin-top: -12px; font-size: 40px; text-align:center;">' + boxnumber + '</p>');
