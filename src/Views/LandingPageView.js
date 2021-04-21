import React from 'react';
import { makeStyles } from '@material-ui/core';

import LandingPage from '../Components/LandingPage/LandingPage';
import Navigation from '../Components/Navigation/Navigation';

const useStyles = makeStyles({

});

const LandingPageView = () => {
  const classes = useStyles();

  return (
    <div>
      <Navigation />
      <LandingPage />
    </div>
  );
};

export default LandingPageView;