import {ADD_USER} from '../actions';

const initialState = {
  user: {},
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload.id,
      };

    default:
      return state;
  }
}
