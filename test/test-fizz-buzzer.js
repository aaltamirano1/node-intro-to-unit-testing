const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function(){
	it('should throw an error if the input is not a number', function(){
		expect(()=>fizzBuzzer('a')).to.throw(Error);
	});
	it('should return fizz-buzz if the input is divisible by 15', function(){
		expect(fizzBuzzer(30)).to.equal('fizz-buzz');
	});
	it('should return buzz if the input is divisible by 5', function(){
		expect(fizzBuzzer(20)).to.equal('buzz');
	});
	it('should return fizz if the input is divisible by 3', function(){
		expect(fizzBuzzer(9)).to.equal('fizz');
	});
	it('should return the input if the input is not divisible by 5 or 3', function(){
		expect(fizzBuzzer(7)).to.equal(7);
	});
});