"use strict";

var _fs = require("fs")
	, _path = require("path")
	, _rimraf = require("rimraf");
	
/**
 * Verifies that a directory exists relative to the current working directory.
 * @param {string} relativePath The relative path to verify.
 * @returns {boolean} Returns true if the directory exists relative to the current working directory.
 */
module.exports.relativeDirectoryExists = function(relativePath) {
	var relativeDirectory = _path.resolve(process.cwd() + "/" + relativePath);
	return _path.existsSync(relativeDirectory);
};

/**
 * Deletes a directory relative to the current working directory and all of its contents.
 * @param {string} relativePath The relative path to verify.
 */
module.exports.deleteRelativeDirectory = function(relativePath) {
	var relativeDirectory = _path.resolve(process.cwd() + "/" + relativePath);
	_rimraf.sync(relativeDirectory);
};

/**
 * Verifies that a file exists relative to the current working directory.
 * @param {string} relativeFilePath The relative file path to verify.
 * @returns {boolean} Returns true if the file exists relative to the current working directory.
 */
module.exports.relativeFileExists = function(relativeFilePath){
	var relativeFile = _path.resolve(process.cwd() + "/" + relativeFilePath);
	return _path.existsSync(relativeFile);
};