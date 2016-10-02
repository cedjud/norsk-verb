var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Verb = React.createClass({
  getInitialState: function(){
    return {
      isExpanded: false
    }
  },
  toggleExpandVerb: function(){
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  },
  render: function(){
    var verbClassNames = classNames({
        "verb": true,
        "is-expanded": this.state.isExpanded
    });
    var verbActionExpandToggleClassNames = classNames({
      "fa verb__action-toggle": true,
      "fa-caret-down": !this.state.isExpanded,
      "fa-caret-up": this.state.isExpanded
    });
    return (
      <ul className={verbClassNames}>
        <li className="verb__form">{this.props.infinitiv}</li>
        <li className="verb__form">{this.props.presens}</li>
        <li className="verb__form">{this.props.preteritum}</li>
        <li className="verb__form">{this.props.perfektum}</li>
        <li className="verb__form">{this.props.english}</li>
        <li className="verb__actions">
          <button className="verb__action-expand" onClick={this.toggleExpandVerb}>
            <i className={verbActionExpandToggleClassNames}></i>
          </button>
          <button className="verb__action-add" onClick={this.props.handleVerbAction}>
            <i className={this.props.actionIcon + " verb__action-toggle"}></i>
          </button>
        </li>
      </ul>
    );
  }
});

module.exports = Verb;
