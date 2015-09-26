'use strict';
let React = require('react');
let Router = require('react-router');
let Route = Router.Route;

let RecipeList = require ('./components/recipe-list.jsx');
let About = require ('./components/about.jsx');
let Recipe = require ('./components/recipe.jsx');

const allRecipesData = require('./../data/recipes/all_recipes.json');

let RecipeListData = React.createClass ({
  render() {
    return (
        <RecipeList allRecipesData={allRecipesData}/>
    );
  }
});
let RouteHandler = Router.RouteHandler;

let App = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler/>
      </div>
    )
  }
});

let routes = (
  <Route handler={App}>
    <Route path="/" handler={RecipeListData}/>
    <Route path="about" handler={About}/>
    <Route path="recipes" handler={RecipeListData}/>
    <Route path="recipes/:id" handler={Recipe}/>
  </Route>
);



Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('recipesContainer'));
});
