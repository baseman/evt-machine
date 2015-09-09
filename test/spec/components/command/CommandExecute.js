'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import CommandExecute from 'components/command/CommandExecute.js';

describe('CommandExecute', () => {
    let CommandExecuteComponent;

    beforeEach(() => {
        CommandExecuteComponent = createComponent(CommandExecute);
    });

    it('should have its component name as default className', () => {
        expect(CommandExecuteComponent._store.props.className).toBe('CommandExecute');
    });
});
