var aggregateCommands = require('../../aggregate/calculation/aggregateCommands');
var addCommand = require('./AddCommand');

var aggregateCommandComponents = [
    {
        inputComponent: addCommand,
        aggregateCommand: aggregateCommands.addCommand
    },
    {
        inputComponent: null,
        aggregateCommand: aggregateCommands.clearCommand
    }
];

module.exports = aggregateCommandComponents;
