import {
  ADD_COMMENT,
  FETCH_IMAGES_SUCCESS,
  REMOVE_COMMENT,
  MODIFY_COMMENT,
} from '../actions';

const initialState = {
  images: [],
};

export default function imagesReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.images,
      };
    case ADD_COMMENT:
      return {
        ...state,
        images: action.payload.images,
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        images: action.payload.images,
      };
    case MODIFY_COMMENT:
      return {
        ...state,
        images: action.payload.images,
      };
    default:
      return state;
  }
}
