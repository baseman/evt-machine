'use strict';

var React = require('react/addons');

require('../../styles/aggregate/AggregateItem.css');

var commandComponents = require('../calculation/CommandComponents');

var CommandList = require('../command/CommandList');
var CommandItem = require('../command/CommandItem');

var EventList = require('../event/EventList');

var Aggregate = React.createClass({
    render: function () {

        var aggregate = this.props.item;
        var commandItems = commandComponents.map(function(cmd){
            return (<CommandItem commandComponent={cmd} aggregate={aggregate}></CommandItem>);
        });
        return (
            <div className="Aggregate">
                <CommandList>{commandItems}</CommandList>
                <EventList
                    aggregateId={this.props.item.aggregateId}
                    onPlaybackClick={this.handlePlaybackClick}
                    ></EventList>
                <h3>Aggregate State</h3>
                {JSON.stringify(this.props.item)}
            </div>
        );
    }
});

module.exports = Aggregate;
