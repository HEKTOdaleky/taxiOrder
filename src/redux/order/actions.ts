import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {
    fetchAvailableCarsPending,
    fetchAvailableCarsSuccess,
    fetchAvailableCarsFailure,
    setOrderSuccess,
    setOrderFailure, setOrderPending
} from './actionCreators';
import {queryPost} from '../../api/apiConfig';
import {OrderInterface, RequestCarInterface} from './models';

// thunk action
export const getAvailableCarsData = (address: RequestCarInterface): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
    (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(fetchAvailableCarsPending());
        return queryPost(`/`, address).then(({data}) => {
            dispatch(fetchAvailableCarsSuccess(data && data.data['crews_info']));
        }, () => {
            dispatch(fetchAvailableCarsFailure('error'));
        });
    };

export const createOrder = (data: OrderInterface): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
    (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(setOrderPending());
        return queryPost(`/create`, data).then(() => {
            dispatch(setOrderSuccess());
        }, () => {
            dispatch(setOrderFailure('error'));
        });
    };