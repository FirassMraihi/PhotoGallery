import {put, takeEvery} from 'redux-saga/effects';
import {ADD_USER, CREATE_USER} from '../actions';
import {v4 as uuidv4} from 'uuid';

export default function* userWatcherSaga() {
  yield takeEvery(CREATE_USER, userWorker);
}
function* userWorker(action: any): any {
  let id = uuidv4();
  yield put({type: ADD_USER, payload: {id}});
}
