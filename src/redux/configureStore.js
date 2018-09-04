import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'

import rootReducer from './reducers';
import rootSaga from './sagas';

const createReduxStore = createStore;
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
  logger
];

export default function configureStore(initialState) {
  const store = createReduxStore(rootReducer, initialState, applyMiddleware(...middleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
