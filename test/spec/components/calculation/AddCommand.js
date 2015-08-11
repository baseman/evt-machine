'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import CommandAdd from 'components/calculation/AddCommand.js';

describe('AddCommand', () => {
    let CommandAddComponent;

    beforeEach(() => {
        CommandAddComponent = createComponent(CommandAdd);
    });

    it('should have its component name as default className', () => {
        expect(CommandAddComponent._store.props.className).toBe('AddCommand');
    });
});
