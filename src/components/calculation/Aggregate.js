'use strict';

var React = require('react/addons');

require('styles/calculation/Aggregate.css');

var calculationCmds = require('../../aggregate/calculation/command');

var CommandList = require('components/CommandList');
var AddCalculationCommand = require('components/calculation/AddCommand');
var EventList = require('components/EventList');

var Aggregate = React.createClass({
    render: function () {
        return (
            <div className="Aggregate">
                <CommandList>
                    {[
                        (<AddCalculationCommand
                            command={calculationCmds.add}
                            aggregate={this.props.item}></AddCalculationCommand>)
                    ]}
                </CommandList>
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
