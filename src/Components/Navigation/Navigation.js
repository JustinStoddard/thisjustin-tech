import React, { useContext } from 'react';
import { AppDispatchContext, AppStateContext } from '../App';
import NavigationStylesheet from './NavigationStylesheet';
import { Grid } from '@material-ui/core';

const Navigation = () => {
  const classes = NavigationStylesheet();
  const dispatch = useContext(AppDispatchContext);
  const state = useContext(AppStateContext);
  
  return (
    <Grid container>
      <Grid item xs={12} className={classes.leftNavCol}>
        <div className={classes.navLogo}>
          <span className={classes.navLogoText}>JS</span>
        </div>
        <div className={classes.navTabs}>
          <span
            className={`${classes.navTabText} ${state.currentRoute === "home" ? classes.navTabTextActive : ""}`}
            onClick={() => dispatch({ type: "switchRoute", payload: "home"})}
          >
            HOME
          </span>
          <span
            className={`${classes.navTabText} ${state.currentRoute === "resume" ? classes.navTabTextActive : ""}`}
            onClick={() => dispatch({ type: "switchRoute", payload: "resume"})}
          >
            RESUMÉ
          </span>
          <span
            className={`${classes.navTabText} ${state.currentRoute === "spacex" ? classes.navTabTextActive : ""}`}
            onClick={() => dispatch({ type: "switchRoute", payload: "spacex"})}
          >
            SPACE X
          </span>
        </div>
      </Grid>
    </Grid>
  );
};

export default Navigation;