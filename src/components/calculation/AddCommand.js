'use strict';

var React = require('react/addons');
var AppDispatcher = require('../../dispatcher/AppDispatcher');

var eventPlayer = require('eventPlayerJs');

require('styles/calculation/AddCommand.css');

var CommandAdd = React.createClass({
    getInitialState: function() {
        return { showMakeCommand: false };
    },
    handleMakeClick: function(){
        this.setState({ showMakeCommand: true });
    },
    handleExecuteClick: function(){

        var command = this.props.command.make({
            addVal: React.findDOMNode(this.refs.addVal).value.trim()
        });
        var event = eventPlayer.Command.execute({'command': command, 'on': this.props.aggregate});

        AppDispatcher.handleViewAction({event: event});

        this.setState({ showMakeCommand: false });
    },
    render: function () {
        var cmdStyle = {
            visibility: this.state.showMakeCommand ? 'visible' : 'hidden'
        };

        return (
          <div className='CommandAdd'>
              <span><button onClick={this.handleMakeClick}>Make</button></span>
                <span style={cmdStyle}>
                    <input type='text' ref="addVal"/>
                    <button onClick={this.handleExecuteClick}>Execute</button>
                </span>
          </div>
        );
    }
});

module.exports = CommandAdd;
