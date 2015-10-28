'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AggregateEventConstants = require('../stores/AggregateEventConstants');

var AggregateEventActions = {
    undo: function(aggregateId){
        AppDispatcher.handleViewAction({
            actionType: AggregateEventConstants.UNDO,
            aggregateId: aggregateId
        });
    }
};

module.exports = AggregateEventActions;
