import { expect } from 'chai';
import { describe, it } from 'mocha';

import every from '../src/every.js';

describe('every', function() {
    it('should return true if predicate returns truthy for all the elements of array', function() {
        expect(every([true, 1, 'yes'], Boolean)).to.be.true
    });
    it('should return false if predicate returns falsy for one elements of the array', function() {
		function identity(value){return value;}
		
		expect(every([true, 1, null, 'yes'], Boolean)).to.be.false
		expect(every([true, 1, undefined], identity)).to.be.false
		expect(every([true, 1, false], identity)).to.be.false
		expect(every([true, 1, NaN], identity)).to.be.false
		expect(every([true, 1, 0], identity)).to.be.false
		expect(every([true, 1, ''], identity)).to.be.false
		
    });
	it('should return true for empty arrays', function() {
        expect(every([], Boolean)).to.be.true
    });
})