'use strict';

var React = require('react/addons');

require('../../styles/command/CommandItem.css');

var CommandActions = require('../../actions/CommandActions');
var Execute = require('../command/CommandExecute');

var CommandItem = React.createClass({
    getInitialState: function() {
        return { showMakeCommand: false };
    },
    handleMakeClick: function(){
        this.setState({ showMakeCommand: true });
    },
    handleExecuteClick: function(commandData){
        CommandActions.execute(
            this.props.commandComponent.aggregateCommand,
            commandData,
            this.props.aggregate);
    },
    render: function () {
        var cmdStyle = {
            visibility: this.state.showMakeCommand ? 'visible' : 'hidden'
        };

        var cmd = this.props.commandComponent;

        var handleClick = this.handleExecuteClick;
        var getExecuteNode = function(InputComponent){
            return (<InputComponent onClick={handleClick}></InputComponent>);
        };

        var inputComponentNode = cmd.inputComponent
            ? getExecuteNode(cmd.inputComponent)
            : getExecuteNode(Execute);

        return (
            <div className='CommandItem'>
                <span><button onClick={this.handleMakeClick}>{cmd.aggregateCommand.commandType}</button></span>
                <span style={cmdStyle}>
                    {inputComponentNode}
                </span>
            </div>
        );
    }
});

module.exports = CommandItem;
