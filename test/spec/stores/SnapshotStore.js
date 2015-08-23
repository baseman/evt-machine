'use strict';

describe('SnapshotStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/SnapshotStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
