'use strict';

let React = require('react');
let Router = require('react-router');
let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

let Routes = (
  <Route>
    <Route name="home" path="/" handler={require('./components/recipes-page.jsx')} />
    <DefaultRoute handler={require('./components/recipes-page.jsx')} />
    <Route name="recipes" handler={require('./components/recipes-page.jsx')} />
    <Route name="about" handler={require('./components/about-page.jsx')} />
    <Route name="recipe" path="recipes/:id" handler={require('./components/recipe-page.jsx')} />
  </Route>
);

module.exports = Routes;