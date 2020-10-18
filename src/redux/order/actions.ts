import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {fetchAvailableCarsPending, fetchAvailableCarsSuccess, fetchAvailableCarsFailure} from './actionCreators';
import {queryPost} from '../../api/apiConfig';
import {RequestCarInterface} from './models';

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

// export const createOrder = (address: RequestCarInterface): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
//     (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
//         dispatch(fetchAvailableCarsPending());
//         return queryPost(`/`, address).then(({data}) => {
//             dispatch(fetchAvailableCarsSuccess(data && data.data['crews_info']));
//         }, () => {
//             dispatch(fetchAvailableCarsFailure('error'));
//         });
//     };