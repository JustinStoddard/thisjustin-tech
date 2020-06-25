import React from 'react';
import NavigationStylesheet from './NavigationStylesheet';

const Navigation = () => {
  const classes = NavigationStylesheet();
  return (
    <h1 className={classes.headerStyles}>Navigation</h1>
  );
};

export default Navigation;