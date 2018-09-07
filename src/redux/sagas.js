import { all, fork } from 'redux-saga/effects';
import * as authWatchers from '../redux/auth';
import * as wagersWatchers from './wagers';

export default function* root() {
  yield all([
    fork(authWatchers.watchAuth),
    fork(wagersWatchers.watchGetWagers),
  ]);
}
