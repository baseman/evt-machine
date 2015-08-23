'use strict';

require('styles/calculation/AggregateList.css');
var React = require('react/addons');

var eventPlayer = require('eventPlayerJs');

var CalculationAggregate = require('components/calculation/Aggregate');

var SnapshotStore = require('../../stores/SnapshotStore');

var aggregateActions = require('../../actions/AggregateActions');

function getState() {
    return {
        listData: SnapshotStore.get()
    };
}

var aggregateType = 'calculation';
var _calculationId = 0;
eventPlayer.Model.reg([
    { aggregateType: aggregateType, getIdForAggregateType: function(){return ++_calculationId; }}
]);

var AggregateList = React.createClass({
    getInitialState: function() {
        return getState();
    },
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
        aggregateActions.add({
            aggregateType: aggregateType,
            val: 0
        });
    },
    handleClearAggregateClick: function(){
        aggregateActions.clear();
    },
    render: function () {

        var evtNodes = this.state.listData.map(function (aggregate) {
            return (<CalculationAggregate item={aggregate}></CalculationAggregate>);
        });

        return (
            <div className="AggregateList">
                <h3>Aggregate Items</h3>
                {evtNodes}
                <span>
                    Aggregate Actions:
                    <button onClick={this.handleCreateAggregateClick}>Create</button>
                    <button onClick={this.handleClearAggregateClick}>Clear</button>
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
