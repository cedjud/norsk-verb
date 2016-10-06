var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Verb = React.createClass({
  getInitialState: function(){
    return {
      isExpanded: false,
      isActiveQuiz: false
    }
  },
  toggleExpandVerb: function(){
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  },
  toggleQuiz: function(){
    this.setState({
        isActiveQuiz: !this.state.isActiveQuiz
      });
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
    var quizButtonClassNames = classNames({
      "fa verb__action-toggle": true,
      "fa-question": !this.state.isActiveQuiz,
      "fa-close": this.state.isActiveQuiz,
    });
    var quizButton = <button className="verb__action-quiz" onClick={this.toggleQuiz}>
                      <i className={quizButtonClassNames}></i>
                    </button>;
    return (
      <ul className={verbClassNames}>
        <VerbForm quiz={this.state.isActiveQuiz} string={this.props.infinitiv} />
        <VerbForm quiz={this.state.isActiveQuiz} string={this.props.presens} />
        <VerbForm quiz={this.state.isActiveQuiz} string={this.props.preteritum} />
        <VerbForm quiz={this.state.isActiveQuiz} string={this.props.perfektum} />
        <VerbForm string={this.props.english} />
        <li className="verb__actions">
          {this.props.isQuizable ? quizButton : null}
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

var VerbForm = React.createClass({
  getInitialState: function(){
    return {
      isCorrect: false
    };
  },
  handleChange: function(e){
      if (e.target.value === this.props.string){
        console.log('correct!');
        this.setState({
          isCorrect: true
        })
      } else if (this.state.isCorrect === true && e.target.value !== this.props.string) {
        console.log("shouldn't have changed it!");
        this.setState({
          isCorrect: false
        })
      }
  },
  render: function(){
    var inputClassNames = classNames({
        "isCorrect": this.state.isCorrect,
        "isIncorrect": !this.state.isCorrect,
    });
    var verbFormClassNames = classNames({
        "verb__form": true,
        "isCorrect": this.state.isCorrect,
        "isIncorrect": !this.state.isCorrect,
    });
    var content;
    var quizString = "";
    if (this.props.quiz) {
      content = <input type="text" className={inputClassNames} placeholder={quizString} onChange={this.handleChange}></input>;
    } else {
      content = this.props.string;
    };
    return (
        <li className={verbFormClassNames}>
          {content}
        </li>

    );
  }
});

module.exports = Verb;
