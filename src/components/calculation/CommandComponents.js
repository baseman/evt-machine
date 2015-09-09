var aggregateCommands = require('../../aggregate/calculation/command');
var addCommand = require('./AddCommand');

var commandComponents = [
    {
        inputComponent: addCommand,
        aggregateCommand: aggregateCommands.add
    },
    {
        inputComponent: null,
        aggregateCommand: aggregateCommands.clear
    }
];

module.exports = commandComponents;
