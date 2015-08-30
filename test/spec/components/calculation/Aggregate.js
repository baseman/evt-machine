'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Aggregate from 'components/calculation/Aggregate.js';

describe('Aggregate', () => {
    let AggregateComponent;

    beforeEach(() => {
        AggregateComponent = createComponent(Aggregate);
    });

    it('should have its component name as default className', () => {
        expect(AggregateComponent._store.props.className).toBe('Aggregate');
    });
});
