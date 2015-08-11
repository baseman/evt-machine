'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var PlayActionConstants = require('../stores/PlayActionConstants');

var PlayAggregateActionCreators = {
    playback: function(events, aggregateId) {
        AppDispatcher.handleViewAction({
            actionType: PlayActionConstants.PLAYBACK,
            events: events,
            aggregateId: aggregateId
        });
    },
    clear: function(aggregateId) {
        AppDispatcher.handleViewAction({
            actionType: PlayActionConstants.CLEAR,
            aggregateId: aggregateId
        });
    }
};

module.exports = PlayAggregateActionCreators;
