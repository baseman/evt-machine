'use strict';

var eventPlayer = require('event-player');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventConstants = require('../stores/EventConstants');

var CommandActions = {
    execute: function(aggregateCommand, cmdData, aggregate){
        var cmdInstance = aggregateCommand.make(cmdData);

        var event = eventPlayer.Command.execute({'command': cmdInstance, 'on': aggregate});

        AppDispatcher.handleViewAction({
            actionType: EventConstants.ADD,
            event: event
        });
    }
};

module.exports = CommandActions;
