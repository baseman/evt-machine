'use strict';

var React = require('react/addons');

require('../../styles/aggregateCommand/AggregateCommandItem.css');

var AggregateCommandActions = require('../../actions/AggregateCommandActions');
var Execute = require('../aggregateCommand/AggregateCommandExecute');

var AggregateCommandItem = React.createClass({
    getInitialState: function() {
        return { showMakeCommand: false };
    },
    handleMakeClick: function(){
        this.setState({ showMakeCommand: true });
    },
    handleExecuteClick: function(aggCmdData){
        AggregateCommandActions.execute(
            this.props.aggregateCommandComponent.aggregateCommand,
            aggCmdData,
            this.props.aggregate);
    },
    render: function () {
        var aggCmdStyle = {
            visibility: this.state.showMakeCommand ? 'visible' : 'hidden'
        };

        var aggCmd = this.props.aggregateCommandComponent;

        var handleClick = this.handleExecuteClick;
        var getExecuteNode = function(AggregateCommandInputComponent){
            return (<AggregateCommandInputComponent onClick={handleClick}></AggregateCommandInputComponent>);
        };

        var aggCmdInputComponentNode = aggCmd.inputComponent
            ? getExecuteNode(aggCmd.inputComponent)
            : getExecuteNode(Execute);

        return (
            <div className='AggregateCommandItem'>
                <span><button onClick={this.handleMakeClick}>{aggCmd.aggregateCommand.commandType}</button></span>
                <span style={aggCmdStyle}>
                    {aggCmdInputComponentNode}
                </span>
            </div>
        );
    }
});

module.exports = AggregateCommandItem;
