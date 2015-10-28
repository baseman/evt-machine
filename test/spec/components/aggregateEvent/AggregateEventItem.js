'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AggregateEventItem from 'components/aggregateEvent/AggregateEventItem.js';

describe('AggregateEventItem', () => {
    let AggregateEventItemComponent;

    beforeEach(() => {
        AggregateEventItemComponent = createComponent(AggregateEventItem);
    });

    it('should have its component name as default className', () => {
        expect(AggregateEventItemComponent._store.props.className).toBe('AggregateEventItem');
    });
});
