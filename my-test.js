import chai from 'chai';
import { describe, it } from 'mocha';

import add from '../test/src/add.js';
import divide from '../test/src/divide.js';



describe('SW testing course tool test', function () {
  it('should be able to add integers', function () {
    const result = add(38,4);;
    chai.expect(result).to.equal(42);
  });
  it('should be able to divide integers', function () {
    const result = divide(40,10);;
    chai.expect(result).to.equal(1);
  });
 
});