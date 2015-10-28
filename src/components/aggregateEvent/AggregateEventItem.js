'use strict';

var React = require('react/addons');


require('../../styles/aggregateEvent/AggregateEventItem.css');

var AggregateEventItem = React.createClass({
  render: function () {
    return (
        <div className="AggregateEventItem">
            <div>
                <span>{JSON.stringify(this.props.item)}</span>
            </div>
        </div>
      );
  }
});

module.exports = AggregateEventItem;
