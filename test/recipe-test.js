import { expect } from 'chai';
import React from 'react';
import Recipe from '../components/recipe.jsx';
import createComponent from './utils/create-component.js';

describe('Testing recipeItem component', function() {
  let recipeItem;
  
  const expectedRecipeID = 28,
        expectedTitle = 'Lasagnia', 
        expectedImageURL = 'data/images/recipes/lasagna.jpg', 
        expectedDescription = 'This is my most favourite dish ever!!',
        expectedRecipeURL = '#/recipes/lasagna';
        
  recipeItem = createComponent(Recipe, {
                  recipeID: expectedRecipeID, 
                  title: expectedTitle, 
                  imageURL: expectedImageURL, 
                  description: expectedDescription, 
                  recipeURL: expectedRecipeURL});
    
  it('should render correct element - div', function() {  
    expect(recipeItem.type).to.equal('div');
  });
  
  it('should render with correct key', function() {
    expect(recipeItem.key).to.deep.equal(expectedRecipeID.toString());
  });
  
  it('should render correct class', function() {  
    expect(recipeItem.props.className).to.equal('4u');
  });
   
  it('should render with section element inside', function() {
    expect(recipeItem.props.children.type).to.equal('section');
  });
  
  describe('Testing recipeItem component content', function() {
    let section = recipeItem.props.children;
    
    it('should render 3 elements inside', function() {
      expect(section.props.children).to.have.length(3);
    });
    
    it('should render a element in the first position', function() {
      expect(section.props.children[0].type).to.equal('a');
    });
    
    it('should render header element in the second position', function() {
      expect(section.props.children[1].type).to.equal('header');
    });
    
    it('should render p element in the third position', function() {
      expect(section.props.children[2].type).to.equal('p');
    });
    // testing a
    describe('Testing link to recipeItem', function() {
      let a = section.props.children[0];

      it('should be of a correct class', function() {
        expect(a.props.className).to.equal('image featured');
      });
            
      it('should have a correct URL', function() {
        expect(a.props.href).to.equal(expectedRecipeURL);
      });
      
      it('should have an element of a type img inside', function() {
        let img = a.props.children;
        expect(img.type).to.equal('img');
      });
      
      it('should have an image with correct src', function() {
        let img = a.props.children;
        expect(img.props.src).to.equal(expectedImageURL);
      });
      
      it('should have an image with alt text containing a title', function() {
        let img = a.props.children;
        expect(img.props.alt).to.equal(expectedTitle);
      });
    });
    // testing header
    describe('Testing header of a recipeItem', function() {
      let headerH5 = section.props.children[1].props.children;

      it('should render a header with h5 element inside', function() {
        expect(headerH5.type).to.equal('h5');
      });
      it('should render an a element inside h5', function() {
        expect(headerH5.props.children.type).to.equal('a');
      });
      it('should have correct refference to a recipe', function() {
        let a = headerH5.props.children;
        expect(a.props.href).to.equal(expectedRecipeURL);
      });
      it('should have correct title', function() {
        let a = headerH5.props.children;
        expect(a.props.children).to.equal(expectedTitle);
      });
    });
    // testing p
    describe('Testing recipe description of a recipeItem', function() {
      let p = section.props.children[2];
      const expectedP = React.DOM.p(null, expectedDescription);
                 
      it('should have a correct description', function() {
        expect(p).to.deep.equal(expectedP);
      });
    });
  });
});