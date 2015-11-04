var eventPlayer = require('event-player');

var aggregateEvents = {
    addedEvent: eventPlayer.AggregateEvent.init({
        'aggregateEventType': 'added',
        'aggregateType': 'calculation',
        'applyChanges': function(options){
            options.aggregate.val = options.aggregate.val + options.aggregateEvent.data.addVal;
        }
    }),
    clearedEvent: eventPlayer.AggregateEvent.init({
        'aggregateEventType': 'cleared',
        'aggregateType': 'calculation',
        'applyChanges': function(options){
            options.aggregate.val = 0;
        }
    })
};
module.exports = aggregateEvents;
