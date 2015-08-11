var eventPlayer = require('eventPlayerJs');

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
