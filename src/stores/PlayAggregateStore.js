'use strict';

var _ = require('lodash');

var PlayActionConstants = require('../stores/PlayActionConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var AggregateStore = require('./AggregateStore');

var eventPlayer = require('eventPlayerJs');
var player = eventPlayer.Player.make();

var snapshotItems = [];

function getSnapshotFor(aggregateId) {
    for(var i = 0; i < snapshotItems.length; i++){
        var snapshot = snapshotItems[i];
        if(snapshot.aggregateId === aggregateId){
            return snapshot;
        }
    }
}

var change = 'change_playAggregates';
var PlayAggregateStore = assign({}, EventEmitter.prototype, {
    get: function(){

        var returnItems = AggregateStore.get().slice();

        for(var i = 0; i < returnItems.length; i++){

            var aggregate = returnItems[i];
            var snapshot = getSnapshotFor(aggregate.aggregateId);
            if(snapshot){
                returnItems[i] = snapshot;
            }
        }

        return returnItems;
    },
    isSnapshot: function(aggregateId) {
        for(var i = 0; i < snapshotItems.length; i++){
            if(snapshotItems[i].aggregateId === aggregateId){
                return true;
            }
        }

        return false;
    },
    addChangeListener: function(callback) {
        AggregateStore.addChangeListener(callback);
        this.on(change, callback);
    },
    removeChangeListener: function(callback) {
        AggregateStore.removeChangeListener(callback);
        this.removeListener(change, callback);
    },
    emitChange: function() {
        this.emit(change);
    }
});

function removeSnapshot(aggregateId) {
    for(var i = 0; i < snapshotItems.length; i++){
        var snapshot = snapshotItems[i];
        if(snapshot.aggregateId === aggregateId){
            snapshotItems.splice(i, 1);
        }
    }
}

function addSnapshot(aggregateId, events) {
    var aggregate = _.clone(AggregateStore.getFor(aggregateId));
    player.play({
        'events': events,
        'for': aggregate
    });

    snapshotItems.push(aggregate);
}

PlayAggregateStore.dispatchToken = AppDispatcher.register(function(action) {
    if(action.source === 'VIEW_ACTION'){

        switch(action.data.actionType){
            case PlayActionConstants.PLAYBACK:
                addSnapshot(action.data.aggregateId, action.data.events);
                PlayAggregateStore.emitChange();
                break;
            case PlayActionConstants.CLEAR:
                removeSnapshot(action.data.aggregateId);
                PlayAggregateStore.emitChange();
                break;
        }
    }
});

module.exports = PlayAggregateStore;
