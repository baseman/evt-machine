'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import EventList from 'components/EventList.js';

describe('EventList', () => {
    let EventListComponent;

    beforeEach(() => {
        EventListComponent = createComponent(EventList);
    });

    it('should have its component name as default className', () => {
        expect(EventListComponent._store.props.className).toBe('EventList');
    });
});
