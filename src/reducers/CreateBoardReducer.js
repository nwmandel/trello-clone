import { 
  CANCEL_NEW_BOARD, 
  CREATE_NEW_BOARD,
  SUBMIT_NEW_BOARD, 
} from '../actions/ActionTypes';
import uniqueId from 'lodash/uniqueId'

const initialState = { 
  isBoardOpen: false, 
  title: null,
  id: null,
  success: false,
}

export default function(state=initialState, action) {
  switch (action.type) {
    case CREATE_NEW_BOARD:
      return {
        ...state,
        title: null,
        isBoardOpen: true,
        id: null,
        success: false,
      }
    
    case CANCEL_NEW_BOARD:
      return {
        ...state,
        title: null,
        isBoardOpen: false,
        id: null,
        success: false,
      }
    
    case SUBMIT_NEW_BOARD:
      return {
        ...state,
        title: action.payload,
        isBoardOpen: false,
        id: uniqueId(''),
      }
    
    default:
      return state;
  }
}
