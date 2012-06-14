var namespace;
(function(ns){
	"use strict";
	ns.luhn = (function(){
		function validate(cardNumber){
			var trimmed = cardNumber.trim()
				, length = trimmed.length;
		}
		return {
			validate: validate
		};
	} ());
}((typeof window === "undefined") ? exports : namespace || window));