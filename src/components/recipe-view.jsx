let React = require('react');
let Router = require('react-router');

var RecipeView = React.createClass ({
  getInitialState: function() {
    return {
      recipe: {
    "recipeID": 17,
    "title": "Mango Tart",
    "slug": "mango-tart",
    "description": "A drop of almond extract in a cream - that's what makes it special!",
    "story": "I took a <a href='http://www.joyofbaking.com/SweetPastryCrust.html' target='_blank'>Sweet Pastry Crust</a> this.state.recipe from Joy Of Baking site. Everthing else was just an experiment, which came very delicious.<br /><br />I think any fruits or berries can go on top - I'm using mangos this time.",
    "category": "sweets",
    "recipeURL": "#/recipes/mango-tart",
    "imageURL": "images/recipes/mango-tart.jpg",
    "creationDate": "2015-04-30",
    "lastModified": "2015-04-30",
    "servings": 6,
    "cookingTime": 50,
    "ingredients": [
    {
      "name": "flour",
      "quantity": 1.5,
      "unit": "cup",
      "preparationNotes": "sifted"
        },
    {
      "name": "butter",
      "quantity": 113,
      "unit": "g",
      "preparationNotes": "at room temperature"
        },
    {
      "name": "sugar",
      "quantity": 50,
      "unit": "g",
      "preparationNotes": null
        },
    {
      "name": "eggs",
      "quantity": 1,
      "unit": null,
      "preparationNotes": null
        },
    {
      "name": "salt",
      "quantity": 1,
      "unit": "pinch",
      "preparationNotes": null
        },
    {
      "name": "cream cheese",
      "quantity": 1,
      "unit": "cup",
      "preparationNotes": null
        },
    {
      "name": "eggs",
      "quantity": 2,
      "unit": null,
      "preparationNotes": null
        },
    {
      "name": "sugar",
      "quantity": 50,
      "unit": "g",
      "preparationNotes": null
        },
    {
      "name": "mangos",
      "quantity": 3,
      "unit": null,
      "preparationNotes": "(Or other fruits or berries, such as: peaches, cherries, plums)"
        },
    {
      "name": "almond extract",
      "quantity": 1,
      "unit": "tsp",
      "preparationNotes": null
        },
    {
      "name": "cinnamon",
      "quantity": 1,
      "unit": "tbsp",
      "preparationNotes": null
        },
    {
      "name": "almond shaves",
      "quantity": null,
      "unit": null,
      "preparationNotes": null
        }
    ],
  "instructions": [
    "Preheat our oven to 350 F degrees",
    "Mix flour, 50g sugar, butter and one egg in a standing mixer untill the dough comes together in a ball.",
    "Spread the pastry on your tart pan. Prick the pastry with fork.",
    "Cook for 20 minutes.",
    "Meanwhile beat eggs with sugar, add cheese cream. Mix all together. Add almond extract.",
    "Once tha pastry is cooked, place filling on the crust, add sliced mangos on top.",
    "Sprinkle with shaved almonds and cinnamon",
    "Bake for 20 min more.",
    "Serve cooled."
    ]
}
};
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

        