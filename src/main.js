var React = require('react');
var ReactDOM = require('react-dom');

// Require sass entry file.
require('./scss/style.scss');
require("font-awesome-sass-loader");

// Import router.
var Router = require('./app/router.js');

ReactDOM.render(
    Router,
    document.getElementById('root')
);
