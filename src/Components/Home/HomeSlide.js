import React from 'react';
import HomeStylesheet from './HomeStylesheet';

const HomeSlide = ({ x, component }) => {
  const classes = HomeStylesheet();

  const slideStyles = {
    transform: `translateX(${x}%)`
  };

  return (
    <div className={classes.slide} style={slideStyles}>
      {component}
    </div>
  );
};

export default HomeSlide;