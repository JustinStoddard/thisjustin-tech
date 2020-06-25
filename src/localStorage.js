/**
 * This function is responsible for getting our Redux State from LocalStorage if its there.
 * @returns {Object}
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/**
 * This funciton is responsible for saving our Redux State to LocalStorage.
 * @param {Object} state
 */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    //Ignore write errors
  }
};

/*
  If you want to indulge a bit more into how this works, check out this video that Dan Abramov, the creator of Redux, made.
  https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
*/