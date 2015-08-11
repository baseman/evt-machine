'use strict';

describe('EvtMachineApp', () => {
  let React = require('react/addons');
  let EvtMachineApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    EvtMachineApp = require('components/EvtMachineApp.js');
    component = React.createElement(EvtMachineApp);
  });

  it('should create a new instance of EvtMachineApp', () => {
    expect(component).toBeDefined();
  });
});
