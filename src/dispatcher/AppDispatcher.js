var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {

    handleServerData: function(response) {
        var payload = {
            source: 'SERVER_ACTION',
            data: response
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
