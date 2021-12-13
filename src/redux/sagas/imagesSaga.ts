import {addComment} from './../../utils/comments';
import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchImages} from '../../api/images';
import {Comment} from '../../components/interfaces';

import {
  ADD_COMMENT,
  FETCH_IMAGES,
  FETCH_IMAGES_FAILED,
  FETCH_IMAGES_SUCCESS,
  SAVE_COMMENT,
  ADD_COMMENT_TO_LIST,
} from '../actions';
import {store} from '../store';

export default function* imagesWatcherSaga() {
  yield takeEvery(FETCH_IMAGES, fetchImagesWorker);
  yield takeEvery(SAVE_COMMENT, addNewCommentWorker);
}
function* fetchImagesWorker(action: any): any {
  try {
    const images = yield call(() => fetchImages());

    if (Array.isArray(images)) {
      yield put({type: FETCH_IMAGES_SUCCESS, images});
    } else {
      yield put({type: FETCH_IMAGES_FAILED});
    }
  } catch (e) {
    yield put({type: FETCH_IMAGES_FAILED});
  }
}
function* addNewCommentWorker(action: any): any {
  let comments: Comment[] = yield addComment(
    action.payload.comments,
    action.payload.newComment,
  );
  const {images} = store.getState().imagesReducer;

  const index = images.findIndex(
    (element: Comment) => element.id == action.payload.imageId,
  );
  images[index].comments = comments;
  console.log('55555555 : ', action.payload);
  yield put({type: ADD_COMMENT_TO_LIST, payload: {comments}});
  yield put({type: ADD_COMMENT, payload: {images}});
}
