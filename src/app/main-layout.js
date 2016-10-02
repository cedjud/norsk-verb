var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Data = require('../../norsk-verb.json');

var Verb = require('./verb.js');
var Query = require('./query.js');
var MyList = require('./my-list.js');
var VerbList = require('./verb-list.js');

var MainLayout = React.createClass({
  getInitialState: function(){
    return {
      query: 'Søk etter verb',
      data: Data,
      suggestions: [],
      myList: [],
      myListActive: false
    }
  },
  componentDidMount: function(){
    this.setState({
      suggestions: this.state.data
    });
  },
  filterList: function(string, list){
    return list.filter(function(verb){
      return (
        verb.infinitiv.startsWith('å ' + string)
        || verb.perfektum.startsWith(string)
        || verb.presens.startsWith(string)
        || verb.preteritum.startsWith(string)
        || verb.english.startsWith(string)
      );
    });
  },
  handleQueryChange: function(e){
    var query = e.target.value;
    if (e.target.value.length < 1){
      query = 'Søk etter verb';
    }
    if (this.state.myListActive) {

      this.setState({
        query: query,
        myList: this.filterList(e.target.value, this.state.myList)
      });
    } else {
      this.setState({
        query: query,
        suggestions: this.filterList(e.target.value, this.state.data)
      });
    }
  },
  handleClick: function(index, action){
    switch (action) {
      case 'add':
        this.setState({
          myList: this.state.myList.concat(this.state.suggestions[index])
        })
        break;
      case 'remove':
        this.state.myList.splice(index, 1)
        this.setState({
          myList: this.state.myList
        })
        break;
      default:
        console.log('no action');
    }

  },
  setView: function(){
    this.setState({
      myListActive: !this.state.myListActive
    });
  },
  render: function(){
    var contentClasseNames = classNames({
      "content": true,
      "mylist-active": this.state.myListActive
    })
    return (
      <div className="container">
        <Query placeholder={this.state.query} handleQueryChange={this.handleQueryChange}/>
        <div className={contentClasseNames}>
          <VerbList
            query={this.state.query}
            suggestions={this.state.suggestions}
            handleQueryChange={this.handleQueryChange}
            handleClick={this.handleClick}
          />
          <MyList
            verbs={this.state.myList}
            setView={this.setView}
            handleClick={this.handleClick}
            isActive={this.state.myListActive}
          />
        </div>
      </div>
    );
  }
});

module.exports = MainLayout;
