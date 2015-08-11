'use strict';

describe('PlayAggregateStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/PlayAggregateStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
