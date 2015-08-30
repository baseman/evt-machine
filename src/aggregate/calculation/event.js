var eventPlayer = require('event-player');

var events = {
};

events.added = eventPlayer.Event.init({
    'type': 'added',
    'aggregateType': 'calculation',
    'applyChanges': function(options){
        options.model.val = options.model.val + options.event.data.addVal;
    }
});

module.exports = events;
