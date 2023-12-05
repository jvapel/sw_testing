import { expect } from 'chai';
import { describe, it } from 'mocha';

import upperFirst from '../src/upperFirst.js';


describe('upperFirst', function () {
	it('should convert only the first character to upper case', function () {
		expect(upperFirst('fred')).to.equal('Fred');
		expect(upperFirst('FRED')).to.equal('FRED');
		expect(upperFirst('Fred')).to.equal('Fred');
	});
	it('should accept an empty string', function () {
		expect(upperFirst('')).to.equal('');
	});
});