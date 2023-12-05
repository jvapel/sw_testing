import { expect } from 'chai';
import { describe, it } from 'mocha';

import every from '../src/every.js';

describe('every', function() {
    it('should return true if predicate returns truthy for all the elements of array', function() {
        expect(every([true, 1, 'yes'], Boolean)).to.be.true
    });
    it('should return false if predicate returns falsy for one elements of the array', function() {
        expect(every([true, 1, null, 'yes'], Boolean)).to.be.false
    });
})