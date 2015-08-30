'use strict';

var eventPlayer = require('event-player');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventConstants = require('../stores/EventConstants');

var EventActionCreators = {
    execute: function(command, cmdData, aggregate){
        var cmdInstance = command.make(cmdData);

        var event = eventPlayer.Command.execute({'command': cmdInstance, 'on': aggregate});

        AppDispatcher.handleViewAction({
            actionType: EventConstants.ADD,
            event: event
        });
    },
    clear: function(aggregateId){
        AppDispatcher.handleViewAction({
            actionType: EventConstants.CLEAR,
            aggregateId: aggregateId
        });
    },
    undo: function(aggregateId){
        AppDispatcher.handleViewAction({
            actionType: EventConstants.UNDO,
            aggregateId: aggregateId
        });
    }
};

module.exports = EventActionCreators;
