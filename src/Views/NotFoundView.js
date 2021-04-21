import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  notFoundViewContainer: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center"
  }
});

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <div className={classes.notFoundViewContainer}>
      <h1>404 Dumbass!</h1>
    </div>
  );
};

export default NotFoundView;