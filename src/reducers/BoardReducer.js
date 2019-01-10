import {
  RECIEVE_NEW_BOARD,
} from './../actions/ActionTypes'

const initialState = []

export default function (state=initialState, action) {
  switch (action.type) {
    case RECIEVE_NEW_BOARD:
      console.log('state', state);
      console.log('action.payload', action.payload);
      // const { title, id } = action.payload;
      // return {
      //   ...state,
      //   title,
      //   id,
      // }
      return [...state, action.payload];
    default:
      return state;
  }
}
