import {all} from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import commentsListSaga from './commentsListSaga';
import userSaga from './userSaga';

export default function* rootSaga(): any {
  const result = yield all([imagesSaga(), commentsListSaga(), userSaga()]);
}
