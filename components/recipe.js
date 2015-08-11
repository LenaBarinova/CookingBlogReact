let React = require('react');

var Recipe = React.createClass ({displayName: "Recipe",
  render() {
    return (
      React.createElement("div", {className: "4u", key: this.props.recipeID}, 
        React.createElement("section", null, 
          React.createElement("a", {href: this.props.recipeURL, className: "image featured"}, 
            React.createElement("img", {src: this.props.imageURL, alt: this.props.title})
          ), 
          React.createElement("header", null, 
            React.createElement("h5", null, 
              React.createElement("a", {href: this.props.recipeURL}, this.props.title)
            )
          ), 
          React.createElement("p", null, this.props.description)
        )
      )
    );
  }
});

module.exports = Recipe;

        