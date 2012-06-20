"use strict";
var _mocha = require("mocha")
	, _should = require("should")
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
});