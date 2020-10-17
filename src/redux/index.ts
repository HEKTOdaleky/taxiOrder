import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export interface RootState {

}

export default createStore(combineReducers<RootState>({

}), applyMiddleware(thunk));