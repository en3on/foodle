import React, {Component} from 'react';
import './IngredientForm.css';

/**
 * Represents the form for adding ingredients
 */
class IngredientForm extends Component {
  /**
   * @param {props} props props
   */
  constructor(props) {
    super(props);
    this.state = {
      ingredient: null,
      ingredientArr: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ingredient: e.target.value});
    console.log(this.state.ingredient);
  }

  handleClick(e) {
    this.props.ingredientChangeHandler(this.state.ingredient);
    this.setState((prevState) => ({
      ingredientArr: [...prevState.ingredientArr, this.state.ingredient],
    }));
  }

  /**
   * Renders component
   * @return {html} input field for ingredient
   */
  render() {
    return (
      <>
        <div id="ingredientsContainer">
          <ul id="ingredientsList">
            {this.state.ingredientArr.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <div id="inputContainer">
            <input type="text" placeholder="Ingredient" onChange={this.handleChange} />
            <span id="addBtn" onClick={this.handleClick}>+</span>
          </div>
        </div>
      </>
    );
  }
}

export default IngredientForm;
