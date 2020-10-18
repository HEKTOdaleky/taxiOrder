import { CarInterface } from './models';

export enum orderActionTypes {
    GET_AVAILABLE_CARS_PENDING = 'GET_AVAILABLE_CARS_PENDING',
    GET_AVAILABLE_CARS_SUCCESS = 'GET_AVAILABLE_CARS_SUCCESS',
    GET_AVAILABLE_CARS_FAILURE = 'GET_AVAILABLE_CARS_FAILURE',

    SET_ORDER_PENDING = 'SET_ORDER_PENDING',
    SET_ORDER_SUCCESS = 'SET_ORDER_SUCCESS',
    SET_ORDER_FAILURE = 'SET_ORDER_FAILURE',
}

export interface OrderPendingAction {
    type: orderActionTypes.GET_AVAILABLE_CARS_PENDING;
}

export interface OrderFailureAction {
    type: orderActionTypes.GET_AVAILABLE_CARS_FAILURE;
    errorMessage: string;
}

export interface OrderSuccessAction {
    type: orderActionTypes.GET_AVAILABLE_CARS_SUCCESS;
    carsData: CarInterface[];
}

export interface SetOrderPendingAction {
    type: orderActionTypes.SET_ORDER_PENDING;
}

export interface SetOrderFailureAction {
    type: orderActionTypes.SET_ORDER_FAILURE;
    errorMessage: string;
}

export interface SetOrderSuccessAction {
    type: orderActionTypes.SET_ORDER_SUCCESS;
}

export type OrderAction = OrderPendingAction | OrderFailureAction | OrderSuccessAction |
    SetOrderPendingAction | SetOrderFailureAction | SetOrderSuccessAction;