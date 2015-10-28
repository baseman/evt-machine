'use strict';

describe('AggregateEventStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/AggregateEventStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
