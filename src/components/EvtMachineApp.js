'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var CalculationAggregateList = require('./aggregate/AggregateList');

var EvtMachineApp = React.createClass({
    displayName: 'Aggregate Event Machine',
    render: function() {
        return (
            <div className='main'>
                <ReactTransitionGroup transitionName='fade'>
                    <CalculationAggregateList></CalculationAggregateList>
                </ReactTransitionGroup>
            </div>
        );
    }
});
React.render(<EvtMachineApp />, document.getElementById('content')); // jshint ignore:line

module.exports = EvtMachineApp;
