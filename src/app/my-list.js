var React = require('react');
var ReactDOM = require('react-dom');

var Verb = require('./verb.js');

var MyList = React.createClass({
  render: function(){
    return (
      <div className="my-list">
        <h3 onClick={this.props.setView}>MyList</h3>
        <div className="my-list__container">
        { this.props.verbs.map( ( verb, index) => {
          return (
            <Verb key={index} {...verb} actionIcon={'fa fa-minus'} handleVerbAction={this.props.handleClick.bind(null, index, 'remove')}/>
          );
        })}
        </div>
      </div>
    );
  }
});

module.exports = MyList;
