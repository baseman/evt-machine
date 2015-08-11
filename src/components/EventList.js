'use strict';

var React = require('react/addons');

var EventItem = require('components/EventItem');

var EventStore = require('stores/EventStore');
var PlayAggregateStore = require('stores/PlayAggregateStore');

var PlayAggregateActions = require('actions/PlayAggregateActions');

require('styles/EventList.css');

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
    handlePlayBackClick: function(){
        PlayAggregateActions.playback(this.state.listData, this.props.aggregateId);
    },
    handleClearEventsClick: function(){
        PlayAggregateActions.clear(this.props.aggregateId);
    },
    render: function () {

        var evtNodes = EventStore.getFor(this.props.aggregateId).map(function (evt) {
            return (
                <EventItem item={evt}>
                    {JSON.stringify(evt.data)}
                </EventItem>
            );
        });

        var isEvtNodes = evtNodes.length > 0;

        var isSnapshot = false;
        if(isEvtNodes){
            isSnapshot = PlayAggregateStore.isSnapshot(this.props.aggregateId);
        }

        var isPlayback = isEvtNodes && !isSnapshot;

        return (<div className="EventList">
                <h3>Event State</h3>
                {evtNodes}
                <span>
                    <button disabled={isPlayback ? '' : 'disabled'} onClick={this.handlePlayBackClick}>Play Back</button>
                    <button disabled={isSnapshot ? '' : 'disabled'} onClick={this.handleClearEventsClick}>Clear</button>
                </span>
            </div>);
    },
    _onChange: function() {
        this.setState(getStateFor(this.props.aggregateId));
    }
});

module.exports = EventList;
