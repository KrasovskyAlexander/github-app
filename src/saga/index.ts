import { all } from 'redux-saga/effects';

import { userWatcher } from './userSaga';

function* rootWatcher () {
  yield all([userWatcher()]);
    
}

export default rootWatcher;
