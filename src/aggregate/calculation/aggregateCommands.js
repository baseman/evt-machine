var eventPlayer = require('event-player');

var aggregateEvents = require('./aggregateEvents');

var _aggregateType = 'calculation';
var aggregateCommands = {
    addCommand: eventPlayer.AggregateCommand.init({
        'aggregateCommandType': 'add',
        'aggregateType': _aggregateType,
        'validation': function(data){
            if(isNaN(data.addVal)){
                throw new Error('calculator only works with numbers');
            }
        },
        'aggregateEvent': aggregateEvents.addedEvent
    }),
    clearCommand: eventPlayer.AggregateCommand.init({
        'aggregateCommandType': 'clear',
        'aggregateType': _aggregateType,
        'validation': function(data, aggregate){
            if(!aggregate.val){
                throw new Error('calc value is already 0');
            }
        },
        'aggregateEvent': aggregateEvents.clearedEvent
    })
};

module.exports = aggregateCommands;
