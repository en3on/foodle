import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome to foodle</h1>
        <p>
          Head over to the recipes section to view 
          all our user created recipes!
        </p>
        <p>
          <Link to="/recipes"><Button variant="primary">View Recipes</Button></Link>
        </p>
      </Jumbotron>
    );
  }
}

export default Home;
