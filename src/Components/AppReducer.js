import { saveState, loadState } from '../localStorage';

const persistedState = loadState();

export const initialState = persistedState !== undefined ? persistedState : {
  count: 0,
  currentRoute: "home"
};

/**
 * This function is responsible for mutating our apps context.
 * @param {Object} state
 * @param {String} action
 * @returns {Object}
 */
export const appReducer = (state, action) => {
  switch (action.type) {
    case 'incremeant':
      state.count = state.count + action.payload;
      break;
    case 'decremeant':
      state.count = state.count - action.payload;
      break;
    case 'switchRoute':
      state.currentRoute = action.payload;
      break;
    default:
      throw new Error("Invalid Action");
  };
  saveState(state);
  return state;
};