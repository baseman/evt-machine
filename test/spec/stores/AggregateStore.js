'use strict';

describe('AggregateStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/AggregateStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
