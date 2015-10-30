'use strict';

var React = require('react/addons');

require('../../styles/aggregate/AggregateItem.css');

var AggregateCommandComponents = require('../calculation/AggregateCommandComponents');

var AggregateCommandList = require('../aggregateCommand/AggregateCommandList');
var AggregateCommandItem = require('../aggregateCommand/AggregateCommandItem');

var AggregateEventList = require('../aggregateEvent/AggregateEventList');

var Aggregate = React.createClass({
    render: function () {

        var aggregate = this.props.item.aggregate;
        var aggCmdItems = AggregateCommandComponents.map(function(aggCmd){
            return (<AggregateCommandItem aggregateCommandComponent={aggCmd} aggregate={aggregate}></AggregateCommandItem>);
        });
        return (
            <div className="Aggregate">
                <AggregateCommandList>{aggCmdItems}</AggregateCommandList>
                <AggregateEventList
                    aggregateId={aggregate.aggregateId}
                    onPlaybackClick={this.handlePlaybackClick}
                    ></AggregateEventList>
                <h3>Aggregate State</h3>
                {JSON.stringify(aggregate)}
            </div>
        );
    }
});

module.exports = Aggregate;
