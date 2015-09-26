'use strict';

let React = require('react');
let RecipeList = require('./recipe-list.jsx');

let RecipesPage = React.createClass ({
  getInitialState: function() {
		return {
			recipes: []
		};
	},

	componentDidMount: function() {
		$.get('http://localhost:8008/data/recipes/all_recipes.json', function(result) {
			if (this.isMounted()) {
				this.setState({ recipes: result });
			}
		}.bind(this));
	},
	
  render() {
    return (
      <RecipeList recipesData = {this.state.recipes} />
    );
  }
});

module.exports = RecipesPage;