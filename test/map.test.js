import { expect } from 'chai';
import { describe, it } from 'mocha';

import map from '../src/map.js';

function square(n) {
    return n * n
}

function checklength(n) {
    return n.length;
}

describe('map', function() {
    it('should create an array of numerical values by running each element of `array` through `iteratee', function() {
        expect(map([4, 8], square)).to.deep.equal([16, 64])
    });
    it('should not throw an error when given an empty array', function() {
        expect(map([], square)).to.deep.equal([])
    });
    it('should work with arrays of strings when given a suitable function', function() {
        expect(map(["bob", "fred"], checklength)).to.deep.equal([3,4])
    });
    it('should return an empty array if the input array is null', function() {
        expect(map(null, checklength)).to.deep.equal([])
    });

})