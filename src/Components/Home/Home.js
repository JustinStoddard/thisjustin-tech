import React, { Fragment, useContext } from 'react';
import { AppDispatchContext, AppStateContext } from '../App';
import Resume from '../Resume/Resume';
import Spacex from '../Spacex/Spacex';
import HomeStylesheet from './HomeStylesheet';

const Home = () => {
  const classes = HomeStylesheet();
  const dispatch = useContext(AppDispatchContext);
  const state = useContext(AppStateContext);

  return (
    <Fragment>
      <button onClick={() => dispatch({ type: 'incremeant', payload: 1 })}>+</button>
      <h1 className={classes.headerColor}>Home {state.count}</h1>
      <button onClick={() => dispatch({ type: 'decremeant', payload: 1 })}>-</button>
    </Fragment>
  );
};

export default Home;