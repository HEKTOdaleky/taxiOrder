// Action Creators
import {
    orderActionTypes,
    OrderFailureAction,
    OrderPendingAction,
    OrderSuccessAction,
    SetOrderFailureAction, SetOrderPendingAction,
    SetOrderSuccessAction
} from './actionTypes';
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

export const setOrderSuccess = (): SetOrderSuccessAction => ({
    type: orderActionTypes.SET_ORDER_SUCCESS
});

export const setOrderFailure = (errorMessage: string): SetOrderFailureAction => ({
    errorMessage,
    type: orderActionTypes.SET_ORDER_FAILURE
});

export const setOrderPending = (): SetOrderPendingAction => ({
    type: orderActionTypes.SET_ORDER_PENDING
});