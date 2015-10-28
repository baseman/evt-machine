'use strict';

var _ = require('lodash');
var Promise = require('es6-promise').Promise;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/AppDispatcher');

var CommitDataSource = require('./dataSource/CommitDataSource');
var AggregateStore = require('./AggregateStore');
var AggregateEventStore = require('./AggregateEventStore');

var eventPlayer = require('event-player');
var player = eventPlayer.Player.make();

function tryApplySnapshot(aggregate, aggregateEvents) {
    if(aggregateEvents.length === 0){
        return false;
    }

    player.play({
        'events': aggregateEvents,
        'for': aggregate
    });

    return true;
}

var change = 'change_snapshots';
var SnapshotStore = assign({}, EventEmitter.prototype, {
    load: function(){
        Promise.all([
            AggregateStore.promiseLoad(),
            AggregateEventStore.promiseLoad()
        ]).then(function(resultItems){
            resultItems.map(function(res){
                AppDispatcher.handleServerData(res);
            });
        }).catch(function(e){
            console.error(e.stack);
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
            var eventItems = AggregateEventStore.getFor(snapshot.aggregateId);
            var isSnapshotApplied = tryApplySnapshot(snapshot, eventItems);
            if(isSnapshotApplied){
                returnItems[i] = snapshot;
            }
        }

        return returnItems;
    },
    commit: function(){
        CommitDataSource.promiseCommit(AggregateStore.get().map(function(agg){
                return { commitAggregate: {
                    aggregate: agg,
                    aggregateEventItems: AggregateEventStore.getFor(agg.aggregateId)
                }};
            }));
    },
    addChangeListener: function(callback) {
        AggregateStore.addChangeListener(callback);
        AggregateEventStore.addChangeListener(callback);
        this.on(change, callback);
    },
    removeChangeListener: function(callback) {
        AggregateStore.removeChangeListener(callback);
        AggregateEventStore.removeChangeListener(callback);
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
