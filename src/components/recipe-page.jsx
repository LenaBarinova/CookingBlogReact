'use strict';

let React = require('react');
let Router = require('react-router');
let Recipe = require('./recipe.jsx');

let RecipePage = React.createClass ({
  getInitialState: function() {
    return {    
      recipe: {
      ingredients: [],
      instructions: []
      }
    };
  },
  
  componentWillMount: function() {
    $.get('http://localhost:8008/data/recipes/' + this.props.params.id + '.json', function(result) {
      if (this.isMounted()) {
        this.setState({
          recipe: result
        });
      }
    }.bind(this));
  },
  
  render() {
    return (
      <Recipe recipeData = {this.state.recipe} />
    );
  }
});

module.exports = RecipePage;        