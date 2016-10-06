var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

// Import Data
var Data = require('../../norsk-verb.json');

// Import Components
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
      myListBuffer: [],
      myListActive: false
    }
  },
  componentDidMount: function(){
    this.setState({
      suggestions: this.filterList('a', this.state.data, 'startsWith')
    });
  },
  filterList: function(string, list, filter){
    return list.filter(function(verb){
      if (filter === 'includes'){
        return (
          verb.infinitiv.includes('å ' + string)
          || verb.perfektum.includes(string)
          || verb.presens.includes(string)
          || verb.preteritum.includes(string)
          || verb.english.includes(string)
        );
      } else if (filter === 'startsWith') {
        return (
          verb.infinitiv.startsWith('å ' + string)
          || verb.perfektum.startsWith(string)
          || verb.presens.startsWith(string)
          || verb.preteritum.startsWith(string)
        );
      }
    });
  },
  handleSelectChange: function(e){
    var query = e.target.value;
    this.setState({
      query: query,
      suggestions: this.filterList(e.target.value.toLowerCase(), this.state.data, 'startsWith')
    });
  },
  handleQueryChange: function(e){
    var query = e.target.value;
    if (e.target.value.length < 1){
      if (this.state.myListActive){
        query = "Søk i MyList";
      } else {
        query = 'Søk etter verb';
      }
    }
    if (this.state.myListActive) {
      this.setState({
        query: query,
        myList: this.filterList(e.target.value.toLowerCase(), this.state.myListBuffer, 'includes')
      });
    } else {
      this.setState({
        query: query,
        suggestions: this.filterList(e.target.value.toLowerCase(), this.state.data, 'includes')
      });
    }
  },
  handleClick: function(index, action){
    switch (action) {
      case 'add':
        var test = false;
        for (var i in this.state.myList){
          if (this.state.myList[i].infinitiv == this.state.suggestions[index].infinitiv){
            test = true;
          };
        }
        if (!test){
          this.setState({
            myList: this.state.myList.concat(this.state.suggestions[index])
          });
        } else {
          console.log('Verb already in list!');
        }
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
      myListActive: !this.state.myListActive,
      query: (this.state.myListActive ? "Søk verb" : "Søk i MyList" ),
      myListBuffer: this.state.myList
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
            handleSelectChange={this.handleSelectChange}
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
