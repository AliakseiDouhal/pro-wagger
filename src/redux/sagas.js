import { all, fork } from 'redux-saga/effects';
import * as authWatchers from '../redux/auth';

export default function* root() {
  yield all([
    fork(authWatchers.watchAuth),
  ]);
}
