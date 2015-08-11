let React = require('react');
var Recipe = require('./recipe');

var RecipeList = React.createClass ({displayName: "RecipeList",
  render() {
    var recipeComponents = this.props.allRecipesData.map(function(recipe) {
      return (
        React.createElement(Recipe, {recipeID: recipe.recipeID, title: recipe.title, imageURL: recipe.imageURL, description: recipe.description, recipeURL: recipe.recipeURL, key: recipe.recipeID})
      );
    });
    return (
      React.createElement("div", {id: "features-wrapper"}, 
        React.createElement("section", {id: "features", className: "container"}, 
          React.createElement("header", null, 
            React.createElement("h2", null, "These are my recent ", React.createElement("strong", null, "healthy, easy and delicious"), " recipes!")
          ), 
          React.createElement("div", {className: "row"}, 
              recipeComponents
          )
        )
	    )
    );
  }
});

module.exports = RecipeList;