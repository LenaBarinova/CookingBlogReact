'use strict';

let React = require('react');

let CategoriesList = React.createClass ({

  getInitialState: function() {
  return {    
      categories: [
      {
        slug: "all",
        name: "All"
      },
      {
        slug: "brunch",
        name: "Brunch"
      },
      {
        slug: "sweets",
        name: "Sweets"
      },
      {
        slug: "after-work",
        name: "After work"
      },
      {
        slug: "for-party",
        name: "For party"
      },
      {
        slug: "to-go",
        name: "To go"
      }
    ]
    };
  },
  
  componentDidMount() {
    $('#nav > ul').dropotron({
        mode: 'fade',
        noOpenerFade: true,
        hoverDelay: 150,
        hideDelay: 350,
        easing: 'swing'
    });
  },
  
  render() {
    let categories = this.state.categories.map(function(category){
      let url = "#/recipes?category=" + category.slug;
      return (
        <li key={category.slug}>
          <a href={url}>
            {category.name}
          </a>
        </li>    
      );
    });
    return (
    <nav id="nav">
      <ul>
        <li><a className="icon fa-cutlery" href="#/recipes"><span>Recipes</span></a>
        </li>
        <li><a href="" className="icon fa-folder-open-o" onclick="$(this).trigger('mouseleave');"><span>Categories</span></a>
          <ul>
            {categories}         
          </ul>
        </li>
        <li><a className="icon fa-heart-o" href="#/about"><span>About</span></a>
        </li>
      </ul>
    </nav>
    );
  }
});

module.exports = CategoriesList;