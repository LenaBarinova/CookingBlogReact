let React = require('react');
let Router = require('react-router');
let Route = Router.Route;

let RecipeList = require ('./components/recipe-list');
let About = require ('./components/about');
let RecipeView = require ('./components/recipe-view');

const allRecipesData =[
  {
    "recipeID": 1,
    "title": "Chocolate Homemade Truffles",
    "slug": "chocolate-homemade-truffles",
    "description": "Slightly updated and enriched recipe of sweets (Adult edition).",
    "story": "Easy to make, no baking, you literally just mix everything and that’s all. Very good with a morning coffee or as a sweet snack for big parties.<br/>Can be enriched with dried berries, such as raisins or cranberries. You also have a total freedom sizing each truffle - I like them in a mini cupcakes liners.",
    "category": "sweets",
    "recipeURL": "#/recipes/chocolate-homemade-truffles",
    "imageURL": "images/recipes/chocolate-homemade-truffles.jpg",
    "creationDate": "2015-04-15",
    "servings": 6,
    "cookingTime": 35
  },
  {
    "recipeID": 2,
    "title": "Greek Salad",
    "slug": "greek-salad",
    "description": "Light, easy, healthy, delicious. Very good dinner option to have after a work day.",
    "story": "As in all salads recipes - you can definitely free your imagination with ingredients you put in. This is the set I like most. Lightly fried pecans - what makes this salad taste special to me.<br /><br />I like making all the bit about the same size - quite big, almost as big as jumbo black olives.",
    "category": "after-work",
    "recipeURL": "#/recipes/greek-salad",
    "imageURL": "images/recipes/greek-salad.jpg",
    "creationDate": "2015-04-01",
    "servings": 3,
    "cookingTime": 15
  },
  {
    "recipeID": 3,
    "title": "Ham & Cheese Crepes",
    "slug": "ham-cheese-crepes",
    "description": "Nothing fancy today, just simply delicious and easy to make Crepes.",
    "story": "You can play with stuffing: sweet curd, fried ground beef with onions, chicken with cheese, tomatoes and mozzarella, bananas and Nutella; the list here is endless in fact.<br /><br />Today I'm making Crepes with ham, cheese and vegetables.",
    "category": "to-go",
    "recipeURL": "#/recipes/ham-cheese-crepes",
    "imageURL": "images/recipes/ham-cheese-crepes.jpg",
    "creationDate": "2015-05-03",
    "servings": 3,
    "cookingTime": 25
  },
  {
    "recipeID": 4,
    "title": "Light Asparagus Soup",
    "slug": "light-asparagus-soup",
    "description": "A must try recipe especially when asparagus are in season.",
    "story": "Light, delicious soup, very good for healthy dinner. Once all the ingridients are on a counter - it takes a no time to asseble and heat the soup.<br /><br />You can add cooked chicken or salmon to this soup, to make it richer. But it is good as is too.<br />We have great asparagus season in Washington.",
    "category": "after-work",
    "recipeURL": "#/recipes/light-asparagus-soup",
    "imageURL": "images/recipes/light-asparagus-soup.jpg",
    "creationDate": "2015-04-27",
    "servings": 4,
    "cookingTime": 20
  },
  {
    "recipeID": 10,
    "title": "Mini Cheesecakes",
    "slug": "mini-cheesecakes",
    "description": "This recipe is absolute saver. I bake these cheesecake for every bigger party.",
    "story": "Very easy recipe, everytime comes as expected. Best on the second day after baking.<br /><br />You can play with topping: jelly, jam, whipped cream, just berries - as well as keep it simple clean. I use cupcakes liners, but if you want - you can pour the mixture strait into small baking molds.",
    "category": "sweets",
    "recipeURL": "#/recipes/mini-cheesecakes",
    "imageURL": "images/recipes/mini-cheesecakes.jpg",
    "creationDate": "2015-05-02",
    "servings": 6,
    "cookingTime": 35
  },
  {
    "recipeID": 11,
    "title": "Wild rice & Chicken",
    "slug": "wild-rice-chicken",
    "description": "Easy to make after the work for healthy and delicious dinner.",
    "story": "Really fast recipe and you can use almost all the vegetables you have. You can season it with some soy sauce. And of course, you can use salmon or shrimps instead of chicken.<br /><br />This easy recipe could go as a side dish for fish or meat or can be just good by itself.",
    "category": "after-work",
    "recipeURL": "#/recipes/wild-rice-chicken",
    "imageURL": "images/recipes/wild-rice-chicken.jpg",
    "creationDate": "2015-05-01",
    "servings": 4,
    "cookingTime": 15
  },
  {
    "recipeID": 15,
    "title": "Pasta Bolognese",
    "slug": "pasta-bolognese",
    "description": "Very deliciuos as well as filling dinner, can be easily cooked after work.",
    "story": "This is a good recipe to cook for a big family gathering. Bolognese sauce tastes the same after defrosting, so I usually make twice bigger bowl and freeze it for super quick future dinners.<br /><br />In this photo pasta is seasoned with grated cheddar, although I prefer Parmigiano instead.",
    "category": "after-work",
    "recipeURL": "#/recipes/pasta-bolognese",
    "imageURL": "images/recipes/pasta-bolognese.jpg",
    "creationDate": "2015-05-06",
    "servings": 4,
    "cookingTime": 30
  },
  {
    "recipeID": 16,
    "title": "Cookies",
    "slug": "cookies",
    "description": "Macadamia nuts & Blueberry and Chocolate Chips Cookies.",
    "story": "This is real life saver recipe when it comes to unexpected guests visiting : ) very easy, very fast and usually made from ingredients that are at home all the time. And you may add literally anything you want in your cookies – my favorite Macadamia nuts and blueberries, my husband’s – chocolate chips : ).<br /><br />Here is how I cook it.",
    "category": "sweets",
    "recipeURL": "#/recipes/cookies",
    "imageURL": "images/recipes/cookies.jpg",
    "creationDate": "2015-04-29",
    "servings": 6,
    "cookingTime": 20
  },
  {
    "recipeID": 17,
    "title": "Mango Tart",
    "slug": "mango-tart",
    "description": "A drop of almond extract in a cream - that's what makes it special!",
    "story": "I took a <a href='http://www.joyofbaking.com/SweetPastryCrust.html' target='_blank'>Sweet Pastry Crust</a> recipe from Joy Of Baking site. Everthing else was just an experiment, which came very delicious.<br /><br />I think any fruits or berries can go on top - I'm using mangos this time.",
    "category": "sweets",
    "recipeURL": "#/recipes/mango-tart",
    "imageURL": "images/recipes/mango-tart.jpg",
    "creationDate": "2015-04-30",
    "servings": 6,
    "cookingTime": 50
  },
  {
    "recipeID": 18,
    "title": "Ultimate Pancakes",
    "slug": "ultimate-pancakes",
    "description": "Best pancakes recipe so far! Takes some time to cook, but worth it.",
    "story": "For a long time I was in search for the best pancakes recipe. In my family we prefer pancakes to be light, flufy and moist inside. So after lots of tries and fails - here it is - so far the best pancakes recipe. <br /><br />We usually have them with maple syrup and berries. I also like some sour cream on my pancakes.",
    "category": "brunch",
    "recipeURL": "#/recipes/ultimate-pancakes",
    "imageURL": "images/recipes/ultimate-pancakes.jpg",
    "creationDate": "2015-04-30",
    "servings": 3,
    "cookingTime": 30
  },
  {
    "recipeID": 19,
    "title": "Swedish Pancakes",
    "slug": "swedish-pancakes",
    "description": "So called Swedish pancakes are worth a try: fluffy, soft, light.",
    "story": "I first tryed these in US. Very fluffy, light and absolutely deliciuos pancakes. Usually served with lingonberry jam. <br /><br.>",
    "category": "brunch",
    "recipeURL": "#/recipes/swedish-pancakes",
    "imageURL": "images/recipes/swedish-pancakes.jpg",
    "creationDate": "2015-05-30",
    "servings": 4,
    "cookingTime": 30
  },
  {
    "recipeID": 20,
    "title": "Eggs Benedict",
    "slug": "eggs-benedict",
    "description": "Ultimate brunch to start a happy Saturday or Sunday.",
    "story": "I like to order eggs Benedict when we have brunch outside home. But actually it's quite easy to do at home as well. The egg usually doesn't look that nice as in restaurant, but the taste is the same (or even better sometimes :)).<br /><br />This is our way of starting Saturday or Sunday.",
    "category": "brunch",
    "recipeURL": "#/recipes/eggs-benedict",
    "imageURL": "images/recipes/eggs-benedict.jpg",
    "creationDate": "2015-05-28",
    "servings": 2,
    "cookingTime": 30
  },
  {
    "recipeID": 21,
    "title": "Veggie pie",
    "slug": "veggie-pie",
    "description": "If you want to impress - this is what you need to bake.",
    "story": "This festive dish is absolutely beautiful, good when you really want to impress :). Goes well with baked lamb ribs. We’ve cooked this combination for our cosy new year’s dinner.",
    "category": "for-party",
    "recipeURL": "#/recipes/veggie-pie",
    "imageURL": "images/recipes/veggie-pie.jpg",
    "creationDate": "2015-05-23",
    "servings": 6,
    "cookingTime": 90
  },
  {
    "recipeID": 22,
    "title": "Thai shrimp stir-fry",
    "slug": "thai-shrimp-stir-fry",
    "description": "Light, but full of flavours. Can be easily customizable recipe.",
    "story": "This is a very delicious stir-fry, it is especially good with fresh shrimps (or you can use chicken instead). I got this recipe during master class given by Ossama Charafeddine in Vilnius.",
    "category": "after-work",
    "recipeURL": "#/recipes/thai-shrimp-stir-fry",
    "imageURL": "images/recipes/thai-shrimp-stir-fry.jpg",
    "creationDate": "2015-06-01",
    "servings": 4,
    "cookingTime": 30
  },
  {
    "recipeID": 23,
    "title": "Spring rolls & Peanutbutter sauce",
    "slug": "spring-rolls-peanut-butter-sauce",
    "description": "Light, healthy, very convinient to make for a picnic or as snack for a party.",
    "story": "I would say it’s both: a healthy and delicious choice. Chicken may be replaced with other cooked meat (e.g. duck, turkey) or with more vegies for vegetarian option.</br></br>Mango maybe substituted with a pineapple or even peach.",
    "category": "to-go",
    "recipeURL": "#/recipes/spring-rolls-peanut-butter-sauce",
    "imageURL": "images/recipes/spring-rolls-peanut-butter-sauce.jpg",
    "creationDate": "2015-07-10",
    "servings": 4,
    "cookingTime": 20
  },
  {
    "recipeID": 24,
    "title": "Feta and watermelon salad",
    "slug": "feta-watermelon-salad",
    "description": "You can tell the summer is here. Fresh! Delicious! Unusual!",
    "story": "I just love this combination of fresh watermellon, salty feta and roasted nuts. </br></br>This salad became number one for us on a hot summer day. It's just so refreshing!",
    "category": "after-work",
    "recipeURL": "#/recipes/feta-watermelon-salad",
    "imageURL": "images/recipes/feta-watermelon-salad.jpg",
    "creationDate": "2015-07-12",
    "servings": 4,
    "cookingTime": 10
  },
    {
    "recipeID": 25,
    "title": "Carrot Muffins",
    "slug": "carrot-muffins",
    "description": "Sweet and moist inside with a twist of bitterness from orange jam topping",
    "story": "It's rather an autumn desert with warm flavours of cinnamon and nutmeg, but I wanted to share it here now to remember how good it was. </br></br>I think it would be good with pecan nuts and rasins added to the batter, unfortunately I didn't have enough this time.",
    "category": "sweets",
    "recipeURL": "#/recipes/carrot-muffins",
    "imageURL": "images/recipes/carrot-muffins.jpg",
    "creationDate": "2015-07-25",
    "servings": 6,
    "cookingTime": 30
  },
    {
    "recipeID": 26,
    "title": "Pizza",
    "slug": "pizza",
    "description": "Sweet and moist inside with a twist of bitterness from orange jam topping",
    "story": "It's rather an autumn desert with warm flavours of cinnamon and nutmeg, but I wanted to share it here now to remember how good it was. </br></br>I think it would be good with pecan nuts and rasins added to the batter, unfortunately I didn't have enough this time.",
    "category": "for-party",
    "recipeURL": "#/recipes/pizza",
    "imageURL": "images/recipes/pizza.jpg",
    "creationDate": "2015-08-05",
    "servings": 6,
    "cookingTime": 30
  }
];

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
