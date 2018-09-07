import { call, put, takeEvery } from 'redux-saga/effects';

import { getWagers } from '../../http/waggers';

const init = {
  isLoading: false,
};

// <<<CONSTS>>>
const FETCH_WAGERS_REQUEST = 'FETCH_WAGERS_REQUEST';
const FETCH_WAGERS_SUCCESS = 'FETCH_WAGERS_SUCCESS';
const FETCH_WAGERS_FAILED = 'FETCH_WAGERS_FAILED';


// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case FETCH_WAGERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WAGERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wagers: action.payload,
      };
    case FETCH_WAGERS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* fetchWagers() {
  try {
    const data = yield call(getWagers);
    yield put({ type: FETCH_WAGERS_SUCCESS, payload: data});
  } catch (error) {
    console.log(error);
    yield put({ type: FETCH_WAGERS_FAILED, error });
  }
}



// <<<ACTIONS>>>
export const fetchWagersRequest = () => ({ type: FETCH_WAGERS_REQUEST });
export const test = () => ({ type: 'RESET' });


// <<<WATCHERS>>>
export function* watchGetWagers() {
  yield takeEvery(FETCH_WAGERS_REQUEST, fetchWagers);

}
