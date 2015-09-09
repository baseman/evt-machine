'use strict';

var React = require('react/addons');

require('../../styles/command/CommandList.css');

var CommandList = React.createClass({

  render: function () {
      return (
          <div className="CommandList">
              <h3>Commands</h3>
              {this.props.children}
          </div>
      );
  }
});

module.exports = CommandList;
