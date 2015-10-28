'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AggregateCommandExecute from 'components/aggregateCommand/AggregateCommandExecute.js';

describe('AggregateCommandExecute', () => {
    let AggregateCommandExecuteComponent;

    beforeEach(() => {
        AggregateCommandExecuteComponent = createComponent(AggregateCommandExecute);
    });

    it('should have its component name as default className', () => {
        expect(AggregateCommandExecuteComponent._store.props.className).toBe('AggregateCommandExecute');
    });
});
