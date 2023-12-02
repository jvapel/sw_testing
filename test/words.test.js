import { expect } from 'chai';
import { describe, it } from 'mocha';

import words from '../src/words.js';

describe('words', function() {
    const stringToSplit = 'fred, barney, & pebbles'
    const pattern = /[^, ]+/g
    it('should split a string into an array of its words', function() {
        expect(words(stringToSplit)).to.deep.equal(['fred', 'barney', 'pebbles'])
    });
    it('should split a string into an array of its words with specified pattern', function() {
        expect(words(stringToSplit, pattern)).to.deep.equal(['fred', 'barney', '&', 'pebbles'])
    });
    it('should return an array of a single word from an input of one word', function() {
        expect(words('fred')).to.deep.equal(['fred'])
    });
})