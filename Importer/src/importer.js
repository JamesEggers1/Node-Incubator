"use strict";
module.exports = (function(){
	var _fs = require("fs");
	
	var _verifyDirectory = function(path) {
		var stats; 
		
		if (typeof path === "undefined"
			|| (typeof path === "string" && path.trim().length === 0)) {
			throw new TypeError("The path must be provided when instantiating the object.");
		}
		
		try {
			stats = _fs.statSync(path);
			
		} catch (e) {
			throw new TypeError("The directory path does not exist.");
		}
		
		if (!stats.isDirectory()){
			throw new TypeError("The path provided is not a directory.");
		}
	};
	
	var Obj = function(path) {
		_verifyDirectory(path);
		
		
		
		
	};
	
	return Obj;
}());