'use strict';

var React = require('react/addons');

require('../../styles/command/CommandExecute.css');

var CommandExecute = React.createClass({
    handleExecuteClick: function(){
        this.props.onClick();
    },
    render: function () {
        return (
            <span className='CommandExecute'>
                <button onClick={this.handleExecuteClick}>Execute</button>
            </span>
        );
    }
});

module.exports = CommandExecute;
