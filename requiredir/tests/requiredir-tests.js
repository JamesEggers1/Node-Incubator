"use strict";
var _mocha = require("mocha")
	, _should = require("should")
	, _helpers = require("./test-helpers")
	, requiredir = require("../src/requiredir");
	
describe("requiredir.js", function(){
	describe("Instantiation", function(){
		
		it("should throw an exception if a path is not provided", function(){
			(function(){requiredir();}).should.throw("The path must be provided when instantiating the object.");
		});
		
		it("should throw an exception if the path is empty", function(){
			(function(){requiredir("");}).should.throw("The path must be provided when instantiating the object.");
		});
		
		it("should throw an exception if the path is only whitespace", function(){
			(function(){requiredir("    ");}).should.throw("The path must be provided when instantiating the object.");
		});
		
		it("should throw an exception if the path does not exist.", function(){
			(function(){requiredir("./doesnotexist");}).should.throw("The directory path does not exist.");
		});
		
		it("should throw an exception if the path is not a directory.", function(){
			(function(){requiredir("./LICENSE");}).should.throw("The path provided is not a directory.");
		});
	});
	
	describe("Reading Files", function(){
		
		it("should import all modules from the filenames from the directory.", function(){
			var path = "tmp"
				, count = 3;
				
			_helpers.setup(path, count);
			
			try {
				var imp = requiredir(path);
				imp.count.should.equal(count);
				imp.modules.length.should.equal(count);
			} catch (err) {
				console.dir(err);
			} finally {
				_helpers.teardown(path);
			}			
		});
	});
});