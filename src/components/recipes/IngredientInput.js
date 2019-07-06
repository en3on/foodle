import React, {Component} from 'react';
import './IngredientInput.css';
import {Form, Button, Row, Col} from 'react-bootstrap';

class IngredientInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ingredient: e.target.value});
  }

  handleClick() {
    this.props.ingredientChange(this.state.ingredient);
    this.setState({ingredient: ''});
  }

  render() {
    return (
      <Form.Group as={Row} controlId="formIngredientsInput">
        <Col>
          <Form.Control type="text" placeholder="Enter Ingredient" value={this.state.ingredient} onChange={this.handleChange} />
        </Col>
        <Col>
          <Button variant="outline-info" onClick={this.handleClick}>+</Button>
        </Col>
      </Form.Group>
    );
  }
}

export default IngredientInput;
