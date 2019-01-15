import { combineReducers } from 'redux';
import CreateBoardReducer from './CreateBoardReducer';
import BoardReducer from './BoardReducer';
import ActiveBoardReducer from './ActiveBoardReducer';
import ActiveBoardDataReducer from './ActiveBoardDataReducer';
import { reducer as formReducer } from 'redux-form';

const RootReducer = combineReducers({
  form: formReducer,
  newBoard: CreateBoardReducer,
  boardsCollection: BoardReducer,
  activeBoard: ActiveBoardReducer,
  activeBoardData: ActiveBoardDataReducer,
});

export default RootReducer;
