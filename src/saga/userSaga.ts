import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { setUser } from '../store/actions/usersActions';
import { IUser } from '../types/UserModel';
import { UserActionType } from '../types/userTypes';

const getUserFromApi = () => axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");

function* fetchUserWorker() {
  try {
    const response: Response = yield call(getUserFromApi);
    const json: IUser[] = yield call(() => new Promise(res => res(response.json())));
    yield put(setUser(json));
  } catch (error) {
    console.log(error);
  }
}

export function* userWatcher() {
    yield takeEvery(UserActionType.FETCH_USER, fetchUserWorker);
}
