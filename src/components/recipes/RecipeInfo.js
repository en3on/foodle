import React, {Component} from 'react';
const axios = require('axios');

class RecipeInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
    };
  }

  async componentDidMount() {
    const recipe = await axios.get(`http://localhost:5000/recipes/find/${this.props.match.params.id}`);
    this.setState({recipe: recipe.data});
  }

  render() {
    const {recipe} = this.state;
    if (recipe !== null) {
      return (
        <>
          <h1>{recipe.name}</h1>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li>{ingredient.name}</li>
            ))}
          </ul>
        </>
      );
    } else {
      return (
        <>
        </>
      )
    }
  }
}

export default RecipeInfo;
