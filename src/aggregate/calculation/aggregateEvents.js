var eventPlayer = require('event-player');

var aggregateEvents = {
    added: eventPlayer.Event.init({
        'type': 'added',
        'aggregateType': 'calculation',
        'applyChanges': function(options){
            options.aggregate.val = options.aggregate.val + options.event.data.addVal;
        }
    }),
    cleared: eventPlayer.Event.init({
        'type': 'cleared',
        'aggregateType': 'calculation',
        'applyChanges': function(options){
            options.aggregate.val = 0;
        }
    })
};
module.exports = aggregateEvents;
