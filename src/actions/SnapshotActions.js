'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var SnapshotActionConstants = require('../stores/SnapshotConstants');

var SnapshotActionCreators = {
    playback: function(events, aggregateId) {
        AppDispatcher.handleViewAction({
            actionType: SnapshotActionConstants.PLAYBACK,
            events: events,
            aggregateId: aggregateId
        });
    },
    clear: function(aggregateId) {
        AppDispatcher.handleViewAction({
            actionType: SnapshotActionConstants.CLEAR,
            aggregateId: aggregateId
        });
    }
};

module.exports = SnapshotActionCreators;
