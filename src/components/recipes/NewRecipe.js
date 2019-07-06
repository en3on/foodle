import React, {Component} from 'react';
import './NewRecipe.css';

import IngredientForm from './IngredientForm.js';

class NewRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.ingredientChangeHandler = this.ingredientChangeHandler.bind(this);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  ingredientChangeHandler(ingredient) {
    this.setState({ingredients: [...ingredient]});
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Recipe Name" onChange={this.handleChange} />
        <label htmlFor="ingredients">Ingredients</label>
        <IngredientForm ingredientChangeHandler={this.ingredientChangeHandler} />
        <div id="submitBtnContainer">
          <input id="submitBtn" type="submit" value="Create" />
        </div>
      </form>
    );
  }
}

export default NewRecipe;
