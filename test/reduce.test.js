import { expect } from 'chai';
import { describe, it } from 'mocha';

import reduce from '../src/reduce.js';

describe('reduce', function() {
    it('should reduce an array to a value which is the accumulated result of running each element in collection through iteratee', function() {
        expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3)
    });
    it('should reduce an object to an object which has the accumulated result of running each element in collection through iteratee', function() {
        expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result}, {})).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] })
    });
	it('should use the first element as the default accumulator if none is given', function() {
        expect(reduce([1, 2], (a,b,c,d) => a)).to.equal(1)
    });
	it('should support empty collections', function() {
        expect(reduce([], (a,b,c,d) => a, 1)).to.equal(1)
    });
})