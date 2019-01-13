import { 
  SUBMIT_NEW_BOARD,
  STORE_NEW_BOARD_TO_COLLECTION,
} from './ActionTypes';
import Store from './../Store';

export default function submitNewBoard(title) {
  return (dispatch) => {
    dispatch({ type: SUBMIT_NEW_BOARD, payload: title });
    const newBoard = {
      title: Store.getState().newBoard.title,
      id: Store.getState().newBoard.id,
    };
    dispatch({ type: STORE_NEW_BOARD_TO_COLLECTION, payload: newBoard })
  }
}
