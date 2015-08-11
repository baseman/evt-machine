'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var _events = [];

var change = 'change_events';
var EventStore = assign({}, EventEmitter.prototype, {
    getFor: function(aggregateId) {
        var returnVal = [];
        for(var i = 0; i < _events.length; i++){
            var evt = _events[i];
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

EventStore.dispatchToken = AppDispatcher.register(function(action) {
    if(action.source === 'VIEW_ACTION'){
        if(action.data.event){
            _events.push(action.data.event);
            EventStore.emitChange();
        }
    }
});
