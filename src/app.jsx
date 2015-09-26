'use strict';
let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;
let Routes = require('./routes.jsx');

let App = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler/>
      </div>
    )
  }
});

Router.run(Routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('recipesContainer'));
});
