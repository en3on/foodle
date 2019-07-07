import React, {Component} from 'react';
import {Navbar as Navigation, Nav, Form, FormControl, Button} from 'react-bootstrap';

export default class Navbar extends Component {
  render() {
    return (
      <Navigation bg="primary" variant="dark">
        <Navigation.Brand href="/">foodle</Navigation.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/recipes">Recipes</Nav.Link>
          <Nav.Link href="/recipes/new">New Recipe</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navigation>
    );
  }
}
