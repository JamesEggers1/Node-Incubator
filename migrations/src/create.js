"use strict";
var _timestamp = require("./timestamp")
	, _path = require("path")
	, _fs = require("fs")
	, _template = require("./migration_script_template")
	, _clog = require("clog");

/**
 * Generates the timestamped file name
 * @privage 
 * @param {string} description The description of the script.
 * @returns {string} The composed file name to use.
 */
var _generateFileName = function(description) {
	description = (typeof description !== "undefined") ? description.trim().replace(/[^a-zA-Z0-9\-]/g, "_") : "";
	
	var separator = (description.length > 0) ? "_" : ""
		, filename = _timestamp.generateTimeStamp() + separator + description + ".js";
	
	return filename;
};

/**
 * Verifies and creates the migrations directory if it doesn't already exist.
 * @privage 
 * @param {string} path The directory or path to create.
 */
var _establishMigrationsDirectory = function(path){
	if (!_path.existsSync(path)){
		_clog.warn("Migrations directory not found. Creating migrations directory at '" + path + "'.");
		_fs.mkdirSync(path);
	} else {
		_clog.debug("Migrations directory exists at '" + path + "'.");
	}
};

/**
 * Writes a new migration script file.
 * @privage 
 * @param {string} path The directory or path in which the new file will be created.
 * @param {string} description The description of the script.
 */
var _createNewMigrationScript = function(path, description){
	var filename = _generateFileName(description);
	_fs.writeFileSync(path + '/' + filename, _template);
	_clog.info("'" + filename + "' has been created!");
};

/**
 * Exprts a function that will create a new migration script when called.
 * @privage 
 * @param {string} description The description of the script.
 */
module.exports = function(description) {
	var migrationsDirectory = _path.resolve(process.cwd() + "/migrations");
	_establishMigrationsDirectory(migrationsDirectory);
	_createNewMigrationScript(migrationsDirectory, description);
};