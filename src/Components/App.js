import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import PrivateRoute from '../Components/HOC/PrivateRoute';
import LandingPage from '../Views/LandingPageView';
import Theme from './Theme';

const HomeView = lazy(() => import('../Views/HomeView'));
const NotFoundView = lazy(() => import('../Views/NotFoundView'));

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute exact path="/home" component={HomeView} />
            <Route exact path="/404" component={NotFoundView} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;