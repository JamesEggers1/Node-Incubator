"use strict";

var mocha = require("mocha")
	, should = require("should")
	, validator = require("../src/date-validator").DateValidator;
	
describe("Date Validator", function(){
	
	describe("Non-Numeric String Input", function(){
	
		it("should return false if no parameters are passed into it.", function(){
			validator.validate().should.be.false;
		});
		
		it("should return false if year is undefined (2 parameter scenario).", function(){
			var year
				, month = "01"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if month is undefined.", function(){
			var year = "2012"
				, month
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if day is undefined.", function(){
			var year = "2012"
				, month = "01"
				, day;
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if year is not numeric.", function(){
			var year = "YYYY"
				, month = "01"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if month is not numeric.", function(){
			var year = "2012"
				, month = "MM"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if day is not numeric.", function(){
			var year = "2012"
				, month = "01"
				, day = "DD";
			
			validator.validate(year, month, day).should.be.false;
		});
	});
	
	describe("Numeric Input", function(){
		it("should return false if year is negative.", function(){
			var year = "-2012"
				, month = "01"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
	});
	
});