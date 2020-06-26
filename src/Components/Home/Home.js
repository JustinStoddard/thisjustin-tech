import React, { useContext, useState, useEffect } from 'react';
import { AppDispatchContext, AppStateContext } from '../App';
import Resume from '../Resume/Resume';
import Spacex from '../Spacex/Spacex';
import HomeContent from './HomeContent';
import HomeSlide from './HomeSlide';
import HomeStylesheet from './HomeStylesheet';
import { Grid } from '@material-ui/core';

const Home = () => {
  const classes = HomeStylesheet();
  const dispatch = useContext(AppDispatchContext);
  const state = useContext(AppStateContext);
  const [ x, setX ] = useState(0);

  useEffect(() => {
    const getIndex = () => {
      let newIndex = 0;
      state.currentRoute === "home" ? newIndex = 0 : newIndex = newIndex;
      state.currentRoute === "resume" ? newIndex = 1 : newIndex = newIndex;
      state.currentRoute === "spacex" ? newIndex = 2 : newIndex = newIndex;
      return newIndex;
    };
    goToSlide(getIndex());
  });

  const comps = [
    {comp: <HomeContent />},
    {comp: <Resume />},
    {comp: <Spacex />}
  ];

  const goToSlide = index => {
    setX(parseInt(`-${index}00`));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.slider}>
          {comps.map((c, i) => {
            return (
              <HomeSlide key={i} x={x} component={c.comp} />
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;