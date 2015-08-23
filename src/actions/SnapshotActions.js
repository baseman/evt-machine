'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var SnapshotConstants = require('../stores/SnapshotConstants');

var SnapshotActionCreators = {
    playback: function(events, aggregateId) {
        AppDispatcher.handleViewAction({
            actionType: SnapshotConstants.PLAYBACK,
            events: events,
            aggregateId: aggregateId
        });
    },
    clear: function(aggregateId) {
        AppDispatcher.handleViewAction({
            actionType: SnapshotConstants.CLEAR,
            aggregateId: aggregateId
        });
    }
};

module.exports = SnapshotActionCreators;
