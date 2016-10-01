var React = require('react');
var ReactDOM = require('react-dom');

var Data = require('../../norsk-verb.json');

var MainLayout = React.createClass({
  getInitialState: function(){
    return {
      query: 'query',
      data: Data,
      suggestions: [],
      quiz: []
    }
  },
  componentDidMount: function(){
    this.setState({
      suggestions: this.getSuggestions('')
    });
  },
  getSuggestions: function(string){
    return this.state.data.filter(function(verb){
      return (verb.infinitiv.startsWith('å ' + string));
    });
  },
  handleQueryChange: function(e){
    var query = e.target.value;
    if (e.target.value.length < 1){
      query = 'query';
    }
    this.setState({
      query: query,
      suggestions: this.getSuggestions(e.target.value)
    })
  },
  handleAddToQuiz: function(e){
    this.setState({
      quiz: this.state.quiz.concat(e.target.value)
    })
  },
  render: function(){
    var verbs = this.state.suggestions.map((verb, index) => {
        return (
          <ul key={index}>
            <li>{verb.infinitiv}</li>
            <li>{verb.presens}</li>
            <li>{verb.preteritum}</li>
            <li>{verb.perfektum}</li>
            <li>{verb.english}</li>
            <li>
              <button onClick={this.handleAddToQuiz}>Add to quiz</button>
            </li>
          </ul>
        );
    });
      return (
        <div data={this.state.data}>
          <h3>{this.state.query}</h3>
          <input
            type="text"
            placeholder={this.state.query}
            onChange={this.handleQueryChange}
             />
             <div>
               {verbs}
             </div>
        </div>
      );
    }
});

module.exports = MainLayout;
