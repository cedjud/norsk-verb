var React = require('react');
var ReactDOM = require('react-dom');

var Verb = require('./verb.js');

var VerbList = React.createClass({
  componentDidMount: function(){
    var chars = "abcdefghijklmnopqrstuvwxyz".split('');
    console.log(chars);
  },
  handleSelectChange: function(e){
    console.log(typeof(e.target.value));
  },
  render: function(){
    var filterOptions = "abcdefghijklmnopqrstuvwxyz".split('').map( (char, index) => {
      return (
        <option key={index}>{char}</option>
      );
    });
    return (
      <div className="verb-list">
        <div className="verb-list__heading">
          <h3 className="verb-list__heading-title">Søk: {this.props.query}</h3>
          <select className="verb-list__heading-select" onChange={this.props.handleSelectChange}>
            {filterOptions}
          </select>
          <ul className="verb-list__heading-forms">
            <li>infinitiv</li>
            <li>presens</li>
            <li>preteritum</li>
            <li>perfektum</li>
            <li>engelsk</li>
          </ul>
        </div>
        <div className="verb-list__container">
        { this.props.suggestions.map( (verb, index) => {
          return (
            <Verb {...verb} key={index} index={index} isQuizable={false} actionIcon={'fa fa-plus'} handleVerbAction={this.props.handleClick.bind(null, index, 'add')} />
          );
        })}
        </div>
      </div>
    );
  }
});

module.exports = VerbList;
