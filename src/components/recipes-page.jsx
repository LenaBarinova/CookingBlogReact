'use strict';

let React = require('react');
let RecipeList = require('./recipe-list.jsx');
let _ = require('lodash');

let RecipesPage = React.createClass ({
    
	getInitialState: function() {
		return {
			recipes: []
		};
	},
	
 componentDidUpdate: function() {

				let query = this.props.query;
				let category ='';
				if (!!query) {
					category = query.category;
					
					let filtered_recipes = _.filter(this.state.recipes, function (recipe) { return recipe.category == category; });
					
					//this.setState({ recipes: filtered_recipes });
					
				}
 },	

	componentWillMount: function() {
	 console.log('Will mount');
		$.get('http://localhost:8008/data/recipes/all_recipes.json', function(result) {
			if (this.isMounted()) {
    
				let query = this.props.query;
				let category ='';
				if (!!query) {
					category = query.category;
					 
					//this.props.recipesData = _.filter(this.props.recipesData, function (recipe) { return recipe.category == category.category; });
				}
    		//sort
		
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