import chai from 'chai';
import { describe, it } from 'mocha';

import functions from '../src/';

describe('SW testing course tool test', function () {
  it('should do something', function () {
    const result = functions.add(38,4);;
    chai.expect(result).to.equal(42);
  });
});