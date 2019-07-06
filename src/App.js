import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

/* Import components */
import Home from './components/Home.js';
import RecipesList from './components/recipes/RecipesList.js';
import RecipeInfo from './components/recipes/RecipeInfo.js';
import NewRecipe from './components/recipes/NewRecipe.js';


/**
 * represents App component
 */
class App extends Component {
  /**
   * @param {props} props props
   */
  constructor(props) {
    super(props);
  }

  /**
   * renders the app
   * @return {html} Router
   */
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/recipes/new" component={NewRecipe} />
          <Route path="/recipes/:id" component={RecipeInfo} />
          <Route path="/recipes" component={RecipesList} />

          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
