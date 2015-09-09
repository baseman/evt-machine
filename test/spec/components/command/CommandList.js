'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import CommandList from 'components/command/CommandList.js';

describe('CommandList', () => {
    let CommandListComponent;

    beforeEach(() => {
        CommandListComponent = createComponent(CommandList);
    });

    it('should have its component name as default className', () => {
        expect(CommandListComponent._store.props.className).toBe('CommandList');
    });
});
