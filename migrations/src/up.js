module.exports = (function(){
	"use strict";
	var _path = require("path")
		, _fs = require("fs")
		, _clog = require("clog")
		, _requiredir = require("requiredir")
		, _tracker = require("./migration_version_tracker");


	/**
	 * Verifies the migrations directory.
	 * @privage 
	 * @param {string} path The directory or path to verify.
	 */
	var _verifyMigrationsDirectory = function(path){
		if (!_path.existsSync(path)){
			_clog.error("*******************************************************");
			_clog.error("* Migrations directory not found.");
			_clog.error("* " + path);
			_clog.error("*******************************************************");
			return false;
		} 
		
		_clog.debug("Migrations directory exists at '" + path + "'.");
		return true;
	};
	
	/**
	 * Verifies if an optional migration file was passed into the command.
	 * @privage 
	 * @param {string} migration The name of the migration to identify.
	 */
	var _verifyOptionalMigrationProvided = function(migration){
		if (typeof migration === "undefined"){
			_clog.debug("No migration specified");
			return false;
		}
		
		_clog.debug("Migration specified - '" + migration + "'");
		
		return true;
	};

	/**
	 * Verifies if an optional migration file exists in the migrations directory.
	 * @privage 
	 * @param {string} path The directory or path to search.
	 * @param {string} migration The name of the migration to identify.
	 */
	var _verifyOptionalMigration = function(path, migration){

		if (!_path.existsSync(path + "/" + migration)){
			_clog.error("*******************************************************");
			_clog.error("* Migration '" + migration + "' does not exist");
			_clog.error("* - in " + path);
			_clog.error("*******************************************************");
			return false;
		}
		
		_clog.debug("Migration found");
		
		return true;
	};

	/**
	 * Exports a function that will migrate the scripts up.
	 * @public 
	 * @param {string} migration The optional migration file to which to migrate.  If migreation is not provide all new migrations will be ran.
	 */
	var _command = function(migration) {
		console.log('');
		var migrationsDirectory = _path.resolve(process.cwd() + "/migrations");
		
		if(!_verifyMigrationsDirectory(migrationsDirectory)){
			console.log("");
			console.log("Unable to continue proceed.");
			return;
		}
		
		var migrationExists = false;
		if (_verifyOptionalMigrationProvided(migration)){
			if(!_verifyOptionalMigration(migrationsDirectory, migration)){
				console.log("");
				console.log("Unable to continue proceed.");
				return;
			} else {
				migrationExists = true;
			}
		}
		
		var currentVersion = _tracker.getCurrentVersion(migrationsDirectory);
		var migrations = _requiredir("./migrations");
		console.dir(migrations);
		// Iterate until specified version or over all.
		// Remote success.
		

		console.log('');
	};	
	
	return _command;
}());
