import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import orderReducer, {OrderState} from './order/reducers';

export interface RootState {
    orderReducer: OrderState;
}

export default createStore(combineReducers<RootState>({
    orderReducer
}), applyMiddleware(thunk));