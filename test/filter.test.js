import { expect } from 'chai';
import { describe, it } from 'mocha';

import filter from '../src/filter.js';


describe('filter', function () {
	it('should return an array of all elements `predicate` returns truthy for', function () {
		const users = [
			{ 'user': 'barney', 'active': true },
			{ 'user': 'fred',   'active': false },
			{ 'user': 'adam',   'active': null },
			{ 'user': 'carl',   'active': undefined },
			{ 'user': 'dave',   'active': NaN },
			{ 'user': 'emil',   'active': 0 },
			{ 'user': 'gary',   'active': '' }
		];
		
		expect(filter(users, ({active}) => active)).to.deep.equal(
			[{ 'user': 'barney', 'active': true }]
		);
	});
	it('should return an empty array if `predicate` does not return truthy for anything', function () {
		const user = [
			{ 'user': 'barney', 'active': false }
		];
		expect(filter(user, ({active}) => active)).to.deep.equal([]);
	});
	it('should return an empty array if the array is null', function () {
		expect(filter(null, ({active}) => active)).to.deep.equal([]);
	});
})