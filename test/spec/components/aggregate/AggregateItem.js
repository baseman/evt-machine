'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AggregateItem from 'components/aggregate/AggregateItem.js';

describe('AggregateItem', () => {
    let AggregateItemComponent;

    beforeEach(() => {
        AggregateItemComponent = createComponent(AggregateItem);
    });

    it('should have its component name as default className', () => {
        expect(AggregateItemComponent._store.props.className).toBe('AggregateItem');
    });
});
