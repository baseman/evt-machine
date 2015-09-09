'use strict';

var EventConstants = require('./EventConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var EventDataSource = require('./dataSource/EventDataSource');

var calcEvent = require('../aggregate/calculation/event');

var _data = [];

var change = 'change_events';
var EventStore = assign({}, EventEmitter.prototype, {
    promiseLoad: function(){
        return EventDataSource.promiseLoad();
    },
    getFor: function(aggregateId) {
        var returnVal = [];
        for(var i = 0; i < _data.length; i++){
            var evt = _data[i];
            if(evt.aggregateId === aggregateId){
                returnVal.push(evt);
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

module.exports = EventStore;

function appendData(event) {
    _data.push(event);
}
function setEventData(data) {
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
function removeLastAggregateData(aggregateId) {
    for(var i = _data.length - 1; i >= 0; i--){
        if(_data[i].aggregateId === aggregateId){
            _data.splice(i, 1);
            return;
        }
    }
}
EventStore.dispatchToken = AppDispatcher.register(function(action) {
    if(action.source === 'SERVER_ACTION'){
        if(action.data.eventItems){
            setEventData(action.data.eventItems);
            EventStore.emitChange();
        }
    }

    if(action.source === 'VIEW_ACTION'){
        if(action.data.actionType === EventConstants.ADD){
            appendData(action.data.event);
            EventStore.emitChange();
        }

        if(action.data.actionType === EventConstants.UNDO){
            removeLastAggregateData(action.data.aggregateId);
            EventStore.emitChange();
        }
    }
});
