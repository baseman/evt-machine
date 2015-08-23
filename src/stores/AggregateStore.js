'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AggregateDataSource = require('./dataSource/AggregateDataSource');

var eventPlayer = require('eventPlayerJs');

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
        eventPlayer.Model.make(item)
    );
}
AggregateStore.dispatchToken = AppDispatcher.register(function(action) {
    if(action.source === 'SERVER_ACTION'){
        setData(action.data);
        AggregateStore.emitChange();
    }

    if(action.source === 'VIEW_ACTION'){
        if(action.data.aggregate){
            appendData(action.data.aggregate);
            AggregateStore.emitChange();
        }
    }
});

module.exports = AggregateStore;
