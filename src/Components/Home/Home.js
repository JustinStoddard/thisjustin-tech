import React from 'react';
import Resume from '../Resume/Resume';
import Spacex from '../Spacex/Spacex';
import Pokemon from '../Pokemon/Pokemon';
import HomeStylesheet from './HomeStylesheet';

const Home = () => {
  const classes = HomeStylesheet();
  return (
    <h1 className={classes.headerColor}>Home</h1>
  );
};

export default Home;