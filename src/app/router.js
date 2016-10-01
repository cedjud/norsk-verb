var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require("react-router").browserHistory;

var MainLayout = require('./main-layout.js');

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout} />
  </Router>
);