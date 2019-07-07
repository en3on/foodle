import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


/* Import components */
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import RecipesIndex from './components/recipes/RecipesIndex.js';
import RecipeInfo from './components/recipes/RecipeInfo.js';
import NewRecipe from './components/recipes/NewRecipe.js';

/**
 * represents App component
 */
class App extends Component {
  /**
   * renders the app
   * @return {html} Router
   */
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/recipes/new" component={NewRecipe} />
          <Route path="/recipes/:id" component={RecipeInfo} />
          <Route path="/recipes" component={RecipesIndex} />

          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
