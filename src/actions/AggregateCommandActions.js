'use strict';

var eventPlayer = require('event-player');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AggregateEventConstants = require('../stores/AggregateEventConstants');

var AggregateCommandActions = {
    execute: function(aggCmd, cmdData, agg){
        var aggCmdInst = aggCmd.make(cmdData);

        var aggEvt = eventPlayer.Command.execute({'command': aggCmdInst, 'on': agg});

        AppDispatcher.handleViewAction({
            actionType: AggregateEventConstants.ADD,
            aggregateEvent: aggEvt
        });
    }
};

module.exports = AggregateCommandActions;
