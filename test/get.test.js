import { expect } from 'chai';
import { describe, it } from 'mocha';

import get from '../src/get.js';

describe('get', function() {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    it('should get the value at `path` of `object` when the path is a string', function() {
        expect(get(object, 'a[0].b.c')).to.equal(3)
    });
    it('should get the value at `path` of `object` when the path is an array', function() {
        expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3)
    });
    it('should return the default value if the resolved value is undefined', function() {
        expect(get(object, 'a.b.c', 'default')).to.equal('default')
    });
})
