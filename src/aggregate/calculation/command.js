var eventPlayer = require('event-player');

var event = require('./event');

var _aggregateType = 'calculation';
var aggregateCmmands = {
    add: eventPlayer.Command.init({
        'commandType': 'add',
        'aggregateType': _aggregateType,
        'validation': function(data){
            if(isNaN(data.addVal)){
                throw new Error('calculator only works with numbers');
            }
        },
        'event': event.added
    }),
    clear: eventPlayer.Command.init({
        'commandType': 'clear',
        'aggregateType': _aggregateType,
        'validation': function(data, aggregate){
            if(!aggregate.val){
                throw new Error('calc value is already 0');
            }
        },
        'event': event.cleared
    })
};

module.exports = aggregateCmmands;
