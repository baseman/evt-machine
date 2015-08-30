'use strict';

var _ = require('lodash');
var Promise = require('es6-promise').Promise;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/AppDispatcher');

var AggregateStore = require('./AggregateStore');
var EventStore = require('./EventStore');

var eventPlayer = require('event-player');
var player = eventPlayer.Player.make();

function tryApplySnapshot(aggregate, events) {
    if(events.length === 0){
        return false;
    }

    player.play({
        'events': events,
        'for': aggregate
    });

    return true;
}

var change = 'change_snapshots';
var SnapshotStore = assign({}, EventEmitter.prototype, {
    load: function(){
        Promise.all([
            AggregateStore.promiseLoad(),
            EventStore.promiseLoad()
        ]).then(function(resultItems){
            resultItems.map(function(res){
                AppDispatcher.handleServerData(res);
            });
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

            var snapshot = _.clone(returnItems[i]);
            var eventItems = EventStore.getFor(snapshot.aggregateId);
            var isSnapshotApplied = tryApplySnapshot(snapshot, eventItems);
            if(isSnapshotApplied){
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
