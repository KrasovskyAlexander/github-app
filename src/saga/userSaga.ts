import { call, put, takeEvery } from 'redux-saga/effects';

import { setUser } from '../store/actions/usersActions';
import { UserActionType } from '../types/userTypes';

const getUserFromApi = () => fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUserWorker(): any {
  try {
    const response = yield call(getUserFromApi);
    const json = yield call(() => new Promise(res => res(response.json())));
    yield put(setUser(json));
  } catch (error) {
    console.log(error);
  }
}

export function* userWatcher() {
    yield takeEvery(UserActionType.FETCH_USER, fetchUserWorker);
}
