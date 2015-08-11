'use strict';

require('styles/calculation/AggregateList.css');
var React = require('react/addons');

var eventPlayer = require('eventPlayerJs');

var CalculationAggregate = require('components/calculation/Aggregate');

var AppDispatcher = require('../../dispatcher/AppDispatcher');
var PlayAggregateStore = require('stores/PlayAggregateStore');

function getState() {
    return {
        listData: PlayAggregateStore.get()
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
        PlayAggregateStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        PlayAggregateStore.removeChangeListener(this._onChange);
    },
    handleCreateAggregateClick: function(){

        AppDispatcher.handleViewAction({aggregate: {
            aggregateType: aggregateType,
            val: 0
        }});
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
                    <button onClick={this.handleCreateAggregateClick}>Create Aggregate</button>
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
