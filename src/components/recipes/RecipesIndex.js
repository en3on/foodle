import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/* Import Components */
import RecipeCard from './RecipeCard.js';

const axios = require('axios');

class RecipesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  async componentDidMount() {
    const {data} = await axios.get('http://localhost:5000/recipes');
    this.setState({recipes: data});
  }

  render() {
    const {recipes} = this.state;
    if (recipes.length !== 0) {
      console.log(recipes)
      return (
        <>
          {this.state.recipes.map((recipe, idx) => (
            <RecipeCard key={idx} recipe={recipe} />
          ))}
        </>
      );
    } else {
      return <></>
    }
  }
}

export default RecipesIndex;
