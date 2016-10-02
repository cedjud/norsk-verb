var React = require('react');
var ReactDOM = require('react-dom');

var Verb = React.createClass({
  render: function(){
    return (
      <ul className="verb">
        <li className="verb__form">{this.props.infinitiv}</li>
        <li className="verb__form">{this.props.presens}</li>
        <li className="verb__form">{this.props.preteritum}</li>
        <li className="verb__form">{this.props.perfektum}</li>
        <li className="verb__form">{this.props.english}</li>
        <li className="verb__action">
          <button onClick={this.props.handleVerbAction}><i className={this.props.actionIcon}></i></button>
        </li>
      </ul>
    );
  }
});

module.exports = Verb;
