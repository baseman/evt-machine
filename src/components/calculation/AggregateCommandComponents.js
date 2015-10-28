var aggregateCommands = require('../../aggregate/calculation/aggregateCommands');
var addCommand = require('./AddCommand');

var aggregateCommandComponents = [
    {
        inputComponent: addCommand,
        aggregateCommand: aggregateCommands.add
    },
    {
        inputComponent: null,
        aggregateCommand: aggregateCommands.clear
    }
];

module.exports = aggregateCommandComponents;
