import { combineReducers } from 'redux';
import CreateBoardReducer from './CreateBoardReducer';
import BoardReducer from './BoardReducer';
import ActiveBoardReducer from './ActiveBoardReducer';
import { reducer as formReducer } from 'redux-form';
import ListReducer from './ListReducer';

const RootReducer = combineReducers({
  form: formReducer,
  newBoard: CreateBoardReducer,
  boardsCollection: BoardReducer,
  activeBoard: ActiveBoardReducer,
  listItems: ListReducer,
});

export default RootReducer;
