import { call, put, takeEvery } from 'redux-saga/effects';

import { loginRequest, signupRequest } from '../../http/auth';
import { setupUser } from '../../helpers/auth/setupUser';
import {routerPath} from '../../constants/router/path.const';

const init = {
  isLoading: false,
};

// <<<CONSTS>>>
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILED = 'SIGNUP_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNUP_FAILED:
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* onLogin({payload, history}) {
  try {
    const {user: {uid, email, refreshToken}} = yield call(loginRequest,payload);
    yield call(setupUser, uid, email, refreshToken);
    yield put({ type: LOGIN_SUCCESS});
    history.push(routerPath.BOARD);
  } catch (error) {
    console.log(error);
    yield put({ type: LOGIN_FAILED, error });
  }
}
function* onSignUp({payload, history}) {
  try {
    const {user: {uid, email, refreshToken}} = yield call(signupRequest,payload);
    yield call(setupUser, uid, email, refreshToken);
    yield put({ type: SIGNUP_SUCCESS});
    history.push(routerPath.BOARD);
  } catch (error) {
    console.log(error);
    yield put({ type: SIGNUP_FAILED, error });
  }
}


// <<<ACTIONS>>>
export const login = (creds, history) => ({ type: LOGIN_REQUEST, payload: creds, history });
export const signUp = (creds, history) => ({ type: SIGNUP_REQUEST, payload: creds });


// <<<WATCHERS>>>
export function* watchAuth() {
  yield takeEvery(LOGIN_REQUEST, onLogin);
  yield takeEvery(SIGNUP_REQUEST, onSignUp);

}
