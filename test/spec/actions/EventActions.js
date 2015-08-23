'use strict';

describe('EventActionCreators', () => {
  let action;

  beforeEach(() => {
    action = require('actions/EventActions.js');
  });

  it('should be defined', () => {
    expect(action).toBeDefined();
  });
});
