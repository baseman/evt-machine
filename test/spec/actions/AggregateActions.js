'use strict';

describe('AggregateActionCreators', () => {
  let action;

  beforeEach(() => {
    action = require('actions/AggregateActions.js');
  });

  it('should be defined', () => {
    expect(action).toBeDefined();
  });
});
