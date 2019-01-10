import Store from './../Store';
import {
  SELECT_ACTIVE_BOARD,
} from './../actions/ActionTypes';

const initialState = {
  id: null,
  title: null,
}

export default function(state=initialState, action) {
  switch(action.type) {
    case SELECT_ACTIVE_BOARD:
      const boardsCollection = Store.getState().boardsCollection;
      const selectedBoard = boardsCollection.find(item => item);
      return {
        ...state,
        id: selectedBoard.id,
        title: selectedBoard.title,
      }
      
    default:
      return state;
  }
}

