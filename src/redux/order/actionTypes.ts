import { CarInterface } from './models';

export enum orderActionTypes {
    GET_AVAILABLE_CARS_PENDING = 'GET_AVAILABLE_CARS_PENDING',
    GET_AVAILABLE_CARS_SUCCESS = 'GET_AVAILABLE_CARS_SUCCESS',
    GET_AVAILABLE_CARS_FAILURE = 'GET_AVAILABLE_CARS_FAILURE',
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

export type OrderAction = OrderPendingAction | OrderFailureAction | OrderSuccessAction;