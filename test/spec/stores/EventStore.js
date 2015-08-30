'use strict';

describe('EventStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/EventStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
