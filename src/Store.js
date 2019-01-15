import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './utils';
import throttle from 'lodash/throttle';

const middleware = applyMiddleware(thunk);
const persistState = loadState();

const Store =  createStore(
    RootReducer,
    persistState,
    composeWithDevTools(middleware)
);

Store.subscribe(throttle(() => {
    saveState({
        boardsCollection: Store.getState().boardsCollection,
        activeBoard: Store.getState().activeBoard,
        newBoard: Store.getState().newBoard,
        activeBoardData: Store.getState().activeBoardData,
    })
}, 1000));

export default Store;
