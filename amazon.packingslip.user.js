// ==UserScript==
// @name       Amazon Invoice Corrector
// @namespace  https://sellercentral.amazon.com
// @version    0.1.4
// @description  Fixes Amazon Invoices
// @match   	https://sellercentral.amazon.com/gp/orders-v2/*
// @match 		https://sellercentral.amazon.co.uk/gp/orders-v2/*
// @copyright  2012+, You
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// ==/UserScript==

//remove ship to... replace logic thanks to http://www.benalman.com/projects/jquery-replacetext-plugin/
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);
$("body *").replaceText("Ship To:", "");

//move address
$(".printedlargesttext").css("margin-left","-21px").css("margin-top", "-27px");

//remove everything after the info containter
$('.printbucket').nextUntil(".printedpagebreak").remove();


	$('.printbucket').append('<div class="printbucket printednormaltext"><b>Thank you for your purchase!</b><br>We greatly appreciate your business. It is our highest goal to provide our customers with5-star service. If you feel that you did not receive 5-star service, please contact us before leaving any feedback so that we may resolve the issue. Our email is <b>1963kennedy@gmail.com.</b></div><div class="printbucket printednormaltext"><b>To leave 5-star feedback:</b><br>1. Go to <a href="http//amazon.com/feedback">amazon.com/feedback</a> 2. You\'ll be prompted to log in to your account. 3. After logging in, you\'ll see a list of all of your orders that need feedback. 4. Find the order on the list and click the "Leave Seller Feedback" button on the right. 5. Select 5-stars for J.E. Miles, A Bookseller.</div><div class="printbucket last printednormaltext"><b>Visit our free bookstore that we co-operateat <a href="http://bayareafreebookexchange.com">www.bayareafreebookexchange.com</a></b></div>');

$('.printedpackingslip').each(function() {
	$.each($('.printedsubtext'), function() {

//removes empty divs
if($.trim($(this).html()) == "") {
$(this).remove();
}

	var info = $(this).text();
	var boxnumber = info.match(/\((.*)\)/i)[1];
			$('.return').append('<br><p id="boxnumber" style="margin-top: -12px; font-size: 40px; text-align:center;">' + boxnumber + '</p>');
		
});

});
