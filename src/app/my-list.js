var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Verb = require('./verb.js');

var MyList = React.createClass({
  render: function(){
    var myListClasseNames = classNames({
      "my-list": true,
      "is-active": this.props.isActive
    });
    var myListToggleClassNames = classNames({
      "my-list__heading-toggle fa fa-fw": true,
      "fa-arrow-left": !this.props.isActive,
      "fa-arrow-right": this.props.isActive
    });
    var splashText = (
      <p className="my-list__container-splash-text">
        This is your list. Click on the + button in individual
        verbs to add them to this list.<br />
        This is in development, you can add to your list, but not save it.
      </p>
    );
    return (
      <div className={myListClasseNames}>
        <div className="my-list__heading" onClick={this.props.setView}>
          <i className={myListToggleClassNames}></i>
          <h3 className="my-list__heading-title">MyList</h3>
        </div>
        <div className="my-list__container">
        {(this.props.verbs.length < 1) ? splashText : null }
        { this.props.verbs.map( ( verb, index) => {
          return (
            <Verb key={index} {...verb} isQuizable={true} actionIcon={'fa fa-minus'} handleVerbAction={this.props.handleClick.bind(null, index, 'remove')}/>
          );
        })}
        </div>
      </div>
    );
  }
});

module.exports = MyList;
