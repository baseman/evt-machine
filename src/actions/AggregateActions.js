'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AggregateConstants = require('../stores/AggregateConstants');

var AggregateActions = {

    addAction: function(aggregate) {
        AppDispatcher.handleViewAction({
            actionType: AggregateConstants.ADD,
            aggregate: aggregate
        });
    },
    clearAction: function(){
        AppDispatcher.handleViewAction({
            actionType: AggregateConstants.CLEAR
        });
    }
};

module.exports = AggregateActions;
