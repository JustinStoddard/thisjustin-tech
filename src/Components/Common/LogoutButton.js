import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

});

const LogoutButton = () => {
  const classes = useStyles();
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout()}>Logout</button>
  );
};

export default LogoutButton;