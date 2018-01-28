'use strict';

const Stack = require('../lib/stack');
require('jest');

describe('test for the stack module', function () {
  beforeEach(() => this.stack = new Stack());
  it('should have a default val of null assigned to the top property', () => {
    expect(this.stack.top).toBeNull();
  });
  it('should have a maxSize property with a default val of 666', () => {
    expect(this.stack.maxSize).toEqual(666);
  });
});
