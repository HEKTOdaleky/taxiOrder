// Action Creators
import {orderActionTypes, OrderFailureAction, OrderPendingAction, OrderSuccessAction} from './actionTypes';
import {CarInterface} from './models';

export const fetchAvailableCarsSuccess = (carsData: CarInterface[]): OrderSuccessAction => ({
    carsData,
    type: orderActionTypes.GET_AVAILABLE_CARS_SUCCESS
});

export const fetchAvailableCarsFailure = (errorMessage: string): OrderFailureAction => ({
    errorMessage,
    type: orderActionTypes.GET_AVAILABLE_CARS_FAILURE
});

export const fetchAvailableCarsPending = (): OrderPendingAction => ({
    type: orderActionTypes.GET_AVAILABLE_CARS_PENDING
});