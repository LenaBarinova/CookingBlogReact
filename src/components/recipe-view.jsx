let React = require('react');
let Router = require('react-router');

var RecipeView = React.createClass ({
  getInitialState: function() {
    return {    
      recipe: {
      ingredients: [],
      instructions: []
      }
    };
  },
  
  componentDidMount: function() {
    $.get('http://localhost:8000/data/recipes/' + this.props.params.id + '.json', function(result) {
      var recipeData = result;
      if (this.isMounted()) {
        this.setState({
          recipe: recipeData
        });
      }
    }.bind(this));
  },
  
  render() {
    let ingredients = this.state.recipe.ingredients.map(function(ingredient) {
      return (
        <span>
          <strong>{ingredient.quantity} {ingredient.unit}</strong> 
          {ingredient.quantity && ingredient.unit ? ' of ' : ' '} 
          {ingredient.name} {ingredient.preparationNotes}
          <br />
        </span>
      );
    });
    let i = 1;
    let instructions = this.state.recipe.instructions.map(function(instruction) {
      return (
        <span>
          <strong>{i++}. </strong>
          <span> {instruction} </span>
          <br />
        </span>
      );
    });
    return (
      <div id="main-wrapper">
        <div id="main" className="container">
          <div className="row">

            <div id="content" className="9u">
              <header>
                <h2><b>{this.state.recipe.title}</b></h2>
              </header>
              <div className="row">
                <div className="6u">
                  <aside>
                    <span>Posted: <b>{this.state.recipe.creationDate}</b></span>
                    <span className="right" ng-if="false">Share:
                      <a className="link fa fa-facebook-original" href="https://facebook.com/sharer.php?u=http%3A%2F%2F127.0.0.1%3A49591%2F%23%2Frecipes%2Fchocolate-homemade-truffles" rel="nofollow"></a>
                      <a className="link fa fa-facebook" social-facebook custom-url="{pageUrl}"></a>
                      <a className="link fa fa-pinterest" social-pinterest media="http://lorempixel.com/100/100/nature/1" custom-url="{pageUrl}"></a>
                      <a className="link fa fa-google-plus" social-gplus custom-url="{pageUrl}"></a>
                    </span>
            </aside>
            <hr />
            <aside>
              <p>
                <span>{this.state.recipe.description}</span>
                <br />
                <br />
                <span dangerouslySetInnerHTML={{__html: this.state.recipe.story}} />
              </p>
            </aside>
            <hr />
            <aside>
              <ul className="icons left">
                <li className="icon fa fa-clock-o">
                  <sup>Cooking time</sup>
                  <h6>{this.state.recipe.cookingTime} minutes</h6>
                </li>
              </ul>
              <ul className="icons right">
                <li className="icon fa fa-male">
                  <sup>Recipe makes</sup>
                  <h6>{this.state.recipe.servings} Servings</h6>
                </li>
              </ul>
            </aside>
          </div>
          <div className="6u">
            <span className="image featured"><img src={this.state.recipe.imageURL} alt=""/></span>
          </div>
        </div>
        <div className="row">
          <div className="6u">
            <h5>Ingredients</h5>
            <p>
              {ingredients}
            </p>
          </div>
          <div className="6u">
            <h5>Instructions</h5>
            <p>
              {instructions}
            </p>
          </div>
        </div>
      </div>
      
      <div id="sidebar" className="3u" jb-sidebar ng-if="false" />

    </div>
  </div>
</div>
      
    );
  }
});

module.exports = RecipeView;

        