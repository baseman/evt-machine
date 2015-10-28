'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AggregateCommandItem from 'components/aggregateCommand/AggregateCommandItem.js';

describe('AggregateCommandItem', () => {
    let AggregateCommandItemComponent;

    beforeEach(() => {
        AggregateCommandItemComponent = createComponent(AggregateCommandItem);
    });

    it('should have its component name as default className', () => {
        expect(AggregateCommandItemComponent._store.props.className).toBe('AggregateCommandItem');
    });
});
