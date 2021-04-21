import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from '../Common/LoginButton';
import LogoutButton from '../Common/LogoutButton';

const useStyles = makeStyles({
  navigationContainer: {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

const Navigation = () => {
  const classes = useStyles();
  const { user } = useAuth0();

  return (
    <div className={classes.navigationContainer}>
      <h1>logo</h1>
      {user ? (
        <LogoutButton />
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Navigation;