import {Comment} from './../../components/interfaces.d';
import {getComments} from '../../utils/comments';
import {call, put, takeEvery} from 'redux-saga/effects';

import {
  CLOSE_COMMENTS,
  DELETE_COMMENT,
  MODIFY_COMMENT,
  OPEN_COMMENTS,
  REMOVE_COMMENT,
  TOOGLE_COMMENTS,
  UPDATE_COMMENT,
  UPDATE_COMMENTS_LIST,
} from '../actions';
import {store} from '../store';

export default function* commentsListWatcherSaga() {
  yield takeEvery(TOOGLE_COMMENTS, commentsListsWorker);
  yield takeEvery(DELETE_COMMENT, deleteCommentWorker);
  yield takeEvery(UPDATE_COMMENT, updateCommentWorker);
}
function* commentsListsWorker(action: any): any {
  if (action.payload.operation === 'close') {
    yield put({type: CLOSE_COMMENTS});
  } else {
    const {images} = store.getState().imagesReducer;

    const comments = yield call(() => getComments(images, action.payload.id));

    yield put({
      type: OPEN_COMMENTS,
      payload: {comments, id: action.payload.id},
    });
  }
}
function* deleteCommentWorker(action: any): any {
  const {comment} = action.payload;
  let image = store.getState().imagesReducer.images[comment.imageId].comments;
  const {images} = store.getState().imagesReducer;

  image.splice(
    image.findIndex(
      (element: Comment) =>
        element.id == comment.id && element.content == comment.content,
    ),
    1,
  );

  images[comment.imageId].comments = image;

  yield put({
    type: REMOVE_COMMENT,
    payload: {images},
  });
  yield put({
    type: UPDATE_COMMENTS_LIST,
    payload: {comments: image},
  });
}

function* updateCommentWorker(action: any): any {
  const {updatedComment, imageId} = action.payload;
  let image = store.getState().imagesReducer.images[imageId].comments;

  const {images} = store.getState().imagesReducer;

  const index = image.findIndex(
    (element: Comment) => element.id == updatedComment.id,
  );
  image[index].content = updatedComment.content;
  images[imageId].comments = image;

  yield put({
    type: MODIFY_COMMENT,
    payload: {images},
  });
  yield put({
    type: UPDATE_COMMENTS_LIST,
    payload: {comments: image},
  });
}
