import { expect } from 'chai';
import { describe, it } from 'mocha';

import upperFirst from '../src/upperFirst.js';


describe('upperFirst', function () {
	it('should convert only the first character to upper case', function () {
		expect(upperFirst('fred')).to.be('Fred');
		expect(upperFirst('FRED')).to.be('FRED');
		expect(upperFirst('Fred')).to.be('Fred');
	});
});