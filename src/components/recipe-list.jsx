let React = require('react');
var Recipe = require('./recipe');


var compareReverse = function (a, b) {
  if (a.creationDate < b.creationDate)
    return 1;
  if (a.creationDate > b.creationDate)
    return -1;
  return 0;
}

var RecipeList = React.createClass ({
  render() {
    this.props.allRecipesData = this.props.allRecipesData.sort(compareReverse);
    var recipeComponents = this.props.allRecipesData.map(function(recipe) {
      return (
        <Recipe recipeID={recipe.recipeID} title={recipe.title} imageURL={recipe.imageURL} description={recipe.description} recipeURL={recipe.recipeURL} key={recipe.recipeID}/>
      );
    });
    return (
      <div id="features-wrapper">
        <section id="features" className="container">
          <header>
            <h2>These are my recent <strong>healthy, easy and delicious</strong> recipes!</h2>
          </header>
          <div className="row">
              {recipeComponents}
          </div>  
        </section>
	    </div>
    );
  }
});

module.exports = RecipeList;