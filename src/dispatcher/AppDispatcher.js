var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {

    handleServerAggregateCreate: function(aggregate) {
        var payload = {
            source: 'SERVER_ACTION',
            aggregate: aggregate
        };
        this.dispatch(payload);
    },

    handleViewAction: function(data) {
        var payload = {
            source: 'VIEW_ACTION',
            data: data
        };
        this.dispatch(payload);
    }

});

module.exports = AppDispatcher;
