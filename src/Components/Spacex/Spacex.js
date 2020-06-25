import React from 'react';
import SpacexStylesheet from './SpacexStylesheet';

const Spacex = () => {
  const classes = SpacexStylesheet();
  return (
    <h1 className={classes.headerStyles}>Spacex</h1>
  );
};

export default Spacex;