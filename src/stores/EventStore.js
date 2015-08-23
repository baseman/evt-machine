'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var EventConstants = require('./EventConstants');

var _data = [];

var change = 'change_events';
var EventStore = assign({}, EventEmitter.prototype, {
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
function removeData(aggregateId) {
    for(var i = 0; i < _data.length; i++){
        if(_data[i].aggregateId === aggregateId){
            _data.splice(i, 1);
        }
    }
}
EventStore.dispatchToken = AppDispatcher.register(function(action) {
    if(action.source === 'VIEW_ACTION'){
        if(action.data.actionType === EventConstants.ADD){
            appendData(action.data.event);
            EventStore.emitChange();
        }

        if(action.data.actionType === EventConstants.CLEAR){
            removeData(action.data.aggregateId);
            EventStore.emitChange();
        }
    }
});
