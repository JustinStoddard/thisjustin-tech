import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Spacex from './Spacex/Spacex';
import Pokemon from './Pokemon/Pokemon';
import Theme from './Theme';
import { CssBaseline, ThemeProvider, Grid } from '@material-ui/core';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <h1>Hello World!</h1>
    </ThemeProvider>
  );
};

export default App;
