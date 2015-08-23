'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var AggregateStore = require('./AggregateStore');
var EventStore = require('./EventStore');

var eventPlayer = require('eventPlayerJs');
var player = eventPlayer.Player.make();

function applySnapshot(aggregate, events) {
    player.play({
        'events': events,
        'for': aggregate
    });
}

var change = 'change_snapshots';
var SnapshotStore = assign({}, EventEmitter.prototype, {
    load: function(){
        return AggregateStore.promiseLoad()
            .then(function(res){
                AppDispatcher.handleServerData(res);
            })
            .catch(function(e){
                console.error(e);
            });
    },
    get: function(){

        var aggregateItems = AggregateStore.get();

        if (aggregateItems.length === 0){
            return [];
        }

        var returnItems = aggregateItems.slice();

        for(var i = 0; i < returnItems.length; i++){

            var aggregate = returnItems[i];
            var eventItems = EventStore.getFor(aggregate.aggregateId);
            var snapshot = applySnapshot(aggregate, eventItems);
            if(snapshot){
                returnItems[i] = snapshot;
            }
        }

        return returnItems;
    },
    addChangeListener: function(callback) {
        AggregateStore.addChangeListener(callback);
        EventStore.addChangeListener(callback);
        this.on(change, callback);
    },
    removeChangeListener: function(callback) {
        AggregateStore.removeChangeListener(callback);
        EventStore.removeChangeListener(callback);
        this.removeListener(change, callback);
    },
    emitChange: function() {
        this.emit(change);
    }
});

//SnapshotStore.dispatchToken = AppDispatcher.register(function(action) {
    //if(action.source === 'VIEW_ACTION'){
    //}
//});

module.exports = SnapshotStore;
