'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import EventItem from 'components/event/EventItem.js';

describe('EventItem', () => {
    let EventItemComponent;

    beforeEach(() => {
        EventItemComponent = createComponent(EventItem);
    });

    it('should have its component name as default className', () => {
        expect(EventItemComponent._store.props.className).toBe('EventItem');
    });
});
