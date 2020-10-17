import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {fetchAvailableCarsPending, fetchAvailableCarsSuccess, fetchAvailableCarsFailure} from './actionCreators';
import {queryGet} from '../../api/apiConfig';

// thunk action
export const getAvailableCarsData = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
    (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(fetchAvailableCarsPending());
        return queryGet(`/find`).then((response: any) => {
            dispatch(fetchAvailableCarsSuccess(response.data));
        }, () => {
            dispatch(fetchAvailableCarsFailure('error'));
        });
    };
