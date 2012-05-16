var namespace;
(function (ns) {
	"use strict";
	ns.DateValidator = (function () {

		function validate(year, month, day) {
			if (typeof year === "undefined"
				|| typeof month === "undefined"
				|| typeof day === "undefined"){
				return false;
			}
			
			var today = new Date();
	
			if (year.length <= 4){
				year = today.getFullDate().toString().substr(0,2) + year;
			}
			
			var century = parseInt(year.substr(0, 2) + "00", 10);

			month = parseInt(month, 10);
			day = parseInt(day, 10);
			year = parseInt(year, 10);

			if (isNaN(month) || isNaN(day) || isNaN(year)) {
				return false;
			}

			if (day < 1) {
				return false;
			}

			if (month > 12 || month < 1) {
				return false;
			}

			if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) < 0) {
				if (day > 31) {
					return false;
				}
			}

			if ([4, 6, 9, 11].indexOf(month) < 0) {
				if (day > 30) {
					return false;
				}
			}
			if (month === 2) {
				if (year === century && century % 400 === 0 && day > 29) {
					return false;
				}
				else if (year === century && century % 400 !== 0 && day > 28) {
					return false;
				}

				if (year % 4 === 0 && day > 29) {
					return false;
				}
				else if (year % 4 !== 0 && day > 28) {
					return false;
				}
			}

			var dob = month + "/" + day + "/" + year;
			var d = Date.parse(dob);
			if (isNaN(d)) {
				return false;
			}

			return true;
		}

		// exports
		return {
			validate: validate
		};
	} ());
}((typeof process !== "undefined" && process.title === "node") ? exports : namespace || window));