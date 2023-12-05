import { expect } from 'chai';
import { describe, it } from 'mocha';

import toInteger from '../src/toInteger.js';

describe('toInteger', function() {
    it('should round a number to an integer', function() {
        expect(toInteger(3.2)).to.equal(3)
		expect(toInteger(-3.2)).to.equal(-3)
    });
	it('should work with a string of a number', function() {
        expect(toInteger('3.2')).to.equal(3)
		expect(toInteger('-3.2')).to.equal(-3)
    });
	it('should return 0 from Number.MIN_VALUE', function() {
        expect(toInteger(Number.MIN_VALUE)).to.equal(0)
    });
	it('should return Number.MAX_VALUE from Infinity', function() {
        expect(toInteger(Infinity)).to.equal(Number.MAX_VALUE)
    });
})