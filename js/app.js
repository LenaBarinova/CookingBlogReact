var React = require('react');
var RecipeList = require ('./components/recipe-list');

React.render(
  React.createElement(RecipeList, null),
  document.getElementById('recipesContainer')
);