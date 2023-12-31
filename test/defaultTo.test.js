import { expect } from 'chai';
import { describe, it } from 'mocha';

import defaultTo from '../src/defaultTo.js';

describe('defaultTo', function() {
    it('should return a default value if the value is `NaN`', function() {
        expect(defaultTo(NaN, 10)).to.equal(10)
    });
    it('should return a default value if the value is `undefined`', function() {
        expect(defaultTo(undefined, 10)).to.equal(10)
    });
    it('should return a default value if the value is `null`', function() {
        expect(defaultTo(null, 10)).to.equal(10)
    });
    it('should return the value if the value is valid', function() {
        expect(defaultTo(15, 10)).to.equal(15)
    });
	it('should return the value if the value is false, zero, or an empty string', function() {
        expect(defaultTo(false, 10)).to.equal(false)
		expect(defaultTo(0, 10)).to.equal(0)
		expect(defaultTo('', 10)).to.equal('')
    });
})