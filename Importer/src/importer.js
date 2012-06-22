"use strict";
module.exports = (function(){
	var _fs = require("fs")
		, _path = require("path");
	
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
	
	var _importFiles = function(path, files){
		var moduleList = []
			, relativePath = _path.resolve(process.cwd() + "/" + path)
			, trimmedName;
		
		files.forEach(function (element, index, array){
			if (_fs.lstatSync(path + "/" + element).isFile()){
				trimmedName =  element.substring(0, (element.length - 3));
				moduleList.push(require(relativePath + "/" + trimmedName));
			}
		});
		
		return moduleList;
	};
	
	
	var Obj = function(path) {
		_verifyDirectory(path);
		
		var fileList = []
			, modules = [];
		
		var files = _fs.readdirSync(path);
		
		modules = _importFiles(path, files);
		
		this.count = modules.length;
		this.modules = modules;
	};
	
	return Obj;
}());