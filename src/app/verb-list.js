var React = require('react');
var ReactDOM = require('react-dom');

var Verb = require('./verb.js');

var VerbList = React.createClass({
  render: function(){
    return (
      <div className="verb-list">
        <h3>{this.props.query}</h3>
        <div className="verb-list__container">
        { this.props.suggestions.map( (verb, index) => {
          return (
            <Verb {...verb} key={index} index={index} actionIcon={'fa fa-plus'} handleVerbAction={this.props.handleClick.bind(null, index, 'add')} />
          );
        })}
        </div>
      </div>
    );
  }
});

module.exports = VerbList;
