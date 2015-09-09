'use strict';

var React = require('react/addons');

var EventItem = require('./EventItem');

var EventStore = require('../../stores/EventStore');

var EventActions = require('../../actions/EventActions');

require('../../styles/event/EventList.css');

function getStateFor(id) {
    return {
        listData: EventStore.getFor(id)
    };
}
var EventList = React.createClass({
    getInitialState: function() {
        return getStateFor(
            this.props.aggregateId
        );
    },
    componentDidMount: function() {
        EventStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        EventStore.removeChangeListener(this._onChange);
    },
    handleUndoClick: function(){
        EventActions.undo(this.props.aggregateId);
    },
    render: function () {

        var evtNodes = EventStore.getFor(this.props.aggregateId).map(function (evt) {
            return (
                <EventItem item={evt}>
                    {JSON.stringify(evt.data)}
                </EventItem>
            );
        });

         return (<div className="EventList">
                <h3>Event State</h3>
                {evtNodes}
                <span>
                    Event Actions:
                    <button onClick={this.handleUndoClick}>Undo</button>
                </span>
            </div>);
    },
    _onChange: function() {
        this.setState(getStateFor(this.props.aggregateId));
    }
});

module.exports = EventList;