import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import wagers from './wagers';


const appReducers = combineReducers({
  sessionReducer,
  wagers,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = {};
  }
  return appReducers(state, action)
};
export default rootReducer;
