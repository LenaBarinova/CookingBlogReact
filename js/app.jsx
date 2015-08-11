var React = require('react');
var RecipeList = require ('./components/recipe-list');

React.render(
  <RecipeList />,
  document.getElementById('recipesContainer')
);