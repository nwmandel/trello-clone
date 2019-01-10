import { CREATE_NEW_BOARD } from './ActionTypes';

export default function createBoard() {
  return {
    type: CREATE_NEW_BOARD,
    payload: true,
  }
}
