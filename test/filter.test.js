import { expect } from 'chai';
import { describe, it } from 'mocha';

import filter from '../src/filter.js';


describe('filter', function () {
	it('should return an array of all elements `predicate` returns truthy for', function () {
		const users = [
			{ 'user': 'barney', 'active': true },
			{ 'user': 'fred',   'active': false }
		];
		
		expect(filter(users, ({active}) => active)).to.deep.equal(
			[{ 'user': 'barney', 'active': true }]
		);
	});
});