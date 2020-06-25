import React from 'react';
import PokemonStylesheet from './PokemonStylesheet';

const Pokemon = () => {
  const classes = PokemonStylesheet();
  return (
    <h1 className={classes.headerStyles}>Pokemon</h1>
  );
};

export default Pokemon;