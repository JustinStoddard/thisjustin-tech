import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth0();

  if (user) return <Route {...rest} component={(props) => <Component {...props} />} />
  return <Redirect to="/" />
};

export default PrivateRoute;