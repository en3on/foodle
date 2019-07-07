import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

export default class RecipeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: '',
      ingredients: [],
    };
  };

  componentDidMount() {
    this.setState({
      id: this.props.recipe._id,
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients,
    });
  }

  render() {
    return (
      <Card style={{width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          Ingredients:
          <ul>
            {this.state.ingredients.map((ingredient, idx) => (
              <li key={idx}>
                {ingredient.name}
              </li>
            ))}
          </ul>
          <Link to={"/recipes/" + this.state.id}><Button variant="primary">View Recipe</Button></Link>
        </Card.Body>
      </Card>
    );
  }
}
