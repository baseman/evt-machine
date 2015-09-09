'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AggregateConstants = require('../stores/AggregateConstants');

var AggregateActions = {

    add: function(aggregate){
        AppDispatcher.handleViewAction({
            actionType: AggregateConstants.ADD,
            aggregate: aggregate
        });
    },
    clear: function(){
        AppDispatcher.handleViewAction({
            actionType: AggregateConstants.CLEAR
        });
    }
};

module.exports = AggregateActions;
