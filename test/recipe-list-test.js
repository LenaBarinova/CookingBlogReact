import { expect } from 'chai';
import React from 'react';
import RecipeList from '../src/components/recipe-list.jsx';
import createComponent from './utils/create-component.js';

describe('Testing list of recipes', function() {
  let recipeList;
  const expectedAllRecipesData = [
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
  
  recipeList = createComponent(RecipeList, {allRecipesData: expectedAllRecipesData});

  it('should render an element of a type div', function() {
    expect(recipeList.type).to.equal('div'); 
  });
  
  it('should have correct id for div', function() {
    expect(recipeList.props.id).to.equal('features-wrapper'); 
  });  
  
  it('should have a section inside', function() {
    expect(recipeList.props.children.type).to.equal('section'); 
  });  
  
  it('should have correct id for a section', function() {
    expect(recipeList.props.children.props.id).to.equal('features'); 
  }); 
   
  it('should have correct class for a section', function() {
    expect(recipeList.props.children.props.className).to.equal('container'); 
  });
  
  it('should contain 2 parts in section', function() {
    expect(recipeList.props.children.props.children).to.have.length(2); 
  }); 
  
  it('should contain header at a position 1 in section', function() {
    expect(recipeList.props.children.props.children[0].type).to.equal('header'); 
  }); 
  
  it('should contain div at a position 2 in section', function() {
    expect(recipeList.props.children.props.children[1].type).to.equal('div'); 
  }); 
  // test header
  describe('Testing header of a recipeList', function() {
    let header = recipeList.props.children.props.children[0];
  
    it('should contain h2 inside', function() {
      expect(header.props.children.type).to.equal('h2'); 
    });
    
    it('should contain a text', function() {
      expect(header.props.children.props.children[0]).to.be.not.empty; 
    });
  });
  // test div-row
  describe('Testing row of recipes', function() {
    let row = recipeList.props.children.props.children[1];
  
    it('should contain div inside', function() {
      expect(row.type).to.equal('div'); 
    });
    
    it('should contain a div of a class "row"', function() {
      expect(row.props.className).to.equal('row'); 
    });
    
    it('should contain an array of correct count of recipes', function() {
      expect(row.props.children).to.have.length(expectedAllRecipesData.length); 
    });
  });
});