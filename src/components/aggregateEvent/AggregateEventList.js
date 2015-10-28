'use strict';

var React = require('react/addons');

var AggregateEventItem = require('./AggregateEventItem');

var AggregateEventStore = require('../../stores/AggregateEventStore');

var AggregateEventActions = require('../../actions/AggregateEventActions');

require('../../styles/aggregateEvent/AggregateEventList.css');

function getStateFor(id) {
    return {
        listData: AggregateEventStore.getFor(id)
    };
}
var AggregateEventList = React.createClass({
    getInitialState: function() {
        return getStateFor(
            this.props.aggregateId
        );
    },
    componentDidMount: function() {
        AggregateEventStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AggregateEventStore.removeChangeListener(this._onChange);
    },
    handleUndoClick: function(){
        AggregateEventActions.undo(this.props.aggregateId);
    },
    render: function () {

        var evtNodes = AggregateEventStore.getFor(this.props.aggregateId).map(function (aggEvt) {
            return (
                <AggregateEventItem item={aggEvt}>
                    {JSON.stringify(aggEvt.data)}
                </AggregateEventItem>
            );
        });

         return (<div className="AggregateEventList">
                <h3>Aggregate Event State</h3>
                {evtNodes}
                <span>
                    Aggregate Event Actions:
                    <button onClick={this.handleUndoClick}>Undo</button>
                </span>
            </div>);
    },
    _onChange: function() {
        this.setState(getStateFor(this.props.aggregateId));
    }
});

module.exports = AggregateEventList;
