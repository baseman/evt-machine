'use strict';

var React = require('react/addons');
var CommandExecute = require('../command/CommandExecute');

require('../../styles/calculation/AddCommand.css');

var AddCommand = React.createClass({
    handleExecuteClick: function(){
        this.props.onClick({ addVal: parseInt(React.findDOMNode(this.refs.addVal).value.trim()) });
    },
    render: function () {
        return (
          <span className='AddCommand'>
              <input type='text' ref="addVal"/>
              <CommandExecute onClick={this.handleExecuteClick}></CommandExecute>
          </span>
        );
    }
});

module.exports = AddCommand;
