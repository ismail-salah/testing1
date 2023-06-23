var chai= require("chai");

var assert = chai.assert
var expect = chai.expect

const{ capitalizeText, createArray } = require("../lab");

// Problem 1
describe("capitalizeText",function () {

      it("returns a string when given a string input",function() {
            expect(capitalizeText('hamada')).to.be.a("string")
        });

    it("capitalizes the input string",function() {
        expect((capitalizeText('hamada'))).to.equal("HAMADA");
    });


    it("throws a TypeError when given a non-string input",function() {
        expect(() => capitalizeText(12)).to.throw(TypeError, "parameter should be string");
    });

});


        // Problem 2

        describe('createArray function', function () {
          it('should return an array', function () {
            assert.isArray(createArray(3));
          });
        
          it('should return an array of length equal to the input number', function () {
            assert.lengthOf(createArray(3), 3);
          });
        
          it('should return an array that includes 1', function () {
            assert.include(createArray(3), 1);
          });
        
          it('should return an array of length 4 when passed 4 as input', function () {
            assert.lengthOf(createArray(4), 4);
          });
        
          it('should return an array of length 5 when passed 5 as input', function () {
            assert.lengthOf(createArray(5), 5);
          });
        
          it('should return an empty array when passed 0 as input', function () {
            assert.lengthOf(createArray(0), 0);
          });
        
          it('should return an array with only 0 when passed 1 as input', function () {
            assert.deepEqual(createArray(1), [0]);
          });
        
          it('should return an array with only 0 and 1 when passed 2 as input', function () {
            assert.deepEqual(createArray(2), [0, 1]);
          });
        
          it('should return an array with only 0 and 1 and 2 when passed 3 as input', function () {
            assert.deepEqual(createArray(3), [0, 1, 2]);
          });
        });