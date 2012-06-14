"use strict";
var mocha = require("mocha")
	, should = require("should")
	, luhn = require("../src/luhn").luhn
	, _VALID_TEST_NUMBER = "4012111111111111";
	
describe("Luhn Validation", function(){
	
	describe("Basic Requirements", function(){
		
		it("should trim the number", function(){
			luhn.validate(_VALID_TEST_NUMBER + "       ").should.be.true;
		});
		
		it("should only allow numeric number strings", function(){
			luhn.validate(_VALID_TEST_NUMBER + "A").should.be.false;
		});
	});
	
	describe("Happy Path", function(){
		it("should return true for valid number.", function(){
			luhn.validate(_VALID_TEST_NUMBER).should.be.true;
		});
	});
	
});