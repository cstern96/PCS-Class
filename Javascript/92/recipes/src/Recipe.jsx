import './Recipe.css';
import React from 'react';
import ListComponent from './ListComponent';
import PropTypes from 'prop-types';
import { useState } from "react";

export default function Recipe({recipe}) {
    const [pictureShowing, setPictureShowing] = useState(true);

    const togglePicture = () => {
        setPictureShowing(!pictureShowing);
    };
    const { name, ingredients, directions, picture } = recipe || {};


    if (!name) {
        return (<div>loading...</div>)
    }

    return (
        <>
            <h2>{name}</h2>
            {pictureShowing ? <img src={picture} /> : null}
            <br />
            <button className="btn btn-primary" onClick={togglePicture}>{pictureShowing ? 'hide picture' : 'show picture'}</button>
            <ListComponent name="ingredients" list={ingredients} />
            <ListComponent name="directions" list={directions} />
        </>
    );
}


Recipe.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        directions: PropTypes.arrayOf(PropTypes.string).isRequired

    }).isRequired
};







/*export default class Recipe extends Component {
  state = {
    pictureShowing: true
  };

  togglePicture = () => {
    this.setState({
      pictureShowing: !this.state.pictureShowing
    });
  }

  render() {
    const { name, ingredients, directions, picture } = this.props.recipe || {};

    const { pictureShowing } = this.state;

    if (! name) {
      return (<div>loading...</div>)
    }

    return (
      <>
        <h2>{name}</h2>
        {pictureShowing ? <img src={picture} /> : null}
        <br />
        <button className="btn btn-primary" onClick={this.togglePicture}>{pictureShowing ? 'hide picture' : 'show picture'}</button>
        <ListComponent name="ingredients" list={ingredients} />
        <ListComponent name="directions" list={directions} />
      </>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    directions: PropTypes.arrayOf(PropTypes.string).isRequired

  }).isRequired
};*/
