import { Component } from "react"

class AddRecipe extends Component {
  state = {
    name: '',
    picture: '',
    ingredients: '',
    directions: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, picture, ingredients, directions } = this.state;

    const newRecipe = {
      name,
      picture,
      ingredients: ingredients.split("\n").map(item => item.trim()).filter(Boolean),
      directions: directions.split("\n").map(item => item.trim()).filter(Boolean)// this i got from chat gpt and only partially understand

    };
    this.props.onAddRecipe(newRecipe);

    this.setState({
      name: '',
      picture: '',
      ingredients: '',
      directions: ''
    });
  };

  render() {
    const { name, picture, ingredients, directions } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Name: <input value={name} onChange={this.handleChange} name="name" />
        </div>
        <div>
          Picture: <input value={picture} onChange={this.handleChange} name="picture" />
        </div>
        <div>
          Ingredients (one per line): <textarea value={ingredients} onChange={this.handleChange} name="ingredients" />
        </div>
        <div>
          Directions (one per line): <textarea value={directions} onChange={this.handleChange} name="directions" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddRecipe
