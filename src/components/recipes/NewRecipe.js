import React, {Component} from 'react';
import './NewRecipe.css';
import {Button, Form, Container, Row, Col, ListGroup} from 'react-bootstrap';
import axios from 'axios';

// import IngredientForm from './IngredientForm.js';
import IngredientInput from './IngredientInput.js';

class NewRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.ingredientChangeHandler = this.ingredientChangeHandler.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.addNewRecipeHandler = this.addNewRecipeHandler.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  ingredientChangeHandler(ingredient) {
    this.setState({ingredients: [...this.state.ingredients, ingredient]});
  }

  removeIngredient(idx) {
    const newArr = this.state.ingredients;
    newArr.splice(idx, 1);
    this.setState({ingredients: newArr});
  }

  addNewRecipeHandler() {
    const {name, ingredients} = this.state;
    console.log('Hanlding new Recipe');
    this.createRecipe({name, ingredients});
  }

  async createRecipe(recipe) {
    const URL = "http://localhost:5000/recipes/";
    const data = JSON.stringify(recipe);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
      },
    };

    console.log(data);

    const resp = await axios.post(URL, data, options);
    console.log(resp);
  }

  render() {
    return (
      <Container id="formContainer">
        <Form id="newRecipeForm">
          <Row className="justify-content-md-center">
            <Form.Group controlId="formRecipeName">
              <Form.Label id="recipeNameLabel">Recipe Name</Form.Label>
              <Form.Control size="lg" type="text" placeholder="Enter Recipe Name" onChange={this.handleChange} />
            </Form.Group>
          </Row>

          <Row className="justify-content-md-center">
            <Form.Group controlId="formIngredients">
              <Form.Label>Ingredients</Form.Label>
              <ListGroup>
                {this.state.ingredients.map((ingredient, idx) => (
                  <ListGroup.Item key={idx} idx={idx} className="listItem" onClick={e => this.removeIngredient(e.target.attributes.idx.value)}>
                    {ingredient}
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <div id="ingredientInputContainer">
                <IngredientInput ingredientChange={this.ingredientChangeHandler} />
              </div>
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">
            <Button variant="outline-success" onClick={this.addNewRecipeHandler}>Create</Button>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default NewRecipe;
