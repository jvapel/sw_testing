import { expect } from 'chai';
import { describe, it } from 'mocha';

import memoize from '../src/memoize.js';

describe('memoize', function() {
    it('should memoize the first result', function() {
		const object = { 'a': 1, 'b': 2 }
		const values = memoize(Object.values)
	
        expect(values(object)).to.deep.equal([1,2])
		object.a = 2
		expect(values(object)).to.deep.equal([1,2])
    });
	it('should allow modifying cache', function() {
		const object = { 'a': 1, 'b': 2 }
		const values = memoize(Object.values)
		
        expect(values(object)).to.deep.equal([1,2])
		values.cache.set(object, ['a', 'b'])
        expect(values(object)).to.deep.equal(['a', 'b'])
    });
	it('should use the first argument as the cache key', function() {
		const memoized = memoize((a,b) => a+b)
		
        expect(memoized(1,2)).to.equal(3)
		expect(memoized(1,3)).to.equal(3)
		expect(memoized(2,3)).to.equal(5)
    });
	it('should support a resolver', function() {
        const func = (a,b) => a+b
		const memoized = memoize(func, func)
		
		expect(memoized(1,2)).to.equal(3)
		expect(memoized(1,3)).to.equal(4)
		expect(memoized(2,3)).to.equal(5)
    });
	// TODO: this binding
	// TODO: custom cache
})