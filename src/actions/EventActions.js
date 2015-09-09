'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventConstants = require('../stores/EventConstants');

var EventActions = {
    undo: function(aggregateId){
        AppDispatcher.handleViewAction({
            actionType: EventConstants.UNDO,
            aggregateId: aggregateId
        });
    }
};

module.exports = EventActions;
