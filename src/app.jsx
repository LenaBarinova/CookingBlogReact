'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let Router = require('react-router');
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;
let Routes = require('./routes.jsx');
let CategoriesList = require('./components/categories-list.jsx');

Router.run(Routes, (Handler) => {
  ReactDOM.render(
   <Handler/>, 
   document.getElementById('recipesContainer'));
});

ReactDOM.render(
  <CategoriesList />,
  document.getElementById('categoriesContainer')
);