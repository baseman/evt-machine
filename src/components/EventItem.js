'use strict';

var React = require('react/addons');


require('styles/EventItem.css');

var EventItem = React.createClass({
  render: function () {
    return (
        <div className="EventItem">
            <div>
                <span>{JSON.stringify(this.props.item)}</span>
            </div>
        </div>
      );
  }
});

module.exports = EventItem;
