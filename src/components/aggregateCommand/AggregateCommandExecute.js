'use strict';

var React = require('react/addons');

require('../../styles/aggregateCommand/AggregateCommandExecute.css');

var AggregateCommandExecute = React.createClass({
    handleExecuteClick: function(){
        this.props.onClick();
    },
    render: function () {
        return (
            <span className='AggregateCommandExecute'>
                <button onClick={this.handleExecuteClick}>Execute</button>
            </span>
        );
    }
});

module.exports = AggregateCommandExecute;
