let React = require('react');
let Router = require('react-router');
let Route = Router.Route;

let RecipeList = require ('./components/recipe-list');
let About = require ('./components/about');
let RecipeView = require ('./components/recipe-view');

const allRecipesData = require('./../data/recipes/all_recipes.json');

let RecipeListData = React.createClass ({
  render() {
    return (
        <RecipeList allRecipesData={allRecipesData}/>
    );
  }
});

let routes = (
  <Route handler={App}>
    
    <Route path="/" handler={RecipeListData}/>
    <Route path="about" handler={About}/>
    <Route path="recipes" handler={RecipeListData}/>
    <Route path="recipes/:id" handler={RecipeView}/>
  </Route>
);

/*
React.render(
  <RecipeList allRecipesData={allRecipesData}/>,
  document.getElementById('recipesContainer')
);*/

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

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('recipesContainer'));
});
