'use strict';
let React = require('react');

let RecipeListItem = React.createClass ({
  render() {
    return (
      <div className="4u" key={this.props.recipeID}>
        <section>
          <a href={this.props.recipeURL} className="image featured">
            <img src={this.props.imageURL} alt={this.props.title} />
          </a>
          <header>
            <h5>
              <a href={this.props.recipeURL}>{this.props.title}</a>
            </h5>
          </header>
          <p>{this.props.description}</p>
        </section>
      </div>
    );
  }
});

module.exports = RecipeListItem;

        