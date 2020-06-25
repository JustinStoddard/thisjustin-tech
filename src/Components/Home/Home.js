import React from 'react';
import HomeStylesheet from './HomeStylesheet';

const Home = () => {
  const classes = HomeStylesheet();
  return (
    <h1 className={classes.headerColor}>Hello World!</h1>
  );
};

export default Home;