import {
  ADD_COMMENT_TO_LIST,
  CLOSE_COMMENTS,
  OPEN_COMMENTS,
  UPDATE_COMMENTS_LIST,
} from '../actions';

const initialState = {
  isOpen: false,
  comments: [],
  id: null,
};

export default function commentsListReducer(state = initialState, action: any) {
  switch (action.type) {
    case OPEN_COMMENTS:
      return {
        ...state,
        isOpen: true,
        comments: action.payload.comments,
        id: action.payload.id,
      };
    case CLOSE_COMMENTS:
      return {
        ...state,
        isOpen: false,
        comments: null,
        id: null,
      };
    case ADD_COMMENT_TO_LIST:
      return {
        ...state,
        comments: action.payload.comments,
      };
    case UPDATE_COMMENTS_LIST:
      return {
        ...state,
        comments: action.payload.comments,
      };
    default:
      return state;
  }
}
