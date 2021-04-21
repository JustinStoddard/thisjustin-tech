import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

});

const LoginButton = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()}>Login</button>
  );
};

export default LoginButton;