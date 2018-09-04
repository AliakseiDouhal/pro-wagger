import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';


const rootReducer = combineReducers({
  sessionReducer,
});

export default rootReducer;
