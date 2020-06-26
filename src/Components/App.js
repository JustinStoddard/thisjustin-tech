import React, { createContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import { appReducer, initialState } from './AppReducer';
import Loader from './Loader';
import Theme from './Theme';
import { CssBaseline, ThemeProvider, Grid } from '@material-ui/core';
import AppStylesheet from './AppStylesheet';
import Particles from 'react-particles-js';
import initParticles from './InitParticles';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const Home = lazy(() => import('./Home/Home'));
const VirtualBusinessCard = lazy(() => import('./VirtualBusinessCard/VirtualBusinessCard'));

export const AppStateContext = createContext();
export const AppDispatchContext = createContext();

export const App = () => {
  const classes = AppStylesheet();
  const [state, dispatch] = useImmerReducer(appReducer, initialState);
  const isOnVirtualBusinessCardRoute = window.location.pathname === "/virtual-business-card";

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Router>
            {!isOnVirtualBusinessCardRoute ? (
              <Particles className={classes.particlesInit} params={initParticles} />
            ) : null}
            <Suspense fallback={<Loader />}>
              {isOnVirtualBusinessCardRoute ? (
                <Switch>
                  <Route exact path="/virtual-business-card" component={VirtualBusinessCard} />
                </Switch>
              ) : (
                <Grid container className={classes.appBackground}>
                  <Grid item xs={12}>
                    <Navigation />
                  </Grid>
                  <Grid item xs={12}>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/home" component={Home} />
                    </Switch>
                  </Grid>
                </Grid>
              )}
            </Suspense>
          </Router>
        </ThemeProvider>
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};