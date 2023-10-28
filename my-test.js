const chai = require('chai');
const expect = chai.expect;

const functions = require('..src/');

describe('SW testing course tool test', function () {
  it('should do something', function () {
    const result = functions.add(38,4);;
    expect(result).to.equal(42);
  });
});