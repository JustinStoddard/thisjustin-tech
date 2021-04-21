import React from 'react';
import { makeStyles } from '@material-ui/core';

import Navigation from '../Components/Navigation/Navigation';
import Home from '../Components/Home/Home';

const useStyles = makeStyles({
  homeViewContainer: {
    
  }
});

const HomeView = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeViewContainer}>
      <Navigation />
      <Home />
    </div>
  );
};

export default HomeView;