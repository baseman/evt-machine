'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var eventPlayer = require('eventPlayerJs');

var _aggregates = [];

var change = 'change_aggregates';
var AggregateStore = assign({}, EventEmitter.prototype, {
    get: function() {
        return _aggregates;
    },
    getFor: function(aggregateId){
        for(var i = 0; i < _aggregates.length; i++){
            var aggregate = _aggregates[i];
            if(aggregate.aggregateId === aggregateId){
                return aggregate;
            }
        }
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

AggregateStore.dispatchToken = AppDispatcher.register(function(action) {
    if(action.source === 'VIEW_ACTION'){
        if(action.data.aggregate){
            _aggregates.push(
                eventPlayer.Model.make(action.data.aggregate)
            );
            AggregateStore.emitChange();
        }
    }
});

module.exports = AggregateStore;
