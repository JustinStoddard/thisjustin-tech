import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import { appReducer, initialState } from './AppReducer';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import VirtualBusinessCard from './VirtualBusinessCard/VirtualBusinessCard';
import Theme from './Theme';
import { CssBaseline, ThemeProvider, Grid } from '@material-ui/core';

export const AppStateContext = createContext();
export const AppDispatchContext = createContext();

export const App = () => {
  const [state, dispatch] = useImmerReducer(appReducer, initialState);
  const isOnVirtualBusinessCardRoute = window.location.pathname === "/virtual-business-card";

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Router>
            <Switch>
              {isOnVirtualBusinessCardRoute ? (
                <Route exact path="/virtual-business-card" component={VirtualBusinessCard} />
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
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};