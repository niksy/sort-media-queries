var expect = require('expect.js');
var fixture = require('./fixtures/data');
var smq = require('../src/sortMediaQueries');

describe('sort', function(){
	it('should return empty array if no argument is passed', function(){
		var a = smq.sort();
		expect(a).to.be.an('array');
		expect(a).to.have.length(0);
	});
	it('should return sorted array with items as strings if first argument is array of strings', function(){
		var a = smq.sort(fixture.asString.simple.input);
		var b = smq.sort(fixture.asString.complex.input);
		expect(a).to.eql(fixture.asString.simple.output);
		expect(b).to.eql(fixture.asString.complex.output);
	});
	it('should return original array if first argument is array of objects and second argument is not provided', function(){
		var a = smq.sort(fixture.asObject.simple.input);
		var b = smq.sort(fixture.asObject.complex.input);
		expect(a).to.eql(fixture.asObject.simple.input);
		expect(b).to.eql(fixture.asObject.complex.input);
	});
	it('should return sorted array with items as objects if first argument is array of objects and second argument is provided', function(){
		var a = smq.sort(fixture.asObject.simple.input,'media');
		var b = smq.sort(fixture.asObject.complex.input,'media');
		expect(a).to.eql(fixture.asObject.simple.output);
		expect(b).to.eql(fixture.asObject.complex.output);
	});
});

describe('sortString', function(){
	it('should return empty array if no argument is passed', function(){
		var a = smq.sortString();
		expect(a).to.be.an('array');
		expect(a).to.have.length(0);
	});
	it('should return empty array if first argument is not array', function(){
		var a = smq.sortString(1);
		var b = smq.sortString('prop');
		var c = smq.sortString({});
		expect(a).to.be.an('array');
		expect(b).to.be.an('array');
		expect(c).to.be.an('array');
		expect(a).to.have.length(0);
		expect(b).to.have.length(0);
		expect(c).to.have.length(0);
	});
	it('should have argument which is a simple array with 3 items', function(){
		var a = smq.sortString(fixture.asString.simple.input);
		expect(a).to.have.length(3);
	});
	it('should return original array if provided items are not strings', function(){
		var a = smq.sort(fixture.asString.mixed.input);
		expect(a).to.eql(fixture.asString.mixed.input);
	});
	it('should return sorted array with items as strings', function(){
		var a = smq.sortString(fixture.asString.simple.input);
		var b = smq.sortString(fixture.asString.complex.input);
		expect(a).to.eql(fixture.asString.simple.output);
		expect(b).to.eql(fixture.asString.complex.output);
	});
});

describe('sortObject', function(){
	it('should return empty array if no argument is passed', function(){
		var a = smq.sortObject();
		expect(a).to.be.an('array');
		expect(a).to.have.length(0);
	});
	it('should return empty array if first argument is not array', function(){
		var a = smq.sortObject(1);
		var b = smq.sortObject('prop');
		var c = smq.sortObject({});
		expect(a).to.be.an('array');
		expect(b).to.be.an('array');
		expect(c).to.be.an('array');
		expect(a).to.have.length(0);
		expect(b).to.have.length(0);
		expect(c).to.have.length(0);
	});
	it('should return original array if second argument is not provided', function(){
		var a = smq.sortObject(fixture.asObject.simple.input);
		var b = smq.sortObject(fixture.asObject.complex.input);
		expect(a).to.be.an('array');
		expect(b).to.be.an('array');
		expect(a).to.eql(fixture.asObject.simple.input);
		expect(b).to.eql(fixture.asObject.complex.input);
	});
	it('should return empty array if first argument is not a valid array and second argument is provided and does not exist as property on an object', function(){
		var a = smq.sortObject([],1);
		var b = smq.sortObject([],'prop');
		var c = smq.sortObject({},'prop');
		expect(a).to.be.an('array');
		expect(b).to.be.an('array');
		expect(c).to.be.an('array');
		expect(a).to.have.length(0);
		expect(b).to.have.length(0);
		expect(c).to.have.length(0);
	});
	it('should return original array if first argument is a valid array and second argument is provided and does not exist as property on an object', function(){
		var a = smq.sortObject(fixture.asObject.simple.input,1);
		var b = smq.sortObject(fixture.asObject.complex.input,'prop');
		expect(a).to.be.an('array');
		expect(b).to.be.an('array');
		expect(a).to.eql(fixture.asObject.simple.input);
		expect(b).to.eql(fixture.asObject.complex.input);
	});
	it('should return sorted array if second argument is provided and exists as property on an object', function(){
		var a = smq.sortObject(fixture.asObject.simple.input,'media');
		expect(a).to.be.an('array');
		expect(a.length).to.be.above(0);
		expect(a).to.eql(fixture.asObject.simple.output);
	});
	it('should return original array if provided items are not objects', function(){
		var a = smq.sortObject(fixture.asObject.mixed.input,'media');
		expect(a).to.be.an('array');
		expect(a).to.eql(fixture.asObject.mixed.input);
	});
	it('should return sorted array with items as objects', function(){
		var a = smq.sortObject(fixture.asObject.simple.input,'media');
		var b = smq.sortObject(fixture.asObject.complex.input,'media');
		expect(a).to.be.an('array');
		expect(b).to.be.an('array');
		expect(a).to.eql(fixture.asObject.simple.output);
		expect(b).to.eql(fixture.asObject.complex.output);
	});
});
