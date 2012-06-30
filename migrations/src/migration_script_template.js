module.exports = (function(){
	"use strict";

	var _eol = require("./eol")
		, _template =[
			''
			, 'exports.name = "{{filename}}"'
			, ''
			, 'exports.up = function(){'
			, ''
			, '};'
			, ''
			, 'exports.down = function(){'
			, ''
			, '};'
		].join(_eol);


	return _template;	
}());
