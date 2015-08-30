var eventPlayer = require('event-player');

var event = require('./event');

var commands = {};

commands.add = eventPlayer.Command.init({
    'aggregateType': 'calculation',
    'validation': function(data){
        if(isNaN(data.addVal)){
            throw new Error('calculator only works with numbers');
        }
    },
    'event': event.added
});

module.exports = commands;
