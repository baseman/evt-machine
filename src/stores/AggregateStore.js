'use strict';
var AggregateConstants = require('./AggregateConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var AggregateDataSource = require('./dataSource/AggregateDataSource');

var eventPlayer = require('event-player');

var _data = [];
var change = 'change_aggregates';
var AggregateStore = assign({}, EventEmitter.prototype, {
    promiseLoad: function(){
        return AggregateDataSource.promiseLoad();
    },
    get: function() {
        return _data;
    },
    getFor: function(aggregateId){
        for(var i = 0; i < _data.length; i++){
            var aggregate = _data[i];
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

function setData(items) {
    _data = items;
}
function appendData(item) {
    _data.push(
        eventPlayer.Aggregate.make(item)
    );
}
function clearData() {
    _data = [];
}
AggregateStore.dispatchToken = AppDispatcher.register(function(action) {
    if(action.source === 'SERVER_ACTION'){
        if(action.data.aggregateItems){
            setData(action.data.aggregateItems);
            AggregateStore.emitChange();
        }
    }

    if(action.source === 'VIEW_ACTION'){
        if(action.data.actionType === AggregateConstants.ADD){
            appendData(action.data.aggregate);
            AggregateStore.emitChange();
        }

        if(action.data.actionType === AggregateConstants.CLEAR){
            clearData();
            AggregateStore.emitChange();
        }
    }
});

module.exports = AggregateStore;
