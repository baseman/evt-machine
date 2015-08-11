'use strict';

var React = require('react/addons');


require('styles/EventItem.css');

var EventItem = React.createClass({

  render: function () {
    return (
        <div className="EventItem">
            <div>
                <span>Event Id: </span>
                <span>{this.props.item.id}</span>
            </div>
            <div>
                <span>Event Type: </span>
                <span>{this.props.item.type}</span>
            </div>
            <div>
                <span>Aggregate Id: </span>
                <span>{this.props.item.aggregateId}</span>
            </div>
            <div>
                <span>Aggregate Type: </span>
                <span>{this.props.item.aggregateType}</span>
            </div>
            <div>
                <span>Event Data: </span>
                <span>{this.props.children}</span>
            </div>
        </div>
      );
  }
});

module.exports = EventItem;
