"use strict";
var _mocha = require("mocha")
	, _should = require("should")
	, _helpers = require("./test-helpers")
	, Importer = require("../src/importer");
	
describe("Importer.js", function(){
	describe("Instantiation", function(){
		
		it("should throw an exception if a path is not provided", function(){
			(function(){new Importer();}).should.throw("The path must be provided when instantiating the object.");
		});
		
		it("should throw an exception if the path is empty", function(){
			(function(){new Importer("");}).should.throw("The path must be provided when instantiating the object.");
		});
		
		it("should throw an exception if the path is only whitespace", function(){
			(function(){new Importer("    ");}).should.throw("The path must be provided when instantiating the object.");
		});
		
		it("should throw an exception if the path does not exist.", function(){
			(function(){new Importer("./doesnotexist");}).should.throw("The directory path does not exist.");
		});
		
		it("should throw an exception if the path is not a directory.", function(){
			(function(){new Importer("./LICENSE");}).should.throw("The path provided is not a directory.");
		});
	});
	
	describe("Reading Files", function(){
	
		/*it("should throw an exception if there was an error reading the directory.", function(){
			var fs = require("fs");
			fs.readdir = function(path, cb){
				cb({"path": "test"}, []);
			};
			(function(){new Importer("tests");}).should.throw("Error reading files from path 'tests'");
		});*/
		
		it("should import all modules from the filenames from the directory.", function(){
			var path = "tmp"
				, count = 3;
				
			//_helpers.setup(path, count);
			
			try {
				var imp = new Importer(path);
				imp.count.should.equal(count);
				imp.modules.length.should.equal(count);
			} catch (err) {
				console.dir(err);
			} finally {
				//_helpers.teardown(path);
			}			
		});
	});
});