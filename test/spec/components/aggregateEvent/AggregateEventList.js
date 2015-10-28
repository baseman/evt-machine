'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AggregateEventList from 'components/aggregateEvent/AggregateEventList.js';

describe('AggregateEventList', () => {
    let EventListComponent;

    beforeEach(() => {
        EventListComponent = createComponent(AggregateEventList);
    });

    it('should have its component name as default className', () => {
        expect(EventListComponent._store.props.className).toBe('AggregateEventList');
    });
});
