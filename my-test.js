import chai from 'chai';
import { describe, it } from 'mocha';

import add from '../test/src/add.js';

describe('SW testing course tool test', function () {
  it('should do something', function () {
    const result = add(38,4);;
    chai.expect(result).to.equal(42);
  });
});