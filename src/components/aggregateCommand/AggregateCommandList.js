'use strict';

var React = require('react/addons');

require('../../styles/aggregateCommand/AggregateCommandList.css');

var AggregateCommandList = React.createClass({

  render: function () {
      return (
          <div className="AggregateCommandList">
              <h3>Aggregate Commands</h3>
              {this.props.children}
          </div>
      );
  }
});

module.exports = AggregateCommandList;
