var React = require('react');
var ReactDOM = require('react-dom');

var Query = React.createClass({
  render: function(){
    return (
      <div className="query">
        <input type="text" placeholder={this.props.placeholder} onChange={this.props.handleQueryChange} autoFocus/>
      </div>
    );
  }
});

module.exports = Query;
