'use strict';

var React = require('react/addons');

var EventActions = require('../../actions/EventActions');

require('styles/calculation/AddCommand.css');

var CommandAdd = React.createClass({
    getInitialState: function() {
        return { showMakeCommand: false };
    },
    handleMakeClick: function(){
        this.setState({ showMakeCommand: true });
    },
    handleExecuteClick: function(){

        EventActions.execute(
            this.props.command,
            { addVal: React.findDOMNode(this.refs.addVal).value.trim() },
            this.props.aggregate);

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
