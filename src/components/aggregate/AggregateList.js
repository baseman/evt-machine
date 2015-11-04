'use strict';

require('../../styles/aggregate/AggregateList.css');
var React = require('react/addons');

var AggregateItem = require('./AggregateItem');

var SnapshotStore = require('../../stores/SnapshotStore');
var AggregateActions = require('../../actions/AggregateActions');

var eventPlayer = require('event-player');

function getState() {
    return {
        listData: SnapshotStore.get()
    };
}

var aggregateType = 'calculation';
var _calculationId = 0;
eventPlayer.Aggregate.reg([
    { aggregateType: aggregateType, getIdForAggregateType: function(){return ++_calculationId; }}
]);

var AggregateList = React.createClass({
    componentDidMount: function() {
        SnapshotStore.addChangeListener(this._onChange);
    },
    componentWillMount: function() {
        SnapshotStore.load();
    },
    componentWillUnmount: function() {
        SnapshotStore.removeChangeListener(this._onChange);
    },
    handleCreateAggregateClick: function(){
        AggregateActions.addAction({
            aggregateType: aggregateType,
            val: 0,
            version: 1
        });
    },
    handleClearAggregateClick: function(){
        AggregateActions.clearAction();
    },
    handleCommitAggregateClick: function(){
        SnapshotStore.commit();
    },
    render: function () {

        var evtNodes = [];

        if(this.state && this.state.listData) {
            evtNodes = this.state.listData.map(function (aggregate) {
                return (<AggregateItem item={aggregate}></AggregateItem>);
            });
        }

        return (
            <div className="AggregateList">
                <h3>Aggregate Items</h3>
                {evtNodes}
                <span>
                    Aggregate Actions:
                    <button onClick={this.handleCreateAggregateClick}>Create</button>
                    <button onClick={this.handleClearAggregateClick}>Clear</button>
                    <button onClick={this.handleCommitAggregateClick}>Commit</button>
                </span>
            </div>
        );
    },
    _onChange: function() {
        this.setState(
            getState()
        );
    }
});

module.exports = AggregateList;
