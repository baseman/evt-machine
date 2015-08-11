'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import CommandItem from 'components/CommandItem.js';

describe('CommandItem', () => {
    let CommandItemComponent;

    beforeEach(() => {
        CommandItemComponent = createComponent(CommandItem);
    });

    it('should have its component name as default className', () => {
        expect(CommandItemComponent._store.props.className).toBe('CommandItem');
    });
});
