'use strict';

var React = require('react/addons');
var AggregateCommandExecute = require('../aggregateCommand/AggregateCommandExecute');

require('../../styles/calculation/AddCommand.css');

var AddCommand = React.createClass({
    handleExecuteClick: function(){
        this.props.onClick({ addVal: parseInt(React.findDOMNode(this.refs.addVal).value.trim()) });
    },
    render: function () {
        return (
          <span className='AddCommand'>
              <input type='text' ref="addVal"/>
              <AggregateCommandExecute onClick={this.handleExecuteClick}></AggregateCommandExecute>
          </span>
        );
    }
});

module.exports = AddCommand;
