import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      selectedRecipe: null
    };
  }
  handleAddRecipe = (recipe) => {
    this.setState((prevState) => ({
      recipes: [...prevState.recipes, recipe]
    }));
  };

  async componentDidMount() {
    try {
      const r = await fetch('./recipes.json');
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText}`);
      }
      const recipes = await r.json();
      this.setState({
        recipes
      });
    } catch (e) {
      console.error(e);
    }
  }

  recipeSelected = index => {
    //recipeSelected = e => {
    //console.log(e);
    this.setState({
      selectedRecipe: index
    });
  }

  render() {
    const { recipes, selectedRecipe } = this.state;

    const recipeJsx = recipes.length ? <Recipe recipe={recipes[selectedRecipe]} /> : <div>loading...</div>;

    return (
      <div className="container text-center">
        <h1>PCS Recipes</h1>
        <AddRecipe onAddRecipe={this.handleAddRecipe} />
        <RecipeList recipes={recipes} recipeSelectedHandler={this.recipeSelected} />
        <hr />
        {recipeJsx}
      </div>
    )
  }
}
