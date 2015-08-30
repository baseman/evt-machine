'use strict';

var React = require('react/addons');

require('styles/CommandItem.css');

var CommandItem = React.createClass({
  render: function () {
    return (
        <div className="CommandItem">
            <div>
                <span>Command Type:</span>
                <span>{this.props.commandType}</span>
                {this.props.children}
            </div>
        </div>
      );
  }
});

module.exports = CommandItem;
