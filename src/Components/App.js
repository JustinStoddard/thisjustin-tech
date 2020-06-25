import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Spacex from './Spacex/Spacex';
import Pokemon from './Pokemon/Pokemon';
import VirtualBusinessCard from './VirtualBusinessCard/VirtualBusinessCard';
import Theme from './Theme';
import { CssBaseline, ThemeProvider, Grid } from '@material-ui/core';

const App = () => {
  const isOnVirtualBusinessCardRoute = window.location.pathname === "/virtual-businesscard";

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <Switch>
          {isOnVirtualBusinessCardRoute ? (
            <Route exact path="/virtual-businesscard" component={VirtualBusinessCard} />
          ) : (
            <Grid container>
              <Grid xs={12}>
                <Navigation />
              </Grid>
              <Grid xs={12}>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
              </Grid>
            </Grid>
          )}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
