'use strict';

var EventConstants = require('./AggregateEventConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var AggregateEventDataSource = require('./dataSource/AggregateEventDataSource');

var calcEvent = require('../aggregate/calculation/aggregateEvents');

var _data = [];

var change = 'change_events';
var AggregateEventStore = assign({}, EventEmitter.prototype, {
    promiseLoad: function(){
        return AggregateEventDataSource.promiseLoad();
    },
    getAggregateEventsFor: function(aggregateId) {
        var returnVal = [];
        for(var i = 0; i < _data.length; i++){
            var evt = _data[i];
            if(evt.aggregateId === aggregateId){
                returnVal.push({aggregateEvent: evt});
            }
        }
        return returnVal;
    },
    addChangeListener: function(callback) {
        this.on(change, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(change, callback);
    },
    emitChange: function() {
        this.emit(change);
    }
});

module.exports = AggregateEventStore;

function appendAggregateEvent(aggEvent) {
    _data.push(aggEvent);
}
function setEventItems(data) {
    _data = [];

    for(var i = 0; i < data.length; i++){
        var evt = data[i];
        _data.push(
            calcEvent[evt.type].make(
                evt.aggregateId,
                evt.version,
                evt.data)
        );
    }
}
function removeLastAggregateEventForAggregateId(aggregateId) {
    for(var i = _data.length - 1; i >= 0; i--){
        if(_data[i].aggregateId === aggregateId){
            _data.splice(i, 1);
            return;
        }
    }
}
AggregateEventStore.dispatchToken = AppDispatcher.register(function(action) {
    if(action.source === 'SERVER_ACTION'){
        if(action.data.eventItems){
            setEventItems(action.data.eventItems);
            AggregateEventStore.emitChange();
        }
    }

    if(action.source === 'VIEW_ACTION'){
        if(action.data.actionType === EventConstants.ADD){
            appendAggregateEvent(action.data.aggregateEvent);
            AggregateEventStore.emitChange();
        }

        if(action.data.actionType === EventConstants.UNDO){
            removeLastAggregateEventForAggregateId(action.data.aggregateId);
            AggregateEventStore.emitChange();
        }
    }
});
