'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AggregateList from 'components/calculation/AggregateList.js';

describe('AggregateList', () => {
    let AggregateListComponent;

    beforeEach(() => {
        AggregateListComponent = createComponent(AggregateList);
    });

    it('should have its component name as default className', () => {
        expect(AggregateListComponent._store.props.className).toBe('AggregateList');
    });
});
