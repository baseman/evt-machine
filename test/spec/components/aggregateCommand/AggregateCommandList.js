'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AggregateCommandList from 'components/aggregateCommand/AggregateCommandList.js';

describe('AggregateCommandList', () => {
    let AggregateCommandListComponent;

    beforeEach(() => {
        AggregateCommandListComponent = createComponent(AggregateCommandList);
    });

    it('should have its component name as default className', () => {
        expect(AggregateCommandListComponent._store.props.className).toBe('AggregateCommandList');
    });
});
